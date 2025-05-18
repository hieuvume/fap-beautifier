import React from 'react';
import Header from './Header';
import ToggleSwitch from './ToggleSwitch';
import Footer from './Footer';
import InfoCard from './InfoCard';
import useExtensionState from '../hooks/useExtensionState';

/**
 * Component chính của popup FAP Beautifier
 * - Sử dụng các component con để hiển thị UI
 * - Quản lý trạng thái thông qua custom hook
 */
const Popup: React.FC = () => {
  const { isEnabled, version, toggleExtension } = useExtensionState();
  
  return (
    <div className="container">
      <InfoCard>
        <Header version={version} />
        
        <ToggleSwitch 
          isEnabled={isEnabled} 
          onToggle={toggleExtension} 
        />
        
        <p className="text-muted">
          Transforms the FPT University Academic Portal with a modern interface for better user experience.
        </p>
      </InfoCard>
      
      <InfoCard>
        <p className="text-muted">
          If you encounter any issues with this extension, please disable it temporarily and check for updates.
        </p>
        
        <Footer />
      </InfoCard>
    </div>
  );
};

export default Popup; 