declare namespace FooterScssNamespace {
  export interface IFooterScss {
    block: string;
  }
}

declare const FooterScssModule: FooterScssNamespace.IFooterScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: FooterScssNamespace.IFooterScss;
};

export = FooterScssModule;
