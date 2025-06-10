import { useFapDataCustom } from '@/app/providers/fap-data-provider';

export const useNewsDetail = () => {
  return useFapDataCustom({
    title: (original) => {
      return original?.querySelector('.fon31')?.textContent?.trim() ?? '';
    },
    authorInfo: (original) => {
      // Extract the "Post by author on date" text
      const authorElement = original?.querySelector('#ctl00_mainContent_divContent')?.childNodes[2];
      return authorElement?.textContent?.trim() ?? '';
    },
    author: (original) => {
      const authorInfo = original?.querySelector('#ctl00_mainContent_divContent')?.childNodes[2]?.textContent ?? '';
      const match = authorInfo.match(/Post by (\w+) on/);
      return match ? match[1] : '';
    },
    publishDate: (original) => {
      const authorInfo = original?.querySelector('#ctl00_mainContent_divContent')?.childNodes[2]?.textContent ?? '';
      const match = authorInfo.match(/on (\d{2}\/\d{2}\/\d{2} \d{2}:\d{2})/);
      return match ? match[1] : '';
    },
    content: (original) => {
      const contentElement = original?.querySelector('#ctl00_mainContent_divContent') as HTMLElement;
      if (!contentElement) return '';
      
      // Create a clone to avoid modifying the original
      const clone = contentElement.cloneNode(true) as HTMLElement;
      
      // Remove title and author info (first span and the <br> + "Post by..." text + <hr>)
      const titleElement = clone.querySelector('.fon31');
      if (titleElement) titleElement.remove();
      
      // Remove the first <br> and text node that contains author info
      if (clone.childNodes.length > 1) {
        clone.removeChild(clone.childNodes[0]); // Remove first child (should be empty text node)
        if (clone.childNodes.length > 0) clone.removeChild(clone.childNodes[0]); // Remove <br>
        if (clone.childNodes.length > 0) clone.removeChild(clone.childNodes[0]); // Remove author text
        if (clone.childNodes.length > 0) clone.removeChild(clone.childNodes[0]); // Remove <hr>
      }
      
      // Process all links to open in new tab
      const links = clone.querySelectorAll('a');
      links.forEach(link => {
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
      });
      
      return clone.innerHTML?.trim() ?? '';
    },
  });
}; 