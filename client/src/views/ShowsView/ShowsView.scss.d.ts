declare namespace ShowsViewScssNamespace {
    export interface IShowsViewScss {
        content: string;
        main: string;
        "show-list": string;
        "show-list__item": string;
        showList: string;
        showListItem: string;
        sidebar: string;
    }
}

declare const ShowsViewScssModule: ShowsViewScssNamespace.IShowsViewScss & {
    /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
    locals: ShowsViewScssNamespace.IShowsViewScss;
};

export = ShowsViewScssModule;
