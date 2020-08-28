declare namespace VenuesViewScssNamespace {
    export interface IVenuesViewScss {
        content: string;
    }
}

declare const VenuesViewScssModule: VenuesViewScssNamespace.IVenuesViewScss & {
    /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
    locals: VenuesViewScssNamespace.IVenuesViewScss;
};

export = VenuesViewScssModule;
