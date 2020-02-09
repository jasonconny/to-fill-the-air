declare namespace HomeViewScssModule {
  export interface IHomeViewScss {
    content: string;
  }
}

declare const HomeViewScssModule: HomeViewScssModule.IHomeViewScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: HomeViewScssModule.IHomeViewScss;
};

export = HomeViewScssModule;
