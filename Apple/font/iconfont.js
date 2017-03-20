;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-fangdajing" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M850.453 800.653l0.105-0.223-197.89-193.493c38.961-45.944 61.363-103.043 63.198-161.203 3.664-70.834-24.038-144.003-74.073-195.682-42.739-45.105-102.838-75.421-164.821-83.209-12.031-1.639-24.352-2.458-36.625-2.458-61.344 0-121.126 19.942-168.322 56.113-54.705 40.781-92.468 101.996-103.616 167.925-11.054 61.446 0.911 127.372 32.811 180.82 21.819 37.152 52.888 69.073 89.828 92.298 33.909 21.453 72.924 35.474 112.775 40.485 11.958 1.62 24.219 2.439 36.445 2.439 56.586 0 112.572-17.3 158.132-48.773l197.642 193.343 3.655 3.368 0.105-0.091c6.515 5.235 14.768 8.14 23.319 8.14 20.202 0 36.637-16.127 36.637-35.947 0-8.787-3.358-17.279-9.308-23.853M649.856 536.743c-32.378 64.734-97.46 112.073-169.899 123.548-33.909 5.773-69.646 3.986-102.941-5.139-64.972-17.433-120.583-63.58-148.808-123.528-32.677-66.559-28.602-150.391 10.387-213.6 34.702-58.404 95.873-99.427 163.56-109.707l4.802-0.71c2.525-0.409 5.069-0.799 7.555-1.082 8.369-0.858 16.882-1.286 25.282-1.286 34.569 0 68.716 7.283 98.811 21.085 55.059 24.691 98.955 70.579 120.409 125.929 23.529 59.109 20.125 128.061-9.157 184.488z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-gouwu" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M854.569 253.672l-138.1 0 0-61.228c0-46.616-40.144-87.515-85.906-87.515l-235.8 0c-45.982 0-86.323 40.898-86.323 87.515l0 61.228-138.1 0c-14.097 0-25.514 11.436-25.514 25.531l0 538.151c0 70.005 54.082 126.984 120.571 126.984l494.511 0c66.273 0 120.194-56.98 120.194-126.984l0-538.151c0.001-14.095-11.434-25.531-25.531-25.531zM359.502 192.443c0-18.067 17.788-36.451 35.261-36.451l235.8 0c17.609 0 34.882 18.067 34.882 36.451l0 61.228-305.944 0 0-61.228zM308.439 304.735l0 82.433c-7.425 7.187-12.071 17.232-12.071 28.39 0 21.879 17.77 39.668 39.668 39.668 21.879 0 39.628-17.789 39.628-39.668 0-13.064-6.392-24.579-16.162-31.807l0-79.016 305.944 0 0 79.016c-9.787 7.227-16.2 18.742-16.2 31.807 0 21.879 17.748 39.668 39.646 39.668 21.899 0 39.648-17.789 39.648-39.668 0-11.158-4.647-21.203-12.071-28.39l0-82.433 112.589 0 0 457.902-633.19 0 0-457.902 112.571 0zM759.907 893.273l-494.511 0c-38.337 0-69.528-34.028-69.528-75.92l0-10.086 633.19 0 0 10.086c-0.001 41.892-31.031 75.92-69.152 75.92z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-pingguo" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M894.952065 742.033623c-1.27992 3.83976-21.310668 73.147428-70.523592 144.438972-42.621336 61.500156-86.71458 123.51228-156.278232 124.600213-68.47572 1.215924-90.362352-40.509468-168.501469-40.509468-78.011124 0-102.521592 39.421536-167.221549 41.725392-66.87582 2.687832-118.3926-67.1958-161.077932-128.375977C83.866758 758.544591 16.606962 528.670958 106.841322 374.632585c44.47722-77.11518 124.280232-126.07212 211.186801-127.480032 65.531904-1.215924 127.864008 44.029248 167.669521 44.029248 40.893444 0 116.280732-54.71658 195.827761-46.525092 33.27792 1.407912 126.456096 13.75914 186.484344 100.089744-4.671708 3.1998-111.481032 65.659896-110.265108 192.883945 1.5999 153.526405 135.799513 203.891257 137.207424 204.403225M629.496656 162.357853c35.83776-43.389288 59.452284-103.03356 53.244673-162.293857-51.1968 1.983876-113.656896 33.725892-150.710581 76.923192-32.829948 37.629648-61.692144 98.23386-53.628648 156.790201 56.892444 3.391788 115.384788-29.566152 151.03056-71.419536" fill="#000000" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)