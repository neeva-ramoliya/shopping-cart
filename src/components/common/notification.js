import React from "react";
import "../../styles/notification.styl";

const NotificationManager = props => {
  const show = props.show;

  return (
    <div className={`notification ${show ? `notification-popup` : ``}`}>
      {props.message}
    </div>
  );
};

export default NotificationManager;
