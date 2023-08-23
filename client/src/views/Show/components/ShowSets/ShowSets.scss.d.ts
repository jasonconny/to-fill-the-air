declare namespace ShowSetsScssNamespace {
  export interface IShowSetsScss {
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

declare const ShowSetsScssModule: ShowSetsScssNamespace.IShowSetsScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: ShowSetsScssNamespace.IShowSetsScss;
};

export = ShowSetsScssModule;
