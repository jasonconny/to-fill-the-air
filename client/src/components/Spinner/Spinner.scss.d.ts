declare namespace SpinnerScssNamespace {
  export interface ISpinnerScss {
    block: string;
    "block--small": string;
    blockSmall: string;
    dot1: string;
    dot2: string;
    "sk-bounce": string;
    "sk-rotate": string;
    skBounce: string;
    skRotate: string;
  }
}

declare const SpinnerScssModule: SpinnerScssNamespace.ISpinnerScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: SpinnerScssNamespace.ISpinnerScss;
};

export = SpinnerScssModule;
