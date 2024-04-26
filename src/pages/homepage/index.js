import Swiper from 'swiper'
import 'layui'
import '../../style/general.scss'
import '../../../public/css/reset.css'
import '../../../public/css/layui.css'
import '../../../public/css/common.css'
import '../../../public/css/swiper-bundle.min.css'
import './index.scss'

function setRem() {
  const htmlWidth = document.documentElement.clientWidth || document.body.clientWidth
  const htmlDom = document.querySelector('html')
  htmlDom.style.fontSize = htmlWidth / 20 + 'px'
}
setRem()
window.onresize = function() {
  setRem()
}

// 最下边的数字
$.fn.numberRock = function(options, callback) {
  var defaults = {
    lastNumber: 100,
    duration: 2000,
    easing: 'swing' // swing(默认 : 缓冲 : 慢快慢)  linear(匀速的)
  }
  var opts = $.extend({}, defaults, options)

  $(this).animate({
    num: 'numberRock'
  }, {
    duration: opts.duration,
    easing: opts.easing,
    complete: function() {
    },
    step: function(a, b) { // 可以检测我们定时器的每一次变化
      // console.log(a);
      // console.log(b.pos);   //运动过程中的比例值(0~1)
      callback() // 一旦运动开始，就不用再出发初始化运动了
      $(this).html(parseInt(b.pos * opts.lastNumber))
    }
  })
}

$(function() {
  $('#count1').hasClass('done') || $('#count1').numberRock({
    lastNumber: 3,		// 终止数字
    duration: 2000,
    easing: 'linear' // 慢快慢
  }, function() {
    $('#count1').addClass('done')
  })
  $('#count2').hasClass('done') || $('#count2').numberRock({
    lastNumber: 20,		// 终止数字
    duration: 2000,
    easing: 'swing' // 慢快慢
  }, function() {
    $('#count2').addClass('done')
  })
  $('#count3').hasClass('done') || $('#count3').numberRock({
    lastNumber: 10000,		// 终止数字
    duration: 2000,
    easing: 'swing' // 慢快慢
  }, function() {
    $('#count3').addClass('done')
  })
})

// var rangeScrollHeight = $('#range')[0].offsetTop
// $(document).scroll(function() {
//   const scroH = $(document).scrollTop()
//   if (scroH >= rangeScrollHeight - 200) {
//     $('#count1').hasClass('done') || $('#count1').numberRock({
//       lastNumber: 2700,		// 终止数字
//       duration: 4000,
//       easing: 'linear' // 慢快慢
//     }, function() {
//       $('#count1').addClass('done')
//     })
//     $('#count2').hasClass('done') || $('#count2').numberRock({
//       lastNumber: 12,		// 终止数字
//       duration: 4000,
//       easing: 'swing' // 慢快慢
//     }, function() {
//       $('#count2').addClass('done')
//     })
//     $('#count3').hasClass('done') || $('#count3').numberRock({
//       lastNumber: 100,		// 终止数字
//       duration: 4000,
//       easing: 'swing' // 慢快慢
//     }, function() {
//       $('#count3').addClass('done')
//     })
//   }
// })

// 技术平台
// eslint-disable-next-line no-unused-vars
var swiper1 = new Swiper('.swiper-container1', {
  slidesPerView: 3,
  autoplay: true,
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
})

// 解决方案
// eslint-disable-next-line no-unused-vars
var swiper2 = new Swiper('.swiper-container2', {
  loopAdditionalSlides: 2,
  loop: true,
  autoplay: true,
  spaceBetween: 41,
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction'
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
})

// 服务与教育
$('.service-education .service-btn').mouseenter(function() {
  $('.service-img').addClass('activeImg')
}).mouseleave(function() {
  $('.service-img').removeClass('activeImg')
})

$('.service-education .education-btn').mouseenter(function() {
  $('.education-img').addClass('activeImg')
}).mouseleave(function() {
  $('.education-img').removeClass('activeImg')
})

// 新闻动态
$('.thumbnail-box a').mouseenter(function() {
  var index = $(this).index()
  var hotActivitys = $('.hot-activity')
  var hotImages = $('.hot-img')
  var hotThumbnails = $('.thumbnail-img')

  for (var i = 0; i < hotActivitys.length; i++) {
    if (hotActivitys.eq(i).hasClass('active')) {
      hotActivitys.eq(i).removeClass('active')
      hotImages.eq(i).removeClass('active')
      hotThumbnails.eq(i).removeClass('active')
    }
  }
  hotActivitys.eq(index).addClass('active')
  hotImages.eq(index).addClass('active')
  hotThumbnails.eq(index).addClass('active')
})

// 点击了解更多 img放大
$('.activity-content .activity-btn').mouseenter(function() {
  $('.hot-img img').addClass('activeImg')
}).mouseleave(function() {
  $('.hot-img img').removeClass('activeImg')
})

var flag = true

// 头部的实现
$('#header.header .header-content .nav').mouseenter(function() {
  if (flag) {
    $('#header.header').removeClass('homeTitle')
    // $('#logo-img').attr('src', '../../../public/images/face/concmix-logo-teal.png')
  }
})

$('#header.header .header-content .nav').mouseleave(function() {
  if (flag) {
    $('#header.header').addClass('homeTitle')
    // $('#logo-img').attr('src', '../../../public/images/face/concmix-logo-white.png')
  }
})
// #header.header .header-content .nav.nav - item a
$(document).on('mousewheel DOMMouseScroll', function(e) {
  var delta = (e.originalEvent.wheelDelta && (e.originalEvent.wheelDelta > 0 ? 1 : -1)) || // chrome & ie
    (e.originalEvent.detail && (e.originalEvent.detail > 0 ? -1 : 1)) // firefox
  if (delta > 0) {
    // 向上滚
    $('#header').stop(true, false).animate({ top: 0 }, 'normal', 'linear')
    $('.content-body').stop(true, true).animate({ paddingTop: '98px' }, 'normal', 'linear')
    // 更改样式
    if (flag) {
      $('#header.header').removeClass('homeTitle')
      // $('#logo-img').attr('src', '../../../public/images/face/concmix-logo-teal.png')
      flag = false
    }
  } else if (delta < 0) {
    $('#header.header').removeClass('homeTitle')
    // 向下滚
    $('#header').stop(true, false).animate({ top: '-98px' }, 'normal', 'linear')
    $('.content-body').stop(true, true).animate({ paddingTop: 0 }, 'normal', 'linear')
  }
  // 滚动到最顶部时候, 更改样式
  if (document.body.scrollTop === 0 && document.documentElement.scrollTop === 0) {
    flag = true
    $('#header.header').addClass('homeTitle')
    // $('#logo-img').attr('src', '../../../public/images/face/concmix-logo-white.png')
  }
})
