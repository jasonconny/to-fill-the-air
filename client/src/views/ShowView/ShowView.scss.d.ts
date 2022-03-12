declare namespace ShowViewScssNamespace {
    export interface IShowViewScss {
        main: string;
        section: string;
        "show-list": string;
        "show-list__item": string;
        showList: string;
        showListItem: string;
        sidebar: string;
    }
}

declare const ShowViewScssModule: ShowViewScssNamespace.IShowViewScss & {
    /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
    locals: ShowViewScssNamespace.IShowViewScss;
};

export = ShowViewScssModule;
