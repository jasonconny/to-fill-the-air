import * as React from 'react';
import './scss/base/all.scss';
import './scss/fonts/all.scss';

interface IGlobalStyles {
  children?: React.ReactNode;
}

const GlobalStyles: React.FC<IGlobalStyles> = (props) => {
  const { children } = props;

  if (!children) {
    return null;
  } else {
    return <>{children}</>;
  }
};

export default GlobalStyles;
