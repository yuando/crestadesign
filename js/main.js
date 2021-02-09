//スティッキーヘッダー

$(function(){
  const $win = $(window),
      $fv = $('.fv'),
      $header = $('.header'),
      fvHeight = $fv.outerHeight(); //fvの高さ
      fixedClass = 'fixed' //cssで作る

      $win.on('load scroll', function(){ //windowがロードしてスクロールされた時に発動する関数
        const value = $(this).scrollTop(); //valueはスクロール量でthisはwindow

        if($win.width() > 767) { //pcとtabのとき
           if(value > fvHeight) { //スクロール量がfvの高さを超えたら
             $header.addClass(fixedClass);
           } else {
            $header.removeClass(fixedClass);
          }
        }
      });
});

//スライダー
$('.slider').slick({
  autoplay: true, //自動再生
  autoplaySpeed: 2000,
  fade: true,
  speed: 1000,
  cssEase: 'linear' 
});

//ハンバーガーメニュー
$('.burger-btn').on('click', function(){
  $('.header-nav').fadeToggle(300); //header-navの表示切り替え
  $(this).toggleClass('cross'); //thisは.burger-btnのこと。
  $('body').toggleClass('noscroll'); //ボタンのスクロールを防いで固定する。
});