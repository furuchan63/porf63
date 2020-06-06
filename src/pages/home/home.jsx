import React from 'react';



export default class Home extends React.Component {
    render(){
        return(
    <div className="FirstView">
        <div classNmae="bg_text_box">
        <img src="./aoyama02.png" width="100%"/>
        <div className="bg_introductiontext">
        <p className="bg_text_box_h1">こんにちは👋<br/>フルタニユウキです</p>
        <p className="bg_text_box_p1">自然と動物とインターネットが大好きな学生です。</p>
        </div>
        </div>
    </div>
        );
    }
}

