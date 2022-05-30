export type ToggleState = {
    toggle: boolean;
    setToggle: React.Dispatch<React.SetStateAction<boolean>>;
    className?: string
}

export type ContentProps = ToggleState & {
    videos: video[]
}

export type ActionType = {
    type: string,
    payload?: string | { data: any, msg: string }
}

export interface WindowSizeObj {
    height: number;
    width: number
}

export interface video {
    id: string;
    title: string;
    channelId: string;
    channelTitle: string;
    publishedAt: string;
    thumbnails: string;
    viewCount: string;
}

export interface Videos {
    videos: video[];
    nextPageToken: string;
    error: string | null
}