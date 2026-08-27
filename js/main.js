$(function () {
  /*=================================================
  スムーススクロール
  ===================================================*/
  // ページ内リンクのイベント
  $('a[href^="#"]').click(function () {
    // aタグのhref属性の値が#で始まる要素をクリックした時に実行する
    // 'a[href^=#]'：「aタグのhref属性で値が#で始まる要素だったとき」

    // リンクを取得 クリックされたaタグのhref属性の中身をhrefという変数に代入する （#menuなど）をhrefという変数に代入する
    let href = $(this).attr("href");
    // this: クリックされたaタグ $('a[href^=#]')
    // .attr()は、要素の属性の値を取得する

    // ジャンプ先のid名をセット href == "#" 】 変数hrefの値が"#"【 || 】 または【href == ""】  であれば（【？】）
    // 【 $('html'); 】 へのリンク（≒ページトップ）,そうでなければ（【:】）【 $(href); 】 変数hrefの中身が到着地点になる
    let target = $(href == "#" || href == "" ? "html" : href);

    // トップからジャンプ先の要素までの距離を取得 （id=menuなどがページの一番上から何pxかを取得）
    let position = target.offset().top;
    // offset()は表示位置を取得する offset().topでページの一番上から何pxかを取得

    // animateでスムーススクロールを行う ページトップからpositionだけスクロールする
    // 600はスクロール速度で単位はミリ秒 swingはイージングのひとつ
    $("html, body").animate({ scrollTop: position }, 600, "swing");
    return false;
  });
  // {scrollTop:position}で、ページトップからposition分だけスクロールするという指定をしているいる。
  // linear：常に同じ速さで動く swing：始めはゆっくり動いて、途中はちょっと速め、最後はゆっくりと動く
  // 出発地点をクリックすると、URLの末尾にIDタグ(例.https://coffee.com#menu)が付与されてしまう。
  // これを防ぐために、最後に１文return falseを追加します。






  /*=================================================
  PICK UP スライダー
  ===================================================*/
  // カルーセル用 jQueryプラグイン「slick」の設定
  // マニュアル：https://kenwheeler.github.io/slick/
  $(".slick-area").slick({
    
    // arrows: false：矢印ナビゲーションを非表示にします。

    // (dots: true,)
    // スライドショーにドットナビゲーション（現在のスライドを示すドット）が表示されます。

    // centerMode: true：現在のスライドを中央に配置します。
    arrows:false,
    dots:true,
    centerMode:true,
    variableWidth:true,
    autoplay:true,
    autoplaySpeed:3000,
    centerPadding: "10px",
    // responsive: [
    //   {
    //     breakpoint: 768,
    //     settings: {
    //       // ブレークポイント（デバイスの幅が768ピクセル以下の場合）では、
    //       centerPadding: "50px",
    //       slidesToShow: 1,
    //       // centerPaddingとslidesToShowの値が変更され、中央余白が"50px"に、表示されるスライドの数が1になります。
    //     },
    //   },
    // ],
  });


  /*=================================================
  スクロール時の画像フェード表示
  ===================================================*/
  // スクロール時のイベント
//   $(window).scroll(function () {
//     // 画面がスクロールされた時に実行する

//     $(".fadein").each(function () {
//       // fadeinクラスに対して順に処理を行う
//       // .each()：個別に処理を行うためのメソッド。繰り返し処理を行いながら各要素に対して操作を実行することができる。


//       // スクロールした距離
//       let scroll = $(window).scrollTop();
//       // 現在のスクロール位置を取得する。
//       // scrollTop()：要素のスクロール位置を取得

//       // fadeinクラスの要素までの距離
//       let target = $(this).offset().top;

//       // 画面の高さ
//       let windowHeight = $(window).height();

//       // fadeinクラスの要素が画面内にきたタイミングで要素を表示
//       if (scroll > target - windowHeight + 200) {

//         // 条件が満たされた場合、要素の不透明度（opacity）を1に設定し、Y軸方向に移動（translateY）させます。
//         $(this).css("opacity", "1");
//         $(this).css("transform", "translateY(0)");
//       }
//     });

//   });

  // ② スクロール時のヘッダー背景色変化
  $(window).scroll(function() {
      const header = document.getElementById('header');
      if (window.scrollY > 100) {
          header.classList.add('is-scroll');
      } else {
          header.classList.remove('is-scroll');
      }
  });

  $(".open-modal").click(function(e){

      e.preventDefault();

      $("#modal")
          .css("display","flex")
          .hide()
          .fadeIn();

  });

  $(".close").click(function(){

      $("#modal").fadeOut();

  });

  $("#modal").click(function(){

      $(this).fadeOut();

  });

  $(".modal-content").click(function(e){
      e.stopPropagation();
  });

  // ④ ★追加：ハンバーガーメニューの開閉イベント
        const menuTrigger = document.getElementById('menuTrigger');
        const spNav = document.getElementById('spNav');
        const spNavLinks = document.querySelectorAll('.sp-nav-link');

        // 三本線がクリックされたら
        menuTrigger.addEventListener('click', function() {
            menuTrigger.classList.toggle('active'); // ボタンの形を「×」に変える
            spNav.classList.toggle('active');        // メニュー画面をフワッと出す
        });

        // メニューの中のリンクがクリックされたら、メニューを閉じる
        spNavLinks.forEach(link => {
            link.addEventListener('click', function() {
                menuTrigger.classList.remove('active');
                spNav.classList.remove('active');
            });
        });

   /*=================================================
スクロール時の画像フェード表示
===================================================*/

    $(window).scroll(function () {

        let scroll = $(window).scrollTop();
        let windowHeight = $(window).height();

        /* Conceptなどのfadein */
        $(".fadein").each(function () {

            let target = $(this).offset().top;

            if (scroll > target - windowHeight + 200) {

                $(this).css("opacity", "1");
                $(this).css("transform", "translateY(0)");

            }

        });


        /* Morningの画像 */
        $(".morning-img").each(function () {

            let target = $(this).offset().top;

            if (scroll > target - windowHeight + 150) {

                $(this).addClass("is-show");

            }

        });

    });
});