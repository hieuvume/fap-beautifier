import React from 'react';

type HeaderProps = {
  version: string;
};

/**
 * Header component cho popup
 */
const Header: React.FC<HeaderProps> = ({ version }) => {
  return (
    <div className="header">
      <h4 className="title">
        <img src="../media/icons/128.png" className="header-logo" alt="FAP Beautifier Logo" />
        FAP Beautifier
      </h4>
      <span className="version">v{version}</span>
    </div>
  );
};

export default Header; 