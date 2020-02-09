declare namespace YearsNavScssModule {
  export interface IYearsNavScss {
    block: string;
    list: string;
    listItem: string;
    list__item: string;
  }
}

declare const YearsNavScssModule: YearsNavScssModule.IYearsNavScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: YearsNavScssModule.IYearsNavScss;
};

export = YearsNavScssModule;
