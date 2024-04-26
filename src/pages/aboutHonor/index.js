// import '../../utils/adaptive'
import 'layui'
// import '../../../public/base'
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

function setRem() {
  const htmlWidth = document.documentElement.clientWidth || document.body.clientWidth
  const htmlDom = document.querySelector('html')
  htmlDom.style.fontSize = htmlWidth / 20 + 'px'
}
setRem()
window.onresize = function() {
  setRem()
}
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

var mySwiper = new Swiper('.swiper-container', {
  direction: 'horizontal', // 垂直切换选项
  loop: true,
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
// $('#slidebtn').click(function() {
//   $('#slidedown').slideToggle('slow')
//   $('#slidedown').css('display', 'flex')
//   if ($('#slidedown').hasClass('slideup')) {
//     $('#slidebtn').text('点击下拉更多')
//     $('#slidedown').removeClass('slideup')
//   } else {
//     $('#slidebtn').text('点击收起更多')
//     $('#slidedown').addClass('slideup')
//   }
// })

var flag = false

$('.swiper-slide').click(function() {
  const imageUrl = $(this).find('i')[0].dataset.imgurl
  flag = true
  $('body').css('overflow', 'hidden')
  $('.modal').css('display', 'block')
  const urls = Array.from($('.image').find('img')).map(item => {
    return item.src
  })
  if (urls.includes(imageUrl)) {
    const lastimg = Array.from($('.image').find('img')).filter(item => {
      return item.src === imageUrl
    })[0]
    lastimg.style.display = 'block'
    $('.loading').css('display', 'none')
  } else {
    const image = new Image()
    image.src = imageUrl
    image.onload = function() {
      $('.image').append(image)
      $('.loading').css('display', 'none')
    }
  }
})

$('.talent-item').click(function() {
  const imageUrl = $(this).find('i')[0].dataset.imgurl
  flag = true
  $('body').css('overflow', 'hidden')
  $('.modal').css('display', 'block')
  const urls = Array.from($('.image').find('img')).map(item => {
    return item.src
  })
  if (urls.includes(imageUrl)) {
    const lastimg = Array.from($('.image').find('img')).filter(item => {
      return item.src === imageUrl
    })[0]
    lastimg.style.display = 'block'
    $('.loading').css('display', 'none')
  } else {
    const image = new Image()
    image.src = imageUrl
    image.onload = function() {
      $('.image').append(image)
      $('.loading').css('display', 'none')
    }
  }
})

$('.close').click(function() {
  flag = false
  $('body').css('overflow', 'auto')
  $('.modal').css('display', 'none')
  $('.image').find('img').css('display', 'none')
  $('.loading').css('display', 'block')
})

$(document).on('mousewheel DOMMouseScroll', function(e) {
  if (!flag) {
    var delta = (e.originalEvent.wheelDelta && (e.originalEvent.wheelDelta > 0 ? 1 : -1)) || // chrome & ie
            (e.originalEvent.detail && (e.originalEvent.detail > 0 ? -1 : 1)) // firefox
    if (delta > 0) {
      // 向上滚
      $('#header').stop(true, false).animate({ top: 0 }, 'normal', 'linear')
      $('.content-body').stop(true, true).animate({ paddingTop: '98px' }, 'normal', 'linear')
    } else if (delta < 0) {
      // 向下滚
      $('#header').stop(true, false).animate({ top: '-98px' }, 'normal', 'linear')
      $('.content-body').stop(true, true).animate({ paddingTop: 0 }, 'normal', 'linear')
    }
  }
})
