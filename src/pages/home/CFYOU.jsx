import React from 'react';
import ScrollToTopOnMount from './ScrollToTopOnMount.jsx';

export default class CFYOU extends React.Component {
    render(){
        return(
            <div className="CFYOU_margin">
              <ScrollToTopOnMount/>
              <CFYOUText01></CFYOUText01>
                    <CFYOUTDIV02></CFYOUTDIV02>
                    <CFYOUTDIV03></CFYOUTDIV03>
                    <CFYOUTDIV04></CFYOUTDIV04>
                    <CFYOUTDIV05></CFYOUTDIV05>
                    <CFYOUTDIV06></CFYOUTDIV06>
            </div>
        );
    }
}



class CFYOUText01 extends React.Component {
    render() {
      return (
        <div className="CFYOUTDIV01">
          <img src="./cfyou_isomeric_mockup.jpg" alt="" className="mockupImg"></img>
          <div className="margin160px">
          <p className="CFYOU_WorkName">CLINIC FOR YOU</p>
          <p className="Categorizing01">制作期間：
        <p className="Describing01">Ver. 1.0.0 2020年1月〜3月</p></p>
        <p className="Categorizing01">概要：
        <p className="Describing01">次世代プライマリ・ケアクリニック「CLINIC FOR」の患者向けモバイルアプリ。iOSとAndroidで利用できます。
        <br></br>これまで「CLINIC FOR」はWEB上でクリニックの診察予約を行えるサービスを提供してきましたが、そのサービスをモバイルアプリ向けにリデザイン＆拡張してユーザーに提供するために開発をしています。
        Ver. 1.0.0の機能として、アプリ内での診察予約に加え、クレジットカードによる診療費の決済、処方箋の確認、領収書や明細書の確認が可能です。
        現在は、COVID-19の世界的な感染拡大を受けて、オンライン診療機能の搭載や、アレルギー検査や血液検査などの検査結果の確認がアプリ内で可能になるアップデートを目指して開発をしています。</p></p>
        <p className="Categorizing01">私の役割：
        <p className="Describing01">
クリニックのドクターや看護師からのヒアリング、情報設計、UIデザイン、PdM(CTO)と二人三脚でタスク管理、広告物のデザイン
        </p></p>

          </div>
        </div>
      )
    }
  }

  class CFYOUTDIV02 extends React.Component {
    render() {
      return (
        <div className="CFYOUTDIV02">
          <div className="bigtitle">
            <img src="cfyou_title_kaiketsu.svg" alt=""/>

          </div>
          
        
          <p className="secondtitle">テック先進国の「当たり前」を実現したい</p>

          <p className="CARDSLIST_p1">「オンラインとオフライン」が融合したクリニックチェーンは米国や中国といった「IT先進国」ではすでに展開されてるが、個人経営が95%以上を占める日本のクリニックの現場においては、テクノロジーの導入は十分に進んでいない。そのため、院内での長い待ち時間は当たり前となっており、世界的にキャッシュレス化が急速に進められる中で、現金以外で診療費を支払う術が無かったり、検査結果や処方された薬に関しての情報を未だに紙媒体で共有するなど、利用者にとっての利便性は高いとは言えない。</p>
          <img src="./Chart01.svg" alt="" className="apoflowImg"></img>
          <div className="aligncenter">
          <img src="./patientsflow.svg" alt="" className="patientsflowImg"></img>
          </div>
          <div className="wrapper_center">
          <img src="./cfyou_phrase01.svg" alt="" className="phrasesvg"></img>
          </div>
            <p className="CARDSLIST_p1">
            「CLINIC FOR」は東京都の田町や新橋など、多い都市部に展開し、仕事で忙しくて普段あまり医療機関にいくことができないビジネスマンに多く利用していただく中で、より一層、医療体験のテクノロジー化が有効となる。
            </p>


        </div>
      )
    }
  }

  class CFYOUTDIV03 extends React.Component {
    render() {
      return (
        <div className="CFYOUTDIV02">
          <div className="bigtitle">
            <img src="cfyou_title_productdev.svg" alt=""/>

          </div>

          <p className="secondtitle">BTC+Mによる開発</p>

          <p className="CARDSLIST_p1">一般的なチーム開発の構成として、ステークホルダーやプロダクト運営を行うメンバーで構成される「Business Team」、エンジニアの「Tech Team」、デザイナーの「Creative Team」のいわゆる「BTC」で開発を行うことが多数だと思われるが、患者であるユーザーに直接使用していただくアプリでは非常にセンシティブなものとなるため、医師や看護師ら「Medical Team」も巻き込んで開発を行った。
          関わる職種が多いため、デザインするにあたっては、各コンポーネントを組み合わせてGUIを高速で作り、イメージしやすい状態でデザインの会議を行い、各フィードバックをもらうようにした。一方で、診療時間を短縮することによって、医者側とユーザ側の体験を複合的に効率化するような事前問診システム等の設計にあたっては、社内の医師にデザインツールのFigmaを直接触ってもらい、ワイヤーフレームを作成したりした。
          <br></br>現在、デザイナーとして課題を持っていることは、医学的に解像度の高い情報とユーザーにとってわかりやすい情報はトレードオフであり、それらを情報伝達において両立させる難しさを感じている。具体的な解決策として現在見出せているものは無いのが正直なところであるが、Medical Teamとユーザー、その他開発に関わるあらゆるメンバーと協議して最適解を見つけていきたい。
          </p>
        </div>
      )
    }
  }


  class CFYOUTDIV04 extends React.Component {
    render() {
      return (
        <div className="CFYOUTDIV02">
        <div className="bigtitle">
        <img src="cfyou_title_ui.svg" alt=""/>

      </div>

          <p className="secondtitle">WEBサービスからのリデザイン</p>


          <p className="CARDSLIST_p1">
          CLINIC FORは以前よりクリニックの診察の予約を行えるサービスをWEB上で提供してきたため「CLINIC FOR YOU」ではその予約システムをモバイルアプリでより使いやすくなるように提供するため、リデザインをしました。特に予約日時選択のUIでは、既存のWEB版のUIでは目線の動きが必要以上に多く、スクロールしてしまうと分単位の時間を見失ってしまうという課題があり、より直感的に日時を選択できるものへと変更しました。
            </p>
            <img src="./webclinicforImg.jpg" alt="" className="apoflowImg"></img>

            
        </div>
      )
    }
  }

  class CFYOUTDIV05 extends React.Component {
    render() {
      return (
        <div className="CFYOUTDIV02">
          <p className="secondtitle">アプリオリジナルの機能</p>
          <p className="CARDSLIST_p1">
          誰でも手軽に医療を受けてほしいという想いの元、シンプルで扱いやすいインターフェースを目指して開発をしています。同一コードでiOSとAndroidに提供するため、両OSのユーザーにとって違和感が無いようにデザインをする必要があるという意味でも普遍的なデザインが求められました。
          </p>

          <p className="thirdtitle">UIのモデル</p>
          <p className="thirdtitle_p1">ファーストリリースで出す機能として、コアに求められていたのは、診察予約へのコンバージョンのみでした。診察の前後で発生するクラスやプロパティを抽出し、振り分けた結果、メニューとしては3つ用意することにしました。また、ユーザーはクリニックの詳細ページを閲覧し、そのページ内で診療予約を行うのが自然と判断し、3つのうち2つのメニュー内ではクリニックの詳細ページに手が届くように設計しました。</p>
          <img src="./cfyou_uimodeling.jpg" alt="" className="apoflowImg"></img>

          <p className="thirdtitle">オンボーディング</p>
          <p className="thirdtitle_p1">オンボーディングのタイプは各企業で様々でいろんな種類がありますが、当アプリを制作するにあたって以下のタイプを考慮しました。
          <br></br>
          <br></br>・複数の画面を用意しアプリの説明を行う「スライドショータイプ」
          <br></br>・どうしても使ってほしい機能にユーザーを誘導する「ツールチップタイプ」
          <br></br>・ネイティブ広告のように各画面にさりげなく配置する「モジュールタイプ」
          <br></br>・指示に従って操作を進め、コンテンツを理解してもらう「インタラクティブなタイプ」
          <br></br><br></br>当アプリは、コアな機能として、シンプルにクリニックの予約を挙げており、真っ先に予約へとコンバージョンをしてもらうことができれば良いので「ツールチップ」や「インタラクティブ」なタイプが適切だと感じていましたが、プロジェクトの状況や、実装コストを踏まえ、単純に説明画面を並べる「スライドショータイプ」を採用しました。今後はプロジェクトの状況や離脱率を踏まえて最適化をしていきたいです。</p>
          <img src="./cfyou_uiImg01.jpg" alt="" className="apoflowImg"></img>

          <p className="thirdtitle">サインイン/サインアップページ</p>
          <p className="thirdtitle_p1">ターゲットユーザーとして、WEB版のサービスを元々利用していたユーザーを取り込みたいという意図から、ログインボタンを優先して設置しました。WEB版で提供していたメールアドレスによるログインとLINEログインをファーストビューでしっかりと視認できるようにし、加えて、2020年の5月のAppleの公式ガイドラインの改訂により、Appleログインも設置することになりました。そうした特性もあって、新規ユーザー登録を意図したがログインボタンを押してしまったユーザーが工数をかけずにユーザー登録のフローに復帰できるようなタブのデザインを工夫しました。また、細かいインタラクションとして、テキストボックス内の各プレースホルダーにおいても、ユーザーが困惑しないようなデザインをするように心がけました。</p>
          <img src="./cfyou_uiImg02.jpg" alt="" className="apoflowImg"></img>

          <p className="thirdtitle">クリニックページ</p>
          <p className="thirdtitle_p1">クリニックの詳細ページ内のボタンを押すことが予約へのコンバージョンとイコールの関係なので、同ページではフローティングさせたボタンを設置し、プライオリティの高い表現方法でボタンを設置しました。クリニックのリストページ、シングルページ共に、診療時間がファーストビューで視認することができないので、デザインとして反省しています。診療時間を軸にクリニックを選択するユーザーも中には存在するだろうから、ユーザーテストやヒアリングをしながら改善をしていきたい。</p>
          <img src="./cfyou_uiImg03.jpg" alt="" className="apoflowImg"></img>

          <p className="thirdtitle">予約ページ</p>
          <p className="thirdtitle_p1">予約メニューは「予定」としての予約と、「履歴」としての予約をタブで振り分けています。それぞれコレクション・ページと遷移先にシングルページがあり、予定の方のシングルページではキャンセルや、日時、決済方法が変更が行うことができ、履歴の方では診察後に受領する、領収書・明細書・処方されたお薬の情報を各情報を閲覧することができます。</p>
          <img src="./cfyou_uiImg04.jpg" alt="" className="apoflowImg"></img>

          <p className="thirdtitle">お薬情報</p>
          <p className="thirdtitle_p1">
          診察後、処方されたお薬の情報（処方箋）を確認するという行為は、領収書や明細書を予約履歴のページから確認する行為と近いものだと考え、予約履歴のページに紐づく形で閲覧できるようにしました。それぞれのページでは情報の優先順位を検討し、薬のリストページ（コレクション・ビュー）では主に処方されたお薬の名称とその量に関しての情報、シングルページでは上記の情報に加え、効果・効能や注意事項などの詳しい情報を掲載しています。
          </p>
          <img src="./cfyou_uiImg05.jpg" alt="" className="apoflowImg"></img>

          <p className="thirdtitle">マイページ</p>
          <p className="thirdtitle_p1">マイページはユーザーオブジェクトに紐づく情報を登録/編集できるような画面で、ユーザーにとっては診察の予約をするにあたって必要な情報をリストアしておくメニューになります。</p>
          <img src="./cfyou_uiImg06.jpg" alt="" className="apoflowImg"></img>

        </div>
      )
    }
  }


  class CFYOUTDIV06 extends React.Component {
    render() {
      return (
        <div className="CFYOUTDIV02">
          <div className="bigtitle">
            <img src="cfyou_title_sonota.svg" alt=""/>

          </div>


        <div className="CFYOUTDIV_graybrgd">
          <div className="CFYOUDIV_graybrdg_box">
          <div className="poster_disription_box">
            <div className="cfyou_poster_box">
            <p className="CFYOUDIV_graybrdg_h2">CLINIC FOR 実店舗で掲載するポスター</p>
            <p className="graybrdg_p1">
            モバイルアプリのリリースに伴い、インターネットメディアを通じてPRを行いましたが、とりわけ、普段からクリニックを利用していただいているユーザーにも直接的に認知をしてもらう必要があると考え、クリニック内で掲載するポスターの制作も行いました。
CLINIC FORはこれまで90%以上のユーザーがWEB上の診察予約サービスを介してクリニックを訪れていましたが、WEB上ではカバーできなかった機能をアプリで補完していることを紹介することによって、ロイヤリティの高いユーザーにより快適に受診してもらうことをこのポスターの主な目的としています。
具体的には、「既存のサービスを拡張し、より便利になる」という訴求軸の中で具体的な機能を紹介し、ダウンロードへの導線として、その場でダウンロードしていただけるようにQRコードを掲載しています。
ダウンロード数や、これからの機能アップデートに応じて新たなポスターも制作していければと考えています。
            </p>
          </div>
          <div className="cfyou_poster01Img_box">
          <img src="./cfyou_poster01.png" alt="" className="cfyou_poster01Img"></img>
          </div>
          </div>
    
          </div>
        </div>
        </div>
      )
    }
  }