import React from 'react';
import './scss/base/all.scss';
import './scss/fonts/all.scss';

interface GlobalStyles {
  children?: React.ReactNode;
}

const GlobalStyles: React.FC<GlobalStyles> = ({ children }) => {
  if (!children) {
    return null;
  } else {
    return <>{children}</>;
  }
};

export default GlobalStyles;
