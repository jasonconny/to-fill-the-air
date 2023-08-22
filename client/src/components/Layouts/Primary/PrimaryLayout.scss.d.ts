declare namespace PrimaryLayoutScssNamespace {
  export interface IPrimaryLayoutScss {
    main: string;
    'skip-navigation': string;
    skipNavigation: string;
  }
}

declare const PrimaryLayoutScssModule: PrimaryLayoutScssNamespace.IPrimaryLayoutScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: PrimaryLayoutScssNamespace.IPrimaryLayoutScss;
};

export = PrimaryLayoutScssModule;
