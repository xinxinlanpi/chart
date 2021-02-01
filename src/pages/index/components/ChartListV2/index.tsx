import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { TextMsg } from './TextMsg';
import { ImgMsg } from './ImgMsg';


export interface IChartItem {
    _id: string;
    avatar: string;
    time: string;
    type: string;
    content: string;
    obsUserId: string;
    userType: string;
    url: string;
    operation: string,
    cancelUserId: string,
    cancelUserName: string
}

export enum InfoType {
    img = 'img',
    text = 'text',
    voice = 'voice',
    video = 'video'
}

export default function ChartListV2() {
    const [, setList] = useState<IChartItem[]>([]);
    const [dom, setDom] = useState<any>([]);


    const getList = () => {
        axios.get('/items')
            .then(function (response) {
                setList(response.data as IChartItem[]);
                process(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const process = (list: IChartItem[]) => {
        //@ts-ignore
        let res = [];
        let res2 = new Map();
        list.map((item) => {
            const baseMsg = msgFactory(item);
            if (item.operation === 'cancel') {
                res2.set(item.cancelUserId, baseMsg?.cancel());
            } else {
                res2.set(item._id, baseMsg?.display());
            }

        })

        for (let value of res2.values()) {
            res.push(value);
        }
        //@ts-ignore
        setDom(res);
    }

    const msgFactory = (item: IChartItem) => {

        switch (item.type) {
            case InfoType.text:
                return new TextMsg(item);
            case InfoType.img:
                return new ImgMsg(item);
            default:
                console.log("unknown msg type");
                return null;
        }
    }

    useEffect(() => {
        getList();
    }, []);

    return (
        <div className="chartList-content">
            {/* {list.map((item: IChartItem, key) =>
                <ChartItem data={item} key={key} />
            )} */}
            {
                dom
            }
        </div>
    );
}
