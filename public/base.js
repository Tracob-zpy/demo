function setRem() {
  let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth
  let htmlDom = document.querySelector('html')
  htmlDom.style.fontSize = htmlWidth / 20 + 'px'
  }
  setRem()
  window.onresize = function () {
  setRem()
  }


$(document).on('mousewheel DOMMouseScroll', function(e) {
  var delta = (e.originalEvent.wheelDelta && (e.originalEvent.wheelDelta > 0 ? 1 : -1)) || // chrome & ie
          (e.originalEvent.detail && (e.originalEvent.detail > 0 ? -1 : 1)) // firefox
  if (delta > 0) {
    // 向上滚
    $('#header').stop(true, false).animate({ top: 0 }, 'normal', 'linear')
    $('.content-body').stop(true, true).animate({ paddingTop: 98 / 96 + 'rem' }, 'normal', 'linear')
  } else if (delta < 0) {
    // 向下滚
    $('#header').stop(true, false).animate({ top: 0 - (98 / 96) + 'rem' }, 'normal', 'linear')
    $('.content-body').stop(true, true).animate({ paddingTop: 0 }, 'normal', 'linear')
  }
})