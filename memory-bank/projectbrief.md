# FAP Beautifier Extension - Project Brief

## Overview
FAP Beautifier is a Chrome extension that enhances the user interface of the FPT University Academic Portal (fap.fpt.edu.vn). It works by capturing the original HTML content, extracting essential data, and rendering a new, more modern interface using React.

## Core Requirements

1. **Completely replace the FAP interface** with a modern, responsive design
2. **Preserve all functionality** of the original FAP portal
3. **Support all major FAP pages** including schedule, grades, attendance, etc.
4. **Allow users to toggle** between the enhanced and original interfaces
5. **Maintain performance** by efficiently parsing and rendering FAP data

## Technical Approach

The extension operates by:
1. Capturing the original HTML from FAP via content scripts
2. Clearing the page and creating a React root
3. Parsing the captured HTML to extract structured data
4. Rendering a new interface with React components
5. Allowing user interaction with the data

## Key Components

1. **Content Script** - Captures FAP HTML and prepares for React
2. **Background Script** - Handles extension setup and asset injection
3. **React App** - Renders the new interface
4. **Data Parsers** - Extract structured data from FAP HTML
5. **Custom UI Components** - Display data in a modern interface

## Technology Stack

- **Framework**: React with TypeScript
- **Build System**: Vite
- **Styling**: Tailwind CSS + Bootstrap components
- **Extension Framework**: Chrome Extension Manifest V3
- **Parsing**: Custom DOM manipulation

## Improvements Over Previous Version

1. **TypeScript Integration** - Type safety throughout the codebase
2. **Modular Architecture** - Better separation of concerns
3. **Enhanced Data Extraction** - More robust parsing of FAP data
4. **Improved Asset Management** - Custom plugin for handling build assets
5. **Modern UI Components** - Utilizing the latest design patterns

## Goals
- Improve user experience on the FPT Academic Portal
- Create a more modern and visually appealing interface
- Maintain all existing functionality while enhancing visual presentation
- Add useful features like Google Calendar integration
- Provide personalization options for students
- Ensure performance is maintained or improved
- Make academic information more accessible and organized

## Scope
- Chrome extension development targeting fap.fpt.edu.vn
- Content extraction from the original FPT Academic Portal
- UI redesign using Metronic Tailwind React template
- Implementation of content rendering in new UI
- Authentication integration with Supabase and Google OAuth
- Google Calendar API integration for schedule management
- Data management using React Query
- Comprehensive provider architecture for various system capabilities

---
*This document is the source of truth for project scope and requirements. Update as the project evolves.* 