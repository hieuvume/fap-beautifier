# UI Components Reference

This document serves as a reference for the UI components to be used in the project. It outlines which components to use, their location in the codebase, and guidelines for implementation.

## Core UI Component Libraries

### Shadcn UI Components

The project uses Shadcn UI components located in `src/app/components/ui/`. Always prefer these components when implementing UI elements:

- **Basic Elements**
  - `button.tsx` - For all buttons in the application
  - `input.tsx` - For text inputs
  - `select.tsx` - For dropdown selects
  - `checkbox.tsx` - For checkbox inputs
  - `radio-group.tsx` - For radio button groups
  - `switch.tsx` - For toggle switches
  - `textarea.tsx` - For multi-line text inputs

- **Layout Components**
  - `card.tsx` - For card containers
  - `dialog.tsx` - For modal dialogs
  - `drawer.tsx` - For slide-in panels
  - `popover.tsx` - For popovers and tooltips
  - `scroll-area.tsx` - For scrollable containers
  - `separator.tsx` - For visual separators
  - `sheet.tsx` - For side panels

- **Data Display**
  - `table.tsx` - For tabular data
  - `avatar.tsx` - For user avatars
  - `badge.tsx` - For status indicators
  - `alert.tsx` - For notifications and alerts
  - `toast.tsx` - For toast notifications

### Metronic Template Components

The project builds on the Metronic template, which provides additional UI components and styles. These components are located in various directories:

- `src/app/components/common/` - Common UI elements specific to the project
- `src/app/components/keenicons/` - Icon components for the application
- `src/app/layouts/` - Layout templates and page structures

## Component Usage Guidelines

### When to Use Which Component

1. **Basic UI Elements**: Always use Shadcn UI components for basic elements
   ```tsx
   import { Button } from "@/app/components/ui/button";
   
   const MyComponent = () => {
     return <Button variant="primary">Click Me</Button>;
   };
   ```

2. **Layout Structures**: Use Metronic layouts for page structure
   ```tsx
   import { PageTitle } from "@/app/layouts/demo7/components";
   
   const MyPage = () => {
     return (
       <>
         <PageTitle title="My Feature" />
         {/* Page content */}
       </>
     );
   };
   ```

3. **Icons**: Use Lucide React icons or Keenicons
   ```tsx
   import { Calendar, Users } from "lucide-react";
   // OR
   import { KTSVG } from "@/app/components/keenicons/KTSVG";
   ```

### Component Styling

1. **Prefer Tailwind Utilities**: Use Tailwind CSS classes for styling
   ```tsx
   <div className="flex items-center gap-4 p-4 rounded-lg bg-white shadow-sm">
     {/* Content */}
   </div>
   ```

2. **Use `cn()` for Conditional Classes**: Use the cn utility for conditional styling
   ```tsx
   import { cn } from "@/app/lib/utils";
   
   <div className={cn(
     "base-styles", 
     isActive && "active-styles",
     variant === "compact" && "compact-styles"
   )}>
     {/* Content */}
   </div>
   ```

3. **Responsive Design**: Always implement responsive designs using Tailwind breakpoints
   ```tsx
   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
     {/* Responsive grid content */}
   </div>
   ```

## Examples of Component Implementation

### Dialog Component Example

```tsx
import { Button } from "@/app/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/app/components/ui/dialog";

const MyDialog = ({ isOpen, onClose }) => {
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>My Dialog Title</DialogTitle>
        </DialogHeader>
        
        <div className="py-4">
          {/* Dialog content goes here */}
        </div>
        
        <DialogFooter>
          <Button variant="outline" onClick={onClose}>
            Close
          </Button>
          <Button onClick={handleAction}>
            Confirm
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
```

### Table Component Example

```tsx
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/app/components/ui/table";

const MyTable = ({ data }) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((item) => (
          <TableRow key={item.id}>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.status}</TableCell>
            <TableCell>
              <Button variant="ghost" size="sm">Edit</Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
```

## Recommended Component Composition

When creating complex UI features, follow these composition patterns:

1. **Container Components**: Handle data fetching and state management
2. **Presentational Components**: Handle rendering based on props
3. **Specialized Subcomponents**: Handle specific UI sections

Example:
```
FeaturePage (container)
  ├── FeatureHeader (presentational)
  ├── FeatureContent (presentational)
  │     ├── ContentSection1 (specialized)
  │     └── ContentSection2 (specialized)
  └── FeatureFooter (presentational)
```

## Do's and Don'ts

### Do's
- ✅ Use Shadcn UI components for consistency
- ✅ Follow the component declaration style established in the project
- ✅ Use proper TypeScript typing for all components and props
- ✅ Break down complex UIs into smaller, manageable components
- ✅ Use Tailwind for styling
- ✅ Make components mobile-responsive

### Don'ts
- ❌ Import components from the old-version directory
- ❌ Use inline styles instead of Tailwind classes
- ❌ Create monolithic components with multiple responsibilities
- ❌ Use class components instead of functional components
- ❌ Manipulate the DOM directly instead of using React state
- ❌ Use jQuery or other imperative libraries

---
*This document should be updated as new UI patterns and components are established.* 