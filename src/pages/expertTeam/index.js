// import '../../utils/adaptive'
import 'layui'
import '../../../public/base'
// import Swiper from 'swiper'
import '../../style/general.scss'
import '../../../public/css/common.css'
import '../../../public/css/reset.css'
import '../../../public/css/layui.css'
import '../../../public/css/swiper-bundle.min.css'
import './index.scss'

// window.adaptive.desinWidth = 750 // design width
// window.adaptive.baseFont = 18
// window.adaptive.maxWidth = 480 // max width
// window.adaptive.init()

console.log($)
// eslint-disable-next-line no-undef
layui.use('laypage', function() {
  console.log(111)
  // eslint-disable-next-line no-undef
  var laypage = layui.laypage
  laypage.render({
    elem: 'pagination',
    count: 35,
    limit: 12,
    layout: ['prev', 'page', 'next', 'count'],
    jump: function(obj, first) {
      if (!first) {
        if (obj.curr === 1) {
          $('#first').css('display', 'flex')
          $('#second').css('display', 'none')
          $('#third').css('display', 'none')
        } else if (obj.curr === 2) {
          $('#first').css('display', 'none')
          $('#second').css('display', 'flex')
          $('#third').css('display', 'none')
        } else {
          $('#first').css('display', 'none')
          $('#second').css('display', 'none')
          $('#third').css('display', 'flex')
        }
      }
    }
  })
})

$('.expertitem').hover(function() {
  if ($(this).offset().left + 748 <= $(document).width()) {
    $(this).find('.defaultitem').stop(true, true).css('display', 'none')
    $(this).find('.hoveritem').stop(true, true).css('display', 'block').find('.hover-desc-box').css('left', 240 / 96 + 'rem').stop(true, true).animate({ width: 474 / 96 + 'rem' })
  } else {
    $(this).find('.defaultitem').stop(true, true).css('display', 'none')
    $(this).find('.hoveritem').stop(true, true).css('display', 'block').find('.hover-desc-box').stop(true, true).animate({ width: 474 / 96 + 'rem', left: -474 / 96 + 'rem' })
  }
}, function() {
  $(this).find('.defaultitem').stop(true, true).css('display', 'block')
  if ($(this).offset().left + 748 <= $(document).width()) {
    $(this).find('.hoveritem').stop(true, true).css('display', 'none').find('.hover-desc-box').stop(true, true).animate({ width: '0px', left: 240 / 96 + 'rem' })
  } else {
    $(this).find('.hoveritem').stop(true, true).css('display', 'none').find('.hover-desc-box').stop(true, true).animate({ width: '0px', left: '0' })
  }
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
