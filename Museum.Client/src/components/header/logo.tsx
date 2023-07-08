import React from 'react';

export interface ILogo {
  src: string;
  alt: string;
  title: string;
  href: string;
}

function Logo(props: ILogo) {
  const logoSize = 40;
  const { src, alt, title, href } = props;
  return (
    <div id="logo">
        <a href={href}>
            <img width={logoSize} height={logoSize} src={src} alt={alt} title={title} />
        </a>
    </div>
  );
}

export default Logo;
