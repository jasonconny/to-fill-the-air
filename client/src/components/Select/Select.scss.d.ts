declare namespace SelectScssNamespace {
    export interface ISelectScss {
        block: string;
        label: string;
        select: string;
    }
}

declare const SelectScssModule: SelectScssNamespace.ISelectScss & {
    /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
    locals: SelectScssNamespace.ISelectScss;
};

export = SelectScssModule;
