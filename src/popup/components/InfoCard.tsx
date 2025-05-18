import React from 'react';

type InfoCardProps = {
  children: React.ReactNode;
};

/**
 * Component card thông tin dùng để hiển thị nội dung
 */
const InfoCard: React.FC<InfoCardProps> = ({ children }) => {
  return (
    <div className="card">
      {children}
    </div>
  );
};

export default InfoCard; 