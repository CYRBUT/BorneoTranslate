
import React from 'react';

interface IconProps {
  className?: string;
}

export const IconNews: React.FC<IconProps> = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3h2m-4 3h2m-4 3h2m-4 3h2" />
  </svg>
);

export const IconSwap: React.FC<IconProps> = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
  </svg>
);

export const IconLoader: React.FC<IconProps> = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v3m0 12v3m9-9h-3m-12 0H3m16.65-6.65l-2.12 2.12M6.47 17.53l-2.12 2.12m13.18-2.12l2.12 2.12M4.35 6.35l2.12 2.12" />
  </svg>
);

export const IconSparkles: React.FC<IconProps> = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20">
      <path d="M10 2.5a.75.75 0 01.75.75v.251a.75.75 0 01-1.5 0V3.25A.75.75 0 0110 2.5zM8.5 3.25a.75.75 0 00-1.5 0v.251a.75.75 0 001.5 0V3.25zM11.5 3.25a.75.75 0 00-1.5 0v.251a.75.75 0 001.5 0V3.25zM3.25 8.5a.75.75 0 01.75-.75h.251a.75.75 0 010 1.5H4a.75.75 0 01-.75-.75zM3.25 10a.75.75 0 000 1.5h.251a.75.75 0 000-1.5H3.25zM3.25 11.5a.75.75 0 01.75-.75h.251a.75.75 0 010 1.5H4a.75.75 0 01-.75-.75zM10 15a.75.75 0 01.75.75v.251a.75.75 0 01-1.5 0V15.75A.75.75 0 0110 15zM8.5 15.75a.75.75 0 00-1.5 0v.251a.75.75 0 001.5 0V15.75zM11.5 15.75a.75.75 0 00-1.5 0v.251a.75.75 0 001.5 0V15.75zM15 8.5a.75.75 0 01.75-.75h.251a.75.75 0 010 1.5H15.75A.75.75 0 0115 8.5zM15 10a.75.75 0 000 1.5h.251a.75.75 0 000-1.5H15zM15 11.5a.75.75 0 01.75-.75h.251a.75.75 0 010 1.5H15.75A.75.75 0 0115 11.5z" />
      <path fillRule="evenodd" d="M10 5a5 5 0 100 10 5 5 0 000-10zm-7 5a7 7 0 1114 0 7 7 0 01-14 0z" clipRule="evenodd" />
    </svg>
);

export const IconClose: React.FC<IconProps> = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export const IconHeart: React.FC<IconProps> = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 20.364l-7.682-7.682a4.5 4.5 0 010-6.364z" />
  </svg>
);

export const IconComment: React.FC<IconProps> = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
  </svg>
);

export const IconShare: React.FC<IconProps> = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12s-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6.002l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.367a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
  </svg>
);

export const IconPlus: React.FC<IconProps> = ({ className }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
    </svg>
);

export const IconStar: React.FC<IconProps> = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
    </svg>
);

export const IconInfo: React.FC<IconProps> = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
    </svg>
);

export const IconDonate: React.FC<IconProps> = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-2-12h4v2h-4v-2zm4.01 4.02c-.63.63-1.49 1-2.51 1s-1.88-.37-2.51-1C8.37 11.4 8 10.55 8 9.5c0-1.05.37-1.9 1-2.52.62-.62 1.47-1 2.5-1s1.88.38 2.5 1c.63.62 1 1.47 1 2.52 0 1.05-.37 1.9-1 2.52z" />
    </svg>
);

export const IconCopy: React.FC<IconProps> = ({ className }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
    </svg>
);

export const IconQris: React.FC<IconProps> = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M4 4h6v6H4V4zm2 2v2h2V6H6zm6-2h6v6h-6V4zm2 2v2h2V6h-2zM4 14h6v6H4v-6zm2 2v2h2v-2H6zm11-1 3 3-3 3-3-3 3-3zm-2-5 3 3-3 3-3-3 3-3zm-1 5a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
    </svg>
);

export const IconDana: React.FC<IconProps> = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-2.5-8.5l4 4L16 13l-4-4-2.5 2.5zM8 10l4-4 2.5 2.5L12 11l-4-1z"/>
    </svg>
);

export const IconLink: React.FC<IconProps> = ({ className }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.536a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
    </svg>
);

export const IconInstagram: React.FC<IconProps> = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" />
    </svg>
);

export const IconTikTok: React.FC<IconProps> = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-2.43.03-4.83-.95-6.43-2.98-1.55-2-2.31-4.52-2.3-7.16 0-3.87 2.2-7.39 5.86-8.52.48-.14 1.25-.23 1.96-.28v4.03c-1.04.18-2.03.65-2.81 1.28-.79.62-1.28 1.54-1.28 2.58 0 1.56 1.11 2.84 2.61 2.92.48.02 1.43-.02 1.96-.02.01-1.92-.01-3.84.02-5.75.03-2.14.86-4.28 2.39-5.83 1.02-1.06 2.37-1.72 3.82-1.87Z" />
    </svg>
);

export const IconTelegram: React.FC<IconProps> = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.1l15.97-6.16c.73-.28 1.4.24 1.15.99l-3.37 15.41c-.24.94-1 .42-1.39.23l-4.88-3.57-2.31 2.24c-.25.24-.46.45-.8.45z" />
    </svg>
);

// Tech Icons
export const IconReact: React.FC<IconProps> = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-4.96-7.34c.1-.56.6-1 1.21-1 .73 0 1.33.51 1.38 1.2l.02.14a5.03 5.03 0 0 0 4.7 0l.02-.14c.05-.69.65-1.2 1.38-1.2.61 0 1.11.44 1.21 1 .11.64-.23 1.28-.83 1.48l-.13.04c-2.43.76-4.99.76-7.42 0l-.13-.04c-.6-.2-.94-.84-.83-1.48zM11.16 7.71l-1.92 1.11c-.58.33-.79.96-.46 1.54.33.58.96.79 1.54.46l1.92-1.11c.58-.33.79-.96.46-1.54s-.96-.79-1.54-.46zm3.6-1.58c-.58-.33-1.21-.12-1.54.46l1.92 1.11c.58.33 1.21.12 1.54-.46s.12-1.21-.46-1.54l-1.46-.83zm-7.2 6.16c.58.33 1.21.12 1.54-.46l-1.92-1.11c-.58-.33-1.21-.12-1.54.46s-.12 1.21.46 1.54l1.46.83zm10.8-4.58l-1.92 1.11c.33.58.12 1.21-.46 1.54s-1.21.12-1.54-.46l1.92-1.11c.58-.33.79-.96.46-1.54s-.96-.79-1.54-.46z" />
    </svg>
);
export const IconNextJS: React.FC<IconProps> = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.5 14.5h-2.5l-4-6.5v6.5H7.5V7.5h2.5l4 6.5V7.5h2.5v9z" />
    </svg>
);
export const IconTypeScript: React.FC<IconProps> = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M2 2h20v20H2V2zm18 18V4H4v16h16zM11.5 15.5h-2v-4h-2V10h6v1.5h-2v4zm4.2-4.2c.4-.3.6-.8.6-1.3s-.2-1-.6-1.3c-.4-.3-.9-.5-1.5-.5h-2.2v6h2.2c.6 0 1.1-.2 1.5-.5s.6-.8.6-1.3c0-.4-.1-.8-.4-1.1zm-1.8.9c.2.2.3.4.3.7s-.1.5-.3.7c-.2.2-.4.2-.7.2h-.5v-2.1h.5c.3 0 .5.1.7.2z"/>
    </svg>
);
export const IconJavaScript: React.FC<IconProps> = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M2 2h20v20H2V2zm18 18V4H4v16h16zM11.5 17h-2l-1-4H6.5v4h-2V7h5c1.4 0 2.5.3 3.2 1 .7.6 1.1 1.5 1.1 2.5 0 1.2-.5 2.2-1.3 2.8l1.5 3.7h-2zm-2-5.5h-1v-3h1c.8 0 1.2.4 1.2 1.5s-.4 1.5-1.2 1.5zm6.5 5.5h-2V13c0-1.2-.4-1.8-1.2-1.8s-1.2.6-1.2 1.8v4h-2V7h2v5c1-.8 2-1.2 3.2-1.2 1.4 0 2.3 1.1 2.3 3.2v3z"/>
    </svg>
);

export const IconTailwindCSS: React.FC<IconProps> = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.001 4.5c-4.103 0-7.5 3.397-7.5 7.5s3.397 7.5 7.5 7.5c2.47 0 4.69-.942 6.223-2.78.27-.324.238-.802-.086-1.072l-.123-.104c-.333-.28-.813-.243-1.09.088a5.002 5.002 0 0 1-8.324-3.712c0-2.757 2.243-5 5-5s5 2.243 5 5c0 .302-.034.596-.089.884a.751.751 0 0 0 .693.811l.136.004c.414 0 .75-.336.75-.75A7.505 7.505 0 0 0 12.001 4.5zm-3.001 7.5a2.502 2.502 0 0 0 4.416 1.768.75.75 0 0 0-1.1-1.036A1.002 1.002 0 0 1 11 12.999a1 1 0 0 1-.707-1.707.75.75 0 0 0-1.061-1.061A2.502 2.502 0 0 0 9 12z"/>
    </svg>
);
export const IconVueJS: React.FC<IconProps> = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2L2 12h3.5l6.5-7.5 6.5 7.5H22L12 2zm-8.5 11.5L12 22l8.5-8.5h-3.25L12 18.25 6.75 13.5H3.5z"/>
    </svg>
);
export const IconSvelte: React.FC<IconProps> = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M14.3 2.1c-.2-.1-.5-.1-.7 0l-10 6c-.2.1-.4.4-.4.7v6.3c0 .3.1.5.4.7l10 6c.2.1.5.1.7 0l10-6c.2-.1.4-.4.4-.7V8.8c0-.3-.1-.5-.4-.7l-10-6zm-9.3 7l9-5.4 9 5.4-3.1 1.9-5.9-3.5-5.9 3.5-3.1-1.9zm-.1 5.3l3.2-1.9 5.9 3.5 5.9-3.5 3.2 1.9-9.1 5.4-9.1-5.4z"/>
    </svg>
);
export const IconNodeJS: React.FC<IconProps> = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2l-10 6v12l10 6 10-6V8l-10-6zm-1.1 17.3l-6.8-4V9.8l6.8 4v5.5zm1.1-11.7L5.2 9l6.8-4.1 6.8 4.1-6.8 4zm2.1 6.2l6.8-4V9.8l-6.8 4v5.5z"/>
    </svg>
);
export const IconPython: React.FC<IconProps> = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm-5 5h3v2H7v6h2v-2h3c2.8 0 5-2.2 5-5s-2.2-5-5-5H7v2zm8 8h-3v-2h3v-6h-2v2h-3c-2.8 0-5 2.2-5 5s2.2 5 5 5h3v-2z"/>
    </svg>
);
export const IconGoLang: React.FC<IconProps> = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 12c0-3 2-5 5-5s5 2 5 5h-2c0-1.7-1.3-3-3-3s-3 1.3-3 3 1.3 3 3 3v-2h3c.6 0 1 .4 1 1s-.4 1-1 1h-3v4h-2v-4c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5v2h-3c-.6 0-1-.4-1-1s.4-1 1-1h3v-2c-2.8 0-5-2.2-5-5s-5 2.2-5 5 2.2 5 5 5h2v-2z"/>
    </svg>
);
export const IconFirebase: React.FC<IconProps> = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M3.7 18.9L9 12 3.7 5.1 2 6.8l3.6 5.2L2 17.2l1.7 1.7zm11.4-1.2l-3.2-8.3-1.7 1L14 15l-4.1 5.7 1.7 1.2 3.5-4.8zM20.3 5.1L15 12l5.3 6.9 1.7-1.7-3.6-5.2 3.6-5.2-1.7-1.7z"/>
    </svg>
);
export const IconPostgreSQL: React.FC<IconProps> = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-1 15v-5h-3v-2h3V7h2v3h3v2h-3v5h-2z"/>
    </svg>
);
export const IconGemini: React.FC<IconProps> = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2l2.3 7.1H22l-6 4.4 2.3 7.1L12 16.2 5.7 20.6l2.3-7.1-6-4.4h7.7L12 2z"/>
    </svg>
);
export const IconDocker: React.FC<IconProps> = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M22 12c0-5.5-4.5-10-10-10S2 6.5 2 12s4.5 10 10 10 10-4.5 10-10zm-18 0c0-4.4 3.6-8 8-8s8 3.6 8 8c0 3.3-2 6.2-5 7.4V12h-2v-2h2v-1h-2v-1h2V7h-2V6h2V5h-2v1H9v1h2v1H9v1h2v1H9v1h2v2H9v7.4c-3-1.2-5-4.1-5-7.4z"/>
    </svg>
);
export const IconGit: React.FC<IconProps> = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M22.5 10.5h-4.2c-.2-1.3-1.3-2.3-2.6-2.3-1.1 0-2.1.7-2.5 1.7-.4-1-1.4-1.7-2.5-1.7-1.5 0-2.7 1.2-2.7 2.7v4.6c0 1.5 1.2 2.7 2.7 2.7 1.1 0 2.1-.7 2.5-1.7.4 1 1.4 1.7 2.5 1.7 1.5 0 2.7-1.2 2.7-2.7v-2.1h1.5v2.1c0 2.3-1.9 4.2-4.2 4.2-1.9 0-3.5-1.2-4-2.9-.5 1.7-2.1 2.9-4 2.9C3.9 22.5 2 20.6 2 18.1V7.9c0-2.5 1.9-4.4 4.4-4.4 1.9 0 3.5 1.2 4 2.9C10.9 4.7 12.5 3.5 14.4 3.5c2.3 0 4.2 1.9 4.2 4.2v2.1h3.9v.7zM17.7 15c0 .7-.6 1.2-1.2 1.2s-1.2-.6-1.2-1.2V9.8c0-.7.6-1.2 1.2-1.2s1.2.6 1.2 1.2v5.2zm-7.2 0c0 .7-.6 1.2-1.2 1.2s-1.2-.6-1.2-1.2V9.8c0-.7.6-1.2 1.2-1.2s1.2.6 1.2 1.2v5.2z"/>
    </svg>
);

export const IconUser: React.FC<IconProps> = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
    </svg>
);

export const IconArrowLeft: React.FC<IconProps> = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
  </svg>
);

export const IconChevronUp: React.FC<IconProps> = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
  </svg>
);

export const IconChevronDown: React.FC<IconProps> = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
);

export const IconSun: React.FC<IconProps> = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M12 12a5 5 0 100-10 5 5 0 000 10z" />
  </svg>
);

export const IconMoon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
  </svg>
);
