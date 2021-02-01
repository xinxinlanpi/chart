import React from 'react';

import { BaseMsg } from './BaseMsg';

export class TextMsg extends BaseMsg {

    // 校验extType
    display() {
        console.log('TextMsg::display');
        return <div key={this.data.time} className={"chart-item-row " + this.data.userType}><span className="text">{this.data.content}</span></div>;
    }

}

