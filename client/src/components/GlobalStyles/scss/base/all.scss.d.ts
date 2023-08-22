declare namespace AllScssNamespace {
  export interface IAllScss {
    'to-fill-the-air': string;
    toFillTheAir: string;
  }
}

declare const AllScssModule: AllScssNamespace.IAllScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: AllScssNamespace.IAllScss;
};

export = AllScssModule;
