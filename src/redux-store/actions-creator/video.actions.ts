import { Dispatch } from "redux";
import type { Actions } from "../actions";
import { ActionType } from "../actionTypes";
import api from '../../apis/api';
import { video } from "../../../types";

export const loadVideos = (videos: video[], nextPageToken: string) => async (dispatch: Dispatch<Actions>) => {
    dispatch({
        type: ActionType.LOAD_VIDEOS, payload: {
            videos: videos,
            nextPageToken: nextPageToken,
            message: 'Videos Loaded for the first time'
        }
    });
}

export const requestNextPageVideos = (nextPageToken: string) => async (dispatch: Dispatch<Actions>) => {
    dispatch({ type: ActionType.NEXTPAGE_VIDEOS_REQUEST });

    try {
        const { data } = await api.get('/videos', {
            params: {
                part: 'snippet,contentDetails,statistics',
                chart: 'mostPopular',
                maxResults: 16,
                pageToken: nextPageToken
            }
        });
        // console.log(data);
        let videos: video[] = data.items.map((val: any) => {
            let video = {
                id: val.id,
                channelId: val.snippet.channelId,
                channelTitle: val.snippet.channelTitle,
                publishedAt: val.snippet.publishedAt,
                thumbnails: val.snippet.thumbnails.high.url,
                title: val.snippet.title,
                viewCount: val.statistics.viewCount
            }
            return video;
        });

        dispatch({
            type: ActionType.NEXTPAGE_VIDEOS_SUCCESS, payload: {
                videos: videos,
                nextPageToken: data.nextPageToken,
                message: 'next page video loaded'
            }
        });

    } catch (error: any) {
        dispatch({ type: ActionType.NEXTPAGE_VIDEOS_FAILED, payload: error.message });
    }
}

export const fetchOneVideo = (id: string) => async (dispatch: Dispatch<Actions>) => {
    dispatch({ type: ActionType.FETCH_ONE_VIDEO_REQUEST });

    try {
        const { data } = await api.get('/videos', {
            params: {
                part: 'snippet,contentDetails,statistics',
                id: id
            }
        });

        // console.log(data);

        let videos: video[] = data.items.map((val: any) => {
            let video = {
                id: val.id,
                channelId: val.snippet.channelId,
                channelTitle: val.snippet.channelTitle,
                publishedAt: val.snippet.publishedAt,
                thumbnails: val.snippet.thumbnails.high.url,
                title: val.snippet.title,
                viewCount: val.statistics.viewCount
            }
            return video;
        });

        dispatch({ type: ActionType.FETCH_ONE_VIDEO_SUCCESS, payload: videos[0] })

    } catch (error: any) {
        dispatch({ type: ActionType.FETCH_ONE_VIDEO_FAILED, payload: error.message })
    }
}