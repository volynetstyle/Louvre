import React from 'react';
import { ILogo } from '../../types/interfaces/ILogo';

function Logo(props: ILogo) {
  const { src, alt, title, href } = props;
  return (
    <div id="logo">
        <a href={href}>
            <img src={src} alt={alt} title={title} />
        </a>
    </div>
  );
}

export default Logo;
