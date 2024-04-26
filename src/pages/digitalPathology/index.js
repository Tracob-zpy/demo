import 'layui'
import '../../../public/base'
import Swiper from 'swiper'
import '../../style/general.scss'
import '../../../public/css/common.css'
import '../../../public/css/reset.css'
import '../../../public/css/layui.css'
import '../../../public/css/swiper-bundle.min.css'
import './index.scss'

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

const microHtml = `
<div class="micro-swiper">
  <div class="micro-swiper-title">智能显微镜</div>
  <div class="micro-swiper-desc">联合国内知名显微镜厂商，联合研发智能病理诊断显微镜。
    该款显微镜以软硬件一体形式赋能病理诊断。此款智能显微镜集成核分裂项检测、细胞计数、免疫组化定量分析等辅助诊断算法，并通过自定义实体按键实现“一键采图”、“一键分析”等功能，在不改变病理医生阅片习惯的前提下，提升诊断效率，提高诊断精准度，为患者提供更加精准的诊断信息。</div>
</div>
<div class="micro-bot">
  <div class="micro-bot-title">应用场景</div>
  <div class="micro-bot-content">
    <div class="micro-bot-img">
      <img src="https://wsi.oss-cn-shanghai.aliyuncs.com/images/appendix/1612335767281QPoSUV/数字病理--智能显微镜--区域检测.jpg" alt="">
    </div>
    <div class="micro-bot-desc">
      <div class="micro-bot-desc-cont">PD-L1肺鳞癌阳性区域检测</div>
      <div class="micro-bot-desc-cont">PD-L1肺鳞癌阳性细胞检测</div>
    </div>
  </div>
  <div class="micro-bot-content">
    <div class="micro-bot-desc">
      <div class="micro-bot-desc-cont">PD-L1肺鳞癌细胞膜检测</div>
    </div>
    <div class="micro-bot-img">
      <img src="https://wsi.oss-cn-shanghai.aliyuncs.com/images/appendix/1612335767281QPoSUV/数字病理--智能显微镜--细胞膜检测.jpg" alt="">
    </div>
  </div>
</div>
`

const aiHtml = `
<div class="ai-container">
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <img src="https://wsi.oss-cn-shanghai.aliyuncs.com/images/appendix/1593765256909odMbbt/1.31.gif" alt="">
        <img src="https://wsi.oss-cn-shanghai.aliyuncs.com/images/appendix/1593765256909odMbbt/1.32.gif" alt="">
        <img src="https://wsi.oss-cn-shanghai.aliyuncs.com/images/appendix/1593765256909odMbbt/1.33.gif" alt="">
        <img src="https://wsi.oss-cn-shanghai.aliyuncs.com/images/appendix/1612335767281QPoSUV/1.34.jpg" alt="">
        <img src="https://wsi.oss-cn-shanghai.aliyuncs.com/images/appendix/1612335767281QPoSUV/1.35.jpg" alt="">
        <img src="https://wsi.oss-cn-shanghai.aliyuncs.com/images/appendix/1612335767281QPoSUV/1.36.jpg" alt="">
      </div>
      <div class="swiper-slide">
        <img src="https://wsi.oss-cn-shanghai.aliyuncs.com/images/appendix/1593765256909odMbbt/1.41.gif" alt="">
        <img src="https://wsi.oss-cn-shanghai.aliyuncs.com/images/appendix/1593765256909odMbbt/1.42.gif" alt="">
        <img src="https://wsi.oss-cn-shanghai.aliyuncs.com/images/appendix/1593765256909odMbbt/1.43.gif" alt="">
        <img src="https://wsi.oss-cn-shanghai.aliyuncs.com/images/appendix/1612335767281QPoSUV/1.44.jpg" alt="">
        <img src="https://wsi.oss-cn-shanghai.aliyuncs.com/images/appendix/1612335767281QPoSUV/1.45.jpg" alt="">
        <img src="https://wsi.oss-cn-shanghai.aliyuncs.com/images/appendix/1612335767281QPoSUV/1.46.jpg" alt="">
      </div>
    </div>
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
  <div class="swiper-title">染色层级</div>
  <div class="swiper-desc">染色矫正、染色分离、染色定量分析</div>
  <div class="ai-contentmid">
    <div class="aimid-item">
      <div class="mid-img">
        <img src="https://wsi.oss-cn-shanghai.aliyuncs.com/images/appendix/1593765256909odMbbt/2.3.gif" alt="">
      </div>
      <div class="mid-desc">
        <div class="mid-desc-title">细胞层级</div>
        <div class="mid-desc-cont">细胞检测、肿瘤细胞检测、细胞膜检测</div>
      </div>
    </div>
    <div class="aimid-item reserve">
      <div class="mid-img">
        <img src="https://wsi.oss-cn-shanghai.aliyuncs.com/images/appendix/1593765256909odMbbt/3.1.gif" alt="">
      </div>
      <div class="mid-desc">
        <div class="mid-desc-title">区域层级</div>
        <div class="mid-desc-cont">肿瘤区域检测与分割、腺体检测与分割Score</div>
      </div>
    </div>
    <div class="aimid-item">
      <div class="mid-img">
        <img src="https://wsi.oss-cn-shanghai.aliyuncs.com/images/appendix/1593768308078wVnsMm/small.gif" alt="">
      </div>
      <div class="mid-desc">
        <div class="mid-desc-title">图像层级</div>
        <div class="mid-desc-cont">消化道活检筛查、前列腺Gleason Score</div>
      </div>
    </div>
  </div>
  <div class="ai-bot">
    <div class="ai-bot-img">
      <img src="https://wsi.oss-cn-shanghai.aliyuncs.com/images/appendix/1612335767281QPoSUV/数字病理--病理AI--免疫组化.jpg" alt="">
    </div>
    <div class="ai-bot-title swiper-title">免疫组织化学定量分析</div>
    <div class="ai-bot-desc swiper-desc">Ki67 Score, HER2 Score, H-Score, Tumor Percentage Score(TPS)</div>
  </div>
</div>
`

$('.tabs-item').click(function() {
  if ($(this).hasClass('selected')) return
  console.log($('.ai-content'))
  $('.tabs-item').removeClass('selected')
  $(this).addClass('selected')
  $('.border').stop(true, true).animate({ top: $(this).index() * 120 / 96 + 'rem' })
  $('.tab-content-item').removeClass('selected')
  $('.tab-content-item').eq($(this).index()).addClass('selected')
  if ($(this).index() === 1) {
    if ($('.ai-content')[0].children.length === 0) {
      $('.ai-content').append(aiHtml)
      // eslint-disable-next-line no-unused-vars
      var mySwiper = new Swiper('.swiper-container', {
        direction: 'horizontal',
        loop: true,
        observer: true,
        observeParents: true,
        // 如果需要前进后退按钮
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      })
    }
  } else if ($(this).index() === 2) {
    if ($('.micro-content')[0].children.length === 0) {
      $('.micro-content').append(microHtml)
    }
  }
})

