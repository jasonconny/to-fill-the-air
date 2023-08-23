declare namespace ShowViewSetsScssNamespace {
  export interface IShowViewSetsScss {
    block: string;
    list: string;
    'list--single': string;
    listItem: string;
    listSingle: string;
    list__item: string;
    'set-label': string;
    'set-list-container': string;
    setLabel: string;
    setListContainer: string;
    'sets-container': string;
    setsContainer: string;
  }
}

declare const ShowViewSetsScssModule: ShowViewSetsScssNamespace.IShowViewSetsScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: ShowViewSetsScssNamespace.IShowViewSetsScss;
};

export = ShowViewSetsScssModule;
