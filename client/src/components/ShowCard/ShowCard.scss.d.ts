declare namespace ShowCardScssNamespace {
    export interface IShowCardScss {
        block: string;
        content: string;
        "date-link": string;
        dateLink: string;
        location: string;
        "set-list": string;
        "set-list-label": string;
        setList: string;
        setListLabel: string;
        "song-title": string;
        "song-title--segues": string;
        songTitle: string;
        songTitleSegues: string;
        venue: string;
    }
}

declare const ShowCardScssModule: ShowCardScssNamespace.IShowCardScss & {
    /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
    locals: ShowCardScssNamespace.IShowCardScss;
};

export = ShowCardScssModule;
