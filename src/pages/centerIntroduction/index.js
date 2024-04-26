import 'layui'
import '../../../public/base'
import '../../style/general.scss'
import '../../../public/css/common.css'
import '../../../public/css/reset.css'
import '../../../public/css/layui.css'
import '../../../public/css/swiper-bundle.min.css'
import './index.scss'

$('.playicon').click(function() {
  $('.bg').css('display', 'none')
  $('.video').css('display', 'block')
  $('video').css('display', 'block')
  document.getElementById('video').play()
})
