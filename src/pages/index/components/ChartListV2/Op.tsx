import { Msg } from './Msg'

export class Op {

    visit(msg: Msg) {
        console.log("Op::visit " + msg);
    }

}

export class SendOp extends Op {
    visit(msg: Msg) {
        console.log("SendOp::visit " + msg);
        return msg.display();
    }
}

export class ReceiveOp extends Op {
    visit(msg: Msg) {
        console.log("ReceiveOp::visit " + msg);
        return msg.display();
    }
}


export class CancelOp extends Op {
    visit(msg: Msg) {
        console.log("CancelOp::visit " + msg);
        return msg.cancel();
    }
}

