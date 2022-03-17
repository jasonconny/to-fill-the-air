declare namespace PaginationScssNamespace {
    export interface IPaginationScss {
        list: string;
        "list-item": string;
        listItem: string;
    }
}

declare const PaginationScssModule: PaginationScssNamespace.IPaginationScss & {
    /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
    locals: PaginationScssNamespace.IPaginationScss;
};

export = PaginationScssModule;
