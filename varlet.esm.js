import { reactive as Ze, onMounted as st, nextTick as He, onActivated as Oo, isRef as Jm, watch as fe, onBeforeUnmount as Ar, onDeactivated as ut, onUnmounted as Ht, inject as Qm, getCurrentInstance as Uo, computed as I, ref as $, unref as ad, provide as xm, isVNode as _m, Comment as eh, Fragment as Ue, createApp as nh, h as id, onBeforeMount as oh, defineComponent as _, createVNode as X, Teleport as xn, Transition as Je, withDirectives as Me, vShow as Kn, mergeProps as Ye, openBlock as b, createBlock as Oe, resolveDynamicComponent as ct, normalizeClass as p, normalizeStyle as K, createElementBlock as P, resolveComponent as te, resolveDirective as Re, createCommentVNode as G, createElementVNode as M, toDisplayString as ae, withCtx as pe, renderSlot as V, renderList as nn, onUpdated as Yt, createTextVNode as De, pushScopeId as Ho, popScopeId as Yo, withModifiers as In, normalizeProps as yo, guardReactiveProps as jt, vModelText as th, createSlots as zt, withKeys as Es, TransitionGroup as rh } from "vue";
const ld = {
  locks: {},
  zIndex: 2e3,
  enableRipple: !0
}, S8 = Ze(ld);
var Bn = Ze(ld), ah = Object.defineProperty, ih = Object.defineProperties, lh = Object.getOwnPropertyDescriptors, Ds = Object.getOwnPropertySymbols, sh = Object.prototype.hasOwnProperty, uh = Object.prototype.propertyIsEnumerable, Bs = (e, n, o) => n in e ? ah(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, ch = (e, n) => {
  for (var o in n || (n = {}))
    sh.call(n, o) && Bs(e, o, n[o]);
  if (Ds)
    for (var o of Ds(n))
      uh.call(n, o) && Bs(e, o, n[o]);
  return e;
}, dh = (e, n) => ih(e, lh(n)), bn = (e) => typeof e == "string", Jl = (e) => typeof e == "boolean", Pn = (e) => typeof e == "number", sd = (e) => Pn(e) || bn(e) && /^[-+]?\d+$/.test(e), _o = (e) => Object.prototype.toString.call(e) === "[object Object]", fh = (e) => typeof e == "object" && e !== null, dt = (e) => typeof e == "function", Ge = (e) => Array.isArray(e), ph = (e) => e ? /^(http)|(\.*\/)/.test(e) : !1, Gn = (e) => e == null || e === "" || Array.isArray(e) && !e.length, ud = (e) => e === window, vh = () => _n() && "ontouchstart" in window, _n = () => typeof window < "u", gr = () => _n() && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent), { hasOwnProperty: mh } = Object.prototype, cd = (e, n) => mh.call(e, n), Is = (e) => [...new Set(e)], No = (e) => Ge(e) ? e : [e], et = (e, n) => {
  if (e.length) {
    const o = e.indexOf(n);
    if (o > -1)
      return e.splice(o, 1);
  }
}, hh = (e) => e.filter((n) => n != null), gh = (e, n, o = "start") => {
  let t = o === "start" ? 0 : e.length - 1;
  for (; e.length > 0 && t >= 0 && t <= e.length - 1; ) {
    if (n(e[t], t, e))
      return [e[t], t];
    o === "start" ? t++ : t--;
  }
  return [null, -1];
}, bh = (...e) => e.map((n) => {
  if (Ge(n)) {
    const [o, t, r = null] = n;
    return o ? t : r;
  }
  return n;
}), dd = () => typeof globalThis < "u" ? globalThis : _n() ? window : typeof global < "u" ? global : self, Ot = (e) => {
  const n = dd();
  return n.requestAnimationFrame ? n.requestAnimationFrame(e) : n.setTimeout(e);
}, Ms = (e) => {
  const n = dd();
  n.cancelAnimationFrame ? n.cancelAnimationFrame(e) : n.clearTimeout(e);
}, fr = () => new Promise((e) => {
  Ot(e);
}), wn = () => new Promise((e) => {
  Ot(() => {
    Ot(e);
  });
}), jo = (e) => window.getComputedStyle(e), un = (e) => {
  if (ud(e)) {
    const n = e.innerWidth, o = e.innerHeight, t = {
      x: 0,
      y: 0,
      top: 0,
      left: 0,
      right: n,
      bottom: o,
      width: n,
      height: o
    };
    return dh(ch({}, t), {
      toJSON: () => t
    });
  }
  return e.getBoundingClientRect();
}, yh = (e) => {
  const { top: n, bottom: o, left: t, right: r } = un(e), { width: a, height: i } = un(window), l = t <= a && r >= 0, s = n <= i && o >= 0;
  return l && s;
}, kh = (e) => new Promise((n) => {
  const o = new FileReader();
  o.onload = () => {
    n(o.result);
  }, o.readAsDataURL(e);
}), Ae = (e) => {
  e.cancelable !== !1 && e.preventDefault();
}, Vo = (e) => {
  const n = "scrollTop" in e ? e.scrollTop : e.scrollY;
  return Math.max(n, 0);
}, Ql = (e) => {
  const n = "scrollLeft" in e ? e.scrollLeft : e.scrollX;
  return Math.max(n, 0);
}, xl = (e, n = 200) => {
  let o, t = 0;
  return function r(...a) {
    const i = Date.now(), l = i - t;
    t || (t = i), o && window.clearTimeout(o), l >= n ? (e.apply(this, a), t = i) : o = window.setTimeout(() => {
      r.apply(this, a);
    }, n - l);
  };
};
function w(e, ...n) {
  if (Ge(e))
    return e.map((o) => o(...n));
  if (e)
    return e(...n);
}
var F = (e) => e == null ? 0 : bn(e) ? (e = parseFloat(e), e = Number.isNaN(e) ? 0 : e, e) : Jl(e) ? Number(e) : e, wo = (e, n, o) => Math.min(o, Math.max(n, e)), $h = (e, n) => wo(e, 0, n.length - 1), wh = (e) => _l(e).replace(e.charAt(0), e.charAt(0).toUpperCase()), _l = (e) => e.replace(/-(\w)/g, (n, o) => o.toUpperCase()), fd = (e) => e.replace(/([A-Z])/g, " $1").trim().split(" ").join("-").toLowerCase();
function Ch(e) {
  return (n) => {
    const o = `${e}-${n}`, t = (r) => r ? r[0] === "$" ? r.replace("$", e) : r.startsWith("--") ? `${o}${r}` : `${o}__${r}` : o;
    return {
      name: wh(o),
      n: t,
      classes: bh
    };
  };
}
var Sh = Object.defineProperty, br = Object.getOwnPropertySymbols, pd = Object.prototype.hasOwnProperty, vd = Object.prototype.propertyIsEnumerable, Ns = (e, n, o) => n in e ? Sh(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, Ph = (e, n) => {
  for (var o in n || (n = {}))
    pd.call(n, o) && Ns(e, o, n[o]);
  if (br)
    for (var o of br(n))
      vd.call(n, o) && Ns(e, o, n[o]);
  return e;
}, zh = (e, n) => {
  var o = {};
  for (var t in e)
    pd.call(e, t) && n.indexOf(t) < 0 && (o[t] = e[t]);
  if (e != null && br)
    for (var t of br(e))
      n.indexOf(t) < 0 && vd.call(e, t) && (o[t] = e[t]);
  return o;
};
function cn(e) {
  let n = !1;
  st(() => {
    e(), He(() => {
      n = !0;
    });
  }), Oo(() => {
    n && e();
  });
}
function je(e, n, o, t = {}) {
  if (!_n())
    return;
  const { passive: r = !1, capture: a = !1 } = t;
  let i = !1, l = !1;
  const s = (v) => dt(v) ? v() : ad(v), u = (v) => {
    if (i || l)
      return;
    const g = s(v);
    g && (g.addEventListener(n, o, {
      passive: r,
      capture: a
    }), i = !0);
  }, c = (v) => {
    if (!i || l)
      return;
    const g = s(v);
    g && (g.removeEventListener(n, o, {
      capture: a
    }), i = !1);
  };
  let d;
  Jm(e) && (d = fe(
    () => e.value,
    (v, g) => {
      c(g), u(v);
    }
  ));
  const f = () => {
    d == null || d(), c(e), l = !0;
  };
  return cn(() => {
    u(e);
  }), Ar(() => {
    c(e);
  }), ut(() => {
    c(e);
  }), f;
}
function md(e, n, o) {
  if (!_n())
    return;
  je(document, n, (r) => {
    const a = dt(e) ? e() : ad(e);
    a && !a.contains(r.target) && o(r);
  });
}
function Wt(e) {
  let n = !1;
  ut(() => {
    n = !0, e();
  }), Ht(() => {
    n || e();
  });
}
function Oh(e) {
  const n = Uo();
  return e in n.provides;
}
function vn(e) {
  if (!Oh(e))
    return {
      index: null,
      parentProvider: null,
      bindParent: null
    };
  const o = Qm(e), { childInstances: t, collect: r, clear: a } = o, i = zh(o, ["childInstances", "collect", "clear"]), l = Uo();
  return {
    index: I(() => t.indexOf(l)),
    parentProvider: i,
    bindParent: (c) => {
      st(() => {
        He().then(() => {
          r(l, c);
        });
      }), Ar(() => {
        He().then(() => {
          a(l, c);
        });
      });
    }
  };
}
function Th(e) {
  const n = [], o = (t) => {
    if (t != null && t.component) {
      o(t == null ? void 0 : t.component.subTree);
      return;
    }
    Array.isArray(t == null ? void 0 : t.children) && t.children.forEach((r) => {
      _m(r) && (n.push(r), o(r));
    });
  };
  return o(e), n;
}
function mn(e) {
  const n = Uo(), o = Ze([]), t = [], r = I(() => o.length), a = () => {
    const u = Th(n.subTree);
    o.sort((c, d) => u.indexOf(c.vnode) - u.indexOf(d.vnode));
  }, i = (u, c) => {
    o.push(u), t.push(c), a();
  }, l = (u, c) => {
    et(o, u), et(t, c);
  };
  return {
    length: r,
    childProviders: t,
    bindChildren: (u) => {
      xm(e, Ph({
        childInstances: o,
        collect: i,
        clear: l
      }, u));
    }
  };
}
function To(e) {
  je(() => window, "resize", e, { passive: !0 }), je(() => window, "orientationchange", e, { passive: !0 });
}
function Eh(e, n) {
  const o = $(!1);
  return fe(
    e,
    (t) => {
      n === t && (o.value = !0);
    },
    { immediate: !0 }
  ), o;
}
function Dh(e, n) {
  if (e > n)
    return "horizontal";
  if (n > e)
    return "vertical";
}
function ft() {
  const e = $(0), n = $(0), o = $(0), t = $(0), r = $(0), a = $(0), i = $(0), l = $(0), s = $(0), u = $(0), c = $(), d = $(!1), f = $(!1), v = $(0), g = $(0);
  let m = null;
  const k = () => {
    e.value = 0, n.value = 0, o.value = 0, t.value = 0, r.value = 0, a.value = 0, i.value = 0, l.value = 0, s.value = 0, u.value = 0, c.value = void 0, d.value = !1, f.value = !1, v.value = 0, g.value = 0;
  };
  return {
    startX: e,
    startY: n,
    deltaX: o,
    deltaY: t,
    offsetX: r,
    offsetY: a,
    prevX: i,
    prevY: l,
    moveX: s,
    moveY: u,
    direction: c,
    touching: d,
    dragging: f,
    startTime: v,
    distance: g,
    resetTouch: k,
    startTouch: (O) => {
      k();
      const { clientX: z, clientY: E } = O.touches[0];
      e.value = z, n.value = E, i.value = z, l.value = E, d.value = !0, v.value = performance.now(), f.value = !1, m && window.cancelAnimationFrame(m);
    },
    moveTouch: (O) => {
      const { clientX: z, clientY: E } = O.touches[0];
      f.value = !0, o.value = z - e.value, t.value = E - n.value, r.value = Math.abs(o.value), a.value = Math.abs(t.value), g.value = Math.sqrt(r.value ** 2 + a.value ** 2), s.value = z - i.value, u.value = E - l.value, c.value || (c.value = Dh(r.value, a.value)), i.value = z, l.value = E;
    },
    endTouch: () => {
      d.value = !1, m = window.requestAnimationFrame(() => {
        f.value = !1;
      });
    },
    isReachTop: (O) => Vo(O) === 0 && t.value > 0,
    isReachBottom: (O, z = 1) => {
      const { scrollHeight: E, clientHeight: D, scrollTop: R } = O, N = Math.abs(E - R - D);
      return t.value < 0 && N <= z;
    }
  };
}
function hd() {
  const e = $(), n = Uo(), o = fd(n.type.name);
  return e.value = `${o}-${n.uid}`, e;
}
function Bh(e = {}) {
  const { initialWidth: n = 0, initialHeight: o = 0 } = e, t = $(n), r = $(o), a = () => {
    _n() && (t.value = window.innerWidth, r.value = window.innerHeight);
  };
  return cn(a), To(a), {
    width: t,
    height: r
  };
}
function qn(e, n, o = {}) {
  const { passive: t = !0, eventName: r, defaultValue: a, emit: i } = o, l = r ?? `onUpdate:${n.toString()}`, s = () => {
    var d;
    return (d = e[n]) != null ? d : a;
  };
  if (!t)
    return I({
      get() {
        return s();
      },
      set(d) {
        i ? i(l, d) : w(e[l], d);
      }
    });
  const u = $(s());
  let c = !0;
  return fe(
    () => e[n],
    () => {
      c = !1, u.value = s(), He(() => {
        c = !0;
      });
    }
  ), fe(
    () => u.value,
    (d) => {
      c && (i ? i(l, d) : w(e[l], d));
    }
  ), u;
}
var Ih = Object.defineProperty, Mh = Object.defineProperties, Nh = Object.getOwnPropertyDescriptors, As = Object.getOwnPropertySymbols, Ah = Object.prototype.hasOwnProperty, Vh = Object.prototype.propertyIsEnumerable, Vs = (e, n, o) => n in e ? Ih(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, zi = (e, n) => {
  for (var o in n || (n = {}))
    Ah.call(n, o) && Vs(e, o, n[o]);
  if (As)
    for (var o of As(n))
      Vh.call(n, o) && Vs(e, o, n[o]);
  return e;
}, Lh = (e, n) => Mh(e, Nh(n)), Ls = (e, n, o) => new Promise((t, r) => {
  var a = (s) => {
    try {
      l(o.next(s));
    } catch (u) {
      r(u);
    }
  }, i = (s) => {
    try {
      l(o.throw(s));
    } catch (u) {
      r(u);
    }
  }, l = (s) => s.done ? t(s.value) : Promise.resolve(s.value).then(a, i);
  l((o = o.apply(e, n)).next());
});
function Be(e, n) {
  return Array.isArray(n) ? n.reduce((o, t) => (o[t] = e[t], o), {}) : e[n];
}
function re(e, n) {
  const o = n ?? e;
  return o.install = function(t) {
    const { name: r } = e;
    r && t.component(r, e);
  }, o;
}
function se(e, n) {
  e.setPropsDefaults = function(o) {
    Object.entries(o).forEach(([t, r]) => {
      const a = n[t];
      if (a != null) {
        if (_o(a)) {
          n[t] = Lh(zi({}, a), {
            default: r
          });
          return;
        }
        n[t] = {
          type: a,
          default: r
        };
      }
    });
  };
}
function Rh(e) {
  const n = nh(e), o = document.createElement("div");
  return document.body.appendChild(o), {
    instance: n.mount(o),
    unmount() {
      n.unmount(), document.body.removeChild(o);
    }
  };
}
function pt(e, n = {}, o = {}) {
  const t = {
    setup() {
      return () => id(e, zi(zi({}, n), o));
    }
  }, { unmount: r } = Rh(t);
  return { unmountInstance: r };
}
function gd(e) {
  const n = [];
  return e.forEach((o) => {
    if (o.type !== eh) {
      if (o.type === Ue && Ge(o.children)) {
        o.children.forEach((t) => {
          n.push(t);
        });
        return;
      }
      n.push(o);
    }
  }), n;
}
function Fn() {
  const e = $(""), n = (r, a, i) => Ls(this, null, function* () {
    return !Ge(r) || !r.length ? !0 : !(yield Promise.all(r.map((s) => s(a, i)))).some((s) => s !== !0 ? (e.value = String(s), !0) : !1);
  });
  return {
    errorMessage: e,
    validate: n,
    resetValidation: () => {
      e.value = "";
    },
    validateWithTrigger: (r, a, i, l, s) => Ls(this, null, function* () {
      r.includes(a) && (yield n(i, l, s)) && (e.value = "");
    })
  };
}
function Fh(e) {
  je(() => window, "hashchange", e), je(() => window, "popstate", e);
}
function Wo() {
  const e = $(!1);
  return Oo(() => {
    e.value = !1;
  }), ut(() => {
    e.value = !0;
  }), {
    disabled: e
  };
}
const ee = Ch("var");
function A(e) {
  return {
    type: [Function, Array],
    default: e
  };
}
function yn(e, n) {
  return e === !1 ? null : (e === !0 && n && (e = n), `var-elevation--${e}`);
}
var Uh = Object.defineProperty, Hh = Object.defineProperties, Yh = Object.getOwnPropertyDescriptors, Rs = Object.getOwnPropertySymbols, jh = Object.prototype.hasOwnProperty, Wh = Object.prototype.propertyIsEnumerable, Fs = (e, n, o) => n in e ? Uh(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, bd = (e, n) => {
  for (var o in n || (n = {}))
    jh.call(n, o) && Fs(e, o, n[o]);
  if (Rs)
    for (var o of Rs(n))
      Wh.call(n, o) && Fs(e, o, n[o]);
  return e;
}, Kh = (e, n) => Hh(e, Yh(n));
const { n: yd } = ee("ripple"), Us = 250;
function qh(e) {
  const { zIndex: n, position: o } = jo(e);
  e.style.overflow = "hidden", e.style.overflowX = "hidden", e.style.overflowY = "hidden", o === "static" && (e.style.position = "relative"), n === "auto" && (e.style.zIndex = "1");
}
function Hs(e) {
  return "touches" in e;
}
function Xh(e, n) {
  const { top: o, left: t } = un(e), { clientWidth: r, clientHeight: a } = e, i = Math.sqrt(r ** 2 + a ** 2) / 2, l = i * 2, s = Hs(n) ? n.touches[0].clientX - t : r / 2, u = Hs(n) ? n.touches[0].clientY - o : a / 2, c = (r - i * 2) / 2, d = (a - i * 2) / 2, f = s - i, v = u - i;
  return { x: f, y: v, centerX: c, centerY: d, size: l };
}
function es(e) {
  const n = this._ripple;
  if (n.removeRipple(), n.disabled || n.tasker || !Bn.enableRipple)
    return;
  const o = () => {
    n.tasker = null;
    const { x: t, y: r, centerX: a, centerY: i, size: l } = Xh(this, e), s = document.createElement("div");
    s.classList.add(yd()), s.style.opacity = "0", s.style.transform = `translate(${t}px, ${r}px) scale3d(.3, .3, .3)`, s.style.width = `${l}px`, s.style.height = `${l}px`, n.color && (s.style.backgroundColor = n.color), s.dataset.createdAt = String(performance.now()), qh(this), this.appendChild(s), window.setTimeout(() => {
      s.style.transform = `translate(${a}px, ${i}px) scale3d(1, 1, 1)`, s.style.opacity = ".25";
    }, 20);
  };
  n.tasker = window.setTimeout(o, 30);
}
function yr() {
  const e = this._ripple, n = () => {
    const o = this.querySelectorAll(`.${yd()}`);
    if (!o.length)
      return;
    const t = o[o.length - 1], r = Us - performance.now() + Number(t.dataset.createdAt);
    window.setTimeout(() => {
      t.style.opacity = "0", window.setTimeout(() => {
        var a;
        return (a = t.parentNode) == null ? void 0 : a.removeChild(t);
      }, Us);
    }, r);
  };
  e.tasker ? window.setTimeout(n, 30) : n();
}
function kd() {
  if (!vh() || !Bn.enableRipple)
    return;
  const e = this._ripple;
  e.tasker && window.clearTimeout(e.tasker), e.tasker = null;
}
let kr = !1;
function Gh(e) {
  kr || !(e.key === " " || e.key === "Enter") || (es.call(this, e), kr = !0);
}
function Ys() {
  kr && (yr.call(this), kr = !1);
}
function Zh(e, n) {
  var o;
  e._ripple = Kh(bd({
    tasker: null
  }, (o = n.value) != null ? o : {}), {
    removeRipple: yr.bind(e)
  }), e.addEventListener("touchstart", es, { passive: !0 }), e.addEventListener("touchmove", kd, { passive: !0 }), e.addEventListener("dragstart", yr, { passive: !0 }), e.addEventListener("keydown", Gh), e.addEventListener("keyup", Ys), e.addEventListener("blur", Ys), document.addEventListener("touchend", e._ripple.removeRipple, { passive: !0 }), document.addEventListener("touchcancel", e._ripple.removeRipple, { passive: !0 }), document.addEventListener("dragend", e._ripple.removeRipple, { passive: !0 });
}
function Jh(e) {
  e.removeEventListener("touchstart", es), e.removeEventListener("touchmove", kd), e.removeEventListener("dragstart", yr), !(!e._ripple || !e._ripple.removeRipple) && (document.removeEventListener("touchend", e._ripple.removeRipple), document.removeEventListener("touchcancel", e._ripple.removeRipple), document.removeEventListener("dragend", e._ripple.removeRipple));
}
function Qh(e, n) {
  var o, t, r, a, i, l;
  const s = {
    color: (o = n.value) == null ? void 0 : o.color,
    disabled: (t = n.value) == null ? void 0 : t.disabled
  };
  (s.color !== ((r = e._ripple) == null ? void 0 : r.color) || s.disabled !== ((a = e._ripple) == null ? void 0 : a.disabled)) && (e._ripple = bd({
    tasker: s.disabled ? null : (i = e._ripple) == null ? void 0 : i.tasker,
    removeRipple: (l = e._ripple) == null ? void 0 : l.removeRipple
  }, s));
}
const $d = {
  mounted: Zh,
  unmounted: Jh,
  updated: Qh,
  install(e) {
    e.directive("ripple", this);
  }
}, P8 = $d;
var on = $d;
const vt = {
  show: Boolean,
  position: {
    type: String,
    default: "center"
  },
  transition: String,
  overlay: {
    type: Boolean,
    default: !0
  },
  overlayClass: String,
  overlayStyle: Object,
  lockScroll: {
    type: Boolean,
    default: !0
  },
  closeOnClickOverlay: {
    type: Boolean,
    default: !0
  },
  closeOnKeyEscape: {
    type: Boolean,
    default: !0
  },
  defaultStyle: {
    type: Boolean,
    default: !0
  },
  safeArea: Boolean,
  safeAreaTop: Boolean,
  teleport: {
    type: [String, Object, Boolean],
    default: "body"
  },
  onOpen: A(),
  onOpened: A(),
  onClose: A(),
  onClosed: A(),
  onKeyEscape: A(),
  onClickOverlay: A(),
  "onUpdate:show": A(),
  // internal for Dialog
  onRouteChange: A()
};
function wd() {
  Object.keys(Bn.locks).length <= 0 ? document.body.classList.remove("var--lock") : document.body.classList.add("var--lock");
}
function xt(e) {
  Bn.locks[e] = 1, wd();
}
function _t(e) {
  delete Bn.locks[e], wd();
}
function Kt(e, n) {
  const { uid: o } = Uo();
  n && fe(n, (t) => {
    t === !1 ? _t(o) : t === !0 && e() === !0 && xt(o);
  }), fe(e, (t) => {
    n && n() === !1 || (t === !0 ? xt(o) : _t(o));
  }), oh(() => {
    n && n() === !1 || e() === !0 && xt(o);
  }), Ht(() => {
    n && n() === !1 || e() === !0 && _t(o);
  }), Oo(() => {
    n && n() === !1 || e() === !0 && xt(o);
  }), ut(() => {
    n && n() === !1 || e() === !0 && _t(o);
  });
}
function qt(e, n) {
  const o = $(Bn.zIndex);
  return fe(
    e,
    (t) => {
      t && (Bn.zIndex += n, o.value = Bn.zIndex);
    },
    { immediate: !0 }
  ), { zIndex: o };
}
const lo = [];
function ns(e, n) {
  const { uid: o } = Uo();
  fe(e, (i) => {
    i && !a(o) ? r() : setTimeout(() => {
      et(lo, a(o));
    });
  }), cn(() => {
    e() && r();
  }), Wt(() => {
    et(lo, a(o));
  });
  function t() {
    return lo.length === 0 ? !0 : (lo.sort((i, l) => i.zIndex.value - l.zIndex.value), lo[lo.length - 1].uid === o);
  }
  function r() {
    a(o) || lo.push({ uid: o, zIndex: n });
  }
  function a(i) {
    return lo.find((l) => l.uid === i);
  }
  return {
    onStackTop: t
  };
}
const Cd = Symbol("POPUP_BIND_POPUP_ITEM_KEY");
function xh() {
  const { bindParent: e, parentProvider: n, index: o } = vn(Cd);
  return {
    index: o,
    popup: n,
    bindPopup: e
  };
}
function _h() {
  const { bindChildren: e, childProviders: n, length: o } = mn(Cd);
  return {
    length: o,
    popupItems: n,
    bindPopupItems: e
  };
}
var eg = Object.defineProperty, js = Object.getOwnPropertySymbols, ng = Object.prototype.hasOwnProperty, og = Object.prototype.propertyIsEnumerable, Ws = (e, n, o) => n in e ? eg(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, tg = (e, n) => {
  for (var o in n || (n = {}))
    ng.call(n, o) && Ws(e, o, n[o]);
  if (js)
    for (var o of js(n))
      og.call(n, o) && Ws(e, o, n[o]);
  return e;
};
const {
  name: rg,
  n: An,
  classes: mi
} = ee("popup");
var Vr = _({
  name: rg,
  inheritAttrs: !1,
  props: vt,
  setup(e, {
    slots: n,
    attrs: o
  }) {
    const t = Eh(() => e.show, !0), {
      zIndex: r
    } = qt(() => e.show, 3), {
      onStackTop: a
    } = ns(() => e.show, r), {
      disabled: i
    } = Wo(), {
      bindPopupItems: l
    } = _h();
    Kt(() => e.show, () => e.lockScroll), fe(() => e.show, (v) => {
      w(v ? e.onOpen : e.onClose);
    }), l({
      show: I(() => e.show)
    }), je(() => window, "keydown", f), Fh(() => w(e.onRouteChange));
    function s() {
      const {
        closeOnClickOverlay: v,
        onClickOverlay: g
      } = e;
      w(g), v && w(e["onUpdate:show"], !1);
    }
    function u() {
      const {
        overlayClass: v = "",
        overlayStyle: g
      } = e;
      return X("div", {
        class: mi(An("overlay"), v),
        style: tg({
          zIndex: r.value - 1
        }, g),
        onClick: s
      }, null);
    }
    function c() {
      return Me(X("div", Ye({
        class: mi(An("content"), An(`--${e.position}`), [e.defaultStyle, An("--content-background-color")], [e.defaultStyle, An("$-elevation--3")], [e.safeArea, An("--safe-area")], [e.safeAreaTop, An("--safe-area-top")]),
        style: {
          zIndex: r.value
        }
      }, o), [t.value && w(n.default)]), [[Kn, e.show]]);
    }
    function d() {
      return X(Je, {
        name: An("$-fade"),
        onAfterEnter: e.onOpened,
        onAfterLeave: e.onClosed
      }, {
        default: () => [Me(X("div", {
          class: mi(An("$--box"), An(), [!e.overlay, An("--pointer-events-none")]),
          style: {
            zIndex: r.value - 2
          }
        }, [e.overlay && u(), X(Je, {
          name: e.transition || An(`$-pop-${e.position}`)
        }, {
          default: () => [c()]
        })]), [[Kn, e.show]])]
      });
    }
    function f(v) {
      !a() || v.key !== "Escape" || !e.show || (w(e.onKeyEscape), e.closeOnKeyEscape && (Ae(v), w(e["onUpdate:show"], !1)));
    }
    return () => {
      const {
        teleport: v
      } = e;
      return v ? X(xn, {
        to: v,
        disabled: i.value
      }, {
        default: () => [d()]
      }) : d();
    };
  }
});
re(Vr);
se(Vr, vt);
const z8 = Vr;
var Co = Vr;
const en = {
  name: String,
  size: [Number, String],
  color: String,
  namespace: {
    type: String,
    default: "var-icon"
  },
  transition: {
    type: [Number, String],
    default: 0
  },
  animationClass: String,
  onClick: A()
};
function Mn(e, n) {
  throw Error(`Varlet [${e}]: ${n}`);
}
function Ks(e, n) {
  console.warn(`Varlet [${e}]: ${n}`);
}
function ag(e) {
  const { left: n } = un(e);
  return n + (document.body.scrollLeft || document.documentElement.scrollLeft);
}
function qs(e) {
  const { top: n } = un(e);
  return n + (document.body.scrollTop || document.documentElement.scrollTop);
}
function hi(e) {
  const { transform: n } = jo(e);
  return +n.slice(n.lastIndexOf(",") + 2, n.length - 1);
}
function So(e) {
  let n = e;
  for (; n && !(!n.parentNode || (n = n.parentNode, n === document.body || n === document.documentElement)); ) {
    const o = /(scroll|auto)/, { overflowY: t, overflow: r } = jo(n);
    if (o.test(t) || o.test(r))
      return n;
  }
  return window;
}
function ig(e) {
  const n = [];
  let o = e;
  for (; !ud(o); )
    o = So(o), n.push(o);
  return n;
}
function Sd(e, n) {
  if (bn(e)) {
    const o = document.querySelector(e);
    return o || Mn(n, "target element cannot found"), o;
  }
  if (fh(e))
    return e;
  Mn(n, 'type of prop "target" should be a selector or an element object');
}
function lg() {
  const { width: e, height: n } = un(window);
  return {
    vw: e,
    vh: n,
    vMin: Math.min(e, n),
    vMax: Math.max(e, n)
  };
}
const sg = (e) => bn(e) && e.endsWith("rem"), ug = (e) => bn(e) && e.endsWith("px") || Pn(e), cg = (e) => bn(e) && e.endsWith("vw"), dg = (e) => bn(e) && e.endsWith("vh"), fg = (e) => bn(e) && e.endsWith("vmin"), pg = (e) => bn(e) && e.endsWith("vmax"), xe = (e) => {
  if (sd(e))
    return Number(e);
  if (ug(e))
    return +e.replace("px", "");
  if (!_n())
    return 0;
  const { vw: n, vh: o, vMin: t, vMax: r } = lg();
  if (cg(e))
    return +e.replace("vw", "") * n / 100;
  if (dg(e))
    return +e.replace("vh", "") * o / 100;
  if (fg(e))
    return +e.replace("vmin", "") * t / 100;
  if (pg(e))
    return +e.replace("vmax", "") * r / 100;
  if (sg(e)) {
    const a = +e.replace("rem", ""), i = jo(document.documentElement).fontSize;
    return a * parseFloat(i);
  }
  return bn(e) ? F(e) : 0;
}, Te = (e) => {
  if (e != null)
    return sd(e) ? `${e}px` : String(e);
}, kn = (e, n = 1) => {
  if (e == null)
    return;
  const o = Te(e), t = o.match(/(vh|%|r?em|px|vw|vmin|vmax)$/)[0];
  return `${parseFloat(o) * n}${t}`;
};
function Tt(e, { top: n = 0, left: o = 0, duration: t = 300, animation: r }) {
  const a = Date.now(), i = Vo(e), l = Ql(e);
  return new Promise((s) => {
    const u = () => {
      const c = (Date.now() - a) / t;
      if (c < 1) {
        const d = i + (n - i) * r(c), f = l + (o - l) * r(c);
        e.scrollTo(f, d), requestAnimationFrame(u);
      } else
        e.scrollTo(o, n), s();
    };
    requestAnimationFrame(u);
  });
}
function Pd(e) {
  return Object.entries(e ?? {}).reduce((n, [o, t]) => {
    const r = o.startsWith("--") ? o : `--${fd(o)}`;
    return n[r] = t, n;
  }, {});
}
function $r(e) {
  return e === "start" || e === "end" ? `flex-${e}` : e;
}
const Xs = ["button", "input", "select", "textarea", "[tabindex]", "[href]"].map((e) => `${e}:not([disabled])`).join(", ");
function zd(e, n, o) {
  var t;
  const r = n.querySelectorAll(Xs);
  if (!r.length)
    return;
  const a = [e, ...Array.from(e.querySelectorAll(Xs))].findIndex(
    (l) => l === document.activeElement
  ) !== -1, i = Array.from(r).findIndex((l) => l === document.activeElement);
  if (o === "ArrowDown") {
    if (a && i === -1 || i === r.length - 1) {
      r[0].focus();
      return;
    }
    if (i !== -1 && i < r.length - 1) {
      r[i + 1].focus();
      return;
    }
  }
  if (o === "ArrowUp") {
    if (a && i === -1 || i === 0) {
      (t = r[r.length - 1]) == null || t.focus();
      return;
    }
    i > 0 && r[i - 1].focus();
  }
}
var vg = (e, n, o) => new Promise((t, r) => {
  var a = (s) => {
    try {
      l(o.next(s));
    } catch (u) {
      r(u);
    }
  }, i = (s) => {
    try {
      l(o.throw(s));
    } catch (u) {
      r(u);
    }
  }, l = (s) => s.done ? t(s.value) : Promise.resolve(s.value).then(a, i);
  l((o = o.apply(e, n)).next());
});
const { name: mg, n: hg, classes: gg } = ee("icon");
function bg(e, n) {
  return b(), Oe(ct(e.isURL(e.name) ? "img" : "i"), {
    class: p(
      e.classes(
        e.n(),
        [e.namespace !== e.n(), e.namespace],
        `${e.namespace}--set`,
        [e.isURL(e.name), e.n("image"), `${e.namespace}-${e.nextName}`],
        [e.animateInProgress, e.animationClass == null ? e.n("--shrinking") : e.animationClass]
      )
    ),
    style: K({
      color: e.color,
      "transition-duration": `${e.toNumber(e.transition)}ms`,
      width: e.isURL(e.name) ? e.toSizeUnit(e.size) : null,
      height: e.isURL(e.name) ? e.toSizeUnit(e.size) : null,
      fontSize: e.toSizeUnit(e.size)
    }),
    src: e.isURL(e.name) ? e.nextName : null,
    onClick: e.onClick
  }, null, 8, ["class", "style", "src", "onClick"]);
}
const Od = _({
  name: mg,
  props: en,
  setup(e) {
    const n = $(""), o = $(!1);
    fe(() => e.name, t, { immediate: !0 });
    function t(r, a) {
      return vg(this, null, function* () {
        const { transition: i } = e;
        if (a == null || F(i) === 0) {
          n.value = r;
          return;
        }
        o.value = !0, yield He(), setTimeout(() => {
          a != null && (n.value = r), o.value = !1;
        }, F(i));
      });
    }
    return {
      nextName: n,
      animateInProgress: o,
      n: hg,
      classes: gg,
      isURL: ph,
      toNumber: F,
      toSizeUnit: Te
    };
  }
});
Od.render = bg;
var Lr = Od;
re(Lr);
se(Lr, en);
const O8 = Lr;
var Xe = Lr;
const Td = {
  hovering: Boolean,
  focusing: Boolean
}, { name: yg, n: kg, classes: $g } = ee("hover-overlay");
function wg(e, n) {
  return b(), P(
    "div",
    {
      class: p(e.classes(e.n(), [e.hovering, e.n("--hovering")], [e.focusing && !e.inMobile(), e.n("--focusing")]))
    },
    null,
    2
    /* CLASS */
  );
}
const Ed = _({
  name: yg,
  props: Td,
  setup: () => ({
    n: kg,
    classes: $g,
    inMobile: gr
  })
});
Ed.render = wg;
var Rr = Ed;
re(Rr);
se(Rr, Td);
function Xn() {
  const e = $(!1);
  return {
    hovering: e,
    handleHovering: (o) => {
      e.value = o;
    }
  };
}
const T8 = Rr;
var Nn = Rr;
function Dd(e) {
  return e ? !!(e === "desktop" && gr() || e === "mobile" && !gr()) : !1;
}
function Cg(e) {
  const n = e.getAttribute("style");
  return n ? n.split(";").filter(Boolean).reduce((o, t) => {
    const [r, a] = t.split(":").map((i) => i.trim());
    return o[_l(r)] = a, o;
  }, {}) : {};
}
function Sg(e) {
  const { value: n } = e._hover, o = Cg(e);
  Object.keys(n).forEach((t) => {
    const r = _l(t);
    n[r] != null && o[r] && (e._hover.rawStyle[r] = o[r]);
  });
}
function os(e, n) {
  Object.keys(n).forEach((o) => {
    const t = n[o];
    t != null && (e.style[o] = t);
  });
}
function Pg(e) {
  Object.keys(e._hover.value).forEach((n) => {
    e._hover.value[n] != null && (e.style[n] = "");
  });
}
function Bd(e) {
  (e == null ? void 0 : e._hover) != null && (Pg(e), os(e, e._hover.rawStyle));
}
function Id() {
  const { value: e } = this._hover;
  if (this._hover.hovering = !0, dt(e)) {
    e(this._hover.hovering);
    return;
  }
  os(this, e);
}
function Md() {
  if (this._hover.hovering = !1, dt(this._hover.value)) {
    this._hover.value(this._hover.hovering);
    return;
  }
  Bd(this);
}
function Nd(e, n) {
  var o, t;
  const { arg: r, value: a } = n;
  Dd(r) || (e._hover = {
    value: a,
    hovering: (t = (o = e._hover) == null ? void 0 : o.hovering) != null ? t : !1,
    rawStyle: {}
  }, Sg(e), e.addEventListener("mouseenter", Id), e.addEventListener("mouseleave", Md));
}
function Ad(e, n) {
  Dd(n.arg) || (Bd(e), e.removeEventListener("mouseenter", Id), e.removeEventListener("mouseleave", Md));
}
function zg(e, n) {
  e._hover && Ad(e, n);
}
function Og(e, n) {
  return !dt(n.value) && e._hover.hovering;
}
function Tg(e, n) {
  Nd(e, n), Og(e, n) && os(e, n.value);
}
const Vd = {
  mounted: Nd,
  unmounted: Ad,
  beforeUpdate: zg,
  updated: Tg,
  install(e) {
    e.directive("hover", this);
  }
}, E8 = Vd;
var zn = Vd;
const { name: Eg, n: Dg, classes: Bg } = ee("action-sheet");
function Ig(e, n) {
  const o = te("var-icon"), t = te("var-hover-overlay"), r = Re("ripple"), a = Re("hover");
  return Me((b(), P(
    "div",
    {
      class: p(e.classes(e.n("action-item"), e.className, [e.disabled, e.n("--disabled")])),
      style: K({ color: e.color })
    },
    [
      e.icon ? (b(), Oe(o, {
        key: 0,
        "var-action-sheet-cover": "",
        class: p(e.n("action-icon")),
        namespace: e.namespace,
        name: e.icon,
        size: e.iconSize
      }, null, 8, ["class", "namespace", "name", "size"])) : G("v-if", !0),
      M(
        "div",
        {
          class: p(e.n("action-name"))
        },
        ae(e.name),
        3
        /* TEXT, CLASS */
      ),
      X(t, {
        hovering: e.disabled ? !1 : e.hovering
      }, null, 8, ["hovering"])
    ],
    6
    /* CLASS, STYLE */
  )), [
    [r, { disabled: e.disabled }],
    [a, e.handleHovering, "desktop"]
  ]);
}
const Ld = _({
  name: Eg,
  components: {
    VarHoverOverlay: Nn,
    VarIcon: Xe
  },
  directives: { Ripple: on, Hover: zn },
  props: {
    name: String,
    className: String,
    disabled: Boolean,
    color: String,
    namespace: String,
    iconSize: [String, Number],
    icon: String
  },
  setup() {
    const { hovering: e, handleHovering: n } = Xn();
    return {
      hovering: e,
      n: Dg,
      classes: Bg,
      handleHovering: n
    };
  }
});
Ld.render = Ig;
var Mg = Ld, Ng = Object.defineProperty, Gs = Object.getOwnPropertySymbols, Ag = Object.prototype.hasOwnProperty, Vg = Object.prototype.propertyIsEnumerable, Zs = (e, n, o) => n in e ? Ng(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, Lg = (e, n) => {
  for (var o in n || (n = {}))
    Ag.call(n, o) && Zs(e, o, n[o]);
  if (Gs)
    for (var o of Gs(n))
      Vg.call(n, o) && Zs(e, o, n[o]);
  return e;
};
const Rd = Lg({
  show: Boolean,
  title: String,
  actions: {
    type: Array,
    default: () => []
  },
  closeOnClickAction: {
    type: Boolean,
    default: !0
  },
  onSelect: A(),
  "onUpdate:show": A()
}, Be(vt, [
  "overlay",
  "overlayClass",
  "overlayStyle",
  "lockScroll",
  "closeOnClickOverlay",
  "closeOnKeyEscape",
  "safeArea",
  "teleport",
  "onOpen",
  "onClose",
  "onOpened",
  "onClosed",
  "onClickOverlay",
  // internal for function call closes the dialog
  "onRouteChange",
  "onKeyEscape"
]));
var ts = {
  // Dialog
  dialogTitle: "提示",
  dialogConfirmButtonText: "确认",
  dialogCancelButtonText: "取消",
  // ActionSheet
  actionSheetTitle: "请选择",
  // List
  listLoadingText: "加载中",
  listFinishedText: "没有更多了",
  listErrorText: "加载失败",
  // Picker
  pickerTitle: "请选择",
  pickerConfirmButtonText: "确认",
  pickerCancelButtonText: "取消",
  // date-picker
  datePickerMonthDict: {
    "01": {
      name: "一月",
      abbr: "一月"
    },
    "02": {
      name: "二月",
      abbr: "二月"
    },
    "03": {
      name: "三月",
      abbr: "三月"
    },
    "04": {
      name: "四月",
      abbr: "四月"
    },
    "05": {
      name: "五月",
      abbr: "五月"
    },
    "06": {
      name: "六月",
      abbr: "六月"
    },
    "07": {
      name: "七月",
      abbr: "七月"
    },
    "08": {
      name: "八月",
      abbr: "八月"
    },
    "09": {
      name: "九月",
      abbr: "九月"
    },
    10: {
      name: "十月",
      abbr: "十月"
    },
    11: {
      name: "十一月",
      abbr: "十一月"
    },
    12: {
      name: "十二月",
      abbr: "十二月"
    }
  },
  datePickerWeekDict: {
    0: {
      name: "星期日",
      abbr: "日"
    },
    1: {
      name: "星期一",
      abbr: "一"
    },
    2: {
      name: "星期二",
      abbr: "二"
    },
    3: {
      name: "星期三",
      abbr: "三"
    },
    4: {
      name: "星期四",
      abbr: "四"
    },
    5: {
      name: "星期五",
      abbr: "五"
    },
    6: {
      name: "星期六",
      abbr: "六"
    }
  },
  datePickerSelected: "个被选择",
  datePickerHint: "选择日期",
  // pagination
  paginationItem: "条",
  paginationPage: "页",
  paginationJump: "前往",
  // time-picker
  timePickerHint: "选择时间"
}, Fd = {
  // Dialog
  dialogTitle: "Hint",
  dialogConfirmButtonText: "Confirm",
  dialogCancelButtonText: "Cancel",
  // ActionSheet
  actionSheetTitle: "Select One",
  // List
  listLoadingText: "Loading",
  listFinishedText: "No more",
  listErrorText: "Load fail",
  // Picker
  pickerTitle: "Pick it",
  pickerConfirmButtonText: "Confirm",
  pickerCancelButtonText: "Cancel",
  // date-picker
  datePickerMonthDict: {
    "01": {
      name: "January",
      abbr: "JAN"
    },
    "02": {
      name: "February",
      abbr: "FEB"
    },
    "03": {
      name: "March",
      abbr: "MAR"
    },
    "04": {
      name: "April",
      abbr: "APR"
    },
    "05": {
      name: "May",
      abbr: "MAY"
    },
    "06": {
      name: "June",
      abbr: "JUN"
    },
    "07": {
      name: "July",
      abbr: "JUL"
    },
    "08": {
      name: "August",
      abbr: "AUG"
    },
    "09": {
      name: "September",
      abbr: "SEP"
    },
    10: {
      name: "October",
      abbr: "OCT"
    },
    11: {
      name: "November",
      abbr: "NOV"
    },
    12: {
      name: "December",
      abbr: "DEC"
    }
  },
  datePickerWeekDict: {
    0: {
      name: "Sunday",
      abbr: "S"
    },
    1: {
      name: "Monday",
      abbr: "M"
    },
    2: {
      name: "Tuesday",
      abbr: "T"
    },
    3: {
      name: "Wednesday",
      abbr: "W"
    },
    4: {
      name: "Thursday",
      abbr: "T"
    },
    5: {
      name: "Friday",
      abbr: "F"
    },
    6: {
      name: "Saturday",
      abbr: "S"
    }
  },
  datePickerSelected: " selected",
  datePickerHint: "SELECT DATE",
  // pagination
  paginationItem: "",
  paginationPage: "page",
  paginationJump: "Go to",
  // time-picker
  timePickerHint: "SELECT TIME"
}, Ud = {
  // Dialog
  dialogTitle: "提示",
  dialogConfirmButtonText: "確認",
  dialogCancelButtonText: "取消",
  // ActionSheet
  actionSheetTitle: "請選擇",
  // List
  listLoadingText: "載入中",
  listFinishedText: "沒有更多了",
  listErrorText: "載入失敗",
  // Picker
  pickerTitle: "請選擇",
  pickerConfirmButtonText: "確認",
  pickerCancelButtonText: "取消",
  // date-picker
  datePickerMonthDict: {
    "01": {
      name: "一月",
      abbr: "一月"
    },
    "02": {
      name: "二月",
      abbr: "二月"
    },
    "03": {
      name: "三月",
      abbr: "三月"
    },
    "04": {
      name: "四月",
      abbr: "四月"
    },
    "05": {
      name: "五月",
      abbr: "五月"
    },
    "06": {
      name: "六月",
      abbr: "六月"
    },
    "07": {
      name: "七月",
      abbr: "七月"
    },
    "08": {
      name: "八月",
      abbr: "八月"
    },
    "09": {
      name: "九月",
      abbr: "九月"
    },
    10: {
      name: "十月",
      abbr: "十月"
    },
    11: {
      name: "十一月",
      abbr: "十一月"
    },
    12: {
      name: "十二月",
      abbr: "十二月"
    }
  },
  datePickerWeekDict: {
    0: {
      name: "星期日",
      abbr: "日"
    },
    1: {
      name: "星期一",
      abbr: "一"
    },
    2: {
      name: "星期二",
      abbr: "二"
    },
    3: {
      name: "星期三",
      abbr: "三"
    },
    4: {
      name: "星期四",
      abbr: "四"
    },
    5: {
      name: "星期五",
      abbr: "五"
    },
    6: {
      name: "星期六",
      abbr: "六"
    }
  },
  datePickerSelected: "個被選擇",
  // pagination
  paginationItem: "條",
  paginationPage: "頁",
  paginationJump: "前往"
}, Rg = Ud, Fg = {
  // Dialog
  dialogTitle: "اشاره",
  dialogConfirmButtonText: "تایید",
  dialogCancelButtonText: "لغو",
  // ActionSheet
  actionSheetTitle: "انتخاب یک مورد",
  // List
  listLoadingText: "در حال بارگزاری",
  listFinishedText: "مورد دیگری وجود ندارد",
  listErrorText: "بارگزاری ناموفق",
  // Picker
  pickerTitle: "انتخاب کنید",
  pickerConfirmButtonText: "تایید",
  pickerCancelButtonText: "لغو",
  // date-picker
  datePickerMonthDict: {
    "01": {
      name: "ژانویه",
      abbr: "JAN"
    },
    "02": {
      name: "فوریه",
      abbr: "FEB"
    },
    "03": {
      name: "مارس",
      abbr: "MAR"
    },
    "04": {
      name: "آوریل",
      abbr: "APR"
    },
    "05": {
      name: "مه",
      abbr: "MAY"
    },
    "06": {
      name: "ژوئن",
      abbr: "JUN"
    },
    "07": {
      name: "جولای",
      abbr: "JUL"
    },
    "08": {
      name: "آگوست",
      abbr: "AUG"
    },
    "09": {
      name: "سپتامبر",
      abbr: "SEP"
    },
    10: {
      name: "اوکتبر",
      abbr: "OCT"
    },
    11: {
      name: "نوامبر",
      abbr: "NOV"
    },
    12: {
      name: "دسامبر",
      abbr: "DEC"
    }
  },
  datePickerWeekDict: {
    0: {
      name: "یکشنبه",
      abbr: "S"
    },
    1: {
      name: "دوشنبه",
      abbr: "M"
    },
    2: {
      name: "سه‌شنبه",
      abbr: "T"
    },
    3: {
      name: "چهارشنبه",
      abbr: "W"
    },
    4: {
      name: "پنجشنبه",
      abbr: "T"
    },
    5: {
      name: "جمعه",
      abbr: "F"
    },
    6: {
      name: "شنبه",
      abbr: "S"
    }
  },
  datePickerSelected: " انتخاب شده",
  datePickerHint: "انتخاب تاریخ",
  // pagination
  paginationItem: "",
  paginationPage: "صفحه",
  paginationJump: "برو به",
  // time-picker
  timePickerHint: "انتخاب زمان"
}, Ug = Object.defineProperty, Js = Object.getOwnPropertySymbols, Hg = Object.prototype.hasOwnProperty, Yg = Object.prototype.propertyIsEnumerable, Qs = (e, n, o) => n in e ? Ug(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, xs = (e, n) => {
  for (var o in n || (n = {}))
    Hg.call(n, o) && Qs(e, o, n[o]);
  if (Js)
    for (var o of Js(n))
      Yg.call(n, o) && Qs(e, o, n[o]);
  return e;
};
function rs() {
  const e = {}, n = $({}), o = (i, l) => {
    l.lang = i, e[i] = l;
  }, t = (i) => {
    if (!e[i])
      return console.warn(`The ${i} does not exist. You can mount a language message using the add method`), {};
    n.value = e[i];
  };
  return {
    messages: e,
    currentMessage: n,
    add: o,
    use: t,
    merge: (i, l) => {
      if (!e[i]) {
        console.warn(`The ${i} does not exist. You can mount a language message using the add method`);
        return;
      }
      e[i] = xs(xs({}, e[i]), l), t(i);
    },
    t: (i) => cd(n.value, i) ? n.value[i] : i
  };
}
const { messages: Hd, currentMessage: Yd, add: as, use: is, merge: jd, t: an } = rs();
as("zh-CN", ts);
is("zh-CN");
const D8 = { zhCN: ts, enUS: Fd, messages: Hd, currentMessage: Yd, add: as, use: is, merge: jd, t: an, useLocale: rs };
var Oi = {
  zhCN: ts,
  enUS: Fd,
  zhTW: Ud,
  zhHK: Rg,
  faIR: Fg,
  messages: Hd,
  currentMessage: Yd,
  add: as,
  use: is,
  merge: jd,
  t: an,
  useLocale: rs
};
const { name: jg, n: Wg, classes: Kg } = ee("action-sheet");
function qg(e, n) {
  const o = te("var-action-item"), t = te("var-popup");
  return b(), Oe(t, {
    position: "bottom",
    class: p(e.n("popup-radius")),
    overlay: e.overlay,
    "overlay-class": e.overlayClass,
    "overlay-style": e.overlayStyle,
    "lock-scroll": e.lockScroll,
    "close-on-click-overlay": e.closeOnClickOverlay,
    "close-on-key-escape": e.closeOnKeyEscape,
    teleport: e.teleport,
    "safe-area": e.safeArea,
    show: e.show,
    "onUpdate:show": n[0] || (n[0] = (r) => e.show = r),
    onOpen: e.onOpen,
    onClose: e.onClose,
    onClosed: e.onClosed,
    onOpened: e.onOpened,
    onRouteChange: e.onRouteChange,
    onKeyEscape: e.onKeyEscape
  }, {
    default: pe(() => [
      M(
        "div",
        Ye({
          class: e.classes(e.n(), e.n("$--box"))
        }, e.$attrs),
        [
          V(e.$slots, "title", {}, () => {
            var r;
            return [
              M(
                "div",
                {
                  class: p(e.n("title"))
                },
                ae((r = e.title) != null ? r : e.t("actionSheetTitle")),
                3
                /* TEXT, CLASS */
              )
            ];
          }),
          V(e.$slots, "actions", {}, () => [
            (b(!0), P(
              Ue,
              null,
              nn(e.actions, (r) => (b(), Oe(o, {
                key: r.name,
                name: r.name,
                namespace: r.namespace,
                icon: r.icon,
                "icon-size": r.iconSize,
                "class-name": r.className,
                color: r.color,
                onClick: (a) => e.handleSelect(r)
              }, null, 8, ["name", "namespace", "icon", "icon-size", "class-name", "color", "onClick"]))),
              128
              /* KEYED_FRAGMENT */
            ))
          ])
        ],
        16
        /* FULL_PROPS */
      )
    ]),
    _: 3
    /* FORWARDED */
  }, 8, ["class", "overlay", "overlay-class", "overlay-style", "lock-scroll", "close-on-click-overlay", "close-on-key-escape", "teleport", "safe-area", "show", "onOpen", "onClose", "onClosed", "onOpened", "onRouteChange", "onKeyEscape"]);
}
const Wd = _({
  name: jg,
  directives: { Ripple: on },
  components: {
    VarPopup: Co,
    VarActionItem: Mg
  },
  inheritAttrs: !1,
  props: Rd,
  setup(e) {
    const n = qn(e, "show");
    function o(t) {
      if (t.disabled)
        return;
      const { closeOnClickAction: r, onSelect: a } = e;
      w(a, t), r && (n.value = !1);
    }
    return {
      show: n,
      t: an,
      n: Wg,
      classes: Kg,
      handleSelect: o
    };
  }
});
Wd.render = qg;
var Xt = Wd, Xg = Object.defineProperty, _s = Object.getOwnPropertySymbols, Gg = Object.prototype.hasOwnProperty, Zg = Object.prototype.propertyIsEnumerable, eu = (e, n, o) => n in e ? Xg(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, nu = (e, n) => {
  for (var o in n || (n = {}))
    Gg.call(n, o) && eu(e, o, n[o]);
  if (_s)
    for (var o of _s(n))
      Zg.call(n, o) && eu(e, o, n[o]);
  return e;
};
let vo, ls = {};
function Jg(e = {}) {
  return nu(nu({}, ls), e);
}
function Eo(e) {
  return _n() ? new Promise((n) => {
    Eo.close();
    const o = Ze(Jg(e));
    o.teleport = "body", vo = o;
    const { unmountInstance: t } = pt(Xt, o, {
      onSelect: (r) => {
        w(o.onSelect, r), n(r);
      },
      onClose: () => {
        w(o.onClose), n("close");
      },
      onClosed: () => {
        w(o.onClosed), t(), vo === o && (vo = null);
      },
      onRouteChange: () => {
        t(), vo === o && (vo = null);
      },
      "onUpdate:show": (r) => {
        o.show = r;
      }
    });
    o.show = !0;
  }) : Promise.resolve();
}
Eo.setDefaultOptions = function(e) {
  ls = e;
};
Eo.resetDefaultOptions = function() {
  ls = {};
};
Eo.close = function() {
  if (vo != null) {
    const e = vo;
    vo = null, He().then(() => {
      e.show = !1;
    });
  }
};
Eo.Component = Xt;
re(Xt);
re(Xt, Eo);
se(Eo, Rd);
const B8 = Xt;
var Ti = Eo;
const Kd = {
  color: String,
  textColor: String,
  title: String,
  titlePosition: {
    type: String,
    default: "left"
  },
  elevation: {
    type: [Boolean, String, Number],
    default: !0
  },
  round: Boolean,
  image: String,
  imageLinearGradient: String,
  safeAreaTop: Boolean,
  zIndex: {
    type: [Number, String],
    default: 1
  },
  fixed: Boolean
}, { name: Qg, n: xg, classes: _g } = ee("app-bar");
function eb(e, n) {
  return b(), P(
    "div",
    {
      class: p(
        e.classes(
          e.n(),
          e.n("$--box"),
          [e.safeAreaTop, e.n("--safe-area-top")],
          [e.round, e.n("--round")],
          [e.fixed, e.n("--fixed")],
          e.formatElevation(e.elevation, 3)
        )
      ),
      style: K(e.rootStyles)
    },
    [
      M(
        "div",
        {
          class: p(e.n("toolbar"))
        },
        [
          M(
            "div",
            {
              class: p(e.n("left"))
            },
            [
              V(e.$slots, "left"),
              e.titlePosition === "left" ? (b(), P(
                "div",
                {
                  key: 0,
                  class: p(e.n("title")),
                  style: K({ paddingLeft: e.paddingLeft })
                },
                [
                  V(e.$slots, "default", {}, () => [
                    De(
                      ae(e.title),
                      1
                      /* TEXT */
                    )
                  ])
                ],
                6
                /* CLASS, STYLE */
              )) : G("v-if", !0)
            ],
            2
            /* CLASS */
          ),
          e.titlePosition === "center" ? (b(), P(
            "div",
            {
              key: 0,
              class: p(e.n("title"))
            },
            [
              V(e.$slots, "default", {}, () => [
                De(
                  ae(e.title),
                  1
                  /* TEXT */
                )
              ])
            ],
            2
            /* CLASS */
          )) : G("v-if", !0),
          M(
            "div",
            {
              class: p(e.n("right"))
            },
            [
              e.titlePosition === "right" ? (b(), P(
                "div",
                {
                  key: 0,
                  class: p(e.n("title")),
                  style: K({ paddingRight: e.paddingRight })
                },
                [
                  V(e.$slots, "default", {}, () => [
                    De(
                      ae(e.title),
                      1
                      /* TEXT */
                    )
                  ])
                ],
                6
                /* CLASS, STYLE */
              )) : G("v-if", !0),
              V(e.$slots, "right")
            ],
            2
            /* CLASS */
          )
        ],
        2
        /* CLASS */
      ),
      V(e.$slots, "content")
    ],
    6
    /* CLASS, STYLE */
  );
}
const qd = _({
  name: Qg,
  props: Kd,
  setup(e, { slots: n }) {
    const o = $(), t = $(), r = I(() => {
      const { image: i, color: l, textColor: s, imageLinearGradient: u, zIndex: c } = e;
      return i != null ? {
        "background-image": `${u ? `linear-gradient(${u}), ` : ""}url(${i})`,
        "background-position": "center center",
        "background-size": "cover",
        "z-index": c
      } : {
        background: l,
        color: s,
        "z-index": c
      };
    });
    cn(a), Yt(a);
    function a() {
      o.value = n.left ? 0 : void 0, t.value = n.right ? 0 : void 0;
    }
    return {
      rootStyles: r,
      paddingLeft: o,
      paddingRight: t,
      n: xg,
      classes: _g,
      formatElevation: yn
    };
  }
});
qd.render = eb;
var Fr = qd;
re(Fr);
se(Fr, Kd);
const I8 = Fr;
var Ei = Fr;
const ou = (e) => bn(e) ? e.startsWith("data:image") || /\.(png|jpg|gif|jpeg|svg|webp|ico)$/i.test(e) : !1, tu = (e) => bn(e) ? e.startsWith("data:video") || /\.(mp4|webm|ogg)$/.test(e) : !1, nb = (e) => {
  const n = [];
  return {
    cache: n,
    has(o) {
      return this.cache.includes(o);
    },
    add(o) {
      this.has(o) || (this.cache.length === e && n.shift(), this.cache.push(o));
    },
    remove(o) {
      this.has(o) && et(this.cache, o);
    },
    clear() {
      this.cache.length = 0;
    }
  };
}, Di = (e) => e, ru = (e) => e ** 3, Xd = (e) => e < 0.5 ? ru(e * 2) / 2 : 1 - ru((1 - e) * 2) / 2, Lo = (e = "", n, o = "") => {
  if (e.length >= n)
    return e;
  const t = n - e.length, r = Math.floor(t / o.length);
  return o.repeat(r) + o.slice(0, t % o.length) + e;
};
var ob = Object.defineProperty, au = Object.getOwnPropertySymbols, tb = Object.prototype.hasOwnProperty, rb = Object.prototype.propertyIsEnumerable, iu = (e, n, o) => n in e ? ob(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, ab = (e, n) => {
  for (var o in n || (n = {}))
    tb.call(n, o) && iu(e, o, n[o]);
  if (au)
    for (var o of au(n))
      rb.call(n, o) && iu(e, o, n[o]);
  return e;
}, Ur = (e, n, o) => new Promise((t, r) => {
  var a = (s) => {
    try {
      l(o.next(s));
    } catch (u) {
      r(u);
    }
  }, i = (s) => {
    try {
      l(o.throw(s));
    } catch (u) {
      r(u);
    }
  }, l = (s) => s.done ? t(s.value) : Promise.resolve(s.value).then(a, i);
  l((o = o.apply(e, n)).next());
});
const ib = "background-image", lb = "lazy-loading", sb = "lazy-error", lu = "lazy-attempt", ub = ["scroll", "wheel", "mousewheel", "resize", "animationend", "transitionend", "touchmove"], Bi = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==", nt = [], wr = [], Gd = nb(100), ln = {
  loading: Bi,
  error: Bi,
  attempt: 3,
  throttleWait: 300,
  events: ub
};
let ss = xl(Gt, ln.throttleWait);
function Hr(e, n) {
  e._lazy.arg === ib ? e.style.backgroundImage = `url(${n})` : e.setAttribute("src", n);
}
function cb(e) {
  e._lazy.loading && Hr(e, e._lazy.loading), Gt();
}
function db(e) {
  e._lazy.error && Hr(e, e._lazy.error), e._lazy.state = "error", cs(e), Gt();
}
function Zd(e, n) {
  Hr(e, n), e._lazy.state = "success", cs(e), Gt();
}
function fb(e) {
  var n;
  wr.includes(e) || (wr.push(e), (n = ln.events) == null || n.forEach((o) => {
    e.addEventListener(o, ss, { passive: !0 });
  }));
}
function pb() {
  wr.forEach((e) => {
    var n;
    (n = ln.events) == null || n.forEach((o) => {
      e.removeEventListener(o, ss);
    });
  }), wr.length = 0;
}
function vb(e, n) {
  var o, t;
  const r = {
    loading: (o = e.getAttribute(lb)) != null ? o : ln.loading,
    error: (t = e.getAttribute(sb)) != null ? t : ln.error,
    attempt: e.getAttribute(lu) ? Number(e.getAttribute(lu)) : ln.attempt
  };
  e._lazy = ab({
    src: n.value,
    arg: n.arg,
    currentAttempt: 0,
    state: "pending",
    attemptLock: !1
  }, r), Hr(e, Bi), w(ln.filter, e._lazy);
}
function mb(e, n) {
  const o = new Image();
  o.src = n, e._lazy.preloadImage = o, o.addEventListener("load", () => {
    e._lazy.attemptLock = !1, Gd.add(n), Zd(e, n);
  }), o.addEventListener("error", () => {
    e._lazy.attemptLock = !1, e._lazy.currentAttempt >= e._lazy.attempt ? db(e) : Jd(e);
  });
}
function Jd(e) {
  if (e._lazy.attemptLock)
    return;
  e._lazy.attemptLock = !0, e._lazy.currentAttempt++;
  const { src: n } = e._lazy;
  if (Gd.has(n)) {
    Zd(e, n), e._lazy.attemptLock = !1;
    return;
  }
  cb(e), mb(e, n);
}
function us(e) {
  return Ur(this, null, function* () {
    yield wn(), yh(e) && Jd(e);
  });
}
function Gt() {
  nt.forEach((e) => us(e));
}
function hb(e) {
  return Ur(this, null, function* () {
    !nt.includes(e) && nt.push(e), ig(e).forEach(fb), yield us(e);
  });
}
function cs(e) {
  et(nt, e), nt.length === 0 && pb();
}
function gb(e, n) {
  const { src: o, arg: t } = e._lazy;
  return o !== n.value || t !== n.arg;
}
function Qd(e, n) {
  return Ur(this, null, function* () {
    vb(e, n), yield hb(e);
  });
}
function bb(e, n) {
  return Ur(this, null, function* () {
    if (!gb(e, n)) {
      nt.includes(e) && (yield us(e));
      return;
    }
    yield Qd(e, n);
  });
}
function yb(e = {}) {
  const { events: n, loading: o, error: t, attempt: r, throttleWait: a, filter: i } = e;
  ln.events = n ?? ln.events, ln.loading = o ?? ln.loading, ln.error = t ?? ln.error, ln.attempt = r ?? ln.attempt, ln.throttleWait = a ?? ln.throttleWait, ln.filter = i;
}
const xd = {
  mounted: Qd,
  unmounted: cs,
  updated: bb,
  install(e, n) {
    yb(n), ss = xl(Gt, ln.throttleWait), e.directive("lazy", this);
  }
}, M8 = xd;
var Et = xd;
const _d = {
  round: {
    type: Boolean,
    default: !0
  },
  size: {
    type: [String, Number],
    default: "normal"
  },
  alt: String,
  color: String,
  src: String,
  fit: {
    type: String,
    default: "cover"
  },
  bordered: Boolean,
  borderColor: String,
  loading: String,
  error: String,
  lazy: Boolean,
  hoverable: Boolean,
  onClick: A(),
  onLoad: A(),
  onError: A()
}, kb = (e) => ["mini", "small", "normal", "large"].includes(e), { name: $b, n: wb, classes: Cb } = ee("avatar"), Sb = ["src", "alt", "lazy-loading", "lazy-error"], Pb = ["src", "alt"];
function zb(e, n) {
  const o = Re("lazy");
  return b(), P(
    "div",
    {
      ref: "avatarElement",
      class: p(
        e.classes(
          e.n(),
          e.n("$--box"),
          [e.isInternalSize(e.size), e.n(`--${e.size}`)],
          [e.round, e.n("--round")],
          [e.bordered, e.n("--bordered")],
          [e.hoverable, e.n("--hoverable")]
        )
      ),
      style: K({
        width: e.isInternalSize(e.size) ? void 0 : e.toSizeUnit(e.size),
        height: e.isInternalSize(e.size) ? void 0 : e.toSizeUnit(e.size),
        borderColor: e.borderColor,
        backgroundColor: e.color
      }),
      onClick: n[3] || (n[3] = (...t) => e.handleClick && e.handleClick(...t))
    },
    [
      e.src ? (b(), P(
        Ue,
        { key: 0 },
        [
          e.lazy ? Me((b(), P("img", {
            key: 0,
            role: "img",
            class: p(e.n("image")),
            src: e.src,
            alt: e.alt,
            style: K({ objectFit: e.fit }),
            "lazy-loading": e.loading,
            "lazy-error": e.error,
            onLoad: n[0] || (n[0] = (...t) => e.handleLoad && e.handleLoad(...t))
          }, null, 46, Sb)), [
            [o, e.src]
          ]) : (b(), P("img", {
            key: 1,
            role: "img",
            class: p(e.n("image")),
            src: e.src,
            alt: e.alt,
            style: K({ objectFit: e.fit }),
            onLoad: n[1] || (n[1] = (...t) => e.handleLoad && e.handleLoad(...t)),
            onError: n[2] || (n[2] = (...t) => e.handleError && e.handleError(...t))
          }, null, 46, Pb))
        ],
        64
        /* STABLE_FRAGMENT */
      )) : (b(), P(
        "div",
        {
          key: 1,
          ref: "textElement",
          class: p(e.n("text")),
          style: K({ transform: `scale(${e.scale})` })
        },
        [
          V(e.$slots, "default")
        ],
        6
        /* CLASS, STYLE */
      ))
    ],
    6
    /* CLASS, STYLE */
  );
}
const ef = _({
  name: $b,
  directives: { Lazy: Et },
  props: _d,
  setup(e) {
    const n = $(null), o = $(null), t = $(1);
    cn(r), Yt(r);
    function r() {
      if (!n.value || !o.value) {
        t.value = 1;
        return;
      }
      const s = n.value.offsetWidth, u = o.value.offsetWidth;
      s > u ? t.value = 1 : t.value = s / u;
    }
    function a(s) {
      const u = s.currentTarget, { lazy: c, onLoad: d, onError: f } = e;
      c ? (u._lazy.state === "success" && w(d, s), u._lazy.state === "error" && w(f, s)) : w(d, s);
    }
    function i(s) {
      w(e.onError, s);
    }
    function l(s) {
      w(e.onClick, s);
    }
    return {
      avatarElement: n,
      textElement: o,
      scale: t,
      n: wb,
      classes: Cb,
      isInternalSize: kb,
      toSizeUnit: Te,
      handleLoad: a,
      handleError: i,
      handleClick: l
    };
  }
});
ef.render = zb;
var Yr = ef;
re(Yr);
se(Yr, _d);
const N8 = Yr;
var Ii = Yr;
const nf = {
  offset: [Number, String],
  vertical: Boolean
}, { name: Ob, n: Tb, classes: Eb } = ee("avatar-group");
function Db(e, n) {
  return b(), P(
    "div",
    {
      class: p(e.classes(e.n(), [e.vertical, e.n("--column"), e.n("--row")])),
      style: K(e.rootStyles)
    },
    [
      V(e.$slots, "default")
    ],
    6
    /* CLASS, STYLE */
  );
}
const of = _({
  name: Ob,
  props: nf,
  setup(e) {
    return {
      rootStyles: I(() => e.offset == null ? {} : {
        "--avatar-group-offset": Te(e.offset)
      }),
      n: Tb,
      classes: Eb
    };
  }
});
of.render = Db;
var jr = of;
re(jr);
se(jr, nf);
const A8 = jr;
var Mi = jr;
const to = {
  type: {
    type: String,
    default: "circle"
  },
  radius: [String, Number],
  size: {
    type: String,
    default: "normal"
  },
  color: String,
  description: String,
  loading: Boolean
}, { name: Bb, n: Ib, classes: Mb } = ee("loading"), Nb = (e) => (Ho(""), e = e(), Yo(), e), Ab = /* @__PURE__ */ Nb(() => /* @__PURE__ */ M(
  "svg",
  { viewBox: "25 25 50 50" },
  [
    /* @__PURE__ */ M("circle", {
      cx: "50",
      cy: "50",
      r: "20",
      fill: "none"
    })
  ],
  -1
  /* HOISTED */
)), Vb = [
  Ab
];
function Lb(e, n) {
  return b(), P(
    "div",
    {
      class: p(e.n())
    },
    [
      e.$slots.default ? (b(), P(
        "div",
        {
          key: 0,
          class: p(e.classes(e.n("content"), [e.loading, e.n("content--active")]))
        },
        [
          V(e.$slots, "default"),
          e.loading ? (b(), P(
            "div",
            {
              key: 0,
              class: p(e.n("content-mask"))
            },
            null,
            2
            /* CLASS */
          )) : G("v-if", !0)
        ],
        2
        /* CLASS */
      )) : G("v-if", !0),
      e.isShow ? (b(), P(
        "div",
        {
          key: 1,
          class: p(e.classes(e.n("$--box"), e.n("body"), [e.$slots.default, e.n("inside")]))
        },
        [
          e.type === "circle" ? (b(), P(
            "div",
            {
              key: 0,
              class: p(e.n("circle"))
            },
            [
              M(
                "span",
                {
                  class: p(e.classes(e.n("circle-block"), e.n(`circle-block--${e.size}`))),
                  style: K({
                    width: e.multiplySizeUnit(e.radius, 2),
                    height: e.multiplySizeUnit(e.radius, 2),
                    color: e.color
                  })
                },
                [...Vb],
                6
                /* CLASS, STYLE */
              )
            ],
            2
            /* CLASS */
          )) : G("v-if", !0),
          (b(!0), P(
            Ue,
            null,
            nn(e.loadingTypeDict, (o, t) => (b(), P(
              Ue,
              { key: t },
              [
                e.type === t ? (b(), P(
                  "div",
                  {
                    key: 0,
                    class: p(e.classes(e.n(t), e.n(`${t}--${e.size}`)))
                  },
                  [
                    (b(!0), P(
                      Ue,
                      null,
                      nn(o, (r) => (b(), P(
                        "div",
                        {
                          key: r + t,
                          style: K({ backgroundColor: e.color }),
                          class: p(e.classes(e.n(`${t}-item`), e.n(`${t}-item--${e.size}`)))
                        },
                        null,
                        6
                        /* CLASS, STYLE */
                      ))),
                      128
                      /* KEYED_FRAGMENT */
                    ))
                  ],
                  2
                  /* CLASS */
                )) : G("v-if", !0)
              ],
              64
              /* STABLE_FRAGMENT */
            ))),
            128
            /* KEYED_FRAGMENT */
          )),
          e.$slots.description || e.description ? (b(), P(
            "div",
            {
              key: 1,
              class: p(e.classes(e.n("description"), e.n(`description--${e.size}`))),
              style: K({ color: e.color })
            },
            [
              V(e.$slots, "description", {}, () => [
                De(
                  ae(e.description),
                  1
                  /* TEXT */
                )
              ])
            ],
            6
            /* CLASS, STYLE */
          )) : G("v-if", !0)
        ],
        2
        /* CLASS */
      )) : G("v-if", !0)
    ],
    2
    /* CLASS */
  );
}
const tf = _({
  name: Bb,
  props: to,
  setup(e, { slots: n }) {
    const o = I(() => w(n.default) ? e.loading : !0);
    return {
      loadingTypeDict: {
        wave: 5,
        cube: 4,
        rect: 8,
        disappear: 3
      },
      isShow: o,
      n: Ib,
      classes: Mb,
      multiplySizeUnit: kn
    };
  }
});
tf.render = Lb;
var Wr = tf;
re(Wr);
se(Wr, to);
const V8 = Wr;
var ot = Wr, Rb = Object.defineProperty, Fb = Object.defineProperties, Ub = Object.getOwnPropertyDescriptors, su = Object.getOwnPropertySymbols, Hb = Object.prototype.hasOwnProperty, Yb = Object.prototype.propertyIsEnumerable, uu = (e, n, o) => n in e ? Rb(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, cu = (e, n) => {
  for (var o in n || (n = {}))
    Hb.call(n, o) && uu(e, o, n[o]);
  if (su)
    for (var o of su(n))
      Yb.call(n, o) && uu(e, o, n[o]);
  return e;
}, du = (e, n) => Fb(e, Ub(n));
const rf = {
  type: String,
  nativeType: {
    type: String,
    default: "button"
  },
  size: String,
  loading: Boolean,
  round: Boolean,
  block: Boolean,
  text: Boolean,
  outline: Boolean,
  disabled: Boolean,
  autoLoading: Boolean,
  iconContainer: Boolean,
  ripple: {
    type: Boolean,
    default: !0
  },
  color: String,
  textColor: String,
  elevation: {
    type: [Boolean, Number, String],
    default: !0
  },
  loadingRadius: [Number, String],
  loadingType: Be(to, "type"),
  loadingSize: du(cu({}, Be(to, "size")), {
    default: void 0
  }),
  loadingColor: du(cu({}, Be(to, "color")), {
    default: "currentColor"
  }),
  onClick: A(),
  onTouchstart: A()
}, af = Symbol("BUTTON_GROUP_BIND_BUTTON_KEY");
function jb() {
  const { bindChildren: e, childProviders: n, length: o } = mn(af);
  return {
    length: o,
    buttons: n,
    bindButtons: e
  };
}
function Wb() {
  const { bindParent: e, parentProvider: n, index: o } = vn(af);
  return {
    index: o,
    buttonGroup: n,
    bindButtonGroup: e
  };
}
const { name: Kb, n: qb, classes: Xb } = ee("button"), Gb = ["type", "disabled"];
function Zb(e, n) {
  const o = te("var-loading"), t = te("var-hover-overlay"), r = Re("ripple"), a = Re("hover");
  return Me((b(), P("button", {
    class: p(
      e.classes(
        e.n(),
        e.n("$--box"),
        e.n(`--${e.states.size}`),
        [e.block, `${e.n("$--flex")} ${e.n("--block")}`, e.n("$--inline-flex")],
        [!e.states.text, e.states.elevation],
        [!e.states.iconContainer && !e.states.text, e.n(`--${e.states.type}`)],
        [e.states.text, `${e.n("--text")} ${e.n(`--text-${e.states.type}`)}`],
        [e.states.iconContainer, e.n(`--icon-container-${e.states.type}`)],
        [e.round, e.n("--round")],
        [e.states.outline, e.n("--outline")],
        [e.loading || e.pending, e.n("--loading")],
        [e.disabled, e.n("--disabled")],
        [e.states.text && e.disabled, e.n("--text-disabled")]
      )
    ),
    style: K({
      color: e.states.textColor,
      background: e.states.color
    }),
    type: e.nativeType,
    disabled: e.disabled,
    onClick: n[0] || (n[0] = (...i) => e.handleClick && e.handleClick(...i)),
    onTouchstart: n[1] || (n[1] = (...i) => e.handleTouchstart && e.handleTouchstart(...i)),
    onFocus: n[2] || (n[2] = (i) => e.isFocusing = !0),
    onBlur: n[3] || (n[3] = (i) => e.isFocusing = !1)
  }, [
    e.loading || e.pending ? (b(), Oe(o, {
      key: 0,
      class: p(e.n("loading")),
      "var-button-cover": "",
      color: e.loadingColor,
      type: e.loadingType,
      size: e.loadingSize || e.states.size,
      radius: e.loadingRadius
    }, null, 8, ["class", "color", "type", "size", "radius"])) : G("v-if", !0),
    M(
      "div",
      {
        class: p(e.classes(e.n("content"), [e.loading || e.pending, e.n("--hidden")]))
      },
      [
        V(e.$slots, "default")
      ],
      2
      /* CLASS */
    ),
    X(t, {
      hovering: e.disabled || e.loading || e.pending ? !1 : e.hovering,
      focusing: e.disabled || e.loading || e.pending ? !1 : e.isFocusing
    }, null, 8, ["hovering", "focusing"])
  ], 46, Gb)), [
    [r, { disabled: e.disabled || !e.ripple || e.loading || e.pending }],
    [a, e.handleHovering, "desktop"]
  ]);
}
const lf = _({
  name: Kb,
  components: {
    VarLoading: ot,
    VarHoverOverlay: Nn
  },
  directives: { Ripple: on, Hover: zn },
  props: rf,
  setup(e) {
    const n = $(!1), o = $(!1), { buttonGroup: t } = Wb(), { hovering: r, handleHovering: a } = Xn(), i = I(() => {
      var c, d, f, v, g, m;
      if (!t)
        return {
          elevation: yn(e.elevation, 2),
          type: (c = e.type) != null ? c : "default",
          size: (d = e.size) != null ? d : "normal",
          color: e.color,
          text: e.text,
          textColor: e.textColor,
          outline: e.outline,
          iconContainer: e.iconContainer
        };
      const { type: k, size: y, color: h, textColor: C, mode: S } = t;
      return {
        elevation: "",
        type: (f = e.type) != null ? f : k.value,
        size: (v = e.size) != null ? v : y.value,
        color: (g = e.color) != null ? g : h.value,
        textColor: (m = e.textColor) != null ? m : C.value,
        text: S.value === "text" || S.value === "outline",
        outline: S.value === "outline",
        iconContainer: S.value === "icon-container"
      };
    });
    function l(c) {
      e.autoLoading && (o.value = !0, Promise.all(No(c)).then(() => {
        o.value = !1;
      }).catch(() => {
        o.value = !1;
      }));
    }
    function s(c) {
      const { loading: d, disabled: f, onClick: v } = e;
      !v || d || f || o.value || l(w(v, c));
    }
    function u(c) {
      const { loading: d, disabled: f, onTouchstart: v } = e;
      !v || d || f || o.value || l(w(v, c));
    }
    return {
      pending: o,
      states: i,
      hovering: r,
      n: qb,
      classes: Xb,
      handleHovering: a,
      handleClick: s,
      handleTouchstart: u,
      isFocusing: n
    };
  }
});
lf.render = Zb;
var Kr = lf;
re(Kr);
se(Kr, rf);
const L8 = Kr;
var Cn = Kr;
const sf = {
  visibilityHeight: {
    type: [Number, String],
    default: 200
  },
  duration: {
    type: Number,
    default: 300
  },
  right: [Number, String],
  elevation: {
    type: [Boolean, Number, String],
    default: !0
  },
  bottom: [Number, String],
  target: [String, Object],
  onClick: A()
}, { name: Jb, n: Qb, classes: xb } = ee("back-top");
function _b(e, n) {
  const o = te("var-icon"), t = te("var-button");
  return b(), Oe(xn, {
    to: "body",
    disabled: e.disabled
  }, [
    M(
      "div",
      Ye({
        class: e.classes(e.n(), [e.show, e.n("--active")]),
        ref: "backTopEl",
        style: {
          right: e.toSizeUnit(e.right),
          bottom: e.toSizeUnit(e.bottom)
        }
      }, e.$attrs, {
        onClick: n[0] || (n[0] = In((...r) => e.handleClick && e.handleClick(...r), ["stop"]))
      }),
      [
        V(e.$slots, "default", {}, () => [
          X(t, {
            elevation: e.elevation,
            type: "primary",
            "var-back-top-cover": ""
          }, {
            default: pe(() => [
              X(o, { name: "chevron-up" })
            ]),
            _: 1
            /* STABLE */
          }, 8, ["elevation"])
        ])
      ],
      16
      /* FULL_PROPS */
    )
  ], 8, ["disabled"]);
}
const uf = _({
  name: Jb,
  components: {
    VarButton: Cn,
    VarIcon: Xe
  },
  inheritAttrs: !1,
  props: sf,
  setup(e) {
    const n = $(!1), o = $(null), t = $(!0);
    let r;
    const a = xl(() => {
      i();
    }, 200);
    st(() => {
      s(), u(), i(), t.value = !1;
    }), Oo(u), Wt(c);
    function i() {
      n.value = Vo(r) >= xe(e.visibilityHeight);
    }
    function l(d) {
      w(e.onClick, d);
      const f = Ql(r);
      Tt(r, {
        left: f,
        duration: e.duration,
        animation: Xd
      });
    }
    function s() {
      r = e.target ? Sd(e.target, "BackTop") : So(o.value);
    }
    function u() {
      r.addEventListener("scroll", a);
    }
    function c() {
      r && r.removeEventListener("scroll", a);
    }
    return {
      disabled: t,
      show: n,
      backTopEl: o,
      toSizeUnit: Te,
      n: Qb,
      classes: xb,
      handleClick: l
    };
  }
});
uf.render = _b;
var qr = uf;
re(qr);
se(qr, sf);
const R8 = qr;
var Ni = qr;
const cf = {
  type: {
    type: String,
    default: "default"
  },
  position: {
    type: String,
    default: "right-top"
  },
  hidden: Boolean,
  value: {
    type: [String, Number],
    default: 0
  },
  maxValue: [String, Number],
  dot: Boolean,
  icon: Be(en, "name"),
  namespace: Be(en, "namespace"),
  color: String,
  offsetX: {
    type: [String, Number],
    default: 0
  },
  offsetY: {
    type: [String, Number],
    default: 0
  }
};
var e0 = Object.defineProperty, fu = Object.getOwnPropertySymbols, n0 = Object.prototype.hasOwnProperty, o0 = Object.prototype.propertyIsEnumerable, pu = (e, n, o) => n in e ? e0(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, t0 = (e, n) => {
  for (var o in n || (n = {}))
    n0.call(n, o) && pu(e, o, n[o]);
  if (fu)
    for (var o of fu(n))
      o0.call(n, o) && pu(e, o, n[o]);
  return e;
};
const { name: r0, n: a0, classes: i0 } = ee("badge"), l0 = { key: 0 };
function s0(e, n) {
  const o = te("var-icon");
  return b(), P(
    "div",
    {
      class: p(e.classes(e.n(), e.n("$--box")))
    },
    [
      V(e.$slots, "default"),
      X(Je, {
        name: e.n("$-badge-fade"),
        persisted: ""
      }, {
        default: pe(() => [
          Me(M(
            "span",
            Ye({
              class: e.classes(
                e.n("content"),
                e.n(`--${e.type}`),
                [e.$slots.default, e.n(`--${e.position}`), e.n("--offset")],
                [e.dot, e.n("--dot")],
                [e.icon, e.n("--icon")]
              ),
              style: t0({ background: e.color }, e.offsetStyle)
            }, e.$attrs),
            [
              e.icon ? (b(), Oe(o, {
                key: 0,
                class: p(e.n("icon")),
                "var-badge-cover": "",
                name: e.icon,
                namespace: e.namespace
              }, null, 8, ["class", "name", "namespace"])) : G("v-if", !0),
              V(e.$slots, "value", {}, () => [
                !e.icon && !e.dot ? (b(), P(
                  "span",
                  l0,
                  ae(e.value),
                  1
                  /* TEXT */
                )) : G("v-if", !0)
              ])
            ],
            16
            /* FULL_PROPS */
          ), [
            [Kn, !e.hidden]
          ])
        ]),
        _: 3
        /* FORWARDED */
      }, 8, ["name"])
    ],
    2
    /* CLASS */
  );
}
const df = _({
  name: r0,
  components: { VarIcon: Xe },
  inheritAttrs: !1,
  props: cf,
  setup(e) {
    const n = I(() => {
      const { value: t, maxValue: r } = e;
      return t != null && r != null && F(t) > F(r) ? `${r}+` : t;
    }), o = I(() => ({
      "--badge-offset-y": Te(e.offsetY),
      "--badge-offset-x": Te(e.offsetX)
    }));
    return {
      value: n,
      offsetStyle: o,
      n: a0,
      classes: i0
    };
  }
});
df.render = s0;
var Xr = df;
re(Xr);
se(Xr, cf);
const F8 = Xr;
var Cr = Xr;
const ff = {
  active: {
    type: [Number, String],
    default: 0
  },
  zIndex: {
    type: [Number, String],
    default: 1
  },
  fixed: Boolean,
  border: Boolean,
  variant: Boolean,
  safeArea: Boolean,
  activeColor: String,
  inactiveColor: String,
  fabProps: Object,
  onChange: A(),
  onBeforeChange: A(),
  onFabClick: A(),
  "onUpdate:active": A()
}, pf = Symbol(
  "BOTTOM_NAVIGATION_BIND_BOTTOM_NAVIGATION_ITEM_KEY"
);
function u0() {
  const { childProviders: e, length: n, bindChildren: o } = mn(
    pf
  );
  return {
    length: n,
    bottomNavigationItems: e,
    bindBottomNavigationItem: o
  };
}
var c0 = Object.defineProperty, vu = Object.getOwnPropertySymbols, d0 = Object.prototype.hasOwnProperty, f0 = Object.prototype.propertyIsEnumerable, mu = (e, n, o) => n in e ? c0(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, hu = (e, n) => {
  for (var o in n || (n = {}))
    d0.call(n, o) && mu(e, o, n[o]);
  if (vu)
    for (var o of vu(n))
      f0.call(n, o) && mu(e, o, n[o]);
  return e;
};
const { name: p0, n: v0, classes: m0 } = ee("bottom-navigation"), { n: Gr } = ee("bottom-navigation-item"), gu = Gr("--right-half-space"), bu = Gr("--left-half-space"), yu = Gr("--right-space"), h0 = {
  type: "primary"
};
function g0(e, n) {
  const o = te("var-button");
  return b(), P(
    "div",
    {
      class: p(
        e.classes(
          e.n(),
          e.n("$--box"),
          [e.fixed, e.n("--fixed")],
          [e.border, e.n("--border")],
          [e.safeArea, e.n("--safe-area")],
          [e.variant, e.n("--variant")]
        )
      ),
      ref: "bottomNavigationDom",
      style: K(`z-index:${e.zIndex}`)
    },
    [
      V(e.$slots, "default"),
      e.$slots.fab ? (b(), Oe(o, Ye({
        key: 0,
        class: e.classes(e.n("fab"), [e.length % 2, e.n("--fab-right"), e.n("--fab-center")]),
        "var-bottom-navigation__fab": "",
        onClick: e.handleFabClick
      }, e.fabProps), {
        default: pe(() => [
          V(e.$slots, "fab")
        ]),
        _: 3
        /* FORWARDED */
      }, 16, ["class", "onClick"])) : G("v-if", !0)
    ],
    6
    /* CLASS, STYLE */
  );
}
const vf = _({
  name: p0,
  components: { VarButton: Cn },
  props: ff,
  setup(e, { slots: n }) {
    const o = $(null), t = I(() => e.active), r = I(() => e.activeColor), a = I(() => e.inactiveColor), i = I(() => e.variant), l = $({}), { length: s, bottomNavigationItems: u, bindBottomNavigationItem: c } = u0();
    c({
      active: t,
      activeColor: r,
      inactiveColor: a,
      variant: i,
      onToggle: k
    }), fe(() => s.value, f), fe(
      () => e.fabProps,
      (E) => {
        l.value = hu(hu({}, h0), E);
      },
      { immediate: !0, deep: !0 }
    ), cn(() => {
      n.fab && S(s.value);
    }), Yt(() => {
      C(), n.fab && S(s.value);
    });
    function f() {
      s.value === 0 || v() || g() || m();
    }
    function v() {
      return u.find(({ name: E }) => t.value === E.value);
    }
    function g() {
      return u.find(({ index: E }) => t.value === E.value);
    }
    function m() {
      Pn(t.value) && (t.value < 0 ? w(e["onUpdate:active"], 0) : t.value > s.value - 1 && w(e["onUpdate:active"], s.value - 1));
    }
    function k(E) {
      t.value !== E && (e.onBeforeChange ? y(E) : h(E));
    }
    function y(E) {
      const D = No(w(e.onBeforeChange, E));
      Promise.all(D).then((R) => {
        R.every(Boolean) && h(E);
      });
    }
    function h(E) {
      w(e["onUpdate:active"], E), w(e.onChange, E);
    }
    function C() {
      O().forEach((D) => {
        D.classList.remove(gu, bu, yu);
      });
    }
    function S(E) {
      const D = O(), R = D.length, N = E % 2 === 0;
      D.forEach((H, L) => {
        T(N, H, L, R);
      });
    }
    function T(E, D, R, N) {
      const H = R === N - 1;
      if (!E && H) {
        D.classList.add(yu);
        return;
      }
      const L = R === N / 2 - 1, j = R === N / 2;
      L ? D.classList.add(gu) : j && D.classList.add(bu);
    }
    function O() {
      return Array.from(o.value.querySelectorAll(`.${Gr()}`));
    }
    function z() {
      w(e.onFabClick);
    }
    return {
      length: s,
      bottomNavigationDom: o,
      fabProps: l,
      n: v0,
      classes: m0,
      handleFabClick: z
    };
  }
});
vf.render = g0;
var Zr = vf;
re(Zr);
se(Zr, ff);
const U8 = Zr;
var Ai = Zr;
const mf = {
  name: String,
  label: String,
  icon: Be(en, "name"),
  namespace: Be(en, "namespace"),
  badge: {
    type: [Boolean, Object],
    default: !1
  },
  onClick: A()
};
function b0() {
  const { parentProvider: e, index: n, bindParent: o } = vn(
    pf
  );
  return o || Mn("BottomNavigationItem", "<var-bottom-navigation-item/> must in <var-bottom-navigation/>"), {
    index: n,
    bottomNavigation: e,
    bindBottomNavigation: o
  };
}
const { name: y0, n: k0, classes: $0 } = ee("bottom-navigation-item"), w0 = {
  type: "danger",
  dot: !0
};
function C0(e, n) {
  const o = te("var-icon"), t = te("var-badge"), r = Re("ripple");
  return Me((b(), P(
    "button",
    {
      class: p(e.classes(e.n(), e.n("$--box"), [e.variant, e.n("--variant-padding")], [e.isActive && !e.variant, e.n("--active")])),
      style: K({
        color: e.isActive ? e.activeColor : e.inactiveColor
      }),
      onClick: n[0] || (n[0] = (...a) => e.handleClick && e.handleClick(...a))
    },
    [
      M(
        "div",
        {
          class: p(
            e.classes(
              e.n("icon-container"),
              [e.variant, e.n("--variant-icon-container")],
              [e.isActive && e.variant, e.n("--variant-active")]
            )
          )
        },
        [
          e.badge ? (b(), Oe(t, Ye({ key: 0 }, e.badgeProps, {
            class: e.n("badge"),
            "var-bottom-navigation-item-cover": ""
          }), {
            default: pe(() => [
              V(e.$slots, "icon", { active: e.isActive }, () => [
                e.icon ? (b(), Oe(o, {
                  key: 0,
                  name: e.icon,
                  namespace: e.namespace,
                  class: p(e.n("icon")),
                  "var-bottom-navigation-item-cover": ""
                }, null, 8, ["name", "namespace", "class"])) : G("v-if", !0)
              ])
            ]),
            _: 3
            /* FORWARDED */
          }, 16, ["class"])) : V(e.$slots, "icon", {
            key: 1,
            active: e.isActive
          }, () => [
            e.icon ? (b(), Oe(o, {
              key: 0,
              name: e.icon,
              namespace: e.namespace,
              class: p(e.n("icon")),
              "var-bottom-navigation-item-cover": ""
            }, null, 8, ["name", "namespace", "class"])) : G("v-if", !0)
          ])
        ],
        2
        /* CLASS */
      ),
      M(
        "span",
        {
          class: p(e.n("label"))
        },
        [
          V(e.$slots, "default", {}, () => [
            De(
              ae(e.label),
              1
              /* TEXT */
            )
          ])
        ],
        2
        /* CLASS */
      )
    ],
    6
    /* CLASS, STYLE */
  )), [
    [r]
  ]);
}
const hf = _({
  name: y0,
  components: {
    VarBadge: Cr,
    VarIcon: Xe
  },
  directives: { Ripple: on },
  props: mf,
  setup(e) {
    const n = I(() => e.name), o = I(() => [n.value, r.value].includes(l.value)), t = I(() => e.badge === !0 ? w0 : e.badge), { index: r, bottomNavigation: a, bindBottomNavigation: i } = b0(), { active: l, activeColor: s, inactiveColor: u, variant: c } = a;
    i({
      name: n,
      index: r
    });
    function f() {
      var v;
      const g = (v = n.value) != null ? v : r.value;
      w(e.onClick, g), w(a.onToggle, g);
    }
    return {
      activeColor: s,
      inactiveColor: u,
      badgeProps: t,
      isActive: o,
      variant: c,
      n: k0,
      classes: $0,
      handleClick: f
    };
  }
});
hf.render = C0;
var Jr = hf;
re(Jr);
se(Jr, mf);
const H8 = Jr;
var Vi = Jr;
const gf = {
  separator: String,
  onClick: A()
}, bf = Symbol("BREADCRUMBS_BIND_BREADCRUMB_KEY");
function S0() {
  const { childProviders: e, bindChildren: n, length: o } = mn(
    bf
  );
  return {
    length: o,
    breadcrumbList: e,
    bindBreadcrumbList: n
  };
}
function P0() {
  const { parentProvider: e, bindParent: n, index: o } = vn(
    bf
  );
  return n || Mn("Breadcrumb", "<var-breadcrumb/> must in <var-breadcrumbs/>"), {
    index: o,
    breadcrumb: e,
    bindBreadcrumb: n
  };
}
const { name: z0, n: O0, classes: T0 } = ee("breadcrumb");
function E0(e, n) {
  return b(), P(
    "div",
    {
      class: p(e.n())
    },
    [
      M(
        "div",
        {
          class: p(e.classes(e.n("content"), [!e.isLast, e.n("--active")])),
          onClick: n[0] || (n[0] = (...o) => e.handleClick && e.handleClick(...o))
        },
        [
          V(e.$slots, "default")
        ],
        2
        /* CLASS */
      ),
      e.isLast ? G("v-if", !0) : V(e.$slots, "separator", { key: 0 }, () => {
        var o;
        return [
          M(
            "div",
            {
              class: p(e.n("separator"))
            },
            ae((o = e.separator) != null ? o : e.parentSeparator),
            3
            /* TEXT, CLASS */
          )
        ];
      })
    ],
    2
    /* CLASS */
  );
}
const yf = _({
  name: z0,
  props: gf,
  setup(e) {
    const { index: n, breadcrumb: o, bindBreadcrumb: t } = P0(), r = I(() => n.value === o.length.value - 1), a = I(() => o.separator.value);
    t(null);
    function i(l) {
      r.value || w(e.onClick, l);
    }
    return {
      n: O0,
      classes: T0,
      isLast: r,
      parentSeparator: a,
      handleClick: i
    };
  }
});
yf.render = E0;
var Qr = yf;
re(Qr);
se(Qr, gf);
const Y8 = Qr;
var Li = Qr;
const kf = {
  separator: {
    type: String,
    default: "/"
  }
}, { name: D0, n: B0 } = ee("breadcrumbs");
function I0(e, n) {
  return b(), P(
    "div",
    {
      class: p(e.n())
    },
    [
      V(e.$slots, "default")
    ],
    2
    /* CLASS */
  );
}
const $f = _({
  name: D0,
  props: kf,
  setup(e) {
    const n = I(() => e.separator), { bindBreadcrumbList: o, length: t } = S0();
    return o({
      length: t,
      separator: n
    }), { n: B0 };
  }
});
$f.render = I0;
var xr = $f;
re(xr);
se(xr, kf);
const j8 = xr;
var Ri = xr;
const wf = {
  type: {
    type: String,
    default: "default"
  },
  size: {
    type: String,
    default: "normal"
  },
  color: String,
  textColor: String,
  mode: {
    type: String,
    default: "normal"
  },
  elevation: {
    type: [Boolean, Number, String],
    default: !0
  },
  vertical: Boolean
}, { name: M0, n: N0, classes: A0 } = ee("button-group");
function V0(e, n) {
  return b(), P(
    "div",
    {
      class: p(
        e.classes(
          e.n(),
          e.n("$--box"),
          [e.mode, `${e.n(`--mode-${e.mode}`)}`],
          [e.vertical, e.n("--vertical"), e.n("--horizontal")],
          [e.mode === "normal", e.formatElevation(e.elevation, 2)]
        )
      )
    },
    [
      V(e.$slots, "default")
    ],
    2
    /* CLASS */
  );
}
const Cf = _({
  name: M0,
  props: wf,
  setup(e) {
    const { bindButtons: n } = jb(), o = {
      elevation: I(() => e.elevation),
      type: I(() => e.type),
      size: I(() => e.size),
      color: I(() => e.color),
      textColor: I(() => e.textColor),
      mode: I(() => e.mode)
    };
    return n(o), {
      n: N0,
      classes: A0,
      formatElevation: yn
    };
  }
});
Cf.render = V0;
var _r = Cf;
re(_r);
se(_r, wf);
const W8 = _r;
var Fi = _r;
const Sf = {
  src: String,
  fit: {
    type: String,
    default: "cover"
  },
  imageHeight: [String, Number],
  imageWidth: [String, Number],
  outline: Boolean,
  layout: {
    type: String,
    default: "column"
  },
  floating: Boolean,
  floatingDuration: {
    type: Number,
    default: 250
  },
  alt: String,
  title: String,
  subtitle: String,
  description: String,
  elevation: {
    type: [Boolean, Number, String],
    default: !0
  },
  ripple: Boolean,
  onClick: A(),
  "onUpdate:floating": A()
};
var ku = (e, n, o) => new Promise((t, r) => {
  var a = (s) => {
    try {
      l(o.next(s));
    } catch (u) {
      r(u);
    }
  }, i = (s) => {
    try {
      l(o.throw(s));
    } catch (u) {
      r(u);
    }
  }, l = (s) => s.done ? t(s.value) : Promise.resolve(s.value).then(a, i);
  l((o = o.apply(e, n)).next());
});
const { name: L0, n: R0, classes: F0 } = ee("card"), U0 = 500, H0 = ["src", "alt"];
function Y0(e, n) {
  const o = te("var-icon"), t = te("var-button"), r = Re("ripple");
  return Me((b(), P(
    "div",
    {
      ref: "card",
      class: p(e.classes(e.n(), [e.isRow, e.n("--layout-row")], [e.outline, e.n("--outline")], e.formatElevation(e.elevation, 1))),
      style: K({
        zIndex: e.floated ? e.zIndex : void 0
      }),
      onClick: n[0] || (n[0] = (...a) => e.handleClick && e.handleClick(...a))
    },
    [
      M(
        "div",
        {
          ref: "cardFloater",
          class: p(e.n("floater")),
          style: K({
            width: e.floaterWidth,
            height: e.floaterHeight,
            top: e.floaterTop,
            left: e.floaterLeft,
            overflow: e.floaterOverflow,
            position: e.floaterPosition,
            zIndex: e.floated ? e.zIndex : void 0,
            background: e.outline && !e.floated ? "transparent" : void 0,
            transition: e.floated ? `background-color ${e.floatingDuration}ms, color ${e.floatingDuration}ms, width ${e.floatingDuration}ms, height ${e.floatingDuration}ms, top ${e.floatingDuration}ms, left ${e.floatingDuration}ms` : void 0
          })
        },
        [
          V(e.$slots, "image", {}, () => [
            e.src ? (b(), P("img", {
              key: 0,
              class: p(e.n("image")),
              style: K({
                objectFit: e.fit,
                height: e.toSizeUnit(e.imageHeight),
                width: e.toSizeUnit(e.imageWidth)
              }),
              src: e.src,
              alt: e.alt
            }, null, 14, H0)) : G("v-if", !0)
          ]),
          M(
            "div",
            {
              class: p(e.n("container"))
            },
            [
              V(e.$slots, "title", {}, () => [
                e.title ? (b(), P(
                  "div",
                  {
                    key: 0,
                    class: p(e.n("title"))
                  },
                  ae(e.title),
                  3
                  /* TEXT, CLASS */
                )) : G("v-if", !0)
              ]),
              V(e.$slots, "subtitle", {}, () => [
                e.subtitle ? (b(), P(
                  "div",
                  {
                    key: 0,
                    class: p(e.n("subtitle"))
                  },
                  ae(e.subtitle),
                  3
                  /* TEXT, CLASS */
                )) : G("v-if", !0)
              ]),
              V(e.$slots, "description", {}, () => [
                e.description ? (b(), P(
                  "div",
                  {
                    key: 0,
                    class: p(e.n("description"))
                  },
                  ae(e.description),
                  3
                  /* TEXT, CLASS */
                )) : G("v-if", !0)
              ]),
              e.$slots.extra ? (b(), P(
                "div",
                {
                  key: 0,
                  class: p(e.n("footer"))
                },
                [
                  V(e.$slots, "extra")
                ],
                2
                /* CLASS */
              )) : G("v-if", !0),
              e.$slots["floating-content"] && !e.isRow ? (b(), P(
                "div",
                {
                  key: 1,
                  class: p(e.n("floating-content")),
                  style: K({
                    height: e.contentHeight,
                    opacity: e.opacity,
                    transition: `opacity ${e.floatingDuration * 2}ms`
                  })
                },
                [
                  V(e.$slots, "floating-content")
                ],
                6
                /* CLASS, STYLE */
              )) : G("v-if", !0)
            ],
            2
            /* CLASS */
          ),
          e.showFloatingButtons ? (b(), P(
            "div",
            {
              key: 0,
              class: p(e.classes(e.n("floating-buttons"), e.n("$--box"))),
              style: K({
                zIndex: e.zIndex,
                opacity: e.opacity,
                transition: `opacity ${e.floatingDuration * 2}ms`
              })
            },
            [
              V(e.$slots, "close-button", {}, () => [
                X(t, {
                  "var-card-cover": "",
                  class: p(e.classes(e.n("close-button"), e.n("$-elevation--6"))),
                  onClick: In(e.close, ["stop"])
                }, {
                  default: pe(() => [
                    X(o, {
                      "var-card-cover": "",
                      name: "window-close",
                      class: p(e.n("close-button-icon"))
                    }, null, 8, ["class"])
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["class", "onClick"])
              ])
            ],
            6
            /* CLASS, STYLE */
          )) : G("v-if", !0)
        ],
        6
        /* CLASS, STYLE */
      ),
      M(
        "div",
        {
          class: p(e.n("holder")),
          style: K({
            width: e.holderWidth,
            height: e.holderHeight
          })
        },
        null,
        6
        /* CLASS, STYLE */
      )
    ],
    6
    /* CLASS, STYLE */
  )), [
    [r, { disabled: !e.ripple || e.floater }]
  ]);
}
const Pf = _({
  name: L0,
  directives: { Ripple: on },
  components: {
    VarIcon: Xe,
    VarButton: Cn
  },
  props: Sf,
  setup(e) {
    const n = $(null), o = $(null), t = $("auto"), r = $("auto"), a = $("100%"), i = $("100%"), l = $("auto"), s = $("auto"), u = $(void 0), c = $("hidden"), d = $("0px"), f = $("0"), v = I(() => e.layout === "row"), g = $(!1), m = $(!1), { zIndex: k } = qt(() => e.floating, 1);
    let y = "auto", h = "auto", C = null;
    const S = $(null);
    Kt(
      () => e.floating,
      () => !v.value
    ), fe(
      () => e.floating,
      (D) => {
        v.value || He(() => {
          D ? T() : O();
        });
      },
      { immediate: !0 }
    );
    function T() {
      return ku(this, null, function* () {
        clearTimeout(S.value), clearTimeout(C), S.value = null, S.value = setTimeout(
          () => ku(this, null, function* () {
            const { width: D, height: R, left: N, top: H } = un(n.value);
            t.value = Te(D), r.value = Te(R), a.value = t.value, i.value = r.value, l.value = Te(H), s.value = Te(N), u.value = "fixed", y = l.value, h = s.value, g.value = !0, yield wn(), l.value = "0", s.value = "0", a.value = "100vw", i.value = "100vh", d.value = "auto", f.value = "1", c.value = "auto", m.value = !0;
          }),
          e.ripple ? U0 : 0
        );
      });
    }
    function O() {
      clearTimeout(C), clearTimeout(S.value), S.value = null, a.value = t.value, i.value = r.value, l.value = y, s.value = h, d.value = "0px", f.value = "0", g.value = !1, C = setTimeout(() => {
        t.value = "auto", r.value = "auto", a.value = "100%", i.value = "100%", l.value = "auto", s.value = "auto", y = "auto", h = "auto", c.value = "hidden", u.value = void 0, m.value = !1;
      }, e.floatingDuration);
    }
    function z() {
      w(e["onUpdate:floating"], !1);
    }
    function E(D) {
      w(e.onClick, D);
    }
    return {
      card: n,
      cardFloater: o,
      holderWidth: t,
      holderHeight: r,
      floater: S,
      floaterWidth: a,
      floaterHeight: i,
      floaterTop: l,
      floaterLeft: s,
      floaterPosition: u,
      floaterOverflow: c,
      contentHeight: d,
      opacity: f,
      zIndex: k,
      isRow: v,
      showFloatingButtons: g,
      floated: m,
      n: R0,
      classes: F0,
      toSizeUnit: Te,
      close: z,
      formatElevation: yn,
      handleClick: E
    };
  }
});
Pf.render = Y0;
var ea = Pf;
re(ea);
se(ea, Sf);
const K8 = ea;
var Ui = ea;
const zf = {
  title: String,
  icon: Be(en, "name"),
  namespace: Be(en, "namespace"),
  description: String,
  border: Boolean,
  borderOffset: [Number, String],
  iconClass: String,
  titleClass: String,
  descriptionClass: String,
  extraClass: String,
  ripple: Boolean,
  onClick: A()
}, { name: j0, n: W0, classes: K0 } = ee("cell");
function q0(e, n) {
  const o = te("var-icon"), t = Re("ripple");
  return Me((b(), P(
    "div",
    {
      class: p(e.classes(e.n(), [e.border, e.n("--border")], [e.onClick, e.n("--cursor")])),
      style: K(e.borderOffsetStyles),
      onClick: n[0] || (n[0] = (...r) => e.handleClick && e.handleClick(...r))
    },
    [
      V(e.$slots, "icon", {}, () => [
        e.icon ? (b(), P(
          "div",
          {
            key: 0,
            class: p(e.classes(e.n("icon"), e.iconClass))
          },
          [
            X(o, {
              name: e.icon,
              namespace: e.namespace
            }, null, 8, ["name", "namespace"])
          ],
          2
          /* CLASS */
        )) : G("v-if", !0)
      ]),
      M(
        "div",
        {
          class: p(e.n("content"))
        },
        [
          V(e.$slots, "default", {}, () => [
            e.title ? (b(), P(
              "div",
              {
                key: 0,
                class: p(e.classes(e.n("title"), e.titleClass))
              },
              ae(e.title),
              3
              /* TEXT, CLASS */
            )) : G("v-if", !0)
          ]),
          V(e.$slots, "description", {}, () => [
            e.description ? (b(), P(
              "div",
              {
                key: 0,
                class: p(e.classes(e.n("description"), e.descriptionClass))
              },
              ae(e.description),
              3
              /* TEXT, CLASS */
            )) : G("v-if", !0)
          ])
        ],
        2
        /* CLASS */
      ),
      e.$slots.extra ? (b(), P(
        "div",
        {
          key: 0,
          class: p(e.classes(e.n("extra"), e.extraClass))
        },
        [
          V(e.$slots, "extra")
        ],
        2
        /* CLASS */
      )) : G("v-if", !0)
    ],
    6
    /* CLASS, STYLE */
  )), [
    [t, { disabled: !e.ripple }]
  ]);
}
const Of = _({
  name: j0,
  components: { VarIcon: Xe },
  directives: { Ripple: on },
  props: zf,
  setup(e) {
    const n = I(() => e.borderOffset == null ? {} : {
      "--cell-border-left": Te(e.borderOffset),
      "--cell-border-right": Te(e.borderOffset)
    });
    function o(t) {
      w(e.onClick, t);
    }
    return {
      borderOffsetStyles: n,
      n: W0,
      classes: K0,
      toSizeUnit: Te,
      handleClick: o
    };
  }
});
Of.render = q0;
var na = Of;
re(na);
se(na, zf);
const q8 = na;
var Hi = na;
const Tf = {
  errorMessage: {
    type: String,
    default: ""
  },
  extraMessage: {
    type: String,
    default: ""
  }
}, { name: X0, n: G0 } = ee("form-details"), Z0 = { key: 0 }, J0 = { key: 0 };
function Q0(e, n) {
  return b(), Oe(Je, {
    name: e.n()
  }, {
    default: pe(() => [
      e.errorMessage || e.extraMessage || e.$slots["extra-message"] ? (b(), P(
        "div",
        {
          key: 0,
          class: p(e.n())
        },
        [
          M(
            "div",
            {
              class: p(e.n("error-message"))
            },
            [
              X(Je, {
                name: e.n("message")
              }, {
                default: pe(() => [
                  e.errorMessage ? (b(), P(
                    "div",
                    Z0,
                    ae(e.errorMessage),
                    1
                    /* TEXT */
                  )) : G("v-if", !0)
                ]),
                _: 1
                /* STABLE */
              }, 8, ["name"])
            ],
            2
            /* CLASS */
          ),
          M(
            "div",
            {
              class: p(e.n("extra-message"))
            },
            [
              X(Je, {
                name: e.n("message")
              }, {
                default: pe(() => [
                  V(e.$slots, "extra-message", {}, () => [
                    e.extraMessage ? (b(), P(
                      "div",
                      J0,
                      ae(e.extraMessage),
                      1
                      /* TEXT */
                    )) : G("v-if", !0)
                  ])
                ]),
                _: 3
                /* FORWARDED */
              }, 8, ["name"])
            ],
            2
            /* CLASS */
          )
        ],
        2
        /* CLASS */
      )) : G("v-if", !0)
    ]),
    _: 3
    /* FORWARDED */
  }, 8, ["name"]);
}
const Ef = _({
  name: X0,
  props: Tf,
  setup: () => ({ n: G0 })
});
Ef.render = Q0;
var oa = Ef;
re(oa);
se(oa, Tf);
const X8 = oa;
var On = oa;
const Df = {
  modelValue: {
    type: [String, Number, Boolean, Object, Array],
    default: !1
  },
  checkedValue: {
    type: [String, Number, Boolean, Object, Array],
    default: !0
  },
  uncheckedValue: {
    type: [String, Number, Boolean, Object, Array],
    default: !1
  },
  checkedColor: String,
  uncheckedColor: String,
  disabled: Boolean,
  readonly: Boolean,
  indeterminate: Boolean,
  iconSize: [String, Number],
  ripple: {
    type: Boolean,
    default: !0
  },
  validateTrigger: {
    type: Array,
    default: () => ["onChange"]
  },
  rules: Array,
  onClick: A(),
  onChange: A(),
  "onUpdate:modelValue": A(),
  "onUpdate:indeterminate": A()
}, Bf = Symbol("CHECKBOX_GROUP_BIND_CHECKBOX_KEY");
function x0() {
  const { bindChildren: e, childProviders: n, length: o } = mn(
    Bf
  );
  return {
    length: o,
    checkboxes: n,
    bindCheckboxes: e
  };
}
function _0() {
  const { bindParent: e, parentProvider: n, index: o } = vn(
    Bf
  );
  return {
    index: o,
    checkboxGroup: n,
    bindCheckboxGroup: e
  };
}
var ey = Object.defineProperty, ny = Object.defineProperties, oy = Object.getOwnPropertyDescriptors, $u = Object.getOwnPropertySymbols, ty = Object.prototype.hasOwnProperty, ry = Object.prototype.propertyIsEnumerable, wu = (e, n, o) => n in e ? ey(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, ay = (e, n) => {
  for (var o in n || (n = {}))
    ty.call(n, o) && wu(e, o, n[o]);
  if ($u)
    for (var o of $u(n))
      ry.call(n, o) && wu(e, o, n[o]);
  return e;
}, iy = (e, n) => ny(e, oy(n));
const If = Symbol("FORM_BIND_FORM_ITEM_KEY");
function Un() {
  const { parentProvider: e, index: n, bindParent: o } = vn(If), t = Uo();
  return {
    index: n,
    form: e,
    bindForm: o ? (a) => {
      o(iy(ay({}, a), { instance: t }));
    } : null
  };
}
function ly() {
  const { childProviders: e, length: n, bindChildren: o } = mn(If);
  return {
    length: n,
    formItems: e,
    bindFormItems: o
  };
}
const { name: sy, n: uy, classes: cy } = ee("checkbox"), dy = ["tabindex"];
function fy(e, n) {
  const o = te("var-icon"), t = te("var-hover-overlay"), r = te("var-form-details"), a = Re("hover"), i = Re("ripple");
  return b(), P(
    "div",
    {
      class: p(e.n("wrap")),
      onClick: n[3] || (n[3] = (...l) => e.handleClick && e.handleClick(...l))
    },
    [
      M(
        "div",
        {
          class: p(e.n())
        },
        [
          Me((b(), P("div", {
            ref: "action",
            class: p(
              e.classes(
                e.n("action"),
                [e.checked || e.isIndeterminate, e.n("--checked"), e.n("--unchecked")],
                [e.errorMessage || e.checkboxGroupErrorMessage, e.n("--error")],
                [e.formDisabled || e.disabled, e.n("--disabled")]
              )
            ),
            style: K({ color: e.checked || e.isIndeterminate ? e.checkedColor : e.uncheckedColor }),
            tabindex: e.disabled || e.formDisabled ? void 0 : "0",
            onFocus: n[0] || (n[0] = (l) => e.isFocusing = !0),
            onBlur: n[1] || (n[1] = (l) => e.isFocusing = !1)
          }, [
            e.isIndeterminate ? V(e.$slots, "indeterminate-icon", { key: 0 }, () => [
              X(o, {
                class: p(e.classes(e.n("icon"), [e.withAnimation, e.n("--with-animation")])),
                name: "minus-box",
                size: e.iconSize,
                "var-checkbox-cover": ""
              }, null, 8, ["class", "size"])
            ]) : G("v-if", !0),
            e.checked && !e.isIndeterminate ? V(e.$slots, "checked-icon", { key: 1 }, () => [
              X(o, {
                class: p(e.classes(e.n("icon"), [e.withAnimation, e.n("--with-animation")])),
                name: "checkbox-marked",
                size: e.iconSize,
                "var-checkbox-cover": ""
              }, null, 8, ["class", "size"])
            ]) : G("v-if", !0),
            !e.checked && !e.isIndeterminate ? V(e.$slots, "unchecked-icon", { key: 2 }, () => [
              X(o, {
                class: p(e.classes(e.n("icon"), [e.withAnimation, e.n("--with-animation")])),
                name: "checkbox-blank-outline",
                size: e.iconSize,
                "var-checkbox-cover": ""
              }, null, 8, ["class", "size"])
            ]) : G("v-if", !0),
            X(t, {
              hovering: !e.disabled && !e.formDisabled && e.hovering,
              focusing: !e.disabled && !e.formDisabled && e.isFocusing
            }, null, 8, ["hovering", "focusing"])
          ], 46, dy)), [
            [a, e.handleHovering, "desktop"],
            [i, { disabled: e.formReadonly || e.readonly || e.formDisabled || e.disabled || !e.ripple }]
          ]),
          e.$slots.default ? (b(), P(
            "div",
            {
              key: 0,
              class: p(
                e.classes(
                  e.n("text"),
                  [e.errorMessage || e.checkboxGroupErrorMessage, e.n("--error")],
                  [e.formDisabled || e.disabled, e.n("--disabled")]
                )
              ),
              onClick: n[2] || (n[2] = (...l) => e.handleTextClick && e.handleTextClick(...l))
            },
            [
              V(e.$slots, "default")
            ],
            2
            /* CLASS */
          )) : G("v-if", !0)
        ],
        2
        /* CLASS */
      ),
      X(r, { "error-message": e.errorMessage }, null, 8, ["error-message"])
    ],
    2
    /* CLASS */
  );
}
const Mf = _({
  name: sy,
  directives: { Ripple: on, Hover: zn },
  components: {
    VarIcon: Xe,
    VarFormDetails: On,
    VarHoverOverlay: Nn
  },
  props: Df,
  setup(e) {
    const n = $(null), o = $(!1), t = qn(e, "modelValue"), r = qn(e, "indeterminate"), a = I(() => t.value === e.checkedValue), i = I(() => e.checkedValue), l = $(!1), { checkboxGroup: s, bindCheckboxGroup: u } = _0(), { hovering: c, handleHovering: d } = Xn(), { form: f, bindForm: v } = Un(), {
      errorMessage: g,
      validateWithTrigger: m,
      validate: k,
      // expose
      resetValidation: y
    } = Fn(), h = {
      checkedValue: i,
      checked: a,
      sync: z,
      validate: L,
      resetValidation: y,
      reset: D,
      resetWithAnimation: E
    };
    w(u, h), w(v, h), je(() => window, "keydown", N), je(() => window, "keyup", H);
    function C(j) {
      He(() => {
        const { validateTrigger: q, rules: W, modelValue: ce } = e;
        m(q, j, W, ce);
      });
    }
    function S(j) {
      const { checkedValue: q, onChange: W } = e;
      t.value = j, r.value = !1, w(W, t.value), C("onChange"), j === q ? s == null || s.onChecked(q) : s == null || s.onUnchecked(q);
    }
    function T(j) {
      const { disabled: q, readonly: W, checkedValue: ce, uncheckedValue: J, onClick: ve } = e;
      if (f != null && f.disabled.value || q || (w(ve, j), f != null && f.readonly.value || W))
        return;
      l.value = !0;
      const Q = s ? s.checkedCount.value >= Number(s.max.value) : !1;
      !a.value && Q || S(a.value ? J : ce);
    }
    function O() {
      n.value.focus();
    }
    function z(j) {
      const { checkedValue: q, uncheckedValue: W } = e;
      t.value = j.includes(q) ? q : W;
    }
    function E() {
      l.value = !1;
    }
    function D() {
      t.value = e.uncheckedValue, y();
    }
    function R(j) {
      const { checkedValue: q, uncheckedValue: W } = e;
      ![q, W].includes(j) && (j = a.value ? W : q), S(j);
    }
    function N(j) {
      if (!o.value)
        return;
      const { key: q } = j;
      (q === "Enter" || q === " ") && Ae(j), q === "Enter" && n.value.click();
    }
    function H(j) {
      o.value && j.key === " " && (Ae(j), n.value.click());
    }
    function L() {
      return k(e.rules, e.modelValue);
    }
    return {
      action: n,
      isFocusing: o,
      isIndeterminate: r,
      withAnimation: l,
      checked: a,
      errorMessage: g,
      checkboxGroupErrorMessage: s == null ? void 0 : s.errorMessage,
      formDisabled: f == null ? void 0 : f.disabled,
      formReadonly: f == null ? void 0 : f.readonly,
      hovering: c,
      n: uy,
      classes: cy,
      handleHovering: d,
      handleClick: T,
      handleTextClick: O,
      toggle: R,
      reset: D,
      validate: L,
      resetValidation: y
    };
  }
});
Mf.render = fy;
var ta = Mf;
re(ta);
se(ta, Df);
const G8 = ta;
var Dt = ta;
const Nf = {
  modelValue: {
    type: Array,
    default: () => []
  },
  max: [String, Number],
  direction: {
    type: String,
    default: "horizontal"
  },
  validateTrigger: {
    type: Array,
    default: () => ["onChange"]
  },
  rules: Array,
  onChange: A(),
  "onUpdate:modelValue": A()
}, { name: py, n: vy, classes: my } = ee("checkbox-group");
function hy(e, n) {
  const o = te("var-form-details");
  return b(), P(
    "div",
    {
      class: p(e.n("wrap"))
    },
    [
      M(
        "div",
        {
          class: p(e.classes(e.n(), e.n(`--${e.direction}`)))
        },
        [
          V(e.$slots, "default")
        ],
        2
        /* CLASS */
      ),
      X(o, { "error-message": e.errorMessage }, null, 8, ["error-message"])
    ],
    2
    /* CLASS */
  );
}
const Af = _({
  name: py,
  components: { VarFormDetails: On },
  props: Nf,
  setup(e) {
    const n = I(() => e.max), o = I(() => e.modelValue.length), { length: t, checkboxes: r, bindCheckboxes: a } = x0(), { bindForm: i } = Un(), {
      errorMessage: l,
      validateWithTrigger: s,
      validate: u,
      // expose
      resetValidation: c
    } = Fn(), d = I(() => l.value), f = {
      max: n,
      checkedCount: o,
      onChecked: m,
      onUnchecked: k,
      validate: O,
      resetValidation: c,
      reset: T,
      errorMessage: d
    };
    fe(() => e.modelValue, y, { deep: !0 }), fe(() => t.value, y), a(f), w(i, f);
    function v(z) {
      He(() => {
        const { validateTrigger: E, rules: D, modelValue: R } = e;
        s(E, z, D, R);
      });
    }
    function g(z) {
      w(e["onUpdate:modelValue"], z), w(e.onChange, z), v("onChange");
    }
    function m(z) {
      const { modelValue: E } = e;
      E.includes(z) || g([...E, z]);
    }
    function k(z) {
      const { modelValue: E } = e;
      E.includes(z) && g(E.filter((D) => D !== z));
    }
    function y() {
      return r.forEach(({ sync: z }) => z(e.modelValue));
    }
    function h() {
      r.forEach((z) => z.resetWithAnimation());
    }
    function C() {
      const z = r.map(({ checkedValue: D }) => D.value), E = Is(z);
      return h(), w(e["onUpdate:modelValue"], E), E;
    }
    function S() {
      const z = r.filter(({ checked: D }) => !D.value).map(({ checkedValue: D }) => D.value), E = Is(z);
      return h(), w(e["onUpdate:modelValue"], E), E;
    }
    function T() {
      w(e["onUpdate:modelValue"], []), c();
    }
    function O() {
      return u(e.rules, e.modelValue);
    }
    return {
      errorMessage: l,
      n: vy,
      classes: my,
      checkAll: C,
      inverseAll: S,
      reset: T,
      validate: O,
      resetValidation: c
    };
  }
});
Af.render = hy;
var ra = Af;
re(ra);
se(ra, Nf);
const Z8 = ra;
var Yi = ra;
const Vf = {
  type: {
    type: String,
    default: "default"
  },
  size: {
    type: String,
    default: "normal"
  },
  color: String,
  textColor: String,
  iconName: Be(en, "name"),
  namespace: Be(en, "namespace"),
  plain: Boolean,
  round: {
    type: Boolean,
    default: !0
  },
  block: Boolean,
  closeable: Boolean,
  onClose: A()
}, { name: gy, n: so, classes: by } = ee("chip");
function yy(e, n) {
  const o = te("var-icon");
  return b(), Oe(Je, {
    name: e.n("$-fade")
  }, {
    default: pe(() => [
      M(
        "span",
        Ye({
          class: e.classes(e.n(), e.n("$--box"), ...e.contentClass),
          style: e.chipStyle
        }, e.$attrs),
        [
          V(e.$slots, "left"),
          M(
            "span",
            {
              class: p(e.n(`text-${e.size}`))
            },
            [
              V(e.$slots, "default")
            ],
            2
            /* CLASS */
          ),
          V(e.$slots, "right"),
          e.closeable ? (b(), P(
            "span",
            {
              key: 0,
              class: p(e.n("--close")),
              onClick: n[0] || (n[0] = (...t) => e.handleClose && e.handleClose(...t))
            },
            [
              X(o, {
                name: `${e.iconName ? e.iconName : "close-circle"}`,
                namespace: e.namespace
              }, null, 8, ["name", "namespace"])
            ],
            2
            /* CLASS */
          )) : G("v-if", !0)
        ],
        16
        /* FULL_PROPS */
      )
    ]),
    _: 3
    /* FORWARDED */
  }, 8, ["name"]);
}
const Lf = _({
  name: gy,
  components: {
    VarIcon: Xe
  },
  inheritAttrs: !1,
  props: Vf,
  setup(e) {
    const n = I(() => {
      const { plain: r, textColor: a, color: i } = e;
      return r ? {
        color: a || i,
        borderColor: i
      } : {
        color: a,
        background: i
      };
    }), o = I(() => {
      const { size: r, block: a, type: i, plain: l, round: s } = e, u = so(a ? "$--flex" : "$--inline-flex"), c = l ? `${so("plain")} ${so(`plain-${i}`)}` : so(`--${i}`), d = s ? so("--round") : null;
      return [so(`--${r}`), u, c, d];
    });
    function t(r) {
      w(e.onClose, r);
    }
    return {
      chipStyle: n,
      contentClass: o,
      n: so,
      classes: by,
      handleClose: t
    };
  }
});
Lf.render = yy;
var aa = Lf;
re(aa);
se(aa, Vf);
const J8 = aa;
var Sr = aa;
const Rf = {
  span: {
    type: [String, Number],
    default: 24
  },
  offset: {
    type: [String, Number],
    default: 0
  },
  direction: {
    type: String,
    default: "row"
  },
  justify: String,
  align: String,
  xs: [Object, Number, String],
  sm: [Object, Number, String],
  md: [Object, Number, String],
  lg: [Object, Number, String],
  xl: [Object, Number, String],
  onClick: A()
}, Ff = Symbol("ROW_BIND_COL_KEY");
function ky() {
  const { bindChildren: e, childProviders: n, length: o } = mn(Ff);
  return {
    length: o,
    cols: n,
    bindCols: e
  };
}
function $y() {
  const { parentProvider: e, index: n, bindParent: o } = vn(Ff);
  return {
    index: n,
    row: e,
    bindRow: o
  };
}
const { name: wy, n: er, classes: Cy } = ee("col");
function Sy(e, n) {
  return b(), P(
    "div",
    {
      class: p(
        e.classes(
          e.n(),
          e.n("$--box"),
          [e.span >= 0, e.n(`--span-${e.span}`)],
          [e.offset, e.n(`--offset-${e.offset}`)],
          ...e.getSize("xs", e.xs),
          ...e.getSize("sm", e.sm),
          ...e.getSize("md", e.md),
          ...e.getSize("lg", e.lg),
          ...e.getSize("xl", e.xl)
        )
      ),
      style: K({
        flexDirection: e.direction,
        justifyContent: e.padStartFlex(e.justify),
        alignItems: e.padStartFlex(e.align),
        paddingLeft: e.toSizeUnit(e.padding.left),
        paddingRight: e.toSizeUnit(e.padding.right),
        paddingTop: e.toSizeUnit(e.padding.top),
        paddingBottom: e.toSizeUnit(e.padding.bottom)
      }),
      onClick: n[0] || (n[0] = (...o) => e.handleClick && e.handleClick(...o))
    },
    [
      V(e.$slots, "default")
    ],
    6
    /* CLASS, STYLE */
  );
}
const Uf = _({
  name: wy,
  props: Rf,
  setup(e) {
    const n = I(() => F(e.span)), o = I(() => F(e.offset)), t = $({ left: 0, right: 0, top: 0, bottom: 0 }), { row: r, bindRow: a } = $y(), i = {
      setPadding(u) {
        t.value = u;
      }
    };
    fe([() => e.span, () => e.offset], () => {
      r == null || r.computePadding();
    }), w(a, i);
    function l(u, c) {
      const d = [];
      if (c == null)
        return d;
      if (_o(c)) {
        const { offset: f, span: v } = c;
        Number(v) >= 0 && d.push(er(`--span-${u}-${v}`)), f && d.push(er(`--offset-${u}-${f}`));
      } else
        Number(c) >= 0 && d.push(er(`--span-${u}-${c}`));
      return d;
    }
    function s(u) {
      w(e.onClick, u);
    }
    return {
      span: n,
      offset: o,
      padding: t,
      n: er,
      classes: Cy,
      toNumber: F,
      toSizeUnit: Te,
      getSize: l,
      handleClick: s,
      padStartFlex: $r
    };
  }
});
Uf.render = Sy;
var ia = Uf;
re(ia);
se(ia, Rf);
const Q8 = ia;
var ji = ia;
const Hf = Symbol("COLLAPSE_BIND_COLLAPSE_ITEM_KEY");
function Py() {
  const { childProviders: e, length: n, bindChildren: o } = mn(
    Hf
  );
  return {
    length: n,
    collapseItems: e,
    bindCollapseItems: o
  };
}
const Yf = {
  modelValue: [Array, String, Number],
  accordion: Boolean,
  offset: {
    type: Boolean,
    default: !0
  },
  divider: {
    type: Boolean,
    default: !0
  },
  elevation: {
    type: [Boolean, String, Number],
    default: !0
  },
  onChange: A(),
  "onUpdate:modelValue": A()
}, { name: zy, n: Oy } = ee("collapse");
function Ty(e, n) {
  return b(), P(
    "div",
    {
      class: p(e.n())
    },
    [
      V(e.$slots, "default")
    ],
    2
    /* CLASS */
  );
}
const jf = _({
  name: zy,
  props: Yf,
  setup(e) {
    const n = I(() => e.offset), o = I(() => e.divider), t = I(() => e.elevation), r = I(() => No(e.modelValue)), { length: a, collapseItems: i, bindCollapseItems: l } = Py(), s = {
      offset: n,
      divider: o,
      elevation: t,
      updateItem: u
    };
    fe(
      () => a.value,
      () => He().then(f)
    ), fe(
      () => e.modelValue,
      () => He().then(f)
    ), l(s);
    function u(g, m) {
      if (e.accordion) {
        c(m ? g : void 0);
        return;
      }
      const k = m ? [...r.value, g] : r.value.filter((y) => y !== g);
      c(k);
    }
    function c(g) {
      w(e["onUpdate:modelValue"], g), w(e.onChange, g);
    }
    function d() {
      if (e.accordion) {
        const [k] = r.value;
        if (k == null)
          return;
        const y = i.find(({ name: h }) => k === h.value);
        return y ?? i.find(({ index: h, name: C }) => C.value == null && k === h.value);
      }
      const g = i.filter(
        ({ name: k }) => k.value != null && r.value.includes(k.value)
      ), m = i.filter(
        ({ index: k, name: y }) => y.value == null && r.value.includes(k.value)
      );
      return [...g, ...m];
    }
    function f() {
      const g = hh(No(d()));
      i.forEach((m) => {
        m.init(g.includes(m));
      });
    }
    return {
      divider: o,
      n: Oy,
      toggleAll: (g) => {
        if (e.accordion)
          return;
        const k = i.filter((y) => {
          var h;
          const C = (h = y.name.value) != null ? h : y.index.value, S = r.value.includes(C);
          return g.skipDisabled && y.disabled.value ? S : g.expand === "inverse" ? !S : g.expand;
        }).map((y) => {
          var h;
          return (h = y.name.value) != null ? h : y.index.value;
        });
        c(k);
      }
    };
  }
});
jf.render = Ty;
var la = jf;
re(la);
se(la, Yf);
const x8 = la;
var Wi = la;
function Ey() {
  const { parentProvider: e, index: n, bindParent: o } = vn(
    Hf
  );
  return o || Mn("Collapse", "<var-collapse-item/> must in <var-collapse>"), {
    index: n,
    collapse: e,
    bindCollapse: o
  };
}
const Wf = {
  name: [String, Number],
  title: String,
  icon: {
    type: String,
    default: "chevron-down"
  },
  disabled: Boolean
};
var Cu = (e, n, o) => new Promise((t, r) => {
  var a = (s) => {
    try {
      l(o.next(s));
    } catch (u) {
      r(u);
    }
  }, i = (s) => {
    try {
      l(o.throw(s));
    } catch (u) {
      r(u);
    }
  }, l = (s) => s.done ? t(s.value) : Promise.resolve(s.value).then(a, i);
  l((o = o.apply(e, n)).next());
});
function Kf(e) {
  const { contentEl: n, showContent: o, expand: t } = e;
  let r = !0;
  fe(
    t,
    (u) => {
      He(() => {
        u ? a() : i();
      });
    },
    { immediate: !0 }
  );
  function a() {
    return Cu(this, null, function* () {
      if (!n.value || (n.value.style.height = "", o.value = !0, yield fr(), !n.value))
        return;
      const { offsetHeight: u } = n.value;
      n.value.style.height = "0px", yield fr(), n.value && (n.value.style.height = u + "px", r && (yield wn(), r && l()));
    });
  }
  const i = () => Cu(this, null, function* () {
    if (!n.value)
      return;
    const { offsetHeight: u } = n.value;
    n.value.style.height = u + "px", yield fr(), n.value.style.height = "0px";
  }), l = () => {
    t.value || (o.value = !1), n.value.style.height = "";
  };
  return {
    handleTransitionEnd: l,
    handleTransitionStart: () => {
      r = !1;
    }
  };
}
const { name: Dy, n: By, classes: Iy } = ee("collapse-item");
function My(e, n) {
  const o = te("var-icon");
  return b(), P(
    "div",
    {
      class: p(e.classes(e.n(), [e.offset && e.isShow, e.n("--active")], [e.disabled, e.n("--disable")])),
      style: K(`--collapse-divider-top: ${e.divider ? "var(--collapse-border-top)" : "none"}`)
    },
    [
      M(
        "div",
        {
          class: p(e.classes(e.n("shadow"), e.formatElevation(e.elevation, 2)))
        },
        null,
        2
        /* CLASS */
      ),
      M(
        "div",
        {
          class: p(e.n("header")),
          onClick: n[0] || (n[0] = (...t) => e.toggle && e.toggle(...t))
        },
        [
          e.$slots.title || e.title ? (b(), P(
            "div",
            {
              key: 0,
              class: p(e.n("header-title"))
            },
            [
              V(e.$slots, "title", {}, () => [
                De(
                  ae(e.title),
                  1
                  /* TEXT */
                )
              ])
            ],
            2
            /* CLASS */
          )) : G("v-if", !0),
          M(
            "div",
            {
              class: p(e.n("header-icon"))
            },
            [
              V(e.$slots, "icon", {}, () => [
                X(o, {
                  name: e.icon,
                  transition: 250,
                  class: p(
                    e.classes(
                      e.n("header-icon"),
                      [e.isShow && e.icon === "chevron-down", e.n("header-open")],
                      [e.disabled, e.n("header--disable")]
                    )
                  )
                }, null, 8, ["name", "class"])
              ])
            ],
            2
            /* CLASS */
          )
        ],
        2
        /* CLASS */
      ),
      Me(M(
        "div",
        {
          class: p(e.n("content")),
          ref: "contentEl",
          onTransitionend: n[1] || (n[1] = (...t) => e.handleTransitionEnd && e.handleTransitionEnd(...t)),
          onTransitionstart: n[2] || (n[2] = (...t) => e.handleTransitionStart && e.handleTransitionStart(...t))
        },
        [
          M(
            "div",
            {
              class: p(e.n("content-wrap"))
            },
            [
              V(e.$slots, "default")
            ],
            2
            /* CLASS */
          )
        ],
        34
        /* CLASS, NEED_HYDRATION */
      ), [
        [Kn, e.showContent]
      ])
    ],
    6
    /* CLASS, STYLE */
  );
}
const qf = _({
  name: Dy,
  components: {
    VarIcon: Xe
  },
  props: Wf,
  setup(e) {
    const n = $(!1), o = $(!1), t = $(null), r = I(() => e.name), a = I(() => e.disabled), { index: i, collapse: l, bindCollapse: s } = Ey(), { offset: u, divider: c, elevation: d, updateItem: f } = l;
    s({
      index: i,
      name: r,
      disabled: a,
      init: k
    });
    const { handleTransitionEnd: g, handleTransitionStart: m } = Kf({
      contentEl: t,
      showContent: o,
      expand: n
    });
    function k(h) {
      n.value = h;
    }
    function y() {
      var h;
      e.disabled || f((h = e.name) != null ? h : i.value, !n.value);
    }
    return {
      isShow: n,
      showContent: o,
      offset: u,
      divider: c,
      elevation: d,
      contentEl: t,
      n: By,
      classes: Iy,
      toggle: y,
      formatElevation: yn,
      handleTransitionEnd: g,
      handleTransitionStart: m
    };
  }
});
qf.render = My;
var sa = qf;
re(sa);
se(sa, Wf);
const _8 = sa;
var Ki = sa;
const Xf = {
  expand: Boolean
}, { name: Ny, n: Ay } = ee("collapse-transition");
function Vy(e, n) {
  return Me((b(), P(
    "div",
    {
      class: p(e.n("content")),
      ref: "contentEl",
      onTransitionend: n[0] || (n[0] = (...o) => e.handleTransitionEnd && e.handleTransitionEnd(...o)),
      onTransitionstart: n[1] || (n[1] = (...o) => e.handleTransitionStart && e.handleTransitionStart(...o))
    },
    [
      V(e.$slots, "default")
    ],
    34
    /* CLASS, NEED_HYDRATION */
  )), [
    [Kn, e.showContent]
  ]);
}
const Gf = _({
  name: Ny,
  props: Xf,
  setup(e) {
    const n = $(!1), o = $(null), t = I(() => e.expand), { handleTransitionEnd: r, handleTransitionStart: a } = Kf({
      contentEl: o,
      showContent: n,
      expand: t
    });
    return {
      showContent: n,
      contentEl: o,
      n: Ay,
      handleTransitionEnd: r,
      handleTransitionStart: a
    };
  }
});
Gf.render = Vy;
var ua = Gf;
re(ua);
se(ua, Xf);
const e5 = ua;
var qi = ua;
const Zf = {
  time: {
    type: [String, Number],
    default: 0
  },
  format: {
    type: String,
    default: "HH : mm : ss"
  },
  autoStart: {
    type: Boolean,
    default: !0
  },
  onEnd: A(),
  onChange: A()
}, { name: Ly, n: Ry } = ee("countdown"), Xi = 1e3, Gi = 60 * Xi, Zi = 60 * Gi, Su = 24 * Zi;
function Fy(e, n) {
  return b(), P(
    "div",
    {
      class: p(e.n())
    },
    [
      V(e.$slots, "default", yo(jt(e.timeData)), () => [
        De(
          ae(e.showTime),
          1
          /* TEXT */
        )
      ])
    ],
    2
    /* CLASS */
  );
}
const Jf = _({
  name: Ly,
  props: Zf,
  setup(e) {
    const n = $(""), o = $({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      milliseconds: 0
    });
    let t = 0, r = !1, a = 0, i = 0, l;
    fe(
      () => e.time,
      () => {
        v(), e.autoStart && d();
      }
    ), st(() => {
      c(), e.autoStart && d();
    }), Oo(() => {
      l != null && (r = l, r === !0 && d(!0));
    }), ut(() => {
      l = r, f();
    }), Ht(f);
    function s(g, m) {
      const k = Object.values(m), y = ["DD", "HH", "mm", "ss"], h = [24, 60, 60, 1e3];
      if (y.forEach((C, S) => {
        g.includes(C) ? g = g.replace(C, Lo(`${k[S]}`, 2, "0")) : k[S + 1] += k[S] * h[S];
      }), g.includes("S")) {
        const C = Lo(`${k[k.length - 1]}`, 3, "0");
        g.includes("SSS") ? g = g.replace("SSS", C) : g.includes("SS") ? g = g.replace("SS", C.slice(0, 2)) : g = g.replace("S", C.slice(0, 1));
      }
      return g;
    }
    function u(g) {
      const m = Math.floor(g / Su), k = Math.floor(g % Su / Zi), y = Math.floor(g % Zi / Gi), h = Math.floor(g % Gi / Xi), C = Math.floor(g % Xi), S = {
        days: m,
        hours: k,
        minutes: y,
        seconds: h,
        milliseconds: C
      };
      o.value = S, w(e.onChange, o.value), n.value = s(e.format, S);
    }
    function c() {
      const { time: g, onEnd: m } = e, k = performance.now();
      if (t || (t = k + F(g)), i = t - k, i < 0 && (i = 0), u(i), i === 0) {
        w(m);
        return;
      }
      r && (a = Ot(c));
    }
    function d(g = !1) {
      r && !g || (r = !0, t = performance.now() + (i || F(e.time)), c());
    }
    function f() {
      r = !1, Ms(a);
    }
    function v() {
      t = 0, r = !1, Ms(a), c();
    }
    return {
      showTime: n,
      timeData: o,
      n: Ry,
      start: d,
      pause: f,
      reset: v
    };
  }
});
Jf.render = Fy;
var ca = Jf;
re(ca);
se(ca, Zf);
const n5 = ca;
var Ji = ca;
/*!
 *  decimal.js v10.4.0
 *  An arbitrary-precision Decimal type for JavaScript.
 *  https://github.com/MikeMcl/decimal.js
 *  Copyright (c) 2022 Michael Mclaughlin <M8ch88l@gmail.com>
 *  MIT Licence
 */
var Xo = 9e15, Do = 1e9, Qi = "0123456789abcdef", Pr = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058", zr = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789", xi = {
  // These values must be integers within the stated ranges (inclusive).
  // Most of these values can be changed at run-time using the `Decimal.config` method.
  // The maximum number of significant digits of the result of a calculation or base conversion.
  // E.g. `Decimal.config({ precision: 20 });`
  precision: 20,
  // 1 to MAX_DIGITS
  // The rounding mode used when rounding to `precision`.
  //
  // ROUND_UP         0 Away from zero.
  // ROUND_DOWN       1 Towards zero.
  // ROUND_CEIL       2 Towards +Infinity.
  // ROUND_FLOOR      3 Towards -Infinity.
  // ROUND_HALF_UP    4 Towards nearest neighbour. If equidistant, up.
  // ROUND_HALF_DOWN  5 Towards nearest neighbour. If equidistant, down.
  // ROUND_HALF_EVEN  6 Towards nearest neighbour. If equidistant, towards even neighbour.
  // ROUND_HALF_CEIL  7 Towards nearest neighbour. If equidistant, towards +Infinity.
  // ROUND_HALF_FLOOR 8 Towards nearest neighbour. If equidistant, towards -Infinity.
  //
  // E.g.
  // `Decimal.rounding = 4;`
  // `Decimal.rounding = Decimal.ROUND_HALF_UP;`
  rounding: 4,
  // 0 to 8
  // The modulo mode used when calculating the modulus: a mod n.
  // The quotient (q = a / n) is calculated according to the corresponding rounding mode.
  // The remainder (r) is calculated as: r = a - n * q.
  //
  // UP         0 The remainder is positive if the dividend is negative, else is negative.
  // DOWN       1 The remainder has the same sign as the dividend (JavaScript %).
  // FLOOR      3 The remainder has the same sign as the divisor (Python %).
  // HALF_EVEN  6 The IEEE 754 remainder function.
  // EUCLID     9 Euclidian division. q = sign(n) * floor(a / abs(n)). Always positive.
  //
  // Truncated division (1), floored division (3), the IEEE 754 remainder (6), and Euclidian
  // division (9) are commonly used for the modulus operation. The other rounding modes can also
  // be used, but they may not give useful results.
  modulo: 1,
  // 0 to 9
  // The exponent value at and beneath which `toString` returns exponential notation.
  // JavaScript numbers: -7
  toExpNeg: -7,
  // 0 to -EXP_LIMIT
  // The exponent value at and above which `toString` returns exponential notation.
  // JavaScript numbers: 21
  toExpPos: 21,
  // 0 to EXP_LIMIT
  // The minimum exponent value, beneath which underflow to zero occurs.
  // JavaScript numbers: -324  (5e-324)
  minE: -Xo,
  // -1 to -EXP_LIMIT
  // The maximum exponent value, above which overflow to Infinity occurs.
  // JavaScript numbers: 308  (1.7976931348623157e+308)
  maxE: Xo,
  // 1 to EXP_LIMIT
  // Whether to use cryptographically-secure random number generation, if available.
  crypto: !1
  // true/false
}, Qf, ro, Ee = !0, da = "[DecimalError] ", Po = da + "Invalid argument: ", xf = da + "Precision limit exceeded", _f = da + "crypto unavailable", ep = "[object Decimal]", gn = Math.floor, sn = Math.pow, Uy = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i, Hy = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i, Yy = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i, np = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, Wn = 1e7, Pe = 7, jy = 9007199254740991, Wy = Pr.length - 1, _i = zr.length - 1, Z = { toStringTag: ep };
Z.absoluteValue = Z.abs = function() {
  var e = new this.constructor(this);
  return e.s < 0 && (e.s = 1), Ce(e);
};
Z.ceil = function() {
  return Ce(new this.constructor(this), this.e + 1, 2);
};
Z.clampedTo = Z.clamp = function(e, n) {
  var o, t = this, r = t.constructor;
  if (e = new r(e), n = new r(n), !e.s || !n.s)
    return new r(NaN);
  if (e.gt(n))
    throw Error(Po + n);
  return o = t.cmp(e), o < 0 ? e : t.cmp(n) > 0 ? n : new r(t);
};
Z.comparedTo = Z.cmp = function(e) {
  var n, o, t, r, a = this, i = a.d, l = (e = new a.constructor(e)).d, s = a.s, u = e.s;
  if (!i || !l)
    return !s || !u ? NaN : s !== u ? s : i === l ? 0 : !i ^ s < 0 ? 1 : -1;
  if (!i[0] || !l[0])
    return i[0] ? s : l[0] ? -u : 0;
  if (s !== u)
    return s;
  if (a.e !== e.e)
    return a.e > e.e ^ s < 0 ? 1 : -1;
  for (t = i.length, r = l.length, n = 0, o = t < r ? t : r; n < o; ++n)
    if (i[n] !== l[n])
      return i[n] > l[n] ^ s < 0 ? 1 : -1;
  return t === r ? 0 : t > r ^ s < 0 ? 1 : -1;
};
Z.cosine = Z.cos = function() {
  var e, n, o = this, t = o.constructor;
  return o.d ? o.d[0] ? (e = t.precision, n = t.rounding, t.precision = e + Math.max(o.e, o.sd()) + Pe, t.rounding = 1, o = Ky(t, ip(t, o)), t.precision = e, t.rounding = n, Ce(ro == 2 || ro == 3 ? o.neg() : o, e, n, !0)) : new t(1) : new t(NaN);
};
Z.cubeRoot = Z.cbrt = function() {
  var e, n, o, t, r, a, i, l, s, u, c = this, d = c.constructor;
  if (!c.isFinite() || c.isZero())
    return new d(c);
  for (Ee = !1, a = c.s * sn(c.s * c, 1 / 3), !a || Math.abs(a) == 1 / 0 ? (o = fn(c.d), e = c.e, (a = (e - o.length + 1) % 3) && (o += a == 1 || a == -2 ? "0" : "00"), a = sn(o, 1 / 3), e = gn((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2)), a == 1 / 0 ? o = "5e" + e : (o = a.toExponential(), o = o.slice(0, o.indexOf("e") + 1) + e), t = new d(o), t.s = c.s) : t = new d(a.toString()), i = (e = d.precision) + 3; ; )
    if (l = t, s = l.times(l).times(l), u = s.plus(c), t = qe(u.plus(c).times(l), u.plus(s), i + 2, 1), fn(l.d).slice(0, i) === (o = fn(t.d)).slice(0, i))
      if (o = o.slice(i - 3, i + 1), o == "9999" || !r && o == "4999") {
        if (!r && (Ce(l, e + 1, 0), l.times(l).times(l).eq(c))) {
          t = l;
          break;
        }
        i += 4, r = 1;
      } else {
        (!+o || !+o.slice(1) && o.charAt(0) == "5") && (Ce(t, e + 1, 1), n = !t.times(t).times(t).eq(c));
        break;
      }
  return Ee = !0, Ce(t, e, d.rounding, n);
};
Z.decimalPlaces = Z.dp = function() {
  var e, n = this.d, o = NaN;
  if (n) {
    if (e = n.length - 1, o = (e - gn(this.e / Pe)) * Pe, e = n[e], e)
      for (; e % 10 == 0; e /= 10)
        o--;
    o < 0 && (o = 0);
  }
  return o;
};
Z.dividedBy = Z.div = function(e) {
  return qe(this, new this.constructor(e));
};
Z.dividedToIntegerBy = Z.divToInt = function(e) {
  var n = this, o = n.constructor;
  return Ce(qe(n, new o(e), 0, 1, 1), o.precision, o.rounding);
};
Z.equals = Z.eq = function(e) {
  return this.cmp(e) === 0;
};
Z.floor = function() {
  return Ce(new this.constructor(this), this.e + 1, 3);
};
Z.greaterThan = Z.gt = function(e) {
  return this.cmp(e) > 0;
};
Z.greaterThanOrEqualTo = Z.gte = function(e) {
  var n = this.cmp(e);
  return n == 1 || n === 0;
};
Z.hyperbolicCosine = Z.cosh = function() {
  var e, n, o, t, r, a = this, i = a.constructor, l = new i(1);
  if (!a.isFinite())
    return new i(a.s ? 1 / 0 : NaN);
  if (a.isZero())
    return l;
  o = i.precision, t = i.rounding, i.precision = o + Math.max(a.e, a.sd()) + 4, i.rounding = 1, r = a.d.length, r < 32 ? (e = Math.ceil(r / 3), n = (1 / pa(4, e)).toString()) : (e = 16, n = "2.3283064365386962890625e-10"), a = tt(i, 1, a.times(n), new i(1), !0);
  for (var s, u = e, c = new i(8); u--; )
    s = a.times(a), a = l.minus(s.times(c.minus(s.times(c))));
  return Ce(a, i.precision = o, i.rounding = t, !0);
};
Z.hyperbolicSine = Z.sinh = function() {
  var e, n, o, t, r = this, a = r.constructor;
  if (!r.isFinite() || r.isZero())
    return new a(r);
  if (n = a.precision, o = a.rounding, a.precision = n + Math.max(r.e, r.sd()) + 4, a.rounding = 1, t = r.d.length, t < 3)
    r = tt(a, 2, r, r, !0);
  else {
    e = 1.4 * Math.sqrt(t), e = e > 16 ? 16 : e | 0, r = r.times(1 / pa(5, e)), r = tt(a, 2, r, r, !0);
    for (var i, l = new a(5), s = new a(16), u = new a(20); e--; )
      i = r.times(r), r = r.times(l.plus(i.times(s.times(i).plus(u))));
  }
  return a.precision = n, a.rounding = o, Ce(r, n, o, !0);
};
Z.hyperbolicTangent = Z.tanh = function() {
  var e, n, o = this, t = o.constructor;
  return o.isFinite() ? o.isZero() ? new t(o) : (e = t.precision, n = t.rounding, t.precision = e + 7, t.rounding = 1, qe(o.sinh(), o.cosh(), t.precision = e, t.rounding = n)) : new t(o.s);
};
Z.inverseCosine = Z.acos = function() {
  var e, n = this, o = n.constructor, t = n.abs().cmp(1), r = o.precision, a = o.rounding;
  return t !== -1 ? t === 0 ? n.isNeg() ? jn(o, r, a) : new o(0) : new o(NaN) : n.isZero() ? jn(o, r + 4, a).times(0.5) : (o.precision = r + 6, o.rounding = 1, n = n.asin(), e = jn(o, r + 4, a).times(0.5), o.precision = r, o.rounding = a, e.minus(n));
};
Z.inverseHyperbolicCosine = Z.acosh = function() {
  var e, n, o = this, t = o.constructor;
  return o.lte(1) ? new t(o.eq(1) ? 0 : NaN) : o.isFinite() ? (e = t.precision, n = t.rounding, t.precision = e + Math.max(Math.abs(o.e), o.sd()) + 4, t.rounding = 1, Ee = !1, o = o.times(o).minus(1).sqrt().plus(o), Ee = !0, t.precision = e, t.rounding = n, o.ln()) : new t(o);
};
Z.inverseHyperbolicSine = Z.asinh = function() {
  var e, n, o = this, t = o.constructor;
  return !o.isFinite() || o.isZero() ? new t(o) : (e = t.precision, n = t.rounding, t.precision = e + 2 * Math.max(Math.abs(o.e), o.sd()) + 6, t.rounding = 1, Ee = !1, o = o.times(o).plus(1).sqrt().plus(o), Ee = !0, t.precision = e, t.rounding = n, o.ln());
};
Z.inverseHyperbolicTangent = Z.atanh = function() {
  var e, n, o, t, r = this, a = r.constructor;
  return r.isFinite() ? r.e >= 0 ? new a(r.abs().eq(1) ? r.s / 0 : r.isZero() ? r : NaN) : (e = a.precision, n = a.rounding, t = r.sd(), Math.max(t, e) < 2 * -r.e - 1 ? Ce(new a(r), e, n, !0) : (a.precision = o = t - r.e, r = qe(r.plus(1), new a(1).minus(r), o + e, 1), a.precision = e + 4, a.rounding = 1, r = r.ln(), a.precision = e, a.rounding = n, r.times(0.5))) : new a(NaN);
};
Z.inverseSine = Z.asin = function() {
  var e, n, o, t, r = this, a = r.constructor;
  return r.isZero() ? new a(r) : (n = r.abs().cmp(1), o = a.precision, t = a.rounding, n !== -1 ? n === 0 ? (e = jn(a, o + 4, t).times(0.5), e.s = r.s, e) : new a(NaN) : (a.precision = o + 6, a.rounding = 1, r = r.div(new a(1).minus(r.times(r)).sqrt().plus(1)).atan(), a.precision = o, a.rounding = t, r.times(2)));
};
Z.inverseTangent = Z.atan = function() {
  var e, n, o, t, r, a, i, l, s, u = this, c = u.constructor, d = c.precision, f = c.rounding;
  if (u.isFinite()) {
    if (u.isZero())
      return new c(u);
    if (u.abs().eq(1) && d + 4 <= _i)
      return i = jn(c, d + 4, f).times(0.25), i.s = u.s, i;
  } else {
    if (!u.s)
      return new c(NaN);
    if (d + 4 <= _i)
      return i = jn(c, d + 4, f).times(0.5), i.s = u.s, i;
  }
  for (c.precision = l = d + 10, c.rounding = 1, o = Math.min(28, l / Pe + 2 | 0), e = o; e; --e)
    u = u.div(u.times(u).plus(1).sqrt().plus(1));
  for (Ee = !1, n = Math.ceil(l / Pe), t = 1, s = u.times(u), i = new c(u), r = u; e !== -1; )
    if (r = r.times(s), a = i.minus(r.div(t += 2)), r = r.times(s), i = a.plus(r.div(t += 2)), i.d[n] !== void 0)
      for (e = n; i.d[e] === a.d[e] && e--; )
        ;
  return o && (i = i.times(2 << o - 1)), Ee = !0, Ce(i, c.precision = d, c.rounding = f, !0);
};
Z.isFinite = function() {
  return !!this.d;
};
Z.isInteger = Z.isInt = function() {
  return !!this.d && gn(this.e / Pe) > this.d.length - 2;
};
Z.isNaN = function() {
  return !this.s;
};
Z.isNegative = Z.isNeg = function() {
  return this.s < 0;
};
Z.isPositive = Z.isPos = function() {
  return this.s > 0;
};
Z.isZero = function() {
  return !!this.d && this.d[0] === 0;
};
Z.lessThan = Z.lt = function(e) {
  return this.cmp(e) < 0;
};
Z.lessThanOrEqualTo = Z.lte = function(e) {
  return this.cmp(e) < 1;
};
Z.logarithm = Z.log = function(e) {
  var n, o, t, r, a, i, l, s, u = this, c = u.constructor, d = c.precision, f = c.rounding, v = 5;
  if (e == null)
    e = new c(10), n = !0;
  else {
    if (e = new c(e), o = e.d, e.s < 0 || !o || !o[0] || e.eq(1))
      return new c(NaN);
    n = e.eq(10);
  }
  if (o = u.d, u.s < 0 || !o || !o[0] || u.eq(1))
    return new c(o && !o[0] ? -1 / 0 : u.s != 1 ? NaN : o ? 0 : 1 / 0);
  if (n)
    if (o.length > 1)
      a = !0;
    else {
      for (r = o[0]; r % 10 === 0; )
        r /= 10;
      a = r !== 1;
    }
  if (Ee = !1, l = d + v, i = go(u, l), t = n ? Or(c, l + 10) : go(e, l), s = qe(i, t, l, 1), Bt(s.d, r = d, f))
    do
      if (l += 10, i = go(u, l), t = n ? Or(c, l + 10) : go(e, l), s = qe(i, t, l, 1), !a) {
        +fn(s.d).slice(r + 1, r + 15) + 1 == 1e14 && (s = Ce(s, d + 1, 0));
        break;
      }
    while (Bt(s.d, r += 10, f));
  return Ee = !0, Ce(s, d, f);
};
Z.minus = Z.sub = function(e) {
  var n, o, t, r, a, i, l, s, u, c, d, f, v = this, g = v.constructor;
  if (e = new g(e), !v.d || !e.d)
    return !v.s || !e.s ? e = new g(NaN) : v.d ? e.s = -e.s : e = new g(e.d || v.s !== e.s ? v : NaN), e;
  if (v.s != e.s)
    return e.s = -e.s, v.plus(e);
  if (u = v.d, f = e.d, l = g.precision, s = g.rounding, !u[0] || !f[0]) {
    if (f[0])
      e.s = -e.s;
    else if (u[0])
      e = new g(v);
    else
      return new g(s === 3 ? -0 : 0);
    return Ee ? Ce(e, l, s) : e;
  }
  if (o = gn(e.e / Pe), c = gn(v.e / Pe), u = u.slice(), a = c - o, a) {
    for (d = a < 0, d ? (n = u, a = -a, i = f.length) : (n = f, o = c, i = u.length), t = Math.max(Math.ceil(l / Pe), i) + 2, a > t && (a = t, n.length = 1), n.reverse(), t = a; t--; )
      n.push(0);
    n.reverse();
  } else {
    for (t = u.length, i = f.length, d = t < i, d && (i = t), t = 0; t < i; t++)
      if (u[t] != f[t]) {
        d = u[t] < f[t];
        break;
      }
    a = 0;
  }
  for (d && (n = u, u = f, f = n, e.s = -e.s), i = u.length, t = f.length - i; t > 0; --t)
    u[i++] = 0;
  for (t = f.length; t > a; ) {
    if (u[--t] < f[t]) {
      for (r = t; r && u[--r] === 0; )
        u[r] = Wn - 1;
      --u[r], u[t] += Wn;
    }
    u[t] -= f[t];
  }
  for (; u[--i] === 0; )
    u.pop();
  for (; u[0] === 0; u.shift())
    --o;
  return u[0] ? (e.d = u, e.e = fa(u, o), Ee ? Ce(e, l, s) : e) : new g(s === 3 ? -0 : 0);
};
Z.modulo = Z.mod = function(e) {
  var n, o = this, t = o.constructor;
  return e = new t(e), !o.d || !e.s || e.d && !e.d[0] ? new t(NaN) : !e.d || o.d && !o.d[0] ? Ce(new t(o), t.precision, t.rounding) : (Ee = !1, t.modulo == 9 ? (n = qe(o, e.abs(), 0, 3, 1), n.s *= e.s) : n = qe(o, e, 0, t.modulo, 1), n = n.times(e), Ee = !0, o.minus(n));
};
Z.naturalExponential = Z.exp = function() {
  return el(this);
};
Z.naturalLogarithm = Z.ln = function() {
  return go(this);
};
Z.negated = Z.neg = function() {
  var e = new this.constructor(this);
  return e.s = -e.s, Ce(e);
};
Z.plus = Z.add = function(e) {
  var n, o, t, r, a, i, l, s, u, c, d = this, f = d.constructor;
  if (e = new f(e), !d.d || !e.d)
    return !d.s || !e.s ? e = new f(NaN) : d.d || (e = new f(e.d || d.s === e.s ? d : NaN)), e;
  if (d.s != e.s)
    return e.s = -e.s, d.minus(e);
  if (u = d.d, c = e.d, l = f.precision, s = f.rounding, !u[0] || !c[0])
    return c[0] || (e = new f(d)), Ee ? Ce(e, l, s) : e;
  if (a = gn(d.e / Pe), t = gn(e.e / Pe), u = u.slice(), r = a - t, r) {
    for (r < 0 ? (o = u, r = -r, i = c.length) : (o = c, t = a, i = u.length), a = Math.ceil(l / Pe), i = a > i ? a + 1 : i + 1, r > i && (r = i, o.length = 1), o.reverse(); r--; )
      o.push(0);
    o.reverse();
  }
  for (i = u.length, r = c.length, i - r < 0 && (r = i, o = c, c = u, u = o), n = 0; r; )
    n = (u[--r] = u[r] + c[r] + n) / Wn | 0, u[r] %= Wn;
  for (n && (u.unshift(n), ++t), i = u.length; u[--i] == 0; )
    u.pop();
  return e.d = u, e.e = fa(u, t), Ee ? Ce(e, l, s) : e;
};
Z.precision = Z.sd = function(e) {
  var n, o = this;
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0)
    throw Error(Po + e);
  return o.d ? (n = op(o.d), e && o.e + 1 > n && (n = o.e + 1)) : n = NaN, n;
};
Z.round = function() {
  var e = this, n = e.constructor;
  return Ce(new n(e), e.e + 1, n.rounding);
};
Z.sine = Z.sin = function() {
  var e, n, o = this, t = o.constructor;
  return o.isFinite() ? o.isZero() ? new t(o) : (e = t.precision, n = t.rounding, t.precision = e + Math.max(o.e, o.sd()) + Pe, t.rounding = 1, o = Xy(t, ip(t, o)), t.precision = e, t.rounding = n, Ce(ro > 2 ? o.neg() : o, e, n, !0)) : new t(NaN);
};
Z.squareRoot = Z.sqrt = function() {
  var e, n, o, t, r, a, i = this, l = i.d, s = i.e, u = i.s, c = i.constructor;
  if (u !== 1 || !l || !l[0])
    return new c(!u || u < 0 && (!l || l[0]) ? NaN : l ? i : 1 / 0);
  for (Ee = !1, u = Math.sqrt(+i), u == 0 || u == 1 / 0 ? (n = fn(l), (n.length + s) % 2 == 0 && (n += "0"), u = Math.sqrt(n), s = gn((s + 1) / 2) - (s < 0 || s % 2), u == 1 / 0 ? n = "5e" + s : (n = u.toExponential(), n = n.slice(0, n.indexOf("e") + 1) + s), t = new c(n)) : t = new c(u.toString()), o = (s = c.precision) + 3; ; )
    if (a = t, t = a.plus(qe(i, a, o + 2, 1)).times(0.5), fn(a.d).slice(0, o) === (n = fn(t.d)).slice(0, o))
      if (n = n.slice(o - 3, o + 1), n == "9999" || !r && n == "4999") {
        if (!r && (Ce(a, s + 1, 0), a.times(a).eq(i))) {
          t = a;
          break;
        }
        o += 4, r = 1;
      } else {
        (!+n || !+n.slice(1) && n.charAt(0) == "5") && (Ce(t, s + 1, 1), e = !t.times(t).eq(i));
        break;
      }
  return Ee = !0, Ce(t, s, c.rounding, e);
};
Z.tangent = Z.tan = function() {
  var e, n, o = this, t = o.constructor;
  return o.isFinite() ? o.isZero() ? new t(o) : (e = t.precision, n = t.rounding, t.precision = e + 10, t.rounding = 1, o = o.sin(), o.s = 1, o = qe(o, new t(1).minus(o.times(o)).sqrt(), e + 10, 0), t.precision = e, t.rounding = n, Ce(ro == 2 || ro == 4 ? o.neg() : o, e, n, !0)) : new t(NaN);
};
Z.times = Z.mul = function(e) {
  var n, o, t, r, a, i, l, s, u, c = this, d = c.constructor, f = c.d, v = (e = new d(e)).d;
  if (e.s *= c.s, !f || !f[0] || !v || !v[0])
    return new d(!e.s || f && !f[0] && !v || v && !v[0] && !f ? NaN : !f || !v ? e.s / 0 : e.s * 0);
  for (o = gn(c.e / Pe) + gn(e.e / Pe), s = f.length, u = v.length, s < u && (a = f, f = v, v = a, i = s, s = u, u = i), a = [], i = s + u, t = i; t--; )
    a.push(0);
  for (t = u; --t >= 0; ) {
    for (n = 0, r = s + t; r > t; )
      l = a[r] + v[t] * f[r - t - 1] + n, a[r--] = l % Wn | 0, n = l / Wn | 0;
    a[r] = (a[r] + n) % Wn | 0;
  }
  for (; !a[--i]; )
    a.pop();
  return n ? ++o : a.shift(), e.d = a, e.e = fa(a, o), Ee ? Ce(e, d.precision, d.rounding) : e;
};
Z.toBinary = function(e, n) {
  return ds(this, 2, e, n);
};
Z.toDecimalPlaces = Z.toDP = function(e, n) {
  var o = this, t = o.constructor;
  return o = new t(o), e === void 0 ? o : (Tn(e, 0, Do), n === void 0 ? n = t.rounding : Tn(n, 0, 8), Ce(o, e + o.e + 1, n));
};
Z.toExponential = function(e, n) {
  var o, t = this, r = t.constructor;
  return e === void 0 ? o = Zn(t, !0) : (Tn(e, 0, Do), n === void 0 ? n = r.rounding : Tn(n, 0, 8), t = Ce(new r(t), e + 1, n), o = Zn(t, !0, e + 1)), t.isNeg() && !t.isZero() ? "-" + o : o;
};
Z.toFixed = function(e, n) {
  var o, t, r = this, a = r.constructor;
  return e === void 0 ? o = Zn(r) : (Tn(e, 0, Do), n === void 0 ? n = a.rounding : Tn(n, 0, 8), t = Ce(new a(r), e + r.e + 1, n), o = Zn(t, !1, e + t.e + 1)), r.isNeg() && !r.isZero() ? "-" + o : o;
};
Z.toFraction = function(e) {
  var n, o, t, r, a, i, l, s, u, c, d, f, v = this, g = v.d, m = v.constructor;
  if (!g)
    return new m(v);
  if (u = o = new m(1), t = s = new m(0), n = new m(t), a = n.e = op(g) - v.e - 1, i = a % Pe, n.d[0] = sn(10, i < 0 ? Pe + i : i), e == null)
    e = a > 0 ? n : u;
  else {
    if (l = new m(e), !l.isInt() || l.lt(u))
      throw Error(Po + l);
    e = l.gt(n) ? a > 0 ? n : u : l;
  }
  for (Ee = !1, l = new m(fn(g)), c = m.precision, m.precision = a = g.length * Pe * 2; d = qe(l, n, 0, 1, 1), r = o.plus(d.times(t)), r.cmp(e) != 1; )
    o = t, t = r, r = u, u = s.plus(d.times(r)), s = r, r = n, n = l.minus(d.times(r)), l = r;
  return r = qe(e.minus(o), t, 0, 1, 1), s = s.plus(r.times(u)), o = o.plus(r.times(t)), s.s = u.s = v.s, f = qe(u, t, a, 1).minus(v).abs().cmp(qe(s, o, a, 1).minus(v).abs()) < 1 ? [u, t] : [s, o], m.precision = c, Ee = !0, f;
};
Z.toHexadecimal = Z.toHex = function(e, n) {
  return ds(this, 16, e, n);
};
Z.toNearest = function(e, n) {
  var o = this, t = o.constructor;
  if (o = new t(o), e == null) {
    if (!o.d)
      return o;
    e = new t(1), n = t.rounding;
  } else {
    if (e = new t(e), n === void 0 ? n = t.rounding : Tn(n, 0, 8), !o.d)
      return e.s ? o : e;
    if (!e.d)
      return e.s && (e.s = o.s), e;
  }
  return e.d[0] ? (Ee = !1, o = qe(o, e, 0, n, 1).times(e), Ee = !0, Ce(o)) : (e.s = o.s, o = e), o;
};
Z.toNumber = function() {
  return +this;
};
Z.toOctal = function(e, n) {
  return ds(this, 8, e, n);
};
Z.toPower = Z.pow = function(e) {
  var n, o, t, r, a, i, l = this, s = l.constructor, u = +(e = new s(e));
  if (!l.d || !e.d || !l.d[0] || !e.d[0])
    return new s(sn(+l, u));
  if (l = new s(l), l.eq(1))
    return l;
  if (t = s.precision, a = s.rounding, e.eq(1))
    return Ce(l, t, a);
  if (n = gn(e.e / Pe), n >= e.d.length - 1 && (o = u < 0 ? -u : u) <= jy)
    return r = tp(s, l, o, t), e.s < 0 ? new s(1).div(r) : Ce(r, t, a);
  if (i = l.s, i < 0) {
    if (n < e.d.length - 1)
      return new s(NaN);
    if (e.d[n] & 1 || (i = 1), l.e == 0 && l.d[0] == 1 && l.d.length == 1)
      return l.s = i, l;
  }
  return o = sn(+l, u), n = o == 0 || !isFinite(o) ? gn(u * (Math.log("0." + fn(l.d)) / Math.LN10 + l.e + 1)) : new s(o + "").e, n > s.maxE + 1 || n < s.minE - 1 ? new s(n > 0 ? i / 0 : 0) : (Ee = !1, s.rounding = l.s = 1, o = Math.min(12, (n + "").length), r = el(e.times(go(l, t + o)), t), r.d && (r = Ce(r, t + 5, 1), Bt(r.d, t, a) && (n = t + 10, r = Ce(el(e.times(go(l, n + o)), n), n + 5, 1), +fn(r.d).slice(t + 1, t + 15) + 1 == 1e14 && (r = Ce(r, t + 1, 0)))), r.s = i, Ee = !0, s.rounding = a, Ce(r, t, a));
};
Z.toPrecision = function(e, n) {
  var o, t = this, r = t.constructor;
  return e === void 0 ? o = Zn(t, t.e <= r.toExpNeg || t.e >= r.toExpPos) : (Tn(e, 1, Do), n === void 0 ? n = r.rounding : Tn(n, 0, 8), t = Ce(new r(t), e, n), o = Zn(t, e <= t.e || t.e <= r.toExpNeg, e)), t.isNeg() && !t.isZero() ? "-" + o : o;
};
Z.toSignificantDigits = Z.toSD = function(e, n) {
  var o = this, t = o.constructor;
  return e === void 0 ? (e = t.precision, n = t.rounding) : (Tn(e, 1, Do), n === void 0 ? n = t.rounding : Tn(n, 0, 8)), Ce(new t(o), e, n);
};
Z.toString = function() {
  var e = this, n = e.constructor, o = Zn(e, e.e <= n.toExpNeg || e.e >= n.toExpPos);
  return e.isNeg() && !e.isZero() ? "-" + o : o;
};
Z.truncated = Z.trunc = function() {
  return Ce(new this.constructor(this), this.e + 1, 1);
};
Z.valueOf = Z.toJSON = function() {
  var e = this, n = e.constructor, o = Zn(e, e.e <= n.toExpNeg || e.e >= n.toExpPos);
  return e.isNeg() ? "-" + o : o;
};
function fn(e) {
  var n, o, t, r = e.length - 1, a = "", i = e[0];
  if (r > 0) {
    for (a += i, n = 1; n < r; n++)
      t = e[n] + "", o = Pe - t.length, o && (a += co(o)), a += t;
    i = e[n], t = i + "", o = Pe - t.length, o && (a += co(o));
  } else if (i === 0)
    return "0";
  for (; i % 10 === 0; )
    i /= 10;
  return a + i;
}
function Tn(e, n, o) {
  if (e !== ~~e || e < n || e > o)
    throw Error(Po + e);
}
function Bt(e, n, o, t) {
  var r, a, i, l;
  for (a = e[0]; a >= 10; a /= 10)
    --n;
  return --n < 0 ? (n += Pe, r = 0) : (r = Math.ceil((n + 1) / Pe), n %= Pe), a = sn(10, Pe - n), l = e[r] % a | 0, t == null ? n < 3 ? (n == 0 ? l = l / 100 | 0 : n == 1 && (l = l / 10 | 0), i = o < 4 && l == 99999 || o > 3 && l == 49999 || l == 5e4 || l == 0) : i = (o < 4 && l + 1 == a || o > 3 && l + 1 == a / 2) && (e[r + 1] / a / 100 | 0) == sn(10, n - 2) - 1 || (l == a / 2 || l == 0) && (e[r + 1] / a / 100 | 0) == 0 : n < 4 ? (n == 0 ? l = l / 1e3 | 0 : n == 1 ? l = l / 100 | 0 : n == 2 && (l = l / 10 | 0), i = (t || o < 4) && l == 9999 || !t && o > 3 && l == 4999) : i = ((t || o < 4) && l + 1 == a || !t && o > 3 && l + 1 == a / 2) && (e[r + 1] / a / 1e3 | 0) == sn(10, n - 3) - 1, i;
}
function pr(e, n, o) {
  for (var t, r = [0], a, i = 0, l = e.length; i < l; ) {
    for (a = r.length; a--; )
      r[a] *= n;
    for (r[0] += Qi.indexOf(e.charAt(i++)), t = 0; t < r.length; t++)
      r[t] > o - 1 && (r[t + 1] === void 0 && (r[t + 1] = 0), r[t + 1] += r[t] / o | 0, r[t] %= o);
  }
  return r.reverse();
}
function Ky(e, n) {
  var o, t, r;
  if (n.isZero())
    return n;
  t = n.d.length, t < 32 ? (o = Math.ceil(t / 3), r = (1 / pa(4, o)).toString()) : (o = 16, r = "2.3283064365386962890625e-10"), e.precision += o, n = tt(e, 1, n.times(r), new e(1));
  for (var a = o; a--; ) {
    var i = n.times(n);
    n = i.times(i).minus(i).times(8).plus(1);
  }
  return e.precision -= o, n;
}
var qe = function() {
  function e(t, r, a) {
    var i, l = 0, s = t.length;
    for (t = t.slice(); s--; )
      i = t[s] * r + l, t[s] = i % a | 0, l = i / a | 0;
    return l && t.unshift(l), t;
  }
  function n(t, r, a, i) {
    var l, s;
    if (a != i)
      s = a > i ? 1 : -1;
    else
      for (l = s = 0; l < a; l++)
        if (t[l] != r[l]) {
          s = t[l] > r[l] ? 1 : -1;
          break;
        }
    return s;
  }
  function o(t, r, a, i) {
    for (var l = 0; a--; )
      t[a] -= l, l = t[a] < r[a] ? 1 : 0, t[a] = l * i + t[a] - r[a];
    for (; !t[0] && t.length > 1; )
      t.shift();
  }
  return function(t, r, a, i, l, s) {
    var u, c, d, f, v, g, m, k, y, h, C, S, T, O, z, E, D, R, N, H, L = t.constructor, j = t.s == r.s ? 1 : -1, q = t.d, W = r.d;
    if (!q || !q[0] || !W || !W[0])
      return new L(
        // Return NaN if either NaN, or both Infinity or 0.
        !t.s || !r.s || (q ? W && q[0] == W[0] : !W) ? NaN : (
          // Return ±0 if x is 0 or y is ±Infinity, or return ±Infinity as y is 0.
          q && q[0] == 0 || !W ? j * 0 : j / 0
        )
      );
    for (s ? (v = 1, c = t.e - r.e) : (s = Wn, v = Pe, c = gn(t.e / v) - gn(r.e / v)), N = W.length, D = q.length, y = new L(j), h = y.d = [], d = 0; W[d] == (q[d] || 0); d++)
      ;
    if (W[d] > (q[d] || 0) && c--, a == null ? (O = a = L.precision, i = L.rounding) : l ? O = a + (t.e - r.e) + 1 : O = a, O < 0)
      h.push(1), g = !0;
    else {
      if (O = O / v + 2 | 0, d = 0, N == 1) {
        for (f = 0, W = W[0], O++; (d < D || f) && O--; d++)
          z = f * s + (q[d] || 0), h[d] = z / W | 0, f = z % W | 0;
        g = f || d < D;
      } else {
        for (f = s / (W[0] + 1) | 0, f > 1 && (W = e(W, f, s), q = e(q, f, s), N = W.length, D = q.length), E = N, C = q.slice(0, N), S = C.length; S < N; )
          C[S++] = 0;
        H = W.slice(), H.unshift(0), R = W[0], W[1] >= s / 2 && ++R;
        do
          f = 0, u = n(W, C, N, S), u < 0 ? (T = C[0], N != S && (T = T * s + (C[1] || 0)), f = T / R | 0, f > 1 ? (f >= s && (f = s - 1), m = e(W, f, s), k = m.length, S = C.length, u = n(m, C, k, S), u == 1 && (f--, o(m, N < k ? H : W, k, s))) : (f == 0 && (u = f = 1), m = W.slice()), k = m.length, k < S && m.unshift(0), o(C, m, S, s), u == -1 && (S = C.length, u = n(W, C, N, S), u < 1 && (f++, o(C, N < S ? H : W, S, s))), S = C.length) : u === 0 && (f++, C = [0]), h[d++] = f, u && C[0] ? C[S++] = q[E] || 0 : (C = [q[E]], S = 1);
        while ((E++ < D || C[0] !== void 0) && O--);
        g = C[0] !== void 0;
      }
      h[0] || h.shift();
    }
    if (v == 1)
      y.e = c, Qf = g;
    else {
      for (d = 1, f = h[0]; f >= 10; f /= 10)
        d++;
      y.e = d + c * v - 1, Ce(y, l ? a + y.e + 1 : a, i, g);
    }
    return y;
  };
}();
function Ce(e, n, o, t) {
  var r, a, i, l, s, u, c, d, f, v = e.constructor;
  e:
    if (n != null) {
      if (d = e.d, !d)
        return e;
      for (r = 1, l = d[0]; l >= 10; l /= 10)
        r++;
      if (a = n - r, a < 0)
        a += Pe, i = n, c = d[f = 0], s = c / sn(10, r - i - 1) % 10 | 0;
      else if (f = Math.ceil((a + 1) / Pe), l = d.length, f >= l)
        if (t) {
          for (; l++ <= f; )
            d.push(0);
          c = s = 0, r = 1, a %= Pe, i = a - Pe + 1;
        } else
          break e;
      else {
        for (c = l = d[f], r = 1; l >= 10; l /= 10)
          r++;
        a %= Pe, i = a - Pe + r, s = i < 0 ? 0 : c / sn(10, r - i - 1) % 10 | 0;
      }
      if (t = t || n < 0 || d[f + 1] !== void 0 || (i < 0 ? c : c % sn(10, r - i - 1)), u = o < 4 ? (s || t) && (o == 0 || o == (e.s < 0 ? 3 : 2)) : s > 5 || s == 5 && (o == 4 || t || o == 6 && // Check whether the digit to the left of the rounding digit is odd.
      (a > 0 ? i > 0 ? c / sn(10, r - i) : 0 : d[f - 1]) % 10 & 1 || o == (e.s < 0 ? 8 : 7)), n < 1 || !d[0])
        return d.length = 0, u ? (n -= e.e + 1, d[0] = sn(10, (Pe - n % Pe) % Pe), e.e = -n || 0) : d[0] = e.e = 0, e;
      if (a == 0 ? (d.length = f, l = 1, f--) : (d.length = f + 1, l = sn(10, Pe - a), d[f] = i > 0 ? (c / sn(10, r - i) % sn(10, i) | 0) * l : 0), u)
        for (; ; )
          if (f == 0) {
            for (a = 1, i = d[0]; i >= 10; i /= 10)
              a++;
            for (i = d[0] += l, l = 1; i >= 10; i /= 10)
              l++;
            a != l && (e.e++, d[0] == Wn && (d[0] = 1));
            break;
          } else {
            if (d[f] += l, d[f] != Wn)
              break;
            d[f--] = 0, l = 1;
          }
      for (a = d.length; d[--a] === 0; )
        d.pop();
    }
  return Ee && (e.e > v.maxE ? (e.d = null, e.e = NaN) : e.e < v.minE && (e.e = 0, e.d = [0])), e;
}
function Zn(e, n, o) {
  if (!e.isFinite())
    return ap(e);
  var t, r = e.e, a = fn(e.d), i = a.length;
  return n ? (o && (t = o - i) > 0 ? a = a.charAt(0) + "." + a.slice(1) + co(t) : i > 1 && (a = a.charAt(0) + "." + a.slice(1)), a = a + (e.e < 0 ? "e" : "e+") + e.e) : r < 0 ? (a = "0." + co(-r - 1) + a, o && (t = o - i) > 0 && (a += co(t))) : r >= i ? (a += co(r + 1 - i), o && (t = o - r - 1) > 0 && (a = a + "." + co(t))) : ((t = r + 1) < i && (a = a.slice(0, t) + "." + a.slice(t)), o && (t = o - i) > 0 && (r + 1 === i && (a += "."), a += co(t))), a;
}
function fa(e, n) {
  var o = e[0];
  for (n *= Pe; o >= 10; o /= 10)
    n++;
  return n;
}
function Or(e, n, o) {
  if (n > Wy)
    throw Ee = !0, o && (e.precision = o), Error(xf);
  return Ce(new e(Pr), n, 1, !0);
}
function jn(e, n, o) {
  if (n > _i)
    throw Error(xf);
  return Ce(new e(zr), n, o, !0);
}
function op(e) {
  var n = e.length - 1, o = n * Pe + 1;
  if (n = e[n], n) {
    for (; n % 10 == 0; n /= 10)
      o--;
    for (n = e[0]; n >= 10; n /= 10)
      o++;
  }
  return o;
}
function co(e) {
  for (var n = ""; e--; )
    n += "0";
  return n;
}
function tp(e, n, o, t) {
  var r, a = new e(1), i = Math.ceil(t / Pe + 4);
  for (Ee = !1; ; ) {
    if (o % 2 && (a = a.times(n), zu(a.d, i) && (r = !0)), o = gn(o / 2), o === 0) {
      o = a.d.length - 1, r && a.d[o] === 0 && ++a.d[o];
      break;
    }
    n = n.times(n), zu(n.d, i);
  }
  return Ee = !0, a;
}
function Pu(e) {
  return e.d[e.d.length - 1] & 1;
}
function rp(e, n, o) {
  for (var t, r = new e(n[0]), a = 0; ++a < n.length; )
    if (t = new e(n[a]), t.s)
      r[o](t) && (r = t);
    else {
      r = t;
      break;
    }
  return r;
}
function el(e, n) {
  var o, t, r, a, i, l, s, u = 0, c = 0, d = 0, f = e.constructor, v = f.rounding, g = f.precision;
  if (!e.d || !e.d[0] || e.e > 17)
    return new f(e.d ? e.d[0] ? e.s < 0 ? 0 : 1 / 0 : 1 : e.s ? e.s < 0 ? 0 : e : 0 / 0);
  for (n == null ? (Ee = !1, s = g) : s = n, l = new f(0.03125); e.e > -2; )
    e = e.times(l), d += 5;
  for (t = Math.log(sn(2, d)) / Math.LN10 * 2 + 5 | 0, s += t, o = a = i = new f(1), f.precision = s; ; ) {
    if (a = Ce(a.times(e), s, 1), o = o.times(++c), l = i.plus(qe(a, o, s, 1)), fn(l.d).slice(0, s) === fn(i.d).slice(0, s)) {
      for (r = d; r--; )
        i = Ce(i.times(i), s, 1);
      if (n == null)
        if (u < 3 && Bt(i.d, s - t, v, u))
          f.precision = s += 10, o = a = l = new f(1), c = 0, u++;
        else
          return Ce(i, f.precision = g, v, Ee = !0);
      else
        return f.precision = g, i;
    }
    i = l;
  }
}
function go(e, n) {
  var o, t, r, a, i, l, s, u, c, d, f, v = 1, g = 10, m = e, k = m.d, y = m.constructor, h = y.rounding, C = y.precision;
  if (m.s < 0 || !k || !k[0] || !m.e && k[0] == 1 && k.length == 1)
    return new y(k && !k[0] ? -1 / 0 : m.s != 1 ? NaN : k ? 0 : m);
  if (n == null ? (Ee = !1, c = C) : c = n, y.precision = c += g, o = fn(k), t = o.charAt(0), Math.abs(a = m.e) < 15e14) {
    for (; t < 7 && t != 1 || t == 1 && o.charAt(1) > 3; )
      m = m.times(e), o = fn(m.d), t = o.charAt(0), v++;
    a = m.e, t > 1 ? (m = new y("0." + o), a++) : m = new y(t + "." + o.slice(1));
  } else
    return u = Or(y, c + 2, C).times(a + ""), m = go(new y(t + "." + o.slice(1)), c - g).plus(u), y.precision = C, n == null ? Ce(m, C, h, Ee = !0) : m;
  for (d = m, s = i = m = qe(m.minus(1), m.plus(1), c, 1), f = Ce(m.times(m), c, 1), r = 3; ; ) {
    if (i = Ce(i.times(f), c, 1), u = s.plus(qe(i, new y(r), c, 1)), fn(u.d).slice(0, c) === fn(s.d).slice(0, c))
      if (s = s.times(2), a !== 0 && (s = s.plus(Or(y, c + 2, C).times(a + ""))), s = qe(s, new y(v), c, 1), n == null)
        if (Bt(s.d, c - g, h, l))
          y.precision = c += g, u = i = m = qe(d.minus(1), d.plus(1), c, 1), f = Ce(m.times(m), c, 1), r = l = 1;
        else
          return Ce(s, y.precision = C, h, Ee = !0);
      else
        return y.precision = C, s;
    s = u, r += 2;
  }
}
function ap(e) {
  return String(e.s * e.s / 0);
}
function nl(e, n) {
  var o, t, r;
  for ((o = n.indexOf(".")) > -1 && (n = n.replace(".", "")), (t = n.search(/e/i)) > 0 ? (o < 0 && (o = t), o += +n.slice(t + 1), n = n.substring(0, t)) : o < 0 && (o = n.length), t = 0; n.charCodeAt(t) === 48; t++)
    ;
  for (r = n.length; n.charCodeAt(r - 1) === 48; --r)
    ;
  if (n = n.slice(t, r), n) {
    if (r -= t, e.e = o = o - t - 1, e.d = [], t = (o + 1) % Pe, o < 0 && (t += Pe), t < r) {
      for (t && e.d.push(+n.slice(0, t)), r -= Pe; t < r; )
        e.d.push(+n.slice(t, t += Pe));
      n = n.slice(t), t = Pe - n.length;
    } else
      t -= r;
    for (; t--; )
      n += "0";
    e.d.push(+n), Ee && (e.e > e.constructor.maxE ? (e.d = null, e.e = NaN) : e.e < e.constructor.minE && (e.e = 0, e.d = [0]));
  } else
    e.e = 0, e.d = [0];
  return e;
}
function qy(e, n) {
  var o, t, r, a, i, l, s, u, c;
  if (n.indexOf("_") > -1) {
    if (n = n.replace(/(\d)_(?=\d)/g, "$1"), np.test(n))
      return nl(e, n);
  } else if (n === "Infinity" || n === "NaN")
    return +n || (e.s = NaN), e.e = NaN, e.d = null, e;
  if (Hy.test(n))
    o = 16, n = n.toLowerCase();
  else if (Uy.test(n))
    o = 2;
  else if (Yy.test(n))
    o = 8;
  else
    throw Error(Po + n);
  for (a = n.search(/p/i), a > 0 ? (s = +n.slice(a + 1), n = n.substring(2, a)) : n = n.slice(2), a = n.indexOf("."), i = a >= 0, t = e.constructor, i && (n = n.replace(".", ""), l = n.length, a = l - a, r = tp(t, new t(o), a, a * 2)), u = pr(n, o, Wn), c = u.length - 1, a = c; u[a] === 0; --a)
    u.pop();
  return a < 0 ? new t(e.s * 0) : (e.e = fa(u, c), e.d = u, Ee = !1, i && (e = qe(e, r, l * 4)), s && (e = e.times(Math.abs(s) < 54 ? sn(2, s) : bo.pow(2, s))), Ee = !0, e);
}
function Xy(e, n) {
  var o, t = n.d.length;
  if (t < 3)
    return n.isZero() ? n : tt(e, 2, n, n);
  o = 1.4 * Math.sqrt(t), o = o > 16 ? 16 : o | 0, n = n.times(1 / pa(5, o)), n = tt(e, 2, n, n);
  for (var r, a = new e(5), i = new e(16), l = new e(20); o--; )
    r = n.times(n), n = n.times(a.plus(r.times(i.times(r).minus(l))));
  return n;
}
function tt(e, n, o, t, r) {
  var a, i, l, s, u = e.precision, c = Math.ceil(u / Pe);
  for (Ee = !1, s = o.times(o), l = new e(t); ; ) {
    if (i = qe(l.times(s), new e(n++ * n++), u, 1), l = r ? t.plus(i) : t.minus(i), t = qe(i.times(s), new e(n++ * n++), u, 1), i = l.plus(t), i.d[c] !== void 0) {
      for (a = c; i.d[a] === l.d[a] && a--; )
        ;
      if (a == -1)
        break;
    }
    a = l, l = t, t = i, i = a;
  }
  return Ee = !0, i.d.length = c + 1, i;
}
function pa(e, n) {
  for (var o = e; --n; )
    o *= e;
  return o;
}
function ip(e, n) {
  var o, t = n.s < 0, r = jn(e, e.precision, 1), a = r.times(0.5);
  if (n = n.abs(), n.lte(a))
    return ro = t ? 4 : 1, n;
  if (o = n.divToInt(r), o.isZero())
    ro = t ? 3 : 2;
  else {
    if (n = n.minus(o.times(r)), n.lte(a))
      return ro = Pu(o) ? t ? 2 : 3 : t ? 4 : 1, n;
    ro = Pu(o) ? t ? 1 : 4 : t ? 3 : 2;
  }
  return n.minus(r).abs();
}
function ds(e, n, o, t) {
  var r, a, i, l, s, u, c, d, f, v = e.constructor, g = o !== void 0;
  if (g ? (Tn(o, 1, Do), t === void 0 ? t = v.rounding : Tn(t, 0, 8)) : (o = v.precision, t = v.rounding), !e.isFinite())
    c = ap(e);
  else {
    for (c = Zn(e), i = c.indexOf("."), g ? (r = 2, n == 16 ? o = o * 4 - 3 : n == 8 && (o = o * 3 - 2)) : r = n, i >= 0 && (c = c.replace(".", ""), f = new v(1), f.e = c.length - i, f.d = pr(Zn(f), 10, r), f.e = f.d.length), d = pr(c, 10, r), a = s = d.length; d[--s] == 0; )
      d.pop();
    if (!d[0])
      c = g ? "0p+0" : "0";
    else {
      if (i < 0 ? a-- : (e = new v(e), e.d = d, e.e = a, e = qe(e, f, o, t, 0, r), d = e.d, a = e.e, u = Qf), i = d[o], l = r / 2, u = u || d[o + 1] !== void 0, u = t < 4 ? (i !== void 0 || u) && (t === 0 || t === (e.s < 0 ? 3 : 2)) : i > l || i === l && (t === 4 || u || t === 6 && d[o - 1] & 1 || t === (e.s < 0 ? 8 : 7)), d.length = o, u)
        for (; ++d[--o] > r - 1; )
          d[o] = 0, o || (++a, d.unshift(1));
      for (s = d.length; !d[s - 1]; --s)
        ;
      for (i = 0, c = ""; i < s; i++)
        c += Qi.charAt(d[i]);
      if (g) {
        if (s > 1)
          if (n == 16 || n == 8) {
            for (i = n == 16 ? 4 : 3, --s; s % i; s++)
              c += "0";
            for (d = pr(c, r, n), s = d.length; !d[s - 1]; --s)
              ;
            for (i = 1, c = "1."; i < s; i++)
              c += Qi.charAt(d[i]);
          } else
            c = c.charAt(0) + "." + c.slice(1);
        c = c + (a < 0 ? "p" : "p+") + a;
      } else if (a < 0) {
        for (; ++a; )
          c = "0" + c;
        c = "0." + c;
      } else if (++a > s)
        for (a -= s; a--; )
          c += "0";
      else
        a < s && (c = c.slice(0, a) + "." + c.slice(a));
    }
    c = (n == 16 ? "0x" : n == 2 ? "0b" : n == 8 ? "0o" : "") + c;
  }
  return e.s < 0 ? "-" + c : c;
}
function zu(e, n) {
  if (e.length > n)
    return e.length = n, !0;
}
function Gy(e) {
  return new this(e).abs();
}
function Zy(e) {
  return new this(e).acos();
}
function Jy(e) {
  return new this(e).acosh();
}
function Qy(e, n) {
  return new this(e).plus(n);
}
function xy(e) {
  return new this(e).asin();
}
function _y(e) {
  return new this(e).asinh();
}
function e1(e) {
  return new this(e).atan();
}
function n1(e) {
  return new this(e).atanh();
}
function o1(e, n) {
  e = new this(e), n = new this(n);
  var o, t = this.precision, r = this.rounding, a = t + 4;
  return !e.s || !n.s ? o = new this(NaN) : !e.d && !n.d ? (o = jn(this, a, 1).times(n.s > 0 ? 0.25 : 0.75), o.s = e.s) : !n.d || e.isZero() ? (o = n.s < 0 ? jn(this, t, r) : new this(0), o.s = e.s) : !e.d || n.isZero() ? (o = jn(this, a, 1).times(0.5), o.s = e.s) : n.s < 0 ? (this.precision = a, this.rounding = 1, o = this.atan(qe(e, n, a, 1)), n = jn(this, a, 1), this.precision = t, this.rounding = r, o = e.s < 0 ? o.minus(n) : o.plus(n)) : o = this.atan(qe(e, n, a, 1)), o;
}
function t1(e) {
  return new this(e).cbrt();
}
function r1(e) {
  return Ce(e = new this(e), e.e + 1, 2);
}
function a1(e, n, o) {
  return new this(e).clamp(n, o);
}
function i1(e) {
  if (!e || typeof e != "object")
    throw Error(da + "Object expected");
  var n, o, t, r = e.defaults === !0, a = [
    "precision",
    1,
    Do,
    "rounding",
    0,
    8,
    "toExpNeg",
    -Xo,
    0,
    "toExpPos",
    0,
    Xo,
    "maxE",
    0,
    Xo,
    "minE",
    -Xo,
    0,
    "modulo",
    0,
    9
  ];
  for (n = 0; n < a.length; n += 3)
    if (o = a[n], r && (this[o] = xi[o]), (t = e[o]) !== void 0)
      if (gn(t) === t && t >= a[n + 1] && t <= a[n + 2])
        this[o] = t;
      else
        throw Error(Po + o + ": " + t);
  if (o = "crypto", r && (this[o] = xi[o]), (t = e[o]) !== void 0)
    if (t === !0 || t === !1 || t === 0 || t === 1)
      if (t)
        if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes))
          this[o] = !0;
        else
          throw Error(_f);
      else
        this[o] = !1;
    else
      throw Error(Po + o + ": " + t);
  return this;
}
function l1(e) {
  return new this(e).cos();
}
function s1(e) {
  return new this(e).cosh();
}
function lp(e) {
  var n, o, t;
  function r(a) {
    var i, l, s, u = this;
    if (!(u instanceof r))
      return new r(a);
    if (u.constructor = r, Ou(a)) {
      u.s = a.s, Ee ? !a.d || a.e > r.maxE ? (u.e = NaN, u.d = null) : a.e < r.minE ? (u.e = 0, u.d = [0]) : (u.e = a.e, u.d = a.d.slice()) : (u.e = a.e, u.d = a.d ? a.d.slice() : a.d);
      return;
    }
    if (s = typeof a, s === "number") {
      if (a === 0) {
        u.s = 1 / a < 0 ? -1 : 1, u.e = 0, u.d = [0];
        return;
      }
      if (a < 0 ? (a = -a, u.s = -1) : u.s = 1, a === ~~a && a < 1e7) {
        for (i = 0, l = a; l >= 10; l /= 10)
          i++;
        Ee ? i > r.maxE ? (u.e = NaN, u.d = null) : i < r.minE ? (u.e = 0, u.d = [0]) : (u.e = i, u.d = [a]) : (u.e = i, u.d = [a]);
        return;
      } else if (a * 0 !== 0) {
        a || (u.s = NaN), u.e = NaN, u.d = null;
        return;
      }
      return nl(u, a.toString());
    } else if (s !== "string")
      throw Error(Po + a);
    return (l = a.charCodeAt(0)) === 45 ? (a = a.slice(1), u.s = -1) : (l === 43 && (a = a.slice(1)), u.s = 1), np.test(a) ? nl(u, a) : qy(u, a);
  }
  if (r.prototype = Z, r.ROUND_UP = 0, r.ROUND_DOWN = 1, r.ROUND_CEIL = 2, r.ROUND_FLOOR = 3, r.ROUND_HALF_UP = 4, r.ROUND_HALF_DOWN = 5, r.ROUND_HALF_EVEN = 6, r.ROUND_HALF_CEIL = 7, r.ROUND_HALF_FLOOR = 8, r.EUCLID = 9, r.config = r.set = i1, r.clone = lp, r.isDecimal = Ou, r.abs = Gy, r.acos = Zy, r.acosh = Jy, r.add = Qy, r.asin = xy, r.asinh = _y, r.atan = e1, r.atanh = n1, r.atan2 = o1, r.cbrt = t1, r.ceil = r1, r.clamp = a1, r.cos = l1, r.cosh = s1, r.div = u1, r.exp = c1, r.floor = d1, r.hypot = f1, r.ln = p1, r.log = v1, r.log10 = h1, r.log2 = m1, r.max = g1, r.min = b1, r.mod = y1, r.mul = k1, r.pow = $1, r.random = w1, r.round = C1, r.sign = S1, r.sin = P1, r.sinh = z1, r.sqrt = O1, r.sub = T1, r.sum = E1, r.tan = D1, r.tanh = B1, r.trunc = I1, e === void 0 && (e = {}), e && e.defaults !== !0)
    for (t = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"], n = 0; n < t.length; )
      e.hasOwnProperty(o = t[n++]) || (e[o] = this[o]);
  return r.config(e), r;
}
function u1(e, n) {
  return new this(e).div(n);
}
function c1(e) {
  return new this(e).exp();
}
function d1(e) {
  return Ce(e = new this(e), e.e + 1, 3);
}
function f1() {
  var e, n, o = new this(0);
  for (Ee = !1, e = 0; e < arguments.length; )
    if (n = new this(arguments[e++]), n.d)
      o.d && (o = o.plus(n.times(n)));
    else {
      if (n.s)
        return Ee = !0, new this(1 / 0);
      o = n;
    }
  return Ee = !0, o.sqrt();
}
function Ou(e) {
  return e instanceof bo || e && e.toStringTag === ep || !1;
}
function p1(e) {
  return new this(e).ln();
}
function v1(e, n) {
  return new this(e).log(n);
}
function m1(e) {
  return new this(e).log(2);
}
function h1(e) {
  return new this(e).log(10);
}
function g1() {
  return rp(this, arguments, "lt");
}
function b1() {
  return rp(this, arguments, "gt");
}
function y1(e, n) {
  return new this(e).mod(n);
}
function k1(e, n) {
  return new this(e).mul(n);
}
function $1(e, n) {
  return new this(e).pow(n);
}
function w1(e) {
  var n, o, t, r, a = 0, i = new this(1), l = [];
  if (e === void 0 ? e = this.precision : Tn(e, 1, Do), t = Math.ceil(e / Pe), this.crypto)
    if (crypto.getRandomValues)
      for (n = crypto.getRandomValues(new Uint32Array(t)); a < t; )
        r = n[a], r >= 429e7 ? n[a] = crypto.getRandomValues(new Uint32Array(1))[0] : l[a++] = r % 1e7;
    else if (crypto.randomBytes) {
      for (n = crypto.randomBytes(t *= 4); a < t; )
        r = n[a] + (n[a + 1] << 8) + (n[a + 2] << 16) + ((n[a + 3] & 127) << 24), r >= 214e7 ? crypto.randomBytes(4).copy(n, a) : (l.push(r % 1e7), a += 4);
      a = t / 4;
    } else
      throw Error(_f);
  else
    for (; a < t; )
      l[a++] = Math.random() * 1e7 | 0;
  for (t = l[--a], e %= Pe, t && e && (r = sn(10, Pe - e), l[a] = (t / r | 0) * r); l[a] === 0; a--)
    l.pop();
  if (a < 0)
    o = 0, l = [0];
  else {
    for (o = -1; l[0] === 0; o -= Pe)
      l.shift();
    for (t = 1, r = l[0]; r >= 10; r /= 10)
      t++;
    t < Pe && (o -= Pe - t);
  }
  return i.e = o, i.d = l, i;
}
function C1(e) {
  return Ce(e = new this(e), e.e + 1, this.rounding);
}
function S1(e) {
  return e = new this(e), e.d ? e.d[0] ? e.s : 0 * e.s : e.s || NaN;
}
function P1(e) {
  return new this(e).sin();
}
function z1(e) {
  return new this(e).sinh();
}
function O1(e) {
  return new this(e).sqrt();
}
function T1(e, n) {
  return new this(e).sub(n);
}
function E1() {
  var e = 0, n = arguments, o = new this(n[e]);
  for (Ee = !1; o.s && ++e < n.length; )
    o = o.plus(n[e]);
  return Ee = !0, Ce(o, this.precision, this.rounding);
}
function D1(e) {
  return new this(e).tan();
}
function B1(e) {
  return new this(e).tanh();
}
function I1(e) {
  return Ce(e = new this(e), e.e + 1, 1);
}
Z[Symbol.for("nodejs.util.inspect.custom")] = Z.toString;
Z[Symbol.toStringTag] = "Decimal";
var bo = Z.constructor = lp(xi);
Pr = new bo(Pr);
zr = new bo(zr);
const sp = {
  modelValue: {
    type: [String, Number],
    default: 0
  },
  min: [String, Number],
  max: [String, Number],
  step: {
    type: [String, Number],
    default: 1
  },
  color: String,
  inputWidth: [String, Number],
  inputTextSize: [String, Number],
  buttonSize: [String, Number],
  elevation: {
    type: [Boolean, Number, String],
    default: !0
  },
  decimalLength: [String, Number],
  disabled: Boolean,
  readonly: Boolean,
  disableIncrement: Boolean,
  disableDecrement: Boolean,
  disableInput: Boolean,
  lazyChange: Boolean,
  incrementButton: {
    type: Boolean,
    default: !0
  },
  decrementButton: {
    type: Boolean,
    default: !0
  },
  press: {
    type: Boolean,
    default: !0
  },
  ripple: {
    type: Boolean,
    default: !0
  },
  validateTrigger: {
    type: Array,
    default: () => ["onInputChange", "onLazyChange", "onIncrement", "onDecrement"]
  },
  rules: Array,
  onBeforeChange: A(),
  onChange: A(),
  onIncrement: A(),
  onDecrement: A(),
  "onUpdate:modelValue": A()
}, Tu = 100, Eu = 600, { name: M1, n: N1, classes: A1 } = ee("counter"), V1 = ["inputmode", "readonly", "disabled"];
function L1(e, n) {
  const o = te("var-icon"), t = te("var-button"), r = te("var-form-details");
  return b(), P(
    "div",
    {
      class: p(e.classes(e.n(), e.n("$--box")))
    },
    [
      M(
        "div",
        Ye({
          class: e.classes(
            e.n("controller"),
            e.formatElevation(e.elevation, 2),
            [e.disabled || e.formDisabled, e.n("--disabled")],
            [e.errorMessage, e.n("--error")]
          ),
          style: { background: e.color }
        }, e.$attrs),
        [
          X(t, {
            class: p(
              e.classes(
                e.n("decrement-button"),
                [!e.decrementButton, e.n("--hidden")],
                [e.disabled || e.formDisabled, e.n("--not-allowed")]
              )
            ),
            style: K({
              width: e.toSizeUnit(e.buttonSize),
              height: e.toSizeUnit(e.buttonSize)
            }),
            round: "",
            "var-counter-cover": "",
            ripple: e.ripple && e.decrementButton && !e.disabled && !e.formDisabled && !e.readonly && !e.formReadonly && !e.disableDecrement && !e.isMin,
            onClick: e.decrement,
            onTouchstart: e.pressDecrement,
            onTouchend: e.releaseDecrement,
            onTouchcancel: e.releaseDecrement
          }, {
            default: pe(() => [
              X(o, { name: "minus" })
            ]),
            _: 1
            /* STABLE */
          }, 8, ["class", "style", "ripple", "onClick", "onTouchstart", "onTouchend", "onTouchcancel"]),
          Me(M("input", {
            class: p(e.classes(e.n("input"), [e.disabled || e.formDisabled, e.n("--not-allowed")])),
            style: K({
              width: e.toSizeUnit(e.inputWidth),
              fontSize: e.toSizeUnit(e.inputTextSize)
            }),
            inputmode: e.toNumber(e.decimalLength) === 0 ? "numeric" : "decimal",
            readonly: e.readonly || e.formReadonly,
            disabled: e.disabled || e.formDisabled || e.disableInput,
            "onUpdate:modelValue": n[0] || (n[0] = (a) => e.inputValue = a),
            onChange: n[1] || (n[1] = (...a) => e.handleChange && e.handleChange(...a))
          }, null, 46, V1), [
            [th, e.inputValue]
          ]),
          X(t, {
            class: p(
              e.classes(
                e.n("increment-button"),
                [!e.incrementButton, e.n("--hidden")],
                [e.disabled || e.formDisabled, e.n("--not-allowed")]
              )
            ),
            style: K({
              width: e.toSizeUnit(e.buttonSize),
              height: e.toSizeUnit(e.buttonSize)
            }),
            round: "",
            "var-counter-cover": "",
            ripple: e.ripple && e.incrementButton && !e.disabled && !e.formDisabled && !e.readonly && !e.formReadonly && !e.disableIncrement && !e.isMax,
            onClick: e.increment,
            onTouchstart: e.pressIncrement,
            onTouchend: e.releaseIncrement,
            onTouchcancel: e.releaseIncrement
          }, {
            default: pe(() => [
              X(o, { name: "plus" })
            ]),
            _: 1
            /* STABLE */
          }, 8, ["class", "style", "ripple", "onClick", "onTouchstart", "onTouchend", "onTouchcancel"])
        ],
        16
        /* FULL_PROPS */
      ),
      X(r, { "error-message": e.errorMessage }, null, 8, ["error-message"])
    ],
    2
    /* CLASS */
  );
}
const up = _({
  name: M1,
  components: {
    VarButton: Cn,
    VarIcon: Xe,
    VarFormDetails: On
  },
  directives: { Ripple: on },
  inheritAttrs: !1,
  props: sp,
  setup(e) {
    const n = $(""), { bindForm: o, form: t } = Un(), {
      errorMessage: r,
      validateWithTrigger: a,
      validate: i,
      // expose
      resetValidation: l
    } = Fn(), { readonly: s, disabled: u } = t ?? {}, c = I(() => {
      const { max: W, modelValue: ce } = e;
      return W != null && F(ce) >= F(W);
    }), d = I(() => {
      const { min: W, modelValue: ce } = e;
      return W != null && F(ce) <= F(W);
    });
    let f, v, g, m;
    w(o, {
      reset: C,
      validate: y,
      resetValidation: l
    }), fe(
      () => e.modelValue,
      (W) => {
        j(S(String(W))), w(e.onChange, F(W));
      }
    ), j(S(String(e.modelValue)));
    function y() {
      return i(e.rules, e.modelValue);
    }
    function h(W) {
      He(() => {
        const { validateTrigger: ce, rules: J, modelValue: ve } = e;
        a(ce, W, J, ve);
      });
    }
    function C() {
      const { min: W } = e;
      w(e["onUpdate:modelValue"], W != null ? F(W) : 0), l();
    }
    function S(W) {
      const { decimalLength: ce, max: J, min: ve } = e;
      let Q = F(W);
      return J != null && Q > F(J) && (Q = F(J)), ve != null && Q < F(ve) && (Q = F(ve)), W = String(Q), ce != null && (W = Q.toFixed(F(ce))), W;
    }
    function T(W) {
      const { lazyChange: ce, onBeforeChange: J } = e, { value: ve } = W.target, Q = S(ve);
      ce ? w(J, F(Q), q) : j(Q), h("onInputChange");
    }
    function O() {
      const {
        disabled: W,
        readonly: ce,
        disableDecrement: J,
        decrementButton: ve,
        lazyChange: Q,
        step: de,
        modelValue: U,
        onDecrement: oe,
        onBeforeChange: B
      } = e;
      if (u != null && u.value || s != null && s.value || W || ce || J || !ve || d.value)
        return;
      const Y = new bo(F(U)).minus(new bo(F(de))).toString(), x = S(Y), ue = F(x);
      w(oe, ue), Q ? w(B, ue, q) : (j(x), h("onDecrement"));
    }
    function z() {
      const {
        disabled: W,
        readonly: ce,
        disableIncrement: J,
        incrementButton: ve,
        lazyChange: Q,
        step: de,
        modelValue: U,
        onIncrement: oe,
        onBeforeChange: B
      } = e;
      if (u != null && u.value || s != null && s.value || W || ce || J || !ve || c.value)
        return;
      const Y = new bo(F(U)).plus(new bo(F(de))).toString(), x = S(Y), ue = F(x);
      w(oe, ue), Q ? w(B, ue, q) : (j(x), h("onIncrement"));
    }
    function E() {
      const { press: W, lazyChange: ce } = e;
      !W || ce || (m = window.setTimeout(() => {
        L();
      }, Eu));
    }
    function D() {
      const { press: W, lazyChange: ce } = e;
      !W || ce || (g = window.setTimeout(() => {
        H();
      }, Eu));
    }
    function R() {
      v && clearTimeout(v), m && clearTimeout(m);
    }
    function N() {
      f && clearTimeout(f), g && clearTimeout(g);
    }
    function H() {
      f = window.setTimeout(() => {
        z(), H();
      }, Tu);
    }
    function L() {
      v = window.setTimeout(() => {
        O(), L();
      }, Tu);
    }
    function j(W) {
      n.value = W;
      const ce = F(W);
      w(e["onUpdate:modelValue"], ce);
    }
    function q(W) {
      j(S(String(W))), h("onLazyChange");
    }
    return {
      inputValue: n,
      errorMessage: r,
      formDisabled: u,
      formReadonly: s,
      isMax: c,
      isMin: d,
      n: N1,
      classes: A1,
      formatElevation: yn,
      validate: y,
      reset: C,
      resetValidation: l,
      handleChange: T,
      decrement: O,
      increment: z,
      pressDecrement: E,
      pressIncrement: D,
      releaseDecrement: R,
      releaseIncrement: N,
      toSizeUnit: Te,
      toNumber: F
    };
  }
});
up.render = L1;
var va = up;
re(va);
se(va, sp);
const o5 = va;
var ol = va, cp = 60, dp = cp * 60, fp = dp * 24, R1 = fp * 7, rt = 1e3, gi = cp * rt, Du = dp * rt, F1 = fp * rt, U1 = R1 * rt, fs = "millisecond", Go = "second", Zo = "minute", Jo = "hour", fo = "day", vr = "week", Yn = "month", pp = "quarter", po = "year", Qo = "date", H1 = "YYYY-MM-DDTHH:mm:ssZ", Bu = "Invalid Date", Y1 = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, j1 = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g;
const W1 = {
  name: "en",
  weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
  months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_")
};
var tl = function(n, o, t) {
  var r = String(n);
  return !r || r.length >= o ? n : "" + Array(o + 1 - r.length).join(t) + n;
}, K1 = function(n) {
  var o = -n.utcOffset(), t = Math.abs(o), r = Math.floor(t / 60), a = t % 60;
  return (o <= 0 ? "+" : "-") + tl(r, 2, "0") + ":" + tl(a, 2, "0");
}, q1 = function e(n, o) {
  if (n.date() < o.date())
    return -e(o, n);
  var t = (o.year() - n.year()) * 12 + (o.month() - n.month()), r = n.clone().add(t, Yn), a = o - r < 0, i = n.clone().add(t + (a ? -1 : 1), Yn);
  return +(-(t + (o - r) / (a ? r - i : i - r)) || 0);
}, X1 = function(n) {
  return n < 0 ? Math.ceil(n) || 0 : Math.floor(n);
}, G1 = function(n) {
  var o = {
    M: Yn,
    y: po,
    w: vr,
    d: fo,
    D: Qo,
    h: Jo,
    m: Zo,
    s: Go,
    ms: fs,
    Q: pp
  };
  return o[n] || String(n || "").toLowerCase().replace(/s$/, "");
}, Z1 = function(n) {
  return n === void 0;
};
const J1 = {
  s: tl,
  z: K1,
  m: q1,
  a: X1,
  p: G1,
  u: Z1
};
var $t = "en", Ao = {};
Ao[$t] = W1;
var ps = function(n) {
  return n instanceof ma;
}, Tr = function e(n, o, t) {
  var r;
  if (!n)
    return $t;
  if (typeof n == "string") {
    var a = n.toLowerCase();
    Ao[a] && (r = a), o && (Ao[a] = o, r = a);
    var i = n.split("-");
    if (!r && i.length > 1)
      return e(i[0]);
  } else {
    var l = n.name;
    Ao[l] = n, r = l;
  }
  return !t && r && ($t = r), r || !t && $t;
}, le = function(n, o) {
  if (ps(n))
    return n.clone();
  var t = typeof o == "object" ? o : {};
  return t.date = n, t.args = arguments, new ma(t);
}, Q1 = function(n, o) {
  return le(n, {
    locale: o.$L,
    utc: o.$u,
    x: o.$x,
    $offset: o.$offset
    // todo: refactor; do not use this.$offset in you code
  });
}, Ke = J1;
Ke.l = Tr;
Ke.i = ps;
Ke.w = Q1;
var x1 = function(n) {
  var o = n.date, t = n.utc;
  if (o === null)
    return /* @__PURE__ */ new Date(NaN);
  if (Ke.u(o))
    return /* @__PURE__ */ new Date();
  if (o instanceof Date)
    return new Date(o);
  if (typeof o == "string" && !/Z$/i.test(o)) {
    var r = o.match(Y1);
    if (r) {
      var a = r[2] - 1 || 0, i = (r[7] || "0").substring(0, 3);
      return t ? new Date(Date.UTC(r[1], a, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, i)) : new Date(r[1], a, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, i);
    }
  }
  return new Date(o);
}, ma = /* @__PURE__ */ function() {
  function e(o) {
    this.$L = Tr(o.locale, null, !0), this.parse(o);
  }
  var n = e.prototype;
  return n.parse = function(t) {
    this.$d = x1(t), this.$x = t.x || {}, this.init();
  }, n.init = function() {
    var t = this.$d;
    this.$y = t.getFullYear(), this.$M = t.getMonth(), this.$D = t.getDate(), this.$W = t.getDay(), this.$H = t.getHours(), this.$m = t.getMinutes(), this.$s = t.getSeconds(), this.$ms = t.getMilliseconds();
  }, n.$utils = function() {
    return Ke;
  }, n.isValid = function() {
    return this.$d.toString() !== Bu;
  }, n.isSame = function(t, r) {
    var a = le(t);
    return this.startOf(r) <= a && a <= this.endOf(r);
  }, n.isAfter = function(t, r) {
    return le(t) < this.startOf(r);
  }, n.isBefore = function(t, r) {
    return this.endOf(r) < le(t);
  }, n.$g = function(t, r, a) {
    return Ke.u(t) ? this[r] : this.set(a, t);
  }, n.unix = function() {
    return Math.floor(this.valueOf() / 1e3);
  }, n.valueOf = function() {
    return this.$d.getTime();
  }, n.startOf = function(t, r) {
    var a = this, i = Ke.u(r) ? !0 : r, l = Ke.p(t), s = function(y, h) {
      var C = Ke.w(a.$u ? Date.UTC(a.$y, h, y) : new Date(a.$y, h, y), a);
      return i ? C : C.endOf(fo);
    }, u = function(y, h) {
      var C = [0, 0, 0, 0], S = [23, 59, 59, 999];
      return Ke.w(a.toDate()[y].apply(
        // eslint-disable-line prefer-spread
        a.toDate("s"),
        (i ? C : S).slice(h)
      ), a);
    }, c = this.$W, d = this.$M, f = this.$D, v = "set" + (this.$u ? "UTC" : "");
    switch (l) {
      case po:
        return i ? s(1, 0) : s(31, 11);
      case Yn:
        return i ? s(1, d) : s(0, d + 1);
      case vr: {
        var g = this.$locale().weekStart || 0, m = (c < g ? c + 7 : c) - g;
        return s(i ? f - m : f + (6 - m), d);
      }
      case fo:
      case Qo:
        return u(v + "Hours", 0);
      case Jo:
        return u(v + "Minutes", 1);
      case Zo:
        return u(v + "Seconds", 2);
      case Go:
        return u(v + "Milliseconds", 3);
      default:
        return this.clone();
    }
  }, n.endOf = function(t) {
    return this.startOf(t, !1);
  }, n.$set = function(t, r) {
    var a, i = Ke.p(t), l = "set" + (this.$u ? "UTC" : ""), s = (a = {}, a[fo] = l + "Date", a[Qo] = l + "Date", a[Yn] = l + "Month", a[po] = l + "FullYear", a[Jo] = l + "Hours", a[Zo] = l + "Minutes", a[Go] = l + "Seconds", a[fs] = l + "Milliseconds", a)[i], u = i === fo ? this.$D + (r - this.$W) : r;
    if (i === Yn || i === po) {
      var c = this.clone().set(Qo, 1);
      c.$d[s](u), c.init(), this.$d = c.set(Qo, Math.min(this.$D, c.daysInMonth())).$d;
    } else
      s && this.$d[s](u);
    return this.init(), this;
  }, n.set = function(t, r) {
    return this.clone().$set(t, r);
  }, n.get = function(t) {
    return this[Ke.p(t)]();
  }, n.add = function(t, r) {
    var a = this, i;
    t = Number(t);
    var l = Ke.p(r), s = function(f) {
      var v = le(a);
      return Ke.w(v.date(v.date() + Math.round(f * t)), a);
    };
    if (l === Yn)
      return this.set(Yn, this.$M + t);
    if (l === po)
      return this.set(po, this.$y + t);
    if (l === fo)
      return s(1);
    if (l === vr)
      return s(7);
    var u = (i = {}, i[Zo] = gi, i[Jo] = Du, i[Go] = rt, i)[l] || 1, c = this.$d.getTime() + t * u;
    return Ke.w(c, this);
  }, n.subtract = function(t, r) {
    return this.add(t * -1, r);
  }, n.format = function(t) {
    var r = this, a = this.$locale();
    if (!this.isValid())
      return a.invalidDate || Bu;
    var i = t || H1, l = Ke.z(this), s = this.$H, u = this.$m, c = this.$M, d = a.weekdays, f = a.months, v = a.meridiem, g = function(C, S, T, O) {
      return C && (C[S] || C(r, i)) || T[S].slice(0, O);
    }, m = function(C) {
      return Ke.s(s % 12 || 12, C, "0");
    }, k = v || function(h, C, S) {
      var T = h < 12 ? "AM" : "PM";
      return S ? T.toLowerCase() : T;
    }, y = {
      YY: String(this.$y).slice(-2),
      YYYY: this.$y,
      M: c + 1,
      MM: Ke.s(c + 1, 2, "0"),
      MMM: g(a.monthsShort, c, f, 3),
      MMMM: g(f, c),
      D: this.$D,
      DD: Ke.s(this.$D, 2, "0"),
      d: String(this.$W),
      dd: g(a.weekdaysMin, this.$W, d, 2),
      ddd: g(a.weekdaysShort, this.$W, d, 3),
      dddd: d[this.$W],
      H: String(s),
      HH: Ke.s(s, 2, "0"),
      h: m(1),
      hh: m(2),
      a: k(s, u, !0),
      A: k(s, u, !1),
      m: String(u),
      mm: Ke.s(u, 2, "0"),
      s: String(this.$s),
      ss: Ke.s(this.$s, 2, "0"),
      SSS: Ke.s(this.$ms, 3, "0"),
      Z: l
      // 'ZZ' logic below
    };
    return i.replace(j1, function(h, C) {
      return C || y[h] || l.replace(":", "");
    });
  }, n.utcOffset = function() {
    return -Math.round(this.$d.getTimezoneOffset() / 15) * 15;
  }, n.diff = function(t, r, a) {
    var i, l = Ke.p(r), s = le(t), u = (s.utcOffset() - this.utcOffset()) * gi, c = this - s, d = Ke.m(this, s);
    return d = (i = {}, i[po] = d / 12, i[Yn] = d, i[pp] = d / 3, i[vr] = (c - u) / U1, i[fo] = (c - u) / F1, i[Jo] = c / Du, i[Zo] = c / gi, i[Go] = c / rt, i)[l] || c, a ? d : Ke.a(d);
  }, n.daysInMonth = function() {
    return this.endOf(Yn).$D;
  }, n.$locale = function() {
    return Ao[this.$L];
  }, n.locale = function(t, r) {
    if (!t)
      return this.$L;
    var a = this.clone(), i = Tr(t, r, !0);
    return i && (a.$L = i), a;
  }, n.clone = function() {
    return Ke.w(this.$d, this);
  }, n.toDate = function() {
    return new Date(this.valueOf());
  }, n.toJSON = function() {
    return this.isValid() ? this.toISOString() : null;
  }, n.toISOString = function() {
    return this.$d.toISOString();
  }, n.toString = function() {
    return this.$d.toUTCString();
  }, e;
}(), vp = ma.prototype;
le.prototype = vp;
[["$ms", fs], ["$s", Go], ["$m", Zo], ["$H", Jo], ["$W", fo], ["$M", Yn], ["$y", po], ["$D", Qo]].forEach(function(e) {
  vp[e[1]] = function(n) {
    return this.$g(n, e[0], e[1]);
  };
});
le.extend = function(e, n) {
  return e.$i || (e(n, ma, le), e.$i = !0), le;
};
le.locale = Tr;
le.isDayjs = ps;
le.unix = function(e) {
  return le(e * 1e3);
};
le.en = Ao[$t];
le.Ls = Ao;
le.p = {};
const mp = function(e, n) {
  n.prototype.isSameOrBefore = function(o, t) {
    return this.isSame(o, t) || this.isBefore(o, t);
  };
}, hp = function(e, n) {
  n.prototype.isSameOrAfter = function(o, t) {
    return this.isSame(o, t) || this.isAfter(o, t);
  };
}, mr = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"], kt = ["0", "1", "2", "3", "4", "5", "6"], gp = {
  modelValue: [String, Array],
  type: {
    type: String,
    default: "date"
  },
  hint: String,
  allowedDates: Function,
  color: String,
  titleColor: String,
  elevation: {
    type: [Boolean, Number, String],
    default: !1
  },
  buttonElevation: {
    type: [Boolean, Number, String],
    default: !0
  },
  firstDayOfWeek: {
    type: [String, Number],
    default: 0
  },
  min: String,
  max: String,
  showCurrent: {
    type: Boolean,
    default: !0
  },
  readonly: Boolean,
  multiple: Boolean,
  range: Boolean,
  touchable: {
    type: Boolean,
    default: !0
  },
  onPreview: A(),
  onChange: A(),
  "onUpdate:modelValue": A()
}, { n: _1 } = ee("date-picker-header");
function ek(e, n) {
  const o = te("var-icon"), t = te("var-button");
  return b(), P(
    "div",
    {
      class: p(e.n())
    },
    [
      X(t, {
        class: p(e.n("arrow")),
        "var-date-picker-header-cover": "",
        round: "",
        text: "",
        disabled: e.disabled.left,
        onClick: n[0] || (n[0] = (r) => e.checkDate("prev"))
      }, {
        default: pe(() => [
          X(o, { name: "chevron-left" })
        ]),
        _: 1
        /* STABLE */
      }, 8, ["class", "disabled"]),
      M(
        "div",
        {
          class: p(e.n("value")),
          onClick: n[1] || (n[1] = (r) => e.$emit("check-panel"))
        },
        [
          X(Je, {
            name: `var-date-picker${e.reverse ? "-reverse" : ""}-translatex`
          }, {
            default: pe(() => [
              (b(), P(
                "div",
                { key: e.showDate },
                ae(e.showDate),
                1
                /* TEXT */
              ))
            ]),
            _: 1
            /* STABLE */
          }, 8, ["name"])
        ],
        2
        /* CLASS */
      ),
      X(t, {
        class: p(e.n("arrow")),
        "var-date-picker-header-cover": "",
        round: "",
        text: "",
        disabled: e.disabled.right,
        onClick: n[2] || (n[2] = (r) => e.checkDate("next"))
      }, {
        default: pe(() => [
          X(o, { name: "chevron-right" })
        ]),
        _: 1
        /* STABLE */
      }, 8, ["class", "disabled"])
    ],
    2
    /* CLASS */
  );
}
const bp = _({
  name: "PanelHeader",
  components: {
    VarButton: Cn,
    VarIcon: Xe
  },
  props: {
    date: {
      type: Object,
      required: !0
    },
    type: {
      type: String,
      default: "date"
    },
    disabled: {
      type: Object,
      required: !0
    }
  },
  emits: ["check-panel", "check-date"],
  setup(e, { emit: n }) {
    const o = $(!1), t = $(0), r = I(() => {
      var i;
      const { date: l, type: s } = e, { previewMonth: u, previewYear: c } = l;
      if (s === "year")
        return c;
      if (s === "month")
        return F(c) + t.value;
      const d = (i = an("datePickerMonthDict")) == null ? void 0 : i[u].name;
      return an("lang") === "zh-CN" ? `${c} ${d}` : `${d} ${c}`;
    }), a = (i) => {
      i === "prev" && e.disabled.left || i === "next" && e.disabled.right || (n("check-date", i), o.value = i === "prev", t.value += i === "prev" ? -1 : 1);
    };
    return fe(
      () => e.date,
      () => {
        t.value = 0;
      }
    ), {
      n: _1,
      reverse: o,
      showDate: r,
      checkDate: a
    };
  }
});
bp.render = ek;
var vs = bp, nk = Object.defineProperty, Iu = Object.getOwnPropertySymbols, ok = Object.prototype.hasOwnProperty, tk = Object.prototype.propertyIsEnumerable, Mu = (e, n, o) => n in e ? nk(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, rk = (e, n) => {
  for (var o in n || (n = {}))
    ok.call(n, o) && Mu(e, o, n[o]);
  if (Iu)
    for (var o of Iu(n))
      tk.call(n, o) && Mu(e, o, n[o]);
  return e;
};
le.extend(mp);
le.extend(hp);
const { n: nr, classes: ak } = ee("month-picker"), { n: or } = ee("date-picker");
function ik(e, n) {
  const o = te("panel-header"), t = te("var-button");
  return b(), P(
    "div",
    {
      class: p(e.n())
    },
    [
      M(
        "div",
        {
          class: p(e.n("content"))
        },
        [
          X(o, {
            ref: "headerEl",
            type: "month",
            date: e.preview,
            disabled: e.panelBtnDisabled,
            onCheckPanel: e.clickYear,
            onCheckDate: e.checkDate
          }, null, 8, ["date", "disabled", "onCheckPanel", "onCheckDate"]),
          X(Je, {
            name: `${e.nDate()}${e.reverse ? "-reverse" : ""}-translatex`
          }, {
            default: pe(() => [
              (b(), P("ul", { key: e.panelKey }, [
                (b(!0), P(
                  Ue,
                  null,
                  nn(e.MONTH_LIST, (r) => (b(), P("li", { key: r }, [
                    X(t, Ye({
                      type: "primary",
                      "var-month-picker-cover": "",
                      ripple: !1,
                      elevation: e.componentProps.buttonElevation
                    }, rk({}, e.buttonProps(r)), {
                      onClick: (a) => e.chooseMonth(r, a)
                    }), {
                      default: pe(() => [
                        De(
                          ae(e.getMonthAbbr(r)),
                          1
                          /* TEXT */
                        )
                      ]),
                      _: 2
                      /* DYNAMIC */
                    }, 1040, ["elevation", "onClick"])
                  ]))),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ]))
            ]),
            _: 1
            /* STABLE */
          }, 8, ["name"])
        ],
        2
        /* CLASS */
      )
    ],
    2
    /* CLASS */
  );
}
const yp = _({
  name: "MonthPickerPanel",
  components: {
    VarButton: Cn,
    PanelHeader: vs
  },
  props: {
    choose: {
      type: Object,
      required: !0
    },
    preview: {
      type: Object,
      required: !0
    },
    current: {
      type: String,
      required: !0
    },
    clickYear: {
      type: Function,
      required: !0
    },
    componentProps: {
      type: Object,
      required: !0
    }
  },
  emits: ["check-preview", "choose-month"],
  setup(e, { emit: n }) {
    const [o, t] = e.current.split("-"), r = $(!1), a = $(0), i = $(null), l = Ze({
      left: !1,
      right: !1
    }), s = I(() => e.choose.chooseYear === e.preview.previewYear), u = I(() => e.preview.previewYear === o), c = (y) => {
      var h, C;
      return (C = (h = an("datePickerMonthDict")) == null ? void 0 : h[y].abbr) != null ? C : "";
    }, d = (y) => {
      const {
        preview: { previewYear: h },
        componentProps: { min: C, max: S }
      } = e;
      let T = !0, O = !0;
      const z = `${h}-${y}`;
      return S && (T = le(z).isSameOrBefore(le(S), "month")), C && (O = le(z).isSameOrAfter(le(C), "month")), T && O;
    }, f = (y) => {
      const {
        choose: { chooseMonths: h, chooseDays: C, chooseRangeMonth: S },
        componentProps: { type: T, range: O }
      } = e;
      if (O) {
        if (!S.length)
          return !1;
        const z = le(y).isSameOrBefore(le(S[1]), "month"), E = le(y).isSameOrAfter(le(S[0]), "month");
        return z && E;
      }
      return T === "month" ? h.includes(y) : C.some((z) => z.includes(y));
    }, v = (y) => {
      const {
        choose: { chooseMonth: h },
        preview: { previewYear: C },
        componentProps: { allowedDates: S, color: T, multiple: O, range: z }
      } = e, E = `${C}-${y}`, D = () => z || O ? f(E) : h === y && s.value, N = (() => d(y) ? S ? !S(E) : !1 : !0)(), H = () => N ? !0 : z || O ? !f(E) : !s.value || h !== y, L = () => u.value && t === y && e.componentProps.showCurrent ? (z || O || s.value) && N ? !0 : z || O ? !f(E) : s.value ? h !== t : !0 : !1, j = () => N ? "" : L() ? T ?? "" : D() ? "" : `${or()}-color-cover`, q = j().startsWith(or());
      return {
        outline: L(),
        text: H(),
        color: H() ? "" : T,
        textColor: q ? "" : j(),
        [`${or()}-color-cover`]: q,
        class: ak(nr("button"), [N, nr("button--disabled")]),
        disabled: N
      };
    }, g = (y, h) => {
      h.currentTarget.classList.contains(nr("button--disabled")) || n("choose-month", y);
    }, m = (y) => {
      r.value = y === "prev", a.value += y === "prev" ? -1 : 1, n("check-preview", "year", y);
    }, k = (y) => {
      i.value.checkDate(y);
    };
    return fe(
      () => e.preview.previewYear,
      (y) => {
        const {
          componentProps: { min: h, max: C }
        } = e;
        C && (l.right = !le(`${F(y) + 1}`).isSameOrBefore(le(C), "year")), h && (l.left = !le(`${F(y) - 1}`).isSameOrAfter(le(h), "year"));
      },
      { immediate: !0 }
    ), {
      n: nr,
      nDate: or,
      t: an,
      MONTH_LIST: mr,
      headerEl: i,
      reverse: r,
      panelKey: a,
      panelBtnDisabled: l,
      forwardRef: k,
      buttonProps: v,
      getMonthAbbr: c,
      chooseMonth: g,
      checkDate: m
    };
  }
});
yp.render = ik;
var lk = yp;
const wt = {
  offsetTop: {
    type: [String, Number],
    default: 0
  },
  zIndex: {
    type: [String, Number],
    default: 10
  },
  cssMode: Boolean,
  disabled: Boolean,
  onScroll: A()
};
var Nu = (e, n, o) => new Promise((t, r) => {
  var a = (s) => {
    try {
      l(o.next(s));
    } catch (u) {
      r(u);
    }
  }, i = (s) => {
    try {
      l(o.throw(s));
    } catch (u) {
      r(u);
    }
  }, l = (s) => s.done ? t(s.value) : Promise.resolve(s.value).then(a, i);
  l((o = o.apply(e, n)).next());
});
const { name: sk, n: uk, classes: ck } = ee("sticky");
function dk(e, n) {
  return b(), P(
    "div",
    {
      class: p(e.classes(e.n(), [e.enableCSSMode, e.n("--css-mode")])),
      ref: "stickyEl",
      style: K({
        zIndex: e.toNumber(e.zIndex),
        top: e.enableCSSMode ? `${e.offsetTop}px` : void 0,
        width: e.enableFixedMode ? e.fixedWidth : void 0,
        height: e.enableFixedMode ? e.fixedHeight : void 0
      })
    },
    [
      M(
        "div",
        {
          class: p(e.n("wrapper")),
          ref: "wrapperEl",
          style: K({
            zIndex: e.toNumber(e.zIndex),
            position: e.enableFixedMode ? "fixed" : void 0,
            width: e.enableFixedMode ? e.fixedWrapperWidth : void 0,
            height: e.enableFixedMode ? e.fixedWrapperHeight : void 0,
            left: e.enableFixedMode ? e.fixedLeft : void 0,
            top: e.enableFixedMode ? e.fixedTop : void 0
          })
        },
        [
          V(e.$slots, "default")
        ],
        6
        /* CLASS, STYLE */
      )
    ],
    6
    /* CLASS, STYLE */
  );
}
const kp = _({
  name: sk,
  props: wt,
  setup(e) {
    const n = $(null), o = $(null), t = $(!1), r = $("0px"), a = $("0px"), i = $("auto"), l = $("auto"), s = $("auto"), u = $("auto"), c = I(() => !e.disabled && e.cssMode), d = I(() => !e.disabled && !e.cssMode && t.value), f = I(() => xe(e.offsetTop));
    let v;
    fe(() => e.disabled, h), cn(() => Nu(this, null, function* () {
      yield wn(), m(), k();
    })), Wt(y), To(h), je(() => window, "scroll", k);
    function g() {
      const { cssMode: C, disabled: S } = e;
      if (S)
        return;
      let T = 0;
      if (v && v !== window) {
        const { top: N } = un(v);
        T = N;
      }
      const O = o.value, z = n.value, { top: E, left: D } = un(z), R = E - T;
      return R <= f.value ? (C || (i.value = `${z.offsetWidth}px`, l.value = `${z.offsetHeight}px`, r.value = `${T + f.value}px`, a.value = `${D}px`, s.value = `${O.offsetWidth}px`, u.value = `${O.offsetHeight}px`, t.value = !0), {
        offsetTop: f.value,
        isFixed: !0
      }) : (t.value = !1, {
        offsetTop: R,
        isFixed: !1
      });
    }
    function m() {
      v = So(n.value), v !== window && v.addEventListener("scroll", k);
    }
    function k() {
      const C = g();
      C && w(e.onScroll, C.offsetTop, C.isFixed);
    }
    function y() {
      !v || v === window || v.removeEventListener("scroll", k);
    }
    function h() {
      return Nu(this, null, function* () {
        t.value = !1, yield fr(), g();
      });
    }
    return {
      stickyEl: n,
      wrapperEl: o,
      isFixed: t,
      offsetTop: f,
      fixedTop: r,
      fixedLeft: a,
      fixedWidth: i,
      fixedHeight: l,
      fixedWrapperWidth: s,
      fixedWrapperHeight: u,
      enableCSSMode: c,
      enableFixedMode: d,
      n: uk,
      classes: ck,
      resize: h,
      toNumber: F
    };
  }
});
kp.render = dk;
var ha = kp;
re(ha);
se(ha, wt);
const t5 = ha;
var at = ha, fk = Object.defineProperty, Au = Object.getOwnPropertySymbols, pk = Object.prototype.hasOwnProperty, vk = Object.prototype.propertyIsEnumerable, Vu = (e, n, o) => n in e ? fk(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, mk = (e, n) => {
  for (var o in n || (n = {}))
    pk.call(n, o) && Vu(e, o, n[o]);
  if (Au)
    for (var o of Au(n))
      vk.call(n, o) && Vu(e, o, n[o]);
  return e;
};
const { n: tr, classes: Lu } = ee("year-picker"), { n: rr } = ee("date-picker");
function hk(e, n) {
  const o = te("panel-header"), t = te("var-sticky"), r = te("var-button");
  return b(), P("div", null, [
    X(t, { "css-mode": "" }, {
      default: pe(() => [
        X(o, {
          ref: "headerEl",
          type: "year",
          date: {
            previewYear: `${e.yearList[0]} ~ ${e.yearList[e.yearList.length - 1]}`
          },
          disabled: e.panelBtnDisabled,
          onCheckDate: e.checkDate
        }, null, 8, ["date", "disabled", "onCheckDate"])
      ]),
      _: 1
      /* STABLE */
    }),
    X(Je, {
      name: `${e.nDate()}${e.reverse ? "-reverse" : ""}-translatex`
    }, {
      default: pe(() => [
        (b(), P(
          "ul",
          {
            ref: "panel",
            class: p(e.n()),
            key: e.panelKey
          },
          [
            (b(!0), P(
              Ue,
              null,
              nn(e.yearList, (a) => (b(), P("li", { key: a }, [
                X(r, Ye({
                  type: "primary",
                  "var-year-picker-cover": "",
                  ripple: !1,
                  elevation: e.componentProps.buttonElevation
                }, mk({}, e.buttonProps(`${a}`)), {
                  onClick: (i) => e.chooseYear(a, i)
                }), {
                  default: pe(() => [
                    De(
                      ae(a),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 2
                  /* DYNAMIC */
                }, 1040, ["elevation", "onClick"])
              ]))),
              128
              /* KEYED_FRAGMENT */
            ))
          ],
          2
          /* CLASS */
        ))
      ]),
      _: 1
      /* STABLE */
    }, 8, ["name"])
  ]);
}
const $p = _({
  name: "YearPickerPanel",
  components: {
    VarButton: Cn,
    VarSticky: at,
    PanelHeader: vs
  },
  props: {
    choose: {
      type: Object,
      required: !0
    },
    current: {
      type: String,
      required: !0
    },
    preview: {
      type: String
    },
    componentProps: {
      type: Object,
      required: !0
    }
  },
  emits: ["choose-year"],
  setup(e, { emit: n }) {
    const [o] = e.current.split("-"), t = $(), r = $(null), a = $(!1), i = $(0), l = $(0), s = Ze({
      left: !1,
      right: !1
    }), u = I(() => {
      if (!e.preview)
        return [];
      const y = Math.floor(F(e.preview) / 100 + l.value) * 100;
      return Array.from(Array(100), (h, C) => Math.max(0, y) + C);
    }), c = (y) => {
      const {
        choose: { chooseMonths: h, chooseDays: C, chooseYears: S, chooseRangeYear: T },
        componentProps: { type: O, range: z }
      } = e;
      if (z) {
        if (!T.length)
          return !1;
        const E = le(y).isSameOrBefore(le(T[1]), "year"), D = le(y).isSameOrAfter(le(T[0]), "year");
        return E && D;
      }
      return O === "year" ? S.includes(y) : O === "month" ? h.some((E) => E.includes(y)) : C.some((E) => E.includes(y));
    }, d = (y) => {
      const {
        componentProps: { min: h, max: C }
      } = e, S = C ? le(y).isSameOrBefore(le(C), "year") : !0, T = h ? le(y).isSameOrAfter(le(h), "year") : !0;
      return S && T;
    }, f = (y) => {
      const {
        choose: { chooseYear: h },
        componentProps: { allowedDates: C, color: S, multiple: T, range: O }
      } = e, z = () => O || T ? c(y) : h === y, D = (() => d(y) ? C ? !C(y) : !1 : !0)(), R = () => D ? !0 : O || T ? !c(y) : h !== y, N = () => o === y && e.componentProps.showCurrent ? (O || T) && D ? !0 : O || T ? !c(y) : h !== o : !1, H = () => D ? "" : N() ? S ?? "" : z() ? "" : `${rr()}-color-cover`, L = H().startsWith(rr());
      return {
        outline: N(),
        text: R(),
        color: R() ? "" : S,
        textColor: L ? "" : H(),
        [`${rr()}-color-cover`]: L,
        class: Lu(tr("button"), [D, tr("button--disabled")]),
        disabled: D
      };
    }, v = (y, h) => {
      h.currentTarget.classList.contains(tr("button--disabled")) || n("choose-year", y);
    }, g = () => {
      var y;
      const h = (y = t.value.querySelector(".var-button--primary")) != null ? y : t.value.querySelector(".var-button--outline");
      h == null || h.scrollIntoView({
        block: "center"
      });
    }, m = (y) => {
      const h = y === "prev";
      a.value = h, i.value += h ? -1 : 1, l.value += h ? -1 : 1;
    }, k = (y) => {
      r.value.checkDate(y);
    };
    return cn(g), fe(
      () => e.preview,
      () => {
        l.value = 0;
      }
    ), fe(
      u,
      (y) => {
        const {
          componentProps: { min: h, max: C }
        } = e;
        C && (s.right = !le(`${F(y[y.length - 1])}`).isSameOrBefore(le(C), "year")), h && (s.left = !le(`${F(y[0])}`).isSameOrAfter(le(h), "year")), F(y[0] <= 0) && (s.left = !1);
      },
      {
        immediate: !0
      }
    ), {
      n: tr,
      classes: Lu,
      buttonProps: f,
      panel: t,
      headerEl: r,
      yearList: u,
      reverse: a,
      panelKey: i,
      panelBtnDisabled: s,
      nDate: rr,
      checkDate: m,
      chooseYear: v,
      forwardRef: k,
      toNumber: F
    };
  }
});
$p.render = hk;
var gk = $p, bk = Object.defineProperty, Ru = Object.getOwnPropertySymbols, yk = Object.prototype.hasOwnProperty, kk = Object.prototype.propertyIsEnumerable, Fu = (e, n, o) => n in e ? bk(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, $k = (e, n) => {
  for (var o in n || (n = {}))
    yk.call(n, o) && Fu(e, o, n[o]);
  if (Ru)
    for (var o of Ru(n))
      kk.call(n, o) && Fu(e, o, n[o]);
  return e;
};
le.extend(mp);
le.extend(hp);
const { n: Ko, classes: wk } = ee("day-picker"), { n: ar } = ee("date-picker");
function Ck(e, n) {
  const o = te("panel-header"), t = te("var-button");
  return b(), P(
    "div",
    {
      class: p(e.n())
    },
    [
      M(
        "div",
        {
          class: p(e.n("content"))
        },
        [
          X(o, {
            ref: "headerEl",
            type: "day",
            date: e.preview,
            disabled: e.panelBtnDisabled,
            onCheckPanel: e.clickMonth,
            onCheckDate: e.checkDate
          }, null, 8, ["date", "disabled", "onCheckPanel", "onCheckDate"]),
          X(Je, {
            name: `${e.nDate()}${e.reverse ? "-reverse" : ""}-translatex`
          }, {
            default: pe(() => [
              (b(), P("div", { key: e.panelKey }, [
                M(
                  "ul",
                  {
                    class: p(e.n("head"))
                  },
                  [
                    (b(!0), P(
                      Ue,
                      null,
                      nn(e.sortWeekList, (r) => (b(), P(
                        "li",
                        { key: r },
                        ae(e.getDayAbbr(r)),
                        1
                        /* TEXT */
                      ))),
                      128
                      /* KEYED_FRAGMENT */
                    ))
                  ],
                  2
                  /* CLASS */
                ),
                M(
                  "ul",
                  {
                    class: p(e.n("body"))
                  },
                  [
                    (b(!0), P(
                      Ue,
                      null,
                      nn(e.days, (r, a) => (b(), P("li", { key: a }, [
                        X(t, Ye({
                          type: "primary",
                          "var-day-picker-cover": "",
                          round: "",
                          ripple: !1,
                          elevation: e.componentProps.buttonElevation
                        }, $k({}, e.buttonProps(r)), {
                          onClick: (i) => e.chooseDay(r, i)
                        }), {
                          default: pe(() => [
                            De(
                              ae(e.filterDay(r)),
                              1
                              /* TEXT */
                            )
                          ]),
                          _: 2
                          /* DYNAMIC */
                        }, 1040, ["elevation", "onClick"])
                      ]))),
                      128
                      /* KEYED_FRAGMENT */
                    ))
                  ],
                  2
                  /* CLASS */
                )
              ]))
            ]),
            _: 1
            /* STABLE */
          }, 8, ["name"])
        ],
        2
        /* CLASS */
      )
    ],
    2
    /* CLASS */
  );
}
const wp = _({
  name: "DayPickerPanel",
  components: {
    VarButton: Cn,
    PanelHeader: vs
  },
  props: {
    choose: {
      type: Object,
      required: !0
    },
    preview: {
      type: Object,
      required: !0
    },
    current: {
      type: String,
      required: !0
    },
    clickMonth: {
      type: Function,
      required: !0
    },
    componentProps: {
      type: Object,
      required: !0
    }
  },
  emits: ["check-preview", "choose-day"],
  setup(e, { emit: n }) {
    const [o, t, r] = e.current.split("-"), a = $([]), i = $(!1), l = $(0), s = $(null), u = Ze({
      left: !1,
      right: !1
    }), c = I(
      () => e.preview.previewYear === o && e.preview.previewMonth === t
    ), d = I(
      () => e.choose.chooseYear === e.preview.previewYear && e.choose.chooseMonth === e.preview.previewMonth
    ), f = I(() => {
      const z = kt.findIndex((E) => E === e.componentProps.firstDayOfWeek);
      return z === -1 || z === 0 ? kt : [...kt.slice(z), ...kt.slice(0, z)];
    }), v = (z) => {
      var E, D;
      return (D = (E = an("datePickerWeekDict")) == null ? void 0 : E[z].abbr) != null ? D : "";
    }, g = (z) => z > 0 ? z : "", m = () => {
      const {
        preview: { previewMonth: z, previewYear: E }
      } = e, D = le(`${E}-${z}`).daysInMonth(), R = le(`${E}-${z}-01`).day(), N = f.value.findIndex((H) => H === `${R}`);
      a.value = [...Array(N).fill(-1), ...Array.from(Array(D + 1).keys())].filter((H) => H);
    }, k = () => {
      const {
        preview: { previewYear: z, previewMonth: E },
        componentProps: { max: D, min: R }
      } = e;
      if (D) {
        const N = `${z}-${F(E) + 1}`;
        u.right = !le(N).isSameOrBefore(le(D), "month");
      }
      if (R) {
        const N = `${z}-${F(E) - 1}`;
        u.left = !le(N).isSameOrAfter(le(R), "month");
      }
    }, y = (z) => {
      const {
        preview: { previewYear: E, previewMonth: D },
        componentProps: { min: R, max: N }
      } = e;
      let H = !0, L = !0;
      const j = `${E}-${D}-${z}`;
      return N && (H = le(j).isSameOrBefore(le(N), "day")), R && (L = le(j).isSameOrAfter(le(R), "day")), H && L;
    }, h = (z) => {
      const {
        choose: { chooseDays: E, chooseRangeDay: D },
        componentProps: { range: R }
      } = e;
      if (R) {
        if (!D.length)
          return !1;
        const N = le(z).isSameOrBefore(le(D[1]), "day"), H = le(z).isSameOrAfter(le(D[0]), "day");
        return N && H;
      }
      return E.includes(z);
    }, C = (z) => {
      if (z < 0)
        return {
          text: !0,
          outline: !1,
          textColor: "",
          class: Ko("button"),
          disabled: !0
        };
      const {
        choose: { chooseDay: E },
        preview: { previewYear: D, previewMonth: R },
        componentProps: { allowedDates: N, color: H, multiple: L, range: j }
      } = e, q = `${D}-${R}-${z}`, W = () => j || L ? h(q) : F(E) === z && d.value, J = (() => y(z) ? N ? !N(q) : !1 : !0)(), ve = () => J ? !0 : j || L ? !h(q) : !d.value || F(E) !== z, Q = () => c.value && F(r) === z && e.componentProps.showCurrent ? (j || L || d.value) && J ? !0 : j || L ? !h(q) : d.value ? E !== r : !0 : !1, de = () => J ? "" : Q() ? H ?? "" : W() ? "" : `${ar()}-color-cover`, U = de().startsWith(ar());
      return {
        text: ve(),
        outline: Q(),
        textColor: U ? "" : de(),
        [`${ar()}-color-cover`]: U,
        class: wk(Ko("button"), Ko("button--usable"), [J, Ko("button--disabled")]),
        disabled: J
      };
    }, S = (z) => {
      i.value = z === "prev", l.value += z === "prev" ? -1 : 1, n("check-preview", "month", z);
    }, T = (z, E) => {
      E.currentTarget.classList.contains(Ko("button--disabled")) || n("choose-day", z);
    }, O = (z) => {
      s.value.checkDate(z);
    };
    return cn(() => {
      m(), k();
    }), fe(
      () => e.preview,
      () => {
        m(), k();
      }
    ), {
      n: Ko,
      nDate: ar,
      days: a,
      reverse: i,
      headerEl: s,
      panelKey: l,
      sortWeekList: f,
      panelBtnDisabled: u,
      forwardRef: O,
      filterDay: g,
      getDayAbbr: v,
      checkDate: S,
      chooseDay: T,
      buttonProps: C
    };
  }
});
wp.render = Ck;
var Sk = wp, Pk = (e, n, o) => new Promise((t, r) => {
  var a = (s) => {
    try {
      l(o.next(s));
    } catch (u) {
      r(u);
    }
  }, i = (s) => {
    try {
      l(o.throw(s));
    } catch (u) {
      r(u);
    }
  }, l = (s) => s.done ? t(s.value) : Promise.resolve(s.value).then(a, i);
  l((o = o.apply(e, n)).next());
});
const { name: zk, n: Ok, classes: Tk } = ee("date-picker");
function Ek(e, n) {
  var o;
  const t = te("year-picker-panel"), r = te("month-picker-panel"), a = te("day-picker-panel");
  return b(), P(
    "div",
    {
      class: p(e.classes(e.n(), e.formatElevation(e.elevation, 2)))
    },
    [
      M(
        "div",
        {
          class: p(e.n("title")),
          style: K({ background: e.titleColor || e.color })
        },
        [
          M(
            "div",
            {
              class: p(e.n("title-select"))
            },
            [
              M(
                "div",
                {
                  class: p(e.n("title-hint"))
                },
                ae((o = e.hint) != null ? o : e.t("datePickerHint")),
                3
                /* TEXT, CLASS */
              ),
              e.type !== "year" ? (b(), P(
                "div",
                {
                  key: 0,
                  class: p(e.classes(e.n("title-year"), [e.isYearPanel, e.n("title-year--active")])),
                  onClick: n[0] || (n[0] = (i) => e.clickEl("year"))
                },
                [
                  V(e.$slots, "year", { year: e.chooseYear }, () => [
                    De(
                      ae(e.chooseYear),
                      1
                      /* TEXT */
                    )
                  ])
                ],
                2
                /* CLASS */
              )) : G("v-if", !0)
            ],
            2
            /* CLASS */
          ),
          M(
            "div",
            {
              class: p(
                e.classes(
                  e.n("title-date"),
                  [!e.isYearPanel || e.type === "year", e.n("title-date--active")],
                  [e.range, e.n("title-date--range")]
                )
              ),
              onClick: n[1] || (n[1] = (i) => e.clickEl("date"))
            },
            [
              X(Je, {
                name: e.multiple ? "" : `${e.n()}${e.reverse ? "-reverse" : ""}-translatey`
              }, {
                default: pe(() => [
                  e.type === "year" ? (b(), P("div", {
                    key: `${e.chooseYear}`
                  }, [
                    e.range ? V(e.$slots, "range", {
                      key: 0,
                      choose: e.getChoose.chooseRangeYear
                    }, () => [
                      De(
                        ae(e.getYearTitle),
                        1
                        /* TEXT */
                      )
                    ]) : e.multiple ? V(e.$slots, "multiple", {
                      key: 1,
                      choose: e.getChoose.chooseYears
                    }, () => [
                      De(
                        ae(e.getYearTitle),
                        1
                        /* TEXT */
                      )
                    ]) : V(e.$slots, "year", {
                      key: 2,
                      year: e.chooseYear
                    }, () => [
                      De(
                        ae(e.getYearTitle),
                        1
                        /* TEXT */
                      )
                    ])
                  ])) : e.type === "month" ? (b(), P("div", {
                    key: `${e.chooseYear}${e.chooseMonth}`
                  }, [
                    e.range ? V(e.$slots, "range", {
                      key: 0,
                      choose: e.getChoose.chooseRangeMonth
                    }, () => [
                      De(
                        ae(e.getMonthTitle),
                        1
                        /* TEXT */
                      )
                    ]) : e.multiple ? V(e.$slots, "multiple", {
                      key: 1,
                      choose: e.getChoose.chooseMonths
                    }, () => [
                      De(
                        ae(e.getMonthTitle),
                        1
                        /* TEXT */
                      )
                    ]) : V(e.$slots, "month", {
                      key: 2,
                      month: e.chooseMonth,
                      year: e.chooseYear
                    }, () => [
                      De(
                        ae(e.getMonthTitle),
                        1
                        /* TEXT */
                      )
                    ])
                  ])) : (b(), P("div", {
                    key: `${e.chooseYear}${e.chooseMonth}${e.chooseDay}`
                  }, [
                    e.range ? V(e.$slots, "range", {
                      key: 0,
                      choose: e.formatRange
                    }, () => [
                      De(
                        ae(e.getDateTitle),
                        1
                        /* TEXT */
                      )
                    ]) : e.multiple ? V(e.$slots, "multiple", {
                      key: 1,
                      choose: e.getChoose.chooseDays
                    }, () => [
                      De(
                        ae(e.getDateTitle),
                        1
                        /* TEXT */
                      )
                    ]) : V(e.$slots, "date", yo(Ye({ key: 2 }, e.slotProps)), () => [
                      De(
                        ae(e.getDateTitle),
                        1
                        /* TEXT */
                      )
                    ])
                  ]))
                ]),
                _: 3
                /* FORWARDED */
              }, 8, ["name"])
            ],
            2
            /* CLASS */
          )
        ],
        6
        /* CLASS, STYLE */
      ),
      M(
        "div",
        {
          class: p(e.n("body")),
          onTouchstart: n[2] || (n[2] = (...i) => e.handleTouchstart && e.handleTouchstart(...i)),
          onTouchmove: n[3] || (n[3] = (...i) => e.handleTouchmove && e.handleTouchmove(...i)),
          onTouchend: n[4] || (n[4] = (...i) => e.handleTouchend && e.handleTouchend(...i))
        },
        [
          X(Je, {
            name: `${e.n()}-panel-fade`
          }, {
            default: pe(() => [
              e.getPanelType === "year" ? (b(), Oe(t, {
                key: 0,
                ref: "yearPanelEl",
                choose: e.getChoose,
                current: e.currentDate,
                "component-props": e.componentProps,
                preview: e.previewYear,
                onChooseYear: e.getChooseYear
              }, null, 8, ["choose", "current", "component-props", "preview", "onChooseYear"])) : e.getPanelType === "month" ? (b(), Oe(r, {
                key: 1,
                ref: "monthPanelEl",
                current: e.currentDate,
                choose: e.getChoose,
                preview: e.getPreview,
                "click-year": () => e.clickEl("year"),
                "component-props": e.componentProps,
                onChooseMonth: e.getChooseMonth,
                onCheckPreview: e.checkPreview
              }, null, 8, ["current", "choose", "preview", "click-year", "component-props", "onChooseMonth", "onCheckPreview"])) : e.getPanelType === "date" ? (b(), Oe(a, {
                key: 2,
                ref: "dayPanelEl",
                current: e.currentDate,
                choose: e.getChoose,
                preview: e.getPreview,
                "component-props": e.componentProps,
                "click-month": () => e.clickEl("month"),
                onChooseDay: e.getChooseDay,
                onCheckPreview: e.checkPreview
              }, null, 8, ["current", "choose", "preview", "component-props", "click-month", "onChooseDay", "onCheckPreview"])) : G("v-if", !0)
            ]),
            _: 1
            /* STABLE */
          }, 8, ["name"])
        ],
        34
        /* CLASS, NEED_HYDRATION */
      ),
      e.$slots.actions ? (b(), P(
        "div",
        {
          key: 0,
          class: p(e.n("actions"))
        },
        [
          V(e.$slots, "actions")
        ],
        2
        /* CLASS */
      )) : G("v-if", !0)
    ],
    2
    /* CLASS */
  );
}
const Cp = _({
  name: zk,
  components: {
    MonthPickerPanel: lk,
    YearPickerPanel: gk,
    DayPickerPanel: Sk
  },
  props: gp,
  setup(e) {
    const n = le().format("YYYY-MM-D"), [o, t] = n.split("-"), r = mr.find((ne) => ne === t), a = $(!1), i = $(!1), l = $(!0), s = $(), u = $(), c = $(), d = $(r), f = $(o), v = $(!1), g = $([]), m = $([]), k = $([]), y = $([]), h = $([]), C = $([]), S = $(null), T = $(null), O = $(null), z = Ze({
      allowedDates: e.allowedDates,
      type: e.type,
      color: e.color,
      firstDayOfWeek: e.firstDayOfWeek,
      min: e.min,
      max: e.max,
      showCurrent: e.showCurrent,
      multiple: e.multiple,
      range: e.range,
      buttonElevation: e.buttonElevation
    }), E = I(() => ({
      chooseMonth: s.value,
      chooseYear: u.value,
      chooseDay: c.value,
      chooseYears: g.value,
      chooseMonths: m.value,
      chooseDays: k.value,
      chooseRangeYear: y.value,
      chooseRangeMonth: h.value,
      chooseRangeDay: C.value
    })), D = I(() => ({
      previewMonth: d.value,
      previewYear: f.value
    })), R = I(() => {
      var ne;
      const { multiple: he, range: Se } = e;
      return Se ? y.value.length ? `${y.value[0]} ~ ${y.value[1]}` : "" : he ? `${g.value.length}${an("datePickerSelected")}` : (ne = u.value) != null ? ne : "";
    }), N = I(() => {
      var ne, he;
      const { multiple: Se, range: Ne } = e;
      if (Ne)
        return h.value.length ? `${h.value[0]} ~ ${h.value[1]}` : "";
      let Le = "";
      return s.value && (Le = (he = (ne = an("datePickerMonthDict")) == null ? void 0 : ne[s.value].name) != null ? he : ""), Se ? `${m.value.length}${an("datePickerSelected")}` : Le;
    }), H = I(() => {
      var ne, he, Se, Ne;
      const { multiple: Le, range: Qe } = e;
      if (Qe) {
        const gt = C.value.map((Zm) => le(Zm).format("YYYY-MM-DD"));
        return gt.length ? `${gt[0]} ~ ${gt[1]}` : "";
      }
      if (Le)
        return `${k.value.length}${an("datePickerSelected")}`;
      if (!u.value || !s.value || !c.value)
        return "";
      const dn = le(`${u.value}-${s.value}-${c.value}`).day(), hn = kt.find((gt) => gt === `${dn}`), no = (he = (ne = an("datePickerWeekDict")) == null ? void 0 : ne[hn].name) != null ? he : "", Xm = (Ne = (Se = an("datePickerMonthDict")) == null ? void 0 : Se[s.value].name) != null ? Ne : "", Gm = Lo(c.value, 2, "0");
      return an("lang") === "zh-CN" ? `${s.value}-${Gm} ${no.slice(0, 3)}` : `${no.slice(0, 3)}, ${Xm.slice(0, 3)} ${c.value}`;
    }), L = I(() => e.type === "year" || a.value ? "year" : e.type === "month" || i.value ? "month" : e.type === "date" ? "date" : ""), j = I(() => !e.touchable || !L.value), q = I(() => {
      var ne, he;
      const Se = le(`${u.value}-${s.value}-${c.value}`).day(), Ne = c.value ? Lo(c.value, 2, "0") : "";
      return {
        week: `${Se}`,
        year: (ne = u.value) != null ? ne : "",
        month: (he = s.value) != null ? he : "",
        date: Ne
      };
    }), W = I(
      () => E.value.chooseRangeDay.map((ne) => le(ne).format("YYYY-MM-DD"))
    ), ce = I(() => u.value === f.value), J = I(() => s.value === d.value);
    let ve = 0, Q = 0, de = "", U;
    fe(
      () => e.modelValue,
      (ne) => {
        if (!(!Fe() || eo(ne) || !ne))
          if (e.range) {
            if (!Ge(ne))
              return;
            l.value = ne.length !== 1, ie(ne, e.type);
          } else if (e.multiple) {
            if (!Ge(ne))
              return;
            me(ne, e.type);
          } else
            we(ne);
      },
      { immediate: !0 }
    ), fe(L, Ie);
    function oe(ne) {
      ne === "year" ? a.value = !0 : ne === "month" ? i.value = !0 : (a.value = !1, i.value = !1);
    }
    function B(ne) {
      if (j.value)
        return;
      const { clientX: he, clientY: Se } = ne.touches[0];
      ve = he, Q = Se;
    }
    function Y(ne, he) {
      return ne >= he && ne > 20 ? "x" : "y";
    }
    function x(ne) {
      if (j.value)
        return;
      const { clientX: he, clientY: Se } = ne.touches[0], Ne = he - ve, Le = Se - Q;
      U = Y(Math.abs(Ne), Math.abs(Le)), de = Ne > 0 ? "prev" : "next";
    }
    function ue() {
      return Pk(this, null, function* () {
        if (j.value || U !== "x")
          return;
        const ne = L.value === "year" ? S : L.value === "month" ? T : O;
        yield wn(), ne.value.forwardRef(de), Ie();
      });
    }
    function $e(ne, he) {
      const Se = he === "year" ? y : he === "month" ? h : C;
      if (Se.value = l.value ? [ne, ne] : [Se.value[0], ne], l.value = !l.value, l.value) {
        const Le = le(Se.value[0]).isAfter(Se.value[1]) ? [Se.value[1], Se.value[0]] : [...Se.value];
        w(e["onUpdate:modelValue"], Le), w(e.onChange, Le);
      }
    }
    function ze(ne, he) {
      const Se = he === "year" ? g : he === "month" ? m : k, Ne = he === "year" ? "YYYY" : he === "month" ? "YYYY-MM" : "YYYY-MM-DD", Le = Se.value.map((dn) => le(dn).format(Ne)), Qe = Le.findIndex((dn) => dn === ne);
      Qe === -1 ? Le.push(ne) : Le.splice(Qe, 1), w(e["onUpdate:modelValue"], Le), w(e.onChange, Le);
    }
    function We(ne, he) {
      return !u.value || !s.value ? !1 : ce.value ? ne === "year" ? he < F(u.value) : ne === "month" ? he < s.value : J.value ? he < F(c.value) : s.value > d.value : u.value > f.value;
    }
    function tn(ne) {
      const { readonly: he, range: Se, multiple: Ne, onChange: Le, "onUpdate:modelValue": Qe } = e;
      if (ne < 0 || he)
        return;
      v.value = We("day", ne);
      const dn = `${f.value}-${d.value}-${ne}`, hn = le(dn).format("YYYY-MM-DD");
      Se ? $e(hn, "day") : Ne ? ze(hn, "day") : (w(Qe, hn), w(Le, hn));
    }
    function ge(ne) {
      const { type: he, readonly: Se, range: Ne, multiple: Le, onChange: Qe, onPreview: dn, "onUpdate:modelValue": hn } = e;
      if (v.value = We("month", ne), he === "month" && !Se) {
        const no = `${f.value}-${ne}`;
        Ne ? $e(no, "month") : Le ? ze(no, "month") : (w(hn, no), w(Qe, no));
      } else
        d.value = ne, w(
          dn,
          F(f.value),
          F(d.value),
          he === "date" ? F(c.value) : void 0
        );
      i.value = !1;
    }
    function Ve(ne) {
      const { type: he, readonly: Se, range: Ne, multiple: Le, onChange: Qe, onPreview: dn, "onUpdate:modelValue": hn } = e;
      v.value = We("year", ne), he === "year" && !Se ? Ne ? $e(`${ne}`, "year") : Le ? ze(`${ne}`, "year") : (w(hn, `${ne}`), w(Qe, `${ne}`)) : (f.value = `${ne}`, w(
        dn,
        F(f.value),
        F(d.value),
        he === "date" ? F(c.value) : void 0
      )), a.value = !1;
    }
    function _e(ne, he) {
      const Se = he === "prev" ? -1 : 1;
      if (ne === "year")
        f.value = `${F(f.value) + Se}`;
      else {
        let Ne = F(d.value) + Se;
        Ne < 1 && (f.value = `${F(f.value) - 1}`, Ne = 12), Ne > 12 && (f.value = `${F(f.value) + 1}`, Ne = 1), d.value = mr.find((Le) => F(Le) === Ne);
      }
      w(
        e.onPreview,
        F(f.value),
        F(d.value),
        e.type === "date" ? F(c.value) : void 0
      );
    }
    function Fe() {
      return (e.multiple || e.range) && !Ge(e.modelValue) ? (console.error('[Varlet] DatePicker: type of prop "modelValue" should be an Array'), !1) : !e.multiple && !e.range && Ge(e.modelValue) ? (console.error('[Varlet] DatePicker: type of prop "modelValue" should be a String'), !1) : !0;
    }
    function eo(ne) {
      return Ge(ne) ? !1 : ne === "Invalid Date" ? (console.error('[Varlet] DatePicker: "modelValue" is an Invalid Date'), !0) : !1;
    }
    function ie(ne, he) {
      const Se = he === "year" ? y : he === "month" ? h : C, Ne = he === "year" ? "YYYY" : he === "month" ? "YYYY-MM" : "YYYY-MM-D", Le = ne.map((hn) => le(hn).format(Ne)).slice(0, 2);
      if (Se.value.some((hn) => eo(hn)))
        return;
      Se.value = Le;
      const dn = le(Se.value[0]).isAfter(Se.value[1]);
      Se.value.length === 2 && dn && (Se.value = [Se.value[1], Se.value[0]]);
    }
    function me(ne, he) {
      const Se = he === "year" ? g : he === "month" ? m : k, Ne = he === "year" ? "YYYY" : he === "month" ? "YYYY-MM" : "YYYY-MM-D", Le = Array.from(new Set(ne.map((Qe) => le(Qe).format(Ne))));
      Se.value = Le.filter((Qe) => Qe !== "Invalid Date");
    }
    function we(ne) {
      const he = le(ne).format("YYYY-MM-D");
      if (eo(he))
        return;
      const [Se, Ne, Le] = he.split("-"), Qe = mr.find((dn) => dn === Ne);
      s.value = Qe, u.value = Se, c.value = Le, d.value = Qe, f.value = Se;
    }
    function Ie() {
      Q = 0, ve = 0, de = "", U = void 0;
    }
    return {
      yearPanelEl: S,
      monthPanelEl: T,
      dayPanelEl: O,
      reverse: v,
      currentDate: n,
      chooseMonth: s,
      chooseYear: u,
      chooseDay: c,
      previewYear: f,
      isYearPanel: a,
      isMonthPanel: i,
      getMonthTitle: N,
      getDateTitle: H,
      getYearTitle: R,
      getPanelType: L,
      getChoose: E,
      getPreview: D,
      componentProps: z,
      slotProps: q,
      formatRange: W,
      t: an,
      n: Ok,
      classes: Tk,
      clickEl: oe,
      handleTouchstart: B,
      handleTouchmove: x,
      handleTouchend: ue,
      getChooseDay: tn,
      getChooseMonth: ge,
      getChooseYear: Ve,
      checkPreview: _e,
      formatElevation: yn
    };
  }
});
Cp.render = Ek;
var ga = Cp;
re(ga);
se(ga, gp);
const r5 = ga;
var rl = ga, Dk = Object.defineProperty, Uu = Object.getOwnPropertySymbols, Bk = Object.prototype.hasOwnProperty, Ik = Object.prototype.propertyIsEnumerable, Hu = (e, n, o) => n in e ? Dk(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, Mk = (e, n) => {
  for (var o in n || (n = {}))
    Bk.call(n, o) && Hu(e, o, n[o]);
  if (Uu)
    for (var o of Uu(n))
      Ik.call(n, o) && Hu(e, o, n[o]);
  return e;
};
const Sp = Mk({
  show: Boolean,
  width: [Number, String],
  title: String,
  message: String,
  messageAlign: {
    type: String,
    default: "left"
  },
  confirmButton: {
    type: Boolean,
    default: !0
  },
  cancelButton: {
    type: Boolean,
    default: !0
  },
  confirmButtonText: String,
  cancelButtonText: String,
  confirmButtonTextColor: String,
  cancelButtonTextColor: String,
  confirmButtonColor: String,
  cancelButtonColor: String,
  dialogClass: String,
  dialogStyle: Object,
  onBeforeClose: A(),
  onConfirm: A(),
  onCancel: A(),
  "onUpdate:show": A()
}, Be(vt, [
  "overlay",
  "overlayClass",
  "overlayStyle",
  "lockScroll",
  "closeOnClickOverlay",
  "closeOnKeyEscape",
  "teleport",
  "onOpen",
  "onClose",
  "onOpened",
  "onClosed",
  "onClickOverlay",
  "onKeyEscape",
  // internal for function call closes the dialog
  "onRouteChange"
]));
var Nk = Object.defineProperty, Yu = Object.getOwnPropertySymbols, Ak = Object.prototype.hasOwnProperty, Vk = Object.prototype.propertyIsEnumerable, ju = (e, n, o) => n in e ? Nk(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, Lk = (e, n) => {
  for (var o in n || (n = {}))
    Ak.call(n, o) && ju(e, o, n[o]);
  if (Yu)
    for (var o of Yu(n))
      Vk.call(n, o) && ju(e, o, n[o]);
  return e;
};
const { name: Rk, n: Fk, classes: Uk } = ee("dialog");
function Hk(e, n) {
  const o = te("var-button"), t = te("var-popup");
  return b(), Oe(t, {
    class: p(e.n("popup")),
    "var-dialog-cover": "",
    show: e.popupShow,
    overlay: e.overlay,
    "overlay-class": e.overlayClass,
    "overlay-style": e.overlayStyle,
    "lock-scroll": e.lockScroll,
    "close-on-click-overlay": e.popupCloseOnClickOverlay,
    "close-on-key-escape": !1,
    teleport: e.teleport,
    onOpen: e.onOpen,
    onClose: e.onClose,
    onClosed: e.onClosed,
    onOpened: e.onOpened,
    onKeyEscape: e.handleKeyEscape,
    onRouteChange: e.onRouteChange,
    onClickOverlay: e.handleClickOverlay
  }, {
    default: pe(() => [
      M(
        "div",
        Ye({
          class: e.classes(e.n("$--box"), e.n(), e.dialogClass),
          style: Lk({ width: e.toSizeUnit(e.width) }, e.dialogStyle)
        }, e.$attrs),
        [
          M(
            "div",
            {
              class: p(e.n("title"))
            },
            [
              V(e.$slots, "title", {}, () => {
                var r;
                return [
                  De(
                    ae((r = e.title) != null ? r : e.t("dialogTitle")),
                    1
                    /* TEXT */
                  )
                ];
              })
            ],
            2
            /* CLASS */
          ),
          M(
            "div",
            {
              class: p(e.n("message")),
              style: K({ textAlign: e.messageAlign })
            },
            [
              V(e.$slots, "default", {}, () => [
                De(
                  ae(e.message),
                  1
                  /* TEXT */
                )
              ])
            ],
            6
            /* CLASS, STYLE */
          ),
          M(
            "div",
            {
              class: p(e.n("actions"))
            },
            [
              e.cancelButton ? (b(), Oe(o, {
                key: 0,
                class: p(e.classes(e.n("button"), e.n("cancel-button"))),
                "var-dialog-cover": "",
                text: "",
                "text-color": e.cancelButtonTextColor,
                color: e.cancelButtonColor,
                onClick: e.cancel
              }, {
                default: pe(() => {
                  var r;
                  return [
                    De(
                      ae((r = e.cancelButtonText) != null ? r : e.t("dialogCancelButtonText")),
                      1
                      /* TEXT */
                    )
                  ];
                }),
                _: 1
                /* STABLE */
              }, 8, ["class", "text-color", "color", "onClick"])) : G("v-if", !0),
              e.confirmButton ? (b(), Oe(o, {
                key: 1,
                class: p(e.classes(e.n("button"), e.n("confirm-button"))),
                "var-dialog-cover": "",
                text: "",
                "text-color": e.confirmButtonTextColor,
                color: e.confirmButtonColor,
                onClick: e.confirm
              }, {
                default: pe(() => {
                  var r;
                  return [
                    De(
                      ae((r = e.confirmButtonText) != null ? r : e.t("dialogConfirmButtonText")),
                      1
                      /* TEXT */
                    )
                  ];
                }),
                _: 1
                /* STABLE */
              }, 8, ["class", "text-color", "color", "onClick"])) : G("v-if", !0)
            ],
            2
            /* CLASS */
          )
        ],
        16
        /* FULL_PROPS */
      )
    ]),
    _: 3
    /* FORWARDED */
  }, 8, ["class", "show", "overlay", "overlay-class", "overlay-style", "lock-scroll", "close-on-click-overlay", "teleport", "onOpen", "onClose", "onClosed", "onOpened", "onKeyEscape", "onRouteChange", "onClickOverlay"]);
}
const Pp = _({
  name: Rk,
  components: {
    VarPopup: Co,
    VarButton: Cn
  },
  inheritAttrs: !1,
  props: Sp,
  setup(e) {
    const n = $(!1), o = $(!1);
    fe(
      () => e.show,
      (s) => {
        n.value = s;
      },
      { immediate: !0 }
    ), fe(
      () => e.closeOnClickOverlay,
      (s) => {
        if (e.onBeforeClose != null) {
          o.value = !1;
          return;
        }
        o.value = s;
      },
      { immediate: !0 }
    );
    function t() {
      return w(e["onUpdate:show"], !1);
    }
    function r() {
      const { closeOnClickOverlay: s, onClickOverlay: u, onBeforeClose: c } = e;
      if (w(u), !!s) {
        if (c != null) {
          w(c, "close", t);
          return;
        }
        w(e["onUpdate:show"], !1);
      }
    }
    function a() {
      const { onBeforeClose: s, onConfirm: u } = e;
      if (w(u), s != null) {
        w(s, "confirm", t);
        return;
      }
      w(e["onUpdate:show"], !1);
    }
    function i() {
      const { onBeforeClose: s, onCancel: u } = e;
      if (w(u), s != null) {
        w(s, "cancel", t);
        return;
      }
      w(e["onUpdate:show"], !1);
    }
    function l() {
      w(e.onKeyEscape), e.closeOnKeyEscape && i();
    }
    return {
      t: an,
      popupShow: n,
      popupCloseOnClickOverlay: o,
      n: Fk,
      classes: Uk,
      handleClickOverlay: r,
      confirm: a,
      cancel: i,
      toSizeUnit: Te,
      handleKeyEscape: l
    };
  }
});
Pp.render = Hk;
var Zt = Pp, Yk = Object.defineProperty, jk = Object.defineProperties, Wk = Object.getOwnPropertyDescriptors, Wu = Object.getOwnPropertySymbols, Kk = Object.prototype.hasOwnProperty, qk = Object.prototype.propertyIsEnumerable, Ku = (e, n, o) => n in e ? Yk(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, bi = (e, n) => {
  for (var o in n || (n = {}))
    Kk.call(n, o) && Ku(e, o, n[o]);
  if (Wu)
    for (var o of Wu(n))
      qk.call(n, o) && Ku(e, o, n[o]);
  return e;
}, Xk = (e, n) => jk(e, Wk(n));
let mo, Er = {};
function Gk(e = {}) {
  return bn(e) ? Xk(bi({}, Er), { message: e }) : bi(bi({}, Er), e);
}
function Bo(e) {
  return _n() ? new Promise((n) => {
    Bo.close();
    const o = Gk(e), t = Ze(o);
    t.teleport = "body", mo = t;
    const { unmountInstance: r } = pt(Zt, t, {
      onConfirm: () => {
        w(t.onConfirm), n("confirm");
      },
      onCancel: () => {
        w(t.onCancel), n("cancel");
      },
      onClose: () => {
        w(t.onClose), n("close");
      },
      onClosed: () => {
        w(t.onClosed), r(), mo === t && (mo = null);
      },
      onRouteChange: () => {
        r(), mo === t && (mo = null);
      },
      "onUpdate:show": (a) => {
        t.show = a;
      }
    });
    t.show = !0;
  }) : Promise.resolve();
}
Bo.setDefaultOptions = function(e) {
  Er = e;
};
Bo.resetDefaultOptions = function() {
  Er = {};
};
Bo.close = function() {
  if (mo != null) {
    const e = mo;
    mo = null, He().then(() => {
      e.show = !1;
    });
  }
};
Bo.Component = Zt;
re(Zt);
re(Zt, Bo);
se(Bo, Sp);
const a5 = Zt;
var al = Bo;
const zp = {
  inset: {
    type: [Boolean, Number, String],
    default: !1
  },
  vertical: Boolean,
  description: String,
  margin: String,
  dashed: Boolean,
  hairline: Boolean
}, { name: Zk, n: Jk, classes: Qk } = ee("divider");
function xk(e, n) {
  return b(), P(
    "div",
    {
      class: p(
        e.classes(
          e.n(),
          e.n("$--box"),
          [e.vertical, e.n("--vertical")],
          [e.withText, e.n("--with-text")],
          [e.withPresetInset, e.n("--inset")],
          [e.dashed, e.n("--dashed")],
          [e.hairline, e.n("--hairline")]
        )
      ),
      style: K(e.style),
      role: "separator"
    },
    [
      e.vertical ? G("v-if", !0) : V(e.$slots, "default", { key: 0 }, () => [
        e.description ? (b(), P(
          "span",
          {
            key: 0,
            class: p(e.n("text"))
          },
          ae(e.description),
          3
          /* TEXT, CLASS */
        )) : G("v-if", !0)
      ])
    ],
    6
    /* CLASS, STYLE */
  );
}
const Op = _({
  name: Zk,
  props: zp,
  setup(e, { slots: n }) {
    const o = $(!1), t = I(() => {
      const { vertical: i, inset: l } = e;
      return !i && l === !0;
    }), r = I(() => {
      const { inset: i, vertical: l, margin: s } = e;
      if (Jl(i) || l)
        return { margin: s };
      const u = F(i), c = Math.abs(u) + (i + "").replace(u + "", "");
      return {
        margin: s,
        width: `calc(100% - ${Te(c)})`,
        left: u > 0 ? Te(c) : Te(0)
      };
    });
    cn(a), Yt(a);
    function a() {
      const { description: i, vertical: l } = e;
      o.value = (n.default || i != null) && !l;
    }
    return {
      n: Jk,
      classes: Qk,
      withText: o,
      style: r,
      withPresetInset: t
    };
  }
});
Op.render = xk;
var ba = Op;
re(ba);
se(ba, zp);
const i5 = ba;
var il = ba;
const Tp = {
  direction: {
    type: String,
    default: "xy"
  },
  attraction: String,
  disabled: Boolean,
  boundary: {
    type: Object,
    default: () => ({
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    })
  },
  zIndex: {
    type: [Number, String],
    default: 90
  },
  teleport: {
    type: [String, Object, Boolean],
    default: "body"
  },
  onClick: A()
};
var _k = Object.defineProperty, e$ = Object.defineProperties, n$ = Object.getOwnPropertyDescriptors, qu = Object.getOwnPropertySymbols, o$ = Object.prototype.hasOwnProperty, t$ = Object.prototype.propertyIsEnumerable, Xu = (e, n, o) => n in e ? _k(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, Gu = (e, n) => {
  for (var o in n || (n = {}))
    o$.call(n, o) && Xu(e, o, n[o]);
  if (qu)
    for (var o of qu(n))
      t$.call(n, o) && Xu(e, o, n[o]);
  return e;
}, Zu = (e, n) => e$(e, n$(n)), r$ = (e, n, o) => new Promise((t, r) => {
  var a = (s) => {
    try {
      l(o.next(s));
    } catch (u) {
      r(u);
    }
  }, i = (s) => {
    try {
      l(o.throw(s));
    } catch (u) {
      r(u);
    }
  }, l = (s) => s.done ? t(s.value) : Promise.resolve(s.value).then(a, i);
  l((o = o.apply(e, n)).next());
});
const { name: a$, n: i$, classes: l$ } = ee("drag");
function s$(e, n) {
  return b(), Oe(xn, {
    to: e.teleport === !1 ? void 0 : e.teleport,
    disabled: e.teleportDisabled || e.teleport === !1
  }, [
    M(
      "div",
      Ye({
        ref: "drag",
        class: e.classes(e.n(), e.n("$--box"), [e.enableTransition, e.n("--transition")]),
        style: {
          "z-index": e.zIndex
        },
        onTouchstart: n[0] || (n[0] = (...o) => e.handleTouchstart && e.handleTouchstart(...o)),
        onTouchmove: n[1] || (n[1] = (...o) => e.handleTouchmove && e.handleTouchmove(...o)),
        onTouchend: n[2] || (n[2] = (...o) => e.handleTouchend && e.handleTouchend(...o)),
        onTouchcancel: n[3] || (n[3] = (...o) => e.handleTouchend && e.handleTouchend(...o)),
        onClick: n[4] || (n[4] = (...o) => e.handleClick && e.handleClick(...o))
      }, e.getAttrs()),
      [
        V(e.$slots, "default")
      ],
      16
      /* FULL_PROPS */
    )
  ], 8, ["to", "disabled"]);
}
const Ep = _({
  name: a$,
  inheritAttrs: !1,
  props: Tp,
  setup(e, { attrs: n }) {
    const o = $(null), t = $(0), r = $(0), a = $(!1), i = $(!1), { touching: l, dragging: s, moveX: u, moveY: c, startTouch: d, moveTouch: f, endTouch: v, resetTouch: g } = ft(), { disabled: m } = Wo(), k = Ze({
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    });
    fe(() => e.boundary, R), To(H), cn(() => {
      R(), H();
    });
    function y(j) {
      e.disabled || (d(j), T());
    }
    function h(j) {
      return r$(this, null, function* () {
        !l.value || e.disabled || (f(j), Ae(j), i.value = !1, a.value = !0, e.direction.includes("x") && (t.value += u.value), e.direction.includes("y") && (r.value += c.value), D());
      });
    }
    function C() {
      e.disabled || (v(), i.value = !0, E());
    }
    function S(j) {
      s.value || w(e.onClick, j);
    }
    function T() {
      const { left: j, top: q } = O();
      t.value = j, r.value = q;
    }
    function O() {
      const j = un(o.value), q = un(window), W = j.top - q.top, ce = q.bottom - j.bottom, J = j.left - q.left, ve = q.right - j.right, { width: Q, height: de } = j, { width: U, height: oe } = q;
      return {
        top: W,
        bottom: ce,
        left: J,
        right: ve,
        width: Q,
        height: de,
        halfWidth: Q / 2,
        halfHeight: de / 2,
        windowWidth: U,
        windowHeight: oe
      };
    }
    function z() {
      const j = O(), q = k.left, W = j.windowWidth - k.right - j.width, ce = k.top, J = j.windowHeight - k.bottom - j.height;
      return {
        minX: q,
        minY: ce,
        // fallback the drag element overflows boundary
        maxX: q < W ? W : q,
        maxY: ce < J ? J : ce
      };
    }
    function E() {
      if (e.attraction == null)
        return;
      const { halfWidth: j, halfHeight: q, top: W, bottom: ce, left: J, right: ve } = O(), { minX: Q, minY: de, maxX: U, maxY: oe } = z(), B = J + j - k.left, Y = ve + j - k.right, x = W + q - k.top, ue = ce + q - k.bottom, $e = B <= Y, ze = x <= ue;
      e.attraction.includes("x") && (t.value = $e ? Q : U), e.attraction.includes("y") && (r.value = ze ? de : oe);
    }
    function D() {
      const { minX: j, minY: q, maxX: W, maxY: ce } = z();
      t.value = wo(t.value, j, W), r.value = wo(r.value, q, ce);
    }
    function R() {
      const { top: j = 0, bottom: q = 0, left: W = 0, right: ce = 0 } = e.boundary;
      k.top = xe(j), k.bottom = xe(q), k.left = xe(W), k.right = xe(ce);
    }
    function N() {
      var j;
      const q = (j = n.style) != null ? j : {};
      return Zu(Gu({}, n), {
        style: Zu(Gu({}, q), {
          // when the drag element is dragged for the first time, the inset should be cleared to avoid affecting translateX and translateY.
          top: a.value ? 0 : q.top,
          left: a.value ? 0 : q.left,
          right: a.value ? "auto" : q.right,
          bottom: a.value ? "auto" : q.bottom,
          transform: a.value ? `translate(${t.value}px, ${r.value}px)` : q.transform
        })
      });
    }
    function H() {
      a.value && (T(), D());
    }
    function L() {
      g(), i.value = !1, a.value = !1, t.value = 0, r.value = 0;
    }
    return {
      drag: o,
      x: t,
      y: r,
      enableTransition: i,
      dragging: s,
      teleportDisabled: m,
      n: i$,
      classes: l$,
      getAttrs: N,
      handleTouchstart: y,
      handleTouchmove: h,
      handleTouchend: C,
      handleClick: S,
      resize: H,
      reset: L
    };
  }
});
Ep.render = s$;
var ya = Ep;
re(ya);
se(ya, Tp);
const l5 = ya;
var Dr = ya, u$ = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function hr(e) {
  return e.replace(/left|right|bottom|top/g, function(n) {
    return u$[n];
  });
}
var ao = "top", zo = "bottom", Ro = "right", ko = "left", ms = "auto", ka = [ao, zo, Ro, ko], $a = "start", It = "end", c$ = "clippingParents", Dp = "viewport", bt = "popper", d$ = "reference", Ju = /* @__PURE__ */ ka.reduce(function(e, n) {
  return e.concat([n + "-" + $a, n + "-" + It]);
}, []), Bp = /* @__PURE__ */ [].concat(ka, [ms]).reduce(function(e, n) {
  return e.concat([n, n + "-" + $a, n + "-" + It]);
}, []), f$ = "beforeRead", p$ = "read", v$ = "afterRead", m$ = "beforeMain", h$ = "main", g$ = "afterMain", b$ = "beforeWrite", y$ = "write", k$ = "afterWrite", $$ = [f$, p$, v$, m$, h$, g$, b$, y$, k$];
function $o(e) {
  return e.split("-")[0];
}
var w$ = {
  start: "end",
  end: "start"
};
function Qu(e) {
  return e.replace(/start|end/g, function(n) {
    return w$[n];
  });
}
function Hn(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var n = e.ownerDocument;
    return n && n.defaultView || window;
  }
  return e;
}
function Fo(e) {
  var n = Hn(e).Element;
  return e instanceof n || e instanceof Element;
}
function Ln(e) {
  var n = Hn(e).HTMLElement;
  return e instanceof n || e instanceof HTMLElement;
}
function hs(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var n = Hn(e).ShadowRoot;
  return e instanceof n || e instanceof ShadowRoot;
}
function Io(e) {
  return ((Fo(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
var Ct = Math.max, xu = Math.min, it = Math.round;
function ll() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(n) {
    return n.brand + "/" + n.version;
  }).join(" ") : navigator.userAgent;
}
function Ip() {
  return !/^((?!chrome|android).)*safari/i.test(ll());
}
function lt(e, n, o) {
  n === void 0 && (n = !1), o === void 0 && (o = !1);
  var t = e.getBoundingClientRect(), r = 1, a = 1;
  n && Ln(e) && (r = e.offsetWidth > 0 && it(t.width) / e.offsetWidth || 1, a = e.offsetHeight > 0 && it(t.height) / e.offsetHeight || 1);
  var i = Fo(e) ? Hn(e) : window, l = i.visualViewport, s = !Ip() && o, u = (t.left + (s && l ? l.offsetLeft : 0)) / r, c = (t.top + (s && l ? l.offsetTop : 0)) / a, d = t.width / r, f = t.height / a;
  return {
    width: d,
    height: f,
    top: c,
    right: u + d,
    bottom: c + f,
    left: u,
    x: u,
    y: c
  };
}
function gs(e) {
  var n = Hn(e), o = n.pageXOffset, t = n.pageYOffset;
  return {
    scrollLeft: o,
    scrollTop: t
  };
}
function bs(e) {
  return lt(Io(e)).left + gs(e).scrollLeft;
}
function C$(e, n) {
  var o = Hn(e), t = Io(e), r = o.visualViewport, a = t.clientWidth, i = t.clientHeight, l = 0, s = 0;
  if (r) {
    a = r.width, i = r.height;
    var u = Ip();
    (u || !u && n === "fixed") && (l = r.offsetLeft, s = r.offsetTop);
  }
  return {
    width: a,
    height: i,
    x: l + bs(e),
    y: s
  };
}
function io(e) {
  return Hn(e).getComputedStyle(e);
}
function S$(e) {
  var n, o = Io(e), t = gs(e), r = (n = e.ownerDocument) == null ? void 0 : n.body, a = Ct(o.scrollWidth, o.clientWidth, r ? r.scrollWidth : 0, r ? r.clientWidth : 0), i = Ct(o.scrollHeight, o.clientHeight, r ? r.scrollHeight : 0, r ? r.clientHeight : 0), l = -t.scrollLeft + bs(e), s = -t.scrollTop;
  return io(r || o).direction === "rtl" && (l += Ct(o.clientWidth, r ? r.clientWidth : 0) - a), {
    width: a,
    height: i,
    x: l,
    y: s
  };
}
function Jn(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function wa(e) {
  return Jn(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (hs(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    Io(e)
  );
}
function ys(e) {
  var n = io(e), o = n.overflow, t = n.overflowX, r = n.overflowY;
  return /auto|scroll|overlay|hidden/.test(o + r + t);
}
function Mp(e) {
  return ["html", "body", "#document"].indexOf(Jn(e)) >= 0 ? e.ownerDocument.body : Ln(e) && ys(e) ? e : Mp(wa(e));
}
function St(e, n) {
  var o;
  n === void 0 && (n = []);
  var t = Mp(e), r = t === ((o = e.ownerDocument) == null ? void 0 : o.body), a = Hn(t), i = r ? [a].concat(a.visualViewport || [], ys(t) ? t : []) : t, l = n.concat(i);
  return r ? l : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    l.concat(St(wa(i)))
  );
}
function P$(e) {
  return ["table", "td", "th"].indexOf(Jn(e)) >= 0;
}
function _u(e) {
  return !Ln(e) || // https://github.com/popperjs/popper-core/issues/837
  io(e).position === "fixed" ? null : e.offsetParent;
}
function z$(e) {
  var n = /firefox/i.test(ll()), o = /Trident/i.test(ll());
  if (o && Ln(e)) {
    var t = io(e);
    if (t.position === "fixed")
      return null;
  }
  var r = wa(e);
  for (hs(r) && (r = r.host); Ln(r) && ["html", "body"].indexOf(Jn(r)) < 0; ) {
    var a = io(r);
    if (a.transform !== "none" || a.perspective !== "none" || a.contain === "paint" || ["transform", "perspective"].indexOf(a.willChange) !== -1 || n && a.willChange === "filter" || n && a.filter && a.filter !== "none")
      return r;
    r = r.parentNode;
  }
  return null;
}
function ks(e) {
  for (var n = Hn(e), o = _u(e); o && P$(o) && io(o).position === "static"; )
    o = _u(o);
  return o && (Jn(o) === "html" || Jn(o) === "body" && io(o).position === "static") ? n : o || z$(e) || n;
}
function O$(e, n) {
  var o = n.getRootNode && n.getRootNode();
  if (e.contains(n))
    return !0;
  if (o && hs(o)) {
    var t = n;
    do {
      if (t && e.isSameNode(t))
        return !0;
      t = t.parentNode || t.host;
    } while (t);
  }
  return !1;
}
function sl(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function T$(e, n) {
  var o = lt(e, !1, n === "fixed");
  return o.top = o.top + e.clientTop, o.left = o.left + e.clientLeft, o.bottom = o.top + e.clientHeight, o.right = o.left + e.clientWidth, o.width = e.clientWidth, o.height = e.clientHeight, o.x = o.left, o.y = o.top, o;
}
function ec(e, n, o) {
  return n === Dp ? sl(C$(e, o)) : Fo(n) ? T$(n, o) : sl(S$(Io(e)));
}
function E$(e) {
  var n = St(wa(e)), o = ["absolute", "fixed"].indexOf(io(e).position) >= 0, t = o && Ln(e) ? ks(e) : e;
  return Fo(t) ? n.filter(function(r) {
    return Fo(r) && O$(r, t) && Jn(r) !== "body";
  }) : [];
}
function D$(e, n, o, t) {
  var r = n === "clippingParents" ? E$(e) : [].concat(n), a = [].concat(r, [o]), i = a[0], l = a.reduce(function(s, u) {
    var c = ec(e, u, t);
    return s.top = Ct(c.top, s.top), s.right = xu(c.right, s.right), s.bottom = xu(c.bottom, s.bottom), s.left = Ct(c.left, s.left), s;
  }, ec(e, i, t));
  return l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l;
}
function Mt(e) {
  return e.split("-")[1];
}
function B$(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Np(e) {
  var n = e.reference, o = e.element, t = e.placement, r = t ? $o(t) : null, a = t ? Mt(t) : null, i = n.x + n.width / 2 - o.width / 2, l = n.y + n.height / 2 - o.height / 2, s;
  switch (r) {
    case ao:
      s = {
        x: i,
        y: n.y - o.height
      };
      break;
    case zo:
      s = {
        x: i,
        y: n.y + n.height
      };
      break;
    case Ro:
      s = {
        x: n.x + n.width,
        y: l
      };
      break;
    case ko:
      s = {
        x: n.x - o.width,
        y: l
      };
      break;
    default:
      s = {
        x: n.x,
        y: n.y
      };
  }
  var u = r ? B$(r) : null;
  if (u != null) {
    var c = u === "y" ? "height" : "width";
    switch (a) {
      case $a:
        s[u] = s[u] - (n[c] / 2 - o[c] / 2);
        break;
      case It:
        s[u] = s[u] + (n[c] / 2 - o[c] / 2);
        break;
    }
  }
  return s;
}
function I$() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function M$(e) {
  return Object.assign({}, I$(), e);
}
function N$(e, n) {
  return n.reduce(function(o, t) {
    return o[t] = e, o;
  }, {});
}
function Ap(e, n) {
  n === void 0 && (n = {});
  var o = n, t = o.placement, r = t === void 0 ? e.placement : t, a = o.strategy, i = a === void 0 ? e.strategy : a, l = o.boundary, s = l === void 0 ? c$ : l, u = o.rootBoundary, c = u === void 0 ? Dp : u, d = o.elementContext, f = d === void 0 ? bt : d, v = o.altBoundary, g = v === void 0 ? !1 : v, m = o.padding, k = m === void 0 ? 0 : m, y = M$(typeof k != "number" ? k : N$(k, ka)), h = f === bt ? d$ : bt, C = e.rects.popper, S = e.elements[g ? h : f], T = D$(Fo(S) ? S : S.contextElement || Io(e.elements.popper), s, c, i), O = lt(e.elements.reference), z = Np({
    reference: O,
    element: C,
    strategy: "absolute",
    placement: r
  }), E = sl(Object.assign({}, C, z)), D = f === bt ? E : O, R = {
    top: T.top - D.top + y.top,
    bottom: D.bottom - T.bottom + y.bottom,
    left: T.left - D.left + y.left,
    right: D.right - T.right + y.right
  }, N = e.modifiersData.offset;
  if (f === bt && N) {
    var H = N[r];
    Object.keys(R).forEach(function(L) {
      var j = [Ro, zo].indexOf(L) >= 0 ? 1 : -1, q = [ao, zo].indexOf(L) >= 0 ? "y" : "x";
      R[L] += H[q] * j;
    });
  }
  return R;
}
function A$(e, n) {
  n === void 0 && (n = {});
  var o = n, t = o.placement, r = o.boundary, a = o.rootBoundary, i = o.padding, l = o.flipVariations, s = o.allowedAutoPlacements, u = s === void 0 ? Bp : s, c = Mt(t), d = c ? l ? Ju : Ju.filter(function(g) {
    return Mt(g) === c;
  }) : ka, f = d.filter(function(g) {
    return u.indexOf(g) >= 0;
  });
  f.length === 0 && (f = d);
  var v = f.reduce(function(g, m) {
    return g[m] = Ap(e, {
      placement: m,
      boundary: r,
      rootBoundary: a,
      padding: i
    })[$o(m)], g;
  }, {});
  return Object.keys(v).sort(function(g, m) {
    return v[g] - v[m];
  });
}
function V$(e) {
  if ($o(e) === ms)
    return [];
  var n = hr(e);
  return [Qu(e), n, Qu(n)];
}
function L$(e) {
  var n = e.state, o = e.options, t = e.name;
  if (!n.modifiersData[t]._skip) {
    for (var r = o.mainAxis, a = r === void 0 ? !0 : r, i = o.altAxis, l = i === void 0 ? !0 : i, s = o.fallbackPlacements, u = o.padding, c = o.boundary, d = o.rootBoundary, f = o.altBoundary, v = o.flipVariations, g = v === void 0 ? !0 : v, m = o.allowedAutoPlacements, k = n.options.placement, y = $o(k), h = y === k, C = s || (h || !g ? [hr(k)] : V$(k)), S = [k].concat(C).reduce(function(B, Y) {
      return B.concat($o(Y) === ms ? A$(n, {
        placement: Y,
        boundary: c,
        rootBoundary: d,
        padding: u,
        flipVariations: g,
        allowedAutoPlacements: m
      }) : Y);
    }, []), T = n.rects.reference, O = n.rects.popper, z = /* @__PURE__ */ new Map(), E = !0, D = S[0], R = 0; R < S.length; R++) {
      var N = S[R], H = $o(N), L = Mt(N) === $a, j = [ao, zo].indexOf(H) >= 0, q = j ? "width" : "height", W = Ap(n, {
        placement: N,
        boundary: c,
        rootBoundary: d,
        altBoundary: f,
        padding: u
      }), ce = j ? L ? Ro : ko : L ? zo : ao;
      T[q] > O[q] && (ce = hr(ce));
      var J = hr(ce), ve = [];
      if (a && ve.push(W[H] <= 0), l && ve.push(W[ce] <= 0, W[J] <= 0), ve.every(function(B) {
        return B;
      })) {
        D = N, E = !1;
        break;
      }
      z.set(N, ve);
    }
    if (E)
      for (var Q = g ? 3 : 1, de = function(Y) {
        var x = S.find(function(ue) {
          var $e = z.get(ue);
          if ($e)
            return $e.slice(0, Y).every(function(ze) {
              return ze;
            });
        });
        if (x)
          return D = x, "break";
      }, U = Q; U > 0; U--) {
        var oe = de(U);
        if (oe === "break")
          break;
      }
    n.placement !== D && (n.modifiersData[t]._skip = !0, n.placement = D, n.reset = !0);
  }
}
const R$ = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: L$,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function F$(e, n, o) {
  var t = $o(e), r = [ko, ao].indexOf(t) >= 0 ? -1 : 1, a = typeof o == "function" ? o(Object.assign({}, n, {
    placement: e
  })) : o, i = a[0], l = a[1];
  return i = i || 0, l = (l || 0) * r, [ko, Ro].indexOf(t) >= 0 ? {
    x: l,
    y: i
  } : {
    x: i,
    y: l
  };
}
function U$(e) {
  var n = e.state, o = e.options, t = e.name, r = o.offset, a = r === void 0 ? [0, 0] : r, i = Bp.reduce(function(c, d) {
    return c[d] = F$(d, n.rects, a), c;
  }, {}), l = i[n.placement], s = l.x, u = l.y;
  n.modifiersData.popperOffsets != null && (n.modifiersData.popperOffsets.x += s, n.modifiersData.popperOffsets.y += u), n.modifiersData[t] = i;
}
const H$ = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: U$
};
var Y$ = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function j$(e) {
  var n = e.x, o = e.y, t = window, r = t.devicePixelRatio || 1;
  return {
    x: it(n * r) / r || 0,
    y: it(o * r) / r || 0
  };
}
function nc(e) {
  var n, o = e.popper, t = e.popperRect, r = e.placement, a = e.variation, i = e.offsets, l = e.position, s = e.gpuAcceleration, u = e.adaptive, c = e.roundOffsets, d = e.isFixed, f = i.x, v = f === void 0 ? 0 : f, g = i.y, m = g === void 0 ? 0 : g, k = typeof c == "function" ? c({
    x: v,
    y: m
  }) : {
    x: v,
    y: m
  };
  v = k.x, m = k.y;
  var y = i.hasOwnProperty("x"), h = i.hasOwnProperty("y"), C = ko, S = ao, T = window;
  if (u) {
    var O = ks(o), z = "clientHeight", E = "clientWidth";
    if (O === Hn(o) && (O = Io(o), io(O).position !== "static" && l === "absolute" && (z = "scrollHeight", E = "scrollWidth")), O = O, r === ao || (r === ko || r === Ro) && a === It) {
      S = zo;
      var D = d && O === T && T.visualViewport ? T.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        O[z]
      );
      m -= D - t.height, m *= s ? 1 : -1;
    }
    if (r === ko || (r === ao || r === zo) && a === It) {
      C = Ro;
      var R = d && O === T && T.visualViewport ? T.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        O[E]
      );
      v -= R - t.width, v *= s ? 1 : -1;
    }
  }
  var N = Object.assign({
    position: l
  }, u && Y$), H = c === !0 ? j$({
    x: v,
    y: m
  }) : {
    x: v,
    y: m
  };
  if (v = H.x, m = H.y, s) {
    var L;
    return Object.assign({}, N, (L = {}, L[S] = h ? "0" : "", L[C] = y ? "0" : "", L.transform = (T.devicePixelRatio || 1) <= 1 ? "translate(" + v + "px, " + m + "px)" : "translate3d(" + v + "px, " + m + "px, 0)", L));
  }
  return Object.assign({}, N, (n = {}, n[S] = h ? m + "px" : "", n[C] = y ? v + "px" : "", n.transform = "", n));
}
function W$(e) {
  var n = e.state, o = e.options, t = o.gpuAcceleration, r = t === void 0 ? !0 : t, a = o.adaptive, i = a === void 0 ? !0 : a, l = o.roundOffsets, s = l === void 0 ? !0 : l, u = {
    placement: $o(n.placement),
    variation: Mt(n.placement),
    popper: n.elements.popper,
    popperRect: n.rects.popper,
    gpuAcceleration: r,
    isFixed: n.options.strategy === "fixed"
  };
  n.modifiersData.popperOffsets != null && (n.styles.popper = Object.assign({}, n.styles.popper, nc(Object.assign({}, u, {
    offsets: n.modifiersData.popperOffsets,
    position: n.options.strategy,
    adaptive: i,
    roundOffsets: s
  })))), n.modifiersData.arrow != null && (n.styles.arrow = Object.assign({}, n.styles.arrow, nc(Object.assign({}, u, {
    offsets: n.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: s
  })))), n.attributes.popper = Object.assign({}, n.attributes.popper, {
    "data-popper-placement": n.placement
  });
}
const Vp = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: W$,
  data: {}
};
function K$(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function q$(e) {
  return e === Hn(e) || !Ln(e) ? gs(e) : K$(e);
}
function X$(e) {
  var n = e.getBoundingClientRect(), o = it(n.width) / e.offsetWidth || 1, t = it(n.height) / e.offsetHeight || 1;
  return o !== 1 || t !== 1;
}
function G$(e, n, o) {
  o === void 0 && (o = !1);
  var t = Ln(n), r = Ln(n) && X$(n), a = Io(n), i = lt(e, r, o), l = {
    scrollLeft: 0,
    scrollTop: 0
  }, s = {
    x: 0,
    y: 0
  };
  return (t || !t && !o) && ((Jn(n) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  ys(a)) && (l = q$(n)), Ln(n) ? (s = lt(n, !0), s.x += n.clientLeft, s.y += n.clientTop) : a && (s.x = bs(a))), {
    x: i.left + l.scrollLeft - s.x,
    y: i.top + l.scrollTop - s.y,
    width: i.width,
    height: i.height
  };
}
function Z$(e) {
  var n = lt(e), o = e.offsetWidth, t = e.offsetHeight;
  return Math.abs(n.width - o) <= 1 && (o = n.width), Math.abs(n.height - t) <= 1 && (t = n.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: o,
    height: t
  };
}
function J$(e) {
  var n = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Set(), t = [];
  e.forEach(function(a) {
    n.set(a.name, a);
  });
  function r(a) {
    o.add(a.name);
    var i = [].concat(a.requires || [], a.requiresIfExists || []);
    i.forEach(function(l) {
      if (!o.has(l)) {
        var s = n.get(l);
        s && r(s);
      }
    }), t.push(a);
  }
  return e.forEach(function(a) {
    o.has(a.name) || r(a);
  }), t;
}
function Q$(e) {
  var n = J$(e);
  return $$.reduce(function(o, t) {
    return o.concat(n.filter(function(r) {
      return r.phase === t;
    }));
  }, []);
}
function x$(e) {
  var n;
  return function() {
    return n || (n = new Promise(function(o) {
      Promise.resolve().then(function() {
        n = void 0, o(e());
      });
    })), n;
  };
}
function _$(e) {
  var n = e.reduce(function(o, t) {
    var r = o[t.name];
    return o[t.name] = r ? Object.assign({}, r, t, {
      options: Object.assign({}, r.options, t.options),
      data: Object.assign({}, r.data, t.data)
    }) : t, o;
  }, {});
  return Object.keys(n).map(function(o) {
    return n[o];
  });
}
var oc = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function tc() {
  for (var e = arguments.length, n = new Array(e), o = 0; o < e; o++)
    n[o] = arguments[o];
  return !n.some(function(t) {
    return !(t && typeof t.getBoundingClientRect == "function");
  });
}
function ew(e) {
  e === void 0 && (e = {});
  var n = e, o = n.defaultModifiers, t = o === void 0 ? [] : o, r = n.defaultOptions, a = r === void 0 ? oc : r;
  return function(l, s, u) {
    u === void 0 && (u = a);
    var c = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, oc, a),
      modifiersData: {},
      elements: {
        reference: l,
        popper: s
      },
      attributes: {},
      styles: {}
    }, d = [], f = !1, v = {
      state: c,
      setOptions: function(y) {
        var h = typeof y == "function" ? y(c.options) : y;
        m(), c.options = Object.assign({}, a, c.options, h), c.scrollParents = {
          reference: Fo(l) ? St(l) : l.contextElement ? St(l.contextElement) : [],
          popper: St(s)
        };
        var C = Q$(_$([].concat(t, c.options.modifiers)));
        return c.orderedModifiers = C.filter(function(S) {
          return S.enabled;
        }), g(), v.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!f) {
          var y = c.elements, h = y.reference, C = y.popper;
          if (tc(h, C)) {
            c.rects = {
              reference: G$(h, ks(C), c.options.strategy === "fixed"),
              popper: Z$(C)
            }, c.reset = !1, c.placement = c.options.placement, c.orderedModifiers.forEach(function(R) {
              return c.modifiersData[R.name] = Object.assign({}, R.data);
            });
            for (var S = 0; S < c.orderedModifiers.length; S++) {
              if (c.reset === !0) {
                c.reset = !1, S = -1;
                continue;
              }
              var T = c.orderedModifiers[S], O = T.fn, z = T.options, E = z === void 0 ? {} : z, D = T.name;
              typeof O == "function" && (c = O({
                state: c,
                options: E,
                name: D,
                instance: v
              }) || c);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: x$(function() {
        return new Promise(function(k) {
          v.forceUpdate(), k(c);
        });
      }),
      destroy: function() {
        m(), f = !0;
      }
    };
    if (!tc(l, s))
      return v;
    v.setOptions(u).then(function(k) {
      !f && u.onFirstUpdate && u.onFirstUpdate(k);
    });
    function g() {
      c.orderedModifiers.forEach(function(k) {
        var y = k.name, h = k.options, C = h === void 0 ? {} : h, S = k.effect;
        if (typeof S == "function") {
          var T = S({
            state: c,
            name: y,
            instance: v,
            options: C
          }), O = function() {
          };
          d.push(T || O);
        }
      });
    }
    function m() {
      d.forEach(function(k) {
        return k();
      }), d = [];
    }
    return v;
  };
}
var ir = {
  passive: !0
};
function nw(e) {
  var n = e.state, o = e.instance, t = e.options, r = t.scroll, a = r === void 0 ? !0 : r, i = t.resize, l = i === void 0 ? !0 : i, s = Hn(n.elements.popper), u = [].concat(n.scrollParents.reference, n.scrollParents.popper);
  return a && u.forEach(function(c) {
    c.addEventListener("scroll", o.update, ir);
  }), l && s.addEventListener("resize", o.update, ir), function() {
    a && u.forEach(function(c) {
      c.removeEventListener("scroll", o.update, ir);
    }), l && s.removeEventListener("resize", o.update, ir);
  };
}
const ow = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: nw,
  data: {}
};
function tw(e) {
  var n = e.state, o = e.name;
  n.modifiersData[o] = Np({
    reference: n.rects.reference,
    element: n.rects.popper,
    strategy: "absolute",
    placement: n.placement
  });
}
const rw = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: tw,
  data: {}
};
function aw(e) {
  var n = e.state;
  Object.keys(n.elements).forEach(function(o) {
    var t = n.styles[o] || {}, r = n.attributes[o] || {}, a = n.elements[o];
    !Ln(a) || !Jn(a) || (Object.assign(a.style, t), Object.keys(r).forEach(function(i) {
      var l = r[i];
      l === !1 ? a.removeAttribute(i) : a.setAttribute(i, l === !0 ? "" : l);
    }));
  });
}
function iw(e) {
  var n = e.state, o = {
    popper: {
      position: n.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  return Object.assign(n.elements.popper.style, o.popper), n.styles = o, n.elements.arrow && Object.assign(n.elements.arrow.style, o.arrow), function() {
    Object.keys(n.elements).forEach(function(t) {
      var r = n.elements[t], a = n.attributes[t] || {}, i = Object.keys(n.styles.hasOwnProperty(t) ? n.styles[t] : o[t]), l = i.reduce(function(s, u) {
        return s[u] = "", s;
      }, {});
      !Ln(r) || !Jn(r) || (Object.assign(r.style, l), Object.keys(a).forEach(function(s) {
        r.removeAttribute(s);
      }));
    });
  };
}
const lw = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: aw,
  effect: iw,
  requires: ["computeStyles"]
};
var sw = [ow, rw, Vp, lw], uw = /* @__PURE__ */ ew({
  defaultModifiers: sw
}), cw = Object.defineProperty, dw = Object.defineProperties, fw = Object.getOwnPropertyDescriptors, rc = Object.getOwnPropertySymbols, pw = Object.prototype.hasOwnProperty, vw = Object.prototype.propertyIsEnumerable, ac = (e, n, o) => n in e ? cw(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, yi = (e, n) => {
  for (var o in n || (n = {}))
    pw.call(n, o) && ac(e, o, n[o]);
  if (rc)
    for (var o of rc(n))
      vw.call(n, o) && ac(e, o, n[o]);
  return e;
}, ki = (e, n) => dw(e, fw(n)), ic = (e, n, o) => new Promise((t, r) => {
  var a = (s) => {
    try {
      l(o.next(s));
    } catch (u) {
      r(u);
    }
  }, i = (s) => {
    try {
      l(o.throw(s));
    } catch (u) {
      r(u);
    }
  }, l = (s) => s.done ? t(s.value) : Promise.resolve(s.value).then(a, i);
  l((o = o.apply(e, n)).next());
});
function Lp(e) {
  const n = $(null), o = $(null), t = $({ width: 0, height: 0 }), r = qn(e, "show", {
    passive: !0,
    defaultValue: !1,
    emit(R, N) {
      w(N ? e.onOpen : e.onClose);
    }
  }), { zIndex: a } = qt(() => r.value, 1);
  ns(() => r.value, a);
  let i = null, l = !1, s = !1;
  const u = () => {
    if (!n.value)
      return;
    const { width: R, height: N } = jo(n.value);
    t.value = {
      width: xe(R),
      height: xe(N)
    };
  }, c = () => {
    switch (e.placement) {
      case "top":
      case "cover-bottom":
        return "bottom";
      case "top-start":
      case "right-end":
      case "cover-bottom-start":
        return "bottom left";
      case "top-end":
      case "left-end":
      case "cover-bottom-end":
        return "bottom right";
      case "bottom":
      case "cover-top":
        return "top";
      case "bottom-start":
      case "right-start":
      case "cover-top-start":
        return "top left";
      case "bottom-end":
      case "left-start":
      case "cover-top-end":
        return "top right";
      case "left":
      case "cover-right":
        return "right";
      case "right":
      case "cover-left":
        return "left";
    }
  }, d = () => {
    e.trigger === "hover" && (s = !0, E());
  }, f = () => ic(this, null, function* () {
    e.trigger === "hover" && (s = !1, yield wn(), !l && D());
  }), v = () => {
    e.trigger === "hover" && (l = !0);
  }, g = () => ic(this, null, function* () {
    e.trigger === "hover" && (l = !1, yield wn(), !s && D());
  }), m = () => {
    e.closeOnClickReference && r.value ? D() : E();
  }, k = () => {
    D();
  }, y = (R) => {
    e.trigger === "click" && (k(), w(e.onClickOutside, R));
  }, h = () => {
    z(), w(e.onClosed);
  }, C = () => {
    const { offsetX: R, offsetY: N, placement: H } = e;
    u();
    const L = {
      x: xe(R),
      y: xe(N)
    };
    switch (H) {
      case "cover-top":
        return {
          placement: "bottom",
          skidding: L.x,
          distance: L.y - t.value.height
        };
      case "cover-top-start":
        return {
          placement: "bottom-start",
          skidding: L.x,
          distance: L.y - t.value.height
        };
      case "cover-top-end":
        return {
          placement: "bottom-end",
          skidding: L.x,
          distance: L.y - t.value.height
        };
      case "cover-bottom":
        return {
          placement: "top",
          skidding: L.x,
          distance: -L.y - t.value.height
        };
      case "cover-bottom-start":
        return {
          placement: "top-start",
          skidding: L.x,
          distance: -L.y - t.value.height
        };
      case "cover-bottom-end":
        return {
          placement: "top-end",
          skidding: L.x,
          distance: -L.y - t.value.height
        };
      case "cover-left":
        return {
          placement: "right",
          skidding: L.y,
          distance: L.x - t.value.width
        };
      case "cover-right":
        return {
          placement: "left",
          skidding: L.y,
          distance: -L.x - t.value.width
        };
      case "left":
      case "left-start":
      case "left-end":
        return {
          placement: H,
          skidding: L.y,
          distance: -L.x
        };
      case "top":
      case "top-start":
      case "top-end":
        return {
          placement: H,
          skidding: L.x,
          distance: -L.y
        };
      case "bottom":
      case "bottom-start":
      case "bottom-end":
        return {
          placement: H,
          skidding: L.x,
          distance: L.y
        };
      case "right":
      case "right-start":
      case "right-end":
        return {
          placement: H,
          skidding: L.y,
          distance: L.x
        };
    }
  }, S = () => {
    const { placement: R, skidding: N, distance: H } = C(), L = [
      ki(yi({}, R$), {
        enabled: r.value
      }),
      ki(yi({}, H$), {
        options: {
          offset: [N, H]
        }
      }),
      ki(yi({}, Vp), {
        options: {
          adaptive: !1,
          gpuAcceleration: !1
        },
        enabled: r.value
      }),
      {
        name: "applyTransformOrigin",
        enabled: r.value,
        phase: "beforeWrite",
        fn({ state: j }) {
          j.styles.popper.transformOrigin = c();
        }
      }
    ];
    return {
      placement: R,
      modifiers: L,
      strategy: e.strategy
    };
  }, T = () => e.reference ? n.value.querySelector(e.reference) : n.value, O = (R) => {
    const { closeOnKeyEscape: N = !1 } = e;
    R.key === "Escape" && N && r.value && (Ae(R), D());
  }, z = () => {
    i.setOptions(S());
  }, E = () => {
    e.disabled || (r.value = !0, w(e["onUpdate:show"], !0));
  }, D = () => {
    r.value = !1, w(e["onUpdate:show"], !1);
  };
  return je(() => window, "keydown", O), md(T, "click", y), To(z), fe(() => [e.offsetX, e.offsetY, e.placement, e.strategy], z), fe(() => e.disabled, D), fe(
    () => r.value,
    (R) => {
      R && z();
    }
  ), st(() => {
    var R;
    i = uw((R = T()) != null ? R : n.value, o.value, S());
  }), Ht(() => {
    i.destroy();
  }), {
    show: r,
    popover: o,
    zIndex: a,
    host: n,
    hostSize: t,
    handleHostClick: m,
    handleHostMouseenter: d,
    handleHostMouseleave: f,
    handlePopoverClose: k,
    handlePopoverMouseenter: v,
    handlePopoverMouseleave: g,
    handleClosed: h,
    resize: z,
    open: E,
    close: D
  };
}
const Rp = {
  type: {
    type: String,
    default: "default"
  },
  color: String,
  content: String,
  show: Boolean,
  disabled: Boolean,
  trigger: {
    type: String,
    default: "hover"
  },
  reference: String,
  placement: {
    type: String,
    default: "bottom"
  },
  strategy: {
    type: String,
    default: "absolute"
  },
  offsetX: {
    type: [Number, String],
    default: 0
  },
  offsetY: {
    type: [Number, String],
    default: 0
  },
  teleport: {
    type: [String, Object, Boolean],
    default: "body"
  },
  sameWidth: Boolean,
  closeOnClickReference: Boolean,
  closeOnKeyEscape: {
    type: Boolean,
    default: !0
  },
  onOpen: A(),
  onOpened: A(),
  onClose: A(),
  onClosed: A(),
  onClickOutside: A(),
  "onUpdate:show": A()
}, { name: mw, n: hw, classes: gw } = ee("tooltip");
function bw(e, n) {
  return b(), P(
    "div",
    {
      ref: "host",
      class: p(e.classes(e.n(), e.n("$--box"))),
      onClick: n[3] || (n[3] = (...o) => e.handleHostClick && e.handleHostClick(...o)),
      onMouseenter: n[4] || (n[4] = (...o) => e.handleHostMouseenter && e.handleHostMouseenter(...o)),
      onMouseleave: n[5] || (n[5] = (...o) => e.handleHostMouseleave && e.handleHostMouseleave(...o))
    },
    [
      V(e.$slots, "default"),
      (b(), Oe(xn, {
        to: e.teleport === !1 ? void 0 : e.teleport,
        disabled: e.teleportDisabled || e.teleport === !1
      }, [
        X(Je, {
          name: e.n(),
          onAfterEnter: e.onOpened,
          onAfterLeave: e.handleClosed,
          persisted: ""
        }, {
          default: pe(() => [
            Me(M(
              "div",
              {
                ref: "popover",
                class: p(e.classes(e.n("tooltip"), e.n("$--box"))),
                style: K({ zIndex: e.zIndex }),
                onClick: n[0] || (n[0] = In(() => {
                }, ["stop"])),
                onMouseenter: n[1] || (n[1] = (...o) => e.handlePopoverMouseenter && e.handlePopoverMouseenter(...o)),
                onMouseleave: n[2] || (n[2] = (...o) => e.handlePopoverMouseleave && e.handlePopoverMouseleave(...o))
              },
              [
                M(
                  "div",
                  {
                    style: K({ background: e.color, width: e.sameWidth ? e.toSizeUnit(Math.ceil(e.hostSize.width)) : void 0 }),
                    class: p(e.classes(e.n("content-container"), e.n(`--${e.type}`)))
                  },
                  [
                    V(e.$slots, "content", {}, () => [
                      De(
                        ae(e.content),
                        1
                        /* TEXT */
                      )
                    ])
                  ],
                  6
                  /* CLASS, STYLE */
                )
              ],
              38
              /* CLASS, STYLE, NEED_HYDRATION */
            ), [
              [Kn, e.show]
            ])
          ]),
          _: 3
          /* FORWARDED */
        }, 8, ["name", "onAfterEnter", "onAfterLeave"])
      ], 8, ["to", "disabled"]))
    ],
    34
    /* CLASS, NEED_HYDRATION */
  );
}
const Fp = _({
  name: mw,
  props: Rp,
  setup(e) {
    const { disabled: n } = Wo(), {
      popover: o,
      host: t,
      hostSize: r,
      show: a,
      zIndex: i,
      handleHostClick: l,
      handleHostMouseenter: s,
      handleHostMouseleave: u,
      handlePopoverMouseenter: c,
      handlePopoverMouseleave: d,
      handlePopoverClose: f,
      handleClosed: v,
      // expose
      open: g,
      // expose
      close: m,
      // expose
      resize: k
    } = Lp(e);
    return {
      popover: o,
      host: t,
      hostSize: r,
      show: a,
      zIndex: i,
      teleportDisabled: n,
      toSizeUnit: Te,
      n: hw,
      classes: gw,
      handleHostClick: l,
      handlePopoverClose: f,
      handleHostMouseenter: s,
      handleHostMouseleave: u,
      handlePopoverMouseenter: c,
      handlePopoverMouseleave: d,
      handleClosed: v,
      resize: k,
      open: g,
      close: m
    };
  }
});
Fp.render = bw;
var Ca = Fp;
re(Ca);
se(Ca, Rp);
const s5 = Ca;
var Br = Ca;
const Up = {
  expand: Boolean,
  expandTrigger: String,
  lineClamp: [Number, String],
  tooltip: {
    type: [Object, Boolean],
    default: !0
  },
  "onUpdate:expand": A()
};
var yw = Object.defineProperty, lc = Object.getOwnPropertySymbols, kw = Object.prototype.hasOwnProperty, $w = Object.prototype.propertyIsEnumerable, sc = (e, n, o) => n in e ? yw(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, ww = (e, n) => {
  for (var o in n || (n = {}))
    kw.call(n, o) && sc(e, o, n[o]);
  if (lc)
    for (var o of lc(n))
      $w.call(n, o) && sc(e, o, n[o]);
  return e;
};
const { name: Cw, n: Sw, classes: Pw } = ee("ellipsis"), zw = { key: 0 };
function Ow(e, n) {
  const o = te("var-tooltip");
  return b(), Oe(
    o,
    yo(jt(e.tooltipProps)),
    {
      content: pe(() => [
        V(e.$slots, "tooltip-content", {}, () => {
          var t;
          return [
            (t = e.tooltipProps) != null && t.content ? (b(), P(
              "span",
              zw,
              ae(e.tooltipProps.content),
              1
              /* TEXT */
            )) : V(e.$slots, "default", { key: 1 })
          ];
        })
      ]),
      default: pe(() => [
        M(
          "span",
          {
            class: p(
              e.classes(e.n(), [e.lineClamp, e.n("--clamp"), e.n("--line")], [e.expandTrigger, e.n("--cursor")], [e.expanding, e.n("--expand")])
            ),
            style: K(e.rootStyles),
            onClick: n[0] || (n[0] = (...t) => e.handleClick && e.handleClick(...t))
          },
          [
            V(e.$slots, "default")
          ],
          6
          /* CLASS, STYLE */
        )
      ]),
      _: 3
      /* FORWARDED */
    },
    16
    /* FULL_PROPS */
  );
}
const Hp = _({
  name: Cw,
  components: { VarTooltip: Br },
  props: Up,
  setup(e) {
    const n = qn(e, "expand"), o = I(() => e.lineClamp ? { "-webkit-line-clamp": e.lineClamp } : {}), t = I(() => e.tooltip === !1 ? {
      disabled: !0
    } : e.tooltip === !0 ? {
      sameWidth: !0
    } : ww({ sameWidth: !0 }, e.tooltip));
    function r() {
      e.expandTrigger && (n.value = !n.value);
    }
    return {
      tooltipProps: t,
      expanding: n,
      rootStyles: o,
      n: Sw,
      classes: Pw,
      handleClick: r
    };
  }
});
Hp.render = Ow;
var Sa = Hp;
re(Sa);
se(Sa, Up);
const u5 = Sa;
var ul = Sa;
const Yp = {
  active: Boolean,
  show: {
    type: Boolean,
    default: !0
  },
  drag: {
    type: [Object, Boolean],
    default: !1
  },
  type: {
    type: String,
    default: "primary"
  },
  position: {
    type: String,
    default: "right-bottom"
  },
  direction: {
    type: String,
    default: "top"
  },
  trigger: {
    type: String,
    default: "click"
  },
  disabled: Boolean,
  color: String,
  inactiveIcon: {
    type: String,
    default: "plus"
  },
  activeIcon: {
    type: String,
    default: "window-close"
  },
  inactiveIconSize: Be(en, "size"),
  activeIconSize: Be(en, "size"),
  inactiveIconNamespace: Be(en, "namespace"),
  activeIconNamespace: Be(en, "namespace"),
  fixed: {
    type: Boolean,
    default: !0
  },
  zIndex: {
    type: [Number, String],
    default: 90
  },
  top: [Number, String],
  bottom: [Number, String],
  left: [Number, String],
  right: [Number, String],
  elevation: {
    type: [Boolean, Number, String],
    default: !0
  },
  safeArea: Boolean,
  teleport: {
    type: [String, Object, Boolean],
    default: "body"
  },
  onClick: A(),
  onOpen: A(),
  onOpened: A(),
  onClose: A(),
  onClosed: A(),
  "onUpdate:active": A()
}, {
  name: Tw,
  classes: $i,
  n: En
} = ee("fab");
var Pa = _({
  name: Tw,
  inheritAttrs: !1,
  props: Yp,
  setup(e, {
    slots: n,
    attrs: o
  }) {
    const t = qn(e, "active"), r = $(null), a = $(null);
    fe(() => e.trigger, () => {
      t.value = !1;
    }), fe(() => e.disabled, () => {
      t.value = !1;
    }), fe(() => [e.position, e.fixed, e.top, e.bottom, e.left, e.right], () => {
      var c;
      (c = a.value) == null || c.reset();
    }), md(r, "click", s);
    function i(c, d, f) {
      if (c.stopPropagation(), !(e.trigger !== "click" || e.disabled)) {
        if (f === 0) {
          w(e.onClick, t.value, c);
          return;
        }
        t.value = d, w(e.onClick, t.value, c), w(t.value ? e.onOpen : e.onClose);
      }
    }
    function l(c, d) {
      e.trigger !== "hover" || e.disabled || d === 0 || (t.value = c, w(t.value ? e.onOpen : e.onClose));
    }
    function s() {
      e.trigger !== "click" || e.disabled || t.value !== !1 && (t.value = !1, w(e.onClose));
    }
    function u() {
      return n.trigger ? e.show ? n.trigger({
        active: t.value
      }) : null : Me(X(Cn, {
        "var-fab-cover": !0,
        class: En("trigger"),
        type: e.type,
        color: e.color,
        disabled: e.disabled,
        elevation: e.elevation,
        iconContainer: !0
      }, {
        default: () => [X(Xe, {
          "var-fab-cover": !0,
          class: $i([t.value, En("trigger-active-icon"), En("trigger-inactive-icon")]),
          name: t.value ? e.activeIcon : e.inactiveIcon,
          size: t.value ? e.activeIconSize : e.inactiveIconSize,
          namespace: t.value ? e.activeIconNamespace : e.inactiveIconNamespace,
          transition: 200,
          animationClass: En("--trigger-icon-animation")
        }, null)]
      }), [[Kn, e.show]]);
    }
    return () => {
      var c;
      const d = gd((c = w(n.default)) != null ? c : []), f = Jl(e.drag) ? {} : e.drag;
      return X(Dr, Ye({
        ref: a,
        class: $i(En(`--position-${e.position}`), [!e.fixed, En("--absolute")]),
        style: {
          top: Te(e.top),
          bottom: Te(e.bottom),
          left: Te(e.left),
          right: Te(e.right)
        },
        zIndex: e.zIndex,
        teleport: e.teleport,
        disabled: e.disabled || !e.drag || !e.fixed,
        direction: f.direction,
        attraction: f.attraction,
        boundary: f.boundary,
        onClick: (v) => i(v, !t.value, d.length)
      }, o), {
        default: () => [X("div", {
          class: $i(En(), En(`--direction-${e.direction}`), [e.safeArea, En("--safe-area")]),
          ref: r,
          onMouseleave: () => l(!1, d.length),
          onMouseenter: () => l(!0, d.length)
        }, [X(Je, {
          name: En("--active-transition")
        }, {
          default: () => [u()]
        }), X(Je, {
          name: En(`--actions-transition-${e.direction}`),
          onAfterEnter: e.onOpened,
          onAfterLeave: e.onClosed
        }, {
          default: () => [Me(X("div", {
            class: En("actions"),
            onClick: (v) => v.stopPropagation()
          }, [d.map((v) => X("div", {
            class: En("action")
          }, [v]))]), [[Kn, e.show && t.value && d.length]])]
        })])]
      });
    };
  }
});
re(Pa);
se(Pa, Yp);
const c5 = Pa;
var cl = Pa;
const za = {
  value: {
    type: null,
    required: !0
  },
  id: {
    type: String,
    default: ""
  },
  isFocusing: Boolean,
  size: {
    type: String,
    default: "normal"
  },
  variant: {
    type: String,
    default: "standard"
  },
  placeholder: String,
  line: {
    type: Boolean,
    default: !0
  },
  hint: {
    type: Boolean,
    default: !0
  },
  hintCenter: {
    type: Boolean,
    default: !0
  },
  textColor: String,
  focusColor: String,
  blurColor: String,
  errorMessage: String,
  formDisabled: Boolean,
  disabled: Boolean,
  clearable: Boolean,
  cursor: String,
  composing: Boolean,
  onClick: A(),
  onClear: A()
}, { name: Ew, n: wi, classes: Dw } = ee("field-decorator"), Bw = ["for"];
function Iw(e, n) {
  const o = te("var-icon");
  return b(), P(
    "div",
    {
      class: p(e.classes(e.n(), e.n("$--box"), e.n(`--${e.variant}`), [e.size === "small", e.n("--small")], [e.disabled, e.n("--disabled")])),
      onClick: n[0] || (n[0] = (...t) => e.handleClick && e.handleClick(...t))
    },
    [
      M(
        "div",
        {
          class: p(
            e.classes(
              e.n("controller"),
              [e.isFocusing, e.n("--focus")],
              [e.errorMessage, e.n("--error")],
              [e.formDisabled || e.disabled, e.n("--disabled")]
            )
          ),
          style: K({
            color: e.color,
            cursor: e.cursor,
            overflow: e.isFloating ? "visible" : "hidden",
            "--field-decorator-middle-offset-left": e.middleOffsetLeft,
            "--field-decorator-middle-offset-width": e.middleOffsetWidth,
            "--field-decorator-middle-offset-height": e.middleOffsetHeight
          })
        },
        [
          M(
            "div",
            {
              class: p(e.classes(e.n("icon"), [!e.hint, e.n("--icon-non-hint")]))
            },
            [
              V(e.$slots, "prepend-icon")
            ],
            2
            /* CLASS */
          ),
          M(
            "div",
            {
              ref: "middleEl",
              class: p(e.classes(e.n("middle"), [!e.hint, e.n("--middle-non-hint")]))
            },
            [
              V(e.$slots, "default")
            ],
            2
            /* CLASS */
          ),
          e.placeholder && e.hint ? (b(), P("label", {
            key: 0,
            class: p(
              e.classes(
                e.n("placeholder"),
                e.n("$--ellipsis"),
                [e.isFocusing, e.n("--focus")],
                [e.hintCenter, e.n("--hint-center")],
                [e.formDisabled || e.disabled, e.n("--disabled")],
                [e.errorMessage, e.n("--error")],
                [e.transitionDisabled, e.n("--transition-disabled")],
                e.computePlaceholderState()
              )
            ),
            style: K({
              color: e.color
            }),
            for: e.id
          }, [
            M(
              "span",
              null,
              ae(e.placeholder),
              1
              /* TEXT */
            )
          ], 14, Bw)) : G("v-if", !0),
          M(
            "div",
            {
              class: p(e.classes(e.n("icon"), [!e.hint, e.n("--icon-non-hint")]))
            },
            [
              e.clearable && !e.isEmpty(e.value) ? V(e.$slots, "clear-icon", {
                key: 0,
                clear: e.handleClear
              }, () => [
                X(o, {
                  class: p(e.n("clear-icon")),
                  "var-field-decorator-cover": "",
                  name: "close-circle",
                  onClick: e.handleClear
                }, null, 8, ["class", "onClick"])
              ]) : G("v-if", !0),
              V(e.$slots, "append-icon")
            ],
            2
            /* CLASS */
          )
        ],
        6
        /* CLASS, STYLE */
      ),
      e.line ? (b(), P(
        Ue,
        { key: 0 },
        [
          e.variant === "outlined" ? (b(), P(
            "fieldset",
            {
              key: 0,
              class: p(
                e.classes(
                  e.n("line"),
                  [e.isFocusing, e.n("--line-focus")],
                  [e.errorMessage, e.n("--line-error")],
                  [e.formDisabled || e.disabled, e.n("--line-disabled")]
                )
              ),
              style: K({ borderColor: e.color })
            },
            [
              M(
                "legend",
                {
                  class: p(e.classes(e.n("line-legend"), [e.isFloating, e.n("line-legend--hint")])),
                  style: K({ width: e.legendWidth })
                },
                [
                  e.placeholder && e.hint ? (b(), Oe(xn, {
                    key: 0,
                    to: "body"
                  }, [
                    M(
                      "span",
                      {
                        ref: "placeholderTextEl",
                        class: p(
                          e.classes(e.n("placeholder-text"), e.n("$--ellipsis"), [e.size === "small", e.n("placeholder-text--small")])
                        )
                      },
                      ae(e.placeholder),
                      3
                      /* TEXT, CLASS */
                    )
                  ])) : G("v-if", !0)
                ],
                6
                /* CLASS, STYLE */
              )
            ],
            6
            /* CLASS, STYLE */
          )) : (b(), P(
            "div",
            {
              key: 1,
              class: p(e.classes(e.n("line"), [e.formDisabled || e.disabled, e.n("--line-disabled")], [e.errorMessage, e.n("--line-error")])),
              style: K({ background: e.errorMessage ? void 0 : e.blurColor })
            },
            [
              M(
                "div",
                {
                  class: p(
                    e.classes(
                      e.n("dot"),
                      [e.isFocusing, e.n("--line-focus")],
                      [e.formDisabled || e.disabled, e.n("--line-disabled")],
                      [e.errorMessage, e.n("--line-error")]
                    )
                  ),
                  style: K({ background: e.errorMessage ? void 0 : e.focusColor })
                },
                null,
                6
                /* CLASS, STYLE */
              )
            ],
            6
            /* CLASS, STYLE */
          ))
        ],
        64
        /* STABLE_FRAGMENT */
      )) : G("v-if", !0)
    ],
    2
    /* CLASS */
  );
}
const jp = _({
  name: Ew,
  components: { VarIcon: Xe },
  props: za,
  setup(e) {
    const n = $(null), o = $(null), t = $(""), r = $("0px"), a = $("0px"), i = $("0px"), l = $(!0), s = I(() => e.hint && (!Gn(e.value) || e.isFocusing)), u = I(
      () => e.errorMessage ? void 0 : e.isFocusing ? e.focusColor : e.blurColor
    );
    To(v), cn(() => {
      v(), He().then(() => {
        l.value = !1;
      });
    }), Yt(v);
    function c() {
      const { hint: g, value: m, composing: k } = e;
      if (!g && (!Gn(m) || k))
        return wi("--placeholder-hidden");
      if (s.value)
        return wi("--placeholder-hint");
    }
    function d(g) {
      w(e.onClear, g);
    }
    function f(g) {
      w(e.onClick, g);
    }
    function v() {
      if (r.value = `${o.value.offsetLeft}px`, a.value = `${o.value.offsetWidth}px`, i.value = `${o.value.offsetHeight}px`, e.variant === "outlined" && n.value) {
        const g = jo(n.value), m = `var(--field-decorator-outlined-${e.size}-placeholder-space)`;
        t.value = `calc(${g.width} * 0.75 + ${m} * 2)`;
      }
    }
    return {
      placeholderTextEl: n,
      middleEl: o,
      middleOffsetLeft: r,
      middleOffsetWidth: a,
      middleOffsetHeight: i,
      color: u,
      legendWidth: t,
      isFloating: s,
      transitionDisabled: l,
      resize: v,
      computePlaceholderState: c,
      n: wi,
      classes: Dw,
      isEmpty: Gn,
      handleClear: d,
      handleClick: f
    };
  }
});
jp.render = Iw;
var Oa = jp;
re(Oa);
se(Oa, za);
const d5 = Oa;
var Nt = Oa;
const Wp = {
  anchor: Number,
  anchors: Array,
  contentDraggable: {
    type: Boolean,
    default: !0
  },
  duration: {
    type: [Number, String],
    default: 300
  },
  elevation: {
    type: [Boolean, Number, String],
    default: !0
  },
  teleport: {
    type: [String, Object, Boolean],
    default: "body"
  },
  safeArea: Boolean,
  "onUpdate:anchor": A(),
  onAnchorChange: A()
}, { name: Mw, n: Nw, classes: Aw } = ee("floating-panel"), uc = 100, cc = 0.2;
function Vw(e, n) {
  return b(), Oe(xn, {
    to: e.teleport === !1 ? void 0 : e.teleport,
    disabled: e.teleportDisabled || e.teleport === !1
  }, [
    M(
      "div",
      {
        class: p(e.classes(e.n(), [e.safeArea, e.n("--safe-area")], e.formatElevation(e.elevation, 3))),
        style: K({
          height: `${e.toSizeUnit(e.maxAnchor)}`,
          transform: `translateY(calc(100% - ${e.toSizeUnit(e.visibleHeight)}))`,
          transition: e.touching ? "none" : `transform ${e.toNumber(
            e.duration
          )}ms var(--floating-panel-transition-timing-function), background-color 0.25s`
        }),
        onTouchstart: n[0] || (n[0] = (...o) => e.handleTouchstart && e.handleTouchstart(...o)),
        onTouchmove: n[1] || (n[1] = (...o) => e.handleTouchmove && e.handleTouchmove(...o)),
        onTouchend: n[2] || (n[2] = (...o) => e.handleTouchend && e.handleTouchend(...o)),
        onTouchcancel: n[3] || (n[3] = (...o) => e.handleTouchend && e.handleTouchend(...o))
      },
      [
        M(
          "div",
          {
            class: p(e.n("header"))
          },
          [
            M(
              "div",
              {
                class: p(e.n("header-toolbar"))
              },
              null,
              2
              /* CLASS */
            )
          ],
          2
          /* CLASS */
        ),
        M(
          "div",
          {
            class: p(e.n("content")),
            ref: "contentRef"
          },
          [
            V(e.$slots, "default")
          ],
          2
          /* CLASS */
        )
      ],
      38
      /* CLASS, STYLE, NEED_HYDRATION */
    )
  ], 8, ["to", "disabled"]);
}
const Kp = _({
  name: Mw,
  props: Wp,
  setup(e) {
    const n = $(0), o = $(null), { height: t } = Bh(), r = I(() => t.value * 0.6), a = qn(e, "anchor", { defaultValue: uc }), i = I(() => {
      const D = [uc, r.value], { anchors: R } = e;
      return Gn(R) ? D : R;
    }), l = I(() => Math.min(...i.value)), s = I(() => Math.max(...i.value)), { disabled: u } = Wo(), { deltaY: c, touching: d, startTouch: f, moveTouch: v, endTouch: g, isReachTop: m, isReachBottom: k } = ft();
    let y;
    Kt(() => d.value), fe(() => a.value, h, { immediate: !0 }), fe(
      () => i.value,
      () => {
        h(a.value);
      },
      { immediate: !0 }
    );
    function h(D) {
      O(D ?? l.value);
    }
    function C(D) {
      f(D), y = n.value;
    }
    function S(D) {
      var R;
      v(D);
      const N = D.target, H = o.value === N || ((R = o.value) == null ? void 0 : R.contains(N));
      if (H && !e.contentDraggable)
        return;
      if (H && e.contentDraggable && n.value >= s.value && !m(o.value)) {
        k(o.value) && Ae(D);
        return;
      }
      const L = y - c.value;
      O(z(L)), Ae(D);
    }
    function T() {
      g();
      const D = a.value;
      O(n.value), a.value = n.value, a.value !== D && w(e.onAnchorChange, n.value);
    }
    function O(D) {
      n.value = d.value ? D : E(D);
    }
    function z(D) {
      if (D > s.value) {
        const R = D - s.value;
        return s.value + R * cc;
      }
      if (D < l.value) {
        const R = l.value - D;
        return l.value - R * cc;
      }
      return D;
    }
    function E(D) {
      if (i.value.includes(D))
        return D;
      let R = 1 / 0, N = 0;
      return i.value.forEach((H) => {
        const L = Math.abs(H - D);
        L < R && (R = L, N = H);
      }), N;
    }
    return {
      contentRef: o,
      teleportDisabled: u,
      touching: d,
      minAnchor: l,
      maxAnchor: s,
      visibleHeight: n,
      n: Nw,
      classes: Aw,
      toSizeUnit: Te,
      toNumber: F,
      formatElevation: yn,
      handleTouchstart: C,
      handleTouchmove: S,
      handleTouchend: T
    };
  }
});
Kp.render = Vw;
var Ta = Kp;
re(Ta);
se(Ta, Wp);
const f5 = Ta;
var dl = Ta;
const qp = {
  disabled: Boolean,
  readonly: Boolean,
  scrollToError: String,
  scrollToErrorOffsetY: {
    type: [String, Number],
    default: 0
  },
  onSubmit: A(),
  onReset: A()
};
var dc = (e, n, o) => new Promise((t, r) => {
  var a = (s) => {
    try {
      l(o.next(s));
    } catch (u) {
      r(u);
    }
  }, i = (s) => {
    try {
      l(o.throw(s));
    } catch (u) {
      r(u);
    }
  }, l = (s) => s.done ? t(s.value) : Promise.resolve(s.value).then(a, i);
  l((o = o.apply(e, n)).next());
});
const { name: Lw, n: Rw } = ee("form");
function Fw(e, n) {
  return b(), P(
    "form",
    {
      class: p(e.n()),
      onSubmit: n[0] || (n[0] = (...o) => e.handleSubmit && e.handleSubmit(...o)),
      onReset: n[1] || (n[1] = (...o) => e.handleReset && e.handleReset(...o))
    },
    [
      V(e.$slots, "default")
    ],
    34
    /* CLASS, NEED_HYDRATION */
  );
}
const Xp = _({
  name: Lw,
  props: qp,
  setup(e) {
    const n = I(() => e.disabled), o = I(() => e.readonly), { formItems: t, bindFormItems: r } = ly();
    r({
      disabled: n,
      readonly: o
    });
    function i(f) {
      setTimeout(() => {
        const v = So(f), g = v === window ? 0 : qs(v), m = qs(f) - g - xe(e.scrollToErrorOffsetY);
        Tt(v, {
          top: m,
          animation: Di
        });
      }, 300);
    }
    function l(f) {
      return dc(this, null, function* () {
        Ae(f);
        const v = yield u();
        w(e.onSubmit, v);
      });
    }
    function s(f) {
      Ae(f), c(), w(e.onReset);
    }
    function u() {
      return dc(this, null, function* () {
        var f;
        const v = yield Promise.all(t.map(({ validate: g }) => g()));
        if (e.scrollToError) {
          const [, g] = gh(v, (k) => k === !1, e.scrollToError), m = g > -1;
          if (m) {
            const k = (f = t[g].instance.proxy) == null ? void 0 : f.$el;
            i(k);
          }
          return !m;
        }
        return v.every((g) => g === !0);
      });
    }
    function c() {
      return t.forEach(({ reset: f }) => f());
    }
    function d() {
      return t.forEach(({ resetValidation: f }) => f());
    }
    return {
      n: Rw,
      handleSubmit: l,
      handleReset: s,
      validate: u,
      reset: c,
      resetValidation: d
    };
  }
});
Xp.render = Fw;
var mt = Xp;
mt.useValidation = Fn;
mt.useForm = Un;
re(mt);
se(mt, qp);
const p5 = mt;
var fl = mt;
const Gp = {
  src: String,
  fit: {
    type: String,
    default: "fill"
  },
  position: {
    type: String,
    default: "50% 50%"
  },
  alt: String,
  title: String,
  referrerpolicy: String,
  width: [String, Number],
  height: [String, Number],
  radius: {
    type: [String, Number],
    default: 0
  },
  loading: String,
  error: String,
  lazy: Boolean,
  ripple: Boolean,
  block: {
    type: Boolean,
    default: !0
  },
  onClick: A(),
  onLoad: A(),
  onError: A()
}, { name: Uw, n: Hw, classes: Yw } = ee("image"), jw = ["alt", "title", "referrerpolicy", "lazy-loading", "lazy-error"], Ww = ["alt", "title", "referrerpolicy", "src"];
function Kw(e, n) {
  var o;
  const t = Re("lazy"), r = Re("ripple");
  return Me((b(), P(
    "div",
    {
      class: p(e.classes(e.n(), e.n("$--box"), [!e.block, e.n("$--inline-block")])),
      style: K({
        width: e.toSizeUnit(e.width),
        height: e.toSizeUnit(e.height),
        borderRadius: e.toSizeUnit(e.radius)
      })
    },
    [
      e.lazy && !e.showErrorSlot ? Me((b(), P("img", {
        key: 0,
        role: "img",
        class: p(e.n("image")),
        alt: e.alt,
        title: e.title,
        referrerpolicy: e.referrerpolicy,
        "lazy-loading": e.loading,
        "lazy-error": e.error,
        style: K({ objectFit: e.fit, objectPosition: e.position }),
        onLoad: n[0] || (n[0] = (...a) => e.handleLoad && e.handleLoad(...a)),
        onClick: n[1] || (n[1] = (...a) => e.handleClick && e.handleClick(...a))
      }, null, 46, jw)), [
        [t, (o = e.src) != null ? o : ""]
      ]) : G("v-if", !0),
      !e.lazy && !e.showErrorSlot ? (b(), P("img", {
        key: 1,
        role: "img",
        class: p(e.n("image")),
        alt: e.alt,
        title: e.title,
        referrerpolicy: e.referrerpolicy,
        style: K({ objectFit: e.fit, objectPosition: e.position }),
        src: e.src,
        onLoad: n[2] || (n[2] = (...a) => e.handleLoad && e.handleLoad(...a)),
        onError: n[3] || (n[3] = (...a) => e.handleError && e.handleError(...a)),
        onClick: n[4] || (n[4] = (...a) => e.handleClick && e.handleClick(...a))
      }, null, 46, Ww)) : G("v-if", !0),
      e.showErrorSlot ? V(e.$slots, "error", { key: 2 }) : G("v-if", !0)
    ],
    6
    /* CLASS, STYLE */
  )), [
    [r, { disabled: !e.ripple }]
  ]);
}
const Zp = _({
  name: Uw,
  directives: {
    Lazy: Et,
    Ripple: on
  },
  props: Gp,
  setup(e, { slots: n }) {
    const o = $(!1);
    fe(
      () => e.src,
      () => {
        o.value = !1;
      }
    );
    function t(i) {
      o.value = !!n.error, w(e.onError, i);
    }
    function r(i) {
      const l = i.currentTarget;
      if (e.lazy) {
        if (l._lazy.state === "success") {
          w(e.onLoad, i);
          return;
        }
        l._lazy.state === "error" && t(i);
      } else
        w(e.onLoad, i);
    }
    function a(i) {
      w(e.onClick, i);
    }
    return {
      showErrorSlot: o,
      n: Hw,
      classes: Yw,
      toSizeUnit: Te,
      handleLoad: r,
      handleError: t,
      handleClick: a
    };
  }
});
Zp.render = Kw;
var Ea = Zp;
re(Ea);
se(Ea, Gp);
const v5 = Ea;
var pl = Ea;
const Jp = Symbol("SWIPE_BIND_SWIPE_ITEM_KEY");
function qw() {
  const { childProviders: e, length: n, bindChildren: o } = mn(
    Jp
  );
  return {
    length: n,
    swipeItems: e,
    bindSwipeItems: o
  };
}
const $s = {
  loop: {
    type: Boolean,
    default: !0
  },
  autoplay: [String, Number],
  duration: {
    type: [String, Number],
    default: 300
  },
  initialIndex: {
    type: [String, Number],
    default: 0
  },
  navigation: {
    type: [Boolean, String],
    default: !1
  },
  indicator: {
    type: Boolean,
    default: !0
  },
  indicatorColor: String,
  vertical: Boolean,
  touchable: {
    type: Boolean,
    default: !0
  },
  onChange: A()
};
var qo = (e, n, o) => new Promise((t, r) => {
  var a = (s) => {
    try {
      l(o.next(s));
    } catch (u) {
      r(u);
    }
  }, i = (s) => {
    try {
      l(o.throw(s));
    } catch (u) {
      r(u);
    }
  }, l = (s) => s.done ? t(s.value) : Promise.resolve(s.value).then(a, i);
  l((o = o.apply(e, n)).next());
});
const Xw = 250, Gw = 20, { name: Zw, n: fc, classes: Jw } = ee("swipe"), Qw = ["onClick"];
function xw(e, n) {
  const o = te("var-icon"), t = te("var-button"), r = Re("hover");
  return Me((b(), P(
    "div",
    {
      class: p(e.n()),
      ref: "swipeEl"
    },
    [
      M(
        "div",
        {
          class: p(e.classes(e.n("track"), [e.vertical, e.n("--vertical")])),
          style: K({
            width: e.vertical ? void 0 : `${e.trackSize}px`,
            height: e.vertical ? `${e.trackSize}px` : void 0,
            transform: `translate${e.vertical ? "Y" : "X"}(${e.trackTranslate}px)`,
            transitionDuration: e.lockDuration ? "0ms" : `${e.toNumber(e.duration)}ms`
          }),
          onTouchstart: n[0] || (n[0] = (...a) => e.handleTouchstart && e.handleTouchstart(...a)),
          onTouchmove: n[1] || (n[1] = (...a) => e.handleTouchmove && e.handleTouchmove(...a)),
          onTouchend: n[2] || (n[2] = (...a) => e.handleTouchend && e.handleTouchend(...a))
        },
        [
          V(e.$slots, "default")
        ],
        38
        /* CLASS, STYLE, NEED_HYDRATION */
      ),
      e.navigation ? V(e.$slots, "prev", yo(Ye({ key: 0 }, {
        index: e.index,
        length: e.length,
        prev: e.prev,
        next: e.next,
        to: e.to,
        hovering: e.hovering
      })), () => [
        X(Je, {
          name: e.getNavigationAnimation("prev")
        }, {
          default: pe(() => [
            e.navigation === !0 || e.hovering ? (b(), P(
              "div",
              {
                key: 0,
                class: p(e.classes(e.n("navigation"), e.n("navigation-prev"), [e.vertical, e.n("--navigation-vertical-prev")]))
              },
              [
                X(t, {
                  "var-swipe-cover": "",
                  disabled: !e.loop && e.index === 0,
                  class: p(e.n("navigation-prev-button")),
                  onClick: n[3] || (n[3] = (a) => e.prev())
                }, {
                  default: pe(() => [
                    X(o, {
                      "var-swipe-cover": "",
                      class: p(e.n("navigation-prev-button-icon")),
                      name: e.vertical ? "chevron-up" : "chevron-left"
                    }, null, 8, ["class", "name"])
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["disabled", "class"])
              ],
              2
              /* CLASS */
            )) : G("v-if", !0)
          ]),
          _: 1
          /* STABLE */
        }, 8, ["name"])
      ]) : G("v-if", !0),
      e.navigation ? V(e.$slots, "next", yo(Ye({ key: 1 }, {
        index: e.index,
        length: e.length,
        hovering: e.hovering,
        prev: e.prev,
        next: e.next,
        to: e.to
      })), () => [
        X(Je, {
          name: e.getNavigationAnimation("next")
        }, {
          default: pe(() => [
            e.navigation === !0 || e.hovering ? (b(), P(
              "div",
              {
                key: 0,
                class: p(e.classes(e.n("navigation"), e.n("navigation-next"), [e.vertical, e.n("--navigation-vertical-next")]))
              },
              [
                X(t, {
                  "var-swipe-cover": "",
                  class: p(e.n("navigation-next-button")),
                  disabled: !e.loop && e.index === e.length - 1,
                  onClick: n[4] || (n[4] = (a) => e.next())
                }, {
                  default: pe(() => [
                    X(o, {
                      "var-swipe-cover": "",
                      class: p(e.n("navigation-next-button-icon")),
                      name: e.vertical ? "chevron-down" : "chevron-right"
                    }, null, 8, ["class", "name"])
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["class", "disabled"])
              ],
              2
              /* CLASS */
            )) : G("v-if", !0)
          ]),
          _: 1
          /* STABLE */
        }, 8, ["name"])
      ]) : G("v-if", !0),
      V(e.$slots, "indicator", yo(jt({
        index: e.index,
        length: e.length,
        hovering: e.hovering,
        prev: e.prev,
        next: e.next,
        to: e.to
      })), () => [
        e.indicator && e.length ? (b(), P(
          "div",
          {
            key: 0,
            class: p(e.classes(e.n("indicators"), [e.vertical, e.n("--indicators-vertical")]))
          },
          [
            (b(!0), P(
              Ue,
              null,
              nn(e.length, (a, i) => (b(), P("div", {
                class: p(
                  e.classes(e.n("indicator"), [e.index === i, e.n("--indicator-active")], [e.vertical, e.n("--indicator-vertical")])
                ),
                style: K({ background: e.indicatorColor }),
                key: a,
                onClick: (l) => e.to(i)
              }, null, 14, Qw))),
              128
              /* KEYED_FRAGMENT */
            ))
          ],
          2
          /* CLASS */
        )) : G("v-if", !0)
      ])
    ],
    2
    /* CLASS */
  )), [
    [r, e.handleHovering]
  ]);
}
const Qp = _({
  name: Zw,
  directives: { Hover: zn },
  components: { VarButton: Cn, VarIcon: Xe },
  props: $s,
  setup(e) {
    const n = $(null), o = $(0), t = I(() => e.vertical), r = $(0), a = $(0), i = $(!1), l = $(0), s = $(!1), { swipeItems: u, bindSwipeItems: c, length: d } = qw(), { popup: f, bindPopup: v } = xh(), {
      deltaX: g,
      deltaY: m,
      moveX: k,
      moveY: y,
      offsetX: h,
      offsetY: C,
      touching: S,
      direction: T,
      startTime: O,
      startTouch: z,
      moveTouch: E,
      endTouch: D
    } = ft(), R = I(() => T.value === (e.vertical ? "vertical" : "horizontal"));
    let N = !1, H = -1;
    c({
      size: o,
      vertical: t
    }), w(v, null), fe(
      () => d.value,
      () => qo(this, null, function* () {
        yield wn(), Q(), $e();
      })
    ), f && fe(
      () => f.show.value,
      (ge) => qo(this, null, function* () {
        ge ? (yield wn(), $e()) : U();
      })
    ), Oo($e), Wt(U), To($e);
    function j(ge) {
      return u.find(({ index: Ve }) => Ve.value === ge);
    }
    function q() {
      e.loop && (a.value >= 0 && j(d.value - 1).setTranslate(-r.value), a.value <= -(r.value - o.value) && j(0).setTranslate(r.value), a.value > -(r.value - o.value) && a.value < 0 && (j(d.value - 1).setTranslate(0), j(0).setTranslate(0)));
    }
    function W(ge) {
      const Ve = Pn(ge) ? ge : Math.floor((a.value - o.value / 2) / -o.value), { loop: _e } = e;
      return Ve <= -1 ? _e ? -1 : 0 : Ve >= d.value ? _e ? d.value : d.value - 1 : Ve;
    }
    function ce(ge) {
      const { loop: Ve } = e;
      return ge === -1 ? Ve ? d.value - 1 : 0 : ge === d.value ? Ve ? 0 : d.value - 1 : ge;
    }
    function J(ge) {
      return e.loop ? ge < 0 ? d.value + ge : ge >= d.value ? ge - d.value : ge : wo(ge, 0, d.value - 1);
    }
    function ve() {
      return qo(this, null, function* () {
        const ge = a.value >= o.value, Ve = a.value <= -r.value, _e = 0, Fe = -(r.value - o.value);
        i.value = !0, (ge || Ve) && (i.value = !0, a.value = Ve ? _e : Fe, j(0).setTranslate(0), j(d.value - 1).setTranslate(0)), yield wn(), i.value = !1;
      });
    }
    function Q() {
      N || (l.value = J(F(e.initialIndex)), N = !0);
    }
    function de() {
      const { autoplay: ge } = e;
      !ge || d.value <= 1 || (U(), H = window.setTimeout(() => {
        ze(), de();
      }, F(ge)));
    }
    function U() {
      H && clearTimeout(H);
    }
    function oe(ge) {
      return qo(this, null, function* () {
        d.value <= 1 || !e.touchable || (z(ge), U(), yield ve(), i.value = !0);
      });
    }
    function B(ge) {
      const { touchable: Ve, vertical: _e } = e;
      !S.value || !Ve || (E(ge), R.value && (Ae(ge), a.value += _e ? y.value : k.value, q()));
    }
    function Y() {
      if (!S.value || (D(), !R.value))
        return;
      const { vertical: ge, onChange: Ve } = e, _e = ge ? m.value < 0 : g.value < 0, Fe = ge ? C.value : h.value, ie = performance.now() - O.value <= Xw && Fe >= Gw ? W(_e ? l.value + 1 : l.value - 1) : W();
      i.value = !1, a.value = ie * -o.value;
      const me = l.value;
      l.value = ce(ie), de(), me !== l.value && w(Ve, l.value);
    }
    function x(ge) {
      e.navigation === "hover" && (s.value = ge);
    }
    function ue(ge) {
      return e.navigation !== "hover" ? "" : fc(`--navigation${e.vertical ? "-vertical" : ""}-${ge}-animation`);
    }
    function $e() {
      n.value && (i.value = !0, o.value = e.vertical ? n.value.offsetHeight : n.value.offsetWidth, r.value = o.value * d.value, a.value = l.value * -o.value, u.forEach((ge) => {
        ge.setTranslate(0);
      }), de(), setTimeout(() => {
        i.value = !1;
      }));
    }
    function ze(ge) {
      return qo(this, null, function* () {
        if (d.value <= 1)
          return;
        Q();
        const { loop: Ve, onChange: _e } = e, Fe = l.value;
        if (l.value = J(Fe + 1), (ge == null ? void 0 : ge.event) !== !1 && w(_e, l.value), yield ve(), Fe === d.value - 1 && Ve) {
          j(0).setTranslate(r.value), a.value = d.value * -o.value;
          return;
        }
        Fe !== d.value - 1 && (a.value = l.value * -o.value);
      });
    }
    function We(ge) {
      return qo(this, null, function* () {
        if (d.value <= 1)
          return;
        Q();
        const { loop: Ve, onChange: _e } = e, Fe = l.value;
        if (l.value = J(Fe - 1), (ge == null ? void 0 : ge.event) !== !1 && w(_e, l.value), yield ve(), Fe === 0 && Ve) {
          j(d.value - 1).setTranslate(-r.value), a.value = o.value;
          return;
        }
        Fe !== 0 && (a.value = l.value * -o.value);
      });
    }
    function tn(ge, Ve) {
      if (d.value <= 1 || ge === l.value)
        return;
      ge = ge < 0 ? 0 : ge, ge = ge >= d.value ? d.value : ge;
      const _e = ge > l.value ? ze : We, Fe = Math.abs(ge - l.value);
      Array.from({ length: Fe }).forEach((eo, ie) => {
        _e({ event: ie === Fe - 1 ? Ve == null ? void 0 : Ve.event : !1 });
      });
    }
    return {
      length: d,
      index: l,
      swipeEl: n,
      trackSize: r,
      trackTranslate: a,
      lockDuration: i,
      hovering: s,
      n: fc,
      classes: Jw,
      handleTouchstart: oe,
      handleTouchmove: B,
      handleTouchend: Y,
      next: ze,
      prev: We,
      to: tn,
      resize: $e,
      toNumber: F,
      handleHovering: x,
      getNavigationAnimation: ue
    };
  }
});
Qp.render = xw;
var Da = Qp;
re(Da);
se(Da, $s);
const m5 = Da;
var At = Da;
function _w() {
  const { bindParent: e, index: n, parentProvider: o } = vn(Jp);
  return e || Mn("SwipeItem", "<var-swipe-item/> must in <var-swipe/>"), {
    index: n,
    swipe: o,
    bindSwipe: e
  };
}
const { name: eC, n: nC } = ee("swipe-item");
function oC(e, n) {
  return b(), P(
    "div",
    {
      class: p(e.n()),
      style: K({
        width: e.vertical ? void 0 : `${e.size}px`,
        height: e.vertical ? `${e.size}px` : void 0,
        transform: `translate${e.vertical ? "Y" : "X"}(${e.translate}px)`
      })
    },
    [
      V(e.$slots, "default")
    ],
    6
    /* CLASS, STYLE */
  );
}
const xp = _({
  name: eC,
  setup() {
    const e = $(0), { swipe: n, bindSwipe: o, index: t } = _w(), { size: r, vertical: a } = n;
    o({
      index: t,
      setTranslate: l
    });
    function l(s) {
      e.value = s;
    }
    return {
      n: nC,
      size: r,
      vertical: a,
      translate: e
    };
  }
});
xp.render = oC;
var ws = xp;
re(ws);
const h5 = ws;
var Vt = ws, tC = Object.defineProperty, pc = Object.getOwnPropertySymbols, rC = Object.prototype.hasOwnProperty, aC = Object.prototype.propertyIsEnumerable, vc = (e, n, o) => n in e ? tC(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, mc = (e, n) => {
  for (var o in n || (n = {}))
    rC.call(n, o) && vc(e, o, n[o]);
  if (pc)
    for (var o of pc(n))
      aC.call(n, o) && vc(e, o, n[o]);
  return e;
};
const _p = mc(mc({
  show: Boolean,
  imagePreventDefault: Boolean,
  images: {
    type: Array,
    default: () => []
  },
  initialIndex: {
    type: [String, Number],
    default: 0
  },
  zoom: {
    type: [String, Number],
    default: 2
  },
  closeable: Boolean,
  "onUpdate:show": A(),
  onLongPress: A()
}, Be($s, ["loop", "indicator", "onChange"])), Be(vt, [
  "lockScroll",
  "teleport",
  "closeOnKeyEscape",
  "onOpen",
  "onClose",
  "onOpened",
  "onClosed",
  "onKeyEscape",
  // internal for function call closes the dialog
  "onRouteChange"
])), { name: iC, n: hc, classes: lC } = ee("image-preview"), Ci = 12, gc = 200, sC = 350, bc = 200, uC = 500, lr = 1, cC = ["onTouchstart"], dC = ["src", "alt"];
function fC(e, n) {
  const o = te("var-swipe-item"), t = te("var-swipe"), r = te("var-icon"), a = te("var-popup");
  return b(), Oe(a, {
    "var-image-preview-cover": "",
    class: p(e.n("popup")),
    transition: e.n("$-fade"),
    overlay: !1,
    "close-on-click-overlay": !1,
    "close-on-key-escape": e.closeOnKeyEscape,
    "lock-scroll": e.lockScroll,
    teleport: e.teleport,
    show: e.show,
    "onUpdate:show": n[3] || (n[3] = (i) => e.show = i),
    onOpen: e.onOpen,
    onClose: e.onClose,
    onClosed: e.onClosed,
    onOpened: e.onOpened,
    onKeyEscape: e.onKeyEscape,
    onRouteChange: e.onRouteChange
  }, {
    default: pe(() => [
      X(t, Ye({
        ref: "swipeRef",
        class: e.n("swipe"),
        "var-image-preview-cover": "",
        touchable: e.canSwipe,
        indicator: e.indicator && e.images.length > 1,
        "initial-index": e.toNumber(e.initialIndex),
        loop: e.loop,
        onChange: e.onChange
      }, e.$attrs), {
        default: pe(() => [
          (b(!0), P(
            Ue,
            null,
            nn(e.images, (i, l) => (b(), Oe(o, {
              class: p(e.n("swipe-item")),
              "var-image-preview-cover": "",
              key: i
            }, {
              default: pe(() => [
                M("div", {
                  class: p(e.n("zoom-container")),
                  style: K({
                    transform: `scale(${e.scale}) translate(${e.translateX}px, ${e.translateY}px)`,
                    transitionTimingFunction: e.transitionTimingFunction,
                    transitionDuration: e.transitionDuration
                  }),
                  onTouchstart: (s) => e.handleTouchstart(s, l),
                  onTouchmove: n[0] || (n[0] = (...s) => e.handleTouchmove && e.handleTouchmove(...s)),
                  onTouchend: n[1] || (n[1] = (...s) => e.handleTouchend && e.handleTouchend(...s)),
                  onTouchcancel: n[2] || (n[2] = (...s) => e.handleTouchcancel && e.handleTouchcancel(...s))
                }, [
                  M("img", {
                    role: "img",
                    class: p(e.classes(e.n("image"), [e.isPreventDefault, e.n("--prevent")])),
                    src: i,
                    alt: i
                  }, null, 10, dC)
                ], 46, cC)
              ]),
              _: 2
              /* DYNAMIC */
            }, 1032, ["class"]))),
            128
            /* KEYED_FRAGMENT */
          ))
        ]),
        indicator: pe(({ index: i, length: l }) => [
          V(e.$slots, "indicator", {
            index: i,
            length: l
          }, () => [
            e.indicator && e.images.length > 1 ? (b(), P(
              "div",
              {
                key: 0,
                class: p(e.n("indicators"))
              },
              ae(i + 1) + " / " + ae(l),
              3
              /* TEXT, CLASS */
            )) : G("v-if", !0)
          ])
        ]),
        _: 3
        /* FORWARDED */
      }, 16, ["class", "touchable", "indicator", "initial-index", "loop", "onChange"]),
      V(e.$slots, "close-icon", {}, () => [
        e.closeable ? (b(), Oe(r, {
          key: 0,
          class: p(e.n("close-icon")),
          name: "close-circle",
          "var-image-preview-cover": "",
          onClick: e.close
        }, null, 8, ["class", "onClick"])) : G("v-if", !0)
      ]),
      e.$slots.extra ? (b(), P(
        "div",
        {
          key: 0,
          class: p(e.n("extra"))
        },
        [
          V(e.$slots, "extra")
        ],
        2
        /* CLASS */
      )) : G("v-if", !0)
    ]),
    _: 3
    /* FORWARDED */
  }, 8, ["class", "transition", "close-on-key-escape", "lock-scroll", "teleport", "show", "onOpen", "onClose", "onClosed", "onOpened", "onKeyEscape", "onRouteChange"]);
}
const ev = _({
  name: iC,
  components: {
    VarSwipe: At,
    VarSwipeItem: Vt,
    VarPopup: Co,
    VarIcon: Xe
  },
  inheritAttrs: !1,
  props: _p,
  setup(e) {
    const n = qn(e, "show"), o = $(1), t = $(0), r = $(0), a = $(), i = $(), l = $(!0), s = $(null), { moveX: u, moveY: c, distance: d, startTime: f, startTouch: v, moveTouch: g, endTouch: m } = ft(), k = I(() => {
      const { imagePreventDefault: U, show: oe } = e;
      return oe && U;
    });
    let y = null, h = null, C = !1;
    const S = {
      start: null,
      prev: null
    };
    je(() => document, "contextmenu", ce);
    function T(U) {
      o.value = F(U), l.value = !1, S.prev = null, window.setTimeout(() => {
        a.value = "linear", i.value = "0s";
      }, bc);
    }
    function O() {
      o.value = 1, t.value = 0, r.value = 0, l.value = !0, S.prev = null, a.value = void 0, i.value = void 0;
    }
    function z(U) {
      return S.prev ? d.value <= Ci && performance.now() - f.value <= gc && S.prev === U : !1;
    }
    function E(U) {
      return !U || !S.start || !S.prev ? !1 : d.value <= Ci && performance.now() - f.value < sC && (U === S.start || U.parentNode === S.start);
    }
    function D() {
      m(), window.clearTimeout(h), C = !1, S.start = null;
    }
    function R(U) {
      if (m(), window.clearTimeout(h), C) {
        C = !1;
        return;
      }
      const oe = E(U.target);
      y = window.setTimeout(() => {
        oe && W(), S.start = null;
      }, gc);
    }
    function N(U, oe) {
      window.clearTimeout(y), window.clearTimeout(h);
      const B = U.currentTarget;
      if (S.start = B, h = window.setTimeout(() => {
        C = !0, w(e.onLongPress, oe);
      }, uC), z(B)) {
        o.value > lr ? O() : T(e.zoom);
        return;
      }
      v(U), S.prev = B;
    }
    function H(U) {
      const { offsetWidth: oe, offsetHeight: B } = U, { naturalWidth: Y, naturalHeight: x } = U.querySelector(`.${hc("image")}`);
      return {
        width: oe,
        height: B,
        imageRadio: x / Y,
        rootRadio: B / oe,
        zoom: F(e.zoom)
      };
    }
    function L(U) {
      const { zoom: oe, imageRadio: B, rootRadio: Y, width: x, height: ue } = H(U);
      if (!B)
        return 0;
      const $e = B > Y ? ue / B : x;
      return Math.max(0, (oe * $e - x) / 2) / oe;
    }
    function j(U) {
      const { zoom: oe, imageRadio: B, rootRadio: Y, width: x, height: ue } = H(U);
      if (!B)
        return 0;
      const $e = B > Y ? ue : x * B;
      return Math.max(0, (oe * $e - ue) / 2) / oe;
    }
    function q(U) {
      if (!S.prev)
        return;
      g(U);
      const oe = U.currentTarget;
      if (d.value > Ci && window.clearTimeout(h), o.value > lr) {
        const B = L(oe), Y = j(oe);
        t.value = wo(t.value + u.value, -B, B), r.value = wo(r.value + c.value, -Y, Y);
      }
      S.prev = oe;
    }
    function W() {
      if (o.value > lr) {
        O(), setTimeout(() => w(e["onUpdate:show"], !1), bc);
        return;
      }
      w(e["onUpdate:show"], !1);
    }
    function ce(U) {
      k.value && Ae(U);
    }
    function J(U) {
      var oe;
      (oe = s.value) == null || oe.prev(U);
    }
    function ve(U) {
      var oe;
      (oe = s.value) == null || oe.next(U);
    }
    function Q(U, oe) {
      var B;
      (B = s.value) == null || B.to(U, oe);
    }
    function de(U) {
      U <= lr ? O() : T(U);
    }
    return {
      swipeRef: s,
      isPreventDefault: k,
      show: n,
      scale: o,
      translateX: t,
      translateY: r,
      canSwipe: l,
      transitionTimingFunction: a,
      transitionDuration: i,
      n: hc,
      classes: lC,
      toNumber: F,
      handleTouchstart: N,
      handleTouchmove: q,
      handleTouchend: R,
      handleTouchcancel: D,
      close: W,
      prev: J,
      next: ve,
      to: Q,
      zoom: de
    };
  }
});
ev.render = fC;
var Jt = ev, pC = Object.defineProperty, vC = Object.defineProperties, mC = Object.getOwnPropertyDescriptors, yc = Object.getOwnPropertySymbols, hC = Object.prototype.hasOwnProperty, gC = Object.prototype.propertyIsEnumerable, kc = (e, n, o) => n in e ? pC(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, sr = (e, n) => {
  for (var o in n || (n = {}))
    hC.call(n, o) && kc(e, o, n[o]);
  if (yc)
    for (var o of yc(n))
      gC.call(n, o) && kc(e, o, n[o]);
  return e;
}, $c = (e, n) => vC(e, mC(n));
let ho, Pt = {};
function bC(e = {}) {
  return bn(e) ? $c(sr({}, Pt), { images: [e] }) : Ge(e) ? $c(sr({}, Pt), { images: e }) : sr(sr({}, Pt), e);
}
function Mo(e) {
  if (!_n())
    return;
  Mo.close();
  const n = bC(e), o = Ze(n);
  o.teleport = "body", ho = o;
  const { unmountInstance: t } = pt(Jt, o, {
    onClose: () => w(o.onClose),
    onClosed: () => {
      w(o.onClosed), t(), ho === o && (ho = null);
    },
    onRouteChange: () => {
      t(), ho === o && (ho = null);
    },
    "onUpdate:show": (r) => {
      o.show = r;
    }
  });
  o.show = !0;
}
Mo.close = () => {
  if (ho != null) {
    const e = ho;
    ho = null, He().then(() => {
      e.show = !1;
    });
  }
};
Mo.setDefaultOptions = (e) => {
  Pt = e;
};
Mo.resetDefaultOptions = () => {
  Pt = {};
};
Mo.Component = Jt;
re(Jt);
re(Jt, Mo);
se(Mo, _p);
const g5 = Jt;
var Lt = Mo;
const nv = Symbol("INDEX_BAR_BIND_INDEX_ANCHOR_KEY");
function yC() {
  const { bindChildren: e, length: n, childProviders: o } = mn(
    nv
  );
  return {
    length: n,
    indexAnchors: o,
    bindIndexAnchors: e
  };
}
function kC() {
  const { parentProvider: e, index: n, bindParent: o } = vn(
    nv
  );
  return o || Mn("IndexAnchor", 'You should use this component in "IndexBar"'), {
    index: n,
    indexBar: e,
    bindIndexBar: o
  };
}
const ov = {
  index: [Number, String]
}, { name: $C, n: wC, classes: CC } = ee("index-anchor");
function SC(e, n) {
  return b(), Oe(ct(e.sticky ? e.n("$-sticky") : e.Transition), {
    "offset-top": e.sticky ? e.stickyOffsetTop : null,
    "z-index": e.sticky ? e.zIndex : null,
    disabled: e.disabled && !e.cssMode,
    "css-mode": e.cssMode,
    ref: "anchorEl"
  }, {
    default: pe(() => [
      M(
        "div",
        Ye({
          class: e.n()
        }, e.$attrs),
        [
          V(e.$slots, "default", {}, () => [
            De(
              ae(e.name),
              1
              /* TEXT */
            )
          ])
        ],
        16
        /* FULL_PROPS */
      )
    ]),
    _: 3
    /* FORWARDED */
  }, 8, ["offset-top", "z-index", "disabled", "css-mode"]);
}
const tv = _({
  name: $C,
  components: { VarSticky: at },
  inheritAttrs: !1,
  props: ov,
  setup(e) {
    const n = $(!1), o = I(() => e.index), t = $(null), { index: r, indexBar: a, bindIndexBar: i } = kC(), { active: l, sticky: s, cssMode: u, stickyOffsetTop: c, zIndex: d } = a;
    i({
      index: r,
      name: o,
      setDisabled: g,
      getOffsetTop: v
    });
    function v() {
      return t.value ? t.value.$el ? t.value.$el.offsetTop : t.value.offsetTop : 0;
    }
    function g(m) {
      n.value = m;
    }
    return {
      n: wC,
      classes: CC,
      name: o,
      anchorEl: t,
      active: l,
      sticky: s,
      zIndex: d,
      disabled: n,
      cssMode: u,
      stickyOffsetTop: c,
      Transition: Je
    };
  }
});
tv.render = SC;
var Ba = tv;
re(Ba);
se(Ba, ov);
const b5 = Ba;
var vl = Ba;
const rv = {
  sticky: {
    type: Boolean,
    default: !0
  },
  stickyOffsetTop: {
    type: [String, Number],
    default: 0
  },
  stickyCssMode: Boolean,
  hideList: Boolean,
  zIndex: {
    type: [Number, String],
    default: 1
  },
  highlightColor: String,
  duration: {
    type: [Number, String],
    default: 0
  },
  onClick: A(),
  onChange: A()
};
var wc = (e, n, o) => new Promise((t, r) => {
  var a = (s) => {
    try {
      l(o.next(s));
    } catch (u) {
      r(u);
    }
  }, i = (s) => {
    try {
      l(o.throw(s));
    } catch (u) {
      r(u);
    }
  }, l = (s) => s.done ? t(s.value) : Promise.resolve(s.value).then(a, i);
  l((o = o.apply(e, n)).next());
});
const { name: PC, n: zC, classes: OC } = ee("index-bar"), TC = ["onClick"];
function EC(e, n) {
  return b(), P(
    "div",
    {
      class: p(e.n()),
      ref: "barEl"
    },
    [
      V(e.$slots, "default"),
      M(
        "ul",
        {
          class: p(e.n("anchor-list")),
          style: K({ zIndex: e.toNumber(e.zIndex) + 2, display: e.hideList ? "none" : "block" })
        },
        [
          (b(!0), P(
            Ue,
            null,
            nn(e.anchorNameList, (o) => (b(), P("li", {
              key: o,
              class: p(e.classes(e.n("anchor-item"), [e.active === o, e.n("anchor-item--active")])),
              style: K({ color: e.active === o && e.highlightColor ? e.highlightColor : void 0 }),
              onClick: (t) => e.anchorClick({ anchorName: o, manualCall: !0 })
            }, [
              V(e.$slots, "anchor-name", { anchorName: o }, () => [
                De(
                  ae(o),
                  1
                  /* TEXT */
                )
              ])
            ], 14, TC))),
            128
            /* KEYED_FRAGMENT */
          ))
        ],
        6
        /* CLASS, STYLE */
      )
    ],
    2
    /* CLASS */
  );
}
const av = _({
  name: PC,
  props: rv,
  setup(e) {
    const n = $(""), o = $(null), t = $([]), r = $(), a = I(() => e.sticky), i = I(() => e.stickyCssMode), l = I(() => xe(e.stickyOffsetTop)), s = I(() => e.zIndex), { length: u, indexAnchors: c, bindIndexAnchors: d } = yC();
    let f = null, v = !1;
    const g = {
      active: r,
      sticky: a,
      cssMode: i,
      stickyOffsetTop: l,
      zIndex: s
    };
    fe(
      () => u.value,
      () => wc(this, null, function* () {
        yield wn(), t.value = c.filter(({ name: O }) => O.value != null).map(({ name: O }) => O.value);
      })
    ), cn(C), Ar(S), ut(() => {
      v = !0, S();
    }), Oo(() => {
      !v || r.value === void 0 || (h({
        anchorName: r.value,
        options: { event: !1 }
      }), v = !1);
    }), d(g);
    function m(O, z) {
      const E = _o(O) ? O.name.value : O;
      E === r.value || E === void 0 || (r.value = E, (z == null ? void 0 : z.event) !== !1 && w(e.onChange, E));
    }
    function k() {
      const { top: O } = un(f), { top: z } = un(o.value);
      return Vo(f) - O + z;
    }
    function y() {
      const O = Vo(f), z = f === window ? document.body.scrollHeight : f.scrollHeight, E = k();
      c.forEach((D, R) => {
        const N = D.getOffsetTop(), H = O - N + l.value - E, L = R === c.length - 1 ? z : c[R + 1].getOffsetTop() - D.getOffsetTop();
        D.setDisabled(!0), H >= 0 && H < L && n.value === "" && (D.setDisabled(!1), m(D));
      });
    }
    function h(O) {
      return wc(this, arguments, function* ({ anchorName: z, manualCall: E = !1, options: D }) {
        if (E && w(e.onClick, z), z === r.value && !v)
          return;
        const R = c.find(({ name: q }) => z === q.value);
        if (!R)
          return;
        const N = k(), L = R.getOffsetTop() - l.value + N, j = Ql(f);
        n.value = z, m(z, D), yield Tt(f, {
          left: j,
          top: L,
          animation: Xd,
          duration: F(e.duration)
        }), yield wn(), n.value = "";
      });
    }
    function C() {
      f = So(o.value), f.addEventListener("scroll", y);
    }
    function S() {
      f && f.removeEventListener("scroll", y);
    }
    function T(O, z) {
      Ot(() => h({ anchorName: O, options: z }));
    }
    return {
      barEl: o,
      active: r,
      zIndex: s,
      anchorNameList: t,
      n: zC,
      classes: OC,
      toNumber: F,
      scrollTo: T,
      anchorClick: h
    };
  }
});
av.render = EC;
var Ia = av;
re(Ia);
se(Ia, rv);
const y5 = Ia;
var ml = Ia, DC = Object.defineProperty, Cc = Object.getOwnPropertySymbols, BC = Object.prototype.hasOwnProperty, IC = Object.prototype.propertyIsEnumerable, Sc = (e, n, o) => n in e ? DC(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, MC = (e, n) => {
  for (var o in n || (n = {}))
    BC.call(n, o) && Sc(e, o, n[o]);
  if (Cc)
    for (var o of Cc(n))
      IC.call(n, o) && Sc(e, o, n[o]);
  return e;
};
const iv = MC({
  modelValue: String,
  modelModifiers: {
    type: Object,
    default: () => ({})
  },
  type: {
    type: String,
    default: "text"
  },
  textarea: Boolean,
  rows: {
    type: [String, Number],
    default: 8
  },
  maxlength: [String, Number],
  readonly: Boolean,
  resize: Boolean,
  autofocus: Boolean,
  validateTrigger: {
    type: Array,
    default: () => ["onInput", "onClear"]
  },
  rules: Array,
  enterkeyhint: String,
  onFocus: A(),
  onBlur: A(),
  onInput: A(),
  onChange: A(),
  onClear: A(),
  "onUpdate:modelValue": A()
}, Be(za, [
  "size",
  "variant",
  "placeholder",
  "line",
  "hint",
  "textColor",
  "focusColor",
  "blurColor",
  "disabled",
  "clearable",
  "onClick"
])), { name: NC, n: AC, classes: VC } = ee("input"), LC = ["placeholder", "enterkeyhint"], RC = ["id", "disabled", "readonly", "type", "value", "placeholder", "maxlength", "rows", "enterkeyhint", "inputmode"], FC = ["id", "disabled", "readonly", "type", "value", "placeholder", "maxlength", "enterkeyhint", "inputmode"];
function UC(e, n) {
  const o = te("var-field-decorator"), t = te("var-form-details");
  return b(), P(
    "div",
    {
      class: p(e.classes(e.n(), e.n("$--box"))),
      onMousedown: n[13] || (n[13] = (...r) => e.handleMousedown && e.handleMousedown(...r))
    },
    [
      X(
        o,
        yo(jt({
          value: e.modelValue,
          id: e.id,
          size: e.size,
          variant: e.variant,
          placeholder: e.placeholder,
          line: e.line,
          hint: e.hint,
          textColor: e.textColor,
          focusColor: e.focusColor,
          blurColor: e.blurColor,
          isFocusing: e.isFocusing,
          errorMessage: e.errorMessage,
          formDisabled: e.formDisabled,
          disabled: e.disabled,
          clearable: e.clearable,
          cursor: e.cursor,
          composing: e.isComposing,
          hintCenter: !e.textarea,
          onClick: e.handleClick,
          onClear: e.handleClear
        })),
        zt({
          "clear-icon": pe(({ clear: r }) => [
            V(e.$slots, "clear-icon", { clear: r })
          ]),
          "append-icon": pe(() => [
            V(e.$slots, "append-icon")
          ]),
          default: pe(() => [
            e.normalizedType === "password" ? (b(), P("input", {
              key: 0,
              tabindex: "-1",
              class: p(e.n("autocomplete")),
              placeholder: e.hint ? void 0 : e.placeholder,
              style: K({
                "--input-placeholder-color": e.placeholderColor
              }),
              enterkeyhint: e.enterkeyhint
            }, null, 14, LC)) : G("v-if", !0),
            e.textarea ? (b(), P("textarea", {
              key: 1,
              class: p(
                e.classes(
                  e.n("input"),
                  e.n("--textarea"),
                  [e.formDisabled || e.disabled, e.n("--disabled")],
                  [e.errorMessage, e.n("--error")],
                  [e.errorMessage, e.n("--caret-error")]
                )
              ),
              ref: "el",
              autocomplete: "new-password",
              id: e.id,
              disabled: e.formDisabled || e.disabled,
              readonly: e.formReadonly || e.readonly,
              type: e.normalizedType,
              value: e.modelValue,
              placeholder: e.hint ? void 0 : e.placeholder,
              maxlength: e.maxlength,
              rows: e.rows,
              enterkeyhint: e.enterkeyhint,
              inputmode: e.type === "number" ? "numeric" : void 0,
              style: K({
                color: e.errorMessage ? void 0 : e.textColor,
                caretColor: e.errorMessage ? void 0 : e.focusColor,
                resize: e.resize ? "vertical" : "none",
                "--input-placeholder-color": e.placeholderColor
              }),
              onFocus: n[0] || (n[0] = (...r) => e.handleFocus && e.handleFocus(...r)),
              onBlur: n[1] || (n[1] = (...r) => e.handleBlur && e.handleBlur(...r)),
              onInput: n[2] || (n[2] = (...r) => e.handleInput && e.handleInput(...r)),
              onChange: n[3] || (n[3] = (...r) => e.handleChange && e.handleChange(...r)),
              onCompositionstart: n[4] || (n[4] = (...r) => e.handleCompositionStart && e.handleCompositionStart(...r)),
              onCompositionend: n[5] || (n[5] = (...r) => e.handleCompositionEnd && e.handleCompositionEnd(...r))
            }, null, 46, RC)) : (b(), P("input", {
              key: 2,
              class: p(
                e.classes(
                  e.n("input"),
                  [e.formDisabled || e.disabled, e.n("--disabled")],
                  [e.errorMessage, e.n("--error")],
                  [e.errorMessage, e.n("--caret-error")]
                )
              ),
              ref: "el",
              autocomplete: "new-password",
              id: e.id,
              disabled: e.formDisabled || e.disabled,
              readonly: e.formReadonly || e.readonly,
              type: e.normalizedType,
              value: e.modelValue,
              placeholder: e.hint ? void 0 : e.placeholder,
              maxlength: e.maxlength,
              enterkeyhint: e.enterkeyhint,
              inputmode: e.type === "number" ? "numeric" : void 0,
              style: K({
                color: e.errorMessage ? void 0 : e.textColor,
                caretColor: e.errorMessage ? void 0 : e.focusColor,
                "--input-placeholder-color": e.placeholderColor
              }),
              onFocus: n[6] || (n[6] = (...r) => e.handleFocus && e.handleFocus(...r)),
              onBlur: n[7] || (n[7] = (...r) => e.handleBlur && e.handleBlur(...r)),
              onInput: n[8] || (n[8] = (...r) => e.handleInput && e.handleInput(...r)),
              onChange: n[9] || (n[9] = (...r) => e.handleChange && e.handleChange(...r)),
              onCompositionstart: n[10] || (n[10] = (...r) => e.handleCompositionStart && e.handleCompositionStart(...r)),
              onCompositionend: n[11] || (n[11] = (...r) => e.handleCompositionEnd && e.handleCompositionEnd(...r))
            }, null, 46, FC))
          ]),
          _: 2
          /* DYNAMIC */
        }, [
          e.$slots["prepend-icon"] ? {
            name: "prepend-icon",
            fn: pe(() => [
              V(e.$slots, "prepend-icon")
            ]),
            key: "0"
          } : void 0
        ]),
        1040
        /* FULL_PROPS, DYNAMIC_SLOTS */
      ),
      X(t, {
        "error-message": e.errorMessage,
        "extra-message": e.maxlengthText,
        onMousedown: n[12] || (n[12] = In(() => {
        }, ["stop"]))
      }, zt({
        _: 2
        /* DYNAMIC */
      }, [
        e.$slots["extra-message"] ? {
          name: "extra-message",
          fn: pe(() => [
            V(e.$slots, "extra-message")
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["error-message", "extra-message"])
    ],
    34
    /* CLASS, NEED_HYDRATION */
  );
}
const lv = _({
  name: NC,
  components: {
    VarFormDetails: On,
    VarFieldDecorator: Nt
  },
  props: iv,
  setup(e) {
    const n = hd(), o = $(null), t = $(!1), r = $(!1), { bindForm: a, form: i } = Un(), {
      errorMessage: l,
      validateWithTrigger: s,
      validate: u,
      // expose
      resetValidation: c
    } = Fn(), d = I(() => e.disabled || e.readonly ? "" : "text"), f = I(() => e.type === "number" ? "text" : e.type), v = I(() => {
      const { maxlength: J, modelValue: ve } = e;
      return J ? Gn(ve) ? `0 / ${J}` : `${String(ve).length}/${J}` : "";
    }), g = I(() => {
      const { hint: J, blurColor: ve, focusColor: Q } = e;
      if (!J)
        return l.value ? "var(--field-decorator-error-color)" : t.value ? Q || "var(--field-decorator-focus-color)" : ve || "var(--field-decorator-placeholder-color, var(--field-decorator-blur-color))";
    });
    w(a, {
      reset: j,
      validate: q,
      resetValidation: c
    }), cn(() => {
      e.autofocus && W();
    });
    function k(J) {
      He(() => {
        const { validateTrigger: ve, rules: Q, modelValue: de } = e;
        s(ve, J, Q, de);
      });
    }
    function y(J) {
      t.value = !0, w(e.onFocus, J), k("onFocus");
    }
    function h(J) {
      t.value = !1, w(e.onBlur, J), k("onBlur");
    }
    function C(J) {
      const ve = J.target;
      let { value: Q } = ve;
      e.type === "number" && (Q = R(Q));
      const de = H(N(Q));
      return de === e.modelValue && (ve.value = de), de;
    }
    function S() {
      r.value = !0;
    }
    function T(J) {
      r.value && (r.value = !1, J.target.dispatchEvent(new Event("input")));
    }
    function O(J) {
      if (r.value)
        return;
      const ve = C(J);
      w(e["onUpdate:modelValue"], ve), w(e.onInput, ve, J), k("onInput");
    }
    function z(J) {
      const ve = C(J);
      w(e.onChange, ve, J), k("onChange");
    }
    function E() {
      const { disabled: J, readonly: ve, clearable: Q, onClear: de } = e;
      i != null && i.disabled.value || i != null && i.readonly.value || J || ve || !Q || (w(e["onUpdate:modelValue"], ""), w(de, ""), k("onClear"));
    }
    function D(J) {
      const { disabled: ve, onClick: Q } = e;
      i != null && i.disabled.value || ve || (w(Q, J), k("onClick"));
    }
    function R(J) {
      const ve = J.indexOf("-"), Q = J.indexOf(".");
      return ve > -1 && (J = ve === 0 ? "-" + J.replace(/-/g, "") : J.replace(/-/g, "")), Q > -1 && (J = J.slice(0, Q + 1) + J.slice(Q).replace(/\./g, "")), J.replace(/[^-0-9.]/g, "");
    }
    function N(J) {
      return e.modelModifiers.trim ? J.trim() : J;
    }
    function H(J) {
      return e.maxlength ? J.slice(0, F(e.maxlength)) : J;
    }
    function L(J) {
      const { disabled: ve } = e;
      i != null && i.disabled.value || ve || J.target === o.value || (W(), Ae(J));
    }
    function j() {
      w(e["onUpdate:modelValue"], ""), c();
    }
    function q() {
      return u(e.rules, e.modelValue);
    }
    function W() {
      var J;
      (J = o.value) == null || J.focus();
    }
    function ce() {
      o.value.blur();
    }
    return {
      el: o,
      id: n,
      isFocusing: t,
      isComposing: r,
      errorMessage: l,
      placeholderColor: g,
      normalizedType: f,
      cursor: d,
      maxlengthText: v,
      formDisabled: i == null ? void 0 : i.disabled,
      formReadonly: i == null ? void 0 : i.readonly,
      n: AC,
      classes: VC,
      isEmpty: Gn,
      handleFocus: y,
      handleBlur: h,
      handleInput: O,
      handleChange: z,
      handleClear: E,
      handleClick: D,
      handleCompositionStart: S,
      handleCompositionEnd: T,
      handleMousedown: L,
      validate: q,
      resetValidation: c,
      reset: j,
      focus: W,
      blur: ce
    };
  }
});
lv.render = UC;
var Ma = lv;
re(Ma);
se(Ma, iv);
const k5 = Ma;
var Ir = Ma;
const sv = {
  type: {
    type: String,
    default: "default"
  },
  href: String,
  target: String,
  rel: String,
  to: [String, Object],
  replace: Boolean,
  underline: {
    type: String,
    default: "always"
  },
  disabled: Boolean,
  textSize: [String, Number],
  textColor: String,
  onClick: A()
}, { name: HC, n: YC, classes: jC } = ee("link");
function WC(e, n) {
  return b(), Oe(ct(e.tag), Ye(e.linkProps, {
    class: e.classes(
      e.n(),
      e.n("$--box"),
      e.n("$--inline-flex"),
      e.n(`--${e.type}`),
      [e.underline !== "none", e.n(`--underline-${e.underline}`)],
      [e.disabled, e.n("--disabled")],
      [e.isFocusing && !e.inMobile(), e.n("--focusing")]
    ),
    style: {
      color: e.textColor,
      fontSize: e.toSizeUnit(e.textSize)
    },
    onClick: e.handleClick,
    onFocus: n[0] || (n[0] = (o) => e.isFocusing = !0),
    onBlur: n[1] || (n[1] = (o) => e.isFocusing = !1)
  }), {
    default: pe(() => [
      V(e.$slots, "default")
    ]),
    _: 3
    /* FORWARDED */
  }, 16, ["class", "style", "onClick"]);
}
const uv = _({
  name: HC,
  props: sv,
  setup(e) {
    const n = $(!1), o = I(() => {
      const { disabled: a, href: i, to: l } = e;
      return a ? "span" : i ? "a" : l ? "router-link" : "a";
    }), t = I(() => {
      const { disabled: a, href: i, target: l, to: s, replace: u, rel: c } = e;
      return a ? {} : i ? { href: i, target: l, rel: c } : s ? { to: s, target: l, replace: u } : {};
    });
    function r(a) {
      e.disabled || w(e.onClick, a);
    }
    return {
      tag: o,
      linkProps: t,
      isFocusing: n,
      inMobile: gr,
      n: YC,
      classes: jC,
      handleClick: r,
      toSizeUnit: Te
    };
  }
});
uv.render = WC;
var Na = uv;
re(Na);
se(Na, sv);
const $5 = Na;
var hl = Na;
const cv = {
  loading: Boolean,
  immediateCheck: {
    type: Boolean,
    default: !0
  },
  finished: Boolean,
  error: Boolean,
  offset: {
    type: [String, Number],
    default: 0
  },
  loadingText: String,
  finishedText: String,
  errorText: String,
  onLoad: A(),
  "onUpdate:loading": A(),
  "onUpdate:error": A()
}, dv = Symbol("TABS_ITEMS_BIND_TAB_ITEM_KEY");
function KC() {
  const { bindChildren: e, childProviders: n, length: o } = mn(
    dv
  );
  return {
    length: o,
    tabItemList: n,
    bindTabItem: e
  };
}
const fv = Symbol("TAB_ITEM_BIND_LIST_KEY");
function qC() {
  const { parentProvider: e, bindParent: n, index: o } = vn(
    dv
  );
  return n || Mn("TabItem", "<var-tab-item/> must in <var-tabs-items/>"), {
    index: o,
    tabsItems: e,
    bindTabsItems: n
  };
}
function XC() {
  const { childProviders: e, bindChildren: n, length: o } = mn(fv);
  return {
    length: o,
    lists: e,
    bindLists: n
  };
}
function GC() {
  const { parentProvider: e, bindParent: n, index: o } = vn(fv);
  return {
    index: o,
    tabItem: e,
    bindTabItem: n
  };
}
var ZC = (e, n, o) => new Promise((t, r) => {
  var a = (s) => {
    try {
      l(o.next(s));
    } catch (u) {
      r(u);
    }
  }, i = (s) => {
    try {
      l(o.throw(s));
    } catch (u) {
      r(u);
    }
  }, l = (s) => s.done ? t(s.value) : Promise.resolve(s.value).then(a, i);
  l((o = o.apply(e, n)).next());
});
const { name: JC, n: QC, classes: xC } = ee("list");
function _C(e, n) {
  const o = te("var-loading"), t = Re("ripple");
  return b(), P(
    "div",
    {
      class: p(e.classes(e.n(), e.n("$--box"))),
      ref: "listEl"
    },
    [
      V(e.$slots, "default"),
      e.loading ? V(e.$slots, "loading", { key: 0 }, () => {
        var r;
        return [
          M(
            "div",
            {
              class: p(e.n("loading"))
            },
            [
              M(
                "div",
                {
                  class: p(e.n("loading-text"))
                },
                ae((r = e.loadingText) != null ? r : e.t("listLoadingText")),
                3
                /* TEXT, CLASS */
              ),
              X(o, {
                size: "mini",
                radius: 10
              })
            ],
            2
            /* CLASS */
          )
        ];
      }) : G("v-if", !0),
      e.finished ? V(e.$slots, "finished", { key: 1 }, () => {
        var r;
        return [
          M(
            "div",
            {
              class: p(e.n("finished"))
            },
            ae((r = e.finishedText) != null ? r : e.t("listFinishedText")),
            3
            /* TEXT, CLASS */
          )
        ];
      }) : G("v-if", !0),
      e.error ? V(e.$slots, "error", { key: 2 }, () => {
        var r;
        return [
          Me((b(), P(
            "div",
            {
              class: p(e.n("error")),
              onClick: n[0] || (n[0] = (...a) => e.load && e.load(...a))
            },
            [
              De(
                ae((r = e.errorText) != null ? r : e.t("listErrorText")),
                1
                /* TEXT */
              )
            ],
            2
            /* CLASS */
          )), [
            [t]
          ])
        ];
      }) : G("v-if", !0),
      M(
        "div",
        {
          class: p(e.n("detector")),
          ref: "detectorEl"
        },
        null,
        2
        /* CLASS */
      )
    ],
    2
    /* CLASS */
  );
}
const pv = _({
  name: JC,
  directives: { Ripple: on },
  components: { VarLoading: ot },
  props: cv,
  setup(e) {
    const n = $(null), o = $(null), { tabItem: t, bindTabItem: r } = GC();
    let a;
    w(r, {}), t && fe(() => t.current.value, u), fe(() => [e.loading, e.error, e.finished], u), cn(() => {
      a = So(n.value), a.addEventListener("scroll", u), e.immediateCheck && u();
    }), Wt(s);
    function i() {
      w(e["onUpdate:error"], !1), w(e["onUpdate:loading"], !0), w(e.onLoad);
    }
    function l() {
      const { bottom: c } = un(a), { bottom: d } = un(o.value);
      return Math.floor(d) - xe(e.offset) <= c;
    }
    function s() {
      a && a.removeEventListener("scroll", u);
    }
    function u() {
      return ZC(this, null, function* () {
        yield He(), !(e.loading || e.finished || e.error || (t == null ? void 0 : t.current.value) === !1 || !l()) && i();
      });
    }
    return {
      t: an,
      listEl: n,
      detectorEl: o,
      isNumber: Pn,
      load: i,
      check: u,
      n: QC,
      classes: xC
    };
  }
});
pv.render = _C;
var Aa = pv;
re(Aa);
se(Aa, cv);
const w5 = Aa;
var gl = Aa;
const eS = {
  value: {
    type: Number,
    default: 0
  },
  opacity: {
    type: Number,
    default: 0
  },
  error: Boolean,
  color: String,
  errorColor: String,
  height: [Number, String],
  top: [Number, String]
}, {
  name: nS,
  classes: oS,
  n: Pc
} = ee("loading-bar");
var tS = _({
  name: nS,
  props: eS,
  setup(e) {
    return () => X("div", {
      class: oS(Pc(), [e.error, Pc("--error")]),
      style: {
        zIndex: Bn.zIndex + 10,
        width: `${e.value}%`,
        opacity: e.opacity,
        height: Te(e.height),
        backgroundColor: e.error ? e.errorColor : e.color,
        top: Te(e.top)
      }
    }, null);
  }
});
let vv, mv, Va, hv, zc, gv = {};
const rS = {
  value: 0,
  opacity: 0,
  error: !1
}, pn = Ze(rS), aS = (e) => {
  Object.assign(pn, e), gv = e;
}, iS = () => {
  Object.keys(gv).forEach((e) => {
    pn[e] !== void 0 && (pn[e] = void 0);
  });
}, bv = () => {
  zc || (zc = !0, pt(tS, pn));
}, Cs = () => {
  vv = window.setTimeout(() => {
    if (pn.value >= 95)
      return;
    let e = Math.random();
    pn.value < 70 && (e = Math.round(5 * Math.random())), pn.value += e, Cs();
  }, 200);
}, Ss = () => {
  window.clearTimeout(mv), window.clearTimeout(vv), window.clearTimeout(Va), window.clearTimeout(hv);
}, lS = () => {
  Ss(), pn.error = !1, pn.value = 0, bv(), Va = window.setTimeout(() => {
    pn.opacity = 1;
  }, 200), Cs();
}, yv = () => {
  Ss(), pn.value = 100, Va = window.setTimeout(() => {
    pn.opacity = 0, mv = window.setTimeout(() => {
      pn.error = !1;
    }, 250);
  }, 300);
}, sS = () => {
  Ss(), pn.error = !0, pn.value === 100 && (pn.value = 0), bv(), Va = window.setTimeout(() => {
    pn.opacity = 1;
  }, 200), Cs(), hv = window.setTimeout(yv, 300);
}, kv = {
  start: lS,
  finish: yv,
  error: sS,
  setDefaultOptions: aS,
  resetDefaultOptions: iS
}, C5 = kv;
var bl = kv;
const Ps = {
  show: Boolean,
  disabled: Boolean,
  trigger: {
    type: String,
    default: "click"
  },
  reference: String,
  placement: {
    type: String,
    default: "cover-top-start"
  },
  strategy: {
    type: String,
    default: "absolute"
  },
  offsetX: {
    type: [Number, String],
    default: 0
  },
  offsetY: {
    type: [Number, String],
    default: 0
  },
  teleport: {
    type: [String, Object, Boolean],
    default: "body"
  },
  sameWidth: Boolean,
  elevation: {
    type: [Boolean, String, Number],
    default: !0
  },
  defaultStyle: {
    type: Boolean,
    default: !0
  },
  popoverClass: String,
  closeOnClickReference: Boolean,
  closeOnKeyEscape: {
    type: Boolean,
    default: !0
  },
  onOpen: A(),
  onOpened: A(),
  onClose: A(),
  onClosed: A(),
  onClickOutside: A(),
  "onUpdate:show": A()
}, { name: uS, n: cS, classes: dS } = ee("menu");
function fS(e, n) {
  return b(), P(
    "div",
    {
      ref: "host",
      class: p(e.classes(e.n(), e.n("$--box"))),
      onClick: n[3] || (n[3] = (...o) => e.handleHostClick && e.handleHostClick(...o)),
      onMouseenter: n[4] || (n[4] = (...o) => e.handleHostMouseenter && e.handleHostMouseenter(...o)),
      onMouseleave: n[5] || (n[5] = (...o) => e.handleHostMouseleave && e.handleHostMouseleave(...o))
    },
    [
      V(e.$slots, "default"),
      (b(), Oe(xn, {
        to: e.teleport === !1 ? void 0 : e.teleport,
        disabled: e.teleportDisabled || e.teleport === !1
      }, [
        X(Je, {
          name: e.n(),
          onAfterEnter: e.onOpened,
          onAfterLeave: e.handleClosed,
          persisted: ""
        }, {
          default: pe(() => [
            Me(M(
              "div",
              {
                ref: "popover",
                style: K({
                  zIndex: e.zIndex,
                  width: e.sameWidth ? e.toSizeUnit(Math.ceil(e.hostSize.width)) : void 0
                }),
                class: p(
                  e.classes(
                    e.n("menu"),
                    e.n("$--box"),
                    e.popoverClass,
                    [e.defaultStyle, e.n("--menu-background-color")],
                    [e.defaultStyle, e.formatElevation(e.elevation, 3)]
                  )
                ),
                onClick: n[0] || (n[0] = In(() => {
                }, ["stop"])),
                onMouseenter: n[1] || (n[1] = (...o) => e.handlePopoverMouseenter && e.handlePopoverMouseenter(...o)),
                onMouseleave: n[2] || (n[2] = (...o) => e.handlePopoverMouseleave && e.handlePopoverMouseleave(...o))
              },
              [
                V(e.$slots, "menu")
              ],
              38
              /* CLASS, STYLE, NEED_HYDRATION */
            ), [
              [Kn, e.show]
            ])
          ]),
          _: 3
          /* FORWARDED */
        }, 8, ["name", "onAfterEnter", "onAfterLeave"])
      ], 8, ["to", "disabled"]))
    ],
    34
    /* CLASS, NEED_HYDRATION */
  );
}
const $v = _({
  name: uS,
  props: Ps,
  setup(e) {
    const { disabled: n } = Wo(), {
      popover: o,
      host: t,
      hostSize: r,
      show: a,
      zIndex: i,
      handleHostClick: l,
      handleHostMouseenter: s,
      handleHostMouseleave: u,
      handlePopoverMouseenter: c,
      handlePopoverMouseleave: d,
      handlePopoverClose: f,
      handleClosed: v,
      // expose
      open: g,
      // expose
      close: m,
      // expose
      resize: k
    } = Lp(e);
    return {
      popover: o,
      host: t,
      hostSize: r,
      show: a,
      zIndex: i,
      teleportDisabled: n,
      formatElevation: yn,
      toSizeUnit: Te,
      n: cS,
      classes: dS,
      handleHostClick: l,
      handleHostMouseenter: s,
      handleHostMouseleave: u,
      handlePopoverMouseenter: c,
      handlePopoverMouseleave: d,
      handlePopoverClose: f,
      handleClosed: v,
      resize: k,
      open: g,
      close: m
    };
  }
});
$v.render = fS;
var La = $v;
re(La);
se(La, Ps);
const S5 = La;
var Rt = La;
const wv = Symbol("MENU_SELECT_BIND_MENU_OPTION_KEY");
function pS() {
  const { length: e, childProviders: n, bindChildren: o } = mn(
    wv
  );
  return {
    length: e,
    menuOptions: n,
    bindMenuOptions: o
  };
}
function vS() {
  const { index: e, parentProvider: n, bindParent: o } = vn(
    wv
  );
  return o || Mn("MenuOption", "<var-menu-option/> must in <var-menu-select/>"), {
    index: e,
    menuSelect: n,
    bindMenuSelect: o
  };
}
const Cv = {
  label: {},
  value: {},
  disabled: Boolean
}, { name: mS, n: hS, classes: gS } = ee("menu-option"), bS = ["tabindex"];
function yS(e, n) {
  const o = te("var-checkbox"), t = te("var-hover-overlay"), r = Re("ripple"), a = Re("hover");
  return Me((b(), P("div", {
    ref: "root",
    class: p(
      e.classes(e.n(), e.n("$--box"), e.n(`--${e.size}`), [e.optionSelected, e.n("--selected-color")], [e.disabled, e.n("--disabled")])
    ),
    tabindex: e.disabled ? void 0 : "-1",
    onClick: n[2] || (n[2] = (...i) => e.handleClick && e.handleClick(...i)),
    onFocus: n[3] || (n[3] = (i) => e.isFocusing = !0),
    onBlur: n[4] || (n[4] = (i) => e.isFocusing = !1)
  }, [
    M(
      "div",
      {
        class: p(e.classes(e.n("cover"), [e.optionSelected, e.n("--selected-background")]))
      },
      null,
      2
      /* CLASS */
    ),
    e.multiple ? (b(), Oe(o, {
      key: 0,
      ref: "checkbox",
      modelValue: e.optionSelected,
      "onUpdate:modelValue": n[0] || (n[0] = (i) => e.optionSelected = i),
      disabled: e.disabled,
      onClick: n[1] || (n[1] = In(() => {
      }, ["stop"])),
      onChange: e.handleSelect
    }, null, 8, ["modelValue", "disabled", "onChange"])) : G("v-if", !0),
    V(e.$slots, "default", {}, () => [
      M(
        "div",
        {
          class: p(e.classes(e.n("text"), e.n("$--ellipsis")))
        },
        ae(e.label),
        3
        /* TEXT, CLASS */
      )
    ]),
    X(t, {
      hovering: e.hovering && !e.disabled,
      focusing: e.isFocusing && !e.disabled
    }, null, 8, ["hovering", "focusing"])
  ], 42, bS)), [
    [r, { disabled: e.disabled }],
    [a, e.handleHovering, "desktop"]
  ]);
}
const Sv = _({
  name: mS,
  directives: { Ripple: on, Hover: zn },
  components: {
    VarCheckbox: Dt,
    VarHoverOverlay: Nn
  },
  props: Cv,
  setup(e) {
    const n = $(), o = $(!1), t = $(!1), r = I(() => t.value), a = I(() => e.label), i = I(() => e.value), { menuSelect: l, bindMenuSelect: s } = vS(), { size: u, multiple: c, onSelect: d, computeLabel: f } = l, { hovering: v, handleHovering: g } = Xn(), m = {
      label: a,
      value: i,
      selected: r,
      sync: S
    };
    fe([() => e.label, () => e.value], f), s(m), je(() => window, "keydown", y), je(() => window, "keyup", h);
    function k() {
      e.disabled || C();
    }
    function y(T) {
      o.value && ((T.key === " " || T.key === "Enter") && Ae(T), T.key === "Enter" && n.value.click());
    }
    function h(T) {
      o.value && T.key === " " && (Ae(T), n.value.click());
    }
    function C() {
      c.value && (t.value = !t.value), d(m);
    }
    function S(T) {
      t.value = T;
    }
    return {
      root: n,
      optionSelected: t,
      size: u,
      multiple: c,
      hovering: v,
      isFocusing: o,
      n: hS,
      classes: gS,
      handleHovering: g,
      handleClick: k,
      handleSelect: C
    };
  }
});
Sv.render = yS;
var Ra = Sv;
re(Ra);
se(Ra, Cv);
const P5 = Ra;
var Mr = Ra, kS = Object.defineProperty, Oc = Object.getOwnPropertySymbols, $S = Object.prototype.hasOwnProperty, wS = Object.prototype.propertyIsEnumerable, Tc = (e, n, o) => n in e ? kS(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, CS = (e, n) => {
  for (var o in n || (n = {}))
    $S.call(n, o) && Tc(e, o, n[o]);
  if (Oc)
    for (var o of Oc(n))
      wS.call(n, o) && Tc(e, o, n[o]);
  return e;
};
const Pv = CS({
  modelValue: {
    type: [String, Number, Boolean, Array],
    default: void 0
  },
  size: {
    type: String,
    default: "normal"
  },
  multiple: Boolean,
  scrollable: Boolean,
  closeOnSelect: {
    type: Boolean,
    default: !0
  },
  "onUpdate:modelValue": A()
}, Be(Ps, [
  "show",
  "disabled",
  "trigger",
  "reference",
  "placement",
  "strategy",
  "offsetX",
  "offsetY",
  "teleport",
  "sameWidth",
  "elevation",
  "popoverClass",
  "closeOnClickReference",
  "onOpen",
  "onOpened",
  "onClose",
  "onClosed",
  "onClickOutside",
  "onUpdate:show"
]));
function zv(e) {
  const {
    multiple: n,
    modelValue: o,
    optionProviders: t,
    optionProvidersLength: r
  } = e, a = $(""), i = $([]);
  fe(o, d, { deep: !0 }), fe(r, d);
  function l() {
    const f = n(), v = o();
    f && (i.value = v.map(s)), !f && !Gn(v) && (a.value = s(v)), !f && Gn(v) && (a.value = "");
  }
  function s(f) {
    var v;
    const g = t();
    let m = g.find(({ value: k }) => k.value === f);
    return m || (m = g.find(({ label: k }) => k.value === f)), (v = m == null ? void 0 : m.label.value) != null ? v : "";
  }
  function u({ value: f, label: v }) {
    var g;
    return (g = f.value) != null ? g : v.value;
  }
  function c(f) {
    const v = n(), g = t();
    return v ? g.filter(({ selected: m }) => m.value).map(u) : u(f);
  }
  function d() {
    const f = n(), v = o(), g = t();
    f ? g.forEach((m) => m.sync(v.includes(u(m)))) : g.forEach((m) => m.sync(v === u(m))), l();
  }
  return {
    label: a,
    labels: i,
    computeLabel: l,
    getSelectedValue: c
  };
}
const { name: SS, n: PS, classes: zS } = ee("menu-select");
function OS(e, n) {
  const o = te("var-menu");
  return b(), Oe(o, {
    ref: "menu",
    tabindex: "-1",
    class: p(e.n()),
    disabled: e.disabled,
    trigger: e.trigger,
    reference: e.reference,
    placement: e.placement,
    strategy: e.strategy,
    "offset-x": e.offsetX,
    "offset-y": e.offsetY,
    teleport: e.teleport,
    "same-width": e.sameWidth,
    elevation: e.elevation,
    "default-style": !1,
    "popover-class": e.popoverClass,
    "close-on-click-reference": e.closeOnClickReference,
    "close-on-key-escape": !1,
    show: e.show,
    "onUpdate:show": n[0] || (n[0] = (t) => e.show = t),
    onOpen: e.onOpen,
    onOpened: e.onOpened,
    onClose: e.onClose,
    onClosed: e.onClosed,
    onClickOutside: e.onClickOutside
  }, {
    menu: pe(() => [
      M(
        "div",
        {
          ref: "menuOptionsRef",
          class: p(e.classes(e.n("menu"), e.formatElevation(e.elevation, 3), [e.scrollable, e.n("--scrollable")]))
        },
        [
          V(e.$slots, "options")
        ],
        2
        /* CLASS */
      )
    ]),
    default: pe(() => [
      V(e.$slots, "default")
    ]),
    _: 3
    /* FORWARDED */
  }, 8, ["class", "disabled", "trigger", "reference", "placement", "strategy", "offset-x", "offset-y", "teleport", "same-width", "elevation", "popover-class", "close-on-click-reference", "show", "onOpen", "onOpened", "onClose", "onClosed", "onClickOutside"]);
}
const Ov = _({
  name: SS,
  components: { VarMenu: Rt },
  props: Pv,
  setup(e) {
    const n = $(null), o = $(null), t = qn(e, "show"), { menuOptions: r, length: a, bindMenuOptions: i } = pS(), { computeLabel: l, getSelectedValue: s } = zv({
      modelValue: () => e.modelValue,
      multiple: () => e.multiple,
      optionProviders: () => r,
      optionProvidersLength: () => a.value
    }), u = {
      size: I(() => e.size),
      multiple: I(() => e.multiple),
      computeLabel: l,
      onSelect: c
    };
    i(u), je(() => window, "keydown", d);
    function c(m) {
      const { multiple: k, closeOnSelect: y } = e;
      w(e["onUpdate:modelValue"], s(m)), !k && y && (n.value.$el.focus(), v());
    }
    function d(m) {
      if (e.disabled || !t.value)
        return;
      const { key: k } = m;
      if (["Escape", "ArrowDown", "ArrowUp"].includes(k) && Ae(m), k === "Escape") {
        n.value.$el.focus(), v();
        return;
      }
      (k === "ArrowDown" || k === "ArrowUp") && zd(n.value.$el, o.value, k);
    }
    function f() {
      var m;
      (m = n.value) == null || m.open();
    }
    function v() {
      var m;
      (m = n.value) == null || m.close();
    }
    function g() {
      var m;
      (m = n.value) == null || m.resize();
    }
    return {
      show: t,
      menu: n,
      menuOptionsRef: o,
      n: PS,
      classes: zS,
      formatElevation: yn,
      open: f,
      close: v,
      resize: g
    };
  }
});
Ov.render = OS;
var Fa = Ov;
re(Fa);
se(Fa, Pv);
const z5 = Fa;
var Nr = Fa;
const Tv = Symbol("SELECT_BIND_OPTION_KEY");
function TS() {
  const { length: e, childProviders: n, bindChildren: o } = mn(Tv);
  return {
    length: e,
    options: n,
    bindOptions: o
  };
}
function ES() {
  const { index: e, parentProvider: n, bindParent: o } = vn(Tv);
  return o || Mn("Option", "<var-option/> must in <var-select/>"), {
    index: e,
    select: n,
    bindSelect: o
  };
}
const Ev = {
  label: {},
  value: {},
  disabled: Boolean
}, { name: DS, n: BS, classes: IS } = ee("option"), MS = ["tabindex"];
function NS(e, n) {
  const o = te("var-checkbox"), t = te("var-hover-overlay"), r = Re("ripple"), a = Re("hover");
  return Me((b(), P("div", {
    ref: "root",
    class: p(e.classes(e.n(), e.n("$--box"), [e.optionSelected, e.n("--selected-color")], [e.disabled, e.n("--disabled")])),
    style: K({
      color: e.optionSelected ? e.focusColor : void 0
    }),
    tabindex: e.disabled ? void 0 : "-1",
    onFocus: n[2] || (n[2] = (i) => e.isFocusing = !0),
    onBlur: n[3] || (n[3] = (i) => e.isFocusing = !1),
    onClick: n[4] || (n[4] = (...i) => e.handleClick && e.handleClick(...i))
  }, [
    M(
      "div",
      {
        class: p(e.classes(e.n("cover"), [e.optionSelected, e.n("--selected-background")])),
        style: K({
          background: e.optionSelected ? e.focusColor : void 0
        })
      },
      null,
      6
      /* CLASS, STYLE */
    ),
    e.multiple ? (b(), Oe(o, {
      key: 0,
      ref: "checkbox",
      modelValue: e.optionSelected,
      "onUpdate:modelValue": n[0] || (n[0] = (i) => e.optionSelected = i),
      "checked-color": e.focusColor,
      disabled: e.disabled,
      onClick: n[1] || (n[1] = In(() => {
      }, ["stop"])),
      onChange: e.handleSelect
    }, null, 8, ["modelValue", "checked-color", "disabled", "onChange"])) : G("v-if", !0),
    V(e.$slots, "default", {}, () => [
      M(
        "div",
        {
          class: p(e.classes(e.n("text"), e.n("$--ellipsis")))
        },
        ae(e.label),
        3
        /* TEXT, CLASS */
      )
    ]),
    X(t, {
      hovering: e.hovering && !e.disabled,
      focusing: e.isFocusing && !e.disabled
    }, null, 8, ["hovering", "focusing"])
  ], 46, MS)), [
    [r, { disabled: e.disabled }],
    [a, e.handleHovering, "desktop"]
  ]);
}
const Dv = _({
  name: DS,
  directives: { Ripple: on, Hover: zn },
  components: {
    VarCheckbox: Dt,
    VarHoverOverlay: Nn
  },
  props: Ev,
  setup(e) {
    const n = $(), o = $(!1), t = $(!1), r = I(() => t.value), a = I(() => e.label), i = I(() => e.value), { select: l, bindSelect: s } = ES(), { multiple: u, focusColor: c, onSelect: d, computeLabel: f } = l, { hovering: v, handleHovering: g } = Xn(), m = {
      label: a,
      value: i,
      selected: r,
      sync: S
    };
    fe([() => e.label, () => e.value], f), s(m), je(() => window, "keydown", y), je(() => window, "keyup", h);
    function k() {
      e.disabled || C();
    }
    function y(T) {
      o.value && ((T.key === " " || T.key === "Enter") && Ae(T), T.key === "Enter" && n.value.click());
    }
    function h(T) {
      o.value && T.key === " " && (Ae(T), n.value.click());
    }
    function C() {
      u.value && (t.value = !t.value), d(m);
    }
    function S(T) {
      t.value = T;
    }
    return {
      root: n,
      optionSelected: t,
      multiple: u,
      focusColor: c,
      hovering: v,
      isFocusing: o,
      n: BS,
      classes: IS,
      handleHovering: g,
      handleClick: k,
      handleSelect: C
    };
  }
});
Dv.render = NS;
var Ua = Dv;
re(Ua);
se(Ua, Ev);
const O5 = Ua;
var yl = Ua;
const Bv = {
  show: Boolean,
  lockScroll: {
    type: Boolean,
    default: !0
  },
  teleport: [String, Object, Boolean],
  closeOnKeyEscape: {
    type: Boolean,
    default: !0
  },
  onClick: A(),
  onKeyEscape: A(),
  "onUpdate:show": A()
}, {
  name: AS,
  n: Ec
} = ee("overlay");
var Ha = _({
  name: AS,
  inheritAttrs: !1,
  props: Bv,
  setup(e, {
    slots: n,
    attrs: o
  }) {
    const {
      zIndex: t
    } = qt(() => e.show, 1), {
      onStackTop: r
    } = ns(() => e.show, t), {
      disabled: a
    } = Wo();
    Kt(() => e.show, () => e.lockScroll), je(() => window, "keydown", i);
    function i(c) {
      !r() || c.key !== "Escape" || !e.show || (w(e.onKeyEscape), e.closeOnKeyEscape && (Ae(c), w(e["onUpdate:show"], !1)));
    }
    function l() {
      w(e.onClick), w(e["onUpdate:show"], !1);
    }
    function s() {
      return X("div", Ye({
        class: Ec(),
        style: {
          zIndex: t.value
        }
      }, o, {
        onClick: l
      }), [w(n.default)]);
    }
    function u() {
      return X(Je, {
        name: Ec("--fade")
      }, {
        default: () => [e.show && s()]
      });
    }
    return () => {
      const {
        teleport: c
      } = e;
      return c ? X(xn, {
        to: c,
        disabled: a.value
      }, {
        default: () => [u()]
      }) : u();
    };
  }
});
re(Ha);
se(Ha, Bv);
const T5 = Ha;
var kl = Ha;
const Iv = {
  current: [Number, String],
  size: {
    type: [Number, String],
    default: 10
  },
  total: {
    type: [Number, String],
    default: 0
  },
  elevation: {
    type: [Boolean, Number, String],
    default: !0
  },
  maxPagerCount: {
    type: Number,
    default: 3
  },
  disabled: Boolean,
  simple: {
    type: Boolean,
    default: !0
  },
  showSizeChanger: {
    type: Boolean,
    default: !0
  },
  showQuickJumper: Boolean,
  sizeOption: {
    type: Array,
    default: () => [10, 20, 50, 100]
  },
  showTotal: Function,
  onChange: A(),
  "onUpdate:current": A(),
  "onUpdate:size": A()
}, { name: VS, n: LS, classes: RS } = ee("pagination"), FS = ["item-mode", "onClick"];
function US(e, n) {
  const o = te("var-icon"), t = te("var-input"), r = te("var-menu-option"), a = te("var-menu-select"), i = Re("ripple");
  return b(), P(
    "ul",
    {
      class: p(e.n())
    },
    [
      Me((b(), P(
        "li",
        {
          class: p(
            e.classes(
              e.n("item"),
              e.n("prev"),
              [e.current <= 1 || e.disabled, e.n("item--disabled")],
              [e.simple, e.n("item--simple"), e.formatElevation(e.elevation, 2)]
            )
          ),
          onClick: n[0] || (n[0] = (l) => e.clickItem("prev"))
        },
        [
          V(e.$slots, "prev", {}, () => [
            X(o, { name: "chevron-left" })
          ])
        ],
        2
        /* CLASS */
      )), [
        [i, { disabled: e.current <= 1 || e.disabled }]
      ]),
      e.simple ? (b(), P(
        "li",
        {
          key: 0,
          class: p(e.classes(e.n("simple"), [e.disabled, e.n("item--disabled")]))
        },
        [
          X(t, {
            "var-pagination-cover": "",
            hint: !1,
            disabled: e.disabled,
            modelValue: e.simpleCurrentValue,
            "onUpdate:modelValue": n[1] || (n[1] = (l) => e.simpleCurrentValue = l),
            onBlur: n[2] || (n[2] = (l) => e.setPage("simple", e.simpleCurrentValue, l)),
            onKeydown: n[3] || (n[3] = Es((l) => e.setPage("simple", e.simpleCurrentValue, l), ["enter"]))
          }, null, 8, ["disabled", "modelValue"]),
          M("span", null, [
            De(
              " / " + ae(e.pageCount) + " ",
              1
              /* TEXT */
            ),
            M(
              "div",
              {
                class: p(e.n("simple-line"))
              },
              null,
              2
              /* CLASS */
            )
          ])
        ],
        2
        /* CLASS */
      )) : (b(!0), P(
        Ue,
        { key: 1 },
        nn(e.pageList, (l, s) => Me((b(), P("li", {
          key: s,
          "item-mode": e.getMode(l, s),
          class: p(
            e.classes(
              e.n("item"),
              e.formatElevation(e.elevation, 2),
              [l === e.current && !e.disabled, e.n("item--active")],
              [e.isHideEllipsis(l, s), e.n("item--hide")],
              [e.disabled, e.n("item--disabled")],
              [l === e.current && e.disabled, e.n("item--disabled--active")]
            )
          ),
          onClick: (u) => e.clickItem(l, s)
        }, [
          De(
            ae(l),
            1
            /* TEXT */
          )
        ], 10, FS)), [
          [i, { disabled: e.disabled }]
        ])),
        128
        /* KEYED_FRAGMENT */
      )),
      Me((b(), P(
        "li",
        {
          class: p(
            e.classes(
              e.n("item"),
              e.n("next"),
              [e.current >= e.pageCount || e.disabled, e.n("item--disabled")],
              [e.simple, e.n("item--simple"), e.formatElevation(e.elevation, 2)]
            )
          ),
          onClick: n[4] || (n[4] = (l) => e.clickItem("next"))
        },
        [
          V(e.$slots, "next", {}, () => [
            X(o, { name: "chevron-right" })
          ])
        ],
        2
        /* CLASS */
      )), [
        [i, { disabled: e.current >= e.pageCount || e.disabled }]
      ]),
      e.showSizeChanger ? (b(), P(
        "li",
        {
          key: 2,
          class: p(e.classes(e.n("size"), [e.disabled, e.n("item--disabled")]))
        },
        [
          X(a, {
            placement: "cover-top",
            disabled: e.disabled,
            modelValue: e.size,
            "onUpdate:modelValue": n[5] || (n[5] = (l) => e.size = l)
          }, {
            options: pe(() => [
              (b(!0), P(
                Ue,
                null,
                nn(e.sizeOption, (l, s) => (b(), Oe(r, {
                  key: s,
                  value: l,
                  onClick: e.clickSize
                }, {
                  default: pe(() => [
                    De(
                      ae(l) + ae(e.t("paginationItem")) + " / " + ae(e.t("paginationPage")),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 2
                  /* DYNAMIC */
                }, 1032, ["value", "onClick"]))),
                128
                /* KEYED_FRAGMENT */
              ))
            ]),
            default: pe(() => [
              M(
                "div",
                {
                  class: p(e.classes(e.n("size--open"), [e.current <= 1 || e.disabled, e.n("size--open--disabled")]))
                },
                [
                  M(
                    "span",
                    null,
                    ae(e.size) + ae(e.t("paginationItem")) + " / " + ae(e.t("paginationPage")),
                    1
                    /* TEXT */
                  ),
                  X(o, {
                    class: p(e.n("size--open-icon")),
                    "var-pagination-cover": "",
                    name: "menu-down"
                  }, null, 8, ["class"])
                ],
                2
                /* CLASS */
              )
            ]),
            _: 1
            /* STABLE */
          }, 8, ["disabled", "modelValue"])
        ],
        2
        /* CLASS */
      )) : G("v-if", !0),
      e.showQuickJumper && !e.simple ? (b(), P(
        "li",
        {
          key: 3,
          class: p(e.classes(e.n("quickly"), [e.disabled, e.n("item--disabled")]))
        },
        [
          De(
            ae(e.t("paginationJump")) + " ",
            1
            /* TEXT */
          ),
          X(t, {
            modelValue: e.quickJumperValue,
            "onUpdate:modelValue": n[6] || (n[6] = (l) => e.quickJumperValue = l),
            disabled: e.disabled,
            hint: !1,
            "var-pagination-cover": "",
            onBlur: n[7] || (n[7] = (l) => e.setPage("quick", e.quickJumperValue, l)),
            onKeydown: n[8] || (n[8] = Es((l) => e.setPage("quick", e.quickJumperValue, l), ["enter"]))
          }, null, 8, ["modelValue", "disabled"])
        ],
        2
        /* CLASS */
      )) : G("v-if", !0),
      e.totalText ? (b(), P(
        "li",
        {
          key: 4,
          class: p(e.classes(e.n("total"), [e.disabled, e.n("item--disabled")]))
        },
        ae(e.totalText),
        3
        /* TEXT, CLASS */
      )) : G("v-if", !0)
    ],
    2
    /* CLASS */
  );
}
const Mv = _({
  name: VS,
  components: {
    VarMenuSelect: Nr,
    VarMenuOption: Mr,
    VarIcon: Xe,
    VarInput: Ir
  },
  directives: { Ripple: on },
  props: Iv,
  setup(e) {
    const n = $(""), o = $("1"), t = $(!1), r = $(!1), a = $(F(e.current) || 1), i = $(F(e.size) || 10), l = $([]), s = I(() => Math.ceil(e.maxPagerCount / 2)), u = I(() => Math.ceil(F(e.total) / F(i.value))), c = I(() => {
      const h = i.value * (a.value - 1) + 1, C = Math.min(i.value * a.value, F(e.total));
      return [h, C];
    }), d = I(() => e.showTotal ? e.showTotal(F(e.total), c.value) : "");
    fe([() => e.current, () => e.size], ([h, C]) => {
      a.value = F(h) || 1, i.value = F(C || 10);
    }), fe(
      [a, i, u],
      ([h, C, S], [T, O]) => {
        let z = [];
        const { maxPagerCount: E, total: D, onChange: R } = e, N = Math.ceil(F(D) / F(O)), H = S - (E - s.value) - 1;
        if (o.value = `${h}`, S - 2 > E) {
          if (T === void 0 || S !== N)
            for (let L = 2; L < E + 2; L++)
              z.push(L);
          if (h <= E && h < H) {
            z = [];
            for (let L = 1; L < E + 1; L++)
              z.push(L + 1);
            t.value = !0, r.value = !1;
          }
          if (h > E && h < H) {
            z = [];
            for (let L = 1; L < E + 1; L++)
              z.push(h + L - s.value);
            t.value = h === 2 && E === 1, r.value = !1;
          }
          if (h >= H) {
            z = [];
            for (let L = 1; L < E + 1; L++)
              z.push(S - (E - L) - 1);
            t.value = !1, r.value = !0;
          }
          z = [1, "...", ...z, "...", S];
        } else
          for (let L = 1; L <= S; L++)
            z.push(L);
        l.value = z, T != null && S > 0 && w(R, h, C), w(e["onUpdate:current"], h), w(e["onUpdate:size"], C);
      },
      {
        immediate: !0
      }
    );
    function f(h, C) {
      return Pn(h) ? !1 : C === 1 ? t.value : r.value;
    }
    function v(h, C) {
      return Pn(h) ? "basic" : C === 1 ? "head" : "tail";
    }
    function g(h, C) {
      if (!(h === a.value || e.disabled)) {
        if (h === "...") {
          a.value = C === 1 ? Math.max(a.value - e.maxPagerCount, 1) : Math.min(a.value + e.maxPagerCount, u.value);
          return;
        }
        if (h === "prev") {
          a.value = k(a.value - 1);
          return;
        }
        if (h === "next") {
          a.value = k(a.value + 1);
          return;
        }
        Pn(h) && (a.value = h);
      }
    }
    function m() {
      const h = k(a.value);
      o.value = String(h), a.value = h;
    }
    function k(h) {
      return h > u.value ? u.value : h < 1 ? 1 : h;
    }
    function y(h, C, S) {
      S.target.blur();
      const T = k(F(C));
      o.value = String(T), a.value = T, h === "quick" && (n.value = "");
    }
    return {
      t: an,
      current: a,
      size: i,
      pageCount: u,
      pageList: l,
      quickJumperValue: n,
      simpleCurrentValue: o,
      totalText: d,
      n: LS,
      classes: RS,
      getMode: v,
      isHideEllipsis: f,
      clickItem: g,
      clickSize: m,
      setPage: y,
      toNumber: F,
      formatElevation: yn
    };
  }
});
Mv.render = US;
var Ya = Mv;
re(Ya);
se(Ya, Iv);
const E5 = Ya;
var $l = Ya;
const Nv = {
  elevation: {
    type: [Boolean, Number, String],
    default: !1
  },
  ripple: Boolean,
  radius: [Number, String],
  width: [Number, String],
  height: [Number, String],
  round: Boolean,
  inline: Boolean,
  onClick: A()
}, { name: HS, n: YS, classes: jS } = ee("paper");
function WS(e, n) {
  const o = Re("ripple");
  return Me((b(), P(
    "div",
    {
      class: p(
        e.classes(
          e.n(),
          e.n("$--box"),
          e.formatElevation(e.elevation, 2),
          [e.onClick, e.n("--cursor")],
          [e.round, e.n("--round")],
          [e.inline, e.n("$--inline-flex")]
        )
      ),
      style: K({
        width: e.toSizeUnit(e.width),
        height: e.toSizeUnit(e.height),
        "border-radius": e.toSizeUnit(e.radius)
      }),
      onClick: n[0] || (n[0] = (...t) => e.handleClick && e.handleClick(...t))
    },
    [
      V(e.$slots, "default")
    ],
    6
    /* CLASS, STYLE */
  )), [
    [o, { disabled: !e.ripple }]
  ]);
}
const Av = _({
  name: HS,
  directives: { Ripple: on },
  props: Nv,
  setup(e) {
    function n(o) {
      w(e.onClick, o);
    }
    return {
      n: YS,
      classes: jS,
      formatElevation: yn,
      toSizeUnit: Te,
      handleClick: n
    };
  }
});
Av.render = WS;
var ja = Av;
re(ja);
se(ja, Nv);
const D5 = ja;
var wl = ja, KS = Object.defineProperty, Dc = Object.getOwnPropertySymbols, qS = Object.prototype.hasOwnProperty, XS = Object.prototype.propertyIsEnumerable, Bc = (e, n, o) => n in e ? KS(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, GS = (e, n) => {
  for (var o in n || (n = {}))
    qS.call(n, o) && Bc(e, o, n[o]);
  if (Dc)
    for (var o of Dc(n))
      XS.call(n, o) && Bc(e, o, n[o]);
  return e;
};
const Vv = GS({
  modelValue: {
    type: Array,
    default: () => []
  },
  columns: {
    type: Array,
    default: () => []
  },
  title: String,
  textKey: {
    type: String,
    default: "text"
  },
  valueKey: {
    type: String,
    default: "value"
  },
  childrenKey: {
    type: String,
    default: "children"
  },
  toolbar: {
    type: Boolean,
    default: !0
  },
  cascade: Boolean,
  optionHeight: {
    type: [Number, String],
    default: 44
  },
  optionCount: {
    type: [Number, String],
    default: 6
  },
  confirmButtonText: String,
  cancelButtonText: String,
  confirmButtonTextColor: String,
  cancelButtonTextColor: String,
  // dynamic internal
  dynamic: Boolean,
  onChange: A(),
  onConfirm: A(),
  onCancel: A(),
  "onUpdate:modelValue": A()
}, Be(vt, [
  "show",
  "onUpdate:show",
  "closeOnClickOverlay",
  "closeOnKeyEscape",
  "teleport",
  "safeArea",
  "onOpen",
  "onClose",
  "onOpened",
  "onClosed",
  "onClickOverlay",
  "onRouteChange",
  "onKeyEscape"
])), { name: ZS, n: JS, classes: QS } = ee("picker"), Ic = 300, xS = 15, Mc = 200, _S = 1e3;
let Nc = 0;
const e6 = ["onTouchstartPassive", "onTouchmove", "onTouchend"], n6 = ["onTransitionend"], o6 = ["onClick"];
function t6(e, n) {
  const o = te("var-button");
  return b(), Oe(
    ct(e.dynamic ? e.n("$-popup") : e.Transition),
    Ye(
      e.dynamic ? {
        onOpen: e.onOpen,
        onOpened: e.onOpened,
        onClose: e.onClose,
        onClosed: e.onClosed,
        onClickOverlay: e.onClickOverlay,
        onRouteChange: e.onRouteChange,
        onKeyEscape: e.onKeyEscape,
        closeOnClickOverlay: e.closeOnClickOverlay,
        closeOnKeyEscape: e.closeOnKeyEscape,
        teleport: e.teleport,
        show: e.show,
        safeArea: e.safeArea,
        "onUpdate:show": e.handlePopupUpdateShow,
        position: "bottom",
        class: e.n("popup")
      } : null,
      { "var-picker-cover": "" }
    ),
    {
      default: pe(() => [
        M(
          "div",
          Ye({
            class: e.n()
          }, e.$attrs),
          [
            e.toolbar ? (b(), P(
              "div",
              {
                key: 0,
                class: p(e.n("toolbar"))
              },
              [
                V(e.$slots, "cancel", {}, () => [
                  X(o, {
                    class: p(e.n("cancel-button")),
                    "var-picker-cover": "",
                    text: "",
                    "text-color": e.cancelButtonTextColor,
                    onClick: e.cancel
                  }, {
                    default: pe(() => {
                      var t;
                      return [
                        De(
                          ae((t = e.cancelButtonText) != null ? t : e.t("pickerCancelButtonText")),
                          1
                          /* TEXT */
                        )
                      ];
                    }),
                    _: 1
                    /* STABLE */
                  }, 8, ["class", "text-color", "onClick"])
                ]),
                V(e.$slots, "title", {}, () => {
                  var t;
                  return [
                    M(
                      "div",
                      {
                        class: p(e.n("title"))
                      },
                      ae((t = e.title) != null ? t : e.t("pickerTitle")),
                      3
                      /* TEXT, CLASS */
                    )
                  ];
                }),
                V(e.$slots, "confirm", {}, () => [
                  X(o, {
                    class: p(e.n("confirm-button")),
                    text: "",
                    "var-picker-cover": "",
                    "text-color": e.confirmButtonTextColor,
                    onClick: e.confirm
                  }, {
                    default: pe(() => {
                      var t;
                      return [
                        De(
                          ae((t = e.confirmButtonText) != null ? t : e.t("pickerConfirmButtonText")),
                          1
                          /* TEXT */
                        )
                      ];
                    }),
                    _: 1
                    /* STABLE */
                  }, 8, ["class", "text-color", "onClick"])
                ])
              ],
              2
              /* CLASS */
            )) : G("v-if", !0),
            M(
              "div",
              {
                class: p(e.n("columns")),
                style: K({ height: `${e.columnHeight}px` })
              },
              [
                (b(!0), P(
                  Ue,
                  null,
                  nn(e.scrollColumns, (t) => (b(), P("div", {
                    class: p(e.n("column")),
                    key: t.id,
                    onTouchstartPassive: (r) => e.handleTouchstart(r, t),
                    onTouchmove: In((r) => e.handleTouchmove(r, t), ["prevent"]),
                    onTouchend: (r) => e.handleTouchend(t)
                  }, [
                    M("div", {
                      class: p(e.n("scroller")),
                      ref_for: !0,
                      ref: (r) => e.setScrollEl(r, t),
                      style: K({
                        transform: `translateY(${t.translate}px)`,
                        transitionDuration: `${t.duration}ms`,
                        transitionProperty: t.duration ? "transform" : "none"
                      }),
                      onTransitionend: (r) => e.handleTransitionend(t)
                    }, [
                      (b(!0), P(
                        Ue,
                        null,
                        nn(t.column, (r, a) => (b(), P("div", {
                          key: e.getValue(r),
                          class: p(e.classes(e.n("option"), r.className)),
                          style: K({ height: `${e.optionHeight}px` }),
                          onClick: (i) => e.handleClick(t, a)
                        }, [
                          M(
                            "div",
                            {
                              class: p(e.classes(e.n("text"), r.textClassName))
                            },
                            ae(r[e.getOptionKey("text")]),
                            3
                            /* TEXT, CLASS */
                          )
                        ], 14, o6))),
                        128
                        /* KEYED_FRAGMENT */
                      ))
                    ], 46, n6)
                  ], 42, e6))),
                  128
                  /* KEYED_FRAGMENT */
                )),
                M(
                  "div",
                  {
                    class: p(e.n("picked")),
                    style: K({
                      top: `${e.center}px`,
                      height: `${e.optionHeight}px`
                    })
                  },
                  null,
                  6
                  /* CLASS, STYLE */
                ),
                M(
                  "div",
                  {
                    class: p(e.n("mask")),
                    style: K({ backgroundSize: `100% ${(e.columnHeight - e.optionHeight) / 2}px` })
                  },
                  null,
                  6
                  /* CLASS, STYLE */
                )
              ],
              6
              /* CLASS, STYLE */
            )
          ],
          16
          /* FULL_PROPS */
        )
      ]),
      _: 3
      /* FORWARDED */
    },
    16
    /* FULL_PROPS */
  );
}
const Lv = _({
  name: ZS,
  components: {
    VarButton: Cn,
    VarPopup: Co
  },
  inheritAttrs: !1,
  props: Vv,
  setup(e) {
    const n = qn(e, "modelValue"), o = $([]), t = I(() => xe(e.optionHeight)), r = I(() => xe(e.optionCount)), a = I(() => r.value * t.value / 2 - t.value / 2), i = I(() => r.value * t.value), { prevY: l, moveY: s, dragging: u, startTouch: c, moveTouch: d, endTouch: f } = ft();
    let v = [];
    T(), fe(() => e.columns, T, { deep: !0 }), fe(() => n.value, T);
    function g(B) {
      return {
        text: e.textKey,
        value: e.valueKey,
        children: e.childrenKey
      }[B];
    }
    function m(B) {
      var Y;
      return (Y = B[g("value")]) != null ? Y : B[g("text")];
    }
    function k(B) {
      v = [...B];
    }
    function y(B) {
      return B.map((Y, x) => {
        const ue = {
          id: Nc++,
          prevY: 0,
          momentumPrevY: 0,
          touching: !1,
          translate: a.value,
          index: 0,
          duration: 0,
          momentumTime: 0,
          column: Y,
          scrollEl: null,
          scrolling: !1
        }, $e = n.value[x], ze = ue.column.findIndex((We) => $e === m(We));
        return ue.index = ze === -1 ? 0 : ze, H(ue), ue;
      });
    }
    function h(B) {
      const Y = [];
      return C(Y, B), Y;
    }
    function C(B, Y, x = !0) {
      var ue;
      if (Y.length) {
        const $e = {
          id: Nc++,
          prevY: 0,
          momentumPrevY: 0,
          touching: !1,
          translate: a.value,
          index: 0,
          duration: 0,
          momentumTime: 0,
          column: Y,
          scrollEl: null,
          scrolling: !1
        };
        if (B.push($e), x) {
          const ze = n.value[B.length - 1], We = Y.findIndex((tn) => ze === m(tn));
          $e.index = We === -1 ? 0 : We;
        }
        H($e), C(
          B,
          (ue = $e.column[$e.index][g("children")]) != null ? ue : [],
          x
        );
      }
    }
    function S(B) {
      var Y;
      o.value.splice(o.value.indexOf(B) + 1), C(
        o.value,
        (Y = B.column[B.index][g("children")]) != null ? Y : [],
        !1
      );
    }
    function T() {
      o.value = e.cascade ? h(e.columns) : y(e.columns);
      const { indexes: B } = N();
      k(B);
    }
    function O(B, Y) {
      Y.scrollEl = B;
    }
    function z(B) {
      w(e["onUpdate:show"], B);
    }
    function E(B) {
      const Y = a.value - B.column.length * t.value, x = t.value + a.value;
      B.translate = wo(B.translate, Y, x);
    }
    function D(B, Y) {
      const x = Math.round((a.value - Y) / t.value);
      return $h(x, B.column);
    }
    function R(B) {
      return B.translate = a.value - B.index * t.value, B.translate;
    }
    function N() {
      const B = [], Y = [], x = [];
      return o.value.forEach(({ column: ue, index: $e }) => {
        const ze = ue[$e];
        B.push(m(ze)), Y.push($e), x.push(ze);
      }), {
        values: B,
        indexes: Y,
        options: x
      };
    }
    function H(B, Y = 0) {
      R(B), B.duration = Y;
    }
    function L(B, Y, x) {
      B.translate += Math.abs(Y / x) / 3e-3 * (Y < 0 ? -1 : 1);
    }
    function j(B, Y) {
      u.value || (B.index = Y, H(B, Mc));
    }
    function q(B, Y) {
      Y.touching = !0, Y.translate = hi(Y.scrollEl), c(B);
    }
    function W(B, Y) {
      if (!Y.touching)
        return;
      d(B), Y.scrolling = !1, Y.duration = 0, Y.prevY = l.value, Y.translate += s.value, E(Y);
      const x = performance.now();
      x - Y.momentumTime > Ic && (Y.momentumTime = x, Y.momentumPrevY = Y.translate);
    }
    function ce(B) {
      f(), B.touching = !1, B.prevY = 0;
      const Y = B.translate - B.momentumPrevY, x = performance.now() - B.momentumTime, ue = Math.abs(Y) >= xS && x <= Ic, $e = B.translate;
      ue && L(B, Y, x), B.index = D(B, B.translate), H(B, ue ? _S : Mc), B.scrolling = B.translate !== $e, B.scrolling || Q(B);
    }
    function J(B) {
      B.scrolling = !1, Q(B);
    }
    function ve() {
      const { indexes: B } = N();
      return B.every((Y, x) => Y === v[x]);
    }
    function Q(B) {
      const { onChange: Y, cascade: x } = e;
      if (ve())
        return;
      x && S(B);
      const ue = o.value.some((ge) => ge.scrolling), $e = o.value.some((ge) => ge.touching);
      if (ue || $e)
        return;
      const { values: ze, indexes: We, options: tn } = N();
      k(We), w(Y, ze, We, tn), n.value = ze;
    }
    function de() {
      if (e.cascade) {
        const B = o.value.find((Y) => Y.scrolling);
        B && (B.index = D(B, hi(B.scrollEl)), B.scrolling = !1, H(B), S(B));
      } else
        o.value.forEach((B) => {
          B.index = D(B, hi(B.scrollEl)), H(B);
        });
    }
    function U() {
      de();
      const { values: B, indexes: Y, options: x } = N();
      k(Y), w(e.onConfirm, B, Y, x);
    }
    function oe() {
      de();
      const { values: B, indexes: Y, options: x } = N();
      k(Y), w(e.onCancel, B, Y, x);
    }
    return {
      t: an,
      optionHeight: t,
      optionCount: r,
      scrollColumns: o,
      columnHeight: i,
      center: a,
      Transition: Je,
      n: JS,
      classes: QS,
      setScrollEl: O,
      getOptionKey: g,
      getValue: m,
      handlePopupUpdateShow: z,
      handleTouchstart: q,
      handleTouchmove: W,
      handleTouchend: ce,
      handleTransitionend: J,
      confirm: U,
      cancel: oe,
      handleClick: j
    };
  }
});
Lv.render = t6;
var Qt = Lv;
let xo;
function ht(e) {
  return new Promise((n) => {
    ht.close();
    const o = Ge(e) ? { columns: e } : e, t = Ze(o);
    t.dynamic = !0, t.teleport = "body", xo = t;
    function r() {
      xo === t && (xo = null);
    }
    const { unmountInstance: a } = pt(Qt, t, {
      onConfirm: (i, l, s) => {
        w(t.onConfirm, i, l, s), n({
          state: "confirm",
          values: i,
          indexes: l,
          options: s
        }), t.show = !1, r();
      },
      onCancel: (i, l, s) => {
        w(t.onCancel, i, l, s), n({
          state: "cancel",
          values: i,
          indexes: l,
          options: s
        }), t.show = !1, r();
      },
      onClose: () => {
        w(t.onClose), n({
          state: "close"
        }), r();
      },
      onClosed: () => {
        w(t.onClosed), a(), r();
      },
      onRouteChange: () => {
        a(), r();
      },
      "onUpdate:show": (i) => {
        t.show = i;
      }
    });
    t.show = !0;
  });
}
ht.close = function() {
  if (xo == null)
    return;
  const e = xo;
  xo = null, He().then(() => {
    e.show = !1;
  });
};
ht.Component = Qt;
re(Qt);
re(Qt, ht);
se(ht, Vv);
const B5 = Qt;
var Cl = ht;
const Rv = {
  mode: {
    type: String,
    default: "linear"
  },
  lineWidth: {
    type: [Number, String],
    default: 4
  },
  color: [String, Object],
  trackColor: String,
  value: {
    type: [Number, String],
    default: 0
  },
  label: Boolean,
  labelClass: String,
  size: {
    type: [Number, String],
    default: 40
  },
  rotate: {
    type: Number,
    default: 0
  },
  track: {
    type: Boolean,
    default: !0
  },
  indeterminate: Boolean,
  type: {
    type: String,
    default: "primary"
  }
}, uo = 100, oo = 20, Ac = 2 * Math.PI * oo, { name: r6, n: a6, classes: i6 } = ee("progress"), l6 = ["viewBox"], s6 = { key: 0 }, u6 = ["id"], c6 = ["offset", "stop-color"], d6 = ["d", "stroke-width", "stroke-dasharray"], f6 = ["d", "stroke-width", "stroke-dasharray", "stroke-dashoffset"];
function p6(e, n) {
  return b(), P(
    "div",
    {
      class: p(e.n())
    },
    [
      e.mode === "linear" ? (b(), P(
        "div",
        {
          key: 0,
          class: p(e.n("linear"))
        },
        [
          M(
            "div",
            {
              class: p(e.classes(e.n("linear-block"), [e.track, e.n("linear-background")])),
              style: K({ height: e.toSizeUnit(e.lineWidth), background: e.trackColor })
            },
            [
              e.indeterminate ? (b(), P(
                "div",
                {
                  key: 0,
                  class: p(e.classes([e.indeterminate, e.n("linear-indeterminate")]))
                },
                [
                  M(
                    "div",
                    {
                      class: p(e.classes(e.n(`linear--${e.type}`))),
                      style: K({ background: e.progressColor })
                    },
                    null,
                    6
                    /* CLASS, STYLE */
                  ),
                  M(
                    "div",
                    {
                      class: p(e.classes(e.n(`linear--${e.type}`))),
                      style: K({ background: e.progressColor })
                    },
                    null,
                    6
                    /* CLASS, STYLE */
                  )
                ],
                2
                /* CLASS */
              )) : (b(), P(
                "div",
                {
                  key: 1,
                  class: p(e.classes(e.n("linear-certain"), e.n(`linear--${e.type}`))),
                  style: K({ background: e.progressColor, width: e.linearProps.width })
                },
                null,
                6
                /* CLASS, STYLE */
              ))
            ],
            6
            /* CLASS, STYLE */
          ),
          e.label ? (b(), P(
            "div",
            {
              key: 0,
              class: p(e.classes(e.n("linear-label"), [e.labelClass, e.labelClass]))
            },
            [
              V(e.$slots, "default", {}, () => [
                De(
                  ae(e.linearProps.roundValue),
                  1
                  /* TEXT */
                )
              ])
            ],
            2
            /* CLASS */
          )) : G("v-if", !0)
        ],
        2
        /* CLASS */
      )) : G("v-if", !0),
      e.mode === "circle" ? (b(), P(
        "div",
        {
          key: 1,
          class: p(e.classes(e.n("circle"), [e.indeterminate, e.n("circle-indeterminate")])),
          style: K({ width: e.toSizeUnit(e.size), height: e.toSizeUnit(e.size) })
        },
        [
          (b(), P("svg", {
            class: p(e.n("circle-svg")),
            viewBox: e.circleProps.viewBox
          }, [
            e.isPlainObject(e.color) ? (b(), P("defs", s6, [
              M("linearGradient", {
                id: e.id,
                x1: "100%",
                y1: "0%",
                x2: "0%",
                y2: "0%"
              }, [
                (b(!0), P(
                  Ue,
                  null,
                  nn(e.linearGradientProgress, (o, t) => (b(), P("stop", {
                    key: t,
                    offset: o,
                    "stop-color": e.color[o]
                  }, null, 8, c6))),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ], 8, u6)
            ])) : G("v-if", !0),
            e.track ? (b(), P("path", {
              key: 1,
              class: p(e.n("circle-background")),
              d: e.circleProps.path,
              fill: "transparent",
              "stroke-width": e.circleProps.strokeWidth,
              "stroke-dasharray": e.CIRCUMFERENCE,
              style: K({
                stroke: e.trackColor
              })
            }, null, 14, d6)) : G("v-if", !0),
            M("path", {
              class: p(e.classes(e.n("circle-certain"), e.n(`circle--${e.type}`), [e.indeterminate, e.n("circle-overlay")])),
              d: e.circleProps.path,
              fill: "transparent",
              "stroke-width": e.circleProps.strokeWidth,
              "stroke-dasharray": e.CIRCUMFERENCE,
              "stroke-dashoffset": e.circleProps.strokeOffset,
              style: K({
                stroke: e.progressColor,
                transform: `rotateZ(${e.rotate}deg)`,
                transformOrigin: "50% 50%"
              })
            }, null, 14, f6)
          ], 10, l6)),
          e.label ? (b(), P(
            "div",
            {
              key: 0,
              class: p(e.classes(e.n("circle-label"), [e.labelClass, e.labelClass]))
            },
            [
              V(e.$slots, "default", {}, () => [
                De(
                  ae(e.circleProps.roundValue),
                  1
                  /* TEXT */
                )
              ])
            ],
            2
            /* CLASS */
          )) : G("v-if", !0)
        ],
        6
        /* CLASS, STYLE */
      )) : G("v-if", !0)
    ],
    2
    /* CLASS */
  );
}
const Fv = _({
  name: r6,
  props: Rv,
  setup(e) {
    const n = hd(), o = I(() => {
      const i = F(e.value), l = i > uo ? uo : i, s = i > uo ? uo : Math.round(i);
      return {
        width: `${l}%`,
        roundValue: `${s}%`
      };
    }), t = I(() => {
      const { size: i, lineWidth: l, value: s } = e, u = oo / (1 - xe(l) / xe(i)) * 2, c = `0 0 ${u} ${u}`, d = F(s) > uo ? uo : Math.round(F(s)), f = `${(uo - d) / uo * Ac}`, v = xe(l) / xe(i) * u, g = 0, m = -oo, k = 0, y = -2 * oo, h = `M ${u / 2} ${u / 2} m ${g} ${m} a ${oo} ${oo} 
        0 1 1 ${k} ${-y} a ${oo} ${oo} 0 1 1 ${-k} ${y}`;
      return {
        strokeWidth: v,
        viewBox: c,
        strokeOffset: f,
        roundValue: `${d}%`,
        path: h
      };
    }), r = I(() => _o(e.color) ? `url(#${n.value})` : e.color), a = I(
      () => Object.keys(e.color).sort((i, l) => parseFloat(i) - parseFloat(l))
    );
    return {
      id: n,
      linearProps: o,
      CIRCUMFERENCE: Ac,
      RADIUS: oo,
      circleProps: t,
      progressColor: r,
      linearGradientProgress: a,
      n: a6,
      classes: i6,
      toSizeUnit: Te,
      isPlainObject: _o
    };
  }
});
Fv.render = p6;
var Wa = Fv;
re(Wa);
se(Wa, Rv);
const I5 = Wa;
var Sl = Wa;
const Uv = {
  modelValue: Boolean,
  disabled: Boolean,
  animationDuration: {
    type: [Number, String],
    default: 300
  },
  successDuration: {
    type: [Number, String],
    default: 2e3
  },
  bgColor: String,
  successBgColor: String,
  color: String,
  successColor: String,
  target: [String, Object],
  onRefresh: A(),
  "onUpdate:modelValue": A()
};
var Vc = (e, n, o) => new Promise((t, r) => {
  var a = (s) => {
    try {
      l(o.next(s));
    } catch (u) {
      r(u);
    }
  }, i = (s) => {
    try {
      l(o.throw(s));
    } catch (u) {
      r(u);
    }
  }, l = (s) => s.done ? t(s.value) : Promise.resolve(s.value).then(a, i);
  l((o = o.apply(e, n)).next());
});
const { name: v6, n: Lc, classes: m6 } = ee("pull-refresh"), Rc = 150;
function h6(e, n) {
  const o = te("var-icon");
  return b(), P(
    "div",
    {
      ref: "freshNode",
      class: p(e.n()),
      onTouchstart: n[0] || (n[0] = (...t) => e.handleTouchstart && e.handleTouchstart(...t)),
      onTouchend: n[1] || (n[1] = (...t) => e.handleTouchend && e.handleTouchend(...t)),
      onTouchcancel: n[2] || (n[2] = (...t) => e.handleTouchend && e.handleTouchend(...t))
    },
    [
      M(
        "div",
        {
          ref: "controlNode",
          class: p(e.classes(e.n("control"), e.n("$-elevation--2"), [e.isSuccess, e.n("control-success")])),
          style: K(e.controlStyle)
        },
        [
          X(o, {
            name: e.iconName,
            transition: e.ICON_TRANSITION,
            class: p(e.classes(e.n("icon"), [e.refreshStatus === "loading", e.n("animation")])),
            "var-pull-refresh-cover": ""
          }, null, 8, ["name", "transition", "class"])
        ],
        6
        /* CLASS, STYLE */
      ),
      V(e.$slots, "default")
    ],
    34
    /* CLASS, NEED_HYDRATION */
  );
}
const Hv = _({
  name: v6,
  components: { VarIcon: Xe },
  props: Uv,
  setup(e) {
    const n = $(0), o = $(null), t = $(null), r = $(0), a = $("-125%"), i = $("arrow-down"), l = $("default"), s = $(!1), u = I(() => Math.abs(2 * n.value)), c = I(() => l.value === "success"), d = I(
      () => l.value !== "loading" && l.value !== "success" && !e.disabled
    ), f = I(() => ({
      transform: `translate3d(0px, ${bn(a.value) ? a.value : `${a.value}px`}, 0px) translate(-50%, 0)`,
      transition: s.value ? `transform ${e.animationDuration}ms` : void 0,
      background: c.value ? e.successBgColor : e.bgColor,
      color: c.value ? e.successColor : e.color
    })), { startTouch: v, moveTouch: g, endTouch: m, isReachTop: k } = ft();
    let y, h;
    fe(
      () => e.modelValue,
      (R) => {
        R === !1 && (s.value = !0, l.value = "success", i.value = "checkbox-marked-circle", setTimeout(() => {
          a.value = n.value, D();
        }, F(e.successDuration)));
      }
    ), cn(E), je(o, "touchmove", O);
    function C(R) {
      return Vc(this, null, function* () {
        if (i.value !== R)
          return i.value = R, new Promise((N) => {
            window.setTimeout(N, Rc);
          });
      });
    }
    function S(R) {
      ("classList" in y ? y : document.body).classList[R](`${Lc()}--lock`);
    }
    function T(R) {
      if (v(R), n.value === 0) {
        const { width: N } = un(t.value);
        n.value = -(N + N * 0.25);
      }
      h = So(R.target);
    }
    function O(R) {
      if (g(R), !d.value || !h || h !== y && Vo(h) > 0 || Vo(y) > 0)
        return;
      k(y) && Ae(R), l.value !== "pulling" && (l.value = "pulling", r.value = R.touches[0].clientY), k(y) && Pn(a.value) && a.value > n.value && S("add");
      const H = (R.touches[0].clientY - r.value) / 2 + n.value;
      a.value = H >= u.value ? u.value : H, C(a.value >= u.value * 0.2 ? "refresh" : "arrow-down");
    }
    function z() {
      return Vc(this, null, function* () {
        m(), d.value && (s.value = !0, F(a.value) >= u.value * 0.2 ? (yield C("refresh"), l.value = "loading", a.value = u.value * 0.3, w(e["onUpdate:modelValue"], !0), He(() => {
          w(e.onRefresh);
        }), S("remove")) : (l.value = "loosing", i.value = "arrow-down", a.value = n.value, setTimeout(() => {
          s.value = !1, S("remove");
        }, F(e.animationDuration))), h = null);
      });
    }
    function E() {
      y = e.target ? Sd(e.target, "PullRefresh") : So(o.value);
    }
    function D() {
      setTimeout(() => {
        l.value = "default", i.value = "arrow-down", s.value = !1;
      }, F(e.animationDuration));
    }
    return {
      ICON_TRANSITION: Rc,
      refreshStatus: l,
      freshNode: o,
      controlNode: t,
      iconName: i,
      controlStyle: f,
      isSuccess: c,
      n: Lc,
      classes: m6,
      handleTouchstart: T,
      handleTouchmove: O,
      handleTouchend: z
    };
  }
});
Hv.render = h6;
var Ka = Hv;
re(Ka);
se(Ka, Uv);
const M5 = Ka;
var Pl = Ka;
const Yv = {
  modelValue: {
    type: [String, Number, Boolean, Object, Array],
    default: !1
  },
  checkedValue: {
    type: [String, Number, Boolean, Object, Array],
    default: !0
  },
  uncheckedValue: {
    type: [String, Number, Boolean, Object, Array],
    default: !1
  },
  disabled: Boolean,
  readonly: Boolean,
  checkedColor: String,
  uncheckedColor: String,
  iconSize: [String, Number],
  ripple: {
    type: Boolean,
    default: !0
  },
  validateTrigger: {
    type: Array,
    default: () => ["onChange"]
  },
  rules: Array,
  onClick: A(),
  onChange: A(),
  "onUpdate:modelValue": A()
}, jv = Symbol("RADIO_GROUP_BIND_RADIO_KEY");
function g6() {
  const { bindChildren: e, childProviders: n, length: o } = mn(
    jv
  );
  return {
    length: o,
    radios: n,
    bindRadios: e
  };
}
function b6() {
  const { bindParent: e, parentProvider: n, index: o } = vn(jv);
  return {
    index: o,
    radioGroup: n,
    bindRadioGroup: e
  };
}
const { name: y6, n: k6, classes: $6 } = ee("radio"), w6 = ["tabindex"];
function C6(e, n) {
  const o = te("var-icon"), t = te("var-hover-overlay"), r = te("var-form-details"), a = Re("ripple"), i = Re("hover");
  return b(), P(
    "div",
    {
      class: p(e.n("wrap"))
    },
    [
      M(
        "div",
        Ye({
          class: e.n(),
          onClick: n[3] || (n[3] = (...l) => e.handleClick && e.handleClick(...l))
        }, e.$attrs),
        [
          Me((b(), P("div", {
            ref: "action",
            class: p(
              e.classes(
                e.n("action"),
                [e.checked, e.n("--checked"), e.n("--unchecked")],
                [e.errorMessage || e.radioGroupErrorMessage, e.n("--error")],
                [e.formDisabled || e.disabled, e.n("--disabled")]
              )
            ),
            tabindex: e.formDisabled || e.disabled ? void 0 : "0",
            style: K({ color: e.checked ? e.checkedColor : e.uncheckedColor }),
            onFocus: n[0] || (n[0] = (l) => e.isFocusing = !0),
            onBlur: n[1] || (n[1] = (l) => e.isFocusing = !1)
          }, [
            e.checked ? V(e.$slots, "checked-icon", { key: 0 }, () => [
              X(o, {
                class: p(e.classes(e.n("icon"), [e.withAnimation, e.n("--with-animation")])),
                "var-radio-cover": "",
                name: "radio-marked",
                size: e.iconSize
              }, null, 8, ["class", "size"])
            ]) : V(e.$slots, "unchecked-icon", { key: 1 }, () => [
              X(o, {
                class: p(e.classes(e.n("icon"), [e.withAnimation, e.n("--with-animation")])),
                "var-radio-cover": "",
                name: "radio-blank",
                size: e.iconSize
              }, null, 8, ["class", "size"])
            ]),
            X(t, {
              hovering: !e.disabled && !e.formDisabled && e.hovering,
              focusing: !e.disabled && !e.formDisabled && e.isFocusing
            }, null, 8, ["hovering", "focusing"])
          ], 46, w6)), [
            [a, { disabled: e.formReadonly || e.readonly || e.formDisabled || e.disabled || !e.ripple }],
            [i, e.handleHovering, "desktop"]
          ]),
          e.$slots.default ? (b(), P(
            "div",
            {
              key: 0,
              class: p(
                e.classes(
                  e.n("text"),
                  [e.errorMessage || e.radioGroupErrorMessage, e.n("--error")],
                  [e.formDisabled || e.disabled, e.n("--disabled")]
                )
              ),
              onClick: n[2] || (n[2] = (...l) => e.handleTextClick && e.handleTextClick(...l))
            },
            [
              V(e.$slots, "default")
            ],
            2
            /* CLASS */
          )) : G("v-if", !0)
        ],
        16
        /* FULL_PROPS */
      ),
      X(r, { "error-message": e.errorMessage }, null, 8, ["error-message"])
    ],
    2
    /* CLASS */
  );
}
const Wv = _({
  name: y6,
  directives: { Ripple: on, Hover: zn },
  components: {
    VarIcon: Xe,
    VarFormDetails: On,
    VarHoverOverlay: Nn
  },
  inheritAttrs: !1,
  props: Yv,
  setup(e) {
    const n = $(), o = $(!1), t = qn(e, "modelValue"), r = I(() => t.value === e.checkedValue), a = $(!1), { radioGroup: i, bindRadioGroup: l } = b6(), { hovering: s, handleHovering: u } = Xn(), { form: c, bindForm: d } = Un(), {
      errorMessage: f,
      validateWithTrigger: v,
      validate: g,
      // expose
      resetValidation: m
    } = Fn(), k = {
      sync: z,
      validate: D,
      resetValidation: m,
      reset: E,
      isFocusing: I(() => o.value),
      // keyboard arrow move
      move() {
        n.value.focus(), n.value.click();
      },
      moveable() {
        return !(c != null && c.disabled.value) && !e.disabled && !(c != null && c.readonly.value) && !e.readonly;
      }
    };
    w(l, k), w(d, k), je(() => window, "keydown", y), je(() => window, "keyup", h);
    function y(N) {
      if (!o.value)
        return;
      const { key: H } = N;
      (H === "Enter" || H === " ") && Ae(N), H === "Enter" && n.value.click();
    }
    function h(N) {
      o.value && N.key === " " && (Ae(N), n.value.click());
    }
    function C(N) {
      He(() => {
        const { validateTrigger: H, rules: L, modelValue: j } = e;
        v(H, N, L, j);
      });
    }
    function S(N) {
      const { checkedValue: H, onChange: L } = e;
      i && t.value === H || (t.value = N, w(L, t.value), i == null || i.onToggle(H), C("onChange"));
    }
    function T(N) {
      const { disabled: H, readonly: L, uncheckedValue: j, checkedValue: q, onClick: W } = e;
      c != null && c.disabled.value || H || (w(W, N), !(c != null && c.readonly.value || L) && (a.value = !0, S(r.value ? j : q)));
    }
    function O() {
      n.value.focus();
    }
    function z(N) {
      const { checkedValue: H, uncheckedValue: L } = e;
      t.value = N === H ? H : L;
    }
    function E() {
      t.value = e.uncheckedValue, m();
    }
    function D() {
      return g(e.rules, e.modelValue);
    }
    function R(N) {
      const { uncheckedValue: H, checkedValue: L } = e;
      ![H, L].includes(N) && (N = r.value ? H : L), S(N);
    }
    return {
      action: n,
      isFocusing: o,
      withAnimation: a,
      checked: r,
      errorMessage: f,
      radioGroupErrorMessage: i == null ? void 0 : i.errorMessage,
      formDisabled: c == null ? void 0 : c.disabled,
      formReadonly: c == null ? void 0 : c.readonly,
      hovering: s,
      handleHovering: u,
      n: k6,
      classes: $6,
      handleClick: T,
      handleTextClick: O,
      toggle: R,
      reset: E,
      validate: D,
      resetValidation: m
    };
  }
});
Wv.render = C6;
var qa = Wv;
re(qa);
se(qa, Yv);
const N5 = qa;
var zl = qa;
const Kv = {
  modelValue: {
    type: [String, Number, Boolean, Object, Array],
    default: void 0
  },
  direction: {
    type: String,
    default: "horizontal"
  },
  validateTrigger: {
    type: Array,
    default: () => ["onChange"]
  },
  rules: Array,
  onChange: A(),
  "onUpdate:modelValue": A()
}, { name: S6, n: P6, classes: z6 } = ee("radio-group");
function O6(e, n) {
  const o = te("var-form-details");
  return b(), P(
    "div",
    {
      class: p(e.n("wrap"))
    },
    [
      M(
        "div",
        {
          class: p(e.classes(e.n(), e.n(`--${e.direction}`)))
        },
        [
          V(e.$slots, "default")
        ],
        2
        /* CLASS */
      ),
      X(o, { "error-message": e.errorMessage }, null, 8, ["error-message"])
    ],
    2
    /* CLASS */
  );
}
const qv = _({
  name: S6,
  components: { VarFormDetails: On },
  props: Kv,
  setup(e) {
    const { length: n, radios: o, bindRadios: t } = g6(), { bindForm: r } = Un(), {
      errorMessage: a,
      validateWithTrigger: i,
      validate: l,
      // expose
      resetValidation: s
    } = Fn(), u = I(() => a.value), c = {
      onToggle: m,
      validate: k,
      reset: y,
      resetValidation: s,
      errorMessage: u
    };
    fe(() => e.modelValue, g), fe(() => n.value, g), w(r, c), t(c), je(() => window, "keydown", d);
    function d(h) {
      const C = o.findIndex(({ isFocusing: T }) => T.value);
      if (!(C === -1 || !o.some(({ moveable: T }, O) => O === C ? !1 : T()))) {
        if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(h.key) && Ae(h), h.key === "ArrowUp" || h.key === "ArrowLeft") {
          f(C, "prev");
          return;
        }
        (h.key === "ArrowDown" || h.key === "ArrowRight") && f(C, "next");
      }
    }
    function f(h, C) {
      for (; ; ) {
        C === "prev" ? h-- : h++, h < 0 && (h = o.length - 1), h > o.length - 1 && (h = 0);
        const S = o[h];
        if (S.moveable()) {
          S.move();
          break;
        }
      }
    }
    function v(h) {
      He(() => {
        const { validateTrigger: C, rules: S, modelValue: T } = e;
        i(C, h, S, T);
      });
    }
    function g() {
      return o.forEach(({ sync: h }) => h(e.modelValue));
    }
    function m(h) {
      w(e["onUpdate:modelValue"], h), w(e.onChange, h), v("onChange");
    }
    function k() {
      return l(e.rules, e.modelValue);
    }
    function y() {
      w(e["onUpdate:modelValue"], void 0), s();
    }
    return {
      errorMessage: a,
      n: P6,
      classes: z6,
      reset: y,
      validate: k,
      resetValidation: s
    };
  }
});
qv.render = O6;
var Xa = qv;
re(Xa);
se(Xa, Kv);
const A5 = Xa;
var Ol = Xa;
const Xv = {
  modelValue: {
    type: Number,
    default: 0
  },
  count: {
    type: [String, Number],
    default: 5
  },
  color: String,
  icon: {
    type: String,
    default: "star"
  },
  emptyIcon: {
    type: String,
    default: "star-outline"
  },
  halfIcon: {
    type: String,
    default: "star-half-full"
  },
  namespace: Be(en, "namespace"),
  emptyIconNamespace: Be(en, "namespace"),
  halfIconNamespace: Be(en, "namespace"),
  emptyColor: String,
  size: [String, Number],
  gap: [String, Number],
  half: Boolean,
  disabled: Boolean,
  disabledColor: String,
  readonly: Boolean,
  ripple: {
    type: Boolean,
    default: !0
  },
  clearable: Boolean,
  rules: Array,
  onChange: A(),
  "onUpdate:modelValue": A()
}, { name: T6, n: yt } = ee("rate"), E6 = ["onClick"];
function D6(e, n) {
  const o = te("var-icon"), t = te("var-hover-overlay"), r = te("var-form-details"), a = Re("ripple"), i = Re("hover");
  return b(), P(
    "div",
    {
      class: p(e.n("wrap"))
    },
    [
      M(
        "div",
        {
          class: p(e.n())
        },
        [
          (b(!0), P(
            Ue,
            null,
            nn(e.toNumber(e.count), (l) => Me((b(), P("div", {
              key: l,
              style: K(e.getStyle(l)),
              class: p(e.getClass(l)),
              onClick: (s) => e.handleClick(l, s)
            }, [
              X(o, {
                class: p(e.n("content-icon")),
                "var-rate-cover": "",
                transition: 0,
                namespace: e.getCurrentState(l).namespace,
                name: e.getCurrentState(l).name,
                style: K({ fontSize: e.toSizeUnit(e.size) })
              }, null, 8, ["class", "namespace", "name", "style"]),
              X(t, {
                hovering: e.hovering && l === e.currentHoveringValue && !e.disabled && !e.formDisabled
              }, null, 8, ["hovering"])
            ], 14, E6)), [
              [a, { disabled: e.formReadonly || e.readonly || e.formDisabled || e.disabled || !e.ripple }],
              [i, e.createHoverHandler(l), "desktop"]
            ])),
            128
            /* KEYED_FRAGMENT */
          ))
        ],
        2
        /* CLASS */
      ),
      X(r, { "error-message": e.errorMessage }, null, 8, ["error-message"])
    ],
    2
    /* CLASS */
  );
}
const Gv = _({
  name: T6,
  components: {
    VarIcon: Xe,
    VarFormDetails: On,
    VarHoverOverlay: Nn
  },
  directives: { Ripple: on, Hover: zn },
  props: Xv,
  setup(e) {
    const n = $(-1), { form: o, bindForm: t } = Un(), { errorMessage: r, validateWithTrigger: a, validate: i, resetValidation: l } = Fn(), { hovering: s } = Xn();
    let u = F(e.modelValue);
    w(t, {
      reset: C,
      validate: m,
      resetValidation: l
    });
    function d(S) {
      const { count: T, gap: O } = e;
      return {
        color: v(S).color,
        marginRight: S !== F(T) ? Te(O) : 0
      };
    }
    function f(S) {
      const { name: T, color: O } = v(S);
      return {
        [yt("content")]: !0,
        [yt("--disabled")]: (o == null ? void 0 : o.disabled.value) || e.disabled,
        [yt("--error")]: r.value,
        [yt("--primary")]: T !== e.emptyIcon && !O
      };
    }
    function v(S) {
      const {
        modelValue: T,
        disabled: O,
        disabledColor: z,
        color: E,
        half: D,
        emptyColor: R,
        icon: N,
        halfIcon: H,
        emptyIcon: L,
        namespace: j,
        halfIconNamespace: q,
        emptyIconNamespace: W
      } = e;
      let ce = E;
      return (O || o != null && o.disabled.value) && (ce = z), S <= T ? { color: ce, name: N, namespace: j } : D && S <= T + 0.5 ? { color: ce, name: H, namespace: q } : {
        color: O || o != null && o.disabled.value ? z : R,
        name: L,
        namespace: W
      };
    }
    function g(S, T) {
      const { half: O, clearable: z } = e, { offsetWidth: E } = T.target;
      O && T.offsetX <= Math.floor(E / 2) && (S -= 0.5), u === S && z && (S = 0), u !== S && (w(e["onUpdate:modelValue"], S), w(e.onChange, S)), u = S;
    }
    function m() {
      return i(e.rules, e.modelValue);
    }
    function k() {
      return He(() => a(["onChange"], "onChange", e.rules, e.modelValue));
    }
    function y(S, T) {
      const { readonly: O, disabled: z } = e;
      O || z || o != null && o.disabled.value || o != null && o.readonly.value || (g(S, T), k());
    }
    function h(S) {
      return (T) => {
        n.value = S, s.value = T;
      };
    }
    function C() {
      w(e["onUpdate:modelValue"], 0), l();
    }
    return {
      errorMessage: r,
      formDisabled: o == null ? void 0 : o.disabled,
      formReadonly: o == null ? void 0 : o.readonly,
      hovering: s,
      currentHoveringValue: n,
      getStyle: d,
      getClass: f,
      getCurrentState: v,
      handleClick: y,
      createHoverHandler: h,
      reset: C,
      validate: m,
      resetValidation: l,
      toSizeUnit: Te,
      toNumber: F,
      n: yt
    };
  }
});
Gv.render = D6;
var Ga = Gv;
re(Ga);
se(Ga, Xv);
const V5 = Ga;
var Tl = Ga;
const B6 = (e) => (Ho(""), e = e(), Yo(), e), I6 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "2 3.6 20 20"
}, M6 = /* @__PURE__ */ B6(() => /* @__PURE__ */ M(
  "path",
  { d: "M11,9H13V7H11M11,20H13V11H11V20Z" },
  null,
  -1
  /* HOISTED */
)), N6 = [
  M6
];
function A6(e, n) {
  return b(), P("svg", I6, [...N6]);
}
const Zv = _({});
Zv.render = A6;
var V6 = Zv;
const L6 = (e) => (Ho(""), e = e(), Yo(), e), R6 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "2 2 20 20"
}, F6 = /* @__PURE__ */ L6(() => /* @__PURE__ */ M(
  "path",
  { d: "M19,3V5H19V19M17,8.4L13.4,12L17,15.6L15.6,17L12,13.4L8.4,17L7,15.6L10.6,12L7,8.4L8.4,7L12,10.6L15.6,7L17,8.4Z" },
  null,
  -1
  /* HOISTED */
)), U6 = [
  F6
];
function H6(e, n) {
  return b(), P("svg", R6, [...U6]);
}
const Jv = _({});
Jv.render = H6;
var Y6 = Jv;
const j6 = (e) => (Ho(""), e = e(), Yo(), e), W6 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-6 -4 35 35"
}, K6 = /* @__PURE__ */ j6(() => /* @__PURE__ */ M(
  "path",
  { d: "M10,21H14A2,2 0 0,1 12,23A2,2 0 0,1 10,21M21,19V20H3V19L5,17V11C5,7.9 7.03,5.17 10,4.29C10,4.19 10,4.1 10,4A2,2 0 0,1 12,2A2,2 0 0,1 14,4C14,4.1 14,4.19 14,4.29C16.97,5.17 19,7.9 19,11V17L21,19M17,11A5,5 0 0,0 12,6A5,5 0 0,0 7,11V18H17V11M19.75,3.19L18.33,4.61M1,11" },
  null,
  -1
  /* HOISTED */
)), q6 = [
  K6
];
function X6(e, n) {
  return b(), P("svg", W6, [...q6]);
}
const Qv = _({});
Qv.render = X6;
var G6 = Qv;
const { n: Z6, classes: J6 } = ee("result");
function Q6(e, n) {
  return b(), P(
    Ue,
    null,
    [
      M(
        "span",
        {
          class: p(e.n("success-cover-left"))
        },
        null,
        2
        /* CLASS */
      ),
      M(
        "span",
        {
          class: p(e.classes(e.n("success-line"), e.n("success-line-tip"))),
          style: K({
            animationDuration: e.animation ? "760ms" : "0ms",
            borderRadius: `calc(${e.borderSize} * 0.625)`
          })
        },
        null,
        6
        /* CLASS, STYLE */
      ),
      M(
        "span",
        {
          class: p(e.classes(e.n("success-line"), e.n("success-line-long"))),
          style: K({
            animationDuration: e.animation ? "770ms" : "0ms",
            borderRadius: `calc(${e.borderSize} * 0.625)`
          })
        },
        null,
        6
        /* CLASS, STYLE */
      ),
      M(
        "span",
        {
          ref: "circle",
          class: p(e.n("success-circle")),
          style: K({ left: `-${e.borderSize}`, top: `-${e.borderSize}`, borderWidth: e.borderSize })
        },
        null,
        6
        /* CLASS, STYLE */
      ),
      M(
        "span",
        {
          class: p(e.n("success-line-fix"))
        },
        null,
        2
        /* CLASS */
      ),
      M(
        "span",
        {
          class: p(e.n("success-cover-right")),
          style: K({
            animationDuration: e.animation ? "4250ms" : "0ms"
          })
        },
        null,
        6
        /* CLASS, STYLE */
      )
    ],
    64
    /* STABLE_FRAGMENT */
  );
}
const xv = _({
  props: {
    animation: {
      type: Boolean
    },
    borderSize: {
      type: String
    }
  },
  setup() {
    return {
      n: Z6,
      classes: J6
    };
  }
});
xv.render = Q6;
var x6 = xv;
const _6 = (e) => (Ho(""), e = e(), Yo(), e), e2 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-3 -3 30 30"
}, n2 = /* @__PURE__ */ _6(() => /* @__PURE__ */ M(
  "path",
  { d: "M10,19H13V22H10V19M12,2C17.35,2.22 19.68,7.62 16.5,11.67C15.67,12.67 14.33,13.33 13.67,14.17C13,15 13,16 13,17H10C10,15.33 10,13.92 10.67,12.92C11.33,11.92 12.67,11.33 13.5,10.67C15.92,8.43 15.32,5.26 12,5A3,3 0 0,0 9,8H6A6,6 0 0,1 12,2Z" },
  null,
  -1
  /* HOISTED */
)), o2 = [
  n2
];
function t2(e, n) {
  return b(), P("svg", e2, [...o2]);
}
const _v = _({});
_v.render = t2;
var r2 = _v;
const a2 = (e) => (Ho(""), e = e(), Yo(), e), i2 = { viewBox: "-4 -4 32 32" }, l2 = /* @__PURE__ */ a2(() => /* @__PURE__ */ M(
  "path",
  {
    fill: "currentColor",
    d: "M2,10.96C1.5,10.68 1.35,10.07 1.63,9.59L3.13,7C3.24,6.8 3.41,6.66 3.6,6.58L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.66,6.72 20.82,6.88 20.91,7.08L22.36,9.6C22.64,10.08 22.47,10.69 22,10.96L21,11.54V16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V10.96C2.7,11.13 2.32,11.14 2,10.96M12,4.15V4.15L12,10.85V10.85L17.96,7.5L12,4.15M5,15.91L11,19.29V12.58L5,9.21V15.91M19,15.91V12.69L14,15.59C13.67,15.77 13.3,15.76 13,15.6V19.29L19,15.91M13.85,13.36L20.13,9.73L19.55,8.72L13.27,12.35L13.85,13.36Z"
  },
  null,
  -1
  /* HOISTED */
)), s2 = [
  l2
];
function u2(e, n) {
  return b(), P("svg", i2, [...s2]);
}
const em = _({});
em.render = u2;
var c2 = em;
const nm = {
  imageSize: [String, Number],
  type: {
    type: String,
    default: "success"
  },
  title: String,
  description: String,
  animation: {
    type: Boolean,
    default: !0
  }
}, { name: d2, n: f2, classes: p2 } = ee("result");
function v2(e, n) {
  return b(), P(
    "div",
    {
      class: p(e.classes(e.n(), e.n("$--box")))
    },
    [
      V(e.$slots, "image", {}, () => [
        e.type ? (b(), P(
          "div",
          {
            key: 0,
            class: p(e.n("image-container"))
          },
          [
            M(
              "div",
              {
                class: p(e.classes(e.n("image"), e.n(e.type))),
                style: K({
                  width: e.circleSize,
                  height: e.circleSize,
                  borderWidth: e.borderSize
                })
              },
              [
                (b(), Oe(ct(e.type), {
                  "border-size": e.borderSize,
                  animation: e.animation
                }, null, 8, ["border-size", "animation"]))
              ],
              6
              /* CLASS, STYLE */
            )
          ],
          2
          /* CLASS */
        )) : G("v-if", !0)
      ]),
      V(e.$slots, "title", {}, () => [
        e.title ? (b(), P(
          "div",
          {
            key: 0,
            class: p(e.n("title"))
          },
          ae(e.title),
          3
          /* TEXT, CLASS */
        )) : G("v-if", !0)
      ]),
      V(e.$slots, "description", {}, () => [
        e.description ? (b(), P(
          "div",
          {
            key: 0,
            class: p(e.n("description"))
          },
          ae(e.description),
          3
          /* TEXT, CLASS */
        )) : G("v-if", !0)
      ]),
      e.$slots.footer ? (b(), P(
        "div",
        {
          key: 0,
          class: p(e.n("footer"))
        },
        [
          V(e.$slots, "footer")
        ],
        2
        /* CLASS */
      )) : G("v-if", !0)
    ],
    2
    /* CLASS */
  );
}
const om = _({
  name: d2,
  components: {
    Info: V6,
    Success: x6,
    Warning: G6,
    Error: Y6,
    Question: r2,
    Empty: c2
  },
  props: nm,
  setup(e) {
    const n = I(
      () => `calc(${e.imageSize ? Te(e.imageSize) : "var(--result-image-size)"} * 0.9)`
    ), o = I(
      () => `calc(${e.imageSize ? Te(e.imageSize) : "var(--result-image-size)"} * 0.05)`
    );
    return {
      circleSize: n,
      borderSize: o,
      n: f2,
      classes: p2
    };
  }
});
om.render = v2;
var Za = om;
re(Za);
se(Za, nm);
const L5 = Za;
var El = Za;
const tm = {
  gutter: {
    type: [String, Number, Array],
    default: 0
  },
  justify: {
    type: String,
    default: "flex-start"
  },
  align: {
    type: String,
    default: "flex-start"
  },
  onClick: A()
}, { name: m2, n: h2, classes: g2 } = ee("row");
function b2(e, n) {
  return b(), P(
    "div",
    {
      class: p(e.classes(e.n(), e.n("$--box"))),
      style: K({
        justifyContent: e.padStartFlex(e.justify),
        alignItems: e.padStartFlex(e.align),
        margin: `${-e.average[0]}px ${-e.average[1]}px`
      }),
      onClick: n[0] || (n[0] = (...o) => e.handleClick && e.handleClick(...o))
    },
    [
      V(e.$slots, "default")
    ],
    6
    /* CLASS, STYLE */
  );
}
const rm = _({
  name: m2,
  props: tm,
  setup(e) {
    const n = I(
      () => Ge(e.gutter) ? e.gutter.map((s) => xe(s) / 2) : [0, xe(e.gutter) / 2]
    ), { cols: o, bindCols: t, length: r } = ky(), a = { computePadding: i };
    fe(() => r.value, i), fe(() => e.gutter, i), t(a);
    function i() {
      o.forEach((s) => {
        const [u, c] = n.value;
        s.setPadding({ left: c, right: c, top: u, bottom: u });
      });
    }
    function l(s) {
      w(e.onClick, s);
    }
    return {
      average: n,
      n: h2,
      classes: g2,
      handleClick: l,
      padStartFlex: $r
    };
  }
});
rm.render = b2;
var Ja = rm;
re(Ja);
se(Ja, tm);
const R5 = Ja;
var Dl = Ja, y2 = Object.defineProperty, Fc = Object.getOwnPropertySymbols, k2 = Object.prototype.hasOwnProperty, $2 = Object.prototype.propertyIsEnumerable, Uc = (e, n, o) => n in e ? y2(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, w2 = (e, n) => {
  for (var o in n || (n = {}))
    k2.call(n, o) && Uc(e, o, n[o]);
  if (Fc)
    for (var o of Fc(n))
      $2.call(n, o) && Uc(e, o, n[o]);
  return e;
};
const am = w2({
  modelValue: {
    type: [String, Number, Boolean, Array],
    default: void 0
  },
  multiple: Boolean,
  offsetY: {
    type: [String, Number],
    default: 0
  },
  chip: Boolean,
  readonly: Boolean,
  separator: {
    type: String,
    default: ","
  },
  textAlign: {
    type: String,
    default: "left"
  },
  validateTrigger: {
    type: Array,
    default: () => ["onChange", "onClear", "onClose"]
  },
  rules: Array,
  onFocus: A(),
  onBlur: A(),
  onClose: A(),
  onChange: A(),
  onClear: A(),
  "onUpdate:modelValue": A()
}, Be(za, [
  "size",
  "variant",
  "placeholder",
  "line",
  "hint",
  "textColor",
  "focusColor",
  "blurColor",
  "disabled",
  "clearable",
  "onClick"
])), { name: C2, n: S2, classes: P2 } = ee("select"), z2 = ["tabindex"], O2 = { key: 1 };
function T2(e, n) {
  const o = te("var-chip"), t = te("var-icon"), r = te("var-field-decorator"), a = te("var-menu"), i = te("var-form-details");
  return b(), P("div", {
    ref: "root",
    class: p(e.n()),
    tabindex: e.disabled || e.formDisabled ? void 0 : "0",
    onFocus: n[3] || (n[3] = (...l) => e.handleFocus && e.handleFocus(...l)),
    onBlur: n[4] || (n[4] = (...l) => e.handleRootBlur && e.handleRootBlur(...l))
  }, [
    X(a, {
      "var-select-cover": "",
      "same-width": "",
      "close-on-click-reference": "",
      "close-on-key-escape": !1,
      class: p(e.n("menu")),
      "popover-class": e.variant === "standard" && e.hint ? e.n("--standard-menu-margin") : void 0,
      "offset-y": e.offsetY,
      disabled: e.formReadonly || e.readonly || e.formDisabled || e.disabled,
      placement: e.placement,
      "default-style": !1,
      show: e.showMenu,
      "onUpdate:show": n[1] || (n[1] = (l) => e.showMenu = l),
      onClickOutside: e.handleClickOutside
    }, {
      menu: pe(() => [
        M(
          "div",
          {
            ref: "menuEl",
            class: p(e.classes(e.n("scroller"), e.n("$-elevation--3")))
          },
          [
            V(e.$slots, "default")
          ],
          2
          /* CLASS */
        )
      ]),
      default: pe(() => [
        X(
          r,
          yo(jt({
            value: e.modelValue,
            size: e.size,
            variant: e.variant,
            placeholder: e.placeholder,
            line: e.line,
            hint: e.hint,
            textColor: e.textColor,
            focusColor: e.focusColor,
            blurColor: e.blurColor,
            isFocusing: e.isFocusing,
            errorMessage: e.errorMessage,
            formDisabled: e.formDisabled,
            disabled: e.disabled,
            clearable: e.clearable,
            cursor: e.cursor,
            onClick: e.handleClick,
            onClear: e.handleClear
          })),
          zt({
            "clear-icon": pe(({ clear: l }) => [
              V(e.$slots, "clear-icon", { clear: l })
            ]),
            "append-icon": pe(() => [
              V(e.$slots, "append-icon")
            ]),
            default: pe(() => [
              M(
                "div",
                {
                  class: p(e.classes(e.n("select"), [e.errorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
                  style: K({
                    textAlign: e.textAlign,
                    color: e.textColor
                  })
                },
                [
                  M(
                    "div",
                    {
                      class: p(e.n("label"))
                    },
                    [
                      e.isEmptyModelValue ? G("v-if", !0) : V(e.$slots, "selected", { key: 0 }, () => [
                        e.multiple ? (b(), P(
                          Ue,
                          { key: 0 },
                          [
                            e.chip ? (b(), P(
                              "div",
                              {
                                key: 0,
                                class: p(e.n("chips"))
                              },
                              [
                                (b(!0), P(
                                  Ue,
                                  null,
                                  nn(e.labels, (l) => (b(), Oe(o, {
                                    class: p(e.n("chip")),
                                    "var-select-cover": "",
                                    closeable: "",
                                    size: "small",
                                    type: e.errorMessage ? "danger" : void 0,
                                    key: l,
                                    onClick: n[0] || (n[0] = In(() => {
                                    }, ["stop"])),
                                    onClose: () => e.handleClose(l)
                                  }, {
                                    default: pe(() => [
                                      De(
                                        ae(l),
                                        1
                                        /* TEXT */
                                      )
                                    ]),
                                    _: 2
                                    /* DYNAMIC */
                                  }, 1032, ["class", "type", "onClose"]))),
                                  128
                                  /* KEYED_FRAGMENT */
                                ))
                              ],
                              2
                              /* CLASS */
                            )) : (b(), P(
                              "div",
                              {
                                key: 1,
                                class: p(e.n("values"))
                              },
                              ae(e.labels.join(e.separator)),
                              3
                              /* TEXT, CLASS */
                            ))
                          ],
                          64
                          /* STABLE_FRAGMENT */
                        )) : (b(), P(
                          "span",
                          O2,
                          ae(e.label),
                          1
                          /* TEXT */
                        ))
                      ])
                    ],
                    2
                    /* CLASS */
                  ),
                  e.enableCustomPlaceholder ? (b(), P(
                    "span",
                    {
                      key: 0,
                      class: p(e.classes(e.n("placeholder"), e.n("$--ellipsis"))),
                      style: K({
                        color: e.placeholderColor
                      })
                    },
                    ae(e.placeholder),
                    7
                    /* TEXT, CLASS, STYLE */
                  )) : G("v-if", !0),
                  V(e.$slots, "arrow-icon", {
                    focus: e.isFocusing,
                    menuOpen: e.showMenu
                  }, () => [
                    X(t, {
                      class: p(e.classes(e.n("arrow"), [e.showMenu, e.n("--arrow-rotate")])),
                      "var-select-cover": "",
                      name: "menu-down",
                      transition: 300
                    }, null, 8, ["class"])
                  ])
                ],
                6
                /* CLASS, STYLE */
              )
            ]),
            _: 2
            /* DYNAMIC */
          }, [
            e.$slots["prepend-icon"] ? {
              name: "prepend-icon",
              fn: pe(() => [
                V(e.$slots, "prepend-icon")
              ]),
              key: "0"
            } : void 0
          ]),
          1040
          /* FULL_PROPS, DYNAMIC_SLOTS */
        )
      ]),
      _: 3
      /* FORWARDED */
    }, 8, ["class", "popover-class", "offset-y", "disabled", "placement", "show", "onClickOutside"]),
    X(i, {
      "error-message": e.errorMessage,
      onClick: n[2] || (n[2] = In(() => {
      }, ["stop"]))
    }, null, 8, ["error-message"])
  ], 42, z2);
}
const im = _({
  name: C2,
  components: {
    VarIcon: Xe,
    VarMenu: Rt,
    VarChip: Sr,
    VarFieldDecorator: Nt,
    VarFormDetails: On
  },
  props: am,
  setup(e) {
    const n = $(!1), o = $(!1), t = $(null), r = I(() => e.multiple), a = I(() => e.focusColor), i = I(() => Gn(e.modelValue)), l = I(() => e.disabled || e.readonly ? "" : "pointer"), s = $(0), { bindForm: u, form: c } = Un(), { length: d, options: f, bindOptions: v } = TS(), { label: g, labels: m, computeLabel: k, getSelectedValue: y } = zv({
      modelValue: () => e.modelValue,
      multiple: () => e.multiple,
      optionProviders: () => f,
      optionProvidersLength: () => d.value
    }), {
      errorMessage: h,
      validateWithTrigger: C,
      validate: S,
      // expose
      resetValidation: T
    } = Fn(), O = $(null), z = I(() => e.variant === "outlined" ? "bottom" : "cover-top"), E = I(() => {
      const { hint: x, blurColor: ue, focusColor: $e } = e;
      if (!x)
        return h.value ? "var(--field-decorator-error-color)" : n.value ? $e || "var(--field-decorator-focus-color)" : ue || "var(--field-decorator-placeholder-color, var(--field-decorator-blur-color))";
    }), D = I(() => !e.hint && Gn(e.modelValue)), R = {
      multiple: r,
      focusColor: a,
      computeLabel: k,
      onSelect: J,
      reset: Y,
      validate: B,
      resetValidation: T
    };
    fe(
      () => e.multiple,
      () => {
        const { multiple: x, modelValue: ue } = e;
        x && !Ge(ue) && Mn("Select", "The modelValue must be an array when multiple is true");
      }
    ), v(R), je(() => window, "keydown", N), je(() => window, "keyup", H), w(u, R);
    function N(x) {
      const { disabled: ue, readonly: $e } = e;
      if (c != null && c.disabled.value || c != null && c.readonly.value || ue || $e || !n.value)
        return;
      const { key: ze } = x;
      if (ze === " " && !o.value) {
        Ae(x);
        return;
      }
      if (ze === "Escape" && o.value) {
        t.value.focus(), Ae(x), o.value = !1;
        return;
      }
      if (ze === "Tab" && o.value) {
        t.value.focus(), Ae(x), q();
        return;
      }
      if (ze === "Enter" && !o.value) {
        Ae(x), o.value = !0;
        return;
      }
      (ze === "ArrowDown" || ze === "ArrowUp") && o.value && (Ae(x), zd(t.value, O.value, ze));
    }
    function H(x) {
      const { disabled: ue, readonly: $e } = e;
      if (c != null && c.disabled.value || c != null && c.readonly.value || ue || $e || o.value || !n.value)
        return;
      const { key: ze } = x;
      ze === " " && !o.value && (Ae(x), o.value = !0);
    }
    function L(x) {
      He(() => {
        const { validateTrigger: ue, rules: $e, modelValue: ze } = e;
        C(ue, x, $e, ze);
      });
    }
    function j() {
      const { disabled: x, readonly: ue, onFocus: $e } = e;
      c != null && c.disabled.value || c != null && c.readonly.value || x || ue || (s.value = xe(e.offsetY), U(), w($e), L("onFocus"));
    }
    function q() {
      const { disabled: x, readonly: ue, onBlur: $e } = e;
      c != null && c.disabled.value || c != null && c.readonly.value || x || ue || (oe(), w($e), L("onBlur"));
    }
    function W() {
      o.value || q();
    }
    function ce() {
      n.value && q();
    }
    function J(x) {
      const { disabled: ue, readonly: $e, multiple: ze, onChange: We } = e;
      if (c != null && c.disabled.value || c != null && c.readonly.value || ue || $e)
        return;
      const tn = y(x);
      w(e["onUpdate:modelValue"], tn), w(We, tn), L("onChange"), ze || (t.value.focus(), wn().then(() => {
        o.value = !1;
      }));
    }
    function ve() {
      const { disabled: x, readonly: ue, multiple: $e, clearable: ze, onClear: We } = e;
      if (c != null && c.disabled.value || c != null && c.readonly.value || x || ue || !ze)
        return;
      const tn = $e ? [] : void 0;
      w(e["onUpdate:modelValue"], tn), w(We, tn), L("onClear");
    }
    function Q(x) {
      const { disabled: ue, onClick: $e } = e;
      c != null && c.disabled.value || ue || (w($e, x), L("onClick"));
    }
    function de(x) {
      const { disabled: ue, readonly: $e, modelValue: ze, onClose: We } = e;
      if (c != null && c.disabled.value || c != null && c.readonly.value || ue || $e)
        return;
      const tn = f.find(({ label: Ve }) => Ve.value === x), ge = ze.filter(
        (Ve) => {
          var _e;
          return Ve !== ((_e = tn.value.value) != null ? _e : tn.label.value);
        }
      );
      w(e["onUpdate:modelValue"], ge), w(We, ge), L("onClose");
    }
    function U() {
      s.value = xe(e.offsetY), n.value = !0;
    }
    function oe() {
      n.value = !1, o.value = !1;
    }
    function B() {
      return S(e.rules, e.modelValue);
    }
    function Y() {
      w(e["onUpdate:modelValue"], e.multiple ? [] : void 0), T();
    }
    return {
      root: t,
      offsetY: s,
      isFocusing: n,
      showMenu: o,
      errorMessage: h,
      formDisabled: c == null ? void 0 : c.disabled,
      formReadonly: c == null ? void 0 : c.readonly,
      label: g,
      labels: m,
      isEmptyModelValue: i,
      menuEl: O,
      placement: z,
      cursor: l,
      placeholderColor: E,
      enableCustomPlaceholder: D,
      n: S2,
      classes: P2,
      handleFocus: j,
      handleBlur: q,
      handleClickOutside: ce,
      handleClear: ve,
      handleClick: Q,
      handleClose: de,
      handleRootBlur: W,
      reset: Y,
      validate: B,
      resetValidation: T,
      focus: U,
      blur: oe
    };
  }
});
im.render = T2;
var Qa = im;
re(Qa);
se(Qa, am);
const F5 = Qa;
var Bl = Qa;
const lm = {
  loading: {
    type: Boolean,
    default: !0
  },
  title: Boolean,
  card: Boolean,
  avatar: Boolean,
  fullscreen: Boolean,
  fullscreenZIndex: {
    type: [Number, String],
    default: 100
  },
  titleWidth: [Number, String],
  cardHeight: [Number, String],
  avatarSize: [Number, String],
  rows: {
    type: [Number, String],
    default: 3
  },
  rowsWidth: {
    type: Array,
    default: () => []
  }
}, { name: E2, n: D2, classes: B2 } = ee("skeleton");
function I2(e, n) {
  return b(), P(
    "div",
    {
      class: p(e.classes(e.n("$--box"), e.n()))
    },
    [
      e.loading ? G("v-if", !0) : (b(), P(
        "div",
        {
          key: 0,
          class: p(e.n("data"))
        },
        [
          V(e.$slots, "default")
        ],
        2
        /* CLASS */
      )),
      e.loading && !e.fullscreen ? (b(), P(
        "div",
        {
          key: 1,
          class: p(e.n("content"))
        },
        [
          e.card ? (b(), P(
            "div",
            {
              key: 0,
              class: p(e.n("card")),
              style: K({ height: e.toSizeUnit(e.cardHeight) })
            },
            [
              M(
                "div",
                {
                  class: p(e.n("--animation"))
                },
                null,
                2
                /* CLASS */
              )
            ],
            6
            /* CLASS, STYLE */
          )) : G("v-if", !0),
          e.avatar || e.title || e.toNumber(e.rows) > 0 ? (b(), P(
            "div",
            {
              key: 1,
              class: p(e.n("article"))
            },
            [
              e.avatar ? (b(), P(
                "div",
                {
                  key: 0,
                  class: p(e.n("avatar")),
                  style: K({
                    width: e.toSizeUnit(e.avatarSize),
                    height: e.toSizeUnit(e.avatarSize)
                  })
                },
                [
                  M(
                    "div",
                    {
                      class: p(e.n("--animation"))
                    },
                    null,
                    2
                    /* CLASS */
                  )
                ],
                6
                /* CLASS, STYLE */
              )) : G("v-if", !0),
              e.title || e.toNumber(e.rows) > 0 ? (b(), P(
                "div",
                {
                  key: 1,
                  class: p(e.n("section"))
                },
                [
                  e.title ? (b(), P(
                    "div",
                    {
                      key: 0,
                      class: p(e.n("title")),
                      style: K({ width: e.toSizeUnit(e.titleWidth) })
                    },
                    [
                      M(
                        "div",
                        {
                          class: p(e.n("--animation"))
                        },
                        null,
                        2
                        /* CLASS */
                      )
                    ],
                    6
                    /* CLASS, STYLE */
                  )) : G("v-if", !0),
                  (b(!0), P(
                    Ue,
                    null,
                    nn(e.toNumber(e.rows), (o, t) => (b(), P(
                      "div",
                      {
                        class: p(e.n("row")),
                        key: o,
                        style: K({ width: e.toSizeUnit(e.rowsWidth[t]) })
                      },
                      [
                        M(
                          "div",
                          {
                            class: p(e.n("--animation"))
                          },
                          null,
                          2
                          /* CLASS */
                        )
                      ],
                      6
                      /* CLASS, STYLE */
                    ))),
                    128
                    /* KEYED_FRAGMENT */
                  ))
                ],
                2
                /* CLASS */
              )) : G("v-if", !0)
            ],
            2
            /* CLASS */
          )) : G("v-if", !0)
        ],
        2
        /* CLASS */
      )) : G("v-if", !0),
      e.loading && e.fullscreen ? (b(), P(
        "div",
        {
          key: 2,
          class: p(e.n("fullscreen")),
          style: K({ zIndex: e.toNumber(e.fullscreenZIndex) })
        },
        [
          M(
            "div",
            {
              class: p(e.n("--animation"))
            },
            null,
            2
            /* CLASS */
          )
        ],
        6
        /* CLASS, STYLE */
      )) : G("v-if", !0)
    ],
    2
    /* CLASS */
  );
}
const sm = _({
  name: E2,
  props: lm,
  setup: () => ({
    n: D2,
    classes: B2,
    toSizeUnit: Te,
    toNumber: F
  })
});
sm.render = I2;
var xa = sm;
re(xa);
se(xa, lm);
const U5 = xa;
var Il = xa, rn = /* @__PURE__ */ ((e) => (e.First = "1", e.Second = "2", e))(rn || {});
const um = {
  modelValue: {
    type: [Number, Array],
    default: 0
  },
  step: {
    type: [Number, String],
    default: 1
  },
  range: Boolean,
  labelVisible: {
    type: String,
    default: "normal"
  },
  activeColor: String,
  trackColor: String,
  thumbColor: String,
  labelColor: String,
  labelTextColor: String,
  trackHeight: [String, Number],
  max: {
    type: [String, Number],
    default: 100
  },
  min: {
    type: [String, Number],
    default: 0
  },
  thumbSize: [String, Number],
  disabled: Boolean,
  readonly: Boolean,
  direction: {
    type: String,
    default: "horizontal"
  },
  rules: Array,
  onChange: A(),
  onStart: A(),
  onEnd: A(),
  "onUpdate:modelValue": A()
}, { name: M2, n: Hc, classes: N2 } = ee("slider"), A2 = ["tabindex", "onTouchstart", "onFocusin", "onFocusout"];
function V2(e, n) {
  const o = te("var-hover-overlay"), t = te("var-form-details"), r = Re("hover");
  return b(), P(
    "div",
    {
      class: p(e.classes(e.n(e.direction), e.n("$--box")))
    },
    [
      M(
        "div",
        {
          class: p(e.classes(e.n(`${e.direction}-block`), [e.isDisabled, e.n("--disabled")], [e.errorMessage, e.n(`${e.direction}--error`)])),
          ref: "sliderEl",
          onClick: n[0] || (n[0] = (...a) => e.click && e.click(...a))
        },
        [
          M(
            "div",
            {
              class: p(e.n(`${e.direction}-track`))
            },
            [
              M(
                "div",
                {
                  class: p(e.n(`${e.direction}-track-background`)),
                  style: K({
                    background: e.trackColor,
                    height: e.isVertical ? "100%" : e.toSizeUnit(e.trackHeight),
                    width: e.isVertical ? e.toSizeUnit(e.trackHeight) : "100%"
                  })
                },
                null,
                6
                /* CLASS, STYLE */
              ),
              M(
                "div",
                {
                  class: p(e.n(`${e.direction}-track-fill`)),
                  style: K(e.getFillStyle)
                },
                null,
                6
                /* CLASS, STYLE */
              )
            ],
            2
            /* CLASS */
          ),
          (b(!0), P(
            Ue,
            null,
            nn(e.thumbList, (a) => (b(), P("div", {
              class: p(e.n(`${e.direction}-thumb`)),
              key: a.enumValue,
              style: K(e.thumbStyle(a)),
              tabindex: e.isDisabled ? void 0 : "0",
              onTouchstart: In((i) => e.start(i, a.enumValue), ["stop"]),
              onFocusin: (i) => e.handleFocus(a),
              onFocusout: (i) => e.handleBlur(a)
            }, [
              V(e.$slots, "button", {
                currentValue: a.text
              }, () => [
                Me(M(
                  "div",
                  {
                    class: p(e.n(`${e.direction}-thumb-block`)),
                    style: K({
                      background: e.thumbColor
                    })
                  },
                  null,
                  6
                  /* CLASS, STYLE */
                ), [
                  [r, (i) => e.hover(i, a), "desktop"]
                ]),
                M(
                  "div",
                  {
                    class: p(
                      e.classes(e.n(`${e.direction}-thumb-ripple`), [
                        e.thumbsProps[a.enumValue].active,
                        e.n(`${e.direction}-thumb-ripple--active`)
                      ])
                    ),
                    style: K({
                      background: e.thumbsProps[a.enumValue].active ? e.thumbColor : void 0
                    })
                  },
                  [
                    X(o, {
                      hovering: !e.isDisabled && a.hovering,
                      focusing: !e.isDisabled && a.focusing
                    }, null, 8, ["hovering", "focusing"])
                  ],
                  6
                  /* CLASS, STYLE */
                ),
                M(
                  "div",
                  {
                    class: p(
                      e.classes(e.n(`${e.direction}-thumb-label`), [e.showLabel(a.enumValue), e.n(`${e.direction}-thumb-label--active`)])
                    ),
                    style: K({
                      background: e.labelColor,
                      color: e.labelTextColor,
                      height: e.toSizeUnit(e.thumbSize),
                      width: e.toSizeUnit(e.thumbSize)
                    })
                  },
                  [
                    M(
                      "span",
                      null,
                      ae(a.text),
                      1
                      /* TEXT */
                    )
                  ],
                  6
                  /* CLASS, STYLE */
                )
              ])
            ], 46, A2))),
            128
            /* KEYED_FRAGMENT */
          ))
        ],
        2
        /* CLASS */
      ),
      X(t, {
        "error-message": e.errorMessage,
        class: p(e.n("form")),
        "var-slider-cover": ""
      }, null, 8, ["error-message", "class"])
    ],
    2
    /* CLASS */
  );
}
const cm = _({
  name: M2,
  components: {
    VarFormDetails: On,
    VarHoverOverlay: Nn
  },
  directives: { Hover: zn },
  props: um,
  setup(e) {
    const n = $(0), o = $(null), t = $(!1), r = I(() => F(e.max) - F(e.min)), a = I(() => n.value / r.value * F(e.step)), i = I(() => e.disabled || (f == null ? void 0 : f.disabled.value)), l = I(() => e.readonly || (f == null ? void 0 : f.readonly.value)), s = I(() => e.direction === "vertical"), u = $(!1), c = $(!1), { bindForm: d, form: f } = Un(), { errorMessage: v, validateWithTrigger: g, validate: m, resetValidation: k } = Fn(), { hovering: y, handleHovering: h } = Xn(), { hovering: C, handleHovering: S } = Xn(), T = I(() => {
      const { modelValue: ie, range: me } = e;
      let we = [];
      return me && Ge(ie) ? we = [
        {
          value: ce(ie[0]),
          enumValue: rn.First,
          text: J(ie[0]),
          hovering: y.value,
          focusing: u.value,
          handleHovering: h,
          handleFocusing(Ie) {
            u.value = Ie;
          }
        },
        {
          value: ce(ie[1]),
          enumValue: rn.Second,
          text: J(ie[1]),
          hovering: C.value,
          focusing: c.value,
          handleHovering: S,
          handleFocusing(Ie) {
            c.value = Ie;
          }
        }
      ] : Pn(ie) && (we = [
        {
          value: ce(ie),
          enumValue: rn.First,
          text: J(ie),
          hovering: y.value,
          focusing: u.value,
          handleHovering: h,
          handleFocusing(Ie) {
            u.value = Ie;
          }
        }
      ]), we;
    }), O = I(() => {
      const { activeColor: ie, range: me, modelValue: we } = e, Ie = me && Ge(we) ? ce(Math.min(we[0], we[1])) : 0, ne = me && Ge(we) ? ce(Math.max(we[0], we[1])) - Ie : ce(we);
      return s.value ? {
        left: "0px",
        height: `${ne}%`,
        bottom: `${Ie}%`,
        background: ie
      } : {
        top: "0px",
        width: `${ne}%`,
        left: `${Ie}%`,
        background: ie
      };
    }), z = Ze({
      [rn.First]: H(),
      [rn.Second]: H()
    });
    let E;
    w(d, {
      reset: ge,
      validate: N,
      resetValidation: k
    }), fe([() => e.modelValue, () => e.step], ([ie, me]) => {
      !ze() || !We() || t.value || tn(ie, F(me));
    }), fe(n, () => tn()), cn(() => {
      !ze() || !We() || R();
    }), Ar(B), je(() => window, "keydown", _e), To(R);
    function R() {
      n.value = o.value[s.value ? "offsetHeight" : "offsetWidth"];
    }
    function N() {
      return m(e.rules, e.modelValue);
    }
    function H() {
      return {
        startPosition: 0,
        currentOffset: 0,
        active: !1,
        percentValue: 0
      };
    }
    function L() {
      return He(() => g(["onChange"], "onChange", e.rules, e.modelValue));
    }
    function j(ie) {
      const me = ie.currentTarget;
      return me ? s.value ? n.value - (ie.clientY - un(me).top) : ie.clientX - ag(me) : 0;
    }
    function q(ie) {
      return {
        [s.value ? "bottom" : "left"]: `${ie.value}%`,
        zIndex: z[ie.enumValue].active ? 1 : void 0
      };
    }
    function W(ie) {
      return e.labelVisible === "always" ? !0 : e.labelVisible === "never" ? !1 : z[ie].active;
    }
    function ce(ie) {
      const { min: me, max: we } = e;
      return ie < F(me) ? 0 : ie > F(we) ? 100 : (ie - F(me)) / r.value * 100;
    }
    function J(ie) {
      if (!Pn(ie))
        return 0;
      let me = ie;
      return me < Number(e.min) && (me = Number(e.min)), me > Number(e.max) && (me = Number(e.max)), parseInt(`${me}`, 10) === me ? me : F(me.toPrecision(5));
    }
    function ve(ie, me) {
      i.value || me.handleHovering(ie);
    }
    function Q(ie) {
      w(e.onChange, ie), w(e["onUpdate:modelValue"], ie), L();
    }
    function de(ie, me) {
      let we = [];
      const { step: Ie, range: ne, modelValue: he, min: Se } = e, Ne = F(Ie), Le = Math.round(ie / a.value), Qe = Le * Ne + F(Se), dn = z[me].percentValue * Ne + F(Se);
      if (z[me].percentValue = Le, ne && Ge(he) && (we = me === rn.First ? [Qe, he[1]] : [he[0], Qe]), dn !== Qe) {
        const hn = ne ? we.map((no) => J(no)) : J(Qe);
        Q(hn);
      }
    }
    function U(ie) {
      if (!e.range)
        return rn.First;
      const me = z[rn.First].percentValue * a.value, we = z[rn.Second].percentValue * a.value, Ie = Math.abs(ie - me), ne = Math.abs(ie - we);
      return Ie <= ne ? rn.First : rn.Second;
    }
    function oe() {
      document.addEventListener("touchmove", x, { passive: !1 }), document.addEventListener("touchend", ue), document.addEventListener("touchcancel", ue);
    }
    function B() {
      document.removeEventListener("touchmove", x), document.removeEventListener("touchend", ue), document.removeEventListener("touchcancel", ue);
    }
    function Y(ie, me) {
      if (R(), i.value || (z[me].active = !0), E = me, oe(), i.value || l.value)
        return;
      w(e.onStart), t.value = !0;
      const { clientX: we, clientY: Ie } = ie.touches[0];
      z[me].startPosition = s.value ? Ie : we;
    }
    function x(ie) {
      if (Ae(ie), i.value || l.value || !t.value)
        return;
      const { startPosition: me, currentOffset: we } = z[E], { clientX: Ie, clientY: ne } = ie.touches[0];
      let he = (s.value ? me - ne : Ie - me) + we;
      he <= 0 ? he = 0 : he >= n.value && (he = n.value), de(he, E);
    }
    function ue() {
      B();
      const { range: ie, modelValue: me, onEnd: we, step: Ie, min: ne } = e;
      if (i.value || (z[E].active = !1), i.value || l.value)
        return;
      let he = [];
      z[E].currentOffset = z[E].percentValue * a.value;
      const Se = z[E].percentValue * F(Ie) + F(ne);
      ie && Ge(me) && (he = E === rn.First ? [Se, me[1]] : [me[0], Se]), w(we, ie ? he : Se), t.value = !1;
    }
    function $e(ie) {
      if (i.value || l.value || ie.target.closest(`.${Hc("thumb")}`))
        return;
      const me = j(ie), we = U(me);
      E = we, de(me, we), ue();
    }
    function ze() {
      const ie = F(e.step);
      return isNaN(ie) ? (Ks("Slider", 'type of prop "step" should be Number'), !1) : ie < 0 ? (Ks("Slider", '"step" should be > 0'), !1) : !0;
    }
    function We() {
      const { range: ie, modelValue: me } = e;
      return ie && !Ge(me) ? (console.error('[Varlet] Slider: "modelValue" should be an Array'), !1) : !ie && Ge(me) ? (console.error('[Varlet] Slider: "modelValue" should be a Number'), !1) : ie && Ge(me) && me.length < 2 ? (console.error('[Varlet] Slider: "modelValue" should have two value'), !1) : !0;
    }
    function tn(ie = e.modelValue, me = F(e.step)) {
      const we = (Ie) => {
        const { min: ne, max: he } = e;
        return Ie < F(ne) ? 0 : Ie > F(he) ? r.value / me : (Ie - F(ne)) / me;
      };
      e.range && Ge(ie) ? (z[rn.First].percentValue = we(ie[0]), z[rn.First].currentOffset = z[rn.First].percentValue * a.value, z[rn.Second].percentValue = we(ie[1]), z[rn.Second].currentOffset = z[rn.Second].percentValue * a.value) : Pn(ie) && (z[rn.First].currentOffset = we(ie) * a.value);
    }
    function ge() {
      const ie = e.range ? [0, 0] : 0;
      w(e["onUpdate:modelValue"], ie), k();
    }
    function Ve(ie, me) {
      const we = Number(e.step);
      if (Ge(me)) {
        const Ie = me[0] + (u.value ? ie * we : 0), ne = me[1] + (c.value ? ie * we : 0);
        return [Ie, ne].map(J);
      }
      return J(me + ie * we);
    }
    function _e(ie) {
      const me = {
        ArrowRight: 1,
        ArrowUp: 1,
        ArrowLeft: -1,
        ArrowDown: -1
      }, { key: we } = ie;
      if (!cd(me, we) || l.value || i.value || e.range && !u.value && !c.value || !e.range && !u.value)
        return;
      Ae(ie);
      const Ie = me[we], ne = Ve(Ie, e.modelValue);
      Q(ne);
    }
    function Fe(ie) {
      i.value || ie.handleFocusing(!0);
    }
    function eo(ie) {
      ie.handleFocusing(!1);
    }
    return {
      Thumbs: rn,
      sliderEl: o,
      getFillStyle: O,
      isDisabled: i,
      isVertical: s,
      errorMessage: v,
      thumbsProps: z,
      thumbList: T,
      handleFocus: Fe,
      handleBlur: eo,
      n: Hc,
      classes: N2,
      thumbStyle: q,
      hover: ve,
      toSizeUnit: Te,
      toNumber: F,
      showLabel: W,
      start: Y,
      move: x,
      end: ue,
      click: $e
    };
  }
});
cm.render = V2;
var _a = cm;
re(_a);
se(_a, um);
const H5 = _a;
var Ml = _a, L2 = Object.defineProperty, R2 = Object.defineProperties, F2 = Object.getOwnPropertyDescriptors, Yc = Object.getOwnPropertySymbols, U2 = Object.prototype.hasOwnProperty, H2 = Object.prototype.propertyIsEnumerable, jc = (e, n, o) => n in e ? L2(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, Y2 = (e, n) => {
  for (var o in n || (n = {}))
    U2.call(n, o) && jc(e, o, n[o]);
  if (Yc)
    for (var o of Yc(n))
      H2.call(n, o) && jc(e, o, n[o]);
  return e;
}, j2 = (e, n) => R2(e, F2(n));
const zs = {
  type: String,
  position: {
    type: String,
    default: "top"
  },
  content: [String, Function, Object],
  contentClass: String,
  duration: {
    type: Number,
    default: 3e3
  },
  vertical: Boolean,
  loadingType: Be(to, "type"),
  loadingSize: Be(to, "size"),
  loadingRadius: Be(to, "radius"),
  loadingColor: j2(Y2({}, Be(to, "color")), {
    default: "currentColor"
  }),
  lockScroll: Boolean,
  show: Boolean,
  teleport: {
    type: [String, Object, Boolean],
    default: "body"
  },
  forbidClick: Boolean,
  onOpen: A(),
  onOpened: A(),
  onClose: A(),
  onClosed: A(),
  "onUpdate:show": A(),
  _update: String
}, { n: W2, classes: K2 } = ee("snackbar"), q2 = {
  success: "checkbox-marked-circle",
  warning: "warning",
  info: "information",
  error: "error",
  loading: ""
};
function X2(e, n) {
  const o = te("var-icon"), t = te("var-loading");
  return Me((b(), P(
    "div",
    {
      class: p(e.n()),
      style: K({ pointerEvents: e.isForbidClick ? "auto" : "none", zIndex: e.zIndex })
    },
    [
      M(
        "div",
        {
          class: p(
            e.classes(
              e.n("wrapper"),
              e.n(`wrapper-${e.position}`),
              e.n("$-elevation--4"),
              [e.vertical, e.n("vertical")],
              [e.type && e.SNACKBAR_TYPE.includes(e.type), e.n(`wrapper-${e.type}`)]
            )
          ),
          style: K({ zIndex: e.zIndex })
        },
        [
          M(
            "div",
            {
              class: p([e.n("content"), e.contentClass])
            },
            [
              V(e.$slots, "default", {}, () => [
                De(
                  ae(e.content),
                  1
                  /* TEXT */
                )
              ])
            ],
            2
            /* CLASS */
          ),
          e.iconName || e.type === "loading" || e.$slots.icon ? (b(), P(
            "div",
            {
              key: 0,
              class: p(e.n("icon"))
            },
            [
              e.iconName ? (b(), Oe(o, {
                key: 0,
                name: e.iconName
              }, null, 8, ["name"])) : G("v-if", !0),
              e.type === "loading" ? (b(), Oe(t, {
                key: 1,
                type: e.loadingType,
                size: e.loadingSize,
                color: e.loadingColor,
                radius: e.loadingRadius
              }, null, 8, ["type", "size", "color", "radius"])) : G("v-if", !0),
              V(e.$slots, "icon")
            ],
            2
            /* CLASS */
          )) : G("v-if", !0),
          e.$slots.action ? (b(), P(
            "div",
            {
              key: 1,
              class: p(e.n("action"))
            },
            [
              V(e.$slots, "action")
            ],
            2
            /* CLASS */
          )) : G("v-if", !0)
        ],
        6
        /* CLASS, STYLE */
      )
    ],
    6
    /* CLASS, STYLE */
  )), [
    [Kn, e.show]
  ]);
}
const dm = _({
  name: "VarSnackbarCore",
  components: {
    VarLoading: ot,
    VarIcon: Xe
  },
  props: zs,
  setup(e) {
    const n = $(null), { zIndex: o } = qt(() => e.show, 1);
    Kt(
      () => e.show,
      () => e.lockScroll
    );
    const t = I(() => {
      const { type: i, forbidClick: l } = e;
      return i === "loading" || l;
    }), r = I(() => e.type ? q2[e.type] : "");
    function a() {
      n.value = setTimeout(() => {
        e.type !== "loading" && w(e["onUpdate:show"], !1);
      }, e.duration);
    }
    return fe(
      () => e.show,
      (i) => {
        i ? (w(e.onOpen), a()) : (clearTimeout(n.value), w(e.onClose));
      }
    ), fe(
      () => e._update,
      () => {
        clearTimeout(n.value), a();
      }
    ), cn(() => {
      e.show && (w(e.onOpen), a());
    }), {
      SNACKBAR_TYPE: vm,
      zIndex: o,
      iconName: r,
      isForbidClick: t,
      n: W2,
      classes: K2
    };
  }
});
dm.render = X2;
var fm = dm;
const { name: G2, n: Z2 } = ee("snackbar");
function J2(e, n) {
  const o = te("var-snackbar-core");
  return b(), Oe(xn, {
    to: e.teleport === !1 ? void 0 : e.teleport,
    disabled: e.disabled || e.teleport === !1
  }, [
    X(Je, {
      name: `${e.n()}-fade`,
      onAfterEnter: e.onOpened,
      onAfterLeave: e.onClosed
    }, {
      default: pe(() => [
        X(o, Ye(e.$props, {
          class: e.n("transition")
        }), zt({
          default: pe(() => [
            V(e.$slots, "default")
          ]),
          _: 2
          /* DYNAMIC */
        }, [
          e.$slots.icon ? {
            name: "icon",
            fn: pe(() => [
              V(e.$slots, "icon")
            ]),
            key: "0"
          } : void 0,
          e.$slots.action ? {
            name: "action",
            fn: pe(() => [
              V(e.$slots, "action")
            ]),
            key: "1"
          } : void 0
        ]), 1040, ["class"])
      ]),
      _: 3
      /* FORWARDED */
    }, 8, ["name", "onAfterEnter", "onAfterLeave"])
  ], 8, ["to", "disabled"]);
}
const pm = _({
  name: G2,
  components: { VarSnackbarCore: fm },
  props: zs,
  setup() {
    const { disabled: e } = Wo();
    return {
      disabled: e,
      n: Z2
    };
  }
});
pm.render = J2;
var ei = pm, Q2 = Object.defineProperty, Wc = Object.getOwnPropertySymbols, x2 = Object.prototype.hasOwnProperty, _2 = Object.prototype.propertyIsEnumerable, Kc = (e, n, o) => n in e ? Q2(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, Ft = (e, n) => {
  for (var o in n || (n = {}))
    x2.call(n, o) && Kc(e, o, n[o]);
  if (Wc)
    for (var o of Wc(n))
      _2.call(n, o) && Kc(e, o, n[o]);
  return e;
};
const vm = ["loading", "success", "warning", "info", "error"];
let qc = 0, Nl = !1, mm, Ut = !1;
const hm = {
  type: void 0,
  content: "",
  icon: "",
  action: "",
  position: "top",
  duration: 3e3,
  vertical: !1,
  contentClass: void 0,
  loadingType: "circle",
  loadingSize: "normal",
  lockScroll: !1,
  teleport: "body",
  forbidClick: !1,
  onOpen: () => {
  },
  onOpened: () => {
  },
  onClose: () => {
  },
  onClosed: () => {
  }
};
let Rn = Ze([]), Os = hm;
const e4 = {
  name: "var-snackbar-fade",
  tag: "div",
  class: "var-transition-group"
}, Si = (e) => () => dt(e) ? e() : e, n4 = {
  setup() {
    return () => {
      const e = Rn.map(({
        id: n,
        reactiveSnackOptions: o,
        _update: t
      }) => {
        const r = document.querySelector(".var-transition-group");
        o.forbidClick || o.type === "loading" ? r.classList.add("var-pointer-auto") : r.classList.remove("var-pointer-auto");
        const a = Ft({
          position: Ut ? "relative" : "absolute"
        }, l4(o.position)), {
          content: i,
          icon: l,
          action: s
        } = o, u = {
          default: Si(i),
          icon: Si(l),
          action: Si(s)
        };
        return X(fm, Ye(o, {
          key: n,
          style: a,
          "data-id": n,
          _update: t,
          show: o.show,
          "onUpdate:show": (c) => o.show = c
        }), u);
      });
      return X(rh, Ye(e4, {
        style: {
          zIndex: Bn.zIndex
        },
        onAfterEnter: o4,
        onAfterLeave: t4
      }), {
        default: () => [e]
      });
    };
  }
}, Qn = function(e) {
  const n = a4(e), o = Ze(Ft(Ft({}, Os), n));
  o.show = !0, Nl || (Nl = !0, mm = pt(n4).unmountInstance);
  const {
    length: t
  } = Rn, r = {
    id: qc++,
    reactiveSnackOptions: o
  };
  if (t === 0 || Ut)
    r4(r);
  else {
    const a = `update-${qc}`;
    i4(o, a);
  }
  return {
    clear() {
      !Ut && Rn.length ? Rn[0].reactiveSnackOptions.show = !1 : o.show = !1;
    }
  };
};
vm.forEach((e) => {
  Qn[e] = (n) => (_o(n) ? n.type = e : n = {
    content: n,
    type: e
  }, Qn(n));
});
Qn.allowMultiple = function(e = !1) {
  e !== Ut && (Rn.forEach((n) => {
    n.reactiveSnackOptions.show = !1;
  }), Ut = e);
};
Qn.clear = function() {
  Rn.forEach((e) => {
    e.reactiveSnackOptions.show = !1;
  });
};
Qn.setDefaultOptions = function(e) {
  Os = e;
};
Qn.resetDefaultOptions = function() {
  Os = hm;
};
function o4(e) {
  const n = e.getAttribute("data-id"), o = Rn.find((t) => t.id === F(n));
  o && w(o.reactiveSnackOptions.onOpened);
}
function t4(e) {
  e.parentElement && e.parentElement.classList.remove("var-pointer-auto");
  const n = e.getAttribute("data-id"), o = Rn.find((r) => r.id === F(n));
  o && (o.animationEnd = !0, w(o.reactiveSnackOptions.onClosed)), Rn.every((r) => r.animationEnd) && (w(mm), Rn = Ze([]), Nl = !1);
}
function r4(e) {
  Rn.push(e);
}
function a4(e = {}) {
  return bn(e) ? {
    content: e
  } : e;
}
function i4(e, n) {
  const [o] = Rn;
  o.reactiveSnackOptions = Ft(Ft({}, o.reactiveSnackOptions), e), o._update = n;
}
function l4(e = "top") {
  return e === "bottom" ? {
    top: "85%"
  } : {
    top: e === "top" ? "5%" : "45%"
  };
}
Qn.Component = ei;
re(ei);
re(ei, Qn);
se(Qn, zs);
const Y5 = ei;
var Al = Qn;
const gm = {
  size: {
    type: [String, Number, Array],
    default: "normal"
  },
  wrap: {
    type: Boolean,
    default: !0
  },
  direction: {
    type: String,
    default: "row"
  },
  justify: {
    type: String,
    default: "flex-start"
  },
  align: String,
  inline: Boolean
};
function Dn(e) {
  return `calc(${e} / 2)`;
}
function s4(e, n, o) {
  const { direction: t, justify: r, index: a, lastIndex: i } = o;
  let l = "0";
  return t === "row" && (["flex-start", "center", "flex-end", "start", "end"].includes(r) ? a !== i ? l = `${Dn(e)} ${n} ${Dn(e)} 0` : l = `${Dn(e)} 0` : r === "space-around" ? l = `${Dn(e)} ${Dn(n)}` : r === "space-between" && (a === 0 ? l = `${Dn(e)} ${Dn(n)} ${Dn(e)} 0` : a === i ? l = `${Dn(e)} 0 ${Dn(e)} ${Dn(n)}` : l = `${Dn(e)} ${Dn(n)}`)), t === "column" && a !== i && (l = `0 0 ${e} 0`), l;
}
const u4 = (e) => ["mini", "small", "normal", "large"].includes(e), {
  name: c4,
  n: ur,
  classes: Xc
} = ee("space");
function d4(e, n) {
  return n ? [`var(--space-size-${e}-y)`, `var(--space-size-${e}-x)`] : Ge(e) ? e.map(Te) : [Te(e), Te(e)];
}
var ni = _({
  name: c4,
  props: gm,
  setup(e, {
    slots: n
  }) {
    return () => {
      var o;
      const {
        inline: t,
        justify: r,
        align: a,
        wrap: i,
        direction: l,
        size: s
      } = e;
      let u = (o = w(n.default)) != null ? o : [];
      const [c, d] = d4(s, u4(s));
      u = gd(u);
      const f = u.length - 1, v = u.map((g, m) => {
        const k = s4(c, d, {
          direction: l,
          justify: r,
          index: m,
          lastIndex: f
        });
        return X("div", {
          class: Xc([l === "column", ur("--auto")]),
          style: {
            margin: k
          }
        }, [g]);
      });
      return X("div", {
        class: Xc(ur(), ur("$--box"), [t, ur("--inline")]),
        style: {
          flexDirection: l,
          justifyContent: $r(r),
          alignItems: $r(a),
          flexWrap: i ? "wrap" : "nowrap",
          margin: l === "row" ? `calc(-1 * ${c} / 2) 0` : void 0
        }
      }, [v]);
    };
  }
});
re(ni);
se(ni, gm);
const j5 = ni;
var Vl = ni;
const bm = {
  activeIcon: {
    type: String,
    default: "check"
  },
  currentIcon: Be(en, "name"),
  inactiveIcon: Be(en, "name"),
  activeIconNamespace: Be(en, "namespace"),
  currentIconNamespace: Be(en, "namespace"),
  inactiveIconNamespace: Be(en, "namespace")
}, ym = Symbol("STEPS_BIND_STEP_KEY");
function f4() {
  const { bindChildren: e, childProviders: n } = mn(ym);
  return {
    step: n,
    bindStep: e
  };
}
function p4() {
  const { parentProvider: e, index: n, bindParent: o } = vn(ym);
  return o || Mn("Steps", "<step/> must in <steps>"), {
    index: n,
    steps: e,
    bindSteps: o
  };
}
const { name: v4, n: m4, classes: h4 } = ee("step"), g4 = { key: 3 };
function b4(e, n) {
  const o = te("var-icon");
  return b(), P(
    "div",
    {
      class: p(e.n())
    },
    [
      M(
        "div",
        {
          class: p(e.n(e.direction))
        },
        [
          M(
            "div",
            {
              class: p(e.classes(e.n(`${e.direction}-tag`), [e.isActive || e.isCurrent, e.n(`${e.direction}-tag--active`)])),
              style: K({ backgroundColor: e.isActive || e.isCurrent ? e.activeColor : e.inactiveColor }),
              onClick: n[0] || (n[0] = (...t) => e.click && e.click(...t))
            },
            [
              e.isActive ? (b(), Oe(o, {
                key: 0,
                class: p(e.n("icon")),
                "var-step-cover": "",
                name: e.activeIcon,
                namespace: e.activeIconNamespace
              }, null, 8, ["class", "name", "namespace"])) : e.isCurrent && e.currentIcon ? (b(), Oe(o, {
                key: 1,
                class: p(e.n("icon")),
                "var-step-cover": "",
                name: e.currentIcon,
                namespace: e.currentIconNamespace
              }, null, 8, ["class", "name", "namespace"])) : e.inactiveIcon ? (b(), Oe(o, {
                key: 2,
                class: p(e.n("icon")),
                "var-step-cover": "",
                name: e.inactiveIcon,
                namespace: e.inactiveIconNamespace
              }, null, 8, ["class", "name", "namespace"])) : (b(), P(
                "span",
                g4,
                ae(e.index + 1),
                1
                /* TEXT */
              ))
            ],
            6
            /* CLASS, STYLE */
          ),
          e.$slots.default ? (b(), P(
            "div",
            {
              key: 0,
              class: p(e.classes(e.n(`${e.direction}-content`), [e.isActive || e.isCurrent, e.n(`${e.direction}-content--active`)])),
              onClick: n[1] || (n[1] = (...t) => e.click && e.click(...t))
            },
            [
              V(e.$slots, "default")
            ],
            2
            /* CLASS */
          )) : G("v-if", !0),
          M(
            "div",
            {
              class: p(e.n(`${e.direction}-line`))
            },
            null,
            2
            /* CLASS */
          )
        ],
        2
        /* CLASS */
      )
    ],
    2
    /* CLASS */
  );
}
const km = _({
  name: v4,
  components: { VarIcon: Xe },
  props: bm,
  setup() {
    const { index: e, steps: n, bindSteps: o } = p4(), { active: t, activeColor: r, inactiveColor: a, direction: i, clickStep: l } = n, s = I(() => t.value === e.value), u = I(() => e.value !== -1 && F(t.value) > e.value);
    o({ index: e });
    function d() {
      return l(e.value);
    }
    return {
      index: e,
      isActive: u,
      isCurrent: s,
      direction: i,
      activeColor: r,
      inactiveColor: a,
      n: m4,
      classes: h4,
      click: d
    };
  }
});
km.render = b4;
var oi = km;
re(oi);
se(oi, bm);
const W5 = oi;
var Ll = oi;
const $m = {
  active: {
    type: [String, Number],
    default: 0
  },
  direction: {
    type: String,
    default: "horizontal"
  },
  activeColor: String,
  inactiveColor: String,
  onClickStep: A()
}, { name: y4, n: k4 } = ee("steps");
function $4(e, n) {
  return b(), P(
    "div",
    {
      class: p(e.n()),
      style: K({ flexDirection: e.direction === "horizontal" ? "row" : "column" })
    },
    [
      V(e.$slots, "default")
    ],
    6
    /* CLASS, STYLE */
  );
}
const wm = _({
  name: y4,
  props: $m,
  setup(e) {
    const n = I(() => e.active), o = I(() => e.activeColor), t = I(() => e.inactiveColor), r = I(() => e.direction), { bindStep: a } = f4();
    a({
      active: n,
      direction: r,
      activeColor: o,
      inactiveColor: t,
      clickStep: l
    });
    function l(s) {
      w(e.onClickStep, s);
    }
    return { n: k4 };
  }
});
wm.render = $4;
var ti = wm;
re(ti);
se(ti, $m);
const K5 = ti;
var Rl = ti;
const Cm = {
  styleVars: {
    type: Object,
    default: () => ({})
  },
  tag: {
    type: String,
    default: "div"
  }
}, { name: w4, n: C4 } = ee("style-provider"), S4 = _({
  name: w4,
  props: Cm,
  setup(e, { slots: n }) {
    return () => id(
      e.tag,
      {
        class: C4(),
        style: Pd(e.styleVars)
      },
      w(n.default)
    );
  }
});
var ri = S4;
const Pi = [];
function ai(e) {
  Pi.forEach((o) => document.documentElement.style.removeProperty(o)), Pi.length = 0;
  const n = Pd(e ?? {});
  Object.entries(n).forEach(([o, t]) => {
    document.documentElement.style.setProperty(o, t), Pi.push(o);
  });
}
ai.Component = ri;
re(ri);
re(ri, ai);
se(ai, Cm);
const q5 = ri;
var Fl = ai;
const Sm = {
  modelValue: {
    default: !1
  },
  activeValue: {
    default: !0
  },
  inactiveValue: {
    default: !1
  },
  lazyChange: Boolean,
  disabled: Boolean,
  readonly: Boolean,
  loading: Boolean,
  color: String,
  loadingColor: String,
  closeColor: String,
  size: [String, Number],
  variant: Boolean,
  rules: Array,
  ripple: {
    type: Boolean,
    default: !0
  },
  validateTrigger: {
    type: Array,
    default: () => ["onChange", "onLazyChange"]
  },
  onClick: A(),
  onBeforeChange: A(),
  onChange: A(),
  "onUpdate:modelValue": A()
}, { name: P4, n: z4, classes: O4 } = ee("switch"), T4 = (e) => (Ho(""), e = e(), Yo(), e), E4 = ["tabindex"], D4 = /* @__PURE__ */ T4(() => /* @__PURE__ */ M(
  "svg",
  { viewBox: "25 25 50 50" },
  [
    /* @__PURE__ */ M("circle", {
      cx: "50",
      cy: "50",
      r: "20",
      fill: "none"
    })
  ],
  -1
  /* HOISTED */
)), B4 = [
  D4
];
function I4(e, n) {
  const o = te("var-hover-overlay"), t = te("var-form-details"), r = Re("ripple"), a = Re("hover");
  return Me((b(), P(
    "div",
    {
      class: p(e.classes(e.n(), [e.variant, e.n("--variant")]))
    },
    [
      M(
        "div",
        {
          ref: "switchRef",
          class: p(e.classes(e.n("block"), [e.disabled || e.formDisabled, e.n("--disabled")], [e.isActive, e.n("block--active")])),
          style: K(e.styleComputed.switch),
          onClick: n[2] || (n[2] = (...i) => e.switchActive && e.switchActive(...i))
        },
        [
          M(
            "div",
            {
              style: K(e.styleComputed.track),
              class: p(e.classes(e.n("track"), [e.isActive, e.n("track--active")], [e.errorMessage && !e.variant, e.n("track--error")]))
            },
            null,
            6
            /* CLASS, STYLE */
          ),
          Me((b(), P("div", {
            class: p(e.classes(e.n("ripple"), [e.isActive, e.n("ripple--active")])),
            style: K(e.styleComputed.ripple),
            tabindex: e.disabled || e.formDisabled ? void 0 : "0",
            onFocus: n[0] || (n[0] = (i) => e.isFocusing = !0),
            onBlur: n[1] || (n[1] = (i) => e.isFocusing = !1)
          }, [
            M(
              "div",
              {
                style: K(e.styleComputed.handle),
                class: p(
                  e.classes(
                    e.n("handle"),
                    e.n("$-elevation--2"),
                    [e.isActive, e.n("handle--active")],
                    [e.errorMessage && !e.variant, e.n("handle--error")],
                    [e.hovering, e.n("handle--hover")]
                  )
                )
              },
              [
                e.loading ? (b(), P(
                  "span",
                  {
                    key: 0,
                    class: p(e.n("loading")),
                    style: K({
                      width: e.radius,
                      height: e.radius
                    })
                  },
                  [...B4],
                  6
                  /* CLASS, STYLE */
                )) : G("v-if", !0)
              ],
              6
              /* CLASS, STYLE */
            ),
            X(o, {
              hovering: e.hovering && !e.disabled && !e.formDisabled,
              focusing: e.isFocusing && !e.disabled && !e.formDisabled
            }, null, 8, ["hovering", "focusing"])
          ], 46, E4)), [
            [r, {
              disabled: !e.ripple || e.disabled || e.loading || e.formDisabled || e.readonly || e.formReadonly
            }]
          ])
        ],
        6
        /* CLASS, STYLE */
      ),
      X(t, { "error-message": e.errorMessage }, null, 8, ["error-message"])
    ],
    2
    /* CLASS */
  )), [
    [a, e.hover, "desktop"]
  ]);
}
const Pm = _({
  name: P4,
  components: {
    VarFormDetails: On,
    VarHoverOverlay: Nn
  },
  directives: { Ripple: on, Hover: zn },
  props: Sm,
  setup(e) {
    const n = $(null), o = $(!1), { bindForm: t, form: r } = Un(), { errorMessage: a, validateWithTrigger: i, validate: l, resetValidation: s } = Fn(), { hovering: u, handleHovering: c } = Xn(), d = I(() => e.modelValue === e.activeValue), f = I(() => {
      const { size: O, color: z, closeColor: E, loadingColor: D, variant: R } = e;
      return {
        handle: {
          width: kn(O),
          height: kn(O),
          backgroundColor: d.value ? z : E,
          color: D
        },
        ripple: {
          left: d.value ? kn(O, 0.5) : `-${kn(O, R ? 1 / 3 : 0.5)}`,
          color: d.value ? z : E || "currentColor",
          width: kn(O, 2),
          height: kn(O, 2)
        },
        track: {
          width: kn(O, R ? 13 / 6 : 1.9),
          height: kn(O, R ? 4 / 3 : 0.72),
          borderRadius: kn(O, 2 / 3),
          filter: d.value || a != null && a.value ? void 0 : `brightness(${R ? 1 : 0.6})`,
          backgroundColor: d.value ? z : E,
          borderWidth: R && !d.value ? kn(O, 1 / 12) : void 0
        },
        switch: {
          width: kn(O, R ? 13 / 6 : 2),
          height: kn(O, R ? 4 / 3 : 1.2)
        }
      };
    }), v = I(() => kn(e.size, 0.8));
    w(t, {
      reset: T,
      validate: y,
      resetValidation: s
    }), je(() => window, "keydown", m), je(() => window, "keyup", k);
    function m(O) {
      o.value && ((O.key === " " || O.key === "Enter") && Ae(O), O.key === "Enter" && n.value.click());
    }
    function k(O) {
      !o.value || O.key !== " " || (Ae(O), n.value.click());
    }
    function y() {
      return l(e.rules, e.modelValue);
    }
    function h(O) {
      He(() => {
        const { validateTrigger: z, rules: E, modelValue: D } = e;
        i(z, O, E, D);
      });
    }
    function C(O) {
      const {
        onClick: z,
        onChange: E,
        disabled: D,
        loading: R,
        readonly: N,
        activeValue: H,
        inactiveValue: L,
        lazyChange: j,
        "onUpdate:modelValue": q,
        onBeforeChange: W
      } = e;
      if (D || r != null && r.disabled.value || (w(z, O), R || N || r != null && r.readonly.value))
        return;
      const ce = d.value ? L : H;
      j ? w(W, ce, (J) => {
        w(q, J), h("onLazyChange");
      }) : (w(E, ce), w(q, ce), h("onChange"));
    }
    function S(O) {
      e.disabled || r != null && r.disabled.value || c(O);
    }
    function T() {
      w(e["onUpdate:modelValue"], e.inactiveValue), s();
    }
    return {
      isActive: d,
      switchRef: n,
      hovering: u,
      isFocusing: o,
      radius: v,
      styleComputed: f,
      errorMessage: a,
      formDisabled: r == null ? void 0 : r.disabled,
      formReadonly: r == null ? void 0 : r.readonly,
      n: z4,
      classes: O4,
      multiplySizeUnit: kn,
      switchActive: C,
      hover: S
    };
  }
});
Pm.render = I4;
var ii = Pm;
re(ii);
se(ii, Sm);
const X5 = ii;
var Ul = ii;
const zm = {
  name: [String, Number],
  disabled: Boolean,
  ripple: {
    type: Boolean,
    default: !0
  },
  onClick: A()
}, Om = Symbol("TABS_BIND_TAB_KEY");
function M4() {
  const { childProviders: e, bindChildren: n, length: o } = mn(Om);
  return {
    length: o,
    tabList: e,
    bindTabList: n
  };
}
function N4() {
  const { parentProvider: e, bindParent: n, index: o } = vn(Om);
  return n || Mn("Tab", "<var-tab/> must in <var-tabs/>"), {
    index: o,
    tabs: e,
    bindTabs: n
  };
}
const { name: A4, n: cr, classes: V4 } = ee("tab");
function L4(e, n) {
  const o = Re("ripple");
  return Me((b(), P(
    "div",
    {
      class: p(e.classes(e.n(), e.n("$--box"), e.computeColorClass(), e.n(`--${e.itemDirection}`))),
      ref: "tabEl",
      style: K({
        color: e.computeColorStyle()
      }),
      onClick: n[0] || (n[0] = (...t) => e.handleClick && e.handleClick(...t))
    },
    [
      V(e.$slots, "default")
    ],
    6
    /* CLASS, STYLE */
  )), [
    [o, { disabled: e.disabled || !e.ripple }]
  ]);
}
const Tm = _({
  name: A4,
  directives: { Ripple: on },
  props: zm,
  setup(e) {
    const n = $(null), o = I(() => n.value), t = I(() => e.name), r = I(() => e.disabled), { index: a, tabs: i, bindTabs: l } = N4(), { onTabClick: s, active: u, activeColor: c, inactiveColor: d, disabledColor: f, itemDirection: v, resize: g } = i, m = {
      name: t,
      index: a,
      disabled: r,
      element: o
    };
    l(m), fe(() => [e.name, e.disabled], g);
    function k() {
      return e.name != null ? u.value === e.name : u.value === (a == null ? void 0 : a.value);
    }
    function y() {
      return e.disabled ? f.value : k() ? c.value : d.value;
    }
    function h() {
      return e.disabled ? cr("$-tab--disabled") : k() ? cr("$-tab--active") : cr("$-tab--inactive");
    }
    function C(S) {
      const { disabled: T, name: O, onClick: z } = e;
      T || (w(z, O ?? a.value, S), s(m));
    }
    return {
      tabEl: n,
      active: u,
      activeColor: c,
      inactiveColor: d,
      itemDirection: v,
      n: cr,
      classes: V4,
      computeColorStyle: y,
      computeColorClass: h,
      handleClick: C
    };
  }
});
Tm.render = L4;
var li = Tm;
re(li);
se(li, zm);
const G5 = li;
var Hl = li;
const Em = {
  name: [String, Number]
}, { name: R4, n: F4, classes: U4 } = ee("tab-item");
function H4(e, n) {
  const o = te("var-swipe-item");
  return b(), Oe(o, {
    class: p(e.classes(e.n(), [!e.current, e.n("--inactive")])),
    "var-tab-item-cover": ""
  }, {
    default: pe(() => [
      V(e.$slots, "default")
    ]),
    _: 3
    /* FORWARDED */
  }, 8, ["class"]);
}
const Dm = _({
  name: R4,
  components: { VarSwipeItem: Vt },
  props: Em,
  setup(e) {
    const n = $(!1), o = I(() => e.name), { index: t, bindTabsItems: r } = qC(), { bindLists: a } = XC(), i = {
      index: t,
      name: o,
      current: I(() => n.value),
      setCurrent: l
    };
    r(i), a(i);
    function l(s) {
      n.value = s;
    }
    return {
      current: n,
      n: F4,
      classes: U4
    };
  }
});
Dm.render = H4;
var si = Dm;
re(si);
se(si, Em);
const Z5 = si;
var Yl = si;
const Bm = {
  fullWidth: {
    type: [Number, String],
    default: "100%"
  },
  scrollerHeight: {
    type: [Number, String]
  },
  elevation: {
    type: [Boolean, Number, String],
    default: !0
  }
}, { name: Y4, n: j4, classes: W4 } = ee("table");
function K4(e, n) {
  return b(), P(
    "div",
    {
      class: p(e.classes(e.n(), e.formatElevation(e.elevation, 1), e.n("$--box")))
    },
    [
      M(
        "div",
        {
          class: p(e.n("main")),
          style: K({ height: e.toSizeUnit(e.scrollerHeight) })
        },
        [
          M(
            "table",
            {
              class: p(e.n("table")),
              style: K({ width: e.toSizeUnit(e.fullWidth) })
            },
            [
              V(e.$slots, "default")
            ],
            6
            /* CLASS, STYLE */
          )
        ],
        6
        /* CLASS, STYLE */
      ),
      e.$slots.footer ? (b(), P(
        "div",
        {
          key: 0,
          class: p(e.n("footer"))
        },
        [
          V(e.$slots, "footer")
        ],
        2
        /* CLASS */
      )) : G("v-if", !0)
    ],
    2
    /* CLASS */
  );
}
const Im = _({
  name: Y4,
  props: Bm,
  setup: () => ({
    toSizeUnit: Te,
    n: j4,
    classes: W4,
    formatElevation: yn
  })
});
Im.render = K4;
var ui = Im;
re(ui);
se(ui, Bm);
const J5 = ui;
var jl = ui;
const Mm = {
  active: {
    type: [String, Number],
    default: 0
  },
  layoutDirection: {
    type: String,
    default: "horizontal"
  },
  itemDirection: {
    type: String,
    default: "horizontal"
  },
  fixedBottom: Boolean,
  activeColor: String,
  inactiveColor: String,
  disabledColor: String,
  color: String,
  indicatorColor: String,
  indicatorSize: [String, Number],
  elevation: {
    type: [Boolean, String, Number],
    default: !1
  },
  scrollable: {
    type: String,
    default: "auto"
  },
  indicatorPosition: {
    type: String,
    default: "normal"
  },
  safeArea: Boolean,
  sticky: Boolean,
  stickyCssMode: Be(wt, "cssMode"),
  stickyZIndex: Be(wt, "zIndex"),
  offsetTop: Be(wt, "offsetTop"),
  onClick: A(),
  onChange: A(),
  "onUpdate:active": A()
};
var Gc = (e, n, o) => new Promise((t, r) => {
  var a = (s) => {
    try {
      l(o.next(s));
    } catch (u) {
      r(u);
    }
  }, i = (s) => {
    try {
      l(o.throw(s));
    } catch (u) {
      r(u);
    }
  }, l = (s) => s.done ? t(s.value) : Promise.resolve(s.value).then(a, i);
  l((o = o.apply(e, n)).next());
});
const { name: q4, n: X4, classes: G4 } = ee("tabs");
function Z4(e, n) {
  return b(), Oe(ct(e.sticky ? e.n("$-sticky") : e.Transition), {
    ref: e.sticky ? "stickyComponent" : void 0,
    "css-mode": e.sticky ? e.stickyCssMode : void 0,
    "offset-top": e.sticky ? e.offsetTop : void 0,
    "z-index": e.sticky ? e.stickyZIndex : void 0
  }, {
    default: pe(() => [
      M(
        "div",
        Ye({
          class: e.classes(
            e.n(),
            e.n("$--box"),
            e.n(`--item-${e.itemDirection}`),
            e.n(`--layout-${e.layoutDirection}-padding`),
            e.formatElevation(e.elevation, 4),
            [e.fixedBottom, e.n("--fixed-bottom")],
            [e.safeArea, e.n("--safe-area")]
          ),
          style: { background: e.color }
        }, e.$attrs),
        [
          M(
            "div",
            {
              ref: "scrollerEl",
              class: p(
                e.classes(
                  e.n("tab-wrap"),
                  [e.localScrollable, e.n(`--layout-${e.layoutDirection}-scrollable`)],
                  e.n(`--layout-${e.layoutDirection}`)
                )
              )
            },
            [
              V(e.$slots, "default"),
              M(
                "div",
                {
                  class: p(e.classes(e.n("indicator"), e.n(`--layout-${e.layoutDirection}${e.indicatorPosition}-indicator`))),
                  style: K({
                    width: e.layoutDirection === "horizontal" ? e.indicatorWidth : e.toSizeUnit(e.indicatorSize),
                    height: e.layoutDirection === "horizontal" ? e.toSizeUnit(e.indicatorSize) : e.indicatorHeight,
                    transform: e.layoutDirection === "horizontal" ? `translateX(${e.indicatorX})` : `translateY(${e.indicatorY})`
                  })
                },
                [
                  M(
                    "div",
                    {
                      class: p(e.classes(e.n("indicator-inner"), e.n(`--layout-${e.layoutDirection}-indicator-inner`))),
                      style: K({ background: e.indicatorColor || e.activeColor })
                    },
                    null,
                    6
                    /* CLASS, STYLE */
                  )
                ],
                6
                /* CLASS, STYLE */
              )
            ],
            2
            /* CLASS */
          )
        ],
        16
        /* FULL_PROPS */
      )
    ]),
    _: 3
    /* FORWARDED */
  }, 8, ["css-mode", "offset-top", "z-index"]);
}
const Nm = _({
  name: q4,
  components: { VarSticky: at },
  inheritAttrs: !1,
  props: Mm,
  setup(e) {
    const n = $("0px"), o = $("0px"), t = $("0px"), r = $("0px"), a = $(!1), i = $(null), l = I(() => e.active), s = I(() => e.activeColor), u = I(() => e.inactiveColor), c = I(() => e.disabledColor), d = I(() => e.itemDirection), f = $(null), v = I(() => e.indicatorPosition === "reverse" ? "-reverse" : ""), { tabList: g, bindTabList: m, length: k } = M4();
    m({
      active: l,
      activeColor: s,
      inactiveColor: u,
      disabledColor: c,
      itemDirection: d,
      resize: D,
      onTabClick: h
    }), fe(
      () => k.value,
      () => Gc(this, null, function* () {
        yield wn(), D();
      })
    ), fe(() => [e.active, e.scrollable], D), Oo(D), To(D);
    function h(N) {
      var H;
      const L = (H = N.name.value) != null ? H : N.index.value, { active: j, onChange: q, onClick: W } = e;
      w(e["onUpdate:active"], L), w(W, L), L !== j && w(q, L);
    }
    function C() {
      return g.find(({ name: N }) => e.active === N.value);
    }
    function S(N) {
      return g.find(({ index: H }) => (N ?? e.active) === H.value);
    }
    function T() {
      if (k.value === 0)
        return;
      const { active: N } = e;
      if (Pn(N)) {
        const H = wo(N, 0, k.value - 1);
        return w(e["onUpdate:active"], H), S(H);
      }
    }
    function O() {
      a.value = e.scrollable === "always" || g.length >= 5;
    }
    function z({ element: N }) {
      const H = N.value;
      H && (e.layoutDirection === "horizontal" ? (n.value = `${H.offsetWidth}px`, t.value = `${H.offsetLeft}px`) : (o.value = `${H.offsetHeight}px`, r.value = `${H.offsetTop}px`));
    }
    function E({ element: N }) {
      if (!a.value)
        return;
      const H = i.value, L = N.value;
      if (e.layoutDirection === "horizontal") {
        const j = L.offsetLeft + L.offsetWidth / 2 - H.offsetWidth / 2;
        Tt(H, {
          left: j,
          animation: Di
        });
      } else {
        const j = L.offsetTop + L.offsetHeight / 2 - H.offsetHeight / 2;
        Tt(H, {
          top: j,
          animation: Di
        });
      }
    }
    function D() {
      const N = C() || S() || T();
      !N || N.disabled.value || (O(), z(N), E(N));
    }
    function R() {
      return Gc(this, null, function* () {
        e.sticky && f.value && (yield f.value.resize());
      });
    }
    return {
      stickyComponent: f,
      indicatorWidth: n,
      indicatorHeight: o,
      indicatorX: t,
      indicatorY: r,
      indicatorPosition: v,
      localScrollable: a,
      scrollerEl: i,
      Transition: Je,
      toSizeUnit: Te,
      n: X4,
      classes: G4,
      resize: D,
      resizeSticky: R,
      formatElevation: yn
    };
  }
});
Nm.render = Z4;
var ci = Nm;
re(ci);
se(ci, Mm);
const Q5 = ci;
var Wl = ci;
const Am = {
  active: {
    type: [String, Number],
    default: 0
  },
  canSwipe: {
    type: Boolean,
    default: !0
  },
  loop: Boolean,
  "onUpdate:active": A()
};
var J4 = (e, n, o) => new Promise((t, r) => {
  var a = (s) => {
    try {
      l(o.next(s));
    } catch (u) {
      r(u);
    }
  }, i = (s) => {
    try {
      l(o.throw(s));
    } catch (u) {
      r(u);
    }
  }, l = (s) => s.done ? t(s.value) : Promise.resolve(s.value).then(a, i);
  l((o = o.apply(e, n)).next());
});
const { name: Q4, n: x4 } = ee("tabs-items");
function _4(e, n) {
  const o = te("var-swipe");
  return b(), Oe(o, {
    class: p(e.n()),
    ref: "swipe",
    loop: e.loop,
    touchable: e.canSwipe,
    indicator: !1,
    onChange: e.handleSwipeChange
  }, {
    default: pe(() => [
      V(e.$slots, "default")
    ]),
    _: 3
    /* FORWARDED */
  }, 8, ["class", "loop", "touchable", "onChange"]);
}
const Vm = _({
  name: Q4,
  components: { VarSwipe: At },
  props: Am,
  setup(e) {
    const n = $(null), { tabItemList: o, bindTabItem: t, length: r } = KC();
    t({}), fe(() => e.active, s), fe(
      () => r.value,
      () => J4(this, null, function* () {
        yield wn(), s(e.active);
      })
    );
    function a(d) {
      return o.find(({ name: f }) => d === f.value);
    }
    function i(d) {
      return o.find(({ index: f }) => d === f.value);
    }
    function l(d) {
      return a(d) || i(d);
    }
    function s(d) {
      var f;
      const v = l(d);
      v && (o.forEach(({ setCurrent: g }) => g(!1)), v.setCurrent(!0), (f = n.value) == null || f.to(v.index.value));
    }
    function u(d) {
      var f;
      const v = o.find(({ index: m }) => m.value === d), g = (f = v.name.value) != null ? f : v.index.value;
      w(e["onUpdate:active"], g);
    }
    function c() {
      return n.value;
    }
    return {
      swipe: n,
      n: x4,
      handleSwipeChange: u,
      getSwipe: c
    };
  }
});
Vm.render = _4;
var di = Vm;
re(di);
se(di, Am);
const x5 = di;
var Kl = di, eP = {
  "--action-sheet-background": "var(--color-surface-container-low)",
  "--action-sheet-title-color": "#aaa",
  "--action-sheet-action-item-color": "#fff",
  "--action-sheet-border-radius": "2px",
  "--action-sheet-border-top": "none",
  "--action-sheet-title-padding": "10px 16px",
  "--action-sheet-title-font-size": "14px",
  "--action-sheet-action-item-height": "48px",
  "--action-sheet-action-item-padding": "0 18px",
  "--action-sheet-action-item-disabled-color": "var(--color-text-disabled)",
  "--action-sheet-icon-margin": "0 20px 0 0",
  "--action-sheet-icon-size": "24px"
}, nP = {
  "--badge-default-color": "#555",
  "--badge-default-text-color": "#fff",
  "--badge-content-padding": "2px 6px",
  "--badge-content-border": "none",
  "--badge-content-border-radius": "100px",
  "--badge-content-font-size": "12px",
  "--badge-icon-size": "12px",
  "--badge-primary-color": "var(--color-primary)",
  "--badge-danger-color": "var(--color-danger)",
  "--badge-success-color": "var(--color-success)",
  "--badge-warning-color": "var(--color-warning)",
  "--badge-info-color": "var(--color-info)",
  "--badge-primary-text-color": "var(--color-on-primary)",
  "--badge-danger-text-color": "var(--color-on-danger)",
  "--badge-success-text-color": "var(--color-on-success)",
  "--badge-warning-text-color": "var(--color-on-warning)",
  "--badge-info-text-color": "var(--color-on-info)",
  "--badge-dot-width": "8px",
  "--badge-dot-height": "8px"
}, oP = {
  "--button-default-color": "#303030",
  "--button-default-text-color": "#fff",
  "--button-default-icon-container-color": "#303030",
  "--button-default-icon-color": "#fff",
  "--button-primary-text-color": "var(--color-on-primary)",
  "--button-danger-text-color": "var(--color-on-danger)",
  "--button-success-text-color": "var(--color-on-success)",
  "--button-warning-text-color": "var(--color-on-warning)",
  "--button-info-text-color": "var(--color-on-info)",
  "--button-primary-color": "var(--color-primary)",
  "--button-danger-color": "var(--color-danger)",
  "--button-success-color": "var(--color-success)",
  "--button-warning-color": "var(--color-warning)",
  "--button-info-color": "var(--color-info)",
  "--button-primary-icon-color": "var(--color-on-primary-container)",
  "--button-danger-icon-color": "var(--color-on-danger-container)",
  "--button-success-icon-color": "var(--color-on-success-container)",
  "--button-warning-icon-color": "var(--color-on-warning-container)",
  "--button-info-icon-color": "var(--color-on-info-container)",
  "--button-primary-icon-container-color": "var(--color-primary-container)",
  "--button-danger-icon-container-color": "var(--color-danger-container)",
  "--button-success-icon-container-color": "var(--color-success-container)",
  "--button-warning-icon-container-color": "var(--color-warning-container)",
  "--button-info-icon-container-color": "var(--color-info-container)",
  "--button-disabled-color": "var(--color-disabled)",
  "--button-disabled-text-color": "var(--color-text-disabled)",
  "--button-border-radius": "4px",
  "--button-mini-padding": "0 8px",
  "--button-small-padding": "0 12px",
  "--button-normal-padding": "0 16px",
  "--button-large-padding": "0 22px",
  "--button-round-padding": "6px",
  "--button-mini-height": "20px",
  "--button-small-height": "28px",
  "--button-normal-height": "36px",
  "--button-large-height": "44px",
  "--button-mini-font-size": "var(--font-size-xs)",
  "--button-small-font-size": "var(--font-size-sm)",
  "--button-normal-font-size": "var(--font-size-md)",
  "--button-large-font-size": "var(--font-size-lg)"
}, tP = {
  "--card-title-color": "#ffffff",
  "--card-subtitle-color": "#aaaaaa",
  "--card-description-color": "#aaaaaa",
  "--card-padding": "0 0 15px 0",
  "--card-background": "var(--color-surface-container-highest)",
  "--card-outline-color": "var(--color-outline)",
  "--card-border-radius": "4px",
  "--card-image-width": "100%",
  "--card-row-image-width": "140px",
  "--card-image-height": "200px",
  "--card-row-height": "140px",
  "--card-title-font-size": "20px",
  "--card-title-padding": "0 12px",
  "--card-title-margin": "15px 0 0 0",
  "--card-title-row-margin": "12px 0",
  "--card-subtitle-font-size": "14px",
  "--card-subtitle-padding": "0 12px",
  "--card-subtitle-margin": "10px 0 0 0",
  "--card-subtitle-row-margin": "-8px 0 0 0",
  "--card-description-font-size": "14px",
  "--card-description-margin": "20px 0 0 0",
  "--card-description-padding": "0 13px",
  "--card-footer-padding": "0 12px",
  "--card-footer-right": "13px",
  "--card-footer-bottom": "9px",
  "--card-footer-margin": "30px 0 0 0",
  "--card-line-height": "22px",
  "--card-row-line-height": "1.5",
  "--card-floating-buttons-bottom": "16px",
  "--card-floating-buttons-right": "16px",
  "--card-floating-buttons-color": "#fff",
  "--card-close-button-icon-size": "24px",
  "--card-close-button-size": "56px",
  "--card-close-button-primary-color": "#212121",
  "--card-close-button-text-color": "#fff",
  "--card-close-button-border-radius": "50%"
}, rP = {
  "--cell-description-color": "#aaa",
  "--cell-color": "var(--color-text)",
  "--cell-font-size": "var(--font-size-md)",
  "--cell-description-font-size": "var(--font-size-sm)",
  "--cell-description-margin-top": "4px",
  "--cell-padding": "10px 12px",
  "--cell-min-height": "40px",
  "--cell-border-color": "var(--color-outline)",
  "--cell-border-left": "12px",
  "--cell-border-right": "12px",
  "--cell-icon-right": "8px",
  "--cell-extra-left": "8px"
}, aP = {
  "--checkbox-unchecked-color": "#fff",
  "--checkbox-text-color": "#fff",
  "--checkbox-checked-color": "var(--color-primary)",
  "--checkbox-disabled-color": "var(--color-text-disabled)",
  "--checkbox-error-color": "var(--color-danger)",
  "--checkbox-action-padding": "6px",
  "--checkbox-icon-size": "24px"
}, iP = {
  "--chip-default-color": "#555",
  "--chip-default-text-color": "#fff",
  "--chip-primary-text-color": "var(--color-on-primary-container)",
  "--chip-danger-text-color": "var(--color-on-danger-container)",
  "--chip-success-text-color": "var(--color-on-success-container)",
  "--chip-warning-text-color": "var(--color-on-warning-container)",
  "--chip-info-text-color": "var(--color-on-info-container)",
  "--chip-primary-color": "var(--color-primary-container)",
  "--chip-danger-color": "var(--color-danger-container)",
  "--chip-success-color": "var(--color-success-container)",
  "--chip-warning-color": "var(--color-warning-container)",
  "--chip-info-color": "var(--color-info-container)",
  "--chip-primary-plain-color": "var(--color-primary)",
  "--chip-danger-plain-color": "var(--color-danger)",
  "--chip-success-plain-color": "var(--color-success)",
  "--chip-warning-plain-color": "var(--color-warning)",
  "--chip-info-plain-color": "var(--color-info)",
  "--chip-border-radius": "2px",
  "--chip-normal-height": "32px",
  "--chip-large-height": "40px",
  "--chip-small-height": "24px",
  "--chip-mini-height": "16px",
  "--chip-round-radius": "100px",
  "--chip-normal-padding": "0 10px",
  "--chip-large-padding": "0 17px",
  "--chip-small-padding": "0 6px",
  "--chip-mini-padding": "0 4px",
  "--chip-text-normal-margin": "0 5px",
  "--chip-text-large-margin": "0 5px",
  "--chip-text-small-margin": "0 3px",
  "--chip-text-mini-margin": "0 2px",
  "--chip-mini-font-size": "var(--font-size-xs)",
  "--chip-small-font-size": "var(--font-size-sm)",
  "--chip-normal-font-size": "var(--font-size-md)",
  "--chip-large-font-size": "var(--font-size-lg)"
}, lP = {
  "--collapse-text-color": "#fff",
  "--collapse-background": "var(--color-surface-container-highest)",
  "--collapse-header-font-size": "var(--font-size-lg)",
  "--collapse-header-padding": "10px 12px",
  "--collapse-content-font-size": "var(--font-size-md)",
  "--collapse-content-padding": "0 12px 10px",
  "--collapse-item-margin-top": "16px",
  "--collapse-disable-color": "#bdbdbd",
  "--collapse-border-top": "thin solid var(--color-outline)"
}, sP = {
  "--date-picker-main-color": "#fff",
  "--date-picker-body-background-color": "#303030",
  "--day-picker-head-item-color": "#aaaaaa",
  "--year-picker-item-color": "#fff",
  "--date-picker-header-color": "#fff",
  "--date-picker-border-radius": "4px",
  "--date-picker-font-size": "var(--font-size-md)",
  "--date-picker-min-width": "290px",
  "--date-picker-title-hint-color": "#fff",
  "--date-picker-title-hint-font-size": "var(--font-size-md)",
  "--date-picker-title-height": "105px",
  "--date-picker-title-padding": "16px",
  "--date-picker-title-background": "var(--color-primary)",
  "--date-picker-title-color": "#fff",
  "--date-picker-title-year-font-size": "var(--font-size-md)",
  "--date-picker-title-year-font-weight": "500",
  "--date-picker-title-year-margin-bottom": "8px",
  "--date-picker-title-date-height": "48px",
  "--date-picker-title-date-font-size": "34px",
  "--date-picker-title-date-font-weight": "500",
  "--date-picker-title-date-range-font-size": "20px",
  "--date-picker-title-date-justify-content": "normal",
  "--date-picker-body-height": "280px",
  "--date-picker-body-padding": "0",
  "--date-picker-header-padding": "4px 16px",
  "--date-picker-actions-padding": "0 8px 12px 8px",
  "--date-picker-header-arrow-filter": "opacity(0.54)",
  "--month-picker-padding": "0 12px",
  "--month-picker-item-width": "33%",
  "--month-picker-item-height": "56px",
  "--month-picker-item-button-max-width": "140px",
  "--year-picker-padding": "0 12px",
  "--year-picker-item-width": "33%",
  "--year-picker-item-height": "56px",
  "--year-picker-item-button-max-width": "140px",
  "--day-picker-content-item-width": "14.28%",
  "--day-picker-content-item-font-size": "var(--font-size-sm)",
  "--day-picker-content-item-padding": "2px 0",
  "--day-picker-content-item-button-width": "32px",
  "--day-picker-content-item-button-height": "32px",
  "--day-picker-content-item-button-font-size": "var(--font-size-sm)",
  "--day-picker-head-item-padding": "8px 0",
  "--day-picker-head-item-font-weight": "600"
}, uP = {
  "--dialog-title-color": "#fff",
  "--dialog-message-color": "#bbb",
  "--dialog-width": "280px",
  "--dialog-border-radius": "3px",
  "--dialog-title-padding": "20px 20px 0",
  "--dialog-message-padding": "12px 20px",
  "--dialog-message-line-height": "24px",
  "--dialog-message-font-size": "var(--font-size-md)",
  "--dialog-title-font-size": "var(--font-size-lg)",
  "--dialog-actions-padding": "0 12px 12px",
  "--dialog-button-margin-left": "6px",
  "--dialog-confirm-button-color": "var(--color-primary)",
  "--dialog-cancel-button-color": "var(--color-primary)",
  "--dialog-background": "var(--color-surface-container-low)"
}, cP = {
  "--divider-text-color": "#aaa",
  "--divider-color": "var(--color-outline)",
  "--divider-text-margin": "8px 0",
  "--divider-text-padding": "0 8px",
  "--divider-inset": "72px"
}, dP = {
  "--field-decorator-text-color": "#fff",
  "--field-decorator-blur-color": "rgb(255, 255, 255, .7)",
  "--field-decorator-error-color": "var(--color-danger)",
  "--field-decorator-focus-color": "var(--color-primary)",
  "--field-decorator-placeholder-size": "16px",
  "--field-decorator-icon-size": "20px",
  "--field-decorator-line-size": "1px",
  "--field-decorator-line-focus-size": "2px",
  "--field-decorator-line-border-radius": "4px",
  "--field-decorator-disabled-color": "var(--color-text-disabled)",
  "--field-decorator-standard-normal-margin-top": "22px",
  "--field-decorator-standard-normal-margin-bottom": "4px",
  "--field-decorator-standard-normal-icon-margin-top": "22px",
  "--field-decorator-standard-normal-icon-margin-bottom": "4px",
  "--field-decorator-standard-normal-non-hint-margin-top": "4px",
  "--field-decorator-standard-small-margin-top": "18px",
  "--field-decorator-standard-small-margin-bottom": "4px",
  "--field-decorator-standard-small-icon-margin-top": "18px",
  "--field-decorator-standard-small-icon-margin-bottom": "4px",
  "--field-decorator-standard-small-non-hint-margin-top": "2px",
  "--field-decorator-outlined-normal-margin-top": "16px",
  "--field-decorator-outlined-normal-margin-bottom": "16px",
  "--field-decorator-outlined-normal-padding-left": "16px",
  "--field-decorator-outlined-normal-padding-right": "16px",
  "--field-decorator-outlined-normal-placeholder-space": "4px",
  "--field-decorator-outlined-normal-icon-margin-top": "16px",
  "--field-decorator-outlined-normal-icon-margin-bottom": "16px",
  "--field-decorator-outlined-small-margin-top": "8px",
  "--field-decorator-outlined-small-margin-bottom": "8px",
  "--field-decorator-outlined-small-padding-left": "12px",
  "--field-decorator-outlined-small-padding-right": "12px",
  "--field-decorator-outlined-small-placeholder-space": "2px",
  "--field-decorator-outlined-small-icon-margin-top": "8px",
  "--field-decorator-outlined-small-icon-margin-bottom": "8px"
}, fP = {
  "--pagination-text-color": "#fff",
  "--pagination-hover-bg-color": "rgba(255, 255, 255, .15)",
  "--pagination-item-background": "#303030",
  "--pagination-font-size": "var(--font-size-md)",
  "--pagination-active-color": "var(--color-on-primary)",
  "--pagination-active-bg-color": "var(--color-primary)",
  "--pagination-total-margin": "0 12px",
  "--pagination-total-line-height": "24px",
  "--pagination-item-width": "32px",
  "--pagination-item-height": "32px",
  "--pagination-item-margin": "0 6px",
  "--pagination-item-border-radius": "4px",
  "--pagination-item-simple-border-radius": "50%",
  "--pagination-input-width": "32px",
  "--pagination-disabled-color": "var(--color-text-disabled)",
  "--pagination-bg-disabled-color": "var(--color-disabled)",
  "--pagination-size-line-height": "24px",
  "--pagination-size-padding": "0 6px"
}, pP = {
  "--picker-background": "#1e1e1e",
  "--picker-cancel-button-text-color": "#aaa",
  "--picker-title-text-color": "#fff",
  "--picker-option-text-color": "#fff",
  "--picker-mask-background-image": "linear-gradient(180deg, hsla(0, 0%, 12%, 0.9), hsla(0, 0%, 12%, 0.4)), linear-gradient(0deg, hsla(0, 0%, 12%, 0.9), hsla(0, 0%, 12%, 0.4))",
  "--picker-toolbar-height": "44px",
  "--picker-confirm-button-text-color": "var(--color-primary)",
  "--picker-picked-border": "1px solid var(--color-outline)",
  "--picker-title-font-size": "var(--font-size-lg)",
  "--picker-option-font-size": "var(--font-size-lg)",
  "--picker-toolbar-padding": "0 4px"
}, vP = {
  "--popup-content-background-color": "var(--color-surface-container-low)",
  "--popup-overlay-background-color": "rgba(0, 0, 0, 0.6)"
}, mP = {
  "--pull-refresh-background": "#303030",
  "--pull-refresh-size": "40px",
  "--pull-refresh-color": "var(--color-primary)",
  "--pull-refresh-success-color": "var(--color-success)",
  "--pull-refresh-icon-size": "25px"
}, hP = {
  "--radio-unchecked-color": "#fff",
  "--radio-text-color": "#fff",
  "--radio-checked-color": "var(--color-primary)",
  "--radio-disabled-color": "var(--color-text-disabled)",
  "--radio-error-color": "var(--color-danger)",
  "--radio-icon-size": "24px",
  "--radio-action-padding": "6px"
}, gP = {
  "--result-background": "#303030",
  "--result-title-color": "#ffffff",
  "--result-description-color": "#aaaaaa",
  "--result-question-color": "#7f8e96",
  "--result-question-border-color": "rgba(151,194,216,0.3)",
  "--result-empty-color": "#adadad",
  "--result-empty-border-color": "rgba(232,229,229,0.3)",
  "--result-padding": "24px",
  "--result-border-radius": "3px",
  "--result-title-font-size": "32px",
  "--result-title-margin": "15px 0 0 0",
  "--result-image-size": "80px",
  "--result-title-font-weight": "500",
  "--result-description-margin": "10px 0 0 0",
  "--result-description-font-size": "14px",
  "--result-description-line-height": "1.6",
  "--result-info-color": "var(--color-info)",
  "--result-info-border-color": "rgba(0, 175, 239, 0.3)",
  "--result-success-color": "var(--color-success)",
  "--result-success-border-color": "rgba(0, 196, 143, 0.3)",
  "--result-error-color": "var(--color-danger)",
  "--result-error-border-color": "rgba(244, 67, 54, 0.3)",
  "--result-warning-color": "var(--color-warning)",
  "--result-warning-border-color": "rgba(255, 159, 0, 0.3)"
}, bP = {
  "--skeleton-card-background-color": "hsla(0,0%,100%,.12)",
  "--skeleton-animation-background": `linear-gradient(
        90deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.05),hsla(0,0%,100%,0))
      `,
  "--skeleton-avatar-background-color": "hsla(0,0%,100%,.12)",
  "--skeleton-title-background-color": "hsla(0,0%,100%,.12)",
  "--skeleton-content-padding": "16px",
  "--skeleton-card-height": "160px",
  "--skeleton-card-border-radius": "4px",
  "--skeleton-card-margin-bottom": "16px",
  "--skeleton-avatar-size": "34px",
  "--skeleton-avatar-border-radius": "50%",
  "--skeleton-avatar-margin-right": "16px",
  "--skeleton-title-width": "50%",
  "--skeleton-title-border-radius": "10px",
  "--skeleton-row-height": "12px",
  "--skeleton-row-border-radius": "10px",
  "--skeleton-row-margin-top": "10px"
}, yP = {
  "--step-content-color": "rgba(255, 255, 255, .38)",
  "--step-content-active-color": "#fff",
  "--step-line-background": "#fff",
  "--step-tag-size": "20px",
  "--step-tag-background": "#9e9e9e",
  "--step-tag-font-size": "var(--font-size-md)",
  "--step-tag-color": "var(--color-on-primary)",
  "--step-tag-active-color": "var(--color-primary)",
  "--step-tag-margin": "4px 0",
  "--step-tag-icon-size": "var(--font-size-lg)",
  "--step-content-font-size": "var(--font-size-md)",
  "--step-line-gap": "8px",
  "--step-vertical-tag-margin": "0 4px",
  "--step-vertical-min-height": "50px"
}, kP = {
  "--switch-track-background": "#727272",
  "--switch-handle-background": "#727272",
  "--switch-track-active-background": "var(--color-primary)",
  "--switch-track-error-background": "var(--color-danger)",
  "--switch-ripple-color": "var(--color-primary)",
  "--switch-handle-color": "var(--color-on-primary)",
  "--switch-handle-active-color": "var(--color-on-primary)",
  "--switch-handle-active-background": "var(--color-primary)",
  "--switch-handle-error-background": "var(--color-danger)",
  "--switch-disabled-opacity": "var(--opacity-disabled)",
  "--switch-variant-width": "52px",
  "--switch-variant-height": "32px",
  "--switch-variant-track-background": "var(--color-surface-container-highest)",
  "--switch-variant-handle-width": "24px",
  "--switch-variant-handle-height": "24px",
  "--switch-variant-track-border-color": "rgb(255, 255, 255, .7)",
  "--switch-variant-handle-background": "rgb(255, 255, 255, .7)",
  "--switch-variant-handle-color": "var(--color-primary)",
  "--switch-variant-handle-active-color": "var(--color-primary)",
  "--switch-variant-handle-active-background": "var(--color-on-primary)"
}, $P = {
  "--tab-inactive-color": "rgba(255, 255, 255, .65)",
  "--tab-padding": "12px",
  "--tab-active-color": "var(--color-primary)",
  "--tab-disabled-color": "var(--color-text-disabled)",
  "--tab-font-size": "var(--font-size-md)",
  "--tab-font-weight": "400",
  "--tab-active-font-size": "var(--font-size-md)",
  "--tab-active-font-weight": "400"
}, wP = {
  "--table-background": "#303030",
  "--table-thead-th-text-color": "rgba(255, 255, 255, 0.6)",
  "--table-thead-th-text-align": "left",
  "--table-tbody-td-text-color": "#fff",
  "--table-tbody-tr-hover-background": "#4c4b4b",
  "--table-border-radius": "2px",
  "--table-thead-border-bottom": "thin solid var(--color-outline)",
  "--table-thead-th-font-size": "14px",
  "--table-thead-tr-border-bottom": "thin solid var(--color-outline)",
  "--table-tbody-tr-border-bottom": "thin solid var(--color-outline)",
  "--table-tbody-td-font-size": "16px",
  "--table-tbody-td-text-align": "left",
  "--table-row-height": "46px",
  "--table-row-padding": "0 16px",
  "--table-footer-border-top": "thin solid var(--color-outline)"
}, CP = {
  "--time-picker-clock-container-background": "#545454",
  "--time-picker-body-background": "#303030",
  "--time-picker-clock-item-disable-color": "#fff",
  "--time-picker-clock-item-disable-background": "#aaaaaa",
  "--time-picker-clock-item-text-color": "#fff",
  "--time-picker-border-radius": "4px",
  "--time-picker-font-size": "var(--font-size-md)",
  "--time-picker-min-width": "290px",
  "--time-picker-title-height": "105px",
  "--time-picker-title-padding": "16px",
  "--time-picker-title-margin-bottom": "8px",
  "--time-picker-title-color": "#fff",
  "--time-picker-title-background": "var(--color-primary)",
  "--time-picker-title-hint-color": "#fff",
  "--time-picker-title-hint-font-size": "14px",
  "--time-picker-title-inactive-opacity": "0.6",
  "--time-picker-title-time-font-size": "50px",
  "--time-picker-title-time-margin": "0 5px",
  "--time-picker-title-time-border-radius": "0",
  "--time-picker-title-time-padding": "0",
  "--time-picker-title-time-background": "transparent",
  "--time-picker-title-time-active-background": "transparent",
  "--time-picker-title-ampm-button-active-background": "transparent",
  "--time-picker-title-ampm-margin-left": "10px",
  "--time-picker-title-ampm-border-radius": "0",
  "--time-picker-title-ampm-border": "none",
  "--time-picker-title-ampm-button-padding": "2px",
  "--time-picker-clock-left": "27px",
  "--time-picker-clock-right": "27px",
  "--time-picker-clock-top": "27px",
  "--time-picker-clock-bottom": "27px",
  "--time-picker-clock-container-width": "256px",
  "--time-picker-clock-container-height": "256px",
  "--time-picker-clock-hand-height": "calc(50% - 4px)",
  "--time-picker-clock-hand-width": "2px",
  "--time-picker-clock-hand-bottom": "50%",
  "--time-picker-clock-hand-left": "calc(50% - 1px)",
  "--time-picker-clock-hand-background": "var(--color-primary)",
  "--time-picker-clock-hand-border-color": "var(--color-primary)",
  "--time-picker-clock-hand-before-width": "10px",
  "--time-picker-clock-hand-before-height": "10px",
  "--time-picker-clock-hand-before-border-width": "2px",
  "--time-picker-clock-hand-after-width": "4px",
  "--time-picker-clock-hand-after-height": "4px",
  "--time-picker-clock-item-height": "32px",
  "--time-picker-clock-item-width": "32px",
  "--time-picker-clock-item-active-background": "var(--color-primary)",
  "--time-picker-clock-item-active-color": "var(--color-on-primary)",
  "--time-picker-inner-left": "36px",
  "--time-picker-inner-right": "36px",
  "--time-picker-inner-top": "36px",
  "--time-picker-inner-bottom": "36px",
  "--time-picker-body-height": "288px",
  "--time-picker-actions-padding": "0 8px 12px 8px",
  "--time-picker-title-time-container-justify-content": "flex-end"
}, SP = {
  "--uploader-action-background": "#303030",
  "--uploader-action-icon-color": "#fff",
  "--uploader-file-name-background": "#303030",
  "--uploader-file-name-color": "#aaa",
  "--uploader-file-cover-background": "#303030",
  "--uploader-action-icon-size": "24px",
  "--uploader-action-margin": "0 10px 10px 0",
  "--uploader-file-size": "80px",
  "--uploader-file-margin": "0 10px 10px 0",
  "--uploader-file-name-font-size": "12px",
  "--uploader-file-name-padding": "10px",
  "--uploader-file-text-align": "center",
  "--uploader-file-border-radius": "0",
  "--uploader-file-close-background": "rgba(0, 0, 0, 0.3)",
  "--uploader-file-close-size": "24px",
  "--uploader-file-close-icon-font-size": "14px",
  "--uploader-file-close-icon-color": "#fff",
  "--uploader-file-cover-fit": "cover",
  "--uploader-preview-video-width": "100vw",
  "--uploader-preview-video-height": "100vw",
  "--uploader-file-indicator-height": "4px",
  "--uploader-file-indicator-normal-color": "var(--color-disabled)",
  "--uploader-file-indicator-success-color": "var(--color-success)",
  "--uploader-file-indicator-error-color": "var(--color-danger)",
  "--uploader-file-progress-color": "var(--color-primary)",
  "--uploader-disabled-color": "var(--color-disabled)",
  "--uploader-disabled-text-color": "var(--color-text-disabled)",
  "--uploader-loading-background": "linear-gradient(90deg, hsla(0, 0%, 100%, 0), hsla(0, 0%, 100%, 0.3), hsla(0, 0%, 100%, 0))"
}, PP = {
  "--tabs-background": "#1e1e1e",
  "--tabs-item-horizontal-height": "44px",
  "--tabs-item-vertical-height": "66px",
  "--tabs-radius": "2px",
  "--tabs-padding": "12px",
  "--tabs-indicator-size": "2px",
  "--tabs-indicator-border-radius": "0",
  "--tabs-indicator-background": "var(--color-primary)",
  "--tabs-indicator-inner-size": "100%"
}, zP = {
  "--app-bar-color": "#272727",
  "--app-bar-title-padding": "0 12px",
  "--app-bar-title-font-size": "var(--font-size-lg)",
  "--app-bar-text-color": "#fff",
  "--app-bar-height": "54px",
  "--app-bar-left-gap": "6px",
  "--app-bar-right-gap": "6px",
  "--app-bar-border-radius": "4px",
  "--app-bar-font-size": "var(--font-size-lg)"
}, OP = {
  "--bottom-navigation-item-inactive-color": "#BFBFBF",
  "--bottom-navigation-item-font-size": "var(--font-size-sm)",
  "--bottom-navigation-item-active-color": "var(--color-primary)",
  "--bottom-navigation-item-active-background-color": "var(--color-surface-container-high)",
  "--bottom-navigation-item-variant-active-background-color": "var(--color-primary-container)",
  "--bottom-navigation-item-variant-active-color": "var(--color-on-primary-container)",
  "--bottom-navigation-fab-border-radius": "50%",
  "--bottom-navigation-item-line-height": "1",
  "--bottom-navigation-item-icon-size": "22px",
  "--bottom-navigation-item-icon-margin-bottom": "5px",
  "--bottom-navigation-item-variant-icon-container-height": "30px",
  "--bottom-navigation-item-variant-icon-container-border-radius": "100px",
  "--bottom-navigation-item-variant-icon-container-max-width": "58px"
}, TP = {
  "--menu-background-color": "#272727",
  "--menu-border-radius": "2px"
}, EP = {
  "--breadcrumb-inactive-color": "#aaa",
  "--breadcrumb-active-color": "var(--color-primary)",
  "--breadcrumb-separator-margin": "0 10px",
  "--breadcrumb-separator-font-size": "14px"
}, DP = {
  "--avatar-background-color": "#303030",
  "--avatar-border": "2px solid #1e1e1e",
  "--avatar-text-color": "#f5f5f5",
  "--avatar-border-radius": "4px",
  "--avatar-mini-size": "28px",
  "--avatar-small-size": "36px",
  "--avatar-normal-size": "48px",
  "--avatar-large-size": "64px",
  "--avatar-hover-transform": "scale(1.1)"
}, BP = {
  "--link-default-color": "#fff",
  "--link-primary-color": "var(--color-primary)",
  "--link-danger-color": "var(--color-danger)",
  "--link-success-color": "var(--color-success)",
  "--link-warning-color": "var(--color-warning)",
  "--link-info-color": "var(--color-info)",
  "--link-disabled-color": "var(--color-text-disabled)",
  "--link-font-size": "var(--font-size-md)",
  "--link-focus-opacity": "0.8"
}, IP = {
  "--progress-label-color": "#fff",
  "--progress-font-size": "var(--font-size-sm)",
  "--progress-track-color": "#d8d8d8",
  "--progress-background": "var(--color-primary)",
  "--progress-default-color": "#f5f5f5",
  "--progress-primary-color": "var(--color-primary)",
  "--progress-danger-color": "var(--color-danger)",
  "--progress-success-color": "var(--color-success)",
  "--progress-warning-color": "var(--color-warning)",
  "--progress-info-color": "var(--color-info)",
  "--progress-linear-border-radius": "0px"
}, MP = {
  "--option-text-color": "#fff",
  "--option-height": "38px",
  "--option-padding": "0 12px",
  "--option-font-size": "16px",
  "--option-selected-background": "var(--field-decorator-focus-color)",
  "--option-disabled-color": "var(--color-text-disabled)"
}, NP = {
  "--watermark-content-color": "#ffffff"
}, AP = {
  "--menu-select-menu-background-color": "#272727",
  "--menu-select-menu-max-height": "278px",
  "--menu-select-menu-padding": "0",
  "--menu-select-menu-border-radius": "2px"
}, VP = {
  "--menu-option-text-color": "#fff",
  "--menu-option-normal-height": "38px",
  "--menu-option-small-height": "30px",
  "--menu-option-mini-height": "24px",
  "--menu-option-large-height": "46px",
  "--menu-option-padding": "0 12px",
  "--menu-option-normal-font-size": "var(--font-size-md)",
  "--menu-option-small-font-size": "var(--font-size-sm)",
  "--menu-option-mini-font-size": "var(--font-size-xs)",
  "--menu-option-large-font-size": "var(--font-size-lg)",
  "--menu-option-selected-background": "var(--color-primary)",
  "--menu-option-disabled-color": "var(--color-text-disabled)"
}, LP = {
  "--avatar-group-offset": "-10px"
}, RP = {
  "--back-top-right": "40px",
  "--back-top-bottom": "40px",
  "--back-top-button-size": "40px",
  "--back-top-button-border-radius": "50%"
}, FP = {
  "--bottom-navigation-height": "50px",
  "--bottom-navigation-variant-height": "66px",
  "--bottom-navigation-z-index": "1",
  "--bottom-navigation-background-color": "var(--color-surface-container-high)",
  "--bottom-navigation-border-color": "var(--color-outline)",
  "--bottom-navigation-fab-offset": "4px",
  "--bottom-navigation-fab-border-radius": "50%"
}, UP = {
  "--countdown-text-color": "var(--color-text)",
  "--countdown-text-font-size": "var(--font-size-lg)"
}, HP = {
  "--counter-padding": "0 4px",
  "--counter-font-color": "#fff",
  "--counter-background": "var(--color-primary)",
  "--counter-input-width": "28px",
  "--counter-input-margin": "0 4px",
  "--counter-input-font-size": "14px",
  "--counter-button-size": "28px",
  "--counter-button-text-color": "#fff",
  "--counter-button-icon-size": "100%",
  "--counter-disabled-color": "var(--color-disabled)",
  "--counter-disabled-opacity": "var(--opacity-disabled)",
  "--counter-error-color": "var(--color-danger)"
}, YP = {
  "--fab-top": "70px",
  "--fab-bottom": "16px",
  "--fab-left": "16px",
  "--fab-right": "16px",
  "--fab-trigger-size": "56px",
  "--fab-trigger-border-radius": "50%",
  "--fab-trigger-inactive-icon-size": "26px",
  "--fab-trigger-active-icon-size": "22px",
  "--fab-actions-padding": "10px 0",
  "--fab-action-margin": "6px",
  "--fab-action-size": "40px",
  "--fab-action-border-radius": "50%",
  "--fab-transition-standard-easing": "cubic-bezier(0.4, 0, 0.2, 1)"
}, jP = {
  "--floating-panel-z-index": "999",
  "--floating-panel-border-top": "none",
  "--floating-panel-border-radius": "0",
  "--floating-panel-background": "var(--color-surface-container-high)",
  "--floating-panel-header-height": "30px",
  "--floating-panel-toolbar-width": "20px",
  "--floating-panel-toolbar-height": "3px",
  "--floating-panel-toolbar-border-radius": "10px",
  "--floating-panel-toolbar-background": "#ddd",
  "--floating-panel-transition-timing-function": "cubic-bezier(0.18, 0.89, 0.32, 1.28)"
}, WP = {
  "--form-details-error-message-color": "var(--color-danger)",
  "--form-details-extra-message-color": "#888",
  "--form-details-margin-top": "6px",
  "--form-details-font-size": "12px",
  "--form-details-message-margin-right": "4px"
}, KP = {
  "--hover-overlay-opacity": "var(--opacity-hover)",
  "--hover-overlay-focusing-opacity": "var(--opacity-focus)"
}, qP = {
  "--icon-size": "20px"
}, XP = {
  "--image-preview-swipe-indicators-text-color": "#ddd",
  "--image-preview-swipe-indicators-padding": "16px 0",
  "--image-preview-zoom-container-background": "#000",
  "--image-preview-close-icon-top": "14px",
  "--image-preview-close-icon-right": "14px",
  "--image-preview-extra-top": "14px",
  "--image-preview-extra-left": "14px",
  "--image-preview-close-icon-size": "22px",
  "--image-preview-close-icon-color": "#fff"
}, GP = {
  "--index-bar-list-right": "0",
  "--index-bar-list-top": "50%",
  "--index-bar-list-left": "auto",
  "--index-bar-list-bottom": "auto",
  "--index-bar-list-transform": "translate(0, -50%)",
  "--index-bar-list-item-font-size": "var(--font-size-xs)",
  "--index-bar-list-item-color": "var(--color-primary)",
  "--index-bar-list-item-active-color": "var(--color-danger)",
  "--index-bar-list-item-height": "14px",
  "--index-bar-list-item-padding": "0 10px"
}, ZP = {
  "--input-input-height": "24px",
  "--input-input-font-size": "16px",
  "--input-textarea-height": "auto"
}, JP = {
  "--list-loading-height": "50px",
  "--list-finished-height": "50px",
  "--list-error-height": "50px",
  "--list-loading-color": "#888",
  "--list-finished-color": "#888",
  "--list-error-color": "#888",
  "--list-loading-font-size": "var(--font-size-md)",
  "--list-finished-font-size": "var(--font-size-md)",
  "--list-error-font-size": "var(--font-size-md)"
}, QP = {
  "--loading-color": "var(--color-primary)",
  "--loading-opacity": "0.38",
  "--loading-desc-margin": "8px 0 0",
  "--loading-desc-color": "var(--color-primary)"
}, xP = {
  "--loading-bar-color": "var(--color-primary)",
  "--loading-bar-error-color": "var(--color-danger)",
  "--loading-bar-height": "3px"
}, _P = {
  "--overlay-background-color": "rgba(0, 0, 0, 0.6)"
}, ez = {
  "--paper-background": "var(--color-surface-container-highest)",
  "--paper-border-radius": "4px"
}, nz = {
  "--rate-color": "var(--color-text)",
  "--rate-size": "24px",
  "--rate-disabled-color": "var(--color-text-disabled)",
  "--rate-error-color": "var(--color-danger)",
  "--rate-action-padding": "4px",
  "--rate-primary-color": "var(--color-primary)"
}, oz = {
  "--ripple-cubic-bezier": "cubic-bezier(0.68, 0.01, 0.62, 0.6)",
  "--ripple-color": "currentColor"
}, tz = {
  "--slider-error-color": "var(--color-danger)",
  "--slider-track-background": "#bdbdbd",
  "--slider-track-height": "2px",
  "--slider-track-border-radius": "0",
  "--slider-track-fill-border-radius": "0",
  "--slider-track-fill-background": "var(--color-primary)",
  "--slider-thumb-block-background": "var(--color-primary)",
  "--slider-thumb-ripple-background": "var(--color-primary)",
  "--slider-thumb-label-background": "var(--color-primary)",
  "--slider-thumb-label-font-size": "var(--font-size-sm)",
  "--slider-thumb-label-text-color": "var(--color-on-primary)",
  "--slider-thumb-size": "12px",
  "--slider-disabled-opacity": "var(--opacity-disabled)"
}, rz = {
  "--snackbar-width": "256px",
  "--snackbar-color": "rgba(255, 255, 255, 0.87)",
  "--snackbar-border-radius": "4px",
  "--snackbar-background": "#333",
  "--snackbar-font-size": "var(--font-size-md)",
  "--snackbar-margin": "6px 24px",
  "--snackbar-border-color": "currentColor",
  "--snackbar-success-background": "var(--color-success)",
  "--snackbar-info-background": "var(--color-info)",
  "--snackbar-error-background": "var(--color-danger)",
  "--snackbar-warning-background": "var(--color-warning)",
  "--snackbar-content-padding": "14px 16px",
  "--snackbar-action-margin": "0 8px",
  "--snackbar-vertical-action-margin": "0 8px 8px 0",
  "--snackbar-icon-margin": "0 8px"
}, az = {
  "--space-size-mini-y": "4px",
  "--space-size-mini-x": "4px",
  "--space-size-small-y": "6px",
  "--space-size-small-x": "6px",
  "--space-size-normal-y": "8px",
  "--space-size-normal-x": "12px",
  "--space-size-large-y": "12px",
  "--space-size-large-x": "20px"
}, iz = {
  "--swipe-indicator-color": "#fff",
  "--swipe-indicators-offset": "10px",
  "--swipe-indicator-offset": "4px",
  "--swipe-navigation-z-index": "9",
  "--swipe-navigation-button-width": "36px",
  "--swipe-navigation-button-height": "36px",
  "--swipe-navigation-button-border-radius": "50%",
  "--swipe-navigation-icon-size": "20px",
  "--swipe-navigation-prev-left": "8px",
  "--swipe-navigation-next-right": "8px",
  "--swipe-navigation-prev-top": "8px",
  "--swipe-navigation-next-bottom": "8px"
}, lz = {
  "--tooltip-opacity": "0.9",
  "--tooltip-border-radius": "4px",
  "--tooltip-font-size": "14px",
  "--tooltip-padding": "8px 16px",
  "--tooltip-offset": "10px",
  "--tooltip-default-color": "#616161",
  "--tooltip-primary-color": "var(--color-primary)",
  "--tooltip-info-color": "var(--color-info)",
  "--tooltip-success-color": "var(--color-success)",
  "--tooltip-warning-color": "var(--color-warning)",
  "--tooltip-danger-color": "var(--color-danger)",
  "--tooltip-default-text-color": "#fff",
  "--tooltip-primary-text-color": "var(--color-on-primary)",
  "--tooltip-info-text-color": "var(--color-on-info)",
  "--tooltip-success-text-color": "var(--color-on-success)",
  "--tooltip-warning-text-color": "var(--color-on-warning)",
  "--tooltip-danger-text-color": "var(--color-on-danger)"
}, sz = {
  "--select-scroller-background": "#272727",
  "--select-scroller-padding": "6px 0",
  "--select-scroller-max-height": "278px",
  "--select-scroller-border-radius": "2px",
  "--select-chip-margin": "5px 5px 0",
  "--select-arrow-size": "20px",
  "--select-standard-menu-margin": "calc(var(--field-decorator-placeholder-size) * 0.75 + 12px) 0 0 0",
  "--select-label-font-size": "16px"
}, uz = Object.defineProperty, Zc = Object.getOwnPropertySymbols, cz = Object.prototype.hasOwnProperty, dz = Object.prototype.propertyIsEnumerable, Jc = (e, n, o) => n in e ? uz(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, be = (e, n) => {
  for (var o in n || (n = {}))
    cz.call(n, o) && Jc(e, o, n[o]);
  if (Zc)
    for (var o of Zc(n))
      dz.call(n, o) && Jc(e, o, n[o]);
  return e;
}, fz = be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be(be({
  "--font-size-xs": "10px",
  "--font-size-sm": "12px",
  "--font-size-md": "14px",
  "--font-size-lg": "16px",
  "--icon-size-xs": "16px",
  "--icon-size-sm": "18px",
  "--icon-size-md": "20px",
  "--icon-size-lg": "22px",
  "--color-body": "#1e1e1e",
  "--color-text": "#fff",
  "--color-primary": "#4a7afe",
  "--color-info": "#10afef",
  "--color-success": "#10c48f",
  "--color-warning": "#ff8800",
  "--color-danger": "#ef5350",
  "--color-on-primary": "#fff",
  "--color-on-info": "#fff",
  "--color-on-success": "#fff",
  "--color-on-warning": "#fff",
  "--color-on-danger": "#fff",
  "--color-primary-container": "#4a7afe",
  "--color-info-container": "#10afef",
  "--color-success-container": "#10c48f",
  "--color-warning-container": "#ff8800",
  "--color-danger-container": "#ef5350",
  "--color-on-primary-container": "#fff",
  "--color-on-info-container": "#fff",
  "--color-on-success-container": "#fff",
  "--color-on-warning-container": "#fff",
  "--color-on-danger-container": "#fff",
  "--color-disabled": "#404040",
  "--color-text-disabled": "#757575",
  "--color-surface-container": "#1e1e1e",
  "--color-surface-container-low": "#1e1e1e",
  "--color-surface-container-high": "#272727",
  "--color-surface-container-highest": "#303030",
  "--color-inverse-surface": "#fff",
  "--color-outline": "rgba(255, 255, 255, 0.2)",
  "--color-on-surface-variant": "#fff",
  "--opacity-disabled": "0.6",
  "--opacity-hover": "0.15",
  "--opacity-focus": "0.2",
  "--cubic-bezier": "cubic-bezier(0.25, 0.8, 0.5, 1)",
  "--shadow-key-umbra-opacity": "rgba(0, 0, 0, 0.2)",
  "--shadow-key-penumbra-opacity": "rgba(0, 0, 0, 0.14)",
  "--shadow-key-ambient-opacity": "rgba(0, 0, 0, 0.12)"
}, oP), rP), tP), CP), sP), bP), PP), $P), vP), uP), eP), iP), nP), SP), lP), mP), kP), yP), fP), wP), dP), hP), aP), cP), pP), zP), OP), TP), gP), EP), DP), BP), IP), MP), NP), AP), VP), LP), RP), FP), UP), HP), YP), jP), WP), KP), qP), XP), GP), ZP), JP), QP), xP), _P), ez), nz), oz), tz), rz), az), iz), lz), sz), pz = {
  "--button-default-color": "var(--color-surface-container-low)",
  "--button-default-text-color": "var(--color-primary)",
  "--button-default-icon-color": "var(--color-on-info-container)",
  "--button-default-icon-container-color": "var(--color-surface-container-high)",
  "--button-border-radius": "100px",
  "--button-primary-text-color": "var(--color-on-primary)",
  "--button-danger-text-color": "var(--color-on-danger)",
  "--button-success-text-color": "var(--color-on-success)",
  "--button-warning-text-color": "var(--color-on-warning)",
  "--button-info-text-color": "var(--color-on-info)",
  "--button-primary-color": "var(--color-primary)",
  "--button-danger-color": "var(--color-danger)",
  "--button-success-color": "var(--color-success)",
  "--button-warning-color": "var(--color-warning)",
  "--button-info-color": "var(--color-info)",
  "--button-primary-icon-color": "var(--color-on-primary-container)",
  "--button-danger-icon-color": "var(--color-on-danger-container)",
  "--button-success-icon-color": "var(--color-on-success-container)",
  "--button-warning-icon-color": "var(--color-on-warning-container)",
  "--button-info-icon-color": "var(--color-on-info-container)",
  "--button-primary-icon-container-color": "var(--color-primary-container)",
  "--button-danger-icon-container-color": "var(--color-danger-container)",
  "--button-success-icon-container-color": "var(--color-success-container)",
  "--button-warning-icon-container-color": "var(--color-warning-container)",
  "--button-info-icon-container-color": "var(--color-info-container)",
  "--button-disabled-color": "var(--color-disabled)",
  "--button-disabled-text-color": "var(--color-text-disabled)",
  "--button-mini-padding": "0 8px",
  "--button-small-padding": "0 12px",
  "--button-normal-padding": "0 16px",
  "--button-large-padding": "0 22px",
  "--button-round-padding": "6px",
  "--button-mini-height": "20px",
  "--button-small-height": "28px",
  "--button-normal-height": "36px",
  "--button-large-height": "44px",
  "--button-mini-font-size": "var(--font-size-xs)",
  "--button-small-font-size": "var(--font-size-sm)",
  "--button-normal-font-size": "var(--font-size-md)",
  "--button-large-font-size": "var(--font-size-lg)"
}, vz = {
  "--hover-overlay-opacity": "var(--opacity-hover)",
  "--hover-overlay-focusing-opacity": "var(--opacity-focus)"
}, mz = {
  "--menu-background-color": "var(--color-surface-container)",
  "--menu-border-radius": "4px"
}, hz = {
  "--menu-select-menu-background-color": "var(--color-surface-container)",
  "--menu-select-menu-border-radius": "4px",
  "--menu-select-menu-max-height": "278px",
  "--menu-select-menu-padding": "0"
}, gz = {
  "--menu-option-text-color": "#1D1B20",
  "--menu-option-normal-height": "38px",
  "--menu-option-small-height": "30px",
  "--menu-option-mini-height": "24px",
  "--menu-option-large-height": "46px",
  "--menu-option-padding": "0 12px",
  "--menu-option-normal-font-size": "var(--font-size-md)",
  "--menu-option-small-font-size": "var(--font-size-sm)",
  "--menu-option-mini-font-size": "var(--font-size-xs)",
  "--menu-option-large-font-size": "var(--font-size-lg)",
  "--menu-option-selected-background": "var(--color-primary)",
  "--menu-option-disabled-color": "var(--color-text-disabled)"
}, bz = {
  "--fab-trigger-border-radius": "16px",
  "--fab-action-size": "40px",
  "--fab-action-border-radius": "12px",
  "--fab-top": "70px",
  "--fab-bottom": "16px",
  "--fab-left": "16px",
  "--fab-right": "16px",
  "--fab-trigger-size": "56px",
  "--fab-trigger-inactive-icon-size": "26px",
  "--fab-trigger-active-icon-size": "22px",
  "--fab-actions-padding": "10px 0",
  "--fab-action-margin": "6px",
  "--fab-transition-standard-easing": "cubic-bezier(0.4, 0, 0.2, 1)"
}, yz = {
  "--breadcrumb-inactive-color": "var(--color-on-surface-variant)",
  "--breadcrumb-active-color": "var(--color-primary)",
  "--breadcrumb-separator-margin": "0 10px",
  "--breadcrumb-separator-font-size": "14px"
}, kz = {
  "--link-default-color": "#000",
  "--link-primary-color": "var(--color-primary)",
  "--link-danger-color": "var(--color-danger)",
  "--link-success-color": "var(--color-success)",
  "--link-warning-color": "var(--color-warning)",
  "--link-info-color": "var(--color-info)",
  "--link-disabled-color": "var(--color-text-disabled)",
  "--link-font-size": "var(--font-size-md)",
  "--link-focus-opacity": "0.8"
}, $z = {
  "--cell-description-color": "var(--color-on-surface-variant)",
  "--cell-color": "var(--color-text)",
  "--cell-font-size": "var(--font-size-md)",
  "--cell-description-font-size": "var(--font-size-sm)",
  "--cell-description-margin-top": "4px",
  "--cell-padding": "10px 12px",
  "--cell-min-height": "40px",
  "--cell-border-color": "var(--color-outline)",
  "--cell-border-left": "12px",
  "--cell-border-right": "12px",
  "--cell-icon-right": "8px",
  "--cell-extra-left": "8px"
}, wz = {
  "--paper-background": "var(--color-surface-container-low)",
  "--paper-border-radius": "12px"
}, Cz = {
  "--avatar-text-color": "#fff",
  "--avatar-background-color": "var(--color-primary)"
}, Sz = {
  "--field-decorator-text-color": "#1D1B20",
  "--field-decorator-blur-color": "#79747E",
  "--field-decorator-error-color": "var(--color-danger)",
  "--field-decorator-focus-color": "var(--color-primary)",
  "--field-decorator-placeholder-size": "16px",
  "--field-decorator-icon-size": "20px",
  "--field-decorator-line-size": "1px",
  "--field-decorator-line-focus-size": "2px",
  "--field-decorator-line-border-radius": "4px",
  "--field-decorator-disabled-color": "var(--color-text-disabled)",
  "--field-decorator-standard-normal-margin-top": "22px",
  "--field-decorator-standard-normal-margin-bottom": "4px",
  "--field-decorator-standard-normal-icon-margin-top": "22px",
  "--field-decorator-standard-normal-icon-margin-bottom": "4px",
  "--field-decorator-standard-normal-non-hint-margin-top": "4px",
  "--field-decorator-standard-small-margin-top": "18px",
  "--field-decorator-standard-small-margin-bottom": "4px",
  "--field-decorator-standard-small-icon-margin-top": "18px",
  "--field-decorator-standard-small-icon-margin-bottom": "4px",
  "--field-decorator-standard-small-non-hint-margin-top": "2px",
  "--field-decorator-outlined-normal-margin-top": "16px",
  "--field-decorator-outlined-normal-margin-bottom": "16px",
  "--field-decorator-outlined-normal-padding-left": "16px",
  "--field-decorator-outlined-normal-padding-right": "16px",
  "--field-decorator-outlined-normal-placeholder-space": "4px",
  "--field-decorator-outlined-normal-icon-margin-top": "16px",
  "--field-decorator-outlined-normal-icon-margin-bottom": "16px",
  "--field-decorator-outlined-small-margin-top": "8px",
  "--field-decorator-outlined-small-margin-bottom": "8px",
  "--field-decorator-outlined-small-padding-left": "12px",
  "--field-decorator-outlined-small-padding-right": "12px",
  "--field-decorator-outlined-small-placeholder-space": "2px",
  "--field-decorator-outlined-small-icon-margin-top": "8px",
  "--field-decorator-outlined-small-icon-margin-bottom": "8px"
}, Pz = {
  "--checkbox-unchecked-color": "var(--color-on-surface-variant)",
  "--checkbox-text-color": "var(--color-on-surface-variant)",
  "--checkbox-checked-color": "var(--color-primary)",
  "--checkbox-disabled-color": "var(--color-text-disabled)",
  "--checkbox-error-color": "var(--color-danger)",
  "--checkbox-action-padding": "6px",
  "--checkbox-icon-size": "24px"
}, zz = {
  "--radio-unchecked-color": "var(--color-on-surface-variant)",
  "--radio-text-color": "var(--color-on-surface-variant)",
  "--radio-checked-color": "var(--color-primary)",
  "--radio-disabled-color": "var(--color-text-disabled)",
  "--radio-error-color": "var(--color-danger)",
  "--radio-icon-size": "24px",
  "--radio-action-padding": "6px"
}, Oz = {
  "--card-border-radius": "12px",
  "--card-background": "var(--color-surface-container-low)",
  "--card-image-height": "188px",
  "--card-title-color": "#1D1B20",
  "--card-title-font-size": "16px",
  "--card-title-padding": "0 16px",
  "--card-title-margin": "16px 0 0 0",
  "--card-subtitle-color": "var(--color-on-surface-variant)",
  "--card-subtitle-padding": "0 16px",
  "--card-subtitle-margin": "4px 0 0 0",
  "--card-description-margin": "32px 0 0 0",
  "--card-description-padding": "0 16px",
  "--card-description-color": "var(--color-on-surface-variant)",
  "--card-padding": "0 0 16px 0",
  "--card-footer-margin": "32px 0 0 0",
  "--card-title-row-margin": "16px 0 0 0",
  "--card-subtitle-row-margin": "4px 0 0 0",
  "--card-footer-padding": "0 16px",
  "--card-close-button-size": "56px",
  "--card-close-button-primary-color": "var(--color-primary-container)",
  "--card-close-button-text-color": "var(--color-on-primary-container)",
  "--card-close-button-border-radius": "12px",
  "--card-outline-color": "var(--color-outline)",
  "--card-image-width": "100%",
  "--card-row-image-width": "140px",
  "--card-row-height": "140px",
  "--card-subtitle-font-size": "14px",
  "--card-description-font-size": "14px",
  "--card-footer-right": "13px",
  "--card-footer-bottom": "9px",
  "--card-line-height": "22px",
  "--card-row-line-height": "1.5",
  "--card-floating-buttons-bottom": "16px",
  "--card-floating-buttons-right": "16px",
  "--card-floating-buttons-color": "#fff",
  "--card-close-button-icon-size": "24px"
}, Tz = {
  "--chip-round-radius": "8px",
  "--chip-default-color": "var(--color-surface-container-high)",
  "--chip-default-text-color": "#1D192B",
  "--chip-primary-text-color": "var(--color-on-primary-container)",
  "--chip-danger-text-color": "var(--color-on-danger-container)",
  "--chip-success-text-color": "var(--color-on-success-container)",
  "--chip-warning-text-color": "var(--color-on-warning-container)",
  "--chip-info-text-color": "var(--color-on-info-container)",
  "--chip-primary-color": "var(--color-primary-container)",
  "--chip-danger-color": "var(--color-danger-container)",
  "--chip-success-color": "var(--color-success-container)",
  "--chip-warning-color": "var(--color-warning-container)",
  "--chip-info-color": "var(--color-info-container)",
  "--chip-primary-plain-color": "var(--color-primary)",
  "--chip-danger-plain-color": "var(--color-danger)",
  "--chip-success-plain-color": "var(--color-success)",
  "--chip-warning-plain-color": "var(--color-warning)",
  "--chip-info-plain-color": "var(--color-info)",
  "--chip-border-radius": "2px",
  "--chip-normal-height": "32px",
  "--chip-large-height": "40px",
  "--chip-small-height": "24px",
  "--chip-mini-height": "16px",
  "--chip-normal-padding": "0 10px",
  "--chip-large-padding": "0 17px",
  "--chip-small-padding": "0 6px",
  "--chip-mini-padding": "0 4px",
  "--chip-text-normal-margin": "0 5px",
  "--chip-text-large-margin": "0 5px",
  "--chip-text-small-margin": "0 3px",
  "--chip-text-mini-margin": "0 2px",
  "--chip-mini-font-size": "var(--font-size-xs)",
  "--chip-small-font-size": "var(--font-size-sm)",
  "--chip-normal-font-size": "var(--font-size-md)",
  "--chip-large-font-size": "var(--font-size-lg)"
}, Ez = {
  "--tooltip-default-color": "var(--color-inverse-surface)",
  "--tooltip-opacity": "1",
  "--tooltip-border-radius": "4px",
  "--tooltip-font-size": "14px",
  "--tooltip-padding": "8px 16px",
  "--tooltip-offset": "10px",
  "--tooltip-primary-color": "var(--color-primary)",
  "--tooltip-info-color": "var(--color-info)",
  "--tooltip-success-color": "var(--color-success)",
  "--tooltip-warning-color": "var(--color-warning)",
  "--tooltip-danger-color": "var(--color-danger)",
  "--tooltip-default-text-color": "#fff",
  "--tooltip-primary-text-color": "var(--color-on-primary)",
  "--tooltip-info-text-color": "var(--color-on-info)",
  "--tooltip-success-text-color": "var(--color-on-success)",
  "--tooltip-warning-text-color": "var(--color-on-warning)",
  "--tooltip-danger-text-color": "var(--color-on-danger)"
}, Dz = {
  "--tabs-background": "var(--color-body)",
  "--tabs-item-horizontal-height": "44px",
  "--tabs-item-vertical-height": "66px",
  "--tabs-radius": "2px",
  "--tabs-padding": "12px",
  "--tabs-indicator-size": "2px",
  "--tabs-indicator-border-radius": "0",
  "--tabs-indicator-background": "var(--color-primary)",
  "--tabs-indicator-inner-size": "100%"
}, Bz = {
  "--tab-inactive-color": "var(--color-on-surface-variant)",
  "--tab-padding": "12px",
  "--tab-active-color": "var(--color-primary)",
  "--tab-disabled-color": "var(--color-text-disabled)",
  "--tab-font-size": "var(--font-size-md)",
  "--tab-font-weight": "400",
  "--tab-active-font-size": "var(--font-size-md)",
  "--tab-active-font-weight": "400"
}, Iz = {
  "--table-background": "var(--color-surface-container-low)",
  "--table-tbody-tr-hover-background": "var(--color-surface-container-low)",
  "--table-border-radius": "2px",
  "--table-thead-border-bottom": "thin solid var(--color-outline)",
  "--table-thead-th-text-color": "rgba(0, 0, 0, 0.6)",
  "--table-thead-th-text-align": "left",
  "--table-thead-th-font-size": "14px",
  "--table-thead-tr-border-bottom": "thin solid var(--color-outline)",
  "--table-tbody-tr-border-bottom": "thin solid var(--color-outline)",
  "--table-tbody-td-text-color": "#555",
  "--table-tbody-td-font-size": "16px",
  "--table-tbody-td-text-align": "left",
  "--table-row-height": "46px",
  "--table-row-padding": "0 16px",
  "--table-footer-border-top": "thin solid var(--color-outline)"
}, Mz = {
  "--collapse-background": "var(--color-surface-container-low)",
  "--collapse-text-color": "#1D1B20",
  "--collapse-header-font-size": "var(--font-size-lg)",
  "--collapse-header-padding": "10px 12px",
  "--collapse-content-font-size": "var(--font-size-md)",
  "--collapse-content-padding": "0 12px 10px",
  "--collapse-item-margin-top": "16px",
  "--collapse-disable-color": "#bdbdbd",
  "--collapse-border-top": "thin solid var(--color-outline)"
}, Nz = {
  "--result-background": "var(--color-body)",
  "--result-border-radius": "12px",
  "--result-title-color": "#1D1B20",
  "--result-description-color": "var(--color-on-surface-variant)",
  "--result-info-border-color": "rgba(98, 91, 113, 0.3)",
  "--result-success-border-color": "rgba(83, 101, 37, 0.3)",
  "--result-error-border-color": "rgba(179, 38, 30, 0.3)",
  "--result-warning-border-color": "rgba(125, 82, 96, 0.3)",
  "--result-padding": "24px",
  "--result-title-font-size": "32px",
  "--result-title-margin": "15px 0 0 0",
  "--result-image-size": "80px",
  "--result-title-font-weight": "500",
  "--result-description-margin": "10px 0 0 0",
  "--result-description-font-size": "14px",
  "--result-description-line-height": "1.6",
  "--result-info-color": "var(--color-info)",
  "--result-success-color": "var(--color-success)",
  "--result-error-color": "var(--color-danger)",
  "--result-warning-color": "var(--color-warning)",
  "--result-question-color": "#607d8b",
  "--result-question-border-color": "rgba(96, 125, 139, 0.3)",
  "--result-empty-color": "#9e9e9e",
  "--result-empty-border-color": "rgba(158, 158, 158, 0.3)"
}, Az = {
  "--bottom-navigation-background-color": "var(--color-surface-container)",
  "--bottom-navigation-fab-border-radius": "12px",
  "--bottom-navigation-height": "50px",
  "--bottom-navigation-variant-height": "66px",
  "--bottom-navigation-z-index": "1",
  "--bottom-navigation-border-color": "var(--color-outline)",
  "--bottom-navigation-fab-offset": "4px"
}, Vz = {
  "--bottom-navigation-item-active-background-color": "var(--color-info-container)",
  "--bottom-navigation-item-inactive-color": "var(--color-on-surface-variant)",
  "--bottom-navigation-item-variant-active-background-color": "var(--color-info-container)",
  "--bottom-navigation-item-variant-active-color": "var(--color-on-info-container)",
  "--bottom-navigation-fab-border-radius": "12px",
  "--bottom-navigation-item-font-size": "var(--font-size-sm)",
  "--bottom-navigation-item-active-color": "var(--color-primary)",
  "--bottom-navigation-item-line-height": "1",
  "--bottom-navigation-item-icon-size": "22px",
  "--bottom-navigation-item-icon-margin-bottom": "5px",
  "--bottom-navigation-item-variant-icon-container-height": "30px",
  "--bottom-navigation-item-variant-icon-container-border-radius": "100px",
  "--bottom-navigation-item-variant-icon-container-max-width": "58px"
}, Lz = {
  "--snackbar-color": "#F5EFF7",
  "--snackbar-background": "var(--color-inverse-surface)",
  "--snackbar-width": "256px",
  "--snackbar-border-radius": "4px",
  "--snackbar-font-size": "var(--font-size-md)",
  "--snackbar-margin": "6px 24px",
  "--snackbar-border-color": "currentColor",
  "--snackbar-success-background": "var(--color-success)",
  "--snackbar-info-background": "var(--color-info)",
  "--snackbar-error-background": "var(--color-danger)",
  "--snackbar-warning-background": "var(--color-warning)",
  "--snackbar-content-padding": "14px 16px",
  "--snackbar-action-margin": "0 8px",
  "--snackbar-vertical-action-margin": "0 8px 8px 0",
  "--snackbar-icon-margin": "0 8px"
}, Rz = {
  "--action-sheet-background": "var(--color-surface-container-high)",
  "--action-sheet-title-color": "var(--color-on-surface-variant)",
  "--action-sheet-action-item-color": "#1D1B20",
  "--action-sheet-border-radius": "0px"
}, Fz = {
  "--dialog-width": "312px",
  "--dialog-background": "var(--color-surface-container-high)",
  "--dialog-title-color": "#1D1B20",
  "--dialog-message-color": "var(--color-on-surface-variant)",
  "--dialog-border-radius": "28px",
  "--dialog-title-padding": "24px 24px 0",
  "--dialog-message-padding": "16px 24px 24px",
  "--dialog-actions-padding": "0 24px 24px",
  "--dialog-title-font-size": "20px",
  "--dialog-button-margin-left": "8px",
  "--dialog-message-line-height": "24px",
  "--dialog-message-font-size": "var(--font-size-md)",
  "--dialog-confirm-button-color": "var(--color-primary)",
  "--dialog-cancel-button-color": "var(--color-primary)"
}, Uz = {
  "--pull-refresh-background": "var(--color-body)",
  "--pull-refresh-size": "40px",
  "--pull-refresh-color": "var(--color-primary)",
  "--pull-refresh-success-color": "var(--color-success)",
  "--pull-refresh-icon-size": "25px"
}, Hz = {
  "--popup-content-background-color": "var(--color-surface-container-high)",
  "--popup-overlay-background-color": "rgba(0, 0, 0, 0.6)"
}, Yz = {
  "--picker-background": "var(--color-body)",
  "--picker-cancel-button-text-color": "var(--color-primary)",
  "--picker-mask-background-image": "linear-gradient(180deg, rgba(254, 247, 255, 0.9), rgba(254, 247, 255, 0.4)), linear-gradient(0deg, rgba(254, 247, 255, 0.9), rgba(254, 247, 255, 0.4)",
  "--picker-toolbar-height": "44px",
  "--picker-confirm-button-text-color": "var(--color-primary)",
  "--picker-picked-border": "1px solid var(--color-outline)",
  "--picker-title-font-size": "var(--font-size-lg)",
  "--picker-title-text-color": "#555",
  "--picker-option-font-size": "var(--font-size-lg)",
  "--picker-option-text-color": "#555",
  "--picker-toolbar-padding": "0 4px"
}, jz = {
  "--floating-panel-background": "var(--color-surface-container-low)",
  "--floating-panel-toolbar-background": "#79747E",
  "--floating-panel-toolbar-width": "32px",
  "--floating-panel-toolbar-height": "4px",
  "--floating-panel-header-height": "36px",
  "--floating-panel-z-index": "999",
  "--floating-panel-border-top": "none",
  "--floating-panel-border-radius": "0",
  "--floating-panel-toolbar-border-radius": "10px",
  "--floating-panel-transition-timing-function": "cubic-bezier(0.18, 0.89, 0.32, 1.28)"
}, Wz = {
  "--back-top-button-border-radius": "12px",
  "--back-top-right": "40px",
  "--back-top-bottom": "40px",
  "--back-top-button-size": "40px"
}, Kz = {
  "--select-scroller-background": "var(--color-surface-container)",
  "--select-scroller-border-radius": "4px",
  "--select-scroller-padding": "6px 0",
  "--select-scroller-max-height": "278px",
  "--select-chip-margin": "5px 5px 0",
  "--select-arrow-size": "20px",
  "--select-standard-menu-margin": "calc(var(--field-decorator-placeholder-size) * 0.75 + 12px) 0 0 0",
  "--select-label-font-size": "16px"
}, qz = {
  "--option-text-color": "#1D1B20",
  "--option-height": "38px",
  "--option-padding": "0 12px",
  "--option-font-size": "16px",
  "--option-selected-background": "var(--field-decorator-focus-color)",
  "--option-disabled-color": "var(--color-text-disabled)"
}, Xz = {
  "--slider-thumb-size": "16px",
  "--slider-track-height": "4px",
  "--slider-track-background": "var(--color-surface-container-highest)",
  "--slider-track-fill-border-radius": "4px",
  "--slider-track-border-radius": "4px",
  "--slider-error-color": "var(--color-danger)",
  "--slider-track-fill-background": "var(--color-primary)",
  "--slider-thumb-block-background": "var(--color-primary)",
  "--slider-thumb-ripple-background": "var(--color-primary)",
  "--slider-thumb-label-background": "var(--color-primary)",
  "--slider-thumb-label-font-size": "var(--font-size-sm)",
  "--slider-thumb-label-text-color": "var(--color-on-primary)",
  "--slider-disabled-opacity": "var(--opacity-disabled)"
}, Gz = {
  "--uploader-file-border-radius": "8px",
  "--uploader-action-background": "var(--color-surface-container-low)",
  "--uploader-file-name-background": "var(--color-surface-container-low)",
  "--uploader-file-cover-background": "var(--color-surface-container-low)",
  "--uploader-action-icon-color": "var(--color-on-surface-variant)",
  "--uploader-file-name-color": "var(--color-on-surface-variant)",
  "--uploader-action-icon-size": "24px",
  "--uploader-action-margin": "0 10px 10px 0",
  "--uploader-file-size": "80px",
  "--uploader-file-margin": "0 10px 10px 0",
  "--uploader-file-name-font-size": "12px",
  "--uploader-file-name-padding": "10px",
  "--uploader-file-text-align": "center",
  "--uploader-file-close-background": "rgba(0, 0, 0, 0.3)",
  "--uploader-file-close-size": "24px",
  "--uploader-file-close-icon-font-size": "14px",
  "--uploader-file-close-icon-color": "#fff",
  "--uploader-file-cover-fit": "cover",
  "--uploader-preview-video-width": "100vw",
  "--uploader-preview-video-height": "100vw",
  "--uploader-file-indicator-height": "4px",
  "--uploader-file-indicator-normal-color": "var(--color-disabled)",
  "--uploader-file-indicator-success-color": "var(--color-success)",
  "--uploader-file-indicator-error-color": "var(--color-danger)",
  "--uploader-file-progress-color": "var(--color-primary)",
  "--uploader-disabled-color": "var(--color-disabled)",
  "--uploader-disabled-text-color": "var(--color-text-disabled)",
  "--uploader-loading-background": "linear-gradient(90deg, hsla(0, 0%, 100%, 0), hsla(0, 0%, 100%, 0.3), hsla(0, 0%, 100%, 0))"
}, Zz = {
  "--time-picker-title-color": "#1D1B20",
  "--time-picker-title-hint-color": "var(--color-on-surface-variant)",
  "--time-picker-clock-container-background": "var(--color-surface-container-highest)",
  "--time-picker-title-background": "var(--color-surface-container-high)",
  "--time-picker-body-background": "var(--color-surface-container-high)",
  "--time-picker-clock-item-text-color": "#1D1B20",
  "--time-picker-border-radius": "20px",
  "--time-picker-title-padding": "20px 20px 16px",
  "--time-picker-actions-padding": "20px",
  "--time-picker-title-margin-bottom": "20px",
  "--time-picker-title-time-font-size": "40px",
  "--time-picker-title-ampm-border-radius": "8px",
  "--time-picker-title-time-padding": "8px 12px",
  "--time-picker-title-time-border-radius": "8px",
  "--time-picker-title-ampm-border": "thin solid #79747e",
  "--time-picker-title-ampm-button-padding": "8px",
  "--time-picker-title-time-background": "var(--color-surface-container-highest)",
  "--time-picker-title-inactive-opacity": "1",
  "--time-picker-title-time-active-background": "var(--color-primary-container)",
  "--time-picker-title-ampm-button-active-background": "var(--color-warning-container)",
  "--time-picker-font-size": "var(--font-size-md)",
  "--time-picker-min-width": "290px",
  "--time-picker-title-height": "105px",
  "--time-picker-title-hint-font-size": "14px",
  "--time-picker-title-time-margin": "0 5px",
  "--time-picker-title-ampm-margin-left": "10px",
  "--time-picker-clock-left": "27px",
  "--time-picker-clock-right": "27px",
  "--time-picker-clock-top": "27px",
  "--time-picker-clock-bottom": "27px",
  "--time-picker-clock-container-width": "256px",
  "--time-picker-clock-container-height": "256px",
  "--time-picker-clock-hand-height": "calc(50% - 4px)",
  "--time-picker-clock-hand-width": "2px",
  "--time-picker-clock-hand-bottom": "50%",
  "--time-picker-clock-hand-left": "calc(50% - 1px)",
  "--time-picker-clock-hand-background": "var(--color-primary)",
  "--time-picker-clock-hand-border-color": "var(--color-primary)",
  "--time-picker-clock-hand-before-width": "10px",
  "--time-picker-clock-hand-before-height": "10px",
  "--time-picker-clock-hand-before-border-width": "2px",
  "--time-picker-clock-hand-after-width": "4px",
  "--time-picker-clock-hand-after-height": "4px",
  "--time-picker-clock-item-height": "32px",
  "--time-picker-clock-item-width": "32px",
  "--time-picker-clock-item-active-background": "var(--color-primary)",
  "--time-picker-clock-item-active-color": "var(--color-on-primary)",
  "--time-picker-clock-item-disable-color": "rgba(0, 0, 0, 0.26)",
  "--time-picker-clock-item-disable-background": "#bdbdbd",
  "--time-picker-inner-left": "36px",
  "--time-picker-inner-right": "36px",
  "--time-picker-inner-top": "36px",
  "--time-picker-inner-bottom": "36px",
  "--time-picker-body-height": "288px",
  "--time-picker-title-time-container-justify-content": "flex-end"
}, Jz = {
  "--date-picker-title-background": "var(--color-surface-container-high)",
  "--date-picker-title-color": "#1D1B20",
  "--date-picker-title-hint-color": "var(--color-on-surface-variant)",
  "--date-picker-body-background-color": "var(--color-surface-container-high)",
  "--date-picker-main-color": "#1D1B20",
  "--date-picker-border-radius": "20px",
  "--date-picker-title-padding": "20px 20px 16px",
  "--date-picker-actions-padding": "20px",
  "--day-picker-head-item-color": "#1D1B20",
  "--date-picker-header-arrow-filter": "opacity(1)",
  "--date-picker-header-padding": "0 0 16px",
  "--date-picker-body-height": "300px",
  "--date-picker-body-padding": "0 14px 16px",
  "--date-picker-header-color": "var(--color-on-surface-variant)",
  "--date-picker-font-size": "var(--font-size-md)",
  "--date-picker-min-width": "290px",
  "--date-picker-title-hint-font-size": "var(--font-size-md)",
  "--date-picker-title-height": "105px",
  "--date-picker-title-year-font-size": "var(--font-size-md)",
  "--date-picker-title-year-font-weight": "500",
  "--date-picker-title-year-margin-bottom": "8px",
  "--date-picker-title-date-height": "48px",
  "--date-picker-title-date-font-size": "34px",
  "--date-picker-title-date-font-weight": "500",
  "--date-picker-title-date-range-font-size": "20px",
  "--date-picker-title-date-justify-content": "normal",
  "--month-picker-padding": "0 12px",
  "--month-picker-item-width": "33%",
  "--month-picker-item-height": "56px",
  "--month-picker-item-button-max-width": "140px",
  "--year-picker-padding": "0 12px",
  "--year-picker-item-width": "33%",
  "--year-picker-item-height": "56px",
  "--year-picker-item-button-max-width": "140px",
  "--day-picker-content-item-width": "14.28%",
  "--day-picker-content-item-font-size": "var(--font-size-sm)",
  "--day-picker-content-item-padding": "2px 0",
  "--day-picker-content-item-button-width": "32px",
  "--day-picker-content-item-button-height": "32px",
  "--day-picker-content-item-button-font-size": "var(--font-size-sm)",
  "--day-picker-head-item-padding": "8px 0",
  "--day-picker-head-item-font-weight": "600"
}, Qz = {
  "--switch-track-background": "var(--color-surface-container-low)",
  "--switch-handle-background": "var(--color-surface-container-low)",
  "--switch-track-active-background": "var(--color-primary)",
  "--switch-track-error-background": "var(--color-danger)",
  "--switch-ripple-color": "var(--color-primary)",
  "--switch-handle-color": "var(--color-primary)",
  "--switch-handle-active-color": "var(--color-on-primary)",
  "--switch-handle-active-background": "var(--color-primary)",
  "--switch-handle-error-background": "var(--color-danger)",
  "--switch-disabled-opacity": "var(--opacity-disabled)",
  "--switch-variant-width": "52px",
  "--switch-variant-height": "32px",
  "--switch-variant-track-background": "var(--color-surface-container-highest)",
  "--switch-variant-handle-width": "24px",
  "--switch-variant-handle-height": "24px",
  "--switch-variant-track-border-color": "#79747E",
  "--switch-variant-handle-color": "var(--color-on-primary)",
  "--switch-variant-handle-active-color": "var(--color-primary)",
  "--switch-variant-handle-background": "#79747E",
  "--switch-variant-handle-active-background": "var(--color-on-primary)"
}, xz = {
  "--rate-color": "var(--color-on-surface-variant)",
  "--rate-size": "24px",
  "--rate-disabled-color": "var(--color-text-disabled)",
  "--rate-error-color": "var(--color-danger)",
  "--rate-action-padding": "4px",
  "--rate-primary-color": "var(--color-primary)"
}, _z = {
  "--avatar-group-offset": "-10px"
}, eO = {
  "--badge-content-padding": "2px 6px",
  "--badge-content-border": "none",
  "--badge-content-border-radius": "100px",
  "--badge-content-font-size": "12px",
  "--badge-icon-size": "12px",
  "--badge-default-color": "#e0e0e0",
  "--badge-primary-color": "var(--color-primary)",
  "--badge-danger-color": "var(--color-danger)",
  "--badge-success-color": "var(--color-success)",
  "--badge-warning-color": "var(--color-warning)",
  "--badge-info-color": "var(--color-info)",
  "--badge-default-text-color": "#1d1b20",
  "--badge-primary-text-color": "var(--color-on-primary)",
  "--badge-danger-text-color": "var(--color-on-danger)",
  "--badge-success-text-color": "var(--color-on-success)",
  "--badge-warning-text-color": "var(--color-on-warning)",
  "--badge-info-text-color": "var(--color-on-info)",
  "--badge-dot-width": "8px",
  "--badge-dot-height": "8px"
}, nO = {
  "--countdown-text-color": "var(--color-text)",
  "--countdown-text-font-size": "var(--font-size-lg)"
}, oO = {
  "--counter-padding": "0 4px",
  "--counter-font-color": "#fff",
  "--counter-background": "var(--color-primary)",
  "--counter-input-width": "28px",
  "--counter-input-margin": "0 4px",
  "--counter-input-font-size": "14px",
  "--counter-button-size": "28px",
  "--counter-button-text-color": "#fff",
  "--counter-button-icon-size": "100%",
  "--counter-disabled-color": "var(--color-disabled)",
  "--counter-disabled-opacity": "var(--opacity-disabled)",
  "--counter-error-color": "var(--color-danger)"
}, tO = {
  "--divider-color": "var(--color-outline)",
  "--divider-text-color": "#888",
  "--divider-text-margin": "8px 0",
  "--divider-text-padding": "0 8px",
  "--divider-inset": "72px"
}, rO = {
  "--form-details-error-message-color": "var(--color-danger)",
  "--form-details-extra-message-color": "#888",
  "--form-details-margin-top": "6px",
  "--form-details-font-size": "12px",
  "--form-details-message-margin-right": "4px"
}, aO = {
  "--icon-size": "20px"
}, iO = {
  "--image-preview-swipe-indicators-text-color": "#ddd",
  "--image-preview-swipe-indicators-padding": "16px 0",
  "--image-preview-zoom-container-background": "#000",
  "--image-preview-close-icon-top": "14px",
  "--image-preview-close-icon-right": "14px",
  "--image-preview-extra-top": "14px",
  "--image-preview-extra-left": "14px",
  "--image-preview-close-icon-size": "22px",
  "--image-preview-close-icon-color": "#fff"
}, lO = {
  "--index-bar-list-right": "0",
  "--index-bar-list-top": "50%",
  "--index-bar-list-left": "auto",
  "--index-bar-list-bottom": "auto",
  "--index-bar-list-transform": "translate(0, -50%)",
  "--index-bar-list-item-font-size": "var(--font-size-xs)",
  "--index-bar-list-item-color": "var(--color-primary)",
  "--index-bar-list-item-active-color": "var(--color-danger)",
  "--index-bar-list-item-height": "14px",
  "--index-bar-list-item-padding": "0 10px"
}, sO = {
  "--input-input-height": "24px",
  "--input-input-font-size": "16px",
  "--input-textarea-height": "auto"
}, uO = {
  "--list-loading-height": "50px",
  "--list-finished-height": "50px",
  "--list-error-height": "50px",
  "--list-loading-color": "#888",
  "--list-finished-color": "#888",
  "--list-error-color": "#888",
  "--list-loading-font-size": "var(--font-size-md)",
  "--list-finished-font-size": "var(--font-size-md)",
  "--list-error-font-size": "var(--font-size-md)"
}, cO = {
  "--loading-color": "var(--color-primary)",
  "--loading-opacity": "0.38",
  "--loading-desc-margin": "8px 0 0",
  "--loading-desc-color": "var(--color-primary)"
}, dO = {
  "--loading-bar-color": "var(--color-primary)",
  "--loading-bar-error-color": "var(--color-danger)",
  "--loading-bar-height": "3px"
}, fO = {
  "--overlay-background-color": "rgba(0, 0, 0, 0.6)"
}, pO = {
  "--pagination-text-color": "#555",
  "--pagination-font-size": "var(--font-size-md)",
  "--pagination-active-color": "var(--color-on-primary)",
  "--pagination-active-bg-color": "var(--color-primary)",
  "--pagination-hover-bg-color": "rgba(85, 85, 85, 0.15)",
  "--pagination-total-margin": "0 12px",
  "--pagination-total-line-height": "24px",
  "--pagination-item-width": "32px",
  "--pagination-item-height": "32px",
  "--pagination-item-margin": "0 6px",
  "--pagination-item-background": "#fff",
  "--pagination-item-border-radius": "4px",
  "--pagination-item-simple-border-radius": "50%",
  "--pagination-input-width": "32px",
  "--pagination-disabled-color": "var(--color-text-disabled)",
  "--pagination-bg-disabled-color": "var(--color-disabled)",
  "--pagination-size-line-height": "24px",
  "--pagination-size-padding": "0 6px"
}, vO = {
  "--progress-font-size": "var(--font-size-sm)",
  "--progress-track-color": "#d8d8d8",
  "--progress-label-color": "#555",
  "--progress-background": "var(--color-primary)",
  "--progress-default-color": "#f5f5f5",
  "--progress-primary-color": "var(--color-primary)",
  "--progress-danger-color": "var(--color-danger)",
  "--progress-success-color": "var(--color-success)",
  "--progress-warning-color": "var(--color-warning)",
  "--progress-info-color": "var(--color-info)",
  "--progress-linear-border-radius": "0px"
}, mO = {
  "--ripple-cubic-bezier": "cubic-bezier(0.68, 0.01, 0.62, 0.6)",
  "--ripple-color": "currentColor"
}, hO = {
  "--skeleton-content-padding": "16px",
  "--skeleton-card-height": "160px",
  "--skeleton-card-border-radius": "4px",
  "--skeleton-card-margin-bottom": "16px",
  "--skeleton-card-background-color": "rgba(0, 0, 0, 0.12)",
  "--skeleton-animation-background": "linear-gradient(90deg, hsla(0, 0%, 100%, 0), hsla(0, 0%, 100%, 0.3), hsla(0, 0%, 100%, 0))",
  "--skeleton-avatar-size": "34px",
  "--skeleton-avatar-border-radius": "50%",
  "--skeleton-avatar-margin-right": "16px",
  "--skeleton-avatar-background-color": "rgba(0, 0, 0, 0.12)",
  "--skeleton-title-width": "50%",
  "--skeleton-title-border-radius": "10px",
  "--skeleton-title-background-color": "rgba(0, 0, 0, 0.12)",
  "--skeleton-row-height": "12px",
  "--skeleton-row-border-radius": "10px",
  "--skeleton-row-margin-top": "10px"
}, gO = {
  "--space-size-mini-y": "4px",
  "--space-size-mini-x": "4px",
  "--space-size-small-y": "6px",
  "--space-size-small-x": "6px",
  "--space-size-normal-y": "8px",
  "--space-size-normal-x": "12px",
  "--space-size-large-y": "12px",
  "--space-size-large-x": "20px"
}, bO = {
  "--step-tag-size": "20px",
  "--step-tag-background": "#9e9e9e",
  "--step-tag-font-size": "var(--font-size-md)",
  "--step-tag-color": "var(--color-on-primary)",
  "--step-tag-active-color": "var(--color-primary)",
  "--step-tag-margin": "4px 0",
  "--step-tag-icon-size": "var(--font-size-lg)",
  "--step-content-font-size": "var(--font-size-md)",
  "--step-content-color": "rgba(0, 0, 0, 0.38)",
  "--step-content-active-color": "#000",
  "--step-line-background": "#000",
  "--step-line-gap": "8px",
  "--step-vertical-tag-margin": "0 4px",
  "--step-vertical-min-height": "50px"
}, yO = {
  "--swipe-indicator-color": "#fff",
  "--swipe-indicators-offset": "10px",
  "--swipe-indicator-offset": "4px",
  "--swipe-navigation-z-index": "9",
  "--swipe-navigation-button-width": "36px",
  "--swipe-navigation-button-height": "36px",
  "--swipe-navigation-button-border-radius": "50%",
  "--swipe-navigation-icon-size": "20px",
  "--swipe-navigation-prev-left": "8px",
  "--swipe-navigation-next-right": "8px",
  "--swipe-navigation-prev-top": "8px",
  "--swipe-navigation-next-bottom": "8px"
}, kO = {
  "--watermark-content-color": "#808080"
}, $O = {
  "--app-bar-color": "var(--color-primary)",
  "--app-bar-title-padding": "0 12px",
  "--app-bar-title-font-size": "var(--font-size-lg)",
  "--app-bar-text-color": "#fff",
  "--app-bar-height": "54px",
  "--app-bar-left-gap": "6px",
  "--app-bar-right-gap": "6px",
  "--app-bar-border-radius": "4px",
  "--app-bar-font-size": "var(--font-size-lg)"
}, wO = Object.defineProperty, Qc = Object.getOwnPropertySymbols, CO = Object.prototype.hasOwnProperty, SO = Object.prototype.propertyIsEnumerable, xc = (e, n, o) => n in e ? wO(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, ye = (e, n) => {
  for (var o in n || (n = {}))
    CO.call(n, o) && xc(e, o, n[o]);
  if (Qc)
    for (var o of Qc(n))
      SO.call(n, o) && xc(e, o, n[o]);
  return e;
}, PO = ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye(ye({
  "--font-size-xs": "10px",
  "--font-size-sm": "12px",
  "--font-size-md": "14px",
  "--font-size-lg": "16px",
  "--icon-size-xs": "16px",
  "--icon-size-sm": "18px",
  "--icon-size-md": "20px",
  "--icon-size-lg": "22px",
  "--color-body": "#fef7ff",
  "--color-text": "#000",
  "--color-primary": "#6750A4",
  "--color-info": "#625B71",
  "--color-success": "#536525",
  "--color-warning": "#7D5260",
  "--color-danger": "#B3261E",
  "--color-on-primary": "#fff",
  "--color-on-info": "#fff",
  "--color-on-success": "#fff",
  "--color-on-warning": "#fff",
  "--color-on-danger": "#fff",
  "--color-primary-container": "#EADDFF",
  "--color-info-container": "#E8DEF8",
  "--color-success-container": "#D5EC9C",
  "--color-warning-container": "#FFD8E4",
  "--color-danger-container": "#F9DEDC",
  "--color-on-primary-container": "#21005D",
  "--color-on-info-container": "#1D192B",
  "--color-on-success-container": "#151F00",
  "--color-on-warning-container": "#31111D",
  "--color-on-danger-container": "#410E0B",
  "--color-disabled": "#e0e0e0",
  "--color-text-disabled": "#aaa",
  "--color-surface-container": "#F3EDF7",
  "--color-surface-container-low": "#F7F2FA",
  "--color-surface-container-high": "#ECE6F0",
  "--color-surface-container-highest": "#E6E0E9",
  "--color-inverse-surface": "#322F35",
  "--color-outline": "#CAC4D0",
  "--color-on-surface-variant": "#49454F",
  "--opacity-disabled": "0.6",
  "--opacity-hover": "0.12",
  "--opacity-focus": "0.2",
  "--cubic-bezier": "cubic-bezier(0.25, 0.8, 0.5, 1)",
  "--shadow-key-umbra-opacity": "rgba(0, 0, 0, 0.2)",
  "--shadow-key-penumbra-opacity": "rgba(0, 0, 0, 0.14)",
  "--shadow-key-ambient-opacity": "rgba(0, 0, 0, 0.12)"
}, pz), vz), mz), hz), gz), bz), yz), kz), $z), wz), Cz), Sz), Pz), zz), Oz), Tz), Ez), Dz), Bz), Iz), Mz), Nz), Az), Vz), Lz), Rz), Fz), Uz), Hz), Yz), jz), Wz), Kz), qz), Xz), Gz), Zz), Jz), Qz), xz), _z), eO), nO), oO), tO), rO), aO), iO), lO), sO), uO), cO), dO), fO), pO), vO), mO), hO), gO), bO), yO), kO), $O), zO = {
  "--button-default-color": "#3B383E",
  "--button-default-text-color": "var(--color-primary)",
  "--button-default-icon-color": "var(--color-on-surface-variant)",
  "--button-default-icon-container-color": "var(--color-surface-container-highest)",
  "--button-border-radius": "100px",
  "--button-primary-text-color": "var(--color-on-primary)",
  "--button-danger-text-color": "var(--color-on-danger)",
  "--button-success-text-color": "var(--color-on-success)",
  "--button-warning-text-color": "var(--color-on-warning)",
  "--button-info-text-color": "var(--color-on-info)",
  "--button-primary-color": "var(--color-primary)",
  "--button-danger-color": "var(--color-danger)",
  "--button-success-color": "var(--color-success)",
  "--button-warning-color": "var(--color-warning)",
  "--button-info-color": "var(--color-info)",
  "--button-primary-icon-color": "var(--color-on-primary-container)",
  "--button-danger-icon-color": "var(--color-on-danger-container)",
  "--button-success-icon-color": "var(--color-on-success-container)",
  "--button-warning-icon-color": "var(--color-on-warning-container)",
  "--button-info-icon-color": "var(--color-on-info-container)",
  "--button-primary-icon-container-color": "var(--color-primary-container)",
  "--button-danger-icon-container-color": "var(--color-danger-container)",
  "--button-success-icon-container-color": "var(--color-success-container)",
  "--button-warning-icon-container-color": "var(--color-warning-container)",
  "--button-info-icon-container-color": "var(--color-info-container)",
  "--button-disabled-color": "var(--color-disabled)",
  "--button-disabled-text-color": "var(--color-text-disabled)",
  "--button-mini-padding": "0 8px",
  "--button-small-padding": "0 12px",
  "--button-normal-padding": "0 16px",
  "--button-large-padding": "0 22px",
  "--button-round-padding": "6px",
  "--button-mini-height": "20px",
  "--button-small-height": "28px",
  "--button-normal-height": "36px",
  "--button-large-height": "44px",
  "--button-mini-font-size": "var(--font-size-xs)",
  "--button-small-font-size": "var(--font-size-sm)",
  "--button-normal-font-size": "var(--font-size-md)",
  "--button-large-font-size": "var(--font-size-lg)"
}, OO = {
  "--hover-overlay-opacity": "var(--opacity-hover)",
  "--hover-overlay-focusing-opacity": "var(--opacity-focus)"
}, TO = {
  "--menu-background-color": "var(--color-surface-container)",
  "--menu-border-radius": "4px"
}, EO = {
  "--menu-select-menu-background-color": "var(--color-surface-container)",
  "--menu-select-menu-border-radius": "4px",
  "--menu-select-menu-max-height": "278px",
  "--menu-select-menu-padding": "0"
}, DO = {
  "--menu-option-text-color": "var(--color-inverse-surface)",
  "--menu-option-normal-height": "38px",
  "--menu-option-small-height": "30px",
  "--menu-option-mini-height": "24px",
  "--menu-option-large-height": "46px",
  "--menu-option-padding": "0 12px",
  "--menu-option-normal-font-size": "var(--font-size-md)",
  "--menu-option-small-font-size": "var(--font-size-sm)",
  "--menu-option-mini-font-size": "var(--font-size-xs)",
  "--menu-option-large-font-size": "var(--font-size-lg)",
  "--menu-option-selected-background": "var(--color-primary)",
  "--menu-option-disabled-color": "var(--color-text-disabled)"
}, BO = {
  "--fab-trigger-border-radius": "16px",
  "--fab-action-size": "40px",
  "--fab-action-border-radius": "12px",
  "--fab-top": "70px",
  "--fab-bottom": "16px",
  "--fab-left": "16px",
  "--fab-right": "16px",
  "--fab-trigger-size": "56px",
  "--fab-trigger-inactive-icon-size": "26px",
  "--fab-trigger-active-icon-size": "22px",
  "--fab-actions-padding": "10px 0",
  "--fab-action-margin": "6px",
  "--fab-transition-standard-easing": "cubic-bezier(0.4, 0, 0.2, 1)"
}, IO = {
  "--breadcrumb-inactive-color": "var(--color-on-surface-variant)",
  "--breadcrumb-active-color": "var(--color-primary)",
  "--breadcrumb-separator-margin": "0 10px",
  "--breadcrumb-separator-font-size": "14px"
}, MO = {
  "--link-default-color": "#fff",
  "--link-primary-color": "var(--color-primary)",
  "--link-danger-color": "var(--color-danger)",
  "--link-success-color": "var(--color-success)",
  "--link-warning-color": "var(--color-warning)",
  "--link-info-color": "var(--color-info)",
  "--link-disabled-color": "var(--color-text-disabled)",
  "--link-font-size": "var(--font-size-md)",
  "--link-focus-opacity": "0.8"
}, NO = {
  "--cell-description-color": "var(--color-on-surface-variant)",
  "--cell-color": "var(--color-text)",
  "--cell-font-size": "var(--font-size-md)",
  "--cell-description-font-size": "var(--font-size-sm)",
  "--cell-description-margin-top": "4px",
  "--cell-padding": "10px 12px",
  "--cell-min-height": "40px",
  "--cell-border-color": "var(--color-outline)",
  "--cell-border-left": "12px",
  "--cell-border-right": "12px",
  "--cell-icon-right": "8px",
  "--cell-extra-left": "8px"
}, AO = {
  "--paper-background": "var(--color-surface-container-highest)",
  "--paper-border-radius": "12px"
}, VO = {
  "--avatar-text-color": "#000",
  "--avatar-background-color": "var(--color-primary)",
  "--avatar-border-radius": "4px",
  "--avatar-mini-size": "28px",
  "--avatar-small-size": "36px",
  "--avatar-normal-size": "48px",
  "--avatar-large-size": "64px",
  "--avatar-border": "2px solid #fff",
  "--avatar-hover-transform": "scale(1.1)"
}, LO = {
  "--field-decorator-text-color": "var(--color-inverse-surface)",
  "--field-decorator-blur-color": "var(--color-on-surface-variant)",
  "--field-decorator-error-color": "var(--color-danger)",
  "--field-decorator-focus-color": "var(--color-primary)",
  "--field-decorator-placeholder-size": "16px",
  "--field-decorator-icon-size": "20px",
  "--field-decorator-line-size": "1px",
  "--field-decorator-line-focus-size": "2px",
  "--field-decorator-line-border-radius": "4px",
  "--field-decorator-disabled-color": "var(--color-text-disabled)",
  "--field-decorator-standard-normal-margin-top": "22px",
  "--field-decorator-standard-normal-margin-bottom": "4px",
  "--field-decorator-standard-normal-icon-margin-top": "22px",
  "--field-decorator-standard-normal-icon-margin-bottom": "4px",
  "--field-decorator-standard-normal-non-hint-margin-top": "4px",
  "--field-decorator-standard-small-margin-top": "18px",
  "--field-decorator-standard-small-margin-bottom": "4px",
  "--field-decorator-standard-small-icon-margin-top": "18px",
  "--field-decorator-standard-small-icon-margin-bottom": "4px",
  "--field-decorator-standard-small-non-hint-margin-top": "2px",
  "--field-decorator-outlined-normal-margin-top": "16px",
  "--field-decorator-outlined-normal-margin-bottom": "16px",
  "--field-decorator-outlined-normal-padding-left": "16px",
  "--field-decorator-outlined-normal-padding-right": "16px",
  "--field-decorator-outlined-normal-placeholder-space": "4px",
  "--field-decorator-outlined-normal-icon-margin-top": "16px",
  "--field-decorator-outlined-normal-icon-margin-bottom": "16px",
  "--field-decorator-outlined-small-margin-top": "8px",
  "--field-decorator-outlined-small-margin-bottom": "8px",
  "--field-decorator-outlined-small-padding-left": "12px",
  "--field-decorator-outlined-small-padding-right": "12px",
  "--field-decorator-outlined-small-placeholder-space": "2px",
  "--field-decorator-outlined-small-icon-margin-top": "8px",
  "--field-decorator-outlined-small-icon-margin-bottom": "8px"
}, RO = {
  "--checkbox-unchecked-color": "var(--color-on-surface-variant)",
  "--checkbox-text-color": "var(--color-on-surface-variant)",
  "--checkbox-checked-color": "var(--color-primary)",
  "--checkbox-disabled-color": "var(--color-text-disabled)",
  "--checkbox-error-color": "var(--color-danger)",
  "--checkbox-action-padding": "6px",
  "--checkbox-icon-size": "24px"
}, FO = {
  "--radio-unchecked-color": "var(--color-on-surface-variant)",
  "--radio-text-color": "var(--color-on-surface-variant)",
  "--radio-checked-color": "var(--color-primary)",
  "--radio-disabled-color": "var(--color-text-disabled)",
  "--radio-error-color": "var(--color-danger)",
  "--radio-icon-size": "24px",
  "--radio-action-padding": "6px"
}, UO = {
  "--card-border-radius": "12px",
  "--card-background": "var(--color-surface-container-highest)",
  "--card-image-height": "188px",
  "--card-title-color": "var(--color-inverse-surface)",
  "--card-title-font-size": "16px",
  "--card-title-padding": "0 16px",
  "--card-title-margin": "16px 0 0 0",
  "--card-subtitle-color": "var(--color-on-surface-variant)",
  "--card-subtitle-padding": "0 16px",
  "--card-subtitle-margin": "4px 0 0 0",
  "--card-description-margin": "32px 0 0 0",
  "--card-description-padding": "0 16px",
  "--card-description-color": "var(--color-on-surface-variant)",
  "--card-padding": "0 0 16px 0",
  "--card-footer-margin": "32px 0 0 0",
  "--card-title-row-margin": "16px 0 0 0",
  "--card-subtitle-row-margin": "4px 0 0 0",
  "--card-footer-padding": "0 16px",
  "--card-close-button-size": "56px",
  "--card-close-button-primary-color": "var(--color-primary-container)",
  "--card-close-button-text-color": "var(--color-on-primary-container)",
  "--card-close-button-border-radius": "12px",
  "--card-outline-color": "var(--color-outline)",
  "--card-image-width": "100%",
  "--card-row-image-width": "140px",
  "--card-row-height": "140px",
  "--card-subtitle-font-size": "14px",
  "--card-description-font-size": "14px",
  "--card-footer-right": "13px",
  "--card-footer-bottom": "9px",
  "--card-line-height": "22px",
  "--card-row-line-height": "1.5",
  "--card-floating-buttons-bottom": "16px",
  "--card-floating-buttons-right": "16px",
  "--card-floating-buttons-color": "#fff",
  "--card-close-button-icon-size": "24px"
}, HO = {
  "--chip-round-radius": "8px",
  "--chip-default-color": "var(--color-surface-container-highest)",
  "--chip-default-text-color": "var(--color-on-surface-variant)",
  "--chip-primary-text-color": "var(--color-on-primary-container)",
  "--chip-danger-text-color": "var(--color-on-danger-container)",
  "--chip-success-text-color": "var(--color-on-success-container)",
  "--chip-warning-text-color": "var(--color-on-warning-container)",
  "--chip-info-text-color": "var(--color-on-info-container)",
  "--chip-primary-color": "var(--color-primary-container)",
  "--chip-danger-color": "var(--color-danger-container)",
  "--chip-success-color": "var(--color-success-container)",
  "--chip-warning-color": "var(--color-warning-container)",
  "--chip-info-color": "var(--color-info-container)",
  "--chip-primary-plain-color": "var(--color-primary)",
  "--chip-danger-plain-color": "var(--color-danger)",
  "--chip-success-plain-color": "var(--color-success)",
  "--chip-warning-plain-color": "var(--color-warning)",
  "--chip-info-plain-color": "var(--color-info)",
  "--chip-border-radius": "2px",
  "--chip-normal-height": "32px",
  "--chip-large-height": "40px",
  "--chip-small-height": "24px",
  "--chip-mini-height": "16px",
  "--chip-normal-padding": "0 10px",
  "--chip-large-padding": "0 17px",
  "--chip-small-padding": "0 6px",
  "--chip-mini-padding": "0 4px",
  "--chip-text-normal-margin": "0 5px",
  "--chip-text-large-margin": "0 5px",
  "--chip-text-small-margin": "0 3px",
  "--chip-text-mini-margin": "0 2px",
  "--chip-mini-font-size": "var(--font-size-xs)",
  "--chip-small-font-size": "var(--font-size-sm)",
  "--chip-normal-font-size": "var(--font-size-md)",
  "--chip-large-font-size": "var(--font-size-lg)"
}, YO = {
  "--badge-default-color": "#3B383E",
  "--badge-default-text-color": "#fff",
  "--badge-content-padding": "2px 6px",
  "--badge-content-border": "none",
  "--badge-content-border-radius": "100px",
  "--badge-content-font-size": "12px",
  "--badge-icon-size": "12px",
  "--badge-primary-color": "var(--color-primary)",
  "--badge-danger-color": "var(--color-danger)",
  "--badge-success-color": "var(--color-success)",
  "--badge-warning-color": "var(--color-warning)",
  "--badge-info-color": "var(--color-info)",
  "--badge-primary-text-color": "var(--color-on-primary)",
  "--badge-danger-text-color": "var(--color-on-danger)",
  "--badge-success-text-color": "var(--color-on-success)",
  "--badge-warning-text-color": "var(--color-on-warning)",
  "--badge-info-text-color": "var(--color-on-info)",
  "--badge-dot-width": "8px",
  "--badge-dot-height": "8px"
}, jO = {
  "--tooltip-default-color": "var(--color-inverse-surface)",
  "--tooltip-opacity": "1",
  "--tooltip-default-text-color": "#322F35",
  "--tooltip-border-radius": "4px",
  "--tooltip-font-size": "14px",
  "--tooltip-padding": "8px 16px",
  "--tooltip-offset": "10px",
  "--tooltip-primary-color": "var(--color-primary)",
  "--tooltip-info-color": "var(--color-info)",
  "--tooltip-success-color": "var(--color-success)",
  "--tooltip-warning-color": "var(--color-warning)",
  "--tooltip-danger-color": "var(--color-danger)",
  "--tooltip-primary-text-color": "var(--color-on-primary)",
  "--tooltip-info-text-color": "var(--color-on-info)",
  "--tooltip-success-text-color": "var(--color-on-success)",
  "--tooltip-warning-text-color": "var(--color-on-warning)",
  "--tooltip-danger-text-color": "var(--color-on-danger)"
}, WO = {
  "--progress-label-color": "#fff",
  "--progress-font-size": "var(--font-size-sm)",
  "--progress-track-color": "#d8d8d8",
  "--progress-background": "var(--color-primary)",
  "--progress-default-color": "#f5f5f5",
  "--progress-primary-color": "var(--color-primary)",
  "--progress-danger-color": "var(--color-danger)",
  "--progress-success-color": "var(--color-success)",
  "--progress-warning-color": "var(--color-warning)",
  "--progress-info-color": "var(--color-info)",
  "--progress-linear-border-radius": "0px"
}, KO = {
  "--tabs-background": "var(--color-body)",
  "--tabs-item-horizontal-height": "44px",
  "--tabs-item-vertical-height": "66px",
  "--tabs-radius": "2px",
  "--tabs-padding": "12px",
  "--tabs-indicator-size": "2px",
  "--tabs-indicator-border-radius": "0",
  "--tabs-indicator-background": "var(--color-primary)",
  "--tabs-indicator-inner-size": "100%"
}, qO = {
  "--tab-inactive-color": "var(--color-on-surface-variant)",
  "--tab-padding": "12px",
  "--tab-active-color": "var(--color-primary)",
  "--tab-disabled-color": "var(--color-text-disabled)",
  "--tab-font-size": "var(--font-size-md)",
  "--tab-font-weight": "400",
  "--tab-active-font-size": "var(--font-size-md)",
  "--tab-active-font-weight": "400"
}, XO = {
  "--step-content-color": "rgba(255, 255, 255, .38)",
  "--step-content-active-color": "#fff",
  "--step-line-background": "#fff",
  "--step-tag-size": "20px",
  "--step-tag-background": "#9e9e9e",
  "--step-tag-font-size": "var(--font-size-md)",
  "--step-tag-color": "var(--color-on-primary)",
  "--step-tag-active-color": "var(--color-primary)",
  "--step-tag-margin": "4px 0",
  "--step-tag-icon-size": "var(--font-size-lg)",
  "--step-content-font-size": "var(--font-size-md)",
  "--step-line-gap": "8px",
  "--step-vertical-tag-margin": "0 4px",
  "--step-vertical-min-height": "50px"
}, GO = {
  "--divider-text-color": "#aaa",
  "--divider-color": "var(--color-outline)",
  "--divider-text-margin": "8px 0",
  "--divider-text-padding": "0 8px",
  "--divider-inset": "72px"
}, ZO = {
  "--table-background": "var(--color-surface-container-highest)",
  "--table-thead-th-text-color": "rgba(255, 255, 255, 0.6)",
  "--table-thead-th-text-align": "left",
  "--table-tbody-td-text-color": "#fff",
  "--table-tbody-tr-hover-background": "var(--color-surface-container-highest)",
  "--table-border-radius": "2px",
  "--table-thead-border-bottom": "thin solid var(--color-outline)",
  "--table-thead-th-font-size": "14px",
  "--table-thead-tr-border-bottom": "thin solid var(--color-outline)",
  "--table-tbody-tr-border-bottom": "thin solid var(--color-outline)",
  "--table-tbody-td-font-size": "16px",
  "--table-tbody-td-text-align": "left",
  "--table-row-height": "46px",
  "--table-row-padding": "0 16px",
  "--table-footer-border-top": "thin solid var(--color-outline)"
}, JO = {
  "--pagination-text-color": "#fff",
  "--pagination-item-background": "var(--color-surface-container)",
  "--pagination-font-size": "var(--font-size-md)",
  "--pagination-active-color": "var(--color-on-primary)",
  "--pagination-active-bg-color": "var(--color-primary)",
  "--pagination-hover-bg-color": "rgba(85, 85, 85, 0.15)",
  "--pagination-total-margin": "0 12px",
  "--pagination-total-line-height": "24px",
  "--pagination-item-width": "32px",
  "--pagination-item-height": "32px",
  "--pagination-item-margin": "0 6px",
  "--pagination-item-border-radius": "4px",
  "--pagination-item-simple-border-radius": "50%",
  "--pagination-input-width": "32px",
  "--pagination-disabled-color": "var(--color-text-disabled)",
  "--pagination-bg-disabled-color": "var(--color-disabled)",
  "--pagination-size-line-height": "24px",
  "--pagination-size-padding": "0 6px"
}, QO = {
  "--watermark-content-color": "#ffffff"
}, xO = {
  "--collapse-background": "var(--color-surface-container-highest)",
  "--collapse-text-color": "var(--color-inverse-surface)",
  "--collapse-header-font-size": "var(--font-size-lg)",
  "--collapse-header-padding": "10px 12px",
  "--collapse-content-font-size": "var(--font-size-md)",
  "--collapse-content-padding": "0 12px 10px",
  "--collapse-item-margin-top": "16px",
  "--collapse-disable-color": "#bdbdbd",
  "--collapse-border-top": "thin solid var(--color-outline)"
}, _O = {
  "--result-background": "var(--color-surface-container-highest)",
  "--result-border-radius": "12px",
  "--result-title-color": "var(--color-inverse-surface)",
  "--result-description-color": "var(--color-on-surface-variant)",
  "--result-question-color": "#7f8e96",
  "--result-question-border-color": "rgba(151,194,216,0.3)",
  "--result-empty-color": "#adadad",
  "--result-empty-border-color": "rgba(232,229,229,0.3)",
  "--result-info-border-color": "rgba(204, 194, 220, 0.3)",
  "--result-success-border-color": "rgba(186, 207, 131, 0.3)",
  "--result-error-border-color": "rgba(242, 184, 181, 0.3)",
  "--result-warning-border-color": "rgba(239, 184, 200, 0.3)",
  "--result-padding": "24px",
  "--result-title-font-size": "32px",
  "--result-title-margin": "15px 0 0 0",
  "--result-image-size": "80px",
  "--result-title-font-weight": "500",
  "--result-description-margin": "10px 0 0 0",
  "--result-description-font-size": "14px",
  "--result-description-line-height": "1.6",
  "--result-info-color": "var(--color-info)",
  "--result-success-color": "var(--color-success)",
  "--result-error-color": "var(--color-danger)",
  "--result-warning-color": "var(--color-warning)"
}, e3 = {
  "--app-bar-color": "#211F26",
  "--app-bar-text-color": "var(--color-inverse-surface)",
  "--app-bar-title-padding": "0 12px",
  "--app-bar-title-font-size": "var(--font-size-lg)",
  "--app-bar-height": "54px",
  "--app-bar-left-gap": "6px",
  "--app-bar-right-gap": "6px",
  "--app-bar-border-radius": "4px",
  "--app-bar-font-size": "var(--font-size-lg)"
}, n3 = {
  "--bottom-navigation-background-color": "var(--color-surface-container)",
  "--bottom-navigation-height": "50px",
  "--bottom-navigation-variant-height": "66px",
  "--bottom-navigation-z-index": "1",
  "--bottom-navigation-border-color": "var(--color-outline)",
  "--bottom-navigation-fab-offset": "4px",
  "--bottom-navigation-fab-border-radius": "50%"
}, o3 = {
  "--bottom-navigation-item-active-background-color": "#4A4458",
  "--bottom-navigation-item-inactive-color": "var(--color-on-surface-variant)",
  "--bottom-navigation-item-variant-active-background-color": "var(--color-info-container)",
  "--bottom-navigation-item-variant-active-color": "var(--color-on-info-container)",
  "--bottom-navigation-fab-border-radius": "12px",
  "--bottom-navigation-item-font-size": "var(--font-size-sm)",
  "--bottom-navigation-item-active-color": "var(--color-primary)",
  "--bottom-navigation-item-line-height": "1",
  "--bottom-navigation-item-icon-size": "22px",
  "--bottom-navigation-item-icon-margin-bottom": "5px",
  "--bottom-navigation-item-variant-icon-container-height": "30px",
  "--bottom-navigation-item-variant-icon-container-border-radius": "100px",
  "--bottom-navigation-item-variant-icon-container-max-width": "58px"
}, t3 = {
  "--snackbar-color": "#322F35",
  "--snackbar-background": "var(--color-inverse-surface)",
  "--snackbar-width": "256px",
  "--snackbar-border-radius": "4px",
  "--snackbar-font-size": "var(--font-size-md)",
  "--snackbar-margin": "6px 24px",
  "--snackbar-border-color": "currentColor",
  "--snackbar-success-background": "var(--color-success)",
  "--snackbar-info-background": "var(--color-info)",
  "--snackbar-error-background": "var(--color-danger)",
  "--snackbar-warning-background": "var(--color-warning)",
  "--snackbar-content-padding": "14px 16px",
  "--snackbar-action-margin": "0 8px",
  "--snackbar-vertical-action-margin": "0 8px 8px 0",
  "--snackbar-icon-margin": "0 8px"
}, r3 = {
  "--action-sheet-background": "var(--color-surface-container-high)",
  "--action-sheet-title-color": "var(--color-on-surface-variant)",
  "--action-sheet-action-item-color": "var(--color-inverse-surface)",
  "--action-sheet-border-radius": "0px",
  "--action-sheet-border-top": "none",
  "--action-sheet-title-padding": "10px 16px",
  "--action-sheet-title-font-size": "14px",
  "--action-sheet-action-item-height": "48px",
  "--action-sheet-action-item-padding": "0 18px",
  "--action-sheet-action-item-disabled-color": "var(--color-text-disabled)",
  "--action-sheet-icon-margin": "0 20px 0 0",
  "--action-sheet-icon-size": "24px"
}, a3 = {
  "--dialog-width": "312px",
  "--dialog-background": "var(--color-surface-container-high)",
  "--dialog-title-color": "var(--color-inverse-surface)",
  "--dialog-message-color": "var(--color-on-surface-variant)",
  "--dialog-border-radius": "28px",
  "--dialog-title-padding": "24px 24px 0",
  "--dialog-message-padding": "16px 24px 24px",
  "--dialog-actions-padding": "0 24px 24px",
  "--dialog-title-font-size": "20px",
  "--dialog-button-margin-left": "8px",
  "--dialog-message-line-height": "24px",
  "--dialog-message-font-size": "var(--font-size-md)",
  "--dialog-confirm-button-color": "var(--color-primary)",
  "--dialog-cancel-button-color": "var(--color-primary)"
}, i3 = {
  "--pull-refresh-background": "var(--color-surface-container-highest)",
  "--pull-refresh-size": "40px",
  "--pull-refresh-color": "var(--color-primary)",
  "--pull-refresh-success-color": "var(--color-success)",
  "--pull-refresh-icon-size": "25px"
}, l3 = {
  "--popup-content-background-color": "var(--color-surface-container-high)",
  "--popup-overlay-background-color": "rgba(0, 0, 0, 0.6)"
}, s3 = {
  "--picker-background": "var(--color-body)",
  "--picker-cancel-button-text-color": "var(--color-primary)",
  "--picker-title-text-color": "#fff",
  "--picker-option-text-color": "#fff",
  "--picker-mask-background-image": "linear-gradient(180deg, rgba(20, 18, 24, 0.9), rgba(20, 18, 24, 0.4)), linear-gradient(0deg, rgba(20, 18, 24, 0.9), rgba(20, 18, 24, 0.4))",
  "--picker-toolbar-height": "44px",
  "--picker-confirm-button-text-color": "var(--color-primary)",
  "--picker-picked-border": "1px solid var(--color-outline)",
  "--picker-title-font-size": "var(--font-size-lg)",
  "--picker-option-font-size": "var(--font-size-lg)",
  "--picker-toolbar-padding": "0 4px"
}, u3 = {
  "--floating-panel-background": "var(--color-surface-container-low)",
  "--floating-panel-toolbar-background": "#938F99",
  "--floating-panel-toolbar-width": "32px",
  "--floating-panel-toolbar-height": "4px",
  "--floating-panel-header-height": "36px",
  "--floating-panel-z-index": "999",
  "--floating-panel-border-top": "none",
  "--floating-panel-border-radius": "0",
  "--floating-panel-toolbar-border-radius": "10px",
  "--floating-panel-transition-timing-function": "cubic-bezier(0.18, 0.89, 0.32, 1.28)"
}, c3 = {
  "--back-top-button-border-radius": "12px",
  "--back-top-right": "40px",
  "--back-top-bottom": "40px",
  "--back-top-button-size": "40px"
}, d3 = {
  "--select-scroller-background": "var(--color-surface-container)",
  "--select-scroller-border-radius": "4px",
  "--select-scroller-padding": "6px 0",
  "--select-scroller-max-height": "278px",
  "--select-chip-margin": "5px 5px 0",
  "--select-arrow-size": "20px",
  "--select-standard-menu-margin": "calc(var(--field-decorator-placeholder-size) * 0.75 + 12px) 0 0 0",
  "--select-label-font-size": "16px"
}, f3 = {
  "--option-text-color": "var(--color-inverse-surface)",
  "--option-height": "38px",
  "--option-padding": "0 12px",
  "--option-font-size": "16px",
  "--option-selected-background": "var(--field-decorator-focus-color)",
  "--option-disabled-color": "var(--color-text-disabled)"
}, p3 = {
  "--counter-font-color": "#3B383E",
  "--counter-button-text-color": "#3B383E",
  "--counter-padding": "0 4px",
  "--counter-background": "var(--color-primary)",
  "--counter-input-width": "28px",
  "--counter-input-margin": "0 4px",
  "--counter-input-font-size": "14px",
  "--counter-button-size": "28px",
  "--counter-button-icon-size": "100%",
  "--counter-disabled-color": "var(--color-disabled)",
  "--counter-disabled-opacity": "var(--opacity-disabled)",
  "--counter-error-color": "var(--color-danger)"
}, v3 = {
  "--switch-track-background": "#727272",
  "--switch-handle-background": "#727272",
  "--switch-track-active-background": "var(--color-primary)",
  "--switch-track-error-background": "var(--color-danger)",
  "--switch-ripple-color": "var(--color-primary)",
  "--switch-handle-color": "var(--color-primary)",
  "--switch-handle-active-color": "var(--color-on-primary)",
  "--switch-handle-active-background": "var(--color-primary)",
  "--switch-handle-error-background": "var(--color-danger)",
  "--switch-disabled-opacity": "var(--opacity-disabled)",
  "--switch-variant-width": "52px",
  "--switch-variant-height": "32px",
  "--switch-variant-track-background": "var(--color-surface-container-highest)",
  "--switch-variant-handle-width": "24px",
  "--switch-variant-handle-height": "24px",
  "--switch-variant-track-border-color": "#938F99",
  "--switch-variant-handle-color": "var(--color-on-primary)",
  "--switch-variant-handle-active-color": "var(--color-primary)",
  "--switch-variant-handle-background": "#938F99",
  "--switch-variant-handle-active-background": "var(--color-on-primary)"
}, m3 = {
  "--slider-thumb-size": "16px",
  "--slider-track-height": "4px",
  "--slider-track-background": "var(--color-surface-container-highest)",
  "--slider-track-fill-border-radius": "4px",
  "--slider-track-border-radius": "4px",
  "--slider-error-color": "var(--color-danger)",
  "--slider-track-fill-background": "var(--color-primary)",
  "--slider-thumb-block-background": "var(--color-primary)",
  "--slider-thumb-ripple-background": "var(--color-primary)",
  "--slider-thumb-label-background": "var(--color-primary)",
  "--slider-thumb-label-font-size": "var(--font-size-sm)",
  "--slider-thumb-label-text-color": "var(--color-on-primary)",
  "--slider-disabled-opacity": "var(--opacity-disabled)"
}, h3 = {
  "--uploader-file-border-radius": "8px",
  "--uploader-action-background": "var(--color-surface-container-highest)",
  "--uploader-file-name-background": "var(--color-surface-container-highest)",
  "--uploader-file-cover-background": "var(--color-surface-container-highest)",
  "--uploader-action-icon-color": "var(--color-on-surface-variant)",
  "--uploader-file-name-color": "var(--color-on-surface-variant)",
  "--uploader-action-icon-size": "24px",
  "--uploader-action-margin": "0 10px 10px 0",
  "--uploader-file-size": "80px",
  "--uploader-file-margin": "0 10px 10px 0",
  "--uploader-file-name-font-size": "12px",
  "--uploader-file-name-padding": "10px",
  "--uploader-file-text-align": "center",
  "--uploader-file-close-background": "rgba(0, 0, 0, 0.3)",
  "--uploader-file-close-size": "24px",
  "--uploader-file-close-icon-font-size": "14px",
  "--uploader-file-close-icon-color": "#fff",
  "--uploader-file-cover-fit": "cover",
  "--uploader-preview-video-width": "100vw",
  "--uploader-preview-video-height": "100vw",
  "--uploader-file-indicator-height": "4px",
  "--uploader-file-indicator-normal-color": "var(--color-disabled)",
  "--uploader-file-indicator-success-color": "var(--color-success)",
  "--uploader-file-indicator-error-color": "var(--color-danger)",
  "--uploader-file-progress-color": "var(--color-primary)",
  "--uploader-disabled-color": "var(--color-disabled)",
  "--uploader-disabled-text-color": "var(--color-text-disabled)",
  "--uploader-loading-background": "linear-gradient(90deg, hsla(0, 0%, 100%, 0), hsla(0, 0%, 100%, 0.3), hsla(0, 0%, 100%, 0))"
}, g3 = {
  "--time-picker-title-color": "var(--color-inverse-surface)",
  "--time-picker-clock-container-background": "var(--color-surface-container-highest)",
  "--time-picker-title-hint-color": "var(--color-on-surface-variant)",
  "--time-picker-title-background": "var(--color-surface-container-high)",
  "--time-picker-body-background": "var(--color-surface-container-high)",
  "--time-picker-clock-item-disable-color": "#888",
  "--time-picker-clock-item-disable-background": "#ccc",
  "--time-picker-clock-item-text-color": "var(--color-inverse-surface)",
  "--time-picker-border-radius": "20px",
  "--time-picker-title-padding": "20px 20px 16px",
  "--time-picker-actions-padding": "20px",
  "--time-picker-title-margin-bottom": "20px",
  "--time-picker-title-time-font-size": "40px",
  "--time-picker-title-ampm-border-radius": "8px",
  "--time-picker-title-time-padding": "8px 12px",
  "--time-picker-title-time-border-radius": "8px",
  "--time-picker-title-ampm-border": "thin solid #938F99",
  "--time-picker-title-ampm-button-padding": "8px",
  "--time-picker-title-time-background": "var(--color-surface-container-highest)",
  "--time-picker-title-inactive-opacity": "1",
  "--time-picker-title-time-active-background": "var(--color-primary-container)",
  "--time-picker-title-ampm-button-active-background": "var(--color-warning-container)",
  "--time-picker-font-size": "var(--font-size-md)",
  "--time-picker-min-width": "290px",
  "--time-picker-title-height": "105px",
  "--time-picker-title-hint-font-size": "14px",
  "--time-picker-title-time-margin": "0 5px",
  "--time-picker-title-ampm-margin-left": "10px",
  "--time-picker-clock-left": "27px",
  "--time-picker-clock-right": "27px",
  "--time-picker-clock-top": "27px",
  "--time-picker-clock-bottom": "27px",
  "--time-picker-clock-container-width": "256px",
  "--time-picker-clock-container-height": "256px",
  "--time-picker-clock-hand-height": "calc(50% - 4px)",
  "--time-picker-clock-hand-width": "2px",
  "--time-picker-clock-hand-bottom": "50%",
  "--time-picker-clock-hand-left": "calc(50% - 1px)",
  "--time-picker-clock-hand-background": "var(--color-primary)",
  "--time-picker-clock-hand-border-color": "var(--color-primary)",
  "--time-picker-clock-hand-before-width": "10px",
  "--time-picker-clock-hand-before-height": "10px",
  "--time-picker-clock-hand-before-border-width": "2px",
  "--time-picker-clock-hand-after-width": "4px",
  "--time-picker-clock-hand-after-height": "4px",
  "--time-picker-clock-item-height": "32px",
  "--time-picker-clock-item-width": "32px",
  "--time-picker-clock-item-active-background": "var(--color-primary)",
  "--time-picker-clock-item-active-color": "var(--color-on-primary)",
  "--time-picker-inner-left": "36px",
  "--time-picker-inner-right": "36px",
  "--time-picker-inner-top": "36px",
  "--time-picker-inner-bottom": "36px",
  "--time-picker-body-height": "288px",
  "--time-picker-title-time-container-justify-content": "flex-end"
}, b3 = {
  "--date-picker-title-background": "var(--color-surface-container-high)",
  "--date-picker-title-color": "var(--color-inverse-surface)",
  "--date-picker-title-hint-color": "var(--color-on-surface-variant)",
  "--date-picker-body-background-color": "var(--color-surface-container-high)",
  "--date-picker-main-color": "var(--color-inverse-surface)",
  "--date-picker-border-radius": "20px",
  "--date-picker-title-padding": "20px 20px 16px",
  "--date-picker-actions-padding": "20px",
  "--day-picker-head-item-color": "var(--color-inverse-surface)",
  "--date-picker-header-arrow-filter": "opacity(1)",
  "--date-picker-header-padding": "0 0 16px",
  "--date-picker-body-height": "300px",
  "--date-picker-body-padding": "0 14px 16px",
  "--date-picker-header-color": "var(--color-on-surface-variant)",
  "--date-picker-font-size": "var(--font-size-md)",
  "--date-picker-min-width": "290px",
  "--date-picker-title-hint-font-size": "var(--font-size-md)",
  "--date-picker-title-height": "105px",
  "--date-picker-title-year-font-size": "var(--font-size-md)",
  "--date-picker-title-year-font-weight": "500",
  "--date-picker-title-year-margin-bottom": "8px",
  "--date-picker-title-date-height": "48px",
  "--date-picker-title-date-font-size": "34px",
  "--date-picker-title-date-font-weight": "500",
  "--date-picker-title-date-range-font-size": "20px",
  "--date-picker-title-date-justify-content": "normal",
  "--month-picker-padding": "0 12px",
  "--month-picker-item-width": "33%",
  "--month-picker-item-height": "56px",
  "--month-picker-item-button-max-width": "140px",
  "--year-picker-padding": "0 12px",
  "--year-picker-item-width": "33%",
  "--year-picker-item-height": "56px",
  "--year-picker-item-button-max-width": "140px",
  "--day-picker-content-item-width": "14.28%",
  "--day-picker-content-item-font-size": "var(--font-size-sm)",
  "--day-picker-content-item-padding": "2px 0",
  "--day-picker-content-item-button-width": "32px",
  "--day-picker-content-item-button-height": "32px",
  "--day-picker-content-item-button-font-size": "var(--font-size-sm)",
  "--day-picker-head-item-padding": "8px 0",
  "--day-picker-head-item-font-weight": "600"
}, y3 = {
  "--rate-color": "var(--color-on-surface-variant)",
  "--rate-size": "24px",
  "--rate-disabled-color": "var(--color-text-disabled)",
  "--rate-error-color": "var(--color-danger)",
  "--rate-action-padding": "4px",
  "--rate-primary-color": "var(--color-primary)"
}, k3 = {
  "--skeleton-card-background-color": "hsla(0,0%,100%,.12)",
  "--skeleton-animation-background": `linear-gradient(
        90deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.05),hsla(0,0%,100%,0))
      `,
  "--skeleton-avatar-background-color": "hsla(0,0%,100%,.12)",
  "--skeleton-title-background-color": "hsla(0,0%,100%,.12)",
  "--skeleton-content-padding": "16px",
  "--skeleton-card-height": "160px",
  "--skeleton-card-border-radius": "4px",
  "--skeleton-card-margin-bottom": "16px",
  "--skeleton-avatar-size": "34px",
  "--skeleton-avatar-border-radius": "50%",
  "--skeleton-avatar-margin-right": "16px",
  "--skeleton-title-width": "50%",
  "--skeleton-title-border-radius": "10px",
  "--skeleton-row-height": "12px",
  "--skeleton-row-border-radius": "10px",
  "--skeleton-row-margin-top": "10px"
}, $3 = {
  "--avatar-group-offset": "-10px"
}, w3 = {
  "--countdown-text-color": "var(--color-text)",
  "--countdown-text-font-size": "var(--font-size-lg)"
}, C3 = {
  "--form-details-error-message-color": "var(--color-danger)",
  "--form-details-extra-message-color": "#888",
  "--form-details-margin-top": "6px",
  "--form-details-font-size": "12px",
  "--form-details-message-margin-right": "4px"
}, S3 = {
  "--icon-size": "20px"
}, P3 = {
  "--image-preview-swipe-indicators-text-color": "#ddd",
  "--image-preview-swipe-indicators-padding": "16px 0",
  "--image-preview-zoom-container-background": "#000",
  "--image-preview-close-icon-top": "14px",
  "--image-preview-close-icon-right": "14px",
  "--image-preview-extra-top": "14px",
  "--image-preview-extra-left": "14px",
  "--image-preview-close-icon-size": "22px",
  "--image-preview-close-icon-color": "#fff"
}, z3 = {
  "--index-bar-list-right": "0",
  "--index-bar-list-top": "50%",
  "--index-bar-list-left": "auto",
  "--index-bar-list-bottom": "auto",
  "--index-bar-list-transform": "translate(0, -50%)",
  "--index-bar-list-item-font-size": "var(--font-size-xs)",
  "--index-bar-list-item-color": "var(--color-primary)",
  "--index-bar-list-item-active-color": "var(--color-danger)",
  "--index-bar-list-item-height": "14px",
  "--index-bar-list-item-padding": "0 10px"
}, O3 = {
  "--input-input-height": "24px",
  "--input-input-font-size": "16px",
  "--input-textarea-height": "auto"
}, T3 = {
  "--list-loading-height": "50px",
  "--list-finished-height": "50px",
  "--list-error-height": "50px",
  "--list-loading-color": "#888",
  "--list-finished-color": "#888",
  "--list-error-color": "#888",
  "--list-loading-font-size": "var(--font-size-md)",
  "--list-finished-font-size": "var(--font-size-md)",
  "--list-error-font-size": "var(--font-size-md)"
}, E3 = {
  "--loading-color": "var(--color-primary)",
  "--loading-opacity": "0.38",
  "--loading-desc-margin": "8px 0 0",
  "--loading-desc-color": "var(--color-primary)"
}, D3 = {
  "--loading-bar-color": "var(--color-primary)",
  "--loading-bar-error-color": "var(--color-danger)",
  "--loading-bar-height": "3px"
}, B3 = {
  "--overlay-background-color": "rgba(0, 0, 0, 0.6)"
}, I3 = {
  "--ripple-cubic-bezier": "cubic-bezier(0.68, 0.01, 0.62, 0.6)",
  "--ripple-color": "currentColor"
}, M3 = {
  "--space-size-mini-y": "4px",
  "--space-size-mini-x": "4px",
  "--space-size-small-y": "6px",
  "--space-size-small-x": "6px",
  "--space-size-normal-y": "8px",
  "--space-size-normal-x": "12px",
  "--space-size-large-y": "12px",
  "--space-size-large-x": "20px"
}, N3 = {
  "--swipe-indicator-color": "#fff",
  "--swipe-indicators-offset": "10px",
  "--swipe-indicator-offset": "4px",
  "--swipe-navigation-z-index": "9",
  "--swipe-navigation-button-width": "36px",
  "--swipe-navigation-button-height": "36px",
  "--swipe-navigation-button-border-radius": "50%",
  "--swipe-navigation-icon-size": "20px",
  "--swipe-navigation-prev-left": "8px",
  "--swipe-navigation-next-right": "8px",
  "--swipe-navigation-prev-top": "8px",
  "--swipe-navigation-next-bottom": "8px"
}, A3 = Object.defineProperty, _c = Object.getOwnPropertySymbols, V3 = Object.prototype.hasOwnProperty, L3 = Object.prototype.propertyIsEnumerable, ed = (e, n, o) => n in e ? A3(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, ke = (e, n) => {
  for (var o in n || (n = {}))
    V3.call(n, o) && ed(e, o, n[o]);
  if (_c)
    for (var o of _c(n))
      L3.call(n, o) && ed(e, o, n[o]);
  return e;
}, R3 = ke(ke(ke(ke(ke(ke(ke(ke(ke(ke(ke(ke(ke(ke(ke(ke(ke(ke(ke(ke(ke(ke(ke(ke(ke(ke(ke(ke(ke(ke(ke(ke(ke(ke(ke(ke(ke(ke(ke(ke(ke(ke(ke(ke(ke(ke(ke(ke(ke(ke(ke(ke(ke(ke(ke(ke(ke(ke(ke(ke(ke(ke(ke({
  "--font-size-xs": "10px",
  "--font-size-sm": "12px",
  "--font-size-md": "14px",
  "--font-size-lg": "16px",
  "--icon-size-xs": "16px",
  "--icon-size-sm": "18px",
  "--icon-size-md": "20px",
  "--icon-size-lg": "22px",
  "--color-body": "#141218",
  "--color-text": "#fff",
  "--color-primary": "#D0BCFF",
  "--color-info": "#CCC2DC",
  "--color-success": "#BACF83",
  "--color-warning": "#EFB8C8",
  "--color-danger": "#F2B8B5",
  "--color-on-primary": "#381E72",
  "--color-on-info": "#332D41",
  "--color-on-success": "#273500",
  "--color-on-warning": "#492532",
  "--color-on-danger": "#601410",
  "--color-primary-container": "#5B4494",
  "--color-info-container": "#575065",
  "--color-success-container": "#485A19",
  "--color-warning-container": "#6F4854",
  "--color-danger-container": "#9D3A37",
  "--color-on-primary-container": "#EADDFF",
  "--color-on-info-container": "#E8DEF8",
  "--color-on-success-container": "#D5EC9C",
  "--color-on-warning-container": "#FFD8E4",
  "--color-on-danger-container": "#F9DEDC",
  "--color-disabled": "#404040",
  "--color-text-disabled": "#757575",
  "--color-surface-container": "#211F26",
  "--color-surface-container-low": "#1D1B20",
  "--color-surface-container-high": "#2B2930",
  "--color-surface-container-highest": "#36343B",
  "--color-inverse-surface": "#e6e0e9",
  "--color-outline": "#49454F",
  "--color-on-surface-variant": "#CAC4D0",
  "--opacity-disabled": "0.6",
  "--opacity-hover": "0.12",
  "--opacity-focus": "0.2",
  "--cubic-bezier": "cubic-bezier(0.25, 0.8, 0.5, 1)",
  "--shadow-key-umbra-opacity": "rgba(0, 0, 0, 0.2)",
  "--shadow-key-penumbra-opacity": "rgba(0, 0, 0, 0.14)",
  "--shadow-key-ambient-opacity": "rgba(0, 0, 0, 0.12)"
}, zO), OO), TO), EO), DO), BO), IO), MO), NO), AO), VO), LO), RO), FO), UO), HO), YO), jO), WO), KO), qO), XO), GO), ZO), JO), QO), xO), _O), e3), n3), o3), t3), r3), a3), i3), l3), s3), u3), c3), d3), f3), p3), v3), m3), h3), g3), b3), y3), k3), $3), w3), C3), S3), P3), z3), O3), T3), E3), D3), B3), I3), M3), N3);
function F3(e, n = {}) {
  const { viewportWidth: o = 375, viewportUnit: t = "vmin", unitPrecision: r = 6 } = n;
  return Object.entries(e).reduce((a, [i, l]) => (a[i] = l.includes("px") ? l.replace(
    /(\d+(\.\d+)?)px/g,
    (s, u) => `${Number((u / o * 100).toFixed(r))}${t}`
  ) : l, a), {});
}
const U3 = { dark: fz, md3Light: PO, md3Dark: R3, toViewport: F3 }, _5 = null;
var ql = U3;
const Vn = ["12", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"], $n = ["00", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"], nd = ["00", "05", "10", "15", "20", "25", "30", "35", "40", "45", "50", "55"], Lm = {
  modelValue: String,
  elevation: {
    type: [Boolean, Number, String],
    default: !1
  },
  hint: String,
  color: String,
  titleColor: String,
  format: {
    type: String,
    default: "ampm"
  },
  allowedTime: Object,
  min: String,
  max: String,
  useSeconds: Boolean,
  readonly: Boolean,
  "onUpdate:modelValue": A(),
  onChange: A()
}, Rm = (e, n) => e === "24hr" || n === "am", Ts = (e, n, o) => {
  const t = Vn.findIndex((a) => F(a) === F(o)), r = Rm(e, n) ? o : $n[t];
  return {
    hourStr: r,
    hourNum: F(r)
  };
}, Sn = (e) => {
  const [n, o, t] = e.split(":");
  return {
    hour: F(n),
    minute: F(o),
    second: F(t)
  };
}, Fm = (e) => {
  var n, o;
  const { time: t, format: r, ampm: a, hour: i, max: l, min: s, disableHour: u } = e, { hourStr: c, hourNum: d } = Ts(r, a, i);
  let f = !1, v = !1;
  if (u.includes(c))
    return !0;
  if (l && !s) {
    const { hour: g, minute: m } = Sn(l);
    f = g === d && t > m;
  }
  if (!l && s) {
    const { hour: g, minute: m } = Sn(s);
    f = g === d && t < m;
  }
  if (l && s) {
    const { hour: g, minute: m } = Sn(l), { hour: k, minute: y } = Sn(s);
    f = k === d && t < y || g === d && t > m;
  }
  return (n = e.allowedTime) != null && n.minutes && (v = (o = e.allowedTime) == null ? void 0 : o.minutes(t)), f || v;
}, Um = (e) => {
  var n, o;
  const { time: t, format: r, ampm: a, hour: i, minute: l, max: s, min: u, disableHour: c } = e, { hourStr: d, hourNum: f } = Ts(r, a, i);
  let v = !1, g = !1;
  if (c.includes(d))
    return !0;
  if (s && !u) {
    const { hour: m, minute: k, second: y } = Sn(s);
    v = m === f && k < l || k === l && t > y;
  }
  if (!s && u) {
    const { hour: m, minute: k, second: y } = Sn(u);
    v = m === f && k > l || k === l && t > y;
  }
  if (s && u) {
    const { hour: m, minute: k, second: y } = Sn(s), { hour: h, minute: C, second: S } = Sn(u);
    v = m === f && k < l || h === f && C > l || m === f && k === l && t > y || h === f && C === l && t < S;
  }
  return (n = e.allowedTime) != null && n.seconds && (g = (o = e.allowedTime) == null ? void 0 : o.seconds(t)), v || g;
}, { n: H3, classes: Y3 } = ee("time-picker");
function j3(e, n) {
  return b(), P(
    "div",
    {
      class: p(e.n("clock"))
    },
    [
      M(
        "div",
        {
          class: p(e.n("clock-hand")),
          style: K(e.handStyle)
        },
        null,
        6
        /* CLASS, STYLE */
      ),
      (b(!0), P(
        Ue,
        null,
        nn(e.timeScales, (o, t) => (b(), P(
          "div",
          {
            class: p(
              e.classes(
                e.n("clock-item"),
                [e.isActive(t, !1), e.n("clock-item--active")],
                [e.isDisable(o), e.n("clock-item--disable")]
              )
            ),
            key: o,
            style: K(e.getStyle(t, o, !1))
          },
          ae(o),
          7
          /* TEXT, CLASS, STYLE */
        ))),
        128
        /* KEYED_FRAGMENT */
      )),
      e.format === "24hr" && e.type === "hour" ? (b(), P(
        "div",
        {
          key: 0,
          class: p(e.n("clock-inner")),
          ref: "inner"
        },
        [
          (b(!0), P(
            Ue,
            null,
            nn(e.hours24, (o, t) => (b(), P(
              "div",
              {
                class: p(
                  e.classes(
                    e.n("clock-item"),
                    [e.isActive(t, !0), e.n("clock-item--active")],
                    [e.isDisable(o), e.n("clock-item--disable")]
                  )
                ),
                key: o,
                style: K(e.getStyle(t, o, !0))
              },
              ae(o),
              7
              /* TEXT, CLASS, STYLE */
            ))),
            128
            /* KEYED_FRAGMENT */
          ))
        ],
        2
        /* CLASS */
      )) : G("v-if", !0)
    ],
    2
    /* CLASS */
  );
}
const Hm = _({
  name: "Clock",
  props: {
    isInner: {
      type: Boolean,
      required: !0
    },
    rad: {
      type: Number
    },
    format: {
      type: String,
      default: "ampm"
    },
    allowedTime: {
      type: Object
    },
    time: {
      type: Object,
      required: !0
    },
    useSeconds: {
      type: Boolean
    },
    preventNextUpdate: {
      type: Boolean
    },
    type: {
      type: String,
      default: "hour"
    },
    ampm: {
      type: String,
      default: "am"
    },
    color: {
      type: String
    },
    min: {
      type: String
    },
    max: {
      type: String
    }
  },
  emits: ["update", "change-prevent-update"],
  setup(e, { emit: n }) {
    const o = $(null), t = $([]), r = $([]), a = I(() => ({
      transform: `rotate(${F(e.rad)}deg)`,
      height: e.isInner && e.type === "hour" ? "calc(50% - 40px)" : "calc(50% - 4px)",
      backgroundColor: u(),
      borderColor: u()
    })), i = I(() => {
      if (e.rad === void 0)
        return;
      const m = e.rad / 30;
      return m >= 0 ? m : m + 12;
    }), l = I(() => e.type === "hour" ? Vn : nd), s = (m, k) => {
      m = m ?? (e.type === "minute" ? e.time.minute : e.time.second);
      const y = e.type === "minute" ? Fm : Um, h = {
        time: F(m),
        format: e.format,
        ampm: e.ampm,
        hour: e.time.hour,
        minute: F(e.time.minute),
        max: e.max,
        min: e.min,
        allowedTime: e.allowedTime,
        disableHour: t.value
      };
      return k && e.type === "minute" && Reflect.deleteProperty(h, "minute"), y(h);
    }, u = () => {
      if (i.value === void 0)
        return e.color;
      const m = e.isInner ? $n[i.value] : l.value[i.value];
      return l.value === nd ? s() ? "var(--time-picker-clock-item-disable-background)" : e.color : d(m) ? "var(--time-picker-clock-item-disable-background)" : e.color;
    }, c = (m, k) => k ? i.value === m && e.isInner : i.value === m && (!e.isInner || e.type !== "hour"), d = (m) => {
      if (e.type === "hour") {
        if (Rm(e.format, e.ampm))
          return t.value.includes(m);
        const k = Vn.findIndex((y) => y === m);
        return r.value.includes(k);
      }
      return s(m, !0);
    }, f = (m, k, y) => {
      const h = 2 * Math.PI / 12 * m - Math.PI / 2, C = 50 * (1 + Math.cos(h)), S = 50 * (1 + Math.sin(h)), T = () => c(m, y) ? d(k) ? {
        backgroundColor: "var(--time-picker-clock-item-disable-background)",
        color: "var(--time-picker-clock-item-disable-color)"
      } : {
        backgroundColor: e.color,
        color: void 0
      } : {
        backgroundColor: void 0,
        color: void 0
      }, { backgroundColor: O, color: z } = T();
      return {
        left: `${C}%`,
        top: `${S}%`,
        backgroundColor: O,
        color: z
      };
    }, v = () => {
      const { width: m, height: k } = un(o.value);
      return {
        width: m,
        height: k
      };
    }, g = () => {
      if (i.value === void 0)
        return;
      const m = e.ampm === "am" ? Vn : $n;
      return Lo(m[i.value], 2, "0");
    };
    return fe([i, () => e.isInner], ([m, k], [y, h]) => {
      if (m === y && k === h || e.type !== "hour" || i.value === void 0)
        return;
      const S = k ? $n[i.value] : g(), T = e.useSeconds ? `:${e.time.second}` : "", O = `${S}:${e.time.minute}${T}`;
      e.preventNextUpdate || n("update", O), n("change-prevent-update");
    }), fe(
      () => e.rad,
      (m, k) => {
        if (e.type === "hour" || m === void 0 || k === void 0)
          return;
        const y = m / 6 >= 0 ? m / 6 : m / 6 + 60, h = k / 6 >= 0 ? k / 6 : k / 6 + 60;
        if (y === h)
          return;
        let C;
        const { hourStr: S } = Ts(e.format, e.ampm, e.time.hour);
        if (e.type === "minute") {
          const T = le().minute(y).format("mm"), O = e.useSeconds ? `:${e.time.second}` : "";
          C = `${S}:${T}${O}`;
        }
        if (e.type === "second") {
          const T = le().second(y).format("ss"), O = e.useSeconds ? `:${T}` : "";
          C = `${S}:${e.time.minute}${O}`;
        }
        n("update", C);
      }
    ), fe(
      [() => e.max, () => e.min, () => e.allowedTime],
      ([m, k, y]) => {
        if (t.value = [], m && !k) {
          const { hour: h } = Sn(m), C = Vn.filter((T) => F(T) > h), S = $n.filter((T) => F(T) > h);
          t.value = [...C, ...S];
        }
        if (!m && k) {
          const { hour: h } = Sn(k), C = Vn.filter((T) => F(T) < h), S = $n.filter((T) => F(T) < h);
          t.value = [...C, ...S];
        }
        if (m && k) {
          const { hour: h } = Sn(m), { hour: C } = Sn(k), S = Vn.filter((O) => F(O) < C || F(O) > h), T = $n.filter((O) => F(O) < C || F(O) > h);
          t.value = [...S, ...T];
        }
        if (y != null && y.hours) {
          const { hours: h } = y, C = Vn.filter((T) => !h(F(T))), S = $n.filter((T) => !h(F(T)));
          t.value = [.../* @__PURE__ */ new Set([...t.value, ...C, ...S])];
        }
        r.value = t.value.map((h) => $n.findIndex((C) => h === C)).filter((h) => h >= 0);
      },
      { immediate: !0, deep: !0 }
    ), {
      n: H3,
      classes: Y3,
      hours24: $n,
      timeScales: l,
      inner: o,
      handStyle: a,
      disableHour: t,
      isActive: c,
      isDisable: d,
      getSize: v,
      getStyle: f,
      activeItemIndex: i
    };
  }
});
Hm.render = j3;
var W3 = Hm;
const { name: K3, n: q3, classes: X3 } = ee("time-picker");
function G3(e, n) {
  var o;
  const t = te("clock");
  return b(), P(
    "div",
    {
      class: p(e.classes(e.n(), e.formatElevation(e.elevation, 2))),
      ref: "picker"
    },
    [
      M(
        "div",
        {
          class: p(e.n("title")),
          style: K({ background: e.titleColor || e.color })
        },
        [
          M(
            "div",
            {
              class: p(e.n("title-hint"))
            },
            ae((o = e.hint) != null ? o : e.t("timePickerHint")),
            3
            /* TEXT, CLASS */
          ),
          M(
            "div",
            {
              class: p(e.n("title-time-container"))
            },
            [
              M(
                "div",
                {
                  class: p(e.n("title-time"))
                },
                [
                  M(
                    "div",
                    {
                      class: p(e.classes(e.n("title-btn"), [e.type === "hour", e.n("title-btn--active")])),
                      onClick: n[0] || (n[0] = (r) => e.checkPanel("hour"))
                    },
                    ae(e.time.hour),
                    3
                    /* TEXT, CLASS */
                  ),
                  M(
                    "span",
                    {
                      class: p(e.n("title-splitter"))
                    },
                    ":",
                    2
                    /* CLASS */
                  ),
                  M(
                    "div",
                    {
                      class: p(e.classes(e.n("title-btn"), [e.type === "minute", e.n("title-btn--active")])),
                      onClick: n[1] || (n[1] = (r) => e.checkPanel("minute"))
                    },
                    ae(e.time.minute),
                    3
                    /* TEXT, CLASS */
                  ),
                  e.useSeconds ? (b(), P(
                    "span",
                    {
                      key: 0,
                      class: p(e.n("title-splitter"))
                    },
                    ":",
                    2
                    /* CLASS */
                  )) : G("v-if", !0),
                  e.useSeconds ? (b(), P(
                    "div",
                    {
                      key: 1,
                      class: p(e.classes(e.n("title-btn"), [e.type === "second", e.n("title-btn--active")])),
                      onClick: n[2] || (n[2] = (r) => e.checkPanel("second"))
                    },
                    ae(e.time.second),
                    3
                    /* TEXT, CLASS */
                  )) : G("v-if", !0)
                ],
                2
                /* CLASS */
              ),
              e.format === "ampm" ? (b(), P(
                "div",
                {
                  key: 0,
                  class: p(e.n("title-ampm"))
                },
                [
                  M(
                    "div",
                    {
                      class: p(e.classes(e.n("title-btn"), [e.ampm === "am", e.n("title-btn--active")])),
                      onClick: n[3] || (n[3] = (r) => e.checkAmpm("am"))
                    },
                    " AM ",
                    2
                    /* CLASS */
                  ),
                  M(
                    "div",
                    {
                      class: p(e.classes(e.n("title-btn"), [e.ampm === "pm", e.n("title-btn--active")])),
                      onClick: n[4] || (n[4] = (r) => e.checkAmpm("pm"))
                    },
                    " PM ",
                    2
                    /* CLASS */
                  )
                ],
                2
                /* CLASS */
              )) : G("v-if", !0)
            ],
            2
            /* CLASS */
          )
        ],
        6
        /* CLASS, STYLE */
      ),
      M(
        "div",
        {
          class: p(e.n("body"))
        },
        [
          M(
            "div",
            {
              class: p(e.n("clock-container")),
              onTouchstart: n[5] || (n[5] = (...r) => e.moveHand && e.moveHand(...r)),
              onTouchmove: n[6] || (n[6] = (...r) => e.moveHand && e.moveHand(...r)),
              onTouchend: n[7] || (n[7] = (...r) => e.end && e.end(...r)),
              ref: "container"
            },
            [
              X(Je, {
                name: `${e.n()}-panel-fade`
              }, {
                default: pe(() => [
                  (b(), Oe(t, {
                    key: e.type,
                    ref: "inner",
                    type: e.type,
                    ampm: e.ampm,
                    color: e.color,
                    "is-inner": e.isInner,
                    format: e.format,
                    "allowed-time": e.allowedTime,
                    rad: e.getRad,
                    time: e.time,
                    "prevent-next-update": e.isPreventNextUpdate,
                    "use-seconds": e.useSeconds,
                    max: e.max,
                    min: e.min,
                    onUpdate: e.update,
                    onChangePreventUpdate: e.changePreventUpdate
                  }, null, 8, ["type", "ampm", "color", "is-inner", "format", "allowed-time", "rad", "time", "prevent-next-update", "use-seconds", "max", "min", "onUpdate", "onChangePreventUpdate"]))
                ]),
                _: 1
                /* STABLE */
              }, 8, ["name"])
            ],
            34
            /* CLASS, NEED_HYDRATION */
          )
        ],
        2
        /* CLASS */
      ),
      e.$slots.actions ? (b(), P(
        "div",
        {
          key: 0,
          class: p(e.n("actions"))
        },
        [
          V(e.$slots, "actions")
        ],
        2
        /* CLASS */
      )) : G("v-if", !0)
    ],
    2
    /* CLASS */
  );
}
const Ym = _({
  name: K3,
  components: { Clock: W3 },
  props: Lm,
  setup(e) {
    const n = $(null), o = $(null), t = $(null), r = $(!1), a = $(!1), i = $(!1), l = $(!1), s = $(!1), u = $(!1), c = $(!1), d = $(0), f = $(0), v = $(), g = $("hour"), m = $("am"), k = $({
      hour: "00",
      minute: "00",
      second: "00"
    }), y = Ze({
      x: 0,
      y: 0
    }), h = Ze({
      x: [],
      y: []
    }), C = I(() => g.value === "hour" ? v.value : g.value === "minute" ? d.value : f.value);
    fe(
      () => e.modelValue,
      (Q) => {
        if (Q) {
          const { hour: de, minute: U, second: oe } = Sn(Q), B = le().hour(de).format("hh"), Y = le().hour(de).format("HH"), x = le().minute(U).format("mm"), ue = le().second(oe).format("ss");
          v.value = (B === "12" ? 0 : F(B)) * 30, d.value = F(x) * 6, f.value = F(ue) * 6, k.value = R(Q), e.format !== "24hr" && (m.value = Lo(`${de}`, 2, "0") === Y && $n.includes(Y) ? "pm" : "am"), r.value = e.format === "24hr" && $n.includes(Y);
        }
      },
      { immediate: !0 }
    );
    function S(Q) {
      w(e["onUpdate:modelValue"], Q), w(e.onChange, Q);
    }
    function T(Q) {
      return Q * 57.29577951308232;
    }
    function O(Q) {
      l.value = !1, c.value = !1, g.value = Q;
    }
    function z(Q) {
      const { disableHour: de } = t.value, U = Vn.findIndex((Y) => F(Y) === F(k.value.hour)), oe = Q === "am" ? Vn : $n;
      return [...oe.slice(U), ...oe.slice(0, U)].find((Y, x) => (a.value = x !== 0, !de.includes(Y)));
    }
    function E(Q) {
      if (e.readonly)
        return;
      m.value = Q;
      const de = z(Q);
      if (!de)
        return;
      const U = e.useSeconds ? `:${k.value.second}` : "", oe = `${Lo(de, 2, "0")}:${k.value.minute}${U}`;
      S(oe);
    }
    function D(Q, de) {
      const U = Q >= h.x[0] && Q <= h.x[1], oe = de >= h.y[0] && de <= h.y[1];
      return U && oe;
    }
    function R(Q) {
      const de = e.format === "24hr" ? "HH" : "hh", { hour: U, minute: oe, second: B } = Sn(Q);
      return {
        hour: le().hour(U).format(de),
        minute: le().minute(oe).format("mm"),
        second: le().second(B).format("ss")
      };
    }
    function N(Q) {
      const de = Q / 30;
      return de >= 0 ? de : de + 12;
    }
    function H() {
      const { width: Q, height: de } = t.value.getSize(), U = y.x - Q / 2 - 8, oe = y.x + Q / 2 + 8, B = y.y - de / 2 - 8, Y = y.y + de / 2 + 8;
      return {
        rangeXMin: U,
        rangeXMax: oe,
        rangeYMin: B,
        rangeYMax: Y
      };
    }
    function L(Q, de, U) {
      const { disableHour: oe } = t.value;
      i.value = D(Q, de);
      const B = Math.round(U / 30) * 30 + 90, Y = N(B), x = r.value ? Vn[Y] : $n[Y];
      if (oe.includes(x) || (r.value = e.format === "24hr" ? D(Q, de) : !1), r.value !== i.value)
        return;
      const ue = r.value || m.value === "pm" ? $n[Y] : Vn[Y];
      u.value = oe.includes(ue), !u.value && (v.value = B, l.value = !0);
    }
    function j(Q) {
      const { disableHour: de } = t.value, U = Math.round(Q / 6) * 6 + 90, B = {
        time: U / 6 >= 0 ? U / 6 : U / 6 + 60,
        format: e.format,
        ampm: m.value,
        hour: k.value.hour,
        max: e.max,
        min: e.min,
        disableHour: de,
        allowedTime: e.allowedTime
      };
      c.value = Fm(B), !c.value && (d.value = U, s.value = !0);
    }
    function q(Q) {
      const { disableHour: de } = t.value, U = Math.round(Q / 6) * 6 + 90, B = {
        time: U / 6 >= 0 ? U / 6 : U / 6 + 60,
        format: e.format,
        ampm: m.value,
        hour: k.value.hour,
        minute: F(k.value.minute),
        max: e.max,
        min: e.min,
        disableHour: de,
        allowedTime: e.allowedTime
      };
      Um(B) || (f.value = U);
    }
    function W() {
      const { left: Q, top: de, width: U, height: oe } = un(n.value);
      if (y.x = Q + U / 2, y.y = de + oe / 2, g.value === "hour" && e.format === "24hr") {
        const { rangeXMin: B, rangeXMax: Y, rangeYMin: x, rangeYMax: ue } = H();
        h.x = [B, Y], h.y = [x, ue];
      }
    }
    function ce(Q) {
      if (Ae(Q), e.readonly)
        return;
      W();
      const { clientX: de, clientY: U } = Q.touches[0], oe = de - y.x, B = U - y.y, Y = Math.round(T(Math.atan2(B, oe)));
      g.value === "hour" ? L(de, U, Y) : g.value === "minute" ? j(Y) : q(Y);
    }
    function J() {
      if (!e.readonly) {
        if (g.value === "hour" && l.value) {
          g.value = "minute";
          return;
        }
        g.value === "minute" && e.useSeconds && s.value && (g.value = "second");
      }
    }
    function ve() {
      a.value = !1;
    }
    return {
      getRad: C,
      time: k,
      container: n,
      inner: t,
      picker: o,
      isInner: r,
      type: g,
      ampm: m,
      isPreventNextUpdate: a,
      n: q3,
      classes: X3,
      t: an,
      moveHand: ce,
      checkPanel: O,
      checkAmpm: E,
      end: J,
      update: S,
      changePreventUpdate: ve,
      formatElevation: yn
    };
  }
});
Ym.render = G3;
var fi = Ym;
re(fi);
se(fi, Lm);
const eT = fi;
var Xl = fi;
const jm = {
  modelValue: {
    type: Array,
    default: () => []
  },
  accept: {
    type: String,
    default: "image/*"
  },
  capture: {
    type: [String, Boolean],
    default: void 0
  },
  multiple: Boolean,
  readonly: Boolean,
  disabled: Boolean,
  elevation: {
    type: [Boolean, Number, String],
    default: !0
  },
  resolveType: {
    type: String,
    default: "default"
  },
  removable: {
    type: Boolean,
    default: !0
  },
  maxlength: [Number, String],
  maxsize: [Number, String],
  previewed: {
    type: Boolean,
    default: !0
  },
  ripple: {
    type: Boolean,
    default: !0
  },
  validateTrigger: {
    type: Array,
    default: () => ["onChange", "onRemove"]
  },
  rules: Array,
  hideList: Boolean,
  preventDefaultPreview: Boolean,
  onClickAction: A(),
  onBeforeFilter: A(),
  onBeforeRead: A(),
  onAfterRead: A(),
  onBeforeRemove: A(),
  onRemove: A(),
  onOversize: A(),
  onPreview: A(),
  "onUpdate:modelValue": A()
};
var dr = (e, n, o) => new Promise((t, r) => {
  var a = (s) => {
    try {
      l(o.next(s));
    } catch (u) {
      r(u);
    }
  }, i = (s) => {
    try {
      l(o.throw(s));
    } catch (u) {
      r(u);
    }
  }, l = (s) => s.done ? t(s.value) : Promise.resolve(s.value).then(a, i);
  l((o = o.apply(e, n)).next());
});
const { name: Z3, n: J3, classes: Q3 } = ee("uploader");
let x3 = 0;
const _3 = ["onClick"], e8 = ["onClick"], n8 = ["src", "alt"], o8 = ["tabindex"], t8 = ["multiple", "accept", "capture", "disabled"], r8 = ["src"];
function a8(e, n) {
  const o = te("var-icon"), t = te("var-hover-overlay"), r = te("var-form-details"), a = te("var-popup"), i = Re("ripple"), l = Re("hover");
  return b(), P(
    "div",
    {
      class: p(e.classes(e.n(), e.n("$--box")))
    },
    [
      M(
        "div",
        {
          class: p(e.n("file-list"))
        },
        [
          (b(!0), P(
            Ue,
            null,
            nn(e.files, (s) => Me((b(), P("div", {
              class: p(e.classes(e.n("file"), e.formatElevation(e.elevation, 2), [s.state === "loading", e.n("--loading")])),
              key: s.id,
              onClick: (u) => e.preview(s)
            }, [
              M(
                "div",
                {
                  class: p(e.n("file-name"))
                },
                ae(s.name || s.url),
                3
                /* TEXT, CLASS */
              ),
              e.removable ? (b(), P("div", {
                key: 0,
                class: p(e.n("file-close")),
                onClick: In((u) => e.handleRemove(s), ["stop"])
              }, [
                X(o, {
                  class: p(e.n("file-close-icon")),
                  "var-uploader-cover": "",
                  name: "delete"
                }, null, 8, ["class"])
              ], 10, e8)) : G("v-if", !0),
              s.cover ? (b(), P("img", {
                key: 1,
                role: "img",
                class: p(e.n("file-cover")),
                style: K({ objectFit: s.fit }),
                src: s.cover,
                alt: s.name
              }, null, 14, n8)) : G("v-if", !0),
              M(
                "div",
                {
                  class: p(e.n("file-indicator"))
                },
                [
                  M(
                    "div",
                    {
                      class: p(
                        e.classes(e.n("progress"), [s.state === "success", e.n("--success")], [s.state === "error", e.n("--error")])
                      ),
                      style: K({ width: s.state === "success" || s.state === "error" ? "100%" : `${s.progress}%` })
                    },
                    null,
                    6
                    /* CLASS, STYLE */
                  )
                ],
                2
                /* CLASS */
              )
            ], 10, _3)), [
              [i, { disabled: e.disabled || e.formDisabled || e.readonly || e.formReadonly || !e.ripple }]
            ])),
            128
            /* KEYED_FRAGMENT */
          )),
          !e.maxlength || e.modelValue.length < e.toNumber(e.maxlength) ? Me((b(), P("div", {
            key: 0,
            ref: "actionRef",
            class: p(
              e.classes(
                e.n("--outline-none"),
                [!e.$slots.default, `${e.n("action")} ${e.formatElevation(e.elevation, 2)}`],
                [e.disabled || e.formDisabled, e.n("--disabled")]
              )
            ),
            tabindex: e.disabled || e.formDisabled ? void 0 : "0",
            onClick: n[2] || (n[2] = (...s) => e.handleActionClick && e.handleActionClick(...s)),
            onFocus: n[3] || (n[3] = (s) => e.isFocusing = !0),
            onBlur: n[4] || (n[4] = (s) => e.isFocusing = !1)
          }, [
            M("input", {
              ref: "input",
              type: "file",
              class: p(e.n("action-input")),
              multiple: e.multiple,
              accept: e.accept,
              capture: e.capture,
              disabled: e.disabled || e.formDisabled || e.readonly || e.formReadonly,
              onChange: n[0] || (n[0] = (...s) => e.handleChange && e.handleChange(...s)),
              onClick: n[1] || (n[1] = In(() => {
              }, ["stop"]))
            }, null, 42, t8),
            V(e.$slots, "default", {}, () => [
              X(o, {
                class: p(e.n("action-icon")),
                "var-uploader-cover": "",
                name: "plus"
              }, null, 8, ["class"]),
              X(t, {
                hovering: e.hovering && !e.disabled && !e.formDisabled && !e.readonly && !e.formReadonly,
                focusing: e.isFocusing && !e.disabled && !e.formDisabled && !e.readonly && !e.formReadonly
              }, null, 8, ["hovering", "focusing"])
            ])
          ], 42, o8)), [
            [i, {
              disabled: e.disabled || e.formDisabled || e.readonly || e.formReadonly || !e.ripple || !!e.$slots.default
            }],
            [l, e.handleHovering, "desktop"]
          ]) : G("v-if", !0)
        ],
        2
        /* CLASS */
      ),
      X(r, {
        "error-message": e.errorMessage,
        "extra-message": e.maxlengthText
      }, zt({
        _: 2
        /* DYNAMIC */
      }, [
        e.$slots["extra-message"] ? {
          name: "extra-message",
          fn: pe(() => [
            V(e.$slots, "extra-message")
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["error-message", "extra-message"]),
      X(a, {
        class: p(e.n("preview")),
        "var-uploader-cover": "",
        position: "center",
        show: e.showPreview,
        "onUpdate:show": n[5] || (n[5] = (s) => e.showPreview = s),
        onClosed: n[6] || (n[6] = (s) => e.currentPreview = null)
      }, {
        default: pe(() => {
          var s, u;
          return [
            e.currentPreview && e.isHTMLSupportVideo((s = e.currentPreview) == null ? void 0 : s.url) ? (b(), P("video", {
              key: 0,
              class: p(e.n("preview-video")),
              playsinline: "true",
              "webkit-playsinline": "true",
              "x5-playsinline": "true",
              "x5-video-player-type": "h5",
              "x5-video-player-fullscreen": "false",
              controls: "",
              src: (u = e.currentPreview) == null ? void 0 : u.url
            }, null, 10, r8)) : G("v-if", !0)
          ];
        }),
        _: 1
        /* STABLE */
      }, 8, ["class", "show"])
    ],
    2
    /* CLASS */
  );
}
const Wm = _({
  name: Z3,
  directives: { Ripple: on, Hover: zn },
  components: {
    VarIcon: Xe,
    VarPopup: Co,
    VarFormDetails: On,
    VarHoverOverlay: Nn
  },
  props: jm,
  setup(e) {
    const n = $(!1), o = $(null), t = $(null), r = $(!1), a = $(null), i = I(() => {
      const {
        maxlength: U,
        modelValue: { length: oe }
      } = e;
      return Pn(U) ? `${oe} / ${U}` : "";
    }), { form: l, bindForm: s } = Un(), {
      errorMessage: u,
      validateWithTrigger: c,
      validate: d,
      // expose
      resetValidation: f
    } = Fn(), { hovering: v, handleHovering: g } = Xn(), m = I(() => {
      const { modelValue: U, hideList: oe } = e;
      return oe ? [] : U;
    });
    let k = !1;
    const y = {
      getSuccess: j,
      getError: q,
      getLoading: W
    };
    w(s, {
      validate: Q,
      resetValidation: f,
      reset: de
    }), je(() => window, "keydown", C), je(() => window, "keyup", S), fe(
      () => e.modelValue,
      () => {
        !k && ve("onChange"), k = !1;
      },
      { deep: !0 }
    );
    function C(U) {
      n.value && ((U.key === " " || U.key === "Enter") && U.preventDefault(), U.key === "Enter" && o.value.click());
    }
    function S(U) {
      !n.value || U.key !== " " || (U.preventDefault(), o.value.click());
    }
    function T(U) {
      const { disabled: oe, previewed: B, preventDefaultPreview: Y, onPreview: x } = e;
      if (l != null && l.disabled.value || oe || !B || (w(x, Ze(U)), Y))
        return;
      const { url: ue } = U;
      if (ou(ue)) {
        Lt(ue);
        return;
      }
      tu(ue) && (a.value = U, r.value = !0);
    }
    function O(U) {
      return {
        id: x3++,
        url: "",
        cover: "",
        name: U.name,
        file: U,
        progress: 0
      };
    }
    function z(U) {
      const oe = U.target, { files: B } = oe;
      return Array.from(B);
    }
    function E(U) {
      return dr(this, null, function* () {
        const oe = U.file;
        if (e.resolveType === "default" && oe.type.startsWith("image") || e.resolveType === "data-url") {
          const Y = yield kh(oe);
          U.cover = Y, U.url = Y;
        }
        return U;
      });
    }
    function D(U) {
      return U.map(E);
    }
    function R(U) {
      const { onBeforeRead: oe } = e;
      return U.map(
        (B) => new Promise((Y) => {
          oe || Y({
            valid: !0,
            varFile: B
          });
          const x = No(w(oe, Ze(B)));
          Promise.all(x).then((ue) => {
            Y({
              valid: ue.every(Boolean),
              varFile: B
            });
          });
        })
      );
    }
    function N(U) {
      return dr(this, null, function* () {
        const { maxsize: oe, maxlength: B, modelValue: Y, onOversize: x, onAfterRead: ue, onBeforeFilter: $e, readonly: ze, disabled: We } = e;
        if (l != null && l.disabled.value || l != null && l.readonly.value || We || ze)
          return;
        const tn = (we) => we.filter((Ie) => Ie.file.size > F(oe) ? (w(x, Ze(Ie)), !1) : !0), ge = (we) => {
          const Ie = Math.min(we.length, F(B) - Y.length);
          return we.slice(0, Ie);
        }, Ve = (we) => dr(this, null, function* () {
          if (!$e)
            return we;
          const Ie = No($e);
          for (const ne of Ie)
            we = yield ne(we);
          return we;
        });
        let Fe = z(U).map(O);
        Fe = yield Ve(Fe), Fe = oe != null ? tn(Fe) : Fe, Fe = B != null ? ge(Fe) : Fe;
        const eo = yield Promise.all(D(Fe)), me = (yield Promise.all(R(eo))).filter(({ valid: we }) => we).map(({ varFile: we }) => we);
        w(e["onUpdate:modelValue"], [...Y, ...me]), U.target.value = "", me.forEach((we) => w(ue, Ze(we)));
      });
    }
    function H(U) {
      return dr(this, null, function* () {
        const { disabled: oe, readonly: B, modelValue: Y, onBeforeRemove: x, onRemove: ue } = e;
        if (l != null && l.disabled.value || l != null && l.readonly.value || oe || B)
          return;
        if (x) {
          const ze = No(w(x, Ze(U)));
          if ((yield Promise.all(ze)).some((We) => !We))
            return;
        }
        const $e = Y.filter((ze) => ze !== U);
        w(ue, Ze(U)), ve("onRemove"), w(e["onUpdate:modelValue"], $e);
      });
    }
    function L(U) {
      if (!(l != null && l.disabled.value || e.disabled)) {
        if (e.onClickAction) {
          w(e.onClickAction, ce, U);
          return;
        }
        ce();
      }
    }
    function j() {
      return e.modelValue.filter((U) => U.state === "success");
    }
    function q() {
      return e.modelValue.filter((U) => U.state === "error");
    }
    function W() {
      return e.modelValue.filter((U) => U.state === "loading");
    }
    function ce() {
      t.value.click();
    }
    function J() {
      a.value = null, r.value = !1, Lt.close();
    }
    function ve(U) {
      He(() => {
        const { validateTrigger: oe, rules: B, modelValue: Y } = e;
        c(oe, U, B, Y, y);
      });
    }
    function Q() {
      return d(e.rules, e.modelValue, y);
    }
    function de() {
      k = !0, w(e["onUpdate:modelValue"], []), f();
    }
    return {
      input: t,
      actionRef: o,
      files: m,
      showPreview: r,
      currentPreview: a,
      errorMessage: u,
      maxlengthText: i,
      hovering: v,
      isFocusing: n,
      formDisabled: l == null ? void 0 : l.disabled,
      formReadonly: l == null ? void 0 : l.readonly,
      n: J3,
      classes: Q3,
      formatElevation: yn,
      toNumber: F,
      handleHovering: g,
      isHTMLSupportVideo: tu,
      isHTMLSupportImage: ou,
      preview: T,
      handleChange: N,
      handleRemove: H,
      getSuccess: j,
      getError: q,
      getLoading: W,
      validate: Q,
      resetValidation: f,
      reset: de,
      chooseFile: ce,
      closePreview: J,
      handleActionClick: L,
      toSizeUnit: Te
    };
  }
});
Wm.render = a8;
var pi = Wm;
re(pi);
se(pi, jm);
const nT = pi;
var Gl = pi;
const Km = {
  width: {
    type: Number,
    default: 100
  },
  height: {
    type: Number,
    default: 100
  },
  content: String,
  image: String,
  rotate: {
    type: Number,
    default: -22
  },
  offsetX: {
    type: Number,
    default: 0
  },
  offsetY: {
    type: Number,
    default: 0
  },
  gapX: {
    type: Number,
    default: 0
  },
  gapY: {
    type: Number,
    default: 0
  },
  zIndex: {
    type: [Number, String],
    default: 10
  },
  opacity: {
    type: [Number, String],
    default: 0.5
  },
  fullscreen: Boolean,
  font: {
    type: Object,
    default: () => ({
      fontStyle: "normal",
      fontVariant: "normal",
      fontWeight: "normal",
      fontSize: 14
    })
  }
};
var i8 = Object.defineProperty, l8 = Object.defineProperties, s8 = Object.getOwnPropertyDescriptors, od = Object.getOwnPropertySymbols, u8 = Object.prototype.hasOwnProperty, c8 = Object.prototype.propertyIsEnumerable, td = (e, n, o) => n in e ? i8(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, d8 = (e, n) => {
  for (var o in n || (n = {}))
    u8.call(n, o) && td(e, o, n[o]);
  if (od)
    for (var o of od(n))
      c8.call(n, o) && td(e, o, n[o]);
  return e;
}, f8 = (e, n) => l8(e, s8(n)), rd = (e, n, o) => new Promise((t, r) => {
  var a = (s) => {
    try {
      l(o.next(s));
    } catch (u) {
      r(u);
    }
  }, i = (s) => {
    try {
      l(o.throw(s));
    } catch (u) {
      r(u);
    }
  }, l = (s) => s.done ? t(s.value) : Promise.resolve(s.value).then(a, i);
  l((o = o.apply(e, n)).next());
});
const { name: p8, n: v8, classes: m8 } = ee("watermark"), h8 = { ref: "svgRef" }, g8 = ["viewBox", "width", "height"], b8 = ["width", "height"], y8 = ["href", "xlink:href", "x", "y", "width", "height"];
function k8(e, n) {
  return b(), P(
    "div",
    {
      class: p(e.n())
    },
    [
      V(e.$slots, "default"),
      (b(), Oe(xn, {
        to: "body",
        disabled: !e.fullscreen
      }, [
        M(
          "div",
          {
            ref: "containerRef",
            class: p(e.classes(e.n("container"), [e.fullscreen, e.n("--fullscreen")])),
            style: K({
              backgroundImage: `url(${e.watermarkUrl})`,
              zIndex: e.zIndex
            })
          },
          [
            Me(M(
              "div",
              h8,
              [
                (b(), P("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  "xmlns:xlink": "http://www.w3.org/1999/xlink",
                  viewBox: `0 0 ${e.width + e.gapX} ${e.height + e.gapY}`,
                  width: `${e.width + e.gapX}`,
                  height: `${e.height + e.gapY}`,
                  style: K({
                    padding: `0 ${e.gapX}px ${e.gapY}px 0`,
                    opacity: e.opacity
                  })
                }, [
                  e.showContent() ? (b(), P("foreignObject", {
                    key: 0,
                    x: "0",
                    y: "0",
                    width: e.width,
                    height: e.height
                  }, [
                    M(
                      "div",
                      {
                        xmlns: "http://www.w3.org/1999/xhtml",
                        style: K({
                          transform: `translate(${e.offsetX}px, ${e.offsetY}px) rotate(${e.rotate}deg)`,
                          transformOrigin: "center"
                        })
                      },
                      [
                        V(e.$slots, "content", {}, () => [
                          M(
                            "span",
                            {
                              style: K(f8(d8({}, e.font), { fontSize: `${e.font.fontSize}px`, color: e.textColor }))
                            },
                            ae(e.content),
                            5
                            /* TEXT, STYLE */
                          )
                        ])
                      ],
                      4
                      /* STYLE */
                    )
                  ], 8, b8)) : G("v-if", !0),
                  !e.$slots.content && e.image ? (b(), P("image", {
                    key: 1,
                    href: e.imageUrl,
                    "xlink:href": e.imageUrl,
                    x: e.offsetX,
                    y: e.offsetY,
                    width: e.width,
                    height: e.height,
                    style: K({
                      transform: `rotate(${e.rotate}deg)`,
                      transformOrigin: "center"
                    })
                  }, null, 12, y8)) : G("v-if", !0)
                ], 12, g8))
              ],
              512
              /* NEED_PATCH */
            ), [
              [Kn, !1]
            ])
          ],
          6
          /* CLASS, STYLE */
        )
      ], 8, ["disabled"]))
    ],
    2
    /* CLASS */
  );
}
const qm = _({
  name: p8,
  props: Km,
  setup(e, { slots: n }) {
    const o = $(""), t = $(""), r = $(""), a = $(null), i = $(null);
    fe(
      () => [
        e.image,
        e.font,
        e.content,
        e.height,
        e.width,
        e.rotate,
        e.gapX,
        e.gapY,
        e.offsetX,
        e.offsetY,
        e.opacity
      ],
      d,
      {
        deep: !0
      }
    ), st(d), Ht(c);
    function l() {
      return !!(n.content || e.content && !e.image);
    }
    function s() {
      return rd(this, null, function* () {
        return new Promise((f) => {
          const v = document.createElement("canvas"), g = v.getContext("2d"), m = new Image();
          m.crossOrigin = "anonymous", m.referrerPolicy = "no-referrer", m.src = e.image, m.onload = () => {
            v.width = m.width, v.height = m.height, g.drawImage(m, 0, 0), f(v.toDataURL());
          };
        });
      });
    }
    function u(f) {
      const v = new Blob([f], {
        type: "image/svg+xml"
      });
      return URL.createObjectURL(v);
    }
    function c() {
      o.value && URL.revokeObjectURL(o.value);
    }
    function d() {
      return rd(this, null, function* () {
        r.value = jo(i.value).color, e.image && (t.value = yield s()), yield He(), c(), o.value = u(a.value.innerHTML);
      });
    }
    return {
      svgRef: a,
      containerRef: i,
      watermarkUrl: o,
      imageUrl: t,
      textColor: r,
      n: v8,
      classes: m8,
      showContent: l,
      resize: d
    };
  }
});
qm.render = k8;
var vi = qm;
re(vi);
se(vi, Km);
const oT = vi;
var Zl = vi;
const $8 = "3.2.4";
function w8(e) {
  Ti.install && e.use(Ti), Ei.install && e.use(Ei), Ii.install && e.use(Ii), Mi.install && e.use(Mi), Ni.install && e.use(Ni), Cr.install && e.use(Cr), Ai.install && e.use(Ai), Vi.install && e.use(Vi), Li.install && e.use(Li), Ri.install && e.use(Ri), Cn.install && e.use(Cn), Fi.install && e.use(Fi), Ui.install && e.use(Ui), Hi.install && e.use(Hi), Dt.install && e.use(Dt), Yi.install && e.use(Yi), Sr.install && e.use(Sr), ji.install && e.use(ji), Wi.install && e.use(Wi), Ki.install && e.use(Ki), qi.install && e.use(qi), Bn.install && e.use(Bn), Ji.install && e.use(Ji), ol.install && e.use(ol), rl.install && e.use(rl), al.install && e.use(al), il.install && e.use(il), Dr.install && e.use(Dr), ul.install && e.use(ul), cl.install && e.use(cl), Nt.install && e.use(Nt), dl.install && e.use(dl), fl.install && e.use(fl), On.install && e.use(On), zn.install && e.use(zn), Nn.install && e.use(Nn), Xe.install && e.use(Xe), pl.install && e.use(pl), Lt.install && e.use(Lt), vl.install && e.use(vl), ml.install && e.use(ml), Ir.install && e.use(Ir), Et.install && e.use(Et), hl.install && e.use(hl), gl.install && e.use(gl), ot.install && e.use(ot), bl.install && e.use(bl), Oi.install && e.use(Oi), Rt.install && e.use(Rt), Mr.install && e.use(Mr), Nr.install && e.use(Nr), yl.install && e.use(yl), kl.install && e.use(kl), $l.install && e.use($l), wl.install && e.use(wl), Cl.install && e.use(Cl), Co.install && e.use(Co), Sl.install && e.use(Sl), Pl.install && e.use(Pl), zl.install && e.use(zl), Ol.install && e.use(Ol), Tl.install && e.use(Tl), El.install && e.use(El), on.install && e.use(on), Dl.install && e.use(Dl), Bl.install && e.use(Bl), Il.install && e.use(Il), Ml.install && e.use(Ml), Al.install && e.use(Al), Vl.install && e.use(Vl), Ll.install && e.use(Ll), Rl.install && e.use(Rl), at.install && e.use(at), Fl.install && e.use(Fl), At.install && e.use(At), Vt.install && e.use(Vt), Ul.install && e.use(Ul), Hl.install && e.use(Hl), Yl.install && e.use(Yl), jl.install && e.use(jl), Wl.install && e.use(Wl), Kl.install && e.use(Kl), ql.install && e.use(ql), Xl.install && e.use(Xl), Br.install && e.use(Br), Gl.install && e.use(Gl), Zl.install && e.use(Zl);
}
const tT = {
  version: $8,
  install: w8,
  ActionSheet: Ti,
  AppBar: Ei,
  Avatar: Ii,
  AvatarGroup: Mi,
  BackTop: Ni,
  Badge: Cr,
  BottomNavigation: Ai,
  BottomNavigationItem: Vi,
  Breadcrumb: Li,
  Breadcrumbs: Ri,
  Button: Cn,
  ButtonGroup: Fi,
  Card: Ui,
  Cell: Hi,
  Checkbox: Dt,
  CheckboxGroup: Yi,
  Chip: Sr,
  Col: ji,
  Collapse: Wi,
  CollapseItem: Ki,
  CollapseTransition: qi,
  Context: Bn,
  Countdown: Ji,
  Counter: ol,
  DatePicker: rl,
  Dialog: al,
  Divider: il,
  Drag: Dr,
  Ellipsis: ul,
  Fab: cl,
  FieldDecorator: Nt,
  FloatingPanel: dl,
  Form: fl,
  FormDetails: On,
  Hover: zn,
  HoverOverlay: Nn,
  Icon: Xe,
  Image: pl,
  ImagePreview: Lt,
  IndexAnchor: vl,
  IndexBar: ml,
  Input: Ir,
  Lazy: Et,
  Link: hl,
  List: gl,
  Loading: ot,
  LoadingBar: bl,
  Locale: Oi,
  Menu: Rt,
  MenuOption: Mr,
  MenuSelect: Nr,
  Option: yl,
  Overlay: kl,
  Pagination: $l,
  Paper: wl,
  Picker: Cl,
  Popup: Co,
  Progress: Sl,
  PullRefresh: Pl,
  Radio: zl,
  RadioGroup: Ol,
  Rate: Tl,
  Result: El,
  Ripple: on,
  Row: Dl,
  Select: Bl,
  Skeleton: Il,
  Slider: Ml,
  Snackbar: Al,
  Space: Vl,
  Step: Ll,
  Steps: Rl,
  Sticky: at,
  StyleProvider: Fl,
  Swipe: At,
  SwipeItem: Vt,
  Switch: Ul,
  Tab: Hl,
  TabItem: Yl,
  Table: jl,
  Tabs: Wl,
  TabsItems: Kl,
  Themes: ql,
  TimePicker: Xl,
  Tooltip: Br,
  Uploader: Gl,
  Watermark: Zl
};
export {
  Ti as ActionSheet,
  Ei as AppBar,
  Ii as Avatar,
  Mi as AvatarGroup,
  Ni as BackTop,
  Cr as Badge,
  Ai as BottomNavigation,
  Vi as BottomNavigationItem,
  Li as Breadcrumb,
  Ri as Breadcrumbs,
  Cn as Button,
  Fi as ButtonGroup,
  Ui as Card,
  Hi as Cell,
  Dt as Checkbox,
  Yi as CheckboxGroup,
  Sr as Chip,
  ji as Col,
  Wi as Collapse,
  Ki as CollapseItem,
  qi as CollapseTransition,
  Bn as Context,
  Ji as Countdown,
  ol as Counter,
  rl as DatePicker,
  al as Dialog,
  il as Divider,
  Dr as Drag,
  ul as Ellipsis,
  cl as Fab,
  Nt as FieldDecorator,
  dl as FloatingPanel,
  fl as Form,
  On as FormDetails,
  zn as Hover,
  Nn as HoverOverlay,
  Xe as Icon,
  pl as Image,
  Lt as ImagePreview,
  vl as IndexAnchor,
  ml as IndexBar,
  Ir as Input,
  Et as Lazy,
  hl as Link,
  gl as List,
  ot as Loading,
  bl as LoadingBar,
  Oi as Locale,
  Rt as Menu,
  Mr as MenuOption,
  Nr as MenuSelect,
  yl as Option,
  kl as Overlay,
  Bi as PIXEL,
  $l as Pagination,
  wl as Paper,
  Cl as Picker,
  Co as Popup,
  Sl as Progress,
  Pl as PullRefresh,
  zl as Radio,
  Ol as RadioGroup,
  Tl as Rate,
  El as Result,
  on as Ripple,
  Dl as Row,
  vm as SNACKBAR_TYPE,
  Bl as Select,
  Il as Skeleton,
  Ml as Slider,
  Al as Snackbar,
  Vl as Space,
  Ll as Step,
  Rl as Steps,
  at as Sticky,
  Fl as StyleProvider,
  At as Swipe,
  Vt as SwipeItem,
  Ul as Switch,
  Hl as Tab,
  Yl as TabItem,
  jl as Table,
  Wl as Tabs,
  Kl as TabsItems,
  ql as Themes,
  Xl as TimePicker,
  Br as Tooltip,
  Gl as Uploader,
  Zl as Watermark,
  B8 as _ActionSheetComponent,
  I8 as _AppBarComponent,
  N8 as _AvatarComponent,
  A8 as _AvatarGroupComponent,
  R8 as _BackTopComponent,
  F8 as _BadgeComponent,
  U8 as _BottomNavigationComponent,
  H8 as _BottomNavigationItemComponent,
  Y8 as _BreadcrumbComponent,
  j8 as _BreadcrumbsComponent,
  L8 as _ButtonComponent,
  W8 as _ButtonGroupComponent,
  K8 as _CardComponent,
  q8 as _CellComponent,
  G8 as _CheckboxComponent,
  Z8 as _CheckboxGroupComponent,
  J8 as _ChipComponent,
  Q8 as _ColComponent,
  x8 as _CollapseComponent,
  _8 as _CollapseItemComponent,
  e5 as _CollapseTransitionComponent,
  S8 as _ContextComponent,
  n5 as _CountdownComponent,
  o5 as _CounterComponent,
  r5 as _DatePickerComponent,
  a5 as _DialogComponent,
  i5 as _DividerComponent,
  l5 as _DragComponent,
  u5 as _EllipsisComponent,
  c5 as _FabComponent,
  d5 as _FieldDecoratorComponent,
  f5 as _FloatingPanelComponent,
  p5 as _FormComponent,
  X8 as _FormDetailsComponent,
  E8 as _HoverComponent,
  T8 as _HoverOverlayComponent,
  O8 as _IconComponent,
  v5 as _ImageComponent,
  g5 as _ImagePreviewComponent,
  b5 as _IndexAnchorComponent,
  y5 as _IndexBarComponent,
  k5 as _InputComponent,
  M8 as _LazyComponent,
  $5 as _LinkComponent,
  w5 as _ListComponent,
  C5 as _LoadingBarComponent,
  V8 as _LoadingComponent,
  D8 as _LocaleComponent,
  S5 as _MenuComponent,
  P5 as _MenuOptionComponent,
  z5 as _MenuSelectComponent,
  O5 as _OptionComponent,
  T5 as _OverlayComponent,
  E5 as _PaginationComponent,
  D5 as _PaperComponent,
  B5 as _PickerComponent,
  z8 as _PopupComponent,
  I5 as _ProgressComponent,
  M5 as _PullRefreshComponent,
  N5 as _RadioComponent,
  A5 as _RadioGroupComponent,
  V5 as _RateComponent,
  L5 as _ResultComponent,
  P8 as _RippleComponent,
  R5 as _RowComponent,
  F5 as _SelectComponent,
  U5 as _SkeletonComponent,
  H5 as _SliderComponent,
  Y5 as _SnackbarComponent,
  j5 as _SpaceComponent,
  W5 as _StepComponent,
  K5 as _StepsComponent,
  t5 as _StickyComponent,
  q5 as _StyleProviderComponent,
  m5 as _SwipeComponent,
  h5 as _SwipeItemComponent,
  X5 as _SwitchComponent,
  G5 as _TabComponent,
  Z5 as _TabItemComponent,
  J5 as _TableComponent,
  Q5 as _TabsComponent,
  x5 as _TabsItemsComponent,
  _5 as _ThemesComponent,
  eT as _TimePickerComponent,
  s5 as _TooltipComponent,
  nT as _UploaderComponent,
  oT as _WatermarkComponent,
  Rd as actionSheetProps,
  as as add,
  Kd as appBarProps,
  nf as avatarGroupProps,
  _d as avatarProps,
  sf as backTopProps,
  cf as badgeProps,
  mf as bottomNavigationItemProps,
  ff as bottomNavigationProps,
  gf as breadcrumbProps,
  kf as breadcrumbsProps,
  wf as buttonGroupProps,
  rf as buttonProps,
  Sf as cardProps,
  zf as cellProps,
  Nf as checkboxGroupProps,
  Df as checkboxProps,
  Vf as chipProps,
  Rf as colProps,
  Wf as collapseItemProps,
  Yf as collapseProps,
  Xf as collapseTransitionProps,
  Zf as countdownProps,
  sp as counterProps,
  Yd as currentMessage,
  gp as datePickerProps,
  tT as default,
  ln as defaultLazyOptions,
  Sp as dialogProps,
  zp as dividerProps,
  Tp as dragProps,
  Up as ellipsisProps,
  Fd as enUS,
  Yp as fabProps,
  za as fieldDecoratorProps,
  Tf as formDetailsProps,
  qp as formProps,
  Td as hoverOverlayProps,
  en as iconProps,
  Gd as imageCache,
  _p as imagePreviewProps,
  Gp as imageProps,
  ov as indexAnchorProps,
  rv as indexBarProps,
  iv as inputProps,
  w8 as install,
  sv as linkProps,
  cv as listProps,
  eS as loadingBarProps,
  to as loadingProps,
  Cv as menuOptionProps,
  Ps as menuProps,
  Pv as menuSelectProps,
  jd as merge,
  Hd as messages,
  Ev as optionProps,
  Bv as overlayProps,
  Iv as paginationProps,
  Nv as paperProps,
  Vv as pickerProps,
  vt as popupProps,
  Rv as progressProps,
  Uv as pullRefreshProps,
  Kv as radioGroupProps,
  Yv as radioProps,
  Xv as rateProps,
  nm as resultProps,
  tm as rowProps,
  am as selectProps,
  lm as skeletonProps,
  um as sliderProps,
  zs as snackbarProps,
  gm as spaceProps,
  bm as stepProps,
  $m as stepsProps,
  wt as stickyProps,
  Cm as styleProviderProps,
  $s as swipeProps,
  Sm as switchProps,
  an as t,
  Em as tabItemProps,
  zm as tabProps,
  Bm as tableProps,
  Am as tabsItemsProps,
  Mm as tabsProps,
  Lm as timePickerProps,
  Rp as tooltipProps,
  jm as uploaderProps,
  is as use,
  Xn as useHoverOverlay,
  rs as useLocale,
  $8 as version,
  Km as watermarkProps,
  ts as zhCN
};
