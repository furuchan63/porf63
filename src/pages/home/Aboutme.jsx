import React from 'react';
import ScrollToTopOnMount from './ScrollToTopOnMount.jsx';


export default class ABOUTME extends React.Component {
    render(){
        return(
            <div className="CFYOU_margin">
              <ScrollToTopOnMount/>
              <Text01></Text01>
                   
            </div>
        );
    }
}



class Text01 extends React.Component {
    render() {
      return (
        <div className="CFYOUTDIV01">
            <div className="ABOUTME_margin">
            <img src="aboutme_aboutme.svg" alt="" className="aboutme_mypicture"/><br/>
                <img src="aboutme_mypicture.jpg" alt="" className="aboutme_mypicture"/><br/>
                <div className="aboutme_textbox">
                <p className="secondtitle_aboutme01">フルタニ ユウキ</p>
                <p className="p1_aboutme">
                同志社大学グローバル地域文化学部に在籍中の大学生です。物心がついた頃からデジタルのものが大好きでした。日常の中で使いにくいものや、合理的でないモノやコトに出会った時に、“何故こうなってるのか”と考えたり、時には憤慨したり…としている間に、デザインなるものに関心が出ました。その後、思い切って大学を休学し<a href="https://linc-well.com/" target="blank" >株式会社Linc’well</a>で長期インターンを始め、家族に医療従事者が多いことでこちらも幼い頃から関心があった、医療・ヘルスケア分野のUIデザイン、UXデザインに携わらせていただいています。
                    
                </p>
                <p className="p1_aboutme">
                今後は、経営者やエンジニアなどの異業種をもっとハイレベルに繋ぎ、「ユーザーの代弁者、翻訳者」としてユーザーが求めているモノやコトをギャップがないように提供できるようになりたいと考えています。                    
                </p>

                <p className="secondtitle_aboutme02">経歴</p>
                <div　className="margin-b-minus24">
                <div className="auto-layout_flex">
                <p className="p1_aboutme_left">兵庫県立伊丹高等学校</p>
                <p className="p1_aboutme_right">2013.4 ~ 2016.3</p>
                </div>

                <div className="auto-layout_flex">
                <p className="p1_aboutme_left">同志社大学 グローバル地域文化学部</p>
                <p className="p1_aboutme_right">2016.4 ~ 現在</p>
                </div>
                </div>

                <div className="auto-layout_flex02">
                <p className="p1_aboutme_left">株式会社Linc'well(長期インターン)</p>
                <p className="p1_aboutme_right">2019.12 ~ 現在</p>
                </div>


                </div>
            </div>
        </div>
      )
    }
  }