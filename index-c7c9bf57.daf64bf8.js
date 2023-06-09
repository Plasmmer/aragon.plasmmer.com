// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../node_modules/use-wallet/dist/index-c7c9bf57.js":[function(require,module,exports) {
var process = require("process");
var Buffer = require("buffer").Buffer;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__moduleExports = exports.default = void 0;

var _index2d8aeb = require("./index-2d8aeb45.js");

require("react");

require("@aragon/provided-connector");

require("events");

require("buffer");

var _crypto_commonjsExternal8b32930c = require("./_crypto_commonjs-external-8b32930c.js");

var _subscriptionManagerB429be9d = require("./subscriptionManager-b429be9d.js");

require("stream");

require("string_decoder");

require("crypto");

require("assert");

require("util");

var _indexBc4c198a = require("./index-bc4c198a.js");

var _indexAcf3c = require("./index-acf3c274.js");

var _url_commonjsExternalCa = require("./_url_commonjs-external-ca765683.js");

require("url");

var _http = _interopRequireDefault(require("http"));

var _https = _interopRequireDefault(require("https"));

var _os = _interopRequireDefault(require("os"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var B = (0, _index2d8aeb.d)(function (e, t) {
  var r = _index2d8aeb.f && _index2d8aeb.f.__spreadArrays || function () {
    for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;

    var r = Array(e),
        o = 0;

    for (t = 0; t < n; t++) for (var i = arguments[t], s = 0, a = i.length; s < a; s++, o++) r[o] = i[s];

    return r;
  };

  Object.defineProperty(t, "__esModule", {
    value: !0
  });

  var o = function (e, t, n) {
    this.name = e, this.version = t, this.os = n, this.type = "browser";
  };

  t.BrowserInfo = o;

  var i = function (e) {
    this.version = e, this.type = "node", this.name = "node", this.os = process.platform;
  };

  t.NodeInfo = i;

  var s = function (e, t, n, r) {
    this.name = e, this.version = t, this.os = n, this.bot = r, this.type = "bot-device";
  };

  t.SearchBotDeviceInfo = s;

  var a = function () {
    this.type = "bot", this.bot = !0, this.name = "bot", this.version = null, this.os = null;
  };

  t.BotInfo = a;

  var c = function () {
    this.type = "react-native", this.name = "react-native", this.version = null, this.os = null;
  };

  t.ReactNativeInfo = c;
  var u = /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/,
      l = [["aol", /AOLShield\/([0-9\._]+)/], ["edge", /Edge\/([0-9\._]+)/], ["edge-ios", /EdgiOS\/([0-9\._]+)/], ["yandexbrowser", /YaBrowser\/([0-9\._]+)/], ["kakaotalk", /KAKAOTALK\s([0-9\.]+)/], ["samsung", /SamsungBrowser\/([0-9\.]+)/], ["silk", /\bSilk\/([0-9._-]+)\b/], ["miui", /MiuiBrowser\/([0-9\.]+)$/], ["beaker", /BeakerBrowser\/([0-9\.]+)/], ["edge-chromium", /Edg\/([0-9\.]+)/], ["chromium-webview", /(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/], ["chrome", /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/], ["phantomjs", /PhantomJS\/([0-9\.]+)(:?\s|$)/], ["crios", /CriOS\/([0-9\.]+)(:?\s|$)/], ["firefox", /Firefox\/([0-9\.]+)(?:\s|$)/], ["fxios", /FxiOS\/([0-9\.]+)/], ["opera-mini", /Opera Mini.*Version\/([0-9\.]+)/], ["opera", /Opera\/([0-9\.]+)(?:\s|$)/], ["opera", /OPR\/([0-9\.]+)(:?\s|$)/], ["ie", /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/], ["ie", /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/], ["ie", /MSIE\s(7\.0)/], ["bb10", /BB10;\sTouch.*Version\/([0-9\.]+)/], ["android", /Android\s([0-9\.]+)/], ["ios", /Version\/([0-9\._]+).*Mobile.*Safari.*/], ["safari", /Version\/([0-9\._]+).*Safari/], ["facebook", /FBAV\/([0-9\.]+)/], ["instagram", /Instagram\s([0-9\.]+)/], ["ios-webview", /AppleWebKit\/([0-9\.]+).*Mobile/], ["ios-webview", /AppleWebKit\/([0-9\.]+).*Gecko\)$/], ["searchbot", /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/]],
      h = [["iOS", /iP(hone|od|ad)/], ["Android OS", /Android/], ["BlackBerry OS", /BlackBerry|BB10/], ["Windows Mobile", /IEMobile/], ["Amazon OS", /Kindle/], ["Windows 3.11", /Win16/], ["Windows 95", /(Windows 95)|(Win95)|(Windows_95)/], ["Windows 98", /(Windows 98)|(Win98)/], ["Windows 2000", /(Windows NT 5.0)|(Windows 2000)/], ["Windows XP", /(Windows NT 5.1)|(Windows XP)/], ["Windows Server 2003", /(Windows NT 5.2)/], ["Windows Vista", /(Windows NT 6.0)/], ["Windows 7", /(Windows NT 6.1)/], ["Windows 8", /(Windows NT 6.2)/], ["Windows 8.1", /(Windows NT 6.3)/], ["Windows 10", /(Windows NT 10.0)/], ["Windows ME", /Windows ME/], ["Open BSD", /OpenBSD/], ["Sun OS", /SunOS/], ["Chrome OS", /CrOS/], ["Linux", /(Linux)|(X11)/], ["Mac OS", /(Mac_PowerPC)|(Macintosh)/], ["QNX", /QNX/], ["BeOS", /BeOS/], ["OS/2", /OS\/2/]];

  function f(e) {
    return "" !== e && l.reduce(function (t, n) {
      var r = n[0],
          o = n[1];
      if (t) return t;
      var i = o.exec(e);
      return !!i && [r, i];
    }, !1);
  }

  function d(e) {
    var t = f(e);
    if (!t) return null;
    var n = t[0],
        i = t[1];
    if ("searchbot" === n) return new a();
    var c = i[1] && i[1].split(/[._]/).slice(0, 3);
    c ? c.length < 3 && (c = r(c, function (e) {
      for (var t = [], n = 0; n < e; n++) t.push("0");

      return t;
    }(3 - c.length))) : c = [];
    var l = c.join("."),
        h = p(e),
        d = u.exec(e);
    return d && d[1] ? new s(n, l, h, d[1]) : new o(n, c.join("."), h);
  }

  function p(e) {
    for (var t = 0, n = h.length; t < n; t++) {
      var r = h[t],
          o = r[0];
      if (r[1].exec(e)) return o;
    }

    return null;
  }

  function _() {
    return "undefined" != typeof process && process.version ? new i(process.version.slice(1)) : null;
  }

  t.detect = function (e) {
    return e ? d(e) : "undefined" == typeof document && "undefined" != typeof navigator && "ReactNative" === navigator.product ? new c() : "undefined" != typeof navigator ? d(navigator.userAgent) : _();
  }, t.browserName = function (e) {
    var t = f(e);
    return t ? t[0] : null;
  }, t.parseUserAgent = d, t.detectOS = p, t.getNodeVersion = _;
});
(0, _index2d8aeb.e)(B);
B.BrowserInfo, B.NodeInfo, B.SearchBotDeviceInfo, B.BotInfo, B.ReactNativeInfo, B.detect, B.browserName, B.parseUserAgent, B.detectOS, B.getNodeVersion;
var I = (0, _index2d8aeb.d)(function (e, t) {
  function n(e) {
    return B.detect(e);
  }

  function r() {
    const e = n();
    return e && e.os ? e.os : void 0;
  }

  function o() {
    const e = n();
    return !(!e || !e.name) && "node" === e.name.toLowerCase();
  }

  function i(e) {
    let t = void 0;
    return "undefined" != typeof window && void 0 !== window[e] && (t = window[e]), t;
  }

  function s(e) {
    const t = i(e);
    if (!t) throw new Error(`${e} is not defined in Window`);
    return t;
  }

  function a() {
    return s("document");
  }

  function c() {
    return i("navigator");
  }

  function u() {
    return s("location");
  }

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.detectEnv = n, t.detectOS = r, t.isIOS = function () {
    const e = r();
    return !!e && e.toLowerCase().includes("ios");
  }, t.isMobile = function () {
    const e = r();
    return !!e && (e.toLowerCase().includes("android") || e.toLowerCase().includes("ios"));
  }, t.isNode = o, t.isBrowser = function () {
    return !o() && !!c();
  }, t.unsafeGetFromWindow = i, t.safeGetFromWindow = s, t.getDocument = a, t.getDocumentUnsafe = function () {
    return i("document");
  }, t.getNavigator = function () {
    return s("navigator");
  }, t.getNavigatorUnsafe = c, t.getLocation = u, t.getLocationUnsafe = function () {
    return i("location");
  }, t.getCrypto = function () {
    return s("crypto");
  }, t.getCryptoUnsafe = function () {
    return i("crypto");
  }, t.getLocalStorage = function () {
    return s("localStorage");
  }, t.getLocalStorageUnsafe = function () {
    return i("localStorage");
  }, t.getMeta = function () {
    let e, t;

    try {
      e = a(), t = u();
    } catch (e) {
      return null;
    }

    function n(...t) {
      const n = e.getElementsByTagName("meta");

      for (let e = 0; e < n.length; e++) {
        const r = n[e],
              o = ["itemprop", "property", "name"].map(e => r.getAttribute(e)).filter(e => {
          e && t.includes(e);
        });

        if (o.length && o) {
          const e = r.getAttribute("content");
          if (e) return e;
        }
      }

      return "";
    }

    const r = function () {
      let t = n("name", "og:site_name", "og:title", "twitter:title");
      return t || (t = e.title), t;
    }();

    return {
      description: n("description", "og:description", "twitter:description", "keywords"),
      url: t.origin,
      icons: function () {
        const n = e.getElementsByTagName("link"),
              r = [];

        for (let e = 0; e < n.length; e++) {
          const o = n[e],
                i = o.getAttribute("rel");

          if (i && i.toLowerCase().indexOf("icon") > -1) {
            const e = o.getAttribute("href");
            if (e) if (-1 === e.toLowerCase().indexOf("https:") && -1 === e.toLowerCase().indexOf("http:") && 0 !== e.indexOf("//")) {
              let n = t.protocol + "//" + t.host;
              if (0 === e.indexOf("/")) n += e;else {
                const r = t.pathname.split("/");
                r.pop(), n += r.join("/") + "/" + e;
              }
              r.push(n);
            } else if (0 === e.indexOf("//")) {
              const n = t.protocol + e;
              r.push(n);
            } else r.push(e);
          }
        }

        return r;
      }(),
      name: r
    };
  };
});
(0, _index2d8aeb.e)(I);
I.detectEnv, I.detectOS, I.isIOS, I.isMobile, I.isNode, I.isBrowser, I.unsafeGetFromWindow, I.safeGetFromWindow, I.getDocument, I.getDocumentUnsafe, I.getNavigator, I.getNavigatorUnsafe, I.getLocation, I.getLocationUnsafe, I.getCrypto, I.getCryptoUnsafe, I.getLocalStorage, I.getLocalStorageUnsafe, I.getMeta;
var M = (0, _index2d8aeb.d)(function (e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.reservedEvents = ["session_request", "session_update", "exchange_key", "connect", "disconnect", "display_uri", "modal_closed", "transport_open", "transport_close"], t.signingMethods = ["eth_sendTransaction", "eth_signTransaction", "eth_sign", "eth_signTypedData", "eth_signTypedData_v1", "eth_signTypedData_v2", "eth_signTypedData_v3", "eth_signTypedData_v4", "personal_sign"], t.stateMethods = ["eth_accounts", "eth_chainId", "net_version"], t.deeplinkChoiceKey = "WALLETCONNECT_DEEPLINK_CHOICE";
});
(0, _index2d8aeb.e)(M);
M.reservedEvents, M.signingMethods, M.stateMethods, M.deeplinkChoiceKey;
var H = U;
U.strict = G, U.loose = q;
var L = Object.prototype.toString,
    D = {
  "[object Int8Array]": !0,
  "[object Int16Array]": !0,
  "[object Int32Array]": !0,
  "[object Uint8Array]": !0,
  "[object Uint8ClampedArray]": !0,
  "[object Uint16Array]": !0,
  "[object Uint32Array]": !0,
  "[object Float32Array]": !0,
  "[object Float64Array]": !0
};

function U(e) {
  return G(e) || q(e);
}

function G(e) {
  return e instanceof Int8Array || e instanceof Int16Array || e instanceof Int32Array || e instanceof Uint8Array || e instanceof Uint8ClampedArray || e instanceof Uint16Array || e instanceof Uint32Array || e instanceof Float32Array || e instanceof Float64Array;
}

function q(e) {
  return D[L.call(e)];
}

var j = H.strict,
    K = function (e) {
  if (j(e)) {
    var t = Buffer.from(e.buffer);
    return e.byteLength !== e.buffer.byteLength && (t = t.slice(e.byteOffset, e.byteOffset + e.byteLength)), t;
  }

  return Buffer.from(e);
},
    F = (0, _index2d8aeb.d)(function (e, t) {
  var r = _index2d8aeb.f && _index2d8aeb.f.__importDefault || function (e) {
    return e && e.__esModule ? e : {
      default: e
    };
  };

  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  const o = r(_subscriptionManagerB429be9d.g),
        i = r(H),
        s = r(K);

  function c(e) {
    return new Uint8Array(e);
  }

  function u(e, t = !1) {
    const n = e.toString("hex");
    return t ? R(n) : n;
  }

  function l(e) {
    return e.toString("utf8");
  }

  function h(e) {
    return _(u(e));
  }

  function f(e) {
    return s.default(e);
  }

  function d(e) {
    return Buffer.from(S(e), "hex");
  }

  function p(e) {
    return c(d(e));
  }

  function _(e) {
    return new o.default(S(e), "hex").toNumber();
  }

  function g(e) {
    return Buffer.from(e, "utf8");
  }

  function y(e, t) {
    const n = S(k(new o.default(e).toString(16)));
    return t ? R(n) : n;
  }

  function v(e, t) {
    return !("string" != typeof e || !e.match(/^0x[0-9A-Fa-f]*$/)) && (!t || e.length === 2 + 2 * t);
  }

  function m(e) {
    return Buffer.isBuffer(e);
  }

  function b(e) {
    return i.default.strict(e) && !m(e);
  }

  function E(e) {
    return !b(e) && !m(e) && void 0 !== e.byteLength;
  }

  function w(e, t, n, r = "0") {
    const o = t - e.length;
    let i = e;

    if (o > 0) {
      const t = r.repeat(o);
      i = n ? t + e : e + t;
    }

    return i;
  }

  function S(e) {
    return e.replace(/^0x/, "");
  }

  function R(e) {
    return e.startsWith("0x") ? e : `0x${e}`;
  }

  function k(e) {
    return (e = (e = S(e)).length % 2 != 0 ? "0" + e : e) && (e = R(e)), e;
  }

  t.bufferToArray = c, t.bufferToHex = u, t.bufferToUtf8 = l, t.bufferToNumber = h, t.arrayToBuffer = f, t.arrayToHex = function (e, t = !1) {
    return u(f(e), t);
  }, t.arrayToUtf8 = function (e) {
    return l(f(e));
  }, t.arrayToNumber = function (e) {
    return h(f(e));
  }, t.hexToBuffer = d, t.hexToArray = p, t.hexToUtf8 = function (e) {
    return l(d(e));
  }, t.hexToNumber = _, t.utf8ToBuffer = g, t.utf8ToArray = function (e) {
    return c(g(e));
  }, t.utf8ToHex = function (e, t = !1) {
    return u(g(e), t);
  }, t.utf8ToNumber = function (e) {
    return new o.default(e, 10).toNumber();
  }, t.numberToBuffer = function (e) {
    return d(y(e));
  }, t.numberToArray = function (e) {
    return p(y(e));
  }, t.numberToHex = y, t.numberToUtf8 = function (e) {
    return new o.default(e).toString();
  }, t.isHexString = v, t.isBuffer = m, t.isTypedArray = b, t.isArrayBuffer = E, t.getType = function (e) {
    return m(e) ? "buffer" : b(e) ? "typed-array" : E(e) ? "array-buffer" : Array.isArray(e) ? "array" : typeof e;
  }, t.getEncoding = function (e) {
    return v(e) ? "hex" : "utf8";
  }, t.concatBuffers = function (...e) {
    return Buffer.concat(e);
  }, t.trimLeft = function (e, t) {
    const n = e.length - t;
    return n > 0 && (e = e.slice(n)), e;
  }, t.trimRight = function (e, t) {
    return e.slice(0, t);
  }, t.padLeft = function (e, t, n = "0") {
    return w(e, t, !0, n);
  }, t.padRight = function (e, t, n = "0") {
    return w(e, t, !1, n);
  }, t.removeHexPrefix = S, t.addHexPrefix = R, t.sanitizeHex = k, t.removeHexLeadingZeros = function (e) {
    const t = e.startsWith("0x");
    return e = (e = S(e)).startsWith("0") ? e.substring(1) : e, t ? R(e) : e;
  };
});

(0, _index2d8aeb.e)(F);
F.bufferToArray, F.bufferToHex, F.bufferToUtf8, F.bufferToNumber, F.arrayToBuffer, F.arrayToHex, F.arrayToUtf8, F.arrayToNumber, F.hexToBuffer, F.hexToArray, F.hexToUtf8, F.hexToNumber, F.utf8ToBuffer, F.utf8ToArray, F.utf8ToHex, F.utf8ToNumber, F.numberToBuffer, F.numberToArray, F.numberToHex, F.numberToUtf8, F.isHexString, F.isBuffer, F.isTypedArray, F.isArrayBuffer, F.getType, F.getEncoding, F.concatBuffers, F.trimLeft, F.trimRight, F.padLeft, F.padRight, F.removeHexPrefix, F.addHexPrefix, F.sanitizeHex, F.removeHexLeadingZeros;
var W = (0, _index2d8aeb.d)(function (e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  });

  const n = _url_commonjsExternalCa.t.__importStar(F);

  t.convertArrayBufferToBuffer = function (e) {
    return n.arrayToBuffer(new Uint8Array(e));
  }, t.convertArrayBufferToUtf8 = function (e) {
    return n.arrayToUtf8(new Uint8Array(e));
  }, t.convertArrayBufferToHex = function (e, t) {
    return n.arrayToHex(new Uint8Array(e), !t);
  }, t.convertArrayBufferToNumber = function (e) {
    return n.arrayToNumber(new Uint8Array(e));
  }, t.concatArrayBuffers = function (...e) {
    return n.hexToArray(e.map(e => n.arrayToHex(new Uint8Array(e))).join("")).buffer;
  }, t.convertBufferToArrayBuffer = function (e) {
    return n.bufferToArray(e).buffer;
  }, t.convertBufferToUtf8 = function (e) {
    return n.bufferToUtf8(e);
  }, t.convertBufferToHex = function (e, t) {
    return n.bufferToHex(e, !t);
  }, t.convertBufferToNumber = function (e) {
    return n.bufferToNumber(e);
  }, t.concatBuffers = function (...e) {
    return n.concatBuffers(...e);
  }, t.convertUtf8ToArrayBuffer = function (e) {
    return n.utf8ToArray(e).buffer;
  }, t.convertUtf8ToBuffer = function (e) {
    return n.utf8ToBuffer(e);
  }, t.convertUtf8ToHex = function (e, t) {
    return n.utf8ToHex(e, !t);
  }, t.convertUtf8ToNumber = function (e) {
    return n.utf8ToNumber(e);
  }, t.convertHexToBuffer = function (e) {
    return n.hexToBuffer(e);
  }, t.convertHexToArrayBuffer = function (e) {
    return n.hexToArray(e).buffer;
  }, t.convertHexToUtf8 = function (e) {
    return n.hexToUtf8(e);
  }, t.convertHexToNumber = function (e) {
    return n.hexToNumber(e);
  }, t.convertNumberToBuffer = function (e) {
    return n.numberToBuffer(e);
  }, t.convertNumberToArrayBuffer = function (e) {
    return n.numberToArray(e).buffer;
  }, t.convertNumberToUtf8 = function (e) {
    return n.numberToUtf8(e);
  }, t.convertNumberToHex = function (e, t) {
    return n.numberToHex(e, !t);
  };
});
(0, _index2d8aeb.e)(W);
W.convertArrayBufferToBuffer, W.convertArrayBufferToUtf8, W.convertArrayBufferToHex, W.convertArrayBufferToNumber, W.concatArrayBuffers, W.convertBufferToArrayBuffer, W.convertBufferToUtf8, W.convertBufferToHex, W.convertBufferToNumber, W.concatBuffers, W.convertUtf8ToArrayBuffer, W.convertUtf8ToBuffer, W.convertUtf8ToHex, W.convertUtf8ToNumber, W.convertHexToBuffer, W.convertHexToArrayBuffer, W.convertHexToUtf8, W.convertHexToNumber, W.convertNumberToBuffer, W.convertNumberToArrayBuffer, W.convertNumberToUtf8, W.convertNumberToHex;
var z = (0, _index2d8aeb.d)(function (e) {
  /**
   * [js-sha3]{@link https://github.com/emn178/js-sha3}
   *
   * @version 0.8.0
   * @author Chen, Yi-Cyuan [emn178@gmail.com]
   * @copyright Chen, Yi-Cyuan 2015-2018
   * @license MIT
   */
  !function () {
    var t = "input is invalid type",
        r = "object" == typeof window,
        o = r ? window : {};
    o.JS_SHA3_NO_WINDOW && (r = !1);
    var i = !r && "object" == typeof self;
    !o.JS_SHA3_NO_NODE_JS && "object" == typeof process && process.versions && process.versions.node ? o = _index2d8aeb.f : i && (o = self);
    var s = !o.JS_SHA3_NO_COMMON_JS && e.exports,
        a = !o.JS_SHA3_NO_ARRAY_BUFFER && "undefined" != typeof ArrayBuffer,
        c = "0123456789abcdef".split(""),
        u = [4, 1024, 262144, 67108864],
        l = [0, 8, 16, 24],
        h = [1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907, 0, 2147483649, 0, 2147516545, 2147483648, 32777, 2147483648, 138, 0, 136, 0, 2147516425, 0, 2147483658, 0, 2147516555, 0, 139, 2147483648, 32905, 2147483648, 32771, 2147483648, 32770, 2147483648, 128, 2147483648, 32778, 0, 2147483658, 2147483648, 2147516545, 2147483648, 32896, 2147483648, 2147483649, 0, 2147516424, 2147483648],
        f = [224, 256, 384, 512],
        d = [128, 256],
        p = ["hex", "buffer", "arrayBuffer", "array", "digest"],
        _ = {
      128: 168,
      256: 136
    };
    !o.JS_SHA3_NO_NODE_JS && Array.isArray || (Array.isArray = function (e) {
      return "[object Array]" === Object.prototype.toString.call(e);
    }), !a || !o.JS_SHA3_NO_ARRAY_BUFFER_IS_VIEW && ArrayBuffer.isView || (ArrayBuffer.isView = function (e) {
      return "object" == typeof e && e.buffer && e.buffer.constructor === ArrayBuffer;
    });

    for (var g = function (e, t, n) {
      return function (r) {
        return new O(e, t, e).update(r)[n]();
      };
    }, y = function (e, t, n) {
      return function (r, o) {
        return new O(e, t, o).update(r)[n]();
      };
    }, v = function (e, t, n) {
      return function (t, r, o, i) {
        return S["cshake" + e].update(t, r, o, i)[n]();
      };
    }, m = function (e, t, n) {
      return function (t, r, o, i) {
        return S["kmac" + e].update(t, r, o, i)[n]();
      };
    }, b = function (e, t, n, r) {
      for (var o = 0; o < p.length; ++o) {
        var i = p[o];
        e[i] = t(n, r, i);
      }

      return e;
    }, E = function (e, t) {
      var n = g(e, t, "hex");
      return n.create = function () {
        return new O(e, t, e);
      }, n.update = function (e) {
        return n.create().update(e);
      }, b(n, g, e, t);
    }, w = [{
      name: "keccak",
      padding: [1, 256, 65536, 16777216],
      bits: f,
      createMethod: E
    }, {
      name: "sha3",
      padding: [6, 1536, 393216, 100663296],
      bits: f,
      createMethod: E
    }, {
      name: "shake",
      padding: [31, 7936, 2031616, 520093696],
      bits: d,
      createMethod: function (e, t) {
        var n = y(e, t, "hex");
        return n.create = function (n) {
          return new O(e, t, n);
        }, n.update = function (e, t) {
          return n.create(t).update(e);
        }, b(n, y, e, t);
      }
    }, {
      name: "cshake",
      padding: u,
      bits: d,
      createMethod: function (e, t) {
        var n = _[e],
            r = v(e, 0, "hex");
        return r.create = function (r, o, i) {
          return o || i ? new O(e, t, r).bytepad([o, i], n) : S["shake" + e].create(r);
        }, r.update = function (e, t, n, o) {
          return r.create(t, n, o).update(e);
        }, b(r, v, e, t);
      }
    }, {
      name: "kmac",
      padding: u,
      bits: d,
      createMethod: function (e, t) {
        var n = _[e],
            r = m(e, 0, "hex");
        return r.create = function (r, o, i) {
          return new N(e, t, o).bytepad(["KMAC", i], n).bytepad([r], n);
        }, r.update = function (e, t, n, o) {
          return r.create(e, n, o).update(t);
        }, b(r, m, e, t);
      }
    }], S = {}, R = [], k = 0; k < w.length; ++k) for (var T = w[k], C = T.bits, A = 0; A < C.length; ++A) {
      var x = T.name + "_" + C[A];

      if (R.push(x), S[x] = T.createMethod(C[A], T.padding), "sha3" !== T.name) {
        var P = T.name + C[A];
        R.push(P), S[P] = S[x];
      }
    }

    function O(e, t, n) {
      this.blocks = [], this.s = [], this.padding = t, this.outputBits = n, this.reset = !0, this.finalized = !1, this.block = 0, this.start = 0, this.blockCount = 1600 - (e << 1) >> 5, this.byteCount = this.blockCount << 2, this.outputBlocks = n >> 5, this.extraBytes = (31 & n) >> 3;

      for (var r = 0; r < 50; ++r) this.s[r] = 0;
    }

    function N(e, t, n) {
      O.call(this, e, t, n);
    }

    O.prototype.update = function (e) {
      if (this.finalized) throw new Error("finalize already called");
      var n,
          r = typeof e;

      if ("string" !== r) {
        if ("object" !== r) throw new Error(t);
        if (null === e) throw new Error(t);
        if (a && e.constructor === ArrayBuffer) e = new Uint8Array(e);else if (!(Array.isArray(e) || a && ArrayBuffer.isView(e))) throw new Error(t);
        n = !0;
      }

      for (var o, i, s = this.blocks, c = this.byteCount, u = e.length, h = this.blockCount, f = 0, d = this.s; f < u;) {
        if (this.reset) for (this.reset = !1, s[0] = this.block, o = 1; o < h + 1; ++o) s[o] = 0;
        if (n) for (o = this.start; f < u && o < c; ++f) s[o >> 2] |= e[f] << l[3 & o++];else for (o = this.start; f < u && o < c; ++f) (i = e.charCodeAt(f)) < 128 ? s[o >> 2] |= i << l[3 & o++] : i < 2048 ? (s[o >> 2] |= (192 | i >> 6) << l[3 & o++], s[o >> 2] |= (128 | 63 & i) << l[3 & o++]) : i < 55296 || i >= 57344 ? (s[o >> 2] |= (224 | i >> 12) << l[3 & o++], s[o >> 2] |= (128 | i >> 6 & 63) << l[3 & o++], s[o >> 2] |= (128 | 63 & i) << l[3 & o++]) : (i = 65536 + ((1023 & i) << 10 | 1023 & e.charCodeAt(++f)), s[o >> 2] |= (240 | i >> 18) << l[3 & o++], s[o >> 2] |= (128 | i >> 12 & 63) << l[3 & o++], s[o >> 2] |= (128 | i >> 6 & 63) << l[3 & o++], s[o >> 2] |= (128 | 63 & i) << l[3 & o++]);

        if (this.lastByteIndex = o, o >= c) {
          for (this.start = o - c, this.block = s[h], o = 0; o < h; ++o) d[o] ^= s[o];

          B(d), this.reset = !0;
        } else this.start = o;
      }

      return this;
    }, O.prototype.encode = function (e, t) {
      var n = 255 & e,
          r = 1,
          o = [n];

      for (n = 255 & (e >>= 8); n > 0;) o.unshift(n), n = 255 & (e >>= 8), ++r;

      return t ? o.push(r) : o.unshift(r), this.update(o), o.length;
    }, O.prototype.encodeString = function (e) {
      var n,
          r = typeof e;

      if ("string" !== r) {
        if ("object" !== r) throw new Error(t);
        if (null === e) throw new Error(t);
        if (a && e.constructor === ArrayBuffer) e = new Uint8Array(e);else if (!(Array.isArray(e) || a && ArrayBuffer.isView(e))) throw new Error(t);
        n = !0;
      }

      var o = 0,
          i = e.length;
      if (n) o = i;else for (var s = 0; s < e.length; ++s) {
        var c = e.charCodeAt(s);
        c < 128 ? o += 1 : c < 2048 ? o += 2 : c < 55296 || c >= 57344 ? o += 3 : (c = 65536 + ((1023 & c) << 10 | 1023 & e.charCodeAt(++s)), o += 4);
      }
      return o += this.encode(8 * o), this.update(e), o;
    }, O.prototype.bytepad = function (e, t) {
      for (var n = this.encode(t), r = 0; r < e.length; ++r) n += this.encodeString(e[r]);

      var o = t - n % t,
          i = [];
      return i.length = o, this.update(i), this;
    }, O.prototype.finalize = function () {
      if (!this.finalized) {
        this.finalized = !0;
        var e = this.blocks,
            t = this.lastByteIndex,
            n = this.blockCount,
            r = this.s;
        if (e[t >> 2] |= this.padding[3 & t], this.lastByteIndex === this.byteCount) for (e[0] = e[n], t = 1; t < n + 1; ++t) e[t] = 0;

        for (e[n - 1] |= 2147483648, t = 0; t < n; ++t) r[t] ^= e[t];

        B(r);
      }
    }, O.prototype.toString = O.prototype.hex = function () {
      this.finalize();

      for (var e, t = this.blockCount, n = this.s, r = this.outputBlocks, o = this.extraBytes, i = 0, s = 0, a = ""; s < r;) {
        for (i = 0; i < t && s < r; ++i, ++s) e = n[i], a += c[e >> 4 & 15] + c[15 & e] + c[e >> 12 & 15] + c[e >> 8 & 15] + c[e >> 20 & 15] + c[e >> 16 & 15] + c[e >> 28 & 15] + c[e >> 24 & 15];

        s % t == 0 && (B(n), i = 0);
      }

      return o && (e = n[i], a += c[e >> 4 & 15] + c[15 & e], o > 1 && (a += c[e >> 12 & 15] + c[e >> 8 & 15]), o > 2 && (a += c[e >> 20 & 15] + c[e >> 16 & 15])), a;
    }, O.prototype.arrayBuffer = function () {
      this.finalize();
      var e,
          t = this.blockCount,
          n = this.s,
          r = this.outputBlocks,
          o = this.extraBytes,
          i = 0,
          s = 0,
          a = this.outputBits >> 3;
      e = o ? new ArrayBuffer(r + 1 << 2) : new ArrayBuffer(a);

      for (var c = new Uint32Array(e); s < r;) {
        for (i = 0; i < t && s < r; ++i, ++s) c[s] = n[i];

        s % t == 0 && B(n);
      }

      return o && (c[i] = n[i], e = e.slice(0, a)), e;
    }, O.prototype.buffer = O.prototype.arrayBuffer, O.prototype.digest = O.prototype.array = function () {
      this.finalize();

      for (var e, t, n = this.blockCount, r = this.s, o = this.outputBlocks, i = this.extraBytes, s = 0, a = 0, c = []; a < o;) {
        for (s = 0; s < n && a < o; ++s, ++a) e = a << 2, t = r[s], c[e] = 255 & t, c[e + 1] = t >> 8 & 255, c[e + 2] = t >> 16 & 255, c[e + 3] = t >> 24 & 255;

        a % n == 0 && B(r);
      }

      return i && (e = a << 2, t = r[s], c[e] = 255 & t, i > 1 && (c[e + 1] = t >> 8 & 255), i > 2 && (c[e + 2] = t >> 16 & 255)), c;
    }, N.prototype = new O(), N.prototype.finalize = function () {
      return this.encode(this.outputBits, !0), O.prototype.finalize.call(this);
    };

    var B = function (e) {
      var t, n, r, o, i, s, a, c, u, l, f, d, p, _, g, y, v, m, b, E, w, S, R, k, T, C, A, x, P, O, N, B, I, M, H, L, D, U, G, q, j, K, F, W, z, V, Y, J, X, $, Q, Z, ee, te, ne, re, oe, ie, se, ae, ce, ue, le;

      for (r = 0; r < 48; r += 2) o = e[0] ^ e[10] ^ e[20] ^ e[30] ^ e[40], i = e[1] ^ e[11] ^ e[21] ^ e[31] ^ e[41], s = e[2] ^ e[12] ^ e[22] ^ e[32] ^ e[42], a = e[3] ^ e[13] ^ e[23] ^ e[33] ^ e[43], c = e[4] ^ e[14] ^ e[24] ^ e[34] ^ e[44], u = e[5] ^ e[15] ^ e[25] ^ e[35] ^ e[45], l = e[6] ^ e[16] ^ e[26] ^ e[36] ^ e[46], f = e[7] ^ e[17] ^ e[27] ^ e[37] ^ e[47], t = (d = e[8] ^ e[18] ^ e[28] ^ e[38] ^ e[48]) ^ (s << 1 | a >>> 31), n = (p = e[9] ^ e[19] ^ e[29] ^ e[39] ^ e[49]) ^ (a << 1 | s >>> 31), e[0] ^= t, e[1] ^= n, e[10] ^= t, e[11] ^= n, e[20] ^= t, e[21] ^= n, e[30] ^= t, e[31] ^= n, e[40] ^= t, e[41] ^= n, t = o ^ (c << 1 | u >>> 31), n = i ^ (u << 1 | c >>> 31), e[2] ^= t, e[3] ^= n, e[12] ^= t, e[13] ^= n, e[22] ^= t, e[23] ^= n, e[32] ^= t, e[33] ^= n, e[42] ^= t, e[43] ^= n, t = s ^ (l << 1 | f >>> 31), n = a ^ (f << 1 | l >>> 31), e[4] ^= t, e[5] ^= n, e[14] ^= t, e[15] ^= n, e[24] ^= t, e[25] ^= n, e[34] ^= t, e[35] ^= n, e[44] ^= t, e[45] ^= n, t = c ^ (d << 1 | p >>> 31), n = u ^ (p << 1 | d >>> 31), e[6] ^= t, e[7] ^= n, e[16] ^= t, e[17] ^= n, e[26] ^= t, e[27] ^= n, e[36] ^= t, e[37] ^= n, e[46] ^= t, e[47] ^= n, t = l ^ (o << 1 | i >>> 31), n = f ^ (i << 1 | o >>> 31), e[8] ^= t, e[9] ^= n, e[18] ^= t, e[19] ^= n, e[28] ^= t, e[29] ^= n, e[38] ^= t, e[39] ^= n, e[48] ^= t, e[49] ^= n, _ = e[0], g = e[1], V = e[11] << 4 | e[10] >>> 28, Y = e[10] << 4 | e[11] >>> 28, x = e[20] << 3 | e[21] >>> 29, P = e[21] << 3 | e[20] >>> 29, ae = e[31] << 9 | e[30] >>> 23, ce = e[30] << 9 | e[31] >>> 23, K = e[40] << 18 | e[41] >>> 14, F = e[41] << 18 | e[40] >>> 14, M = e[2] << 1 | e[3] >>> 31, H = e[3] << 1 | e[2] >>> 31, y = e[13] << 12 | e[12] >>> 20, v = e[12] << 12 | e[13] >>> 20, J = e[22] << 10 | e[23] >>> 22, X = e[23] << 10 | e[22] >>> 22, O = e[33] << 13 | e[32] >>> 19, N = e[32] << 13 | e[33] >>> 19, ue = e[42] << 2 | e[43] >>> 30, le = e[43] << 2 | e[42] >>> 30, te = e[5] << 30 | e[4] >>> 2, ne = e[4] << 30 | e[5] >>> 2, L = e[14] << 6 | e[15] >>> 26, D = e[15] << 6 | e[14] >>> 26, m = e[25] << 11 | e[24] >>> 21, b = e[24] << 11 | e[25] >>> 21, $ = e[34] << 15 | e[35] >>> 17, Q = e[35] << 15 | e[34] >>> 17, B = e[45] << 29 | e[44] >>> 3, I = e[44] << 29 | e[45] >>> 3, k = e[6] << 28 | e[7] >>> 4, T = e[7] << 28 | e[6] >>> 4, re = e[17] << 23 | e[16] >>> 9, oe = e[16] << 23 | e[17] >>> 9, U = e[26] << 25 | e[27] >>> 7, G = e[27] << 25 | e[26] >>> 7, E = e[36] << 21 | e[37] >>> 11, w = e[37] << 21 | e[36] >>> 11, Z = e[47] << 24 | e[46] >>> 8, ee = e[46] << 24 | e[47] >>> 8, W = e[8] << 27 | e[9] >>> 5, z = e[9] << 27 | e[8] >>> 5, C = e[18] << 20 | e[19] >>> 12, A = e[19] << 20 | e[18] >>> 12, ie = e[29] << 7 | e[28] >>> 25, se = e[28] << 7 | e[29] >>> 25, q = e[38] << 8 | e[39] >>> 24, j = e[39] << 8 | e[38] >>> 24, S = e[48] << 14 | e[49] >>> 18, R = e[49] << 14 | e[48] >>> 18, e[0] = _ ^ ~y & m, e[1] = g ^ ~v & b, e[10] = k ^ ~C & x, e[11] = T ^ ~A & P, e[20] = M ^ ~L & U, e[21] = H ^ ~D & G, e[30] = W ^ ~V & J, e[31] = z ^ ~Y & X, e[40] = te ^ ~re & ie, e[41] = ne ^ ~oe & se, e[2] = y ^ ~m & E, e[3] = v ^ ~b & w, e[12] = C ^ ~x & O, e[13] = A ^ ~P & N, e[22] = L ^ ~U & q, e[23] = D ^ ~G & j, e[32] = V ^ ~J & $, e[33] = Y ^ ~X & Q, e[42] = re ^ ~ie & ae, e[43] = oe ^ ~se & ce, e[4] = m ^ ~E & S, e[5] = b ^ ~w & R, e[14] = x ^ ~O & B, e[15] = P ^ ~N & I, e[24] = U ^ ~q & K, e[25] = G ^ ~j & F, e[34] = J ^ ~$ & Z, e[35] = X ^ ~Q & ee, e[44] = ie ^ ~ae & ue, e[45] = se ^ ~ce & le, e[6] = E ^ ~S & _, e[7] = w ^ ~R & g, e[16] = O ^ ~B & k, e[17] = N ^ ~I & T, e[26] = q ^ ~K & M, e[27] = j ^ ~F & H, e[36] = $ ^ ~Z & W, e[37] = Q ^ ~ee & z, e[46] = ae ^ ~ue & te, e[47] = ce ^ ~le & ne, e[8] = S ^ ~_ & y, e[9] = R ^ ~g & v, e[18] = B ^ ~k & C, e[19] = I ^ ~T & A, e[28] = K ^ ~M & L, e[29] = F ^ ~H & D, e[38] = Z ^ ~W & V, e[39] = ee ^ ~z & Y, e[48] = ue ^ ~te & re, e[49] = le ^ ~ne & oe, e[0] ^= h[r], e[1] ^= h[r + 1];
    };

    if (s) e.exports = S;else for (k = 0; k < R.length; ++k) o[R[k]] = S[R[k]];
  }();
}),
    V = (0, _index2d8aeb.d)(function (e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  });

  const n = _url_commonjsExternalCa.t.__importStar(F);

  t.sanitizeHex = function (e) {
    return n.sanitizeHex(e);
  }, t.addHexPrefix = function (e) {
    return n.addHexPrefix(e);
  }, t.removeHexPrefix = function (e) {
    return n.removeHexPrefix(e);
  }, t.removeHexLeadingZeros = function (e) {
    return n.removeHexLeadingZeros(n.addHexPrefix(e));
  }, t.safeJsonParse = function (e) {
    try {
      return JSON.parse(e);
    } catch (t) {
      return e;
    }
  }, t.safeJsonStringify = function (e) {
    return "string" == typeof e ? e : JSON.stringify(e, (e, t) => void 0 === t ? null : t);
  }, t.payloadId = function () {
    return new Date().getTime() * Math.pow(10, 3) + Math.floor(Math.random() * Math.pow(10, 3));
  }, t.uuid = function () {
    return ((e, t) => {
      for (t = e = ""; e++ < 36; t += 51 * e & 52 ? (15 ^ e ? 8 ^ Math.random() * (20 ^ e ? 16 : 4) : 4).toString(16) : "-");

      return t;
    })();
  }, t.logDeprecationWarning = function () {
    console.warn("DEPRECATION WARNING: This WalletConnect client library will be deprecated in favor of @walletconnect/client. Please check docs.walletconnect.org to learn more about this migration!");
  };
});
(0, _index2d8aeb.e)(V);
V.sanitizeHex, V.addHexPrefix, V.removeHexPrefix, V.removeHexLeadingZeros, V.safeJsonParse, V.safeJsonStringify, V.payloadId, V.uuid, V.logDeprecationWarning;
var Y = (0, _index2d8aeb.d)(function (e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  });

  const n = _url_commonjsExternalCa.t.__importStar(F);

  t.isEmptyString = function (e) {
    return "" === e || "string" == typeof e && "" === e.trim();
  }, t.isEmptyArray = function (e) {
    return !(e && e.length);
  }, t.isBuffer = function (e) {
    return n.isBuffer(e);
  }, t.isTypedArray = function (e) {
    return n.isTypedArray(e);
  }, t.isArrayBuffer = function (e) {
    return n.isArrayBuffer(e);
  }, t.getType = function (e) {
    return n.getType(e);
  }, t.getEncoding = function (e) {
    return n.getEncoding(e);
  }, t.isHexString = function (e, t) {
    return n.isHexString(e, t);
  }, t.isJsonRpcSubscription = function (e) {
    return "object" == typeof e.params;
  }, t.isJsonRpcRequest = function (e) {
    return void 0 !== e.method;
  }, t.isJsonRpcResponseSuccess = function (e) {
    return void 0 !== e.result;
  }, t.isJsonRpcResponseError = function (e) {
    return void 0 !== e.error;
  }, t.isInternalEvent = function (e) {
    return void 0 !== e.event;
  }, t.isReservedEvent = function (e) {
    return M.reservedEvents.includes(e) || e.startsWith("wc_");
  }, t.isSilentPayload = function (e) {
    return !!e.method.startsWith("wc_") || !M.signingMethods.includes(e.method);
  };
});
(0, _index2d8aeb.e)(Y);
Y.isEmptyString, Y.isEmptyArray, Y.isBuffer, Y.isTypedArray, Y.isArrayBuffer, Y.getType, Y.getEncoding, Y.isHexString, Y.isJsonRpcSubscription, Y.isJsonRpcRequest, Y.isJsonRpcResponseSuccess, Y.isJsonRpcResponseError, Y.isInternalEvent, Y.isReservedEvent, Y.isSilentPayload;
var J = (0, _index2d8aeb.d)(function (e, t) {
  function n(e) {
    e = F.removeHexPrefix(e.toLowerCase());
    const t = F.removeHexPrefix(z.keccak_256(W.convertUtf8ToBuffer(e)));
    let n = "";

    for (let r = 0; r < e.length; r++) parseInt(t[r], 16) > 7 ? n += e[r].toUpperCase() : n += e[r];

    return F.addHexPrefix(n);
  }

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.toChecksumAddress = n, t.isValidAddress = e => !!e && "0x" === e.toLowerCase().substring(0, 2) && !!/^(0x)?[0-9a-f]{40}$/i.test(e) && (!(!/^(0x)?[0-9a-f]{40}$/.test(e) && !/^(0x)?[0-9A-F]{40}$/.test(e)) || e === n(e)), t.parsePersonalSign = function (e) {
    return Y.isEmptyArray(e) || Y.isHexString(e[0]) || (e[0] = W.convertUtf8ToHex(e[0])), e;
  }, t.parseTransactionData = function (e) {
    if (void 0 === e.from || !t.isValidAddress(e.from)) throw new Error("Transaction object must include a valid 'from' value.");

    function n(e) {
      let t = e;
      return ("number" == typeof e || "string" == typeof e && !Y.isEmptyString(e)) && (Y.isHexString(e) ? "string" == typeof e && (t = V.sanitizeHex(e)) : t = W.convertNumberToHex(e)), "string" == typeof t && (t = V.removeHexLeadingZeros(t)), t;
    }

    const r = {
      from: V.sanitizeHex(e.from),
      to: void 0 === e.to ? "" : V.sanitizeHex(e.to),
      gasPrice: void 0 === e.gasPrice ? "" : n(e.gasPrice),
      gas: void 0 === e.gas ? void 0 === e.gasLimit ? "" : n(e.gasLimit) : n(e.gas),
      value: void 0 === e.value ? "" : n(e.value),
      nonce: void 0 === e.nonce ? "" : n(e.nonce),
      data: void 0 === e.data ? "" : V.sanitizeHex(e.data) || "0x"
    },
          o = ["gasPrice", "gas", "value", "nonce"];
    return Object.keys(r).forEach(e => {
      !r[e].trim().length && o.includes(e) && delete r[e];
    }), r;
  };
});
(0, _index2d8aeb.e)(J);
J.toChecksumAddress, J.isValidAddress, J.parsePersonalSign, J.parseTransactionData;
var X = (0, _index2d8aeb.d)(function (e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.setLocal = function (e, t) {
    const n = V.safeJsonStringify(t),
          r = I.getLocalStorageUnsafe();
    r && r.setItem(e, n);
  }, t.getLocal = function (e) {
    let t = null,
        n = null;
    const r = I.getLocalStorageUnsafe();
    return r && (n = r.getItem(e)), t = V.safeJsonParse(n), t;
  }, t.removeLocal = function (e) {
    const t = I.getLocalStorageUnsafe();
    t && t.removeItem(e);
  };
});
(0, _index2d8aeb.e)(X);
X.setLocal, X.getLocal, X.removeLocal;
var $ = (0, _index2d8aeb.d)(function (e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.promisify = function (e, t) {
    return (...n) => _url_commonjsExternalCa.t.__awaiter(this, void 0, void 0, function* () {
      return new Promise((r, o) => {
        e.apply(t, [...n, (e, t) => {
          null == e && o(e), r(t);
        }]);
      });
    });
  }, t.formatRpcError = function (e) {
    const t = e.message || "Failed or Rejected Request";
    let n = -32e3;
    if (e && !e.code) switch (t) {
      case "Parse error":
        n = -32700;
        break;

      case "Invalid request":
        n = -32600;
        break;

      case "Method not found":
        n = -32601;
        break;

      case "Invalid params":
        n = -32602;
        break;

      case "Internal error":
        n = -32603;
        break;

      default:
        n = -32e3;
    }
    return {
      code: n,
      message: t
    };
  };
});
(0, _index2d8aeb.e)($);
$.promisify, $.formatRpcError;
var Q = (0, _index2d8aeb.d)(function (e, t) {
  function n(e) {
    const t = {},
          n = ("?" === e[0] ? e.substr(1) : e).split("&");

    for (let e = 0; e < n.length; e++) {
      const r = n[e].match(/\w+(?==)/i) || [],
            o = n[e].match(/=.+/i) || [];
      r[0] && (t[decodeURIComponent(r[0])] = decodeURIComponent(o[0].substr(1)));
    }

    return t;
  }

  function r(e) {
    let t = "";
    const n = Object.keys(e);
    return n && n.forEach((n, r) => {
      const o = e[n];
      0 === r ? t = `?${n}=${o}` : t += `&${n}=${o}`;
    }), t;
  }

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.getQueryString = function (e) {
    const t = -1 !== e.indexOf("?") ? e.indexOf("?") : void 0;
    return void 0 !== t ? e.substr(t) : "";
  }, t.appendToQueryString = function (e, t) {
    let o = n(e);
    return o = Object.assign(Object.assign({}, o), t), e = r(o);
  }, t.parseQueryString = n, t.formatQueryString = r;
});
(0, _index2d8aeb.e)(Q);
Q.getQueryString, Q.appendToQueryString, Q.parseQueryString, Q.formatQueryString;
var Z = (0, _index2d8aeb.d)(function (e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.isWalletConnectSession = function (e) {
    return void 0 !== e.bridge;
  }, t.parseWalletConnectUri = function (e) {
    const t = e.indexOf(":"),
          n = -1 !== e.indexOf("?") ? e.indexOf("?") : void 0,
          r = e.substring(0, t),
          o = function (e) {
      const t = e.split("@");
      return {
        handshakeTopic: t[0],
        version: parseInt(t[1], 10)
      };
    }(e.substring(t + 1, n)),
          i = function (e) {
      const t = Q.parseQueryString(e);
      return {
        key: t.key || "",
        bridge: t.bridge || ""
      };
    }(void 0 !== n ? e.substr(n) : "");

    return Object.assign(Object.assign({
      protocol: r
    }, o), i);
  };
});
(0, _index2d8aeb.e)(Z);
Z.isWalletConnectSession, Z.parseWalletConnectUri;
var ee = (0, _index2d8aeb.d)(function (e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), _url_commonjsExternalCa.t.__exportStar(I, t), _url_commonjsExternalCa.t.__exportStar(M, t), _url_commonjsExternalCa.t.__exportStar(W, t), _url_commonjsExternalCa.t.__exportStar(J, t), _url_commonjsExternalCa.t.__exportStar(X, t), _url_commonjsExternalCa.t.__exportStar(V, t), _url_commonjsExternalCa.t.__exportStar($, t), _url_commonjsExternalCa.t.__exportStar(Z, t), _url_commonjsExternalCa.t.__exportStar(Q, t), _url_commonjsExternalCa.t.__exportStar(Y, t);
});
(0, _index2d8aeb.e)(ee);
var te = (0, _index2d8aeb.d)(function (e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  t.default = class {
    constructor() {
      this._eventEmitters = [], "undefined" != typeof window && void 0 !== window.addEventListener && (window.addEventListener("online", () => this.trigger("online")), window.addEventListener("offline", () => this.trigger("offline")));
    }

    on(e, t) {
      this._eventEmitters.push({
        event: e,
        callback: t
      });
    }

    trigger(e) {
      let t = [];
      e && (t = this._eventEmitters.filter(t => t.event === e)), t.forEach(e => {
        e.callback();
      });
    }

  };
});
(0, _index2d8aeb.e)(te);

var ne = function () {
  throw new Error("ws does not work in the browser. Browser clients must use the native WebSocket object");
},
    re = (0, _index2d8aeb.d)(function (e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  });

  const r = _url_commonjsExternalCa.t.__importDefault(te),
        o = void 0 !== _index2d8aeb.f.WebSocket ? _index2d8aeb.f.WebSocket : ne;

  t.default = class {
    constructor(e) {
      if (this._queue = [], this._events = [], this._subscriptions = [], this._initiating = !1, this._url = "", this._netMonitor = null, this._socket = null, this._nextSocket = null, this._subscriptions = e.subscriptions || [], this._netMonitor = e.netMonitor || new r.default(), !e.url || "string" != typeof e.url) throw new Error("Missing or invalid WebSocket url");
      this._url = e.url, this._netMonitor.on("online", () => this._socketCreate());
    }

    set readyState(e) {}

    get readyState() {
      return this._socket ? this._socket.readyState : -1;
    }

    set connecting(e) {}

    get connecting() {
      return 0 === this.readyState;
    }

    set connected(e) {}

    get connected() {
      return 1 === this.readyState;
    }

    set closing(e) {}

    get closing() {
      return 2 === this.readyState;
    }

    set closed(e) {}

    get closed() {
      return 3 === this.readyState;
    }

    open() {
      this._socketCreate();
    }

    close() {
      this._socketClose();
    }

    send(e, t, n) {
      if (!t || "string" != typeof t) throw new Error("Missing or invalid topic field");

      this._socketSend({
        topic: t,
        type: "pub",
        payload: e,
        silent: !!n
      });
    }

    subscribe(e) {
      this._socketSend({
        topic: e,
        type: "sub",
        payload: "",
        silent: !0
      });
    }

    on(e, t) {
      this._events.push({
        event: e,
        callback: t
      });
    }

    _socketCreate() {
      if (this._initiating) return;
      this._initiating = !0;
      const e = this._url.startsWith("https") ? this._url.replace("https", "wss") : this._url.startsWith("http") ? this._url.replace("http", "ws") : this._url;
      if (this._nextSocket = new o(e), !this._nextSocket) throw new Error("Failed to create socket");
      this._nextSocket.onmessage = e => this._socketReceive(e), this._nextSocket.onopen = () => this._socketOpen();
    }

    _socketOpen() {
      this._socketClose(), this._initiating = !1, this._socket = this._nextSocket, this._nextSocket = null, this._queueSubscriptions(), this._pushQueue();
    }

    _socketClose() {
      this._socket && (this._socket.onclose = () => {}, this._socket.close());
    }

    _socketSend(e) {
      const t = JSON.stringify(e);
      this._socket && 1 === this._socket.readyState ? this._socket.send(t) : (this._setToQueue(e), this._socketCreate());
    }

    _socketReceive(e) {
      return _url_commonjsExternalCa.t.__awaiter(this, void 0, void 0, function* () {
        let t;

        try {
          t = JSON.parse(e.data);
        } catch (e) {
          return;
        }

        if (this._socketSend({
          topic: t.topic,
          type: "ack",
          payload: "",
          silent: !0
        }), this._socket && 1 === this._socket.readyState) {
          const e = this._events.filter(e => "message" === e.event);

          e && e.length && e.forEach(e => e.callback(t));
        }
      });
    }

    _queueSubscriptions() {
      this._subscriptions.forEach(e => this._queue.push({
        topic: e,
        type: "sub",
        payload: "",
        silent: !0
      })), this._subscriptions = [];
    }

    _setToQueue(e) {
      this._queue.push(e);
    }

    _pushQueue() {
      this._queue.forEach(e => this._socketSend(e)), this._queue = [];
    }

  };
});

(0, _index2d8aeb.e)(re);
var oe = (0, _index2d8aeb.d)(function (e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.ERROR_SESSION_CONNECTED = "Session currently connected", t.ERROR_SESSION_DISCONNECTED = "Session currently disconnected", t.ERROR_SESSION_REJECTED = "Session Rejected", t.ERROR_MISSING_JSON_RPC = "Missing JSON RPC response", t.ERROR_MISSING_RESULT = 'JSON-RPC success response must include "result" field', t.ERROR_MISSING_ERROR = 'JSON-RPC error response must include "error" field', t.ERROR_MISSING_METHOD = 'JSON RPC request must have valid "method" value', t.ERROR_MISSING_ID = 'JSON RPC request must have valid "id" value', t.ERROR_MISSING_REQUIRED = "Missing one of the required parameters: bridge / uri / session", t.ERROR_INVALID_RESPONSE = "JSON RPC response format is invalid", t.ERROR_INVALID_URI = "URI format is invalid", t.ERROR_QRCODE_MODAL_NOT_PROVIDED = "QRCode Modal not provided", t.ERROR_QRCODE_MODAL_USER_CLOSED = "User close QRCode Modal";
});
(0, _index2d8aeb.e)(oe);
oe.ERROR_SESSION_CONNECTED, oe.ERROR_SESSION_DISCONNECTED, oe.ERROR_SESSION_REJECTED, oe.ERROR_MISSING_JSON_RPC, oe.ERROR_MISSING_RESULT, oe.ERROR_MISSING_ERROR, oe.ERROR_MISSING_METHOD, oe.ERROR_MISSING_ID, oe.ERROR_MISSING_REQUIRED, oe.ERROR_INVALID_RESPONSE, oe.ERROR_INVALID_URI, oe.ERROR_QRCODE_MODAL_NOT_PROVIDED, oe.ERROR_QRCODE_MODAL_USER_CLOSED;
var ie = (0, _index2d8aeb.d)(function (e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  t.default = class {
    constructor() {
      this._eventEmitters = [];
    }

    subscribe(e) {
      this._eventEmitters.push(e);
    }

    trigger(e) {
      let t,
          n = [];
      t = ee.isJsonRpcRequest(e) ? e.method : ee.isJsonRpcResponseSuccess(e) || ee.isJsonRpcResponseError(e) ? `response:${e.id}` : ee.isInternalEvent(e) ? e.event : "", t && (n = this._eventEmitters.filter(e => e.event === t)), n && n.length || ee.isReservedEvent(t) || ee.isInternalEvent(t) || (n = this._eventEmitters.filter(e => "call_request" === e.event)), n.forEach(t => {
        if (ee.isJsonRpcResponseError(e)) {
          const n = new Error(e.error.message);
          t.callback(n, null);
        } else t.callback(null, e);
      });
    }

  };
});
(0, _index2d8aeb.e)(ie);
var se = (0, _index2d8aeb.d)(function (e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  t.default = class {
    constructor() {
      this.storageId = "walletconnect";
    }

    getSession() {
      let e = null;
      const t = ee.getLocal(this.storageId);
      return t && ee.isWalletConnectSession(t) && (e = t), e;
    }

    setSession(e) {
      return ee.setLocal(this.storageId, e), e;
    }

    removeSession() {
      ee.removeLocal(this.storageId);
    }

  };
});
(0, _index2d8aeb.e)(se);
var ae = (0, _index2d8aeb.d)(function (e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  });

  const n = _url_commonjsExternalCa.t.__importDefault(re),
        r = _url_commonjsExternalCa.t.__importDefault(ie),
        o = _url_commonjsExternalCa.t.__importDefault(se);

  t.default = class {
    constructor(e) {
      if (this.protocol = "wc", this.version = 1, this._bridge = "", this._key = null, this._clientId = "", this._clientMeta = null, this._peerId = "", this._peerMeta = null, this._handshakeId = 0, this._handshakeTopic = "", this._connected = !1, this._accounts = [], this._chainId = 0, this._networkId = 0, this._rpcUrl = "", this._eventManager = new r.default(), this._clientMeta = ee.getMeta() || e.connectorOpts.clientMeta || null, this._cryptoLib = e.cryptoLib, this._sessionStorage = e.sessionStorage || new o.default(), this._qrcodeModal = e.connectorOpts.qrcodeModal, !e.connectorOpts.bridge && !e.connectorOpts.uri && !e.connectorOpts.session) throw new Error(oe.ERROR_MISSING_REQUIRED);
      e.connectorOpts.bridge && (this.bridge = e.connectorOpts.bridge), e.connectorOpts.uri && (this.uri = e.connectorOpts.uri);

      const t = e.connectorOpts.session || this._getStorageSession();

      t && (this.session = t), this.handshakeId && this._subscribeToSessionResponse(this.handshakeId, "Session request rejected"), this._transport = e.transport || new n.default({
        url: this.bridge,
        subscriptions: [this.clientId]
      }), this._subscribeToInternalEvents(), this._initTransport(), e.connectorOpts.uri && this._subscribeToSessionRequest(), e.pushServerOpts && this._registerPushServer(e.pushServerOpts);
    }

    set bridge(e) {
      e && (this._bridge = e);
    }

    get bridge() {
      return this._bridge;
    }

    set key(e) {
      if (!e) return;
      const t = ee.convertHexToArrayBuffer(e);
      this._key = t;
    }

    get key() {
      if (this._key) {
        return ee.convertArrayBufferToHex(this._key, !0);
      }

      return "";
    }

    set clientId(e) {
      e && (this._clientId = e);
    }

    get clientId() {
      let e = this._clientId;
      return e || (e = this._clientId = ee.uuid()), this._clientId;
    }

    set peerId(e) {
      e && (this._peerId = e);
    }

    get peerId() {
      return this._peerId;
    }

    set clientMeta(e) {}

    get clientMeta() {
      let e = this._clientMeta;
      return e || (e = this._clientMeta = ee.getMeta()), e;
    }

    set peerMeta(e) {
      this._peerMeta = e;
    }

    get peerMeta() {
      return this._peerMeta;
    }

    set handshakeTopic(e) {
      e && (this._handshakeTopic = e);
    }

    get handshakeTopic() {
      return this._handshakeTopic;
    }

    set handshakeId(e) {
      e && (this._handshakeId = e);
    }

    get handshakeId() {
      return this._handshakeId;
    }

    get uri() {
      return this._formatUri();
    }

    set uri(e) {
      if (!e) return;

      const {
        handshakeTopic: t,
        bridge: n,
        key: r
      } = this._parseUri(e);

      this.handshakeTopic = t, this.bridge = n, this.key = r;
    }

    set chainId(e) {
      this._chainId = e;
    }

    get chainId() {
      return this._chainId;
    }

    set networkId(e) {
      this._networkId = e;
    }

    get networkId() {
      return this._networkId;
    }

    set accounts(e) {
      this._accounts = e;
    }

    get accounts() {
      return this._accounts;
    }

    set rpcUrl(e) {
      this._rpcUrl = e;
    }

    get rpcUrl() {
      return this._rpcUrl;
    }

    set connected(e) {}

    get connected() {
      return this._connected;
    }

    set pending(e) {}

    get pending() {
      return !!this._handshakeTopic;
    }

    get session() {
      return {
        connected: this.connected,
        accounts: this.accounts,
        chainId: this.chainId,
        bridge: this.bridge,
        key: this.key,
        clientId: this.clientId,
        clientMeta: this.clientMeta,
        peerId: this.peerId,
        peerMeta: this.peerMeta,
        handshakeId: this.handshakeId,
        handshakeTopic: this.handshakeTopic
      };
    }

    set session(e) {
      e && (this._connected = e.connected, this.accounts = e.accounts, this.chainId = e.chainId, this.bridge = e.bridge, this.key = e.key, this.clientId = e.clientId, this.clientMeta = e.clientMeta, this.peerId = e.peerId, this.peerMeta = e.peerMeta, this.handshakeId = e.handshakeId, this.handshakeTopic = e.handshakeTopic);
    }

    on(e, t) {
      const n = {
        event: e,
        callback: t
      };

      this._eventManager.subscribe(n);
    }

    createInstantRequest(e) {
      return _url_commonjsExternalCa.t.__awaiter(this, void 0, void 0, function* () {
        this._key = yield this._generateKey();

        const t = this._formatRequest({
          method: "wc_instantRequest",
          params: [{
            peerId: this.clientId,
            peerMeta: this.clientMeta,
            request: this._formatRequest(e)
          }]
        });

        this.handshakeId = t.id, this.handshakeTopic = ee.uuid(), this._eventManager.trigger({
          event: "display_uri",
          params: [this.uri]
        }), this.on("modal_closed", () => {
          throw new Error(oe.ERROR_QRCODE_MODAL_USER_CLOSED);
        });

        const n = () => {
          this.killSession();
        };

        try {
          const e = yield this._sendCallRequest(t);
          return e && n(), e;
        } catch (e) {
          throw n(), e;
        }
      });
    }

    connect(e) {
      if (!this._qrcodeModal) throw new Error(oe.ERROR_QRCODE_MODAL_NOT_PROVIDED);
      return new Promise((t, n) => _url_commonjsExternalCa.t.__awaiter(this, void 0, void 0, function* () {
        if (!this.connected) try {
          yield this.createSession(e);
        } catch (e) {
          n(e);
        }
        this.on("modal_closed", () => n(new Error(oe.ERROR_QRCODE_MODAL_USER_CLOSED))), this.on("connect", (e, r) => {
          if (e) return n(e);
          t(r.params[0]);
        });
      }));
    }

    createSession(e) {
      return _url_commonjsExternalCa.t.__awaiter(this, void 0, void 0, function* () {
        if (this._connected) throw new Error(oe.ERROR_SESSION_CONNECTED);
        if (this.pending) return;
        this._key = yield this._generateKey();

        const t = this._formatRequest({
          method: "wc_sessionRequest",
          params: [{
            peerId: this.clientId,
            peerMeta: this.clientMeta,
            chainId: e && e.chainId ? e.chainId : null
          }]
        });

        this.handshakeId = t.id, this.handshakeTopic = ee.uuid(), this._sendSessionRequest(t, "Session update rejected", {
          topic: this.handshakeTopic
        }), this._eventManager.trigger({
          event: "display_uri",
          params: [this.uri]
        });
      });
    }

    approveSession(e) {
      if (this._connected) throw new Error(oe.ERROR_SESSION_CONNECTED);
      this.chainId = e.chainId, this.accounts = e.accounts, this.networkId = e.networkId || 0, this.rpcUrl = e.rpcUrl || "";
      const t = {
        approved: !0,
        chainId: this.chainId,
        networkId: this.networkId,
        accounts: this.accounts,
        rpcUrl: this.rpcUrl,
        peerId: this.clientId,
        peerMeta: this.clientMeta
      },
            n = {
        id: this.handshakeId,
        jsonrpc: "2.0",
        result: t
      };
      this._sendResponse(n), this._connected = !0, this._eventManager.trigger({
        event: "connect",
        params: [{
          peerId: this.peerId,
          peerMeta: this.peerMeta,
          chainId: this.chainId,
          accounts: this.accounts
        }]
      }), this._connected && this._setStorageSession();
    }

    rejectSession(e) {
      if (this._connected) throw new Error(oe.ERROR_SESSION_CONNECTED);

      const t = e && e.message ? e.message : oe.ERROR_SESSION_REJECTED,
            n = this._formatResponse({
        id: this.handshakeId,
        error: {
          message: t
        }
      });

      this._sendResponse(n), this._connected = !1, this._eventManager.trigger({
        event: "disconnect",
        params: [{
          message: t
        }]
      }), this._removeStorageSession();
    }

    updateSession(e) {
      if (!this._connected) throw new Error(oe.ERROR_SESSION_DISCONNECTED);
      this.chainId = e.chainId, this.accounts = e.accounts, this.networkId = e.networkId || 0, this.rpcUrl = e.rpcUrl || "";

      const t = {
        approved: !0,
        chainId: this.chainId,
        networkId: this.networkId,
        accounts: this.accounts,
        rpcUrl: this.rpcUrl
      },
            n = this._formatRequest({
        method: "wc_sessionUpdate",
        params: [t]
      });

      this._sendSessionRequest(n, "Session update rejected"), this._eventManager.trigger({
        event: "session_update",
        params: [{
          chainId: this.chainId,
          accounts: this.accounts
        }]
      }), this._manageStorageSession();
    }

    killSession(e) {
      return _url_commonjsExternalCa.t.__awaiter(this, void 0, void 0, function* () {
        const t = e ? e.message : "Session Disconnected",
              n = this._formatRequest({
          method: "wc_sessionUpdate",
          params: [{
            approved: !1,
            chainId: null,
            networkId: null,
            accounts: null
          }]
        });

        yield this._sendRequest(n), this._handleSessionDisconnect(t);
      });
    }

    sendTransaction(e) {
      return _url_commonjsExternalCa.t.__awaiter(this, void 0, void 0, function* () {
        if (!this._connected) throw new Error(oe.ERROR_SESSION_DISCONNECTED);

        const t = ee.parseTransactionData(e),
              n = this._formatRequest({
          method: "eth_sendTransaction",
          params: [t]
        });

        return yield this._sendCallRequest(n);
      });
    }

    signTransaction(e) {
      return _url_commonjsExternalCa.t.__awaiter(this, void 0, void 0, function* () {
        if (!this._connected) throw new Error(oe.ERROR_SESSION_DISCONNECTED);

        const t = ee.parseTransactionData(e),
              n = this._formatRequest({
          method: "eth_signTransaction",
          params: [t]
        });

        return yield this._sendCallRequest(n);
      });
    }

    signMessage(e) {
      return _url_commonjsExternalCa.t.__awaiter(this, void 0, void 0, function* () {
        if (!this._connected) throw new Error(oe.ERROR_SESSION_DISCONNECTED);

        const t = this._formatRequest({
          method: "eth_sign",
          params: e
        });

        return yield this._sendCallRequest(t);
      });
    }

    signPersonalMessage(e) {
      return _url_commonjsExternalCa.t.__awaiter(this, void 0, void 0, function* () {
        if (!this._connected) throw new Error(oe.ERROR_SESSION_DISCONNECTED);
        e = ee.parsePersonalSign(e);

        const t = this._formatRequest({
          method: "personal_sign",
          params: e
        });

        return yield this._sendCallRequest(t);
      });
    }

    signTypedData(e) {
      return _url_commonjsExternalCa.t.__awaiter(this, void 0, void 0, function* () {
        if (!this._connected) throw new Error(oe.ERROR_SESSION_DISCONNECTED);

        const t = this._formatRequest({
          method: "eth_signTypedData",
          params: e
        });

        return yield this._sendCallRequest(t);
      });
    }

    updateChain(e) {
      return _url_commonjsExternalCa.t.__awaiter(this, void 0, void 0, function* () {
        if (!this._connected) throw new Error("Session currently disconnected");

        const t = this._formatRequest({
          method: "wallet_updateChain",
          params: [e]
        });

        return yield this._sendCallRequest(t);
      });
    }

    unsafeSend(e, t) {
      return this._sendRequest(e, t), new Promise((t, n) => {
        this._subscribeToResponse(e.id, (e, r) => {
          if (e) n(e);else {
            if (!r) throw new Error(oe.ERROR_MISSING_JSON_RPC);
            t(r);
          }
        });
      });
    }

    sendCustomRequest(e, t) {
      return _url_commonjsExternalCa.t.__awaiter(this, void 0, void 0, function* () {
        if (!this._connected) throw new Error(oe.ERROR_SESSION_DISCONNECTED);

        switch (e.method) {
          case "eth_accounts":
            return this.accounts;

          case "eth_chainId":
            return ee.convertNumberToHex(this.chainId);

          case "eth_sendTransaction":
          case "eth_signTransaction":
            e.params && (e.params[0] = ee.parseTransactionData(e.params[0]));
            break;

          case "personal_sign":
            e.params && (e.params = ee.parsePersonalSign(e.params));
        }

        const n = this._formatRequest(e);

        return yield this._sendCallRequest(n, t);
      });
    }

    approveRequest(e) {
      if (!ee.isJsonRpcResponseSuccess(e)) throw new Error(oe.ERROR_MISSING_RESULT);
      {
        const t = this._formatResponse(e);

        this._sendResponse(t);
      }
    }

    rejectRequest(e) {
      if (!ee.isJsonRpcResponseError(e)) throw new Error(oe.ERROR_MISSING_ERROR);
      {
        const t = this._formatResponse(e);

        this._sendResponse(t);
      }
    }

    _sendRequest(e, t) {
      var n, r;
      return _url_commonjsExternalCa.t.__awaiter(this, void 0, void 0, function* () {
        const o = this._formatRequest(e),
              i = yield this._encrypt(o),
              s = void 0 !== (null === (n = t) || void 0 === n ? void 0 : n.topic) ? t.topic : this.peerId,
              a = JSON.stringify(i),
              c = void 0 !== (null === (r = t) || void 0 === r ? void 0 : r.forcePushNotification) ? !t.forcePushNotification : ee.isSilentPayload(o);

        this._transport.send(a, s, c);
      });
    }

    _sendResponse(e) {
      return _url_commonjsExternalCa.t.__awaiter(this, void 0, void 0, function* () {
        const t = yield this._encrypt(e),
              n = this.peerId,
              r = JSON.stringify(t);

        this._transport.send(r, n, !0);
      });
    }

    _sendSessionRequest(e, t, n) {
      return _url_commonjsExternalCa.t.__awaiter(this, void 0, void 0, function* () {
        this._sendRequest(e, n), this._subscribeToSessionResponse(e.id, t);
      });
    }

    _sendCallRequest(e, t) {
      if (this._sendRequest(e, t), ee.isMobile() && ee.signingMethods.includes(e.method)) {
        const e = ee.getLocal(ee.deeplinkChoiceKey);
        e && (window.location.href = e.href);
      }

      return this._subscribeToCallResponse(e.id);
    }

    _formatRequest(e) {
      if (void 0 === e.method) throw new Error(oe.ERROR_MISSING_METHOD);
      return {
        id: void 0 === e.id ? ee.payloadId() : e.id,
        jsonrpc: "2.0",
        method: e.method,
        params: void 0 === e.params ? [] : e.params
      };
    }

    _formatResponse(e) {
      if (void 0 === e.id) throw new Error(oe.ERROR_MISSING_ID);

      if (ee.isJsonRpcResponseError(e)) {
        const t = ee.formatRpcError(e.error);
        return Object.assign(Object.assign({
          id: e.id,
          jsonrpc: "2.0"
        }, e), {
          error: t
        });
      }

      if (ee.isJsonRpcResponseSuccess(e)) {
        return Object.assign({
          id: e.id,
          jsonrpc: "2.0"
        }, e);
      }

      throw new Error(oe.ERROR_INVALID_RESPONSE);
    }

    _handleSessionDisconnect(e) {
      const t = e || "Session Disconnected";
      this._connected || (this._qrcodeModal && this._qrcodeModal.close(), ee.removeLocal(ee.deeplinkChoiceKey)), this._connected && (this._connected = !1), this._eventManager.trigger({
        event: "disconnect",
        params: [{
          message: t
        }]
      }), this._removeStorageSession(), this._transport.close();
    }

    _handleSessionResponse(e, t) {
      t && t.approved ? (this._connected ? (t.chainId && (this.chainId = t.chainId), t.accounts && (this.accounts = t.accounts), this._eventManager.trigger({
        event: "session_update",
        params: [{
          chainId: this.chainId,
          accounts: this.accounts
        }]
      })) : (this._connected = !0, t.chainId && (this.chainId = t.chainId), t.accounts && (this.accounts = t.accounts), t.peerId && !this.peerId && (this.peerId = t.peerId), t.peerMeta && !this.peerMeta && (this.peerMeta = t.peerMeta), this._eventManager.trigger({
        event: "connect",
        params: [{
          peerId: this.peerId,
          peerMeta: this.peerMeta,
          chainId: this.chainId,
          accounts: this.accounts
        }]
      })), this._manageStorageSession()) : this._handleSessionDisconnect(e);
    }

    _handleIncomingMessages(e) {
      return _url_commonjsExternalCa.t.__awaiter(this, void 0, void 0, function* () {
        if (![this.clientId, this.handshakeTopic].includes(e.topic)) return;
        let t;

        try {
          t = JSON.parse(e.payload);
        } catch (e) {
          return;
        }

        const n = yield this._decrypt(t);
        n && this._eventManager.trigger(n);
      });
    }

    _subscribeToSessionRequest() {
      this._transport.subscribe(this.handshakeTopic);
    }

    _subscribeToResponse(e, t) {
      this.on(`response:${e}`, t);
    }

    _subscribeToSessionResponse(e, t) {
      this._subscribeToResponse(e, (e, n) => {
        e ? this._handleSessionResponse(e.message) : n.result ? this._handleSessionResponse(t, n.result) : n.error && n.error.message ? this._handleSessionResponse(n.error.message) : this._handleSessionResponse(t);
      });
    }

    _subscribeToCallResponse(e) {
      return new Promise((t, n) => {
        this._subscribeToResponse(e, (e, r) => {
          e ? n(e) : r.result ? t(r.result) : r.error && r.error.message ? n(new Error(r.error.message)) : n(new Error(oe.ERROR_INVALID_RESPONSE));
        });
      });
    }

    _subscribeToInternalEvents() {
      this.on("display_uri", () => {
        this._qrcodeModal && this._qrcodeModal.open(this.uri, () => {
          this._eventManager.trigger({
            event: "modal_closed",
            params: []
          });
        });
      }), this.on("connect", () => {
        this._qrcodeModal && this._qrcodeModal.close();
      }), this.on("wc_sessionRequest", (e, t) => {
        e && this._eventManager.trigger({
          event: "error",
          params: [{
            code: "SESSION_REQUEST_ERROR",
            message: e.toString()
          }]
        }), this.handshakeId = t.id, this.peerId = t.params[0].peerId, this.peerMeta = t.params[0].peerMeta;
        const n = Object.assign(Object.assign({}, t), {
          method: "session_request"
        });

        this._eventManager.trigger(n);
      }), this.on("wc_sessionUpdate", (e, t) => {
        e && this._handleSessionResponse(e.message), this._handleSessionResponse("Session disconnected", t.params[0]);
      });
    }

    _initTransport() {
      this._transport.on("message", e => this._handleIncomingMessages(e)), this._transport.on("open", () => this._eventManager.trigger({
        event: "transport_open",
        params: []
      })), this._transport.on("close", () => this._eventManager.trigger({
        event: "transport_close",
        params: []
      })), this._transport.open();
    }

    _formatUri() {
      return `${this.protocol}:${this.handshakeTopic}@${this.version}?bridge=${encodeURIComponent(this.bridge)}&key=${this.key}`;
    }

    _parseUri(e) {
      const t = ee.parseWalletConnectUri(e);

      if (t.protocol === this.protocol) {
        if (!t.handshakeTopic) throw Error("Invalid or missing handshakeTopic parameter value");
        const e = t.handshakeTopic;
        if (!t.bridge) throw Error("Invalid or missing bridge url parameter value");
        const n = decodeURIComponent(t.bridge);
        if (!t.key) throw Error("Invalid or missing kkey parameter value");
        return {
          handshakeTopic: e,
          bridge: n,
          key: t.key
        };
      }

      throw new Error(oe.ERROR_INVALID_URI);
    }

    _generateKey() {
      return _url_commonjsExternalCa.t.__awaiter(this, void 0, void 0, function* () {
        if (this._cryptoLib) {
          return yield this._cryptoLib.generateKey();
        }

        return null;
      });
    }

    _encrypt(e) {
      return _url_commonjsExternalCa.t.__awaiter(this, void 0, void 0, function* () {
        const t = this._key;

        if (this._cryptoLib && t) {
          return yield this._cryptoLib.encrypt(e, t);
        }

        return null;
      });
    }

    _decrypt(e) {
      return _url_commonjsExternalCa.t.__awaiter(this, void 0, void 0, function* () {
        const t = this._key;

        if (this._cryptoLib && t) {
          return yield this._cryptoLib.decrypt(e, t);
        }

        return null;
      });
    }

    _getStorageSession() {
      let e = null;
      return this._sessionStorage && (e = this._sessionStorage.getSession()), e;
    }

    _setStorageSession() {
      this._sessionStorage && this._sessionStorage.setSession(this.session);
    }

    _removeStorageSession() {
      this._sessionStorage && this._sessionStorage.removeSession();
    }

    _manageStorageSession() {
      this._connected ? this._setStorageSession() : this._removeStorageSession();
    }

    _registerPushServer(e) {
      if (!e.url || "string" != typeof e.url) throw Error("Invalid or missing pushServerOpts.url parameter value");
      if (!e.type || "string" != typeof e.type) throw Error("Invalid or missing pushServerOpts.type parameter value");
      if (!e.token || "string" != typeof e.token) throw Error("Invalid or missing pushServerOpts.token parameter value");
      const t = {
        bridge: this.bridge,
        topic: this.clientId,
        type: e.type,
        token: e.token,
        peerName: "",
        language: e.language || ""
      };
      this.on("connect", (n, r) => _url_commonjsExternalCa.t.__awaiter(this, void 0, void 0, function* () {
        if (n) throw n;

        if (e.peerMeta) {
          const e = r.params[0].peerMeta.name;
          t.peerName = e;
        }

        try {
          const n = yield fetch(`${e.url}/new`, {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json"
            },
            body: JSON.stringify(t)
          });
          if (!(yield n.json()).success) throw Error("Failed to register in Push Server");
        } catch (e) {
          throw Error("Failed to register in Push Server");
        }
      }));
    }

  };
});
(0, _index2d8aeb.e)(ae);
var ce = (0, _index2d8aeb.d)(function (e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.HEX_ENC = "hex", t.UTF8_ENC = "utf8", t.ENCRYPT_OP = "encrypt", t.DECRYPT_OP = "decrypt", t.SIGN_OP = "sign", t.VERIFY_OP = "verify", t.LENGTH_0 = 0, t.LENGTH_1 = 1, t.LENGTH_16 = 16, t.LENGTH_32 = 32, t.LENGTH_64 = 64, t.LENGTH_128 = 128, t.LENGTH_256 = 256, t.LENGTH_512 = 512, t.LENGTH_1024 = 1024, t.AES_LENGTH = t.LENGTH_256, t.HMAC_LENGTH = t.LENGTH_256, t.AES_BROWSER_ALGO = "AES-CBC", t.HMAC_BROWSER_ALGO = `SHA-${t.AES_LENGTH}`, t.HMAC_BROWSER = "HMAC", t.SHA256_BROWSER_ALGO = "SHA-256", t.SHA512_BROWSER_ALGO = "SHA-512", t.AES_NODE_ALGO = `aes-${t.AES_LENGTH}-cbc`, t.HMAC_NODE_ALGO = `sha${t.HMAC_LENGTH}`, t.SHA256_NODE_ALGO = "sha256", t.SHA512_NODE_ALGO = "sha512", t.RIPEMD160_NODE_ALGO = "ripemd160", t.PREFIX_LENGTH = t.LENGTH_1, t.KEY_LENGTH = t.LENGTH_32, t.IV_LENGTH = t.LENGTH_16, t.MAC_LENGTH = t.LENGTH_32, t.DECOMPRESSED_LENGTH = t.LENGTH_64, t.PREFIXED_KEY_LENGTH = t.KEY_LENGTH + t.PREFIX_LENGTH, t.PREFIXED_DECOMPRESSED_LENGTH = t.DECOMPRESSED_LENGTH + t.PREFIX_LENGTH, t.MAX_KEY_LENGTH = t.LENGTH_1024, t.MAX_MSG_LENGTH = t.LENGTH_32, t.EMPTY_BUFFER = Buffer.from(new Uint8Array(t.LENGTH_0)), t.EC_GROUP_ORDER = Buffer.from("fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141", t.HEX_ENC), t.ZERO32 = Buffer.alloc(t.LENGTH_32, t.LENGTH_0), t.ERROR_BAD_MAC = "Bad MAC", t.ERROR_BAD_PRIVATE_KEY = "Bad private key", t.ERROR_BAD_PUBLIC_KEY = "Bad public key", t.ERROR_EMPTY_MESSAGE = "Message should not be empty", t.ERROR_MESSAGE_TOO_LONG = "Message is too long";
});
(0, _index2d8aeb.e)(ce);
ce.HEX_ENC, ce.UTF8_ENC, ce.ENCRYPT_OP, ce.DECRYPT_OP, ce.SIGN_OP, ce.VERIFY_OP, ce.LENGTH_0, ce.LENGTH_1, ce.LENGTH_16, ce.LENGTH_32, ce.LENGTH_64, ce.LENGTH_128, ce.LENGTH_256, ce.LENGTH_512, ce.LENGTH_1024, ce.AES_LENGTH, ce.HMAC_LENGTH, ce.AES_BROWSER_ALGO, ce.HMAC_BROWSER_ALGO, ce.HMAC_BROWSER, ce.SHA256_BROWSER_ALGO, ce.SHA512_BROWSER_ALGO, ce.AES_NODE_ALGO, ce.HMAC_NODE_ALGO, ce.SHA256_NODE_ALGO, ce.SHA512_NODE_ALGO, ce.RIPEMD160_NODE_ALGO, ce.PREFIX_LENGTH, ce.KEY_LENGTH, ce.IV_LENGTH, ce.MAC_LENGTH, ce.DECOMPRESSED_LENGTH, ce.PREFIXED_KEY_LENGTH, ce.PREFIXED_DECOMPRESSED_LENGTH, ce.MAX_KEY_LENGTH, ce.MAX_MSG_LENGTH, ce.EMPTY_BUFFER, ce.EC_GROUP_ORDER, ce.ZERO32, ce.ERROR_BAD_MAC, ce.ERROR_BAD_PRIVATE_KEY, ce.ERROR_BAD_PUBLIC_KEY, ce.ERROR_EMPTY_MESSAGE, ce.ERROR_MESSAGE_TOO_LONG;
var ue = (0, _index2d8aeb.d)(function (e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), function (e) {
    for (var n in e) t.hasOwnProperty(n) || (t[n] = e[n]);
  }(F);
});
(0, _index2d8aeb.e)(ue);
var le = (0, _index2d8aeb.d)(function (e, t) {
  function n(e) {
    return e.length === ce.KEY_LENGTH || e.length === ce.PREFIXED_KEY_LENGTH;
  }

  function r(e) {
    return n(e) ? e.length === ce.PREFIXED_KEY_LENGTH : e.length === ce.PREFIXED_DECOMPRESSED_LENGTH;
  }

  function o(e) {
    return ue.hexToNumber(ue.removeHexLeadingZeros(ue.bufferToHex(e))) - 27;
  }

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.isCompressed = n, t.isDecompressed = function (e) {
    return e.length === ce.DECOMPRESSED_LENGTH || e.length === ce.PREFIXED_DECOMPRESSED_LENGTH;
  }, t.isPrefixed = r, t.sanitizePublicKey = function (e) {
    return r(e) ? e : Buffer.from(`04${e.toString("hex")}`, "hex");
  }, t.exportRecoveryParam = function (e) {
    return ue.hexToBuffer(ue.sanitizeHex((e + 27).toString(16)));
  }, t.importRecoveryParam = o, t.splitSignature = function (e) {
    return {
      r: e.slice(0, 32),
      s: e.slice(32, 64),
      v: e.slice(64, 65)
    };
  }, t.joinSignature = function (e) {
    return ue.concatBuffers(e.r, e.s, e.v);
  }, t.isValidDERSignature = function (e) {
    return ue.bufferToHex(e).startsWith("30") && e.length > 65;
  }, t.sanitizeRSVSignature = function (e) {
    return {
      signature: e.slice(0, 64),
      recovery: o(e.slice(64, 65))
    };
  };
});
(0, _index2d8aeb.e)(le);
le.isCompressed, le.isDecompressed, le.isPrefixed, le.sanitizePublicKey, le.exportRecoveryParam, le.importRecoveryParam, le.splitSignature, le.joinSignature, le.isValidDERSignature, le.sanitizeRSVSignature;
var he = (0, _index2d8aeb.d)(function (e, t) {
  function n(e) {
    return Buffer.isBuffer(e) && 32 === e.length;
  }

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.assert = function (e, t) {
    if (!e) throw new Error(t || "Assertion failed");
  }, t.isScalar = n, t.isValidPrivateKey = function (e) {
    return !!n(e) && e.compare(ce.ZERO32) > 0 && e.compare(ce.EC_GROUP_ORDER) < 0;
  }, t.equalConstTime = function (e, t) {
    if (e.length !== t.length) return !1;
    let n = 0;

    for (let r = 0; r < e.length; r++) n |= e[r] ^ t[r];

    return 0 === n;
  }, t.isValidKeyLength = function (e) {
    return !(e <= ce.LENGTH_0 || e > ce.MAX_KEY_LENGTH || parseInt(String(e)) !== e);
  };
});
(0, _index2d8aeb.e)(he);
he.assert, he.isScalar, he.isValidPrivateKey, he.equalConstTime, he.isValidKeyLength;
var fe = (0, _index2d8aeb.d)(function (e, t) {
  function n(e) {
    for (var n in e) t.hasOwnProperty(n) || (t[n] = e[n]);
  }

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), n(ue), n(le), n(he);
});
(0, _index2d8aeb.e)(fe);

var de = (0, _index2d8aeb.d)(function (e, t) {
  /*! MIT License. Copyright 2015-2018 Richard Moore <me@ricmoo.com>. See LICENSE.txt. */
  !function (t) {
    function n(e) {
      return parseInt(e) === e;
    }

    function r(e) {
      if (!n(e.length)) return !1;

      for (var t = 0; t < e.length; t++) if (!n(e[t]) || e[t] < 0 || e[t] > 255) return !1;

      return !0;
    }

    function o(e, t) {
      if (e.buffer && "Uint8Array" === e.name) return t && (e = e.slice ? e.slice() : Array.prototype.slice.call(e)), e;

      if (Array.isArray(e)) {
        if (!r(e)) throw new Error("Array contains invalid value: " + e);
        return new Uint8Array(e);
      }

      if (n(e.length) && r(e)) return new Uint8Array(e);
      throw new Error("unsupported array-like object");
    }

    function i(e) {
      return new Uint8Array(e);
    }

    function s(e, t, n, r, o) {
      null == r && null == o || (e = e.slice ? e.slice(r, o) : Array.prototype.slice.call(e, r, o)), t.set(e, n);
    }

    var a,
        c = {
      toBytes: function (e) {
        var t = [],
            n = 0;

        for (e = encodeURI(e); n < e.length;) {
          var r = e.charCodeAt(n++);
          37 === r ? (t.push(parseInt(e.substr(n, 2), 16)), n += 2) : t.push(r);
        }

        return o(t);
      },
      fromBytes: function (e) {
        for (var t = [], n = 0; n < e.length;) {
          var r = e[n];
          r < 128 ? (t.push(String.fromCharCode(r)), n++) : r > 191 && r < 224 ? (t.push(String.fromCharCode((31 & r) << 6 | 63 & e[n + 1])), n += 2) : (t.push(String.fromCharCode((15 & r) << 12 | (63 & e[n + 1]) << 6 | 63 & e[n + 2])), n += 3);
        }

        return t.join("");
      }
    },
        u = (a = "0123456789abcdef", {
      toBytes: function (e) {
        for (var t = [], n = 0; n < e.length; n += 2) t.push(parseInt(e.substr(n, 2), 16));

        return t;
      },
      fromBytes: function (e) {
        for (var t = [], n = 0; n < e.length; n++) {
          var r = e[n];
          t.push(a[(240 & r) >> 4] + a[15 & r]);
        }

        return t.join("");
      }
    }),
        l = {
      16: 10,
      24: 12,
      32: 14
    },
        h = [1, 2, 4, 8, 16, 32, 64, 128, 27, 54, 108, 216, 171, 77, 154, 47, 94, 188, 99, 198, 151, 53, 106, 212, 179, 125, 250, 239, 197, 145],
        f = [99, 124, 119, 123, 242, 107, 111, 197, 48, 1, 103, 43, 254, 215, 171, 118, 202, 130, 201, 125, 250, 89, 71, 240, 173, 212, 162, 175, 156, 164, 114, 192, 183, 253, 147, 38, 54, 63, 247, 204, 52, 165, 229, 241, 113, 216, 49, 21, 4, 199, 35, 195, 24, 150, 5, 154, 7, 18, 128, 226, 235, 39, 178, 117, 9, 131, 44, 26, 27, 110, 90, 160, 82, 59, 214, 179, 41, 227, 47, 132, 83, 209, 0, 237, 32, 252, 177, 91, 106, 203, 190, 57, 74, 76, 88, 207, 208, 239, 170, 251, 67, 77, 51, 133, 69, 249, 2, 127, 80, 60, 159, 168, 81, 163, 64, 143, 146, 157, 56, 245, 188, 182, 218, 33, 16, 255, 243, 210, 205, 12, 19, 236, 95, 151, 68, 23, 196, 167, 126, 61, 100, 93, 25, 115, 96, 129, 79, 220, 34, 42, 144, 136, 70, 238, 184, 20, 222, 94, 11, 219, 224, 50, 58, 10, 73, 6, 36, 92, 194, 211, 172, 98, 145, 149, 228, 121, 231, 200, 55, 109, 141, 213, 78, 169, 108, 86, 244, 234, 101, 122, 174, 8, 186, 120, 37, 46, 28, 166, 180, 198, 232, 221, 116, 31, 75, 189, 139, 138, 112, 62, 181, 102, 72, 3, 246, 14, 97, 53, 87, 185, 134, 193, 29, 158, 225, 248, 152, 17, 105, 217, 142, 148, 155, 30, 135, 233, 206, 85, 40, 223, 140, 161, 137, 13, 191, 230, 66, 104, 65, 153, 45, 15, 176, 84, 187, 22],
        d = [82, 9, 106, 213, 48, 54, 165, 56, 191, 64, 163, 158, 129, 243, 215, 251, 124, 227, 57, 130, 155, 47, 255, 135, 52, 142, 67, 68, 196, 222, 233, 203, 84, 123, 148, 50, 166, 194, 35, 61, 238, 76, 149, 11, 66, 250, 195, 78, 8, 46, 161, 102, 40, 217, 36, 178, 118, 91, 162, 73, 109, 139, 209, 37, 114, 248, 246, 100, 134, 104, 152, 22, 212, 164, 92, 204, 93, 101, 182, 146, 108, 112, 72, 80, 253, 237, 185, 218, 94, 21, 70, 87, 167, 141, 157, 132, 144, 216, 171, 0, 140, 188, 211, 10, 247, 228, 88, 5, 184, 179, 69, 6, 208, 44, 30, 143, 202, 63, 15, 2, 193, 175, 189, 3, 1, 19, 138, 107, 58, 145, 17, 65, 79, 103, 220, 234, 151, 242, 207, 206, 240, 180, 230, 115, 150, 172, 116, 34, 231, 173, 53, 133, 226, 249, 55, 232, 28, 117, 223, 110, 71, 241, 26, 113, 29, 41, 197, 137, 111, 183, 98, 14, 170, 24, 190, 27, 252, 86, 62, 75, 198, 210, 121, 32, 154, 219, 192, 254, 120, 205, 90, 244, 31, 221, 168, 51, 136, 7, 199, 49, 177, 18, 16, 89, 39, 128, 236, 95, 96, 81, 127, 169, 25, 181, 74, 13, 45, 229, 122, 159, 147, 201, 156, 239, 160, 224, 59, 77, 174, 42, 245, 176, 200, 235, 187, 60, 131, 83, 153, 97, 23, 43, 4, 126, 186, 119, 214, 38, 225, 105, 20, 99, 85, 33, 12, 125],
        p = [3328402341, 4168907908, 4000806809, 4135287693, 4294111757, 3597364157, 3731845041, 2445657428, 1613770832, 33620227, 3462883241, 1445669757, 3892248089, 3050821474, 1303096294, 3967186586, 2412431941, 528646813, 2311702848, 4202528135, 4026202645, 2992200171, 2387036105, 4226871307, 1101901292, 3017069671, 1604494077, 1169141738, 597466303, 1403299063, 3832705686, 2613100635, 1974974402, 3791519004, 1033081774, 1277568618, 1815492186, 2118074177, 4126668546, 2211236943, 1748251740, 1369810420, 3521504564, 4193382664, 3799085459, 2883115123, 1647391059, 706024767, 134480908, 2512897874, 1176707941, 2646852446, 806885416, 932615841, 168101135, 798661301, 235341577, 605164086, 461406363, 3756188221, 3454790438, 1311188841, 2142417613, 3933566367, 302582043, 495158174, 1479289972, 874125870, 907746093, 3698224818, 3025820398, 1537253627, 2756858614, 1983593293, 3084310113, 2108928974, 1378429307, 3722699582, 1580150641, 327451799, 2790478837, 3117535592, 0, 3253595436, 1075847264, 3825007647, 2041688520, 3059440621, 3563743934, 2378943302, 1740553945, 1916352843, 2487896798, 2555137236, 2958579944, 2244988746, 3151024235, 3320835882, 1336584933, 3992714006, 2252555205, 2588757463, 1714631509, 293963156, 2319795663, 3925473552, 67240454, 4269768577, 2689618160, 2017213508, 631218106, 1269344483, 2723238387, 1571005438, 2151694528, 93294474, 1066570413, 563977660, 1882732616, 4059428100, 1673313503, 2008463041, 2950355573, 1109467491, 537923632, 3858759450, 4260623118, 3218264685, 2177748300, 403442708, 638784309, 3287084079, 3193921505, 899127202, 2286175436, 773265209, 2479146071, 1437050866, 4236148354, 2050833735, 3362022572, 3126681063, 840505643, 3866325909, 3227541664, 427917720, 2655997905, 2749160575, 1143087718, 1412049534, 999329963, 193497219, 2353415882, 3354324521, 1807268051, 672404540, 2816401017, 3160301282, 369822493, 2916866934, 3688947771, 1681011286, 1949973070, 336202270, 2454276571, 201721354, 1210328172, 3093060836, 2680341085, 3184776046, 1135389935, 3294782118, 965841320, 831886756, 3554993207, 4068047243, 3588745010, 2345191491, 1849112409, 3664604599, 26054028, 2983581028, 2622377682, 1235855840, 3630984372, 2891339514, 4092916743, 3488279077, 3395642799, 4101667470, 1202630377, 268961816, 1874508501, 4034427016, 1243948399, 1546530418, 941366308, 1470539505, 1941222599, 2546386513, 3421038627, 2715671932, 3899946140, 1042226977, 2521517021, 1639824860, 227249030, 260737669, 3765465232, 2084453954, 1907733956, 3429263018, 2420656344, 100860677, 4160157185, 470683154, 3261161891, 1781871967, 2924959737, 1773779408, 394692241, 2579611992, 974986535, 664706745, 3655459128, 3958962195, 731420851, 571543859, 3530123707, 2849626480, 126783113, 865375399, 765172662, 1008606754, 361203602, 3387549984, 2278477385, 2857719295, 1344809080, 2782912378, 59542671, 1503764984, 160008576, 437062935, 1707065306, 3622233649, 2218934982, 3496503480, 2185314755, 697932208, 1512910199, 504303377, 2075177163, 2824099068, 1841019862, 739644986],
        _ = [2781242211, 2230877308, 2582542199, 2381740923, 234877682, 3184946027, 2984144751, 1418839493, 1348481072, 50462977, 2848876391, 2102799147, 434634494, 1656084439, 3863849899, 2599188086, 1167051466, 2636087938, 1082771913, 2281340285, 368048890, 3954334041, 3381544775, 201060592, 3963727277, 1739838676, 4250903202, 3930435503, 3206782108, 4149453988, 2531553906, 1536934080, 3262494647, 484572669, 2923271059, 1783375398, 1517041206, 1098792767, 49674231, 1334037708, 1550332980, 4098991525, 886171109, 150598129, 2481090929, 1940642008, 1398944049, 1059722517, 201851908, 1385547719, 1699095331, 1587397571, 674240536, 2704774806, 252314885, 3039795866, 151914247, 908333586, 2602270848, 1038082786, 651029483, 1766729511, 3447698098, 2682942837, 454166793, 2652734339, 1951935532, 775166490, 758520603, 3000790638, 4004797018, 4217086112, 4137964114, 1299594043, 1639438038, 3464344499, 2068982057, 1054729187, 1901997871, 2534638724, 4121318227, 1757008337, 0, 750906861, 1614815264, 535035132, 3363418545, 3988151131, 3201591914, 1183697867, 3647454910, 1265776953, 3734260298, 3566750796, 3903871064, 1250283471, 1807470800, 717615087, 3847203498, 384695291, 3313910595, 3617213773, 1432761139, 2484176261, 3481945413, 283769337, 100925954, 2180939647, 4037038160, 1148730428, 3123027871, 3813386408, 4087501137, 4267549603, 3229630528, 2315620239, 2906624658, 3156319645, 1215313976, 82966005, 3747855548, 3245848246, 1974459098, 1665278241, 807407632, 451280895, 251524083, 1841287890, 1283575245, 337120268, 891687699, 801369324, 3787349855, 2721421207, 3431482436, 959321879, 1469301956, 4065699751, 2197585534, 1199193405, 2898814052, 3887750493, 724703513, 2514908019, 2696962144, 2551808385, 3516813135, 2141445340, 1715741218, 2119445034, 2872807568, 2198571144, 3398190662, 700968686, 3547052216, 1009259540, 2041044702, 3803995742, 487983883, 1991105499, 1004265696, 1449407026, 1316239930, 504629770, 3683797321, 168560134, 1816667172, 3837287516, 1570751170, 1857934291, 4014189740, 2797888098, 2822345105, 2754712981, 936633572, 2347923833, 852879335, 1133234376, 1500395319, 3084545389, 2348912013, 1689376213, 3533459022, 3762923945, 3034082412, 4205598294, 133428468, 634383082, 2949277029, 2398386810, 3913789102, 403703816, 3580869306, 2297460856, 1867130149, 1918643758, 607656988, 4049053350, 3346248884, 1368901318, 600565992, 2090982877, 2632479860, 557719327, 3717614411, 3697393085, 2249034635, 2232388234, 2430627952, 1115438654, 3295786421, 2865522278, 3633334344, 84280067, 33027830, 303828494, 2747425121, 1600795957, 4188952407, 3496589753, 2434238086, 1486471617, 658119965, 3106381470, 953803233, 334231800, 3005978776, 857870609, 3151128937, 1890179545, 2298973838, 2805175444, 3056442267, 574365214, 2450884487, 550103529, 1233637070, 4289353045, 2018519080, 2057691103, 2399374476, 4166623649, 2148108681, 387583245, 3664101311, 836232934, 3330556482, 3100665960, 3280093505, 2955516313, 2002398509, 287182607, 3413881008, 4238890068, 3597515707, 975967766],
        g = [1671808611, 2089089148, 2006576759, 2072901243, 4061003762, 1807603307, 1873927791, 3310653893, 810573872, 16974337, 1739181671, 729634347, 4263110654, 3613570519, 2883997099, 1989864566, 3393556426, 2191335298, 3376449993, 2106063485, 4195741690, 1508618841, 1204391495, 4027317232, 2917941677, 3563566036, 2734514082, 2951366063, 2629772188, 2767672228, 1922491506, 3227229120, 3082974647, 4246528509, 2477669779, 644500518, 911895606, 1061256767, 4144166391, 3427763148, 878471220, 2784252325, 3845444069, 4043897329, 1905517169, 3631459288, 827548209, 356461077, 67897348, 3344078279, 593839651, 3277757891, 405286936, 2527147926, 84871685, 2595565466, 118033927, 305538066, 2157648768, 3795705826, 3945188843, 661212711, 2999812018, 1973414517, 152769033, 2208177539, 745822252, 439235610, 455947803, 1857215598, 1525593178, 2700827552, 1391895634, 994932283, 3596728278, 3016654259, 695947817, 3812548067, 795958831, 2224493444, 1408607827, 3513301457, 0, 3979133421, 543178784, 4229948412, 2982705585, 1542305371, 1790891114, 3410398667, 3201918910, 961245753, 1256100938, 1289001036, 1491644504, 3477767631, 3496721360, 4012557807, 2867154858, 4212583931, 1137018435, 1305975373, 861234739, 2241073541, 1171229253, 4178635257, 33948674, 2139225727, 1357946960, 1011120188, 2679776671, 2833468328, 1374921297, 2751356323, 1086357568, 2408187279, 2460827538, 2646352285, 944271416, 4110742005, 3168756668, 3066132406, 3665145818, 560153121, 271589392, 4279952895, 4077846003, 3530407890, 3444343245, 202643468, 322250259, 3962553324, 1608629855, 2543990167, 1154254916, 389623319, 3294073796, 2817676711, 2122513534, 1028094525, 1689045092, 1575467613, 422261273, 1939203699, 1621147744, 2174228865, 1339137615, 3699352540, 577127458, 712922154, 2427141008, 2290289544, 1187679302, 3995715566, 3100863416, 339486740, 3732514782, 1591917662, 186455563, 3681988059, 3762019296, 844522546, 978220090, 169743370, 1239126601, 101321734, 611076132, 1558493276, 3260915650, 3547250131, 2901361580, 1655096418, 2443721105, 2510565781, 3828863972, 2039214713, 3878868455, 3359869896, 928607799, 1840765549, 2374762893, 3580146133, 1322425422, 2850048425, 1823791212, 1459268694, 4094161908, 3928346602, 1706019429, 2056189050, 2934523822, 135794696, 3134549946, 2022240376, 628050469, 779246638, 472135708, 2800834470, 3032970164, 3327236038, 3894660072, 3715932637, 1956440180, 522272287, 1272813131, 3185336765, 2340818315, 2323976074, 1888542832, 1044544574, 3049550261, 1722469478, 1222152264, 50660867, 4127324150, 236067854, 1638122081, 895445557, 1475980887, 3117443513, 2257655686, 3243809217, 489110045, 2662934430, 3778599393, 4162055160, 2561878936, 288563729, 1773916777, 3648039385, 2391345038, 2493985684, 2612407707, 505560094, 2274497927, 3911240169, 3460925390, 1442818645, 678973480, 3749357023, 2358182796, 2717407649, 2306869641, 219617805, 3218761151, 3862026214, 1120306242, 1756942440, 1103331905, 2578459033, 762796589, 252780047, 2966125488, 1425844308, 3151392187, 372911126],
        y = [1667474886, 2088535288, 2004326894, 2071694838, 4075949567, 1802223062, 1869591006, 3318043793, 808472672, 16843522, 1734846926, 724270422, 4278065639, 3621216949, 2880169549, 1987484396, 3402253711, 2189597983, 3385409673, 2105378810, 4210693615, 1499065266, 1195886990, 4042263547, 2913856577, 3570689971, 2728590687, 2947541573, 2627518243, 2762274643, 1920112356, 3233831835, 3082273397, 4261223649, 2475929149, 640051788, 909531756, 1061110142, 4160160501, 3435941763, 875846760, 2779116625, 3857003729, 4059105529, 1903268834, 3638064043, 825316194, 353713962, 67374088, 3351728789, 589522246, 3284360861, 404236336, 2526454071, 84217610, 2593830191, 117901582, 303183396, 2155911963, 3806477791, 3958056653, 656894286, 2998062463, 1970642922, 151591698, 2206440989, 741110872, 437923380, 454765878, 1852748508, 1515908788, 2694904667, 1381168804, 993742198, 3604373943, 3014905469, 690584402, 3823320797, 791638366, 2223281939, 1398011302, 3520161977, 0, 3991743681, 538992704, 4244381667, 2981218425, 1532751286, 1785380564, 3419096717, 3200178535, 960056178, 1246420628, 1280103576, 1482221744, 3486468741, 3503319995, 4025428677, 2863326543, 4227536621, 1128514950, 1296947098, 859002214, 2240123921, 1162203018, 4193849577, 33687044, 2139062782, 1347481760, 1010582648, 2678045221, 2829640523, 1364325282, 2745433693, 1077985408, 2408548869, 2459086143, 2644360225, 943212656, 4126475505, 3166494563, 3065430391, 3671750063, 555836226, 269496352, 4294908645, 4092792573, 3537006015, 3452783745, 202118168, 320025894, 3974901699, 1600119230, 2543297077, 1145359496, 387397934, 3301201811, 2812801621, 2122220284, 1027426170, 1684319432, 1566435258, 421079858, 1936954854, 1616945344, 2172753945, 1330631070, 3705438115, 572679748, 707427924, 2425400123, 2290647819, 1179044492, 4008585671, 3099120491, 336870440, 3739122087, 1583276732, 185277718, 3688593069, 3772791771, 842159716, 976899700, 168435220, 1229577106, 101059084, 606366792, 1549591736, 3267517855, 3553849021, 2897014595, 1650632388, 2442242105, 2509612081, 3840161747, 2038008818, 3890688725, 3368567691, 926374254, 1835907034, 2374863873, 3587531953, 1313788572, 2846482505, 1819063512, 1448540844, 4109633523, 3941213647, 1701162954, 2054852340, 2930698567, 134748176, 3132806511, 2021165296, 623210314, 774795868, 471606328, 2795958615, 3031746419, 3334885783, 3907527627, 3722280097, 1953799400, 522133822, 1263263126, 3183336545, 2341176845, 2324333839, 1886425312, 1044267644, 3048588401, 1718004428, 1212733584, 50529542, 4143317495, 235803164, 1633788866, 892690282, 1465383342, 3115962473, 2256965911, 3250673817, 488449850, 2661202215, 3789633753, 4177007595, 2560144171, 286339874, 1768537042, 3654906025, 2391705863, 2492770099, 2610673197, 505291324, 2273808917, 3924369609, 3469625735, 1431699370, 673740880, 3755965093, 2358021891, 2711746649, 2307489801, 218961690, 3217021541, 3873845719, 1111672452, 1751693520, 1094828930, 2576986153, 757954394, 252645662, 2964376443, 1414855848, 3149649517, 370555436],
        v = [1374988112, 2118214995, 437757123, 975658646, 1001089995, 530400753, 2902087851, 1273168787, 540080725, 2910219766, 2295101073, 4110568485, 1340463100, 3307916247, 641025152, 3043140495, 3736164937, 632953703, 1172967064, 1576976609, 3274667266, 2169303058, 2370213795, 1809054150, 59727847, 361929877, 3211623147, 2505202138, 3569255213, 1484005843, 1239443753, 2395588676, 1975683434, 4102977912, 2572697195, 666464733, 3202437046, 4035489047, 3374361702, 2110667444, 1675577880, 3843699074, 2538681184, 1649639237, 2976151520, 3144396420, 4269907996, 4178062228, 1883793496, 2403728665, 2497604743, 1383856311, 2876494627, 1917518562, 3810496343, 1716890410, 3001755655, 800440835, 2261089178, 3543599269, 807962610, 599762354, 33778362, 3977675356, 2328828971, 2809771154, 4077384432, 1315562145, 1708848333, 101039829, 3509871135, 3299278474, 875451293, 2733856160, 92987698, 2767645557, 193195065, 1080094634, 1584504582, 3178106961, 1042385657, 2531067453, 3711829422, 1306967366, 2438237621, 1908694277, 67556463, 1615861247, 429456164, 3602770327, 2302690252, 1742315127, 2968011453, 126454664, 3877198648, 2043211483, 2709260871, 2084704233, 4169408201, 0, 159417987, 841739592, 504459436, 1817866830, 4245618683, 260388950, 1034867998, 908933415, 168810852, 1750902305, 2606453969, 607530554, 202008497, 2472011535, 3035535058, 463180190, 2160117071, 1641816226, 1517767529, 470948374, 3801332234, 3231722213, 1008918595, 303765277, 235474187, 4069246893, 766945465, 337553864, 1475418501, 2943682380, 4003061179, 2743034109, 4144047775, 1551037884, 1147550661, 1543208500, 2336434550, 3408119516, 3069049960, 3102011747, 3610369226, 1113818384, 328671808, 2227573024, 2236228733, 3535486456, 2935566865, 3341394285, 496906059, 3702665459, 226906860, 2009195472, 733156972, 2842737049, 294930682, 1206477858, 2835123396, 2700099354, 1451044056, 573804783, 2269728455, 3644379585, 2362090238, 2564033334, 2801107407, 2776292904, 3669462566, 1068351396, 742039012, 1350078989, 1784663195, 1417561698, 4136440770, 2430122216, 775550814, 2193862645, 2673705150, 1775276924, 1876241833, 3475313331, 3366754619, 270040487, 3902563182, 3678124923, 3441850377, 1851332852, 3969562369, 2203032232, 3868552805, 2868897406, 566021896, 4011190502, 3135740889, 1248802510, 3936291284, 699432150, 832877231, 708780849, 3332740144, 899835584, 1951317047, 4236429990, 3767586992, 866637845, 4043610186, 1106041591, 2144161806, 395441711, 1984812685, 1139781709, 3433712980, 3835036895, 2664543715, 1282050075, 3240894392, 1181045119, 2640243204, 25965917, 4203181171, 4211818798, 3009879386, 2463879762, 3910161971, 1842759443, 2597806476, 933301370, 1509430414, 3943906441, 3467192302, 3076639029, 3776767469, 2051518780, 2631065433, 1441952575, 404016761, 1942435775, 1408749034, 1610459739, 3745345300, 2017778566, 3400528769, 3110650942, 941896748, 3265478751, 371049330, 3168937228, 675039627, 4279080257, 967311729, 135050206, 3635733660, 1683407248, 2076935265, 3576870512, 1215061108, 3501741890],
        m = [1347548327, 1400783205, 3273267108, 2520393566, 3409685355, 4045380933, 2880240216, 2471224067, 1428173050, 4138563181, 2441661558, 636813900, 4233094615, 3620022987, 2149987652, 2411029155, 1239331162, 1730525723, 2554718734, 3781033664, 46346101, 310463728, 2743944855, 3328955385, 3875770207, 2501218972, 3955191162, 3667219033, 768917123, 3545789473, 692707433, 1150208456, 1786102409, 2029293177, 1805211710, 3710368113, 3065962831, 401639597, 1724457132, 3028143674, 409198410, 2196052529, 1620529459, 1164071807, 3769721975, 2226875310, 486441376, 2499348523, 1483753576, 428819965, 2274680428, 3075636216, 598438867, 3799141122, 1474502543, 711349675, 129166120, 53458370, 2592523643, 2782082824, 4063242375, 2988687269, 3120694122, 1559041666, 730517276, 2460449204, 4042459122, 2706270690, 3446004468, 3573941694, 533804130, 2328143614, 2637442643, 2695033685, 839224033, 1973745387, 957055980, 2856345839, 106852767, 1371368976, 4181598602, 1033297158, 2933734917, 1179510461, 3046200461, 91341917, 1862534868, 4284502037, 605657339, 2547432937, 3431546947, 2003294622, 3182487618, 2282195339, 954669403, 3682191598, 1201765386, 3917234703, 3388507166, 0, 2198438022, 1211247597, 2887651696, 1315723890, 4227665663, 1443857720, 507358933, 657861945, 1678381017, 560487590, 3516619604, 975451694, 2970356327, 261314535, 3535072918, 2652609425, 1333838021, 2724322336, 1767536459, 370938394, 182621114, 3854606378, 1128014560, 487725847, 185469197, 2918353863, 3106780840, 3356761769, 2237133081, 1286567175, 3152976349, 4255350624, 2683765030, 3160175349, 3309594171, 878443390, 1988838185, 3704300486, 1756818940, 1673061617, 3403100636, 272786309, 1075025698, 545572369, 2105887268, 4174560061, 296679730, 1841768865, 1260232239, 4091327024, 3960309330, 3497509347, 1814803222, 2578018489, 4195456072, 575138148, 3299409036, 446754879, 3629546796, 4011996048, 3347532110, 3252238545, 4270639778, 915985419, 3483825537, 681933534, 651868046, 2755636671, 3828103837, 223377554, 2607439820, 1649704518, 3270937875, 3901806776, 1580087799, 4118987695, 3198115200, 2087309459, 2842678573, 3016697106, 1003007129, 2802849917, 1860738147, 2077965243, 164439672, 4100872472, 32283319, 2827177882, 1709610350, 2125135846, 136428751, 3874428392, 3652904859, 3460984630, 3572145929, 3593056380, 2939266226, 824852259, 818324884, 3224740454, 930369212, 2801566410, 2967507152, 355706840, 1257309336, 4148292826, 243256656, 790073846, 2373340630, 1296297904, 1422699085, 3756299780, 3818836405, 457992840, 3099667487, 2135319889, 77422314, 1560382517, 1945798516, 788204353, 1521706781, 1385356242, 870912086, 325965383, 2358957921, 2050466060, 2388260884, 2313884476, 4006521127, 901210569, 3990953189, 1014646705, 1503449823, 1062597235, 2031621326, 3212035895, 3931371469, 1533017514, 350174575, 2256028891, 2177544179, 1052338372, 741876788, 1606591296, 1914052035, 213705253, 2334669897, 1107234197, 1899603969, 3725069491, 2631447780, 2422494913, 1635502980, 1893020342, 1950903388, 1120974935],
        b = [2807058932, 1699970625, 2764249623, 1586903591, 1808481195, 1173430173, 1487645946, 59984867, 4199882800, 1844882806, 1989249228, 1277555970, 3623636965, 3419915562, 1149249077, 2744104290, 1514790577, 459744698, 244860394, 3235995134, 1963115311, 4027744588, 2544078150, 4190530515, 1608975247, 2627016082, 2062270317, 1507497298, 2200818878, 567498868, 1764313568, 3359936201, 2305455554, 2037970062, 1047239e3, 1910319033, 1337376481, 2904027272, 2892417312, 984907214, 1243112415, 830661914, 861968209, 2135253587, 2011214180, 2927934315, 2686254721, 731183368, 1750626376, 4246310725, 1820824798, 4172763771, 3542330227, 48394827, 2404901663, 2871682645, 671593195, 3254988725, 2073724613, 145085239, 2280796200, 2779915199, 1790575107, 2187128086, 472615631, 3029510009, 4075877127, 3802222185, 4107101658, 3201631749, 1646252340, 4270507174, 1402811438, 1436590835, 3778151818, 3950355702, 3963161475, 4020912224, 2667994737, 273792366, 2331590177, 104699613, 95345982, 3175501286, 2377486676, 1560637892, 3564045318, 369057872, 4213447064, 3919042237, 1137477952, 2658625497, 1119727848, 2340947849, 1530455833, 4007360968, 172466556, 266959938, 516552836, 0, 2256734592, 3980931627, 1890328081, 1917742170, 4294704398, 945164165, 3575528878, 958871085, 3647212047, 2787207260, 1423022939, 775562294, 1739656202, 3876557655, 2530391278, 2443058075, 3310321856, 547512796, 1265195639, 437656594, 3121275539, 719700128, 3762502690, 387781147, 218828297, 3350065803, 2830708150, 2848461854, 428169201, 122466165, 3720081049, 1627235199, 648017665, 4122762354, 1002783846, 2117360635, 695634755, 3336358691, 4234721005, 4049844452, 3704280881, 2232435299, 574624663, 287343814, 612205898, 1039717051, 840019705, 2708326185, 793451934, 821288114, 1391201670, 3822090177, 376187827, 3113855344, 1224348052, 1679968233, 2361698556, 1058709744, 752375421, 2431590963, 1321699145, 3519142200, 2734591178, 188127444, 2177869557, 3727205754, 2384911031, 3215212461, 2648976442, 2450346104, 3432737375, 1180849278, 331544205, 3102249176, 4150144569, 2952102595, 2159976285, 2474404304, 766078933, 313773861, 2570832044, 2108100632, 1668212892, 3145456443, 2013908262, 418672217, 3070356634, 2594734927, 1852171925, 3867060991, 3473416636, 3907448597, 2614737639, 919489135, 164948639, 2094410160, 2997825956, 590424639, 2486224549, 1723872674, 3157750862, 3399941250, 3501252752, 3625268135, 2555048196, 3673637356, 1343127501, 4130281361, 3599595085, 2957853679, 1297403050, 81781910, 3051593425, 2283490410, 532201772, 1367295589, 3926170974, 895287692, 1953757831, 1093597963, 492483431, 3528626907, 1446242576, 1192455638, 1636604631, 209336225, 344873464, 1015671571, 669961897, 3375740769, 3857572124, 2973530695, 3747192018, 1933530610, 3464042516, 935293895, 3454686199, 2858115069, 1863638845, 3683022916, 4085369519, 3292445032, 875313188, 1080017571, 3279033885, 621591778, 1233856572, 2504130317, 24197544, 3017672716, 3835484340, 3247465558, 2220981195, 3060847922, 1551124588, 1463996600],
        E = [4104605777, 1097159550, 396673818, 660510266, 2875968315, 2638606623, 4200115116, 3808662347, 821712160, 1986918061, 3430322568, 38544885, 3856137295, 718002117, 893681702, 1654886325, 2975484382, 3122358053, 3926825029, 4274053469, 796197571, 1290801793, 1184342925, 3556361835, 2405426947, 2459735317, 1836772287, 1381620373, 3196267988, 1948373848, 3764988233, 3385345166, 3263785589, 2390325492, 1480485785, 3111247143, 3780097726, 2293045232, 548169417, 3459953789, 3746175075, 439452389, 1362321559, 1400849762, 1685577905, 1806599355, 2174754046, 137073913, 1214797936, 1174215055, 3731654548, 2079897426, 1943217067, 1258480242, 529487843, 1437280870, 3945269170, 3049390895, 3313212038, 923313619, 679998e3, 3215307299, 57326082, 377642221, 3474729866, 2041877159, 133361907, 1776460110, 3673476453, 96392454, 878845905, 2801699524, 777231668, 4082475170, 2330014213, 4142626212, 2213296395, 1626319424, 1906247262, 1846563261, 562755902, 3708173718, 1040559837, 3871163981, 1418573201, 3294430577, 114585348, 1343618912, 2566595609, 3186202582, 1078185097, 3651041127, 3896688048, 2307622919, 425408743, 3371096953, 2081048481, 1108339068, 2216610296, 0, 2156299017, 736970802, 292596766, 1517440620, 251657213, 2235061775, 2933202493, 758720310, 265905162, 1554391400, 1532285339, 908999204, 174567692, 1474760595, 4002861748, 2610011675, 3234156416, 3693126241, 2001430874, 303699484, 2478443234, 2687165888, 585122620, 454499602, 151849742, 2345119218, 3064510765, 514443284, 4044981591, 1963412655, 2581445614, 2137062819, 19308535, 1928707164, 1715193156, 4219352155, 1126790795, 600235211, 3992742070, 3841024952, 836553431, 1669664834, 2535604243, 3323011204, 1243905413, 3141400786, 4180808110, 698445255, 2653899549, 2989552604, 2253581325, 3252932727, 3004591147, 1891211689, 2487810577, 3915653703, 4237083816, 4030667424, 2100090966, 865136418, 1229899655, 953270745, 3399679628, 3557504664, 4118925222, 2061379749, 3079546586, 2915017791, 983426092, 2022837584, 1607244650, 2118541908, 2366882550, 3635996816, 972512814, 3283088770, 1568718495, 3499326569, 3576539503, 621982671, 2895723464, 410887952, 2623762152, 1002142683, 645401037, 1494807662, 2595684844, 1335535747, 2507040230, 4293295786, 3167684641, 367585007, 3885750714, 1865862730, 2668221674, 2960971305, 2763173681, 1059270954, 2777952454, 2724642869, 1320957812, 2194319100, 2429595872, 2815956275, 77089521, 3973773121, 3444575871, 2448830231, 1305906550, 4021308739, 2857194700, 2516901860, 3518358430, 1787304780, 740276417, 1699839814, 1592394909, 2352307457, 2272556026, 188821243, 1729977011, 3687994002, 274084841, 3594982253, 3613494426, 2701949495, 4162096729, 322734571, 2837966542, 1640576439, 484830689, 1202797690, 3537852828, 4067639125, 349075736, 3342319475, 4157467219, 4255800159, 1030690015, 1155237496, 2951971274, 1757691577, 607398968, 2738905026, 499347990, 3794078908, 1011452712, 227885567, 2818666809, 213114376, 3034881240, 1455525988, 3414450555, 850817237, 1817998408, 3092726480],
        w = [0, 235474187, 470948374, 303765277, 941896748, 908933415, 607530554, 708780849, 1883793496, 2118214995, 1817866830, 1649639237, 1215061108, 1181045119, 1417561698, 1517767529, 3767586992, 4003061179, 4236429990, 4069246893, 3635733660, 3602770327, 3299278474, 3400528769, 2430122216, 2664543715, 2362090238, 2193862645, 2835123396, 2801107407, 3035535058, 3135740889, 3678124923, 3576870512, 3341394285, 3374361702, 3810496343, 3977675356, 4279080257, 4043610186, 2876494627, 2776292904, 3076639029, 3110650942, 2472011535, 2640243204, 2403728665, 2169303058, 1001089995, 899835584, 666464733, 699432150, 59727847, 226906860, 530400753, 294930682, 1273168787, 1172967064, 1475418501, 1509430414, 1942435775, 2110667444, 1876241833, 1641816226, 2910219766, 2743034109, 2976151520, 3211623147, 2505202138, 2606453969, 2302690252, 2269728455, 3711829422, 3543599269, 3240894392, 3475313331, 3843699074, 3943906441, 4178062228, 4144047775, 1306967366, 1139781709, 1374988112, 1610459739, 1975683434, 2076935265, 1775276924, 1742315127, 1034867998, 866637845, 566021896, 800440835, 92987698, 193195065, 429456164, 395441711, 1984812685, 2017778566, 1784663195, 1683407248, 1315562145, 1080094634, 1383856311, 1551037884, 101039829, 135050206, 437757123, 337553864, 1042385657, 807962610, 573804783, 742039012, 2531067453, 2564033334, 2328828971, 2227573024, 2935566865, 2700099354, 3001755655, 3168937228, 3868552805, 3902563182, 4203181171, 4102977912, 3736164937, 3501741890, 3265478751, 3433712980, 1106041591, 1340463100, 1576976609, 1408749034, 2043211483, 2009195472, 1708848333, 1809054150, 832877231, 1068351396, 766945465, 599762354, 159417987, 126454664, 361929877, 463180190, 2709260871, 2943682380, 3178106961, 3009879386, 2572697195, 2538681184, 2236228733, 2336434550, 3509871135, 3745345300, 3441850377, 3274667266, 3910161971, 3877198648, 4110568485, 4211818798, 2597806476, 2497604743, 2261089178, 2295101073, 2733856160, 2902087851, 3202437046, 2968011453, 3936291284, 3835036895, 4136440770, 4169408201, 3535486456, 3702665459, 3467192302, 3231722213, 2051518780, 1951317047, 1716890410, 1750902305, 1113818384, 1282050075, 1584504582, 1350078989, 168810852, 67556463, 371049330, 404016761, 841739592, 1008918595, 775550814, 540080725, 3969562369, 3801332234, 4035489047, 4269907996, 3569255213, 3669462566, 3366754619, 3332740144, 2631065433, 2463879762, 2160117071, 2395588676, 2767645557, 2868897406, 3102011747, 3069049960, 202008497, 33778362, 270040487, 504459436, 875451293, 975658646, 675039627, 641025152, 2084704233, 1917518562, 1615861247, 1851332852, 1147550661, 1248802510, 1484005843, 1451044056, 933301370, 967311729, 733156972, 632953703, 260388950, 25965917, 328671808, 496906059, 1206477858, 1239443753, 1543208500, 1441952575, 2144161806, 1908694277, 1675577880, 1842759443, 3610369226, 3644379585, 3408119516, 3307916247, 4011190502, 3776767469, 4077384432, 4245618683, 2809771154, 2842737049, 3144396420, 3043140495, 2673705150, 2438237621, 2203032232, 2370213795],
        S = [0, 185469197, 370938394, 487725847, 741876788, 657861945, 975451694, 824852259, 1483753576, 1400783205, 1315723890, 1164071807, 1950903388, 2135319889, 1649704518, 1767536459, 2967507152, 3152976349, 2801566410, 2918353863, 2631447780, 2547432937, 2328143614, 2177544179, 3901806776, 3818836405, 4270639778, 4118987695, 3299409036, 3483825537, 3535072918, 3652904859, 2077965243, 1893020342, 1841768865, 1724457132, 1474502543, 1559041666, 1107234197, 1257309336, 598438867, 681933534, 901210569, 1052338372, 261314535, 77422314, 428819965, 310463728, 3409685355, 3224740454, 3710368113, 3593056380, 3875770207, 3960309330, 4045380933, 4195456072, 2471224067, 2554718734, 2237133081, 2388260884, 3212035895, 3028143674, 2842678573, 2724322336, 4138563181, 4255350624, 3769721975, 3955191162, 3667219033, 3516619604, 3431546947, 3347532110, 2933734917, 2782082824, 3099667487, 3016697106, 2196052529, 2313884476, 2499348523, 2683765030, 1179510461, 1296297904, 1347548327, 1533017514, 1786102409, 1635502980, 2087309459, 2003294622, 507358933, 355706840, 136428751, 53458370, 839224033, 957055980, 605657339, 790073846, 2373340630, 2256028891, 2607439820, 2422494913, 2706270690, 2856345839, 3075636216, 3160175349, 3573941694, 3725069491, 3273267108, 3356761769, 4181598602, 4063242375, 4011996048, 3828103837, 1033297158, 915985419, 730517276, 545572369, 296679730, 446754879, 129166120, 213705253, 1709610350, 1860738147, 1945798516, 2029293177, 1239331162, 1120974935, 1606591296, 1422699085, 4148292826, 4233094615, 3781033664, 3931371469, 3682191598, 3497509347, 3446004468, 3328955385, 2939266226, 2755636671, 3106780840, 2988687269, 2198438022, 2282195339, 2501218972, 2652609425, 1201765386, 1286567175, 1371368976, 1521706781, 1805211710, 1620529459, 2105887268, 1988838185, 533804130, 350174575, 164439672, 46346101, 870912086, 954669403, 636813900, 788204353, 2358957921, 2274680428, 2592523643, 2441661558, 2695033685, 2880240216, 3065962831, 3182487618, 3572145929, 3756299780, 3270937875, 3388507166, 4174560061, 4091327024, 4006521127, 3854606378, 1014646705, 930369212, 711349675, 560487590, 272786309, 457992840, 106852767, 223377554, 1678381017, 1862534868, 1914052035, 2031621326, 1211247597, 1128014560, 1580087799, 1428173050, 32283319, 182621114, 401639597, 486441376, 768917123, 651868046, 1003007129, 818324884, 1503449823, 1385356242, 1333838021, 1150208456, 1973745387, 2125135846, 1673061617, 1756818940, 2970356327, 3120694122, 2802849917, 2887651696, 2637442643, 2520393566, 2334669897, 2149987652, 3917234703, 3799141122, 4284502037, 4100872472, 3309594171, 3460984630, 3545789473, 3629546796, 2050466060, 1899603969, 1814803222, 1730525723, 1443857720, 1560382517, 1075025698, 1260232239, 575138148, 692707433, 878443390, 1062597235, 243256656, 91341917, 409198410, 325965383, 3403100636, 3252238545, 3704300486, 3620022987, 3874428392, 3990953189, 4042459122, 4227665663, 2460449204, 2578018489, 2226875310, 2411029155, 3198115200, 3046200461, 2827177882, 2743944855],
        R = [0, 218828297, 437656594, 387781147, 875313188, 958871085, 775562294, 590424639, 1750626376, 1699970625, 1917742170, 2135253587, 1551124588, 1367295589, 1180849278, 1265195639, 3501252752, 3720081049, 3399941250, 3350065803, 3835484340, 3919042237, 4270507174, 4085369519, 3102249176, 3051593425, 2734591178, 2952102595, 2361698556, 2177869557, 2530391278, 2614737639, 3145456443, 3060847922, 2708326185, 2892417312, 2404901663, 2187128086, 2504130317, 2555048196, 3542330227, 3727205754, 3375740769, 3292445032, 3876557655, 3926170974, 4246310725, 4027744588, 1808481195, 1723872674, 1910319033, 2094410160, 1608975247, 1391201670, 1173430173, 1224348052, 59984867, 244860394, 428169201, 344873464, 935293895, 984907214, 766078933, 547512796, 1844882806, 1627235199, 2011214180, 2062270317, 1507497298, 1423022939, 1137477952, 1321699145, 95345982, 145085239, 532201772, 313773861, 830661914, 1015671571, 731183368, 648017665, 3175501286, 2957853679, 2807058932, 2858115069, 2305455554, 2220981195, 2474404304, 2658625497, 3575528878, 3625268135, 3473416636, 3254988725, 3778151818, 3963161475, 4213447064, 4130281361, 3599595085, 3683022916, 3432737375, 3247465558, 3802222185, 4020912224, 4172763771, 4122762354, 3201631749, 3017672716, 2764249623, 2848461854, 2331590177, 2280796200, 2431590963, 2648976442, 104699613, 188127444, 472615631, 287343814, 840019705, 1058709744, 671593195, 621591778, 1852171925, 1668212892, 1953757831, 2037970062, 1514790577, 1463996600, 1080017571, 1297403050, 3673637356, 3623636965, 3235995134, 3454686199, 4007360968, 3822090177, 4107101658, 4190530515, 2997825956, 3215212461, 2830708150, 2779915199, 2256734592, 2340947849, 2627016082, 2443058075, 172466556, 122466165, 273792366, 492483431, 1047239e3, 861968209, 612205898, 695634755, 1646252340, 1863638845, 2013908262, 1963115311, 1446242576, 1530455833, 1277555970, 1093597963, 1636604631, 1820824798, 2073724613, 1989249228, 1436590835, 1487645946, 1337376481, 1119727848, 164948639, 81781910, 331544205, 516552836, 1039717051, 821288114, 669961897, 719700128, 2973530695, 3157750862, 2871682645, 2787207260, 2232435299, 2283490410, 2667994737, 2450346104, 3647212047, 3564045318, 3279033885, 3464042516, 3980931627, 3762502690, 4150144569, 4199882800, 3070356634, 3121275539, 2904027272, 2686254721, 2200818878, 2384911031, 2570832044, 2486224549, 3747192018, 3528626907, 3310321856, 3359936201, 3950355702, 3867060991, 4049844452, 4234721005, 1739656202, 1790575107, 2108100632, 1890328081, 1402811438, 1586903591, 1233856572, 1149249077, 266959938, 48394827, 369057872, 418672217, 1002783846, 919489135, 567498868, 752375421, 209336225, 24197544, 376187827, 459744698, 945164165, 895287692, 574624663, 793451934, 1679968233, 1764313568, 2117360635, 1933530610, 1343127501, 1560637892, 1243112415, 1192455638, 3704280881, 3519142200, 3336358691, 3419915562, 3907448597, 3857572124, 4075877127, 4294704398, 3029510009, 3113855344, 2927934315, 2744104290, 2159976285, 2377486676, 2594734927, 2544078150],
        k = [0, 151849742, 303699484, 454499602, 607398968, 758720310, 908999204, 1059270954, 1214797936, 1097159550, 1517440620, 1400849762, 1817998408, 1699839814, 2118541908, 2001430874, 2429595872, 2581445614, 2194319100, 2345119218, 3034881240, 3186202582, 2801699524, 2951971274, 3635996816, 3518358430, 3399679628, 3283088770, 4237083816, 4118925222, 4002861748, 3885750714, 1002142683, 850817237, 698445255, 548169417, 529487843, 377642221, 227885567, 77089521, 1943217067, 2061379749, 1640576439, 1757691577, 1474760595, 1592394909, 1174215055, 1290801793, 2875968315, 2724642869, 3111247143, 2960971305, 2405426947, 2253581325, 2638606623, 2487810577, 3808662347, 3926825029, 4044981591, 4162096729, 3342319475, 3459953789, 3576539503, 3693126241, 1986918061, 2137062819, 1685577905, 1836772287, 1381620373, 1532285339, 1078185097, 1229899655, 1040559837, 923313619, 740276417, 621982671, 439452389, 322734571, 137073913, 19308535, 3871163981, 4021308739, 4104605777, 4255800159, 3263785589, 3414450555, 3499326569, 3651041127, 2933202493, 2815956275, 3167684641, 3049390895, 2330014213, 2213296395, 2566595609, 2448830231, 1305906550, 1155237496, 1607244650, 1455525988, 1776460110, 1626319424, 2079897426, 1928707164, 96392454, 213114376, 396673818, 514443284, 562755902, 679998e3, 865136418, 983426092, 3708173718, 3557504664, 3474729866, 3323011204, 4180808110, 4030667424, 3945269170, 3794078908, 2507040230, 2623762152, 2272556026, 2390325492, 2975484382, 3092726480, 2738905026, 2857194700, 3973773121, 3856137295, 4274053469, 4157467219, 3371096953, 3252932727, 3673476453, 3556361835, 2763173681, 2915017791, 3064510765, 3215307299, 2156299017, 2307622919, 2459735317, 2610011675, 2081048481, 1963412655, 1846563261, 1729977011, 1480485785, 1362321559, 1243905413, 1126790795, 878845905, 1030690015, 645401037, 796197571, 274084841, 425408743, 38544885, 188821243, 3613494426, 3731654548, 3313212038, 3430322568, 4082475170, 4200115116, 3780097726, 3896688048, 2668221674, 2516901860, 2366882550, 2216610296, 3141400786, 2989552604, 2837966542, 2687165888, 1202797690, 1320957812, 1437280870, 1554391400, 1669664834, 1787304780, 1906247262, 2022837584, 265905162, 114585348, 499347990, 349075736, 736970802, 585122620, 972512814, 821712160, 2595684844, 2478443234, 2293045232, 2174754046, 3196267988, 3079546586, 2895723464, 2777952454, 3537852828, 3687994002, 3234156416, 3385345166, 4142626212, 4293295786, 3841024952, 3992742070, 174567692, 57326082, 410887952, 292596766, 777231668, 660510266, 1011452712, 893681702, 1108339068, 1258480242, 1343618912, 1494807662, 1715193156, 1865862730, 1948373848, 2100090966, 2701949495, 2818666809, 3004591147, 3122358053, 2235061775, 2352307457, 2535604243, 2653899549, 3915653703, 3764988233, 4219352155, 4067639125, 3444575871, 3294430577, 3746175075, 3594982253, 836553431, 953270745, 600235211, 718002117, 367585007, 484830689, 133361907, 251657213, 2041877159, 1891211689, 1806599355, 1654886325, 1568718495, 1418573201, 1335535747, 1184342925];

    function T(e) {
      for (var t = [], n = 0; n < e.length; n += 4) t.push(e[n] << 24 | e[n + 1] << 16 | e[n + 2] << 8 | e[n + 3]);

      return t;
    }

    var C = function (e) {
      if (!(this instanceof C)) throw Error("AES must be instanitated with `new`");
      Object.defineProperty(this, "key", {
        value: o(e, !0)
      }), this._prepare();
    };

    C.prototype._prepare = function () {
      var e = l[this.key.length];
      if (null == e) throw new Error("invalid key size (must be 16, 24 or 32 bytes)");
      this._Ke = [], this._Kd = [];

      for (var t = 0; t <= e; t++) this._Ke.push([0, 0, 0, 0]), this._Kd.push([0, 0, 0, 0]);

      var n,
          r = 4 * (e + 1),
          o = this.key.length / 4,
          i = T(this.key);

      for (t = 0; t < o; t++) n = t >> 2, this._Ke[n][t % 4] = i[t], this._Kd[e - n][t % 4] = i[t];

      for (var s, a = 0, c = o; c < r;) {
        if (s = i[o - 1], i[0] ^= f[s >> 16 & 255] << 24 ^ f[s >> 8 & 255] << 16 ^ f[255 & s] << 8 ^ f[s >> 24 & 255] ^ h[a] << 24, a += 1, 8 != o) for (t = 1; t < o; t++) i[t] ^= i[t - 1];else {
          for (t = 1; t < o / 2; t++) i[t] ^= i[t - 1];

          s = i[o / 2 - 1], i[o / 2] ^= f[255 & s] ^ f[s >> 8 & 255] << 8 ^ f[s >> 16 & 255] << 16 ^ f[s >> 24 & 255] << 24;

          for (t = o / 2 + 1; t < o; t++) i[t] ^= i[t - 1];
        }

        for (t = 0; t < o && c < r;) u = c >> 2, d = c % 4, this._Ke[u][d] = i[t], this._Kd[e - u][d] = i[t++], c++;
      }

      for (var u = 1; u < e; u++) for (var d = 0; d < 4; d++) s = this._Kd[u][d], this._Kd[u][d] = w[s >> 24 & 255] ^ S[s >> 16 & 255] ^ R[s >> 8 & 255] ^ k[255 & s];
    }, C.prototype.encrypt = function (e) {
      if (16 != e.length) throw new Error("invalid plaintext size (must be 16 bytes)");

      for (var t = this._Ke.length - 1, n = [0, 0, 0, 0], r = T(e), o = 0; o < 4; o++) r[o] ^= this._Ke[0][o];

      for (var s = 1; s < t; s++) {
        for (o = 0; o < 4; o++) n[o] = p[r[o] >> 24 & 255] ^ _[r[(o + 1) % 4] >> 16 & 255] ^ g[r[(o + 2) % 4] >> 8 & 255] ^ y[255 & r[(o + 3) % 4]] ^ this._Ke[s][o];

        r = n.slice();
      }

      var a,
          c = i(16);

      for (o = 0; o < 4; o++) a = this._Ke[t][o], c[4 * o] = 255 & (f[r[o] >> 24 & 255] ^ a >> 24), c[4 * o + 1] = 255 & (f[r[(o + 1) % 4] >> 16 & 255] ^ a >> 16), c[4 * o + 2] = 255 & (f[r[(o + 2) % 4] >> 8 & 255] ^ a >> 8), c[4 * o + 3] = 255 & (f[255 & r[(o + 3) % 4]] ^ a);

      return c;
    }, C.prototype.decrypt = function (e) {
      if (16 != e.length) throw new Error("invalid ciphertext size (must be 16 bytes)");

      for (var t = this._Kd.length - 1, n = [0, 0, 0, 0], r = T(e), o = 0; o < 4; o++) r[o] ^= this._Kd[0][o];

      for (var s = 1; s < t; s++) {
        for (o = 0; o < 4; o++) n[o] = v[r[o] >> 24 & 255] ^ m[r[(o + 3) % 4] >> 16 & 255] ^ b[r[(o + 2) % 4] >> 8 & 255] ^ E[255 & r[(o + 1) % 4]] ^ this._Kd[s][o];

        r = n.slice();
      }

      var a,
          c = i(16);

      for (o = 0; o < 4; o++) a = this._Kd[t][o], c[4 * o] = 255 & (d[r[o] >> 24 & 255] ^ a >> 24), c[4 * o + 1] = 255 & (d[r[(o + 3) % 4] >> 16 & 255] ^ a >> 16), c[4 * o + 2] = 255 & (d[r[(o + 2) % 4] >> 8 & 255] ^ a >> 8), c[4 * o + 3] = 255 & (d[255 & r[(o + 1) % 4]] ^ a);

      return c;
    };

    var A = function (e) {
      if (!(this instanceof A)) throw Error("AES must be instanitated with `new`");
      this.description = "Electronic Code Block", this.name = "ecb", this._aes = new C(e);
    };

    A.prototype.encrypt = function (e) {
      if ((e = o(e)).length % 16 != 0) throw new Error("invalid plaintext size (must be multiple of 16 bytes)");

      for (var t = i(e.length), n = i(16), r = 0; r < e.length; r += 16) s(e, n, 0, r, r + 16), s(n = this._aes.encrypt(n), t, r);

      return t;
    }, A.prototype.decrypt = function (e) {
      if ((e = o(e)).length % 16 != 0) throw new Error("invalid ciphertext size (must be multiple of 16 bytes)");

      for (var t = i(e.length), n = i(16), r = 0; r < e.length; r += 16) s(e, n, 0, r, r + 16), s(n = this._aes.decrypt(n), t, r);

      return t;
    };

    var x = function (e, t) {
      if (!(this instanceof x)) throw Error("AES must be instanitated with `new`");

      if (this.description = "Cipher Block Chaining", this.name = "cbc", t) {
        if (16 != t.length) throw new Error("invalid initialation vector size (must be 16 bytes)");
      } else t = i(16);

      this._lastCipherblock = o(t, !0), this._aes = new C(e);
    };

    x.prototype.encrypt = function (e) {
      if ((e = o(e)).length % 16 != 0) throw new Error("invalid plaintext size (must be multiple of 16 bytes)");

      for (var t = i(e.length), n = i(16), r = 0; r < e.length; r += 16) {
        s(e, n, 0, r, r + 16);

        for (var a = 0; a < 16; a++) n[a] ^= this._lastCipherblock[a];

        this._lastCipherblock = this._aes.encrypt(n), s(this._lastCipherblock, t, r);
      }

      return t;
    }, x.prototype.decrypt = function (e) {
      if ((e = o(e)).length % 16 != 0) throw new Error("invalid ciphertext size (must be multiple of 16 bytes)");

      for (var t = i(e.length), n = i(16), r = 0; r < e.length; r += 16) {
        s(e, n, 0, r, r + 16), n = this._aes.decrypt(n);

        for (var a = 0; a < 16; a++) t[r + a] = n[a] ^ this._lastCipherblock[a];

        s(e, this._lastCipherblock, 0, r, r + 16);
      }

      return t;
    };

    var P = function (e, t, n) {
      if (!(this instanceof P)) throw Error("AES must be instanitated with `new`");

      if (this.description = "Cipher Feedback", this.name = "cfb", t) {
        if (16 != t.length) throw new Error("invalid initialation vector size (must be 16 size)");
      } else t = i(16);

      n || (n = 1), this.segmentSize = n, this._shiftRegister = o(t, !0), this._aes = new C(e);
    };

    P.prototype.encrypt = function (e) {
      if (e.length % this.segmentSize != 0) throw new Error("invalid plaintext size (must be segmentSize bytes)");

      for (var t, n = o(e, !0), r = 0; r < n.length; r += this.segmentSize) {
        t = this._aes.encrypt(this._shiftRegister);

        for (var i = 0; i < this.segmentSize; i++) n[r + i] ^= t[i];

        s(this._shiftRegister, this._shiftRegister, 0, this.segmentSize), s(n, this._shiftRegister, 16 - this.segmentSize, r, r + this.segmentSize);
      }

      return n;
    }, P.prototype.decrypt = function (e) {
      if (e.length % this.segmentSize != 0) throw new Error("invalid ciphertext size (must be segmentSize bytes)");

      for (var t, n = o(e, !0), r = 0; r < n.length; r += this.segmentSize) {
        t = this._aes.encrypt(this._shiftRegister);

        for (var i = 0; i < this.segmentSize; i++) n[r + i] ^= t[i];

        s(this._shiftRegister, this._shiftRegister, 0, this.segmentSize), s(e, this._shiftRegister, 16 - this.segmentSize, r, r + this.segmentSize);
      }

      return n;
    };

    var O = function (e, t) {
      if (!(this instanceof O)) throw Error("AES must be instanitated with `new`");

      if (this.description = "Output Feedback", this.name = "ofb", t) {
        if (16 != t.length) throw new Error("invalid initialation vector size (must be 16 bytes)");
      } else t = i(16);

      this._lastPrecipher = o(t, !0), this._lastPrecipherIndex = 16, this._aes = new C(e);
    };

    O.prototype.encrypt = function (e) {
      for (var t = o(e, !0), n = 0; n < t.length; n++) 16 === this._lastPrecipherIndex && (this._lastPrecipher = this._aes.encrypt(this._lastPrecipher), this._lastPrecipherIndex = 0), t[n] ^= this._lastPrecipher[this._lastPrecipherIndex++];

      return t;
    }, O.prototype.decrypt = O.prototype.encrypt;

    var N = function (e) {
      if (!(this instanceof N)) throw Error("Counter must be instanitated with `new`");
      0 === e || e || (e = 1), "number" == typeof e ? (this._counter = i(16), this.setValue(e)) : this.setBytes(e);
    };

    N.prototype.setValue = function (e) {
      if ("number" != typeof e || parseInt(e) != e) throw new Error("invalid counter value (must be an integer)");
      if (e > Number.MAX_SAFE_INTEGER) throw new Error("integer value out of safe range");

      for (var t = 15; t >= 0; --t) this._counter[t] = e % 256, e = parseInt(e / 256);
    }, N.prototype.setBytes = function (e) {
      if (16 != (e = o(e, !0)).length) throw new Error("invalid counter bytes size (must be 16 bytes)");
      this._counter = e;
    }, N.prototype.increment = function () {
      for (var e = 15; e >= 0; e--) {
        if (255 !== this._counter[e]) {
          this._counter[e]++;
          break;
        }

        this._counter[e] = 0;
      }
    };

    var B = function (e, t) {
      if (!(this instanceof B)) throw Error("AES must be instanitated with `new`");
      this.description = "Counter", this.name = "ctr", t instanceof N || (t = new N(t)), this._counter = t, this._remainingCounter = null, this._remainingCounterIndex = 16, this._aes = new C(e);
    };

    B.prototype.encrypt = function (e) {
      for (var t = o(e, !0), n = 0; n < t.length; n++) 16 === this._remainingCounterIndex && (this._remainingCounter = this._aes.encrypt(this._counter._counter), this._remainingCounterIndex = 0, this._counter.increment()), t[n] ^= this._remainingCounter[this._remainingCounterIndex++];

      return t;
    }, B.prototype.decrypt = B.prototype.encrypt;
    var I = {
      AES: C,
      Counter: N,
      ModeOfOperation: {
        ecb: A,
        cbc: x,
        cfb: P,
        ofb: O,
        ctr: B
      },
      utils: {
        hex: u,
        utf8: c
      },
      padding: {
        pkcs7: {
          pad: function (e) {
            var t = 16 - (e = o(e, !0)).length % 16,
                n = i(e.length + t);
            s(e, n);

            for (var r = e.length; r < n.length; r++) n[r] = t;

            return n;
          },
          strip: function (e) {
            if ((e = o(e, !0)).length < 16) throw new Error("PKCS#7 invalid length");
            var t = e[e.length - 1];
            if (t > 16) throw new Error("PKCS#7 padding byte out of range");

            for (var n = e.length - t, r = 0; r < t; r++) if (e[n + r] !== t) throw new Error("PKCS#7 invalid padding byte");

            var a = i(n);
            return s(e, a, 0, 0, n), a;
          }
        }
      },
      _arrayTest: {
        coerceArray: o,
        createArray: i,
        copyArray: s
      }
    };
    e.exports = I;
  }();
}),
    pe = (0, _index2d8aeb.d)(function (e) {
  var t = _subscriptionManagerB429be9d.l.Buffer,
      r = _index2d8aeb.f.crypto || _index2d8aeb.f.msCrypto;
  r && r.getRandomValues ? e.exports = function (e, n) {
    if (e > 4294967295) throw new RangeError("requested too many random bytes");
    var o = t.allocUnsafe(e);
    if (e > 0) if (e > 65536) for (var i = 0; i < e; i += 65536) r.getRandomValues(o.slice(i, i + 65536));else r.getRandomValues(o);
    if ("function" == typeof n) return process.nextTick(function () {
      n(null, o);
    });
    return o;
  } : e.exports = function () {
    throw new Error("Secure random number generation is not supported by this browser.\nUse Chrome, Firefox or Internet Explorer 11");
  };
}),
    _e = (0, _index2d8aeb.d)(function (e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  let n = [[16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16], [15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15], [14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14], [13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13], [12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12], [11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11], [10, 10, 10, 10, 10, 10, 10, 10, 10, 10], [9, 9, 9, 9, 9, 9, 9, 9, 9], [8, 8, 8, 8, 8, 8, 8, 8], [7, 7, 7, 7, 7, 7, 7], [6, 6, 6, 6, 6, 6], [5, 5, 5, 5, 5], [4, 4, 4, 4], [3, 3, 3], [2, 2], [1]];
  t.pad = function (e) {
    const t = n[e.byteLength % 16 || 0],
          r = new Uint8Array(e.byteLength + t.length);
    return r.set(e), r.set(t, e.byteLength), r;
  }, t.unpad = function (e) {
    return e.subarray(0, e.byteLength - e[e.byteLength - 1]);
  };
});

(0, _index2d8aeb.e)(_e);
_e.pad, _e.unpad;
var ge = (0, _index2d8aeb.d)(function (e, t) {
  var r = _index2d8aeb.f && _index2d8aeb.f.__importDefault || function (e) {
    return e && e.__esModule ? e : {
      default: e
    };
  },
      o = _index2d8aeb.f && _index2d8aeb.f.__importStar || function (e) {
    if (e && e.__esModule) return e;
    var t = {};
    if (null != e) for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
    return t.default = e, t;
  };

  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  const i = r(de),
        s = r(pe),
        a = o(_subscriptionManagerB429be9d.n),
        c = o(_e);
  t.fallbackRandomBytes = function (e) {
    return s.default(e);
  }, t.fallbackAesEncrypt = function (e, t, n) {
    const r = new i.default.ModeOfOperation.cbc(t, e),
          o = fe.arrayToBuffer(c.pad(n)),
          s = r.encrypt(o);
    return Buffer.from(s);
  }, t.fallbackAesDecrypt = function (e, t, n) {
    const r = new i.default.ModeOfOperation.cbc(t, e).decrypt(n),
          o = Buffer.from(r);
    return fe.arrayToBuffer(c.unpad(o));
  }, t.fallbackHmacSha256Sign = function (e, t) {
    const n = a.hmac(a[ce.SHA256_NODE_ALGO], e).update(t).digest(ce.HEX_ENC);
    return fe.hexToBuffer(n);
  }, t.fallbackHmacSha512Sign = function (e, t) {
    const n = a.hmac(a[ce.SHA512_NODE_ALGO], e).update(t).digest(ce.HEX_ENC);
    return fe.hexToBuffer(n);
  }, t.fallbackSha256 = function (e) {
    const t = a.sha256().update(e).digest(ce.HEX_ENC);
    return fe.hexToBuffer(t);
  }, t.fallbackSha512 = function (e) {
    const t = a.sha512().update(e).digest(ce.HEX_ENC);
    return fe.hexToBuffer(t);
  }, t.fallbackRipemd160 = function (e) {
    const t = a.ripemd160().update(e).digest(ce.HEX_ENC);
    return fe.hexToBuffer(t);
  };
});
(0, _index2d8aeb.e)(ge);
ge.fallbackRandomBytes, ge.fallbackAesEncrypt, ge.fallbackAesDecrypt, ge.fallbackHmacSha256Sign, ge.fallbackHmacSha512Sign, ge.fallbackSha256, ge.fallbackSha512, ge.fallbackRipemd160;
var ye = (0, _index2d8aeb.d)(function (e, t) {
  var r = _index2d8aeb.f && _index2d8aeb.f.__awaiter || function (e, t, n, r) {
    return new (n || (n = Promise))(function (o, i) {
      function s(e) {
        try {
          c(r.next(e));
        } catch (e) {
          i(e);
        }
      }

      function a(e) {
        try {
          c(r.throw(e));
        } catch (e) {
          i(e);
        }
      }

      function c(e) {
        var t;
        e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n(function (e) {
          e(t);
        })).then(s, a);
      }

      c((r = r.apply(e, t || [])).next());
    });
  };

  function o() {
    var e, t;
    return (null === (e = _index2d8aeb.f) || void 0 === e ? void 0 : e.crypto) || (null === (t = _index2d8aeb.f) || void 0 === t ? void 0 : t.msCrypto) || {};
  }

  function i() {
    const e = o();
    return e.subtle || e.webkitSubtle;
  }

  function s(e, t = ce.AES_BROWSER_ALGO) {
    return r(this, void 0, void 0, function* () {
      const n = i(),
            r = t === ce.AES_BROWSER_ALGO ? {
        length: ce.AES_LENGTH,
        name: ce.AES_BROWSER_ALGO
      } : {
        hash: {
          name: ce.HMAC_BROWSER_ALGO
        },
        name: ce.HMAC_BROWSER
      },
            o = t === ce.AES_BROWSER_ALGO ? [ce.ENCRYPT_OP, ce.DECRYPT_OP] : [ce.SIGN_OP, ce.VERIFY_OP];
      return yield n.importKey("raw", e, r, !0, o);
    });
  }

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.getBrowerCrypto = o, t.getSubtleCrypto = i, t.browserRandomBytes = function (e) {
    const t = o();
    return void 0 !== t.getRandomValues ? fe.arrayToBuffer(t.getRandomValues(new Uint8Array(e))) : ge.fallbackRandomBytes(e);
  }, t.browserImportKey = s, t.browserAesEncrypt = function (e, t, n) {
    return r(this, void 0, void 0, function* () {
      const r = i(),
            o = yield s(t, ce.AES_BROWSER_ALGO),
            a = yield r.encrypt({
        iv: e,
        name: ce.AES_BROWSER_ALGO
      }, o, n);
      return Buffer.from(a);
    });
  }, t.browserAesDecrypt = function (e, t, n) {
    return r(this, void 0, void 0, function* () {
      const r = i(),
            o = yield s(t, ce.AES_BROWSER_ALGO),
            a = yield r.decrypt({
        iv: e,
        name: ce.AES_BROWSER_ALGO
      }, o, n);
      return Buffer.from(a);
    });
  }, t.browserHmacSha256Sign = function (e, t) {
    return r(this, void 0, void 0, function* () {
      const n = i(),
            r = yield s(e, ce.HMAC_BROWSER),
            o = yield n.sign({
        length: ce.HMAC_LENGTH,
        name: ce.HMAC_BROWSER
      }, r, t);
      return Buffer.from(o);
    });
  }, t.browserHmacSha512Sign = function (e, t) {
    return r(this, void 0, void 0, function* () {
      const n = i(),
            r = yield s(e, ce.HMAC_BROWSER),
            o = yield n.sign({
        length: ce.LENGTH_512,
        name: ce.HMAC_BROWSER
      }, r, t);
      return Buffer.from(o);
    });
  }, t.browserSha256 = function (e) {
    return r(this, void 0, void 0, function* () {
      const t = i(),
            n = yield t.digest({
        name: ce.SHA256_BROWSER_ALGO
      }, e);
      return Buffer.from(n);
    });
  }, t.browserSha512 = function (e) {
    return r(this, void 0, void 0, function* () {
      const t = i(),
            n = yield t.digest({
        name: ce.SHA512_BROWSER_ALGO
      }, e);
      return Buffer.from(n);
    });
  };
});
(0, _index2d8aeb.e)(ye);
ye.getBrowerCrypto, ye.getSubtleCrypto, ye.browserRandomBytes, ye.browserImportKey, ye.browserAesEncrypt, ye.browserAesDecrypt, ye.browserHmacSha256Sign, ye.browserHmacSha512Sign, ye.browserSha256, ye.browserSha512;
var ve = (0, _index2d8aeb.d)(function (e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.isBrowser = function () {
    return !!ye.getBrowerCrypto() && !!ye.getSubtleCrypto();
  }, t.isNode = function () {
    return "undefined" != typeof process && void 0 !== process.versions && void 0 !== process.versions.node;
  };
});
(0, _index2d8aeb.e)(ve);
ve.isBrowser, ve.isNode;
var me = (0, _index2d8aeb.d)(function (e, t) {
  var r = _index2d8aeb.f && _index2d8aeb.f.__importDefault || function (e) {
    return e && e.__esModule ? e : {
      default: e
    };
  };

  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  const o = r(_crypto_commonjsExternal8b32930c.r);
  t.nodeRandomBytes = function (e) {
    return o.default.randomBytes(e);
  }, t.nodeAesEncrypt = function (e, t, n) {
    const r = o.default.createCipheriv(ce.AES_NODE_ALGO, t, e);
    return fe.concatBuffers(r.update(n), r.final());
  }, t.nodeAesDecrypt = function (e, t, n) {
    const r = o.default.createDecipheriv(ce.AES_NODE_ALGO, t, e);
    return fe.concatBuffers(r.update(n), r.final());
  }, t.nodeHmacSha256Sign = function (e, t) {
    return o.default.createHmac(ce.HMAC_NODE_ALGO, Buffer.from(e)).update(t).digest();
  }, t.nodeHmacSha512Sign = function (e, t) {
    return o.default.createHmac(ce.SHA512_NODE_ALGO, Buffer.from(e)).update(t).digest();
  }, t.nodeSha256 = function (e) {
    return o.default.createHash(ce.SHA256_NODE_ALGO).update(e).digest();
  }, t.nodeSha512 = function (e) {
    return o.default.createHash(ce.SHA512_NODE_ALGO).update(e).digest();
  }, t.nodeRipemd160 = function (e) {
    return o.default.createHash(ce.RIPEMD160_NODE_ALGO).update(e).digest();
  };
});
(0, _index2d8aeb.e)(me);
me.nodeRandomBytes, me.nodeAesEncrypt, me.nodeAesDecrypt, me.nodeHmacSha256Sign, me.nodeHmacSha512Sign, me.nodeSha256, me.nodeSha512, me.nodeRipemd160;
var be = (0, _index2d8aeb.d)(function (e, t) {
  var r = _index2d8aeb.f && _index2d8aeb.f.__awaiter || function (e, t, n, r) {
    return new (n || (n = Promise))(function (o, i) {
      function s(e) {
        try {
          c(r.next(e));
        } catch (e) {
          i(e);
        }
      }

      function a(e) {
        try {
          c(r.throw(e));
        } catch (e) {
          i(e);
        }
      }

      function c(e) {
        var t;
        e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n(function (e) {
          e(t);
        })).then(s, a);
      }

      c((r = r.apply(e, t || [])).next());
    });
  };

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.aesCbcEncrypt = function (e, t, n) {
    return r(this, void 0, void 0, function* () {
      let r;
      return r = ve.isBrowser() ? yield ye.browserAesEncrypt(e, t, n) : ve.isNode() ? me.nodeAesEncrypt(e, t, n) : ge.fallbackAesEncrypt(e, t, n), r;
    });
  }, t.aesCbcDecrypt = function (e, t, n) {
    return r(this, void 0, void 0, function* () {
      let r;
      return r = ve.isBrowser() ? yield ye.browserAesDecrypt(e, t, n) : ve.isNode() ? me.nodeAesDecrypt(e, t, n) : ge.fallbackAesDecrypt(e, t, n), r;
    });
  }, t.aesCbcEncryptSync = function (e, t, n) {
    let r;
    return r = ve.isNode() ? me.nodeAesEncrypt(e, t, n) : ge.fallbackAesEncrypt(e, t, n), r;
  }, t.aesCbcDecryptSync = function (e, t, n) {
    let r;
    return r = ve.isNode() ? me.nodeAesDecrypt(e, t, n) : ge.fallbackAesDecrypt(e, t, n), r;
  };
});
(0, _index2d8aeb.e)(be);
be.aesCbcEncrypt, be.aesCbcDecrypt, be.aesCbcEncryptSync, be.aesCbcDecryptSync;
var Ee = (0, _index2d8aeb.d)(function (e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.randomBytes = function (e) {
    if (!fe.isValidKeyLength(e)) throw new Error(`randomBytes - invalid key length: ${e}`);
    let t;
    return t = ve.isBrowser() ? ye.browserRandomBytes(e) : ve.isNode() ? me.nodeRandomBytes(e) : ge.fallbackRandomBytes(e), t;
  };
});
(0, _index2d8aeb.e)(Ee);
Ee.randomBytes;
var we = (0, _index2d8aeb.d)(function (e, t) {
  var r = _index2d8aeb.f && _index2d8aeb.f.__importStar || function (e) {
    if (e && e.__esModule) return e;
    var t = {};
    if (null != e) for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
    return t.default = e, t;
  };

  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  const o = r(_subscriptionManagerB429be9d.o);

  function i(e) {
    return t.secp256k1.privateKeyVerify(e);
  }

  function s(e) {
    return t.secp256k1.signatureExport(e);
  }

  function a(e) {
    return t.secp256k1.signatureImport(e);
  }

  t.secp256k1 = o, t.secp256k1Compress = function (e) {
    return e = fe.sanitizePublicKey(e), t.secp256k1.publicKeyConvert(e, !0);
  }, t.secp256k1Decompress = function (e) {
    return e = fe.sanitizePublicKey(e), t.secp256k1.publicKeyConvert(e, !1);
  }, t.secp256k1GeneratePrivate = function () {
    let e = Ee.randomBytes(ce.KEY_LENGTH);

    for (; !i(e);) e = Ee.randomBytes(ce.KEY_LENGTH);

    return e;
  }, t.secp256k1VerifyPrivateKey = i, t.secp256k1GetPublic = function (e) {
    return t.secp256k1.publicKeyCreate(e, !1);
  }, t.secp256k1GetPublicCompressed = function (e) {
    return t.secp256k1.publicKeyCreate(e, !0);
  }, t.secp256k1SignatureExport = s, t.secp256k1SignatureImport = a, t.secp256k1Sign = function (e, n, r = !1) {
    const {
      signature: o,
      recovery: i
    } = t.secp256k1.sign(e, n);
    return r ? fe.concatBuffers(o, fe.exportRecoveryParam(i)) : s(o);
  }, t.secp256k1Recover = function (e, n, r = !1) {
    if (fe.isValidDERSignature(e)) throw new Error("Cannot recover from DER signatures");
    const {
      signature: o,
      recovery: i
    } = fe.sanitizeRSVSignature(e);
    return t.secp256k1.recover(n, o, i, r);
  }, t.secp256k1Verify = function (e, n, r) {
    return fe.isValidDERSignature(e) && (e = a(e)), e = fe.sanitizeRSVSignature(e).signature, t.secp256k1.verify(n, e, r);
  }, t.secp256k1Derive = function (e, n, r) {
    let o = t.secp256k1.ecdhUnsafe(e, n, r);
    return fe.trimLeft(o, ce.KEY_LENGTH);
  };
});
(0, _index2d8aeb.e)(we);
we.secp256k1, we.secp256k1Compress, we.secp256k1Decompress, we.secp256k1GeneratePrivate, we.secp256k1VerifyPrivateKey, we.secp256k1GetPublic, we.secp256k1GetPublicCompressed, we.secp256k1SignatureExport, we.secp256k1SignatureImport, we.secp256k1Sign, we.secp256k1Recover, we.secp256k1Verify, we.secp256k1Derive;
var Se = (0, _index2d8aeb.d)(function (e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  const n = new _subscriptionManagerB429be9d.q.ec("secp256k1");

  function r(e) {
    return fe.isValidPrivateKey(e);
  }

  function o(e) {
    return _subscriptionManagerB429be9d.t.Signature({
      r: e.slice(0, 32),
      s: e.slice(32, 64),
      recoveryParam: fe.importRecoveryParam(e.slice(64, 65))
    }).toDER();
  }

  t.ellipticCompress = function (e) {
    e = fe.sanitizePublicKey(e);
    const t = n.keyFromPublic(e).getPublic().encode(ce.HEX_ENC, !0);
    return fe.hexToBuffer(t);
  }, t.ellipticDecompress = function (e) {
    e = fe.sanitizePublicKey(e);
    const t = n.keyFromPublic(e).getPublic().encode(ce.HEX_ENC, !1);
    return fe.hexToBuffer(t);
  }, t.ellipticGeneratePrivate = function () {
    let e = Ee.randomBytes(ce.KEY_LENGTH);

    for (; !r(e);) e = Ee.randomBytes(ce.KEY_LENGTH);

    return e;
  }, t.ellipticVerifyPrivateKey = r, t.ellipticGetPublic = function (e) {
    const t = n.keyFromPrivate(e).getPublic(!1, ce.HEX_ENC);
    return fe.hexToBuffer(t);
  }, t.ellipticGetPublicCompressed = function (e) {
    const t = n.keyFromPrivate(e).getPublic(!0, ce.HEX_ENC);
    return fe.hexToBuffer(t);
  }, t.ellipticDerive = function (e, t) {
    const r = n.keyFromPrivate(t),
          o = n.keyFromPublic(e),
          i = r.derive(o.getPublic());
    return Buffer.from(i.toArray());
  }, t.ellipticSignatureExport = o, t.ellipticSign = function (e, t, r = !1) {
    const o = n.sign(e, t, {
      canonical: !0
    });
    return r ? fe.concatBuffers(fe.hexToBuffer(fe.sanitizeHex(o.r.toString(16))), fe.hexToBuffer(fe.sanitizeHex(o.s.toString(16))), fe.exportRecoveryParam(o.recoveryParam || 0)) : Buffer.from(o.toDER());
  }, t.ellipticRecover = function (e, t, r = !1) {
    if (fe.isValidDERSignature(e)) throw new Error("Cannot recover from DER signatures");
    const o = fe.splitSignature(e),
          i = fe.importRecoveryParam(o.v),
          s = n.recoverPubKey(t, {
      r: fe.removeHexLeadingZeros(fe.bufferToHex(o.r)),
      s: fe.removeHexLeadingZeros(fe.bufferToHex(o.s)),
      recoveryParam: i
    }, i).encode(ce.HEX_ENC, r);
    return fe.hexToBuffer(s);
  }, t.ellipticVerify = function (e, t, r) {
    return fe.isValidDERSignature || (e = o(e)), n.verify(t, e, r);
  };
});
(0, _index2d8aeb.e)(Se);
Se.ellipticCompress, Se.ellipticDecompress, Se.ellipticGeneratePrivate, Se.ellipticVerifyPrivateKey, Se.ellipticGetPublic, Se.ellipticGetPublicCompressed, Se.ellipticDerive, Se.ellipticSignatureExport, Se.ellipticSign, Se.ellipticRecover, Se.ellipticVerify;
var Re = (0, _index2d8aeb.d)(function (e, t) {
  function n() {
    return ve.isNode() ? we.secp256k1GeneratePrivate() : Se.ellipticGeneratePrivate();
  }

  function r(e) {
    fe.assert(e.length === ce.KEY_LENGTH, ce.ERROR_BAD_PRIVATE_KEY), fe.assert(fe.isValidPrivateKey(e), ce.ERROR_BAD_PRIVATE_KEY);
  }

  function o(e) {
    fe.assert(e.length === ce.PREFIXED_DECOMPRESSED_LENGTH || e.length === ce.PREFIXED_KEY_LENGTH, ce.ERROR_BAD_PUBLIC_KEY), e.length === ce.PREFIXED_DECOMPRESSED_LENGTH && fe.assert(4 === e[0], ce.ERROR_BAD_PUBLIC_KEY), e.length === ce.PREFIXED_KEY_LENGTH && fe.assert(2 === e[0] || 3 === e[0], ce.ERROR_BAD_PUBLIC_KEY);
  }

  function i(e) {
    fe.assert(e.length > 0, ce.ERROR_EMPTY_MESSAGE), fe.assert(e.length <= ce.MAX_MSG_LENGTH, ce.ERROR_MESSAGE_TOO_LONG);
  }

  function s(e) {
    return r(e), ve.isNode() ? we.secp256k1GetPublic(e) : Se.ellipticGetPublic(e);
  }

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.generatePrivate = n, t.checkPrivateKey = r, t.checkPublicKey = o, t.checkMessage = i, t.compress = function (e) {
    return fe.isCompressed(e) ? e : ve.isNode() ? we.secp256k1Compress(e) : Se.ellipticCompress(e);
  }, t.decompress = function (e) {
    return fe.isDecompressed(e) ? e : ve.isNode() ? we.secp256k1Decompress(e) : Se.ellipticDecompress(e);
  }, t.getPublic = s, t.getPublicCompressed = function (e) {
    return r(e), ve.isNode() ? we.secp256k1GetPublicCompressed(e) : Se.ellipticGetPublicCompressed(e);
  }, t.generateKeyPair = function () {
    const e = n();
    return {
      privateKey: e,
      publicKey: s(e)
    };
  }, t.signatureExport = function (e) {
    return ve.isNode() ? we.secp256k1SignatureExport(e) : Se.ellipticSignatureExport(e);
  }, t.sign = function (e, t, n = !1) {
    return r(e), i(t), ve.isNode() ? we.secp256k1Sign(t, e, n) : Se.ellipticSign(t, e, n);
  }, t.recover = function (e, t, n = !1) {
    return i(e), ve.isNode() ? we.secp256k1Recover(t, e, n) : Se.ellipticRecover(t, e, n);
  }, t.verify = function (e, t, n) {
    if (o(e), i(t), ve.isNode() ? we.secp256k1Verify(n, t, e) : Se.ellipticVerify(n, t, e)) return null;
    throw new Error("Bad signature");
  };
});
(0, _index2d8aeb.e)(Re);
Re.generatePrivate, Re.checkPrivateKey, Re.checkPublicKey, Re.checkMessage, Re.compress, Re.decompress, Re.getPublic, Re.getPublicCompressed, Re.generateKeyPair, Re.signatureExport, Re.sign, Re.recover, Re.verify;
var ke = (0, _index2d8aeb.d)(function (e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.derive = function (e, t) {
    return Re.checkPrivateKey(e), Re.checkPublicKey(t), ve.isNode() ? we.secp256k1Derive(t, e) : Se.ellipticDerive(t, e);
  };
});
(0, _index2d8aeb.e)(ke);
ke.derive;
var Te = (0, _index2d8aeb.d)(function (e, t) {
  var r = _index2d8aeb.f && _index2d8aeb.f.__awaiter || function (e, t, n, r) {
    return new (n || (n = Promise))(function (o, i) {
      function s(e) {
        try {
          c(r.next(e));
        } catch (e) {
          i(e);
        }
      }

      function a(e) {
        try {
          c(r.throw(e));
        } catch (e) {
          i(e);
        }
      }

      function c(e) {
        var t;
        e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n(function (e) {
          e(t);
        })).then(s, a);
      }

      c((r = r.apply(e, t || [])).next());
    });
  };

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.hmacSha256Sign = function (e, t) {
    return r(this, void 0, void 0, function* () {
      let n;
      return n = ve.isBrowser() ? yield ye.browserHmacSha256Sign(e, t) : ve.isNode() ? me.nodeHmacSha256Sign(e, t) : ge.fallbackHmacSha256Sign(e, t), n;
    });
  }, t.hmacSha256Verify = function (e, t, n) {
    return r(this, void 0, void 0, function* () {
      let r;

      if (ve.isBrowser()) {
        const o = yield ye.browserHmacSha256Sign(e, t);
        r = fe.equalConstTime(o, n);
      } else if (ve.isNode()) {
        const o = me.nodeHmacSha256Sign(e, t);
        r = fe.equalConstTime(o, n);
      } else {
        const o = ge.fallbackHmacSha256Sign(e, t);
        r = fe.equalConstTime(o, n);
      }

      return r;
    });
  }, t.hmacSha512Sign = function (e, t) {
    return r(this, void 0, void 0, function* () {
      let n;
      return n = ve.isBrowser() ? yield ye.browserHmacSha512Sign(e, t) : ve.isNode() ? me.nodeHmacSha512Sign(e, t) : ge.fallbackHmacSha512Sign(e, t), n;
    });
  }, t.hmacSha512Verify = function (e, t, n) {
    return r(this, void 0, void 0, function* () {
      let r;

      if (ve.isNode()) {
        const o = me.nodeHmacSha512Sign(e, t);
        r = fe.equalConstTime(o, n);
      } else {
        const o = ge.fallbackHmacSha512Sign(e, t);
        r = fe.equalConstTime(o, n);
      }

      return r;
    });
  }, t.hmacSha256SignSync = function (e, t) {
    let n;
    return n = ve.isNode() ? me.nodeHmacSha256Sign(e, t) : ge.fallbackHmacSha256Sign(e, t), n;
  }, t.hmacSha256VerifySync = function (e, t, n) {
    let r;

    if (ve.isNode()) {
      const o = me.nodeHmacSha256Sign(e, t);
      r = fe.equalConstTime(o, n);
    } else {
      const o = ge.fallbackHmacSha256Sign(e, t);
      r = fe.equalConstTime(o, n);
    }

    return r;
  }, t.hmacSha512SignSync = function (e, t) {
    let n;
    return n = ve.isNode() ? me.nodeHmacSha512Sign(e, t) : ge.fallbackHmacSha512Sign(e, t), n;
  }, t.hmacSha512VerifySync = function (e, t, n) {
    let r;

    if (ve.isNode()) {
      const o = me.nodeHmacSha512Sign(e, t);
      r = fe.equalConstTime(o, n);
    } else {
      const o = ge.fallbackHmacSha512Sign(e, t);
      r = fe.equalConstTime(o, n);
    }

    return r;
  };
});
(0, _index2d8aeb.e)(Te);
Te.hmacSha256Sign, Te.hmacSha256Verify, Te.hmacSha512Sign, Te.hmacSha512Verify, Te.hmacSha256SignSync, Te.hmacSha256VerifySync, Te.hmacSha512SignSync, Te.hmacSha512VerifySync;
var Ce = (0, _index2d8aeb.d)(function (e, t) {
  var r = _index2d8aeb.f && _index2d8aeb.f.__awaiter || function (e, t, n, r) {
    return new (n || (n = Promise))(function (o, i) {
      function s(e) {
        try {
          c(r.next(e));
        } catch (e) {
          i(e);
        }
      }

      function a(e) {
        try {
          c(r.throw(e));
        } catch (e) {
          i(e);
        }
      }

      function c(e) {
        var t;
        e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n(function (e) {
          e(t);
        })).then(s, a);
      }

      c((r = r.apply(e, t || [])).next());
    });
  };

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.sha256 = function (e) {
    return r(this, void 0, void 0, function* () {
      let t = ce.EMPTY_BUFFER;
      return t = ve.isBrowser() ? yield ye.browserSha256(e) : ve.isNode() ? me.nodeSha256(e) : ge.fallbackSha256(e), t;
    });
  }, t.sha512 = function (e) {
    return r(this, void 0, void 0, function* () {
      let t = ce.EMPTY_BUFFER;
      return t = ve.isBrowser() ? yield ye.browserSha512(e) : ve.isNode() ? me.nodeSha512(e) : ge.fallbackSha512(e), t;
    });
  }, t.ripemd160 = function (e) {
    return r(this, void 0, void 0, function* () {
      let t = ce.EMPTY_BUFFER;
      return t = ve.isNode() ? me.nodeRipemd160(e) : ge.fallbackRipemd160(e), t;
    });
  }, t.sha256Sync = function (e) {
    let t = ce.EMPTY_BUFFER;
    return t = ve.isNode() ? me.nodeSha256(e) : ge.fallbackSha256(e), t;
  }, t.sha512Sync = function (e) {
    let t = ce.EMPTY_BUFFER;
    return t = ve.isNode() ? me.nodeSha512(e) : ge.fallbackSha512(e), t;
  }, t.ripemd160Sync = function (e) {
    let t = ce.EMPTY_BUFFER;
    return t = ve.isNode() ? me.nodeRipemd160(e) : ge.fallbackRipemd160(e), t;
  };
});
(0, _index2d8aeb.e)(Ce);
Ce.sha256, Ce.sha512, Ce.ripemd160, Ce.sha256Sync, Ce.sha512Sync, Ce.ripemd160Sync;
var Ae = (0, _index2d8aeb.d)(function (e, t) {
  var r = _index2d8aeb.f && _index2d8aeb.f.__awaiter || function (e, t, n, r) {
    return new (n || (n = Promise))(function (o, i) {
      function s(e) {
        try {
          c(r.next(e));
        } catch (e) {
          i(e);
        }
      }

      function a(e) {
        try {
          c(r.throw(e));
        } catch (e) {
          i(e);
        }
      }

      function c(e) {
        var t;
        e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n(function (e) {
          e(t);
        })).then(s, a);
      }

      c((r = r.apply(e, t || [])).next());
    });
  };

  function o(e, t) {
    return t = Re.decompress(t), ke.derive(e, t);
  }

  function i(e) {
    return Buffer.from(e.slice(ce.LENGTH_0, ce.KEY_LENGTH));
  }

  function s(e) {
    return Buffer.from(e.slice(ce.KEY_LENGTH));
  }

  function a(e, t) {
    return r(this, void 0, void 0, function* () {
      const n = o(e, t),
            r = yield Ce.sha512(n);
      return {
        encryptionKey: i(r),
        macKey: s(r)
      };
    });
  }

  function c(e, t) {
    const n = o(e, t),
          r = Ce.sha512Sync(n);
    return {
      encryptionKey: i(r),
      macKey: s(r)
    };
  }

  function u(e) {
    var t, n;
    let r = (null === (t = e) || void 0 === t ? void 0 : t.ephemPrivateKey) || Ee.randomBytes(ce.KEY_LENGTH);

    for (; !fe.isValidPrivateKey(r);) r = (null === (n = e) || void 0 === n ? void 0 : n.ephemPrivateKey) || Ee.randomBytes(ce.KEY_LENGTH);

    return {
      ephemPrivateKey: r,
      ephemPublicKey: Re.getPublic(r)
    };
  }

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.encrypt = function (e, t, n) {
    var o;
    return r(this, void 0, void 0, function* () {
      const {
        ephemPrivateKey: r,
        ephemPublicKey: i
      } = u(n),
            {
        encryptionKey: s,
        macKey: c
      } = yield a(r, e),
            l = (null === (o = n) || void 0 === o ? void 0 : o.iv) || Ee.randomBytes(ce.IV_LENGTH),
            h = yield be.aesCbcEncrypt(l, s, t),
            f = fe.concatBuffers(l, i, h);
      return {
        iv: l,
        ephemPublicKey: i,
        ciphertext: h,
        mac: yield Te.hmacSha256Sign(c, f)
      };
    });
  }, t.decrypt = function (e, t) {
    return r(this, void 0, void 0, function* () {
      const {
        ephemPublicKey: n,
        iv: r,
        mac: o,
        ciphertext: i
      } = t,
            {
        encryptionKey: s,
        macKey: c
      } = yield a(e, n),
            u = fe.concatBuffers(r, n, i),
            l = yield Te.hmacSha256Verify(c, u, o);
      return fe.assert(l, ce.ERROR_BAD_MAC), yield be.aesCbcDecrypt(t.iv, s, t.ciphertext);
    });
  }, t.encryptSync = function (e, t, n) {
    var r;
    const {
      ephemPrivateKey: o,
      ephemPublicKey: i
    } = u(n),
          {
      encryptionKey: s,
      macKey: a
    } = c(o, e),
          l = (null === (r = n) || void 0 === r ? void 0 : r.iv) || Ee.randomBytes(ce.IV_LENGTH),
          h = be.aesCbcEncryptSync(l, s, t),
          f = fe.concatBuffers(l, i, h);
    return {
      iv: l,
      ephemPublicKey: i,
      ciphertext: h,
      mac: Te.hmacSha256SignSync(a, f)
    };
  }, t.decryptSync = function (e, t) {
    return r(this, void 0, void 0, function* () {
      const {
        ephemPublicKey: n,
        iv: r,
        mac: o,
        ciphertext: i
      } = t,
            {
        encryptionKey: s,
        macKey: a
      } = c(e, n),
            u = fe.concatBuffers(r, n, i),
            l = Te.hmacSha256VerifySync(a, u, o);
      return fe.assert(l, ce.ERROR_BAD_MAC), be.aesCbcDecryptSync(t.iv, s, t.ciphertext);
    });
  }, t.serialize = function (e) {
    const t = Re.compress(e.ephemPublicKey);
    return fe.concatBuffers(e.iv, t, e.mac, e.ciphertext);
  }, t.deserialize = function (e) {
    const t = ce.LENGTH_0,
          n = t + ce.IV_LENGTH,
          r = n + ce.PREFIXED_KEY_LENGTH,
          o = r + ce.MAC_LENGTH,
          i = e.length;
    return {
      iv: e.slice(t, n),
      ephemPublicKey: Re.decompress(e.slice(n, r)),
      mac: e.slice(r, o),
      ciphertext: e.slice(o, i)
    };
  };
});
(0, _index2d8aeb.e)(Ae);
Ae.encrypt, Ae.decrypt, Ae.encryptSync, Ae.decryptSync, Ae.serialize, Ae.deserialize;
var xe = (0, _index2d8aeb.d)(function (e) {
  /**
   * [js-sha3]{@link https://github.com/emn178/js-sha3}
   *
   * @version 0.8.0
   * @author Chen, Yi-Cyuan [emn178@gmail.com]
   * @copyright Chen, Yi-Cyuan 2015-2018
   * @license MIT
   */
  !function () {
    var t = "input is invalid type",
        r = "object" == typeof window,
        o = r ? window : {};
    o.JS_SHA3_NO_WINDOW && (r = !1);
    var i = !r && "object" == typeof self;
    !o.JS_SHA3_NO_NODE_JS && "object" == typeof process && process.versions && process.versions.node ? o = _index2d8aeb.f : i && (o = self);
    var s = !o.JS_SHA3_NO_COMMON_JS && e.exports,
        a = !o.JS_SHA3_NO_ARRAY_BUFFER && "undefined" != typeof ArrayBuffer,
        c = "0123456789abcdef".split(""),
        u = [4, 1024, 262144, 67108864],
        l = [0, 8, 16, 24],
        h = [1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907, 0, 2147483649, 0, 2147516545, 2147483648, 32777, 2147483648, 138, 0, 136, 0, 2147516425, 0, 2147483658, 0, 2147516555, 0, 139, 2147483648, 32905, 2147483648, 32771, 2147483648, 32770, 2147483648, 128, 2147483648, 32778, 0, 2147483658, 2147483648, 2147516545, 2147483648, 32896, 2147483648, 2147483649, 0, 2147516424, 2147483648],
        f = [224, 256, 384, 512],
        d = [128, 256],
        p = ["hex", "buffer", "arrayBuffer", "array", "digest"],
        _ = {
      128: 168,
      256: 136
    };
    !o.JS_SHA3_NO_NODE_JS && Array.isArray || (Array.isArray = function (e) {
      return "[object Array]" === Object.prototype.toString.call(e);
    }), !a || !o.JS_SHA3_NO_ARRAY_BUFFER_IS_VIEW && ArrayBuffer.isView || (ArrayBuffer.isView = function (e) {
      return "object" == typeof e && e.buffer && e.buffer.constructor === ArrayBuffer;
    });

    for (var g = function (e, t, n) {
      return function (r) {
        return new O(e, t, e).update(r)[n]();
      };
    }, y = function (e, t, n) {
      return function (r, o) {
        return new O(e, t, o).update(r)[n]();
      };
    }, v = function (e, t, n) {
      return function (t, r, o, i) {
        return S["cshake" + e].update(t, r, o, i)[n]();
      };
    }, m = function (e, t, n) {
      return function (t, r, o, i) {
        return S["kmac" + e].update(t, r, o, i)[n]();
      };
    }, b = function (e, t, n, r) {
      for (var o = 0; o < p.length; ++o) {
        var i = p[o];
        e[i] = t(n, r, i);
      }

      return e;
    }, E = function (e, t) {
      var n = g(e, t, "hex");
      return n.create = function () {
        return new O(e, t, e);
      }, n.update = function (e) {
        return n.create().update(e);
      }, b(n, g, e, t);
    }, w = [{
      name: "keccak",
      padding: [1, 256, 65536, 16777216],
      bits: f,
      createMethod: E
    }, {
      name: "sha3",
      padding: [6, 1536, 393216, 100663296],
      bits: f,
      createMethod: E
    }, {
      name: "shake",
      padding: [31, 7936, 2031616, 520093696],
      bits: d,
      createMethod: function (e, t) {
        var n = y(e, t, "hex");
        return n.create = function (n) {
          return new O(e, t, n);
        }, n.update = function (e, t) {
          return n.create(t).update(e);
        }, b(n, y, e, t);
      }
    }, {
      name: "cshake",
      padding: u,
      bits: d,
      createMethod: function (e, t) {
        var n = _[e],
            r = v(e, 0, "hex");
        return r.create = function (r, o, i) {
          return o || i ? new O(e, t, r).bytepad([o, i], n) : S["shake" + e].create(r);
        }, r.update = function (e, t, n, o) {
          return r.create(t, n, o).update(e);
        }, b(r, v, e, t);
      }
    }, {
      name: "kmac",
      padding: u,
      bits: d,
      createMethod: function (e, t) {
        var n = _[e],
            r = m(e, 0, "hex");
        return r.create = function (r, o, i) {
          return new N(e, t, o).bytepad(["KMAC", i], n).bytepad([r], n);
        }, r.update = function (e, t, n, o) {
          return r.create(e, n, o).update(t);
        }, b(r, m, e, t);
      }
    }], S = {}, R = [], k = 0; k < w.length; ++k) for (var T = w[k], C = T.bits, A = 0; A < C.length; ++A) {
      var x = T.name + "_" + C[A];

      if (R.push(x), S[x] = T.createMethod(C[A], T.padding), "sha3" !== T.name) {
        var P = T.name + C[A];
        R.push(P), S[P] = S[x];
      }
    }

    function O(e, t, n) {
      this.blocks = [], this.s = [], this.padding = t, this.outputBits = n, this.reset = !0, this.finalized = !1, this.block = 0, this.start = 0, this.blockCount = 1600 - (e << 1) >> 5, this.byteCount = this.blockCount << 2, this.outputBlocks = n >> 5, this.extraBytes = (31 & n) >> 3;

      for (var r = 0; r < 50; ++r) this.s[r] = 0;
    }

    function N(e, t, n) {
      O.call(this, e, t, n);
    }

    O.prototype.update = function (e) {
      if (this.finalized) throw new Error("finalize already called");
      var n,
          r = typeof e;

      if ("string" !== r) {
        if ("object" !== r) throw new Error(t);
        if (null === e) throw new Error(t);
        if (a && e.constructor === ArrayBuffer) e = new Uint8Array(e);else if (!(Array.isArray(e) || a && ArrayBuffer.isView(e))) throw new Error(t);
        n = !0;
      }

      for (var o, i, s = this.blocks, c = this.byteCount, u = e.length, h = this.blockCount, f = 0, d = this.s; f < u;) {
        if (this.reset) for (this.reset = !1, s[0] = this.block, o = 1; o < h + 1; ++o) s[o] = 0;
        if (n) for (o = this.start; f < u && o < c; ++f) s[o >> 2] |= e[f] << l[3 & o++];else for (o = this.start; f < u && o < c; ++f) (i = e.charCodeAt(f)) < 128 ? s[o >> 2] |= i << l[3 & o++] : i < 2048 ? (s[o >> 2] |= (192 | i >> 6) << l[3 & o++], s[o >> 2] |= (128 | 63 & i) << l[3 & o++]) : i < 55296 || i >= 57344 ? (s[o >> 2] |= (224 | i >> 12) << l[3 & o++], s[o >> 2] |= (128 | i >> 6 & 63) << l[3 & o++], s[o >> 2] |= (128 | 63 & i) << l[3 & o++]) : (i = 65536 + ((1023 & i) << 10 | 1023 & e.charCodeAt(++f)), s[o >> 2] |= (240 | i >> 18) << l[3 & o++], s[o >> 2] |= (128 | i >> 12 & 63) << l[3 & o++], s[o >> 2] |= (128 | i >> 6 & 63) << l[3 & o++], s[o >> 2] |= (128 | 63 & i) << l[3 & o++]);

        if (this.lastByteIndex = o, o >= c) {
          for (this.start = o - c, this.block = s[h], o = 0; o < h; ++o) d[o] ^= s[o];

          B(d), this.reset = !0;
        } else this.start = o;
      }

      return this;
    }, O.prototype.encode = function (e, t) {
      var n = 255 & e,
          r = 1,
          o = [n];

      for (n = 255 & (e >>= 8); n > 0;) o.unshift(n), n = 255 & (e >>= 8), ++r;

      return t ? o.push(r) : o.unshift(r), this.update(o), o.length;
    }, O.prototype.encodeString = function (e) {
      var n,
          r = typeof e;

      if ("string" !== r) {
        if ("object" !== r) throw new Error(t);
        if (null === e) throw new Error(t);
        if (a && e.constructor === ArrayBuffer) e = new Uint8Array(e);else if (!(Array.isArray(e) || a && ArrayBuffer.isView(e))) throw new Error(t);
        n = !0;
      }

      var o = 0,
          i = e.length;
      if (n) o = i;else for (var s = 0; s < e.length; ++s) {
        var c = e.charCodeAt(s);
        c < 128 ? o += 1 : c < 2048 ? o += 2 : c < 55296 || c >= 57344 ? o += 3 : (c = 65536 + ((1023 & c) << 10 | 1023 & e.charCodeAt(++s)), o += 4);
      }
      return o += this.encode(8 * o), this.update(e), o;
    }, O.prototype.bytepad = function (e, t) {
      for (var n = this.encode(t), r = 0; r < e.length; ++r) n += this.encodeString(e[r]);

      var o = t - n % t,
          i = [];
      return i.length = o, this.update(i), this;
    }, O.prototype.finalize = function () {
      if (!this.finalized) {
        this.finalized = !0;
        var e = this.blocks,
            t = this.lastByteIndex,
            n = this.blockCount,
            r = this.s;
        if (e[t >> 2] |= this.padding[3 & t], this.lastByteIndex === this.byteCount) for (e[0] = e[n], t = 1; t < n + 1; ++t) e[t] = 0;

        for (e[n - 1] |= 2147483648, t = 0; t < n; ++t) r[t] ^= e[t];

        B(r);
      }
    }, O.prototype.toString = O.prototype.hex = function () {
      this.finalize();

      for (var e, t = this.blockCount, n = this.s, r = this.outputBlocks, o = this.extraBytes, i = 0, s = 0, a = ""; s < r;) {
        for (i = 0; i < t && s < r; ++i, ++s) e = n[i], a += c[e >> 4 & 15] + c[15 & e] + c[e >> 12 & 15] + c[e >> 8 & 15] + c[e >> 20 & 15] + c[e >> 16 & 15] + c[e >> 28 & 15] + c[e >> 24 & 15];

        s % t == 0 && (B(n), i = 0);
      }

      return o && (e = n[i], a += c[e >> 4 & 15] + c[15 & e], o > 1 && (a += c[e >> 12 & 15] + c[e >> 8 & 15]), o > 2 && (a += c[e >> 20 & 15] + c[e >> 16 & 15])), a;
    }, O.prototype.arrayBuffer = function () {
      this.finalize();
      var e,
          t = this.blockCount,
          n = this.s,
          r = this.outputBlocks,
          o = this.extraBytes,
          i = 0,
          s = 0,
          a = this.outputBits >> 3;
      e = o ? new ArrayBuffer(r + 1 << 2) : new ArrayBuffer(a);

      for (var c = new Uint32Array(e); s < r;) {
        for (i = 0; i < t && s < r; ++i, ++s) c[s] = n[i];

        s % t == 0 && B(n);
      }

      return o && (c[i] = n[i], e = e.slice(0, a)), e;
    }, O.prototype.buffer = O.prototype.arrayBuffer, O.prototype.digest = O.prototype.array = function () {
      this.finalize();

      for (var e, t, n = this.blockCount, r = this.s, o = this.outputBlocks, i = this.extraBytes, s = 0, a = 0, c = []; a < o;) {
        for (s = 0; s < n && a < o; ++s, ++a) e = a << 2, t = r[s], c[e] = 255 & t, c[e + 1] = t >> 8 & 255, c[e + 2] = t >> 16 & 255, c[e + 3] = t >> 24 & 255;

        a % n == 0 && B(r);
      }

      return i && (e = a << 2, t = r[s], c[e] = 255 & t, i > 1 && (c[e + 1] = t >> 8 & 255), i > 2 && (c[e + 2] = t >> 16 & 255)), c;
    }, N.prototype = new O(), N.prototype.finalize = function () {
      return this.encode(this.outputBits, !0), O.prototype.finalize.call(this);
    };

    var B = function (e) {
      var t, n, r, o, i, s, a, c, u, l, f, d, p, _, g, y, v, m, b, E, w, S, R, k, T, C, A, x, P, O, N, B, I, M, H, L, D, U, G, q, j, K, F, W, z, V, Y, J, X, $, Q, Z, ee, te, ne, re, oe, ie, se, ae, ce, ue, le;

      for (r = 0; r < 48; r += 2) o = e[0] ^ e[10] ^ e[20] ^ e[30] ^ e[40], i = e[1] ^ e[11] ^ e[21] ^ e[31] ^ e[41], s = e[2] ^ e[12] ^ e[22] ^ e[32] ^ e[42], a = e[3] ^ e[13] ^ e[23] ^ e[33] ^ e[43], c = e[4] ^ e[14] ^ e[24] ^ e[34] ^ e[44], u = e[5] ^ e[15] ^ e[25] ^ e[35] ^ e[45], l = e[6] ^ e[16] ^ e[26] ^ e[36] ^ e[46], f = e[7] ^ e[17] ^ e[27] ^ e[37] ^ e[47], t = (d = e[8] ^ e[18] ^ e[28] ^ e[38] ^ e[48]) ^ (s << 1 | a >>> 31), n = (p = e[9] ^ e[19] ^ e[29] ^ e[39] ^ e[49]) ^ (a << 1 | s >>> 31), e[0] ^= t, e[1] ^= n, e[10] ^= t, e[11] ^= n, e[20] ^= t, e[21] ^= n, e[30] ^= t, e[31] ^= n, e[40] ^= t, e[41] ^= n, t = o ^ (c << 1 | u >>> 31), n = i ^ (u << 1 | c >>> 31), e[2] ^= t, e[3] ^= n, e[12] ^= t, e[13] ^= n, e[22] ^= t, e[23] ^= n, e[32] ^= t, e[33] ^= n, e[42] ^= t, e[43] ^= n, t = s ^ (l << 1 | f >>> 31), n = a ^ (f << 1 | l >>> 31), e[4] ^= t, e[5] ^= n, e[14] ^= t, e[15] ^= n, e[24] ^= t, e[25] ^= n, e[34] ^= t, e[35] ^= n, e[44] ^= t, e[45] ^= n, t = c ^ (d << 1 | p >>> 31), n = u ^ (p << 1 | d >>> 31), e[6] ^= t, e[7] ^= n, e[16] ^= t, e[17] ^= n, e[26] ^= t, e[27] ^= n, e[36] ^= t, e[37] ^= n, e[46] ^= t, e[47] ^= n, t = l ^ (o << 1 | i >>> 31), n = f ^ (i << 1 | o >>> 31), e[8] ^= t, e[9] ^= n, e[18] ^= t, e[19] ^= n, e[28] ^= t, e[29] ^= n, e[38] ^= t, e[39] ^= n, e[48] ^= t, e[49] ^= n, _ = e[0], g = e[1], V = e[11] << 4 | e[10] >>> 28, Y = e[10] << 4 | e[11] >>> 28, x = e[20] << 3 | e[21] >>> 29, P = e[21] << 3 | e[20] >>> 29, ae = e[31] << 9 | e[30] >>> 23, ce = e[30] << 9 | e[31] >>> 23, K = e[40] << 18 | e[41] >>> 14, F = e[41] << 18 | e[40] >>> 14, M = e[2] << 1 | e[3] >>> 31, H = e[3] << 1 | e[2] >>> 31, y = e[13] << 12 | e[12] >>> 20, v = e[12] << 12 | e[13] >>> 20, J = e[22] << 10 | e[23] >>> 22, X = e[23] << 10 | e[22] >>> 22, O = e[33] << 13 | e[32] >>> 19, N = e[32] << 13 | e[33] >>> 19, ue = e[42] << 2 | e[43] >>> 30, le = e[43] << 2 | e[42] >>> 30, te = e[5] << 30 | e[4] >>> 2, ne = e[4] << 30 | e[5] >>> 2, L = e[14] << 6 | e[15] >>> 26, D = e[15] << 6 | e[14] >>> 26, m = e[25] << 11 | e[24] >>> 21, b = e[24] << 11 | e[25] >>> 21, $ = e[34] << 15 | e[35] >>> 17, Q = e[35] << 15 | e[34] >>> 17, B = e[45] << 29 | e[44] >>> 3, I = e[44] << 29 | e[45] >>> 3, k = e[6] << 28 | e[7] >>> 4, T = e[7] << 28 | e[6] >>> 4, re = e[17] << 23 | e[16] >>> 9, oe = e[16] << 23 | e[17] >>> 9, U = e[26] << 25 | e[27] >>> 7, G = e[27] << 25 | e[26] >>> 7, E = e[36] << 21 | e[37] >>> 11, w = e[37] << 21 | e[36] >>> 11, Z = e[47] << 24 | e[46] >>> 8, ee = e[46] << 24 | e[47] >>> 8, W = e[8] << 27 | e[9] >>> 5, z = e[9] << 27 | e[8] >>> 5, C = e[18] << 20 | e[19] >>> 12, A = e[19] << 20 | e[18] >>> 12, ie = e[29] << 7 | e[28] >>> 25, se = e[28] << 7 | e[29] >>> 25, q = e[38] << 8 | e[39] >>> 24, j = e[39] << 8 | e[38] >>> 24, S = e[48] << 14 | e[49] >>> 18, R = e[49] << 14 | e[48] >>> 18, e[0] = _ ^ ~y & m, e[1] = g ^ ~v & b, e[10] = k ^ ~C & x, e[11] = T ^ ~A & P, e[20] = M ^ ~L & U, e[21] = H ^ ~D & G, e[30] = W ^ ~V & J, e[31] = z ^ ~Y & X, e[40] = te ^ ~re & ie, e[41] = ne ^ ~oe & se, e[2] = y ^ ~m & E, e[3] = v ^ ~b & w, e[12] = C ^ ~x & O, e[13] = A ^ ~P & N, e[22] = L ^ ~U & q, e[23] = D ^ ~G & j, e[32] = V ^ ~J & $, e[33] = Y ^ ~X & Q, e[42] = re ^ ~ie & ae, e[43] = oe ^ ~se & ce, e[4] = m ^ ~E & S, e[5] = b ^ ~w & R, e[14] = x ^ ~O & B, e[15] = P ^ ~N & I, e[24] = U ^ ~q & K, e[25] = G ^ ~j & F, e[34] = J ^ ~$ & Z, e[35] = X ^ ~Q & ee, e[44] = ie ^ ~ae & ue, e[45] = se ^ ~ce & le, e[6] = E ^ ~S & _, e[7] = w ^ ~R & g, e[16] = O ^ ~B & k, e[17] = N ^ ~I & T, e[26] = q ^ ~K & M, e[27] = j ^ ~F & H, e[36] = $ ^ ~Z & W, e[37] = Q ^ ~ee & z, e[46] = ae ^ ~ue & te, e[47] = ce ^ ~le & ne, e[8] = S ^ ~_ & y, e[9] = R ^ ~g & v, e[18] = B ^ ~k & C, e[19] = I ^ ~T & A, e[28] = K ^ ~M & L, e[29] = F ^ ~H & D, e[38] = Z ^ ~W & V, e[39] = ee ^ ~z & Y, e[48] = ue ^ ~te & re, e[49] = le ^ ~ne & oe, e[0] ^= h[r], e[1] ^= h[r + 1];
    };

    if (s) e.exports = S;else for (k = 0; k < R.length; ++k) o[R[k]] = S[R[k]];
  }();
}),
    Pe = (0, _index2d8aeb.d)(function (e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.sha3 = function (e) {
    return fe.hexToBuffer(xe.sha3_256(e));
  }, t.keccak256 = function (e) {
    return fe.hexToBuffer(xe.keccak_256(e));
  };
});
(0, _index2d8aeb.e)(Pe);
Pe.sha3, Pe.keccak256;
var Oe = (0, _index2d8aeb.d)(function (e, t) {
  function n(e) {
    for (var n in e) t.hasOwnProperty(n) || (t[n] = e[n]);
  }

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), n(ce), n(fe), n(be), n(ke), n(Re), n(Ae), n(Te), n(Ee), n(Ce), n(Pe);
});
(0, _index2d8aeb.e)(Oe);
var Ne = (0, _index2d8aeb.d)(function (e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  });

  const n = _url_commonjsExternalCa.t.__importStar(Oe);

  function r(e) {
    return _url_commonjsExternalCa.t.__awaiter(this, void 0, void 0, function* () {
      const t = (e || 256) / 8,
            r = n.randomBytes(t);
      return ee.convertBufferToArrayBuffer(r);
    });
  }

  function o(e, t) {
    return _url_commonjsExternalCa.t.__awaiter(this, void 0, void 0, function* () {
      const r = ee.convertHexToBuffer(e.data),
            o = ee.convertHexToBuffer(e.iv),
            i = ee.convertHexToBuffer(e.hmac),
            s = ee.convertBufferToHex(i, !0),
            a = ee.concatBuffers(r, o),
            c = yield n.hmacSha256Sign(t, a),
            u = ee.convertBufferToHex(c, !0);
      return ee.removeHexPrefix(s) === ee.removeHexPrefix(u);
    });
  }

  t.generateKey = r, t.verifyHmac = o, t.encrypt = function (e, t, o) {
    return _url_commonjsExternalCa.t.__awaiter(this, void 0, void 0, function* () {
      const i = ee.convertArrayBufferToBuffer(t),
            s = o || (yield r(128)),
            a = ee.convertArrayBufferToBuffer(s),
            c = ee.convertBufferToHex(a, !0),
            u = JSON.stringify(e),
            l = ee.convertUtf8ToBuffer(u),
            h = yield n.aesCbcEncrypt(a, i, l),
            f = ee.convertBufferToHex(h, !0),
            d = ee.concatBuffers(h, a),
            p = yield n.hmacSha256Sign(i, d);
      return {
        data: f,
        hmac: ee.convertBufferToHex(p, !0),
        iv: c
      };
    });
  }, t.decrypt = function (e, t) {
    return _url_commonjsExternalCa.t.__awaiter(this, void 0, void 0, function* () {
      const r = ee.convertArrayBufferToBuffer(t);
      if (!r) throw new Error("Missing key: required for decryption");
      if (!(yield o(e, r))) return null;
      const i = ee.convertHexToBuffer(e.data),
            s = ee.convertHexToBuffer(e.iv),
            a = yield n.aesCbcDecrypt(s, r, i),
            c = ee.convertBufferToUtf8(a);
      let u;

      try {
        u = JSON.parse(c);
      } catch (e) {
        return null;
      }

      return u;
    });
  };
});
(0, _index2d8aeb.e)(Ne);
Ne.generateKey, Ne.verifyHmac, Ne.encrypt, Ne.decrypt;
var Be = (0, _index2d8aeb.d)(function (e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  });

  const n = _url_commonjsExternalCa.t.__importDefault(ae),
        r = _url_commonjsExternalCa.t.__importStar(Ne);

  class o extends n.default {
    constructor(e, t) {
      super({
        cryptoLib: r,
        connectorOpts: e,
        pushServerOpts: t
      });
    }

  }

  t.default = o;
});
(0, _index2d8aeb.e)(Be);
var Ie,
    Me,
    He,
    Le,
    De,
    Ue,
    Ge,
    qe = Object.freeze({
  __proto__: null,
  default: [{
    name: "Rainbow",
    color: "rgb(0, 30, 89)",
    logo: "https://raw.githubusercontent.com/WalletConnect/walletconnect-monorepo/next/packages/helpers/mobile-registry/logos/wallet-rainbow.png",
    universalLink: "https://rnbwapp.com",
    deepLink: "rainbow:"
  }, {
    name: "MetaMask",
    color: "rgb(255, 255, 255)",
    logo: "https://raw.githubusercontent.com/WalletConnect/walletconnect-monorepo/next/packages/helpers/mobile-registry/logos/wallet-metamask.png",
    universalLink: "https://metamask.app.link",
    deepLink: "metamask:"
  }, {
    name: "Gnosis Safe",
    color: "rgb(0, 140, 115)",
    logo: "https://raw.githubusercontent.com/WalletConnect/walletconnect-monorepo/next/packages/helpers/mobile-registry/logos/wallet-gnosis.png",
    universalLink: "https://safe.gnosis.io/walletconnect",
    deepLink: "gnosissafe:"
  }, {
    name: "Argent",
    color: "rgb(255, 135, 91)",
    logo: "https://raw.githubusercontent.com/WalletConnect/walletconnect-monorepo/next/packages/helpers/mobile-registry/logos/wallet-argent.png",
    universalLink: "https://argent.link/app",
    deepLink: "argent://app"
  }, {
    name: "Trust Wallet",
    color: "rgb(51, 117, 187)",
    logo: "https://raw.githubusercontent.com/WalletConnect/walletconnect-monorepo/next/packages/helpers/mobile-registry/logos/wallet-trust.png",
    universalLink: "https://link.trustwallet.com",
    deepLink: "trust:"
  }]
}),
    je = {},
    Ke = [],
    Fe = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord/i;

function We(e, t) {
  for (var n in t) e[n] = t[n];

  return e;
}

function ze(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}

function Ve(e, t, n) {
  var r,
      o = arguments,
      i = {};

  for (r in t) "key" !== r && "ref" !== r && (i[r] = t[r]);

  if (arguments.length > 3) for (n = [n], r = 3; r < arguments.length; r++) n.push(o[r]);
  if (null != n && (i.children = n), "function" == typeof e && null != e.defaultProps) for (r in e.defaultProps) void 0 === i[r] && (i[r] = e.defaultProps[r]);
  return Ye(e, i, t && t.key, t && t.ref, null);
}

function Ye(e, t, n, r, o) {
  var i = {
    type: e,
    props: t,
    key: n,
    ref: r,
    __k: null,
    __: null,
    __b: 0,
    __e: null,
    __d: void 0,
    __c: null,
    constructor: void 0,
    __v: o
  };
  return null == o && (i.__v = i), Ie.vnode && Ie.vnode(i), i;
}

function Je(e) {
  return e.children;
}

function Xe(e, t) {
  this.props = e, this.context = t;
}

function $e(e, t) {
  if (null == t) return e.__ ? $e(e.__, e.__.__k.indexOf(e) + 1) : null;

  for (var n; t < e.__k.length; t++) if (null != (n = e.__k[t]) && null != n.__e) return n.__e;

  return "function" == typeof e.type ? $e(e) : null;
}

function Qe(e) {
  var t, n;

  if (null != (e = e.__) && null != e.__c) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++) if (null != (n = e.__k[t]) && null != n.__e) {
      e.__e = e.__c.base = n.__e;
      break;
    }

    return Qe(e);
  }
}

function Ze(e) {
  (!e.__d && (e.__d = !0) && Me.push(e) && !He++ || De !== Ie.debounceRendering) && ((De = Ie.debounceRendering) || Le)(et);
}

function et() {
  for (var e; He = Me.length;) e = Me.sort(function (e, t) {
    return e.__v.__b - t.__v.__b;
  }), Me = [], e.some(function (e) {
    var t, n, r, o, i, s, a;
    e.__d && (s = (i = (t = e).__v).__e, (a = t.__P) && (n = [], (r = We({}, i)).__v = r, o = st(a, i, r, t.__n, void 0 !== a.ownerSVGElement, null, n, null == s ? $e(i) : s), at(n, i), o != s && Qe(i)));
  });
}

function tt(e, t, n, r, o, i, s, a, c) {
  var u,
      l,
      h,
      f,
      d,
      p,
      _,
      g = n && n.__k || Ke,
      y = g.length;

  if (a == je && (a = null != i ? i[0] : y ? $e(n, 0) : null), u = 0, t.__k = nt(t.__k, function (n) {
    if (null != n) {
      if (n.__ = t, n.__b = t.__b + 1, null === (h = g[u]) || h && n.key == h.key && n.type === h.type) g[u] = void 0;else for (l = 0; l < y; l++) {
        if ((h = g[l]) && n.key == h.key && n.type === h.type) {
          g[l] = void 0;
          break;
        }

        h = null;
      }

      if (f = st(e, n, h = h || je, r, o, i, s, a, c), (l = n.ref) && h.ref != l && (_ || (_ = []), h.ref && _.push(h.ref, null, n), _.push(l, n.__c || f, n)), null != f) {
        var v;
        if (null == p && (p = f), void 0 !== n.__d) v = n.__d, n.__d = void 0;else if (i == h || f != a || null == f.parentNode) {
          e: if (null == a || a.parentNode !== e) e.appendChild(f), v = null;else {
            for (d = a, l = 0; (d = d.nextSibling) && l < y; l += 2) if (d == f) break e;

            e.insertBefore(f, a), v = a;
          }

          "option" == t.type && (e.value = "");
        }
        a = void 0 !== v ? v : f.nextSibling, "function" == typeof t.type && (t.__d = a);
      } else a && h.__e == a && a.parentNode != e && (a = $e(h));
    }

    return u++, n;
  }), t.__e = p, null != i && "function" != typeof t.type) for (u = i.length; u--;) null != i[u] && ze(i[u]);

  for (u = y; u--;) null != g[u] && lt(g[u], g[u]);

  if (_) for (u = 0; u < _.length; u++) ut(_[u], _[++u], _[++u]);
}

function nt(e, t, n) {
  if (null == n && (n = []), null == e || "boolean" == typeof e) t && n.push(t(null));else if (Array.isArray(e)) for (var r = 0; r < e.length; r++) nt(e[r], t, n);else n.push(t ? t("string" == typeof e || "number" == typeof e ? Ye(null, e, null, null, e) : null != e.__e || null != e.__c ? Ye(e.type, e.props, e.key, null, e.__v) : e) : e);
  return n;
}

function rt(e, t, n) {
  "-" === t[0] ? e.setProperty(t, n) : e[t] = "number" == typeof n && !1 === Fe.test(t) ? n + "px" : null == n ? "" : n;
}

function ot(e, t, n, r, o) {
  var i, s, a, c, u;
  if (o ? "className" === t && (t = "class") : "class" === t && (t = "className"), "style" === t) {
    if (i = e.style, "string" == typeof n) i.cssText = n;else {
      if ("string" == typeof r && (i.cssText = "", r = null), r) for (c in r) n && c in n || rt(i, c, "");
      if (n) for (u in n) r && n[u] === r[u] || rt(i, u, n[u]);
    }
  } else "o" === t[0] && "n" === t[1] ? (s = t !== (t = t.replace(/Capture$/, "")), a = t.toLowerCase(), t = (a in e ? a : t).slice(2), n ? (r || e.addEventListener(t, it, s), (e.l || (e.l = {}))[t] = n) : e.removeEventListener(t, it, s)) : "list" !== t && "tagName" !== t && "form" !== t && "type" !== t && "size" !== t && !o && t in e ? e[t] = null == n ? "" : n : "function" != typeof n && "dangerouslySetInnerHTML" !== t && (t !== (t = t.replace(/^xlink:?/, "")) ? null == n || !1 === n ? e.removeAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase()) : e.setAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase(), n) : null == n || !1 === n && !/^ar/.test(t) ? e.removeAttribute(t) : e.setAttribute(t, n));
}

function it(e) {
  this.l[e.type](Ie.event ? Ie.event(e) : e);
}

function st(e, t, n, r, o, i, s, a, c) {
  var u,
      l,
      h,
      f,
      d,
      p,
      _,
      g,
      y,
      v,
      m = t.type;

  if (void 0 !== t.constructor) return null;
  (u = Ie.__b) && u(t);

  try {
    e: if ("function" == typeof m) {
      if (g = t.props, y = (u = m.contextType) && r[u.__c], v = u ? y ? y.props.value : u.__ : r, n.__c ? _ = (l = t.__c = n.__c).__ = l.__E : ("prototype" in m && m.prototype.render ? t.__c = l = new m(g, v) : (t.__c = l = new Xe(g, v), l.constructor = m, l.render = ht), y && y.sub(l), l.props = g, l.state || (l.state = {}), l.context = v, l.__n = r, h = l.__d = !0, l.__h = []), null == l.__s && (l.__s = l.state), null != m.getDerivedStateFromProps && (l.__s == l.state && (l.__s = We({}, l.__s)), We(l.__s, m.getDerivedStateFromProps(g, l.__s))), f = l.props, d = l.state, h) null == m.getDerivedStateFromProps && null != l.componentWillMount && l.componentWillMount(), null != l.componentDidMount && l.__h.push(l.componentDidMount);else {
        if (null == m.getDerivedStateFromProps && g !== f && null != l.componentWillReceiveProps && l.componentWillReceiveProps(g, v), !l.__e && null != l.shouldComponentUpdate && !1 === l.shouldComponentUpdate(g, l.__s, v) || t.__v === n.__v && !l.__) {
          for (l.props = g, l.state = l.__s, t.__v !== n.__v && (l.__d = !1), l.__v = t, t.__e = n.__e, t.__k = n.__k, l.__h.length && s.push(l), u = 0; u < t.__k.length; u++) t.__k[u] && (t.__k[u].__ = t);

          break e;
        }

        null != l.componentWillUpdate && l.componentWillUpdate(g, l.__s, v), null != l.componentDidUpdate && l.__h.push(function () {
          l.componentDidUpdate(f, d, p);
        });
      }
      l.context = v, l.props = g, l.state = l.__s, (u = Ie.__r) && u(t), l.__d = !1, l.__v = t, l.__P = e, u = l.render(l.props, l.state, l.context), t.__k = null != u && u.type == Je && null == u.key ? u.props.children : Array.isArray(u) ? u : [u], null != l.getChildContext && (r = We(We({}, r), l.getChildContext())), h || null == l.getSnapshotBeforeUpdate || (p = l.getSnapshotBeforeUpdate(f, d)), tt(e, t, n, r, o, i, s, a, c), l.base = t.__e, l.__h.length && s.push(l), _ && (l.__E = l.__ = null), l.__e = !1;
    } else null == i && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = ct(n.__e, t, n, r, o, i, s, c);

    (u = Ie.diffed) && u(t);
  } catch (e) {
    t.__v = null, Ie.__e(e, t, n);
  }

  return t.__e;
}

function at(e, t) {
  Ie.__c && Ie.__c(t, e), e.some(function (t) {
    try {
      e = t.__h, t.__h = [], e.some(function (e) {
        e.call(t);
      });
    } catch (e) {
      Ie.__e(e, t.__v);
    }
  });
}

function ct(e, t, n, r, o, i, s, a) {
  var c,
      u,
      l,
      h,
      f,
      d = n.props,
      p = t.props;
  if (o = "svg" === t.type || o, null != i) for (c = 0; c < i.length; c++) if (null != (u = i[c]) && ((null === t.type ? 3 === u.nodeType : u.localName === t.type) || e == u)) {
    e = u, i[c] = null;
    break;
  }

  if (null == e) {
    if (null === t.type) return document.createTextNode(p);
    e = o ? document.createElementNS("http://www.w3.org/2000/svg", t.type) : document.createElement(t.type, p.is && {
      is: p.is
    }), i = null, a = !1;
  }

  if (null === t.type) d !== p && e.data != p && (e.data = p);else {
    if (null != i && (i = Ke.slice.call(e.childNodes)), l = (d = n.props || je).dangerouslySetInnerHTML, h = p.dangerouslySetInnerHTML, !a) {
      if (d === je) for (d = {}, f = 0; f < e.attributes.length; f++) d[e.attributes[f].name] = e.attributes[f].value;
      (h || l) && (h && l && h.__html == l.__html || (e.innerHTML = h && h.__html || ""));
    }

    (function (e, t, n, r, o) {
      var i;

      for (i in n) "children" === i || "key" === i || i in t || ot(e, i, null, n[i], r);

      for (i in t) o && "function" != typeof t[i] || "children" === i || "key" === i || "value" === i || "checked" === i || n[i] === t[i] || ot(e, i, t[i], n[i], r);
    })(e, p, d, o, a), h ? t.__k = [] : (t.__k = t.props.children, tt(e, t, n, r, "foreignObject" !== t.type && o, i, s, je, a)), a || ("value" in p && void 0 !== (c = p.value) && c !== e.value && ot(e, "value", c, d.value, !1), "checked" in p && void 0 !== (c = p.checked) && c !== e.checked && ot(e, "checked", c, d.checked, !1));
  }
  return e;
}

function ut(e, t, n) {
  try {
    "function" == typeof e ? e(t) : e.current = t;
  } catch (e) {
    Ie.__e(e, n);
  }
}

function lt(e, t, n) {
  var r, o, i;

  if (Ie.unmount && Ie.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || ut(r, null, t)), n || "function" == typeof e.type || (n = null != (o = e.__e)), e.__e = e.__d = void 0, null != (r = e.__c)) {
    if (r.componentWillUnmount) try {
      r.componentWillUnmount();
    } catch (e) {
      Ie.__e(e, t);
    }
    r.base = r.__P = null;
  }

  if (r = e.__k) for (i = 0; i < r.length; i++) r[i] && lt(r[i], t, n);
  null != o && ze(o);
}

function ht(e, t, n) {
  return this.constructor(e, n);
}

function ft(e, t, n) {
  var r, o, i;
  Ie.__ && Ie.__(e, t), o = (r = n === Ue) ? null : n && n.__k || t.__k, e = Ve(Je, null, [e]), i = [], st(t, (r ? t : n || t).__k = e, o || je, je, void 0 !== t.ownerSVGElement, n && !r ? [n] : o ? null : Ke.slice.call(t.childNodes), i, n || je, r), at(i, e);
}

function dt(e, t) {
  var n, r;

  for (r in t = We(We({}, e.props), t), arguments.length > 2 && (t.children = Ke.slice.call(arguments, 2)), n = {}, t) "key" !== r && "ref" !== r && (n[r] = t[r]);

  return Ye(e.type, n, t.key || e.key, t.ref || e.ref, null);
}

Ie = {
  __e: function (e, t) {
    for (var n, r; t = t.__;) if ((n = t.__c) && !n.__) try {
      if (n.constructor && null != n.constructor.getDerivedStateFromError && (r = !0, n.setState(n.constructor.getDerivedStateFromError(e))), null != n.componentDidCatch && (r = !0, n.componentDidCatch(e)), r) return Ze(n.__E = n);
    } catch (t) {
      e = t;
    }

    throw e;
  }
}, Xe.prototype.setState = function (e, t) {
  var n;
  n = this.__s !== this.state ? this.__s : this.__s = We({}, this.state), "function" == typeof e && (e = e(n, this.props)), e && We(n, e), null != e && this.__v && (t && this.__h.push(t), Ze(this));
}, Xe.prototype.forceUpdate = function (e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Ze(this));
}, Xe.prototype.render = Je, Me = [], He = 0, Le = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Ue = je, Ge = 0;

var pt,
    _t,
    gt,
    yt = 0,
    vt = [],
    mt = Ie.__r,
    bt = Ie.diffed,
    Et = Ie.__c,
    wt = Ie.unmount;

function St(e, t) {
  Ie.__h && Ie.__h(_t, e, yt || t), yt = 0;
  var n = _t.__H || (_t.__H = {
    __: [],
    __h: []
  });
  return e >= n.__.length && n.__.push({}), n.__[e];
}

function Rt(e, t, n) {
  var r = St(pt++, 2);
  return r.__c || (r.__c = _t, r.__ = [n ? n(t) : Ot(void 0, t), function (t) {
    var n = e(r.__[0], t);
    r.__[0] !== n && (r.__[0] = n, r.__c.setState({}));
  }]), r.__;
}

function kt(e, t) {
  var n = St(pt++, 4);
  !Ie.__s && Pt(n.__H, t) && (n.__ = e, n.__H = t, _t.__h.push(n));
}

function Tt(e, t) {
  var n = St(pt++, 7);
  return Pt(n.__H, t) ? (n.__H = t, n.__h = e, n.__ = e()) : n.__;
}

function Ct() {
  vt.some(function (e) {
    if (e.__P) try {
      e.__H.__h.forEach(At), e.__H.__h.forEach(xt), e.__H.__h = [];
    } catch (t) {
      return e.__H.__h = [], Ie.__e(t, e.__v), !0;
    }
  }), vt = [];
}

function At(e) {
  e.t && e.t();
}

function xt(e) {
  var t = e.__();

  "function" == typeof t && (e.t = t);
}

function Pt(e, t) {
  return !e || t.some(function (t, n) {
    return t !== e[n];
  });
}

function Ot(e, t) {
  return "function" == typeof t ? t(e) : t;
}

function Nt(e, t) {
  for (var n in t) e[n] = t[n];

  return e;
}

function Bt(e, t) {
  for (var n in e) if ("__source" !== n && !(n in t)) return !0;

  for (var r in t) if ("__source" !== r && e[r] !== t[r]) return !0;

  return !1;
}

Ie.__r = function (e) {
  mt && mt(e), pt = 0, (_t = e.__c).__H && (_t.__H.__h.forEach(At), _t.__H.__h.forEach(xt), _t.__H.__h = []);
}, Ie.diffed = function (e) {
  bt && bt(e);
  var t = e.__c;

  if (t) {
    var n = t.__H;
    n && n.__h.length && (1 !== vt.push(t) && gt === Ie.requestAnimationFrame || ((gt = Ie.requestAnimationFrame) || function (e) {
      var t,
          n = function () {
        clearTimeout(r), cancelAnimationFrame(t), setTimeout(e);
      },
          r = setTimeout(n, 100);

      "undefined" != typeof window && (t = requestAnimationFrame(n));
    })(Ct));
  }
}, Ie.__c = function (e, t) {
  t.some(function (e) {
    try {
      e.__h.forEach(At), e.__h = e.__h.filter(function (e) {
        return !e.__ || xt(e);
      });
    } catch (n) {
      t.some(function (e) {
        e.__h && (e.__h = []);
      }), t = [], Ie.__e(n, e.__v);
    }
  }), Et && Et(e, t);
}, Ie.unmount = function (e) {
  wt && wt(e);
  var t = e.__c;

  if (t) {
    var n = t.__H;
    if (n) try {
      n.__.forEach(function (e) {
        return e.t && e.t();
      });
    } catch (e) {
      Ie.__e(e, t.__v);
    }
  }
};

var It = function (e) {
  var t, n;

  function r(t) {
    var n;
    return (n = e.call(this, t) || this).isPureReactComponent = !0, n;
  }

  return n = e, (t = r).prototype = Object.create(n.prototype), t.prototype.constructor = t, t.__proto__ = n, r.prototype.shouldComponentUpdate = function (e, t) {
    return Bt(this.props, e) || Bt(this.state, t);
  }, r;
}(Xe);

var Mt = Ie.__b;

Ie.__b = function (e) {
  e.type && e.type.t && e.ref && (e.props.ref = e.ref, e.ref = null), Mt && Mt(e);
};

var Ht = function (e, t) {
  return e ? nt(e).reduce(function (e, n, r) {
    return e.concat(t(n, r));
  }, []) : null;
},
    Lt = {
  map: Ht,
  forEach: Ht,
  count: function (e) {
    return e ? nt(e).length : 0;
  },
  only: function (e) {
    if (1 !== (e = nt(e)).length) throw new Error("Children.only() expects only one child.");
    return e[0];
  },
  toArray: nt
},
    Dt = Ie.__e;

function Ut(e) {
  return e && ((e = Nt({}, e)).__c = null, e.__k = e.__k && e.__k.map(Ut)), e;
}

function Gt() {
  this.__u = 0, this.o = null, this.__b = null;
}

function qt(e) {
  var t = e.__.__c;
  return t && t.u && t.u(e);
}

function jt() {
  this.i = null, this.l = null;
}

Ie.__e = function (e, t, n) {
  if (e.then) for (var r, o = t; o = o.__;) if ((r = o.__c) && r.__c) return r.__c(e, t.__c);
  Dt(e, t, n);
}, (Gt.prototype = new Xe()).__c = function (e, t) {
  var n = this;
  null == n.o && (n.o = []), n.o.push(t);

  var r = qt(n.__v),
      o = !1,
      i = function () {
    o || (o = !0, r ? r(s) : s());
  };

  t.__c = t.componentWillUnmount, t.componentWillUnmount = function () {
    i(), t.__c && t.__c();
  };

  var s = function () {
    var e;
    if (! --n.__u) for (n.__v.__k[0] = n.state.u, n.setState({
      u: n.__b = null
    }); e = n.o.pop();) e.forceUpdate();
  };

  n.__u++ || n.setState({
    u: n.__b = n.__v.__k[0]
  }), e.then(i, i);
}, Gt.prototype.render = function (e, t) {
  return this.__b && (this.__v.__k[0] = Ut(this.__b), this.__b = null), [Ve(Xe, null, t.u ? null : e.children), t.u && e.fallback];
};

var Kt = function (e, t, n) {
  if (++n[1] === n[0] && e.l.delete(t), e.props.revealOrder && ("t" !== e.props.revealOrder[0] || !e.l.size)) for (n = e.i; n;) {
    for (; n.length > 3;) n.pop()();

    if (n[1] < n[0]) break;
    e.i = n = n[2];
  }
};

(jt.prototype = new Xe()).u = function (e) {
  var t = this,
      n = qt(t.__v),
      r = t.l.get(e);
  return r[0]++, function (o) {
    var i = function () {
      t.props.revealOrder ? (r.push(o), Kt(t, e, r)) : o();
    };

    n ? n(i) : i();
  };
}, jt.prototype.render = function (e) {
  this.i = null, this.l = new Map();
  var t = nt(e.children);
  e.revealOrder && "b" === e.revealOrder[0] && t.reverse();

  for (var n = t.length; n--;) this.l.set(t[n], this.i = [1, 0, this.i]);

  return e.children;
}, jt.prototype.componentDidUpdate = jt.prototype.componentDidMount = function () {
  var e = this;
  e.l.forEach(function (t, n) {
    Kt(e, n, t);
  });
};

var Ft = function () {
  function e() {}

  var t = e.prototype;
  return t.getChildContext = function () {
    return this.props.context;
  }, t.render = function (e) {
    return e.children;
  }, e;
}();

function Wt(e) {
  var t = this,
      n = e.container,
      r = Ve(Ft, {
    context: t.context
  }, e.vnode);
  return t.s && t.s !== n && (t.v.parentNode && t.s.removeChild(t.v), lt(t.h), t.p = !1), e.vnode ? t.p ? (n.__k = t.__k, ft(r, n), t.__k = n.__k) : (t.v = document.createTextNode(""), function (e, t) {
    ft(e, t, Ue);
  }("", n), n.appendChild(t.v), t.p = !0, t.s = n, ft(r, n, t.v), t.__k = t.v.__k) : t.p && (t.v.parentNode && t.s.removeChild(t.v), lt(t.h)), t.h = r, t.componentWillUnmount = function () {
    t.v.parentNode && t.s.removeChild(t.v), lt(t.h);
  }, null;
}

var zt = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/;
Xe.prototype.isReactComponent = {};
var Vt = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103;

function Yt(e, t, n) {
  if (null == t.__k) for (; t.firstChild;) t.removeChild(t.firstChild);
  return ft(e, t), "function" == typeof n && n(), e ? e.__c : null;
}

var Jt = Ie.event;

function Xt(e, t) {
  e["UNSAFE_" + t] && !e[t] && Object.defineProperty(e, t, {
    configurable: !1,
    get: function () {
      return this["UNSAFE_" + t];
    },
    set: function (e) {
      this["UNSAFE_" + t] = e;
    }
  });
}

Ie.event = function (e) {
  Jt && (e = Jt(e)), e.persist = function () {};
  var t = !1,
      n = !1,
      r = e.stopPropagation;

  e.stopPropagation = function () {
    r.call(e), t = !0;
  };

  var o = e.preventDefault;
  return e.preventDefault = function () {
    o.call(e), n = !0;
  }, e.isPropagationStopped = function () {
    return t;
  }, e.isDefaultPrevented = function () {
    return n;
  }, e.nativeEvent = e;
};

var $t = {
  configurable: !0,
  get: function () {
    return this.class;
  }
},
    Qt = Ie.vnode;

function Zt(e) {
  return !!e && e.$$typeof === Vt;
}

Ie.vnode = function (e) {
  e.$$typeof = Vt;
  var t = e.type,
      n = e.props;

  if (t) {
    if (n.class != n.className && ($t.enumerable = "className" in n, null != n.className && (n.class = n.className), Object.defineProperty(n, "className", $t)), "function" != typeof t) {
      var r, o, i;

      for (i in n.defaultValue && void 0 !== n.value && (n.value || 0 === n.value || (n.value = n.defaultValue), delete n.defaultValue), Array.isArray(n.value) && n.multiple && "select" === t && (nt(n.children).forEach(function (e) {
        -1 != n.value.indexOf(e.props.value) && (e.props.selected = !0);
      }), delete n.value), n) if (r = zt.test(i)) break;

      if (r) for (i in o = e.props = {}, n) o[zt.test(i) ? i.replace(/[A-Z0-9]/, "-$&").toLowerCase() : i] = n[i];
    }

    !function (t) {
      var n = e.type,
          r = e.props;

      if (r && "string" == typeof n) {
        var o = {};

        for (var i in r) /^on(Ani|Tra|Tou)/.test(i) && (r[i.toLowerCase()] = r[i], delete r[i]), o[i.toLowerCase()] = i;

        if (o.ondoubleclick && (r.ondblclick = r[o.ondoubleclick], delete r[o.ondoubleclick]), o.onbeforeinput && (r.onbeforeinput = r[o.onbeforeinput], delete r[o.onbeforeinput]), o.onchange && ("textarea" === n || "input" === n.toLowerCase() && !/^fil|che|ra/i.test(r.type))) {
          var s = o.oninput || "oninput";
          r[s] || (r[s] = r[o.onchange], delete r[o.onchange]);
        }
      }
    }(), "function" == typeof t && !t.m && t.prototype && (Xt(t.prototype, "componentWillMount"), Xt(t.prototype, "componentWillReceiveProps"), Xt(t.prototype, "componentWillUpdate"), t.m = !0);
  }

  Qt && Qt(e);
};

var en = {
  useState: function (e) {
    return yt = 1, Rt(Ot, e);
  },
  useReducer: Rt,
  useEffect: function (e, t) {
    var n = St(pt++, 3);
    !Ie.__s && Pt(n.__H, t) && (n.__ = e, n.__H = t, _t.__H.__h.push(n));
  },
  useLayoutEffect: kt,
  useRef: function (e) {
    return yt = 5, Tt(function () {
      return {
        current: e
      };
    }, []);
  },
  useImperativeHandle: function (e, t, n) {
    yt = 6, kt(function () {
      "function" == typeof e ? e(t()) : e && (e.current = t());
    }, null == n ? n : n.concat(e));
  },
  useMemo: Tt,
  useCallback: function (e, t) {
    return yt = 8, Tt(function () {
      return e;
    }, t);
  },
  useContext: function (e) {
    var t = _t.context[e.__c],
        n = St(pt++, 9);
    return n.__c = e, t ? (null == n.__ && (n.__ = !0, t.sub(_t)), t.props.value) : e.__;
  },
  useDebugValue: function (e, t) {
    Ie.useDebugValue && Ie.useDebugValue(t ? t(e) : e);
  },
  version: "16.8.0",
  Children: Lt,
  render: Yt,
  hydrate: Yt,
  unmountComponentAtNode: function (e) {
    return !!e.__k && (ft(null, e), !0);
  },
  createPortal: function (e, t) {
    return Ve(Wt, {
      vnode: e,
      container: t
    });
  },
  createElement: Ve,
  createContext: function (e) {
    var t = {},
        n = {
      __c: "__cC" + Ge++,
      __: e,
      Consumer: function (e, t) {
        return e.children(t);
      },
      Provider: function (e) {
        var r,
            o = this;
        return this.getChildContext || (r = [], this.getChildContext = function () {
          return t[n.__c] = o, t;
        }, this.shouldComponentUpdate = function (e) {
          o.props.value !== e.value && r.some(function (t) {
            t.context = e.value, Ze(t);
          });
        }, this.sub = function (e) {
          r.push(e);
          var t = e.componentWillUnmount;

          e.componentWillUnmount = function () {
            r.splice(r.indexOf(e), 1), t && t.call(e);
          };
        }), e.children;
      }
    };
    return n.Consumer.contextType = n, n.Provider.__ = n, n;
  },
  createFactory: function (e) {
    return Ve.bind(null, e);
  },
  cloneElement: function (e) {
    return Zt(e) ? dt.apply(null, arguments) : e;
  },
  createRef: function () {
    return {};
  },
  Fragment: Je,
  isValidElement: Zt,
  findDOMNode: function (e) {
    return e && (e.base || 1 === e.nodeType && e) || null;
  },
  Component: Xe,
  PureComponent: It,
  memo: function (e, t) {
    function n(e) {
      var n = this.props.ref,
          r = n == e.ref;
      return !r && n && (n.call ? n(null) : n.current = null), t ? !t(this.props, e) || !r : Bt(this.props, e);
    }

    function r(t) {
      return this.shouldComponentUpdate = n, Ve(e, Nt({}, t));
    }

    return r.prototype.isReactComponent = !0, r.displayName = "Memo(" + (e.displayName || e.name) + ")", r.t = !0, r;
  },
  forwardRef: function (e) {
    function t(t) {
      var n = Nt({}, t);
      return delete n.ref, e(n, t.ref);
    }

    return t.prototype.isReactComponent = t.t = !0, t.displayName = "ForwardRef(" + (e.displayName || e.name) + ")", t;
  },
  unstable_batchedUpdates: function (e, t) {
    return e(t);
  },
  Suspense: Gt,
  SuspenseList: jt,
  lazy: function (e) {
    var t, n, r;

    function o(o) {
      if (t || (t = e()).then(function (e) {
        n = e.default || e;
      }, function (e) {
        r = e;
      }), r) throw r;
      if (!n) throw t;
      return Ve(n, o);
    }

    return o.displayName = "Lazy", o.t = !0, o;
  }
},
    tn = function () {
  return "function" == typeof Promise && Promise.prototype && Promise.prototype.then;
},
    nn = {}.toString,
    rn = Array.isArray || function (e) {
  return "[object Array]" == nn.call(e);
};

sn.TYPED_ARRAY_SUPPORT = function () {
  try {
    var e = new Uint8Array(1);
    return e.__proto__ = {
      __proto__: Uint8Array.prototype,
      foo: function () {
        return 42;
      }
    }, 42 === e.foo();
  } catch (e) {
    return !1;
  }
}();

var on = sn.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;

function sn(e, t, n) {
  return sn.TYPED_ARRAY_SUPPORT || this instanceof sn ? "number" == typeof e ? un(this, e) : function (e, t, n, r) {
    if ("number" == typeof t) throw new TypeError('"value" argument must not be a number');
    if ("undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer) return function (e, t, n, r) {
      if (n < 0 || t.byteLength < n) throw new RangeError("'offset' is out of bounds");
      if (t.byteLength < n + (r || 0)) throw new RangeError("'length' is out of bounds");
      var o;
      o = void 0 === n && void 0 === r ? new Uint8Array(t) : void 0 === r ? new Uint8Array(t, n) : new Uint8Array(t, n, r);
      sn.TYPED_ARRAY_SUPPORT ? o.__proto__ = sn.prototype : o = ln(e, o);
      return o;
    }(e, t, n, r);
    if ("string" == typeof t) return function (e, t) {
      var n = 0 | fn(t),
          r = cn(e, n),
          o = r.write(t);
      o !== n && (r = r.slice(0, o));
      return r;
    }(e, t);
    return function (e, t) {
      if (sn.isBuffer(t)) {
        var n = 0 | an(t.length),
            r = cn(e, n);
        return 0 === r.length || t.copy(r, 0, 0, n), r;
      }

      if (t) {
        if ("undefined" != typeof ArrayBuffer && t.buffer instanceof ArrayBuffer || "length" in t) return "number" != typeof t.length || (o = t.length) != o ? cn(e, 0) : ln(e, t);
        if ("Buffer" === t.type && Array.isArray(t.data)) return ln(e, t.data);
      }

      var o;
      throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
    }(e, t);
  }(this, e, t, n) : new sn(e, t, n);
}

function an(e) {
  if (e >= on) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + on.toString(16) + " bytes");
  return 0 | e;
}

function cn(e, t) {
  var n;
  return sn.TYPED_ARRAY_SUPPORT ? (n = new Uint8Array(t)).__proto__ = sn.prototype : (null === (n = e) && (n = new sn(t)), n.length = t), n;
}

function un(e, t) {
  var n = cn(e, t < 0 ? 0 : 0 | an(t));
  if (!sn.TYPED_ARRAY_SUPPORT) for (var r = 0; r < t; ++r) n[r] = 0;
  return n;
}

function ln(e, t) {
  for (var n = t.length < 0 ? 0 : 0 | an(t.length), r = cn(e, n), o = 0; o < n; o += 1) r[o] = 255 & t[o];

  return r;
}

function hn(e, t) {
  var n;
  t = t || 1 / 0;

  for (var r = e.length, o = null, i = [], s = 0; s < r; ++s) {
    if ((n = e.charCodeAt(s)) > 55295 && n < 57344) {
      if (!o) {
        if (n > 56319) {
          (t -= 3) > -1 && i.push(239, 191, 189);
          continue;
        }

        if (s + 1 === r) {
          (t -= 3) > -1 && i.push(239, 191, 189);
          continue;
        }

        o = n;
        continue;
      }

      if (n < 56320) {
        (t -= 3) > -1 && i.push(239, 191, 189), o = n;
        continue;
      }

      n = 65536 + (o - 55296 << 10 | n - 56320);
    } else o && (t -= 3) > -1 && i.push(239, 191, 189);

    if (o = null, n < 128) {
      if ((t -= 1) < 0) break;
      i.push(n);
    } else if (n < 2048) {
      if ((t -= 2) < 0) break;
      i.push(n >> 6 | 192, 63 & n | 128);
    } else if (n < 65536) {
      if ((t -= 3) < 0) break;
      i.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128);
    } else {
      if (!(n < 1114112)) throw new Error("Invalid code point");
      if ((t -= 4) < 0) break;
      i.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128);
    }
  }

  return i;
}

function fn(e) {
  return sn.isBuffer(e) ? e.length : "undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(e) || e instanceof ArrayBuffer) ? e.byteLength : ("string" != typeof e && (e = "" + e), 0 === e.length ? 0 : hn(e).length);
}

sn.TYPED_ARRAY_SUPPORT && (sn.prototype.__proto__ = Uint8Array.prototype, sn.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && sn[Symbol.species] === sn && Object.defineProperty(sn, Symbol.species, {
  value: null,
  configurable: !0,
  enumerable: !1,
  writable: !1
})), sn.prototype.write = function (e, t, n) {
  void 0 === t || void 0 === n && "string" == typeof t ? (n = this.length, t = 0) : isFinite(t) && (t |= 0, isFinite(n) ? n |= 0 : n = void 0);
  var r = this.length - t;
  if ((void 0 === n || n > r) && (n = r), e.length > 0 && (n < 0 || t < 0) || t > this.length) throw new RangeError("Attempt to write outside buffer bounds");
  return function (e, t, n, r) {
    return function (e, t, n, r) {
      for (var o = 0; o < r && !(o + n >= t.length || o >= e.length); ++o) t[o + n] = e[o];

      return o;
    }(hn(t, e.length - n), e, n, r);
  }(this, e, t, n);
}, sn.prototype.slice = function (e, t) {
  var n,
      r = this.length;
  if ((e = ~~e) < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r), (t = void 0 === t ? r : ~~t) < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r), t < e && (t = e), sn.TYPED_ARRAY_SUPPORT) (n = this.subarray(e, t)).__proto__ = sn.prototype;else {
    var o = t - e;
    n = new sn(o, void 0);

    for (var i = 0; i < o; ++i) n[i] = this[i + e];
  }
  return n;
}, sn.prototype.copy = function (e, t, n, r) {
  if (n || (n = 0), r || 0 === r || (r = this.length), t >= e.length && (t = e.length), t || (t = 0), r > 0 && r < n && (r = n), r === n) return 0;
  if (0 === e.length || 0 === this.length) return 0;
  if (t < 0) throw new RangeError("targetStart out of bounds");
  if (n < 0 || n >= this.length) throw new RangeError("sourceStart out of bounds");
  if (r < 0) throw new RangeError("sourceEnd out of bounds");
  r > this.length && (r = this.length), e.length - t < r - n && (r = e.length - t + n);
  var o,
      i = r - n;
  if (this === e && n < t && t < r) for (o = i - 1; o >= 0; --o) e[o + t] = this[o + n];else if (i < 1e3 || !sn.TYPED_ARRAY_SUPPORT) for (o = 0; o < i; ++o) e[o + t] = this[o + n];else Uint8Array.prototype.set.call(e, this.subarray(n, n + i), t);
  return i;
}, sn.prototype.fill = function (e, t, n) {
  if ("string" == typeof e) {
    if ("string" == typeof t ? (t = 0, n = this.length) : "string" == typeof n && (n = this.length), 1 === e.length) {
      var r = e.charCodeAt(0);
      r < 256 && (e = r);
    }
  } else "number" == typeof e && (e &= 255);

  if (t < 0 || this.length < t || this.length < n) throw new RangeError("Out of range index");
  if (n <= t) return this;
  var o;
  if (t >>>= 0, n = void 0 === n ? this.length : n >>> 0, e || (e = 0), "number" == typeof e) for (o = t; o < n; ++o) this[o] = e;else {
    var i = sn.isBuffer(e) ? e : new sn(e),
        s = i.length;

    for (o = 0; o < n - t; ++o) this[o + t] = i[o % s];
  }
  return this;
}, sn.concat = function (e, t) {
  if (!rn(e)) throw new TypeError('"list" argument must be an Array of Buffers');
  if (0 === e.length) return cn(null, 0);
  var n;
  if (void 0 === t) for (t = 0, n = 0; n < e.length; ++n) t += e[n].length;
  var r = un(null, t),
      o = 0;

  for (n = 0; n < e.length; ++n) {
    var i = e[n];
    if (!sn.isBuffer(i)) throw new TypeError('"list" argument must be an Array of Buffers');
    i.copy(r, o), o += i.length;
  }

  return r;
}, sn.byteLength = fn, sn.prototype._isBuffer = !0, sn.isBuffer = function (e) {
  return !(null == e || !e._isBuffer);
};

var dn,
    pn = function (e) {
  var t = new sn(e);
  return t.fill(0), t;
},
    _n = function (e) {
  return new sn(e);
},
    gn = [0, 26, 44, 70, 100, 134, 172, 196, 242, 292, 346, 404, 466, 532, 581, 655, 733, 815, 901, 991, 1085, 1156, 1258, 1364, 1474, 1588, 1706, 1828, 1921, 2051, 2185, 2323, 2465, 2611, 2761, 2876, 3034, 3196, 3362, 3532, 3706],
    yn = function (e) {
  if (!e) throw new Error('"version" cannot be null or undefined');
  if (e < 1 || e > 40) throw new Error('"version" should be in range from 1 to 40');
  return 4 * e + 17;
},
    vn = function (e) {
  return gn[e];
},
    mn = function (e) {
  for (var t = 0; 0 !== e;) t++, e >>>= 1;

  return t;
},
    bn = function (e) {
  if ("function" != typeof e) throw new Error('"toSJISFunc" is not a valid function.');
  dn = e;
},
    En = function () {
  return void 0 !== dn;
},
    wn = function (e) {
  return dn(e);
},
    Sn = (0, _index2d8aeb.d)(function (e, t) {
  t.L = {
    bit: 1
  }, t.M = {
    bit: 0
  }, t.Q = {
    bit: 3
  }, t.H = {
    bit: 2
  }, t.isValid = function (e) {
    return e && void 0 !== e.bit && e.bit >= 0 && e.bit < 4;
  }, t.from = function (e, n) {
    if (t.isValid(e)) return e;

    try {
      return function (e) {
        if ("string" != typeof e) throw new Error("Param is not a string");

        switch (e.toLowerCase()) {
          case "l":
          case "low":
            return t.L;

          case "m":
          case "medium":
            return t.M;

          case "q":
          case "quartile":
            return t.Q;

          case "h":
          case "high":
            return t.H;

          default:
            throw new Error("Unknown EC Level: " + e);
        }
      }(e);
    } catch (e) {
      return n;
    }
  };
});

Sn.L, Sn.M, Sn.Q, Sn.H, Sn.isValid;

function Rn() {
  this.buffer = [], this.length = 0;
}

Rn.prototype = {
  get: function (e) {
    var t = Math.floor(e / 8);
    return 1 == (this.buffer[t] >>> 7 - e % 8 & 1);
  },
  put: function (e, t) {
    for (var n = 0; n < t; n++) this.putBit(1 == (e >>> t - n - 1 & 1));
  },
  getLengthInBits: function () {
    return this.length;
  },
  putBit: function (e) {
    var t = Math.floor(this.length / 8);
    this.buffer.length <= t && this.buffer.push(0), e && (this.buffer[t] |= 128 >>> this.length % 8), this.length++;
  }
};
var kn = Rn;

function Tn(e) {
  if (!e || e < 1) throw new Error("BitMatrix size must be defined and greater than 0");
  this.size = e, this.data = pn(e * e), this.reservedBit = pn(e * e);
}

Tn.prototype.set = function (e, t, n, r) {
  var o = e * this.size + t;
  this.data[o] = n, r && (this.reservedBit[o] = !0);
}, Tn.prototype.get = function (e, t) {
  return this.data[e * this.size + t];
}, Tn.prototype.xor = function (e, t, n) {
  this.data[e * this.size + t] ^= n;
}, Tn.prototype.isReserved = function (e, t) {
  return this.reservedBit[e * this.size + t];
};

var Cn = Tn,
    An = (0, _index2d8aeb.d)(function (e, t) {
  var n = yn;
  t.getRowColCoords = function (e) {
    if (1 === e) return [];

    for (var t = Math.floor(e / 7) + 2, r = n(e), o = 145 === r ? 26 : 2 * Math.ceil((r - 13) / (2 * t - 2)), i = [r - 7], s = 1; s < t - 1; s++) i[s] = i[s - 1] - o;

    return i.push(6), i.reverse();
  }, t.getPositions = function (e) {
    for (var n = [], r = t.getRowColCoords(e), o = r.length, i = 0; i < o; i++) for (var s = 0; s < o; s++) 0 === i && 0 === s || 0 === i && s === o - 1 || i === o - 1 && 0 === s || n.push([r[i], r[s]]);

    return n;
  };
}),
    xn = (An.getRowColCoords, An.getPositions, yn),
    Pn = function (e) {
  var t = xn(e);
  return [[0, 0], [t - 7, 0], [0, t - 7]];
},
    On = (0, _index2d8aeb.d)(function (e, t) {
  t.Patterns = {
    PATTERN000: 0,
    PATTERN001: 1,
    PATTERN010: 2,
    PATTERN011: 3,
    PATTERN100: 4,
    PATTERN101: 5,
    PATTERN110: 6,
    PATTERN111: 7
  };
  var n = 3,
      r = 3,
      o = 40,
      i = 10;

  function s(e, n, r) {
    switch (e) {
      case t.Patterns.PATTERN000:
        return (n + r) % 2 == 0;

      case t.Patterns.PATTERN001:
        return n % 2 == 0;

      case t.Patterns.PATTERN010:
        return r % 3 == 0;

      case t.Patterns.PATTERN011:
        return (n + r) % 3 == 0;

      case t.Patterns.PATTERN100:
        return (Math.floor(n / 2) + Math.floor(r / 3)) % 2 == 0;

      case t.Patterns.PATTERN101:
        return n * r % 2 + n * r % 3 == 0;

      case t.Patterns.PATTERN110:
        return (n * r % 2 + n * r % 3) % 2 == 0;

      case t.Patterns.PATTERN111:
        return (n * r % 3 + (n + r) % 2) % 2 == 0;

      default:
        throw new Error("bad maskPattern:" + e);
    }
  }

  t.isValid = function (e) {
    return null != e && "" !== e && !isNaN(e) && e >= 0 && e <= 7;
  }, t.from = function (e) {
    return t.isValid(e) ? parseInt(e, 10) : void 0;
  }, t.getPenaltyN1 = function (e) {
    for (var t = e.size, r = 0, o = 0, i = 0, s = null, a = null, c = 0; c < t; c++) {
      o = i = 0, s = a = null;

      for (var u = 0; u < t; u++) {
        var l = e.get(c, u);
        l === s ? o++ : (o >= 5 && (r += n + (o - 5)), s = l, o = 1), (l = e.get(u, c)) === a ? i++ : (i >= 5 && (r += n + (i - 5)), a = l, i = 1);
      }

      o >= 5 && (r += n + (o - 5)), i >= 5 && (r += n + (i - 5));
    }

    return r;
  }, t.getPenaltyN2 = function (e) {
    for (var t = e.size, n = 0, o = 0; o < t - 1; o++) for (var i = 0; i < t - 1; i++) {
      var s = e.get(o, i) + e.get(o, i + 1) + e.get(o + 1, i) + e.get(o + 1, i + 1);
      4 !== s && 0 !== s || n++;
    }

    return n * r;
  }, t.getPenaltyN3 = function (e) {
    for (var t = e.size, n = 0, r = 0, i = 0, s = 0; s < t; s++) {
      r = i = 0;

      for (var a = 0; a < t; a++) r = r << 1 & 2047 | e.get(s, a), a >= 10 && (1488 === r || 93 === r) && n++, i = i << 1 & 2047 | e.get(a, s), a >= 10 && (1488 === i || 93 === i) && n++;
    }

    return n * o;
  }, t.getPenaltyN4 = function (e) {
    for (var t = 0, n = e.data.length, r = 0; r < n; r++) t += e.data[r];

    return Math.abs(Math.ceil(100 * t / n / 5) - 10) * i;
  }, t.applyMask = function (e, t) {
    for (var n = t.size, r = 0; r < n; r++) for (var o = 0; o < n; o++) t.isReserved(o, r) || t.xor(o, r, s(e, o, r));
  }, t.getBestMask = function (e, n) {
    for (var r = Object.keys(t.Patterns).length, o = 0, i = 1 / 0, s = 0; s < r; s++) {
      n(s), t.applyMask(s, e);
      var a = t.getPenaltyN1(e) + t.getPenaltyN2(e) + t.getPenaltyN3(e) + t.getPenaltyN4(e);
      t.applyMask(s, e), a < i && (i = a, o = s);
    }

    return o;
  };
}),
    Nn = (On.Patterns, On.isValid, On.getPenaltyN1, On.getPenaltyN2, On.getPenaltyN3, On.getPenaltyN4, On.applyMask, On.getBestMask, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2, 2, 4, 1, 2, 4, 4, 2, 4, 4, 4, 2, 4, 6, 5, 2, 4, 6, 6, 2, 5, 8, 8, 4, 5, 8, 8, 4, 5, 8, 11, 4, 8, 10, 11, 4, 9, 12, 16, 4, 9, 16, 16, 6, 10, 12, 18, 6, 10, 17, 16, 6, 11, 16, 19, 6, 13, 18, 21, 7, 14, 21, 25, 8, 16, 20, 25, 8, 17, 23, 25, 9, 17, 23, 34, 9, 18, 25, 30, 10, 20, 27, 32, 12, 21, 29, 35, 12, 23, 34, 37, 12, 25, 34, 40, 13, 26, 35, 42, 14, 28, 38, 45, 15, 29, 40, 48, 16, 31, 43, 51, 17, 33, 45, 54, 18, 35, 48, 57, 19, 37, 51, 60, 19, 38, 53, 63, 20, 40, 56, 66, 21, 43, 59, 70, 22, 45, 62, 74, 24, 47, 65, 77, 25, 49, 68, 81]),
    Bn = [7, 10, 13, 17, 10, 16, 22, 28, 15, 26, 36, 44, 20, 36, 52, 64, 26, 48, 72, 88, 36, 64, 96, 112, 40, 72, 108, 130, 48, 88, 132, 156, 60, 110, 160, 192, 72, 130, 192, 224, 80, 150, 224, 264, 96, 176, 260, 308, 104, 198, 288, 352, 120, 216, 320, 384, 132, 240, 360, 432, 144, 280, 408, 480, 168, 308, 448, 532, 180, 338, 504, 588, 196, 364, 546, 650, 224, 416, 600, 700, 224, 442, 644, 750, 252, 476, 690, 816, 270, 504, 750, 900, 300, 560, 810, 960, 312, 588, 870, 1050, 336, 644, 952, 1110, 360, 700, 1020, 1200, 390, 728, 1050, 1260, 420, 784, 1140, 1350, 450, 812, 1200, 1440, 480, 868, 1290, 1530, 510, 924, 1350, 1620, 540, 980, 1440, 1710, 570, 1036, 1530, 1800, 570, 1064, 1590, 1890, 600, 1120, 1680, 1980, 630, 1204, 1770, 2100, 660, 1260, 1860, 2220, 720, 1316, 1950, 2310, 750, 1372, 2040, 2430],
    In = function (e, t) {
  switch (t) {
    case Sn.L:
      return Nn[4 * (e - 1) + 0];

    case Sn.M:
      return Nn[4 * (e - 1) + 1];

    case Sn.Q:
      return Nn[4 * (e - 1) + 2];

    case Sn.H:
      return Nn[4 * (e - 1) + 3];

    default:
      return;
  }
},
    Mn = function (e, t) {
  switch (t) {
    case Sn.L:
      return Bn[4 * (e - 1) + 0];

    case Sn.M:
      return Bn[4 * (e - 1) + 1];

    case Sn.Q:
      return Bn[4 * (e - 1) + 2];

    case Sn.H:
      return Bn[4 * (e - 1) + 3];

    default:
      return;
  }
},
    Hn = pn(512),
    Ln = pn(256);

!function () {
  for (var e = 1, t = 0; t < 255; t++) Hn[t] = e, Ln[e] = t, 256 & (e <<= 1) && (e ^= 285);

  for (t = 255; t < 512; t++) Hn[t] = Hn[t - 255];
}();

var Dn = function (e) {
  return Hn[e];
},
    Un = function (e, t) {
  return 0 === e || 0 === t ? 0 : Hn[Ln[e] + Ln[t]];
},
    Gn = (0, _index2d8aeb.d)(function (e, t) {
  t.mul = function (e, t) {
    for (var n = pn(e.length + t.length - 1), r = 0; r < e.length; r++) for (var o = 0; o < t.length; o++) n[r + o] ^= Un(e[r], t[o]);

    return n;
  }, t.mod = function (e, t) {
    for (var n = _n(e); n.length - t.length >= 0;) {
      for (var r = n[0], o = 0; o < t.length; o++) n[o] ^= Un(t[o], r);

      for (var i = 0; i < n.length && 0 === n[i];) i++;

      n = n.slice(i);
    }

    return n;
  }, t.generateECPolynomial = function (e) {
    for (var n = _n([1]), r = 0; r < e; r++) n = t.mul(n, [1, Dn(r)]);

    return n;
  };
}),
    qn = (Gn.mul, Gn.mod, Gn.generateECPolynomial, _crypto_commonjsExternal8b32930c.a.Buffer);

function jn(e) {
  this.genPoly = void 0, this.degree = e, this.degree && this.initialize(this.degree);
}

jn.prototype.initialize = function (e) {
  this.degree = e, this.genPoly = Gn.generateECPolynomial(this.degree);
}, jn.prototype.encode = function (e) {
  if (!this.genPoly) throw new Error("Encoder not initialized");
  var t = pn(this.degree),
      n = qn.concat([e, t], e.length + this.degree),
      r = Gn.mod(n, this.genPoly),
      o = this.degree - r.length;

  if (o > 0) {
    var i = pn(this.degree);
    return r.copy(i, o), i;
  }

  return r;
};

var Kn = jn,
    Fn = function (e) {
  return !isNaN(e) && e >= 1 && e <= 40;
},
    Wn = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+",
    zn = "(?:(?![A-Z0-9 $%*+\\-./:]|" + (Wn = Wn.replace(/u/g, "\\u")) + ")(?:.|[\r\n]))+",
    Vn = new RegExp(Wn, "g"),
    Yn = new RegExp("[^A-Z0-9 $%*+\\-./:]+", "g"),
    Jn = new RegExp(zn, "g"),
    Xn = new RegExp("[0-9]+", "g"),
    $n = new RegExp("[A-Z $%*+\\-./:]+", "g"),
    Qn = new RegExp("^" + Wn + "$"),
    Zn = new RegExp("^[0-9]+$"),
    er = new RegExp("^[A-Z0-9 $%*+\\-./:]+$"),
    tr = {
  KANJI: Vn,
  BYTE_KANJI: Yn,
  BYTE: Jn,
  NUMERIC: Xn,
  ALPHANUMERIC: $n,
  testKanji: function (e) {
    return Qn.test(e);
  },
  testNumeric: function (e) {
    return Zn.test(e);
  },
  testAlphanumeric: function (e) {
    return er.test(e);
  }
},
    nr = (0, _index2d8aeb.d)(function (e, t) {
  t.NUMERIC = {
    id: "Numeric",
    bit: 1,
    ccBits: [10, 12, 14]
  }, t.ALPHANUMERIC = {
    id: "Alphanumeric",
    bit: 2,
    ccBits: [9, 11, 13]
  }, t.BYTE = {
    id: "Byte",
    bit: 4,
    ccBits: [8, 16, 16]
  }, t.KANJI = {
    id: "Kanji",
    bit: 8,
    ccBits: [8, 10, 12]
  }, t.MIXED = {
    bit: -1
  }, t.getCharCountIndicator = function (e, t) {
    if (!e.ccBits) throw new Error("Invalid mode: " + e);
    if (!Fn(t)) throw new Error("Invalid version: " + t);
    return t >= 1 && t < 10 ? e.ccBits[0] : t < 27 ? e.ccBits[1] : e.ccBits[2];
  }, t.getBestModeForData = function (e) {
    return tr.testNumeric(e) ? t.NUMERIC : tr.testAlphanumeric(e) ? t.ALPHANUMERIC : tr.testKanji(e) ? t.KANJI : t.BYTE;
  }, t.toString = function (e) {
    if (e && e.id) return e.id;
    throw new Error("Invalid mode");
  }, t.isValid = function (e) {
    return e && e.bit && e.ccBits;
  }, t.from = function (e, n) {
    if (t.isValid(e)) return e;

    try {
      return function (e) {
        if ("string" != typeof e) throw new Error("Param is not a string");

        switch (e.toLowerCase()) {
          case "numeric":
            return t.NUMERIC;

          case "alphanumeric":
            return t.ALPHANUMERIC;

          case "kanji":
            return t.KANJI;

          case "byte":
            return t.BYTE;

          default:
            throw new Error("Unknown mode: " + e);
        }
      }(e);
    } catch (e) {
      return n;
    }
  };
}),
    rr = (nr.NUMERIC, nr.ALPHANUMERIC, nr.BYTE, nr.KANJI, nr.MIXED, nr.getCharCountIndicator, nr.getBestModeForData, nr.isValid, (0, _index2d8aeb.d)(function (e, t) {
  var n = mn(7973);

  function r(e, t) {
    return nr.getCharCountIndicator(e, t) + 4;
  }

  function o(e, t) {
    var n = 0;
    return e.forEach(function (e) {
      var o = r(e.mode, t);
      n += o + e.getBitsLength();
    }), n;
  }

  t.from = function (e, t) {
    return Fn(e) ? parseInt(e, 10) : t;
  }, t.getCapacity = function (e, t, n) {
    if (!Fn(e)) throw new Error("Invalid QR Code version");
    void 0 === n && (n = nr.BYTE);
    var o = 8 * (vn(e) - Mn(e, t));
    if (n === nr.MIXED) return o;
    var i = o - r(n, e);

    switch (n) {
      case nr.NUMERIC:
        return Math.floor(i / 10 * 3);

      case nr.ALPHANUMERIC:
        return Math.floor(i / 11 * 2);

      case nr.KANJI:
        return Math.floor(i / 13);

      case nr.BYTE:
      default:
        return Math.floor(i / 8);
    }
  }, t.getBestVersionForData = function (e, n) {
    var r,
        i = Sn.from(n, Sn.M);

    if (rn(e)) {
      if (e.length > 1) return function (e, n) {
        for (var r = 1; r <= 40; r++) {
          if (o(e, r) <= t.getCapacity(r, n, nr.MIXED)) return r;
        }
      }(e, i);
      if (0 === e.length) return 1;
      r = e[0];
    } else r = e;

    return function (e, n, r) {
      for (var o = 1; o <= 40; o++) if (n <= t.getCapacity(o, r, e)) return o;
    }(r.mode, r.getLength(), i);
  }, t.getEncodedBits = function (e) {
    if (!Fn(e) || e < 7) throw new Error("Invalid QR Code version");

    for (var t = e << 12; mn(t) - n >= 0;) t ^= 7973 << mn(t) - n;

    return e << 12 | t;
  };
})),
    or = (rr.getCapacity, rr.getBestVersionForData, rr.getEncodedBits, mn(1335)),
    ir = function (e, t) {
  for (var n = e.bit << 3 | t, r = n << 10; mn(r) - or >= 0;) r ^= 1335 << mn(r) - or;

  return 21522 ^ (n << 10 | r);
};

function sr(e) {
  this.mode = nr.NUMERIC, this.data = e.toString();
}

sr.getBitsLength = function (e) {
  return 10 * Math.floor(e / 3) + (e % 3 ? e % 3 * 3 + 1 : 0);
}, sr.prototype.getLength = function () {
  return this.data.length;
}, sr.prototype.getBitsLength = function () {
  return sr.getBitsLength(this.data.length);
}, sr.prototype.write = function (e) {
  var t, n, r;

  for (t = 0; t + 3 <= this.data.length; t += 3) n = this.data.substr(t, 3), r = parseInt(n, 10), e.put(r, 10);

  var o = this.data.length - t;
  o > 0 && (n = this.data.substr(t), r = parseInt(n, 10), e.put(r, 3 * o + 1));
};
var ar = sr,
    cr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", " ", "$", "%", "*", "+", "-", ".", "/", ":"];

function ur(e) {
  this.mode = nr.ALPHANUMERIC, this.data = e;
}

ur.getBitsLength = function (e) {
  return 11 * Math.floor(e / 2) + e % 2 * 6;
}, ur.prototype.getLength = function () {
  return this.data.length;
}, ur.prototype.getBitsLength = function () {
  return ur.getBitsLength(this.data.length);
}, ur.prototype.write = function (e) {
  var t;

  for (t = 0; t + 2 <= this.data.length; t += 2) {
    var n = 45 * cr.indexOf(this.data[t]);
    n += cr.indexOf(this.data[t + 1]), e.put(n, 11);
  }

  this.data.length % 2 && e.put(cr.indexOf(this.data[t]), 6);
};
var lr = ur;

function hr(e) {
  this.mode = nr.BYTE, this.data = _n(e);
}

hr.getBitsLength = function (e) {
  return 8 * e;
}, hr.prototype.getLength = function () {
  return this.data.length;
}, hr.prototype.getBitsLength = function () {
  return hr.getBitsLength(this.data.length);
}, hr.prototype.write = function (e) {
  for (var t = 0, n = this.data.length; t < n; t++) e.put(this.data[t], 8);
};
var fr = hr;

function dr(e) {
  this.mode = nr.KANJI, this.data = e;
}

dr.getBitsLength = function (e) {
  return 13 * e;
}, dr.prototype.getLength = function () {
  return this.data.length;
}, dr.prototype.getBitsLength = function () {
  return dr.getBitsLength(this.data.length);
}, dr.prototype.write = function (e) {
  var t;

  for (t = 0; t < this.data.length; t++) {
    var n = wn(this.data[t]);
    if (n >= 33088 && n <= 40956) n -= 33088;else {
      if (!(n >= 57408 && n <= 60351)) throw new Error("Invalid SJIS character: " + this.data[t] + "\nMake sure your charset is UTF-8");
      n -= 49472;
    }
    n = 192 * (n >>> 8 & 255) + (255 & n), e.put(n, 13);
  }
};

var pr = dr,
    _r = (0, _index2d8aeb.d)(function (e) {
  var t = {
    single_source_shortest_paths: function (e, n, r) {
      var o = {},
          i = {};
      i[n] = 0;
      var s,
          a,
          c,
          u,
          l,
          h,
          f,
          d = t.PriorityQueue.make();

      for (d.push(n, 0); !d.empty();) for (c in a = (s = d.pop()).value, u = s.cost, l = e[a] || {}) l.hasOwnProperty(c) && (h = u + l[c], f = i[c], (void 0 === i[c] || f > h) && (i[c] = h, d.push(c, h), o[c] = a));

      if (void 0 !== r && void 0 === i[r]) {
        var p = ["Could not find a path from ", n, " to ", r, "."].join("");
        throw new Error(p);
      }

      return o;
    },
    extract_shortest_path_from_predecessor_list: function (e, t) {
      for (var n = [], r = t; r;) n.push(r), e[r], r = e[r];

      return n.reverse(), n;
    },
    find_path: function (e, n, r) {
      var o = t.single_source_shortest_paths(e, n, r);
      return t.extract_shortest_path_from_predecessor_list(o, r);
    },
    PriorityQueue: {
      make: function (e) {
        var n,
            r = t.PriorityQueue,
            o = {};

        for (n in e = e || {}, r) r.hasOwnProperty(n) && (o[n] = r[n]);

        return o.queue = [], o.sorter = e.sorter || r.default_sorter, o;
      },
      default_sorter: function (e, t) {
        return e.cost - t.cost;
      },
      push: function (e, t) {
        var n = {
          value: e,
          cost: t
        };
        this.queue.push(n), this.queue.sort(this.sorter);
      },
      pop: function () {
        return this.queue.shift();
      },
      empty: function () {
        return 0 === this.queue.length;
      }
    }
  };
  e.exports = t;
}),
    gr = (0, _index2d8aeb.d)(function (e, t) {
  function n(e) {
    return unescape(encodeURIComponent(e)).length;
  }

  function r(e, t, n) {
    for (var r, o = []; null !== (r = e.exec(n));) o.push({
      data: r[0],
      index: r.index,
      mode: t,
      length: r[0].length
    });

    return o;
  }

  function o(e) {
    var t,
        n,
        o = r(tr.NUMERIC, nr.NUMERIC, e),
        i = r(tr.ALPHANUMERIC, nr.ALPHANUMERIC, e);
    return En() ? (t = r(tr.BYTE, nr.BYTE, e), n = r(tr.KANJI, nr.KANJI, e)) : (t = r(tr.BYTE_KANJI, nr.BYTE, e), n = []), o.concat(i, t, n).sort(function (e, t) {
      return e.index - t.index;
    }).map(function (e) {
      return {
        data: e.data,
        mode: e.mode,
        length: e.length
      };
    });
  }

  function i(e, t) {
    switch (t) {
      case nr.NUMERIC:
        return ar.getBitsLength(e);

      case nr.ALPHANUMERIC:
        return lr.getBitsLength(e);

      case nr.KANJI:
        return pr.getBitsLength(e);

      case nr.BYTE:
        return fr.getBitsLength(e);
    }
  }

  function s(e, t) {
    var n,
        r = nr.getBestModeForData(e);
    if ((n = nr.from(t, r)) !== nr.BYTE && n.bit < r.bit) throw new Error('"' + e + '" cannot be encoded with mode ' + nr.toString(n) + ".\n Suggested mode is: " + nr.toString(r));

    switch (n !== nr.KANJI || En() || (n = nr.BYTE), n) {
      case nr.NUMERIC:
        return new ar(e);

      case nr.ALPHANUMERIC:
        return new lr(e);

      case nr.KANJI:
        return new pr(e);

      case nr.BYTE:
        return new fr(e);
    }
  }

  t.fromArray = function (e) {
    return e.reduce(function (e, t) {
      return "string" == typeof t ? e.push(s(t, null)) : t.data && e.push(s(t.data, t.mode)), e;
    }, []);
  }, t.fromString = function (e, r) {
    for (var s = function (e, t) {
      for (var n = {}, r = {
        start: {}
      }, o = ["start"], s = 0; s < e.length; s++) {
        for (var a = e[s], c = [], u = 0; u < a.length; u++) {
          var l = a[u],
              h = "" + s + u;
          c.push(h), n[h] = {
            node: l,
            lastCount: 0
          }, r[h] = {};

          for (var f = 0; f < o.length; f++) {
            var d = o[f];
            n[d] && n[d].node.mode === l.mode ? (r[d][h] = i(n[d].lastCount + l.length, l.mode) - i(n[d].lastCount, l.mode), n[d].lastCount += l.length) : (n[d] && (n[d].lastCount = l.length), r[d][h] = i(l.length, l.mode) + 4 + nr.getCharCountIndicator(l.mode, t));
          }
        }

        o = c;
      }

      for (f = 0; f < o.length; f++) r[o[f]].end = 0;

      return {
        map: r,
        table: n
      };
    }(function (e) {
      for (var t = [], r = 0; r < e.length; r++) {
        var o = e[r];

        switch (o.mode) {
          case nr.NUMERIC:
            t.push([o, {
              data: o.data,
              mode: nr.ALPHANUMERIC,
              length: o.length
            }, {
              data: o.data,
              mode: nr.BYTE,
              length: o.length
            }]);
            break;

          case nr.ALPHANUMERIC:
            t.push([o, {
              data: o.data,
              mode: nr.BYTE,
              length: o.length
            }]);
            break;

          case nr.KANJI:
            t.push([o, {
              data: o.data,
              mode: nr.BYTE,
              length: n(o.data)
            }]);
            break;

          case nr.BYTE:
            t.push([{
              data: o.data,
              mode: nr.BYTE,
              length: n(o.data)
            }]);
        }
      }

      return t;
    }(o(e, En())), r), a = _r.find_path(s.map, "start", "end"), c = [], u = 1; u < a.length - 1; u++) c.push(s.table[a[u]].node);

    return t.fromArray(function (e) {
      return e.reduce(function (e, t) {
        var n = e.length - 1 >= 0 ? e[e.length - 1] : null;
        return n && n.mode === t.mode ? (e[e.length - 1].data += t.data, e) : (e.push(t), e);
      }, []);
    }(c));
  }, t.rawSplit = function (e) {
    return t.fromArray(o(e, En()));
  };
});

gr.fromArray, gr.fromString, gr.rawSplit;

function yr(e, t, n) {
  var r,
      o,
      i = e.size,
      s = ir(t, n);

  for (r = 0; r < 15; r++) o = 1 == (s >> r & 1), r < 6 ? e.set(r, 8, o, !0) : r < 8 ? e.set(r + 1, 8, o, !0) : e.set(i - 15 + r, 8, o, !0), r < 8 ? e.set(8, i - r - 1, o, !0) : r < 9 ? e.set(8, 15 - r - 1 + 1, o, !0) : e.set(8, 15 - r - 1, o, !0);

  e.set(i - 8, 8, 1, !0);
}

function vr(e, t, n) {
  var r = new kn();
  n.forEach(function (t) {
    r.put(t.mode.bit, 4), r.put(t.getLength(), nr.getCharCountIndicator(t.mode, e)), t.write(r);
  });
  var o = 8 * (vn(e) - Mn(e, t));

  for (r.getLengthInBits() + 4 <= o && r.put(0, 4); r.getLengthInBits() % 8 != 0;) r.putBit(0);

  for (var i = (o - r.getLengthInBits()) / 8, s = 0; s < i; s++) r.put(s % 2 ? 17 : 236, 8);

  return function (e, t, n) {
    for (var r = vn(t), o = Mn(t, n), i = r - o, s = In(t, n), a = s - r % s, c = Math.floor(r / s), u = Math.floor(i / s), l = u + 1, h = c - u, f = new Kn(h), d = 0, p = new Array(s), _ = new Array(s), g = 0, y = _n(e.buffer), v = 0; v < s; v++) {
      var m = v < a ? u : l;
      p[v] = y.slice(d, d + m), _[v] = f.encode(p[v]), d += m, g = Math.max(g, m);
    }

    var b,
        E,
        w = pn(r),
        S = 0;

    for (b = 0; b < g; b++) for (E = 0; E < s; E++) b < p[E].length && (w[S++] = p[E][b]);

    for (b = 0; b < h; b++) for (E = 0; E < s; E++) w[S++] = _[E][b];

    return w;
  }(r, e, t);
}

function mr(e, t, n, r) {
  var o;
  if (rn(e)) o = gr.fromArray(e);else {
    if ("string" != typeof e) throw new Error("Invalid data");
    var i = t;

    if (!i) {
      var s = gr.rawSplit(e);
      i = rr.getBestVersionForData(s, n);
    }

    o = gr.fromString(e, i || 40);
  }
  var a = rr.getBestVersionForData(o, n);
  if (!a) throw new Error("The amount of data is too big to be stored in a QR Code");

  if (t) {
    if (t < a) throw new Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: " + a + ".\n");
  } else t = a;

  var c = vr(t, n, o),
      u = yn(t),
      l = new Cn(u);
  return function (e, t) {
    for (var n = e.size, r = Pn(t), o = 0; o < r.length; o++) for (var i = r[o][0], s = r[o][1], a = -1; a <= 7; a++) if (!(i + a <= -1 || n <= i + a)) for (var c = -1; c <= 7; c++) s + c <= -1 || n <= s + c || (a >= 0 && a <= 6 && (0 === c || 6 === c) || c >= 0 && c <= 6 && (0 === a || 6 === a) || a >= 2 && a <= 4 && c >= 2 && c <= 4 ? e.set(i + a, s + c, !0, !0) : e.set(i + a, s + c, !1, !0));
  }(l, t), function (e) {
    for (var t = e.size, n = 8; n < t - 8; n++) {
      var r = n % 2 == 0;
      e.set(n, 6, r, !0), e.set(6, n, r, !0);
    }
  }(l), function (e, t) {
    for (var n = An.getPositions(t), r = 0; r < n.length; r++) for (var o = n[r][0], i = n[r][1], s = -2; s <= 2; s++) for (var a = -2; a <= 2; a++) -2 === s || 2 === s || -2 === a || 2 === a || 0 === s && 0 === a ? e.set(o + s, i + a, !0, !0) : e.set(o + s, i + a, !1, !0);
  }(l, t), yr(l, n, 0), t >= 7 && function (e, t) {
    for (var n, r, o, i = e.size, s = rr.getEncodedBits(t), a = 0; a < 18; a++) n = Math.floor(a / 3), r = a % 3 + i - 8 - 3, o = 1 == (s >> a & 1), e.set(n, r, o, !0), e.set(r, n, o, !0);
  }(l, t), function (e, t) {
    for (var n = e.size, r = -1, o = n - 1, i = 7, s = 0, a = n - 1; a > 0; a -= 2) for (6 === a && a--;;) {
      for (var c = 0; c < 2; c++) if (!e.isReserved(o, a - c)) {
        var u = !1;
        s < t.length && (u = 1 == (t[s] >>> i & 1)), e.set(o, a - c, u), -1 === --i && (s++, i = 7);
      }

      if ((o += r) < 0 || n <= o) {
        o -= r, r = -r;
        break;
      }
    }
  }(l, c), isNaN(r) && (r = On.getBestMask(l, yr.bind(null, l, n))), On.applyMask(r, l), yr(l, n, r), {
    modules: l,
    version: t,
    errorCorrectionLevel: n,
    maskPattern: r,
    segments: o
  };
}

var br = function (e, t) {
  if (void 0 === e || "" === e) throw new Error("No input text");
  var n,
      r,
      o = Sn.M;
  return void 0 !== t && (o = Sn.from(t.errorCorrectionLevel, Sn.M), n = rr.from(t.version), r = On.from(t.maskPattern), t.toSJISFunc && bn(t.toSJISFunc)), mr(e, n, o, r);
},
    Er = (0, _index2d8aeb.d)(function (e, t) {
  function n(e) {
    if ("number" == typeof e && (e = e.toString()), "string" != typeof e) throw new Error("Color should be defined as hex string");
    var t = e.slice().replace("#", "").split("");
    if (t.length < 3 || 5 === t.length || t.length > 8) throw new Error("Invalid hex color: " + e);
    3 !== t.length && 4 !== t.length || (t = Array.prototype.concat.apply([], t.map(function (e) {
      return [e, e];
    }))), 6 === t.length && t.push("F", "F");
    var n = parseInt(t.join(""), 16);
    return {
      r: n >> 24 & 255,
      g: n >> 16 & 255,
      b: n >> 8 & 255,
      a: 255 & n,
      hex: "#" + t.slice(0, 6).join("")
    };
  }

  t.getOptions = function (e) {
    e || (e = {}), e.color || (e.color = {});
    var t = void 0 === e.margin || null === e.margin || e.margin < 0 ? 4 : e.margin,
        r = e.width && e.width >= 21 ? e.width : void 0,
        o = e.scale || 4;
    return {
      width: r,
      scale: r ? 4 : o,
      margin: t,
      color: {
        dark: n(e.color.dark || "#000000ff"),
        light: n(e.color.light || "#ffffffff")
      },
      type: e.type,
      rendererOpts: e.rendererOpts || {}
    };
  }, t.getScale = function (e, t) {
    return t.width && t.width >= e + 2 * t.margin ? t.width / (e + 2 * t.margin) : t.scale;
  }, t.getImageWidth = function (e, n) {
    var r = t.getScale(e, n);
    return Math.floor((e + 2 * n.margin) * r);
  }, t.qrToImageData = function (e, n, r) {
    for (var o = n.modules.size, i = n.modules.data, s = t.getScale(o, r), a = Math.floor((o + 2 * r.margin) * s), c = r.margin * s, u = [r.color.light, r.color.dark], l = 0; l < a; l++) for (var h = 0; h < a; h++) {
      var f = 4 * (l * a + h),
          d = r.color.light;
      if (l >= c && h >= c && l < a - c && h < a - c) d = u[i[Math.floor((l - c) / s) * o + Math.floor((h - c) / s)] ? 1 : 0];
      e[f++] = d.r, e[f++] = d.g, e[f++] = d.b, e[f] = d.a;
    }
  };
}),
    wr = (Er.getOptions, Er.getScale, Er.getImageWidth, Er.qrToImageData, (0, _index2d8aeb.d)(function (e, t) {
  t.render = function (e, t, n) {
    var r = n,
        o = t;
    void 0 !== r || t && t.getContext || (r = t, t = void 0), t || (o = function () {
      try {
        return document.createElement("canvas");
      } catch (e) {
        throw new Error("You need to specify a canvas element");
      }
    }()), r = Er.getOptions(r);
    var i = Er.getImageWidth(e.modules.size, r),
        s = o.getContext("2d"),
        a = s.createImageData(i, i);
    return Er.qrToImageData(a.data, e, r), function (e, t, n) {
      e.clearRect(0, 0, t.width, t.height), t.style || (t.style = {}), t.height = n, t.width = n, t.style.height = n + "px", t.style.width = n + "px";
    }(s, o, i), s.putImageData(a, 0, 0), o;
  }, t.renderToDataURL = function (e, n, r) {
    var o = r;
    void 0 !== o || n && n.getContext || (o = n, n = void 0), o || (o = {});
    var i = t.render(e, n, o),
        s = o.type || "image/png",
        a = o.rendererOpts || {};
    return i.toDataURL(s, a.quality);
  };
}));

wr.render, wr.renderToDataURL;

function Sr(e, t) {
  var n = e.a / 255,
      r = t + '="' + e.hex + '"';
  return n < 1 ? r + " " + t + '-opacity="' + n.toFixed(2).slice(1) + '"' : r;
}

function Rr(e, t, n) {
  var r = e + t;
  return void 0 !== n && (r += " " + n), r;
}

var kr = function (e, t, n) {
  var r = Er.getOptions(t),
      o = e.modules.size,
      i = e.modules.data,
      s = o + 2 * r.margin,
      a = r.color.light.a ? "<path " + Sr(r.color.light, "fill") + ' d="M0 0h' + s + "v" + s + 'H0z"/>' : "",
      c = "<path " + Sr(r.color.dark, "stroke") + ' d="' + function (e, t, n) {
    for (var r = "", o = 0, i = !1, s = 0, a = 0; a < e.length; a++) {
      var c = Math.floor(a % t),
          u = Math.floor(a / t);
      c || i || (i = !0), e[a] ? (s++, a > 0 && c > 0 && e[a - 1] || (r += i ? Rr("M", c + n, .5 + u + n) : Rr("m", o, 0), o = 0, i = !1), c + 1 < t && e[a + 1] || (r += Rr("h", s), s = 0)) : o++;
    }

    return r;
  }(i, o, r.margin) + '"/>',
      u = 'viewBox="0 0 ' + s + " " + s + '"',
      l = '<svg xmlns="http://www.w3.org/2000/svg" ' + (r.width ? 'width="' + r.width + '" height="' + r.width + '" ' : "") + u + ' shape-rendering="crispEdges">' + a + c + "</svg>\n";

  return "function" == typeof n && n(null, l), l;
};

function Tr(e, t, n, r, o) {
  var i = [].slice.call(arguments, 1),
      s = i.length,
      a = "function" == typeof i[s - 1];
  if (!a && !tn()) throw new Error("Callback required as last argument");

  if (!a) {
    if (s < 1) throw new Error("Too few arguments provided");
    return 1 === s ? (n = t, t = r = void 0) : 2 !== s || t.getContext || (r = n, n = t, t = void 0), new Promise(function (o, i) {
      try {
        var s = br(n, r);
        o(e(s, t, r));
      } catch (e) {
        i(e);
      }
    });
  }

  if (s < 2) throw new Error("Too few arguments provided");
  2 === s ? (o = n, n = t, t = r = void 0) : 3 === s && (t.getContext && void 0 === o ? (o = r, r = void 0) : (o = r, r = n, n = t, t = void 0));

  try {
    var c = br(n, r);
    o(null, e(c, t, r));
  } catch (e) {
    o(e);
  }
}

var Cr = {
  create: br,
  toCanvas: Tr.bind(null, wr.render),
  toDataURL: Tr.bind(null, wr.renderToDataURL),
  toString: Tr.bind(null, function (e, t, n) {
    return kr(e, n);
  })
};

function Ar(e) {
  return e && "object" == typeof e && "default" in e ? e.default : e;
}

var xr = Ar((0, _index2d8aeb.h)(qe)),
    Pr = Ar(Cr);

function Or(e) {
  return en.createElement("a", {
    className: "walletconnect-connect__button",
    href: e.href,
    id: "walletconnect-connect-button-" + e.name,
    onClick: e.onClick,
    rel: "noopener noreferrer",
    style: {
      backgroundColor: e.color
    },
    target: "_blank"
  }, e.name);
}

function Nr(e) {
  var t = e.color,
      n = e.href,
      r = e.name,
      o = e.logo,
      i = e.onClick;
  return en.createElement("a", {
    className: "walletconnect-modal__base__row",
    href: n,
    onClick: i,
    rel: "noopener noreferrer",
    target: "_blank"
  }, en.createElement("h3", {
    className: "walletconnect-modal__base__row__h3"
  }, r), en.createElement("div", {
    className: "walletconnect-modal__base__row__right"
  }, en.createElement("div", {
    className: "walletconnect-modal__base__row__right__app-icon",
    style: {
      background: "url('" + o + "') " + t,
      backgroundSize: "100%"
    }
  }), en.createElement("img", {
    src: "data:image/svg+xml,%3Csvg width='8' height='18' viewBox='0 0 8 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M0.586301 0.213898C0.150354 0.552968 0.0718197 1.18124 0.41089 1.61719L5.2892 7.88931C5.57007 8.25042 5.57007 8.75608 5.2892 9.11719L0.410889 15.3893C0.071819 15.8253 0.150353 16.4535 0.586301 16.7926C1.02225 17.1317 1.65052 17.0531 1.98959 16.6172L6.86791 10.3451C7.7105 9.26174 7.7105 7.74476 6.86791 6.66143L1.98959 0.38931C1.65052 -0.0466374 1.02225 -0.125172 0.586301 0.213898Z' fill='%233C4252'/%3E %3C/svg%3E",
    className: "walletconnect-modal__base__row__right__caret"
  })));
}

function Br(e) {
  var t = e.href.split("?")[0];
  ee.setLocal(ee.deeplinkChoiceKey, Object.assign({}, e, {
    href: t
  }));
}

function Ir(e) {
  var t = ee.isIOS();
  return en.createElement("div", null, en.createElement("p", {
    id: "walletconnect-qrcode-text",
    className: "walletconnect-qrcode__text"
  }, t ? "Choose your preferred wallet" : "Connect to Mobile Wallet"), en.createElement("div", {
    className: "walletconnect-connect__buttons__wrapper" + (!t && "__android")
  }, t ? xr.map(function (t) {
    var n = t.color,
        r = t.name,
        o = t.logo,
        i = function (e, t) {
      var n = encodeURIComponent(e);
      return t.universalLink ? t.universalLink + "/wc?uri=" + n : t.deepLink ? t.deepLink + (t.deepLink.endsWith(":") ? "//" : "/") + "wc?uri=" + n : "";
    }(e.uri, t),
        s = en.useCallback(function () {
      Br({
        name: r,
        href: i
      });
    }, []);

    return en.createElement(Nr, {
      color: n,
      href: i,
      name: r,
      logo: o,
      onClick: s
    });
  }) : en.createElement(Or, {
    name: "Connect",
    color: "rgb(64, 153, 255)",
    href: e.uri,
    onClick: en.useCallback(function () {
      Br({
        name: "Unknown",
        href: e.uri
      });
    }, [])
  })));
}

function Mr(e) {
  var t = en.useState(""),
      n = t[0],
      r = t[1];
  return en.useEffect(function () {
    try {
      return Promise.resolve(function (e) {
        try {
          var t = "";
          return Promise.resolve(Pr.toString(e, {
            type: "svg"
          })).then(function (e) {
            return "string" == typeof e && (t = e.replace("<svg", '<svg class="walletconnect-qrcode__image"')), t;
          });
        } catch (e) {
          return Promise.reject(e);
        }
      }(e.uri)).then(function (e) {
        r(e);
      });
    } catch (e) {
      Promise.reject(e);
    }
  }, []), en.createElement("div", null, en.createElement("p", {
    id: "walletconnect-qrcode-text",
    className: "walletconnect-qrcode__text"
  }, "Scan QR code with a WalletConnect-compatible wallet"), en.createElement("div", {
    dangerouslySetInnerHTML: {
      __html: n
    }
  }));
}

function Hr(e) {
  var t = ee.isMobile(),
      n = en.useState(!t),
      r = n[0],
      o = n[1];
  return en.createElement("div", {
    id: "walletconnect-qrcode-modal",
    className: "walletconnect-qrcode__base animated fadeIn"
  }, en.createElement("div", {
    className: "walletconnect-modal__base"
  }, en.createElement("div", {
    className: "walletconnect-modal__header"
  }, en.createElement("img", {
    src: "data:image/svg+xml,%3C?xml version='1.0' encoding='UTF-8'?%3E %3Csvg width='300px' height='185px' viewBox='0 0 300 185' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E %3C!-- Generator: Sketch 49.3 (51167) - http://www.bohemiancoding.com/sketch --%3E %3Ctitle%3EWalletConnect%3C/title%3E %3Cdesc%3ECreated with Sketch.%3C/desc%3E %3Cdefs%3E%3C/defs%3E %3Cg id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E %3Cg id='walletconnect-logo-alt' fill='%233B99FC' fill-rule='nonzero'%3E %3Cpath d='M61.4385429,36.2562612 C110.349767,-11.6319051 189.65053,-11.6319051 238.561752,36.2562612 L244.448297,42.0196786 C246.893858,44.4140867 246.893858,48.2961898 244.448297,50.690599 L224.311602,70.406102 C223.088821,71.6033071 221.106302,71.6033071 219.883521,70.406102 L211.782937,62.4749541 C177.661245,29.0669724 122.339051,29.0669724 88.2173582,62.4749541 L79.542302,70.9685592 C78.3195204,72.1657633 76.337001,72.1657633 75.1142214,70.9685592 L54.9775265,51.2530561 C52.5319653,48.8586469 52.5319653,44.9765439 54.9775265,42.5821357 L61.4385429,36.2562612 Z M280.206339,77.0300061 L298.128036,94.5769031 C300.573585,96.9713 300.573599,100.85338 298.128067,103.247793 L217.317896,182.368927 C214.872352,184.763353 210.907314,184.76338 208.461736,182.368989 C208.461726,182.368979 208.461714,182.368967 208.461704,182.368957 L151.107561,126.214385 C150.496171,125.615783 149.504911,125.615783 148.893521,126.214385 C148.893517,126.214389 148.893514,126.214393 148.89351,126.214396 L91.5405888,182.368927 C89.095052,184.763359 85.1300133,184.763399 82.6844276,182.369014 C82.6844133,182.369 82.684398,182.368986 82.6843827,182.36897 L1.87196327,103.246785 C-0.573596939,100.852377 -0.573596939,96.9702735 1.87196327,94.5758653 L19.7936929,77.028998 C22.2392531,74.6345898 26.2042918,74.6345898 28.6498531,77.028998 L86.0048306,133.184355 C86.6162214,133.782957 87.6074796,133.782957 88.2188704,133.184355 C88.2188796,133.184346 88.2188878,133.184338 88.2188969,133.184331 L145.571,77.028998 C148.016505,74.6345347 151.981544,74.6344449 154.427161,77.028798 C154.427195,77.0288316 154.427229,77.0288653 154.427262,77.028899 L211.782164,133.184331 C212.393554,133.782932 213.384814,133.782932 213.996204,133.184331 L271.350179,77.0300061 C273.79574,74.6355969 277.760778,74.6355969 280.206339,77.0300061 Z' id='WalletConnect'%3E%3C/path%3E %3C/g%3E %3C/g%3E %3C/svg%3E",
    className: "walletconnect-modal__headerLogo"
  }), en.createElement("p", null, "WalletConnect"), en.createElement("div", {
    className: "walletconnect-modal__close__wrapper",
    onClick: e.onClose
  }, en.createElement("div", {
    id: "walletconnect-qrcode-close",
    className: "walletconnect-modal__close__icon"
  }, en.createElement("div", {
    className: "walletconnect-modal__close__line1"
  }), en.createElement("div", {
    className: "walletconnect-modal__close__line2"
  })))), en.createElement("div", null, r ? en.createElement(Mr, {
    uri: e.uri
  }) : en.createElement(Ir, {
    uri: e.uri
  })), t && en.createElement("div", {
    className: "walletconnect-modal__footer"
  }, en.createElement("a", {
    onClick: function () {
      return o(!r);
    }
  }, r ? "Return to mobile wallet options" : "View QR code instead"))));
}

function Lr() {
  var e = ee.getDocument(),
      t = e.getElementById("walletconnect-qrcode-modal");
  t && (t.className = t.className.replace("fadeIn", "fadeOut"), setTimeout(function () {
    var t = e.getElementById("walletconnect-wrapper");
    t && e.body.removeChild(t);
  }, 300));
}

function Dr(e, t) {
  !function () {
    var e = ee.getDocument(),
        t = e.getElementById("walletconnect-style-sheet");
    t && e.head.removeChild(t);
    var n = e.createElement("style");
    n.setAttribute("id", "walletconnect-style-sheet"), n.innerText = ':root {\n  --animation-duration: 300ms;\n}\n\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n@keyframes fadeOut {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n}\n\n.animated {\n  animation-duration: var(--animation-duration);\n  animation-fill-mode: both;\n}\n\n.fadeIn {\n  animation-name: fadeIn;\n}\n\n.fadeOut {\n  animation-name: fadeOut;\n}\n\n#walletconnect-wrapper {\n  -webkit-user-select: none;\n  align-items: center;\n  display: flex;\n  height: 100%;\n  justify-content: center;\n  left: 0;\n  pointer-events: none;\n  position: fixed;\n  top: 0;\n  user-select: none;\n  width: 100%;\n  z-index: 99999999999999;\n}\n\n.walletconnect-modal__headerLogo {\n  height: 21px;\n}\n\n.walletconnect-modal__header p {\n  color: #ffffff;\n  font-size: 20px;\n  font-weight: 600;\n  margin: 0;\n  align-items: flex-start;\n  display: flex;\n  flex: 1;\n  margin-left: 5px;\n}\n\n.walletconnect-modal__close__wrapper {\n  position: absolute;\n  top: 5px;\n  right: 0px;\n  z-index: 10000;\n  background: white;\n  border-radius: 25px;\n  padding: 6px;\n  box-sizing: border-box;\n  width: 25px;\n  height: 25px;\n  cursor: pointer;\n}\n\n.walletconnect-modal__close__icon {\n  position: relative;\n  top: 6px;\n  right: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transform: rotate(45deg);\n}\n\n.walletconnect-modal__close__line1 {\n  position: absolute;\n  width: 100%;\n  border: 1px solid rgb(48, 52, 59);\n}\n\n.walletconnect-modal__close__line2 {\n  position: absolute;\n  width: 100%;\n  border: 1px solid rgb(48, 52, 59);\n  transform: rotate(90deg);\n}\n\n.walletconnect-qrcode__base {\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  background: rgba(37, 41, 46, 0.95);\n  height: 100%;\n  left: 0;\n  pointer-events: auto;\n  position: fixed;\n  top: 0;\n  transition: 0.4s cubic-bezier(0.19, 1, 0.22, 1);\n  width: 100%;\n  will-change: opacity;\n  padding: 40px;\n  box-sizing: border-box;\n}\n\n.walletconnect-qrcode__text {\n  color: rgba(60, 66, 82, 0.6);\n  font-size: 16px;\n  font-weight: 600;\n  letter-spacing: 0;\n  line-height: 1.1875em;\n  margin: 0 0 19px 0;\n  text-align: center;\n  width: 100%;\n}\n\n.walletconnect-qrcode__image {\n  width: 100%;\n  box-sizing: border-box;\n  /* viewport height minus padding, text height, logo height and margins: */\n  max-height: calc(100vh - (2 * 30px) - 1ex - 52px - (2 * 20px));\n  min-height: 150px;\n}\n\n@media only screen and (max-width: 768px) {\n  .walletconnect-modal__header {\n    height: 130px;\n  }\n  .walletconnect-modal__base {\n    max-height: 70%;\n    overflow: auto;\n  }\n}\n\n@media only screen and (min-device-width: 415px) and (max-width: 768px) {\n  #content {\n    max-width: 768px;\n    box-sizing: border-box;\n  }\n}\n\n@media only screen and (min-width: 375px) and (max-width: 415px) {\n  #content {\n    max-width: 414px;\n    box-sizing: border-box;\n  }\n}\n\n@media only screen and (min-width: 320px) and (max-width: 375px) {\n  #content {\n    max-width: 375px;\n    box-sizing: border-box;\n  }\n}\n\n@media only screen and (max-width: 320px) {\n  #content {\n    max-width: 320px;\n    box-sizing: border-box;\n  }\n}\n\n.walletconnect-modal__base {\n  -webkit-font-smoothing: antialiased;\n  background: #ffffff;\n  border-radius: 24px;\n  box-shadow: 0 10px 50px 5px rgba(0, 0, 0, 0.4);\n  font-family: ui-rounded, "SF Pro Rounded", "SF Pro Text", medium-content-sans-serif-font,\n    -apple-system, BlinkMacSystemFont, ui-sans-serif, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell,\n    "Open Sans", "Helvetica Neue", sans-serif;\n  margin-top: 41px;\n  padding: 24px 24px 22px;\n  pointer-events: auto;\n  position: relative;\n  text-align: center;\n  transition: 0.4s cubic-bezier(0.19, 1, 0.22, 1);\n  will-change: transform;\n  overflow: visible;\n  transform: translateY(-50%);\n  top: 50%;\n  max-width: 500px;\n  margin: auto;\n}\n\n.walletconnect-modal__base .hidden {\n  transform: translateY(150%);\n  transition: 0.125s cubic-bezier(0.4, 0, 1, 1);\n}\n\n.walletconnect-modal__header {\n  align-items: center;\n  display: flex;\n  height: 26px;\n  left: 0;\n  justify-content: space-between;\n  position: absolute;\n  top: -45px;\n  width: 100%;\n}\n\n.walletconnect-modal__base .wc-logo {\n  align-items: center;\n  display: flex;\n  height: 26px;\n  margin-top: 15px;\n  padding-bottom: 15px;\n  pointer-events: auto;\n}\n\n.walletconnect-modal__base .wc-logo div {\n  -webkit-mask: url("images/wc-logo.svg") center no-repeat;\n  background-color: #3399ff;\n  height: 21px;\n  margin-right: 5px;\n  mask-image: url("images/wc-logo.svg") center no-repeat;\n  width: 32px;\n}\n\n.walletconnect-modal__base .wc-logo p {\n  color: #ffffff;\n  font-size: 20px;\n  font-weight: 600;\n  margin: 0;\n}\n\n.walletconnect-modal__base h2 {\n  color: rgba(60, 66, 82, 0.6);\n  font-size: 16px;\n  font-weight: 600;\n  letter-spacing: 0;\n  line-height: 1.1875em;\n  margin: 0 0 19px 0;\n  text-align: center;\n  width: 100%;\n}\n\n.walletconnect-modal__base__row {\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  align-items: center;\n  border-radius: 20px;\n  cursor: pointer;\n  display: flex;\n  height: 56px;\n  justify-content: space-between;\n  padding: 0 15px;\n  position: relative;\n  margin: 0px 0px 8px;\n  text-align: left;\n  transition: 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n  will-change: transform;\n  text-decoration: none;\n}\n\n.walletconnect-modal__base__row:hover {\n  background: rgba(60, 66, 82, 0.06);\n}\n\n.walletconnect-modal__base__row:active {\n  background: rgba(60, 66, 82, 0.06);\n  transform: scale(0.975);\n  transition: 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n}\n\n.walletconnect-modal__base__row__h3 {\n  color: #25292e;\n  font-size: 20px;\n  font-weight: 700;\n  margin: 0;\n  padding: 0 42px 3px 0;\n}\n\n.walletconnect-modal__base__row__right {\n  align-items: center;\n  display: flex;\n  justify-content: center;\n}\n\n.walletconnect-modal__base__row__right__app-icon {\n  border-radius: 8px;\n  height: 34px;\n  margin: 0 11px 2px 0;\n  width: 34px;\n  background-size: 100%;\n  box-shadow: 0 4px 12px 0 rgba(37, 41, 46, 0.25);\n}\n\n.walletconnect-modal__base__row__right__caret {\n  height: 18px;\n  opacity: 0.3;\n  transition: 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n  width: 8px;\n  will-change: opacity;\n}\n\n.walletconnect-modal__base__row:hover .caret,\n.walletconnect-modal__base__row:active .caret {\n  opacity: 0.6;\n}\n\n.walletconnect-modal__footer {\n  margin-top: 20px;\n}\n\n.walletconnect-modal__footer a {\n  color: #898d97;\n  font-size: 15px;\n}\n\n.walletconnect-connect__buttons__wrapper__android {\n  margin: 60px 0;\n}\n\n.walletconnect-connect__button {\n  background-color: rgb(64, 153, 255);\n  padding: 12px;\n  border-radius: 8px;\n  text-decoration: none;\n  color: rgb(255, 255, 255);\n  font-weight: 500;\n}\n', e.head.appendChild(n);
  }();

  var n = function () {
    var e = ee.getDocument(),
        t = e.createElement("div");
    return t.setAttribute("id", "walletconnect-wrapper"), e.body.appendChild(t), t;
  }(),
      r = function (e) {
    return function () {
      Lr(), e && e();
    };
  }(t);

  en.render(en.createElement(Hr, {
    uri: e,
    onClose: r
  }), n);
}

var Ur = function () {
  return "undefined" != typeof process && void 0 !== process.versions && void 0 !== process.versions.node;
};

var Gr = {
  open: function (e, t) {
    Ur() ? function (e) {
      Pr.toString(e, {
        type: "terminal"
      }).then(console.log);
    }(e) : Dr(e, t);
  },
  close: function () {
    Ur() || Lr();
  }
},
    qr = (0, _index2d8aeb.d)(function (e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  });

  var n = function (e) {
    this.type = e, this.bubbles = !1, this.cancelable = !1, this.loaded = 0, this.lengthComputable = !1, this.total = 0;
  };

  t.ProgressEvent = n;
});
(0, _index2d8aeb.e)(qr);
qr.ProgressEvent;
var jr = (0, _index2d8aeb.d)(function (e, t) {
  var r,
      o = _index2d8aeb.f && _index2d8aeb.f.__extends || (r = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (e, t) {
    e.__proto__ = t;
  } || function (e, t) {
    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
  }, function (e, t) {
    function n() {
      this.constructor = e;
    }

    r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
  });
  Object.defineProperty(t, "__esModule", {
    value: !0
  });

  var i = function (e) {
    function t() {
      return null !== e && e.apply(this, arguments) || this;
    }

    return o(t, e), t;
  }(Error);

  t.SecurityError = i;

  var s = function (e) {
    function t() {
      return null !== e && e.apply(this, arguments) || this;
    }

    return o(t, e), t;
  }(Error);

  t.InvalidStateError = s;

  var a = function (e) {
    function t() {
      return null !== e && e.apply(this, arguments) || this;
    }

    return o(t, e), t;
  }(Error);

  t.NetworkError = a;

  var c = function (e) {
    function t() {
      return null !== e && e.apply(this, arguments) || this;
    }

    return o(t, e), t;
  }(Error);

  t.SyntaxError = c;
});
(0, _index2d8aeb.e)(jr);
jr.SecurityError, jr.InvalidStateError, jr.NetworkError, jr.SyntaxError;
var Kr = (0, _index2d8aeb.d)(function (e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  });

  var n = function () {
    function e() {
      this.listeners = {};
    }

    return e.prototype.addEventListener = function (e, t) {
      e = e.toLowerCase(), this.listeners[e] = this.listeners[e] || [], this.listeners[e].push(t.handleEvent || t);
    }, e.prototype.removeEventListener = function (e, t) {
      if (e = e.toLowerCase(), this.listeners[e]) {
        var n = this.listeners[e].indexOf(t.handleEvent || t);
        n < 0 || this.listeners[e].splice(n, 1);
      }
    }, e.prototype.dispatchEvent = function (e) {
      var t = e.type.toLowerCase();
      if (e.target = this, this.listeners[t]) for (var n = 0, r = this.listeners[t]; n < r.length; n++) {
        r[n].call(this, e);
      }
      var o = this["on" + t];
      return o && o.call(this, e), !0;
    }, e;
  }();

  t.XMLHttpRequestEventTarget = n;
});
(0, _index2d8aeb.e)(Kr);
Kr.XMLHttpRequestEventTarget;
var Fr = (0, _index2d8aeb.d)(function (e, t) {
  var r,
      o = _index2d8aeb.f && _index2d8aeb.f.__extends || (r = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (e, t) {
    e.__proto__ = t;
  } || function (e, t) {
    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
  }, function (e, t) {
    function n() {
      this.constructor = e;
    }

    r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
  });
  Object.defineProperty(t, "__esModule", {
    value: !0
  });

  var i = function (e) {
    function t() {
      var t = e.call(this) || this;
      return t._contentType = null, t._body = null, t._reset(), t;
    }

    return o(t, e), t.prototype._reset = function () {
      this._contentType = null, this._body = null;
    }, t.prototype._setData = function (e) {
      if (null != e) if ("string" == typeof e) 0 !== e.length && (this._contentType = "text/plain;charset=UTF-8"), this._body = new Buffer(e, "utf-8");else if (Buffer.isBuffer(e)) this._body = e;else if (e instanceof ArrayBuffer) {
        for (var t = new Buffer(e.byteLength), n = new Uint8Array(e), r = 0; r < e.byteLength; r++) t[r] = n[r];

        this._body = t;
      } else {
        if (!(e.buffer && e.buffer instanceof ArrayBuffer)) throw new Error("Unsupported send() data " + e);
        t = new Buffer(e.byteLength);
        var o = e.byteOffset;

        for (n = new Uint8Array(e.buffer), r = 0; r < e.byteLength; r++) t[r] = n[r + o];

        this._body = t;
      }
    }, t.prototype._finalizeHeaders = function (e, t) {
      this._contentType && !t["content-type"] && (e["Content-Type"] = this._contentType), this._body && (e["Content-Length"] = this._body.length.toString());
    }, t.prototype._startUpload = function (e) {
      this._body && e.write(this._body), e.end();
    }, t;
  }(Kr.XMLHttpRequestEventTarget);

  t.XMLHttpRequestUpload = i;
});
(0, _index2d8aeb.e)(Fr);
Fr.XMLHttpRequestUpload;
var Wr = (0, _index2d8aeb.d)(function (e, t) {
  !function () {
    function e(t, n, r, o) {
      return this instanceof e ? (this.domain = t || void 0, this.path = n || "/", this.secure = !!r, this.script = !!o, this) : new e(t, n, r, o);
    }

    function n(e, t, r) {
      return e instanceof n ? e : this instanceof n ? (this.name = null, this.value = null, this.expiration_date = 1 / 0, this.path = String(r || "/"), this.explicit_path = !1, this.domain = t || null, this.explicit_domain = !1, this.secure = !1, this.noscript = !1, e && this.parse(e, t, r), this) : new n(e, t, r);
    }

    e.All = Object.freeze(Object.create(null)), t.CookieAccessInfo = e, t.Cookie = n, n.prototype.toString = function () {
      var e = [this.name + "=" + this.value];
      return this.expiration_date !== 1 / 0 && e.push("expires=" + new Date(this.expiration_date).toGMTString()), this.domain && e.push("domain=" + this.domain), this.path && e.push("path=" + this.path), this.secure && e.push("secure"), this.noscript && e.push("httponly"), e.join("; ");
    }, n.prototype.toValueString = function () {
      return this.name + "=" + this.value;
    };
    var r = /[:](?=\s*[a-zA-Z0-9_\-]+\s*[=])/g;

    function o() {
      var e, t;
      return this instanceof o ? (e = Object.create(null), this.setCookie = function (r, o, i) {
        var s, a;

        if (s = (r = new n(r, o, i)).expiration_date <= Date.now(), void 0 !== e[r.name]) {
          for (t = e[r.name], a = 0; a < t.length; a += 1) if (t[a].collidesWith(r)) return s ? (t.splice(a, 1), 0 === t.length && delete e[r.name], !1) : (t[a] = r, r);

          return !s && (t.push(r), r);
        }

        return !s && (e[r.name] = [r], e[r.name]);
      }, this.getCookie = function (n, r) {
        var o, i;
        if (t = e[n]) for (i = 0; i < t.length; i += 1) if ((o = t[i]).expiration_date <= Date.now()) 0 === t.length && delete e[o.name];else if (o.matches(r)) return o;
      }, this.getCookies = function (t) {
        var n,
            r,
            o = [];

        for (n in e) (r = this.getCookie(n, t)) && o.push(r);

        return o.toString = function () {
          return o.join(":");
        }, o.toValueString = function () {
          return o.map(function (e) {
            return e.toValueString();
          }).join(";");
        }, o;
      }, this) : new o();
    }

    n.prototype.parse = function (e, t, r) {
      if (this instanceof n) {
        var o,
            i = e.split(";").filter(function (e) {
          return !!e;
        }),
            s = i[0].match(/([^=]+)=([\s\S]*)/);
        if (!s) return void console.warn("Invalid cookie header encountered. Header: '" + e + "'");
        var a = s[1],
            c = s[2];
        if ("string" != typeof a || 0 === a.length || "string" != typeof c) return void console.warn("Unable to extract values from cookie header. Cookie: '" + e + "'");

        for (this.name = a, this.value = c, o = 1; o < i.length; o += 1) switch (a = (s = i[o].match(/([^=]+)(?:=([\s\S]*))?/))[1].trim().toLowerCase(), c = s[2], a) {
          case "httponly":
            this.noscript = !0;
            break;

          case "expires":
            this.expiration_date = c ? Number(Date.parse(c)) : 1 / 0;
            break;

          case "path":
            this.path = c ? c.trim() : "", this.explicit_path = !0;
            break;

          case "domain":
            this.domain = c ? c.trim() : "", this.explicit_domain = !!this.domain;
            break;

          case "secure":
            this.secure = !0;
        }

        return this.explicit_path || (this.path = r || "/"), this.explicit_domain || (this.domain = t), this;
      }

      return new n().parse(e, t, r);
    }, n.prototype.matches = function (t) {
      return t === e.All || !(this.noscript && t.script || this.secure && !t.secure || !this.collidesWith(t));
    }, n.prototype.collidesWith = function (e) {
      if (this.path && !e.path || this.domain && !e.domain) return !1;
      if (this.path && 0 !== e.path.indexOf(this.path)) return !1;
      if (this.explicit_path && 0 !== e.path.indexOf(this.path)) return !1;
      var t = e.domain && e.domain.replace(/^[\.]/, ""),
          n = this.domain && this.domain.replace(/^[\.]/, "");
      if (n === t) return !0;

      if (n) {
        if (!this.explicit_domain) return !1;
        var r = t.indexOf(n);
        return -1 !== r && r === t.length - n.length;
      }

      return !0;
    }, t.CookieJar = o, o.prototype.setCookies = function (e, t, o) {
      var i,
          s,
          a = [];

      for (e = (e = Array.isArray(e) ? e : e.split(r)).map(function (e) {
        return new n(e, t, o);
      }), i = 0; i < e.length; i += 1) s = e[i], this.setCookie(s, t, o) && a.push(s);

      return a;
    };
  }();
}),
    zr = (Wr.CookieAccessInfo, Wr.Cookie, Wr.CookieJar, (0, _index2d8aeb.d)(function (e, t) {
  var r,
      o = _index2d8aeb.f && _index2d8aeb.f.__extends || (r = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (e, t) {
    e.__proto__ = t;
  } || function (e, t) {
    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
  }, function (e, t) {
    function n() {
      this.constructor = e;
    }

    r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
  }),
      i = _index2d8aeb.f && _index2d8aeb.f.__assign || Object.assign || function (e) {
    for (var t, n = 1, r = arguments.length; n < r; n++) for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);

    return e;
  };

  Object.defineProperty(t, "__esModule", {
    value: !0
  });

  var s = function (e) {
    function t(n) {
      void 0 === n && (n = {});
      var r = e.call(this) || this;
      return r.UNSENT = t.UNSENT, r.OPENED = t.OPENED, r.HEADERS_RECEIVED = t.HEADERS_RECEIVED, r.LOADING = t.LOADING, r.DONE = t.DONE, r.onreadystatechange = null, r.readyState = t.UNSENT, r.response = null, r.responseText = "", r.responseType = "", r.status = 0, r.statusText = "", r.timeout = 0, r.upload = new Fr.XMLHttpRequestUpload(), r.responseUrl = "", r.withCredentials = !1, r._method = null, r._url = null, r._sync = !1, r._headers = {}, r._loweredHeaders = {}, r._mimeOverride = null, r._request = null, r._response = null, r._responseParts = null, r._responseHeaders = null, r._aborting = null, r._error = null, r._loadedBytes = 0, r._totalBytes = 0, r._lengthComputable = !1, r._restrictedMethods = {
        CONNECT: !0,
        TRACE: !0,
        TRACK: !0
      }, r._restrictedHeaders = {
        "accept-charset": !0,
        "accept-encoding": !0,
        "access-control-request-headers": !0,
        "access-control-request-method": !0,
        connection: !0,
        "content-length": !0,
        cookie: !0,
        cookie2: !0,
        date: !0,
        dnt: !0,
        expect: !0,
        host: !0,
        "keep-alive": !0,
        origin: !0,
        referer: !0,
        te: !0,
        trailer: !0,
        "transfer-encoding": !0,
        upgrade: !0,
        "user-agent": !0,
        via: !0
      }, r._privateHeaders = {
        "set-cookie": !0,
        "set-cookie2": !0
      }, r._userAgent = "Mozilla/5.0 (" + _os.default.type() + " " + _os.default.arch() + ") node.js/" + process.versions.node + " v8/" + process.versions.v8, r._anonymous = n.anon || !1, r;
    }

    return o(t, e), t.prototype.open = function (e, n, r, o, i) {
      if (void 0 === r && (r = !0), e = e.toUpperCase(), this._restrictedMethods[e]) throw new t.SecurityError("HTTP method " + e + " is not allowed in XHR");

      var s = this._parseUrl(n, o, i);

      this.readyState === t.HEADERS_RECEIVED || (this.readyState, t.LOADING), this._method = e, this._url = s, this._sync = !r, this._headers = {}, this._loweredHeaders = {}, this._mimeOverride = null, this._setReadyState(t.OPENED), this._request = null, this._response = null, this.status = 0, this.statusText = "", this._responseParts = [], this._responseHeaders = null, this._loadedBytes = 0, this._totalBytes = 0, this._lengthComputable = !1;
    }, t.prototype.setRequestHeader = function (e, n) {
      if (this.readyState !== t.OPENED) throw new t.InvalidStateError("XHR readyState must be OPENED");
      var r = e.toLowerCase();
      this._restrictedHeaders[r] || /^sec-/.test(r) || /^proxy-/.test(r) ? console.warn('Refused to set unsafe header "' + e + '"') : (n = n.toString(), null != this._loweredHeaders[r] ? (e = this._loweredHeaders[r], this._headers[e] = this._headers[e] + ", " + n) : (this._loweredHeaders[r] = e, this._headers[e] = n));
    }, t.prototype.send = function (e) {
      if (this.readyState !== t.OPENED) throw new t.InvalidStateError("XHR readyState must be OPENED");
      if (this._request) throw new t.InvalidStateError("send() already called");

      switch (this._url.protocol) {
        case "file:":
          return this._sendFile(e);

        case "http:":
        case "https:":
          return this._sendHttp(e);

        default:
          throw new t.NetworkError("Unsupported protocol " + this._url.protocol);
      }
    }, t.prototype.abort = function () {
      null != this._request && (this._request.abort(), this._setError(), this._dispatchProgress("abort"), this._dispatchProgress("loadend"));
    }, t.prototype.getResponseHeader = function (e) {
      if (null == this._responseHeaders || null == e) return null;
      var t = e.toLowerCase();
      return this._responseHeaders.hasOwnProperty(t) ? this._responseHeaders[e.toLowerCase()] : null;
    }, t.prototype.getAllResponseHeaders = function () {
      var e = this;
      return null == this._responseHeaders ? "" : Object.keys(this._responseHeaders).map(function (t) {
        return t + ": " + e._responseHeaders[t];
      }).join("\r\n");
    }, t.prototype.overrideMimeType = function (e) {
      if (this.readyState === t.LOADING || this.readyState === t.DONE) throw new t.InvalidStateError("overrideMimeType() not allowed in LOADING or DONE");
      this._mimeOverride = e.toLowerCase();
    }, t.prototype.nodejsSet = function (e) {
      if (this.nodejsHttpAgent = e.httpAgent || this.nodejsHttpAgent, this.nodejsHttpsAgent = e.httpsAgent || this.nodejsHttpsAgent, e.hasOwnProperty("baseUrl")) {
        if (null != e.baseUrl) if (!_url_commonjsExternalCa.u.parse(e.baseUrl, !1, !0).protocol) throw new t.SyntaxError("baseUrl must be an absolute URL");
        this.nodejsBaseUrl = e.baseUrl;
      }
    }, t.nodejsSet = function (e) {
      t.prototype.nodejsSet(e);
    }, t.prototype._setReadyState = function (e) {
      this.readyState = e, this.dispatchEvent(new qr.ProgressEvent("readystatechange"));
    }, t.prototype._sendFile = function (e) {
      throw new Error("Protocol file: not implemented");
    }, t.prototype._sendHttp = function (e) {
      if (this._sync) throw new Error("Synchronous XHR processing not implemented");
      !e || "GET" !== this._method && "HEAD" !== this._method ? e = e || "" : (console.warn("Discarding entity body for " + this._method + " requests"), e = null), this.upload._setData(e), this._finalizeHeaders(), this._sendHxxpRequest();
    }, t.prototype._sendHxxpRequest = function () {
      var e = this;

      if (this.withCredentials) {
        var n = t.cookieJar.getCookies(Wr.CookieAccessInfo(this._url.hostname, this._url.pathname, "https:" === this._url.protocol)).toValueString();
        this._headers.cookie = this._headers.cookie2 = n;
      }

      var r = "http:" === this._url.protocol ? [_http.default, this.nodejsHttpAgent] : [_https.default, this.nodejsHttpsAgent],
          o = r[0],
          i = r[1],
          s = o.request.bind(o)({
        hostname: this._url.hostname,
        port: +this._url.port,
        path: this._url.path,
        auth: this._url.auth,
        method: this._method,
        headers: this._headers,
        agent: i
      });
      this._request = s, this.timeout && s.setTimeout(this.timeout, function () {
        return e._onHttpTimeout(s);
      }), s.on("response", function (t) {
        return e._onHttpResponse(s, t);
      }), s.on("error", function (t) {
        return e._onHttpRequestError(s, t);
      }), this.upload._startUpload(s), this._request === s && this._dispatchProgress("loadstart");
    }, t.prototype._finalizeHeaders = function () {
      this._headers = i({}, this._headers, {
        Connection: "keep-alive",
        Host: this._url.host,
        "User-Agent": this._userAgent
      }, this._anonymous ? {
        Referer: "about:blank"
      } : {}), this.upload._finalizeHeaders(this._headers, this._loweredHeaders);
    }, t.prototype._onHttpResponse = function (e, n) {
      var r = this;

      if (this._request === e) {
        if (this.withCredentials && (n.headers["set-cookie"] || n.headers["set-cookie2"]) && t.cookieJar.setCookies(n.headers["set-cookie"] || n.headers["set-cookie2"]), [301, 302, 303, 307, 308].indexOf(n.statusCode) >= 0) return this._url = this._parseUrl(n.headers.location), this._method = "GET", this._loweredHeaders["content-type"] && (delete this._headers[this._loweredHeaders["content-type"]], delete this._loweredHeaders["content-type"]), null != this._headers["Content-Type"] && delete this._headers["Content-Type"], delete this._headers["Content-Length"], this.upload._reset(), this._finalizeHeaders(), void this._sendHxxpRequest();
        this._response = n, this._response.on("data", function (e) {
          return r._onHttpResponseData(n, e);
        }), this._response.on("end", function () {
          return r._onHttpResponseEnd(n);
        }), this._response.on("close", function () {
          return r._onHttpResponseClose(n);
        }), this.responseUrl = this._url.href.split("#")[0], this.status = n.statusCode, this.statusText = _http.default.STATUS_CODES[this.status], this._parseResponseHeaders(n);
        var o = this._responseHeaders["content-length"] || "";
        this._totalBytes = +o, this._lengthComputable = !!o, this._setReadyState(t.HEADERS_RECEIVED);
      }
    }, t.prototype._onHttpResponseData = function (e, n) {
      this._response === e && (this._responseParts.push(new Buffer(n)), this._loadedBytes += n.length, this.readyState !== t.LOADING && this._setReadyState(t.LOADING), this._dispatchProgress("progress"));
    }, t.prototype._onHttpResponseEnd = function (e) {
      this._response === e && (this._parseResponse(), this._request = null, this._response = null, this._setReadyState(t.DONE), this._dispatchProgress("load"), this._dispatchProgress("loadend"));
    }, t.prototype._onHttpResponseClose = function (e) {
      if (this._response === e) {
        var n = this._request;
        this._setError(), n.abort(), this._setReadyState(t.DONE), this._dispatchProgress("error"), this._dispatchProgress("loadend");
      }
    }, t.prototype._onHttpTimeout = function (e) {
      this._request === e && (this._setError(), e.abort(), this._setReadyState(t.DONE), this._dispatchProgress("timeout"), this._dispatchProgress("loadend"));
    }, t.prototype._onHttpRequestError = function (e, n) {
      this._request === e && (this._setError(), e.abort(), this._setReadyState(t.DONE), this._dispatchProgress("error"), this._dispatchProgress("loadend"));
    }, t.prototype._dispatchProgress = function (e) {
      var n = new t.ProgressEvent(e);
      n.lengthComputable = this._lengthComputable, n.loaded = this._loadedBytes, n.total = this._totalBytes, this.dispatchEvent(n);
    }, t.prototype._setError = function () {
      this._request = null, this._response = null, this._responseHeaders = null, this._responseParts = null;
    }, t.prototype._parseUrl = function (e, t, n) {
      var r = null == this.nodejsBaseUrl ? e : _url_commonjsExternalCa.u.resolve(this.nodejsBaseUrl, e),
          o = _url_commonjsExternalCa.u.parse(r, !1, !0);

      o.hash = null;
      var i = (o.auth || "").split(":"),
          s = i[0],
          a = i[1];
      return (s || a || t || n) && (o.auth = (t || s || "") + ":" + (n || a || "")), o;
    }, t.prototype._parseResponseHeaders = function (e) {
      for (var t in this._responseHeaders = {}, e.headers) {
        var n = t.toLowerCase();
        this._privateHeaders[n] || (this._responseHeaders[n] = e.headers[t]);
      }

      null != this._mimeOverride && (this._responseHeaders["content-type"] = this._mimeOverride);
    }, t.prototype._parseResponse = function () {
      var e = Buffer.concat(this._responseParts);

      switch (this._responseParts = null, this.responseType) {
        case "json":
          this.responseText = null;

          try {
            this.response = JSON.parse(e.toString("utf-8"));
          } catch (e) {
            this.response = null;
          }

          return;

        case "buffer":
          return this.responseText = null, void (this.response = e);

        case "arraybuffer":
          this.responseText = null;

          for (var t = new ArrayBuffer(e.length), n = new Uint8Array(t), r = 0; r < e.length; r++) n[r] = e[r];

          return void (this.response = t);

        case "text":
        default:
          try {
            this.responseText = e.toString(this._parseResponseEncoding());
          } catch (t) {
            this.responseText = e.toString("binary");
          }

          this.response = this.responseText;
      }
    }, t.prototype._parseResponseEncoding = function () {
      return /;\s*charset=(.*)$/.exec(this._responseHeaders["content-type"] || "")[1] || "utf-8";
    }, t.ProgressEvent = qr.ProgressEvent, t.InvalidStateError = jr.InvalidStateError, t.NetworkError = jr.NetworkError, t.SecurityError = jr.SecurityError, t.SyntaxError = jr.SyntaxError, t.XMLHttpRequestUpload = Fr.XMLHttpRequestUpload, t.UNSENT = 0, t.OPENED = 1, t.HEADERS_RECEIVED = 2, t.LOADING = 3, t.DONE = 4, t.cookieJar = Wr.CookieJar(), t;
  }(Kr.XMLHttpRequestEventTarget);

  t.XMLHttpRequest = s, s.prototype.nodejsHttpAgent = _http.default.globalAgent, s.prototype.nodejsHttpsAgent = _https.default.globalAgent, s.prototype.nodejsBaseUrl = null;
}));
(0, _index2d8aeb.e)(zr);
zr.XMLHttpRequest;
var Vr = (0, _index2d8aeb.d)(function (e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), function (e) {
    for (var n in e) t.hasOwnProperty(n) || (t[n] = e[n]);
  }(zr), t.XMLHttpRequestEventTarget = Kr.XMLHttpRequestEventTarget;
});
(0, _index2d8aeb.e)(Vr);
Vr.XMLHttpRequestEventTarget;
var Yr = (0, _index2d8aeb.d)(function (e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  });

  const n = _url_commonjsExternalCa.t.__importDefault(_index2d8aeb.r),
        r = ee.unsafeGetFromWindow("XMLHttpRequest") || Vr.XMLHttpRequest;

  class i extends n.default {
    constructor(e) {
      super(), this.url = e;
    }

    formatError(e, t, n = -1) {
      return {
        error: {
          message: t,
          code: n
        },
        id: e.id,
        jsonrpc: e.jsonrpc
      };
    }

    send(e, t) {
      return new Promise(n => {
        if ("eth_subscribe" === e.method) {
          const t = this.formatError(e, "Subscriptions are not supported by this HTTP endpoint");
          return this.emit("error", t), n(t);
        }

        const o = new r();
        let i = !1;

        const s = (r, s) => {
          if (!i) if (o.abort(), i = !0, t) t(r, s);else {
            const {
              id: t,
              jsonrpc: o
            } = e,
                  i = r ? {
              id: t,
              jsonrpc: o,
              error: {
                message: r.message,
                code: r.code
              }
            } : {
              id: t,
              jsonrpc: o,
              result: s
            };
            this.emit("payload", i), n(i);
          }
        };

        o.open("POST", this.url, !0), o.setRequestHeader("Content-Type", "application/json"), o.timeout = 6e4, o.onerror = s, o.ontimeout = s, o.onreadystatechange = () => {
          if (4 === o.readyState) try {
            const e = JSON.parse(o.responseText);
            s(e.error, e.result);
          } catch (e) {
            s(e);
          }
        }, o.send(JSON.stringify(e));
      });
    }

  }

  t.default = i;
});
(0, _index2d8aeb.e)(Yr);
const Jr = _index2d8aeb.r.EventEmitter,
      Xr = _subscriptionManagerB429be9d.r.inherits;
var $r = Qr;

function Qr() {
  Jr.call(this), this.isLocked = !0;
}

Xr(Qr, Jr), Qr.prototype.go = function () {
  this.isLocked = !1, this.emit("unlock");
}, Qr.prototype.stop = function () {
  this.isLocked = !0, this.emit("lock");
}, Qr.prototype.await = function (e) {
  const t = this;
  t.isLocked ? t.once("unlock", e) : setTimeout(e);
};

var Zr = function (e) {
  var t = eo(e);
  if (t >= e.params.length) return null;
  return e.params[t];
};

function eo(e) {
  switch (e.method) {
    case "eth_getStorageAt":
      return 2;

    case "eth_getBalance":
    case "eth_getCode":
    case "eth_getTransactionCount":
    case "eth_call":
    case "eth_estimateGas":
      return 1;

    case "eth_getBlockByNumber":
      return 0;

    default:
      return;
  }
}

var to = function () {
  var e = new Date().getTime() * Math.pow(10, 3),
      t = Math.floor(Math.random() * Math.pow(10, 3));
  return e + t;
};

var no = function (e) {
  return (0, _subscriptionManagerB429be9d.e)({
    id: to(),
    jsonrpc: "2.0",
    params: []
  }, e);
};

const ro = _index2d8aeb.r.EventEmitter,
      oo = _subscriptionManagerB429be9d.r.inherits,
      io = function () {};

var so = ao;

function ao(e) {
  ro.call(this), this.setMaxListeners(30), e = e || {};
  const t = {
    sendAsync: this._handleAsync.bind(this)
  },
        n = e.blockTrackerProvider || t;
  this._blockTracker = e.blockTracker || new _subscriptionManagerB429be9d.E({
    provider: n,
    pollingInterval: e.pollingInterval || 4e3,
    setSkipCacheFlag: !0
  }), this._ready = new $r(), this.currentBlock = null, this._providers = [];
}

oo(ao, ro), ao.prototype.start = function (e = io) {
  const t = this;
  t._ready.go(), t._blockTracker.on("latest", e => {
    t._getBlockByNumberWithRetry(e, (e, n) => {
      if (e) return void this.emit("error", e);
      if (!n) return console.log(n), void this.emit("error", new Error("Could not find block"));
      const r = (o = n, {
        number: _subscriptionManagerB429be9d.a.toBuffer(o.number),
        hash: _subscriptionManagerB429be9d.a.toBuffer(o.hash),
        parentHash: _subscriptionManagerB429be9d.a.toBuffer(o.parentHash),
        nonce: _subscriptionManagerB429be9d.a.toBuffer(o.nonce),
        mixHash: _subscriptionManagerB429be9d.a.toBuffer(o.mixHash),
        sha3Uncles: _subscriptionManagerB429be9d.a.toBuffer(o.sha3Uncles),
        logsBloom: _subscriptionManagerB429be9d.a.toBuffer(o.logsBloom),
        transactionsRoot: _subscriptionManagerB429be9d.a.toBuffer(o.transactionsRoot),
        stateRoot: _subscriptionManagerB429be9d.a.toBuffer(o.stateRoot),
        receiptsRoot: _subscriptionManagerB429be9d.a.toBuffer(o.receiptRoot || o.receiptsRoot),
        miner: _subscriptionManagerB429be9d.a.toBuffer(o.miner),
        difficulty: _subscriptionManagerB429be9d.a.toBuffer(o.difficulty),
        totalDifficulty: _subscriptionManagerB429be9d.a.toBuffer(o.totalDifficulty),
        size: _subscriptionManagerB429be9d.a.toBuffer(o.size),
        extraData: _subscriptionManagerB429be9d.a.toBuffer(o.extraData),
        gasLimit: _subscriptionManagerB429be9d.a.toBuffer(o.gasLimit),
        gasUsed: _subscriptionManagerB429be9d.a.toBuffer(o.gasUsed),
        timestamp: _subscriptionManagerB429be9d.a.toBuffer(o.timestamp),
        transactions: o.transactions
      });
      var o;
      t._setCurrentBlock(r), t.emit("rawBlock", n), t.emit("latest", n);
    });
  }), t._blockTracker.on("sync", t.emit.bind(t, "sync")), t._blockTracker.on("error", t.emit.bind(t, "error")), t._running = !0, t.emit("start");
}, ao.prototype.stop = function () {
  this._blockTracker.removeAllListeners(), this._running = !1, this.emit("stop");
}, ao.prototype.isRunning = function () {
  return this._running;
}, ao.prototype.addProvider = function (e, t) {
  const n = this;
  "number" == typeof t ? n._providers.splice(t, 0, e) : n._providers.push(e), e.setEngine(this);
}, ao.prototype.removeProvider = function (e) {
  const t = this._providers.indexOf(e);

  if (t < 0) throw new Error("Provider not found.");

  this._providers.splice(t, 1);
}, ao.prototype.send = function (e) {
  throw new Error("Web3ProviderEngine does not support synchronous requests.");
}, ao.prototype.sendAsync = function (e, t) {
  const n = this;

  n._ready.await(function () {
    Array.isArray(e) ? (0, _subscriptionManagerB429be9d.m)(e, n._handleAsync.bind(n), t) : n._handleAsync(e, t);
  });
}, ao.prototype._getBlockByNumberWithRetry = function (e, t) {
  const n = this;
  let r = 5;
  return void o();

  function o() {
    n._getBlockByNumber(e, i);
  }

  function i(e, n) {
    return e ? t(e) : n ? void t(null, n) : r > 0 ? (r--, void setTimeout(function () {
      o();
    }, 1e3)) : void t(null, null);
  }
}, ao.prototype._getBlockByNumber = function (e, t) {
  const n = no({
    method: "eth_getBlockByNumber",
    params: [e, !1],
    skipCache: !0
  });

  this._handleAsync(n, (e, n) => e ? t(e) : t(null, n.result));
}, ao.prototype._handleAsync = function (e, t) {
  var n = this,
      r = -1,
      o = null,
      i = null,
      s = [];

  function a(n, r) {
    i = n, o = r, (0, _subscriptionManagerB429be9d.b)(s, function (e, t) {
      e ? e(i, o, t) : t();
    }, function () {
      var n = {
        id: e.id,
        jsonrpc: e.jsonrpc,
        result: o
      };
      null != i ? (n.error = {
        message: i.stack || i.message || i,
        code: -32e3
      }, t(i, n)) : t(null, n);
    });
  }

  !function t(o) {
    if (r += 1, s.unshift(o), r >= n._providers.length) a(new Error('Request for method "' + e.method + '" not handled by any subprovider. Please check your subprovider configuration to ensure this method is handled.'));else try {
      n._providers[r].handleRequest(e, t, a);
    } catch (e) {
      a(e);
    }
  }();
}, ao.prototype._setCurrentBlock = function (e) {
  this.currentBlock = e, this.emit("block", e);
};
var co = uo;

function uo() {}

uo.prototype.setEngine = function (e) {
  const t = this;
  t.engine || (t.engine = e, e.on("block", function (e) {
    t.currentBlock = e;
  }), e.on("start", function () {
    t.start();
  }), e.on("stop", function () {
    t.stop();
  }));
}, uo.prototype.handleRequest = function (e, t, n) {
  throw new Error("Subproviders should override `handleRequest`.");
}, uo.prototype.emitPayload = function (e, t) {
  this.engine.sendAsync(no(e), t);
}, uo.prototype.stop = function () {}, uo.prototype.start = function () {};
var lo = class extends co {
  constructor(e) {
    if (super(), !e) throw new Error("JsonRpcEngineMiddlewareSubprovider - no constructorFn specified");
    this._constructorFn = e;
  }

  setEngine(e) {
    if (this.middleware) throw new Error("JsonRpcEngineMiddlewareSubprovider - subprovider added to engine twice");

    const t = e._blockTracker,
          n = this._constructorFn({
      engine: e,
      provider: e,
      blockTracker: t
    });

    if (!n) throw new Error("JsonRpcEngineMiddlewareSubprovider - _constructorFn did not return middleware");
    if ("function" != typeof n) throw new Error("JsonRpcEngineMiddlewareSubprovider - specified middleware is not a function");
    this.middleware = n;
  }

  handleRequest(e, t, n) {
    const r = {
      id: e.id
    };
    this.middleware(e, r, function (e) {
      t((t, n, o) => {
        t ? (delete r.result, r.error = {
          message: t.message || t
        }) : r.result = n, e ? e(o) : o();
      });
    }, function (e) {
      if (e) return n(e);
      n(null, r.result);
    });
  }

},
    ho = {
  cacheIdentifierForPayload: function (e, t) {
    const n = t ? po(e) : e.params;
    return fo(e) ? e.method + ":" + (0, _indexBc4c198a.r)(n) : null;
  },
  canCache: fo,
  blockTagForPayload: function (e) {
    let t = _o(e);

    if (t >= e.params.length) return null;
    return e.params[t];
  },
  paramsWithoutBlockTag: po,
  blockTagParamIndex: _o,
  cacheTypeForPayload: go
};

function fo(e) {
  return "never" !== go(e);
}

function po(e) {
  const t = _o(e);

  return t >= e.params.length ? e.params : "eth_getBlockByNumber" === e.method ? e.params.slice(1) : e.params.slice(0, t);
}

function _o(e) {
  switch (e.method) {
    case "eth_getStorageAt":
      return 2;

    case "eth_getBalance":
    case "eth_getCode":
    case "eth_getTransactionCount":
    case "eth_call":
      return 1;

    case "eth_getBlockByNumber":
      return 0;

    default:
      return;
  }
}

function go(e) {
  switch (e.method) {
    case "web3_clientVersion":
    case "web3_sha3":
    case "eth_protocolVersion":
    case "eth_getBlockTransactionCountByHash":
    case "eth_getUncleCountByBlockHash":
    case "eth_getCode":
    case "eth_getBlockByHash":
    case "eth_getTransactionByHash":
    case "eth_getTransactionByBlockHashAndIndex":
    case "eth_getTransactionReceipt":
    case "eth_getUncleByBlockHashAndIndex":
    case "eth_getCompilers":
    case "eth_compileLLL":
    case "eth_compileSolidity":
    case "eth_compileSerpent":
    case "shh_version":
    case "test_permaCache":
      return "perma";

    case "eth_getBlockByNumber":
    case "eth_getBlockTransactionCountByNumber":
    case "eth_getUncleCountByBlockNumber":
    case "eth_getTransactionByBlockNumberAndIndex":
    case "eth_getUncleByBlockNumberAndIndex":
    case "test_forkCache":
      return "fork";

    case "eth_gasPrice":
    case "eth_blockNumber":
    case "eth_getBalance":
    case "eth_getStorageAt":
    case "eth_getTransactionCount":
    case "eth_call":
    case "eth_estimateGas":
    case "eth_getFilterLogs":
    case "eth_getLogs":
    case "test_blockCache":
      return "block";

    case "net_version":
    case "net_peerCount":
    case "net_listening":
    case "eth_syncing":
    case "eth_sign":
    case "eth_coinbase":
    case "eth_mining":
    case "eth_hashrate":
    case "eth_accounts":
    case "eth_sendTransaction":
    case "eth_sendRawTransaction":
    case "eth_newFilter":
    case "eth_newBlockFilter":
    case "eth_newPendingTransactionFilter":
    case "eth_uninstallFilter":
    case "eth_getFilterChanges":
    case "eth_getWork":
    case "eth_submitWork":
    case "eth_submitHashrate":
    case "db_putString":
    case "db_getString":
    case "db_putHex":
    case "db_getHex":
    case "shh_post":
    case "shh_newIdentity":
    case "shh_hasIdentity":
    case "shh_newGroup":
    case "shh_addToGroup":
    case "shh_newFilter":
    case "shh_uninstallFilter":
    case "shh_getFilterChanges":
    case "shh_getMessages":
    case "test_neverCache":
      return "never";
  }
}

const yo = [void 0, null, "<nil>"];

var vo = function (e = {}) {
  const {
    blockTracker: t
  } = e;
  if (!t) throw new Error("createBlockCacheMiddleware - No BlockTracker specified");
  const n = new mo(),
        r = {
    perma: n,
    block: n,
    fork: n
  };
  return (0, _subscriptionManagerB429be9d.k)(async (e, o, i) => {
    if (e.skipCache) return i();
    const s = ho.cacheTypeForPayload(e),
          a = r[s];
    if (!a) return i();
    if (!a.canCacheRequest(e)) return i();
    let c,
        u = ho.blockTagForPayload(e);
    if (u || (u = "latest"), "earliest" === u) c = "0x00";else if ("latest" === u) {
      const e = await t.getLatestBlock();
      n.clearBefore(e), c = e;
    } else c = u;
    const l = await a.get(e, c);
    void 0 === l ? (await i(), await a.set(e, c, o.result)) : o.result = l;
  });
};

class mo {
  constructor() {
    this.cache = {};
  }

  getBlockCacheForPayload(e, t) {
    const n = Number.parseInt(t, 16);
    let r = this.cache[n];

    if (!r) {
      const e = {};
      this.cache[n] = e, r = e;
    }

    return r;
  }

  async get(e, t) {
    const n = this.getBlockCacheForPayload(e, t);
    if (n) return n[ho.cacheIdentifierForPayload(e, !0)];
  }

  async set(e, t, n) {
    this.canCacheResult(e, n) && (this.getBlockCacheForPayload(e, t)[ho.cacheIdentifierForPayload(e, !0)] = n);
  }

  canCacheRequest(e) {
    if (!ho.canCache(e)) return !1;
    return "pending" !== ho.blockTagForPayload(e);
  }

  canCacheResult(e, t) {
    if (!yo.includes(t)) return !!(!["eth_getTransactionByHash", "eth_getTransactionReceipt"].includes(e.method) || t && t.blockHash && "0x0000000000000000000000000000000000000000000000000000000000000000" !== t.blockHash);
  }

  clearBefore(e) {
    const t = this,
          n = Number.parseInt(e, 16);
    Object.keys(t.cache).map(Number).filter(e => e < n).forEach(e => delete t.cache[e]);
  }

}

var bo = class extends lo {
  constructor(e) {
    super(({
      blockTracker: t
    }) => vo(Object.assign({
      blockTracker: t
    }, e)));
  }

};
const Eo = _subscriptionManagerB429be9d.r.inherits;
var wo = So;

function So(e) {
  e = e || {}, this.staticResponses = e;
}

Eo(So, co), So.prototype.handleRequest = function (e, t, n) {
  var r = this.staticResponses[e.method];
  "function" == typeof r ? r(e, t, n) : void 0 !== r ? setTimeout(() => n(null, r)) : t();
};

var Ro = class extends lo {
  constructor() {
    super(({
      blockTracker: e,
      provider: t,
      engine: n
    }) => (0, _subscriptionManagerB429be9d.d)({
      blockTracker: e,
      provider: t
    }));
  }

},
    ko = function (e, t, n) {
  e.sendAsync(no({
    method: "eth_estimateGas",
    params: [t]
  }), function (e, t) {
    if (e) return "no contract code at given address" === e.message ? n(null, "0xcf08") : n(e);
    n(null, t.result);
  });
};

const To = _subscriptionManagerB429be9d.r.inherits,
      Co = /^[0-9A-Fa-f]+$/g;
var Ao = xo;

function xo(e) {
  this.nonceLock = (0, _subscriptionManagerB429be9d.S)(1), e.getAccounts && (this.getAccounts = e.getAccounts), e.processTransaction && (this.processTransaction = e.processTransaction), e.processMessage && (this.processMessage = e.processMessage), e.processPersonalMessage && (this.processPersonalMessage = e.processPersonalMessage), e.processTypedMessage && (this.processTypedMessage = e.processTypedMessage), this.approveTransaction = e.approveTransaction || this.autoApprove, this.approveMessage = e.approveMessage || this.autoApprove, this.approvePersonalMessage = e.approvePersonalMessage || this.autoApprove, this.approveDecryptMessage = e.approveDecryptMessage || this.autoApprove, this.approveEncryptionPublicKey = e.approveEncryptionPublicKey || this.autoApprove, this.approveTypedMessage = e.approveTypedMessage || this.autoApprove, e.signTransaction && (this.signTransaction = e.signTransaction || Io("signTransaction")), e.signMessage && (this.signMessage = e.signMessage || Io("signMessage")), e.signPersonalMessage && (this.signPersonalMessage = e.signPersonalMessage || Io("signPersonalMessage")), e.decryptMessage && (this.decryptMessage = e.decryptMessage || Io("decryptMessage")), e.encryptionPublicKey && (this.encryptionPublicKey = e.encryptionPublicKey || Io("encryptionPublicKey")), e.signTypedMessage && (this.signTypedMessage = e.signTypedMessage || Io("signTypedMessage")), e.recoverPersonalSignature && (this.recoverPersonalSignature = e.recoverPersonalSignature), e.publishTransaction && (this.publishTransaction = e.publishTransaction), this.estimateGas = e.estimateGas || this.estimateGas, this.getGasPrice = e.getGasPrice || this.getGasPrice;
}

function Po(e) {
  return e.toLowerCase();
}

function Oo(e) {
  const t = _subscriptionManagerB429be9d.a.addHexPrefix(e);

  return _subscriptionManagerB429be9d.a.isValidAddress(t);
}

function No(e) {
  const t = _subscriptionManagerB429be9d.a.addHexPrefix(e);

  return !_subscriptionManagerB429be9d.a.isValidAddress(t) && Bo(e);
}

function Bo(e) {
  return "string" == typeof e && "0x" === e.slice(0, 2) && e.slice(2).match(Co);
}

function Io(e) {
  return function (t, n) {
    n(new Error('ProviderEngine - HookedWalletSubprovider - Must provide "' + e + '" fn in constructor options'));
  };
}

To(xo, co), xo.prototype.handleRequest = function (e, t, n) {
  const r = this;
  let o, i, s, a, c;

  switch (r._parityRequests = {}, r._parityRequestCount = 0, e.method) {
    case "eth_coinbase":
      return void r.getAccounts(function (e, t) {
        if (e) return n(e);
        let r = t[0] || null;
        n(null, r);
      });

    case "eth_accounts":
      return void r.getAccounts(function (e, t) {
        if (e) return n(e);
        n(null, t);
      });

    case "eth_sendTransaction":
      return o = e.params[0], void (0, _subscriptionManagerB429be9d.w)([e => r.validateTransaction(o, e), e => r.processTransaction(o, e)], n);

    case "eth_signTransaction":
      return o = e.params[0], void (0, _subscriptionManagerB429be9d.w)([e => r.validateTransaction(o, e), e => r.processSignTransaction(o, e)], n);

    case "eth_sign":
      return c = e.params[0], a = e.params[1], s = e.params[2] || {}, i = (0, _subscriptionManagerB429be9d.e)(s, {
        from: c,
        data: a
      }), void (0, _subscriptionManagerB429be9d.w)([e => r.validateMessage(i, e), e => r.processMessage(i, e)], n);

    case "personal_sign":
      return function () {
        const t = e.params[0];

        if (No(e.params[1]) && Oo(t)) {
          let t = "The eth_personalSign method requires params ordered ";
          t += "[message, address]. This was previously handled incorrectly, ", t += "and has been corrected automatically. ", t += "Please switch this param order for smooth behavior in the future.", console.warn(t), c = e.params[0], a = e.params[1];
        } else a = e.params[0], c = e.params[1];

        s = e.params[2] || {}, i = (0, _subscriptionManagerB429be9d.e)(s, {
          from: c,
          data: a
        }), (0, _subscriptionManagerB429be9d.w)([e => r.validatePersonalMessage(i, e), e => r.processPersonalMessage(i, e)], n);
      }();

    case "eth_decryptMessage":
      return function () {
        const t = e.params[0];

        if (No(e.params[1]) && Oo(t)) {
          let t = "The eth_decryptMessage method requires params ordered ";
          t += "[message, address]. This was previously handled incorrectly, ", t += "and has been corrected automatically. ", t += "Please switch this param order for smooth behavior in the future.", console.warn(t), c = e.params[0], a = e.params[1];
        } else a = e.params[0], c = e.params[1];

        s = e.params[2] || {}, i = (0, _subscriptionManagerB429be9d.e)(s, {
          from: c,
          data: a
        }), (0, _subscriptionManagerB429be9d.w)([e => r.validateDecryptMessage(i, e), e => r.processDecryptMessage(i, e)], n);
      }();

    case "encryption_public_key":
      return function () {
        const t = e.params[0];
        (0, _subscriptionManagerB429be9d.w)([e => r.validateEncryptionPublicKey(t, e), e => r.processEncryptionPublicKey(t, e)], n);
      }();

    case "personal_ecRecover":
      return function () {
        a = e.params[0];
        let t = e.params[1];
        s = e.params[2] || {}, i = (0, _subscriptionManagerB429be9d.e)(s, {
          sig: t,
          data: a
        }), r.recoverPersonalSignature(i, n);
      }();

    case "eth_signTypedData":
    case "eth_signTypedData_v3":
    case "eth_signTypedData_v4":
      return function () {
        const t = e.params[0],
              o = e.params[1];
        Oo(t) ? (c = t, a = o) : (a = t, c = o), s = e.params[2] || {}, i = (0, _subscriptionManagerB429be9d.e)(s, {
          from: c,
          data: a
        }), (0, _subscriptionManagerB429be9d.w)([e => r.validateTypedMessage(i, e), e => r.processTypedMessage(i, e)], n);
      }();

    case "parity_postTransaction":
      return o = e.params[0], void r.parityPostTransaction(o, n);

    case "parity_postSign":
      return c = e.params[0], a = e.params[1], void r.parityPostSign(c, a, n);

    case "parity_checkRequest":
      return function () {
        const t = e.params[0];
        r.parityCheckRequest(t, n);
      }();

    case "parity_defaultAccount":
      return void r.getAccounts(function (e, t) {
        if (e) return n(e);
        const r = t[0] || null;
        n(null, r);
      });

    default:
      return void t();
  }
}, xo.prototype.getAccounts = function (e) {
  e(null, []);
}, xo.prototype.processTransaction = function (e, t) {
  const n = this;
  (0, _subscriptionManagerB429be9d.w)([t => n.approveTransaction(e, t), (e, t) => n.checkApproval("transaction", e, t), t => n.finalizeAndSubmitTx(e, t)], t);
}, xo.prototype.processSignTransaction = function (e, t) {
  const n = this;
  (0, _subscriptionManagerB429be9d.w)([t => n.approveTransaction(e, t), (e, t) => n.checkApproval("transaction", e, t), t => n.finalizeTx(e, t)], t);
}, xo.prototype.processMessage = function (e, t) {
  const n = this;
  (0, _subscriptionManagerB429be9d.w)([t => n.approveMessage(e, t), (e, t) => n.checkApproval("message", e, t), t => n.signMessage(e, t)], t);
}, xo.prototype.processPersonalMessage = function (e, t) {
  const n = this;
  (0, _subscriptionManagerB429be9d.w)([t => n.approvePersonalMessage(e, t), (e, t) => n.checkApproval("message", e, t), t => n.signPersonalMessage(e, t)], t);
}, xo.prototype.processDecryptMessage = function (e, t) {
  const n = this;
  (0, _subscriptionManagerB429be9d.w)([t => n.approveDecryptMessage(e, t), (e, t) => n.checkApproval("decryptMessage", e, t), t => n.decryptMessage(e, t)], t);
}, xo.prototype.processEncryptionPublicKey = function (e, t) {
  const n = this;
  (0, _subscriptionManagerB429be9d.w)([t => n.approveEncryptionPublicKey(e, t), (e, t) => n.checkApproval("encryptionPublicKey", e, t), t => n.encryptionPublicKey(e, t)], t);
}, xo.prototype.processTypedMessage = function (e, t) {
  const n = this;
  (0, _subscriptionManagerB429be9d.w)([t => n.approveTypedMessage(e, t), (e, t) => n.checkApproval("message", e, t), t => n.signTypedMessage(e, t)], t);
}, xo.prototype.autoApprove = function (e, t) {
  t(null, !0);
}, xo.prototype.checkApproval = function (e, t, n) {
  n(t ? null : new Error("User denied " + e + " signature."));
}, xo.prototype.parityPostTransaction = function (e, t) {
  const n = this,
        r = `0x${n._parityRequestCount.toString(16)}`;
  n._parityRequestCount++, n.emitPayload({
    method: "eth_sendTransaction",
    params: [e]
  }, function (e, t) {
    if (e) return void (n._parityRequests[r] = {
      error: e
    });
    const o = t.result;
    n._parityRequests[r] = o;
  }), t(null, r);
}, xo.prototype.parityPostSign = function (e, t, n) {
  const r = this,
        o = `0x${r._parityRequestCount.toString(16)}`;
  r._parityRequestCount++, r.emitPayload({
    method: "eth_sign",
    params: [e, t]
  }, function (e, t) {
    if (e) return void (r._parityRequests[o] = {
      error: e
    });
    const n = t.result;
    r._parityRequests[o] = n;
  }), n(null, o);
}, xo.prototype.parityCheckRequest = function (e, t) {
  const n = this._parityRequests[e] || null;
  return n ? n.error ? t(n.error) : void t(null, n) : t(null, null);
}, xo.prototype.recoverPersonalSignature = function (e, t) {
  let n;

  try {
    n = _subscriptionManagerB429be9d.s.recoverPersonalSignature(e);
  } catch (e) {
    return t(e);
  }

  t(null, n);
}, xo.prototype.validateTransaction = function (e, t) {
  if (void 0 === e.from) return t(new Error("Undefined address - from address required to sign transaction."));
  this.validateSender(e.from, function (n, r) {
    return n ? t(n) : r ? void t() : t(new Error(`Unknown address - unable to sign transaction for this address: "${e.from}"`));
  });
}, xo.prototype.validateMessage = function (e, t) {
  if (void 0 === e.from) return t(new Error("Undefined address - from address required to sign message."));
  this.validateSender(e.from, function (n, r) {
    return n ? t(n) : r ? void t() : t(new Error(`Unknown address - unable to sign message for this address: "${e.from}"`));
  });
}, xo.prototype.validatePersonalMessage = function (e, t) {
  return void 0 === e.from ? t(new Error("Undefined address - from address required to sign personal message.")) : void 0 === e.data ? t(new Error("Undefined message - message required to sign personal message.")) : Bo(e.data) ? void this.validateSender(e.from, function (n, r) {
    return n ? t(n) : r ? void t() : t(new Error(`Unknown address - unable to sign message for this address: "${e.from}"`));
  }) : t(new Error("HookedWalletSubprovider - validateMessage - message was not encoded as hex."));
}, xo.prototype.validateDecryptMessage = function (e, t) {
  return void 0 === e.from ? t(new Error("Undefined address - from address required to decrypt message.")) : void 0 === e.data ? t(new Error("Undefined message - message required to decrypt message.")) : Bo(e.data) ? void this.validateSender(e.from, function (n, r) {
    return n ? t(n) : r ? void t() : t(new Error(`Unknown address - unable to decrypt message for this address: "${e.from}"`));
  }) : t(new Error("HookedWalletSubprovider - validateDecryptMessage - message was not encoded as hex."));
}, xo.prototype.validateEncryptionPublicKey = function (e, t) {
  this.validateSender(e, function (n, r) {
    return n ? t(n) : r ? void t() : t(new Error(`Unknown address - unable to obtain encryption public key for this address: "${e}"`));
  });
}, xo.prototype.validateTypedMessage = function (e, t) {
  return void 0 === e.from ? t(new Error("Undefined address - from address required to sign typed data.")) : void 0 === e.data ? t(new Error("Undefined data - message required to sign typed data.")) : void this.validateSender(e.from, function (n, r) {
    return n ? t(n) : r ? void t() : t(new Error(`Unknown address - unable to sign message for this address: "${e.from}"`));
  });
}, xo.prototype.validateSender = function (e, t) {
  if (!e) return t(null, !1);
  this.getAccounts(function (n, r) {
    if (n) return t(n);
    const o = -1 !== r.map(Po).indexOf(e.toLowerCase());
    t(null, o);
  });
}, xo.prototype.finalizeAndSubmitTx = function (e, t) {
  const n = this;
  n.nonceLock.take(function () {
    (0, _subscriptionManagerB429be9d.w)([n.fillInTxExtras.bind(n, e), n.signTransaction.bind(n), n.publishTransaction.bind(n)], function (e, r) {
      if (n.nonceLock.leave(), e) return t(e);
      t(null, r);
    });
  });
}, xo.prototype.finalizeTx = function (e, t) {
  const n = this;
  n.nonceLock.take(function () {
    (0, _subscriptionManagerB429be9d.w)([n.fillInTxExtras.bind(n, e), n.signTransaction.bind(n)], function (r, o) {
      if (n.nonceLock.leave(), r) return t(r);
      t(null, {
        raw: o,
        tx: e
      });
    });
  });
}, xo.prototype.publishTransaction = function (e, t) {
  this.emitPayload({
    method: "eth_sendRawTransaction",
    params: [e]
  }, function (e, n) {
    if (e) return t(e);
    t(null, n.result);
  });
}, xo.prototype.estimateGas = function (e, t) {
  ko(this.engine, e, t);
}, xo.prototype.getGasPrice = function (e) {
  this.emitPayload({
    method: "eth_gasPrice",
    params: []
  }, function (t, n) {
    if (t) return e(t);
    e(null, n.result);
  });
}, xo.prototype.fillInTxExtras = function (e, t) {
  const n = this,
        r = e.from,
        o = {};
  void 0 === e.gasPrice && (o.gasPrice = n.getGasPrice.bind(n)), void 0 === e.nonce && (o.nonce = n.emitPayload.bind(n, {
    method: "eth_getTransactionCount",
    params: [r, "pending"]
  })), void 0 === e.gas && (o.gas = n.estimateGas.bind(n, function (e) {
    return {
      from: e.from,
      to: e.to,
      value: e.value,
      data: e.data,
      gas: e.gas,
      gasPrice: e.gasPrice,
      nonce: e.nonce
    };
  }(e))), (0, _subscriptionManagerB429be9d.p)(o, function (n, r) {
    if (n) return t(n);
    const o = {};
    r.gasPrice && (o.gasPrice = r.gasPrice), r.nonce && (o.nonce = r.nonce.result), r.gas && (o.gas = r.gas), t(null, (0, _subscriptionManagerB429be9d.e)(e, o));
  });
};
const Mo = _subscriptionManagerB429be9d.r.inherits,
      Ho = Zr;
var Lo = Do;

function Do(e) {
  this.nonceCache = {};
}

Mo(Do, co), Do.prototype.handleRequest = function (e, t, n) {
  const r = this;

  switch (e.method) {
    case "eth_getTransactionCount":
      var o = Ho(e),
          i = e.params[0].toLowerCase(),
          s = r.nonceCache[i];
      return void ("pending" === o ? s ? n(null, s) : t(function (e, t, n) {
        if (e) return n();
        void 0 === r.nonceCache[i] && (r.nonceCache[i] = t), n();
      }) : t());

    case "eth_sendRawTransaction":
      return void t(function (t, n, o) {
        if (t) return o();

        var i = e.params[0],
            s = (_subscriptionManagerB429be9d.a.stripHexPrefix(i), Buffer.from(_subscriptionManagerB429be9d.a.stripHexPrefix(i), "hex"), new _indexAcf3c.T(Buffer.from(_subscriptionManagerB429be9d.a.stripHexPrefix(i), "hex"))),
            a = "0x" + s.getSenderAddress().toString("hex").toLowerCase(),
            c = _subscriptionManagerB429be9d.a.bufferToInt(s.nonce),
            u = (++c).toString(16);

        u.length % 2 && (u = "0" + u), u = "0x" + u, r.nonceCache[a] = u, o();
      });

    case "evm_revert":
      return r.nonceCache = {}, void t();

    default:
      return void t();
  }
};
var Uo = class extends lo {
  constructor() {
    super(({
      blockTracker: e,
      provider: t,
      engine: n
    }) => {
      const {
        events: r,
        middleware: o
      } = (0, _subscriptionManagerB429be9d.c)({
        blockTracker: e,
        provider: t
      });
      return r.on("notification", e => n.emit("data", null, e)), o;
    });
  }

},
    Go = (0, _index2d8aeb.d)(function (e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  });

  const n = _url_commonjsExternalCa.t.__importDefault(Be),
        r = _url_commonjsExternalCa.t.__importDefault(Gr),
        o = _url_commonjsExternalCa.t.__importDefault(Yr);

  t.default = class extends so {
    constructor(e) {
      if (super({
        pollingInterval: e.pollingInterval || 8e3
      }), this.bridge = "https://bridge.walletconnect.org", this.qrcode = !0, this.rpc = null, this.infuraId = "", this.http = null, this.isConnecting = !1, this.connected = !1, this.connectCallbacks = [], this.accounts = [], this.chainId = 1, this.networkId = 1, this.rpcUrl = "", this.bridge = e.connector ? e.connector.bridge : e.bridge || "https://bridge.walletconnect.org", this.qrcode = void 0 === e.qrcode || !1 !== e.qrcode, this.wc = e.connector || new n.default({
        bridge: this.bridge,
        qrcodeModal: this.qrcode ? r.default : void 0
      }), this.rpc = e.rpc || null, !(this.rpc || e.infuraId && "string" == typeof e.infuraId && e.infuraId.trim())) throw new Error("Missing one of the required parameters: rpc or infuraId");
      this.infuraId = e.infuraId || "", this.chainId = void 0 !== e.chainId ? e.chainId : 1, this.networkId = this.chainId, this.updateRpcUrl(this.chainId), this.addProvider(new wo({
        eth_hashrate: "0x00",
        eth_mining: !1,
        eth_syncing: !0,
        net_listening: !0,
        web3_clientVersion: "WalletConnect/v1.x.x/javascript"
      })), this.addProvider(new bo()), this.addProvider(new Uo()), this.addProvider(new Ro()), this.addProvider(new Lo()), this.addProvider(new Ao({
        getAccounts: e => _url_commonjsExternalCa.t.__awaiter(this, void 0, void 0, function* () {
          try {
            const t = (yield this.getWalletConnector()).accounts;
            t && t.length ? e(null, t) : e(new Error("Failed to get accounts"));
          } catch (t) {
            e(t);
          }
        }),
        processMessage: (e, t) => _url_commonjsExternalCa.t.__awaiter(this, void 0, void 0, function* () {
          try {
            const n = yield this.getWalletConnector(),
                  r = yield n.signMessage([e.from, e.data]);
            t(null, r);
          } catch (e) {
            t(e);
          }
        }),
        processPersonalMessage: (e, t) => _url_commonjsExternalCa.t.__awaiter(this, void 0, void 0, function* () {
          try {
            const n = yield this.getWalletConnector(),
                  r = yield n.signPersonalMessage([e.data, e.from]);
            t(null, r);
          } catch (e) {
            t(e);
          }
        }),
        processSignTransaction: (e, t) => _url_commonjsExternalCa.t.__awaiter(this, void 0, void 0, function* () {
          try {
            const n = yield this.getWalletConnector(),
                  r = yield n.signTransaction(e);
            t(null, r);
          } catch (e) {
            t(e);
          }
        }),
        processTransaction: (e, t) => _url_commonjsExternalCa.t.__awaiter(this, void 0, void 0, function* () {
          try {
            const n = yield this.getWalletConnector(),
                  r = yield n.sendTransaction(e);
            t(null, r);
          } catch (e) {
            t(e);
          }
        }),
        processTypedMessage: (e, t) => _url_commonjsExternalCa.t.__awaiter(this, void 0, void 0, function* () {
          try {
            const n = yield this.getWalletConnector(),
                  r = yield n.signTypedData([e.from, e.data]);
            t(null, r);
          } catch (e) {
            t(e);
          }
        })
      })), this.addProvider({
        handleRequest: (e, t, n) => _url_commonjsExternalCa.t.__awaiter(this, void 0, void 0, function* () {
          try {
            const {
              result: t
            } = yield this.handleRequest(e);
            n(null, t);
          } catch (e) {
            n(e);
          }
        }),
        setEngine: e => e
      });
    }

    get isWalletConnect() {
      return !0;
    }

    get connector() {
      return this.wc;
    }

    enable() {
      return new Promise((e, t) => _url_commonjsExternalCa.t.__awaiter(this, void 0, void 0, function* () {
        try {
          const n = yield this.getWalletConnector();
          if (!n) return t(new Error("Failed to connect to WalleConnect"));
          this.start(), this.subscribeWalletConnector(), e(n.accounts);
        } catch (e) {
          return t(e);
        }
      }));
    }

    request(e) {
      return _url_commonjsExternalCa.t.__awaiter(this, void 0, void 0, function* () {
        return this.send(e);
      });
    }

    send(e, t) {
      return _url_commonjsExternalCa.t.__awaiter(this, void 0, void 0, function* () {
        if ("string" == typeof e) return new Promise((n, r) => {
          this.sendAsync({
            id: ee.payloadId(),
            jsonrpc: "2.0",
            method: e,
            params: t || []
          }, (e, t) => {
            e ? r(e) : n(t.result);
          });
        });
        if (e = Object.assign({
          id: ee.payloadId(),
          jsonrpc: "2.0"
        }, e), t) return void this.sendAsync(e, t);
        const n = yield this.handleRequest(e);
        if (n.result) return n.result;
        throw n.error && n.error.message ? new Error(n.error.message) : new Error("Failed JSON-RPC request");
      });
    }

    onConnect(e) {
      this.connectCallbacks.push(e);
    }

    triggerConnect(e) {
      this.connectCallbacks && this.connectCallbacks.length && this.connectCallbacks.forEach(t => t(e));
    }

    disconnect() {
      return _url_commonjsExternalCa.t.__awaiter(this, void 0, void 0, function* () {
        this.close();
      });
    }

    close() {
      return _url_commonjsExternalCa.t.__awaiter(this, void 0, void 0, function* () {
        const e = yield this.getWalletConnector({
          disableSessionCreation: !0
        });
        yield e.killSession(), yield this.stop(), this.emit("close", 1e3, "Connection closed"), this.emit("disconnect", 1e3, "Connection disconnected");
      });
    }

    handleRequest(e) {
      return _url_commonjsExternalCa.t.__awaiter(this, void 0, void 0, function* () {
        try {
          let t,
              n = null;
          const r = yield this.getWalletConnector();

          switch (e.method) {
            case "wc_killSession":
              yield this.close(), n = null;
              break;

            case "eth_accounts":
              n = r.accounts;
              break;

            case "eth_coinbase":
              n = r.accounts[0];
              break;

            case "eth_chainId":
              n = r.chainId;
              break;

            case "net_version":
              n = r.networkId || r.chainId;
              break;

            case "eth_uninstallFilter":
              this.sendAsync(e, e => e), n = !0;
              break;

            default:
              t = yield this.handleOtherRequests(e);
          }

          return t || this.formatResponse(e, n);
        } catch (e) {
          throw this.emit("error", e), e;
        }
      });
    }

    formatResponse(e, t) {
      return {
        id: e.id,
        jsonrpc: e.jsonrpc,
        result: t
      };
    }

    handleOtherRequests(e) {
      return _url_commonjsExternalCa.t.__awaiter(this, void 0, void 0, function* () {
        if (e.method.startsWith("eth_")) return this.handleReadRequests(e);
        const t = yield this.getWalletConnector(),
              n = yield t.sendCustomRequest(e);
        return this.formatResponse(e, n);
      });
    }

    handleReadRequests(e) {
      return _url_commonjsExternalCa.t.__awaiter(this, void 0, void 0, function* () {
        if (!this.http) {
          const e = new Error("HTTP Connection not available");
          throw this.emit("error", e), e;
        }

        return this.http.send(e);
      });
    }

    getWalletConnector(e = {}) {
      const {
        disableSessionCreation: t = !1
      } = e;
      return new Promise((e, n) => {
        const r = this.wc;
        if (this.isConnecting) this.onConnect(t => e(t));else if (r.connected || t) this.connected || (this.connected = !0, this.updateState(r.session)), e(r);else {
          this.isConnecting = !0;
          const t = this.chainId ? {
            chainId: this.chainId
          } : void 0;
          r.on("modal_closed", () => {
            n(new Error("User closed modal"));
          }), r.createSession(t).then(() => {
            r.on("connect", (t, o) => {
              if (t) return this.isConnecting = !1, n(t);
              this.isConnecting = !1, this.connected = !0, o && this.updateState(o.params[0]), this.emit("connect"), this.triggerConnect(r), e(r);
            });
          }).catch(e => {
            this.isConnecting = !1, n(e);
          });
        }
      });
    }

    subscribeWalletConnector() {
      return _url_commonjsExternalCa.t.__awaiter(this, void 0, void 0, function* () {
        const e = yield this.getWalletConnector();
        e.on("disconnect", e => {
          e ? this.emit("error", e) : this.stop();
        }), e.on("session_update", (e, t) => {
          e ? this.emit("error", e) : this.updateState(t.params[0]);
        });
      });
    }

    updateState(e) {
      return _url_commonjsExternalCa.t.__awaiter(this, void 0, void 0, function* () {
        const {
          accounts: t,
          chainId: n,
          networkId: r,
          rpcUrl: o
        } = e;
        (!this.accounts || t && this.accounts !== t) && (this.accounts = t, this.emit("accountsChanged", t)), (!this.chainId || n && this.chainId !== n) && (this.chainId = n, this.emit("chainChanged", n)), (!this.networkId || r && this.networkId !== r) && (this.networkId = r, this.emit("networkChanged", r)), this.updateRpcUrl(this.chainId, o || "");
      });
    }

    updateRpcUrl(e, t = "") {
      const n = {
        1: "mainnet",
        3: "ropsten",
        4: "rinkeby",
        5: "goerli",
        42: "kovan"
      }[e];
      t || (this.rpc && this.rpc[e] ? t = this.rpc[e] : n && (t = `https://${n}.infura.io/v3/${this.infuraId}`)), t ? (this.rpcUrl = t, this.updateHttpConnection()) : this.emit("error", new Error(`No RPC Url available for chainId: ${e}`));
    }

    updateHttpConnection() {
      this.rpcUrl && (this.http = new o.default(this.rpcUrl), this.http.on("payload", e => this.emit("payload", e)), this.http.on("error", e => this.emit("error", e)));
    }

  };
}),
    qo = (0, _index2d8aeb.e)(Go);
exports.__moduleExports = Go;
var _default = qo;
exports.default = _default;
},{"./index-2d8aeb45.js":"../node_modules/use-wallet/dist/index-2d8aeb45.js","react":"../node_modules/react/index.js","@aragon/provided-connector":"../node_modules/@aragon/provided-connector/dist/index.js","events":"../node_modules/events/events.js","buffer":"../node_modules/buffer/index.js","./_crypto_commonjs-external-8b32930c.js":"../node_modules/use-wallet/dist/_crypto_commonjs-external-8b32930c.js","./subscriptionManager-b429be9d.js":"../node_modules/use-wallet/dist/subscriptionManager-b429be9d.js","stream":"../node_modules/stream-browserify/index.js","string_decoder":"../node_modules/string_decoder/lib/string_decoder.js","crypto":"../node_modules/crypto-browserify/index.js","assert":"../node_modules/assert/assert.js","util":"../node_modules/util/util.js","./index-bc4c198a.js":"../node_modules/use-wallet/dist/index-bc4c198a.js","./index-acf3c274.js":"../node_modules/use-wallet/dist/index-acf3c274.js","./_url_commonjs-external-ca765683.js":"../node_modules/use-wallet/dist/_url_commonjs-external-ca765683.js","url":"../node_modules/url/url.js","http":"../node_modules/stream-http/index.js","https":"../node_modules/https-browserify/index.js","os":"../node_modules/os-browserify/browser.js","process":"../node_modules/process/browser.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "45077" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js"], null)
//# sourceMappingURL=/index-c7c9bf57.daf64bf8.js.map