declare namespace StatsViewScssModule {
  export interface IStatsViewScss {
    content: string;
  }
}

declare const StatsViewScssModule: StatsViewScssModule.IStatsViewScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: StatsViewScssModule.IStatsViewScss;
};

export = StatsViewScssModule;
