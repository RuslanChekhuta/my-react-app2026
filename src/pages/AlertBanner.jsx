import React from "react";

const AlertBanner = ({ alerts }) => {
  return (
    <div>
      {alerts.length > 0 && <p>У вас {alerts.length} предупреждения</p>}
    </div>
  );
};

export default AlertBanner;
