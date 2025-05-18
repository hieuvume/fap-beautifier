# Tech Context

## Technologies Used
- Chrome Extension API
- React.js for UI development
- TypeScript for type safety
- Vite as build tool
- Metronic Tailwind React (v9.2.0) as UI template
- CSS/SCSS for styling
- React Query for API data fetching
- React Router for navigation
- React Helmet for document head management
- Supabase for authentication
- Google OAuth integration

## Development Setup
- Node.js and npm/yarn for package management
- Chrome browser for extension testing
- Chrome Developer Tools for debugging
- VSCode as recommended IDE
- Extension reloader for development iterations
- React Developer Tools for component inspection

## Technical Constraints
- Chrome browser compatibility requirements
- Performance considerations for DOM manipulation
- Content Security Policy restrictions for extensions
- Cross-origin limitations in Chrome extensions
- Maintaining compatibility with school website's functionality (specifically fap.fpt.edu.vn)
- Potential changes to the school website structure

## Dependencies
- React and React DOM
- TypeScript
- Metronic Tailwind React template
- Chrome Extension API types
- DOM manipulation utilities
- Tailwind CSS for styling
- React Query for data management
- React Router for navigation
- React Helmet for document head management
- Supabase for authentication features
- Google Calendar API integration

## Tool Usage Patterns
- Vite for building the extension
- Chrome Extension Manifest V3 for extension configuration
- Content scripts for website interaction
- React components for UI rendering
- Tailwind utility classes for styling
- TypeScript for type checking and code organization
- Provider pattern for context sharing across the application
- Component-based architecture following Metronic patterns

## Project Structure
- `public/`: Contains static assets and extension manifest
  - `manifest.json`: Defines extension permissions and configuration
  - `media/`: Static media assets for the extension
  
- `src/`: Main source code directory
  - `app/`: Main React application
    - `auth/`: Authentication related components and providers
    - `components/`: UI components 
    - `config/`: Configuration files
    - `css/`: Styling files
    - `hooks/`: Custom React hooks
    - `i18n/`: Internationalization support
    - `layouts/`: Layout components
    - `lib/`: Utility libraries
    - `pages/`: Page components
    - `partials/`: Partial components
    - `providers/`: Context providers
    - `routing/`: Routing configuration
  - `background/`: Background scripts for the extension
  - `content/`: Content scripts that interact with the target website
  - `popup/`: Extension popup interface

---
*Update this document as the technical context changes.* 