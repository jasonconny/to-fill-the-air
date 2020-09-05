declare namespace ErrorMessageScssNamespace {
  export interface IErrorMessageScss {
    block: string;
    text: string;
  }
}

declare const ErrorMessageScssModule: ErrorMessageScssNamespace.IErrorMessageScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: ErrorMessageScssNamespace.IErrorMessageScss;
};

export = ErrorMessageScssModule;
