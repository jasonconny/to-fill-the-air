declare namespace CopyrightScssNamespace {
  export interface ICopyrightScss {
    block: string;
  }
}

declare const CopyrightScssModule: CopyrightScssNamespace.ICopyrightScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: CopyrightScssNamespace.ICopyrightScss;
};

export = CopyrightScssModule;
