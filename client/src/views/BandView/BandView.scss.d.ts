declare namespace BandViewScssNamespace {
  export interface IBandViewScss {
    lineups: string;
  }
}

declare const BandViewScssModule: BandViewScssNamespace.IBandViewScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: BandViewScssNamespace.IBandViewScss;
};

export = BandViewScssModule;
