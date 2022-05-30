import useWindowResize from "../hooks/useWindowResize";
import { ContentProps, ToggleState } from "../../types";
import Card from "./Card";
import { useAppSelector } from "../redux-store";


const Content = ({ toggle, setToggle }: ToggleState) => {
    const windowSize = useWindowResize();
    const videoState = useAppSelector(state => state.videos);

    return (
        <section className={`mt-28 p-0 py-4 lg:py-8 md:px-6 bg-base text-white min-h-screen grid gap-2
        ${windowSize.width < 1230 ? 'lg:grid-cols-3' : 'lg:grid-cols-4 '} lg:gap-x-4 lg:gap-y-1 justify-items-center ${toggle ? 'lg:pl-64' : 'lg:pl-24'}`}>
            {videoState.videos && videoState.videos.map((val) => (
                <Card
                    key={val.id}
                    id={val.id}
                    channelId={val.channelId}
                    channelTitle={val.channelTitle}
                    thumbnails={val.thumbnails}
                    publishedAt={val.publishedAt}
                    title={val.title}
                    viewCount={val.viewCount}
                />
            ))}
        </section>
    )
}

export default Content;