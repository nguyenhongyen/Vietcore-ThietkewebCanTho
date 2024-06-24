var lib_web, images_web, lib_mobile, images_mobile, createjs, ss, AdobeAn, canvas, stage, exportRoot, anim_container,
	dom_overlay_container, fnStartAnimation, canvas_mobile, stage_mobile, exportRoot_mobile, anim_container_mobile,
	dom_overlay_container_mobile, fnStartAnimationMobile;

function initDesktop() {
	canvas = document.getElementById("canvas"), anim_container = document.getElementById("animation_container"), dom_overlay_container = document.getElementById("dom_overlay_container"), images_web = images_web || {}, ss = ss || {};
	var t = new createjs.LoadQueue(!1);
	t.addEventListener("fileload", handleFileLoad), t.addEventListener("complete", handleComplete), t.loadManifest(lib_web.properties.manifest)
}

function handleFileLoad(t) {
	"image" == t.item.type && (images_web[t.item.id] = t.result)
}

function handleComplete(t) {
	var e = t.target, A = lib_web.ssMetadata;
	for (i = 0; i < A.length; i++) ss[A[i].name] = new createjs.SpriteSheet({
		images: [e.getResult(A[i].name)],
		frames: A[i].frames
	});
	exportRoot = new lib_web.DVGHomepage1920x790200805, (stage = new createjs.Stage(canvas)).addChild(exportRoot), fnStartAnimation = function () {
		createjs.Ticker.setFPS(lib_web.properties.fps), createjs.Ticker.addEventListener("tick", stage)
	}, function (t, e, A, i) {
		var n, a, o = 1;

		function s() {
			var s = lib_web.properties.width, r = lib_web.properties.height, g = window.innerWidth,
				h = window.innerHeight, l = window.devicePixelRatio || 1, c = g / s, u = h / r, d = 1;
			t && ("width" == e && n == g || "height" == e && a == h ? d = o : A ? 1 == i ? d = Math.min(c, u) : 2 == i && (d = Math.max(c, u)) : (g < s || h < r) && (d = Math.min(c, u))), canvas.width = s * l * d, canvas.height = r * l * d, canvas.style.width = dom_overlay_container.style.width = anim_container.style.width = s * d + "px", canvas.style.height = anim_container.style.height = dom_overlay_container.style.height = r * d + "px", stage.scaleX = l * d, stage.scaleY = l * d, n = g, a = h, o = d
		}

		window.addEventListener("resize", s), s()
	}(!1, "both", !1, 1), fnStartAnimation()
}

function initMobile() {
	canvas_mobile = document.getElementById("canvas_mobile"), anim_container_mobile = document.getElementById("animation_container_mobile"), dom_overlay_container_mobile = document.getElementById("dom_overlay_container_mobile"), images_mobile = images_mobile || {}, ss = ss || {};
	var t = new createjs.LoadQueue(!1);
	t.addEventListener("fileload", handleFileLoadMobile), t.addEventListener("complete", handleCompleteMobile), t.loadManifest(lib_mobile.properties.manifest)
}

function handleFileLoadMobile(t) {
	"image" == t.item.type && (images_mobile[t.item.id] = t.result)
}

function handleCompleteMobile(t) {
	var e = t.target, A = lib_mobile.ssMetadata;
	for (i = 0; i < A.length; i++) ss[A[i].name] = new createjs.SpriteSheet({
		images: [e.getResult(A[i].name)],
		frames: A[i].frames
	});
	exportRoot_mobile = new lib_mobile.DVGHomepage640x500200805, (stage_mobile = new createjs.Stage(canvas_mobile)).addChild(exportRoot_mobile), fnStartAnimationMobile = function () {
		createjs.Ticker.setFPS(lib_mobile.properties.fps), createjs.Ticker.addEventListener("tick", stage_mobile)
	}, function (t, e, A, i) {
		var n, a, o = 1;

		function s() {
			var s = lib_mobile.properties.width, r = lib_mobile.properties.height, g = window.innerWidth,
				h = window.innerHeight, l = window.devicePixelRatio || 1, c = g / s, u = h / r, d = 1;
			t && ("width" == e && n == g || "height" == e && a == h ? d = o : A ? 1 == i ? d = Math.min(c, u) : 2 == i && (d = Math.max(c, u)) : (g < s || h < r) && (d = Math.min(c, u))), canvas_mobile.width = s * l * d, canvas_mobile.height = r * l * d, canvas_mobile.style.width = dom_overlay_container_mobile.style.width = anim_container_mobile.style.width = s * d + "px", canvas_mobile.style.height = anim_container_mobile.style.height = dom_overlay_container_mobile.style.height = r * d + "px", stage_mobile.scaleX = l * d, stage_mobile.scaleY = l * d, n = g, a = h, o = d
		}

		window.addEventListener("resize", s), s()
	}(!1, "both", !1, 1), fnStartAnimationMobile()
}

!function (t, e) {
	"object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function (t) {
		if (!t.document) throw new Error("jQuery requires a window with a document");
		return e(t)
	} : e(t)
}("undefined" != typeof window ? window : this, (function (t, e) {
	var A = [], i = t.document, n = A.slice, a = A.concat, o = A.push, s = A.indexOf, r = {}, g = r.toString,
		h = r.hasOwnProperty, l = {}, c = function (t, e) {
			return new c.fn.init(t, e)
		}, u = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, d = /^-ms-/, p = /-([\da-z])/gi, Q = function (t, e) {
			return e.toUpperCase()
		};

	function I(t) {
		var e = !!t && "length" in t && t.length, A = c.type(t);
		return "function" !== A && !c.isWindow(t) && ("array" === A || 0 === e || "number" == typeof e && e > 0 && e - 1 in t)
	}

	c.fn = c.prototype = {
		jquery: "1.12.4", constructor: c, selector: "", length: 0, toArray: function () {
			return n.call(this)
		}, get: function (t) {
			return null != t ? t < 0 ? this[t + this.length] : this[t] : n.call(this)
		}, pushStack: function (t) {
			var e = c.merge(this.constructor(), t);
			return e.prevObject = this, e.context = this.context, e
		}, each: function (t) {
			return c.each(this, t)
		}, map: function (t) {
			return this.pushStack(c.map(this, (function (e, A) {
				return t.call(e, A, e)
			})))
		}, slice: function () {
			return this.pushStack(n.apply(this, arguments))
		}, first: function () {
			return this.eq(0)
		}, last: function () {
			return this.eq(-1)
		}, eq: function (t) {
			var e = this.length, A = +t + (t < 0 ? e : 0);
			return this.pushStack(A >= 0 && A < e ? [this[A]] : [])
		}, end: function () {
			return this.prevObject || this.constructor()
		}, push: o, sort: A.sort, splice: A.splice
	}, c.extend = c.fn.extend = function () {
		var t, e, A, i, n, a, o = arguments[0] || {}, s = 1, r = arguments.length, g = !1;
		for ("boolean" == typeof o && (g = o, o = arguments[s] || {}, s++), "object" == typeof o || c.isFunction(o) || (o = {}), s === r && (o = this, s--); s < r; s++) if (null != (n = arguments[s])) for (i in n) t = o[i], o !== (A = n[i]) && (g && A && (c.isPlainObject(A) || (e = c.isArray(A))) ? (e ? (e = !1, a = t && c.isArray(t) ? t : []) : a = t && c.isPlainObject(t) ? t : {}, o[i] = c.extend(g, a, A)) : void 0 !== A && (o[i] = A));
		return o
	}, c.extend({
		expando: "jQuery" + ("1.12.4" + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (t) {
			throw new Error(t)
		}, noop: function () {
		}, isFunction: function (t) {
			return "function" === c.type(t)
		}, isArray: Array.isArray || function (t) {
			return "array" === c.type(t)
		}, isWindow: function (t) {
			return null != t && t == t.window
		}, isNumeric: function (t) {
			var e = t && t.toString();
			return !c.isArray(t) && e - parseFloat(e) + 1 >= 0
		}, isEmptyObject: function (t) {
			var e;
			for (e in t) return !1;
			return !0
		}, isPlainObject: function (t) {
			var e;
			if (!t || "object" !== c.type(t) || t.nodeType || c.isWindow(t)) return !1;
			try {
				if (t.constructor && !h.call(t, "constructor") && !h.call(t.constructor.prototype, "isPrototypeOf")) return !1
			} catch (t) {
				return !1
			}
			if (!l.ownFirst) for (e in t) return h.call(t, e);
			for (e in t) ;
			return void 0 === e || h.call(t, e)
		}, type: function (t) {
			return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? r[g.call(t)] || "object" : typeof t
		}, globalEval: function (e) {
			e && c.trim(e) && (t.execScript || function (e) {
				t.eval.call(t, e)
			})(e)
		}, camelCase: function (t) {
			return t.replace(d, "ms-").replace(p, Q)
		}, nodeName: function (t, e) {
			return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
		}, each: function (t, e) {
			var A, i = 0;
			if (I(t)) for (A = t.length; i < A && !1 !== e.call(t[i], i, t[i]); i++) ; else for (i in t) if (!1 === e.call(t[i], i, t[i])) break;
			return t
		}, trim: function (t) {
			return null == t ? "" : (t + "").replace(u, "")
		}, makeArray: function (t, e) {
			var A = e || [];
			return null != t && (I(Object(t)) ? c.merge(A, "string" == typeof t ? [t] : t) : o.call(A, t)), A
		}, inArray: function (t, e, A) {
			var i;
			if (e) {
				if (s) return s.call(e, t, A);
				for (i = e.length, A = A ? A < 0 ? Math.max(0, i + A) : A : 0; A < i; A++) if (A in e && e[A] === t) return A
			}
			return -1
		}, merge: function (t, e) {
			for (var A = +e.length, i = 0, n = t.length; i < A;) t[n++] = e[i++];
			if (A != A) for (; void 0 !== e[i];) t[n++] = e[i++];
			return t.length = n, t
		}, grep: function (t, e, A) {
			for (var i = [], n = 0, a = t.length, o = !A; n < a; n++) !e(t[n], n) !== o && i.push(t[n]);
			return i
		}, map: function (t, e, A) {
			var i, n, o = 0, s = [];
			if (I(t)) for (i = t.length; o < i; o++) null != (n = e(t[o], o, A)) && s.push(n); else for (o in t) null != (n = e(t[o], o, A)) && s.push(n);
			return a.apply([], s)
		}, guid: 1, proxy: function (t, e) {
			var A, i, a;
			if ("string" == typeof e && (a = t[e], e = t, t = a), c.isFunction(t)) return A = n.call(arguments, 2), (i = function () {
				return t.apply(e || this, A.concat(n.call(arguments)))
			}).guid = t.guid = t.guid || c.guid++, i
		}, now: function () {
			return +new Date
		}, support: l
	}), "function" == typeof Symbol && (c.fn[Symbol.iterator] = A[Symbol.iterator]), c.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), (function (t, e) {
		r["[object " + e + "]"] = e.toLowerCase()
	}));
	var f = function (t) {
		var e, A, i, n, a, o, s, r, g, h, l, c, u, d, p, Q, I, f, w, L = "sizzle" + 1 * new Date, m = t.document, _ = 0,
			v = 0, E = nt(), y = nt(), P = nt(), C = function (t, e) {
				return t === e && (l = !0), 0
			}, T = {}.hasOwnProperty, K = [], B = K.pop, x = K.push, b = K.push, S = K.slice, H = function (t, e) {
				for (var A = 0, i = t.length; A < i; A++) if (t[A] === e) return A;
				return -1
			},
			D = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
			F = "[\\x20\\t\\r\\n\\f]", j = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
			M = "\\[" + F + "*(" + j + ")(?:" + F + "*([*^$|!~]?=)" + F + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + j + "))|)" + F + "*\\]",
			k = ":(" + j + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + M + ")*)|.*)\\)|)",
			G = new RegExp(F + "+", "g"), R = new RegExp("^" + F + "+|((?:^|[^\\\\])(?:\\\\.)*)" + F + "+$", "g"),
			O = new RegExp("^" + F + "*," + F + "*"), N = new RegExp("^" + F + "*([>+~]|" + F + ")" + F + "*"),
			U = new RegExp("=" + F + "*([^\\]'\"]*?)" + F + "*\\]", "g"), z = new RegExp(k),
			J = new RegExp("^" + j + "$"), q = {
				ID: new RegExp("^#(" + j + ")"),
				CLASS: new RegExp("^\\.(" + j + ")"),
				TAG: new RegExp("^(" + j + "|[*])"),
				ATTR: new RegExp("^" + M),
				PSEUDO: new RegExp("^" + k),
				CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + F + "*(even|odd|(([+-]|)(\\d*)n|)" + F + "*(?:([+-]|)" + F + "*(\\d+)|))" + F + "*\\)|)", "i"),
				bool: new RegExp("^(?:" + D + ")$", "i"),
				needsContext: new RegExp("^" + F + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + F + "*((?:-\\d)?\\d*)" + F + "*\\)|)(?=[^-]|$)", "i")
			}, W = /^(?:input|select|textarea|button)$/i, $ = /^h\d$/i, Y = /^[^{]+\{\s*\[native \w/,
			X = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, V = /[+~]/, Z = /'|\\/g,
			tt = new RegExp("\\\\([\\da-f]{1,6}" + F + "?|(" + F + ")|.)", "ig"), et = function (t, e, A) {
				var i = "0x" + e - 65536;
				return i != i || A ? e : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
			}, At = function () {
				c()
			};
		try {
			b.apply(K = S.call(m.childNodes), m.childNodes), K[m.childNodes.length].nodeType
		} catch (t) {
			b = {
				apply: K.length ? function (t, e) {
					x.apply(t, S.call(e))
				} : function (t, e) {
					for (var A = t.length, i = 0; t[A++] = e[i++];) ;
					t.length = A - 1
				}
			}
		}

		function it(t, e, i, n) {
			var a, s, g, h, l, d, I, f, _ = e && e.ownerDocument, v = e ? e.nodeType : 9;
			if (i = i || [], "string" != typeof t || !t || 1 !== v && 9 !== v && 11 !== v) return i;
			if (!n && ((e ? e.ownerDocument || e : m) !== u && c(e), e = e || u, p)) {
				if (11 !== v && (d = X.exec(t))) if (a = d[1]) {
					if (9 === v) {
						if (!(g = e.getElementById(a))) return i;
						if (g.id === a) return i.push(g), i
					} else if (_ && (g = _.getElementById(a)) && w(e, g) && g.id === a) return i.push(g), i
				} else {
					if (d[2]) return b.apply(i, e.getElementsByTagName(t)), i;
					if ((a = d[3]) && A.getElementsByClassName && e.getElementsByClassName) return b.apply(i, e.getElementsByClassName(a)), i
				}
				if (A.qsa && !P[t + " "] && (!Q || !Q.test(t))) {
					if (1 !== v) _ = e, f = t; else if ("object" !== e.nodeName.toLowerCase()) {
						for ((h = e.getAttribute("id")) ? h = h.replace(Z, "\\$&") : e.setAttribute("id", h = L), s = (I = o(t)).length, l = J.test(h) ? "#" + h : "[id='" + h + "']"; s--;) I[s] = l + " " + dt(I[s]);
						f = I.join(","), _ = V.test(t) && ct(e.parentNode) || e
					}
					if (f) try {
						return b.apply(i, _.querySelectorAll(f)), i
					} catch (t) {
					} finally {
						h === L && e.removeAttribute("id")
					}
				}
			}
			return r(t.replace(R, "$1"), e, i, n)
		}

		function nt() {
			var t = [];
			return function e(A, n) {
				return t.push(A + " ") > i.cacheLength && delete e[t.shift()], e[A + " "] = n
			}
		}

		function at(t) {
			return t[L] = !0, t
		}

		function ot(t) {
			var e = u.createElement("div");
			try {
				return !!t(e)
			} catch (t) {
				return !1
			} finally {
				e.parentNode && e.parentNode.removeChild(e), e = null
			}
		}

		function st(t, e) {
			for (var A = t.split("|"), n = A.length; n--;) i.attrHandle[A[n]] = e
		}

		function rt(t, e) {
			var A = e && t,
				i = A && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || 1 << 31) - (~t.sourceIndex || 1 << 31);
			if (i) return i;
			if (A) for (; A = A.nextSibling;) if (A === e) return -1;
			return t ? 1 : -1
		}

		function gt(t) {
			return function (e) {
				return "input" === e.nodeName.toLowerCase() && e.type === t
			}
		}

		function ht(t) {
			return function (e) {
				var A = e.nodeName.toLowerCase();
				return ("input" === A || "button" === A) && e.type === t
			}
		}

		function lt(t) {
			return at((function (e) {
				return e = +e, at((function (A, i) {
					for (var n, a = t([], A.length, e), o = a.length; o--;) A[n = a[o]] && (A[n] = !(i[n] = A[n]))
				}))
			}))
		}

		function ct(t) {
			return t && void 0 !== t.getElementsByTagName && t
		}

		for (e in A = it.support = {}, a = it.isXML = function (t) {
			var e = t && (t.ownerDocument || t).documentElement;
			return !!e && "HTML" !== e.nodeName
		}, c = it.setDocument = function (t) {
			var e, n, o = t ? t.ownerDocument || t : m;
			return o !== u && 9 === o.nodeType && o.documentElement ? (d = (u = o).documentElement, p = !a(u), (n = u.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", At, !1) : n.attachEvent && n.attachEvent("onunload", At)), A.attributes = ot((function (t) {
				return t.className = "i", !t.getAttribute("className")
			})), A.getElementsByTagName = ot((function (t) {
				return t.appendChild(u.createComment("")), !t.getElementsByTagName("*").length
			})), A.getElementsByClassName = Y.test(u.getElementsByClassName), A.getById = ot((function (t) {
				return d.appendChild(t).id = L, !u.getElementsByName || !u.getElementsByName(L).length
			})), A.getById ? (i.find.ID = function (t, e) {
				if (void 0 !== e.getElementById && p) {
					var A = e.getElementById(t);
					return A ? [A] : []
				}
			}, i.filter.ID = function (t) {
				var e = t.replace(tt, et);
				return function (t) {
					return t.getAttribute("id") === e
				}
			}) : (delete i.find.ID, i.filter.ID = function (t) {
				var e = t.replace(tt, et);
				return function (t) {
					var A = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
					return A && A.value === e
				}
			}), i.find.TAG = A.getElementsByTagName ? function (t, e) {
				return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : A.qsa ? e.querySelectorAll(t) : void 0
			} : function (t, e) {
				var A, i = [], n = 0, a = e.getElementsByTagName(t);
				if ("*" === t) {
					for (; A = a[n++];) 1 === A.nodeType && i.push(A);
					return i
				}
				return a
			}, i.find.CLASS = A.getElementsByClassName && function (t, e) {
				if (void 0 !== e.getElementsByClassName && p) return e.getElementsByClassName(t)
			}, I = [], Q = [], (A.qsa = Y.test(u.querySelectorAll)) && (ot((function (t) {
				d.appendChild(t).innerHTML = "<a id='" + L + "'></a><select id='" + L + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && Q.push("[*^$]=" + F + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || Q.push("\\[" + F + "*(?:value|" + D + ")"), t.querySelectorAll("[id~=" + L + "-]").length || Q.push("~="), t.querySelectorAll(":checked").length || Q.push(":checked"), t.querySelectorAll("a#" + L + "+*").length || Q.push(".#.+[+~]")
			})), ot((function (t) {
				var e = u.createElement("input");
				e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && Q.push("name" + F + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || Q.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), Q.push(",.*:")
			}))), (A.matchesSelector = Y.test(f = d.matches || d.webkitMatchesSelector || d.mozMatchesSelector || d.oMatchesSelector || d.msMatchesSelector)) && ot((function (t) {
				A.disconnectedMatch = f.call(t, "div"), f.call(t, "[s!='']:x"), I.push("!=", k)
			})), Q = Q.length && new RegExp(Q.join("|")), I = I.length && new RegExp(I.join("|")), e = Y.test(d.compareDocumentPosition), w = e || Y.test(d.contains) ? function (t, e) {
				var A = 9 === t.nodeType ? t.documentElement : t, i = e && e.parentNode;
				return t === i || !(!i || 1 !== i.nodeType || !(A.contains ? A.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
			} : function (t, e) {
				if (e) for (; e = e.parentNode;) if (e === t) return !0;
				return !1
			}, C = e ? function (t, e) {
				if (t === e) return l = !0, 0;
				var i = !t.compareDocumentPosition - !e.compareDocumentPosition;
				return i || (1 & (i = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || !A.sortDetached && e.compareDocumentPosition(t) === i ? t === u || t.ownerDocument === m && w(m, t) ? -1 : e === u || e.ownerDocument === m && w(m, e) ? 1 : h ? H(h, t) - H(h, e) : 0 : 4 & i ? -1 : 1)
			} : function (t, e) {
				if (t === e) return l = !0, 0;
				var A, i = 0, n = t.parentNode, a = e.parentNode, o = [t], s = [e];
				if (!n || !a) return t === u ? -1 : e === u ? 1 : n ? -1 : a ? 1 : h ? H(h, t) - H(h, e) : 0;
				if (n === a) return rt(t, e);
				for (A = t; A = A.parentNode;) o.unshift(A);
				for (A = e; A = A.parentNode;) s.unshift(A);
				for (; o[i] === s[i];) i++;
				return i ? rt(o[i], s[i]) : o[i] === m ? -1 : s[i] === m ? 1 : 0
			}, u) : u
		}, it.matches = function (t, e) {
			return it(t, null, null, e)
		}, it.matchesSelector = function (t, e) {
			if ((t.ownerDocument || t) !== u && c(t), e = e.replace(U, "='$1']"), A.matchesSelector && p && !P[e + " "] && (!I || !I.test(e)) && (!Q || !Q.test(e))) try {
				var i = f.call(t, e);
				if (i || A.disconnectedMatch || t.document && 11 !== t.document.nodeType) return i
			} catch (t) {
			}
			return it(e, u, null, [t]).length > 0
		}, it.contains = function (t, e) {
			return (t.ownerDocument || t) !== u && c(t), w(t, e)
		}, it.attr = function (t, e) {
			(t.ownerDocument || t) !== u && c(t);
			var n = i.attrHandle[e.toLowerCase()],
				a = n && T.call(i.attrHandle, e.toLowerCase()) ? n(t, e, !p) : void 0;
			return void 0 !== a ? a : A.attributes || !p ? t.getAttribute(e) : (a = t.getAttributeNode(e)) && a.specified ? a.value : null
		}, it.error = function (t) {
			throw new Error("Syntax error, unrecognized expression: " + t)
		}, it.uniqueSort = function (t) {
			var e, i = [], n = 0, a = 0;
			if (l = !A.detectDuplicates, h = !A.sortStable && t.slice(0), t.sort(C), l) {
				for (; e = t[a++];) e === t[a] && (n = i.push(a));
				for (; n--;) t.splice(i[n], 1)
			}
			return h = null, t
		}, n = it.getText = function (t) {
			var e, A = "", i = 0, a = t.nodeType;
			if (a) {
				if (1 === a || 9 === a || 11 === a) {
					if ("string" == typeof t.textContent) return t.textContent;
					for (t = t.firstChild; t; t = t.nextSibling) A += n(t)
				} else if (3 === a || 4 === a) return t.nodeValue
			} else for (; e = t[i++];) A += n(e);
			return A
		}, (i = it.selectors = {
			cacheLength: 50,
			createPseudo: at,
			match: q,
			attrHandle: {},
			find: {},
			relative: {
				">": {dir: "parentNode", first: !0},
				" ": {dir: "parentNode"},
				"+": {dir: "previousSibling", first: !0},
				"~": {dir: "previousSibling"}
			},
			preFilter: {
				ATTR: function (t) {
					return t[1] = t[1].replace(tt, et), t[3] = (t[3] || t[4] || t[5] || "").replace(tt, et), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
				}, CHILD: function (t) {
					return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || it.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && it.error(t[0]), t
				}, PSEUDO: function (t) {
					var e, A = !t[6] && t[2];
					return q.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : A && z.test(A) && (e = o(A, !0)) && (e = A.indexOf(")", A.length - e) - A.length) && (t[0] = t[0].slice(0, e), t[2] = A.slice(0, e)), t.slice(0, 3))
				}
			},
			filter: {
				TAG: function (t) {
					var e = t.replace(tt, et).toLowerCase();
					return "*" === t ? function () {
						return !0
					} : function (t) {
						return t.nodeName && t.nodeName.toLowerCase() === e
					}
				}, CLASS: function (t) {
					var e = E[t + " "];
					return e || (e = new RegExp("(^|" + F + ")" + t + "(" + F + "|$)")) && E(t, (function (t) {
						return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "")
					}))
				}, ATTR: function (t, e, A) {
					return function (i) {
						var n = it.attr(i, t);
						return null == n ? "!=" === e : !e || (n += "", "=" === e ? n === A : "!=" === e ? n !== A : "^=" === e ? A && 0 === n.indexOf(A) : "*=" === e ? A && n.indexOf(A) > -1 : "$=" === e ? A && n.slice(-A.length) === A : "~=" === e ? (" " + n.replace(G, " ") + " ").indexOf(A) > -1 : "|=" === e && (n === A || n.slice(0, A.length + 1) === A + "-"))
					}
				}, CHILD: function (t, e, A, i, n) {
					var a = "nth" !== t.slice(0, 3), o = "last" !== t.slice(-4), s = "of-type" === e;
					return 1 === i && 0 === n ? function (t) {
						return !!t.parentNode
					} : function (e, A, r) {
						var g, h, l, c, u, d, p = a !== o ? "nextSibling" : "previousSibling", Q = e.parentNode,
							I = s && e.nodeName.toLowerCase(), f = !r && !s, w = !1;
						if (Q) {
							if (a) {
								for (; p;) {
									for (c = e; c = c[p];) if (s ? c.nodeName.toLowerCase() === I : 1 === c.nodeType) return !1;
									d = p = "only" === t && !d && "nextSibling"
								}
								return !0
							}
							if (d = [o ? Q.firstChild : Q.lastChild], o && f) {
								for (w = (u = (g = (h = (l = (c = Q)[L] || (c[L] = {}))[c.uniqueID] || (l[c.uniqueID] = {}))[t] || [])[0] === _ && g[1]) && g[2], c = u && Q.childNodes[u]; c = ++u && c && c[p] || (w = u = 0) || d.pop();) if (1 === c.nodeType && ++w && c === e) {
									h[t] = [_, u, w];
									break
								}
							} else if (f && (w = u = (g = (h = (l = (c = e)[L] || (c[L] = {}))[c.uniqueID] || (l[c.uniqueID] = {}))[t] || [])[0] === _ && g[1]), !1 === w) for (; (c = ++u && c && c[p] || (w = u = 0) || d.pop()) && ((s ? c.nodeName.toLowerCase() !== I : 1 !== c.nodeType) || !++w || (f && ((h = (l = c[L] || (c[L] = {}))[c.uniqueID] || (l[c.uniqueID] = {}))[t] = [_, w]), c !== e));) ;
							return (w -= n) === i || w % i == 0 && w / i >= 0
						}
					}
				}, PSEUDO: function (t, e) {
					var A, n = i.pseudos[t] || i.setFilters[t.toLowerCase()] || it.error("unsupported pseudo: " + t);
					return n[L] ? n(e) : n.length > 1 ? (A = [t, t, "", e], i.setFilters.hasOwnProperty(t.toLowerCase()) ? at((function (t, A) {
						for (var i, a = n(t, e), o = a.length; o--;) t[i = H(t, a[o])] = !(A[i] = a[o])
					})) : function (t) {
						return n(t, 0, A)
					}) : n
				}
			},
			pseudos: {
				not: at((function (t) {
					var e = [], A = [], i = s(t.replace(R, "$1"));
					return i[L] ? at((function (t, e, A, n) {
						for (var a, o = i(t, null, n, []), s = t.length; s--;) (a = o[s]) && (t[s] = !(e[s] = a))
					})) : function (t, n, a) {
						return e[0] = t, i(e, null, a, A), e[0] = null, !A.pop()
					}
				})), has: at((function (t) {
					return function (e) {
						return it(t, e).length > 0
					}
				})), contains: at((function (t) {
					return t = t.replace(tt, et), function (e) {
						return (e.textContent || e.innerText || n(e)).indexOf(t) > -1
					}
				})), lang: at((function (t) {
					return J.test(t || "") || it.error("unsupported lang: " + t), t = t.replace(tt, et).toLowerCase(), function (e) {
						var A;
						do {
							if (A = p ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (A = A.toLowerCase()) === t || 0 === A.indexOf(t + "-")
						} while ((e = e.parentNode) && 1 === e.nodeType);
						return !1
					}
				})), target: function (e) {
					var A = t.location && t.location.hash;
					return A && A.slice(1) === e.id
				}, root: function (t) {
					return t === d
				}, focus: function (t) {
					return t === u.activeElement && (!u.hasFocus || u.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
				}, enabled: function (t) {
					return !1 === t.disabled
				}, disabled: function (t) {
					return !0 === t.disabled
				}, checked: function (t) {
					var e = t.nodeName.toLowerCase();
					return "input" === e && !!t.checked || "option" === e && !!t.selected
				}, selected: function (t) {
					return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected
				}, empty: function (t) {
					for (t = t.firstChild; t; t = t.nextSibling) if (t.nodeType < 6) return !1;
					return !0
				}, parent: function (t) {
					return !i.pseudos.empty(t)
				}, header: function (t) {
					return $.test(t.nodeName)
				}, input: function (t) {
					return W.test(t.nodeName)
				}, button: function (t) {
					var e = t.nodeName.toLowerCase();
					return "input" === e && "button" === t.type || "button" === e
				}, text: function (t) {
					var e;
					return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
				}, first: lt((function () {
					return [0]
				})), last: lt((function (t, e) {
					return [e - 1]
				})), eq: lt((function (t, e, A) {
					return [A < 0 ? A + e : A]
				})), even: lt((function (t, e) {
					for (var A = 0; A < e; A += 2) t.push(A);
					return t
				})), odd: lt((function (t, e) {
					for (var A = 1; A < e; A += 2) t.push(A);
					return t
				})), lt: lt((function (t, e, A) {
					for (var i = A < 0 ? A + e : A; --i >= 0;) t.push(i);
					return t
				})), gt: lt((function (t, e, A) {
					for (var i = A < 0 ? A + e : A; ++i < e;) t.push(i);
					return t
				}))
			}
		}).pseudos.nth = i.pseudos.eq, {
			radio: !0,
			checkbox: !0,
			file: !0,
			password: !0,
			image: !0
		}) i.pseudos[e] = gt(e);
		for (e in {submit: !0, reset: !0}) i.pseudos[e] = ht(e);

		function ut() {
		}

		function dt(t) {
			for (var e = 0, A = t.length, i = ""; e < A; e++) i += t[e].value;
			return i
		}

		function pt(t, e, A) {
			var i = e.dir, n = A && "parentNode" === i, a = v++;
			return e.first ? function (e, A, a) {
				for (; e = e[i];) if (1 === e.nodeType || n) return t(e, A, a)
			} : function (e, A, o) {
				var s, r, g, h = [_, a];
				if (o) {
					for (; e = e[i];) if ((1 === e.nodeType || n) && t(e, A, o)) return !0
				} else for (; e = e[i];) if (1 === e.nodeType || n) {
					if ((s = (r = (g = e[L] || (e[L] = {}))[e.uniqueID] || (g[e.uniqueID] = {}))[i]) && s[0] === _ && s[1] === a) return h[2] = s[2];
					if (r[i] = h, h[2] = t(e, A, o)) return !0
				}
			}
		}

		function Qt(t) {
			return t.length > 1 ? function (e, A, i) {
				for (var n = t.length; n--;) if (!t[n](e, A, i)) return !1;
				return !0
			} : t[0]
		}

		function It(t, e, A, i, n) {
			for (var a, o = [], s = 0, r = t.length, g = null != e; s < r; s++) (a = t[s]) && (A && !A(a, i, n) || (o.push(a), g && e.push(s)));
			return o
		}

		function ft(t, e, A, i, n, a) {
			return i && !i[L] && (i = ft(i)), n && !n[L] && (n = ft(n, a)), at((function (a, o, s, r) {
				var g, h, l, c = [], u = [], d = o.length, p = a || function (t, e, A) {
						for (var i = 0, n = e.length; i < n; i++) it(t, e[i], A);
						return A
					}(e || "*", s.nodeType ? [s] : s, []), Q = !t || !a && e ? p : It(p, c, t, s, r),
					I = A ? n || (a ? t : d || i) ? [] : o : Q;
				if (A && A(Q, I, s, r), i) for (g = It(I, u), i(g, [], s, r), h = g.length; h--;) (l = g[h]) && (I[u[h]] = !(Q[u[h]] = l));
				if (a) {
					if (n || t) {
						if (n) {
							for (g = [], h = I.length; h--;) (l = I[h]) && g.push(Q[h] = l);
							n(null, I = [], g, r)
						}
						for (h = I.length; h--;) (l = I[h]) && (g = n ? H(a, l) : c[h]) > -1 && (a[g] = !(o[g] = l))
					}
				} else I = It(I === o ? I.splice(d, I.length) : I), n ? n(null, o, I, r) : b.apply(o, I)
			}))
		}

		function wt(t) {
			for (var e, A, n, a = t.length, o = i.relative[t[0].type], s = o || i.relative[" "], r = o ? 1 : 0, h = pt((function (t) {
				return t === e
			}), s, !0), l = pt((function (t) {
				return H(e, t) > -1
			}), s, !0), c = [function (t, A, i) {
				var n = !o && (i || A !== g) || ((e = A).nodeType ? h(t, A, i) : l(t, A, i));
				return e = null, n
			}]; r < a; r++) if (A = i.relative[t[r].type]) c = [pt(Qt(c), A)]; else {
				if ((A = i.filter[t[r].type].apply(null, t[r].matches))[L]) {
					for (n = ++r; n < a && !i.relative[t[n].type]; n++) ;
					return ft(r > 1 && Qt(c), r > 1 && dt(t.slice(0, r - 1).concat({value: " " === t[r - 2].type ? "*" : ""})).replace(R, "$1"), A, r < n && wt(t.slice(r, n)), n < a && wt(t = t.slice(n)), n < a && dt(t))
				}
				c.push(A)
			}
			return Qt(c)
		}

		return ut.prototype = i.filters = i.pseudos, i.setFilters = new ut, o = it.tokenize = function (t, e) {
			var A, n, a, o, s, r, g, h = y[t + " "];
			if (h) return e ? 0 : h.slice(0);
			for (s = t, r = [], g = i.preFilter; s;) {
				for (o in A && !(n = O.exec(s)) || (n && (s = s.slice(n[0].length) || s), r.push(a = [])), A = !1, (n = N.exec(s)) && (A = n.shift(), a.push({
					value: A,
					type: n[0].replace(R, " ")
				}), s = s.slice(A.length)), i.filter) !(n = q[o].exec(s)) || g[o] && !(n = g[o](n)) || (A = n.shift(), a.push({
					value: A,
					type: o,
					matches: n
				}), s = s.slice(A.length));
				if (!A) break
			}
			return e ? s.length : s ? it.error(t) : y(t, r).slice(0)
		}, s = it.compile = function (t, e) {
			var A, n = [], a = [], s = P[t + " "];
			if (!s) {
				for (e || (e = o(t)), A = e.length; A--;) (s = wt(e[A]))[L] ? n.push(s) : a.push(s);
				(s = P(t, function (t, e) {
					var A = e.length > 0, n = t.length > 0, a = function (a, o, s, r, h) {
						var l, d, Q, I = 0, f = "0", w = a && [], L = [], m = g, v = a || n && i.find.TAG("*", h),
							E = _ += null == m ? 1 : Math.random() || .1, y = v.length;
						for (h && (g = o === u || o || h); f !== y && null != (l = v[f]); f++) {
							if (n && l) {
								for (d = 0, o || l.ownerDocument === u || (c(l), s = !p); Q = t[d++];) if (Q(l, o || u, s)) {
									r.push(l);
									break
								}
								h && (_ = E)
							}
							A && ((l = !Q && l) && I--, a && w.push(l))
						}
						if (I += f, A && f !== I) {
							for (d = 0; Q = e[d++];) Q(w, L, o, s);
							if (a) {
								if (I > 0) for (; f--;) w[f] || L[f] || (L[f] = B.call(r));
								L = It(L)
							}
							b.apply(r, L), h && !a && L.length > 0 && I + e.length > 1 && it.uniqueSort(r)
						}
						return h && (_ = E, g = m), w
					};
					return A ? at(a) : a
				}(a, n))).selector = t
			}
			return s
		}, r = it.select = function (t, e, n, a) {
			var r, g, h, l, c, u = "function" == typeof t && t, d = !a && o(t = u.selector || t);
			if (n = n || [], 1 === d.length) {
				if ((g = d[0] = d[0].slice(0)).length > 2 && "ID" === (h = g[0]).type && A.getById && 9 === e.nodeType && p && i.relative[g[1].type]) {
					if (!(e = (i.find.ID(h.matches[0].replace(tt, et), e) || [])[0])) return n;
					u && (e = e.parentNode), t = t.slice(g.shift().value.length)
				}
				for (r = q.needsContext.test(t) ? 0 : g.length; r-- && (h = g[r], !i.relative[l = h.type]);) if ((c = i.find[l]) && (a = c(h.matches[0].replace(tt, et), V.test(g[0].type) && ct(e.parentNode) || e))) {
					if (g.splice(r, 1), !(t = a.length && dt(g))) return b.apply(n, a), n;
					break
				}
			}
			return (u || s(t, d))(a, e, !p, n, !e || V.test(t) && ct(e.parentNode) || e), n
		}, A.sortStable = L.split("").sort(C).join("") === L, A.detectDuplicates = !!l, c(), A.sortDetached = ot((function (t) {
			return 1 & t.compareDocumentPosition(u.createElement("div"))
		})), ot((function (t) {
			return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
		})) || st("type|href|height|width", (function (t, e, A) {
			if (!A) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
		})), A.attributes && ot((function (t) {
			return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
		})) || st("value", (function (t, e, A) {
			if (!A && "input" === t.nodeName.toLowerCase()) return t.defaultValue
		})), ot((function (t) {
			return null == t.getAttribute("disabled")
		})) || st(D, (function (t, e, A) {
			var i;
			if (!A) return !0 === t[e] ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
		})), it
	}(t);
	c.find = f, c.expr = f.selectors, c.expr[":"] = c.expr.pseudos, c.uniqueSort = c.unique = f.uniqueSort, c.text = f.getText, c.isXMLDoc = f.isXML, c.contains = f.contains;
	var w = function (t, e, A) {
		for (var i = [], n = void 0 !== A; (t = t[e]) && 9 !== t.nodeType;) if (1 === t.nodeType) {
			if (n && c(t).is(A)) break;
			i.push(t)
		}
		return i
	}, L = function (t, e) {
		for (var A = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && A.push(t);
		return A
	}, m = c.expr.match.needsContext, _ = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/, v = /^.[^:#\[\.,]*$/;

	function E(t, e, A) {
		if (c.isFunction(e)) return c.grep(t, (function (t, i) {
			return !!e.call(t, i, t) !== A
		}));
		if (e.nodeType) return c.grep(t, (function (t) {
			return t === e !== A
		}));
		if ("string" == typeof e) {
			if (v.test(e)) return c.filter(e, t, A);
			e = c.filter(e, t)
		}
		return c.grep(t, (function (t) {
			return c.inArray(t, e) > -1 !== A
		}))
	}

	c.filter = function (t, e, A) {
		var i = e[0];
		return A && (t = ":not(" + t + ")"), 1 === e.length && 1 === i.nodeType ? c.find.matchesSelector(i, t) ? [i] : [] : c.find.matches(t, c.grep(e, (function (t) {
			return 1 === t.nodeType
		})))
	}, c.fn.extend({
		find: function (t) {
			var e, A = [], i = this, n = i.length;
			if ("string" != typeof t) return this.pushStack(c(t).filter((function () {
				for (e = 0; e < n; e++) if (c.contains(i[e], this)) return !0
			})));
			for (e = 0; e < n; e++) c.find(t, i[e], A);
			return (A = this.pushStack(n > 1 ? c.unique(A) : A)).selector = this.selector ? this.selector + " " + t : t, A
		}, filter: function (t) {
			return this.pushStack(E(this, t || [], !1))
		}, not: function (t) {
			return this.pushStack(E(this, t || [], !0))
		}, is: function (t) {
			return !!E(this, "string" == typeof t && m.test(t) ? c(t) : t || [], !1).length
		}
	});
	var y, P = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
	(c.fn.init = function (t, e, A) {
		var n, a;
		if (!t) return this;
		if (A = A || y, "string" == typeof t) {
			if (!(n = "<" === t.charAt(0) && ">" === t.charAt(t.length - 1) && t.length >= 3 ? [null, t, null] : P.exec(t)) || !n[1] && e) return !e || e.jquery ? (e || A).find(t) : this.constructor(e).find(t);
			if (n[1]) {
				if (e = e instanceof c ? e[0] : e, c.merge(this, c.parseHTML(n[1], e && e.nodeType ? e.ownerDocument || e : i, !0)), _.test(n[1]) && c.isPlainObject(e)) for (n in e) c.isFunction(this[n]) ? this[n](e[n]) : this.attr(n, e[n]);
				return this
			}
			if ((a = i.getElementById(n[2])) && a.parentNode) {
				if (a.id !== n[2]) return y.find(t);
				this.length = 1, this[0] = a
			}
			return this.context = i, this.selector = t, this
		}
		return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : c.isFunction(t) ? void 0 !== A.ready ? A.ready(t) : t(c) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), c.makeArray(t, this))
	}).prototype = c.fn, y = c(i);
	var C = /^(?:parents|prev(?:Until|All))/, T = {children: !0, contents: !0, next: !0, prev: !0};

	function K(t, e) {
		do {
			t = t[e]
		} while (t && 1 !== t.nodeType);
		return t
	}

	c.fn.extend({
		has: function (t) {
			var e, A = c(t, this), i = A.length;
			return this.filter((function () {
				for (e = 0; e < i; e++) if (c.contains(this, A[e])) return !0
			}))
		}, closest: function (t, e) {
			for (var A, i = 0, n = this.length, a = [], o = m.test(t) || "string" != typeof t ? c(t, e || this.context) : 0; i < n; i++) for (A = this[i]; A && A !== e; A = A.parentNode) if (A.nodeType < 11 && (o ? o.index(A) > -1 : 1 === A.nodeType && c.find.matchesSelector(A, t))) {
				a.push(A);
				break
			}
			return this.pushStack(a.length > 1 ? c.uniqueSort(a) : a)
		}, index: function (t) {
			return t ? "string" == typeof t ? c.inArray(this[0], c(t)) : c.inArray(t.jquery ? t[0] : t, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
		}, add: function (t, e) {
			return this.pushStack(c.uniqueSort(c.merge(this.get(), c(t, e))))
		}, addBack: function (t) {
			return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
		}
	}), c.each({
		parent: function (t) {
			var e = t.parentNode;
			return e && 11 !== e.nodeType ? e : null
		}, parents: function (t) {
			return w(t, "parentNode")
		}, parentsUntil: function (t, e, A) {
			return w(t, "parentNode", A)
		}, next: function (t) {
			return K(t, "nextSibling")
		}, prev: function (t) {
			return K(t, "previousSibling")
		}, nextAll: function (t) {
			return w(t, "nextSibling")
		}, prevAll: function (t) {
			return w(t, "previousSibling")
		}, nextUntil: function (t, e, A) {
			return w(t, "nextSibling", A)
		}, prevUntil: function (t, e, A) {
			return w(t, "previousSibling", A)
		}, siblings: function (t) {
			return L((t.parentNode || {}).firstChild, t)
		}, children: function (t) {
			return L(t.firstChild)
		}, contents: function (t) {
			return c.nodeName(t, "iframe") ? t.contentDocument || t.contentWindow.document : c.merge([], t.childNodes)
		}
	}, (function (t, e) {
		c.fn[t] = function (A, i) {
			var n = c.map(this, e, A);
			return "Until" !== t.slice(-5) && (i = A), i && "string" == typeof i && (n = c.filter(i, n)), this.length > 1 && (T[t] || (n = c.uniqueSort(n)), C.test(t) && (n = n.reverse())), this.pushStack(n)
		}
	}));
	var B, x, b = /\S+/g;

	function S() {
		i.addEventListener ? (i.removeEventListener("DOMContentLoaded", H), t.removeEventListener("load", H)) : (i.detachEvent("onreadystatechange", H), t.detachEvent("onload", H))
	}

	function H() {
		(i.addEventListener || "load" === t.event.type || "complete" === i.readyState) && (S(), c.ready())
	}

	for (x in c.Callbacks = function (t) {
		t = "string" == typeof t ? function (t) {
			var e = {};
			return c.each(t.match(b) || [], (function (t, A) {
				e[A] = !0
			})), e
		}(t) : c.extend({}, t);
		var e, A, i, n, a = [], o = [], s = -1, r = function () {
			for (n = t.once, i = e = !0; o.length; s = -1) for (A = o.shift(); ++s < a.length;) !1 === a[s].apply(A[0], A[1]) && t.stopOnFalse && (s = a.length, A = !1);
			t.memory || (A = !1), e = !1, n && (a = A ? [] : "")
		}, g = {
			add: function () {
				return a && (A && !e && (s = a.length - 1, o.push(A)), function e(A) {
					c.each(A, (function (A, i) {
						c.isFunction(i) ? t.unique && g.has(i) || a.push(i) : i && i.length && "string" !== c.type(i) && e(i)
					}))
				}(arguments), A && !e && r()), this
			}, remove: function () {
				return c.each(arguments, (function (t, e) {
					for (var A; (A = c.inArray(e, a, A)) > -1;) a.splice(A, 1), A <= s && s--
				})), this
			}, has: function (t) {
				return t ? c.inArray(t, a) > -1 : a.length > 0
			}, empty: function () {
				return a && (a = []), this
			}, disable: function () {
				return n = o = [], a = A = "", this
			}, disabled: function () {
				return !a
			}, lock: function () {
				return n = !0, A || g.disable(), this
			}, locked: function () {
				return !!n
			}, fireWith: function (t, A) {
				return n || (A = [t, (A = A || []).slice ? A.slice() : A], o.push(A), e || r()), this
			}, fire: function () {
				return g.fireWith(this, arguments), this
			}, fired: function () {
				return !!i
			}
		};
		return g
	}, c.extend({
		Deferred: function (t) {
			var e = [["resolve", "done", c.Callbacks("once memory"), "resolved"], ["reject", "fail", c.Callbacks("once memory"), "rejected"], ["notify", "progress", c.Callbacks("memory")]],
				A = "pending", i = {
					state: function () {
						return A
					}, always: function () {
						return n.done(arguments).fail(arguments), this
					}, then: function () {
						var t = arguments;
						return c.Deferred((function (A) {
							c.each(e, (function (e, a) {
								var o = c.isFunction(t[e]) && t[e];
								n[a[1]]((function () {
									var t = o && o.apply(this, arguments);
									t && c.isFunction(t.promise) ? t.promise().progress(A.notify).done(A.resolve).fail(A.reject) : A[a[0] + "With"](this === i ? A.promise() : this, o ? [t] : arguments)
								}))
							})), t = null
						})).promise()
					}, promise: function (t) {
						return null != t ? c.extend(t, i) : i
					}
				}, n = {};
			return i.pipe = i.then, c.each(e, (function (t, a) {
				var o = a[2], s = a[3];
				i[a[1]] = o.add, s && o.add((function () {
					A = s
				}), e[1 ^ t][2].disable, e[2][2].lock), n[a[0]] = function () {
					return n[a[0] + "With"](this === n ? i : this, arguments), this
				}, n[a[0] + "With"] = o.fireWith
			})), i.promise(n), t && t.call(n, n), n
		}, when: function (t) {
			var e, A, i, a = 0, o = n.call(arguments), s = o.length,
				r = 1 !== s || t && c.isFunction(t.promise) ? s : 0, g = 1 === r ? t : c.Deferred(),
				h = function (t, A, i) {
					return function (a) {
						A[t] = this, i[t] = arguments.length > 1 ? n.call(arguments) : a, i === e ? g.notifyWith(A, i) : --r || g.resolveWith(A, i)
					}
				};
			if (s > 1) for (e = new Array(s), A = new Array(s), i = new Array(s); a < s; a++) o[a] && c.isFunction(o[a].promise) ? o[a].promise().progress(h(a, A, e)).done(h(a, i, o)).fail(g.reject) : --r;
			return r || g.resolveWith(i, o), g.promise()
		}
	}), c.fn.ready = function (t) {
		return c.ready.promise().done(t), this
	}, c.extend({
		isReady: !1, readyWait: 1, holdReady: function (t) {
			t ? c.readyWait++ : c.ready(!0)
		}, ready: function (t) {
			(!0 === t ? --c.readyWait : c.isReady) || (c.isReady = !0, !0 !== t && --c.readyWait > 0 || (B.resolveWith(i, [c]), c.fn.triggerHandler && (c(i).triggerHandler("ready"), c(i).off("ready"))))
		}
	}), c.ready.promise = function (e) {
		if (!B) if (B = c.Deferred(), "complete" === i.readyState || "loading" !== i.readyState && !i.documentElement.doScroll) t.setTimeout(c.ready); else if (i.addEventListener) i.addEventListener("DOMContentLoaded", H), t.addEventListener("load", H); else {
			i.attachEvent("onreadystatechange", H), t.attachEvent("onload", H);
			var A = !1;
			try {
				A = null == t.frameElement && i.documentElement
			} catch (t) {
			}
			A && A.doScroll && function e() {
				if (!c.isReady) {
					try {
						A.doScroll("left")
					} catch (A) {
						return t.setTimeout(e, 50)
					}
					S(), c.ready()
				}
			}()
		}
		return B.promise(e)
	}, c.ready.promise(), c(l)) break;
	l.ownFirst = "0" === x, l.inlineBlockNeedsLayout = !1, c((function () {
		var t, e, A, n;
		(A = i.getElementsByTagName("body")[0]) && A.style && (e = i.createElement("div"), (n = i.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", A.appendChild(n).appendChild(e), void 0 !== e.style.zoom && (e.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", l.inlineBlockNeedsLayout = t = 3 === e.offsetWidth, t && (A.style.zoom = 1)), A.removeChild(n))
	})), function () {
		var t = i.createElement("div");
		l.deleteExpando = !0;
		try {
			delete t.test
		} catch (t) {
			l.deleteExpando = !1
		}
		t = null
	}();
	var D, F = function (t) {
		var e = c.noData[(t.nodeName + " ").toLowerCase()], A = +t.nodeType || 1;
		return (1 === A || 9 === A) && (!e || !0 !== e && t.getAttribute("classid") === e)
	}, j = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, M = /([A-Z])/g;

	function k(t, e, A) {
		if (void 0 === A && 1 === t.nodeType) {
			var i = "data-" + e.replace(M, "-$1").toLowerCase();
			if ("string" == typeof (A = t.getAttribute(i))) {
				try {
					A = "true" === A || "false" !== A && ("null" === A ? null : +A + "" === A ? +A : j.test(A) ? c.parseJSON(A) : A)
				} catch (t) {
				}
				c.data(t, e, A)
			} else A = void 0
		}
		return A
	}

	function G(t) {
		var e;
		for (e in t) if (("data" !== e || !c.isEmptyObject(t[e])) && "toJSON" !== e) return !1;
		return !0
	}

	function R(t, e, i, n) {
		if (F(t)) {
			var a, o, s = c.expando, r = t.nodeType, g = r ? c.cache : t, h = r ? t[s] : t[s] && s;
			if (h && g[h] && (n || g[h].data) || void 0 !== i || "string" != typeof e) return h || (h = r ? t[s] = A.pop() || c.guid++ : s), g[h] || (g[h] = r ? {} : {toJSON: c.noop}), "object" != typeof e && "function" != typeof e || (n ? g[h] = c.extend(g[h], e) : g[h].data = c.extend(g[h].data, e)), o = g[h], n || (o.data || (o.data = {}), o = o.data), void 0 !== i && (o[c.camelCase(e)] = i), "string" == typeof e ? null == (a = o[e]) && (a = o[c.camelCase(e)]) : a = o, a
		}
	}

	function O(t, e, A) {
		if (F(t)) {
			var i, n, a = t.nodeType, o = a ? c.cache : t, s = a ? t[c.expando] : c.expando;
			if (o[s]) {
				if (e && (i = A ? o[s] : o[s].data)) {
					n = (e = c.isArray(e) ? e.concat(c.map(e, c.camelCase)) : e in i || (e = c.camelCase(e)) in i ? [e] : e.split(" ")).length;
					for (; n--;) delete i[e[n]];
					if (A ? !G(i) : !c.isEmptyObject(i)) return
				}
				(A || (delete o[s].data, G(o[s]))) && (a ? c.cleanData([t], !0) : l.deleteExpando || o != o.window ? delete o[s] : o[s] = void 0)
			}
		}
	}

	c.extend({
		cache: {},
		noData: {"applet ": !0, "embed ": !0, "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},
		hasData: function (t) {
			return !!(t = t.nodeType ? c.cache[t[c.expando]] : t[c.expando]) && !G(t)
		},
		data: function (t, e, A) {
			return R(t, e, A)
		},
		removeData: function (t, e) {
			return O(t, e)
		},
		_data: function (t, e, A) {
			return R(t, e, A, !0)
		},
		_removeData: function (t, e) {
			return O(t, e, !0)
		}
	}), c.fn.extend({
		data: function (t, e) {
			var A, i, n, a = this[0], o = a && a.attributes;
			if (void 0 === t) {
				if (this.length && (n = c.data(a), 1 === a.nodeType && !c._data(a, "parsedAttrs"))) {
					for (A = o.length; A--;) o[A] && 0 === (i = o[A].name).indexOf("data-") && k(a, i = c.camelCase(i.slice(5)), n[i]);
					c._data(a, "parsedAttrs", !0)
				}
				return n
			}
			return "object" == typeof t ? this.each((function () {
				c.data(this, t)
			})) : arguments.length > 1 ? this.each((function () {
				c.data(this, t, e)
			})) : a ? k(a, t, c.data(a, t)) : void 0
		}, removeData: function (t) {
			return this.each((function () {
				c.removeData(this, t)
			}))
		}
	}), c.extend({
		queue: function (t, e, A) {
			var i;
			if (t) return e = (e || "fx") + "queue", i = c._data(t, e), A && (!i || c.isArray(A) ? i = c._data(t, e, c.makeArray(A)) : i.push(A)), i || []
		}, dequeue: function (t, e) {
			e = e || "fx";
			var A = c.queue(t, e), i = A.length, n = A.shift(), a = c._queueHooks(t, e);
			"inprogress" === n && (n = A.shift(), i--), n && ("fx" === e && A.unshift("inprogress"), delete a.stop, n.call(t, (function () {
				c.dequeue(t, e)
			}), a)), !i && a && a.empty.fire()
		}, _queueHooks: function (t, e) {
			var A = e + "queueHooks";
			return c._data(t, A) || c._data(t, A, {
				empty: c.Callbacks("once memory").add((function () {
					c._removeData(t, e + "queue"), c._removeData(t, A)
				}))
			})
		}
	}), c.fn.extend({
		queue: function (t, e) {
			var A = 2;
			return "string" != typeof t && (e = t, t = "fx", A--), arguments.length < A ? c.queue(this[0], t) : void 0 === e ? this : this.each((function () {
				var A = c.queue(this, t, e);
				c._queueHooks(this, t), "fx" === t && "inprogress" !== A[0] && c.dequeue(this, t)
			}))
		}, dequeue: function (t) {
			return this.each((function () {
				c.dequeue(this, t)
			}))
		}, clearQueue: function (t) {
			return this.queue(t || "fx", [])
		}, promise: function (t, e) {
			var A, i = 1, n = c.Deferred(), a = this, o = this.length, s = function () {
				--i || n.resolveWith(a, [a])
			};
			for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; o--;) (A = c._data(a[o], t + "queueHooks")) && A.empty && (i++, A.empty.add(s));
			return s(), n.promise(e)
		}
	}), l.shrinkWrapBlocks = function () {
		return null != D ? D : (D = !1, (e = i.getElementsByTagName("body")[0]) && e.style ? (t = i.createElement("div"), (A = i.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", e.appendChild(A).appendChild(t), void 0 !== t.style.zoom && (t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", t.appendChild(i.createElement("div")).style.width = "5px", D = 3 !== t.offsetWidth), e.removeChild(A), D) : void 0);
		var t, e, A
	};
	var N = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, U = new RegExp("^(?:([+-])=|)(" + N + ")([a-z%]*)$", "i"),
		z = ["Top", "Right", "Bottom", "Left"], J = function (t, e) {
			return t = e || t, "none" === c.css(t, "display") || !c.contains(t.ownerDocument, t)
		};

	function q(t, e, A, i) {
		var n, a = 1, o = 20, s = i ? function () {
				return i.cur()
			} : function () {
				return c.css(t, e, "")
			}, r = s(), g = A && A[3] || (c.cssNumber[e] ? "" : "px"),
			h = (c.cssNumber[e] || "px" !== g && +r) && U.exec(c.css(t, e));
		if (h && h[3] !== g) {
			g = g || h[3], A = A || [], h = +r || 1;
			do {
				h /= a = a || ".5", c.style(t, e, h + g)
			} while (a !== (a = s() / r) && 1 !== a && --o)
		}
		return A && (h = +h || +r || 0, n = A[1] ? h + (A[1] + 1) * A[2] : +A[2], i && (i.unit = g, i.start = h, i.end = n)), n
	}

	var W, $, Y, X = function (t, e, A, i, n, a, o) {
			var s = 0, r = t.length, g = null == A;
			if ("object" === c.type(A)) for (s in n = !0, A) X(t, e, s, A[s], !0, a, o); else if (void 0 !== i && (n = !0, c.isFunction(i) || (o = !0), g && (o ? (e.call(t, i), e = null) : (g = e, e = function (t, e, A) {
				return g.call(c(t), A)
			})), e)) for (; s < r; s++) e(t[s], A, o ? i : i.call(t[s], s, e(t[s], A)));
			return n ? t : g ? e.call(t) : r ? e(t[0], A) : a
		}, V = /^(?:checkbox|radio)$/i, Z = /<([\w:-]+)/, tt = /^$|\/(?:java|ecma)script/i, et = /^\s+/,
		At = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";

	function it(t) {
		var e = At.split("|"), A = t.createDocumentFragment();
		if (A.createElement) for (; e.length;) A.createElement(e.pop());
		return A
	}

	W = i.createElement("div"), $ = i.createDocumentFragment(), Y = i.createElement("input"), W.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", l.leadingWhitespace = 3 === W.firstChild.nodeType, l.tbody = !W.getElementsByTagName("tbody").length, l.htmlSerialize = !!W.getElementsByTagName("link").length, l.html5Clone = "<:nav></:nav>" !== i.createElement("nav").cloneNode(!0).outerHTML, Y.type = "checkbox", Y.checked = !0, $.appendChild(Y), l.appendChecked = Y.checked, W.innerHTML = "<textarea>x</textarea>", l.noCloneChecked = !!W.cloneNode(!0).lastChild.defaultValue, $.appendChild(W), (Y = i.createElement("input")).setAttribute("type", "radio"), Y.setAttribute("checked", "checked"), Y.setAttribute("name", "t"), W.appendChild(Y), l.checkClone = W.cloneNode(!0).cloneNode(!0).lastChild.checked, l.noCloneEvent = !!W.addEventListener, W[c.expando] = 1, l.attributes = !W.getAttribute(c.expando);
	var nt = {
		option: [1, "<select multiple='multiple'>", "</select>"],
		legend: [1, "<fieldset>", "</fieldset>"],
		area: [1, "<map>", "</map>"],
		param: [1, "<object>", "</object>"],
		thead: [1, "<table>", "</table>"],
		tr: [2, "<table><tbody>", "</tbody></table>"],
		col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
		td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
		_default: l.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
	};

	function at(t, e) {
		var A, i, n = 0,
			a = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "*") : void 0;
		if (!a) for (a = [], A = t.childNodes || t; null != (i = A[n]); n++) !e || c.nodeName(i, e) ? a.push(i) : c.merge(a, at(i, e));
		return void 0 === e || e && c.nodeName(t, e) ? c.merge([t], a) : a
	}

	function ot(t, e) {
		for (var A, i = 0; null != (A = t[i]); i++) c._data(A, "globalEval", !e || c._data(e[i], "globalEval"))
	}

	nt.optgroup = nt.option, nt.tbody = nt.tfoot = nt.colgroup = nt.caption = nt.thead, nt.th = nt.td;
	var st = /<|&#?\w+;/, rt = /<tbody/i;

	function gt(t) {
		V.test(t.type) && (t.defaultChecked = t.checked)
	}

	function ht(t, e, A, i, n) {
		for (var a, o, s, r, g, h, u, d = t.length, p = it(e), Q = [], I = 0; I < d; I++) if ((o = t[I]) || 0 === o) if ("object" === c.type(o)) c.merge(Q, o.nodeType ? [o] : o); else if (st.test(o)) {
			for (r = r || p.appendChild(e.createElement("div")), g = (Z.exec(o) || ["", ""])[1].toLowerCase(), u = nt[g] || nt._default, r.innerHTML = u[1] + c.htmlPrefilter(o) + u[2], a = u[0]; a--;) r = r.lastChild;
			if (!l.leadingWhitespace && et.test(o) && Q.push(e.createTextNode(et.exec(o)[0])), !l.tbody) for (a = (o = "table" !== g || rt.test(o) ? "<table>" !== u[1] || rt.test(o) ? 0 : r : r.firstChild) && o.childNodes.length; a--;) c.nodeName(h = o.childNodes[a], "tbody") && !h.childNodes.length && o.removeChild(h);
			for (c.merge(Q, r.childNodes), r.textContent = ""; r.firstChild;) r.removeChild(r.firstChild);
			r = p.lastChild
		} else Q.push(e.createTextNode(o));
		for (r && p.removeChild(r), l.appendChecked || c.grep(at(Q, "input"), gt), I = 0; o = Q[I++];) if (i && c.inArray(o, i) > -1) n && n.push(o); else if (s = c.contains(o.ownerDocument, o), r = at(p.appendChild(o), "script"), s && ot(r), A) for (a = 0; o = r[a++];) tt.test(o.type || "") && A.push(o);
		return r = null, p
	}

	!function () {
		var e, A, n = i.createElement("div");
		for (e in {
			submit: !0,
			change: !0,
			focusin: !0
		}) A = "on" + e, (l[e] = A in t) || (n.setAttribute(A, "t"), l[e] = !1 === n.attributes[A].expando);
		n = null
	}();
	var lt = /^(?:input|select|textarea)$/i, ct = /^key/, ut = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
		dt = /^(?:focusinfocus|focusoutblur)$/, pt = /^([^.]*)(?:\.(.+)|)/;

	function Qt() {
		return !0
	}

	function It() {
		return !1
	}

	function ft() {
		try {
			return i.activeElement
		} catch (t) {
		}
	}

	function wt(t, e, A, i, n, a) {
		var o, s;
		if ("object" == typeof e) {
			for (s in "string" != typeof A && (i = i || A, A = void 0), e) wt(t, s, A, i, e[s], a);
			return t
		}
		if (null == i && null == n ? (n = A, i = A = void 0) : null == n && ("string" == typeof A ? (n = i, i = void 0) : (n = i, i = A, A = void 0)), !1 === n) n = It; else if (!n) return t;
		return 1 === a && (o = n, (n = function (t) {
			return c().off(t), o.apply(this, arguments)
		}).guid = o.guid || (o.guid = c.guid++)), t.each((function () {
			c.event.add(this, e, n, i, A)
		}))
	}

	c.event = {
		global: {},
		add: function (t, e, A, i, n) {
			var a, o, s, r, g, h, l, u, d, p, Q, I = c._data(t);
			if (I) {
				for (A.handler && (A = (r = A).handler, n = r.selector), A.guid || (A.guid = c.guid++), (o = I.events) || (o = I.events = {}), (h = I.handle) || ((h = I.handle = function (t) {
					return void 0 === c || t && c.event.triggered === t.type ? void 0 : c.event.dispatch.apply(h.elem, arguments)
				}).elem = t), s = (e = (e || "").match(b) || [""]).length; s--;) d = Q = (a = pt.exec(e[s]) || [])[1], p = (a[2] || "").split(".").sort(), d && (g = c.event.special[d] || {}, d = (n ? g.delegateType : g.bindType) || d, g = c.event.special[d] || {}, l = c.extend({
					type: d,
					origType: Q,
					data: i,
					handler: A,
					guid: A.guid,
					selector: n,
					needsContext: n && c.expr.match.needsContext.test(n),
					namespace: p.join(".")
				}, r), (u = o[d]) || ((u = o[d] = []).delegateCount = 0, g.setup && !1 !== g.setup.call(t, i, p, h) || (t.addEventListener ? t.addEventListener(d, h, !1) : t.attachEvent && t.attachEvent("on" + d, h))), g.add && (g.add.call(t, l), l.handler.guid || (l.handler.guid = A.guid)), n ? u.splice(u.delegateCount++, 0, l) : u.push(l), c.event.global[d] = !0);
				t = null
			}
		},
		remove: function (t, e, A, i, n) {
			var a, o, s, r, g, h, l, u, d, p, Q, I = c.hasData(t) && c._data(t);
			if (I && (h = I.events)) {
				for (g = (e = (e || "").match(b) || [""]).length; g--;) if (d = Q = (s = pt.exec(e[g]) || [])[1], p = (s[2] || "").split(".").sort(), d) {
					for (l = c.event.special[d] || {}, u = h[d = (i ? l.delegateType : l.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), r = a = u.length; a--;) o = u[a], !n && Q !== o.origType || A && A.guid !== o.guid || s && !s.test(o.namespace) || i && i !== o.selector && ("**" !== i || !o.selector) || (u.splice(a, 1), o.selector && u.delegateCount--, l.remove && l.remove.call(t, o));
					r && !u.length && (l.teardown && !1 !== l.teardown.call(t, p, I.handle) || c.removeEvent(t, d, I.handle), delete h[d])
				} else for (d in h) c.event.remove(t, d + e[g], A, i, !0);
				c.isEmptyObject(h) && (delete I.handle, c._removeData(t, "events"))
			}
		},
		trigger: function (e, A, n, a) {
			var o, s, r, g, l, u, d, p = [n || i], Q = h.call(e, "type") ? e.type : e,
				I = h.call(e, "namespace") ? e.namespace.split(".") : [];
			if (r = u = n = n || i, 3 !== n.nodeType && 8 !== n.nodeType && !dt.test(Q + c.event.triggered) && (Q.indexOf(".") > -1 && (I = Q.split("."), Q = I.shift(), I.sort()), s = Q.indexOf(":") < 0 && "on" + Q, (e = e[c.expando] ? e : new c.Event(Q, "object" == typeof e && e)).isTrigger = a ? 2 : 3, e.namespace = I.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + I.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), A = null == A ? [e] : c.makeArray(A, [e]), l = c.event.special[Q] || {}, a || !l.trigger || !1 !== l.trigger.apply(n, A))) {
				if (!a && !l.noBubble && !c.isWindow(n)) {
					for (g = l.delegateType || Q, dt.test(g + Q) || (r = r.parentNode); r; r = r.parentNode) p.push(r), u = r;
					u === (n.ownerDocument || i) && p.push(u.defaultView || u.parentWindow || t)
				}
				for (d = 0; (r = p[d++]) && !e.isPropagationStopped();) e.type = d > 1 ? g : l.bindType || Q, (o = (c._data(r, "events") || {})[e.type] && c._data(r, "handle")) && o.apply(r, A), (o = s && r[s]) && o.apply && F(r) && (e.result = o.apply(r, A), !1 === e.result && e.preventDefault());
				if (e.type = Q, !a && !e.isDefaultPrevented() && (!l._default || !1 === l._default.apply(p.pop(), A)) && F(n) && s && n[Q] && !c.isWindow(n)) {
					(u = n[s]) && (n[s] = null), c.event.triggered = Q;
					try {
						n[Q]()
					} catch (t) {
					}
					c.event.triggered = void 0, u && (n[s] = u)
				}
				return e.result
			}
		},
		dispatch: function (t) {
			t = c.event.fix(t);
			var e, A, i, a, o, s = [], r = n.call(arguments), g = (c._data(this, "events") || {})[t.type] || [],
				h = c.event.special[t.type] || {};
			if (r[0] = t, t.delegateTarget = this, !h.preDispatch || !1 !== h.preDispatch.call(this, t)) {
				for (s = c.event.handlers.call(this, t, g), e = 0; (a = s[e++]) && !t.isPropagationStopped();) for (t.currentTarget = a.elem, A = 0; (o = a.handlers[A++]) && !t.isImmediatePropagationStopped();) t.rnamespace && !t.rnamespace.test(o.namespace) || (t.handleObj = o, t.data = o.data, void 0 !== (i = ((c.event.special[o.origType] || {}).handle || o.handler).apply(a.elem, r)) && !1 === (t.result = i) && (t.preventDefault(), t.stopPropagation()));
				return h.postDispatch && h.postDispatch.call(this, t), t.result
			}
		},
		handlers: function (t, e) {
			var A, i, n, a, o = [], s = e.delegateCount, r = t.target;
			if (s && r.nodeType && ("click" !== t.type || isNaN(t.button) || t.button < 1)) for (; r != this; r = r.parentNode || this) if (1 === r.nodeType && (!0 !== r.disabled || "click" !== t.type)) {
				for (i = [], A = 0; A < s; A++) void 0 === i[n = (a = e[A]).selector + " "] && (i[n] = a.needsContext ? c(n, this).index(r) > -1 : c.find(n, this, null, [r]).length), i[n] && i.push(a);
				i.length && o.push({elem: r, handlers: i})
			}
			return s < e.length && o.push({elem: this, handlers: e.slice(s)}), o
		},
		fix: function (t) {
			if (t[c.expando]) return t;
			var e, A, n, a = t.type, o = t, s = this.fixHooks[a];
			for (s || (this.fixHooks[a] = s = ut.test(a) ? this.mouseHooks : ct.test(a) ? this.keyHooks : {}), n = s.props ? this.props.concat(s.props) : this.props, t = new c.Event(o), e = n.length; e--;) t[A = n[e]] = o[A];
			return t.target || (t.target = o.srcElement || i), 3 === t.target.nodeType && (t.target = t.target.parentNode), t.metaKey = !!t.metaKey, s.filter ? s.filter(t, o) : t
		},
		props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
		fixHooks: {},
		keyHooks: {
			props: "char charCode key keyCode".split(" "), filter: function (t, e) {
				return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
			}
		},
		mouseHooks: {
			props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
			filter: function (t, e) {
				var A, n, a, o = e.button, s = e.fromElement;
				return null == t.pageX && null != e.clientX && (a = (n = t.target.ownerDocument || i).documentElement, A = n.body, t.pageX = e.clientX + (a && a.scrollLeft || A && A.scrollLeft || 0) - (a && a.clientLeft || A && A.clientLeft || 0), t.pageY = e.clientY + (a && a.scrollTop || A && A.scrollTop || 0) - (a && a.clientTop || A && A.clientTop || 0)), !t.relatedTarget && s && (t.relatedTarget = s === t.target ? e.toElement : s), t.which || void 0 === o || (t.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), t
			}
		},
		special: {
			load: {noBubble: !0}, focus: {
				trigger: function () {
					if (this !== ft() && this.focus) try {
						return this.focus(), !1
					} catch (t) {
					}
				}, delegateType: "focusin"
			}, blur: {
				trigger: function () {
					if (this === ft() && this.blur) return this.blur(), !1
				}, delegateType: "focusout"
			}, click: {
				trigger: function () {
					if (c.nodeName(this, "input") && "checkbox" === this.type && this.click) return this.click(), !1
				}, _default: function (t) {
					return c.nodeName(t.target, "a")
				}
			}, beforeunload: {
				postDispatch: function (t) {
					void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
				}
			}
		},
		simulate: function (t, e, A) {
			var i = c.extend(new c.Event, A, {type: t, isSimulated: !0});
			c.event.trigger(i, null, e), i.isDefaultPrevented() && A.preventDefault()
		}
	}, c.removeEvent = i.removeEventListener ? function (t, e, A) {
		t.removeEventListener && t.removeEventListener(e, A)
	} : function (t, e, A) {
		var i = "on" + e;
		t.detachEvent && (void 0 === t[i] && (t[i] = null), t.detachEvent(i, A))
	}, c.Event = function (t, e) {
		if (!(this instanceof c.Event)) return new c.Event(t, e);
		t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? Qt : It) : this.type = t, e && c.extend(this, e), this.timeStamp = t && t.timeStamp || c.now(), this[c.expando] = !0
	}, c.Event.prototype = {
		constructor: c.Event,
		isDefaultPrevented: It,
		isPropagationStopped: It,
		isImmediatePropagationStopped: It,
		preventDefault: function () {
			var t = this.originalEvent;
			this.isDefaultPrevented = Qt, t && (t.preventDefault ? t.preventDefault() : t.returnValue = !1)
		},
		stopPropagation: function () {
			var t = this.originalEvent;
			this.isPropagationStopped = Qt, t && !this.isSimulated && (t.stopPropagation && t.stopPropagation(), t.cancelBubble = !0)
		},
		stopImmediatePropagation: function () {
			var t = this.originalEvent;
			this.isImmediatePropagationStopped = Qt, t && t.stopImmediatePropagation && t.stopImmediatePropagation(), this.stopPropagation()
		}
	}, c.each({
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, (function (t, e) {
		c.event.special[t] = {
			delegateType: e, bindType: e, handle: function (t) {
				var A, i = this, n = t.relatedTarget, a = t.handleObj;
				return n && (n === i || c.contains(i, n)) || (t.type = a.origType, A = a.handler.apply(this, arguments), t.type = e), A
			}
		}
	})), l.submit || (c.event.special.submit = {
		setup: function () {
			if (c.nodeName(this, "form")) return !1;
			c.event.add(this, "click._submit keypress._submit", (function (t) {
				var e = t.target, A = c.nodeName(e, "input") || c.nodeName(e, "button") ? c.prop(e, "form") : void 0;
				A && !c._data(A, "submit") && (c.event.add(A, "submit._submit", (function (t) {
					t._submitBubble = !0
				})), c._data(A, "submit", !0))
			}))
		}, postDispatch: function (t) {
			t._submitBubble && (delete t._submitBubble, this.parentNode && !t.isTrigger && c.event.simulate("submit", this.parentNode, t))
		}, teardown: function () {
			if (c.nodeName(this, "form")) return !1;
			c.event.remove(this, "._submit")
		}
	}), l.change || (c.event.special.change = {
		setup: function () {
			if (lt.test(this.nodeName)) return "checkbox" !== this.type && "radio" !== this.type || (c.event.add(this, "propertychange._change", (function (t) {
				"checked" === t.originalEvent.propertyName && (this._justChanged = !0)
			})), c.event.add(this, "click._change", (function (t) {
				this._justChanged && !t.isTrigger && (this._justChanged = !1), c.event.simulate("change", this, t)
			}))), !1;
			c.event.add(this, "beforeactivate._change", (function (t) {
				var e = t.target;
				lt.test(e.nodeName) && !c._data(e, "change") && (c.event.add(e, "change._change", (function (t) {
					!this.parentNode || t.isSimulated || t.isTrigger || c.event.simulate("change", this.parentNode, t)
				})), c._data(e, "change", !0))
			}))
		}, handle: function (t) {
			var e = t.target;
			if (this !== e || t.isSimulated || t.isTrigger || "radio" !== e.type && "checkbox" !== e.type) return t.handleObj.handler.apply(this, arguments)
		}, teardown: function () {
			return c.event.remove(this, "._change"), !lt.test(this.nodeName)
		}
	}), l.focusin || c.each({focus: "focusin", blur: "focusout"}, (function (t, e) {
		var A = function (t) {
			c.event.simulate(e, t.target, c.event.fix(t))
		};
		c.event.special[e] = {
			setup: function () {
				var i = this.ownerDocument || this, n = c._data(i, e);
				n || i.addEventListener(t, A, !0), c._data(i, e, (n || 0) + 1)
			}, teardown: function () {
				var i = this.ownerDocument || this, n = c._data(i, e) - 1;
				n ? c._data(i, e, n) : (i.removeEventListener(t, A, !0), c._removeData(i, e))
			}
		}
	})), c.fn.extend({
		on: function (t, e, A, i) {
			return wt(this, t, e, A, i)
		}, one: function (t, e, A, i) {
			return wt(this, t, e, A, i, 1)
		}, off: function (t, e, A) {
			var i, n;
			if (t && t.preventDefault && t.handleObj) return i = t.handleObj, c(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
			if ("object" == typeof t) {
				for (n in t) this.off(n, e, t[n]);
				return this
			}
			return !1 !== e && "function" != typeof e || (A = e, e = void 0), !1 === A && (A = It), this.each((function () {
				c.event.remove(this, t, A, e)
			}))
		}, trigger: function (t, e) {
			return this.each((function () {
				c.event.trigger(t, e, this)
			}))
		}, triggerHandler: function (t, e) {
			var A = this[0];
			if (A) return c.event.trigger(t, e, A, !0)
		}
	});
	var Lt = / jQuery\d+="(?:null|\d+)"/g, mt = new RegExp("<(?:" + At + ")[\\s/>]", "i"),
		_t = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi, vt = /<script|<style|<link/i,
		Et = /checked\s*(?:[^=]|=\s*.checked.)/i, yt = /^true\/(.*)/, Pt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
		Ct = it(i).appendChild(i.createElement("div"));

	function Tt(t, e) {
		return c.nodeName(t, "table") && c.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
	}

	function Kt(t) {
		return t.type = (null !== c.find.attr(t, "type")) + "/" + t.type, t
	}

	function Bt(t) {
		var e = yt.exec(t.type);
		return e ? t.type = e[1] : t.removeAttribute("type"), t
	}

	function xt(t, e) {
		if (1 === e.nodeType && c.hasData(t)) {
			var A, i, n, a = c._data(t), o = c._data(e, a), s = a.events;
			if (s) for (A in delete o.handle, o.events = {}, s) for (i = 0, n = s[A].length; i < n; i++) c.event.add(e, A, s[A][i]);
			o.data && (o.data = c.extend({}, o.data))
		}
	}

	function bt(t, e) {
		var A, i, n;
		if (1 === e.nodeType) {
			if (A = e.nodeName.toLowerCase(), !l.noCloneEvent && e[c.expando]) {
				for (i in (n = c._data(e)).events) c.removeEvent(e, i, n.handle);
				e.removeAttribute(c.expando)
			}
			"script" === A && e.text !== t.text ? (Kt(e).text = t.text, Bt(e)) : "object" === A ? (e.parentNode && (e.outerHTML = t.outerHTML), l.html5Clone && t.innerHTML && !c.trim(e.innerHTML) && (e.innerHTML = t.innerHTML)) : "input" === A && V.test(t.type) ? (e.defaultChecked = e.checked = t.checked, e.value !== t.value && (e.value = t.value)) : "option" === A ? e.defaultSelected = e.selected = t.defaultSelected : "input" !== A && "textarea" !== A || (e.defaultValue = t.defaultValue)
		}
	}

	function St(t, e, A, i) {
		e = a.apply([], e);
		var n, o, s, r, g, h, u = 0, d = t.length, p = d - 1, Q = e[0], I = c.isFunction(Q);
		if (I || d > 1 && "string" == typeof Q && !l.checkClone && Et.test(Q)) return t.each((function (n) {
			var a = t.eq(n);
			I && (e[0] = Q.call(this, n, a.html())), St(a, e, A, i)
		}));
		if (d && (n = (h = ht(e, t[0].ownerDocument, !1, t, i)).firstChild, 1 === h.childNodes.length && (h = n), n || i)) {
			for (s = (r = c.map(at(h, "script"), Kt)).length; u < d; u++) o = h, u !== p && (o = c.clone(o, !0, !0), s && c.merge(r, at(o, "script"))), A.call(t[u], o, u);
			if (s) for (g = r[r.length - 1].ownerDocument, c.map(r, Bt), u = 0; u < s; u++) o = r[u], tt.test(o.type || "") && !c._data(o, "globalEval") && c.contains(g, o) && (o.src ? c._evalUrl && c._evalUrl(o.src) : c.globalEval((o.text || o.textContent || o.innerHTML || "").replace(Pt, "")));
			h = n = null
		}
		return t
	}

	function Ht(t, e, A) {
		for (var i, n = e ? c.filter(e, t) : t, a = 0; null != (i = n[a]); a++) A || 1 !== i.nodeType || c.cleanData(at(i)), i.parentNode && (A && c.contains(i.ownerDocument, i) && ot(at(i, "script")), i.parentNode.removeChild(i));
		return t
	}

	c.extend({
		htmlPrefilter: function (t) {
			return t.replace(_t, "<$1></$2>")
		}, clone: function (t, e, A) {
			var i, n, a, o, s, r = c.contains(t.ownerDocument, t);
			if (l.html5Clone || c.isXMLDoc(t) || !mt.test("<" + t.nodeName + ">") ? a = t.cloneNode(!0) : (Ct.innerHTML = t.outerHTML, Ct.removeChild(a = Ct.firstChild)), !(l.noCloneEvent && l.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || c.isXMLDoc(t))) for (i = at(a), s = at(t), o = 0; null != (n = s[o]); ++o) i[o] && bt(n, i[o]);
			if (e) if (A) for (s = s || at(t), i = i || at(a), o = 0; null != (n = s[o]); o++) xt(n, i[o]); else xt(t, a);
			return (i = at(a, "script")).length > 0 && ot(i, !r && at(t, "script")), i = s = n = null, a
		}, cleanData: function (t, e) {
			for (var i, n, a, o, s = 0, r = c.expando, g = c.cache, h = l.attributes, u = c.event.special; null != (i = t[s]); s++) if ((e || F(i)) && (o = (a = i[r]) && g[a])) {
				if (o.events) for (n in o.events) u[n] ? c.event.remove(i, n) : c.removeEvent(i, n, o.handle);
				g[a] && (delete g[a], h || void 0 === i.removeAttribute ? i[r] = void 0 : i.removeAttribute(r), A.push(a))
			}
		}
	}), c.fn.extend({
		domManip: St, detach: function (t) {
			return Ht(this, t, !0)
		}, remove: function (t) {
			return Ht(this, t)
		}, text: function (t) {
			return X(this, (function (t) {
				return void 0 === t ? c.text(this) : this.empty().append((this[0] && this[0].ownerDocument || i).createTextNode(t))
			}), null, t, arguments.length)
		}, append: function () {
			return St(this, arguments, (function (t) {
				1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Tt(this, t).appendChild(t)
			}))
		}, prepend: function () {
			return St(this, arguments, (function (t) {
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var e = Tt(this, t);
					e.insertBefore(t, e.firstChild)
				}
			}))
		}, before: function () {
			return St(this, arguments, (function (t) {
				this.parentNode && this.parentNode.insertBefore(t, this)
			}))
		}, after: function () {
			return St(this, arguments, (function (t) {
				this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
			}))
		}, empty: function () {
			for (var t, e = 0; null != (t = this[e]); e++) {
				for (1 === t.nodeType && c.cleanData(at(t, !1)); t.firstChild;) t.removeChild(t.firstChild);
				t.options && c.nodeName(t, "select") && (t.options.length = 0)
			}
			return this
		}, clone: function (t, e) {
			return t = null != t && t, e = null == e ? t : e, this.map((function () {
				return c.clone(this, t, e)
			}))
		}, html: function (t) {
			return X(this, (function (t) {
				var e = this[0] || {}, A = 0, i = this.length;
				if (void 0 === t) return 1 === e.nodeType ? e.innerHTML.replace(Lt, "") : void 0;
				if ("string" == typeof t && !vt.test(t) && (l.htmlSerialize || !mt.test(t)) && (l.leadingWhitespace || !et.test(t)) && !nt[(Z.exec(t) || ["", ""])[1].toLowerCase()]) {
					t = c.htmlPrefilter(t);
					try {
						for (; A < i; A++) 1 === (e = this[A] || {}).nodeType && (c.cleanData(at(e, !1)), e.innerHTML = t);
						e = 0
					} catch (t) {
					}
				}
				e && this.empty().append(t)
			}), null, t, arguments.length)
		}, replaceWith: function () {
			var t = [];
			return St(this, arguments, (function (e) {
				var A = this.parentNode;
				c.inArray(this, t) < 0 && (c.cleanData(at(this)), A && A.replaceChild(e, this))
			}), t)
		}
	}), c.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, (function (t, e) {
		c.fn[t] = function (t) {
			for (var A, i = 0, n = [], a = c(t), s = a.length - 1; i <= s; i++) A = i === s ? this : this.clone(!0), c(a[i])[e](A), o.apply(n, A.get());
			return this.pushStack(n)
		}
	}));
	var Dt, Ft = {HTML: "block", BODY: "block"};

	function jt(t, e) {
		var A = c(e.createElement(t)).appendTo(e.body), i = c.css(A[0], "display");
		return A.detach(), i
	}

	function Mt(t) {
		var e = i, A = Ft[t];
		return A || ("none" !== (A = jt(t, e)) && A || ((e = ((Dt = (Dt || c("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement))[0].contentWindow || Dt[0].contentDocument).document).write(), e.close(), A = jt(t, e), Dt.detach()), Ft[t] = A), A
	}

	var kt = /^margin/, Gt = new RegExp("^(" + N + ")(?!px)[a-z%]+$", "i"), Rt = function (t, e, A, i) {
		var n, a, o = {};
		for (a in e) o[a] = t.style[a], t.style[a] = e[a];
		for (a in n = A.apply(t, i || []), e) t.style[a] = o[a];
		return n
	}, Ot = i.documentElement;
	!function () {
		var e, A, n, a, o, s, r = i.createElement("div"), g = i.createElement("div");

		function h() {
			var h, l, c = i.documentElement;
			c.appendChild(r), g.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", e = n = s = !1, A = o = !0, t.getComputedStyle && (l = t.getComputedStyle(g), e = "1%" !== (l || {}).top, s = "2px" === (l || {}).marginLeft, n = "4px" === (l || {width: "4px"}).width, g.style.marginRight = "50%", A = "4px" === (l || {marginRight: "4px"}).marginRight, (h = g.appendChild(i.createElement("div"))).style.cssText = g.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", h.style.marginRight = h.style.width = "0", g.style.width = "1px", o = !parseFloat((t.getComputedStyle(h) || {}).marginRight), g.removeChild(h)), g.style.display = "none", (a = 0 === g.getClientRects().length) && (g.style.display = "", g.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", g.childNodes[0].style.borderCollapse = "separate", (h = g.getElementsByTagName("td"))[0].style.cssText = "margin:0;border:0;padding:0;display:none", (a = 0 === h[0].offsetHeight) && (h[0].style.display = "", h[1].style.display = "none", a = 0 === h[0].offsetHeight)), c.removeChild(r)
		}

		g.style && (g.style.cssText = "float:left;opacity:.5", l.opacity = "0.5" === g.style.opacity, l.cssFloat = !!g.style.cssFloat, g.style.backgroundClip = "content-box", g.cloneNode(!0).style.backgroundClip = "", l.clearCloneStyle = "content-box" === g.style.backgroundClip, (r = i.createElement("div")).style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", g.innerHTML = "", r.appendChild(g), l.boxSizing = "" === g.style.boxSizing || "" === g.style.MozBoxSizing || "" === g.style.WebkitBoxSizing, c.extend(l, {
			reliableHiddenOffsets: function () {
				return null == e && h(), a
			}, boxSizingReliable: function () {
				return null == e && h(), n
			}, pixelMarginRight: function () {
				return null == e && h(), A
			}, pixelPosition: function () {
				return null == e && h(), e
			}, reliableMarginRight: function () {
				return null == e && h(), o
			}, reliableMarginLeft: function () {
				return null == e && h(), s
			}
		}))
	}();
	var Nt, Ut, zt = /^(top|right|bottom|left)$/;

	function Jt(t, e) {
		return {
			get: function () {
				if (!t()) return (this.get = e).apply(this, arguments);
				delete this.get
			}
		}
	}

	t.getComputedStyle ? (Nt = function (e) {
		var A = e.ownerDocument.defaultView;
		return A && A.opener || (A = t), A.getComputedStyle(e)
	}, Ut = function (t, e, A) {
		var i, n, a, o, s = t.style;
		return "" !== (o = (A = A || Nt(t)) ? A.getPropertyValue(e) || A[e] : void 0) && void 0 !== o || c.contains(t.ownerDocument, t) || (o = c.style(t, e)), A && !l.pixelMarginRight() && Gt.test(o) && kt.test(e) && (i = s.width, n = s.minWidth, a = s.maxWidth, s.minWidth = s.maxWidth = s.width = o, o = A.width, s.width = i, s.minWidth = n, s.maxWidth = a), void 0 === o ? o : o + ""
	}) : Ot.currentStyle && (Nt = function (t) {
		return t.currentStyle
	}, Ut = function (t, e, A) {
		var i, n, a, o, s = t.style;
		return null == (o = (A = A || Nt(t)) ? A[e] : void 0) && s && s[e] && (o = s[e]), Gt.test(o) && !zt.test(e) && (i = s.left, (a = (n = t.runtimeStyle) && n.left) && (n.left = t.currentStyle.left), s.left = "fontSize" === e ? "1em" : o, o = s.pixelLeft + "px", s.left = i, a && (n.left = a)), void 0 === o ? o : o + "" || "auto"
	});
	var qt = /alpha\([^)]*\)/i, Wt = /opacity\s*=\s*([^)]*)/i, $t = /^(none|table(?!-c[ea]).+)/,
		Yt = new RegExp("^(" + N + ")(.*)$", "i"), Xt = {position: "absolute", visibility: "hidden", display: "block"},
		Vt = {letterSpacing: "0", fontWeight: "400"}, Zt = ["Webkit", "O", "Moz", "ms"],
		te = i.createElement("div").style;

	function ee(t) {
		if (t in te) return t;
		for (var e = t.charAt(0).toUpperCase() + t.slice(1), A = Zt.length; A--;) if ((t = Zt[A] + e) in te) return t
	}

	function Ae(t, e) {
		for (var A, i, n, a = [], o = 0, s = t.length; o < s; o++) (i = t[o]).style && (a[o] = c._data(i, "olddisplay"), A = i.style.display, e ? (a[o] || "none" !== A || (i.style.display = ""), "" === i.style.display && J(i) && (a[o] = c._data(i, "olddisplay", Mt(i.nodeName)))) : (n = J(i), (A && "none" !== A || !n) && c._data(i, "olddisplay", n ? A : c.css(i, "display"))));
		for (o = 0; o < s; o++) (i = t[o]).style && (e && "none" !== i.style.display && "" !== i.style.display || (i.style.display = e ? a[o] || "" : "none"));
		return t
	}

	function ie(t, e, A) {
		var i = Yt.exec(e);
		return i ? Math.max(0, i[1] - (A || 0)) + (i[2] || "px") : e
	}

	function ne(t, e, A, i, n) {
		for (var a = A === (i ? "border" : "content") ? 4 : "width" === e ? 1 : 0, o = 0; a < 4; a += 2) "margin" === A && (o += c.css(t, A + z[a], !0, n)), i ? ("content" === A && (o -= c.css(t, "padding" + z[a], !0, n)), "margin" !== A && (o -= c.css(t, "border" + z[a] + "Width", !0, n))) : (o += c.css(t, "padding" + z[a], !0, n), "padding" !== A && (o += c.css(t, "border" + z[a] + "Width", !0, n)));
		return o
	}

	function ae(t, e, A) {
		var i = !0, n = "width" === e ? t.offsetWidth : t.offsetHeight, a = Nt(t),
			o = l.boxSizing && "border-box" === c.css(t, "boxSizing", !1, a);
		if (n <= 0 || null == n) {
			if (((n = Ut(t, e, a)) < 0 || null == n) && (n = t.style[e]), Gt.test(n)) return n;
			i = o && (l.boxSizingReliable() || n === t.style[e]), n = parseFloat(n) || 0
		}
		return n + ne(t, e, A || (o ? "border" : "content"), i, a) + "px"
	}

	function oe(t, e, A, i, n) {
		return new oe.prototype.init(t, e, A, i, n)
	}

	c.extend({
		cssHooks: {
			opacity: {
				get: function (t, e) {
					if (e) {
						var A = Ut(t, "opacity");
						return "" === A ? "1" : A
					}
				}
			}
		},
		cssNumber: {
			animationIterationCount: !0,
			columnCount: !0,
			fillOpacity: !0,
			flexGrow: !0,
			flexShrink: !0,
			fontWeight: !0,
			lineHeight: !0,
			opacity: !0,
			order: !0,
			orphans: !0,
			widows: !0,
			zIndex: !0,
			zoom: !0
		},
		cssProps: {float: l.cssFloat ? "cssFloat" : "styleFloat"},
		style: function (t, e, A, i) {
			if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
				var n, a, o, s = c.camelCase(e), r = t.style;
				if (e = c.cssProps[s] || (c.cssProps[s] = ee(s) || s), o = c.cssHooks[e] || c.cssHooks[s], void 0 === A) return o && "get" in o && void 0 !== (n = o.get(t, !1, i)) ? n : r[e];
				if (!("string" === (a = typeof A) && (n = U.exec(A)) && n[1] && (A = q(t, e, n), a = "number"), null == A || A != A || ("number" === a && (A += n && n[3] || (c.cssNumber[s] ? "" : "px")), l.clearCloneStyle || "" !== A || 0 !== e.indexOf("background") || (r[e] = "inherit"), o && "set" in o && void 0 === (A = o.set(t, A, i))))) try {
					r[e] = A
				} catch (t) {
				}
			}
		},
		css: function (t, e, A, i) {
			var n, a, o, s = c.camelCase(e);
			return e = c.cssProps[s] || (c.cssProps[s] = ee(s) || s), (o = c.cssHooks[e] || c.cssHooks[s]) && "get" in o && (a = o.get(t, !0, A)), void 0 === a && (a = Ut(t, e, i)), "normal" === a && e in Vt && (a = Vt[e]), "" === A || A ? (n = parseFloat(a), !0 === A || isFinite(n) ? n || 0 : a) : a
		}
	}), c.each(["height", "width"], (function (t, e) {
		c.cssHooks[e] = {
			get: function (t, A, i) {
				if (A) return $t.test(c.css(t, "display")) && 0 === t.offsetWidth ? Rt(t, Xt, (function () {
					return ae(t, e, i)
				})) : ae(t, e, i)
			}, set: function (t, A, i) {
				var n = i && Nt(t);
				return ie(0, A, i ? ne(t, e, i, l.boxSizing && "border-box" === c.css(t, "boxSizing", !1, n), n) : 0)
			}
		}
	})), l.opacity || (c.cssHooks.opacity = {
		get: function (t, e) {
			return Wt.test((e && t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : e ? "1" : ""
		}, set: function (t, e) {
			var A = t.style, i = t.currentStyle, n = c.isNumeric(e) ? "alpha(opacity=" + 100 * e + ")" : "",
				a = i && i.filter || A.filter || "";
			A.zoom = 1, (e >= 1 || "" === e) && "" === c.trim(a.replace(qt, "")) && A.removeAttribute && (A.removeAttribute("filter"), "" === e || i && !i.filter) || (A.filter = qt.test(a) ? a.replace(qt, n) : a + " " + n)
		}
	}), c.cssHooks.marginRight = Jt(l.reliableMarginRight, (function (t, e) {
		if (e) return Rt(t, {display: "inline-block"}, Ut, [t, "marginRight"])
	})), c.cssHooks.marginLeft = Jt(l.reliableMarginLeft, (function (t, e) {
		if (e) return (parseFloat(Ut(t, "marginLeft")) || (c.contains(t.ownerDocument, t) ? t.getBoundingClientRect().left - Rt(t, {marginLeft: 0}, (function () {
			return t.getBoundingClientRect().left
		})) : 0)) + "px"
	})), c.each({margin: "", padding: "", border: "Width"}, (function (t, e) {
		c.cssHooks[t + e] = {
			expand: function (A) {
				for (var i = 0, n = {}, a = "string" == typeof A ? A.split(" ") : [A]; i < 4; i++) n[t + z[i] + e] = a[i] || a[i - 2] || a[0];
				return n
			}
		}, kt.test(t) || (c.cssHooks[t + e].set = ie)
	})), c.fn.extend({
		css: function (t, e) {
			return X(this, (function (t, e, A) {
				var i, n, a = {}, o = 0;
				if (c.isArray(e)) {
					for (i = Nt(t), n = e.length; o < n; o++) a[e[o]] = c.css(t, e[o], !1, i);
					return a
				}
				return void 0 !== A ? c.style(t, e, A) : c.css(t, e)
			}), t, e, arguments.length > 1)
		}, show: function () {
			return Ae(this, !0)
		}, hide: function () {
			return Ae(this)
		}, toggle: function (t) {
			return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each((function () {
				J(this) ? c(this).show() : c(this).hide()
			}))
		}
	}), c.Tween = oe, oe.prototype = {
		constructor: oe, init: function (t, e, A, i, n, a) {
			this.elem = t, this.prop = A, this.easing = n || c.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = i, this.unit = a || (c.cssNumber[A] ? "" : "px")
		}, cur: function () {
			var t = oe.propHooks[this.prop];
			return t && t.get ? t.get(this) : oe.propHooks._default.get(this)
		}, run: function (t) {
			var e, A = oe.propHooks[this.prop];
			return this.options.duration ? this.pos = e = c.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), A && A.set ? A.set(this) : oe.propHooks._default.set(this), this
		}
	}, oe.prototype.init.prototype = oe.prototype, oe.propHooks = {
		_default: {
			get: function (t) {
				var e;
				return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = c.css(t.elem, t.prop, "")) && "auto" !== e ? e : 0
			}, set: function (t) {
				c.fx.step[t.prop] ? c.fx.step[t.prop](t) : 1 !== t.elem.nodeType || null == t.elem.style[c.cssProps[t.prop]] && !c.cssHooks[t.prop] ? t.elem[t.prop] = t.now : c.style(t.elem, t.prop, t.now + t.unit)
			}
		}
	}, oe.propHooks.scrollTop = oe.propHooks.scrollLeft = {
		set: function (t) {
			t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
		}
	}, c.easing = {
		linear: function (t) {
			return t
		}, swing: function (t) {
			return .5 - Math.cos(t * Math.PI) / 2
		}, _default: "swing"
	}, c.fx = oe.prototype.init, c.fx.step = {};
	var se, re, ge = /^(?:toggle|show|hide)$/, he = /queueHooks$/;

	function le() {
		return t.setTimeout((function () {
			se = void 0
		})), se = c.now()
	}

	function ce(t, e) {
		var A, i = {height: t}, n = 0;
		for (e = e ? 1 : 0; n < 4; n += 2 - e) i["margin" + (A = z[n])] = i["padding" + A] = t;
		return e && (i.opacity = i.width = t), i
	}

	function ue(t, e, A) {
		for (var i, n = (de.tweeners[e] || []).concat(de.tweeners["*"]), a = 0, o = n.length; a < o; a++) if (i = n[a].call(A, e, t)) return i
	}

	function de(t, e, A) {
		var i, n, a = 0, o = de.prefilters.length, s = c.Deferred().always((function () {
			delete r.elem
		})), r = function () {
			if (n) return !1;
			for (var e = se || le(), A = Math.max(0, g.startTime + g.duration - e), i = 1 - (A / g.duration || 0), a = 0, o = g.tweens.length; a < o; a++) g.tweens[a].run(i);
			return s.notifyWith(t, [g, i, A]), i < 1 && o ? A : (s.resolveWith(t, [g]), !1)
		}, g = s.promise({
			elem: t,
			props: c.extend({}, e),
			opts: c.extend(!0, {specialEasing: {}, easing: c.easing._default}, A),
			originalProperties: e,
			originalOptions: A,
			startTime: se || le(),
			duration: A.duration,
			tweens: [],
			createTween: function (e, A) {
				var i = c.Tween(t, g.opts, e, A, g.opts.specialEasing[e] || g.opts.easing);
				return g.tweens.push(i), i
			},
			stop: function (e) {
				var A = 0, i = e ? g.tweens.length : 0;
				if (n) return this;
				for (n = !0; A < i; A++) g.tweens[A].run(1);
				return e ? (s.notifyWith(t, [g, 1, 0]), s.resolveWith(t, [g, e])) : s.rejectWith(t, [g, e]), this
			}
		}), h = g.props;
		for (!function (t, e) {
			var A, i, n, a, o;
			for (A in t) if (n = e[i = c.camelCase(A)], a = t[A], c.isArray(a) && (n = a[1], a = t[A] = a[0]), A !== i && (t[i] = a, delete t[A]), (o = c.cssHooks[i]) && "expand" in o) for (A in a = o.expand(a), delete t[i], a) A in t || (t[A] = a[A], e[A] = n); else e[i] = n
		}(h, g.opts.specialEasing); a < o; a++) if (i = de.prefilters[a].call(g, t, h, g.opts)) return c.isFunction(i.stop) && (c._queueHooks(g.elem, g.opts.queue).stop = c.proxy(i.stop, i)), i;
		return c.map(h, ue, g), c.isFunction(g.opts.start) && g.opts.start.call(t, g), c.fx.timer(c.extend(r, {
			elem: t,
			anim: g,
			queue: g.opts.queue
		})), g.progress(g.opts.progress).done(g.opts.done, g.opts.complete).fail(g.opts.fail).always(g.opts.always)
	}

	c.Animation = c.extend(de, {
		tweeners: {
			"*": [function (t, e) {
				var A = this.createTween(t, e);
				return q(A.elem, t, U.exec(e), A), A
			}]
		}, tweener: function (t, e) {
			c.isFunction(t) ? (e = t, t = ["*"]) : t = t.match(b);
			for (var A, i = 0, n = t.length; i < n; i++) A = t[i], de.tweeners[A] = de.tweeners[A] || [], de.tweeners[A].unshift(e)
		}, prefilters: [function (t, e, A) {
			var i, n, a, o, s, r, g, h = this, u = {}, d = t.style, p = t.nodeType && J(t), Q = c._data(t, "fxshow");
			for (i in A.queue || (null == (s = c._queueHooks(t, "fx")).unqueued && (s.unqueued = 0, r = s.empty.fire, s.empty.fire = function () {
				s.unqueued || r()
			}), s.unqueued++, h.always((function () {
				h.always((function () {
					s.unqueued--, c.queue(t, "fx").length || s.empty.fire()
				}))
			}))), 1 === t.nodeType && ("height" in e || "width" in e) && (A.overflow = [d.overflow, d.overflowX, d.overflowY], "inline" === ("none" === (g = c.css(t, "display")) ? c._data(t, "olddisplay") || Mt(t.nodeName) : g) && "none" === c.css(t, "float") && (l.inlineBlockNeedsLayout && "inline" !== Mt(t.nodeName) ? d.zoom = 1 : d.display = "inline-block")), A.overflow && (d.overflow = "hidden", l.shrinkWrapBlocks() || h.always((function () {
				d.overflow = A.overflow[0], d.overflowX = A.overflow[1], d.overflowY = A.overflow[2]
			}))), e) if (n = e[i], ge.exec(n)) {
				if (delete e[i], a = a || "toggle" === n, n === (p ? "hide" : "show")) {
					if ("show" !== n || !Q || void 0 === Q[i]) continue;
					p = !0
				}
				u[i] = Q && Q[i] || c.style(t, i)
			} else g = void 0;
			if (c.isEmptyObject(u)) "inline" === ("none" === g ? Mt(t.nodeName) : g) && (d.display = g); else for (i in Q ? "hidden" in Q && (p = Q.hidden) : Q = c._data(t, "fxshow", {}), a && (Q.hidden = !p), p ? c(t).show() : h.done((function () {
				c(t).hide()
			})), h.done((function () {
				var e;
				for (e in c._removeData(t, "fxshow"), u) c.style(t, e, u[e])
			})), u) o = ue(p ? Q[i] : 0, i, h), i in Q || (Q[i] = o.start, p && (o.end = o.start, o.start = "width" === i || "height" === i ? 1 : 0))
		}], prefilter: function (t, e) {
			e ? de.prefilters.unshift(t) : de.prefilters.push(t)
		}
	}), c.speed = function (t, e, A) {
		var i = t && "object" == typeof t ? c.extend({}, t) : {
			complete: A || !A && e || c.isFunction(t) && t,
			duration: t,
			easing: A && e || e && !c.isFunction(e) && e
		};
		return i.duration = c.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in c.fx.speeds ? c.fx.speeds[i.duration] : c.fx.speeds._default, null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function () {
			c.isFunction(i.old) && i.old.call(this), i.queue && c.dequeue(this, i.queue)
		}, i
	}, c.fn.extend({
		fadeTo: function (t, e, A, i) {
			return this.filter(J).css("opacity", 0).show().end().animate({opacity: e}, t, A, i)
		}, animate: function (t, e, A, i) {
			var n = c.isEmptyObject(t), a = c.speed(e, A, i), o = function () {
				var e = de(this, c.extend({}, t), a);
				(n || c._data(this, "finish")) && e.stop(!0)
			};
			return o.finish = o, n || !1 === a.queue ? this.each(o) : this.queue(a.queue, o)
		}, stop: function (t, e, A) {
			var i = function (t) {
				var e = t.stop;
				delete t.stop, e(A)
			};
			return "string" != typeof t && (A = e, e = t, t = void 0), e && !1 !== t && this.queue(t || "fx", []), this.each((function () {
				var e = !0, n = null != t && t + "queueHooks", a = c.timers, o = c._data(this);
				if (n) o[n] && o[n].stop && i(o[n]); else for (n in o) o[n] && o[n].stop && he.test(n) && i(o[n]);
				for (n = a.length; n--;) a[n].elem !== this || null != t && a[n].queue !== t || (a[n].anim.stop(A), e = !1, a.splice(n, 1));
				!e && A || c.dequeue(this, t)
			}))
		}, finish: function (t) {
			return !1 !== t && (t = t || "fx"), this.each((function () {
				var e, A = c._data(this), i = A[t + "queue"], n = A[t + "queueHooks"], a = c.timers,
					o = i ? i.length : 0;
				for (A.finish = !0, c.queue(this, t, []), n && n.stop && n.stop.call(this, !0), e = a.length; e--;) a[e].elem === this && a[e].queue === t && (a[e].anim.stop(!0), a.splice(e, 1));
				for (e = 0; e < o; e++) i[e] && i[e].finish && i[e].finish.call(this);
				delete A.finish
			}))
		}
	}), c.each(["toggle", "show", "hide"], (function (t, e) {
		var A = c.fn[e];
		c.fn[e] = function (t, i, n) {
			return null == t || "boolean" == typeof t ? A.apply(this, arguments) : this.animate(ce(e, !0), t, i, n)
		}
	})), c.each({
		slideDown: ce("show"),
		slideUp: ce("hide"),
		slideToggle: ce("toggle"),
		fadeIn: {opacity: "show"},
		fadeOut: {opacity: "hide"},
		fadeToggle: {opacity: "toggle"}
	}, (function (t, e) {
		c.fn[t] = function (t, A, i) {
			return this.animate(e, t, A, i)
		}
	})), c.timers = [], c.fx.tick = function () {
		var t, e = c.timers, A = 0;
		for (se = c.now(); A < e.length; A++) (t = e[A])() || e[A] !== t || e.splice(A--, 1);
		e.length || c.fx.stop(), se = void 0
	}, c.fx.timer = function (t) {
		c.timers.push(t), t() ? c.fx.start() : c.timers.pop()
	}, c.fx.interval = 13, c.fx.start = function () {
		re || (re = t.setInterval(c.fx.tick, c.fx.interval))
	}, c.fx.stop = function () {
		t.clearInterval(re), re = null
	}, c.fx.speeds = {slow: 600, fast: 200, _default: 400}, c.fn.delay = function (e, A) {
		return e = c.fx && c.fx.speeds[e] || e, A = A || "fx", this.queue(A, (function (A, i) {
			var n = t.setTimeout(A, e);
			i.stop = function () {
				t.clearTimeout(n)
			}
		}))
	}, function () {
		var t, e = i.createElement("input"), A = i.createElement("div"), n = i.createElement("select"),
			a = n.appendChild(i.createElement("option"));
		(A = i.createElement("div")).setAttribute("className", "t"), A.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", t = A.getElementsByTagName("a")[0], e.setAttribute("type", "checkbox"), A.appendChild(e), (t = A.getElementsByTagName("a")[0]).style.cssText = "top:1px", l.getSetAttribute = "t" !== A.className, l.style = /top/.test(t.getAttribute("style")), l.hrefNormalized = "/a" === t.getAttribute("href"), l.checkOn = !!e.value, l.optSelected = a.selected, l.enctype = !!i.createElement("form").enctype, n.disabled = !0, l.optDisabled = !a.disabled, (e = i.createElement("input")).setAttribute("value", ""), l.input = "" === e.getAttribute("value"), e.value = "t", e.setAttribute("type", "radio"), l.radioValue = "t" === e.value
	}();
	var pe = /\r/g, Qe = /[\x20\t\r\n\f]+/g;
	c.fn.extend({
		val: function (t) {
			var e, A, i, n = this[0];
			return arguments.length ? (i = c.isFunction(t), this.each((function (A) {
				var n;
				1 === this.nodeType && (null == (n = i ? t.call(this, A, c(this).val()) : t) ? n = "" : "number" == typeof n ? n += "" : c.isArray(n) && (n = c.map(n, (function (t) {
					return null == t ? "" : t + ""
				}))), (e = c.valHooks[this.type] || c.valHooks[this.nodeName.toLowerCase()]) && "set" in e && void 0 !== e.set(this, n, "value") || (this.value = n))
			}))) : n ? (e = c.valHooks[n.type] || c.valHooks[n.nodeName.toLowerCase()]) && "get" in e && void 0 !== (A = e.get(n, "value")) ? A : "string" == typeof (A = n.value) ? A.replace(pe, "") : null == A ? "" : A : void 0
		}
	}), c.extend({
		valHooks: {
			option: {
				get: function (t) {
					var e = c.find.attr(t, "value");
					return null != e ? e : c.trim(c.text(t)).replace(Qe, " ")
				}
			}, select: {
				get: function (t) {
					for (var e, A, i = t.options, n = t.selectedIndex, a = "select-one" === t.type || n < 0, o = a ? null : [], s = a ? n + 1 : i.length, r = n < 0 ? s : a ? n : 0; r < s; r++) if (((A = i[r]).selected || r === n) && (l.optDisabled ? !A.disabled : null === A.getAttribute("disabled")) && (!A.parentNode.disabled || !c.nodeName(A.parentNode, "optgroup"))) {
						if (e = c(A).val(), a) return e;
						o.push(e)
					}
					return o
				}, set: function (t, e) {
					for (var A, i, n = t.options, a = c.makeArray(e), o = n.length; o--;) if (i = n[o], c.inArray(c.valHooks.option.get(i), a) > -1) try {
						i.selected = A = !0
					} catch (t) {
						i.scrollHeight
					} else i.selected = !1;
					return A || (t.selectedIndex = -1), n
				}
			}
		}
	}), c.each(["radio", "checkbox"], (function () {
		c.valHooks[this] = {
			set: function (t, e) {
				if (c.isArray(e)) return t.checked = c.inArray(c(t).val(), e) > -1
			}
		}, l.checkOn || (c.valHooks[this].get = function (t) {
			return null === t.getAttribute("value") ? "on" : t.value
		})
	}));
	var Ie, fe, we = c.expr.attrHandle, Le = /^(?:checked|selected)$/i, me = l.getSetAttribute, _e = l.input;
	c.fn.extend({
		attr: function (t, e) {
			return X(this, c.attr, t, e, arguments.length > 1)
		}, removeAttr: function (t) {
			return this.each((function () {
				c.removeAttr(this, t)
			}))
		}
	}), c.extend({
		attr: function (t, e, A) {
			var i, n, a = t.nodeType;
			if (3 !== a && 8 !== a && 2 !== a) return void 0 === t.getAttribute ? c.prop(t, e, A) : (1 === a && c.isXMLDoc(t) || (e = e.toLowerCase(), n = c.attrHooks[e] || (c.expr.match.bool.test(e) ? fe : Ie)), void 0 !== A ? null === A ? void c.removeAttr(t, e) : n && "set" in n && void 0 !== (i = n.set(t, A, e)) ? i : (t.setAttribute(e, A + ""), A) : n && "get" in n && null !== (i = n.get(t, e)) ? i : null == (i = c.find.attr(t, e)) ? void 0 : i)
		}, attrHooks: {
			type: {
				set: function (t, e) {
					if (!l.radioValue && "radio" === e && c.nodeName(t, "input")) {
						var A = t.value;
						return t.setAttribute("type", e), A && (t.value = A), e
					}
				}
			}
		}, removeAttr: function (t, e) {
			var A, i, n = 0, a = e && e.match(b);
			if (a && 1 === t.nodeType) for (; A = a[n++];) i = c.propFix[A] || A, c.expr.match.bool.test(A) ? _e && me || !Le.test(A) ? t[i] = !1 : t[c.camelCase("default-" + A)] = t[i] = !1 : c.attr(t, A, ""), t.removeAttribute(me ? A : i)
		}
	}), fe = {
		set: function (t, e, A) {
			return !1 === e ? c.removeAttr(t, A) : _e && me || !Le.test(A) ? t.setAttribute(!me && c.propFix[A] || A, A) : t[c.camelCase("default-" + A)] = t[A] = !0, A
		}
	}, c.each(c.expr.match.bool.source.match(/\w+/g), (function (t, e) {
		var A = we[e] || c.find.attr;
		_e && me || !Le.test(e) ? we[e] = function (t, e, i) {
			var n, a;
			return i || (a = we[e], we[e] = n, n = null != A(t, e, i) ? e.toLowerCase() : null, we[e] = a), n
		} : we[e] = function (t, e, A) {
			if (!A) return t[c.camelCase("default-" + e)] ? e.toLowerCase() : null
		}
	})), _e && me || (c.attrHooks.value = {
		set: function (t, e, A) {
			if (!c.nodeName(t, "input")) return Ie && Ie.set(t, e, A);
			t.defaultValue = e
		}
	}), me || (Ie = {
		set: function (t, e, A) {
			var i = t.getAttributeNode(A);
			if (i || t.setAttributeNode(i = t.ownerDocument.createAttribute(A)), i.value = e += "", "value" === A || e === t.getAttribute(A)) return e
		}
	}, we.id = we.name = we.coords = function (t, e, A) {
		var i;
		if (!A) return (i = t.getAttributeNode(e)) && "" !== i.value ? i.value : null
	}, c.valHooks.button = {
		get: function (t, e) {
			var A = t.getAttributeNode(e);
			if (A && A.specified) return A.value
		}, set: Ie.set
	}, c.attrHooks.contenteditable = {
		set: function (t, e, A) {
			Ie.set(t, "" !== e && e, A)
		}
	}, c.each(["width", "height"], (function (t, e) {
		c.attrHooks[e] = {
			set: function (t, A) {
				if ("" === A) return t.setAttribute(e, "auto"), A
			}
		}
	}))), l.style || (c.attrHooks.style = {
		get: function (t) {
			return t.style.cssText || void 0
		}, set: function (t, e) {
			return t.style.cssText = e + ""
		}
	});
	var ve = /^(?:input|select|textarea|button|object)$/i, Ee = /^(?:a|area)$/i;
	c.fn.extend({
		prop: function (t, e) {
			return X(this, c.prop, t, e, arguments.length > 1)
		}, removeProp: function (t) {
			return t = c.propFix[t] || t, this.each((function () {
				try {
					this[t] = void 0, delete this[t]
				} catch (t) {
				}
			}))
		}
	}), c.extend({
		prop: function (t, e, A) {
			var i, n, a = t.nodeType;
			if (3 !== a && 8 !== a && 2 !== a) return 1 === a && c.isXMLDoc(t) || (e = c.propFix[e] || e, n = c.propHooks[e]), void 0 !== A ? n && "set" in n && void 0 !== (i = n.set(t, A, e)) ? i : t[e] = A : n && "get" in n && null !== (i = n.get(t, e)) ? i : t[e]
		}, propHooks: {
			tabIndex: {
				get: function (t) {
					var e = c.find.attr(t, "tabindex");
					return e ? parseInt(e, 10) : ve.test(t.nodeName) || Ee.test(t.nodeName) && t.href ? 0 : -1
				}
			}
		}, propFix: {for: "htmlFor", class: "className"}
	}), l.hrefNormalized || c.each(["href", "src"], (function (t, e) {
		c.propHooks[e] = {
			get: function (t) {
				return t.getAttribute(e, 4)
			}
		}
	})), l.optSelected || (c.propHooks.selected = {
		get: function (t) {
			var e = t.parentNode;
			return e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex), null
		}, set: function (t) {
			var e = t.parentNode;
			e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
		}
	}), c.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], (function () {
		c.propFix[this.toLowerCase()] = this
	})), l.enctype || (c.propFix.enctype = "encoding");
	var ye = /[\t\r\n\f]/g;

	function Pe(t) {
		return c.attr(t, "class") || ""
	}

	c.fn.extend({
		addClass: function (t) {
			var e, A, i, n, a, o, s, r = 0;
			if (c.isFunction(t)) return this.each((function (e) {
				c(this).addClass(t.call(this, e, Pe(this)))
			}));
			if ("string" == typeof t && t) for (e = t.match(b) || []; A = this[r++];) if (n = Pe(A), i = 1 === A.nodeType && (" " + n + " ").replace(ye, " ")) {
				for (o = 0; a = e[o++];) i.indexOf(" " + a + " ") < 0 && (i += a + " ");
				n !== (s = c.trim(i)) && c.attr(A, "class", s)
			}
			return this
		}, removeClass: function (t) {
			var e, A, i, n, a, o, s, r = 0;
			if (c.isFunction(t)) return this.each((function (e) {
				c(this).removeClass(t.call(this, e, Pe(this)))
			}));
			if (!arguments.length) return this.attr("class", "");
			if ("string" == typeof t && t) for (e = t.match(b) || []; A = this[r++];) if (n = Pe(A), i = 1 === A.nodeType && (" " + n + " ").replace(ye, " ")) {
				for (o = 0; a = e[o++];) for (; i.indexOf(" " + a + " ") > -1;) i = i.replace(" " + a + " ", " ");
				n !== (s = c.trim(i)) && c.attr(A, "class", s)
			}
			return this
		}, toggleClass: function (t, e) {
			var A = typeof t;
			return "boolean" == typeof e && "string" === A ? e ? this.addClass(t) : this.removeClass(t) : c.isFunction(t) ? this.each((function (A) {
				c(this).toggleClass(t.call(this, A, Pe(this), e), e)
			})) : this.each((function () {
				var e, i, n, a;
				if ("string" === A) for (i = 0, n = c(this), a = t.match(b) || []; e = a[i++];) n.hasClass(e) ? n.removeClass(e) : n.addClass(e); else void 0 !== t && "boolean" !== A || ((e = Pe(this)) && c._data(this, "__className__", e), c.attr(this, "class", e || !1 === t ? "" : c._data(this, "__className__") || ""))
			}))
		}, hasClass: function (t) {
			var e, A, i = 0;
			for (e = " " + t + " "; A = this[i++];) if (1 === A.nodeType && (" " + Pe(A) + " ").replace(ye, " ").indexOf(e) > -1) return !0;
			return !1
		}
	}), c.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), (function (t, e) {
		c.fn[e] = function (t, A) {
			return arguments.length > 0 ? this.on(e, null, t, A) : this.trigger(e)
		}
	})), c.fn.extend({
		hover: function (t, e) {
			return this.mouseenter(t).mouseleave(e || t)
		}
	});
	var Ce = t.location, Te = c.now(), Ke = /\?/,
		Be = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
	c.parseJSON = function (e) {
		if (t.JSON && t.JSON.parse) return t.JSON.parse(e + "");
		var A, i = null, n = c.trim(e + "");
		return n && !c.trim(n.replace(Be, (function (t, e, n, a) {
			return A && e && (i = 0), 0 === i ? t : (A = n || e, i += !a - !n, "")
		}))) ? Function("return " + n)() : c.error("Invalid JSON: " + e)
	}, c.parseXML = function (e) {
		var A;
		if (!e || "string" != typeof e) return null;
		try {
			t.DOMParser ? A = (new t.DOMParser).parseFromString(e, "text/xml") : ((A = new t.ActiveXObject("Microsoft.XMLDOM")).async = "false", A.loadXML(e))
		} catch (t) {
			A = void 0
		}
		return A && A.documentElement && !A.getElementsByTagName("parsererror").length || c.error("Invalid XML: " + e), A
	};
	var xe = /#.*$/, be = /([?&])_=[^&]*/, Se = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, He = /^(?:GET|HEAD)$/, De = /^\/\//,
		Fe = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, je = {}, Me = {}, ke = "*/".concat("*"),
		Ge = Ce.href, Re = Fe.exec(Ge.toLowerCase()) || [];

	function Oe(t) {
		return function (e, A) {
			"string" != typeof e && (A = e, e = "*");
			var i, n = 0, a = e.toLowerCase().match(b) || [];
			if (c.isFunction(A)) for (; i = a[n++];) "+" === i.charAt(0) ? (i = i.slice(1) || "*", (t[i] = t[i] || []).unshift(A)) : (t[i] = t[i] || []).push(A)
		}
	}

	function Ne(t, e, A, i) {
		var n = {}, a = t === Me;

		function o(s) {
			var r;
			return n[s] = !0, c.each(t[s] || [], (function (t, s) {
				var g = s(e, A, i);
				return "string" != typeof g || a || n[g] ? a ? !(r = g) : void 0 : (e.dataTypes.unshift(g), o(g), !1)
			})), r
		}

		return o(e.dataTypes[0]) || !n["*"] && o("*")
	}

	function Ue(t, e) {
		var A, i, n = c.ajaxSettings.flatOptions || {};
		for (i in e) void 0 !== e[i] && ((n[i] ? t : A || (A = {}))[i] = e[i]);
		return A && c.extend(!0, t, A), t
	}

	function ze(t) {
		return t.style && t.style.display || c.css(t, "display")
	}

	c.extend({
		active: 0,
		lastModified: {},
		etag: {},
		ajaxSettings: {
			url: Ge,
			type: "GET",
			isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Re[1]),
			global: !0,
			processData: !0,
			async: !0,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			accepts: {
				"*": ke,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},
			contents: {xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/},
			responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
			converters: {"* text": String, "text html": !0, "text json": c.parseJSON, "text xml": c.parseXML},
			flatOptions: {url: !0, context: !0}
		},
		ajaxSetup: function (t, e) {
			return e ? Ue(Ue(t, c.ajaxSettings), e) : Ue(c.ajaxSettings, t)
		},
		ajaxPrefilter: Oe(je),
		ajaxTransport: Oe(Me),
		ajax: function (e, A) {
			"object" == typeof e && (A = e, e = void 0), A = A || {};
			var i, n, a, o, s, r, g, h, l = c.ajaxSetup({}, A), u = l.context || l,
				d = l.context && (u.nodeType || u.jquery) ? c(u) : c.event, p = c.Deferred(),
				Q = c.Callbacks("once memory"), I = l.statusCode || {}, f = {}, w = {}, L = 0, m = "canceled", _ = {
					readyState: 0, getResponseHeader: function (t) {
						var e;
						if (2 === L) {
							if (!h) for (h = {}; e = Se.exec(o);) h[e[1].toLowerCase()] = e[2];
							e = h[t.toLowerCase()]
						}
						return null == e ? null : e
					}, getAllResponseHeaders: function () {
						return 2 === L ? o : null
					}, setRequestHeader: function (t, e) {
						var A = t.toLowerCase();
						return L || (t = w[A] = w[A] || t, f[t] = e), this
					}, overrideMimeType: function (t) {
						return L || (l.mimeType = t), this
					}, statusCode: function (t) {
						var e;
						if (t) if (L < 2) for (e in t) I[e] = [I[e], t[e]]; else _.always(t[_.status]);
						return this
					}, abort: function (t) {
						var e = t || m;
						return g && g.abort(e), v(0, e), this
					}
				};
			if (p.promise(_).complete = Q.add, _.success = _.done, _.error = _.fail, l.url = ((e || l.url || Ge) + "").replace(xe, "").replace(De, Re[1] + "//"), l.type = A.method || A.type || l.method || l.type, l.dataTypes = c.trim(l.dataType || "*").toLowerCase().match(b) || [""], null == l.crossDomain && (i = Fe.exec(l.url.toLowerCase()), l.crossDomain = !(!i || i[1] === Re[1] && i[2] === Re[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (Re[3] || ("http:" === Re[1] ? "80" : "443")))), l.data && l.processData && "string" != typeof l.data && (l.data = c.param(l.data, l.traditional)), Ne(je, l, A, _), 2 === L) return _;
			for (n in (r = c.event && l.global) && 0 == c.active++ && c.event.trigger("ajaxStart"), l.type = l.type.toUpperCase(), l.hasContent = !He.test(l.type), a = l.url, l.hasContent || (l.data && (a = l.url += (Ke.test(a) ? "&" : "?") + l.data, delete l.data), !1 === l.cache && (l.url = be.test(a) ? a.replace(be, "$1_=" + Te++) : a + (Ke.test(a) ? "&" : "?") + "_=" + Te++)), l.ifModified && (c.lastModified[a] && _.setRequestHeader("If-Modified-Since", c.lastModified[a]), c.etag[a] && _.setRequestHeader("If-None-Match", c.etag[a])), (l.data && l.hasContent && !1 !== l.contentType || A.contentType) && _.setRequestHeader("Content-Type", l.contentType), _.setRequestHeader("Accept", l.dataTypes[0] && l.accepts[l.dataTypes[0]] ? l.accepts[l.dataTypes[0]] + ("*" !== l.dataTypes[0] ? ", " + ke + "; q=0.01" : "") : l.accepts["*"]), l.headers) _.setRequestHeader(n, l.headers[n]);
			if (l.beforeSend && (!1 === l.beforeSend.call(u, _, l) || 2 === L)) return _.abort();
			for (n in m = "abort", {success: 1, error: 1, complete: 1}) _[n](l[n]);
			if (g = Ne(Me, l, A, _)) {
				if (_.readyState = 1, r && d.trigger("ajaxSend", [_, l]), 2 === L) return _;
				l.async && l.timeout > 0 && (s = t.setTimeout((function () {
					_.abort("timeout")
				}), l.timeout));
				try {
					L = 1, g.send(f, v)
				} catch (t) {
					if (!(L < 2)) throw t;
					v(-1, t)
				}
			} else v(-1, "No Transport");

			function v(e, A, i, n) {
				var h, f, w, m, v, E = A;
				2 !== L && (L = 2, s && t.clearTimeout(s), g = void 0, o = n || "", _.readyState = e > 0 ? 4 : 0, h = e >= 200 && e < 300 || 304 === e, i && (m = function (t, e, A) {
					for (var i, n, a, o, s = t.contents, r = t.dataTypes; "*" === r[0];) r.shift(), void 0 === n && (n = t.mimeType || e.getResponseHeader("Content-Type"));
					if (n) for (o in s) if (s[o] && s[o].test(n)) {
						r.unshift(o);
						break
					}
					if (r[0] in A) a = r[0]; else {
						for (o in A) {
							if (!r[0] || t.converters[o + " " + r[0]]) {
								a = o;
								break
							}
							i || (i = o)
						}
						a = a || i
					}
					if (a) return a !== r[0] && r.unshift(a), A[a]
				}(l, _, i)), m = function (t, e, A, i) {
					var n, a, o, s, r, g = {}, h = t.dataTypes.slice();
					if (h[1]) for (o in t.converters) g[o.toLowerCase()] = t.converters[o];
					for (a = h.shift(); a;) if (t.responseFields[a] && (A[t.responseFields[a]] = e), !r && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), r = a, a = h.shift()) if ("*" === a) a = r; else if ("*" !== r && r !== a) {
						if (!(o = g[r + " " + a] || g["* " + a])) for (n in g) if ((s = n.split(" "))[1] === a && (o = g[r + " " + s[0]] || g["* " + s[0]])) {
							!0 === o ? o = g[n] : !0 !== g[n] && (a = s[0], h.unshift(s[1]));
							break
						}
						if (!0 !== o) if (o && t.throws) e = o(e); else try {
							e = o(e)
						} catch (t) {
							return {state: "parsererror", error: o ? t : "No conversion from " + r + " to " + a}
						}
					}
					return {state: "success", data: e}
				}(l, m, _, h), h ? (l.ifModified && ((v = _.getResponseHeader("Last-Modified")) && (c.lastModified[a] = v), (v = _.getResponseHeader("etag")) && (c.etag[a] = v)), 204 === e || "HEAD" === l.type ? E = "nocontent" : 304 === e ? E = "notmodified" : (E = m.state, f = m.data, h = !(w = m.error))) : (w = E, !e && E || (E = "error", e < 0 && (e = 0))), _.status = e, _.statusText = (A || E) + "", h ? p.resolveWith(u, [f, E, _]) : p.rejectWith(u, [_, E, w]), _.statusCode(I), I = void 0, r && d.trigger(h ? "ajaxSuccess" : "ajaxError", [_, l, h ? f : w]), Q.fireWith(u, [_, E]), r && (d.trigger("ajaxComplete", [_, l]), --c.active || c.event.trigger("ajaxStop")))
			}

			return _
		},
		getJSON: function (t, e, A) {
			return c.get(t, e, A, "json")
		},
		getScript: function (t, e) {
			return c.get(t, void 0, e, "script")
		}
	}), c.each(["get", "post"], (function (t, e) {
		c[e] = function (t, A, i, n) {
			return c.isFunction(A) && (n = n || i, i = A, A = void 0), c.ajax(c.extend({
				url: t,
				type: e,
				dataType: n,
				data: A,
				success: i
			}, c.isPlainObject(t) && t))
		}
	})), c._evalUrl = function (t) {
		return c.ajax({url: t, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, throws: !0})
	}, c.fn.extend({
		wrapAll: function (t) {
			if (c.isFunction(t)) return this.each((function (e) {
				c(this).wrapAll(t.call(this, e))
			}));
			if (this[0]) {
				var e = c(t, this[0].ownerDocument).eq(0).clone(!0);
				this[0].parentNode && e.insertBefore(this[0]), e.map((function () {
					for (var t = this; t.firstChild && 1 === t.firstChild.nodeType;) t = t.firstChild;
					return t
				})).append(this)
			}
			return this
		}, wrapInner: function (t) {
			return c.isFunction(t) ? this.each((function (e) {
				c(this).wrapInner(t.call(this, e))
			})) : this.each((function () {
				var e = c(this), A = e.contents();
				A.length ? A.wrapAll(t) : e.append(t)
			}))
		}, wrap: function (t) {
			var e = c.isFunction(t);
			return this.each((function (A) {
				c(this).wrapAll(e ? t.call(this, A) : t)
			}))
		}, unwrap: function () {
			return this.parent().each((function () {
				c.nodeName(this, "body") || c(this).replaceWith(this.childNodes)
			})).end()
		}
	}), c.expr.filters.hidden = function (t) {
		return l.reliableHiddenOffsets() ? t.offsetWidth <= 0 && t.offsetHeight <= 0 && !t.getClientRects().length : function (t) {
			if (!c.contains(t.ownerDocument || i, t)) return !0;
			for (; t && 1 === t.nodeType;) {
				if ("none" === ze(t) || "hidden" === t.type) return !0;
				t = t.parentNode
			}
			return !1
		}(t)
	}, c.expr.filters.visible = function (t) {
		return !c.expr.filters.hidden(t)
	};
	var Je = /%20/g, qe = /\[\]$/, We = /\r?\n/g, $e = /^(?:submit|button|image|reset|file)$/i,
		Ye = /^(?:input|select|textarea|keygen)/i;

	function Xe(t, e, A, i) {
		var n;
		if (c.isArray(e)) c.each(e, (function (e, n) {
			A || qe.test(t) ? i(t, n) : Xe(t + "[" + ("object" == typeof n && null != n ? e : "") + "]", n, A, i)
		})); else if (A || "object" !== c.type(e)) i(t, e); else for (n in e) Xe(t + "[" + n + "]", e[n], A, i)
	}

	c.param = function (t, e) {
		var A, i = [], n = function (t, e) {
			e = c.isFunction(e) ? e() : null == e ? "" : e, i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
		};
		if (void 0 === e && (e = c.ajaxSettings && c.ajaxSettings.traditional), c.isArray(t) || t.jquery && !c.isPlainObject(t)) c.each(t, (function () {
			n(this.name, this.value)
		})); else for (A in t) Xe(A, t[A], e, n);
		return i.join("&").replace(Je, "+")
	}, c.fn.extend({
		serialize: function () {
			return c.param(this.serializeArray())
		}, serializeArray: function () {
			return this.map((function () {
				var t = c.prop(this, "elements");
				return t ? c.makeArray(t) : this
			})).filter((function () {
				var t = this.type;
				return this.name && !c(this).is(":disabled") && Ye.test(this.nodeName) && !$e.test(t) && (this.checked || !V.test(t))
			})).map((function (t, e) {
				var A = c(this).val();
				return null == A ? null : c.isArray(A) ? c.map(A, (function (t) {
					return {name: e.name, value: t.replace(We, "\r\n")}
				})) : {name: e.name, value: A.replace(We, "\r\n")}
			})).get()
		}
	}), c.ajaxSettings.xhr = void 0 !== t.ActiveXObject ? function () {
		return this.isLocal ? AA() : i.documentMode > 8 ? eA() : /^(get|post|head|put|delete|options)$/i.test(this.type) && eA() || AA()
	} : eA;
	var Ve = 0, Ze = {}, tA = c.ajaxSettings.xhr();

	function eA() {
		try {
			return new t.XMLHttpRequest
		} catch (t) {
		}
	}

	function AA() {
		try {
			return new t.ActiveXObject("Microsoft.XMLHTTP")
		} catch (t) {
		}
	}

	t.attachEvent && t.attachEvent("onunload", (function () {
		for (var t in Ze) Ze[t](void 0, !0)
	})), l.cors = !!tA && "withCredentials" in tA, (tA = l.ajax = !!tA) && c.ajaxTransport((function (e) {
		var A;
		if (!e.crossDomain || l.cors) return {
			send: function (i, n) {
				var a, o = e.xhr(), s = ++Ve;
				if (o.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields) for (a in e.xhrFields) o[a] = e.xhrFields[a];
				for (a in e.mimeType && o.overrideMimeType && o.overrideMimeType(e.mimeType), e.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest"), i) void 0 !== i[a] && o.setRequestHeader(a, i[a] + "");
				o.send(e.hasContent && e.data || null), A = function (t, i) {
					var a, r, g;
					if (A && (i || 4 === o.readyState)) if (delete Ze[s], A = void 0, o.onreadystatechange = c.noop, i) 4 !== o.readyState && o.abort(); else {
						g = {}, a = o.status, "string" == typeof o.responseText && (g.text = o.responseText);
						try {
							r = o.statusText
						} catch (t) {
							r = ""
						}
						a || !e.isLocal || e.crossDomain ? 1223 === a && (a = 204) : a = g.text ? 200 : 404
					}
					g && n(a, r, g, o.getAllResponseHeaders())
				}, e.async ? 4 === o.readyState ? t.setTimeout(A) : o.onreadystatechange = Ze[s] = A : A()
			}, abort: function () {
				A && A(void 0, !0)
			}
		}
	})), c.ajaxSetup({
		accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
		contents: {script: /\b(?:java|ecma)script\b/},
		converters: {
			"text script": function (t) {
				return c.globalEval(t), t
			}
		}
	}), c.ajaxPrefilter("script", (function (t) {
		void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET", t.global = !1)
	})), c.ajaxTransport("script", (function (t) {
		if (t.crossDomain) {
			var e, A = i.head || c("head")[0] || i.documentElement;
			return {
				send: function (n, a) {
					(e = i.createElement("script")).async = !0, t.scriptCharset && (e.charset = t.scriptCharset), e.src = t.url, e.onload = e.onreadystatechange = function (t, A) {
						(A || !e.readyState || /loaded|complete/.test(e.readyState)) && (e.onload = e.onreadystatechange = null, e.parentNode && e.parentNode.removeChild(e), e = null, A || a(200, "success"))
					}, A.insertBefore(e, A.firstChild)
				}, abort: function () {
					e && e.onload(void 0, !0)
				}
			}
		}
	}));
	var iA = [], nA = /(=)\?(?=&|$)|\?\?/;
	c.ajaxSetup({
		jsonp: "callback", jsonpCallback: function () {
			var t = iA.pop() || c.expando + "_" + Te++;
			return this[t] = !0, t
		}
	}), c.ajaxPrefilter("json jsonp", (function (e, A, i) {
		var n, a, o,
			s = !1 !== e.jsonp && (nA.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && nA.test(e.data) && "data");
		if (s || "jsonp" === e.dataTypes[0]) return n = e.jsonpCallback = c.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace(nA, "$1" + n) : !1 !== e.jsonp && (e.url += (Ke.test(e.url) ? "&" : "?") + e.jsonp + "=" + n), e.converters["script json"] = function () {
			return o || c.error(n + " was not called"), o[0]
		}, e.dataTypes[0] = "json", a = t[n], t[n] = function () {
			o = arguments
		}, i.always((function () {
			void 0 === a ? c(t).removeProp(n) : t[n] = a, e[n] && (e.jsonpCallback = A.jsonpCallback, iA.push(n)), o && c.isFunction(a) && a(o[0]), o = a = void 0
		})), "script"
	})), c.parseHTML = function (t, e, A) {
		if (!t || "string" != typeof t) return null;
		"boolean" == typeof e && (A = e, e = !1), e = e || i;
		var n = _.exec(t), a = !A && [];
		return n ? [e.createElement(n[1])] : (n = ht([t], e, a), a && a.length && c(a).remove(), c.merge([], n.childNodes))
	};
	var aA = c.fn.load;

	function oA(t) {
		return c.isWindow(t) ? t : 9 === t.nodeType && (t.defaultView || t.parentWindow)
	}

	c.fn.load = function (t, e, A) {
		if ("string" != typeof t && aA) return aA.apply(this, arguments);
		var i, n, a, o = this, s = t.indexOf(" ");
		return s > -1 && (i = c.trim(t.slice(s, t.length)), t = t.slice(0, s)), c.isFunction(e) ? (A = e, e = void 0) : e && "object" == typeof e && (n = "POST"), o.length > 0 && c.ajax({
			url: t,
			type: n || "GET",
			dataType: "html",
			data: e
		}).done((function (t) {
			a = arguments, o.html(i ? c("<div>").append(c.parseHTML(t)).find(i) : t)
		})).always(A && function (t, e) {
			o.each((function () {
				A.apply(this, a || [t.responseText, e, t])
			}))
		}), this
	}, c.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], (function (t, e) {
		c.fn[e] = function (t) {
			return this.on(e, t)
		}
	})), c.expr.filters.animated = function (t) {
		return c.grep(c.timers, (function (e) {
			return t === e.elem
		})).length
	}, c.offset = {
		setOffset: function (t, e, A) {
			var i, n, a, o, s, r, g = c.css(t, "position"), h = c(t), l = {};
			"static" === g && (t.style.position = "relative"), s = h.offset(), a = c.css(t, "top"), r = c.css(t, "left"), ("absolute" === g || "fixed" === g) && c.inArray("auto", [a, r]) > -1 ? (o = (i = h.position()).top, n = i.left) : (o = parseFloat(a) || 0, n = parseFloat(r) || 0), c.isFunction(e) && (e = e.call(t, A, c.extend({}, s))), null != e.top && (l.top = e.top - s.top + o), null != e.left && (l.left = e.left - s.left + n), "using" in e ? e.using.call(t, l) : h.css(l)
		}
	}, c.fn.extend({
		offset: function (t) {
			if (arguments.length) return void 0 === t ? this : this.each((function (e) {
				c.offset.setOffset(this, t, e)
			}));
			var e, A, i = {top: 0, left: 0}, n = this[0], a = n && n.ownerDocument;
			return a ? (e = a.documentElement, c.contains(e, n) ? (void 0 !== n.getBoundingClientRect && (i = n.getBoundingClientRect()), A = oA(a), {
				top: i.top + (A.pageYOffset || e.scrollTop) - (e.clientTop || 0),
				left: i.left + (A.pageXOffset || e.scrollLeft) - (e.clientLeft || 0)
			}) : i) : void 0
		}, position: function () {
			if (this[0]) {
				var t, e, A = {top: 0, left: 0}, i = this[0];
				return "fixed" === c.css(i, "position") ? e = i.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), c.nodeName(t[0], "html") || (A = t.offset()), A.top += c.css(t[0], "borderTopWidth", !0), A.left += c.css(t[0], "borderLeftWidth", !0)), {
					top: e.top - A.top - c.css(i, "marginTop", !0),
					left: e.left - A.left - c.css(i, "marginLeft", !0)
				}
			}
		}, offsetParent: function () {
			return this.map((function () {
				for (var t = this.offsetParent; t && !c.nodeName(t, "html") && "static" === c.css(t, "position");) t = t.offsetParent;
				return t || Ot
			}))
		}
	}), c.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, (function (t, e) {
		var A = /Y/.test(e);
		c.fn[t] = function (i) {
			return X(this, (function (t, i, n) {
				var a = oA(t);
				if (void 0 === n) return a ? e in a ? a[e] : a.document.documentElement[i] : t[i];
				a ? a.scrollTo(A ? c(a).scrollLeft() : n, A ? n : c(a).scrollTop()) : t[i] = n
			}), t, i, arguments.length, null)
		}
	})), c.each(["top", "left"], (function (t, e) {
		c.cssHooks[e] = Jt(l.pixelPosition, (function (t, A) {
			if (A) return A = Ut(t, e), Gt.test(A) ? c(t).position()[e] + "px" : A
		}))
	})), c.each({Height: "height", Width: "width"}, (function (t, e) {
		c.each({padding: "inner" + t, content: e, "": "outer" + t}, (function (A, i) {
			c.fn[i] = function (i, n) {
				var a = arguments.length && (A || "boolean" != typeof i),
					o = A || (!0 === i || !0 === n ? "margin" : "border");
				return X(this, (function (e, A, i) {
					var n;
					return c.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (n = e.documentElement, Math.max(e.body["scroll" + t], n["scroll" + t], e.body["offset" + t], n["offset" + t], n["client" + t])) : void 0 === i ? c.css(e, A, o) : c.style(e, A, i, o)
				}), e, a ? i : void 0, a, null)
			}
		}))
	})), c.fn.extend({
		bind: function (t, e, A) {
			return this.on(t, null, e, A)
		}, unbind: function (t, e) {
			return this.off(t, null, e)
		}, delegate: function (t, e, A, i) {
			return this.on(e, t, A, i)
		}, undelegate: function (t, e, A) {
			return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", A)
		}
	}), c.fn.size = function () {
		return this.length
	}, c.fn.andSelf = c.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], (function () {
		return c
	}));
	var sA = t.jQuery, rA = t.$;
	return c.noConflict = function (e) {
		return t.$ === c && (t.$ = rA), e && t.jQuery === c && (t.jQuery = sA), c
	}, e || (t.jQuery = t.$ = c), c
})), function (t) {
	"use strict";
	"function" == typeof define && define.amd ? define(["jquery"], t) : "undefined" != typeof exports ? module.exports = t(require("jquery")) : t(jQuery)
}((function (t) {
	"use strict";
	var e = window.Slick || {};
	(e = function () {
		var e = 0;
		return function (A, i) {
			var n, a = this;
			a.defaults = {
				accessibility: !0,
				adaptiveHeight: !1,
				appendArrows: t(A),
				appendDots: t(A),
				arrows: !0,
				asNavFor: null,
				prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
				nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
				autoplay: !1,
				autoplaySpeed: 3e3,
				centerMode: !1,
				centerPadding: "50px",
				cssEase: "ease",
				customPaging: function (e, A) {
					return t('<button type="button" data-role="none" role="button" tabindex="0" />').text(A + 1)
				},
				dots: !1,
				dotsClass: "slick-dots",
				draggable: !0,
				easing: "linear",
				edgeFriction: .35,
				fade: !1,
				focusOnSelect: !1,
				infinite: !0,
				initialSlide: 0,
				lazyLoad: "ondemand",
				mobileFirst: !1,
				pauseOnHover: !0,
				pauseOnFocus: !0,
				pauseOnDotsHover: !1,
				respondTo: "window",
				responsive: null,
				rows: 1,
				rtl: !1,
				slide: "",
				slidesPerRow: 1,
				slidesToShow: 1,
				slidesToScroll: 1,
				speed: 500,
				swipe: !0,
				swipeToSlide: !1,
				touchMove: !0,
				touchThreshold: 5,
				useCSS: !0,
				useTransform: !0,
				variableWidth: !1,
				vertical: !1,
				verticalSwiping: !1,
				waitForAnimate: !0,
				zIndex: 1e3
			}, a.initials = {
				animating: !1,
				dragging: !1,
				autoPlayTimer: null,
				currentDirection: 0,
				currentLeft: null,
				currentSlide: 0,
				direction: 1,
				$dots: null,
				listWidth: null,
				listHeight: null,
				loadIndex: 0,
				$nextArrow: null,
				$prevArrow: null,
				slideCount: null,
				slideWidth: null,
				$slideTrack: null,
				$slides: null,
				sliding: !1,
				slideOffset: 0,
				swipeLeft: null,
				$list: null,
				touchObject: {},
				transformsEnabled: !1,
				unslicked: !1
			}, t.extend(a, a.initials), a.activeBreakpoint = null, a.animType = null, a.animProp = null, a.breakpoints = [], a.breakpointSettings = [], a.cssTransitions = !1, a.focussed = !1, a.interrupted = !1, a.hidden = "hidden", a.paused = !0, a.positionProp = null, a.respondTo = null, a.rowCount = 1, a.shouldClick = !0, a.$slider = t(A), a.$slidesCache = null, a.transformType = null, a.transitionType = null, a.visibilityChange = "visibilitychange", a.windowWidth = 0, a.windowTimer = null, n = t(A).data("slick") || {}, a.options = t.extend({}, a.defaults, i, n), a.currentSlide = a.options.initialSlide, a.originalSettings = a.options, void 0 !== document.mozHidden ? (a.hidden = "mozHidden", a.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (a.hidden = "webkitHidden", a.visibilityChange = "webkitvisibilitychange"), a.autoPlay = t.proxy(a.autoPlay, a), a.autoPlayClear = t.proxy(a.autoPlayClear, a), a.autoPlayIterator = t.proxy(a.autoPlayIterator, a), a.changeSlide = t.proxy(a.changeSlide, a), a.clickHandler = t.proxy(a.clickHandler, a), a.selectHandler = t.proxy(a.selectHandler, a), a.setPosition = t.proxy(a.setPosition, a), a.swipeHandler = t.proxy(a.swipeHandler, a), a.dragHandler = t.proxy(a.dragHandler, a), a.keyHandler = t.proxy(a.keyHandler, a), a.instanceUid = e++, a.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, a.registerBreakpoints(), a.init(!0)
		}
	}()).prototype.activateADA = function () {
		this.$slideTrack.find(".slick-active").attr({"aria-hidden": "false"}).find("a, input, button, select").attr({tabindex: "0"})
	}, e.prototype.addSlide = e.prototype.slickAdd = function (e, A, i) {
		var n = this;
		if ("boolean" == typeof A) i = A, A = null; else if (0 > A || A >= n.slideCount) return !1;
		n.unload(), "number" == typeof A ? 0 === A && 0 === n.$slides.length ? t(e).appendTo(n.$slideTrack) : i ? t(e).insertBefore(n.$slides.eq(A)) : t(e).insertAfter(n.$slides.eq(A)) : !0 === i ? t(e).prependTo(n.$slideTrack) : t(e).appendTo(n.$slideTrack), n.$slides = n.$slideTrack.children(this.options.slide), n.$slideTrack.children(this.options.slide).detach(), n.$slideTrack.append(n.$slides), n.$slides.each((function (e, A) {
			t(A).attr("data-slick-index", e)
		})), n.$slidesCache = n.$slides, n.reinit()
	}, e.prototype.animateHeight = function () {
		var t = this;
		if (1 === t.options.slidesToShow && !0 === t.options.adaptiveHeight && !1 === t.options.vertical) {
			var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
			t.$list.animate({height: e}, t.options.speed)
		}
	}, e.prototype.animateSlide = function (e, A) {
		var i = {}, n = this;
		n.animateHeight(), !0 === n.options.rtl && !1 === n.options.vertical && (e = -e), !1 === n.transformsEnabled ? !1 === n.options.vertical ? n.$slideTrack.animate({left: e}, n.options.speed, n.options.easing, A) : n.$slideTrack.animate({top: e}, n.options.speed, n.options.easing, A) : !1 === n.cssTransitions ? (!0 === n.options.rtl && (n.currentLeft = -n.currentLeft), t({animStart: n.currentLeft}).animate({animStart: e}, {
			duration: n.options.speed,
			easing: n.options.easing,
			step: function (t) {
				t = Math.ceil(t), !1 === n.options.vertical ? (i[n.animType] = "translate(" + t + "px, 0px)", n.$slideTrack.css(i)) : (i[n.animType] = "translate(0px," + t + "px)", n.$slideTrack.css(i))
			},
			complete: function () {
				A && A.call()
			}
		})) : (n.applyTransition(), e = Math.ceil(e), !1 === n.options.vertical ? i[n.animType] = "translate3d(" + e + "px, 0px, 0px)" : i[n.animType] = "translate3d(0px," + e + "px, 0px)", n.$slideTrack.css(i), A && setTimeout((function () {
			n.disableTransition(), A.call()
		}), n.options.speed))
	}, e.prototype.getNavTarget = function () {
		var e = this.options.asNavFor;
		return e && null !== e && (e = t(e).not(this.$slider)), e
	}, e.prototype.asNavFor = function (e) {
		var A = this.getNavTarget();
		null !== A && "object" == typeof A && A.each((function () {
			var A = t(this).slick("getSlick");
			A.unslicked || A.slideHandler(e, !0)
		}))
	}, e.prototype.applyTransition = function (t) {
		var e = this, A = {};
		!1 === e.options.fade ? A[e.transitionType] = e.transformType + " " + e.options.speed + "ms " + e.options.cssEase : A[e.transitionType] = "opacity " + e.options.speed + "ms " + e.options.cssEase, !1 === e.options.fade ? e.$slideTrack.css(A) : e.$slides.eq(t).css(A)
	}, e.prototype.autoPlay = function () {
		var t = this;
		t.autoPlayClear(), t.slideCount > t.options.slidesToShow && (t.autoPlayTimer = setInterval(t.autoPlayIterator, t.options.autoplaySpeed))
	}, e.prototype.autoPlayClear = function () {
		this.autoPlayTimer && clearInterval(this.autoPlayTimer)
	}, e.prototype.autoPlayIterator = function () {
		var t = this, e = t.currentSlide + t.options.slidesToScroll;
		t.paused || t.interrupted || t.focussed || (!1 === t.options.infinite && (1 === t.direction && t.currentSlide + 1 === t.slideCount - 1 ? t.direction = 0 : 0 === t.direction && (e = t.currentSlide - t.options.slidesToScroll, t.currentSlide - 1 == 0 && (t.direction = 1))), t.slideHandler(e))
	}, e.prototype.buildArrows = function () {
		var e = this;
		!0 === e.options.arrows && (e.$prevArrow = t(e.options.prevArrow).addClass("slick-arrow"), e.$nextArrow = t(e.options.nextArrow).addClass("slick-arrow"), e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows), e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows), !0 !== e.options.infinite && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({
			"aria-disabled": "true",
			tabindex: "-1"
		}))
	}, e.prototype.buildDots = function () {
		var e, A, i = this;
		if (!0 === i.options.dots && i.slideCount > i.options.slidesToShow) {
			for (i.$slider.addClass("slick-dotted"), A = t("<ul />").addClass(i.options.dotsClass), e = 0; e <= i.getDotCount(); e += 1) A.append(t("<li />").append(i.options.customPaging.call(this, i, e)));
			i.$dots = A.appendTo(i.options.appendDots), i.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false")
		}
	}, e.prototype.buildOut = function () {
		var e = this;
		e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), e.slideCount = e.$slides.length, e.$slides.each((function (e, A) {
			t(A).attr("data-slick-index", e).data("originalStyling", t(A).attr("style") || "")
		})), e.$slider.addClass("slick-slider"), e.$slideTrack = 0 === e.slideCount ? t('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(), e.$list = e.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(), e.$slideTrack.css("opacity", 0), (!0 === e.options.centerMode || !0 === e.options.swipeToSlide) && (e.options.slidesToScroll = 1), t("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"), e.setupInfinite(), e.buildArrows(), e.buildDots(), e.updateDots(), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), !0 === e.options.draggable && e.$list.addClass("draggable")
	}, e.prototype.buildRows = function () {
		var t, e, A, i, n, a, o, s = this;
		if (i = document.createDocumentFragment(), a = s.$slider.children(), s.options.rows > 1) {
			for (o = s.options.slidesPerRow * s.options.rows, n = Math.ceil(a.length / o), t = 0; n > t; t++) {
				var r = document.createElement("div");
				for (e = 0; e < s.options.rows; e++) {
					var g = document.createElement("div");
					for (A = 0; A < s.options.slidesPerRow; A++) {
						var h = t * o + (e * s.options.slidesPerRow + A);
						a.get(h) && g.appendChild(a.get(h))
					}
					r.appendChild(g)
				}
				i.appendChild(r)
			}
			s.$slider.empty().append(i), s.$slider.children().children().children().css({
				width: 100 / s.options.slidesPerRow + "%",
				display: "inline-block"
			})
		}
	}, e.prototype.checkResponsive = function (e, A) {
		var i, n, a, o = this, s = !1, r = o.$slider.width(), g = window.innerWidth || t(window).width();
		if ("window" === o.respondTo ? a = g : "slider" === o.respondTo ? a = r : "min" === o.respondTo && (a = Math.min(g, r)), o.options.responsive && o.options.responsive.length && null !== o.options.responsive) {
			for (i in n = null, o.breakpoints) o.breakpoints.hasOwnProperty(i) && (!1 === o.originalSettings.mobileFirst ? a < o.breakpoints[i] && (n = o.breakpoints[i]) : a > o.breakpoints[i] && (n = o.breakpoints[i]));
			null !== n ? null !== o.activeBreakpoint ? (n !== o.activeBreakpoint || A) && (o.activeBreakpoint = n, "unslick" === o.breakpointSettings[n] ? o.unslick(n) : (o.options = t.extend({}, o.originalSettings, o.breakpointSettings[n]), !0 === e && (o.currentSlide = o.options.initialSlide), o.refresh(e)), s = n) : (o.activeBreakpoint = n, "unslick" === o.breakpointSettings[n] ? o.unslick(n) : (o.options = t.extend({}, o.originalSettings, o.breakpointSettings[n]), !0 === e && (o.currentSlide = o.options.initialSlide), o.refresh(e)), s = n) : null !== o.activeBreakpoint && (o.activeBreakpoint = null, o.options = o.originalSettings, !0 === e && (o.currentSlide = o.options.initialSlide), o.refresh(e), s = n), e || !1 === s || o.$slider.trigger("breakpoint", [o, s])
		}
	}, e.prototype.changeSlide = function (e, A) {
		var i, n, a = this, o = t(e.currentTarget);
		switch (o.is("a") && e.preventDefault(), o.is("li") || (o = o.closest("li")), i = a.slideCount % a.options.slidesToScroll != 0 ? 0 : (a.slideCount - a.currentSlide) % a.options.slidesToScroll, e.data.message) {
			case"previous":
				n = 0 === i ? a.options.slidesToScroll : a.options.slidesToShow - i, a.slideCount > a.options.slidesToShow && a.slideHandler(a.currentSlide - n, !1, A);
				break;
			case"next":
				n = 0 === i ? a.options.slidesToScroll : i, a.slideCount > a.options.slidesToShow && a.slideHandler(a.currentSlide + n, !1, A);
				break;
			case"index":
				var s = 0 === e.data.index ? 0 : e.data.index || o.index() * a.options.slidesToScroll;
				a.slideHandler(a.checkNavigable(s), !1, A), o.children().trigger("focus");
				break;
			default:
				return
		}
	}, e.prototype.checkNavigable = function (t) {
		var e, A;
		if (A = 0, t > (e = this.getNavigableIndexes())[e.length - 1]) t = e[e.length - 1]; else for (var i in e) {
			if (t < e[i]) {
				t = A;
				break
			}
			A = e[i]
		}
		return t
	}, e.prototype.cleanUpEvents = function () {
		var e = this;
		e.options.dots && null !== e.$dots && t("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", t.proxy(e.interrupt, e, !0)).off("mouseleave.slick", t.proxy(e.interrupt, e, !1)), e.$slider.off("focus.slick blur.slick"), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide), e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide)), e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler), e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler), e.$list.off("touchend.slick mouseup.slick", e.swipeHandler), e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler), e.$list.off("click.slick", e.clickHandler), t(document).off(e.visibilityChange, e.visibility), e.cleanUpSlideEvents(), !0 === e.options.accessibility && e.$list.off("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && t(e.$slideTrack).children().off("click.slick", e.selectHandler), t(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange), t(window).off("resize.slick.slick-" + e.instanceUid, e.resize), t("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault), t(window).off("load.slick.slick-" + e.instanceUid, e.setPosition), t(document).off("ready.slick.slick-" + e.instanceUid, e.setPosition)
	}, e.prototype.cleanUpSlideEvents = function () {
		var e = this;
		e.$list.off("mouseenter.slick", t.proxy(e.interrupt, e, !0)), e.$list.off("mouseleave.slick", t.proxy(e.interrupt, e, !1))
	}, e.prototype.cleanUpRows = function () {
		var t, e = this;
		e.options.rows > 1 && ((t = e.$slides.children().children()).removeAttr("style"), e.$slider.empty().append(t))
	}, e.prototype.clickHandler = function (t) {
		!1 === this.shouldClick && (t.stopImmediatePropagation(), t.stopPropagation(), t.preventDefault())
	}, e.prototype.destroy = function (e) {
		var A = this;
		A.autoPlayClear(), A.touchObject = {}, A.cleanUpEvents(), t(".slick-cloned", A.$slider).detach(), A.$dots && A.$dots.remove(), A.$prevArrow && A.$prevArrow.length && (A.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), A.htmlExpr.test(A.options.prevArrow) && A.$prevArrow.remove()), A.$nextArrow && A.$nextArrow.length && (A.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), A.htmlExpr.test(A.options.nextArrow) && A.$nextArrow.remove()), A.$slides && (A.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each((function () {
			t(this).attr("style", t(this).data("originalStyling"))
		})), A.$slideTrack.children(this.options.slide).detach(), A.$slideTrack.detach(), A.$list.detach(), A.$slider.append(A.$slides)), A.cleanUpRows(), A.$slider.removeClass("slick-slider"), A.$slider.removeClass("slick-initialized"), A.$slider.removeClass("slick-dotted"), A.unslicked = !0, e || A.$slider.trigger("destroy", [A])
	}, e.prototype.disableTransition = function (t) {
		var e = this, A = {};
		A[e.transitionType] = "", !1 === e.options.fade ? e.$slideTrack.css(A) : e.$slides.eq(t).css(A)
	}, e.prototype.fadeSlide = function (t, e) {
		var A = this;
		!1 === A.cssTransitions ? (A.$slides.eq(t).css({zIndex: A.options.zIndex}), A.$slides.eq(t).animate({opacity: 1}, A.options.speed, A.options.easing, e)) : (A.applyTransition(t), A.$slides.eq(t).css({
			opacity: 1,
			zIndex: A.options.zIndex
		}), e && setTimeout((function () {
			A.disableTransition(t), e.call()
		}), A.options.speed))
	}, e.prototype.fadeSlideOut = function (t) {
		var e = this;
		!1 === e.cssTransitions ? e.$slides.eq(t).animate({
			opacity: 0,
			zIndex: e.options.zIndex - 2
		}, e.options.speed, e.options.easing) : (e.applyTransition(t), e.$slides.eq(t).css({
			opacity: 0,
			zIndex: e.options.zIndex - 2
		}))
	}, e.prototype.filterSlides = e.prototype.slickFilter = function (t) {
		var e = this;
		null !== t && (e.$slidesCache = e.$slides, e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.filter(t).appendTo(e.$slideTrack), e.reinit())
	}, e.prototype.focusHandler = function () {
		var e = this;
		e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*:not(.slick-arrow)", (function (A) {
			A.stopImmediatePropagation();
			var i = t(this);
			setTimeout((function () {
				e.options.pauseOnFocus && (e.focussed = i.is(":focus"), e.autoPlay())
			}), 0)
		}))
	}, e.prototype.getCurrent = e.prototype.slickCurrentSlide = function () {
		return this.currentSlide
	}, e.prototype.getDotCount = function () {
		var t = this, e = 0, A = 0, i = 0;
		if (!0 === t.options.infinite) for (; e < t.slideCount;) ++i, e = A + t.options.slidesToScroll, A += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow; else if (!0 === t.options.centerMode) i = t.slideCount; else if (t.options.asNavFor) for (; e < t.slideCount;) ++i, e = A + t.options.slidesToScroll, A += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow; else i = 1 + Math.ceil((t.slideCount - t.options.slidesToShow) / t.options.slidesToScroll);
		return i - 1
	}, e.prototype.getLeft = function (t) {
		var e, A, i, n = this, a = 0;
		return n.slideOffset = 0, A = n.$slides.first().outerHeight(!0), !0 === n.options.infinite ? (n.slideCount > n.options.slidesToShow && (n.slideOffset = n.slideWidth * n.options.slidesToShow * -1, a = A * n.options.slidesToShow * -1), n.slideCount % n.options.slidesToScroll != 0 && t + n.options.slidesToScroll > n.slideCount && n.slideCount > n.options.slidesToShow && (t > n.slideCount ? (n.slideOffset = (n.options.slidesToShow - (t - n.slideCount)) * n.slideWidth * -1, a = (n.options.slidesToShow - (t - n.slideCount)) * A * -1) : (n.slideOffset = n.slideCount % n.options.slidesToScroll * n.slideWidth * -1, a = n.slideCount % n.options.slidesToScroll * A * -1))) : t + n.options.slidesToShow > n.slideCount && (n.slideOffset = (t + n.options.slidesToShow - n.slideCount) * n.slideWidth, a = (t + n.options.slidesToShow - n.slideCount) * A), n.slideCount <= n.options.slidesToShow && (n.slideOffset = 0, a = 0), !0 === n.options.centerMode && !0 === n.options.infinite ? n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2) - n.slideWidth : !0 === n.options.centerMode && (n.slideOffset = 0, n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2)), e = !1 === n.options.vertical ? t * n.slideWidth * -1 + n.slideOffset : t * A * -1 + a, !0 === n.options.variableWidth && (i = n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite ? n.$slideTrack.children(".slick-slide").eq(t) : n.$slideTrack.children(".slick-slide").eq(t + n.options.slidesToShow), e = !0 === n.options.rtl ? i[0] ? -1 * (n.$slideTrack.width() - i[0].offsetLeft - i.width()) : 0 : i[0] ? -1 * i[0].offsetLeft : 0, !0 === n.options.centerMode && (i = n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite ? n.$slideTrack.children(".slick-slide").eq(t) : n.$slideTrack.children(".slick-slide").eq(t + n.options.slidesToShow + 1), e = !0 === n.options.rtl ? i[0] ? -1 * (n.$slideTrack.width() - i[0].offsetLeft - i.width()) : 0 : i[0] ? -1 * i[0].offsetLeft : 0, e += (n.$list.width() - i.outerWidth()) / 2)), e
	}, e.prototype.getOption = e.prototype.slickGetOption = function (t) {
		return this.options[t]
	}, e.prototype.getNavigableIndexes = function () {
		var t, e = this, A = 0, i = 0, n = [];
		for (!1 === e.options.infinite ? t = e.slideCount : (A = -1 * e.options.slidesToScroll, i = -1 * e.options.slidesToScroll, t = 2 * e.slideCount); t > A;) n.push(A), A = i + e.options.slidesToScroll, i += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
		return n
	}, e.prototype.getSlick = function () {
		return this
	}, e.prototype.getSlideCount = function () {
		var e, A, i = this;
		return A = !0 === i.options.centerMode ? i.slideWidth * Math.floor(i.options.slidesToShow / 2) : 0, !0 === i.options.swipeToSlide ? (i.$slideTrack.find(".slick-slide").each((function (n, a) {
			return a.offsetLeft - A + t(a).outerWidth() / 2 > -1 * i.swipeLeft ? (e = a, !1) : void 0
		})), Math.abs(t(e).attr("data-slick-index") - i.currentSlide) || 1) : i.options.slidesToScroll
	}, e.prototype.goTo = e.prototype.slickGoTo = function (t, e) {
		this.changeSlide({data: {message: "index", index: parseInt(t)}}, e)
	}, e.prototype.init = function (e) {
		var A = this;
		t(A.$slider).hasClass("slick-initialized") || (t(A.$slider).addClass("slick-initialized"), A.buildRows(), A.buildOut(), A.setProps(), A.startLoad(), A.loadSlider(), A.initializeEvents(), A.updateArrows(), A.updateDots(), A.checkResponsive(!0), A.focusHandler()), e && A.$slider.trigger("init", [A]), !0 === A.options.accessibility && A.initADA(), A.options.autoplay && (A.paused = !1, A.autoPlay())
	}, e.prototype.initADA = function () {
		var e = this;
		e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({
			"aria-hidden": "true",
			tabindex: "-1"
		}).find("a, input, button, select").attr({tabindex: "-1"}), e.$slideTrack.attr("role", "listbox"), e.$slides.not(e.$slideTrack.find(".slick-cloned")).each((function (A) {
			t(this).attr({role: "option", "aria-describedby": "slick-slide" + e.instanceUid + A})
		})), null !== e.$dots && e.$dots.attr("role", "tablist").find("li").each((function (A) {
			t(this).attr({
				role: "presentation",
				"aria-selected": "false",
				"aria-controls": "navigation" + e.instanceUid + A,
				id: "slick-slide" + e.instanceUid + A
			})
		})).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar"), e.activateADA()
	}, e.prototype.initArrowEvents = function () {
		var t = this;
		!0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow.off("click.slick").on("click.slick", {message: "previous"}, t.changeSlide), t.$nextArrow.off("click.slick").on("click.slick", {message: "next"}, t.changeSlide))
	}, e.prototype.initDotEvents = function () {
		var e = this;
		!0 === e.options.dots && e.slideCount > e.options.slidesToShow && t("li", e.$dots).on("click.slick", {message: "index"}, e.changeSlide), !0 === e.options.dots && !0 === e.options.pauseOnDotsHover && t("li", e.$dots).on("mouseenter.slick", t.proxy(e.interrupt, e, !0)).on("mouseleave.slick", t.proxy(e.interrupt, e, !1))
	}, e.prototype.initSlideEvents = function () {
		var e = this;
		e.options.pauseOnHover && (e.$list.on("mouseenter.slick", t.proxy(e.interrupt, e, !0)), e.$list.on("mouseleave.slick", t.proxy(e.interrupt, e, !1)))
	}, e.prototype.initializeEvents = function () {
		var e = this;
		e.initArrowEvents(), e.initDotEvents(), e.initSlideEvents(), e.$list.on("touchstart.slick mousedown.slick", {action: "start"}, e.swipeHandler), e.$list.on("touchmove.slick mousemove.slick", {action: "move"}, e.swipeHandler), e.$list.on("touchend.slick mouseup.slick", {action: "end"}, e.swipeHandler), e.$list.on("touchcancel.slick mouseleave.slick", {action: "end"}, e.swipeHandler), e.$list.on("click.slick", e.clickHandler), t(document).on(e.visibilityChange, t.proxy(e.visibility, e)), !0 === e.options.accessibility && e.$list.on("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && t(e.$slideTrack).children().on("click.slick", e.selectHandler), t(window).on("orientationchange.slick.slick-" + e.instanceUid, t.proxy(e.orientationChange, e)), t(window).on("resize.slick.slick-" + e.instanceUid, t.proxy(e.resize, e)), t("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault), t(window).on("load.slick.slick-" + e.instanceUid, e.setPosition), t(document).on("ready.slick.slick-" + e.instanceUid, e.setPosition)
	}, e.prototype.initUI = function () {
		var t = this;
		!0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow.show(), t.$nextArrow.show()), !0 === t.options.dots && t.slideCount > t.options.slidesToShow && t.$dots.show()
	}, e.prototype.keyHandler = function (t) {
		var e = this;
		t.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === t.keyCode && !0 === e.options.accessibility ? e.changeSlide({data: {message: !0 === e.options.rtl ? "next" : "previous"}}) : 39 === t.keyCode && !0 === e.options.accessibility && e.changeSlide({data: {message: !0 === e.options.rtl ? "previous" : "next"}}))
	}, e.prototype.lazyLoad = function () {
		function e(e) {
			t("img[data-lazy]", e).each((function () {
				var e = t(this), A = t(this).attr("data-lazy"), i = document.createElement("img");
				i.onload = function () {
					e.animate({opacity: 0}, 100, (function () {
						e.attr("src", A).animate({opacity: 1}, 200, (function () {
							e.removeAttr("data-lazy").removeClass("slick-loading")
						})), n.$slider.trigger("lazyLoaded", [n, e, A])
					}))
				}, i.onerror = function () {
					e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), n.$slider.trigger("lazyLoadError", [n, e, A])
				}, i.src = A
			}))
		}

		var A, i, n = this;
		!0 === n.options.centerMode ? !0 === n.options.infinite ? i = (A = n.currentSlide + (n.options.slidesToShow / 2 + 1)) + n.options.slidesToShow + 2 : (A = Math.max(0, n.currentSlide - (n.options.slidesToShow / 2 + 1)), i = n.options.slidesToShow / 2 + 1 + 2 + n.currentSlide) : (A = n.options.infinite ? n.options.slidesToShow + n.currentSlide : n.currentSlide, i = Math.ceil(A + n.options.slidesToShow), !0 === n.options.fade && (A > 0 && A--, i <= n.slideCount && i++)), e(n.$slider.find(".slick-slide").slice(A, i)), n.slideCount <= n.options.slidesToShow ? e(n.$slider.find(".slick-slide")) : n.currentSlide >= n.slideCount - n.options.slidesToShow ? e(n.$slider.find(".slick-cloned").slice(0, n.options.slidesToShow)) : 0 === n.currentSlide && e(n.$slider.find(".slick-cloned").slice(-1 * n.options.slidesToShow))
	}, e.prototype.loadSlider = function () {
		var t = this;
		t.setPosition(), t.$slideTrack.css({opacity: 1}), t.$slider.removeClass("slick-loading"), t.initUI(), "progressive" === t.options.lazyLoad && t.progressiveLazyLoad()
	}, e.prototype.next = e.prototype.slickNext = function () {
		this.changeSlide({data: {message: "next"}})
	}, e.prototype.orientationChange = function () {
		this.checkResponsive(), this.setPosition()
	}, e.prototype.pause = e.prototype.slickPause = function () {
		this.autoPlayClear(), this.paused = !0
	}, e.prototype.play = e.prototype.slickPlay = function () {
		var t = this;
		t.autoPlay(), t.options.autoplay = !0, t.paused = !1, t.focussed = !1, t.interrupted = !1
	}, e.prototype.postSlide = function (t) {
		var e = this;
		e.unslicked || (e.$slider.trigger("afterChange", [e, t]), e.animating = !1, e.setPosition(), e.swipeLeft = null, e.options.autoplay && e.autoPlay(), !0 === e.options.accessibility && e.initADA())
	}, e.prototype.prev = e.prototype.slickPrev = function () {
		this.changeSlide({data: {message: "previous"}})
	}, e.prototype.preventDefault = function (t) {
		t.preventDefault()
	}, e.prototype.progressiveLazyLoad = function (e) {
		e = e || 1;
		var A, i, n, a = this, o = t("img[data-lazy]", a.$slider);
		o.length ? (A = o.first(), i = A.attr("data-lazy"), (n = document.createElement("img")).onload = function () {
			A.attr("src", i).removeAttr("data-lazy").removeClass("slick-loading"), !0 === a.options.adaptiveHeight && a.setPosition(), a.$slider.trigger("lazyLoaded", [a, A, i]), a.progressiveLazyLoad()
		}, n.onerror = function () {
			3 > e ? setTimeout((function () {
				a.progressiveLazyLoad(e + 1)
			}), 500) : (A.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), a.$slider.trigger("lazyLoadError", [a, A, i]), a.progressiveLazyLoad())
		}, n.src = i) : a.$slider.trigger("allImagesLoaded", [a])
	}, e.prototype.refresh = function (e) {
		var A, i, n = this;
		i = n.slideCount - n.options.slidesToShow, !n.options.infinite && n.currentSlide > i && (n.currentSlide = i), n.slideCount <= n.options.slidesToShow && (n.currentSlide = 0), A = n.currentSlide, n.destroy(!0), t.extend(n, n.initials, {currentSlide: A}), n.init(), e || n.changeSlide({
			data: {
				message: "index",
				index: A
			}
		}, !1)
	}, e.prototype.registerBreakpoints = function () {
		var e, A, i, n = this, a = n.options.responsive || null;
		if ("array" === t.type(a) && a.length) {
			for (e in n.respondTo = n.options.respondTo || "window", a) if (i = n.breakpoints.length - 1, A = a[e].breakpoint, a.hasOwnProperty(e)) {
				for (; i >= 0;) n.breakpoints[i] && n.breakpoints[i] === A && n.breakpoints.splice(i, 1), i--;
				n.breakpoints.push(A), n.breakpointSettings[A] = a[e].settings
			}
			n.breakpoints.sort((function (t, e) {
				return n.options.mobileFirst ? t - e : e - t
			}))
		}
	}, e.prototype.reinit = function () {
		var e = this;
		e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"), e.slideCount = e.$slides.length, e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll), e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0), e.registerBreakpoints(), e.setProps(), e.setupInfinite(), e.buildArrows(), e.updateArrows(), e.initArrowEvents(), e.buildDots(), e.updateDots(), e.initDotEvents(), e.cleanUpSlideEvents(), e.initSlideEvents(), e.checkResponsive(!1, !0), !0 === e.options.focusOnSelect && t(e.$slideTrack).children().on("click.slick", e.selectHandler), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), e.setPosition(), e.focusHandler(), e.paused = !e.options.autoplay, e.autoPlay(), e.$slider.trigger("reInit", [e])
	}, e.prototype.resize = function () {
		var e = this;
		t(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay), e.windowDelay = window.setTimeout((function () {
			e.windowWidth = t(window).width(), e.checkResponsive(), e.unslicked || e.setPosition()
		}), 50))
	}, e.prototype.removeSlide = e.prototype.slickRemove = function (t, e, A) {
		var i = this;
		return "boolean" == typeof t ? t = !0 === (e = t) ? 0 : i.slideCount - 1 : t = !0 === e ? --t : t, !(i.slideCount < 1 || 0 > t || t > i.slideCount - 1) && (i.unload(), !0 === A ? i.$slideTrack.children().remove() : i.$slideTrack.children(this.options.slide).eq(t).remove(), i.$slides = i.$slideTrack.children(this.options.slide), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.append(i.$slides), i.$slidesCache = i.$slides, void i.reinit())
	}, e.prototype.setCSS = function (t) {
		var e, A, i = this, n = {};
		!0 === i.options.rtl && (t = -t), e = "left" == i.positionProp ? Math.ceil(t) + "px" : "0px", A = "top" == i.positionProp ? Math.ceil(t) + "px" : "0px", n[i.positionProp] = t, !1 === i.transformsEnabled ? i.$slideTrack.css(n) : (n = {}, !1 === i.cssTransitions ? (n[i.animType] = "translate(" + e + ", " + A + ")", i.$slideTrack.css(n)) : (n[i.animType] = "translate3d(" + e + ", " + A + ", 0px)", i.$slideTrack.css(n)))
	}, e.prototype.setDimensions = function () {
		var t = this;
		!1 === t.options.vertical ? !0 === t.options.centerMode && t.$list.css({padding: "0px " + t.options.centerPadding}) : (t.$list.height(t.$slides.first().outerHeight(!0) * t.options.slidesToShow), !0 === t.options.centerMode && t.$list.css({padding: t.options.centerPadding + " 0px"})), t.listWidth = t.$list.width(), t.listHeight = t.$list.height(), !1 === t.options.vertical && !1 === t.options.variableWidth ? (t.slideWidth = Math.ceil(t.listWidth / t.options.slidesToShow), t.$slideTrack.width(Math.ceil(t.slideWidth * t.$slideTrack.children(".slick-slide").length))) : !0 === t.options.variableWidth ? t.$slideTrack.width(5e3 * t.slideCount) : (t.slideWidth = Math.ceil(t.listWidth), t.$slideTrack.height(Math.ceil(t.$slides.first().outerHeight(!0) * t.$slideTrack.children(".slick-slide").length)));
		var e = t.$slides.first().outerWidth(!0) - t.$slides.first().width();
		!1 === t.options.variableWidth && t.$slideTrack.children(".slick-slide").width(t.slideWidth - e)
	}, e.prototype.setFade = function () {
		var e, A = this;
		A.$slides.each((function (i, n) {
			e = A.slideWidth * i * -1, !0 === A.options.rtl ? t(n).css({
				position: "relative",
				right: e,
				top: 0,
				zIndex: A.options.zIndex - 2,
				opacity: 0
			}) : t(n).css({position: "relative", left: e, top: 0, zIndex: A.options.zIndex - 2, opacity: 0})
		})), A.$slides.eq(A.currentSlide).css({zIndex: A.options.zIndex - 1, opacity: 1})
	}, e.prototype.setHeight = function () {
		var t = this;
		if (1 === t.options.slidesToShow && !0 === t.options.adaptiveHeight && !1 === t.options.vertical) {
			var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
			t.$list.css("height", e)
		}
	}, e.prototype.setOption = e.prototype.slickSetOption = function () {
		var e, A, i, n, a, o = this, s = !1;
		if ("object" === t.type(arguments[0]) ? (i = arguments[0], s = arguments[1], a = "multiple") : "string" === t.type(arguments[0]) && (i = arguments[0], n = arguments[1], s = arguments[2], "responsive" === arguments[0] && "array" === t.type(arguments[1]) ? a = "responsive" : void 0 !== arguments[1] && (a = "single")), "single" === a) o.options[i] = n; else if ("multiple" === a) t.each(i, (function (t, e) {
			o.options[t] = e
		})); else if ("responsive" === a) for (A in n) if ("array" !== t.type(o.options.responsive)) o.options.responsive = [n[A]]; else {
			for (e = o.options.responsive.length - 1; e >= 0;) o.options.responsive[e].breakpoint === n[A].breakpoint && o.options.responsive.splice(e, 1), e--;
			o.options.responsive.push(n[A])
		}
		s && (o.unload(), o.reinit())
	}, e.prototype.setPosition = function () {
		var t = this;
		t.setDimensions(), t.setHeight(), !1 === t.options.fade ? t.setCSS(t.getLeft(t.currentSlide)) : t.setFade(), t.$slider.trigger("setPosition", [t])
	}, e.prototype.setProps = function () {
		var t = this, e = document.body.style;
		t.positionProp = !0 === t.options.vertical ? "top" : "left", "top" === t.positionProp ? t.$slider.addClass("slick-vertical") : t.$slider.removeClass("slick-vertical"), (void 0 !== e.WebkitTransition || void 0 !== e.MozTransition || void 0 !== e.msTransition) && !0 === t.options.useCSS && (t.cssTransitions = !0), t.options.fade && ("number" == typeof t.options.zIndex ? t.options.zIndex < 3 && (t.options.zIndex = 3) : t.options.zIndex = t.defaults.zIndex), void 0 !== e.OTransform && (t.animType = "OTransform", t.transformType = "-o-transform", t.transitionType = "OTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)), void 0 !== e.MozTransform && (t.animType = "MozTransform", t.transformType = "-moz-transform", t.transitionType = "MozTransition", void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (t.animType = !1)), void 0 !== e.webkitTransform && (t.animType = "webkitTransform", t.transformType = "-webkit-transform", t.transitionType = "webkitTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)), void 0 !== e.msTransform && (t.animType = "msTransform", t.transformType = "-ms-transform", t.transitionType = "msTransition", void 0 === e.msTransform && (t.animType = !1)), void 0 !== e.transform && !1 !== t.animType && (t.animType = "transform", t.transformType = "transform", t.transitionType = "transition"), t.transformsEnabled = t.options.useTransform && null !== t.animType && !1 !== t.animType
	}, e.prototype.setSlideClasses = function (t) {
		var e, A, i, n, a = this;
		A = a.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), a.$slides.eq(t).addClass("slick-current"), !0 === a.options.centerMode ? (e = Math.floor(a.options.slidesToShow / 2), !0 === a.options.infinite && (t >= e && t <= a.slideCount - 1 - e ? a.$slides.slice(t - e, t + e + 1).addClass("slick-active").attr("aria-hidden", "false") : (i = a.options.slidesToShow + t, A.slice(i - e + 1, i + e + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === t ? A.eq(A.length - 1 - a.options.slidesToShow).addClass("slick-center") : t === a.slideCount - 1 && A.eq(a.options.slidesToShow).addClass("slick-center")), a.$slides.eq(t).addClass("slick-center")) : t >= 0 && t <= a.slideCount - a.options.slidesToShow ? a.$slides.slice(t, t + a.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : A.length <= a.options.slidesToShow ? A.addClass("slick-active").attr("aria-hidden", "false") : (n = a.slideCount % a.options.slidesToShow, i = !0 === a.options.infinite ? a.options.slidesToShow + t : t, a.options.slidesToShow == a.options.slidesToScroll && a.slideCount - t < a.options.slidesToShow ? A.slice(i - (a.options.slidesToShow - n), i + n).addClass("slick-active").attr("aria-hidden", "false") : A.slice(i, i + a.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), "ondemand" === a.options.lazyLoad && a.lazyLoad()
	}, e.prototype.setupInfinite = function () {
		var e, A, i, n = this;
		if (!0 === n.options.fade && (n.options.centerMode = !1), !0 === n.options.infinite && !1 === n.options.fade && (A = null, n.slideCount > n.options.slidesToShow)) {
			for (i = !0 === n.options.centerMode ? n.options.slidesToShow + 1 : n.options.slidesToShow, e = n.slideCount; e > n.slideCount - i; e -= 1) A = e - 1, t(n.$slides[A]).clone(!0).attr("id", "").attr("data-slick-index", A - n.slideCount).prependTo(n.$slideTrack).addClass("slick-cloned");
			for (e = 0; i > e; e += 1) A = e, t(n.$slides[A]).clone(!0).attr("id", "").attr("data-slick-index", A + n.slideCount).appendTo(n.$slideTrack).addClass("slick-cloned");
			n.$slideTrack.find(".slick-cloned").find("[id]").each((function () {
				t(this).attr("id", "")
			}))
		}
	}, e.prototype.interrupt = function (t) {
		t || this.autoPlay(), this.interrupted = t
	}, e.prototype.selectHandler = function (e) {
		var A = this, i = t(e.target).is(".slick-slide") ? t(e.target) : t(e.target).parents(".slick-slide"),
			n = parseInt(i.attr("data-slick-index"));
		return n || (n = 0), A.slideCount <= A.options.slidesToShow ? (A.setSlideClasses(n), void A.asNavFor(n)) : void A.slideHandler(n)
	}, e.prototype.slideHandler = function (t, e, A) {
		var i, n, a, o, s, r = null, g = this;
		return e = e || !1, !0 === g.animating && !0 === g.options.waitForAnimate || !0 === g.options.fade && g.currentSlide === t || g.slideCount <= g.options.slidesToShow ? void 0 : (!1 === e && g.asNavFor(t), i = t, r = g.getLeft(i), o = g.getLeft(g.currentSlide), g.currentLeft = null === g.swipeLeft ? o : g.swipeLeft, !1 === g.options.infinite && !1 === g.options.centerMode && (0 > t || t > g.getDotCount() * g.options.slidesToScroll) || !1 === g.options.infinite && !0 === g.options.centerMode && (0 > t || t > g.slideCount - g.options.slidesToScroll) ? void (!1 === g.options.fade && (i = g.currentSlide, !0 !== A ? g.animateSlide(o, (function () {
			g.postSlide(i)
		})) : g.postSlide(i))) : (g.options.autoplay && clearInterval(g.autoPlayTimer), n = 0 > i ? g.slideCount % g.options.slidesToScroll != 0 ? g.slideCount - g.slideCount % g.options.slidesToScroll : g.slideCount + i : i >= g.slideCount ? g.slideCount % g.options.slidesToScroll != 0 ? 0 : i - g.slideCount : i, g.animating = !0, g.$slider.trigger("beforeChange", [g, g.currentSlide, n]), a = g.currentSlide, g.currentSlide = n, g.setSlideClasses(g.currentSlide), g.options.asNavFor && ((s = (s = g.getNavTarget()).slick("getSlick")).slideCount <= s.options.slidesToShow && s.setSlideClasses(g.currentSlide)), g.updateDots(), g.updateArrows(), !0 === g.options.fade ? (!0 !== A ? (g.fadeSlideOut(a), g.fadeSlide(n, (function () {
			g.postSlide(n)
		}))) : g.postSlide(n), void g.animateHeight()) : void (!0 !== A ? g.animateSlide(r, (function () {
			g.postSlide(n)
		})) : g.postSlide(n))))
	}, e.prototype.startLoad = function () {
		var t = this;
		!0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow.hide(), t.$nextArrow.hide()), !0 === t.options.dots && t.slideCount > t.options.slidesToShow && t.$dots.hide(), t.$slider.addClass("slick-loading")
	}, e.prototype.swipeDirection = function () {
		var t, e, A, i, n = this;
		return t = n.touchObject.startX - n.touchObject.curX, e = n.touchObject.startY - n.touchObject.curY, A = Math.atan2(e, t), 0 > (i = Math.round(180 * A / Math.PI)) && (i = 360 - Math.abs(i)), 45 >= i && i >= 0 || 360 >= i && i >= 315 ? !1 === n.options.rtl ? "left" : "right" : i >= 135 && 225 >= i ? !1 === n.options.rtl ? "right" : "left" : !0 === n.options.verticalSwiping ? i >= 35 && 135 >= i ? "down" : "up" : "vertical"
	}, e.prototype.swipeEnd = function (t) {
		var e, A, i = this;
		if (i.dragging = !1, i.interrupted = !1, i.shouldClick = !(i.touchObject.swipeLength > 10), void 0 === i.touchObject.curX) return !1;
		if (!0 === i.touchObject.edgeHit && i.$slider.trigger("edge", [i, i.swipeDirection()]), i.touchObject.swipeLength >= i.touchObject.minSwipe) {
			switch (A = i.swipeDirection()) {
				case"left":
				case"down":
					e = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide + i.getSlideCount()) : i.currentSlide + i.getSlideCount(), i.currentDirection = 0;
					break;
				case"right":
				case"up":
					e = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide - i.getSlideCount()) : i.currentSlide - i.getSlideCount(), i.currentDirection = 1
			}
			"vertical" != A && (i.slideHandler(e), i.touchObject = {}, i.$slider.trigger("swipe", [i, A]))
		} else i.touchObject.startX !== i.touchObject.curX && (i.slideHandler(i.currentSlide), i.touchObject = {})
	}, e.prototype.swipeHandler = function (t) {
		var e = this;
		if (!(!1 === e.options.swipe || "ontouchend" in document && !1 === e.options.swipe || !1 === e.options.draggable && -1 !== t.type.indexOf("mouse"))) switch (e.touchObject.fingerCount = t.originalEvent && void 0 !== t.originalEvent.touches ? t.originalEvent.touches.length : 1, e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold, !0 === e.options.verticalSwiping && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold), t.data.action) {
			case"start":
				e.swipeStart(t);
				break;
			case"move":
				e.swipeMove(t);
				break;
			case"end":
				e.swipeEnd(t)
		}
	}, e.prototype.swipeMove = function (t) {
		var e, A, i, n, a, o = this;
		return a = void 0 !== t.originalEvent ? t.originalEvent.touches : null, !(!o.dragging || a && 1 !== a.length) && (e = o.getLeft(o.currentSlide), o.touchObject.curX = void 0 !== a ? a[0].pageX : t.clientX, o.touchObject.curY = void 0 !== a ? a[0].pageY : t.clientY, o.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(o.touchObject.curX - o.touchObject.startX, 2))), !0 === o.options.verticalSwiping && (o.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(o.touchObject.curY - o.touchObject.startY, 2)))), "vertical" !== (A = o.swipeDirection()) ? (void 0 !== t.originalEvent && o.touchObject.swipeLength > 4 && t.preventDefault(), n = (!1 === o.options.rtl ? 1 : -1) * (o.touchObject.curX > o.touchObject.startX ? 1 : -1), !0 === o.options.verticalSwiping && (n = o.touchObject.curY > o.touchObject.startY ? 1 : -1), i = o.touchObject.swipeLength, o.touchObject.edgeHit = !1, !1 === o.options.infinite && (0 === o.currentSlide && "right" === A || o.currentSlide >= o.getDotCount() && "left" === A) && (i = o.touchObject.swipeLength * o.options.edgeFriction, o.touchObject.edgeHit = !0), !1 === o.options.vertical ? o.swipeLeft = e + i * n : o.swipeLeft = e + i * (o.$list.height() / o.listWidth) * n, !0 === o.options.verticalSwiping && (o.swipeLeft = e + i * n), !0 !== o.options.fade && !1 !== o.options.touchMove && (!0 === o.animating ? (o.swipeLeft = null, !1) : void o.setCSS(o.swipeLeft))) : void 0)
	}, e.prototype.swipeStart = function (t) {
		var e, A = this;
		return A.interrupted = !0, 1 !== A.touchObject.fingerCount || A.slideCount <= A.options.slidesToShow ? (A.touchObject = {}, !1) : (void 0 !== t.originalEvent && void 0 !== t.originalEvent.touches && (e = t.originalEvent.touches[0]), A.touchObject.startX = A.touchObject.curX = void 0 !== e ? e.pageX : t.clientX, A.touchObject.startY = A.touchObject.curY = void 0 !== e ? e.pageY : t.clientY, void (A.dragging = !0))
	}, e.prototype.unfilterSlides = e.prototype.slickUnfilter = function () {
		var t = this;
		null !== t.$slidesCache && (t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.appendTo(t.$slideTrack), t.reinit())
	}, e.prototype.unload = function () {
		var e = this;
		t(".slick-cloned", e.$slider).remove(), e.$dots && e.$dots.remove(), e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(), e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(), e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
	}, e.prototype.unslick = function (t) {
		var e = this;
		e.$slider.trigger("unslick", [e, t]), e.destroy()
	}, e.prototype.updateArrows = function () {
		var t = this;
		Math.floor(t.options.slidesToShow / 2), !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && !t.options.infinite && (t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === t.currentSlide ? (t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : (t.currentSlide >= t.slideCount - t.options.slidesToShow && !1 === t.options.centerMode || t.currentSlide >= t.slideCount - 1 && !0 === t.options.centerMode) && (t.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
	}, e.prototype.updateDots = function () {
		var t = this;
		null !== t.$dots && (t.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), t.$dots.find("li").eq(Math.floor(t.currentSlide / t.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"))
	}, e.prototype.visibility = function () {
		var t = this;
		t.options.autoplay && (document[t.hidden] ? t.interrupted = !0 : t.interrupted = !1)
	}, t.fn.slick = function () {
		var t, A, i = this, n = arguments[0], a = Array.prototype.slice.call(arguments, 1), o = i.length;
		for (t = 0; o > t; t++) if ("object" == typeof n || void 0 === n ? i[t].slick = new e(i[t], n) : A = i[t].slick[n].apply(i[t].slick, a), void 0 !== A) return A;
		return i
	}
})), jQuery(document).ready((function (t) {
	var e = t(".pushmenu");
	t(".icon-pushmenu").on("click", (function (A) {
		A.stopPropagation(), t("body").toggleClass("no-scroll"), e.toggleClass("pushmenu-open")
	})), hide = !0, t("body").on("click", (function () {
		t("body").hasClass("no-scroll") && (t(".pushmenu").removeClass("pushmenu-open"), t("body").removeClass("no-scroll"))
	})), t(".close-right").on("click", (function () {
		hide = !0, t("body").removeClass("no-scroll"), e.removeClass("pushmenu-open")
	}))
})), this.createjs = this.createjs || {}, createjs.extend = function (t, e) {
	"use strict";

	function A() {
		this.constructor = t
	}

	return A.prototype = e.prototype, t.prototype = new A
}, this.createjs = this.createjs || {}, createjs.promote = function (t, e) {
	"use strict";
	var A = t.prototype, i = Object.getPrototypeOf && Object.getPrototypeOf(A) || A.__proto__;
	if (i) for (var n in A[(e += "_") + "constructor"] = i.constructor, i) A.hasOwnProperty(n) && "function" == typeof i[n] && (A[e + n] = i[n]);
	return t
}, this.createjs = this.createjs || {}, createjs.indexOf = function (t, e) {
	"use strict";
	for (var A = 0, i = t.length; i > A; A++) if (e === t[A]) return A;
	return -1
}, this.createjs = this.createjs || {}, function () {
	"use strict";

	function t(t, e, A) {
		this.type = t, this.target = null, this.currentTarget = null, this.eventPhase = 0, this.bubbles = !!e, this.cancelable = !!A, this.timeStamp = (new Date).getTime(), this.defaultPrevented = !1, this.propagationStopped = !1, this.immediatePropagationStopped = !1, this.removed = !1
	}

	var e = t.prototype;
	e.preventDefault = function () {
		this.defaultPrevented = this.cancelable && !0
	}, e.stopPropagation = function () {
		this.propagationStopped = !0
	}, e.stopImmediatePropagation = function () {
		this.immediatePropagationStopped = this.propagationStopped = !0
	}, e.remove = function () {
		this.removed = !0
	}, e.clone = function () {
		return new t(this.type, this.bubbles, this.cancelable)
	}, e.set = function (t) {
		for (var e in t) this[e] = t[e];
		return this
	}, e.toString = function () {
		return "[Event (type=" + this.type + ")]"
	}, createjs.Event = t
}(), this.createjs = this.createjs || {}, function () {
	"use strict";

	function t() {
		this._listeners = null, this._captureListeners = null
	}

	var e = t.prototype;
	t.initialize = function (t) {
		t.addEventListener = e.addEventListener, t.on = e.on, t.removeEventListener = t.off = e.removeEventListener, t.removeAllEventListeners = e.removeAllEventListeners, t.hasEventListener = e.hasEventListener, t.dispatchEvent = e.dispatchEvent, t._dispatchEvent = e._dispatchEvent, t.willTrigger = e.willTrigger
	}, e.addEventListener = function (t, e, A) {
		var i,
			n = (i = A ? this._captureListeners = this._captureListeners || {} : this._listeners = this._listeners || {})[t];
		return n && this.removeEventListener(t, e, A), (n = i[t]) ? n.push(e) : i[t] = [e], e
	}, e.on = function (t, e, A, i, n, a) {
		return e.handleEvent && (A = A || e, e = e.handleEvent), A = A || this, this.addEventListener(t, (function (t) {
			e.call(A, t, n), i && t.remove()
		}), a)
	}, e.removeEventListener = function (t, e, A) {
		var i = A ? this._captureListeners : this._listeners;
		if (i) {
			var n = i[t];
			if (n) for (var a = 0, o = n.length; o > a; a++) if (n[a] == e) {
				1 == o ? delete i[t] : n.splice(a, 1);
				break
			}
		}
	}, e.off = e.removeEventListener, e.removeAllEventListeners = function (t) {
		t ? (this._listeners && delete this._listeners[t], this._captureListeners && delete this._captureListeners[t]) : this._listeners = this._captureListeners = null
	}, e.dispatchEvent = function (t, e, A) {
		if ("string" == typeof t) {
			var i = this._listeners;
			if (!(e || i && i[t])) return !0;
			t = new createjs.Event(t, e, A)
		} else t.target && t.clone && (t = t.clone());
		try {
			t.target = this
		} catch (t) {
		}
		if (t.bubbles && this.parent) {
			for (var n = this, a = [n]; n.parent;) a.push(n = n.parent);
			var o, s = a.length;
			for (o = s - 1; o >= 0 && !t.propagationStopped; o--) a[o]._dispatchEvent(t, 1 + (0 == o));
			for (o = 1; s > o && !t.propagationStopped; o++) a[o]._dispatchEvent(t, 3)
		} else this._dispatchEvent(t, 2);
		return !t.defaultPrevented
	}, e.hasEventListener = function (t) {
		var e = this._listeners, A = this._captureListeners;
		return !!(e && e[t] || A && A[t])
	}, e.willTrigger = function (t) {
		for (var e = this; e;) {
			if (e.hasEventListener(t)) return !0;
			e = e.parent
		}
		return !1
	}, e.toString = function () {
		return "[EventDispatcher]"
	}, e._dispatchEvent = function (t, e) {
		var A, i = 1 == e ? this._captureListeners : this._listeners;
		if (t && i) {
			var n = i[t.type];
			if (!n || !(A = n.length)) return;
			try {
				t.currentTarget = this
			} catch (t) {
			}
			try {
				t.eventPhase = e
			} catch (t) {
			}
			t.removed = !1, n = n.slice();
			for (var a = 0; A > a && !t.immediatePropagationStopped; a++) {
				var o = n[a];
				o.handleEvent ? o.handleEvent(t) : o(t), t.removed && (this.off(t.type, o, 1 == e), t.removed = !1)
			}
		}
	}, createjs.EventDispatcher = t
}(), this.createjs = this.createjs || {}, function () {
	"use strict";

	function t() {
		throw"Ticker cannot be instantiated."
	}

	t.RAF_SYNCHED = "synched", t.RAF = "raf", t.TIMEOUT = "timeout", t.useRAF = !1, t.timingMode = null, t.maxDelta = 0, t.paused = !1, t.removeEventListener = null, t.removeAllEventListeners = null, t.dispatchEvent = null, t.hasEventListener = null, t._listeners = null, createjs.EventDispatcher.initialize(t), t._addEventListener = t.addEventListener, t.addEventListener = function () {
		return !t._inited && t.init(), t._addEventListener.apply(t, arguments)
	}, t._inited = !1, t._startTime = 0, t._pausedTime = 0, t._ticks = 0, t._pausedTicks = 0, t._interval = 50, t._lastTime = 0, t._times = null, t._tickTimes = null, t._timerId = null, t._raf = !0, t.setInterval = function (e) {
		t._interval = e, t._inited && t._setupTick()
	}, t.getInterval = function () {
		return t._interval
	}, t.setFPS = function (e) {
		t.setInterval(1e3 / e)
	}, t.getFPS = function () {
		return 1e3 / t._interval
	};
	try {
		Object.defineProperties(t, {
			interval: {get: t.getInterval, set: t.setInterval},
			framerate: {get: t.getFPS, set: t.setFPS}
		})
	} catch (t) {
	}
	t.init = function () {
		t._inited || (t._inited = !0, t._times = [], t._tickTimes = [], t._startTime = t._getTime(), t._times.push(t._lastTime = 0), t.interval = t._interval)
	}, t.reset = function () {
		if (t._raf) {
			var e = window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || window.msCancelAnimationFrame;
			e && e(t._timerId)
		} else clearTimeout(t._timerId);
		t.removeAllEventListeners("tick"), t._timerId = t._times = t._tickTimes = null, t._startTime = t._lastTime = t._ticks = 0, t._inited = !1
	}, t.getMeasuredTickTime = function (e) {
		var A = 0, i = t._tickTimes;
		if (!i || i.length < 1) return -1;
		e = Math.min(i.length, e || 0 | t.getFPS());
		for (var n = 0; e > n; n++) A += i[n];
		return A / e
	}, t.getMeasuredFPS = function (e) {
		var A = t._times;
		return !A || A.length < 2 ? -1 : (e = Math.min(A.length - 1, e || 0 | t.getFPS()), 1e3 / ((A[0] - A[e]) / e))
	}, t.setPaused = function (e) {
		t.paused = e
	}, t.getPaused = function () {
		return t.paused
	}, t.getTime = function (e) {
		return t._startTime ? t._getTime() - (e ? t._pausedTime : 0) : -1
	}, t.getEventTime = function (e) {
		return t._startTime ? (t._lastTime || t._startTime) - (e ? t._pausedTime : 0) : -1
	}, t.getTicks = function (e) {
		return t._ticks - (e ? t._pausedTicks : 0)
	}, t._handleSynch = function () {
		t._timerId = null, t._setupTick(), t._getTime() - t._lastTime >= .97 * (t._interval - 1) && t._tick()
	}, t._handleRAF = function () {
		t._timerId = null, t._setupTick(), t._tick()
	}, t._handleTimeout = function () {
		t._timerId = null, t._setupTick(), t._tick()
	}, t._setupTick = function () {
		if (null == t._timerId) {
			var e = t.timingMode || t.useRAF && t.RAF_SYNCHED;
			if (e == t.RAF_SYNCHED || e == t.RAF) {
				var A = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame;
				if (A) return t._timerId = A(e == t.RAF ? t._handleRAF : t._handleSynch), void (t._raf = !0)
			}
			t._raf = !1, t._timerId = setTimeout(t._handleTimeout, t._interval)
		}
	}, t._tick = function () {
		var e = t.paused, A = t._getTime(), i = A - t._lastTime;
		if (t._lastTime = A, t._ticks++, e && (t._pausedTicks++, t._pausedTime += i), t.hasEventListener("tick")) {
			var n = new createjs.Event("tick"), a = t.maxDelta;
			n.delta = a && i > a ? a : i, n.paused = e, n.time = A, n.runTime = A - t._pausedTime, t.dispatchEvent(n)
		}
		for (t._tickTimes.unshift(t._getTime() - A); t._tickTimes.length > 100;) t._tickTimes.pop();
		for (t._times.unshift(A); t._times.length > 100;) t._times.pop()
	};
	var e = window.performance && (performance.now || performance.mozNow || performance.msNow || performance.oNow || performance.webkitNow);
	t._getTime = function () {
		return (e && e.call(performance) || (new Date).getTime()) - t._startTime
	}, createjs.Ticker = t
}(), this.createjs = this.createjs || {}, function () {
	"use strict";

	function t() {
		throw"UID cannot be instantiated"
	}

	t._nextID = 0, t.get = function () {
		return t._nextID++
	}, createjs.UID = t
}(), this.createjs = this.createjs || {}, function () {
	"use strict";

	function t(t, e, A, i, n, a, o, s, r, g, h) {
		this.Event_constructor(t, e, A), this.stageX = i, this.stageY = n, this.rawX = null == r ? i : r, this.rawY = null == g ? n : g, this.nativeEvent = a, this.pointerID = o, this.primary = !!s, this.relatedTarget = h
	}

	var e = createjs.extend(t, createjs.Event);
	e._get_localX = function () {
		return this.currentTarget.globalToLocal(this.rawX, this.rawY).x
	}, e._get_localY = function () {
		return this.currentTarget.globalToLocal(this.rawX, this.rawY).y
	}, e._get_isTouch = function () {
		return -1 !== this.pointerID
	};
	try {
		Object.defineProperties(e, {
			localX: {get: e._get_localX},
			localY: {get: e._get_localY},
			isTouch: {get: e._get_isTouch}
		})
	} catch (t) {
	}
	e.clone = function () {
		return new t(this.type, this.bubbles, this.cancelable, this.stageX, this.stageY, this.nativeEvent, this.pointerID, this.primary, this.rawX, this.rawY)
	}, e.toString = function () {
		return "[MouseEvent (type=" + this.type + " stageX=" + this.stageX + " stageY=" + this.stageY + ")]"
	}, createjs.MouseEvent = createjs.promote(t, "Event")
}(), this.createjs = this.createjs || {}, function () {
	"use strict";

	function t(t, e, A, i, n, a) {
		this.setValues(t, e, A, i, n, a)
	}

	var e = t.prototype;
	t.DEG_TO_RAD = Math.PI / 180, t.identity = null, e.setValues = function (t, e, A, i, n, a) {
		return this.a = null == t ? 1 : t, this.b = e || 0, this.c = A || 0, this.d = null == i ? 1 : i, this.tx = n || 0, this.ty = a || 0, this
	}, e.append = function (t, e, A, i, n, a) {
		var o = this.a, s = this.b, r = this.c, g = this.d;
		return (1 != t || 0 != e || 0 != A || 1 != i) && (this.a = o * t + r * e, this.b = s * t + g * e, this.c = o * A + r * i, this.d = s * A + g * i), this.tx = o * n + r * a + this.tx, this.ty = s * n + g * a + this.ty, this
	}, e.prepend = function (t, e, A, i, n, a) {
		var o = this.a, s = this.c, r = this.tx;
		return this.a = t * o + A * this.b, this.b = e * o + i * this.b, this.c = t * s + A * this.d, this.d = e * s + i * this.d, this.tx = t * r + A * this.ty + n, this.ty = e * r + i * this.ty + a, this
	}, e.appendMatrix = function (t) {
		return this.append(t.a, t.b, t.c, t.d, t.tx, t.ty)
	}, e.prependMatrix = function (t) {
		return this.prepend(t.a, t.b, t.c, t.d, t.tx, t.ty)
	}, e.appendTransform = function (e, A, i, n, a, o, s, r, g) {
		if (a % 360) var h = a * t.DEG_TO_RAD, l = Math.cos(h), c = Math.sin(h); else l = 1, c = 0;
		return o || s ? (o *= t.DEG_TO_RAD, s *= t.DEG_TO_RAD, this.append(Math.cos(s), Math.sin(s), -Math.sin(o), Math.cos(o), e, A), this.append(l * i, c * i, -c * n, l * n, 0, 0)) : this.append(l * i, c * i, -c * n, l * n, e, A), (r || g) && (this.tx -= r * this.a + g * this.c, this.ty -= r * this.b + g * this.d), this
	}, e.prependTransform = function (e, A, i, n, a, o, s, r, g) {
		if (a % 360) var h = a * t.DEG_TO_RAD, l = Math.cos(h), c = Math.sin(h); else l = 1, c = 0;
		return (r || g) && (this.tx -= r, this.ty -= g), o || s ? (o *= t.DEG_TO_RAD, s *= t.DEG_TO_RAD, this.prepend(l * i, c * i, -c * n, l * n, 0, 0), this.prepend(Math.cos(s), Math.sin(s), -Math.sin(o), Math.cos(o), e, A)) : this.prepend(l * i, c * i, -c * n, l * n, e, A), this
	}, e.rotate = function (e) {
		e *= t.DEG_TO_RAD;
		var A = Math.cos(e), i = Math.sin(e), n = this.a, a = this.b;
		return this.a = n * A + this.c * i, this.b = a * A + this.d * i, this.c = -n * i + this.c * A, this.d = -a * i + this.d * A, this
	}, e.skew = function (e, A) {
		return e *= t.DEG_TO_RAD, A *= t.DEG_TO_RAD, this.append(Math.cos(A), Math.sin(A), -Math.sin(e), Math.cos(e), 0, 0), this
	}, e.scale = function (t, e) {
		return this.a *= t, this.b *= t, this.c *= e, this.d *= e, this
	}, e.translate = function (t, e) {
		return this.tx += this.a * t + this.c * e, this.ty += this.b * t + this.d * e, this
	}, e.identity = function () {
		return this.a = this.d = 1, this.b = this.c = this.tx = this.ty = 0, this
	}, e.invert = function () {
		var t = this.a, e = this.b, A = this.c, i = this.d, n = this.tx, a = t * i - e * A;
		return this.a = i / a, this.b = -e / a, this.c = -A / a, this.d = t / a, this.tx = (A * this.ty - i * n) / a, this.ty = -(t * this.ty - e * n) / a, this
	}, e.isIdentity = function () {
		return 0 === this.tx && 0 === this.ty && 1 === this.a && 0 === this.b && 0 === this.c && 1 === this.d
	}, e.equals = function (t) {
		return this.tx === t.tx && this.ty === t.ty && this.a === t.a && this.b === t.b && this.c === t.c && this.d === t.d
	}, e.transformPoint = function (t, e, A) {
		return (A = A || {}).x = t * this.a + e * this.c + this.tx, A.y = t * this.b + e * this.d + this.ty, A
	}, e.decompose = function (e) {
		null == e && (e = {}), e.x = this.tx, e.y = this.ty, e.scaleX = Math.sqrt(this.a * this.a + this.b * this.b), e.scaleY = Math.sqrt(this.c * this.c + this.d * this.d);
		var A = Math.atan2(-this.c, this.d), i = Math.atan2(this.b, this.a);
		return 1e-5 > Math.abs(1 - A / i) ? (e.rotation = i / t.DEG_TO_RAD, this.a < 0 && this.d >= 0 && (e.rotation += e.rotation <= 0 ? 180 : -180), e.skewX = e.skewY = 0) : (e.skewX = A / t.DEG_TO_RAD, e.skewY = i / t.DEG_TO_RAD), e
	}, e.copy = function (t) {
		return this.setValues(t.a, t.b, t.c, t.d, t.tx, t.ty)
	}, e.clone = function () {
		return new t(this.a, this.b, this.c, this.d, this.tx, this.ty)
	}, e.toString = function () {
		return "[Matrix2D (a=" + this.a + " b=" + this.b + " c=" + this.c + " d=" + this.d + " tx=" + this.tx + " ty=" + this.ty + ")]"
	}, t.identity = new t, createjs.Matrix2D = t
}(), this.createjs = this.createjs || {}, function () {
	"use strict";

	function t(t, e, A, i, n) {
		this.setValues(t, e, A, i, n)
	}

	var e = t.prototype;
	e.setValues = function (t, e, A, i, n) {
		return this.visible = null == t || !!t, this.alpha = null == e ? 1 : e, this.shadow = A, this.compositeOperation = i, this.matrix = n || this.matrix && this.matrix.identity() || new createjs.Matrix2D, this
	}, e.append = function (t, e, A, i, n) {
		return this.alpha *= e, this.shadow = A || this.shadow, this.compositeOperation = i || this.compositeOperation, this.visible = this.visible && t, n && this.matrix.appendMatrix(n), this
	}, e.prepend = function (t, e, A, i, n) {
		return this.alpha *= e, this.shadow = this.shadow || A, this.compositeOperation = this.compositeOperation || i, this.visible = this.visible && t, n && this.matrix.prependMatrix(n), this
	}, e.identity = function () {
		return this.visible = !0, this.alpha = 1, this.shadow = this.compositeOperation = null, this.matrix.identity(), this
	}, e.clone = function () {
		return new t(this.alpha, this.shadow, this.compositeOperation, this.visible, this.matrix.clone())
	}, createjs.DisplayProps = t
}(), this.createjs = this.createjs || {}, function () {
	"use strict";

	function t(t, e) {
		this.setValues(t, e)
	}

	var e = t.prototype;
	e.setValues = function (t, e) {
		return this.x = t || 0, this.y = e || 0, this
	}, e.copy = function (t) {
		return this.x = t.x, this.y = t.y, this
	}, e.clone = function () {
		return new t(this.x, this.y)
	}, e.toString = function () {
		return "[Point (x=" + this.x + " y=" + this.y + ")]"
	}, createjs.Point = t
}(), this.createjs = this.createjs || {}, function () {
	"use strict";

	function t(t, e, A, i) {
		this.setValues(t, e, A, i)
	}

	var e = t.prototype;
	e.setValues = function (t, e, A, i) {
		return this.x = t || 0, this.y = e || 0, this.width = A || 0, this.height = i || 0, this
	}, e.extend = function (t, e, A, i) {
		return i = i || 0, t + (A = A || 0) > this.x + this.width && (this.width = t + A - this.x), e + i > this.y + this.height && (this.height = e + i - this.y), t < this.x && (this.width += this.x - t, this.x = t), e < this.y && (this.height += this.y - e, this.y = e), this
	}, e.pad = function (t, e, A, i) {
		return this.x -= e, this.y -= t, this.width += e + i, this.height += t + A, this
	}, e.copy = function (t) {
		return this.setValues(t.x, t.y, t.width, t.height)
	}, e.contains = function (t, e, A, i) {
		return A = A || 0, i = i || 0, t >= this.x && t + A <= this.x + this.width && e >= this.y && e + i <= this.y + this.height
	}, e.union = function (t) {
		return this.clone().extend(t.x, t.y, t.width, t.height)
	}, e.intersection = function (e) {
		var A = e.x, i = e.y, n = A + e.width, a = i + e.height;
		return this.x > A && (A = this.x), this.y > i && (i = this.y), this.x + this.width < n && (n = this.x + this.width), this.y + this.height < a && (a = this.y + this.height), A >= n || i >= a ? null : new t(A, i, n - A, a - i)
	}, e.intersects = function (t) {
		return t.x <= this.x + this.width && this.x <= t.x + t.width && t.y <= this.y + this.height && this.y <= t.y + t.height
	}, e.isEmpty = function () {
		return this.width <= 0 || this.height <= 0
	}, e.clone = function () {
		return new t(this.x, this.y, this.width, this.height)
	}, e.toString = function () {
		return "[Rectangle (x=" + this.x + " y=" + this.y + " width=" + this.width + " height=" + this.height + ")]"
	}, createjs.Rectangle = t
}(), this.createjs = this.createjs || {}, function () {
	"use strict";

	function t(t, e, A, i, n, a, o) {
		t.addEventListener && (this.target = t, this.overLabel = null == A ? "over" : A, this.outLabel = null == e ? "out" : e, this.downLabel = null == i ? "down" : i, this.play = n, this._isPressed = !1, this._isOver = !1, this._enabled = !1, t.mouseChildren = !1, this.enabled = !0, this.handleEvent({}), a && (o && (a.actionsEnabled = !1, a.gotoAndStop && a.gotoAndStop(o)), t.hitArea = a))
	}

	var e = t.prototype;
	e.setEnabled = function (t) {
		if (t != this._enabled) {
			var e = this.target;
			this._enabled = t, t ? (e.cursor = "pointer", e.addEventListener("rollover", this), e.addEventListener("rollout", this), e.addEventListener("mousedown", this), e.addEventListener("pressup", this), e._reset && (e.__reset = e._reset, e._reset = this._reset)) : (e.cursor = null, e.removeEventListener("rollover", this), e.removeEventListener("rollout", this), e.removeEventListener("mousedown", this), e.removeEventListener("pressup", this), e.__reset && (e._reset = e.__reset, delete e.__reset))
		}
	}, e.getEnabled = function () {
		return this._enabled
	};
	try {
		Object.defineProperties(e, {enabled: {get: e.getEnabled, set: e.setEnabled}})
	} catch (t) {
	}
	e.toString = function () {
		return "[ButtonHelper]"
	}, e.handleEvent = function (t) {
		var e, A = this.target, i = t.type;
		"mousedown" == i ? (this._isPressed = !0, e = this.downLabel) : "pressup" == i ? (this._isPressed = !1, e = this._isOver ? this.overLabel : this.outLabel) : "rollover" == i ? (this._isOver = !0, e = this._isPressed ? this.downLabel : this.overLabel) : (this._isOver = !1, e = this._isPressed ? this.overLabel : this.outLabel), this.play ? A.gotoAndPlay && A.gotoAndPlay(e) : A.gotoAndStop && A.gotoAndStop(e)
	}, e._reset = function () {
		var t = this.paused;
		this.__reset(), this.paused = t
	}, createjs.ButtonHelper = t
}(), this.createjs = this.createjs || {}, function () {
	"use strict";

	function t(t, e, A, i) {
		this.color = t || "black", this.offsetX = e || 0, this.offsetY = A || 0, this.blur = i || 0
	}

	var e = t.prototype;
	t.identity = new t("transparent", 0, 0, 0), e.toString = function () {
		return "[Shadow]"
	}, e.clone = function () {
		return new t(this.color, this.offsetX, this.offsetY, this.blur)
	}, createjs.Shadow = t
}(), this.createjs = this.createjs || {}, function () {
	"use strict";

	function t(t) {
		this.EventDispatcher_constructor(), this.complete = !0, this.framerate = 0, this._animations = null, this._frames = null, this._images = null, this._data = null, this._loadCount = 0, this._frameHeight = 0, this._frameWidth = 0, this._numFrames = 0, this._regX = 0, this._regY = 0, this._spacing = 0, this._margin = 0, this._parseData(t)
	}

	var e = createjs.extend(t, createjs.EventDispatcher);
	e.getAnimations = function () {
		return this._animations.slice()
	};
	try {
		Object.defineProperties(e, {animations: {get: e.getAnimations}})
	} catch (t) {
	}
	e.getNumFrames = function (t) {
		if (null == t) return this._frames ? this._frames.length : this._numFrames || 0;
		var e = this._data[t];
		return null == e ? 0 : e.frames.length
	}, e.getAnimation = function (t) {
		return this._data[t]
	}, e.getFrame = function (t) {
		var e;
		return this._frames && (e = this._frames[t]) ? e : null
	}, e.getFrameBounds = function (t, e) {
		var A = this.getFrame(t);
		return A ? (e || new createjs.Rectangle).setValues(-A.regX, -A.regY, A.rect.width, A.rect.height) : null
	}, e.toString = function () {
		return "[SpriteSheet]"
	}, e.clone = function () {
		throw"SpriteSheet cannot be cloned."
	}, e._parseData = function (t) {
		var e, A, i, n;
		if (null != t) {
			if (this.framerate = t.framerate || 0, t.images && (A = t.images.length) > 0) for (n = this._images = [], e = 0; A > e; e++) {
				var a = t.images[e];
				if ("string" == typeof a) {
					var o = a;
					(a = document.createElement("img")).src = o
				}
				n.push(a), a.getContext || a.naturalWidth || (this._loadCount++, this.complete = !1, function (t, e) {
					a.onload = function () {
						t._handleImageLoad(e)
					}
				}(this, o), function (t, e) {
					a.onerror = function () {
						t._handleImageError(e)
					}
				}(this, o))
			}
			if (null == t.frames) ; else if (Array.isArray(t.frames)) for (this._frames = [], e = 0, A = (n = t.frames).length; A > e; e++) {
				var s = n[e];
				this._frames.push({
					image: this._images[s[4] ? s[4] : 0],
					rect: new createjs.Rectangle(s[0], s[1], s[2], s[3]),
					regX: s[5] || 0,
					regY: s[6] || 0
				})
			} else i = t.frames, this._frameWidth = i.width, this._frameHeight = i.height, this._regX = i.regX || 0, this._regY = i.regY || 0, this._spacing = i.spacing || 0, this._margin = i.margin || 0, this._numFrames = i.count, 0 == this._loadCount && this._calculateFrames();
			var r;
			if (this._animations = [], null != (i = t.animations)) for (r in this._data = {}, i) {
				var g = {name: r}, h = i[r];
				if ("number" == typeof h) n = g.frames = [h]; else if (Array.isArray(h)) if (1 == h.length) g.frames = [h[0]]; else for (g.speed = h[3], g.next = h[2], n = g.frames = [], e = h[0]; e <= h[1]; e++) n.push(e); else {
					g.speed = h.speed, g.next = h.next;
					var l = h.frames;
					n = g.frames = "number" == typeof l ? [l] : l.slice(0)
				}
				(!0 === g.next || void 0 === g.next) && (g.next = r), (!1 === g.next || n.length < 2 && g.next == r) && (g.next = null), g.speed || (g.speed = 1), this._animations.push(r), this._data[r] = g
			}
		}
	}, e._handleImageLoad = function (t) {
		0 == --this._loadCount && (this._calculateFrames(), this.complete = !0, this.dispatchEvent("complete"))
	}, e._handleImageError = function (t) {
		var e = new createjs.Event("error");
		e.src = t, this.dispatchEvent(e), 0 == --this._loadCount && this.dispatchEvent("complete")
	}, e._calculateFrames = function () {
		if (!this._frames && 0 != this._frameWidth) {
			this._frames = [];
			var t = this._numFrames || 1e5, e = 0, A = this._frameWidth, i = this._frameHeight, n = this._spacing,
				a = this._margin;
			t:for (var o = 0, s = this._images; o < s.length; o++) for (var r = s[o], g = r.width, h = r.height, l = a; h - a - i >= l;) {
				for (var c = a; g - a - A >= c;) {
					if (e >= t) break t;
					e++, this._frames.push({
						image: r,
						rect: new createjs.Rectangle(c, l, A, i),
						regX: this._regX,
						regY: this._regY
					}), c += A + n
				}
				l += i + n
			}
			this._numFrames = e
		}
	}, createjs.SpriteSheet = createjs.promote(t, "EventDispatcher")
}(), this.createjs = this.createjs || {}, function () {
	"use strict";

	function t() {
		this.command = null, this._stroke = null, this._strokeStyle = null, this._oldStrokeStyle = null, this._strokeDash = null, this._oldStrokeDash = null, this._strokeIgnoreScale = !1, this._fill = null, this._instructions = [], this._commitIndex = 0, this._activeInstructions = [], this._dirty = !1, this._storeIndex = 0, this.clear()
	}

	var e = t.prototype, A = t;
	t.getRGB = function (t, e, A, i) {
		return null != t && null == A && (i = e, A = 255 & t, e = t >> 8 & 255, t = t >> 16 & 255), null == i ? "rgb(" + t + "," + e + "," + A + ")" : "rgba(" + t + "," + e + "," + A + "," + i + ")"
	}, t.getHSL = function (t, e, A, i) {
		return null == i ? "hsl(" + t % 360 + "," + e + "%," + A + "%)" : "hsla(" + t % 360 + "," + e + "%," + A + "%," + i + ")"
	}, t.BASE_64 = {
		A: 0,
		B: 1,
		C: 2,
		D: 3,
		E: 4,
		F: 5,
		G: 6,
		H: 7,
		I: 8,
		J: 9,
		K: 10,
		L: 11,
		M: 12,
		N: 13,
		O: 14,
		P: 15,
		Q: 16,
		R: 17,
		S: 18,
		T: 19,
		U: 20,
		V: 21,
		W: 22,
		X: 23,
		Y: 24,
		Z: 25,
		a: 26,
		b: 27,
		c: 28,
		d: 29,
		e: 30,
		f: 31,
		g: 32,
		h: 33,
		i: 34,
		j: 35,
		k: 36,
		l: 37,
		m: 38,
		n: 39,
		o: 40,
		p: 41,
		q: 42,
		r: 43,
		s: 44,
		t: 45,
		u: 46,
		v: 47,
		w: 48,
		x: 49,
		y: 50,
		z: 51,
		0: 52,
		1: 53,
		2: 54,
		3: 55,
		4: 56,
		5: 57,
		6: 58,
		7: 59,
		8: 60,
		9: 61,
		"+": 62,
		"/": 63
	}, t.STROKE_CAPS_MAP = ["butt", "round", "square"], t.STROKE_JOINTS_MAP = ["miter", "round", "bevel"];
	var i = createjs.createCanvas ? createjs.createCanvas() : document.createElement("canvas");
	i.getContext && (t._ctx = i.getContext("2d"), i.width = i.height = 1), e.getInstructions = function () {
		return this._updateInstructions(), this._instructions
	};
	try {
		Object.defineProperties(e, {instructions: {get: e.getInstructions}})
	} catch (t) {
	}
	e.isEmpty = function () {
		return !(this._instructions.length || this._activeInstructions.length)
	}, e.draw = function (t, e) {
		this._updateInstructions();
		for (var A = this._instructions, i = this._storeIndex, n = A.length; n > i; i++) A[i].exec(t, e)
	}, e.drawAsPath = function (t) {
		this._updateInstructions();
		for (var e, A = this._instructions, i = this._storeIndex, n = A.length; n > i; i++) !1 !== (e = A[i]).path && e.exec(t)
	}, e.moveTo = function (t, e) {
		return this.append(new A.MoveTo(t, e), !0)
	}, e.lineTo = function (t, e) {
		return this.append(new A.LineTo(t, e))
	}, e.arcTo = function (t, e, i, n, a) {
		return this.append(new A.ArcTo(t, e, i, n, a))
	}, e.arc = function (t, e, i, n, a, o) {
		return this.append(new A.Arc(t, e, i, n, a, o))
	}, e.quadraticCurveTo = function (t, e, i, n) {
		return this.append(new A.QuadraticCurveTo(t, e, i, n))
	}, e.bezierCurveTo = function (t, e, i, n, a, o) {
		return this.append(new A.BezierCurveTo(t, e, i, n, a, o))
	}, e.rect = function (t, e, i, n) {
		return this.append(new A.Rect(t, e, i, n))
	}, e.closePath = function () {
		return this._activeInstructions.length ? this.append(new A.ClosePath) : this
	}, e.clear = function () {
		return this._instructions.length = this._activeInstructions.length = this._commitIndex = 0, this._strokeStyle = this._oldStrokeStyle = this._stroke = this._fill = this._strokeDash = this._oldStrokeDash = null, this._dirty = this._strokeIgnoreScale = !1, this
	}, e.beginFill = function (t) {
		return this._setFill(t ? new A.Fill(t) : null)
	}, e.beginLinearGradientFill = function (t, e, i, n, a, o) {
		return this._setFill((new A.Fill).linearGradient(t, e, i, n, a, o))
	}, e.beginRadialGradientFill = function (t, e, i, n, a, o, s, r) {
		return this._setFill((new A.Fill).radialGradient(t, e, i, n, a, o, s, r))
	}, e.beginBitmapFill = function (t, e, i) {
		return this._setFill(new A.Fill(null, i).bitmap(t, e))
	}, e.endFill = function () {
		return this.beginFill()
	}, e.setStrokeStyle = function (t, e, i, n, a) {
		return this._updateInstructions(!0), this._strokeStyle = this.command = new A.StrokeStyle(t, e, i, n, a), this._stroke && (this._stroke.ignoreScale = a), this._strokeIgnoreScale = a, this
	}, e.setStrokeDash = function (t, e) {
		return this._updateInstructions(!0), this._strokeDash = this.command = new A.StrokeDash(t, e), this
	}, e.beginStroke = function (t) {
		return this._setStroke(t ? new A.Stroke(t) : null)
	}, e.beginLinearGradientStroke = function (t, e, i, n, a, o) {
		return this._setStroke((new A.Stroke).linearGradient(t, e, i, n, a, o))
	}, e.beginRadialGradientStroke = function (t, e, i, n, a, o, s, r) {
		return this._setStroke((new A.Stroke).radialGradient(t, e, i, n, a, o, s, r))
	}, e.beginBitmapStroke = function (t, e) {
		return this._setStroke((new A.Stroke).bitmap(t, e))
	}, e.endStroke = function () {
		return this.beginStroke()
	}, e.curveTo = e.quadraticCurveTo, e.drawRect = e.rect, e.drawRoundRect = function (t, e, A, i, n) {
		return this.drawRoundRectComplex(t, e, A, i, n, n, n, n)
	}, e.drawRoundRectComplex = function (t, e, i, n, a, o, s, r) {
		return this.append(new A.RoundRect(t, e, i, n, a, o, s, r))
	}, e.drawCircle = function (t, e, i) {
		return this.append(new A.Circle(t, e, i))
	}, e.drawEllipse = function (t, e, i, n) {
		return this.append(new A.Ellipse(t, e, i, n))
	}, e.drawPolyStar = function (t, e, i, n, a, o) {
		return this.append(new A.PolyStar(t, e, i, n, a, o))
	}, e.append = function (t, e) {
		return this._activeInstructions.push(t), this.command = t, e || (this._dirty = !0), this
	}, e.decodePath = function (e) {
		for (var A = [this.moveTo, this.lineTo, this.quadraticCurveTo, this.bezierCurveTo, this.closePath], i = [2, 2, 4, 6, 0], n = 0, a = e.length, o = [], s = 0, r = 0, g = t.BASE_64; a > n;) {
			var h = e.charAt(n), l = g[h], c = l >> 3, u = A[c];
			if (!u || 3 & l) throw"bad path data (@" + n + "): " + h;
			var d = i[c];
			c || (s = r = 0), o.length = 0, n++;
			for (var p = 2 + (l >> 2 & 1), Q = 0; d > Q; Q++) {
				var I = g[e.charAt(n)], f = I >> 5 ? -1 : 1;
				I = (31 & I) << 6 | g[e.charAt(n + 1)], 3 == p && (I = I << 6 | g[e.charAt(n + 2)]), I = f * I / 10, Q % 2 ? s = I += s : r = I += r, o[Q] = I, n += p
			}
			u.apply(this, o)
		}
		return this
	}, e.store = function () {
		return this._updateInstructions(!0), this._storeIndex = this._instructions.length, this
	}, e.unstore = function () {
		return this._storeIndex = 0, this
	}, e.clone = function () {
		var e = new t;
		return e.command = this.command, e._stroke = this._stroke, e._strokeStyle = this._strokeStyle, e._strokeDash = this._strokeDash, e._strokeIgnoreScale = this._strokeIgnoreScale, e._fill = this._fill, e._instructions = this._instructions.slice(), e._commitIndex = this._commitIndex, e._activeInstructions = this._activeInstructions.slice(), e._dirty = this._dirty, e._storeIndex = this._storeIndex, e
	}, e.toString = function () {
		return "[Graphics]"
	}, e.mt = e.moveTo, e.lt = e.lineTo, e.at = e.arcTo, e.bt = e.bezierCurveTo, e.qt = e.quadraticCurveTo, e.a = e.arc, e.r = e.rect, e.cp = e.closePath, e.c = e.clear, e.f = e.beginFill, e.lf = e.beginLinearGradientFill, e.rf = e.beginRadialGradientFill, e.bf = e.beginBitmapFill, e.ef = e.endFill, e.ss = e.setStrokeStyle, e.sd = e.setStrokeDash, e.s = e.beginStroke, e.ls = e.beginLinearGradientStroke, e.rs = e.beginRadialGradientStroke, e.bs = e.beginBitmapStroke, e.es = e.endStroke, e.dr = e.drawRect, e.rr = e.drawRoundRect, e.rc = e.drawRoundRectComplex, e.dc = e.drawCircle, e.de = e.drawEllipse, e.dp = e.drawPolyStar, e.p = e.decodePath, e._updateInstructions = function (e) {
		var A = this._instructions, i = this._activeInstructions, n = this._commitIndex;
		if (this._dirty && i.length) {
			A.length = n, A.push(t.beginCmd);
			var a = i.length, o = A.length;
			A.length = o + a;
			for (var s = 0; a > s; s++) A[s + o] = i[s];
			this._fill && A.push(this._fill), this._stroke && (this._strokeDash !== this._oldStrokeDash && (this._oldStrokeDash = this._strokeDash, A.push(this._strokeDash)), this._strokeStyle !== this._oldStrokeStyle && (this._oldStrokeStyle = this._strokeStyle, A.push(this._strokeStyle)), A.push(this._stroke)), this._dirty = !1
		}
		e && (i.length = 0, this._commitIndex = A.length)
	}, e._setFill = function (t) {
		return this._updateInstructions(!0), this.command = this._fill = t, this
	}, e._setStroke = function (t) {
		return this._updateInstructions(!0), (this.command = this._stroke = t) && (t.ignoreScale = this._strokeIgnoreScale), this
	}, (A.LineTo = function (t, e) {
		this.x = t, this.y = e
	}).prototype.exec = function (t) {
		t.lineTo(this.x, this.y)
	}, (A.MoveTo = function (t, e) {
		this.x = t, this.y = e
	}).prototype.exec = function (t) {
		t.moveTo(this.x, this.y)
	}, (A.ArcTo = function (t, e, A, i, n) {
		this.x1 = t, this.y1 = e, this.x2 = A, this.y2 = i, this.radius = n
	}).prototype.exec = function (t) {
		t.arcTo(this.x1, this.y1, this.x2, this.y2, this.radius)
	}, (A.Arc = function (t, e, A, i, n, a) {
		this.x = t, this.y = e, this.radius = A, this.startAngle = i, this.endAngle = n, this.anticlockwise = !!a
	}).prototype.exec = function (t) {
		t.arc(this.x, this.y, this.radius, this.startAngle, this.endAngle, this.anticlockwise)
	}, (A.QuadraticCurveTo = function (t, e, A, i) {
		this.cpx = t, this.cpy = e, this.x = A, this.y = i
	}).prototype.exec = function (t) {
		t.quadraticCurveTo(this.cpx, this.cpy, this.x, this.y)
	}, (A.BezierCurveTo = function (t, e, A, i, n, a) {
		this.cp1x = t, this.cp1y = e, this.cp2x = A, this.cp2y = i, this.x = n, this.y = a
	}).prototype.exec = function (t) {
		t.bezierCurveTo(this.cp1x, this.cp1y, this.cp2x, this.cp2y, this.x, this.y)
	}, (A.Rect = function (t, e, A, i) {
		this.x = t, this.y = e, this.w = A, this.h = i
	}).prototype.exec = function (t) {
		t.rect(this.x, this.y, this.w, this.h)
	}, (A.ClosePath = function () {
	}).prototype.exec = function (t) {
		t.closePath()
	}, (A.BeginPath = function () {
	}).prototype.exec = function (t) {
		t.beginPath()
	}, (e = (A.Fill = function (t, e) {
		this.style = t, this.matrix = e
	}).prototype).exec = function (t) {
		if (this.style) {
			t.fillStyle = this.style;
			var e = this.matrix;
			e && (t.save(), t.transform(e.a, e.b, e.c, e.d, e.tx, e.ty)), t.fill(), e && t.restore()
		}
	}, e.linearGradient = function (e, A, i, n, a, o) {
		for (var s = this.style = t._ctx.createLinearGradient(i, n, a, o), r = 0, g = e.length; g > r; r++) s.addColorStop(A[r], e[r]);
		return s.props = {colors: e, ratios: A, x0: i, y0: n, x1: a, y1: o, type: "linear"}, this
	}, e.radialGradient = function (e, A, i, n, a, o, s, r) {
		for (var g = this.style = t._ctx.createRadialGradient(i, n, a, o, s, r), h = 0, l = e.length; l > h; h++) g.addColorStop(A[h], e[h]);
		return g.props = {colors: e, ratios: A, x0: i, y0: n, r0: a, x1: o, y1: s, r1: r, type: "radial"}, this
	}, e.bitmap = function (e, A) {
		(e.naturalWidth || e.getContext || e.readyState >= 2) && ((this.style = t._ctx.createPattern(e, A || "")).props = {
			image: e,
			repetition: A,
			type: "bitmap"
		});
		return this
	}, e.path = !1, (e = (A.Stroke = function (t, e) {
		this.style = t, this.ignoreScale = e
	}).prototype).exec = function (t) {
		this.style && (t.strokeStyle = this.style, this.ignoreScale && (t.save(), t.setTransform(1, 0, 0, 1, 0, 0)), t.stroke(), this.ignoreScale && t.restore())
	}, e.linearGradient = A.Fill.prototype.linearGradient, e.radialGradient = A.Fill.prototype.radialGradient, e.bitmap = A.Fill.prototype.bitmap, e.path = !1, (e = (A.StrokeStyle = function (t, e, A, i, n) {
		this.width = t, this.caps = e, this.joints = A, this.miterLimit = i, this.ignoreScale = n
	}).prototype).exec = function (e) {
		e.lineWidth = null == this.width ? "1" : this.width, e.lineCap = null == this.caps ? "butt" : isNaN(this.caps) ? this.caps : t.STROKE_CAPS_MAP[this.caps], e.lineJoin = null == this.joints ? "miter" : isNaN(this.joints) ? this.joints : t.STROKE_JOINTS_MAP[this.joints], e.miterLimit = null == this.miterLimit ? "10" : this.miterLimit, e.ignoreScale = null != this.ignoreScale && this.ignoreScale
	}, e.path = !1, (A.StrokeDash = function (t, e) {
		this.segments = t, this.offset = e || 0
	}).prototype.exec = function (t) {
		t.setLineDash && (t.setLineDash(this.segments || A.StrokeDash.EMPTY_SEGMENTS), t.lineDashOffset = this.offset || 0)
	}, A.StrokeDash.EMPTY_SEGMENTS = [], (A.RoundRect = function (t, e, A, i, n, a, o, s) {
		this.x = t, this.y = e, this.w = A, this.h = i, this.radiusTL = n, this.radiusTR = a, this.radiusBR = o, this.radiusBL = s
	}).prototype.exec = function (t) {
		var e = (g > r ? r : g) / 2, A = 0, i = 0, n = 0, a = 0, o = this.x, s = this.y, r = this.w, g = this.h,
			h = this.radiusTL, l = this.radiusTR, c = this.radiusBR, u = this.radiusBL;
		0 > h && (h *= A = -1), h > e && (h = e), 0 > l && (l *= i = -1), l > e && (l = e), 0 > c && (c *= n = -1), c > e && (c = e), 0 > u && (u *= a = -1), u > e && (u = e), t.moveTo(o + r - l, s), t.arcTo(o + r + l * i, s - l * i, o + r, s + l, l), t.lineTo(o + r, s + g - c), t.arcTo(o + r + c * n, s + g + c * n, o + r - c, s + g, c), t.lineTo(o + u, s + g), t.arcTo(o - u * a, s + g + u * a, o, s + g - u, u), t.lineTo(o, s + h), t.arcTo(o - h * A, s - h * A, o + h, s, h), t.closePath()
	}, (A.Circle = function (t, e, A) {
		this.x = t, this.y = e, this.radius = A
	}).prototype.exec = function (t) {
		t.arc(this.x, this.y, this.radius, 0, 2 * Math.PI)
	}, (A.Ellipse = function (t, e, A, i) {
		this.x = t, this.y = e, this.w = A, this.h = i
	}).prototype.exec = function (t) {
		var e = this.x, A = this.y, i = this.w, n = this.h, a = .5522848, o = i / 2 * a, s = n / 2 * a, r = e + i,
			g = A + n, h = e + i / 2, l = A + n / 2;
		t.moveTo(e, l), t.bezierCurveTo(e, l - s, h - o, A, h, A), t.bezierCurveTo(h + o, A, r, l - s, r, l), t.bezierCurveTo(r, l + s, h + o, g, h, g), t.bezierCurveTo(h - o, g, e, l + s, e, l)
	}, (A.PolyStar = function (t, e, A, i, n, a) {
		this.x = t, this.y = e, this.radius = A, this.sides = i, this.pointSize = n, this.angle = a
	}).prototype.exec = function (t) {
		var e = this.x, A = this.y, i = this.radius, n = (this.angle || 0) / 180 * Math.PI, a = this.sides,
			o = 1 - (this.pointSize || 0), s = Math.PI / a;
		t.moveTo(e + Math.cos(n) * i, A + Math.sin(n) * i);
		for (var r = 0; a > r; r++) n += s, 1 != o && t.lineTo(e + Math.cos(n) * i * o, A + Math.sin(n) * i * o), n += s, t.lineTo(e + Math.cos(n) * i, A + Math.sin(n) * i);
		t.closePath()
	}, t.beginCmd = new A.BeginPath, createjs.Graphics = t
}(), this.createjs = this.createjs || {}, function () {
	"use strict";

	function t() {
		this.EventDispatcher_constructor(), this.alpha = 1, this.cacheCanvas = null, this.cacheID = 0, this.id = createjs.UID.get(), this.mouseEnabled = !0, this.tickEnabled = !0, this.name = null, this.parent = null, this.regX = 0, this.regY = 0, this.rotation = 0, this.scaleX = 1, this.scaleY = 1, this.skewX = 0, this.skewY = 0, this.shadow = null, this.visible = !0, this.x = 0, this.y = 0, this.transformMatrix = null, this.compositeOperation = null, this.snapToPixel = !0, this.filters = null, this.mask = null, this.hitArea = null, this.cursor = null, this._cacheOffsetX = 0, this._cacheOffsetY = 0, this._filterOffsetX = 0, this._filterOffsetY = 0, this._cacheScale = 1, this._cacheDataURLID = 0, this._cacheDataURL = null, this._props = new createjs.DisplayProps, this._rectangle = new createjs.Rectangle, this._bounds = null
	}

	var e = createjs.extend(t, createjs.EventDispatcher);
	t._MOUSE_EVENTS = ["click", "dblclick", "mousedown", "mouseout", "mouseover", "pressmove", "pressup", "rollout", "rollover"], t.suppressCrossDomainErrors = !1, t._snapToPixelEnabled = !1;
	var A = createjs.createCanvas ? createjs.createCanvas() : document.createElement("canvas");
	A.getContext && (t._hitTestCanvas = A, t._hitTestContext = A.getContext("2d"), A.width = A.height = 1), t._nextCacheID = 1, e.getStage = function () {
		for (var t = this, e = createjs.Stage; t.parent;) t = t.parent;
		return t instanceof e ? t : null
	};
	try {
		Object.defineProperties(e, {stage: {get: e.getStage}})
	} catch (t) {
	}
	e.isVisible = function () {
		return !!(this.visible && this.alpha > 0 && 0 != this.scaleX && 0 != this.scaleY)
	}, e.draw = function (t, e) {
		var A = this.cacheCanvas;
		if (e || !A) return !1;
		var i = this._cacheScale;
		return t.drawImage(A, this._cacheOffsetX + this._filterOffsetX, this._cacheOffsetY + this._filterOffsetY, A.width / i, A.height / i), !0
	}, e.updateContext = function (e) {
		var A = this, i = A.mask, n = A._props.matrix;
		i && i.graphics && !i.graphics.isEmpty() && (i.getMatrix(n), e.transform(n.a, n.b, n.c, n.d, n.tx, n.ty), i.graphics.drawAsPath(e), e.clip(), n.invert(), e.transform(n.a, n.b, n.c, n.d, n.tx, n.ty)), this.getMatrix(n);
		var a = n.tx, o = n.ty;
		t._snapToPixelEnabled && A.snapToPixel && (a = a + (0 > a ? -.5 : .5) | 0, o = o + (0 > o ? -.5 : .5) | 0), e.transform(n.a, n.b, n.c, n.d, a, o), e.globalAlpha *= A.alpha, A.compositeOperation && (e.globalCompositeOperation = A.compositeOperation), A.shadow && this._applyShadow(e, A.shadow)
	}, e.cache = function (t, e, A, i, n) {
		n = n || 1, this.cacheCanvas || (this.cacheCanvas = createjs.createCanvas ? createjs.createCanvas() : document.createElement("canvas")), this._cacheWidth = A, this._cacheHeight = i, this._cacheOffsetX = t, this._cacheOffsetY = e, this._cacheScale = n, this.updateCache()
	}, e.updateCache = function (e) {
		var A = this.cacheCanvas;
		if (!A) throw"cache() must be called before updateCache()";
		var i = this._cacheScale, n = this._cacheOffsetX * i, a = this._cacheOffsetY * i, o = this._cacheWidth,
			s = this._cacheHeight, r = A.getContext("2d"), g = this._getFilterBounds();
		n += this._filterOffsetX = g.x, a += this._filterOffsetY = g.y, o = Math.ceil(o * i) + g.width, s = Math.ceil(s * i) + g.height, o != A.width || s != A.height ? (A.width = o, A.height = s) : e || r.clearRect(0, 0, o + 1, s + 1), r.save(), r.globalCompositeOperation = e, r.setTransform(i, 0, 0, i, -n, -a), this.draw(r, !0), this._applyFilters(), r.restore(), this.cacheID = t._nextCacheID++
	}, e.uncache = function () {
		this._cacheDataURL = this.cacheCanvas = null, this.cacheID = this._cacheOffsetX = this._cacheOffsetY = this._filterOffsetX = this._filterOffsetY = 0, this._cacheScale = 1
	}, e.getCacheDataURL = function () {
		return this.cacheCanvas ? (this.cacheID != this._cacheDataURLID && (this._cacheDataURL = this.cacheCanvas.toDataURL()), this._cacheDataURL) : null
	}, e.localToGlobal = function (t, e, A) {
		return this.getConcatenatedMatrix(this._props.matrix).transformPoint(t, e, A || new createjs.Point)
	}, e.globalToLocal = function (t, e, A) {
		return this.getConcatenatedMatrix(this._props.matrix).invert().transformPoint(t, e, A || new createjs.Point)
	}, e.localToLocal = function (t, e, A, i) {
		return i = this.localToGlobal(t, e, i), A.globalToLocal(i.x, i.y, i)
	}, e.setTransform = function (t, e, A, i, n, a, o, s, r) {
		return this.x = t || 0, this.y = e || 0, this.scaleX = null == A ? 1 : A, this.scaleY = null == i ? 1 : i, this.rotation = n || 0, this.skewX = a || 0, this.skewY = o || 0, this.regX = s || 0, this.regY = r || 0, this
	}, e.getMatrix = function (t) {
		var e = this, A = t && t.identity() || new createjs.Matrix2D;
		return e.transformMatrix ? A.copy(e.transformMatrix) : A.appendTransform(e.x, e.y, e.scaleX, e.scaleY, e.rotation, e.skewX, e.skewY, e.regX, e.regY)
	}, e.getConcatenatedMatrix = function (t) {
		for (var e = this, A = this.getMatrix(t); e = e.parent;) A.prependMatrix(e.getMatrix(e._props.matrix));
		return A
	}, e.getConcatenatedDisplayProps = function (t) {
		t = t ? t.identity() : new createjs.DisplayProps;
		var e = this, A = e.getMatrix(t.matrix);
		do {
			t.prepend(e.visible, e.alpha, e.shadow, e.compositeOperation), e != this && A.prependMatrix(e.getMatrix(e._props.matrix))
		} while (e = e.parent);
		return t
	}, e.hitTest = function (e, A) {
		var i = t._hitTestContext;
		i.setTransform(1, 0, 0, 1, -e, -A), this.draw(i);
		var n = this._testHit(i);
		return i.setTransform(1, 0, 0, 1, 0, 0), i.clearRect(0, 0, 2, 2), n
	}, e.set = function (t) {
		for (var e in t) this[e] = t[e];
		return this
	}, e.getBounds = function () {
		if (this._bounds) return this._rectangle.copy(this._bounds);
		var t = this.cacheCanvas;
		if (t) {
			var e = this._cacheScale;
			return this._rectangle.setValues(this._cacheOffsetX, this._cacheOffsetY, t.width / e, t.height / e)
		}
		return null
	}, e.getTransformedBounds = function () {
		return this._getBounds()
	}, e.setBounds = function (t, e, A, i) {
		null == t && (this._bounds = t), this._bounds = (this._bounds || new createjs.Rectangle).setValues(t, e, A, i)
	}, e.clone = function () {
		return this._cloneProps(new t)
	}, e.toString = function () {
		return "[DisplayObject (name=" + this.name + ")]"
	}, e._cloneProps = function (t) {
		return t.alpha = this.alpha, t.mouseEnabled = this.mouseEnabled, t.tickEnabled = this.tickEnabled, t.name = this.name, t.regX = this.regX, t.regY = this.regY, t.rotation = this.rotation, t.scaleX = this.scaleX, t.scaleY = this.scaleY, t.shadow = this.shadow, t.skewX = this.skewX, t.skewY = this.skewY, t.visible = this.visible, t.x = this.x, t.y = this.y, t.compositeOperation = this.compositeOperation, t.snapToPixel = this.snapToPixel, t.filters = null == this.filters ? null : this.filters.slice(0), t.mask = this.mask, t.hitArea = this.hitArea, t.cursor = this.cursor, t._bounds = this._bounds, t
	}, e._applyShadow = function (t, e) {
		e = e || Shadow.identity, t.shadowColor = e.color, t.shadowOffsetX = e.offsetX, t.shadowOffsetY = e.offsetY, t.shadowBlur = e.blur
	}, e._tick = function (t) {
		var e = this._listeners;
		e && e.tick && (t.target = null, t.propagationStopped = t.immediatePropagationStopped = !1, this.dispatchEvent(t))
	}, e._testHit = function (e) {
		try {
			var A = e.getImageData(0, 0, 1, 1).data[3] > 1
		} catch (e) {
			if (!t.suppressCrossDomainErrors) throw"An error has occurred. This is most likely due to security restrictions on reading canvas pixel data with local or cross-domain images."
		}
		return A
	}, e._applyFilters = function () {
		if (this.filters && 0 != this.filters.length && this.cacheCanvas) for (var t = this.filters.length, e = this.cacheCanvas.getContext("2d"), A = this.cacheCanvas.width, i = this.cacheCanvas.height, n = 0; t > n; n++) this.filters[n].applyFilter(e, 0, 0, A, i)
	}, e._getFilterBounds = function (t) {
		var e, A = this.filters, i = this._rectangle.setValues(0, 0, 0, 0);
		if (!A || !(e = A.length)) return i;
		for (var n = 0; e > n; n++) {
			var a = this.filters[n];
			a.getBounds && a.getBounds(i)
		}
		return i
	}, e._getBounds = function (t, e) {
		return this._transformBounds(this.getBounds(), t, e)
	}, e._transformBounds = function (t, e, A) {
		if (!t) return t;
		var i = t.x, n = t.y, a = t.width, o = t.height, s = this._props.matrix;
		s = A ? s.identity() : this.getMatrix(s), (i || n) && s.appendTransform(0, 0, 1, 1, 0, 0, 0, -i, -n), e && s.prependMatrix(e);
		var r = a * s.a, g = a * s.b, h = o * s.c, l = o * s.d, c = s.tx, u = s.ty, d = c, p = c, Q = u, I = u;
		return (i = r + c) < d ? d = i : i > p && (p = i), (i = r + h + c) < d ? d = i : i > p && (p = i), (i = h + c) < d ? d = i : i > p && (p = i), (n = g + u) < Q ? Q = n : n > I && (I = n), (n = g + l + u) < Q ? Q = n : n > I && (I = n), (n = l + u) < Q ? Q = n : n > I && (I = n), t.setValues(d, Q, p - d, I - Q)
	}, e._hasMouseEventListener = function () {
		for (var e = t._MOUSE_EVENTS, A = 0, i = e.length; i > A; A++) if (this.hasEventListener(e[A])) return !0;
		return !!this.cursor
	}, createjs.DisplayObject = createjs.promote(t, "EventDispatcher")
}(), this.createjs = this.createjs || {}, function () {
	"use strict";

	function t() {
		this.DisplayObject_constructor(), this.children = [], this.mouseChildren = !0, this.tickChildren = !0
	}

	var e = createjs.extend(t, createjs.DisplayObject);
	e.getNumChildren = function () {
		return this.children.length
	};
	try {
		Object.defineProperties(e, {numChildren: {get: e.getNumChildren}})
	} catch (t) {
	}
	e.initialize = t, e.isVisible = function () {
		var t = this.cacheCanvas || this.children.length;
		return !!(this.visible && this.alpha > 0 && 0 != this.scaleX && 0 != this.scaleY && t)
	}, e.draw = function (t, e) {
		if (this.DisplayObject_draw(t, e)) return !0;
		for (var A = this.children.slice(), i = 0, n = A.length; n > i; i++) {
			var a = A[i];
			a.isVisible() && (t.save(), a.updateContext(t), a.draw(t), t.restore())
		}
		return !0
	}, e.addChild = function (t) {
		if (null == t) return t;
		var e = arguments.length;
		if (e > 1) {
			for (var A = 0; e > A; A++) this.addChild(arguments[A]);
			return arguments[e - 1]
		}
		return t.parent && t.parent.removeChild(t), t.parent = this, this.children.push(t), t.dispatchEvent("added"), t
	}, e.addChildAt = function (t, e) {
		var A = arguments.length, i = arguments[A - 1];
		if (0 > i || i > this.children.length) return arguments[A - 2];
		if (A > 2) {
			for (var n = 0; A - 1 > n; n++) this.addChildAt(arguments[n], i + n);
			return arguments[A - 2]
		}
		return t.parent && t.parent.removeChild(t), t.parent = this, this.children.splice(e, 0, t), t.dispatchEvent("added"), t
	}, e.removeChild = function (t) {
		var e = arguments.length;
		if (e > 1) {
			for (var A = !0, i = 0; e > i; i++) A = A && this.removeChild(arguments[i]);
			return A
		}
		return this.removeChildAt(createjs.indexOf(this.children, t))
	}, e.removeChildAt = function (t) {
		var e = arguments.length;
		if (e > 1) {
			for (var A = [], i = 0; e > i; i++) A[i] = arguments[i];
			A.sort((function (t, e) {
				return e - t
			}));
			var n = !0;
			for (i = 0; e > i; i++) n = n && this.removeChildAt(A[i]);
			return n
		}
		if (0 > t || t > this.children.length - 1) return !1;
		var a = this.children[t];
		return a && (a.parent = null), this.children.splice(t, 1), a.dispatchEvent("removed"), !0
	}, e.removeAllChildren = function () {
		for (var t = this.children; t.length;) this.removeChildAt(0)
	}, e.getChildAt = function (t) {
		return this.children[t]
	}, e.getChildByName = function (t) {
		for (var e = this.children, A = 0, i = e.length; i > A; A++) if (e[A].name == t) return e[A];
		return null
	}, e.sortChildren = function (t) {
		this.children.sort(t)
	}, e.getChildIndex = function (t) {
		return createjs.indexOf(this.children, t)
	}, e.swapChildrenAt = function (t, e) {
		var A = this.children, i = A[t], n = A[e];
		i && n && (A[t] = n, A[e] = i)
	}, e.swapChildren = function (t, e) {
		for (var A, i, n = this.children, a = 0, o = n.length; o > a && (n[a] == t && (A = a), n[a] == e && (i = a), null == A || null == i); a++) ;
		a != o && (n[A] = e, n[i] = t)
	}, e.setChildIndex = function (t, e) {
		var A = this.children, i = A.length;
		if (!(t.parent != this || 0 > e || e >= i)) {
			for (var n = 0; i > n && A[n] != t; n++) ;
			n != i && n != e && (A.splice(n, 1), A.splice(e, 0, t))
		}
	}, e.contains = function (t) {
		for (; t;) {
			if (t == this) return !0;
			t = t.parent
		}
		return !1
	}, e.hitTest = function (t, e) {
		return null != this.getObjectUnderPoint(t, e)
	}, e.getObjectsUnderPoint = function (t, e, A) {
		var i = [], n = this.localToGlobal(t, e);
		return this._getObjectsUnderPoint(n.x, n.y, i, A > 0, 1 == A), i
	}, e.getObjectUnderPoint = function (t, e, A) {
		var i = this.localToGlobal(t, e);
		return this._getObjectsUnderPoint(i.x, i.y, null, A > 0, 1 == A)
	}, e.getBounds = function () {
		return this._getBounds(null, !0)
	}, e.getTransformedBounds = function () {
		return this._getBounds()
	}, e.clone = function (e) {
		var A = this._cloneProps(new t);
		return e && this._cloneChildren(A), A
	}, e.toString = function () {
		return "[Container (name=" + this.name + ")]"
	}, e._tick = function (t) {
		if (this.tickChildren) for (var e = this.children.length - 1; e >= 0; e--) {
			var A = this.children[e];
			A.tickEnabled && A._tick && A._tick(t)
		}
		this.DisplayObject__tick(t)
	}, e._cloneChildren = function (t) {
		t.children.length && t.removeAllChildren();
		for (var e = t.children, A = 0, i = this.children.length; i > A; A++) {
			var n = this.children[A].clone(!0);
			n.parent = t, e.push(n)
		}
	}, e._getObjectsUnderPoint = function (e, A, i, n, a, o) {
		if (!(o = o || 0) && !this._testMask(this, e, A)) return null;
		var s, r = createjs.DisplayObject._hitTestContext;
		a = a || n && this._hasMouseEventListener();
		for (var g = this.children, h = g.length - 1; h >= 0; h--) {
			var l = g[h], c = l.hitArea;
			if (l.visible && (c || l.isVisible()) && (!n || l.mouseEnabled) && (c || this._testMask(l, e, A))) if (!c && l instanceof t) {
				var u = l._getObjectsUnderPoint(e, A, i, n, a, o + 1);
				if (!i && u) return n && !this.mouseChildren ? this : u
			} else {
				if (n && !a && !l._hasMouseEventListener()) continue;
				var d = l.getConcatenatedDisplayProps(l._props);
				if (s = d.matrix, c && (s.appendMatrix(c.getMatrix(c._props.matrix)), d.alpha = c.alpha), r.globalAlpha = d.alpha, r.setTransform(s.a, s.b, s.c, s.d, s.tx - e, s.ty - A), (c || l).draw(r), !this._testHit(r)) continue;
				if (r.setTransform(1, 0, 0, 1, 0, 0), r.clearRect(0, 0, 2, 2), !i) return n && !this.mouseChildren ? this : l;
				i.push(l)
			}
		}
		return null
	}, e._testMask = function (t, e, A) {
		var i = t.mask;
		if (!i || !i.graphics || i.graphics.isEmpty()) return !0;
		var n = this._props.matrix, a = t.parent;
		n = a ? a.getConcatenatedMatrix(n) : n.identity(), n = i.getMatrix(i._props.matrix).prependMatrix(n);
		var o = createjs.DisplayObject._hitTestContext;
		return o.setTransform(n.a, n.b, n.c, n.d, n.tx - e, n.ty - A), i.graphics.drawAsPath(o), o.fillStyle = "#000", o.fill(), !!this._testHit(o) && (o.setTransform(1, 0, 0, 1, 0, 0), o.clearRect(0, 0, 2, 2), !0)
	}, e._getBounds = function (t, e) {
		var A = this.DisplayObject_getBounds();
		if (A) return this._transformBounds(A, t, e);
		var i = this._props.matrix;
		i = e ? i.identity() : this.getMatrix(i), t && i.prependMatrix(t);
		for (var n = this.children.length, a = null, o = 0; n > o; o++) {
			var s = this.children[o];
			s.visible && (A = s._getBounds(i)) && (a ? a.extend(A.x, A.y, A.width, A.height) : a = A.clone())
		}
		return a
	}, createjs.Container = createjs.promote(t, "DisplayObject")
}(), this.createjs = this.createjs || {}, function () {
	"use strict";

	function t(t) {
		this.Container_constructor(), this.autoClear = !0, this.canvas = "string" == typeof t ? document.getElementById(t) : t, this.mouseX = 0, this.mouseY = 0, this.drawRect = null, this.snapToPixelEnabled = !1, this.mouseInBounds = !1, this.tickOnUpdate = !0, this.mouseMoveOutside = !1, this.preventSelection = !0, this._pointerData = {}, this._pointerCount = 0, this._primaryPointerID = null, this._mouseOverIntervalID = null, this._nextStage = null, this._prevStage = null, this.enableDOMEvents(!0)
	}

	var e = createjs.extend(t, createjs.Container);
	e._get_nextStage = function () {
		return this._nextStage
	}, e._set_nextStage = function (t) {
		this._nextStage && (this._nextStage._prevStage = null), t && (t._prevStage = this), this._nextStage = t
	};
	try {
		Object.defineProperties(e, {nextStage: {get: e._get_nextStage, set: e._set_nextStage}})
	} catch (t) {
	}
	e.update = function (t) {
		if (this.canvas && (this.tickOnUpdate && this.tick(t), !1 !== this.dispatchEvent("drawstart", !1, !0))) {
			createjs.DisplayObject._snapToPixelEnabled = this.snapToPixelEnabled;
			var e = this.drawRect, A = this.canvas.getContext("2d");
			A.setTransform(1, 0, 0, 1, 0, 0), this.autoClear && (e ? A.clearRect(e.x, e.y, e.width, e.height) : A.clearRect(0, 0, this.canvas.width + 1, this.canvas.height + 1)), A.save(), this.drawRect && (A.beginPath(), A.rect(e.x, e.y, e.width, e.height), A.clip()), this.updateContext(A), this.draw(A, !1), A.restore(), this.dispatchEvent("drawend")
		}
	}, e.tick = function (t) {
		if (this.tickEnabled && !1 !== this.dispatchEvent("tickstart", !1, !0)) {
			var e = new createjs.Event("tick");
			if (t) for (var A in t) t.hasOwnProperty(A) && (e[A] = t[A]);
			this._tick(e), this.dispatchEvent("tickend")
		}
	}, e.handleEvent = function (t) {
		"tick" == t.type && this.update(t)
	}, e.clear = function () {
		if (this.canvas) {
			var t = this.canvas.getContext("2d");
			t.setTransform(1, 0, 0, 1, 0, 0), t.clearRect(0, 0, this.canvas.width + 1, this.canvas.height + 1)
		}
	}, e.toDataURL = function (t, e) {
		var A, i = this.canvas.getContext("2d"), n = this.canvas.width, a = this.canvas.height;
		if (t) {
			A = i.getImageData(0, 0, n, a);
			var o = i.globalCompositeOperation;
			i.globalCompositeOperation = "destination-over", i.fillStyle = t, i.fillRect(0, 0, n, a)
		}
		var s = this.canvas.toDataURL(e || "image/png");
		return t && (i.putImageData(A, 0, 0), i.globalCompositeOperation = o), s
	}, e.enableMouseOver = function (t) {
		if (this._mouseOverIntervalID && (clearInterval(this._mouseOverIntervalID), this._mouseOverIntervalID = null, 0 == t && this._testMouseOver(!0)), null == t) t = 20; else if (0 >= t) return;
		var e = this;
		this._mouseOverIntervalID = setInterval((function () {
			e._testMouseOver()
		}), 1e3 / Math.min(50, t))
	}, e.enableDOMEvents = function (t) {
		null == t && (t = !0);
		var e, A, i = this._eventListeners;
		if (!t && i) {
			for (e in i) (A = i[e]).t.removeEventListener(e, A.f, !1);
			this._eventListeners = null
		} else if (t && !i && this.canvas) {
			var n = window.addEventListener ? window : document, a = this;
			for (e in (i = this._eventListeners = {}).mouseup = {
				t: n, f: function (t) {
					a._handleMouseUp(t)
				}
			}, i.mousemove = {
				t: n, f: function (t) {
					a._handleMouseMove(t)
				}
			}, i.dblclick = {
				t: this.canvas, f: function (t) {
					a._handleDoubleClick(t)
				}
			}, i.mousedown = {
				t: this.canvas, f: function (t) {
					a._handleMouseDown(t)
				}
			}, i) (A = i[e]).t.addEventListener(e, A.f, !1)
		}
	}, e.clone = function () {
		throw"Stage cannot be cloned."
	}, e.toString = function () {
		return "[Stage (name=" + this.name + ")]"
	}, e._getElementRect = function (t) {
		var e;
		try {
			e = t.getBoundingClientRect()
		} catch (A) {
			e = {top: t.offsetTop, left: t.offsetLeft, width: t.offsetWidth, height: t.offsetHeight}
		}
		var A = (window.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || document.body.clientLeft || 0),
			i = (window.pageYOffset || document.scrollTop || 0) - (document.clientTop || document.body.clientTop || 0),
			n = window.getComputedStyle ? getComputedStyle(t, null) : t.currentStyle,
			a = parseInt(n.paddingLeft) + parseInt(n.borderLeftWidth),
			o = parseInt(n.paddingTop) + parseInt(n.borderTopWidth),
			s = parseInt(n.paddingRight) + parseInt(n.borderRightWidth),
			r = parseInt(n.paddingBottom) + parseInt(n.borderBottomWidth);
		return {left: e.left + A + a, right: e.right + A - s, top: e.top + i + o, bottom: e.bottom + i - r}
	}, e._getPointerData = function (t) {
		var e = this._pointerData[t];
		return e || (e = this._pointerData[t] = {x: 0, y: 0}), e
	}, e._handleMouseMove = function (t) {
		t || (t = window.event), this._handlePointerMove(-1, t, t.pageX, t.pageY)
	}, e._handlePointerMove = function (t, e, A, i, n) {
		if ((!this._prevStage || void 0 !== n) && this.canvas) {
			var a = this._nextStage, o = this._getPointerData(t), s = o.inBounds;
			this._updatePointerPosition(t, e, A, i), (s || o.inBounds || this.mouseMoveOutside) && (-1 === t && o.inBounds == !s && this._dispatchMouseEvent(this, s ? "mouseleave" : "mouseenter", !1, t, o, e), this._dispatchMouseEvent(this, "stagemousemove", !1, t, o, e), this._dispatchMouseEvent(o.target, "pressmove", !0, t, o, e)), a && a._handlePointerMove(t, e, A, i, null)
		}
	}, e._updatePointerPosition = function (t, e, A, i) {
		var n = this._getElementRect(this.canvas);
		A -= n.left, i -= n.top;
		var a = this.canvas.width, o = this.canvas.height;
		A /= (n.right - n.left) / a, i /= (n.bottom - n.top) / o;
		var s = this._getPointerData(t);
		(s.inBounds = A >= 0 && i >= 0 && a - 1 >= A && o - 1 >= i) ? (s.x = A, s.y = i) : this.mouseMoveOutside && (s.x = 0 > A ? 0 : A > a - 1 ? a - 1 : A, s.y = 0 > i ? 0 : i > o - 1 ? o - 1 : i), s.posEvtObj = e, s.rawX = A, s.rawY = i, (t === this._primaryPointerID || -1 === t) && (this.mouseX = s.x, this.mouseY = s.y, this.mouseInBounds = s.inBounds)
	}, e._handleMouseUp = function (t) {
		this._handlePointerUp(-1, t, !1)
	}, e._handlePointerUp = function (t, e, A, i) {
		var n = this._nextStage, a = this._getPointerData(t);
		if (!this._prevStage || void 0 !== i) {
			var o = null, s = a.target;
			i || !s && !n || (o = this._getObjectsUnderPoint(a.x, a.y, null, !0)), a.down && (this._dispatchMouseEvent(this, "stagemouseup", !1, t, a, e, o), a.down = !1), o == s && this._dispatchMouseEvent(s, "click", !0, t, a, e), this._dispatchMouseEvent(s, "pressup", !0, t, a, e), A ? (t == this._primaryPointerID && (this._primaryPointerID = null), delete this._pointerData[t]) : a.target = null, n && n._handlePointerUp(t, e, A, i || o && this)
		}
	}, e._handleMouseDown = function (t) {
		this._handlePointerDown(-1, t, t.pageX, t.pageY)
	}, e._handlePointerDown = function (t, e, A, i, n) {
		this.preventSelection && e.preventDefault(), (null == this._primaryPointerID || -1 === t) && (this._primaryPointerID = t), null != i && this._updatePointerPosition(t, e, A, i);
		var a = null, o = this._nextStage, s = this._getPointerData(t);
		n || (a = s.target = this._getObjectsUnderPoint(s.x, s.y, null, !0)), s.inBounds && (this._dispatchMouseEvent(this, "stagemousedown", !1, t, s, e, a), s.down = !0), this._dispatchMouseEvent(a, "mousedown", !0, t, s, e), o && o._handlePointerDown(t, e, A, i, n || a && this)
	}, e._testMouseOver = function (t, e, A) {
		if (!this._prevStage || void 0 !== e) {
			var i = this._nextStage;
			if (!this._mouseOverIntervalID) return void (i && i._testMouseOver(t, e, A));
			var n = this._getPointerData(-1);
			if (n && (t || this.mouseX != this._mouseOverX || this.mouseY != this._mouseOverY || !this.mouseInBounds)) {
				var a, o, s, r = n.posEvtObj, g = A || r && r.target == this.canvas, h = null, l = -1, c = "";
				!e && (t || this.mouseInBounds && g) && (h = this._getObjectsUnderPoint(this.mouseX, this.mouseY, null, !0), this._mouseOverX = this.mouseX, this._mouseOverY = this.mouseY);
				var u = this._mouseOverTarget || [], d = u[u.length - 1], p = this._mouseOverTarget = [];
				for (a = h; a;) p.unshift(a), c || (c = a.cursor), a = a.parent;
				for (this.canvas.style.cursor = c, !e && A && (A.canvas.style.cursor = c), o = 0, s = p.length; s > o && p[o] == u[o]; o++) l = o;
				for (d != h && this._dispatchMouseEvent(d, "mouseout", !0, -1, n, r, h), o = u.length - 1; o > l; o--) this._dispatchMouseEvent(u[o], "rollout", !1, -1, n, r, h);
				for (o = p.length - 1; o > l; o--) this._dispatchMouseEvent(p[o], "rollover", !1, -1, n, r, d);
				d != h && this._dispatchMouseEvent(h, "mouseover", !0, -1, n, r, d), i && i._testMouseOver(t, e || h && this, A || g && this)
			}
		}
	}, e._handleDoubleClick = function (t, e) {
		var A = null, i = this._nextStage, n = this._getPointerData(-1);
		e || (A = this._getObjectsUnderPoint(n.x, n.y, null, !0), this._dispatchMouseEvent(A, "dblclick", !0, -1, n, t)), i && i._handleDoubleClick(t, e || A && this)
	}, e._dispatchMouseEvent = function (t, e, A, i, n, a, o) {
		if (t && (A || t.hasEventListener(e))) {
			var s = new createjs.MouseEvent(e, A, !1, n.x, n.y, a, i, i === this._primaryPointerID || -1 === i, n.rawX, n.rawY, o);
			t.dispatchEvent(s)
		}
	}, createjs.Stage = createjs.promote(t, "Container")
}(), this.createjs = this.createjs || {}, function () {
	function t(t) {
		this.DisplayObject_constructor(), "string" == typeof t ? (this.image = document.createElement("img"), this.image.src = t) : this.image = t, this.sourceRect = null
	}

	var e = createjs.extend(t, createjs.DisplayObject);
	e.initialize = t, e.isVisible = function () {
		var t = this.image, e = this.cacheCanvas || t && (t.naturalWidth || t.getContext || t.readyState >= 2);
		return !!(this.visible && this.alpha > 0 && 0 != this.scaleX && 0 != this.scaleY && e)
	}, e.draw = function (t, e) {
		if (this.DisplayObject_draw(t, e) || !this.image) return !0;
		var A = this.image, i = this.sourceRect;
		if (i) {
			var n = i.x, a = i.y, o = n + i.width, s = a + i.height, r = 0, g = 0, h = A.width, l = A.height;
			0 > n && (r -= n, n = 0), o > h && (o = h), 0 > a && (g -= a, a = 0), s > l && (s = l), t.drawImage(A, n, a, o - n, s - a, r, g, o - n, s - a)
		} else t.drawImage(A, 0, 0);
		return !0
	}, e.getBounds = function () {
		var t = this.DisplayObject_getBounds();
		if (t) return t;
		var e = this.image, A = this.sourceRect || e;
		return e && (e.naturalWidth || e.getContext || e.readyState >= 2) ? this._rectangle.setValues(0, 0, A.width, A.height) : null
	}, e.clone = function () {
		var e = new t(this.image);
		return this.sourceRect && (e.sourceRect = this.sourceRect.clone()), this._cloneProps(e), e
	}, e.toString = function () {
		return "[Bitmap (name=" + this.name + ")]"
	}, createjs.Bitmap = createjs.promote(t, "DisplayObject")
}(), this.createjs = this.createjs || {}, function () {
	"use strict";

	function t(t, e) {
		this.DisplayObject_constructor(), this.currentFrame = 0, this.currentAnimation = null, this.paused = !0, this.spriteSheet = t, this.currentAnimationFrame = 0, this.framerate = 0, this._animation = null, this._currentFrame = null, this._skipAdvance = !1, null != e && this.gotoAndPlay(e)
	}

	var e = createjs.extend(t, createjs.DisplayObject);
	e.initialize = t, e.isVisible = function () {
		var t = this.cacheCanvas || this.spriteSheet.complete;
		return !!(this.visible && this.alpha > 0 && 0 != this.scaleX && 0 != this.scaleY && t)
	}, e.draw = function (t, e) {
		if (this.DisplayObject_draw(t, e)) return !0;
		this._normalizeFrame();
		var A = this.spriteSheet.getFrame(0 | this._currentFrame);
		if (!A) return !1;
		var i = A.rect;
		return i.width && i.height && t.drawImage(A.image, i.x, i.y, i.width, i.height, -A.regX, -A.regY, i.width, i.height), !0
	}, e.play = function () {
		this.paused = !1
	}, e.stop = function () {
		this.paused = !0
	}, e.gotoAndPlay = function (t) {
		this.paused = !1, this._skipAdvance = !0, this._goto(t)
	}, e.gotoAndStop = function (t) {
		this.paused = !0, this._goto(t)
	}, e.advance = function (t) {
		var e = this.framerate || this.spriteSheet.framerate, A = e && null != t ? t / (1e3 / e) : 1;
		this._normalizeFrame(A)
	}, e.getBounds = function () {
		return this.DisplayObject_getBounds() || this.spriteSheet.getFrameBounds(this.currentFrame, this._rectangle)
	}, e.clone = function () {
		return this._cloneProps(new t(this.spriteSheet))
	}, e.toString = function () {
		return "[Sprite (name=" + this.name + ")]"
	}, e._cloneProps = function (t) {
		return this.DisplayObject__cloneProps(t), t.currentFrame = this.currentFrame, t.currentAnimation = this.currentAnimation, t.paused = this.paused, t.currentAnimationFrame = this.currentAnimationFrame, t.framerate = this.framerate, t._animation = this._animation, t._currentFrame = this._currentFrame, t._skipAdvance = this._skipAdvance, t
	}, e._tick = function (t) {
		this.paused || (this._skipAdvance || this.advance(t && t.delta), this._skipAdvance = !1), this.DisplayObject__tick(t)
	}, e._normalizeFrame = function (t) {
		t = t || 0;
		var e, A = this._animation, i = this.paused, n = this._currentFrame;
		if (A) {
			var a = A.speed || 1, o = this.currentAnimationFrame;
			if (o + t * a >= (e = A.frames.length)) {
				var s = A.next;
				if (this._dispatchAnimationEnd(A, n, i, s, e - 1)) return;
				if (s) return this._goto(s, t - (e - o) / a);
				this.paused = !0, o = A.frames.length - 1
			} else o += t * a;
			this.currentAnimationFrame = o, this._currentFrame = A.frames[0 | o]
		} else if ((n = this._currentFrame += t) >= (e = this.spriteSheet.getNumFrames()) && e > 0 && !this._dispatchAnimationEnd(A, n, i, e - 1) && (this._currentFrame -= e) >= e) return this._normalizeFrame();
		n = 0 | this._currentFrame, this.currentFrame != n && (this.currentFrame = n, this.dispatchEvent("change"))
	}, e._dispatchAnimationEnd = function (t, e, A, i, n) {
		var a = t ? t.name : null;
		if (this.hasEventListener("animationend")) {
			var o = new createjs.Event("animationend");
			o.name = a, o.next = i, this.dispatchEvent(o)
		}
		var s = this._animation != t || this._currentFrame != e;
		return s || A || !this.paused || (this.currentAnimationFrame = n, s = !0), s
	}, e._goto = function (t, e) {
		if (this.currentAnimationFrame = 0, isNaN(t)) {
			var A = this.spriteSheet.getAnimation(t);
			A && (this._animation = A, this.currentAnimation = t, this._normalizeFrame(e))
		} else this.currentAnimation = this._animation = null, this._currentFrame = t, this._normalizeFrame()
	}, createjs.Sprite = createjs.promote(t, "DisplayObject")
}(), this.createjs = this.createjs || {}, function () {
	"use strict";

	function t(t) {
		this.DisplayObject_constructor(), this.graphics = t || new createjs.Graphics
	}

	var e = createjs.extend(t, createjs.DisplayObject);
	e.isVisible = function () {
		var t = this.cacheCanvas || this.graphics && !this.graphics.isEmpty();
		return !!(this.visible && this.alpha > 0 && 0 != this.scaleX && 0 != this.scaleY && t)
	}, e.draw = function (t, e) {
		return this.DisplayObject_draw(t, e) || this.graphics.draw(t, this), !0
	}, e.clone = function (e) {
		var A = e && this.graphics ? this.graphics.clone() : this.graphics;
		return this._cloneProps(new t(A))
	}, e.toString = function () {
		return "[Shape (name=" + this.name + ")]"
	}, createjs.Shape = createjs.promote(t, "DisplayObject")
}(), this.createjs = this.createjs || {}, function () {
	"use strict";

	function t(t, e, A) {
		this.DisplayObject_constructor(), this.text = t, this.font = e, this.color = A, this.textAlign = "left", this.textBaseline = "top", this.maxWidth = null, this.outline = 0, this.lineHeight = 0, this.lineWidth = null
	}

	var e = createjs.extend(t, createjs.DisplayObject),
		A = createjs.createCanvas ? createjs.createCanvas() : document.createElement("canvas");
	A.getContext && (t._workingContext = A.getContext("2d"), A.width = A.height = 1), t.H_OFFSETS = {
		start: 0,
		left: 0,
		center: -.5,
		end: -1,
		right: -1
	}, t.V_OFFSETS = {
		top: 0,
		hanging: -.01,
		middle: -.4,
		alphabetic: -.8,
		ideographic: -.85,
		bottom: -1
	}, e.isVisible = function () {
		var t = this.cacheCanvas || null != this.text && "" !== this.text;
		return !!(this.visible && this.alpha > 0 && 0 != this.scaleX && 0 != this.scaleY && t)
	}, e.draw = function (t, e) {
		if (this.DisplayObject_draw(t, e)) return !0;
		var A = this.color || "#000";
		return this.outline ? (t.strokeStyle = A, t.lineWidth = 1 * this.outline) : t.fillStyle = A, this._drawText(this._prepContext(t)), !0
	}, e.getMeasuredWidth = function () {
		return this._getMeasuredWidth(this.text)
	}, e.getMeasuredLineHeight = function () {
		return 1.2 * this._getMeasuredWidth("M")
	}, e.getMeasuredHeight = function () {
		return this._drawText(null, {}).height
	}, e.getBounds = function () {
		var e = this.DisplayObject_getBounds();
		if (e) return e;
		if (null == this.text || "" === this.text) return null;
		var A = this._drawText(null, {}), i = this.maxWidth && this.maxWidth < A.width ? this.maxWidth : A.width,
			n = i * t.H_OFFSETS[this.textAlign || "left"],
			a = (this.lineHeight || this.getMeasuredLineHeight()) * t.V_OFFSETS[this.textBaseline || "top"];
		return this._rectangle.setValues(n, a, i, A.height)
	}, e.getMetrics = function () {
		var e = {lines: []};
		return e.lineHeight = this.lineHeight || this.getMeasuredLineHeight(), e.vOffset = e.lineHeight * t.V_OFFSETS[this.textBaseline || "top"], this._drawText(null, e, e.lines)
	}, e.clone = function () {
		return this._cloneProps(new t(this.text, this.font, this.color))
	}, e.toString = function () {
		return "[Text (text=" + (this.text.length > 20 ? this.text.substr(0, 17) + "..." : this.text) + ")]"
	}, e._cloneProps = function (t) {
		return this.DisplayObject__cloneProps(t), t.textAlign = this.textAlign, t.textBaseline = this.textBaseline, t.maxWidth = this.maxWidth, t.outline = this.outline, t.lineHeight = this.lineHeight, t.lineWidth = this.lineWidth, t
	}, e._prepContext = function (t) {
		return t.font = this.font || "10px sans-serif", t.textAlign = this.textAlign || "left", t.textBaseline = this.textBaseline || "top", t
	}, e._drawText = function (e, A, i) {
		var n = !!e;
		n || ((e = t._workingContext).save(), this._prepContext(e));
		for (var a = this.lineHeight || this.getMeasuredLineHeight(), o = 0, s = 0, r = String(this.text).split(/(?:\r\n|\r|\n)/), g = 0, h = r.length; h > g; g++) {
			var l = r[g], c = null;
			if (null != this.lineWidth && (c = e.measureText(l).width) > this.lineWidth) {
				var u = l.split(/(\s)/);
				l = u[0], c = e.measureText(l).width;
				for (var d = 1, p = u.length; p > d; d += 2) {
					var Q = e.measureText(u[d] + u[d + 1]).width;
					c + Q > this.lineWidth ? (n && this._drawTextLine(e, l, s * a), i && i.push(l), c > o && (o = c), l = u[d + 1], c = e.measureText(l).width, s++) : (l += u[d] + u[d + 1], c += Q)
				}
			}
			n && this._drawTextLine(e, l, s * a), i && i.push(l), A && null == c && (c = e.measureText(l).width), c > o && (o = c), s++
		}
		return A && (A.width = o, A.height = s * a), n || e.restore(), A
	}, e._drawTextLine = function (t, e, A) {
		this.outline ? t.strokeText(e, 0, A, this.maxWidth || 65535) : t.fillText(e, 0, A, this.maxWidth || 65535)
	}, e._getMeasuredWidth = function (e) {
		var A = t._workingContext;
		A.save();
		var i = this._prepContext(A).measureText(e).width;
		return A.restore(), i
	}, createjs.Text = createjs.promote(t, "DisplayObject")
}(), this.createjs = this.createjs || {}, function () {
	"use strict";

	function t(t, e) {
		this.Container_constructor(), this.text = t || "", this.spriteSheet = e, this.lineHeight = 0, this.letterSpacing = 0, this.spaceWidth = 0, this._oldProps = {
			text: 0,
			spriteSheet: 0,
			lineHeight: 0,
			letterSpacing: 0,
			spaceWidth: 0
		}
	}

	var e = createjs.extend(t, createjs.Container);
	t.maxPoolSize = 100, t._spritePool = [], e.draw = function (t, e) {
		this.DisplayObject_draw(t, e) || (this._updateText(), this.Container_draw(t, e))
	}, e.getBounds = function () {
		return this._updateText(), this.Container_getBounds()
	}, e.isVisible = function () {
		var t = this.cacheCanvas || this.spriteSheet && this.spriteSheet.complete && this.text;
		return !!(this.visible && this.alpha > 0 && 0 !== this.scaleX && 0 !== this.scaleY && t)
	}, e.clone = function () {
		return this._cloneProps(new t(this.text, this.spriteSheet))
	}, e.addChild = e.addChildAt = e.removeChild = e.removeChildAt = e.removeAllChildren = function () {
	}, e._cloneProps = function (t) {
		return this.Container__cloneProps(t), t.lineHeight = this.lineHeight, t.letterSpacing = this.letterSpacing, t.spaceWidth = this.spaceWidth, t
	}, e._getFrameIndex = function (t, e) {
		var A, i = e.getAnimation(t);
		return i || (t != (A = t.toUpperCase()) || t != (A = t.toLowerCase()) || (A = null), A && (i = e.getAnimation(A))), i && i.frames[0]
	}, e._getFrame = function (t, e) {
		var A = this._getFrameIndex(t, e);
		return null == A ? A : e.getFrame(A)
	}, e._getLineHeight = function (t) {
		var e = this._getFrame("1", t) || this._getFrame("T", t) || this._getFrame("L", t) || t.getFrame(0);
		return e ? e.rect.height : 1
	}, e._getSpaceWidth = function (t) {
		var e = this._getFrame("1", t) || this._getFrame("l", t) || this._getFrame("e", t) || this._getFrame("a", t) || t.getFrame(0);
		return e ? e.rect.width : 1
	}, e._updateText = function () {
		var e, A = 0, i = 0, n = this._oldProps, a = !1, o = this.spaceWidth, s = this.lineHeight, r = this.spriteSheet,
			g = t._spritePool, h = this.children, l = 0, c = h.length;
		for (var u in n) n[u] != this[u] && (n[u] = this[u], a = !0);
		if (a) {
			var d = !!this._getFrame(" ", r);
			d || o || (o = this._getSpaceWidth(r)), s || (s = this._getLineHeight(r));
			for (var p = 0, Q = this.text.length; Q > p; p++) {
				var I = this.text.charAt(p);
				if (" " != I || d) if ("\n" != I && "\r" != I) {
					var f = this._getFrameIndex(I, r);
					null != f && (c > l ? e = h[l] : (h.push(e = g.length ? g.pop() : new createjs.Sprite), e.parent = this, c++), e.spriteSheet = r, e.gotoAndStop(f), e.x = A, e.y = i, l++, A += e.getBounds().width + this.letterSpacing)
				} else "\r" == I && "\n" == this.text.charAt(p + 1) && p++, A = 0, i += s; else A += o
			}
			for (; c > l;) g.push(e = h.pop()), e.parent = null, c--;
			g.length > t.maxPoolSize && (g.length = t.maxPoolSize)
		}
	}, createjs.BitmapText = createjs.promote(t, "Container")
}(), this.createjs = this.createjs || {}, function () {
	"use strict";

	function t(e, A, i, n) {
		this.Container_constructor(), !t.inited && t.init(), this.mode = e || t.INDEPENDENT, this.startPosition = A || 0, this.loop = i, this.currentFrame = 0, this.timeline = new createjs.Timeline(null, n, {
			paused: !0,
			position: A,
			useTicks: !0
		}), this.paused = !1, this.actionsEnabled = !0, this.autoReset = !0, this.frameBounds = this.frameBounds || null, this.framerate = null, this._synchOffset = 0, this._prevPos = -1, this._prevPosition = 0, this._t = 0, this._managed = {}
	}

	function e() {
		throw"MovieClipPlugin cannot be instantiated."
	}

	var A = createjs.extend(t, createjs.Container);
	t.INDEPENDENT = "independent", t.SINGLE_FRAME = "single", t.SYNCHED = "synched", t.inited = !1, t.init = function () {
		t.inited || (e.install(), t.inited = !0)
	}, A.getLabels = function () {
		return this.timeline.getLabels()
	}, A.getCurrentLabel = function () {
		return this._updateTimeline(), this.timeline.getCurrentLabel()
	}, A.getDuration = function () {
		return this.timeline.duration
	};
	try {
		Object.defineProperties(A, {
			labels: {get: A.getLabels},
			currentLabel: {get: A.getCurrentLabel},
			totalFrames: {get: A.getDuration},
			duration: {get: A.getDuration}
		})
	} catch (t) {
	}
	A.initialize = t, A.isVisible = function () {
		return !!(this.visible && this.alpha > 0 && 0 != this.scaleX && 0 != this.scaleY)
	}, A.draw = function (t, e) {
		return this.DisplayObject_draw(t, e) || (this._updateTimeline(), this.Container_draw(t, e)), !0
	}, A.play = function () {
		this.paused = !1
	}, A.stop = function () {
		this.paused = !0
	}, A.gotoAndPlay = function (t) {
		this.paused = !1, this._goto(t)
	}, A.gotoAndStop = function (t) {
		this.paused = !0, this._goto(t)
	}, A.advance = function (e) {
		var A = t.INDEPENDENT;
		if (this.mode == A) {
			for (var i = this, n = i.framerate; (i = i.parent) && null == n;) i.mode == A && (n = i._framerate);
			this._framerate = n;
			var a = null != n && -1 != n && null != e ? e / (1e3 / n) + this._t : 1, o = 0 | a;
			for (this._t = a - o; !this.paused && o--;) this._prevPosition = this._prevPos < 0 ? 0 : this._prevPosition + 1, this._updateTimeline()
		}
	}, A.clone = function () {
		throw"MovieClip cannot be cloned."
	}, A.toString = function () {
		return "[MovieClip (name=" + this.name + ")]"
	}, A._tick = function (t) {
		this.advance(t && t.delta), this.Container__tick(t)
	}, A._goto = function (t) {
		var e = this.timeline.resolve(t);
		null != e && (-1 == this._prevPos && (this._prevPos = NaN), this._prevPosition = e, this._t = 0, this._updateTimeline())
	}, A._reset = function () {
		this._prevPos = -1, this._t = this.currentFrame = 0, this.paused = !1
	}, A._updateTimeline = function () {
		var e = this.timeline, A = this.mode != t.INDEPENDENT;
		e.loop = null == this.loop || this.loop;
		var i = A ? this.startPosition + (this.mode == t.SINGLE_FRAME ? 0 : this._synchOffset) : this._prevPos < 0 ? 0 : this._prevPosition,
			n = A || !this.actionsEnabled ? createjs.Tween.NONE : null;
		if (this.currentFrame = e._calcPosition(i), e.setPosition(i, n), this._prevPosition = e._prevPosition, this._prevPos != e._prevPos) {
			for (var a in this.currentFrame = this._prevPos = e._prevPos, this._managed) this._managed[a] = 1;
			for (var o = e._tweens, s = 0, r = o.length; r > s; s++) {
				var g = o[s], h = g._target;
				if (h != this && !g.passive) {
					var l = g._stepPosition;
					h instanceof createjs.DisplayObject ? this._addManagedChild(h, l) : this._setState(h.state, l)
				}
			}
			var c = this.children;
			for (s = c.length - 1; s >= 0; s--) {
				var u = c[s].id;
				1 == this._managed[u] && (this.removeChildAt(s), delete this._managed[u])
			}
		}
	}, A._setState = function (t, e) {
		if (t) for (var A = t.length - 1; A >= 0; A--) {
			var i = t[A], n = i.t, a = i.p;
			for (var o in a) n[o] = a[o];
			this._addManagedChild(n, e)
		}
	}, A._addManagedChild = function (e, A) {
		e._off || (this.addChildAt(e, 0), e instanceof t && (e._synchOffset = A, e.mode == t.INDEPENDENT && e.autoReset && !this._managed[e.id] && e._reset()), this._managed[e.id] = 2)
	}, A._getBounds = function (t, e) {
		var A = this.DisplayObject_getBounds();
		return A || (this._updateTimeline(), this.frameBounds && (A = this._rectangle.copy(this.frameBounds[this.currentFrame]))), A ? this._transformBounds(A, t, e) : this.Container__getBounds(t, e)
	}, createjs.MovieClip = createjs.promote(t, "Container"), e.priority = 100, e.install = function () {
		createjs.Tween.installPlugin(e, ["startPosition"])
	}, e.init = function (t, e, A) {
		return A
	}, e.step = function () {
	}, e.tween = function (e, A, i, n, a, o, s, r) {
		return e.target instanceof t ? 1 == o ? a[A] : n[A] : i
	}
}(), this.createjs = this.createjs || {}, function () {
	"use strict";

	function t() {
		throw"SpriteSheetUtils cannot be instantiated"
	}

	var e = createjs.createCanvas ? createjs.createCanvas() : document.createElement("canvas");
	e.getContext && (t._workingCanvas = e, t._workingContext = e.getContext("2d"), e.width = e.height = 1), t.addFlippedFrames = function (e, A, i, n) {
		if (A || i || n) {
			var a = 0;
			A && t._flip(e, ++a, !0, !1), i && t._flip(e, ++a, !1, !0), n && t._flip(e, ++a, !0, !0)
		}
	}, t.extractFrame = function (e, A) {
		isNaN(A) && (A = e.getAnimation(A).frames[0]);
		var i = e.getFrame(A);
		if (!i) return null;
		var n = i.rect, a = t._workingCanvas;
		a.width = n.width, a.height = n.height, t._workingContext.drawImage(i.image, n.x, n.y, n.width, n.height, 0, 0, n.width, n.height);
		var o = document.createElement("img");
		return o.src = a.toDataURL("image/png"), o
	}, t.mergeAlpha = function (t, e, A) {
		A || (A = createjs.createCanvas ? createjs.createCanvas() : document.createElement("canvas")), A.width = Math.max(e.width, t.width), A.height = Math.max(e.height, t.height);
		var i = A.getContext("2d");
		return i.save(), i.drawImage(t, 0, 0), i.globalCompositeOperation = "destination-in", i.drawImage(e, 0, 0), i.restore(), A
	}, t._flip = function (e, A, i, n) {
		for (var a = e._images, o = t._workingCanvas, s = t._workingContext, r = a.length / A, g = 0; r > g; g++) {
			var h = a[g];
			h.__tmp = g, s.setTransform(1, 0, 0, 1, 0, 0), s.clearRect(0, 0, o.width + 1, o.height + 1), o.width = h.width, o.height = h.height, s.setTransform(i ? -1 : 1, 0, 0, n ? -1 : 1, i ? h.width : 0, n ? h.height : 0), s.drawImage(h, 0, 0);
			var l = document.createElement("img");
			l.src = o.toDataURL("image/png"), l.width = h.width, l.height = h.height, a.push(l)
		}
		var c = e._frames, u = c.length / A;
		for (g = 0; u > g; g++) {
			var d = (h = c[g]).rect.clone(),
				p = {image: l = a[h.image.__tmp + r * A], rect: d, regX: h.regX, regY: h.regY};
			i && (d.x = l.width - d.x - d.width, p.regX = d.width - h.regX), n && (d.y = l.height - d.y - d.height, p.regY = d.height - h.regY), c.push(p)
		}
		var Q = "_" + (i ? "h" : "") + (n ? "v" : ""), I = e._animations, f = e._data, w = I.length / A;
		for (g = 0; w > g; g++) {
			var L = I[g], m = {name: L + Q, speed: (h = f[L]).speed, next: h.next, frames: []};
			h.next && (m.next += Q);
			for (var _ = 0, v = (c = h.frames).length; v > _; _++) m.frames.push(c[_] + u * A);
			f[m.name] = m, I.push(m.name)
		}
	}, createjs.SpriteSheetUtils = t
}(), this.createjs = this.createjs || {}, function () {
	"use strict";

	function t(t) {
		this.EventDispatcher_constructor(), this.maxWidth = 2048, this.maxHeight = 2048, this.spriteSheet = null, this.scale = 1, this.padding = 1, this.timeSlice = .3, this.progress = -1, this.framerate = t || 0, this._frames = [], this._animations = {}, this._data = null, this._nextFrameIndex = 0, this._index = 0, this._timerID = null, this._scale = 1
	}

	var e = createjs.extend(t, createjs.EventDispatcher);
	t.ERR_DIMENSIONS = "frame dimensions exceed max spritesheet dimensions", t.ERR_RUNNING = "a build is already running", e.addFrame = function (e, A, i, n, a) {
		if (this._data) throw t.ERR_RUNNING;
		var o = A || e.bounds || e.nominalBounds;
		return !o && e.getBounds && (o = e.getBounds()), o ? (i = i || 1, this._frames.push({
			source: e,
			sourceRect: o,
			scale: i,
			funct: n,
			data: a,
			index: this._frames.length,
			height: o.height * i
		}) - 1) : null
	}, e.addAnimation = function (e, A, i, n) {
		if (this._data) throw t.ERR_RUNNING;
		this._animations[e] = {frames: A, next: i, speed: n}
	}, e.addMovieClip = function (e, A, i, n, a, o) {
		if (this._data) throw t.ERR_RUNNING;
		var s = e.frameBounds, r = A || e.bounds || e.nominalBounds;
		if (!r && e.getBounds && (r = e.getBounds()), r || s) {
			var g, h, l = this._frames.length, c = e.timeline.duration;
			for (g = 0; c > g; g++) {
				var u = s && s[g] ? s[g] : r;
				this.addFrame(e, u, i, this._setupMovieClipFrame, {i: g, f: n, d: a})
			}
			var d = e.timeline._labels, p = [];
			for (var Q in d) p.push({index: d[Q], label: Q});
			if (p.length) for (p.sort((function (t, e) {
				return t.index - e.index
			})), g = 0, h = p.length; h > g; g++) {
				for (var I = p[g].label, f = l + p[g].index, w = l + (g == h - 1 ? c : p[g + 1].index), L = [], m = f; w > m; m++) L.push(m);
				(!o || (I = o(I, e, f, w))) && this.addAnimation(I, L, !0)
			}
		}
	}, e.build = function () {
		if (this._data) throw t.ERR_RUNNING;
		for (this._startBuild(); this._drawNext();) ;
		return this._endBuild(), this.spriteSheet
	}, e.buildAsync = function (e) {
		if (this._data) throw t.ERR_RUNNING;
		this.timeSlice = e, this._startBuild();
		var A = this;
		this._timerID = setTimeout((function () {
			A._run()
		}), 50 - 50 * Math.max(.01, Math.min(.99, this.timeSlice || .3)))
	}, e.stopAsync = function () {
		clearTimeout(this._timerID), this._data = null
	}, e.clone = function () {
		throw"SpriteSheetBuilder cannot be cloned."
	}, e.toString = function () {
		return "[SpriteSheetBuilder]"
	}, e._startBuild = function () {
		var e = this.padding || 0;
		this.progress = 0, this.spriteSheet = null, this._index = 0, this._scale = this.scale;
		var A = [];
		this._data = {images: [], frames: A, framerate: this.framerate, animations: this._animations};
		var i = this._frames.slice();
		if (i.sort((function (t, e) {
			return t.height <= e.height ? -1 : 1
		})), i[i.length - 1].height + 2 * e > this.maxHeight) throw t.ERR_DIMENSIONS;
		for (var n = 0, a = 0, o = 0; i.length;) {
			var s = this._fillRow(i, n, o, A, e);
			if (s.w > a && (a = s.w), n += s.h, !s.h || !i.length) {
				var r = createjs.createCanvas ? createjs.createCanvas() : document.createElement("canvas");
				r.width = this._getSize(a, this.maxWidth), r.height = this._getSize(n, this.maxHeight), this._data.images[o] = r, s.h || (a = n = 0, o++)
			}
		}
	}, e._setupMovieClipFrame = function (t, e) {
		var A = t.actionsEnabled;
		t.actionsEnabled = !1, t.gotoAndStop(e.i), t.actionsEnabled = A, e.f && e.f(t, e.d, e.i)
	}, e._getSize = function (t, e) {
		for (var A = 4; Math.pow(2, ++A) < t;) ;
		return Math.min(e, Math.pow(2, A))
	}, e._fillRow = function (e, A, i, n, a) {
		for (var o = this.maxWidth, s = this.maxHeight - (A += a), r = a, g = 0, h = e.length - 1; h >= 0; h--) {
			var l = e[h], c = this._scale * l.scale, u = l.sourceRect, d = l.source, p = Math.floor(c * u.x - a),
				Q = Math.floor(c * u.y - a), I = Math.ceil(c * u.height + 2 * a), f = Math.ceil(c * u.width + 2 * a);
			if (f > o) throw t.ERR_DIMENSIONS;
			I > s || r + f > o || (l.img = i, l.rect = new createjs.Rectangle(r, A, f, I), g = g || I, e.splice(h, 1), n[l.index] = [r, A, f, I, i, Math.round(-p + c * d.regX - a), Math.round(-Q + c * d.regY - a)], r += f)
		}
		return {w: r, h: g}
	}, e._endBuild = function () {
		this.spriteSheet = new createjs.SpriteSheet(this._data), this._data = null, this.progress = 1, this.dispatchEvent("complete")
	}, e._run = function () {
		for (var t = 50 * Math.max(.01, Math.min(.99, this.timeSlice || .3)), e = (new Date).getTime() + t, A = !1; e > (new Date).getTime();) if (!this._drawNext()) {
			A = !0;
			break
		}
		if (A) this._endBuild(); else {
			var i = this;
			this._timerID = setTimeout((function () {
				i._run()
			}), 50 - t)
		}
		var n = this.progress = this._index / this._frames.length;
		if (this.hasEventListener("progress")) {
			var a = new createjs.Event("progress");
			a.progress = n, this.dispatchEvent(a)
		}
	}, e._drawNext = function () {
		var t = this._frames[this._index], e = t.scale * this._scale, A = t.rect, i = t.sourceRect,
			n = this._data.images[t.img].getContext("2d");
		return t.funct && t.funct(t.source, t.data), n.save(), n.beginPath(), n.rect(A.x, A.y, A.width, A.height), n.clip(), n.translate(Math.ceil(A.x - i.x * e), Math.ceil(A.y - i.y * e)), n.scale(e, e), t.source.draw(n), n.restore(), ++this._index < this._frames.length
	}, createjs.SpriteSheetBuilder = createjs.promote(t, "EventDispatcher")
}(), this.createjs = this.createjs || {}, function () {
	"use strict";

	function t(t) {
		this.DisplayObject_constructor(), "string" == typeof t && (t = document.getElementById(t)), this.mouseEnabled = !1;
		var e = t.style;
		e.position = "absolute", e.transformOrigin = e.WebkitTransformOrigin = e.msTransformOrigin = e.MozTransformOrigin = e.OTransformOrigin = "0% 0%", this.htmlElement = t, this._oldProps = null
	}

	var e = createjs.extend(t, createjs.DisplayObject);
	e.isVisible = function () {
		return null != this.htmlElement
	}, e.draw = function (t, e) {
		return !0
	}, e.cache = function () {
	}, e.uncache = function () {
	}, e.updateCache = function () {
	}, e.hitTest = function () {
	}, e.localToGlobal = function () {
	}, e.globalToLocal = function () {
	}, e.localToLocal = function () {
	}, e.clone = function () {
		throw"DOMElement cannot be cloned."
	}, e.toString = function () {
		return "[DOMElement (name=" + this.name + ")]"
	}, e._tick = function (t) {
		var e = this.getStage();
		e && e.on("drawend", this._handleDrawEnd, this, !0), this.DisplayObject__tick(t)
	}, e._handleDrawEnd = function (t) {
		var e = this.htmlElement;
		if (e) {
			var A = e.style, i = this.getConcatenatedDisplayProps(this._props), n = i.matrix,
				a = i.visible ? "visible" : "hidden";
			if (a != A.visibility && (A.visibility = a), i.visible) {
				var o = this._oldProps, s = o && o.matrix, r = 1e4;
				if (!s || !s.equals(n)) {
					var g = "matrix(" + (n.a * r | 0) / r + "," + (n.b * r | 0) / r + "," + (n.c * r | 0) / r + "," + (n.d * r | 0) / r + "," + (n.tx + .5 | 0);
					A.transform = A.WebkitTransform = A.OTransform = A.msTransform = g + "," + (n.ty + .5 | 0) + ")", A.MozTransform = g + "px," + (n.ty + .5 | 0) + "px)", o || (o = this._oldProps = new createjs.DisplayProps(!0, NaN)), o.matrix.copy(n)
				}
				o.alpha != i.alpha && (A.opacity = "" + (i.alpha * r | 0) / r, o.alpha = i.alpha)
			}
		}
	}, createjs.DOMElement = createjs.promote(t, "DisplayObject")
}(), this.createjs = this.createjs || {}, function () {
	"use strict";

	function t() {
	}

	var e = t.prototype;
	e.getBounds = function (t) {
		return t
	}, e.applyFilter = function (t, e, A, i, n, a, o, s) {
		a = a || t, null == o && (o = e), null == s && (s = A);
		try {
			var r = t.getImageData(e, A, i, n)
		} catch (t) {
			return !1
		}
		return !!this._applyFilter(r) && (a.putImageData(r, o, s), !0)
	}, e.toString = function () {
		return "[Filter]"
	}, e.clone = function () {
		return new t
	}, e._applyFilter = function (t) {
		return !0
	}, createjs.Filter = t
}(), this.createjs = this.createjs || {}, function () {
	"use strict";

	function t(t, e, A) {
		(isNaN(t) || 0 > t) && (t = 0), (isNaN(e) || 0 > e) && (e = 0), (isNaN(A) || 1 > A) && (A = 1), this.blurX = 0 | t, this.blurY = 0 | e, this.quality = 0 | A
	}

	var e = createjs.extend(t, createjs.Filter);
	t.MUL_TABLE = [1, 171, 205, 293, 57, 373, 79, 137, 241, 27, 391, 357, 41, 19, 283, 265, 497, 469, 443, 421, 25, 191, 365, 349, 335, 161, 155, 149, 9, 278, 269, 261, 505, 245, 475, 231, 449, 437, 213, 415, 405, 395, 193, 377, 369, 361, 353, 345, 169, 331, 325, 319, 313, 307, 301, 37, 145, 285, 281, 69, 271, 267, 263, 259, 509, 501, 493, 243, 479, 118, 465, 459, 113, 446, 55, 435, 429, 423, 209, 413, 51, 403, 199, 393, 97, 3, 379, 375, 371, 367, 363, 359, 355, 351, 347, 43, 85, 337, 333, 165, 327, 323, 5, 317, 157, 311, 77, 305, 303, 75, 297, 294, 73, 289, 287, 71, 141, 279, 277, 275, 68, 135, 67, 133, 33, 262, 260, 129, 511, 507, 503, 499, 495, 491, 61, 121, 481, 477, 237, 235, 467, 232, 115, 457, 227, 451, 7, 445, 221, 439, 218, 433, 215, 427, 425, 211, 419, 417, 207, 411, 409, 203, 202, 401, 399, 396, 197, 49, 389, 387, 385, 383, 95, 189, 47, 187, 93, 185, 23, 183, 91, 181, 45, 179, 89, 177, 11, 175, 87, 173, 345, 343, 341, 339, 337, 21, 167, 83, 331, 329, 327, 163, 81, 323, 321, 319, 159, 79, 315, 313, 39, 155, 309, 307, 153, 305, 303, 151, 75, 299, 149, 37, 295, 147, 73, 291, 145, 289, 287, 143, 285, 71, 141, 281, 35, 279, 139, 69, 275, 137, 273, 17, 271, 135, 269, 267, 133, 265, 33, 263, 131, 261, 130, 259, 129, 257, 1], t.SHG_TABLE = [0, 9, 10, 11, 9, 12, 10, 11, 12, 9, 13, 13, 10, 9, 13, 13, 14, 14, 14, 14, 10, 13, 14, 14, 14, 13, 13, 13, 9, 14, 14, 14, 15, 14, 15, 14, 15, 15, 14, 15, 15, 15, 14, 15, 15, 15, 15, 15, 14, 15, 15, 15, 15, 15, 15, 12, 14, 15, 15, 13, 15, 15, 15, 15, 16, 16, 16, 15, 16, 14, 16, 16, 14, 16, 13, 16, 16, 16, 15, 16, 13, 16, 15, 16, 14, 9, 16, 16, 16, 16, 16, 16, 16, 16, 16, 13, 14, 16, 16, 15, 16, 16, 10, 16, 15, 16, 14, 16, 16, 14, 16, 16, 14, 16, 16, 14, 15, 16, 16, 16, 14, 15, 14, 15, 13, 16, 16, 15, 17, 17, 17, 17, 17, 17, 14, 15, 17, 17, 16, 16, 17, 16, 15, 17, 16, 17, 11, 17, 16, 17, 16, 17, 16, 17, 17, 16, 17, 17, 16, 17, 17, 16, 16, 17, 17, 17, 16, 14, 17, 17, 17, 17, 15, 16, 14, 16, 15, 16, 13, 16, 15, 16, 14, 16, 15, 16, 12, 16, 15, 16, 17, 17, 17, 17, 17, 13, 16, 15, 17, 17, 17, 16, 15, 17, 17, 17, 16, 15, 17, 17, 14, 16, 17, 17, 16, 17, 17, 16, 15, 17, 16, 14, 17, 16, 15, 17, 16, 17, 17, 16, 17, 15, 16, 17, 14, 17, 16, 15, 17, 16, 17, 13, 17, 16, 17, 17, 16, 17, 14, 17, 16, 17, 16, 17, 16, 17, 9], e.getBounds = function (t) {
		var e = 0 | this.blurX, A = 0 | this.blurY;
		if (0 >= e && 0 >= A) return t;
		var i = Math.pow(this.quality, .2);
		return (t || new createjs.Rectangle).pad(e * i + 1, A * i + 1, e * i + 1, A * i + 1)
	}, e.clone = function () {
		return new t(this.blurX, this.blurY, this.quality)
	}, e.toString = function () {
		return "[BlurFilter]"
	}, e._applyFilter = function (e) {
		var A = this.blurX >> 1;
		if (isNaN(A) || 0 > A) return !1;
		var i = this.blurY >> 1;
		if (isNaN(i) || 0 > i) return !1;
		if (0 == A && 0 == i) return !1;
		var n = this.quality;
		(isNaN(n) || 1 > n) && (n = 1), (n |= 0) > 3 && (n = 3), 1 > n && (n = 1);
		var a = e.data, o = 0, s = 0, r = 0, g = 0, h = 0, l = 0, c = 0, u = 0, d = 0, p = 0, Q = 0, I = 0, f = 0,
			w = 0, L = 0, m = A + A + 1 | 0, _ = i + i + 1 | 0, v = 0 | e.width, E = 0 | e.height, y = v - 1 | 0,
			P = E - 1 | 0, C = A + 1 | 0, T = i + 1 | 0, K = {r: 0, b: 0, g: 0, a: 0}, B = K;
		for (r = 1; m > r; r++) B = B.n = {r: 0, b: 0, g: 0, a: 0};
		B.n = K;
		var x = {r: 0, b: 0, g: 0, a: 0}, b = x;
		for (r = 1; _ > r; r++) b = b.n = {r: 0, b: 0, g: 0, a: 0};
		b.n = x;
		for (var S = null, H = 0 | t.MUL_TABLE[A], D = 0 | t.SHG_TABLE[A], F = 0 | t.MUL_TABLE[i], j = 0 | t.SHG_TABLE[i]; n-- > 0;) {
			c = l = 0;
			var M = H, k = D;
			for (s = E; --s > -1;) {
				for (u = C * (I = a[0 | l]), d = C * (f = a[l + 1 | 0]), p = C * (w = a[l + 2 | 0]), Q = C * (L = a[l + 3 | 0]), B = K, r = C; --r > -1;) B.r = I, B.g = f, B.b = w, B.a = L, B = B.n;
				for (r = 1; C > r; r++) g = l + ((r > y ? y : r) << 2) | 0, u += B.r = a[g], d += B.g = a[g + 1], p += B.b = a[g + 2], Q += B.a = a[g + 3], B = B.n;
				for (S = K, o = 0; v > o; o++) a[l++] = u * M >>> k, a[l++] = d * M >>> k, a[l++] = p * M >>> k, a[l++] = Q * M >>> k, g = c + ((g = o + A + 1) < y ? g : y) << 2, u -= S.r - (S.r = a[g]), d -= S.g - (S.g = a[g + 1]), p -= S.b - (S.b = a[g + 2]), Q -= S.a - (S.a = a[g + 3]), S = S.n;
				c += v
			}
			for (M = F, k = j, o = 0; v > o; o++) {
				for (u = T * (I = a[l = o << 2 | 0]) | 0, d = T * (f = a[l + 1 | 0]) | 0, p = T * (w = a[l + 2 | 0]) | 0, Q = T * (L = a[l + 3 | 0]) | 0, b = x, r = 0; T > r; r++) b.r = I, b.g = f, b.b = w, b.a = L, b = b.n;
				for (h = v, r = 1; i >= r; r++) l = h + o << 2, u += b.r = a[l], d += b.g = a[l + 1], p += b.b = a[l + 2], Q += b.a = a[l + 3], b = b.n, P > r && (h += v);
				if (l = o, S = x, n > 0) for (s = 0; E > s; s++) a[(g = l << 2) + 3] = L = Q * M >>> k, L > 0 ? (a[g] = u * M >>> k, a[g + 1] = d * M >>> k, a[g + 2] = p * M >>> k) : a[g] = a[g + 1] = a[g + 2] = 0, g = o + ((g = s + T) < P ? g : P) * v << 2, u -= S.r - (S.r = a[g]), d -= S.g - (S.g = a[g + 1]), p -= S.b - (S.b = a[g + 2]), Q -= S.a - (S.a = a[g + 3]), S = S.n, l += v; else for (s = 0; E > s; s++) a[(g = l << 2) + 3] = L = Q * M >>> k, L > 0 ? (L = 255 / L, a[g] = (u * M >>> k) * L, a[g + 1] = (d * M >>> k) * L, a[g + 2] = (p * M >>> k) * L) : a[g] = a[g + 1] = a[g + 2] = 0, g = o + ((g = s + T) < P ? g : P) * v << 2, u -= S.r - (S.r = a[g]), d -= S.g - (S.g = a[g + 1]), p -= S.b - (S.b = a[g + 2]), Q -= S.a - (S.a = a[g + 3]), S = S.n, l += v
			}
		}
		return !0
	}, createjs.BlurFilter = createjs.promote(t, "Filter")
}(), this.createjs = this.createjs || {}, function () {
	"use strict";

	function t(t) {
		this.alphaMap = t, this._alphaMap = null, this._mapData = null
	}

	var e = createjs.extend(t, createjs.Filter);
	e.clone = function () {
		var e = new t(this.alphaMap);
		return e._alphaMap = this._alphaMap, e._mapData = this._mapData, e
	}, e.toString = function () {
		return "[AlphaMapFilter]"
	}, e._applyFilter = function (t) {
		if (!this.alphaMap) return !0;
		if (!this._prepAlphaMap()) return !1;
		for (var e = t.data, A = this._mapData, i = 0, n = e.length; n > i; i += 4) e[i + 3] = A[i] || 0;
		return !0
	}, e._prepAlphaMap = function () {
		if (!this.alphaMap) return !1;
		if (this.alphaMap == this._alphaMap && this._mapData) return !0;
		this._mapData = null;
		var t, e = this._alphaMap = this.alphaMap, A = e;
		e instanceof HTMLCanvasElement ? t = A.getContext("2d") : ((A = createjs.createCanvas ? createjs.createCanvas() : document.createElement("canvas")).width = e.width, A.height = e.height, (t = A.getContext("2d")).drawImage(e, 0, 0));
		try {
			var i = t.getImageData(0, 0, e.width, e.height)
		} catch (t) {
			return !1
		}
		return this._mapData = i.data, !0
	}, createjs.AlphaMapFilter = createjs.promote(t, "Filter")
}(), this.createjs = this.createjs || {}, function () {
	"use strict";

	function t(t) {
		this.mask = t
	}

	var e = createjs.extend(t, createjs.Filter);
	e.applyFilter = function (t, e, A, i, n, a, o, s) {
		return !this.mask || (null == o && (o = e), null == s && (s = A), (a = a || t).save(), t == a && (a.globalCompositeOperation = "destination-in", a.drawImage(this.mask, o, s), a.restore(), !0))
	}, e.clone = function () {
		return new t(this.mask)
	}, e.toString = function () {
		return "[AlphaMaskFilter]"
	}, createjs.AlphaMaskFilter = createjs.promote(t, "Filter")
}(), this.createjs = this.createjs || {}, function () {
	"use strict";

	function t(t, e, A, i, n, a, o, s) {
		this.redMultiplier = null != t ? t : 1, this.greenMultiplier = null != e ? e : 1, this.blueMultiplier = null != A ? A : 1, this.alphaMultiplier = null != i ? i : 1, this.redOffset = n || 0, this.greenOffset = a || 0, this.blueOffset = o || 0, this.alphaOffset = s || 0
	}

	var e = createjs.extend(t, createjs.Filter);
	e.toString = function () {
		return "[ColorFilter]"
	}, e.clone = function () {
		return new t(this.redMultiplier, this.greenMultiplier, this.blueMultiplier, this.alphaMultiplier, this.redOffset, this.greenOffset, this.blueOffset, this.alphaOffset)
	}, e._applyFilter = function (t) {
		for (var e = t.data, A = e.length, i = 0; A > i; i += 4) e[i] = e[i] * this.redMultiplier + this.redOffset, e[i + 1] = e[i + 1] * this.greenMultiplier + this.greenOffset, e[i + 2] = e[i + 2] * this.blueMultiplier + this.blueOffset, e[i + 3] = e[i + 3] * this.alphaMultiplier + this.alphaOffset;
		return !0
	}, createjs.ColorFilter = createjs.promote(t, "Filter")
}(), this.createjs = this.createjs || {}, function () {
	"use strict";

	function t(t, e, A, i) {
		this.setColor(t, e, A, i)
	}

	var e = t.prototype;
	t.DELTA_INDEX = [0, .01, .02, .04, .05, .06, .07, .08, .1, .11, .12, .14, .15, .16, .17, .18, .2, .21, .22, .24, .25, .27, .28, .3, .32, .34, .36, .38, .4, .42, .44, .46, .48, .5, .53, .56, .59, .62, .65, .68, .71, .74, .77, .8, .83, .86, .89, .92, .95, .98, 1, 1.06, 1.12, 1.18, 1.24, 1.3, 1.36, 1.42, 1.48, 1.54, 1.6, 1.66, 1.72, 1.78, 1.84, 1.9, 1.96, 2, 2.12, 2.25, 2.37, 2.5, 2.62, 2.75, 2.87, 3, 3.2, 3.4, 3.6, 3.8, 4, 4.3, 4.7, 4.9, 5, 5.5, 6, 6.5, 6.8, 7, 7.3, 7.5, 7.8, 8, 8.4, 8.7, 9, 9.4, 9.6, 9.8, 10], t.IDENTITY_MATRIX = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1], t.LENGTH = t.IDENTITY_MATRIX.length, e.setColor = function (t, e, A, i) {
		return this.reset().adjustColor(t, e, A, i)
	}, e.reset = function () {
		return this.copy(t.IDENTITY_MATRIX)
	}, e.adjustColor = function (t, e, A, i) {
		return this.adjustHue(i), this.adjustContrast(e), this.adjustBrightness(t), this.adjustSaturation(A)
	}, e.adjustBrightness = function (t) {
		return 0 == t || isNaN(t) || (t = this._cleanValue(t, 255), this._multiplyMatrix([1, 0, 0, 0, t, 0, 1, 0, 0, t, 0, 0, 1, 0, t, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1])), this
	}, e.adjustContrast = function (e) {
		return 0 == e || isNaN(e) || (0 > (e = this._cleanValue(e, 100)) ? A = 127 + e / 100 * 127 : A = 127 * (A = 0 == (A = e % 1) ? t.DELTA_INDEX[e] : t.DELTA_INDEX[e << 0] * (1 - A) + t.DELTA_INDEX[1 + (e << 0)] * A) + 127, this._multiplyMatrix([A / 127, 0, 0, 0, .5 * (127 - A), 0, A / 127, 0, 0, .5 * (127 - A), 0, 0, A / 127, 0, .5 * (127 - A), 0, 0, 0, 1, 0, 0, 0, 0, 0, 1])), this;
		var A
	}, e.adjustSaturation = function (t) {
		if (0 == t || isNaN(t)) return this;
		var e = 1 + ((t = this._cleanValue(t, 100)) > 0 ? 3 * t / 100 : t / 100), A = .3086, i = .6094, n = .082;
		return this._multiplyMatrix([A * (1 - e) + e, i * (1 - e), n * (1 - e), 0, 0, A * (1 - e), i * (1 - e) + e, n * (1 - e), 0, 0, A * (1 - e), i * (1 - e), n * (1 - e) + e, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1]), this
	}, e.adjustHue = function (t) {
		if (0 == t || isNaN(t)) return this;
		t = this._cleanValue(t, 180) / 180 * Math.PI;
		var e = Math.cos(t), A = Math.sin(t), i = .213, n = .715, a = .072;
		return this._multiplyMatrix([i + e * (1 - i) + A * -i, n + e * -n + A * -n, a + e * -a + A * (1 - a), 0, 0, i + e * -i + .143 * A, n + e * (1 - n) + .14 * A, a + e * -a + -.283 * A, 0, 0, i + e * -i + -.787 * A, n + e * -n + A * n, a + e * (1 - a) + A * a, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1]), this
	}, e.concat = function (e) {
		return (e = this._fixMatrix(e)).length != t.LENGTH || this._multiplyMatrix(e), this
	}, e.clone = function () {
		return (new t).copy(this)
	}, e.toArray = function () {
		for (var e = [], A = 0, i = t.LENGTH; i > A; A++) e[A] = this[A];
		return e
	}, e.copy = function (e) {
		for (var A = t.LENGTH, i = 0; A > i; i++) this[i] = e[i];
		return this
	}, e.toString = function () {
		return "[ColorMatrix]"
	}, e._multiplyMatrix = function (t) {
		var e, A, i, n = [];
		for (e = 0; 5 > e; e++) {
			for (A = 0; 5 > A; A++) n[A] = this[A + 5 * e];
			for (A = 0; 5 > A; A++) {
				var a = 0;
				for (i = 0; 5 > i; i++) a += t[A + 5 * i] * n[i];
				this[A + 5 * e] = a
			}
		}
	}, e._cleanValue = function (t, e) {
		return Math.min(e, Math.max(-e, t))
	}, e._fixMatrix = function (e) {
		return e instanceof t && (e = e.toArray()), e.length < t.LENGTH ? e = e.slice(0, e.length).concat(t.IDENTITY_MATRIX.slice(e.length, t.LENGTH)) : e.length > t.LENGTH && (e = e.slice(0, t.LENGTH)), e
	}, createjs.ColorMatrix = t
}(), this.createjs = this.createjs || {}, function () {
	"use strict";

	function t(t) {
		this.matrix = t
	}

	var e = createjs.extend(t, createjs.Filter);
	e.toString = function () {
		return "[ColorMatrixFilter]"
	}, e.clone = function () {
		return new t(this.matrix)
	}, e._applyFilter = function (t) {
		for (var e, A, i, n, a = t.data, o = a.length, s = this.matrix, r = s[0], g = s[1], h = s[2], l = s[3], c = s[4], u = s[5], d = s[6], p = s[7], Q = s[8], I = s[9], f = s[10], w = s[11], L = s[12], m = s[13], _ = s[14], v = s[15], E = s[16], y = s[17], P = s[18], C = s[19], T = 0; o > T; T += 4) e = a[T], A = a[T + 1], i = a[T + 2], n = a[T + 3], a[T] = e * r + A * g + i * h + n * l + c, a[T + 1] = e * u + A * d + i * p + n * Q + I, a[T + 2] = e * f + A * w + i * L + n * m + _, a[T + 3] = e * v + A * E + i * y + n * P + C;
		return !0
	}, createjs.ColorMatrixFilter = createjs.promote(t, "Filter")
}(), this.createjs = this.createjs || {}, function () {
	"use strict";

	function t() {
		throw"Touch cannot be instantiated"
	}

	t.isSupported = function () {
		return !!("ontouchstart" in window || window.navigator.msPointerEnabled && window.navigator.msMaxTouchPoints > 0 || window.navigator.pointerEnabled && window.navigator.maxTouchPoints > 0)
	}, t.enable = function (e, A, i) {
		return !!(e && e.canvas && t.isSupported()) && (e.__touch || (e.__touch = {
			pointers: {},
			multitouch: !A,
			preventDefault: !i,
			count: 0
		}, "ontouchstart" in window ? t._IOS_enable(e) : (window.navigator.msPointerEnabled || window.navigator.pointerEnabled) && t._IE_enable(e)), !0)
	}, t.disable = function (e) {
		e && ("ontouchstart" in window ? t._IOS_disable(e) : (window.navigator.msPointerEnabled || window.navigator.pointerEnabled) && t._IE_disable(e), delete e.__touch)
	}, t._IOS_enable = function (e) {
		var A = e.canvas, i = e.__touch.f = function (A) {
			t._IOS_handleEvent(e, A)
		};
		A.addEventListener("touchstart", i, !1), A.addEventListener("touchmove", i, !1), A.addEventListener("touchend", i, !1), A.addEventListener("touchcancel", i, !1)
	}, t._IOS_disable = function (t) {
		var e = t.canvas;
		if (e) {
			var A = t.__touch.f;
			e.removeEventListener("touchstart", A, !1), e.removeEventListener("touchmove", A, !1), e.removeEventListener("touchend", A, !1), e.removeEventListener("touchcancel", A, !1)
		}
	}, t._IOS_handleEvent = function (t, e) {
		if (t) {
			t.__touch.preventDefault && e.preventDefault && e.preventDefault();
			for (var A = e.changedTouches, i = e.type, n = 0, a = A.length; a > n; n++) {
				var o = A[n], s = o.identifier;
				o.target == t.canvas && ("touchstart" == i ? this._handleStart(t, s, e, o.pageX, o.pageY) : "touchmove" == i ? this._handleMove(t, s, e, o.pageX, o.pageY) : ("touchend" == i || "touchcancel" == i) && this._handleEnd(t, s, e))
			}
		}
	}, t._IE_enable = function (e) {
		var A = e.canvas, i = e.__touch.f = function (A) {
			t._IE_handleEvent(e, A)
		};
		void 0 === window.navigator.pointerEnabled ? (A.addEventListener("MSPointerDown", i, !1), window.addEventListener("MSPointerMove", i, !1), window.addEventListener("MSPointerUp", i, !1), window.addEventListener("MSPointerCancel", i, !1), e.__touch.preventDefault && (A.style.msTouchAction = "none")) : (A.addEventListener("pointerdown", i, !1), window.addEventListener("pointermove", i, !1), window.addEventListener("pointerup", i, !1), window.addEventListener("pointercancel", i, !1), e.__touch.preventDefault && (A.style.touchAction = "none")), e.__touch.activeIDs = {}
	}, t._IE_disable = function (t) {
		var e = t.__touch.f;
		void 0 === window.navigator.pointerEnabled ? (window.removeEventListener("MSPointerMove", e, !1), window.removeEventListener("MSPointerUp", e, !1), window.removeEventListener("MSPointerCancel", e, !1), t.canvas && t.canvas.removeEventListener("MSPointerDown", e, !1)) : (window.removeEventListener("pointermove", e, !1), window.removeEventListener("pointerup", e, !1), window.removeEventListener("pointercancel", e, !1), t.canvas && t.canvas.removeEventListener("pointerdown", e, !1))
	}, t._IE_handleEvent = function (t, e) {
		if (t) {
			t.__touch.preventDefault && e.preventDefault && e.preventDefault();
			var A = e.type, i = e.pointerId, n = t.__touch.activeIDs;
			if ("MSPointerDown" == A || "pointerdown" == A) {
				if (e.srcElement != t.canvas) return;
				n[i] = !0, this._handleStart(t, i, e, e.pageX, e.pageY)
			} else n[i] && ("MSPointerMove" == A || "pointermove" == A ? this._handleMove(t, i, e, e.pageX, e.pageY) : ("MSPointerUp" == A || "MSPointerCancel" == A || "pointerup" == A || "pointercancel" == A) && (delete n[i], this._handleEnd(t, i, e)))
		}
	}, t._handleStart = function (t, e, A, i, n) {
		var a = t.__touch;
		if (a.multitouch || !a.count) {
			var o = a.pointers;
			o[e] || (o[e] = !0, a.count++, t._handlePointerDown(e, A, i, n))
		}
	}, t._handleMove = function (t, e, A, i, n) {
		t.__touch.pointers[e] && t._handlePointerMove(e, A, i, n)
	}, t._handleEnd = function (t, e, A) {
		var i = t.__touch, n = i.pointers;
		n[e] && (i.count--, t._handlePointerUp(e, A, !0), delete n[e])
	}, createjs.Touch = t
}(), this.createjs = this.createjs || {}, function () {
	"use strict";
	var t = createjs.EaselJS = createjs.EaselJS || {};
	t.version = "0.8.2", t.buildDate = "Thu, 26 Nov 2015 20:44:34 GMT"
}(), this.createjs = this.createjs || {}, function () {
	"use strict";
	var t = createjs.PreloadJS = createjs.PreloadJS || {};
	t.version = "0.6.2", t.buildDate = "Thu, 26 Nov 2015 20:44:31 GMT"
}(), this.createjs = this.createjs || {}, function () {
	"use strict";
	createjs.proxy = function (t, e) {
		var A = Array.prototype.slice.call(arguments, 2);
		return function () {
			return t.apply(e, Array.prototype.slice.call(arguments, 0).concat(A))
		}
	}
}(), this.createjs = this.createjs || {}, function () {
	"use strict";

	function t(t, e, A) {
		this.Event_constructor("error"), this.title = t, this.message = e, this.data = A
	}

	createjs.extend(t, createjs.Event).clone = function () {
		return new createjs.ErrorEvent(this.title, this.message, this.data)
	}, createjs.ErrorEvent = createjs.promote(t, "Event")
}(), this.createjs = this.createjs || {}, function (t) {
	"use strict";

	function e(t, e) {
		this.Event_constructor("progress"), this.loaded = t, this.total = null == e ? 1 : e, this.progress = 0 == e ? 0 : this.loaded / this.total
	}

	createjs.extend(e, createjs.Event).clone = function () {
		return new createjs.ProgressEvent(this.loaded, this.total)
	}, createjs.ProgressEvent = createjs.promote(e, "Event")
}(window), function () {
	function t(e, i) {
		function a(t) {
			if (a[t] !== Q) return a[t];
			var e;
			if ("bug-string-char-index" == t) e = "a" != "a"[0]; else if ("json" == t) e = a("json-stringify") && a("json-parse"); else {
				var A, n = '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';
				if ("json-stringify" == t) {
					var r = i.stringify, h = "function" == typeof r && w;
					if (h) {
						(A = function () {
							return 1
						}).toJSON = A;
						try {
							h = "0" === r(0) && "0" === r(new o) && '""' == r(new s) && r(f) === Q && r(Q) === Q && r() === Q && "1" === r(A) && "[1]" == r([A]) && "[null]" == r([Q]) && "null" == r(null) && "[null,null,null]" == r([Q, f, null]) && r({a: [A, !0, !1, null, "\0\b\n\f\r\t"]}) == n && "1" === r(null, A) && "[\n 1,\n 2\n]" == r([1, 2], null, 1) && '"-271821-04-20T00:00:00.000Z"' == r(new g(-864e13)) && '"+275760-09-13T00:00:00.000Z"' == r(new g(864e13)) && '"-000001-01-01T00:00:00.000Z"' == r(new g(-621987552e5)) && '"1969-12-31T23:59:59.999Z"' == r(new g(-1))
						} catch (t) {
							h = !1
						}
					}
					e = h
				}
				if ("json-parse" == t) {
					var l = i.parse;
					if ("function" == typeof l) try {
						if (0 === l("0") && !l(!1)) {
							var c = 5 == (A = l(n)).a.length && 1 === A.a[0];
							if (c) {
								try {
									c = !l('"\t"')
								} catch (t) {
								}
								if (c) try {
									c = 1 !== l("01")
								} catch (t) {
								}
								if (c) try {
									c = 1 !== l("1.")
								} catch (t) {
								}
							}
						}
					} catch (t) {
						c = !1
					}
					e = c
				}
			}
			return a[t] = !!e
		}

		e || (e = n.Object()), i || (i = n.Object());
		var o = e.Number || n.Number, s = e.String || n.String, r = e.Object || n.Object, g = e.Date || n.Date,
			h = e.SyntaxError || n.SyntaxError, l = e.TypeError || n.TypeError, c = e.Math || n.Math,
			u = e.JSON || n.JSON;
		"object" == typeof u && u && (i.stringify = u.stringify, i.parse = u.parse);
		var d, p, Q, I = r.prototype, f = I.toString, w = new g(-0xc782b5b800cec);
		try {
			w = -109252 == w.getUTCFullYear() && 0 === w.getUTCMonth() && 1 === w.getUTCDate() && 10 == w.getUTCHours() && 37 == w.getUTCMinutes() && 6 == w.getUTCSeconds() && 708 == w.getUTCMilliseconds()
		} catch (t) {
		}
		if (!a("json")) {
			var L = "[object Function]", m = "[object Number]", _ = "[object String]", v = "[object Array]",
				E = a("bug-string-char-index");
			if (!w) var y = c.floor, P = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334], C = function (t, e) {
				return P[e] + 365 * (t - 1970) + y((t - 1969 + (e = +(e > 1))) / 4) - y((t - 1901 + e) / 100) + y((t - 1601 + e) / 400)
			};
			if ((d = I.hasOwnProperty) || (d = function (t) {
				var e, A = {};
				return (A.__proto__ = null, A.__proto__ = {toString: 1}, A).toString != f ? d = function (t) {
					var e = this.__proto__, A = t in (this.__proto__ = null, this);
					return this.__proto__ = e, A
				} : (e = A.constructor, d = function (t) {
					var A = (this.constructor || e).prototype;
					return t in this && !(t in A && this[t] === A[t])
				}), A = null, d.call(this, t)
			}), p = function (t, e) {
				var i, n, a, o = 0;
				for (a in (i = function () {
					this.valueOf = 0
				}).prototype.valueOf = 0, n = new i) d.call(n, a) && o++;
				return i = n = null, o ? p = 2 == o ? function (t, e) {
					var A, i = {}, n = f.call(t) == L;
					for (A in t) n && "prototype" == A || d.call(i, A) || !(i[A] = 1) || !d.call(t, A) || e(A)
				} : function (t, e) {
					var A, i, n = f.call(t) == L;
					for (A in t) n && "prototype" == A || !d.call(t, A) || (i = "constructor" === A) || e(A);
					(i || d.call(t, A = "constructor")) && e(A)
				} : (n = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"], p = function (t, e) {
					var i, a, o = f.call(t) == L,
						s = !o && "function" != typeof t.constructor && A[typeof t.hasOwnProperty] && t.hasOwnProperty || d;
					for (i in t) o && "prototype" == i || !s.call(t, i) || e(i);
					for (a = n.length; i = n[--a]; s.call(t, i) && e(i)) ;
				}), p(t, e)
			}, !a("json-stringify")) {
				var T = {92: "\\\\", 34: '\\"', 8: "\\b", 12: "\\f", 10: "\\n", 13: "\\r", 9: "\\t"},
					K = function (t, e) {
						return ("000000" + (e || 0)).slice(-t)
					}, B = function (t) {
						for (var e = '"', A = 0, i = t.length, n = !E || i > 10, a = n && (E ? t.split("") : t); i > A; A++) {
							var o = t.charCodeAt(A);
							switch (o) {
								case 8:
								case 9:
								case 10:
								case 12:
								case 13:
								case 34:
								case 92:
									e += T[o];
									break;
								default:
									if (32 > o) {
										e += "\\u00" + K(2, o.toString(16));
										break
									}
									e += n ? a[A] : t.charAt(A)
							}
						}
						return e + '"'
					}, x = function (t, e, A, i, n, a, o) {
						var s, r, g, h, c, u, I, w, L, E, P, T, b, S, H, D;
						try {
							s = e[t]
						} catch (t) {
						}
						if ("object" == typeof s && s) if ("[object Date]" != (r = f.call(s)) || d.call(s, "toJSON")) "function" == typeof s.toJSON && (r != m && r != _ && r != v || d.call(s, "toJSON")) && (s = s.toJSON(t)); else if (s > -1 / 0 && 1 / 0 > s) {
							if (C) {
								for (c = y(s / 864e5), g = y(c / 365.2425) + 1970 - 1; C(g + 1, 0) <= c; g++) ;
								for (h = y((c - C(g, 0)) / 30.42); C(g, h + 1) <= c; h++) ;
								c = 1 + c - C(g, h), I = y((u = (s % 864e5 + 864e5) % 864e5) / 36e5) % 24, w = y(u / 6e4) % 60, L = y(u / 1e3) % 60, E = u % 1e3
							} else g = s.getUTCFullYear(), h = s.getUTCMonth(), c = s.getUTCDate(), I = s.getUTCHours(), w = s.getUTCMinutes(), L = s.getUTCSeconds(), E = s.getUTCMilliseconds();
							s = (0 >= g || g >= 1e4 ? (0 > g ? "-" : "+") + K(6, 0 > g ? -g : g) : K(4, g)) + "-" + K(2, h + 1) + "-" + K(2, c) + "T" + K(2, I) + ":" + K(2, w) + ":" + K(2, L) + "." + K(3, E) + "Z"
						} else s = null;
						if (A && (s = A.call(e, t, s)), null === s) return "null";
						if ("[object Boolean]" == (r = f.call(s))) return "" + s;
						if (r == m) return s > -1 / 0 && 1 / 0 > s ? "" + s : "null";
						if (r == _) return B("" + s);
						if ("object" == typeof s) {
							for (S = o.length; S--;) if (o[S] === s) throw l();
							if (o.push(s), P = [], H = a, a += n, r == v) {
								for (b = 0, S = s.length; S > b; b++) T = x(b, s, A, i, n, a, o), P.push(T === Q ? "null" : T);
								D = P.length ? n ? "[\n" + a + P.join(",\n" + a) + "\n" + H + "]" : "[" + P.join(",") + "]" : "[]"
							} else p(i || s, (function (t) {
								var e = x(t, s, A, i, n, a, o);
								e !== Q && P.push(B(t) + ":" + (n ? " " : "") + e)
							})), D = P.length ? n ? "{\n" + a + P.join(",\n" + a) + "\n" + H + "}" : "{" + P.join(",") + "}" : "{}";
							return o.pop(), D
						}
					};
				i.stringify = function (t, e, i) {
					var n, a, o, s;
					if (A[typeof e] && e) if ((s = f.call(e)) == L) a = e; else if (s == v) {
						o = {};
						for (var r, g = 0, h = e.length; h > g; r = e[g++], ((s = f.call(r)) == _ || s == m) && (o[r] = 1)) ;
					}
					if (i) if ((s = f.call(i)) == m) {
						if ((i -= i % 1) > 0) for (n = "", i > 10 && (i = 10); n.length < i; n += " ") ;
					} else s == _ && (n = i.length <= 10 ? i : i.slice(0, 10));
					return x("", ((r = {})[""] = t, r), a, o, n, "", [])
				}
			}
			if (!a("json-parse")) {
				var b, S, H = s.fromCharCode,
					D = {92: "\\", 34: '"', 47: "/", 98: "\b", 116: "\t", 110: "\n", 102: "\f", 114: "\r"},
					F = function () {
						throw b = S = null, h()
					}, j = function () {
						for (var t, e, A, i, n, a = S, o = a.length; o > b;) switch (n = a.charCodeAt(b)) {
							case 9:
							case 10:
							case 13:
							case 32:
								b++;
								break;
							case 123:
							case 125:
							case 91:
							case 93:
							case 58:
							case 44:
								return t = E ? a.charAt(b) : a[b], b++, t;
							case 34:
								for (t = "@", b++; o > b;) if (32 > (n = a.charCodeAt(b))) F(); else if (92 == n) switch (n = a.charCodeAt(++b)) {
									case 92:
									case 34:
									case 47:
									case 98:
									case 116:
									case 110:
									case 102:
									case 114:
										t += D[n], b++;
										break;
									case 117:
										for (e = ++b, A = b + 4; A > b; b++) (n = a.charCodeAt(b)) >= 48 && 57 >= n || n >= 97 && 102 >= n || n >= 65 && 70 >= n || F();
										t += H("0x" + a.slice(e, b));
										break;
									default:
										F()
								} else {
									if (34 == n) break;
									for (n = a.charCodeAt(b), e = b; n >= 32 && 92 != n && 34 != n;) n = a.charCodeAt(++b);
									t += a.slice(e, b)
								}
								if (34 == a.charCodeAt(b)) return b++, t;
								F();
							default:
								if (e = b, 45 == n && (i = !0, n = a.charCodeAt(++b)), n >= 48 && 57 >= n) {
									for (48 == n && ((n = a.charCodeAt(b + 1)) >= 48 && 57 >= n) && F(), i = !1; o > b && ((n = a.charCodeAt(b)) >= 48 && 57 >= n); b++) ;
									if (46 == a.charCodeAt(b)) {
										for (A = ++b; o > A && ((n = a.charCodeAt(A)) >= 48 && 57 >= n); A++) ;
										A == b && F(), b = A
									}
									if (101 == (n = a.charCodeAt(b)) || 69 == n) {
										for ((43 == (n = a.charCodeAt(++b)) || 45 == n) && b++, A = b; o > A && ((n = a.charCodeAt(A)) >= 48 && 57 >= n); A++) ;
										A == b && F(), b = A
									}
									return +a.slice(e, b)
								}
								if (i && F(), "true" == a.slice(b, b + 4)) return b += 4, !0;
								if ("false" == a.slice(b, b + 5)) return b += 5, !1;
								if ("null" == a.slice(b, b + 4)) return b += 4, null;
								F()
						}
						return "$"
					}, M = function (t) {
						var e, A;
						if ("$" == t && F(), "string" == typeof t) {
							if ("@" == (E ? t.charAt(0) : t[0])) return t.slice(1);
							if ("[" == t) {
								for (e = []; "]" != (t = j()); A || (A = !0)) A && ("," == t ? "]" == (t = j()) && F() : F()), "," == t && F(), e.push(M(t));
								return e
							}
							if ("{" == t) {
								for (e = {}; "}" != (t = j()); A || (A = !0)) A && ("," == t ? "}" == (t = j()) && F() : F()), ("," == t || "string" != typeof t || "@" != (E ? t.charAt(0) : t[0]) || ":" != j()) && F(), e[t.slice(1)] = M(j());
								return e
							}
							F()
						}
						return t
					}, k = function (t, e, A) {
						var i = G(t, e, A);
						i === Q ? delete t[e] : t[e] = i
					}, G = function (t, e, A) {
						var i, n = t[e];
						if ("object" == typeof n && n) if (f.call(n) == v) for (i = n.length; i--;) k(n, i, A); else p(n, (function (t) {
							k(n, t, A)
						}));
						return A.call(t, e, n)
					};
				i.parse = function (t, e) {
					var A, i;
					return b = 0, S = "" + t, A = M(j()), "$" != j() && F(), b = S = null, e && f.call(e) == L ? G(((i = {})[""] = A, i), "", e) : A
				}
			}
		}
		return i.runInContext = t, i
	}

	var e = "function" == typeof define && define.amd, A = {function: !0, object: !0},
		i = A[typeof exports] && exports && !exports.nodeType && exports, n = A[typeof window] && window || this,
		a = i && A[typeof module] && module && !module.nodeType && "object" == typeof global && global;
	if (!a || a.global !== a && a.window !== a && a.self !== a || (n = a), i && !e) t(n, i); else {
		var o = n.JSON, s = n.JSON3, r = !1, g = t(n, n.JSON3 = {
			noConflict: function () {
				return r || (r = !0, n.JSON = o, n.JSON3 = s, o = s = null), g
			}
		});
		n.JSON = {parse: g.parse, stringify: g.stringify}
	}
	e && define((function () {
		return g
	}))
}.call(this), function () {
	var t = {
		appendToHead: function (e) {
			t.getHead().appendChild(e)
		}, getHead: function () {
			return document.head || document.getElementsByTagName("head")[0]
		}, getBody: function () {
			return document.body || document.getElementsByTagName("body")[0]
		}
	};
	createjs.DomUtils = t
}(), function () {
	var t = {
		parseXML: function (t, e) {
			var A = null;
			try {
				if (window.DOMParser) A = (new DOMParser).parseFromString(t, e)
			} catch (t) {
			}
			if (!A) try {
				(A = new ActiveXObject("Microsoft.XMLDOM")).async = !1, A.loadXML(t)
			} catch (t) {
				A = null
			}
			return A
		}, parseJSON: function (t) {
			if (null == t) return null;
			try {
				return JSON.parse(t)
			} catch (t) {
				throw t
			}
		}
	};
	createjs.DataUtils = t
}(), this.createjs = this.createjs || {}, function () {
	"use strict";

	function t() {
		this.src = null, this.type = null, this.id = null, this.maintainOrder = !1, this.callback = null, this.data = null, this.method = createjs.LoadItem.GET, this.values = null, this.headers = null, this.withCredentials = !1, this.mimeType = null, this.crossOrigin = null, this.loadTimeout = A.LOAD_TIMEOUT_DEFAULT
	}

	var e = t.prototype = {}, A = t;
	A.LOAD_TIMEOUT_DEFAULT = 8e3, A.create = function (e) {
		if ("string" == typeof e) {
			var i = new t;
			return i.src = e, i
		}
		if (e instanceof A) return e;
		if (e instanceof Object && e.src) return null == e.loadTimeout && (e.loadTimeout = A.LOAD_TIMEOUT_DEFAULT), e;
		throw new Error("Type not recognized.")
	}, e.set = function (t) {
		for (var e in t) this[e] = t[e];
		return this
	}, createjs.LoadItem = A
}(), function () {
	var t = {
		ABSOLUTE_PATT: /^(?:\w+:)?\/{2}/i,
		RELATIVE_PATT: /^[.\/]*?\//i,
		EXTENSION_PATT: /\/?[^\/]+\.(\w{1,5})$/i,
		parseURI: function (e) {
			var A = {absolute: !1, relative: !1};
			if (null == e) return A;
			var i, n = e.indexOf("?");
			return n > -1 && (e = e.substr(0, n)), t.ABSOLUTE_PATT.test(e) ? A.absolute = !0 : t.RELATIVE_PATT.test(e) && (A.relative = !0), (i = e.match(t.EXTENSION_PATT)) && (A.extension = i[1].toLowerCase()), A
		},
		formatQueryString: function (t, e) {
			if (null == t) throw new Error("You must specify data.");
			var A = [];
			for (var i in t) A.push(i + "=" + escape(t[i]));
			return e && (A = A.concat(e)), A.join("&")
		},
		buildPath: function (t, e) {
			if (null == e) return t;
			var A = [], i = t.indexOf("?");
			if (-1 != i) {
				var n = t.slice(i + 1);
				A = A.concat(n.split("&"))
			}
			return -1 != i ? t.slice(0, i) + "?" + this.formatQueryString(e, A) : t + "?" + this.formatQueryString(e, A)
		},
		isCrossDomain: function (t) {
			var e = document.createElement("a");
			e.href = t.src;
			var A = document.createElement("a");
			return A.href = location.href, "" != e.hostname && (e.port != A.port || e.protocol != A.protocol || e.hostname != A.hostname)
		},
		isLocal: function (t) {
			var e = document.createElement("a");
			return e.href = t.src, "" == e.hostname && "file:" == e.protocol
		},
		isBinary: function (t) {
			switch (t) {
				case createjs.AbstractLoader.IMAGE:
				case createjs.AbstractLoader.BINARY:
					return !0;
				default:
					return !1
			}
		},
		isImageTag: function (t) {
			return t instanceof HTMLImageElement
		},
		isAudioTag: function (t) {
			return !!window.HTMLAudioElement && t instanceof HTMLAudioElement
		},
		isVideoTag: function (t) {
			return !!window.HTMLVideoElement && t instanceof HTMLVideoElement
		},
		isText: function (t) {
			switch (t) {
				case createjs.AbstractLoader.TEXT:
				case createjs.AbstractLoader.JSON:
				case createjs.AbstractLoader.MANIFEST:
				case createjs.AbstractLoader.XML:
				case createjs.AbstractLoader.CSS:
				case createjs.AbstractLoader.SVG:
				case createjs.AbstractLoader.JAVASCRIPT:
				case createjs.AbstractLoader.SPRITESHEET:
					return !0;
				default:
					return !1
			}
		},
		getTypeByExtension: function (t) {
			if (null == t) return createjs.AbstractLoader.TEXT;
			switch (t.toLowerCase()) {
				case"jpeg":
				case"jpg":
				case"gif":
				case"png":
				case"webp":
				case"bmp":
					return createjs.AbstractLoader.IMAGE;
				case"ogg":
				case"mp3":
				case"webm":
					return createjs.AbstractLoader.SOUND;
				case"mp4":
				case"webm":
				case"ts":
					return createjs.AbstractLoader.VIDEO;
				case"json":
					return createjs.AbstractLoader.JSON;
				case"xml":
					return createjs.AbstractLoader.XML;
				case"css":
					return createjs.AbstractLoader.CSS;
				case"js":
					return createjs.AbstractLoader.JAVASCRIPT;
				case"svg":
					return createjs.AbstractLoader.SVG;
				default:
					return createjs.AbstractLoader.TEXT
			}
		}
	};
	createjs.RequestUtils = t
}(), this.createjs = this.createjs || {}, function () {
	"use strict";

	function t(t, e, A) {
		this.EventDispatcher_constructor(), this.loaded = !1, this.canceled = !1, this.progress = 0, this.type = A, this.resultFormatter = null, this._item = t ? createjs.LoadItem.create(t) : null, this._preferXHR = e, this._result = null, this._rawResult = null, this._loadedItems = null, this._tagSrcAttribute = null, this._tag = null
	}

	var e = createjs.extend(t, createjs.EventDispatcher), A = t;
	A.POST = "POST", A.GET = "GET", A.BINARY = "binary", A.CSS = "css", A.IMAGE = "image", A.JAVASCRIPT = "javascript", A.JSON = "json", A.JSONP = "jsonp", A.MANIFEST = "manifest", A.SOUND = "sound", A.VIDEO = "video", A.SPRITESHEET = "spritesheet", A.SVG = "svg", A.TEXT = "text", A.XML = "xml", e.getItem = function () {
		return this._item
	}, e.getResult = function (t) {
		return t ? this._rawResult : this._result
	}, e.getTag = function () {
		return this._tag
	}, e.setTag = function (t) {
		this._tag = t
	}, e.load = function () {
		this._createRequest(), this._request.on("complete", this, this), this._request.on("progress", this, this), this._request.on("loadStart", this, this), this._request.on("abort", this, this), this._request.on("timeout", this, this), this._request.on("error", this, this);
		var t = new createjs.Event("initialize");
		t.loader = this._request, this.dispatchEvent(t), this._request.load()
	}, e.cancel = function () {
		this.canceled = !0, this.destroy()
	}, e.destroy = function () {
		this._request && (this._request.removeAllEventListeners(), this._request.destroy()), this._request = null, this._item = null, this._rawResult = null, this._result = null, this._loadItems = null, this.removeAllEventListeners()
	}, e.getLoadedItems = function () {
		return this._loadedItems
	}, e._createRequest = function () {
		this._preferXHR ? this._request = new createjs.XHRRequest(this._item) : this._request = new createjs.TagRequest(this._item, this._tag || this._createTag(), this._tagSrcAttribute)
	}, e._createTag = function (t) {
		return null
	}, e._sendLoadStart = function () {
		this._isCanceled() || this.dispatchEvent("loadstart")
	}, e._sendProgress = function (t) {
		if (!this._isCanceled()) {
			var e = null;
			"number" == typeof t ? (this.progress = t, e = new createjs.ProgressEvent(this.progress)) : (e = t, this.progress = t.loaded / t.total, e.progress = this.progress, (isNaN(this.progress) || this.progress == 1 / 0) && (this.progress = 0)), this.hasEventListener("progress") && this.dispatchEvent(e)
		}
	}, e._sendComplete = function () {
		if (!this._isCanceled()) {
			this.loaded = !0;
			var t = new createjs.Event("complete");
			t.rawResult = this._rawResult, null != this._result && (t.result = this._result), this.dispatchEvent(t)
		}
	}, e._sendError = function (t) {
		!this._isCanceled() && this.hasEventListener("error") && (null == t && (t = new createjs.ErrorEvent("PRELOAD_ERROR_EMPTY")), this.dispatchEvent(t))
	}, e._isCanceled = function () {
		return !(null != window.createjs && !this.canceled)
	}, e.resultFormatter = null, e.handleEvent = function (t) {
		switch (t.type) {
			case"complete":
				this._rawResult = t.target._response;
				var e = this.resultFormatter && this.resultFormatter(this);
				e instanceof Function ? e.call(this, createjs.proxy(this._resultFormatSuccess, this), createjs.proxy(this._resultFormatFailed, this)) : (this._result = e || this._rawResult, this._sendComplete());
				break;
			case"progress":
				this._sendProgress(t);
				break;
			case"error":
				this._sendError(t);
				break;
			case"loadstart":
				this._sendLoadStart();
				break;
			case"abort":
			case"timeout":
				this._isCanceled() || this.dispatchEvent(new createjs.ErrorEvent("PRELOAD_" + t.type.toUpperCase() + "_ERROR"))
		}
	}, e._resultFormatSuccess = function (t) {
		this._result = t, this._sendComplete()
	}, e._resultFormatFailed = function (t) {
		this._sendError(t)
	}, e.buildPath = function (t, e) {
		return createjs.RequestUtils.buildPath(t, e)
	}, e.toString = function () {
		return "[PreloadJS AbstractLoader]"
	}, createjs.AbstractLoader = createjs.promote(t, "EventDispatcher")
}(), this.createjs = this.createjs || {}, function () {
	"use strict";

	function t(t, e, A) {
		this.AbstractLoader_constructor(t, e, A), this.resultFormatter = this._formatResult, this._tagSrcAttribute = "src", this.on("initialize", this._updateXHR, this)
	}

	var e = createjs.extend(t, createjs.AbstractLoader);
	e.load = function () {
		this._tag || (this._tag = this._createTag(this._item.src)), this._tag.preload = "auto", this._tag.load(), this.AbstractLoader_load()
	}, e._createTag = function () {
	}, e._createRequest = function () {
		this._preferXHR ? this._request = new createjs.XHRRequest(this._item) : this._request = new createjs.MediaTagRequest(this._item, this._tag || this._createTag(), this._tagSrcAttribute)
	}, e._updateXHR = function (t) {
		t.loader.setResponseType && t.loader.setResponseType("blob")
	}, e._formatResult = function (t) {
		if (this._tag.removeEventListener && this._tag.removeEventListener("canplaythrough", this._loadedHandler), this._tag.onstalled = null, this._preferXHR) {
			var e = window.URL || window.webkitURL, A = t.getResult(!0);
			t.getTag().src = e.createObjectURL(A)
		}
		return t.getTag()
	}, createjs.AbstractMediaLoader = createjs.promote(t, "AbstractLoader")
}(), this.createjs = this.createjs || {}, function () {
	"use strict";
	var t = function (t) {
		this._item = t
	}, e = createjs.extend(t, createjs.EventDispatcher);
	e.load = function () {
	}, e.destroy = function () {
	}, e.cancel = function () {
	}, createjs.AbstractRequest = createjs.promote(t, "EventDispatcher")
}(), this.createjs = this.createjs || {}, function () {
	"use strict";

	function t(t, e, A) {
		this.AbstractRequest_constructor(t), this._tag = e, this._tagSrcAttribute = A, this._loadedHandler = createjs.proxy(this._handleTagComplete, this), this._addedToDOM = !1, this._startTagVisibility = null
	}

	var e = createjs.extend(t, createjs.AbstractRequest);
	e.load = function () {
		this._tag.onload = createjs.proxy(this._handleTagComplete, this), this._tag.onreadystatechange = createjs.proxy(this._handleReadyStateChange, this), this._tag.onerror = createjs.proxy(this._handleError, this);
		var t = new createjs.Event("initialize");
		t.loader = this._tag, this.dispatchEvent(t), this._hideTag(), this._loadTimeout = setTimeout(createjs.proxy(this._handleTimeout, this), this._item.loadTimeout), this._tag[this._tagSrcAttribute] = this._item.src, null == this._tag.parentNode && (window.document.body.appendChild(this._tag), this._addedToDOM = !0)
	}, e.destroy = function () {
		this._clean(), this._tag = null, this.AbstractRequest_destroy()
	}, e._handleReadyStateChange = function () {
		clearTimeout(this._loadTimeout);
		var t = this._tag;
		("loaded" == t.readyState || "complete" == t.readyState) && this._handleTagComplete()
	}, e._handleError = function () {
		this._clean(), this.dispatchEvent("error")
	}, e._handleTagComplete = function () {
		this._rawResult = this._tag, this._result = this.resultFormatter && this.resultFormatter(this) || this._rawResult, this._clean(), this._showTag(), this.dispatchEvent("complete")
	}, e._handleTimeout = function () {
		this._clean(), this.dispatchEvent(new createjs.Event("timeout"))
	}, e._clean = function () {
		this._tag.onload = null, this._tag.onreadystatechange = null, this._tag.onerror = null, this._addedToDOM && null != this._tag.parentNode && this._tag.parentNode.removeChild(this._tag), clearTimeout(this._loadTimeout)
	}, e._hideTag = function () {
		this._startTagVisibility = this._tag.style.visibility, this._tag.style.visibility = "hidden"
	}, e._showTag = function () {
		this._tag.style.visibility = this._startTagVisibility
	}, e._handleStalled = function () {
	}, createjs.TagRequest = createjs.promote(t, "AbstractRequest")
}(), this.createjs = this.createjs || {}, function () {
	"use strict";

	function t(t, e, A) {
		this.AbstractRequest_constructor(t), this._tag = e, this._tagSrcAttribute = A, this._loadedHandler = createjs.proxy(this._handleTagComplete, this)
	}

	var e = createjs.extend(t, createjs.TagRequest);
	e.load = function () {
		var t = createjs.proxy(this._handleStalled, this);
		this._stalledCallback = t;
		var e = createjs.proxy(this._handleProgress, this);
		this._handleProgress = e, this._tag.addEventListener("stalled", t), this._tag.addEventListener("progress", e), this._tag.addEventListener && this._tag.addEventListener("canplaythrough", this._loadedHandler, !1), this.TagRequest_load()
	}, e._handleReadyStateChange = function () {
		clearTimeout(this._loadTimeout);
		var t = this._tag;
		("loaded" == t.readyState || "complete" == t.readyState) && this._handleTagComplete()
	}, e._handleStalled = function () {
	}, e._handleProgress = function (t) {
		if (t && !(t.loaded > 0 && 0 == t.total)) {
			var e = new createjs.ProgressEvent(t.loaded, t.total);
			this.dispatchEvent(e)
		}
	}, e._clean = function () {
		this._tag.removeEventListener && this._tag.removeEventListener("canplaythrough", this._loadedHandler), this._tag.removeEventListener("stalled", this._stalledCallback), this._tag.removeEventListener("progress", this._progressCallback), this.TagRequest__clean()
	}, createjs.MediaTagRequest = createjs.promote(t, "TagRequest")
}(),this.createjs = this.createjs || {},function () {
	"use strict";

	function t(t) {
		this.AbstractRequest_constructor(t), this._request = null, this._loadTimeout = null, this._xhrLevel = 1, this._response = null, this._rawResponse = null, this._canceled = !1, this._handleLoadStartProxy = createjs.proxy(this._handleLoadStart, this), this._handleProgressProxy = createjs.proxy(this._handleProgress, this), this._handleAbortProxy = createjs.proxy(this._handleAbort, this), this._handleErrorProxy = createjs.proxy(this._handleError, this), this._handleTimeoutProxy = createjs.proxy(this._handleTimeout, this), this._handleLoadProxy = createjs.proxy(this._handleLoad, this), this._handleReadyStateChangeProxy = createjs.proxy(this._handleReadyStateChange, this), this._createXHR(t)
	}

	var e = createjs.extend(t, createjs.AbstractRequest);
	t.ACTIVEX_VERSIONS = ["Msxml2.XMLHTTP.6.0", "Msxml2.XMLHTTP.5.0", "Msxml2.XMLHTTP.4.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], e.getResult = function (t) {
		return t && this._rawResponse ? this._rawResponse : this._response
	}, e.cancel = function () {
		this.canceled = !0, this._clean(), this._request.abort()
	}, e.load = function () {
		if (null != this._request) {
			null != this._request.addEventListener ? (this._request.addEventListener("loadstart", this._handleLoadStartProxy, !1), this._request.addEventListener("progress", this._handleProgressProxy, !1), this._request.addEventListener("abort", this._handleAbortProxy, !1), this._request.addEventListener("error", this._handleErrorProxy, !1), this._request.addEventListener("timeout", this._handleTimeoutProxy, !1), this._request.addEventListener("load", this._handleLoadProxy, !1), this._request.addEventListener("readystatechange", this._handleReadyStateChangeProxy, !1)) : (this._request.onloadstart = this._handleLoadStartProxy, this._request.onprogress = this._handleProgressProxy, this._request.onabort = this._handleAbortProxy, this._request.onerror = this._handleErrorProxy, this._request.ontimeout = this._handleTimeoutProxy, this._request.onload = this._handleLoadProxy, this._request.onreadystatechange = this._handleReadyStateChangeProxy), 1 == this._xhrLevel && (this._loadTimeout = setTimeout(createjs.proxy(this._handleTimeout, this), this._item.loadTimeout));
			try {
				this._item.values && this._item.method != createjs.AbstractLoader.GET ? this._item.method == createjs.AbstractLoader.POST && this._request.send(createjs.RequestUtils.formatQueryString(this._item.values)) : this._request.send()
			} catch (t) {
				this.dispatchEvent(new createjs.ErrorEvent("XHR_SEND", null, t))
			}
		} else this._handleError()
	}, e.setResponseType = function (t) {
		"blob" === t && (t = window.URL ? "blob" : "arraybuffer", this._responseType = t), this._request.responseType = t
	}, e.getAllResponseHeaders = function () {
		return this._request.getAllResponseHeaders instanceof Function ? this._request.getAllResponseHeaders() : null
	}, e.getResponseHeader = function (t) {
		return this._request.getResponseHeader instanceof Function ? this._request.getResponseHeader(t) : null
	}, e._handleProgress = function (t) {
		if (t && !(t.loaded > 0 && 0 == t.total)) {
			var e = new createjs.ProgressEvent(t.loaded, t.total);
			this.dispatchEvent(e)
		}
	}, e._handleLoadStart = function (t) {
		clearTimeout(this._loadTimeout), this.dispatchEvent("loadstart")
	}, e._handleAbort = function (t) {
		this._clean(), this.dispatchEvent(new createjs.ErrorEvent("XHR_ABORTED", null, t))
	}, e._handleError = function (t) {
		this._clean(), this.dispatchEvent(new createjs.ErrorEvent(t.message))
	}, e._handleReadyStateChange = function (t) {
		4 == this._request.readyState && this._handleLoad()
	}, e._handleLoad = function (t) {
		if (!this.loaded) {
			this.loaded = !0;
			var e = this._checkError();
			if (e) return void this._handleError(e);
			if (this._response = this._getResponse(), "arraybuffer" === this._responseType) try {
				this._response = new Blob([this._response])
			} catch (t) {
				if (window.BlobBuilder = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder, "TypeError" === t.name && window.BlobBuilder) {
					var A = new BlobBuilder;
					A.append(this._response), this._response = A.getBlob()
				}
			}
			this._clean(), this.dispatchEvent(new createjs.Event("complete"))
		}
	}, e._handleTimeout = function (t) {
		this._clean(), this.dispatchEvent(new createjs.ErrorEvent("PRELOAD_TIMEOUT", null, t))
	}, e._checkError = function () {
		var t = parseInt(this._request.status);
		switch (t) {
			case 404:
			case 0:
				return new Error(t)
		}
		return null
	}, e._getResponse = function () {
		if (null != this._response) return this._response;
		if (null != this._request.response) return this._request.response;
		try {
			if (null != this._request.responseText) return this._request.responseText
		} catch (t) {
		}
		try {
			if (null != this._request.responseXML) return this._request.responseXML
		} catch (t) {
		}
		return null
	}, e._createXHR = function (t) {
		var e = createjs.RequestUtils.isCrossDomain(t), A = {}, i = null;
		if (window.XMLHttpRequest) i = new XMLHttpRequest, e && void 0 === i.withCredentials && window.XDomainRequest && (i = new XDomainRequest); else {
			for (var n = 0, a = s.ACTIVEX_VERSIONS.length; a > n; n++) {
				var o = s.ACTIVEX_VERSIONS[n];
				try {
					i = new ActiveXObject(o);
					break
				} catch (t) {
				}
			}
			if (null == i) return !1
		}
		null == t.mimeType && createjs.RequestUtils.isText(t.type) && (t.mimeType = "text/plain; charset=utf-8"), t.mimeType && i.overrideMimeType && i.overrideMimeType(t.mimeType), this._xhrLevel = "string" == typeof i.responseType ? 2 : 1;
		var r;
		if (r = t.method == createjs.AbstractLoader.GET ? createjs.RequestUtils.buildPath(t.src, t.values) : t.src, i.open(t.method || createjs.AbstractLoader.GET, r, !0), e && i instanceof XMLHttpRequest && 1 == this._xhrLevel && (A.Origin = location.origin), t.values && t.method == createjs.AbstractLoader.POST && (A["Content-Type"] = "application/x-www-form-urlencoded"), e || A["X-Requested-With"] || (A["X-Requested-With"] = "XMLHttpRequest"), t.headers) for (var g in t.headers) A[g] = t.headers[g];
		for (g in A) i.setRequestHeader(g, A[g]);
		return i instanceof XMLHttpRequest && void 0 !== t.withCredentials && (i.withCredentials = t.withCredentials), this._request = i, !0
	}, e._clean = function () {
		clearTimeout(this._loadTimeout), null != this._request.removeEventListener ? (this._request.removeEventListener("loadstart", this._handleLoadStartProxy), this._request.removeEventListener("progress", this._handleProgressProxy), this._request.removeEventListener("abort", this._handleAbortProxy), this._request.removeEventListener("error", this._handleErrorProxy), this._request.removeEventListener("timeout", this._handleTimeoutProxy), this._request.removeEventListener("load", this._handleLoadProxy), this._request.removeEventListener("readystatechange", this._handleReadyStateChangeProxy)) : (this._request.onloadstart = null, this._request.onprogress = null, this._request.onabort = null, this._request.onerror = null, this._request.ontimeout = null, this._request.onload = null, this._request.onreadystatechange = null)
	}, e.toString = function () {
		return "[PreloadJS XHRRequest]"
	}, createjs.XHRRequest = createjs.promote(t, "AbstractRequest")
}(),this.createjs = this.createjs || {},function () {
	"use strict";

	function t(t, e, A) {
		this.AbstractLoader_constructor(), this._plugins = [], this._typeCallbacks = {}, this._extensionCallbacks = {}, this.next = null, this.maintainScriptOrder = !0, this.stopOnError = !1, this._maxConnections = 1, this._availableLoaders = [createjs.ImageLoader, createjs.JavaScriptLoader, createjs.CSSLoader, createjs.JSONLoader, createjs.JSONPLoader, createjs.SoundLoader, createjs.ManifestLoader, createjs.SpriteSheetLoader, createjs.XMLLoader, createjs.SVGLoader, createjs.BinaryLoader, createjs.VideoLoader, createjs.TextLoader], this._defaultLoaderLength = this._availableLoaders.length, this.init(t, e, A)
	}

	var e = createjs.extend(t, createjs.AbstractLoader), A = t;
	e.init = function (t, e, A) {
		this.useXHR = !0, this.preferXHR = !0, this._preferXHR = !0, this.setPreferXHR(t), this._paused = !1, this._basePath = e, this._crossOrigin = A, this._loadStartWasDispatched = !1, this._currentlyLoadingScript = null, this._currentLoads = [], this._loadQueue = [], this._loadQueueBackup = [], this._loadItemsById = {}, this._loadItemsBySrc = {}, this._loadedResults = {}, this._loadedRawResults = {}, this._numItems = 0, this._numItemsLoaded = 0, this._scriptOrder = [], this._loadedScripts = [], this._lastProgress = NaN
	}, A.loadTimeout = 8e3, A.LOAD_TIMEOUT = 0, A.BINARY = createjs.AbstractLoader.BINARY, A.CSS = createjs.AbstractLoader.CSS, A.IMAGE = createjs.AbstractLoader.IMAGE, A.JAVASCRIPT = createjs.AbstractLoader.JAVASCRIPT, A.JSON = createjs.AbstractLoader.JSON, A.JSONP = createjs.AbstractLoader.JSONP, A.MANIFEST = createjs.AbstractLoader.MANIFEST, A.SOUND = createjs.AbstractLoader.SOUND, A.VIDEO = createjs.AbstractLoader.VIDEO, A.SVG = createjs.AbstractLoader.SVG, A.TEXT = createjs.AbstractLoader.TEXT, A.XML = createjs.AbstractLoader.XML, A.POST = createjs.AbstractLoader.POST, A.GET = createjs.AbstractLoader.GET, e.registerLoader = function (t) {
		if (!t || !t.canLoadItem) throw new Error("loader is of an incorrect type.");
		if (-1 != this._availableLoaders.indexOf(t)) throw new Error("loader already exists.");
		this._availableLoaders.unshift(t)
	}, e.unregisterLoader = function (t) {
		var e = this._availableLoaders.indexOf(t);
		-1 != e && e < this._defaultLoaderLength - 1 && this._availableLoaders.splice(e, 1)
	}, e.setUseXHR = function (t) {
		return this.setPreferXHR(t)
	}, e.setPreferXHR = function (t) {
		return this.preferXHR = 0 != t && null != window.XMLHttpRequest, this.preferXHR
	}, e.removeAll = function () {
		this.remove()
	}, e.remove = function (t) {
		var e = null;
		if (t && !Array.isArray(t)) e = [t]; else if (t) e = t; else if (arguments.length > 0) return;
		var A = !1;
		if (e) {
			for (; e.length;) {
				var i = e.pop(), n = this.getResult(i);
				for (a = this._loadQueue.length - 1; a >= 0; a--) if ((o = this._loadQueue[a].getItem()).id == i || o.src == i) {
					this._loadQueue.splice(a, 1)[0].cancel();
					break
				}
				for (a = this._loadQueueBackup.length - 1; a >= 0; a--) if ((o = this._loadQueueBackup[a].getItem()).id == i || o.src == i) {
					this._loadQueueBackup.splice(a, 1)[0].cancel();
					break
				}
				if (n) this._disposeItem(this.getItem(i)); else for (var a = this._currentLoads.length - 1; a >= 0; a--) {
					var o = this._currentLoads[a].getItem();
					if (o.id == i || o.src == i) {
						this._currentLoads.splice(a, 1)[0].cancel(), A = !0;
						break
					}
				}
			}
			A && this._loadNext()
		} else {
			for (var s in this.close(), this._loadItemsById) this._disposeItem(this._loadItemsById[s]);
			this.init(this.preferXHR, this._basePath)
		}
	}, e.reset = function () {
		for (var t in this.close(), this._loadItemsById) this._disposeItem(this._loadItemsById[t]);
		for (var e = [], A = 0, i = this._loadQueueBackup.length; i > A; A++) e.push(this._loadQueueBackup[A].getItem());
		this.loadManifest(e, !1)
	}, e.installPlugin = function (t) {
		if (null != t && null != t.getPreloadHandlers) {
			this._plugins.push(t);
			var e = t.getPreloadHandlers();
			if (e.scope = t, null != e.types) for (var A = 0, i = e.types.length; i > A; A++) this._typeCallbacks[e.types[A]] = e;
			if (null != e.extensions) for (A = 0, i = e.extensions.length; i > A; A++) this._extensionCallbacks[e.extensions[A]] = e
		}
	}, e.setMaxConnections = function (t) {
		this._maxConnections = t, !this._paused && this._loadQueue.length > 0 && this._loadNext()
	}, e.loadFile = function (t, e, A) {
		if (null != t) this._addItem(t, null, A), !1 !== e ? this.setPaused(!1) : this.setPaused(!0); else {
			var i = new createjs.ErrorEvent("PRELOAD_NO_FILE");
			this._sendError(i)
		}
	}, e.loadManifest = function (t, e, i) {
		var n = null, a = null;
		if (Array.isArray(t)) {
			if (0 == t.length) {
				var o = new createjs.ErrorEvent("PRELOAD_MANIFEST_EMPTY");
				return void this._sendError(o)
			}
			n = t
		} else if ("string" == typeof t) n = [{src: t, type: A.MANIFEST}]; else {
			if ("object" != typeof t) {
				o = new createjs.ErrorEvent("PRELOAD_MANIFEST_NULL");
				return void this._sendError(o)
			}
			if (void 0 !== t.src) {
				if (null == t.type) t.type = A.MANIFEST; else if (t.type != A.MANIFEST) {
					o = new createjs.ErrorEvent("PRELOAD_MANIFEST_TYPE");
					this._sendError(o)
				}
				n = [t]
			} else void 0 !== t.manifest && (n = t.manifest, a = t.path)
		}
		for (var s = 0, r = n.length; r > s; s++) this._addItem(n[s], a, i);
		!1 !== e ? this.setPaused(!1) : this.setPaused(!0)
	}, e.load = function () {
		this.setPaused(!1)
	}, e.getItem = function (t) {
		return this._loadItemsById[t] || this._loadItemsBySrc[t]
	}, e.getResult = function (t, e) {
		var A = this._loadItemsById[t] || this._loadItemsBySrc[t];
		if (null == A) return null;
		var i = A.id;
		return e && this._loadedRawResults[i] ? this._loadedRawResults[i] : this._loadedResults[i]
	}, e.getItems = function (t) {
		var e = [];
		for (var A in this._loadItemsById) {
			var i = this._loadItemsById[A], n = this.getResult(A);
			(!0 !== t || null != n) && e.push({item: i, result: n, rawResult: this.getResult(A, !0)})
		}
		return e
	}, e.setPaused = function (t) {
		this._paused = t, this._paused || this._loadNext()
	}, e.close = function () {
		for (; this._currentLoads.length;) this._currentLoads.pop().cancel();
		this._scriptOrder.length = 0, this._loadedScripts.length = 0, this.loadStartWasDispatched = !1, this._itemCount = 0, this._lastProgress = NaN
	}, e._addItem = function (t, e, A) {
		var i = this._createLoadItem(t, e, A);
		if (null != i) {
			var n = this._createLoader(i);
			null != n && ("plugins" in n && (n.plugins = this._plugins), i._loader = n, this._loadQueue.push(n), this._loadQueueBackup.push(n), this._numItems++, this._updateProgress(), (this.maintainScriptOrder && i.type == createjs.LoadQueue.JAVASCRIPT || !0 === i.maintainOrder) && (this._scriptOrder.push(i), this._loadedScripts.push(null)))
		}
	}, e._createLoadItem = function (t, e, A) {
		var i = createjs.LoadItem.create(t);
		if (null == i) return null;
		var n = "", a = A || this._basePath;
		if (i.src instanceof Object) {
			if (!i.type) return null;
			if (e) {
				n = e;
				var o = createjs.RequestUtils.parseURI(e);
				null == a || o.absolute || o.relative || (n = a + n)
			} else null != a && (n = a)
		} else {
			var s = createjs.RequestUtils.parseURI(i.src);
			s.extension && (i.ext = s.extension), null == i.type && (i.type = createjs.RequestUtils.getTypeByExtension(i.ext));
			var r = i.src;
			if (!s.absolute && !s.relative) if (e) {
				n = e;
				o = createjs.RequestUtils.parseURI(e);
				r = e + r, null == a || o.absolute || o.relative || (n = a + n)
			} else null != a && (n = a);
			i.src = n + i.src
		}
		i.path = n, (void 0 === i.id || null === i.id || "" === i.id) && (i.id = r);
		var g = this._typeCallbacks[i.type] || this._extensionCallbacks[i.ext];
		if (g) {
			var h = g.callback.call(g.scope, i, this);
			if (!1 === h) return null;
			!0 === h || null != h && (i._loader = h), null != (s = createjs.RequestUtils.parseURI(i.src)).extension && (i.ext = s.extension)
		}
		return this._loadItemsById[i.id] = i, this._loadItemsBySrc[i.src] = i, null == i.crossOrigin && (i.crossOrigin = this._crossOrigin), i
	}, e._createLoader = function (t) {
		if (null != t._loader) return t._loader;
		for (var e = this.preferXHR, A = 0; A < this._availableLoaders.length; A++) {
			var i = this._availableLoaders[A];
			if (i && i.canLoadItem(t)) return new i(t, e)
		}
		return null
	}, e._loadNext = function () {
		if (!this._paused) {
			this._loadStartWasDispatched || (this._sendLoadStart(), this._loadStartWasDispatched = !0), this._numItems == this._numItemsLoaded ? (this.loaded = !0, this._sendComplete(), this.next && this.next.load && this.next.load()) : this.loaded = !1;
			for (var t = 0; t < this._loadQueue.length && !(this._currentLoads.length >= this._maxConnections); t++) {
				var e = this._loadQueue[t];
				this._canStartLoad(e) && (this._loadQueue.splice(t, 1), t--, this._loadItem(e))
			}
		}
	}, e._loadItem = function (t) {
		t.on("fileload", this._handleFileLoad, this), t.on("progress", this._handleProgress, this), t.on("complete", this._handleFileComplete, this), t.on("error", this._handleError, this), t.on("fileerror", this._handleFileError, this), this._currentLoads.push(t), this._sendFileStart(t.getItem()), t.load()
	}, e._handleFileLoad = function (t) {
		t.target = null, this.dispatchEvent(t)
	}, e._handleFileError = function (t) {
		var e = new createjs.ErrorEvent("FILE_LOAD_ERROR", null, t.item);
		this._sendError(e)
	}, e._handleError = function (t) {
		var e = t.target;
		this._numItemsLoaded++, this._finishOrderedItem(e, !0), this._updateProgress();
		var A = new createjs.ErrorEvent("FILE_LOAD_ERROR", null, e.getItem());
		this._sendError(A), this.stopOnError ? this.setPaused(!0) : (this._removeLoadItem(e), this._cleanLoadItem(e), this._loadNext())
	}, e._handleFileComplete = function (t) {
		var e = t.target, A = e.getItem(), i = e.getResult();
		this._loadedResults[A.id] = i;
		var n = e.getResult(!0);
		null != n && n !== i && (this._loadedRawResults[A.id] = n), this._saveLoadedItems(e), this._removeLoadItem(e), this._finishOrderedItem(e) || this._processFinishedLoad(A, e), this._cleanLoadItem(e)
	}, e._saveLoadedItems = function (t) {
		var e = t.getLoadedItems();
		if (null !== e) for (var A = 0; A < e.length; A++) {
			var i = e[A].item;
			this._loadItemsBySrc[i.src] = i, this._loadItemsById[i.id] = i, this._loadedResults[i.id] = e[A].result, this._loadedRawResults[i.id] = e[A].rawResult
		}
	}, e._finishOrderedItem = function (t, e) {
		var A = t.getItem();
		if (this.maintainScriptOrder && A.type == createjs.LoadQueue.JAVASCRIPT || A.maintainOrder) {
			t instanceof createjs.JavaScriptLoader && (this._currentlyLoadingScript = !1);
			var i = createjs.indexOf(this._scriptOrder, A);
			return -1 != i && (this._loadedScripts[i] = !0 === e || A, this._checkScriptLoadOrder(), !0)
		}
		return !1
	}, e._checkScriptLoadOrder = function () {
		for (var t = this._loadedScripts.length, e = 0; t > e; e++) {
			var A = this._loadedScripts[e];
			if (null === A) break;
			if (!0 !== A) {
				var i = this._loadedResults[A.id];
				A.type == createjs.LoadQueue.JAVASCRIPT && createjs.DomUtils.appendToHead(i);
				var n = A._loader;
				this._processFinishedLoad(A, n), this._loadedScripts[e] = !0
			}
		}
	}, e._processFinishedLoad = function (t, e) {
		if (this._numItemsLoaded++, !this.maintainScriptOrder && t.type == createjs.LoadQueue.JAVASCRIPT) {
			var A = e.getTag();
			createjs.DomUtils.appendToHead(A)
		}
		this._updateProgress(), this._sendFileComplete(t, e), this._loadNext()
	}, e._canStartLoad = function (t) {
		if (!this.maintainScriptOrder || t.preferXHR) return !0;
		var e = t.getItem();
		if (e.type != createjs.LoadQueue.JAVASCRIPT) return !0;
		if (this._currentlyLoadingScript) return !1;
		for (var A = this._scriptOrder.indexOf(e), i = 0; A > i;) {
			if (null == this._loadedScripts[i]) return !1;
			i++
		}
		return this._currentlyLoadingScript = !0, !0
	}, e._removeLoadItem = function (t) {
		for (var e = this._currentLoads.length, A = 0; e > A; A++) if (this._currentLoads[A] == t) {
			this._currentLoads.splice(A, 1);
			break
		}
	}, e._cleanLoadItem = function (t) {
		var e = t.getItem();
		e && delete e._loader
	}, e._handleProgress = function (t) {
		var e = t.target;
		this._sendFileProgress(e.getItem(), e.progress), this._updateProgress()
	}, e._updateProgress = function () {
		var t = this._numItemsLoaded / this._numItems, e = this._numItems - this._numItemsLoaded;
		if (e > 0) {
			for (var A = 0, i = 0, n = this._currentLoads.length; n > i; i++) A += this._currentLoads[i].progress;
			t += A / e * (e / this._numItems)
		}
		this._lastProgress != t && (this._sendProgress(t), this._lastProgress = t)
	}, e._disposeItem = function (t) {
		delete this._loadedResults[t.id], delete this._loadedRawResults[t.id], delete this._loadItemsById[t.id], delete this._loadItemsBySrc[t.src]
	}, e._sendFileProgress = function (t, e) {
		if (!this._isCanceled() && !this._paused && this.hasEventListener("fileprogress")) {
			var A = new createjs.Event("fileprogress");
			A.progress = e, A.loaded = e, A.total = 1, A.item = t, this.dispatchEvent(A)
		}
	}, e._sendFileComplete = function (t, e) {
		if (!this._isCanceled() && !this._paused) {
			var A = new createjs.Event("fileload");
			A.loader = e, A.item = t, A.result = this._loadedResults[t.id], A.rawResult = this._loadedRawResults[t.id], t.completeHandler && t.completeHandler(A), this.hasEventListener("fileload") && this.dispatchEvent(A)
		}
	}, e._sendFileStart = function (t) {
		var e = new createjs.Event("filestart");
		e.item = t, this.hasEventListener("filestart") && this.dispatchEvent(e)
	}, e.toString = function () {
		return "[PreloadJS LoadQueue]"
	}, createjs.LoadQueue = createjs.promote(t, "AbstractLoader")
}(),this.createjs = this.createjs || {},function () {
	"use strict";

	function t(t) {
		this.AbstractLoader_constructor(t, !0, createjs.AbstractLoader.TEXT)
	}

	(createjs.extend(t, createjs.AbstractLoader), t).canLoadItem = function (t) {
		return t.type == createjs.AbstractLoader.TEXT
	}, createjs.TextLoader = createjs.promote(t, "AbstractLoader")
}(),this.createjs = this.createjs || {},function () {
	"use strict";

	function t(t) {
		this.AbstractLoader_constructor(t, !0, createjs.AbstractLoader.BINARY), this.on("initialize", this._updateXHR, this)
	}

	var e = createjs.extend(t, createjs.AbstractLoader);
	t.canLoadItem = function (t) {
		return t.type == createjs.AbstractLoader.BINARY
	}, e._updateXHR = function (t) {
		t.loader.setResponseType("arraybuffer")
	}, createjs.BinaryLoader = createjs.promote(t, "AbstractLoader")
}(),this.createjs = this.createjs || {},function () {
	"use strict";

	function t(t, e) {
		this.AbstractLoader_constructor(t, e, createjs.AbstractLoader.CSS), this.resultFormatter = this._formatResult, this._tagSrcAttribute = "href", this._tag = e ? document.createElement("style") : document.createElement("link"), this._tag.rel = "stylesheet", this._tag.type = "text/css"
	}

	var e = createjs.extend(t, createjs.AbstractLoader);
	t.canLoadItem = function (t) {
		return t.type == createjs.AbstractLoader.CSS
	}, e._formatResult = function (t) {
		if (this._preferXHR) {
			var e = t.getTag();
			if (e.styleSheet) e.styleSheet.cssText = t.getResult(!0); else {
				var A = document.createTextNode(t.getResult(!0));
				e.appendChild(A)
			}
		} else e = this._tag;
		return createjs.DomUtils.appendToHead(e), e
	}, createjs.CSSLoader = createjs.promote(t, "AbstractLoader")
}(),this.createjs = this.createjs || {},function () {
	"use strict";

	function t(t, e) {
		this.AbstractLoader_constructor(t, e, createjs.AbstractLoader.IMAGE), this.resultFormatter = this._formatResult, this._tagSrcAttribute = "src", createjs.RequestUtils.isImageTag(t) ? this._tag = t : createjs.RequestUtils.isImageTag(t.src) ? this._tag = t.src : createjs.RequestUtils.isImageTag(t.tag) && (this._tag = t.tag), null != this._tag ? this._preferXHR = !1 : this._tag = document.createElement("img"), this.on("initialize", this._updateXHR, this)
	}

	var e = createjs.extend(t, createjs.AbstractLoader);
	t.canLoadItem = function (t) {
		return t.type == createjs.AbstractLoader.IMAGE
	}, e.load = function () {
		if ("" != this._tag.src && this._tag.complete) this._sendComplete(); else {
			var t = this._item.crossOrigin;
			1 == t && (t = "Anonymous"), null == t || createjs.RequestUtils.isLocal(this._item.src) || (this._tag.crossOrigin = t), this.AbstractLoader_load()
		}
	}, e._updateXHR = function (t) {
		t.loader.mimeType = "text/plain; charset=x-user-defined-binary", t.loader.setResponseType && t.loader.setResponseType("blob")
	}, e._formatResult = function (t) {
		return this._formatImage
	}, e._formatImage = function (t, e) {
		var A = this._tag, i = window.URL || window.webkitURL;
		if (this._preferXHR) if (i) {
			var n = i.createObjectURL(this.getResult(!0));
			A.src = n, A.addEventListener("load", this._cleanUpURL, !1), A.addEventListener("error", this._cleanUpURL, !1)
		} else A.src = this._item.src;
		A.complete ? t(A) : (A.onload = createjs.proxy((function () {
			t(this._tag)
		}), this), A.onerror = createjs.proxy((function () {
			e(_this._tag)
		}), this))
	}, e._cleanUpURL = function (t) {
		(window.URL || window.webkitURL).revokeObjectURL(t.target.src)
	}, createjs.ImageLoader = createjs.promote(t, "AbstractLoader")
}(),this.createjs = this.createjs || {},function () {
	"use strict";

	function t(t, e) {
		this.AbstractLoader_constructor(t, e, createjs.AbstractLoader.JAVASCRIPT), this.resultFormatter = this._formatResult, this._tagSrcAttribute = "src", this.setTag(document.createElement("script"))
	}

	var e = createjs.extend(t, createjs.AbstractLoader);
	t.canLoadItem = function (t) {
		return t.type == createjs.AbstractLoader.JAVASCRIPT
	}, e._formatResult = function (t) {
		var e = t.getTag();
		return this._preferXHR && (e.text = t.getResult(!0)), e
	}, createjs.JavaScriptLoader = createjs.promote(t, "AbstractLoader")
}(),this.createjs = this.createjs || {},function () {
	"use strict";

	function t(t) {
		this.AbstractLoader_constructor(t, !0, createjs.AbstractLoader.JSON), this.resultFormatter = this._formatResult
	}

	var e = createjs.extend(t, createjs.AbstractLoader);
	t.canLoadItem = function (t) {
		return t.type == createjs.AbstractLoader.JSON
	}, e._formatResult = function (t) {
		var e = null;
		try {
			e = createjs.DataUtils.parseJSON(t.getResult(!0))
		} catch (t) {
			var A = new createjs.ErrorEvent("JSON_FORMAT", null, t);
			return this._sendError(A), t
		}
		return e
	}, createjs.JSONLoader = createjs.promote(t, "AbstractLoader")
}(),this.createjs = this.createjs || {},function () {
	"use strict";

	function t(t) {
		this.AbstractLoader_constructor(t, !1, createjs.AbstractLoader.JSONP), this.setTag(document.createElement("script")), this.getTag().type = "text/javascript"
	}

	var e = createjs.extend(t, createjs.AbstractLoader);
	t.canLoadItem = function (t) {
		return t.type == createjs.AbstractLoader.JSONP
	}, e.cancel = function () {
		this.AbstractLoader_cancel(), this._dispose()
	}, e.load = function () {
		if (null == this._item.callback) throw new Error("callback is required for loading JSONP requests.");
		if (null != window[this._item.callback]) throw new Error("JSONP callback '" + this._item.callback + "' already exists on window. You need to specify a different callback or re-name the current one.");
		window[this._item.callback] = createjs.proxy(this._handleLoad, this), window.document.body.appendChild(this._tag), this._loadTimeout = setTimeout(createjs.proxy(this._handleTimeout, this), this._item.loadTimeout), this._tag.src = this._item.src
	}, e._handleLoad = function (t) {
		this._result = this._rawResult = t, this._sendComplete(), this._dispose()
	}, e._handleTimeout = function () {
		this._dispose(), this.dispatchEvent(new createjs.ErrorEvent("timeout"))
	}, e._dispose = function () {
		window.document.body.removeChild(this._tag), delete window[this._item.callback], clearTimeout(this._loadTimeout)
	}, createjs.JSONPLoader = createjs.promote(t, "AbstractLoader")
}(),this.createjs = this.createjs || {},function () {
	"use strict";

	function t(t) {
		this.AbstractLoader_constructor(t, null, createjs.AbstractLoader.MANIFEST), this.plugins = null, this._manifestQueue = null
	}

	var e = createjs.extend(t, createjs.AbstractLoader), A = t;
	A.MANIFEST_PROGRESS = .25, A.canLoadItem = function (t) {
		return t.type == createjs.AbstractLoader.MANIFEST
	}, e.load = function () {
		this.AbstractLoader_load()
	}, e._createRequest = function () {
		var t = this._item.callback;
		this._request = null != t ? new createjs.JSONPLoader(this._item) : new createjs.JSONLoader(this._item)
	}, e.handleEvent = function (t) {
		switch (t.type) {
			case"complete":
				return this._rawResult = t.target.getResult(!0), this._result = t.target.getResult(), this._sendProgress(A.MANIFEST_PROGRESS), void this._loadManifest(this._result);
			case"progress":
				return t.loaded *= A.MANIFEST_PROGRESS, this.progress = t.loaded / t.total, (isNaN(this.progress) || this.progress == 1 / 0) && (this.progress = 0), void this._sendProgress(t)
		}
		this.AbstractLoader_handleEvent(t)
	}, e.destroy = function () {
		this.AbstractLoader_destroy(), this._manifestQueue.close()
	}, e._loadManifest = function (t) {
		if (t && t.manifest) {
			var e = this._manifestQueue = new createjs.LoadQueue;
			e.on("fileload", this._handleManifestFileLoad, this), e.on("progress", this._handleManifestProgress, this), e.on("complete", this._handleManifestComplete, this, !0), e.on("error", this._handleManifestError, this, !0);
			for (var A = 0, i = this.plugins.length; i > A; A++) e.installPlugin(this.plugins[A]);
			e.loadManifest(t)
		} else this._sendComplete()
	}, e._handleManifestFileLoad = function (t) {
		t.target = null, this.dispatchEvent(t)
	}, e._handleManifestComplete = function (t) {
		this._loadedItems = this._manifestQueue.getItems(!0), this._sendComplete()
	}, e._handleManifestProgress = function (t) {
		this.progress = t.progress * (1 - A.MANIFEST_PROGRESS) + A.MANIFEST_PROGRESS, this._sendProgress(this.progress)
	}, e._handleManifestError = function (t) {
		var e = new createjs.Event("fileerror");
		e.item = t.data, this.dispatchEvent(e)
	}, createjs.ManifestLoader = createjs.promote(t, "AbstractLoader")
}(),this.createjs = this.createjs || {},function () {
	"use strict";

	function t(t, e) {
		this.AbstractMediaLoader_constructor(t, e, createjs.AbstractLoader.SOUND), createjs.RequestUtils.isAudioTag(t) || createjs.RequestUtils.isAudioTag(t.src) ? this._tag = t : createjs.RequestUtils.isAudioTag(t.tag) && (this._tag = createjs.RequestUtils.isAudioTag(t) ? t : t.src), null != this._tag && (this._preferXHR = !1)
	}

	var e = createjs.extend(t, createjs.AbstractMediaLoader);
	t.canLoadItem = function (t) {
		return t.type == createjs.AbstractLoader.SOUND
	}, e._createTag = function (t) {
		var e = document.createElement("audio");
		return e.autoplay = !1, e.preload = "none", e.src = t, e
	}, createjs.SoundLoader = createjs.promote(t, "AbstractMediaLoader")
}(),this.createjs = this.createjs || {},function () {
	"use strict";

	function t(t, e) {
		this.AbstractMediaLoader_constructor(t, e, createjs.AbstractLoader.VIDEO), createjs.RequestUtils.isVideoTag(t) || createjs.RequestUtils.isVideoTag(t.src) ? (this.setTag(createjs.RequestUtils.isVideoTag(t) ? t : t.src), this._preferXHR = !1) : this.setTag(this._createTag())
	}

	var e = t;
	createjs.extend(t, createjs.AbstractMediaLoader)._createTag = function () {
		return document.createElement("video")
	}, e.canLoadItem = function (t) {
		return t.type == createjs.AbstractLoader.VIDEO
	}, createjs.VideoLoader = createjs.promote(t, "AbstractMediaLoader")
}(),this.createjs = this.createjs || {},function () {
	"use strict";

	function t(t, e) {
		this.AbstractLoader_constructor(t, e, createjs.AbstractLoader.SPRITESHEET), this._manifestQueue = null
	}

	var e = createjs.extend(t, createjs.AbstractLoader), A = t;
	A.SPRITESHEET_PROGRESS = .25, A.canLoadItem = function (t) {
		return t.type == createjs.AbstractLoader.SPRITESHEET
	}, e.destroy = function () {
		this.AbstractLoader_destroy, this._manifestQueue.close()
	}, e._createRequest = function () {
		var t = this._item.callback;
		this._request = null != t ? new createjs.JSONPLoader(this._item) : new createjs.JSONLoader(this._item)
	}, e.handleEvent = function (t) {
		switch (t.type) {
			case"complete":
				return this._rawResult = t.target.getResult(!0), this._result = t.target.getResult(), this._sendProgress(A.SPRITESHEET_PROGRESS), void this._loadManifest(this._result);
			case"progress":
				return t.loaded *= A.SPRITESHEET_PROGRESS, this.progress = t.loaded / t.total, (isNaN(this.progress) || this.progress == 1 / 0) && (this.progress = 0), void this._sendProgress(t)
		}
		this.AbstractLoader_handleEvent(t)
	}, e._loadManifest = function (t) {
		if (t && t.images) {
			var e = this._manifestQueue = new createjs.LoadQueue(this._preferXHR, this._item.path, this._item.crossOrigin);
			e.on("complete", this._handleManifestComplete, this, !0), e.on("fileload", this._handleManifestFileLoad, this), e.on("progress", this._handleManifestProgress, this), e.on("error", this._handleManifestError, this, !0), e.loadManifest(t.images)
		}
	}, e._handleManifestFileLoad = function (t) {
		var e = t.result;
		if (null != e) {
			var A = this.getResult().images, i = A.indexOf(t.item.src);
			A[i] = e
		}
	}, e._handleManifestComplete = function (t) {
		this._result = new createjs.SpriteSheet(this._result), this._loadedItems = this._manifestQueue.getItems(!0), this._sendComplete()
	}, e._handleManifestProgress = function (t) {
		this.progress = t.progress * (1 - A.SPRITESHEET_PROGRESS) + A.SPRITESHEET_PROGRESS, this._sendProgress(this.progress)
	}, e._handleManifestError = function (t) {
		var e = new createjs.Event("fileerror");
		e.item = t.data, this.dispatchEvent(e)
	}, createjs.SpriteSheetLoader = createjs.promote(t, "AbstractLoader")
}(),this.createjs = this.createjs || {},function () {
	"use strict";

	function t(t, e) {
		this.AbstractLoader_constructor(t, e, createjs.AbstractLoader.SVG), this.resultFormatter = this._formatResult, this._tagSrcAttribute = "data", e ? this.setTag(document.createElement("svg")) : (this.setTag(document.createElement("object")), this.getTag().type = "image/svg+xml")
	}

	var e = createjs.extend(t, createjs.AbstractLoader);
	t.canLoadItem = function (t) {
		return t.type == createjs.AbstractLoader.SVG
	}, e._formatResult = function (t) {
		var e = createjs.DataUtils.parseXML(t.getResult(!0), "text/xml"), A = t.getTag();
		return !this._preferXHR && document.body.contains(A) && document.body.removeChild(A), null != e.documentElement ? (A.appendChild(e.documentElement), A.style.visibility = "visible", A) : e
	}, createjs.SVGLoader = createjs.promote(t, "AbstractLoader")
}(),this.createjs = this.createjs || {},function () {
	"use strict";

	function t(t) {
		this.AbstractLoader_constructor(t, !0, createjs.AbstractLoader.XML), this.resultFormatter = this._formatResult
	}

	var e = createjs.extend(t, createjs.AbstractLoader);
	t.canLoadItem = function (t) {
		return t.type == createjs.AbstractLoader.XML
	}, e._formatResult = function (t) {
		return createjs.DataUtils.parseXML(t.getResult(!0), "text/xml")
	}, createjs.XMLLoader = createjs.promote(t, "AbstractLoader")
}(),this.createjs = this.createjs || {},function () {
	var t = createjs.SoundJS = createjs.SoundJS || {};
	t.version = "0.6.2", t.buildDate = "Thu, 26 Nov 2015 20:44:31 GMT"
}(),this.createjs = this.createjs || {},createjs.indexOf = function (t, e) {
	"use strict";
	for (var A = 0, i = t.length; i > A; A++) if (e === t[A]) return A;
	return -1
},this.createjs = this.createjs || {},function () {
	"use strict";
	createjs.proxy = function (t, e) {
		var A = Array.prototype.slice.call(arguments, 2);
		return function () {
			return t.apply(e, Array.prototype.slice.call(arguments, 0).concat(A))
		}
	}
}(),this.createjs = this.createjs || {},function () {
	"use strict";

	function t() {
		throw"BrowserDetect cannot be instantiated"
	}

	var e = t.agent = window.navigator.userAgent;
	t.isWindowPhone = e.indexOf("IEMobile") > -1 || e.indexOf("Windows Phone") > -1, t.isFirefox = e.indexOf("Firefox") > -1, t.isOpera = null != window.opera, t.isChrome = e.indexOf("Chrome") > -1, t.isIOS = (e.indexOf("iPod") > -1 || e.indexOf("iPhone") > -1 || e.indexOf("iPad") > -1) && !t.isWindowPhone, t.isAndroid = e.indexOf("Android") > -1 && !t.isWindowPhone, t.isBlackberry = e.indexOf("Blackberry") > -1, createjs.BrowserDetect = t
}(),this.createjs = this.createjs || {},function () {
	"use strict";
	var t = function () {
		this.interrupt = null, this.delay = null, this.offset = null, this.loop = null, this.volume = null, this.pan = null, this.startTime = null, this.duration = null
	}, e = t.prototype = {}, A = t;
	A.create = function (t) {
		if (t instanceof A || t instanceof Object) {
			var e = new createjs.PlayPropsConfig;
			return e.set(t), e
		}
		throw new Error("Type not recognized.")
	}, e.set = function (t) {
		for (var e in t) this[e] = t[e];
		return this
	}, e.toString = function () {
		return "[PlayPropsConfig]"
	}, createjs.PlayPropsConfig = A
}(),this.createjs = this.createjs || {},function () {
	"use strict";

	function t() {
		throw"Sound cannot be instantiated"
	}

	function e(t, e) {
		this.init(t, e)
	}

	var A = t;
	A.INTERRUPT_ANY = "any", A.INTERRUPT_EARLY = "early", A.INTERRUPT_LATE = "late", A.INTERRUPT_NONE = "none", A.PLAY_INITED = "playInited", A.PLAY_SUCCEEDED = "playSucceeded", A.PLAY_INTERRUPTED = "playInterrupted", A.PLAY_FINISHED = "playFinished", A.PLAY_FAILED = "playFailed", A.SUPPORTED_EXTENSIONS = ["mp3", "ogg", "opus", "mpeg", "wav", "m4a", "mp4", "aiff", "wma", "mid"], A.EXTENSION_MAP = {m4a: "mp4"}, A.FILE_PATTERN = /^(?:(\w+:)\/{2}(\w+(?:\.\w+)*\/?))?([\/.]*?(?:[^?]+)?\/)?((?:[^\/?]+)\.(\w+))(?:\?(\S+)?)?$/, A.defaultInterruptBehavior = A.INTERRUPT_NONE, A.alternateExtensions = [], A.activePlugin = null, A._masterVolume = 1, Object.defineProperty(A, "volume", {
		get: function () {
			return this._masterVolume
		}, set: function (t) {
			if (null == Number(t)) return !1;
			if (t = Math.max(0, Math.min(1, t)), A._masterVolume = t, !this.activePlugin || !this.activePlugin.setVolume || !this.activePlugin.setVolume(t)) for (var e = this._instances, i = 0, n = e.length; n > i; i++) e[i].setMasterVolume(t)
		}
	}), A._masterMute = !1, Object.defineProperty(A, "muted", {
		get: function () {
			return this._masterMute
		}, set: function (t) {
			if (null == t) return !1;
			if (this._masterMute = t, !this.activePlugin || !this.activePlugin.setMute || !this.activePlugin.setMute(t)) for (var e = this._instances, A = 0, i = e.length; i > A; A++) e[A].setMasterMute(t);
			return !0
		}
	}), Object.defineProperty(A, "capabilities", {
		get: function () {
			return null == A.activePlugin ? null : A.activePlugin._capabilities
		}, set: function (t) {
			return !1
		}
	}), A._pluginsRegistered = !1, A._lastID = 0, A._instances = [], A._idHash = {}, A._preloadHash = {}, A._defaultPlayPropsHash = {}, A.addEventListener = null, A.removeEventListener = null, A.removeAllEventListeners = null, A.dispatchEvent = null, A.hasEventListener = null, A._listeners = null, createjs.EventDispatcher.initialize(A), A.getPreloadHandlers = function () {
		return {callback: createjs.proxy(A.initLoad, A), types: ["sound"], extensions: A.SUPPORTED_EXTENSIONS}
	}, A._handleLoadComplete = function (t) {
		var e = t.target.getItem().src;
		if (A._preloadHash[e]) for (var i = 0, n = A._preloadHash[e].length; n > i; i++) {
			var a = A._preloadHash[e][i];
			if (A._preloadHash[e][i] = !0, A.hasEventListener("fileload")) (t = new createjs.Event("fileload")).src = a.src, t.id = a.id, t.data = a.data, t.sprite = a.sprite, A.dispatchEvent(t)
		}
	}, A._handleLoadError = function (t) {
		var e = t.target.getItem().src;
		if (A._preloadHash[e]) for (var i = 0, n = A._preloadHash[e].length; n > i; i++) {
			var a = A._preloadHash[e][i];
			if (A._preloadHash[e][i] = !1, A.hasEventListener("fileerror")) (t = new createjs.Event("fileerror")).src = a.src, t.id = a.id, t.data = a.data, t.sprite = a.sprite, A.dispatchEvent(t)
		}
	}, A._registerPlugin = function (t) {
		return !!t.isSupported() && (A.activePlugin = new t, !0)
	}, A.registerPlugins = function (t) {
		A._pluginsRegistered = !0;
		for (var e = 0, i = t.length; i > e; e++) if (A._registerPlugin(t[e])) return !0;
		return !1
	}, A.initializeDefaultPlugins = function () {
		return null != A.activePlugin || !A._pluginsRegistered && !!A.registerPlugins([createjs.WebAudioPlugin, createjs.HTMLAudioPlugin])
	}, A.isReady = function () {
		return null != A.activePlugin
	}, A.getCapabilities = function () {
		return null == A.activePlugin ? null : A.activePlugin._capabilities
	}, A.getCapability = function (t) {
		return null == A.activePlugin ? null : A.activePlugin._capabilities[t]
	}, A.initLoad = function (t) {
		return A._registerSound(t)
	}, A._registerSound = function (t) {
		if (!A.initializeDefaultPlugins()) return !1;
		var i;
		if (t.src instanceof Object ? (i = A._parseSrc(t.src)).src = t.path + i.src : i = A._parsePath(t.src), null == i) return !1;
		t.src = i.src, t.type = "sound";
		var n = t.data, a = null;
		if (null != n && (isNaN(n.channels) ? isNaN(n) || (a = parseInt(n)) : a = parseInt(n.channels), n.audioSprite)) for (var o, s = n.audioSprite.length; s--;) o = n.audioSprite[s], A._idHash[o.id] = {
			src: t.src,
			startTime: parseInt(o.startTime),
			duration: parseInt(o.duration)
		}, o.defaultPlayProps && (A._defaultPlayPropsHash[o.id] = createjs.PlayPropsConfig.create(o.defaultPlayProps));
		null != t.id && (A._idHash[t.id] = {src: t.src});
		var r = A.activePlugin.register(t);
		return e.create(t.src, a), null != n && isNaN(n) ? t.data.channels = a || e.maxPerChannel() : t.data = a || e.maxPerChannel(), r.type && (t.type = r.type), t.defaultPlayProps && (A._defaultPlayPropsHash[t.src] = createjs.PlayPropsConfig.create(t.defaultPlayProps)), r
	}, A.registerSound = function (t, e, i, n, a) {
		var o = {src: t, id: e, data: i, defaultPlayProps: a};
		t instanceof Object && t.src && (n = e, o = t), (o = createjs.LoadItem.create(o)).path = n, null == n || o.src instanceof Object || (o.src = n + t);
		var s = A._registerSound(o);
		if (!s) return !1;
		if (A._preloadHash[o.src] || (A._preloadHash[o.src] = []), A._preloadHash[o.src].push(o), 1 == A._preloadHash[o.src].length) s.on("complete", createjs.proxy(this._handleLoadComplete, this)), s.on("error", createjs.proxy(this._handleLoadError, this)), A.activePlugin.preload(s); else if (1 == A._preloadHash[o.src][0]) return !0;
		return o
	}, A.registerSounds = function (t, e) {
		var A = [];
		t.path && (e ? e += t.path : e = t.path, t = t.manifest);
		for (var i = 0, n = t.length; n > i; i++) A[i] = createjs.Sound.registerSound(t[i].src, t[i].id, t[i].data, e, t[i].defaultPlayProps);
		return A
	}, A.removeSound = function (t, i) {
		if (null == A.activePlugin) return !1;
		var n;
		if (t instanceof Object && t.src && (t = t.src), t instanceof Object ? n = A._parseSrc(t) : (t = A._getSrcById(t).src, n = A._parsePath(t)), null == n) return !1;
		for (var a in t = n.src, null != i && (t = i + t), A._idHash) A._idHash[a].src == t && delete A._idHash[a];
		return e.removeSrc(t), delete A._preloadHash[t], A.activePlugin.removeSound(t), !0
	}, A.removeSounds = function (t, e) {
		var A = [];
		t.path && (e ? e += t.path : e = t.path, t = t.manifest);
		for (var i = 0, n = t.length; n > i; i++) A[i] = createjs.Sound.removeSound(t[i].src, e);
		return A
	}, A.removeAllSounds = function () {
		A._idHash = {}, A._preloadHash = {}, e.removeAll(), A.activePlugin && A.activePlugin.removeAllSounds()
	}, A.loadComplete = function (t) {
		if (!A.isReady()) return !1;
		var e = A._parsePath(t);
		return t = e ? A._getSrcById(e.src).src : A._getSrcById(t).src, null != A._preloadHash[t] && 1 == A._preloadHash[t][0]
	}, A._parsePath = function (t) {
		"string" != typeof t && (t = t.toString());
		var e = t.match(A.FILE_PATTERN);
		if (null == e) return !1;
		for (var i = e[4], n = e[5], a = A.capabilities, o = 0; !a[n];) if (n = A.alternateExtensions[o++], o > A.alternateExtensions.length) return null;
		return {name: i, src: t = t.replace("." + e[5], "." + n), extension: n}
	}, A._parseSrc = function (t) {
		var e = {name: void 0, src: void 0, extension: void 0}, i = A.capabilities;
		for (var n in t) if (t.hasOwnProperty(n) && i[n]) {
			e.src = t[n], e.extension = n;
			break
		}
		if (!e.src) return !1;
		var a = e.src.lastIndexOf("/");
		return e.name = -1 != a ? e.src.slice(a + 1) : e.src, e
	}, A.play = function (t, e, i, n, a, o, s, r, g) {
		var h;
		h = e instanceof Object || e instanceof createjs.PlayPropsConfig ? createjs.PlayPropsConfig.create(e) : createjs.PlayPropsConfig.create({
			interrupt: e,
			delay: i,
			offset: n,
			loop: a,
			volume: o,
			pan: s,
			startTime: r,
			duration: g
		});
		var l = A.createInstance(t, h.startTime, h.duration);
		return A._playInstance(l, h) || l._playFailed(), l
	}, A.createInstance = function (t, i, n) {
		if (!A.initializeDefaultPlugins()) return new createjs.DefaultSoundInstance(t, i, n);
		var a = A._defaultPlayPropsHash[t];
		t = A._getSrcById(t);
		var o = A._parsePath(t.src), s = null;
		return null != o && null != o.src ? (e.create(o.src), null == i && (i = t.startTime), s = A.activePlugin.create(o.src, i, n || t.duration), (a = a || A._defaultPlayPropsHash[o.src]) && s.applyPlayProps(a)) : s = new createjs.DefaultSoundInstance(t, i, n), s.uniqueId = A._lastID++, s
	}, A.stop = function () {
		for (var t = this._instances, e = t.length; e--;) t[e].stop()
	}, A.setVolume = function (t) {
		if (null == Number(t)) return !1;
		if (t = Math.max(0, Math.min(1, t)), A._masterVolume = t, !this.activePlugin || !this.activePlugin.setVolume || !this.activePlugin.setVolume(t)) for (var e = this._instances, i = 0, n = e.length; n > i; i++) e[i].setMasterVolume(t)
	}, A.getVolume = function () {
		return this._masterVolume
	}, A.setMute = function (t) {
		if (null == t) return !1;
		if (this._masterMute = t, !this.activePlugin || !this.activePlugin.setMute || !this.activePlugin.setMute(t)) for (var e = this._instances, A = 0, i = e.length; i > A; A++) e[A].setMasterMute(t);
		return !0
	}, A.getMute = function () {
		return this._masterMute
	}, A.setDefaultPlayProps = function (t, e) {
		t = A._getSrcById(t), A._defaultPlayPropsHash[A._parsePath(t.src).src] = createjs.PlayPropsConfig.create(e)
	}, A.getDefaultPlayProps = function (t) {
		return t = A._getSrcById(t), A._defaultPlayPropsHash[A._parsePath(t.src).src]
	}, A._playInstance = function (t, e) {
		var i = A._defaultPlayPropsHash[t.src] || {};
		if (null == e.interrupt && (e.interrupt = i.interrupt || A.defaultInterruptBehavior), null == e.delay && (e.delay = i.delay || 0), null == e.offset && (e.offset = t.getPosition()), null == e.loop && (e.loop = t.loop), null == e.volume && (e.volume = t.volume), null == e.pan && (e.pan = t.pan), 0 == e.delay) {
			if (!A._beginPlaying(t, e)) return !1
		} else {
			var n = setTimeout((function () {
				A._beginPlaying(t, e)
			}), e.delay);
			t.delayTimeoutId = n
		}
		return this._instances.push(t), !0
	}, A._beginPlaying = function (t, A) {
		if (!e.add(t, A.interrupt)) return !1;
		if (!t._beginPlaying(A)) {
			var i = createjs.indexOf(this._instances, t);
			return i > -1 && this._instances.splice(i, 1), !1
		}
		return !0
	}, A._getSrcById = function (t) {
		return A._idHash[t] || {src: t}
	}, A._playFinished = function (t) {
		e.remove(t);
		var A = createjs.indexOf(this._instances, t);
		A > -1 && this._instances.splice(A, 1)
	}, createjs.Sound = t, e.channels = {}, e.create = function (t, A) {
		return null == e.get(t) && (e.channels[t] = new e(t, A), !0)
	}, e.removeSrc = function (t) {
		var A = e.get(t);
		return null != A && (A._removeAll(), delete e.channels[t], !0)
	}, e.removeAll = function () {
		for (var t in e.channels) e.channels[t]._removeAll();
		e.channels = {}
	}, e.add = function (t, A) {
		var i = e.get(t.src);
		return null != i && i._add(t, A)
	}, e.remove = function (t) {
		var A = e.get(t.src);
		return null != A && (A._remove(t), !0)
	}, e.maxPerChannel = function () {
		return i.maxDefault
	}, e.get = function (t) {
		return e.channels[t]
	};
	var i = e.prototype;
	i.constructor = e, i.src = null, i.max = null, i.maxDefault = 100, i.length = 0, i.init = function (t, e) {
		this.src = t, this.max = e || this.maxDefault, -1 == this.max && (this.max = this.maxDefault), this._instances = []
	}, i._get = function (t) {
		return this._instances[t]
	}, i._add = function (t, e) {
		return !!this._getSlot(e, t) && (this._instances.push(t), this.length++, !0)
	}, i._remove = function (t) {
		var e = createjs.indexOf(this._instances, t);
		return -1 != e && (this._instances.splice(e, 1), this.length--, !0)
	}, i._removeAll = function () {
		for (var t = this.length - 1; t >= 0; t--) this._instances[t].stop()
	}, i._getSlot = function (e, A) {
		var i, n;
		if (e != t.INTERRUPT_NONE && null == (n = this._get(0))) return !0;
		for (var a = 0, o = this.max; o > a; a++) {
			if (null == (i = this._get(a))) return !0;
			if (i.playState == t.PLAY_FINISHED || i.playState == t.PLAY_INTERRUPTED || i.playState == t.PLAY_FAILED) {
				n = i;
				break
			}
			e != t.INTERRUPT_NONE && (e == t.INTERRUPT_EARLY && i.getPosition() < n.getPosition() || e == t.INTERRUPT_LATE && i.getPosition() > n.getPosition()) && (n = i)
		}
		return null != n && (n._interrupt(), this._remove(n), !0)
	}, i.toString = function () {
		return "[Sound SoundChannel]"
	}
}(),this.createjs = this.createjs || {},function () {
	"use strict";
	var t = function (t, e, A, i) {
		this.EventDispatcher_constructor(), this.src = t, this.uniqueId = -1, this.playState = null, this.delayTimeoutId = null, this._volume = 1, Object.defineProperty(this, "volume", {
			get: this.getVolume,
			set: this.setVolume
		}), this._pan = 0, Object.defineProperty(this, "pan", {
			get: this.getPan,
			set: this.setPan
		}), this._startTime = Math.max(0, e || 0), Object.defineProperty(this, "startTime", {
			get: this.getStartTime,
			set: this.setStartTime
		}), this._duration = Math.max(0, A || 0), Object.defineProperty(this, "duration", {
			get: this.getDuration,
			set: this.setDuration
		}), this._playbackResource = null, Object.defineProperty(this, "playbackResource", {
			get: this.getPlaybackResource,
			set: this.setPlaybackResource
		}), !1 !== i && !0 !== i && this.setPlaybackResource(i), this._position = 0, Object.defineProperty(this, "position", {
			get: this.getPosition,
			set: this.setPosition
		}), this._loop = 0, Object.defineProperty(this, "loop", {
			get: this.getLoop,
			set: this.setLoop
		}), this._muted = !1, Object.defineProperty(this, "muted", {
			get: this.getMuted,
			set: this.setMuted
		}), this._paused = !1, Object.defineProperty(this, "paused", {get: this.getPaused, set: this.setPaused})
	}, e = createjs.extend(t, createjs.EventDispatcher);
	e.play = function (t, e, A, i, n, a) {
		var o;
		return o = t instanceof Object || t instanceof createjs.PlayPropsConfig ? createjs.PlayPropsConfig.create(t) : createjs.PlayPropsConfig.create({
			interrupt: t,
			delay: e,
			offset: A,
			loop: i,
			volume: n,
			pan: a
		}), this.playState == createjs.Sound.PLAY_SUCCEEDED ? (this.applyPlayProps(o), void (this._paused && this.setPaused(!1))) : (this._cleanUp(), createjs.Sound._playInstance(this, o), this)
	}, e.stop = function () {
		return this._position = 0, this._paused = !1, this._handleStop(), this._cleanUp(), this.playState = createjs.Sound.PLAY_FINISHED, this
	}, e.destroy = function () {
		this._cleanUp(), this.src = null, this.playbackResource = null, this.removeAllEventListeners()
	}, e.applyPlayProps = function (t) {
		return null != t.offset && this.setPosition(t.offset), null != t.loop && this.setLoop(t.loop), null != t.volume && this.setVolume(t.volume), null != t.pan && this.setPan(t.pan), null != t.startTime && (this.setStartTime(t.startTime), this.setDuration(t.duration)), this
	}, e.toString = function () {
		return "[AbstractSoundInstance]"
	}, e.getPaused = function () {
		return this._paused
	}, e.setPaused = function (t) {
		return !0 !== t && !1 !== t || this._paused == t || 1 == t && this.playState != createjs.Sound.PLAY_SUCCEEDED ? void 0 : (this._paused = t, t ? this._pause() : this._resume(), clearTimeout(this.delayTimeoutId), this)
	}, e.setVolume = function (t) {
		return t == this._volume || (this._volume = Math.max(0, Math.min(1, t)), this._muted || this._updateVolume()), this
	}, e.getVolume = function () {
		return this._volume
	}, e.setMuted = function (t) {
		return !0 === t || !1 === t ? (this._muted = t, this._updateVolume(), this) : void 0
	}, e.getMuted = function () {
		return this._muted
	}, e.setPan = function (t) {
		return t == this._pan || (this._pan = Math.max(-1, Math.min(1, t)), this._updatePan()), this
	}, e.getPan = function () {
		return this._pan
	}, e.getPosition = function () {
		return this._paused || this.playState != createjs.Sound.PLAY_SUCCEEDED || (this._position = this._calculateCurrentPosition()), this._position
	}, e.setPosition = function (t) {
		return this._position = Math.max(0, t), this.playState == createjs.Sound.PLAY_SUCCEEDED && this._updatePosition(), this
	}, e.getStartTime = function () {
		return this._startTime
	}, e.setStartTime = function (t) {
		return t == this._startTime || (this._startTime = Math.max(0, t || 0), this._updateStartTime()), this
	}, e.getDuration = function () {
		return this._duration
	}, e.setDuration = function (t) {
		return t == this._duration || (this._duration = Math.max(0, t || 0), this._updateDuration()), this
	}, e.setPlaybackResource = function (t) {
		return this._playbackResource = t, 0 == this._duration && this._setDurationFromSource(), this
	}, e.getPlaybackResource = function () {
		return this._playbackResource
	}, e.getLoop = function () {
		return this._loop
	}, e.setLoop = function (t) {
		null != this._playbackResource && (0 != this._loop && 0 == t ? this._removeLooping(t) : 0 == this._loop && 0 != t && this._addLooping(t)), this._loop = t
	}, e._sendEvent = function (t) {
		var e = new createjs.Event(t);
		this.dispatchEvent(e)
	}, e._cleanUp = function () {
		clearTimeout(this.delayTimeoutId), this._handleCleanUp(), this._paused = !1, createjs.Sound._playFinished(this)
	}, e._interrupt = function () {
		this._cleanUp(), this.playState = createjs.Sound.PLAY_INTERRUPTED, this._sendEvent("interrupted")
	}, e._beginPlaying = function (t) {
		return this.setPosition(t.offset), this.setLoop(t.loop), this.setVolume(t.volume), this.setPan(t.pan), null != t.startTime && (this.setStartTime(t.startTime), this.setDuration(t.duration)), null != this._playbackResource && this._position < this._duration ? (this._paused = !1, this._handleSoundReady(), this.playState = createjs.Sound.PLAY_SUCCEEDED, this._sendEvent("succeeded"), !0) : (this._playFailed(), !1)
	}, e._playFailed = function () {
		this._cleanUp(), this.playState = createjs.Sound.PLAY_FAILED, this._sendEvent("failed")
	}, e._handleSoundComplete = function (t) {
		return this._position = 0, 0 != this._loop ? (this._loop--, this._handleLoop(), void this._sendEvent("loop")) : (this._cleanUp(), this.playState = createjs.Sound.PLAY_FINISHED, void this._sendEvent("complete"))
	}, e._handleSoundReady = function () {
	}, e._updateVolume = function () {
	}, e._updatePan = function () {
	}, e._updateStartTime = function () {
	}, e._updateDuration = function () {
	}, e._setDurationFromSource = function () {
	}, e._calculateCurrentPosition = function () {
	}, e._updatePosition = function () {
	}, e._removeLooping = function (t) {
	}, e._addLooping = function (t) {
	}, e._pause = function () {
	}, e._resume = function () {
	}, e._handleStop = function () {
	}, e._handleCleanUp = function () {
	}, e._handleLoop = function () {
	}, createjs.AbstractSoundInstance = createjs.promote(t, "EventDispatcher"), createjs.DefaultSoundInstance = createjs.AbstractSoundInstance
}(),this.createjs = this.createjs || {},function () {
	"use strict";
	var t = function () {
		this._capabilities = null, this._loaders = {}, this._audioSources = {}, this._soundInstances = {}, this._volume = 1, this._loaderClass, this._soundInstanceClass
	}, e = t.prototype;
	t._capabilities = null, t.isSupported = function () {
		return !0
	}, e.register = function (t) {
		var e = this._loaders[t.src];
		return e && !e.canceled ? this._loaders[t.src] : (this._audioSources[t.src] = !0, this._soundInstances[t.src] = [], (e = new this._loaderClass(t)).on("complete", this._handlePreloadComplete, this), this._loaders[t.src] = e, e)
	}, e.preload = function (t) {
		t.on("error", this._handlePreloadError, this), t.load()
	}, e.isPreloadStarted = function (t) {
		return null != this._audioSources[t]
	}, e.isPreloadComplete = function (t) {
		return !(null == this._audioSources[t] || 1 == this._audioSources[t])
	}, e.removeSound = function (t) {
		if (this._soundInstances[t]) {
			for (var e = this._soundInstances[t].length; e--;) {
				this._soundInstances[t][e].destroy()
			}
			delete this._soundInstances[t], delete this._audioSources[t], this._loaders[t] && this._loaders[t].destroy(), delete this._loaders[t]
		}
	}, e.removeAllSounds = function () {
		for (var t in this._audioSources) this.removeSound(t)
	}, e.create = function (t, e, A) {
		this.isPreloadStarted(t) || this.preload(this.register(t));
		var i = new this._soundInstanceClass(t, e, A, this._audioSources[t]);
		return this._soundInstances[t].push(i), i
	}, e.setVolume = function (t) {
		return this._volume = t, this._updateVolume(), !0
	}, e.getVolume = function () {
		return this._volume
	}, e.setMute = function (t) {
		return this._updateVolume(), !0
	}, e.toString = function () {
		return "[AbstractPlugin]"
	}, e._handlePreloadComplete = function (t) {
		var e = t.target.getItem().src;
		this._audioSources[e] = t.result;
		for (var A = 0, i = this._soundInstances[e].length; i > A; A++) {
			this._soundInstances[e][A].setPlaybackResource(this._audioSources[e])
		}
	}, e._handlePreloadError = function (t) {
	}, e._updateVolume = function () {
	}, createjs.AbstractPlugin = t
}(),this.createjs = this.createjs || {},function () {
	"use strict";

	function t(t) {
		this.AbstractLoader_constructor(t, !0, createjs.AbstractLoader.SOUND)
	}

	var e = createjs.extend(t, createjs.AbstractLoader);
	t.context = null, e.toString = function () {
		return "[WebAudioLoader]"
	}, e._createRequest = function () {
		this._request = new createjs.XHRRequest(this._item, !1), this._request.setResponseType("arraybuffer")
	}, e._sendComplete = function (e) {
		t.context.decodeAudioData(this._rawResult, createjs.proxy(this._handleAudioDecoded, this), createjs.proxy(this._sendError, this))
	}, e._handleAudioDecoded = function (t) {
		this._result = t, this.AbstractLoader__sendComplete()
	}, createjs.WebAudioLoader = createjs.promote(t, "AbstractLoader")
}(),this.createjs = this.createjs || {},function () {
	"use strict";

	function t(t, e, i, n) {
		this.AbstractSoundInstance_constructor(t, e, i, n), this.gainNode = A.context.createGain(), this.panNode = A.context.createPanner(), this.panNode.panningModel = A._panningModel, this.panNode.connect(this.gainNode), this._updatePan(), this.sourceNode = null, this._soundCompleteTimeout = null, this._sourceNodeNext = null, this._playbackStartTime = 0, this._endedHandler = createjs.proxy(this._handleSoundComplete, this)
	}

	var e = createjs.extend(t, createjs.AbstractSoundInstance), A = t;
	A.context = null, A._scratchBuffer = null, A.destinationNode = null, A._panningModel = "equalpower", e.destroy = function () {
		this.AbstractSoundInstance_destroy(), this.panNode.disconnect(0), this.panNode = null, this.gainNode.disconnect(0), this.gainNode = null
	}, e.toString = function () {
		return "[WebAudioSoundInstance]"
	}, e._updatePan = function () {
		this.panNode.setPosition(this._pan, 0, -.5)
	}, e._removeLooping = function (t) {
		this._sourceNodeNext = this._cleanUpAudioNode(this._sourceNodeNext)
	}, e._addLooping = function (t) {
		this.playState == createjs.Sound.PLAY_SUCCEEDED && (this._sourceNodeNext = this._createAndPlayAudioNode(this._playbackStartTime, 0))
	}, e._setDurationFromSource = function () {
		this._duration = 1e3 * this.playbackResource.duration
	}, e._handleCleanUp = function () {
		this.sourceNode && this.playState == createjs.Sound.PLAY_SUCCEEDED && (this.sourceNode = this._cleanUpAudioNode(this.sourceNode), this._sourceNodeNext = this._cleanUpAudioNode(this._sourceNodeNext)), 0 != this.gainNode.numberOfOutputs && this.gainNode.disconnect(0), clearTimeout(this._soundCompleteTimeout), this._playbackStartTime = 0
	}, e._cleanUpAudioNode = function (t) {
		if (t) {
			t.stop(0), t.disconnect(0);
			try {
				t.buffer = A._scratchBuffer
			} catch (t) {
			}
			t = null
		}
		return t
	}, e._handleSoundReady = function (t) {
		this.gainNode.connect(A.destinationNode);
		var e = .001 * this._duration, i = .001 * this._position;
		i > e && (i = e), this.sourceNode = this._createAndPlayAudioNode(A.context.currentTime - e, i), this._playbackStartTime = this.sourceNode.startTime - i, this._soundCompleteTimeout = setTimeout(this._endedHandler, 1e3 * (e - i)), 0 != this._loop && (this._sourceNodeNext = this._createAndPlayAudioNode(this._playbackStartTime, 0))
	}, e._createAndPlayAudioNode = function (t, e) {
		var i = A.context.createBufferSource();
		i.buffer = this.playbackResource, i.connect(this.panNode);
		var n = .001 * this._duration;
		return i.startTime = t + n, i.start(i.startTime, e + .001 * this._startTime, n - e), i
	}, e._pause = function () {
		this._position = 1e3 * (A.context.currentTime - this._playbackStartTime), this.sourceNode = this._cleanUpAudioNode(this.sourceNode), this._sourceNodeNext = this._cleanUpAudioNode(this._sourceNodeNext), 0 != this.gainNode.numberOfOutputs && this.gainNode.disconnect(0), clearTimeout(this._soundCompleteTimeout)
	}, e._resume = function () {
		this._handleSoundReady()
	}, e._updateVolume = function () {
		var t = this._muted ? 0 : this._volume;
		t != this.gainNode.gain.value && (this.gainNode.gain.value = t)
	}, e._calculateCurrentPosition = function () {
		return 1e3 * (A.context.currentTime - this._playbackStartTime)
	}, e._updatePosition = function () {
		this.sourceNode = this._cleanUpAudioNode(this.sourceNode), this._sourceNodeNext = this._cleanUpAudioNode(this._sourceNodeNext), clearTimeout(this._soundCompleteTimeout), this._paused || this._handleSoundReady()
	}, e._handleLoop = function () {
		this._cleanUpAudioNode(this.sourceNode), this.sourceNode = this._sourceNodeNext, this._playbackStartTime = this.sourceNode.startTime, this._sourceNodeNext = this._createAndPlayAudioNode(this._playbackStartTime, 0), this._soundCompleteTimeout = setTimeout(this._endedHandler, this._duration)
	}, e._updateDuration = function () {
		this.playState == createjs.Sound.PLAY_SUCCEEDED && (this._pause(), this._resume())
	}, createjs.WebAudioSoundInstance = createjs.promote(t, "AbstractSoundInstance")
}(),this.createjs = this.createjs || {},function () {
	"use strict";

	function t() {
		this.AbstractPlugin_constructor(), this._panningModel = A._panningModel, this.context = A.context, this.dynamicsCompressorNode = this.context.createDynamicsCompressor(), this.dynamicsCompressorNode.connect(this.context.destination), this.gainNode = this.context.createGain(), this.gainNode.connect(this.dynamicsCompressorNode), createjs.WebAudioSoundInstance.destinationNode = this.gainNode, this._capabilities = A._capabilities, this._loaderClass = createjs.WebAudioLoader, this._soundInstanceClass = createjs.WebAudioSoundInstance, this._addPropsToClasses()
	}

	var e = createjs.extend(t, createjs.AbstractPlugin), A = t;
	A._capabilities = null, A._panningModel = "equalpower", A.context = null, A._scratchBuffer = null, A._unlocked = !1, A.isSupported = function () {
		var t = createjs.BrowserDetect.isIOS || createjs.BrowserDetect.isAndroid || createjs.BrowserDetect.isBlackberry;
		return !("file:" == location.protocol && !t && !this._isFileXHRSupported()) && (A._generateCapabilities(), null != A.context)
	}, A.playEmptySound = function () {
		if (null != A.context) {
			var t = A.context.createBufferSource();
			t.buffer = A._scratchBuffer, t.connect(A.context.destination), t.start(0, 0, 0)
		}
	}, A._isFileXHRSupported = function () {
		var t = !0, e = new XMLHttpRequest;
		try {
			e.open("GET", "WebAudioPluginTest.fail", !1)
		} catch (e) {
			return t = !1
		}
		e.onerror = function () {
			t = !1
		}, e.onload = function () {
			t = 404 == this.status || 200 == this.status || 0 == this.status && "" != this.response
		};
		try {
			e.send()
		} catch (e) {
			t = !1
		}
		return t
	}, A._generateCapabilities = function () {
		if (null == A._capabilities) {
			var t = document.createElement("audio");
			if (null == t.canPlayType) return null;
			if (null == A.context) if (window.AudioContext) A.context = new AudioContext; else {
				if (!window.webkitAudioContext) return null;
				A.context = new webkitAudioContext
			}
			null == A._scratchBuffer && (A._scratchBuffer = A.context.createBuffer(1, 1, 22050)), A._compatibilitySetUp(), "ontouchstart" in window && "running" != A.context.state && (A._unlock(), document.addEventListener("mousedown", A._unlock, !0), document.addEventListener("touchend", A._unlock, !0)), A._capabilities = {
				panning: !0,
				volume: !0,
				tracks: -1
			};
			for (var e = createjs.Sound.SUPPORTED_EXTENSIONS, i = createjs.Sound.EXTENSION_MAP, n = 0, a = e.length; a > n; n++) {
				var o = e[n], s = i[o] || o;
				A._capabilities[o] = "no" != t.canPlayType("audio/" + o) && "" != t.canPlayType("audio/" + o) || "no" != t.canPlayType("audio/" + s) && "" != t.canPlayType("audio/" + s)
			}
			A.context.destination.numberOfChannels < 2 && (A._capabilities.panning = !1)
		}
	}, A._compatibilitySetUp = function () {
		if (A._panningModel = "equalpower", !A.context.createGain) {
			A.context.createGain = A.context.createGainNode;
			var t = A.context.createBufferSource();
			t.__proto__.start = t.__proto__.noteGrainOn, t.__proto__.stop = t.__proto__.noteOff, A._panningModel = 0
		}
	}, A._unlock = function () {
		A._unlocked || (A.playEmptySound(), "running" == A.context.state && (document.removeEventListener("mousedown", A._unlock, !0), document.removeEventListener("touchend", A._unlock, !0), A._unlocked = !0))
	}, e.toString = function () {
		return "[WebAudioPlugin]"
	}, e._addPropsToClasses = function () {
		var t = this._soundInstanceClass;
		t.context = this.context, t._scratchBuffer = A._scratchBuffer, t.destinationNode = this.gainNode, t._panningModel = this._panningModel, this._loaderClass.context = this.context
	}, e._updateVolume = function () {
		var t = createjs.Sound._masterMute ? 0 : this._volume;
		t != this.gainNode.gain.value && (this.gainNode.gain.value = t)
	}, createjs.WebAudioPlugin = createjs.promote(t, "AbstractPlugin")
}(),this.createjs = this.createjs || {},function () {
	"use strict";

	function t() {
		throw"HTMLAudioTagPool cannot be instantiated"
	}

	function e(t) {
		this._tags = []
	}

	var A = t;
	A._tags = {}, A._tagPool = new e, A._tagUsed = {}, A.get = function (t) {
		var e = A._tags[t];
		return null == e ? (e = A._tags[t] = A._tagPool.get()).src = t : A._tagUsed[t] ? (e = A._tagPool.get()).src = t : A._tagUsed[t] = !0, e
	}, A.set = function (t, e) {
		e == A._tags[t] ? A._tagUsed[t] = !1 : A._tagPool.set(e)
	}, A.remove = function (t) {
		var e = A._tags[t];
		return null != e && (A._tagPool.set(e), delete A._tags[t], delete A._tagUsed[t], !0)
	}, A.getDuration = function (t) {
		var e = A._tags[t];
		return null != e && e.duration ? 1e3 * e.duration : 0
	}, createjs.HTMLAudioTagPool = t;
	var i = e.prototype;
	i.constructor = e, i.get = function () {
		var t;
		return null == (t = 0 == this._tags.length ? this._createTag() : this._tags.pop()).parentNode && document.body.appendChild(t), t
	}, i.set = function (t) {
		-1 == createjs.indexOf(this._tags, t) && (this._tags.src = null, this._tags.push(t))
	}, i.toString = function () {
		return "[TagPool]"
	}, i._createTag = function () {
		var t = document.createElement("audio");
		return t.autoplay = !1, t.preload = "none", t
	}
}(),this.createjs = this.createjs || {},function () {
	"use strict";

	function t(t, e, A, i) {
		this.AbstractSoundInstance_constructor(t, e, A, i), this._audioSpriteStopTime = null, this._delayTimeoutId = null, this._endedHandler = createjs.proxy(this._handleSoundComplete, this), this._readyHandler = createjs.proxy(this._handleTagReady, this), this._stalledHandler = createjs.proxy(this._playFailed, this), this._audioSpriteEndHandler = createjs.proxy(this._handleAudioSpriteLoop, this), this._loopHandler = createjs.proxy(this._handleSoundComplete, this), A ? this._audioSpriteStopTime = .001 * (e + A) : this._duration = createjs.HTMLAudioTagPool.getDuration(this.src)
	}

	var e = createjs.extend(t, createjs.AbstractSoundInstance);
	e.setMasterVolume = function (t) {
		this._updateVolume()
	}, e.setMasterMute = function (t) {
		this._updateVolume()
	}, e.toString = function () {
		return "[HTMLAudioSoundInstance]"
	}, e._removeLooping = function () {
		null != this._playbackResource && (this._playbackResource.loop = !1, this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this._loopHandler, !1))
	}, e._addLooping = function () {
		null == this._playbackResource || this._audioSpriteStopTime || (this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this._loopHandler, !1), this._playbackResource.loop = !0)
	}, e._handleCleanUp = function () {
		var t = this._playbackResource;
		if (null != t) {
			t.pause(), t.loop = !1, t.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_ENDED, this._endedHandler, !1), t.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_READY, this._readyHandler, !1), t.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_STALLED, this._stalledHandler, !1), t.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this._loopHandler, !1), t.removeEventListener(createjs.HTMLAudioPlugin._TIME_UPDATE, this._audioSpriteEndHandler, !1);
			try {
				t.currentTime = this._startTime
			} catch (t) {
			}
			createjs.HTMLAudioTagPool.set(this.src, t), this._playbackResource = null
		}
	}, e._beginPlaying = function (t) {
		return this._playbackResource = createjs.HTMLAudioTagPool.get(this.src), this.AbstractSoundInstance__beginPlaying(t)
	}, e._handleSoundReady = function (t) {
		if (4 !== this._playbackResource.readyState) {
			var e = this._playbackResource;
			return e.addEventListener(createjs.HTMLAudioPlugin._AUDIO_READY, this._readyHandler, !1), e.addEventListener(createjs.HTMLAudioPlugin._AUDIO_STALLED, this._stalledHandler, !1), e.preload = "auto", void e.load()
		}
		this._updateVolume(), this._playbackResource.currentTime = .001 * (this._startTime + this._position), this._audioSpriteStopTime ? this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._TIME_UPDATE, this._audioSpriteEndHandler, !1) : (this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._AUDIO_ENDED, this._endedHandler, !1), 0 != this._loop && (this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this._loopHandler, !1), this._playbackResource.loop = !0)), this._playbackResource.play()
	}, e._handleTagReady = function (t) {
		this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_READY, this._readyHandler, !1), this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_STALLED, this._stalledHandler, !1), this._handleSoundReady()
	}, e._pause = function () {
		this._playbackResource.pause()
	}, e._resume = function () {
		this._playbackResource.play()
	}, e._updateVolume = function () {
		if (null != this._playbackResource) {
			var t = this._muted || createjs.Sound._masterMute ? 0 : this._volume * createjs.Sound._masterVolume;
			t != this._playbackResource.volume && (this._playbackResource.volume = t)
		}
	}, e._calculateCurrentPosition = function () {
		return 1e3 * this._playbackResource.currentTime - this._startTime
	}, e._updatePosition = function () {
		this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this._loopHandler, !1), this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this._handleSetPositionSeek, !1);
		try {
			this._playbackResource.currentTime = .001 * (this._position + this._startTime)
		} catch (t) {
			this._handleSetPositionSeek(null)
		}
	}, e._handleSetPositionSeek = function (t) {
		null != this._playbackResource && (this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this._handleSetPositionSeek, !1), this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this._loopHandler, !1))
	}, e._handleAudioSpriteLoop = function (t) {
		this._playbackResource.currentTime <= this._audioSpriteStopTime || (this._playbackResource.pause(), 0 == this._loop ? this._handleSoundComplete(null) : (this._position = 0, this._loop--, this._playbackResource.currentTime = .001 * this._startTime, this._paused || this._playbackResource.play(), this._sendEvent("loop")))
	}, e._handleLoop = function (t) {
		0 == this._loop && (this._playbackResource.loop = !1, this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this._loopHandler, !1))
	}, e._updateStartTime = function () {
		this._audioSpriteStopTime = .001 * (this._startTime + this._duration), this.playState == createjs.Sound.PLAY_SUCCEEDED && (this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_ENDED, this._endedHandler, !1), this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._TIME_UPDATE, this._audioSpriteEndHandler, !1))
	}, e._updateDuration = function () {
		this._audioSpriteStopTime = .001 * (this._startTime + this._duration), this.playState == createjs.Sound.PLAY_SUCCEEDED && (this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_ENDED, this._endedHandler, !1), this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._TIME_UPDATE, this._audioSpriteEndHandler, !1))
	}, e._setDurationFromSource = function () {
		this._duration = createjs.HTMLAudioTagPool.getDuration(this.src), this._playbackResource = null
	}, createjs.HTMLAudioSoundInstance = createjs.promote(t, "AbstractSoundInstance")
}(),this.createjs = this.createjs || {},function () {
	"use strict";

	function t() {
		this.AbstractPlugin_constructor(), this.defaultNumChannels = 2, this._capabilities = A._capabilities, this._loaderClass = createjs.SoundLoader, this._soundInstanceClass = createjs.HTMLAudioSoundInstance
	}

	var e = createjs.extend(t, createjs.AbstractPlugin), A = t;
	A.MAX_INSTANCES = 30, A._AUDIO_READY = "canplaythrough", A._AUDIO_ENDED = "ended", A._AUDIO_SEEKED = "seeked", A._AUDIO_STALLED = "stalled", A._TIME_UPDATE = "timeupdate", A._capabilities = null, A.isSupported = function () {
		return A._generateCapabilities(), null != A._capabilities
	}, A._generateCapabilities = function () {
		if (null == A._capabilities) {
			var t = document.createElement("audio");
			if (null == t.canPlayType) return null;
			A._capabilities = {panning: !1, volume: !0, tracks: -1};
			for (var e = createjs.Sound.SUPPORTED_EXTENSIONS, i = createjs.Sound.EXTENSION_MAP, n = 0, a = e.length; a > n; n++) {
				var o = e[n], s = i[o] || o;
				A._capabilities[o] = "no" != t.canPlayType("audio/" + o) && "" != t.canPlayType("audio/" + o) || "no" != t.canPlayType("audio/" + s) && "" != t.canPlayType("audio/" + s)
			}
		}
	}, e.register = function (t) {
		var e = createjs.HTMLAudioTagPool.get(t.src), A = this.AbstractPlugin_register(t);
		return A.setTag(e), A
	}, e.removeSound = function (t) {
		this.AbstractPlugin_removeSound(t), createjs.HTMLAudioTagPool.remove(t)
	}, e.create = function (t, e, A) {
		var i = this.AbstractPlugin_create(t, e, A);
		return i.setPlaybackResource(null), i
	}, e.toString = function () {
		return "[HTMLAudioPlugin]"
	}, e.setVolume = e.getVolume = e.setMute = null, createjs.HTMLAudioPlugin = createjs.promote(t, "AbstractPlugin")
}(),this.createjs = this.createjs || {},function () {
	"use strict";

	function t(e, A, i) {
		this.ignoreGlobalPause = !1, this.loop = !1, this.duration = 0, this.pluginData = i || {}, this.target = e, this.position = null, this.passive = !1, this._paused = !1, this._curQueueProps = {}, this._initQueueProps = {}, this._steps = [], this._actions = [], this._prevPosition = 0, this._stepPosition = 0, this._prevPos = -1, this._target = e, this._useTicks = !1, this._inited = !1, this._registered = !1, A && (this._useTicks = A.useTicks, this.ignoreGlobalPause = A.ignoreGlobalPause, this.loop = A.loop, A.onChange && this.addEventListener("change", A.onChange), A.override && t.removeTweens(e)), A && A.paused ? this._paused = !0 : createjs.Tween._register(this, !0), A && null != A.position && this.setPosition(A.position, t.NONE)
	}

	var e = createjs.extend(t, createjs.EventDispatcher);
	t.NONE = 0, t.LOOP = 1, t.REVERSE = 2, t.IGNORE = {}, t._tweens = [], t._plugins = {}, t.get = function (e, A, i, n) {
		return n && t.removeTweens(e), new t(e, A, i)
	}, t.tick = function (e, A) {
		for (var i = t._tweens.slice(), n = i.length - 1; n >= 0; n--) {
			var a = i[n];
			A && !a.ignoreGlobalPause || a._paused || a.tick(a._useTicks ? 1 : e)
		}
	}, t.handleEvent = function (t) {
		"tick" == t.type && this.tick(t.delta, t.paused)
	}, t.removeTweens = function (e) {
		if (e.tweenjs_count) {
			for (var A = t._tweens, i = A.length - 1; i >= 0; i--) {
				var n = A[i];
				n._target == e && (n._paused = !0, A.splice(i, 1))
			}
			e.tweenjs_count = 0
		}
	}, t.removeAllTweens = function () {
		for (var e = t._tweens, A = 0, i = e.length; i > A; A++) {
			var n = e[A];
			n._paused = !0, n.target && (n.target.tweenjs_count = 0)
		}
		e.length = 0
	}, t.hasActiveTweens = function (e) {
		return e ? null != e.tweenjs_count && !!e.tweenjs_count : t._tweens && !!t._tweens.length
	}, t.installPlugin = function (e, A) {
		var i = e.priority;
		null == i && (e.priority = i = 0);
		for (var n = 0, a = A.length, o = t._plugins; a > n; n++) {
			var s = A[n];
			if (o[s]) {
				for (var r = o[s], g = 0, h = r.length; h > g && !(i < r[g].priority); g++) ;
				o[s].splice(g, 0, e)
			} else o[s] = [e]
		}
	}, t._register = function (e, A) {
		var i = e._target, n = t._tweens;
		if (A && !e._registered) i && (i.tweenjs_count = i.tweenjs_count ? i.tweenjs_count + 1 : 1), n.push(e), !t._inited && createjs.Ticker && (createjs.Ticker.addEventListener("tick", t), t._inited = !0); else if (!A && e._registered) {
			i && i.tweenjs_count--;
			for (var a = n.length; a--;) if (n[a] == e) {
				n.splice(a, 1);
				break
			}
		}
		e._registered = A
	}, e.wait = function (t, e) {
		if (null == t || 0 >= t) return this;
		var A = this._cloneProps(this._curQueueProps);
		return this._addStep({d: t, p0: A, e: this._linearEase, p1: A, v: e})
	}, e.to = function (t, e, A) {
		return (isNaN(e) || 0 > e) && (e = 0), this._addStep({
			d: e || 0,
			p0: this._cloneProps(this._curQueueProps),
			e: A,
			p1: this._cloneProps(this._appendQueueProps(t))
		})
	}, e.call = function (t, e, A) {
		return this._addAction({f: t, p: e || [this], o: A || this._target})
	}, e.set = function (t, e) {
		return this._addAction({f: this._set, o: this, p: [t, e || this._target]})
	}, e.play = function (t) {
		return t || (t = this), this.call(t.setPaused, [!1], t)
	}, e.pause = function (t) {
		return t || (t = this), this.call(t.setPaused, [!0], t)
	}, e.setPosition = function (t, e) {
		0 > t && (t = 0), null == e && (e = 1);
		var A = t, i = !1;
		if (A >= this.duration && (this.loop ? A %= this.duration : (A = this.duration, i = !0)), A == this._prevPos) return i;
		var n = this._prevPos;
		if (this.position = this._prevPos = A, this._prevPosition = t, this._target) if (i) this._updateTargetProps(null, 1); else if (this._steps.length > 0) {
			for (var a = 0, o = this._steps.length; o > a && !(this._steps[a].t > A); a++) ;
			var s = this._steps[a - 1];
			this._updateTargetProps(s, (this._stepPosition = A - s.t) / s.d)
		}
		return 0 != e && this._actions.length > 0 && (this._useTicks ? this._runActions(A, A) : 1 == e && n > A ? (n != this.duration && this._runActions(n, this.duration), this._runActions(0, A, !0)) : this._runActions(n, A)), i && this.setPaused(!0), this.dispatchEvent("change"), i
	}, e.tick = function (t) {
		this._paused || this.setPosition(this._prevPosition + t)
	}, e.setPaused = function (e) {
		return this._paused === !!e || (this._paused = !!e, t._register(this, !e)), this
	}, e.w = e.wait, e.t = e.to, e.c = e.call, e.s = e.set, e.toString = function () {
		return "[Tween]"
	}, e.clone = function () {
		throw"Tween can not be cloned."
	}, e._updateTargetProps = function (e, A) {
		var i, n, a, o, s, r;
		if (e || 1 != A) {
			if (this.passive = !!e.v, this.passive) return;
			e.e && (A = e.e(A, 0, 1, 1)), i = e.p0, n = e.p1
		} else this.passive = !1, i = n = this._curQueueProps;
		for (var g in this._initQueueProps) {
			null == (o = i[g]) && (i[g] = o = this._initQueueProps[g]), null == (s = n[g]) && (n[g] = s = o), a = o == s || 0 == A || 1 == A || "number" != typeof o ? 1 == A ? s : o : o + (s - o) * A;
			var h = !1;
			if (r = t._plugins[g]) for (var l = 0, c = r.length; c > l; l++) {
				var u = r[l].tween(this, g, a, i, n, A, !!e && i == n, !e);
				u == t.IGNORE ? h = !0 : a = u
			}
			h || (this._target[g] = a)
		}
	}, e._runActions = function (t, e, A) {
		var i = t, n = e, a = -1, o = this._actions.length, s = 1;
		for (t > e && (i = e, n = t, a = o, o = s = -1); (a += s) != o;) {
			var r = this._actions[a], g = r.t;
			(g == n || g > i && n > g || A && g == t) && r.f.apply(r.o, r.p)
		}
	}, e._appendQueueProps = function (e) {
		var A, i, n, a, o;
		for (var s in e) if (void 0 === this._initQueueProps[s]) {
			if (i = this._target[s], A = t._plugins[s]) for (n = 0, a = A.length; a > n; n++) i = A[n].init(this, s, i);
			this._initQueueProps[s] = this._curQueueProps[s] = void 0 === i ? null : i
		} else i = this._curQueueProps[s];
		for (var s in e) {
			if (i = this._curQueueProps[s], A = t._plugins[s]) for (o = o || {}, n = 0, a = A.length; a > n; n++) A[n].step && A[n].step(this, s, i, e[s], o);
			this._curQueueProps[s] = e[s]
		}
		return o && this._appendQueueProps(o), this._curQueueProps
	}, e._cloneProps = function (t) {
		var e = {};
		for (var A in t) e[A] = t[A];
		return e
	}, e._addStep = function (t) {
		return t.d > 0 && (this._steps.push(t), t.t = this.duration, this.duration += t.d), this
	}, e._addAction = function (t) {
		return t.t = this.duration, this._actions.push(t), this
	}, e._set = function (t, e) {
		for (var A in t) e[A] = t[A]
	}, createjs.Tween = createjs.promote(t, "EventDispatcher")
}(),this.createjs = this.createjs || {},function () {
	"use strict";

	function t(t, e, A) {
		this.EventDispatcher_constructor(), this.ignoreGlobalPause = !1, this.duration = 0, this.loop = !1, this.position = null, this._paused = !1, this._tweens = [], this._labels = null, this._labelList = null, this._prevPosition = 0, this._prevPos = -1, this._useTicks = !1, this._registered = !1, A && (this._useTicks = A.useTicks, this.loop = A.loop, this.ignoreGlobalPause = A.ignoreGlobalPause, A.onChange && this.addEventListener("change", A.onChange)), t && this.addTween.apply(this, t), this.setLabels(e), A && A.paused ? this._paused = !0 : createjs.Tween._register(this, !0), A && null != A.position && this.setPosition(A.position, createjs.Tween.NONE)
	}

	var e = createjs.extend(t, createjs.EventDispatcher);
	e.addTween = function (t) {
		var e = arguments.length;
		if (e > 1) {
			for (var A = 0; e > A; A++) this.addTween(arguments[A]);
			return arguments[0]
		}
		return 0 == e ? null : (this.removeTween(t), this._tweens.push(t), t.setPaused(!0), t._paused = !1, t._useTicks = this._useTicks, t.duration > this.duration && (this.duration = t.duration), this._prevPos >= 0 && t.setPosition(this._prevPos, createjs.Tween.NONE), t)
	}, e.removeTween = function (t) {
		var e = arguments.length;
		if (e > 1) {
			for (var A = !0, i = 0; e > i; i++) A = A && this.removeTween(arguments[i]);
			return A
		}
		if (0 == e) return !1;
		var n = this._tweens;
		for (i = n.length; i--;) if (n[i] == t) return n.splice(i, 1), t.duration >= this.duration && this.updateDuration(), !0;
		return !1
	}, e.addLabel = function (t, e) {
		this._labels[t] = e;
		var A = this._labelList;
		if (A) {
			for (var i = 0, n = A.length; n > i && !(e < A[i].position); i++) ;
			A.splice(i, 0, {label: t, position: e})
		}
	}, e.setLabels = function (t) {
		this._labels = t || {}
	}, e.getLabels = function () {
		var t = this._labelList;
		if (!t) {
			t = this._labelList = [];
			var e = this._labels;
			for (var A in e) t.push({label: A, position: e[A]});
			t.sort((function (t, e) {
				return t.position - e.position
			}))
		}
		return t
	}, e.getCurrentLabel = function () {
		var t = this.getLabels(), e = this.position, A = t.length;
		if (A) {
			for (var i = 0; A > i && !(e < t[i].position); i++) ;
			return 0 == i ? null : t[i - 1].label
		}
		return null
	}, e.gotoAndPlay = function (t) {
		this.setPaused(!1), this._goto(t)
	}, e.gotoAndStop = function (t) {
		this.setPaused(!0), this._goto(t)
	}, e.setPosition = function (t, e) {
		var A = this._calcPosition(t), i = !this.loop && t >= this.duration;
		if (A == this._prevPos) return i;
		this._prevPosition = t, this.position = this._prevPos = A;
		for (var n = 0, a = this._tweens.length; a > n; n++) if (this._tweens[n].setPosition(A, e), A != this._prevPos) return !1;
		return i && this.setPaused(!0), this.dispatchEvent("change"), i
	}, e.setPaused = function (t) {
		this._paused = !!t, createjs.Tween._register(this, !t)
	}, e.updateDuration = function () {
		this.duration = 0;
		for (var t = 0, e = this._tweens.length; e > t; t++) {
			var A = this._tweens[t];
			A.duration > this.duration && (this.duration = A.duration)
		}
	}, e.tick = function (t) {
		this.setPosition(this._prevPosition + t)
	}, e.resolve = function (t) {
		var e = Number(t);
		return isNaN(e) && (e = this._labels[t]), e
	}, e.toString = function () {
		return "[Timeline]"
	}, e.clone = function () {
		throw"Timeline can not be cloned."
	}, e._goto = function (t) {
		var e = this.resolve(t);
		null != e && this.setPosition(e)
	}, e._calcPosition = function (t) {
		return 0 > t ? 0 : t < this.duration ? t : this.loop ? t % this.duration : this.duration
	}, createjs.Timeline = createjs.promote(t, "EventDispatcher")
}(),this.createjs = this.createjs || {},function () {
	"use strict";

	function t() {
		throw"Ease cannot be instantiated."
	}

	t.linear = function (t) {
		return t
	}, t.none = t.linear, t.get = function (t) {
		return -1 > t && (t = -1), t > 1 && (t = 1), function (e) {
			return 0 == t ? e : 0 > t ? e * (e * -t + 1 + t) : e * ((2 - e) * t + (1 - t))
		}
	}, t.getPowIn = function (t) {
		return function (e) {
			return Math.pow(e, t)
		}
	}, t.getPowOut = function (t) {
		return function (e) {
			return 1 - Math.pow(1 - e, t)
		}
	}, t.getPowInOut = function (t) {
		return function (e) {
			return (e *= 2) < 1 ? .5 * Math.pow(e, t) : 1 - .5 * Math.abs(Math.pow(2 - e, t))
		}
	}, t.quadIn = t.getPowIn(2), t.quadOut = t.getPowOut(2), t.quadInOut = t.getPowInOut(2), t.cubicIn = t.getPowIn(3), t.cubicOut = t.getPowOut(3), t.cubicInOut = t.getPowInOut(3), t.quartIn = t.getPowIn(4), t.quartOut = t.getPowOut(4), t.quartInOut = t.getPowInOut(4), t.quintIn = t.getPowIn(5), t.quintOut = t.getPowOut(5), t.quintInOut = t.getPowInOut(5), t.sineIn = function (t) {
		return 1 - Math.cos(t * Math.PI / 2)
	}, t.sineOut = function (t) {
		return Math.sin(t * Math.PI / 2)
	}, t.sineInOut = function (t) {
		return -.5 * (Math.cos(Math.PI * t) - 1)
	}, t.getBackIn = function (t) {
		return function (e) {
			return e * e * ((t + 1) * e - t)
		}
	}, t.backIn = t.getBackIn(1.7), t.getBackOut = function (t) {
		return function (e) {
			return --e * e * ((t + 1) * e + t) + 1
		}
	}, t.backOut = t.getBackOut(1.7), t.getBackInOut = function (t) {
		return t *= 1.525, function (e) {
			return (e *= 2) < 1 ? e * e * ((t + 1) * e - t) * .5 : .5 * ((e -= 2) * e * ((t + 1) * e + t) + 2)
		}
	}, t.backInOut = t.getBackInOut(1.7), t.circIn = function (t) {
		return -(Math.sqrt(1 - t * t) - 1)
	}, t.circOut = function (t) {
		return Math.sqrt(1 - --t * t)
	}, t.circInOut = function (t) {
		return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
	}, t.bounceIn = function (e) {
		return 1 - t.bounceOut(1 - e)
	}, t.bounceOut = function (t) {
		return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
	}, t.bounceInOut = function (e) {
		return .5 > e ? .5 * t.bounceIn(2 * e) : .5 * t.bounceOut(2 * e - 1) + .5
	}, t.getElasticIn = function (t, e) {
		var A = 2 * Math.PI;
		return function (i) {
			if (0 == i || 1 == i) return i;
			var n = e / A * Math.asin(1 / t);
			return -t * Math.pow(2, 10 * (i -= 1)) * Math.sin((i - n) * A / e)
		}
	}, t.elasticIn = t.getElasticIn(1, .3), t.getElasticOut = function (t, e) {
		var A = 2 * Math.PI;
		return function (i) {
			if (0 == i || 1 == i) return i;
			var n = e / A * Math.asin(1 / t);
			return t * Math.pow(2, -10 * i) * Math.sin((i - n) * A / e) + 1
		}
	}, t.elasticOut = t.getElasticOut(1, .3), t.getElasticInOut = function (t, e) {
		var A = 2 * Math.PI;
		return function (i) {
			var n = e / A * Math.asin(1 / t);
			return (i *= 2) < 1 ? t * Math.pow(2, 10 * (i -= 1)) * Math.sin((i - n) * A / e) * -.5 : t * Math.pow(2, -10 * (i -= 1)) * Math.sin((i - n) * A / e) * .5 + 1
		}
	}, t.elasticInOut = t.getElasticInOut(1, .3 * 1.5), createjs.Ease = t
}(),this.createjs = this.createjs || {},function () {
	"use strict";

	function t() {
		throw"MotionGuidePlugin cannot be instantiated."
	}

	t.priority = 0, t._rotOffS, t._rotOffE, t._rotNormS, t._rotNormE, t.install = function () {
		return createjs.Tween.installPlugin(t, ["guide", "x", "y", "rotation"]), createjs.Tween.IGNORE
	}, t.init = function (t, e, A) {
		var i = t.target;
		return i.hasOwnProperty("x") || (i.x = 0), i.hasOwnProperty("y") || (i.y = 0), i.hasOwnProperty("rotation") || (i.rotation = 0), "rotation" == e && (t.__needsRot = !0), "guide" == e ? null : A
	}, t.step = function (e, A, i, n, a) {
		if ("rotation" == A && (e.__rotGlobalS = i, e.__rotGlobalE = n, t.testRotData(e, a)), "guide" != A) return n;
		var o, s = n;
		s.hasOwnProperty("path") || (s.path = []);
		var r = s.path;
		if (s.hasOwnProperty("end") || (s.end = 1), s.hasOwnProperty("start") || (s.start = i && i.hasOwnProperty("end") && i.path === r ? i.end : 0), s.hasOwnProperty("_segments") && s._length) return n;
		var g = r.length;
		if (!(g >= 6 && (g - 2) % 4 == 0)) throw"invalid 'path' data, please see documentation for valid paths";
		s._segments = [], s._length = 0;
		for (var h = 2; g > h; h += 4) {
			for (var l, c, u = r[h - 2], d = r[h - 1], p = r[h + 0], Q = r[h + 1], I = r[h + 2], f = r[h + 3], w = u, L = d, m = 0, _ = [], v = 1; 10 >= v; v++) {
				var E = v / 10, y = 1 - E;
				l = y * y * u + 2 * y * E * p + E * E * I, c = y * y * d + 2 * y * E * Q + E * E * f, m += _[_.push(Math.sqrt((o = l - w) * o + (o = c - L) * o)) - 1], w = l, L = c
			}
			s._segments.push(m), s._segments.push(_), s._length += m
		}
		o = s.orient, s.orient = !0;
		var P = {};
		return t.calc(s, s.start, P), e.__rotPathS = Number(P.rotation.toFixed(5)), t.calc(s, s.end, P), e.__rotPathE = Number(P.rotation.toFixed(5)), s.orient = !1, t.calc(s, s.end, a), s.orient = o, s.orient ? (e.__guideData = s, t.testRotData(e, a), n) : n
	}, t.testRotData = function (t, e) {
		if (void 0 === t.__rotGlobalS || void 0 === t.__rotGlobalE) {
			if (t.__needsRot) return;
			void 0 !== t._curQueueProps.rotation ? t.__rotGlobalS = t.__rotGlobalE = t._curQueueProps.rotation : t.__rotGlobalS = t.__rotGlobalE = e.rotation = t.target.rotation || 0
		}
		if (void 0 !== t.__guideData) {
			var A = t.__guideData, i = t.__rotGlobalE - t.__rotGlobalS, n = t.__rotPathE - t.__rotPathS, a = i - n;
			if ("auto" == A.orient) a > 180 ? a -= 360 : -180 > a && (a += 360); else if ("cw" == A.orient) {
				for (; 0 > a;) a += 360;
				0 == a && i > 0 && 180 != i && (a += 360)
			} else if ("ccw" == A.orient) {
				for (a = i - (n > 180 ? 360 - n : n); a > 0;) a -= 360;
				0 == a && 0 > i && -180 != i && (a -= 360)
			}
			A.rotDelta = a, A.rotOffS = t.__rotGlobalS - t.__rotPathS, t.__rotGlobalS = t.__rotGlobalE = t.__guideData = t.__needsRot = void 0
		}
	}, t.tween = function (e, A, i, n, a, o, s, r) {
		var g = a.guide;
		if (null == g || g === n.guide) return i;
		if (g.lastRatio != o) {
			var h = (g.end - g.start) * (s ? g.end : o) + g.start;
			switch (t.calc(g, h, e.target), g.orient) {
				case"cw":
				case"ccw":
				case"auto":
					e.target.rotation += g.rotOffS + g.rotDelta * o;
					break;
				case"fixed":
				default:
					e.target.rotation += g.rotOffS
			}
			g.lastRatio = o
		}
		return "rotation" != A || g.orient && "false" != g.orient ? e.target[A] : i
	}, t.calc = function (t, e, A) {
		if (null == t._segments) throw"Missing critical pre-calculated information, please file a bug";
		null == A && (A = {x: 0, y: 0, rotation: 0});
		for (var i = t._segments, n = t.path, a = t._length * e, o = i.length - 2, s = 0; a > i[s] && o > s;) a -= i[s], s += 2;
		var r = i[s + 1], g = 0;
		for (o = r.length - 1; a > r[g] && o > g;) a -= r[g], g++;
		var h = g / ++o + a / (o * r[g]);
		s = 2 * s + 2;
		var l = 1 - h;
		return A.x = l * l * n[s - 2] + 2 * l * h * n[s + 0] + h * h * n[s + 2], A.y = l * l * n[s - 1] + 2 * l * h * n[s + 1] + h * h * n[s + 3], t.orient && (A.rotation = 57.2957795 * Math.atan2((n[s + 1] - n[s - 1]) * l + (n[s + 3] - n[s + 1]) * h, (n[s + 0] - n[s - 2]) * l + (n[s + 2] - n[s + 0]) * h)), A
	}, createjs.MotionGuidePlugin = t
}(),this.createjs = this.createjs || {},function () {
	"use strict";
	var t = createjs.TweenJS = createjs.TweenJS || {};
	t.version = "0.6.2", t.buildDate = "Thu, 26 Nov 2015 20:44:31 GMT"
}(),function (t, e, A, i, n) {
	var a;
	t.webFontTxtInst = {};
	var o = 0, s = 0, r = [], g = [];

	function h() {
		var t = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
		return t.gotoAndStop(this.currentFrame), t.paused = this.paused, t.framerate = this.framerate, t
	}

	function l(t, e, i) {
		var n = A.extend(t, A.MovieClip);
		return n.clone = h, n.nominalBounds = e, n.frameBounds = i, n
	}

	t.ssMetadata = [{
		name: "DVG_Homepage_1920x790_200805_atlas_",
		frames: [[994, 1994, 27, 43], [1067, 743, 592, 590], [0, 2008, 587, 515], [584, 1463, 480, 529], [0, 1463, 582, 543], [589, 1994, 403, 402], [1067, 1335, 447, 710], [0, 743, 1065, 718], [0, 0, 1920, 741]]
	}], t.updateListCache = function (t) {
		for (var e = 0; e < t.length; e++) t[e].cacheCanvas && t[e].updateCache()
	}, t.addElementsToCache = function (t, e) {
		for (var A = t; A != exportRoot && -1 == e.indexOf(A);) A = A.parent;
		if (A != exportRoot) for (var i = t, n = e.indexOf(A); i != A;) e.splice(n, 0, i), i = i.parent, n++; else for (A = t; A != exportRoot;) e.push(A), A = A.parent
	}, t.gfontAvailable = function (e, A) {
		t.properties.webfonts[e] = !0;
		for (var i = t.webFontTxtInst && t.webFontTxtInst[e] || [], n = 0; n < i.length; ++n) t.addElementsToCache(i[n], r);
		++s == A && t.updateListCache(r)
	}, t.tfontAvailable = function (e, A) {
		t.properties.webfonts[e] = !0;
		for (var i = t.webFontTxtInst && t.webFontTxtInst[e] || [], n = 0; n < i.length; ++n) t.addElementsToCache(i[n], g);
		++o == A && t.updateListCache(g)
	}, (t.arrow = function () {
		this.spriteSheet = i.DVG_Homepage_1920x790_200805_atlas_, this.gotoAndStop(0)
	}).prototype = a = new A.Sprite, (t.CircleFlatx3 = function () {
		this.spriteSheet = i.DVG_Homepage_1920x790_200805_atlas_, this.gotoAndStop(1)
	}).prototype = a = new A.Sprite, (t.CircleRayx3 = function () {
		this.spriteSheet = i.DVG_Homepage_1920x790_200805_atlas_, this.gotoAndStop(2)
	}).prototype = a = new A.Sprite, (t.CircleShapesAx3 = function () {
		this.spriteSheet = i.DVG_Homepage_1920x790_200805_atlas_, this.gotoAndStop(3)
	}).prototype = a = new A.Sprite, (t.CircleShapesBx3 = function () {
		this.spriteSheet = i.DVG_Homepage_1920x790_200805_atlas_, this.gotoAndStop(4)
	}).prototype = a = new A.Sprite, (t.CircleStrokex3 = function () {
		this.spriteSheet = i.DVG_Homepage_1920x790_200805_atlas_, this.gotoAndStop(5)
	}).prototype = a = new A.Sprite, (t.Circuit1Static1 = function () {
		this.spriteSheet = i.DVG_Homepage_1920x790_200805_atlas_, this.gotoAndStop(6)
	}).prototype = a = new A.Sprite, (t.Circuit2Static1 = function () {
		this.spriteSheet = i.DVG_Homepage_1920x790_200805_atlas_, this.gotoAndStop(7)
	}).prototype = a = new A.Sprite, (t.IMAGEBG1920 = function () {
		this.spriteSheet = i.DVG_Homepage_1920x790_200805_atlas_, this.gotoAndStop(8)
	}).prototype = a = new A.Sprite, (t.Stroke = function (e, i, n) {
		this.initialize(e, i, n, {}), this.instance = new t.CircleStrokex3, this.instance.parent = this, this.instance.setTransform(-201.5, -201), this.timeline.addTween(A.Tween.get(this.instance).wait(1))
	}).prototype = l(t.Stroke, new A.Rectangle(-201.5, -201, 403, 402), null), (t.ShapesB = function (e, i, n) {
		this.initialize(e, i, n, {}), this.instance = new t.CircleShapesBx3, this.instance.parent = this, this.instance.setTransform(-291, -271.5), this.timeline.addTween(A.Tween.get(this.instance).wait(1))
	}).prototype = l(t.ShapesB, new A.Rectangle(-291, -271.5, 582, 543), null), (t.ShapesA = function (e, i, n) {
		this.initialize(e, i, n, {}), this.instance = new t.CircleShapesAx3, this.instance.parent = this, this.instance.setTransform(-240, -264.5), this.timeline.addTween(A.Tween.get(this.instance).wait(1))
	}).prototype = l(t.ShapesA, new A.Rectangle(-240, -264.5, 480, 529), null), (t.Rays = function (e, i, n) {
		this.initialize(e, i, n, {}), this.instance = new t.CircleRayx3, this.instance.parent = this, this.instance.setTransform(-293.5, -257.5), this.timeline.addTween(A.Tween.get(this.instance).wait(1))
	}).prototype = l(t.Rays, new A.Rectangle(-293.5, -257.5, 587, 515), null), (t.Flat = function (e, i, n) {
		this.initialize(e, i, n, {}), this.instance = new t.CircleFlatx3, this.instance.parent = this, this.instance.setTransform(-296, -295), this.timeline.addTween(A.Tween.get(this.instance).wait(1))
	}).prototype = l(t.Flat, new A.Rectangle(-296, -295, 592, 590), null), (t.BirdIntroTween = function (t, e, i) {
		this.initialize(t, e, i, {}), this.shape = new A.Shape, this.shape.graphics.lf(["#8EC640", "rgba(142,198,64,0.929)", "rgba(142,198,64,0)"], [0, .663, 1], -536.5, 0, 536.7, 0).s().p("EhT2AyHMAAAhkNMCntAAAMAAABkNg"), this.timeline.addTween(A.Tween.get(this.shape).wait(1))
	}).prototype = a = new A.MovieClip, a.nominalBounds = new A.Rectangle(-536.6, -320.6, 1073.3, 641.3), (t.BirdGradTween = function (t, e, i) {
		this.initialize(t, e, i, {}), this.shape = new A.Shape, this.shape.graphics.lf(["rgba(210,255,140,0)", "rgba(210,255,140,0.929)", "rgba(210,255,140,0)"], [0, .502, 1], -500.6, 119.7, 500.7, -119.7).s().p("EhZ0gd0MCccglaMAXNBhDMiccAlag"), this.timeline.addTween(A.Tween.get(this.shape).wait(1))
	}).prototype = a = new A.MovieClip, a.nominalBounds = new A.Rectangle(-574.9, -430.3, 1149.9, 860.6), (t.www = function (t, e, i) {
		this.initialize(t, e, i, {}), this.shape = new A.Shape, this.shape.graphics.f("#FFFFFF").s().p("ADbCTQgNgIAAgJQAAgFACgDQAEgEAEAAIANAFQANAHALADQAMAEASABQAZAAANgOQANgOAAgZIAAgfQgHARgQAIQgQAKgVgBQgXAAgSgKQgSgMgKgSQgKgWAAgYQAAgZAKgUQAJgTATgMQASgKAXAAQAVgBAPAKQAPAIAJARIAAgTQAAgHADgEQAEgEAHAAQAHAAAEAEQAEAEAAAHIAACXQAAAogUATQgVAUgnAAQgnAAgZgOgADvgrQgOAQAAAdQAAAdAOARQAPAQAaABQAZgBAOgQQAPgRAAgdQAAgcgPgRQgOgRgZAAQgaAAgPARgAOyCdQgEgFAAgFIAAjYQAAgGAEgFQAEgEAHAAQAHAAADAEQAEAEAAAHIAAATQAIgQAPgJQAQgKAUABQAWAAATALQASAMAJAVQAKAUAAAaQAAAbgKAVQgJATgSANQgRALgYgBQgUABgQgKQgPgJgIgQIAABVQAAAHgEADQgDADgHAAQgIAAgDgDgAPZgrQgOARAAAfQAAAhAOARQANARAaAAQAZAAAPgRQAOgRAAggQAAgfgOgRQgOgSgaAAQgaAAgNARgAWPBWQgUgMgJgUQgLgVAAgcQAAgaALgUQAJgVAUgMQASgLAaABQAZgBASALQATALALAWQAKAUAAAaQAAAcgKAVQgLAUgTAMQgSALgZgBQgaABgSgLgAWTgrQgOASAAAeQAAAgAOASQANARAbAAQAaAAANgQQAOgSAAghQAAgfgOgRQgOgRgZAAQgaAAgOARgATiBWQgSgMgLgUQgKgWAAgaQAAgaALgUQAKgVATgMQAUgLAYAAQAOAAANADQANAEALAHQAGAEADAFQADAEAAAFQAAAFgDADQgDADgEABIgFgCIgFgDIgDgCQgIgGgKgEQgHgDgNAAQgaAAgPASQgPARAAAfQAAAgAPARQAPARAaAAQAMAAAJgDQAIgEAKgGIAHgEQAEgCACAAQAFAAACAEQADACAAAGQAAAEgDAEQgCADgHAFQgLAIgOAEQgMADgQAAQgZABgTgLgALzBPQgQgSAAgiIAAhgQAAgGAEgFQAEgEAHAAQAHAAADAEQAEAEAAAHIAABgQAAAXAKALQAJALAUAAQAXAAAOgOQAOgPAAgZIAAhXQAAgGAEgFQAEgEAHAAQAHAAAEAEQAEAFAAAGIAACXQAAAGgEAEQgEAEgH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g7CWQgDAFgEADQgDACgGAAQgFAAgEgCgA1CBdQgEgDgCgFIgyh9IgxB9QgCAEgEAEQgEACgGAAQgFAAgEgCQgEgEgCgEIg8iWIgBgFQAAgFAFgFQAFgEAGAAQAIABAEAIIAxCEIAziDQACgFAEgCQAEgCAEgBQAEABAEACQAEACACAFIAzCDIAxiEQAEgIAIAAQAGAAAEADQAEAFAAAEIgBAGIg7CWQgCAEgFAEQgDACgGAAQgGAAgDgCgA5xBdQgEgDgCgFIgyh9IgxB9QgCAEgEAEQgEACgGAAQgFAAgEgCQgEgEgCgEIg8iWIgBgFQAAgFAFgFQAFgEAGAAQAIABAEAIIAxCEIAziDQACgFAEgCQAEgCAEgBQAEABAEACQAEACACAFIAzCDIAxiEQAEgIAIAAQAGAAAEADQAEAFAAAEIgBAGIg7CWQgCAEgFAEQgDACgGAAQgGAAgDgCgAi7h/QgGgFAAgIQAAgHAGgGQAFgFAJAAQAJAAAFAFQAFAFAAAIQAAAJgFAEQgGAGgIAAQgIAAgGgGgAnIh/QgFgFAAgIQAAgHAFgGQAFgFAJAAQAJAAAFAFQAGAGAAAHQAAAIgGAFQgGAGgIAAQgIAAgGgGg"), this.shape.setTransform(184.7, 16.2), this.timeline.addTween(A.Tween.get(this.shape).wait(1))
	}).prototype = l(t.www, new A.Rectangle(0, 0, 369.4, 32.3), null), (t.World = function (t, e, i) {
		this.initialize(t, e, i, {}), this.shape = new A.Shape, this.shape.graphics.f("#8EC640").s().p("Ah4B5QgygyAAhHQAAhGAygyQAygyBGAAQBHAAAyAyQAyAyAABGQAABHgyAyQgyAyhHAAQhGAAgygyg"), this.shape.setTransform(273.7, 162.3), this.shape_1 = new A.Shape, this.shape_1.graphics.f("#FFFFFF").s().p("AwSPMQi6ixAAkDQAAkGC6ivQC5iuERAAQESAAC5CuQC4CvAAEGQAAEFi4CwQi5CxkSAAQkQAAi6iygAtmD4Qh5B0AACsQAACpB6B4QB5B2CoAAQCnAAB2h2QB3h3AAiqQAAish3h0Qh1h0ioAAQirAAh3B0gEAgqAR3IAAy/IKHAAQEVAACyCqQCyCrAAELQAAEIizCrQi0CskZAAgEAkTAOnIGmAAQCoAABuhvQBvhwAAiwQAAixhyhyQhwhyirABImeAAgA7xR2IkOuOIkROOIjwAAImQy8IAAAAIion6QhZgOhEhDQhUhVAAh3QAAh3BUhUQBUhVB3AAQB3AABVBVQBUBUAAB3QAAB3hUBVIgMAKIHCX6IEVu5IDlAAIEYO5IEVu5IDwAAImQS8gEgxzgPGQgsAsAAA9QAAA9AsAsQAsAsA9AAQA9AAAsgsQAsgsAAg9QAAg9gsgsQgsgsg9AAQg9AAgsAsgATLR0IAAy8IDmAAIAAPoIILAAIAADUgAOSR0IjTllIk8AAIAAFlIjpAAIAAy8IH6AAQDrABCABrQCABtAADJQAACPg+BkQg9Blh1AxIEJGRgAGDJDIERAAQCEAABEg4QBFg4AAhyQAAhuhHg4QhEg3iCAAIkRAAg"), this.shape_1.setTransform(332.1, 108.1), this.timeline.addTween(A.Tween.get({}).to({state: [{t: this.shape_1}, {t: this.shape}]}).wait(1))
	}).prototype = l(t.World, new A.Rectangle(-4.9, -6.9, 674.1, 230), null), (t.THE = function (t, e, i) {
		this.initialize(t, e, i, {}), this.shape = new A.Shape, this.shape.graphics.f("#FFFFFF").s().p("ABdCzIi1j0IAAD0IhGAAIAAllIBCAAIC5D0IAAj0IBBAAIAAFlg"), this.shape.setTransform(66, -23.2), this.shape_1 = new A.Shape, this.shape_1.graphics.f("#FFFFFF").s().p("AiGCCQg2g0gBhOQABhNA2g0QA3g1BPAAQBQAAA2A1QA3A0AABNQAABOg3A0Qg2A1hQAAQhPAAg3g1gAhThUQgkAkACAwQAAAzAlAjQAjAjAwAAQAyAAAkgjQAjgjAAgzQAAgygjgjQgkgigyAAQgyAAgkAjg"), this.shape_1.setTransform(25, -23.2), this.shape_2 = new A.Shape, this.shape_2.graphics.f("#FFFFFF").s().p("AiXDPIAAmdIC9AAIAVA+IiNAAIAAByIC2AAIAVA9IjLAAIAAByIDqAAIAAA+g"), this.shape_2.setTransform(99.1, 23.3), this.shape_3 = new A.Shape, this.shape_3.graphics.f("#FFFFFF").s().p("ABuDPIAAisIjbAAIAACsIhFAAIAAmdIBFAAIAAC0IDbAAIAAi0IBFAAIAAGdg"), this.shape_3.setTransform(60.8, 23.3), this.shape_4 = new A.Shape, this.shape_4.graphics.f("#FFFFFF").s().p("AgjDPIAAlfIiDAAIAAg+IFNAAIAAA+IiGAAIAAFfg"), this.shape_4.setTransform(22.8, 23.3), this.timeline.addTween(A.Tween.get({}).to({state: [{t: this.shape_4}, {t: this.shape_3}, {t: this.shape_2}, {t: this.shape_1}, {t: this.shape}]}).wait(1))
	}).prototype = l(t.THE, new A.Rectangle(6.1, -41.4, 108.2, 85.5), null), (t.Positive = function (t, e, i) {
		this.initialize(t, e, i, {}), this.shape = new A.Shape, this.shape.graphics.f("#8EC640").s().p("AjCECIAAoDIF6AAIAABVIkWAAIAACAID7AAIAABVIj7AAIAACEIEhAAIAABVg"), this.shape.setTransform(319.5, 41.2), this.shape_1 = new A.Shape, this.shape_1.graphics.f("#8EC640").s().p("AgyECIjPoDIBrAAICWGVICbmVIBnAAIjSIDg"), this.shape_1.setTransform(267.7, 41.2), this.shape_2 = new A.Shape, this.shape_2.graphics.f("#8EC640").s().p("AgxECIAAoDIBjAAIAAIDg"), this.shape_2.setTransform(230.3, 41.2), this.shape_3 = new A.Shape, this.shape_3.graphics.f("#8EC640").s().p("AgxECIAAmqIiiAAIAAhZIGnAAIAABZIiiAAIAAGqg"), this.shape_3.setTransform(197.2, 41.2), this.shape_4 = new A.Shape, this.shape_4.graphics.f("#8EC640").s().p("AgxECIAAoDIBjAAIAAIDg"), this.shape_4.setTransform(164.1, 41.2), this.shape_5 = new A.Shape, this.shape_5.graphics.f("#8EC640").s().p("AhtDwQg6gWgqglIAphTQAmAjAyAVQAxAUApAAQAqAAAYgPQAYgQAAgcQAAgigrgVQgMgFhTgbQhCgUgfgYQgrglAAg+QAAhDA0goQA1gpBXAAQAxAAA0AQQAvAPAmAYIgpBXQgpgZgqgOQgogNggAAQgiAAgUAMQgVANAAAXQAAAjArAVQAKAEBWAcQBBAVAgAaQAsAmABBAQAABGg5AqQg3AohYAAQg7AAg8gYg"), this.shape_5.setTransform(129.1, 41.3), this.shape_6 = new A.Shape, this.shape_6.graphics.f("#8EC640").s().p("AjDC6QhQhLAAhvQAAhuBQhLQBQhMBzAAQB1AABPBMQBQBLAABuQAABvhQBLQhPBMh1AAQhzAAhQhMgAh7h6Qg0AzAABHQAABLA0AzQAzAxBIAAQBJAAAzgxQAzg0gChKQAAhHg0gzQgygyhHAAQhHAAg0Ayg"), this.shape_6.setTransform(76.3, 41.2), this.shape_7 = new A.Shape, this.shape_7.graphics.f("#8EC640").s().p("AjRECIAAoDIDUAAQBjAAA2AuQA2AvAABWQAABWg2AyQg3AxhiAAIhxAAIAACXgAhqAVIBqAAQBwgBAFhiQAAgugggYQgegYg3AAIhqAAg"), this.shape_7.setTransform(23.6, 41.2), this.timeline.addTween(A.Tween.get({}).to({state: [{t: this.shape_7}, {t: this.shape_6}, {t: this.shape_5}, {t: this.shape_4}, {t: this.shape_3}, {t: this.shape_2}, {t: this.shape_1}, {t: this.shape}]}).wait(1))
	}).prototype = l(t.Positive, new A.Rectangle(2.6, 15, 336.4, 52.8), null), (t.Make = function (t, e, i) {
		this.initialize(t, e, i, {}), this.shape = new A.Shape, this.shape.graphics.f("#8EC640").s().p("AjCEDIAAoFIF6AAIAABXIkWAAIAAB/ID7AAIAABVIj7AAIAACDIEhAAIAABXg"), this.shape.setTransform(198, 41.6), this.shape_1 = new A.Shape, this.shape_1.graphics.f("#8EC640").s().p("AByEDIihjdIhTBdIAACAIhkAAIAAoFIBkAAIAAD8IDqj8IBxAAIjEDdIDSEog"), this.shape_1.setTransform(147.8, 41.6), this.shape_2 = new A.Shape, this.shape_2.graphics.f("#8EC640").s().p("ACpEDIgthvIj6AAIgtBvIhoAAIDkoFIBmAAIDdIFgABaBCIhajZIhcDZIC2AAg"), this.shape_2.setTransform(90.6, 41.6), this.shape_3 = new A.Shape, this.shape_3.graphics.f("#8EC640").s().p("AC6EDIAAlwIibE8Ig9AAIibk8IAAFwIhaAAIAAoFIByAAIChFKICilKIByAAIAAIFg"), this.shape_3.setTransform(28.9, 41.6), this.timeline.addTween(A.Tween.get({}).to({state: [{t: this.shape_3}, {t: this.shape_2}, {t: this.shape_1}, {t: this.shape}]}).wait(1))
	}).prototype = l(t.Make, new A.Rectangle(1.3, 15.7, 216.2, 51.8), null), (t.Impacts = function (t, e, i) {
		this.initialize(t, e, i, {}), this.shape = new A.Shape, this.shape.graphics.f("#8EC640").s().p("AhvEAQg7gUgpgkIAphTQAhAeA0ATQAxARAtAAQApAAAXgOQAZgPAAgeQAAgkgsgWQgKgFhWgcQhCgWgfgbQgsgnAAhBQAAhLA9gqQA3gmBSAAQA0AAAzAPQAzAPAkAaIgpBWQgkgXgqgNQgpgNgkAAQgjAAgVAOQgXAOAAAcQAAAgAtAVIBhAhQBCAWAfAcQAsApgBBCQAABOhAArQg4AmhXAAQg7AAg5gUg"), this.shape.setTransform(288.3, 40.5), this.shape_1 = new A.Shape, this.shape_1.graphics.f("#8EC640").s().p("AgzEKIAAm5IilAAIAAhZIGxAAIAABZIilAAIAAG5g"), this.shape_1.setTransform(241.2, 40.6), this.shape_2 = new A.Shape, this.shape_2.graphics.f("#8EC640").s().p("AikDAQhQhOAAhyQAAhzBShNQBShOB2ABQA6gBA4AYQA1AXAoAnIg7BNQgdgggmgTQgogSgmgBQhKAAg0AzQg0AzAABLQAABJA0AzQA0AyBKAAQAmAAAmgRQAkgOAegbIA6BBQgpAqg4AXQg5AZg4AAQh0AAhPhPg"), this.shape_2.setTransform(193, 40.7), this.shape_3 = new A.Shape, this.shape_3.graphics.f("#8EC640").s().p("ACwEKIgwhyIkCAAIgwByIhrAAIDqoSIBqAAIDnISgABaBBIhdjeIhdDeIC6AAg"), this.shape_3.setTransform(145.4, 40.6), this.shape_4 = new A.Shape, this.shape_4.graphics.f("#8EC640").s().p("AjUEKIAAoSIDXAAQBlAAA3AvQA2AwAABXQAABag2AzQg2AzhiAAIh1AAIAACcgAhxAUIBuAAQA5AAAfgYQAggaAAgxQAAgwgggZQgegXg6AAIhuAAg"), this.shape_4.setTransform(103.4, 40.6), this.shape_5 = new A.Shape, this.shape_5.graphics.f("#8EC640").s().p("AC/EKIAAl7IifFDIhAAAIiflDIAAF7IhdAAIAAoSIB2AAICoFUICllUIB1AAIAAISg"), this.shape_5.setTransform(46.3, 40.6), this.shape_6 = new A.Shape, this.shape_6.graphics.f("#8EC640").s().p("AgzEKIAAoSIBmAAIAAISg"), this.shape_6.setTransform(5.8, 40.6), this.timeline.addTween(A.Tween.get({}).to({state: [{t: this.shape_6}, {t: this.shape_5}, {t: this.shape_4}, {t: this.shape_3}, {t: this.shape_2}, {t: this.shape_1}, {t: this.shape}]}).wait(1))
	}).prototype = l(t.Impacts, new A.Rectangle(.7, 13, 308.8, 55.1), null), (t.CircuitMaskTween = function (t, e, i) {
		this.initialize(t, e, i, {}), this.shape = new A.Shape, this.shape.graphics.lf(["rgba(142,198,64,0)", "rgba(142,198,64,0.8)", "rgba(142,198,64,0)"], [0, .498, 1], -686.6, 0, 686.6, 0).s().p("EhrRBAnMAAAiBOMDWjAAAMAAACBOg"), this.timeline.addTween(A.Tween.get(this.shape).wait(1))
	}).prototype = a = new A.MovieClip, a.nominalBounds = new A.Rectangle(-686.6, -413.5, 1373.2, 827.1), (t.BGCC2Static = function (e, i, n) {
		this.initialize(e, i, n, {}), this.instance = new t.Circuit2Static1, this.instance.parent = this, this.instance.setTransform(-533, -359), this.timeline.addTween(A.Tween.get(this.instance).wait(1))
	}).prototype = l(t.BGCC2Static, new A.Rectangle(-533, -359, 1065, 718), null), (t.BGCC1Static = function (e, i, n) {
		this.initialize(e, i, n, {}), this.instance = new t.Circuit1Static1, this.instance.parent = this, this.instance.setTransform(-229, -348), this.timeline.addTween(A.Tween.get(this.instance).wait(1))
	}).prototype = l(t.BGCC1Static, new A.Rectangle(-229, -348, 447, 710), null), (t.BGDotsGradTween = function (t, e, i) {
		this.initialize(t, e, i, {}), this.shape = new A.Shape, this.shape.graphics.lf(["rgba(210,255,140,0)", "rgba(210,255,140,0.929)", "rgba(210,255,140,0)"], [0, .502, 1], -227, 0, 227.1, 0).s().p("EgjdALtIAA3ZMBG7AAAIAAXZg"), this.timeline.addTween(A.Tween.get(this.shape).wait(1))
	}).prototype = a = new A.MovieClip, a.nominalBounds = new A.Rectangle(-227, -74.9, 454.1, 149.9), (t.BGArrow = function (e, i, n) {
		this.initialize(e, i, n, {}), this.instance = new t.arrow, this.instance.parent = this, this.instance.setTransform(13.5, -21.5, 1, 1, 0, 0, 180), this.timeline.addTween(A.Tween.get(this.instance).wait(1))
	}).prototype = l(t.BGArrow, new A.Rectangle(-13.5, -21.5, 27, 43), null), (t.WheelStrokeMotion360 = function (e, i, n) {
		this.initialize(e, i, n, {}), this.instance = new t.Stroke, this.instance.parent = this, this.timeline.addTween(A.Tween.get(this.instance).wait(1).to({rotation: 3.6}, 0).wait(1).to({rotation: 7.3}, 0).wait(1).to({rotation: 10.9}, 0).wait(1).to({rotation: 14.5}, 0).wait(1).to({rotation: 18.2}, 0).wait(1).to({rotation: 21.8}, 0).wait(1).to({rotation: 25.5}, 0).wait(1).to({rotation: 29.1}, 0).wait(1).to({rotation: 32.7}, 0).wait(1).to({rotation: 36.4}, 0).wait(1).to({rotation: 40}, 0).wait(1).to({rotation: 43.6}, 0).wait(1).to({rotation: 47.3}, 0).wait(1).to({rotation: 50.9}, 0).wait(1).to({rotation: 54.5}, 0).wait(1).to({rotation: 58.2}, 0).wait(1).to({rotation: 61.8}, 0).wait(1).to({rotation: 65.5}, 0).wait(1).to({rotation: 69.1}, 0).wait(1).to({rotation: 72.7}, 0).wait(1).to({rotation: 76.4}, 0).wait(1).to({rotation: 80}, 0).wait(1).to({rotation: 83.6}, 0).wait(1).to({rotation: 87.3}, 0).wait(1).to({rotation: 90.9}, 0).wait(1).to({rotation: 94.5}, 0).wait(1).to({rotation: 98.2}, 0).wait(1).to({rotation: 101.8}, 0).wait(1).to({rotation: 105.5}, 0).wait(1).to({rotation: 109.1}, 0).wait(1).to({rotation: 112.7}, 0).wait(1).to({rotation: 116.4}, 0).wait(1).to({rotation: 120}, 0).wait(1).to({rotation: 123.6}, 0).wait(1).to({rotation: 127.3}, 0).wait(1).to({rotation: 130.9}, 0).wait(1).to({rotation: 134.5}, 0).wait(1).to({rotation: 138.2}, 0).wait(1).to({rotation: 141.8}, 0).wait(1).to({rotation: 145.5}, 0).wait(1).to({rotation: 149.1}, 0).wait(1).to({rotation: 152.7}, 0).wait(1).to({rotation: 156.4}, 0).wait(1).to({rotation: 160}, 0).wait(1).to({rotation: 163.6}, 0).wait(1).to({rotation: 167.3}, 0).wait(1).to({rotation: 170.9}, 0).wait(1).to({rotation: 174.5}, 0).wait(1).to({rotation: 178.2}, 0).wait(1).to({rotation: 181.8}, 0).wait(1).to({rotation: 185.5}, 0).wait(1).to({rotation: 189.1}, 0).wait(1).to({rotation: 192.7}, 0).wait(1).to({rotation: 196.4}, 0).wait(1).to({rotation: 200}, 0).wait(1).to({rotation: 203.6}, 0).wait(1).to({rotation: 207.3}, 0).wait(1).to({rotation: 210.9}, 0).wait(1).to({rotation: 214.5}, 0).wait(1).to({rotation: 218.2}, 0).wait(1).to({rotation: 221.8}, 0).wait(1).to({rotation: 225.5}, 0).wait(1).to({rotation: 229.1}, 0).wait(1).to({rotation: 232.7}, 0).wait(1).to({rotation: 236.4}, 0).wait(1).to({rotation: 240}, 0).wait(1).to({rotation: 243.6}, 0).wait(1).to({rotation: 247.3}, 0).wait(1).to({rotation: 250.9}, 0).wait(1).to({rotation: 254.5}, 0).wait(1).to({rotation: 258.2}, 0).wait(1).to({rotation: 261.8}, 0).wait(1).to({rotation: 265.5}, 0).wait(1).to({rotation: 269.1}, 0).wait(1).to({rotation: 272.7}, 0).wait(1).to({rotation: 276.4}, 0).wait(1).to({rotation: 280}, 0).wait(1).to({rotation: 283.6}, 0).wait(1).to({rotation: 287.3}, 0).wait(1).to({rotation: 290.9}, 0).wait(1).to({rotation: 294.5}, 0).wait(1).to({rotation: 298.2}, 0).wait(1).to({rotation: 301.8}, 0).wait(1).to({rotation: 305.5}, 0).wait(1).to({rotation: 309.1}, 0).wait(1).to({rotation: 312.7}, 0).wait(1).to({rotation: 316.4}, 0).wait(1).to({rotation: 320}, 0).wait(1).to({rotation: 323.6}, 0).wait(1).to({rotation: 327.3}, 0).wait(1).to({rotation: 330.9}, 0).wait(1).to({rotation: 334.5}, 0).wait(1).to({rotation: 338.2}, 0).wait(1).to({rotation: 341.8}, 0).wait(1).to({rotation: 345.5}, 0).wait(1).to({rotation: 349.1}, 0).wait(1).to({rotation: 352.7}, 0).wait(1).to({rotation: 356.4}, 0).wait(1).to({rotation: 360}, 0).wait(1))
	}).prototype = a = new A.MovieClip, a.nominalBounds = new A.Rectangle(-201.5, -201, 403, 402), (t.WheelShapesBMotion15 = function (e, i, n) {
		this.initialize(e, i, n, {}), this.instance = new t.ShapesB, this.instance.parent = this, this.timeline.addTween(A.Tween.get(this.instance).wait(1).to({rotation: -.3}, 0).wait(1).to({rotation: -.6}, 0).wait(1).to({rotation: -.9}, 0).wait(1).to({rotation: -1.2}, 0).wait(1).to({rotation: -1.5}, 0).wait(1).to({rotation: -1.8}, 0).wait(1).to({rotation: -2.1}, 0).wait(1).to({rotation: -2.4}, 0).wait(1).to({rotation: -2.8}, 0).wait(1).to({rotation: -3.1}, 0).wait(1).to({rotation: -3.4}, 0).wait(1).to({rotation: -3.7}, 0).wait(1).to({rotation: -4}, 0).wait(1).to({rotation: -4.3}, 0).wait(1).to({rotation: -4.6}, 0).wait(1).to({rotation: -4.9}, 0).wait(1).to({rotation: -5.2}, 0).wait(1).to({rotation: -5.5}, 0).wait(1).to({rotation: -5.8}, 0).wait(1).to({rotation: -6.1}, 0).wait(1).to({rotation: -6.4}, 0).wait(1).to({rotation: -6.7}, 0).wait(1).to({rotation: -7}, 0).wait(1).to({rotation: -7.3}, 0).wait(1).to({rotation: -7.7}, 0).wait(1).to({rotation: -8}, 0).wait(1).to({rotation: -8.3}, 0).wait(1).to({rotation: -8.6}, 0).wait(1).to({rotation: -8.9}, 0).wait(1).to({rotation: -9.2}, 0).wait(1).to({rotation: -9.5}, 0).wait(1).to({rotation: -9.8}, 0).wait(1).to({rotation: -10.1}, 0).wait(1).to({rotation: -10.4}, 0).wait(1).to({rotation: -10.7}, 0).wait(1).to({rotation: -11}, 0).wait(1).to({rotation: -11.3}, 0).wait(1).to({rotation: -11.6}, 0).wait(1).to({rotation: -11.9}, 0).wait(1).to({rotation: -12.2}, 0).wait(1).to({rotation: -12.6}, 0).wait(1).to({rotation: -12.9}, 0).wait(1).to({rotation: -13.2}, 0).wait(1).to({rotation: -13.5}, 0).wait(1).to({rotation: -13.8}, 0).wait(1).to({rotation: -14.1}, 0).wait(1).to({rotation: -14.4}, 0).wait(1).to({rotation: -14.7}, 0).wait(1).to({rotation: -15}, 0).wait(1).to({rotation: -14.7}, 0).wait(1).to({rotation: -14.4}, 0).wait(1).to({rotation: -14.1}, 0).wait(1).to({rotation: -13.8}, 0).wait(1).to({rotation: -13.5}, 0).wait(1).to({rotation: -13.2}, 0).wait(1).to({rotation: -12.9}, 0).wait(1).to({rotation: -12.6}, 0).wait(1).to({rotation: -12.3}, 0).wait(1).to({rotation: -12}, 0).wait(1).to({rotation: -11.7}, 0).wait(1).to({rotation: -11.4}, 0).wait(1).to({rotation: -11.1}, 0).wait(1).to({rotation: -10.8}, 0).wait(1).to({rotation: -10.5}, 0).wait(1).to({rotation: -10.2}, 0).wait(1).to({rotation: -9.9}, 0).wait(1).to({rotation: -9.6}, 0).wait(1).to({rotation: -9.3}, 0).wait(1).to({rotation: -9}, 0).wait(1).to({rotation: -8.7}, 0).wait(1).to({rotation: -8.4}, 0).wait(1).to({rotation: -8.1}, 0).wait(1).to({rotation: -7.8}, 0).wait(1).to({rotation: -7.5}, 0).wait(1).to({rotation: -7.2}, 0).wait(1).to({rotation: -6.9}, 0).wait(1).to({rotation: -6.6}, 0).wait(1).to({rotation: -6.3}, 0).wait(1).to({rotation: -6}, 0).wait(1).to({rotation: -5.7}, 0).wait(1).to({rotation: -5.4}, 0).wait(1).to({rotation: -5.1}, 0).wait(1).to({rotation: -4.8}, 0).wait(1).to({rotation: -4.5}, 0).wait(1).to({rotation: -4.2}, 0).wait(1).to({rotation: -3.9}, 0).wait(1).to({rotation: -3.6}, 0).wait(1).to({rotation: -3.3}, 0).wait(1).to({rotation: -3}, 0).wait(1).to({rotation: -2.7}, 0).wait(1).to({rotation: -2.4}, 0).wait(1).to({rotation: -2.1}, 0).wait(1).to({rotation: -1.8}, 0).wait(1).to({rotation: -1.5}, 0).wait(1).to({rotation: -1.2}, 0).wait(1).to({rotation: -.9}, 0).wait(1).to({rotation: -.6}, 0).wait(1).to({rotation: -.3}, 0).wait(1).to({rotation: 0}, 0).wait(1))
	}).prototype = a = new A.MovieClip, a.nominalBounds = new A.Rectangle(-291, -271.5, 582, 543), (t.WheelShapesAMotion88 = function (e, i, n) {
		this.initialize(e, i, n, {}), this.instance = new t.ShapesA, this.instance.parent = this, this.timeline.addTween(A.Tween.get(this.instance).wait(1).to({rotation: .3}, 0).wait(1).to({rotation: .7}, 0).wait(1).to({rotation: 1}, 0).wait(1).to({rotation: 1.4}, 0).wait(1).to({rotation: 1.7}, 0).wait(1).to({rotation: 2.1}, 0).wait(1).to({rotation: 2.4}, 0).wait(1).to({rotation: 2.8}, 0).wait(1).to({rotation: 3.1}, 0).wait(1).to({rotation: 3.5}, 0).wait(1).to({rotation: 3.8}, 0).wait(1).to({rotation: 4.2}, 0).wait(1).to({rotation: 4.5}, 0).wait(1).to({rotation: 4.9}, 0).wait(1).to({rotation: 5.2}, 0).wait(1).to({rotation: 5.6}, 0).wait(1).to({rotation: 5.9}, 0).wait(1).to({rotation: 6.3}, 0).wait(1).to({rotation: 6.6}, 0).wait(1).to({rotation: 7}, 0).wait(1).to({rotation: 7.3}, 0).wait(1).to({rotation: 7.7}, 0).wait(1).to({rotation: 8}, 0).wait(1).to({
			rotation: 7.7,
			alpha: .971
		}, 0).wait(1).to({rotation: 7.3, alpha: .942}, 0).wait(1).to({
			rotation: 7,
			alpha: .913
		}, 0).wait(1).to({rotation: 6.7, alpha: .883}, 0).wait(1).to({
			rotation: 6.3,
			alpha: .854
		}, 0).wait(1).to({rotation: 6, alpha: .825}, 0).wait(1).to({
			rotation: 5.7,
			alpha: .796
		}, 0).wait(1).to({rotation: 5.3, alpha: .767}, 0).wait(1).to({
			rotation: 5,
			alpha: .738
		}, 0).wait(1).to({rotation: 4.7, alpha: .708}, 0).wait(1).to({
			rotation: 4.3,
			alpha: .679
		}, 0).wait(1).to({rotation: 4, alpha: .65}, 0).wait(1).to({
			rotation: 3.7,
			alpha: .621
		}, 0).wait(1).to({rotation: 3.3, alpha: .592}, 0).wait(1).to({
			rotation: 3,
			alpha: .563
		}, 0).wait(1).to({rotation: 2.7, alpha: .533}, 0).wait(1).to({
			rotation: 2.3,
			alpha: .504
		}, 0).wait(1).to({rotation: 2, alpha: .475}, 0).wait(1).to({
			rotation: 1.7,
			alpha: .446
		}, 0).wait(1).to({rotation: 1.3, alpha: .417}, 0).wait(1).to({
			rotation: 1,
			alpha: .387
		}, 0).wait(1).to({rotation: .7, alpha: .358}, 0).wait(1).to({
			rotation: .3,
			alpha: .329
		}, 0).wait(1).to({rotation: 0, alpha: .3}, 0).wait(1).to({
			rotation: -.3,
			alpha: .329
		}, 0).wait(1).to({rotation: -.7, alpha: .358}, 0).wait(1).to({
			rotation: -1,
			alpha: .387
		}, 0).wait(1).to({rotation: -1.3, alpha: .417}, 0).wait(1).to({
			rotation: -1.7,
			alpha: .446
		}, 0).wait(1).to({rotation: -2, alpha: .475}, 0).wait(1).to({
			rotation: -2.3,
			alpha: .504
		}, 0).wait(1).to({rotation: -2.7, alpha: .533}, 0).wait(1).to({
			rotation: -3,
			alpha: .563
		}, 0).wait(1).to({rotation: -3.3, alpha: .592}, 0).wait(1).to({
			rotation: -3.7,
			alpha: .621
		}, 0).wait(1).to({rotation: -4, alpha: .65}, 0).wait(1).to({
			rotation: -4.3,
			alpha: .679
		}, 0).wait(1).to({rotation: -4.7, alpha: .708}, 0).wait(1).to({
			rotation: -5,
			alpha: .738
		}, 0).wait(1).to({rotation: -5.3, alpha: .767}, 0).wait(1).to({
			rotation: -5.7,
			alpha: .796
		}, 0).wait(1).to({rotation: -6, alpha: .825}, 0).wait(1).to({
			rotation: -6.3,
			alpha: .854
		}, 0).wait(1).to({rotation: -6.7, alpha: .883}, 0).wait(1).to({
			rotation: -7,
			alpha: .913
		}, 0).wait(1).to({rotation: -7.3, alpha: .942}, 0).wait(1).to({
			rotation: -7.7,
			alpha: .971
		}, 0).wait(1).to({
			rotation: -8,
			alpha: 1
		}, 0).wait(1).to({rotation: -7.7}, 0).wait(1).to({rotation: -7.3}, 0).wait(1).to({rotation: -7}, 0).wait(1).to({rotation: -6.7}, 0).wait(1).to({rotation: -6.3}, 0).wait(1).to({rotation: -6}, 0).wait(1).to({rotation: -5.7}, 0).wait(1).to({rotation: -5.3}, 0).wait(1).to({rotation: -5}, 0).wait(1).to({rotation: -4.7}, 0).wait(1).to({rotation: -4.3}, 0).wait(1).to({rotation: -4}, 0).wait(1).to({rotation: -3.7}, 0).wait(1).to({rotation: -3.3}, 0).wait(1).to({rotation: -3}, 0).wait(1).to({rotation: -2.7}, 0).wait(1).to({rotation: -2.3}, 0).wait(1).to({rotation: -2}, 0).wait(1).to({rotation: -1.7}, 0).wait(1).to({rotation: -1.3}, 0).wait(1).to({rotation: -1}, 0).wait(1).to({rotation: -.7}, 0).wait(1).to({rotation: -.3}, 0).wait(1).to({rotation: 0}, 0).wait(35))
	}).prototype = a = new A.MovieClip, a.nominalBounds = new A.Rectangle(-240, -264.5, 480, 529), (t.WheelRayMotion15 = function (e, i, n) {
		this.initialize(e, i, n, {}), this.instance = new t.Rays, this.instance.parent = this, this.timeline.addTween(A.Tween.get(this.instance).wait(1).to({rotation: -.3}, 0).wait(1).to({rotation: -.6}, 0).wait(1).to({rotation: -.9}, 0).wait(1).to({rotation: -1.2}, 0).wait(1).to({rotation: -1.5}, 0).wait(1).to({rotation: -1.8}, 0).wait(1).to({rotation: -2.1}, 0).wait(1).to({rotation: -2.4}, 0).wait(1).to({rotation: -2.8}, 0).wait(1).to({rotation: -3.1}, 0).wait(1).to({rotation: -3.4}, 0).wait(1).to({rotation: -3.7}, 0).wait(1).to({rotation: -4}, 0).wait(1).to({rotation: -4.3}, 0).wait(1).to({rotation: -4.6}, 0).wait(1).to({rotation: -4.9}, 0).wait(1).to({rotation: -5.2}, 0).wait(1).to({rotation: -5.5}, 0).wait(1).to({rotation: -5.8}, 0).wait(1).to({rotation: -6.1}, 0).wait(1).to({rotation: -6.4}, 0).wait(1).to({rotation: -6.7}, 0).wait(1).to({rotation: -7}, 0).wait(1).to({rotation: -7.3}, 0).wait(1).to({rotation: -7.7}, 0).wait(1).to({rotation: -8}, 0).wait(1).to({rotation: -8.3}, 0).wait(1).to({rotation: -8.6}, 0).wait(1).to({rotation: -8.9}, 0).wait(1).to({rotation: -9.2}, 0).wait(1).to({rotation: -9.5}, 0).wait(1).to({rotation: -9.8}, 0).wait(1).to({rotation: -10.1}, 0).wait(1).to({rotation: -10.4}, 0).wait(1).to({rotation: -10.7}, 0).wait(1).to({rotation: -11}, 0).wait(1).to({rotation: -11.3}, 0).wait(1).to({rotation: -11.6}, 0).wait(1).to({rotation: -11.9}, 0).wait(1).to({rotation: -12.2}, 0).wait(1).to({rotation: -12.6}, 0).wait(1).to({rotation: -12.9}, 0).wait(1).to({rotation: -13.2}, 0).wait(1).to({rotation: -13.5}, 0).wait(1).to({rotation: -13.8}, 0).wait(1).to({rotation: -14.1}, 0).wait(1).to({rotation: -14.4}, 0).wait(1).to({rotation: -14.7}, 0).wait(1).to({rotation: -15}, 0).wait(1).to({rotation: -14.7}, 0).wait(1).to({rotation: -14.4}, 0).wait(1).to({rotation: -14.1}, 0).wait(1).to({rotation: -13.8}, 0).wait(1).to({rotation: -13.5}, 0).wait(1).to({rotation: -13.2}, 0).wait(1).to({rotation: -12.9}, 0).wait(1).to({rotation: -12.6}, 0).wait(1).to({rotation: -12.3}, 0).wait(1).to({rotation: -12}, 0).wait(1).to({rotation: -11.7}, 0).wait(1).to({rotation: -11.4}, 0).wait(1).to({rotation: -11.1}, 0).wait(1).to({rotation: -10.8}, 0).wait(1).to({rotation: -10.5}, 0).wait(1).to({rotation: -10.2}, 0).wait(1).to({rotation: -9.9}, 0).wait(1).to({rotation: -9.6}, 0).wait(1).to({rotation: -9.3}, 0).wait(1).to({rotation: -9}, 0).wait(1).to({rotation: -8.7}, 0).wait(1).to({rotation: -8.4}, 0).wait(1).to({rotation: -8.1}, 0).wait(1).to({rotation: -7.8}, 0).wait(1).to({rotation: -7.5}, 0).wait(1).to({rotation: -7.2}, 0).wait(1).to({rotation: -6.9}, 0).wait(1).to({rotation: -6.6}, 0).wait(1).to({rotation: -6.3}, 0).wait(1).to({rotation: -6}, 0).wait(1).to({rotation: -5.7}, 0).wait(1).to({rotation: -5.4}, 0).wait(1).to({rotation: -5.1}, 0).wait(1).to({rotation: -4.8}, 0).wait(1).to({rotation: -4.5}, 0).wait(1).to({rotation: -4.2}, 0).wait(1).to({rotation: -3.9}, 0).wait(1).to({rotation: -3.6}, 0).wait(1).to({rotation: -3.3}, 0).wait(1).to({rotation: -3}, 0).wait(1).to({rotation: -2.7}, 0).wait(1).to({rotation: -2.4}, 0).wait(1).to({rotation: -2.1}, 0).wait(1).to({rotation: -1.8}, 0).wait(1).to({rotation: -1.5}, 0).wait(1).to({rotation: -1.2}, 0).wait(1).to({rotation: -.9}, 0).wait(1).to({rotation: -.6}, 0).wait(1).to({rotation: -.3}, 0).wait(1).to({rotation: 0}, 0).wait(1))
	}).prototype = a = new A.MovieClip, a.nominalBounds = new A.Rectangle(-293.5, -257.5, 587, 515), (t.WheelFlatMotion6 = function (e, i, n) {
		this.initialize(e, i, n, {}), this.instance = new t.Flat, this.instance.parent = this, this.timeline.addTween(A.Tween.get(this.instance).wait(1).to({rotation: .2}, 0).wait(1).to({rotation: .3}, 0).wait(1).to({rotation: .5}, 0).wait(1).to({rotation: .7}, 0).wait(1).to({rotation: .9}, 0).wait(1).to({rotation: 1}, 0).wait(1).to({rotation: 1.2}, 0).wait(1).to({rotation: 1.4}, 0).wait(1).to({rotation: 1.5}, 0).wait(1).to({rotation: 1.7}, 0).wait(1).to({rotation: 1.9}, 0).wait(1).to({rotation: 2.1}, 0).wait(1).to({rotation: 2.2}, 0).wait(1).to({rotation: 2.4}, 0).wait(1).to({rotation: 2.6}, 0).wait(1).to({rotation: 2.7}, 0).wait(1).to({rotation: 2.9}, 0).wait(1).to({rotation: 3.1}, 0).wait(1).to({rotation: 3.3}, 0).wait(1).to({rotation: 3.4}, 0).wait(1).to({rotation: 3.6}, 0).wait(1).to({rotation: 3.8}, 0).wait(1).to({rotation: 3.9}, 0).wait(1).to({rotation: 4.1}, 0).wait(1).to({rotation: 4.3}, 0).wait(1).to({rotation: 4.5}, 0).wait(1).to({rotation: 4.6}, 0).wait(1).to({rotation: 4.8}, 0).wait(1).to({rotation: 5}, 0).wait(1).to({rotation: 5.1}, 0).wait(1).to({rotation: 5.3}, 0).wait(1).to({rotation: 5.5}, 0).wait(1).to({rotation: 5.7}, 0).wait(1).to({rotation: 5.8}, 0).wait(1).to({rotation: 6}, 0).wait(1).to({rotation: 5.8}, 0).wait(1).to({rotation: 5.7}, 0).wait(1).to({rotation: 5.5}, 0).wait(1).to({rotation: 5.3}, 0).wait(1).to({rotation: 5.2}, 0).wait(1).to({rotation: 5}, 0).wait(1).to({rotation: 4.8}, 0).wait(1).to({rotation: 4.7}, 0).wait(1).to({rotation: 4.5}, 0).wait(1).to({rotation: 4.3}, 0).wait(1).to({rotation: 4.2}, 0).wait(1).to({rotation: 4}, 0).wait(1).to({rotation: 3.8}, 0).wait(1).to({rotation: 3.7}, 0).wait(1).to({rotation: 3.5}, 0).wait(1).to({rotation: 3.3}, 0).wait(1).to({rotation: 3.2}, 0).wait(1).to({rotation: 3}, 0).wait(1).to({rotation: 2.8}, 0).wait(1).to({rotation: 2.7}, 0).wait(1).to({rotation: 2.5}, 0).wait(1).to({rotation: 2.3}, 0).wait(1).to({rotation: 2.2}, 0).wait(1).to({rotation: 2}, 0).wait(1).to({rotation: 1.8}, 0).wait(1).to({rotation: 1.7}, 0).wait(1).to({rotation: 1.5}, 0).wait(1).to({rotation: 1.3}, 0).wait(1).to({rotation: 1.2}, 0).wait(1).to({rotation: 1}, 0).wait(1).to({rotation: .8}, 0).wait(1).to({rotation: .7}, 0).wait(1).to({rotation: .5}, 0).wait(1).to({rotation: .3}, 0).wait(1).to({rotation: .2}, 0).wait(1).to({rotation: 0}, 0).wait(1))
	}).prototype = a = new A.MovieClip, a.nominalBounds = new A.Rectangle(-296, -295, 592, 590), (t.BirdIntro = function (e, i, n) {
		this.initialize(e, i, n, {});
		var a = new A.Shape;
		a._off = !0, a.graphics.p("AGQOkIl2i9IHjjEIFlDZIA6CkIhPAcIhFioIgIAEIi8htIAJgRIgugaIgbAvIAuAbIAJgQICvBmIgfAKIBECnIhJAbIhEimIgHAEIjAh1IAKgSIgwgZIgbAuIAwAbIAIgNIC0BqIgiALIBFCnIg6AVIhGiqIgGABIjNh1IAKgQIgugbIgbAvIAuAaIAJgNIC+BtIghAKIBGCsIg5AVgA5BNnIgDgzIADAAIAIgCIAqgBIABARIRZgeIG9hpIgehIIgRAHIgVgzIAzgUIATAzIgPAGIAAABIAlBcInUBsIxaAfIABASIgVAAIgIABgAuCJTIGwgFIFUhNIHAifIEYi8IgNgSIgMAJIgfgrIArgeIAfApIgRANIAYAiIkqDGInCCgIlYBOImfAFIAAB/IG3gPIFahRIgNguIkmBEIADAUIg0AJIgJg1IA1gIIACANIE2hGIAWBRIluBVInLAQgAv7LcIAAgZIpJAAIgBARIgbgBIgIgBIgSAAIADg1IA0ABIAAAUIJIgCIgBgaIBHAAIAABGgAAYIdIFYiJIEZjTIDNn3IgMibIgPABIgFg1IA1gEIAEA1IgTACIALCfIAAABIjRH+IkeDYIlKCDIAqByIFKiFIEzkQIgegNIkjDjIkDB4IAFAOIgyASIgTgvIAygUIAHATIEBh4IEojnIBDAcIlMEkIlcCOgAzjJtIABgeImRgUIAAAQIg1gDIACg1IAFAAIAIACIAoABIgBATIGRAUIABgXIBGADIgCBGgAxHJgIAAg2IASAAIAChcIIcAeIAAgQIA1AAIAAA1Ig1AAIAAgUIoKgdIgBBKIAQAAIAAA2gAmpGiIheAJIyaiGIgEAUIgegEIgHgCIgBAAIgOgCIAHgyIABgCIA0AIIgCAOISYCHIBrgLIAUBZICJgZIgDgPIA0gJIAJA0Ig0AJIgDgUIiZAcgA0RHgIACgYIl/geIgBATIgeAAIgHgBIgQAAIADg1IACAAIAIAAIAqACIgBAPIGBAeIACgcIBHAFIgGBHgAiyGFIh5AUIADAPIgzAMIgMg0IAzgMIAFAUICKgWIASA8IGYh9IgXguIE+jJIBZiYIA0ghIgKgNIAsgdIAeAqIgrAeIgKgPIgzAfIhXCYIk1DCIAaAzIm/CJgAkjifIi7joIAzgJIC3DlIAqgJIBDE8IgSADIALA2IA1gMIgLg1IgSADIhDk9IABAAIi7jgIA4gLICyDgIAsgKIBEEJIgRAFIANA1IAzgNIgNg0IgRAFIhEkKIABAAIiwjeIBIgNICtDYIAqgJIBFEWIAAAJIABAGIAGAWIgRAEIAMA1IA0gNIgLgvIgBgCIAAgDIgCAAIgDACIgCAAIgMACIgDgPIgBgDIAAgBIgCgFIhIkmIiwjVIBQgOIC0DTIBVFxIAcBnInBCFgALCDHIBIizIgIgEIAOgnIApAOIgPApIgPgGIAAAAIhCCiIAeAMIBikAIANgrIgmgOIBLjMIAlAPIMOrYIABAAIADgEIgCgEIgBgBIgCgEIgBgBIgQgWIgGACIgBACIptFTIAfAwIGGjkIgJgRIAvgZIAZAvIgvAYIgIgNImTDrIgzhMIKSlpIAjAyIABAAIAFAHIgMALIgGAFIAAABIsULdIgfgMIg/CrIAmAMIAAAAIAAAAIgDAKIgBAEIgOAvIhpEQgAKfpjIC0ieICCAWIA4BUIAOgLIAfArIgrAeIgegqIAOgJIg0hPIhygUIioCTIAbF/IA4gsIgTkgIBCg8IgKgKIAlgmIAlAmIglAlIgOgOIg8A3IASEhIhaBEgAOjoMIgPABIgEg0IA1gDIAEA0IgVABIAJBeIERjgIgNgRIArggIAeArIgpAeIgJgLIkpD2g"), this.instance = new t.BirdIntroTween("synched", 0), this.instance.parent = this, this.instance.setTransform(-956.4, 22.9);
		for (var o = [this.instance], s = 0; s < o.length; s++) o[s].mask = a;
		this.timeline.addTween(A.Tween.get(this.instance).to({x: 136.8}, 24).wait(11))
	}).prototype = a = new A.MovieClip, a.nominalBounds = null, (t.BirdGradMask = function (e, i, n) {
		this.initialize(e, i, n, {}), this.frame_119 = function () {
			this.stop()
		}, this.timeline.addTween(A.Tween.get(this).wait(119).call(this.frame_119).wait(1));
		var a = new A.Shape;
		a._off = !0, a.graphics.p("AGQOkIl2i9IHjjEIFlDZIA6CkIhPAcIhFioIgIAEIi8htIAJgRIgugaIgbAvIAuAbIAJgQICvBmIgfAKIBECnIhJAbIhEimIgHAEIjAh1IAKgSIgwgZIgbAuIAwAbIAIgNIC0BqIgiALIBFCnIg6AVIhGiqIgGABIjNh1IAKgQIgugbIgbAvIAuAaIAJgNIC+BtIghAKIBGCsIg5AVgA5BNnIgDgzIADAAIAIgCIAqgBIABARIRZgeIG9hpIgehIIgRAHIgVgzIAzgUIATAzIgPAGIAAABIAlBcInUBsIxaAfIABASIgVAAIgIABgAuCJTIGwgFIFUhNIHAifIEYi8IgNgSIgMAJIgfgrIArgeIAfApIgRANIAYAiIkqDGInCCgIlYBOImfAFIAAB/IG3gPIFahRIgNguIkmBEIADAUIg0AJIgJg1IA1gIIACANIE2hGIAWBRIluBVInLAQgAv7LcIAAgZIpJAAIgBARIgbgBIgIgBIgSAAIADg1IA0ABIAAAUIJIgCIgBgaIBHAAIAABGgAAYIdIFYiJIEZjTIDNn3IgMibIgPABIgFg1IA1gEIAEA1IgTACIALCfIAAABIjRH+IkeDYIlKCDIAqByIFKiFIEzkQIgegNIkjDjIkDB4IAFAOIgyASIgTgvIAygUIAHATIEBh4IEojnIBDAcIlMEkIlcCOgAzjJtIABgeImRgUIAAAQIg1gDIACg1IAFAAIAIACIAoABIgBATIGRAUIABgXIBGADIgCBGgAxHJgIAAg2IASAAIAChcIIcAeIAAgQIA1AAIAAA1Ig1AAIAAgUIoKgdIgBBKIAQAAIAAA2gAmpGiIheAJIyaiGIgEAUIgegEIgHgCIgBAAIgOgCIAHgyIABgCIA0AIIgCAOISYCHIBrgLIAUBZICJgZIgDgPIA0gJIAJA0Ig0AJIgDgUIiZAcgA0RHgIACgYIl/geIgBATIgeAAIgHgBIgQAAIADg1IACAAIAIAAIAqACIgBAPIGBAeIACgcIBHAFIgGBHgAiyGFIh5AUIADAPIgzAMIgMg0IAzgMIAFAUICKgWIASA8IGYh9IgXguIE+jJIBZiYIA0ghIgKgNIAsgdIAeAqIgrAeIgKgPIgzAfIhXCYIk1DCIAaAzIm/CJgAkjifIi7joIAzgJIC3DlIAqgJIBDE8IgSADIALA2IA1gMIgLg1IgSADIhDk9IABAAIi7jgIA4gLICyDgIAsgKIBEEJIgRAFIANA1IAzgNIgNg0IgRAFIhEkKIABAAIiwjeIBIgNICtDYIAqgJIBFEWIAAAJIABAGIAGAWIgRAEIAMA1IA0gNIgLgvIgBgCIAAgDIgCAAIgDACIgCAAIgMACIgDgPIgBgDIAAgBIgCgFIhIkmIiwjVIBQgOIC0DTIBVFxIAcBnInBCFgALCDHIBIizIgIgEIAOgnIApAOIgPApIgPgGIAAAAIhCCiIAeAMIBikAIANgrIgmgOIBLjMIAlAPIMOrYIABAAIADgEIgCgEIgBgBIgCgEIgBgBIgQgWIgGACIgBACIptFTIAfAwIGGjkIgJgRIAvgZIAZAvIgvAYIgIgNImTDrIgzhMIKSlpIAjAyIABAAIAFAHIgMALIgGAFIAAABIsULdIgfgMIg/CrIAmAMIAAAAIAAAAIgDAKIgBAEIgOAvIhpEQgAKfpjIC0ieICCAWIA4BUIAOgLIAfArIgrAeIgegqIAOgJIg0hPIhygUIioCTIAbF/IA4gsIgTkgIBCg8IgKgKIAlgmIAlAmIglAlIgOgOIg8A3IASEhIhaBEgAOjoMIgPABIgEg0IA1gDIAEA0IgVABIAJBeIERjgIgNgRIArggIAeArIgpAeIgJgLIkpD2g"), this.instance = new t.BirdGradTween("synched", 0), this.instance.parent = this, this.instance.setTransform(-806.6, 220.9);
		for (var o = [this.instance], s = 0; s < o.length; s++) o[s].mask = a;
		this.timeline.addTween(A.Tween.get(this.instance).to({
			x: 791.1,
			y: -343.2
		}, 59).wait(61)), this.shape = new A.Shape, this.shape.graphics.f("#8EC640").s().p("AGQOkIl2i9IHjjEIFlDZIA6CkIhPAcIhFioIgIAEIi8htIAJgRIgugaIgbAvIAuAbIAJgQICvBmIgfAKIBECnIhJAbIhEimIgHAEIjAh1IAKgSIgwgZIgbAuIAwAbIAIgNIC0BqIgiALIBFCnIg6AVIhGiqIgGABIjNh1IAKgQIgugbIgbAvIAuAaIAJgNIC+BtIghAKIBGCsIg5AVgA5BNnIgDgzIADAAIAIgCIAqgBIABARIRZgeIG9hpIgehIIgRAHIgVgzIAzgUIATAzIgPAGIAAABIAlBcInUBsIxaAfIABASIgVAAIgIABgAuCJTIGwgFIFUhNIHAifIEYi8IgNgSIgMAJIgfgrIArgeIAfApIgRANIAYAiIkqDGInCCgIlYBOImfAFIAAB/IG3gPIFahRIgNguIkmBEIADAUIg0AJIgJg1IA1gIIACANIE2hGIAWBRIluBVInLAQgAv7LcIAAgZIpJAAIgBARIgbgBIgIgBIgSAAIADg1IA0ABIAAAUIJIgCIgBgaIBHAAIAABGgAAYIdIFYiJIEZjTIDNn3IgMibIgPABIgFg1IA1gEIAEA1IgTACIALCfIAAABIjRH+IkeDYIlKCDIAqByIFKiFIEzkQIgegNIkjDjIkDB4IAFAOIgyASIgTgvIAygUIAHATIEBh4IEojnIBDAcIlMEkIlcCOgAzjJtIABgeImRgUIAAAQIg1gDIACg1IAFAAIAIACIAoABIgBATIGRAUIABgXIBGADIgCBGgAxHJgIAAg2IASAAIAChcIIcAeIAAgQIA1AAIAAA1Ig1AAIAAgUIoKgdIgBBKIAQAAIAAA2gAmpGiIheAJIyaiGIgEAUIgegEIgHgCIgBAAIgOgCIAHgyIABgCIA0AIIgCAOISYCHIBrgLIAUBZICJgZIgDgPIA0gJIAJA0Ig0AJIgDgUIiZAcgA0RHgIACgYIl/geIgBATIgeAAIgHgBIgQAAIADg1IACAAIAIAAIAqACIgBAPIGBAeIACgcIBHAFIgGBHgAiyGFIh5AUIADAPIgzAMIgMg0IAzgMIAFAUICKgWIASA8IGYh9IgXguIE+jJIBZiYIA0ghIgKgNIAsgdIAeAqIgrAeIgKgPIgzAfIhXCYIk1DCIAaAzIm/CJgAkjifIi7joIAzgJIC3DlIAqgJIBDE8IgSADIALA2IA1gMIgLg1IgSADIhDk9IABAAIi7jgIA4gLICyDgIAsgKIBEEJIgRAFIANA1IAzgNIgNg0IgRAFIhEkKIABAAIiwjeIBIgNICtDYIAqgJIBFEWIAAAJIABAGIAGAWIgRAEIAMA1IA0gNIgLgvIgBgCIAAgDIgCAAIgDACIgCAAIgMACIgDgPIgBgDIAAgBIgCgFIhIkmIiwjVIBQgOIC0DTIBVFxIAcBnInBCFgALCDHIBIizIgIgEIAOgnIApAOIgPApIgPgGIAAAAIhCCiIAeAMIBikAIANgrIgmgOIBLjMIAlAPIMOrYIABAAIADgEIgCgEIgBgBIgCgEIgBgBIgQgWIgGACIgBACIptFTIAfAwIGGjkIgJgRIAvgZIAZAvIgvAYIgIgNImTDrIgzhMIKSlpIAjAyIABAAIAFAHIgMALIgGAFIAAABIsULdIgfgMIg/CrIAmAMIAAAAIAAAAIgDAKIgBAEIgOAvIhpEQgAKfpjIC0ieICCAWIA4BUIAOgLIAfArIgrAeIgegqIAOgJIg0hPIhygUIioCTIAbF/IA4gsIgTkgIBCg8IgKgKIAlgmIAlAmIglAlIgOgOIg8A3IASEhIhaBEgAOjoMIgPABIgEg0IA1gDIAEA0IgVABIAJBeIERjgIgNgRIArggIAeArIgpAeIgJgLIkpD2g"), this.timeline.addTween(A.Tween.get(this.shape).wait(120))
	}).prototype = a = new A.MovieClip, a.nominalBounds = new A.Rectangle(-175.4, -109, 350.8, 218), (t.BirdFloatLoop = function (e, i, n) {
		this.initialize(e, i, n, {}), this.instance = new t.BirdGradMask, this.instance.parent = this, this.timeline.addTween(A.Tween.get(this.instance).wait(1).to({y: -.1}, 0).wait(1).to({y: -.2}, 0).wait(1).to({y: -.4}, 0).wait(1).to({y: -.5}, 0).wait(1).to({y: -.6}, 0).wait(1).to({y: -.7}, 0).wait(1).to({y: -.9}, 0).wait(1).to({y: -1}, 0).wait(1).to({y: -1.1}, 0).wait(1).to({y: -1.2}, 0).wait(1).to({y: -1.3}, 0).wait(1).to({y: -1.5}, 0).wait(1).to({y: -1.6}, 0).wait(1).to({y: -1.7}, 0).wait(1).to({y: -1.8}, 0).wait(1).to({y: -2}, 0).wait(1).to({y: -2.1}, 0).wait(1).to({y: -2.2}, 0).wait(1).to({y: -2.3}, 0).wait(1).to({y: -2.5}, 0).wait(1).to({y: -2.6}, 0).wait(1).to({y: -2.7}, 0).wait(1).to({y: -2.8}, 0).wait(1).to({y: -2.9}, 0).wait(1).to({y: -3.1}, 0).wait(1).to({y: -3.2}, 0).wait(1).to({y: -3.3}, 0).wait(1).to({y: -3.4}, 0).wait(1).to({y: -3.6}, 0).wait(1).to({y: -3.7}, 0).wait(1).to({y: -3.8}, 0).wait(1).to({y: -3.9}, 0).wait(1).to({y: -4}, 0).wait(1).to({y: -4.2}, 0).wait(1).to({y: -4.3}, 0).wait(1).to({y: -4.4}, 0).wait(1).to({y: -4.5}, 0).wait(1).to({y: -4.7}, 0).wait(1).to({y: -4.8}, 0).wait(1).to({y: -4.9}, 0).wait(1).to({y: -5}, 0).wait(1).to({y: -5.2}, 0).wait(1).to({y: -5.3}, 0).wait(1).to({y: -5.4}, 0).wait(1).to({y: -5.3}, 0).wait(1).to({y: -5.2}, 0).wait(1).to({y: -5}, 0).wait(1).to({y: -4.9}, 0).wait(1).to({y: -4.8}, 0).wait(1).to({y: -4.7}, 0).wait(1).to({y: -4.5}, 0).wait(1).to({y: -4.4}, 0).wait(1).to({y: -4.3}, 0).wait(1).to({y: -4.2}, 0).wait(1).to({y: -4}, 0).wait(1).to({y: -3.9}, 0).wait(1).to({y: -3.8}, 0).wait(1).to({y: -3.7}, 0).wait(1).to({y: -3.6}, 0).wait(1).to({y: -3.4}, 0).wait(1).to({y: -3.3}, 0).wait(1).to({y: -3.2}, 0).wait(1).to({y: -3.1}, 0).wait(1).to({y: -2.9}, 0).wait(1).to({y: -2.8}, 0).wait(1).to({y: -2.7}, 0).wait(1).to({y: -2.6}, 0).wait(1).to({y: -2.5}, 0).wait(1).to({y: -2.3}, 0).wait(1).to({y: -2.2}, 0).wait(1).to({y: -2.1}, 0).wait(1).to({y: -2}, 0).wait(1).to({y: -1.8}, 0).wait(1).to({y: -1.7}, 0).wait(1).to({y: -1.6}, 0).wait(1).to({y: -1.5}, 0).wait(1).to({y: -1.4}, 0).wait(1).to({y: -1.2}, 0).wait(1).to({y: -1.1}, 0).wait(1).to({y: -1}, 0).wait(1).to({y: -.9}, 0).wait(1).to({y: -.7}, 0).wait(1).to({y: -.6}, 0).wait(1).to({y: -.5}, 0).wait(1).to({y: -.4}, 0).wait(1).to({y: -.2}, 0).wait(1).to({y: -.1}, 0).wait(1).to({y: 0}, 0).wait(1))
	}).prototype = a = new A.MovieClip, a.nominalBounds = new A.Rectangle(-1381.6, -209.4, 1556.9, 860.6), (t.TextMotion = function (e, i, n) {
		this.initialize(e, i, n, {}), this.frame_119 = function () {
			this.stop()
		}, this.timeline.addTween(A.Tween.get(this).wait(119).call(this.frame_119).wait(1)), this.instance = new t.Make, this.instance.parent = this, this.instance.setTransform(244.7, -18.8, 1, 1, 0, 0, 0, 109.4, 41.6), this.instance.alpha = 0, this.instance._off = !0, this.timeline.addTween(A.Tween.get(this.instance).wait(4).to({_off: !1}, 0).to({
			y: 20.2,
			alpha: 1
		}, 4, A.Ease.get(1)).to({y: -5.8}, 7).wait(105)), this.instance_1 = new t.Positive, this.instance_1.parent = this, this.instance_1.setTransform(379.1, 34.6, 1, 1, 0, 0, 0, 245.1, 33.6), this.instance_1.alpha = 0, this.instance_1._off = !0, this.timeline.addTween(A.Tween.get(this.instance_1).wait(11).to({_off: !1}, 0).to({
			y: 73.6,
			alpha: 1
		}, 4, A.Ease.get(1)).to({y: 47.6}, 7, A.Ease.get(1)).wait(98)), this.instance_2 = new t.Impacts, this.instance_2.parent = this, this.instance_2.setTransform(299.3, 96.4, 1, 1, 0, 0, 0, 163.3, 33.6), this.instance_2.alpha = 0, this.instance_2._off = !0, this.timeline.addTween(A.Tween.get(this.instance_2).wait(15).to({_off: !1}, 0).to({
			y: 122.4,
			alpha: 1
		}, 4, A.Ease.get(1)).to({y: 109.4}, 7, A.Ease.get(1)).wait(94)), this.instance_3 = new t.World, this.instance_3.parent = this, this.instance_3.setTransform(386.1, 162.4, .822, .822, 0, 0, 0, 331.2, 108.2), this.instance_3.alpha = 0, this.instance_3._off = !0, this.timeline.addTween(A.Tween.get(this.instance_3).wait(22).to({_off: !1}, 0).to({
			regY: 108.1,
			scaleX: 1.16,
			scaleY: 1.16,
			x: 386.2,
			y: 162.3,
			alpha: 1
		}, 4, A.Ease.get(1)).to({
			regX: 331.1,
			scaleX: 1,
			scaleY: 1,
			x: 386
		}, 9, A.Ease.get(1)).wait(85)), this.instance_4 = new t.THE, this.instance_4.parent = this, this.instance_4.setTransform(63.4, 284.1, 1, 1, 0, 0, 0, 56.9, 22), this.instance_4.alpha = 0, this.instance_4._off = !0, this.timeline.addTween(A.Tween.get(this.instance_4).wait(26).to({_off: !1}, 0).to({
			x: 51.7,
			y: 231.6,
			alpha: 1
		}, 4, A.Ease.get(.96)).to({
			x: 56.9,
			y: 255.6
		}, 9, A.Ease.get(1)).wait(81)), this.instance_5 = new t.www, this.instance_5.parent = this, this.instance_5.setTransform(276.5, 321.1, 1, 1, 0, 0, 0, 184.7, 16.1), this.instance_5.alpha = 0, this.instance_5._off = !0, this.timeline.addTween(A.Tween.get(this.instance_5).wait(27).to({_off: !1}, 0).to({
			x: 336.5,
			alpha: 1
		}, 4, A.Ease.get(1)).to({x: 314}, 9, A.Ease.get(-1)).wait(80))
	}).prototype = a = new A.MovieClip, a.nominalBounds = null, (t.TextArrowLoop = function (e, i, n) {
		this.initialize(e, i, n, {}), this.frame_85 = function () {
			this.stop()
		}, this.timeline.addTween(A.Tween.get(this).wait(85).call(this.frame_85).wait(15)), this.instance = new t.BGArrow, this.instance.parent = this, this.instance.setTransform(137.1, 0), this.instance.alpha = 0, this.timeline.addTween(A.Tween.get(this.instance).wait(1).to({
			x: 121.9,
			alpha: .393
		}, 0).wait(1).to({x: 107.3, alpha: .772}, 0).wait(1).to({
			x: 93.3,
			alpha: 1
		}, 0).wait(1).to({x: 79.7}, 0).wait(1).to({x: 66.7}, 0).wait(1).to({x: 54.3}, 0).wait(1).to({x: 42.3}, 0).wait(1).to({x: 30.9}, 0).wait(1).to({x: 20}, 0).wait(1).to({x: 9.7}, 0).wait(1).to({x: -.1}, 0).wait(1).to({x: -9.4}, 0).wait(1).to({x: -18.2}, 0).wait(1).to({x: -26.4}, 0).wait(1).to({x: -34.1}, 0).wait(1).to({x: -41.3}, 0).wait(1).to({x: -47.9}, 0).wait(1).to({x: -54}, 0).wait(1).to({x: -59.6}, 0).wait(1).to({x: -64.6}, 0).wait(1).to({x: -69.1}, 0).wait(1).to({x: -73.1}, 0).wait(1).to({x: -76.5}, 0).wait(1).to({x: -79.5}, 0).wait(1).to({x: -81.9}, 0).wait(1).to({x: -83.7}, 0).wait(1).to({x: -85}, 0).wait(1).to({x: -85.8}, 0).wait(1).to({x: -86.1}, 0).wait(58).to({
			x: -89.7,
			alpha: .8
		}, 0).wait(1).to({x: -93.3, alpha: .6}, 0).wait(1).to({x: -96.9, alpha: .4}, 0).wait(1).to({
			x: -100.5,
			alpha: .2
		}, 0).wait(1).to({
			x: -104.1,
			alpha: 0
		}, 0).to({_off: !0}, 1).wait(8)), this.instance_1 = new t.BGArrow, this.instance_1.parent = this, this.instance_1.setTransform(-40, 0), this.instance_1.alpha = 0, this.instance_1._off = !0, this.timeline.addTween(A.Tween.get(this.instance_1).wait(21).to({_off: !1}, 0).wait(1).to({alpha: .5}, 0).wait(1).to({alpha: 1}, 0).wait(1).to({x: -43}, 0).wait(65).to({
			x: -46.6,
			alpha: .8
		}, 0).wait(1).to({x: -50.2, alpha: .6}, 0).wait(1).to({x: -53.8, alpha: .4}, 0).wait(1).to({
			x: -57.4,
			alpha: .2
		}, 0).wait(1).to({
			x: -61,
			alpha: 0
		}, 0).to({_off: !0}, 1).wait(6)), this.instance_2 = new t.BGArrow, this.instance_2.parent = this, this.instance_2.setTransform(3, 0), this.instance_2.alpha = 0, this.instance_2._off = !0, this.timeline.addTween(A.Tween.get(this.instance_2).wait(16).to({_off: !1}, 0).wait(1).to({alpha: .5}, 0).wait(1).to({alpha: 1}, 0).wait(1).to({x: 0}, 0).wait(72).to({
			x: -3.6,
			alpha: .8
		}, 0).wait(1).to({x: -7.2, alpha: .6}, 0).wait(1).to({x: -10.8, alpha: .4}, 0).wait(1).to({
			x: -14.4,
			alpha: .2
		}, 0).wait(1).to({
			x: -18,
			alpha: 0
		}, 0).to({_off: !0}, 1).wait(4)), this.instance_3 = new t.BGArrow, this.instance_3.parent = this, this.instance_3.setTransform(46.1, 0), this.instance_3.alpha = 0, this.instance_3._off = !0, this.timeline.addTween(A.Tween.get(this.instance_3).wait(10).to({_off: !1}, 0).wait(1).to({alpha: .5}, 0).wait(1).to({alpha: 1}, 0).wait(1).to({x: 43.1}, 0).wait(80).to({
			x: 39.5,
			alpha: .8
		}, 0).wait(1).to({x: 35.9, alpha: .6}, 0).wait(1).to({x: 32.3, alpha: .4}, 0).wait(1).to({
			x: 28.7,
			alpha: .2
		}, 0).wait(1).to({
			x: 25.1,
			alpha: 0
		}, 0).to({_off: !0}, 1).wait(2)), this.instance_4 = new t.BGArrow, this.instance_4.parent = this, this.instance_4.setTransform(89.1, 0), this.instance_4.alpha = 0, this.instance_4._off = !0, this.timeline.addTween(A.Tween.get(this.instance_4).wait(5).to({_off: !1}, 0).wait(1).to({alpha: .5}, 0).wait(1).to({alpha: 1}, 0).wait(1).to({x: 86.1}, 0).wait(87).to({
			x: 82.5,
			alpha: .8
		}, 0).wait(1).to({x: 78.9, alpha: .6}, 0).wait(1).to({x: 75.3, alpha: .4}, 0).wait(1).to({
			x: 71.7,
			alpha: .2
		}, 0).wait(1).to({x: 68.1, alpha: 0}, 0).wait(1))
	}).prototype = a = new A.MovieClip, a.nominalBounds = new A.Rectangle(123.6, -21.5, 27, 43), (t.Circuit2Mask = function (e, i, n) {
		this.initialize(e, i, n, {}), this.frame_109 = function () {
			this.looped || (this.looped = 1), 2 == this.looped++ && this.stop()
		}, this.timeline.addTween(A.Tween.get(this).wait(109).call(this.frame_109).wait(1));
		var a = new A.Shape;
		a._off = !0, a.graphics.p("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"), a.setTransform(659.9, 31.3), this.instance = new t.CircuitMaskTween("synched", 0), this.instance.parent = this, this.instance.setTransform(-867.7, 10.7);
		for (var o = [this.instance], s = 0; s < o.length; s++) o[s].mask = a;
		this.timeline.addTween(A.Tween.get(this.instance).to({x: 1899.2}, 100, A.Ease.get(1)).wait(10))
	}).prototype = a = new A.MovieClip, a.nominalBounds = null, (t.Circuit1Mask = function (e, i, n) {
		this.initialize(e, i, n, {}), this.frame_104 = function () {
			this.looped || (this.looped = 1), 2 == this.looped++ && this.stop()
		}, this.timeline.addTween(A.Tween.get(this).wait(104).call(this.frame_104).wait(1));
		var a = new A.Shape;
		a._off = !0, a.graphics.p("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"), this.instance = new t.CircuitMaskTween("synched", 0), this.instance.parent = this, this.instance.setTransform(-867.7, 10.7);
		for (var o = [this.instance], s = 0; s < o.length; s++) o[s].mask = a;
		this.timeline.addTween(A.Tween.get(this.instance).to({x: 1167.9}, 95, A.Ease.get(1)).wait(10))
	}).prototype = a = new A.MovieClip, a.nominalBounds = new A.Rectangle(-322.6, -297.2, 141.5, 594.5), (t.BGDots = function (e, i, n) {
		this.initialize(e, i, n, {}), this.frame_89 = function () {
			this.stop()
		}, this.timeline.addTween(A.Tween.get(this).wait(89).call(this.frame_89).wait(1));
		var a = new A.Shape;
		a._off = !0;
		var o = (new A.Graphics).p("AUbHEQgLgLAAgPIAAAAQAAgPALgLIAAAAQALgLAPAAIAAAAQAPAAAMALIAAAAQAKAKABAQIAAAAQgBAPgKALIAAAAQgMAKgPAAIAAAAQgPAAgLgKgAQ9HEQgLgLAAgPIAAAAQAAgQALgKIAAAAQAKgLAQAAIAAAAQAQAAAKALIAAAAQALAKAAAQIAAAAQAAAPgLALIAAAAQgKAKgQAAIAAAAQgQAAgKgKgANeHEQgKgLgBgPIAAAAQABgQAKgKIAAAAQAMgLAPAAIAAAAQAPAAALALIAAAAQALALAAAPIAAAAQAAAPgLALIAAAAQgLAKgPAAIAAAAQgPAAgMgKgAKBHEQgMgLAAgPIAAAAQAAgQAMgKIAAAAQAKgLAQAAIAAAAQAPAAAKALIAAAAQAMAKAAAQIAAAAQAAAPgMALIAAAAQgKAKgPAAIAAAAQgQAAgKgKgAGjHEQgMgLABgPIAAAAQgBgQAMgKIAAAAQAKgLAQAAIAAAAQAPAAALALIAAAAQALAKAAAQIAAAAQAAAPgLALIAAAAQgLAKgPAAIAAAAQgQAAgKgKgADEHEQgLgLAAgPIAAAAQAAgQALgKIAAAAQALgLAPAAIAAAAQAQAAAKALIAAAAQALAKAAAQIAAAAQAAAPgLALIAAAAQgKAKgQAAIAAAAQgPAAgLgKgAgZHEQgLgLAAgPIAAAAQAAgQALgKIAAAAQALgLAOAAIAAAAQAPAAALALIAAAAQALAKAAAQIAAAAQAAAPgLALIAAAAQgLAKgPAAIAAAAQgOAAgLgKgAj3HEQgLgLAAgPIAAAAQAAgQALgKIAAAAQAKgLAQAAIAAAAQAPAAALALIAAAAQAKAKABAQIAAAAQgBAPgKALIAAAAQgLAKgPAAIAAAAQgQAAgKgKgAnWHEQgLgLABgPIAAAAQgBgQALgKIAAAAQALgLAPAAIAAAAQAQAAALALIAAAAQALAKgBAQIAAAAQABAPgLALIAAAAQgLAKgQAAIAAAAQgPAAgLgKgAq0HEQgLgLAAgPIAAAAQAAgQALgKIAAAAQALgLAPAAIAAAAQAQAAAKALIAAAAQAMALAAAPIAAAAQAAAPgMALIAAAAQgKAKgQAAIAAAAQgPAAgLgKgAuSHEQgLgLAAgPIAAAAQAAgQALgKIAAAAQALgLAPAAIAAAAQAPAAALALIAAAAQALAKAAAQIAAAAQAAAPgLALIAAAAQgLAKgPAAIAAAAQgPAAgLgKgAxwHEQgLgLAAgPIAAAAQAAgQALgKIAAAAQAKgLAQAAIAAAAQAQAAAKALIAAAAQALAKAAAQIAAAAQAAAPgLALIAAAAQgKAKgQAAIAAAAQgQAAgKgKgA1PHEQgKgLgBgPIAAAAQABgQAKgKIAAAAQALgLAPAAIAAAAQAQAAAKALIAAAAQALAKAAAQIAAAAQAAAPgLALIAAAAQgKAKgQAAIAAAAQgPAAgLgKgAUbEYQgLgKAAgQIAAAAQAAgPALgKIAAAAQALgLAPAAIAAAAQAPAAAMALIAAAAQAKAKABAPIAAAAQgBAQgKAKIAAAAQgMALgPAAIAAAAQgPAAgLgLgAQ9EYQgLgKAAgQIAAAAQAAgPALgKIAAAAQAKgLAQAAIAAAAQAQAAAKALIAAAAQALAKAAAPIAAAAQAAAQgLAKIAAAAQgKALgQAAIAAAAQgQAAgKgLgANeEYQgKgKgBgQIAAAAQABgPAKgKIAAAAQAMgLAPAAIAAAAQAPAAALALIAAAAQALAKAAAPIAAAAQAAAQgLAKIAAAAQgLALgPAAIAAAAQgPAAgMgLgAKBEYQgMgKAAgQIAAAAQAAgPAMgKIAAAAQAKgLAQAAIAAAAQAPAAAKALIAAAAQAMAKAAAPIAAAAQAAAQgMAKIAAAAQgKALgPAAIAAAAQgQAAgKgLgAGjEYQgMgKABgQIAAAAQgBgPAMgKIAAAAQAKgLAQAAIAAAAQAPAAALALIAAAAQALAKAAAPIAAAAQAAAQgLAKIAAAAQgLALgPAAIAAAAQgQAAgKgLgADEEYQgLgKAAgQIAAAAQAAgPALgKIAAAAQALgLAPAAIAAAAQAQAAAKALIAAAAQALAKAAAPIAAAAQAAAQgLAKIAAAAQgKALgQAAIAAAAQgPAAgLgLgAgZEYQgLgKAAgQIAAAAQAAgPALgKIAAAAQALgLAOAAIAAAAQAPAAALALIAAAAQALAKAAAPIAAAAQAAAQgLAKIAAAAQgLALgPAAIAAAAQgOAAgLgLgAj3EYQgLgKAAgQIAAAAQAAgPALgKIAAAAQAKgLAQAAIAAAAQAPAAALALIAAAAQAKAKABAPIAAAAQgBAQgKAKIAAAAQgLALgPAAIAAAAQgQAAgKgLgAnWEYQgLgKABgQIAAAAQgBgPALgKIAAAAQALgLAPAAIAAAAQAQAAALALIAAAAQALAKgBAPIAAAAQABAQgLAKIAAAAQgLALgQAAIAAAAQgPAAgLgLgAq0EYQgLgKAAgQIAAAAQAAgPALgKIAAAAQALgLAPAAIAAAAQAQAAAKALIAAAAQAMAKAAAPIAAAAQAAAQgMAKIAAAAQgKALgQAAIAAAAQgPAAgLgLgAuSEYQgLgKAAgQIAAAAQAAgPALgKIAAAAQALgLAPAAIAAAAQAPAAALALIAAAAQALAKAAAPIAAAAQAAAQgLAKIAAAAQgLALgPAAIAAAAQgPAAgLgLgAxwEYQgLgKAAgQIAAAAQAAgPALgKIAAAAQAKgLAQAAIAAAAQAQAAAKALIAAAAQALAKAAAPIAAAAQAAAQgLAKIAAAAQgKALgQAAIAAAAQgQAAgKgLgA1PEYQgKgKgBgQIAAAAQABgPAKgKIAAAAQALgLAPAAIAAAAQAQAAAKALIAAAAQALAKAAAPIAAAAQAAAQgLAKIAAAAQgKALgQAAIAAAAQgPAAgLgLgAUbBvQgLgLAAgPIAAAAQAAgPALgLIAAAAQALgLAPAAIAAAAQAPAAAMALIAAAAQAKALABAPIAAAAQgBAPgKALIAAAAQgMAKgPAAIAAAAQgPAAgLgKgAQ9BvQgLgLAAgPIAAAAQAAgPALgLIAAAAQAKgLAQAAIAAAAQAQAAAKALIAAAAQALALAAAPIAAAAQAAAPgLALIAAAAQgKAKgQAAIAAAAQgQAAgKgKgANeBvQgKgLgBgPIAAAAQABgPAKgLIAAAAQAMgLAPAAIAAAAQAPAAALALIAAAAQALALAAAPIAAAAQAAAPgLALIAAAAQgLAKgPAAIAAAAQgPAAgMgKgAKBBvQgMgLAAgPIAAAAQAAgPAMgLIAAAAQAKgLAQAAIAAAAQAPAAAKALIAAAAQAMALAAAPIAAAAQAAAPgMALIAAAAQgKAKgPAAIAAAAQgQAAgKgKgAGjBvQgMgLABgPIAAAAQgBgPAMgLIAAAAQAKgLAQAAIAAAAQAPAAALALIAAAAQALALAAAPIAAAAQAAAPgLALIAAAAQgLAKgPAAIAAAAQgQAAgKgKgADEBvQgLgLAAgPIAAAAQAAgPALgLIAAAAQALgLAPAAIAAAAQAQAAAKALIAAAAQALALAAAPIAAAAQAAAPgLALIAAAAQgKAKgQAAIAAAAQgPAAgLgKgAgZBvQgLgLAAgPIAAAAQAAgPALgLIAAAAQALgLAOAAIAAAAQAPAAALALIAAAAQALALAAAPIAAAAQAAAPgLALIAAAAQgLAKgPAAIAAAAQgOAAgLgKgAj3BvQgLgLAAgPIAAAAQAAgPALgLIAAAAQAKgLAQAAIAAAAQAPAAALALIAAAAQAKALABAPIAAAAQgBAPgKALIAAAAQgLAKgPAAIAAAAQgQAAgKgKgAnWBvQgLgLABgPIAAAAQgBgPALgLIAAAAQALgLAPAAIAAAAQAQAAALALIAAAAQALALgBAPIAAAAQABAPgLALIAAAAQgLAKgQAAIAAAAQgPAAgLgKgAq0BvQgLgLAAgPIAAAAQAAgPALgLIAAAAQALgLAPAAIAAAAQAQAAAKALIAAAAQAMALAAAPIAAAAQAAAPgMALIAAAAQgKAKgQAAIAAAAQgPAAgLgKgAuSBvQgLgLAAgPIAAAAQAAgPALgLIAAAAQALgLAPAAIAAAAQAPAAALALIAAAAQALALAAAPIAAAAQAAAPgLALIAAAAQgLAKgPAAIAAAAQgPAAgLgKgAxwBvQgLgLAAgPIAAAAQAAgPALgLIAAAAQAKgLAQAAIAAAAQAQAAAKALIAAAAQALALAAAPIAAAAQAAAPgLALIAAAAQgKAKgQAAIAAAAQgQAAgKgKgA1PBvQgKgLgBgPIAAAAQABgPAKgLIAAAAQALgLAPAAIAAAAQAQAAAKALIAAAAQALALAAAPIAAAAQAAAPgLALIAAAAQgKAKgQAAIAAAAQgPAAgLgKgAUbg6QgLgLAAgPIAAAAQAAgPALgKIAAAAQALgLAPAAIAAAAQAPAAAMALIAAAAQAKAKABAPIAAAAQgBAPgKALIAAAAQgMALgPAAIAAAAQgPAAgLgLgAQ9g6QgLgLAAgPIAAAAQAAgPALgKIAAAAQAKgLAQAAIAAAAQAQAAAKALIAAAAQALAKAAAPIAAAAQAAAPgLALIAAAAQgKALgQAAIAAAAQgQAAgKgLgANeg6QgKgLgBgPIAAAAQABgPAKgKIAAAAQAMgLAPAAIAAAAQAPAAALALIAAAAQALAKAAAPIAAAAQAAAPgLALIAAAAQgLALgPAAIAAAAQgPAAgMgLgAKBg6QgMgLAAgPIAAAAQAAgPAMgKIAAAAQAKgLAQAAIAAAAQAPAAAKALIAAAAQAMAKAAAPIAAAAQAAAPgMALIAAAAQgKALgPAAIAAAAQgQAAgKgLgAGjg6QgMgLABgPIAAAAQgBgPAMgKIAAAAQAKgLAQAAIAAAAQAPAAALALIAAAAQALAKAAAPIAAAAQAAAPgLALIAAAAQgLALgPAAIAAAAQgQAAgKgLgADEg6QgLgLAAgPIAAAAQAAgPALgKIAAAAQALgLAPAAIAAAAQAQAAAKALIAAAAQALAKAAAPIAAAAQAAAPgLALIAAAAQgKALgQAAIAAAAQgPAAgLgLgAgZg6QgLgLAAgPIAAAAQAAgPALgKIAAAAQALgLAOAAIAAAAQAPAAALALIAAAAQALAKAAAPIAAAAQAAAPgLALIAAAAQgLALgPAAIAAAAQgOAAgLgLgAj3g6QgLgLAAgPIAAAAQAAgPALgKIAAAAQAKgLAQAAIAAAAQAPAAALALIAAAAQAKAKABAPIAAAAQgBAPgKALIAAAAQgLALgPAAIAAAAQgQAAgKgLgAnWg6QgLgLABgPIAAAAQgBgPALgKIAAAAQALgLAPAAIAAAAQAQAAALALIAAAAQALAKgBAPIAAAAQABAPgLALIAAAAQgLALgQAAIAAAAQgPAAgLgLgAq0g6QgLgLAAgPIAAAAQAAgPALgKIAAAAQALgLAPAAIAAAAQAQAAAKALIAAAAQAMAKAAAPIAAAAQAAAPgMALIAAAAQgKALgQAAIAAAAQgPAAgLgLgAuSg6QgLgLAAgPIAAAAQAAgPALgKIAAAAQALgLAPAAIAAAAQAPAAALALIAAAAQALAKAAAPIAAAAQAAAPgLALIAAAAQgLALgPAAIAAAAQgPAAgLgLgAxwg6QgLgLAAgPIAAAAQAAgPALgKIAAAAQAKgLAQAAIAAAAQAQAAAKALIAAAAQALAKAAAPIAAAAQAAAPgLALIAAAAQgKALgQAAIAAAAQgQAAgKgLgA1Pg6QgKgLgBgPIAAAAQABgPAKgKIAAAAQALgLAPAAIAAAAQAQAAAKALIAAAAQALAKAAAPIAAAAQAAAPgLALIAAAAQgKALgQAAIAAAAQgPAAgLgLgAUbjlQgLgLAAgPIAAAAQAAgPALgLIAAAAQALgLAPAAIAAAAQAPAAAMALIAAAAQAKALABAPIAAAAQgBAPgKALIAAAAQgMALgPAAIAAAAQgPAAgLgLgAQ9jlQgLgLAAgPIAAAAQAAgPALgLIAAAAQAKgLAQAAIAAAAQAQAAAKALIAAAAQALALAAAPIAAAAQAAAPgLALIAAAAQgKALgQAAIAAAAQgQAAgKgLgANejlQgKgLgBgPIAAAAQABgPAKgLIAAAAQAMgLAPAAIAAAAQAPAAALALIAAAAQALALAAAPIAAAAQAAAPgLALIAAAAQgLALgPAAIAAAAQgPAAgMgLgAKBjlQgMgLAAgPIAAAAQAAgPAMgLIAAAAQAKgLAQAAIAAAAQAPAAAKALIAAAAQAMALAAAPIAAAAQAAAPgMALIAAAAQgKALgPAAIAAAAQgQAAgKgLgAGjjlQgMgLABgPIAAAAQgBgPAMgLIAAAAQAKgLAQAAIAAAAQAPAAALALIAAAAQALALAAAPIAAAAQAAAPgLALIAAAAQgLALgPAAIAAAAQgQAAgKgLgADEjlQgLgLAAgPIAAAAQAAgPALgLIAAAAQALgLAPAAIAAAAQAQAAAKALIAAAAQALALAAAPIAAAAQAAAPgLALIAAAAQgKALgQAAIAAAAQgPAAgLgLgAgZjlQgLgLAAgPIAAAAQAAgPALgLIAAAAQALgLAOAAIAAAAQAPAAALALIAAAAQALALAAAPIAAAAQAAAPgLALIAAAAQgLALgPAAIAAAAQgOAAgLgLgAj3jlQgLgLAAgPIAAAAQAAgPALgLIAAAAQAKgLAQAAIAAAAQAPAAALALIAAAAQAKALABAPIAAAAQgBAPgKALIAAAAQgLALgPAAIAAAAQgQAAgKgLgAnWjlQgLgLABgPIAAAAQgBgPALgLIAAAAQALgLAPAAIAAAAQAQAAALALIAAAAQALALgBAPIAAAAQABAPgLALIAAAAQgLALgQAAIAAAAQgPAAgLgLgAq0jlQgLgLAAgPIAAAAQAAgPALgLIAAAAQALgLAPAAIAAAAQAQAAAKALIAAAAQAMALAAAPIAAAAQAAAPgMALIAAAAQgKALgQAAIAAAAQgPAAgLgLgAuSjlQgLgLAAgPIAAAAQAAgPALgLIAAAAQALgLAPAAIAAAAQAPAAALALIAAAAQALALAAAPIAAAAQAAAPgLALIAAAAQgLALgPAAIAAAAQgPAAgLgLgAxwjlQgLgLAAgPIAAAAQAAgPALgLIAAAAQAKgLAQAAIAAAAQAQAAAKALIAAAAQALALAAAPIAAAAQAAAPgLALIAAAAQgKALgQAAIAAAAQgQAAgKgLgA1PjlQgKgLgBgPIAAAAQABgPAKgLIAAAAQALgLAPAAIAAAAQAQAAAKALIAAAAQALALAAAPIAAAAQAAAPgLALIAAAAQgKALgQAAIAAAAQgPAAgLgLgAUbmPQgLgKAAgQIAAAAQAAgPALgKIAAAAQALgLAPAAIAAAAQAPAAAMALIAAAAQAKAKABAPIAAAAQgBAQgKAKIAAAAQgMALgPAAIAAAAQgPAAgLgLgAQ9mPQgLgKAAgQIAAAAQAAgPALgKIAAAAQAKgLAQAAIAAAAQAQAAAKALIAAAAQALAKAAAPIAAAAQAAAQgLAKIAAAAQgKALgQAAIAAAAQgQAAgKgLgANemPQgKgKgBgQIAAAAQABgPAKgKIAAAAQAMgLAPAAIAAAAQAPAAALALIAAAAQALAKAAAPIAAAAQAAAQgLAKIAAAAQgLALgPAAIAAAAQgPAAgMgLgAKBmPQgMgKAAgQIAAAAQAAgPAMgKIAAAAQAKgLAQAAIAAAAQAPAAAKALIAAAAQAMAKAAAPIAAAAQAAAQgMAKIAAAAQgKALgPAAIAAAAQgQAAgKgLgAGjmPQgMgKABgQIAAAAQgBgPAMgKIAAAAQAKgLAQAAIAAAAQAPAAALALIAAAAQALAKAAAPIAAAAQAAAQgLAKIAAAAQgLALgPAAIAAAAQgQAAgKgLgADEmPQgLgKAAgQIAAAAQAAgPALgKIAAAAQALgLAPAAIAAAAQAQAAAKALIAAAAQALAKAAAPIAAAAQAAAQgLAKIAAAAQgKALgQAAIAAAAQgPAAgLgLgAgZmPQgLgKAAgQIAAAAQAAgPALgKIAAAAQALgLAOAAIAAAAQAPAAALALIAAAAQALAKAAAPIAAAAQAAAQgLAKIAAAAQgLALgPAAIAAAAQgOAAgLgLgAj3mPQgLgKAAgQIAAAAQAAgPALgKIAAAAQAKgLAQAAIAAAAQAPAAALALIAAAAQAKAKABAPIAAAAQgBAQgKAKIAAAAQgLALgPAAIAAAAQgQAAgKgLgAnWmPQgLgKABgQIAAAAQgBgPALgKIAAAAQALgLAPAAIAAAAQAQAAALALIAAAAQALAKgBAPIAAAAQABAQgLAKIAAAAQgLALgQAAIAAAAQgPAAgLgLgAq0mPQgLgKAAgQIAAAAQAAgPALgKIAAAAQALgLAPAAIAAAAQAQAAAKALIAAAAQAMAKAAAPIAAAAQAAAQgMAKIAAAAQgKALgQAAIAAAAQgPAAgLgLgAuSmPQgLgKAAgQIAAAAQAAgPALgKIAAAAQALgLAPAAIAAAAQAPAAALALIAAAAQALAKAAAPIAAAAQAAAQgLAKIAAAAQgLALgPAAIAAAAQgPAAgLgLgAxwmPQgLgKAAgQIAAAAQAAgPALgKIAAAAQAKgLAQAAIAAAAQAQAAAKALIAAAAQALAKAAAPIAAAAQAAAQgLAKIAAAAQgKALgQAAIAAAAQgQAAgKgLgA1PmPQgKgKgBgQIAAAAQABgPAKgKIAAAAQALgLAPAAIAAAAQAQAAAKALIAAAAQALAKAAAPIAAAAQAAAQgLAKIAAAAQgKALgQAAIAAAAQgPAAgLgLg");
		this.timeline.addTween(A.Tween.get(a).to({graphics: null, x: 0, y: 0}).wait(29).to({
			graphics: o,
			x: 0,
			y: 0
		}).wait(61)), this.instance = new t.BGDotsGradTween("synched", 0), this.instance.parent = this, this.instance.setTransform(-407.1, -4.3), this.instance._off = !0;
		for (var s = [this.instance], r = 0; r < s.length; r++) s[r].mask = a;
		this.timeline.addTween(A.Tween.get(this.instance).wait(29).to({_off: !1}, 0).to({x: 404.9}, 35).wait(26)), this.shape = new A.Shape, this.shape.graphics.f("#3EB333").s().p("AEzHEQgLgLAAgPQAAgQALgKQALgLAPAAQAQAAAKALQAMALAAAPQAAAPgMALQgKAKgQAAQgPAAgLgKgABVHEQgLgLAAgPQAAgQALgKQAKgLAQAAQAPAAALALQALAKAAAQQAAAPgLALQgLAKgPAAQgQAAgKgKgAiIHEQgLgLAAgPQAAgQALgKQAKgLAQAAQAQAAAKALQALAKAAAQQAAAPgLALQgKAKgQAAQgQAAgKgKgAlnHEQgKgLgBgPQABgQAKgKQALgLAPAAQAQAAAKALQALAKAAAQQAAAPgLALQgKAKgQAAQgPAAgLgKgAEzEYQgLgKAAgQQAAgPALgKQALgLAPAAQAQAAAKALQAMAKAAAPQAAAQgMAKQgKALgQAAQgPAAgLgLgABVEYQgLgKAAgQQAAgPALgKQAKgLAQAAQAPAAALALQALAKAAAPQAAAQgLAKQgLALgPAAQgQAAgKgLgAiIEYQgLgKAAgQQAAgPALgKQAKgLAQAAQAQAAAKALQALAKAAAPQAAAQgLAKQgKALgQAAQgQAAgKgLgAlnEYQgKgKgBgQQABgPAKgKQALgLAPAAQAQAAAKALQALAKAAAPQAAAQgLAKQgKALgQAAQgPAAgLgLgAEzBvQgLgLAAgPQAAgPALgLQALgLAPAAQAQAAAKALQAMALAAAPQAAAPgMALQgKAKgQAAQgPAAgLgKgABVBvQgLgLAAgPQAAgPALgLQAKgLAQAAQAPAAALALQALALAAAPQAAAPgLALQgLAKgPAAQgQAAgKgKgAiIBvQgLgLAAgPQAAgPALgLQAKgLAQAAQAQAAAKALQALALAAAPQAAAPgLALQgKAKgQAAQgQAAgKgKgAlnBvQgKgLgBgPQABgPAKgLQALgLAPAAQAQAAAKALQALALAAAPQAAAPgLALQgKAKgQAAQgPAAgLgKgAEzg6QgLgLAAgPQAAgPALgKQALgLAPAAQAQAAAKALQAMAKAAAPQAAAPgMALQgKALgQAAQgPAAgLgLgABVg6QgLgLAAgPQAAgPALgKQAKgLAQAAQAPAAALALQALAKAAAPQAAAPgLALQgLALgPAAQgQAAgKgLgAiIg6QgLgLAAgPQAAgPALgKQAKgLAQAAQAQAAAKALQALAKAAAPQAAAPgLALQgKALgQAAQgQAAgKgLgAlng6QgKgLgBgPQABgPAKgKQALgLAPAAQAQAAAKALQALAKAAAPQAAAPgLALQgKALgQAAQgPAAgLgLgAEzjlQgLgLAAgPQAAgPALgLQALgLAPAAQAQAAAKALQAMALAAAPQAAAPgMALQgKALgQAAQgPAAgLgLgABVjlQgLgLAAgPQAAgPALgLQAKgLAQAAQAPAAALALQALALAAAPQAAAPgLALQgLALgPAAQgQAAgKgLgAiIjlQgLgLAAgPQAAgPALgLQAKgLAQAAQAQAAAKALQALALAAAPQAAAPgLALQgKALgQAAQgQAAgKgLgAlnjlQgKgLgBgPQABgPAKgLQALgLAPAAQAQAAAKALQALALAAAPQAAAPgLALQgKALgQAAQgPAAgLgLgAEzmPQgLgKAAgQQAAgPALgKQALgLAPAAQAQAAAKALQAMAKAAAPQAAAQgMAKQgKALgQAAQgPAAgLgLgABVmPQgLgKAAgQQAAgPALgKQAKgLAQAAQAPAAALALQALAKAAAPQAAAQgLAKQgLALgPAAQgQAAgKgLgAiImPQgLgKAAgQQAAgPALgKQAKgLAQAAQAQAAAKALQALAKAAAPQAAAQgLAKQgKALgQAAQgQAAgKgLgAlnmPQgKgKgBgQQABgPAKgKQALgLAPAAQAQAAAKALQALAKAAAPQAAAQgLAKQgKALgQAAQgPAAgLgLg"), this.shape.setTransform(-100, 0), this.shape_1 = new A.Shape, this.shape_1.graphics.f("#8EC640").s().p("ANeHEQgLgLAAgPQAAgPALgLQAMgLAOAAQAQAAALALQALAKAAAQQAAAPgLALQgLAKgQAAQgOAAgMgKgAKBHEQgMgLAAgPQAAgQAMgKQAKgLAPAAQAQAAAKALQAMAKAAAQQAAAPgMALQgKAKgQAAQgPAAgKgKgAGiHEQgLgLAAgPQAAgQALgKQALgLAQAAQAPAAALALQAKALABAPQgBAPgKALQgLAKgPAAQgQAAgLgKgADEHEQgLgLAAgPQAAgQALgKQAKgLAQAAQAQAAAKALQALAKAAAQQAAAPgLALQgKAKgQAAQgQAAgKgKgAgZHEQgLgLAAgPQAAgQALgKQALgLAOAAQAPAAALALQALAKAAAQQAAAPgLALQgLAKgPAAQgOAAgLgKgAj3HEQgLgLAAgPQAAgQALgKQAKgLAQAAQAPAAALALQAKAKABAQQgBAPgKALQgLAKgPAAQgQAAgKgKgAnWHEQgLgLABgPQgBgQALgKQALgLAPAAQAQAAALALQALAKgBAQQABAPgLALQgLAKgQAAQgPAAgLgKgAq0HEQgLgLAAgPQAAgQALgKQALgLAPAAQAPAAALALQALAKAAAQQAAAPgLALQgLAKgPAAQgPAAgLgKgAuSHEQgLgLAAgPQAAgQALgKQALgLAPAAQAPAAALALQALAKAAAQQAAAPgLALQgLAKgPAAQgPAAgLgKgANeEYQgLgKAAgQQAAgPALgKQAMgLAOAAQAQAAALALQALAKAAAPQAAAQgLAKQgLALgQAAQgOAAgMgLgAKBEYQgMgKAAgQQAAgPAMgKQAKgLAPAAQAQAAAKALQAMAKAAAPQAAAQgMAKQgKALgQAAQgPAAgKgLgAGiEYQgLgKAAgQQAAgPALgKQALgLAQAAQAPAAALALQAKAKABAPQgBAQgKAKQgLALgPAAQgQAAgLgLgADEEYQgLgKAAgQQAAgPALgKQAKgLAQAAQAQAAAKALQALAKAAAPQAAAQgLAKQgKALgQAAQgQAAgKgLgAgZEYQgLgKAAgQQAAgPALgKQALgLAOAAQAPAAALALQALAKAAAPQAAAQgLAKQgLALgPAAQgOAAgLgLgAj3EYQgLgKAAgQQAAgPALgKQAKgLAQAAQAPAAALALQAKAKABAPQgBAQgKAKQgLALgPAAQgQAAgKgLgAnWEYQgLgKABgQQgBgPALgKQALgLAPAAQAQAAALALQALAKgBAPQABAQgLAKQgLALgQAAQgPAAgLgLgAq0EYQgLgKAAgQQAAgPALgKQALgLAPAAQAPAAALALQALAKAAAPQAAAQgLAKQgLALgPAAQgPAAgLgLgAuSEYQgLgKAAgQQAAgPALgKQALgLAPAAQAPAAALALQALAKAAAPQAAAQgLAKQgLALgPAAQgPAAgLgLgANeBvQgLgLAAgPQAAgPALgLQAMgLAOAAQAQAAALALQALALAAAPQAAAPgLALQgLAKgQAAQgOAAgMgKgAKBBvQgMgLAAgPQAAgPAMgLQAKgLAPAAQAQAAAKALQAMALAAAPQAAAPgMALQgKAKgQAAQgPAAgKgKgAGiBvQgLgLAAgPQAAgPALgLQALgLAQAAQAPAAALALQAKALABAPQgBAPgKALQgLAKgPAAQgQAAgLgKgADEBvQgLgLAAgPQAAgPALgLQAKgLAQAAQAQAAAKALQALALAAAPQAAAPgLALQgKAKgQAAQgQAAgKgKgAgZBvQgLgLAAgPQAAgPALgLQALgLAOAAQAPAAALALQALALAAAPQAAAPgLALQgLAKgPAAQgOAAgLgKgAj3BvQgLgLAAgPQAAgPALgLQAKgLAQAAQAPAAALALQAKALABAPQgBAPgKALQgLAKgPAAQgQAAgKgKgAnWBvQgLgLABgPQgBgPALgLQALgLAPAAQAQAAALALQALALgBAPQABAPgLALQgLAKgQAAQgPAAgLgKgAq0BvQgLgLAAgPQAAgPALgLQALgLAPAAQAPAAALALQALALAAAPQAAAPgLALQgLAKgPAAQgPAAgLgKgAuSBvQgLgLAAgPQAAgPALgLQALgLAPAAQAPAAALALQALALAAAPQAAAPgLALQgLAKgPAAQgPAAgLgKgANeg6QgLgLAAgPQAAgPALgKQAMgLAOAAQAQAAALALQALAKAAAPQAAAPgLALQgLALgQAAQgOAAgMgLgAKBg6QgMgLAAgPQAAgPAMgKQAKgLAPAAQAQAAAKALQAMAKAAAPQAAAPgMALQgKALgQAAQgPAAgKgLgAGig6QgLgLAAgPQAAgPALgKQALgLAQAAQAPAAALALQAKAKABAPQgBAPgKALQgLALgPAAQgQAAgLgLgADEg6QgLgLAAgPQAAgPALgKQAKgLAQAAQAQAAAKALQALAKAAAPQAAAPgLALQgKALgQAAQgQAAgKgLgAgZg6QgLgLAAgPQAAgPALgKQALgLAOAAQAPAAALALQALAKAAAPQAAAPgLALQgLALgPAAQgOAAgLgLgAj3g6QgLgLAAgPQAAgPALgKQAKgLAQAAQAPAAALALQAKAKABAPQgBAPgKALQgLALgPAAQgQAAgKgLgAnWg6QgLgLABgPQgBgPALgKQALgLAPAAQAQAAALALQALAKgBAPQABAPgLALQgLALgQAAQgPAAgLgLgAq0g6QgLgLAAgPQAAgPALgKQALgLAPAAQAPAAALALQALAKAAAPQAAAPgLALQgLALgPAAQgPAAgLgLgAuSg6QgLgLAAgPQAAgPALgKQALgLAPAAQAPAAALALQALAKAAAPQAAAPgLALQgLALgPAAQgPAAgLgLgANejlQgLgLAAgPQAAgPALgLQAMgLAOAAQAQAAALALQALALAAAPQAAAPgLALQgLALgQAAQgOAAgMgLgAKBjlQgMgLAAgPQAAgPAMgLQAKgLAPAAQAQAAAKALQAMALAAAPQAAAPgMALQgKALgQAAQgPAAgKgLgAGijlQgLgLAAgPQAAgPALgLQALgLAQAAQAPAAALALQAKALABAPQgBAPgKALQgLALgPAAQgQAAgLgLgADEjlQgLgLAAgPQAAgPALgLQAKgLAQAAQAQAAAKALQALALAAAPQAAAPgLALQgKALgQAAQgQAAgKgLgAgZjlQgLgLAAgPQAAgPALgLQALgLAOAAQAPAAALALQALALAAAPQAAAPgLALQgLALgPAAQgOAAgLgLgAj3jlQgLgLAAgPQAAgPALgLQAKgLAQAAQAPAAALALQAKALABAPQgBAPgKALQgLALgPAAQgQAAgKgLgAnWjlQgLgLABgPQgBgPALgLQALgLAPAAQAQAAALALQALALgBAPQABAPgLALQgLALgQAAQgPAAgLgLgAq0jlQgLgLAAgPQAAgPALgLQALgLAPAAQAPAAALALQALALAAAPQAAAPgLALQgLALgPAAQgPAAgLgLgAuSjlQgLgLAAgPQAAgPALgLQALgLAPAAQAPAAALALQALALAAAPQAAAPgLALQgLALgPAAQgPAAgLgLgANemPQgLgKAAgQQAAgPALgKQAMgLAOAAQAQAAALALQALAKAAAPQAAAQgLAKQgLALgQAAQgOAAgMgLgAKBmPQgMgKAAgQQAAgPAMgKQAKgLAPAAQAQAAAKALQAMAKAAAPQAAAQgMAKQgKALgQAAQgPAAgKgLgAGimPQgLgKAAgQQAAgPALgKQALgLAQAAQAPAAALALQAKAKABAPQgBAQgKAKQgLALgPAAQgQAAgLgLgADEmPQgLgKAAgQQAAgPALgKQAKgLAQAAQAQAAAKALQALAKAAAPQAAAQgLAKQgKALgQAAQgQAAgKgLgAgZmPQgLgKAAgQQAAgPALgKQALgLAOAAQAPAAALALQALAKAAAPQAAAQgLAKQgLALgPAAQgOAAgLgLgAj3mPQgLgKAAgQQAAgPALgKQAKgLAQAAQAPAAALALQAKAKABAPQgBAQgKAKQgLALgPAAQgQAAgKgLgAnWmPQgLgKABgQQgBgPALgKQALgLAPAAQAQAAALALQALAKgBAPQABAQgLAKQgLALgQAAQgPAAgLgLgAq0mPQgLgKAAgQQAAgPALgKQALgLAPAAQAPAAALALQALAKAAAPQAAAQgLAKQgLALgPAAQgPAAgLgLgAuSmPQgLgKAAgQQAAgPALgKQALgLAPAAQAPAAALALQALAKAAAPQAAAQgLAKQgLALgPAAQgPAAgLgLg"), this.shape_1.setTransform(44.5, 0), this.timeline.addTween(A.Tween.get({}).to({state: [{t: this.shape_1}, {t: this.shape}]}).wait(90))
	}).prototype = a = new A.MovieClip, a.nominalBounds = new A.Rectangle(-137, -46.2, 274.1, 92.5), (t.BGArrowAppear = function (e, i, n) {
		this.initialize(e, i, n, {}), this.frame_59 = function () {
			this.stop()
		}, this.timeline.addTween(A.Tween.get(this).wait(59).call(this.frame_59).wait(1)), this.instance = new t.BGArrow, this.instance.parent = this, this.instance.setTransform(137.1, 0), this.instance.alpha = 0, this.timeline.addTween(A.Tween.get(this.instance).wait(1).to({
			x: 121.9,
			alpha: .393
		}, 0).wait(1).to({x: 107.3, alpha: .772}, 0).wait(1).to({
			x: 93.3,
			alpha: 1
		}, 0).wait(1).to({x: 79.7}, 0).wait(1).to({x: 66.7}, 0).wait(1).to({x: 54.3}, 0).wait(1).to({x: 42.3}, 0).wait(1).to({x: 30.9}, 0).wait(1).to({x: 20}, 0).wait(1).to({x: 9.7}, 0).wait(1).to({x: -.1}, 0).wait(1).to({x: -9.4}, 0).wait(1).to({x: -18.2}, 0).wait(1).to({x: -26.4}, 0).wait(1).to({x: -34.1}, 0).wait(1).to({x: -41.3}, 0).wait(1).to({x: -47.9}, 0).wait(1).to({x: -54}, 0).wait(1).to({x: -59.6}, 0).wait(1).to({x: -64.6}, 0).wait(1).to({x: -69.1}, 0).wait(1).to({x: -73.1}, 0).wait(1).to({x: -76.5}, 0).wait(1).to({x: -79.5}, 0).wait(1).to({x: -81.9}, 0).wait(1).to({x: -83.7}, 0).wait(1).to({x: -85}, 0).wait(1).to({x: -85.8}, 0).wait(1).to({x: -86.1}, 0).wait(31)), this.instance_1 = new t.BGArrow, this.instance_1.parent = this, this.instance_1.setTransform(-40, 0), this.instance_1.alpha = 0, this.instance_1._off = !0, this.timeline.addTween(A.Tween.get(this.instance_1).wait(21).to({_off: !1}, 0).wait(1).to({alpha: .5}, 0).wait(1).to({alpha: 1}, 0).wait(1).to({x: -43}, 0).wait(36)), this.instance_2 = new t.BGArrow, this.instance_2.parent = this, this.instance_2.setTransform(3, 0), this.instance_2.alpha = 0, this.instance_2._off = !0, this.timeline.addTween(A.Tween.get(this.instance_2).wait(16).to({_off: !1}, 0).wait(1).to({alpha: .5}, 0).wait(1).to({alpha: 1}, 0).wait(1).to({x: 0}, 0).wait(41)), this.instance_3 = new t.BGArrow, this.instance_3.parent = this, this.instance_3.setTransform(46.1, 0), this.instance_3.alpha = 0, this.instance_3._off = !0, this.timeline.addTween(A.Tween.get(this.instance_3).wait(10).to({_off: !1}, 0).wait(1).to({alpha: .5}, 0).wait(1).to({alpha: 1}, 0).wait(1).to({x: 43.1}, 0).wait(47)), this.instance_4 = new t.BGArrow, this.instance_4.parent = this, this.instance_4.setTransform(89.1, 0), this.instance_4.alpha = 0, this.instance_4._off = !0, this.timeline.addTween(A.Tween.get(this.instance_4).wait(5).to({_off: !1}, 0).wait(1).to({alpha: .5}, 0).wait(1).to({alpha: 1}, 0).wait(1).to({x: 86.1}, 0).wait(52))
	}).prototype = a = new A.MovieClip, a.nominalBounds = new A.Rectangle(123.6, -21.5, 27, 43), (t.WHEEL = function (e, i, n) {
		this.initialize(e, i, n, {}), this.frame_99 = function () {
			this.stop()
		}, this.timeline.addTween(A.Tween.get(this).wait(99).call(this.frame_99).wait(31)), this.instance = new t.Rays, this.instance.parent = this, this.instance.setTransform(5, -5.5, .999, .999, 14.3), this.instance.alpha = 0, this.instance._off = !0, this.timeline.addTween(A.Tween.get(this.instance).wait(32).to({_off: !1}, 0).wait(1).to({
			scaleX: 1,
			scaleY: 1,
			rotation: 14.4,
			x: 4.9,
			alpha: .002
		}, 0).wait(1).to({rotation: 14.3, alpha: .008}, 0).wait(1).to({
			rotation: 14.2,
			alpha: .017
		}, 0).wait(1).to({rotation: 14, alpha: .03}, 0).wait(1).to({
			rotation: 13.7,
			alpha: .047
		}, 0).wait(1).to({rotation: 13.4, alpha: .068}, 0).wait(1).to({
			rotation: 13.1,
			alpha: .093
		}, 0).wait(1).to({rotation: 12.7, alpha: .121}, 0).wait(1).to({
			rotation: 12.2,
			alpha: .153
		}, 0).wait(1).to({rotation: 11.7, alpha: .189}, 0).wait(1).to({
			rotation: 11.1,
			alpha: .229
		}, 0).wait(1).to({rotation: 10.5, alpha: .272}, 0).wait(1).to({
			rotation: 9.8,
			alpha: .319
		}, 0).wait(1).to({rotation: 9.1, alpha: .37}, 0).wait(1).to({
			rotation: 8.3,
			alpha: .425
		}, 0).wait(1).to({rotation: 7.4, alpha: .484}, 0).wait(1).to({
			rotation: 6.5,
			alpha: .546
		}, 0).wait(1).to({rotation: 5.6, alpha: .612}, 0).wait(1).to({
			rotation: 4.6,
			alpha: .682
		}, 0).wait(1).to({rotation: 3.5, alpha: .756}, 0).wait(1).to({
			rotation: 2.4,
			alpha: .834
		}, 0).wait(1).to({rotation: 1.2, alpha: .915}, 0).wait(1).to({
			rotation: 0,
			alpha: 1
		}, 0).to({_off: !0}, 1).wait(74)), this.instance_1 = new t.Flat, this.instance_1.parent = this, this.instance_1.setTransform(-4.5, 0, 1, 1, -4, 0, 0, -1.5, -.1), this.instance_1.alpha = 0, this.instance_1._off = !0, this.timeline.addTween(A.Tween.get(this.instance_1).wait(32).to({_off: !1}, 0).wait(1).to({
			regX: 0,
			regY: 0,
			x: -3,
			alpha: .002
		}, 0).wait(1).to({alpha: .008}, 0).wait(1).to({
			rotation: -3.9,
			alpha: .017
		}, 0).wait(1).to({alpha: .03}, 0).wait(1).to({rotation: -3.8, alpha: .047}, 0).wait(1).to({
			rotation: -3.7,
			alpha: .068
		}, 0).wait(1).to({rotation: -3.6, alpha: .093}, 0).wait(1).to({
			rotation: -3.5,
			alpha: .121
		}, 0).wait(1).to({rotation: -3.4, alpha: .153}, 0).wait(1).to({
			rotation: -3.2,
			alpha: .189
		}, 0).wait(1).to({rotation: -3.1, alpha: .229}, 0).wait(1).to({
			rotation: -2.9,
			alpha: .272
		}, 0).wait(1).to({rotation: -2.7, alpha: .319}, 0).wait(1).to({
			rotation: -2.5,
			alpha: .37
		}, 0).wait(1).to({rotation: -2.3, alpha: .425}, 0).wait(1).to({
			rotation: -2.1,
			y: .1,
			alpha: .484
		}, 0).wait(1).to({rotation: -1.8, alpha: .546}, 0).wait(1).to({
			rotation: -1.6,
			alpha: .612
		}, 0).wait(1).to({rotation: -1.3, alpha: .682}, 0).wait(1).to({
			rotation: -1,
			alpha: .756
		}, 0).wait(1).to({rotation: -.7, alpha: .834}, 0).wait(1).to({
			rotation: -.3,
			alpha: .915
		}, 0).wait(1).to({
			rotation: 0,
			alpha: 1
		}, 0).to({_off: !0}, 1).wait(74)), this.instance_2 = new t.Stroke, this.instance_2.parent = this, this.instance_2.setTransform(-2, -2.9, 1, 1, 144), this.instance_2.alpha = 0, this.timeline.addTween(A.Tween.get(this.instance_2).wait(1).to({
			rotation: 144.1,
			y: -3
		}, 0).wait(1).to({rotation: 144.3, alpha: .001}, 0).wait(1).to({
			rotation: 144.6,
			alpha: .003
		}, 0).wait(1).to({rotation: 145.1, alpha: .005}, 0).wait(1).to({
			rotation: 145.8,
			alpha: .008
		}, 0).wait(1).to({rotation: 146.6, alpha: .012}, 0).wait(1).to({
			rotation: 147.5,
			alpha: .016
		}, 0).wait(1).to({rotation: 148.6, alpha: .021}, 0).wait(1).to({
			rotation: 149.8,
			alpha: .027
		}, 0).wait(1).to({rotation: 151.1, alpha: .033}, 0).wait(1).to({
			rotation: 152.6,
			alpha: .04
		}, 0).wait(1).to({rotation: 154.3, alpha: .048}, 0).wait(1).to({
			rotation: 156.1,
			alpha: .056
		}, 0).wait(1).to({rotation: 158, alpha: .065}, 0).wait(1).to({
			rotation: 160.1,
			alpha: .074
		}, 0).wait(1).to({rotation: 162.3, alpha: .085}, 0).wait(1).to({
			rotation: 164.6,
			alpha: .096
		}, 0).wait(1).to({rotation: 167.1, alpha: .107}, 0).wait(1).to({
			rotation: 169.8,
			alpha: .119
		}, 0).wait(1).to({rotation: 172.6, alpha: .132}, 0).wait(1).to({
			rotation: 175.5,
			alpha: .146
		}, 0).wait(1).to({rotation: 178.6, alpha: .16}, 0).wait(1).to({
			rotation: 181.8,
			alpha: .175
		}, 0).wait(1).to({rotation: 185.1, alpha: .19}, 0).wait(1).to({
			rotation: 188.6,
			alpha: .207
		}, 0).wait(1).to({rotation: 192.3, alpha: .223}, 0).wait(1).to({
			rotation: 196.1,
			x: -2.1,
			alpha: .241
		}, 0).wait(1).to({rotation: 200, alpha: .259}, 0).wait(1).to({
			rotation: 204,
			alpha: .278
		}, 0).wait(1).to({rotation: 208.3, alpha: .298}, 0).wait(1).to({
			rotation: 212.6,
			alpha: .318
		}, 0).wait(1).to({rotation: 217.1, alpha: .339}, 0).wait(1).to({
			rotation: 221.8,
			alpha: .36
		}, 0).wait(1).to({rotation: 226.5, alpha: .382}, 0).wait(1).to({
			rotation: 231.5,
			alpha: .405
		}, 0).wait(1).to({rotation: 236.5, alpha: .428}, 0).wait(1).to({
			rotation: 241.7,
			alpha: .453
		}, 0).wait(1).to({rotation: 247.1, alpha: .477}, 0).wait(1).to({
			rotation: 252.6,
			y: -3.1,
			alpha: .503
		}, 0).wait(1).to({rotation: 258.2, x: -2, alpha: .529}, 0).wait(1).to({
			rotation: 264,
			alpha: .556
		}, 0).wait(1).to({rotation: 270, alpha: .583}, 0).wait(1).to({
			rotation: 276,
			alpha: .611
		}, 0).wait(1).to({rotation: 282.2, alpha: .64}, 0).wait(1).to({
			rotation: 288.6,
			alpha: .669
		}, 0).wait(1).to({rotation: 295.1, alpha: .699}, 0).wait(1).to({
			rotation: 301.7,
			alpha: .73
		}, 0).wait(1).to({rotation: 308.5, alpha: .762}, 0).wait(1).to({
			rotation: 315.4,
			alpha: .794
		}, 0).wait(1).to({rotation: 322.5, alpha: .826}, 0).wait(1).to({
			rotation: 329.7,
			alpha: .86
		}, 0).wait(1).to({rotation: 337.1, alpha: .894}, 0).wait(1).to({
			rotation: 344.6,
			alpha: .929
		}, 0).wait(1).to({rotation: 352.2, x: -1.9, alpha: .964}, 0).wait(1).to({
			rotation: 360,
			alpha: 1
		}, 0).to({_off: !0}, 1).wait(74)), this.instance_3 = new t.ShapesA, this.instance_3.parent = this, this.instance_3.setTransform(30.5, -6.5, .999, .999, -26.3), this.instance_3.alpha = 0, this.instance_3._off = !0, this.timeline.addTween(A.Tween.get(this.instance_3).wait(16).to({_off: !1}, 0).wait(1).to({
			scaleX: 1,
			scaleY: 1,
			rotation: -26.4,
			alpha: .001
		}, 0).wait(1).to({rotation: -26.3, alpha: .003}, 0).wait(1).to({
			rotation: -26.2,
			alpha: .006
		}, 0).wait(1).to({rotation: -26.1, alpha: .011}, 0).wait(1).to({
			rotation: -26,
			alpha: .016
		}, 0).wait(1).to({rotation: -25.8, alpha: .024}, 0).wait(1).to({
			rotation: -25.5,
			alpha: .032
		}, 0).wait(1).to({rotation: -25.3, alpha: .042}, 0).wait(1).to({
			rotation: -25,
			alpha: .053
		}, 0).wait(1).to({rotation: -24.7, alpha: .066}, 0).wait(1).to({
			rotation: -24.3,
			alpha: .08
		}, 0).wait(1).to({rotation: -23.9, alpha: .095}, 0).wait(1).to({
			rotation: -23.5,
			alpha: .111
		}, 0).wait(1).to({rotation: -23, alpha: .129}, 0).wait(1).to({
			rotation: -22.5,
			alpha: .148
		}, 0).wait(1).to({rotation: -22, alpha: .168}, 0).wait(1).to({
			rotation: -21.4,
			alpha: .19
		}, 0).wait(1).to({rotation: -20.8, alpha: .213}, 0).wait(1).to({
			rotation: -20.1,
			alpha: .237
		}, 0).wait(1).to({rotation: -19.5, alpha: .263}, 0).wait(1).to({
			rotation: -18.7,
			alpha: .29
		}, 0).wait(1).to({rotation: -18, alpha: .318}, 0).wait(1).to({
			rotation: -17.2,
			alpha: .348
		}, 0).wait(1).to({rotation: -16.4, alpha: .379}, 0).wait(1).to({
			rotation: -15.6,
			alpha: .411
		}, 0).wait(1).to({rotation: -14.7, alpha: .444}, 0).wait(1).to({
			rotation: -13.7,
			alpha: .479
		}, 0).wait(1).to({rotation: -12.8, alpha: .515}, 0).wait(1).to({
			rotation: -11.8,
			alpha: .553
		}, 0).wait(1).to({rotation: -10.8, alpha: .592}, 0).wait(1).to({
			rotation: -9.7,
			alpha: .632
		}, 0).wait(1).to({rotation: -8.6, alpha: .673}, 0).wait(1).to({
			rotation: -7.5,
			alpha: .716
		}, 0).wait(1).to({rotation: -6.3, alpha: .76}, 0).wait(1).to({
			rotation: -5.1,
			alpha: .805
		}, 0).wait(1).to({rotation: -3.9, alpha: .852}, 0).wait(1).to({
			rotation: -2.6,
			alpha: .9
		}, 0).wait(1).to({rotation: -1.3, alpha: .949}, 0).wait(1).to({
			rotation: 0,
			alpha: 1
		}, 0).to({_off: !0}, 1).wait(74)), this.instance_4 = new t.ShapesB, this.instance_4.parent = this, this.instance_4.setTransform(9.5, 6.5, 1, 1, 36), this.instance_4.alpha = 0, this.timeline.addTween(A.Tween.get(this.instance_4).wait(1).to({x: 9.4}, 0).wait(1).to({alpha: .001}, 0).wait(1).to({
			rotation: 35.9,
			alpha: .003
		}, 0).wait(1).to({rotation: 35.8, alpha: .005}, 0).wait(1).to({
			rotation: 35.7,
			alpha: .008
		}, 0).wait(1).to({rotation: 35.6, alpha: .012}, 0).wait(1).to({
			rotation: 35.4,
			alpha: .016
		}, 0).wait(1).to({rotation: 35.2, alpha: .021}, 0).wait(1).to({
			rotation: 35,
			alpha: .027
		}, 0).wait(1).to({rotation: 34.8, alpha: .033}, 0).wait(1).to({
			rotation: 34.6,
			alpha: .04
		}, 0).wait(1).to({rotation: 34.3, alpha: .048}, 0).wait(1).to({
			rotation: 34,
			alpha: .056
		}, 0).wait(1).to({rotation: 33.7, alpha: .065}, 0).wait(1).to({
			rotation: 33.3,
			alpha: .074
		}, 0).wait(1).to({rotation: 33, alpha: .085}, 0).wait(1).to({
			rotation: 32.6,
			alpha: .096
		}, 0).wait(1).to({rotation: 32.1, alpha: .107}, 0).wait(1).to({
			rotation: 31.7,
			alpha: .119
		}, 0).wait(1).to({rotation: 31.2, alpha: .132}, 0).wait(1).to({
			rotation: 30.8,
			alpha: .146
		}, 0).wait(1).to({rotation: 30.2, alpha: .16}, 0).wait(1).to({
			rotation: 29.7,
			alpha: .175
		}, 0).wait(1).to({rotation: 29.1, alpha: .19}, 0).wait(1).to({
			rotation: 28.6,
			alpha: .207
		}, 0).wait(1).to({rotation: 28, alpha: .223}, 0).wait(1).to({
			rotation: 27.3,
			alpha: .241
		}, 0).wait(1).to({rotation: 26.7, alpha: .259}, 0).wait(1).to({
			rotation: 26,
			alpha: .278
		}, 0).wait(1).to({rotation: 25.3, alpha: .298}, 0).wait(1).to({
			rotation: 24.6,
			alpha: .318
		}, 0).wait(1).to({rotation: 23.8, alpha: .339}, 0).wait(1).to({
			rotation: 23,
			alpha: .36
		}, 0).wait(1).to({rotation: 22.2, alpha: .382}, 0).wait(1).to({
			rotation: 21.4,
			alpha: .405
		}, 0).wait(1).to({rotation: 20.6, alpha: .428}, 0).wait(1).to({
			rotation: 19.7,
			alpha: .453
		}, 0).wait(1).to({rotation: 18.8, alpha: .477}, 0).wait(1).to({
			rotation: 17.9,
			alpha: .503
		}, 0).wait(1).to({rotation: 17, alpha: .529}, 0).wait(1).to({
			rotation: 16,
			alpha: .556
		}, 0).wait(1).to({rotation: 15, alpha: .583}, 0).wait(1).to({
			rotation: 14,
			alpha: .611
		}, 0).wait(1).to({rotation: 13, alpha: .64}, 0).wait(1).to({
			rotation: 11.9,
			alpha: .669
		}, 0).wait(1).to({rotation: 10.8, alpha: .699}, 0).wait(1).to({
			rotation: 9.7,
			alpha: .73
		}, 0).wait(1).to({rotation: 8.6, alpha: .762}, 0).wait(1).to({
			rotation: 7.4,
			alpha: .794
		}, 0).wait(1).to({rotation: 6.2, alpha: .826}, 0).wait(1).to({
			rotation: 5,
			alpha: .86
		}, 0).wait(1).to({rotation: 3.8, alpha: .894}, 0).wait(1).to({
			rotation: 2.6,
			alpha: .929
		}, 0).wait(1).to({rotation: 1.3, alpha: .964}, 0).wait(1).to({
			rotation: 0,
			alpha: 1
		}, 0).to({_off: !0}, 1).wait(74)), this.instance_5 = new t.BirdFloatLoop, this.instance_5.parent = this, this.instance_5.setTransform(-620.4, 211.2, 1, 1, 0, 0, 0, -603.1, 220.9), this.instance_5._off = !0, this.timeline.addTween(A.Tween.get(this.instance_5).wait(100).to({_off: !1}, 0).wait(30)), this.instance_6 = new t.BirdGradMask, this.instance_6.parent = this, this.instance_6.setTransform(-17.3, -9.7), this.instance_6._off = !0, this.timeline.addTween(A.Tween.get(this.instance_6).wait(70).to({_off: !1}, 0).to({_off: !0}, 30).wait(30)), this.instance_7 = new t.BirdIntro, this.instance_7.parent = this, this.instance_7.setTransform(-17.3, -9.7), this.instance_7._off = !0, this.timeline.addTween(A.Tween.get(this.instance_7).wait(39).to({_off: !1}, 0).to({_off: !0}, 31).wait(60)), this.instance_8 = new t.WheelRayMotion15, this.instance_8.parent = this, this.instance_8.setTransform(5, -5.5), this.instance_8._off = !0, this.timeline.addTween(A.Tween.get(this.instance_8).wait(56).to({_off: !1}, 0).to({_off: !0}, 44).wait(30)), this.instance_9 = new t.WheelFlatMotion6, this.instance_9.parent = this, this.instance_9.setTransform(-4.5, 0), this.instance_9._off = !0, this.timeline.addTween(A.Tween.get(this.instance_9).wait(56).to({_off: !1}, 0).to({_off: !0}, 44).wait(30)), this.instance_10 = new t.WheelStrokeMotion360, this.instance_10.parent = this, this.instance_10.setTransform(-2, -3), this.instance_10._off = !0, this.timeline.addTween(A.Tween.get(this.instance_10).wait(56).to({_off: !1}, 0).to({_off: !0}, 44).wait(30)), this.instance_11 = new t.WheelShapesAMotion88, this.instance_11.parent = this, this.instance_11.setTransform(30.5, -6.5), this.instance_11._off = !0, this.timeline.addTween(A.Tween.get(this.instance_11).wait(56).to({_off: !1}, 0).to({_off: !0}, 44).wait(30)), this.instance_12 = new t.WheelShapesBMotion15, this.instance_12.parent = this, this.instance_12.setTransform(9.5, 6.5), this.instance_12._off = !0, this.timeline.addTween(A.Tween.get(this.instance_12).wait(56).to({_off: !1}, 0).to({_off: !0}, 44).wait(30))
	}).prototype = a = new A.MovieClip, a.nominalBounds = new A.Rectangle(-385.6, -384.2, 790.1, 781.4), (t.DVGHomepage1920x790200805 = function (e, i, n) {
		this.initialize(e, i, n, {}), this.frame_129 = function () {
			this.stop()
		}, this.timeline.addTween(A.Tween.get(this).wait(129).call(this.frame_129).wait(1)), this.instance = new t.TextMotion, this.instance.parent = this, this.instance.setTransform(795.2, 351.6), this.instance._off = !0, this.timeline.addTween(A.Tween.get(this.instance).wait(54).to({_off: !1}, 0).wait(76)), this.instance_1 = new t.TextArrowLoop, this.instance_1.parent = this, this.instance_1.setTransform(671.2, 667.5, 1, 1, 0, 0, 180, 137.1, 0), this.instance_1._off = !0, this.timeline.addTween(A.Tween.get(this.instance_1).wait(54).to({_off: !1}, 0).wait(76)), this.instance_2 = new t.WHEEL, this.instance_2.parent = this, this.instance_2.setTransform(597.5, 378), this.instance_2._off = !0, this.timeline.addTween(A.Tween.get(this.instance_2).wait(19).to({_off: !1}, 0).wait(111)), this.instance_3 = new t.BGArrowAppear, this.instance_3.parent = this, this.instance_3.setTransform(1777.9, 749.4), this.instance_3._off = !0, this.timeline.addTween(A.Tween.get(this.instance_3).wait(33).to({_off: !1}, 0).wait(97)), this.instance_4 = new t.BGDots, this.instance_4.parent = this, this.instance_4.setTransform(1795.3, 32.1, 1, 1, 90, 0, 0, 0, -2.1), this.instance_4.alpha = 0, this.instance_4._off = !0, this.timeline.addTween(A.Tween.get(this.instance_4).wait(36).to({_off: !1}, 0).wait(1).to({
			regY: 0,
			x: 1793.2,
			y: 51.9,
			alpha: .138
		}, 0).wait(1).to({y: 70.3, alpha: .265}, 0).wait(1).to({y: 87.2, alpha: .383}, 0).wait(1).to({
			y: 102.6,
			alpha: .49
		}, 0).wait(1).to({y: 116.6, alpha: .587}, 0).wait(1).to({y: 129.1, alpha: .673}, 0).wait(1).to({
			y: 140.1,
			alpha: .75
		}, 0).wait(1).to({y: 149.6, alpha: .816}, 0).wait(1).to({y: 157.7, alpha: .872}, 0).wait(1).to({
			y: 164.3,
			alpha: .918
		}, 0).wait(1).to({y: 169.5, alpha: .954}, 0).wait(1).to({y: 173.2, alpha: .98}, 0).wait(1).to({
			y: 175.4,
			alpha: .995
		}, 0).wait(1).to({
			y: 176.1,
			alpha: 1
		}, 0).wait(1).to({x: 1795.3}, 0).wait(79)), this.instance_5 = new t.BGDots, this.instance_5.parent = this, this.instance_5.setTransform(98.9, 705.7), this.instance_5._off = !0, this.timeline.addTween(A.Tween.get(this.instance_5).wait(29).to({_off: !1}, 0).wait(1).to({x: 117.5}, 0).wait(1).to({x: 134.7}, 0).wait(1).to({x: 150.6}, 0).wait(1).to({x: 165}, 0).wait(1).to({x: 178.1}, 0).wait(1).to({x: 189.8}, 0).wait(1).to({x: 200.2}, 0).wait(1).to({x: 209.1}, 0).wait(1).to({x: 216.7}, 0).wait(1).to({x: 222.9}, 0).wait(1).to({x: 227.7}, 0).wait(1).to({x: 231.1}, 0).wait(1).to({x: 233.2}, 0).wait(1).to({x: 233.9}, 0).wait(87)), this.instance_6 = new t.Circuit2Mask, this.instance_6.parent = this, this.instance_6.setTransform(970.1, 114.4, 1, 1, 0, 0, 0, 15.3, -225.7), this.instance_6.alpha = .699, this.instance_6._off = !0, this.timeline.addTween(A.Tween.get(this.instance_6).wait(22).to({_off: !1}, 0).wait(108)), this.instance_7 = new t.Circuit1Mask, this.instance_7.parent = this, this.instance_7.setTransform(78, 383.2), this.instance_7._off = !0, this.timeline.addTween(A.Tween.get(this.instance_7).wait(22).to({_off: !1}, 0).wait(108)), this.instance_8 = new t.BGCC2Static, this.instance_8.parent = this, this.instance_8.setTransform(2421.5, 391.5), this.instance_8.alpha = .781, this.timeline.addTween(A.Tween.get(this.instance_8).wait(1).to({
			regX: -.5,
			x: 2348.6,
			alpha: .78
		}, 0).wait(1).to({x: 2276.8}, 0).wait(1).to({x: 2205.5}, 0).wait(1).to({x: 2134.8}, 0).wait(1).to({x: 2064.6}, 0).wait(1).to({x: 1995}, 0).wait(1).to({x: 1926}, 0).wait(1).to({x: 1857.5}, 0).wait(1).to({x: 1789.6}, 0).wait(1).to({x: 1722.3}, 0).wait(1).to({x: 1655.5}, 0).wait(1).to({x: 1589.3}, 0).wait(1).to({x: 1523.7}, 0).wait(1).to({x: 1458.6}, 0).wait(1).to({x: 1394.1}, 0).wait(1).to({x: 1367}, 0).wait(114)), this.instance_9 = new t.BGCC1Static, this.instance_9.parent = this, this.instance_9.setTransform(-226, 370), this.instance_9.alpha = .852, this.timeline.addTween(A.Tween.get(this.instance_9).wait(1).to({
			regX: -5.5,
			regY: 7,
			x: -200.6,
			y: 377,
			alpha: .85
		}, 0).wait(1).to({x: -169.9}, 0).wait(1).to({x: -139.5}, 0).wait(1).to({x: -109.4}, 0).wait(1).to({x: -79.5}, 0).wait(1).to({x: -49.8}, 0).wait(1).to({x: -20.3}, 0).wait(1).to({x: 8.8}, 0).wait(1).to({x: 37.8}, 0).wait(1).to({x: 66.5}, 0).wait(1).to({x: 95}, 0).wait(1).to({x: 123.2}, 0).wait(1).to({x: 151.2}, 0).wait(1).to({x: 178.9}, 0).wait(1).to({x: 206.5}, 0).wait(1).to({x: 218}, 0).wait(114)), this.instance_10 = new t.IMAGEBG1920, this.instance_10.parent = this, this.timeline.addTween(A.Tween.get(this.instance_10).wait(130))
	}).prototype = a = new A.MovieClip, a.nominalBounds = new A.Rectangle(505, 395, 3408.5, 750.5), t.properties = {
		width: 1920,
		height: 790,
		fps: 30,
		color: "#FFFFFF",
		opacity: 1,
		webfonts: {},
		manifest: [{src: "/images/DVG_Homepage_1920x790_200805_atlas_.png", id: "DVG_Homepage_1920x790_200805_atlas_"}],
		preloads: []
	}
}(lib_web = lib_web || {}, images_web = images_web || {}, createjs = createjs || {}, ss = ss || {}, AdobeAn = AdobeAn || {}),function (t, e, A, i, n) {
	var a;
	t.webFontTxtInst = {};
	var o = 0, s = 0, r = [], g = [];

	function h() {
		var t = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
		return t.gotoAndStop(this.currentFrame), t.paused = this.paused, t.framerate = this.framerate, t
	}

	function l(t, e, i) {
		var n = A.extend(t, A.MovieClip);
		return n.clone = h, n.nominalBounds = e, n.frameBounds = i, n
	}

	t.ssMetadata = [{
		name: "DVG_Homepage_640x500_200805_atlas_",
		frames: [[589, 1251, 27, 43], [1067, 0, 592, 590], [0, 1265, 587, 515], [584, 720, 480, 529], [0, 720, 582, 543], [1231, 1304, 403, 402], [1067, 592, 447, 710], [0, 0, 1065, 718], [589, 1304, 640, 468]]
	}], t.updateListCache = function (t) {
		for (var e = 0; e < t.length; e++) t[e].cacheCanvas && t[e].updateCache()
	}, t.addElementsToCache = function (t, e) {
		for (var A = t; A != exportRoot && -1 == e.indexOf(A);) A = A.parent;
		if (A != exportRoot) for (var i = t, n = e.indexOf(A); i != A;) e.splice(n, 0, i), i = i.parent, n++; else for (A = t; A != exportRoot;) e.push(A), A = A.parent
	}, t.gfontAvailable = function (e, A) {
		t.properties.webfonts[e] = !0;
		for (var i = t.webFontTxtInst && t.webFontTxtInst[e] || [], n = 0; n < i.length; ++n) t.addElementsToCache(i[n], r);
		++s == A && t.updateListCache(r)
	}, t.tfontAvailable = function (e, A) {
		t.properties.webfonts[e] = !0;
		for (var i = t.webFontTxtInst && t.webFontTxtInst[e] || [], n = 0; n < i.length; ++n) t.addElementsToCache(i[n], g);
		++o == A && t.updateListCache(g)
	}, (t.arrow = function () {
		this.spriteSheet = i.DVG_Homepage_640x500_200805_atlas_, this.gotoAndStop(0)
	}).prototype = a = new A.Sprite, (t.CircleFlatx3 = function () {
		this.spriteSheet = i.DVG_Homepage_640x500_200805_atlas_, this.gotoAndStop(1)
	}).prototype = a = new A.Sprite, (t.CircleRayx3 = function () {
		this.spriteSheet = i.DVG_Homepage_640x500_200805_atlas_, this.gotoAndStop(2)
	}).prototype = a = new A.Sprite, (t.CircleShapesAx3 = function () {
		this.spriteSheet = i.DVG_Homepage_640x500_200805_atlas_, this.gotoAndStop(3)
	}).prototype = a = new A.Sprite, (t.CircleShapesBx3 = function () {
		this.spriteSheet = i.DVG_Homepage_640x500_200805_atlas_, this.gotoAndStop(4)
	}).prototype = a = new A.Sprite, (t.CircleStrokex3 = function () {
		this.spriteSheet = i.DVG_Homepage_640x500_200805_atlas_, this.gotoAndStop(5)
	}).prototype = a = new A.Sprite, (t.Circuit1Static1 = function () {
		this.spriteSheet = i.DVG_Homepage_640x500_200805_atlas_, this.gotoAndStop(6)
	}).prototype = a = new A.Sprite, (t.Circuit2Static = function () {
		this.spriteSheet = i.DVG_Homepage_640x500_200805_atlas_, this.gotoAndStop(7)
	}).prototype = a = new A.Sprite, (t.IMAGEBG = function () {
		this.spriteSheet = i.DVG_Homepage_640x500_200805_atlas_, this.gotoAndStop(8)
	}).prototype = a = new A.Sprite, (t.Stroke = function (e, i, n) {
		this.initialize(e, i, n, {}), this.instance = new t.CircleStrokex3, this.instance.parent = this, this.instance.setTransform(-201.5, -201), this.timeline.addTween(A.Tween.get(this.instance).wait(1))
	}).prototype = l(t.Stroke, new A.Rectangle(-201.5, -201, 403, 402), null), (t.ShapesB = function (e, i, n) {
		this.initialize(e, i, n, {}), this.instance = new t.CircleShapesBx3, this.instance.parent = this, this.instance.setTransform(-291, -271.5), this.timeline.addTween(A.Tween.get(this.instance).wait(1))
	}).prototype = l(t.ShapesB, new A.Rectangle(-291, -271.5, 582, 543), null), (t.ShapesA = function (e, i, n) {
		this.initialize(e, i, n, {}), this.instance = new t.CircleShapesAx3, this.instance.parent = this, this.instance.setTransform(-240, -264.5), this.timeline.addTween(A.Tween.get(this.instance).wait(1))
	}).prototype = l(t.ShapesA, new A.Rectangle(-240, -264.5, 480, 529), null), (t.Rays = function (e, i, n) {
		this.initialize(e, i, n, {}), this.instance = new t.CircleRayx3, this.instance.parent = this, this.instance.setTransform(-293.5, -257.5), this.timeline.addTween(A.Tween.get(this.instance).wait(1))
	}).prototype = l(t.Rays, new A.Rectangle(-293.5, -257.5, 587, 515), null), (t.Flat = function (e, i, n) {
		this.initialize(e, i, n, {}), this.instance = new t.CircleFlatx3, this.instance.parent = this, this.instance.setTransform(-296, -295), this.timeline.addTween(A.Tween.get(this.instance).wait(1))
	}).prototype = l(t.Flat, new A.Rectangle(-296, -295, 592, 590), null), (t.BirdIntroTween = function (t, e, i) {
		this.initialize(t, e, i, {}), this.shape = new A.Shape, this.shape.graphics.lf(["#8EC640", "rgba(142,198,64,0.929)", "rgba(142,198,64,0)"], [0, .663, 1], -536.5, 0, 536.7, 0).s().p("EhT2AyHMAAAhkNMCntAAAMAAABkNg"), this.timeline.addTween(A.Tween.get(this.shape).wait(1))
	}).prototype = a = new A.MovieClip, a.nominalBounds = new A.Rectangle(-536.6, -320.6, 1073.3, 641.3), (t.BirdGradTween = function (t, e, i) {
		this.initialize(t, e, i, {}), this.shape = new A.Shape, this.shape.graphics.lf(["rgba(210,255,140,0)", "rgba(210,255,140,0.929)", "rgba(210,255,140,0)"], [0, .502, 1], -500.6, 119.7, 500.7, -119.7).s().p("EhZ0gd0MCccglaMAXNBhDMiccAlag"), this.timeline.addTween(A.Tween.get(this.shape).wait(1))
	}).prototype = a = new A.MovieClip, a.nominalBounds = new A.Rectangle(-574.9, -430.3, 1149.9, 860.6), (t.Positive = function (t, e, i) {
		this.initialize(t, e, i, {}), this.shape = new A.Shape, this.shape.graphics.f("#8EC640").s().p("AjCECIAAoDIF6AAIAABVIkWAAIAACAID7AAIAABVIj7AAIAACEIEhAAIAABVg"), this.shape.setTransform(319.5, 41.2), this.shape_1 = new A.Shape, this.shape_1.graphics.f("#8EC640").s().p("AgyECIjPoDIBrAAICWGVICbmVIBnAAIjSIDg"), this.shape_1.setTransform(267.7, 41.2), this.shape_2 = new A.Shape, this.shape_2.graphics.f("#8EC640").s().p("AgxECIAAoDIBjAAIAAIDg"), this.shape_2.setTransform(230.3, 41.2), this.shape_3 = new A.Shape, this.shape_3.graphics.f("#8EC640").s().p("AgxECIAAmqIiiAAIAAhZIGnAAIAABZIiiAAIAAGqg"), this.shape_3.setTransform(197.2, 41.2), this.shape_4 = new A.Shape, this.shape_4.graphics.f("#8EC640").s().p("AgxECIAAoDIBjAAIAAIDg"), this.shape_4.setTransform(164.1, 41.2), this.shape_5 = new A.Shape, this.shape_5.graphics.f("#8EC640").s().p("AhtDwQg6gWgqglIAphTQAmAjAyAVQAxAUApAAQAqAAAYgPQAYgQAAgcQAAgigrgVQgMgFhTgbQhCgUgfgYQgrglAAg+QAAhDA0goQA1gpBXAAQAxAAA0AQQAvAPAmAYIgpBXQgpgZgqgOQgogNggAAQgiAAgUAMQgVANAAAXQAAAjArAVQAKAEBWAcQBBAVAgAaQAsAmABBAQAABGg5AqQg3AohYAAQg7AAg8gYg"), this.shape_5.setTransform(129.1, 41.3), this.shape_6 = new A.Shape, this.shape_6.graphics.f("#8EC640").s().p("AjDC6QhQhLAAhvQAAhuBQhLQBQhMBzAAQB1AABPBMQBQBLAABuQAABvhQBLQhPBMh1AAQhzAAhQhMgAh7h6Qg0AzAABHQAABLA0AzQAzAxBIAAQBJAAAzgxQAzg0gChKQAAhHg0gzQgygyhHAAQhHAAg0Ayg"), this.shape_6.setTransform(76.3, 41.2), this.shape_7 = new A.Shape, this.shape_7.graphics.f("#8EC640").s().p("AjRECIAAoDIDUAAQBjAAA2AuQA2AvAABWQAABWg2AyQg3AxhiAAIhxAAIAACXgAhqAVIBqAAQBwgBAFhiQAAgugggYQgegYg3AAIhqAAg"), this.shape_7.setTransform(23.6, 41.2), this.timeline.addTween(A.Tween.get({}).to({state: [{t: this.shape_7}, {t: this.shape_6}, {t: this.shape_5}, {t: this.shape_4}, {t: this.shape_3}, {t: this.shape_2}, {t: this.shape_1}, {t: this.shape}]}).wait(1))
	}).prototype = l(t.Positive, new A.Rectangle(2.6, 15, 336.4, 52.8), null), (t.Make = function (t, e, i) {
		this.initialize(t, e, i, {}), this.shape = new A.Shape, this.shape.graphics.f("#8EC640").s().p("AjCEDIAAoFIF6AAIAABXIkWAAIAAB/ID7AAIAABVIj7AAIAACDIEhAAIAABXg"), this.shape.setTransform(198, 41.6), this.shape_1 = new A.Shape, this.shape_1.graphics.f("#8EC640").s().p("AByEDIihjdIhTBdIAACAIhkAAIAAoFIBkAAIAAD8IDqj8IBxAAIjEDdIDSEog"), this.shape_1.setTransform(147.8, 41.6), this.shape_2 = new A.Shape, this.shape_2.graphics.f("#8EC640").s().p("ACpEDIgthvIj6AAIgtBvIhoAAIDkoFIBmAAIDdIFgABaBCIhajZIhcDZIC2AAg"), this.shape_2.setTransform(90.6, 41.6), this.shape_3 = new A.Shape, this.shape_3.graphics.f("#8EC640").s().p("AC6EDIAAlwIibE8Ig9AAIibk8IAAFwIhaAAIAAoFIByAAIChFKICilKIByAAIAAIFg"), this.shape_3.setTransform(28.9, 41.6), this.timeline.addTween(A.Tween.get({}).to({state: [{t: this.shape_3}, {t: this.shape_2}, {t: this.shape_1}, {t: this.shape}]}).wait(1))
	}).prototype = l(t.Make, new A.Rectangle(1.3, 15.7, 216.2, 51.8), null), (t.Impacts = function (t, e, i) {
		this.initialize(t, e, i, {}), this.shape = new A.Shape, this.shape.graphics.f("#8EC640").s().p("AhvEAQg7gUgpgkIAphTQAhAeA0ATQAxARAtAAQApAAAXgOQAZgPAAgeQAAgkgsgWQgKgFhWgcQhCgWgfgbQgsgnAAhBQAAhLA9gqQA3gmBSAAQA0AAAzAPQAzAPAkAaIgpBWQgkgXgqgNQgpgNgkAAQgjAAgVAOQgXAOAAAcQAAAgAtAVIBhAhQBCAWAfAcQAsApgBBCQAABOhAArQg4AmhXAAQg7AAg5gUg"), this.shape.setTransform(288.3, 40.5), this.shape_1 = new A.Shape, this.shape_1.graphics.f("#8EC640").s().p("AgzEKIAAm5IilAAIAAhZIGxAAIAABZIilAAIAAG5g"), this.shape_1.setTransform(241.2, 40.6), this.shape_2 = new A.Shape, this.shape_2.graphics.f("#8EC640").s().p("AikDAQhQhOAAhyQAAhzBShNQBShOB2ABQA6gBA4AYQA1AXAoAnIg7BNQgdgggmgTQgogSgmgBQhKAAg0AzQg0AzAABLQAABJA0AzQA0AyBKAAQAmAAAmgRQAkgOAegbIA6BBQgpAqg4AXQg5AZg4AAQh0AAhPhPg"), this.shape_2.setTransform(193, 40.7), this.shape_3 = new A.Shape, this.shape_3.graphics.f("#8EC640").s().p("ACwEKIgwhyIkCAAIgwByIhrAAIDqoSIBqAAIDnISgABaBBIhdjeIhdDeIC6AAg"), this.shape_3.setTransform(145.4, 40.6), this.shape_4 = new A.Shape, this.shape_4.graphics.f("#8EC640").s().p("AjUEKIAAoSIDXAAQBlAAA3AvQA2AwAABXQAABag2AzQg2AzhiAAIh1AAIAACcgAhxAUIBuAAQA5AAAfgYQAggaAAgxQAAgwgggZQgegXg6AAIhuAAg"), this.shape_4.setTransform(103.4, 40.6), this.shape_5 = new A.Shape, this.shape_5.graphics.f("#8EC640").s().p("AC/EKIAAl7IifFDIhAAAIiflDIAAF7IhdAAIAAoSIB2AAICoFUICllUIB1AAIAAISg"), this.shape_5.setTransform(46.3, 40.6), this.shape_6 = new A.Shape, this.shape_6.graphics.f("#8EC640").s().p("AgzEKIAAoSIBmAAIAAISg"), this.shape_6.setTransform(5.8, 40.6), this.timeline.addTween(A.Tween.get({}).to({state: [{t: this.shape_6}, {t: this.shape_5}, {t: this.shape_4}, {t: this.shape_3}, {t: this.shape_2}, {t: this.shape_1}, {t: this.shape}]}).wait(1))
	}).prototype = l(t.Impacts, new A.Rectangle(.7, 13, 308.8, 55.1), null), (t.www = function (t, e, i) {
		this.initialize(t, e, i, {}), this.shape = new A.Shape, this.shape.graphics.f("#FFFFFF").s().p("ADbCTQgNgIAAgJQAAgFACgDQAEgEAEAAIANAFQANAHALADQAMAEASABQAZAAANgOQANgOAAgZIAAgfQgHARgQAIQgQAKgVgBQgXAAgSgKQgSgMgKgSQgKgWAAgYQAAgZAKgUQAJgTATgMQASgKAXAAQAVgBAPAKQAPAIAJARIAAgTQAAgHADgEQAEgEAHAAQAHAAAEAEQAEAEAAAHIAACXQAAAogUATQgVAUgnAAQgnAAgZgOgADvgrQgOAQAAAdQAAAdAOARQAPAQAaABQAZgBAOgQQAPgRAAgdQAAgcgPgRQgOgRgZAAQgaAAgPARgAOyCdQgEgFAAgFIAAjYQAAgGAEgFQAEgEAHAAQAHAAADAEQAEAEAAAHIAAATQAIgQAPgJQAQgKAUABQAWAAATALQASAMAJAVQAKAUAAAaQAAAbgKAVQgJATgSANQgRALgYgBQgUABgQgKQgPgJgIgQIAABVQAAAHgEADQgDADgHAAQgIAAgDgDgAPZgrQgOARAAAfQAAAhAOARQANARAaAAQAZAAAPgRQAOgRAAggQAAgfgOgRQgOgSgaAAQgaAAgNARgAWPBWQgUgMgJgUQgLgVAAgcQAAgaALgUQAJgVAUgMQASgLAaABQAZgBASALQATALALAWQAKAUAAAaQAAAcgKAVQgLAUgTAMQgSALgZgBQgaABgSgLgAWTgrQgOASAAAeQAAAgAOASQANARAbAAQAaAAANgQQAOgSAAghQAAgfgOgRQgOgRgZAAQgaAAgOARgATiBWQgSgMgLgUQgKgWAAgaQAAgaALgUQAKgVATgMQAUgLAYAAQAOAAANADQANAEALAHQAGAEADAFQADAEAAAFQAAAFgDADQgDADgEABIgFgCIgFgDIgDgCQgIgGgKgEQgHgDgNAAQgaAAgPASQgPARAAAfQAAAgAPARQAPARAaAAQAMAAAJgDQAIgEAKgGIAHgEQAEgCACAAQAFAAACAEQADACAAAGQAAAEgDAEQgCADgHAFQgLAIgOAEQgMADgQAAQgZABgTgLgALzBPQgQgSAAgiIAAhgQAAgGAEgFQAEgEAHAAQAHAAADAEQAEAEAAAHIAABgQAAAXAKALQAJALAUAAQAXAAAOgOQAOgPAAgZIAAhXQAAgGAEgFQAEgEAHAAQAHAAAEAEQAEAFAAAGIAACXQAAAGgEAEQgEAEgHAAQgGAAgEgDQgEgFAAgGIAAgSQgIAQgPAIQgPAJgTgBQgfAAgQgRgAI5BWQgTgMgKgUQgKgWAAgbQAAgZAKgVQAKgVATgMQATgLAZABQAZgBATALQATALAKAWQAKATAAAbQAAAdgKAUQgKAUgTAMQgTALgZgBQgZABgTgLgAI9grQgOASAAAeQAAAhAOARQAOARAaAAQAaAAAOgQQAOgTAAggQAAgegOgSQgPgRgZAAQgZAAgPARgAhbBIQgYgXAAgrQAAgaALgUQALgWASgLQAUgLAXAAQAigBAUAXQAUAXAAAlQAAAGgDADQgDAEgHAAIhyAAQADA+A3AAQAOAAAKgEQAIgDANgHQAJgGAEAAQADAAADAEQADAEAAAEQAAAJgMAHQgPAJgNADQgMADgPAAQgoAAgYgYgAhFgvQgOAOgCAaIBlAAQAAgagNgOQgMgPgWAAQgXAAgPAPgApvBaQgPgIgHgMQgIgLAAgQQAAgTAKgLQAJgKAYgFQAagFAmAAIAIAAIAAgMQAAgVgJgKQgJgKgUAAQgYAAgZANQgKAGgEAAQgEAAgDgDQgDgDAAgGQAAgFADgDQACgEAIgEQAMgHAQgEQARgEAPAAQBCgBAABGIAABgQAAAHgEAEQgEAEgGAAQgGAAgEgEQgEgEAAgHIAAgRQgHAQgOAIQgOAJgTgBQgRAAgOgGgApRAOQgQACgIAHQgHAGAAAMQAAAPAKAJQALAIAPABQAXAAANgPQAOgOAAgXIAAgLIgHAAQgfAAgRADgAs+BVQgSgLgKgVQgJgVAAgbQAAgbAJgTQAKgWASgLQARgLAXABQAVgBAPAKQAQAJAHAQIAAhhQAAgFAEgEQAEgEAHgBQAHABAEAEQAEAEAAAFIAADkQAAAHgEAEQgEAEgHAAQgHAAgEgEQgEgEAAgHIAAgTQgHAQgQAJQgPAKgVgBQgXAAgRgLgAs4grQgOARAAAfQAAAhAOARQAPARAZAAQAaAAANgRQAOgRAAghQAAgfgOgRQgNgRgaAAQgaAAgOARgACfBgIgKgBQgcgCgOgPQgOgPAAgfIAAhZIgYAAQgGAAgEgDQgDgDAAgFQAAgGADgDQAEgDAGAAIAYAAIAAgpQAAgGAEgEQAEgFAHAAQAGAAAFAFQADADAAAHIAAApIAoAAQAGAAADADQAEADAAAGQAAAFgEADQgDADgGAAIgoAAIAABaQAAAUAIAJQAJAKAQAAIAKABQAMABAAALQAAAGgEADQgFACgGAAIgDAAgAceBdQgEgGAAgGIAAhfQAAgYgJgLQgJgLgSAAQgVAAgNAOQgNAPAAAaIAABWQAAAHgEAFQgFADgGAAQgGAAgEgDQgEgGAAgGIAAhfQAAgYgJgLQgJgLgSAAQgWAAgNAOQgMAPAAAaIAABWQAAAGgEAGQgFADgGAAQgGAAgEgDQgEgFAAgHIAAiWQAAgHAEgEQAEgEAGAAQAGAAAEAEQAEADAAAHIAAARQAJgQANgHQAOgJATABQApAAAMAiQAIgQAPgJQAQgJAUAAQA6AAAABFIAABgQAAAHgEAFQgFADgFAAQgGAAgFgDgAR5BaQgFgFAAgJQAAgKAFgFQAGgGAJAAQAIAAAFAGQAGAGAAAJQAAAIgGAGQgFAGgIAAQgIAAgHgGgAGlBdQgEgGAAgGIAAiWQAAgHAEgEQAFgEAGAAQAFAAAEAEQAEAEAAAGIAAAVQAIgQAOgJQANgIATgCIAFAAQAPgBAAANQAAAHgEADQgCADgJABIgKABQgZACgLAPQgMAPAAAUIAABWQAAAHgEAFQgFADgFAAQgGAAgFgDgAi4BdQgEgFAAgHIAAiWQAAgIAEgDQAEgEAHAAQAGAAAEAEQAEAEAAAHIAACWQAAAHgEAFQgEADgGAAQgGAAgFgDgAnFBdQgDgFAAgHIAAiWQAAgIADgDQAFgEAGAAQAHAAAEAEQAEAEAAAHIAACWQAAAHgEAFQgFADgGAAQgFAAgGgDgAulBaQgGgFAAgJQAAgKAGgFQAGgGAIAAQAJAAAFAGQAGAGAAAJQAAAIgGAGQgGAGgIAAQgIAAgGgGgAk8BdQgEgDgDgFIhGiWIgBgGQAAgFAEgEQAGgEAFAAQADAAAEACQAEADABAEIA8CGIA9iGQAEgIAIgBQAGABAEADQAEAEAAAFIgBAGIhGCWQgCAEgFAEQgDACgGAAQgFAAgEgCgAwTBdQgEgEgCgEIgyh9IgxB9QgCAFgEADQgDACgGAAQgGAAgDgCQgFgEgCgEIg8iWIgBgFQAAgFAFgFQAFgEAGAAQAJABADAIIAxCEIAziDQACgFAEgCQAEgCAEgBQAEABAEACQAEACACAFIAzCDIAyiEQADgIAIAAQAGAAAEADQAEAEAAAFIgBAGIg7CWQgDAFgEADQgDACgGAAQgFAAgEgCgA1CBdQgEgDgCgFIgyh9IgxB9QgCAEgEAEQgEACgGAAQgFAAgEgCQgEgEgCgEIg8iWIgBgFQAAgFAFgFQAFgEAGAAQAIABAEAIIAxCEIAziDQACgFAEgCQAEgCAEgBQAEABAEACQAEACACAFIAzCDIAxiEQAEgIAIAAQAGAAAEADQAEAFAAAEIgBAGIg7CWQgCAEgFAEQgDACgGAAQgGAAgDgCgA5xBdQgEgDgCgFIgyh9IgxB9QgCAEgEAEQgEACgGAAQgFAAgEgCQgEgEgCgEIg8iWIgBgFQAAgFAFgFQAFgEAGAAQAIABAEAIIAxCEIAziDQACgFAEgCQAEgCAEgBQAEABAEACQAEACACAFIAzCDIAxiEQAEgIAIAAQAGAAAEADQAEAFAAAEIgBAGIg7CWQgCAEgFAEQgDACgGAAQgGAAgDgCgAi7h/QgGgFAAgIQAAgHAGgGQAFgFAJAAQAJAAAFAFQAFAFAAAIQAAAJgFAEQgGAGgIAAQgIAAgGgGgAnIh/QgFgFAAgIQAAgHAFgGQAFgFAJAAQAJAAAFAFQAGAGAAAHQAAAIgGAFQgGAGgIAAQgIAAgGgGg"), this.shape.setTransform(184.7, 16.2), this.timeline.addTween(A.Tween.get(this.shape).wait(1))
	}).prototype = l(t.www, new A.Rectangle(0, 0, 369.4, 32.3), null), (t.World = function (t, e, i) {
		this.initialize(t, e, i, {}), this.shape = new A.Shape, this.shape.graphics.f("#8EC640").s().p("Ah4B5QgygyAAhHQAAhGAygyQAygyBGAAQBHAAAyAyQAyAyAABGQAABHgyAyQgyAyhHAAQhGAAgygyg"), this.shape.setTransform(273.7, 162.3), this.shape_1 = new A.Shape, this.shape_1.graphics.f("#FFFFFF").s().p("AwSPMQi6ixAAkDQAAkGC6ivQC5iuERAAQESAAC5CuQC4CvAAEGQAAEFi4CwQi5CxkSAAQkQAAi6iygAtmD4Qh5B0AACsQAACpB6B4QB5B2CoAAQCnAAB2h2QB3h3AAiqQAAish3h0Qh1h0ioAAQirAAh3B0gEAgqAR3IAAy/IKHAAQEVAACyCqQCyCrAAELQAAEIizCrQi0CskZAAgEAkTAOnIGmAAQCoAABuhvQBvhwAAiwQAAixhyhyQhwhyirABImeAAgA7xR2IkOuOIkROOIjwAAImQy8IAAAAIion6QhZgOhEhDQhUhVAAh3QAAh3BUhUQBUhVB3AAQB3AABVBVQBUBUAAB3QAAB3hUBVIgMAKIHCX6IEVu5IDlAAIEYO5IEVu5IDwAAImQS8gEgxzgPGQgsAsAAA9QAAA9AsAsQAsAsA9AAQA9AAAsgsQAsgsAAg9QAAg9gsgsQgsgsg9AAQg9AAgsAsgATLR0IAAy8IDmAAIAAPoIILAAIAADUgAOSR0IjTllIk8AAIAAFlIjpAAIAAy8IH6AAQDrABCABrQCABtAADJQAACPg+BkQg9Blh1AxIEJGRgAGDJDIERAAQCEAABEg4QBFg4AAhyQAAhuhHg4QhEg3iCAAIkRAAg"), this.shape_1.setTransform(332.1, 108.1), this.timeline.addTween(A.Tween.get({}).to({state: [{t: this.shape_1}, {t: this.shape}]}).wait(1))
	}).prototype = l(t.World, new A.Rectangle(-4.9, -6.9, 674.1, 230), null), (t.THE = function (t, e, i) {
		this.initialize(t, e, i, {}), this.shape = new A.Shape, this.shape.graphics.f("#FFFFFF").s().p("ABdCzIi1j0IAAD0IhGAAIAAllIBCAAIC5D0IAAj0IBBAAIAAFlg"), this.shape.setTransform(66, -23.2), this.shape_1 = new A.Shape, this.shape_1.graphics.f("#FFFFFF").s().p("AiGCCQg2g0gBhOQABhNA2g0QA3g1BPAAQBQAAA2A1QA3A0AABNQAABOg3A0Qg2A1hQAAQhPAAg3g1gAhThUQgkAkACAwQAAAzAlAjQAjAjAwAAQAyAAAkgjQAjgjAAgzQAAgygjgjQgkgigyAAQgyAAgkAjg"), this.shape_1.setTransform(25, -23.2), this.shape_2 = new A.Shape, this.shape_2.graphics.f("#FFFFFF").s().p("AiXDPIAAmdIC9AAIAVA+IiNAAIAAByIC2AAIAVA9IjLAAIAAByIDqAAIAAA+g"), this.shape_2.setTransform(99.1, 23.3), this.shape_3 = new A.Shape, this.shape_3.graphics.f("#FFFFFF").s().p("ABuDPIAAisIjbAAIAACsIhFAAIAAmdIBFAAIAAC0IDbAAIAAi0IBFAAIAAGdg"), this.shape_3.setTransform(60.8, 23.3), this.shape_4 = new A.Shape, this.shape_4.graphics.f("#FFFFFF").s().p("AgjDPIAAlfIiDAAIAAg+IFNAAIAAA+IiGAAIAAFfg"), this.shape_4.setTransform(22.8, 23.3), this.timeline.addTween(A.Tween.get({}).to({state: [{t: this.shape_4}, {t: this.shape_3}, {t: this.shape_2}, {t: this.shape_1}, {t: this.shape}]}).wait(1))
	}).prototype = l(t.THE, new A.Rectangle(6.1, -41.4, 108.2, 85.5), null), (t.CircuitMaskTween = function (t, e, i) {
		this.initialize(t, e, i, {}), this.shape = new A.Shape, this.shape.graphics.lf(["rgba(142,198,64,0)", "rgba(142,198,64,0.8)", "rgba(142,198,64,0)"], [0, .498, 1], -686.6, 0, 686.6, 0).s().p("EhrRBAnMAAAiBOMDWjAAAMAAACBOg"), this.timeline.addTween(A.Tween.get(this.shape).wait(1))
	}).prototype = a = new A.MovieClip, a.nominalBounds = new A.Rectangle(-686.6, -413.5, 1373.2, 827.1), (t.BGCC2Static = function (e, i, n) {
		this.initialize(e, i, n, {}), this.instance = new t.Circuit2Static, this.instance.parent = this, this.instance.setTransform(-533, -359), this.timeline.addTween(A.Tween.get(this.instance).wait(1))
	}).prototype = l(t.BGCC2Static, new A.Rectangle(-533, -359, 1065, 718), null), (t.BGCC1Static = function (e, i, n) {
		this.initialize(e, i, n, {}), this.instance = new t.Circuit1Static1, this.instance.parent = this, this.instance.setTransform(-229, -348), this.timeline.addTween(A.Tween.get(this.instance).wait(1))
	}).prototype = l(t.BGCC1Static, new A.Rectangle(-229, -348, 447, 710), null), (t.BGDotsGradTween = function (t, e, i) {
		this.initialize(t, e, i, {}), this.shape = new A.Shape, this.shape.graphics.lf(["rgba(210,255,140,0)", "rgba(210,255,140,0.929)", "rgba(210,255,140,0)"], [0, .502, 1], -227, 0, 227.1, 0).s().p("EgjdALtIAA3ZMBG7AAAIAAXZg"), this.timeline.addTween(A.Tween.get(this.shape).wait(1))
	}).prototype = a = new A.MovieClip, a.nominalBounds = new A.Rectangle(-227, -74.9, 454.1, 149.9), (t.BGArrow = function (e, i, n) {
		this.initialize(e, i, n, {}), this.instance = new t.arrow, this.instance.parent = this, this.instance.setTransform(13.5, -21.5, 1, 1, 0, 0, 180), this.timeline.addTween(A.Tween.get(this.instance).wait(1))
	}).prototype = l(t.BGArrow, new A.Rectangle(-13.5, -21.5, 27, 43), null), (t.WheelStrokeMotion360 = function (e, i, n) {
		this.initialize(e, i, n, {}), this.instance = new t.Stroke, this.instance.parent = this, this.timeline.addTween(A.Tween.get(this.instance).wait(1).to({rotation: 3.6}, 0).wait(1).to({rotation: 7.3}, 0).wait(1).to({rotation: 10.9}, 0).wait(1).to({rotation: 14.5}, 0).wait(1).to({rotation: 18.2}, 0).wait(1).to({rotation: 21.8}, 0).wait(1).to({rotation: 25.5}, 0).wait(1).to({rotation: 29.1}, 0).wait(1).to({rotation: 32.7}, 0).wait(1).to({rotation: 36.4}, 0).wait(1).to({rotation: 40}, 0).wait(1).to({rotation: 43.6}, 0).wait(1).to({rotation: 47.3}, 0).wait(1).to({rotation: 50.9}, 0).wait(1).to({rotation: 54.5}, 0).wait(1).to({rotation: 58.2}, 0).wait(1).to({rotation: 61.8}, 0).wait(1).to({rotation: 65.5}, 0).wait(1).to({rotation: 69.1}, 0).wait(1).to({rotation: 72.7}, 0).wait(1).to({rotation: 76.4}, 0).wait(1).to({rotation: 80}, 0).wait(1).to({rotation: 83.6}, 0).wait(1).to({rotation: 87.3}, 0).wait(1).to({rotation: 90.9}, 0).wait(1).to({rotation: 94.5}, 0).wait(1).to({rotation: 98.2}, 0).wait(1).to({rotation: 101.8}, 0).wait(1).to({rotation: 105.5}, 0).wait(1).to({rotation: 109.1}, 0).wait(1).to({rotation: 112.7}, 0).wait(1).to({rotation: 116.4}, 0).wait(1).to({rotation: 120}, 0).wait(1).to({rotation: 123.6}, 0).wait(1).to({rotation: 127.3}, 0).wait(1).to({rotation: 130.9}, 0).wait(1).to({rotation: 134.5}, 0).wait(1).to({rotation: 138.2}, 0).wait(1).to({rotation: 141.8}, 0).wait(1).to({rotation: 145.5}, 0).wait(1).to({rotation: 149.1}, 0).wait(1).to({rotation: 152.7}, 0).wait(1).to({rotation: 156.4}, 0).wait(1).to({rotation: 160}, 0).wait(1).to({rotation: 163.6}, 0).wait(1).to({rotation: 167.3}, 0).wait(1).to({rotation: 170.9}, 0).wait(1).to({rotation: 174.5}, 0).wait(1).to({rotation: 178.2}, 0).wait(1).to({rotation: 181.8}, 0).wait(1).to({rotation: 185.5}, 0).wait(1).to({rotation: 189.1}, 0).wait(1).to({rotation: 192.7}, 0).wait(1).to({rotation: 196.4}, 0).wait(1).to({rotation: 200}, 0).wait(1).to({rotation: 203.6}, 0).wait(1).to({rotation: 207.3}, 0).wait(1).to({rotation: 210.9}, 0).wait(1).to({rotation: 214.5}, 0).wait(1).to({rotation: 218.2}, 0).wait(1).to({rotation: 221.8}, 0).wait(1).to({rotation: 225.5}, 0).wait(1).to({rotation: 229.1}, 0).wait(1).to({rotation: 232.7}, 0).wait(1).to({rotation: 236.4}, 0).wait(1).to({rotation: 240}, 0).wait(1).to({rotation: 243.6}, 0).wait(1).to({rotation: 247.3}, 0).wait(1).to({rotation: 250.9}, 0).wait(1).to({rotation: 254.5}, 0).wait(1).to({rotation: 258.2}, 0).wait(1).to({rotation: 261.8}, 0).wait(1).to({rotation: 265.5}, 0).wait(1).to({rotation: 269.1}, 0).wait(1).to({rotation: 272.7}, 0).wait(1).to({rotation: 276.4}, 0).wait(1).to({rotation: 280}, 0).wait(1).to({rotation: 283.6}, 0).wait(1).to({rotation: 287.3}, 0).wait(1).to({rotation: 290.9}, 0).wait(1).to({rotation: 294.5}, 0).wait(1).to({rotation: 298.2}, 0).wait(1).to({rotation: 301.8}, 0).wait(1).to({rotation: 305.5}, 0).wait(1).to({rotation: 309.1}, 0).wait(1).to({rotation: 312.7}, 0).wait(1).to({rotation: 316.4}, 0).wait(1).to({rotation: 320}, 0).wait(1).to({rotation: 323.6}, 0).wait(1).to({rotation: 327.3}, 0).wait(1).to({rotation: 330.9}, 0).wait(1).to({rotation: 334.5}, 0).wait(1).to({rotation: 338.2}, 0).wait(1).to({rotation: 341.8}, 0).wait(1).to({rotation: 345.5}, 0).wait(1).to({rotation: 349.1}, 0).wait(1).to({rotation: 352.7}, 0).wait(1).to({rotation: 356.4}, 0).wait(1).to({rotation: 360}, 0).wait(1))
	}).prototype = a = new A.MovieClip, a.nominalBounds = new A.Rectangle(-201.5, -201, 403, 402), (t.WheelShapesBMotion15 = function (e, i, n) {
		this.initialize(e, i, n, {}), this.instance = new t.ShapesB, this.instance.parent = this, this.timeline.addTween(A.Tween.get(this.instance).wait(1).to({rotation: -.3}, 0).wait(1).to({rotation: -.6}, 0).wait(1).to({rotation: -.9}, 0).wait(1).to({rotation: -1.2}, 0).wait(1).to({rotation: -1.5}, 0).wait(1).to({rotation: -1.8}, 0).wait(1).to({rotation: -2.1}, 0).wait(1).to({rotation: -2.4}, 0).wait(1).to({rotation: -2.8}, 0).wait(1).to({rotation: -3.1}, 0).wait(1).to({rotation: -3.4}, 0).wait(1).to({rotation: -3.7}, 0).wait(1).to({rotation: -4}, 0).wait(1).to({rotation: -4.3}, 0).wait(1).to({rotation: -4.6}, 0).wait(1).to({rotation: -4.9}, 0).wait(1).to({rotation: -5.2}, 0).wait(1).to({rotation: -5.5}, 0).wait(1).to({rotation: -5.8}, 0).wait(1).to({rotation: -6.1}, 0).wait(1).to({rotation: -6.4}, 0).wait(1).to({rotation: -6.7}, 0).wait(1).to({rotation: -7}, 0).wait(1).to({rotation: -7.3}, 0).wait(1).to({rotation: -7.7}, 0).wait(1).to({rotation: -8}, 0).wait(1).to({rotation: -8.3}, 0).wait(1).to({rotation: -8.6}, 0).wait(1).to({rotation: -8.9}, 0).wait(1).to({rotation: -9.2}, 0).wait(1).to({rotation: -9.5}, 0).wait(1).to({rotation: -9.8}, 0).wait(1).to({rotation: -10.1}, 0).wait(1).to({rotation: -10.4}, 0).wait(1).to({rotation: -10.7}, 0).wait(1).to({rotation: -11}, 0).wait(1).to({rotation: -11.3}, 0).wait(1).to({rotation: -11.6}, 0).wait(1).to({rotation: -11.9}, 0).wait(1).to({rotation: -12.2}, 0).wait(1).to({rotation: -12.6}, 0).wait(1).to({rotation: -12.9}, 0).wait(1).to({rotation: -13.2}, 0).wait(1).to({rotation: -13.5}, 0).wait(1).to({rotation: -13.8}, 0).wait(1).to({rotation: -14.1}, 0).wait(1).to({rotation: -14.4}, 0).wait(1).to({rotation: -14.7}, 0).wait(1).to({rotation: -15}, 0).wait(1).to({rotation: -14.7}, 0).wait(1).to({rotation: -14.4}, 0).wait(1).to({rotation: -14.1}, 0).wait(1).to({rotation: -13.8}, 0).wait(1).to({rotation: -13.5}, 0).wait(1).to({rotation: -13.2}, 0).wait(1).to({rotation: -12.9}, 0).wait(1).to({rotation: -12.6}, 0).wait(1).to({rotation: -12.3}, 0).wait(1).to({rotation: -12}, 0).wait(1).to({rotation: -11.7}, 0).wait(1).to({rotation: -11.4}, 0).wait(1).to({rotation: -11.1}, 0).wait(1).to({rotation: -10.8}, 0).wait(1).to({rotation: -10.5}, 0).wait(1).to({rotation: -10.2}, 0).wait(1).to({rotation: -9.9}, 0).wait(1).to({rotation: -9.6}, 0).wait(1).to({rotation: -9.3}, 0).wait(1).to({rotation: -9}, 0).wait(1).to({rotation: -8.7}, 0).wait(1).to({rotation: -8.4}, 0).wait(1).to({rotation: -8.1}, 0).wait(1).to({rotation: -7.8}, 0).wait(1).to({rotation: -7.5}, 0).wait(1).to({rotation: -7.2}, 0).wait(1).to({rotation: -6.9}, 0).wait(1).to({rotation: -6.6}, 0).wait(1).to({rotation: -6.3}, 0).wait(1).to({rotation: -6}, 0).wait(1).to({rotation: -5.7}, 0).wait(1).to({rotation: -5.4}, 0).wait(1).to({rotation: -5.1}, 0).wait(1).to({rotation: -4.8}, 0).wait(1).to({rotation: -4.5}, 0).wait(1).to({rotation: -4.2}, 0).wait(1).to({rotation: -3.9}, 0).wait(1).to({rotation: -3.6}, 0).wait(1).to({rotation: -3.3}, 0).wait(1).to({rotation: -3}, 0).wait(1).to({rotation: -2.7}, 0).wait(1).to({rotation: -2.4}, 0).wait(1).to({rotation: -2.1}, 0).wait(1).to({rotation: -1.8}, 0).wait(1).to({rotation: -1.5}, 0).wait(1).to({rotation: -1.2}, 0).wait(1).to({rotation: -.9}, 0).wait(1).to({rotation: -.6}, 0).wait(1).to({rotation: -.3}, 0).wait(1).to({rotation: 0}, 0).wait(1))
	}).prototype = a = new A.MovieClip, a.nominalBounds = new A.Rectangle(-291, -271.5, 582, 543), (t.WheelShapesAMotion88 = function (e, i, n) {
		this.initialize(e, i, n, {}), this.instance = new t.ShapesA, this.instance.parent = this, this.timeline.addTween(A.Tween.get(this.instance).wait(1).to({rotation: .3}, 0).wait(1).to({rotation: .7}, 0).wait(1).to({rotation: 1}, 0).wait(1).to({rotation: 1.4}, 0).wait(1).to({rotation: 1.7}, 0).wait(1).to({rotation: 2.1}, 0).wait(1).to({rotation: 2.4}, 0).wait(1).to({rotation: 2.8}, 0).wait(1).to({rotation: 3.1}, 0).wait(1).to({rotation: 3.5}, 0).wait(1).to({rotation: 3.8}, 0).wait(1).to({rotation: 4.2}, 0).wait(1).to({rotation: 4.5}, 0).wait(1).to({rotation: 4.9}, 0).wait(1).to({rotation: 5.2}, 0).wait(1).to({rotation: 5.6}, 0).wait(1).to({rotation: 5.9}, 0).wait(1).to({rotation: 6.3}, 0).wait(1).to({rotation: 6.6}, 0).wait(1).to({rotation: 7}, 0).wait(1).to({rotation: 7.3}, 0).wait(1).to({rotation: 7.7}, 0).wait(1).to({rotation: 8}, 0).wait(1).to({
			rotation: 7.7,
			alpha: .971
		}, 0).wait(1).to({rotation: 7.3, alpha: .942}, 0).wait(1).to({
			rotation: 7,
			alpha: .913
		}, 0).wait(1).to({rotation: 6.7, alpha: .883}, 0).wait(1).to({
			rotation: 6.3,
			alpha: .854
		}, 0).wait(1).to({rotation: 6, alpha: .825}, 0).wait(1).to({
			rotation: 5.7,
			alpha: .796
		}, 0).wait(1).to({rotation: 5.3, alpha: .767}, 0).wait(1).to({
			rotation: 5,
			alpha: .738
		}, 0).wait(1).to({rotation: 4.7, alpha: .708}, 0).wait(1).to({
			rotation: 4.3,
			alpha: .679
		}, 0).wait(1).to({rotation: 4, alpha: .65}, 0).wait(1).to({
			rotation: 3.7,
			alpha: .621
		}, 0).wait(1).to({rotation: 3.3, alpha: .592}, 0).wait(1).to({
			rotation: 3,
			alpha: .563
		}, 0).wait(1).to({rotation: 2.7, alpha: .533}, 0).wait(1).to({
			rotation: 2.3,
			alpha: .504
		}, 0).wait(1).to({rotation: 2, alpha: .475}, 0).wait(1).to({
			rotation: 1.7,
			alpha: .446
		}, 0).wait(1).to({rotation: 1.3, alpha: .417}, 0).wait(1).to({
			rotation: 1,
			alpha: .387
		}, 0).wait(1).to({rotation: .7, alpha: .358}, 0).wait(1).to({
			rotation: .3,
			alpha: .329
		}, 0).wait(1).to({rotation: 0, alpha: .3}, 0).wait(1).to({
			rotation: -.3,
			alpha: .329
		}, 0).wait(1).to({rotation: -.7, alpha: .358}, 0).wait(1).to({
			rotation: -1,
			alpha: .387
		}, 0).wait(1).to({rotation: -1.3, alpha: .417}, 0).wait(1).to({
			rotation: -1.7,
			alpha: .446
		}, 0).wait(1).to({rotation: -2, alpha: .475}, 0).wait(1).to({
			rotation: -2.3,
			alpha: .504
		}, 0).wait(1).to({rotation: -2.7, alpha: .533}, 0).wait(1).to({
			rotation: -3,
			alpha: .563
		}, 0).wait(1).to({rotation: -3.3, alpha: .592}, 0).wait(1).to({
			rotation: -3.7,
			alpha: .621
		}, 0).wait(1).to({rotation: -4, alpha: .65}, 0).wait(1).to({
			rotation: -4.3,
			alpha: .679
		}, 0).wait(1).to({rotation: -4.7, alpha: .708}, 0).wait(1).to({
			rotation: -5,
			alpha: .738
		}, 0).wait(1).to({rotation: -5.3, alpha: .767}, 0).wait(1).to({
			rotation: -5.7,
			alpha: .796
		}, 0).wait(1).to({rotation: -6, alpha: .825}, 0).wait(1).to({
			rotation: -6.3,
			alpha: .854
		}, 0).wait(1).to({rotation: -6.7, alpha: .883}, 0).wait(1).to({
			rotation: -7,
			alpha: .913
		}, 0).wait(1).to({rotation: -7.3, alpha: .942}, 0).wait(1).to({
			rotation: -7.7,
			alpha: .971
		}, 0).wait(1).to({
			rotation: -8,
			alpha: 1
		}, 0).wait(1).to({rotation: -7.7}, 0).wait(1).to({rotation: -7.3}, 0).wait(1).to({rotation: -7}, 0).wait(1).to({rotation: -6.7}, 0).wait(1).to({rotation: -6.3}, 0).wait(1).to({rotation: -6}, 0).wait(1).to({rotation: -5.7}, 0).wait(1).to({rotation: -5.3}, 0).wait(1).to({rotation: -5}, 0).wait(1).to({rotation: -4.7}, 0).wait(1).to({rotation: -4.3}, 0).wait(1).to({rotation: -4}, 0).wait(1).to({rotation: -3.7}, 0).wait(1).to({rotation: -3.3}, 0).wait(1).to({rotation: -3}, 0).wait(1).to({rotation: -2.7}, 0).wait(1).to({rotation: -2.3}, 0).wait(1).to({rotation: -2}, 0).wait(1).to({rotation: -1.7}, 0).wait(1).to({rotation: -1.3}, 0).wait(1).to({rotation: -1}, 0).wait(1).to({rotation: -.7}, 0).wait(1).to({rotation: -.3}, 0).wait(1).to({rotation: 0}, 0).wait(35))
	}).prototype = a = new A.MovieClip, a.nominalBounds = new A.Rectangle(-240, -264.5, 480, 529), (t.WheelRayMotion15 = function (e, i, n) {
		this.initialize(e, i, n, {}), this.instance = new t.Rays, this.instance.parent = this, this.timeline.addTween(A.Tween.get(this.instance).wait(1).to({rotation: -.3}, 0).wait(1).to({rotation: -.6}, 0).wait(1).to({rotation: -.9}, 0).wait(1).to({rotation: -1.2}, 0).wait(1).to({rotation: -1.5}, 0).wait(1).to({rotation: -1.8}, 0).wait(1).to({rotation: -2.1}, 0).wait(1).to({rotation: -2.4}, 0).wait(1).to({rotation: -2.8}, 0).wait(1).to({rotation: -3.1}, 0).wait(1).to({rotation: -3.4}, 0).wait(1).to({rotation: -3.7}, 0).wait(1).to({rotation: -4}, 0).wait(1).to({rotation: -4.3}, 0).wait(1).to({rotation: -4.6}, 0).wait(1).to({rotation: -4.9}, 0).wait(1).to({rotation: -5.2}, 0).wait(1).to({rotation: -5.5}, 0).wait(1).to({rotation: -5.8}, 0).wait(1).to({rotation: -6.1}, 0).wait(1).to({rotation: -6.4}, 0).wait(1).to({rotation: -6.7}, 0).wait(1).to({rotation: -7}, 0).wait(1).to({rotation: -7.3}, 0).wait(1).to({rotation: -7.7}, 0).wait(1).to({rotation: -8}, 0).wait(1).to({rotation: -8.3}, 0).wait(1).to({rotation: -8.6}, 0).wait(1).to({rotation: -8.9}, 0).wait(1).to({rotation: -9.2}, 0).wait(1).to({rotation: -9.5}, 0).wait(1).to({rotation: -9.8}, 0).wait(1).to({rotation: -10.1}, 0).wait(1).to({rotation: -10.4}, 0).wait(1).to({rotation: -10.7}, 0).wait(1).to({rotation: -11}, 0).wait(1).to({rotation: -11.3}, 0).wait(1).to({rotation: -11.6}, 0).wait(1).to({rotation: -11.9}, 0).wait(1).to({rotation: -12.2}, 0).wait(1).to({rotation: -12.6}, 0).wait(1).to({rotation: -12.9}, 0).wait(1).to({rotation: -13.2}, 0).wait(1).to({rotation: -13.5}, 0).wait(1).to({rotation: -13.8}, 0).wait(1).to({rotation: -14.1}, 0).wait(1).to({rotation: -14.4}, 0).wait(1).to({rotation: -14.7}, 0).wait(1).to({rotation: -15}, 0).wait(1).to({rotation: -14.7}, 0).wait(1).to({rotation: -14.4}, 0).wait(1).to({rotation: -14.1}, 0).wait(1).to({rotation: -13.8}, 0).wait(1).to({rotation: -13.5}, 0).wait(1).to({rotation: -13.2}, 0).wait(1).to({rotation: -12.9}, 0).wait(1).to({rotation: -12.6}, 0).wait(1).to({rotation: -12.3}, 0).wait(1).to({rotation: -12}, 0).wait(1).to({rotation: -11.7}, 0).wait(1).to({rotation: -11.4}, 0).wait(1).to({rotation: -11.1}, 0).wait(1).to({rotation: -10.8}, 0).wait(1).to({rotation: -10.5}, 0).wait(1).to({rotation: -10.2}, 0).wait(1).to({rotation: -9.9}, 0).wait(1).to({rotation: -9.6}, 0).wait(1).to({rotation: -9.3}, 0).wait(1).to({rotation: -9}, 0).wait(1).to({rotation: -8.7}, 0).wait(1).to({rotation: -8.4}, 0).wait(1).to({rotation: -8.1}, 0).wait(1).to({rotation: -7.8}, 0).wait(1).to({rotation: -7.5}, 0).wait(1).to({rotation: -7.2}, 0).wait(1).to({rotation: -6.9}, 0).wait(1).to({rotation: -6.6}, 0).wait(1).to({rotation: -6.3}, 0).wait(1).to({rotation: -6}, 0).wait(1).to({rotation: -5.7}, 0).wait(1).to({rotation: -5.4}, 0).wait(1).to({rotation: -5.1}, 0).wait(1).to({rotation: -4.8}, 0).wait(1).to({rotation: -4.5}, 0).wait(1).to({rotation: -4.2}, 0).wait(1).to({rotation: -3.9}, 0).wait(1).to({rotation: -3.6}, 0).wait(1).to({rotation: -3.3}, 0).wait(1).to({rotation: -3}, 0).wait(1).to({rotation: -2.7}, 0).wait(1).to({rotation: -2.4}, 0).wait(1).to({rotation: -2.1}, 0).wait(1).to({rotation: -1.8}, 0).wait(1).to({rotation: -1.5}, 0).wait(1).to({rotation: -1.2}, 0).wait(1).to({rotation: -.9}, 0).wait(1).to({rotation: -.6}, 0).wait(1).to({rotation: -.3}, 0).wait(1).to({rotation: 0}, 0).wait(1))
	}).prototype = a = new A.MovieClip, a.nominalBounds = new A.Rectangle(-293.5, -257.5, 587, 515), (t.WheelFlatMotion6 = function (e, i, n) {
		this.initialize(e, i, n, {}), this.instance = new t.Flat, this.instance.parent = this, this.timeline.addTween(A.Tween.get(this.instance).wait(1).to({rotation: .2}, 0).wait(1).to({rotation: .3}, 0).wait(1).to({rotation: .5}, 0).wait(1).to({rotation: .7}, 0).wait(1).to({rotation: .9}, 0).wait(1).to({rotation: 1}, 0).wait(1).to({rotation: 1.2}, 0).wait(1).to({rotation: 1.4}, 0).wait(1).to({rotation: 1.5}, 0).wait(1).to({rotation: 1.7}, 0).wait(1).to({rotation: 1.9}, 0).wait(1).to({rotation: 2.1}, 0).wait(1).to({rotation: 2.2}, 0).wait(1).to({rotation: 2.4}, 0).wait(1).to({rotation: 2.6}, 0).wait(1).to({rotation: 2.7}, 0).wait(1).to({rotation: 2.9}, 0).wait(1).to({rotation: 3.1}, 0).wait(1).to({rotation: 3.3}, 0).wait(1).to({rotation: 3.4}, 0).wait(1).to({rotation: 3.6}, 0).wait(1).to({rotation: 3.8}, 0).wait(1).to({rotation: 3.9}, 0).wait(1).to({rotation: 4.1}, 0).wait(1).to({rotation: 4.3}, 0).wait(1).to({rotation: 4.5}, 0).wait(1).to({rotation: 4.6}, 0).wait(1).to({rotation: 4.8}, 0).wait(1).to({rotation: 5}, 0).wait(1).to({rotation: 5.1}, 0).wait(1).to({rotation: 5.3}, 0).wait(1).to({rotation: 5.5}, 0).wait(1).to({rotation: 5.7}, 0).wait(1).to({rotation: 5.8}, 0).wait(1).to({rotation: 6}, 0).wait(1).to({rotation: 5.8}, 0).wait(1).to({rotation: 5.7}, 0).wait(1).to({rotation: 5.5}, 0).wait(1).to({rotation: 5.3}, 0).wait(1).to({rotation: 5.2}, 0).wait(1).to({rotation: 5}, 0).wait(1).to({rotation: 4.8}, 0).wait(1).to({rotation: 4.7}, 0).wait(1).to({rotation: 4.5}, 0).wait(1).to({rotation: 4.3}, 0).wait(1).to({rotation: 4.2}, 0).wait(1).to({rotation: 4}, 0).wait(1).to({rotation: 3.8}, 0).wait(1).to({rotation: 3.7}, 0).wait(1).to({rotation: 3.5}, 0).wait(1).to({rotation: 3.3}, 0).wait(1).to({rotation: 3.2}, 0).wait(1).to({rotation: 3}, 0).wait(1).to({rotation: 2.8}, 0).wait(1).to({rotation: 2.7}, 0).wait(1).to({rotation: 2.5}, 0).wait(1).to({rotation: 2.3}, 0).wait(1).to({rotation: 2.2}, 0).wait(1).to({rotation: 2}, 0).wait(1).to({rotation: 1.8}, 0).wait(1).to({rotation: 1.7}, 0).wait(1).to({rotation: 1.5}, 0).wait(1).to({rotation: 1.3}, 0).wait(1).to({rotation: 1.2}, 0).wait(1).to({rotation: 1}, 0).wait(1).to({rotation: .8}, 0).wait(1).to({rotation: .7}, 0).wait(1).to({rotation: .5}, 0).wait(1).to({rotation: .3}, 0).wait(1).to({rotation: .2}, 0).wait(1).to({rotation: 0}, 0).wait(1))
	}).prototype = a = new A.MovieClip, a.nominalBounds = new A.Rectangle(-296, -295, 592, 590), (t.BirdIntro = function (e, i, n) {
		this.initialize(e, i, n, {});
		var a = new A.Shape;
		a._off = !0, a.graphics.p("AGQOkIl2i9IHjjEIFlDZIA6CkIhPAcIhFioIgIAEIi8htIAJgRIgugaIgbAvIAuAbIAJgQICvBmIgfAKIBECnIhJAbIhEimIgHAEIjAh1IAKgSIgwgZIgbAuIAwAbIAIgNIC0BqIgiALIBFCnIg6AVIhGiqIgGABIjNh1IAKgQIgugbIgbAvIAuAaIAJgNIC+BtIghAKIBGCsIg5AVgA5BNnIgDgzIADAAIAIgCIAqgBIABARIRZgeIG9hpIgehIIgRAHIgVgzIAzgUIATAzIgPAGIAAABIAlBcInUBsIxaAfIABASIgVAAIgIABgAuCJTIGwgFIFUhNIHAifIEYi8IgNgSIgMAJIgfgrIArgeIAfApIgRANIAYAiIkqDGInCCgIlYBOImfAFIAAB/IG3gPIFahRIgNguIkmBEIADAUIg0AJIgJg1IA1gIIACANIE2hGIAWBRIluBVInLAQgAv7LcIAAgZIpJAAIgBARIgbgBIgIgBIgSAAIADg1IA0ABIAAAUIJIgCIgBgaIBHAAIAABGgAAYIdIFYiJIEZjTIDNn3IgMibIgPABIgFg1IA1gEIAEA1IgTACIALCfIAAABIjRH+IkeDYIlKCDIAqByIFKiFIEzkQIgegNIkjDjIkDB4IAFAOIgyASIgTgvIAygUIAHATIEBh4IEojnIBDAcIlMEkIlcCOgAzjJtIABgeImRgUIAAAQIg1gDIACg1IAFAAIAIACIAoABIgBATIGRAUIABgXIBGADIgCBGgAxHJgIAAg2IASAAIAChcIIcAeIAAgQIA1AAIAAA1Ig1AAIAAgUIoKgdIgBBKIAQAAIAAA2gAmpGiIheAJIyaiGIgEAUIgegEIgHgCIgBAAIgOgCIAHgyIABgCIA0AIIgCAOISYCHIBrgLIAUBZICJgZIgDgPIA0gJIAJA0Ig0AJIgDgUIiZAcgA0RHgIACgYIl/geIgBATIgeAAIgHgBIgQAAIADg1IACAAIAIAAIAqACIgBAPIGBAeIACgcIBHAFIgGBHgAiyGFIh5AUIADAPIgzAMIgMg0IAzgMIAFAUICKgWIASA8IGYh9IgXguIE+jJIBZiYIA0ghIgKgNIAsgdIAeAqIgrAeIgKgPIgzAfIhXCYIk1DCIAaAzIm/CJgAkjifIi7joIAzgJIC3DlIAqgJIBDE8IgSADIALA2IA1gMIgLg1IgSADIhDk9IABAAIi7jgIA4gLICyDgIAsgKIBEEJIgRAFIANA1IAzgNIgNg0IgRAFIhEkKIABAAIiwjeIBIgNICtDYIAqgJIBFEWIAAAJIABAGIAGAWIgRAEIAMA1IA0gNIgLgvIgBgCIAAgDIgCAAIgDACIgCAAIgMACIgDgPIgBgDIAAgBIgCgFIhIkmIiwjVIBQgOIC0DTIBVFxIAcBnInBCFgALCDHIBIizIgIgEIAOgnIApAOIgPApIgPgGIAAAAIhCCiIAeAMIBikAIANgrIgmgOIBLjMIAlAPIMOrYIABAAIADgEIgCgEIgBgBIgCgEIgBgBIgQgWIgGACIgBACIptFTIAfAwIGGjkIgJgRIAvgZIAZAvIgvAYIgIgNImTDrIgzhMIKSlpIAjAyIABAAIAFAHIgMALIgGAFIAAABIsULdIgfgMIg/CrIAmAMIAAAAIAAAAIgDAKIgBAEIgOAvIhpEQgAKfpjIC0ieICCAWIA4BUIAOgLIAfArIgrAeIgegqIAOgJIg0hPIhygUIioCTIAbF/IA4gsIgTkgIBCg8IgKgKIAlgmIAlAmIglAlIgOgOIg8A3IASEhIhaBEgAOjoMIgPABIgEg0IA1gDIAEA0IgVABIAJBeIERjgIgNgRIArggIAeArIgpAeIgJgLIkpD2g"), this.instance = new t.BirdIntroTween("synched", 0), this.instance.parent = this, this.instance.setTransform(-956.4, 22.9);
		for (var o = [this.instance], s = 0; s < o.length; s++) o[s].mask = a;
		this.timeline.addTween(A.Tween.get(this.instance).to({x: 136.8}, 24).wait(11))
	}).prototype = a = new A.MovieClip, a.nominalBounds = null, (t.BirdGradMask = function (e, i, n) {
		this.initialize(e, i, n, {}), this.frame_119 = function () {
			this.stop()
		}, this.timeline.addTween(A.Tween.get(this).wait(119).call(this.frame_119).wait(1));
		var a = new A.Shape;
		a._off = !0, a.graphics.p("AGQOkIl2i9IHjjEIFlDZIA6CkIhPAcIhFioIgIAEIi8htIAJgRIgugaIgbAvIAuAbIAJgQICvBmIgfAKIBECnIhJAbIhEimIgHAEIjAh1IAKgSIgwgZIgbAuIAwAbIAIgNIC0BqIgiALIBFCnIg6AVIhGiqIgGABIjNh1IAKgQIgugbIgbAvIAuAaIAJgNIC+BtIghAKIBGCsIg5AVgA5BNnIgDgzIADAAIAIgCIAqgBIABARIRZgeIG9hpIgehIIgRAHIgVgzIAzgUIATAzIgPAGIAAABIAlBcInUBsIxaAfIABASIgVAAIgIABgAuCJTIGwgFIFUhNIHAifIEYi8IgNgSIgMAJIgfgrIArgeIAfApIgRANIAYAiIkqDGInCCgIlYBOImfAFIAAB/IG3gPIFahRIgNguIkmBEIADAUIg0AJIgJg1IA1gIIACANIE2hGIAWBRIluBVInLAQgAv7LcIAAgZIpJAAIgBARIgbgBIgIgBIgSAAIADg1IA0ABIAAAUIJIgCIgBgaIBHAAIAABGgAAYIdIFYiJIEZjTIDNn3IgMibIgPABIgFg1IA1gEIAEA1IgTACIALCfIAAABIjRH+IkeDYIlKCDIAqByIFKiFIEzkQIgegNIkjDjIkDB4IAFAOIgyASIgTgvIAygUIAHATIEBh4IEojnIBDAcIlMEkIlcCOgAzjJtIABgeImRgUIAAAQIg1gDIACg1IAFAAIAIACIAoABIgBATIGRAUIABgXIBGADIgCBGgAxHJgIAAg2IASAAIAChcIIcAeIAAgQIA1AAIAAA1Ig1AAIAAgUIoKgdIgBBKIAQAAIAAA2gAmpGiIheAJIyaiGIgEAUIgegEIgHgCIgBAAIgOgCIAHgyIABgCIA0AIIgCAOISYCHIBrgLIAUBZICJgZIgDgPIA0gJIAJA0Ig0AJIgDgUIiZAcgA0RHgIACgYIl/geIgBATIgeAAIgHgBIgQAAIADg1IACAAIAIAAIAqACIgBAPIGBAeIACgcIBHAFIgGBHgAiyGFIh5AUIADAPIgzAMIgMg0IAzgMIAFAUICKgWIASA8IGYh9IgXguIE+jJIBZiYIA0ghIgKgNIAsgdIAeAqIgrAeIgKgPIgzAfIhXCYIk1DCIAaAzIm/CJgAkjifIi7joIAzgJIC3DlIAqgJIBDE8IgSADIALA2IA1gMIgLg1IgSADIhDk9IABAAIi7jgIA4gLICyDgIAsgKIBEEJIgRAFIANA1IAzgNIgNg0IgRAFIhEkKIABAAIiwjeIBIgNICtDYIAqgJIBFEWIAAAJIABAGIAGAWIgRAEIAMA1IA0gNIgLgvIgBgCIAAgDIgCAAIgDACIgCAAIgMACIgDgPIgBgDIAAgBIgCgFIhIkmIiwjVIBQgOIC0DTIBVFxIAcBnInBCFgALCDHIBIizIgIgEIAOgnIApAOIgPApIgPgGIAAAAIhCCiIAeAMIBikAIANgrIgmgOIBLjMIAlAPIMOrYIABAAIADgEIgCgEIgBgBIgCgEIgBgBIgQgWIgGACIgBACIptFTIAfAwIGGjkIgJgRIAvgZIAZAvIgvAYIgIgNImTDrIgzhMIKSlpIAjAyIABAAIAFAHIgMALIgGAFIAAABIsULdIgfgMIg/CrIAmAMIAAAAIAAAAIgDAKIgBAEIgOAvIhpEQgAKfpjIC0ieICCAWIA4BUIAOgLIAfArIgrAeIgegqIAOgJIg0hPIhygUIioCTIAbF/IA4gsIgTkgIBCg8IgKgKIAlgmIAlAmIglAlIgOgOIg8A3IASEhIhaBEgAOjoMIgPABIgEg0IA1gDIAEA0IgVABIAJBeIERjgIgNgRIArggIAeArIgpAeIgJgLIkpD2g"), this.instance = new t.BirdGradTween("synched", 0), this.instance.parent = this, this.instance.setTransform(-806.6, 220.9);
		for (var o = [this.instance], s = 0; s < o.length; s++) o[s].mask = a;
		this.timeline.addTween(A.Tween.get(this.instance).to({
			x: 791.1,
			y: -343.2
		}, 59).wait(61)), this.shape = new A.Shape, this.shape.graphics.f("#8EC640").s().p("AGQOkIl2i9IHjjEIFlDZIA6CkIhPAcIhFioIgIAEIi8htIAJgRIgugaIgbAvIAuAbIAJgQICvBmIgfAKIBECnIhJAbIhEimIgHAEIjAh1IAKgSIgwgZIgbAuIAwAbIAIgNIC0BqIgiALIBFCnIg6AVIhGiqIgGABIjNh1IAKgQIgugbIgbAvIAuAaIAJgNIC+BtIghAKIBGCsIg5AVgA5BNnIgDgzIADAAIAIgCIAqgBIABARIRZgeIG9hpIgehIIgRAHIgVgzIAzgUIATAzIgPAGIAAABIAlBcInUBsIxaAfIABASIgVAAIgIABgAuCJTIGwgFIFUhNIHAifIEYi8IgNgSIgMAJIgfgrIArgeIAfApIgRANIAYAiIkqDGInCCgIlYBOImfAFIAAB/IG3gPIFahRIgNguIkmBEIADAUIg0AJIgJg1IA1gIIACANIE2hGIAWBRIluBVInLAQgAv7LcIAAgZIpJAAIgBARIgbgBIgIgBIgSAAIADg1IA0ABIAAAUIJIgCIgBgaIBHAAIAABGgAAYIdIFYiJIEZjTIDNn3IgMibIgPABIgFg1IA1gEIAEA1IgTACIALCfIAAABIjRH+IkeDYIlKCDIAqByIFKiFIEzkQIgegNIkjDjIkDB4IAFAOIgyASIgTgvIAygUIAHATIEBh4IEojnIBDAcIlMEkIlcCOgAzjJtIABgeImRgUIAAAQIg1gDIACg1IAFAAIAIACIAoABIgBATIGRAUIABgXIBGADIgCBGgAxHJgIAAg2IASAAIAChcIIcAeIAAgQIA1AAIAAA1Ig1AAIAAgUIoKgdIgBBKIAQAAIAAA2gAmpGiIheAJIyaiGIgEAUIgegEIgHgCIgBAAIgOgCIAHgyIABgCIA0AIIgCAOISYCHIBrgLIAUBZICJgZIgDgPIA0gJIAJA0Ig0AJIgDgUIiZAcgA0RHgIACgYIl/geIgBATIgeAAIgHgBIgQAAIADg1IACAAIAIAAIAqACIgBAPIGBAeIACgcIBHAFIgGBHgAiyGFIh5AUIADAPIgzAMIgMg0IAzgMIAFAUICKgWIASA8IGYh9IgXguIE+jJIBZiYIA0ghIgKgNIAsgdIAeAqIgrAeIgKgPIgzAfIhXCYIk1DCIAaAzIm/CJgAkjifIi7joIAzgJIC3DlIAqgJIBDE8IgSADIALA2IA1gMIgLg1IgSADIhDk9IABAAIi7jgIA4gLICyDgIAsgKIBEEJIgRAFIANA1IAzgNIgNg0IgRAFIhEkKIABAAIiwjeIBIgNICtDYIAqgJIBFEWIAAAJIABAGIAGAWIgRAEIAMA1IA0gNIgLgvIgBgCIAAgDIgCAAIgDACIgCAAIgMACIgDgPIgBgDIAAgBIgCgFIhIkmIiwjVIBQgOIC0DTIBVFxIAcBnInBCFgALCDHIBIizIgIgEIAOgnIApAOIgPApIgPgGIAAAAIhCCiIAeAMIBikAIANgrIgmgOIBLjMIAlAPIMOrYIABAAIADgEIgCgEIgBgBIgCgEIgBgBIgQgWIgGACIgBACIptFTIAfAwIGGjkIgJgRIAvgZIAZAvIgvAYIgIgNImTDrIgzhMIKSlpIAjAyIABAAIAFAHIgMALIgGAFIAAABIsULdIgfgMIg/CrIAmAMIAAAAIAAAAIgDAKIgBAEIgOAvIhpEQgAKfpjIC0ieICCAWIA4BUIAOgLIAfArIgrAeIgegqIAOgJIg0hPIhygUIioCTIAbF/IA4gsIgTkgIBCg8IgKgKIAlgmIAlAmIglAlIgOgOIg8A3IASEhIhaBEgAOjoMIgPABIgEg0IA1gDIAEA0IgVABIAJBeIERjgIgNgRIArggIAeArIgpAeIgJgLIkpD2g"), this.timeline.addTween(A.Tween.get(this.shape).wait(120))
	}).prototype = a = new A.MovieClip, a.nominalBounds = new A.Rectangle(-175.4, -109, 350.8, 218), (t.BirdFloatLoop = function (e, i, n) {
		this.initialize(e, i, n, {}), this.instance = new t.BirdGradMask, this.instance.parent = this, this.timeline.addTween(A.Tween.get(this.instance).wait(1).to({y: -.1}, 0).wait(1).to({y: -.2}, 0).wait(1).to({y: -.4}, 0).wait(1).to({y: -.5}, 0).wait(1).to({y: -.6}, 0).wait(1).to({y: -.7}, 0).wait(1).to({y: -.9}, 0).wait(1).to({y: -1}, 0).wait(1).to({y: -1.1}, 0).wait(1).to({y: -1.2}, 0).wait(1).to({y: -1.3}, 0).wait(1).to({y: -1.5}, 0).wait(1).to({y: -1.6}, 0).wait(1).to({y: -1.7}, 0).wait(1).to({y: -1.8}, 0).wait(1).to({y: -2}, 0).wait(1).to({y: -2.1}, 0).wait(1).to({y: -2.2}, 0).wait(1).to({y: -2.3}, 0).wait(1).to({y: -2.5}, 0).wait(1).to({y: -2.6}, 0).wait(1).to({y: -2.7}, 0).wait(1).to({y: -2.8}, 0).wait(1).to({y: -2.9}, 0).wait(1).to({y: -3.1}, 0).wait(1).to({y: -3.2}, 0).wait(1).to({y: -3.3}, 0).wait(1).to({y: -3.4}, 0).wait(1).to({y: -3.6}, 0).wait(1).to({y: -3.7}, 0).wait(1).to({y: -3.8}, 0).wait(1).to({y: -3.9}, 0).wait(1).to({y: -4}, 0).wait(1).to({y: -4.2}, 0).wait(1).to({y: -4.3}, 0).wait(1).to({y: -4.4}, 0).wait(1).to({y: -4.5}, 0).wait(1).to({y: -4.7}, 0).wait(1).to({y: -4.8}, 0).wait(1).to({y: -4.9}, 0).wait(1).to({y: -5}, 0).wait(1).to({y: -5.2}, 0).wait(1).to({y: -5.3}, 0).wait(1).to({y: -5.4}, 0).wait(1).to({y: -5.3}, 0).wait(1).to({y: -5.2}, 0).wait(1).to({y: -5}, 0).wait(1).to({y: -4.9}, 0).wait(1).to({y: -4.8}, 0).wait(1).to({y: -4.7}, 0).wait(1).to({y: -4.5}, 0).wait(1).to({y: -4.4}, 0).wait(1).to({y: -4.3}, 0).wait(1).to({y: -4.2}, 0).wait(1).to({y: -4}, 0).wait(1).to({y: -3.9}, 0).wait(1).to({y: -3.8}, 0).wait(1).to({y: -3.7}, 0).wait(1).to({y: -3.6}, 0).wait(1).to({y: -3.4}, 0).wait(1).to({y: -3.3}, 0).wait(1).to({y: -3.2}, 0).wait(1).to({y: -3.1}, 0).wait(1).to({y: -2.9}, 0).wait(1).to({y: -2.8}, 0).wait(1).to({y: -2.7}, 0).wait(1).to({y: -2.6}, 0).wait(1).to({y: -2.5}, 0).wait(1).to({y: -2.3}, 0).wait(1).to({y: -2.2}, 0).wait(1).to({y: -2.1}, 0).wait(1).to({y: -2}, 0).wait(1).to({y: -1.8}, 0).wait(1).to({y: -1.7}, 0).wait(1).to({y: -1.6}, 0).wait(1).to({y: -1.5}, 0).wait(1).to({y: -1.3}, 0).wait(1).to({y: -1.2}, 0).wait(1).to({y: -1.1}, 0).wait(1).to({y: -1}, 0).wait(1).to({y: -.9}, 0).wait(1).to({y: -.7}, 0).wait(1).to({y: -.6}, 0).wait(1).to({y: -.5}, 0).wait(1).to({y: -.4}, 0).wait(1).to({y: -.2}, 0).wait(1).to({y: -.1}, 0).wait(1).to({y: 0}, 0).wait(1))
	}).prototype = a = new A.MovieClip, a.nominalBounds = new A.Rectangle(-1381.6, -209.4, 1556.9, 860.6), (t.TextArrowLoop = function (e, i, n) {
		this.initialize(e, i, n, {}), this.frame_85 = function () {
			this.stop()
		}, this.timeline.addTween(A.Tween.get(this).wait(85).call(this.frame_85).wait(15)), this.instance = new t.BGArrow, this.instance.parent = this, this.instance.setTransform(137.1, 0), this.instance.alpha = 0, this.timeline.addTween(A.Tween.get(this.instance).wait(1).to({
			x: 121.9,
			alpha: .393
		}, 0).wait(1).to({x: 107.3, alpha: .772}, 0).wait(1).to({
			x: 93.3,
			alpha: 1
		}, 0).wait(1).to({x: 79.7}, 0).wait(1).to({x: 66.7}, 0).wait(1).to({x: 54.3}, 0).wait(1).to({x: 42.3}, 0).wait(1).to({x: 30.9}, 0).wait(1).to({x: 20}, 0).wait(1).to({x: 9.7}, 0).wait(1).to({x: -.1}, 0).wait(1).to({x: -9.4}, 0).wait(1).to({x: -18.2}, 0).wait(1).to({x: -26.4}, 0).wait(1).to({x: -34.1}, 0).wait(1).to({x: -41.3}, 0).wait(1).to({x: -47.9}, 0).wait(1).to({x: -54}, 0).wait(1).to({x: -59.6}, 0).wait(1).to({x: -64.6}, 0).wait(1).to({x: -69.1}, 0).wait(1).to({x: -73.1}, 0).wait(1).to({x: -76.5}, 0).wait(1).to({x: -79.5}, 0).wait(1).to({x: -81.9}, 0).wait(1).to({x: -83.7}, 0).wait(1).to({x: -85}, 0).wait(1).to({x: -85.8}, 0).wait(1).to({x: -86.1}, 0).wait(58).to({
			x: -89.7,
			alpha: .8
		}, 0).wait(1).to({x: -93.3, alpha: .6}, 0).wait(1).to({x: -96.9, alpha: .4}, 0).wait(1).to({
			x: -100.5,
			alpha: .2
		}, 0).wait(1).to({
			x: -104.1,
			alpha: 0
		}, 0).to({_off: !0}, 1).wait(8)), this.instance_1 = new t.BGArrow, this.instance_1.parent = this, this.instance_1.setTransform(-40, 0), this.instance_1.alpha = 0, this.instance_1._off = !0, this.timeline.addTween(A.Tween.get(this.instance_1).wait(21).to({_off: !1}, 0).wait(1).to({alpha: .5}, 0).wait(1).to({alpha: 1}, 0).wait(1).to({x: -43}, 0).wait(65).to({
			x: -46.6,
			alpha: .8
		}, 0).wait(1).to({x: -50.2, alpha: .6}, 0).wait(1).to({x: -53.8, alpha: .4}, 0).wait(1).to({
			x: -57.4,
			alpha: .2
		}, 0).wait(1).to({
			x: -61,
			alpha: 0
		}, 0).to({_off: !0}, 1).wait(6)), this.instance_2 = new t.BGArrow, this.instance_2.parent = this, this.instance_2.setTransform(3, 0), this.instance_2.alpha = 0, this.instance_2._off = !0, this.timeline.addTween(A.Tween.get(this.instance_2).wait(16).to({_off: !1}, 0).wait(1).to({alpha: .5}, 0).wait(1).to({alpha: 1}, 0).wait(1).to({x: 0}, 0).wait(72).to({
			x: -3.6,
			alpha: .8
		}, 0).wait(1).to({x: -7.2, alpha: .6}, 0).wait(1).to({x: -10.8, alpha: .4}, 0).wait(1).to({
			x: -14.4,
			alpha: .2
		}, 0).wait(1).to({
			x: -18,
			alpha: 0
		}, 0).to({_off: !0}, 1).wait(4)), this.instance_3 = new t.BGArrow, this.instance_3.parent = this, this.instance_3.setTransform(46.1, 0), this.instance_3.alpha = 0, this.instance_3._off = !0, this.timeline.addTween(A.Tween.get(this.instance_3).wait(10).to({_off: !1}, 0).wait(1).to({alpha: .5}, 0).wait(1).to({alpha: 1}, 0).wait(1).to({x: 43.1}, 0).wait(80).to({
			x: 39.5,
			alpha: .8
		}, 0).wait(1).to({x: 35.9, alpha: .6}, 0).wait(1).to({x: 32.3, alpha: .4}, 0).wait(1).to({
			x: 28.7,
			alpha: .2
		}, 0).wait(1).to({
			x: 25.1,
			alpha: 0
		}, 0).to({_off: !0}, 1).wait(2)), this.instance_4 = new t.BGArrow, this.instance_4.parent = this, this.instance_4.setTransform(89.1, 0), this.instance_4.alpha = 0, this.instance_4._off = !0, this.timeline.addTween(A.Tween.get(this.instance_4).wait(5).to({_off: !1}, 0).wait(1).to({alpha: .5}, 0).wait(1).to({alpha: 1}, 0).wait(1).to({x: 86.1}, 0).wait(87).to({
			x: 82.5,
			alpha: .8
		}, 0).wait(1).to({x: 78.9, alpha: .6}, 0).wait(1).to({x: 75.3, alpha: .4}, 0).wait(1).to({
			x: 71.7,
			alpha: .2
		}, 0).wait(1).to({x: 68.1, alpha: 0}, 0).wait(1))
	}).prototype = a = new A.MovieClip, a.nominalBounds = new A.Rectangle(123.6, -21.5, 27, 43), (t.TextMotion = function (e, i, n) {
		this.initialize(e, i, n, {}), this.frame_119 = function () {
			this.stop()
		}, this.timeline.addTween(A.Tween.get(this).wait(119).call(this.frame_119).wait(1)), this.instance = new t.Make, this.instance.parent = this, this.instance.setTransform(244.7, -18.8, 1, 1, 0, 0, 0, 109.4, 41.6), this.instance.alpha = 0, this.instance._off = !0, this.timeline.addTween(A.Tween.get(this.instance).wait(4).to({_off: !1}, 0).to({
			y: 20.2,
			alpha: 1
		}, 4, A.Ease.get(1)).to({y: -5.8}, 7).wait(105)), this.instance_1 = new t.Positive, this.instance_1.parent = this, this.instance_1.setTransform(379.1, 34.6, 1, 1, 0, 0, 0, 245.1, 33.6), this.instance_1.alpha = 0, this.instance_1._off = !0, this.timeline.addTween(A.Tween.get(this.instance_1).wait(11).to({_off: !1}, 0).to({
			y: 73.6,
			alpha: 1
		}, 4, A.Ease.get(1)).to({y: 47.6}, 7, A.Ease.get(1)).wait(98)), this.instance_2 = new t.Impacts, this.instance_2.parent = this, this.instance_2.setTransform(299.3, 96.4, 1, 1, 0, 0, 0, 163.3, 33.6), this.instance_2.alpha = 0, this.instance_2._off = !0, this.timeline.addTween(A.Tween.get(this.instance_2).wait(15).to({_off: !1}, 0).to({
			y: 122.4,
			alpha: 1
		}, 4, A.Ease.get(1)).to({y: 109.4}, 7, A.Ease.get(1)).wait(94)), this.instance_3 = new t.World, this.instance_3.parent = this, this.instance_3.setTransform(386.1, 162.4, .822, .822, 0, 0, 0, 331.2, 108.2), this.instance_3.alpha = 0, this.instance_3._off = !0, this.timeline.addTween(A.Tween.get(this.instance_3).wait(22).to({_off: !1}, 0).to({
			regY: 108.1,
			scaleX: 1.16,
			scaleY: 1.16,
			x: 386.2,
			y: 162.3,
			alpha: 1
		}, 4, A.Ease.get(1)).to({
			regX: 331.1,
			scaleX: 1,
			scaleY: 1,
			x: 386
		}, 9, A.Ease.get(1)).wait(85)), this.instance_4 = new t.THE, this.instance_4.parent = this, this.instance_4.setTransform(63.4, 284.1, 1, 1, 0, 0, 0, 56.9, 22), this.instance_4.alpha = 0, this.instance_4._off = !0, this.timeline.addTween(A.Tween.get(this.instance_4).wait(26).to({_off: !1}, 0).to({
			x: 51.7,
			y: 231.6,
			alpha: 1
		}, 4, A.Ease.get(.96)).to({
			x: 56.9,
			y: 255.6
		}, 9, A.Ease.get(1)).wait(81)), this.instance_5 = new t.www, this.instance_5.parent = this, this.instance_5.setTransform(276.5, 321.1, 1, 1, 0, 0, 0, 184.7, 16.1), this.instance_5.alpha = 0, this.instance_5._off = !0, this.timeline.addTween(A.Tween.get(this.instance_5).wait(27).to({_off: !1}, 0).to({
			x: 336.5,
			alpha: 1
		}, 4, A.Ease.get(1)).to({x: 314}, 9, A.Ease.get(-1)).wait(80))
	}).prototype = a = new A.MovieClip, a.nominalBounds = null, (t.Circuit2Mask = function (e, i, n) {
		this.initialize(e, i, n, {}), this.frame_109 = function () {
			this.looped || (this.looped = 1), 2 == this.looped++ && this.stop()
		}, this.timeline.addTween(A.Tween.get(this).wait(109).call(this.frame_109).wait(1));
		var a = new A.Shape;
		a._off = !0, a.graphics.p("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"), a.setTransform(266.7, -5.4), this.instance = new t.CircuitMaskTween("synched", 0), this.instance.parent = this, this.instance.setTransform(-867.7, 10.7);
		for (var o = [this.instance], s = 0; s < o.length; s++) o[s].mask = a;
		this.timeline.addTween(A.Tween.get(this.instance).to({x: 1899.2}, 100, A.Ease.get(1)).wait(10))
	}).prototype = a = new A.MovieClip, a.nominalBounds = null, (t.Circuit1Mask = function (e, i, n) {
		this.initialize(e, i, n, {}), this.frame_104 = function () {
			this.looped || (this.looped = 1), 2 == this.looped++ && this.stop()
		}, this.timeline.addTween(A.Tween.get(this).wait(104).call(this.frame_104).wait(1));
		var a = new A.Shape;
		a._off = !0, a.graphics.p("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"), this.instance = new t.CircuitMaskTween("synched", 0), this.instance.parent = this, this.instance.setTransform(-867.7, 10.7);
		for (var o = [this.instance], s = 0; s < o.length; s++) o[s].mask = a;
		this.timeline.addTween(A.Tween.get(this.instance).to({x: 1167.9}, 95, A.Ease.get(1)).wait(10))
	}).prototype = a = new A.MovieClip, a.nominalBounds = new A.Rectangle(-322.6, -297.2, 141.5, 594.5), (t.BGDots = function (e, i, n) {
		this.initialize(e, i, n, {}), this.frame_89 = function () {
			this.stop()
		}, this.timeline.addTween(A.Tween.get(this).wait(89).call(this.frame_89).wait(1));
		var a = new A.Shape;
		a._off = !0;
		var o = (new A.Graphics).p("AUbHEQgLgLAAgPIAAAAQAAgPALgLIAAAAQALgLAPAAIAAAAQAPAAAMALIAAAAQAKAKABAQIAAAAQgBAPgKALIAAAAQgMAKgPAAIAAAAQgPAAgLgKgAQ9HEQgLgLAAgPIAAAAQAAgQALgKIAAAAQAKgLAQAAIAAAAQAQAAAKALIAAAAQALAKAAAQIAAAAQAAAPgLALIAAAAQgKAKgQAAIAAAAQgQAAgKgKgANeHEQgKgLgBgPIAAAAQABgQAKgKIAAAAQAMgLAPAAIAAAAQAPAAALALIAAAAQALALAAAPIAAAAQAAAPgLALIAAAAQgLAKgPAAIAAAAQgPAAgMgKgAKBHEQgMgLAAgPIAAAAQAAgQAMgKIAAAAQAKgLAQAAIAAAAQAPAAAKALIAAAAQAMAKAAAQIAAAAQAAAPgMALIAAAAQgKAKgPAAIAAAAQgQAAgKgKgAGjHEQgMgLABgPIAAAAQgBgQAMgKIAAAAQAKgLAQAAIAAAAQAPAAALALIAAAAQALAKAAAQIAAAAQAAAPgLALIAAAAQgLAKgPAAIAAAAQgQAAgKgKgADEHEQgLgLAAgPIAAAAQAAgQALgKIAAAAQALgLAPAAIAAAAQAQAAAKALIAAAAQALAKAAAQIAAAAQAAAPgLALIAAAAQgKAKgQAAIAAAAQgPAAgLgKgAgZHEQgLgLAAgPIAAAAQAAgQALgKIAAAAQALgLAOAAIAAAAQAPAAALALIAAAAQALAKAAAQIAAAAQAAAPgLALIAAAAQgLAKgPAAIAAAAQgOAAgLgKgAj3HEQgLgLAAgPIAAAAQAAgQALgKIAAAAQAKgLAQAAIAAAAQAPAAALALIAAAAQAKAKABAQIAAAAQgBAPgKALIAAAAQgLAKgPAAIAAAAQgQAAgKgKgAnWHEQgLgLABgPIAAAAQgBgQALgKIAAAAQALgLAPAAIAAAAQAQAAALALIAAAAQALAKgBAQIAAAAQABAPgLALIAAAAQgLAKgQAAIAAAAQgPAAgLgKgAq0HEQgLgLAAgPIAAAAQAAgQALgKIAAAAQALgLAPAAIAAAAQAQAAAKALIAAAAQAMALAAAPIAAAAQAAAPgMALIAAAAQgKAKgQAAIAAAAQgPAAgLgKgAuSHEQgLgLAAgPIAAAAQAAgQALgKIAAAAQALgLAPAAIAAAAQAPAAALALIAAAAQALAKAAAQIAAAAQAAAPgLALIAAAAQgLAKgPAAIAAAAQgPAAgLgKgAxwHEQgLgLAAgPIAAAAQAAgQALgKIAAAAQAKgLAQAAIAAAAQAQAAAKALIAAAAQALAKAAAQIAAAAQAAAPgLALIAAAAQgKAKgQAAIAAAAQgQAAgKgKgA1PHEQgKgLgBgPIAAAAQABgQAKgKIAAAAQALgLAPAAIAAAAQAQAAAKALIAAAAQALAKAAAQIAAAAQAAAPgLALIAAAAQgKAKgQAAIAAAAQgPAAgLgKgAUbEYQgLgKAAgQIAAAAQAAgPALgKIAAAAQALgLAPAAIAAAAQAPAAAMALIAAAAQAKAKABAPIAAAAQgBAQgKAKIAAAAQgMALgPAAIAAAAQgPAAgLgLgAQ9EYQgLgKAAgQIAAAAQAAgPALgKIAAAAQAKgLAQAAIAAAAQAQAAAKALIAAAAQALAKAAAPIAAAAQAAAQgLAKIAAAAQgKALgQAAIAAAAQgQAAgKgLgANeEYQgKgKgBgQIAAAAQABgPAKgKIAAAAQAMgLAPAAIAAAAQAPAAALALIAAAAQALAKAAAPIAAAAQAAAQgLAKIAAAAQgLALgPAAIAAAAQgPAAgMgLgAKBEYQgMgKAAgQIAAAAQAAgPAMgKIAAAAQAKgLAQAAIAAAAQAPAAAKALIAAAAQAMAKAAAPIAAAAQAAAQgMAKIAAAAQgKALgPAAIAAAAQgQAAgKgLgAGjEYQgMgKABgQIAAAAQgBgPAMgKIAAAAQAKgLAQAAIAAAAQAPAAALALIAAAAQALAKAAAPIAAAAQAAAQgLAKIAAAAQgLALgPAAIAAAAQgQAAgKgLgADEEYQgLgKAAgQIAAAAQAAgPALgKIAAAAQALgLAPAAIAAAAQAQAAAKALIAAAAQALAKAAAPIAAAAQAAAQgLAKIAAAAQgKALgQAAIAAAAQgPAAgLgLgAgZEYQgLgKAAgQIAAAAQAAgPALgKIAAAAQALgLAOAAIAAAAQAPAAALALIAAAAQALAKAAAPIAAAAQAAAQgLAKIAAAAQgLALgPAAIAAAAQgOAAgLgLgAj3EYQgLgKAAgQIAAAAQAAgPALgKIAAAAQAKgLAQAAIAAAAQAPAAALALIAAAAQAKAKABAPIAAAAQgBAQgKAKIAAAAQgLALgPAAIAAAAQgQAAgKgLgAnWEYQgLgKABgQIAAAAQgBgPALgKIAAAAQALgLAPAAIAAAAQAQAAALALIAAAAQALAKgBAPIAAAAQABAQgLAKIAAAAQgLALgQAAIAAAAQgPAAgLgLgAq0EYQgLgKAAgQIAAAAQAAgPALgKIAAAAQALgLAPAAIAAAAQAQAAAKALIAAAAQAMAKAAAPIAAAAQAAAQgMAKIAAAAQgKALgQAAIAAAAQgPAAgLgLgAuSEYQgLgKAAgQIAAAAQAAgPALgKIAAAAQALgLAPAAIAAAAQAPAAALALIAAAAQALAKAAAPIAAAAQAAAQgLAKIAAAAQgLALgPAAIAAAAQgPAAgLgLgAxwEYQgLgKAAgQIAAAAQAAgPALgKIAAAAQAKgLAQAAIAAAAQAQAAAKALIAAAAQALAKAAAPIAAAAQAAAQgLAKIAAAAQgKALgQAAIAAAAQgQAAgKgLgA1PEYQgKgKgBgQIAAAAQABgPAKgKIAAAAQALgLAPAAIAAAAQAQAAAKALIAAAAQALAKAAAPIAAAAQAAAQgLAKIAAAAQgKALgQAAIAAAAQgPAAgLgLgAUbBvQgLgLAAgPIAAAAQAAgPALgLIAAAAQALgLAPAAIAAAAQAPAAAMALIAAAAQAKALABAPIAAAAQgBAPgKALIAAAAQgMAKgPAAIAAAAQgPAAgLgKgAQ9BvQgLgLAAgPIAAAAQAAgPALgLIAAAAQAKgLAQAAIAAAAQAQAAAKALIAAAAQALALAAAPIAAAAQAAAPgLALIAAAAQgKAKgQAAIAAAAQgQAAgKgKgANeBvQgKgLgBgPIAAAAQABgPAKgLIAAAAQAMgLAPAAIAAAAQAPAAALALIAAAAQALALAAAPIAAAAQAAAPgLALIAAAAQgLAKgPAAIAAAAQgPAAgMgKgAKBBvQgMgLAAgPIAAAAQAAgPAMgLIAAAAQAKgLAQAAIAAAAQAPAAAKALIAAAAQAMALAAAPIAAAAQAAAPgMALIAAAAQgKAKgPAAIAAAAQgQAAgKgKgAGjBvQgMgLABgPIAAAAQgBgPAMgLIAAAAQAKgLAQAAIAAAAQAPAAALALIAAAAQALALAAAPIAAAAQAAAPgLALIAAAAQgLAKgPAAIAAAAQgQAAgKgKgADEBvQgLgLAAgPIAAAAQAAgPALgLIAAAAQALgLAPAAIAAAAQAQAAAKALIAAAAQALALAAAPIAAAAQAAAPgLALIAAAAQgKAKgQAAIAAAAQgPAAgLgKgAgZBvQgLgLAAgPIAAAAQAAgPALgLIAAAAQALgLAOAAIAAAAQAPAAALALIAAAAQALALAAAPIAAAAQAAAPgLALIAAAAQgLAKgPAAIAAAAQgOAAgLgKgAj3BvQgLgLAAgPIAAAAQAAgPALgLIAAAAQAKgLAQAAIAAAAQAPAAALALIAAAAQAKALABAPIAAAAQgBAPgKALIAAAAQgLAKgPAAIAAAAQgQAAgKgKgAnWBvQgLgLABgPIAAAAQgBgPALgLIAAAAQALgLAPAAIAAAAQAQAAALALIAAAAQALALgBAPIAAAAQABAPgLALIAAAAQgLAKgQAAIAAAAQgPAAgLgKgAq0BvQgLgLAAgPIAAAAQAAgPALgLIAAAAQALgLAPAAIAAAAQAQAAAKALIAAAAQAMALAAAPIAAAAQAAAPgMALIAAAAQgKAKgQAAIAAAAQgPAAgLgKgAuSBvQgLgLAAgPIAAAAQAAgPALgLIAAAAQALgLAPAAIAAAAQAPAAALALIAAAAQALALAAAPIAAAAQAAAPgLALIAAAAQgLAKgPAAIAAAAQgPAAgLgKgAxwBvQgLgLAAgPIAAAAQAAgPALgLIAAAAQAKgLAQAAIAAAAQAQAAAKALIAAAAQALALAAAPIAAAAQAAAPgLALIAAAAQgKAKgQAAIAAAAQgQAAgKgKgA1PBvQgKgLgBgPIAAAAQABgPAKgLIAAAAQALgLAPAAIAAAAQAQAAAKALIAAAAQALALAAAPIAAAAQAAAPgLALIAAAAQgKAKgQAAIAAAAQgPAAgLgKgAUbg6QgLgLAAgPIAAAAQAAgPALgKIAAAAQALgLAPAAIAAAAQAPAAAMALIAAAAQAKAKABAPIAAAAQgBAPgKALIAAAAQgMALgPAAIAAAAQgPAAgLgLgAQ9g6QgLgLAAgPIAAAAQAAgPALgKIAAAAQAKgLAQAAIAAAAQAQAAAKALIAAAAQALAKAAAPIAAAAQAAAPgLALIAAAAQgKALgQAAIAAAAQgQAAgKgLgANeg6QgKgLgBgPIAAAAQABgPAKgKIAAAAQAMgLAPAAIAAAAQAPAAALALIAAAAQALAKAAAPIAAAAQAAAPgLALIAAAAQgLALgPAAIAAAAQgPAAgMgLgAKBg6QgMgLAAgPIAAAAQAAgPAMgKIAAAAQAKgLAQAAIAAAAQAPAAAKALIAAAAQAMAKAAAPIAAAAQAAAPgMALIAAAAQgKALgPAAIAAAAQgQAAgKgLgAGjg6QgMgLABgPIAAAAQgBgPAMgKIAAAAQAKgLAQAAIAAAAQAPAAALALIAAAAQALAKAAAPIAAAAQAAAPgLALIAAAAQgLALgPAAIAAAAQgQAAgKgLgADEg6QgLgLAAgPIAAAAQAAgPALgKIAAAAQALgLAPAAIAAAAQAQAAAKALIAAAAQALAKAAAPIAAAAQAAAPgLALIAAAAQgKALgQAAIAAAAQgPAAgLgLgAgZg6QgLgLAAgPIAAAAQAAgPALgKIAAAAQALgLAOAAIAAAAQAPAAALALIAAAAQALAKAAAPIAAAAQAAAPgLALIAAAAQgLALgPAAIAAAAQgOAAgLgLgAj3g6QgLgLAAgPIAAAAQAAgPALgKIAAAAQAKgLAQAAIAAAAQAPAAALALIAAAAQAKAKABAPIAAAAQgBAPgKALIAAAAQgLALgPAAIAAAAQgQAAgKgLgAnWg6QgLgLABgPIAAAAQgBgPALgKIAAAAQALgLAPAAIAAAAQAQAAALALIAAAAQALAKgBAPIAAAAQABAPgLALIAAAAQgLALgQAAIAAAAQgPAAgLgLgAq0g6QgLgLAAgPIAAAAQAAgPALgKIAAAAQALgLAPAAIAAAAQAQAAAKALIAAAAQAMAKAAAPIAAAAQAAAPgMALIAAAAQgKALgQAAIAAAAQgPAAgLgLgAuSg6QgLgLAAgPIAAAAQAAgPALgKIAAAAQALgLAPAAIAAAAQAPAAALALIAAAAQALAKAAAPIAAAAQAAAPgLALIAAAAQgLALgPAAIAAAAQgPAAgLgLgAxwg6QgLgLAAgPIAAAAQAAgPALgKIAAAAQAKgLAQAAIAAAAQAQAAAKALIAAAAQALAKAAAPIAAAAQAAAPgLALIAAAAQgKALgQAAIAAAAQgQAAgKgLgA1Pg6QgKgLgBgPIAAAAQABgPAKgKIAAAAQALgLAPAAIAAAAQAQAAAKALIAAAAQALAKAAAPIAAAAQAAAPgLALIAAAAQgKALgQAAIAAAAQgPAAgLgLgAUbjlQgLgLAAgPIAAAAQAAgPALgLIAAAAQALgLAPAAIAAAAQAPAAAMALIAAAAQAKALABAPIAAAAQgBAPgKALIAAAAQgMALgPAAIAAAAQgPAAgLgLgAQ9jlQgLgLAAgPIAAAAQAAgPALgLIAAAAQAKgLAQAAIAAAAQAQAAAKALIAAAAQALALAAAPIAAAAQAAAPgLALIAAAAQgKALgQAAIAAAAQgQAAgKgLgANejlQgKgLgBgPIAAAAQABgPAKgLIAAAAQAMgLAPAAIAAAAQAPAAALALIAAAAQALALAAAPIAAAAQAAAPgLALIAAAAQgLALgPAAIAAAAQgPAAgMgLgAKBjlQgMgLAAgPIAAAAQAAgPAMgLIAAAAQAKgLAQAAIAAAAQAPAAAKALIAAAAQAMALAAAPIAAAAQAAAPgMALIAAAAQgKALgPAAIAAAAQgQAAgKgLgAGjjlQgMgLABgPIAAAAQgBgPAMgLIAAAAQAKgLAQAAIAAAAQAPAAALALIAAAAQALALAAAPIAAAAQAAAPgLALIAAAAQgLALgPAAIAAAAQgQAAgKgLgADEjlQgLgLAAgPIAAAAQAAgPALgLIAAAAQALgLAPAAIAAAAQAQAAAKALIAAAAQALALAAAPIAAAAQAAAPgLALIAAAAQgKALgQAAIAAAAQgPAAgLgLgAgZjlQgLgLAAgPIAAAAQAAgPALgLIAAAAQALgLAOAAIAAAAQAPAAALALIAAAAQALALAAAPIAAAAQAAAPgLALIAAAAQgLALgPAAIAAAAQgOAAgLgLgAj3jlQgLgLAAgPIAAAAQAAgPALgLIAAAAQAKgLAQAAIAAAAQAPAAALALIAAAAQAKALABAPIAAAAQgBAPgKALIAAAAQgLALgPAAIAAAAQgQAAgKgLgAnWjlQgLgLABgPIAAAAQgBgPALgLIAAAAQALgLAPAAIAAAAQAQAAALALIAAAAQALALgBAPIAAAAQABAPgLALIAAAAQgLALgQAAIAAAAQgPAAgLgLgAq0jlQgLgLAAgPIAAAAQAAgPALgLIAAAAQALgLAPAAIAAAAQAQAAAKALIAAAAQAMALAAAPIAAAAQAAAPgMALIAAAAQgKALgQAAIAAAAQgPAAgLgLgAuSjlQgLgLAAgPIAAAAQAAgPALgLIAAAAQALgLAPAAIAAAAQAPAAALALIAAAAQALALAAAPIAAAAQAAAPgLALIAAAAQgLALgPAAIAAAAQgPAAgLgLgAxwjlQgLgLAAgPIAAAAQAAgPALgLIAAAAQAKgLAQAAIAAAAQAQAAAKALIAAAAQALALAAAPIAAAAQAAAPgLALIAAAAQgKALgQAAIAAAAQgQAAgKgLgA1PjlQgKgLgBgPIAAAAQABgPAKgLIAAAAQALgLAPAAIAAAAQAQAAAKALIAAAAQALALAAAPIAAAAQAAAPgLALIAAAAQgKALgQAAIAAAAQgPAAgLgLgAUbmPQgLgKAAgQIAAAAQAAgPALgKIAAAAQALgLAPAAIAAAAQAPAAAMALIAAAAQAKAKABAPIAAAAQgBAQgKAKIAAAAQgMALgPAAIAAAAQgPAAgLgLgAQ9mPQgLgKAAgQIAAAAQAAgPALgKIAAAAQAKgLAQAAIAAAAQAQAAAKALIAAAAQALAKAAAPIAAAAQAAAQgLAKIAAAAQgKALgQAAIAAAAQgQAAgKgLgANemPQgKgKgBgQIAAAAQABgPAKgKIAAAAQAMgLAPAAIAAAAQAPAAALALIAAAAQALAKAAAPIAAAAQAAAQgLAKIAAAAQgLALgPAAIAAAAQgPAAgMgLgAKBmPQgMgKAAgQIAAAAQAAgPAMgKIAAAAQAKgLAQAAIAAAAQAPAAAKALIAAAAQAMAKAAAPIAAAAQAAAQgMAKIAAAAQgKALgPAAIAAAAQgQAAgKgLgAGjmPQgMgKABgQIAAAAQgBgPAMgKIAAAAQAKgLAQAAIAAAAQAPAAALALIAAAAQALAKAAAPIAAAAQAAAQgLAKIAAAAQgLALgPAAIAAAAQgQAAgKgLgADEmPQgLgKAAgQIAAAAQAAgPALgKIAAAAQALgLAPAAIAAAAQAQAAAKALIAAAAQALAKAAAPIAAAAQAAAQgLAKIAAAAQgKALgQAAIAAAAQgPAAgLgLgAgZmPQgLgKAAgQIAAAAQAAgPALgKIAAAAQALgLAOAAIAAAAQAPAAALALIAAAAQALAKAAAPIAAAAQAAAQgLAKIAAAAQgLALgPAAIAAAAQgOAAgLgLgAj3mPQgLgKAAgQIAAAAQAAgPALgKIAAAAQAKgLAQAAIAAAAQAPAAALALIAAAAQAKAKABAPIAAAAQgBAQgKAKIAAAAQgLALgPAAIAAAAQgQAAgKgLgAnWmPQgLgKABgQIAAAAQgBgPALgKIAAAAQALgLAPAAIAAAAQAQAAALALIAAAAQALAKgBAPIAAAAQABAQgLAKIAAAAQgLALgQAAIAAAAQgPAAgLgLgAq0mPQgLgKAAgQIAAAAQAAgPALgKIAAAAQALgLAPAAIAAAAQAQAAAKALIAAAAQAMAKAAAPIAAAAQAAAQgMAKIAAAAQgKALgQAAIAAAAQgPAAgLgLgAuSmPQgLgKAAgQIAAAAQAAgPALgKIAAAAQALgLAPAAIAAAAQAPAAALALIAAAAQALAKAAAPIAAAAQAAAQgLAKIAAAAQgLALgPAAIAAAAQgPAAgLgLgAxwmPQgLgKAAgQIAAAAQAAgPALgKIAAAAQAKgLAQAAIAAAAQAQAAAKALIAAAAQALAKAAAPIAAAAQAAAQgLAKIAAAAQgKALgQAAIAAAAQgQAAgKgLgA1PmPQgKgKgBgQIAAAAQABgPAKgKIAAAAQALgLAPAAIAAAAQAQAAAKALIAAAAQALAKAAAPIAAAAQAAAQgLAKIAAAAQgKALgQAAIAAAAQgPAAgLgLg");
		this.timeline.addTween(A.Tween.get(a).to({graphics: null, x: 0, y: 0}).wait(29).to({
			graphics: o,
			x: 0,
			y: 0
		}).wait(61)), this.instance = new t.BGDotsGradTween("synched", 0), this.instance.parent = this, this.instance.setTransform(-407.1, -4.3), this.instance._off = !0;
		for (var s = [this.instance], r = 0; r < s.length; r++) s[r].mask = a;
		this.timeline.addTween(A.Tween.get(this.instance).wait(29).to({_off: !1}, 0).to({x: 404.9}, 35).wait(26)), this.shape = new A.Shape, this.shape.graphics.f("#3EB333").s().p("AEzHEQgLgLAAgPQAAgQALgKQALgLAPAAQAQAAAKALQAMALAAAPQAAAPgMALQgKAKgQAAQgPAAgLgKgABVHEQgLgLAAgPQAAgQALgKQAKgLAQAAQAPAAALALQALAKAAAQQAAAPgLALQgLAKgPAAQgQAAgKgKgAiIHEQgLgLAAgPQAAgQALgKQAKgLAQAAQAQAAAKALQALAKAAAQQAAAPgLALQgKAKgQAAQgQAAgKgKgAlnHEQgKgLgBgPQABgQAKgKQALgLAPAAQAQAAAKALQALAKAAAQQAAAPgLALQgKAKgQAAQgPAAgLgKgAEzEYQgLgKAAgQQAAgPALgKQALgLAPAAQAQAAAKALQAMAKAAAPQAAAQgMAKQgKALgQAAQgPAAgLgLgABVEYQgLgKAAgQQAAgPALgKQAKgLAQAAQAPAAALALQALAKAAAPQAAAQgLAKQgLALgPAAQgQAAgKgLgAiIEYQgLgKAAgQQAAgPALgKQAKgLAQAAQAQAAAKALQALAKAAAPQAAAQgLAKQgKALgQAAQgQAAgKgLgAlnEYQgKgKgBgQQABgPAKgKQALgLAPAAQAQAAAKALQALAKAAAPQAAAQgLAKQgKALgQAAQgPAAgLgLgAEzBvQgLgLAAgPQAAgPALgLQALgLAPAAQAQAAAKALQAMALAAAPQAAAPgMALQgKAKgQAAQgPAAgLgKgABVBvQgLgLAAgPQAAgPALgLQAKgLAQAAQAPAAALALQALALAAAPQAAAPgLALQgLAKgPAAQgQAAgKgKgAiIBvQgLgLAAgPQAAgPALgLQAKgLAQAAQAQAAAKALQALALAAAPQAAAPgLALQgKAKgQAAQgQAAgKgKgAlnBvQgKgLgBgPQABgPAKgLQALgLAPAAQAQAAAKALQALALAAAPQAAAPgLALQgKAKgQAAQgPAAgLgKgAEzg6QgLgLAAgPQAAgPALgKQALgLAPAAQAQAAAKALQAMAKAAAPQAAAPgMALQgKALgQAAQgPAAgLgLgABVg6QgLgLAAgPQAAgPALgKQAKgLAQAAQAPAAALALQALAKAAAPQAAAPgLALQgLALgPAAQgQAAgKgLgAiIg6QgLgLAAgPQAAgPALgKQAKgLAQAAQAQAAAKALQALAKAAAPQAAAPgLALQgKALgQAAQgQAAgKgLgAlng6QgKgLgBgPQABgPAKgKQALgLAPAAQAQAAAKALQALAKAAAPQAAAPgLALQgKALgQAAQgPAAgLgLgAEzjlQgLgLAAgPQAAgPALgLQALgLAPAAQAQAAAKALQAMALAAAPQAAAPgMALQgKALgQAAQgPAAgLgLgABVjlQgLgLAAgPQAAgPALgLQAKgLAQAAQAPAAALALQALALAAAPQAAAPgLALQgLALgPAAQgQAAgKgLgAiIjlQgLgLAAgPQAAgPALgLQAKgLAQAAQAQAAAKALQALALAAAPQAAAPgLALQgKALgQAAQgQAAgKgLgAlnjlQgKgLgBgPQABgPAKgLQALgLAPAAQAQAAAKALQALALAAAPQAAAPgLALQgKALgQAAQgPAAgLgLgAEzmPQgLgKAAgQQAAgPALgKQALgLAPAAQAQAAAKALQAMAKAAAPQAAAQgMAKQgKALgQAAQgPAAgLgLgABVmPQgLgKAAgQQAAgPALgKQAKgLAQAAQAPAAALALQALAKAAAPQAAAQgLAKQgLALgPAAQgQAAgKgLgAiImPQgLgKAAgQQAAgPALgKQAKgLAQAAQAQAAAKALQALAKAAAPQAAAQgLAKQgKALgQAAQgQAAgKgLgAlnmPQgKgKgBgQQABgPAKgKQALgLAPAAQAQAAAKALQALAKAAAPQAAAQgLAKQgKALgQAAQgPAAgLgLg"), this.shape.setTransform(-100, 0), this.shape_1 = new A.Shape, this.shape_1.graphics.f("#8EC640").s().p("ANeHEQgLgLAAgPQAAgPALgLQAMgLAOAAQAQAAALALQALAKAAAQQAAAPgLALQgLAKgQAAQgOAAgMgKgAKBHEQgMgLAAgPQAAgQAMgKQAKgLAPAAQAQAAAKALQAMAKAAAQQAAAPgMALQgKAKgQAAQgPAAgKgKgAGiHEQgLgLAAgPQAAgQALgKQALgLAQAAQAPAAALALQAKALABAPQgBAPgKALQgLAKgPAAQgQAAgLgKgADEHEQgLgLAAgPQAAgQALgKQAKgLAQAAQAQAAAKALQALAKAAAQQAAAPgLALQgKAKgQAAQgQAAgKgKgAgZHEQgLgLAAgPQAAgQALgKQALgLAOAAQAPAAALALQALAKAAAQQAAAPgLALQgLAKgPAAQgOAAgLgKgAj3HEQgLgLAAgPQAAgQALgKQAKgLAQAAQAPAAALALQAKAKABAQQgBAPgKALQgLAKgPAAQgQAAgKgKgAnWHEQgLgLABgPQgBgQALgKQALgLAPAAQAQAAALALQALAKgBAQQABAPgLALQgLAKgQAAQgPAAgLgKgAq0HEQgLgLAAgPQAAgQALgKQALgLAPAAQAPAAALALQALAKAAAQQAAAPgLALQgLAKgPAAQgPAAgLgKgAuSHEQgLgLAAgPQAAgQALgKQALgLAPAAQAPAAALALQALAKAAAQQAAAPgLALQgLAKgPAAQgPAAgLgKgANeEYQgLgKAAgQQAAgPALgKQAMgLAOAAQAQAAALALQALAKAAAPQAAAQgLAKQgLALgQAAQgOAAgMgLgAKBEYQgMgKAAgQQAAgPAMgKQAKgLAPAAQAQAAAKALQAMAKAAAPQAAAQgMAKQgKALgQAAQgPAAgKgLgAGiEYQgLgKAAgQQAAgPALgKQALgLAQAAQAPAAALALQAKAKABAPQgBAQgKAKQgLALgPAAQgQAAgLgLgADEEYQgLgKAAgQQAAgPALgKQAKgLAQAAQAQAAAKALQALAKAAAPQAAAQgLAKQgKALgQAAQgQAAgKgLgAgZEYQgLgKAAgQQAAgPALgKQALgLAOAAQAPAAALALQALAKAAAPQAAAQgLAKQgLALgPAAQgOAAgLgLgAj3EYQgLgKAAgQQAAgPALgKQAKgLAQAAQAPAAALALQAKAKABAPQgBAQgKAKQgLALgPAAQgQAAgKgLgAnWEYQgLgKABgQQgBgPALgKQALgLAPAAQAQAAALALQALAKgBAPQABAQgLAKQgLALgQAAQgPAAgLgLgAq0EYQgLgKAAgQQAAgPALgKQALgLAPAAQAPAAALALQALAKAAAPQAAAQgLAKQgLALgPAAQgPAAgLgLgAuSEYQgLgKAAgQQAAgPALgKQALgLAPAAQAPAAALALQALAKAAAPQAAAQgLAKQgLALgPAAQgPAAgLgLgANeBvQgLgLAAgPQAAgPALgLQAMgLAOAAQAQAAALALQALALAAAPQAAAPgLALQgLAKgQAAQgOAAgMgKgAKBBvQgMgLAAgPQAAgPAMgLQAKgLAPAAQAQAAAKALQAMALAAAPQAAAPgMALQgKAKgQAAQgPAAgKgKgAGiBvQgLgLAAgPQAAgPALgLQALgLAQAAQAPAAALALQAKALABAPQgBAPgKALQgLAKgPAAQgQAAgLgKgADEBvQgLgLAAgPQAAgPALgLQAKgLAQAAQAQAAAKALQALALAAAPQAAAPgLALQgKAKgQAAQgQAAgKgKgAgZBvQgLgLAAgPQAAgPALgLQALgLAOAAQAPAAALALQALALAAAPQAAAPgLALQgLAKgPAAQgOAAgLgKgAj3BvQgLgLAAgPQAAgPALgLQAKgLAQAAQAPAAALALQAKALABAPQgBAPgKALQgLAKgPAAQgQAAgKgKgAnWBvQgLgLABgPQgBgPALgLQALgLAPAAQAQAAALALQALALgBAPQABAPgLALQgLAKgQAAQgPAAgLgKgAq0BvQgLgLAAgPQAAgPALgLQALgLAPAAQAPAAALALQALALAAAPQAAAPgLALQgLAKgPAAQgPAAgLgKgAuSBvQgLgLAAgPQAAgPALgLQALgLAPAAQAPAAALALQALALAAAPQAAAPgLALQgLAKgPAAQgPAAgLgKgANeg6QgLgLAAgPQAAgPALgKQAMgLAOAAQAQAAALALQALAKAAAPQAAAPgLALQgLALgQAAQgOAAgMgLgAKBg6QgMgLAAgPQAAgPAMgKQAKgLAPAAQAQAAAKALQAMAKAAAPQAAAPgMALQgKALgQAAQgPAAgKgLgAGig6QgLgLAAgPQAAgPALgKQALgLAQAAQAPAAALALQAKAKABAPQgBAPgKALQgLALgPAAQgQAAgLgLgADEg6QgLgLAAgPQAAgPALgKQAKgLAQAAQAQAAAKALQALAKAAAPQAAAPgLALQgKALgQAAQgQAAgKgLgAgZg6QgLgLAAgPQAAgPALgKQALgLAOAAQAPAAALALQALAKAAAPQAAAPgLALQgLALgPAAQgOAAgLgLgAj3g6QgLgLAAgPQAAgPALgKQAKgLAQAAQAPAAALALQAKAKABAPQgBAPgKALQgLALgPAAQgQAAgKgLgAnWg6QgLgLABgPQgBgPALgKQALgLAPAAQAQAAALALQALAKgBAPQABAPgLALQgLALgQAAQgPAAgLgLgAq0g6QgLgLAAgPQAAgPALgKQALgLAPAAQAPAAALALQALAKAAAPQAAAPgLALQgLALgPAAQgPAAgLgLgAuSg6QgLgLAAgPQAAgPALgKQALgLAPAAQAPAAALALQALAKAAAPQAAAPgLALQgLALgPAAQgPAAgLgLgANejlQgLgLAAgPQAAgPALgLQAMgLAOAAQAQAAALALQALALAAAPQAAAPgLALQgLALgQAAQgOAAgMgLgAKBjlQgMgLAAgPQAAgPAMgLQAKgLAPAAQAQAAAKALQAMALAAAPQAAAPgMALQgKALgQAAQgPAAgKgLgAGijlQgLgLAAgPQAAgPALgLQALgLAQAAQAPAAALALQAKALABAPQgBAPgKALQgLALgPAAQgQAAgLgLgADEjlQgLgLAAgPQAAgPALgLQAKgLAQAAQAQAAAKALQALALAAAPQAAAPgLALQgKALgQAAQgQAAgKgLgAgZjlQgLgLAAgPQAAgPALgLQALgLAOAAQAPAAALALQALALAAAPQAAAPgLALQgLALgPAAQgOAAgLgLgAj3jlQgLgLAAgPQAAgPALgLQAKgLAQAAQAPAAALALQAKALABAPQgBAPgKALQgLALgPAAQgQAAgKgLgAnWjlQgLgLABgPQgBgPALgLQALgLAPAAQAQAAALALQALALgBAPQABAPgLALQgLALgQAAQgPAAgLgLgAq0jlQgLgLAAgPQAAgPALgLQALgLAPAAQAPAAALALQALALAAAPQAAAPgLALQgLALgPAAQgPAAgLgLgAuSjlQgLgLAAgPQAAgPALgLQALgLAPAAQAPAAALALQALALAAAPQAAAPgLALQgLALgPAAQgPAAgLgLgANemPQgLgKAAgQQAAgPALgKQAMgLAOAAQAQAAALALQALAKAAAPQAAAQgLAKQgLALgQAAQgOAAgMgLgAKBmPQgMgKAAgQQAAgPAMgKQAKgLAPAAQAQAAAKALQAMAKAAAPQAAAQgMAKQgKALgQAAQgPAAgKgLgAGimPQgLgKAAgQQAAgPALgKQALgLAQAAQAPAAALALQAKAKABAPQgBAQgKAKQgLALgPAAQgQAAgLgLgADEmPQgLgKAAgQQAAgPALgKQAKgLAQAAQAQAAAKALQALAKAAAPQAAAQgLAKQgKALgQAAQgQAAgKgLgAgZmPQgLgKAAgQQAAgPALgKQALgLAOAAQAPAAALALQALAKAAAPQAAAQgLAKQgLALgPAAQgOAAgLgLgAj3mPQgLgKAAgQQAAgPALgKQAKgLAQAAQAPAAALALQAKAKABAPQgBAQgKAKQgLALgPAAQgQAAgKgLgAnWmPQgLgKABgQQgBgPALgKQALgLAPAAQAQAAALALQALAKgBAPQABAQgLAKQgLALgQAAQgPAAgLgLgAq0mPQgLgKAAgQQAAgPALgKQALgLAPAAQAPAAALALQALAKAAAPQAAAQgLAKQgLALgPAAQgPAAgLgLgAuSmPQgLgKAAgQQAAgPALgKQALgLAPAAQAPAAALALQALAKAAAPQAAAQgLAKQgLALgPAAQgPAAgLgLg"), this.shape_1.setTransform(44.5, 0), this.timeline.addTween(A.Tween.get({}).to({state: [{t: this.shape_1}, {t: this.shape}]}).wait(90))
	}).prototype = a = new A.MovieClip, a.nominalBounds = new A.Rectangle(-137, -46.2, 274.1, 92.5), (t.BGArrowAppear = function (e, i, n) {
		this.initialize(e, i, n, {}), this.frame_59 = function () {
			this.stop()
		}, this.timeline.addTween(A.Tween.get(this).wait(59).call(this.frame_59).wait(1)), this.instance = new t.BGArrow, this.instance.parent = this, this.instance.setTransform(137.1, 0), this.instance.alpha = 0, this.timeline.addTween(A.Tween.get(this.instance).wait(1).to({
			x: 121.9,
			alpha: .393
		}, 0).wait(1).to({x: 107.3, alpha: .772}, 0).wait(1).to({
			x: 93.3,
			alpha: 1
		}, 0).wait(1).to({x: 79.7}, 0).wait(1).to({x: 66.7}, 0).wait(1).to({x: 54.3}, 0).wait(1).to({x: 42.3}, 0).wait(1).to({x: 30.9}, 0).wait(1).to({x: 20}, 0).wait(1).to({x: 9.7}, 0).wait(1).to({x: -.1}, 0).wait(1).to({x: -9.4}, 0).wait(1).to({x: -18.2}, 0).wait(1).to({x: -26.4}, 0).wait(1).to({x: -34.1}, 0).wait(1).to({x: -41.3}, 0).wait(1).to({x: -47.9}, 0).wait(1).to({x: -54}, 0).wait(1).to({x: -59.6}, 0).wait(1).to({x: -64.6}, 0).wait(1).to({x: -69.1}, 0).wait(1).to({x: -73.1}, 0).wait(1).to({x: -76.5}, 0).wait(1).to({x: -79.5}, 0).wait(1).to({x: -81.9}, 0).wait(1).to({x: -83.7}, 0).wait(1).to({x: -85}, 0).wait(1).to({x: -85.8}, 0).wait(1).to({x: -86.1}, 0).wait(31)), this.instance_1 = new t.BGArrow, this.instance_1.parent = this, this.instance_1.setTransform(-40, 0), this.instance_1.alpha = 0, this.instance_1._off = !0, this.timeline.addTween(A.Tween.get(this.instance_1).wait(21).to({_off: !1}, 0).wait(1).to({alpha: .5}, 0).wait(1).to({alpha: 1}, 0).wait(1).to({x: -43}, 0).wait(36)), this.instance_2 = new t.BGArrow, this.instance_2.parent = this, this.instance_2.setTransform(3, 0), this.instance_2.alpha = 0, this.instance_2._off = !0, this.timeline.addTween(A.Tween.get(this.instance_2).wait(16).to({_off: !1}, 0).wait(1).to({alpha: .5}, 0).wait(1).to({alpha: 1}, 0).wait(1).to({x: 0}, 0).wait(41)), this.instance_3 = new t.BGArrow, this.instance_3.parent = this, this.instance_3.setTransform(46.1, 0), this.instance_3.alpha = 0, this.instance_3._off = !0, this.timeline.addTween(A.Tween.get(this.instance_3).wait(10).to({_off: !1}, 0).wait(1).to({alpha: .5}, 0).wait(1).to({alpha: 1}, 0).wait(1).to({x: 43.1}, 0).wait(47)), this.instance_4 = new t.BGArrow, this.instance_4.parent = this, this.instance_4.setTransform(89.1, 0), this.instance_4.alpha = 0, this.instance_4._off = !0, this.timeline.addTween(A.Tween.get(this.instance_4).wait(5).to({_off: !1}, 0).wait(1).to({alpha: .5}, 0).wait(1).to({alpha: 1}, 0).wait(1).to({x: 86.1}, 0).wait(52))
	}).prototype = a = new A.MovieClip, a.nominalBounds = new A.Rectangle(123.6, -21.5, 27, 43), (t.WHEEL = function (e, i, n) {
		this.initialize(e, i, n, {}), this.frame_99 = function () {
			this.stop()
		}, this.timeline.addTween(A.Tween.get(this).wait(99).call(this.frame_99).wait(31)), this.instance = new t.Rays, this.instance.parent = this, this.instance.setTransform(5, -5.5, .999, .999, 14.3, 0, 0, .1, -.1), this.instance.alpha = 0, this.instance._off = !0, this.timeline.addTween(A.Tween.get(this.instance).wait(32).to({_off: !1}, 0).wait(1).to({
			regX: 0,
			regY: 0,
			scaleX: 1,
			scaleY: 1,
			rotation: 14.4,
			x: 4.8,
			alpha: .002
		}, 0).wait(1).to({rotation: 14.3, y: -5.4, alpha: .008}, 0).wait(1).to({
			rotation: 14.2,
			x: 4.9,
			alpha: .017
		}, 0).wait(1).to({rotation: 14, alpha: .03}, 0).wait(1).to({
			rotation: 13.7,
			alpha: .047
		}, 0).wait(1).to({rotation: 13.4, alpha: .068}, 0).wait(1).to({
			rotation: 13.1,
			alpha: .093
		}, 0).wait(1).to({rotation: 12.7, alpha: .121}, 0).wait(1).to({
			rotation: 12.2,
			alpha: .153
		}, 0).wait(1).to({rotation: 11.7, alpha: .189}, 0).wait(1).to({
			rotation: 11.1,
			alpha: .229
		}, 0).wait(1).to({rotation: 10.5, alpha: .272}, 0).wait(1).to({
			rotation: 9.8,
			alpha: .319
		}, 0).wait(1).to({rotation: 9.1, alpha: .37}, 0).wait(1).to({
			rotation: 8.3,
			alpha: .425
		}, 0).wait(1).to({rotation: 7.4, alpha: .484}, 0).wait(1).to({
			rotation: 6.5,
			alpha: .546
		}, 0).wait(1).to({rotation: 5.6, alpha: .612}, 0).wait(1).to({
			rotation: 4.6,
			alpha: .682
		}, 0).wait(1).to({rotation: 3.5, alpha: .756}, 0).wait(1).to({
			rotation: 2.4,
			alpha: .834
		}, 0).wait(1).to({rotation: 1.2, alpha: .915}, 0).wait(1).to({
			rotation: 0,
			alpha: 1
		}, 0).to({_off: !0}, 1).wait(74)), this.instance_1 = new t.Flat, this.instance_1.parent = this, this.instance_1.setTransform(-4.5, 0, 1, 1, -4, 0, 0, -1.6, -.1), this.instance_1.alpha = 0, this.instance_1._off = !0, this.timeline.addTween(A.Tween.get(this.instance_1).wait(32).to({_off: !1}, 0).wait(1).to({
			regX: 0,
			regY: 0,
			x: -2.9,
			alpha: .002
		}, 0).wait(1).to({alpha: .008}, 0).wait(1).to({
			rotation: -3.9,
			alpha: .017
		}, 0).wait(1).to({alpha: .03}, 0).wait(1).to({rotation: -3.8, alpha: .047}, 0).wait(1).to({
			rotation: -3.7,
			alpha: .068
		}, 0).wait(1).to({rotation: -3.6, alpha: .093}, 0).wait(1).to({
			rotation: -3.5,
			alpha: .121
		}, 0).wait(1).to({rotation: -3.4, alpha: .153}, 0).wait(1).to({
			rotation: -3.2,
			alpha: .189
		}, 0).wait(1).to({rotation: -3.1, alpha: .229}, 0).wait(1).to({
			rotation: -2.9,
			alpha: .272
		}, 0).wait(1).to({rotation: -2.7, alpha: .319}, 0).wait(1).to({
			rotation: -2.5,
			alpha: .37
		}, 0).wait(1).to({rotation: -2.3, alpha: .425}, 0).wait(1).to({
			rotation: -2.1,
			y: .1,
			alpha: .484
		}, 0).wait(1).to({rotation: -1.8, alpha: .546}, 0).wait(1).to({
			rotation: -1.6,
			alpha: .612
		}, 0).wait(1).to({rotation: -1.3, alpha: .682}, 0).wait(1).to({
			rotation: -1,
			alpha: .756
		}, 0).wait(1).to({rotation: -.7, alpha: .834}, 0).wait(1).to({
			rotation: -.3,
			alpha: .915
		}, 0).wait(1).to({
			rotation: 0,
			alpha: 1
		}, 0).to({_off: !0}, 1).wait(74)), this.instance_2 = new t.Stroke, this.instance_2.parent = this, this.instance_2.setTransform(-1.9, -3, 1, 1, 144, 0, 0, -.1, .1), this.instance_2.alpha = 0, this.timeline.addTween(A.Tween.get(this.instance_2).wait(1).to({
			regX: 0,
			regY: 0,
			rotation: 144.1,
			x: -2,
			y: -2.9
		}, 0).wait(1).to({rotation: 144.3, alpha: .001}, 0).wait(1).to({
			rotation: 144.6,
			alpha: .003
		}, 0).wait(1).to({rotation: 145.1, alpha: .005}, 0).wait(1).to({
			rotation: 145.8,
			alpha: .008
		}, 0).wait(1).to({rotation: 146.6, alpha: .012}, 0).wait(1).to({
			rotation: 147.5,
			alpha: .016
		}, 0).wait(1).to({rotation: 148.6, alpha: .021}, 0).wait(1).to({
			rotation: 149.8,
			alpha: .027
		}, 0).wait(1).to({rotation: 151.1, alpha: .033}, 0).wait(1).to({
			rotation: 152.6,
			alpha: .04
		}, 0).wait(1).to({rotation: 154.3, alpha: .048}, 0).wait(1).to({
			rotation: 156.1,
			alpha: .056
		}, 0).wait(1).to({rotation: 158, alpha: .065}, 0).wait(1).to({
			rotation: 160.1,
			alpha: .074
		}, 0).wait(1).to({rotation: 162.3, alpha: .085}, 0).wait(1).to({
			rotation: 164.6,
			alpha: .096
		}, 0).wait(1).to({rotation: 167.1, x: -2.1, alpha: .107}, 0).wait(1).to({
			rotation: 169.8,
			alpha: .119
		}, 0).wait(1).to({rotation: 172.6, alpha: .132}, 0).wait(1).to({
			rotation: 175.5,
			alpha: .146
		}, 0).wait(1).to({rotation: 178.6, alpha: .16}, 0).wait(1).to({
			rotation: 181.8,
			alpha: .175
		}, 0).wait(1).to({rotation: 185.1, alpha: .19}, 0).wait(1).to({
			rotation: 188.6,
			alpha: .207
		}, 0).wait(1).to({rotation: 192.3, alpha: .223}, 0).wait(1).to({
			rotation: 196.1,
			alpha: .241
		}, 0).wait(1).to({rotation: 200, alpha: .259}, 0).wait(1).to({
			rotation: 204,
			alpha: .278
		}, 0).wait(1).to({rotation: 208.3, alpha: .298}, 0).wait(1).to({
			rotation: 212.6,
			y: -3,
			alpha: .318
		}, 0).wait(1).to({rotation: 217.1, alpha: .339}, 0).wait(1).to({
			rotation: 221.8,
			alpha: .36
		}, 0).wait(1).to({rotation: 226.5, alpha: .382}, 0).wait(1).to({
			rotation: 231.5,
			alpha: .405
		}, 0).wait(1).to({rotation: 236.5, alpha: .428}, 0).wait(1).to({
			rotation: 241.7,
			alpha: .453
		}, 0).wait(1).to({rotation: 247.1, alpha: .477}, 0).wait(1).to({
			rotation: 252.6,
			y: -3.1,
			alpha: .503
		}, 0).wait(1).to({rotation: 258.2, alpha: .529}, 0).wait(1).to({
			rotation: 264,
			alpha: .556
		}, 0).wait(1).to({rotation: 270, alpha: .583}, 0).wait(1).to({
			rotation: 276,
			alpha: .611
		}, 0).wait(1).to({rotation: 282.2, alpha: .64}, 0).wait(1).to({
			rotation: 288.6,
			x: -2,
			alpha: .669
		}, 0).wait(1).to({rotation: 295.1, alpha: .699}, 0).wait(1).to({
			rotation: 301.7,
			alpha: .73
		}, 0).wait(1).to({rotation: 308.5, alpha: .762}, 0).wait(1).to({
			rotation: 315.4,
			alpha: .794
		}, 0).wait(1).to({rotation: 322.5, alpha: .826}, 0).wait(1).to({
			rotation: 329.7,
			x: -1.9,
			alpha: .86
		}, 0).wait(1).to({rotation: 337.1, alpha: .894}, 0).wait(1).to({
			rotation: 344.6,
			alpha: .929
		}, 0).wait(1).to({rotation: 352.2, alpha: .964}, 0).wait(1).to({
			rotation: 360,
			alpha: 1
		}, 0).to({_off: !0}, 1).wait(74)), this.instance_3 = new t.ShapesA, this.instance_3.parent = this, this.instance_3.setTransform(30.5, -6.5, .999, .999, -26.3), this.instance_3.alpha = 0, this.instance_3._off = !0, this.timeline.addTween(A.Tween.get(this.instance_3).wait(16).to({_off: !1}, 0).wait(1).to({
			scaleX: 1,
			scaleY: 1,
			rotation: -26.4,
			alpha: .001
		}, 0).wait(1).to({rotation: -26.3, alpha: .003}, 0).wait(1).to({
			rotation: -26.2,
			alpha: .006
		}, 0).wait(1).to({rotation: -26.1, alpha: .011}, 0).wait(1).to({
			rotation: -26,
			alpha: .016
		}, 0).wait(1).to({rotation: -25.8, alpha: .024}, 0).wait(1).to({
			rotation: -25.5,
			alpha: .032
		}, 0).wait(1).to({rotation: -25.3, alpha: .042}, 0).wait(1).to({
			rotation: -25,
			alpha: .053
		}, 0).wait(1).to({rotation: -24.7, alpha: .066}, 0).wait(1).to({
			rotation: -24.3,
			alpha: .08
		}, 0).wait(1).to({rotation: -23.9, alpha: .095}, 0).wait(1).to({
			rotation: -23.5,
			alpha: .111
		}, 0).wait(1).to({rotation: -23, alpha: .129}, 0).wait(1).to({
			rotation: -22.5,
			alpha: .148
		}, 0).wait(1).to({rotation: -22, alpha: .168}, 0).wait(1).to({
			rotation: -21.4,
			alpha: .19
		}, 0).wait(1).to({rotation: -20.8, alpha: .213}, 0).wait(1).to({
			rotation: -20.1,
			alpha: .237
		}, 0).wait(1).to({rotation: -19.5, alpha: .263}, 0).wait(1).to({
			rotation: -18.7,
			alpha: .29
		}, 0).wait(1).to({rotation: -18, alpha: .318}, 0).wait(1).to({
			rotation: -17.2,
			alpha: .348
		}, 0).wait(1).to({rotation: -16.4, alpha: .379}, 0).wait(1).to({
			rotation: -15.6,
			alpha: .411
		}, 0).wait(1).to({rotation: -14.7, alpha: .444}, 0).wait(1).to({
			rotation: -13.7,
			alpha: .479
		}, 0).wait(1).to({rotation: -12.8, alpha: .515}, 0).wait(1).to({
			rotation: -11.8,
			alpha: .553
		}, 0).wait(1).to({rotation: -10.8, alpha: .592}, 0).wait(1).to({
			rotation: -9.7,
			alpha: .632
		}, 0).wait(1).to({rotation: -8.6, alpha: .673}, 0).wait(1).to({
			rotation: -7.5,
			alpha: .716
		}, 0).wait(1).to({rotation: -6.3, alpha: .76}, 0).wait(1).to({
			rotation: -5.1,
			alpha: .805
		}, 0).wait(1).to({rotation: -3.9, alpha: .852}, 0).wait(1).to({
			rotation: -2.6,
			alpha: .9
		}, 0).wait(1).to({rotation: -1.3, alpha: .949}, 0).wait(1).to({
			rotation: 0,
			alpha: 1
		}, 0).to({_off: !0}, 1).wait(74)), this.instance_4 = new t.ShapesB, this.instance_4.parent = this, this.instance_4.setTransform(9.6, 6.5, 1, 1, 36, 0, 0, .1, -.1), this.instance_4.alpha = 0, this.timeline.addTween(A.Tween.get(this.instance_4).wait(1).to({
			regX: 0,
			regY: 0,
			x: 9.4
		}, 0).wait(1).to({alpha: .001}, 0).wait(1).to({rotation: 35.9, alpha: .003}, 0).wait(1).to({
			rotation: 35.8,
			alpha: .005
		}, 0).wait(1).to({rotation: 35.7, alpha: .008}, 0).wait(1).to({
			rotation: 35.6,
			alpha: .012
		}, 0).wait(1).to({rotation: 35.4, alpha: .016}, 0).wait(1).to({
			rotation: 35.2,
			alpha: .021
		}, 0).wait(1).to({rotation: 35, alpha: .027}, 0).wait(1).to({
			rotation: 34.8,
			alpha: .033
		}, 0).wait(1).to({rotation: 34.6, alpha: .04}, 0).wait(1).to({
			rotation: 34.3,
			alpha: .048
		}, 0).wait(1).to({rotation: 34, alpha: .056}, 0).wait(1).to({
			rotation: 33.7,
			alpha: .065
		}, 0).wait(1).to({rotation: 33.3, alpha: .074}, 0).wait(1).to({
			rotation: 33,
			alpha: .085
		}, 0).wait(1).to({rotation: 32.6, alpha: .096}, 0).wait(1).to({
			rotation: 32.1,
			alpha: .107
		}, 0).wait(1).to({rotation: 31.7, alpha: .119}, 0).wait(1).to({
			rotation: 31.2,
			alpha: .132
		}, 0).wait(1).to({rotation: 30.8, alpha: .146}, 0).wait(1).to({
			rotation: 30.2,
			alpha: .16
		}, 0).wait(1).to({rotation: 29.7, alpha: .175}, 0).wait(1).to({
			rotation: 29.1,
			alpha: .19
		}, 0).wait(1).to({rotation: 28.6, alpha: .207}, 0).wait(1).to({
			rotation: 28,
			alpha: .223
		}, 0).wait(1).to({rotation: 27.3, alpha: .241}, 0).wait(1).to({
			rotation: 26.7,
			alpha: .259
		}, 0).wait(1).to({rotation: 26, alpha: .278}, 0).wait(1).to({
			rotation: 25.3,
			alpha: .298
		}, 0).wait(1).to({rotation: 24.6, alpha: .318}, 0).wait(1).to({
			rotation: 23.8,
			alpha: .339
		}, 0).wait(1).to({rotation: 23, alpha: .36}, 0).wait(1).to({
			rotation: 22.2,
			alpha: .382
		}, 0).wait(1).to({rotation: 21.4, alpha: .405}, 0).wait(1).to({
			rotation: 20.6,
			alpha: .428
		}, 0).wait(1).to({rotation: 19.7, alpha: .453}, 0).wait(1).to({
			rotation: 18.8,
			alpha: .477
		}, 0).wait(1).to({rotation: 17.9, alpha: .503}, 0).wait(1).to({
			rotation: 17,
			alpha: .529
		}, 0).wait(1).to({rotation: 16, alpha: .556}, 0).wait(1).to({
			rotation: 15,
			alpha: .583
		}, 0).wait(1).to({rotation: 14, alpha: .611}, 0).wait(1).to({
			rotation: 13,
			alpha: .64
		}, 0).wait(1).to({rotation: 11.9, alpha: .669}, 0).wait(1).to({
			rotation: 10.8,
			alpha: .699
		}, 0).wait(1).to({rotation: 9.7, y: 6.6, alpha: .73}, 0).wait(1).to({
			rotation: 8.6,
			alpha: .762
		}, 0).wait(1).to({rotation: 7.4, alpha: .794}, 0).wait(1).to({
			rotation: 6.2,
			alpha: .826
		}, 0).wait(1).to({rotation: 5, alpha: .86}, 0).wait(1).to({
			rotation: 3.8,
			alpha: .894
		}, 0).wait(1).to({rotation: 2.6, alpha: .929}, 0).wait(1).to({
			rotation: 1.3,
			alpha: .964
		}, 0).wait(1).to({
			rotation: 0,
			alpha: 1
		}, 0).to({_off: !0}, 1).wait(74)), this.instance_5 = new t.BirdFloatLoop, this.instance_5.parent = this, this.instance_5.setTransform(-620.4, 211.2, 1, 1, 0, 0, 0, -603.1, 220.9), this.instance_5._off = !0, this.timeline.addTween(A.Tween.get(this.instance_5).wait(100).to({_off: !1}, 0).wait(30)), this.instance_6 = new t.BirdGradMask, this.instance_6.parent = this, this.instance_6.setTransform(-17.3, -9.7), this.instance_6._off = !0, this.timeline.addTween(A.Tween.get(this.instance_6).wait(70).to({_off: !1}, 0).to({_off: !0}, 30).wait(30)), this.instance_7 = new t.BirdIntro, this.instance_7.parent = this, this.instance_7.setTransform(-17.3, -9.7), this.instance_7._off = !0, this.timeline.addTween(A.Tween.get(this.instance_7).wait(39).to({_off: !1}, 0).to({_off: !0}, 31).wait(60)), this.instance_8 = new t.WheelRayMotion15, this.instance_8.parent = this, this.instance_8.setTransform(5, -5.5), this.instance_8._off = !0, this.timeline.addTween(A.Tween.get(this.instance_8).wait(56).to({_off: !1}, 0).to({_off: !0}, 44).wait(30)), this.instance_9 = new t.WheelFlatMotion6, this.instance_9.parent = this, this.instance_9.setTransform(-4.5, 0), this.instance_9._off = !0, this.timeline.addTween(A.Tween.get(this.instance_9).wait(56).to({_off: !1}, 0).to({_off: !0}, 44).wait(30)), this.instance_10 = new t.WheelStrokeMotion360, this.instance_10.parent = this, this.instance_10.setTransform(-2, -3), this.instance_10._off = !0, this.timeline.addTween(A.Tween.get(this.instance_10).wait(56).to({_off: !1}, 0).to({_off: !0}, 44).wait(30)), this.instance_11 = new t.WheelShapesAMotion88, this.instance_11.parent = this, this.instance_11.setTransform(30.5, -6.5), this.instance_11._off = !0, this.timeline.addTween(A.Tween.get(this.instance_11).wait(56).to({_off: !1}, 0).to({_off: !0}, 44).wait(30)), this.instance_12 = new t.WheelShapesBMotion15, this.instance_12.parent = this, this.instance_12.setTransform(9.5, 6.5), this.instance_12._off = !0, this.timeline.addTween(A.Tween.get(this.instance_12).wait(56).to({_off: !1}, 0).to({_off: !0}, 44).wait(30))
	}).prototype = a = new A.MovieClip, a.nominalBounds = new A.Rectangle(-385.6, -384.2, 790.1, 781.4), (t.DVGHomepage640x500200805 = function (e, i, n) {
		this.initialize(e, i, n, {}), this.frame_129 = function () {
			this.stop()
		}, this.timeline.addTween(A.Tween.get(this).wait(129).call(this.frame_129).wait(1)), this.instance = new t.TextMotion, this.instance.parent = this, this.instance.setTransform(184.2, 237, .596, .596, 0, 0, 0, .1, 0), this.instance._off = !0, this.timeline.addTween(A.Tween.get(this.instance).wait(54).to({_off: !1}, 0).wait(76)), this.instance_1 = new t.TextArrowLoop, this.instance_1.parent = this, this.instance_1.setTransform(103.2, 427.9, .65, .651, 0, 0, 180, 137, 0), this.instance_1._off = !0, this.timeline.addTween(A.Tween.get(this.instance_1).wait(54).to({_off: !1}, 0).wait(76)), this.instance_2 = new t.WHEEL, this.instance_2.parent = this, this.instance_2.setTransform(167.6, 222.5, .484, .484, 0, 0, 0, .3, .3), this.instance_2._off = !0, this.timeline.addTween(A.Tween.get(this.instance_2).wait(14).to({_off: !1}, 0).wait(116)), this.instance_3 = new t.BGArrowAppear, this.instance_3.parent = this, this.instance_3.setTransform(562.6, 465, .65, .651, 0, 0, 0, .1, 0), this.instance_3._off = !0, this.timeline.addTween(A.Tween.get(this.instance_3).wait(34).to({_off: !1}, 0).wait(96)), this.instance_4 = new t.BGDots, this.instance_4.parent = this, this.instance_4.setTransform(613.2, 145.7, .633, .633, 0, 0, 0, .1, 0), this.instance_4.alpha = 0, this.instance_4._off = !0, this.timeline.addTween(A.Tween.get(this.instance_4).wait(29).to({_off: !1}, 0).wait(1).to({
			regX: 0,
			x: 601.5,
			alpha: .133
		}, 0).wait(1).to({x: 590, alpha: .264}, 0).wait(1).to({x: 578.7, alpha: .394}, 0).wait(1).to({
			x: 567.4,
			alpha: .523
		}, 0).wait(1).to({x: 556.3, alpha: .65}, 0).wait(1).to({x: 545.2, alpha: .776}, 0).wait(1).to({
			x: 534.3,
			alpha: .901
		}, 0).wait(1).to({
			x: 525.6,
			alpha: 1
		}, 0).wait(93)), this.instance_5 = new t.Circuit2Mask, this.instance_5.parent = this, this.instance_5.setTransform(475, 3, 1, 1, 0, 0, 0, 15.3, -225.7), this.instance_5.alpha = .699, this.instance_5._off = !0, this.timeline.addTween(A.Tween.get(this.instance_5).wait(29).to({_off: !1}, 0).wait(101)), this.instance_6 = new t.Circuit1Mask, this.instance_6.parent = this, this.instance_6.setTransform(-90, 242.3, .622, .622, 0, 0, 0, -.1, .3), this.instance_6._off = !0, this.timeline.addTween(A.Tween.get(this.instance_6).wait(19).to({_off: !1}, 0).wait(111)), this.instance_7 = new t.BGCC1Static, this.instance_7.parent = this, this.instance_7.setTransform(-123.9, 227.8, .563, .563, 0, 0, 0, 0, .1), this.instance_7.alpha = .852, this.timeline.addTween(A.Tween.get(this.instance_7).wait(1).to({
			regX: -5.5,
			regY: 7,
			x: -116.7,
			y: 231.7,
			alpha: .85
		}, 0).wait(1).to({x: -106.5}, 0).wait(1).to({x: -96.3}, 0).wait(1).to({x: -86.3}, 0).wait(1).to({x: -76.3}, 0).wait(1).to({x: -66.4}, 0).wait(1).to({x: -56.6}, 0).wait(1).to({x: -46.8}, 0).wait(1).to({x: -37.1}, 0).wait(1).to({x: -27.6}, 0).wait(1).to({x: -18.1}, 0).wait(1).to({x: -8.6}, 0).wait(1).to({x: .7}, 0).wait(1).to({x: 9.9}, 0).wait(1).to({x: 19.1}, 0).wait(1).to({x: 23}, 0).wait(114)), this.instance_8 = new t.BGCC2Static, this.instance_8.parent = this, this.instance_8.setTransform(964.7, 234.6, .599, .599, 0, 0, 0, .1, .1), this.instance_8.alpha = .781, this.timeline.addTween(A.Tween.get(this.instance_8).wait(1).to({
			regX: -.5,
			regY: 0,
			x: 942,
			y: 234.5,
			alpha: .78
		}, 0).wait(1).to({x: 919.9}, 0).wait(1).to({x: 897.9}, 0).wait(1).to({x: 876.1}, 0).wait(1).to({x: 854.5}, 0).wait(1).to({x: 833}, 0).wait(1).to({x: 811.7}, 0).wait(1).to({x: 790.6}, 0).wait(1).to({x: 769.7}, 0).wait(1).to({x: 748.9}, 0).wait(1).to({x: 728.3}, 0).wait(1).to({x: 707.9}, 0).wait(1).to({x: 687.7}, 0).wait(1).to({x: 667.6}, 0).wait(1).to({x: 647.7}, 0).wait(1).to({x: 639.3}, 0).wait(114)), this.instance_9 = new t.IMAGEBG, this.instance_9.parent = this, this.timeline.addTween(A.Tween.get(this.instance_9).wait(130))
	}).prototype = a = new A.MovieClip, a.nominalBounds = new A.Rectangle(67.1, 250, 1536.1, 468), t.properties = {
		width: 640,
		height: 500,
		fps: 24,
		color: "#FFFFFF",
		opacity: 1,
		webfonts: {},
		manifest: [{src: "/images/DVG_Homepage_640x500_200805_atlas_.png", id: "DVG_Homepage_640x500_200805_atlas_"}],
		preloads: []
	}
}(lib_mobile = lib_mobile || {}, images_mobile = images_mobile || {}, createjs = createjs || {}, ss = ss || {}, AdobeAn = AdobeAn || {});
var isInitDesktop = !1, isInitMobile = !1;

function processBanner() {
	if (window.innerWidth > 1024) {
		if (isInitDesktop) return;
		isInitDesktop = !0, initDesktop()
	} else {
		if (isInitMobile) return;
		isInitMobile = !0, initMobile()
	}
}

window.onload = function () {
	processBanner()
}, window.onresize = function () {
	processBanner()
}, function (t, e, A, i) {
	function n(e, A) {
		this.settings = null, this.options = t.extend({}, n.Defaults, A), this.$element = t(e), this._handlers = {}, this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._widths = [], this._invalidated = {}, this._pipe = [], this._drag = {
			time: null,
			target: null,
			pointer: null,
			stage: {start: null, current: null},
			direction: null
		}, this._states = {
			current: {},
			tags: {initializing: ["busy"], animating: ["busy"], dragging: ["interacting"]}
		}, t.each(["onResize", "onThrottledResize"], t.proxy((function (e, A) {
			this._handlers[A] = t.proxy(this[A], this)
		}), this)), t.each(n.Plugins, t.proxy((function (t, e) {
			this._plugins[t.charAt(0).toLowerCase() + t.slice(1)] = new e(this)
		}), this)), t.each(n.Workers, t.proxy((function (e, A) {
			this._pipe.push({filter: A.filter, run: t.proxy(A.run, this)})
		}), this)), this.setup(), this.initialize()
	}

	n.Defaults = {
		items: 3,
		loop: !1,
		center: !1,
		rewind: !1,
		checkVisibility: !0,
		mouseDrag: !0,
		touchDrag: !0,
		pullDrag: !0,
		freeDrag: !1,
		margin: 0,
		stagePadding: 0,
		merge: !1,
		mergeFit: !0,
		autoWidth: !1,
		startPosition: 0,
		rtl: !1,
		smartSpeed: 250,
		fluidSpeed: !1,
		dragEndSpeed: !1,
		responsive: {},
		responsiveRefreshRate: 200,
		responsiveBaseElement: e,
		fallbackEasing: "swing",
		slideTransition: "",
		info: !1,
		nestedItemSelector: !1,
		itemElement: "div",
		stageElement: "div",
		refreshClass: "owl-refresh",
		loadedClass: "owl-loaded",
		loadingClass: "owl-loading",
		rtlClass: "owl-rtl",
		responsiveClass: "owl-responsive",
		dragClass: "owl-drag",
		itemClass: "owl-item",
		stageClass: "owl-stage",
		stageOuterClass: "owl-stage-outer",
		grabClass: "owl-grab"
	}, n.Width = {Default: "default", Inner: "inner", Outer: "outer"}, n.Type = {
		Event: "event",
		State: "state"
	}, n.Plugins = {}, n.Workers = [{
		filter: ["width", "settings"], run: function () {
			this._width = this.$element.width()
		}
	}, {
		filter: ["width", "items", "settings"], run: function (t) {
			t.current = this._items && this._items[this.relative(this._current)]
		}
	}, {
		filter: ["items", "settings"], run: function () {
			this.$stage.children(".cloned").remove()
		}
	}, {
		filter: ["width", "items", "settings"], run: function (t) {
			var e = this.settings.margin || "", A = !this.settings.autoWidth, i = this.settings.rtl,
				n = {width: "auto", "margin-left": i ? e : "", "margin-right": i ? "" : e};
			!A && this.$stage.children().css(n), t.css = n
		}
	}, {
		filter: ["width", "items", "settings"], run: function (t) {
			var e = (this.width() / this.settings.items).toFixed(3) - this.settings.margin, A = null,
				i = this._items.length, n = !this.settings.autoWidth, a = [];
			for (t.items = {
				merge: !1,
				width: e
			}; i--;) A = this._mergers[i], A = this.settings.mergeFit && Math.min(A, this.settings.items) || A, t.items.merge = A > 1 || t.items.merge, a[i] = n ? e * A : this._items[i].width();
			this._widths = a
		}
	}, {
		filter: ["items", "settings"], run: function () {
			var e = [], A = this._items, i = this.settings, n = Math.max(2 * i.items, 4),
				a = 2 * Math.ceil(A.length / 2), o = i.loop && A.length ? i.rewind ? n : Math.max(n, a) : 0, s = "",
				r = "";
			for (o /= 2; o > 0;) e.push(this.normalize(e.length / 2, !0)), s += A[e[e.length - 1]][0].outerHTML, e.push(this.normalize(A.length - 1 - (e.length - 1) / 2, !0)), r = A[e[e.length - 1]][0].outerHTML + r, o -= 1;
			this._clones = e, t(s).addClass("cloned").appendTo(this.$stage), t(r).addClass("cloned").prependTo(this.$stage)
		}
	}, {
		filter: ["width", "items", "settings"], run: function () {
			for (var t = this.settings.rtl ? 1 : -1, e = this._clones.length + this._items.length, A = -1, i = 0, n = 0, a = []; ++A < e;) i = a[A - 1] || 0, n = this._widths[this.relative(A)] + this.settings.margin, a.push(i + n * t);
			this._coordinates = a
		}
	}, {
		filter: ["width", "items", "settings"], run: function () {
			var t = this.settings.stagePadding, e = this._coordinates, A = {
				width: Math.ceil(Math.abs(e[e.length - 1])) + 2 * t,
				"padding-left": t || "",
				"padding-right": t || ""
			};
			this.$stage.css(A)
		}
	}, {
		filter: ["width", "items", "settings"], run: function (t) {
			var e = this._coordinates.length, A = !this.settings.autoWidth, i = this.$stage.children();
			if (A && t.items.merge) for (; e--;) t.css.width = this._widths[this.relative(e)], i.eq(e).css(t.css); else A && (t.css.width = t.items.width, i.css(t.css))
		}
	}, {
		filter: ["items"], run: function () {
			this._coordinates.length < 1 && this.$stage.removeAttr("style")
		}
	}, {
		filter: ["width", "items", "settings"], run: function (t) {
			t.current = t.current ? this.$stage.children().index(t.current) : 0, t.current = Math.max(this.minimum(), Math.min(this.maximum(), t.current)), this.reset(t.current)
		}
	}, {
		filter: ["position"], run: function () {
			this.animate(this.coordinates(this._current))
		}
	}, {
		filter: ["width", "position", "items", "settings"], run: function () {
			var t, e, A, i, n = this.settings.rtl ? 1 : -1, a = 2 * this.settings.stagePadding,
				o = this.coordinates(this.current()) + a, s = o + this.width() * n, r = [];
			for (A = 0, i = this._coordinates.length; A < i; A++) t = this._coordinates[A - 1] || 0, e = Math.abs(this._coordinates[A]) + a * n, (this.op(t, "<=", o) && this.op(t, ">", s) || this.op(e, "<", o) && this.op(e, ">", s)) && r.push(A);
			this.$stage.children(".active").removeClass("active"), this.$stage.children(":eq(" + r.join("), :eq(") + ")").addClass("active"), this.$stage.children(".center").removeClass("center"), this.settings.center && this.$stage.children().eq(this.current()).addClass("center")
		}
	}], n.prototype.initializeStage = function () {
		this.$stage = this.$element.find("." + this.settings.stageClass), this.$stage.length || (this.$element.addClass(this.options.loadingClass), this.$stage = t("<" + this.settings.stageElement + ">", {class: this.settings.stageClass}).wrap(t("<div/>", {class: this.settings.stageOuterClass})), this.$element.append(this.$stage.parent()))
	}, n.prototype.initializeItems = function () {
		var e = this.$element.find(".owl-item");
		if (e.length) return this._items = e.get().map((function (e) {
			return t(e)
		})), this._mergers = this._items.map((function () {
			return 1
		})), void this.refresh();
		this.replace(this.$element.children().not(this.$stage.parent())), this.isVisible() ? this.refresh() : this.invalidate("width"), this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass)
	}, n.prototype.initialize = function () {
		var t, e, A;
		(this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading")) && (t = this.$element.find("img"), e = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : i, A = this.$element.children(e).width(), t.length && A <= 0 && this.preloadAutoWidthImages(t));
		this.initializeStage(), this.initializeItems(), this.registerEventHandlers(), this.leave("initializing"), this.trigger("initialized")
	}, n.prototype.isVisible = function () {
		return !this.settings.checkVisibility || this.$element.is(":visible")
	}, n.prototype.setup = function () {
		var e = this.viewport(), A = this.options.responsive, i = -1, n = null;
		A ? (t.each(A, (function (t) {
			t <= e && t > i && (i = Number(t))
		})), "function" == typeof (n = t.extend({}, this.options, A[i])).stagePadding && (n.stagePadding = n.stagePadding()), delete n.responsive, n.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + i))) : n = t.extend({}, this.options), this.trigger("change", {
			property: {
				name: "settings",
				value: n
			}
		}), this._breakpoint = i, this.settings = n, this.invalidate("settings"), this.trigger("changed", {
			property: {
				name: "settings",
				value: this.settings
			}
		})
	}, n.prototype.optionsLogic = function () {
		this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1)
	}, n.prototype.prepare = function (e) {
		var A = this.trigger("prepare", {content: e});
		return A.data || (A.data = t("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(e)), this.trigger("prepared", {content: A.data}), A.data
	}, n.prototype.update = function () {
		for (var e = 0, A = this._pipe.length, i = t.proxy((function (t) {
			return this[t]
		}), this._invalidated), n = {}; e < A;) (this._invalidated.all || t.grep(this._pipe[e].filter, i).length > 0) && this._pipe[e].run(n), e++;
		this._invalidated = {}, !this.is("valid") && this.enter("valid")
	}, n.prototype.width = function (t) {
		switch (t = t || n.Width.Default) {
			case n.Width.Inner:
			case n.Width.Outer:
				return this._width;
			default:
				return this._width - 2 * this.settings.stagePadding + this.settings.margin
		}
	}, n.prototype.refresh = function () {
		this.enter("refreshing"), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$element.addClass(this.options.refreshClass), this.update(), this.$element.removeClass(this.options.refreshClass), this.leave("refreshing"), this.trigger("refreshed")
	}, n.prototype.onThrottledResize = function () {
		e.clearTimeout(this.resizeTimer), this.resizeTimer = e.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate)
	}, n.prototype.onResize = function () {
		return !!this._items.length && this._width !== this.$element.width() && !!this.isVisible() && (this.enter("resizing"), this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized")))
	}, n.prototype.registerEventHandlers = function () {
		t.support.transition && this.$stage.on(t.support.transition.end + ".owl.core", t.proxy(this.onTransitionEnd, this)), !1 !== this.settings.responsive && this.on(e, "resize", this._handlers.onThrottledResize), this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass), this.$stage.on("mousedown.owl.core", t.proxy(this.onDragStart, this)), this.$stage.on("dragstart.owl.core selectstart.owl.core", (function () {
			return !1
		}))), this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", t.proxy(this.onDragStart, this)), this.$stage.on("touchcancel.owl.core", t.proxy(this.onDragEnd, this)))
	}, n.prototype.onDragStart = function (e) {
		var i = null;
		3 !== e.which && (t.support.transform ? i = {
			x: (i = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","))[16 === i.length ? 12 : 4],
			y: i[16 === i.length ? 13 : 5]
		} : (i = this.$stage.position(), i = {
			x: this.settings.rtl ? i.left + this.$stage.width() - this.width() + this.settings.margin : i.left,
			y: i.top
		}), this.is("animating") && (t.support.transform ? this.animate(i.x) : this.$stage.stop(), this.invalidate("position")), this.$element.toggleClass(this.options.grabClass, "mousedown" === e.type), this.speed(0), this._drag.time = (new Date).getTime(), this._drag.target = t(e.target), this._drag.stage.start = i, this._drag.stage.current = i, this._drag.pointer = this.pointer(e), t(A).on("mouseup.owl.core touchend.owl.core", t.proxy(this.onDragEnd, this)), t(A).one("mousemove.owl.core touchmove.owl.core", t.proxy((function (e) {
			var i = this.difference(this._drag.pointer, this.pointer(e));
			t(A).on("mousemove.owl.core touchmove.owl.core", t.proxy(this.onDragMove, this)), Math.abs(i.x) < Math.abs(i.y) && this.is("valid") || (e.preventDefault(), this.enter("dragging"), this.trigger("drag"))
		}), this)))
	}, n.prototype.onDragMove = function (t) {
		var e = null, A = null, i = null, n = this.difference(this._drag.pointer, this.pointer(t)),
			a = this.difference(this._drag.stage.start, n);
		this.is("dragging") && (t.preventDefault(), this.settings.loop ? (e = this.coordinates(this.minimum()), A = this.coordinates(this.maximum() + 1) - e, a.x = ((a.x - e) % A + A) % A + e) : (e = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()), A = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()), i = this.settings.pullDrag ? -1 * n.x / 5 : 0, a.x = Math.max(Math.min(a.x, e + i), A + i)), this._drag.stage.current = a, this.animate(a.x))
	}, n.prototype.onDragEnd = function (e) {
		var i = this.difference(this._drag.pointer, this.pointer(e)), n = this._drag.stage.current,
			a = i.x > 0 ^ this.settings.rtl ? "left" : "right";
		t(A).off(".owl.core"), this.$element.removeClass(this.options.grabClass), (0 !== i.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(this.closest(n.x, 0 !== i.x ? a : this._drag.direction)), this.invalidate("position"), this.update(), this._drag.direction = a, (Math.abs(i.x) > 3 || (new Date).getTime() - this._drag.time > 300) && this._drag.target.one("click.owl.core", (function () {
			return !1
		}))), this.is("dragging") && (this.leave("dragging"), this.trigger("dragged"))
	}, n.prototype.closest = function (e, A) {
		var n = -1, a = this.width(), o = this.coordinates();
		return this.settings.freeDrag || t.each(o, t.proxy((function (t, s) {
			return "left" === A && e > s - 30 && e < s + 30 ? n = t : "right" === A && e > s - a - 30 && e < s - a + 30 ? n = t + 1 : this.op(e, "<", s) && this.op(e, ">", o[t + 1] !== i ? o[t + 1] : s - a) && (n = "left" === A ? t + 1 : t), -1 === n
		}), this)), this.settings.loop || (this.op(e, ">", o[this.minimum()]) ? n = e = this.minimum() : this.op(e, "<", o[this.maximum()]) && (n = e = this.maximum())), n
	}, n.prototype.animate = function (e) {
		var A = this.speed() > 0;
		this.is("animating") && this.onTransitionEnd(), A && (this.enter("animating"), this.trigger("translate")), t.support.transform3d && t.support.transition ? this.$stage.css({
			transform: "translate3d(" + e + "px,0px,0px)",
			transition: this.speed() / 1e3 + "s" + (this.settings.slideTransition ? " " + this.settings.slideTransition : "")
		}) : A ? this.$stage.animate({left: e + "px"}, this.speed(), this.settings.fallbackEasing, t.proxy(this.onTransitionEnd, this)) : this.$stage.css({left: e + "px"})
	}, n.prototype.is = function (t) {
		return this._states.current[t] && this._states.current[t] > 0
	}, n.prototype.current = function (t) {
		if (t === i) return this._current;
		if (0 === this._items.length) return i;
		if (t = this.normalize(t), this._current !== t) {
			var e = this.trigger("change", {property: {name: "position", value: t}});
			e.data !== i && (t = this.normalize(e.data)), this._current = t, this.invalidate("position"), this.trigger("changed", {
				property: {
					name: "position",
					value: this._current
				}
			})
		}
		return this._current
	}, n.prototype.invalidate = function (e) {
		return "string" === t.type(e) && (this._invalidated[e] = !0, this.is("valid") && this.leave("valid")), t.map(this._invalidated, (function (t, e) {
			return e
		}))
	}, n.prototype.reset = function (t) {
		(t = this.normalize(t)) !== i && (this._speed = 0, this._current = t, this.suppress(["translate", "translated"]), this.animate(this.coordinates(t)), this.release(["translate", "translated"]))
	}, n.prototype.normalize = function (t, e) {
		var A = this._items.length, n = e ? 0 : this._clones.length;
		return !this.isNumeric(t) || A < 1 ? t = i : (t < 0 || t >= A + n) && (t = ((t - n / 2) % A + A) % A + n / 2), t
	}, n.prototype.relative = function (t) {
		return t -= this._clones.length / 2, this.normalize(t, !0)
	}, n.prototype.maximum = function (t) {
		var e, A, i, n = this.settings, a = this._coordinates.length;
		if (n.loop) a = this._clones.length / 2 + this._items.length - 1; else if (n.autoWidth || n.merge) {
			if (e = this._items.length) for (A = this._items[--e].width(), i = this.$element.width(); e-- && !((A += this._items[e].width() + this.settings.margin) > i);) ;
			a = e + 1
		} else a = n.center ? this._items.length - 1 : this._items.length - n.items;
		return t && (a -= this._clones.length / 2), Math.max(a, 0)
	}, n.prototype.minimum = function (t) {
		return t ? 0 : this._clones.length / 2
	}, n.prototype.items = function (t) {
		return t === i ? this._items.slice() : (t = this.normalize(t, !0), this._items[t])
	}, n.prototype.mergers = function (t) {
		return t === i ? this._mergers.slice() : (t = this.normalize(t, !0), this._mergers[t])
	}, n.prototype.clones = function (e) {
		var A = this._clones.length / 2, n = A + this._items.length, a = function (t) {
			return t % 2 == 0 ? n + t / 2 : A - (t + 1) / 2
		};
		return e === i ? t.map(this._clones, (function (t, e) {
			return a(e)
		})) : t.map(this._clones, (function (t, A) {
			return t === e ? a(A) : null
		}))
	}, n.prototype.speed = function (t) {
		return t !== i && (this._speed = t), this._speed
	}, n.prototype.coordinates = function (e) {
		var A, n = 1, a = e - 1;
		return e === i ? t.map(this._coordinates, t.proxy((function (t, e) {
			return this.coordinates(e)
		}), this)) : (this.settings.center ? (this.settings.rtl && (n = -1, a = e + 1), A = this._coordinates[e], A += (this.width() - A + (this._coordinates[a] || 0)) / 2 * n) : A = this._coordinates[a] || 0, A = Math.ceil(A))
	}, n.prototype.duration = function (t, e, A) {
		return 0 === A ? 0 : Math.min(Math.max(Math.abs(e - t), 1), 6) * Math.abs(A || this.settings.smartSpeed)
	}, n.prototype.to = function (t, e) {
		var A = this.current(), i = null, n = t - this.relative(A), a = (n > 0) - (n < 0), o = this._items.length,
			s = this.minimum(), r = this.maximum();
		this.settings.loop ? (!this.settings.rewind && Math.abs(n) > o / 2 && (n += -1 * a * o), (i = (((t = A + n) - s) % o + o) % o + s) !== t && i - n <= r && i - n > 0 && (A = i - n, t = i, this.reset(A))) : this.settings.rewind ? t = (t % (r += 1) + r) % r : t = Math.max(s, Math.min(r, t)), this.speed(this.duration(A, t, e)), this.current(t), this.isVisible() && this.update()
	}, n.prototype.next = function (t) {
		t = t || !1, this.to(this.relative(this.current()) + 1, t)
	}, n.prototype.prev = function (t) {
		t = t || !1, this.to(this.relative(this.current()) - 1, t)
	}, n.prototype.onTransitionEnd = function (t) {
		if (t !== i && (t.stopPropagation(), (t.target || t.srcElement || t.originalTarget) !== this.$stage.get(0))) return !1;
		this.leave("animating"), this.trigger("translated")
	}, n.prototype.viewport = function () {
		var i;
		return this.options.responsiveBaseElement !== e ? i = t(this.options.responsiveBaseElement).width() : e.innerWidth ? i = e.innerWidth : A.documentElement && A.documentElement.clientWidth && (i = A.documentElement.clientWidth), i
	}, n.prototype.replace = function (e) {
		this.$stage.empty(), this._items = [], e && (e = e instanceof jQuery ? e : t(e)), this.settings.nestedItemSelector && (e = e.find("." + this.settings.nestedItemSelector)), e.filter((function () {
			return 1 === this.nodeType
		})).each(t.proxy((function (t, e) {
			e = this.prepare(e), this.$stage.append(e), this._items.push(e), this._mergers.push(1 * e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)
		}), this)), this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items")
	}, n.prototype.add = function (e, A) {
		var n = this.relative(this._current);
		A = A === i ? this._items.length : this.normalize(A, !0), e = e instanceof jQuery ? e : t(e), this.trigger("add", {
			content: e,
			position: A
		}), e = this.prepare(e), 0 === this._items.length || A === this._items.length ? (0 === this._items.length && this.$stage.append(e), 0 !== this._items.length && this._items[A - 1].after(e), this._items.push(e), this._mergers.push(1 * e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)) : (this._items[A].before(e), this._items.splice(A, 0, e), this._mergers.splice(A, 0, 1 * e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)), this._items[n] && this.reset(this._items[n].index()), this.invalidate("items"), this.trigger("added", {
			content: e,
			position: A
		})
	}, n.prototype.remove = function (t) {
		(t = this.normalize(t, !0)) !== i && (this.trigger("remove", {
			content: this._items[t],
			position: t
		}), this._items[t].remove(), this._items.splice(t, 1), this._mergers.splice(t, 1), this.invalidate("items"), this.trigger("removed", {
			content: null,
			position: t
		}))
	}, n.prototype.preloadAutoWidthImages = function (e) {
		e.each(t.proxy((function (e, A) {
			this.enter("pre-loading"), A = t(A), t(new Image).one("load", t.proxy((function (t) {
				A.attr("src", t.target.src), A.css("opacity", 1), this.leave("pre-loading"), !this.is("pre-loading") && !this.is("initializing") && this.refresh()
			}), this)).attr("src", A.attr("src") || A.attr("data-src") || A.attr("data-src-retina"))
		}), this))
	}, n.prototype.destroy = function () {
		for (var i in this.$element.off(".owl.core"), this.$stage.off(".owl.core"), t(A).off(".owl.core"), !1 !== this.settings.responsive && (e.clearTimeout(this.resizeTimer), this.off(e, "resize", this._handlers.onThrottledResize)), this._plugins) this._plugins[i].destroy();
		this.$stage.children(".cloned").remove(), this.$stage.unwrap(), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$stage.remove(), this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), "")).removeData("owl.carousel")
	}, n.prototype.op = function (t, e, A) {
		var i = this.settings.rtl;
		switch (e) {
			case"<":
				return i ? t > A : t < A;
			case">":
				return i ? t < A : t > A;
			case">=":
				return i ? t <= A : t >= A;
			case"<=":
				return i ? t >= A : t <= A
		}
	}, n.prototype.on = function (t, e, A, i) {
		t.addEventListener ? t.addEventListener(e, A, i) : t.attachEvent && t.attachEvent("on" + e, A)
	}, n.prototype.off = function (t, e, A, i) {
		t.removeEventListener ? t.removeEventListener(e, A, i) : t.detachEvent && t.detachEvent("on" + e, A)
	}, n.prototype.trigger = function (e, A, i, a, o) {
		var s = {item: {count: this._items.length, index: this.current()}},
			r = t.camelCase(t.grep(["on", e, i], (function (t) {
				return t
			})).join("-").toLowerCase()),
			g = t.Event([e, "owl", i || "carousel"].join(".").toLowerCase(), t.extend({relatedTarget: this}, s, A));
		return this._supress[e] || (t.each(this._plugins, (function (t, e) {
			e.onTrigger && e.onTrigger(g)
		})), this.register({
			type: n.Type.Event,
			name: e
		}), this.$element.trigger(g), this.settings && "function" == typeof this.settings[r] && this.settings[r].call(this, g)), g
	}, n.prototype.enter = function (e) {
		t.each([e].concat(this._states.tags[e] || []), t.proxy((function (t, e) {
			this._states.current[e] === i && (this._states.current[e] = 0), this._states.current[e]++
		}), this))
	}, n.prototype.leave = function (e) {
		t.each([e].concat(this._states.tags[e] || []), t.proxy((function (t, e) {
			this._states.current[e]--
		}), this))
	}, n.prototype.register = function (e) {
		if (e.type === n.Type.Event) {
			if (t.event.special[e.name] || (t.event.special[e.name] = {}), !t.event.special[e.name].owl) {
				var A = t.event.special[e.name]._default;
				t.event.special[e.name]._default = function (t) {
					return !A || !A.apply || t.namespace && -1 !== t.namespace.indexOf("owl") ? t.namespace && t.namespace.indexOf("owl") > -1 : A.apply(this, arguments)
				}, t.event.special[e.name].owl = !0
			}
		} else e.type === n.Type.State && (this._states.tags[e.name] ? this._states.tags[e.name] = this._states.tags[e.name].concat(e.tags) : this._states.tags[e.name] = e.tags, this._states.tags[e.name] = t.grep(this._states.tags[e.name], t.proxy((function (A, i) {
			return t.inArray(A, this._states.tags[e.name]) === i
		}), this)))
	}, n.prototype.suppress = function (e) {
		t.each(e, t.proxy((function (t, e) {
			this._supress[e] = !0
		}), this))
	}, n.prototype.release = function (e) {
		t.each(e, t.proxy((function (t, e) {
			delete this._supress[e]
		}), this))
	}, n.prototype.pointer = function (t) {
		var A = {x: null, y: null};
		return (t = (t = t.originalEvent || t || e.event).touches && t.touches.length ? t.touches[0] : t.changedTouches && t.changedTouches.length ? t.changedTouches[0] : t).pageX ? (A.x = t.pageX, A.y = t.pageY) : (A.x = t.clientX, A.y = t.clientY), A
	}, n.prototype.isNumeric = function (t) {
		return !isNaN(parseFloat(t))
	}, n.prototype.difference = function (t, e) {
		return {x: t.x - e.x, y: t.y - e.y}
	}, t.fn.owlCarousel = function (e) {
		var A = Array.prototype.slice.call(arguments, 1);
		return this.each((function () {
			var i = t(this), a = i.data("owl.carousel");
			a || (a = new n(this, "object" == typeof e && e), i.data("owl.carousel", a), t.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], (function (e, A) {
				a.register({
					type: n.Type.Event,
					name: A
				}), a.$element.on(A + ".owl.carousel.core", t.proxy((function (t) {
					t.namespace && t.relatedTarget !== this && (this.suppress([A]), a[A].apply(this, [].slice.call(arguments, 1)), this.release([A]))
				}), a))
			}))), "string" == typeof e && "_" !== e.charAt(0) && a[e].apply(a, A)
		}))
	}, t.fn.owlCarousel.Constructor = n
}(window.Zepto || window.jQuery, window, document), function (t, e, A, i) {
	var n = function (e) {
		this._core = e, this._interval = null, this._visible = null, this._handlers = {
			"initialized.owl.carousel": t.proxy((function (t) {
				t.namespace && this._core.settings.autoRefresh && this.watch()
			}), this)
		}, this._core.options = t.extend({}, n.Defaults, this._core.options), this._core.$element.on(this._handlers)
	};
	n.Defaults = {autoRefresh: !0, autoRefreshInterval: 500}, n.prototype.watch = function () {
		this._interval || (this._visible = this._core.isVisible(), this._interval = e.setInterval(t.proxy(this.refresh, this), this._core.settings.autoRefreshInterval))
	}, n.prototype.refresh = function () {
		this._core.isVisible() !== this._visible && (this._visible = !this._visible, this._core.$element.toggleClass("owl-hidden", !this._visible), this._visible && this._core.invalidate("width") && this._core.refresh())
	}, n.prototype.destroy = function () {
		var t, A;
		for (t in e.clearInterval(this._interval), this._handlers) this._core.$element.off(t, this._handlers[t]);
		for (A in Object.getOwnPropertyNames(this)) "function" != typeof this[A] && (this[A] = null)
	}, t.fn.owlCarousel.Constructor.Plugins.AutoRefresh = n
}(window.Zepto || window.jQuery, window, document), function (t, e, A, i) {
	var n = function (e) {
		this._core = e, this._loaded = [], this._handlers = {
			"initialized.owl.carousel change.owl.carousel resized.owl.carousel": t.proxy((function (e) {
				if (e.namespace && this._core.settings && this._core.settings.lazyLoad && (e.property && "position" == e.property.name || "initialized" == e.type)) {
					var A = this._core.settings, i = A.center && Math.ceil(A.items / 2) || A.items,
						n = A.center && -1 * i || 0,
						a = (e.property && void 0 !== e.property.value ? e.property.value : this._core.current()) + n,
						o = this._core.clones().length, s = t.proxy((function (t, e) {
							this.load(e)
						}), this);
					for (A.lazyLoadEager > 0 && (i += A.lazyLoadEager, A.loop && (a -= A.lazyLoadEager, i++)); n++ < i;) this.load(o / 2 + this._core.relative(a)), o && t.each(this._core.clones(this._core.relative(a)), s), a++
				}
			}), this)
		}, this._core.options = t.extend({}, n.Defaults, this._core.options), this._core.$element.on(this._handlers)
	};
	n.Defaults = {lazyLoad: !1, lazyLoadEager: 0}, n.prototype.load = function (A) {
		var i = this._core.$stage.children().eq(A), n = i && i.find(".owl-lazy");
		!n || t.inArray(i.get(0), this._loaded) > -1 || (n.each(t.proxy((function (A, i) {
			var n, a = t(i),
				o = e.devicePixelRatio > 1 && a.attr("data-src-retina") || a.attr("data-src") || a.attr("data-srcset");
			this._core.trigger("load", {
				element: a,
				url: o
			}, "lazy"), a.is("img") ? a.one("load.owl.lazy", t.proxy((function () {
				a.css("opacity", 1), this._core.trigger("loaded", {element: a, url: o}, "lazy")
			}), this)).attr("src", o) : a.is("source") ? a.one("load.owl.lazy", t.proxy((function () {
				this._core.trigger("loaded", {element: a, url: o}, "lazy")
			}), this)).attr("srcset", o) : ((n = new Image).onload = t.proxy((function () {
				a.css({"background-image": 'url("' + o + '")', opacity: "1"}), this._core.trigger("loaded", {
					element: a,
					url: o
				}, "lazy")
			}), this), n.src = o)
		}), this)), this._loaded.push(i.get(0)))
	}, n.prototype.destroy = function () {
		var t, e;
		for (t in this.handlers) this._core.$element.off(t, this.handlers[t]);
		for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
	}, t.fn.owlCarousel.Constructor.Plugins.Lazy = n
}(window.Zepto || window.jQuery, window, document), function (t, e, A, i) {
	var n = function (A) {
		this._core = A, this._previousHeight = null, this._handlers = {
			"initialized.owl.carousel refreshed.owl.carousel": t.proxy((function (t) {
				t.namespace && this._core.settings.autoHeight && this.update()
			}), this), "changed.owl.carousel": t.proxy((function (t) {
				t.namespace && this._core.settings.autoHeight && "position" === t.property.name && this.update()
			}), this), "loaded.owl.lazy": t.proxy((function (t) {
				t.namespace && this._core.settings.autoHeight && t.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update()
			}), this)
		}, this._core.options = t.extend({}, n.Defaults, this._core.options), this._core.$element.on(this._handlers), this._intervalId = null;
		var i = this;
		t(e).on("load", (function () {
			i._core.settings.autoHeight && i.update()
		})), t(e).resize((function () {
			i._core.settings.autoHeight && (null != i._intervalId && clearTimeout(i._intervalId), i._intervalId = setTimeout((function () {
				i.update()
			}), 250))
		}))
	};
	n.Defaults = {autoHeight: !1, autoHeightClass: "owl-height"}, n.prototype.update = function () {
		var e = this._core._current, A = e + this._core.settings.items, i = this._core.settings.lazyLoad,
			n = this._core.$stage.children().toArray().slice(e, A), a = [], o = 0;
		t.each(n, (function (e, A) {
			a.push(t(A).height())
		})), (o = Math.max.apply(null, a)) <= 1 && i && this._previousHeight && (o = this._previousHeight), this._previousHeight = o, this._core.$stage.parent().height(o).addClass(this._core.settings.autoHeightClass)
	}, n.prototype.destroy = function () {
		var t, e;
		for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
		for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
	}, t.fn.owlCarousel.Constructor.Plugins.AutoHeight = n
}(window.Zepto || window.jQuery, window, document), function (t, e, A, i) {
	var n = function (e) {
		this._core = e, this._videos = {}, this._playing = null, this._handlers = {
			"initialized.owl.carousel": t.proxy((function (t) {
				t.namespace && this._core.register({type: "state", name: "playing", tags: ["interacting"]})
			}), this), "resize.owl.carousel": t.proxy((function (t) {
				t.namespace && this._core.settings.video && this.isInFullScreen() && t.preventDefault()
			}), this), "refreshed.owl.carousel": t.proxy((function (t) {
				t.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove()
			}), this), "changed.owl.carousel": t.proxy((function (t) {
				t.namespace && "position" === t.property.name && this._playing && this.stop()
			}), this), "prepared.owl.carousel": t.proxy((function (e) {
				if (e.namespace) {
					var A = t(e.content).find(".owl-video");
					A.length && (A.css("display", "none"), this.fetch(A, t(e.content)))
				}
			}), this)
		}, this._core.options = t.extend({}, n.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", t.proxy((function (t) {
			this.play(t)
		}), this))
	};
	n.Defaults = {video: !1, videoHeight: !1, videoWidth: !1}, n.prototype.fetch = function (t, e) {
		var A = t.attr("data-vimeo-id") ? "vimeo" : t.attr("data-vzaar-id") ? "vzaar" : "youtube",
			i = t.attr("data-vimeo-id") || t.attr("data-youtube-id") || t.attr("data-vzaar-id"),
			n = t.attr("data-width") || this._core.settings.videoWidth,
			a = t.attr("data-height") || this._core.settings.videoHeight, o = t.attr("href");
		if (!o) throw new Error("Missing video URL.");
		if ((i = o.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/))[3].indexOf("youtu") > -1) A = "youtube"; else if (i[3].indexOf("vimeo") > -1) A = "vimeo"; else {
			if (!(i[3].indexOf("vzaar") > -1)) throw new Error("Video URL not supported.");
			A = "vzaar"
		}
		i = i[6], this._videos[o] = {
			type: A,
			id: i,
			width: n,
			height: a
		}, e.attr("data-video", o), this.thumbnail(t, this._videos[o])
	}, n.prototype.thumbnail = function (e, A) {
		var i, n, a = A.width && A.height ? "width:" + A.width + "px;height:" + A.height + "px;" : "",
			o = e.find("img"), s = "src", r = "", g = this._core.settings, h = function (A) {
				'<div class="owl-video-play-icon"></div>', i = g.lazyLoad ? t("<div/>", {
					class: "owl-video-tn " + r,
					srcType: A
				}) : t("<div/>", {
					class: "owl-video-tn",
					style: "opacity:1;background-image:url(" + A + ")"
				}), e.after(i), e.after('<div class="owl-video-play-icon"></div>')
			};
		if (e.wrap(t("<div/>", {
			class: "owl-video-wrapper",
			style: a
		})), this._core.settings.lazyLoad && (s = "data-src", r = "owl-lazy"), o.length) return h(o.attr(s)), o.remove(), !1;
		"youtube" === A.type ? (n = "//img.youtube.com/vi/" + A.id + "/hqdefault.jpg", h(n)) : "vimeo" === A.type ? t.ajax({
			type: "GET",
			url: "//vimeo.com/api/v2/video/" + A.id + ".json",
			jsonp: "callback",
			dataType: "jsonp",
			success: function (t) {
				n = t[0].thumbnail_large, h(n)
			}
		}) : "vzaar" === A.type && t.ajax({
			type: "GET",
			url: "//vzaar.com/api/videos/" + A.id + ".json",
			jsonp: "callback",
			dataType: "jsonp",
			success: function (t) {
				n = t.framegrab_url, h(n)
			}
		})
	}, n.prototype.stop = function () {
		this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null, this._core.leave("playing"), this._core.trigger("stopped", null, "video")
	}, n.prototype.play = function (e) {
		var A, i = t(e.target).closest("." + this._core.settings.itemClass), n = this._videos[i.attr("data-video")],
			a = n.width || "100%", o = n.height || this._core.$stage.height();
		this._playing || (this._core.enter("playing"), this._core.trigger("play", null, "video"), i = this._core.items(this._core.relative(i.index())), this._core.reset(i.index()), (A = t('<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>')).attr("height", o), A.attr("width", a), "youtube" === n.type ? A.attr("src", "//www.youtube.com/embed/" + n.id + "?autoplay=1&rel=0&v=" + n.id) : "vimeo" === n.type ? A.attr("src", "//player.vimeo.com/video/" + n.id + "?autoplay=1") : "vzaar" === n.type && A.attr("src", "//view.vzaar.com/" + n.id + "/player?autoplay=true"), t(A).wrap('<div class="owl-video-frame" />').insertAfter(i.find(".owl-video")), this._playing = i.addClass("owl-video-playing"))
	}, n.prototype.isInFullScreen = function () {
		var e = A.fullscreenElement || A.mozFullScreenElement || A.webkitFullscreenElement;
		return e && t(e).parent().hasClass("owl-video-frame")
	}, n.prototype.destroy = function () {
		var t, e;
		for (t in this._core.$element.off("click.owl.video"), this._handlers) this._core.$element.off(t, this._handlers[t]);
		for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
	}, t.fn.owlCarousel.Constructor.Plugins.Video = n
}(window.Zepto || window.jQuery, window, document), function (t, e, A, i) {
	var n = function (e) {
		this.core = e, this.core.options = t.extend({}, n.Defaults, this.core.options), this.swapping = !0, this.previous = i, this.next = i, this.handlers = {
			"change.owl.carousel": t.proxy((function (t) {
				t.namespace && "position" == t.property.name && (this.previous = this.core.current(), this.next = t.property.value)
			}), this), "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": t.proxy((function (t) {
				t.namespace && (this.swapping = "translated" == t.type)
			}), this), "translate.owl.carousel": t.proxy((function (t) {
				t.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
			}), this)
		}, this.core.$element.on(this.handlers)
	};
	n.Defaults = {animateOut: !1, animateIn: !1}, n.prototype.swap = function () {
		if (1 === this.core.settings.items && t.support.animation && t.support.transition) {
			this.core.speed(0);
			var e, A = t.proxy(this.clear, this), i = this.core.$stage.children().eq(this.previous),
				n = this.core.$stage.children().eq(this.next), a = this.core.settings.animateIn,
				o = this.core.settings.animateOut;
			this.core.current() !== this.previous && (o && (e = this.core.coordinates(this.previous) - this.core.coordinates(this.next), i.one(t.support.animation.end, A).css({left: e + "px"}).addClass("animated owl-animated-out").addClass(o)), a && n.one(t.support.animation.end, A).addClass("animated owl-animated-in").addClass(a))
		}
	}, n.prototype.clear = function (e) {
		t(e.target).css({left: ""}).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.onTransitionEnd()
	}, n.prototype.destroy = function () {
		var t, e;
		for (t in this.handlers) this.core.$element.off(t, this.handlers[t]);
		for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
	}, t.fn.owlCarousel.Constructor.Plugins.Animate = n
}(window.Zepto || window.jQuery, window, document), function (t, e, A, i) {
	var n = function (e) {
		this._core = e, this._call = null, this._time = 0, this._timeout = 0, this._paused = !0, this._handlers = {
			"changed.owl.carousel": t.proxy((function (t) {
				t.namespace && "settings" === t.property.name ? this._core.settings.autoplay ? this.play() : this.stop() : t.namespace && "position" === t.property.name && this._paused && (this._time = 0)
			}), this), "initialized.owl.carousel": t.proxy((function (t) {
				t.namespace && this._core.settings.autoplay && this.play()
			}), this), "play.owl.autoplay": t.proxy((function (t, e, A) {
				t.namespace && this.play(e, A)
			}), this), "stop.owl.autoplay": t.proxy((function (t) {
				t.namespace && this.stop()
			}), this), "mouseover.owl.autoplay": t.proxy((function () {
				this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
			}), this), "mouseleave.owl.autoplay": t.proxy((function () {
				this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play()
			}), this), "touchstart.owl.core": t.proxy((function () {
				this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
			}), this), "touchend.owl.core": t.proxy((function () {
				this._core.settings.autoplayHoverPause && this.play()
			}), this)
		}, this._core.$element.on(this._handlers), this._core.options = t.extend({}, n.Defaults, this._core.options)
	};
	n.Defaults = {
		autoplay: !1,
		autoplayTimeout: 5e3,
		autoplayHoverPause: !1,
		autoplaySpeed: !1
	}, n.prototype._next = function (i) {
		this._call = e.setTimeout(t.proxy(this._next, this, i), this._timeout * (Math.round(this.read() / this._timeout) + 1) - this.read()), this._core.is("interacting") || A.hidden || this._core.next(i || this._core.settings.autoplaySpeed)
	}, n.prototype.read = function () {
		return (new Date).getTime() - this._time
	}, n.prototype.play = function (A, i) {
		var n;
		this._core.is("rotating") || this._core.enter("rotating"), A = A || this._core.settings.autoplayTimeout, n = Math.min(this._time % (this._timeout || A), A), this._paused ? (this._time = this.read(), this._paused = !1) : e.clearTimeout(this._call), this._time += this.read() % A - n, this._timeout = A, this._call = e.setTimeout(t.proxy(this._next, this, i), A - n)
	}, n.prototype.stop = function () {
		this._core.is("rotating") && (this._time = 0, this._paused = !0, e.clearTimeout(this._call), this._core.leave("rotating"))
	}, n.prototype.pause = function () {
		this._core.is("rotating") && !this._paused && (this._time = this.read(), this._paused = !0, e.clearTimeout(this._call))
	}, n.prototype.destroy = function () {
		var t, e;
		for (t in this.stop(), this._handlers) this._core.$element.off(t, this._handlers[t]);
		for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
	}, t.fn.owlCarousel.Constructor.Plugins.autoplay = n
}(window.Zepto || window.jQuery, window, document), function (t, e, A, i) {
	"use strict";
	var n = function (e) {
		this._core = e, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = {
			next: this._core.next,
			prev: this._core.prev,
			to: this._core.to
		}, this._handlers = {
			"prepared.owl.carousel": t.proxy((function (e) {
				e.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + t(e.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>")
			}), this), "added.owl.carousel": t.proxy((function (t) {
				t.namespace && this._core.settings.dotsData && this._templates.splice(t.position, 0, this._templates.pop())
			}), this), "remove.owl.carousel": t.proxy((function (t) {
				t.namespace && this._core.settings.dotsData && this._templates.splice(t.position, 1)
			}), this), "changed.owl.carousel": t.proxy((function (t) {
				t.namespace && "position" == t.property.name && this.draw()
			}), this), "initialized.owl.carousel": t.proxy((function (t) {
				t.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"), this.initialize(), this.update(), this.draw(), this._initialized = !0, this._core.trigger("initialized", null, "navigation"))
			}), this), "refreshed.owl.carousel": t.proxy((function (t) {
				t.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation"))
			}), this)
		}, this._core.options = t.extend({}, n.Defaults, this._core.options), this.$element.on(this._handlers)
	};
	n.Defaults = {
		nav: !1,
		navText: ['<span aria-label="Previous">&#x2039;</span>', '<span aria-label="Next">&#x203a;</span>'],
		navSpeed: !1,
		navElement: 'button type="button" role="presentation"',
		navContainer: !1,
		navContainerClass: "owl-nav",
		navClass: ["owl-prev", "owl-next"],
		slideBy: 1,
		dotClass: "owl-dot",
		dotsClass: "owl-dots",
		dots: !0,
		dotsEach: !1,
		dotsData: !1,
		dotsSpeed: !1,
		dotsContainer: !1
	}, n.prototype.initialize = function () {
		var e, A = this._core.settings;
		for (e in this._controls.$relative = (A.navContainer ? t(A.navContainer) : t("<div>").addClass(A.navContainerClass).appendTo(this.$element)).addClass("disabled"), this._controls.$previous = t("<" + A.navElement + ">").addClass(A.navClass[0]).html(A.navText[0]).prependTo(this._controls.$relative).on("click", t.proxy((function (t) {
			this.prev(A.navSpeed)
		}), this)), this._controls.$next = t("<" + A.navElement + ">").addClass(A.navClass[1]).html(A.navText[1]).appendTo(this._controls.$relative).on("click", t.proxy((function (t) {
			this.next(A.navSpeed)
		}), this)), A.dotsData || (this._templates = [t('<button role="button">').addClass(A.dotClass).append(t("<span>")).prop("outerHTML")]), this._controls.$absolute = (A.dotsContainer ? t(A.dotsContainer) : t("<div>").addClass(A.dotsClass).appendTo(this.$element)).addClass("disabled"), this._controls.$absolute.on("click", "button", t.proxy((function (e) {
			var i = t(e.target).parent().is(this._controls.$absolute) ? t(e.target).index() : t(e.target).parent().index();
			e.preventDefault(), this.to(i, A.dotsSpeed)
		}), this)), this._overrides) this._core[e] = t.proxy(this[e], this)
	}, n.prototype.destroy = function () {
		var t, e, A, i, n;
		for (t in n = this._core.settings, this._handlers) this.$element.off(t, this._handlers[t]);
		for (e in this._controls) "$relative" === e && n.navContainer ? this._controls[e].html("") : this._controls[e].remove();
		for (i in this.overides) this._core[i] = this._overrides[i];
		for (A in Object.getOwnPropertyNames(this)) "function" != typeof this[A] && (this[A] = null)
	}, n.prototype.update = function () {
		var t, e, A = this._core.clones().length / 2, i = A + this._core.items().length, n = this._core.maximum(!0),
			a = this._core.settings, o = a.center || a.autoWidth || a.dotsData ? 1 : a.dotsEach || a.items;
		if ("page" !== a.slideBy && (a.slideBy = Math.min(a.slideBy, a.items)), a.dots || "page" == a.slideBy) for (this._pages = [], t = A, e = 0, 0; t < i; t++) {
			if (e >= o || 0 === e) {
				if (this._pages.push({start: Math.min(n, t - A), end: t - A + o - 1}), Math.min(n, t - A) === n) break;
				e = 0
			}
			e += this._core.mergers(this._core.relative(t))
		}
	}, n.prototype.draw = function () {
		var e, A = this._core.settings, i = this._core.items().length <= A.items,
			n = this._core.relative(this._core.current()), a = A.loop || A.rewind;
		this._controls.$relative.toggleClass("disabled", !A.nav || i), A.nav && (this._controls.$previous.toggleClass("disabled", !a && n <= this._core.minimum(!0)), this._controls.$next.toggleClass("disabled", !a && n >= this._core.maximum(!0))), this._controls.$absolute.toggleClass("disabled", !A.dots || i), A.dots && (e = this._pages.length - this._controls.$absolute.children().length, A.dotsData && 0 !== e ? this._controls.$absolute.html(this._templates.join("")) : e > 0 ? this._controls.$absolute.append(new Array(e + 1).join(this._templates[0])) : e < 0 && this._controls.$absolute.children().slice(e).remove(), this._controls.$absolute.find(".active").removeClass("active"), this._controls.$absolute.children().eq(t.inArray(this.current(), this._pages)).addClass("active"))
	}, n.prototype.onTrigger = function (e) {
		var A = this._core.settings;
		e.page = {
			index: t.inArray(this.current(), this._pages),
			count: this._pages.length,
			size: A && (A.center || A.autoWidth || A.dotsData ? 1 : A.dotsEach || A.items)
		}
	}, n.prototype.current = function () {
		var e = this._core.relative(this._core.current());
		return t.grep(this._pages, t.proxy((function (t, A) {
			return t.start <= e && t.end >= e
		}), this)).pop()
	}, n.prototype.getPosition = function (e) {
		var A, i, n = this._core.settings;
		return "page" == n.slideBy ? (A = t.inArray(this.current(), this._pages), i = this._pages.length, e ? ++A : --A, A = this._pages[(A % i + i) % i].start) : (A = this._core.relative(this._core.current()), i = this._core.items().length, e ? A += n.slideBy : A -= n.slideBy), A
	}, n.prototype.next = function (e) {
		t.proxy(this._overrides.to, this._core)(this.getPosition(!0), e)
	}, n.prototype.prev = function (e) {
		t.proxy(this._overrides.to, this._core)(this.getPosition(!1), e)
	}, n.prototype.to = function (e, A, i) {
		var n;
		!i && this._pages.length ? (n = this._pages.length, t.proxy(this._overrides.to, this._core)(this._pages[(e % n + n) % n].start, A)) : t.proxy(this._overrides.to, this._core)(e, A)
	}, t.fn.owlCarousel.Constructor.Plugins.Navigation = n
}(window.Zepto || window.jQuery, window, document), function (t, e, A, i) {
	"use strict";
	var n = function (A) {
		this._core = A, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
			"initialized.owl.carousel": t.proxy((function (A) {
				A.namespace && "URLHash" === this._core.settings.startPosition && t(e).trigger("hashchange.owl.navigation")
			}), this), "prepared.owl.carousel": t.proxy((function (e) {
				if (e.namespace) {
					var A = t(e.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
					if (!A) return;
					this._hashes[A] = e.content
				}
			}), this), "changed.owl.carousel": t.proxy((function (A) {
				if (A.namespace && "position" === A.property.name) {
					var i = this._core.items(this._core.relative(this._core.current())),
						n = t.map(this._hashes, (function (t, e) {
							return t === i ? e : null
						})).join();
					if (!n || e.location.hash.slice(1) === n) return;
					e.location.hash = n
				}
			}), this)
		}, this._core.options = t.extend({}, n.Defaults, this._core.options), this.$element.on(this._handlers), t(e).on("hashchange.owl.navigation", t.proxy((function (t) {
			var A = e.location.hash.substring(1), i = this._core.$stage.children(),
				n = this._hashes[A] && i.index(this._hashes[A]);
			void 0 !== n && n !== this._core.current() && this._core.to(this._core.relative(n), !1, !0)
		}), this))
	};
	n.Defaults = {URLhashListener: !1}, n.prototype.destroy = function () {
		var A, i;
		for (A in t(e).off("hashchange.owl.navigation"), this._handlers) this._core.$element.off(A, this._handlers[A]);
		for (i in Object.getOwnPropertyNames(this)) "function" != typeof this[i] && (this[i] = null)
	}, t.fn.owlCarousel.Constructor.Plugins.Hash = n
}(window.Zepto || window.jQuery, window, document), function (t, e, A, i) {
	function n(e, A) {
		var i = !1, n = e.charAt(0).toUpperCase() + e.slice(1);
		return t.each((e + " " + s.join(n + " ") + n).split(" "), (function (t, e) {
			if (void 0 !== o[e]) return i = !A || e, !1
		})), i
	}

	function a(t) {
		return n(t, !0)
	}

	var o = t("<support>").get(0).style, s = "Webkit Moz O ms".split(" "), r = {
		transition: {
			end: {
				WebkitTransition: "webkitTransitionEnd",
				MozTransition: "transitionend",
				OTransition: "oTransitionEnd",
				transition: "transitionend"
			}
		},
		animation: {
			end: {
				WebkitAnimation: "webkitAnimationEnd",
				MozAnimation: "animationend",
				OAnimation: "oAnimationEnd",
				animation: "animationend"
			}
		}
	}, g = function () {
		return !!n("transform")
	}, h = function () {
		return !!n("perspective")
	}, l = function () {
		return !!n("animation")
	};
	(function () {
		return !!n("transition")
	})() && (t.support.transition = new String(a("transition")), t.support.transition.end = r.transition.end[t.support.transition]), l() && (t.support.animation = new String(a("animation")), t.
		support.animation.end = r.animation.end[t.support.animation]), g() && (t.support.transform = new String(a("transform")), t.support.transform3d = h())
}(window.Zepto || window.jQuery, window, document), $(document).ready((function () {
	var t = $("#slider-project");
	t.length && (t.owlCarousel({
		loop: !0,
		dots: !1,
		autoplay: !1,
		autoplayTimeout: 1e4,
		autoplaySpeed: 1e3,
		autoplayHoverPause: !1,
		responsive: {0: {items: 1, margin: 0}, 480: {items: 2}, 768: {items: 3}, 1024: {items: 3}}
	}), $(".btn-next").on("click", (function () {
		t.trigger("next.owl.carousel")
	})), $(".btn-prev").on("click", (function () {
		t.trigger("prev.owl.carousel")
	})));
	var e = $("#list-news-slider");
	e.length && e.owlCarousel({
		loop: !1,
		dots: !1,
		autoplay: !1,
		autoplayTimeout: 1e4,
		autoplaySpeed: 1e3,
		autoplayHoverPause: !1,
		responsive: {0: {items: 1, autoWidth: !0, margin: 10}, 480: {items: 2, margin: 15}, 768: {items: 3, margin: 20}}
	}), $("#divfLeft") && $(window).scroll((function () {
		var t = $("#animation_container").height();
		$(window).scrollTop() > t - ($(window).height() - $("#divfLeft").height()) / 2 ? ($("#divfLeft").css({
			top: "50%",
			position: "fixed"
		}), $("#divfRight").css({top: "50%", position: "fixed"})) : ($("#divfLeft").css({
			top: "",
			position: ""
		}), $("#divfRight").css({top: "", position: ""}))
	}))
}));
