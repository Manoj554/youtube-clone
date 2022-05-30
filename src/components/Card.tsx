/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import api from '../apis/api';
import moment from 'moment';
import numeral from "numeral";

import { HiOutlineDotsVertical } from 'react-icons/hi';
import { video } from "../../types";
import Link from "next/link";

const Card = ({ id, channelId, channelTitle, publishedAt, thumbnails, title, viewCount }: video) => {

    const [channelLogo, setChannelLogo] = useState<string | null>(null);
    const [duration, setDuration] = useState<string | null>(null);
    const seconds = moment.duration(duration).asSeconds();
    const formattedDuration = moment.utc(seconds * 1000).format("mm:ss");

    useEffect(() => {
        const get_video_info = async () => {
            const { data } = await api.get('/videos', {
                params: {
                    part: 'contentDetails,statistics',
                    id: id
                }
            });

            let duration = data.items[0].contentDetails.duration;
            setDuration(duration);
        }

        get_video_info();
    }, [id]);

    useEffect(() => {
        const get_channel_info = async () => {
            const { data } = await api.get('/channels', {
                params: {
                    part: 'snippet',
                    id: channelId
                }
            });
            let channel = data.items[0].snippet.thumbnails.high.url;
            setChannelLogo(channel);
        }

        get_channel_info();
    }, [channelId]);


    return (
        <Link href={`/watch?id=${id}`}>
            <div className="flex-1 cursor-pointer">
                <div>
                    <img
                        className="h-60 lg:h-44 w-full"
                        src={thumbnails}
                        alt="Image"
                    />
                    <span className="relative bottom-8 left-60 text-sm bg-black text-white py-0.5 px-1.5 rounded-sm">
                        {formattedDuration}
                    </span>
                </div>
                <div className="mb-3 flex items-start justify-between px-3 py-2 w-full lg:px-0">
                    <img
                        className="h-10 w-10 rounded-full bg-white mr-3"
                        src={channelLogo ? channelLogo : ''}
                        alt="channelLogo"
                    />

                    <div className="w-9/12">
                        <p className="text-sm font-semibold" title={title}>{title.slice(0, 44) + ' . . . .'}</p>
                        <div className="text-main  flex space-x-1 text-xs font-bold mt-2 lg:flex-col  lg:space-x-0 lg:text-sm lg:font-semibold">
                            <p className="text-xs">{channelTitle}.</p>
                            <p> {numeral(viewCount).format('0a')} Views. {moment(publishedAt).fromNow()}</p>
                        </div>
                    </div>
                    <button className="place-items-center">
                        <HiOutlineDotsVertical className="text-xl" />
                    </button>
                </div>
            </div>
        </Link>
    )
}

export default Card