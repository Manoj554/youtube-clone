import { video } from "../../../types";
import { ActionType } from "../actionTypes";

export type Actions =
    | NextPageVideosRequest
    | NextPageVideoSuccess
    | NextpageVideoFailed
    | LoadVideos
    | FetchOneVideoFailed
    | FetchOneVideoSuccess
    | FetchOneVideoRequest;

interface VideoPayload {
    videos: video[];
    message: string;
    nextPageToken: string;
}

interface NextPageVideosRequest {
    type: ActionType.NEXTPAGE_VIDEOS_REQUEST | ActionType.FETCH_ONE_VIDEO_REQUEST;
}

interface NextPageVideoSuccess {
    type: ActionType.NEXTPAGE_VIDEOS_SUCCESS;
    payload: VideoPayload;
}

interface NextpageVideoFailed {
    type: ActionType.NEXTPAGE_VIDEOS_FAILED | ActionType.FETCH_ONE_VIDEO_FAILED;
    payload: string;
}

interface LoadVideos {
    type: ActionType.LOAD_VIDEOS;
    payload: VideoPayload;
}

interface FetchOneVideoRequest {
    type: ActionType.FETCH_ONE_VIDEO_REQUEST;
}

interface FetchOneVideoSuccess {
    type: ActionType.FETCH_ONE_VIDEO_SUCCESS;
    payload?: video;
}

interface FetchOneVideoFailed {
    type: ActionType.FETCH_ONE_VIDEO_FAILED;
    payload: string;
}
