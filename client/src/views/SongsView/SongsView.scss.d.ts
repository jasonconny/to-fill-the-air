declare namespace SongsViewScssModule {
  export interface ISongsViewScss {
    content: string;
  }
}

declare const SongsViewScssModule: SongsViewScssModule.ISongsViewScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: SongsViewScssModule.ISongsViewScss;
};

export = SongsViewScssModule;
