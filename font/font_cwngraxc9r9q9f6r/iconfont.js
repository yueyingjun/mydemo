;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-search" viewBox="0 0 1000 1000">' +
    '' +
    '<path d="M173.0138 159.1531c57.5463-65.4416 141.5648-106.8386 228.5544-112.2539 81.4181-6.0939 164.835 18.8452 229.213 69.1301 78.1382 59.1929 128.0364 154.2514 131.3953 252.3189 4.656 84.9654-25.4258 170.7682-80.7975 235.1805 86.2121 86.2655 172.5211 172.4761 258.7132 258.7626-18.767 18.7093-37.4571 37.4956-56.2252 56.1839-87.0865-87.043-174.0941-174.1439-261.2206-261.1479-71.9662 52.6933-165.6295 74.3896-253.5105 59.1529-86.9496-13.9146-167.1265-64.2384-218.229-135.8719-32.2944-44.6377-53.334-97.406-60.3985-152.0589C77 332.4446 107.7624 231.0593 173.0138 159.1531zM392.387 87.4427c-13.8392 2.0766-27.7933 3.6875-41.2237 7.7038-85.8433 21.1157-160.159 83.5114-196.6847 163.9169-20.8447 44.7926-29.9279 94.9416-26.5311 144.2192 5.2007 95.2124 60.4575 185.6911 142.1664 234.5969 84.3103 52.6163 195.7723 57.8748 284.7596 13.7217 85.5715-40.5015 148.7652-124.5765 163.8077-218.0622 7.2774-42.737 5.2407-87.1599-6.4259-128.9456-24.0657-90.4197-93.9352-166.9448-181.6033-199.4907C486.8479 88.1802 439.0064 82.669 392.387 87.4427z"  ></path>' +
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