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
})({"../node_modules/use-wallet/dist/index-23e43456.js":[function(require,module,exports) {
var Buffer = require("buffer").Buffer;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__moduleExports = exports.WalletLinkProvider = exports.WalletLink = exports.default = void 0;

var _index2d8aeb = require("./index-2d8aeb45.js");

require("react");

require("@aragon/provided-connector");

require("events");

require("buffer");

var _crypto_commonjsExternal8b32930c = require("./_crypto_commonjs-external-8b32930c.js");

require("stream");

require("crypto");

var _url_commonjsExternalCa = require("./_url_commonjs-external-ca765683.js");

require("url");

var c = (0, _index2d8aeb.d)(function (t) {
  !function (t, e) {
    function n(t, e) {
      if (!t) throw new Error(e || "Assertion failed");
    }

    function i(t, e) {
      t.super_ = e;

      var n = function () {};

      n.prototype = e.prototype, t.prototype = new n(), t.prototype.constructor = t;
    }

    function o(t, e, n) {
      if (o.isBN(t)) return t;
      this.negative = 0, this.words = null, this.length = 0, this.red = null, null !== t && ("le" !== e && "be" !== e || (n = e, e = 10), this._init(t || 0, e || 10, n || "be"));
    }

    var s;
    "object" == typeof t ? t.exports = o : e.BN = o, o.BN = o, o.wordSize = 26;

    try {
      s = _crypto_commonjsExternal8b32930c.a.Buffer;
    } catch (t) {}

    function u(t, e, i) {
      for (var r = 0, o = Math.min(t.length, i), s = 0, u = e; u < o; u++) {
        var a,
            c = t.charCodeAt(u) - 48;
        r <<= 4, r |= a = c >= 49 && c <= 54 ? c - 49 + 10 : c >= 17 && c <= 22 ? c - 17 + 10 : c, s |= a;
      }

      return n(!(240 & s), "Invalid character in " + t), r;
    }

    function a(t, e, i, r) {
      for (var o = 0, s = 0, u = Math.min(t.length, i), a = e; a < u; a++) {
        var c = t.charCodeAt(a) - 48;
        o *= r, s = c >= 49 ? c - 49 + 10 : c >= 17 ? c - 17 + 10 : c, n(c >= 0 && s < r, "Invalid character"), o += s;
      }

      return o;
    }

    function c(t, e) {
      t.words = e.words, t.length = e.length, t.negative = e.negative, t.red = e.red;
    }

    function l() {
      return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">";
    }

    o.isBN = function (t) {
      return t instanceof o || null !== t && "object" == typeof t && t.constructor.wordSize === o.wordSize && Array.isArray(t.words);
    }, o.max = function (t, e) {
      return t.cmp(e) > 0 ? t : e;
    }, o.min = function (t, e) {
      return t.cmp(e) < 0 ? t : e;
    }, o.prototype._init = function (t, e, i) {
      if ("number" == typeof t) return this._initNumber(t, e, i);
      if ("object" == typeof t) return this._initArray(t, e, i);
      "hex" === e && (e = 16), n(e === (0 | e) && e >= 2 && e <= 36);
      var r = 0;
      "-" === (t = t.toString().replace(/\s+/g, ""))[0] && r++, 16 === e ? this._parseHex(t, r) : this._parseBase(t, e, r), "-" === t[0] && (this.negative = 1), this._strip(), "le" === i && this._initArray(this.toArray(), e, i);
    }, o.prototype._initNumber = function (t, e, i) {
      t < 0 && (this.negative = 1, t = -t), t < 67108864 ? (this.words = [67108863 & t], this.length = 1) : t < 4503599627370496 ? (this.words = [67108863 & t, t / 67108864 & 67108863], this.length = 2) : (n(t < 9007199254740992), this.words = [67108863 & t, t / 67108864 & 67108863, 1], this.length = 3), "le" === i && this._initArray(this.toArray(), e, i);
    }, o.prototype._initArray = function (t, e, i) {
      if (n("number" == typeof t.length), t.length <= 0) return this.words = [0], this.length = 1, this;
      this.length = Math.ceil(t.length / 3), this.words = new Array(this.length);

      for (var r = 0; r < this.length; r++) this.words[r] = 0;

      var o,
          s,
          u = 0;
      if ("be" === i) for (r = t.length - 1, o = 0; r >= 0; r -= 3) s = t[r] | t[r - 1] << 8 | t[r - 2] << 16, this.words[o] |= s << u & 67108863, this.words[o + 1] = s >>> 26 - u & 67108863, (u += 24) >= 26 && (u -= 26, o++);else if ("le" === i) for (r = 0, o = 0; r < t.length; r += 3) s = t[r] | t[r + 1] << 8 | t[r + 2] << 16, this.words[o] |= s << u & 67108863, this.words[o + 1] = s >>> 26 - u & 67108863, (u += 24) >= 26 && (u -= 26, o++);
      return this._strip();
    }, o.prototype._parseHex = function (t, e) {
      this.length = Math.ceil((t.length - e) / 6), this.words = new Array(this.length);

      for (var n = 0; n < this.length; n++) this.words[n] = 0;

      var i,
          r,
          o = 0;

      for (n = t.length - 6, i = 0; n >= e; n -= 6) r = u(t, n, n + 6), this.words[i] |= r << o & 67108863, this.words[i + 1] |= r >>> 26 - o & 4194303, (o += 24) >= 26 && (o -= 26, i++);

      n + 6 !== e && (r = u(t, e, n + 6), this.words[i] |= r << o & 67108863, this.words[i + 1] |= r >>> 26 - o & 4194303), this._strip();
    }, o.prototype._parseBase = function (t, e, n) {
      this.words = [0], this.length = 1;

      for (var i = 0, r = 1; r <= 67108863; r *= e) i++;

      i--, r = r / e | 0;

      for (var o = t.length - n, s = o % i, u = Math.min(o, o - s) + n, c = 0, l = n; l < u; l += i) c = a(t, l, l + i, e), this.imuln(r), this.words[0] + c < 67108864 ? this.words[0] += c : this._iaddn(c);

      if (0 !== s) {
        var h = 1;

        for (c = a(t, l, t.length, e), l = 0; l < s; l++) h *= e;

        this.imuln(h), this.words[0] + c < 67108864 ? this.words[0] += c : this._iaddn(c);
      }
    }, o.prototype.copy = function (t) {
      t.words = new Array(this.length);

      for (var e = 0; e < this.length; e++) t.words[e] = this.words[e];

      t.length = this.length, t.negative = this.negative, t.red = this.red;
    }, o.prototype._move = function (t) {
      c(t, this);
    }, o.prototype.clone = function () {
      var t = new o(null);
      return this.copy(t), t;
    }, o.prototype._expand = function (t) {
      for (; this.length < t;) this.words[this.length++] = 0;

      return this;
    }, o.prototype._strip = function () {
      for (; this.length > 1 && 0 === this.words[this.length - 1];) this.length--;

      return this._normSign();
    }, o.prototype._normSign = function () {
      return 1 === this.length && 0 === this.words[0] && (this.negative = 0), this;
    }, "undefined" != typeof Symbol && "function" == typeof Symbol.for ? o.prototype[Symbol.for("nodejs.util.inspect.custom")] = l : o.prototype.inspect = l;
    var h = ["", "0", "00", "000", "0000", "00000", "000000", "0000000", "00000000", "000000000", "0000000000", "00000000000", "000000000000", "0000000000000", "00000000000000", "000000000000000", "0000000000000000", "00000000000000000", "000000000000000000", "0000000000000000000", "00000000000000000000", "000000000000000000000", "0000000000000000000000", "00000000000000000000000", "000000000000000000000000", "0000000000000000000000000"],
        f = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
        d = [0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176];
    o.prototype.toString = function (t, e) {
      var i;

      if (e = 0 | e || 1, 16 === (t = t || 10) || "hex" === t) {
        i = "";

        for (var r = 0, o = 0, s = 0; s < this.length; s++) {
          var u = this.words[s],
              a = (16777215 & (u << r | o)).toString(16);
          i = 0 !== (o = u >>> 24 - r & 16777215) || s !== this.length - 1 ? h[6 - a.length] + a + i : a + i, (r += 2) >= 26 && (r -= 26, s--);
        }

        for (0 !== o && (i = o.toString(16) + i); i.length % e != 0;) i = "0" + i;

        return 0 !== this.negative && (i = "-" + i), i;
      }

      if (t === (0 | t) && t >= 2 && t <= 36) {
        var c = f[t],
            l = d[t];
        i = "";
        var p = this.clone();

        for (p.negative = 0; !p.isZero();) {
          var m = p.modrn(l).toString(t);
          i = (p = p.idivn(l)).isZero() ? m + i : h[c - m.length] + m + i;
        }

        for (this.isZero() && (i = "0" + i); i.length % e != 0;) i = "0" + i;

        return 0 !== this.negative && (i = "-" + i), i;
      }

      n(!1, "Base should be between 2 and 36");
    }, o.prototype.toNumber = function () {
      var t = this.words[0];
      return 2 === this.length ? t += 67108864 * this.words[1] : 3 === this.length && 1 === this.words[2] ? t += 4503599627370496 + 67108864 * this.words[1] : this.length > 2 && n(!1, "Number can only safely store up to 53 bits"), 0 !== this.negative ? -t : t;
    }, o.prototype.toJSON = function () {
      return this.toString(16, 2);
    }, s && (o.prototype.toBuffer = function (t, e) {
      return this.toArrayLike(s, t, e);
    }), o.prototype.toArray = function (t, e) {
      return this.toArrayLike(Array, t, e);
    };

    function p(t, e, n) {
      n.negative = e.negative ^ t.negative;
      var i = t.length + e.length | 0;
      n.length = i, i = i - 1 | 0;
      var r = 0 | t.words[0],
          o = 0 | e.words[0],
          s = r * o,
          u = 67108863 & s,
          a = s / 67108864 | 0;
      n.words[0] = u;

      for (var c = 1; c < i; c++) {
        for (var l = a >>> 26, h = 67108863 & a, f = Math.min(c, e.length - 1), d = Math.max(0, c - t.length + 1); d <= f; d++) {
          var p = c - d | 0;
          l += (s = (r = 0 | t.words[p]) * (o = 0 | e.words[d]) + h) / 67108864 | 0, h = 67108863 & s;
        }

        n.words[c] = 0 | h, a = 0 | l;
      }

      return 0 !== a ? n.words[c] = 0 | a : n.length--, n._strip();
    }

    o.prototype.toArrayLike = function (t, e, i) {
      this._strip();

      var r = this.byteLength(),
          o = i || Math.max(1, r);
      n(r <= o, "byte array longer than desired length"), n(o > 0, "Requested array length <= 0");

      var s = function (t, e) {
        return t.allocUnsafe ? t.allocUnsafe(e) : new t(e);
      }(t, o);

      return this["_toArrayLike" + ("le" === e ? "LE" : "BE")](s, r), s;
    }, o.prototype._toArrayLikeLE = function (t, e) {
      for (var n = 0, i = 0, r = 0, o = 0; r < this.length; r++) {
        var s = this.words[r] << o | i;
        t[n++] = 255 & s, n < t.length && (t[n++] = s >> 8 & 255), n < t.length && (t[n++] = s >> 16 & 255), 6 === o ? (n < t.length && (t[n++] = s >> 24 & 255), i = 0, o = 0) : (i = s >>> 24, o += 2);
      }

      if (n < t.length) for (t[n++] = i; n < t.length;) t[n++] = 0;
    }, o.prototype._toArrayLikeBE = function (t, e) {
      for (var n = t.length - 1, i = 0, r = 0, o = 0; r < this.length; r++) {
        var s = this.words[r] << o | i;
        t[n--] = 255 & s, n >= 0 && (t[n--] = s >> 8 & 255), n >= 0 && (t[n--] = s >> 16 & 255), 6 === o ? (n >= 0 && (t[n--] = s >> 24 & 255), i = 0, o = 0) : (i = s >>> 24, o += 2);
      }

      if (n >= 0) for (t[n--] = i; n >= 0;) t[n--] = 0;
    }, Math.clz32 ? o.prototype._countBits = function (t) {
      return 32 - Math.clz32(t);
    } : o.prototype._countBits = function (t) {
      var e = t,
          n = 0;
      return e >= 4096 && (n += 13, e >>>= 13), e >= 64 && (n += 7, e >>>= 7), e >= 8 && (n += 4, e >>>= 4), e >= 2 && (n += 2, e >>>= 2), n + e;
    }, o.prototype._zeroBits = function (t) {
      if (0 === t) return 26;
      var e = t,
          n = 0;
      return 0 == (8191 & e) && (n += 13, e >>>= 13), 0 == (127 & e) && (n += 7, e >>>= 7), 0 == (15 & e) && (n += 4, e >>>= 4), 0 == (3 & e) && (n += 2, e >>>= 2), 0 == (1 & e) && n++, n;
    }, o.prototype.bitLength = function () {
      var t = this.words[this.length - 1],
          e = this._countBits(t);

      return 26 * (this.length - 1) + e;
    }, o.prototype.zeroBits = function () {
      if (this.isZero()) return 0;

      for (var t = 0, e = 0; e < this.length; e++) {
        var n = this._zeroBits(this.words[e]);

        if (t += n, 26 !== n) break;
      }

      return t;
    }, o.prototype.byteLength = function () {
      return Math.ceil(this.bitLength() / 8);
    }, o.prototype.toTwos = function (t) {
      return 0 !== this.negative ? this.abs().inotn(t).iaddn(1) : this.clone();
    }, o.prototype.fromTwos = function (t) {
      return this.testn(t - 1) ? this.notn(t).iaddn(1).ineg() : this.clone();
    }, o.prototype.isNeg = function () {
      return 0 !== this.negative;
    }, o.prototype.neg = function () {
      return this.clone().ineg();
    }, o.prototype.ineg = function () {
      return this.isZero() || (this.negative ^= 1), this;
    }, o.prototype.iuor = function (t) {
      for (; this.length < t.length;) this.words[this.length++] = 0;

      for (var e = 0; e < t.length; e++) this.words[e] = this.words[e] | t.words[e];

      return this._strip();
    }, o.prototype.ior = function (t) {
      return n(0 == (this.negative | t.negative)), this.iuor(t);
    }, o.prototype.or = function (t) {
      return this.length > t.length ? this.clone().ior(t) : t.clone().ior(this);
    }, o.prototype.uor = function (t) {
      return this.length > t.length ? this.clone().iuor(t) : t.clone().iuor(this);
    }, o.prototype.iuand = function (t) {
      var e;
      e = this.length > t.length ? t : this;

      for (var n = 0; n < e.length; n++) this.words[n] = this.words[n] & t.words[n];

      return this.length = e.length, this._strip();
    }, o.prototype.iand = function (t) {
      return n(0 == (this.negative | t.negative)), this.iuand(t);
    }, o.prototype.and = function (t) {
      return this.length > t.length ? this.clone().iand(t) : t.clone().iand(this);
    }, o.prototype.uand = function (t) {
      return this.length > t.length ? this.clone().iuand(t) : t.clone().iuand(this);
    }, o.prototype.iuxor = function (t) {
      var e, n;
      this.length > t.length ? (e = this, n = t) : (e = t, n = this);

      for (var i = 0; i < n.length; i++) this.words[i] = e.words[i] ^ n.words[i];

      if (this !== e) for (; i < e.length; i++) this.words[i] = e.words[i];
      return this.length = e.length, this._strip();
    }, o.prototype.ixor = function (t) {
      return n(0 == (this.negative | t.negative)), this.iuxor(t);
    }, o.prototype.xor = function (t) {
      return this.length > t.length ? this.clone().ixor(t) : t.clone().ixor(this);
    }, o.prototype.uxor = function (t) {
      return this.length > t.length ? this.clone().iuxor(t) : t.clone().iuxor(this);
    }, o.prototype.inotn = function (t) {
      n("number" == typeof t && t >= 0);
      var e = 0 | Math.ceil(t / 26),
          i = t % 26;
      this._expand(e), i > 0 && e--;

      for (var r = 0; r < e; r++) this.words[r] = 67108863 & ~this.words[r];

      return i > 0 && (this.words[r] = ~this.words[r] & 67108863 >> 26 - i), this._strip();
    }, o.prototype.notn = function (t) {
      return this.clone().inotn(t);
    }, o.prototype.setn = function (t, e) {
      n("number" == typeof t && t >= 0);
      var i = t / 26 | 0,
          r = t % 26;
      return this._expand(i + 1), this.words[i] = e ? this.words[i] | 1 << r : this.words[i] & ~(1 << r), this._strip();
    }, o.prototype.iadd = function (t) {
      var e, n, i;
      if (0 !== this.negative && 0 === t.negative) return this.negative = 0, e = this.isub(t), this.negative ^= 1, this._normSign();
      if (0 === this.negative && 0 !== t.negative) return t.negative = 0, e = this.isub(t), t.negative = 1, e._normSign();
      this.length > t.length ? (n = this, i = t) : (n = t, i = this);

      for (var r = 0, o = 0; o < i.length; o++) e = (0 | n.words[o]) + (0 | i.words[o]) + r, this.words[o] = 67108863 & e, r = e >>> 26;

      for (; 0 !== r && o < n.length; o++) e = (0 | n.words[o]) + r, this.words[o] = 67108863 & e, r = e >>> 26;

      if (this.length = n.length, 0 !== r) this.words[this.length] = r, this.length++;else if (n !== this) for (; o < n.length; o++) this.words[o] = n.words[o];
      return this;
    }, o.prototype.add = function (t) {
      var e;
      return 0 !== t.negative && 0 === this.negative ? (t.negative = 0, e = this.sub(t), t.negative ^= 1, e) : 0 === t.negative && 0 !== this.negative ? (this.negative = 0, e = t.sub(this), this.negative = 1, e) : this.length > t.length ? this.clone().iadd(t) : t.clone().iadd(this);
    }, o.prototype.isub = function (t) {
      if (0 !== t.negative) {
        t.negative = 0;
        var e = this.iadd(t);
        return t.negative = 1, e._normSign();
      }

      if (0 !== this.negative) return this.negative = 0, this.iadd(t), this.negative = 1, this._normSign();
      var n,
          i,
          r = this.cmp(t);
      if (0 === r) return this.negative = 0, this.length = 1, this.words[0] = 0, this;
      r > 0 ? (n = this, i = t) : (n = t, i = this);

      for (var o = 0, s = 0; s < i.length; s++) o = (e = (0 | n.words[s]) - (0 | i.words[s]) + o) >> 26, this.words[s] = 67108863 & e;

      for (; 0 !== o && s < n.length; s++) o = (e = (0 | n.words[s]) + o) >> 26, this.words[s] = 67108863 & e;

      if (0 === o && s < n.length && n !== this) for (; s < n.length; s++) this.words[s] = n.words[s];
      return this.length = Math.max(this.length, s), n !== this && (this.negative = 1), this._strip();
    }, o.prototype.sub = function (t) {
      return this.clone().isub(t);
    };

    var m = function (t, e, n) {
      var i,
          r,
          o,
          s = t.words,
          u = e.words,
          a = n.words,
          c = 0,
          l = 0 | s[0],
          h = 8191 & l,
          f = l >>> 13,
          d = 0 | s[1],
          p = 8191 & d,
          m = d >>> 13,
          b = 0 | s[2],
          g = 8191 & b,
          v = b >>> 13,
          y = 0 | s[3],
          w = 8191 & y,
          _ = y >>> 13,
          k = 0 | s[4],
          x = 8191 & k,
          S = k >>> 13,
          M = 0 | s[5],
          E = 8191 & M,
          C = M >>> 13,
          N = 0 | s[6],
          T = 8191 & N,
          I = N >>> 13,
          A = 0 | s[7],
          O = 8191 & A,
          P = A >>> 13,
          R = 0 | s[8],
          j = 8191 & R,
          B = R >>> 13,
          D = 0 | s[9],
          L = 8191 & D,
          F = D >>> 13,
          W = 0 | u[0],
          q = 8191 & W,
          U = W >>> 13,
          V = 0 | u[1],
          z = 8191 & V,
          H = V >>> 13,
          $ = 0 | u[2],
          J = 8191 & $,
          K = $ >>> 13,
          G = 0 | u[3],
          Y = 8191 & G,
          Z = G >>> 13,
          Q = 0 | u[4],
          X = 8191 & Q,
          tt = Q >>> 13,
          et = 0 | u[5],
          nt = 8191 & et,
          it = et >>> 13,
          rt = 0 | u[6],
          ot = 8191 & rt,
          st = rt >>> 13,
          ut = 0 | u[7],
          at = 8191 & ut,
          ct = ut >>> 13,
          lt = 0 | u[8],
          ht = 8191 & lt,
          ft = lt >>> 13,
          dt = 0 | u[9],
          pt = 8191 & dt,
          mt = dt >>> 13;

      n.negative = t.negative ^ e.negative, n.length = 19;
      var bt = (c + (i = Math.imul(h, q)) | 0) + ((8191 & (r = (r = Math.imul(h, U)) + Math.imul(f, q) | 0)) << 13) | 0;
      c = ((o = Math.imul(f, U)) + (r >>> 13) | 0) + (bt >>> 26) | 0, bt &= 67108863, i = Math.imul(p, q), r = (r = Math.imul(p, U)) + Math.imul(m, q) | 0, o = Math.imul(m, U);
      var gt = (c + (i = i + Math.imul(h, z) | 0) | 0) + ((8191 & (r = (r = r + Math.imul(h, H) | 0) + Math.imul(f, z) | 0)) << 13) | 0;
      c = ((o = o + Math.imul(f, H) | 0) + (r >>> 13) | 0) + (gt >>> 26) | 0, gt &= 67108863, i = Math.imul(g, q), r = (r = Math.imul(g, U)) + Math.imul(v, q) | 0, o = Math.imul(v, U), i = i + Math.imul(p, z) | 0, r = (r = r + Math.imul(p, H) | 0) + Math.imul(m, z) | 0, o = o + Math.imul(m, H) | 0;
      var vt = (c + (i = i + Math.imul(h, J) | 0) | 0) + ((8191 & (r = (r = r + Math.imul(h, K) | 0) + Math.imul(f, J) | 0)) << 13) | 0;
      c = ((o = o + Math.imul(f, K) | 0) + (r >>> 13) | 0) + (vt >>> 26) | 0, vt &= 67108863, i = Math.imul(w, q), r = (r = Math.imul(w, U)) + Math.imul(_, q) | 0, o = Math.imul(_, U), i = i + Math.imul(g, z) | 0, r = (r = r + Math.imul(g, H) | 0) + Math.imul(v, z) | 0, o = o + Math.imul(v, H) | 0, i = i + Math.imul(p, J) | 0, r = (r = r + Math.imul(p, K) | 0) + Math.imul(m, J) | 0, o = o + Math.imul(m, K) | 0;
      var yt = (c + (i = i + Math.imul(h, Y) | 0) | 0) + ((8191 & (r = (r = r + Math.imul(h, Z) | 0) + Math.imul(f, Y) | 0)) << 13) | 0;
      c = ((o = o + Math.imul(f, Z) | 0) + (r >>> 13) | 0) + (yt >>> 26) | 0, yt &= 67108863, i = Math.imul(x, q), r = (r = Math.imul(x, U)) + Math.imul(S, q) | 0, o = Math.imul(S, U), i = i + Math.imul(w, z) | 0, r = (r = r + Math.imul(w, H) | 0) + Math.imul(_, z) | 0, o = o + Math.imul(_, H) | 0, i = i + Math.imul(g, J) | 0, r = (r = r + Math.imul(g, K) | 0) + Math.imul(v, J) | 0, o = o + Math.imul(v, K) | 0, i = i + Math.imul(p, Y) | 0, r = (r = r + Math.imul(p, Z) | 0) + Math.imul(m, Y) | 0, o = o + Math.imul(m, Z) | 0;
      var wt = (c + (i = i + Math.imul(h, X) | 0) | 0) + ((8191 & (r = (r = r + Math.imul(h, tt) | 0) + Math.imul(f, X) | 0)) << 13) | 0;
      c = ((o = o + Math.imul(f, tt) | 0) + (r >>> 13) | 0) + (wt >>> 26) | 0, wt &= 67108863, i = Math.imul(E, q), r = (r = Math.imul(E, U)) + Math.imul(C, q) | 0, o = Math.imul(C, U), i = i + Math.imul(x, z) | 0, r = (r = r + Math.imul(x, H) | 0) + Math.imul(S, z) | 0, o = o + Math.imul(S, H) | 0, i = i + Math.imul(w, J) | 0, r = (r = r + Math.imul(w, K) | 0) + Math.imul(_, J) | 0, o = o + Math.imul(_, K) | 0, i = i + Math.imul(g, Y) | 0, r = (r = r + Math.imul(g, Z) | 0) + Math.imul(v, Y) | 0, o = o + Math.imul(v, Z) | 0, i = i + Math.imul(p, X) | 0, r = (r = r + Math.imul(p, tt) | 0) + Math.imul(m, X) | 0, o = o + Math.imul(m, tt) | 0;

      var _t = (c + (i = i + Math.imul(h, nt) | 0) | 0) + ((8191 & (r = (r = r + Math.imul(h, it) | 0) + Math.imul(f, nt) | 0)) << 13) | 0;

      c = ((o = o + Math.imul(f, it) | 0) + (r >>> 13) | 0) + (_t >>> 26) | 0, _t &= 67108863, i = Math.imul(T, q), r = (r = Math.imul(T, U)) + Math.imul(I, q) | 0, o = Math.imul(I, U), i = i + Math.imul(E, z) | 0, r = (r = r + Math.imul(E, H) | 0) + Math.imul(C, z) | 0, o = o + Math.imul(C, H) | 0, i = i + Math.imul(x, J) | 0, r = (r = r + Math.imul(x, K) | 0) + Math.imul(S, J) | 0, o = o + Math.imul(S, K) | 0, i = i + Math.imul(w, Y) | 0, r = (r = r + Math.imul(w, Z) | 0) + Math.imul(_, Y) | 0, o = o + Math.imul(_, Z) | 0, i = i + Math.imul(g, X) | 0, r = (r = r + Math.imul(g, tt) | 0) + Math.imul(v, X) | 0, o = o + Math.imul(v, tt) | 0, i = i + Math.imul(p, nt) | 0, r = (r = r + Math.imul(p, it) | 0) + Math.imul(m, nt) | 0, o = o + Math.imul(m, it) | 0;
      var kt = (c + (i = i + Math.imul(h, ot) | 0) | 0) + ((8191 & (r = (r = r + Math.imul(h, st) | 0) + Math.imul(f, ot) | 0)) << 13) | 0;
      c = ((o = o + Math.imul(f, st) | 0) + (r >>> 13) | 0) + (kt >>> 26) | 0, kt &= 67108863, i = Math.imul(O, q), r = (r = Math.imul(O, U)) + Math.imul(P, q) | 0, o = Math.imul(P, U), i = i + Math.imul(T, z) | 0, r = (r = r + Math.imul(T, H) | 0) + Math.imul(I, z) | 0, o = o + Math.imul(I, H) | 0, i = i + Math.imul(E, J) | 0, r = (r = r + Math.imul(E, K) | 0) + Math.imul(C, J) | 0, o = o + Math.imul(C, K) | 0, i = i + Math.imul(x, Y) | 0, r = (r = r + Math.imul(x, Z) | 0) + Math.imul(S, Y) | 0, o = o + Math.imul(S, Z) | 0, i = i + Math.imul(w, X) | 0, r = (r = r + Math.imul(w, tt) | 0) + Math.imul(_, X) | 0, o = o + Math.imul(_, tt) | 0, i = i + Math.imul(g, nt) | 0, r = (r = r + Math.imul(g, it) | 0) + Math.imul(v, nt) | 0, o = o + Math.imul(v, it) | 0, i = i + Math.imul(p, ot) | 0, r = (r = r + Math.imul(p, st) | 0) + Math.imul(m, ot) | 0, o = o + Math.imul(m, st) | 0;
      var xt = (c + (i = i + Math.imul(h, at) | 0) | 0) + ((8191 & (r = (r = r + Math.imul(h, ct) | 0) + Math.imul(f, at) | 0)) << 13) | 0;
      c = ((o = o + Math.imul(f, ct) | 0) + (r >>> 13) | 0) + (xt >>> 26) | 0, xt &= 67108863, i = Math.imul(j, q), r = (r = Math.imul(j, U)) + Math.imul(B, q) | 0, o = Math.imul(B, U), i = i + Math.imul(O, z) | 0, r = (r = r + Math.imul(O, H) | 0) + Math.imul(P, z) | 0, o = o + Math.imul(P, H) | 0, i = i + Math.imul(T, J) | 0, r = (r = r + Math.imul(T, K) | 0) + Math.imul(I, J) | 0, o = o + Math.imul(I, K) | 0, i = i + Math.imul(E, Y) | 0, r = (r = r + Math.imul(E, Z) | 0) + Math.imul(C, Y) | 0, o = o + Math.imul(C, Z) | 0, i = i + Math.imul(x, X) | 0, r = (r = r + Math.imul(x, tt) | 0) + Math.imul(S, X) | 0, o = o + Math.imul(S, tt) | 0, i = i + Math.imul(w, nt) | 0, r = (r = r + Math.imul(w, it) | 0) + Math.imul(_, nt) | 0, o = o + Math.imul(_, it) | 0, i = i + Math.imul(g, ot) | 0, r = (r = r + Math.imul(g, st) | 0) + Math.imul(v, ot) | 0, o = o + Math.imul(v, st) | 0, i = i + Math.imul(p, at) | 0, r = (r = r + Math.imul(p, ct) | 0) + Math.imul(m, at) | 0, o = o + Math.imul(m, ct) | 0;
      var St = (c + (i = i + Math.imul(h, ht) | 0) | 0) + ((8191 & (r = (r = r + Math.imul(h, ft) | 0) + Math.imul(f, ht) | 0)) << 13) | 0;
      c = ((o = o + Math.imul(f, ft) | 0) + (r >>> 13) | 0) + (St >>> 26) | 0, St &= 67108863, i = Math.imul(L, q), r = (r = Math.imul(L, U)) + Math.imul(F, q) | 0, o = Math.imul(F, U), i = i + Math.imul(j, z) | 0, r = (r = r + Math.imul(j, H) | 0) + Math.imul(B, z) | 0, o = o + Math.imul(B, H) | 0, i = i + Math.imul(O, J) | 0, r = (r = r + Math.imul(O, K) | 0) + Math.imul(P, J) | 0, o = o + Math.imul(P, K) | 0, i = i + Math.imul(T, Y) | 0, r = (r = r + Math.imul(T, Z) | 0) + Math.imul(I, Y) | 0, o = o + Math.imul(I, Z) | 0, i = i + Math.imul(E, X) | 0, r = (r = r + Math.imul(E, tt) | 0) + Math.imul(C, X) | 0, o = o + Math.imul(C, tt) | 0, i = i + Math.imul(x, nt) | 0, r = (r = r + Math.imul(x, it) | 0) + Math.imul(S, nt) | 0, o = o + Math.imul(S, it) | 0, i = i + Math.imul(w, ot) | 0, r = (r = r + Math.imul(w, st) | 0) + Math.imul(_, ot) | 0, o = o + Math.imul(_, st) | 0, i = i + Math.imul(g, at) | 0, r = (r = r + Math.imul(g, ct) | 0) + Math.imul(v, at) | 0, o = o + Math.imul(v, ct) | 0, i = i + Math.imul(p, ht) | 0, r = (r = r + Math.imul(p, ft) | 0) + Math.imul(m, ht) | 0, o = o + Math.imul(m, ft) | 0;
      var Mt = (c + (i = i + Math.imul(h, pt) | 0) | 0) + ((8191 & (r = (r = r + Math.imul(h, mt) | 0) + Math.imul(f, pt) | 0)) << 13) | 0;
      c = ((o = o + Math.imul(f, mt) | 0) + (r >>> 13) | 0) + (Mt >>> 26) | 0, Mt &= 67108863, i = Math.imul(L, z), r = (r = Math.imul(L, H)) + Math.imul(F, z) | 0, o = Math.imul(F, H), i = i + Math.imul(j, J) | 0, r = (r = r + Math.imul(j, K) | 0) + Math.imul(B, J) | 0, o = o + Math.imul(B, K) | 0, i = i + Math.imul(O, Y) | 0, r = (r = r + Math.imul(O, Z) | 0) + Math.imul(P, Y) | 0, o = o + Math.imul(P, Z) | 0, i = i + Math.imul(T, X) | 0, r = (r = r + Math.imul(T, tt) | 0) + Math.imul(I, X) | 0, o = o + Math.imul(I, tt) | 0, i = i + Math.imul(E, nt) | 0, r = (r = r + Math.imul(E, it) | 0) + Math.imul(C, nt) | 0, o = o + Math.imul(C, it) | 0, i = i + Math.imul(x, ot) | 0, r = (r = r + Math.imul(x, st) | 0) + Math.imul(S, ot) | 0, o = o + Math.imul(S, st) | 0, i = i + Math.imul(w, at) | 0, r = (r = r + Math.imul(w, ct) | 0) + Math.imul(_, at) | 0, o = o + Math.imul(_, ct) | 0, i = i + Math.imul(g, ht) | 0, r = (r = r + Math.imul(g, ft) | 0) + Math.imul(v, ht) | 0, o = o + Math.imul(v, ft) | 0;
      var Et = (c + (i = i + Math.imul(p, pt) | 0) | 0) + ((8191 & (r = (r = r + Math.imul(p, mt) | 0) + Math.imul(m, pt) | 0)) << 13) | 0;
      c = ((o = o + Math.imul(m, mt) | 0) + (r >>> 13) | 0) + (Et >>> 26) | 0, Et &= 67108863, i = Math.imul(L, J), r = (r = Math.imul(L, K)) + Math.imul(F, J) | 0, o = Math.imul(F, K), i = i + Math.imul(j, Y) | 0, r = (r = r + Math.imul(j, Z) | 0) + Math.imul(B, Y) | 0, o = o + Math.imul(B, Z) | 0, i = i + Math.imul(O, X) | 0, r = (r = r + Math.imul(O, tt) | 0) + Math.imul(P, X) | 0, o = o + Math.imul(P, tt) | 0, i = i + Math.imul(T, nt) | 0, r = (r = r + Math.imul(T, it) | 0) + Math.imul(I, nt) | 0, o = o + Math.imul(I, it) | 0, i = i + Math.imul(E, ot) | 0, r = (r = r + Math.imul(E, st) | 0) + Math.imul(C, ot) | 0, o = o + Math.imul(C, st) | 0, i = i + Math.imul(x, at) | 0, r = (r = r + Math.imul(x, ct) | 0) + Math.imul(S, at) | 0, o = o + Math.imul(S, ct) | 0, i = i + Math.imul(w, ht) | 0, r = (r = r + Math.imul(w, ft) | 0) + Math.imul(_, ht) | 0, o = o + Math.imul(_, ft) | 0;
      var Ct = (c + (i = i + Math.imul(g, pt) | 0) | 0) + ((8191 & (r = (r = r + Math.imul(g, mt) | 0) + Math.imul(v, pt) | 0)) << 13) | 0;
      c = ((o = o + Math.imul(v, mt) | 0) + (r >>> 13) | 0) + (Ct >>> 26) | 0, Ct &= 67108863, i = Math.imul(L, Y), r = (r = Math.imul(L, Z)) + Math.imul(F, Y) | 0, o = Math.imul(F, Z), i = i + Math.imul(j, X) | 0, r = (r = r + Math.imul(j, tt) | 0) + Math.imul(B, X) | 0, o = o + Math.imul(B, tt) | 0, i = i + Math.imul(O, nt) | 0, r = (r = r + Math.imul(O, it) | 0) + Math.imul(P, nt) | 0, o = o + Math.imul(P, it) | 0, i = i + Math.imul(T, ot) | 0, r = (r = r + Math.imul(T, st) | 0) + Math.imul(I, ot) | 0, o = o + Math.imul(I, st) | 0, i = i + Math.imul(E, at) | 0, r = (r = r + Math.imul(E, ct) | 0) + Math.imul(C, at) | 0, o = o + Math.imul(C, ct) | 0, i = i + Math.imul(x, ht) | 0, r = (r = r + Math.imul(x, ft) | 0) + Math.imul(S, ht) | 0, o = o + Math.imul(S, ft) | 0;
      var Nt = (c + (i = i + Math.imul(w, pt) | 0) | 0) + ((8191 & (r = (r = r + Math.imul(w, mt) | 0) + Math.imul(_, pt) | 0)) << 13) | 0;
      c = ((o = o + Math.imul(_, mt) | 0) + (r >>> 13) | 0) + (Nt >>> 26) | 0, Nt &= 67108863, i = Math.imul(L, X), r = (r = Math.imul(L, tt)) + Math.imul(F, X) | 0, o = Math.imul(F, tt), i = i + Math.imul(j, nt) | 0, r = (r = r + Math.imul(j, it) | 0) + Math.imul(B, nt) | 0, o = o + Math.imul(B, it) | 0, i = i + Math.imul(O, ot) | 0, r = (r = r + Math.imul(O, st) | 0) + Math.imul(P, ot) | 0, o = o + Math.imul(P, st) | 0, i = i + Math.imul(T, at) | 0, r = (r = r + Math.imul(T, ct) | 0) + Math.imul(I, at) | 0, o = o + Math.imul(I, ct) | 0, i = i + Math.imul(E, ht) | 0, r = (r = r + Math.imul(E, ft) | 0) + Math.imul(C, ht) | 0, o = o + Math.imul(C, ft) | 0;
      var Tt = (c + (i = i + Math.imul(x, pt) | 0) | 0) + ((8191 & (r = (r = r + Math.imul(x, mt) | 0) + Math.imul(S, pt) | 0)) << 13) | 0;
      c = ((o = o + Math.imul(S, mt) | 0) + (r >>> 13) | 0) + (Tt >>> 26) | 0, Tt &= 67108863, i = Math.imul(L, nt), r = (r = Math.imul(L, it)) + Math.imul(F, nt) | 0, o = Math.imul(F, it), i = i + Math.imul(j, ot) | 0, r = (r = r + Math.imul(j, st) | 0) + Math.imul(B, ot) | 0, o = o + Math.imul(B, st) | 0, i = i + Math.imul(O, at) | 0, r = (r = r + Math.imul(O, ct) | 0) + Math.imul(P, at) | 0, o = o + Math.imul(P, ct) | 0, i = i + Math.imul(T, ht) | 0, r = (r = r + Math.imul(T, ft) | 0) + Math.imul(I, ht) | 0, o = o + Math.imul(I, ft) | 0;
      var It = (c + (i = i + Math.imul(E, pt) | 0) | 0) + ((8191 & (r = (r = r + Math.imul(E, mt) | 0) + Math.imul(C, pt) | 0)) << 13) | 0;
      c = ((o = o + Math.imul(C, mt) | 0) + (r >>> 13) | 0) + (It >>> 26) | 0, It &= 67108863, i = Math.imul(L, ot), r = (r = Math.imul(L, st)) + Math.imul(F, ot) | 0, o = Math.imul(F, st), i = i + Math.imul(j, at) | 0, r = (r = r + Math.imul(j, ct) | 0) + Math.imul(B, at) | 0, o = o + Math.imul(B, ct) | 0, i = i + Math.imul(O, ht) | 0, r = (r = r + Math.imul(O, ft) | 0) + Math.imul(P, ht) | 0, o = o + Math.imul(P, ft) | 0;
      var At = (c + (i = i + Math.imul(T, pt) | 0) | 0) + ((8191 & (r = (r = r + Math.imul(T, mt) | 0) + Math.imul(I, pt) | 0)) << 13) | 0;
      c = ((o = o + Math.imul(I, mt) | 0) + (r >>> 13) | 0) + (At >>> 26) | 0, At &= 67108863, i = Math.imul(L, at), r = (r = Math.imul(L, ct)) + Math.imul(F, at) | 0, o = Math.imul(F, ct), i = i + Math.imul(j, ht) | 0, r = (r = r + Math.imul(j, ft) | 0) + Math.imul(B, ht) | 0, o = o + Math.imul(B, ft) | 0;
      var Ot = (c + (i = i + Math.imul(O, pt) | 0) | 0) + ((8191 & (r = (r = r + Math.imul(O, mt) | 0) + Math.imul(P, pt) | 0)) << 13) | 0;
      c = ((o = o + Math.imul(P, mt) | 0) + (r >>> 13) | 0) + (Ot >>> 26) | 0, Ot &= 67108863, i = Math.imul(L, ht), r = (r = Math.imul(L, ft)) + Math.imul(F, ht) | 0, o = Math.imul(F, ft);
      var Pt = (c + (i = i + Math.imul(j, pt) | 0) | 0) + ((8191 & (r = (r = r + Math.imul(j, mt) | 0) + Math.imul(B, pt) | 0)) << 13) | 0;
      c = ((o = o + Math.imul(B, mt) | 0) + (r >>> 13) | 0) + (Pt >>> 26) | 0, Pt &= 67108863;
      var Rt = (c + (i = Math.imul(L, pt)) | 0) + ((8191 & (r = (r = Math.imul(L, mt)) + Math.imul(F, pt) | 0)) << 13) | 0;
      return c = ((o = Math.imul(F, mt)) + (r >>> 13) | 0) + (Rt >>> 26) | 0, Rt &= 67108863, a[0] = bt, a[1] = gt, a[2] = vt, a[3] = yt, a[4] = wt, a[5] = _t, a[6] = kt, a[7] = xt, a[8] = St, a[9] = Mt, a[10] = Et, a[11] = Ct, a[12] = Nt, a[13] = Tt, a[14] = It, a[15] = At, a[16] = Ot, a[17] = Pt, a[18] = Rt, 0 !== c && (a[19] = c, n.length++), n;
    };

    function b(t, e, n) {
      n.negative = e.negative ^ t.negative, n.length = t.length + e.length;

      for (var i = 0, r = 0, o = 0; o < n.length - 1; o++) {
        var s = r;
        r = 0;

        for (var u = 67108863 & i, a = Math.min(o, e.length - 1), c = Math.max(0, o - t.length + 1); c <= a; c++) {
          var l = o - c,
              h = (0 | t.words[l]) * (0 | e.words[c]),
              f = 67108863 & h;
          u = 67108863 & (f = f + u | 0), r += (s = (s = s + (h / 67108864 | 0) | 0) + (f >>> 26) | 0) >>> 26, s &= 67108863;
        }

        n.words[o] = u, i = s, s = r;
      }

      return 0 !== i ? n.words[o] = i : n.length--, n._strip();
    }

    function g(t, e, n) {
      return b(t, e, n);
    }

    Math.imul || (m = p), o.prototype.mulTo = function (t, e) {
      var n = this.length + t.length;
      return 10 === this.length && 10 === t.length ? m(this, t, e) : n < 63 ? p(this, t, e) : n < 1024 ? b(this, t, e) : g(this, t, e);
    }, o.prototype.mul = function (t) {
      var e = new o(null);
      return e.words = new Array(this.length + t.length), this.mulTo(t, e);
    }, o.prototype.mulf = function (t) {
      var e = new o(null);
      return e.words = new Array(this.length + t.length), g(this, t, e);
    }, o.prototype.imul = function (t) {
      return this.clone().mulTo(t, this);
    }, o.prototype.imuln = function (t) {
      var e = t < 0;
      e && (t = -t), n("number" == typeof t), n(t < 67108864);

      for (var i = 0, r = 0; r < this.length; r++) {
        var o = (0 | this.words[r]) * t,
            s = (67108863 & o) + (67108863 & i);
        i >>= 26, i += o / 67108864 | 0, i += s >>> 26, this.words[r] = 67108863 & s;
      }

      return 0 !== i && (this.words[r] = i, this.length++), e ? this.ineg() : this;
    }, o.prototype.muln = function (t) {
      return this.clone().imuln(t);
    }, o.prototype.sqr = function () {
      return this.mul(this);
    }, o.prototype.isqr = function () {
      return this.imul(this.clone());
    }, o.prototype.pow = function (t) {
      var e = function (t) {
        for (var e = new Array(t.bitLength()), n = 0; n < e.length; n++) {
          var i = n / 26 | 0,
              r = n % 26;
          e[n] = t.words[i] >>> r & 1;
        }

        return e;
      }(t);

      if (0 === e.length) return new o(1);

      for (var n = this, i = 0; i < e.length && 0 === e[i]; i++, n = n.sqr());

      if (++i < e.length) for (var r = n.sqr(); i < e.length; i++, r = r.sqr()) 0 !== e[i] && (n = n.mul(r));
      return n;
    }, o.prototype.iushln = function (t) {
      n("number" == typeof t && t >= 0);
      var e,
          i = t % 26,
          r = (t - i) / 26,
          o = 67108863 >>> 26 - i << 26 - i;

      if (0 !== i) {
        var s = 0;

        for (e = 0; e < this.length; e++) {
          var u = this.words[e] & o,
              a = (0 | this.words[e]) - u << i;
          this.words[e] = a | s, s = u >>> 26 - i;
        }

        s && (this.words[e] = s, this.length++);
      }

      if (0 !== r) {
        for (e = this.length - 1; e >= 0; e--) this.words[e + r] = this.words[e];

        for (e = 0; e < r; e++) this.words[e] = 0;

        this.length += r;
      }

      return this._strip();
    }, o.prototype.ishln = function (t) {
      return n(0 === this.negative), this.iushln(t);
    }, o.prototype.iushrn = function (t, e, i) {
      var r;
      n("number" == typeof t && t >= 0), r = e ? (e - e % 26) / 26 : 0;
      var o = t % 26,
          s = Math.min((t - o) / 26, this.length),
          u = 67108863 ^ 67108863 >>> o << o,
          a = i;

      if (r -= s, r = Math.max(0, r), a) {
        for (var c = 0; c < s; c++) a.words[c] = this.words[c];

        a.length = s;
      }

      if (0 === s) ;else if (this.length > s) for (this.length -= s, c = 0; c < this.length; c++) this.words[c] = this.words[c + s];else this.words[0] = 0, this.length = 1;
      var l = 0;

      for (c = this.length - 1; c >= 0 && (0 !== l || c >= r); c--) {
        var h = 0 | this.words[c];
        this.words[c] = l << 26 - o | h >>> o, l = h & u;
      }

      return a && 0 !== l && (a.words[a.length++] = l), 0 === this.length && (this.words[0] = 0, this.length = 1), this._strip();
    }, o.prototype.ishrn = function (t, e, i) {
      return n(0 === this.negative), this.iushrn(t, e, i);
    }, o.prototype.shln = function (t) {
      return this.clone().ishln(t);
    }, o.prototype.ushln = function (t) {
      return this.clone().iushln(t);
    }, o.prototype.shrn = function (t) {
      return this.clone().ishrn(t);
    }, o.prototype.ushrn = function (t) {
      return this.clone().iushrn(t);
    }, o.prototype.testn = function (t) {
      n("number" == typeof t && t >= 0);
      var e = t % 26,
          i = (t - e) / 26,
          r = 1 << e;
      return !(this.length <= i) && !!(this.words[i] & r);
    }, o.prototype.imaskn = function (t) {
      n("number" == typeof t && t >= 0);
      var e = t % 26,
          i = (t - e) / 26;
      if (n(0 === this.negative, "imaskn works only with positive numbers"), this.length <= i) return this;

      if (0 !== e && i++, this.length = Math.min(i, this.length), 0 !== e) {
        var r = 67108863 ^ 67108863 >>> e << e;
        this.words[this.length - 1] &= r;
      }

      return this._strip();
    }, o.prototype.maskn = function (t) {
      return this.clone().imaskn(t);
    }, o.prototype.iaddn = function (t) {
      return n("number" == typeof t), n(t < 67108864), t < 0 ? this.isubn(-t) : 0 !== this.negative ? 1 === this.length && (0 | this.words[0]) <= t ? (this.words[0] = t - (0 | this.words[0]), this.negative = 0, this) : (this.negative = 0, this.isubn(t), this.negative = 1, this) : this._iaddn(t);
    }, o.prototype._iaddn = function (t) {
      this.words[0] += t;

      for (var e = 0; e < this.length && this.words[e] >= 67108864; e++) this.words[e] -= 67108864, e === this.length - 1 ? this.words[e + 1] = 1 : this.words[e + 1]++;

      return this.length = Math.max(this.length, e + 1), this;
    }, o.prototype.isubn = function (t) {
      if (n("number" == typeof t), n(t < 67108864), t < 0) return this.iaddn(-t);
      if (0 !== this.negative) return this.negative = 0, this.iaddn(t), this.negative = 1, this;
      if (this.words[0] -= t, 1 === this.length && this.words[0] < 0) this.words[0] = -this.words[0], this.negative = 1;else for (var e = 0; e < this.length && this.words[e] < 0; e++) this.words[e] += 67108864, this.words[e + 1] -= 1;
      return this._strip();
    }, o.prototype.addn = function (t) {
      return this.clone().iaddn(t);
    }, o.prototype.subn = function (t) {
      return this.clone().isubn(t);
    }, o.prototype.iabs = function () {
      return this.negative = 0, this;
    }, o.prototype.abs = function () {
      return this.clone().iabs();
    }, o.prototype._ishlnsubmul = function (t, e, i) {
      var r,
          o,
          s = t.length + i;

      this._expand(s);

      var u = 0;

      for (r = 0; r < t.length; r++) {
        o = (0 | this.words[r + i]) + u;
        var a = (0 | t.words[r]) * e;
        u = ((o -= 67108863 & a) >> 26) - (a / 67108864 | 0), this.words[r + i] = 67108863 & o;
      }

      for (; r < this.length - i; r++) u = (o = (0 | this.words[r + i]) + u) >> 26, this.words[r + i] = 67108863 & o;

      if (0 === u) return this._strip();

      for (n(-1 === u), u = 0, r = 0; r < this.length; r++) u = (o = -(0 | this.words[r]) + u) >> 26, this.words[r] = 67108863 & o;

      return this.negative = 1, this._strip();
    }, o.prototype._wordDiv = function (t, e) {
      var n = (this.length, t.length),
          i = this.clone(),
          r = t,
          s = 0 | r.words[r.length - 1];
      0 !== (n = 26 - this._countBits(s)) && (r = r.ushln(n), i.iushln(n), s = 0 | r.words[r.length - 1]);
      var u,
          a = i.length - r.length;

      if ("mod" !== e) {
        (u = new o(null)).length = a + 1, u.words = new Array(u.length);

        for (var c = 0; c < u.length; c++) u.words[c] = 0;
      }

      var l = i.clone()._ishlnsubmul(r, 1, a);

      0 === l.negative && (i = l, u && (u.words[a] = 1));

      for (var h = a - 1; h >= 0; h--) {
        var f = 67108864 * (0 | i.words[r.length + h]) + (0 | i.words[r.length + h - 1]);

        for (f = Math.min(f / s | 0, 67108863), i._ishlnsubmul(r, f, h); 0 !== i.negative;) f--, i.negative = 0, i._ishlnsubmul(r, 1, h), i.isZero() || (i.negative ^= 1);

        u && (u.words[h] = f);
      }

      return u && u._strip(), i._strip(), "div" !== e && 0 !== n && i.iushrn(n), {
        div: u || null,
        mod: i
      };
    }, o.prototype.divmod = function (t, e, i) {
      return n(!t.isZero()), this.isZero() ? {
        div: new o(0),
        mod: new o(0)
      } : 0 !== this.negative && 0 === t.negative ? (u = this.neg().divmod(t, e), "mod" !== e && (r = u.div.neg()), "div" !== e && (s = u.mod.neg(), i && 0 !== s.negative && s.iadd(t)), {
        div: r,
        mod: s
      }) : 0 === this.negative && 0 !== t.negative ? (u = this.divmod(t.neg(), e), "mod" !== e && (r = u.div.neg()), {
        div: r,
        mod: u.mod
      }) : 0 != (this.negative & t.negative) ? (u = this.neg().divmod(t.neg(), e), "div" !== e && (s = u.mod.neg(), i && 0 !== s.negative && s.isub(t)), {
        div: u.div,
        mod: s
      }) : t.length > this.length || this.cmp(t) < 0 ? {
        div: new o(0),
        mod: this
      } : 1 === t.length ? "div" === e ? {
        div: this.divn(t.words[0]),
        mod: null
      } : "mod" === e ? {
        div: null,
        mod: new o(this.modrn(t.words[0]))
      } : {
        div: this.divn(t.words[0]),
        mod: new o(this.modrn(t.words[0]))
      } : this._wordDiv(t, e);
      var r, s, u;
    }, o.prototype.div = function (t) {
      return this.divmod(t, "div", !1).div;
    }, o.prototype.mod = function (t) {
      return this.divmod(t, "mod", !1).mod;
    }, o.prototype.umod = function (t) {
      return this.divmod(t, "mod", !0).mod;
    }, o.prototype.divRound = function (t) {
      var e = this.divmod(t);
      if (e.mod.isZero()) return e.div;
      var n = 0 !== e.div.negative ? e.mod.isub(t) : e.mod,
          i = t.ushrn(1),
          r = t.andln(1),
          o = n.cmp(i);
      return o < 0 || 1 === r && 0 === o ? e.div : 0 !== e.div.negative ? e.div.isubn(1) : e.div.iaddn(1);
    }, o.prototype.modrn = function (t) {
      var e = t < 0;
      e && (t = -t), n(t <= 67108863);

      for (var i = (1 << 26) % t, r = 0, o = this.length - 1; o >= 0; o--) r = (i * r + (0 | this.words[o])) % t;

      return e ? -r : r;
    }, o.prototype.modn = function (t) {
      return this.modrn(t);
    }, o.prototype.idivn = function (t) {
      var e = t < 0;
      e && (t = -t), n(t <= 67108863);

      for (var i = 0, r = this.length - 1; r >= 0; r--) {
        var o = (0 | this.words[r]) + 67108864 * i;
        this.words[r] = o / t | 0, i = o % t;
      }

      return this._strip(), e ? this.ineg() : this;
    }, o.prototype.divn = function (t) {
      return this.clone().idivn(t);
    }, o.prototype.egcd = function (t) {
      n(0 === t.negative), n(!t.isZero());
      var e = this,
          i = t.clone();
      e = 0 !== e.negative ? e.umod(t) : e.clone();

      for (var r = new o(1), s = new o(0), u = new o(0), a = new o(1), c = 0; e.isEven() && i.isEven();) e.iushrn(1), i.iushrn(1), ++c;

      for (var l = i.clone(), h = e.clone(); !e.isZero();) {
        for (var f = 0, d = 1; 0 == (e.words[0] & d) && f < 26; ++f, d <<= 1);

        if (f > 0) for (e.iushrn(f); f-- > 0;) (r.isOdd() || s.isOdd()) && (r.iadd(l), s.isub(h)), r.iushrn(1), s.iushrn(1);

        for (var p = 0, m = 1; 0 == (i.words[0] & m) && p < 26; ++p, m <<= 1);

        if (p > 0) for (i.iushrn(p); p-- > 0;) (u.isOdd() || a.isOdd()) && (u.iadd(l), a.isub(h)), u.iushrn(1), a.iushrn(1);
        e.cmp(i) >= 0 ? (e.isub(i), r.isub(u), s.isub(a)) : (i.isub(e), u.isub(r), a.isub(s));
      }

      return {
        a: u,
        b: a,
        gcd: i.iushln(c)
      };
    }, o.prototype._invmp = function (t) {
      n(0 === t.negative), n(!t.isZero());
      var e = this,
          i = t.clone();
      e = 0 !== e.negative ? e.umod(t) : e.clone();

      for (var r, s = new o(1), u = new o(0), a = i.clone(); e.cmpn(1) > 0 && i.cmpn(1) > 0;) {
        for (var c = 0, l = 1; 0 == (e.words[0] & l) && c < 26; ++c, l <<= 1);

        if (c > 0) for (e.iushrn(c); c-- > 0;) s.isOdd() && s.iadd(a), s.iushrn(1);

        for (var h = 0, f = 1; 0 == (i.words[0] & f) && h < 26; ++h, f <<= 1);

        if (h > 0) for (i.iushrn(h); h-- > 0;) u.isOdd() && u.iadd(a), u.iushrn(1);
        e.cmp(i) >= 0 ? (e.isub(i), s.isub(u)) : (i.isub(e), u.isub(s));
      }

      return (r = 0 === e.cmpn(1) ? s : u).cmpn(0) < 0 && r.iadd(t), r;
    }, o.prototype.gcd = function (t) {
      if (this.isZero()) return t.abs();
      if (t.isZero()) return this.abs();
      var e = this.clone(),
          n = t.clone();
      e.negative = 0, n.negative = 0;

      for (var i = 0; e.isEven() && n.isEven(); i++) e.iushrn(1), n.iushrn(1);

      for (;;) {
        for (; e.isEven();) e.iushrn(1);

        for (; n.isEven();) n.iushrn(1);

        var r = e.cmp(n);

        if (r < 0) {
          var o = e;
          e = n, n = o;
        } else if (0 === r || 0 === n.cmpn(1)) break;

        e.isub(n);
      }

      return n.iushln(i);
    }, o.prototype.invm = function (t) {
      return this.egcd(t).a.umod(t);
    }, o.prototype.isEven = function () {
      return 0 == (1 & this.words[0]);
    }, o.prototype.isOdd = function () {
      return 1 == (1 & this.words[0]);
    }, o.prototype.andln = function (t) {
      return this.words[0] & t;
    }, o.prototype.bincn = function (t) {
      n("number" == typeof t);
      var e = t % 26,
          i = (t - e) / 26,
          r = 1 << e;
      if (this.length <= i) return this._expand(i + 1), this.words[i] |= r, this;

      for (var o = r, s = i; 0 !== o && s < this.length; s++) {
        var u = 0 | this.words[s];
        o = (u += o) >>> 26, u &= 67108863, this.words[s] = u;
      }

      return 0 !== o && (this.words[s] = o, this.length++), this;
    }, o.prototype.isZero = function () {
      return 1 === this.length && 0 === this.words[0];
    }, o.prototype.cmpn = function (t) {
      var e,
          i = t < 0;
      if (0 !== this.negative && !i) return -1;
      if (0 === this.negative && i) return 1;
      if (this._strip(), this.length > 1) e = 1;else {
        i && (t = -t), n(t <= 67108863, "Number is too big");
        var r = 0 | this.words[0];
        e = r === t ? 0 : r < t ? -1 : 1;
      }
      return 0 !== this.negative ? 0 | -e : e;
    }, o.prototype.cmp = function (t) {
      if (0 !== this.negative && 0 === t.negative) return -1;
      if (0 === this.negative && 0 !== t.negative) return 1;
      var e = this.ucmp(t);
      return 0 !== this.negative ? 0 | -e : e;
    }, o.prototype.ucmp = function (t) {
      if (this.length > t.length) return 1;
      if (this.length < t.length) return -1;

      for (var e = 0, n = this.length - 1; n >= 0; n--) {
        var i = 0 | this.words[n],
            r = 0 | t.words[n];

        if (i !== r) {
          i < r ? e = -1 : i > r && (e = 1);
          break;
        }
      }

      return e;
    }, o.prototype.gtn = function (t) {
      return 1 === this.cmpn(t);
    }, o.prototype.gt = function (t) {
      return 1 === this.cmp(t);
    }, o.prototype.gten = function (t) {
      return this.cmpn(t) >= 0;
    }, o.prototype.gte = function (t) {
      return this.cmp(t) >= 0;
    }, o.prototype.ltn = function (t) {
      return -1 === this.cmpn(t);
    }, o.prototype.lt = function (t) {
      return -1 === this.cmp(t);
    }, o.prototype.lten = function (t) {
      return this.cmpn(t) <= 0;
    }, o.prototype.lte = function (t) {
      return this.cmp(t) <= 0;
    }, o.prototype.eqn = function (t) {
      return 0 === this.cmpn(t);
    }, o.prototype.eq = function (t) {
      return 0 === this.cmp(t);
    }, o.red = function (t) {
      return new S(t);
    }, o.prototype.toRed = function (t) {
      return n(!this.red, "Already a number in reduction context"), n(0 === this.negative, "red works only with positives"), t.convertTo(this)._forceRed(t);
    }, o.prototype.fromRed = function () {
      return n(this.red, "fromRed works only with numbers in reduction context"), this.red.convertFrom(this);
    }, o.prototype._forceRed = function (t) {
      return this.red = t, this;
    }, o.prototype.forceRed = function (t) {
      return n(!this.red, "Already a number in reduction context"), this._forceRed(t);
    }, o.prototype.redAdd = function (t) {
      return n(this.red, "redAdd works only with red numbers"), this.red.add(this, t);
    }, o.prototype.redIAdd = function (t) {
      return n(this.red, "redIAdd works only with red numbers"), this.red.iadd(this, t);
    }, o.prototype.redSub = function (t) {
      return n(this.red, "redSub works only with red numbers"), this.red.sub(this, t);
    }, o.prototype.redISub = function (t) {
      return n(this.red, "redISub works only with red numbers"), this.red.isub(this, t);
    }, o.prototype.redShl = function (t) {
      return n(this.red, "redShl works only with red numbers"), this.red.shl(this, t);
    }, o.prototype.redMul = function (t) {
      return n(this.red, "redMul works only with red numbers"), this.red._verify2(this, t), this.red.mul(this, t);
    }, o.prototype.redIMul = function (t) {
      return n(this.red, "redMul works only with red numbers"), this.red._verify2(this, t), this.red.imul(this, t);
    }, o.prototype.redSqr = function () {
      return n(this.red, "redSqr works only with red numbers"), this.red._verify1(this), this.red.sqr(this);
    }, o.prototype.redISqr = function () {
      return n(this.red, "redISqr works only with red numbers"), this.red._verify1(this), this.red.isqr(this);
    }, o.prototype.redSqrt = function () {
      return n(this.red, "redSqrt works only with red numbers"), this.red._verify1(this), this.red.sqrt(this);
    }, o.prototype.redInvm = function () {
      return n(this.red, "redInvm works only with red numbers"), this.red._verify1(this), this.red.invm(this);
    }, o.prototype.redNeg = function () {
      return n(this.red, "redNeg works only with red numbers"), this.red._verify1(this), this.red.neg(this);
    }, o.prototype.redPow = function (t) {
      return n(this.red && !t.red, "redPow(normalNum)"), this.red._verify1(this), this.red.pow(this, t);
    };
    var v = {
      k256: null,
      p224: null,
      p192: null,
      p25519: null
    };

    function y(t, e) {
      this.name = t, this.p = new o(e, 16), this.n = this.p.bitLength(), this.k = new o(1).iushln(this.n).isub(this.p), this.tmp = this._tmp();
    }

    function w() {
      y.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f");
    }

    function _() {
      y.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001");
    }

    function k() {
      y.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff");
    }

    function x() {
      y.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed");
    }

    function S(t) {
      if ("string" == typeof t) {
        var e = o._prime(t);

        this.m = e.p, this.prime = e;
      } else n(t.gtn(1), "modulus must be greater than 1"), this.m = t, this.prime = null;
    }

    function M(t) {
      S.call(this, t), this.shift = this.m.bitLength(), this.shift % 26 != 0 && (this.shift += 26 - this.shift % 26), this.r = new o(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv);
    }

    y.prototype._tmp = function () {
      var t = new o(null);
      return t.words = new Array(Math.ceil(this.n / 13)), t;
    }, y.prototype.ireduce = function (t) {
      var e,
          n = t;

      do {
        this.split(n, this.tmp), e = (n = (n = this.imulK(n)).iadd(this.tmp)).bitLength();
      } while (e > this.n);

      var i = e < this.n ? -1 : n.ucmp(this.p);
      return 0 === i ? (n.words[0] = 0, n.length = 1) : i > 0 ? n.isub(this.p) : n._strip(), n;
    }, y.prototype.split = function (t, e) {
      t.iushrn(this.n, 0, e);
    }, y.prototype.imulK = function (t) {
      return t.imul(this.k);
    }, i(w, y), w.prototype.split = function (t, e) {
      for (var n = Math.min(t.length, 9), i = 0; i < n; i++) e.words[i] = t.words[i];

      if (e.length = n, t.length <= 9) return t.words[0] = 0, void (t.length = 1);
      var r = t.words[9];

      for (e.words[e.length++] = 4194303 & r, i = 10; i < t.length; i++) {
        var o = 0 | t.words[i];
        t.words[i - 10] = (4194303 & o) << 4 | r >>> 22, r = o;
      }

      r >>>= 22, t.words[i - 10] = r, 0 === r && t.length > 10 ? t.length -= 10 : t.length -= 9;
    }, w.prototype.imulK = function (t) {
      t.words[t.length] = 0, t.words[t.length + 1] = 0, t.length += 2;

      for (var e = 0, n = 0; n < t.length; n++) {
        var i = 0 | t.words[n];
        e += 977 * i, t.words[n] = 67108863 & e, e = 64 * i + (e / 67108864 | 0);
      }

      return 0 === t.words[t.length - 1] && (t.length--, 0 === t.words[t.length - 1] && t.length--), t;
    }, i(_, y), i(k, y), i(x, y), x.prototype.imulK = function (t) {
      for (var e = 0, n = 0; n < t.length; n++) {
        var i = 19 * (0 | t.words[n]) + e,
            r = 67108863 & i;
        i >>>= 26, t.words[n] = r, e = i;
      }

      return 0 !== e && (t.words[t.length++] = e), t;
    }, o._prime = function (t) {
      if (v[t]) return v[t];
      var e;
      if ("k256" === t) e = new w();else if ("p224" === t) e = new _();else if ("p192" === t) e = new k();else {
        if ("p25519" !== t) throw new Error("Unknown prime " + t);
        e = new x();
      }
      return v[t] = e, e;
    }, S.prototype._verify1 = function (t) {
      n(0 === t.negative, "red works only with positives"), n(t.red, "red works only with red numbers");
    }, S.prototype._verify2 = function (t, e) {
      n(0 == (t.negative | e.negative), "red works only with positives"), n(t.red && t.red === e.red, "red works only with red numbers");
    }, S.prototype.imod = function (t) {
      return this.prime ? this.prime.ireduce(t)._forceRed(this) : (c(t, t.umod(this.m)._forceRed(this)), t);
    }, S.prototype.neg = function (t) {
      return t.isZero() ? t.clone() : this.m.sub(t)._forceRed(this);
    }, S.prototype.add = function (t, e) {
      this._verify2(t, e);

      var n = t.add(e);
      return n.cmp(this.m) >= 0 && n.isub(this.m), n._forceRed(this);
    }, S.prototype.iadd = function (t, e) {
      this._verify2(t, e);

      var n = t.iadd(e);
      return n.cmp(this.m) >= 0 && n.isub(this.m), n;
    }, S.prototype.sub = function (t, e) {
      this._verify2(t, e);

      var n = t.sub(e);
      return n.cmpn(0) < 0 && n.iadd(this.m), n._forceRed(this);
    }, S.prototype.isub = function (t, e) {
      this._verify2(t, e);

      var n = t.isub(e);
      return n.cmpn(0) < 0 && n.iadd(this.m), n;
    }, S.prototype.shl = function (t, e) {
      return this._verify1(t), this.imod(t.ushln(e));
    }, S.prototype.imul = function (t, e) {
      return this._verify2(t, e), this.imod(t.imul(e));
    }, S.prototype.mul = function (t, e) {
      return this._verify2(t, e), this.imod(t.mul(e));
    }, S.prototype.isqr = function (t) {
      return this.imul(t, t.clone());
    }, S.prototype.sqr = function (t) {
      return this.mul(t, t);
    }, S.prototype.sqrt = function (t) {
      if (t.isZero()) return t.clone();
      var e = this.m.andln(3);

      if (n(e % 2 == 1), 3 === e) {
        var i = this.m.add(new o(1)).iushrn(2);
        return this.pow(t, i);
      }

      for (var r = this.m.subn(1), s = 0; !r.isZero() && 0 === r.andln(1);) s++, r.iushrn(1);

      n(!r.isZero());
      var u = new o(1).toRed(this),
          a = u.redNeg(),
          c = this.m.subn(1).iushrn(1),
          l = this.m.bitLength();

      for (l = new o(2 * l * l).toRed(this); 0 !== this.pow(l, c).cmp(a);) l.redIAdd(a);

      for (var h = this.pow(l, r), f = this.pow(t, r.addn(1).iushrn(1)), d = this.pow(t, r), p = s; 0 !== d.cmp(u);) {
        for (var m = d, b = 0; 0 !== m.cmp(u); b++) m = m.redSqr();

        n(b < p);
        var g = this.pow(h, new o(1).iushln(p - b - 1));
        f = f.redMul(g), h = g.redSqr(), d = d.redMul(h), p = b;
      }

      return f;
    }, S.prototype.invm = function (t) {
      var e = t._invmp(this.m);

      return 0 !== e.negative ? (e.negative = 0, this.imod(e).redNeg()) : this.imod(e);
    }, S.prototype.pow = function (t, e) {
      if (e.isZero()) return new o(1).toRed(this);
      if (0 === e.cmpn(1)) return t.clone();
      var n = new Array(16);
      n[0] = new o(1).toRed(this), n[1] = t;

      for (var i = 2; i < n.length; i++) n[i] = this.mul(n[i - 1], t);

      var r = n[0],
          s = 0,
          u = 0,
          a = e.bitLength() % 26;

      for (0 === a && (a = 26), i = e.length - 1; i >= 0; i--) {
        for (var c = e.words[i], l = a - 1; l >= 0; l--) {
          var h = c >> l & 1;
          r !== n[0] && (r = this.sqr(r)), 0 !== h || 0 !== s ? (s <<= 1, s |= h, (4 === ++u || 0 === i && 0 === l) && (r = this.mul(r, n[s]), u = 0, s = 0)) : u = 0;
        }

        a = 26;
      }

      return r;
    }, S.prototype.convertTo = function (t) {
      var e = t.umod(this.m);
      return e === t ? e.clone() : e;
    }, S.prototype.convertFrom = function (t) {
      var e = t.clone();
      return e.red = null, e;
    }, o.mont = function (t) {
      return new M(t);
    }, i(M, S), M.prototype.convertTo = function (t) {
      return this.imod(t.ushln(this.shift));
    }, M.prototype.convertFrom = function (t) {
      var e = this.imod(t.mul(this.rinv));
      return e.red = null, e;
    }, M.prototype.imul = function (t, e) {
      if (t.isZero() || e.isZero()) return t.words[0] = 0, t.length = 1, t;
      var n = t.imul(e),
          i = n.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
          r = n.isub(i).iushrn(this.shift),
          o = r;
      return r.cmp(this.m) >= 0 ? o = r.isub(this.m) : r.cmpn(0) < 0 && (o = r.iadd(this.m)), o._forceRed(this);
    }, M.prototype.mul = function (t, e) {
      if (t.isZero() || e.isZero()) return new o(0)._forceRed(this);
      var n = t.mul(e),
          i = n.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
          r = n.isub(i).iushrn(this.shift),
          s = r;
      return r.cmp(this.m) >= 0 ? s = r.isub(this.m) : r.cmpn(0) < 0 && (s = r.iadd(this.m)), s._forceRed(this);
    }, M.prototype.invm = function (t) {
      return this.imod(t._invmp(this.m).mul(this.r2))._forceRed(this);
    };
  }(t, _index2d8aeb.f);
}),
    l = (0, _index2d8aeb.d)(function (t, e) {
  function n() {
    return t => t;
  }

  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.OpaqueType = n, e.HexString = t => t, e.AddressString = t => t, e.BigIntString = t => t, e.IntNumber = function (t) {
    return Math.floor(t);
  }, e.RegExpString = t => t;
});
(0, _index2d8aeb.e)(l);
l.OpaqueType, l.HexString, l.AddressString, l.BigIntString, l.IntNumber, l.RegExpString;
var h = (0, _index2d8aeb.d)(function (t, n) {
  var i = _index2d8aeb.f && _index2d8aeb.f.__importDefault || function (t) {
    return t && t.__esModule ? t : {
      default: t
    };
  };

  Object.defineProperty(n, "__esModule", {
    value: !0
  });
  const r = i(c),
        o = /^[0-9]*$/,
        s = /^[a-f0-9]*$/;

  function u(t) {
    return t.startsWith("0x") || t.startsWith("0X");
  }

  function a(t) {
    return u(t) ? t.slice(2) : t;
  }

  function h(t) {
    return u(t) ? "0x" + t.slice(2) : "0x" + t;
  }

  function f(t) {
    if ("string" != typeof t) return !1;
    const e = a(t).toLowerCase();
    return s.test(e);
  }

  function d(t, e = !1) {
    if ("string" == typeof t) {
      const n = a(t).toLowerCase();
      if (s.test(n)) return l.HexString(e ? "0x" + n : n);
    }

    throw new Error(`"${t}" is not a hexadecimal string`);
  }

  function p(t, e = !1) {
    let n = d(t, !1);
    return n.length % 2 == 1 && (n = l.HexString("0" + n)), e ? l.HexString("0x" + n) : n;
  }

  function m(t) {
    if ("number" == typeof t && Number.isInteger(t)) return l.IntNumber(t);

    if ("string" == typeof t) {
      if (o.test(t)) return l.IntNumber(Number(t));
      if (f(t)) return l.IntNumber(new r.default(p(t, !1), 16).toNumber());
    }

    throw new Error(`Not an integer: ${t}`);
  }

  function b(t) {
    if (null == t || "function" != typeof t.constructor) return !1;
    const {
      constructor: e
    } = t;
    return "function" == typeof e.config && "number" == typeof e.EUCLID;
  }

  n.hexStringFromBuffer = function (t, e = !1) {
    const n = t.toString("hex");
    return l.HexString(e ? "0x" + n : n);
  }, n.bigIntStringFromBN = function (t) {
    return l.BigIntString(t.toString(10));
  }, n.intNumberFromHexString = function (t) {
    return l.IntNumber(new r.default(p(t, !1), 16).toNumber());
  }, n.hexStringFromIntNumber = function (t) {
    return l.HexString("0x" + new r.default(t).toString(16));
  }, n.has0xPrefix = u, n.strip0x = a, n.prepend0x = h, n.isHexString = f, n.ensureHexString = d, n.ensureEvenLengthHexString = p, n.ensureAddressString = function (t) {
    if ("string" == typeof t) {
      const e = a(t).toLowerCase();
      if (f(e) && 40 === e.length) return l.AddressString(h(e));
    }

    throw new Error(`Invalid Ethereum address: ${t}`);
  }, n.ensureBuffer = function (t) {
    if (Buffer.isBuffer(t)) return t;

    if ("string" == typeof t) {
      if (f(t)) {
        const e = p(t, !1);
        return Buffer.from(e, "hex");
      }

      return Buffer.from(t, "utf8");
    }

    throw new Error(`Not binary data: ${t}`);
  }, n.ensureIntNumber = m, n.ensureRegExpString = function (t) {
    if (t instanceof RegExp) return l.RegExpString(t.toString());
    throw new Error(`Not a RegExp: ${t}`);
  }, n.ensureBN = function (t) {
    if (null != t && (r.default.isBN(t) || b(t))) return new r.default(t.toString(10), 10);
    if ("number" == typeof t) return new r.default(m(t));

    if ("string" == typeof t) {
      if (o.test(t)) return new r.default(t, 10);
      if (f(t)) return new r.default(p(t, !1), 16);
    }

    throw new Error(`Not an integer: ${t}`);
  }, n.isBigNumber = b, n.range = function (t, e) {
    return Array.from({
      length: e - t
    }, (e, n) => t + n);
  }, n.getFavicon = function () {
    const t = document.querySelector('link[sizes="192x192"]') || document.querySelector('link[sizes="180x180"]') || document.querySelector('link[rel="icon"]') || document.querySelector('link[rel="shortcut icon"]'),
          {
      protocol: e,
      host: n
    } = document.location,
          i = t ? t.getAttribute("href") : null;
    return !i || i.startsWith("javascript:") ? null : i.startsWith("http://") || i.startsWith("https://") || i.startsWith("data:") ? i : i.startsWith("//") ? e + i : `${e}//${n}${i}`;
  };
});
(0, _index2d8aeb.e)(h);
h.hexStringFromBuffer, h.bigIntStringFromBN, h.intNumberFromHexString, h.hexStringFromIntNumber, h.has0xPrefix, h.strip0x, h.prepend0x, h.isHexString, h.ensureHexString, h.ensureEvenLengthHexString, h.ensureAddressString, h.ensureBuffer, h.ensureIntNumber, h.ensureRegExpString, h.ensureBN, h.isBigNumber, h.range, h.getFavicon;
const {
  Transform: f
} = _crypto_commonjsExternal8b32930c.b;

var d = t => class e extends f {
  constructor(e, n, i, r, o) {
    super(o), this._rate = e, this._capacity = n, this._delimitedSuffix = i, this._hashBitLength = r, this._options = o, this._state = new t(), this._state.initialize(e, n), this._finalized = !1;
  }

  _transform(t, e, n) {
    let i = null;

    try {
      this.update(t, e);
    } catch (t) {
      i = t;
    }

    n(i);
  }

  _flush(t) {
    let e = null;

    try {
      this.push(this.digest());
    } catch (t) {
      e = t;
    }

    t(e);
  }

  update(t, e) {
    if (!Buffer.isBuffer(t) && "string" != typeof t) throw new TypeError("Data must be a string or a buffer");
    if (this._finalized) throw new Error("Digest already called");
    return Buffer.isBuffer(t) || (t = Buffer.from(t, e)), this._state.absorb(t), this;
  }

  digest(t) {
    if (this._finalized) throw new Error("Digest already called");
    this._finalized = !0, this._delimitedSuffix && this._state.absorbLastFewBits(this._delimitedSuffix);

    let e = this._state.squeeze(this._hashBitLength / 8);

    return void 0 !== t && (e = e.toString(t)), this._resetState(), e;
  }

  _resetState() {
    return this._state.initialize(this._rate, this._capacity), this;
  }

  _clone() {
    const t = new e(this._rate, this._capacity, this._delimitedSuffix, this._hashBitLength, this._options);
    return this._state.copy(t._state), t._finalized = this._finalized, t;
  }

};

const {
  Transform: p
} = _crypto_commonjsExternal8b32930c.b;

var m = t => class e extends p {
  constructor(e, n, i, r) {
    super(r), this._rate = e, this._capacity = n, this._delimitedSuffix = i, this._options = r, this._state = new t(), this._state.initialize(e, n), this._finalized = !1;
  }

  _transform(t, e, n) {
    let i = null;

    try {
      this.update(t, e);
    } catch (t) {
      i = t;
    }

    n(i);
  }

  _flush() {}

  _read(t) {
    this.push(this.squeeze(t));
  }

  update(t, e) {
    if (!Buffer.isBuffer(t) && "string" != typeof t) throw new TypeError("Data must be a string or a buffer");
    if (this._finalized) throw new Error("Squeeze already called");
    return Buffer.isBuffer(t) || (t = Buffer.from(t, e)), this._state.absorb(t), this;
  }

  squeeze(t, e) {
    this._finalized || (this._finalized = !0, this._state.absorbLastFewBits(this._delimitedSuffix));

    let n = this._state.squeeze(t);

    return void 0 !== e && (n = n.toString(e)), n;
  }

  _resetState() {
    return this._state.initialize(this._rate, this._capacity), this;
  }

  _clone() {
    const t = new e(this._rate, this._capacity, this._delimitedSuffix, this._options);
    return this._state.copy(t._state), t._finalized = this._finalized, t;
  }

};

const b = [1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907, 0, 2147483649, 0, 2147516545, 2147483648, 32777, 2147483648, 138, 0, 136, 0, 2147516425, 0, 2147483658, 0, 2147516555, 0, 139, 2147483648, 32905, 2147483648, 32771, 2147483648, 32770, 2147483648, 128, 2147483648, 32778, 0, 2147483658, 2147483648, 2147516545, 2147483648, 32896, 2147483648, 2147483649, 0, 2147516424, 2147483648];

var g = function (t) {
  for (let e = 0; e < 24; ++e) {
    const n = t[0] ^ t[10] ^ t[20] ^ t[30] ^ t[40],
          i = t[1] ^ t[11] ^ t[21] ^ t[31] ^ t[41],
          r = t[2] ^ t[12] ^ t[22] ^ t[32] ^ t[42],
          o = t[3] ^ t[13] ^ t[23] ^ t[33] ^ t[43],
          s = t[4] ^ t[14] ^ t[24] ^ t[34] ^ t[44],
          u = t[5] ^ t[15] ^ t[25] ^ t[35] ^ t[45],
          a = t[6] ^ t[16] ^ t[26] ^ t[36] ^ t[46],
          c = t[7] ^ t[17] ^ t[27] ^ t[37] ^ t[47],
          l = t[8] ^ t[18] ^ t[28] ^ t[38] ^ t[48],
          h = t[9] ^ t[19] ^ t[29] ^ t[39] ^ t[49];
    let f = l ^ (r << 1 | o >>> 31),
        d = h ^ (o << 1 | r >>> 31);

    const p = t[0] ^ f,
          m = t[1] ^ d,
          g = t[10] ^ f,
          v = t[11] ^ d,
          y = t[20] ^ f,
          w = t[21] ^ d,
          _ = t[30] ^ f,
          k = t[31] ^ d,
          x = t[40] ^ f,
          S = t[41] ^ d;

    f = n ^ (s << 1 | u >>> 31), d = i ^ (u << 1 | s >>> 31);
    const M = t[2] ^ f,
          E = t[3] ^ d,
          C = t[12] ^ f,
          N = t[13] ^ d,
          T = t[22] ^ f,
          I = t[23] ^ d,
          A = t[32] ^ f,
          O = t[33] ^ d,
          P = t[42] ^ f,
          R = t[43] ^ d;
    f = r ^ (a << 1 | c >>> 31), d = o ^ (c << 1 | a >>> 31);
    const j = t[4] ^ f,
          B = t[5] ^ d,
          D = t[14] ^ f,
          L = t[15] ^ d,
          F = t[24] ^ f,
          W = t[25] ^ d,
          q = t[34] ^ f,
          U = t[35] ^ d,
          V = t[44] ^ f,
          z = t[45] ^ d;
    f = s ^ (l << 1 | h >>> 31), d = u ^ (h << 1 | l >>> 31);
    const H = t[6] ^ f,
          $ = t[7] ^ d,
          J = t[16] ^ f,
          K = t[17] ^ d,
          G = t[26] ^ f,
          Y = t[27] ^ d,
          Z = t[36] ^ f,
          Q = t[37] ^ d,
          X = t[46] ^ f,
          tt = t[47] ^ d;
    f = a ^ (n << 1 | i >>> 31), d = c ^ (i << 1 | n >>> 31);

    const et = t[8] ^ f,
          nt = t[9] ^ d,
          it = t[18] ^ f,
          rt = t[19] ^ d,
          ot = t[28] ^ f,
          st = t[29] ^ d,
          ut = t[38] ^ f,
          at = t[39] ^ d,
          ct = t[48] ^ f,
          lt = t[49] ^ d,
          ht = p,
          ft = m,
          dt = v << 4 | g >>> 28,
          pt = g << 4 | v >>> 28,
          mt = y << 3 | w >>> 29,
          bt = w << 3 | y >>> 29,
          gt = k << 9 | _ >>> 23,
          vt = _ << 9 | k >>> 23,
          yt = x << 18 | S >>> 14,
          wt = S << 18 | x >>> 14,
          _t = M << 1 | E >>> 31,
          kt = E << 1 | M >>> 31,
          xt = N << 12 | C >>> 20,
          St = C << 12 | N >>> 20,
          Mt = T << 10 | I >>> 22,
          Et = I << 10 | T >>> 22,
          Ct = O << 13 | A >>> 19,
          Nt = A << 13 | O >>> 19,
          Tt = P << 2 | R >>> 30,
          It = R << 2 | P >>> 30,
          At = B << 30 | j >>> 2,
          Ot = j << 30 | B >>> 2,
          Pt = D << 6 | L >>> 26,
          Rt = L << 6 | D >>> 26,
          jt = W << 11 | F >>> 21,
          Bt = F << 11 | W >>> 21,
          Dt = q << 15 | U >>> 17,
          Lt = U << 15 | q >>> 17,
          Ft = z << 29 | V >>> 3,
          Wt = V << 29 | z >>> 3,
          qt = H << 28 | $ >>> 4,
          Ut = $ << 28 | H >>> 4,
          Vt = K << 23 | J >>> 9,
          zt = J << 23 | K >>> 9,
          Ht = G << 25 | Y >>> 7,
          $t = Y << 25 | G >>> 7,
          Jt = Z << 21 | Q >>> 11,
          Kt = Q << 21 | Z >>> 11,
          Gt = tt << 24 | X >>> 8,
          Yt = X << 24 | tt >>> 8,
          Zt = et << 27 | nt >>> 5,
          Qt = nt << 27 | et >>> 5,
          Xt = it << 20 | rt >>> 12,
          te = rt << 20 | it >>> 12,
          ee = st << 7 | ot >>> 25,
          ne = ot << 7 | st >>> 25,
          ie = ut << 8 | at >>> 24,
          re = at << 8 | ut >>> 24,
          oe = ct << 14 | lt >>> 18,
          se = lt << 14 | ct >>> 18;

    t[0] = ht ^ ~xt & jt, t[1] = ft ^ ~St & Bt, t[10] = qt ^ ~Xt & mt, t[11] = Ut ^ ~te & bt, t[20] = _t ^ ~Pt & Ht, t[21] = kt ^ ~Rt & $t, t[30] = Zt ^ ~dt & Mt, t[31] = Qt ^ ~pt & Et, t[40] = At ^ ~Vt & ee, t[41] = Ot ^ ~zt & ne, t[2] = xt ^ ~jt & Jt, t[3] = St ^ ~Bt & Kt, t[12] = Xt ^ ~mt & Ct, t[13] = te ^ ~bt & Nt, t[22] = Pt ^ ~Ht & ie, t[23] = Rt ^ ~$t & re, t[32] = dt ^ ~Mt & Dt, t[33] = pt ^ ~Et & Lt, t[42] = Vt ^ ~ee & gt, t[43] = zt ^ ~ne & vt, t[4] = jt ^ ~Jt & oe, t[5] = Bt ^ ~Kt & se, t[14] = mt ^ ~Ct & Ft, t[15] = bt ^ ~Nt & Wt, t[24] = Ht ^ ~ie & yt, t[25] = $t ^ ~re & wt, t[34] = Mt ^ ~Dt & Gt, t[35] = Et ^ ~Lt & Yt, t[44] = ee ^ ~gt & Tt, t[45] = ne ^ ~vt & It, t[6] = Jt ^ ~oe & ht, t[7] = Kt ^ ~se & ft, t[16] = Ct ^ ~Ft & qt, t[17] = Nt ^ ~Wt & Ut, t[26] = ie ^ ~yt & _t, t[27] = re ^ ~wt & kt, t[36] = Dt ^ ~Gt & Zt, t[37] = Lt ^ ~Yt & Qt, t[46] = gt ^ ~Tt & At, t[47] = vt ^ ~It & Ot, t[8] = oe ^ ~ht & xt, t[9] = se ^ ~ft & St, t[18] = Ft ^ ~qt & Xt, t[19] = Wt ^ ~Ut & te, t[28] = yt ^ ~_t & Pt, t[29] = wt ^ ~kt & Rt, t[38] = Gt ^ ~Zt & dt, t[39] = Yt ^ ~Qt & pt, t[48] = Tt ^ ~At & Vt, t[49] = It ^ ~Ot & zt, t[0] ^= b[2 * e], t[1] ^= b[2 * e + 1];
  }
};

function v() {
  this.state = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], this.blockSize = null, this.count = 0, this.squeezing = !1;
}

v.prototype.initialize = function (t, e) {
  for (let t = 0; t < 50; ++t) this.state[t] = 0;

  this.blockSize = t / 8, this.count = 0, this.squeezing = !1;
}, v.prototype.absorb = function (t) {
  for (let e = 0; e < t.length; ++e) this.state[~~(this.count / 4)] ^= t[e] << this.count % 4 * 8, this.count += 1, this.count === this.blockSize && (g(this.state), this.count = 0);
}, v.prototype.absorbLastFewBits = function (t) {
  this.state[~~(this.count / 4)] ^= t << this.count % 4 * 8, 0 != (128 & t) && this.count === this.blockSize - 1 && g(this.state), this.state[~~((this.blockSize - 1) / 4)] ^= 128 << (this.blockSize - 1) % 4 * 8, g(this.state), this.count = 0, this.squeezing = !0;
}, v.prototype.squeeze = function (t) {
  this.squeezing || this.absorbLastFewBits(1);
  const e = Buffer.alloc(t);

  for (let n = 0; n < t; ++n) e[n] = this.state[~~(this.count / 4)] >>> this.count % 4 * 8 & 255, this.count += 1, this.count === this.blockSize && (g(this.state), this.count = 0);

  return e;
}, v.prototype.copy = function (t) {
  for (let e = 0; e < 50; ++e) t.state[e] = this.state[e];

  t.blockSize = this.blockSize, t.count = this.count, t.squeezing = this.squeezing;
};

var y = function (t) {
  const e = d(t),
        n = m(t);
  return function (t, i) {
    switch ("string" == typeof t ? t.toLowerCase() : t) {
      case "keccak224":
        return new e(1152, 448, null, 224, i);

      case "keccak256":
        return new e(1088, 512, null, 256, i);

      case "keccak384":
        return new e(832, 768, null, 384, i);

      case "keccak512":
        return new e(576, 1024, null, 512, i);

      case "sha3-224":
        return new e(1152, 448, 6, 224, i);

      case "sha3-256":
        return new e(1088, 512, 6, 256, i);

      case "sha3-384":
        return new e(832, 768, 6, 384, i);

      case "sha3-512":
        return new e(576, 1024, 6, 512, i);

      case "shake128":
        return new n(1344, 256, 31, i);

      case "shake256":
        return new n(1088, 512, 31, i);

      default:
        throw new Error("Invald algorithm: " + t);
    }
  };
}(v);

function w(t) {
  return Buffer.allocUnsafe(t).fill(0);
}

function _(t, e, n) {
  const i = w(e);
  return t = k(t), n ? t.length < e ? (t.copy(i), i) : t.slice(0, e) : t.length < e ? (t.copy(i, e - t.length), i) : t.slice(-e);
}

function k(t) {
  if (!Buffer.isBuffer(t)) if (Array.isArray(t)) t = Buffer.from(t);else if ("string" == typeof t) t = x(t) ? Buffer.from((e = S(t)).length % 2 ? "0" + e : e, "hex") : Buffer.from(t);else if ("number" == typeof t) t = intToBuffer(t);else if (null == t) t = Buffer.allocUnsafe(0);else if (c.isBN(t)) t = t.toArrayLike(Buffer);else {
    if (!t.toArray) throw new Error("invalid type");
    t = Buffer.from(t.toArray());
  }
  var e;
  return t;
}

function x(t) {
  return "string" == typeof t && t.match(/^0x[0-9A-Fa-f]*$/);
}

function S(t) {
  return "string" == typeof t && t.startsWith("0x") ? t.slice(2) : t;
}

var M = {
  zeros: w,
  setLength: _,
  setLengthRight: function (t, e) {
    return _(t, e, !0);
  },
  isHexString: x,
  stripHexPrefix: S,
  toBuffer: k,
  bufferToHex: function (t) {
    return "0x" + (t = k(t)).toString("hex");
  },
  keccak: function (t, e) {
    return t = k(t), e || (e = 256), y("keccak" + e).update(t).digest();
  }
};

function E(t) {
  return t.startsWith("int[") ? "int256" + t.slice(3) : "int" === t ? "int256" : t.startsWith("uint[") ? "uint256" + t.slice(4) : "uint" === t ? "uint256" : t.startsWith("fixed[") ? "fixed128x128" + t.slice(5) : "fixed" === t ? "fixed128x128" : t.startsWith("ufixed[") ? "ufixed128x128" + t.slice(6) : "ufixed" === t ? "ufixed128x128" : t;
}

function C(t) {
  return parseInt(/^\D+(\d+)$/.exec(t)[1], 10);
}

function N(t) {
  var e = /^\D+(\d+)x(\d+)$/.exec(t);
  return [parseInt(e[1], 10), parseInt(e[2], 10)];
}

function T(t) {
  var e = t.match(/(.*)\[(.*?)\]$/);
  return e ? "" === e[2] ? "dynamic" : parseInt(e[2], 10) : null;
}

function I(t) {
  var e = typeof t;
  if ("string" === e) return M.isHexString(t) ? new c(M.stripHexPrefix(t), 16) : new c(t, 10);
  if ("number" === e) return new c(t);
  if (t.toArray) return t;
  throw new Error("Argument is not a number");
}

function A(t, e) {
  var n, i, r, o;
  if ("address" === t) return A("uint160", I(e));
  if ("bool" === t) return A("uint8", e ? 1 : 0);
  if ("string" === t) return A("bytes", new Buffer(e, "utf8"));

  if (function (t) {
    return t.lastIndexOf("]") === t.length - 1;
  }(t)) {
    if (void 0 === e.length) throw new Error("Not an array?");
    if ("dynamic" !== (n = T(t)) && 0 !== n && e.length > n) throw new Error("Elements exceed array size: " + n);

    for (o in r = [], t = t.slice(0, t.lastIndexOf("[")), "string" == typeof e && (e = JSON.parse(e)), e) r.push(A(t, e[o]));

    if ("dynamic" === n) {
      var s = A("uint256", e.length);
      r.unshift(s);
    }

    return Buffer.concat(r);
  }

  if ("bytes" === t) return e = new Buffer(e), r = Buffer.concat([A("uint256", e.length), e]), e.length % 32 != 0 && (r = Buffer.concat([r, M.zeros(32 - e.length % 32)])), r;

  if (t.startsWith("bytes")) {
    if ((n = C(t)) < 1 || n > 32) throw new Error("Invalid bytes<N> width: " + n);
    return M.setLengthRight(e, 32);
  }

  if (t.startsWith("uint")) {
    if ((n = C(t)) % 8 || n < 8 || n > 256) throw new Error("Invalid uint<N> width: " + n);
    if ((i = I(e)).bitLength() > n) throw new Error("Supplied uint exceeds width: " + n + " vs " + i.bitLength());
    if (i < 0) throw new Error("Supplied uint is negative");
    return i.toArrayLike(Buffer, "be", 32);
  }

  if (t.startsWith("int")) {
    if ((n = C(t)) % 8 || n < 8 || n > 256) throw new Error("Invalid int<N> width: " + n);
    if ((i = I(e)).bitLength() > n) throw new Error("Supplied int exceeds width: " + n + " vs " + i.bitLength());
    return i.toTwos(256).toArrayLike(Buffer, "be", 32);
  }

  if (t.startsWith("ufixed")) {
    if (n = N(t), (i = I(e)) < 0) throw new Error("Supplied ufixed is negative");
    return A("uint256", i.mul(new c(2).pow(new c(n[1]))));
  }

  if (t.startsWith("fixed")) return n = N(t), A("int256", I(e).mul(new c(2).pow(new c(n[1]))));
  throw new Error("Unsupported or invalid type: " + t);
}

function O(t) {
  return "string" === t || "bytes" === t || "dynamic" === T(t);
}

function P(t, e) {
  if (t.length !== e.length) throw new Error("Number of types are not matching the values");

  for (var n, i, r = [], o = 0; o < t.length; o++) {
    var s = E(t[o]),
        u = e[o];
    if ("bytes" === s) r.push(u);else if ("string" === s) r.push(new Buffer(u, "utf8"));else if ("bool" === s) r.push(new Buffer(u ? "01" : "00", "hex"));else if ("address" === s) r.push(M.setLength(u, 20));else if (s.startsWith("bytes")) {
      if ((n = C(s)) < 1 || n > 32) throw new Error("Invalid bytes<N> width: " + n);
      r.push(M.setLengthRight(u, n));
    } else if (s.startsWith("uint")) {
      if ((n = C(s)) % 8 || n < 8 || n > 256) throw new Error("Invalid uint<N> width: " + n);
      if ((i = I(u)).bitLength() > n) throw new Error("Supplied uint exceeds width: " + n + " vs " + i.bitLength());
      r.push(i.toArrayLike(Buffer, "be", n / 8));
    } else {
      if (!s.startsWith("int")) throw new Error("Unsupported or invalid type: " + s);
      if ((n = C(s)) % 8 || n < 8 || n > 256) throw new Error("Invalid int<N> width: " + n);
      if ((i = I(u)).bitLength() > n) throw new Error("Supplied int exceeds width: " + n + " vs " + i.bitLength());
      r.push(i.toTwos(n).toArrayLike(Buffer, "be", n / 8));
    }
  }

  return Buffer.concat(r);
}

var R = {
  rawEncode: function (t, e) {
    var n = [],
        i = [],
        r = 32 * t.length;

    for (var o in t) {
      var s = E(t[o]),
          u = A(s, e[o]);
      O(s) ? (n.push(A("uint256", r)), i.push(u), r += u.length) : n.push(u);
    }

    return Buffer.concat(n.concat(i));
  },
  solidityPack: P,
  soliditySHA3: function (t, e) {
    return M.keccak(P(t, e));
  }
};
const j = {
  type: "object",
  properties: {
    types: {
      type: "object",
      additionalProperties: {
        type: "array",
        items: {
          type: "object",
          properties: {
            name: {
              type: "string"
            },
            type: {
              type: "string"
            }
          },
          required: ["name", "type"]
        }
      }
    },
    primaryType: {
      type: "string"
    },
    domain: {
      type: "object"
    },
    message: {
      type: "object"
    }
  },
  required: ["types", "primaryType", "domain", "message"]
},
      B = {
  encodeData(t, e, n, i = !0) {
    const r = ["bytes32"],
          o = [this.hashType(t, n)];

    if (i) {
      const s = (t, e, r) => {
        if (void 0 !== n[e]) return ["bytes32", null == r ? "0x0000000000000000000000000000000000000000000000000000000000000000" : M.keccak(this.encodeData(e, r, n, i))];
        if (void 0 === r) throw new Error(`missing value for field ${t} of type ${e}`);
        if ("bytes" === e) return ["bytes32", M.keccak(r)];
        if ("string" === e) return "string" == typeof r && (r = Buffer.from(r, "utf8")), ["bytes32", M.keccak(r)];

        if (e.lastIndexOf("]") === e.length - 1) {
          const n = e.slice(0, e.lastIndexOf("[")),
                i = r.map(e => s(t, n, e));
          return ["bytes32", M.keccak(R.rawEncode(i.map(([t]) => t), i.map(([, t]) => t)))];
        }

        return [e, r];
      };

      for (const i of n[t]) {
        const [t, n] = s(i.name, i.type, e[i.name]);
        r.push(t), o.push(n);
      }
    } else for (const s of n[t]) {
      let t = e[s.name];
      if (void 0 !== t) if ("bytes" === s.type) r.push("bytes32"), t = M.keccak(t), o.push(t);else if ("string" === s.type) r.push("bytes32"), "string" == typeof t && (t = Buffer.from(t, "utf8")), t = M.keccak(t), o.push(t);else if (void 0 !== n[s.type]) r.push("bytes32"), t = M.keccak(this.encodeData(s.type, t, n, i)), o.push(t)