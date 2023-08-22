declare namespace LogoLinkScssNamespace {
  export interface ILogoLinkScss {
    block: string;
    'block--full': string;
    'block--logo': string;
    blockFull: string;
    blockLogo: string;
    header: string;
  }
}

declare const LogoLinkScssModule: LogoLinkScssNamespace.ILogoLinkScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: LogoLinkScssNamespace.ILogoLinkScss;
};

export = LogoLinkScssModule;
