import 'layui'
import '../../../public/base'
import '../../style/general.scss'
import '../../../public/css/common.css'
import '../../../public/css/reset.css'
import '../../../public/css/layui.css'
import '../../../public/css/swiper-bundle.min.css'
import './index.scss'

// eslint-disable-next-line no-undef
layui.use('element', function() {
  console.log(111)
})

$('.process-item').hover(function() {
  $(this).addClass('select').find('.process-item-title').stop(true, true).animate({ top: '-35px' })
  $(this).addClass('select').find('.process-item-desc').stop(true, true).animate({ opacity: 0.8 })
}, function() {
  $(this).removeClass('select').find('.process-item-title').stop(true, true).animate({ top: 0 })
  $(this).removeClass('select').find('.process-item-desc').stop(true, true).animate({ opacity: 0 })
})

$('.qr-img').hover(function() {
  $(this).find('img').stop(true, true).animate({ width: 150 / 96 + 'rem', height: 150 / 96 + 'rem' })
}, function() {
  $(this).find('img').stop(true, true).animate({ width: 140 / 96 + 'rem', height: 140 / 96 + 'rem' })
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
