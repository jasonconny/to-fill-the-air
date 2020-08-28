declare namespace YearsNavScssNamespace {
    export interface IYearsNavScss {
        block: string;
        list: string;
        listItem: string;
        list__item: string;
    }
}

declare const YearsNavScssModule: YearsNavScssNamespace.IYearsNavScss & {
    /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
    locals: YearsNavScssNamespace.IYearsNavScss;
};

export = YearsNavScssModule;
