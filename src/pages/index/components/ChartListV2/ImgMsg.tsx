import React, {  } from 'react';
import { Image } from 'antd';


import { BaseMsg } from './BaseMsg';

export class ImgMsg extends BaseMsg {

    // 校验extType
    display() {
        console.log('ImgMsg::display');
        return <div key={this.data.time} className={"chart-item-row " + this.data.userType}>
            <Image src={this.data.url} height={200} />
        </div>;
    }

}

