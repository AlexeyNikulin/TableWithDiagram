import React from 'react';

import './Error-Indicator.css';

const ErrorIndicator = () => {
  return (
    <div className="error-indicator">
      <span className="boom">Ошибка сервера</span>
      <span>
        Не удалось загрузить данные:(
      </span>
    </div>
  );
};

export default ErrorIndicator;
