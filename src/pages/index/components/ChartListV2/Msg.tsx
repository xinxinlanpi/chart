import React from 'react';
import { Image } from 'antd';

export interface IMsgItem {
    _id: string;
    avatar: string;
    time: string;
    type: string;
    content: string;
    obsUserId: string;
    userType: string;
    url: string;
    operation: string;
    cancelUserName: string;
    cancelUserId: string;
}

export class Msg {
    protected data: IMsgItem;
    constructor(item: any) {
        this.data = item;
    }

    display() {
        console.log('BaseMsg::display, data: ' + this.data.content);
    }

    cancel() {
        console.log('BaseMsg::cancel, _id: ' + this.data._id);
        return <div key={this.data.time} className={"chart-item-row " + this.data.userType}>
            <span className="text">{this.data.cancelUserName} 撤回了一条消息</span>
        </div>;
    }
}

export class TextMsg extends Msg {

    display() {
        console.log('TextMsg::display');
        return <div key={this.data.time} className={"chart-item-row " + this.data.userType}><span className="text">{this.data.content}</span></div>;
    }
}

export class ImgMsg extends Msg {

    display() {
        console.log('ImgMsg::display');
        return <div key={this.data.time} className={"chart-item-row " + this.data.userType}>
            <Image src={this.data.url} height={200} />
        </div>;
    }
}

