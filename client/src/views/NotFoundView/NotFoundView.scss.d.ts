declare namespace NotFoundViewScssNamespace {
    export interface INotFoundViewScss {
        content: string;
    }
}

declare const NotFoundViewScssModule: NotFoundViewScssNamespace.INotFoundViewScss & {
    /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
    locals: NotFoundViewScssNamespace.INotFoundViewScss;
};

export = NotFoundViewScssModule;
