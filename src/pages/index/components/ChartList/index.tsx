import React, { useState, useEffect } from 'react';
import axios from 'axios';

import ChartItem from '../ChartItem';

interface Props {
}

export interface IChartItem {
    _id: string;
    avatar: string;
    time: string;
    type: string;
    content: string;
    obsUserId: string;
    userType: string;
    url: string;
}
export default function ChartList() {
    const [list, setList] = useState<IChartItem[]>([]);

    const getList = () => {
        axios.get('/items')
            .then(function (response) {
                setList(response.data as IChartItem[]);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    useEffect(() => {
        getList();
    }, []);

    return (
        <div className="chartList-content">
            {list.map((item: IChartItem, key) =>
                <ChartItem data={item} key={key} />
            )}
        </div>
    );
}
