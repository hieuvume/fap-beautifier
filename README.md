# FAP Beautifier - Chrome Extension

A modern UI enhancement for the FPT University Academic Portal.

## Overview

FAP Beautifier transforms the original FPT Academic Portal interface into a modern, responsive design while preserving all functionality. This Chrome extension works by capturing the original page content, extracting the data, and rendering a beautiful new interface using React.

## Features

- Complete UI transformation with modern design
- Responsive layout for all devices
- Enhanced readability and usability
- Easy toggle between enhanced and original interfaces
- Support for major FPT Academic Portal pages:
  - Schedule
  - Grades
  - Attendance
  - Curriculum
  - News and announcements
  - And more...

## Development Setup

### Prerequisites

- Node.js 18+ and npm
- Chrome browser

### Installation

1. Clone this repository:
   ```bash
   git clone <repository-url>
   cd fap-beautifier
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Build the extension:
   ```bash
   npm run build:extension
   ```

4. Load the extension in Chrome:
   - Open Chrome and navigate to `chrome://extensions/`
   - Enable "Developer mode" (toggle in the top-right corner)
   - Click "Load unpacked" and select the `dist` directory from this project

### Development Workflow

For active development with hot reloading:

```bash
npm run watch:extension
```

This will watch for changes and rebuild both the React app and the extension files.

## Project Structure

- `src/app/` - React application
- `src/background/` - Chrome extension background scripts
- `src/content/` - Chrome extension content scripts
- `src/popup/` - Extension popup UI
- `scripts/` - Build and utility scripts

## How It Works

1. The content script captures the original FAP HTML content
2. It clears the page and prepares a React root container
3. The React application parses the captured content
4. Specialized components render the data in a modern interface

## Technologies Used

- React 19 with TypeScript
- Vite for bundling
- TailwindCSS and Bootstrap for styling
- Chrome Extension Manifest V3

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Thanks to the FPT University for providing the Academic Portal
- Special thanks to all contributors and users for their feedback and support
