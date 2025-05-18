#!/usr/bin/env tsx

import fs from 'node:fs';
import path from 'node:path';
import { exec } from 'node:child_process';
import { promisify } from 'node:util';
import { fileURLToPath } from 'node:url';

const execAsync = promisify(exec);

// Get directory paths using import.meta.url instead of __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');
const srcDir = path.join(rootDir, 'src');

// Extension source files
const backgroundFile = path.join(srcDir, 'background', 'index.ts');
const contentScriptFile = path.join(srcDir, 'content', 'index.ts');
const popupHtmlFile = path.join(srcDir, 'popup', 'popup.html');
const popupReactFile = path.join(srcDir, 'popup', 'index.tsx');
const manifestFile = path.join(srcDir, 'manifest.json');

// Make sure directories exist
function ensureDirectoryExists(dir: string) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    console.log(`✅ Created directory: ${dir}`);
  }
}

// Copy a file
async function copyFile(src: string, dest: string) {
  try {
    if (!fs.existsSync(src)) {
      throw new Error(`Source file not found: ${src}`);
    }
    fs.copyFileSync(src, dest);
    console.log(`✅ Copied ${path.basename(src)} to ${dest}`);
    return true;
  } catch (err) {
    console.error(`❌ Failed to copy ${src} to ${dest}`, err);
    return false;
  }
}

// Compile TypeScript files
async function compileTypeScript(srcFile: string, destFile: string) {
  try {
    if (!fs.existsSync(srcFile)) {
      throw new Error(`Source file not found: ${srcFile}`);
    }
    
    // Use esbuild to compile TypeScript to JavaScript
    await execAsync(`npx esbuild ${srcFile} --bundle --outfile=${destFile}`);
    console.log(`✅ Compiled ${path.basename(srcFile)} to ${destFile}`);
    return true;
  } catch (err) {
    console.error(`❌ Failed to compile ${srcFile}`, err);
    return false;
  }
}

// Build React popup
async function buildReactPopup() {
  try {
    if (!fs.existsSync(popupReactFile)) {
      throw new Error(`Popup React entry point not found: ${popupReactFile}`);
    }
    
    // Use esbuild to build React popup with support for TSX and CSS imports
    await execAsync(`npx esbuild ${popupReactFile} --bundle --outfile=${path.join(distDir, 'popup.js')} --external:chrome --format=esm --loader:.tsx=tsx --loader:.ts=ts --loader:.jsx=jsx --loader:.js=js --loader:.css=css --jsx=automatic`);
    console.log(`✅ Built React popup from ${path.basename(popupReactFile)}`);
    return true;
  } catch (err) {
    console.error(`❌ Failed to build React popup:`, err);
    return false;
  }
}

// Copy the manifest file
async function copyManifestFile() {
  try {
    if (!fs.existsSync(manifestFile)) {
      throw new Error(`Manifest file not found: ${manifestFile}`);
    }
    
    const destManifestFile = path.join(distDir, 'manifest.json');
    await copyFile(manifestFile, destManifestFile);
    
    // Update paths in the manifest if needed
    try {
      const manifest = JSON.parse(fs.readFileSync(destManifestFile, 'utf8'));
      fs.writeFileSync(destManifestFile, JSON.stringify(manifest, null, 2));
      console.log('✅ Updated manifest.json');
    } catch (error) {
      console.error('❌ Error updating manifest.json:', error);
    }
    
    return true;
  } catch (err) {
    console.error('❌ Failed to process manifest file', err);
    return false;
  }
}

// Build the extension
async function buildExtension() {
  try {
    console.log('🔄 Building Chrome extension...');
    
    // Ensure the dist directory exists
    ensureDirectoryExists(distDir);
    
    // Compile TypeScript files
    const backgroundSuccess = await compileTypeScript(backgroundFile, path.join(distDir, 'background.js'));
    const contentSuccess = await compileTypeScript(contentScriptFile, path.join(distDir, 'contentScript.js'));
    
    // Build React popup
    const popupSuccess = await buildReactPopup();
    
    // Copy static files
    const popupHtmlSuccess = await copyFile(popupHtmlFile, path.join(distDir, 'popup.html'));
    // const manifestSuccess = await copyManifestFile();
    
    // Make sure we're copying the index.html file 
    // (it should already be in distDir since Vite builds there)
    const indexHtmlPath = path.join(distDir, 'index.html');
    if (!fs.existsSync(indexHtmlPath)) {
      console.error('⚠️ Warning: index.html not found in dist directory. Make sure to run "npm run build" before "npm run build:extension"');
    } else {
      console.log('✅ Found index.html in dist directory');
    }
    
    // Check for asset-manifest.json
    const assetManifestPath = path.join(distDir, 'asset-manifest.json');
    if (!fs.existsSync(assetManifestPath)) {
      console.error('⚠️ Warning: asset-manifest.json not found in dist directory. This may cause the extension to fail.');
    } else {
      console.log('✅ Found asset-manifest.json in dist directory');
    }
    
    if (backgroundSuccess && contentSuccess && popupSuccess && popupHtmlSuccess) {
      console.log('✅ Extension build completed successfully!');
    } else {
      console.error('⚠️ Extension build completed with warnings/errors. Please check the log above.');
    }
  } catch (err) {
    console.error('❌ Extension build failed:', err);
    process.exit(1);
  }
}

// Run the main build script
buildExtension(); 