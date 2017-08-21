window.onload = function() {
    var a = document.querySelector("header"),
        b = document.querySelector("section"),
        c = document.querySelector(".tour"),
        d = b.querySelector(".photo"),
        e = b.querySelector(".code"),
        f = b.querySelector(".works"),
        g = document.documentElement.clientWidth,
        h = document.documentElement.clientHeight;
    a.style.width = g + "px",
    a.style.height = h + "px",
    a.style.backgroundSize = g + "px " + h + "px",
    b.style.width = g + "px";
    for (var i = b.children, j = d.querySelector(".btn"), k = 1; k < i.length; k++) {
        i[k].style.width = g + "px", i[k].style.height = h + "px", i[k].style.backgroundSize = g + "px " + (h + 20) + "px";
    }
    var l = a.querySelector(".logo"),
        m = a.querySelector(".title"),
        n = a.querySelector(".row");
    document.querySelector(".wrap");
    bounce(l, "y", function() {
        l.style.animation = "1s runLogo ease forwards", m.style.animation = "2s runOp ease forwards", n.style.animation = "1.5s runRow linear infinite"
    }), n.onclick = function() {
        n.timer = setInterval(function() {
            document.body.scrollTop += 100, document.body.scrollTop > h && (document.body.scrollTop = h, clearInterval(n.timer))
        }, 30)
    };
    for (var o = b.querySelector("nav"), p = o.querySelector(".list").children, q = o.querySelector("span"), k = 0; k < p.length - 1; k++) p[k].index = k, p[k].onmouseover = function() {
        for (var a = 0; a < p.length; a++) p[a].className = "";
        this.className = "active", startMove(q, {
            left: (p[0].offsetWidth + 5) * this.index
        }, {
            duration: 500,
            easing: Tween.Bounce.easeOut
        })
    }, p[k].onmouseout = function() {
        for (var a = 0; a < p.length; a++) p[a].className = "";
        p[0].className = "active", startMove(q, {
            left: 0
        }, {
            duration: 500,
            easing: Tween.Bounce.easeOut
        })
    };
    var r = echarts.init(document.getElementById("map"));
    r.setOption(option);
    var s = d.querySelector("ul"),
        t = s.querySelectorAll("li"),
        u = j.querySelector("span");
    photos(s, t, u, 12);
    var v = f.querySelector(".img");
    fnPages(v, 1e3, 300), window.onscroll = function() {
        var a = document.documentElement.scrollTop || document.body.scrollTop,
            b = c.querySelector(".fl"),
            d = c.querySelector(".fr");
        m.offsetTop < a && (b.style.animation = "1s runToL forwards", d.style.animation = "1s runToR forwards");
        var f = e.querySelector(".js");
        e.offsetTop < a && (f.style.animation = "1s runJs forwards");
        var a = (o.querySelectorAll("a"), document.documentElement.scrollTop || document.body.scrollTop);
        a > .5 * h ? (o.style.position = "fixed", o.style.opacity = 1, o.style.background = "rgba(0,0,0,0.5)") : (o.style.position = "absolute", o.style.opacity = 0)
    }
};