;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-jiahao" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M861.799 514.855c0 31.929-26.124 58.054-58.053 58.054L220.309 572.909c-31.93 0-58.054-26.125-58.054-58.054l0-29.013c0-31.929 26.124-58.053 58.054-58.053l583.438 0c31.93 0 58.053 26.124 58.053 58.053L861.8 514.855zM526.532 150.574c31.931 0 58.054 26.125 58.054 58.054l0 583.438c0 31.931-26.124 58.054-58.054 58.054l-29.011 0c-31.93 0-58.054-26.124-58.054-58.054L439.467 208.628c0-31.929 26.124-58.054 58.054-58.054L526.532 150.574z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-llhomesearch" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M945.186492 877.772614 785.585517 721.077829c50.831712-67.312058 81.346703-150.830217 81.346703-241.688551 0-221.929532-179.8696-401.845181-401.844158-401.845181-221.951021 0-401.845181 179.915649-401.845181 401.845181 0 221.974557 179.893136 401.868717 401.845181 401.868717 102.262058 0 195.336874-38.526455 266.25097-101.432157l159.831218 156.902516c15.697517 15.419178 40.513716 14.773472 55.44887-1.477654C961.507202 919.000598 960.884009 893.237841 945.186492 877.772614zM465.111598 810.366412c-182.777837 0-330.930061-148.176784-330.930061-330.954621 0-182.755324 148.152225-330.931085 330.930061-330.931085 182.757371 0 330.932108 148.175761 330.932108 330.931085C796.042683 662.190651 647.867946 810.366412 465.111598 810.366412z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-apple" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M673.73995 163.499557c38.391443-43.334341 64.321663-103.544921 57.267236-163.499557-55.331667 2.079536-122.324735 34.23237-162.059878 77.518722-35.592067 38.407439-66.705132 99.593801-58.386986 158.460681C572.306558 240.458404 635.300517 206.753916 673.73995 163.499557zM812.269073 544.118721c-1.375693-129.715088 113.638671-191.909225 118.805519-195.044526-64.641592-87.964394-165.355144-100.041702-201.171161-101.417395-85.644911-8.094196-167.178737 46.949535-210.657047 46.949535-43.366334 0-110.471377-45.765799-181.495546-44.59806-93.419178 1.295711-179.511988 50.56473-227.597271 128.419377-97.018376 156.653083-24.826466 388.825334 69.728458 515.980993 46.229696 62.162145 101.337413 132.08256 173.641297 129.523131 69.696465-2.55943 96.0106-41.942651 180.231828-41.942651 84.285214 0 107.911947 41.942651 181.623518 40.64694 74.943296-1.263718 122.452706-63.329884 168.314484-125.715979 53.07617-72.207906 74.911303-142.144317 76.223011-145.663533C958.236538 750.50472 813.772738 698.980204 812.269073 544.118721z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-s" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M862.71671 1019.416612 193.694467 1019.416612c-27.101241 0-49.157583-22.056342-49.157583-49.157583L144.536884 320.885288c0-27.101241 22.056342-49.157583 49.157583-49.157583l669.022243 0c27.101241 0 49.157583 22.056342 49.157583 49.157583l0 649.372717C911.874293 997.36027 889.817951 1019.416612 862.71671 1019.416612zM193.694467 320.486198l-0.399089 649.77283 669.421332 0.399089c0.217964 0 0.399089-0.181125 0.399089-0.399089L863.115799 320.885288 193.694467 320.486198z"  ></path>' +
    '' +
    '<path d="M276.608875 299.04691l-49.339732-4.743024C243.191788 128.512932 374.670262 3.494591 533.10569 3.494591c153.426345 0 284.409538 120.589472 304.699654 280.501532l-49.169863 6.243191C771.491009 155.021679 661.632949 53.052287 533.10569 53.052287 400.332734 53.052287 290.063305 158.808936 276.608875 299.04691z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-chenghao" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M588.856889 512l192.113778-192.170667c21.219556-21.162667 21.219556-55.580444 0-76.856889-21.219556-21.219556-55.637333-21.219556-76.856889 0L512 435.143111 319.886222 243.029333c-21.219556-21.219556-55.637333-21.219556-76.856889 0-21.219556 21.276444-21.219556 55.637333 0 76.856889L435.143111 512l-192.113778 192.113778c-21.219556 21.219556-21.219556 55.637333 0 76.856889 21.219556 21.219556 55.637333 21.219556 76.856889 0L512 588.856889l192.113778 192.113778c21.219556 21.219556 55.637333 21.219556 76.856889 0 21.219556-21.219556 21.219556-55.637333 0-76.856889L588.856889 512z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-liangheng" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M967.111111 455.111111H56.888889a56.888889 56.888889 0 0 1 0-113.777778h910.222222a56.888889 56.888889 0 0 1 0 113.777778zM56.888889 568.888889h910.222222a56.888889 56.888889 0 0 1 0 113.777778H56.888889a56.888889 56.888889 0 0 1 0-113.777778z" fill="#323333" ></path>' +
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