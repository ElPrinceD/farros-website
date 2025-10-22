import React from 'react';

interface NotificationProps {
  message: string;
  show: boolean;
}

const Notification: React.FC<NotificationProps> = ({ message, show }) => {
  if (!show || !message) return null;

  return (
    <div className={`notification ${show ? 'show' : ''}`} id="notification">
      {message}
    </div>
  );
};

export default Notification;
