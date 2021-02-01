import React from 'react';

// import IChartItem from './index';

 interface IChartItem {
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
}

export class BaseMsg {
    protected data: IChartItem;
    constructor (item:any) {
        this.data = item;
    }

    handle() {
        if (this.data.operation === "cancel") {
            return this.cancel();
        } else if (this.data.operation === "receive") {
            return this.display();
        }
    }
 
    display () {
        console.log('BaseMsg::display, data: ' + this.data.content);
    } 

    cancel() {
        console.log('BaseMsg::cancel, _id: ' + this.data._id);  
        return <div key={this.data.time} className={"chart-item-row " + this.data.userType}>
                <span className="text">{this.data.cancelUserName} 撤回了一条消息</span>
            </div>;
    }
 
}

