import React, { useEffect } from 'react';
import { Image } from 'antd';


import { IChartItem } from '../ChartList';



interface Props {
    data: IChartItem;
}

export enum InfoType {
    img = 'img',
    text = 'text',
    voice = 'voice',
    video = 'video'
}
export default function ChartItem(props: Props) {

    const infoType = {
        [InfoType.img]: function (item: IChartItem) {
            if (item.type === 'img' && item.userType !== 'system') {
                return <Image src={item.url} height={200} />;
            }
        },
        [InfoType.text]: function (item: IChartItem) {
            return <span className="text">{item.content}</span>;
        },
        [InfoType.voice]: function (item: IChartItem) {
            //todo
            return null;
        },
        [InfoType.video]: function (item: IChartItem) {
            //todo
            return null;
        }

    };

    const getItem = (item: IChartItem) => {
       
        return infoType[item.type as InfoType](item);
    }

    useEffect(() => {

    }, []);

    return (
        <div className="chart-item-row">
            <div className={"chart-item-row " + props.data.userType}>
                {getItem(props.data)}
            </div>
        </div>
    );
}
