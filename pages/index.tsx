import { useEffect, useState } from "react";
import useWindowResize from "../src/hooks/useWindowResize";
import Content from "../src/components/Content";
import Header from "../src/components/Header";
import api from '../src/apis/api';
import { video, Videos } from "../types";
import InfiniteScroll from "react-infinite-scroll-component";
import { useAppDispatch, useAppSelector } from "../src/redux-store";


const Home = ({ nextPageToken, videos, error }: Videos) => {
    const windowSize = useWindowResize();
    const [menuToggle, setMenuToggle] = useState<boolean>(true);
    const { requestNextPageVideos, loadVideos } = useAppDispatch();
    const videoState = useAppSelector(state => state.videos);

    const fetchData = () => {
        requestNextPageVideos(videoState.nextPageToken);
    }

    useEffect(() => {
        if (windowSize.width < 1340) {
            setMenuToggle(false);
        } else {
            setMenuToggle(true);
        }
    }, [windowSize.width]);

    useEffect(() => {
        loadVideos(videos, nextPageToken);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div>
            <InfiniteScroll
                dataLength={videoState.videos.length}
                hasMore={true}
                loader={<p>loading ...</p>}
                next={fetchData}
            >
                <Header toggle={menuToggle} setToggle={setMenuToggle} />
                <Content toggle={menuToggle} setToggle={setMenuToggle} />
            </InfiniteScroll>
            Home
        </div>
    )
}

export default Home;

export async function getServerSideProps() {
    try {
        const { data } = await api.get('/videos', {
            params: {
                part: 'snippet,contentDetails,statistics',
                chart: 'mostPopular',
                maxResults: 16
            }
        });

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

        return {
            props: {
                nextPageToken: data.nextPageToken,
                videos: videos
            }
        }
    } catch (error) {
        console.log(error);
        return {
            props: {
                nextPageToken: '',
                videos: null,
            }
        }
    }
}

