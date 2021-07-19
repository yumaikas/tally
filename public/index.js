(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __markAsModule = (target) => __defProp(target, "__esModule", {value: true});
  var __commonJS = (cb, mod) => () => (mod || cb((mod = {exports: {}}).exports, mod), mod.exports);
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, {get: all[name], enumerable: true});
  };
  var __exportStar = (target, module, desc) => {
    if (module && typeof module === "object" || typeof module === "function") {
      for (let key of __getOwnPropNames(module))
        if (!__hasOwnProp.call(target, key) && key !== "default")
          __defProp(target, key, {get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable});
    }
    return target;
  };
  var __toModule = (module) => {
    return __exportStar(__markAsModule(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", module && module.__esModule && "default" in module ? {get: () => module.default, enumerable: true} : {value: module, enumerable: true})), module);
  };

  // node_modules/preact/dist/preact.module.js
  var require_preact_module = __commonJS((exports) => {
    __markAsModule(exports);
    __export(exports, {
      Component: () => _,
      Fragment: () => d,
      cloneElement: () => B2,
      createContext: () => D2,
      createElement: () => v2,
      createRef: () => p2,
      h: () => v2,
      hydrate: () => q,
      isValidElement: () => i2,
      options: () => l2,
      render: () => S,
      toChildArray: () => A2
    });
    var n2;
    var l2;
    var u2;
    var i2;
    var t2;
    var o2;
    var r2;
    var f2;
    var e2 = {};
    var c2 = [];
    var s = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
    function a2(n3, l3) {
      for (var u3 in l3)
        n3[u3] = l3[u3];
      return n3;
    }
    function h5(n3) {
      var l3 = n3.parentNode;
      l3 && l3.removeChild(n3);
    }
    function v2(l3, u3, i3) {
      var t3, o3, r3, f3 = {};
      for (r3 in u3)
        r3 == "key" ? t3 = u3[r3] : r3 == "ref" ? o3 = u3[r3] : f3[r3] = u3[r3];
      if (arguments.length > 2 && (f3.children = arguments.length > 3 ? n2.call(arguments, 2) : i3), typeof l3 == "function" && l3.defaultProps != null)
        for (r3 in l3.defaultProps)
          f3[r3] === void 0 && (f3[r3] = l3.defaultProps[r3]);
      return y3(l3, f3, t3, o3, null);
    }
    function y3(n3, i3, t3, o3, r3) {
      var f3 = {type: n3, props: i3, key: t3, ref: o3, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: r3 == null ? ++u2 : r3};
      return l2.vnode != null && l2.vnode(f3), f3;
    }
    function p2() {
      return {current: null};
    }
    function d(n3) {
      return n3.children;
    }
    function _(n3, l3) {
      this.props = n3, this.context = l3;
    }
    function k2(n3, l3) {
      if (l3 == null)
        return n3.__ ? k2(n3.__, n3.__.__k.indexOf(n3) + 1) : null;
      for (var u3; l3 < n3.__k.length; l3++)
        if ((u3 = n3.__k[l3]) != null && u3.__e != null)
          return u3.__e;
      return typeof n3.type == "function" ? k2(n3) : null;
    }
    function b2(n3) {
      var l3, u3;
      if ((n3 = n3.__) != null && n3.__c != null) {
        for (n3.__e = n3.__c.base = null, l3 = 0; l3 < n3.__k.length; l3++)
          if ((u3 = n3.__k[l3]) != null && u3.__e != null) {
            n3.__e = n3.__c.base = u3.__e;
            break;
          }
        return b2(n3);
      }
    }
    function m3(n3) {
      (!n3.__d && (n3.__d = true) && t2.push(n3) && !g2.__r++ || r2 !== l2.debounceRendering) && ((r2 = l2.debounceRendering) || o2)(g2);
    }
    function g2() {
      for (var n3; g2.__r = t2.length; )
        n3 = t2.sort(function(n4, l3) {
          return n4.__v.__b - l3.__v.__b;
        }), t2 = [], n3.some(function(n4) {
          var l3, u3, i3, t3, o3, r3;
          n4.__d && (o3 = (t3 = (l3 = n4).__v).__e, (r3 = l3.__P) && (u3 = [], (i3 = a2({}, t3)).__v = t3.__v + 1, j2(r3, t3, i3, l3.__n, r3.ownerSVGElement !== void 0, t3.__h != null ? [o3] : null, u3, o3 == null ? k2(t3) : o3, t3.__h), z2(u3, t3), t3.__e != o3 && b2(t3)));
        });
    }
    function w2(n3, l3, u3, i3, t3, o3, r3, f3, s2, a3) {
      var h6, v3, p3, _2, b3, m4, g3, w3 = i3 && i3.__k || c2, A3 = w3.length;
      for (u3.__k = [], h6 = 0; h6 < l3.length; h6++)
        if ((_2 = u3.__k[h6] = (_2 = l3[h6]) == null || typeof _2 == "boolean" ? null : typeof _2 == "string" || typeof _2 == "number" || typeof _2 == "bigint" ? y3(null, _2, null, null, _2) : Array.isArray(_2) ? y3(d, {children: _2}, null, null, null) : _2.__b > 0 ? y3(_2.type, _2.props, _2.key, null, _2.__v) : _2) != null) {
          if (_2.__ = u3, _2.__b = u3.__b + 1, (p3 = w3[h6]) === null || p3 && _2.key == p3.key && _2.type === p3.type)
            w3[h6] = void 0;
          else
            for (v3 = 0; v3 < A3; v3++) {
              if ((p3 = w3[v3]) && _2.key == p3.key && _2.type === p3.type) {
                w3[v3] = void 0;
                break;
              }
              p3 = null;
            }
          j2(n3, _2, p3 = p3 || e2, t3, o3, r3, f3, s2, a3), b3 = _2.__e, (v3 = _2.ref) && p3.ref != v3 && (g3 || (g3 = []), p3.ref && g3.push(p3.ref, null, _2), g3.push(v3, _2.__c || b3, _2)), b3 != null ? (m4 == null && (m4 = b3), typeof _2.type == "function" && _2.__k != null && _2.__k === p3.__k ? _2.__d = s2 = x3(_2, s2, n3) : s2 = P(n3, _2, p3, w3, b3, s2), a3 || u3.type !== "option" ? typeof u3.type == "function" && (u3.__d = s2) : n3.value = "") : s2 && p3.__e == s2 && s2.parentNode != n3 && (s2 = k2(p3));
        }
      for (u3.__e = m4, h6 = A3; h6--; )
        w3[h6] != null && (typeof u3.type == "function" && w3[h6].__e != null && w3[h6].__e == u3.__d && (u3.__d = k2(i3, h6 + 1)), N(w3[h6], w3[h6]));
      if (g3)
        for (h6 = 0; h6 < g3.length; h6++)
          M(g3[h6], g3[++h6], g3[++h6]);
    }
    function x3(n3, l3, u3) {
      var i3, t3;
      for (i3 = 0; i3 < n3.__k.length; i3++)
        (t3 = n3.__k[i3]) && (t3.__ = n3, l3 = typeof t3.type == "function" ? x3(t3, l3, u3) : P(u3, t3, t3, n3.__k, t3.__e, l3));
      return l3;
    }
    function A2(n3, l3) {
      return l3 = l3 || [], n3 == null || typeof n3 == "boolean" || (Array.isArray(n3) ? n3.some(function(n4) {
        A2(n4, l3);
      }) : l3.push(n3)), l3;
    }
    function P(n3, l3, u3, i3, t3, o3) {
      var r3, f3, e3;
      if (l3.__d !== void 0)
        r3 = l3.__d, l3.__d = void 0;
      else if (u3 == null || t3 != o3 || t3.parentNode == null)
        n:
          if (o3 == null || o3.parentNode !== n3)
            n3.appendChild(t3), r3 = null;
          else {
            for (f3 = o3, e3 = 0; (f3 = f3.nextSibling) && e3 < i3.length; e3 += 2)
              if (f3 == t3)
                break n;
            n3.insertBefore(t3, o3), r3 = o3;
          }
      return r3 !== void 0 ? r3 : t3.nextSibling;
    }
    function C(n3, l3, u3, i3, t3) {
      var o3;
      for (o3 in u3)
        o3 === "children" || o3 === "key" || o3 in l3 || H(n3, o3, null, u3[o3], i3);
      for (o3 in l3)
        t3 && typeof l3[o3] != "function" || o3 === "children" || o3 === "key" || o3 === "value" || o3 === "checked" || u3[o3] === l3[o3] || H(n3, o3, l3[o3], u3[o3], i3);
    }
    function $(n3, l3, u3) {
      l3[0] === "-" ? n3.setProperty(l3, u3) : n3[l3] = u3 == null ? "" : typeof u3 != "number" || s.test(l3) ? u3 : u3 + "px";
    }
    function H(n3, l3, u3, i3, t3) {
      var o3;
      n:
        if (l3 === "style")
          if (typeof u3 == "string")
            n3.style.cssText = u3;
          else {
            if (typeof i3 == "string" && (n3.style.cssText = i3 = ""), i3)
              for (l3 in i3)
                u3 && l3 in u3 || $(n3.style, l3, "");
            if (u3)
              for (l3 in u3)
                i3 && u3[l3] === i3[l3] || $(n3.style, l3, u3[l3]);
          }
        else if (l3[0] === "o" && l3[1] === "n")
          o3 = l3 !== (l3 = l3.replace(/Capture$/, "")), l3 = l3.toLowerCase() in n3 ? l3.toLowerCase().slice(2) : l3.slice(2), n3.l || (n3.l = {}), n3.l[l3 + o3] = u3, u3 ? i3 || n3.addEventListener(l3, o3 ? T : I, o3) : n3.removeEventListener(l3, o3 ? T : I, o3);
        else if (l3 !== "dangerouslySetInnerHTML") {
          if (t3)
            l3 = l3.replace(/xlink[H:h]/, "h").replace(/sName$/, "s");
          else if (l3 !== "href" && l3 !== "list" && l3 !== "form" && l3 !== "tabIndex" && l3 !== "download" && l3 in n3)
            try {
              n3[l3] = u3 == null ? "" : u3;
              break n;
            } catch (n4) {
            }
          typeof u3 == "function" || (u3 != null && (u3 !== false || l3[0] === "a" && l3[1] === "r") ? n3.setAttribute(l3, u3) : n3.removeAttribute(l3));
        }
    }
    function I(n3) {
      this.l[n3.type + false](l2.event ? l2.event(n3) : n3);
    }
    function T(n3) {
      this.l[n3.type + true](l2.event ? l2.event(n3) : n3);
    }
    function j2(n3, u3, i3, t3, o3, r3, f3, e3, c3) {
      var s2, h6, v3, y4, p3, k3, b3, m4, g3, x4, A3, P2 = u3.type;
      if (u3.constructor !== void 0)
        return null;
      i3.__h != null && (c3 = i3.__h, e3 = u3.__e = i3.__e, u3.__h = null, r3 = [e3]), (s2 = l2.__b) && s2(u3);
      try {
        n:
          if (typeof P2 == "function") {
            if (m4 = u3.props, g3 = (s2 = P2.contextType) && t3[s2.__c], x4 = s2 ? g3 ? g3.props.value : s2.__ : t3, i3.__c ? b3 = (h6 = u3.__c = i3.__c).__ = h6.__E : ("prototype" in P2 && P2.prototype.render ? u3.__c = h6 = new P2(m4, x4) : (u3.__c = h6 = new _(m4, x4), h6.constructor = P2, h6.render = O), g3 && g3.sub(h6), h6.props = m4, h6.state || (h6.state = {}), h6.context = x4, h6.__n = t3, v3 = h6.__d = true, h6.__h = []), h6.__s == null && (h6.__s = h6.state), P2.getDerivedStateFromProps != null && (h6.__s == h6.state && (h6.__s = a2({}, h6.__s)), a2(h6.__s, P2.getDerivedStateFromProps(m4, h6.__s))), y4 = h6.props, p3 = h6.state, v3)
              P2.getDerivedStateFromProps == null && h6.componentWillMount != null && h6.componentWillMount(), h6.componentDidMount != null && h6.__h.push(h6.componentDidMount);
            else {
              if (P2.getDerivedStateFromProps == null && m4 !== y4 && h6.componentWillReceiveProps != null && h6.componentWillReceiveProps(m4, x4), !h6.__e && h6.shouldComponentUpdate != null && h6.shouldComponentUpdate(m4, h6.__s, x4) === false || u3.__v === i3.__v) {
                h6.props = m4, h6.state = h6.__s, u3.__v !== i3.__v && (h6.__d = false), h6.__v = u3, u3.__e = i3.__e, u3.__k = i3.__k, u3.__k.forEach(function(n4) {
                  n4 && (n4.__ = u3);
                }), h6.__h.length && f3.push(h6);
                break n;
              }
              h6.componentWillUpdate != null && h6.componentWillUpdate(m4, h6.__s, x4), h6.componentDidUpdate != null && h6.__h.push(function() {
                h6.componentDidUpdate(y4, p3, k3);
              });
            }
            h6.context = x4, h6.props = m4, h6.state = h6.__s, (s2 = l2.__r) && s2(u3), h6.__d = false, h6.__v = u3, h6.__P = n3, s2 = h6.render(h6.props, h6.state, h6.context), h6.state = h6.__s, h6.getChildContext != null && (t3 = a2(a2({}, t3), h6.getChildContext())), v3 || h6.getSnapshotBeforeUpdate == null || (k3 = h6.getSnapshotBeforeUpdate(y4, p3)), A3 = s2 != null && s2.type === d && s2.key == null ? s2.props.children : s2, w2(n3, Array.isArray(A3) ? A3 : [A3], u3, i3, t3, o3, r3, f3, e3, c3), h6.base = u3.__e, u3.__h = null, h6.__h.length && f3.push(h6), b3 && (h6.__E = h6.__ = null), h6.__e = false;
          } else
            r3 == null && u3.__v === i3.__v ? (u3.__k = i3.__k, u3.__e = i3.__e) : u3.__e = L(i3.__e, u3, i3, t3, o3, r3, f3, c3);
        (s2 = l2.diffed) && s2(u3);
      } catch (n4) {
        u3.__v = null, (c3 || r3 != null) && (u3.__e = e3, u3.__h = !!c3, r3[r3.indexOf(e3)] = null), l2.__e(n4, u3, i3);
      }
    }
    function z2(n3, u3) {
      l2.__c && l2.__c(u3, n3), n3.some(function(u4) {
        try {
          n3 = u4.__h, u4.__h = [], n3.some(function(n4) {
            n4.call(u4);
          });
        } catch (n4) {
          l2.__e(n4, u4.__v);
        }
      });
    }
    function L(l3, u3, i3, t3, o3, r3, f3, c3) {
      var s2, a3, v3, y4 = i3.props, p3 = u3.props, d2 = u3.type, _2 = 0;
      if (d2 === "svg" && (o3 = true), r3 != null) {
        for (; _2 < r3.length; _2++)
          if ((s2 = r3[_2]) && (s2 === l3 || (d2 ? s2.localName == d2 : s2.nodeType == 3))) {
            l3 = s2, r3[_2] = null;
            break;
          }
      }
      if (l3 == null) {
        if (d2 === null)
          return document.createTextNode(p3);
        l3 = o3 ? document.createElementNS("http://www.w3.org/2000/svg", d2) : document.createElement(d2, p3.is && p3), r3 = null, c3 = false;
      }
      if (d2 === null)
        y4 === p3 || c3 && l3.data === p3 || (l3.data = p3);
      else {
        if (r3 = r3 && n2.call(l3.childNodes), a3 = (y4 = i3.props || e2).dangerouslySetInnerHTML, v3 = p3.dangerouslySetInnerHTML, !c3) {
          if (r3 != null)
            for (y4 = {}, _2 = 0; _2 < l3.attributes.length; _2++)
              y4[l3.attributes[_2].name] = l3.attributes[_2].value;
          (v3 || a3) && (v3 && (a3 && v3.__html == a3.__html || v3.__html === l3.innerHTML) || (l3.innerHTML = v3 && v3.__html || ""));
        }
        if (C(l3, p3, y4, o3, c3), v3)
          u3.__k = [];
        else if (_2 = u3.props.children, w2(l3, Array.isArray(_2) ? _2 : [_2], u3, i3, t3, o3 && d2 !== "foreignObject", r3, f3, r3 ? r3[0] : i3.__k && k2(i3, 0), c3), r3 != null)
          for (_2 = r3.length; _2--; )
            r3[_2] != null && h5(r3[_2]);
        c3 || ("value" in p3 && (_2 = p3.value) !== void 0 && (_2 !== l3.value || d2 === "progress" && !_2) && H(l3, "value", _2, y4.value, false), "checked" in p3 && (_2 = p3.checked) !== void 0 && _2 !== l3.checked && H(l3, "checked", _2, y4.checked, false));
      }
      return l3;
    }
    function M(n3, u3, i3) {
      try {
        typeof n3 == "function" ? n3(u3) : n3.current = u3;
      } catch (n4) {
        l2.__e(n4, i3);
      }
    }
    function N(n3, u3, i3) {
      var t3, o3;
      if (l2.unmount && l2.unmount(n3), (t3 = n3.ref) && (t3.current && t3.current !== n3.__e || M(t3, null, u3)), (t3 = n3.__c) != null) {
        if (t3.componentWillUnmount)
          try {
            t3.componentWillUnmount();
          } catch (n4) {
            l2.__e(n4, u3);
          }
        t3.base = t3.__P = null;
      }
      if (t3 = n3.__k)
        for (o3 = 0; o3 < t3.length; o3++)
          t3[o3] && N(t3[o3], u3, typeof n3.type != "function");
      i3 || n3.__e == null || h5(n3.__e), n3.__e = n3.__d = void 0;
    }
    function O(n3, l3, u3) {
      return this.constructor(n3, u3);
    }
    function S(u3, i3, t3) {
      var o3, r3, f3;
      l2.__ && l2.__(u3, i3), r3 = (o3 = typeof t3 == "function") ? null : t3 && t3.__k || i3.__k, f3 = [], j2(i3, u3 = (!o3 && t3 || i3).__k = v2(d, null, [u3]), r3 || e2, e2, i3.ownerSVGElement !== void 0, !o3 && t3 ? [t3] : r3 ? null : i3.firstChild ? n2.call(i3.childNodes) : null, f3, !o3 && t3 ? t3 : r3 ? r3.__e : i3.firstChild, o3), z2(f3, u3);
    }
    function q(n3, l3) {
      S(n3, l3, q);
    }
    function B2(l3, u3, i3) {
      var t3, o3, r3, f3 = a2({}, l3.props);
      for (r3 in u3)
        r3 == "key" ? t3 = u3[r3] : r3 == "ref" ? o3 = u3[r3] : f3[r3] = u3[r3];
      return arguments.length > 2 && (f3.children = arguments.length > 3 ? n2.call(arguments, 2) : i3), y3(l3.type, f3, t3 || l3.key, o3 || l3.ref, null);
    }
    function D2(n3, l3) {
      var u3 = {__c: l3 = "__cC" + f2++, __: n3, Consumer: function(n4, l4) {
        return n4.children(l4);
      }, Provider: function(n4) {
        var u4, i3;
        return this.getChildContext || (u4 = [], (i3 = {})[l3] = this, this.getChildContext = function() {
          return i3;
        }, this.shouldComponentUpdate = function(n5) {
          this.props.value !== n5.value && u4.some(m3);
        }, this.sub = function(n5) {
          u4.push(n5);
          var l4 = n5.componentWillUnmount;
          n5.componentWillUnmount = function() {
            u4.splice(u4.indexOf(n5), 1), l4 && l4.call(n5);
          };
        }), n4.children;
      }};
      return u3.Provider.__ = u3.Consumer.contextType = u3;
    }
    n2 = c2.slice, l2 = {__e: function(n3, l3) {
      for (var u3, i3, t3; l3 = l3.__; )
        if ((u3 = l3.__c) && !u3.__)
          try {
            if ((i3 = u3.constructor) && i3.getDerivedStateFromError != null && (u3.setState(i3.getDerivedStateFromError(n3)), t3 = u3.__d), u3.componentDidCatch != null && (u3.componentDidCatch(n3), t3 = u3.__d), t3)
              return u3.__E = u3;
          } catch (l4) {
            n3 = l4;
          }
      throw n3;
    }}, u2 = 0, i2 = function(n3) {
      return n3 != null && n3.constructor === void 0;
    }, _.prototype.setState = function(n3, l3) {
      var u3;
      u3 = this.__s != null && this.__s !== this.state ? this.__s : this.__s = a2({}, this.state), typeof n3 == "function" && (n3 = n3(a2({}, u3), this.props)), n3 && a2(u3, n3), n3 != null && this.__v && (l3 && this.__h.push(l3), m3(this));
    }, _.prototype.forceUpdate = function(n3) {
      this.__v && (this.__e = true, n3 && this.__h.push(n3), m3(this));
    }, _.prototype.render = d, t2 = [], o2 = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, g2.__r = 0, f2 = 0;
  });

  // node_modules/preact-router/dist/preact-router.js
  var require_preact_router = __commonJS((exports, module) => {
    !function(t2, e2) {
      typeof exports == "object" && typeof module != "undefined" ? module.exports = e2(require_preact_module()) : typeof define == "function" && define.amd ? define(["preact"], e2) : t2.preactRouter = e2(t2.preact);
    }(exports, function(t2) {
      function e2(t3, e3) {
        for (var n3 in e3)
          t3[n3] = e3[n3];
        return t3;
      }
      function n2(t3, e3, n3) {
        var r3, o3 = /(?:\?([^#]*))?(#.*)?$/, u3 = t3.match(o3), a3 = {};
        if (u3 && u3[1])
          for (var p3 = u3[1].split("&"), c3 = 0; c3 < p3.length; c3++) {
            var f3 = p3[c3].split("=");
            a3[decodeURIComponent(f3[0])] = decodeURIComponent(f3.slice(1).join("="));
          }
        t3 = i2(t3.replace(o3, "")), e3 = i2(e3 || "");
        for (var l3 = Math.max(t3.length, e3.length), s2 = 0; s2 < l3; s2++)
          if (e3[s2] && e3[s2].charAt(0) === ":") {
            var h6 = e3[s2].replace(/(^:|[+*?]+$)/g, ""), d2 = (e3[s2].match(/[+*?]+$/) || C)[0] || "", g3 = ~d2.indexOf("+"), y4 = ~d2.indexOf("*"), m4 = t3[s2] || "";
            if (!m4 && !y4 && (d2.indexOf("?") < 0 || g3)) {
              r3 = false;
              break;
            }
            if (a3[h6] = decodeURIComponent(m4), g3 || y4) {
              a3[h6] = t3.slice(s2).map(decodeURIComponent).join("/");
              break;
            }
          } else if (e3[s2] !== t3[s2]) {
            r3 = false;
            break;
          }
        return (n3.default === true || r3 !== false) && a3;
      }
      function r2(t3, e3) {
        return t3.rank < e3.rank ? 1 : t3.rank > e3.rank ? -1 : t3.index - e3.index;
      }
      function o2(t3, e3) {
        return t3.index = e3, t3.rank = p2(t3), t3.props;
      }
      function i2(t3) {
        return t3.replace(/(^\/+|\/+$)/g, "").split("/");
      }
      function u2(t3) {
        return t3.charAt(0) == ":" ? 1 + "*+?".indexOf(t3.charAt(t3.length - 1)) || 4 : 5;
      }
      function a2(t3) {
        return i2(t3).map(u2).join("");
      }
      function p2(t3) {
        return t3.props.default ? 0 : a2(t3.props.path);
      }
      function c2(t3, e3) {
        e3 === void 0 && (e3 = "push"), b2 && b2[e3] ? b2[e3](t3) : typeof history != "undefined" && history[e3 + "State"] && history[e3 + "State"](null, null, t3);
      }
      function f2() {
        var t3;
        return t3 = b2 && b2.location ? b2.location : b2 && b2.getCurrentLocation ? b2.getCurrentLocation() : typeof location != "undefined" ? location : x3, "" + (t3.pathname || "") + (t3.search || "");
      }
      function l2(t3, e3) {
        return e3 === void 0 && (e3 = false), typeof t3 != "string" && t3.url && (e3 = t3.replace, t3 = t3.url), s(t3) && c2(t3, e3 ? "replace" : "push"), h5(t3);
      }
      function s(t3) {
        for (var e3 = U.length; e3--; )
          if (U[e3].canRoute(t3))
            return true;
        return false;
      }
      function h5(t3) {
        for (var e3 = false, n3 = 0; n3 < U.length; n3++)
          U[n3].routeTo(t3) === true && (e3 = true);
        for (var r3 = k2.length; r3--; )
          k2[r3](t3);
        return e3;
      }
      function d(t3) {
        if (t3 && t3.getAttribute) {
          var e3 = t3.getAttribute("href"), n3 = t3.getAttribute("target");
          if (e3 && e3.match(/^\//g) && (!n3 || n3.match(/^_?self$/i)))
            return l2(e3);
        }
      }
      function g2(t3) {
        if (!(t3.ctrlKey || t3.metaKey || t3.altKey || t3.shiftKey || t3.button !== 0))
          return d(t3.currentTarget || t3.target || this), y3(t3);
      }
      function y3(t3) {
        return t3 && (t3.stopImmediatePropagation && t3.stopImmediatePropagation(), t3.stopPropagation && t3.stopPropagation(), t3.preventDefault()), false;
      }
      function m3(t3) {
        if (!(t3.ctrlKey || t3.metaKey || t3.altKey || t3.shiftKey || t3.button !== 0)) {
          var e3 = t3.target;
          do {
            if ((e3.nodeName + "").toUpperCase() === "A" && e3.getAttribute("href")) {
              if (e3.hasAttribute("native"))
                return;
              if (d(e3))
                return y3(t3);
            }
          } while (e3 = e3.parentNode);
        }
      }
      function v2() {
        A2 || (typeof addEventListener == "function" && (b2 || addEventListener("popstate", function() {
          h5(f2());
        }), addEventListener("click", m3)), A2 = true);
      }
      var C = {}, b2 = null, U = [], k2 = [], x3 = {}, A2 = false, R = function(i3) {
        function u3(t3) {
          i3.call(this, t3), t3.history && (b2 = t3.history), this.state = {url: t3.url || f2()}, v2();
        }
        return i3 && (u3.__proto__ = i3), u3.prototype = Object.create(i3 && i3.prototype), u3.prototype.constructor = u3, u3.prototype.shouldComponentUpdate = function(t3) {
          return t3.static !== true || (t3.url !== this.props.url || t3.onChange !== this.props.onChange);
        }, u3.prototype.canRoute = function(e3) {
          return this.getMatchingChildren(t2.toChildArray(this.props.children), e3, false).length > 0;
        }, u3.prototype.routeTo = function(t3) {
          this.setState({url: t3});
          var e3 = this.canRoute(t3);
          return this.updating || this.forceUpdate(), e3;
        }, u3.prototype.componentWillMount = function() {
          U.push(this), this.updating = true;
        }, u3.prototype.componentDidMount = function() {
          var t3 = this;
          b2 && (this.unlisten = b2.listen(function(e3) {
            t3.routeTo("" + (e3.pathname || "") + (e3.search || ""));
          })), this.updating = false;
        }, u3.prototype.componentWillUnmount = function() {
          typeof this.unlisten == "function" && this.unlisten(), U.splice(U.indexOf(this), 1);
        }, u3.prototype.componentWillUpdate = function() {
          this.updating = true;
        }, u3.prototype.componentDidUpdate = function() {
          this.updating = false;
        }, u3.prototype.getMatchingChildren = function(i4, u4, a3) {
          return i4.filter(o2).sort(r2).map(function(r3) {
            var o3 = n2(u4, r3.props.path, r3.props);
            if (o3) {
              if (a3 !== false) {
                var i5 = {url: u4, matches: o3};
                return e2(i5, o3), delete i5.ref, delete i5.key, t2.cloneElement(r3, i5);
              }
              return r3;
            }
          }).filter(Boolean);
        }, u3.prototype.render = function(e3, n3) {
          var r3 = e3.children, o3 = e3.onChange, i4 = n3.url, u4 = this.getMatchingChildren(t2.toChildArray(r3), i4, true), a3 = u4[0] || null, p3 = this.previousUrl;
          return i4 !== p3 && (this.previousUrl = i4, typeof o3 == "function" && o3({router: this, url: i4, previous: p3, active: u4, current: a3})), a3;
        }, u3;
      }(t2.Component), K = function(n3) {
        return t2.createElement("a", e2({onClick: g2}, n3));
      }, E2 = function(e3) {
        return t2.createElement(e3.component, e3);
      };
      return R.subscribers = k2, R.getCurrentUrl = f2, R.route = l2, R.Router = R, R.Route = E2, R.Link = K, R.exec = n2, R;
    });
  });

  // node_modules/preact-router/match.js
  var require_match = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Link = exports.Match = void 0;
    var _extends2 = Object.assign || function(target) {
      for (var i2 = 1; i2 < arguments.length; i2++) {
        var source = arguments[i2];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    var _preact = require_preact_module();
    var _preactRouter = require_preact_router();
    function _objectWithoutProperties(obj, keys) {
      var target = {};
      for (var i2 in obj) {
        if (keys.indexOf(i2) >= 0)
          continue;
        if (!Object.prototype.hasOwnProperty.call(obj, i2))
          continue;
        target[i2] = obj[i2];
      }
      return target;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, {constructor: {value: subClass, enumerable: false, writable: true, configurable: true}});
      if (superClass)
        Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    var Match = exports.Match = function(_Component) {
      _inherits(Match2, _Component);
      function Match2() {
        var _temp, _this, _ret;
        _classCallCheck(this, Match2);
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.update = function(url) {
          _this.nextUrl = url;
          _this.setState({});
        }, _temp), _possibleConstructorReturn(_this, _ret);
      }
      Match2.prototype.componentDidMount = function componentDidMount() {
        _preactRouter.subscribers.push(this.update);
      };
      Match2.prototype.componentWillUnmount = function componentWillUnmount() {
        _preactRouter.subscribers.splice(_preactRouter.subscribers.indexOf(this.update) >>> 0, 1);
      };
      Match2.prototype.render = function render4(props) {
        var url = this.nextUrl || (0, _preactRouter.getCurrentUrl)(), path = url.replace(/\?.+$/, "");
        this.nextUrl = null;
        return props.children({
          url,
          path,
          matches: (0, _preactRouter.exec)(path, props.path, {}) !== false
        });
      };
      return Match2;
    }(_preact.Component);
    var Link4 = function Link5(_ref) {
      var activeClassName = _ref.activeClassName, path = _ref.path, props = _objectWithoutProperties(_ref, ["activeClassName", "path"]);
      return (0, _preact.h)(Match, {path: path || props.href}, function(_ref2) {
        var matches = _ref2.matches;
        return (0, _preact.h)(_preactRouter.Link, _extends2({}, props, {class: [props.class || props.className, matches && activeClassName].filter(Boolean).join(" ")}));
      });
    };
    exports.Link = Link4;
    exports.default = Match;
    Match.Link = Link4;
  });

  // index.jsx
  var import_preact5 = require_preact_module();

  // components/app.jsx
  var import_preact4 = require_preact_module();
  var import_preact_router = __toModule(require_preact_router());
  var import_match3 = __toModule(require_match());

  // node_modules/@babel/runtime/helpers/esm/extends.js
  function _extends() {
    _extends = Object.assign || function(target) {
      for (var i2 = 1; i2 < arguments.length; i2++) {
        var source = arguments[i2];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    return _extends.apply(this, arguments);
  }

  // node_modules/history/index.js
  var m;
  var x = m || (m = {});
  x.Pop = "POP";
  x.Push = "PUSH";
  x.Replace = "REPLACE";
  var y = true ? function(a2) {
    return Object.freeze(a2);
  } : function(a2) {
    return a2;
  };
  function z(a2, b2) {
    if (!a2) {
      typeof console !== "undefined" && console.warn(b2);
      try {
        throw Error(b2);
      } catch (g2) {
      }
    }
  }
  function A(a2) {
    a2.preventDefault();
    a2.returnValue = "";
  }
  function B() {
    var a2 = [];
    return {get length() {
      return a2.length;
    }, push: function(b2) {
      a2.push(b2);
      return function() {
        a2 = a2.filter(function(a3) {
          return a3 !== b2;
        });
      };
    }, call: function(b2) {
      a2.forEach(function(a3) {
        return a3 && a3(b2);
      });
    }};
  }
  function D() {
    return Math.random().toString(36).substr(2, 8);
  }
  function E(a2) {
    var b2 = a2.pathname, g2 = a2.search;
    a2 = a2.hash;
    return (b2 === void 0 ? "/" : b2) + (g2 === void 0 ? "" : g2) + (a2 === void 0 ? "" : a2);
  }
  function F(a2) {
    var b2 = {};
    if (a2) {
      var g2 = a2.indexOf("#");
      0 <= g2 && (b2.hash = a2.substr(g2), a2 = a2.substr(0, g2));
      g2 = a2.indexOf("?");
      0 <= g2 && (b2.search = a2.substr(g2), a2 = a2.substr(0, g2));
      a2 && (b2.pathname = a2);
    }
    return b2;
  }
  function createHashHistory(a2) {
    function b2() {
      var a3 = F(f2.location.hash.substr(1)), c3 = a3.pathname, b3 = a3.search;
      a3 = a3.hash;
      var e3 = p2.state || {};
      return [e3.idx, y({pathname: c3 === void 0 ? "/" : c3, search: b3 === void 0 ? "" : b3, hash: a3 === void 0 ? "" : a3, state: e3.usr || null, key: e3.key || "default"})];
    }
    function g2() {
      if (n2)
        k2.call(n2), n2 = null;
      else {
        var a3 = m.Pop, c3 = b2(), e3 = c3[0];
        c3 = c3[1];
        if (k2.length)
          if (e3 != null) {
            var f3 = l2 - e3;
            f3 && (n2 = {action: a3, location: c3, retry: function() {
              h5(-1 * f3);
            }}, h5(f3));
          } else
            true ? z(false, "You are trying to block a POP navigation to a location that was not created by the history library. The block will fail silently in production, but in general you should do all navigation with the history library (instead of using window.history.pushState directly) to avoid this situation.") : void 0;
        else
          w2(a3);
      }
    }
    function t2(a3) {
      var d = document.querySelector("base"), c3 = "";
      d && d.getAttribute("href") && (d = f2.location.href, c3 = d.indexOf("#"), c3 = c3 === -1 ? d : d.slice(0, c3));
      return c3 + "#" + (typeof a3 === "string" ? a3 : E(a3));
    }
    function v2(a3, b3) {
      b3 === void 0 && (b3 = null);
      return y(_extends({}, c2, {}, typeof a3 === "string" ? F(a3) : a3, {state: b3, key: D()}));
    }
    function w2(a3) {
      q = a3;
      a3 = b2();
      l2 = a3[0];
      c2 = a3[1];
      e2.call({action: q, location: c2});
    }
    function u2(a3, c3) {
      function d() {
        u2(a3, c3);
      }
      var b3 = m.Push, e3 = v2(a3, c3);
      true ? z(e3.pathname.charAt(0) === "/", "Relative pathnames are not supported in hash history.push(" + JSON.stringify(a3) + ")") : void 0;
      if (!k2.length || (k2.call({action: b3, location: e3, retry: d}), false)) {
        var g3 = [{usr: e3.state, key: e3.key, idx: l2 + 1}, t2(e3)];
        e3 = g3[0];
        g3 = g3[1];
        try {
          p2.pushState(e3, "", g3);
        } catch (H) {
          f2.location.assign(g3);
        }
        w2(b3);
      }
    }
    function r2(a3, c3) {
      function d() {
        r2(a3, c3);
      }
      var e3 = m.Replace, b3 = v2(a3, c3);
      true ? z(b3.pathname.charAt(0) === "/", "Relative pathnames are not supported in hash history.replace(" + JSON.stringify(a3) + ")") : void 0;
      k2.length && (k2.call({
        action: e3,
        location: b3,
        retry: d
      }), 1) || (b3 = [{usr: b3.state, key: b3.key, idx: l2}, t2(b3)], p2.replaceState(b3[0], "", b3[1]), w2(e3));
    }
    function h5(a3) {
      p2.go(a3);
    }
    a2 === void 0 && (a2 = {});
    a2 = a2.window;
    var f2 = a2 === void 0 ? document.defaultView : a2, p2 = f2.history, n2 = null;
    f2.addEventListener("popstate", g2);
    f2.addEventListener("hashchange", function() {
      var a3 = b2()[1];
      E(a3) !== E(c2) && g2();
    });
    var q = m.Pop;
    a2 = b2();
    var l2 = a2[0], c2 = a2[1], e2 = B(), k2 = B();
    l2 == null && (l2 = 0, p2.replaceState(_extends({}, p2.state, {idx: l2}), ""));
    return {
      get action() {
        return q;
      },
      get location() {
        return c2;
      },
      createHref: t2,
      push: u2,
      replace: r2,
      go: h5,
      back: function() {
        h5(-1);
      },
      forward: function() {
        h5(1);
      },
      listen: function(a3) {
        return e2.push(a3);
      },
      block: function(a3) {
        var c3 = k2.push(a3);
        k2.length === 1 && f2.addEventListener("beforeunload", A);
        return function() {
          c3();
          k2.length || f2.removeEventListener("beforeunload", A);
        };
      }
    };
  }

  // components/medications.jsx
  var import_preact2 = require_preact_module();

  // node_modules/preact/hooks/dist/hooks.module.js
  var import_preact = require_preact_module();
  var t;
  var u;
  var r;
  var o = 0;
  var i = [];
  var c = import_preact.options.__b;
  var f = import_preact.options.__r;
  var e = import_preact.options.diffed;
  var a = import_preact.options.__c;
  var v = import_preact.options.unmount;
  function m2(t2, r2) {
    import_preact.options.__h && import_preact.options.__h(u, t2, o || r2), o = 0;
    var i2 = u.__H || (u.__H = {__: [], __h: []});
    return t2 >= i2.__.length && i2.__.push({}), i2.__[t2];
  }
  function l(n2) {
    return o = 1, p(w, n2);
  }
  function p(n2, r2, o2) {
    var i2 = m2(t++, 2);
    return i2.t = n2, i2.__c || (i2.__ = [o2 ? o2(r2) : w(void 0, r2), function(n3) {
      var t2 = i2.t(i2.__[0], n3);
      i2.__[0] !== t2 && (i2.__ = [t2, i2.__[1]], i2.__c.setState({}));
    }], i2.__c = u), i2.__;
  }
  function y2(r2, o2) {
    var i2 = m2(t++, 3);
    !import_preact.options.__s && k(i2.__H, o2) && (i2.__ = r2, i2.__H = o2, u.__H.__h.push(i2));
  }
  function x2() {
    i.forEach(function(t2) {
      if (t2.__P)
        try {
          t2.__H.__h.forEach(g), t2.__H.__h.forEach(j), t2.__H.__h = [];
        } catch (u2) {
          t2.__H.__h = [], import_preact.options.__e(u2, t2.__v);
        }
    }), i = [];
  }
  import_preact.options.__b = function(n2) {
    u = null, c && c(n2);
  }, import_preact.options.__r = function(n2) {
    f && f(n2), t = 0;
    var r2 = (u = n2.__c).__H;
    r2 && (r2.__h.forEach(g), r2.__h.forEach(j), r2.__h = []);
  }, import_preact.options.diffed = function(t2) {
    e && e(t2);
    var o2 = t2.__c;
    o2 && o2.__H && o2.__H.__h.length && (i.push(o2) !== 1 && r === import_preact.options.requestAnimationFrame || ((r = import_preact.options.requestAnimationFrame) || function(n2) {
      var t3, u2 = function() {
        clearTimeout(r2), b && cancelAnimationFrame(t3), setTimeout(n2);
      }, r2 = setTimeout(u2, 100);
      b && (t3 = requestAnimationFrame(u2));
    })(x2)), u = void 0;
  }, import_preact.options.__c = function(t2, u2) {
    u2.some(function(t3) {
      try {
        t3.__h.forEach(g), t3.__h = t3.__h.filter(function(n2) {
          return !n2.__ || j(n2);
        });
      } catch (r2) {
        u2.some(function(n2) {
          n2.__h && (n2.__h = []);
        }), u2 = [], import_preact.options.__e(r2, t3.__v);
      }
    }), a && a(t2, u2);
  }, import_preact.options.unmount = function(t2) {
    v && v(t2);
    var u2 = t2.__c;
    if (u2 && u2.__H)
      try {
        u2.__H.__.forEach(g);
      } catch (t3) {
        import_preact.options.__e(t3, u2.__v);
      }
  };
  var b = typeof requestAnimationFrame == "function";
  function g(n2) {
    var t2 = u;
    typeof n2.__c == "function" && n2.__c(), u = t2;
  }
  function j(n2) {
    var t2 = u;
    n2.__c = n2.__(), u = t2;
  }
  function k(n2, t2) {
    return !n2 || n2.length !== t2.length || t2.some(function(t3, u2) {
      return t3 !== n2[u2];
    });
  }
  function w(n2, t2) {
    return typeof t2 == "function" ? t2(n2) : t2;
  }

  // components/medications.jsx
  var import_match = __toModule(require_match());
  function MedicationTable(props) {
  }
  function MedicationDisplay(props) {
    let [meds, setMeds] = l(null);
    y2(() => {
      fetch("/api/v1/medications").then((resp) => resp.json()).then((data) => console.log(data));
    }, []);
    return /* @__PURE__ */ (0, import_preact2.h)("div", null, /* @__PURE__ */ (0, import_preact2.h)("h2", null, "Medications"), /* @__PURE__ */ (0, import_preact2.h)(import_match.Link, {
      href: "/"
    }, "(home)"), meds ? /* @__PURE__ */ (0, import_preact2.h)(MedicationTable, {
      medications: meds
    }) : null);
  }

  // components/conditions.jsx
  var import_preact3 = require_preact_module();
  var import_match2 = __toModule(require_match());
  function ConditionsDisplay(props) {
    return /* @__PURE__ */ (0, import_preact3.h)("div", null, /* @__PURE__ */ (0, import_preact3.h)("h2", null, "Conditions"), /* @__PURE__ */ (0, import_preact3.h)(import_match2.Link, {
      href: "/"
    }, "(home)"));
  }

  // components/app.jsx
  function Home(props) {
    return /* @__PURE__ */ (0, import_preact4.h)("div", null, /* @__PURE__ */ (0, import_preact4.h)("h2", null, "MediTally"), /* @__PURE__ */ (0, import_preact4.h)("h3", null, /* @__PURE__ */ (0, import_preact4.h)(import_match3.Link, {
      href: "/meds"
    }, "Medications")), /* @__PURE__ */ (0, import_preact4.h)("h3", null, /* @__PURE__ */ (0, import_preact4.h)(import_match3.Link, {
      href: "/conditions"
    }, "Conditions")));
  }
  function TallyApp(props) {
    return /* @__PURE__ */ (0, import_preact4.h)(import_preact_router.Router, {
      history: createHashHistory()
    }, /* @__PURE__ */ (0, import_preact4.h)(Home, {
      path: "/"
    }), /* @__PURE__ */ (0, import_preact4.h)(MedicationDisplay, {
      path: "/meds"
    }), /* @__PURE__ */ (0, import_preact4.h)(ConditionsDisplay, {
      path: "/conditions"
    }));
  }

  // index.jsx
  var App = /* @__PURE__ */ (0, import_preact5.h)(TallyApp, {
    name: "Test"
  });
  var el = document.querySelector("#app");
  el.innerHTML = "";
  (0, import_preact5.render)(App, document.querySelector("#app"));
})();
