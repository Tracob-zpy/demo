// import '../../utils/adaptive'
import 'layui'
import '../../../public/base'
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

// eslint-disable-next-line no-undef
layui.use('element', function() {
  console.log(111)
})
// !(function() {
//   console.log(Layui)
//   Layui.use('element', function() {
//     console.log(111)
//   })
// }())

// $(document).on('mousewheel DOMMouseScroll', function(e) {
//   var delta = (e.originalEvent.wheelDelta && (e.originalEvent.wheelDelta > 0 ? 1 : -1)) || // chrome & ie
//           (e.originalEvent.detail && (e.originalEvent.detail > 0 ? -1 : 1)) // firefox
//   if (delta > 0) {
//     // 向上滚
//     $('#header').stop(true, false).animate({ top: 0 }, 'normal', 'linear')
//     $('.content-body').stop(true, false).animate({ paddingTop: '98px' }, 'normal', 'linear')
//   } else if (delta < 0) {
//     // 向下滚
//     $('#header').stop(true, false).animate({ top: '-98px' }, 'normal', 'linear')
//     $('.content-body').stop(true, false).animate({ paddingTop: 0 }, 'normal', 'linear')
//   }
// })
