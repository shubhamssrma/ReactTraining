import React, { Component } from 'react'
import axios from 'axios'
// import './chat.css'
const sendboxcss = {
    "backgroundColor": "#e8e8e4",
    "height": "90vh",
    "position": "relative",
    "padding": "10px",
    "borderRight": "1px dotted black",
    "overflowX":"hidden",
    "overflowY":"scroll"
}
const receiveboxcss = {
    "backgroundColor": "#d8e2dc",
    "height": "90vh",
    "position": "relative",
    "padding": "10px",
    "overflowX":"hidden",
    "overflowY":"scroll"
}
const inputboxcss = {
    // "position": "absolute",
    // "top": "100vh",
}
const btn = {
    "borderRadius": "0",
    "backgroundColor":"#264653",
}
const leftMsg = {
    "padding":"10px 5px",
    "borderRadius":"10px 10px 0px 10px",
    "backgroundColor":"#0d6efd",
    "color":"#fff",
    // "display":"inlineBlock",
    "textAlign":"right",
}
const rightMsg = {
    "padding":"10px 5px",
    "borderRadius":"10px 10px 10px 0px",
    "backgroundColor":"#264653",
    "color":"#ffffff",
    // "float":"right"
}
const msgAreaLeft = {
    "padding":"5px",
}
const msgAreaRight = {
    "padding":"5px",
    "textAlign":"right"
    // "wordWrap":"breakWord",
    // "margin":"0"
}
export class Chat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            senderMessageLeft: "",
            senderMessageRight : "",
            receivedMessages : [],
            receivedMessagesLeft: [],
            receivedMessagesRight : []
        }
        this.sendMsg = this.sendMsg.bind(this)
        this.storeSendMsgLeft = this.storeSendMsgLeft.bind(this)
        this.leftSender = this.leftSender.bind(this)
    }
    storeSendMsgLeft = (e) => {
        this.setState({
            senderMessageLeft: e.target.value,
        })
    }
    storeSendMsgRight = (e) => {
        this.setState({
            senderMessageRight: e.target.value,
        })
    }
    componentDidMount(){
        axios.get("http://localhost/DBMSSQL/saveData.php")
        .then(re => {
            this.setState({receivedMessagesLeft:re.data[""]})
        })
        .catch(err => console.error(err));


        axios.get("http://localhost/DBMSSQL/saveData2.php")
        .then(re => {
            this.setState({receivedMessagesRight:re.data[""]})
        })
        .catch(err => console.error(err));
        // setInterval(() => {
        //     axios.get("http://localhost/DBMSSQL/saveData.php")
        //     .then(re => {
        //         this.setState({receivedMessagesLeft:re.data[""]})
        //     })
        //     .catch(err => console.error(err));
            
        //     axios.get("http://localhost/DBMSSQL/saveData2.php")
        //     .then(re => {
        //         this.setState({receivedMessagesRight:re.data[""]})
        //     })
        //     .catch(err => console.error(err));
        // }, 10000);
            
        // axios.get("http://localhost/DBMSSQL/saveData.php")
        //     .then(re => {
        //         this.setState({receivedMessages:re.data[""]})
        //     })
        //     .catch(err => console.error(err));
        // var element = document.getElementById("sendBox");
        // element.scrollBottom = element.scrollHeight;
    }
    leftSender = (e) => {
        var fd = new FormData();
        var Query = "INSERT INTO test_table4(send_message)VALUES('" + this.state.senderMessageLeft + "')"; 
        fd.append("Query", Query);
        axios({
            method: "POST",
            headers: { "Content-Type": "multipart/form-data" },
            url: 'http://localhost/DBMSSQL/FetchRsDat.php',
            data: fd
        }).then(resp => console.log(resp));

        this.setState({
            senderMessageLeft: "",
        })

        setInterval(() => {
            axios.get("http://localhost/DBMSSQL/saveData.php")
            .then(re => {
                this.setState({receivedMessagesLeft:re.data[""]})
            })
            .catch(err => console.error(err));
        }, 1000);
    }
    sendMsg = (e) => {
        var fd = new FormData();
        var Query = "INSERT INTO test_table5(send_message)VALUES('" + this.state.senderMessageRight + "')";
        fd.append("Query", Query);
        axios({
            method: "POST",
            headers: { "Content-Type": "multipart/form-data" },
            url: 'http://localhost/DBMSSQL/FetchRsDat.php',
            data: fd
        }).then(resp => console.log(resp));

        this.setState({
            senderMessageRight:""
        })

        setInterval(() => {
            axios.get("http://localhost/DBMSSQL/saveData2.php")
            .then(re => {
                this.setState({receivedMessagesRight:re.data[""]})
            })
            .catch(err => console.error(err));
        }, 1000);
    }
    
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2"></div>
                    {/* ================== */}
                    {/* Left Side Chat Box Start */}
                    {/* ================== */}
                    <div className="col-md-4" id="sendBox" style={sendboxcss}>
                        <div className="row">
                            {/* Receiving Side */}
                            <div className="col-md-6">
                                {this.state.receivedMessagesRight.map((s,index) => <p style={msgAreaLeft} key={index}><span style={rightMsg}>{s['send_message']}</span></p>)}
                            </div>
                            {/* Sending Side */}
                            <div className="col-md-6">
                                {this.state.receivedMessagesLeft.map((s,index) => <p style={msgAreaRight} key={index}><span style={leftMsg}>{s['send_message']}</span></p>)}
                            </div>
                        </div> 
                    </div>    
                    {/* ================== */}
                    {/* Left Side Chat Box End */}
                    {/* ================== */}        


                    {/* ================== */}
                    {/* Right Side Chat Box Start */}
                    {/* ================== */}        
                    <div className="col-md-4" id="receiveBox" style={receiveboxcss}>
                        <div className="row">
                            {/* Receiving Side */}
                            <div className="col-md-6">
                                {this.state.receivedMessagesLeft.map((s,index) => <p style={msgAreaLeft} key={index}><span style={rightMsg}>{s['send_message']}</span></p>)}
                            </div>
                            {/* Sending Side */}
                            <div className="col-md-6">
                                {this.state.receivedMessagesRight.map((s,index) => <p style={msgAreaRight} key={index}><span style={leftMsg}>{s['send_message']}</span></p>)}
                            </div>
                        </div> 
                    </div>
                    {/* ================== */}
                    {/* Right Side Chat Box End */}
                    {/* ================== */}  
                    <div className="col-md-2"></div>
                    <div className="col-md-2"></div>
                    <div className="col-md-4" style={{position:"relative",padding:"0"}}>
                        <div className="input-group" style={inputboxcss}>
                            <input type="text" className="form-control" value={this.state.senderMessageLeft} onChange={this.storeSendMsgLeft} placeholder="Message" />
                            <div className="input-group-btn">
                                <button className="btn btn-primary" id='leftBoxSender' onClick={this.leftSender} style={btn}>
                                    <i className="fa fa-chevron-circle-right" aria-hidden="true"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4" style={{position:"relative",padding:"0"}}>
                        <div className="input-group" style={inputboxcss}>
                            <input type="text" className="form-control" value={this.state.senderMessageRight} onChange={this.storeSendMsgRight} placeholder="Message" />
                            <div className="input-group-btn">
                                <button className="btn btn-primary" id='rightBoxSender' onClick={this.sendMsg} style={btn}>
                                    <i className="fa fa-chevron-circle-right" aria-hidden="true"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2"></div>
                </div>
            </div>
        )
    }
}

export default Chat
