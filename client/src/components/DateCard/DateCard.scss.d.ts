declare namespace DateCardScssNamespace {
  export interface IDateCardScss {
    block: string;
    date: string;
    month: string;
    weekday: string;
    year: string;
  }
}

declare const DateCardScssModule: DateCardScssNamespace.IDateCardScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: DateCardScssNamespace.IDateCardScss;
};

export = DateCardScssModule;
