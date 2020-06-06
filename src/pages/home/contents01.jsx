import React from 'react';



export default class Work01 extends React.Component {
    render(){
        return(
        <div className="WorkBanner">
            <img className="Work01" src="./work01.jpg"></img>
            <p className="WorkName_contents">CLINIC FOR YOU</p>
            <p className="WorkContents"> <Work01Text /></p>
            </div>
    
        );        
    }
}


class Work01Text extends React.Component {
    render() {
      return (
        <p>次世代プライマリ・ケアクリニック「CLINIC FOR」の患者向けモバイルアプリ。テクノロジー化の遅れているクリニック業界において、医療/患者体験を向上させるために開発をしています。
            ファーストリリースの機能として、アプリ内での診察予約に加え、クレジットカードによる診療費の決済、処方箋の確認、領収書や明細書の確認が可能です。
        </p>
      )
    }
  }