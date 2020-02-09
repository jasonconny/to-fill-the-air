declare namespace ShowsViewScssModule {
  export interface IShowsViewScss {
    content: string;
  }
}

declare const ShowsViewScssModule: ShowsViewScssModule.IShowsViewScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: ShowsViewScssModule.IShowsViewScss;
};

export = ShowsViewScssModule;
