# Active Context

## Current Focus
- ✅ **Schedule of Week Feature Implementation** - Completed migrating and improving the Schedule of Week feature from the old version to the new architecture with enhanced UI and functionality.
- ✅ **Student Grade Feature Implementation** - Completed implementing the Student Grade feature (Grade/StudentGrade.aspx) with an improved UI and data extraction.
- ✅ **Exam Schedule Feature Implementation** - Completed implementing the Exam Schedule feature with modern card-based UI, tabbed interface, and status indicators.
- ✅ **Transaction Report Feature Implementation** - Completed implementing the Transaction Report feature with modern UI, date range picker, and transaction table.
- ✅ **Course Groups Feature Implementation** - Completed implementing the Course Groups feature with modern table UI, user highlighting, and proper data extraction.
- ✅ **News Feature Implementation** - Completed implementing the News feature with modern card-based UI, pagination, and news detail view.
- ✅ **Activity Student Feature Implementation** - Completed implementing the Activity Student feature with room booking functionality, interactive grid, and booking management.
- **Chrome Extension Integration** - Working on the integration of React components with the Chrome extension infrastructure.
- **Component Pattern Application** - Apply the established component patterns and conventions to other features in the application.

## Recent Changes

### Activity Student Feature Implementation
We've successfully implemented the Activity Student room booking feature:

1. **Component Structure**:
   - Created proper page structure with `activity-student-page.tsx`
   - Implemented modular component structure with `room-grid.tsx`, `date-picker.tsx`, `book-room-dialog.tsx`, and `booking-list.tsx`
   - Created `use-activity-student.ts` custom hook for data extraction and state management
   - Used consistent TypeScript interfaces and component patterns

2. **Data Extraction**:
   - Implemented robust HTML parsing to extract room and slot data from FAP tables
   - Added flexible selectors to handle different HTML structures
   - Created room type determination from HTML colors and descriptions
   - Implemented fallback mechanisms with mock data when server data isn't available

3. **UI Implementation**:
   - Designed a grid-based interface showing room availability by time slot
   - Created room type legend with color coding
   - Implemented booking controls for campus, area, and date selection
   - Developed a booking dialog with purpose selection and student management
   - Added booking list for tracking existing reservations
   - Used consistent styling and UI components from the project's library

4. **Technical Improvements**:
   - Implemented state management with proper React hooks
   - Added error prevention mechanisms for infinite update loops
   - Created debugging logs for troubleshooting
   - Added fallback data mechanisms when server data is unavailable
   - Used React refs to control component lifecycle and prevent unnecessary rerenders

5. **UX Enhancements**:
   - Added tooltips for room information and availability
   - Implemented color coding for different room types
   - Created loading skeletons for better experience during data fetch
   - Added validation for the booking form
   - Included information alert with booking rules and restrictions

The implementation follows our established patterns for component organization, data extraction, and UI design. It demonstrates the use of proper component breakdown, custom hooks for data management, TypeScript for type safety, and responsive design with Tailwind CSS.

### News Feature Implementation
We've implemented the News feature for displaying news items and their details:

1. **Component Structure**:
   - Created proper component structure following project patterns
   - Implemented `news-page.tsx` for displaying the list of news items
   - Created `news-detail-page.tsx` for showing full article content
   - Developed custom hooks `use-news.ts` and `use-news-detail.ts` for data management
   - Defined TypeScript interfaces in `types.ts` for NewsItem and PaginationItem

2. **Data Extraction**:
   - Implemented news item extraction from HTML lists with title and date parsing
   - Created pagination handling with proper active state and disabled state detection
   - Developed form data submission for changing pagination pages
   - Added HTML parsing for news content with style improvements
   - Implemented proper view state management for form submissions

3. **UI Implementation**:
   - Created a card-based layout for the news list with proper spacing and borders
   - Added calendar icons for posted date visualization
   - Implemented pagination using Button components with styled active states
   - Developed news detail page with back navigation and formatted content display
   - Added empty state handling when no news is available

4. **Loading States**:
   - Implemented loading skeletons for both news list and detail pages
   - Added loading state visual indication during pagination
   - Created placeholder content with proper proportions and layout
   - Applied opacity changes during loading for better user feedback

5. **Navigation**:
   - Implemented proper routing between news list and detail pages
   - Added back button for returning to the news list from detail view
   - Used proper link components for news item navigation
   - Ensured scroll-to-top behavior when changing pages

This implementation follows our established patterns for component organization, data extraction, and UI design. It demonstrates the use of:
- Proper component breakdown and reusability
- Custom hooks for data management and extraction
- TypeScript for type safety and interfaces
- Modern navigation patterns with React Router
- Loading state management for better user experience
- Pagination implementation with proper state handling

### Course Groups Feature Implementation
We've implemented the Course Groups feature for displaying group member information:

1. **Component Structure**:
   - Created proper component structure following project patterns
   - Implemented `course-groups-page.tsx` as the main page component 
   - Created `use-course-groups.ts` hook for data extraction and management
   - Defined TypeScript interfaces in `types.ts` for GroupMember and GroupData

2. **Data Extraction**:
   - Extracted course name, group name, and member information from FAP HTML table
   - Added parsing of student names into surname, middle name, and given name components
   - Implemented detection of current user's roll number from the login information
   - Created clean data structure with proper typing

3. **UI Implementation**:
   - Created a header section showing course and group information with icons
   - Implemented a modern table displaying all group members
   - Added special highlighting for the current user in the list
   - Applied user icons and proper formatting for student names
   - Included count of total students in the group

4. **Styling Features**:
   - Used Card component with proper header, description, and table content
   - Applied the established table styling pattern with accent backgrounds for header
   - Implemented responsive design with ScrollArea for horizontal scrolling
   - Added proper spacing and visual hierarchy for information display

5. **UX Improvements**:
   - Created loading skeleton for better experience during data fetch
   - Added visual indicator ("You" badge) for the current user
   - Used consistent typography and color scheme throughout the component
   - Ensured proper mobile responsiveness

This implementation follows our established patterns for component organization, data extraction, and UI design. It demonstrates the use of:
- Proper component breakdown
- Custom hooks for data management
- TypeScript for type safety
- Responsive design with Tailwind
- Table styling patterns consistent with other features

### Exam Schedule Feature Implementation
We've implemented the Exam Schedule feature for displaying exam information:

1. **Component Structure**:
   - Created proper component structure following project patterns
   - Implemented `exam-schedule-page.tsx` as the main page component
   - Created `exam-card.tsx` for displaying individual exam information
   - Developed `use-exam-schedule.ts` hook for data extraction and management
   - Defined TypeScript interfaces and enums in `types.ts`

2. **Data Extraction**:
   - Implemented exam data extraction from the FAP HTML table
   - Added calculation of exam status (upcoming, ongoing, completed)
   - Calculated time remaining until upcoming exams
   - Implemented sorting of exams by date and time
   - Added grouping of exams by status for tab filtering

3. **UI Implementation**:
   - Created a tabbed interface for All/Upcoming/Completed exams
   - Implemented statistics cards showing exam counts and completion percentages
   - Designed modern card layout for exam details with status badges
   - Added loading skeletons for better UX during data fetching
   - Implemented empty state displays when no exams are found

4. **Styling Features**:
   - Used color-coded status badges for different exam states
   - Implemented dynamic exam type badges with appropriate colors
   - Created responsive card grid layout for different screen sizes
   - Added proper spacing and visual hierarchy for exam information
   - Implemented time formatting and remaining time display

5. **Status Visualization**:
   - Used color coding for different exam statuses (blue for upcoming, green for ongoing, gray for completed)
   - Added countdown display for upcoming exams
   - Implemented proper type badges with semantic colors based on exam type

This implementation follows our established patterns for component organization, data extraction, and UI design. It demonstrates the use of:
- Proper component breakdown
- Separation of concerns between data and presentation
- Custom hooks for data management
- TypeScript for type safety
- Responsive design with Tailwind
- Reusable UI components

### Help Feature Implementation
We've implemented the Help (FAQ) feature for the Report/Help.aspx page:

1. **Component Structure**:
   - Created proper component structure following project patterns
   - Implemented `help-page.tsx` as the main page component
   - Created `use-help.ts` hook for data extraction and management
   - Defined TypeScript interfaces in `types.ts`
   - Added barrel exports through `index.ts`

2. **Data Extraction**:
   - Implemented question extraction from FAP's HTML structure
   - Added dynamic answer fetching with proper loading states
   - Improved error handling for data extraction
   - Cleaned up HTML content from FAP to display properly

3. **UI Implementation**:
   - Created an accordion-style FAQ interface with toggle functionality
   - Added proper loading indicators for both the page and individual answers
   - Implemented smooth animations for expanding/collapsing questions
   - Used ScrollArea for better user experience with many questions
   - Applied consistent styling with other features

4. **Routing Configuration**:
   - Added route for "/Report/Help.aspx" in app-routing-setup.tsx
   - Ensured proper navigation and integration with the main layout

### SubjectFees Feature Refactoring
We've refactored the SubjectFees feature to better align with our component architecture:

1. **Component Structure Improvements**:
   - Extracted the table component into a dedicated `subject-fees-table.tsx` file
   - Moved the component to the `components` directory following project patterns
   - Created an `index.ts` barrel file for clean exports
   - Simplified the main page component by delegating UI logic to the table component

2. **Interface Refinement**:
   - Created a proper `SubjectFeesTableProps` interface for better type safety
   - Removed unnecessary props from the component interface
   - Ensured clear separation of responsibilities between components

3. **Organization Benefits**:
   - Better code maintainability with smaller, focused components
   - Easier navigation through the codebase with standardized structure
   - Improved component reusability potential
   - Cleaner main page component without complex UI logic

This refactoring demonstrates our approach to component organization, where we:
- Separate container and presentational components
- Use proper directory structures for components
- Apply clean interfaces for component props
- Follow the established naming conventions

### Student Grade Feature Implementation
We've successfully implemented the Student Grade feature:

1. **Component Structure**:
   - Created proper page structure with `student-grade-page.tsx`
   - Implemented component folder structure following project conventions
   - Created `use-student-grade.ts` hook for data management
   - Defined proper TypeScript interfaces in `types.ts`

2. **Data Extraction Improvements**:
   - Implemented course extraction with multiple pattern matching to handle different course formats
   - Added parsing of grade table with proper styling applied through DOM manipulation
   - Extracted grade status (Passed/Not Passed/Attendance Fail/Suspended)
   - Reused TermSelector component from view-attend-student

3. **UI Enhancements**:
   - Created elegant card-based course selection UI
   - Implemented left color bar and visual indicators for active courses
   - Added proper course metadata with icons (code, group, date)
   - Used ScrollArea component for proper table scrolling
   - Implemented responsive layout with proper card spacing
   - Added loading states that target specific card components

4. **Table Styling**:
   - Applied proper Tailwind classes to the grade table
   - Added alternating row colors and hover effects
   - Improved header styling and alignment
   - Ensured responsive behavior with horizontal scrolling

5. **Routing Integration**:
   - Added proper route in app-routing-setup.tsx for "/Grade/StudentGrade.aspx"
   - Ensured links work properly to navigate between courses and terms

### Schedule of Week Feature Implementation
We've successfully migrated and enhanced the Schedule of Week feature:

1. **Component Structure**:
   - Created proper page structure with `schedule-of-week-page.tsx`
   - Implemented component folder structure following project conventions
   - Created `use-schedule-of-week.ts` hook for data management

2. **Data Fetching Improvements**:
   - Replaced direct DOM manipulation with React state management
   - Implemented proper async/await patterns for data fetching
   - Used the useFapData provider pattern for consistent data access

3. **UI Enhancements**:
   - Removed Card container for cleaner appearance
   - Made table show all days without horizontal overflow
   - Added borders between days for better visibility
   - Fixed slot numbering to start from 0 instead of 1
   - Added background colors to headers and columns
   - Fixed date display in the SUN column

4. **Shift Item Display**:
   - Implemented modern card-based layout for class items
   - Added status indicators with color coding
   - Used icons for time, room, and online status information
   - Improved text hierarchy and spacing

5. **ShiftDetailDialog Improvements**:
   - Implemented real API fetching instead of mock data
   - Created sectioned layout with icons for better readability
   - Added status indicators and better formatting
   - Implemented proper error states and loading indicators

6. **Additional Features**:
   - Added statistics cards showing total/attended/pending/absent classes
   - Implemented a legend for status colors
   - Created better header section with week information
   - Added subtle shadows and visual hierarchy improvements

### Chrome Extension Infrastructure
- Analyzed background script (`src/background/index.ts`) and content script (`src/content/index.ts`)
- Understood extension activation flow and page content replacement
- Identified integration points between extension and React components

### Component Architecture Standardization
- Standardized on kebab-case for file naming (e.g., `schedule-controls.tsx`)
- Used PascalCase for component exports
- Implemented consistent component declaration pattern using arrow functions
- Created proper directory structure for component organization

## Key Learning & Insights
- Using component reusability between features (e.g., TermSelector) improves development speed
- Proper state management for loading states improves user experience
- Multiple regex patterns for data extraction improves robustness when parsing variable data formats
- Pattern matching with fallbacks ensures data is properly extracted even with inconsistent formats
- The extension operates by capturing original FAP content and replacing it with React components
- Content scripts need careful handling to avoid interfering with the React application
- Breaking down large components makes the code more maintainable and easier to understand
- Consistent file naming conventions improve developer experience
- Modern React patterns (hooks, functional components) provide cleaner implementation
- The project benefits from a clear separation between UI components and data fetching logic
- Implementing loading skeletons enhances perceived performance and user experience
- Badge components are powerful for indicating status and categorizing information
- Color coding helps users quickly identify item states and types

## Next Steps
- Implement Student Transcript feature (Grade/StudentTranscript.aspx)
- Implement Calendar Integration for exporting schedule and exam dates
- Implement more features from the old version following the same architecture patterns
- Improve user experience with enhanced UI components
- Optimize data extraction from original FAP pages
- Enhance extension activation and state management
- Test extension thoroughly on different FAP pages
- Add more comprehensive documentation for complex components

## Active Decisions & Considerations
- How to handle dynamic content on the FPT academic portal
- Strategy for preserving JavaScript functionality from original site
- Best approach for handling forms and interactive elements
- Balancing performance with visual enhancements
- Extension activation method (automatic vs. user-triggered)
- How to handle authentication and session management
- Approach for migrating features from old codebase while maintaining modern architecture
- Strategies for efficiently referencing old code without carrying over technical debt
- How to handle date and time formatting across different features
- Status visualization patterns for consistent user experience

## Important Patterns & Preferences
- Content capture should be comprehensive and error-resistant
- UI components should follow Metronic's existing patterns
- Use provider pattern for context sharing across the application
- Leverage TypeScript for type safety throughout the codebase
- Utilize React Query for any API data fetching needs
- Follow Chrome extension best practices for content scripts
- Use Shadcn UI components for consistent UI elements
- Reference old-version code only to understand functionality, not to copy implementation
- Implement complete feature rewrites with proper component composition
- Apply strict type checking throughout the codebase
- Use tabbed interfaces for organizing content into categories
- Implement card-based layouts for item collections
- Apply consistent status visualization across features

## Legacy Code Reference Approach
- The old-version directory serves as a reference point for understanding feature requirements
- When implementing a new feature:
  1. First locate the corresponding implementation in the old-version folder
  2. Study the implementation to understand data flow, API interactions, and business logic
  3. Design a new implementation using current project architecture and patterns
  4. Implement with modern React patterns (hooks, functional components)
  5. Use the project's established UI components and styling approach
- **Important**: Do not port code directly; rewrite with proper component architecture
- Focus on preserving functionality while improving:
  - Code organization and maintainability
  - Type safety with proper TypeScript interfaces
  - Component reusability through proper composition
  - Performance through optimized rendering and state management

## Chrome Extension Structure Insights
- Content script captures original FAP HTML and stores it in window._data
- Background script handles extension setup and asset injection
- Content script prepares DOM for React by creating a root element
- React app renders new UI based on data extracted from the original page
- Extension can be toggled on/off via storage.local settings

---
*This file should be updated frequently to reflect the current state of the project.* 