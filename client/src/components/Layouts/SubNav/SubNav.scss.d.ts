declare namespace SubNavScssNamespace {
    export interface ISubNavScss {
        block: string;
        link: string;
        "link--active": string;
        linkActive: string;
        "list-item": string;
        listItem: string;
    }
}

declare const SubNavScssModule: SubNavScssNamespace.ISubNavScss & {
    /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
    locals: SubNavScssNamespace.ISubNavScss;
};

export = SubNavScssModule;
