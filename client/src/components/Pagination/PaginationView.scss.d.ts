declare namespace PaginationViewScssNamespace {
    export interface IPaginationViewScss {
        list: string;
        "list-item": string;
        listItem: string;
    }
}

declare const PaginationViewScssModule: PaginationViewScssNamespace.IPaginationViewScss & {
    /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
    locals: PaginationViewScssNamespace.IPaginationViewScss;
};

export = PaginationViewScssModule;
