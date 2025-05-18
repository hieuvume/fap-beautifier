# System Patterns

## System Architecture
- Chrome Extension with content script, background script, and popup components
- React.js for UI rendering using Metronic template as a base
- Provider-based architecture for various system capabilities (auth, settings, theme, i18n, etc.)
- Content extraction and transformation pipeline
- DOM manipulation for replacing original content with enhanced UI

## Key Technical Decisions
- Using Chrome Extension API for website interaction with FPT Academic Portal
- Leveraging React.js with Metronic template for UI rendering
- Implementing a content capture → process → render pipeline
- Storing original content in window._data for processing
- Using Supabase for authentication with Google OAuth integration
- Implementing React Query for data management
- Complete DOM replacement rather than partial modifications

## Chrome Extension Implementation
- **Content Script (src/content/index.ts)**
  - Executes when user visits a supported FAP URL
  - Captures original HTML content and stores in window._data
  - Checks if extension is enabled via chrome.storage.local
  - Modifies DOM to prepare for React app injection
  - Creates a React root element that replaces the entire body content
  - Sets up minimal head content for React app

- **Background Script (src/background/index.ts)**
  - Manages extension lifecycle and global state
  - Registers content scripts for specific FAP URLs
  - Tracks extension enabled/disabled state in chrome.storage.local
  - Handles script registration/unregistration based on extension state
  - Manages message passing between different extension components
  - Reloads tabs when extension state changes

- **Extension State Management**
  - Extension state (enabled/disabled) stored in chrome.storage.local
  - Content script checks state before modifying DOM
  - Background script registers/unregisters scripts based on state
  - Popup interface allows toggling extension state
  - State changes trigger tab reload to reflect changes immediately

- **Extension Activation Flow**
  1. Background script registers content script on install/startup
  2. Content script executes on supported FAP pages
  3. Content script checks extension state
  4. If enabled, content script captures original content and prepares DOM
  5. React scripts execute and render new interface
  6. React components extract and process data from window._data
  7. Enhanced UI replaces original content

## Design Patterns in Use
- Content Script Pattern for website interaction
- Provider Pattern for context and state management across the application
- Component-based architecture for UI elements
- Data extraction and transformation pipeline
- Query-based data fetching with React Query
- Routing with React Router for navigation

## Component Relationships
- Background Script: Manages extension lifecycle and global state
- Content Script: Interacts with webpage DOM, captures content, injects React
- React App: Processes captured data and renders new UI
  - AuthProvider: Manages authentication state and operations
  - SettingsProvider: Handles user preferences and settings
  - ThemeProvider: Manages theme selection and application
  - I18nProvider: Handles internationalization
  - QueryProvider: Manages data fetching and caching
  - ModulesProvider: Handles feature modules management
- UI Components: Renders specific parts of the website with enhanced styling

## Critical Implementation Paths
- Content extraction must capture all necessary data from the FPT Academic Portal
- DOM replacement must be comprehensive to avoid UI inconsistencies
- Authentication flow must properly integrate with both Google OAuth and FPT portal
- React rendering must maintain performance with potentially large datasets
- Google Calendar integration for student schedules and events
- Style integration must handle conflicts between original and new styles
- All original functionality must be preserved after transformation

## Component Architecture

### Component Organization
Components in the project are organized following a feature-first approach. Each major feature has its own directory structure with components grouped by functionality.

**Example pattern:**
```
src/app/pages/[feature]/
  - components/
    - [component-group]/
      - index.ts             # Exports all components
      - [component-name].tsx # Individual component files
  - hooks/
  - utils/
  - [feature-page].tsx
```

### Component Declaration Style
All components use a consistent declaration style with arrow function expressions and separate named exports:

```typescript
const ComponentName = (props: ComponentNameProps) => {
  // Component implementation
  return (
    // JSX
  );
};

export { ComponentName };
```

This pattern is consistently applied across all components for improved readability and maintainability.

### Component Breakdown Patterns
We follow a modular approach to components, breaking down large components into smaller, focused ones:

1. **Container Components**: Handle logic, data fetching, and state management
   - Example: `WeeklySchedule` in `schedule-of-week-page.tsx`

2. **Presentational Components**: Handle UI rendering based on props
   - Examples: `ScheduleControls`, `ScheduleTable`, `ScheduleStats` in the `weekly-schedule` directory

3. **Utility Components**: Small, reusable UI elements
   - Example: `ShiftCard` in `schedule-table.tsx`

### Structure for Complex Components
For complex features, we use a nested directory structure:

```
components/
  feature-name/
    index.ts              # Re-exports all components
    feature-component.tsx # Main component
    subcomponents/
      subcomponent1.tsx
      subcomponent2.tsx
```

Example: 
- `weekly-schedule/` contains `schedule-controls.tsx`, `schedule-table.tsx`, etc.
- `import-calendar/` contains `shift-selector.tsx`, `calendar-actions.tsx`, etc.

## Naming Conventions

### File Naming
- **Component Files**: Use kebab-case for all component files
  - Example: `schedule-controls.tsx`, not `ScheduleControls.tsx`
  
- **Directory Names**: Use kebab-case for directory names
  - Example: `weekly-schedule/`, not `WeeklySchedule/`

- **Export Names**: Use PascalCase for React component exports
  - Example: `export { ScheduleControls };`

### Component Props
Props interfaces should follow this pattern:
```typescript
interface ComponentNameProps {
  // Props
}

const ComponentName = ({ prop1, prop2 }: ComponentNameProps) => {
  // Component implementation
};

export { ComponentName };
```

## State Management

### Local Component State
Use React's useState and useEffect hooks for component-level state management.

### Feature-level State
For feature-level state shared across multiple components, we use custom hooks:
- Example: `useScheduleOfWeek()` manages data and state for the schedule feature

## Data Fetching Pattern

### API Access
Components fetch data through custom hooks that encapsulate API logic.

Example from `useScheduleOfWeek`:
```typescript
const fetchScheduleData = async (year: string, week: string) => {
  // Implementation that fetches data from API
};
```

### HTML Parsing
For dealing with legacy HTML-based APIs, we use DOMParser:

```typescript
const parser = new DOMParser();
const doc = parser.parseFromString(html, 'text/html');
// Extract data from parsed document
```

## UI Patterns

### Responsive Design
- Use Tailwind's responsive prefixes (sm, md, lg, xl) for different screen sizes
- Design mobile-first, then add breakpoint-specific styles

### Component Communication
- Parent to Child: Props
- Child to Parent: Callback functions passed as props
- Example: 
  ```tsx
  <ScheduleControls 
    onYearChange={handleYearChange} 
    onWeekChange={handleWeekChange}
  />
  ```

### Styling
- Use Tailwind CSS utility classes
- Use the `cn()` utility for conditional class names:
  ```tsx
  className={cn(
    "base-classes", 
    condition && "conditional-classes"
  )}
  ```

## Workflow Rules & Legacy Code Handling

### Legacy Code Reference
- The `old-version/` directory contains legacy code that should be used **only as reference**
- When implementing new features, study the legacy code to understand functionality but **do not directly copy**
- Extract business logic concepts, data structures, and workflows from legacy code
- Re-implement features following current project architecture and style guidelines

### Project UI Component Usage
- Always use the current project's UI components from `app/components/ui/`
- Prefer Shadcn UI components like Button, Dialog, and Card
- For complex UI patterns, reference the existing implementations in the project
- Do not import or use UI components from the old-version directory
- Match the current project's look and feel using Tailwind CSS utilities

### Feature Implementation Process
1. **Analysis**: Study the legacy code to understand the feature requirements
2. **Planning**: Break down the feature into components following the project's component architecture
3. **Design**: Create the component structure with proper typing and props interfaces
4. **Implementation**: Build the feature using current project patterns and UI components
5. **Integration**: Ensure the feature works within the current system architecture
6. **Testing**: Validate functionality against the original feature requirements

### Code Migration Guidelines
- Restructure and rewrite features completely rather than porting code directly
- Update all class-based components to functional components with hooks
- Replace jQuery/DOM manipulation with React state management
- Convert legacy API calls to use modern fetch patterns or React Query
- Ensure TypeScript type safety throughout implementation
- Follow the component breakdown patterns established in the project

### Development Standards
- Create smaller, focused components rather than large monolithic ones
- Implement proper error handling for all asynchronous operations
- Write self-documenting code with clear naming and structure
- Follow the established file naming and component declaration conventions
- Use TypeScript interfaces for all props and state
- Optimize for performance with proper memoization where necessary
- Test components in isolation before integration

## Debugging and Error Handling

### React Rendering Issues
- **Preventing Infinite Loops**: Use useRef to track component lifecycle instead of relying only on useEffect dependencies
- **Example pattern for preventing circular dependencies**:
  ```typescript
  // Track if component has already processed data
  const dataProcessedRef = useRef(false);
  
  useEffect(() => {
    // Skip if already processed
    if (dataProcessedRef.current) return;
    
    // Check for valid data
    if (someData) {
      // Mark as processed to prevent future updates
      dataProcessedRef.current = true;
      
      // Process data and update state
      setProcessedData(processData(someData));
    }
  }, [someData]);
  ```

- **Delayed Fallback Loading**: Use setTimeout to delay loading fallback data, giving real data a chance to load first
  ```typescript
  useEffect(() => {
    if (initialMountRef.current) {
      initialMountRef.current = false;
      
      const timer = setTimeout(() => {
        if (dataArray.length === 0) {
          // Load fallback data only if real data didn't load
          setDataArray(fallbackData);
        }
      }, 300);
      
      return () => clearTimeout(timer);
    }
  }, []);
  ```

### HTML Data Extraction
- **Multiple Selector Strategy**: Try multiple selectors to handle different HTML structures
  ```typescript
  // Try primary selector first
  let elements = document.querySelectorAll('.primary-selector');
  
  // Fall back to alternative selectors
  if (!elements || elements.length === 0) {
    elements = document.querySelectorAll('.alternative-selector');
  }
  ```

- **Flexible Regex Patterns**: Use case-insensitive and flexible regex for better matches
  ```typescript
  // Case-insensitive match with optional elements
  const match = text.match(/pattern (\d+)<br[^>]*>\(([^)]+)\)/i);
  ```

- **Fallback Data Structures**: Always provide fallback mock data when server data might be unavailable
- **Defensive Parsing**: Use null checking, error handling, and data validation
  ```typescript
  try {
    // Extract and process data
    if (element && element.textContent) {
      // Process data
    }
  } catch (error) {
    console.error('Error processing data:', error);
    // Use fallback data
  }
  ```

- **Debugging Logs**: Add strategic console logs for troubleshooting extraction issues
- **Multiple Extraction Attempts**: Try different approaches to extract data before giving up
  ```typescript
  // Try different patterns to match text
  let match = text.match(/primary-pattern/);
  if (!match) {
    match = text.match(/alternative-pattern/);
  }
  ```

These patterns help create more robust components that can handle edge cases, inconsistent data, and prevent common React rendering issues like maximum update depth exceeded errors.

---
*Update this document as the system evolves and new patterns emerge.* 