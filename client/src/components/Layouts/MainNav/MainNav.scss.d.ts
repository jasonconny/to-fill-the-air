declare namespace MainNavScssModule {
  export interface IMainNavScss {
    block: string;
    link: string;
    "link--active": string;
    linkActive: string;
    list: string;
    listItem: string;
    list__item: string;
  }
}

declare const MainNavScssModule: MainNavScssModule.IMainNavScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: MainNavScssModule.IMainNavScss;
};

export = MainNavScssModule;
