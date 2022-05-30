import Navbar from "../src/components/Navbar";
import ReactPlayer from "react-player";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../src/redux-store";
import { useRouter } from "next/router";
import moment from "moment";


const Watch = () => {
    const { fetchOneVideo } = useAppDispatch();
    const { videoInfo } = useAppSelector(state => state.videos);
    const [duration, setDuration] = useState<string | undefined>(undefined);
    const router = useRouter();
    const seconds = moment.duration(duration).asSeconds();
    const formattedDuration = moment.utc(seconds * 1000).format("mm:ss");

    let id = router.query.id || '';
    const handleToggle = () => { }

    useEffect(() => {
        if (typeof id === 'string') {
            fetchOneVideo(id);
        }
        console.log('I am Excuting');
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        setDuration(videoInfo?.publishedAt);
    }, [videoInfo?.publishedAt])

    return (
        <>
            <Navbar
                toggle={true}
                setToggle={handleToggle}
                className="fixed top-0 left-0"
            />
            <div className="min-h-screen py-20 px-0 lg:py-24 lg:px-32 bg-primary">
                <div className="w-full h-[25vh] lg:h-[75vh] lg:w-[68%]">
                    <ReactPlayer
                        height="100%"
                        width="100%"
                        url={`https://www.youtube.com/watch?v=${id}`}
                        controls={true}
                    />
                </div>
                <div className="my-4">
                    <p>{videoInfo?.title}</p>
                    <p>{videoInfo?.channelTitle}</p>
                    <p>{formattedDuration}</p>
                    <p>{videoInfo?.viewCount}</p>
                </div>
            </div>
        </>

    )
}

export default Watch;

// export async function getServerSideProps() {
//     try {
//         const { data } = await api.get('/videos', {
//             params: {
//                 part: 'snippet,contentDetails,statistics',
//                 chart: 'mostPopular',
//                 maxResults: 16
//             }
//         });

//         let videos: video[] = data.items.map((val: any) => {
//             let video = {
//                 id: val.id,
//                 channelId: val.snippet.channelId,
//                 channelTitle: val.snippet.channelTitle,
//                 publishedAt: val.snippet.publishedAt,
//                 thumbnails: val.snippet.thumbnails.high.url,
//                 title: val.snippet.title,
//                 viewCount: val.statistics.viewCount
//             }
//             return video;
//         });

//         return {
//             props: {
//                 nextPageToken: data.nextPageToken,
//                 videos: videos
//             }
//         }
//     } catch (error) {
//         console.log(error);
//         return {
//             props: {
//                 nextPageToken: '',
//                 videos: null,
//             }
//         }
//     }
// }