declare namespace AllScssModule {
  export interface IAllScss {
    file: string;
    mappings: string;
    names: string;
    sources: string;
    sourcesContent: string;
    version: string;
  }
}

declare const AllScssModule: AllScssModule.IAllScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: AllScssModule.IAllScss;
};

export = AllScssModule;
