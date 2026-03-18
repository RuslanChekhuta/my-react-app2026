import React from "react";

const GuestOnlyMessage = ({ showMessage }) => {
  if (showMessage) return <p>Только для гостей</p>;
  return null;
};

export default GuestOnlyMessage;
