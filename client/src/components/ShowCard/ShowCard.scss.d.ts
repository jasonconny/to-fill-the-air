declare namespace ShowCardScssNamespace {
    export interface IShowCardScss {
        block: string;
        content: string;
        "date-container": string;
        "date-container__date": string;
        "date-container__month": string;
        "date-container__weekday": string;
        "date-container__year": string;
        "date-link": string;
        dateContainer: string;
        dateContainerDate: string;
        dateContainerMonth: string;
        dateContainerWeekday: string;
        dateContainerYear: string;
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
