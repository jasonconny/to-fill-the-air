declare namespace MainNavScssNamespace {
    export interface IMainNavScss {
        block: string;
        blockItem: string;
        block__item: string;
        link: string;
        "link--active": string;
        linkActive: string;
        listItem: string;
        list__item: string;
    }
}

declare const MainNavScssModule: MainNavScssNamespace.IMainNavScss & {
    /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
    locals: MainNavScssNamespace.IMainNavScss;
};

export = MainNavScssModule;
