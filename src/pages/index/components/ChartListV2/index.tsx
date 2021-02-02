import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Msg, TextMsg, ImgMsg, IMsgItem } from './Msg';
import { Op, SendOp, ReceiveOp, CancelOp } from './Op';


export enum InfoType {
    img = 'img',
    text = 'text',
    voice = 'voice',
    video = 'video'
}

export enum OpType {
    send = 'send',
    receive = 'receive',
    cancel = 'cancel'
}

export default function ChartListV2() {
    const [list, setList] = useState<IMsgItem[]>([]);
    const [dom, setDom] = useState<any>([]);


    const getList = () => {
        axios.get('/items')
            .then(function (response) {
                setList(response.data as IMsgItem[]);
                process(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const process = (list: IMsgItem[]) => {
        //@ts-ignore
        let res = [];
        let res2 = new Map();
        list.map((item) => {
            const baseMsg = msgFactory(item);
            const op = opFactory(item);
            const ret = op.visit(baseMsg);

            if (op instanceof CancelOp) {
                res2.set(item.cancelUserId, ret);
                return;
            }
            res2.set(item._id, ret);
        })

        // console.log("map: ", res2);

        for (let value of res2.values()) {
            res.push(value);
        }
        //@ts-ignore
        setDom(res);
    }

    const msgFactory = (item: IMsgItem) => {

        switch (item.type) {
            case InfoType.text:
                return new TextMsg(item);
            case InfoType.img:
                return new ImgMsg(item);
            default:
                console.log("unknown msg type");
                return new Msg(item);
        }
    }

    const opFactory = (item: IMsgItem) => {
        switch (item.operation) {
            case OpType.receive:
                return new ReceiveOp();
            case OpType.send:
                return new SendOp();
            case OpType.cancel:
                return new CancelOp()
            default:
                console.log("unknown op type");
                return new Op();
        }
    }

    useEffect(() => {
        getList();
    }, []);

    return (
        <div className="chartList-content">
            {dom}
        </div>
    );
}
