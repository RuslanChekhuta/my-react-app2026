import React from "react";

const AccessMessage = ({ hasAccess }) => {
  if (hasAccess) {
    return <h2>Доступ разрешён</h2>;
  }

  return <h2>Доступ запрещён</h2>;
};

export default AccessMessage;
