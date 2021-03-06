var head = document.getElementsByTagName('head')[0];
var URL = "http://ec2-18-221-252-125.us-east-2.compute.amazonaws.com"
generateHeadDate('base', {id: 'viewport', href: window.location.pathname})
// Viewport
generateHeadDate('meta', {
    id: 'viewport',
    name: 'viewport',
    content: "width=device-width, initial-scale=1.0, maximum-scale=5"
})

if (document.querySelector('meta[name="description"]') == null) {
    generateHeadDate('meta', {
        name: 'description',
        content: "Compare Auto Insurance Rates Instantly"
    });
}

generateHeadDate('link', {
    href: `${URL}/manifest.json`,
    rel: 'manifest'
})

generateHeadDate('link', {
    href: `${URL}/static/css/2.150d169a.chunk.css`,
    rel: 'stylesheet'
})

generateHeadDate('link', {
    href: `${URL}/static/css/main.70832fff.chunk.css`,
    rel: 'stylesheet'
})

! function (e) {
    function r(r) {
        for (var n, a, i = r[0], c = r[1], l = r[2], p = 0, s = []; p < i.length; p++) a = i[p], Object
            .prototype.hasOwnProperty.call(o, a) && o[a] && s.push(o[a][0]), o[a] = 0;
        for (n in c) Object.prototype.hasOwnProperty.call(c, n) && (e[n] = c[n]);
        for (f && f(r); s.length;) s.shift()();
        return u.push.apply(u, l || []), t()
    }

    function t() {
        for (var e, r = 0; r < u.length; r++) {
            for (var t = u[r], n = !0, i = 1; i < t.length; i++) {
                var c = t[i];
                0 !== o[c] && (n = !1)
            }
            n && (u.splice(r--, 1), e = a(a.s = t[0]))
        }
        return e
    }
    var n = {},
        o = {
            1: 0
        },
        u = [];

    function a(r) {
        if (n[r]) return n[r].exports;
        var t = n[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(t.exports, t, t.exports, a), t.l = !0, t.exports
    }
    a.e = function (e) {
        var r = [],
            t = o[e];
        if (0 !== t)
            if (t) r.push(t[2]);
            else {
                var n = new Promise((function (r, n) {
                    t = o[e] = [r, n]
                }));
                r.push(t[2] = n);
                var u, i = document.createElement("script");
                i.charset = "utf-8", i.timeout = 120, a.nc && i.setAttribute("nonce", a.nc), i.src =
                    function (e) {
                        return a.p + "static/js/" + ({} [e] || e) + "." + {
                            3: "f032cf5c"
                        } [e] + ".chunk.js"
                    }(e);
                var c = new Error;
                u = function (r) {
                    i.onerror = i.onload = null, clearTimeout(l);
                    var t = o[e];
                    if (0 !== t) {
                        if (t) {
                            var n = r && ("load" === r.type ? "missing" : r.type),
                                u = r && r.target && r.target.src;
                            c.message = "Loading chunk " + e + " failed.\n(" + n + ": " + u + ")", c
                                .name = "ChunkLoadError", c.type = n, c.request = u, t[1](c)
                        }
                        o[e] = void 0
                    }
                };
                var l = setTimeout((function () {
                    u({
                        type: "timeout",
                        target: i
                    })
                }), 12e4);
                i.onerror = i.onload = u, document.head.appendChild(i)
            } return Promise.all(r)
    }, a.m = e, a.c = n, a.d = function (e, r, t) {
        a.o(e, r) || Object.defineProperty(e, r, {
            enumerable: !0,
            get: t
        })
    }, a.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, a.t = function (e, r) {
        if (1 & r && (e = a(e)), 8 & r) return e;
        if (4 & r && "object" == typeof e && e && e.__esModule) return e;
        var t = Object.create(null);
        if (a.r(t), Object.defineProperty(t, "default", {
                enumerable: !0,
                value: e
            }), 2 & r && "string" != typeof e)
            for (var n in e) a.d(t, n, function (r) {
                return e[r]
            }.bind(null, n));
        return t
    }, a.n = function (e) {
        var r = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return a.d(r, "a", r), r
    }, a.o = function (e, r) {
        return Object.prototype.hasOwnProperty.call(e, r)
    }, a.p = "/", a.oe = function (e) {
        throw console.error(e), e
    };
    var i = this["webpackJsonpembed-app"] = this["webpackJsonpembed-app"] || [],
        c = i.push.bind(i);
    i.push = r, i = i.slice();
    for (var l = 0; l < i.length; l++) r(i[l]);
    var f = c;
    t()
}([])

loadScript('chunk.js', `${URL}/static/js/2.0124586e.chunk.js`)
loadScript('main-chunk.js', `${URL}/static/js/main.5a730b46.chunk.js`)

function generateHeadDate(name, options) {
    var tag = document.createElement(name);
    for (var key in options) {
        var val = options[key];
        tag[key] = val;
    }
    head.appendChild(tag);
}

function loadScript(id, url, callback) {
    var script = document.createElement("script")
    script.type = "text/javascript";
    script.id = id;

    if (script.readyState) {
        // handle IE
        script.onreadystatechange = function () {
            if (script.readyState === "loaded" || script.readyState === "complete") {
                script.onreadystatechange = null;
                if (typeof (callback) == 'function') {
                    callback();
                }
            }
        };
    } else {
        script.onload = function () {
            if (typeof (callback) == 'function') {
                callback();
            }
        };
    }
    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
}