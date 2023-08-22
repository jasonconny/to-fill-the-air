declare namespace ShowViewScssNamespace {
  export interface IShowViewScss {
    location: string;
    section: string;
    'section--set-lists': string;
    sectionHeader: string;
    sectionSetLists: string;
    section__header: string;
    venue: string;
  }
}

declare const ShowViewScssModule: ShowViewScssNamespace.IShowViewScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: ShowViewScssNamespace.IShowViewScss;
};

export = ShowViewScssModule;
