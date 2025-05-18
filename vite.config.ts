import { fileURLToPath, URL } from 'node:url';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig, Plugin } from 'vite';
import fs from 'node:fs';
import path from 'node:path';

// Get directory using import.meta.url (for ES modules)
const __dirname = path.dirname(fileURLToPath(import.meta.url));

/**
 * Custom plugin to generate asset-manifest.json for Chrome extension compatibility
 * Improves error handling and asset discovery
 */
function generateAssetManifest(): Plugin {
  return {
    name: 'generate-asset-manifest',
    apply: 'build',
    closeBundle() {
      try {
        const outDir = 'dist';
        const manifestPath = path.resolve(outDir, 'asset-manifest.json');
        const assetsDir = path.join(outDir, 'assets');
        
        // Ensure the assets directory exists
        if (!fs.existsSync(assetsDir)) {
          console.error('⚠️ Assets directory not found at:', assetsDir);
          return;
        }

        // Read the generated JS and CSS files
        const assetFiles = fs.readdirSync(assetsDir);
        const jsFiles = assetFiles
          .filter(file => file.endsWith('.js'))
          .map(file => `/assets/${file}`);

        const cssFiles = assetFiles
          .filter(file => file.endsWith('.css'))
          .map(file => `/assets/${file}`);

        if (jsFiles.length === 0) {
          console.warn('⚠️ No JavaScript files found in assets directory');
        }
        
        if (cssFiles.length === 0) {
          console.warn('⚠️ No CSS files found in assets directory');
        }

        // Create manifest structure matching expected format
        const manifest = {
          files: {
            'main.js': jsFiles.find(file => file.includes('index') || file.includes('main')) || jsFiles[0] || '',
            'main.css': cssFiles.find(file => file.includes('index') || file.includes('main')) || cssFiles[0] || '',
          },
          entrypoints: [...cssFiles, ...jsFiles]
        };

        fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
        console.log('✅ Generated asset-manifest.json with', jsFiles.length, 'JS and', cssFiles.length, 'CSS files');
      } catch (error) {
        console.error('❌ Error generating asset-manifest.json:', error);
      }
    }
  };
}

export default defineConfig({
  plugins: [react(), tailwindcss(), generateAssetManifest()],
  base: '/',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    chunkSizeWarningLimit: 3000,
    emptyOutDir: true,
    sourcemap: process.env.NODE_ENV !== 'production',
    outDir: 'dist',
    // Use proper minification in production for better performance
    minify: process.env.NODE_ENV === 'production',
    rollupOptions: {
      output: {
        manualChunks: undefined,
        inlineDynamicImports: true,
      }
    }
  },
});
