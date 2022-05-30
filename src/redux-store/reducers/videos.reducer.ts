import { video } from "../../../types";
import { Actions } from "../actions";
import { ActionType } from "../actionTypes";

interface VideoReducerState {
    videos: video[] | [];
    loading: boolean;
    nextPageToken: string,
    error: string | null,
    message: string | null,
    videoInfo?: video
};

const initialState = {
    videos: [],
    loading: false,
    nextPageToken: '',
    error: null,
    message: null,
    videoInfo: undefined
};

const videoReducer = (
    state: VideoReducerState = initialState,
    action: Actions
): VideoReducerState => {

    console.log(action);
    switch (action.type) {

        case ActionType.LOAD_VIDEOS:
            state = {
                ...state,
                videos: action.payload.videos,
                nextPageToken: action.payload.nextPageToken,
                message: action.payload.message
            };
            break;

        case ActionType.NEXTPAGE_VIDEOS_REQUEST:
            state = {
                ...state,
                loading: true,
                error: null,
                message: null
            };
            break;

        case ActionType.NEXTPAGE_VIDEOS_FAILED:
            state = {
                ...state,
                loading: false,
                error: action.payload
            };
            break;

        case ActionType.NEXTPAGE_VIDEOS_SUCCESS:
            state = {
                ...state,
                loading: false,
                videos: [...state.videos, ...action.payload.videos],
                message: action.payload.message,
                nextPageToken: action.payload.nextPageToken
            };
            break;

        case ActionType.FETCH_ONE_VIDEO_REQUEST:
            state = {
                ...state,
                loading: true,
                error: null,
                message: null
            };
            break;

        case ActionType.FETCH_ONE_VIDEO_FAILED:
            state = {
                ...state,
                loading: false,
                error: action.payload
            };
            break;

        case ActionType.FETCH_ONE_VIDEO_SUCCESS:
            state = {
                ...state,
                loading: false,
                videoInfo: action.payload
            };
            break;

        default:
            break;
    }
    return state;
};

export default videoReducer;