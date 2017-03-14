import React,{ Component } from 'react'

export default class MsgList extends Component {
    componentWillMount(){
        this.updateMsgList() 
    }
    updateMsgList(msgs=this.props.msg.msgs){
        this.props.fetchMsg(['gg','haha'])
    }
    render(){
        let {msg:{msgs},addMsg,clearMsg,delMsg}=this.props;
        return (
            <div>
                <ul>
                    {
                        msgs.map((msg,index)=>(
                            <li key={index} onClick={()=>{
                                delMsg(msg)
                            }}>{msg}</li>
                        ))
                    }
                </ul>
                <button onClick={addMsg}>add</button>
                <button onClick={clearMsg}>clear</button>
            </div>
        )
    }
}

