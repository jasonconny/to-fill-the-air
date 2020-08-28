declare namespace ToursViewScssNamespace {
    export interface IToursViewScss {
        content: string;
    }
}

declare const ToursViewScssModule: ToursViewScssNamespace.IToursViewScss & {
    /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
    locals: ToursViewScssNamespace.IToursViewScss;
};

export = ToursViewScssModule;
