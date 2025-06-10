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
- **React Intl** for internationalization and multilingual support
- **ICU Message Format** for advanced text formatting and pluralization

## Development Setup
- Node.js and npm/yarn for package management
- Chrome browser for extension testing
- Chrome Developer Tools for debugging
- VSCode as recommended IDE
- Extension reloader for development iterations
- React Developer Tools for component inspection
- **i18n Ally** VSCode extension for translation management (recommended)
- **Translation validation tools** for ensuring key consistency

## Technical Constraints
- Chrome browser compatibility requirements
- Performance considerations for DOM manipulation
- Content Security Policy restrictions for extensions
- Cross-origin limitations in Chrome extensions
- Maintaining compatibility with school website's functionality (specifically fap.fpt.edu.vn)
- Potential changes to the school website structure
- **Language pack size** considerations for extension bundle optimization
- **Real-time language switching** without application restart requirements

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
- **react-intl** - Comprehensive internationalization library
- **@types/react-intl** - TypeScript definitions for React Intl
- **ICU message format** - Advanced message formatting support

## Tool Usage Patterns
- Vite for building the extension
- Chrome Extension Manifest V3 for extension configuration
- Content scripts for website interaction
- React components for UI rendering
- Tailwind utility classes for styling
- TypeScript for type checking and code organization
- Provider pattern for context sharing across the application
- Component-based architecture following Metronic patterns
- **React Intl Provider** for wrapping the application with i18n context
- **useIntl hook** for accessing translation functions in components
- **Structured message keys** following namespace conventions
- **JSON language files** for translation storage and management

## Internationalization (i18n) Implementation

### Technical Architecture
- **React Intl Library**: Industry-standard i18n solution for React applications
- **Provider-Based**: `IntlProvider` wraps the entire application
- **Hook-Based Access**: Components use `useIntl()` for translation access
- **Type Safety**: Full TypeScript integration with message ID validation

### Language Support
- **Primary Language**: Vietnamese (vi)
- **Secondary Language**: English (en)
- **Extensible**: Architecture supports easy addition of new languages
- **RTL Support**: Ready for right-to-left languages if needed in future

### Message Management
- **File Structure**: Separate JSON files per language (`en.json`, `vi.json`)
- **Key Organization**: Structured namespace system for maintainability
- **Validation**: Automated checks ensure all keys exist in all language files
- **Hot Reloading**: Development environment supports real-time translation updates

### Advanced Features
- **Parameter Substitution**: Dynamic content injection in translations
- **Pluralization**: ICU message format for count-based messages
- **Date/Time Formatting**: Locale-aware formatting
- **Number Formatting**: Currency and numeric localization
- **HTML Content**: Rich text translation support

### Performance Considerations
- **Lazy Loading**: Language packs loaded on demand
- **Bundle Optimization**: Only required translations included in builds
- **Caching**: Efficient memory usage for translation data
- **Minimal Bundle Impact**: i18n adds minimal overhead to application size

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
    - `i18n/`: **Internationalization support**
      - `messages/`: Translation files (`en.json`, `vi.json`)
      - `providers/`: i18n context providers
      - `types/`: TypeScript definitions for translations
    - `layouts/`: Layout components
    - `lib/`: Utility libraries
    - `pages/`: Page components
    - `partials/`: Partial components
    - `providers/`: Context providers
    - `routing/`: Routing configuration
  - `background/`: Background scripts for the extension
  - `content/`: Content scripts that interact with the target website
  - `popup/`: Extension popup interface

## Quality Assurance for i18n

### Translation Standards
- **Completeness**: All user-facing text must have translations
- **Consistency**: Terminology consistency across all features
- **Context Awareness**: Translations consider UI context and user flow
- **Cultural Sensitivity**: Appropriate language for academic environment

### Testing Requirements
- **Multi-language Testing**: UI testing in both Vietnamese and English
- **Dynamic Content**: Testing parameter substitution and pluralization
- **Performance Testing**: Language switching performance validation
- **Accessibility**: Ensuring translations maintain accessibility standards

### Maintenance Practices
- **Documentation**: Comprehensive tracking of i18n implementation
- **Key Management**: Systematic approach to adding/modifying translation keys
- **Review Process**: Translation changes require review and testing
- **Version Control**: Translation changes tracked in version control system

---
*Update this document as the technical context changes.* 