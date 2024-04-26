import 'layui'
import '../../../public/base'
import Swiper from 'swiper'
import '../../style/general.scss'
import '../../../public/css/common.css'
import '../../../public/css/reset.css'
import '../../../public/css/layui.css'
import '../../../public/css/swiper-bundle.min.css'
import './index.scss'

$.fn.numberRock = function(options, callback, done) {
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
      done && done()
    },
    step: function(a, b) { // 可以检测我们定时器的每一次变化
      // console.log(a);
      // console.log(b.pos);   //运动过程中的比例值(0~1)
      callback() // 一旦运动开始，就不用再出发初始化运动了
      $(this).html(parseInt(b.pos * opts.lastNumber))
    }
  })
}
$(document).scroll(function() {
  const scroH = $(document).scrollTop()
  if (scroH >= 400) {
    $('#count1').hasClass('done') || $('#count1').numberRock({
      lastNumber: '50000',		// 终止数字
      duration: 800,
      easing: 'swing' // 慢快慢
    }, function() {
      $('#count1').addClass('done')
    }, function() {
      $('#count1').html('50,000')
    })
    $('#count2').hasClass('done') || $('#count2').numberRock({
      lastNumber: 700,		// 终止数字
      duration: 800,
      easing: 'swing' // 慢快慢
    }, function() {
      $('#count2').addClass('done')
    })
    $('#count3').hasClass('done') || $('#count3').numberRock({
      lastNumber: 2000000,		// 终止数字
      duration: 800,
      easing: 'swing' // 慢快慢
    }, function() {
      $('#count3').addClass('done')
    }, function() {
      $('#count3').html('2,000,000')
    })
    $('#count4').hasClass('done') || $('#count4').numberRock({
      lastNumber: 4500000,		// 终止数字
      duration: 800,
      easing: 'swing' // 慢快慢
    }, function() {
      $('#count4').addClass('done')
    }, function() {
      $('#count4').html('4,500,000')
    })
  }
})

// eslint-disable-next-line no-unused-vars
var mySwiper = new Swiper('.swiper-container', {
  direction: 'horizontal',
  loop: true
})

$('#button-prev').on('click', function() {
  mySwiper.slidePrev()
})
$('#button-next').click(function() {
  mySwiper.slideNext()
})

// $(document).on('mousewheel DOMMouseScroll', function(e) {
//   var delta = (e.originalEvent.wheelDelta && (e.originalEvent.wheelDelta > 0 ? 1 : -1)) || // chrome & ie
//           (e.originalEvent.detail && (e.originalEvent.detail > 0 ? -1 : 1)) // firefox
//   if (delta > 0) {
//     // 向上滚
//     $('#header').stop(true, false).animate({ top: 0 }, 'normal', 'linear')
//     $('.content-body').stop(true, true).animate({ paddingTop: '98px' }, 'normal', 'linear')
//   } else if (delta < 0) {
//     // 向下滚
//     $('#header').stop(true, false).animate({ top: '-98px' }, 'normal', 'linear')
//     $('.content-body').stop(true, true).animate({ paddingTop: 0 }, 'normal', 'linear')
//   }
// })
