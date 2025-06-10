import { useFapDataCustom } from '@/app/providers/fap-data-provider';
import { useMemo } from 'react';

export const useAnnounce = () => {
  const { title: rawTitle, content: rawContent } = useFapDataCustom({
    title: (original) => {
      const announceTable = original?.querySelectorAll("table")[1];
      if (announceTable) {
        return announceTable.querySelector("table span")?.innerHTML || "";
      }
      return "";
    },
    content: (original) => {
      const announceTable = original?.querySelectorAll("table")[1];
      if (announceTable) {
        // Create a clone to avoid modifying the original DOM
        const clone = announceTable.cloneNode(true) as HTMLElement;
        
        // Remove the title table
        const titleTable = clone.querySelector("table");
        if (titleTable) {
          titleTable.remove();
        }
        
        // Get content from div or use the table innerHTML
        const contentDiv = clone.querySelector("div");
        if (contentDiv) {
          return contentDiv.innerHTML;
        }
        
        return clone.innerHTML;
      }
      return "";
    },
  });

  // Process the title to clean any unwanted HTML or formatting
  const title = useMemo(() => {
    if (!rawTitle) return "";
    // Remove any HTML tags
    return rawTitle.replace(/<\/?[^>]+(>|$)/g, "").trim();
  }, [rawTitle]);

  // Process the content to improve formatting
  const content = useMemo(() => {
    if (!rawContent) return "";
    
    // Replace relative image paths with absolute paths
    let processedContent = rawContent.replace(/src="\/(?!\/)/g, 'src="https://fap.fpt.edu.vn/');
    
    // Add tailwind classes to tables
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = processedContent;
    
    const tables = tempDiv.querySelectorAll('table');
    tables.forEach(table => {
      table.classList.add('w-full', 'my-4', 'border-collapse');
      table.style.borderCollapse = 'collapse';
      
      const rows = table.querySelectorAll('tr');
      rows.forEach((row, rowIndex) => {
        row.classList.add(rowIndex % 2 === 0 ? 'bg-card' : 'bg-muted/20');
        
        const cells = row.querySelectorAll('td, th');
        cells.forEach(cell => {
          cell.classList.add('p-2', 'border', 'border-border', 'text-sm');
        });
      });
    });
    
    // Add tailwind classes to links
    const links = tempDiv.querySelectorAll('a');
    links.forEach(link => {
      link.classList.add('text-primary', 'hover:underline');
      // Make sure links open in a new tab
      // link.setAttribute('target', '_blank');
      link.setAttribute('rel', 'noopener noreferrer');
    });
    
    // Add tailwind classes to images
    const images = tempDiv.querySelectorAll('img');
    images.forEach(img => {
      img.classList.add('max-w-full', 'h-auto', 'my-4', 'rounded-md');
    });
    
    // Add tailwind classes to lists
    const lists = tempDiv.querySelectorAll('ul, ol');
    lists.forEach(list => {
      list.classList.add('my-4', 'pl-5');
      const items = list.querySelectorAll('li');
      items.forEach(item => {
        item.classList.add('mb-2');
      });
    });
    
    return tempDiv.innerHTML;
  }, [rawContent]);

  return {
    title,
    content
  };
}; 