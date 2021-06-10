import React from 'react';
import ContentLoader from 'react-content-loader';

export const Loader = (props) => {
  return (
    <ContentLoader
      backgroundColor="#fff"
      foregroundColor="#eee"
      speed={2}
      width={370}
      height={270}
      {...props}
    >
      <rect x="0" y="20" rx="4" ry="4" width="55" height="25" />
      <rect x="70" y="20" rx="4" ry="4" width="55" height="25" />
      <rect x="140" y="20" rx="4" ry="4" width="55" height="25" />
      <rect x="0" y="65" rx="4" ry="4" width="370" height="25" />
      <rect x="0" y="110" rx="5" ry="5" width="370" height="70" />
      <rect x="0" y="190" rx="5" ry="5" width="370" height="70" />
    </ContentLoader>
  )
}
