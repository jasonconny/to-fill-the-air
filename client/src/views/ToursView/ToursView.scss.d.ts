declare namespace ToursViewScssModule {
  export interface IToursViewScss {
    content: string;
  }
}

declare const ToursViewScssModule: ToursViewScssModule.IToursViewScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: ToursViewScssModule.IToursViewScss;
};

export = ToursViewScssModule;
