;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-apple" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M929.188634 351.23962c-53.874001-64.61053-129.213897-102.179171-200.229301-102.179171-94.294596 0-133.950781 43.271526-199.394283 43.271526-67.252707 0-118.40983-42.933835-199.808722-42.933835-80.008218 0-165.035754 46.690392-219.046878 126.930901-75.828013 112.906489-63.002916 324.83832 59.865459 505.503029 44.115754 64.676022 103.07354 137.397277 179.666986 138.068566 68.299549 0.537236 87.676875-42.129516 180.296319-42.60126 92.693122-0.403183 110.11798 43.005466 178.554652 42.197054 76.732615-0.538259 138.832975-80.973196 182.875051-145.71164 31.434943-46.223764 43.213197-69.573565 67.74594-121.965819C781.923616 686.945451 753.142106 444.419835 929.188634 351.23962L929.188634 351.23962zM657.453766 177.00946c34.284851-42.467207 60.211337-102.240569 50.735521-163.426093-55.892985 3.756557-121.199363 37.97387-159.387104 82.785471-34.641985 40.522925-63.286372 100.8325-52.204989 159.334915C557.719274 257.582543 620.72219 222.290759 657.453766 177.00946L657.453766 177.00946z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-bag" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M864.915374 1023.999998 159.084626 1023.999998C123.648714 1023.999998 94.918194 995.269478 94.918194 959.833566L94.918194 221.951685C94.918194 186.515773 123.648714 157.785253 159.084626 157.785253L352.771 157.785253 352.771 96.249645C352.771 43.167965 395.955008-2.0e-06 449.020647-2.0e-06L576.984554-2.0e-06C630.050193-2.0e-06 673.234201 43.167965 673.234201 96.249645L673.234201 157.785253 864.915374 157.785253C900.351286 157.785253 929.081806 186.515773 929.081806 221.951685L929.081806 959.833566C929.081806 995.269478 900.351286 1023.999998 864.915374 1023.999998ZM609.06777 96.249645C609.06777 78.555752 594.678447 64.166429 576.984554 64.166429L449.020647 64.166429C431.326754 64.166429 416.937431 78.555752 416.937431 96.249645L416.937431 157.785253 609.06777 157.785253 609.06777 96.249645ZM864.915374 221.951685 673.234201 221.951685 673.234201 287.962902C673.234201 287.962902 673.105868 320.17445 641.022653 320.17445 606.934236 320.17445 609.06777 287.962902 609.06777 287.962902L609.06777 221.951685 416.937431 221.951685 416.937431 287.962902C416.937431 287.962902 420.771376 320.014034 384.677758 320.014034 351.920795 320.014034 352.771 287.962902 352.771 287.962902L352.771 221.951685 159.084626 221.951685 159.084626 959.833566 864.915374 959.833566 864.915374 221.951685Z"  ></path>' +
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