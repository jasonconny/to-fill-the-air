declare namespace VenuesViewScssModule {
  export interface IVenuesViewScss {
    content: string;
  }
}

declare const VenuesViewScssModule: VenuesViewScssModule.IVenuesViewScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: VenuesViewScssModule.IVenuesViewScss;
};

export = VenuesViewScssModule;
