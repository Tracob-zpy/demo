// import '../../utils/adaptive'
import 'layui'
import Swiper from 'swiper'
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

// console.log($)
// eslint-disable-next-line no-undef
layui.use('element', function() {
  console.log(111)
})

var mySwiper = new Swiper('.swiper-container', {
  direction: 'horizontal', // 垂直切换选项
  // 如果需要分页器
  slidesPerView: 3

  // 如果需要滚动条

})

$('#button-prev').on('click', function() {
  console.log(123)
  mySwiper.slidePrev()
})
$('#button-next').click(function() {
  mySwiper.slideNext()
})
$('#slidebtn').click(function() {
  $('#slidedown').slideToggle('slow')
  $('#slidedown').css('display', 'flex')
  if ($('#slidedown').hasClass('slideup')) {
    $('#slidebtn').text('点击下拉更多')
    $('#slidedown').removeClass('slideup')
  } else {
    $('#slidebtn').text('点击收起更多')
    $('#slidedown').addClass('slideup')
  }
})

