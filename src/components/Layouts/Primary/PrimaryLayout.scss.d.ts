declare namespace PrimaryLayoutScssModule {
  export interface IPrimaryLayoutScss {
    footer: string;
    header: string;
    main: string;
    "skip-navigation": string;
    skipNavigation: string;
  }
}

declare const PrimaryLayoutScssModule: PrimaryLayoutScssModule.IPrimaryLayoutScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: PrimaryLayoutScssModule.IPrimaryLayoutScss;
};

export = PrimaryLayoutScssModule;
