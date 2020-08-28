declare namespace SongsViewScssNamespace {
    export interface ISongsViewScss {
        content: string;
    }
}

declare const SongsViewScssModule: SongsViewScssNamespace.ISongsViewScss & {
    /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
    locals: SongsViewScssNamespace.ISongsViewScss;
};

export = SongsViewScssModule;
