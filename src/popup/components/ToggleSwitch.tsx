import React from 'react';

type ToggleSwitchProps = {
  isEnabled: boolean;
  onToggle: (isEnabled: boolean) => void;
};

/**
 * Component công tắc bật/tắt FAP Beautifier
 */
const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ isEnabled, onToggle }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onToggle(event.target.checked);
  };

  return (
    <div className="toggle-row">
      <span>Enable FAP Beautifier</span>
      <label className="switch">
        <input 
          type="checkbox" 
          checked={isEnabled} 
          onChange={handleChange}
        />
        <span className="slider"></span>
      </label>
    </div>
  );
};

export default ToggleSwitch; 