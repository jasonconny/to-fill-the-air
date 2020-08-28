declare namespace HomeViewScssNamespace {
    export interface IHomeViewScss {
        content: string;
    }
}

declare const HomeViewScssModule: HomeViewScssNamespace.IHomeViewScss & {
    /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
    locals: HomeViewScssNamespace.IHomeViewScss;
};

export = HomeViewScssModule;
