declare namespace HeaderScssNamespace {
    export interface IHeaderScss {
        block: string;
        "logo-link": string;
        logoLink: string;
        nav: string;
    }
}

declare const HeaderScssModule: HeaderScssNamespace.IHeaderScss & {
    /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
    locals: HeaderScssNamespace.IHeaderScss;
};

export = HeaderScssModule;
