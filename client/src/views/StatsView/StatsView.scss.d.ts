declare namespace StatsViewScssNamespace {
    export interface IStatsViewScss {
        content: string;
    }
}

declare const StatsViewScssModule: StatsViewScssNamespace.IStatsViewScss & {
    /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
    locals: StatsViewScssNamespace.IStatsViewScss;
};

export = StatsViewScssModule;
