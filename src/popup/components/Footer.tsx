import React from 'react';

/**
 * Footer component cho popup hiển thị thông tin và liên kết
 */
const Footer: React.FC = () => {
  return (
    <div className="footer">
      <a 
        href="https://github.com/viethungdev23/fap-beautifier" 
        target="_blank" 
        rel="noreferrer"
      >
        GitHub
      </a>
      <a 
        href="https://chrome.google.com/webstore/detail/fap-beautifier/klogkfpcjbigeccifgjdmbogfabhmoce/reviews" 
        target="_blank" 
        rel="noreferrer"
      >
        Rate Extension
      </a>
      <a 
        href="mailto:viethung.dev23@gmail.com"
      >
        Report Issues
      </a>
    </div>
  );
};

export default Footer; 