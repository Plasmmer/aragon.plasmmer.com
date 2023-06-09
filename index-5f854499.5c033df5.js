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
})({"../node_modules/use-wallet/dist/index-5f854499.js":[function(require,module,exports) {
var Buffer = require("buffer").Buffer;
var process = require("process");
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _index2d8aeb = require("./index-2d8aeb45.js");

require("react");

require("@aragon/provided-connector");

require("events");

require("buffer");

require("./_crypto_commonjs-external-8b32930c.js");

var _subscriptionManagerB429be9d = require("./subscriptionManager-b429be9d.js");

require("stream");

require("string_decoder");

require("crypto");

require("assert");

require("util");

var _indexBc4c198a = require("./index-bc4c198a.js");

var _indexAcf3c = require("./index-acf3c274.js");

const y = _index2d8aeb.r.EventEmitter,
      w = _subscriptionManagerB429be9d.r.inherits;
var b = _;

function _() {
  y.call(this), this.isLocked = !0;
}

w(_, y), _.prototype.go = function () {
  this.isLocked = !1, this.emit("unlock");
}, _.prototype.stop = function () {
  this.isLocked = !0, this.emit("lock");
}, _.prototype.await = function (e) {
  const t = this;
  t.isLocked ? t.once("unlock", e) : setTimeout(e);
};

var k = function (e) {
  var t = E(e);
  if (t >= e.params.length) return null;
  return e.params[t];
};

function E(e) {
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

var T = function () {
  var e = new Date().getTime() * Math.pow(10, 3),
      t = Math.floor(Math.random() * Math.pow(10, 3));
  return e + t;
};

var P = function (e) {
  return (0, _subscriptionManagerB429be9d.e)({
    id: T(),
    jsonrpc: "2.0",
    params: []
  }, e);
};

const R = _index2d8aeb.r.EventEmitter,
      C = _subscriptionManagerB429be9d.r.inherits,
      x = function () {};

var B = S;

function S(e) {
  R.call(this), this.setMaxListeners(30), e = e || {};
  const t = {
    sendAsync: this._handleAsync.bind(this)
  },
        n = e.blockTrackerProvider || t;
  this._blockTracker = e.blockTracker || new _subscriptionManagerB429be9d.E({
    provider: n,
    pollingInterval: e.pollingInterval || 4e3,
    setSkipCacheFlag: !0
  }), this._ready = new b(), this.currentBlock = null, this._providers = [];
}

C(S, R), Object.defineProperty(S, "name", {
  value: "HttpProvider"
}), S.prototype.start = function (e = x) {
  const t = this;
  t._ready.go(), t._blockTracker.on("latest", e => {
    t._getBlockByNumber(e, (e, n) => {
      if (e) return void this.emit("error", e);
      if (!n) return;
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
}, S.prototype.stop = function () {
  this._blockTracker.removeAllListeners(), this._running = !1, this.emit("stop");
}, S.prototype.isRunning = function () {
  return this._running;
}, S.prototype.addProvider = function (e, t) {
  const n = this;
  "number" == typeof t ? n._providers.splice(t, 0, e) : n._providers.push(e), e.setEngine(this);
}, S.prototype.removeProvider = function (e) {
  const t = this._providers.indexOf(e);

  if (t < 0) throw new Error("Provider not found.");

  this._providers.splice(t, 1);
}, S.prototype.send = function (e) {
  throw new Error("Web3ProviderEngine does not support synchronous requests.");
}, S.prototype.sendAsync = function (e, t) {
  const n = this;

  n._ready.await(function () {
    Array.isArray(e) ? (0, _subscriptionManagerB429be9d.m)(e, n._handleAsync.bind(n), t) : n._handleAsync(e, t);
  });
}, S.prototype._getBlockByNumber = function (e, t) {
  const n = P({
    method: "eth_getBlockByNumber",
    params: [e, !1],
    skipCache: !0
  });

  this._handleAsync(n, (e, n) => e ? t(e) : t(null, n.result));
}, S.prototype._handleAsync = function (e, t) {
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
}, S.prototype._setCurrentBlock = function (e) {
  this.currentBlock = e, this.emit("block", e);
};
var N = A;

function A() {}

A.prototype.setEngine = function (e) {
  const t = this;
  t.engine || (t.engine = e, e.on("block", function (e) {
    t.currentBlock = e;
  }), e.on("start", function () {
    t.start();
  }), e.on("stop", function () {
    t.stop();
  }));
}, A.prototype.handleRequest = function (e, t, n) {
  throw new Error("Subproviders should override `handleRequest`.");
}, A.prototype.emitPayload = function (e, t) {
  this.engine.sendAsync(P(e), t);
}, A.prototype.stop = function () {}, A.prototype.start = function () {};
var I = class extends N {
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
    M = {
  cacheIdentifierForPayload: function (e, t) {
    const n = t ? O(e) : e.params;
    return D(e) ? e.method + ":" + (0, _indexBc4c198a.r)(n) : null;
  },
  canCache: D,
  blockTagForPayload: function (e) {
    let t = L(e);
    if (t >= e.params.length) return null;
    return e.params[t];
  },
  paramsWithoutBlockTag: O,
  blockTagParamIndex: L,
  cacheTypeForPayload: U
};

function D(e) {
  return "never" !== U(e);
}

function O(e) {
  const t = L(e);
  return t >= e.params.length ? e.params : "eth_getBlockByNumber" === e.method ? e.params.slice(1) : e.params.slice(0, t);
}

function L(e) {
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

function U(e) {
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

const F = [void 0, null, "<nil>"];

var q = function (e = {}) {
  const {
    blockTracker: t
  } = e;
  if (!t) throw new Error("createBlockCacheMiddleware - No BlockTracker specified");
  const n = new j(),
        r = {
    perma: n,
    block: n,
    fork: n
  };
  return (0, _subscriptionManagerB429be9d.k)(async (e, o, i) => {
    if (e.skipCache) return i();
    const s = M.cacheTypeForPayload(e),
          a = r[s];
    if (!a) return i();
    if (!a.canCacheRequest(e)) return i();
    let c,
        u = M.blockTagForPayload(e);
    if (u || (u = "latest"), "earliest" === u) c = "0x00";else if ("latest" === u) {
      const e = await t.getLatestBlock();
      n.clearBefore(e), c = e;
    } else c = u;
    const d = await a.get(e, c);
    void 0 === d ? (await i(), await a.set(e, c, o.result)) : o.result = d;
  });
};

class j {
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
    if (n) return n[M.cacheIdentifierForPayload(e, !0)];
  }

  async set(e, t, n) {
    this.canCacheResult(e, n) && (this.getBlockCacheForPayload(e, t)[M.cacheIdentifierForPayload(e, !0)] = n);
  }

  canCacheRequest(e) {
    if (!M.canCache(e)) return !1;
    return "pending" !== M.blockTagForPayload(e);
  }

  canCacheResult(e, t) {
    if (!F.includes(t)) return !!(!["eth_getTransactionByHash", "eth_getTransactionReceipt"].includes(e.method) || t && t.blockHash && "0x0000000000000000000000000000000000000000000000000000000000000000" !== t.blockHash);
  }

  clearBefore(e) {
    const t = this,
          n = Number.parseInt(e, 16);
    Object.keys(t.cache).map(Number).filter(e => e < n).forEach(e => delete t.cache[e]);
  }

}

var H = class extends I {
  constructor(e) {
    super(({
      blockTracker: t
    }) => q(Object.assign({
      blockTracker: t
    }, e)));
  }

};
const V = _subscriptionManagerB429be9d.r.inherits;
var W = G;

function G(e) {
  e = e || {}, this.staticResponses = e;
}

V(G, N), G.prototype.handleRequest = function (e, t, n) {
  var r = this.staticResponses[e.method];
  "function" == typeof r ? r(e, t, n) : void 0 !== r ? setTimeout(() => n(null, r)) : t();
};

var J = class extends I {
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
    z = function (e, t, n) {
  e.sendAsync(P({
    method: "eth_estimateGas",
    params: [t]
  }), function (e, t) {
    if (e) return "no contract code at given address" === e.message ? n(null, "0xcf08") : n(e);
    n(null, t.result);
  });
};

const $ = _subscriptionManagerB429be9d.r.inherits,
      K = /^[0-9A-Fa-f]+$/g;
var X = Y;

function Y(e) {
  this.nonceLock = (0, _subscriptionManagerB429be9d.S)(1), e.getAccounts && (this.getAccounts = e.getAccounts), e.processTransaction && (this.processTransaction = e.processTransaction), e.processMessage && (this.processMessage = e.processMessage), e.processPersonalMessage && (this.processPersonalMessage = e.processPersonalMessage), e.processTypedMessage && (this.processTypedMessage = e.processTypedMessage), e.processTypedMessageV3 && (this.processTypedMessageV3 = e.processTypedMessageV3), this.approveTransaction = e.approveTransaction || this.autoApprove, this.approveMessage = e.approveMessage || this.autoApprove, this.approvePersonalMessage = e.approvePersonalMessage || this.autoApprove, this.approveTypedMessage = e.approveTypedMessage || this.autoApprove, this.approveTypedMessageV3 = e.approveTypedMessageV3 || this.autoApprove, e.signTransaction && (this.signTransaction = e.signTransaction || ne("signTransaction")), e.signMessage && (this.signMessage = e.signMessage || ne("signMessage")), e.signPersonalMessage && (this.signPersonalMessage = e.signPersonalMessage || ne("signPersonalMessage")), e.signTypedMessage && (this.signTypedMessage = e.signTypedMessage || ne("signTypedMessage")), e.signTypedMessageV3 && (this.signTypedMessageV3 = e.signTypedMessageV3 || ne("signTypedMessageV3")), e.recoverPersonalSignature && (this.recoverPersonalSignature = e.recoverPersonalSignature), e.publishTransaction && (this.publishTransaction = e.publishTransaction), this.estimateGas = e.estimateGas || this.estimateGas, this.getGasPrice = e.getGasPrice || this.getGasPrice;
}

function Q(e) {
  return e.toLowerCase();
}

function Z(e) {
  const t = _subscriptionManagerB429be9d.a.addHexPrefix(e);

  return _subscriptionManagerB429be9d.a.isValidAddress(t);
}

function ee(e) {
  const t = _subscriptionManagerB429be9d.a.addHexPrefix(e);

  return !_subscriptionManagerB429be9d.a.isValidAddress(t) && te(e);
}

function te(e) {
  return "string" == typeof e && "0x" === e.slice(0, 2) && e.slice(2).match(K);
}

function ne(e) {
  return function (t, n) {
    n(new Error('ProviderEngine - HookedWalletSubprovider - Must provide "' + e + '" fn in constructor options'));
  };
}

$(Y, N), Y.prototype.handleRequest = function (e, t, n) {
  const r = this;
  let i, s, a, c, u;

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
      return i = e.params[0], void (0, _subscriptionManagerB429be9d.w)([e => r.validateTransaction(i, e), e => r.processTransaction(i, e)], n);

    case "eth_signTransaction":
      return i = e.params[0], void (0, _subscriptionManagerB429be9d.w)([e => r.validateTransaction(i, e), e => r.processSignTransaction(i, e)], n);

    case "eth_sign":
      return ee(e.params[1]) && Z(e.params[0]) ? (u = e.params[0], c = e.params[1]) : (c = e.params[0], u = e.params[1]), a = e.params[2] || {}, s = (0, _subscriptionManagerB429be9d.e)(a, {
        from: u,
        data: c
      }), void (0, _subscriptionManagerB429be9d.w)([e => r.validateMessage(s, e), e => r.processMessage(s, e)], n);

    case "personal_sign":
      return function () {
        const t = e.params[0];

        if (ee(e.params[1]) && Z(t)) {
          let t = "The eth_personalSign method requires params ordered ";
          t += "[message, address]. This was previously handled incorrectly, ", t += "and has been corrected automatically. ", t += "Please switch this param order for smooth behavior in the future.", console.warn(t), u = e.params[0], c = e.params[1];
        } else c = e.params[0], u = e.params[1];

        a = e.params[2] || {}, s = (0, _subscriptionManagerB429be9d.e)(a, {
          from: u,
          data: c
        }), (0, _subscriptionManagerB429be9d.w)([e => r.validatePersonalMessage(s, e), e => r.processPersonalMessage(s, e)], n);
      }();

    case "personal_ecRecover":
      return function () {
        c = e.params[0];
        let t = e.params[1];
        a = e.params[2] || {}, s = (0, _subscriptionManagerB429be9d.e)(a, {
          sig: t,
          data: c
        }), r.recoverPersonalSignature(s, n);
      }();

    case "eth_signTypedData":
      return !Z(e.params[1]) && Z(e.params[0]) ? (u = e.params[0], c = e.params[1]) : (c = e.params[0], u = e.params[1]), a = e.params[2] || {}, s = (0, _subscriptionManagerB429be9d.e)(a, {
        from: u,
        data: c
      }), void (0, _subscriptionManagerB429be9d.w)([e => r.validateTypedMessage(s, e), e => r.processTypedMessage(s, e)], n);

    case "eth_signTypedData_v3":
      return !Z(e.params[1]) && Z(e.params[0]) ? (u = e.params[0], c = e.params[1]) : (c = e.params[0], u = e.params[1]), a = e.params[2] || {}, s = (0, _subscriptionManagerB429be9d.e)(a, {
        from: u,
        data: c
      }), void (0, _subscriptionManagerB429be9d.w)([e => r.validateTypedMessageV3(s, e), e => r.processTypedMessageV3(s, e)], n);

    case "parity_postTransaction":
      return i = e.params[0], void r.parityPostTransaction(i, n);

    case "parity_postSign":
      return u = e.params[0], c = e.params[1], void r.parityPostSign(u, c, n);

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
}, Y.prototype.getAccounts = function (e) {
  e(null, []);
}, Y.prototype.processTransaction = function (e, t) {
  const n = this;
  (0, _subscriptionManagerB429be9d.w)([t => n.approveTransaction(e, t), (e, t) => n.checkApproval("transaction", e, t), t => n.finalizeAndSubmitTx(e, t)], t);
}, Y.prototype.processSignTransaction = function (e, t) {
  const n = this;
  (0, _subscriptionManagerB429be9d.w)([t => n.approveTransaction(e, t), (e, t) => n.checkApproval("transaction", e, t), t => n.finalizeTx(e, t)], t);
}, Y.prototype.processMessage = function (e, t) {
  const n = this;
  (0, _subscriptionManagerB429be9d.w)([t => n.approveMessage(e, t), (e, t) => n.checkApproval("message", e, t), t => n.signMessage(e, t)], t);
}, Y.prototype.processPersonalMessage = function (e, t) {
  const n = this;
  (0, _subscriptionManagerB429be9d.w)([t => n.approvePersonalMessage(e, t), (e, t) => n.checkApproval("message", e, t), t => n.signPersonalMessage(e, t)], t);
}, Y.prototype.processTypedMessage = function (e, t) {
  const n = this;
  (0, _subscriptionManagerB429be9d.w)([t => n.approveTypedMessage(e, t), (e, t) => n.checkApproval("message", e, t), t => n.signTypedMessage(e, t)], t);
}, Y.prototype.processTypedMessageV3 = function (e, t) {
  const n = this;
  (0, _subscriptionManagerB429be9d.w)([t => n.approveTypedMessageV3(e, t), (e, t) => n.checkApproval("message", e, t), t => n.signTypedMessageV3(e, t)], t);
}, Y.prototype.autoApprove = function (e, t) {
  t(null, !0);
}, Y.prototype.checkApproval = function (e, t, n) {
  n(t ? null : new Error("User denied " + e + " signature."));
}, Y.prototype.parityPostTransaction = function (e, t) {
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
}, Y.prototype.parityPostSign = function (e, t, n) {
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
}, Y.prototype.parityCheckRequest = function (e, t) {
  const n = this._parityRequests[e] || null;
  return n ? n.error ? t(n.error) : void t(null, n) : t(null, null);
}, Y.prototype.recoverPersonalSignature = function (e, t) {
  let n;

  try {
    n = _subscriptionManagerB429be9d.s.recoverPersonalSignature(e);
  } catch (e) {
    return t(e);
  }

  t(null, n);
}, Y.prototype.validateTransaction = function (e, t) {
  if (void 0 === e.from) return t(new Error("Undefined address - from address required to sign transaction."));
  this.validateSender(e.from, function (n, r) {
    return n ? t(n) : r ? void t() : t(new Error(`Unknown address - unable to sign transaction for this address: "${e.from}"`));
  });
}, Y.prototype.validateMessage = function (e, t) {
  if (void 0 === e.from) return t(new Error("Undefined address - from address required to sign message."));
  this.validateSender(e.from, function (n, r) {
    return n ? t(n) : r ? void t() : t(new Error(`Unknown address - unable to sign message for this address: "${e.from}"`));
  });
}, Y.prototype.validatePersonalMessage = function (e, t) {
  return void 0 === e.from ? t(new Error("Undefined address - from address required to sign personal message.")) : void 0 === e.data ? t(new Error("Undefined message - message required to sign personal message.")) : te(e.data) ? void this.validateSender(e.from, function (n, r) {
    return n ? t(n) : r ? void t() : t(new Error(`Unknown address - unable to sign message for this address: "${e.from}"`));
  }) : t(new Error("HookedWalletSubprovider - validateMessage - message was not encoded as hex."));
}, Y.prototype.validateTypedMessage = function (e, t) {
  return void 0 === e.from ? t(new Error("Undefined address - from address required to sign typed data.")) : void 0 === e.data ? t(new Error("Undefined data - message required to sign typed data.")) : void this.validateSender(e.from, function (n, r) {
    return n ? t(n) : r ? void t() : t(new Error(`Unknown address - unable to sign message for this address: "${e.from}"`));
  });
}, Y.prototype.validateTypedMessageV3 = function (e, t) {
  return void 0 === e.from ? t(new Error("Undefined address - from address required to sign typed data.")) : void 0 === e.data ? t(new Error("Undefined data - message required to sign typed data.")) : void this.validateSender(e.from, function (n, r) {
    return n ? t(n) : r ? void t() : t(new Error(`Unknown address - unable to sign message for this address: "${e.from}"`));
  });
}, Y.prototype.validateSender = function (e, t) {
  if (!e) return t(null, !1);
  this.getAccounts(function (n, r) {
    if (n) return t(n);
    const o = -1 !== r.map(Q).indexOf(e.toLowerCase());
    t(null, o);
  });
}, Y.prototype.finalizeAndSubmitTx = function (e, t) {
  const n = this;
  n.nonceLock.take(function () {
    (0, _subscriptionManagerB429be9d.w)([n.fillInTxExtras.bind(n, e), n.signTransaction.bind(n), n.publishTransaction.bind(n)], function (e, r) {
      if (n.nonceLock.leave(), e) return t(e);
      t(null, r);
    });
  });
}, Y.prototype.finalizeTx = function (e, t) {
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
}, Y.prototype.publishTransaction = function (e, t) {
  this.emitPayload({
    method: "eth_sendRawTransaction",
    params: [e]
  }, function (e, n) {
    if (e) return t(e);
    t(null, n.result);
  });
}, Y.prototype.estimateGas = function (e, t) {
  z(this.engine, e, t);
}, Y.prototype.getGasPrice = function (e) {
  this.emitPayload({
    method: "eth_gasPrice",
    params: []
  }, function (t, n) {
    if (t) return e(t);
    e(null, n.result);
  });
}, Y.prototype.fillInTxExtras = function (e, t) {
  const n = this,
        r = e.from,
        i = {};
  void 0 === e.gasPrice && (i.gasPrice = n.getGasPrice.bind(n)), void 0 === e.nonce && (i.nonce = n.emitPayload.bind(n, {
    method: "eth_getTransactionCount",
    params: [r, "pending"]
  })), void 0 === e.gas && (i.gas = n.estimateGas.bind(n, function (e) {
    return {
      from: e.from,
      to: e.to,
      value: e.value,
      data: e.data,
      gas: e.gas,
      gasPrice: e.gasPrice,
      nonce: e.nonce
    };
  }(e))), (0, _subscriptionManagerB429be9d.p)(i, function (n, r) {
    if (n) return t(n);
    const i = {};
    r.gasPrice && (i.gasPrice = r.gasPrice), r.nonce && (i.nonce = r.nonce.result), r.gas && (i.gas = r.gas), t(null, (0, _subscriptionManagerB429be9d.e)(e, i));
  });
};
const re = _subscriptionManagerB429be9d.r.inherits,
      oe = k;
var ie = se;

function se(e) {
  this.nonceCache = {};
}

re(se, N), se.prototype.handleRequest = function (e, t, n) {
  const r = this;

  switch (e.method) {
    case "eth_getTransactionCount":
      var o = oe(e),
          i = e.params[0].toLowerCase(),
          a = r.nonceCache[i];
      return void ("pending" === o ? a ? n(null, a) : t(function (e, t, n) {
        if (e) return n();
        void 0 === r.nonceCache[i] && (r.nonceCache[i] = t), n();
      }) : t());

    case "eth_sendRawTransaction":
      return void t(function (t, n, o) {
        if (t) return o();

        var i = e.params[0],
            a = (_subscriptionManagerB429be9d.a.stripHexPrefix(i), Buffer.from(_subscriptionManagerB429be9d.a.stripHexPrefix(i), "hex"), new _indexAcf3c.T(Buffer.from(_subscriptionManagerB429be9d.a.stripHexPrefix(i), "hex"))),
            c = "0x" + a.getSenderAddress().toString("hex").toLowerCase(),
            u = _subscriptionManagerB429be9d.a.bufferToInt(a.nonce),
            d = (++u).toString(16);

        d.length % 2 && (d = "0" + d), d = "0x" + d, r.nonceCache[c] = d, o();
      });

    case "evm_revert":
      return r.nonceCache = {}, void t();

    default:
      return void t();
  }
};
var ae = class extends I {
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
    ce = (0, _index2d8aeb.d)(function (e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = t.ERR_NOT_IN_IFRAME = t.ERR_CONNECTION_TIMEOUT = t.ERR_CONNECTION_DESTROYED = void 0;
  var n = "message";
  t.ERR_CONNECTION_DESTROYED = "ConnectionDestroyed";
  t.ERR_CONNECTION_TIMEOUT = "ConnectionTimeout";
  t.ERR_NOT_IN_IFRAME = "NotInIframe";

  var r,
      o = {
    "http:": "80",
    "https:": "443"
  },
      i = /^(https?:)?\/\/([^/:]+)(:(\d+))?/,
      s = {
    ERR_CONNECTION_DESTROYED: "ConnectionDestroyed",
    ERR_CONNECTION_TIMEOUT: "ConnectionTimeout",
    ERR_NOT_IN_IFRAME: "NotInIframe",
    Promise: function () {
      try {
        return window ? window.Promise : null;
      } catch (e) {
        return null;
      }
    }(),
    debug: !1
  },
      a = (r = 0, function () {
    return ++r;
  }),
      c = function () {
    if (s.debug) {
      for (var e, t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];

      (e = console).log.apply(e, ["[Penpal]"].concat(n));
    }
  },
      u = function (e) {
    var t = [];
    return e(function () {
      t.forEach(function (e) {
        e();
      });
    }), {
      then: function (e) {
        t.push(e);
      }
    };
  },
      d = function (e) {
    return {
      name: e.name,
      message: e.message,
      stack: e.stack
    };
  },
      l = function (e) {
    var t = new Error();
    return Object.keys(e).forEach(function (n) {
      return t[n] = e[n];
    }), t;
  },
      h = function (e, t, r, o) {
    var i = t.localName,
        u = t.local,
        d = t.remote,
        h = t.remoteOrigin,
        p = !1;
    c("".concat(i, ": Connecting call sender"));
    o.then(function () {
      p = !0;
    }), r.reduce(function (e, t) {
      return e[t] = function (e) {
        return function () {
          for (var t = arguments.length, r = new Array(t), o = 0; o < t; o++) r[o] = arguments[o];

          if (c("".concat(i, ": Sending ").concat(e, "() call")), p) {
            var f = new Error("Unable to send ".concat(e, "() call due ") + "to destroyed connection");
            throw f.code = "ConnectionDestroyed", f;
          }

          return new s.Promise(function (t, o) {
            var s = a();
            u.addEventListener(n, function r(a) {
              if (a.source === d && a.origin === h && "reply" === a.data.penpal && a.data.id === s) {
                c("".concat(i, ": Received ").concat(e, "() reply")), u.removeEventListener(n, r);
                var p = a.data.returnValue;
                a.data.returnValueIsError && (p = l(p)), ("fulfilled" === a.data.resolution ? t : o)(p);
              }
            }), d.postMessage({
              penpal: "call",
              id: s,
              methodName: e,
              args: r
            }, h);
          });
        };
      }(t), e;
    }, e);
  },
      p = function (e, t, r) {
    var o = e.localName,
        i = e.local,
        a = e.remote,
        u = e.remoteOrigin,
        l = !1;
    c("".concat(o, ": Connecting call receiver"));

    var h = function (e) {
      if (e.source === a && e.origin === u && "call" === e.data.penpal) {
        var n = e.data,
            r = n.methodName,
            i = n.args,
            h = n.id;

        if (c("".concat(o, ": Received ").concat(r, "() call")), r in t) {
          var p = function (e) {
            return function (t) {
              if (c("".concat(o, ": Sending ").concat(r, "() reply")), l) c("".concat(o, ": Unable to send ").concat(r, "() reply due to destroyed connection"));else {
                var n = {
                  penpal: "reply",
                  id: h,
                  resolution: e,
                  returnValue: t
                };
                "rejected" === e && t instanceof Error && (n.returnValue = d(t), n.returnValueIsError = !0);

                try {
                  a.postMessage(n, u);
                } catch (e) {
                  throw "DataCloneError" === e.name && a.postMessage({
                    penpal: "reply",
                    id: h,
                    resolution: "rejected",
                    returnValue: d(e),
                    returnValueIsError: !0
                  }, u), e;
                }
              }
            };
          };

          new s.Promise(function (e) {
            return e(t[r].apply(t, i));
          }).then(p("fulfilled"), p("rejected"));
        }
      }
    };

    i.addEventListener(n, h), r.then(function () {
      l = !0, i.removeEventListener(n, h);
    });
  };

  s.connectToChild = function (e) {
    var t,
        r = e.url,
        a = e.appendTo,
        d = e.methods,
        l = void 0 === d ? {} : d,
        f = e.timeout,
        g = new u(function (e) {
      t = e;
    }),
        m = window,
        v = document.createElement("iframe");
    (a || document.body).appendChild(v), g.then(function () {
      v.parentNode && v.parentNode.removeChild(v);
    });

    var y = v.contentWindow || v.contentDocument.parentWindow,
        w = function (e) {
      var t,
          n,
          r,
          s = document.location,
          a = i.exec(e);
      a ? (t = a[1] ? a[1] : s.protocol, n = a[2], r = a[4]) : (t = s.protocol, n = s.hostname, r = s.port);
      var c = r && r !== o[t] ? ":".concat(r) : "";
      return "".concat(t, "//").concat(n).concat(c);
    }(r);

    return {
      promise: new s.Promise(function (e, o) {
        var i;
        void 0 !== f && (i = setTimeout(function () {
          var e = new Error("Connection to child timed out after ".concat(f, "ms"));
          e.code = "ConnectionTimeout", o(e), t();
        }, f));

        var s,
            a,
            d = {},
            b = function (t) {
          if (t.source === y && t.origin === w && "handshake" === t.data.penpal) {
            c("Parent: Received handshake, sending reply"), t.source.postMessage({
              penpal: "handshake-reply",
              methodNames: Object.keys(l)
            }, t.origin);
            var n = {
              localName: "Parent",
              local: m,
              remote: y,
              remoteOrigin: t.origin
            };
            a && a();
            var r = new u(function (e) {
              g.then(e), a = e;
            });
            p(n, l, r), s && s.forEach(function (e) {
              delete d[e];
            }), s = t.data.methodNames, h(d, n, s, g), clearTimeout(i), e(d);
          }
        };

        m.addEventListener(n, b), g.then(function () {
          m.removeEventListener(n, b);
          var e = new Error("Connection destroyed");
          e.code = "ConnectionDestroyed", o(e);
        }), c("Parent: Loading iframe"), v.src = r;
      }),
      iframe: v,
      destroy: t
    };
  }, s.connectToParent = function () {
    var e,
        t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        r = t.parentOrigin,
        o = void 0 === r ? "*" : r,
        i = t.methods,
        a = void 0 === i ? {} : i,
        d = t.timeout;

    if (window === window.top) {
      var l = new Error("connectToParent() must be called within an iframe");
      throw l.code = "NotInIframe", l;
    }

    var f = new u(function (t) {
      e = t;
    }),
        g = window,
        m = g.parent,
        v = new s.Promise(function (t, r) {
      var i;
      void 0 !== d && (i = setTimeout(function () {
        var t = new Error("Connection to parent timed out after ".concat(d, "ms"));
        t.code = "ConnectionTimeout", r(t), e();
      }, d));

      var s = function e(r) {
        if (("*" === o || o === r.origin) && r.source === m && "handshake-reply" === r.data.penpal) {
          c("Child: Received handshake reply"), g.removeEventListener(n, e);
          var s = {
            localName: "Child",
            local: g,
            remote: m,
            remoteOrigin: r.origin
          },
              u = {};
          p(s, a, f), h(u, s, r.data.methodNames, f), clearTimeout(i), t(u);
        }
      };

      g.addEventListener(n, s), f.then(function () {
        g.removeEventListener(n, s);
        var e = new Error("Connection destroyed");
        e.code = "ConnectionDestroyed", r(e);
      }), c("Child: Sending handshake"), m.postMessage({
        penpal: "handshake",
        methodNames: Object.keys(a)
      }, o);
    });
    return {
      promise: v,
      destroy: e
    };
  };
  var f = s;
  t.default = f;
}),
    ue = (0, _index2d8aeb.e)(ce);
ce.ERR_NOT_IN_IFRAME, ce.ERR_CONNECTION_TIMEOUT, ce.ERR_CONNECTION_DESTROYED;

function de(e, t) {
  var n = "string" == typeof e ? Object.assign({}, le[e]) : e;
  if ("object" != typeof n) throw new Error("[Portis] illegal 'network' parameter. Read more about it here: https://docs.portis.io/#/configuration?id=network");
  if (!n.nodeUrl) throw new Error("[Portis] 'nodeUrl' is required. Read more about it here: https://docs.portis.io/#/configuration?id=network");
  if (t && !n.gasRelayHubAddress) throw new Error("[Portis] can't find default gas relay hub for " + e);
  return "string" != typeof e || t || delete n.gasRelayHubAddress, n;
}

var le = {
  mainnet: {
    nodeUrl: "https://mainnet.infura.io/v3/faa4639b090f46499f29d894da0551a0",
    chainId: "1",
    gasRelayHubAddress: "0xD216153c06E857cD7f72665E0aF1d7D82172F494"
  },
  ropsten: {
    nodeUrl: "https://ropsten.infura.io/v3/faa4639b090f46499f29d894da0551a0",
    chainId: "3",
    gasRelayHubAddress: "0xD216153c06E857cD7f72665E0aF1d7D82172F494"
  },
  rinkeby: {
    nodeUrl: "https://rinkeby.infura.io/v3/faa4639b090f46499f29d894da0551a0",
    chainId: "4",
    gasRelayHubAddress: "0xD216153c06E857cD7f72665E0aF1d7D82172F494"
  },
  goerli: {
    nodeUrl: "https://goerli.prylabs.net",
    chainId: "5"
  },
  ubiq: {
    nodeUrl: "https://rpc1.ubiqscan.io",
    chainId: "8"
  },
  thundercoreTestnet: {
    nodeUrl: "https://testnet-rpc.thundercore.com:8544",
    chainId: "18"
  },
  orchid: {
    nodeUrl: "https://public-node.rsk.co",
    chainId: "30"
  },
  orchidTestnet: {
    nodeUrl: "https://public-node.testnet.rsk.co",
    chainId: "31"
  },
  kovan: {
    nodeUrl: "https://kovan.infura.io/v3/faa4639b090f46499f29d894da0551a0",
    chainId: "42",
    gasRelayHubAddress: "0xD216153c06E857cD7f72665E0aF1d7D82172F494"
  },
  classic: {
    nodeUrl: "https://ethereumclassic.network",
    chainId: "61"
  },
  sokol: {
    nodeUrl: "https://sokol.poa.network",
    chainId: "77"
  },
  core: {
    nodeUrl: "https://core.poa.network",
    chainId: "99"
  },
  xdai: {
    nodeUrl: "https://dai.poa.network",
    chainId: "100",
    gasRelayHubAddress: "0xD216153c06E857cD7f72665E0aF1d7D82172F494"
  },
  thundercore: {
    nodeUrl: "https://mainnet-rpc.thundercore.com",
    chainId: "108"
  },
  fuse: {
    nodeUrl: "https://rpc.fusenet.io",
    chainId: "122"
  },
  lightstreams: {
    nodeUrl: "https://node.mainnet.lightstreams.io",
    chainId: "163"
  },
  maticAlpha: {
    nodeUrl: "https://alpha.ethereum.matic.network",
    chainId: "4626"
  },
  maticTestnet: {
    nodeUrl: "https://testnet2.matic.network",
    chainId: "8995"
  }
},
    he = window && window.__awaiter || function (e, t, n, r) {
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
      e.done ? o(e.value) : new n(function (t) {
        t(e.value);
      }).then(s, a);
    }

    c((r = r.apply(e, t || [])).next());
  });
},
    pe = window && window.__generator || function (e, t) {
  var n,
      r,
      o,
      i,
      s = {
    label: 0,
    sent: function () {
      if (1 & o[0]) throw o[1];
      return o[1];
    },
    trys: [],
    ops: []
  };
  return i = {
    next: a(0),
    throw: a(1),
    return: a(2)
  }, "function" == typeof Symbol && (i[Symbol.iterator] = function () {
    return this;
  }), i;

  function a(i) {
    return function (a) {
      return function (i) {
        if (n) throw new TypeError("Generator is already executing.");

        for (; s;) try {
          if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;

          switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
            case 0:
            case 1:
              o = i;
              break;

            case 4:
              return s.label++, {
                value: i[1],
                done: !1
              };

            case 5:
              s.label++, r = i[1], i = [0];
              continue;

            case 7:
              i = s.ops.pop(), s.trys.pop();
              continue;

            default:
              if (!(o = s.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                s = 0;
                continue;
              }

              if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                s.label = i[1];
                break;
              }

              if (6 === i[0] && s.label < o[1]) {
                s.label = o[1], o = i;
                break;
              }

              if (o && s.label < o[2]) {
                s.label = o[2], s.ops.push(i);
                break;
              }

              o[2] && s.ops.pop(), s.trys.pop();
              continue;
          }

          i = t.call(e, s);
        } catch (e) {
          i = [6, e], r = 0;
        } finally {
          n = o = 0;
        }

        if (5 & i[0]) throw i[1];
        return {
          value: i[0] ? i[1] : void 0,
          done: !0
        };
      }([i, a]);
    };
  }
},
    fe = require("ethereumjs-util"),
    ge = fe.addHexPrefix,
    me = fe.stripHexPrefix,
    ve = fe.BN;

function ye(e, t) {
  return he(this, void 0, void 0, function () {
    var n, r, o, i, s;
    return pe(this, function (a) {
      switch (a.label) {
        case 0:
          return [4, e.getBlockByNumber("latest", !1)];

        case 1:
          return n = a.sent(), [4, we(e, t, n.gasLimit)];

        case 2:
          if (r = a.sent(), o = r.safeGas, i = r.simpleSend, s = r.gasLimitSpecified, i || s) return [2, o];
          a.label = 3;

        case 3:
          return a.trys.push([3, 5,, 6]), [4, be(e, t, n.gasLimit, o)];

        case 4:
          return [2, a.sent()];

        case 5:
          return a.sent(), [2, o];

        case 6:
          return [2];
      }
    });
  });
}

function we(e, t, n) {
  return he(this, void 0, void 0, function () {
    var r, o, i;
    return pe(this, function (s) {
      switch (s.label) {
        case 0:
          return Boolean(t.gas) ? [2, {
            safeGas: t.gas,
            simpleSend: !1,
            gasLimitSpecified: !0
          }] : (r = t.to, Boolean(r) ? [4, e.getCode(r)] : [3, 2]);

        case 1:
          if (o = s.sent(), !o || "0x" === o || "0x0" === o) {
            if (t.data) throw new Error("Trying to call a function on a non-contract address");
            return [2, {
              safeGas: "0x5208",
              simpleSend: !0,
              gasLimitSpecified: !1
            }];
          }

          s.label = 2;

        case 2:
          return i = ke(n), a = i, c = 20, u = new ve(19), d = new ve(c), [2, {
            safeGas: Ee(a.mul(u).div(d)),
            simpleSend: !1,
            gasLimitSpecified: !1
          }];
      }

      var a, c, u, d;
    });
  });
}

function be(e, t, n, r) {
  return he(this, void 0, void 0, function () {
    var o;
    return pe(this, function (i) {
      switch (i.label) {
        case 0:
          return t.gas = r, o = ge, [4, e.estimateGas(t)];

        case 1:
          return [2, _e(o.apply(void 0, [i.sent()]), n)];
      }
    });
  });
}

function _e(e, t) {
  var n = ke(e),
      r = ke(t).muln(.9),
      o = n.muln(1.5);
  return n.gt(r) ? Ee(n) : o.lt(r) ? Ee(o) : Ee(r);
}

function ke(e) {
  return new ve(me(e), 16);
}

function Ee(e) {
  return ge(e.toString(16));
}

var Te = function () {
  function e(e) {
    this.provider = e;
  }

  return e.prototype.getBlockByNumber = function (e, t) {
    return this.sendAsync("eth_getBlockByNumber", e, t);
  }, e.prototype.getCode = function (e, t) {
    return void 0 === t && (t = "latest"), this.sendAsync("eth_getCode", e, t);
  }, e.prototype.estimateGas = function (e) {
    return this.sendAsync("eth_estimateGas", e);
  }, e.prototype.sendAsync = function (e) {
    for (var t = this, n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];

    return new Promise(function (r, o) {
      t.provider.sendAsync({
        id: 42,
        jsonrpc: "2.0",
        method: e,
        params: n
      }, function (e, t) {
        e ? o(e) : r(t.result);
      });
    });
  }, e;
}(),
    Pe = !1;

function Re() {
  return new Promise(function (e) {
    Pe ? e() : ["loaded", "interactive", "complete"].indexOf(document.readyState) > -1 ? (Pe = !0, e()) : window.addEventListener("load", function () {
      Pe = !0, e();
    }, !1);
  });
}

var Ce = {
  Blockchain: class {
    constructor(e, t) {
      this.name = e, this.netID = t;
    }

    toJSON() {
      return JSON.parse('{ "name":"' + this.name + '", "netID":"' + this.netID + '"}');
    }

  }
},
    xe = function (e, t) {
  return function () {
    for (var n = new Array(arguments.length), r = 0; r < n.length; r++) n[r] = arguments[r];

    return e.apply(t, n);
  };
},
    Be = Object.prototype.toString;

function Se(e) {
  return "[object Array]" === Be.call(e);
}

function Ne(e) {
  return null !== e && "object" == typeof e;
}

function Ae(e) {
  return "[object Function]" === Be.call(e);
}

function Ie(e, t) {
  if (null != e) if ("object" != typeof e && (e = [e]), Se(e)) for (var n = 0, r = e.length; n < r; n++) t.call(null, e[n], n, e);else for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.call(null, e[o], o, e);
}

var Me = {
  isArray: Se,
  isArrayBuffer: function (e) {
    return "[object ArrayBuffer]" === Be.call(e);
  },
  isBuffer: function (e) {
    return null != e && null != e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e);
  },
  isFormData: function (e) {
    return "undefined" != typeof FormData && e instanceof FormData;
  },
  isArrayBufferView: function (e) {
    return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && e.buffer instanceof ArrayBuffer;
  },
  isString: function (e) {
    return "string" == typeof e;
  },
  isNumber: function (e) {
    return "number" == typeof e;
  },
  isObject: Ne,
  isUndefined: function (e) {
    return void 0 === e;
  },
  isDate: function (e) {
    return "[object Date]" === Be.call(e);
  },
  isFile: function (e) {
    return "[object File]" === Be.call(e);
  },
  isBlob: function (e) {
    return "[object Blob]" === Be.call(e);
  },
  isFunction: Ae,
  isStream: function (e) {
    return Ne(e) && Ae(e.pipe);
  },
  isURLSearchParams: function (e) {
    return "undefined" != typeof URLSearchParams && e instanceof URLSearchParams;
  },
  isStandardBrowserEnv: function () {
    return ("undefined" == typeof navigator || "ReactNative" !== navigator.product) && "undefined" != typeof window && "undefined" != typeof document;
  },
  forEach: Ie,
  merge: function e() {
    var t = {};

    function n(n, r) {
      "object" == typeof t[r] && "object" == typeof n ? t[r] = e(t[r], n) : t[r] = n;
    }

    for (var r = 0, o = arguments.length; r < o; r++) Ie(arguments[r], n);

    return t;
  },
  extend: function (e, t, n) {
    return Ie(t, function (t, r) {
      e[r] = n && "function" == typeof t ? xe(t, n) : t;
    }), e;
  },
  trim: function (e) {
    return e.replace(/^\s*/, "").replace(/\s*$/, "");
  }
},
    De = function (e, t, n, r, o) {
  return function (e, t, n, r, o) {
    return e.config = t, n && (e.code = n), e.request = r, e.response = o, e;
  }(new Error(e), t, n, r, o);
};

function Oe(e) {
  return encodeURIComponent(e).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}

var Le = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"],
    Ue = Me.isStandardBrowserEnv() ? function () {
  var e,
      t = /(msie|trident)/i.test(navigator.userAgent),
      n = document.createElement("a");

  function r(e) {
    var r = e;
    return t && (n.setAttribute("href", r), r = n.href), n.setAttribute("href", r), {
      href: n.href,
      protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
      host: n.host,
      search: n.search ? n.search.replace(/^\?/, "") : "",
      hash: n.hash ? n.hash.replace(/^#/, "") : "",
      hostname: n.hostname,
      port: n.port,
      pathname: "/" === n.pathname.charAt(0) ? n.pathname : "/" + n.pathname
    };
  }

  return e = r(window.location.href), function (t) {
    var n = Me.isString(t) ? r(t) : t;
    return n.protocol === e.protocol && n.host === e.host;
  };
}() : function () {
  return !0;
},
    Fe = Me.isStandardBrowserEnv() ? {
  write: function (e, t, n, r, o, i) {
    var s = [];
    s.push(e + "=" + encodeURIComponent(t)), Me.isNumber(n) && s.push("expires=" + new Date(n).toGMTString()), Me.isString(r) && s.push("path=" + r), Me.isString(o) && s.push("domain=" + o), !0 === i && s.push("secure"), document.cookie = s.join("; ");
  },
  read: function (e) {
    var t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
    return t ? decodeURIComponent(t[3]) : null;
  },
  remove: function (e) {
    this.write(e, "", Date.now() - 864e5);
  }
} : {
  write: function () {},
  read: function () {
    return null;
  },
  remove: function () {}
},
    qe = function (e) {
  return new Promise(function (t, n) {
    var r = e.data,
        o = e.headers;
    Me.isFormData(r) && delete o["Content-Type"];
    var i = new XMLHttpRequest();

    if (e.auth) {
      var s = e.auth.username || "",
          a = e.auth.password || "";
      o.Authorization = "Basic " + btoa(s + ":" + a);
    }

    if (i.open(e.method.toUpperCase(), function (e, t, n) {
      if (!t) return e;
      var r;
      if (n) r = n(t);else if (Me.isURLSearchParams(t)) r = t.toString();else {
        var o = [];
        Me.forEach(t, function (e, t) {
          null != e && (Me.isArray(e) ? t += "[]" : e = [e], Me.forEach(e, function (e) {
            Me.isDate(e) ? e = e.toISOString() : Me.isObject(e) && (e = JSON.stringify(e)), o.push(Oe(t) + "=" + Oe(e));
          }));
        }), r = o.join("&");
      }
      return r && (e += (-1 === e.indexOf("?") ? "?" : "&") + r), e;
    }(e.url, e.params, e.paramsSerializer), !0), i.timeout = e.timeout, i.onreadystatechange = function () {
      if (i && 4 === i.readyState && (0 !== i.status || i.responseURL && 0 === i.responseURL.indexOf("file:"))) {
        var r,
            o,
            s,
            a,
            c,
            u = "getAllResponseHeaders" in i ? (r = i.getAllResponseHeaders(), c = {}, r ? (Me.forEach(r.split("\n"), function (e) {
          if (a = e.indexOf(":"), o = Me.trim(e.substr(0, a)).toLowerCase(), s = Me.trim(e.substr(a + 1)), o) {
            if (c[o] && Le.indexOf(o) >= 0) return;
            c[o] = "set-cookie" === o ? (c[o] ? c[o] : []).concat([s]) : c[o] ? c[o] + ", " + s : s;
          }
        }), c) : c) : null,
            d = {
          data: e.responseType && "text" !== e.responseType ? i.response : i.responseText,
          status: i.status,
          statusText: i.statusText,
          headers: u,
          config: e,
          request: i
        };
        !function (e, t, n) {
          var r = n.config.validateStatus;
          n.status && r && !r(n.status) ? t(De("Request failed with status code " + n.status, n.config, null, n.request, n)) : e(n);
        }(t, n, d), i = null;
      }
    }, i.onerror = function () {
      n(De("Network Error", e, null, i)), i = null;
    }, i.ontimeout = function () {
      n(De("timeout of " + e.timeout + "ms exceeded", e, "ECONNABORTED", i)), i = null;
    }, Me.isStandardBrowserEnv()) {
      var c = Fe,
          u = (e.withCredentials || Ue(e.url)) && e.xsrfCookieName ? c.read(e.xsrfCookieName) : void 0;
      u && (o[e.xsrfHeaderName] = u);
    }

    if ("setRequestHeader" in i && Me.forEach(o, function (e, t) {
      void 0 === r && "content-type" === t.toLowerCase() ? delete o[t] : i.setRequestHeader(t, e);
    }), e.withCredentials && (i.withCredentials = !0), e.responseType) try {
      i.responseType = e.responseType;
    } catch (t) {
      if ("json" !== e.responseType) throw t;
    }
    "function" == typeof e.onDownloadProgress && i.addEventListener("progress", e.onDownloadProgress), "function" == typeof e.onUploadProgress && i.upload && i.upload.addEventListener("progress", e.onUploadProgress), e.cancelToken && e.cancelToken.promise.then(function (e) {
      i && (i.abort(), n(e), i = null);
    }), void 0 === r && (r = null), i.send(r);
  });
},
    je = {
  "Content-Type": "application/x-www-form-urlencoded"
};

function He(e, t) {
  !Me.isUndefined(e) && Me.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t);
}

var Ve,
    We = {
  adapter: (("undefined" != typeof XMLHttpRequest || "undefined" != typeof process) && (Ve = qe), Ve),
  transformRequest: [function (e, t) {
    return function (e, t) {
      Me.forEach(e, function (n, r) {
        r !== t && r.toUpperCase() === t.toUpperCase() && (e[t] = n, delete e[r]);
      });
    }(t, "Content-Type"), Me.isFormData(e) || Me.isArrayBuffer(e) || Me.isBuffer(e) || Me.isStream(e) || Me.isFile(e) || Me.isBlob(e) ? e : Me.isArrayBufferView(e) ? e.buffer : Me.isURLSearchParams(e) ? (He(t, "application/x-www-form-urlencoded;charset=utf-8"), e.toString()) : Me.isObject(e) ? (He(t, "application/json;charset=utf-8"), JSON.stringify(e)) : e;
  }],
  transformResponse: [function (e) {
    if ("string" == typeof e) try {
      e = JSON.parse(e);
    } catch (e) {}
    return e;
  }],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  validateStatus: function (e) {
    return e >= 200 && e < 300;
  }
};
We.headers = {
  common: {
    Accept: "application/json, text/plain, */*"
  }
}, Me.forEach(["delete", "get", "head"], function (e) {
  We.headers[e] = {};
}), Me.forEach(["post", "put", "patch"], function (e) {
  We.headers[e] = Me.merge(je);
});
var Ge = We;

function Je() {
  this.handlers = [];
}

Je.prototype.use = function (e, t) {
  return this.handlers.push({
    fulfilled: e,
    rejected: t
  }), this.handlers.length - 1;
}, Je.prototype.eject = function (e) {
  this.handlers[e] && (this.handlers[e] = null);
}, Je.prototype.forEach = function (e) {
  Me.forEach(this.handlers, function (t) {
    null !== t && e(t);
  });
};

var ze = Je,
    $e = function (e, t, n) {
  return Me.forEach(n, function (n) {
    e = n(e, t);
  }), e;
},
    Ke = function (e) {
  return !(!e || !e.__CANCEL__);
};

function Xe(e) {
  e.cancelToken && e.cancelToken.throwIfRequested();
}

var Ye = function (e) {
  var t, n, r;
  return Xe(e), e.baseURL && (r = e.url, !/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(r)) && (e.url = (t = e.baseURL, (n = e.url) ? t.replace(/\/+$/, "") + "/" + n.replace(/^\/+/, "") : t)), e.headers = e.headers || {}, e.data = $e(e.data, e.headers, e.transformRequest), e.headers = Me.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers || {}), Me.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function (t) {
    delete e.headers[t];
  }), (e.adapter || Ge.adapter)(e).then(function (t) {
    return Xe(e), t.data = $e(t.data, t.headers, e.transformResponse), t;
  }, function (t) {
    return Ke(t) || (Xe(e), t && t.response && (t.response.data = $e(t.response.data, t.response.headers, e.transformResponse))), Promise.reject(t);
  });
};

function Qe(e) {
  this.defaults = e, this.interceptors = {
    request: new ze(),
    response: new ze()
  };
}

Qe.prototype.request = function (e) {
  "string" == typeof e && (e = Me.merge({
    url: arguments[0]
  }, arguments[1])), (e = Me.merge(Ge, {
    method: "get"
  }, this.defaults, e)).method = e.method.toLowerCase();
  var t = [Ye, void 0],
      n = Promise.resolve(e);

  for (this.interceptors.request.forEach(function (e) {
    t.unshift(e.fulfilled, e.rejected);
  }), this.interceptors.response.forEach(function (e) {
    t.push(e.fulfilled, e.rejected);
  }); t.length;) n = n.then(t.shift(), t.shift());

  return n;
}, Me.forEach(["delete", "get", "head", "options"], function (e) {
  Qe.prototype[e] = function (t, n) {
    return this.request(Me.merge(n || {}, {
      method: e,
      url: t
    }));
  };
}), Me.forEach(["post", "put", "patch"], function (e) {
  Qe.prototype[e] = function (t, n, r) {
    return this.request(Me.merge(r || {}, {
      method: e,
      url: t,
      data: n
    }));
  };
});
var Ze = Qe;

function et(e) {
  this.message = e;
}

et.prototype.toString = function () {
  return "Cancel" + (this.message ? ": " + this.message : "");
}, et.prototype.__CANCEL__ = !0;
var tt = et;

function nt(e) {
  if ("function" != typeof e) throw new TypeError("executor must be a function.");
  var t;
  this.promise = new Promise(function (e) {
    t = e;
  });
  var n = this;
  e(function (e) {
    n.reason || (n.reason = new tt(e), t(n.reason));
  });
}

nt.prototype.throwIfRequested = function () {
  if (this.reason) throw this.reason;
}, nt.source = function () {
  var e;
  return {
    token: new nt(function (t) {
      e = t;
    }),
    cancel: e
  };
};
var rt = nt;

function ot(e) {
  var t = new Ze(e),
      n = xe(Ze.prototype.request, t);
  return Me.extend(n, Ze.prototype, t), Me.extend(n, t), n;
}

var it = ot(Ge);
it.Axios = Ze, it.create = function (e) {
  return ot(Me.merge(Ge, e));
}, it.Cancel = tt, it.CancelToken = rt, it.isCancel = Ke, it.all = function (e) {
  return Promise.all(e);
}, it.spread = function (e) {
  return function (t) {
    return e.apply(null, t);
  };
};
var st = it,
    at = it;
st.default = at;
var ct = st;
var ut = "https://dispatch.pokt.network",
    dt = "/v1/dispatch",
    lt = "/v1/report",
    ht = "/v1/relay/";
var pt = {
  Node: class {
    constructor(e, t, n) {
      this.network = e, this.netID = t;
      var r = n.split(":");
      this.ip = r[0], this.port = r[1], n.includes("https://") || n.includes("http://") ? this.ipPort = n : "443" === this.port || 443 === this.port ? this.ipPort = "https://" + n : this.ipPort = "http://" + n;
    }

    isValid() {
      for (var e in this) if (!this.hasOwnProperty(e) || "" == this[e]) return !1;

      return !0;
    }

    isEqual(e, t) {
      return this.netID == e.toString() && this.network == t.toString();
    }

    async sendRelay(e, t) {
      try {
        const o = ct.create({
          baseURL: this.ipPort,
          timeout: e.configuration.requestTimeOut,
          headers: {
            "Content-Type": "application/json"
          }
        });
        var n = await o.post(ht, e.toJSON());

        if (200 == n.status && null != n.data) {
          var r = n.data;
          return t ? void t(r, null) : r;
        }

        return t ? void t(null, new Error("Failed to send relay with error: " + n.data)) : new Error("Failed to send relay with error: " + n.data);
      } catch (e) {
        return t ? void t(null, new Error("Failed to send relay with error: " + e)) : new Error("Failed to send relay with error: " + e);
      }
    }

  }
};
const ft = pt.Node;
var gt = {
  Dispatch: class {
    constructor(e) {
      this.configuration = e, this.axiosInstance = ct.create({
        baseURL: ut,
        path: dt,
        timeout: this.configuration.requestTimeOut,
        headers: {
          "Content-Type": "application/json"
        }
      });
    }

    blockchainsJSON() {
      var e = [];
      return this.configuration.blockchains.forEach(t => {
        e.push(t);
      }), e;
    }

    async retrieveServiceNodes(e) {
      try {
        var t;

        if (null != (t = await this.axiosInstance.post(dt, {
          DevID: this.configuration.devID,
          Blockchains: this.blockchainsJSON()
        })) && 200 == t.status && null != t.data) {
          var n = this.parseDispatchResponse(t.data);
          return e ? void e(n, null) : n;
        }

        return e ? void e(null, new Error("Failed to retrieve service nodes with error: " + t.data)) : new Error("Failed to retrieve service nodes with error: " + t.data);
      } catch (t) {
        return e ? void e(null, new Error("Failed to retrieve service nodes with error: " + t)) : new Error("Failed to retrieve service nodes with error: " + t);
      }
    }

    parseDispatchResponse(e) {
      try {
        var t = [];
        if (Array.isArray(e)) e.forEach(e => {
          var n = e.name,
              r = e.netid;
          e.ips && e.ips.forEach(e => {
            var o = new ft(n, r, e);
            t.push(o);
          });
        });else {
          var n = e.name,
              r = e.netid;
          e.ips && e.ips.forEach(e => {
            var o = new ft(n, r, e);
            t.push(o);
          });
        }
        return t;
      } catch (e) {
        return new Error("Failed to parsed service nodes with error: " + e);
      }
    }

  }
};
var mt = {
  Relay: class {
    constructor(e, t, n, r) {
      this.blockchain = e, this.netID = t, this.data = n, this.configuration = r;
    }

    toJSON() {
      return {
        Blockchain: this.blockchain,
        NetID: this.netID,
        Data: this.data,
        DevID: this.configuration.devID
      };
    }

    isValid() {
      for (var e in this) if (!this.hasOwnProperty(e) || "" == this[e]) return !1;

      return !0;
    }

  }
};
var vt = {
  Report: class {
    constructor(e, t, n) {
      this.ip = e, this.message = t, this.configuration = n;
    }

    toJSON() {
      return {
        IP: this.ip,
        Message: this.message
      };
    }

    isValid() {
      for (var e in this) if (!this.hasOwnProperty(e) || "" == this[e]) return !1;

      return !0;
    }

    async send(e) {
      const t = ct.create({
        baseURL: ut,
        timeout: this.configuration.requestTimeOut,
        headers: {
          "Content-Type": "application/json"
        }
      });
      var n = await t.post(lt, this.toJSON());
      return 200 == n.status && null != n.data ? e ? void e(null, n.data) : n.data : e ? void e(new Error("Failed to send report with error: " + n.data)) : new Error("Failed to send report with error: " + n.data);
    }

  }
};
var yt = {
  Wallet: class {
    constructor(e, t, n, r, o) {
      this.address = e, this.privateKey = t, this.network = n, this.networkID = r, this.data = o;
    }

  }
},
    wt = (0, _index2d8aeb.d)(function (e) {
  e.exports = Object.assign(e.exports, Ce, gt, pt, mt, vt, yt);
});
const bt = wt.Blockchain,
      _t = wt.Dispatch,
      kt = wt.Relay,
      Et = wt.Report;

class Tt {
  constructor(e, t, n, r) {
    this.devID = e, this.blockchains = t, this.maxNodes = n || 5, this.nodes = [], this.requestTimeOut = r || 1e4, this.dispatch = null;
  }

  nodesIsEmpty() {
    return null == this.nodes || 0 == this.nodes.length;
  }

}

var Pt = {
  Pocket: class {
    constructor(e) {
      var t = [];
      if (null == e.devID || null == e.networkName || null == e.netIDs) return new Error("Invalid number of arguments");
      if (Array.isArray(e.netIDs)) e.netIDs.forEach(n => {
        var r = new bt(e.networkName, n);
        t.push(r.toJSON());
      });else {
        var n = new bt(e.networkName, e.netIDs);
        t.push(n.toJSON());
      }
      this.configuration = new Tt(e.devID, t, e.maxNodes || 5, e.requestTimeOut || 1e4);
    }

    createRelay(e, t, n) {
      return new kt(e, t, "string" == typeof n ? n : JSON.stringify(n), this.configuration);
    }

    createReport(e, t) {
      return new Et(e, t, this.configuration);
    }

    getDispatch() {
      return null == this.dispatch && (this.dispatch = new _t(this.configuration)), this.dispatch;
    }

    async getNode(e, t) {
      try {
        var n = [];

        if (this.configuration.nodesIsEmpty()) {
          var r = await this.retrieveNodes();
          if (r instanceof Error == 1) throw r;
          this.configuration.nodes = r;
        }

        return this.configuration.nodes.forEach(r => {
          r.isEqual(e, t) && n.push(r);
        }), n.length <= 0 ? null : n[Math.floor(Math.random() * n.length)];
      } catch (e) {
        return null;
      }
    }

    async sendReport(e, t) {
      try {
        if (null == e) throw new Error("Report is null");
        if (!e.isValid()) throw new Error("One or more Report properties are empty.");
        var n = await e.send();
        return n instanceof Error == 0 ? t ? void t(null, n) : n : t ? void t(n) : n;
      } catch (e) {
        return t ? void t(e) : e;
      }
    }

    async sendRelay(e, t) {
      try {
        if (null == e || null == e.data) return t ? void t(new Error("Relay is null or data field is missing")) : new Error("Relay is null or data field is missing");
        if (!e.isValid()) return t ? void t(new Error("Relay is missing a property, please verify all properties.")) : new Error("Relay is missing a property, please verify all properties.");
        var n = await this.getNode(e.netID, e.blockchain);
        if (null == n) return t ? void t(new Error("Node is empty.")) : new Error("Node is empty.");
        var r = await n.sendRelay(e);
        return r instanceof Error == 0 ? t ? void t(null, r) : r : t ? void t(r) : r;
      } catch (e) {
        return t ? void t(new Error("Failed to send relay with error: " + e)) : new Error("Failed to send relay with error: " + e);
      }
    }

    async retrieveNodes(e) {
      try {
        var t = this.getDispatch(),
            n = await t.retrieveServiceNodes();
        return n instanceof Error == 0 && 0 != n.length ? (this.configuration.nodes = n, e ? void e(null, n) : n) : e ? void e(new Error("Failed to retrieve a list of nodes."), null) : new Error("Failed to retrieve a list of nodes.");
      } catch (t) {
        return e ? void e(new Error("Failed to retrieve a list of nodes with error: " + t), null) : new Error("Failed to retrieve a list of nodes with error: " + t);
      }
    }

  },
  Wallet: wt.Wallet,
  Relay: wt.Relay
},
    Rt = window && window.__awaiter || function (e, t, n, r) {
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
      e.done ? o(e.value) : new n(function (t) {
        t(e.value);
      }).then(s, a);
    }

    c((r = r.apply(e, t || [])).next());
  });
},
    Ct = window && window.__generator || function (e, t) {
  var n,
      r,
      o,
      i,
      s = {
    label: 0,
    sent: function () {
      if (1 & o[0]) throw o[1];
      return o[1];
    },
    trys: [],
    ops: []
  };
  return i = {
    next: a(0),
    throw: a(1),
    return: a(2)
  }, "function" == typeof Symbol && (i[Symbol.iterator] = function () {
    return this;
  }), i;

  function a(i) {
    return function (a) {
      return function (i) {
        if (n) throw new TypeError("Generator is already executing.");

        for (; s;) try {
          if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;

          switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
            case 0:
            case 1:
              o = i;
              break;

            case 4:
              return s.label++, {
                value: i[1],
                done: !1
              };

            case 5:
              s.label++, r = i[1], i = [0];
              continue;

            case 7:
              i = s.ops.pop(), s.trys.pop();
              continue;

            default:
              if (!(o = s.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                s = 0;
                continue;
              }

              if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                s.label = i[1];
                break;
              }

              if (6 === i[0] && s.label < o[1]) {
                s.label = o[1], o = i;
                break;
              }

              if (o && s.label < o[2]) {
                s.label = o[2], s.ops.push(i);
                break;
              }

              o[2] && s.ops.pop(), s.trys.pop();
              continue;
          }

          i = t.call(e, s);
        } catch (e) {
          i = [6, e], r = 0;
        } finally {
          n = o = 0;
        }

        if (5 & i[0]) throw i[1];
        return {
          value: i[0] ? i[1] : void 0,
          done: !0
        };
      }([i, a]);
    };
  }
},
    xt = ["email", "reputation"],
    Bt = document.createElement("iframe");

Bt.style.width = "0", Bt.style.height = "0", Bt.style.border = "none", Bt.style.position = "absolute", Bt.style.top = "-999px", Bt.style.left = "-999px", Bt.src = "https://widget.portis.io", Re().then(function () {
  document.body.appendChild(Bt);
});

var St = function () {
  function e(e, t, n) {
    void 0 === n && (n = {}), this._widgetUrl = "https://widget.portis.io", function () {
      var e = "localhost" === location.hostname || "127.0.0.1" === location.hostname,
          t = "https:" === location.protocol;
      if (!(e || t)) throw "[Portis] Access to the WebCrypto API is restricted to secure origins.\nIf this is a development environment please use http://localhost:" + location.port + " instead.\nOtherwise, please use an SSL certificate.";
    }(), this._valiadateParams(e, t, n), this.config = {
      dappId: e,
      network: de(t, n.gasRelay),
      version: "2.0.0-beta.54",
      scope: n.scope,
      registerPageByDefault: n.registerPageByDefault
    }, this.widget = this._initWidget(), this.provider = this._initProvider(n);
  }

  return e.prototype.changeNetwork = function (e, t) {
    var n = de(e, t);
    this.clearSubprovider(ie), this.clearSubprovider(H), this.config.network = n;
  }, e.prototype.setDefaultEmail = function (e) {
    this.config.defaultEmail = e;
  }, e.prototype.showPortis = function () {
    return Rt(this, void 0, void 0, function () {
      return Ct(this, function (e) {
        switch (e.label) {
          case 0:
            return [4, this.widget];

          case 1:
            return [2, e.sent().communication.showPortis(this.config)];
        }
      });
    });
  }, e.prototype.logout = function () {
    return Rt(this, void 0, void 0, function () {
      return Ct(this, function (e) {
        switch (e.label) {
          case 0:
            return [4, this.widget];

          case 1:
            return [2, e.sent().communication.logout()];
        }
      });
    });
  }, e.prototype.onLogin = function (e) {
    this._onLoginCallback = e;
  }, e.prototype.onLogout = function (e) {
    this._onLogoutCallback = e;
  }, e.prototype.onActiveWalletChanged = function (e) {
    this._onActiveWalletChangedCallback = e;
  }, e.prototype.onError = function (e) {
    this._onErrorCallback = e;
  }, e.prototype.getExtendedPublicKey = function (e, t) {
    return void 0 === e && (e = "m/44'/60'/0'/0/0"), void 0 === t && (t = "Ethereum"), Rt(this, void 0, void 0, function () {
      return Ct(this, function (n) {
        switch (n.label) {
          case 0:
            return [4, this.widget];

          case 1:
            return [2, n.sent().communication.getExtendedPublicKey(e, t, this.config)];
        }
      });
    });
  }, e.prototype.importWallet = function (e) {
    return Rt(this, void 0, void 0, function () {
      return Ct(this, function (t) {
        switch (t.label) {
          case 0:
            return [4, this.widget];

          case 1:
            return [2, t.sent().communication.importWallet(e, this.config)];
        }
      });
    });
  }, e.prototype.isLoggedIn = function () {
    return Rt(this, void 0, void 0, function () {
      return Ct(this, function (e) {
        switch (e.label) {
          case 0:
            return [4, this.widget];

          case 1:
            return [2, e.sent().communication.isLoggedIn()];
        }
      });
    });
  }, e.prototype.signBitcoinTransaction = function (e) {
    return Rt(this, void 0, void 0, function () {
      return Ct(this, function (t) {
        switch (t.label) {
          case 0:
            return [4, this.widget];

          case 1:
            return [2, t.sent().communication.signBitcoinTransaction(e, this.config)];
        }
      });
    });
  }, e.prototype.showBitcoinWallet = function (e) {
    return void 0 === e && (e = "m/49'/0'/0'/0/0"), Rt(this, void 0, void 0, function () {
      return Ct(this, function (t) {
        switch (t.label) {
          case 0:
            return [4, this.widget];

          case 1:
            return [2, t.sent().communication.showBitcoinWallet(e, this.config)];
        }
      });
    });
  }, e.prototype._valiadateParams = function (e, t, n) {
    if (!e) throw new Error("[Portis] 'dappId' is required. Get your dappId here: https://dashboard.portis.io");
    if (!t) throw new Error("[Portis] 'network' is required. Read more about it here: https://docs.portis.io/#/configuration?id=network");

    if (n.scope) {
      if (!Array.isArray(n.scope)) throw new Error("[Portis] 'scope' must be an array. Read more about it here: https://docs.portis.io/#/configuration?id=scope");
      if (n.scope.filter(function (e) {
        return xt.indexOf(e) < 0;
      }).length > 0) throw new Error("[Portis] invalid 'scope' parameter. Read more about it here: https://docs.portis.io/#/configuration?id=scope");
    }

    if (void 0 !== n.registerPageByDefault && "boolean" != typeof n.registerPageByDefault) throw new Error("[Portis] invalid 'registerPageByDefault' parameter, must be a boolean. Read more about it here: https://docs.portis.io/#/configuration?id=registerPageByDefault");
  }, e.prototype._initWidget = function () {
    return Rt(this, void 0, void 0, function () {
      var e, t, n, r, o;
      return Ct(this, function (i) {
        switch (i.label) {
          case 0:
            return [4, Re()];

          case 1:
            return i.sent(), document.body.contains(Bt) && document.body.removeChild(Bt), (e = document.createElement("style")).innerHTML = "\n.por_portis-container {\n  position: fixed;\n  width: 0px;\n  height: 0px;\n  top: 0px;\n  right: 0px;\n  z-index: 2147483647;\n}\n\n@media (max-width: 576px) {\n  .por_portis-container {\n    bottom: 0;\n    top: auto;\n  }\n}\n\n.por_portis-widget-frame {\n  position: fixed;\n  width: 375px;\n  height: 0;\n  top: 20px;\n  right: 20px;\n  box-shadow: 0 5px 40px rgba(0,0,0,.16);\n  border-radius: 8px;\n  overflow: hidden;\n  z-index: 2147483000;\n}\n\n@media (max-width: 576px) {\n  .por_portis-widget-frame {\n    bottom: 0;\n    top: auto;\n    width: 100%;\n    right: 0;\n    left: 0;\n    border-bottom-left-radius: 0;\n    border-bottom-right-radius: 0;\n  }\n}\n", (t = document.createElement("div")).className = "por_portis-container", (n = document.createElement("div")).id = "portis-container-" + Date.now(), n.className = "por_portis-widget-frame", t.appendChild(n), document.body.appendChild(t), document.head.appendChild(e), (r = ue.connectToChild({
              url: this._widgetUrl,
              appendTo: document.getElementById(n.id),
              methods: {
                setHeight: this._setHeight.bind(this),
                getWindowSize: this._getWindowSize.bind(this),
                onLogin: this._onLogin.bind(this),
                onLogout: this._onLogout.bind(this),
                onActiveWalletChanged: this._onActiveWalletChanged.bind(this),
                onError: this._onError.bind(this)
              }
            })).iframe.style.position = "absolute", r.iframe.style.height = "100%", r.iframe.style.width = "100%", r.iframe.style.border = "0 transparent", [4, r.promise];

          case 2:
            return (o = i.sent()).retrieveSession(this.config), [2, {
              communication: o,
              iframe: r.iframe,
              widgetFrame: n
            }];
        }
      });
    });
  }, e.prototype._initProvider = function (e) {
    var t = this,
        n = new B(),
        r = new Te(n);

    if (n.send = function (e, r) {
      if ("string" == typeof e) return new Promise(function (t, o) {
        n.sendAsync({
          jsonrpc: "2.0",
          id: 42,
          method: e,
          params: r || []
        }, function (e, n) {
          e ? o(e) : t(n.result);
        });
      });

      if (!r) {
        var o = null;

        switch (e.method) {
          case "eth_accounts":
          case "eth_coinbase":
            o = t._selectedAddress ? [t._selectedAddress] : [];
            break;

          case "net_version":
            o = t._network;
            break;

          case "eth_uninstallFilter":
            n.sendAsync(e, function (e) {
              return e;
            }), o = !0;
            break;

          default:
            var i = "The Portis Web3 object does not support synchronous methods like " + e.method + " without a callback parameter.";
            throw new Error(i);
        }

        return {
          id: e.id,
          jsonrpc: e.jsonrpc,
          result: o
        };
      }

      n.sendAsync(e, r);
    }, n.addProvider(new W({
      web3_clientVersion: "Portis/v" + this.config.version + "/javascript",
      net_listening: !0,
      eth_hashrate: "0x00",
      eth_mining: !1,
      eth_syncing: !0
    })), n.addProvider(new H()), n.addProvider(new ae()), n.addProvider(new J()), n.addProvider(new ie()), n.addProvider({
      setEngine: function (e) {
        return e;
      },
      handleRequest: function (e, n, r) {
        return Rt(t, void 0, void 0, function () {
          return Ct(this, function (t) {
            return e.id || (e.id = 42), n(), [2];
          });
        });
      }
    }), n.addProvider(new X({
      getAccounts: function (e) {
        return Rt(t, void 0, void 0, function () {
          var t, n, r;
          return Ct(this, function (o) {
            switch (o.label) {
              case 0:
                return [4, this.widget];

              case 1:
                return [4, o.sent().communication.getAccounts(this.config)];

              case 2:
                return t = o.sent(), n = t.error, r = t.result, !n && r && (this._selectedAddress = r[0]), e(n, r), [2];
            }
          });
        });
      },
      signTransaction: function (e, n) {
        return Rt(t, void 0, void 0, function () {
          var t, r, o;
          return Ct(this, function (i) {
            switch (i.label) {
              case 0:
                return [4, this.widget];

              case 1:
                return [4, i.sent().communication.signTransaction(e, this.config)];

              case 2:
                return t = i.sent(), r = t.error, o = t.result, n(r, o), [2];
            }
          });
        });
      },
      signMessage: function (e, n) {
        return Rt(t, void 0, void 0, function () {
          var t, r, o, i, s;
          return Ct(this, function (a) {
            switch (a.label) {
              case 0:
                return [4, this.widget];

              case 1:
                return t = a.sent().communication, r = Object.assign({}, e, {
                  messageStandard: "signMessage"
                }), [4, t.signMessage(r, this.config)];

              case 2:
                return o = a.sent(), i = o.error, s = o.result, n(i, s), [2];
            }
          });
        });
      },
      signPersonalMessage: function (e, n) {
        return Rt(t, void 0, void 0, function () {
          var t, r, o, i, s;
          return Ct(this, function (a) {
            switch (a.label) {
              case 0:
                return [4, this.widget];

              case 1:
                return t = a.sent().communication, r = Object.assign({}, e, {
                  messageStandard: "signPersonalMessage"
                }), [4, t.signMessage(r, this.config)];

              case 2:
                return o = a.sent(), i = o.error, s = o.result, n(i, s), [2];
            }
          });
        });
      },
      signTypedMessage: function (e, n) {
        return Rt(t, void 0, void 0, function () {
          var t, r, o, i, s;
          return Ct(this, function (a) {
            switch (a.label) {
              case 0:
                return [4, this.widget];

              case 1:
                return t = a.sent().communication, r = Object.assign({}, e, {
                  messageStandard: "signTypedMessage"
                }), [4, t.signMessage(r, this.config)];

              case 2:
                return o = a.sent(), i = o.error, s = o.result, n(i, s), [2];
            }
          });
        });
      },
      signTypedMessageV3: function (e, n) {
        return Rt(t, void 0, void 0, function () {
          var t, r, o, i, s;
          return Ct(this, function (a) {
            switch (a.label) {
              case 0:
                return [4, this.widget];

              case 1:
                return t = a.sent().communication, r = Object.assign({}, e, {
                  messageStandard: "signTypedMessageV3"
                }), [4, t.signMessage(r, this.config)];

              case 2:
                return o = a.sent(), i = o.error, s = o.result, n(i, s), [2];
            }
          });
        });
      },
      estimateGas: function (e, n) {
        return Rt(t, void 0, void 0, function () {
          var t;
          return Ct(this, function (o) {
            switch (o.label) {
              case 0:
                return [4, ye(r, e)];

              case 1:
                return t = o.sent(), n(null, t), [2];
            }
          });
        });
      },
      getGasPrice: function (e) {
        return Rt(t, void 0, void 0, function () {
          return Ct(this, function (t) {
            return e(null, ""), [2];
          });
        });
      }
    })), e.pocketDevId) {
      var o = new Pt.Pocket({
        devID: e.pocketDevId,
        networkName: "ETH",
        netIDs: [this.config.network.chainId]
      });
      n.addProvider({
        setEngine: function (e) {
          return e;
        },
        handleRequest: function (e, r, i) {
          return Rt(t, void 0, void 0, function () {
            var t, r, s;
            return Ct(this, function (a) {
              switch (a.label) {
                case 0:
                  return [4, o.sendRelay(new Pt.Relay("ETH", this.config.network.chainId, JSON.stringify(e), o.configuration))];

                case 1:
                  if ((t = a.sent()) instanceof Error || !t) s = t || new Error("Unknown error"), r = null;else try {
                    r = JSON.parse(t).result, s = null;
                  } catch (e) {
                    r = null, s = e;
                  }
                  return "net_version" === e.method && (this._network = r, n.networkVersion = this._network), i(s, r), [2];
              }
            });
          });
        }
      });
    } else n.addProvider({
      setEngine: function (e) {
        return e;
      },
      handleRequest: function (e, r, o) {
        return Rt(t, void 0, void 0, function () {
          var t, r, i;
          return Ct(this, function (s) {
            switch (s.label) {
              case 0:
                return [4, this.widget];

              case 1:
                return [4, s.sent().communication.relay(e, this.config)];

              case 2:
                return t = s.sent(), r = t.error, i = t.result, "net_version" === e.method && (this._network = i, n.networkVersion = this._network), o(r, i), [2];
            }
          });
        });
      }
    });

    return n.enable = function () {
      return new Promise(function (e, t) {
        n.sendAsync({
          method: "eth_accounts"
        }, function (n, r) {
          n ? t(n) : e(r.result);
        });
      });
    }, n.isConnected = function () {
      return !0;
    }, n.isPortis = !0, n.on("error", function (e) {
      e && e.message && e.message.includes("PollingBlockTracker") ? console.warn("If you see this warning constantly, there might be an error with your RPC node.") : console.error(e);
    }), n.start(), n;
  }, e.prototype._setHeight = function (e) {
    return Rt(this, void 0, void 0, function () {
      return Ct(this, function (t) {
        switch (t.label) {
          case 0:
            return [4, this.widget];

          case 1:
            return t.sent().widgetFrame.style.height = e + "px", [2];
        }
      });
    });
  }, e.prototype._getWindowSize = function () {
    var e = document.getElementsByTagName("body")[0];
    return {
      width: window.innerWidth || document.documentElement.clientWidth || e.clientWidth,
      height: window.innerHeight || document.documentElement.clientHeight || e.clientHeight
    };
  }, e.prototype._onLogin = function (e, t, n) {
    this._onLoginCallback && this._onLoginCallback(e, t, n);
  }, e.prototype._onLogout = function () {
    this._selectedAddress = "", this._onLogoutCallback && this._onLogoutCallback();
  }, e.prototype._onActiveWalletChanged = function (e) {
    this._onActiveWalletChangedCallback && this._onActiveWalletChangedCallback(e);
  }, e.prototype._onError = function (e) {
    this._onErrorCallback && this._onErrorCallback(e);
  }, e.prototype.clearSubprovider = function (e) {
    var t = this.provider._providers.find(function (t) {
      return t instanceof e;
    });

    this.provider.removeProvider(t), this.provider.addProvider(new e());
  }, e;
}();

var _default = St;
exports.default = _default;
},{"./index-2d8aeb45.js":"../node_modules/use-wallet/dist/index-2d8aeb45.js","react":"../node_modules/react/index.js","@aragon/provided-connector":"../node_modules/@aragon/provided-connector/dist/index.js","events":"../node_modules/events/events.js","buffer":"../node_modules/buffer/index.js","./_crypto_commonjs-external-8b32930c.js":"../node_modules/use-wallet/dist/_crypto_commonjs-external-8b32930c.js","./subscriptionManager-b429be9d.js":"../node_modules/use-wallet/dist/subscriptionManager-b429be9d.js","stream":"../node_modules/stream-browserify/index.js","string_decoder":"../node_modules/string_decoder/lib/string_decoder.js","crypto":"../node_modules/crypto-browserify/index.js","assert":"../node_modules/assert/assert.js","util":"../node_modules/util/util.js","./index-bc4c198a.js":"../node_modules/use-wallet/dist/index-bc4c198a.js","./index-acf3c274.js":"../node_modules/use-wallet/dist/index-acf3c274.js","ethereumjs-util":"../node_modules/ethereumjs-util/dist/index.js","process":"../node_modules/process/browser.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
//# sourceMappingURL=/index-5f854499.5c033df5.js.map