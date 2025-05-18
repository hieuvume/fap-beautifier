import { useState } from 'react';
import { useFapDataCustom } from '@/app/providers/fap-data-provider';
import { ProfileData, ProfileTab } from './types';

export const useUserProfile = () => {
  const [activeTab, setActiveTab] = useState<ProfileTab>('profile');

  const { 
    image, 
    fullName, 
    rollNumber, 
    email, 
    phone, 
    balance, 
    profileData, 
    academicData, 
    parentData, 
    otherData, 
    loading 
  } = useFapDataCustom({
    image: (original) => {
      const imgElement = original?.querySelector('#ctl00_mainContent_studentImage') as HTMLImageElement | null;
      return imgElement?.src || '';
    },
    
    fullName: (original) => {
      return original?.querySelector('#ctl00_mainContent_lblFullname')?.textContent?.trim() || '';
    },
    
    rollNumber: (original) => {
      return original?.querySelector('#ctl00_mainContent_lblRollNumber')?.textContent?.trim() || '';
    },
    
    email: (original) => {
      const emailElement = original?.querySelector('#ctl00_mainContent_lblEmail');
      
      // First check if there's a mailto: link (most reliable source)
      const emailLink = emailElement?.querySelector('a[href^="mailto:"]');
      if (emailLink) {
        const mailtoHref = emailLink.getAttribute('href');
        if (mailtoHref && mailtoHref.startsWith('mailto:')) {
          return mailtoHref.substring(7); // Remove 'mailto:' prefix
        }
      }
      
      // If no mailto link, try to get text content
      let emailText = emailElement?.textContent?.trim() || '';
      
      // If email is obfuscated, extract any potentially valid parts
      if (emailText.includes('[email protected]')) {
        // Try to extract from script if present
        const scripts = original?.querySelectorAll('script');
        for (const script of Array.from(scripts || [])) {
          const content = script.textContent || '';
          if (content.includes('mailto:')) {
            const match = content.match(/mailto:([^\'"]+)/);
            if (match && match[1]) {
              return match[1];
            }
          }
        }
        
        // If still no valid email found, return user-friendly message
        return 'Email address is protected';
      }
      
      return emailText;
    },
    
    phone: (original) => {
      const phoneElement = original?.querySelector('#ctl00_mainContent_lblPhoneNumber');
      let phone = phoneElement?.textContent?.trim() || '';
      
      // Handle multiple phone numbers separated by commas
      if (phone.includes(',')) {
        phone = phone.split(',')[0].trim();
      }
      
      return phone;
    },
    
    balance: (original) => {
      const balanceElement = original?.querySelector('#ctl00_mainContent_lblAccBlance b');
      return balanceElement?.textContent?.trim() || '';
    },
    
    profileData: (original) => {
      const tables = original?.querySelectorAll('table');
      const profileDataTable = tables?.[3] as HTMLTableElement | null;
      return generateTableData(profileDataTable);
    },
    
    academicData: (original) => {
      const tables = original?.querySelectorAll('table');
      const academicDataTable = tables?.[5] as HTMLTableElement | null;
      return generateTableData(academicDataTable);
    },
    
    parentData: (original) => {
      const tables = original?.querySelectorAll('table');
      const parentDataTable = tables?.[4] as HTMLTableElement | null;
      return generateTableData(parentDataTable);
    },
    
    otherData: (original) => {
      const tables = original?.querySelectorAll('table');
      const otherDataTable = tables?.[7] as HTMLTableElement | null;
      return generateTableData(otherDataTable);
    },
    
    loading: () => false, // This will be combined with the loading from useFapDataCustom
  });

  // Build the profile data object
  const profileDataObject: ProfileData = {
    image,
    fullName,
    rollNumber,
    email,
    phone,
    balance,
    profileData,
    academicData,
    parentData,
    otherData
  };

  return {
    profileData: loading ? null : profileDataObject,
    loading,
    activeTab,
    setActiveTab
  };
};

// Helper function to extract data from tables
const generateTableData = (table: HTMLTableElement | null): Record<string, string> => {
  if (!table) return {};

  const data: Record<string, string> = {};
  const rows = table.querySelectorAll('tr');

  rows.forEach(row => {
    const cells = row.querySelectorAll('td');
    if (cells.length >= 2) {
      const key = cells[0]?.textContent?.trim() || '';
      const value = cells[1]?.textContent?.trim() || '';
      if (key) {
        data[key] = value;
      }
    }
  });

  return data;
}; 