!function() {
    function t(t, e, i, a) {
    Object.defineProperty(t, e,  {
    get: i, set:a, enumerable:!0, configurable:!0;
}
);
}function e(t, e) {
    return Object.keys(e).forEach((function(i) {
    "default"===i||"__esModule"===i||t.hasOwnProperty(i)||Object.defineProperty(t, i,  {
    enumerable: !0, get:function() {
    return e[i];
}
});
})), t;
}var i= {
}
;
    t(i, "popperGenerator", (function() {
    return Tt;
}
)), t(i, "detectOverflow", (function() {
    return bt;
}
)), t(i, "createPopperBase", (function() {
    return Pt;
}
)), t(i, "createPopper", (function() {
    return Dt;
}
)), t(i, "createPopperLite", (function() {
    return It;
}
));
    var a= {
}
;
    t(a, "top", (function() {
    return s;
}
)), t(a, "bottom", (function() {
    return n;
}
)), t(a, "right", (function() {
    return o;
}
)), t(a, "left", (function() {
    return r;
}
)), t(a, "auto", (function() {
    return l;
}
)), t(a, "basePlacements", (function() {
    return c;
}
)), t(a, "start", (function() {
    return h;
}
)), t(a, "end", (function() {
    return d;
}
)), t(a, "clippingParents", (function() {
    return u;
}
)), t(a, "viewport", (function() {
    return g;
}
)), t(a, "popper", (function() {
    return f;
}
)), t(a, "reference", (function() {
    return p;
}
)), t(a, "variationPlacements", (function() {
    return x;
}
)), t(a, "placements", (function() {
    return m;
}
)), t(a, "beforeRead", (function() {
    return b;
}
)), t(a, "read", (function() {
    return v;
}
)), t(a, "afterRead", (function() {
    return y;
}
)), t(a, "beforeMain", (function() {
    return w;
}
)), t(a, "main", (function() {
    return k;
}
)), t(a, "afterMain", (function() {
    return A;
}
)), t(a, "beforeWrite", (function() {
    return C;
}
)), t(a, "write", (function() {
    return S;
}
)), t(a, "afterWrite", (function() {
    return E;
}
)), t(a, "modifierPhases", (function() {
    return L;
}
));
    var s="top", n="bottom", o="right", r="left", l="auto", c=[s, n, o, r], h="start", d="end", u="clippingParents", g="viewport", f="popper", p="reference", x=c.reduce((function(t, e) {
    return t.concat([e+"-"+h, e+"-"+d]);
}
), []), m=[].concat(c, [l]).reduce((function(t, e) {
    return t.concat([e, e+"-"+h, e+"-"+d]);
}
), []), b="beforeRead", v="read", y="afterRead", w="beforeMain", k="main", A="afterMain", C="beforeWrite", S="write", E="afterWrite", L=[b, v, y, w, k, A, C, S, E], _= {
}
;
    function M(t) {
    return t?(t.nodeName||"").toLowerCase(): null;
}
function T(t) {
    if(null==t)return window;
    if("[object Window]"!==t.toString()) {
    var e=t.ownerDocument;
    return e&&e.defaultView||window;
}
return t;
}function P(t) {
    return t instanceof T(t).Element||t instanceof Element;
}
function D(t) {
    return t instanceof T(t).HTMLElement||t instanceof HTMLElement;
}
function I(t) {
    return"undefined"!=typeof ShadowRoot&&(t instanceof T(t).ShadowRoot||t instanceof ShadowRoot);
}
t(_, "applyStyles", (function() {
    return O;
}
)), t(_, "arrow", (function() {
    return J;
}
)), t(_, "computeStyles", (function() {
    return it;
}
)), t(_, "eventListeners", (function() {
    return st;
}
)), t(_, "flip", (function() {
    return vt;
}
)), t(_, "hide", (function() {
    return kt;
}
)), t(_, "offset", (function() {
    return At;
}
)), t(_, "popperOffsets", (function() {
    return Ct;
}
)), t(_, "preventOverflow", (function() {
    return St;
}
));
    var O= {
    name: "applyStyles", enabled:!0, phase:"write", fn:function(t) {
    var e=t.state;
    Object.keys(e.elements).forEach((function(t) {
    var i=e.styles[t]|| {
}
, a=e.attributes[t]|| {
}
, s=e.elements[t];
    D(s)&&M(s)&&(Object.assign(s.style, i), Object.keys(a).forEach((function(t) {
    var e=a[t];
    !1===e?s.removeAttribute(t): s.setAttribute(t, !0===e?"":e);
}
)));
}));
}, effect:function(t) {
    var e=t.state, i= {
    popper:  {
    position: e.options.strategy, left:"0", top:"0", margin:"0"}
, arrow: {
    position: "absolute"}
, reference: {
}
}
;
    return Object.assign(e.elements.popper.style, i.popper), e.styles=i, e.elements.arrow&&Object.assign(e.elements.arrow.style, i.arrow), function() {
    Object.keys(e.elements).forEach((function(t) {
    var a=e.elements[t], s=e.attributes[t]|| {
}
, n=Object.keys(e.styles.hasOwnProperty(t)?e.styles[t]: i[t]).reduce((function(t, e) {
    return t[e]="", t;
}
),  {
}
);
    D(a)&&M(a)&&(Object.assign(a.style, n), Object.keys(s).forEach((function(t) {
    a.removeAttribute(t);
}
)));
}));
}}, requires: ["computeStyles"];
};
    function z(t) {
    return t.split("-")[0];
}
var Y=Math.max, N=Math.min, F=Math.round;
    function X(t, e) {
    void 0===e&&(e=!1);
    var i=t.getBoundingClientRect(), a=1, s=1;
    if(D(t)&&e) {
    var n=t.offsetHeight, o=t.offsetWidth;
    o>0&&(a=F(i.width)/o||1), n>0&&(s=F(i.height)/n||1);
}
return {
    width: i.width/a, height:i.height/s, top:i.top/s, right:i.right/a, bottom:i.bottom/s, left:i.left/a, x:i.left/a, y:i.top/s;
}
}function H(t) {
    var e=X(t), i=t.offsetWidth, a=t.offsetHeight;
    return Math.abs(e.width-i)<=1&&(i=e.width), Math.abs(e.height-a)<=1&&(a=e.height),  {
    x: t.offsetLeft, y:t.offsetTop, width:i, height:a;
}
}function R(t, e) {
    var i=e.getRootNode&&e.getRootNode();
    if(t.contains(e))return!0;
    if(i&&I(i)) {
    var a=e;
    do {
    if(a&&t.isSameNode(a))return!0;
    a=a.parentNode||a.host;
}
while(a);
}return!1;
}function W(t) {
    return T(t).getComputedStyle(t);
}
function B(t) {
    return["table", "td", "th"].indexOf(M(t))>=0;
}
function V(t) {
    return((P(t)?t.ownerDocument: t.document)||window.document).documentElement;
}
function j(t) {
    return"html"===M(t)?t: t.assignedSlot||t.parentNode||(I(t)?t.host:null)||V(t);
}
function G(t) {
    return D(t)&&"fixed"!==W(t).position?t.offsetParent: null;
}
function U(t) {
    for(var e=T(t), i=G(t);
    i&&B(i)&&"static"===W(i).position;
    )i=G(i);
    return i&&("html"===M(i)||"body"===M(i)&&"static"===W(i).position)?e: i||function(t) {
    var e=-1!==navigator.userAgent.toLowerCase().indexOf("firefox");
    if(-1!==navigator.userAgent.indexOf("Trident")&&D(t)&&"fixed"===W(t).position)return null;
    for(var i=j(t);
    D(i)&&["html", "body"].indexOf(M(i))<0;
    ) {
    var a=W(i);
    if("none"!==a.transform||"none"!==a.perspective||"paint"===a.contain||-1!==["transform", "perspective"].indexOf(a.willChange)||e&&"filter"===a.willChange||e&&a.filter&&"none"!==a.filter)return i;
    i=i.parentNode;
}
return null;
}(t)||e;
}function q(t) {
    return["top", "bottom"].indexOf(t)>=0?"x": "y"}
function $(t, e, i) {
    return Y(t, N(e, i));
}
function Z(t) {
    return Object.assign( {
}
,  {
    top: 0, right:0, bottom:0, left:0;
}
, t);
}function K(t, e) {
    return e.reduce((function(e, i) {
    return e[i]=t, e;
}
),  {
}
);
}
var J= {
    name: "arrow", enabled:!0, phase:"main", fn:function(t) {
    var e, i=t.state, a=t.name, l=t.options, h=i.elements.arrow, d=i.modifiersData.popperOffsets, u=z(i.placement), g=q(u), f=[r, o].indexOf(u)>=0?"height": "width";
    if(h&&d) {
    var p=function(t, e) {
    return Z("number"!=typeof(t="function"==typeof t?t(Object.assign( {
}
, e.rects,  {
    placement: e.placement;
}
)):t)?t:K(t, c));
}(l.padding, i), x=H(h), m="y"===g?s:r, b="y"===g?n:o, v=i.rects.reference[f]+i.rects.reference[g]-d[g]-i.rects.popper[f], y=d[g]-i.rects.reference[g], w=U(h), k=w?"y"===g?w.clientHeight||0:w.clientWidth||0:0, A=v/2-y/2, C=p[m], S=k-x[f]-p[b], E=k/2-x[f]/2+A, L=$(C, E, S), _=g;
    i.modifiersData[a]=((e= {
}
)[_]=L, e.centerOffset=L-E, e);
}
}, effect: function(t) {
    var e=t.state, i=t.options.element, a=void 0===i?"[data-popper-arrow]": i;
    null!=a&&("string"!=typeof a||(a=e.elements.popper.querySelector(a)))&&R(e.elements.popper, a)&&(e.elements.arrow=a);
}
, requires: ["popperOffsets"], requiresIfExists:["preventOverflow"];
};
    function Q(t) {
    return t.split("-")[1];
}
var tt= {
    top: "auto", right:"auto", bottom:"auto", left:"auto"}
;
    function et(t) {
    var e, i=t.popper, a=t.popperRect, l=t.placement, c=t.variation, h=t.offsets, u=t.position, g=t.gpuAcceleration, f=t.adaptive, p=t.roundOffsets, x=t.isFixed, m=h.x, b=void 0===m?0: m, v=h.y, y=void 0===v?0:v, w="function"==typeof p?p( {
    x: b, y:y;
}
): {
    x: b, y:y;
}
;
    b=w.x, y=w.y;
    var k=h.hasOwnProperty("x"), A=h.hasOwnProperty("y"), C=r, S=s, E=window;
    if(f) {
    var L=U(i), _="clientHeight", M="clientWidth";
    if(L===T(i)&&"static"!==W(L=V(i)).position&&"absolute"===u&&(_="scrollHeight", M="scrollWidth"), l===s||(l===r||l===o)&&c===d)S=n, y-=(x&&E.visualViewport?E.visualViewport.height: L[_])-a.height, y*=g?1:-1;
    if(l===r||(l===s||l===n)&&c===d)C=o, b-=(x&&E.visualViewport?E.visualViewport.width: L[M])-a.width, b*=g?1:-1;
}
var P, D=Object.assign( {
    position: u;
}
, f&&tt), I=!0===p?function(t) {
    var e=t.x, i=t.y, a=window.devicePixelRatio||1;
    return {
    x: F(e*a)/a||0, y:F(i*a)/a||0;
}
}( {
    x: b, y:y;
}
): {
    x: b, y:y;
}
;
    return b=I.x, y=I.y, g?Object.assign( {
}
, D, ((P= {
}
)[S]=A?"0": "", P[C]=k?"0":"", P.transform=(E.devicePixelRatio||1)<=1?"translate("+b+"px,  "+y+"px)":"translate3d("+b+"px,  "+y+"px,  0)", P)):Object.assign( {
}
, D, ((e= {
}
)[S]=A?y+"px":"", e[C]=k?b+"px":"", e.transform="", e));
}
var it= {
    name: "computeStyles", enabled:!0, phase:"beforeWrite", fn:function(t) {
    var e=t.state, i=t.options, a=i.gpuAcceleration, s=void 0===a||a, n=i.adaptive, o=void 0===n||n, r=i.roundOffsets, l=void 0===r||r, c= {
    placement: z(e.placement), variation:Q(e.placement), popper:e.elements.popper, popperRect:e.rects.popper, gpuAcceleration:s, isFixed:"fixed"===e.options.strategy;
}
;
    null!=e.modifiersData.popperOffsets&&(e.styles.popper=Object.assign( {
}
, e.styles.popper, et(Object.assign( {
}
, c,  {
    offsets: e.modifiersData.popperOffsets, position:e.options.strategy, adaptive:o, roundOffsets:l;
}
)))), null!=e.modifiersData.arrow&&(e.styles.arrow=Object.assign( {
}
, e.styles.arrow, et(Object.assign( {
}
, c,  {
    offsets: e.modifiersData.arrow, position:"absolute", adaptive:!1, roundOffsets:l;
}
)))), e.attributes.popper=Object.assign( {
}
, e.attributes.popper,  {
    "data-popper-placement": e.placement;
}
);
}, data: {
}
}
, at= {
    passive: !0;
}
;
    var st= {
    name: "eventListeners", enabled:!0, phase:"write", fn:function() {
}
, effect:function(t) {
    var e=t.state, i=t.instance, a=t.options, s=a.scroll, n=void 0===s||s, o=a.resize, r=void 0===o||o, l=T(e.elements.popper), c=[].concat(e.scrollParents.reference, e.scrollParents.popper);
    return n&&c.forEach((function(t) {
    t.addEventListener("scroll", i.update, at);
}
)), r&&l.addEventListener("resize", i.update, at), function() {
    n&&c.forEach((function(t) {
    t.removeEventListener("scroll", i.update, at);
}
)), r&&l.removeEventListener("resize", i.update, at);
}}, data:  {
}
}
, nt= {
    left: "right", right:"left", bottom:"top", top:"bottom"}
;
    function ot(t) {
    return t.replace(/left|right|bottom|top/g, (function(t) {
    return nt[t];
}
));
}var rt= {
    start: "end", end:"start"}
;
    function lt(t) {
    return t.replace(/start|end/g, (function(t) {
    return rt[t];
}
));
}function ct(t) {
    var e=T(t);
    return {
    scrollLeft: e.pageXOffset, scrollTop:e.pageYOffset;
}
}function ht(t) {
    return X(V(t)).left+ct(t).scrollLeft;
}
function dt(t) {
    var e=W(t), i=e.overflow, a=e.overflowX, s=e.overflowY;
    return/auto|scroll|overlay|hidden/.test(i+s+a);
}
function ut(t) {
    return["html", "body", "#document"].indexOf(M(t))>=0?t.ownerDocument.body: D(t)&&dt(t)?t:ut(j(t));
}
function gt(t, e) {
    var i;
    void 0===e&&(e=[]);
    var a=ut(t), s=a===(null==(i=t.ownerDocument)?void 0: i.body), n=T(a), o=s?[n].concat(n.visualViewport||[], dt(a)?a:[]):a, r=e.concat(o);
    return s?r: r.concat(gt(j(o)));
}
function ft(t) {
    return Object.assign( {
}
, t,  {
    left: t.x, top:t.y, right:t.x+t.width, bottom:t.y+t.height;
}
);
}function pt(t, e) {
    return e===g?ft(function(t) {
    var e=T(t), i=V(t), a=e.visualViewport, s=i.clientWidth, n=i.clientHeight, o=0, r=0;
    return a&&(s=a.width, n=a.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(o=a.offsetLeft, r=a.offsetTop)),  {
    width: s, height:n, x:o+ht(t), y:r;
}
}(t)):P(e)?function(t) {
    var e=X(t);
    return e.top=e.top+t.clientTop, e.left=e.left+t.clientLeft, e.bottom=e.top+t.clientHeight, e.right=e.left+t.clientWidth, e.width=t.clientWidth, e.height=t.clientHeight, e.x=e.left, e.y=e.top, e;
}
(e): ft(function(t) {
    var e, i=V(t), a=ct(t), s=null==(e=t.ownerDocument)?void 0: e.body, n=Y(i.scrollWidth, i.clientWidth, s?s.scrollWidth:0, s?s.clientWidth:0), o=Y(i.scrollHeight, i.clientHeight, s?s.scrollHeight:0, s?s.clientHeight:0), r=-a.scrollLeft+ht(t), l=-a.scrollTop;
    return"rtl"===W(s||i).direction&&(r+=Y(i.clientWidth, s?s.clientWidth: 0)-n),  {
    width: n, height:o, x:r, y:l;
}
}(V(t)));
}function xt(t, e, i) {
    var a="clippingParents"===e?function(t) {
    var e=gt(j(t)), i=["absolute", "fixed"].indexOf(W(t).position)>=0&&D(t)?U(t): t;
    return P(i)?e.filter((function(t) {
    return P(t)&&R(t, i)&&"body"!==M(t);
}
)): [];
}(t):[].concat(e), s=[].concat(a, [i]), n=s[0], o=s.reduce((function(e, i) {
    var a=pt(t, i);
    return e.top=Y(a.top, e.top), e.right=N(a.right, e.right), e.bottom=N(a.bottom, e.bottom), e.left=Y(a.left, e.left), e;
}
), pt(t, n));
    return o.width=o.right-o.left, o.height=o.bottom-o.top, o.x=o.left, o.y=o.top, o;
}
function mt(t) {
    var e, i=t.reference, a=t.element, l=t.placement, c=l?z(l): null, u=l?Q(l):null, g=i.x+i.width/2-a.width/2, f=i.y+i.height/2-a.height/2;
    switch(c) {
    case s: e= {
    x: g, y:i.y-a.height;
}
;
    break;
    case n: e= {
    x: g, y:i.y+i.height;
}
;
    break;
    case o: e= {
    x: i.x+i.width, y:f;
}
;
    break;
    case r: e= {
    x: i.x-a.width, y:f;
}
;
    break;
    default: e= {
    x: i.x, y:i.y;
}
}var p=c?q(c):null;
    if(null!=p) {
    var x="y"===p?"height": "width";
    switch(u) {
    case h: e[p]=e[p]-(i[x]/2-a[x]/2);
    break;
    case d: e[p]=e[p]+(i[x]/2-a[x]/2);
}
}return e;
}function bt(t, e) {
    void 0===e&&(e= {
}
);
    var i=e, a=i.placement, r=void 0===a?t.placement: a, l=i.boundary, h=void 0===l?u:l, d=i.rootBoundary, x=void 0===d?g:d, m=i.elementContext, b=void 0===m?f:m, v=i.altBoundary, y=void 0!==v&&v, w=i.padding, k=void 0===w?0:w, A=Z("number"!=typeof k?k:K(k, c)), C=b===f?p:f, S=t.rects.popper, E=t.elements[y?C:b], L=xt(P(E)?E:E.contextElement||V(t.elements.popper), h, x), _=X(t.elements.reference), M=mt( {
    reference: _, element:S, strategy:"absolute", placement:r;
}
), T=ft(Object.assign( {
}
, S, M)), D=b===f?T:_, I= {
    top: L.top-D.top+A.top, bottom:D.bottom-L.bottom+A.bottom, left:L.left-D.left+A.left, right:D.right-L.right+A.right;
}
, O=t.modifiersData.offset;
    if(b===f&&O) {
    var z=O[r];
    Object.keys(I).forEach((function(t) {
    var e=[o, n].indexOf(t)>=0?1: -1, i=[s, n].indexOf(t)>=0?"y":"x";
    I[t]+=z[i]*e;
}
));
}return I;
}var vt= {
    name: "flip", enabled:!0, phase:"main", fn:function(t) {
    var e=t.state, i=t.options, a=t.name;
    if(!e.modifiersData[a]._skip) {
    for(var d=i.mainAxis, u=void 0===d||d, g=i.altAxis, f=void 0===g||g, p=i.fallbackPlacements, b=i.padding, v=i.boundary, y=i.rootBoundary, w=i.altBoundary, k=i.flipVariations, A=void 0===k||k, C=i.allowedAutoPlacements, S=e.options.placement, E=z(S), L=p||(E===S||!A?[ot(S)]: function(t) {
    if(z(t)===l)return[];
    var e=ot(t);
    return[lt(t), e, lt(e)];
}
(S)), _=[S].concat(L).reduce((function(t, i) {
    return t.concat(z(i)===l?function(t, e) {
    void 0===e&&(e= {
}
);
    var i=e, a=i.placement, s=i.boundary, n=i.rootBoundary, o=i.padding, r=i.flipVariations, l=i.allowedAutoPlacements, h=void 0===l?m: l, d=Q(a), u=d?r?x:x.filter((function(t) {
    return Q(t)===d;
}
)): c, g=u.filter((function(t) {
    return h.indexOf(t)>=0;
}
));
    0===g.length&&(g=u);
    var f=g.reduce((function(e, i) {
    return e[i]=bt(t,  {
    placement: i, boundary:s, rootBoundary:n, padding:o;
}
)[z(i)], e;
}),  {
}
);
    return Object.keys(f).sort((function(t, e) {
    return f[t]-f[e];
}
));
}(e,  {
    placement: i, boundary:v, rootBoundary:y, padding:b, flipVariations:A, allowedAutoPlacements:C;
}
):i);
}), []), M=e.rects.reference, T=e.rects.popper, P=new Map, D=!0, I=_[0], O=0;
    O<_.length;
    O++) {
    var Y=_[O], N=z(Y), F=Q(Y)===h, X=[s, n].indexOf(N)>=0, H=X?"width": "height", R=bt(e,  {
    placement: Y, boundary:v, rootBoundary:y, altBoundary:w, padding:b;
}
), W=X?F?o:r:F?n:s;
    M[H]>T[H]&&(W=ot(W));
    var B=ot(W), V=[];
    if(u&&V.push(R[N]<=0), f&&V.push(R[W]<=0, R[B]<=0), V.every((function(t) {
    return t;
}
))) {
    I=Y, D=!1;
    break;
}
P.set(Y, V);
}if(D)for(var j=function(t) {
    var e=_.find((function(e) {
    var i=P.get(e);
    if(i)return i.slice(0, t).every((function(t) {
    return t;
}
));
}));
    if(e)return I=e, "break"}
, G=A?3: 1;
    G>0;
    G--) {
    if("break"===j(G))break;
}
e.placement!==I&&(e.modifiersData[a]._skip=!0, e.placement=I, e.reset=!0);
}}, requiresIfExists: ["offset"], data: {
    _skip: !1;
}
};
    function yt(t, e, i) {
    return void 0===i&&(i= {
    x: 0, y:0;
}
),  {
    top: t.top-e.height-i.y, right:t.right-e.width+i.x, bottom:t.bottom-e.height+i.y, left:t.left-e.width-i.x;
}
}function wt(t) {
    return[s, o, n, r].some((function(e) {
    return t[e]>=0;
}
));
}var kt= {
    name: "hide", enabled:!0, phase:"main", requiresIfExists:["preventOverflow"], fn:function(t) {
    var e=t.state, i=t.name, a=e.rects.reference, s=e.rects.popper, n=e.modifiersData.preventOverflow, o=bt(e,  {
    elementContext: "reference"}
), r=bt(e,  {
    altBoundary: !0;
}
), l=yt(o, a), c=yt(r, s, n), h=wt(l), d=wt(c);
    e.modifiersData[i]= {
    referenceClippingOffsets: l, popperEscapeOffsets:c, isReferenceHidden:h, hasPopperEscaped:d;
}
, e.attributes.popper=Object.assign( {
}
, e.attributes.popper,  {
    "data-popper-reference-hidden": h, "data-popper-escaped":d;
}
);
}};
    var At= {
    name: "offset", enabled:!0, phase:"main", requires:["popperOffsets"], fn:function(t) {
    var e=t.state, i=t.options, a=t.name, n=i.offset, l=void 0===n?[0, 0]: n, c=m.reduce((function(t, i) {
    return t[i]=function(t, e, i) {
    var a=z(t), n=[r, s].indexOf(a)>=0?-1: 1, l="function"==typeof i?i(Object.assign( {
}
, e,  {
    placement: t;
}
)):i, c=l[0], h=l[1];
    return c=c||0, h=(h||0)*n, [r, o].indexOf(a)>=0? {
    x: h, y:c;
}
: {
    x: c, y:h;
}
}(i, e.rects, l), t;
}),  {
}
), h=c[e.placement], d=h.x, u=h.y;
    null!=e.modifiersData.popperOffsets&&(e.modifiersData.popperOffsets.x+=d, e.modifiersData.popperOffsets.y+=u), e.modifiersData[a]=c;
}
};
    var Ct= {
    name: "popperOffsets", enabled:!0, phase:"read", fn:function(t) {
    var e=t.state, i=t.name;
    e.modifiersData[i]=mt( {
    reference: e.rects.reference, element:e.rects.popper, strategy:"absolute", placement:e.placement;
}
);
}, data: {
}
}
;
    var St= {
    name: "preventOverflow", enabled:!0, phase:"main", fn:function(t) {
    var e=t.state, i=t.options, a=t.name, l=i.mainAxis, c=void 0===l||l, d=i.altAxis, u=void 0!==d&&d, g=i.boundary, f=i.rootBoundary, p=i.altBoundary, x=i.padding, m=i.tether, b=void 0===m||m, v=i.tetherOffset, y=void 0===v?0: v, w=bt(e,  {
    boundary: g, rootBoundary:f, padding:x, altBoundary:p;
}
), k=z(e.placement), A=Q(e.placement), C=!A, S=q(k), E="x"===S?"y":"x", L=e.modifiersData.popperOffsets, _=e.rects.reference, M=e.rects.popper, T="function"==typeof y?y(Object.assign( {
}
, e.rects,  {
    placement: e.placement;
}
)):y, P="number"==typeof T? {
    mainAxis: T, altAxis:T;
}
:Object.assign( {
    mainAxis: 0, altAxis:0;
}
, T), D=e.modifiersData.offset?e.modifiersData.offset[e.placement]:null, I= {
    x: 0, y:0;
}
;
    if(L) {
    if(c) {
    var O, F="y"===S?s: r, X="y"===S?n:o, R="y"===S?"height":"width", W=L[S], B=W+w[F], V=W-w[X], j=b?-M[R]/2:0, G=A===h?_[R]:M[R], Z=A===h?-M[R]:-_[R], K=e.elements.arrow, J=b&&K?H(K): {
    width: 0, height:0;
}
, tt=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding: {
    top: 0, right:0, bottom:0, left:0;
}
, et=tt[F], it=tt[X], at=$(0, _[R], J[R]), st=C?_[R]/2-j-at-et-P.mainAxis:G-at-et-P.mainAxis, nt=C?-_[R]/2+j+at+it+P.mainAxis:Z+at+it+P.mainAxis, ot=e.elements.arrow&&U(e.elements.arrow), rt=ot?"y"===S?ot.clientTop||0:ot.clientLeft||0:0, lt=null!=(O=null==D?void 0:D[S])?O:0, ct=W+nt-lt, ht=$(b?N(B, W+st-lt-rt):B, W, b?Y(V, ct):V);
    L[S]=ht, I[S]=ht-W;
}
if(u) {
    var dt, ut="x"===S?s: r, gt="x"===S?n:o, ft=L[E], pt="y"===E?"height":"width", xt=ft+w[ut], mt=ft-w[gt], vt=-1!==[s, r].indexOf(k), yt=null!=(dt=null==D?void 0:D[E])?dt:0, wt=vt?xt:ft-_[pt]-M[pt]-yt+P.altAxis, kt=vt?ft+_[pt]+M[pt]-yt-P.altAxis:mt, At=b&&vt?function(t, e, i) {
    var a=$(t, e, i);
    return a>i?i: a;
}
(wt, ft, kt):$(b?wt:xt, ft, b?kt:mt);
    L[E]=At, I[E]=At-ft;
}
e.modifiersData[a]=I;
}}, requiresIfExists: ["offset"];
};
    function Et(t, e, i) {
    void 0===i&&(i=!1);
    var a, s, n=D(e), o=D(e)&&function(t) {
    var e=t.getBoundingClientRect(), i=F(e.width)/t.offsetWidth||1, a=F(e.height)/t.offsetHeight||1;
    return 1!==i||1!==a;
}
(e), r=V(e), l=X(t, o), c= {
    scrollLeft: 0, scrollTop:0;
}
, h= {
    x: 0, y:0;
}
;
    return(n||!n&&!i)&&(("body"!==M(e)||dt(r))&&(c=(a=e)!==T(a)&&D(a)? {
    scrollLeft: (s=a).scrollLeft, scrollTop:s.scrollTop;
}
:ct(a)), D(e)?((h=X(e, !0)).x+=e.clientLeft, h.y+=e.clientTop):r&&(h.x=ht(r))),  {
    x: l.left+c.scrollLeft-h.x, y:l.top+c.scrollTop-h.y, width:l.width, height:l.height;
}
}function Lt(t) {
    var e=new Map, i=new Set, a=[];
    function s(t) {
    i.add(t.name), [].concat(t.requires||[], t.requiresIfExists||[]).forEach((function(t) {
    if(!i.has(t)) {
    var a=e.get(t);
    a&&s(a);
}
})), a.push(t);
}return t.forEach((function(t) {
    e.set(t.name, t);
}
)), t.forEach((function(t) {
    i.has(t.name)||s(t);
}
)), a;
}var _t= {
    placement: "bottom", modifiers:[], strategy:"absolute"}
;
    function Mt() {
    for(var t=arguments.length, e=new Array(t), i=0;
    i<t;
    i++)e[i]=arguments[i];
    return!e.some((function(t) {
    return!(t&&"function"==typeof t.getBoundingClientRect);
}
));
}function Tt(t) {
    void 0===t&&(t= {
}
);
    var e=t, i=e.defaultModifiers, a=void 0===i?[]: i, s=e.defaultOptions, n=void 0===s?_t:s;
    return function(t, e, i) {
    void 0===i&&(i=n);
    var s, o, r= {
    placement: "bottom", orderedModifiers:[], options:Object.assign( {
}
, _t, n), modifiersData: {
}
, elements: {
    reference: t, popper:e;
}
, attributes: {
}
, styles: {
}
}
, l=[], c=!1, h= {
    state: r, setOptions:function(i) {
    var s="function"==typeof i?i(r.options): i;
    d(), r.options=Object.assign( {
}
, n, r.options, s), r.scrollParents= {
    reference: P(t)?gt(t):t.contextElement?gt(t.contextElement):[], popper:gt(e);
}
;
    var o=function(t) {
    var e=Lt(t);
    return L.reduce((function(t, i) {
    return t.concat(e.filter((function(t) {
    return t.phase===i;
}
)));
}), []);
}(function(t) {
    var e=t.reduce((function(t, e) {
    var i=t[e.name];
    return t[e.name]=i?Object.assign( {
}
, i, e,  {
    options: Object.assign( {
}
, i.options, e.options), data:Object.assign( {
}
, i.data, e.data);
}
):e, t;
}),  {
}
);
    return Object.keys(e).map((function(t) {
    return e[t];
}
));
}([].concat(a, r.options.modifiers)));
    return r.orderedModifiers=o.filter((function(t) {
    return t.enabled;
}
)), r.orderedModifiers.forEach((function(t) {
    var e=t.name, i=t.options, a=void 0===i? {
}
: i, s=t.effect;
    if("function"==typeof s) {
    var n=s( {
    state: r, name:e, instance:h, options:a;
}
), o=function() {
}
;
    l.push(n||o);
}
})), h.update();
}, forceUpdate: function() {
    if(!c) {
    var t=r.elements, e=t.reference, i=t.popper;
    if(Mt(e, i)) {
    r.rects= {
    reference: Et(e, U(i), "fixed"===r.options.strategy), popper:H(i);
}
, r.reset=!1, r.placement=r.options.placement, r.orderedModifiers.forEach((function(t) {
    return r.modifiersData[t.name]=Object.assign( {
}
, t.data);
}
));
    for(var a=0;
    a<r.orderedModifiers.length;
    a++)if(!0!==r.reset) {
    var s=r.orderedModifiers[a], n=s.fn, o=s.options, l=void 0===o? {
}
: o, d=s.name;
    "function"==typeof n&&(r=n( {
    state: r, options:l, name:d, instance:h;
}
)||r);
}else r.reset=!1, a=-1;
}}}, update:(s=function() {
    return new Promise((function(t) {
    h.forceUpdate(), t(r);
}
));
}, function() {
    return o||(o=new Promise((function(t) {
    Promise.resolve().then((function() {
    o=void 0, t(s());
}
));
}))), o;
}), destroy: function() {
    d(), c=!0;
}
};
    if(!Mt(t, e))return h;
    function d() {
    l.forEach((function(t) {
    return t();
}
)), l=[];
}return h.setOptions(i).then((function(t) {
    !c&&i.onFirstUpdate&&i.onFirstUpdate(t);
}
)), h;
}}var Pt=Tt(), Dt=Tt( {
    defaultModifiers: [st, Ct, it, O, At, vt, St, J, kt];
}
), It=Tt( {
    defaultModifiers: [st, Ct, it, O];
}
);
    e(i, a), e(i, _);
    const Ot="transitionend", zt=t=> {
    let e=t.getAttribute("data-bs-target");
    if(!e||"#"===e) {
    let i=t.getAttribute("href");
    if(!i||!i.includes("#")&&!i.startsWith("."))return null;
    i.includes("#")&&!i.startsWith("#")&&(i=`#$ {
    i.split("#")[1];
}
`), e=i&&"#"!==i?i.trim(): null;
}return e;
}, Yt=t=> {
    const e=zt(t);
    return e&&document.querySelector(e)?e: null;
}
, Nt=t=> {
    const e=zt(t);
    return e?document.querySelector(e): null;
}
, Ft=t=> {
    t.dispatchEvent(new Event(Ot));
}
, Xt=t=>!(!t||"object"!=typeof t)&&(void 0!==t.jquery&&(t=t[0]), void 0!==t.nodeType), Ht=t=>Xt(t)?t.jquery?t[0]: t:"string"==typeof t&&t.length>0?document.querySelector(t):null, Rt=(t, e, i)=> {
    Object.keys(i).forEach((a=> {
    const s=i[a], n=e[a], o=n&&Xt(n)?"element": null==(r=n)?`$ {
    r;
}
`:  {
}
.toString.call(r).match(/\s([a-z]+)/i)[1].toLowerCase();
    var r;
    if(!new RegExp(s).test(o))throw new TypeError(`$ {
    t.toUpperCase();
}
:  Option "$ {
    a;
}
" provided type "$ {
    o;
}
" but expected type "$ {
    s;
}
".`);
}));
}, Wt=t=>!(!Xt(t)||0===t.getClientRects().length)&&"visible"===getComputedStyle(t).getPropertyValue("visibility"), Bt=t=>!t||t.nodeType!==Node.ELEMENT_NODE||(!!t.classList.contains("disabled")||(void 0!==t.disabled?t.disabled: t.hasAttribute("disabled")&&"false"!==t.getAttribute("disabled"))), Vt=t=> {
    if(!document.documentElement.attachShadow)return null;
    if("function"==typeof t.getRootNode) {
    const e=t.getRootNode();
    return e instanceof ShadowRoot?e: null;
}
return t instanceof ShadowRoot?t:t.parentNode?Vt(t.parentNode):null;
}, jt=()=> {
}
, Gt=t=> {
    t.offsetHeight;
}
, Ut=()=> {
    const {
    jQuery: t;
}
=window;
    return t&&!document.body.hasAttribute("data-bs-no-jquery")?t: null;
}
, qt=[], $t=()=>"rtl"===document.documentElement.dir, Zt=t=> {
    var e;
    e=()=> {
    const e=Ut();
    if(e) {
    const i=t.NAME, a=e.fn[i];
    e.fn[i]=t.jQueryInterface, e.fn[i].Constructor=t, e.fn[i].noConflict=()=>(e.fn[i]=a, t.jQueryInterface);
}
}, "loading"===document.readyState?(qt.length||document.addEventListener("DOMContentLoaded", (()=> {
    qt.forEach((t=>t()));
}
)), qt.push(e)): e();
}, Kt=t=> {
    "function"==typeof t&&t();
}
, Jt=(t, e, i=!0)=> {
    if(!i)return void Kt(t);
    const a=(t=> {
    if(!t)return 0;
    let {
    transitionDuration: e, transitionDelay:i;
}
=window.getComputedStyle(t);
    const a=Number.parseFloat(e), s=Number.parseFloat(i);
    return a||s?(e=e.split(", ")[0], i=i.split(", ")[0], 1e3*(Number.parseFloat(e)+Number.parseFloat(i))): 0;
}
)(e)+5;
    let s=!1;
    const n=( {
    target: i;
}
)=> {
    i===e&&(s=!0, e.removeEventListener(Ot, n), Kt(t));
}
;
    e.addEventListener(Ot, n), setTimeout((()=> {
    s||Ft(e);
}
), a);
}, Qt=(t, e, i, a)=> {
    let s=t.indexOf(e);
    if(-1===s)return t[!i&&a?t.length-1: 0];
    const n=t.length;
    return s+=i?1: -1, a&&(s=(s+n)%n), t[Math.max(0, Math.min(s, n-1))];
}
, te=/[^.]*(?=\..*)\.|.*/, ee=/\..*/, ie=/::\d+$/, ae= {
}
;
    let se=1;
    const ne= {
    mouseenter: "mouseover", mouseleave:"mouseout"}
, oe=/^(mouseenter|mouseleave)/i, re=new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);
    function le(t, e) {
    return e&&`$ {
    e;
}
: :$ {
    se++}
`||t.uidEvent||se++}function ce(t) {
    const e=le(t);
    return t.uidEvent=e, ae[e]=ae[e]|| {
}
, ae[e];
}
function he(t, e, i=null) {
    const a=Object.keys(t);
    for(let s=0, n=a.length;
    s<n;
    s++) {
    const n=t[a[s]];
    if(n.originalHandler===e&&n.delegationSelector===i)return n;
}
return null;
}function de(t, e, i) {
    const a="string"==typeof e, s=a?i: e;
    let n=fe(t);
    return re.has(n)||(n=t), [a, s, n];
}
function ue(t, e, i, a, s) {
    if("string"!=typeof e||!t)return;
    if(i||(i=a, a=null), oe.test(e)) {
    const t=t=>function(e) {
    if(!e.relatedTarget||e.relatedTarget!==e.delegateTarget&&!e.delegateTarget.contains(e.relatedTarget))return t.call(this, e);
}
;
    a?a=t(a): i=t(i);
}
const[n, o, r]=de(e, i, a), l=ce(t), c=l[r]||(l[r]= {
}
), h=he(c, o, n?i:null);
    if(h)return void(h.oneOff=h.oneOff&&s);
    const d=le(o, e.replace(te, "")), u=n?function(t, e, i) {
    return function a(s) {
    const n=t.querySelectorAll(e);
    for(let {
    target: o;
}
=s;
    o&&o!==this;
    o=o.parentNode)for(let r=n.length;
    r--;
    )if(n[r]===o)return s.delegateTarget=o, a.oneOff&&pe.off(t, s.type, e, i), i.apply(o, [s]);
    return null;
}
}(t, i, a): function(t, e) {
    return function i(a) {
    return a.delegateTarget=t, i.oneOff&&pe.off(t, a.type, e), e.apply(t, [a]);
}
}(t, i);
    u.delegationSelector=n?i: null, u.originalHandler=o, u.oneOff=s, u.uidEvent=d, c[d]=u, t.addEventListener(r, u, n);
}
function ge(t, e, i, a, s) {
    const n=he(e[i], a, s);
    n&&(t.removeEventListener(i, n, Boolean(s)), delete e[i][n.uidEvent]);
}
function fe(t) {
    return t=t.replace(ee, ""), ne[t]||t;
}
const pe= {
    on(t, e, i, a) {
    ue(t, e, i, a, !1);
}
, one(t, e, i, a) {
    ue(t, e, i, a, !0);
}
, off(t, e, i, a) {
    if("string"!=typeof e||!t)return;
    const[s, n, o]=de(e, i, a), r=o!==e, l=ce(t), c=e.startsWith(".");
    if(void 0!==n) {
    if(!l||!l[o])return;
    return void ge(t, l, o, n, s?i: null);
}
c&&Object.keys(l).forEach((i=> {
    !function(t, e, i, a) {
    const s=e[i]|| {
}
;
    Object.keys(s).forEach((n=> {
    if(n.includes(a)) {
    const a=s[n];
    ge(t, e, i, a.originalHandler, a.delegationSelector);
}
}));
}(t, l, i, e.slice(1));
}));
    const h=l[o]|| {
}
;
    Object.keys(h).forEach((i=> {
    const a=i.replace(ie, "");
    if(!r||e.includes(a)) {
    const e=h[i];
    ge(t, l, o, e.originalHandler, e.delegationSelector);
}
}));
}, trigger(t, e, i) {
    if("string"!=typeof e||!t)return null;
    const a=Ut(), s=fe(e), n=e!==s, o=re.has(s);
    let r, l=!0, c=!0, h=!1, d=null;
    return n&&a&&(r=a.Event(e, i), a(t).trigger(r), l=!r.isPropagationStopped(), c=!r.isImmediatePropagationStopped(), h=r.isDefaultPrevented()), o?(d=document.createEvent("HTMLEvents"), d.initEvent(s, l, !0)): d=new CustomEvent(e,  {
    bubbles: l, cancelable:!0;
}
), void 0!==i&&Object.keys(i).forEach((t=> {
    Object.defineProperty(d, t,  {
    get: ()=>i[t];
}
);
})), h&&d.preventDefault(), c&&t.dispatchEvent(d), d.defaultPrevented&&void 0!==r&&r.preventDefault(), d;
}}, xe=new Map, me= {
    set(t, e, i) {
    xe.has(t)||xe.set(t, new Map);
    const a=xe.get(t);
    a.has(e)||0===a.size?a.set(e, i): console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: $ {
    Array.from(a.keys())[0];
}
.`);
}, get: (t, e)=>xe.has(t)&&xe.get(t).get(e)||null, remove(t, e) {
    if(!xe.has(t))return;
    const i=xe.get(t);
    i.delete(e), 0===i.size&&xe.delete(t);
}
};
    class be {
    dispose() {
    me.remove(this._element, this.constructor.DATA_KEY), pe.off(this._element, this.constructor.EVENT_KEY), Object.getOwnPropertyNames(this).forEach((t=> {
    this[t]=null;
}
));
}_queueCallback(t, e, i=!0) {
    Jt(t, e, i);
}
static getInstance(t) {
    return me.get(Ht(t), this.DATA_KEY);
}
static getOrCreateInstance(t, e= {
}
) {
    return this.getInstance(t)||new this(t, "object"==typeof e?e: null);
}
static get VERSION() {
    return"5.1.3"}
static get NAME() {
    throw new Error('You have to implement the static method "NAME",  for each component!');
}
static get DATA_KEY() {
    return`bs.$ {
    this.NAME;
}
`;
}static get EVENT_KEY() {
    return`.$ {
    this.DATA_KEY;
}
`;
}constructor(t) {
    (t=Ht(t))&&(this._element=t, me.set(this._element, this.constructor.DATA_KEY, this));
}
}const ve=(t, e="hide")=> {
    const i=`click.dismiss$ {
    t.EVENT_KEY;
}
`, a=t.NAME;
    pe.on(document, i, `[data-bs-dismiss="$ {
    a;
}
"]`, (function(i) {
    if(["A", "AREA"].includes(this.tagName)&&i.preventDefault(), Bt(this))return;
    const s=Nt(this)||this.closest(`.$ {
    a;
}
`);
    t.getOrCreateInstance(s)[e]();
}
));
};
    class ye extends be {
    static get NAME() {
    return"alert"}
close() {
    if(pe.trigger(this._element, "close.bs.alert").defaultPrevented)return;
    this._element.classList.remove("show");
    const t=this._element.classList.contains("fade");
    this._queueCallback((()=>this._destroyElement()), this._element, t);
}
_destroyElement() {
    this._element.remove(), pe.trigger(this._element, "closed.bs.alert"), this.dispose();
}
static jQueryInterface(t) {
    return this.each((function() {
    const e=ye.getOrCreateInstance(this);
    if("string"==typeof t) {
    if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "$ {
    t;
}
"`);
    e[t](this);
}
}));
}}ve(ye, "close"), Zt(ye);
    const we='[data-bs-toggle="button"]';
    class ke extends be {
    static get NAME() {
    return"button"}
toggle() {
    this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"));
}
static jQueryInterface(t) {
    return this.each((function() {
    const e=ke.getOrCreateInstance(this);
    "toggle"===t&&e[t]();
}
));
}}function Ae(t) {
    return"true"===t||"false"!==t&&(t===Number(t).toString()?Number(t): ""===t||"null"===t?null:t);
}
function Ce(t) {
    return t.replace(/[A-Z]/g, (t=>`-$ {
    t.toLowerCase();
}
`));
}pe.on(document, "click.bs.button.data-api", we, (t=> {
    t.preventDefault();
    const e=t.target.closest(we);
    ke.getOrCreateInstance(e).toggle();
}
)), Zt(ke);
    const Se= {
    setDataAttribute(t, e, i) {
    t.setAttribute(`data-bs-$ {
    Ce(e);
}
`, i);
}, removeDataAttribute(t, e) {
    t.removeAttribute(`data-bs-$ {
    Ce(e);
}
`);
}, getDataAttributes(t) {
    if(!t)return {
}
;
    const e= {
}
;
    return Object.keys(t.dataset).filter((t=>t.startsWith("bs"))).forEach((i=> {
    let a=i.replace(/^bs/, "");
    a=a.charAt(0).toLowerCase()+a.slice(1, a.length), e[a]=Ae(t.dataset[i]);
}
)), e;
}, getDataAttribute: (t, e)=>Ae(t.getAttribute(`data-bs-$ {
    Ce(e);
}
`)), offset(t) {
    const e=t.getBoundingClientRect();
    return {
    top: e.top+window.pageYOffset, left:e.left+window.pageXOffset;
}
}, position:t=>( {
    top: t.offsetTop, left:t.offsetLeft;
}
);
}, Ee= {
    find: (t, e=document.documentElement)=>[].concat(...Element.prototype.querySelectorAll.call(e, t)), findOne:(t, e=document.documentElement)=>Element.prototype.querySelector.call(e, t), children:(t, e)=>[].concat(...t.children).filter((t=>t.matches(e))), parents(t, e) {
    const i=[];
    let a=t.parentNode;
    for(;
    a&&a.nodeType===Node.ELEMENT_NODE&&3!==a.nodeType;
    )a.matches(e)&&i.push(a), a=a.parentNode;
    return i;
}
, prev(t, e) {
    let i=t.previousElementSibling;
    for(;
    i;
    ) {
    if(i.matches(e))return[i];
    i=i.previousElementSibling;
}
return[];
}, next(t, e) {
    let i=t.nextElementSibling;
    for(;
    i;
    ) {
    if(i.matches(e))return[i];
    i=i.nextElementSibling;
}
return[];
}, focusableChildren(t) {
    const e=["a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]'].map((t=>`$ {
    t;
}
: not([tabindex^="-"])`)).join(",  ");
    return this.find(e, t).filter((t=>!Bt(t)&&Wt(t)));
}
}, Le="carousel", _e= {
    interval: 5e3, keyboard:!0, slide:!1, pause:"hover", wrap:!0, touch:!0;
}
, Me= {
    interval: "(number|boolean)", keyboard:"boolean", slide:"(boolean|string)", pause:"(string|boolean)", wrap:"boolean", touch:"boolean"}
, Te="next", Pe="prev", De="left", Ie="right", Oe= {
    ArrowLeft: Ie, ArrowRight:De;
}
, ze="slid.bs.carousel", Ye="active", Ne=".active.carousel-item";
    class Fe extends be {
    static get Default() {
    return _e;
}
static get NAME() {
    return Le;
}
next() {
    this._slide(Te);
}
nextWhenVisible() {
    !document.hidden&&Wt(this._element)&&this.next();
}
prev() {
    this._slide(Pe);
}
pause(t) {
    t||(this._isPaused=!0), Ee.findOne(".carousel-item-next,  .carousel-item-prev", this._element)&&(Ft(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval=null;
}
cycle(t) {
    t||(this._isPaused=!1), this._interval&&(clearInterval(this._interval), this._interval=null), this._config&&this._config.interval&&!this._isPaused&&(this._updateInterval(), this._interval=setInterval((document.visibilityState?this.nextWhenVisible: this.next).bind(this), this._config.interval));
}
to(t) {
    this._activeElement=Ee.findOne(Ne, this._element);
    const e=this._getItemIndex(this._activeElement);
    if(t>this._items.length-1||t<0)return;
    if(this._isSliding)return void pe.one(this._element, ze, (()=>this.to(t)));
    if(e===t)return this.pause(), void this.cycle();
    const i=t>e?Te: Pe;
    this._slide(i, this._items[t]);
}
_getConfig(t) {
    return t= {
    ..._e, ...Se.getDataAttributes(this._element), ..."object"==typeof t?t:  {
}
}
, Rt(Le, t, Me), t;
}_handleSwipe() {
    const t=Math.abs(this.touchDeltaX);
    if(t<=40)return;
    const e=t/this.touchDeltaX;
    this.touchDeltaX=0, e&&this._slide(e>0?Ie: De);
}
_addEventListeners() {
    this._config.keyboard&&pe.on(this._element, "keydown.bs.carousel", (t=>this._keydown(t))), "hover"===this._config.pause&&(pe.on(this._element, "mouseenter.bs.carousel", (t=>this.pause(t))), pe.on(this._element, "mouseleave.bs.carousel", (t=>this.cycle(t)))), this._config.touch&&this._touchSupported&&this._addTouchEventListeners();
}
_addTouchEventListeners() {
    const t=t=>this._pointerEvent&&("pen"===t.pointerType||"touch"===t.pointerType), e=e=> {
    t(e)?this.touchStartX=e.clientX: this._pointerEvent||(this.touchStartX=e.touches[0].clientX);
}
, i=t=> {
    this.touchDeltaX=t.touches&&t.touches.length>1?0: t.touches[0].clientX-this.touchStartX;
}
, a=e=> {
    t(e)&&(this.touchDeltaX=e.clientX-this.touchStartX), this._handleSwipe(), "hover"===this._config.pause&&(this.pause(), this.touchTimeout&&clearTimeout(this.touchTimeout), this.touchTimeout=setTimeout((t=>this.cycle(t)), 500+this._config.interval));
}
;
    Ee.find(".carousel-item img", this._element).forEach((t=> {
    pe.on(t, "dragstart.bs.carousel", (t=>t.preventDefault()));
}
)), this._pointerEvent?(pe.on(this._element, "pointerdown.bs.carousel", (t=>e(t))), pe.on(this._element, "pointerup.bs.carousel", (t=>a(t))), this._element.classList.add("pointer-event")): (pe.on(this._element, "touchstart.bs.carousel", (t=>e(t))), pe.on(this._element, "touchmove.bs.carousel", (t=>i(t))), pe.on(this._element, "touchend.bs.carousel", (t=>a(t))));
}_keydown(t) {
    if(/input|textarea/i.test(t.target.tagName))return;
    const e=Oe[t.key];
    e&&(t.preventDefault(), this._slide(e));
}
_getItemIndex(t) {
    return this._items=t&&t.parentNode?Ee.find(".carousel-item", t.parentNode): [], this._items.indexOf(t);
}
_getItemByOrder(t, e) {
    const i=t===Te;
    return Qt(this._items, e, i, this._config.wrap);
}
_triggerSlideEvent(t, e) {
    const i=this._getItemIndex(t), a=this._getItemIndex(Ee.findOne(Ne, this._element));
    return pe.trigger(this._element, "slide.bs.carousel",  {
    relatedTarget: t, direction:e, from:a, to:i;
}
);
}_setActiveIndicatorElement(t) {
    if(this._indicatorsElement) {
    const e=Ee.findOne(".active", this._indicatorsElement);
    e.classList.remove(Ye), e.removeAttribute("aria-current");
    const i=Ee.find("[data-bs-target]", this._indicatorsElement);
    for(let e=0;
    e<i.length;
    e++)if(Number.parseInt(i[e].getAttribute("data-bs-slide-to"), 10)===this._getItemIndex(t)) {
    i[e].classList.add(Ye), i[e].setAttribute("aria-current", "true");
    break;
}
}}_updateInterval() {
    const t=this._activeElement||Ee.findOne(Ne, this._element);
    if(!t)return;
    const e=Number.parseInt(t.getAttribute("data-bs-interval"), 10);
    e?(this._config.defaultInterval=this._config.defaultInterval||this._config.interval, this._config.interval=e): this._config.interval=this._config.defaultInterval||this._config.interval;
}
_slide(t, e) {
    const i=this._directionToOrder(t), a=Ee.findOne(Ne, this._element), s=this._getItemIndex(a), n=e||this._getItemByOrder(i, a), o=this._getItemIndex(n), r=Boolean(this._interval), l=i===Te, c=l?"carousel-item-start": "carousel-item-end", h=l?"carousel-item-next":"carousel-item-prev", d=this._orderToDirection(i);
    if(n&&n.classList.contains(Ye))return void(this._isSliding=!1);
    if(this._isSliding)return;
    if(this._triggerSlideEvent(n, d).defaultPrevented)return;
    if(!a||!n)return;
    this._isSliding=!0, r&&this.pause(), this._setActiveIndicatorElement(n), this._activeElement=n;
    const u=()=> {
    pe.trigger(this._element, ze,  {
    relatedTarget: n, direction:d, from:s, to:o;
}
);
};
    if(this._element.classList.contains("slide")) {
    n.classList.add(h), Gt(n), a.classList.add(c), n.classList.add(c);
    const t=()=> {
    n.classList.remove(c, h), n.classList.add(Ye), a.classList.remove(Ye, h, c), this._isSliding=!1, setTimeout(u, 0);
}
;
    this._queueCallback(t, a, !0);
}
else a.classList.remove(Ye), n.classList.add(Ye), this._isSliding=!1, u();
    r&&this.cycle();
}
_directionToOrder(t) {
    return[Ie, De].includes(t)?$t()?t===De?Pe: Te:t===De?Te:Pe:t;
}
_orderToDirection(t) {
    return[Te, Pe].includes(t)?$t()?t===Pe?De: Ie:t===Pe?Ie:De:t;
}
static carouselInterface(t, e) {
    const i=Fe.getOrCreateInstance(t, e);
    let {
    _config: a;
}
=i;
    "object"==typeof e&&(a= {
    ...a, ...e;
}
);
    const s="string"==typeof e?e: a.slide;
    if("number"==typeof e)i.to(e);
    else if("string"==typeof s) {
    if(void 0===i[s])throw new TypeError(`No method named "$ {
    s;
}
"`);
    i[s]();
}
else a.interval&&a.ride&&(i.pause(), i.cycle());
}static jQueryInterface(t) {
    return this.each((function() {
    Fe.carouselInterface(this, t);
}
));
}static dataApiClickHandler(t) {
    const e=Nt(this);
    if(!e||!e.classList.contains("carousel"))return;
    const i= {
    ...Se.getDataAttributes(e), ...Se.getDataAttributes(this);
}
, a=this.getAttribute("data-bs-slide-to");
    a&&(i.interval=!1), Fe.carouselInterface(e, i), a&&Fe.getInstance(e).to(a), t.preventDefault();
}
constructor(t, e) {
    super(t), this._items=null, this._interval=null, this._activeElement=null, this._isPaused=!1, this._isSliding=!1, this.touchTimeout=null, this.touchStartX=0, this.touchDeltaX=0, this._config=this._getConfig(e), this._indicatorsElement=Ee.findOne(".carousel-indicators", this._element), this._touchSupported="ontouchstart"in document.documentElement||navigator.maxTouchPoints>0, this._pointerEvent=Boolean(window.PointerEvent), this._addEventListeners();
}
}pe.on(document, "click.bs.carousel.data-api", "[data-bs-slide],  [data-bs-slide-to]", Fe.dataApiClickHandler), pe.on(window, "load.bs.carousel.data-api", (()=> {
    const t=Ee.find('[data-bs-ride="carousel"]');
    for(let e=0, i=t.length;
    e<i;
    e++)Fe.carouselInterface(t[e], Fe.getInstance(t[e]));
}
)), Zt(Fe);
    const Xe="collapse", He="bs.collapse", Re= {
    toggle: !0, parent:null;
}
, We= {
    toggle: "boolean", parent:"(null|element)"}
, Be="show", Ve="collapse", je="collapsing", Ge="collapsed", Ue=":scope .collapse .collapse", qe='[data-bs-toggle="collapse"]';
    class $e extends be {
    static get Default() {
    return Re;
}
static get NAME() {
    return Xe;
}
toggle() {
    this._isShown()?this.hide(): this.show();
}
show() {
    if(this._isTransitioning||this._isShown())return;
    let t, e=[];
    if(this._config.parent) {
    const t=Ee.find(Ue, this._config.parent);
    e=Ee.find(".collapse.show,  .collapse.collapsing", this._config.parent).filter((e=>!t.includes(e)));
}
const i=Ee.findOne(this._selector);
    if(e.length) {
    const a=e.find((t=>i!==t));
    if(t=a?$e.getInstance(a): null, t&&t._isTransitioning)return;
}
if(pe.trigger(this._element, "show.bs.collapse").defaultPrevented)return;
    e.forEach((e=> {
    i!==e&&$e.getOrCreateInstance(e,  {
    toggle: !1;
}
).hide(), t||me.set(e, He, null);
}));
    const a=this._getDimension();
    this._element.classList.remove(Ve), this._element.classList.add(je), this._element.style[a]=0, this._addAriaAndCollapsedClass(this._triggerArray, !0), this._isTransitioning=!0;
    const s=`scroll$ {
    a[0].toUpperCase()+a.slice(1);
}
`;
    this._queueCallback((()=> {
    this._isTransitioning=!1, this._element.classList.remove(je), this._element.classList.add(Ve, Be), this._element.style[a]="", pe.trigger(this._element, "shown.bs.collapse");
}
), this._element, !0), this._element.style[a]=`$ {
    this._element[s];
}
px`;
}hide() {
    if(this._isTransitioning||!this._isShown())return;
    if(pe.trigger(this._element, "hide.bs.collapse").defaultPrevented)return;
    const t=this._getDimension();
    this._element.style[t]=`$ {
    this._element.getBoundingClientRect()[t];
}
px`, Gt(this._element), this._element.classList.add(je), this._element.classList.remove(Ve, Be);
    const e=this._triggerArray.length;
    for(let t=0;
    t<e;
    t++) {
    const e=this._triggerArray[t], i=Nt(e);
    i&&!this._isShown(i)&&this._addAriaAndCollapsedClass([e], !1);
}
this._isTransitioning=!0;
    this._element.style[t]="", this._queueCallback((()=> {
    this._isTransitioning=!1, this._element.classList.remove(je), this._element.classList.add(Ve), pe.trigger(this._element, "hidden.bs.collapse");
}
), this._element, !0);
}_isShown(t=this._element) {
    return t.classList.contains(Be);
}
_getConfig(t) {
    return(t= {
    ...Re, ...Se.getDataAttributes(this._element), ...t;
}
).toggle=Boolean(t.toggle), t.parent=Ht(t.parent), Rt(Xe, t, We), t;
}_getDimension() {
    return this._element.classList.contains("collapse-horizontal")?"width": "height"}
_initializeChildren() {
    if(!this._config.parent)return;
    const t=Ee.find(Ue, this._config.parent);
    Ee.find(qe, this._config.parent).filter((e=>!t.includes(e))).forEach((t=> {
    const e=Nt(t);
    e&&this._addAriaAndCollapsedClass([t], this._isShown(e));
}
));
}_addAriaAndCollapsedClass(t, e) {
    t.length&&t.forEach((t=> {
    e?t.classList.remove(Ge): t.classList.add(Ge), t.setAttribute("aria-expanded", e);
}
));
}static jQueryInterface(t) {
    return this.each((function() {
    const e= {
}
;
    "string"==typeof t&&/show|hide/.test(t)&&(e.toggle=!1);
    const i=$e.getOrCreateInstance(this, e);
    if("string"==typeof t) {
    if(void 0===i[t])throw new TypeError(`No method named "$ {
    t;
}
"`);
    i[t]();
}
}));
}constructor(t, e) {
    super(t), this._isTransitioning=!1, this._config=this._getConfig(e), this._triggerArray=[];
    const i=Ee.find(qe);
    for(let t=0, e=i.length;
    t<e;
    t++) {
    const e=i[t], a=Yt(e), s=Ee.find(a).filter((t=>t===this._element));
    null!==a&&s.length&&(this._selector=a, this._triggerArray.push(e));
}
this._initializeChildren(), this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()), this._config.toggle&&this.toggle();
}}pe.on(document, "click.bs.collapse.data-api", qe, (function(t) {
    ("A"===t.target.tagName||t.delegateTarget&&"A"===t.delegateTarget.tagName)&&t.preventDefault();
    const e=Yt(this);
    Ee.find(e).forEach((t=> {
    $e.getOrCreateInstance(t,  {
    toggle: !1;
}
).toggle();
}));
})), Zt($e);
    const Ze="dropdown", Ke="Escape", Je="Space", Qe="ArrowUp", ti="ArrowDown", ei=new RegExp("ArrowUp|ArrowDown|Escape"), ii="click.bs.dropdown.data-api", ai="keydown.bs.dropdown.data-api", si="show", ni='[data-bs-toggle="dropdown"]', oi=".dropdown-menu", ri=$t()?"top-end": "top-start", li=$t()?"top-start":"top-end", ci=$t()?"bottom-end":"bottom-start", hi=$t()?"bottom-start":"bottom-end", di=$t()?"left-start":"right-start", ui=$t()?"right-start":"left-start", gi= {
    offset: [0, 2], boundary:"clippingParents", reference:"toggle", display:"dynamic", popperConfig:null, autoClose:!0;
}
, fi= {
    offset: "(array|string|function)", boundary:"(string|element)", reference:"(string|element|object)", display:"string", popperConfig:"(null|object|function)", autoClose:"(boolean|string)"}
;
    class pi extends be {
    static get Default() {
    return gi;
}
static get DefaultType() {
    return fi;
}
static get NAME() {
    return Ze;
}
toggle() {
    return this._isShown()?this.hide(): this.show();
}
show() {
    if(Bt(this._element)||this._isShown(this._menu))return;
    const t= {
    relatedTarget: this._element;
}
;
    if(pe.trigger(this._element, "show.bs.dropdown", t).defaultPrevented)return;
    const e=pi.getParentFromElement(this._element);
    this._inNavbar?Se.setDataAttribute(this._menu, "popper", "none"): this._createPopper(e), "ontouchstart"in document.documentElement&&!e.closest(".navbar-nav")&&[].concat(...document.body.children).forEach((t=>pe.on(t, "mouseover", jt))), this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.add(si), this._element.classList.add(si), pe.trigger(this._element, "shown.bs.dropdown", t);
}
hide() {
    if(Bt(this._element)||!this._isShown(this._menu))return;
    const t= {
    relatedTarget: this._element;
}
;
    this._completeHide(t);
}
dispose() {
    this._popper&&this._popper.destroy(), super.dispose();
}
update() {
    this._inNavbar=this._detectNavbar(), this._popper&&this._popper.update();
}
_completeHide(t) {
    pe.trigger(this._element, "hide.bs.dropdown", t).defaultPrevented||("ontouchstart"in document.documentElement&&[].concat(...document.body.children).forEach((t=>pe.off(t, "mouseover", jt))), this._popper&&this._popper.destroy(), this._menu.classList.remove(si), this._element.classList.remove(si), this._element.setAttribute("aria-expanded", "false"), Se.removeDataAttribute(this._menu, "popper"), pe.trigger(this._element, "hidden.bs.dropdown", t));
}
_getConfig(t) {
    if(t= {
    ...this.constructor.Default, ...Se.getDataAttributes(this._element), ...t;
}
, Rt(Ze, t, this.constructor.DefaultType), "object"==typeof t.reference&&!Xt(t.reference)&&"function"!=typeof t.reference.getBoundingClientRect)throw new TypeError(`$ {
    Ze.toUpperCase();
}
:  Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
    return t;
}
_createPopper(t) {
    if(void 0===i)throw new TypeError("Bootstrap's dropdowns require Popper (https: //popper.js.org)");
    let e=this._element;
    "parent"===this._config.reference?e=t: Xt(this._config.reference)?e=Ht(this._config.reference):"object"==typeof this._config.reference&&(e=this._config.reference);
    const a=this._getPopperConfig(), s=a.modifiers.find((t=>"applyStyles"===t.name&&!1===t.enabled));
    this._popper=i.createPopper(e, this._menu, a), s&&Se.setDataAttribute(this._menu, "popper", "static");
}
_isShown(t=this._element) {
    return t.classList.contains(si);
}
_getMenuElement() {
    return Ee.next(this._element, oi)[0];
}
_getPlacement() {
    const t=this._element.parentNode;
    if(t.classList.contains("dropend"))return di;
    if(t.classList.contains("dropstart"))return ui;
    const e="end"===getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
    return t.classList.contains("dropup")?e?li: ri:e?hi:ci;
}
_detectNavbar() {
    return null!==this._element.closest(".navbar");
}
_getOffset() {
    const {
    offset: t;
}
=this._config;
    return"string"==typeof t?t.split(", ").map((t=>Number.parseInt(t, 10))): "function"==typeof t?e=>t(e, this._element):t;
}
_getPopperConfig() {
    const t= {
    placement: this._getPlacement(), modifiers:[ {
    name: "preventOverflow", options: {
    boundary: this._config.boundary;
}
},  {
    name: "offset", options: {
    offset: this._getOffset();
}
}];
};
    return"static"===this._config.display&&(t.modifiers=[ {
    name: "applyStyles", enabled:!1;
}
]),  {
    ...t, ..."function"==typeof this._config.popperConfig?this._config.popperConfig(t): this._config.popperConfig;
}
}_selectMenuItem( {
    key: t, target:e;
}
) {
    const i=Ee.find(".dropdown-menu .dropdown-item: not(.disabled):not(:disabled)", this._menu).filter(Wt);
    i.length&&Qt(i, e, t===ti, !i.includes(e)).focus();
}
static jQueryInterface(t) {
    return this.each((function() {
    const e=pi.getOrCreateInstance(this, t);
    if("string"==typeof t) {
    if(void 0===e[t])throw new TypeError(`No method named "$ {
    t;
}
"`);
    e[t]();
}
}));
}static clearMenus(t) {
    if(t&&(2===t.button||"keyup"===t.type&&"Tab"!==t.key))return;
    const e=Ee.find(ni);
    for(let i=0, a=e.length;
    i<a;
    i++) {
    const a=pi.getInstance(e[i]);
    if(!a||!1===a._config.autoClose)continue;
    if(!a._isShown())continue;
    const s= {
    relatedTarget: a._element;
}
;
    if(t) {
    const e=t.composedPath(), i=e.includes(a._menu);
    if(e.includes(a._element)||"inside"===a._config.autoClose&&!i||"outside"===a._config.autoClose&&i)continue;
    if(a._menu.contains(t.target)&&("keyup"===t.type&&"Tab"===t.key||/input|select|option|textarea|form/i.test(t.target.tagName)))continue;
    "click"===t.type&&(s.clickEvent=t);
}
a._completeHide(s);
}}static getParentFromElement(t) {
    return Nt(t)||t.parentNode;
}
static dataApiKeydownHandler(t) {
    if(/input|textarea/i.test(t.target.tagName)?t.key===Je||t.key!==Ke&&(t.key!==ti&&t.key!==Qe||t.target.closest(oi)): !ei.test(t.key))return;
    const e=this.classList.contains(si);
    if(!e&&t.key===Ke)return;
    if(t.preventDefault(), t.stopPropagation(), Bt(this))return;
    const i=this.matches(ni)?this: Ee.prev(this, ni)[0], a=pi.getOrCreateInstance(i);
    if(t.key!==Ke)return t.key===Qe||t.key===ti?(e||a.show(), void a._selectMenuItem(t)): void(e&&t.key!==Je||pi.clearMenus());
    a.hide();
}
constructor(t, e) {
    super(t), this._popper=null, this._config=this._getConfig(e), this._menu=this._getMenuElement(), this._inNavbar=this._detectNavbar();
}
}pe.on(document, ai, ni, pi.dataApiKeydownHandler), pe.on(document, ai, oi, pi.dataApiKeydownHandler), pe.on(document, ii, pi.clearMenus), pe.on(document, "keyup.bs.dropdown.data-api", pi.clearMenus), pe.on(document, ii, ni, (function(t) {
    t.preventDefault(), pi.getOrCreateInstance(this).toggle();
}
)), Zt(pi);
    const xi=".fixed-top,  .fixed-bottom,  .is-fixed,  .sticky-top", mi=".sticky-top";
    class bi {
    getWidth() {
    const t=document.documentElement.clientWidth;
    return Math.abs(window.innerWidth-t);
}
hide() {
    const t=this.getWidth();
    this._disableOverFlow(), this._setElementAttributes(this._element, "paddingRight", (e=>e+t)), this._setElementAttributes(xi, "paddingRight", (e=>e+t)), this._setElementAttributes(mi, "marginRight", (e=>e-t));
}
_disableOverFlow() {
    this._saveInitialAttribute(this._element, "overflow"), this._element.style.overflow="hidden"}
_setElementAttributes(t, e, i) {
    const a=this.getWidth();
    this._applyManipulationCallback(t, (t=> {
    if(t!==this._element&&window.innerWidth>t.clientWidth+a)return;
    this._saveInitialAttribute(t, e);
    const s=window.getComputedStyle(t)[e];
    t.style[e]=`$ {
    i(Number.parseFloat(s));
}
px`;
}));
}reset() {
    this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, "paddingRight"), this._resetElementAttributes(xi, "paddingRight"), this._resetElementAttributes(mi, "marginRight");
}
_saveInitialAttribute(t, e) {
    const i=t.style[e];
    i&&Se.setDataAttribute(t, e, i);
}
_resetElementAttributes(t, e) {
    this._applyManipulationCallback(t, (t=> {
    const i=Se.getDataAttribute(t, e);
    void 0===i?t.style.removeProperty(e): (Se.removeDataAttribute(t, e), t.style[e]=i);
}
));
}_applyManipulationCallback(t, e) {
    Xt(t)?e(t): Ee.find(t, this._element).forEach(e);
}
isOverflowing() {
    return this.getWidth()>0;
}
constructor() {
    this._element=document.body;
}
}const vi= {
    className: "modal-backdrop", isVisible:!0, isAnimated:!1, rootElement:"body", clickCallback:null;
}
, yi= {
    className: "string", isVisible:"boolean", isAnimated:"boolean", rootElement:"(element|string)", clickCallback:"(function|null)"}
, wi="backdrop", ki="show", Ai="mousedown.bs.backdrop";
    class Ci {
    show(t) {
    this._config.isVisible?(this._append(), this._config.isAnimated&&Gt(this._getElement()), this._getElement().classList.add(ki), this._emulateAnimation((()=> {
    Kt(t);
}
))): Kt(t);
}hide(t) {
    this._config.isVisible?(this._getElement().classList.remove(ki), this._emulateAnimation((()=> {
    this.dispose(), Kt(t);
}
))): Kt(t);
}_getElement() {
    if(!this._element) {
    const t=document.createElement("div");
    t.className=this._config.className, this._config.isAnimated&&t.classList.add("fade"), this._element=t;
}
return this._element;
}_getConfig(t) {
    return(t= {
    ...vi, ..."object"==typeof t?t:  {
}
}
).rootElement=Ht(t.rootElement), Rt(wi, t, yi), t;
}_append() {
    this._isAppended||(this._config.rootElement.append(this._getElement()), pe.on(this._getElement(), Ai, (()=> {
    Kt(this._config.clickCallback);
}
)), this._isAppended=!0);
}dispose() {
    this._isAppended&&(pe.off(this._element, Ai), this._element.remove(), this._isAppended=!1);
}
_emulateAnimation(t) {
    Jt(t, this._getElement(), this._config.isAnimated);
}
constructor(t) {
    this._config=this._getConfig(t), this._isAppended=!1, this._element=null;
}
}const Si= {
    trapElement: null, autofocus:!0;
}
, Ei= {
    trapElement: "element", autofocus:"boolean"}
, Li=".bs.focustrap", _i="backward";
    class Mi {
    activate() {
    const {
    trapElement: t, autofocus:e;
}
=this._config;
    this._isActive||(e&&t.focus(), pe.off(document, Li), pe.on(document, "focusin.bs.focustrap", (t=>this._handleFocusin(t))), pe.on(document, "keydown.tab.bs.focustrap", (t=>this._handleKeydown(t))), this._isActive=!0);
}
deactivate() {
    this._isActive&&(this._isActive=!1, pe.off(document, Li));
}
_handleFocusin(t) {
    const {
    target: e;
}
=t,  {
    trapElement: i;
}
=this._config;
    if(e===document||e===i||i.contains(e))return;
    const a=Ee.focusableChildren(i);
    0===a.length?i.focus(): this._lastTabNavDirection===_i?a[a.length-1].focus():a[0].focus();
}
_handleKeydown(t) {
    "Tab"===t.key&&(this._lastTabNavDirection=t.shiftKey?_i: "forward");
}
_getConfig(t) {
    return t= {
    ...Si, ..."object"==typeof t?t:  {
}
}
, Rt("focustrap", t, Ei), t;
}constructor(t) {
    this._config=this._getConfig(t), this._isActive=!1, this._lastTabNavDirection=null;
}
}const Ti="modal", Pi=".bs.modal", Di="Escape", Ii= {
    backdrop: !0, keyboard:!0, focus:!0;
}
, Oi= {
    backdrop: "(boolean|string)", keyboard:"boolean", focus:"boolean"}
, zi="hidden.bs.modal", Yi="show.bs.modal", Ni="resize.bs.modal", Fi="click.dismiss.bs.modal", Xi="keydown.dismiss.bs.modal", Hi="mousedown.dismiss.bs.modal", Ri="modal-open", Wi="show", Bi="modal-static";
    class Vi extends be {
    static get Default() {
    return Ii;
}
static get NAME() {
    return Ti;
}
toggle(t) {
    return this._isShown?this.hide(): this.show(t);
}
show(t) {
    if(this._isShown||this._isTransitioning)return;
    pe.trigger(this._element, Yi,  {
    relatedTarget: t;
}
).defaultPrevented||(this._isShown=!0, this._isAnimated()&&(this._isTransitioning=!0), this._scrollBar.hide(), document.body.classList.add(Ri), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), pe.on(this._dialog, Hi, (()=> {
    pe.one(this._element, "mouseup.dismiss.bs.modal", (t=> {
    t.target===this._element&&(this._ignoreBackdropClick=!0);
}
));
})), this._showBackdrop((()=>this._showElement(t))));
}hide() {
    if(!this._isShown||this._isTransitioning)return;
    if(pe.trigger(this._element, "hide.bs.modal").defaultPrevented)return;
    this._isShown=!1;
    const t=this._isAnimated();
    t&&(this._isTransitioning=!0), this._setEscapeEvent(), this._setResizeEvent(), this._focustrap.deactivate(), this._element.classList.remove(Wi), pe.off(this._element, Fi), pe.off(this._dialog, Hi), this._queueCallback((()=>this._hideModal()), this._element, t);
}
dispose() {
    [window, this._dialog].forEach((t=>pe.off(t, Pi))), this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
}
handleUpdate() {
    this._adjustDialog();
}
_initializeBackDrop() {
    return new Ci( {
    isVisible: Boolean(this._config.backdrop), isAnimated:this._isAnimated();
}
);
}_initializeFocusTrap() {
    return new Mi( {
    trapElement: this._element;
}
);
}_getConfig(t) {
    return t= {
    ...Ii, ...Se.getDataAttributes(this._element), ..."object"==typeof t?t:  {
}
}
, Rt(Ti, t, Oi), t;
}_showElement(t) {
    const e=this._isAnimated(), i=Ee.findOne(".modal-body", this._dialog);
    this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.append(this._element), this._element.style.display="block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.scrollTop=0, i&&(i.scrollTop=0), e&&Gt(this._element), this._element.classList.add(Wi);
    this._queueCallback((()=> {
    this._config.focus&&this._focustrap.activate(), this._isTransitioning=!1, pe.trigger(this._element, "shown.bs.modal",  {
    relatedTarget: t;
}
);
}), this._dialog, e);
}_setEscapeEvent() {
    this._isShown?pe.on(this._element, Xi, (t=> {
    this._config.keyboard&&t.key===Di?(t.preventDefault(), this.hide()): this._config.keyboard||t.key!==Di||this._triggerBackdropTransition();
}
)):pe.off(this._element, Xi);
}_setResizeEvent() {
    this._isShown?pe.on(window, Ni, (()=>this._adjustDialog())): pe.off(window, Ni);
}
_hideModal() {
    this._element.style.display="none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning=!1, this._backdrop.hide((()=> {
    document.body.classList.remove(Ri), this._resetAdjustments(), this._scrollBar.reset(), pe.trigger(this._element, zi);
}
));
}_showBackdrop(t) {
    pe.on(this._element, Fi, (t=> {
    this._ignoreBackdropClick?this._ignoreBackdropClick=!1: t.target===t.currentTarget&&(!0===this._config.backdrop?this.hide():"static"===this._config.backdrop&&this._triggerBackdropTransition());
}
)), this._backdrop.show(t);
}_isAnimated() {
    return this._element.classList.contains("fade");
}
_triggerBackdropTransition() {
    if(pe.trigger(this._element, "hidePrevented.bs.modal").defaultPrevented)return;
    const {
    classList: t, scrollHeight:e, style:i;
}
=this._element, a=e>document.documentElement.clientHeight;
    !a&&"hidden"===i.overflowY||t.contains(Bi)||(a||(i.overflowY="hidden"), t.add(Bi), this._queueCallback((()=> {
    t.remove(Bi), a||this._queueCallback((()=> {
    i.overflowY=""}
), this._dialog);
}), this._dialog), this._element.focus());
}_adjustDialog() {
    const t=this._element.scrollHeight>document.documentElement.clientHeight, e=this._scrollBar.getWidth(), i=e>0;
    (!i&&t&&!$t()||i&&!t&&$t())&&(this._element.style.paddingLeft=`$ {
    e;
}
px`), (i&&!t&&!$t()||!i&&t&&$t())&&(this._element.style.paddingRight=`$ {
    e;
}
px`);
}_resetAdjustments() {
    this._element.style.paddingLeft="", this._element.style.paddingRight=""}
static jQueryInterface(t, e) {
    return this.each((function() {
    const i=Vi.getOrCreateInstance(this, t);
    if("string"==typeof t) {
    if(void 0===i[t])throw new TypeError(`No method named "$ {
    t;
}
"`);
    i[t](e);
}
}));
}constructor(t, e) {
    super(t), this._config=this._getConfig(e), this._dialog=Ee.findOne(".modal-dialog", this._element), this._backdrop=this._initializeBackDrop(), this._focustrap=this._initializeFocusTrap(), this._isShown=!1, this._ignoreBackdropClick=!1, this._isTransitioning=!1, this._scrollBar=new bi;
}
}pe.on(document, "click.bs.modal.data-api", '[data-bs-toggle="modal"]', (function(t) {
    const e=Nt(this);
    ["A", "AREA"].includes(this.tagName)&&t.preventDefault(), pe.one(e, Yi, (t=> {
    t.defaultPrevented||pe.one(e, zi, (()=> {
    Wt(this)&&this.focus();
}
));
}));
    const i=Ee.findOne(".modal.show");
    i&&Vi.getInstance(i).hide();
    Vi.getOrCreateInstance(e).toggle(this);
}
)), ve(Vi), Zt(Vi);
    const ji="offcanvas", Gi= {
    backdrop: !0, keyboard:!0, scroll:!1;
}
, Ui= {
    backdrop: "boolean", keyboard:"boolean", scroll:"boolean"}
, qi="show", $i=".offcanvas.show", Zi="hidden.bs.offcanvas";
    class Ki extends be {
    static get NAME() {
    return ji;
}
static get Default() {
    return Gi;
}
toggle(t) {
    return this._isShown?this.hide(): this.show(t);
}
show(t) {
    if(this._isShown)return;
    if(pe.trigger(this._element, "show.bs.offcanvas",  {
    relatedTarget: t;
}
).defaultPrevented)return;
    this._isShown=!0, this._element.style.visibility="visible", this._backdrop.show(), this._config.scroll||(new bi).hide(), this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.classList.add(qi);
    this._queueCallback((()=> {
    this._config.scroll||this._focustrap.activate(), pe.trigger(this._element, "shown.bs.offcanvas",  {
    relatedTarget: t;
}
);
}), this._element, !0);
}hide() {
    if(!this._isShown)return;
    if(pe.trigger(this._element, "hide.bs.offcanvas").defaultPrevented)return;
    this._focustrap.deactivate(), this._element.blur(), this._isShown=!1, this._element.classList.remove(qi), this._backdrop.hide();
    this._queueCallback((()=> {
    this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._element.style.visibility="hidden", this._config.scroll||(new bi).reset(), pe.trigger(this._element, Zi);
}
), this._element, !0);
}dispose() {
    this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
}
_getConfig(t) {
    return t= {
    ...Gi, ...Se.getDataAttributes(this._element), ..."object"==typeof t?t:  {
}
}
, Rt(ji, t, Ui), t;
}_initializeBackDrop() {
    return new Ci( {
    className: "offcanvas-backdrop", isVisible:this._config.backdrop, isAnimated:!0, rootElement:this._element.parentNode, clickCallback:()=>this.hide();
}
);
}_initializeFocusTrap() {
    return new Mi( {
    trapElement: this._element;
}
);
}_addEventListeners() {
    pe.on(this._element, "keydown.dismiss.bs.offcanvas", (t=> {
    this._config.keyboard&&"Escape"===t.key&&this.hide();
}
));
}static jQueryInterface(t) {
    return this.each((function() {
    const e=Ki.getOrCreateInstance(this, t);
    if("string"==typeof t) {
    if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "$ {
    t;
}
"`);
    e[t](this);
}
}));
}constructor(t, e) {
    super(t), this._config=this._getConfig(e), this._isShown=!1, this._backdrop=this._initializeBackDrop(), this._focustrap=this._initializeFocusTrap(), this._addEventListeners();
}
}pe.on(document, "click.bs.offcanvas.data-api", '[data-bs-toggle="offcanvas"]', (function(t) {
    const e=Nt(this);
    if(["A", "AREA"].includes(this.tagName)&&t.preventDefault(), Bt(this))return;
    pe.one(e, Zi, (()=> {
    Wt(this)&&this.focus();
}
));
    const i=Ee.findOne($i);
    i&&i!==e&&Ki.getInstance(i).hide();
    Ki.getOrCreateInstance(e).toggle(this);
}
)), pe.on(window, "load.bs.offcanvas.data-api", (()=>Ee.find($i).forEach((t=>Ki.getOrCreateInstance(t).show())))), ve(Ki), Zt(Ki);
    const Ji=new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink: href"]), Qi=/^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i, ta=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));
    base64, [\d+/a-z]+=*$/i, ea=(t, e)=> {
    const i=t.nodeName.toLowerCase();
    if(e.includes(i))return!Ji.has(i)||Boolean(Qi.test(t.nodeValue)||ta.test(t.nodeValue));
    const a=e.filter((t=>t instanceof RegExp));
    for(let t=0, e=a.length;
    t<e;
    t++)if(a[t].test(i))return!0;
    return!1;
}
, ia= {
    "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i], a:["target", "href", "title", "rel"], area:[], b:[], br:[], col:[], code:[], div:[], em:[], hr:[], h1:[], h2:[], h3:[], h4:[], h5:[], h6:[], i:[], img:["src", "srcset", "alt", "title", "width", "height"], li:[], ol:[], p:[], pre:[], s:[], small:[], span:[], sub:[], sup:[], strong:[], u:[], ul:[];
}
;
    function aa(t, e, i) {
    if(!t.length)return t;
    if(i&&"function"==typeof i)return i(t);
    const a=(new window.DOMParser).parseFromString(t, "text/html"), s=[].concat(...a.body.querySelectorAll("*"));
    for(let t=0, i=s.length;
    t<i;
    t++) {
    const i=s[t], a=i.nodeName.toLowerCase();
    if(!Object.keys(e).includes(a)) {
    i.remove();
    continue;
}
const n=[].concat(...i.attributes), o=[].concat(e["*"]||[], e[a]||[]);
    n.forEach((t=> {
    ea(t, o)||i.removeAttribute(t.nodeName);
}
));
}return a.body.innerHTML;
}const sa="tooltip", na=new Set(["sanitize", "allowList", "sanitizeFn"]), oa= {
    animation: "boolean", template:"string", title:"(string|element|function)", trigger:"string", delay:"(number|object)", html:"boolean", selector:"(string|boolean)", placement:"(string|function)", offset:"(array|string|function)", container:"(string|element|boolean)", fallbackPlacements:"array", boundary:"(string|element)", customClass:"(string|function)", sanitize:"boolean", sanitizeFn:"(null|function)", allowList:"object", popperConfig:"(null|object|function)"}
, ra= {
    AUTO: "auto", TOP:"top", RIGHT:$t()?"left":"right", BOTTOM:"bottom", LEFT:$t()?"right":"left"}
, la= {
    animation: !0, template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>', trigger:"hover focus", title:"", delay:0, html:!1, selector:!1, placement:"top", offset:[0, 0], container:!1, fallbackPlacements:["top", "right", "bottom", "left"], boundary:"clippingParents", customClass:"", sanitize:!0, sanitizeFn:null, allowList:ia, popperConfig:null;
}
, ca= {
    HIDE: "hide.bs.tooltip", HIDDEN:"hidden.bs.tooltip", SHOW:"show.bs.tooltip", SHOWN:"shown.bs.tooltip", INSERTED:"inserted.bs.tooltip", CLICK:"click.bs.tooltip", FOCUSIN:"focusin.bs.tooltip", FOCUSOUT:"focusout.bs.tooltip", MOUSEENTER:"mouseenter.bs.tooltip", MOUSELEAVE:"mouseleave.bs.tooltip"}
, ha="fade", da="show", ua="show", ga="out", fa=".tooltip-inner", pa=".modal", xa="hide.bs.modal", ma="hover", ba="focus";
    class va extends be {
    static get Default() {
    return la;
}
static get NAME() {
    return sa;
}
static get Event() {
    return ca;
}
static get DefaultType() {
    return oa;
}
enable() {
    this._isEnabled=!0;
}
disable() {
    this._isEnabled=!1;
}
toggleEnabled() {
    this._isEnabled=!this._isEnabled;
}
toggle(t) {
    if(this._isEnabled)if(t) {
    const e=this._initializeOnDelegatedTarget(t);
    e._activeTrigger.click=!e._activeTrigger.click, e._isWithActiveTrigger()?e._enter(null, e): e._leave(null, e);
}
else {
    if(this.getTipElement().classList.contains(da))return void this._leave(null, this);
    this._enter(null, this);
}
}dispose() {
    clearTimeout(this._timeout), pe.off(this._element.closest(pa), xa, this._hideModalHandler), this.tip&&this.tip.remove(), this._disposePopper(), super.dispose();
}
show() {
    if("none"===this._element.style.display)throw new Error("Please use show on visible elements");
    if(!this.isWithContent()||!this._isEnabled)return;
    const t=pe.trigger(this._element, this.constructor.Event.SHOW), e=Vt(this._element), a=null===e?this._element.ownerDocument.documentElement.contains(this._element): e.contains(this._element);
    if(t.defaultPrevented||!a)return;
    "tooltip"===this.constructor.NAME&&this.tip&&this.getTitle()!==this.tip.querySelector(fa).innerHTML&&(this._disposePopper(), this.tip.remove(), this.tip=null);
    const s=this.getTipElement(), n=(t=> {
    do {
    t+=Math.floor(1e6*Math.random());
}
while(document.getElementById(t));
    return t;
}
)(this.constructor.NAME);
    s.setAttribute("id", n), this._element.setAttribute("aria-describedby", n), this._config.animation&&s.classList.add(ha);
    const o="function"==typeof this._config.placement?this._config.placement.call(this, s, this._element): this._config.placement, r=this._getAttachment(o);
    this._addAttachmentClass(r);
    const {
    container: l;
}
=this._config;
    me.set(s, this.constructor.DATA_KEY, this), this._element.ownerDocument.documentElement.contains(this.tip)||(l.append(s), pe.trigger(this._element, this.constructor.Event.INSERTED)), this._popper?this._popper.update(): this._popper=i.createPopper(this._element, s, this._getPopperConfig(r)), s.classList.add(da);
    const c=this._resolvePossibleFunction(this._config.customClass);
    c&&s.classList.add(...c.split(" ")), "ontouchstart"in document.documentElement&&[].concat(...document.body.children).forEach((t=> {
    pe.on(t, "mouseover", jt);
}
));
    const h=this.tip.classList.contains(ha);
    this._queueCallback((()=> {
    const t=this._hoverState;
    this._hoverState=null, pe.trigger(this._element, this.constructor.Event.SHOWN), t===ga&&this._leave(null, this);
}
), this.tip, h);
}hide() {
    if(!this._popper)return;
    const t=this.getTipElement();
    if(pe.trigger(this._element, this.constructor.Event.HIDE).defaultPrevented)return;
    t.classList.remove(da), "ontouchstart"in document.documentElement&&[].concat(...document.body.children).forEach((t=>pe.off(t, "mouseover", jt))), this._activeTrigger.click=!1, this._activeTrigger.focus=!1, this._activeTrigger.hover=!1;
    const e=this.tip.classList.contains(ha);
    this._queueCallback((()=> {
    this._isWithActiveTrigger()||(this._hoverState!==ua&&t.remove(), this._cleanTipClass(), this._element.removeAttribute("aria-describedby"), pe.trigger(this._element, this.constructor.Event.HIDDEN), this._disposePopper());
}
), this.tip, e), this._hoverState=""}update() {
    null!==this._popper&&this._popper.update();
}
isWithContent() {
    return Boolean(this.getTitle());
}
getTipElement() {
    if(this.tip)return this.tip;
    const t=document.createElement("div");
    t.innerHTML=this._config.template;
    const e=t.children[0];
    return this.setContent(e), e.classList.remove(ha, da), this.tip=e, this.tip;
}
setContent(t) {
    this._sanitizeAndSetContent(t, this.getTitle(), fa);
}
_sanitizeAndSetContent(t, e, i) {
    const a=Ee.findOne(i, t);
    e||!a?this.setElementContent(a, e): a.remove();
}
setElementContent(t, e) {
    if(null!==t)return Xt(e)?(e=Ht(e), void(this._config.html?e.parentNode!==t&&(t.innerHTML="", t.append(e)): t.textContent=e.textContent)):void(this._config.html?(this._config.sanitize&&(e=aa(e, this._config.allowList, this._config.sanitizeFn)), t.innerHTML=e):t.textContent=e);
}
getTitle() {
    const t=this._element.getAttribute("data-bs-original-title")||this._config.title;
    return this._resolvePossibleFunction(t);
}
updateAttachment(t) {
    return"right"===t?"end": "left"===t?"start":t;
}
_initializeOnDelegatedTarget(t, e) {
    return e||this.constructor.getOrCreateInstance(t.delegateTarget, this._getDelegateConfig());
}
_getOffset() {
    const {
    offset: t;
}
=this._config;
    return"string"==typeof t?t.split(", ").map((t=>Number.parseInt(t, 10))): "function"==typeof t?e=>t(e, this._element):t;
}
_resolvePossibleFunction(t) {
    return"function"==typeof t?t.call(this._element): t;
}
_getPopperConfig(t) {
    const e= {
    placement: t, modifiers:[ {
    name: "flip", options: {
    fallbackPlacements: this._config.fallbackPlacements;
}
},  {
    name: "offset", options: {
    offset: this._getOffset();
}
},  {
    name: "preventOverflow", options: {
    boundary: this._config.boundary;
}
},  {
    name: "arrow", options: {
    element: `.$ {
    this.constructor.NAME;
}
-arrow`;
}},  {
    name: "onChange", enabled:!0, phase:"afterWrite", fn:t=>this._handlePopperPlacementChange(t);
}
], onFirstUpdate:t=> {
    t.options.placement!==t.placement&&this._handlePopperPlacementChange(t);
}
};
    return {
    ...e, ..."function"==typeof this._config.popperConfig?this._config.popperConfig(e): this._config.popperConfig;
}
}_addAttachmentClass(t) {
    this.getTipElement().classList.add(`$ {
    this._getBasicClassPrefix();
}
-$ {
    this.updateAttachment(t);
}
`);
}_getAttachment(t) {
    return ra[t.toUpperCase()];
}
_setListeners() {
    this._config.trigger.split(" ").forEach((t=> {
    if("click"===t)pe.on(this._element, this.constructor.Event.CLICK, this._config.selector, (t=>this.toggle(t)));
    else if("manual"!==t) {
    const e=t===ma?this.constructor.Event.MOUSEENTER: this.constructor.Event.FOCUSIN, i=t===ma?this.constructor.Event.MOUSELEAVE:this.constructor.Event.FOCUSOUT;
    pe.on(this._element, e, this._config.selector, (t=>this._enter(t))), pe.on(this._element, i, this._config.selector, (t=>this._leave(t)));
}
})), this._hideModalHandler=()=> {
    this._element&&this.hide();
}
, pe.on(this._element.closest(pa), xa, this._hideModalHandler), this._config.selector?this._config= {
    ...this._config, trigger: "manual", selector:""}
:this._fixTitle();
}_fixTitle() {
    const t=this._element.getAttribute("title"), e=typeof this._element.getAttribute("data-bs-original-title");
    (t||"string"!==e)&&(this._element.setAttribute("data-bs-original-title", t||""), !t||this._element.getAttribute("aria-label")||this._element.textContent||this._element.setAttribute("aria-label", t), this._element.setAttribute("title", ""));
}
_enter(t, e) {
    e=this._initializeOnDelegatedTarget(t, e), t&&(e._activeTrigger["focusin"===t.type?ba: ma]=!0), e.getTipElement().classList.contains(da)||e._hoverState===ua?e._hoverState=ua:(clearTimeout(e._timeout), e._hoverState=ua, e._config.delay&&e._config.delay.show?e._timeout=setTimeout((()=> {
    e._hoverState===ua&&e.show();
}
), e._config.delay.show): e.show());
}_leave(t, e) {
    e=this._initializeOnDelegatedTarget(t, e), t&&(e._activeTrigger["focusout"===t.type?ba: ma]=e._element.contains(t.relatedTarget)), e._isWithActiveTrigger()||(clearTimeout(e._timeout), e._hoverState=ga, e._config.delay&&e._config.delay.hide?e._timeout=setTimeout((()=> {
    e._hoverState===ga&&e.hide();
}
), e._config.delay.hide): e.hide());
}_isWithActiveTrigger() {
    for(const t in this._activeTrigger)if(this._activeTrigger[t])return!0;
    return!1;
}
_getConfig(t) {
    const e=Se.getDataAttributes(this._element);
    return Object.keys(e).forEach((t=> {
    na.has(t)&&delete e[t];
}
)), (t= {
    ...this.constructor.Default, ...e, ..."object"==typeof t&&t?t:  {
}
}
).container=!1===t.container?document.body:Ht(t.container), "number"==typeof t.delay&&(t.delay= {
    show: t.delay, hide:t.delay;
}
), "number"==typeof t.title&&(t.title=t.title.toString()), "number"==typeof t.content&&(t.content=t.content.toString()), Rt(sa, t, this.constructor.DefaultType), t.sanitize&&(t.template=aa(t.template, t.allowList, t.sanitizeFn)), t;
}_getDelegateConfig() {
    const t= {
}
;
    for(const e in this._config)this.constructor.Default[e]!==this._config[e]&&(t[e]=this._config[e]);
    return t;
}
_cleanTipClass() {
    const t=this.getTipElement(), e=new RegExp(`(^|\\s)$ {
    this._getBasicClassPrefix();
}
\\S+`, "g"), i=t.getAttribute("class").match(e);
    null!==i&&i.length>0&&i.map((t=>t.trim())).forEach((e=>t.classList.remove(e)));
}
_getBasicClassPrefix() {
    return"bs-tooltip"}
_handlePopperPlacementChange(t) {
    const {
    state: e;
}
=t;
    e&&(this.tip=e.elements.popper, this._cleanTipClass(), this._addAttachmentClass(this._getAttachment(e.placement)));
}
_disposePopper() {
    this._popper&&(this._popper.destroy(), this._popper=null);
}
static jQueryInterface(t) {
    return this.each((function() {
    const e=va.getOrCreateInstance(this, t);
    if("string"==typeof t) {
    if(void 0===e[t])throw new TypeError(`No method named "$ {
    t;
}
"`);
    e[t]();
}
}));
}constructor(t, e) {
    if(void 0===i)throw new TypeError("Bootstrap's tooltips require Popper (https: //popper.js.org)");
    super(t), this._isEnabled=!0, this._timeout=0, this._hoverState="", this._activeTrigger= {
}
, this._popper=null, this._config=this._getConfig(e), this.tip=null, this._setListeners();
}
}Zt(va);
    const ya= {
    ...va.Default, placement: "right", offset:[0, 8], trigger:"click", content:"", template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'}
, wa= {
    ...va.DefaultType, content: "(string|element|function)"}
, ka= {
    HIDE: "hide.bs.popover", HIDDEN:"hidden.bs.popover", SHOW:"show.bs.popover", SHOWN:"shown.bs.popover", INSERTED:"inserted.bs.popover", CLICK:"click.bs.popover", FOCUSIN:"focusin.bs.popover", FOCUSOUT:"focusout.bs.popover", MOUSEENTER:"mouseenter.bs.popover", MOUSELEAVE:"mouseleave.bs.popover"}
;
    class Aa extends va {
    static get Default() {
    return ya;
}
static get NAME() {
    return"popover"}
static get Event() {
    return ka;
}
static get DefaultType() {
    return wa;
}
isWithContent() {
    return this.getTitle()||this._getContent();
}
setContent(t) {
    this._sanitizeAndSetContent(t, this.getTitle(), ".popover-header"), this._sanitizeAndSetContent(t, this._getContent(), ".popover-body");
}
_getContent() {
    return this._resolvePossibleFunction(this._config.content);
}
_getBasicClassPrefix() {
    return"bs-popover"}
static jQueryInterface(t) {
    return this.each((function() {
    const e=Aa.getOrCreateInstance(this, t);
    if("string"==typeof t) {
    if(void 0===e[t])throw new TypeError(`No method named "$ {
    t;
}
"`);
    e[t]();
}
}));
}}Zt(Aa);
    const Ca="scrollspy", Sa=".bs.scrollspy", Ea= {
    offset: 10, method:"auto", target:""}
, La= {
    offset: "number", method:"string", target:"(string|element)"}
, _a="dropdown-item", Ma="active", Ta=".nav-link", Pa=".nav-link,  .list-group-item,  .dropdown-item", Da="position";
    class Ia extends be {
    static get Default() {
    return Ea;
}
static get NAME() {
    return Ca;
}
refresh() {
    const t=this._scrollElement===this._scrollElement.window?"offset": Da, e="auto"===this._config.method?t:this._config.method, i=e===Da?this._getScrollTop():0;
    this._offsets=[], this._targets=[], this._scrollHeight=this._getScrollHeight();
    Ee.find(Pa, this._config.target).map((t=> {
    const a=Yt(t), s=a?Ee.findOne(a): null;
    if(s) {
    const t=s.getBoundingClientRect();
    if(t.width||t.height)return[Se[e](s).top+i, a];
}
return null;
})).filter((t=>t)).sort(((t, e)=>t[0]-e[0])).forEach((t=> {
    this._offsets.push(t[0]), this._targets.push(t[1]);
}
));
}dispose() {
    pe.off(this._scrollElement, Sa), super.dispose();
}
_getConfig(t) {
    return(t= {
    ...Ea, ...Se.getDataAttributes(this._element), ..."object"==typeof t&&t?t:  {
}
}
).target=Ht(t.target)||document.documentElement, Rt(Ca, t, La), t;
}_getScrollTop() {
    return this._scrollElement===window?this._scrollElement.pageYOffset: this._scrollElement.scrollTop;
}
_getScrollHeight() {
    return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
}
_getOffsetHeight() {
    return this._scrollElement===window?window.innerHeight: this._scrollElement.getBoundingClientRect().height;
}
_process() {
    const t=this._getScrollTop()+this._config.offset, e=this._getScrollHeight(), i=this._config.offset+e-this._getOffsetHeight();
    if(this._scrollHeight!==e&&this.refresh(), t>=i) {
    const t=this._targets[this._targets.length-1];
    this._activeTarget!==t&&this._activate(t);
}
else {
    if(this._activeTarget&&t<this._offsets[0]&&this._offsets[0]>0)return this._activeTarget=null, void this._clear();
    for(let e=this._offsets.length;
    e--;
    ) {
    this._activeTarget!==this._targets[e]&&t>=this._offsets[e]&&(void 0===this._offsets[e+1]||t<this._offsets[e+1])&&this._activate(this._targets[e]);
}
}}_activate(t) {
    this._activeTarget=t, this._clear();
    const e=Pa.split(", ").map((e=>`$ {
    e;
}
[data-bs-target="$ {
    t;
}
"], $ {
    e;
}
[href="$ {
    t;
}
"]`)), i=Ee.findOne(e.join(", "), this._config.target);
    i.classList.add(Ma), i.classList.contains(_a)?Ee.findOne(".dropdown-toggle", i.closest(".dropdown")).classList.add(Ma): Ee.parents(i, ".nav,  .list-group").forEach((t=> {
    Ee.prev(t, ".nav-link,  .list-group-item").forEach((t=>t.classList.add(Ma))), Ee.prev(t, ".nav-item").forEach((t=> {
    Ee.children(t, Ta).forEach((t=>t.classList.add(Ma)));
}
));
})), pe.trigger(this._scrollElement, "activate.bs.scrollspy",  {
    relatedTarget: t;
}
);
}_clear() {
    Ee.find(Pa, this._config.target).filter((t=>t.classList.contains(Ma))).forEach((t=>t.classList.remove(Ma)));
}
static jQueryInterface(t) {
    return this.each((function() {
    const e=Ia.getOrCreateInstance(this, t);
    if("string"==typeof t) {
    if(void 0===e[t])throw new TypeError(`No method named "$ {
    t;
}
"`);
    e[t]();
}
}));
}constructor(t, e) {
    super(t), this._scrollElement="BODY"===this._element.tagName?window: this._element, this._config=this._getConfig(e), this._offsets=[], this._targets=[], this._activeTarget=null, this._scrollHeight=0, pe.on(this._scrollElement, "scroll.bs.scrollspy", (()=>this._process())), this.refresh(), this._process();
}
}pe.on(window, "load.bs.scrollspy.data-api", (()=> {
    Ee.find('[data-bs-spy="scroll"]').forEach((t=>new Ia(t)));
}
)), Zt(Ia);
    const Oa="active", za="fade", Ya="show", Na=".active", Fa=": scope > li > .active";
    class Xa extends be {
    static get NAME() {
    return"tab"}
show() {
    if(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&this._element.classList.contains(Oa))return;
    let t;
    const e=Nt(this._element), i=this._element.closest(".nav,  .list-group");
    if(i) {
    const e="UL"===i.nodeName||"OL"===i.nodeName?Fa: Na;
    t=Ee.find(e, i), t=t[t.length-1];
}
const a=t?pe.trigger(t, "hide.bs.tab",  {
    relatedTarget: this._element;
}
):null;
    if(pe.trigger(this._element, "show.bs.tab",  {
    relatedTarget: t;
}
).defaultPrevented||null!==a&&a.defaultPrevented)return;
    this._activate(this._element, i);
    const s=()=> {
    pe.trigger(t, "hidden.bs.tab",  {
    relatedTarget: this._element;
}
), pe.trigger(this._element, "shown.bs.tab",  {
    relatedTarget: t;
}
);
};
    e?this._activate(e, e.parentNode, s): s();
}
_activate(t, e, i) {
    const a=(!e||"UL"!==e.nodeName&&"OL"!==e.nodeName?Ee.children(e, Na): Ee.find(Fa, e))[0], s=i&&a&&a.classList.contains(za), n=()=>this._transitionComplete(t, a, i);
    a&&s?(a.classList.remove(Ya), this._queueCallback(n, t, !0)): n();
}
_transitionComplete(t, e, i) {
    if(e) {
    e.classList.remove(Oa);
    const t=Ee.findOne(": scope > .dropdown-menu .active", e.parentNode);
    t&&t.classList.remove(Oa), "tab"===e.getAttribute("role")&&e.setAttribute("aria-selected", !1);
}
t.classList.add(Oa), "tab"===t.getAttribute("role")&&t.setAttribute("aria-selected", !0), Gt(t), t.classList.contains(za)&&t.classList.add(Ya);
    let a=t.parentNode;
    if(a&&"LI"===a.nodeName&&(a=a.parentNode), a&&a.classList.contains("dropdown-menu")) {
    const e=t.closest(".dropdown");
    e&&Ee.find(".dropdown-toggle", e).forEach((t=>t.classList.add(Oa))), t.setAttribute("aria-expanded", !0);
}
i&&i();
}static jQueryInterface(t) {
    return this.each((function() {
    const e=Xa.getOrCreateInstance(this);
    if("string"==typeof t) {
    if(void 0===e[t])throw new TypeError(`No method named "$ {
    t;
}
"`);
    e[t]();
}
}));
}}pe.on(document, "click.bs.tab.data-api", '[data-bs-toggle="tab"],  [data-bs-toggle="pill"],  [data-bs-toggle="list"]', (function(t) {
    if(["A", "AREA"].includes(this.tagName)&&t.preventDefault(), Bt(this))return;
    Xa.getOrCreateInstance(this).show();
}
)), Zt(Xa);
    const Ha="toast", Ra="hide", Wa="show", Ba="showing", Va= {
    animation: "boolean", autohide:"boolean", delay:"number"}
, ja= {
    animation: !0, autohide:!0, delay:5e3;
}
;
    class Ga extends be {
    static get DefaultType() {
    return Va;
}
static get Default() {
    return ja;
}
static get NAME() {
    return Ha;
}
show() {
    if(pe.trigger(this._element, "show.bs.toast").defaultPrevented)return;
    this._clearTimeout(), this._config.animation&&this._element.classList.add("fade");
    this._element.classList.remove(Ra), Gt(this._element), this._element.classList.add(Wa), this._element.classList.add(Ba), this._queueCallback((()=> {
    this._element.classList.remove(Ba), pe.trigger(this._element, "shown.bs.toast"), this._maybeScheduleHide();
}
), this._element, this._config.animation);
}hide() {
    if(!this._element.classList.contains(Wa))return;
    if(pe.trigger(this._element, "hide.bs.toast").defaultPrevented)return;
    this._element.classList.add(Ba), this._queueCallback((()=> {
    this._element.classList.add(Ra), this._element.classList.remove(Ba), this._element.classList.remove(Wa), pe.trigger(this._element, "hidden.bs.toast");
}
), this._element, this._config.animation);
}dispose() {
    this._clearTimeout(), this._element.classList.contains(Wa)&&this._element.classList.remove(Wa), super.dispose();
}
_getConfig(t) {
    return t= {
    ...ja, ...Se.getDataAttributes(this._element), ..."object"==typeof t&&t?t:  {
}
}
, Rt(Ha, t, this.constructor.DefaultType), t;
}_maybeScheduleHide() {
    this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout((()=> {
    this.hide();
}
), this._config.delay)));
}_onInteraction(t, e) {
    switch(t.type) {
    case"mouseover": case"mouseout":this._hasMouseInteraction=e;
    break;
    case"focusin": case"focusout":this._hasKeyboardInteraction=e;
}
if(e)return void this._clearTimeout();
    const i=t.relatedTarget;
    this._element===i||this._element.contains(i)||this._maybeScheduleHide();
}
_setListeners() {
    pe.on(this._element, "mouseover.bs.toast", (t=>this._onInteraction(t, !0))), pe.on(this._element, "mouseout.bs.toast", (t=>this._onInteraction(t, !1))), pe.on(this._element, "focusin.bs.toast", (t=>this._onInteraction(t, !0))), pe.on(this._element, "focusout.bs.toast", (t=>this._onInteraction(t, !1)));
}
_clearTimeout() {
    clearTimeout(this._timeout), this._timeout=null;
}
static jQueryInterface(t) {
    return this.each((function() {
    const e=Ga.getOrCreateInstance(this, t);
    if("string"==typeof t) {
    if(void 0===e[t])throw new TypeError(`No method named "$ {
    t;
}
"`);
    e[t](this);
}
}));
}constructor(t, e) {
    super(t), this._config=this._getConfig(e), this._timeout=null, this._hasMouseInteraction=!1, this._hasKeyboardInteraction=!1, this._setListeners();
}
}ve(Ga), Zt(Ga);
    var Ua= {
}
, qa= {
}
;
    function $a(t, e) {
    var i=Object.keys(t);
    if(Object.getOwnPropertySymbols) {
    var a=Object.getOwnPropertySymbols(t);
    e&&(a=a.filter((function(e) {
    return Object.getOwnPropertyDescriptor(t, e).enumerable;
}
))), i.push.apply(i, a);
}return i;
}function Za(t) {
    for(var e=1;
    e<arguments.length;
    e++) {
    var i=null!=arguments[e]?arguments[e]:  {
}
;
    e%2?$a(Object(i), !0).forEach((function(e) {
    es(t, e, i[e]);
}
)): Object.getOwnPropertyDescriptors?Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)):$a(Object(i)).forEach((function(e) {
    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e));
}
));
}return t;
}function Ka(t) {
    return(Ka="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t) {
    return typeof t;
}
: function(t) {
    return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol": typeof t;
}
)(t);
}function Ja(t, e) {
    if(!(t instanceof e))throw new TypeError("Cannot call a class as a function");
}
function Qa(t, e) {
    for(var i=0;
    i<e.length;
    i++) {
    var a=e[i];
    a.enumerable=a.enumerable||!1, a.configurable=!0, "value"in a&&(a.writable=!0), Object.defineProperty(t, a.key, a);
}
}function ts(t, e, i) {
    return e&&Qa(t.prototype, e), i&&Qa(t, i), t;
}
function es(t, e, i) {
    return e in t?Object.defineProperty(t, e,  {
    value: i, enumerable:!0, configurable:!0, writable:!0;
}
):t[e]=i, t;
}function is(t, e) {
    if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");
    t.prototype=Object.create(e&&e.prototype,  {
    constructor:  {
    value: t, writable:!0, configurable:!0;
}
}), e&&ss(t, e);
}function as(t) {
    return(as=Object.setPrototypeOf?Object.getPrototypeOf: function(t) {
    return t.__proto__||Object.getPrototypeOf(t);
}
)(t);
}function ss(t, e) {
    return(ss=Object.setPrototypeOf||function(t, e) {
    return t.__proto__=e, t;
}
)(t, e);
}function ns(t, e) {
    if(e&&("object"==typeof e||"function"==typeof e))return e;
    if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");
    return function(t) {
    if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t;
}
(t);
}function os(t) {
    var e=function() {
    if("undefined"==typeof Reflect||!Reflect.construct)return!1;
    if(Reflect.construct.sham)return!1;
    if("function"==typeof Proxy)return!0;
    try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {
}
))), !0;
}
catch(t) {
    return!1;
}
}();
    return function() {
    var i, a=as(t);
    if(e) {
    var s=as(this).constructor;
    i=Reflect.construct(a, arguments, s);
}
else i=a.apply(this, arguments);
    return ns(this, i);
}
}function rs(t) {
    return function(t) {
    if(Array.isArray(t))return ls(t);
}
(t)||function(t) {
    if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t);
}
(t)||function(t, e) {
    if(t) {
    if("string"==typeof t)return ls(t, e);
    var i=Object.prototype.toString.call(t).slice(8, -1);
    return"Object"===i&&t.constructor&&(i=t.constructor.name), "Map"===i||"Set"===i?Array.from(t): "Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?ls(t, e):void 0;
}
}(t)||function() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable,  non-array objects must have a [Symbol.iterator]() method.");
}
();
}function ls(t, e) {
    (null==e||e>t.length)&&(e=t.length);
    for(var i=0, a=new Array(e);
    i<e;
    i++)a[i]=t[i];
    return a;
}
var cs=function() {
    function t() {
    Ja(this, t);
}
return ts(t, [ {
    key: "shadeRGBColor", value:function(t, e) {
    var i=e.split(", "), a=t<0?0: 255, s=t<0?-1*t:t, n=parseInt(i[0].slice(4), 10), o=parseInt(i[1], 10), r=parseInt(i[2], 10);
    return"rgb("+(Math.round((a-n)*s)+n)+", "+(Math.round((a-o)*s)+o)+", "+(Math.round((a-r)*s)+r)+")"}
},  {
    key: "shadeHexColor", value:function(t, e) {
    var i=parseInt(e.slice(1), 16), a=t<0?0: 255, s=t<0?-1*t:t, n=i>>16, o=i>>8&255, r=255&i;
    return"#"+(16777216+65536*(Math.round((a-n)*s)+n)+256*(Math.round((a-o)*s)+o)+(Math.round((a-r)*s)+r)).toString(16).slice(1);
}
},  {
    key: "shadeColor", value:function(e, i) {
    return t.isColorHex(i)?this.shadeHexColor(e, i): this.shadeRGBColor(e, i);
}
}], [ {
    key: "bind", value:function(t, e) {
    return function() {
    return t.apply(e, arguments);
}
}},  {
    key: "isObject", value:function(t) {
    return t&&"object"===Ka(t)&&!Array.isArray(t)&&null!=t;
}
},  {
    key: "is", value:function(t, e) {
    return Object.prototype.toString.call(e)==="[object "+t+"]"}
},  {
    key: "listToArray", value:function(t) {
    var e, i=[];
    for(e=0;
    e<t.length;
    e++)i[e]=t[e];
    return i;
}
},  {
    key: "extend", value:function(t, e) {
    var i=this;
    "function"!=typeof Object.assign&&(Object.assign=function(t) {
    if(null==t)throw new TypeError("Cannot convert undefined or null to object");
    for(var e=Object(t), i=1;
    i<arguments.length;
    i++) {
    var a=arguments[i];
    if(null!=a)for(var s in a)a.hasOwnProperty(s)&&(e[s]=a[s]);
}
return e;
});
    var a=Object.assign( {
}
, t);
    return this.isObject(t)&&this.isObject(e)&&Object.keys(e).forEach((function(s) {
    i.isObject(e[s])&&s in t?a[s]=i.extend(t[s], e[s]): Object.assign(a, es( {
}
, s, e[s]));
}
)), a;
}},  {
    key: "extendArray", value:function(e, i) {
    var a=[];
    return e.map((function(e) {
    a.push(t.extend(i, e));
}
)), a;
}},  {
    key: "monthMod", value:function(t) {
    return t%12;
}
},  {
    key: "clone", value:function(e) {
    if(t.is("Array", e)) {
    for(var i=[], a=0;
    a<e.length;
    a++)i[a]=this.clone(e[a]);
    return i;
}
if(t.is("Null", e))return null;
    if(t.is("Date", e))return e;
    if("object"===Ka(e)) {
    var s= {
}
;
    for(var n in e)e.hasOwnProperty(n)&&(s[n]=this.clone(e[n]));
    return s;
}
return e;
}},  {
    key: "log10", value:function(t) {
    return Math.log(t)/Math.LN10;
}
},  {
    key: "roundToBase10", value:function(t) {
    return Math.pow(10, Math.floor(Math.log10(t)));
}
},  {
    key: "roundToBase", value:function(t, e) {
    return Math.pow(e, Math.floor(Math.log(t)/Math.log(e)));
}
},  {
    key: "parseNumber", value:function(t) {
    return null===t?t: parseFloat(t);
}
},  {
    key: "randomId", value:function() {
    return(Math.random()+1).toString(36).substring(4);
}
},  {
    key: "noExponents", value:function(t) {
    var e=String(t).split(/[eE]/);
    if(1===e.length)return e[0];
    var i="", a=t<0?"-": "", s=e[0].replace(".", ""), n=Number(e[1])+1;
    if(n<0) {
    for(i=a+"0.";
    n++;
    )i+="0";
    return i+s.replace(/^-/, "");
}
for(n-=s.length;
    n--;
    )i+="0";
    return s+i;
}
},  {
    key: "getDimensions", value:function(t) {
    var e=getComputedStyle(t, null), i=t.clientHeight, a=t.clientWidth;
    return i-=parseFloat(e.paddingTop)+parseFloat(e.paddingBottom), [a-=parseFloat(e.paddingLeft)+parseFloat(e.paddingRight), i];
}
},  {
    key: "getBoundingClientRect", value:function(t) {
    var e=t.getBoundingClientRect();
    return {
    top: e.top, right:e.right, bottom:e.bottom, left:e.left, width:t.clientWidth, height:t.clientHeight, x:e.left, y:e.top;
}
}},  {
    key: "getLargestStringFromArr", value:function(t) {
    return t.reduce((function(t, e) {
    return Array.isArray(e)&&(e=e.reduce((function(t, e) {
    return t.length>e.length?t: e;
}
))), t.length>e.length?t:e;
}), 0);
}},  {
    key: "hexToRgba", value:function() {
    var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]: "#999999", e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.6;
    "#"!==t.substring(0, 1)&&(t="#999999");
    var i=t.replace("#", "");
    i=i.match(new RegExp("(. {
    "+i.length/3+"}
)", "g"));
    for(var a=0;
    a<i.length;
    a++)i[a]=parseInt(1===i[a].length?i[a]+i[a]: i[a], 16);
    return void 0!==e&&i.push(e), "rgba("+i.join(", ")+")"}
},  {
    key: "getOpacityFromRGBA", value:function(t) {
    return parseFloat(t.replace(/^.*, (.+)\)/, "$1"));
}
},  {
    key: "rgb2hex", value:function(t) {
    return(t=t.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?, [\s+]?(\d+)[\s+]?, [\s+]?(\d+)[\s+]?/i))&&4===t.length?"#"+("0"+parseInt(t[1], 10).toString(16)).slice(-2)+("0"+parseInt(t[2], 10).toString(16)).slice(-2)+("0"+parseInt(t[3], 10).toString(16)).slice(-2): ""}
},  {
    key: "isColorHex", value:function(t) {
    return/(^#[0-9A-F] {
    6;
}
$)|(^#[0-9A-F] {
    3;
}
$)|(^#[0-9A-F] {
    8;
}
$)/i.test(t);
}},  {
    key: "getPolygonPos", value:function(t, e) {
    for(var i=[], a=2*Math.PI/e, s=0;
    s<e;
    s++) {
    var n= {
}
;
    n.x=t*Math.sin(s*a), n.y=-t*Math.cos(s*a), i.push(n);
}
return i;
}},  {
    key: "polarToCartesian", value:function(t, e, i, a) {
    var s=(a-90)*Math.PI/180;
    return {
    x: t+i*Math.cos(s), y:e+i*Math.sin(s);
}
}},  {
    key: "escapeString", value:function(t) {
    var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]: "x", i=t.toString().slice();
    return i.replace(/[` ~!@#$%^&*()_|+\-=?;
    : '", .<> {
}
[\]\\/]/gi, e);
}
},  {
    key: "negToZero", value:function(t) {
    return t<0?0: t;
}
},  {
    key: "moveIndexInArray", value:function(t, e, i) {
    if(i>=t.length)for(var a=i-t.length+1;
    a--;
    )t.push(void 0);
    return t.splice(i, 0, t.splice(e, 1)[0]), t;
}
},  {
    key: "extractNumber", value:function(t) {
    return parseFloat(t.replace(/[^\d.]*/g, ""));
}
},  {
    key: "findAncestor", value:function(t, e) {
    for(;
    (t=t.parentElement)&&!t.classList.contains(e);
    );
    return t;
}
},  {
    key: "setELstyles", value:function(t, e) {
    for(var i in e)e.hasOwnProperty(i)&&(t.style.key=e[i]);
}
},  {
    key: "isNumber", value:function(t) {
    return!isNaN(t)&&parseFloat(Number(t))===t&&!isNaN(parseInt(t, 10));
}
},  {
    key: "isFloat", value:function(t) {
    return Number(t)===t&&t%1!=0;
}
},  {
    key: "isSafari", value:function() {
    return/^((?!chrome|android).)*safari/i.test(navigator.userAgent);
}
},  {
    key: "isFirefox", value:function() {
    return navigator.userAgent.toLowerCase().indexOf("firefox")>-1;
}
},  {
    key: "isIE11", value:function() {
    if(-1!==window.navigator.userAgent.indexOf("MSIE")||window.navigator.appVersion.indexOf("Trident/")>-1)return!0;
}
},  {
    key: "isIE", value:function() {
    var t=window.navigator.userAgent, e=t.indexOf("MSIE ");
    if(e>0)return parseInt(t.substring(e+5, t.indexOf(".", e)), 10);
    if(t.indexOf("Trident/")>0) {
    var i=t.indexOf("rv: ");
    return parseInt(t.substring(i+3, t.indexOf(".", i)), 10);
}
var a=t.indexOf("Edge/");
    return a>0&&parseInt(t.substring(a+5, t.indexOf(".", a)), 10);
}
}]), t;
}(), hs=function() {
    function t(e) {
    Ja(this, t), this.ctx=e, this.w=e.w, this.setEasingFunctions();
}
return ts(t, [ {
    key: "setEasingFunctions", value:function() {
    var t;
    if(!this.w.globals.easing) {
    switch(this.w.config.chart.animations.easing) {
    case"linear": t="-";
    break;
    case"easein": t="<";
    break;
    case"easeout": t=">";
    break;
    case"easeinout": default:t="<>";
    break;
    case"swing": t=function(t) {
    var e=1.70158;
    return(t-=1)*t*((e+1)*t+e)+1;
}
;
    break;
    case"bounce": t=function(t) {
    return t<1/2.75?7.5625*t*t: t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375;
}
;
    break;
    case"elastic": t=function(t) {
    return t===!!t?t: Math.pow(2, -10*t)*Math.sin((t-.075)*(2*Math.PI)/.3)+1;
}
}this.w.globals.easing=t;
}}},  {
    key: "animateLine", value:function(t, e, i, a) {
    t.attr(e).animate(a).attr(i);
}
},  {
    key: "animateMarker", value:function(t, e, i, a, s, n) {
    e||(e=0), t.attr( {
    r: e, width:e, height:e;
}
).animate(a, s).attr( {
    r: i, width:i.width, height:i.height;
}
).afterAll((function() {
    n();
}
));
}},  {
    key: "animateCircle", value:function(t, e, i, a, s) {
    t.attr( {
    r: e.r, cx:e.cx, cy:e.cy;
}
).animate(a, s).attr( {
    r: i.r, cx:i.cx, cy:i.cy;
}
);
}},  {
    key: "animateRect", value:function(t, e, i, a, s) {
    t.attr(e).animate(a).attr(i).afterAll((function() {
    return s();
}
));
}},  {
    key: "animatePathsGradually", value:function(t) {
    var e=t.el, i=t.realIndex, a=t.j, s=t.fill, n=t.pathFrom, o=t.pathTo, r=t.speed, l=t.delay, c=this.w, h=0;
    c.config.chart.animations.animateGradually.enabled&&(h=c.config.chart.animations.animateGradually.delay), c.config.chart.animations.dynamicAnimation.enabled&&c.globals.dataChanged&&"bar"!==c.config.chart.type&&(h=0), this.morphSVG(e, i, a, "line"!==c.config.chart.type||c.globals.comboCharts?s: "stroke", n, o, r, l*h);
}
},  {
    key: "showDelayedElements", value:function() {
    this.w.globals.delayedElements.forEach((function(t) {
    t.el.classList.remove("apexcharts-element-hidden");
}
));
}},  {
    key: "animationCompleted", value:function(t) {
    var e=this.w;
    e.globals.animationEnded||(e.globals.animationEnded=!0, this.showDelayedElements(), "function"==typeof e.config.chart.events.animationEnd&&e.config.chart.events.animationEnd(this.ctx,  {
    el: t, w:e;
}
));
}},  {
    key: "morphSVG", value:function(t, e, i, a, s, n, o, r) {
    var l=this, c=this.w;
    s||(s=t.attr("pathFrom")), n||(n=t.attr("pathTo"));
    var h=function(t) {
    return"radar"===c.config.chart.type&&(o=1), "M 0 ".concat(c.globals.gridHeight);
}
;
    (!s||s.indexOf("undefined")>-1||s.indexOf("NaN")>-1)&&(s=h()), (!n||n.indexOf("undefined")>-1||n.indexOf("NaN")>-1)&&(n=h()), c.globals.shouldAnimate||(o=1), t.plot(s).animate(1, c.globals.easing, r).plot(s).animate(o, c.globals.easing, r).plot(n).afterAll((function() {
    cs.isNumber(i)?i===c.globals.series[c.globals.maxValsInArrayIndex].length-2&&c.globals.shouldAnimate&&l.animationCompleted(t): "none"!==a&&c.globals.shouldAnimate&&(!c.globals.comboCharts&&e===c.globals.series.length-1||c.globals.comboCharts)&&l.animationCompleted(t), l.showDelayedElements();
}
));
}}]), t;
}(), ds=function() {
    function t(e) {
    Ja(this, t), this.ctx=e, this.w=e.w;
}
return ts(t, [ {
    key: "getDefaultFilter", value:function(t, e) {
    var i=this.w;
    t.unfilter(!0), (new window.SVG.Filter).size("120%", "180%", "-5%", "-40%"), "none"!==i.config.states.normal.filter?this.applyFilter(t, e, i.config.states.normal.filter.type, i.config.states.normal.filter.value): i.config.chart.dropShadow.enabled&&this.dropShadow(t, i.config.chart.dropShadow, e);
}
},  {
    key: "addNormalFilter", value:function(t, e) {
    var i=this.w;
    i.config.chart.dropShadow.enabled&&!t.node.classList.contains("apexcharts-marker")&&this.dropShadow(t, i.config.chart.dropShadow, e);
}
},  {
    key: "addLightenFilter", value:function(t, e, i) {
    var a=this, s=this.w, n=i.intensity;
    t.unfilter(!0), new window.SVG.Filter, t.filter((function(t) {
    var i=s.config.chart.dropShadow;
    (i.enabled?a.addShadow(t, e, i): t).componentTransfer( {
    rgb:  {
    type: "linear", slope:1.5, intercept:n;
}
});
})), t.filterer.node.setAttribute("filterUnits", "userSpaceOnUse"), this._scaleFilterSize(t.filterer.node);
}},  {
    key: "addDarkenFilter", value:function(t, e, i) {
    var a=this, s=this.w, n=i.intensity;
    t.unfilter(!0), new window.SVG.Filter, t.filter((function(t) {
    var i=s.config.chart.dropShadow;
    (i.enabled?a.addShadow(t, e, i): t).componentTransfer( {
    rgb:  {
    type: "linear", slope:n;
}
});
})), t.filterer.node.setAttribute("filterUnits", "userSpaceOnUse"), this._scaleFilterSize(t.filterer.node);
}},  {
    key: "applyFilter", value:function(t, e, i) {
    var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]: .5;
    switch(i) {
    case"none": this.addNormalFilter(t, e);
    break;
    case"lighten": this.addLightenFilter(t, e,  {
    intensity: a;
}
);
    break;
    case"darken": this.addDarkenFilter(t, e,  {
    intensity: a;
}
);
}}},  {
    key: "addShadow", value:function(t, e, i) {
    var a=i.blur, s=i.top, n=i.left, o=i.color, r=i.opacity, l=t.flood(Array.isArray(o)?o[e]: o, r).composite(t.sourceAlpha, "in").offset(n, s).gaussianBlur(a).merge(t.source);
    return t.blend(t.source, l);
}
},  {
    key: "dropShadow", value:function(t, e) {
    var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]: 0, a=e.top, s=e.left, n=e.blur, o=e.color, r=e.opacity, l=e.noUserSpaceOnUse, c=this.w;
    return t.unfilter(!0), cs.isIE()&&"radialBar"===c.config.chart.type||(o=Array.isArray(o)?o[i]: o, t.filter((function(t) {
    var e;
    e=cs.isSafari()||cs.isFirefox()||cs.isIE()?t.flood(o, r).composite(t.sourceAlpha, "in").offset(s, a).gaussianBlur(n): t.flood(o, r).composite(t.sourceAlpha, "in").offset(s, a).gaussianBlur(n).merge(t.source), t.blend(t.source, e);
}
)), l||t.filterer.node.setAttribute("filterUnits", "userSpaceOnUse"), this._scaleFilterSize(t.filterer.node)), t;
}},  {
    key: "setSelectionFilter", value:function(t, e, i) {
    var a=this.w;
    if(void 0!==a.globals.selectedDataPoints[e]&&a.globals.selectedDataPoints[e].indexOf(i)>-1) {
    t.node.setAttribute("selected", !0);
    var s=a.config.states.active.filter;
    "none"!==s&&this.applyFilter(t, e, s.type, s.value);
}
}},  {
    key: "_scaleFilterSize", value:function(t) {
    !function(e) {
    for(var i in e)e.hasOwnProperty(i)&&t.setAttribute(i, e[i]);
}
( {
    width: "200%", height:"200%", x:"-50%", y:"-50%"}
);
}}]), t;
}(), us=function() {
    function t(e) {
    Ja(this, t), this.ctx=e, this.w=e.w;
}
return ts(t, [ {
    key: "drawLine", value:function(t, e, i, a) {
    var s=arguments.length>4&&void 0!==arguments[4]?arguments[4]: "#a8a8a8", n=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0, o=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null, r=arguments.length>7&&void 0!==arguments[7]?arguments[7]:"butt", l=this.w, c=l.globals.dom.Paper.line().attr( {
    x1: t, y1:e, x2:i, y2:a, stroke:s, "stroke-dasharray":n, "stroke-width":o, "stroke-linecap":r;
}
);
    return c;
}
},  {
    key: "drawRect", value:function() {
    var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]: 0, e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0, i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0, a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0, s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0, n=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"#fefefe", o=arguments.length>6&&void 0!==arguments[6]?arguments[6]:1, r=arguments.length>7&&void 0!==arguments[7]?arguments[7]:null, l=arguments.length>8&&void 0!==arguments[8]?arguments[8]:null, c=arguments.length>9&&void 0!==arguments[9]?arguments[9]:0, h=this.w, d=h.globals.dom.Paper.rect();
    return d.attr( {
    x: t, y:e, width:i>0?i:0, height:a>0?a:0, rx:s, ry:s, opacity:o, "stroke-width":null!==r?r:0, stroke:null!==l?l:"none", "stroke-dasharray":c;
}
), d.node.setAttribute("fill", n), d;
}},  {
    key: "drawPolygon", value:function(t) {
    var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]: "#e1e1e1", i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1, a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"none", s=this.w, n=s.globals.dom.Paper.polygon(t).attr( {
    fill: a, stroke:e, "stroke-width":i;
}
);
    return n;
}
},  {
    key: "drawCircle", value:function(t) {
    var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]: null, i=this.w;
    t<0&&(t=0);
    var a=i.globals.dom.Paper.circle(2*t);
    return null!==e&&a.attr(e), a;
}
},  {
    key: "drawPath", value:function(t) {
    var e=t.d, i=void 0===e?"": e, a=t.stroke, s=void 0===a?"#a8a8a8":a, n=t.strokeWidth, o=void 0===n?1:n, r=t.fill, l=t.fillOpacity, c=void 0===l?1:l, h=t.strokeOpacity, d=void 0===h?1:h, u=t.classes, g=t.strokeLinecap, f=void 0===g?null:g, p=t.strokeDashArray, x=void 0===p?0:p, m=this.w;
    return null===f&&(f=m.config.stroke.lineCap), (i.indexOf("undefined")>-1||i.indexOf("NaN")>-1)&&(i="M 0 ".concat(m.globals.gridHeight)), m.globals.dom.Paper.path(i).attr( {
    fill: r, "fill-opacity":c, stroke:s, "stroke-opacity":d, "stroke-linecap":f, "stroke-width":o, "stroke-dasharray":x, class:u;
}
);
}},  {
    key: "group", value:function() {
    var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]: null, e=this.w, i=e.globals.dom.Paper.group();
    return null!==t&&i.attr(t), i;
}
},  {
    key: "move", value:function(t, e) {
    return["M", t, e].join(" ");
}
},  {
    key: "line", value:function(t, e) {
    var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]: null, a=null;
    return null===i?a=["L", t, e].join(" "): "H"===i?a=["H", t].join(" "):"V"===i&&(a=["V", e].join(" ")), a;
}
},  {
    key: "curve", value:function(t, e, i, a, s, n) {
    return["C", t, e, i, a, s, n].join(" ");
}
},  {
    key: "quadraticCurve", value:function(t, e, i, a) {
    return["Q", t, e, i, a].join(" ");
}
},  {
    key: "arc", value:function(t, e, i, a, s, n, o) {
    var r=arguments.length>7&&void 0!==arguments[7]&&arguments[7], l="A";
    r&&(l="a");
    var c=[l, t, e, i, a, s, n, o].join(" ");
    return c;
}
},  {
    key: "renderPaths", value:function(t) {
    var e, i=t.j, a=t.realIndex, s=t.pathFrom, n=t.pathTo, o=t.stroke, r=t.strokeWidth, l=t.strokeLinecap, c=t.fill, h=t.animationDelay, d=t.initialSpeed, u=t.dataChangeSpeed, g=t.className, f=t.shouldClipToGrid, p=void 0===f||f, x=t.bindEventsOnPaths, m=void 0===x||x, b=t.drawShadow, v=void 0===b||b, y=this.w, w=new ds(this.ctx), k=new hs(this.ctx), A=this.w.config.chart.animations.enabled, C=A&&this.w.config.chart.animations.dynamicAnimation.enabled, S=!!(A&&!y.globals.resized||C&&y.globals.dataChanged&&y.globals.shouldAnimate);
    S?e=s: (e=n, y.globals.animationEnded=!0);
    var E, L=y.config.stroke.dashArray;
    E=Array.isArray(L)?L[a]: y.config.stroke.dashArray;
    var _=this.drawPath( {
    d: e, stroke:o, strokeWidth:r, fill:c, fillOpacity:1, classes:g, strokeLinecap:l, strokeDashArray:E;
}
);
    if(_.attr("index", a), p&&_.attr( {
    "clip-path": "url(#gridRectMask".concat(y.globals.cuid, ")");
}
), "none"!==y.config.states.normal.filter.type)w.getDefaultFilter(_, a);
    else if(y.config.chart.dropShadow.enabled&&v&&(!y.config.chart.dropShadow.enabledOnSeries||y.config.chart.dropShadow.enabledOnSeries&&-1!==y.config.chart.dropShadow.enabledOnSeries.indexOf(a))) {
    var M=y.config.chart.dropShadow;
    w.dropShadow(_, M, a);
}
m&&(_.node.addEventListener("mouseenter", this.pathMouseEnter.bind(this, _)), _.node.addEventListener("mouseleave", this.pathMouseLeave.bind(this, _)), _.node.addEventListener("mousedown", this.pathMouseDown.bind(this, _))), _.attr( {
    pathTo: n, pathFrom:s;
}
);
    var T= {
    el: _, j:i, realIndex:a, pathFrom:s, pathTo:n, fill:c, strokeWidth:r, delay:h;
}
;
    return!A||y.globals.resized||y.globals.dataChanged?!y.globals.resized&&y.globals.dataChanged||k.showDelayedElements(): k.animatePathsGradually(Za(Za( {
}
, T),  {
}
,  {
    speed: d;
}
)), y.globals.dataChanged&&C&&S&&k.animatePathsGradually(Za(Za( {
}
, T),  {
}
,  {
    speed: u;
}
)), _;
}},  {
    key: "drawPattern", value:function(t, e, i) {
    var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]: "#a8a8a8", s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0, n=this.w, o=n.globals.dom.Paper.pattern(e, i, (function(n) {
    "horizontalLines"===t?n.line(0, 0, i, 0).stroke( {
    color: a, width:s+1;
}
):"verticalLines"===t?n.line(0, 0, 0, e).stroke( {
    color: a, width:s+1;
}
):"slantedLines"===t?n.line(0, 0, e, i).stroke( {
    color: a, width:s;
}
):"squares"===t?n.rect(e, i).fill("none").stroke( {
    color: a, width:s;
}
):"circles"===t&&n.circle(e).fill("none").stroke( {
    color: a, width:s;
}
);
}));
    return o;
}
},  {
    key: "drawGradient", value:function(t, e, i, a, s) {
    var n, o=arguments.length>5&&void 0!==arguments[5]?arguments[5]: null, r=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null, l=arguments.length>7&&void 0!==arguments[7]?arguments[7]:null, c=arguments.length>8&&void 0!==arguments[8]?arguments[8]:0, h=this.w;
    e.length<9&&0===e.indexOf("#")&&(e=cs.hexToRgba(e, a)), i.length<9&&0===i.indexOf("#")&&(i=cs.hexToRgba(i, s));
    var d=0, u=1, g=1, f=null;
    null!==r&&(d=void 0!==r[0]?r[0]/100: 0, u=void 0!==r[1]?r[1]/100:1, g=void 0!==r[2]?r[2]/100:1, f=void 0!==r[3]?r[3]/100:null);
    var p=!("donut"!==h.config.chart.type&&"pie"!==h.config.chart.type&&"polarArea"!==h.config.chart.type&&"bubble"!==h.config.chart.type);
    if(n=null===l||0===l.length?h.globals.dom.Paper.gradient(p?"radial": "linear", (function(t) {
    t.at(d, e, a), t.at(u, i, s), t.at(g, i, s), null!==f&&t.at(f, e, a);
}
)): h.globals.dom.Paper.gradient(p?"radial":"linear", (function(t) {
    (Array.isArray(l[c])?l[c]: l).forEach((function(e) {
    t.at(e.offset/100, e.color, e.opacity);
}
));
})), p) {
    var x=h.globals.gridWidth/2, m=h.globals.gridHeight/2;
    "bubble"!==h.config.chart.type?n.attr( {
    gradientUnits: "userSpaceOnUse", cx:x, cy:m, r:o;
}
):n.attr( {
    cx: .5, cy:.5, r:.8, fx:.2, fy:.2;
}
);
}else"vertical"===t?n.from(0, 0).to(0, 1):"diagonal"===t?n.from(0, 0).to(1, 1):"horizontal"===t?n.from(0, 1).to(1, 1):"diagonal2"===t&&n.from(1, 0).to(0, 1);
    return n;
}
},  {
    key: "drawText", value:function(t) {
    var e, i=t.x, a=t.y, s=t.text, n=t.textAnchor, o=t.fontSize, r=t.fontFamily, l=t.fontWeight, c=t.foreColor, h=t.opacity, d=t.cssClass, u=void 0===d?"": d, g=t.isPlainText, f=void 0===g||g, p=this.w;
    return void 0===s&&(s=""), n||(n="start"), c&&c.length||(c=p.config.chart.foreColor), r=r||p.config.chart.fontFamily, l=l||"regular", (e=Array.isArray(s)?p.globals.dom.Paper.text((function(t) {
    for(var e=0;
    e<s.length;
    e++)0===e?t.tspan(s[e]): t.tspan(s[e]).newLine();
}
)):f?p.globals.dom.Paper.plain(s):p.globals.dom.Paper.text((function(t) {
    return t.tspan(s);
}
))).attr( {
    x: i, y:a, "text-anchor":n, "dominant-baseline":"auto", "font-size":o, "font-family":r, "font-weight":l, fill:c, class:"apexcharts-text "+u;
}
), e.node.style.fontFamily=r, e.node.style.opacity=h, e;
}},  {
    key: "drawMarker", value:function(t, e, i) {
    t=t||0;
    var a=i.pSize||0, s=null;
    if("square"===i.shape||"rect"===i.shape) {
    var n=void 0===i.pRadius?a/2: i.pRadius;
    null!==e&&a||(a=0, n=0);
    var o=1.2*a+n, r=this.drawRect(o, o, o, o, n);
    r.attr( {
    x: t-o/2, y:e-o/2, cx:t, cy:e, class:i.class?i.class:"", fill:i.pointFillColor, "fill-opacity":i.pointFillOpacity?i.pointFillOpacity:1, stroke:i.pointStrokeColor, "stroke-width":i.pointStrokeWidth?i.pointStrokeWidth:0, "stroke-opacity":i.pointStrokeOpacity?i.pointStrokeOpacity:1;
}
), s=r;
}else"circle"!==i.shape&&i.shape||(cs.isNumber(e)||(a=0, e=0), s=this.drawCircle(a,  {
    cx: t, cy:e, class:i.class?i.class:"", stroke:i.pointStrokeColor, fill:i.pointFillColor, "fill-opacity":i.pointFillOpacity?i.pointFillOpacity:1, "stroke-width":i.pointStrokeWidth?i.pointStrokeWidth:0, "stroke-opacity":i.pointStrokeOpacity?i.pointStrokeOpacity:1;
}
));
    return s;
}
},  {
    key: "pathMouseEnter", value:function(t, e) {
    var i=this.w, a=new ds(this.ctx), s=parseInt(t.node.getAttribute("index"), 10), n=parseInt(t.node.getAttribute("j"), 10);
    if("function"==typeof i.config.chart.events.dataPointMouseEnter&&i.config.chart.events.dataPointMouseEnter(e, this.ctx,  {
    seriesIndex: s, dataPointIndex:n, w:i;
}
), this.ctx.events.fireEvent("dataPointMouseEnter", [e, this.ctx,  {
    seriesIndex: s, dataPointIndex:n, w:i;
}
]), ("none"===i.config.states.active.filter.type||"true"!==t.node.getAttribute("selected"))&&"none"!==i.config.states.hover.filter.type&&!i.globals.isTouchDevice) {
    var o=i.config.states.hover.filter;
    a.applyFilter(t, s, o.type, o.value);
}
}},  {
    key: "pathMouseLeave", value:function(t, e) {
    var i=this.w, a=new ds(this.ctx), s=parseInt(t.node.getAttribute("index"), 10), n=parseInt(t.node.getAttribute("j"), 10);
    "function"==typeof i.config.chart.events.dataPointMouseLeave&&i.config.chart.events.dataPointMouseLeave(e, this.ctx,  {
    seriesIndex: s, dataPointIndex:n, w:i;
}
), this.ctx.events.fireEvent("dataPointMouseLeave", [e, this.ctx,  {
    seriesIndex: s, dataPointIndex:n, w:i;
}
]), "none"!==i.config.states.active.filter.type&&"true"===t.node.getAttribute("selected")||"none"!==i.config.states.hover.filter.type&&a.getDefaultFilter(t, s);
}},  {
    key: "pathMouseDown", value:function(t, e) {
    var i=this.w, a=new ds(this.ctx), s=parseInt(t.node.getAttribute("index"), 10), n=parseInt(t.node.getAttribute("j"), 10), o="false";
    if("true"===t.node.getAttribute("selected")) {
    if(t.node.setAttribute("selected", "false"), i.globals.selectedDataPoints[s].indexOf(n)>-1) {
    var r=i.globals.selectedDataPoints[s].indexOf(n);
    i.globals.selectedDataPoints[s].splice(r, 1);
}
}else {
    if(!i.config.states.active.allowMultipleDataPointsSelection&&i.globals.selectedDataPoints.length>0) {
    i.globals.selectedDataPoints=[];
    var l=i.globals.dom.Paper.select(".apexcharts-series path").members, c=i.globals.dom.Paper.select(".apexcharts-series circle,  .apexcharts-series rect").members, h=function(t) {
    Array.prototype.forEach.call(t, (function(t) {
    t.node.setAttribute("selected", "false"), a.getDefaultFilter(t, s);
}
));
};
    h(l), h(c);
}
t.node.setAttribute("selected", "true"), o="true", void 0===i.globals.selectedDataPoints[s]&&(i.globals.selectedDataPoints[s]=[]), i.globals.selectedDataPoints[s].push(n);
}if("true"===o) {
    var d=i.config.states.active.filter;
    "none"!==d&&a.applyFilter(t, s, d.type, d.value);
}
else"none"!==i.config.states.active.filter.type&&a.getDefaultFilter(t, s);
    "function"==typeof i.config.chart.events.dataPointSelection&&i.config.chart.events.dataPointSelection(e, this.ctx,  {
    selectedDataPoints: i.globals.selectedDataPoints, seriesIndex:s, dataPointIndex:n, w:i;
}
), e&&this.ctx.events.fireEvent("dataPointSelection", [e, this.ctx,  {
    selectedDataPoints: i.globals.selectedDataPoints, seriesIndex:s, dataPointIndex:n, w:i;
}
]);
}},  {
    key: "rotateAroundCenter", value:function(t) {
    var e= {
}
;
    return t&&"function"==typeof t.getBBox&&(e=t.getBBox()),  {
    x: e.x+e.width/2, y:e.y+e.height/2;
}
}},  {
    key: "getTextRects", value:function(t, e, i, a) {
    var s=!(arguments.length>4&&void 0!==arguments[4])||arguments[4], n=this.w, o=this.drawText( {
    x: -200, y:-200, text:t, textAnchor:"start", fontSize:e, fontFamily:i, foreColor:"#fff", opacity:0;
}
);
    a&&o.attr("transform", a), n.globals.dom.Paper.add(o);
    var r=o.bbox();
    return s||(r=o.node.getBoundingClientRect()), o.remove(),  {
    width: r.width, height:r.height;
}
}},  {
    key: "placeTextWithEllipsis", value:function(t, e, i) {
    if("function"==typeof t.getComputedTextLength&&(t.textContent=e, e.length>0&&t.getComputedTextLength()>=i/1.1)) {
    for(var a=e.length-3;
    a>0;
    a-=3)if(t.getSubStringLength(0, a)<=i/1.1)return void(t.textContent=e.substring(0, a)+"...");
    t.textContent="."}
}}], [ {
    key: "setAttrs", value:function(t, e) {
    for(var i in e)e.hasOwnProperty(i)&&t.setAttribute(i, e[i]);
}
}]), t;
}(), gs=function() {
    function t(e) {
    Ja(this, t), this.w=e.w, this.annoCtx=e;
}
return ts(t, [ {
    key: "setOrientations", value:function(t) {
    var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]: null, i=this.w;
    if("vertical"===t.label.orientation) {
    var a=null!==e?e: 0, s=i.globals.dom.baseEl.querySelector(".apexcharts-xaxis-annotations .apexcharts-xaxis-annotation-label[rel='".concat(a, "']"));
    if(null!==s) {
    var n=s.getBoundingClientRect();
    s.setAttribute("x", parseFloat(s.getAttribute("x"))-n.height+4), "top"===t.label.position?s.setAttribute("y", parseFloat(s.getAttribute("y"))+n.width): s.setAttribute("y", parseFloat(s.getAttribute("y"))-n.width);
    var o=this.annoCtx.graphics.rotateAroundCenter(s), r=o.x, l=o.y;
    s.setAttribute("transform", "rotate(-90 ".concat(r, " ").concat(l, ")"));
}
}}},  {
    key: "addBackgroundToAnno", value:function(t, e) {
    var i=this.w;
    if(!t||void 0===e.label.text||void 0!==e.label.text&&!String(e.label.text).trim())return null;
    var a=i.globals.dom.baseEl.querySelector(".apexcharts-grid").getBoundingClientRect(), s=t.getBoundingClientRect(), n=e.label.style.padding.left, o=e.label.style.padding.right, r=e.label.style.padding.top, l=e.label.style.padding.bottom;
    "vertical"===e.label.orientation&&(r=e.label.style.padding.left, l=e.label.style.padding.right, n=e.label.style.padding.top, o=e.label.style.padding.bottom);
    var c=s.left-a.left-n, h=s.top-a.top-r, d=this.annoCtx.graphics.drawRect(c-i.globals.barPadForNumericAxis, h, s.width+n+o, s.height+r+l, e.label.borderRadius, e.label.style.background, 1, e.label.borderWidth, e.label.borderColor, 0);
    return e.id&&d.node.classList.add(cs.escapeString(e.id)), d;
}
},  {
    key: "annotationsBackground", value:function() {
    var t=this, e=this.w, i=function(i, a, s) {
    var n=e.globals.dom.baseEl.querySelector(".apexcharts-".concat(s, "-annotations .apexcharts-").concat(s, "-annotation-label[rel='").concat(a, "']"));
    if(n) {
    var o=n.parentNode, r=t.addBackgroundToAnno(n, i);
    r&&(o.insertBefore(r.node, n), i.label.mouseEnter&&r.node.addEventListener("mouseenter", i.label.mouseEnter.bind(t, i)), i.label.mouseLeave&&r.node.addEventListener("mouseleave", i.label.mouseLeave.bind(t, i)));
}
};
    e.config.annotations.xaxis.map((function(t, e) {
    i(t, e, "xaxis");
}
)), e.config.annotations.yaxis.map((function(t, e) {
    i(t, e, "yaxis");
}
)), e.config.annotations.points.map((function(t, e) {
    i(t, e, "point");
}
));
}},  {
    key: "getStringX", value:function(t) {
    var e=this.w, i=t;
    e.config.xaxis.convertedCatToNumeric&&e.globals.categoryLabels.length&&(t=e.globals.categoryLabels.indexOf(t)+1);
    var a=e.globals.labels.indexOf(t), s=e.globals.dom.baseEl.querySelector(".apexcharts-xaxis-texts-g text: nth-child("+(a+1)+")");
    return s&&(i=parseFloat(s.getAttribute("x"))), i;
}
}]), t;
}(), fs=function() {
    function t(e) {
    Ja(this, t), this.w=e.w, this.annoCtx=e, this.invertAxis=this.annoCtx.invertAxis;
}
return ts(t, [ {
    key: "addXaxisAnnotation", value:function(t, e, i) {
    var a=this.w, s=this.invertAxis?a.globals.minY: a.globals.minX, n=this.invertAxis?a.globals.maxY:a.globals.maxX, o=this.invertAxis?a.globals.yRange[0]:a.globals.xRange, r=(t.x-s)/(o/a.globals.gridWidth);
    this.annoCtx.inversedReversedAxis&&(r=(n-t.x)/(o/a.globals.gridWidth));
    var l=t.label.text;
    "category"!==a.config.xaxis.type&&!a.config.xaxis.convertedCatToNumeric||this.invertAxis||a.globals.dataFormatXNumeric||(r=this.annoCtx.helpers.getStringX(t.x));
    var c=t.strokeDashArray;
    if(cs.isNumber(r)) {
    if(null===t.x2||void 0===t.x2) {
    var h=this.annoCtx.graphics.drawLine(r+t.offsetX, 0+t.offsetY, r+t.offsetX, a.globals.gridHeight+t.offsetY, t.borderColor, c, t.borderWidth);
    e.appendChild(h.node), t.id&&h.node.classList.add(t.id);
}
else {
    var d=(t.x2-s)/(o/a.globals.gridWidth);
    if(this.annoCtx.inversedReversedAxis&&(d=(n-t.x2)/(o/a.globals.gridWidth)), "category"!==a.config.xaxis.type&&!a.config.xaxis.convertedCatToNumeric||this.invertAxis||a.globals.dataFormatXNumeric||(d=this.annoCtx.helpers.getStringX(t.x2)), d<r) {
    var u=r;
    r=d, d=u;
}
var g=this.annoCtx.graphics.drawRect(r+t.offsetX, 0+t.offsetY, d-r, a.globals.gridHeight+t.offsetY, 0, t.fillColor, t.opacity, 1, t.borderColor, c);
    g.node.classList.add("apexcharts-annotation-rect"), g.attr("clip-path", "url(#gridRectMask".concat(a.globals.cuid, ")")), e.appendChild(g.node), t.id&&g.node.classList.add(t.id);
}
var f="top"===t.label.position?4: a.globals.gridHeight, p=this.annoCtx.graphics.getTextRects(l, parseFloat(t.label.style.fontSize)), x=this.annoCtx.graphics.drawText( {
    x: r+t.label.offsetX, y:f+t.label.offsetY-("vertical"===t.label.orientation?"top"===t.label.position?p.width/2-12:-p.width/2:0), text:l, textAnchor:t.label.textAnchor, fontSize:t.label.style.fontSize, fontFamily:t.label.style.fontFamily, fontWeight:t.label.style.fontWeight, foreColor:t.label.style.color, cssClass:"apexcharts-xaxis-annotation-label ".concat(t.label.style.cssClass, " ").concat(t.id?t.id:"");
}
);
    x.attr( {
    rel: i;
}
), e.appendChild(x.node), this.annoCtx.helpers.setOrientations(t, i);
}}},  {
    key: "drawXAxisAnnotations", value:function() {
    var t=this, e=this.w, i=this.annoCtx.graphics.group( {
    class: "apexcharts-xaxis-annotations"}
);
    return e.config.annotations.xaxis.map((function(e, a) {
    t.addXaxisAnnotation(e, i.node, a);
}
)), i;
}}]), t;
}(), ps=function() {
    function t(e) {
    Ja(this, t), this.ctx=e, this.w=e.w;
}
return ts(t, [ {
    key: "getStackedSeriesTotals", value:function() {
    var t=this.w, e=[];
    if(0===t.globals.series.length)return e;
    for(var i=0;
    i<t.globals.series[t.globals.maxValsInArrayIndex].length;
    i++) {
    for(var a=0, s=0;
    s<t.globals.series.length;
    s++)void 0!==t.globals.series[s][i]&&(a+=t.globals.series[s][i]);
    e.push(a);
}
return t.globals.stackedSeriesTotals=e, e;
}},  {
    key: "getSeriesTotalByIndex", value:function() {
    var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]: null;
    return null===t?this.w.config.series.reduce((function(t, e) {
    return t+e;
}
), 0): this.w.globals.series[t].reduce((function(t, e) {
    return t+e;
}
), 0);
}},  {
    key: "isSeriesNull", value:function() {
    var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]: null;
    return 0===(null===t?this.w.config.series.filter((function(t) {
    return null!==t;
}
)): this.w.config.series[t].data.filter((function(t) {
    return null!==t;
}
))).length;
}},  {
    key: "seriesHaveSameValues", value:function(t) {
    return this.w.globals.series[t].every((function(t, e, i) {
    return t===i[0];
}
));
}},  {
    key: "getCategoryLabels", value:function(t) {
    var e=this.w, i=t.slice();
    return e.config.xaxis.convertedCatToNumeric&&(i=t.map((function(t, i) {
    return e.config.xaxis.labels.formatter(t-e.globals.minX+1);
}
))), i;
}},  {
    key: "getLargestSeries", value:function() {
    var t=this.w;
    t.globals.maxValsInArrayIndex=t.globals.series.map((function(t) {
    return t.length;
}
)).indexOf(Math.max.apply(Math, t.globals.series.map((function(t) {
    return t.length;
}
))));
}},  {
    key: "getLargestMarkerSize", value:function() {
    var t=this.w, e=0;
    return t.globals.markers.size.forEach((function(t) {
    e=Math.max(e, t);
}
)), t.globals.markers.largestSize=e, e;
}},  {
    key: "getSeriesTotals", value:function() {
    var t=this.w;
    t.globals.seriesTotals=t.globals.series.map((function(t, e) {
    var i=0;
    if(Array.isArray(t))for(var a=0;
    a<t.length;
    a++)i+=t[a];
    else i+=t;
    return i;
}
));
}},  {
    key: "getSeriesTotalsXRange", value:function(t, e) {
    var i=this.w;
    return i.globals.series.map((function(a, s) {
    for(var n=0, o=0;
    o<a.length;
    o++)i.globals.seriesX[s][o]>t&&i.globals.seriesX[s][o]<e&&(n+=a[o]);
    return n;
}
));
}},  {
    key: "getPercentSeries", value:function() {
    var t=this.w;
    t.globals.seriesPercent=t.globals.series.map((function(e, i) {
    var a=[];
    if(Array.isArray(e))for(var s=0;
    s<e.length;
    s++) {
    var n=t.globals.stackedSeriesTotals[s], o=0;
    n&&(o=100*e[s]/n), a.push(o);
}
else {
    var r=100*e/t.globals.seriesTotals.reduce((function(t, e) {
    return t+e;
}
), 0);
    a.push(r);
}
return a;
}));
}},  {
    key: "getCalculatedRatios", value:function() {
    var t, e, i, a, s=this.w.globals, n=[], o=0, r=[], l=.1, c=0;
    if(s.yRange=[], s.isMultipleYAxis)for(var h=0;
    h<s.minYArr.length;
    h++)s.yRange.push(Math.abs(s.minYArr[h]-s.maxYArr[h])), r.push(0);
    else s.yRange.push(Math.abs(s.minY-s.maxY));
    s.xRange=Math.abs(s.maxX-s.minX), s.zRange=Math.abs(s.maxZ-s.minZ);
    for(var d=0;
    d<s.yRange.length;
    d++)n.push(s.yRange[d]/s.gridHeight);
    if(e=s.xRange/s.gridWidth, i=Math.abs(s.initialMaxX-s.initialMinX)/s.gridWidth, t=s.yRange/s.gridWidth, a=s.xRange/s.gridHeight, (o=s.zRange/s.gridHeight*16)||(o=1), s.minY!==Number.MIN_VALUE&&0!==Math.abs(s.minY)&&(s.hasNegs=!0), s.isMultipleYAxis) {
    r=[];
    for(var u=0;
    u<n.length;
    u++)r.push(-s.minYArr[u]/n[u]);
}
else r.push(-s.minY/n[0]), s.minY!==Number.MIN_VALUE&&0!==Math.abs(s.minY)&&(l=-s.minY/t, c=s.minX/e);
    return {
    yRatio: n, invertedYRatio:t, zRatio:o, xRatio:e, initialXRatio:i, invertedXRatio:a, baseLineInvertedY:l, baseLineY:r, baseLineX:c;
}
}},  {
    key: "getLogSeries", value:function(t) {
    var e=this, i=this.w;
    return i.globals.seriesLog=t.map((function(t, a) {
    return i.config.yaxis[a]&&i.config.yaxis[a].logarithmic?t.map((function(t) {
    return null===t?null: e.getLogVal(t, a);
}
)):t;
})), i.globals.invalidLogScale?t:i.globals.seriesLog;
}},  {
    key: "getLogVal", value:function(t, e) {
    var i=this.w, a=(Math.log(t)-Math.log(i.globals.minYArr[e]))/(Math.log(i.globals.maxYArr[e])-Math.log(i.globals.minYArr[e]));
    return isNaN(a)?t: a;
}
},  {
    key: "getLogYRatios", value:function(t) {
    var e=this, i=this.w, a=this.w.globals;
    return a.yLogRatio=t.slice(), a.logYRange=a.yRange.map((function(t, s) {
    if(i.config.yaxis[s]&&e.w.config.yaxis[s].logarithmic) {
    var n, o=-Number.MAX_VALUE, r=Number.MIN_VALUE;
    return a.seriesLog.forEach((function(t, e) {
    t.forEach((function(t) {
    i.config.yaxis[e]&&i.config.yaxis[e].logarithmic&&(o=Math.max(t, o), r=Math.min(t, r));
}
));
})), n=Math.pow(a.yRange[s], Math.abs(r-o)/a.yRange[s]), a.yLogRatio[s]=n/a.gridHeight, n;
}})), a.invalidLogScale?t.slice(): a.yLogRatio;
}}], [ {
    key: "checkComboSeries", value:function(t) {
    var e=!1, i=0, a=0;
    return t.length&&void 0!==t[0].type&&t.forEach((function(t) {
    "bar"!==t.type&&"column"!==t.type&&"candlestick"!==t.type&&"boxPlot"!==t.type||i++, void 0!==t.type&&a++}
)), a>0&&(e=!0),  {
    comboBarCount: i, comboCharts:e;
}
}},  {
    key: "extendArrayProps", value:function(t, e, i) {
    return e.yaxis&&(e=t.extendYAxis(e, i)), e.annotations&&(e.annotations.yaxis&&(e=t.extendYAxisAnnotations(e)), e.annotations.xaxis&&(e=t.extendXAxisAnnotations(e)), e.annotations.points&&(e=t.extendPointAnnotations(e))), e;
}
}]), t;
}(), xs=function() {
    function t(e) {
    Ja(this, t), this.w=e.w, this.annoCtx=e;
}
return ts(t, [ {
    key: "addYaxisAnnotation", value:function(t, e, i) {
    var a, s=this.w, n=t.strokeDashArray, o=this._getY1Y2("y1", t), r=t.label.text;
    if(null===t.y2||void 0===t.y2) {
    var l=this.annoCtx.graphics.drawLine(0+t.offsetX, o+t.offsetY, this._getYAxisAnnotationWidth(t), o+t.offsetY, t.borderColor, n, t.borderWidth);
    e.appendChild(l.node), t.id&&l.node.classList.add(t.id);
}
else {
    if((a=this._getY1Y2("y2", t))>o) {
    var c=o;
    o=a, a=c;
}
var h=this.annoCtx.graphics.drawRect(0+t.offsetX, a+t.offsetY, this._getYAxisAnnotationWidth(t), o-a, 0, t.fillColor, t.opacity, 1, t.borderColor, n);
    h.node.classList.add("apexcharts-annotation-rect"), h.attr("clip-path", "url(#gridRectMask".concat(s.globals.cuid, ")")), e.appendChild(h.node), t.id&&h.node.classList.add(t.id);
}
var d="right"===t.label.position?s.globals.gridWidth: 0, u=this.annoCtx.graphics.drawText( {
    x: d+t.label.offsetX, y:(null!=a?a:o)+t.label.offsetY-3, text:r, textAnchor:t.label.textAnchor, fontSize:t.label.style.fontSize, fontFamily:t.label.style.fontFamily, fontWeight:t.label.style.fontWeight, foreColor:t.label.style.color, cssClass:"apexcharts-yaxis-annotation-label ".concat(t.label.style.cssClass, " ").concat(t.id?t.id:"");
}
);
    u.attr( {
    rel: i;
}
), e.appendChild(u.node);
}},  {
    key: "_getY1Y2", value:function(t, e) {
    var i, a="y1"===t?e.y: e.y2, s=this.w;
    if(this.annoCtx.invertAxis) {
    var n=s.globals.labels.indexOf(a);
    s.config.xaxis.convertedCatToNumeric&&(n=s.globals.categoryLabels.indexOf(a));
    var o=s.globals.dom.baseEl.querySelector(".apexcharts-yaxis-texts-g text: nth-child("+(n+1)+")");
    o&&(i=parseFloat(o.getAttribute("y")));
}
else {
    var r;
    r=s.config.yaxis[e.yAxisIndex].logarithmic?(a=new ps(this.annoCtx.ctx).getLogVal(a, e.yAxisIndex))/s.globals.yLogRatio[e.yAxisIndex]: (a-s.globals.minYArr[e.yAxisIndex])/(s.globals.yRange[e.yAxisIndex]/s.globals.gridHeight), i=s.globals.gridHeight-r, s.config.yaxis[e.yAxisIndex]&&s.config.yaxis[e.yAxisIndex].reversed&&(i=r);
}
return i;
}},  {
    key: "_getYAxisAnnotationWidth", value:function(t) {
    var e=this.w;
    return e.globals.gridWidth, (t.width.indexOf("%")>-1?e.globals.gridWidth*parseInt(t.width, 10)/100: parseInt(t.width, 10))+t.offsetX;
}
},  {
    key: "drawYAxisAnnotations", value:function() {
    var t=this, e=this.w, i=this.annoCtx.graphics.group( {
    class: "apexcharts-yaxis-annotations"}
);
    return e.config.annotations.yaxis.map((function(e, a) {
    t.addYaxisAnnotation(e, i.node, a);
}
)), i;
}}]), t;
}(), ms=function() {
    function t(e) {
    Ja(this, t), this.w=e.w, this.annoCtx=e;
}
return ts(t, [ {
    key: "addPointAnnotation", value:function(t, e, i) {
    var a=this.w, s=0, n=0, o=0;
    this.annoCtx.invertAxis&&console.warn("Point annotation is not supported in horizontal bar charts.");
    var r=parseFloat(t.y);
    if("string"==typeof t.x||"category"===a.config.xaxis.type||a.config.xaxis.convertedCatToNumeric) {
    var l=a.globals.labels.indexOf(t.x);
    a.config.xaxis.convertedCatToNumeric&&(l=a.globals.categoryLabels.indexOf(t.x)), s=this.annoCtx.helpers.getStringX(t.x), null===t.y&&(r=a.globals.series[t.seriesIndex][l]);
}
else s=(t.x-a.globals.minX)/(a.globals.xRange/a.globals.gridWidth);
    for(var c, h=[], d=0, u=0;
    u<=t.seriesIndex;
    u++) {
    var g=a.config.yaxis[u].seriesName;
    if(g)for(var f=u+1;
    f<=t.seriesIndex;
    f++)a.config.yaxis[f].seriesName===g&&-1===h.indexOf(g)&&(d++, h.push(g));
}
if(a.config.yaxis[t.yAxisIndex].logarithmic)c=(r=new ps(this.annoCtx.ctx).getLogVal(r, t.yAxisIndex))/a.globals.yLogRatio[t.yAxisIndex];
    else {
    var p=t.yAxisIndex+d;
    c=(r-a.globals.minYArr[p])/(a.globals.yRange[p]/a.globals.gridHeight);
}
if(n=a.globals.gridHeight-c-parseFloat(t.label.style.fontSize)-t.marker.size, o=a.globals.gridHeight-c, a.config.yaxis[t.yAxisIndex]&&a.config.yaxis[t.yAxisIndex].reversed&&(n=c+parseFloat(t.label.style.fontSize)+t.marker.size, o=c), cs.isNumber(s)) {
    var x= {
    pSize: t.marker.size, pointStrokeWidth:t.marker.strokeWidth, pointFillColor:t.marker.fillColor, pointStrokeColor:t.marker.strokeColor, shape:t.marker.shape, pRadius:t.marker.radius, class:"apexcharts-point-annotation-marker ".concat(t.marker.cssClass, " ").concat(t.id?t.id:"");
}
, m=this.annoCtx.graphics.drawMarker(s+t.marker.offsetX, o+t.marker.offsetY, x);
    e.appendChild(m.node);
    var b=t.label.text?t.label.text: "", v=this.annoCtx.graphics.drawText( {
    x: s+t.label.offsetX, y:n+t.label.offsetY, text:b, textAnchor:t.label.textAnchor, fontSize:t.label.style.fontSize, fontFamily:t.label.style.fontFamily, fontWeight:t.label.style.fontWeight, foreColor:t.label.style.color, cssClass:"apexcharts-point-annotation-label ".concat(t.label.style.cssClass, " ").concat(t.id?t.id:"");
}
);
    if(v.attr( {
    rel: i;
}
), e.appendChild(v.node), t.customSVG.SVG) {
    var y=this.annoCtx.graphics.group( {
    class: "apexcharts-point-annotations-custom-svg "+t.customSVG.cssClass;
}
);
    y.attr( {
    transform: "translate(".concat(s+t.customSVG.offsetX, ",  ").concat(n+t.customSVG.offsetY, ")");
}
), y.node.innerHTML=t.customSVG.SVG, e.appendChild(y.node);
}if(t.image.path) {
    var w=t.image.width?t.image.width: 20, k=t.image.height?t.image.height:20;
    m=this.annoCtx.addImage( {
    x: s+t.image.offsetX-w/2, y:n+t.image.offsetY-k/2, width:w, height:k, path:t.image.path, appendTo:".apexcharts-point-annotations"}
);
}t.mouseEnter&&m.node.addEventListener("mouseenter", t.mouseEnter.bind(this, t)), t.mouseLeave&&m.node.addEventListener("mouseleave", t.mouseLeave.bind(this, t));
}}},  {
    key: "drawPointAnnotations", value:function() {
    var t=this, e=this.w, i=this.annoCtx.graphics.group( {
    class: "apexcharts-point-annotations"}
);
    return e.config.annotations.points.map((function(e, a) {
    t.addPointAnnotation(e, i.node, a);
}
)), i;
}}]), t;
}(), bs= {
    name: "en", options: {
    months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], shortMonths:["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], days:["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], shortDays:["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], toolbar: {
    exportToSVG: "Download SVG", exportToPNG:"Download PNG", exportToCSV:"Download CSV", menu:"Menu", selection:"Selection", selectionZoom:"Selection Zoom", zoomIn:"Zoom In", zoomOut:"Zoom Out", pan:"Panning", reset:"Reset Zoom"}
}}, vs=function() {
    function t() {
    Ja(this, t), this.yAxis= {
    show: !0, showAlways:!1, showForNullSeries:!0, seriesName:void 0, opposite:!1, reversed:!1, logarithmic:!1, logBase:10, tickAmount:void 0, forceNiceScale:!1, max:void 0, min:void 0, floating:!1, decimalsInFloat:void 0, labels: {
    show: !0, minWidth:0, maxWidth:160, offsetX:0, offsetY:0, align:void 0, rotate:0, padding:20, style: {
    colors: [], fontSize:"11px", fontWeight:400, fontFamily:void 0, cssClass:""}
, formatter:void 0;
}, axisBorder: {
    show: !1, color:"#e0e0e0", width:1, offsetX:0, offsetY:0;
}
, axisTicks: {
    show: !1, color:"#e0e0e0", width:6, offsetX:0, offsetY:0;
}
, title: {
    text: void 0, rotate:-90, offsetY:0, offsetX:0, style: {
    color: void 0, fontSize:"11px", fontWeight:900, fontFamily:void 0, cssClass:""}
}, tooltip: {
    enabled: !1, offsetX:0;
}
, crosshairs: {
    show: !0, position:"front", stroke: {
    color: "#b6b6b6", width:1, dashArray:0;
}
}}, this.pointAnnotation= {
    id: void 0, x:0, y:null, yAxisIndex:0, seriesIndex:0, mouseEnter:void 0, mouseLeave:void 0, marker: {
    size: 4, fillColor:"#fff", strokeWidth:2, strokeColor:"#333", shape:"circle", offsetX:0, offsetY:0, radius:2, cssClass:""}
, label: {
    borderColor: "#c2c2c2", borderWidth:1, borderRadius:2, text:void 0, textAnchor:"middle", offsetX:0, offsetY:0, mouseEnter:void 0, mouseLeave:void 0, style: {
    background: "#fff", color:void 0, fontSize:"11px", fontFamily:void 0, fontWeight:400, cssClass:"", padding: {
    left: 5, right:5, top:2, bottom:2;
}
}}, customSVG: {
    SVG: void 0, cssClass:void 0, offsetX:0, offsetY:0;
}
, image: {
    path: void 0, width:20, height:20, offsetX:0, offsetY:0;
}
}, this.yAxisAnnotation= {
    id: void 0, y:0, y2:null, strokeDashArray:1, fillColor:"#c2c2c2", borderColor:"#c2c2c2", borderWidth:1, opacity:.3, offsetX:0, offsetY:0, width:"100%", yAxisIndex:0, label: {
    borderColor: "#c2c2c2", borderWidth:1, borderRadius:2, text:void 0, textAnchor:"end", position:"right", offsetX:0, offsetY:-3, mouseEnter:void 0, mouseLeave:void 0, style: {
    background: "#fff", color:void 0, fontSize:"11px", fontFamily:void 0, fontWeight:400, cssClass:"", padding: {
    left: 5, right:5, top:2, bottom:2;
}
}}}, this.xAxisAnnotation= {
    id: void 0, x:0, x2:null, strokeDashArray:1, fillColor:"#c2c2c2", borderColor:"#c2c2c2", borderWidth:1, opacity:.3, offsetX:0, offsetY:0, label: {
    borderColor: "#c2c2c2", borderWidth:1, borderRadius:2, text:void 0, textAnchor:"middle", orientation:"vertical", position:"top", offsetX:0, offsetY:0, mouseEnter:void 0, mouseLeave:void 0, style: {
    background: "#fff", color:void 0, fontSize:"11px", fontFamily:void 0, fontWeight:400, cssClass:"", padding: {
    left: 5, right:5, top:2, bottom:2;
}
}}}, this.text= {
    x: 0, y:0, text:"", textAnchor:"start", foreColor:void 0, fontSize:"13px", fontFamily:void 0, fontWeight:400, appendTo:".apexcharts-annotations", backgroundColor:"transparent", borderColor:"#c2c2c2", borderRadius:0, borderWidth:0, paddingLeft:4, paddingRight:4, paddingTop:2, paddingBottom:2;
}
}return ts(t, [ {
    key: "init", value:function() {
    return {
    annotations:  {
    position: "front", yaxis:[this.yAxisAnnotation], xaxis:[this.xAxisAnnotation], points:[this.pointAnnotation], texts:[], images:[], shapes:[];
}
, chart: {
    animations:  {
    enabled: !0, easing:"easeinout", speed:800, animateGradually: {
    delay: 150, enabled:!0;
}
, dynamicAnimation: {
    enabled: !0, speed:350;
}
}, background:"transparent", locales:[bs], defaultLocale:"en", dropShadow: {
    enabled: !1, enabledOnSeries:void 0, top:2, left:2, blur:4, color:"#000", opacity:.35;
}
, events: {
    animationEnd: void 0, beforeMount:void 0, mounted:void 0, updated:void 0, click:void 0, mouseMove:void 0, mouseLeave:void 0, legendClick:void 0, markerClick:void 0, selection:void 0, dataPointSelection:void 0, dataPointMouseEnter:void 0, dataPointMouseLeave:void 0, beforeZoom:void 0, beforeResetZoom:void 0, zoomed:void 0, scrolled:void 0, brushScrolled:void 0;
}
, foreColor:"#373d3f", fontFamily:"Helvetica,  Arial,  sans-serif", height:"auto", parentHeightOffset:15, redrawOnParentResize:!0, redrawOnWindowResize:!0, id:void 0, group:void 0, offsetX:0, offsetY:0, selection: {
    enabled: !1, type:"x", fill: {
    color: "#24292e", opacity:.1;
}
, stroke: {
    width: 1, color:"#24292e", opacity:.4, dashArray:3;
}
, xaxis: {
    min: void 0, max:void 0;
}
, yaxis: {
    min: void 0, max:void 0;
}
}, sparkline: {
    enabled: !1;
}
, brush: {
    enabled: !1, autoScaleYaxis:!0, target:void 0;
}
, stacked:!1, stackType:"normal", toolbar: {
    show: !0, offsetX:0, offsetY:0, tools: {
    download: !0, selection:!0, zoom:!0, zoomin:!0, zoomout:!0, pan:!0, reset:!0, customIcons:[];
}
, export: {
    csv:  {
    filename: void 0, columnDelimiter:", ", headerCategory:"category", headerValue:"value", dateFormatter:function(t) {
    return new Date(t).toDateString();
}
}, png:  {
    filename: void 0;
}
, svg: {
    filename: void 0;
}
}, autoSelected:"zoom"}, type:"line", width:"100%", zoom: {
    enabled: !0, type:"x", autoScaleYaxis:!1, zoomedArea: {
    fill:  {
    color: "#90CAF9", opacity:.4;
}
, stroke: {
    color: "#0D47A1", opacity:.4, width:1;
}
}}}, plotOptions: {
    area:  {
    fillTo: "origin"}
, bar: {
    horizontal: !1, columnWidth:"70%", barHeight:"70%", distributed:!1, borderRadius:0, rangeBarOverlap:!0, rangeBarGroupRows:!1, colors: {
    ranges: [], backgroundBarColors:[], backgroundBarOpacity:1, backgroundBarRadius:0;
}
, dataLabels: {
    position: "top", maxItems:100, hideOverflowingLabels:!0, orientation:"horizontal"}
}, bubble: {
    minBubbleRadius: void 0, maxBubbleRadius:void 0;
}
, candlestick: {
    colors:  {
    upward: "#00B746", downward:"#EF403C"}
, wick: {
    useFillColor: !0;
}
}, boxPlot: {
    colors:  {
    upper: "#00E396", lower:"#008FFB"}
}, heatmap: {
    radius: 2, enableShades:!0, shadeIntensity:.5, reverseNegativeShade:!1, distributed:!1, useFillColorAsStroke:!1, colorScale: {
    inverse: !1, ranges:[], min:void 0, max:void 0;
}
}, treemap: {
    enableShades: !0, shadeIntensity:.5, distributed:!1, reverseNegativeShade:!1, useFillColorAsStroke:!1, colorScale: {
    inverse: !1, ranges:[], min:void 0, max:void 0;
}
}, radialBar: {
    inverseOrder: !1, startAngle:0, endAngle:360, offsetX:0, offsetY:0, hollow: {
    margin: 5, size:"50%", background:"transparent", image:void 0, imageWidth:150, imageHeight:150, imageOffsetX:0, imageOffsetY:0, imageClipped:!0, position:"front", dropShadow: {
    enabled: !1, top:0, left:0, blur:3, color:"#000", opacity:.5;
}
}, track: {
    show: !0, startAngle:void 0, endAngle:void 0, background:"#f2f2f2", strokeWidth:"97%", opacity:1, margin:5, dropShadow: {
    enabled: !1, top:0, left:0, blur:3, color:"#000", opacity:.5;
}
}, dataLabels: {
    show: !0, name: {
    show: !0, fontSize:"16px", fontFamily:void 0, fontWeight:600, color:void 0, offsetY:0, formatter:function(t) {
    return t;
}
}, value:  {
    show: !0, fontSize:"14px", fontFamily:void 0, fontWeight:400, color:void 0, offsetY:16, formatter:function(t) {
    return t+"%"}
}, total:  {
    show: !1, label:"Total", fontSize:"16px", fontWeight:600, fontFamily:void 0, color:void 0, formatter:function(t) {
    return t.globals.seriesTotals.reduce((function(t, e) {
    return t+e;
}
), 0)/t.globals.series.length+"%"}}}}, pie:  {
    customScale: 1, offsetX:0, offsetY:0, startAngle:0, endAngle:360, expandOnClick:!0, dataLabels: {
    offset: 0, minAngleToShowLabel:10;
}
, donut: {
    size: "65%", background:"transparent", labels: {
    show: !1, name: {
    show: !0, fontSize:"16px", fontFamily:void 0, fontWeight:600, color:void 0, offsetY:-10, formatter:function(t) {
    return t;
}
}, value:  {
    show: !0, fontSize:"20px", fontFamily:void 0, fontWeight:400, color:void 0, offsetY:10, formatter:function(t) {
    return t;
}
}, total:  {
    show: !1, showAlways:!1, label:"Total", fontSize:"16px", fontWeight:400, fontFamily:void 0, color:void 0, formatter:function(t) {
    return t.globals.seriesTotals.reduce((function(t, e) {
    return t+e;
}
), 0);
}}}}}, polarArea:  {
    rings:  {
    strokeWidth: 1, strokeColor:"#e8e8e8"}
, spokes: {
    strokeWidth: 1, connectorColors:"#e8e8e8"}
}, radar: {
    size: void 0, offsetX:0, offsetY:0, polygons: {
    strokeWidth: 1, strokeColors:"#e8e8e8", connectorColors:"#e8e8e8", fill: {
    colors: void 0;
}
}}}, colors:void 0, dataLabels: {
    enabled: !0, enabledOnSeries:void 0, formatter:function(t) {
    return null!==t?t: ""}
, textAnchor:"middle", distributed:!1, offsetX:0, offsetY:0, style: {
    fontSize: "12px", fontFamily:void 0, fontWeight:600, colors:void 0;
}
, background: {
    enabled: !0, foreColor:"#fff", borderRadius:2, padding:4, opacity:.9, borderWidth:1, borderColor:"#fff", dropShadow: {
    enabled: !1, top:1, left:1, blur:1, color:"#000", opacity:.45;
}
}, dropShadow: {
    enabled: !1, top:1, left:1, blur:1, color:"#000", opacity:.45;
}
}, fill: {
    type: "solid", colors:void 0, opacity:.85, gradient: {
    shade: "dark", type:"horizontal", shadeIntensity:.5, gradientToColors:void 0, inverseColors:!0, opacityFrom:1, opacityTo:1, stops:[0, 50, 100], colorStops:[];
}
, image: {
    src: [], width:void 0, height:void 0;
}
, pattern: {
    style: "squares", width:6, height:6, strokeWidth:2;
}
}, forecastDataPoints: {
    count: 0, fillOpacity:.5, strokeWidth:void 0, dashArray:4;
}
, grid: {
    show: !0, borderColor:"#e0e0e0", strokeDashArray:0, position:"back", xaxis: {
    lines:  {
    show: !1;
}
}, yaxis: {
    lines:  {
    show: !0;
}
}, row: {
    colors: void 0, opacity:.5;
}
, column: {
    colors: void 0, opacity:.5;
}
, padding: {
    top: 0, right:10, bottom:0, left:12;
}
}, labels:[], legend: {
    show: !0, showForSingleSeries:!1, showForNullSeries:!0, showForZeroSeries:!0, floating:!1, position:"bottom", horizontalAlign:"center", inverseOrder:!1, fontSize:"12px", fontFamily:void 0, fontWeight:400, width:void 0, height:void 0, formatter:void 0, tooltipHoverFormatter:void 0, offsetX:-20, offsetY:4, customLegendItems:[], labels: {
    colors: void 0, useSeriesColors:!1;
}
, markers: {
    width: 12, height:12, strokeWidth:0, fillColors:void 0, strokeColor:"#fff", radius:12, customHTML:void 0, offsetX:0, offsetY:0, onClick:void 0;
}
, itemMargin: {
    horizontal: 5, vertical:2;
}
, onItemClick: {
    toggleDataSeries: !0;
}
, onItemHover: {
    highlightDataSeries: !0;
}
}, markers: {
    discrete: [], size:0, colors:void 0, strokeColors:"#fff", strokeWidth:2, strokeOpacity:.9, strokeDashArray:0, fillOpacity:1, shape:"circle", width:8, height:8, radius:2, offsetX:0, offsetY:0, onClick:void 0, onDblClick:void 0, showNullDataPoints:!0, hover: {
    size: void 0, sizeOffset:3;
}
}, noData: {
    text: void 0, align:"center", verticalAlign:"middle", offsetX:0, offsetY:0, style: {
    color: void 0, fontSize:"14px", fontFamily:void 0;
}
}, responsive:[], series:void 0, states: {
    normal:  {
    filter:  {
    type: "none", value:0;
}
}, hover: {
    filter:  {
    type: "lighten", value:.1;
}
}, active: {
    allowMultipleDataPointsSelection: !1, filter: {
    type: "darken", value:.5;
}
}}, title: {
    text: void 0, align:"left", margin:5, offsetX:0, offsetY:0, floating:!1, style: {
    fontSize: "14px", fontWeight:900, fontFamily:void 0, color:void 0;
}
}, subtitle: {
    text: void 0, align:"left", margin:5, offsetX:0, offsetY:30, floating:!1, style: {
    fontSize: "12px", fontWeight:400, fontFamily:void 0, color:void 0;
}
}, stroke: {
    show: !0, curve:"smooth", lineCap:"butt", width:2, colors:void 0, dashArray:0;
}
, tooltip: {
    enabled: !0, enabledOnSeries:void 0, shared:!0, followCursor:!1, intersect:!1, inverseOrder:!1, custom:void 0, fillSeriesColor:!1, theme:"light", style: {
    fontSize: "12px", fontFamily:void 0;
}
, onDatasetHover: {
    highlightDataSeries: !1;
}
, x: {
    show: !0, format:"dd MMM", formatter:void 0;
}
, y: {
    formatter: void 0, title: {
    formatter: function(t) {
    return t?t+":  ":""}
}}, z: {
    formatter: void 0, title:"Size: "}
, marker: {
    show: !0, fillColors:void 0;
}
, items: {
    display: "flex"}
, fixed: {
    enabled: !1, position:"topRight", offsetX:0, offsetY:0;
}
}, xaxis: {
    type: "category", categories:[], convertedCatToNumeric:!1, offsetX:0, offsetY:0, overwriteCategories:void 0, labels: {
    show: !0, rotate:-45, rotateAlways:!1, hideOverlappingLabels:!0, trim:!1, minHeight:void 0, maxHeight:120, showDuplicates:!0, style: {
    colors: [], fontSize:"12px", fontWeight:400, fontFamily:void 0, cssClass:""}
, offsetX:0, offsetY:0, format:void 0, formatter:void 0, datetimeUTC:!0, datetimeFormatter: {
    year: "yyyy", month:"MMM 'yy", day:"dd MMM", hour:"HH:mm", minute:"HH:mm:ss", second:"HH:mm:ss"}
}, axisBorder: {
    show: !0, color:"#e0e0e0", width:"100%", height:1, offsetX:0, offsetY:0;
}
, axisTicks: {
    show: !0, color:"#e0e0e0", height:6, offsetX:0, offsetY:0;
}
, tickAmount:void 0, tickPlacement:"on", min:void 0, max:void 0, range:void 0, floating:!1, decimalsInFloat:void 0, position:"bottom", title: {
    text: void 0, offsetX:0, offsetY:0, style: {
    color: void 0, fontSize:"12px", fontWeight:900, fontFamily:void 0, cssClass:""}
}, crosshairs: {
    show: !0, width:1, position:"back", opacity:.9, stroke: {
    color: "#b6b6b6", width:1, dashArray:3;
}
, fill: {
    type: "solid", color:"#B1B9C4", gradient: {
    colorFrom: "#D8E3F0", colorTo:"#BED1E6", stops:[0, 100], opacityFrom:.4, opacityTo:.5;
}
}, dropShadow: {
    enabled: !1, left:0, top:0, blur:1, opacity:.4;
}
}, tooltip: {
    enabled: !0, offsetY:0, formatter:void 0, style: {
    fontSize: "12px", fontFamily:void 0;
}
}}, yaxis:this.yAxis, theme: {
    mode: "light", palette:"palette1", monochrome: {
    enabled: !1, color:"#008FFB", shadeTo:"light", shadeIntensity:.65;
}
}}}}]), t;
}(), ys=function() {
    function t(e) {
    Ja(this, t), this.ctx=e, this.w=e.w, this.graphics=new us(this.ctx), this.w.globals.isBarHorizontal&&(this.invertAxis=!0), this.helpers=new gs(this), this.xAxisAnnotations=new fs(this), this.yAxisAnnotations=new xs(this), this.pointsAnnotations=new ms(this), this.w.globals.isBarHorizontal&&this.w.config.yaxis[0].reversed&&(this.inversedReversedAxis=!0), this.xDivision=this.w.globals.gridWidth/this.w.globals.dataPoints;
}
return ts(t, [ {
    key: "drawAxesAnnotations", value:function() {
    var t=this.w;
    if(t.globals.axisCharts) {
    for(var e=this.yAxisAnnotations.drawYAxisAnnotations(), i=this.xAxisAnnotations.drawXAxisAnnotations(), a=this.pointsAnnotations.drawPointAnnotations(), s=t.config.chart.animations.enabled, n=[e, i, a], o=[i.node, e.node, a.node], r=0;
    r<3;
    r++)t.globals.dom.elGraphical.add(n[r]), !s||t.globals.resized||t.globals.dataChanged||"scatter"!==t.config.chart.type&&"bubble"!==t.config.chart.type&&t.globals.dataPoints>1&&o[r].classList.add("apexcharts-element-hidden"), t.globals.delayedElements.push( {
    el: o[r], index:0;
}
);
    this.helpers.annotationsBackground();
}
}},  {
    key: "drawImageAnnos", value:function() {
    var t=this;
    this.w.config.annotations.images.map((function(e, i) {
    t.addImage(e, i);
}
));
}},  {
    key: "drawTextAnnos", value:function() {
    var t=this;
    this.w.config.annotations.texts.map((function(e, i) {
    t.addText(e, i);
}
));
}},  {
    key: "addXaxisAnnotation", value:function(t, e, i) {
    this.xAxisAnnotations.addXaxisAnnotation(t, e, i);
}
},  {
    key: "addYaxisAnnotation", value:function(t, e, i) {
    this.yAxisAnnotations.addYaxisAnnotation(t, e, i);
}
},  {
    key: "addPointAnnotation", value:function(t, e, i) {
    this.pointsAnnotations.addPointAnnotation(t, e, i);
}
},  {
    key: "addText", value:function(t, e) {
    var i=t.x, a=t.y, s=t.text, n=t.textAnchor, o=t.foreColor, r=t.fontSize, l=t.fontFamily, c=t.fontWeight, h=t.cssClass, d=t.backgroundColor, u=t.borderWidth, g=t.strokeDashArray, f=t.borderRadius, p=t.borderColor, x=t.appendTo, m=void 0===x?".apexcharts-annotations": x, b=t.paddingLeft, v=void 0===b?4:b, y=t.paddingRight, w=void 0===y?4:y, k=t.paddingBottom, A=void 0===k?2:k, C=t.paddingTop, S=void 0===C?2:C, E=this.w, L=this.graphics.drawText( {
    x: i, y:a, text:s, textAnchor:n||"start", fontSize:r||"12px", fontWeight:c||"regular", fontFamily:l||E.config.chart.fontFamily, foreColor:o||E.config.chart.foreColor, cssClass:h;
}
), _=E.globals.dom.baseEl.querySelector(m);
    _&&_.appendChild(L.node);
    var M=L.bbox();
    if(s) {
    var T=this.graphics.drawRect(M.x-v, M.y-S, M.width+v+w, M.height+A+S, f, d||"transparent", 1, u, p, g);
    _.insertBefore(T.node, L.node);
}
}},  {
    key: "addImage", value:function(t, e) {
    var i=this.w, a=t.path, s=t.x, n=void 0===s?0: s, o=t.y, r=void 0===o?0:o, l=t.width, c=void 0===l?20:l, h=t.height, d=void 0===h?20:h, u=t.appendTo, g=void 0===u?".apexcharts-annotations":u, f=i.globals.dom.Paper.image(a);
    f.size(c, d).move(n, r);
    var p=i.globals.dom.baseEl.querySelector(g);
    return p&&p.appendChild(f.node), f;
}
},  {
    key: "addXaxisAnnotationExternal", value:function(t, e, i) {
    return this.addAnnotationExternal( {
    params: t, pushToMemory:e, context:i, type:"xaxis", contextMethod:i.addXaxisAnnotation;
}
), i;
}},  {
    key: "addYaxisAnnotationExternal", value:function(t, e, i) {
    return this.addAnnotationExternal( {
    params: t, pushToMemory:e, context:i, type:"yaxis", contextMethod:i.addYaxisAnnotation;
}
), i;
}},  {
    key: "addPointAnnotationExternal", value:function(t, e, i) {
    return void 0===this.invertAxis&&(this.invertAxis=i.w.globals.isBarHorizontal), this.addAnnotationExternal( {
    params: t, pushToMemory:e, context:i, type:"point", contextMethod:i.addPointAnnotation;
}
), i;
}},  {
    key: "addAnnotationExternal", value:function(t) {
    var e=t.params, i=t.pushToMemory, a=t.context, s=t.type, n=t.contextMethod, o=a, r=o.w, l=r.globals.dom.baseEl.querySelector(".apexcharts-".concat(s, "-annotations")), c=l.childNodes.length+1, h=new vs, d=Object.assign( {
}
, "xaxis"===s?h.xAxisAnnotation: "yaxis"===s?h.yAxisAnnotation:h.pointAnnotation), u=cs.extend(d, e);
    switch(s) {
    case"xaxis": this.addXaxisAnnotation(u, l, c);
    break;
    case"yaxis": this.addYaxisAnnotation(u, l, c);
    break;
    case"point": this.addPointAnnotation(u, l, c);
}
var g=r.globals.dom.baseEl.querySelector(".apexcharts-".concat(s, "-annotations .apexcharts-").concat(s, "-annotation-label[rel='").concat(c, "']")), f=this.helpers.addBackgroundToAnno(g, u);
    return f&&l.insertBefore(f.node, g), i&&r.globals.memory.methodsToExec.push( {
    context: o, id:u.id?u.id:cs.randomId(), method:n, label:"addAnnotation", params:e;
}
), a;
}},  {
    key: "clearAnnotations", value:function(t) {
    var e=t.w, i=e.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxis-annotations,  .apexcharts-xaxis-annotations,  .apexcharts-point-annotations");
    e.globals.memory.methodsToExec.map((function(t, i) {
    "addText"!==t.label&&"addAnnotation"!==t.label||e.globals.memory.methodsToExec.splice(i, 1);
}
)), i=cs.listToArray(i), Array.prototype.forEach.call(i, (function(t) {
    for(;
    t.firstChild;
    )t.removeChild(t.firstChild);
}
));
}},  {
    key: "removeAnnotation", value:function(t, e) {
    var i=t.w, a=i.globals.dom.baseEl.querySelectorAll(".".concat(e));
    a&&(i.globals.memory.methodsToExec.map((function(t, a) {
    t.id===e&&i.globals.memory.methodsToExec.splice(a, 1);
}
)), Array.prototype.forEach.call(a, (function(t) {
    t.parentElement.removeChild(t);
}
)));
}}]), t;
}(), ws=function() {
    function t(e) {
    Ja(this, t), this.ctx=e, this.w=e.w, this.opts=null, this.seriesIndex=0;
}
return ts(t, [ {
    key: "clippedImgArea", value:function(t) {
    var e=this.w, i=e.config, a=parseInt(e.globals.gridWidth, 10), s=parseInt(e.globals.gridHeight, 10), n=a>s?a: s, o=t.image, r=0, l=0;
    void 0===t.width&&void 0===t.height?void 0!==i.fill.image.width&&void 0!==i.fill.image.height?(r=i.fill.image.width+1, l=i.fill.image.height): (r=n+1, l=n):(r=t.width, l=t.height);
    var c=document.createElementNS(e.globals.SVGNS, "pattern");
    us.setAttrs(c,  {
    id: t.patternID, patternUnits:t.patternUnits?t.patternUnits:"userSpaceOnUse", width:r+"px", height:l+"px"}
);
    var h=document.createElementNS(e.globals.SVGNS, "image");
    c.appendChild(h), h.setAttributeNS(window.SVG.xlink, "href", o), us.setAttrs(h,  {
    x: 0, y:0, preserveAspectRatio:"none", width:r+"px", height:l+"px"}
), h.style.opacity=t.opacity, e.globals.dom.elDefs.node.appendChild(c);
}},  {
    key: "getSeriesIndex", value:function(t) {
    var e=this.w;
    return("bar"===e.config.chart.type||"rangeBar"===e.config.chart.type)&&e.config.plotOptions.bar.distributed||"heatmap"===e.config.chart.type||"treemap"===e.config.chart.type?this.seriesIndex=t.seriesNumber: this.seriesIndex=t.seriesNumber%e.globals.series.length, this.seriesIndex;
}
},  {
    key: "fillPath", value:function(t) {
    var e=this.w;
    this.opts=t;
    var i, a, s, n=this.w.config;
    this.seriesIndex=this.getSeriesIndex(t);
    var o=this.getFillColors()[this.seriesIndex];
    void 0!==e.globals.seriesColors[this.seriesIndex]&&(o=e.globals.seriesColors[this.seriesIndex]), "function"==typeof o&&(o=o( {
    seriesIndex: this.seriesIndex, dataPointIndex:t.dataPointIndex, value:t.value, w:e;
}
));
    var r=this.getFillType(this.seriesIndex), l=Array.isArray(n.fill.opacity)?n.fill.opacity[this.seriesIndex]: n.fill.opacity;
    t.color&&(o=t.color);
    var c=o;
    if(-1===o.indexOf("rgb")?o.length<9&&(c=cs.hexToRgba(o, l)): o.indexOf("rgba")>-1&&(l=cs.getOpacityFromRGBA(o)), t.opacity&&(l=t.opacity), "pattern"===r&&(a=this.handlePatternFill(a, o, l, c)), "gradient"===r&&(s=this.handleGradientFill(o, l, this.seriesIndex)), "image"===r) {
    var h=n.fill.image.src, d=t.patternID?t.patternID: "";
    this.clippedImgArea( {
    opacity: l, image:Array.isArray(h)?t.seriesNumber<h.length?h[t.seriesNumber]:h[0]:h, width:t.width?t.width:void 0, height:t.height?t.height:void 0, patternUnits:t.patternUnits, patternID:"pattern".concat(e.globals.cuid).concat(t.seriesNumber+1).concat(d);
}
), i="url(#pattern".concat(e.globals.cuid).concat(t.seriesNumber+1).concat(d, ")");
}else i="gradient"===r?s:"pattern"===r?a:c;
    return t.solid&&(i=c), i;
}
},  {
    key: "getFillType", value:function(t) {
    var e=this.w;
    return Array.isArray(e.config.fill.type)?e.config.fill.type[t]: e.config.fill.type;
}
},  {
    key: "getFillColors", value:function() {
    var t=this.w, e=t.config, i=this.opts, a=[];
    return t.globals.comboCharts?"line"===t.config.series[this.seriesIndex].type?Array.isArray(t.globals.stroke.colors)?a=t.globals.stroke.colors: a.push(t.globals.stroke.colors):Array.isArray(t.globals.fill.colors)?a=t.globals.fill.colors:a.push(t.globals.fill.colors):"line"===e.chart.type?Array.isArray(t.globals.stroke.colors)?a=t.globals.stroke.colors:a.push(t.globals.stroke.colors):Array.isArray(t.globals.fill.colors)?a=t.globals.fill.colors:a.push(t.globals.fill.colors), void 0!==i.fillColors&&(a=[], Array.isArray(i.fillColors)?a=i.fillColors.slice():a.push(i.fillColors)), a;
}
},  {
    key: "handlePatternFill", value:function(t, e, i, a) {
    var s=this.w.config, n=this.opts, o=new us(this.ctx), r=void 0===s.fill.pattern.strokeWidth?Array.isArray(s.stroke.width)?s.stroke.width[this.seriesIndex]: s.stroke.width:Array.isArray(s.fill.pattern.strokeWidth)?s.fill.pattern.strokeWidth[this.seriesIndex]:s.fill.pattern.strokeWidth, l=e;
    return Array.isArray(s.fill.pattern.style)?void 0!==s.fill.pattern.style[n.seriesNumber]?o.drawPattern(s.fill.pattern.style[n.seriesNumber], s.fill.pattern.width, s.fill.pattern.height, l, r, i): a:o.drawPattern(s.fill.pattern.style, s.fill.pattern.width, s.fill.pattern.height, l, r, i);
}
},  {
    key: "handleGradientFill", value:function(t, e, i) {
    var a, s=this.w.config, n=this.opts, o=new us(this.ctx), r=new cs, l=s.fill.gradient.type, c=t, h=void 0===s.fill.gradient.opacityFrom?e: Array.isArray(s.fill.gradient.opacityFrom)?s.fill.gradient.opacityFrom[i]:s.fill.gradient.opacityFrom;
    c.indexOf("rgba")>-1&&(h=cs.getOpacityFromRGBA(c));
    var d=void 0===s.fill.gradient.opacityTo?e: Array.isArray(s.fill.gradient.opacityTo)?s.fill.gradient.opacityTo[i]:s.fill.gradient.opacityTo;
    if(void 0===s.fill.gradient.gradientToColors||0===s.fill.gradient.gradientToColors.length)a="dark"===s.fill.gradient.shade?r.shadeColor(-1*parseFloat(s.fill.gradient.shadeIntensity), t.indexOf("rgb")>-1?cs.rgb2hex(t): t):r.shadeColor(parseFloat(s.fill.gradient.shadeIntensity), t.indexOf("rgb")>-1?cs.rgb2hex(t):t);
    else if(s.fill.gradient.gradientToColors[n.seriesNumber]) {
    var u=s.fill.gradient.gradientToColors[n.seriesNumber];
    a=u, u.indexOf("rgba")>-1&&(d=cs.getOpacityFromRGBA(u));
}
else a=t;
    if(s.fill.gradient.inverseColors) {
    var g=c;
    c=a, a=g;
}
return c.indexOf("rgb")>-1&&(c=cs.rgb2hex(c)), a.indexOf("rgb")>-1&&(a=cs.rgb2hex(a)), o.drawGradient(l, c, a, h, d, n.size, s.fill.gradient.stops, s.fill.gradient.colorStops, i);
}}]), t;
}(), ks=function() {
    function t(e, i) {
    Ja(this, t), this.ctx=e, this.w=e.w;
}
return ts(t, [ {
    key: "setGlobalMarkerSize", value:function() {
    var t=this.w;
    if(t.globals.markers.size=Array.isArray(t.config.markers.size)?t.config.markers.size: [t.config.markers.size], t.globals.markers.size.length>0) {
    if(t.globals.markers.size.length<t.globals.series.length+1)for(var e=0;
    e<=t.globals.series.length;
    e++)void 0===t.globals.markers.size[e]&&t.globals.markers.size.push(t.globals.markers.size[0]);
}
else t.globals.markers.size=t.config.series.map((function(e) {
    return t.config.markers.size;
}
));
}},  {
    key: "plotChartMarkers", value:function(t, e, i, a) {
    var s, n=arguments.length>4&&void 0!==arguments[4]&&arguments[4], o=this.w, r=e, l=t, c=null, h=new us(this.ctx);
    if((o.globals.markers.size[e]>0||n)&&(c=h.group( {
    class: n?"":"apexcharts-series-markers"}
)).attr("clip-path", "url(#gridRectMarkerMask".concat(o.globals.cuid, ")")), Array.isArray(l.x))for(var d=0;
    d<l.x.length;
    d++) {
    var u=i;
    1===i&&0===d&&(u=0), 1===i&&1===d&&(u=1);
    var g="apexcharts-marker";
    "line"!==o.config.chart.type&&"area"!==o.config.chart.type||o.globals.comboCharts||o.config.tooltip.intersect||(g+=" no-pointer-events");
    var f=Array.isArray(o.config.markers.size)?o.globals.markers.size[e]>0: o.config.markers.size>0;
    if(f||n) {
    cs.isNumber(l.y[d])?g+=" w".concat(cs.randomId()): g="apexcharts-nullpoint";
    var p=this.getMarkerConfig( {
    cssClass: g, seriesIndex:e, dataPointIndex:u;
}
);
    o.config.series[r].data[u]&&(o.config.series[r].data[u].fillColor&&(p.pointFillColor=o.config.series[r].data[u].fillColor), o.config.series[r].data[u].strokeColor&&(p.pointStrokeColor=o.config.series[r].data[u].strokeColor)), a&&(p.pSize=a), (s=h.drawMarker(l.x[d], l.y[d], p)).attr("rel", u), s.attr("j", u), s.attr("index", e), s.node.setAttribute("default-marker-size", p.pSize);
    var x=new ds(this.ctx);
    x.setSelectionFilter(s, e, u), this.addEvents(s), c&&c.add(s);
}
else void 0===o.globals.pointsArray[e]&&(o.globals.pointsArray[e]=[]), o.globals.pointsArray[e].push([l.x[d], l.y[d]]);
}return c;
}},  {
    key: "getMarkerConfig", value:function(t) {
    var e=t.cssClass, i=t.seriesIndex, a=t.dataPointIndex, s=void 0===a?null: a, n=t.finishRadius, o=void 0===n?null:n, r=this.w, l=this.getMarkerStyle(i), c=r.globals.markers.size[i], h=r.config.markers;
    return null!==s&&h.discrete.length&&h.discrete.map((function(t) {
    t.seriesIndex===i&&t.dataPointIndex===s&&(l.pointStrokeColor=t.strokeColor, l.pointFillColor=t.fillColor, c=t.size, l.pointShape=t.shape);
}
)),  {
    pSize: null===o?c:o, pRadius:h.radius, width:Array.isArray(h.width)?h.width[i]:h.width, height:Array.isArray(h.height)?h.height[i]:h.height, pointStrokeWidth:Array.isArray(h.strokeWidth)?h.strokeWidth[i]:h.strokeWidth, pointStrokeColor:l.pointStrokeColor, pointFillColor:l.pointFillColor, shape:l.pointShape||(Array.isArray(h.shape)?h.shape[i]:h.shape), class:e, pointStrokeOpacity:Array.isArray(h.strokeOpacity)?h.strokeOpacity[i]:h.strokeOpacity, pointStrokeDashArray:Array.isArray(h.strokeDashArray)?h.strokeDashArray[i]:h.strokeDashArray, pointFillOpacity:Array.isArray(h.fillOpacity)?h.fillOpacity[i]:h.fillOpacity, seriesIndex:i;
}
}},  {
    key: "addEvents", value:function(t) {
    var e=this.w, i=new us(this.ctx);
    t.node.addEventListener("mouseenter", i.pathMouseEnter.bind(this.ctx, t)), t.node.addEventListener("mouseleave", i.pathMouseLeave.bind(this.ctx, t)), t.node.addEventListener("mousedown", i.pathMouseDown.bind(this.ctx, t)), t.node.addEventListener("click", e.config.markers.onClick), t.node.addEventListener("dblclick", e.config.markers.onDblClick), t.node.addEventListener("touchstart", i.pathMouseDown.bind(this.ctx, t),  {
    passive: !0;
}
);
}},  {
    key: "getMarkerStyle", value:function(t) {
    var e=this.w, i=e.globals.markers.colors, a=e.config.markers.strokeColor||e.config.markers.strokeColors;
    return {
    pointStrokeColor: Array.isArray(a)?a[t]:a, pointFillColor:Array.isArray(i)?i[t]:i;
}
}}]), t;
}(), As=function() {
    function t(e) {
    Ja(this, t), this.ctx=e, this.w=e.w, this.initialAnim=this.w.config.chart.animations.enabled, this.dynamicAnim=this.initialAnim&&this.w.config.chart.animations.dynamicAnimation.enabled;
}
return ts(t, [ {
    key: "draw", value:function(t, e, i) {
    var a=this.w, s=new us(this.ctx), n=i.realIndex, o=i.pointsPos, r=i.zRatio, l=i.elParent, c=s.group( {
    class: "apexcharts-series-markers apexcharts-series-".concat(a.config.chart.type);
}
);
    if(c.attr("clip-path", "url(#gridRectMarkerMask".concat(a.globals.cuid, ")")), Array.isArray(o.x))for(var h=0;
    h<o.x.length;
    h++) {
    var d=e+1, u=!0;
    0===e&&0===h&&(d=0), 0===e&&1===h&&(d=1);
    var g=0, f=a.globals.markers.size[n];
    if(r!==1/0) {
    f=a.globals.seriesZ[n][d]/r;
    var p=a.config.plotOptions.bubble;
    p.minBubbleRadius&&f<p.minBubbleRadius&&(f=p.minBubbleRadius), p.maxBubbleRadius&&f>p.maxBubbleRadius&&(f=p.maxBubbleRadius);
}
a.config.chart.animations.enabled||(g=f);
    var x=o.x[h], m=o.y[h];
    if(g=g||0, null!==m&&void 0!==a.globals.series[n][d]||(u=!1), u) {
    var b=this.drawPoint(x, m, g, f, n, d, e);
    c.add(b);
}
l.add(c);
}}},  {
    key: "drawPoint", value:function(t, e, i, a, s, n, o) {
    var r=this.w, l=s, c=new hs(this.ctx), h=new ds(this.ctx), d=new ws(this.ctx), u=new ks(this.ctx), g=new us(this.ctx), f=u.getMarkerConfig( {
    cssClass: "apexcharts-marker", seriesIndex:l, dataPointIndex:n, finishRadius:"bubble"===r.config.chart.type||r.globals.comboCharts&&r.config.series[s]&&"bubble"===r.config.series[s].type?a:null;
}
);
    a=f.pSize;
    var p, x=d.fillPath( {
    seriesNumber: s, dataPointIndex:n, color:f.pointFillColor, patternUnits:"objectBoundingBox", value:r.globals.series[s][o];
}
);
    if("circle"===f.shape?p=g.drawCircle(i): "square"!==f.shape&&"rect"!==f.shape||(p=g.drawRect(0, 0, f.width-f.pointStrokeWidth/2, f.height-f.pointStrokeWidth/2, f.pRadius)), r.config.series[l].data[n]&&r.config.series[l].data[n].fillColor&&(x=r.config.series[l].data[n].fillColor), p.attr( {
    x: t-f.width/2-f.pointStrokeWidth/2, y:e-f.height/2-f.pointStrokeWidth/2, cx:t, cy:e, fill:x, "fill-opacity":f.pointFillOpacity, stroke:f.pointStrokeColor, r:a, "stroke-width":f.pointStrokeWidth, "stroke-dasharray":f.pointStrokeDashArray, "stroke-opacity":f.pointStrokeOpacity;
}
), r.config.chart.dropShadow.enabled) {
    var m=r.config.chart.dropShadow;
    h.dropShadow(p, m, s);
}
if(!this.initialAnim||r.globals.dataChanged||r.globals.resized)r.globals.animationEnded=!0;
    else {
    var b=r.config.chart.animations.speed;
    c.animateMarker(p, 0, "circle"===f.shape?a:  {
    width: f.width, height:f.height;
}
, b, r.globals.easing, (function() {
    window.setTimeout((function() {
    c.animationCompleted(p);
}
), 100);
}));
}if(r.globals.dataChanged&&"circle"===f.shape)if(this.dynamicAnim) {
    var v, y, w, k, A=r.config.chart.animations.dynamicAnimation.speed;
    null!=(k=r.globals.previousPaths[s]&&r.globals.previousPaths[s][o])&&(v=k.x, y=k.y, w=void 0!==k.r?k.r: a);
    for(var C=0;
    C<r.globals.collapsedSeries.length;
    C++)r.globals.collapsedSeries[C].index===s&&(A=1, a=0);
    0===t&&0===e&&(a=0), c.animateCircle(p,  {
    cx: v, cy:y, r:w;
}
,  {
    cx: t, cy:e, r:a;
}
, A, r.globals.easing);
}else p.attr( {
    r: a;
}
);
    return p.attr( {
    rel: n, j:n, index:s, "default-marker-size":a;
}
), h.setSelectionFilter(p, s, n), u.addEvents(p), p.node.classList.add("apexcharts-marker"), p;
}},  {
    key: "centerTextInBubble", value:function(t) {
    var e=this.w;
    return {
    y: t+=parseInt(e.config.dataLabels.style.fontSize, 10)/4;
}
}}]), t;
}(), Cs=function() {
    function t(e) {
    Ja(this, t), this.ctx=e, this.w=e.w;
}
return ts(t, [ {
    key: "dataLabelsCorrection", value:function(t, e, i, a, s, n, o) {
    var r=this.w, l=!1, c=new us(this.ctx).getTextRects(i, o), h=c.width, d=c.height;
    e<0&&(e=0), e>r.globals.gridHeight+d&&(e=r.globals.gridHeight+d/2), void 0===r.globals.dataLabelsRects[a]&&(r.globals.dataLabelsRects[a]=[]), r.globals.dataLabelsRects[a].push( {
    x: t, y:e, width:h, height:d;
}
);
    var u=r.globals.dataLabelsRects[a].length-2, g=void 0!==r.globals.lastDrawnDataLabelsIndexes[a]?r.globals.lastDrawnDataLabelsIndexes[a][r.globals.lastDrawnDataLabelsIndexes[a].length-1]: 0;
    if(void 0!==r.globals.dataLabelsRects[a][u]) {
    var f=r.globals.dataLabelsRects[a][g];
    (t>f.x+f.width+2||e>f.y+f.height+2||t+h<f.x)&&(l=!0);
}
return(0===s||n)&&(l=!0),  {
    x: t, y:e, textRects:c, drawnextLabel:l;
}
}},  {
    key: "drawDataLabel", value:function(t, e, i) {
    var a=this, s=arguments.length>4&&void 0!==arguments[4]?arguments[4]: 2, n=this.w, o=new us(this.ctx), r=n.config.dataLabels, l=0, c=0, h=i, d=null;
    if(!r.enabled||!Array.isArray(t.x))return d;
    d=o.group( {
    class: "apexcharts-data-labels"}
);
    for(var u=0;
    u<t.x.length;
    u++)if(l=t.x[u]+r.offsetX, c=t.y[u]+r.offsetY+s, !isNaN(l)) {
    1===i&&0===u&&(h=0), 1===i&&1===u&&(h=1);
    var g=n.globals.series[e][h], f="", p=function(t) {
    return n.config.dataLabels.formatter(t,  {
    ctx: a.ctx, seriesIndex:e, dataPointIndex:h, w:n;
}
);
};
    if("bubble"===n.config.chart.type) {
    f=p(g=n.globals.seriesZ[e][h]), c=t.y[u];
    var x=new As(this.ctx), m=x.centerTextInBubble(c, e, h);
    c=m.y;
}
else void 0!==g&&(f=p(g));
    this.plotDataLabelsText( {
    x: l, y:c, text:f, i:e, j:h, parent:d, offsetCorrection:!0, dataLabelsConfig:n.config.dataLabels;
}
);
}return d;
}},  {
    key: "plotDataLabelsText", value:function(t) {
    var e=this.w, i=new us(this.ctx), a=t.x, s=t.y, n=t.i, o=t.j, r=t.text, l=t.textAnchor, c=t.fontSize, h=t.parent, d=t.dataLabelsConfig, u=t.color, g=t.alwaysDrawDataLabel, f=t.offsetCorrection;
    if(!(Array.isArray(e.config.dataLabels.enabledOnSeries)&&e.config.dataLabels.enabledOnSeries.indexOf(n)<0)) {
    var p= {
    x: a, y:s, drawnextLabel:!0, textRects:null;
}
;
    f&&(p=this.dataLabelsCorrection(a, s, r, n, o, g, parseInt(d.style.fontSize, 10))), e.globals.zoomed||(a=p.x, s=p.y), p.textRects&&(a<-10-p.textRects.width||a>e.globals.gridWidth+p.textRects.width+10)&&(r="");
    var x=e.globals.dataLabels.style.colors[n];
    (("bar"===e.config.chart.type||"rangeBar"===e.config.chart.type)&&e.config.plotOptions.bar.distributed||e.config.dataLabels.distributed)&&(x=e.globals.dataLabels.style.colors[o]), "function"==typeof x&&(x=x( {
    series: e.globals.series, seriesIndex:n, dataPointIndex:o, w:e;
}
)), u&&(x=u);
    var m=d.offsetX, b=d.offsetY;
    if("bar"!==e.config.chart.type&&"rangeBar"!==e.config.chart.type||(m=0, b=0), p.drawnextLabel) {
    var v=i.drawText( {
    width: 100, height:parseInt(d.style.fontSize, 10), x:a+m, y:s+b, foreColor:x, textAnchor:l||d.textAnchor, text:r, fontSize:c||d.style.fontSize, fontFamily:d.style.fontFamily, fontWeight:d.style.fontWeight||"normal"}
);
    if(v.attr( {
    class: "apexcharts-datalabel", cx:a, cy:s;
}
), d.dropShadow.enabled) {
    var y=d.dropShadow;
    new ds(this.ctx).dropShadow(v, y);
}
h.add(v), void 0===e.globals.lastDrawnDataLabelsIndexes[n]&&(e.globals.lastDrawnDataLabelsIndexes[n]=[]), e.globals.lastDrawnDataLabelsIndexes[n].push(o);
}}}},  {
    key: "addBackgroundToDataLabel", value:function(t, e) {
    var i=this.w, a=i.config.dataLabels.background, s=a.padding, n=a.padding/2, o=e.width, r=e.height, l=new us(this.ctx).drawRect(e.x-s, e.y-n/2, o+2*s, r+n, a.borderRadius, "transparent"===i.config.chart.background?"#fff": i.config.chart.background, a.opacity, a.borderWidth, a.borderColor);
    return a.dropShadow.enabled&&new ds(this.ctx).dropShadow(l, a.dropShadow), l;
}
},  {
    key: "dataLabelsBackground", value:function() {
    var t=this.w;
    if("bubble"!==t.config.chart.type)for(var e=t.globals.dom.baseEl.querySelectorAll(".apexcharts-datalabels text"), i=0;
    i<e.length;
    i++) {
    var a=e[i], s=a.getBBox(), n=null;
    if(s.width&&s.height&&(n=this.addBackgroundToDataLabel(a, s)), n) {
    a.parentNode.insertBefore(n.node, a);
    var o=a.getAttribute("fill");
    !t.config.chart.animations.enabled||t.globals.resized||t.globals.dataChanged?n.attr( {
    fill: o;
}
):n.animate().attr( {
    fill: o;
}
), a.setAttribute("fill", t.config.dataLabels.background.foreColor);
}}}},  {
    key: "bringForward", value:function() {
    for(var t=this.w, e=t.globals.dom.baseEl.querySelectorAll(".apexcharts-datalabels"), i=t.globals.dom.baseEl.querySelector(".apexcharts-plot-series: last-child"), a=0;
    a<e.length;
    a++)i&&i.insertBefore(e[a], i.nextSibling);
}
}]), t;
}(), Ss=function() {
    function t(e) {
    Ja(this, t), this.w=e.w, this.barCtx=e;
}
return ts(t, [ {
    key: "handleBarDataLabels", value:function(t) {
    var e=t.x, i=t.y, a=t.y1, s=t.y2, n=t.i, o=t.j, r=t.realIndex, l=t.series, c=t.barHeight, h=t.barWidth, d=t.barYPosition, u=t.visibleSeries, g=t.renderedPath, f=this.w, p=new us(this.barCtx.ctx), x=Array.isArray(this.barCtx.strokeWidth)?this.barCtx.strokeWidth[r]: this.barCtx.strokeWidth, m=e+parseFloat(h*u), b=i+parseFloat(c*u);
    f.globals.isXNumeric&&!f.globals.isBarHorizontal&&(m=e+parseFloat(h*(u+1)), b=i+parseFloat(c*(u+1))-x);
    var v, y=e, w=i, k=f.config.dataLabels, A=this.barCtx.barOptions.dataLabels;
    void 0!==d&&this.barCtx.isRangeBar&&(b=d, w=d);
    var C=k.offsetX, S=k.offsetY, E= {
    width: 0, height:0;
}
;
    if(f.config.dataLabels.enabled) {
    var L=this.barCtx.series[n][o];
    E=p.getTextRects(f.globals.yLabelFormatters[0](L), parseFloat(k.style.fontSize));
}
var _= {
    x: e, y:i, i:n, j:o, renderedPath:g, bcx:m, bcy:b, barHeight:c, barWidth:h, textRects:E, strokeWidth:x, dataLabelsX:y, dataLabelsY:w, barDataLabelsConfig:A, offX:C, offY:S;
}
;
    return v=this.barCtx.isHorizontal?this.calculateBarsDataLabelsPosition(_): this.calculateColumnsDataLabelsPosition(_), g.attr( {
    cy: v.bcy, cx:v.bcx, j:o, val:l[n][o], barHeight:c, barWidth:h;
}
), this.drawCalculatedDataLabels( {
    x: v.dataLabelsX, y:v.dataLabelsY, val:this.barCtx.isRangeBar?[a, s]:l[n][o], i:r, j:o, barWidth:h, barHeight:c, textRects:E, dataLabelsConfig:k;
}
);
}},  {
    key: "calculateColumnsDataLabelsPosition", value:function(t) {
    var e, i=this.w, a=t.i, s=t.j, n=t.y, o=t.bcx, r=t.barWidth, l=t.barHeight, c=t.textRects, h=t.dataLabelsY, d=t.barDataLabelsConfig, u=t.strokeWidth, g=t.offX, f=t.offY;
    l=Math.abs(l);
    var p="vertical"===i.config.plotOptions.bar.dataLabels.orientation;
    o-=u/2;
    var x=i.globals.gridWidth/i.globals.dataPoints;
    e=i.globals.isXNumeric?o-r/2+g: o-x+r/2+g, p&&(e=e+c.height/2-u/2-2);
    var m=this.barCtx.series[a][s]<0, b=n;
    switch(this.barCtx.isReversed&&(b=n-l+(m?2*l: 0), n-=l), d.position) {
    case"center": h=p?m?b+l/2+f:b+l/2-f:m?b-l/2+c.height/2+f:b+l/2+c.height/2-f;
    break;
    case"bottom": h=p?m?b+l+f:b+l-f:m?b-l+c.height+u+f:b+l-c.height/2+u-f;
    break;
    case"top": h=p?m?b+f:b-f:m?b-c.height/2-f:b+c.height+f;
}
return i.config.chart.stacked||(h<0?h=0+u:h+c.height/3>i.globals.gridHeight&&(h=i.globals.gridHeight-u)),  {
    bcx: o, bcy:n, dataLabelsX:e, dataLabelsY:h;
}
}},  {
    key: "calculateBarsDataLabelsPosition", value:function(t) {
    var e=this.w, i=t.x, a=t.i, s=t.j, n=t.bcy, o=t.barHeight, r=t.barWidth, l=t.textRects, c=t.dataLabelsX, h=t.strokeWidth, d=t.barDataLabelsConfig, u=t.offX, g=t.offY, f=e.globals.gridHeight/e.globals.dataPoints;
    r=Math.abs(r);
    var p=n-(this.barCtx.isRangeBar?0: f)+o/2+l.height/2+g-3, x=this.barCtx.series[a][s]<0, m=i;
    switch(this.barCtx.isReversed&&(m=i+r-(x?2*r: 0), i=e.globals.gridWidth-r), d.position) {
    case"center": c=x?m+r/2-u:Math.max(l.width/2, m-r/2)+u;
    break;
    case"bottom": c=x?m+r-h-Math.round(l.width/2)-u:m-r+h+Math.round(l.width/2)+u;
    break;
    case"top": c=x?m-h+Math.round(l.width/2)-u:m-h-Math.round(l.width/2)+u;
}
return e.config.chart.stacked||(c<0?c=c+l.width+h:c+l.width/2>e.globals.gridWidth&&(c=e.globals.gridWidth-l.width-h)),  {
    bcx: i, bcy:n, dataLabelsX:c, dataLabelsY:p;
}
}},  {
    key: "drawCalculatedDataLabels", value:function(t) {
    var e=t.x, i=t.y, a=t.val, s=t.i, n=t.j, o=t.textRects, r=t.barHeight, l=t.barWidth, c=t.dataLabelsConfig, h=this.w, d="rotate(0)";
    "vertical"===h.config.plotOptions.bar.dataLabels.orientation&&(d="rotate(-90,  ".concat(e, ",  ").concat(i, ")"));
    var u=new Cs(this.barCtx.ctx), g=new us(this.barCtx.ctx), f=c.formatter, p=null, x=h.globals.collapsedSeriesIndices.indexOf(s)>-1;
    if(c.enabled&&!x) {
    p=g.group( {
    class: "apexcharts-data-labels", transform:d;
}
);
    var m="";
    void 0!==a&&(m=f(a,  {
    seriesIndex: s, dataPointIndex:n, w:h;
}
));
    var b=h.globals.series[s][n]<0, v=h.config.plotOptions.bar.dataLabels.position;
    "vertical"===h.config.plotOptions.bar.dataLabels.orientation&&("top"===v&&(c.textAnchor=b?"end": "start"), "center"===v&&(c.textAnchor="middle"), "bottom"===v&&(c.textAnchor=b?"end":"start")), this.barCtx.isRangeBar&&this.barCtx.barOptions.dataLabels.hideOverflowingLabels&&l<g.getTextRects(m, parseFloat(c.style.fontSize)).width&&(m=""), h.config.chart.stacked&&this.barCtx.barOptions.dataLabels.hideOverflowingLabels&&(this.barCtx.isHorizontal?o.width/1.6>Math.abs(l)&&(m=""):o.height/1.6>Math.abs(r)&&(m=""));
    var y=Za( {
}
, c);
    this.barCtx.isHorizontal&&a<0&&("start"===c.textAnchor?y.textAnchor="end": "end"===c.textAnchor&&(y.textAnchor="start")), u.plotDataLabelsText( {
    x: e, y:i, text:m, i:s, j:n, parent:p, dataLabelsConfig:y, alwaysDrawDataLabel:!0, offsetCorrection:!0;
}
);
}return p;
}}]), t;
}(), Es=function() {
    function t(e) {
    Ja(this, t), this.ctx=e, this.w=e.w, this.legendInactiveClass="legend-mouseover-inactive"}
return ts(t, [ {
    key: "getAllSeriesEls", value:function() {
    return this.w.globals.dom.baseEl.getElementsByClassName("apexcharts-series");
}
},  {
    key: "getSeriesByName", value:function(t) {
    return this.w.globals.dom.baseEl.querySelector(".apexcharts-inner .apexcharts-series[seriesName='".concat(cs.escapeString(t), "']"));
}
},  {
    key: "isSeriesHidden", value:function(t) {
    var e=this.getSeriesByName(t), i=parseInt(e.getAttribute("data: realIndex"), 10);
    return {
    isHidden: e.classList.contains("apexcharts-series-collapsed"), realIndex:i;
}
}},  {
    key: "addCollapsedClassToSeries", value:function(t, e) {
    var i=this.w;
    function a(i) {
    for(var a=0;
    a<i.length;
    a++)i[a].index===e&&t.node.classList.add("apexcharts-series-collapsed");
}
a(i.globals.collapsedSeries), a(i.globals.ancillaryCollapsedSeries);
}},  {
    key: "toggleSeries", value:function(t) {
    var e=this.isSeriesHidden(t);
    return this.ctx.legend.legendHelpers.toggleDataSeries(e.realIndex, e.isHidden), e.isHidden;
}
},  {
    key: "showSeries", value:function(t) {
    var e=this.isSeriesHidden(t);
    e.isHidden&&this.ctx.legend.legendHelpers.toggleDataSeries(e.realIndex, !0);
}
},  {
    key: "hideSeries", value:function(t) {
    var e=this.isSeriesHidden(t);
    e.isHidden||this.ctx.legend.legendHelpers.toggleDataSeries(e.realIndex, !1);
}
},  {
    key: "resetSeries", value:function() {
    var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0], e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1], i=!(arguments.length>2&&void 0!==arguments[2])||arguments[2], a=this.w, s=cs.clone(a.globals.initialSeries);
    a.globals.previousPaths=[], i?(a.globals.collapsedSeries=[], a.globals.ancillaryCollapsedSeries=[], a.globals.collapsedSeriesIndices=[], a.globals.ancillaryCollapsedSeriesIndices=[]): s=this.emptyCollapsedSeries(s), a.config.series=s, t&&(e&&(a.globals.zoomed=!1, this.ctx.updateHelpers.revertDefaultAxisMinMax()), this.ctx.updateHelpers._updateSeries(s, a.config.chart.animations.dynamicAnimation.enabled));
}
},  {
    key: "emptyCollapsedSeries", value:function(t) {
    for(var e=this.w, i=0;
    i<t.length;
    i++)e.globals.collapsedSeriesIndices.indexOf(i)>-1&&(t[i].data=[]);
    return t;
}
},  {
    key: "toggleSeriesOnHover", value:function(t, e) {
    var i=this.w;
    e||(e=t.target);
    var a=i.globals.dom.baseEl.querySelectorAll(".apexcharts-series,  .apexcharts-datalabels");
    if("mousemove"===t.type) {
    var s=parseInt(e.getAttribute("rel"), 10)-1, n=null, o=null;
    i.globals.axisCharts||"radialBar"===i.config.chart.type?i.globals.axisCharts?(n=i.globals.dom.baseEl.querySelector(".apexcharts-series[data\\: realIndex='".concat(s, "']")), o=i.globals.dom.baseEl.querySelector(".apexcharts-datalabels[data\\:realIndex='".concat(s, "']"))):n=i.globals.dom.baseEl.querySelector(".apexcharts-series[rel='".concat(s+1, "']")):n=i.globals.dom.baseEl.querySelector(".apexcharts-series[rel='".concat(s+1, "'] path"));
    for(var r=0;
    r<a.length;
    r++)a[r].classList.add(this.legendInactiveClass);
    null!==n&&(i.globals.axisCharts||n.parentNode.classList.remove(this.legendInactiveClass), n.classList.remove(this.legendInactiveClass), null!==o&&o.classList.remove(this.legendInactiveClass));
}
else if("mouseout"===t.type)for(var l=0;
    l<a.length;
    l++)a[l].classList.remove(this.legendInactiveClass);
}
},  {
    key: "highlightRangeInSeries", value:function(t, e) {
    var i=this, a=this.w, s=a.globals.dom.baseEl.getElementsByClassName("apexcharts-heatmap-rect"), n=function(t) {
    for(var e=0;
    e<s.length;
    e++)s[e].classList[t](i.legendInactiveClass);
}
;
    if("mousemove"===t.type) {
    var o=parseInt(e.getAttribute("rel"), 10)-1;
    n("add"), function(t) {
    for(var e=0;
    e<s.length;
    e++) {
    var a=parseInt(s[e].getAttribute("val"), 10);
    a>=t.from&&a<=t.to&&s[e].classList.remove(i.legendInactiveClass);
}
}(a.config.plotOptions.heatmap.colorScale.ranges[o]);
}else"mouseout"===t.type&&n("remove");
}},  {
    key: "getActiveConfigSeriesIndex", value:function() {
    var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0], e=arguments.length>1&&void 0!==arguments[1]?arguments[1]: "asc", i=this.w, a=0;
    if(i.config.series.length>1)for(var s=i.config.series.map((function(e, a) {
    var s=!1;
    return t&&(s="bar"===i.config.series[a].type||"column"===i.config.series[a].type), e.data&&e.data.length>0&&!s?a: -1;
}
)), n="asc"===e?0:s.length-1;
    "asc"===e?n<s.length: n>=0;
    "asc"===e?n++: n--)if(-1!==s[n]) {
    a=s[n];
    break;
}
return a;
}},  {
    key: "getPreviousPaths", value:function() {
    var t=this.w;
    function e(e, i, a) {
    for(var s=e[i].childNodes, n= {
    type: a, paths:[], realIndex:e[i].getAttribute("data:realIndex");
}
, o=0;
    o<s.length;
    o++)if(s[o].hasAttribute("pathTo")) {
    var r=s[o].getAttribute("pathTo");
    n.paths.push( {
    d: r;
}
);
}t.globals.previousPaths.push(n);
}t.globals.previousPaths=[], ["line", "area", "bar", "rangebar", "candlestick", "radar"].forEach((function(i) {
    for(var a, s=(a=i, t.globals.dom.baseEl.querySelectorAll(".apexcharts-".concat(a, "-series .apexcharts-series"))), n=0;
    n<s.length;
    n++)e(s, n, i);
}
)), this.handlePrevBubbleScatterPaths("bubble"), this.handlePrevBubbleScatterPaths("scatter");
    var i=t.globals.dom.baseEl.querySelectorAll(".apexcharts-".concat(t.config.chart.type, " .apexcharts-series"));
    if(i.length>0)for(var a=function(e) {
    for(var i=t.globals.dom.baseEl.querySelectorAll(".apexcharts-".concat(t.config.chart.type, " .apexcharts-series[data\\: realIndex='").concat(e, "'] rect")), a=[], s=function(t) {
    var e=function(e) {
    return i[t].getAttribute(e);
}
, s= {
    x: parseFloat(e("x")), y:parseFloat(e("y")), width:parseFloat(e("width")), height:parseFloat(e("height"));
}
;
    a.push( {
    rect: s, color:i[t].getAttribute("color");
}
);
}, n=0;
    n<i.length;
    n++)s(n);
    t.globals.previousPaths.push(a);
}
, s=0;
    s<i.length;
    s++)a(s);
    t.globals.axisCharts||(t.globals.previousPaths=t.globals.series);
}
},  {
    key: "handlePrevBubbleScatterPaths", value:function(t) {
    var e=this.w, i=e.globals.dom.baseEl.querySelectorAll(".apexcharts-".concat(t, "-series .apexcharts-series"));
    if(i.length>0)for(var a=0;
    a<i.length;
    a++) {
    for(var s=e.globals.dom.baseEl.querySelectorAll(".apexcharts-".concat(t, "-series .apexcharts-series[data\\: realIndex='").concat(a, "'] circle")), n=[], o=0;
    o<s.length;
    o++)n.push( {
    x: s[o].getAttribute("cx"), y:s[o].getAttribute("cy"), r:s[o].getAttribute("r");
}
);
    e.globals.previousPaths.push(n);
}
}},  {
    key: "clearPreviousPaths", value:function() {
    var t=this.w;
    t.globals.previousPaths=[], t.globals.allSeriesCollapsed=!1;
}
},  {
    key: "handleNoData", value:function() {
    var t=this.w, e=t.config.noData, i=new us(this.ctx), a=t.globals.svgWidth/2, s=t.globals.svgHeight/2, n="middle";
    if(t.globals.noData=!0, t.globals.animationEnded=!0, "left"===e.align?(a=10, n="start"): "right"===e.align&&(a=t.globals.svgWidth-10, n="end"), "top"===e.verticalAlign?s=50:"bottom"===e.verticalAlign&&(s=t.globals.svgHeight-50), a+=e.offsetX, s=s+parseInt(e.style.fontSize, 10)+2+e.offsetY, void 0!==e.text&&""!==e.text) {
    var o=i.drawText( {
    x: a, y:s, text:e.text, textAnchor:n, fontSize:e.style.fontSize, fontFamily:e.style.fontFamily, foreColor:e.style.color, opacity:1, class:"apexcharts-text-nodata"}
);
    t.globals.dom.Paper.add(o);
}
}},  {
    key: "setNullSeriesToZeroValues", value:function(t) {
    for(var e=this.w, i=0;
    i<t.length;
    i++)if(0===t[i].length)for(var a=0;
    a<t[e.globals.maxValsInArrayIndex].length;
    a++)t[i].push(0);
    return t;
}
},  {
    key: "hasAllSeriesEqualX", value:function() {
    for(var t=!0, e=this.w, i=this.filteredSeriesX(), a=0;
    a<i.length-1;
    a++)if(i[a][0]!==i[a+1][0]) {
    t=!1;
    break;
}
return e.globals.allSeriesHasEqualX=t, t;
}},  {
    key: "filteredSeriesX", value:function() {
    return this.w.globals.seriesX.map((function(t) {
    return t.length>0?t: [];
}
));
}}]), t;
}(), Ls=function() {
    function t(e) {
    Ja(this, t), this.w=e.w, this.barCtx=e;
}
return ts(t, [ {
    key: "initVariables", value:function(t) {
    var e=this.w;
    this.barCtx.series=t, this.barCtx.totalItems=0, this.barCtx.seriesLen=0, this.barCtx.visibleI=-1, this.barCtx.visibleItems=1;
    for(var i=0;
    i<t.length;
    i++)if(t[i].length>0&&(this.barCtx.seriesLen=this.barCtx.seriesLen+1, this.barCtx.totalItems+=t[i].length), e.globals.isXNumeric)for(var a=0;
    a<t[i].length;
    a++)e.globals.seriesX[i][a]>e.globals.minX&&e.globals.seriesX[i][a]<e.globals.maxX&&this.barCtx.visibleItems++;
    else this.barCtx.visibleItems=e.globals.dataPoints;
    0===this.barCtx.seriesLen&&(this.barCtx.seriesLen=1), this.barCtx.zeroSerieses=[], this.barCtx.radiusOnSeriesNumber=t.length-1, e.globals.comboCharts||this.checkZeroSeries( {
    series: t;
}
);
}},  {
    key: "initialPositions", value:function() {
    var t, e, i, a, s, n, o, r, l=this.w, c=l.globals.dataPoints;
    this.barCtx.isRangeBar&&(c=l.globals.labels.length);
    var h=this.barCtx.seriesLen;
    if(l.config.plotOptions.bar.rangeBarGroupRows&&(h=1), this.barCtx.isHorizontal)s=(i=l.globals.gridHeight/c)/h, l.globals.isXNumeric&&(s=(i=l.globals.gridHeight/this.barCtx.totalItems)/this.barCtx.seriesLen), s=s*parseInt(this.barCtx.barOptions.barHeight, 10)/100, r=this.barCtx.baseLineInvertedY+l.globals.padHorizontal+(this.barCtx.isReversed?l.globals.gridWidth: 0)-(this.barCtx.isReversed?2*this.barCtx.baseLineInvertedY:0), e=(i-s*this.barCtx.seriesLen)/2;
    else {
    if(a=l.globals.gridWidth/this.barCtx.visibleItems, l.config.xaxis.convertedCatToNumeric&&(a=l.globals.gridWidth/l.globals.dataPoints), n=a/this.barCtx.seriesLen*parseInt(this.barCtx.barOptions.columnWidth, 10)/100, l.globals.isXNumeric) {
    var d=this.barCtx.xRatio;
    l.config.xaxis.convertedCatToNumeric&&(d=this.barCtx.initialXRatio), l.globals.minXDiff&&.5!==l.globals.minXDiff&&l.globals.minXDiff/d>0&&(a=l.globals.minXDiff/d), (n=a/this.barCtx.seriesLen*parseInt(this.barCtx.barOptions.columnWidth, 10)/100)<1&&(n=1);
}
o=l.globals.gridHeight-this.barCtx.baseLineY[this.barCtx.yaxisIndex]-(this.barCtx.isReversed?l.globals.gridHeight: 0)+(this.barCtx.isReversed?2*this.barCtx.baseLineY[this.barCtx.yaxisIndex]:0), t=l.globals.padHorizontal+(a-n*this.barCtx.seriesLen)/2;
}return {
    x: t, y:e, yDivision:i, xDivision:a, barHeight:s, barWidth:n, zeroH:o, zeroW:r;
}
}},  {
    key: "getPathFillColor", value:function(t, e, i, a) {
    var s=this.w, n=new ws(this.barCtx.ctx), o=null, r=this.barCtx.barOptions.distributed?i: e;
    return this.barCtx.barOptions.colors.ranges.length>0&&this.barCtx.barOptions.colors.ranges.map((function(a) {
    t[e][i]>=a.from&&t[e][i]<=a.to&&(o=a.color);
}
)), s.config.series[e].data[i]&&s.config.series[e].data[i].fillColor&&(o=s.config.series[e].data[i].fillColor), n.fillPath( {
    seriesNumber: this.barCtx.barOptions.distributed?r:a, dataPointIndex:i, color:o, value:t[e][i];
}
);
}},  {
    key: "getStrokeWidth", value:function(t, e, i) {
    var a=0, s=this.w;
    return void 0===this.barCtx.series[t][e]||null===this.barCtx.series[t][e]?this.barCtx.isNullValue=!0: this.barCtx.isNullValue=!1, s.config.stroke.show&&(this.barCtx.isNullValue||(a=Array.isArray(this.barCtx.strokeWidth)?this.barCtx.strokeWidth[i]:this.barCtx.strokeWidth)), a;
}
},  {
    key: "barBackground", value:function(t) {
    var e=t.j, i=t.i, a=t.x1, s=t.x2, n=t.y1, o=t.y2, r=t.elSeries, l=this.w, c=new us(this.barCtx.ctx), h=new Es(this.barCtx.ctx).getActiveConfigSeriesIndex();
    if(this.barCtx.barOptions.colors.backgroundBarColors.length>0&&h===i) {
    e>=this.barCtx.barOptions.colors.backgroundBarColors.length&&(e-=this.barCtx.barOptions.colors.backgroundBarColors.length);
    var d=this.barCtx.barOptions.colors.backgroundBarColors[e], u=c.drawRect(void 0!==a?a: 0, void 0!==n?n:0, void 0!==s?s:l.globals.gridWidth, void 0!==o?o:l.globals.gridHeight, this.barCtx.barOptions.colors.backgroundBarRadius, d, this.barCtx.barOptions.colors.backgroundBarOpacity);
    r.add(u), u.node.classList.add("apexcharts-backgroundBar");
}
}},  {
    key: "getColumnPaths", value:function(t) {
    var e=t.barWidth, i=t.barXPosition, a=t.yRatio, s=t.y1, n=t.y2, o=t.strokeWidth, r=t.series, l=t.realIndex, c=t.i, h=t.j, d=t.w, u=new us(this.barCtx.ctx);
    (o=Array.isArray(o)?o[l]: o)||(o=0);
    var g= {
    barWidth: e, strokeWidth:o, yRatio:a, barXPosition:i, y1:s, y2:n;
}
, f=this.getRoundedBars(d, g, r, c, h), p=i, x=i+e, m=u.move(p, s), b=u.move(p, s), v=u.line(x-o, s);
    return d.globals.previousPaths.length>0&&(b=this.barCtx.getPreviousPath(l, h, !1)), m=m+u.line(p, f.y2)+f.pathWithRadius+u.line(x-o, f.y2)+v+v+"z", b=b+u.line(p, s)+v+v+v+v+v+u.line(p, s), d.config.chart.stacked&&(this.barCtx.yArrj.push(f.y2), this.barCtx.yArrjF.push(Math.abs(s-f.y2)), this.barCtx.yArrjVal.push(this.barCtx.series[c][h])),  {
    pathTo: m, pathFrom:b;
}
}},  {
    key: "getBarpaths", value:function(t) {
    var e=t.barYPosition, i=t.barHeight, a=t.x1, s=t.x2, n=t.strokeWidth, o=t.series, r=t.realIndex, l=t.i, c=t.j, h=t.w, d=new us(this.barCtx.ctx);
    (n=Array.isArray(n)?n[r]: n)||(n=0);
    var u= {
    barHeight: i, strokeWidth:n, barYPosition:e, x2:s, x1:a;
}
, g=this.getRoundedBars(h, u, o, l, c), f=d.move(a, e), p=d.move(a, e);
    h.globals.previousPaths.length>0&&(p=this.barCtx.getPreviousPath(r, c, !1));
    var x=e, m=e+i, b=d.line(a, m-n);
    return f=f+d.line(g.x2, x)+g.pathWithRadius+d.line(g.x2, m-n)+b+b+"z", p=p+d.line(a, x)+b+b+b+b+b+d.line(a, x), h.config.chart.stacked&&(this.barCtx.xArrj.push(g.x2), this.barCtx.xArrjF.push(Math.abs(a-g.x2)), this.barCtx.xArrjVal.push(this.barCtx.series[l][c])),  {
    pathTo: f, pathFrom:p;
}
}},  {
    key: "getRoundedBars", value:function(t, e, i, a, s) {
    var n=new us(this.barCtx.ctx), o=0, r=t.config.plotOptions.bar.borderRadius, l=Array.isArray(r);
    if(o=l?r[a>r.length-1?r.length-1: a]:r, t.config.chart.stacked&&i.length>1&&a!==this.barCtx.radiusOnSeriesNumber&&!l&&(o=0), this.barCtx.isHorizontal) {
    var c="", h=e.x2;
    if(Math.abs(e.x1-e.x2)<o&&(o=Math.abs(e.x1-e.x2)), void 0!==i[a][s]||null!==i[a][s]) {
    var d=this.barCtx.isReversed?i[a][s]>0: i[a][s]<0;
    d&&(o*=-1), h-=o, c=n.quadraticCurve(h+o, e.barYPosition, h+o, e.barYPosition+(d?-1*o: o))+n.line(h+o, e.barYPosition+e.barHeight-e.strokeWidth-(d?-1*o:o))+n.quadraticCurve(h+o, e.barYPosition+e.barHeight-e.strokeWidth, h, e.barYPosition+e.barHeight-e.strokeWidth);
}
return {
    pathWithRadius: c, x2:h;
}
}var u="", g=e.y2;
    if(Math.abs(e.y1-e.y2)<o&&(o=Math.abs(e.y1-e.y2)), void 0!==i[a][s]||null!==i[a][s]) {
    var f=i[a][s]<0;
    f&&(o*=-1), g+=o, u=n.quadraticCurve(e.barXPosition, g-o, e.barXPosition+(f?-1*o: o), g-o)+n.line(e.barXPosition+e.barWidth-e.strokeWidth-(f?-1*o:o), g-o)+n.quadraticCurve(e.barXPosition+e.barWidth-e.strokeWidth, g-o, e.barXPosition+e.barWidth-e.strokeWidth, g);
}
return {
    pathWithRadius: u, y2:g;
}
}},  {
    key: "checkZeroSeries", value:function(t) {
    for(var e=t.series, i=this.w, a=0;
    a<e.length;
    a++) {
    for(var s=0, n=0;
    n<e[i.globals.maxValsInArrayIndex].length;
    n++)s+=e[a][n];
    0===s&&this.barCtx.zeroSerieses.push(a);
}
for(var o=e.length-1;
    o>=0;
    o--)this.barCtx.zeroSerieses.indexOf(o)>-1&&o===this.radiusOnSeriesNumber&&(this.barCtx.radiusOnSeriesNumber-=1);
    for(var r=e.length-1;
    r>=0;
    r--)i.globals.collapsedSeriesIndices.indexOf(this.barCtx.radiusOnSeriesNumber)>-1&&(this.barCtx.radiusOnSeriesNumber-=1);
}
},  {
    key: "getXForValue", value:function(t, e) {
    var i=!(arguments.length>2&&void 0!==arguments[2])||arguments[2], a=i?e: null;
    return null!=t&&(a=e+t/this.barCtx.invertedYRatio-2*(this.barCtx.isReversed?t/this.barCtx.invertedYRatio: 0)), a;
}
},  {
    key: "getYForValue", value:function(t, e) {
    var i=!(arguments.length>2&&void 0!==arguments[2])||arguments[2], a=i?e: null;
    return null!=t&&(a=e-t/this.barCtx.yRatio[this.barCtx.yaxisIndex]+2*(this.barCtx.isReversed?t/this.barCtx.yRatio[this.barCtx.yaxisIndex]: 0)), a;
}
},  {
    key: "getGoalValues", value:function(t, e, i, a, s) {
    var n=this, o=this.w, r=[];
    return o.globals.seriesGoals[a]&&o.globals.seriesGoals[a][s]&&Array.isArray(o.globals.seriesGoals[a][s])&&o.globals.seriesGoals[a][s].forEach((function(a) {
    var s;
    r.push((es(s= {
}
, t, "x"===t?n.getXForValue(a.value, e, !1): n.getYForValue(a.value, i, !1)), es(s, "attrs", a), s));
}
)), r;
}},  {
    key: "drawGoalLine", value:function(t) {
    var e=t.barXPosition, i=t.barYPosition, a=t.goalX, s=t.goalY, n=t.barWidth, o=t.barHeight, r=new us(this.barCtx.ctx), l=r.group( {
    className: "apexcharts-bar-goals-groups"}
), c=null;
    return this.barCtx.isHorizontal?Array.isArray(a)&&a.forEach((function(t) {
    var e=void 0!==t.attrs.strokeHeight?t.attrs.strokeHeight: o/2, a=i+e+o/2;
    c=r.drawLine(t.x, a-2*e, t.x, a, t.attrs.strokeColor?t.attrs.strokeColor: void 0, t.attrs.strokeDashArray, t.attrs.strokeWidth?t.attrs.strokeWidth:2, t.attrs.strokeLineCap), l.add(c);
}
)):Array.isArray(s)&&s.forEach((function(t) {
    var i=void 0!==t.attrs.strokeWidth?t.attrs.strokeWidth: n/2, a=e+i+n/2;
    c=r.drawLine(a-2*i, t.y, a, t.y, t.attrs.strokeColor?t.attrs.strokeColor: void 0, t.attrs.strokeDashArray, t.attrs.strokeHeight?t.attrs.strokeHeight:2, t.attrs.strokeLineCap), l.add(c);
}
)), l;
}}]), t;
}(), _s=function() {
    function t(e, i) {
    Ja(this, t), this.ctx=e, this.w=e.w;
    var a=this.w;
    this.barOptions=a.config.plotOptions.bar, this.isHorizontal=this.barOptions.horizontal, this.strokeWidth=a.config.stroke.width, this.isNullValue=!1, this.isRangeBar=a.globals.seriesRangeBar.length&&this.isHorizontal, this.xyRatios=i, null!==this.xyRatios&&(this.xRatio=i.xRatio, this.initialXRatio=i.initialXRatio, this.yRatio=i.yRatio, this.invertedXRatio=i.invertedXRatio, this.invertedYRatio=i.invertedYRatio, this.baseLineY=i.baseLineY, this.baseLineInvertedY=i.baseLineInvertedY), this.yaxisIndex=0, this.seriesLen=0, this.barHelpers=new Ls(this);
}
return ts(t, [ {
    key: "draw", value:function(t, e) {
    var i=this.w, a=new us(this.ctx), s=new ps(this.ctx, i);
    t=s.getLogSeries(t), this.series=t, this.yRatio=s.getLogYRatios(this.yRatio), this.barHelpers.initVariables(t);
    var n=a.group( {
    class: "apexcharts-bar-series apexcharts-plot-series"}
);
    i.config.dataLabels.enabled&&this.totalItems>this.barOptions.dataLabels.maxItems&&console.warn("WARNING:  DataLabels are enabled but there are too many to display. This may cause performance issue when rendering.");
    for(var o=0, r=0;
    o<t.length;
    o++, r++) {
    var l, c, h, d, u=void 0, g=void 0, f=[], p=[], x=i.globals.comboCharts?e[o]: o, m=a.group( {
    class: "apexcharts-series", rel:o+1, seriesName:cs.escapeString(i.globals.seriesNames[x]), "data:realIndex":x;
}
);
    this.ctx.series.addCollapsedClassToSeries(m, x), t[o].length>0&&(this.visibleI=this.visibleI+1);
    var b=0, v=0;
    this.yRatio.length>1&&(this.yaxisIndex=x), this.isReversed=i.config.yaxis[this.yaxisIndex]&&i.config.yaxis[this.yaxisIndex].reversed;
    var y=this.barHelpers.initialPositions();
    g=y.y, b=y.barHeight, c=y.yDivision, d=y.zeroW, u=y.x, v=y.barWidth, l=y.xDivision, h=y.zeroH, this.horizontal||p.push(u+v/2);
    for(var w=a.group( {
    class: "apexcharts-datalabels", "data:realIndex":x;
}
), k=a.group( {
    class: "apexcharts-bar-goals-markers", style:"pointer-events: none"}
), A=0;
    A<i.globals.dataPoints;
    A++) {
    var C=this.barHelpers.getStrokeWidth(o, A, x), S=null, E= {
    indexes:  {
    i: o, j:A, realIndex:x, bc:r;
}
, x:u, y:g, strokeWidth:C, elSeries:m;
};
    this.isHorizontal?(S=this.drawBarPaths(Za(Za( {
}
, E),  {
}
,  {
    barHeight: b, zeroW:d, yDivision:c;
}
)), v=this.series[o][A]/this.invertedYRatio):(S=this.drawColumnPaths(Za(Za( {
}
, E),  {
}
,  {
    xDivision: l, barWidth:v, zeroH:h;
}
)), b=this.series[o][A]/this.yRatio[this.yaxisIndex]);
    var L=this.barHelpers.drawGoalLine( {
    barXPosition: S.barXPosition, barYPosition:S.barYPosition, goalX:S.goalX, goalY:S.goalY, barHeight:b, barWidth:v;
}
);
    L&&k.add(L), g=S.y, u=S.x, A>0&&p.push(u+v/2), f.push(g);
    var _=this.barHelpers.getPathFillColor(t, o, A, x);
    this.renderSeries( {
    realIndex: x, pathFill:_, j:A, i:o, pathFrom:S.pathFrom, pathTo:S.pathTo, strokeWidth:C, elSeries:m, x:u, y:g, series:t, barHeight:b, barWidth:v, elDataLabelsWrap:w, elGoalsMarkers:k, visibleSeries:this.visibleI, type:"bar"}
);
}i.globals.seriesXvalues[x]=p, i.globals.seriesYvalues[x]=f, n.add(m);
}return n;
}},  {
    key: "renderSeries", value:function(t) {
    var e=t.realIndex, i=t.pathFill, a=t.lineFill, s=t.j, n=t.i, o=t.pathFrom, r=t.pathTo, l=t.strokeWidth, c=t.elSeries, h=t.x, d=t.y, u=t.y1, g=t.y2, f=t.series, p=t.barHeight, x=t.barWidth, m=t.barYPosition, b=t.elDataLabelsWrap, v=t.elGoalsMarkers, y=t.visibleSeries, w=t.type, k=this.w, A=new us(this.ctx);
    a||(a=this.barOptions.distributed?k.globals.stroke.colors[s]: k.globals.stroke.colors[e]), k.config.series[n].data[s]&&k.config.series[n].data[s].strokeColor&&(a=k.config.series[n].data[s].strokeColor), this.isNullValue&&(i="none");
    var C=s/k.config.chart.animations.animateGradually.delay*(k.config.chart.animations.speed/k.globals.dataPoints)/2.4, S=A.renderPaths( {
    i: n, j:s, realIndex:e, pathFrom:o, pathTo:r, stroke:a, strokeWidth:l, strokeLineCap:k.config.stroke.lineCap, fill:i, animationDelay:C, initialSpeed:k.config.chart.animations.speed, dataChangeSpeed:k.config.chart.animations.dynamicAnimation.speed, className:"apexcharts-".concat(w, "-area");
}
);
    S.attr("clip-path", "url(#gridRectMask".concat(k.globals.cuid, ")"));
    var E=k.config.forecastDataPoints;
    E.count>0&&s>=k.globals.dataPoints-E.count&&(S.node.setAttribute("stroke-dasharray", E.dashArray), S.node.setAttribute("stroke-width", E.strokeWidth), S.node.setAttribute("fill-opacity", E.fillOpacity)), void 0!==u&&void 0!==g&&(S.attr("data-range-y1", u), S.attr("data-range-y2", g)), new ds(this.ctx).setSelectionFilter(S, e, s), c.add(S);
    var L=new Ss(this).handleBarDataLabels( {
    x: h, y:d, y1:u, y2:g, i:n, j:s, series:f, realIndex:e, barHeight:p, barWidth:x, barYPosition:m, renderedPath:S, visibleSeries:y;
}
);
    return null!==L&&b.add(L), c.add(b), v&&c.add(v), c;
}
},  {
    key: "drawBarPaths", value:function(t) {
    var e=t.indexes, i=t.barHeight, a=t.strokeWidth, s=t.zeroW, n=t.x, o=t.y, r=t.yDivision, l=t.elSeries, c=this.w, h=e.i, d=e.j;
    c.globals.isXNumeric&&(o=(c.globals.seriesX[h][d]-c.globals.minX)/this.invertedXRatio-i);
    var u=o+i*this.visibleI;
    n=this.barHelpers.getXForValue(this.series[h][d], s);
    var g=this.barHelpers.getBarpaths( {
    barYPosition: u, barHeight:i, x1:s, x2:n, strokeWidth:a, series:this.series, realIndex:e.realIndex, i:h, j:d, w:c;
}
);
    return c.globals.isXNumeric||(o+=r), this.barHelpers.barBackground( {
    j: d, i:h, y1:u-i*this.visibleI, y2:i*this.seriesLen, elSeries:l;
}
),  {
    pathTo: g.pathTo, pathFrom:g.pathFrom, x:n, y:o, goalX:this.barHelpers.getGoalValues("x", s, null, h, d), barYPosition:u;
}
}},  {
    key: "drawColumnPaths", value:function(t) {
    var e=t.indexes, i=t.x, a=t.y, s=t.xDivision, n=t.barWidth, o=t.zeroH, r=t.strokeWidth, l=t.elSeries, c=this.w, h=e.realIndex, d=e.i, u=e.j, g=e.bc;
    if(c.globals.isXNumeric) {
    var f=h;
    c.globals.seriesX[h].length||(f=c.globals.maxValsInArrayIndex), i=(c.globals.seriesX[f][u]-c.globals.minX)/this.xRatio-n*this.seriesLen/2;
}
var p=i+n*this.visibleI;
    a=this.barHelpers.getYForValue(this.series[d][u], o);
    var x=this.barHelpers.getColumnPaths( {
    barXPosition: p, barWidth:n, y1:o, y2:a, strokeWidth:r, series:this.series, realIndex:e.realIndex, i:d, j:u, w:c;
}
);
    return c.globals.isXNumeric||(i+=s), this.barHelpers.barBackground( {
    bc: g, j:u, i:d, x1:p-r/2-n*this.visibleI, x2:n*this.seriesLen+r/2, elSeries:l;
}
),  {
    pathTo: x.pathTo, pathFrom:x.pathFrom, x:i, y:a, goalY:this.barHelpers.getGoalValues("y", null, o, d, u), barXPosition:p;
}
}},  {
    key: "getPreviousPath", value:function(t, e) {
    for(var i, a=this.w, s=0;
    s<a.globals.previousPaths.length;
    s++) {
    var n=a.globals.previousPaths[s];
    n.paths&&n.paths.length>0&&parseInt(n.realIndex, 10)===parseInt(t, 10)&&void 0!==a.globals.previousPaths[s].paths[e]&&(i=a.globals.previousPaths[s].paths[e].d);
}
return i;
}}]), t;
}(), Ms=function() {
    function t(e) {
    Ja(this, t), this.ctx=e, this.w=e.w, this.months31=[1, 3, 5, 7, 8, 10, 12], this.months30=[2, 4, 6, 9, 11], this.daysCntOfYear=[0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
}
return ts(t, [ {
    key: "isValidDate", value:function(t) {
    return!isNaN(this.parseDate(t));
}
},  {
    key: "getTimeStamp", value:function(t) {
    return Date.parse(t)?this.w.config.xaxis.labels.datetimeUTC?new Date(new Date(t).toISOString().substr(0, 25)).getTime(): new Date(t).getTime():t;
}
},  {
    key: "getDate", value:function(t) {
    return this.w.config.xaxis.labels.datetimeUTC?new Date(new Date(t).toUTCString()): new Date(t);
}
},  {
    key: "parseDate", value:function(t) {
    var e=Date.parse(t);
    if(!isNaN(e))return this.getTimeStamp(t);
    var i=Date.parse(t.replace(/-/g, "/").replace(/[a-z]+/gi, " "));
    return this.getTimeStamp(i);
}
},  {
    key: "parseDateWithTimezone", value:function(t) {
    return Date.parse(t.replace(/-/g, "/").replace(/[a-z]+/gi, " "));
}
},  {
    key: "formatDate", value:function(t, e) {
    var i=this.w.globals.locale, a=this.w.config.xaxis.labels.datetimeUTC, s=["\0"].concat(rs(i.months)), n=[""].concat(rs(i.shortMonths)), o=[""].concat(rs(i.days)), r=[""].concat(rs(i.shortDays));
    function l(t, e) {
    var i=t+"";
    for(e=e||2;
    i.length<e;
    )i="0"+i;
    return i;
}
var c=a?t.getUTCFullYear(): t.getFullYear();
    e=(e=(e=e.replace(/(^|[^\\])yyyy+/g, "$1"+c)).replace(/(^|[^\\])yy/g, "$1"+c.toString().substr(2, 2))).replace(/(^|[^\\])y/g, "$1"+c);
    var h=(a?t.getUTCMonth(): t.getMonth())+1;
    e=(e=(e=(e=e.replace(/(^|[^\\])MMMM+/g, "$1"+s[0])).replace(/(^|[^\\])MMM/g, "$1"+n[0])).replace(/(^|[^\\])MM/g, "$1"+l(h))).replace(/(^|[^\\])M/g, "$1"+h);
    var d=a?t.getUTCDate(): t.getDate();
    e=(e=(e=(e=e.replace(/(^|[^\\])dddd+/g, "$1"+o[0])).replace(/(^|[^\\])ddd/g, "$1"+r[0])).replace(/(^|[^\\])dd/g, "$1"+l(d))).replace(/(^|[^\\])d/g, "$1"+d);
    var u=a?t.getUTCHours(): t.getHours(), g=u>12?u-12:0===u?12:u;
    e=(e=(e=(e=e.replace(/(^|[^\\])HH+/g, "$1"+l(u))).replace(/(^|[^\\])H/g, "$1"+u)).replace(/(^|[^\\])hh+/g, "$1"+l(g))).replace(/(^|[^\\])h/g, "$1"+g);
    var f=a?t.getUTCMinutes(): t.getMinutes();
    e=(e=e.replace(/(^|[^\\])mm+/g, "$1"+l(f))).replace(/(^|[^\\])m/g, "$1"+f);
    var p=a?t.getUTCSeconds(): t.getSeconds();
    e=(e=e.replace(/(^|[^\\])ss+/g, "$1"+l(p))).replace(/(^|[^\\])s/g, "$1"+p);
    var x=a?t.getUTCMilliseconds(): t.getMilliseconds();
    e=e.replace(/(^|[^\\])fff+/g, "$1"+l(x, 3)), x=Math.round(x/10), e=e.replace(/(^|[^\\])ff/g, "$1"+l(x)), x=Math.round(x/10);
    var m=u<12?"AM": "PM";
    e=(e=(e=e.replace(/(^|[^\\])f/g, "$1"+x)).replace(/(^|[^\\])TT+/g, "$1"+m)).replace(/(^|[^\\])T/g, "$1"+m.charAt(0));
    var b=m.toLowerCase();
    e=(e=e.replace(/(^|[^\\])tt+/g, "$1"+b)).replace(/(^|[^\\])t/g, "$1"+b.charAt(0));
    var v=-t.getTimezoneOffset(), y=a||!v?"Z": v>0?"+":"-";
    if(!a) {
    var w=(v=Math.abs(v))%60;
    y+=l(Math.floor(v/60))+": "+l(w);
}
e=e.replace(/(^|[^\\])K/g, "$1"+y);
    var k=(a?t.getUTCDay(): t.getDay())+1;
    return(e=(e=(e=(e=e.replace(new RegExp(o[0], "g"), o[k])).replace(new RegExp(r[0], "g"), r[k])).replace(new RegExp(s[0], "g"), s[h])).replace(new RegExp(n[0], "g"), n[h])).replace(/\\(.)/g, "$1");
}
},  {
    key: "getTimeUnitsfromTimestamp", value:function(t, e, i) {
    var a=this.w;
    void 0!==a.config.xaxis.min&&(t=a.config.xaxis.min), void 0!==a.config.xaxis.max&&(e=a.config.xaxis.max);
    var s=this.getDate(t), n=this.getDate(e), o=this.formatDate(s, "yyyy MM dd HH mm ss fff").split(" "), r=this.formatDate(n, "yyyy MM dd HH mm ss fff").split(" ");
    return {
    minMillisecond: parseInt(o[6], 10), maxMillisecond:parseInt(r[6], 10), minSecond:parseInt(o[5], 10), maxSecond:parseInt(r[5], 10), minMinute:parseInt(o[4], 10), maxMinute:parseInt(r[4], 10), minHour:parseInt(o[3], 10), maxHour:parseInt(r[3], 10), minDate:parseInt(o[2], 10), maxDate:parseInt(r[2], 10), minMonth:parseInt(o[1], 10)-1, maxMonth:parseInt(r[1], 10)-1, minYear:parseInt(o[0], 10), maxYear:parseInt(r[0], 10);
}
}},  {
    key: "isLeapYear", value:function(t) {
    return t%4==0&&t%100!=0||t%400==0;
}
},  {
    key: "calculcateLastDaysOfMonth", value:function(t, e, i) {
    return this.determineDaysOfMonths(t, e)-i;
}
},  {
    key: "determineDaysOfYear", value:function(t) {
    var e=365;
    return this.isLeapYear(t)&&(e=366), e;
}
},  {
    key: "determineRemainingDaysOfYear", value:function(t, e, i) {
    var a=this.daysCntOfYear[e]+i;
    return e>1&&this.isLeapYear()&&a++, a;
}
},  {
    key: "determineDaysOfMonths", value:function(t, e) {
    var i=30;
    switch(t=cs.monthMod(t), !0) {
    case this.months30.indexOf(t)>-1: 2===t&&(i=this.isLeapYear(e)?29:28);
    break;
    case this.months31.indexOf(t)>-1: default:i=31;
}
return i;
}}]), t;
}(), Ts=function(t) {
    is(i, _s);
    var e=os(i);
    function i() {
    return Ja(this, i), e.apply(this, arguments);
}
return ts(i, [ {
    key: "draw", value:function(t, e) {
    var i=this.w, a=new us(this.ctx);
    this.rangeBarOptions=this.w.config.plotOptions.rangeBar, this.series=t, this.seriesRangeStart=i.globals.seriesRangeStart, this.seriesRangeEnd=i.globals.seriesRangeEnd, this.barHelpers.initVariables(t);
    for(var s=a.group( {
    class: "apexcharts-rangebar-series apexcharts-plot-series"}
), n=0;
    n<t.length;
    n++) {
    var o, r, l, c=void 0, h=void 0, d=void 0, u=i.globals.comboCharts?e[n]: n, g=a.group( {
    class: "apexcharts-series", seriesName:cs.escapeString(i.globals.seriesNames[u]), rel:n+1, "data:realIndex":u;
}
);
    this.ctx.series.addCollapsedClassToSeries(g, u), t[n].length>0&&(this.visibleI=this.visibleI+1);
    var f=0, p=0;
    this.yRatio.length>1&&(this.yaxisIndex=u);
    var x=this.barHelpers.initialPositions();
    h=x.y, l=x.zeroW, c=x.x, p=x.barWidth, o=x.xDivision, r=x.zeroH;
    for(var m=a.group( {
    class: "apexcharts-datalabels", "data:realIndex":u;
}
), b=a.group( {
    class: "apexcharts-rangebar-goals-markers", style:"pointer-events: none"}
), v=0;
    v<i.globals.dataPoints;
    v++) {
    var y=this.barHelpers.getStrokeWidth(n, v, u), w=this.seriesRangeStart[n][v], k=this.seriesRangeEnd[n][v], A=null, C=null, S= {
    x: c, y:h, strokeWidth:y, elSeries:g;
}
;
    if(d=x.yDivision, f=x.barHeight, this.isHorizontal) {
    C=h+f*this.visibleI;
    var E=this.seriesLen;
    i.config.plotOptions.bar.rangeBarGroupRows&&(E=1);
    var L=(d-f*E)/2;
    if(void 0===i.config.series[n].data[v])break;
    if(i.config.series[n].data[v].x) {
    var _=this.detectOverlappingBars( {
    i: n, j:v, barYPosition:C, srty:L, barHeight:f, yDivision:d, initPositions:x;
}
);
    f=_.barHeight, C=_.barYPosition;
}
p=(A=this.drawRangeBarPaths(Za( {
    indexes:  {
    i: n, j:v, realIndex:u;
}
, barHeight:f, barYPosition:C, zeroW:l, yDivision:d, y1:w, y2:k;
}, S))).barWidth;
}else f=(A=this.drawRangeColumnPaths(Za( {
    indexes:  {
    i: n, j:v, realIndex:u;
}
, zeroH:r, barWidth:p, xDivision:o;
}, S))).barHeight;
    var M=this.barHelpers.drawGoalLine( {
    barXPosition: A.barXPosition, barYPosition:C, goalX:A.goalX, goalY:A.goalY, barHeight:f, barWidth:p;
}
);
    M&&b.add(M), h=A.y, c=A.x;
    var T=this.barHelpers.getPathFillColor(t, n, v, u), P=i.globals.stroke.colors[u];
    this.renderSeries( {
    realIndex: u, pathFill:T, lineFill:P, j:v, i:n, x:c, y:h, y1:w, y2:k, pathFrom:A.pathFrom, pathTo:A.pathTo, strokeWidth:y, elSeries:g, series:t, barHeight:f, barYPosition:C, barWidth:p, elDataLabelsWrap:m, elGoalsMarkers:b, visibleSeries:this.visibleI, type:"rangebar"}
);
}s.add(g);
}return s;
}},  {
    key: "detectOverlappingBars", value:function(t) {
    var e=t.i, i=t.j, a=t.barYPosition, s=t.srty, n=t.barHeight, o=t.yDivision, r=t.initPositions, l=this.w, c=[], h=l.config.series[e].data[i].rangeName, d=l.config.series[e].data[i].x, u=l.globals.labels.indexOf(d), g=l.globals.seriesRangeBar[e].findIndex((function(t) {
    return t.x===d&&t.overlaps.length>0;
}
));
    return a=l.config.plotOptions.bar.rangeBarGroupRows?s+o*u: s+n*this.visibleI+o*u, g>-1&&!l.config.plotOptions.bar.rangeBarOverlap&&(c=l.globals.seriesRangeBar[e][g].overlaps).indexOf(h)>-1&&(a=(n=r.barHeight/c.length)*this.visibleI+o*(100-parseInt(this.barOptions.barHeight, 10))/100/2+n*(this.visibleI+c.indexOf(h))+o*u),  {
    barYPosition: a, barHeight:n;
}
}},  {
    key: "drawRangeColumnPaths", value:function(t) {
    var e=t.indexes, i=t.x;
    t.strokeWidth;
    var a=t.xDivision, s=t.barWidth, n=t.zeroH, o=this.w, r=e.i, l=e.j, c=this.yRatio[this.yaxisIndex], h=e.realIndex, d=this.getRangeValue(h, l), u=Math.min(d.start, d.end), g=Math.max(d.start, d.end);
    o.globals.isXNumeric&&(i=(o.globals.seriesX[r][l]-o.globals.minX)/this.xRatio-s/2);
    var f=i+s*this.visibleI;
    void 0===this.series[r][l]||null===this.series[r][l]?u=n: (u=n-u/c, g=n-g/c);
    var p=Math.abs(g-u), x=this.barHelpers.getColumnPaths( {
    barXPosition: f, barWidth:s, y1:u, y2:g, strokeWidth:this.strokeWidth, series:this.seriesRangeEnd, realIndex:e.realIndex, i:h, j:l, w:o;
}
);
    return o.globals.isXNumeric||(i+=a),  {
    pathTo: x.pathTo, pathFrom:x.pathFrom, barHeight:p, x:i, y:g, goalY:this.barHelpers.getGoalValues("y", null, n, r, l), barXPosition:f;
}
}},  {
    key: "drawRangeBarPaths", value:function(t) {
    var e=t.indexes, i=t.y, a=t.y1, s=t.y2, n=t.yDivision, o=t.barHeight, r=t.barYPosition, l=t.zeroW, c=this.w, h=l+a/this.invertedYRatio, d=l+s/this.invertedYRatio, u=Math.abs(d-h), g=this.barHelpers.getBarpaths( {
    barYPosition: r, barHeight:o, x1:h, x2:d, strokeWidth:this.strokeWidth, series:this.seriesRangeEnd, i:e.realIndex, realIndex:e.realIndex, j:e.j, w:c;
}
);
    return c.globals.isXNumeric||(i+=n),  {
    pathTo: g.pathTo, pathFrom:g.pathFrom, barWidth:u, x:d, goalX:this.barHelpers.getGoalValues("x", l, null, e.realIndex, e.j), y:i;
}
}},  {
    key: "getRangeValue", value:function(t, e) {
    var i=this.w;
    return {
    start: i.globals.seriesRangeStart[t][e], end:i.globals.seriesRangeEnd[t][e];
}
}},  {
    key: "getTooltipValues", value:function(t) {
    var e=t.ctx, i=t.seriesIndex, a=t.dataPointIndex, s=t.y1, n=t.y2, o=t.w, r=o.globals.seriesRangeStart[i][a], l=o.globals.seriesRangeEnd[i][a], c=o.globals.labels[a], h=o.config.series[i].name?o.config.series[i].name: "", d=o.config.tooltip.y.formatter, u=o.config.tooltip.y.title.formatter, g= {
    w: o, seriesIndex:i, dataPointIndex:a, start:r, end:l;
}
;
    "function"==typeof u&&(h=u(h, g)), Number.isFinite(s)&&Number.isFinite(n)&&(r=s, l=n, o.config.series[i].data[a].x&&(c=o.config.series[i].data[a].x+": "), "function"==typeof d&&(c=d(c, g)));
    var f="", p="", x=o.globals.colors[i];
    if(void 0===o.config.tooltip.x.formatter)if("datetime"===o.config.xaxis.type) {
    var m=new Ms(e);
    f=m.formatDate(m.getDate(r), o.config.tooltip.x.format), p=m.formatDate(m.getDate(l), o.config.tooltip.x.format);
}
else f=r, p=l;
    else f=o.config.tooltip.x.formatter(r), p=o.config.tooltip.x.formatter(l);
    return {
    start: r, end:l, startVal:f, endVal:p, ylabel:c, color:x, seriesName:h;
}
}},  {
    key: "buildCustomTooltipHTML", value:function(t) {
    return'<div class="apexcharts-tooltip-rangebar"><div> <span class="series-name" style="color:  '+t.color+'">'+(t.seriesName||"")+'</span></div><div> <span class="category">'+t.ylabel+' </span> <span class="value start-value">'+t.start+'</span> <span class="separator">-</span> <span class="value end-value">'+t.end+"</span></div></div>"}
}]), i;
}(), Ps=function() {
    function t(e) {
    Ja(this, t), this.opts=e;
}
return ts(t, [ {
    key: "line", value:function() {
    return {
    chart:  {
    animations:  {
    easing: "swing"}
}, dataLabels: {
    enabled: !1;
}
, stroke: {
    width: 5, curve:"straight"}
, markers: {
    size: 0, hover: {
    sizeOffset: 6;
}
}, xaxis: {
    crosshairs:  {
    width: 1;
}
}}}},  {
    key: "sparkline", value:function(t) {
    return this.opts.yaxis[0].show=!1, this.opts.yaxis[0].title.text="", this.opts.yaxis[0].axisBorder.show=!1, this.opts.yaxis[0].axisTicks.show=!1, this.opts.yaxis[0].floating=!0, cs.extend(t,  {
    grid:  {
    show: !1, padding: {
    left: 0, right:0, top:0, bottom:0;
}
}, legend: {
    show: !1;
}
, xaxis: {
    labels:  {
    show: !1;
}
, tooltip: {
    enabled: !1;
}
, axisBorder: {
    show: !1;
}
, axisTicks: {
    show: !1;
}
}, chart: {
    toolbar:  {
    show: !1;
}
, zoom: {
    enabled: !1;
}
}, dataLabels: {
    enabled: !1;
}
});
}},  {
    key: "bar", value:function() {
    return {
    chart:  {
    stacked: !1, animations: {
    easing: "swing"}
}, plotOptions: {
    bar:  {
    dataLabels:  {
    position: "center"}
}}, dataLabels: {
    style:  {
    colors: ["#fff"];
}
, background: {
    enabled: !1;
}
}, stroke: {
    width: 0, lineCap:"round"}
, fill: {
    opacity: .85;
}
, legend: {
    markers:  {
    shape: "square", radius:2, size:8;
}
}, tooltip: {
    shared: !1, intersect:!0;
}
, xaxis: {
    tooltip:  {
    enabled: !1;
}
, tickPlacement:"between", crosshairs: {
    width: "barWidth", position:"back", fill: {
    type: "gradient"}
, dropShadow: {
    enabled: !1;
}
, stroke: {
    width: 0;
}
}}}}},  {
    key: "candlestick", value:function() {
    var t=this;
    return {
    stroke:  {
    width: 1, colors:["#333"];
}
, fill: {
    opacity: 1;
}
, dataLabels: {
    enabled: !1;
}
, tooltip: {
    shared: !0, custom:function(e) {
    var i=e.seriesIndex, a=e.dataPointIndex, s=e.w;
    return t._getBoxTooltip(s, i, a, ["Open", "High", "", "Low", "Close"], "candlestick");
}
}, states:  {
    active:  {
    filter:  {
    type: "none"}
}}, xaxis: {
    crosshairs:  {
    width: 1;
}
}}}},  {
    key: "boxPlot", value:function() {
    var t=this;
    return {
    chart:  {
    animations:  {
    dynamicAnimation:  {
    enabled: !1;
}
}}, stroke: {
    width: 1, colors:["#24292e"];
}
, dataLabels: {
    enabled: !1;
}
, tooltip: {
    shared: !0, custom:function(e) {
    var i=e.seriesIndex, a=e.dataPointIndex, s=e.w;
    return t._getBoxTooltip(s, i, a, ["Minimum", "Q1", "Median", "Q3", "Maximum"], "boxPlot");
}
}, markers:  {
    size: 5, strokeWidth:1, strokeColors:"#111"}
, xaxis: {
    crosshairs:  {
    width: 1;
}
}}}},  {
    key: "rangeBar", value:function() {
    return {
    stroke:  {
    width: 0, lineCap:"square"}
, plotOptions: {
    bar:  {
    borderRadius: 0, dataLabels: {
    position: "center"}
}}, dataLabels: {
    enabled: !1, formatter:function(t, e) {
    e.ctx;
    var i=e.seriesIndex, a=e.dataPointIndex, s=e.w, n=s.globals.seriesRangeStart[i][a];
    return s.globals.seriesRangeEnd[i][a]-n;
}
, background:  {
    enabled: !1;
}
, style: {
    colors: ["#fff"];
}
}, tooltip: {
    shared: !1, followCursor:!0, custom:function(t) {
    return t.w.config.plotOptions&&t.w.config.plotOptions.bar&&t.w.config.plotOptions.bar.horizontal?(i=new Ts((e=t).ctx, null), a=i.getTooltipValues(e), s=a.color, n=a.seriesName, o=a.ylabel, r=a.startVal, l=a.endVal, i.buildCustomTooltipHTML( {
    color: s, seriesName:n, ylabel:o, start:r, end:l;
}
)):function(t) {
    var e=new Ts(t.ctx, null), i=e.getTooltipValues(t), a=i.color, s=i.seriesName, n=i.ylabel, o=i.start, r=i.end;
    return e.buildCustomTooltipHTML( {
    color: a, seriesName:s, ylabel:n, start:o, end:r;
}
);
}(t);
    var e, i, a, s, n, o, r, l;
}
}, xaxis:  {
    tickPlacement: "between", tooltip: {
    enabled: !1;
}
, crosshairs: {
    stroke:  {
    width: 0;
}
}}}}},  {
    key: "area", value:function() {
    return {
    stroke:  {
    width: 4;
}
, fill: {
    type: "gradient", gradient: {
    inverseColors: !1, shade:"light", type:"vertical", opacityFrom:.65, opacityTo:.5, stops:[0, 100, 100];
}
}, markers: {
    size: 0, hover: {
    sizeOffset: 6;
}
}, tooltip: {
    followCursor: !1;
}
}}},  {
    key: "brush", value:function(t) {
    return cs.extend(t,  {
    chart:  {
    toolbar:  {
    autoSelected: "selection", show:!1;
}
, zoom: {
    enabled: !1;
}
}, dataLabels: {
    enabled: !1;
}
, stroke: {
    width: 1;
}
, tooltip: {
    enabled: !1;
}
, xaxis: {
    tooltip:  {
    enabled: !1;
}
}});
}},  {
    key: "stacked100", value:function(t) {
    t.dataLabels=t.dataLabels|| {
}
, t.dataLabels.formatter=t.dataLabels.formatter||void 0;
    var e=t.dataLabels.formatter;
    return t.yaxis.forEach((function(e, i) {
    t.yaxis[i].min=0, t.yaxis[i].max=100;
}
)), "bar"===t.chart.type&&(t.dataLabels.formatter=e||function(t) {
    return"number"==typeof t&&t?t.toFixed(0)+"%": t;
}
), t;
}},  {
    key: "convertCatToNumeric", value:function(t) {
    return t.xaxis.convertedCatToNumeric=!0, t;
}
},  {
    key: "convertCatToNumericXaxis", value:function(t, e, i) {
    t.xaxis.type="numeric", t.xaxis.labels=t.xaxis.labels|| {
}
, t.xaxis.labels.formatter=t.xaxis.labels.formatter||function(t) {
    return cs.isNumber(t)?Math.floor(t): t;
}
;
    var a=t.xaxis.labels.formatter, s=t.xaxis.categories&&t.xaxis.categories.length?t.xaxis.categories: t.labels;
    return i&&i.length&&(s=i.map((function(t) {
    return Array.isArray(t)?t: String(t);
}
))), s&&s.length&&(t.xaxis.labels.formatter=function(t) {
    return cs.isNumber(t)?a(s[Math.floor(t)-1]): a(t);
}
), t.xaxis.categories=[], t.labels=[], t.xaxis.tickAmount=t.xaxis.tickAmount||"dataPoints", t;
}},  {
    key: "bubble", value:function() {
    return {
    dataLabels:  {
    style:  {
    colors: ["#fff"];
}
}, tooltip: {
    shared: !1, intersect:!0;
}
, xaxis: {
    crosshairs:  {
    width: 0;
}
}, fill: {
    type: "solid", gradient: {
    shade: "light", inverse:!0, shadeIntensity:.55, opacityFrom:.4, opacityTo:.8;
}
}}}},  {
    key: "scatter", value:function() {
    return {
    dataLabels:  {
    enabled: !1;
}
, tooltip: {
    shared: !1, intersect:!0;
}
, markers: {
    size: 6, strokeWidth:1, hover: {
    sizeOffset: 2;
}
}}}},  {
    key: "heatmap", value:function() {
    return {
    chart:  {
    stacked: !1;
}
, fill: {
    opacity: 1;
}
, dataLabels: {
    style:  {
    colors: ["#fff"];
}
}, stroke: {
    colors: ["#fff"];
}
, tooltip: {
    followCursor: !0, marker: {
    show: !1;
}
, x: {
    show: !1;
}
}, legend: {
    position: "top", markers: {
    shape: "square", size:10, offsetY:2;
}
}, grid: {
    padding:  {
    right: 20;
}
}}}},  {
    key: "treemap", value:function() {
    return {
    chart:  {
    zoom:  {
    enabled: !1;
}
}, dataLabels: {
    style:  {
    fontSize: 14, fontWeight:600, colors:["#fff"];
}
}, stroke: {
    show: !0, width:2, colors:["#fff"];
}
, legend: {
    show: !1;
}
, fill: {
    gradient:  {
    stops: [0, 100];
}
}, tooltip: {
    followCursor: !0, x: {
    show: !1;
}
}, grid: {
    padding:  {
    left: 0, right:0;
}
}, xaxis: {
    crosshairs:  {
    show: !1;
}
, tooltip: {
    enabled: !1;
}
}}}},  {
    key: "pie", value:function() {
    return {
    chart:  {
    toolbar:  {
    show: !1;
}
}, plotOptions: {
    pie:  {
    donut:  {
    labels:  {
    show: !1;
}
}}}, dataLabels: {
    formatter: function(t) {
    return t.toFixed(1)+"%"}
, style:  {
    colors: ["#fff"];
}
, background: {
    enabled: !1;
}
, dropShadow: {
    enabled: !0;
}
}, stroke: {
    colors: ["#fff"];
}
, fill: {
    opacity: 1, gradient: {
    shade: "light", stops:[0, 100];
}
}, tooltip: {
    theme: "dark", fillSeriesColor:!0;
}
, legend: {
    position: "right"}
}}},  {
    key: "donut", value:function() {
    return {
    chart:  {
    toolbar:  {
    show: !1;
}
}, dataLabels: {
    formatter: function(t) {
    return t.toFixed(1)+"%"}
, style:  {
    colors: ["#fff"];
}
, background: {
    enabled: !1;
}
, dropShadow: {
    enabled: !0;
}
}, stroke: {
    colors: ["#fff"];
}
, fill: {
    opacity: 1, gradient: {
    shade: "light", shadeIntensity:.35, stops:[80, 100], opacityFrom:1, opacityTo:1;
}
}, tooltip: {
    theme: "dark", fillSeriesColor:!0;
}
, legend: {
    position: "right"}
}}},  {
    key: "polarArea", value:function() {
    return this.opts.yaxis[0].tickAmount=this.opts.yaxis[0].tickAmount?this.opts.yaxis[0].tickAmount: 6,  {
    chart:  {
    toolbar:  {
    show: !1;
}
}, dataLabels: {
    formatter: function(t) {
    return t.toFixed(1)+"%"}
, enabled: !1;
}, stroke: {
    show: !0, width:2;
}
, fill: {
    opacity: .7;
}
, tooltip: {
    theme: "dark", fillSeriesColor:!0;
}
, legend: {
    position: "right"}
}}},  {
    key: "radar", value:function() {
    return this.opts.yaxis[0].labels.offsetY=this.opts.yaxis[0].labels.offsetY?this.opts.yaxis[0].labels.offsetY: 6,  {
    dataLabels:  {
    enabled: !1, style: {
    fontSize: "11px"}
}, stroke: {
    width: 2;
}
, markers: {
    size: 3, strokeWidth:1, strokeOpacity:1;
}
, fill: {
    opacity: .2;
}
, tooltip: {
    shared: !1, intersect:!0, followCursor:!0;
}
, grid: {
    show: !1;
}
, xaxis: {
    labels:  {
    formatter: function(t) {
    return t;
}
, style:  {
    colors: ["#a8a8a8"], fontSize:"11px"}
}, tooltip: {
    enabled: !1;
}
, crosshairs: {
    show: !1;
}
}}}},  {
    key: "radialBar", value:function() {
    return {
    chart:  {
    animations:  {
    dynamicAnimation:  {
    enabled: !0, speed:800;
}
}, toolbar: {
    show: !1;
}
}, fill: {
    gradient:  {
    shade: "dark", shadeIntensity:.4, inverseColors:!1, type:"diagonal2", opacityFrom:1, opacityTo:1, stops:[70, 98, 100];
}
}, legend: {
    show: !1, position:"right"}
, tooltip: {
    enabled: !1, fillSeriesColor:!0;
}
}}},  {
    key: "_getBoxTooltip", value:function(t, e, i, a, s) {
    var n=t.globals.seriesCandleO[e][i], o=t.globals.seriesCandleH[e][i], r=t.globals.seriesCandleM[e][i], l=t.globals.seriesCandleL[e][i], c=t.globals.seriesCandleC[e][i];
    return t.config.series[e].type&&t.config.series[e].type!==s?'<div class="apexcharts-custom-tooltip">\n          '.concat(t.config.series[e].name?t.config.series[e].name: "series-"+(e+1), ": <strong>").concat(t.globals.series[e][i], "</strong>\n        </div>"):'<div class="apexcharts-tooltip-box apexcharts-tooltip-'.concat(t.config.chart.type, '">')+"<div>".concat(a[0], ': <span class="value">')+n+"</span></div>"+"<div>".concat(a[1], ': <span class="value">')+o+"</span></div>"+(r?"<div>".concat(a[2], ': <span class="value">')+r+"</span></div>":"")+"<div>".concat(a[3], ': <span class="value">')+l+"</span></div>"+"<div>".concat(a[4], ': <span class="value">')+c+"</span></div></div>"}
}]), t;
}(), Ds=function() {
    function t(e) {
    Ja(this, t), this.opts=e;
}
return ts(t, [ {
    key: "init", value:function(t) {
    var e=t.responsiveOverride, i=this.opts, a=new vs, s=new Ps(i);
    this.chartType=i.chart.type, "histogram"===this.chartType&&(i.chart.type="bar", i=cs.extend( {
    plotOptions:  {
    bar:  {
    columnWidth: "99.99%"}
}}, i)), i=this.extendYAxis(i), i=this.extendAnnotations(i);
    var n=a.init(), o= {
}
;
    if(i&&"object"===Ka(i)) {
    var r= {
}
;
    r=-1!==["line", "area", "bar", "candlestick", "boxPlot", "rangeBar", "histogram", "bubble", "scatter", "heatmap", "treemap", "pie", "polarArea", "donut", "radar", "radialBar"].indexOf(i.chart.type)?s[i.chart.type](): s.line(), i.chart.brush&&i.chart.brush.enabled&&(r=s.brush(r)), i.chart.stacked&&"100%"===i.chart.stackType&&(i=s.stacked100(i)), this.checkForDarkTheme(window.Apex), this.checkForDarkTheme(i), i.xaxis=i.xaxis||window.Apex.xaxis|| {
}
, e||(i.xaxis.convertedCatToNumeric=!1), ((i=this.checkForCatToNumericXAxis(this.chartType, r, i)).chart.sparkline&&i.chart.sparkline.enabled||window.Apex.chart&&window.Apex.chart.sparkline&&window.Apex.chart.sparkline.enabled)&&(r=s.sparkline(r)), o=cs.extend(n, r);
}
var l=cs.extend(o, window.Apex);
    return n=cs.extend(l, i), this.handleUserInputErrors(n);
}
},  {
    key: "checkForCatToNumericXAxis", value:function(t, e, i) {
    var a=new Ps(i), s=("bar"===t||"boxPlot"===t)&&i.plotOptions&&i.plotOptions.bar&&i.plotOptions.bar.horizontal, n="pie"===t||"polarArea"===t||"donut"===t||"radar"===t||"radialBar"===t||"heatmap"===t, o="datetime"!==i.xaxis.type&&"numeric"!==i.xaxis.type, r=i.xaxis.tickPlacement?i.xaxis.tickPlacement: e.xaxis&&e.xaxis.tickPlacement;
    return s||n||!o||"between"===r||(i=a.convertCatToNumeric(i)), i;
}
},  {
    key: "extendYAxis", value:function(t, e) {
    var i=new vs;
    (void 0===t.yaxis||!t.yaxis||Array.isArray(t.yaxis)&&0===t.yaxis.length)&&(t.yaxis= {
}
), t.yaxis.constructor!==Array&&window.Apex.yaxis&&window.Apex.yaxis.constructor!==Array&&(t.yaxis=cs.extend(t.yaxis, window.Apex.yaxis)), t.yaxis.constructor!==Array?t.yaxis=[cs.extend(i.yAxis, t.yaxis)]: t.yaxis=cs.extendArray(t.yaxis, i.yAxis);
    var a=!1;
    t.yaxis.forEach((function(t) {
    t.logarithmic&&(a=!0);
}
));
    var s=t.series;
    return e&&!s&&(s=e.config.series), a&&s.length!==t.yaxis.length&&s.length&&(t.yaxis=s.map((function(e, a) {
    if(e.name||(s[a].name="series-".concat(a+1)), t.yaxis[a])return t.yaxis[a].seriesName=s[a].name, t.yaxis[a];
    var n=cs.extend(i.yAxis, t.yaxis[0]);
    return n.show=!1, n;
}
))), a&&s.length>1&&s.length!==t.yaxis.length&&console.warn("A multi-series logarithmic chart should have equal number of series and y-axes. Please make sure to equalize both."), t;
}},  {
    key: "extendAnnotations", value:function(t) {
    return void 0===t.annotations&&(t.annotations= {
}
, t.annotations.yaxis=[], t.annotations.xaxis=[], t.annotations.points=[]), t=this.extendYAxisAnnotations(t), t=this.extendXAxisAnnotations(t), this.extendPointAnnotations(t);
}
},  {
    key: "extendYAxisAnnotations", value:function(t) {
    var e=new vs;
    return t.annotations.yaxis=cs.extendArray(void 0!==t.annotations.yaxis?t.annotations.yaxis: [], e.yAxisAnnotation), t;
}
},  {
    key: "extendXAxisAnnotations", value:function(t) {
    var e=new vs;
    return t.annotations.xaxis=cs.extendArray(void 0!==t.annotations.xaxis?t.annotations.xaxis: [], e.xAxisAnnotation), t;
}
},  {
    key: "extendPointAnnotations", value:function(t) {
    var e=new vs;
    return t.annotations.points=cs.extendArray(void 0!==t.annotations.points?t.annotations.points: [], e.pointAnnotation), t;
}
},  {
    key: "checkForDarkTheme", value:function(t) {
    t.theme&&"dark"===t.theme.mode&&(t.tooltip||(t.tooltip= {
}
), "light"!==t.tooltip.theme&&(t.tooltip.theme="dark"), t.chart.foreColor||(t.chart.foreColor="#f6f7f8"), t.chart.background||(t.chart.background="#424242"), t.theme.palette||(t.theme.palette="palette4"));
}
},  {
    key: "handleUserInputErrors", value:function(t) {
    var e=t;
    if(e.tooltip.shared&&e.tooltip.intersect)throw new Error("tooltip.shared cannot be enabled when tooltip.intersect is true. Turn off any other option by setting it to false.");
    if("bar"===e.chart.type&&e.plotOptions.bar.horizontal) {
    if(e.yaxis.length>1)throw new Error("Multiple Y Axis for bars are not supported. Switch to column chart by setting plotOptions.bar.horizontal=false");
    e.yaxis[0].reversed&&(e.yaxis[0].opposite=!0), e.xaxis.tooltip.enabled=!1, e.yaxis[0].tooltip.enabled=!1, e.chart.zoom.enabled=!1;
}
return"bar"!==e.chart.type&&"rangeBar"!==e.chart.type||e.tooltip.shared&&"barWidth"===e.xaxis.crosshairs.width&&e.series.length>1&&(e.xaxis.crosshairs.width="tickWidth"), "candlestick"!==e.chart.type&&"boxPlot"!==e.chart.type||e.yaxis[0].reversed&&(console.warn("Reversed y-axis in ".concat(e.chart.type, " chart is not supported.")), e.yaxis[0].reversed=!1), Array.isArray(e.stroke.width)&&"line"!==e.chart.type&&"area"!==e.chart.type&&(console.warn("stroke.width option accepts array only for line and area charts. Reverted back to Number"), e.stroke.width=e.stroke.width[0]), e;
}}]), t;
}(), Is=function() {
    function t() {
    Ja(this, t);
}
return ts(t, [ {
    key: "initGlobalVars", value:function(t) {
    t.series=[], t.seriesCandleO=[], t.seriesCandleH=[], t.seriesCandleM=[], t.seriesCandleL=[], t.seriesCandleC=[], t.seriesRangeStart=[], t.seriesRangeEnd=[], t.seriesRangeBar=[], t.seriesPercent=[], t.seriesGoals=[], t.seriesX=[], t.seriesZ=[], t.seriesNames=[], t.seriesTotals=[], t.seriesLog=[], t.seriesColors=[], t.stackedSeriesTotals=[], t.seriesXvalues=[], t.seriesYvalues=[], t.labels=[], t.categoryLabels=[], t.timescaleLabels=[], t.noLabelsProvided=!1, t.resizeTimer=null, t.selectionResizeTimer=null, t.delayedElements=[], t.pointsArray=[], t.dataLabelsRects=[], t.isXNumeric=!1, t.xaxisLabelsCount=0, t.skipLastTimelinelabel=!1, t.skipFirstTimelinelabel=!1, t.isDataXYZ=!1, t.isMultiLineX=!1, t.isMultipleYAxis=!1, t.maxY=-Number.MAX_VALUE, t.minY=Number.MIN_VALUE, t.minYArr=[], t.maxYArr=[], t.maxX=-Number.MAX_VALUE, t.minX=Number.MAX_VALUE, t.initialMaxX=-Number.MAX_VALUE, t.initialMinX=Number.MAX_VALUE, t.maxDate=0, t.minDate=Number.MAX_VALUE, t.minZ=Number.MAX_VALUE, t.maxZ=-Number.MAX_VALUE, t.minXDiff=Number.MAX_VALUE, t.yAxisScale=[], t.xAxisScale=null, t.xAxisTicksPositions=[], t.yLabelsCoords=[], t.yTitleCoords=[], t.barPadForNumericAxis=0, t.padHorizontal=0, t.xRange=0, t.yRange=[], t.zRange=0, t.dataPoints=0, t.xTickAmount=0;
}
},  {
    key: "globalVars", value:function(t) {
    return {
    chartID: null, cuid:null, events: {
    beforeMount: [], mounted:[], updated:[], clicked:[], selection:[], dataPointSelection:[], zoomed:[], scrolled:[];
}
, colors:[], clientX:null, clientY:null, fill: {
    colors: [];
}
, stroke: {
    colors: [];
}
, dataLabels: {
    style:  {
    colors: [];
}
}, radarPolygons: {
    fill:  {
    colors: [];
}
}, markers: {
    colors: [], size:t.markers.size, largestSize:0;
}
, animationEnded:!1, isTouchDevice:"ontouchstart"in window||navigator.msMaxTouchPoints, isDirty:!1, isExecCalled:!1, initialConfig:null, initialSeries:[], lastXAxis:[], lastYAxis:[], columnSeries:null, labels:[], timescaleLabels:[], noLabelsProvided:!1, allSeriesCollapsed:!1, collapsedSeries:[], collapsedSeriesIndices:[], ancillaryCollapsedSeries:[], ancillaryCollapsedSeriesIndices:[], risingSeries:[], dataFormatXNumeric:!1, capturedSeriesIndex:-1, capturedDataPointIndex:-1, selectedDataPoints:[], goldenPadding:35, invalidLogScale:!1, ignoreYAxisIndexes:[], yAxisSameScaleIndices:[], maxValsInArrayIndex:0, radialSize:0, selection:void 0, zoomEnabled:"zoom"===t.chart.toolbar.autoSelected&&t.chart.toolbar.tools.zoom&&t.chart.zoom.enabled, panEnabled:"pan"===t.chart.toolbar.autoSelected&&t.chart.toolbar.tools.pan, selectionEnabled:"selection"===t.chart.toolbar.autoSelected&&t.chart.toolbar.tools.selection, yaxis:null, mousedown:!1, lastClientPosition: {
}
, visibleXRange:void 0, yValueDecimal:0, total:0, SVGNS:"http://www.w3.org/2000/svg", svgWidth:0, svgHeight:0, noData:!1, locale: {
}
, dom: {
}
, memory: {
    methodsToExec: [];
}
, shouldAnimate:!0, skipLastTimelinelabel:!1, skipFirstTimelinelabel:!1, delayedElements:[], axisCharts:!0, isDataXYZ:!1, resized:!1, resizeTimer:null, comboCharts:!1, dataChanged:!1, previousPaths:[], allSeriesHasEqualX:!0, pointsArray:[], dataLabelsRects:[], lastDrawnDataLabelsIndexes:[], hasNullValues:!1, easing:null, zoomed:!1, gridWidth:0, gridHeight:0, rotateXLabels:!1, defaultLabels:!1, xLabelFormatter:void 0, yLabelFormatters:[], xaxisTooltipFormatter:void 0, ttKeyFormatter:void 0, ttVal:void 0, ttZFormatter:void 0, LINE_HEIGHT_RATIO:1.618, xAxisLabelsHeight:0, xAxisLabelsWidth:0, yAxisLabelsWidth:0, scaleX:1, scaleY:1, translateX:0, translateY:0, translateYAxisX:[], yAxisWidths:[], translateXAxisY:0, translateXAxisX:0, tooltip:null;
}}},  {
    key: "init", value:function(t) {
    var e=this.globalVars(t);
    return this.initGlobalVars(e), e.initialConfig=cs.extend( {
}
, t), e.initialSeries=cs.clone(t.series), e.lastXAxis=cs.clone(e.initialConfig.xaxis), e.lastYAxis=cs.clone(e.initialConfig.yaxis), e;
}
}]), t;
}(), Os=function() {
    function t(e) {
    Ja(this, t), this.opts=e;
}
return ts(t, [ {
    key: "init", value:function() {
    var t=new Ds(this.opts).init( {
    responsiveOverride: !1;
}
);
    return {
    config: t, globals:(new Is).init(t);
}
}}]), t;
}(), zs=function() {
    function t(e) {
    Ja(this, t), this.ctx=e, this.w=e.w, this.twoDSeries=[], this.threeDSeries=[], this.twoDSeriesX=[], this.seriesGoals=[], this.coreUtils=new ps(this.ctx);
}
return ts(t, [ {
    key: "isMultiFormat", value:function() {
    return this.isFormatXY()||this.isFormat2DArray();
}
},  {
    key: "isFormatXY", value:function() {
    var t=this.w.config.series.slice(), e=new Es(this.ctx);
    if(this.activeSeriesIndex=e.getActiveConfigSeriesIndex(), void 0!==t[this.activeSeriesIndex].data&&t[this.activeSeriesIndex].data.length>0&&null!==t[this.activeSeriesIndex].data[0]&&void 0!==t[this.activeSeriesIndex].data[0].x&&null!==t[this.activeSeriesIndex].data[0])return!0;
}
},  {
    key: "isFormat2DArray", value:function() {
    var t=this.w.config.series.slice(), e=new Es(this.ctx);
    if(this.activeSeriesIndex=e.getActiveConfigSeriesIndex(), void 0!==t[this.activeSeriesIndex].data&&t[this.activeSeriesIndex].data.length>0&&void 0!==t[this.activeSeriesIndex].data[0]&&null!==t[this.activeSeriesIndex].data[0]&&t[this.activeSeriesIndex].data[0].constructor===Array)return!0;
}
},  {
    key: "handleFormat2DArray", value:function(t, e) {
    for(var i=this.w.config, a=this.w.globals, s="boxPlot"===i.chart.type||"boxPlot"===i.series[e].type, n=0;
    n<t[e].data.length;
    n++)if(void 0!==t[e].data[n][1]&&(Array.isArray(t[e].data[n][1])&&4===t[e].data[n][1].length&&!s?this.twoDSeries.push(cs.parseNumber(t[e].data[n][1][3])): t[e].data[n].length>=5?this.twoDSeries.push(cs.parseNumber(t[e].data[n][4])):this.twoDSeries.push(cs.parseNumber(t[e].data[n][1])), a.dataFormatXNumeric=!0), "datetime"===i.xaxis.type) {
    var o=new Date(t[e].data[n][0]);
    o=new Date(o).getTime(), this.twoDSeriesX.push(o);
}
else this.twoDSeriesX.push(t[e].data[n][0]);
    for(var r=0;
    r<t[e].data.length;
    r++)void 0!==t[e].data[r][2]&&(this.threeDSeries.push(t[e].data[r][2]), a.isDataXYZ=!0);
}
},  {
    key: "handleFormatXY", value:function(t, e) {
    var i=this.w.config, a=this.w.globals, s=new Ms(this.ctx), n=e;
    a.collapsedSeriesIndices.indexOf(e)>-1&&(n=this.activeSeriesIndex);
    for(var o=0;
    o<t[e].data.length;
    o++)void 0!==t[e].data[o].y&&(Array.isArray(t[e].data[o].y)?this.twoDSeries.push(cs.parseNumber(t[e].data[o].y[t[e].data[o].y.length-1])): this.twoDSeries.push(cs.parseNumber(t[e].data[o].y))), void 0!==t[e].data[o].goals&&Array.isArray(t[e].data[o].goals)?(void 0===this.seriesGoals[e]&&(this.seriesGoals[e]=[]), this.seriesGoals[e].push(t[e].data[o].goals)):(void 0===this.seriesGoals[e]&&(this.seriesGoals[e]=[]), this.seriesGoals[e].push(null));
    for(var r=0;
    r<t[n].data.length;
    r++) {
    var l="string"==typeof t[n].data[r].x, c=Array.isArray(t[n].data[r].x), h=!c&&!!s.isValidDate(t[n].data[r].x.toString());
    if(l||h)if(l||i.xaxis.convertedCatToNumeric) {
    var d=a.isBarHorizontal&&a.isRangeData;
    "datetime"!==i.xaxis.type||d?(this.fallbackToCategory=!0, this.twoDSeriesX.push(t[n].data[r].x)): this.twoDSeriesX.push(s.parseDate(t[n].data[r].x));
}
else"datetime"===i.xaxis.type?this.twoDSeriesX.push(s.parseDate(t[n].data[r].x.toString())):(a.dataFormatXNumeric=!0, a.isXNumeric=!0, this.twoDSeriesX.push(parseFloat(t[n].data[r].x)));
    else c?(this.fallbackToCategory=!0, this.twoDSeriesX.push(t[n].data[r].x)): (a.isXNumeric=!0, a.dataFormatXNumeric=!0, this.twoDSeriesX.push(t[n].data[r].x));
}
if(t[e].data[0]&&void 0!==t[e].data[0].z) {
    for(var u=0;
    u<t[e].data.length;
    u++)this.threeDSeries.push(t[e].data[u].z);
    a.isDataXYZ=!0;
}
}},  {
    key: "handleRangeData", value:function(t, e) {
    var i=this.w.globals, a= {
}
;
    return this.isFormat2DArray()?a=this.handleRangeDataFormat("array", t, e): this.isFormatXY()&&(a=this.handleRangeDataFormat("xy", t, e)), i.seriesRangeStart.push(a.start), i.seriesRangeEnd.push(a.end), i.seriesRangeBar.push(a.rangeUniques), i.seriesRangeBar.forEach((function(t, e) {
    t&&t.forEach((function(t, e) {
    t.y.forEach((function(e, i) {
    for(var a=0;
    a<t.y.length;
    a++)if(i!==a) {
    var s=e.y1, n=e.y2, o=t.y[a].y1;
    s<=t.y[a].y2&&o<=n&&(t.overlaps.indexOf(e.rangeName)<0&&t.overlaps.push(e.rangeName), t.overlaps.indexOf(t.y[a].rangeName)<0&&t.overlaps.push(t.y[a].rangeName));
}
}));
}));
})), a;
}},  {
    key: "handleCandleStickBoxData", value:function(t, e) {
    var i=this.w.globals, a= {
}
;
    return this.isFormat2DArray()?a=this.handleCandleStickBoxDataFormat("array", t, e): this.isFormatXY()&&(a=this.handleCandleStickBoxDataFormat("xy", t, e)), i.seriesCandleO[e]=a.o, i.seriesCandleH[e]=a.h, i.seriesCandleM[e]=a.m, i.seriesCandleL[e]=a.l, i.seriesCandleC[e]=a.c, a;
}
},  {
    key: "handleRangeDataFormat", value:function(t, e, i) {
    var a=[], s=[], n=e[i].data.filter((function(t, e, i) {
    return e===i.findIndex((function(e) {
    return e.x===t.x;
}
));
})).map((function(t, e) {
    return {
    x: t.x, overlaps:[], y:[];
}
})), o="Please provide [Start,  End] values in valid format. Read more https://apexcharts.com/docs/series/#rangecharts", r=new Es(this.ctx).getActiveConfigSeriesIndex();
    if("array"===t) {
    if(2!==e[r].data[0][1].length)throw new Error(o);
    for(var l=0;
    l<e[i].data.length;
    l++)a.push(e[i].data[l][1][0]), s.push(e[i].data[l][1][1]);
}
else if("xy"===t) {
    if(2!==e[r].data[0].y.length)throw new Error(o);
    for(var c=function(t) {
    var o=cs.randomId(), r=e[i].data[t].x, l= {
    y1: e[i].data[t].y[0], y2:e[i].data[t].y[1], rangeName:o;
}
;
    e[i].data[t].rangeName=o;
    var c=n.findIndex((function(t) {
    return t.x===r;
}
));
    n[c].y.push(l), a.push(l.y1), s.push(l.y2);
}
, h=0;
    h<e[i].data.length;
    h++)c(h);
}
return {
    start: a, end:s, rangeUniques:n;
}
}},  {
    key: "handleCandleStickBoxDataFormat", value:function(t, e, i) {
    var a=this.w, s="boxPlot"===a.config.chart.type||"boxPlot"===a.config.series[i].type, n=[], o=[], r=[], l=[], c=[];
    if("array"===t)if(s&&6===e[i].data[0].length||!s&&5===e[i].data[0].length)for(var h=0;
    h<e[i].data.length;
    h++)n.push(e[i].data[h][1]), o.push(e[i].data[h][2]), s?(r.push(e[i].data[h][3]), l.push(e[i].data[h][4]), c.push(e[i].data[h][5])): (l.push(e[i].data[h][3]), c.push(e[i].data[h][4]));
    else for(var d=0;
    d<e[i].data.length;
    d++)Array.isArray(e[i].data[d][1])&&(n.push(e[i].data[d][1][0]), o.push(e[i].data[d][1][1]), s?(r.push(e[i].data[d][1][2]), l.push(e[i].data[d][1][3]), c.push(e[i].data[d][1][4])): (l.push(e[i].data[d][1][2]), c.push(e[i].data[d][1][3])));
    else if("xy"===t)for(var u=0;
    u<e[i].data.length;
    u++)Array.isArray(e[i].data[u].y)&&(n.push(e[i].data[u].y[0]), o.push(e[i].data[u].y[1]), s?(r.push(e[i].data[u].y[2]), l.push(e[i].data[u].y[3]), c.push(e[i].data[u].y[4])): (l.push(e[i].data[u].y[2]), c.push(e[i].data[u].y[3])));
    return {
    o: n, h:o, m:r, l:l, c:c;
}
}},  {
    key: "parseDataAxisCharts", value:function(t) {
    var e=this, i=arguments.length>1&&void 0!==arguments[1]?arguments[1]: this.ctx, a=this.w.config, s=this.w.globals, n=new Ms(i), o=a.labels.length>0?a.labels.slice():a.xaxis.categories.slice();
    s.isRangeBar="rangeBar"===a.chart.type&&s.isBarHorizontal;
    for(var r=function() {
    for(var t=0;
    t<o.length;
    t++)if("string"==typeof o[t]) {
    if(!n.isValidDate(o[t]))throw new Error("You have provided invalid Date format. Please provide a valid JavaScript Date");
    e.twoDSeriesX.push(n.parseDate(o[t]));
}
else e.twoDSeriesX.push(o[t]);
}, l=0;
    l<t.length;
    l++) {
    if(this.twoDSeries=[], this.twoDSeriesX=[], this.threeDSeries=[], void 0===t[l].data)return void console.error("It is a possibility that you may have not included 'data' property in series.");
    if("rangeBar"!==a.chart.type&&"rangeArea"!==a.chart.type&&"rangeBar"!==t[l].type&&"rangeArea"!==t[l].type||(s.isRangeData=!0, this.handleRangeData(t, l)), this.isMultiFormat())this.isFormat2DArray()?this.handleFormat2DArray(t, l): this.isFormatXY()&&this.handleFormatXY(t, l), "candlestick"!==a.chart.type&&"candlestick"!==t[l].type&&"boxPlot"!==a.chart.type&&"boxPlot"!==t[l].type||this.handleCandleStickBoxData(t, l), s.series.push(this.twoDSeries), s.labels.push(this.twoDSeriesX), s.seriesX.push(this.twoDSeriesX), s.seriesGoals=this.seriesGoals, l!==this.activeSeriesIndex||this.fallbackToCategory||(s.isXNumeric=!0);
    else {
    "datetime"===a.xaxis.type?(s.isXNumeric=!0, r(), s.seriesX.push(this.twoDSeriesX)): "numeric"===a.xaxis.type&&(s.isXNumeric=!0, o.length>0&&(this.twoDSeriesX=o, s.seriesX.push(this.twoDSeriesX))), s.labels.push(this.twoDSeriesX);
    var c=t[l].data.map((function(t) {
    return cs.parseNumber(t);
}
));
    s.series.push(c);
}
s.seriesZ.push(this.threeDSeries), void 0!==t[l].name?s.seriesNames.push(t[l].name): s.seriesNames.push("series-"+parseInt(l+1, 10)), void 0!==t[l].color?s.seriesColors.push(t[l].color):s.seriesColors.push(void 0);
}return this.w;
}},  {
    key: "parseDataNonAxisCharts", value:function(t) {
    var e=this.w.globals, i=this.w.config;
    e.series=t.slice(), e.seriesNames=i.labels.slice();
    for(var a=0;
    a<e.series.length;
    a++)void 0===e.seriesNames[a]&&e.seriesNames.push("series-"+(a+1));
    return this.w;
}
},  {
    key: "handleExternalLabelsData", value:function(t) {
    var e=this.w.config, i=this.w.globals;
    e.xaxis.categories.length>0?i.labels=e.xaxis.categories: e.labels.length>0?i.labels=e.labels.slice():this.fallbackToCategory?(i.labels=i.labels[0], i.seriesRangeBar.length&&(i.seriesRangeBar.map((function(t) {
    t.forEach((function(t) {
    i.labels.indexOf(t.x)<0&&t.x&&i.labels.push(t.x);
}
));
})), i.labels=i.labels.filter((function(t, e, i) {
    return i.indexOf(t)===e;
}
))), e.xaxis.convertedCatToNumeric&&(new Ps(e).convertCatToNumericXaxis(e, this.ctx, i.seriesX[0]), this._generateExternalLabels(t))): this._generateExternalLabels(t);
}},  {
    key: "_generateExternalLabels", value:function(t) {
    var e=this.w.globals, i=this.w.config, a=[];
    if(e.axisCharts) {
    if(e.series.length>0)if(this.isFormatXY())for(var s=i.series.map((function(t, e) {
    return t.data.filter((function(t, e, i) {
    return i.findIndex((function(e) {
    return e.x===t.x;
}
))===e;
}));
})), n=s.reduce((function(t, e, i, a) {
    return a[t].length>e.length?t: i;
}
), 0), o=0;
    o<s[n].length;
    o++)a.push(o+1);
    else for(var r=0;
    r<e.series[e.maxValsInArrayIndex].length;
    r++)a.push(r+1);
    e.seriesX=[];
    for(var l=0;
    l<t.length;
    l++)e.seriesX.push(a);
    e.isXNumeric=!0;
}
if(0===a.length) {
    a=e.axisCharts?[]: e.series.map((function(t, e) {
    return e+1;
}
));
    for(var c=0;
    c<t.length;
    c++)e.seriesX.push(a);
}
e.labels=a, i.xaxis.convertedCatToNumeric&&(e.categoryLabels=a.map((function(t) {
    return i.xaxis.labels.formatter(t);
}
))), e.noLabelsProvided=!0;
}},  {
    key: "parseData", value:function(t) {
    var e=this.w, i=e.config, a=e.globals;
    if(this.excludeCollapsedSeriesInYAxis(), this.fallbackToCategory=!1, this.ctx.core.resetGlobals(), this.ctx.core.isMultipleY(), a.axisCharts?this.parseDataAxisCharts(t): this.parseDataNonAxisCharts(t), this.coreUtils.getLargestSeries(), "bar"===i.chart.type&&i.chart.stacked) {
    var s=new Es(this.ctx);
    a.series=s.setNullSeriesToZeroValues(a.series);
}
this.coreUtils.getSeriesTotals(), a.axisCharts&&this.coreUtils.getStackedSeriesTotals(), this.coreUtils.getPercentSeries(), a.dataFormatXNumeric||a.isXNumeric&&("numeric"!==i.xaxis.type||0!==i.labels.length||0!==i.xaxis.categories.length)||this.handleExternalLabelsData(t);
    for(var n=this.coreUtils.getCategoryLabels(a.labels), o=0;
    o<n.length;
    o++)if(Array.isArray(n[o])) {
    a.isMultiLineX=!0;
    break;
}
}},  {
    key: "excludeCollapsedSeriesInYAxis", value:function() {
    var t=this, e=this.w;
    e.globals.ignoreYAxisIndexes=e.globals.collapsedSeries.map((function(i, a) {
    if(t.w.globals.isMultipleYAxis&&!e.config.chart.stacked)return i.index;
}
));
}}]), t;
}(), Ys=function() {
    function t(e) {
    Ja(this, t), this.ctx=e, this.w=e.w, this.tooltipKeyFormat="dd MMM"}
return ts(t, [ {
    key: "xLabelFormat", value:function(t, e, i, a) {
    var s=this.w;
    if("datetime"===s.config.xaxis.type&&void 0===s.config.xaxis.labels.formatter&&void 0===s.config.tooltip.x.formatter) {
    var n=new Ms(this.ctx);
    return n.formatDate(n.getDate(e), s.config.tooltip.x.format);
}
return t(e, i, a);
}},  {
    key: "defaultGeneralFormatter", value:function(t) {
    return Array.isArray(t)?t.map((function(t) {
    return t;
}
)): t;
}},  {
    key: "defaultYFormatter", value:function(t, e, i) {
    var a=this.w;
    return cs.isNumber(t)&&(t=0!==a.globals.yValueDecimal?t.toFixed(void 0!==e.decimalsInFloat?e.decimalsInFloat: a.globals.yValueDecimal):a.globals.maxYArr[i]-a.globals.minYArr[i]<5?t.toFixed(1):t.toFixed(0)), t;
}
},  {
    key: "setLabelFormatters", value:function() {
    var t=this, e=this.w;
    return e.globals.xaxisTooltipFormatter=function(e) {
    return t.defaultGeneralFormatter(e);
}
, e.globals.ttKeyFormatter=function(e) {
    return t.defaultGeneralFormatter(e);
}
, e.globals.ttZFormatter=function(t) {
    return t;
}
, e.globals.legendFormatter=function(e) {
    return t.defaultGeneralFormatter(e);
}
, void 0!==e.config.xaxis.labels.formatter?e.globals.xLabelFormatter=e.config.xaxis.labels.formatter: e.globals.xLabelFormatter=function(t) {
    if(cs.isNumber(t)) {
    if(!e.config.xaxis.convertedCatToNumeric&&"numeric"===e.config.xaxis.type) {
    if(cs.isNumber(e.config.xaxis.decimalsInFloat))return t.toFixed(e.config.xaxis.decimalsInFloat);
    var i=e.globals.maxX-e.globals.minX;
    return i>0&&i<100?t.toFixed(1): t.toFixed(0);
}
return e.globals.isBarHorizontal&&e.globals.maxY-e.globals.minYArr<4?t.toFixed(1):t.toFixed(0);
}return t;
}, "function"==typeof e.config.tooltip.x.formatter?e.globals.ttKeyFormatter=e.config.tooltip.x.formatter:e.globals.ttKeyFormatter=e.globals.xLabelFormatter, "function"==typeof e.config.xaxis.tooltip.formatter&&(e.globals.xaxisTooltipFormatter=e.config.xaxis.tooltip.formatter), (Array.isArray(e.config.tooltip.y)||void 0!==e.config.tooltip.y.formatter)&&(e.globals.ttVal=e.config.tooltip.y), void 0!==e.config.tooltip.z.formatter&&(e.globals.ttZFormatter=e.config.tooltip.z.formatter), void 0!==e.config.legend.formatter&&(e.globals.legendFormatter=e.config.legend.formatter), e.config.yaxis.forEach((function(i, a) {
    void 0!==i.labels.formatter?e.globals.yLabelFormatters[a]=i.labels.formatter: e.globals.yLabelFormatters[a]=function(s) {
    return e.globals.xyCharts?Array.isArray(s)?s.map((function(e) {
    return t.defaultYFormatter(e, i, a);
}
)): t.defaultYFormatter(s, i, a):s;
}})), e.globals;
}},  {
    key: "heatmapLabelFormatters", value:function() {
    var t=this.w;
    if("heatmap"===t.config.chart.type) {
    t.globals.yAxisScale[0].result=t.globals.seriesNames.slice();
    var e=t.globals.seriesNames.reduce((function(t, e) {
    return t.length>e.length?t: e;
}
), 0);
    t.globals.yAxisScale[0].niceMax=e, t.globals.yAxisScale[0].niceMin=e;
}
}}]), t;
}(), Ns=function() {
    function t(e) {
    Ja(this, t), this.ctx=e, this.w=e.w;
}
return ts(t, [ {
    key: "getLabel", value:function(t, e, i, a) {
    var s=arguments.length>4&&void 0!==arguments[4]?arguments[4]: [], n=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"12px", o=this.w, r=void 0===t[a]?"":t[a], l=r, c=o.globals.xLabelFormatter, h=o.config.xaxis.labels.formatter, d=!1, u=new Ys(this.ctx), g=r;
    l=u.xLabelFormat(c, r, g,  {
    i: a, dateFormatter:new Ms(this.ctx).formatDate, w:o;
}
), void 0!==h&&(l=h(r, t[a],  {
    i: a, dateFormatter:new Ms(this.ctx).formatDate, w:o;
}
));
    var f=function(t) {
    var i=null;
    return e.forEach((function(t) {
    "month"===t.unit?i="year": "day"===t.unit?i="month":"hour"===t.unit?i="day":"minute"===t.unit&&(i="hour");
}
)), i===t;
};
    e.length>0?(d=f(e[a].unit), i=e[a].position, l=e[a].value): "datetime"===o.config.xaxis.type&&void 0===h&&(l=""), void 0===l&&(l=""), l=Array.isArray(l)?l:l.toString();
    var p=new us(this.ctx), x= {
}
;
    x=o.globals.rotateXLabels?p.getTextRects(l, parseInt(n, 10), null, "rotate(".concat(o.config.xaxis.labels.rotate, " 0 0)"), !1): p.getTextRects(l, parseInt(n, 10));
    var m=!o.config.xaxis.labels.showDuplicates&&this.ctx.timeScale;
    return!Array.isArray(l)&&(0===l.indexOf("NaN")||0===l.toLowerCase().indexOf("invalid")||l.toLowerCase().indexOf("infinity")>=0||s.indexOf(l)>=0&&m)&&(l=""),  {
    x: i, text:l, textRect:x, isBold:d;
}
}},  {
    key: "checkLabelBasedOnTickamount", value:function(t, e, i) {
    var a=this.w, s=a.config.xaxis.tickAmount;
    return"dataPoints"===s&&(s=Math.round(a.globals.gridWidth/120)), s>i||t%Math.round(i/(s+1))==0||(e.text=""), e;
}
},  {
    key: "checkForOverflowingLabels", value:function(t, e, i, a, s) {
    var n=this.w;
    if(0===t&&n.globals.skipFirstTimelinelabel&&(e.text=""), t===i-1&&n.globals.skipLastTimelinelabel&&(e.text=""), n.config.xaxis.labels.hideOverlappingLabels&&a.length>0) {
    var o=s[s.length-1];
    e.x<o.textRect.width/(n.globals.rotateXLabels?Math.abs(n.config.xaxis.labels.rotate)/12: 1.01)+o.x&&(e.text="");
}
return e;
}},  {
    key: "checkForReversedLabels", value:function(t, e) {
    var i=this.w;
    return i.config.yaxis[t]&&i.config.yaxis[t].reversed&&e.reverse(), e;
}
},  {
    key: "isYAxisHidden", value:function(t) {
    var e=this.w, i=new ps(this.ctx);
    return!e.config.yaxis[t].show||!e.config.yaxis[t].showForNullSeries&&i.isSeriesNull(t)&&-1===e.globals.collapsedSeriesIndices.indexOf(t);
}
},  {
    key: "getYAxisForeColor", value:function(t, e) {
    var i=this.w;
    return Array.isArray(t)&&i.globals.yAxisScale[e]&&this.ctx.theme.pushExtraColors(t, i.globals.yAxisScale[e].result.length, !1), t;
}
},  {
    key: "drawYAxisTicks", value:function(t, e, i, a, s, n, o) {
    var r=this.w, l=new us(this.ctx), c=r.globals.translateY;
    if(a.show&&e>0) {
    !0===r.config.yaxis[s].opposite&&(t+=a.width);
    for(var h=e;
    h>=0;
    h--) {
    var d=c+e/10+r.config.yaxis[s].labels.offsetY-1;
    r.globals.isBarHorizontal&&(d=n*h), "heatmap"===r.config.chart.type&&(d+=n/2);
    var u=l.drawLine(t+i.offsetX-a.width+a.offsetX, d+a.offsetY, t+i.offsetX+a.offsetX, d+a.offsetY, a.color);
    o.add(u), c+=n;
}
}}}]), t;
}(), Fs=function() {
    function t(e) {
    Ja(this, t), this.ctx=e, this.w=e.w;
}
return ts(t, [ {
    key: "scaleSvgNode", value:function(t, e) {
    var i=parseFloat(t.getAttributeNS(null, "width")), a=parseFloat(t.getAttributeNS(null, "height"));
    t.setAttributeNS(null, "width", i*e), t.setAttributeNS(null, "height", a*e), t.setAttributeNS(null, "viewBox", "0 0 "+i+" "+a);
}
},  {
    key: "fixSvgStringForIe11", value:function(t) {
    if(!cs.isIE11())return t.replace(/&nbsp;
    /g, "&#160;
    ");
    var e=0, i=t.replace(/xmlns="http: \/\/www.w3.org\/2000\/svg"/g, (function(t) {
    return 2==++e?'xmlns: xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev"':t;
}
));
    return(i=i.replace(/xmlns: NS\d+=""/g, "")).replace(/NS\d+:(\w+:\w+=")/g, "$1");
}
},  {
    key: "getSvgString", value:function(t) {
    var e=this.w.globals.dom.Paper.svg();
    if(1!==t) {
    var i=this.w.globals.dom.Paper.node.cloneNode(!0);
    this.scaleSvgNode(i, t), e=(new XMLSerializer).serializeToString(i);
}
return this.fixSvgStringForIe11(e);
}},  {
    key: "cleanup", value:function() {
    var t=this.w, e=t.globals.dom.baseEl.getElementsByClassName("apexcharts-xcrosshairs"), i=t.globals.dom.baseEl.getElementsByClassName("apexcharts-ycrosshairs"), a=t.globals.dom.baseEl.querySelectorAll(".apexcharts-zoom-rect,  .apexcharts-selection-rect");
    Array.prototype.forEach.call(a, (function(t) {
    t.setAttribute("width", 0);
}
)), e&&e[0]&&(e[0].setAttribute("x", -500), e[0].setAttribute("x1", -500), e[0].setAttribute("x2", -500)), i&&i[0]&&(i[0].setAttribute("y", -100), i[0].setAttribute("y1", -100), i[0].setAttribute("y2", -100));
}},  {
    key: "svgUrl", value:function() {
    this.cleanup();
    var t=this.getSvgString(), e=new Blob([t],  {
    type: "image/svg+xml;
    charset=utf-8"}
);
    return URL.createObjectURL(e);
}
},  {
    key: "dataURI", value:function(t) {
    var e=this;
    return new Promise((function(i) {
    var a=e.w, s=t?t.scale||t.width/a.globals.svgWidth: 1;
    e.cleanup();
    var n=document.createElement("canvas");
    n.width=a.globals.svgWidth*s, n.height=parseInt(a.globals.dom.elWrap.style.height, 10)*s;
    var o="transparent"===a.config.chart.background?"#fff": a.config.chart.background, r=n.getContext("2d");
    r.fillStyle=o, r.fillRect(0, 0, n.width*s, n.height*s);
    var l=e.getSvgString(s);
    if(window.canvg&&cs.isIE11()) {
    var c=window.canvg.Canvg.fromString(r, l,  {
    ignoreClear: !0, ignoreDimensions:!0;
}
);
    c.start();
    var h=n.msToBlob();
    c.stop(), i( {
    blob: h;
}
);
}else {
    var d="data: image/svg+xml, "+encodeURIComponent(l), u=new Image;
    u.crossOrigin="anonymous", u.onload=function() {
    if(r.drawImage(u, 0, 0), n.msToBlob) {
    var t=n.msToBlob();
    i( {
    blob: t;
}
);
}else {
    var e=n.toDataURL("image/png");
    i( {
    imgURI: e;
}
);
}}, u.src=d;
}}));
}},  {
    key: "exportToSVG", value:function() {
    this.triggerDownload(this.svgUrl(), this.w.config.chart.toolbar.export.svg.filename, ".svg");
}
},  {
    key: "exportToPng", value:function() {
    var t=this;
    this.dataURI().then((function(e) {
    var i=e.imgURI, a=e.blob;
    a?navigator.msSaveOrOpenBlob(a, t.w.globals.chartID+".png"): t.triggerDownload(i, t.w.config.chart.toolbar.export.png.filename, ".png");
}
));
}},  {
    key: "exportToCSV", value:function(t) {
    var e=this, i=t.series, a=t.columnDelimiter, s=t.lineDelimiter, n=void 0===s?"\n": s, o=this.w, r=[], l=[], c="", h=new zs(this.ctx), d=new Ns(this.ctx), u=function(t) {
    var i="";
    if(o.globals.axisCharts) {
    if("category"===o.config.xaxis.type||o.config.xaxis.convertedCatToNumeric)if(o.globals.isBarHorizontal) {
    var s=o.globals.yLabelFormatters[0], n=new Es(e.ctx).getActiveConfigSeriesIndex();
    i=s(o.globals.labels[t],  {
    seriesIndex: n, dataPointIndex:t, w:o;
}
);
}else i=d.getLabel(o.globals.labels, o.globals.timescaleLabels, 0, t).text;
    "datetime"===o.config.xaxis.type&&(o.config.xaxis.categories.length?i=o.config.xaxis.categories[t]: o.config.labels.length&&(i=o.config.labels[t]));
}
else i=o.config.labels[t];
    return Array.isArray(i)&&(i=i.join(" ")), cs.isNumber(i)?i: i.split(a).join("");
}
;
    r.push(o.config.chart.toolbar.export.csv.headerCategory), i.map((function(t, e) {
    var i=t.name?t.name: "series-".concat(e);
    o.globals.axisCharts&&r.push(i.split(a).join("")?i.split(a).join(""): "series-".concat(e));
}
)), o.globals.axisCharts||(r.push(o.config.chart.toolbar.export.csv.headerValue), l.push(r.join(a))), i.map((function(t, e) {
    o.globals.axisCharts?function(t, e) {
    if(r.length&&0===e&&l.push(r.join(a)), t.data&&t.data.length)for(var s=0;
    s<t.data.length;
    s++) {
    r=[];
    var n=u(s);
    if(n||(h.isFormatXY()?n=i[e].data[s].x: h.isFormat2DArray()&&(n=i[e].data[s]?i[e].data[s][0]:"")), 0===e) {
    r.push((d=n, "datetime"===o.config.xaxis.type&&String(d).length>=10?o.config.chart.toolbar.export.csv.dateFormatter(n): cs.isNumber(n)?n:n.split(a).join("")));
    for(var c=0;
    c<o.globals.series.length;
    c++)r.push(o.globals.series[c][s]);
}
("candlestick"===o.config.chart.type||t.type&&"candlestick"===t.type)&&(r.pop(), r.push(o.globals.seriesCandleO[e][s]), r.push(o.globals.seriesCandleH[e][s]), r.push(o.globals.seriesCandleL[e][s]), r.push(o.globals.seriesCandleC[e][s])), ("boxPlot"===o.config.chart.type||t.type&&"boxPlot"===t.type)&&(r.pop(), r.push(o.globals.seriesCandleO[e][s]), r.push(o.globals.seriesCandleH[e][s]), r.push(o.globals.seriesCandleM[e][s]), r.push(o.globals.seriesCandleL[e][s]), r.push(o.globals.seriesCandleC[e][s])), "rangeBar"===o.config.chart.type&&(r.pop(), r.push(o.globals.seriesRangeStart[e][s]), r.push(o.globals.seriesRangeEnd[e][s])), r.length&&l.push(r.join(a));
}var d;
}(t, e): ((r=[]).push(o.globals.labels[e].split(a).join("")), r.push(o.globals.series[e]), l.push(r.join(a)));
})), c+=l.join(n), this.triggerDownload("data:text/csv;
     charset=utf-8, "+encodeURIComponent("\ufeff"+c), o.config.chart.toolbar.export.csv.filename, ".csv");
}
},  {
    key: "triggerDownload", value:function(t, e, i) {
    var a=document.createElement("a");
    a.href=t, a.download=(e||this.w.globals.chartID)+i, document.body.appendChild(a), a.click(), document.body.removeChild(a);
}
}]), t;
}(), Xs=function() {
    function t(e) {
    Ja(this, t), this.ctx=e, this.w=e.w;
    var i=this.w;
    this.axesUtils=new Ns(e), this.xaxisLabels=i.globals.labels.slice(), i.globals.timescaleLabels.length>0&&!i.globals.isBarHorizontal&&(this.xaxisLabels=i.globals.timescaleLabels.slice()), i.config.xaxis.overwriteCategories&&(this.xaxisLabels=i.config.xaxis.overwriteCategories), this.drawnLabels=[], this.drawnLabelsRects=[], "top"===i.config.xaxis.position?this.offY=0: this.offY=i.globals.gridHeight+1, this.offY=this.offY+i.config.xaxis.axisBorder.offsetY, this.isCategoryBarHorizontal="bar"===i.config.chart.type&&i.config.plotOptions.bar.horizontal, this.xaxisFontSize=i.config.xaxis.labels.style.fontSize, this.xaxisFontFamily=i.config.xaxis.labels.style.fontFamily, this.xaxisForeColors=i.config.xaxis.labels.style.colors, this.xaxisBorderWidth=i.config.xaxis.axisBorder.width, this.isCategoryBarHorizontal&&(this.xaxisBorderWidth=i.config.yaxis[0].axisBorder.width.toString()), this.xaxisBorderWidth.indexOf("%")>-1?this.xaxisBorderWidth=i.globals.gridWidth*parseInt(this.xaxisBorderWidth, 10)/100:this.xaxisBorderWidth=parseInt(this.xaxisBorderWidth, 10), this.xaxisBorderHeight=i.config.xaxis.axisBorder.height, this.yaxis=i.config.yaxis[0];
}
return ts(t, [ {
    key: "drawXaxis", value:function() {
    var t, e=this, i=this.w, a=new us(this.ctx), s=a.group( {
    class: "apexcharts-xaxis", transform:"translate(".concat(i.config.xaxis.offsetX, ",  ").concat(i.config.xaxis.offsetY, ")");
}
), n=a.group( {
    class: "apexcharts-xaxis-texts-g", transform:"translate(".concat(i.globals.translateXAxisX, ",  ").concat(i.globals.translateXAxisY, ")");
}
);
    s.add(n);
    for(var o=i.globals.padHorizontal, r=[], l=0;
    l<this.xaxisLabels.length;
    l++)r.push(this.xaxisLabels[l]);
    var c=r.length;
    if(i.globals.isXNumeric) {
    var h=c>1?c-1: c;
    t=i.globals.gridWidth/h, o=o+t/2+i.config.xaxis.labels.offsetX;
}
else t=i.globals.gridWidth/r.length, o=o+t+i.config.xaxis.labels.offsetX;
    for(var d=function(s) {
    var l=o-t/2+i.config.xaxis.labels.offsetX;
    0===s&&1===c&&t/2===o&&1===i.globals.dataPoints&&(l=i.globals.gridWidth/2);
    var h=e.axesUtils.getLabel(r, i.globals.timescaleLabels, l, s, e.drawnLabels, e.xaxisFontSize), d=28;
    if(i.globals.rotateXLabels&&(d=22), (h=void 0!==i.config.xaxis.tickAmount&&"dataPoints"!==i.config.xaxis.tickAmount&&"datetime"!==i.config.xaxis.type?e.axesUtils.checkLabelBasedOnTickamount(s, h, c): e.axesUtils.checkForOverflowingLabels(s, h, c, e.drawnLabels, e.drawnLabelsRects)).text&&i.globals.xaxisLabelsCount++, i.config.xaxis.labels.show) {
    var u=a.drawText( {
    x: h.x, y:e.offY+i.config.xaxis.labels.offsetY+d-("top"===i.config.xaxis.position?i.globals.xAxisHeight+i.config.xaxis.axisTicks.height-2:0), text:h.text, textAnchor:"middle", fontWeight:h.isBold?600:i.config.xaxis.labels.style.fontWeight, fontSize:e.xaxisFontSize, fontFamily:e.xaxisFontFamily, foreColor:Array.isArray(e.xaxisForeColors)?i.config.xaxis.convertedCatToNumeric?e.xaxisForeColors[i.globals.minX+s-1]:e.xaxisForeColors[s]:e.xaxisForeColors, isPlainText:!1, cssClass:"apexcharts-xaxis-label "+i.config.xaxis.labels.style.cssClass;
}
);
    n.add(u);
    var g=document.createElementNS(i.globals.SVGNS, "title");
    g.textContent=Array.isArray(h.text)?h.text.join(" "): h.text, u.node.appendChild(g), ""!==h.text&&(e.drawnLabels.push(h.text), e.drawnLabelsRects.push(h));
}
o+=t;
}, u=0;
    u<=c-1;
    u++)d(u);
    if(void 0!==i.config.xaxis.title.text) {
    var g=a.group( {
    class: "apexcharts-xaxis-title"}
), f=a.drawText( {
    x: i.globals.gridWidth/2+i.config.xaxis.title.offsetX, y:this.offY+parseFloat(this.xaxisFontSize)+i.globals.xAxisLabelsHeight+i.config.xaxis.title.offsetY, text:i.config.xaxis.title.text, textAnchor:"middle", fontSize:i.config.xaxis.title.style.fontSize, fontFamily:i.config.xaxis.title.style.fontFamily, fontWeight:i.config.xaxis.title.style.fontWeight, foreColor:i.config.xaxis.title.style.color, cssClass:"apexcharts-xaxis-title-text "+i.config.xaxis.title.style.cssClass;
}
);
    g.add(f), s.add(g);
}
if(i.config.xaxis.axisBorder.show) {
    var p=i.globals.barPadForNumericAxis, x=a.drawLine(i.globals.padHorizontal+i.config.xaxis.axisBorder.offsetX-p, this.offY, this.xaxisBorderWidth+p, this.offY, i.config.xaxis.axisBorder.color, 0, this.xaxisBorderHeight);
    s.add(x);
}
return s;
}},  {
    key: "drawXaxisInversed", value:function(t) {
    var e, i, a=this, s=this.w, n=new us(this.ctx), o=s.config.yaxis[0].opposite?s.globals.translateYAxisX[t]: 0, r=n.group( {
    class: "apexcharts-yaxis apexcharts-xaxis-inversed", rel:t;
}
), l=n.group( {
    class: "apexcharts-yaxis-texts-g apexcharts-xaxis-inversed-texts-g", transform:"translate("+o+",  0)"}
);
    r.add(l);
    var c=[];
    if(s.config.yaxis[t].show)for(var h=0;
    h<this.xaxisLabels.length;
    h++)c.push(this.xaxisLabels[h]);
    e=s.globals.gridHeight/c.length, i=-e/2.2;
    var d=s.globals.yLabelFormatters[0], u=s.config.yaxis[0].labels;
    if(u.show)for(var g=function(o) {
    var r=void 0===c[o]?"": c[o];
    r=d(r,  {
    seriesIndex: t, dataPointIndex:o, w:s;
}
);
    var h=a.axesUtils.getYAxisForeColor(u.style.colors, t), g=0;
    Array.isArray(r)&&(g=r.length/2*parseInt(u.style.fontSize, 10));
    var f=n.drawText( {
    x: u.offsetX-15, y:i+e+u.offsetY-g, text:r, textAnchor:a.yaxis.opposite?"start":"end", foreColor:Array.isArray(h)?h[o]:h, fontSize:u.style.fontSize, fontFamily:u.style.fontFamily, fontWeight:u.style.fontWeight, isPlainText:!1, cssClass:"apexcharts-yaxis-label "+u.style.cssClass;
}
);
    l.add(f);
    var p=document.createElementNS(s.globals.SVGNS, "title");
    if(p.textContent=Array.isArray(r)?r.join(" "): r, f.node.appendChild(p), 0!==s.config.yaxis[t].labels.rotate) {
    var x=n.rotateAroundCenter(f.node);
    f.node.setAttribute("transform", "rotate(".concat(s.config.yaxis[t].labels.rotate, " 0 ").concat(x.y, ")"));
}
i+=e;
}, f=0;
    f<=c.length-1;
    f++)g(f);
    if(void 0!==s.config.yaxis[0].title.text) {
    var p=n.group( {
    class: "apexcharts-yaxis-title apexcharts-xaxis-title-inversed", transform:"translate("+o+",  0)"}
), x=n.drawText( {
    x: 0, y:s.globals.gridHeight/2, text:s.config.yaxis[0].title.text, textAnchor:"middle", foreColor:s.config.yaxis[0].title.style.color, fontSize:s.config.yaxis[0].title.style.fontSize, fontWeight:s.config.yaxis[0].title.style.fontWeight, fontFamily:s.config.yaxis[0].title.style.fontFamily, cssClass:"apexcharts-yaxis-title-text "+s.config.yaxis[0].title.style.cssClass;
}
);
    p.add(x), r.add(p);
}
var m=0;
    this.isCategoryBarHorizontal&&s.config.yaxis[0].opposite&&(m=s.globals.gridWidth);
    var b=s.config.xaxis.axisBorder;
    if(b.show) {
    var v=n.drawLine(s.globals.padHorizontal+b.offsetX+m, 1+b.offsetY, s.globals.padHorizontal+b.offsetX+m, s.globals.gridHeight+b.offsetY, b.color, 0);
    r.add(v);
}
return s.config.yaxis[0].axisTicks.show&&this.axesUtils.drawYAxisTicks(m, c.length, s.config.yaxis[0].axisBorder, s.config.yaxis[0].axisTicks, 0, e, r), r;
}},  {
    key: "drawXaxisTicks", value:function(t, e) {
    var i=this.w, a=t;
    if(!(t<0||t-2>i.globals.gridWidth)) {
    var s=this.offY+i.config.xaxis.axisTicks.offsetY, n=s+i.config.xaxis.axisTicks.height;
    if("top"===i.config.xaxis.position&&(n=s-i.config.xaxis.axisTicks.height), i.config.xaxis.axisTicks.show) {
    var o=new us(this.ctx).drawLine(t+i.config.xaxis.axisTicks.offsetX, s+i.config.xaxis.offsetY, a+i.config.xaxis.axisTicks.offsetX, n+i.config.xaxis.offsetY, i.config.xaxis.axisTicks.color);
    e.add(o), o.node.classList.add("apexcharts-xaxis-tick");
}
}}},  {
    key: "getXAxisTicksPositions", value:function() {
    var t=this.w, e=[], i=this.xaxisLabels.length, a=t.globals.padHorizontal;
    if(t.globals.timescaleLabels.length>0)for(var s=0;
    s<i;
    s++)a=this.xaxisLabels[s].position, e.push(a);
    else for(var n=i, o=0;
    o<n;
    o++) {
    var r=n;
    t.globals.isXNumeric&&"bar"!==t.config.chart.type&&(r-=1), a+=t.globals.gridWidth/r, e.push(a);
}
return e;
}},  {
    key: "xAxisLabelCorrections", value:function() {
    var t=this.w, e=new us(this.ctx), i=t.globals.dom.baseEl.querySelector(".apexcharts-xaxis-texts-g"), a=t.globals.dom.baseEl.querySelectorAll(".apexcharts-xaxis-texts-g text"), s=t.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxis-inversed text"), n=t.globals.dom.baseEl.querySelectorAll(".apexcharts-xaxis-inversed-texts-g text tspan");
    if(t.globals.rotateXLabels||t.config.xaxis.labels.rotateAlways)for(var o=0;
    o<a.length;
    o++) {
    var r=e.rotateAroundCenter(a[o]);
    r.y=r.y-1, r.x=r.x+1, a[o].setAttribute("transform", "rotate(".concat(t.config.xaxis.labels.rotate, " ").concat(r.x, " ").concat(r.y, ")")), a[o].setAttribute("text-anchor", "end"), i.setAttribute("transform", "translate(0,  ".concat(-10, ")"));
    var l=a[o].childNodes;
    t.config.xaxis.labels.trim&&Array.prototype.forEach.call(l, (function(i) {
    e.placeTextWithEllipsis(i, i.textContent, t.globals.xAxisLabelsHeight-("bottom"===t.config.legend.position?20: 10));
}
));
}else!function() {
    for(var i=t.globals.gridWidth/(t.globals.labels.length+1), s=0;
    s<a.length;
    s++) {
    var n=a[s].childNodes;
    t.config.xaxis.labels.trim&&"datetime"!==t.config.xaxis.type&&Array.prototype.forEach.call(n, (function(t) {
    e.placeTextWithEllipsis(t, t.textContent, i);
}
));
}}();
    if(s.length>0) {
    var c=s[s.length-1].getBBox(), h=s[0].getBBox();
    c.x<-20&&s[s.length-1].parentNode.removeChild(s[s.length-1]), h.x+h.width>t.globals.gridWidth&&!t.globals.isBarHorizontal&&s[0].parentNode.removeChild(s[0]);
    for(var d=0;
    d<n.length;
    d++)e.placeTextWithEllipsis(n[d], n[d].textContent, t.config.yaxis[0].labels.maxWidth-2*parseFloat(t.config.yaxis[0].title.style.fontSize)-20);
}
}}]), t;
}(), Hs=function() {
    function t(e) {
    Ja(this, t), this.ctx=e, this.w=e.w;
    var i=this.w;
    this.xaxisLabels=i.globals.labels.slice(), this.axesUtils=new Ns(e), this.isRangeBar=i.globals.seriesRangeBar.length, i.globals.timescaleLabels.length>0&&(this.xaxisLabels=i.globals.timescaleLabels.slice());
}
return ts(t, [ {
    key: "drawGridArea", value:function() {
    var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]: null, e=this.w, i=new us(this.ctx);
    null===t&&(t=i.group( {
    class: "apexcharts-grid"}
));
    var a=i.drawLine(e.globals.padHorizontal, 1, e.globals.padHorizontal, e.globals.gridHeight, "transparent"), s=i.drawLine(e.globals.padHorizontal, e.globals.gridHeight, e.globals.gridWidth, e.globals.gridHeight, "transparent");
    return t.add(s), t.add(a), t;
}
},  {
    key: "drawGrid", value:function() {
    var t=null;
    return this.w.globals.axisCharts&&(t=this.renderGrid(), this.drawGridArea(t.el)), t;
}
},  {
    key: "createGridMask", value:function() {
    var t=this.w, e=t.globals, i=new us(this.ctx), a=Array.isArray(t.config.stroke.width)?0: t.config.stroke.width;
    if(Array.isArray(t.config.stroke.width)) {
    var s=0;
    t.config.stroke.width.forEach((function(t) {
    s=Math.max(s, t);
}
)), a=s;
}e.dom.elGridRectMask=document.createElementNS(e.SVGNS, "clipPath"), e.dom.elGridRectMask.setAttribute("id", "gridRectMask".concat(e.cuid)), e.dom.elGridRectMarkerMask=document.createElementNS(e.SVGNS, "clipPath"), e.dom.elGridRectMarkerMask.setAttribute("id", "gridRectMarkerMask".concat(e.cuid)), e.dom.elForecastMask=document.createElementNS(e.SVGNS, "clipPath"), e.dom.elForecastMask.setAttribute("id", "forecastMask".concat(e.cuid)), e.dom.elNonForecastMask=document.createElementNS(e.SVGNS, "clipPath"), e.dom.elNonForecastMask.setAttribute("id", "nonForecastMask".concat(e.cuid));
    var n=t.config.chart.type, o=0, r=0;
    ("bar"===n||"rangeBar"===n||"candlestick"===n||"boxPlot"===n||t.globals.comboBarCount>0)&&t.globals.isXNumeric&&!t.globals.isBarHorizontal&&(o=t.config.grid.padding.left, r=t.config.grid.padding.right, e.barPadForNumericAxis>o&&(o=e.barPadForNumericAxis, r=e.barPadForNumericAxis)), e.dom.elGridRect=i.drawRect(-a/2-o-2, -a/2, e.gridWidth+a+r+o+4, e.gridHeight+a, 0, "#fff"), new ps(this).getLargestMarkerSize();
    var l=t.globals.markers.largestSize+1;
    e.dom.elGridRectMarker=i.drawRect(2*-l, 2*-l, e.gridWidth+4*l, e.gridHeight+4*l, 0, "#fff"), e.dom.elGridRectMask.appendChild(e.dom.elGridRect.node), e.dom.elGridRectMarkerMask.appendChild(e.dom.elGridRectMarker.node);
    var c=e.dom.baseEl.querySelector("defs");
    c.appendChild(e.dom.elGridRectMask), c.appendChild(e.dom.elForecastMask), c.appendChild(e.dom.elNonForecastMask), c.appendChild(e.dom.elGridRectMarkerMask);
}
},  {
    key: "_drawGridLines", value:function(t) {
    var e=t.i, i=t.x1, a=t.y1, s=t.x2, n=t.y2, o=t.xCount, r=t.parent, l=this.w;
    0===e&&l.globals.skipFirstTimelinelabel||e===o-1&&l.globals.skipLastTimelinelabel&&!l.config.xaxis.labels.formatter||"radar"===l.config.chart.type||(l.config.grid.xaxis.lines.show&&this._drawGridLine( {
    x1: i, y1:a, x2:s, y2:n, parent:r;
}
), new Xs(this.ctx).drawXaxisTicks(i, this.elg));
}},  {
    key: "_drawGridLine", value:function(t) {
    var e=t.x1, i=t.y1, a=t.x2, s=t.y2, n=t.parent, o=this.w, r=n.node.classList.contains("apexcharts-gridlines-horizontal"), l=o.config.grid.strokeDashArray, c=o.globals.barPadForNumericAxis, h=new us(this).drawLine(e-(r?c: 0), i, a+(r?c:0), s, o.config.grid.borderColor, l);
    h.node.classList.add("apexcharts-gridline"), n.add(h);
}
},  {
    key: "_drawGridBandRect", value:function(t) {
    var e=t.c, i=t.x1, a=t.y1, s=t.x2, n=t.y2, o=t.type, r=this.w, l=new us(this.ctx), c=r.globals.barPadForNumericAxis;
    if("column"!==o||"datetime"!==r.config.xaxis.type) {
    var h=r.config.grid[o].colors[e], d=l.drawRect(i-("row"===o?c: 0), a, s+("row"===o?2*c:0), n, 0, h, r.config.grid[o].opacity);
    this.elg.add(d), d.attr("clip-path", "url(#gridRectMask".concat(r.globals.cuid, ")")), d.node.classList.add("apexcharts-grid-".concat(o));
}
}},  {
    key: "_drawXYLines", value:function(t) {
    var e=this, i=t.xCount, a=t.tickAmount, s=this.w;
    if(s.config.grid.xaxis.lines.show||s.config.xaxis.axisTicks.show) {
    var n, o=s.globals.padHorizontal, r=s.globals.gridHeight;
    s.globals.timescaleLabels.length?function(t) {
    for(var a=t.xC, s=t.x1, n=t.y1, o=t.x2, r=t.y2, l=0;
    l<a;
    l++)s=e.xaxisLabels[l].position, o=e.xaxisLabels[l].position, e._drawGridLines( {
    i: l, x1:s, y1:n, x2:o, y2:r, xCount:i, parent:e.elgridLinesV;
}
);
}( {
    xC: i, x1:o, y1:0, x2:n, y2:r;
}
):(s.globals.isXNumeric&&(i=s.globals.xAxisScale.result.length), s.config.xaxis.convertedCatToNumeric&&(i=s.globals.xaxisLabelsCount), function(t) {
    var a=t.xC, n=t.x1, o=t.y1, r=t.x2, l=t.y2;
    if(void 0!==s.config.xaxis.tickAmount&&"dataPoints"!==s.config.xaxis.tickAmount)s.globals.dom.baseEl.querySelectorAll(".apexcharts-text.apexcharts-xaxis-label tspan: not(:empty)").forEach((function(t, a) {
    var s=t.getBBox();
    e._drawGridLines( {
    i: a, x1:s.x+s.width/2, y1:o, x2:s.x+s.width/2, y2:l, xCount:i, parent:e.elgridLinesV;
}
);
}));
    else for(var c=0;
    c<a+(s.globals.isXNumeric?0: 1);
    c++)0===c&&1===a&&1===s.globals.dataPoints&&(r=n=s.globals.gridWidth/2), e._drawGridLines( {
    i: c, x1:n, y1:o, x2:r, y2:l, xCount:i, parent:e.elgridLinesV;
}
), r=n+=s.globals.gridWidth/(s.globals.isXNumeric?a-1:a);
}( {
    xC: i, x1:o, y1:0, x2:n, y2:r;
}
));
}if(s.config.grid.yaxis.lines.show) {
    var l=0, c=0, h=s.globals.gridWidth, d=a+1;
    this.isRangeBar&&(d=s.globals.labels.length);
    for(var u=0;
    u<d+(this.isRangeBar?1: 0);
    u++)this._drawGridLine( {
    x1: 0, y1:l, x2:h, y2:c, parent:this.elgridLinesH;
}
), c=l+=s.globals.gridHeight/(this.isRangeBar?d:a);
}}},  {
    key: "_drawInvertedXYLines", value:function(t) {
    var e=t.xCount, i=this.w;
    if(i.config.grid.xaxis.lines.show||i.config.xaxis.axisTicks.show)for(var a, s=i.globals.padHorizontal, n=i.globals.gridHeight, o=0;
    o<e+1;
    o++)i.config.grid.xaxis.lines.show&&this._drawGridLine( {
    x1: s, y1:0, x2:a, y2:n, parent:this.elgridLinesV;
}
), new Xs(this.ctx).drawXaxisTicks(s, this.elg), a=s=s+i.globals.gridWidth/e+.3;
    if(i.config.grid.yaxis.lines.show)for(var r=0, l=0, c=i.globals.gridWidth, h=0;
    h<i.globals.dataPoints+1;
    h++)this._drawGridLine( {
    x1: 0, y1:r, x2:c, y2:l, parent:this.elgridLinesH;
}
), l=r+=i.globals.gridHeight/i.globals.dataPoints;
}},  {
    key: "renderGrid", value:function() {
    var t=this.w, e=new us(this.ctx);
    this.elg=e.group( {
    class: "apexcharts-grid"}
), this.elgridLinesH=e.group( {
    class: "apexcharts-gridlines-horizontal"}
), this.elgridLinesV=e.group( {
    class: "apexcharts-gridlines-vertical"}
), this.elg.add(this.elgridLinesH), this.elg.add(this.elgridLinesV), t.config.grid.show||(this.elgridLinesV.hide(), this.elgridLinesH.hide());
    for(var i, a=t.globals.yAxisScale.length?t.globals.yAxisScale[0].result.length-1: 5, s=0;
    s<t.globals.series.length&&(void 0!==t.globals.yAxisScale[s]&&(a=t.globals.yAxisScale[s].result.length-1), !(a>2));
    s++);
    return!t.globals.isBarHorizontal||this.isRangeBar?(i=this.xaxisLabels.length, this.isRangeBar&&(a=t.globals.labels.length, t.config.xaxis.tickAmount&&t.config.xaxis.labels.formatter&&(i=t.config.xaxis.tickAmount)), this._drawXYLines( {
    xCount: i, tickAmount:a;
}
)):(i=a, a=t.globals.xTickAmount, this._drawInvertedXYLines( {
    xCount: i, tickAmount:a;
}
)), this.drawGridBands(i, a),  {
    el: this.elg, xAxisTickWidth:t.globals.gridWidth/i;
}
}},  {
    key: "drawGridBands", value:function(t, e) {
    var i=this.w;
    if(void 0!==i.config.grid.row.colors&&i.config.grid.row.colors.length>0)for(var a=0, s=i.globals.gridHeight/e, n=i.globals.gridWidth, o=0, r=0;
    o<e;
    o++, r++)r>=i.config.grid.row.colors.length&&(r=0), this._drawGridBandRect( {
    c: r, x1:0, y1:a, x2:n, y2:s, type:"row"}
), a+=i.globals.gridHeight/e;
    if(void 0!==i.config.grid.column.colors&&i.config.grid.column.colors.length>0)for(var l=i.globals.isBarHorizontal||"category"!==i.config.xaxis.type&&!i.config.xaxis.convertedCatToNumeric?t: t-1, c=i.globals.padHorizontal, h=i.globals.padHorizontal+i.globals.gridWidth/l, d=i.globals.gridHeight, u=0, g=0;
    u<t;
    u++, g++)g>=i.config.grid.column.colors.length&&(g=0), this._drawGridBandRect( {
    c: g, x1:c, y1:0, x2:h, y2:d, type:"column"}
), c+=i.globals.gridWidth/l;
}}]), t;
}(), Rs=function() {
    function t(e) {
    Ja(this, t), this.ctx=e, this.w=e.w;
}
return ts(t, [ {
    key: "niceScale", value:function(t, e) {
    var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]: 10, a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0, s=arguments.length>4?arguments[4]:void 0, n=this.w, o=Math.abs(e-t);
    if("dataPoints"===(i=this._adjustTicksForSmallRange(i, a, o))&&(i=n.globals.dataPoints-1), t===Number.MIN_VALUE&&0===e||!cs.isNumber(t)&&!cs.isNumber(e)||t===Number.MIN_VALUE&&e===-Number.MAX_VALUE) {
    t=0, e=i;
    var r=this.linearScale(t, e, i);
    return r;
}
t>e?(console.warn("axis.min cannot be greater than axis.max"), e=t+.1): t===e&&(t=0===t?0:t-.5, e=0===e?2:e+.5);
    var l=[];
    o<1&&s&&("candlestick"===n.config.chart.type||"candlestick"===n.config.series[a].type||"boxPlot"===n.config.chart.type||"boxPlot"===n.config.series[a].type||n.globals.isRangeData)&&(e*=1.01);
    var c=i+1;
    c<2?c=2: c>2&&(c-=2);
    var h=o/c, d=Math.floor(cs.log10(h)), u=Math.pow(10, d), g=Math.round(h/u);
    g<1&&(g=1);
    var f=g*u, p=f*Math.floor(t/f), x=f*Math.ceil(e/f), m=p;
    if(s&&o>2) {
    for(;
    l.push(m), !((m+=f)>x);
    );
    return {
    result: l, niceMin:l[0], niceMax:l[l.length-1];
}
}var b=t;
    (l=[]).push(b);
    for(var v=Math.abs(e-t)/i, y=0;
    y<=i;
    y++)b+=v, l.push(b);
    return l[l.length-2]>=e&&l.pop(),  {
    result: l, niceMin:l[0], niceMax:l[l.length-1];
}
}},  {
    key: "linearScale", value:function(t, e) {
    var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]: 10, a=arguments.length>3?arguments[3]:void 0, s=Math.abs(e-t);
    "dataPoints"===(i=this._adjustTicksForSmallRange(i, a, s))&&(i=this.w.globals.dataPoints-1);
    var n=s/i;
    i===Number.MAX_VALUE&&(i=10, n=1);
    for(var o=[], r=t;
    i>=0;
    )o.push(r), r+=n, i-=1;
    return {
    result: o, niceMin:o[0], niceMax:o[o.length-1];
}
}},  {
    key: "logarithmicScale", value:function(t, e, i) {
    for(var a=[], s=Math.ceil(Math.log(e)/Math.log(i))+1, n=0;
    n<s;
    n++)a.push(Math.pow(i, n));
    return 0===t&&a.unshift(t),  {
    result: a, niceMin:a[0], niceMax:a[a.length-1];
}
}},  {
    key: "_adjustTicksForSmallRange", value:function(t, e, i) {
    var a=t;
    if(void 0!==e&&this.w.config.yaxis[e].labels.formatter&&void 0===this.w.config.yaxis[e].tickAmount) {
    var s=this.w.config.yaxis[e].labels.formatter(1);
    cs.isNumber(Number(s))&&!cs.isFloat(s)&&(a=Math.ceil(i));
}
return a<t?a: t;
}},  {
    key: "setYScaleForIndex", value:function(t, e, i) {
    var a=this.w.globals, s=this.w.config, n=a.isBarHorizontal?s.xaxis: s.yaxis[t];
    void 0===a.yAxisScale[t]&&(a.yAxisScale[t]=[]);
    var o=Math.abs(i-e);
    if(n.logarithmic&&o<=5&&(a.invalidLogScale=!0), n.logarithmic&&o>5)a.allSeriesCollapsed=!1, a.yAxisScale[t]=this.logarithmicScale(e, i, n.logBase);
    else if(i!==-Number.MAX_VALUE&&cs.isNumber(i))if(a.allSeriesCollapsed=!1, void 0===n.min&&void 0===n.max||n.forceNiceScale) {
    var r=void 0===s.yaxis[t].max&&void 0===s.yaxis[t].min||s.yaxis[t].forceNiceScale;
    a.yAxisScale[t]=this.niceScale(e, i, n.tickAmount?n.tickAmount: o<5&&o>1?o+1:5, t, r);
}
else a.yAxisScale[t]=this.linearScale(e, i, n.tickAmount, t);
    else a.yAxisScale[t]=this.linearScale(0, 5, 5);
}
},  {
    key: "setXScale", value:function(t, e) {
    var i=this.w, a=i.globals, s=i.config.xaxis, n=Math.abs(e-t);
    return e!==-Number.MAX_VALUE&&cs.isNumber(e)?a.xAxisScale=this.linearScale(t, e, s.tickAmount?s.tickAmount: n<5&&n>1?n+1:5, 0):a.xAxisScale=this.linearScale(0, 5, 5), a.xAxisScale;
}
},  {
    key: "setMultipleYScales", value:function() {
    var t=this, e=this.w.globals, i=this.w.config, a=e.minYArr.concat([]), s=e.maxYArr.concat([]), n=[];
    i.yaxis.forEach((function(e, o) {
    var r=o;
    i.series.forEach((function(t, i) {
    t.name===e.seriesName&&(r=i, o!==i?n.push( {
    index: i, similarIndex:o, alreadyExists:!0;
}
):n.push( {
    index: i;
}
));
}));
    var l=a[r], c=s[r];
    t.setYScaleForIndex(o, l, c);
}
)), this.sameScaleInMultipleAxes(a, s, n);
}},  {
    key: "sameScaleInMultipleAxes", value:function(t, e, i) {
    var a=this, s=this.w.config, n=this.w.globals, o=[];
    i.forEach((function(t) {
    t.alreadyExists&&(void 0===o[t.index]&&(o[t.index]=[]), o[t.index].push(t.index), o[t.index].push(t.similarIndex));
}
)), n.yAxisSameScaleIndices=o, o.forEach((function(t, e) {
    o.forEach((function(i, a) {
    var s, n;
    e!==a&&(s=t, n=i, s.filter((function(t) {
    return-1!==n.indexOf(t);
}
))).length>0&&(o[e]=o[e].concat(o[a]));
}));
}));
    var r=o.map((function(t) {
    return t.filter((function(e, i) {
    return t.indexOf(e)===i;
}
));
})).map((function(t) {
    return t.sort();
}
));
    o=o.filter((function(t) {
    return!!t;
}
));
    var l=r.slice(), c=l.map((function(t) {
    return JSON.stringify(t);
}
));
    l=l.filter((function(t, e) {
    return c.indexOf(JSON.stringify(t))===e;
}
));
    var h=[], d=[];
    t.forEach((function(t, i) {
    l.forEach((function(a, s) {
    a.indexOf(i)>-1&&(void 0===h[s]&&(h[s]=[], d[s]=[]), h[s].push( {
    key: i, value:t;
}
), d[s].push( {
    key: i, value:e[i];
}
));
}));
}));
    var u=Array.apply(null, Array(l.length)).map(Number.prototype.valueOf, Number.MIN_VALUE), g=Array.apply(null, Array(l.length)).map(Number.prototype.valueOf, -Number.MAX_VALUE);
    h.forEach((function(t, e) {
    t.forEach((function(t, i) {
    u[e]=Math.min(t.value, u[e]);
}
));
})), d.forEach((function(t, e) {
    t.forEach((function(t, i) {
    g[e]=Math.max(t.value, g[e]);
}
));
})), t.forEach((function(t, e) {
    d.forEach((function(t, i) {
    var o=u[i], r=g[i];
    s.chart.stacked&&(r=0, t.forEach((function(t, e) {
    t.value!==-Number.MAX_VALUE&&(r+=t.value), o!==Number.MIN_VALUE&&(o+=h[i][e].value);
}
))), t.forEach((function(i, l) {
    t[l].key===e&&(void 0!==s.yaxis[e].min&&(o="function"==typeof s.yaxis[e].min?s.yaxis[e].min(n.minY): s.yaxis[e].min), void 0!==s.yaxis[e].max&&(r="function"==typeof s.yaxis[e].max?s.yaxis[e].max(n.maxY):s.yaxis[e].max), a.setYScaleForIndex(e, o, r));
}
));
}));
}));
}},  {
    key: "autoScaleY", value:function(t, e, i) {
    t||(t=this);
    var a=t.w;
    if(a.globals.isMultipleYAxis||a.globals.collapsedSeries.length)return console.warn("autoScaleYaxis is not supported in a multi-yaxis chart."), e;
    var s=a.globals.seriesX[0], n=a.config.chart.stacked;
    return e.forEach((function(t, o) {
    for(var r=0, l=0;
    l<s.length;
    l++)if(s[l]>=i.xaxis.min) {
    r=l;
    break;
}
var c, h, d=a.globals.minYArr[o], u=a.globals.maxYArr[o], g=a.globals.stackedSeriesTotals;
    a.globals.series.forEach((function(o, l) {
    var f=o[r];
    n?(f=g[r], c=h=f, g.forEach((function(t, e) {
    s[e]<=i.xaxis.max&&s[e]>=i.xaxis.min&&(t>h&&null!==t&&(h=t), o[e]<c&&null!==o[e]&&(c=o[e]));
}
))): (c=h=f, o.forEach((function(t, e) {
    if(s[e]<=i.xaxis.max&&s[e]>=i.xaxis.min) {
    var n=t, o=t;
    a.globals.series.forEach((function(i, a) {
    null!==t&&(n=Math.min(i[e], n), o=Math.max(i[e], o));
}
)), o>h&&null!==o&&(h=o), n<c&&null!==n&&(c=n);
}}))), void 0===c&&void 0===h&&(c=d, h=u), (h*=h<0?.9: 1.1)<0&&h<u&&(h=u), (c*=c<0?1.1:.9)<0&&c>d&&(c=d), e.length>1?(e[l].min=void 0===t.min?c:t.min, e[l].max=void 0===t.max?h:t.max):(e[0].min=void 0===t.min?c:t.min, e[0].max=void 0===t.max?h:t.max);
}));
})), e;
}}]), t;
}(), Ws=function() {
    function t(e) {
    Ja(this, t), this.ctx=e, this.w=e.w, this.scales=new Rs(e);
}
return ts(t, [ {
    key: "init", value:function() {
    this.setYRange(), this.setXRange(), this.setZRange();
}
},  {
    key: "getMinYMaxY", value:function(t) {
    var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]: Number.MAX_VALUE, i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:-Number.MAX_VALUE, a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null, s=this.w.config, n=this.w.globals, o=-Number.MAX_VALUE, r=Number.MIN_VALUE;
    null===a&&(a=t+1);
    var l=n.series, c=l, h=l;
    "candlestick"===s.chart.type?(c=n.seriesCandleL, h=n.seriesCandleH): "boxPlot"===s.chart.type?(c=n.seriesCandleO, h=n.seriesCandleC):n.isRangeData&&(c=n.seriesRangeStart, h=n.seriesRangeEnd);
    for(var d=t;
    d<a;
    d++) {
    n.dataPoints=Math.max(n.dataPoints, l[d].length), n.categoryLabels.length&&(n.dataPoints=n.categoryLabels.filter((function(t) {
    return void 0!==t;
}
)).length);
    for(var u=0;
    u<n.series[d].length;
    u++) {
    var g=l[d][u];
    null!==g&&cs.isNumber(g)?(void 0!==h[d][u]&&(o=Math.max(o, h[d][u]), e=Math.min(e, h[d][u])), void 0!==c[d][u]&&(e=Math.min(e, c[d][u]), i=Math.max(i, c[d][u])), "candlestick"!==this.w.config.chart.type&&"boxPlot"!==this.w.config.chart.type||(void 0!==n.seriesCandleC[d][u]&&(o=Math.max(o, n.seriesCandleO[d][u]), o=Math.max(o, n.seriesCandleH[d][u]), o=Math.max(o, n.seriesCandleL[d][u]), o=Math.max(o, n.seriesCandleC[d][u]), "boxPlot"===this.w.config.chart.type&&(o=Math.max(o, n.seriesCandleM[d][u]))), !s.series[d].type||"candlestick"===s.series[d].type&&"boxPlot"===s.series[d].type||(o=Math.max(o, n.series[d][u]), e=Math.min(e, n.series[d][u])), i=o), n.seriesGoals[d]&&n.seriesGoals[d][u]&&Array.isArray(n.seriesGoals[d][u])&&n.seriesGoals[d][u].forEach((function(t) {
    r!==Number.MIN_VALUE&&(r=Math.min(r, t.value), e=r), o=Math.max(o, t.value), i=o;
}
)), cs.isFloat(g)&&(g=cs.noExponents(g), n.yValueDecimal=Math.max(n.yValueDecimal, g.toString().split(".")[1].length)), r>c[d][u]&&c[d][u]<0&&(r=c[d][u])): n.hasNullValues=!0;
}}return"rangeBar"===s.chart.type&&n.seriesRangeStart.length&&n.isBarHorizontal&&(r=e), "bar"===s.chart.type&&(r<0&&o<0&&(o=0), r===Number.MIN_VALUE&&(r=0)),  {
    minY: r, maxY:o, lowestY:e, highestY:i;
}
}},  {
    key: "setYRange", value:function() {
    var t=this.w.globals, e=this.w.config;
    t.maxY=-Number.MAX_VALUE, t.minY=Number.MIN_VALUE;
    var i=Number.MAX_VALUE;
    if(t.isMultipleYAxis)for(var a=0;
    a<t.series.length;
    a++) {
    var s=this.getMinYMaxY(a, i, null, a+1);
    t.minYArr.push(s.minY), t.maxYArr.push(s.maxY), i=s.lowestY;
}
var n=this.getMinYMaxY(0, i, null, t.series.length);
    if(t.minY=n.minY, t.maxY=n.maxY, i=n.lowestY, e.chart.stacked&&this._setStackedMinMax(), ("line"===e.chart.type||"area"===e.chart.type||"candlestick"===e.chart.type||"boxPlot"===e.chart.type||"rangeBar"===e.chart.type&&!t.isBarHorizontal)&&t.minY===Number.MIN_VALUE&&i!==-Number.MAX_VALUE&&i!==t.maxY) {
    var o=t.maxY-i;
    (i>=0&&i<=10||void 0!==e.yaxis[0].min||void 0!==e.yaxis[0].max)&&(o=0), t.minY=i-5*o/100, i>0&&t.minY<0&&(t.minY=0), t.maxY=t.maxY+5*o/100;
}
return e.yaxis.forEach((function(e, i) {
    void 0!==e.max&&("number"==typeof e.max?t.maxYArr[i]=e.max: "function"==typeof e.max&&(t.maxYArr[i]=e.max(t.isMultipleYAxis?t.maxYArr[i]:t.maxY)), t.maxY=t.maxYArr[i]), void 0!==e.min&&("number"==typeof e.min?t.minYArr[i]=e.min:"function"==typeof e.min&&(t.minYArr[i]=e.min(t.isMultipleYAxis?t.minYArr[i]===Number.MIN_VALUE?0:t.minYArr[i]:t.minY)), t.minY=t.minYArr[i]);
}
)), t.isBarHorizontal&&["min", "max"].forEach((function(i) {
    void 0!==e.xaxis[i]&&"number"==typeof e.xaxis[i]&&("min"===i?t.minY=e.xaxis[i]: t.maxY=e.xaxis[i]);
}
)), t.isMultipleYAxis?(this.scales.setMultipleYScales(), t.minY=i, t.yAxisScale.forEach((function(e, i) {
    t.minYArr[i]=e.niceMin, t.maxYArr[i]=e.niceMax;
}
))): (this.scales.setYScaleForIndex(0, t.minY, t.maxY), t.minY=t.yAxisScale[0].niceMin, t.maxY=t.yAxisScale[0].niceMax, t.minYArr[0]=t.yAxisScale[0].niceMin, t.maxYArr[0]=t.yAxisScale[0].niceMax),  {
    minY: t.minY, maxY:t.maxY, minYArr:t.minYArr, maxYArr:t.maxYArr, yAxisScale:t.yAxisScale;
}
}},  {
    key: "setXRange", value:function() {
    var t=this.w.globals, e=this.w.config, i="numeric"===e.xaxis.type||"datetime"===e.xaxis.type||"category"===e.xaxis.type&&!t.noLabelsProvided||t.noLabelsProvided||t.isXNumeric;
    if(t.isXNumeric&&function() {
    for(var e=0;
    e<t.series.length;
    e++)if(t.labels[e])for(var i=0;
    i<t.labels[e].length;
    i++)null!==t.labels[e][i]&&cs.isNumber(t.labels[e][i])&&(t.maxX=Math.max(t.maxX, t.labels[e][i]), t.initialMaxX=Math.max(t.maxX, t.labels[e][i]), t.minX=Math.min(t.minX, t.labels[e][i]), t.initialMinX=Math.min(t.minX, t.labels[e][i]));
}
(), t.noLabelsProvided&&0===e.xaxis.categories.length&&(t.maxX=t.labels[t.labels.length-1], t.initialMaxX=t.labels[t.labels.length-1], t.minX=1, t.initialMinX=1), t.isXNumeric||t.noLabelsProvided||t.dataFormatXNumeric) {
    var a;
    if(void 0===e.xaxis.tickAmount?(a=Math.round(t.svgWidth/150), "numeric"===e.xaxis.type&&t.dataPoints<30&&(a=t.dataPoints-1), a>t.dataPoints&&0!==t.dataPoints&&(a=t.dataPoints-1)): "dataPoints"===e.xaxis.tickAmount?(t.series.length>1&&(a=t.series[t.maxValsInArrayIndex].length-1), t.isXNumeric&&(a=t.maxX-t.minX-1)):a=e.xaxis.tickAmount, t.xTickAmount=a, void 0!==e.xaxis.max&&"number"==typeof e.xaxis.max&&(t.maxX=e.xaxis.max), void 0!==e.xaxis.min&&"number"==typeof e.xaxis.min&&(t.minX=e.xaxis.min), void 0!==e.xaxis.range&&(t.minX=t.maxX-e.xaxis.range), t.minX!==Number.MAX_VALUE&&t.maxX!==-Number.MAX_VALUE)if(e.xaxis.convertedCatToNumeric&&!t.dataFormatXNumeric) {
    for(var s=[], n=t.minX-1;
    n<t.maxX;
    n++)s.push(n+1);
    t.xAxisScale= {
    result: s, niceMin:s[0], niceMax:s[s.length-1];
}
}else t.xAxisScale=this.scales.setXScale(t.minX, t.maxX);
    else t.xAxisScale=this.scales.linearScale(1, a, a), t.noLabelsProvided&&t.labels.length>0&&(t.xAxisScale=this.scales.linearScale(1, t.labels.length, a-1), t.seriesX=t.labels.slice());
    i&&(t.labels=t.xAxisScale.result.slice());
}
return t.isBarHorizontal&&t.labels.length&&(t.xTickAmount=t.labels.length), this._handleSingleDataPoint(), this._getMinXDiff(),  {
    minX: t.minX, maxX:t.maxX;
}
}},  {
    key: "setZRange", value:function() {
    var t=this.w.globals;
    if(t.isDataXYZ)for(var e=0;
    e<t.series.length;
    e++)if(void 0!==t.seriesZ[e])for(var i=0;
    i<t.seriesZ[e].length;
    i++)null!==t.seriesZ[e][i]&&cs.isNumber(t.seriesZ[e][i])&&(t.maxZ=Math.max(t.maxZ, t.seriesZ[e][i]), t.minZ=Math.min(t.minZ, t.seriesZ[e][i]));
}
},  {
    key: "_handleSingleDataPoint", value:function() {
    var t=this.w.globals, e=this.w.config;
    if(t.minX===t.maxX) {
    var i=new Ms(this.ctx);
    if("datetime"===e.xaxis.type) {
    var a=i.getDate(t.minX);
    e.xaxis.labels.datetimeUTC?a.setUTCDate(a.getUTCDate()-2): a.setDate(a.getDate()-2), t.minX=new Date(a).getTime();
    var s=i.getDate(t.maxX);
    e.xaxis.labels.datetimeUTC?s.setUTCDate(s.getUTCDate()+2): s.setDate(s.getDate()+2), t.maxX=new Date(s).getTime();
}
else("numeric"===e.xaxis.type||"category"===e.xaxis.type&&!t.noLabelsProvided)&&(t.minX=t.minX-2, t.initialMinX=t.minX, t.maxX=t.maxX+2, t.initialMaxX=t.maxX);
}}},  {
    key: "_getMinXDiff", value:function() {
    var t=this.w.globals;
    t.isXNumeric&&t.seriesX.forEach((function(e, i) {
    1===e.length&&e.push(t.seriesX[t.maxValsInArrayIndex][t.seriesX[t.maxValsInArrayIndex].length-1]);
    var a=e.slice();
    a.sort((function(t, e) {
    return t-e;
}
)), a.forEach((function(e, i) {
    if(i>0) {
    var s=e-a[i-1];
    s>0&&(t.minXDiff=Math.min(s, t.minXDiff));
}
})), 1!==t.dataPoints&&t.minXDiff!==Number.MAX_VALUE||(t.minXDiff=.5);
}));
}},  {
    key: "_setStackedMinMax", value:function() {
    var t=this.w.globals, e=[], i=[];
    if(t.series.length)for(var a=0;
    a<t.series[t.maxValsInArrayIndex].length;
    a++)for(var s=0, n=0, o=0;
    o<t.series.length;
    o++)null!==t.series[o][a]&&cs.isNumber(t.series[o][a])&&(t.series[o][a]>0?s=s+parseFloat(t.series[o][a])+1e-4: n+=parseFloat(t.series[o][a])), o===t.series.length-1&&(e.push(s), i.push(n));
    for(var r=0;
    r<e.length;
    r++)t.maxY=Math.max(t.maxY, e[r]), t.minY=Math.min(t.minY, i[r]);
}
}]), t;
}(), Bs=function() {
    function t(e) {
    Ja(this, t), this.ctx=e, this.w=e.w;
    var i=this.w;
    this.xaxisFontSize=i.config.xaxis.labels.style.fontSize, this.axisFontFamily=i.config.xaxis.labels.style.fontFamily, this.xaxisForeColors=i.config.xaxis.labels.style.colors, this.isCategoryBarHorizontal="bar"===i.config.chart.type&&i.config.plotOptions.bar.horizontal, this.xAxisoffX=0, "bottom"===i.config.xaxis.position&&(this.xAxisoffX=i.globals.gridHeight), this.drawnLabels=[], this.axesUtils=new Ns(e);
}
return ts(t, [ {
    key: "drawYaxis", value:function(t) {
    var e=this, i=this.w, a=new us(this.ctx), s=i.config.yaxis[t].labels.style, n=s.fontSize, o=s.fontFamily, r=s.fontWeight, l=a.group( {
    class: "apexcharts-yaxis", rel:t, transform:"translate("+i.globals.translateYAxisX[t]+",  0)"}
);
    if(this.axesUtils.isYAxisHidden(t))return l;
    var c=a.group( {
    class: "apexcharts-yaxis-texts-g"}
);
    l.add(c);
    var h=i.globals.yAxisScale[t].result.length-1, d=i.globals.gridHeight/h, u=i.globals.translateY, g=i.globals.yLabelFormatters[t], f=i.globals.yAxisScale[t].result.slice();
    f=this.axesUtils.checkForReversedLabels(t, f);
    var p="";
    if(i.config.yaxis[t].labels.show)for(var x=function(l) {
    var x=f[l];
    x=g(x, l, i);
    var m=i.config.yaxis[t].labels.padding;
    i.config.yaxis[t].opposite&&0!==i.config.yaxis.length&&(m*=-1);
    var b=e.axesUtils.getYAxisForeColor(s.colors, t), v=a.drawText( {
    x: m, y:u+h/10+i.config.yaxis[t].labels.offsetY+1, text:x, textAnchor:i.config.yaxis[t].opposite?"start":"end", fontSize:n, fontFamily:o, fontWeight:r, foreColor:Array.isArray(b)?b[l]:b, isPlainText:!1, cssClass:"apexcharts-yaxis-label "+s.cssClass;
}
);
    l===h&&(p=v), c.add(v);
    var y=document.createElementNS(i.globals.SVGNS, "title");
    if(y.textContent=Array.isArray(x)?x.join(" "): x, v.node.appendChild(y), 0!==i.config.yaxis[t].labels.rotate) {
    var w=a.rotateAroundCenter(p.node), k=a.rotateAroundCenter(v.node);
    v.node.setAttribute("transform", "rotate(".concat(i.config.yaxis[t].labels.rotate, " ").concat(w.x, " ").concat(k.y, ")"));
}
u+=d;
}, m=h;
    m>=0;
    m--)x(m);
    if(void 0!==i.config.yaxis[t].title.text) {
    var b=a.group( {
    class: "apexcharts-yaxis-title"}
), v=0;
    i.config.yaxis[t].opposite&&(v=i.globals.translateYAxisX[t]);
    var y=a.drawText( {
    x: v, y:i.globals.gridHeight/2+i.globals.translateY+i.config.yaxis[t].title.offsetY, text:i.config.yaxis[t].title.text, textAnchor:"end", foreColor:i.config.yaxis[t].title.style.color, fontSize:i.config.yaxis[t].title.style.fontSize, fontWeight:i.config.yaxis[t].title.style.fontWeight, fontFamily:i.config.yaxis[t].title.style.fontFamily, cssClass:"apexcharts-yaxis-title-text "+i.config.yaxis[t].title.style.cssClass;
}
);
    b.add(y), l.add(b);
}
var w=i.config.yaxis[t].axisBorder, k=31+w.offsetX;
    if(i.config.yaxis[t].opposite&&(k=-31-w.offsetX), w.show) {
    var A=a.drawLine(k, i.globals.translateY+w.offsetY-2, k, i.globals.gridHeight+i.globals.translateY+w.offsetY+2, w.color, 0, w.width);
    l.add(A);
}
return i.config.yaxis[t].axisTicks.show&&this.axesUtils.drawYAxisTicks(k, h, w, i.config.yaxis[t].axisTicks, t, d, l), l;
}},  {
    key: "drawYaxisInversed", value:function(t) {
    var e=this.w, i=new us(this.ctx), a=i.group( {
    class: "apexcharts-xaxis apexcharts-yaxis-inversed"}
), s=i.group( {
    class: "apexcharts-xaxis-texts-g", transform:"translate(".concat(e.globals.translateXAxisX, ",  ").concat(e.globals.translateXAxisY, ")");
}
);
    a.add(s);
    var n=e.globals.yAxisScale[t].result.length-1, o=e.globals.gridWidth/n+.1, r=o+e.config.xaxis.labels.offsetX, l=e.globals.xLabelFormatter, c=e.globals.yAxisScale[t].result.slice(), h=e.globals.timescaleLabels;
    h.length>0&&(this.xaxisLabels=h.slice(), n=(c=h.slice()).length), c=this.axesUtils.checkForReversedLabels(t, c);
    var d=h.length;
    if(e.config.xaxis.labels.show)for(var u=d?0: n;
    d?u<d: u>=0;
    d?u++: u--) {
    var g=c[u];
    g=l(g, u, e);
    var f=e.globals.gridWidth+e.globals.padHorizontal-(r-o+e.config.xaxis.labels.offsetX);
    if(h.length) {
    var p=this.axesUtils.getLabel(c, h, f, u, this.drawnLabels, this.xaxisFontSize);
    f=p.x, g=p.text, this.drawnLabels.push(p.text), 0===u&&e.globals.skipFirstTimelinelabel&&(g=""), u===c.length-1&&e.globals.skipLastTimelinelabel&&(g="");
}
var x=i.drawText( {
    x: f, y:this.xAxisoffX+e.config.xaxis.labels.offsetY+30-("top"===e.config.xaxis.position?e.globals.xAxisHeight+e.config.xaxis.axisTicks.height-2:0), text:g, textAnchor:"middle", foreColor:Array.isArray(this.xaxisForeColors)?this.xaxisForeColors[t]:this.xaxisForeColors, fontSize:this.xaxisFontSize, fontFamily:this.xaxisFontFamily, fontWeight:e.config.xaxis.labels.style.fontWeight, isPlainText:!1, cssClass:"apexcharts-xaxis-label "+e.config.xaxis.labels.style.cssClass;
}
);
    s.add(x), x.tspan(g);
    var m=document.createElementNS(e.globals.SVGNS, "title");
    m.textContent=g, x.node.appendChild(m), r+=o;
}
return this.inversedYAxisTitleText(a), this.inversedYAxisBorder(a), a;
}},  {
    key: "inversedYAxisBorder", value:function(t) {
    var e=this.w, i=new us(this.ctx), a=e.config.xaxis.axisBorder;
    if(a.show) {
    var s=0;
    "bar"===e.config.chart.type&&e.globals.isXNumeric&&(s-=15);
    var n=i.drawLine(e.globals.padHorizontal+s+a.offsetX, this.xAxisoffX, e.globals.gridWidth, this.xAxisoffX, a.color, 0, a.height);
    t.add(n);
}
}},  {
    key: "inversedYAxisTitleText", value:function(t) {
    var e=this.w, i=new us(this.ctx);
    if(void 0!==e.config.xaxis.title.text) {
    var a=i.group( {
    class: "apexcharts-xaxis-title apexcharts-yaxis-title-inversed"}
), s=i.drawText( {
    x: e.globals.gridWidth/2+e.config.xaxis.title.offsetX, y:this.xAxisoffX+parseFloat(this.xaxisFontSize)+parseFloat(e.config.xaxis.title.style.fontSize)+e.config.xaxis.title.offsetY+20, text:e.config.xaxis.title.text, textAnchor:"middle", fontSize:e.config.xaxis.title.style.fontSize, fontFamily:e.config.xaxis.title.style.fontFamily, fontWeight:e.config.xaxis.title.style.fontWeight, foreColor:e.config.xaxis.title.style.color, cssClass:"apexcharts-xaxis-title-text "+e.config.xaxis.title.style.cssClass;
}
);
    a.add(s), t.add(a);
}
}},  {
    key: "yAxisTitleRotate", value:function(t, e) {
    var i=this.w, a=new us(this.ctx), s= {
    width: 0, height:0;
}
, n= {
    width: 0, height:0;
}
, o=i.globals.dom.baseEl.querySelector(" .apexcharts-yaxis[rel='".concat(t, "'] .apexcharts-yaxis-texts-g"));
    null!==o&&(s=o.getBoundingClientRect());
    var r=i.globals.dom.baseEl.querySelector(".apexcharts-yaxis[rel='".concat(t, "'] .apexcharts-yaxis-title text"));
    if(null!==r&&(n=r.getBoundingClientRect()), null!==r) {
    var l=this.xPaddingForYAxisTitle(t, s, n, e);
    r.setAttribute("x", l.xPos-(e?10: 0));
}
if(null!==r) {
    var c=a.rotateAroundCenter(r);
    r.setAttribute("transform", "rotate(".concat(e?-1*i.config.yaxis[t].title.rotate: i.config.yaxis[t].title.rotate, " ").concat(c.x, " ").concat(c.y, ")"));
}
}},  {
    key: "xPaddingForYAxisTitle", value:function(t, e, i, a) {
    var s=this.w, n=0, o=0, r=10;
    return void 0===s.config.yaxis[t].title.text||t<0? {
    xPos: o, padd:0;
}
:(a?(o=e.width+s.config.yaxis[t].title.offsetX+i.width/2+r/2, 0===(n+=1)&&(o-=r/2)):(o=-1*e.width+s.config.yaxis[t].title.offsetX+r/2+i.width/2, s.globals.isBarHorizontal&&(r=25, o=-1*e.width-s.config.yaxis[t].title.offsetX-r)),  {
    xPos: o, padd:r;
}
);
}},  {
    key: "setYAxisXPosition", value:function(t, e) {
    var i=this.w, a=0, s=0, n=18, o=1;
    i.config.yaxis.length>1&&(this.multipleYs=!0), i.config.yaxis.map((function(r, l) {
    var c=i.globals.ignoreYAxisIndexes.indexOf(l)>-1||!r.show||r.floating||0===t[l].width, h=t[l].width+e[l].width;
    r.opposite?i.globals.isBarHorizontal?(s=i.globals.gridWidth+i.globals.translateX-1, i.globals.translateYAxisX[l]=s-r.labels.offsetX): (s=i.globals.gridWidth+i.globals.translateX+o, c||(o=o+h+20), i.globals.translateYAxisX[l]=s-r.labels.offsetX+20):(a=i.globals.translateX-n, c||(n=n+h+20), i.globals.translateYAxisX[l]=a+r.labels.offsetX);
}
));
}},  {
    key: "setYAxisTextAlignments", value:function() {
    var t=this.w, e=t.globals.dom.baseEl.getElementsByClassName("apexcharts-yaxis");
    (e=cs.listToArray(e)).forEach((function(e, i) {
    var a=t.config.yaxis[i];
    if(a&&void 0!==a.labels.align) {
    var s=t.globals.dom.baseEl.querySelector(".apexcharts-yaxis[rel='".concat(i, "'] .apexcharts-yaxis-texts-g")), n=t.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxis[rel='".concat(i, "'] .apexcharts-yaxis-label"));
    n=cs.listToArray(n);
    var o=s.getBoundingClientRect();
    "left"===a.labels.align?(n.forEach((function(t, e) {
    t.setAttribute("text-anchor", "start");
}
)), a.opposite||s.setAttribute("transform", "translate(-".concat(o.width, ",  0)"))): "center"===a.labels.align?(n.forEach((function(t, e) {
    t.setAttribute("text-anchor", "middle");
}
)), s.setAttribute("transform", "translate(".concat(o.width/2*(a.opposite?1: -1), ",  0)"))):"right"===a.labels.align&&(n.forEach((function(t, e) {
    t.setAttribute("text-anchor", "end");
}
)), a.opposite&&s.setAttribute("transform", "translate(".concat(o.width, ",  0)")));
}}));
}}]), t;
}(), Vs=function() {
    function t(e) {
    Ja(this, t), this.ctx=e, this.w=e.w, this.documentEvent=cs.bind(this.documentEvent, this);
}
return ts(t, [ {
    key: "addEventListener", value:function(t, e) {
    var i=this.w;
    i.globals.events.hasOwnProperty(t)?i.globals.events[t].push(e): i.globals.events[t]=[e];
}
},  {
    key: "removeEventListener", value:function(t, e) {
    var i=this.w;
    if(i.globals.events.hasOwnProperty(t)) {
    var a=i.globals.events[t].indexOf(e);
    -1!==a&&i.globals.events[t].splice(a, 1);
}
}},  {
    key: "fireEvent", value:function(t, e) {
    var i=this.w;
    if(i.globals.events.hasOwnProperty(t)) {
    e&&e.length||(e=[]);
    for(var a=i.globals.events[t], s=a.length, n=0;
    n<s;
    n++)a[n].apply(null, e);
}
}},  {
    key: "setupEventHandlers", value:function() {
    var t=this, e=this.w, i=this.ctx, a=e.globals.dom.baseEl.querySelector(e.globals.chartClass);
    this.ctx.eventList.forEach((function(t) {
    a.addEventListener(t, (function(t) {
    var a=Object.assign( {
}
, e,  {
    seriesIndex: e.globals.capturedSeriesIndex, dataPointIndex:e.globals.capturedDataPointIndex;
}
);
    "mousemove"===t.type||"touchmove"===t.type?"function"==typeof e.config.chart.events.mouseMove&&e.config.chart.events.mouseMove(t, i, a): "mouseleave"===t.type||"touchleave"===t.type?"function"==typeof e.config.chart.events.mouseLeave&&e.config.chart.events.mouseLeave(t, i, a):("mouseup"===t.type&&1===t.which||"touchend"===t.type)&&("function"==typeof e.config.chart.events.click&&e.config.chart.events.click(t, i, a), i.ctx.events.fireEvent("click", [t, i, a]));
}
),  {
    capture: !1, passive:!0;
}
);
})), this.ctx.eventList.forEach((function(i) {
    e.globals.dom.baseEl.addEventListener(i, t.documentEvent,  {
    passive: !0;
}
);
})), this.ctx.core.setupBrushHandler();
}},  {
    key: "documentEvent", value:function(t) {
    var e=this.w, i=t.target.className;
    if("click"===t.type) {
    var a=e.globals.dom.baseEl.querySelector(".apexcharts-menu");
    a&&a.classList.contains("apexcharts-menu-open")&&"apexcharts-menu-icon"!==i&&a.classList.remove("apexcharts-menu-open");
}
e.globals.clientX="touchmove"===t.type?t.touches[0].clientX: t.clientX, e.globals.clientY="touchmove"===t.type?t.touches[0].clientY:t.clientY;
}}]), t;
}(), js=function() {
    function t(e) {
    Ja(this, t), this.ctx=e, this.w=e.w;
}
return ts(t, [ {
    key: "setCurrentLocaleValues", value:function(t) {
    var e=this.w.config.chart.locales;
    window.Apex.chart&&window.Apex.chart.locales&&window.Apex.chart.locales.length>0&&(e=this.w.config.chart.locales.concat(window.Apex.chart.locales));
    var i=e.filter((function(e) {
    return e.name===t;
}
))[0];
    if(!i)throw new Error("Wrong locale name provided. Please make sure you set the correct locale name in options");
    var a=cs.extend(bs, i);
    this.w.globals.locale=a.options;
}
}]), t;
}(), Gs=function() {
    function t(e) {
    Ja(this, t), this.ctx=e, this.w=e.w;
}
return ts(t, [ {
    key: "drawAxis", value:function(t, e) {
    var i, a, s=this.w.globals, n=this.w.config, o=new Xs(this.ctx), r=new Bs(this.ctx);
    s.axisCharts&&"radar"!==t&&(s.isBarHorizontal?(a=r.drawYaxisInversed(0), i=o.drawXaxisInversed(0), s.dom.elGraphical.add(i), s.dom.elGraphical.add(a)): (i=o.drawXaxis(), s.dom.elGraphical.add(i), n.yaxis.map((function(t, e) {
    -1===s.ignoreYAxisIndexes.indexOf(e)&&(a=r.drawYaxis(e), s.dom.Paper.add(a));
}
))));
}}]), t;
}(), Us=function() {
    function t(e) {
    Ja(this, t), this.ctx=e, this.w=e.w;
}
return ts(t, [ {
    key: "drawXCrosshairs", value:function() {
    var t=this.w, e=new us(this.ctx), i=new ds(this.ctx), a=t.config.xaxis.crosshairs.fill.gradient, s=t.config.xaxis.crosshairs.dropShadow, n=t.config.xaxis.crosshairs.fill.type, o=a.colorFrom, r=a.colorTo, l=a.opacityFrom, c=a.opacityTo, h=a.stops, d=s.enabled, u=s.left, g=s.top, f=s.blur, p=s.color, x=s.opacity, m=t.config.xaxis.crosshairs.fill.color;
    if(t.config.xaxis.crosshairs.show) {
    "gradient"===n&&(m=e.drawGradient("vertical", o, r, l, c, null, h, null));
    var b=e.drawRect();
    1===t.config.xaxis.crosshairs.width&&(b=e.drawLine());
    var v=t.globals.gridHeight;
    (!cs.isNumber(v)||v<0)&&(v=0);
    var y=t.config.xaxis.crosshairs.width;
    (!cs.isNumber(y)||y<0)&&(y=0), b.attr( {
    class: "apexcharts-xcrosshairs", x:0, y:0, y2:v, width:y, height:v, fill:m, filter:"none", "fill-opacity":t.config.xaxis.crosshairs.opacity, stroke:t.config.xaxis.crosshairs.stroke.color, "stroke-width":t.config.xaxis.crosshairs.stroke.width, "stroke-dasharray":t.config.xaxis.crosshairs.stroke.dashArray;
}
), d&&(b=i.dropShadow(b,  {
    left: u, top:g, blur:f, color:p, opacity:x;
}
)), t.globals.dom.elGraphical.add(b);
}}},  {
    key: "drawYCrosshairs", value:function() {
    var t=this.w, e=new us(this.ctx), i=t.config.yaxis[0].crosshairs, a=t.globals.barPadForNumericAxis;
    if(t.config.yaxis[0].crosshairs.show) {
    var s=e.drawLine(-a, 0, t.globals.gridWidth+a, 0, i.stroke.color, i.stroke.dashArray, i.stroke.width);
    s.attr( {
    class: "apexcharts-ycrosshairs"}
), t.globals.dom.elGraphical.add(s);
}var n=e.drawLine(-a, 0, t.globals.gridWidth+a, 0, i.stroke.color, 0, 0);
    n.attr( {
    class: "apexcharts-ycrosshairs-hidden"}
), t.globals.dom.elGraphical.add(n);
}}]), t;
}(), qs=function() {
    function t(e) {
    Ja(this, t), this.ctx=e, this.w=e.w;
}
return ts(t, [ {
    key: "checkResponsiveConfig", value:function(t) {
    var e=this, i=this.w, a=i.config;
    if(0!==a.responsive.length) {
    var s=a.responsive.slice();
    s.sort((function(t, e) {
    return t.breakpoint>e.breakpoint?1: e.breakpoint>t.breakpoint?-1:0;
}
)).reverse();
    var n=new Ds( {
}
), o=function() {
    var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:  {
}
, a=s[0].breakpoint, o=window.innerWidth>0?window.innerWidth:screen.width;
    if(o>a) {
    var r=ps.extendArrayProps(n, i.globals.initialConfig, i);
    t=cs.extend(r, t), t=cs.extend(i.config, t), e.overrideResponsiveOptions(t);
}
else for(var l=0;
    l<s.length;
    l++)o<s[l].breakpoint&&(t=ps.extendArrayProps(n, s[l].options, i), t=cs.extend(i.config, t), e.overrideResponsiveOptions(t));
}
;
    if(t) {
    var r=ps.extendArrayProps(n, t, i);
    r=cs.extend(i.config, r), o(r=cs.extend(r, t));
}
else o( {
}
);
}
}},  {
    key: "overrideResponsiveOptions", value:function(t) {
    var e=new Ds(t).init( {
    responsiveOverride: !0;
}
);
    this.w.config=e;
}
}]), t;
}(), $s=function() {
    function t(e) {
    Ja(this, t), this.ctx=e, this.colors=[], this.w=e.w;
    var i=this.w;
    this.isColorFn=!1, this.isHeatmapDistributed="treemap"===i.config.chart.type&&i.config.plotOptions.treemap.distributed||"heatmap"===i.config.chart.type&&i.config.plotOptions.heatmap.distributed, this.isBarDistributed=i.config.plotOptions.bar.distributed&&("bar"===i.config.chart.type||"rangeBar"===i.config.chart.type);
}
return ts(t, [ {
    key: "init", value:function() {
    this.setDefaultColors();
}
},  {
    key: "setDefaultColors", value:function() {
    var t=this, e=this.w, i=new cs;
    if(e.globals.dom.elWrap.classList.add("apexcharts-theme-".concat(e.config.theme.mode)), void 0===e.config.colors?e.globals.colors=this.predefined(): (e.globals.colors=e.config.colors, Array.isArray(e.config.colors)&&e.config.colors.length>0&&"function"==typeof e.config.colors[0]&&(e.globals.colors=e.config.series.map((function(i, a) {
    var s=e.config.colors[a];
    return s||(s=e.config.colors[0]), "function"==typeof s?(t.isColorFn=!0, s( {
    value: e.globals.axisCharts?e.globals.series[a][0]?e.globals.series[a][0]:0:e.globals.series[a], seriesIndex:a, dataPointIndex:a, w:e;
}
)):s;
})))), e.globals.seriesColors.map((function(t, i) {
    t&&(e.globals.colors[i]=t);
}
)), e.config.theme.monochrome.enabled) {
    var a=[], s=e.globals.series.length;
    (this.isBarDistributed||this.isHeatmapDistributed)&&(s=e.globals.series[0].length*e.globals.series.length);
    for(var n=e.config.theme.monochrome.color, o=1/(s/e.config.theme.monochrome.shadeIntensity), r=e.config.theme.monochrome.shadeTo, l=0, c=0;
    c<s;
    c++) {
    var h=void 0;
    "dark"===r?(h=i.shadeColor(-1*l, n), l+=o): (h=i.shadeColor(l, n), l+=o), a.push(h);
}
e.globals.colors=a.slice();
}var d=e.globals.colors.slice();
    this.pushExtraColors(e.globals.colors), ["fill", "stroke"].forEach((function(i) {
    void 0===e.config[i].colors?e.globals[i].colors=t.isColorFn?e.config.colors: d:e.globals[i].colors=e.config[i].colors.slice(), t.pushExtraColors(e.globals[i].colors);
}
)), void 0===e.config.dataLabels.style.colors?e.globals.dataLabels.style.colors=d:e.globals.dataLabels.style.colors=e.config.dataLabels.style.colors.slice(), this.pushExtraColors(e.globals.dataLabels.style.colors, 50), void 0===e.config.plotOptions.radar.polygons.fill.colors?e.globals.radarPolygons.fill.colors=["dark"===e.config.theme.mode?"#424242":"none"]:e.globals.radarPolygons.fill.colors=e.config.plotOptions.radar.polygons.fill.colors.slice(), this.pushExtraColors(e.globals.radarPolygons.fill.colors, 20), void 0===e.config.markers.colors?e.globals.markers.colors=d:e.globals.markers.colors=e.config.markers.colors.slice(), this.pushExtraColors(e.globals.markers.colors);
}},  {
    key: "pushExtraColors", value:function(t, e) {
    var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]: null, a=this.w, s=e||a.globals.series.length;
    if(null===i&&(i=this.isBarDistributed||this.isHeatmapDistributed||"heatmap"===a.config.chart.type&&a.config.plotOptions.heatmap.colorScale.inverse), i&&a.globals.series.length&&(s=a.globals.series[a.globals.maxValsInArrayIndex].length*a.globals.series.length), t.length<s)for(var n=s-t.length, o=0;
    o<n;
    o++)t.push(t[o]);
}
},  {
    key: "updateThemeOptions", value:function(t) {
    t.chart=t.chart|| {
}
, t.tooltip=t.tooltip|| {
}
;
    var e=t.theme.mode||"light", i=t.theme.palette?t.theme.palette: "dark"===e?"palette4":"palette1", a=t.chart.foreColor?t.chart.foreColor:"dark"===e?"#f6f7f8":"#373d3f";
    return t.tooltip.theme=e, t.chart.foreColor=a, t.theme.palette=i, t;
}
},  {
    key: "predefined", value:function() {
    switch(this.w.config.theme.palette) {
    case"palette1": default:this.colors=["#008FFB", "#00E396", "#FEB019", "#FF4560", "#775DD0"];
    break;
    case"palette2": this.colors=["#3f51b5", "#03a9f4", "#4caf50", "#f9ce1d", "#FF9800"];
    break;
    case"palette3": this.colors=["#33b2df", "#546E7A", "#d4526e", "#13d8aa", "#A5978B"];
    break;
    case"palette4": this.colors=["#4ecdc4", "#c7f464", "#81D4FA", "#fd6a6a", "#546E7A"];
    break;
    case"palette5": this.colors=["#2b908f", "#f9a3a4", "#90ee7e", "#fa4443", "#69d2e7"];
    break;
    case"palette6": this.colors=["#449DD1", "#F86624", "#EA3546", "#662E9B", "#C5D86D"];
    break;
    case"palette7": this.colors=["#D7263D", "#1B998B", "#2E294E", "#F46036", "#E2C044"];
    break;
    case"palette8": this.colors=["#662E9B", "#F86624", "#F9C80E", "#EA3546", "#43BCCD"];
    break;
    case"palette9": this.colors=["#5C4742", "#A5978B", "#8D5B4C", "#5A2A27", "#C4BBAF"];
    break;
    case"palette10": this.colors=["#A300D6", "#7D02EB", "#5653FE", "#2983FF", "#00B1F2"];
}
return this.colors;
}}]), t;
}(), Zs=function() {
    function t(e) {
    Ja(this, t), this.ctx=e, this.w=e.w;
}
return ts(t, [ {
    key: "draw", value:function() {
    this.drawTitleSubtitle("title"), this.drawTitleSubtitle("subtitle");
}
},  {
    key: "drawTitleSubtitle", value:function(t) {
    var e=this.w, i="title"===t?e.config.title: e.config.subtitle, a=e.globals.svgWidth/2, s=i.offsetY, n="middle";
    if("left"===i.align?(a=10, n="start"): "right"===i.align&&(a=e.globals.svgWidth-10, n="end"), a+=i.offsetX, s=s+parseInt(i.style.fontSize, 10)+i.margin/2, void 0!==i.text) {
    var o=new us(this.ctx).drawText( {
    x: a, y:s, text:i.text, textAnchor:n, fontSize:i.style.fontSize, fontFamily:i.style.fontFamily, fontWeight:i.style.fontWeight, foreColor:i.style.color, opacity:1;
}
);
    o.node.setAttribute("class", "apexcharts-".concat(t, "-text")), e.globals.dom.Paper.add(o);
}
}}]), t;
}(), Ks=function() {
    function t(e) {
    Ja(this, t), this.w=e.w, this.dCtx=e;
}
return ts(t, [ {
    key: "getTitleSubtitleCoords", value:function(t) {
    var e=this.w, i=0, a=0, s="title"===t?e.config.title.floating: e.config.subtitle.floating, n=e.globals.dom.baseEl.querySelector(".apexcharts-".concat(t, "-text"));
    if(null!==n&&!s) {
    var o=n.getBoundingClientRect();
    i=o.width, a=e.globals.axisCharts?o.height+5: o.height;
}
return {
    width: i, height:a;
}
}},  {
    key: "getLegendsRect", value:function() {
    var t=this.w, e=t.globals.dom.baseEl.querySelector(".apexcharts-legend");
    t.config.legend.height||"top"!==t.config.legend.position&&"bottom"!==t.config.legend.position||(e.style.maxHeight=t.globals.svgHeight/2+"px");
    var i=Object.assign( {
}
, cs.getBoundingClientRect(e));
    return null!==e&&!t.config.legend.floating&&t.config.legend.show?this.dCtx.lgRect= {
    x: i.x, y:i.y, height:i.height, width:0===i.height?0:i.width;
}
:this.dCtx.lgRect= {
    x: 0, y:0, height:0, width:0;
}
, "left"!==t.config.legend.position&&"right"!==t.config.legend.position||1.5*this.dCtx.lgRect.width>t.globals.svgWidth&&(this.dCtx.lgRect.width=t.globals.svgWidth/1.5), this.dCtx.lgRect;
}},  {
    key: "getLargestStringFromMultiArr", value:function(t, e) {
    var i=t;
    if(this.w.globals.isMultiLineX) {
    var a=e.map((function(t, e) {
    return Array.isArray(t)?t.length: 1;
}
)), s=Math.max.apply(Math, rs(a));
    i=e[a.indexOf(s)];
}
return i;
}}]), t;
}(), Js=function() {
    function t(e) {
    Ja(this, t), this.w=e.w, this.dCtx=e;
}
return ts(t, [ {
    key: "getxAxisLabelsCoords", value:function() {
    var t, e=this.w, i=e.globals.labels.slice();
    if(e.config.xaxis.convertedCatToNumeric&&0===i.length&&(i=e.globals.categoryLabels), e.globals.timescaleLabels.length>0) {
    var a=this.getxAxisTimeScaleLabelsCoords();
    t= {
    width: a.width, height:a.height;
}
, e.globals.rotateXLabels=!1;
}else {
    this.dCtx.lgWidthForSideLegends="left"!==e.config.legend.position&&"right"!==e.config.legend.position||e.config.legend.floating?0: this.dCtx.lgRect.width;
    var s=e.globals.xLabelFormatter, n=cs.getLargestStringFromArr(i), o=this.dCtx.dimHelpers.getLargestStringFromMultiArr(n, i);
    e.globals.isBarHorizontal&&(o=n=e.globals.yAxisScale[0].result.reduce((function(t, e) {
    return t.length>e.length?t: e;
}
), 0));
    var r=new Ys(this.dCtx.ctx), l=n;
    n=r.xLabelFormat(s, n, l,  {
    i: void 0, dateFormatter:new Ms(this.dCtx.ctx).formatDate, w:e;
}
), o=r.xLabelFormat(s, o, l,  {
    i: void 0, dateFormatter:new Ms(this.dCtx.ctx).formatDate, w:e;
}
), (e.config.xaxis.convertedCatToNumeric&&void 0===n||""===String(n).trim())&&(o=n="1");
    var c=new us(this.dCtx.ctx), h=c.getTextRects(n, e.config.xaxis.labels.style.fontSize), d=h;
    if(n!==o&&(d=c.getTextRects(o, e.config.xaxis.labels.style.fontSize)), (t= {
    width: h.width>=d.width?h.width:d.width, height:h.height>=d.height?h.height:d.height;
}
).width*i.length>e.globals.svgWidth-this.dCtx.lgWidthForSideLegends-this.dCtx.yAxisWidth-this.dCtx.gridPad.left-this.dCtx.gridPad.right&&0!==e.config.xaxis.labels.rotate||e.config.xaxis.labels.rotateAlways) {
    if(!e.globals.isBarHorizontal) {
    e.globals.rotateXLabels=!0;
    var u=function(t) {
    return c.getTextRects(t, e.config.xaxis.labels.style.fontSize, e.config.xaxis.labels.style.fontFamily, "rotate(".concat(e.config.xaxis.labels.rotate, " 0 0)"), !1);
}
;
    h=u(n), n!==o&&(d=u(o)), t.height=(h.height>d.height?h.height: d.height)/1.5, t.width=h.width>d.width?h.width:d.width;
}
}else e.globals.rotateXLabels=!1;
}return e.config.xaxis.labels.show||(t= {
    width: 0, height:0;
}
),  {
    width: t.width, height:t.height;
}
}},  {
    key: "getxAxisTitleCoords", value:function() {
    var t=this.w, e=0, i=0;
    if(void 0!==t.config.xaxis.title.text) {
    var a=new us(this.dCtx.ctx).getTextRects(t.config.xaxis.title.text, t.config.xaxis.title.style.fontSize);
    e=a.width, i=a.height;
}
return {
    width: e, height:i;
}
}},  {
    key: "getxAxisTimeScaleLabelsCoords", value:function() {
    var t, e=this.w;
    this.dCtx.timescaleLabels=e.globals.timescaleLabels.slice();
    var i=this.dCtx.timescaleLabels.map((function(t) {
    return t.value;
}
)), a=i.reduce((function(t, e) {
    return void 0===t?(console.error("You have possibly supplied invalid Date format. Please supply a valid JavaScript Date"), 0): t.length>e.length?t:e;
}
), 0);
    return 1.05*(t=new us(this.dCtx.ctx).getTextRects(a, e.config.xaxis.labels.style.fontSize)).width*i.length>e.globals.gridWidth&&0!==e.config.xaxis.labels.rotate&&(e.globals.overlappingXLabels=!0), t;
}
},  {
    key: "additionalPaddingXLabels", value:function(t) {
    var e=this, i=this.w, a=i.globals, s=i.config, n=s.xaxis.type, o=t.width;
    a.skipLastTimelinelabel=!1, a.skipFirstTimelinelabel=!1;
    var r=i.config.yaxis[0].opposite&&i.globals.isBarHorizontal;
    s.yaxis.forEach((function(t, l) {
    r?(e.dCtx.gridPad.left<o&&(e.dCtx.xPadLeft=o/2+1), e.dCtx.xPadRight=o/2+1): function(t, r) {
    var l;
    l=r, -1!==a.collapsedSeriesIndices.indexOf(l)||function(t) {
    if(e.dCtx.timescaleLabels&&e.dCtx.timescaleLabels.length) {
    var r=e.dCtx.timescaleLabels[0], l=e.dCtx.timescaleLabels[e.dCtx.timescaleLabels.length-1].position+o/1.75-e.dCtx.yAxisWidthRight, c=r.position-o/1.75+e.dCtx.yAxisWidthLeft, h="right"===i.config.legend.position&&e.dCtx.lgRect.width>0?e.dCtx.lgRect.width: 0;
    l>a.svgWidth-a.translateX-h&&(a.skipLastTimelinelabel=!0), c<-(t.show&&!t.floating||"bar"!==s.chart.type&&"candlestick"!==s.chart.type&&"rangeBar"!==s.chart.type&&"boxPlot"!==s.chart.type?10: o/1.75)&&(a.skipFirstTimelinelabel=!0);
}
else"datetime"===n?e.dCtx.gridPad.right<o&&!a.rotateXLabels&&(a.skipLastTimelinelabel=!0):"datetime"!==n&&e.dCtx.gridPad.right<o/2-e.dCtx.yAxisWidthRight&&!a.rotateXLabels&&!i.config.xaxis.labels.trim&&("between"!==i.config.xaxis.tickPlacement||i.globals.isBarHorizontal)&&(e.dCtx.xPadRight=o/2+1);
}(t);
}(t, l);
}));
}}]), t;
}(), Qs=function() {
    function t(e) {
    Ja(this, t), this.w=e.w, this.dCtx=e;
}
return ts(t, [ {
    key: "getyAxisLabelsCoords", value:function() {
    var t=this, e=this.w, i=[], a=10, s=new Ns(this.dCtx.ctx);
    return e.config.yaxis.map((function(n, o) {
    var r=e.globals.yAxisScale[o], l=0;
    if(!s.isYAxisHidden(o)&&n.labels.show&&void 0!==n.labels.minWidth&&(l=n.labels.minWidth), !s.isYAxisHidden(o)&&n.labels.show&&r.result.length) {
    var c=e.globals.yLabelFormatters[o], h=r.niceMin===Number.MIN_VALUE?0: r.niceMin, d=String(h).length>String(r.niceMax).length?h:r.niceMax, u=c(d,  {
    seriesIndex: o, dataPointIndex:-1, w:e;
}
), g=u;
    if(void 0!==u&&0!==u.length||(u=d), e.globals.isBarHorizontal) {
    a=0;
    var f=e.globals.labels.slice();
    u=c(u=cs.getLargestStringFromArr(f),  {
    seriesIndex: o, dataPointIndex:-1, w:e;
}
), g=t.dCtx.dimHelpers.getLargestStringFromMultiArr(u, f);
}var p=new us(t.dCtx.ctx), x="rotate(".concat(n.labels.rotate, " 0 0)"), m=p.getTextRects(u, n.labels.style.fontSize, n.labels.style.fontFamily, x, !1), b=m;
    u!==g&&(b=p.getTextRects(g, n.labels.style.fontSize, n.labels.style.fontFamily, x, !1)), i.push( {
    width: (l>b.width||l>m.width?l:b.width>m.width?b.width:m.width)+a, height:b.height>m.height?b.height:m.height;
}
);
}else i.push( {
    width: 0, height:0;
}
);
})), i;
}},  {
    key: "getyAxisTitleCoords", value:function() {
    var t=this, e=this.w, i=[];
    return e.config.yaxis.map((function(e, a) {
    if(e.show&&void 0!==e.title.text) {
    var s=new us(t.dCtx.ctx), n="rotate(".concat(e.title.rotate, " 0 0)"), o=s.getTextRects(e.title.text, e.title.style.fontSize, e.title.style.fontFamily, n, !1);
    i.push( {
    width: o.width, height:o.height;
}
);
}else i.push( {
    width: 0, height:0;
}
);
})), i;
}},  {
    key: "getTotalYAxisWidth", value:function() {
    var t=this.w, e=0, i=0, a=0, s=t.globals.yAxisScale.length>1?10: 0, n=new Ns(this.dCtx.ctx), o=function(o, r) {
    var l, c=t.config.yaxis[r].floating, h=0;
    o.width>0&&!c?(h=o.width+s, l=r, t.globals.ignoreYAxisIndexes.indexOf(l)>-1&&(h=h-o.width-s)): h=c||n.isYAxisHidden(r)?0:5, t.config.yaxis[r].opposite?a+=h:i+=h, e+=h;
}
;
    return t.globals.yLabelsCoords.map((function(t, e) {
    o(t, e);
}
)), t.globals.yTitleCoords.map((function(t, e) {
    o(t, e);
}
)), t.globals.isBarHorizontal&&!t.config.yaxis[0].floating&&(e=t.globals.yLabelsCoords[0].width+t.globals.yTitleCoords[0].width+15), this.dCtx.yAxisWidthLeft=i, this.dCtx.yAxisWidthRight=a, e;
}}]), t;
}(), tn=function() {
    function t(e) {
    Ja(this, t), this.w=e.w, this.dCtx=e;
}
return ts(t, [ {
    key: "gridPadForColumnsInNumericAxis", value:function(t) {
    var e=this.w;
    if(e.globals.noData||e.globals.allSeriesCollapsed)return 0;
    var i=function(t) {
    return"bar"===t||"rangeBar"===t||"candlestick"===t||"boxPlot"===t;
}
, a=e.config.chart.type, s=0, n=i(a)?e.config.series.length: 1;
    if(e.globals.comboBarCount>0&&(n=e.globals.comboBarCount), e.globals.collapsedSeries.forEach((function(t) {
    i(t.type)&&(n-=1);
}
)), e.config.chart.stacked&&(n=1), (i(a)||e.globals.comboBarCount>0)&&e.globals.isXNumeric&&!e.globals.isBarHorizontal&&n>0) {
    var o, r, l=Math.abs(e.globals.initialMaxX-e.globals.initialMinX);
    l<=3&&(l=e.globals.dataPoints), o=l/t, e.globals.minXDiff&&e.globals.minXDiff/o>0&&(r=e.globals.minXDiff/o), r>t/2&&(r/=2), (s=r/n*parseInt(e.config.plotOptions.bar.columnWidth, 10)/100)<1&&(s=1), s=s/(n>1?1: 1.5)+5, e.globals.barPadForNumericAxis=s;
}
return s;
}},  {
    key: "gridPadFortitleSubtitle", value:function() {
    var t=this, e=this.w, i=e.globals, a=this.dCtx.isSparkline||!e.globals.axisCharts?0: 10;
    ["title", "subtitle"].forEach((function(i) {
    void 0!==e.config[i].text?a+=e.config[i].margin: a+=t.dCtx.isSparkline||!e.globals.axisCharts?0:5;
}
)), !e.config.legend.show||"bottom"!==e.config.legend.position||e.config.legend.floating||e.globals.axisCharts||(a+=10);
    var s=this.dCtx.dimHelpers.getTitleSubtitleCoords("title"), n=this.dCtx.dimHelpers.getTitleSubtitleCoords("subtitle");
    i.gridHeight=i.gridHeight-s.height-n.height-a, i.translateY=i.translateY+s.height+n.height+a;
}
},  {
    key: "setGridXPosForDualYAxis", value:function(t, e) {
    var i=this.w, a=new Ns(this.dCtx.ctx);
    i.config.yaxis.map((function(s, n) {
    -1!==i.globals.ignoreYAxisIndexes.indexOf(n)||s.floating||a.isYAxisHidden(n)||(s.opposite&&(i.globals.translateX=i.globals.translateX-(e[n].width+t[n].width)-parseInt(i.config.yaxis[n].labels.style.fontSize, 10)/1.2-12), i.globals.translateX<2&&(i.globals.translateX=2));
}
));
}}]), t;
}(), en=function() {
    function t(e) {
    Ja(this, t), this.ctx=e, this.w=e.w, this.lgRect= {
}
, this.yAxisWidth=0, this.yAxisWidthLeft=0, this.yAxisWidthRight=0, this.xAxisHeight=0, this.isSparkline=this.w.config.chart.sparkline.enabled, this.dimHelpers=new Ks(this), this.dimYAxis=new Qs(this), this.dimXAxis=new Js(this), this.dimGrid=new tn(this), this.lgWidthForSideLegends=0, this.gridPad=this.w.config.grid.padding, this.xPadRight=0, this.xPadLeft=0;
}
return ts(t, [ {
    key: "plotCoords", value:function() {
    var t=this.w.globals;
    this.lgRect=this.dimHelpers.getLegendsRect(), t.axisCharts?this.setDimensionsForAxisCharts(): this.setDimensionsForNonAxisCharts(), this.dimGrid.gridPadFortitleSubtitle(), t.gridHeight=t.gridHeight-this.gridPad.top-this.gridPad.bottom, t.gridWidth=t.gridWidth-this.gridPad.left-this.gridPad.right-this.xPadRight-this.xPadLeft;
    var e=this.dimGrid.gridPadForColumnsInNumericAxis(t.gridWidth);
    t.gridWidth=t.gridWidth-2*e, t.translateX=t.translateX+this.gridPad.left+this.xPadLeft+(e>0?e+4: 0), t.translateY=t.translateY+this.gridPad.top;
}
},  {
    key: "setDimensionsForAxisCharts", value:function() {
    var t=this, e=this.w, i=e.globals, a=this.dimYAxis.getyAxisLabelsCoords(), s=this.dimYAxis.getyAxisTitleCoords();
    e.globals.yLabelsCoords=[], e.globals.yTitleCoords=[], e.config.yaxis.map((function(t, i) {
    e.globals.yLabelsCoords.push( {
    width: a[i].width, index:i;
}
), e.globals.yTitleCoords.push( {
    width: s[i].width, index:i;
}
);
})), this.yAxisWidth=this.dimYAxis.getTotalYAxisWidth();
    var n=this.dimXAxis.getxAxisLabelsCoords(), o=this.dimXAxis.getxAxisTitleCoords();
    this.conditionalChecksForAxisCoords(n, o), i.translateXAxisY=e.globals.rotateXLabels?this.xAxisHeight/8: -4, i.translateXAxisX=e.globals.rotateXLabels&&e.globals.isXNumeric&&e.config.xaxis.labels.rotate<=-45?-this.xAxisWidth/4:0, e.globals.isBarHorizontal&&(i.rotateXLabels=!1, i.translateXAxisY=parseInt(e.config.xaxis.labels.style.fontSize, 10)/1.5*-1), i.translateXAxisY=i.translateXAxisY+e.config.xaxis.labels.offsetY, i.translateXAxisX=i.translateXAxisX+e.config.xaxis.labels.offsetX;
    var r=this.yAxisWidth, l=this.xAxisHeight;
    i.xAxisLabelsHeight=this.xAxisHeight-o.height, i.xAxisLabelsWidth=this.xAxisWidth, i.xAxisHeight=this.xAxisHeight;
    var c=10;
    ("radar"===e.config.chart.type||this.isSparkline)&&(r=0, l=i.goldenPadding), this.isSparkline&&(this.lgRect= {
    height: 0, width:0;
}
), (this.isSparkline||"treemap"===e.config.chart.type)&&(r=0, l=0, c=0), this.isSparkline||this.dimXAxis.additionalPaddingXLabels(n);
    var h=function() {
    i.translateX=r, i.gridHeight=i.svgHeight-t.lgRect.height-l-(t.isSparkline||"treemap"===e.config.chart.type?0: e.globals.rotateXLabels?10:15), i.gridWidth=i.svgWidth-r;
}
;
    switch("top"===e.config.xaxis.position&&(c=i.xAxisHeight-e.config.xaxis.axisTicks.height-5), e.config.legend.position) {
    case"bottom": i.translateY=c, h();
    break;
    case"top": i.translateY=this.lgRect.height+c, h();
    break;
    case"left": i.translateY=c, i.translateX=this.lgRect.width+r, i.gridHeight=i.svgHeight-l-12, i.gridWidth=i.svgWidth-this.lgRect.width-r;
    break;
    case"right": i.translateY=c, i.translateX=r, i.gridHeight=i.svgHeight-l-12, i.gridWidth=i.svgWidth-this.lgRect.width-r-5;
    break;
    default: throw new Error("Legend position not supported");
}
this.dimGrid.setGridXPosForDualYAxis(s, a), new Bs(this.ctx).setYAxisXPosition(a, s);
}},  {
    key: "setDimensionsForNonAxisCharts", value:function() {
    var t=this.w, e=t.globals, i=t.config, a=0;
    t.config.legend.show&&!t.config.legend.floating&&(a=20);
    var s="pie"===i.chart.type||"polarArea"===i.chart.type||"donut"===i.chart.type?"pie": "radialBar", n=i.plotOptions[s].offsetY, o=i.plotOptions[s].offsetX;
    if(!i.legend.show||i.legend.floating)return e.gridHeight=e.svgHeight-i.grid.padding.left+i.grid.padding.right, e.gridWidth=e.gridHeight, e.translateY=n, void(e.translateX=o+(e.svgWidth-e.gridWidth)/2);
    switch(i.legend.position) {
    case"bottom": e.gridHeight=e.svgHeight-this.lgRect.height-e.goldenPadding, e.gridWidth=e.svgWidth, e.translateY=n-10, e.translateX=o+(e.svgWidth-e.gridWidth)/2;
    break;
    case"top": e.gridHeight=e.svgHeight-this.lgRect.height-e.goldenPadding, e.gridWidth=e.svgWidth, e.translateY=this.lgRect.height+n+10, e.translateX=o+(e.svgWidth-e.gridWidth)/2;
    break;
    case"left": e.gridWidth=e.svgWidth-this.lgRect.width-a, e.gridHeight="auto"!==i.chart.height?e.svgHeight:e.gridWidth, e.translateY=n, e.translateX=o+this.lgRect.width+a;
    break;
    case"right": e.gridWidth=e.svgWidth-this.lgRect.width-a-5, e.gridHeight="auto"!==i.chart.height?e.svgHeight:e.gridWidth, e.translateY=n, e.translateX=o+10;
    break;
    default: throw new Error("Legend position not supported");
}
}},  {
    key: "conditionalChecksForAxisCoords", value:function(t, e) {
    var i=this.w, a=t.height+e.height, s=i.globals.isMultiLineX?1.2: i.globals.LINE_HEIGHT_RATIO, n=i.globals.rotateXLabels?22:10, o=i.globals.rotateXLabels&&"bottom"===i.config.legend.position?10:0;
    this.xAxisHeight=a*s+n+o, this.xAxisWidth=t.width, this.xAxisHeight-e.height>i.config.xaxis.labels.maxHeight&&(this.xAxisHeight=i.config.xaxis.labels.maxHeight), i.config.xaxis.labels.minHeight&&this.xAxisHeight<i.config.xaxis.labels.minHeight&&(this.xAxisHeight=i.config.xaxis.labels.minHeight), i.config.xaxis.floating&&(this.xAxisHeight=0);
    var r=0, l=0;
    i.config.yaxis.forEach((function(t) {
    r+=t.labels.minWidth, l+=t.labels.maxWidth;
}
)), this.yAxisWidth<r&&(this.yAxisWidth=r), this.yAxisWidth>l&&(this.yAxisWidth=l);
}}]), t;
}(), an=function() {
    function t(e) {
    Ja(this, t), this.w=e.w, this.lgCtx=e;
}
return ts(t, [ {
    key: "getLegendStyles", value:function() {
    var t=document.createElement("style");
    t.setAttribute("type", "text/css");
    var e=document.createTextNode("\t\n    \t\n      .apexcharts-legend  {
    \t\n        display:  flex;
    \t\n        overflow:  auto;
    \t\n        padding:  0 10px;
    \t\n  }
\t\n      .apexcharts-legend.apx-legend-position-bottom,  .apexcharts-legend.apx-legend-position-top  {
    \t\n        flex-wrap:  wrap\t\n  }
\t\n      .apexcharts-legend.apx-legend-position-right,  .apexcharts-legend.apx-legend-position-left  {
    \t\n        flex-direction:  column;
    \t\n        bottom:  0;
    \t\n  }
\t\n      .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-left,  .apexcharts-legend.apx-legend-position-top.apexcharts-align-left,  .apexcharts-legend.apx-legend-position-right,  .apexcharts-legend.apx-legend-position-left  {
    \t\n        justify-content:  flex-start;
    \t\n  }
\t\n      .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-center,  .apexcharts-legend.apx-legend-position-top.apexcharts-align-center  {
    \t\n        justify-content:  center;
      \t\n  }
\t\n      .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-right,  .apexcharts-legend.apx-legend-position-top.apexcharts-align-right  {
    \t\n        justify-content:  flex-end;
    \t\n  }
\t\n      .apexcharts-legend-series  {
    \t\n        cursor:  pointer;
    \t\n        line-height:  normal;
    \t\n  }
\t\n      .apexcharts-legend.apx-legend-position-bottom .apexcharts-legend-series,  .apexcharts-legend.apx-legend-position-top .apexcharts-legend-series {
    \t\n        display:  flex;
    \t\n        align-items:  center;
    \t\n  }
\t\n      .apexcharts-legend-text  {
    \t\n        position:  relative;
    \t\n        font-size:  14px;
    \t\n  }
\t\n      .apexcharts-legend-text *,  .apexcharts-legend-marker *  {
    \t\n        pointer-events:  none;
    \t\n  }
\t\n      .apexcharts-legend-marker  {
    \t\n        position:  relative;
    \t\n        display:  inline-block;
    \t\n        cursor:  pointer;
    \t\n        margin-right:  3px;
    \t\n        border-style:  solid;
    \n  }
\t\n      \t\n      .apexcharts-legend.apexcharts-align-right .apexcharts-legend-series,  .apexcharts-legend.apexcharts-align-left .apexcharts-legend-series {
    \t\n        display:  inline-block;
    \t\n  }
\t\n      .apexcharts-legend-series.apexcharts-no-click  {
    \t\n        cursor:  auto;
    \t\n  }
\t\n      .apexcharts-legend .apexcharts-hidden-zero-series,  .apexcharts-legend .apexcharts-hidden-null-series  {
    \t\n        display:  none !important;
    \t\n  }
\t\n      .apexcharts-inactive-legend  {
    \t\n        opacity:  0.45;
    \t\n  }
");
    return t.appendChild(e), t;
}
},  {
    key: "getLegendBBox", value:function() {
    var t=this.w.globals.dom.baseEl.querySelector(".apexcharts-legend").getBoundingClientRect(), e=t.width;
    return {
    clwh: t.height, clww:e;
}
}},  {
    key: "appendToForeignObject", value:function() {
    var t=this.w.globals;
    t.dom.elLegendForeign=document.createElementNS(t.SVGNS, "foreignObject");
    var e=t.dom.elLegendForeign;
    e.setAttribute("x", 0), e.setAttribute("y", 0), e.setAttribute("width", t.svgWidth), e.setAttribute("height", t.svgHeight), t.dom.elLegendWrap.setAttribute("xmlns", "http: //www.w3.org/1999/xhtml"), e.appendChild(t.dom.elLegendWrap), e.appendChild(this.getLegendStyles()), t.dom.Paper.node.insertBefore(e, t.dom.elGraphical.node);
}
},  {
    key: "toggleDataSeries", value:function(t, e) {
    var i=this, a=this.w;
    if(a.globals.axisCharts||"radialBar"===a.config.chart.type) {
    a.globals.resized=!0;
    var s=null, n=null;
    a.globals.risingSeries=[], a.globals.axisCharts?(s=a.globals.dom.baseEl.querySelector(".apexcharts-series[data\\: realIndex='".concat(t, "']")), n=parseInt(s.getAttribute("data:realIndex"), 10)):(s=a.globals.dom.baseEl.querySelector(".apexcharts-series[rel='".concat(t+1, "']")), n=parseInt(s.getAttribute("rel"), 10)-1), e?[ {
    cs: a.globals.collapsedSeries, csi:a.globals.collapsedSeriesIndices;
}
,  {
    cs: a.globals.ancillaryCollapsedSeries, csi:a.globals.ancillaryCollapsedSeriesIndices;
}
].forEach((function(t) {
    i.riseCollapsedSeries(t.cs, t.csi, n);
}
)): this.hideSeries( {
    seriesEl: s, realIndex:n;
}
);
}else {
    var o=a.globals.dom.Paper.select(" .apexcharts-series[rel='".concat(t+1, "'] path")), r=a.config.chart.type;
    if("pie"===r||"polarArea"===r||"donut"===r) {
    var l=a.config.plotOptions.pie.donut.labels;
    new us(this.lgCtx.ctx).pathMouseDown(o.members[0], null), this.lgCtx.ctx.pie.printDataLabelsInner(o.members[0].node, l);
}
o.fire("click");
}}},  {
    key: "hideSeries", value:function(t) {
    var e=t.seriesEl, i=t.realIndex, a=this.w, s=cs.clone(a.config.series);
    if(a.globals.axisCharts) {
    var n=!1;
    if(a.config.yaxis[i]&&a.config.yaxis[i].show&&a.config.yaxis[i].showAlways&&(n=!0, a.globals.ancillaryCollapsedSeriesIndices.indexOf(i)<0&&(a.globals.ancillaryCollapsedSeries.push( {
    index: i, data:s[i].data.slice(), type:e.parentNode.className.baseVal.split("-")[1];
}
), a.globals.ancillaryCollapsedSeriesIndices.push(i))), !n) {
    a.globals.collapsedSeries.push( {
    index: i, data:s[i].data.slice(), type:e.parentNode.className.baseVal.split("-")[1];
}
), a.globals.collapsedSeriesIndices.push(i);
    var o=a.globals.risingSeries.indexOf(i);
    a.globals.risingSeries.splice(o, 1);
}
}else a.globals.collapsedSeries.push( {
    index: i, data:s[i];
}
), a.globals.collapsedSeriesIndices.push(i);
    for(var r=e.childNodes, l=0;
    l<r.length;
    l++)r[l].classList.contains("apexcharts-series-markers-wrap")&&(r[l].classList.contains("apexcharts-hide")?r[l].classList.remove("apexcharts-hide"): r[l].classList.add("apexcharts-hide"));
    a.globals.allSeriesCollapsed=a.globals.collapsedSeries.length===a.config.series.length, s=this._getSeriesBasedOnCollapsedState(s), this.lgCtx.ctx.updateHelpers._updateSeries(s, a.config.chart.animations.dynamicAnimation.enabled);
}
},  {
    key: "riseCollapsedSeries", value:function(t, e, i) {
    var a=this.w, s=cs.clone(a.config.series);
    if(t.length>0) {
    for(var n=0;
    n<t.length;
    n++)t[n].index===i&&(a.globals.axisCharts?(s[i].data=t[n].data.slice(), t.splice(n, 1), e.splice(n, 1), a.globals.risingSeries.push(i)): (s[i]=t[n].data, t.splice(n, 1), e.splice(n, 1), a.globals.risingSeries.push(i)));
    s=this._getSeriesBasedOnCollapsedState(s), this.lgCtx.ctx.updateHelpers._updateSeries(s, a.config.chart.animations.dynamicAnimation.enabled);
}
}},  {
    key: "_getSeriesBasedOnCollapsedState", value:function(t) {
    var e=this.w;
    return e.globals.axisCharts?t.forEach((function(i, a) {
    e.globals.collapsedSeriesIndices.indexOf(a)>-1&&(t[a].data=[]);
}
)): t.forEach((function(i, a) {
    e.globals.collapsedSeriesIndices.indexOf(a)>-1&&(t[a]=0);
}
)), t;
}}]), t;
}(), sn=function() {
    function t(e, i) {
    Ja(this, t), this.ctx=e, this.w=e.w, this.onLegendClick=this.onLegendClick.bind(this), this.onLegendHovered=this.onLegendHovered.bind(this), this.isBarsDistributed="bar"===this.w.config.chart.type&&this.w.config.plotOptions.bar.distributed&&1===this.w.config.series.length, this.legendHelpers=new an(this);
}
return ts(t, [ {
    key: "init", value:function() {
    var t=this.w, e=t.globals, i=t.config;
    if((i.legend.showForSingleSeries&&1===e.series.length||this.isBarsDistributed||e.series.length>1||!e.axisCharts)&&i.legend.show) {
    for(;
    e.dom.elLegendWrap.firstChild;
    )e.dom.elLegendWrap.removeChild(e.dom.elLegendWrap.firstChild);
    this.drawLegends(), cs.isIE11()?document.getElementsByTagName("head")[0].appendChild(this.legendHelpers.getLegendStyles()): this.legendHelpers.appendToForeignObject(), "bottom"===i.legend.position||"top"===i.legend.position?this.legendAlignHorizontal():"right"!==i.legend.position&&"left"!==i.legend.position||this.legendAlignVertical();
}
}},  {
    key: "drawLegends", value:function() {
    var t=this, e=this.w, i=e.config.legend.fontFamily, a=e.globals.seriesNames, s=e.globals.colors.slice();
    if("heatmap"===e.config.chart.type) {
    var n=e.config.plotOptions.heatmap.colorScale.ranges;
    a=n.map((function(t) {
    return t.name?t.name: t.from+" - "+t.to;
}
)), s=n.map((function(t) {
    return t.color;
}
));
}else this.isBarsDistributed&&(a=e.globals.labels.slice());
    e.config.legend.customLegendItems.length&&(a=e.config.legend.customLegendItems);
    for(var o=e.globals.legendFormatter, r=e.config.legend.inverseOrder, l=r?a.length-1: 0;
    r?l>=0: l<=a.length-1;
    r?l--: l++) {
    var c=o(a[l],  {
    seriesIndex: l, w:e;
}
), h=!1, d=!1;
    if(e.globals.collapsedSeries.length>0)for(var u=0;
    u<e.globals.collapsedSeries.length;
    u++)e.globals.collapsedSeries[u].index===l&&(h=!0);
    if(e.globals.ancillaryCollapsedSeriesIndices.length>0)for(var g=0;
    g<e.globals.ancillaryCollapsedSeriesIndices.length;
    g++)e.globals.ancillaryCollapsedSeriesIndices[g]===l&&(d=!0);
    var f=document.createElement("span");
    f.classList.add("apexcharts-legend-marker");
    var p=e.config.legend.markers.offsetX, x=e.config.legend.markers.offsetY, m=e.config.legend.markers.height, b=e.config.legend.markers.width, v=e.config.legend.markers.strokeWidth, y=e.config.legend.markers.strokeColor, w=e.config.legend.markers.radius, k=f.style;
    k.background=s[l], k.color=s[l], k.setProperty("background", s[l], "important"), e.config.legend.markers.fillColors&&e.config.legend.markers.fillColors[l]&&(k.background=e.config.legend.markers.fillColors[l]), void 0!==e.globals.seriesColors[l]&&(k.background=e.globals.seriesColors[l], k.color=e.globals.seriesColors[l]), k.height=Array.isArray(m)?parseFloat(m[l])+"px": parseFloat(m)+"px", k.width=Array.isArray(b)?parseFloat(b[l])+"px":parseFloat(b)+"px", k.left=(Array.isArray(p)?parseFloat(p[l]):parseFloat(p))+"px", k.top=(Array.isArray(x)?parseFloat(x[l]):parseFloat(x))+"px", k.borderWidth=Array.isArray(v)?v[l]:v, k.borderColor=Array.isArray(y)?y[l]:y, k.borderRadius=Array.isArray(w)?parseFloat(w[l])+"px":parseFloat(w)+"px", e.config.legend.markers.customHTML&&(Array.isArray(e.config.legend.markers.customHTML)?e.config.legend.markers.customHTML[l]&&(f.innerHTML=e.config.legend.markers.customHTML[l]()):f.innerHTML=e.config.legend.markers.customHTML()), us.setAttrs(f,  {
    rel: l+1, "data:collapsed":h||d;
}
), (h||d)&&f.classList.add("apexcharts-inactive-legend");
    var A=document.createElement("div"), C=document.createElement("span");
    C.classList.add("apexcharts-legend-text"), C.innerHTML=Array.isArray(c)?c.join(" "): c;
    var S=e.config.legend.labels.useSeriesColors?e.globals.colors[l]: e.config.legend.labels.colors;
    S||(S=e.config.chart.foreColor), C.style.color=S, C.style.fontSize=parseFloat(e.config.legend.fontSize)+"px", C.style.fontWeight=e.config.legend.fontWeight, C.style.fontFamily=i||e.config.chart.fontFamily, us.setAttrs(C,  {
    rel: l+1, i:l, "data:default-text":encodeURIComponent(c), "data:collapsed":h||d;
}
), A.appendChild(f), A.appendChild(C);
    var E=new ps(this.ctx);
    e.config.legend.showForZeroSeries||0===E.getSeriesTotalByIndex(l)&&E.seriesHaveSameValues(l)&&!E.isSeriesNull(l)&&-1===e.globals.collapsedSeriesIndices.indexOf(l)&&-1===e.globals.ancillaryCollapsedSeriesIndices.indexOf(l)&&A.classList.add("apexcharts-hidden-zero-series"), e.config.legend.showForNullSeries||E.isSeriesNull(l)&&-1===e.globals.collapsedSeriesIndices.indexOf(l)&&-1===e.globals.ancillaryCollapsedSeriesIndices.indexOf(l)&&A.classList.add("apexcharts-hidden-null-series"), e.globals.dom.elLegendWrap.appendChild(A), e.globals.dom.elLegendWrap.classList.add("apexcharts-align-".concat(e.config.legend.horizontalAlign)), e.globals.dom.elLegendWrap.classList.add("apx-legend-position-"+e.config.legend.position), A.classList.add("apexcharts-legend-series"), A.style.margin="".concat(e.config.legend.itemMargin.vertical, "px ").concat(e.config.legend.itemMargin.horizontal, "px"), e.globals.dom.elLegendWrap.style.width=e.config.legend.width?e.config.legend.width+"px": "", e.globals.dom.elLegendWrap.style.height=e.config.legend.height?e.config.legend.height+"px":"", us.setAttrs(A,  {
    rel: l+1, seriesName:cs.escapeString(a[l]), "data:collapsed":h||d;
}
), (h||d)&&A.classList.add("apexcharts-inactive-legend"), e.config.legend.onItemClick.toggleDataSeries||A.classList.add("apexcharts-no-click");
}e.globals.dom.elWrap.addEventListener("click", t.onLegendClick, !0), e.config.legend.onItemHover.highlightDataSeries&&0===e.config.legend.customLegendItems.length&&(e.globals.dom.elWrap.addEventListener("mousemove", t.onLegendHovered, !0), e.globals.dom.elWrap.addEventListener("mouseout", t.onLegendHovered, !0));
}},  {
    key: "setLegendWrapXY", value:function(t, e) {
    var i=this.w, a=i.globals.dom.baseEl.querySelector(".apexcharts-legend"), s=a.getBoundingClientRect(), n=0, o=0;
    if("bottom"===i.config.legend.position)o+=i.globals.svgHeight-s.height/2;
    else if("top"===i.config.legend.position) {
    var r=new en(this.ctx), l=r.dimHelpers.getTitleSubtitleCoords("title").height, c=r.dimHelpers.getTitleSubtitleCoords("subtitle").height;
    o=o+(l>0?l-10: 0)+(c>0?c-10:0);
}
a.style.position="absolute", n=n+t+i.config.legend.offsetX, o=o+e+i.config.legend.offsetY, a.style.left=n+"px", a.style.top=o+"px", "bottom"===i.config.legend.position?(a.style.top="auto", a.style.bottom=5-i.config.legend.offsetY+"px"):"right"===i.config.legend.position&&(a.style.left="auto", a.style.right=25+i.config.legend.offsetX+"px"), ["width", "height"].forEach((function(t) {
    a.style[t]&&(a.style[t]=parseInt(i.config.legend[t], 10)+"px");
}
));
}},  {
    key: "legendAlignHorizontal", value:function() {
    var t=this.w;
    t.globals.dom.baseEl.querySelector(".apexcharts-legend").style.right=0;
    var e=this.legendHelpers.getLegendBBox(), i=new en(this.ctx), a=i.dimHelpers.getTitleSubtitleCoords("title"), s=i.dimHelpers.getTitleSubtitleCoords("subtitle"), n=0;
    "bottom"===t.config.legend.position?n=-e.clwh/1.8: "top"===t.config.legend.position&&(n=a.height+s.height+t.config.title.margin+t.config.subtitle.margin-10), this.setLegendWrapXY(20, n);
}
},  {
    key: "legendAlignVertical", value:function() {
    var t=this.w, e=this.legendHelpers.getLegendBBox(), i=0;
    "left"===t.config.legend.position&&(i=20), "right"===t.config.legend.position&&(i=t.globals.svgWidth-e.clww-10), this.setLegendWrapXY(i, 20);
}
},  {
    key: "onLegendHovered", value:function(t) {
    var e=this.w, i=t.target.classList.contains("apexcharts-legend-text")||t.target.classList.contains("apexcharts-legend-marker");
    if("heatmap"===e.config.chart.type||this.isBarsDistributed) {
    if(i) {
    var a=parseInt(t.target.getAttribute("rel"), 10)-1;
    this.ctx.events.fireEvent("legendHover", [this.ctx, a, this.w]), new Es(this.ctx).highlightRangeInSeries(t, t.target);
}
}else!t.target.classList.contains("apexcharts-inactive-legend")&&i&&new Es(this.ctx).toggleSeriesOnHover(t, t.target);
}},  {
    key: "onLegendClick", value:function(t) {
    var e=this.w;
    if(!e.config.legend.customLegendItems.length&&(t.target.classList.contains("apexcharts-legend-text")||t.target.classList.contains("apexcharts-legend-marker"))) {
    var i=parseInt(t.target.getAttribute("rel"), 10)-1, a="true"===t.target.getAttribute("data: collapsed"), s=this.w.config.chart.events.legendClick;
    "function"==typeof s&&s(this.ctx, i, this.w), this.ctx.events.fireEvent("legendClick", [this.ctx, i, this.w]);
    var n=this.w.config.legend.markers.onClick;
    "function"==typeof n&&t.target.classList.contains("apexcharts-legend-marker")&&(n(this.ctx, i, this.w), this.ctx.events.fireEvent("legendMarkerClick", [this.ctx, i, this.w])), "treemap"!==e.config.chart.type&&"heatmap"!==e.config.chart.type&&!this.isBarsDistributed&&e.config.legend.onItemClick.toggleDataSeries&&this.legendHelpers.toggleDataSeries(i, a);
}
}}]), t;
}(), nn=function() {
    function t(e) {
    Ja(this, t), this.ctx=e, this.w=e.w;
    var i=this.w;
    this.ev=this.w.config.chart.events, this.selectedClass="apexcharts-selected", this.localeValues=this.w.globals.locale.toolbar, this.minX=i.globals.minX, this.maxX=i.globals.maxX;
}
return ts(t, [ {
    key: "createToolbar", value:function() {
    var t=this, e=this.w, i=function() {
    return document.createElement("div");
}
, a=i();
    if(a.setAttribute("class", "apexcharts-toolbar"), a.style.top=e.config.chart.toolbar.offsetY+"px", a.style.right=3-e.config.chart.toolbar.offsetX+"px", e.globals.dom.elWrap.appendChild(a), this.elZoom=i(), this.elZoomIn=i(), this.elZoomOut=i(), this.elPan=i(), this.elSelection=i(), this.elZoomReset=i(), this.elMenuIcon=i(), this.elMenu=i(), this.elCustomIcons=[], this.t=e.config.chart.toolbar.tools, Array.isArray(this.t.customIcons))for(var s=0;
    s<this.t.customIcons.length;
    s++)this.elCustomIcons.push(i());
    var n=[], o=function(i, a, s) {
    var o=i.toLowerCase();
    t.t[o]&&e.config.chart.zoom.enabled&&n.push( {
    el: a, icon:"string"==typeof t.t[o]?t.t[o]:s, title:t.localeValues[i], class:"apexcharts-".concat(o, "-icon");
}
);
};
    o("zoomIn", this.elZoomIn, '<svg xmlns="http: //www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">\n    <path d="M0 0h24v24H0z" fill="none"/>\n    <path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>\n</svg>\n'), o("zoomOut", this.elZoomOut, '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">\n    <path d="M0 0h24v24H0z" fill="none"/>\n    <path d="M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>\n</svg>\n');
    var r=function(i) {
    t.t[i]&&e.config.chart[i].enabled&&n.push( {
    el: "zoom"===i?t.elZoom:t.elSelection, icon:"string"==typeof t.t[i]?t.t[i]:"zoom"===i?'<svg xmlns="http://www.w3.org/2000/svg" fill="#000000" height="24" viewBox="0 0 24 24" width="24">\n    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>\n    <path d="M0 0h24v24H0V0z" fill="none"/>\n    <path d="M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z"/>\n</svg>':'<svg fill="#6E8192" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">\n    <path d="M0 0h24v24H0z" fill="none"/>\n    <path d="M3 5h2V3c-1.1 0-2 .9-2 2zm0 8h2v-2H3v2zm4 8h2v-2H7v2zM3 9h2V7H3v2zm10-6h-2v2h2V3zm6 0v2h2c0-1.1-.9-2-2-2zM5 21v-2H3c0 1.1.9 2 2 2zm-2-4h2v-2H3v2zM9 3H7v2h2V3zm2 18h2v-2h-2v2zm8-8h2v-2h-2v2zm0 8c1.1 0 2-.9 2-2h-2v2zm0-12h2V7h-2v2zm0 8h2v-2h-2v2zm-4 4h2v-2h-2v2zm0-16h2V3h-2v2z"/>\n</svg>', title:t.localeValues["zoom"===i?"selectionZoom":"selection"], class:e.globals.isTouchDevice?"apexcharts-element-hidden":"apexcharts-".concat(i, "-icon");
}
);
};
    r("zoom"), r("selection"), this.t.pan&&e.config.chart.zoom.enabled&&n.push( {
    el: this.elPan, icon:"string"==typeof this.t.pan?this.t.pan:'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000" height="24" viewBox="0 0 24 24" width="24">\n    <defs>\n        <path d="M0 0h24v24H0z" id="a"/>\n    </defs>\n    <clipPath id="b">\n        <use overflow="visible" xlink:href="#a"/>\n    </clipPath>\n    <path clip-path="url(#b)" d="M23 5.5V20c0 2.2-1.8 4-4 4h-7.3c-1.08 0-2.1-.43-2.85-1.19L1 14.83s1.26-1.23 1.3-1.25c.22-.19.49-.29.79-.29.22 0 .42.06.6.16.04.01 4.31 2.46 4.31 2.46V4c0-.83.67-1.5 1.5-1.5S11 3.17 11 4v7h1V1.5c0-.83.67-1.5 1.5-1.5S15 .67 15 1.5V11h1V2.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V11h1V5.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5z"/>\n</svg>', title:this.localeValues.pan, class:e.globals.isTouchDevice?"apexcharts-element-hidden":"apexcharts-pan-icon"}
), o("reset", this.elZoomReset, '<svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">\n    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>\n    <path d="M0 0h24v24H0z" fill="none"/>\n</svg>'), this.t.download&&n.push( {
    el: this.elMenuIcon, icon:"string"==typeof this.t.download?this.t.download:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>', title:this.localeValues.menu, class:"apexcharts-menu-icon"}
);
    for(var l=0;
    l<this.elCustomIcons.length;
    l++)n.push( {
    el: this.elCustomIcons[l], icon:this.t.customIcons[l].icon, title:this.t.customIcons[l].title, index:this.t.customIcons[l].index, class:"apexcharts-toolbar-custom-icon "+this.t.customIcons[l].class;
}
);
    n.forEach((function(t, e) {
    t.index&&cs.moveIndexInArray(n, e, t.index);
}
));
    for(var c=0;
    c<n.length;
    c++)us.setAttrs(n[c].el,  {
    class: n[c].class, title:n[c].title;
}
), n[c].el.innerHTML=n[c].icon, a.appendChild(n[c].el);
    this._createHamburgerMenu(a), e.globals.zoomEnabled?this.elZoom.classList.add(this.selectedClass): e.globals.panEnabled?this.elPan.classList.add(this.selectedClass):e.globals.selectionEnabled&&this.elSelection.classList.add(this.selectedClass), this.addToolbarEventListeners();
}
},  {
    key: "_createHamburgerMenu", value:function(t) {
    this.elMenuItems=[], t.appendChild(this.elMenu), us.setAttrs(this.elMenu,  {
    class: "apexcharts-menu"}
);
    var e=[ {
    name: "exportSVG", title:this.localeValues.exportToSVG;
}
,  {
    name: "exportPNG", title:this.localeValues.exportToPNG;
}
,  {
    name: "exportCSV", title:this.localeValues.exportToCSV;
}
];
    this.w.globals.allSeriesHasEqualX||e.splice(2, 1);
    for(var i=0;
    i<e.length;
    i++)this.elMenuItems.push(document.createElement("div")), this.elMenuItems[i].innerHTML=e[i].title, us.setAttrs(this.elMenuItems[i],  {
    class: "apexcharts-menu-item ".concat(e[i].name), title:e[i].title;
}
), this.elMenu.appendChild(this.elMenuItems[i]);
}},  {
    key: "addToolbarEventListeners", value:function() {
    var t=this;
    this.elZoomReset.addEventListener("click", this.handleZoomReset.bind(this)), this.elSelection.addEventListener("click", this.toggleZoomSelection.bind(this, "selection")), this.elZoom.addEventListener("click", this.toggleZoomSelection.bind(this, "zoom")), this.elZoomIn.addEventListener("click", this.handleZoomIn.bind(this)), this.elZoomOut.addEventListener("click", this.handleZoomOut.bind(this)), this.elPan.addEventListener("click", this.togglePanning.bind(this)), this.elMenuIcon.addEventListener("click", this.toggleMenu.bind(this)), this.elMenuItems.forEach((function(e) {
    e.classList.contains("exportSVG")?e.addEventListener("click", t.handleDownload.bind(t, "svg")): e.classList.contains("exportPNG")?e.addEventListener("click", t.handleDownload.bind(t, "png")):e.classList.contains("exportCSV")&&e.addEventListener("click", t.handleDownload.bind(t, "csv"));
}
));
    for(var e=0;
    e<this.t.customIcons.length;
    e++)this.elCustomIcons[e].addEventListener("click", this.t.customIcons[e].click.bind(this, this.ctx, this.ctx.w));
}
},  {
    key: "toggleZoomSelection", value:function(t) {
    this.ctx.getSyncedCharts().forEach((function(e) {
    e.ctx.toolbar.toggleOtherControls();
    var i="selection"===t?e.ctx.toolbar.elSelection: e.ctx.toolbar.elZoom, a="selection"===t?"selectionEnabled":"zoomEnabled";
    e.w.globals[a]=!e.w.globals[a], i.classList.contains(e.ctx.toolbar.selectedClass)?i.classList.remove(e.ctx.toolbar.selectedClass): i.classList.add(e.ctx.toolbar.selectedClass);
}
));
}},  {
    key: "getToolbarIconsReference", value:function() {
    var t=this.w;
    this.elZoom||(this.elZoom=t.globals.dom.baseEl.querySelector(".apexcharts-zoom-icon")), this.elPan||(this.elPan=t.globals.dom.baseEl.querySelector(".apexcharts-pan-icon")), this.elSelection||(this.elSelection=t.globals.dom.baseEl.querySelector(".apexcharts-selection-icon"));
}
},  {
    key: "enableZoomPanFromToolbar", value:function(t) {
    this.toggleOtherControls(), "pan"===t?this.w.globals.panEnabled=!0: this.w.globals.zoomEnabled=!0;
    var e="pan"===t?this.elPan: this.elZoom, i="pan"===t?this.elZoom:this.elPan;
    e&&e.classList.add(this.selectedClass), i&&i.classList.remove(this.selectedClass);
}
},  {
    key: "togglePanning", value:function() {
    this.ctx.getSyncedCharts().forEach((function(t) {
    t.ctx.toolbar.toggleOtherControls(), t.w.globals.panEnabled=!t.w.globals.panEnabled, t.ctx.toolbar.elPan.classList.contains(t.ctx.toolbar.selectedClass)?t.ctx.toolbar.elPan.classList.remove(t.ctx.toolbar.selectedClass): t.ctx.toolbar.elPan.classList.add(t.ctx.toolbar.selectedClass);
}
));
}},  {
    key: "toggleOtherControls", value:function() {
    var t=this, e=this.w;
    e.globals.panEnabled=!1, e.globals.zoomEnabled=!1, e.globals.selectionEnabled=!1, this.getToolbarIconsReference(), [this.elPan, this.elSelection, this.elZoom].forEach((function(e) {
    e&&e.classList.remove(t.selectedClass);
}
));
}},  {
    key: "handleZoomIn", value:function() {
    var t=this.w;
    t.globals.isRangeBar&&(this.minX=t.globals.minY, this.maxX=t.globals.maxY);
    var e=(this.minX+this.maxX)/2, i=(this.minX+e)/2, a=(this.maxX+e)/2, s=this._getNewMinXMaxX(i, a);
    t.globals.disableZoomIn||this.zoomUpdateOptions(s.minX, s.maxX);
}
},  {
    key: "handleZoomOut", value:function() {
    var t=this.w;
    if(t.globals.isRangeBar&&(this.minX=t.globals.minY, this.maxX=t.globals.maxY), !("datetime"===t.config.xaxis.type&&new Date(this.minX).getUTCFullYear()<1e3)) {
    var e=(this.minX+this.maxX)/2, i=this.minX-(e-this.minX), a=this.maxX-(e-this.maxX), s=this._getNewMinXMaxX(i, a);
    t.globals.disableZoomOut||this.zoomUpdateOptions(s.minX, s.maxX);
}
}},  {
    key: "_getNewMinXMaxX", value:function(t, e) {
    var i=this.w.config.xaxis.convertedCatToNumeric;
    return {
    minX: i?Math.floor(t):t, maxX:i?Math.floor(e):e;
}
}},  {
    key: "zoomUpdateOptions", value:function(t, e) {
    var i=this.w;
    if(void 0!==t||void 0!==e) {
    if(!(i.config.xaxis.convertedCatToNumeric&&(t<1&&(t=1, e=i.globals.dataPoints), e-t<2))) {
    var a= {
    min: t, max:e;
}
, s=this.getBeforeZoomRange(a);
    s&&(a=s.xaxis);
    var n= {
    xaxis: a;
}
, o=cs.clone(i.globals.initialConfig.yaxis);
    i.config.chart.zoom.autoScaleYaxis&&(o=new Rs(this.ctx).autoScaleY(this.ctx, o,  {
    xaxis: a;
}
)), i.config.chart.group||(n.yaxis=o), this.w.globals.zoomed=!0, this.ctx.updateHelpers._updateOptions(n, !1, this.w.config.chart.animations.dynamicAnimation.enabled), this.zoomCallback(a, o);
}}else this.handleZoomReset();
}},  {
    key: "zoomCallback", value:function(t, e) {
    "function"==typeof this.ev.zoomed&&this.ev.zoomed(this.ctx,  {
    xaxis: t, yaxis:e;
}
);
}},  {
    key: "getBeforeZoomRange", value:function(t, e) {
    var i=null;
    return"function"==typeof this.ev.beforeZoom&&(i=this.ev.beforeZoom(this,  {
    xaxis: t, yaxis:e;
}
)), i;
}},  {
    key: "toggleMenu", value:function() {
    var t=this;
    window.setTimeout((function() {
    t.elMenu.classList.contains("apexcharts-menu-open")?t.elMenu.classList.remove("apexcharts-menu-open"): t.elMenu.classList.add("apexcharts-menu-open");
}
), 0);
}},  {
    key: "handleDownload", value:function(t) {
    var e=this.w, i=new Fs(this.ctx);
    switch(t) {
    case"svg": i.exportToSVG(this.ctx);
    break;
    case"png": i.exportToPng(this.ctx);
    break;
    case"csv": i.exportToCSV( {
    series: e.config.series, columnDelimiter:e.config.chart.toolbar.export.csv.columnDelimiter;
}
);
}}},  {
    key: "handleZoomReset", value:function(t) {
    this.ctx.getSyncedCharts().forEach((function(t) {
    var e=t.w;
    if(e.globals.lastXAxis.min=void 0, e.globals.lastXAxis.max=void 0, t.updateHelpers.revertDefaultAxisMinMax(), "function"==typeof e.config.chart.events.beforeResetZoom) {
    var i=e.config.chart.events.beforeResetZoom(t, e);
    i&&t.updateHelpers.revertDefaultAxisMinMax(i);
}
"function"==typeof e.config.chart.events.zoomed&&t.ctx.toolbar.zoomCallback( {
    min: e.config.xaxis.min, max:e.config.xaxis.max;
}
), e.globals.zoomed=!1;
    var a=t.ctx.series.emptyCollapsedSeries(cs.clone(e.globals.initialSeries));
    t.updateHelpers._updateSeries(a, e.config.chart.animations.dynamicAnimation.enabled);
}
));
}},  {
    key: "destroy", value:function() {
    this.elZoom=null, this.elZoomIn=null, this.elZoomOut=null, this.elPan=null, this.elSelection=null, this.elZoomReset=null, this.elMenuIcon=null;
}
}]), t;
}(), on=function(t) {
    is(i, nn);
    var e=os(i);
    function i(t) {
    var a;
    return Ja(this, i), (a=e.call(this, t)).ctx=t, a.w=t.w, a.dragged=!1, a.graphics=new us(a.ctx), a.eventList=["mousedown", "mouseleave", "mousemove", "touchstart", "touchmove", "mouseup", "touchend"], a.clientX=0, a.clientY=0, a.startX=0, a.endX=0, a.dragX=0, a.startY=0, a.endY=0, a.dragY=0, a.moveDirection="none", a;
}
return ts(i, [ {
    key: "init", value:function(t) {
    var e=this, i=t.xyRatios, a=this.w, s=this;
    this.xyRatios=i, this.zoomRect=this.graphics.drawRect(0, 0, 0, 0), this.selectionRect=this.graphics.drawRect(0, 0, 0, 0), this.gridRect=a.globals.dom.baseEl.querySelector(".apexcharts-grid"), this.zoomRect.node.classList.add("apexcharts-zoom-rect"), this.selectionRect.node.classList.add("apexcharts-selection-rect"), a.globals.dom.elGraphical.add(this.zoomRect), a.globals.dom.elGraphical.add(this.selectionRect), "x"===a.config.chart.selection.type?this.slDraggableRect=this.selectionRect.draggable( {
    minX: 0, minY:0, maxX:a.globals.gridWidth, maxY:a.globals.gridHeight;
}
).on("dragmove", this.selectionDragging.bind(this, "dragging")):"y"===a.config.chart.selection.type?this.slDraggableRect=this.selectionRect.draggable( {
    minX: 0, maxX:a.globals.gridWidth;
}
).on("dragmove", this.selectionDragging.bind(this, "dragging")):this.slDraggableRect=this.selectionRect.draggable().on("dragmove", this.selectionDragging.bind(this, "dragging")), this.preselectedSelection(), this.hoverArea=a.globals.dom.baseEl.querySelector("".concat(a.globals.chartClass, " .apexcharts-svg")), this.hoverArea.classList.add("apexcharts-zoomable"), this.eventList.forEach((function(t) {
    e.hoverArea.addEventListener(t, s.svgMouseEvents.bind(s, i),  {
    capture: !1, passive:!0;
}
);
}));
}},  {
    key: "destroy", value:function() {
    this.slDraggableRect&&(this.slDraggableRect.draggable(!1), this.slDraggableRect.off(), this.selectionRect.off()), this.selectionRect=null, this.zoomRect=null, this.gridRect=null;
}
},  {
    key: "svgMouseEvents", value:function(t, e) {
    var i=this.w, a=this, s=this.ctx.toolbar, n=i.globals.zoomEnabled?i.config.chart.zoom.type: i.config.chart.selection.type, o=i.config.chart.toolbar.autoSelected;
    if(e.shiftKey?(this.shiftWasPressed=!0, s.enableZoomPanFromToolbar("pan"===o?"zoom": "pan")):this.shiftWasPressed&&(s.enableZoomPanFromToolbar(o), this.shiftWasPressed=!1), e.target) {
    var r, l=e.target.classList;
    if(e.target.parentNode&&null!==e.target.parentNode&&(r=e.target.parentNode.classList), !(l.contains("apexcharts-selection-rect")||l.contains("apexcharts-legend-marker")||l.contains("apexcharts-legend-text")||r&&r.contains("apexcharts-toolbar"))) {
    if(a.clientX="touchmove"===e.type||"touchstart"===e.type?e.touches[0].clientX: "touchend"===e.type?e.changedTouches[0].clientX:e.clientX, a.clientY="touchmove"===e.type||"touchstart"===e.type?e.touches[0].clientY:"touchend"===e.type?e.changedTouches[0].clientY:e.clientY, "mousedown"===e.type&&1===e.which) {
    var c=a.gridRect.getBoundingClientRect();
    a.startX=a.clientX-c.left, a.startY=a.clientY-c.top, a.dragged=!1, a.w.globals.mousedown=!0;
}
if(("mousemove"===e.type&&1===e.which||"touchmove"===e.type)&&(a.dragged=!0, i.globals.panEnabled?(i.globals.selection=null, a.w.globals.mousedown&&a.panDragging( {
    context: a, zoomtype:n, xyRatios:t;
}
)):(a.w.globals.mousedown&&i.globals.zoomEnabled||a.w.globals.mousedown&&i.globals.selectionEnabled)&&(a.selection=a.selectionDrawing( {
    context: a, zoomtype:n;
}
))), "mouseup"===e.type||"touchend"===e.type||"mouseleave"===e.type) {
    var h=a.gridRect.getBoundingClientRect();
    a.w.globals.mousedown&&(a.endX=a.clientX-h.left, a.endY=a.clientY-h.top, a.dragX=Math.abs(a.endX-a.startX), a.dragY=Math.abs(a.endY-a.startY), (i.globals.zoomEnabled||i.globals.selectionEnabled)&&a.selectionDrawn( {
    context: a, zoomtype:n;
}
), i.globals.panEnabled&&i.config.xaxis.convertedCatToNumeric&&a.delayedPanScrolled()), i.globals.zoomEnabled&&a.hideSelectionRect(this.selectionRect), a.dragged=!1, a.w.globals.mousedown=!1;
}this.makeSelectionRectDraggable();
}}}},  {
    key: "makeSelectionRectDraggable", value:function() {
    var t=this.w;
    if(this.selectionRect) {
    var e=this.selectionRect.node.getBoundingClientRect();
    e.width>0&&e.height>0&&this.slDraggableRect.selectize( {
    points: "l,  r", pointSize:8, pointType:"rect"}
).resize( {
    constraint:  {
    minX: 0, minY:0, maxX:t.globals.gridWidth, maxY:t.globals.gridHeight;
}
}).on("resizing", this.selectionDragging.bind(this, "resizing"));
}}},  {
    key: "preselectedSelection", value:function() {
    var t=this.w, e=this.xyRatios;
    if(!t.globals.zoomEnabled)if(void 0!==t.globals.selection&&null!==t.globals.selection)this.drawSelectionRect(t.globals.selection);
    else if(void 0!==t.config.chart.selection.xaxis.min&&void 0!==t.config.chart.selection.xaxis.max) {
    var i=(t.config.chart.selection.xaxis.min-t.globals.minX)/e.xRatio, a= {
    x: i, y:0, width:t.globals.gridWidth-(t.globals.maxX-t.config.chart.selection.xaxis.max)/e.xRatio-i, height:t.globals.gridHeight, translateX:0, translateY:0, selectionEnabled:!0;
}
;
    this.drawSelectionRect(a), this.makeSelectionRectDraggable(), "function"==typeof t.config.chart.events.selection&&t.config.chart.events.selection(this.ctx,  {
    xaxis:  {
    min: t.config.chart.selection.xaxis.min, max:t.config.chart.selection.xaxis.max;
}
, yaxis: {
}
}
);
}}},  {
    key: "drawSelectionRect", value:function(t) {
    var e=t.x, i=t.y, a=t.width, s=t.height, n=t.translateX, o=void 0===n?0: n, r=t.translateY, l=void 0===r?0:r, c=this.w, h=this.zoomRect, d=this.selectionRect;
    if(this.dragged||null!==c.globals.selection) {
    var u= {
    transform: "translate("+o+",  "+l+")"}
;
    c.globals.zoomEnabled&&this.dragged&&(a<0&&(a=1), h.attr( {
    x: e, y:i, width:a, height:s, fill:c.config.chart.zoom.zoomedArea.fill.color, "fill-opacity":c.config.chart.zoom.zoomedArea.fill.opacity, stroke:c.config.chart.zoom.zoomedArea.stroke.color, "stroke-width":c.config.chart.zoom.zoomedArea.stroke.width, "stroke-opacity":c.config.chart.zoom.zoomedArea.stroke.opacity;
}
), us.setAttrs(h.node, u)), c.globals.selectionEnabled&&(d.attr( {
    x: e, y:i, width:a>0?a:0, height:s>0?s:0, fill:c.config.chart.selection.fill.color, "fill-opacity":c.config.chart.selection.fill.opacity, stroke:c.config.chart.selection.stroke.color, "stroke-width":c.config.chart.selection.stroke.width, "stroke-dasharray":c.config.chart.selection.stroke.dashArray, "stroke-opacity":c.config.chart.selection.stroke.opacity;
}
), us.setAttrs(d.node, u));
}}},  {
    key: "hideSelectionRect", value:function(t) {
    t&&t.attr( {
    x: 0, y:0, width:0, height:0;
}
);
}},  {
    key: "selectionDrawing", value:function(t) {
    var e, i=t.context, a=t.zoomtype, s=this.w, n=i, o=this.gridRect.getBoundingClientRect(), r=n.startX-1, l=n.startY, c=!1, h=!1, d=n.clientX-o.left-r, u=n.clientY-o.top-l;
    return Math.abs(d+r)>s.globals.gridWidth?d=s.globals.gridWidth-r: n.clientX-o.left<0&&(d=r), r>n.clientX-o.left&&(c=!0, d=Math.abs(d)), l>n.clientY-o.top&&(h=!0, u=Math.abs(u)), e="x"===a? {
    x: c?r-d:r, y:0, width:d, height:s.globals.gridHeight;
}
:"y"===a? {
    x: 0, y:h?l-u:l, width:s.globals.gridWidth, height:u;
}
: {
    x: c?r-d:r, y:h?l-u:l, width:d, height:u;
}
, n.drawSelectionRect(e), n.selectionDragging("resizing"), e;
}},  {
    key: "selectionDragging", value:function(t, e) {
    var i=this, a=this.w, s=this.xyRatios, n=this.selectionRect, o=0;
    "resizing"===t&&(o=30);
    var r=function(t) {
    return parseFloat(n.node.getAttribute(t));
}
, l= {
    x: r("x"), y:r("y"), width:r("width"), height:r("height");
}
;
    a.globals.selection=l, "function"==typeof a.config.chart.events.selection&&a.globals.selectionEnabled&&(clearTimeout(this.w.globals.selectionResizeTimer), this.w.globals.selectionResizeTimer=window.setTimeout((function() {
    var t=i.gridRect.getBoundingClientRect(), e=n.node.getBoundingClientRect(), o= {
    xaxis:  {
    min: a.globals.xAxisScale.niceMin+(e.left-t.left)*s.xRatio, max:a.globals.xAxisScale.niceMin+(e.right-t.left)*s.xRatio;
}
, yaxis: {
    min: a.globals.yAxisScale[0].niceMin+(t.bottom-e.bottom)*s.yRatio[0], max:a.globals.yAxisScale[0].niceMax-(e.top-t.top)*s.yRatio[0];
}
};
    a.config.chart.events.selection(i.ctx, o), a.config.chart.brush.enabled&&void 0!==a.config.chart.events.brushScrolled&&a.config.chart.events.brushScrolled(i.ctx, o);
}
), o));
}},  {
    key: "selectionDrawn", value:function(t) {
    var e=t.context, i=t.zoomtype, a=this.w, s=e, n=this.xyRatios, o=this.ctx.toolbar;
    if(s.startX>s.endX) {
    var r=s.startX;
    s.startX=s.endX, s.endX=r;
}
if(s.startY>s.endY) {
    var l=s.startY;
    s.startY=s.endY, s.endY=l;
}
var c=void 0, h=void 0;
    a.globals.isRangeBar?(c=a.globals.yAxisScale[0].niceMin+s.startX*n.invertedYRatio, h=a.globals.yAxisScale[0].niceMin+s.endX*n.invertedYRatio): (c=a.globals.xAxisScale.niceMin+s.startX*n.xRatio, h=a.globals.xAxisScale.niceMin+s.endX*n.xRatio);
    var d=[], u=[];
    if(a.config.yaxis.forEach((function(t, e) {
    d.push(a.globals.yAxisScale[e].niceMax-n.yRatio[e]*s.startY), u.push(a.globals.yAxisScale[e].niceMax-n.yRatio[e]*s.endY);
}
)), s.dragged&&(s.dragX>10||s.dragY>10)&&c!==h)if(a.globals.zoomEnabled) {
    var g=cs.clone(a.globals.initialConfig.yaxis), f=cs.clone(a.globals.initialConfig.xaxis);
    if(a.globals.zoomed=!0, a.config.xaxis.convertedCatToNumeric&&(c=Math.floor(c), h=Math.floor(h), c<1&&(c=1, h=a.globals.dataPoints), h-c<2&&(h=c+1)), "xy"!==i&&"x"!==i||(f= {
    min: c, max:h;
}
), "xy"!==i&&"y"!==i||g.forEach((function(t, e) {
    g[e].min=u[e], g[e].max=d[e];
}
)), a.config.chart.zoom.autoScaleYaxis) {
    var p=new Rs(s.ctx);
    g=p.autoScaleY(s.ctx, g,  {
    xaxis: f;
}
);
}if(o) {
    var x=o.getBeforeZoomRange(f, g);
    x&&(f=x.xaxis?x.xaxis: f, g=x.yaxis?x.yaxis:g);
}
var m= {
    xaxis: f;
}
;
    a.config.chart.group||(m.yaxis=g), s.ctx.updateHelpers._updateOptions(m, !1, s.w.config.chart.animations.dynamicAnimation.enabled), "function"==typeof a.config.chart.events.zoomed&&o.zoomCallback(f, g);
}
else if(a.globals.selectionEnabled) {
    var b, v=null;
    b= {
    min: c, max:h;
}
, "xy"!==i&&"y"!==i||(v=cs.clone(a.config.yaxis)).forEach((function(t, e) {
    v[e].min=u[e], v[e].max=d[e];
}
)), a.globals.selection=s.selection, "function"==typeof a.config.chart.events.selection&&a.config.chart.events.selection(s.ctx,  {
    xaxis: b, yaxis:v;
}
);
}}},  {
    key: "panDragging", value:function(t) {
    var e=t.context, i=this.w, a=e;
    if(void 0!==i.globals.lastClientPosition.x) {
    var s=i.globals.lastClientPosition.x-a.clientX, n=i.globals.lastClientPosition.y-a.clientY;
    Math.abs(s)>Math.abs(n)&&s>0?this.moveDirection="left": Math.abs(s)>Math.abs(n)&&s<0?this.moveDirection="right":Math.abs(n)>Math.abs(s)&&n>0?this.moveDirection="up":Math.abs(n)>Math.abs(s)&&n<0&&(this.moveDirection="down");
}
i.globals.lastClientPosition= {
    x: a.clientX, y:a.clientY;
}
;
    var o=i.globals.isRangeBar?i.globals.minY: i.globals.minX, r=i.globals.isRangeBar?i.globals.maxY:i.globals.maxX;
    i.config.xaxis.convertedCatToNumeric||a.panScrolled(o, r);
}
},  {
    key: "delayedPanScrolled", value:function() {
    var t=this.w, e=t.globals.minX, i=t.globals.maxX, a=(t.globals.maxX-t.globals.minX)/2;
    "left"===this.moveDirection?(e=t.globals.minX+a, i=t.globals.maxX+a): "right"===this.moveDirection&&(e=t.globals.minX-a, i=t.globals.maxX-a), e=Math.floor(e), i=Math.floor(i), this.updateScrolledChart( {
    xaxis:  {
    min: e, max:i;
}
}, e, i);
}},  {
    key: "panScrolled", value:function(t, e) {
    var i=this.w, a=this.xyRatios, s=cs.clone(i.globals.initialConfig.yaxis), n=a.xRatio, o=i.globals.minX, r=i.globals.maxX;
    i.globals.isRangeBar&&(n=a.invertedYRatio, o=i.globals.minY, r=i.globals.maxY), "left"===this.moveDirection?(t=o+i.globals.gridWidth/15*n, e=r+i.globals.gridWidth/15*n): "right"===this.moveDirection&&(t=o-i.globals.gridWidth/15*n, e=r-i.globals.gridWidth/15*n), i.globals.isRangeBar||(t<i.globals.initialMinX||e>i.globals.initialMaxX)&&(t=o, e=r);
    var l= {
    min: t, max:e;
}
;
    i.config.chart.zoom.autoScaleYaxis&&(s=new Rs(this.ctx).autoScaleY(this.ctx, s,  {
    xaxis: l;
}
));
    var c= {
    xaxis:  {
    min: t, max:e;
}
};
    i.config.chart.group||(c.yaxis=s), this.updateScrolledChart(c, t, e);
}
},  {
    key: "updateScrolledChart", value:function(t, e, i) {
    var a=this.w;
    this.ctx.updateHelpers._updateOptions(t, !1, !1), "function"==typeof a.config.chart.events.scrolled&&a.config.chart.events.scrolled(this.ctx,  {
    xaxis:  {
    min: e, max:i;
}
});
}}]), i;
}(), rn=function() {
    function t(e) {
    Ja(this, t), this.w=e.w, this.ttCtx=e, this.ctx=e.ctx;
}
return ts(t, [ {
    key: "getNearestValues", value:function(t) {
    var e=t.hoverArea, i=t.elGrid, a=t.clientX, s=t.clientY, n=this.w, o=i.getBoundingClientRect(), r=o.width, l=o.height, c=r/(n.globals.dataPoints-1), h=l/n.globals.dataPoints, d=this.hasBars();
    !n.globals.comboCharts&&!d||n.config.xaxis.convertedCatToNumeric||(c=r/n.globals.dataPoints);
    var u=a-o.left-n.globals.barPadForNumericAxis, g=s-o.top;
    u<0||g<0||u>r||g>l?(e.classList.remove("hovering-zoom"), e.classList.remove("hovering-pan")): n.globals.zoomEnabled?(e.classList.remove("hovering-pan"), e.classList.add("hovering-zoom")):n.globals.panEnabled&&(e.classList.remove("hovering-zoom"), e.classList.add("hovering-pan"));
    var f=Math.round(u/c), p=Math.floor(g/h);
    d&&!n.config.xaxis.convertedCatToNumeric&&(f=Math.ceil(u/c), f-=1);
    for(var x, m=null, b=null, v=[], y=0;
    y<n.globals.seriesXvalues.length;
    y++)v.push([n.globals.seriesXvalues[y][0]-1e-6].concat(n.globals.seriesXvalues[y]));
    if(v=v.map((function(t) {
    return t.filter((function(t) {
    return t;
}
));
})), x=n.globals.seriesYvalues.map((function(t) {
    return t.filter((function(t) {
    return cs.isNumber(t);
}
));
})), n.globals.isXNumeric) {
    var w=this.ttCtx.getElGrid().getBoundingClientRect(), k=u*(w.width/r), A=g*(w.height/l);
    m=(b=this.closestInMultiArray(k, A, v, x)).index, f=b.j, null!==m&&(v=n.globals.seriesXvalues[m], f=(b=this.closestInArray(k, v)).index);
}
return n.globals.capturedSeriesIndex=null===m?-1: m, (!f||f<1)&&(f=0), n.globals.isBarHorizontal?n.globals.capturedDataPointIndex=p:n.globals.capturedDataPointIndex=f,  {
    capturedSeries: m, j:n.globals.isBarHorizontal?p:f, hoverX:u, hoverY:g;
}
}},  {
    key: "closestInMultiArray", value:function(t, e, i, a) {
    var s=this.w, n=0, o=null, r=-1;
    s.globals.series.length>1?n=this.getFirstActiveXArray(i): o=0;
    var l=a[n][0], c=i[n][0], h=Math.abs(t-c), d=Math.abs(e-l), u=d+h;
    return a.map((function(s, n) {
    s.map((function(s, l) {
    var c=Math.abs(e-a[n][l]), g=Math.abs(t-i[n][l]), f=g+c;
    f<u&&(u=f, h=g, d=c, o=n, r=l);
}
));
})),  {
    index: o, j:r;
}
}},  {
    key: "getFirstActiveXArray", value:function(t) {
    for(var e=this.w, i=0, a=t.map((function(t, e) {
    return t.length>0?e: -1;
}
)), s=0;
    s<a.length;
    s++)if(-1!==a[s]&&-1===e.globals.collapsedSeriesIndices.indexOf(s)&&-1===e.globals.ancillaryCollapsedSeriesIndices.indexOf(s)) {
    i=a[s];
    break;
}
return i;
}},  {
    key: "closestInArray", value:function(t, e) {
    for(var i=e[0], a=null, s=Math.abs(t-i), n=0;
    n<e.length;
    n++) {
    var o=Math.abs(t-e[n]);
    o<s&&(s=o, a=n);
}
return {
    index: a;
}
}},  {
    key: "isXoverlap", value:function(t) {
    var e=[], i=this.w.globals.seriesX.filter((function(t) {
    return void 0!==t[0];
}
));
    if(i.length>0)for(var a=0;
    a<i.length-1;
    a++)void 0!==i[a][t]&&void 0!==i[a+1][t]&&i[a][t]!==i[a+1][t]&&e.push("unEqual");
    return 0===e.length;
}
},  {
    key: "isInitialSeriesSameLen", value:function() {
    for(var t=!0, e=this.w.globals.initialSeries, i=0;
    i<e.length-1;
    i++)if(e[i].data.length!==e[i+1].data.length) {
    t=!1;
    break;
}
return t;
}},  {
    key: "getBarsHeight", value:function(t) {
    return rs(t).reduce((function(t, e) {
    return t+e.getBBox().height;
}
), 0);
}},  {
    key: "getElMarkers", value:function() {
    return this.w.globals.dom.baseEl.querySelectorAll(" .apexcharts-series-markers");
}
},  {
    key: "getAllMarkers", value:function() {
    var t=this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-series-markers-wrap");
    (t=rs(t)).sort((function(t, e) {
    return Number(e.getAttribute("data: realIndex"))<Number(t.getAttribute("data:realIndex"))?0:-1;
}
));
    var e=[];
    return t.forEach((function(t) {
    e.push(t.querySelector(".apexcharts-marker"));
}
)), e;
}},  {
    key: "hasMarkers", value:function() {
    return this.getElMarkers().length>0;
}
},  {
    key: "getElBars", value:function() {
    return this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-bar-series,   .apexcharts-candlestick-series,  .apexcharts-boxPlot-series,  .apexcharts-rangebar-series");
}
},  {
    key: "hasBars", value:function() {
    return this.getElBars().length>0;
}
},  {
    key: "getHoverMarkerSize", value:function(t) {
    var e=this.w, i=e.config.markers.hover.size;
    return void 0===i&&(i=e.globals.markers.size[t]+e.config.markers.hover.sizeOffset), i;
}
},  {
    key: "toggleAllTooltipSeriesGroups", value:function(t) {
    var e=this.w, i=this.ttCtx;
    0===i.allTooltipSeriesGroups.length&&(i.allTooltipSeriesGroups=e.globals.dom.baseEl.querySelectorAll(".apexcharts-tooltip-series-group"));
    for(var a=i.allTooltipSeriesGroups, s=0;
    s<a.length;
    s++)"enable"===t?(a[s].classList.add("apexcharts-active"), a[s].style.display=e.config.tooltip.items.display): (a[s].classList.remove("apexcharts-active"), a[s].style.display="none");
}
}]), t;
}(), ln=function() {
    function t(e) {
    Ja(this, t), this.w=e.w, this.ctx=e.ctx, this.ttCtx=e, this.tooltipUtil=new rn(e);
}
return ts(t, [ {
    key: "drawSeriesTexts", value:function(t) {
    var e=t.shared, i=void 0===e||e, a=t.ttItems, s=t.i, n=void 0===s?0: s, o=t.j, r=void 0===o?null:o, l=t.y1, c=t.y2, h=t.e, d=this.w;
    void 0!==d.config.tooltip.custom?this.handleCustomTooltip( {
    i: n, j:r, y1:l, y2:c, w:d;
}
):this.toggleActiveInactiveSeries(i);
    var u=this.getValuesToPrint( {
    i: n, j:r;
}
);
    this.printLabels( {
    i: n, j:r, values:u, ttItems:a, shared:i, e:h;
}
);
    var g=this.ttCtx.getElTooltip();
    this.ttCtx.tooltipRect.ttWidth=g.getBoundingClientRect().width, this.ttCtx.tooltipRect.ttHeight=g.getBoundingClientRect().height;
}
},  {
    key: "printLabels", value:function(t) {
    var e, i=this, a=t.i, s=t.j, n=t.values, o=t.ttItems, r=t.shared, l=t.e, c=this.w, h=[], d=function(t) {
    return c.globals.seriesGoals[t]&&c.globals.seriesGoals[t][s]&&Array.isArray(c.globals.seriesGoals[t][s]);
}
, u=n.xVal, g=n.zVal, f=n.xAxisTTVal, p="", x=c.globals.colors[a];
    null!==s&&c.config.plotOptions.bar.distributed&&(x=c.globals.colors[s]);
    for(var m=function(t, n) {
    var m=i.getFormatters(a);
    p=i.getSeriesName( {
    fn: m.yLbTitleFormatter, index:a, seriesIndex:a, j:s;
}
), "treemap"===c.config.chart.type&&(p=m.yLbTitleFormatter(String(c.config.series[a].data[s].x),  {
    series: c.globals.series, seriesIndex:a, dataPointIndex:s, w:c;
}
));
    var b=c.config.tooltip.inverseOrder?n: t;
    if(c.globals.axisCharts) {
    var v=function(t) {
    return m.yLbFormatter(c.globals.series[t][s],  {
    series: c.globals.series, seriesIndex:t, dataPointIndex:s, w:c;
}
);
};
    r?(m=i.getFormatters(b), p=i.getSeriesName( {
    fn: m.yLbTitleFormatter, index:b, seriesIndex:a, j:s;
}
), x=c.globals.colors[b], e=v(b), d(b)&&(h=c.globals.seriesGoals[b][s].map((function(t) {
    return {
    attrs: t, val:m.yLbFormatter(t.value,  {
    seriesIndex: b, dataPointIndex:s, w:c;
}
);
}})))):(l&&l.target&&l.target.getAttribute("fill")&&(x=l.target.getAttribute("fill")), e=v(a), d(a)&&Array.isArray(c.globals.seriesGoals[a][s])&&(h=c.globals.seriesGoals[a][s].map((function(t) {
    return {
    attrs: t, val:m.yLbFormatter(t.value,  {
    seriesIndex: a, dataPointIndex:s, w:c;
}
);
}}))));
}null===s&&(e=m.yLbFormatter(c.globals.series[a], Za(Za( {
}
, c),  {
}
,  {
    seriesIndex: a, dataPointIndex:a;
}
))), i.DOMHandling( {
    i: a, t:b, j:s, ttItems:o, values: {
    val: e, goalVals:h, xVal:u, xAxisTTVal:f, zVal:g;
}
, seriesName:p, shared:r, pColor:x;
});
}, b=0, v=c.globals.series.length-1;
    b<c.globals.series.length;
    b++, v--)m(b, v);
}
},  {
    key: "getFormatters", value:function(t) {
    var e, i=this.w, a=i.globals.yLabelFormatters[t];
    return void 0!==i.globals.ttVal?Array.isArray(i.globals.ttVal)?(a=i.globals.ttVal[t]&&i.globals.ttVal[t].formatter, e=i.globals.ttVal[t]&&i.globals.ttVal[t].title&&i.globals.ttVal[t].title.formatter): (a=i.globals.ttVal.formatter, "function"==typeof i.globals.ttVal.title.formatter&&(e=i.globals.ttVal.title.formatter)):e=i.config.tooltip.y.title.formatter, "function"!=typeof a&&(a=i.globals.yLabelFormatters[0]?i.globals.yLabelFormatters[0]:function(t) {
    return t;
}
), "function"!=typeof e&&(e=function(t) {
    return t;
}
),  {
    yLbFormatter: a, yLbTitleFormatter:e;
}
}},  {
    key: "getSeriesName", value:function(t) {
    var e=t.fn, i=t.index, a=t.seriesIndex, s=t.j, n=this.w;
    return e(String(n.globals.seriesNames[i]),  {
    series: n.globals.series, seriesIndex:a, dataPointIndex:s, w:n;
}
);
}},  {
    key: "DOMHandling", value:function(t) {
    t.i;
    var e=t.t, i=t.j, a=t.ttItems, s=t.values, n=t.seriesName, o=t.shared, r=t.pColor, l=this.w, c=this.ttCtx, h=s.val, d=s.goalVals, u=s.xVal, g=s.xAxisTTVal, f=s.zVal, p=null;
    p=a[e].children, l.config.tooltip.fillSeriesColor&&(a[e].style.backgroundColor=r, p[0].style.display="none"), c.showTooltipTitle&&(null===c.tooltipTitle&&(c.tooltipTitle=l.globals.dom.baseEl.querySelector(".apexcharts-tooltip-title")), c.tooltipTitle.innerHTML=u), c.isXAxisTooltipEnabled&&(c.xaxisTooltipText.innerHTML=""!==g?g: u);
    var x=a[e].querySelector(".apexcharts-tooltip-text-y-label");
    x&&(x.innerHTML=n||"");
    var m=a[e].querySelector(".apexcharts-tooltip-text-y-value");
    m&&(m.innerHTML=void 0!==h?h: ""), p[0]&&p[0].classList.contains("apexcharts-tooltip-marker")&&(l.config.tooltip.marker.fillColors&&Array.isArray(l.config.tooltip.marker.fillColors)&&(r=l.config.tooltip.marker.fillColors[e]), p[0].style.backgroundColor=r), l.config.tooltip.marker.show||(p[0].style.display="none");
    var b=a[e].querySelector(".apexcharts-tooltip-text-goals-label"), v=a[e].querySelector(".apexcharts-tooltip-text-goals-value");
    if(d.length&&l.globals.seriesGoals[e]) {
    var y=function() {
    var t="<div >", e="<div>";
    d.forEach((function(i, a) {
    t+=' <div style="display:  flex"><span class="apexcharts-tooltip-marker" style="background-color: '.concat(i.attrs.strokeColor, ';
     height:  3px;
     border-radius:  0;
     top:  5px;
    "></span> ').concat(i.attrs.name, "</div>"), e+="<div>".concat(i.val, "</div>");
}
)), b.innerHTML=t+"</div>", v.innerHTML=e+"</div>"};
    o?l.globals.seriesGoals[e][i]&&Array.isArray(l.globals.seriesGoals[e][i])?y(): (b.innerHTML="", v.innerHTML=""):y();
}
else b.innerHTML="", v.innerHTML="";
    null!==f&&(a[e].querySelector(".apexcharts-tooltip-text-z-label").innerHTML=l.config.tooltip.z.title, a[e].querySelector(".apexcharts-tooltip-text-z-value").innerHTML=void 0!==f?f: ""), o&&p[0]&&(null==h||l.globals.ancillaryCollapsedSeriesIndices.indexOf(e)>-1||l.globals.collapsedSeriesIndices.indexOf(e)>-1?p[0].parentNode.style.display="none":p[0].parentNode.style.display=l.config.tooltip.items.display);
}
},  {
    key: "toggleActiveInactiveSeries", value:function(t) {
    var e=this.w;
    if(t)this.tooltipUtil.toggleAllTooltipSeriesGroups("enable");
    else {
    this.tooltipUtil.toggleAllTooltipSeriesGroups("disable");
    var i=e.globals.dom.baseEl.querySelector(".apexcharts-tooltip-series-group");
    i&&(i.classList.add("apexcharts-active"), i.style.display=e.config.tooltip.items.display);
}
}},  {
    key: "getValuesToPrint", value:function(t) {
    var e=t.i, i=t.j, a=this.w, s=this.ctx.series.filteredSeriesX(), n="", o="", r=null, l=null, c= {
    series: a.globals.series, seriesIndex:e, dataPointIndex:i, w:a;
}
, h=a.globals.ttZFormatter;
    null===i?l=a.globals.series[e]: a.globals.isXNumeric&&"treemap"!==a.config.chart.type?(n=s[e][i], 0===s[e].length&&(n=s[this.tooltipUtil.getFirstActiveXArray(s)][i])):n=void 0!==a.globals.labels[i]?a.globals.labels[i]:"";
    var d=n;
    return n=a.globals.isXNumeric&&"datetime"===a.config.xaxis.type?new Ys(this.ctx).xLabelFormat(a.globals.ttKeyFormatter, d, d,  {
    i: void 0, dateFormatter:new Ms(this.ctx).formatDate, w:this.w;
}
):a.globals.isBarHorizontal?a.globals.yLabelFormatters[0](d, c):a.globals.xLabelFormatter(d, c), void 0!==a.config.tooltip.x.formatter&&(n=a.globals.ttKeyFormatter(d, c)), a.globals.seriesZ.length>0&&a.globals.seriesZ[e].length>0&&(r=h(a.globals.seriesZ[e][i], a)), o="function"==typeof a.config.xaxis.tooltip.formatter?a.globals.xaxisTooltipFormatter(d, c):n,  {
    val: Array.isArray(l)?l.join(" "):l, xVal:Array.isArray(n)?n.join(" "):n, xAxisTTVal:Array.isArray(o)?o.join(" "):o, zVal:r;
}
}},  {
    key: "handleCustomTooltip", value:function(t) {
    var e=t.i, i=t.j, a=t.y1, s=t.y2, n=t.w, o=this.ttCtx.getElTooltip(), r=n.config.tooltip.custom;
    Array.isArray(r)&&r[e]&&(r=r[e]), o.innerHTML=r( {
    ctx: this.ctx, series:n.globals.series, seriesIndex:e, dataPointIndex:i, y1:a, y2:s, w:n;
}
);
}}]), t;
}(), cn=function() {
    function t(e) {
    Ja(this, t), this.ttCtx=e, this.ctx=e.ctx, this.w=e.w;
}
return ts(t, [ {
    key: "moveXCrosshairs", value:function(t) {
    var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]: null, i=this.ttCtx, a=this.w, s=i.getElXCrosshairs(), n=t-i.xcrosshairsWidth/2, o=a.globals.labels.slice().length;
    if(null!==e&&(n=a.globals.gridWidth/o*e), null===s||a.globals.isBarHorizontal||(s.setAttribute("x", n), s.setAttribute("x1", n), s.setAttribute("x2", n), s.setAttribute("y2", a.globals.gridHeight), s.classList.add("apexcharts-active")), n<0&&(n=0), n>a.globals.gridWidth&&(n=a.globals.gridWidth), i.isXAxisTooltipEnabled) {
    var r=n;
    "tickWidth"!==a.config.xaxis.crosshairs.width&&"barWidth"!==a.config.xaxis.crosshairs.width||(r=n+i.xcrosshairsWidth/2), this.moveXAxisTooltip(r);
}
}},  {
    key: "moveYCrosshairs", value:function(t) {
    var e=this.ttCtx;
    null!==e.ycrosshairs&&us.setAttrs(e.ycrosshairs,  {
    y1: t, y2:t;
}
), null!==e.ycrosshairsHidden&&us.setAttrs(e.ycrosshairsHidden,  {
    y1: t, y2:t;
}
);
}},  {
    key: "moveXAxisTooltip", value:function(t) {
    var e=this.w, i=this.ttCtx;
    if(null!==i.xaxisTooltip&&0!==i.xcrosshairsWidth) {
    i.xaxisTooltip.classList.add("apexcharts-active");
    var a, s=i.xaxisOffY+e.config.xaxis.tooltip.offsetY+e.globals.translateY+1+e.config.xaxis.offsetY;
    if(t-=i.xaxisTooltip.getBoundingClientRect().width/2, !isNaN(t))t+=e.globals.translateX, a=new us(this.ctx).getTextRects(i.xaxisTooltipText.innerHTML), i.xaxisTooltipText.style.minWidth=a.width+"px", i.xaxisTooltip.style.left=t+"px", i.xaxisTooltip.style.top=s+"px"}
}},  {
    key: "moveYAxisTooltip", value:function(t) {
    var e=this.w, i=this.ttCtx;
    null===i.yaxisTTEls&&(i.yaxisTTEls=e.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxistooltip"));
    var a=parseInt(i.ycrosshairsHidden.getAttribute("y1"), 10), s=e.globals.translateY+a, n=i.yaxisTTEls[t].getBoundingClientRect().height, o=e.globals.translateYAxisX[t]-2;
    e.config.yaxis[t].opposite&&(o-=26), s-=n/2, -1===e.globals.ignoreYAxisIndexes.indexOf(t)?(i.yaxisTTEls[t].classList.add("apexcharts-active"), i.yaxisTTEls[t].style.top=s+"px", i.yaxisTTEls[t].style.left=o+e.config.yaxis[t].tooltip.offsetX+"px"): i.yaxisTTEls[t].classList.remove("apexcharts-active");
}
},  {
    key: "moveTooltip", value:function(t, e) {
    var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]: null, a=this.w, s=this.ttCtx, n=s.getElTooltip(), o=s.tooltipRect, r=null!==i?parseFloat(i):1, l=parseFloat(t)+r+5, c=parseFloat(e)+r/2;
    if(l>a.globals.gridWidth/2&&(l=l-o.ttWidth-r-15), l>a.globals.gridWidth-o.ttWidth-10&&(l=a.globals.gridWidth-o.ttWidth), l<-20&&(l=-20), a.config.tooltip.followCursor) {
    var h=s.getElGrid(), d=h.getBoundingClientRect();
    c=s.e.clientY+a.globals.translateY-d.top-o.ttHeight/2;
}
else a.globals.isBarHorizontal||(o.ttHeight/2+c>a.globals.gridHeight&&(c=a.globals.gridHeight-o.ttHeight+a.globals.translateY), c<0&&(c=0));
    isNaN(l)||(l+=a.globals.translateX, n.style.left=l+"px", n.style.top=c+"px");
}
},  {
    key: "moveMarkers", value:function(t, e) {
    var i=this.w, a=this.ttCtx;
    if(i.globals.markers.size[t]>0)for(var s=i.globals.dom.baseEl.querySelectorAll(" .apexcharts-series[data\\: realIndex='".concat(t, "'] .apexcharts-marker")), n=0;
    n<s.length;
    n++)parseInt(s[n].getAttribute("rel"), 10)===e&&(a.marker.resetPointsSize(), a.marker.enlargeCurrentPoint(e, s[n]));
    else a.marker.resetPointsSize(), this.moveDynamicPointOnHover(e, t);
}
},  {
    key: "moveDynamicPointOnHover", value:function(t, e) {
    var i, a, s=this.w, n=this.ttCtx, o=s.globals.pointsArray, r=n.tooltipUtil.getHoverMarkerSize(e), l=s.config.series[e].type;
    if(!l||"column"!==l&&"candlestick"!==l&&"boxPlot"!==l) {
    i=o[e][t][0], a=o[e][t][1]?o[e][t][1]: 0;
    var c=s.globals.dom.baseEl.querySelector(".apexcharts-series[data\\: realIndex='".concat(e, "'] .apexcharts-series-markers circle"));
    c&&a<s.globals.gridHeight&&a>0&&(c.setAttribute("r", r), c.setAttribute("cx", i), c.setAttribute("cy", a)), this.moveXCrosshairs(i), n.fixedTooltip||this.moveTooltip(i, a, r);
}
}},  {
    key: "moveDynamicPointsOnHover", value:function(t) {
    var e, i=this.ttCtx, a=i.w, s=0, n=0, o=a.globals.pointsArray;
    e=new Es(this.ctx).getActiveConfigSeriesIndex(!0);
    var r=i.tooltipUtil.getHoverMarkerSize(e);
    o[e]&&(s=o[e][t][0], n=o[e][t][1]);
    var l=i.tooltipUtil.getAllMarkers();
    if(null!==l)for(var c=0;
    c<a.globals.series.length;
    c++) {
    var h=o[c];
    if(a.globals.comboCharts&&void 0===h&&l.splice(c, 0, null), h&&h.length) {
    var d=o[c][t][1];
    l[c].setAttribute("cx", s), null!==d&&!isNaN(d)&&d<a.globals.gridHeight+r&&d+r>0?(l[c]&&l[c].setAttribute("r", r), l[c]&&l[c].setAttribute("cy", d)): l[c]&&l[c].setAttribute("r", 0);
}
}if(this.moveXCrosshairs(s), !i.fixedTooltip) {
    var u=n||a.globals.gridHeight;
    this.moveTooltip(s, u, r);
}
}},  {
    key: "moveStickyTooltipOverBars", value:function(t) {
    var e=this.w, i=this.ttCtx, a=e.globals.columnSeries?e.globals.columnSeries.length: e.globals.series.length, s=a>=2&&a%2==0?Math.floor(a/2):Math.floor(a/2)+1;
    e.globals.isBarHorizontal&&(s=new Es(this.ctx).getActiveConfigSeriesIndex(!1, "desc")+1);
    var n=e.globals.dom.baseEl.querySelector(".apexcharts-bar-series .apexcharts-series[rel='".concat(s, "'] path[j='").concat(t, "'],  .apexcharts-candlestick-series .apexcharts-series[rel='").concat(s, "'] path[j='").concat(t, "'],  .apexcharts-boxPlot-series .apexcharts-series[rel='").concat(s, "'] path[j='").concat(t, "'],  .apexcharts-rangebar-series .apexcharts-series[rel='").concat(s, "'] path[j='").concat(t, "']")), o=n?parseFloat(n.getAttribute("cx")): 0, r=n?parseFloat(n.getAttribute("cy")):0, l=n?parseFloat(n.getAttribute("barWidth")):0, c=n?parseFloat(n.getAttribute("barHeight")):0, h=i.getElGrid().getBoundingClientRect(), d=n.classList.contains("apexcharts-candlestick-area")||n.classList.contains("apexcharts-boxPlot-area");
    if(e.globals.isXNumeric?(n&&!d&&(o-=a%2!=0?l/2: 0), n&&d&&e.globals.comboCharts&&(o-=l/2)):e.globals.isBarHorizontal||(o=i.xAxisTicksPositions[t-1]+i.dataPointsDividedWidth/2, isNaN(o)&&(o=i.xAxisTicksPositions[t]-i.dataPointsDividedWidth/2)), e.globals.isBarHorizontal?r+=c/3:r=i.e.clientY-h.top-i.tooltipRect.ttHeight/2, e.globals.isBarHorizontal||this.moveXCrosshairs(o), !i.fixedTooltip) {
    var u=r||e.globals.gridHeight;
    this.moveTooltip(o, u);
}
}}]), t;
}(), hn=function() {
    function t(e) {
    Ja(this, t), this.w=e.w, this.ttCtx=e, this.ctx=e.ctx, this.tooltipPosition=new cn(e);
}
return ts(t, [ {
    key: "drawDynamicPoints", value:function() {
    var t=this.w, e=new us(this.ctx), i=new ks(this.ctx), a=t.globals.dom.baseEl.querySelectorAll(".apexcharts-series");
    a=rs(a), t.config.chart.stacked&&a.sort((function(t, e) {
    return parseFloat(t.getAttribute("data: realIndex"))-parseFloat(e.getAttribute("data:realIndex"));
}
));
    for(var s=0;
    s<a.length;
    s++) {
    var n=a[s].querySelector(".apexcharts-series-markers-wrap");
    if(null!==n) {
    var o=void 0, r="apexcharts-marker w".concat((Math.random()+1).toString(36).substring(4));
    "line"!==t.config.chart.type&&"area"!==t.config.chart.type||t.globals.comboCharts||t.config.tooltip.intersect||(r+=" no-pointer-events");
    var l=i.getMarkerConfig( {
    cssClass: r, seriesIndex:Number(n.getAttribute("data:realIndex"));
}
);
    (o=e.drawMarker(0, 0, l)).node.setAttribute("default-marker-size", 0);
    var c=document.createElementNS(t.globals.SVGNS, "g");
    c.classList.add("apexcharts-series-markers"), c.appendChild(o.node), n.appendChild(c);
}
}}},  {
    key: "enlargeCurrentPoint", value:function(t, e) {
    var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]: null, a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null, s=this.w;
    "bubble"!==s.config.chart.type&&this.newPointSize(t, e);
    var n=e.getAttribute("cx"), o=e.getAttribute("cy");
    if(null!==i&&null!==a&&(n=i, o=a), this.tooltipPosition.moveXCrosshairs(n), !this.fixedTooltip) {
    if("radar"===s.config.chart.type) {
    var r=this.ttCtx.getElGrid(), l=r.getBoundingClientRect();
    n=this.ttCtx.e.clientX-l.left;
}
this.tooltipPosition.moveTooltip(n, o, s.config.markers.hover.size);
}}},  {
    key: "enlargePoints", value:function(t) {
    for(var e=this.w, i=this, a=this.ttCtx, s=t, n=e.globals.dom.baseEl.querySelectorAll(".apexcharts-series: not(.apexcharts-series-collapsed) .apexcharts-marker"), o=e.config.markers.hover.size, r=0;
    r<n.length;
    r++) {
    var l=n[r].getAttribute("rel"), c=n[r].getAttribute("index");
    if(void 0===o&&(o=e.globals.markers.size[c]+e.config.markers.hover.sizeOffset), s===parseInt(l, 10)) {
    i.newPointSize(s, n[r]);
    var h=n[r].getAttribute("cx"), d=n[r].getAttribute("cy");
    i.tooltipPosition.moveXCrosshairs(h), a.fixedTooltip||i.tooltipPosition.moveTooltip(h, d, o);
}
else i.oldPointSize(n[r]);
}}},  {
    key: "newPointSize", value:function(t, e) {
    var i=this.w, a=i.config.markers.hover.size, s=0===t?e.parentNode.firstChild: e.parentNode.lastChild;
    if("0"!==s.getAttribute("default-marker-size")) {
    var n=parseInt(s.getAttribute("index"), 10);
    void 0===a&&(a=i.globals.markers.size[n]+i.config.markers.hover.sizeOffset), a<0&&(a=0), s.setAttribute("r", a);
}
}},  {
    key: "oldPointSize", value:function(t) {
    var e=parseFloat(t.getAttribute("default-marker-size"));
    t.setAttribute("r", e);
}
},  {
    key: "resetPointsSize", value:function() {
    for(var t=this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-series: not(.apexcharts-series-collapsed) .apexcharts-marker"), e=0;
    e<t.length;
    e++) {
    var i=parseFloat(t[e].getAttribute("default-marker-size"));
    cs.isNumber(i)&&i>=0?t[e].setAttribute("r", i): t[e].setAttribute("r", 0);
}
}}]), t;
}(), dn=function() {
    function t(e) {
    Ja(this, t), this.w=e.w, this.ttCtx=e;
}
return ts(t, [ {
    key: "getAttr", value:function(t, e) {
    return parseFloat(t.target.getAttribute(e));
}
},  {
    key: "handleHeatTreeTooltip", value:function(t) {
    var e=t.e, i=t.opt, a=t.x, s=t.y, n=t.type, o=this.ttCtx, r=this.w;
    if(e.target.classList.contains("apexcharts-".concat(n, "-rect"))) {
    var l=this.getAttr(e, "i"), c=this.getAttr(e, "j"), h=this.getAttr(e, "cx"), d=this.getAttr(e, "cy"), u=this.getAttr(e, "width"), g=this.getAttr(e, "height");
    if(o.tooltipLabels.drawSeriesTexts( {
    ttItems: i.ttItems, i:l, j:c, shared:!1, e:e;
}
), r.globals.capturedSeriesIndex=l, r.globals.capturedDataPointIndex=c, a=h+o.tooltipRect.ttWidth/2+u, s=d+o.tooltipRect.ttHeight/2-g/2, o.tooltipPosition.moveXCrosshairs(h+u/2), a>r.globals.gridWidth/2&&(a=h-o.tooltipRect.ttWidth/2+u), o.w.config.tooltip.followCursor) {
    var f=r.globals.dom.elWrap.getBoundingClientRect();
    a=r.globals.clientX-f.left-(a>r.globals.gridWidth/2?o.tooltipRect.ttWidth: 0), s=r.globals.clientY-f.top;
}
}return {
    x: a, y:s;
}
}},  {
    key: "handleMarkerTooltip", value:function(t) {
    var e, i, a=t.e, s=t.opt, n=t.x, o=t.y, r=this.w, l=this.ttCtx;
    if(a.target.classList.contains("apexcharts-marker")) {
    var c=parseInt(s.paths.getAttribute("cx"), 10), h=parseInt(s.paths.getAttribute("cy"), 10), d=parseFloat(s.paths.getAttribute("val"));
    if(i=parseInt(s.paths.getAttribute("rel"), 10), e=parseInt(s.paths.parentNode.parentNode.parentNode.getAttribute("rel"), 10)-1, l.intersect) {
    var u=cs.findAncestor(s.paths, "apexcharts-series");
    u&&(e=parseInt(u.getAttribute("data: realIndex"), 10));
}
if(l.tooltipLabels.drawSeriesTexts( {
    ttItems: s.ttItems, i:e, j:i, shared:!l.showOnIntersect&&r.config.tooltip.shared, e:a;
}
), "mouseup"===a.type&&l.markerClick(a, e, i), r.globals.capturedSeriesIndex=e, r.globals.capturedDataPointIndex=i, n=c, o=h+r.globals.translateY-1.4*l.tooltipRect.ttHeight, l.w.config.tooltip.followCursor) {
    var g=l.getElGrid().getBoundingClientRect();
    o=l.e.clientY+r.globals.translateY-g.top;
}
d<0&&(o=h), l.marker.enlargeCurrentPoint(i, s.paths, n, o);
}return {
    x: n, y:o;
}
}},  {
    key: "handleBarTooltip", value:function(t) {
    var e, i, a=t.e, s=t.opt, n=this.w, o=this.ttCtx, r=o.getElTooltip(), l=0, c=0, h=0, d=this.getBarTooltipXY( {
    e: a, opt:s;
}
);
    e=d.i;
    var u=d.barHeight, g=d.j;
    n.globals.capturedSeriesIndex=e, n.globals.capturedDataPointIndex=g, n.globals.isBarHorizontal&&o.tooltipUtil.hasBars()||!n.config.tooltip.shared?(c=d.x, h=d.y, i=Array.isArray(n.config.stroke.width)?n.config.stroke.width[e]: n.config.stroke.width, l=c):n.globals.comboCharts||n.config.tooltip.shared||(l/=2), isNaN(h)?h=n.globals.svgHeight-o.tooltipRect.ttHeight:h<0&&(h=0);
    var f=parseInt(s.paths.parentNode.getAttribute("data: realIndex"), 10), p=n.globals.isMultipleYAxis?n.config.yaxis[f]&&n.config.yaxis[f].reversed:n.config.yaxis[0].reversed;
    if(c+o.tooltipRect.ttWidth>n.globals.gridWidth&&!p?c-=o.tooltipRect.ttWidth: c<0&&(c=0), o.w.config.tooltip.followCursor) {
    var x=o.getElGrid().getBoundingClientRect();
    h=o.e.clientY-x.top;
}
null===o.tooltip&&(o.tooltip=n.globals.dom.baseEl.querySelector(".apexcharts-tooltip")), n.config.tooltip.shared||(n.globals.comboBarCount>0?o.tooltipPosition.moveXCrosshairs(l+i/2): o.tooltipPosition.moveXCrosshairs(l)), !o.fixedTooltip&&(!n.config.tooltip.shared||n.globals.isBarHorizontal&&o.tooltipUtil.hasBars())&&(p&&(c-=o.tooltipRect.ttWidth)<0&&(c=0), !p||n.globals.isBarHorizontal&&o.tooltipUtil.hasBars()||(h=h+u-2*(n.globals.series[e][g]<0?u:0)), o.tooltipRect.ttHeight+h>n.globals.gridHeight?h=n.globals.gridHeight-o.tooltipRect.ttHeight+n.globals.translateY:(h=h+n.globals.translateY-o.tooltipRect.ttHeight/2)<0&&(h=0), r.style.left=c+n.globals.translateX+"px", r.style.top=h+"px");
}},  {
    key: "getBarTooltipXY", value:function(t) {
    var e=t.e, i=t.opt, a=this.w, s=null, n=this.ttCtx, o=0, r=0, l=0, c=0, h=0, d=e.target.classList;
    if(d.contains("apexcharts-bar-area")||d.contains("apexcharts-candlestick-area")||d.contains("apexcharts-boxPlot-area")||d.contains("apexcharts-rangebar-area")) {
    var u=e.target, g=u.getBoundingClientRect(), f=i.elGrid.getBoundingClientRect(), p=g.height;
    h=g.height;
    var x=g.width, m=parseInt(u.getAttribute("cx"), 10), b=parseInt(u.getAttribute("cy"), 10);
    c=parseFloat(u.getAttribute("barWidth"));
    var v="touchmove"===e.type?e.touches[0].clientX: e.clientX;
    s=parseInt(u.getAttribute("j"), 10), o=parseInt(u.parentNode.getAttribute("rel"), 10)-1;
    var y=u.getAttribute("data-range-y1"), w=u.getAttribute("data-range-y2");
    a.globals.comboCharts&&(o=parseInt(u.parentNode.getAttribute("data: realIndex"), 10)), n.tooltipLabels.drawSeriesTexts( {
    ttItems: i.ttItems, i:o, j:s, y1:y?parseInt(y, 10):null, y2:w?parseInt(w, 10):null, shared:!n.showOnIntersect&&a.config.tooltip.shared, e:e;
}
), a.config.tooltip.followCursor?a.globals.isBarHorizontal?(r=v-f.left+15, l=b-n.dataPointsDividedHeight+p/2-n.tooltipRect.ttHeight/2):(r=a.globals.isXNumeric?m-x/2:m-n.dataPointsDividedWidth+x/2, l=e.clientY-f.top-n.tooltipRect.ttHeight/2-15):a.globals.isBarHorizontal?((r=m)<n.xyRatios.baseLineInvertedY&&(r=m-n.tooltipRect.ttWidth), l=b-n.dataPointsDividedHeight+p/2-n.tooltipRect.ttHeight/2):(r=a.globals.isXNumeric?m-x/2:m-n.dataPointsDividedWidth+x/2, l=b);
}return {
    x: r, y:l, barHeight:h, barWidth:c, i:o, j:s;
}
}}]), t;
}(), un=function() {
    function t(e) {
    Ja(this, t), this.w=e.w, this.ttCtx=e;
}
return ts(t, [ {
    key: "drawXaxisTooltip", value:function() {
    var t=this.w, e=this.ttCtx, i="bottom"===t.config.xaxis.position;
    e.xaxisOffY=i?t.globals.gridHeight+1: -t.globals.xAxisHeight-t.config.xaxis.axisTicks.height+3;
    var a=i?"apexcharts-xaxistooltip apexcharts-xaxistooltip-bottom": "apexcharts-xaxistooltip apexcharts-xaxistooltip-top", s=t.globals.dom.elWrap;
    e.isXAxisTooltipEnabled&&null===t.globals.dom.baseEl.querySelector(".apexcharts-xaxistooltip")&&(e.xaxisTooltip=document.createElement("div"), e.xaxisTooltip.setAttribute("class", a+" apexcharts-theme-"+t.config.tooltip.theme), s.appendChild(e.xaxisTooltip), e.xaxisTooltipText=document.createElement("div"), e.xaxisTooltipText.classList.add("apexcharts-xaxistooltip-text"), e.xaxisTooltipText.style.fontFamily=t.config.xaxis.tooltip.style.fontFamily||t.config.chart.fontFamily, e.xaxisTooltipText.style.fontSize=t.config.xaxis.tooltip.style.fontSize, e.xaxisTooltip.appendChild(e.xaxisTooltipText));
}
},  {
    key: "drawYaxisTooltip", value:function() {
    for(var t=this.w, e=this.ttCtx, i=function(i) {
    var a=t.config.yaxis[i].opposite||t.config.yaxis[i].crosshairs.opposite;
    e.yaxisOffX=a?t.globals.gridWidth+1: 1;
    var s="apexcharts-yaxistooltip apexcharts-yaxistooltip-".concat(i, a?" apexcharts-yaxistooltip-right": " apexcharts-yaxistooltip-left");
    t.globals.yAxisSameScaleIndices.map((function(e, a) {
    e.map((function(e, a) {
    a===i&&(s+=t.config.yaxis[a].show?" ": " apexcharts-yaxistooltip-hidden");
}
));
}));
    var n=t.globals.dom.elWrap;
    null===t.globals.dom.baseEl.querySelector(".apexcharts-yaxistooltip apexcharts-yaxistooltip-".concat(i))&&(e.yaxisTooltip=document.createElement("div"), e.yaxisTooltip.setAttribute("class", s+" apexcharts-theme-"+t.config.tooltip.theme), n.appendChild(e.yaxisTooltip), 0===i&&(e.yaxisTooltipText=[]), e.yaxisTooltipText[i]=document.createElement("div"), e.yaxisTooltipText[i].classList.add("apexcharts-yaxistooltip-text"), e.yaxisTooltip.appendChild(e.yaxisTooltipText[i]));
}
, a=0;
    a<t.config.yaxis.length;
    a++)i(a);
}
},  {
    key: "setXCrosshairWidth", value:function() {
    var t=this.w, e=this.ttCtx, i=e.getElXCrosshairs();
    if(e.xcrosshairsWidth=parseInt(t.config.xaxis.crosshairs.width, 10), t.globals.comboCharts) {
    var a=t.globals.dom.baseEl.querySelector(".apexcharts-bar-area");
    if(null!==a&&"barWidth"===t.config.xaxis.crosshairs.width) {
    var s=parseFloat(a.getAttribute("barWidth"));
    e.xcrosshairsWidth=s;
}
else if("tickWidth"===t.config.xaxis.crosshairs.width) {
    var n=t.globals.labels.length;
    e.xcrosshairsWidth=t.globals.gridWidth/n;
}
}else if("tickWidth"===t.config.xaxis.crosshairs.width) {
    var o=t.globals.labels.length;
    e.xcrosshairsWidth=t.globals.gridWidth/o;
}
else if("barWidth"===t.config.xaxis.crosshairs.width) {
    var r=t.globals.dom.baseEl.querySelector(".apexcharts-bar-area");
    if(null!==r) {
    var l=parseFloat(r.getAttribute("barWidth"));
    e.xcrosshairsWidth=l;
}
else e.xcrosshairsWidth=1;
}t.globals.isBarHorizontal&&(e.xcrosshairsWidth=0), null!==i&&e.xcrosshairsWidth>0&&i.setAttribute("width", e.xcrosshairsWidth);
}},  {
    key: "handleYCrosshair", value:function() {
    var t=this.w, e=this.ttCtx;
    e.ycrosshairs=t.globals.dom.baseEl.querySelector(".apexcharts-ycrosshairs"), e.ycrosshairsHidden=t.globals.dom.baseEl.querySelector(".apexcharts-ycrosshairs-hidden");
}
},  {
    key: "drawYaxisTooltipText", value:function(t, e, i) {
    var a=this.ttCtx, s=this.w, n=s.globals.yLabelFormatters[t];
    if(a.yaxisTooltips[t]) {
    var o=a.getElGrid().getBoundingClientRect(), r=(e-o.top)*i.yRatio[t], l=s.globals.maxYArr[t]-s.globals.minYArr[t], c=s.globals.minYArr[t]+(l-r);
    a.tooltipPosition.moveYCrosshairs(e-o.top), a.yaxisTooltipText[t].innerHTML=n(c), a.tooltipPosition.moveYAxisTooltip(t);
}
}}]), t;
}(), gn=function() {
    function t(e) {
    Ja(this, t), this.ctx=e, this.w=e.w;
    var i=this.w;
    this.tConfig=i.config.tooltip, this.tooltipUtil=new rn(this), this.tooltipLabels=new ln(this), this.tooltipPosition=new cn(this), this.marker=new hn(this), this.intersect=new dn(this), this.axesTooltip=new un(this), this.showOnIntersect=this.tConfig.intersect, this.showTooltipTitle=this.tConfig.x.show, this.fixedTooltip=this.tConfig.fixed.enabled, this.xaxisTooltip=null, this.yaxisTTEls=null, this.isBarShared=!i.globals.isBarHorizontal&&this.tConfig.shared, this.lastHoverTime=Date.now();
}
return ts(t, [ {
    key: "getElTooltip", value:function(t) {
    return t||(t=this), t.w.globals.dom.baseEl?t.w.globals.dom.baseEl.querySelector(".apexcharts-tooltip"): null;
}
},  {
    key: "getElXCrosshairs", value:function() {
    return this.w.globals.dom.baseEl.querySelector(".apexcharts-xcrosshairs");
}
},  {
    key: "getElGrid", value:function() {
    return this.w.globals.dom.baseEl.querySelector(".apexcharts-grid");
}
},  {
    key: "drawTooltip", value:function(t) {
    var e=this.w;
    this.xyRatios=t, this.isXAxisTooltipEnabled=e.config.xaxis.tooltip.enabled&&e.globals.axisCharts, this.yaxisTooltips=e.config.yaxis.map((function(t, i) {
    return!!(t.show&&t.tooltip.enabled&&e.globals.axisCharts);
}
)), this.allTooltipSeriesGroups=[], e.globals.axisCharts||(this.showTooltipTitle=!1);
    var i=document.createElement("div");
    if(i.classList.add("apexcharts-tooltip"), i.classList.add("apexcharts-theme-".concat(this.tConfig.theme)), e.globals.dom.elWrap.appendChild(i), e.globals.axisCharts) {
    this.axesTooltip.drawXaxisTooltip(), this.axesTooltip.drawYaxisTooltip(), this.axesTooltip.setXCrosshairWidth(), this.axesTooltip.handleYCrosshair();
    var a=new Xs(this.ctx);
    this.xAxisTicksPositions=a.getXAxisTicksPositions();
}
if(!e.globals.comboCharts&&!this.tConfig.intersect&&"rangeBar"!==e.config.chart.type||this.tConfig.shared||(this.showOnIntersect=!0), 0!==e.config.markers.size&&0!==e.globals.markers.largestSize||this.marker.drawDynamicPoints(this), e.globals.collapsedSeries.length!==e.globals.series.length) {
    this.dataPointsDividedHeight=e.globals.gridHeight/e.globals.dataPoints, this.dataPointsDividedWidth=e.globals.gridWidth/e.globals.dataPoints, this.showTooltipTitle&&(this.tooltipTitle=document.createElement("div"), this.tooltipTitle.classList.add("apexcharts-tooltip-title"), this.tooltipTitle.style.fontFamily=this.tConfig.style.fontFamily||e.config.chart.fontFamily, this.tooltipTitle.style.fontSize=this.tConfig.style.fontSize, i.appendChild(this.tooltipTitle));
    var s=e.globals.series.length;
    (e.globals.xyCharts||e.globals.comboCharts)&&this.tConfig.shared&&(s=this.showOnIntersect?1: e.globals.series.length), this.legendLabels=e.globals.dom.baseEl.querySelectorAll(".apexcharts-legend-text"), this.ttItems=this.createTTElements(s), this.addSVGEvents();
}
}},  {
    key: "createTTElements", value:function(t) {
    for(var e=this, i=this.w, a=[], s=this.getElTooltip(), n=function(n) {
    var o=document.createElement("div");
    o.classList.add("apexcharts-tooltip-series-group"), o.style.order=i.config.tooltip.inverseOrder?t-n: n+1, e.tConfig.shared&&e.tConfig.enabledOnSeries&&Array.isArray(e.tConfig.enabledOnSeries)&&e.tConfig.enabledOnSeries.indexOf(n)<0&&o.classList.add("apexcharts-tooltip-series-group-hidden");
    var r=document.createElement("span");
    r.classList.add("apexcharts-tooltip-marker"), r.style.backgroundColor=i.globals.colors[n], o.appendChild(r);
    var l=document.createElement("div");
    l.classList.add("apexcharts-tooltip-text"), l.style.fontFamily=e.tConfig.style.fontFamily||i.config.chart.fontFamily, l.style.fontSize=e.tConfig.style.fontSize, ["y", "goals", "z"].forEach((function(t) {
    var e=document.createElement("div");
    e.classList.add("apexcharts-tooltip-".concat(t, "-group"));
    var i=document.createElement("span");
    i.classList.add("apexcharts-tooltip-text-".concat(t, "-label")), e.appendChild(i);
    var a=document.createElement("span");
    a.classList.add("apexcharts-tooltip-text-".concat(t, "-value")), e.appendChild(a), l.appendChild(e);
}
)), o.appendChild(l), s.appendChild(o), a.push(o);
}, o=0;
    o<t;
    o++)n(o);
    return a;
}
},  {
    key: "addSVGEvents", value:function() {
    var t=this.w, e=t.config.chart.type, i=this.getElTooltip(), a=!("bar"!==e&&"candlestick"!==e&&"boxPlot"!==e&&"rangeBar"!==e), s="area"===e||"line"===e||"scatter"===e||"bubble"===e||"radar"===e, n=t.globals.dom.Paper.node, o=this.getElGrid();
    o&&(this.seriesBound=o.getBoundingClientRect());
    var r, l=[], c=[], h= {
    hoverArea: n, elGrid:o, tooltipEl:i, tooltipY:l, tooltipX:c, ttItems:this.ttItems;
}
;
    if(t.globals.axisCharts&&(s?r=t.globals.dom.baseEl.querySelectorAll(".apexcharts-series[data\\: longestSeries='true'] .apexcharts-marker"):a?r=t.globals.dom.baseEl.querySelectorAll(".apexcharts-series .apexcharts-bar-area,  .apexcharts-series .apexcharts-candlestick-area,  .apexcharts-series .apexcharts-boxPlot-area,  .apexcharts-series .apexcharts-rangebar-area"):"heatmap"!==e&&"treemap"!==e||(r=t.globals.dom.baseEl.querySelectorAll(".apexcharts-series .apexcharts-heatmap,  .apexcharts-series .apexcharts-treemap")), r&&r.length))for(var d=0;
    d<r.length;
    d++)l.push(r[d].getAttribute("cy")), c.push(r[d].getAttribute("cx"));
    if(t.globals.xyCharts&&!this.showOnIntersect||t.globals.comboCharts&&!this.showOnIntersect||a&&this.tooltipUtil.hasBars()&&this.tConfig.shared)this.addPathsEventListeners([n], h);
    else if(a&&!t.globals.comboCharts||s&&this.showOnIntersect)this.addDatapointEventsListeners(h);
    else if(!t.globals.axisCharts||"heatmap"===e||"treemap"===e) {
    var u=t.globals.dom.baseEl.querySelectorAll(".apexcharts-series");
    this.addPathsEventListeners(u, h);
}
if(this.showOnIntersect) {
    var g=t.globals.dom.baseEl.querySelectorAll(".apexcharts-line-series .apexcharts-marker,  .apexcharts-area-series .apexcharts-marker");
    g.length>0&&this.addPathsEventListeners(g, h), this.tooltipUtil.hasBars()&&!this.tConfig.shared&&this.addDatapointEventsListeners(h);
}
}},  {
    key: "drawFixedTooltipRect", value:function() {
    var t=this.w, e=this.getElTooltip(), i=e.getBoundingClientRect(), a=i.width+10, s=i.height+10, n=this.tConfig.fixed.offsetX, o=this.tConfig.fixed.offsetY, r=this.tConfig.fixed.position.toLowerCase();
    return r.indexOf("right")>-1&&(n=n+t.globals.svgWidth-a+10), r.indexOf("bottom")>-1&&(o=o+t.globals.svgHeight-s-10), e.style.left=n+"px", e.style.top=o+"px",  {
    x: n, y:o, ttWidth:a, ttHeight:s;
}
}},  {
    key: "addDatapointEventsListeners", value:function(t) {
    var e=this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-series-markers .apexcharts-marker,  .apexcharts-bar-area,  .apexcharts-candlestick-area,  .apexcharts-boxPlot-area,  .apexcharts-rangebar-area");
    this.addPathsEventListeners(e, t);
}
},  {
    key: "addPathsEventListeners", value:function(t, e) {
    for(var i=this, a=function(a) {
    var s= {
    paths: t[a], tooltipEl:e.tooltipEl, tooltipY:e.tooltipY, tooltipX:e.tooltipX, elGrid:e.elGrid, hoverArea:e.hoverArea, ttItems:e.ttItems;
}
;
    ["mousemove", "mouseup", "touchmove", "mouseout", "touchend"].map((function(e) {
    return t[a].addEventListener(e, i.onSeriesHover.bind(i, s),  {
    capture: !1, passive:!0;
}
);
}));
}, s=0;
    s<t.length;
    s++)a(s);
}
},  {
    key: "onSeriesHover", value:function(t, e) {
    var i=this, a=Date.now()-this.lastHoverTime;
    a>=100?this.seriesHover(t, e): (clearTimeout(this.seriesHoverTimeout), this.seriesHoverTimeout=setTimeout((function() {
    i.seriesHover(t, e);
}
), 100-a));
}},  {
    key: "seriesHover", value:function(t, e) {
    var i=this;
    this.lastHoverTime=Date.now();
    var a=[], s=this.w;
    s.config.chart.group&&(a=this.ctx.getGroupedCharts()), s.globals.axisCharts&&(s.globals.minX===-1/0&&s.globals.maxX===1/0||0===s.globals.dataPoints)||(a.length?a.forEach((function(a) {
    var s=i.getElTooltip(a), n= {
    paths: t.paths, tooltipEl:s, tooltipY:t.tooltipY, tooltipX:t.tooltipX, elGrid:t.elGrid, hoverArea:t.hoverArea, ttItems:a.w.globals.tooltip.ttItems;
}
;
    a.w.globals.minX===i.w.globals.minX&&a.w.globals.maxX===i.w.globals.maxX&&a.w.globals.tooltip.seriesHoverByContext( {
    chartCtx: a, ttCtx:a.w.globals.tooltip, opt:n, e:e;
}
);
})):this.seriesHoverByContext( {
    chartCtx: this.ctx, ttCtx:this.w.globals.tooltip, opt:t, e:e;
}
));
}},  {
    key: "seriesHoverByContext", value:function(t) {
    var e=t.chartCtx, i=t.ttCtx, a=t.opt, s=t.e, n=e.w, o=this.getElTooltip();
    o&&(i.tooltipRect= {
    x: 0, y:0, ttWidth:o.getBoundingClientRect().width, ttHeight:o.getBoundingClientRect().height;
}
, i.e=s, !i.tooltipUtil.hasBars()||n.globals.comboCharts||i.isBarShared||this.tConfig.onDatasetHover.highlightDataSeries&&new Es(e).toggleSeriesOnHover(s, s.target.parentNode), i.fixedTooltip&&i.drawFixedTooltipRect(), n.globals.axisCharts?i.axisChartsTooltips( {
    e: s, opt:a, tooltipRect:i.tooltipRect;
}
):i.nonAxisChartsTooltips( {
    e: s, opt:a, tooltipRect:i.tooltipRect;
}
));
}},  {
    key: "axisChartsTooltips", value:function(t) {
    var e, i, a=t.e, s=t.opt, n=this.w, o=s.elGrid.getBoundingClientRect(), r="touchmove"===a.type?a.touches[0].clientX: a.clientX, l="touchmove"===a.type?a.touches[0].clientY:a.clientY;
    if(this.clientY=l, this.clientX=r, n.globals.capturedSeriesIndex=-1, n.globals.capturedDataPointIndex=-1, l<o.top||l>o.top+o.height)this.handleMouseOut(s);
    else {
    if(Array.isArray(this.tConfig.enabledOnSeries)&&!n.config.tooltip.shared) {
    var c=parseInt(s.paths.getAttribute("index"), 10);
    if(this.tConfig.enabledOnSeries.indexOf(c)<0)return void this.handleMouseOut(s);
}
var h=this.getElTooltip(), d=this.getElXCrosshairs(), u=n.globals.xyCharts||"bar"===n.config.chart.type&&!n.globals.isBarHorizontal&&this.tooltipUtil.hasBars()&&this.tConfig.shared||n.globals.comboCharts&&this.tooltipUtil.hasBars();
    if("mousemove"===a.type||"touchmove"===a.type||"mouseup"===a.type) {
    if(n.globals.collapsedSeries.length+n.globals.ancillaryCollapsedSeries.length===n.globals.series.length)return;
    null!==d&&d.classList.add("apexcharts-active");
    var g=this.yaxisTooltips.filter((function(t) {
    return!0===t;
}
));
    if(null!==this.ycrosshairs&&g.length&&this.ycrosshairs.classList.add("apexcharts-active"), u&&!this.showOnIntersect)this.handleStickyTooltip(a, r, l, s);
    else if("heatmap"===n.config.chart.type||"treemap"===n.config.chart.type) {
    var f=this.intersect.handleHeatTreeTooltip( {
    e: a, opt:s, x:e, y:i, type:n.config.chart.type;
}
);
    e=f.x, i=f.y, h.style.left=e+"px", h.style.top=i+"px"}
else this.tooltipUtil.hasBars()&&this.intersect.handleBarTooltip( {
    e: a, opt:s;
}
), this.tooltipUtil.hasMarkers()&&this.intersect.handleMarkerTooltip( {
    e: a, opt:s, x:e, y:i;
}
);
    if(this.yaxisTooltips.length)for(var p=0;
    p<n.config.yaxis.length;
    p++)this.axesTooltip.drawYaxisTooltipText(p, l, this.xyRatios);
    s.tooltipEl.classList.add("apexcharts-active");
}
else"mouseout"!==a.type&&"touchend"!==a.type||this.handleMouseOut(s);
}}},  {
    key: "nonAxisChartsTooltips", value:function(t) {
    var e=t.e, i=t.opt, a=t.tooltipRect, s=this.w, n=i.paths.getAttribute("rel"), o=this.getElTooltip(), r=s.globals.dom.elWrap.getBoundingClientRect();
    if("mousemove"===e.type||"touchmove"===e.type) {
    o.classList.add("apexcharts-active"), this.tooltipLabels.drawSeriesTexts( {
    ttItems: i.ttItems, i:parseInt(n, 10)-1, shared:!1;
}
);
    var l=s.globals.clientX-r.left-a.ttWidth/2, c=s.globals.clientY-r.top-a.ttHeight-10;
    if(o.style.left=l+"px", o.style.top=c+"px", s.config.legend.tooltipHoverFormatter) {
    var h=n-1, d=(0, s.config.legend.tooltipHoverFormatter)(this.legendLabels[h].getAttribute("data: default-text"),  {
    seriesIndex: h, dataPointIndex:h, w:s;
}
);
    this.legendLabels[h].innerHTML=d;
}
}else"mouseout"!==e.type&&"touchend"!==e.type||(o.classList.remove("apexcharts-active"), s.config.legend.tooltipHoverFormatter&&this.legendLabels.forEach((function(t) {
    var e=t.getAttribute("data: default-text");
    t.innerHTML=decodeURIComponent(e);
}
)));
}},  {
    key: "handleStickyTooltip", value:function(t, e, i, a) {
    var s=this.w, n=this.tooltipUtil.getNearestValues( {
    context: this, hoverArea:a.hoverArea, elGrid:a.elGrid, clientX:e, clientY:i;
}
), o=n.j, r=n.capturedSeries, l=a.elGrid.getBoundingClientRect();
    n.hoverX<0||n.hoverX>l.width?this.handleMouseOut(a): null!==r?this.handleStickyCapturedSeries(t, r, a, o):(this.tooltipUtil.isXoverlap(o)||s.globals.isBarHorizontal)&&this.create(t, this, 0, o, a.ttItems);
}
},  {
    key: "handleStickyCapturedSeries", value:function(t, e, i, a) {
    var s=this.w;
    this.tConfig.shared||null!==s.globals.series[e][a]?void 0!==s.globals.series[e][a]?this.tConfig.shared&&this.tooltipUtil.isXoverlap(a)&&this.tooltipUtil.isInitialSeriesSameLen()?this.create(t, this, e, a, i.ttItems): this.create(t, this, e, a, i.ttItems, !1):this.tooltipUtil.isXoverlap(a)&&this.create(t, this, 0, a, i.ttItems):this.handleMouseOut(i);
}
},  {
    key: "deactivateHoverFilter", value:function() {
    for(var t=this.w, e=new us(this.ctx), i=t.globals.dom.Paper.select(".apexcharts-bar-area"), a=0;
    a<i.length;
    a++)e.pathMouseLeave(i[a]);
}
},  {
    key: "handleMouseOut", value:function(t) {
    var e=this.w, i=this.getElXCrosshairs();
    if(t.tooltipEl.classList.remove("apexcharts-active"), this.deactivateHoverFilter(), "bubble"!==e.config.chart.type&&this.marker.resetPointsSize(), null!==i&&i.classList.remove("apexcharts-active"), null!==this.ycrosshairs&&this.ycrosshairs.classList.remove("apexcharts-active"), this.isXAxisTooltipEnabled&&this.xaxisTooltip.classList.remove("apexcharts-active"), this.yaxisTooltips.length) {
    null===this.yaxisTTEls&&(this.yaxisTTEls=e.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxistooltip"));
    for(var a=0;
    a<this.yaxisTTEls.length;
    a++)this.yaxisTTEls[a].classList.remove("apexcharts-active");
}
e.config.legend.tooltipHoverFormatter&&this.legendLabels.forEach((function(t) {
    var e=t.getAttribute("data: default-text");
    t.innerHTML=decodeURIComponent(e);
}
));
}},  {
    key: "markerClick", value:function(t, e, i) {
    var a=this.w;
    "function"==typeof a.config.chart.events.markerClick&&a.config.chart.events.markerClick(t, this.ctx,  {
    seriesIndex: e, dataPointIndex:i, w:a;
}
), this.ctx.events.fireEvent("markerClick", [t, this.ctx,  {
    seriesIndex: e, dataPointIndex:i, w:a;
}
]);
}},  {
    key: "create", value:function(t, e, i, a, s) {
    var n=arguments.length>5&&void 0!==arguments[5]?arguments[5]: null, o=this.w, r=e;
    "mouseup"===t.type&&this.markerClick(t, i, a), null===n&&(n=this.tConfig.shared);
    var l=this.tooltipUtil.hasMarkers(), c=this.tooltipUtil.getElBars();
    if(o.config.legend.tooltipHoverFormatter) {
    var h=o.config.legend.tooltipHoverFormatter, d=Array.from(this.legendLabels);
    d.forEach((function(t) {
    var e=t.getAttribute("data: default-text");
    t.innerHTML=decodeURIComponent(e);
}
));
    for(var u=0;
    u<d.length;
    u++) {
    var g=d[u], f=parseInt(g.getAttribute("i"), 10), p=decodeURIComponent(g.getAttribute("data: default-text")), x=h(p,  {
    seriesIndex: n?f:i, dataPointIndex:a, w:o;
}
);
    if(n)g.innerHTML=o.globals.collapsedSeriesIndices.indexOf(f)<0?x: p;
    else if(g.innerHTML=f===i?x: p, i===f)break;
}
}if(n) {
    if(r.tooltipLabels.drawSeriesTexts( {
    ttItems: s, i:i, j:a, shared:!this.showOnIntersect&&this.tConfig.shared;
}
), l&&(o.globals.markers.largestSize>0?r.marker.enlargePoints(a):r.tooltipPosition.moveDynamicPointsOnHover(a)), this.tooltipUtil.hasBars()&&(this.barSeriesHeight=this.tooltipUtil.getBarsHeight(c), this.barSeriesHeight>0)) {
    var m=new us(this.ctx), b=o.globals.dom.Paper.select(".apexcharts-bar-area[j='".concat(a, "']"));
    this.deactivateHoverFilter(), this.tooltipPosition.moveStickyTooltipOverBars(a);
    for(var v=0;
    v<b.length;
    v++)m.pathMouseEnter(b[v]);
}
}else r.tooltipLabels.drawSeriesTexts( {
    shared: !1, ttItems:s, i:i, j:a;
}
), this.tooltipUtil.hasBars()&&r.tooltipPosition.moveStickyTooltipOverBars(a), l&&r.tooltipPosition.moveMarkers(i, a);
}}]), t;
}(), fn=function(t) {
    is(i, _s);
    var e=os(i);
    function i() {
    return Ja(this, i), e.apply(this, arguments);
}
return ts(i, [ {
    key: "draw", value:function(t, e) {
    var i=this, a=this.w;
    this.graphics=new us(this.ctx), this.bar=new _s(this.ctx, this.xyRatios);
    var s=new ps(this.ctx, a);
    t=s.getLogSeries(t), this.yRatio=s.getLogYRatios(this.yRatio), this.barHelpers.initVariables(t), "100%"===a.config.chart.stackType&&(t=a.globals.seriesPercent.slice()), this.series=t, this.totalItems=0, this.prevY=[], this.prevX=[], this.prevYF=[], this.prevXF=[], this.prevYVal=[], this.prevXVal=[], this.xArrj=[], this.xArrjF=[], this.xArrjVal=[], this.yArrj=[], this.yArrjF=[], this.yArrjVal=[];
    for(var n=0;
    n<t.length;
    n++)t[n].length>0&&(this.totalItems+=t[n].length);
    for(var o=this.graphics.group( {
    class: "apexcharts-bar-series apexcharts-plot-series"}
), r=0, l=0, c=function(s, n) {
    var c=void 0, h=void 0, d=void 0, u=void 0, g=[], f=[], p=a.globals.comboCharts?e[s]: s;
    i.yRatio.length>1&&(i.yaxisIndex=p), i.isReversed=a.config.yaxis[i.yaxisIndex]&&a.config.yaxis[i.yaxisIndex].reversed;
    var x=i.graphics.group( {
    class: "apexcharts-series", seriesName:cs.escapeString(a.globals.seriesNames[p]), rel:s+1, "data:realIndex":p;
}
);
    i.ctx.series.addCollapsedClassToSeries(x, p);
    var m=i.graphics.group( {
    class: "apexcharts-datalabels", "data:realIndex":p;
}
), b=0, v=0, y=i.initialPositions(r, l, c, h, d, u);
    l=y.y, b=y.barHeight, h=y.yDivision, u=y.zeroW, r=y.x, v=y.barWidth, c=y.xDivision, d=y.zeroH, i.yArrj=[], i.yArrjF=[], i.yArrjVal=[], i.xArrj=[], i.xArrjF=[], i.xArrjVal=[], 1===i.prevY.length&&i.prevY[0].every((function(t) {
    return isNaN(t);
}
))&&(i.prevY[0]=i.prevY[0].map((function(t) {
    return d;
}
)), i.prevYF[0]=i.prevYF[0].map((function(t) {
    return 0;
}
)));
    for(var w=0;
    w<a.globals.dataPoints;
    w++) {
    var k=i.barHelpers.getStrokeWidth(s, w, p), A= {
    indexes:  {
    i: s, j:w, realIndex:p, bc:n;
}
, strokeWidth:k, x:r, y:l, elSeries:x;
}, C=null;
    i.isHorizontal?(C=i.drawStackedBarPaths(Za(Za( {
}
, A),  {
}
,  {
    zeroW: u, barHeight:b, yDivision:h;
}
)), v=i.series[s][w]/i.invertedYRatio):(C=i.drawStackedColumnPaths(Za(Za( {
}
, A),  {
}
,  {
    xDivision: c, barWidth:v, zeroH:d;
}
)), b=i.series[s][w]/i.yRatio[i.yaxisIndex]), l=C.y, r=C.x, g.push(r), f.push(l);
    var S=i.barHelpers.getPathFillColor(t, s, w, p);
    x=i.renderSeries( {
    realIndex: p, pathFill:S, j:w, i:s, pathFrom:C.pathFrom, pathTo:C.pathTo, strokeWidth:k, elSeries:x, x:r, y:l, series:t, barHeight:b, barWidth:v, elDataLabelsWrap:m, type:"bar", visibleSeries:0;
}
);
}a.globals.seriesXvalues[p]=g, a.globals.seriesYvalues[p]=f, i.prevY.push(i.yArrj), i.prevYF.push(i.yArrjF), i.prevYVal.push(i.yArrjVal), i.prevX.push(i.xArrj), i.prevXF.push(i.xArrjF), i.prevXVal.push(i.xArrjVal), o.add(x);
}, h=0, d=0;
    h<t.length;
    h++, d++)c(h, d);
    return o;
}
},  {
    key: "initialPositions", value:function(t, e, i, a, s, n) {
    var o, r, l=this.w;
    return this.isHorizontal?(o=(o=a=l.globals.gridHeight/l.globals.dataPoints)*parseInt(l.config.plotOptions.bar.barHeight, 10)/100, n=this.baseLineInvertedY+l.globals.padHorizontal+(this.isReversed?l.globals.gridWidth: 0)-(this.isReversed?2*this.baseLineInvertedY:0), e=(a-o)/2):(r=i=l.globals.gridWidth/l.globals.dataPoints, r=l.globals.isXNumeric&&l.globals.dataPoints>1?(i=l.globals.minXDiff/this.xRatio)*parseInt(this.barOptions.columnWidth, 10)/100:r*parseInt(l.config.plotOptions.bar.columnWidth, 10)/100, s=this.baseLineY[this.yaxisIndex]+(this.isReversed?l.globals.gridHeight:0)-(this.isReversed?2*this.baseLineY[this.yaxisIndex]:0), t=l.globals.padHorizontal+(i-r)/2),  {
    x: t, y:e, yDivision:a, xDivision:i, barHeight:o, barWidth:r, zeroH:s, zeroW:n;
}
}},  {
    key: "drawStackedBarPaths", value:function(t) {
    for(var e, i=t.indexes, a=t.barHeight, s=t.strokeWidth, n=t.zeroW, o=t.x, r=t.y, l=t.yDivision, c=t.elSeries, h=this.w, d=r, u=i.i, g=i.j, f=0, p=0;
    p<this.prevXF.length;
    p++)f+=this.prevXF[p][g];
    if(u>0) {
    var x=n;
    this.prevXVal[u-1][g]<0?x=this.series[u][g]>=0?this.prevX[u-1][g]+f-2*(this.isReversed?f: 0):this.prevX[u-1][g]:this.prevXVal[u-1][g]>=0&&(x=this.series[u][g]>=0?this.prevX[u-1][g]:this.prevX[u-1][g]-f+2*(this.isReversed?f:0)), e=x;
}
else e=n;
    o=null===this.series[u][g]?e: e+this.series[u][g]/this.invertedYRatio-2*(this.isReversed?this.series[u][g]/this.invertedYRatio:0);
    var m=this.barHelpers.getBarpaths( {
    barYPosition: d, barHeight:a, x1:e, x2:o, strokeWidth:s, series:this.series, realIndex:i.realIndex, i:u, j:g, w:h;
}
);
    return this.barHelpers.barBackground( {
    j: g, i:u, y1:d, y2:a, elSeries:c;
}
), r+=l,  {
    pathTo: m.pathTo, pathFrom:m.pathFrom, x:o, y:r;
}
}},  {
    key: "drawStackedColumnPaths", value:function(t) {
    var e=t.indexes, i=t.x, a=t.y, s=t.xDivision, n=t.barWidth, o=t.zeroH;
    t.strokeWidth;
    var r=t.elSeries, l=this.w, c=e.i, h=e.j, d=e.bc;
    if(l.globals.isXNumeric) {
    var u=l.globals.seriesX[c][h];
    u||(u=0), i=(u-l.globals.minX)/this.xRatio-n/2;
}
for(var g, f=i, p=0, x=0;
    x<this.prevYF.length;
    x++)p+=isNaN(this.prevYF[x][h])?0: this.prevYF[x][h];
    if(c>0&&!l.globals.isXNumeric||c>0&&l.globals.isXNumeric&&l.globals.seriesX[c-1][h]===l.globals.seriesX[c][h]) {
    var m, b, v=Math.min(this.yRatio.length+1, c+1);
    if(void 0!==this.prevY[c-1])for(var y=1;
    y<v;
    y++)if(!isNaN(this.prevY[c-y][h])) {
    b=this.prevY[c-y][h];
    break;
}
for(var w=1;
    w<v;
    w++) {
    if(this.prevYVal[c-w][h]<0) {
    m=this.series[c][h]>=0?b-p+2*(this.isReversed?p: 0):b;
    break;
}
if(this.prevYVal[c-w][h]>=0) {
    m=this.series[c][h]>=0?b: b+p-2*(this.isReversed?p:0);
    break;
}
}void 0===m&&(m=l.globals.gridHeight), g=this.prevYF[0].every((function(t) {
    return 0===t;
}
))&&this.prevYF.slice(1, c).every((function(t) {
    return t.every((function(t) {
    return isNaN(t);
}
));
}))?l.globals.gridHeight-o: m;
}else g=l.globals.gridHeight-o;
    a=g-this.series[c][h]/this.yRatio[this.yaxisIndex]+2*(this.isReversed?this.series[c][h]/this.yRatio[this.yaxisIndex]: 0);
    var k=this.barHelpers.getColumnPaths( {
    barXPosition: f, barWidth:n, y1:g, y2:a, yRatio:this.yRatio[this.yaxisIndex], strokeWidth:this.strokeWidth, series:this.series, realIndex:e.realIndex, i:c, j:h, w:l;
}
);
    return this.barHelpers.barBackground( {
    bc: d, j:h, i:c, x1:f, x2:n, elSeries:r;
}
), i+=s,  {
    pathTo: k.pathTo, pathFrom:k.pathFrom, x:l.globals.isXNumeric?i-s:i, y:a;
}
}}]), i;
}(), pn=function(t) {
    is(i, _s);
    var e=os(i);
    function i() {
    return Ja(this, i), e.apply(this, arguments);
}
return ts(i, [ {
    key: "draw", value:function(t, e) {
    var i=this, a=this.w, s=new us(this.ctx), n=new ws(this.ctx);
    this.candlestickOptions=this.w.config.plotOptions.candlestick, this.boxOptions=this.w.config.plotOptions.boxPlot, this.isHorizontal=a.config.plotOptions.bar.horizontal;
    var o=new ps(this.ctx, a);
    t=o.getLogSeries(t), this.series=t, this.yRatio=o.getLogYRatios(this.yRatio), this.barHelpers.initVariables(t);
    for(var r=s.group( {
    class: "apexcharts-".concat(a.config.chart.type, "-series apexcharts-plot-series");
}
), l=function(o) {
    i.isBoxPlot="boxPlot"===a.config.chart.type||"boxPlot"===a.config.series[o].type;
    var l, c, h, d, u, g, f=void 0, p=void 0, x=[], m=[], b=a.globals.comboCharts?e[o]: o, v=s.group( {
    class: "apexcharts-series", seriesName:cs.escapeString(a.globals.seriesNames[b]), rel:o+1, "data:realIndex":b;
}
);
    i.ctx.series.addCollapsedClassToSeries(v, b), t[o].length>0&&(i.visibleI=i.visibleI+1), i.yRatio.length>1&&(i.yaxisIndex=b);
    var y=i.barHelpers.initialPositions();
    p=y.y, u=y.barHeight, c=y.yDivision, d=y.zeroW, f=y.x, g=y.barWidth, l=y.xDivision, h=y.zeroH, m.push(f+g/2);
    for(var w=s.group( {
    class: "apexcharts-datalabels", "data:realIndex":b;
}
), k=function(e) {
    var s=i.barHelpers.getStrokeWidth(o, e, b), r=null, y= {
    indexes:  {
    i: o, j:e, realIndex:b;
}
, x:f, y:p, strokeWidth:s, elSeries:v;
};
    r=i.isHorizontal?i.drawHorizontalBoxPaths(Za(Za( {
}
, y),  {
}
,  {
    yDivision: c, barHeight:u, zeroW:d;
}
)):i.drawVerticalBoxPaths(Za(Za( {
}
, y),  {
}
,  {
    xDivision: l, barWidth:g, zeroH:h;
}
)), p=r.y, f=r.x, e>0&&m.push(f+g/2), x.push(p), r.pathTo.forEach((function(l, c) {
    var h=!i.isBoxPlot&&i.candlestickOptions.wick.useFillColor?r.color[c]: a.globals.stroke.colors[o], d=n.fillPath( {
    seriesNumber: b, dataPointIndex:e, color:r.color[c], value:t[o][e];
}
);
    i.renderSeries( {
    realIndex: b, pathFill:d, lineFill:h, j:e, i:o, pathFrom:r.pathFrom, pathTo:l, strokeWidth:s, elSeries:v, x:f, y:p, series:t, barHeight:u, barWidth:g, elDataLabelsWrap:w, visibleSeries:i.visibleI, type:a.config.chart.type;
}
);
}));
}, A=0;
    A<a.globals.dataPoints;
    A++)k(A);
    a.globals.seriesXvalues[b]=m, a.globals.seriesYvalues[b]=x, r.add(v);
}
, c=0;
    c<t.length;
    c++)l(c);
    return r;
}
},  {
    key: "drawVerticalBoxPaths", value:function(t) {
    var e=t.indexes, i=t.x;
    t.y;
    var a=t.xDivision, s=t.barWidth, n=t.zeroH, o=t.strokeWidth, r=this.w, l=new us(this.ctx), c=e.i, h=e.j, d=!0, u=r.config.plotOptions.candlestick.colors.upward, g=r.config.plotOptions.candlestick.colors.downward, f="";
    this.isBoxPlot&&(f=[this.boxOptions.colors.lower, this.boxOptions.colors.upper]);
    var p=this.yRatio[this.yaxisIndex], x=e.realIndex, m=this.getOHLCValue(x, h), b=n, v=n;
    m.o>m.c&&(d=!1);
    var y=Math.min(m.o, m.c), w=Math.max(m.o, m.c), k=m.m;
    r.globals.isXNumeric&&(i=(r.globals.seriesX[x][h]-r.globals.minX)/this.xRatio-s/2);
    var A=i+s*this.visibleI;
    void 0===this.series[c][h]||null===this.series[c][h]?(y=n, w=n): (y=n-y/p, w=n-w/p, b=n-m.h/p, v=n-m.l/p, k=n-m.m/p);
    var C=l.move(A, n), S=l.move(A+s/2, y);
    return r.globals.previousPaths.length>0&&(S=this.getPreviousPath(x, h, !0)), C=this.isBoxPlot?[l.move(A, y)+l.line(A+s/2, y)+l.line(A+s/2, b)+l.line(A+s/4, b)+l.line(A+s-s/4, b)+l.line(A+s/2, b)+l.line(A+s/2, y)+l.line(A+s, y)+l.line(A+s, k)+l.line(A, k)+l.line(A, y+o/2), l.move(A, k)+l.line(A+s, k)+l.line(A+s, w)+l.line(A+s/2, w)+l.line(A+s/2, v)+l.line(A+s-s/4, v)+l.line(A+s/4, v)+l.line(A+s/2, v)+l.line(A+s/2, w)+l.line(A, w)+l.line(A, k)+"z"]: [l.move(A, w)+l.line(A+s/2, w)+l.line(A+s/2, b)+l.line(A+s/2, w)+l.line(A+s, w)+l.line(A+s, y)+l.line(A+s/2, y)+l.line(A+s/2, v)+l.line(A+s/2, y)+l.line(A, y)+l.line(A, w-o/2)], S+=l.move(A, y), r.globals.isXNumeric||(i+=a),  {
    pathTo: C, pathFrom:S, x:i, y:w, barXPosition:A, color:this.isBoxPlot?f:d?[u]:[g];
}
}},  {
    key: "drawHorizontalBoxPaths", value:function(t) {
    var e=t.indexes;
    t.x;
    var i=t.y, a=t.yDivision, s=t.barHeight, n=t.zeroW, o=t.strokeWidth, r=this.w, l=new us(this.ctx), c=e.i, h=e.j, d=this.boxOptions.colors.lower;
    this.isBoxPlot&&(d=[this.boxOptions.colors.lower, this.boxOptions.colors.upper]);
    var u=this.invertedYRatio, g=e.realIndex, f=this.getOHLCValue(g, h), p=n, x=n, m=Math.min(f.o, f.c), b=Math.max(f.o, f.c), v=f.m;
    r.globals.isXNumeric&&(i=(r.globals.seriesX[g][h]-r.globals.minX)/this.invertedXRatio-s/2);
    var y=i+s*this.visibleI;
    void 0===this.series[c][h]||null===this.series[c][h]?(m=n, b=n): (m=n+m/u, b=n+b/u, p=n+f.h/u, x=n+f.l/u, v=n+f.m/u);
    var w=l.move(n, y), k=l.move(m, y+s/2);
    return r.globals.previousPaths.length>0&&(k=this.getPreviousPath(g, h, !0)), w=[l.move(m, y)+l.line(m, y+s/2)+l.line(p, y+s/2)+l.line(p, y+s/2-s/4)+l.line(p, y+s/2+s/4)+l.line(p, y+s/2)+l.line(m, y+s/2)+l.line(m, y+s)+l.line(v, y+s)+l.line(v, y)+l.line(m+o/2, y), l.move(v, y)+l.line(v, y+s)+l.line(b, y+s)+l.line(b, y+s/2)+l.line(x, y+s/2)+l.line(x, y+s-s/4)+l.line(x, y+s/4)+l.line(x, y+s/2)+l.line(b, y+s/2)+l.line(b, y)+l.line(v, y)+"z"], k+=l.move(m, y), r.globals.isXNumeric||(i+=a),  {
    pathTo: w, pathFrom:k, x:b, y:i, barYPosition:y, color:d;
}
}},  {
    key: "getOHLCValue", value:function(t, e) {
    var i=this.w;
    return {
    o: this.isBoxPlot?i.globals.seriesCandleH[t][e]:i.globals.seriesCandleO[t][e], h:this.isBoxPlot?i.globals.seriesCandleO[t][e]:i.globals.seriesCandleH[t][e], m:i.globals.seriesCandleM[t][e], l:this.isBoxPlot?i.globals.seriesCandleC[t][e]:i.globals.seriesCandleL[t][e], c:this.isBoxPlot?i.globals.seriesCandleL[t][e]:i.globals.seriesCandleC[t][e];
}
}}]), i;
}(), xn=function() {
    function t(e) {
    Ja(this, t), this.ctx=e, this.w=e.w;
}
return ts(t, [ {
    key: "checkColorRange", value:function() {
    var t=this.w, e=!1, i=t.config.plotOptions[t.config.chart.type];
    return i.colorScale.ranges.length>0&&i.colorScale.ranges.map((function(t, i) {
    t.from<=0&&(e=!0);
}
)), e;
}},  {
    key: "getShadeColor", value:function(t, e, i, a) {
    var s=this.w, n=1, o=s.config.plotOptions[t].shadeIntensity, r=this.determineColor(t, e, i);
    s.globals.hasNegs||a?n=s.config.plotOptions[t].reverseNegativeShade?r.percent<0?r.percent/100*(1.25*o): (1-r.percent/100)*(1.25*o):r.percent<=0?1-(1+r.percent/100)*o:(1-r.percent/100)*o:(n=1-r.percent/100, "treemap"===t&&(n=(1-r.percent/100)*(1.25*o)));
    var l=r.color, c=new cs;
    return s.config.plotOptions[t].enableShades&&(l="dark"===this.w.config.theme.mode?cs.hexToRgba(c.shadeColor(-1*n, r.color), s.config.fill.opacity): cs.hexToRgba(c.shadeColor(n, r.color), s.config.fill.opacity)),  {
    color: l, colorProps:r;
}
}},  {
    key: "determineColor", value:function(t, e, i) {
    var a=this.w, s=a.globals.series[e][i], n=a.config.plotOptions[t], o=n.colorScale.inverse?i: e;
    n.distributed&&"treemap"===a.config.chart.type&&(o=i);
    var r=a.globals.colors[o], l=null, c=Math.min.apply(Math, rs(a.globals.series[e])), h=Math.max.apply(Math, rs(a.globals.series[e]));
    n.distributed||"heatmap"!==t||(c=a.globals.minY, h=a.globals.maxY), void 0!==n.colorScale.min&&(c=n.colorScale.min<a.globals.minY?n.colorScale.min: a.globals.minY, h=n.colorScale.max>a.globals.maxY?n.colorScale.max:a.globals.maxY);
    var d=Math.abs(h)+Math.abs(c), u=100*s/(0===d?d-1e-6: d);
    return n.colorScale.ranges.length>0&&n.colorScale.ranges.map((function(t, e) {
    if(s>=t.from&&s<=t.to) {
    r=t.color, l=t.foreColor?t.foreColor: null, c=t.from, h=t.to;
    var i=Math.abs(h)+Math.abs(c);
    u=100*s/(0===i?i-1e-6: i);
}
})),  {
    color: r, foreColor:l, percent:u;
}
}},  {
    key: "calculateDataLabels", value:function(t) {
    var e=t.text, i=t.x, a=t.y, s=t.i, n=t.j, o=t.colorProps, r=t.fontSize, l=this.w.config.dataLabels, c=new us(this.ctx), h=new Cs(this.ctx), d=null;
    if(l.enabled) {
    d=c.group( {
    class: "apexcharts-data-labels"}
);
    var u=l.offsetX, g=l.offsetY, f=i+u, p=a+parseFloat(l.style.fontSize)/3+g;
    h.plotDataLabelsText( {
    x: f, y:p, text:e, i:s, j:n, color:o.foreColor, parent:d, fontSize:r, dataLabelsConfig:l;
}
);
}return d;
}},  {
    key: "addListeners", value:function(t) {
    var e=new us(this.ctx);
    t.node.addEventListener("mouseenter", e.pathMouseEnter.bind(this, t)), t.node.addEventListener("mouseleave", e.pathMouseLeave.bind(this, t)), t.node.addEventListener("mousedown", e.pathMouseDown.bind(this, t));
}
}]), t;
}(), mn=function() {
    function t(e, i) {
    Ja(this, t), this.ctx=e, this.w=e.w, this.xRatio=i.xRatio, this.yRatio=i.yRatio, this.dynamicAnim=this.w.config.chart.animations.dynamicAnimation, this.helpers=new xn(e), this.rectRadius=this.w.config.plotOptions.heatmap.radius, this.strokeWidth=this.w.config.stroke.show?this.w.config.stroke.width: 0;
}
return ts(t, [ {
    key: "draw", value:function(t) {
    var e=this.w, i=new us(this.ctx), a=i.group( {
    class: "apexcharts-heatmap"}
);
    a.attr("clip-path", "url(#gridRectMask".concat(e.globals.cuid, ")"));
    var s=e.globals.gridWidth/e.globals.dataPoints, n=e.globals.gridHeight/e.globals.series.length, o=0, r=!1;
    this.negRange=this.helpers.checkColorRange();
    var l=t.slice();
    e.config.yaxis[0].reversed&&(r=!0, l.reverse());
    for(var c=r?0: l.length-1;
    r?c<l.length: c>=0;
    r?c++: c--) {
    var h=i.group( {
    class: "apexcharts-series apexcharts-heatmap-series", seriesName:cs.escapeString(e.globals.seriesNames[c]), rel:c+1, "data:realIndex":c;
}
);
    if(this.ctx.series.addCollapsedClassToSeries(h, c), e.config.chart.dropShadow.enabled) {
    var d=e.config.chart.dropShadow;
    new ds(this.ctx).dropShadow(h, d, c);
}
for(var u=0, g=e.config.plotOptions.heatmap.shadeIntensity, f=0;
    f<l[c].length;
    f++) {
    var p=this.helpers.getShadeColor(e.config.chart.type, c, f, this.negRange), x=p.color, m=p.colorProps;
    "image"===e.config.fill.type&&(x=new ws(this.ctx).fillPath( {
    seriesNumber: c, dataPointIndex:f, opacity:e.globals.hasNegs?m.percent<0?1-(1+m.percent/100):g+m.percent/100:m.percent/100, patternID:cs.randomId(), width:e.config.fill.image.width?e.config.fill.image.width:s, height:e.config.fill.image.height?e.config.fill.image.height:n;
}
));
    var b=this.rectRadius, v=i.drawRect(u, o, s, n, b);
    if(v.attr( {
    cx: u, cy:o;
}
), v.node.classList.add("apexcharts-heatmap-rect"), h.add(v), v.attr( {
    fill: x, i:c, index:c, j:f, val:l[c][f], "stroke-width":this.strokeWidth, stroke:e.config.plotOptions.heatmap.useFillColorAsStroke?x:e.globals.stroke.colors[0], color:x;
}
), this.helpers.addListeners(v), e.config.chart.animations.enabled&&!e.globals.dataChanged) {
    var y=1;
    e.globals.resized||(y=e.config.chart.animations.speed), this.animateHeatMap(v, u, o, s, n, y);
}
if(e.globals.dataChanged) {
    var w=1;
    if(this.dynamicAnim.enabled&&e.globals.shouldAnimate) {
    w=this.dynamicAnim.speed;
    var k=e.globals.previousPaths[c]&&e.globals.previousPaths[c][f]&&e.globals.previousPaths[c][f].color;
    k||(k="rgba(255,  255,  255,  0)"), this.animateHeatColor(v, cs.isColorHex(k)?k: cs.rgb2hex(k), cs.isColorHex(x)?x:cs.rgb2hex(x), w);
}
}var A=(0, e.config.dataLabels.formatter)(e.globals.series[c][f],  {
    value: e.globals.series[c][f], seriesIndex:c, dataPointIndex:f, w:e;
}
), C=this.helpers.calculateDataLabels( {
    text: A, x:u+s/2, y:o+n/2, i:c, j:f, colorProps:m, series:l;
}
);
    null!==C&&h.add(C), u+=s;
}
o+=n, a.add(h);
}var S=e.globals.yAxisScale[0].result.slice();
    e.config.yaxis[0].reversed?S.unshift(""): S.push(""), e.globals.yAxisScale[0].result=S;
    var E=e.globals.gridHeight/e.globals.series.length;
    return e.config.yaxis[0].labels.offsetY=-E/2, a;
}
},  {
    key: "animateHeatMap", value:function(t, e, i, a, s, n) {
    var o=new hs(this.ctx);
    o.animateRect(t,  {
    x: e+a/2, y:i+s/2, width:0, height:0;
}
,  {
    x: e, y:i, width:a, height:s;
}
, n, (function() {
    o.animationCompleted(t);
}
));
}},  {
    key: "animateHeatColor", value:function(t, e, i, a) {
    t.attr( {
    fill: e;
}
).animate(a).attr( {
    fill: i;
}
);
}}]), t;
}(), bn=function() {
    function t(e) {
    Ja(this, t), this.ctx=e, this.w=e.w;
}
return ts(t, [ {
    key: "drawYAxisTexts", value:function(t, e, i, a) {
    var s=this.w, n=s.config.yaxis[0], o=s.globals.yLabelFormatters[0];
    return new us(this.ctx).drawText( {
    x: t+n.labels.offsetX, y:e+n.labels.offsetY, text:o(a, i), textAnchor:"middle", fontSize:n.labels.style.fontSize, fontFamily:n.labels.style.fontFamily, foreColor:Array.isArray(n.labels.style.colors)?n.labels.style.colors[i]:n.labels.style.colors;
}
);
}}]), t;
}(), vn=function() {
    function t(e) {
    Ja(this, t), this.ctx=e, this.w=e.w;
    var i=this.w;
    this.chartType=this.w.config.chart.type, this.initialAnim=this.w.config.chart.animations.enabled, this.dynamicAnim=this.initialAnim&&this.w.config.chart.animations.dynamicAnimation.enabled, this.animBeginArr=[0], this.animDur=0, this.donutDataLabels=this.w.config.plotOptions.pie.donut.labels, this.lineColorArr=void 0!==i.globals.stroke.colors?i.globals.stroke.colors: i.globals.colors, this.defaultSize=Math.min(i.globals.gridWidth, i.globals.gridHeight), this.centerY=this.defaultSize/2, this.centerX=i.globals.gridWidth/2, "radialBar"===i.config.chart.type?this.fullAngle=360:this.fullAngle=Math.abs(i.config.plotOptions.pie.endAngle-i.config.plotOptions.pie.startAngle), this.initialAngle=i.config.plotOptions.pie.startAngle%this.fullAngle, i.globals.radialSize=this.defaultSize/2.05-i.config.stroke.width-(i.config.chart.sparkline.enabled?0:i.config.chart.dropShadow.blur), this.donutSize=i.globals.radialSize*parseInt(i.config.plotOptions.pie.donut.size, 10)/100, this.maxY=0, this.sliceLabels=[], this.sliceSizes=[], this.prevSectorAngleArr=[];
}
return ts(t, [ {
    key: "draw", value:function(t) {
    var e=this, i=this.w, a=new us(this.ctx);
    if(this.ret=a.group( {
    class: "apexcharts-pie"}
), i.globals.noData)return this.ret;
    for(var s=0, n=0;
    n<t.length;
    n++)s+=cs.negToZero(t[n]);
    var o=[], r=a.group();
    0===s&&(s=1e-5), t.forEach((function(t) {
    e.maxY=Math.max(e.maxY, t);
}
)), i.config.yaxis[0].max&&(this.maxY=i.config.yaxis[0].max), "back"===i.config.grid.position&&"polarArea"===this.chartType&&this.drawPolarElements(this.ret);
    for(var l=0;
    l<t.length;
    l++) {
    var c=this.fullAngle*cs.negToZero(t[l])/s;
    o.push(c), "polarArea"===this.chartType?(o[l]=this.fullAngle/t.length, this.sliceSizes.push(i.globals.radialSize*t[l]/this.maxY)): this.sliceSizes.push(i.globals.radialSize);
}
if(i.globals.dataChanged) {
    for(var h, d=0, u=0;
    u<i.globals.previousPaths.length;
    u++)d+=cs.negToZero(i.globals.previousPaths[u]);
    for(var g=0;
    g<i.globals.previousPaths.length;
    g++)h=this.fullAngle*cs.negToZero(i.globals.previousPaths[g])/d, this.prevSectorAngleArr.push(h);
}
this.donutSize<0&&(this.donutSize=0);
    var f=i.config.plotOptions.pie.customScale, p=i.globals.gridWidth/2, x=i.globals.gridHeight/2, m=p-i.globals.gridWidth/2*f, b=x-i.globals.gridHeight/2*f;
    if("donut"===this.chartType) {
    var v=a.drawCircle(this.donutSize);
    v.attr( {
    cx: this.centerX, cy:this.centerY, fill:i.config.plotOptions.pie.donut.background?i.config.plotOptions.pie.donut.background:"transparent"}
), r.add(v);
}var y=this.drawArcs(o, t);
    if(this.sliceLabels.forEach((function(t) {
    y.add(t);
}
)), r.attr( {
    transform: "translate(".concat(m, ",  ").concat(b, ") scale(").concat(f, ")");
}
), r.add(y), this.ret.add(r), this.donutDataLabels.show) {
    var w=this.renderInnerDataLabels(this.donutDataLabels,  {
    hollowSize: this.donutSize, centerX:this.centerX, centerY:this.centerY, opacity:this.donutDataLabels.show, translateX:m, translateY:b;
}
);
    this.ret.add(w);
}
return"front"===i.config.grid.position&&"polarArea"===this.chartType&&this.drawPolarElements(this.ret), this.ret;
}},  {
    key: "drawArcs", value:function(t, e) {
    var i=this.w, a=new ds(this.ctx), s=new us(this.ctx), n=new ws(this.ctx), o=s.group( {
    class: "apexcharts-slices"}
), r=this.initialAngle, l=this.initialAngle, c=this.initialAngle, h=this.initialAngle;
    this.strokeWidth=i.config.stroke.show?i.config.stroke.width: 0;
    for(var d=0;
    d<t.length;
    d++) {
    var u=s.group( {
    class: "apexcharts-series apexcharts-pie-series", seriesName:cs.escapeString(i.globals.seriesNames[d]), rel:d+1, "data:realIndex":d;
}
);
    o.add(u), l=h, c=(r=c)+t[d], h=l+this.prevSectorAngleArr[d];
    var g=c<r?this.fullAngle+c-r: c-r, f=n.fillPath( {
    seriesNumber: d, size:this.sliceSizes[d], value:e[d];
}
), p=this.getChangedPath(l, h), x=s.drawPath( {
    d: p, stroke:Array.isArray(this.lineColorArr)?this.lineColorArr[d]:this.lineColorArr, strokeWidth:0, fill:f, fillOpacity:i.config.fill.opacity, classes:"apexcharts-pie-area apexcharts-".concat(this.chartType.toLowerCase(), "-slice-").concat(d);
}
);
    if(x.attr( {
    index: 0, j:d;
}
), a.setSelectionFilter(x, 0, d), i.config.chart.dropShadow.enabled) {
    var m=i.config.chart.dropShadow;
    a.dropShadow(x, m, d);
}
this.addListeners(x, this.donutDataLabels), us.setAttrs(x.node,  {
    "data: angle":g, "data:startAngle":r, "data:strokeWidth":this.strokeWidth, "data:value":e[d];
}
);
    var b= {
    x: 0, y:0;
}
;
    "pie"===this.chartType||"polarArea"===this.chartType?b=cs.polarToCartesian(this.centerX, this.centerY, i.globals.radialSize/1.25+i.config.plotOptions.pie.dataLabels.offset, (r+g/2)%this.fullAngle): "donut"===this.chartType&&(b=cs.polarToCartesian(this.centerX, this.centerY, (i.globals.radialSize+this.donutSize)/2+i.config.plotOptions.pie.dataLabels.offset, (r+g/2)%this.fullAngle)), u.add(x);
    var v=0;
    if(!this.initialAnim||i.globals.resized||i.globals.dataChanged?this.animBeginArr.push(0): (0==(v=g/this.fullAngle*i.config.chart.animations.speed)&&(v=1), this.animDur=v+this.animDur, this.animBeginArr.push(this.animDur)), this.dynamicAnim&&i.globals.dataChanged?this.animatePaths(x,  {
    size: this.sliceSizes[d], endAngle:c, startAngle:r, prevStartAngle:l, prevEndAngle:h, animateStartingPos:!0, i:d, animBeginArr:this.animBeginArr, shouldSetPrevPaths:!0, dur:i.config.chart.animations.dynamicAnimation.speed;
}
):this.animatePaths(x,  {
    size: this.sliceSizes[d], endAngle:c, startAngle:r, i:d, totalItems:t.length-1, animBeginArr:this.animBeginArr, dur:v;
}
), i.config.plotOptions.pie.expandOnClick&&"polarArea"!==this.chartType&&x.click(this.pieClicked.bind(this, d)), void 0!==i.globals.selectedDataPoints[0]&&i.globals.selectedDataPoints[0].indexOf(d)>-1&&this.pieClicked(d), i.config.dataLabels.enabled) {
    var y=b.x, w=b.y, k=100*g/this.fullAngle+"%";
    if(0!==g&&i.config.plotOptions.pie.dataLabels.minAngleToShowLabel<t[d]) {
    var A=i.config.dataLabels.formatter;
    void 0!==A&&(k=A(i.globals.seriesPercent[d][0],  {
    seriesIndex: d, w:i;
}
));
    var C=i.globals.dataLabels.style.colors[d], S=s.group( {
    class: "apexcharts-datalabels"}
), E=s.drawText( {
    x: y, y:w, text:k, textAnchor:"middle", fontSize:i.config.dataLabels.style.fontSize, fontFamily:i.config.dataLabels.style.fontFamily, fontWeight:i.config.dataLabels.style.fontWeight, foreColor:C;
}
);
    if(S.add(E), i.config.dataLabels.dropShadow.enabled) {
    var L=i.config.dataLabels.dropShadow;
    a.dropShadow(E, L);
}
E.node.classList.add("apexcharts-pie-label"), i.config.chart.animations.animate&&!1===i.globals.resized&&(E.node.classList.add("apexcharts-pie-label-delay"), E.node.style.animationDelay=i.config.chart.animations.speed/940+"s"), this.sliceLabels.push(S);
}}}return o;
}},  {
    key: "addListeners", value:function(t, e) {
    var i=new us(this.ctx);
    t.node.addEventListener("mouseenter", i.pathMouseEnter.bind(this, t)), t.node.addEventListener("mouseleave", i.pathMouseLeave.bind(this, t)), t.node.addEventListener("mouseleave", this.revertDataLabelsInner.bind(this, t.node, e)), t.node.addEventListener("mousedown", i.pathMouseDown.bind(this, t)), this.donutDataLabels.total.showAlways||(t.node.addEventListener("mouseenter", this.printDataLabelsInner.bind(this, t.node, e)), t.node.addEventListener("mousedown", this.printDataLabelsInner.bind(this, t.node, e)));
}
},  {
    key: "animatePaths", value:function(t, e) {
    var i=this.w, a=e.endAngle<e.startAngle?this.fullAngle+e.endAngle-e.startAngle: e.endAngle-e.startAngle, s=a, n=e.startAngle, o=e.startAngle;
    void 0!==e.prevStartAngle&&void 0!==e.prevEndAngle&&(n=e.prevEndAngle, s=e.prevEndAngle<e.prevStartAngle?this.fullAngle+e.prevEndAngle-e.prevStartAngle: e.prevEndAngle-e.prevStartAngle), e.i===i.config.series.length-1&&(a+o>this.fullAngle?e.endAngle=e.endAngle-(a+o):a+o<this.fullAngle&&(e.endAngle=e.endAngle+(this.fullAngle-(a+o)))), a===this.fullAngle&&(a=this.fullAngle-.01), this.animateArc(t, n, o, a, s, e);
}
},  {
    key: "animateArc", value:function(t, e, i, a, s, n) {
    var o, r=this, l=this.w, c=new hs(this.ctx), h=n.size;
    (isNaN(e)||isNaN(s))&&(e=i, s=a, n.dur=0);
    var d=a, u=i, g=e<i?this.fullAngle+e-i: e-i;
    l.globals.dataChanged&&n.shouldSetPrevPaths&&n.prevEndAngle&&(o=r.getPiePath( {
    me: r, startAngle:n.prevStartAngle, angle:n.prevEndAngle<n.prevStartAngle?this.fullAngle+n.prevEndAngle-n.prevStartAngle:n.prevEndAngle-n.prevStartAngle, size:h;
}
), t.attr( {
    d: o;
}
)), 0!==n.dur?t.animate(n.dur, l.globals.easing, n.animBeginArr[n.i]).afterAll((function() {
    "pie"!==r.chartType&&"donut"!==r.chartType&&"polarArea"!==r.chartType||this.animate(l.config.chart.animations.dynamicAnimation.speed).attr( {
    "stroke-width": r.strokeWidth;
}
), n.i===l.config.series.length-1&&c.animationCompleted(t);
})).during((function(l) {
    d=g+(a-g)*l, n.animateStartingPos&&(d=s+(a-s)*l, u=e-s+(i-(e-s))*l), o=r.getPiePath( {
    me: r, startAngle:u, angle:d, size:h;
}
), t.node.setAttribute("data:pathOrig", o), t.attr( {
    d: o;
}
);
})):(o=r.getPiePath( {
    me: r, startAngle:u, angle:a, size:h;
}
), n.isTrack||(l.globals.animationEnded=!0), t.node.setAttribute("data:pathOrig", o), t.attr( {
    d: o, "stroke-width":r.strokeWidth;
}
));
}},  {
    key: "pieClicked", value:function(t) {
    var e, i=this.w, a=this, s=a.sliceSizes[t]+(i.config.plotOptions.pie.expandOnClick?4: 0), n=i.globals.dom.Paper.select(".apexcharts-".concat(a.chartType.toLowerCase(), "-slice-").concat(t)).members[0];
    if("true"!==n.attr("data: pieClicked")) {
    var o=i.globals.dom.baseEl.getElementsByClassName("apexcharts-pie-area");
    Array.prototype.forEach.call(o, (function(t) {
    t.setAttribute("data: pieClicked", "false");
    var e=t.getAttribute("data: pathOrig");
    t.setAttribute("d", e);
}
)), n.attr("data: pieClicked", "true");
    var r=parseInt(n.attr("data: startAngle"), 10), l=parseInt(n.attr("data:angle"), 10);
    e=a.getPiePath( {
    me: a, startAngle:r, angle:l, size:s;
}
), 360!==l&&n.plot(e);
}else {
    n.attr( {
    "data: pieClicked":"false"}
), this.revertDataLabelsInner(n.node, this.donutDataLabels);
    var c=n.attr("data: pathOrig");
    n.attr( {
    d: c;
}
);
}}},  {
    key: "getChangedPath", value:function(t, e) {
    var i="";
    return this.dynamicAnim&&this.w.globals.dataChanged&&(i=this.getPiePath( {
    me: this, startAngle:t, angle:e-t, size:this.size;
}
)), i;
}},  {
    key: "getPiePath", value:function(t) {
    var e=t.me, i=t.startAngle, a=t.angle, s=t.size, n=i, o=Math.PI*(n-90)/180, r=a+i;
    Math.ceil(r)>=this.fullAngle+this.w.config.plotOptions.pie.startAngle%this.fullAngle&&(r=this.fullAngle+this.w.config.plotOptions.pie.startAngle%this.fullAngle-.01), Math.ceil(r)>this.fullAngle&&(r-=this.fullAngle);
    var l=Math.PI*(r-90)/180, c=e.centerX+s*Math.cos(o), h=e.centerY+s*Math.sin(o), d=e.centerX+s*Math.cos(l), u=e.centerY+s*Math.sin(l), g=cs.polarToCartesian(e.centerX, e.centerY, e.donutSize, r), f=cs.polarToCartesian(e.centerX, e.centerY, e.donutSize, n), p=a>180?1: 0, x=["M", c, h, "A", s, s, 0, p, 1, d, u];
    return"donut"===e.chartType?[].concat(x, ["L", g.x, g.y, "A", e.donutSize, e.donutSize, 0, p, 0, f.x, f.y, "L", c, h, "z"]).join(" "): "pie"===e.chartType||"polarArea"===e.chartType?[].concat(x, ["L", e.centerX, e.centerY, "L", c, h]).join(" "):[].concat(x).join(" ");
}
},  {
    key: "drawPolarElements", value:function(t) {
    var e=this.w, i=new Rs(this.ctx), a=new us(this.ctx), s=new bn(this.ctx), n=a.group(), o=a.group(), r=i.niceScale(0, Math.ceil(this.maxY), e.config.yaxis[0].tickAmount, 0, !0), l=r.result.reverse(), c=r.result.length;
    this.maxY=r.niceMax;
    for(var h=e.globals.radialSize, d=h/(c-1), u=0;
    u<c-1;
    u++) {
    var g=a.drawCircle(h);
    if(g.attr( {
    cx: this.centerX, cy:this.centerY, fill:"none", "stroke-width":e.config.plotOptions.polarArea.rings.strokeWidth, stroke:e.config.plotOptions.polarArea.rings.strokeColor;
}
), e.config.yaxis[0].show) {
    var f=s.drawYAxisTexts(this.centerX, this.centerY-h+parseInt(e.config.yaxis[0].labels.style.fontSize, 10)/2, u, l[u]);
    o.add(f);
}
n.add(g), h-=d;
}this.drawSpokes(t), t.add(n), t.add(o);
}},  {
    key: "renderInnerDataLabels", value:function(t, e) {
    var i=this.w, a=new us(this.ctx), s=a.group( {
    class: "apexcharts-datalabels-group", transform:"translate(".concat(e.translateX?e.translateX:0, ",  ").concat(e.translateY?e.translateY:0, ") scale(").concat(i.config.plotOptions.pie.customScale, ")");
}
), n=t.total.show;
    s.node.style.opacity=e.opacity;
    var o, r, l=e.centerX, c=e.centerY;
    o=void 0===t.name.color?i.globals.colors[0]: t.name.color;
    var h=t.name.fontSize, d=t.name.fontFamily, u=t.name.fontWeight;
    r=void 0===t.value.color?i.config.chart.foreColor: t.value.color;
    var g=t.value.formatter, f="", p="";
    if(n?(o=t.total.color, h=t.total.fontSize, d=t.total.fontFamily, u=t.total.fontWeight, p=t.total.label, f=t.total.formatter(i)): 1===i.globals.series.length&&(f=g(i.globals.series[0], i), p=i.globals.seriesNames[0]), p&&(p=t.name.formatter(p, t.total.show, i)), t.name.show) {
    var x=a.drawText( {
    x: l, y:c+parseFloat(t.name.offsetY), text:p, textAnchor:"middle", foreColor:o, fontSize:h, fontWeight:u, fontFamily:d;
}
);
    x.node.classList.add("apexcharts-datalabel-label"), s.add(x);
}
if(t.value.show) {
    var m=t.name.show?parseFloat(t.value.offsetY)+16: t.value.offsetY, b=a.drawText( {
    x: l, y:c+m, text:f, textAnchor:"middle", foreColor:r, fontWeight:t.value.fontWeight, fontSize:t.value.fontSize, fontFamily:t.value.fontFamily;
}
);
    b.node.classList.add("apexcharts-datalabel-value"), s.add(b);
}
return s;
}},  {
    key: "printInnerLabels", value:function(t, e, i, a) {
    var s, n=this.w;
    a?s=void 0===t.name.color?n.globals.colors[parseInt(a.parentNode.getAttribute("rel"), 10)-1]: t.name.color:n.globals.series.length>1&&t.total.show&&(s=t.total.color);
    var o=n.globals.dom.baseEl.querySelector(".apexcharts-datalabel-label"), r=n.globals.dom.baseEl.querySelector(".apexcharts-datalabel-value");
    i=(0, t.value.formatter)(i, n), a||"function"!=typeof t.total.formatter||(i=t.total.formatter(n));
    var l=e===t.total.label;
    e=t.name.formatter(e, l, n), null!==o&&(o.textContent=e), null!==r&&(r.textContent=i), null!==o&&(o.style.fill=s);
}
},  {
    key: "printDataLabelsInner", value:function(t, e) {
    var i=this.w, a=t.getAttribute("data: value"), s=i.globals.seriesNames[parseInt(t.parentNode.getAttribute("rel"), 10)-1];
    i.globals.series.length>1&&this.printInnerLabels(e, s, a, t);
    var n=i.globals.dom.baseEl.querySelector(".apexcharts-datalabels-group");
    null!==n&&(n.style.opacity=1);
}
},  {
    key: "drawSpokes", value:function(t) {
    var e=this, i=this.w, a=new us(this.ctx), s=i.config.plotOptions.polarArea.spokes;
    if(0!==s.strokeWidth) {
    for(var n=[], o=360/i.globals.series.length, r=0;
    r<i.globals.series.length;
    r++)n.push(cs.polarToCartesian(this.centerX, this.centerY, i.globals.radialSize, i.config.plotOptions.pie.startAngle+o*r));
    n.forEach((function(i, n) {
    var o=a.drawLine(i.x, i.y, e.centerX, e.centerY, Array.isArray(s.connectorColors)?s.connectorColors[n]: s.connectorColors);
    t.add(o);
}
));
}}},  {
    key: "revertDataLabelsInner", value:function(t, e, i) {
    var a=this, s=this.w, n=s.globals.dom.baseEl.querySelector(".apexcharts-datalabels-group"), o=!1, r=s.globals.dom.baseEl.getElementsByClassName("apexcharts-pie-area"), l=function(t) {
    var i=t.makeSliceOut, s=t.printLabel;
    Array.prototype.forEach.call(r, (function(t) {
    "true"===t.getAttribute("data: pieClicked")&&(i&&(o=!0), s&&a.printDataLabelsInner(t, e));
}
));
};
    if(l( {
    makeSliceOut: !0, printLabel:!1;
}
), e.total.show&&s.globals.series.length>1)o&&!e.total.showAlways?l( {
    makeSliceOut: !1, printLabel:!0;
}
):this.printInnerLabels(e, e.total.label, e.total.formatter(s));
    else if(l( {
    makeSliceOut: !1, printLabel:!0;
}
), !o)if(s.globals.selectedDataPoints.length&&s.globals.series.length>1)if(s.globals.selectedDataPoints[0].length>0) {
    var c=s.globals.selectedDataPoints[0], h=s.globals.dom.baseEl.querySelector(".apexcharts-".concat(this.chartType.toLowerCase(), "-slice-").concat(c));
    this.printDataLabelsInner(h, e);
}
else n&&s.globals.selectedDataPoints.length&&0===s.globals.selectedDataPoints[0].length&&(n.style.opacity=0);
    else n&&s.globals.series.length>1&&(n.style.opacity=0);
}
}]), t;
}(), yn=function() {
    function t(e) {
    Ja(this, t), this.ctx=e, this.w=e.w, this.chartType=this.w.config.chart.type, this.initialAnim=this.w.config.chart.animations.enabled, this.dynamicAnim=this.initialAnim&&this.w.config.chart.animations.dynamicAnimation.enabled, this.animDur=0;
    var i=this.w;
    this.graphics=new us(this.ctx), this.lineColorArr=void 0!==i.globals.stroke.colors?i.globals.stroke.colors: i.globals.colors, this.defaultSize=i.globals.svgHeight<i.globals.svgWidth?i.globals.gridHeight+1.5*i.globals.goldenPadding:i.globals.gridWidth, this.isLog=i.config.yaxis[0].logarithmic, this.coreUtils=new ps(this.ctx), this.maxValue=this.isLog?this.coreUtils.getLogVal(i.globals.maxY, 0):i.globals.maxY, this.minValue=this.isLog?this.coreUtils.getLogVal(this.w.globals.minY, 0):i.globals.minY, this.polygons=i.config.plotOptions.radar.polygons, this.strokeWidth=i.config.stroke.show?i.config.stroke.width:0, this.size=this.defaultSize/2.1-this.strokeWidth-i.config.chart.dropShadow.blur, i.config.xaxis.labels.show&&(this.size=this.size-i.globals.xAxisLabelsWidth/1.75), void 0!==i.config.plotOptions.radar.size&&(this.size=i.config.plotOptions.radar.size), this.dataRadiusOfPercent=[], this.dataRadius=[], this.angleArr=[], this.yaxisLabelsTextsPos=[];
}
return ts(t, [ {
    key: "draw", value:function(t) {
    var e=this, i=this.w, a=new ws(this.ctx), s=[], n=new Cs(this.ctx);
    t.length&&(this.dataPointsLen=t[i.globals.maxValsInArrayIndex].length), this.disAngle=2*Math.PI/this.dataPointsLen;
    var o=i.globals.gridWidth/2, r=i.globals.gridHeight/2, l=o+i.config.plotOptions.radar.offsetX, c=r+i.config.plotOptions.radar.offsetY, h=this.graphics.group( {
    class: "apexcharts-radar-series apexcharts-plot-series", transform:"translate(".concat(l||0, ",  ").concat(c||0, ")");
}
), d=[], u=null, g=null;
    if(this.yaxisLabels=this.graphics.group( {
    class: "apexcharts-yaxis"}
), t.forEach((function(t, o) {
    var r=t.length===i.globals.dataPoints, l=e.graphics.group().attr( {
    class: "apexcharts-series", "data:longestSeries":r, seriesName:cs.escapeString(i.globals.seriesNames[o]), rel:o+1, "data:realIndex":o;
}
);
    e.dataRadiusOfPercent[o]=[], e.dataRadius[o]=[], e.angleArr[o]=[], t.forEach((function(t, i) {
    var a=Math.abs(e.maxValue-e.minValue);
    t+=Math.abs(e.minValue), e.isLog&&(t=e.coreUtils.getLogVal(t, 0)), e.dataRadiusOfPercent[o][i]=t/a, e.dataRadius[o][i]=e.dataRadiusOfPercent[o][i]*e.size, e.angleArr[o][i]=i*e.disAngle;
}
)), d=e.getDataPointsPos(e.dataRadius[o], e.angleArr[o]);
    var c=e.createPaths(d,  {
    x: 0, y:0;
}
);
    u=e.graphics.group( {
    class: "apexcharts-series-markers-wrap apexcharts-element-hidden"}
), g=e.graphics.group( {
    class: "apexcharts-datalabels", "data:realIndex":o;
}
), i.globals.delayedElements.push( {
    el: u.node, index:o;
}
);
    var h= {
    i: o, realIndex:o, animationDelay:o, initialSpeed:i.config.chart.animations.speed, dataChangeSpeed:i.config.chart.animations.dynamicAnimation.speed, className:"apexcharts-radar", shouldClipToGrid:!1, bindEventsOnPaths:!1, stroke:i.globals.stroke.colors[o], strokeLineCap:i.config.stroke.lineCap;
}
, f=null;
    i.globals.previousPaths.length>0&&(f=e.getPreviousPath(o));
    for(var p=0;
    p<c.linePathsTo.length;
    p++) {
    var x=e.graphics.renderPaths(Za(Za( {
}
, h),  {
}
,  {
    pathFrom: null===f?c.linePathsFrom[p]:f, pathTo:c.linePathsTo[p], strokeWidth:Array.isArray(e.strokeWidth)?e.strokeWidth[o]:e.strokeWidth, fill:"none", drawShadow:!1;
}
));
    l.add(x);
    var m=a.fillPath( {
    seriesNumber: o;
}
), b=e.graphics.renderPaths(Za(Za( {
}
, h),  {
}
,  {
    pathFrom: null===f?c.areaPathsFrom[p]:f, pathTo:c.areaPathsTo[p], strokeWidth:0, fill:m, drawShadow:!1;
}
));
    if(i.config.chart.dropShadow.enabled) {
    var v=new ds(e.ctx), y=i.config.chart.dropShadow;
    v.dropShadow(b, Object.assign( {
}
, y,  {
    noUserSpaceOnUse: !0;
}
), o);
}l.add(b);
}t.forEach((function(t, a) {
    var s=new ks(e.ctx).getMarkerConfig( {
    cssClass: "apexcharts-marker", seriesIndex:o, dataPointIndex:a;
}
), r=e.graphics.drawMarker(d[a].x, d[a].y, s);
    r.attr("rel", a), r.attr("j", a), r.attr("index", o), r.node.setAttribute("default-marker-size", s.pSize);
    var c=e.graphics.group( {
    class: "apexcharts-series-markers"}
);
    c&&c.add(r), u.add(c), l.add(u);
    var h=i.config.dataLabels;
    if(h.enabled) {
    var f=h.formatter(i.globals.series[o][a],  {
    seriesIndex: o, dataPointIndex:a, w:i;
}
);
    n.plotDataLabelsText( {
    x: d[a].x, y:d[a].y, text:f, textAnchor:"middle", i:o, j:o, parent:g, offsetCorrection:!1, dataLabelsConfig:Za( {
}
, h);
}
);
}l.add(g);
})), s.push(l);
})), this.drawPolygons( {
    parent: h;
}
), i.config.xaxis.labels.show) {
    var f=this.drawXAxisTexts();
    h.add(f);
}
return s.forEach((function(t) {
    h.add(t);
}
)), h.add(this.yaxisLabels), h;
}},  {
    key: "drawPolygons", value:function(t) {
    for(var e=this, i=this.w, a=t.parent, s=new bn(this.ctx), n=i.globals.yAxisScale[0].result.reverse(), o=n.length, r=[], l=this.size/(o-1), c=0;
    c<o;
    c++)r[c]=l*c;
    r.reverse();
    var h=[], d=[];
    r.forEach((function(t, i) {
    var a=cs.getPolygonPos(t, e.dataPointsLen), s="";
    a.forEach((function(t, a) {
    if(0===i) {
    var n=e.graphics.drawLine(t.x, t.y, 0, 0, Array.isArray(e.polygons.connectorColors)?e.polygons.connectorColors[a]: e.polygons.connectorColors);
    d.push(n);
}
0===a&&e.yaxisLabelsTextsPos.push( {
    x: t.x, y:t.y;
}
), s+=t.x+", "+t.y+" "})), h.push(s);
})), h.forEach((function(t, s) {
    var n=e.polygons.strokeColors, o=e.polygons.strokeWidth, r=e.graphics.drawPolygon(t, Array.isArray(n)?n[s]: n, Array.isArray(o)?o[s]:o, i.globals.radarPolygons.fill.colors[s]);
    a.add(r);
}
)), d.forEach((function(t) {
    a.add(t);
}
)), i.config.yaxis[0].show&&this.yaxisLabelsTextsPos.forEach((function(t, i) {
    var a=s.drawYAxisTexts(t.x, t.y, i, n[i]);
    e.yaxisLabels.add(a);
}
));
}},  {
    key: "drawXAxisTexts", value:function() {
    var t=this, e=this.w, i=e.config.xaxis.labels, a=this.graphics.group( {
    class: "apexcharts-xaxis"}
), s=cs.getPolygonPos(this.size, this.dataPointsLen);
    return e.globals.labels.forEach((function(n, o) {
    var r=e.config.xaxis.labels.formatter, l=new Cs(t.ctx);
    if(s[o]) {
    var c=t.getTextPos(s[o], t.size), h=r(n,  {
    seriesIndex: -1, dataPointIndex:o, w:e;
}
);
    l.plotDataLabelsText( {
    x: c.newX, y:c.newY, text:h, textAnchor:c.textAnchor, i:o, j:o, parent:a, color:Array.isArray(i.style.colors)&&i.style.colors[o]?i.style.colors[o]:"#a8a8a8", dataLabelsConfig:Za( {
    textAnchor: c.textAnchor, dropShadow: {
    enabled: !1;
}
}, i), offsetCorrection:!1;
});
}})), a;
}},  {
    key: "createPaths", value:function(t, e) {
    var i=this, a=[], s=[], n=[], o=[];
    if(t.length) {
    s=[this.graphics.move(e.x, e.y)], o=[this.graphics.move(e.x, e.y)];
    var r=this.graphics.move(t[0].x, t[0].y), l=this.graphics.move(t[0].x, t[0].y);
    t.forEach((function(e, a) {
    r+=i.graphics.line(e.x, e.y), l+=i.graphics.line(e.x, e.y), a===t.length-1&&(r+="Z", l+="Z");
}
)), a.push(r), n.push(l);
}return {
    linePathsFrom: s, linePathsTo:a, areaPathsFrom:o, areaPathsTo:n;
}
}},  {
    key: "getTextPos", value:function(t, e) {
    var i="middle", a=t.x, s=t.y;
    return Math.abs(t.x)>=10?t.x>0?(i="start", a+=10): t.x<0&&(i="end", a-=10):i="middle", Math.abs(t.y)>=e-10&&(t.y<0?s-=10:t.y>0&&(s+=10)),  {
    textAnchor: i, newX:a, newY:s;
}
}},  {
    key: "getPreviousPath", value:function(t) {
    for(var e=this.w, i=null, a=0;
    a<e.globals.previousPaths.length;
    a++) {
    var s=e.globals.previousPaths[a];
    s.paths.length>0&&parseInt(s.realIndex, 10)===parseInt(t, 10)&&void 0!==e.globals.previousPaths[a].paths[0]&&(i=e.globals.previousPaths[a].paths[0].d);
}
return i;
}},  {
    key: "getDataPointsPos", value:function(t, e) {
    var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]: this.dataPointsLen;
    t=t||[], e=e||[];
    for(var a=[], s=0;
    s<i;
    s++) {
    var n= {
}
;
    n.x=t[s]*Math.sin(e[s]), n.y=-t[s]*Math.cos(e[s]), a.push(n);
}
return a;
}}]), t;
}(), wn=function(t) {
    is(i, vn);
    var e=os(i);
    function i(t) {
    var a;
    Ja(this, i), (a=e.call(this, t)).ctx=t, a.w=t.w, a.animBeginArr=[0], a.animDur=0;
    var s=a.w;
    return a.startAngle=s.config.plotOptions.radialBar.startAngle, a.endAngle=s.config.plotOptions.radialBar.endAngle, a.totalAngle=Math.abs(s.config.plotOptions.radialBar.endAngle-s.config.plotOptions.radialBar.startAngle), a.trackStartAngle=s.config.plotOptions.radialBar.track.startAngle, a.trackEndAngle=s.config.plotOptions.radialBar.track.endAngle, a.donutDataLabels=a.w.config.plotOptions.radialBar.dataLabels, a.radialDataLabels=a.donutDataLabels, a.trackStartAngle||(a.trackStartAngle=a.startAngle), a.trackEndAngle||(a.trackEndAngle=a.endAngle), 360===a.endAngle&&(a.endAngle=359.99), a.margin=parseInt(s.config.plotOptions.radialBar.track.margin, 10), a;
}
return ts(i, [ {
    key: "draw", value:function(t) {
    var e=this.w, i=new us(this.ctx), a=i.group( {
    class: "apexcharts-radialbar"}
);
    if(e.globals.noData)return a;
    var s=i.group(), n=this.defaultSize/2, o=e.globals.gridWidth/2, r=this.defaultSize/2.05;
    e.config.chart.sparkline.enabled||(r=r-e.config.stroke.width-e.config.chart.dropShadow.blur);
    var l=e.globals.fill.colors;
    if(e.config.plotOptions.radialBar.track.show) {
    var c=this.drawTracks( {
    size: r, centerX:o, centerY:n, colorArr:l, series:t;
}
);
    s.add(c);
}
var h=this.drawArcs( {
    size: r, centerX:o, centerY:n, colorArr:l, series:t;
}
), d=360;
    e.config.plotOptions.radialBar.startAngle<0&&(d=this.totalAngle);
    var u=(360-d)/360;
    if(e.globals.radialSize=r-r*u, this.radialDataLabels.value.show) {
    var g=Math.max(this.radialDataLabels.value.offsetY, this.radialDataLabels.name.offsetY);
    e.globals.radialSize+=g*u;
}
return s.add(h.g), "front"===e.config.plotOptions.radialBar.hollow.position&&(h.g.add(h.elHollow), h.dataLabels&&h.g.add(h.dataLabels)), a.add(s), a;
}},  {
    key: "drawTracks", value:function(t) {
    var e=this.w, i=new us(this.ctx), a=i.group( {
    class: "apexcharts-tracks"}
), s=new ds(this.ctx), n=new ws(this.ctx), o=this.getStrokeWidth(t);
    t.size=t.size-o/2;
    for(var r=0;
    r<t.series.length;
    r++) {
    var l=i.group( {
    class: "apexcharts-radialbar-track apexcharts-track"}
);
    a.add(l), l.attr( {
    rel: r+1;
}
), t.size=t.size-o-this.margin;
    var c=e.config.plotOptions.radialBar.track, h=n.fillPath( {
    seriesNumber: 0, size:t.size, fillColors:Array.isArray(c.background)?c.background[r]:c.background, solid:!0;
}
), d=this.trackStartAngle, u=this.trackEndAngle;
    Math.abs(u)+Math.abs(d)>=360&&(u=360-Math.abs(this.startAngle)-.1);
    var g=i.drawPath( {
    d: "", stroke:h, strokeWidth:o*parseInt(c.strokeWidth, 10)/100, fill:"none", strokeOpacity:c.opacity, classes:"apexcharts-radialbar-area"}
);
    if(c.dropShadow.enabled) {
    var f=c.dropShadow;
    s.dropShadow(g, f);
}
l.add(g), g.attr("id", "apexcharts-radialbarTrack-"+r), this.animatePaths(g,  {
    centerX: t.centerX, centerY:t.centerY, endAngle:u, startAngle:d, size:t.size, i:r, totalItems:2, animBeginArr:0, dur:0, isTrack:!0, easing:e.globals.easing;
}
);
}return a;
}},  {
    key: "drawArcs", value:function(t) {
    var e=this.w, i=new us(this.ctx), a=new ws(this.ctx), s=new ds(this.ctx), n=i.group(), o=this.getStrokeWidth(t);
    t.size=t.size-o/2;
    var r=e.config.plotOptions.radialBar.hollow.background, l=t.size-o*t.series.length-this.margin*t.series.length-o*parseInt(e.config.plotOptions.radialBar.track.strokeWidth, 10)/100/2, c=l-e.config.plotOptions.radialBar.hollow.margin;
    void 0!==e.config.plotOptions.radialBar.hollow.image&&(r=this.drawHollowImage(t, n, l, r));
    var h=this.drawHollow( {
    size: c, centerX:t.centerX, centerY:t.centerY, fill:r||"transparent"}
);
    if(e.config.plotOptions.radialBar.hollow.dropShadow.enabled) {
    var d=e.config.plotOptions.radialBar.hollow.dropShadow;
    s.dropShadow(h, d);
}
var u=1;
    !this.radialDataLabels.total.show&&e.globals.series.length>1&&(u=0);
    var g=null;
    this.radialDataLabels.show&&(g=this.renderInnerDataLabels(this.radialDataLabels,  {
    hollowSize: l, centerX:t.centerX, centerY:t.centerY, opacity:u;
}
)), "back"===e.config.plotOptions.radialBar.hollow.position&&(n.add(h), g&&n.add(g));
    var f=!1;
    e.config.plotOptions.radialBar.inverseOrder&&(f=!0);
    for(var p=f?t.series.length-1: 0;
    f?p>=0: p<t.series.length;
    f?p--: p++) {
    var x=i.group( {
    class: "apexcharts-series apexcharts-radial-series", seriesName:cs.escapeString(e.globals.seriesNames[p]);
}
);
    n.add(x), x.attr( {
    rel: p+1, "data:realIndex":p;
}
), this.ctx.series.addCollapsedClassToSeries(x, p), t.size=t.size-o-this.margin;
    var m=a.fillPath( {
    seriesNumber: p, size:t.size, value:t.series[p];
}
), b=this.startAngle, v=void 0, y=cs.negToZero(t.series[p]>100?100:t.series[p])/100, w=Math.round(this.totalAngle*y)+this.startAngle, k=void 0;
    e.globals.dataChanged&&(v=this.startAngle, k=Math.round(this.totalAngle*cs.negToZero(e.globals.previousPaths[p])/100)+v), Math.abs(w)+Math.abs(b)>=360&&(w-=.01), Math.abs(k)+Math.abs(v)>=360&&(k-=.01);
    var A=w-b, C=Array.isArray(e.config.stroke.dashArray)?e.config.stroke.dashArray[p]: e.config.stroke.dashArray, S=i.drawPath( {
    d: "", stroke:m, strokeWidth:o, fill:"none", fillOpacity:e.config.fill.opacity, classes:"apexcharts-radialbar-area apexcharts-radialbar-slice-"+p, strokeDashArray:C;
}
);
    if(us.setAttrs(S.node,  {
    "data: angle":A, "data:value":t.series[p];
}
), e.config.chart.dropShadow.enabled) {
    var E=e.config.chart.dropShadow;
    s.dropShadow(S, E, p);
}
s.setSelectionFilter(S, 0, p), this.addListeners(S, this.radialDataLabels), x.add(S), S.attr( {
    index: 0, j:p;
}
);
    var L=0;
    !this.initialAnim||e.globals.resized||e.globals.dataChanged||(L=(w-b)/360*e.config.chart.animations.speed, this.animDur=L/(1.2*t.series.length)+this.animDur, this.animBeginArr.push(this.animDur)), e.globals.dataChanged&&(L=(w-b)/360*e.config.chart.animations.dynamicAnimation.speed, this.animDur=L/(1.2*t.series.length)+this.animDur, this.animBeginArr.push(this.animDur)), this.animatePaths(S,  {
    centerX: t.centerX, centerY:t.centerY, endAngle:w, startAngle:b, prevEndAngle:k, prevStartAngle:v, size:t.size, i:p, totalItems:2, animBeginArr:this.animBeginArr, dur:L, shouldSetPrevPaths:!0, easing:e.globals.easing;
}
);
}return {
    g: n, elHollow:h, dataLabels:g;
}
}},  {
    key: "drawHollow", value:function(t) {
    var e=new us(this.ctx).drawCircle(2*t.size);
    return e.attr( {
    class: "apexcharts-radialbar-hollow", cx:t.centerX, cy:t.centerY, r:t.size, fill:t.fill;
}
), e;
}},  {
    key: "drawHollowImage", value:function(t, e, i, a) {
    var s=this.w, n=new ws(this.ctx), o=cs.randomId(), r=s.config.plotOptions.radialBar.hollow.image;
    if(s.config.plotOptions.radialBar.hollow.imageClipped)n.clippedImgArea( {
    width: i, height:i, image:r, patternID:"pattern".concat(s.globals.cuid).concat(o);
}
), a="url(#pattern".concat(s.globals.cuid).concat(o, ")");
    else {
    var l=s.config.plotOptions.radialBar.hollow.imageWidth, c=s.config.plotOptions.radialBar.hollow.imageHeight;
    if(void 0===l&&void 0===c) {
    var h=s.globals.dom.Paper.image(r).loaded((function(e) {
    this.move(t.centerX-e.width/2+s.config.plotOptions.radialBar.hollow.imageOffsetX, t.centerY-e.height/2+s.config.plotOptions.radialBar.hollow.imageOffsetY);
}
));
    e.add(h);
}
else {
    var d=s.globals.dom.Paper.image(r).loaded((function(e) {
    this.move(t.centerX-l/2+s.config.plotOptions.radialBar.hollow.imageOffsetX, t.centerY-c/2+s.config.plotOptions.radialBar.hollow.imageOffsetY), this.size(l, c);
}
));
    e.add(d);
}
}return a;
}},  {
    key: "getStrokeWidth", value:function(t) {
    var e=this.w;
    return t.size*(100-parseInt(e.config.plotOptions.radialBar.hollow.size, 10))/100/(t.series.length+1)-this.margin;
}
}]), i;
}(), kn=function() {
    function t(e) {
    Ja(this, t), this.w=e.w, this.lineCtx=e;
}
return ts(t, [ {
    key: "sameValueSeriesFix", value:function(t, e) {
    var i=this.w;
    if("line"===i.config.chart.type&&("gradient"===i.config.fill.type||"gradient"===i.config.fill.type[t])&&new ps(this.lineCtx.ctx, i).seriesHaveSameValues(t)) {
    var a=e[t].slice();
    a[a.length-1]=a[a.length-1]+1e-6, e[t]=a;
}
return e;
}},  {
    key: "calculatePoints", value:function(t) {
    var e=t.series, i=t.realIndex, a=t.x, s=t.y, n=t.i, o=t.j, r=t.prevY, l=this.w, c=[], h=[];
    if(0===o) {
    var d=this.lineCtx.categoryAxisCorrection+l.config.markers.offsetX;
    l.globals.isXNumeric&&(d=(l.globals.seriesX[i][0]-l.globals.minX)/this.lineCtx.xRatio+l.config.markers.offsetX), c.push(d), h.push(cs.isNumber(e[n][0])?r+l.config.markers.offsetY: null), c.push(a+l.config.markers.offsetX), h.push(cs.isNumber(e[n][o+1])?s+l.config.markers.offsetY:null);
}
else c.push(a+l.config.markers.offsetX), h.push(cs.isNumber(e[n][o+1])?s+l.config.markers.offsetY:null);
    return {
    x: c, y:h;
}
}},  {
    key: "checkPreviousPaths", value:function(t) {
    for(var e=t.pathFromLine, i=t.pathFromArea, a=t.realIndex, s=this.w, n=0;
    n<s.globals.previousPaths.length;
    n++) {
    var o=s.globals.previousPaths[n];
    ("line"===o.type||"area"===o.type)&&o.paths.length>0&&parseInt(o.realIndex, 10)===parseInt(a, 10)&&("line"===o.type?(this.lineCtx.appendPathFrom=!1, e=s.globals.previousPaths[n].paths[0].d): "area"===o.type&&(this.lineCtx.appendPathFrom=!1, i=s.globals.previousPaths[n].paths[0].d, s.config.stroke.show&&s.globals.previousPaths[n].paths[1]&&(e=s.globals.previousPaths[n].paths[1].d)));
}
return {
    pathFromLine: e, pathFromArea:i;
}
}},  {
    key: "determineFirstPrevY", value:function(t) {
    var e=t.i, i=t.series, a=t.prevY, s=t.lineYPosition, n=this.w;
    if(void 0!==i[e][0])a=(s=n.config.chart.stacked&&e>0?this.lineCtx.prevSeriesY[e-1][0]: this.lineCtx.zeroY)-i[e][0]/this.lineCtx.yRatio[this.lineCtx.yaxisIndex]+2*(this.lineCtx.isReversed?i[e][0]/this.lineCtx.yRatio[this.lineCtx.yaxisIndex]:0);
    else if(n.config.chart.stacked&&e>0&&void 0===i[e][0])for(var o=e-1;
    o>=0;
    o--)if(null!==i[o][0]&&void 0!==i[o][0]) {
    a=s=this.lineCtx.prevSeriesY[o][0];
    break;
}
return {
    prevY: a, lineYPosition:s;
}
}}]), t;
}(), An=function() {
    function t(e, i, a) {
    Ja(this, t), this.ctx=e, this.w=e.w, this.xyRatios=i, this.pointsChart=!("bubble"!==this.w.config.chart.type&&"scatter"!==this.w.config.chart.type)||a, this.scatter=new As(this.ctx), this.noNegatives=this.w.globals.minX===Number.MAX_VALUE, this.lineHelpers=new kn(this), this.markers=new ks(this.ctx), this.prevSeriesY=[], this.categoryAxisCorrection=0, this.yaxisIndex=0;
}
return ts(t, [ {
    key: "draw", value:function(t, e, i) {
    var a=this.w, s=new us(this.ctx), n=a.globals.comboCharts?e: a.config.chart.type, o=s.group( {
    class: "apexcharts-".concat(n, "-series apexcharts-plot-series");
}
), r=new ps(this.ctx, a);
    this.yRatio=this.xyRatios.yRatio, this.zRatio=this.xyRatios.zRatio, this.xRatio=this.xyRatios.xRatio, this.baseLineY=this.xyRatios.baseLineY, t=r.getLogSeries(t), this.yRatio=r.getLogYRatios(this.yRatio);
    for(var l=[], c=0;
    c<t.length;
    c++) {
    t=this.lineHelpers.sameValueSeriesFix(c, t);
    var h=a.globals.comboCharts?i[c]: c;
    this._initSerieVariables(t, c, h);
    var d=[], u=[], g=a.globals.padHorizontal+this.categoryAxisCorrection;
    this.ctx.series.addCollapsedClassToSeries(this.elSeries, h), a.globals.isXNumeric&&a.globals.seriesX.length>0&&(g=(a.globals.seriesX[h][0]-a.globals.minX)/this.xRatio), u.push(g);
    var f, p=g, x=p, m=this.zeroY;
    m=this.lineHelpers.determineFirstPrevY( {
    i: c, series:t, prevY:m, lineYPosition:0;
}
).prevY, d.push(m), f=m;
    var b=this._calculatePathsFrom( {
    series: t, i:c, realIndex:h, prevX:x, prevY:m;
}
), v=this._iterateOverDataPoints( {
    series: t, realIndex:h, i:c, x:g, y:1, pX:p, pY:f, pathsFrom:b, linePaths:[], areaPaths:[], seriesIndex:i, lineYPosition:0, xArrj:u, yArrj:d;
}
);
    this._handlePaths( {
    type: n, realIndex:h, i:c, paths:v;
}
), this.elSeries.add(this.elPointsMain), this.elSeries.add(this.elDataLabelsWrap), l.push(this.elSeries);
}if(a.config.chart.stacked)for(var y=l.length;
    y>0;
    y--)o.add(l[y-1]);
    else for(var w=0;
    w<l.length;
    w++)o.add(l[w]);
    return o;
}
},  {
    key: "_initSerieVariables", value:function(t, e, i) {
    var a=this.w, s=new us(this.ctx);
    this.xDivision=a.globals.gridWidth/(a.globals.dataPoints-("on"===a.config.xaxis.tickPlacement?1: 0)), this.strokeWidth=Array.isArray(a.config.stroke.width)?a.config.stroke.width[i]:a.config.stroke.width, this.yRatio.length>1&&(this.yaxisIndex=i), this.isReversed=a.config.yaxis[this.yaxisIndex]&&a.config.yaxis[this.yaxisIndex].reversed, this.zeroY=a.globals.gridHeight-this.baseLineY[this.yaxisIndex]-(this.isReversed?a.globals.gridHeight:0)+(this.isReversed?2*this.baseLineY[this.yaxisIndex]:0), this.areaBottomY=this.zeroY, (this.zeroY>a.globals.gridHeight||"end"===a.config.plotOptions.area.fillTo)&&(this.areaBottomY=a.globals.gridHeight), this.categoryAxisCorrection=this.xDivision/2, this.elSeries=s.group( {
    class: "apexcharts-series", seriesName:cs.escapeString(a.globals.seriesNames[i]);
}
), this.elPointsMain=s.group( {
    class: "apexcharts-series-markers-wrap", "data:realIndex":i;
}
), this.elDataLabelsWrap=s.group( {
    class: "apexcharts-datalabels", "data:realIndex":i;
}
);
    var n=t[e].length===a.globals.dataPoints;
    this.elSeries.attr( {
    "data: longestSeries":n, rel:e+1, "data:realIndex":i;
}
), this.appendPathFrom=!0;
}},  {
    key: "_calculatePathsFrom", value:function(t) {
    var e, i, a, s, n=t.series, o=t.i, r=t.realIndex, l=t.prevX, c=t.prevY, h=this.w, d=new us(this.ctx);
    if(null===n[o][0]) {
    for(var u=0;
    u<n[o].length;
    u++)if(null!==n[o][u]) {
    l=this.xDivision*u, c=this.zeroY-n[o][u]/this.yRatio[this.yaxisIndex], e=d.move(l, c), i=d.move(l, this.areaBottomY);
    break;
}
}else e=d.move(l, c), i=d.move(l, this.areaBottomY)+d.line(l, c);
    if(a=d.move(-1, this.zeroY)+d.line(-1, this.zeroY), s=d.move(-1, this.zeroY)+d.line(-1, this.zeroY), h.globals.previousPaths.length>0) {
    var g=this.lineHelpers.checkPreviousPaths( {
    pathFromLine: a, pathFromArea:s, realIndex:r;
}
);
    a=g.pathFromLine, s=g.pathFromArea;
}
return {
    prevX: l, prevY:c, linePath:e, areaPath:i, pathFromLine:a, pathFromArea:s;
}
}},  {
    key: "_handlePaths", value:function(t) {
    var e=t.type, i=t.realIndex, a=t.i, s=t.paths, n=this.w, o=new us(this.ctx), r=new ws(this.ctx);
    this.prevSeriesY.push(s.yArrj), n.globals.seriesXvalues[i]=s.xArrj, n.globals.seriesYvalues[i]=s.yArrj;
    var l=n.config.forecastDataPoints;
    if(l.count>0) {
    var c=n.globals.seriesXvalues[i][n.globals.seriesXvalues[i].length-l.count-1], h=o.drawRect(c, 0, n.globals.gridWidth, n.globals.gridHeight, 0);
    n.globals.dom.elForecastMask.appendChild(h.node);
    var d=o.drawRect(0, 0, c, n.globals.gridHeight, 0);
    n.globals.dom.elNonForecastMask.appendChild(d.node);
}
this.pointsChart||n.globals.delayedElements.push( {
    el: this.elPointsMain.node, index:i;
}
);
    var u= {
    i: a, realIndex:i, animationDelay:a, initialSpeed:n.config.chart.animations.speed, dataChangeSpeed:n.config.chart.animations.dynamicAnimation.speed, className:"apexcharts-".concat(e);
}
;
    if("area"===e)for(var g=r.fillPath( {
    seriesNumber: i;
}
), f=0;
    f<s.areaPaths.length;
    f++) {
    var p=o.renderPaths(Za(Za( {
}
, u),  {
}
,  {
    pathFrom: s.pathFromArea, pathTo:s.areaPaths[f], stroke:"none", strokeWidth:0, strokeLineCap:null, fill:g;
}
));
    this.elSeries.add(p);
}
if(n.config.stroke.show&&!this.pointsChart) {
    var x;
    x="line"===e?r.fillPath( {
    seriesNumber: i, i:a;
}
):n.globals.stroke.colors[i];
    for(var m=0;
    m<s.linePaths.length;
    m++) {
    var b=Za(Za( {
}
, u),  {
}
,  {
    pathFrom: s.pathFromLine, pathTo:s.linePaths[m], stroke:x, strokeWidth:this.strokeWidth, strokeLineCap:n.config.stroke.lineCap, fill:"none"}
), v=o.renderPaths(b);
    if(this.elSeries.add(v), l.count>0) {
    var y=o.renderPaths(b);
    y.node.setAttribute("stroke-dasharray", l.dashArray), l.strokeWidth&&y.node.setAttribute("stroke-width", l.strokeWidth), this.elSeries.add(y), y.attr("clip-path", "url(#forecastMask".concat(n.globals.cuid, ")")), v.attr("clip-path", "url(#nonForecastMask".concat(n.globals.cuid, ")"));
}
}}}},  {
    key: "_iterateOverDataPoints", value:function(t) {
    for(var e=t.series, i=t.realIndex, a=t.i, s=t.x, n=t.y, o=t.pX, r=t.pY, l=t.pathsFrom, c=t.linePaths, h=t.areaPaths, d=t.seriesIndex, u=t.lineYPosition, g=t.xArrj, f=t.yArrj, p=this.w, x=new us(this.ctx), m=this.yRatio, b=l.prevY, v=l.linePath, y=l.areaPath, w=l.pathFromLine, k=l.pathFromArea, A=cs.isNumber(p.globals.minYArr[i])?p.globals.minYArr[i]: p.globals.minY, C=p.globals.dataPoints>1?p.globals.dataPoints-1:p.globals.dataPoints, S=0;
    S<C;
    S++) {
    var E=void 0===e[a][S+1]||null===e[a][S+1];
    if(p.globals.isXNumeric) {
    var L=p.globals.seriesX[i][S+1];
    void 0===p.globals.seriesX[i][S+1]&&(L=p.globals.seriesX[i][C-1]), s=(L-p.globals.minX)/this.xRatio;
}
else s+=this.xDivision;
    u=p.config.chart.stacked&&a>0&&p.globals.collapsedSeries.length<p.config.series.length-1?this.prevSeriesY[function(t) {
    for(var e=t, i=0;
    i<p.globals.series.length;
    i++)if(p.globals.collapsedSeriesIndices.indexOf(t)>-1) {
    e--;
    break;
}
return e>=0?e: 0;
}(a-1)][S+1]:this.zeroY, n=E?u-A/m[this.yaxisIndex]+2*(this.isReversed?A/m[this.yaxisIndex]:0):u-e[a][S+1]/m[this.yaxisIndex]+2*(this.isReversed?e[a][S+1]/m[this.yaxisIndex]:0), g.push(s), f.push(n);
    var _=this.lineHelpers.calculatePoints( {
    series: e, x:s, y:n, realIndex:i, i:a, j:S, prevY:b;
}
), M=this._createPaths( {
    series: e, i:a, realIndex:i, j:S, x:s, y:n, pX:o, pY:r, linePath:v, areaPath:y, linePaths:c, areaPaths:h, seriesIndex:d;
}
);
    h=M.areaPaths, c=M.linePaths, o=M.pX, r=M.pY, y=M.areaPath, v=M.linePath, this.appendPathFrom&&(w+=x.line(s, this.zeroY), k+=x.line(s, this.zeroY)), this.handleNullDataPoints(e, _, a, S, i), this._handleMarkersAndLabels( {
    pointsPos: _, series:e, x:s, y:n, prevY:b, i:a, j:S, realIndex:i;
}
);
}return {
    yArrj: f, xArrj:g, pathFromArea:k, areaPaths:h, pathFromLine:w, linePaths:c;
}
}},  {
    key: "_handleMarkersAndLabels", value:function(t) {
    var e=t.pointsPos;
    t.series, t.x, t.y, t.prevY;
    var i=t.i, a=t.j, s=t.realIndex, n=this.w, o=new Cs(this.ctx);
    if(this.pointsChart)this.scatter.draw(this.elSeries, a,  {
    realIndex: s, pointsPos:e, zRatio:this.zRatio, elParent:this.elPointsMain;
}
);
    else {
    n.globals.series[i].length>1&&this.elPointsMain.node.classList.add("apexcharts-element-hidden");
    var r=this.markers.plotChartMarkers(e, s, a+1);
    null!==r&&this.elPointsMain.add(r);
}
var l=o.drawDataLabel(e, s, a+1, null);
    null!==l&&this.elDataLabelsWrap.add(l);
}
},  {
    key: "_createPaths", value:function(t) {
    var e=t.series, i=t.i, a=t.realIndex, s=t.j, n=t.x, o=t.y, r=t.pX, l=t.pY, c=t.linePath, h=t.areaPath, d=t.linePaths, u=t.areaPaths, g=t.seriesIndex, f=this.w, p=new us(this.ctx), x=f.config.stroke.curve, m=this.areaBottomY;
    if(Array.isArray(f.config.stroke.curve)&&(x=Array.isArray(g)?f.config.stroke.curve[g[i]]: f.config.stroke.curve[i]), "smooth"===x) {
    var b=.35*(n-r);
    f.globals.hasNullValues?(null!==e[i][s]&&(null!==e[i][s+1]?(c=p.move(r, l)+p.curve(r+b, l, n-b, o, n+1, o), h=p.move(r+1, l)+p.curve(r+b, l, n-b, o, n+1, o)+p.line(n, m)+p.line(r, m)+"z"): (c=p.move(r, l), h=p.move(r, l)+"z")), d.push(c), u.push(h)):(c+=p.curve(r+b, l, n-b, o, n, o), h+=p.curve(r+b, l, n-b, o, n, o)), r=n, l=o, s===e[i].length-2&&(h=h+p.curve(r, l, n, o, n, m)+p.move(n, o)+"z", f.globals.hasNullValues||(d.push(c), u.push(h)));
}
else {
    if(null===e[i][s+1]) {
    c+=p.move(n, o);
    var v=f.globals.isXNumeric?(f.globals.seriesX[a][s]-f.globals.minX)/this.xRatio: n-this.xDivision;
    h=h+p.line(v, m)+p.move(n, o)+"z"}
null===e[i][s]&&(c+=p.move(n, o), h+=p.move(n, m)), "stepline"===x?(c=c+p.line(n, null, "H")+p.line(null, o, "V"), h=h+p.line(n, null, "H")+p.line(null, o, "V")): "straight"===x&&(c+=p.line(n, o), h+=p.line(n, o)), s===e[i].length-2&&(h=h+p.line(n, m)+p.move(n, o)+"z", d.push(c), u.push(h));
}return {
    linePaths: d, areaPaths:u, pX:r, pY:l, linePath:c, areaPath:h;
}
}},  {
    key: "handleNullDataPoints", value:function(t, e, i, a, s) {
    var n=this.w;
    if(null===t[i][a]&&n.config.markers.showNullDataPoints||1===t[i].length) {
    var o=this.markers.plotChartMarkers(e, s, a+1, this.strokeWidth-n.config.markers.strokeWidth/2, !0);
    null!==o&&this.elPointsMain.add(o);
}
}}]), t;
}();
    window.TreemapSquared= {
}
, window.TreemapSquared.generate=function() {
    function t(e, i, a, s) {
    this.xoffset=e, this.yoffset=i, this.height=s, this.width=a, this.shortestEdge=function() {
    return Math.min(this.height, this.width);
}
, this.getCoordinates=function(t) {
    var e, i=[], a=this.xoffset, s=this.yoffset, o=n(t)/this.height, r=n(t)/this.width;
    if(this.width>=this.height)for(e=0;
    e<t.length;
    e++)i.push([a, s, a+o, s+t[e]/o]), s+=t[e]/o;
    else for(e=0;
    e<t.length;
    e++)i.push([a, s, a+t[e]/r, s+r]), a+=t[e]/r;
    return i;
}
, this.cutArea=function(e) {
    var i;
    if(this.width>=this.height) {
    var a=e/this.height, s=this.width-a;
    i=new t(this.xoffset+a, this.yoffset, s, this.height);
}
else {
    var n=e/this.width, o=this.height-n;
    i=new t(this.xoffset, this.yoffset+n, this.width, o);
}
return i;
}}function e(e, a, s, o, r) {
    return o=void 0===o?0: o, r=void 0===r?0:r, function(t) {
    var e, i, a=[];
    for(e=0;
    e<t.length;
    e++)for(i=0;
    i<t[e].length;
    i++)a.push(t[e][i]);
    return a;
}
(i(function(t, e) {
    var i, a=[], s=e/n(t);
    for(i=0;
    i<t.length;
    i++)a[i]=t[i]*s;
    return a;
}
(e, a*s), [], new t(o, r, a, s), []));
}function i(t, e, s, o) {
    var r, l, c, h, d, u, g;
    if(0!==t.length)return r=s.shortestEdge(), h=e, d=l=t[0], u=r, 0===h.length||((g=h.slice()).push(d), a(h, u)>=a(g, u))?(e.push(l), i(t.slice(1), e, s, o)): (c=s.cutArea(n(e), o), o.push(s.getCoordinates(e)), i(t, [], c, o)), o;
    o.push(s.getCoordinates(e));
}
function a(t, e) {
    var i=Math.min.apply(Math, t), a=Math.max.apply(Math, t), s=n(t);
    return Math.max(Math.pow(e, 2)*a/Math.pow(s, 2), Math.pow(s, 2)/(Math.pow(e, 2)*i));
}
function s(t) {
    return t&&t.constructor===Array;
}
function n(t) {
    var e, i=0;
    for(e=0;
    e<t.length;
    e++)i+=t[e];
    return i;
}
function o(t) {
    var e, i=0;
    if(s(t[0]))for(e=0;
    e<t.length;
    e++)i+=o(t[e]);
    else i=n(t);
    return i;
}
return function t(i, a, n, r, l) {
    r=void 0===r?0: r, l=void 0===l?0:l;
    var c, h, d=[], u=[];
    if(s(i[0])) {
    for(h=0;
    h<i.length;
    h++)d[h]=o(i[h]);
    for(c=e(d, a, n, r, l), h=0;
    h<i.length;
    h++)u.push(t(i[h], c[h][2]-c[h][0], c[h][3]-c[h][1], c[h][0], c[h][1]));
}
else u=e(i, a, n, r, l);
    return u;
}
}();
    var Cn, Sn, En=function() {
    function t(e, i) {
    Ja(this, t), this.ctx=e, this.w=e.w, this.strokeWidth=this.w.config.stroke.width, this.helpers=new xn(e), this.dynamicAnim=this.w.config.chart.animations.dynamicAnimation, this.labels=[];
}
return ts(t, [ {
    key: "draw", value:function(t) {
    var e=this, i=this.w, a=new us(this.ctx), s=new ws(this.ctx), n=a.group( {
    class: "apexcharts-treemap"}
);
    if(i.globals.noData)return n;
    var o=[];
    return t.forEach((function(t) {
    var e=t.map((function(t) {
    return Math.abs(t);
}
));
    o.push(e);
}
)), this.negRange=this.helpers.checkColorRange(), i.config.series.forEach((function(t, i) {
    t.data.forEach((function(t) {
    Array.isArray(e.labels[i])||(e.labels[i]=[]), e.labels[i].push(t.x);
}
));
})), window.TreemapSquared.generate(o, i.globals.gridWidth, i.globals.gridHeight).forEach((function(o, r) {
    var l=a.group( {
    class: "apexcharts-series apexcharts-treemap-series", seriesName:cs.escapeString(i.globals.seriesNames[r]), rel:r+1, "data:realIndex":r;
}
);
    if(i.config.chart.dropShadow.enabled) {
    var c=i.config.chart.dropShadow;
    new ds(e.ctx).dropShadow(n, c, r);
}
var h=a.group( {
    class: "apexcharts-data-labels"}
);
    o.forEach((function(n, o) {
    var c=n[0], h=n[1], d=n[2], u=n[3], g=a.drawRect(c, h, d-c, u-h, 0, "#fff", 1, e.strokeWidth, i.config.plotOptions.treemap.useFillColorAsStroke?p: i.globals.stroke.colors[r]);
    g.attr( {
    cx: c, cy:h, index:r, i:r, j:o, width:d-c, height:u-h;
}
);
    var f=e.helpers.getShadeColor(i.config.chart.type, r, o, e.negRange), p=f.color;
    void 0!==i.config.series[r].data[o]&&i.config.series[r].data[o].fillColor&&(p=i.config.series[r].data[o].fillColor);
    var x=s.fillPath( {
    color: p, seriesNumber:r, dataPointIndex:o;
}
);
    g.node.classList.add("apexcharts-treemap-rect"), g.attr( {
    fill: x;
}
), e.helpers.addListeners(g);
    var m= {
    x: c+(d-c)/2, y:h+(u-h)/2, width:0, height:0;
}
, b= {
    x: c, y:h, width:d-c, height:u-h;
}
;
    if(i.config.chart.animations.enabled&&!i.globals.dataChanged) {
    var v=1;
    i.globals.resized||(v=i.config.chart.animations.speed), e.animateTreemap(g, m, b, v);
}
if(i.globals.dataChanged) {
    var y=1;
    e.dynamicAnim.enabled&&i.globals.shouldAnimate&&(y=e.dynamicAnim.speed, i.globals.previousPaths[r]&&i.globals.previousPaths[r][o]&&i.globals.previousPaths[r][o].rect&&(m=i.globals.previousPaths[r][o].rect), e.animateTreemap(g, m, b, y));
}
var w=e.getFontSize(n), k=i.config.dataLabels.formatter(e.labels[r][o],  {
    value: i.globals.series[r][o], seriesIndex:r, dataPointIndex:o, w:i;
}
), A=e.helpers.calculateDataLabels( {
    text: k, x:(c+d)/2, y:(h+u)/2+e.strokeWidth/2+w/3, i:r, j:o, colorProps:f, fontSize:w, series:t;
}
);
    i.config.dataLabels.enabled&&A&&e.rotateToFitLabel(A, k, c, h, d, u), l.add(g), null!==A&&l.add(A);
}
)), l.add(h), n.add(l);
})), n;
}},  {
    key: "getFontSize", value:function(t) {
    var e, i, a=this.w, s=function t(e) {
    var i, a=0;
    if(Array.isArray(e[0]))for(i=0;
    i<e.length;
    i++)a+=t(e[i]);
    else for(i=0;
    i<e.length;
    i++)a+=e[i].length;
    return a;
}
(this.labels)/function t(e) {
    var i, a=0;
    if(Array.isArray(e[0]))for(i=0;
    i<e.length;
    i++)a+=t(e[i]);
    else for(i=0;
    i<e.length;
    i++)a+=1;
    return a;
}
(this.labels);
    return e=(t[2]-t[0])*(t[3]-t[1]), i=Math.pow(e, .5), Math.min(i/s, parseInt(a.config.dataLabels.style.fontSize, 10));
}
},  {
    key: "rotateToFitLabel", value:function(t, e, i, a, s, n) {
    var o=new us(this.ctx), r=o.getTextRects(e);
    if(r.width+5>s-i&&r.width<=n-a) {
    var l=o.rotateAroundCenter(t.node);
    t.node.setAttribute("transform", "rotate(-90 ".concat(l.x, " ").concat(l.y, ")"));
}
}},  {
    key: "animateTreemap", value:function(t, e, i, a) {
    var s=new hs(this.ctx);
    s.animateRect(t,  {
    x: e.x, y:e.y, width:e.width, height:e.height;
}
,  {
    x: i.x, y:i.y, width:i.width, height:i.height;
}
, a, (function() {
    s.animationCompleted(t);
}
));
}}]), t;
}(), Ln=function() {
    function t(e) {
    Ja(this, t), this.ctx=e, this.w=e.w, this.timeScaleArray=[], this.utc=this.w.config.xaxis.labels.datetimeUTC;
}
return ts(t, [ {
    key: "calculateTimeScaleTicks", value:function(t, e) {
    var i=this, a=this.w;
    if(a.globals.allSeriesCollapsed)return a.globals.labels=[], a.globals.timescaleLabels=[], [];
    var s=new Ms(this.ctx), n=(e-t)/864e5;
    this.determineInterval(n), a.globals.disableZoomIn=!1, a.globals.disableZoomOut=!1, n<.00011574074074074075?a.globals.disableZoomIn=!0: n>5e4&&(a.globals.disableZoomOut=!0);
    var o=s.getTimeUnitsfromTimestamp(t, e, this.utc), r=a.globals.gridWidth/n, l=r/24, c=l/60, h=c/60, d=Math.floor(24*n), u=Math.floor(1440*n), g=Math.floor(86400*n), f=Math.floor(n), p=Math.floor(n/30), x=Math.floor(n/365), m= {
    minMillisecond: o.minMillisecond, minSecond:o.minSecond, minMinute:o.minMinute, minHour:o.minHour, minDate:o.minDate, minMonth:o.minMonth, minYear:o.minYear;
}
, b= {
    firstVal: m, currentMillisecond:m.minMillisecond, currentSecond:m.minSecond, currentMinute:m.minMinute, currentHour:m.minHour, currentMonthDate:m.minDate, currentDate:m.minDate, currentMonth:m.minMonth, currentYear:m.minYear, daysWidthOnXAxis:r, hoursWidthOnXAxis:l, minutesWidthOnXAxis:c, secondsWidthOnXAxis:h, numberOfSeconds:g, numberOfMinutes:u, numberOfHours:d, numberOfDays:f, numberOfMonths:p, numberOfYears:x;
}
;
    switch(this.tickInterval) {
    case"years": this.generateYearScale(b);
    break;
    case"months": case"half_year":this.generateMonthScale(b);
    break;
    case"months_days": case"months_fortnight":case"days":case"week_days":this.generateDayScale(b);
    break;
    case"hours": this.generateHourScale(b);
    break;
    case"minutes_fives": case"minutes":this.generateMinuteScale(b);
    break;
    case"seconds_tens": case"seconds_fives":case"seconds":this.generateSecondScale(b);
}
var v=this.timeScaleArray.map((function(t) {
    var e= {
    position: t.position, unit:t.unit, year:t.year, day:t.day?t.day:1, hour:t.hour?t.hour:0, month:t.month+1;
}
;
    return"month"===t.unit?Za(Za( {
}
, e),  {
}
,  {
    day: 1, value:t.value+1;
}
):"day"===t.unit||"hour"===t.unit?Za(Za( {
}
, e),  {
}
,  {
    value: t.value;
}
):"minute"===t.unit?Za(Za( {
}
, e),  {
}
,  {
    value: t.value, minute:t.value;
}
):"second"===t.unit?Za(Za( {
}
, e),  {
}
,  {
    value: t.value, minute:t.minute, second:t.second;
}
):t;
}));
    return v.filter((function(t) {
    var e=1, s=Math.ceil(a.globals.gridWidth/120), n=t.value;
    void 0!==a.config.xaxis.tickAmount&&(s=a.config.xaxis.tickAmount), v.length>s&&(e=Math.floor(v.length/s));
    var o=!1, r=!1;
    switch(i.tickInterval) {
    case"years": "year"===t.unit&&(o=!0);
    break;
    case"half_year": e=7, "year"===t.unit&&(o=!0);
    break;
    case"months": e=1, "year"===t.unit&&(o=!0);
    break;
    case"months_fortnight": e=15, "year"!==t.unit&&"month"!==t.unit||(o=!0), 30===n&&(r=!0);
    break;
    case"months_days": e=10, "month"===t.unit&&(o=!0), 30===n&&(r=!0);
    break;
    case"week_days": e=8, "month"===t.unit&&(o=!0);
    break;
    case"days": e=1, "month"===t.unit&&(o=!0);
    break;
    case"hours": "day"===t.unit&&(o=!0);
    break;
    case"minutes_fives": case"seconds_fives":n%5!=0&&(r=!0);
    break;
    case"seconds_tens": n%10!=0&&(r=!0);
}
if("hours"===i.tickInterval||"minutes_fives"===i.tickInterval||"seconds_tens"===i.tickInterval||"seconds_fives"===i.tickInterval) {
    if(!r)return!0;
}
else if((n%e==0||o)&&!r)return!0;
}));
}},  {
    key: "recalcDimensionsBasedOnFormat", value:function(t, e) {
    var i=this.w, a=this.formatDates(t), s=this.removeOverlappingTS(a);
    i.globals.timescaleLabels=s.slice(), new en(this.ctx).plotCoords();
}
},  {
    key: "determineInterval", value:function(t) {
    var e=24*t, i=60*e;
    switch(!0) {
    case t/365>5: this.tickInterval="years";
    break;
    case t>800: this.tickInterval="half_year";
    break;
    case t>180: this.tickInterval="months";
    break;
    case t>90: this.tickInterval="months_fortnight";
    break;
    case t>60: this.tickInterval="months_days";
    break;
    case t>30: this.tickInterval="week_days";
    break;
    case t>2: this.tickInterval="days";
    break;
    case e>2.4: this.tickInterval="hours";
    break;
    case i>15: this.tickInterval="minutes_fives";
    break;
    case i>5: this.tickInterval="minutes";
    break;
    case i>1: this.tickInterval="seconds_tens";
    break;
    case 60*i>20: this.tickInterval="seconds_fives";
    break;
    default: this.tickInterval="seconds"}
}},  {
    key: "generateYearScale", value:function(t) {
    var e=t.firstVal, i=t.currentMonth, a=t.currentYear, s=t.daysWidthOnXAxis, n=t.numberOfYears, o=e.minYear, r=0, l=new Ms(this.ctx), c="year";
    if(e.minDate>1||e.minMonth>0) {
    var h=l.determineRemainingDaysOfYear(e.minYear, e.minMonth, e.minDate);
    r=(l.determineDaysOfYear(e.minYear)-h+1)*s, o=e.minYear+1, this.timeScaleArray.push( {
    position: r, value:o, unit:c, year:o, month:cs.monthMod(i+1);
}
);
}else 1===e.minDate&&0===e.minMonth&&this.timeScaleArray.push( {
    position: r, value:o, unit:c, year:a, month:cs.monthMod(i+1);
}
);
    for(var d=o, u=r, g=0;
    g<n;
    g++)d++, u=l.determineDaysOfYear(d-1)*s+u, this.timeScaleArray.push( {
    position: u, value:d, unit:c, year:d, month:1;
}
);
}},  {
    key: "generateMonthScale", value:function(t) {
    var e=t.firstVal, i=t.currentMonthDate, a=t.currentMonth, s=t.currentYear, n=t.daysWidthOnXAxis, o=t.numberOfMonths, r=a, l=0, c=new Ms(this.ctx), h="month", d=0;
    if(e.minDate>1) {
    l=(c.determineDaysOfMonths(a+1, e.minYear)-i+1)*n, r=cs.monthMod(a+1);
    var u=s+d, g=cs.monthMod(r), f=r;
    0===r&&(h="year", f=u, g=1, u+=d+=1), this.timeScaleArray.push( {
    position: l, value:f, unit:h, year:u, month:g;
}
);
}else this.timeScaleArray.push( {
    position: l, value:r, unit:h, year:s, month:cs.monthMod(a);
}
);
    for(var p=r+1, x=l, m=0, b=1;
    m<o;
    m++, b++) {
    0===(p=cs.monthMod(p))?(h="year", d+=1): h="month";
    var v=this._getYear(s, p, d);
    x=c.determineDaysOfMonths(p, v)*n+x;
    var y=0===p?v: p;
    this.timeScaleArray.push( {
    position: x, value:y, unit:h, year:v, month:0===p?1:p;
}
), p++}}},  {
    key: "generateDayScale", value:function(t) {
    var e=t.firstVal, i=t.currentMonth, a=t.currentYear, s=t.hoursWidthOnXAxis, n=t.numberOfDays, o=new Ms(this.ctx), r="day", l=e.minDate+1, c=l, h=function(t, e, i) {
    return t>o.determineDaysOfMonths(e+1, i)?(c=1, r="month", u=e+=1, e): e;
}
, d=(24-e.minHour)*s, u=l, g=h(c, i, a);
    0===e.minHour&&1===e.minDate?(d=0, u=cs.monthMod(e.minMonth), r="month", c=e.minDate, n++): 1!==e.minDate&&0===e.minHour&&0===e.minMinute&&(d=0, l=e.minDate, u=l, g=h(c=l, i, a)), this.timeScaleArray.push( {
    position: d, value:u, unit:r, year:this._getYear(a, g, 0), month:cs.monthMod(g), day:c;
}
);
    for(var f=d, p=0;
    p<n;
    p++) {
    r="day", g=h(c+=1, g, this._getYear(a, g, 0));
    var x=this._getYear(a, g, 0);
    f=24*s+f;
    var m=1===c?cs.monthMod(g): c;
    this.timeScaleArray.push( {
    position: f, value:m, unit:r, year:x, month:cs.monthMod(g), day:m;
}
);
}}},  {
    key: "generateHourScale", value:function(t) {
    var e=t.firstVal, i=t.currentDate, a=t.currentMonth, s=t.currentYear, n=t.minutesWidthOnXAxis, o=t.numberOfHours, r=new Ms(this.ctx), l="hour", c=function(t, e) {
    return t>r.determineDaysOfMonths(e+1, s)?e+=1: e;
}
, h=60-(e.minMinute+e.minSecond/60), d=h*n, u=e.minHour+1, g=u+1;
    60===h&&(d=0, g=(u=e.minHour)+1);
    var f, p, x=i, m=c(x, a);
    this.timeScaleArray.push( {
    position: d, value:u, unit:l, day:x, hour:g, year:s, month:cs.monthMod(m);
}
);
    for(var b=d, v=0;
    v<o;
    v++) {
    l="hour", g>=24&&(g=0, l="day", m=(f=x+=1, p=m, f>r.determineDaysOfMonths(p+1, s)&&(x=1, p+=1),  {
    month: p, date:x;
}
).month, m=c(x, m));
    var y=this._getYear(s, m, 0);
    b=0===g&&0===v?h*n: 60*n+b;
    var w=0===g?x: g;
    this.timeScaleArray.push( {
    position: b, value:w, unit:l, hour:g, day:x, year:y, month:cs.monthMod(m);
}
), g++}}},  {
    key: "generateMinuteScale", value:function(t) {
    for(var e=t.currentMillisecond, i=t.currentSecond, a=t.currentMinute, s=t.currentHour, n=t.currentDate, o=t.currentMonth, r=t.currentYear, l=t.minutesWidthOnXAxis, c=t.secondsWidthOnXAxis, h=t.numberOfMinutes, d=a+1, u=n, g=o, f=r, p=s, x=(60-i-e/1e3)*c, m=0;
    m<h;
    m++)d>=60&&(d=0, 24===(p+=1)&&(p=0)), this.timeScaleArray.push( {
    position: x, value:d, unit:"minute", hour:p, minute:d, day:u, year:this._getYear(f, g, 0), month:cs.monthMod(g);
}
), x+=l, d++}},  {
    key: "generateSecondScale", value:function(t) {
    for(var e=t.currentMillisecond, i=t.currentSecond, a=t.currentMinute, s=t.currentHour, n=t.currentDate, o=t.currentMonth, r=t.currentYear, l=t.secondsWidthOnXAxis, c=t.numberOfSeconds, h=i+1, d=a, u=n, g=o, f=r, p=s, x=(1e3-e)/1e3*l, m=0;
    m<c;
    m++)h>=60&&(h=0, ++d>=60&&(d=0, 24==++p&&(p=0))), this.timeScaleArray.push( {
    position: x, value:h, unit:"second", hour:p, minute:d, second:h, day:u, year:this._getYear(f, g, 0), month:cs.monthMod(g);
}
), x+=l, h++}},  {
    key: "createRawDateString", value:function(t, e) {
    var i=t.year;
    return 0===t.month&&(t.month=1), i+="-"+("0"+t.month.toString()).slice(-2), "day"===t.unit?i+="day"===t.unit?"-"+("0"+e).slice(-2): "-01":i+="-"+("0"+(t.day?t.day:"1")).slice(-2), "hour"===t.unit?i+="hour"===t.unit?"T"+("0"+e).slice(-2):"T00":i+="T"+("0"+(t.hour?t.hour:"0")).slice(-2), "minute"===t.unit?i+=":"+("0"+e).slice(-2):i+=":"+(t.minute?("0"+t.minute).slice(-2):"00"), "second"===t.unit?i+=":"+("0"+e).slice(-2):i+=":00", this.utc&&(i+=".000Z"), i;
}
},  {
    key: "formatDates", value:function(t) {
    var e=this, i=this.w;
    return t.map((function(t) {
    var a=t.value.toString(), s=new Ms(e.ctx), n=e.createRawDateString(t, a), o=s.getDate(s.parseDate(n));
    if(e.utc||(o=s.getDate(s.parseDateWithTimezone(n))), void 0===i.config.xaxis.labels.format) {
    var r="dd MMM", l=i.config.xaxis.labels.datetimeFormatter;
    "year"===t.unit&&(r=l.year), "month"===t.unit&&(r=l.month), "day"===t.unit&&(r=l.day), "hour"===t.unit&&(r=l.hour), "minute"===t.unit&&(r=l.minute), "second"===t.unit&&(r=l.second), a=s.formatDate(o, r);
}
else a=s.formatDate(o, i.config.xaxis.labels.format);
    return {
    dateString: n, position:t.position, value:a, unit:t.unit, year:t.year, month:t.month;
}
}));
}},  {
    key: "removeOverlappingTS", value:function(t) {
    var e, i=this, a=new us(this.ctx), s=!1;
    t.length>0&&t[0].value&&t.every((function(e) {
    return e.value.length===t[0].value.length;
}
))&&(s=!0, e=a.getTextRects(t[0].value).width);
    var n=0, o=t.map((function(o, r) {
    if(r>0&&i.w.config.xaxis.labels.hideOverlappingLabels) {
    var l=s?e: a.getTextRects(t[n].value).width, c=t[n].position;
    return o.position>c+l+10?(n=r, o): null;
}
return o;
}));
    return o.filter((function(t) {
    return null!==t;
}
));
}},  {
    key: "_getYear", value:function(t, e, i) {
    return t+Math.floor(e/12)+i;
}
}]), t;
}(), _n=function() {
    function t(e, i) {
    Ja(this, t), this.ctx=i, this.w=i.w, this.el=e;
}
return ts(t, [ {
    key: "setupElements", value:function() {
    var t=this.w.globals, e=this.w.config, i=e.chart.type;
    t.axisCharts=["line", "area", "bar", "rangeBar", "candlestick", "boxPlot", "scatter", "bubble", "radar", "heatmap", "treemap"].indexOf(i)>-1, t.xyCharts=["line", "area", "bar", "rangeBar", "candlestick", "boxPlot", "scatter", "bubble"].indexOf(i)>-1, t.isBarHorizontal=("bar"===e.chart.type||"rangeBar"===e.chart.type||"boxPlot"===e.chart.type)&&e.plotOptions.bar.horizontal, t.chartClass=".apexcharts"+t.chartID, t.dom.baseEl=this.el, t.dom.elWrap=document.createElement("div"), us.setAttrs(t.dom.elWrap,  {
    id: t.chartClass.substring(1), class:"apexcharts-canvas "+t.chartClass.substring(1);
}
), this.el.appendChild(t.dom.elWrap), t.dom.Paper=new window.SVG.Doc(t.dom.elWrap), t.dom.Paper.attr( {
    class: "apexcharts-svg", "xmlns:data":"ApexChartsNS", transform:"translate(".concat(e.chart.offsetX, ",  ").concat(e.chart.offsetY, ")");
}
), t.dom.Paper.node.style.background=e.chart.background, this.setSVGDimensions(), t.dom.elGraphical=t.dom.Paper.group().attr( {
    class: "apexcharts-inner apexcharts-graphical"}
), t.dom.elAnnotations=t.dom.Paper.group().attr( {
    class: "apexcharts-annotations"}
), t.dom.elDefs=t.dom.Paper.defs(), t.dom.elLegendWrap=document.createElement("div"), t.dom.elLegendWrap.classList.add("apexcharts-legend"), t.dom.elWrap.appendChild(t.dom.elLegendWrap), t.dom.Paper.add(t.dom.elGraphical), t.dom.elGraphical.add(t.dom.elDefs);
}},  {
    key: "plotChartType", value:function(t, e) {
    var i=this.w, a=i.config, s=i.globals, n= {
    series: [], i:[];
}
, o= {
    series: [], i:[];
}
, r= {
    series: [], i:[];
}
, l= {
    series: [], i:[];
}
, c= {
    series: [], i:[];
}
, h= {
    series: [], i:[];
}
, d= {
    series: [], i:[];
}
;
    s.series.map((function(e, u) {
    var g=0;
    void 0!==t[u].type?("column"===t[u].type||"bar"===t[u].type?(s.series.length>1&&a.plotOptions.bar.horizontal&&console.warn("Horizontal bars are not supported in a mixed/combo chart. Please turn off `plotOptions.bar.horizontal`"), c.series.push(e), c.i.push(u), g++, i.globals.columnSeries=c.series): "area"===t[u].type?(o.series.push(e), o.i.push(u), g++):"line"===t[u].type?(n.series.push(e), n.i.push(u), g++):"scatter"===t[u].type?(r.series.push(e), r.i.push(u)):"bubble"===t[u].type?(l.series.push(e), l.i.push(u), g++):"candlestick"===t[u].type?(h.series.push(e), h.i.push(u), g++):"boxPlot"===t[u].type?(d.series.push(e), d.i.push(u), g++):console.warn("You have specified an unrecognized chart type. Available types for this property are line/area/column/bar/scatter/bubble"), g>1&&(s.comboCharts=!0)):(n.series.push(e), n.i.push(u));
}
));
    var u=new An(this.ctx, e), g=new pn(this.ctx, e);
    this.ctx.pie=new vn(this.ctx);
    var f=new wn(this.ctx);
    this.ctx.rangeBar=new Ts(this.ctx, e);
    var p=new yn(this.ctx), x=[];
    if(s.comboCharts) {
    if(o.series.length>0&&x.push(u.draw(o.series, "area", o.i)), c.series.length>0)if(i.config.chart.stacked) {
    var m=new fn(this.ctx, e);
    x.push(m.draw(c.series, c.i));
}
else this.ctx.bar=new _s(this.ctx, e), x.push(this.ctx.bar.draw(c.series, c.i));
    if(n.series.length>0&&x.push(u.draw(n.series, "line", n.i)), h.series.length>0&&x.push(g.draw(h.series, h.i)), d.series.length>0&&x.push(g.draw(d.series, d.i)), r.series.length>0) {
    var b=new An(this.ctx, e, !0);
    x.push(b.draw(r.series, "scatter", r.i));
}
if(l.series.length>0) {
    var v=new An(this.ctx, e, !0);
    x.push(v.draw(l.series, "bubble", l.i));
}
}else switch(a.chart.type) {
    case"line": x=u.draw(s.series, "line");
    break;
    case"area": x=u.draw(s.series, "area");
    break;
    case"bar": a.chart.stacked?x=new fn(this.ctx, e).draw(s.series):(this.ctx.bar=new _s(this.ctx, e), x=this.ctx.bar.draw(s.series));
    break;
    case"candlestick": case"boxPlot":x=new pn(this.ctx, e).draw(s.series);
    break;
    case"rangeBar": x=this.ctx.rangeBar.draw(s.series);
    break;
    case"heatmap": x=new mn(this.ctx, e).draw(s.series);
    break;
    case"treemap": x=new En(this.ctx, e).draw(s.series);
    break;
    case"pie": case"donut":case"polarArea":x=this.ctx.pie.draw(s.series);
    break;
    case"radialBar": x=f.draw(s.series);
    break;
    case"radar": x=p.draw(s.series);
    break;
    default: x=u.draw(s.series);
}
return x;
}},  {
    key: "setSVGDimensions", value:function() {
    var t=this.w.globals, e=this.w.config;
    t.svgWidth=e.chart.width, t.svgHeight=e.chart.height;
    var i=cs.getDimensions(this.el), a=e.chart.width.toString().split(/[0-9]+/g).pop();
    "%"===a?cs.isNumber(i[0])&&(0===i[0].width&&(i=cs.getDimensions(this.el.parentNode)), t.svgWidth=i[0]*parseInt(e.chart.width, 10)/100): "px"!==a&&""!==a||(t.svgWidth=parseInt(e.chart.width, 10));
    var s=e.chart.height.toString().split(/[0-9]+/g).pop();
    if("auto"!==t.svgHeight&&""!==t.svgHeight)if("%"===s) {
    var n=cs.getDimensions(this.el.parentNode);
    t.svgHeight=n[1]*parseInt(e.chart.height, 10)/100;
}
else t.svgHeight=parseInt(e.chart.height, 10);
    else t.axisCharts?t.svgHeight=t.svgWidth/1.61: t.svgHeight=t.svgWidth/1.2;
    if(t.svgWidth<0&&(t.svgWidth=0), t.svgHeight<0&&(t.svgHeight=0), us.setAttrs(t.dom.Paper.node,  {
    width: t.svgWidth, height:t.svgHeight;
}
), "%"!==s) {
    var o=e.chart.sparkline.enabled?0: t.axisCharts?e.chart.parentHeightOffset:0;
    t.dom.Paper.node.parentNode.parentNode.style.minHeight=t.svgHeight+o+"px"}
t.dom.elWrap.style.width=t.svgWidth+"px", t.dom.elWrap.style.height=t.svgHeight+"px"}},  {
    key: "shiftGraphPosition", value:function() {
    var t=this.w.globals, e=t.translateY, i= {
    transform: "translate("+t.translateX+",  "+e+")"}
;
    us.setAttrs(t.dom.elGraphical.node, i);
}
},  {
    key: "resizeNonAxisCharts", value:function() {
    var t=this.w, e=t.globals, i=0, a=t.config.chart.sparkline.enabled?1: 15;
    a+=t.config.grid.padding.bottom, "top"!==t.config.legend.position&&"bottom"!==t.config.legend.position||!t.config.legend.show||t.config.legend.floating||(i=new sn(this.ctx).legendHelpers.getLegendBBox().clwh+10);
    var s=t.globals.dom.baseEl.querySelector(".apexcharts-radialbar,  .apexcharts-pie"), n=2.05*t.globals.radialSize;
    if(s&&!t.config.chart.sparkline.enabled&&0!==t.config.plotOptions.radialBar.startAngle) {
    var o=cs.getBoundingClientRect(s);
    n=o.bottom;
    var r=o.bottom-o.top;
    n=Math.max(2.05*t.globals.radialSize, r);
}
var l=n+e.translateY+i+a;
    e.dom.elLegendForeign&&e.dom.elLegendForeign.setAttribute("height", l), e.dom.elWrap.style.height=l+"px", us.setAttrs(e.dom.Paper.node,  {
    height: l;
}
), e.dom.Paper.node.parentNode.parentNode.style.minHeight=l+"px"}},  {
    key: "coreCalculations", value:function() {
    new Ws(this.ctx).init();
}
},  {
    key: "resetGlobals", value:function() {
    var t=this, e=function() {
    return t.w.config.series.map((function(t) {
    return[];
}
));
}, i=new Is, a=this.w.globals;
    i.initGlobalVars(a), a.seriesXvalues=e(), a.seriesYvalues=e();
}
},  {
    key: "isMultipleY", value:function() {
    if(this.w.config.yaxis.constructor===Array&&this.w.config.yaxis.length>1)return this.w.globals.isMultipleYAxis=!0, !0;
}
},  {
    key: "xySettings", value:function() {
    var t=null, e=this.w;
    if(e.globals.axisCharts) {
    if("back"===e.config.xaxis.crosshairs.position&&new Us(this.ctx).drawXCrosshairs(), "back"===e.config.yaxis[0].crosshairs.position&&new Us(this.ctx).drawYCrosshairs(), "datetime"===e.config.xaxis.type&&void 0===e.config.xaxis.labels.formatter) {
    this.ctx.timeScale=new Ln(this.ctx);
    var i=[];
    isFinite(e.globals.minX)&&isFinite(e.globals.maxX)&&!e.globals.isBarHorizontal?i=this.ctx.timeScale.calculateTimeScaleTicks(e.globals.minX, e.globals.maxX): e.globals.isBarHorizontal&&(i=this.ctx.timeScale.calculateTimeScaleTicks(e.globals.minY, e.globals.maxY)), this.ctx.timeScale.recalcDimensionsBasedOnFormat(i);
}
t=new ps(this.ctx).getCalculatedRatios();
}return t;
}},  {
    key: "updateSourceChart", value:function(t) {
    this.ctx.w.globals.selection=void 0, this.ctx.updateHelpers._updateOptions( {
    chart:  {
    selection:  {
    xaxis:  {
    min: t.w.globals.minX, max:t.w.globals.maxX;
}
}}}, !1, !1);
}},  {
    key: "setupBrushHandler", value:function() {
    var t=this, e=this.w;
    if(e.config.chart.brush.enabled&&"function"!=typeof e.config.chart.events.selection) {
    var i=e.config.chart.brush.targets||[e.config.chart.brush.target];
    i.forEach((function(e) {
    var i=ApexCharts.getChartByID(e);
    i.w.globals.brushSource=t.ctx, "function"!=typeof i.w.config.chart.events.zoomed&&(i.w.config.chart.events.zoomed=function() {
    t.updateSourceChart(i);
}
), "function"!=typeof i.w.config.chart.events.scrolled&&(i.w.config.chart.events.scrolled=function() {
    t.updateSourceChart(i);
}
);
})), e.config.chart.events.selection=function(t, a) {
    i.forEach((function(t) {
    var i=ApexCharts.getChartByID(t), s=cs.clone(e.config.yaxis);
    if(e.config.chart.brush.autoScaleYaxis&&1===i.w.globals.series.length) {
    var n=new Rs(i);
    s=n.autoScaleY(i, s, a);
}
var o=i.w.config.yaxis.reduce((function(t, e, a) {
    return[].concat(rs(t), [Za(Za( {
}
, i.w.config.yaxis[a]),  {
}
,  {
    min: s[0].min, max:s[0].max;
}
)]);
}), []);
    i.ctx.updateHelpers._updateOptions( {
    xaxis:  {
    min: a.xaxis.min, max:a.xaxis.max;
}
, yaxis:o;
}, !1, !1, !1, !1);
}));
}}}}]), t;
}(), Mn=function() {
    function t(e) {
    Ja(this, t), this.ctx=e, this.w=e.w;
}
return ts(t, [ {
    key: "_updateOptions", value:function(t) {
    var e=this, i=arguments.length>1&&void 0!==arguments[1]&&arguments[1], a=!(arguments.length>2&&void 0!==arguments[2])||arguments[2], s=!(arguments.length>3&&void 0!==arguments[3])||arguments[3], n=arguments.length>4&&void 0!==arguments[4]&&arguments[4];
    return new Promise((function(o) {
    var r=[e.ctx];
    s&&(r=e.ctx.getSyncedCharts()), e.ctx.w.globals.isExecCalled&&(r=[e.ctx], e.ctx.w.globals.isExecCalled=!1), r.forEach((function(s, l) {
    var c=s.w;
    return c.globals.shouldAnimate=a, i||(c.globals.resized=!0, c.globals.dataChanged=!0, a&&s.series.getPreviousPaths()), t&&"object"===Ka(t)&&(s.config=new Ds(t), t=ps.extendArrayProps(s.config, t, c), s.w.globals.chartID!==e.ctx.w.globals.chartID&&delete t.series, c.config=cs.extend(c.config, t), n&&(c.globals.lastXAxis=t.xaxis?cs.clone(t.xaxis): [], c.globals.lastYAxis=t.yaxis?cs.clone(t.yaxis):[], c.globals.initialConfig=cs.extend( {
}
, c.config), c.globals.initialSeries=cs.clone(c.config.series))), s.update(t).then((function() {
    l===r.length-1&&o(s);
}
));
}));
}));
}},  {
    key: "_updateSeries", value:function(t, e) {
    var i=this, a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];
    return new Promise((function(s) {
    var n, o=i.w;
    return o.globals.shouldAnimate=e, o.globals.dataChanged=!0, e&&i.ctx.series.getPreviousPaths(), o.globals.axisCharts?(0===(n=t.map((function(t, e) {
    return i._extendSeries(t, e);
}
))).length&&(n=[ {
    data: [];
}
]), o.config.series=n):o.config.series=t.slice(), a&&(o.globals.initialSeries=cs.clone(o.config.series)), i.ctx.update().then((function() {
    s(i.ctx);
}
));
}));
}},  {
    key: "_extendSeries", value:function(t, e) {
    var i=this.w, a=i.config.series[e];
    return Za(Za( {
}
, i.config.series[e]),  {
}
,  {
    name: t.name?t.name:a&&a.name, color:t.color?t.color:a&&a.color, type:t.type?t.type:a&&a.type, data:t.data?t.data:a&&a.data;
}
);
}},  {
    key: "toggleDataPointSelection", value:function(t, e) {
    var i=this.w, a=null, s=".apexcharts-series[data\\: realIndex='".concat(t, "']");
    return i.globals.axisCharts?a=i.globals.dom.Paper.select("".concat(s, " path[j='").concat(e, "'],  ").concat(s, " circle[j='").concat(e, "'],  ").concat(s, " rect[j='").concat(e, "']")).members[0]: void 0===e&&(a=i.globals.dom.Paper.select("".concat(s, " path[j='").concat(t, "']")).members[0], "pie"!==i.config.chart.type&&"polarArea"!==i.config.chart.type&&"donut"!==i.config.chart.type||this.ctx.pie.pieClicked(t)), a?(new us(this.ctx).pathMouseDown(a, null), a.node?a.node:null):(console.warn("toggleDataPointSelection: Element not found"), null);
}
},  {
    key: "forceXAxisUpdate", value:function(t) {
    var e=this.w;
    if(["min", "max"].forEach((function(i) {
    void 0!==t.xaxis[i]&&(e.config.xaxis[i]=t.xaxis[i], e.globals.lastXAxis[i]=t.xaxis[i]);
}
)), t.xaxis.categories&&t.xaxis.categories.length&&(e.config.xaxis.categories=t.xaxis.categories), e.config.xaxis.convertedCatToNumeric) {
    var i=new Ps(t);
    t=i.convertCatToNumericXaxis(t, this.ctx);
}
return t;
}},  {
    key: "forceYAxisUpdate", value:function(t) {
    var e=this.w;
    return e.config.chart.stacked&&"100%"===e.config.chart.stackType&&(Array.isArray(t.yaxis)?t.yaxis.forEach((function(e, i) {
    t.yaxis[i].min=0, t.yaxis[i].max=100;
}
)): (t.yaxis.min=0, t.yaxis.max=100)), t;
}},  {
    key: "revertDefaultAxisMinMax", value:function(t) {
    var e=this, i=this.w, a=i.globals.lastXAxis, s=i.globals.lastYAxis;
    t&&t.xaxis&&(a=t.xaxis), t&&t.yaxis&&(s=t.yaxis), i.config.xaxis.min=a.min, i.config.xaxis.max=a.max;
    i.config.yaxis.map((function(t, a) {
    i.globals.zoomed||void 0!==s[a]?function(t) {
    void 0!==s[t]&&(i.config.yaxis[t].min=s[t].min, i.config.yaxis[t].max=s[t].max);
}
(a): void 0!==e.ctx.opts.yaxis[a]&&(t.min=e.ctx.opts.yaxis[a].min, t.max=e.ctx.opts.yaxis[a].max);
}));
}}]), t;
}();
    Cn="undefined"!=typeof window?window: void 0, Sn=function(t, e) {
    var i=(void 0!==this?this: t).SVG=function(t) {
    if(i.supported)return t=new i.Doc(t), i.parser.draw||i.prepare(), t;
}
;
    if(i.ns="http: //www.w3.org/2000/svg", i.xmlns="http://www.w3.org/2000/xmlns/", i.xlink="http://www.w3.org/1999/xlink", i.svgjs="http://svgjs.dev", i.supported=!0, !i.supported)return!1;
    i.did=1e3, i.eid=function(t) {
    return"Svgjs"+h(t)+i.did++}
, i.create=function(t) {
    var i=e.createElementNS(this.ns, t);
    return i.setAttribute("id", this.eid(t)), i;
}
, i.extend=function() {
    var t, e;
    e=(t=[].slice.call(arguments)).pop();
    for(var a=t.length-1;
    a>=0;
    a--)if(t[a])for(var s in e)t[a].prototype[s]=e[s];
    i.Set&&i.Set.inherit&&i.Set.inherit();
}
, i.invent=function(t) {
    var e="function"==typeof t.create?t.create: function() {
    this.constructor.call(this, i.create(t.create));
}
;
    return t.inherit&&(e.prototype=new t.inherit), t.extend&&i.extend(e, t.extend), t.construct&&i.extend(t.parent||i.Container, t.construct), e;
}
, i.adopt=function(e) {
    var a;
    return e?e.instance?e.instance: ((a="svg"==e.nodeName?e.parentNode instanceof t.SVGElement?new i.Nested:new i.Doc:"linearGradient"==e.nodeName?new i.Gradient("linear"):"radialGradient"==e.nodeName?new i.Gradient("radial"):i[h(e.nodeName)]?new(i[h(e.nodeName)]):new i.Element(e)).type=e.nodeName, a.node=e, e.instance=a, a instanceof i.Doc&&a.namespace().defs(), a.setData(JSON.parse(e.getAttribute("svgjs:data"))|| {
}
), a):null;
}
, i.prepare=function() {
    var t=e.getElementsByTagName("body")[0], a=(t?new i.Doc(t): i.adopt(e.documentElement).nested()).size(2, 0);
    i.parser= {
    body: t||e.documentElement, draw:a.style("opacity:0;
    position: absolute;
    left: -100%;
    top: -100%;
    overflow: hidden").node, poly:a.polyline().node, path:a.path().node, native:i.create("svg");
}
}, i.parser= {
    native: i.create("svg");
}
, e.addEventListener("DOMContentLoaded", (function() {
    i.parser.draw||i.prepare();
}
), !1), i.regex= {
    numberAndUnit: /^([+-]?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?)([a-z%]*)$/i, hex:/^#?([a-f\d] {
    2;
}
)([a-f\d] {
    2;
}
)([a-f\d] {
    2;
}
)$/i, rgb: /rgb\((\d+), (\d+), (\d+)\)/, reference:/#([a-z0-9\-_]+)/i, transforms:/\)\s*, ?\s*/, whitespace:/\s/g, isHex:/^#[a-f0-9] {
    3, 6;
}
$/i, isRgb: /^rgb\(/, isCss:/[^:]+:[^;
    ]+;
    ?/, isBlank: /^(\s+)?$/, isNumber:/^[+-]?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, isPercent:/^-?[\d\.]+%$/, isImage:/\.(jpg|jpeg|png|gif|svg)(\?[^=]+.*)?/i, delimiter:/[\s, ]+/, hyphen:/([^e])\-/gi, pathLetters:/[MLHVCSQTAZ]/gi, isPathLetter:/[MLHVCSQTAZ]/i, numbersWithDots:/((\d?\.\d+(?:e[+-]?\d+)?)((?:\.\d+(?:e[+-]?\d+)?)+))+/gi, dots:/\./g;
}
, i.utils= {
    map: function(t, e) {
    for(var i=t.length, a=[], s=0;
    s<i;
    s++)a.push(e(t[s]));
    return a;
}
, filter: function(t, e) {
    for(var i=t.length, a=[], s=0;
    s<i;
    s++)e(t[s])&&a.push(t[s]);
    return a;
}
, filterSVGElements: function(e) {
    return this.filter(e, (function(e) {
    return e instanceof t.SVGElement;
}
));
}}, i.defaults= {
    attrs:  {
    "fill-opacity": 1, "stroke-opacity":1, "stroke-width":0, "stroke-linejoin":"miter", "stroke-linecap":"butt", fill:"#000000", stroke:"#000000", opacity:1, x:0, y:0, cx:0, cy:0, width:0, height:0, r:0, rx:0, ry:0, offset:0, "stop-opacity":1, "stop-color":"#000000", "font-size":16, "font-family":"Helvetica,  Arial,  sans-serif", "text-anchor":"start"}
}, i.Color=function(t) {
    var e, a;
    this.r=0, this.g=0, this.b=0, t&&("string"==typeof t?i.regex.isRgb.test(t)?(e=i.regex.rgb.exec(t.replace(i.regex.whitespace, "")), this.r=parseInt(e[1]), this.g=parseInt(e[2]), this.b=parseInt(e[3])): i.regex.isHex.test(t)&&(e=i.regex.hex.exec(4==(a=t).length?["#", a.substring(1, 2), a.substring(1, 2), a.substring(2, 3), a.substring(2, 3), a.substring(3, 4), a.substring(3, 4)].join(""):a), this.r=parseInt(e[1], 16), this.g=parseInt(e[2], 16), this.b=parseInt(e[3], 16)):"object"===Ka(t)&&(this.r=t.r, this.g=t.g, this.b=t.b));
}
, i.extend(i.Color,  {
    toString: function() {
    return this.toHex();
}
, toHex: function() {
    return"#"+d(this.r)+d(this.g)+d(this.b);
}
, toRgb: function() {
    return"rgb("+[this.r, this.g, this.b].join()+")"}
, brightness: function() {
    return this.r/255*.3+this.g/255*.59+this.b/255*.11;
}
, morph: function(t) {
    return this.destination=new i.Color(t), this;
}
, at: function(t) {
    return this.destination?(t=t<0?0: t>1?1:t, new i.Color( {
    r: ~~(this.r+(this.destination.r-this.r)*t), g:~~(this.g+(this.destination.g-this.g)*t), b:~~(this.b+(this.destination.b-this.b)*t);
}
)):this;
}}), i.Color.test=function(t) {
    return t+="", i.regex.isHex.test(t)||i.regex.isRgb.test(t);
}
, i.Color.isRgb=function(t) {
    return t&&"number"==typeof t.r&&"number"==typeof t.g&&"number"==typeof t.b;
}
, i.Color.isColor=function(t) {
    return i.Color.isRgb(t)||i.Color.test(t);
}
, i.Array=function(t, e) {
    0==(t=(t||[]).valueOf()).length&&e&&(t=e.valueOf()), this.value=this.parse(t);
}
, i.extend(i.Array,  {
    toString: function() {
    return this.value.join(" ");
}
, valueOf: function() {
    return this.value;
}
, parse: function(t) {
    return t=t.valueOf(), Array.isArray(t)?t: this.split(t);
}
}), i.PointArray=function(t, e) {
    i.Array.call(this, t, e||[[0, 0]]);
}
, i.PointArray.prototype=new i.Array, i.PointArray.prototype.constructor=i.PointArray;
    for(var a= {
    M: function(t, e, i) {
    return e.x=i.x=t[0], e.y=i.y=t[1], ["M", e.x, e.y];
}
, L: function(t, e) {
    return e.x=t[0], e.y=t[1], ["L", t[0], t[1]];
}
, H: function(t, e) {
    return e.x=t[0], ["H", t[0]];
}
, V: function(t, e) {
    return e.y=t[0], ["V", t[0]];
}
, C: function(t, e) {
    return e.x=t[4], e.y=t[5], ["C", t[0], t[1], t[2], t[3], t[4], t[5]];
}
, Q: function(t, e) {
    return e.x=t[2], e.y=t[3], ["Q", t[0], t[1], t[2], t[3]];
}
, Z: function(t, e, i) {
    return e.x=i.x, e.y=i.y, ["Z"];
}
}, s="mlhvqtcsaz".split(""), n=0, o=s.length;
    n<o;
    ++n)a[s[n]]=function(t) {
    return function(e, i, s) {
    if("H"==t)e[0]=e[0]+i.x;
    else if("V"==t)e[0]=e[0]+i.y;
    else if("A"==t)e[5]=e[5]+i.x, e[6]=e[6]+i.y;
    else for(var n=0, o=e.length;
    n<o;
    ++n)e[n]=e[n]+(n%2?i.y: i.x);
    if(a&&"function"==typeof a[t])return a[t](e, i, s);
}
}(s[n].toUpperCase());
    i.PathArray=function(t, e) {
    i.Array.call(this, t, e||[["M", 0, 0]]);
}
, i.PathArray.prototype=new i.Array, i.PathArray.prototype.constructor=i.PathArray, i.extend(i.PathArray,  {
    toString: function() {
    return function(t) {
    for(var e=0, i=t.length, a="";
    e<i;
    e++)a+=t[e][0], null!=t[e][1]&&(a+=t[e][1], null!=t[e][2]&&(a+=" ", a+=t[e][2], null!=t[e][3]&&(a+=" ", a+=t[e][3], a+=" ", a+=t[e][4], null!=t[e][5]&&(a+=" ", a+=t[e][5], a+=" ", a+=t[e][6], null!=t[e][7]&&(a+=" ", a+=t[e][7])))));
    return a+" "}
(this.value);
}, move: function(t, e) {
    var i=this.bbox();
    return i.x, i.y, this;
}
, at: function(t) {
    if(!this.destination)return this;
    for(var e=this.value, a=this.destination.value, s=[], n=new i.PathArray, o=0, r=e.length;
    o<r;
    o++) {
    s[o]=[e[o][0]];
    for(var l=1, c=e[o].length;
    l<c;
    l++)s[o][l]=e[o][l]+(a[o][l]-e[o][l])*t;
    "A"===s[o][0]&&(s[o][4]=+(0!=s[o][4]), s[o][5]=+(0!=s[o][5]));
}
return n.value=s, n;
}, parse: function(t) {
    if(t instanceof i.PathArray)return t.valueOf();
    var e, s= {
    M: 2, L:2, H:1, V:1, C:6, S:4, Q:4, T:2, A:7, Z:0;
}
;
    t="string"==typeof t?t.replace(i.regex.numbersWithDots, l).replace(i.regex.pathLetters, " $& ").replace(i.regex.hyphen, "$1 -").trim().split(i.regex.delimiter): t.reduce((function(t, e) {
    return[].concat.call(t, e);
}
), []);
    var n=[], o=new i.Point, r=new i.Point, c=0, h=t.length;
    do {
    i.regex.isPathLetter.test(t[c])?(e=t[c], ++c): "M"==e?e="L":"m"==e&&(e="l"), n.push(a[e].call(null, t.slice(c, c+=s[e.toUpperCase()]).map(parseFloat), o, r));
}
while(h>c);
    return n;
}
, bbox: function() {
    return i.parser.draw||i.prepare(), i.parser.path.setAttribute("d", this.toString()), i.parser.path.getBBox();
}
}), i.Number=i.invent( {
    create: function(t, e) {
    this.value=0, this.unit=e||"", "number"==typeof t?this.value=isNaN(t)?0: isFinite(t)?t:t<0?-34e37:34e37:"string"==typeof t?(e=t.match(i.regex.numberAndUnit))&&(this.value=parseFloat(e[1]), "%"==e[5]?this.value/=100:"s"==e[5]&&(this.value*=1e3), this.unit=e[5]):t instanceof i.Number&&(this.value=t.valueOf(), this.unit=t.unit);
}
, extend: {
    toString: function() {
    return("%"==this.unit?~~(1e8*this.value)/1e6: "s"==this.unit?this.value/1e3:this.value)+this.unit;
}
, toJSON:function() {
    return this.toString();
}
, valueOf: function() {
    return this.value;
}
, plus: function(t) {
    return t=new i.Number(t), new i.Number(this+t, this.unit||t.unit);
}
, minus: function(t) {
    return t=new i.Number(t), new i.Number(this-t, this.unit||t.unit);
}
, times: function(t) {
    return t=new i.Number(t), new i.Number(this*t, this.unit||t.unit);
}
, divide: function(t) {
    return t=new i.Number(t), new i.Number(this/t, this.unit||t.unit);
}
, to: function(t) {
    var e=new i.Number(this);
    return"string"==typeof t&&(e.unit=t), e;
}
, morph: function(t) {
    return this.destination=new i.Number(t), t.relative&&(this.destination.value+=this.value), this;
}
, at: function(t) {
    return this.destination?new i.Number(this.destination).minus(this).times(t).plus(this): this;
}
}}), i.Element=i.invent( {
    create: function(t) {
    this._stroke=i.defaults.attrs.stroke, this._event=null, this.dom= {
}
, (this.node=t)&&(this.type=t.nodeName, this.node.instance=this, this._stroke=t.getAttribute("stroke")||this._stroke);
}
, extend:  {
    x: function(t) {
    return this.attr("x", t);
}
, y: function(t) {
    return this.attr("y", t);
}
, cx: function(t) {
    return null==t?this.x()+this.width()/2: this.x(t-this.width()/2);
}
, cy:function(t) {
    return null==t?this.y()+this.height()/2: this.y(t-this.height()/2);
}
, move:function(t, e) {
    return this.x(t).y(e);
}
, center: function(t, e) {
    return this.cx(t).cy(e);
}
, width: function(t) {
    return this.attr("width", t);
}
, height: function(t) {
    return this.attr("height", t);
}
, size: function(t, e) {
    var a=u(this, t, e);
    return this.width(new i.Number(a.width)).height(new i.Number(a.height));
}
, clone: function(t) {
    this.writeDataToDom();
    var e=p(this.node.cloneNode(!0));
    return t?t.add(e): this.after(e), e;
}
, remove:function() {
    return this.parent()&&this.parent().removeElement(this), this;
}
, replace: function(t) {
    return this.after(t).remove(), t;
}
, addTo: function(t) {
    return t.put(this);
}
, putIn: function(t) {
    return t.add(this);
}
, id: function(t) {
    return this.attr("id", t);
}
, show: function() {
    return this.style("display", "");
}
, hide: function() {
    return this.style("display", "none");
}
, visible: function() {
    return"none"!=this.style("display");
}
, toString: function() {
    return this.attr("id");
}
, classes: function() {
    var t=this.attr("class");
    return null==t?[]: t.trim().split(i.regex.delimiter);
}
, hasClass:function(t) {
    return-1!=this.classes().indexOf(t);
}
, addClass: function(t) {
    if(!this.hasClass(t)) {
    var e=this.classes();
    e.push(t), this.attr("class", e.join(" "));
}
return this;
}, removeClass: function(t) {
    return this.hasClass(t)&&this.attr("class", this.classes().filter((function(e) {
    return e!=t;
}
)).join(" ")), this;
}, toggleClass: function(t) {
    return this.hasClass(t)?this.removeClass(t): this.addClass(t);
}
, reference:function(t) {
    return i.get(this.attr(t));
}
, parent: function(e) {
    var a=this;
    if(!a.node.parentNode)return null;
    if(a=i.adopt(a.node.parentNode), !e)return a;
    for(;
    a&&a.node instanceof t.SVGElement;
    ) {
    if("string"==typeof e?a.matches(e): a instanceof e)return a;
    if(!a.node.parentNode||"#document"==a.node.parentNode.nodeName)return null;
    a=i.adopt(a.node.parentNode);
}
}, doc: function() {
    return this instanceof i.Doc?this: this.parent(i.Doc);
}
, parents:function(t) {
    var e=[], i=this;
    do {
    if(!(i=i.parent(t))||!i.node)break;
    e.push(i);
}
while(i.parent);
    return e;
}
, matches: function(t) {
    return e=this.node, i=t, (e.matches||e.matchesSelector||e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||e.oMatchesSelector).call(e, i);
    var e, i;
}
, native: function() {
    return this.node;
}
, svg: function(t) {
    var a=e.createElement("svg");
    if(!(t&&this instanceof i.Parent))return a.appendChild(t=e.createElement("svg")), this.writeDataToDom(), t.appendChild(this.node.cloneNode(!0)), a.innerHTML.replace(/^<svg>/, "").replace(/<\/svg>$/, "");
    a.innerHTML="<svg>"+t.replace(/\n/, "").replace(/<([\w: -]+)([^<]+?)\/>/g, "<$1$2></$1>")+"</svg>";
    for(var s=0, n=a.firstChild.childNodes.length;
    s<n;
    s++)this.node.appendChild(a.firstChild.firstChild);
    return this;
}
, writeDataToDom: function() {
    return(this.each||this.lines)&&(this.each?this: this.lines()).each((function() {
    this.writeDataToDom();
}
)), this.node.removeAttribute("svgjs: data"), Object.keys(this.dom).length&&this.node.setAttribute("svgjs:data", JSON.stringify(this.dom)), this;
}, setData:function(t) {
    return this.dom=t, this;
}
, is: function(t) {
    return this instanceof t;
}
}}), i.easing= {
    "-": function(t) {
    return t;
}
, "<>": function(t) {
    return-Math.cos(t*Math.PI)/2+.5;
}
, ">": function(t) {
    return Math.sin(t*Math.PI/2);
}
, "<": function(t) {
    return 1-Math.cos(t*Math.PI/2);
}
}, i.morph=function(t) {
    return function(e, a) {
    return new i.MorphObj(e, a).at(t);
}
}, i.Situation=i.invent( {
    create: function(t) {
    this.init=!1, this.reversed=!1, this.reversing=!1, this.duration=new i.Number(t.duration).valueOf(), this.delay=new i.Number(t.delay).valueOf(), this.start=+new Date+this.delay, this.finish=this.start+this.duration, this.ease=t.ease, this.loop=0, this.loops=!1, this.animations= {
}
, this.attrs= {
}
, this.styles= {
}
, this.transforms=[], this.once= {
}
}
}), i.FX=i.invent( {
    create: function(t) {
    this._target=t, this.situations=[], this.active=!1, this.situation=null, this.paused=!1, this.lastPos=0, this.pos=0, this.absPos=0, this._speed=1;
}
, extend:  {
    animate: function(t, e, a) {
    "object"===Ka(t)&&(e=t.ease, a=t.delay, t=t.duration);
    var s=new i.Situation( {
    duration: t||1e3, delay:a||0, ease:i.easing[e||"-"]||e;
}
);
    return this.queue(s), this;
}
, target: function(t) {
    return t&&t instanceof i.Element?(this._target=t, this): this._target;
}
, timeToAbsPos:function(t) {
    return(t-this.situation.start)/(this.situation.duration/this._speed);
}
, absPosToTime: function(t) {
    return this.situation.duration/this._speed*t+this.situation.start;
}
, startAnimFrame: function() {
    this.stopAnimFrame(), this.animationFrame=t.requestAnimationFrame(function() {
    this.step();
}
.bind(this));
}, stopAnimFrame: function() {
    t.cancelAnimationFrame(this.animationFrame);
}
, start: function() {
    return!this.active&&this.situation&&(this.active=!0, this.startCurrent()), this;
}
, startCurrent: function() {
    return this.situation.start=+new Date+this.situation.delay/this._speed, this.situation.finish=this.situation.start+this.situation.duration/this._speed, this.initAnimations().step();
}
, queue: function(t) {
    return("function"==typeof t||t instanceof i.Situation)&&this.situations.push(t), this.situation||(this.situation=this.situations.shift()), this;
}
, dequeue: function() {
    return this.stop(), this.situation=this.situations.shift(), this.situation&&(this.situation instanceof i.Situation?this.start(): this.situation.call(this)), this;
}
, initAnimations:function() {
    var t, e=this.situation;
    if(e.init)return this;
    for(var a in e.animations) {
    t=this.target()[a](), Array.isArray(t)||(t=[t]), Array.isArray(e.animations[a])||(e.animations[a]=[e.animations[a]]);
    for(var s=t.length;
    s--;
    )e.animations[a][s]instanceof i.Number&&(t[s]=new i.Number(t[s])), e.animations[a][s]=t[s].morph(e.animations[a][s]);
}
for(var a in e.attrs)e.attrs[a]=new i.MorphObj(this.target().attr(a), e.attrs[a]);
    for(var a in e.styles)e.styles[a]=new i.MorphObj(this.target().style(a), e.styles[a]);
    return e.initialTransformation=this.target().matrixify(), e.init=!0, this;
}
, clearQueue: function() {
    return this.situations=[], this;
}
, clearCurrent: function() {
    return this.situation=null, this;
}
, stop: function(t, e) {
    var i=this.active;
    return this.active=!1, e&&this.clearQueue(), t&&this.situation&&(!i&&this.startCurrent(), this.atEnd()), this.stopAnimFrame(), this.clearCurrent();
}
, after: function(t) {
    var e=this.last();
    return this.target().on("finished.fx", (function i(a) {
    a.detail.situation==e&&(t.call(this, e), this.off("finished.fx", i));
}
)), this._callStart();
}, during: function(t) {
    var e=this.last(), a=function(a) {
    a.detail.situation==e&&t.call(this, a.detail.pos, i.morph(a.detail.pos), a.detail.eased, e);
}
;
    return this.target().off("during.fx", a).on("during.fx", a), this.after((function() {
    this.off("during.fx", a);
}
)), this._callStart();
}, afterAll: function(t) {
    var e=function e(i) {
    t.call(this), this.off("allfinished.fx", e);
}
;
    return this.target().off("allfinished.fx", e).on("allfinished.fx", e), this._callStart();
}
, last: function() {
    return this.situations.length?this.situations[this.situations.length-1]: this.situation;
}
, add:function(t, e, i) {
    return this.last()[i||"animations"][t]=e, this._callStart();
}
, step: function(t) {
    var e, i, a;
    t||(this.absPos=this.timeToAbsPos(+new Date)), !1!==this.situation.loops?(e=Math.max(this.absPos, 0), i=Math.floor(e), !0===this.situation.loops||i<this.situation.loops?(this.pos=e-i, a=this.situation.loop, this.situation.loop=i): (this.absPos=this.situation.loops, this.pos=1, a=this.situation.loop-1, this.situation.loop=this.situation.loops), this.situation.reversing&&(this.situation.reversed=this.situation.reversed!=Boolean((this.situation.loop-a)%2))):(this.absPos=Math.min(this.absPos, 1), this.pos=this.absPos), this.pos<0&&(this.pos=0), this.situation.reversed&&(this.pos=1-this.pos);
    var s=this.situation.ease(this.pos);
    for(var n in this.situation.once)n>this.lastPos&&n<=s&&(this.situation.once[n].call(this.target(), this.pos, s), delete this.situation.once[n]);
    return this.active&&this.target().fire("during",  {
    pos: this.pos, eased:s, fx:this, situation:this.situation;
}
), this.situation?(this.eachAt(), 1==this.pos&&!this.situation.reversed||this.situation.reversed&&0==this.pos?(this.stopAnimFrame(), this.target().fire("finished",  {
    fx: this, situation:this.situation;
}
), this.situations.length||(this.target().fire("allfinished"), this.situations.length||(this.target().off(".fx"), this.active=!1)), this.active?this.dequeue():this.clearCurrent()):!this.paused&&this.active&&this.startAnimFrame(), this.lastPos=s, this):this;
}, eachAt:function() {
    var t, e=this, a=this.target(), s=this.situation;
    for(var n in s.animations)t=[].concat(s.animations[n]).map((function(t) {
    return"string"!=typeof t&&t.at?t.at(s.ease(e.pos), e.pos): t;
}
)), a[n].apply(a, t);
    for(var n in s.attrs)t=[n].concat(s.attrs[n]).map((function(t) {
    return"string"!=typeof t&&t.at?t.at(s.ease(e.pos), e.pos): t;
}
)), a.attr.apply(a, t);
    for(var n in s.styles)t=[n].concat(s.styles[n]).map((function(t) {
    return"string"!=typeof t&&t.at?t.at(s.ease(e.pos), e.pos): t;
}
)), a.style.apply(a, t);
    if(s.transforms.length) {
    t=s.initialTransformation, n=0;
    for(var o=s.transforms.length;
    n<o;
    n++) {
    var r=s.transforms[n];
    r instanceof i.Matrix?t=r.relative?t.multiply((new i.Matrix).morph(r).at(s.ease(this.pos))): t.morph(r).at(s.ease(this.pos)):(r.relative||r.undo(t.extract()), t=t.multiply(r.at(s.ease(this.pos))));
}
a.matrix(t);
}return this;
}, once:function(t, e, i) {
    var a=this.last();
    return i||(t=a.ease(t)), a.once[t]=e, this;
}
, _callStart: function() {
    return setTimeout(function() {
    this.start();
}
.bind(this), 0), this;
}}, parent: i.Element, construct: {
    animate: function(t, e, a) {
    return(this.fx||(this.fx=new i.FX(this))).animate(t, e, a);
}
, delay: function(t) {
    return(this.fx||(this.fx=new i.FX(this))).delay(t);
}
, stop: function(t, e) {
    return this.fx&&this.fx.stop(t, e), this;
}
, finish: function() {
    return this.fx&&this.fx.finish(), this;
}
}}), i.MorphObj=i.invent( {
    create: function(t, e) {
    return i.Color.isColor(e)?new i.Color(t).morph(e): i.regex.delimiter.test(t)?i.regex.pathLetters.test(t)?new i.PathArray(t).morph(e):new i.Array(t).morph(e):i.regex.numberAndUnit.test(e)?new i.Number(t).morph(e):(this.value=t, void(this.destination=e));
}
, extend: {
    at: function(t, e) {
    return e<1?this.value: this.destination;
}
, valueOf:function() {
    return this.value;
}
}}), i.extend(i.FX,  {
    attr: function(t, e, i) {
    if("object"===Ka(t))for(var a in t)this.attr(a, t[a]);
    else this.add(t, e, "attrs");
    return this;
}
, plot: function(t, e, i, a) {
    return 4==arguments.length?this.plot([t, e, i, a]): this.add("plot", new(this.target().morphArray)(t));
}
}), i.Box=i.invent( {
    create: function(t, e, a, s) {
    if(!("object"!==Ka(t)||t instanceof i.Element))return i.Box.call(this, null!=t.left?t.left: t.x, null!=t.top?t.top:t.y, t.width, t.height);
    4==arguments.length&&(this.x=t, this.y=e, this.width=a, this.height=s), x(this);
}
}), i.BBox=i.invent( {
    create: function(t) {
    if(i.Box.apply(this, [].slice.call(arguments)), t instanceof i.Element) {
    var a;
    try {
    if(!e.documentElement.contains) {
    for(var s=t.node;
    s.parentNode;
    )s=s.parentNode;
    if(s!=e)throw new Error("Element not in the dom");
}
a=t.node.getBBox();
}catch(e) {
    if(t instanceof i.Shape) {
    i.parser.draw||i.prepare();
    var n=t.clone(i.parser.draw.instance).show();
    n&&n.node&&"function"==typeof n.node.getBBox&&(a=n.node.getBBox()), n&&"function"==typeof n.remove&&n.remove();
}
else a= {
    x: t.node.clientLeft, y:t.node.clientTop, width:t.node.clientWidth, height:t.node.clientHeight;
}
}i.Box.call(this, a);
}}, inherit:i.Box, parent:i.Element, construct: {
    bbox: function() {
    return new i.BBox(this);
}
}}), i.BBox.prototype.constructor=i.BBox, i.Matrix=i.invent( {
    create: function(t) {
    var e=f([1, 0, 0, 1, 0, 0]);
    t=null===t?e: t instanceof i.Element?t.matrixify():"string"==typeof t?f(t.split(i.regex.delimiter).map(parseFloat)):6==arguments.length?f([].slice.call(arguments)):Array.isArray(t)?f(t):t&&"object"===Ka(t)?t:e;
    for(var a=b.length-1;
    a>=0;
    --a)this[b[a]]=null!=t[b[a]]?t[b[a]]: e[b[a]];
}
, extend: {
    extract: function() {
    var t=g(this, 0, 1);
    g(this, 1, 0);
    var e=180/Math.PI*Math.atan2(t.y, t.x)-90;
    return {
    x: this.e, y:this.f, transformedX:(this.e*Math.cos(e*Math.PI/180)+this.f*Math.sin(e*Math.PI/180))/Math.sqrt(this.a*this.a+this.b*this.b), transformedY:(this.f*Math.cos(e*Math.PI/180)+this.e*Math.sin(-e*Math.PI/180))/Math.sqrt(this.c*this.c+this.d*this.d), rotation:e, a:this.a, b:this.b, c:this.c, d:this.d, e:this.e, f:this.f, matrix:new i.Matrix(this);
}
}, clone:function() {
    return new i.Matrix(this);
}
, morph: function(t) {
    return this.destination=new i.Matrix(t), this;
}
, multiply: function(t) {
    return new i.Matrix(this.native().multiply((e=t, e instanceof i.Matrix||(e=new i.Matrix(e)), e).native()));
    var e;
}
, inverse: function() {
    return new i.Matrix(this.native().inverse());
}
, translate: function(t, e) {
    return new i.Matrix(this.native().translate(t||0, e||0));
}
, native: function() {
    for(var t=i.parser.native.createSVGMatrix(), e=b.length-1;
    e>=0;
    e--)t[b[e]]=this[b[e]];
    return t;
}
, toString: function() {
    return"matrix("+m(this.a)+", "+m(this.b)+", "+m(this.c)+", "+m(this.d)+", "+m(this.e)+", "+m(this.f)+")"}
}, parent: i.Element, construct: {
    ctm: function() {
    return new i.Matrix(this.node.getCTM());
}
, screenCTM: function() {
    if(this instanceof i.Nested) {
    var t=this.rect(1, 1), e=t.node.getScreenCTM();
    return t.remove(), new i.Matrix(e);
}
return new i.Matrix(this.node.getScreenCTM());
}}}), i.Point=i.invent( {
    create: function(t, e) {
    var i;
    i=Array.isArray(t)? {
    x: t[0], y:t[1];
}
:"object"===Ka(t)? {
    x: t.x, y:t.y;
}
:null!=t? {
    x: t, y:null!=e?e:t;
}
: {
    x: 0, y:0;
}
, this.x=i.x, this.y=i.y;
}, extend: {
    clone: function() {
    return new i.Point(this);
}
, morph: function(t, e) {
    return this.destination=new i.Point(t, e), this;
}
}}), i.extend(i.Element,  {
    point: function(t, e) {
    return new i.Point(t, e).transform(this.screenCTM().inverse());
}
}), i.extend(i.Element,  {
    attr: function(t, e, a) {
    if(null==t) {
    for(t= {
}
, a=(e=this.node.attributes).length-1;
    a>=0;
    a--)t[e[a].nodeName]=i.regex.isNumber.test(e[a].nodeValue)?parseFloat(e[a].nodeValue): e[a].nodeValue;
    return t;
}
if("object"===Ka(t))for(var s in t)this.attr(s, t[s]);
    else if(null===e)this.node.removeAttribute(t);
    else {
    if(null==e)return null==(e=this.node.getAttribute(t))?i.defaults.attrs[t]: i.regex.isNumber.test(e)?parseFloat(e):e;
    "stroke-width"==t?this.attr("stroke", parseFloat(e)>0?this._stroke: null):"stroke"==t&&(this._stroke=e), "fill"!=t&&"stroke"!=t||(i.regex.isImage.test(e)&&(e=this.doc().defs().image(e, 0, 0)), e instanceof i.Image&&(e=this.doc().defs().pattern(0, 0, (function() {
    this.add(e);
}
)))), "number"==typeof e?e=new i.Number(e): i.Color.isColor(e)?e=new i.Color(e):Array.isArray(e)&&(e=new i.Array(e)), "leading"==t?this.leading&&this.leading(e):"string"==typeof a?this.node.setAttributeNS(a, t, e.toString()):this.node.setAttribute(t, e.toString()), !this.rebuild||"font-size"!=t&&"x"!=t||this.rebuild(t, e);
}return this;
}}), i.extend(i.Element,  {
    transform: function(t, e) {
    var a;
    return"object"!==Ka(t)?(a=new i.Matrix(this).extract(), "string"==typeof t?a[t]: a):(a=new i.Matrix(this), e=!!e||!!t.relative, null!=t.a&&(a=e?a.multiply(new i.Matrix(t)):new i.Matrix(t)), this.attr("transform", a));
}
}), i.extend(i.Element,  {
    untransform: function() {
    return this.attr("transform", null);
}
, matrixify: function() {
    return(this.attr("transform")||"").split(i.regex.transforms).slice(0, -1).map((function(t) {
    var e=t.trim().split("(");
    return[e[0], e[1].split(i.regex.delimiter).map((function(t) {
    return parseFloat(t);
}
))];
})).reduce((function(t, e) {
    return"matrix"==e[0]?t.multiply(f(e[1])): t[e[0]].apply(t, e[1]);
}
), new i.Matrix);
}, toParent:function(t) {
    if(this==t)return this;
    var e=this.screenCTM(), i=t.screenCTM().inverse();
    return this.addTo(t).untransform().transform(i.multiply(e)), this;
}
, toDoc: function() {
    return this.toParent(this.doc());
}
}), i.Transformation=i.invent( {
    create: function(t, e) {
    if(arguments.length>1&&"boolean"!=typeof e)return this.constructor.call(this, [].slice.call(arguments));
    if(Array.isArray(t))for(var i=0, a=this.arguments.length;
    i<a;
    ++i)this[this.arguments[i]]=t[i];
    else if(t&&"object"===Ka(t))for(i=0, a=this.arguments.length;
    i<a;
    ++i)this[this.arguments[i]]=t[this.arguments[i]];
    this.inversed=!1, !0===e&&(this.inversed=!0);
}
}), i.Translate=i.invent( {
    parent: i.Matrix, inherit:i.Transformation, create:function(t, e) {
    this.constructor.apply(this, [].slice.call(arguments));
}
, extend:  {
    arguments: ["transformedX", "transformedY"], method:"translate"}
}), i.extend(i.Element,  {
    style: function(t, e) {
    if(0==arguments.length)return this.node.style.cssText||"";
    if(arguments.length<2)if("object"===Ka(t))for(var a in t)this.style(a, t[a]);
    else {
    if(!i.regex.isCss.test(t))return this.node.style[c(t)];
    for(t=t.split(/\s*;
    \s*/).filter((function(t) {
    return!!t;
}
)).map((function(t) {
    return t.split(/\s*: \s*/);
}
));
    e=t.pop();
    )this.style(e[0], e[1]);
}
else this.node.style[c(t)]=null===e||i.regex.isBlank.test(e)?"": e;
    return this;
}
}), i.Parent=i.invent( {
    create: function(t) {
    this.constructor.call(this, t);
}
, inherit: i.Element, extend: {
    children: function() {
    return i.utils.map(i.utils.filterSVGElements(this.node.childNodes), (function(t) {
    return i.adopt(t);
}
));
}, add: function(t, e) {
    return null==e?this.node.appendChild(t.node): t.node!=this.node.childNodes[e]&&this.node.insertBefore(t.node, this.node.childNodes[e]), this;
}
, put:function(t, e) {
    return this.add(t, e), t;
}
, has: function(t) {
    return this.index(t)>=0;
}
, index: function(t) {
    return[].slice.call(this.node.childNodes).indexOf(t.node);
}
, get: function(t) {
    return i.adopt(this.node.childNodes[t]);
}
, first: function() {
    return this.get(0);
}
, last: function() {
    return this.get(this.node.childNodes.length-1);
}
, each: function(t, e) {
    for(var a=this.children(), s=0, n=a.length;
    s<n;
    s++)a[s]instanceof i.Element&&t.apply(a[s], [s, a]), e&&a[s]instanceof i.Container&&a[s].each(t, e);
    return this;
}
, removeElement: function(t) {
    return this.node.removeChild(t.node), this;
}
, clear: function() {
    for(;
    this.node.hasChildNodes();
    )this.node.removeChild(this.node.lastChild);
    return delete this._defs, this;
}
, defs: function() {
    return this.doc().defs();
}
}}), i.extend(i.Parent,  {
    ungroup: function(t, e) {
    return 0===e||this instanceof i.Defs||this.node==i.parser.draw||(t=t||(this instanceof i.Doc?this: this.parent(i.Parent)), e=e||1/0, this.each((function() {
    return this instanceof i.Defs?this: this instanceof i.Parent?this.ungroup(t, e-1):this.toParent(t);
}
)), this.node.firstChild||this.remove()), this;
}, flatten:function(t, e) {
    return this.ungroup(t, e);
}
}), i.Container=i.invent( {
    create: function(t) {
    this.constructor.call(this, t);
}
, inherit: i.Parent;
}), i.ViewBox=i.invent( {
    parent: i.Container, construct: {
}
}
), ["click", "dblclick", "mousedown", "mouseup", "mouseover", "mouseout", "mousemove", "touchstart", "touchmove", "touchleave", "touchend", "touchcancel"].forEach((function(t) {
    i.Element.prototype[t]=function(e) {
    return i.on(this.node, t, e), this;
}
})), i.listeners=[], i.handlerMap=[], i.listenerId=0, i.on=function(t, e, a, s, n) {
    var o=a.bind(s||t.instance||t), r=(i.handlerMap.indexOf(t)+1||i.handlerMap.push(t))-1, l=e.split(".")[0], c=e.split(".")[1]||"*";
    i.listeners[r]=i.listeners[r]|| {
}
, i.listeners[r][l]=i.listeners[r][l]|| {
}
, i.listeners[r][l][c]=i.listeners[r][l][c]|| {
}
, a._svgjsListenerId||(a._svgjsListenerId=++i.listenerId), i.listeners[r][l][c][a._svgjsListenerId]=o, t.addEventListener(l, o, n|| {
    passive: !0;
}
);
}, i.off=function(t, e, a) {
    var s=i.handlerMap.indexOf(t), n=e&&e.split(".")[0], o=e&&e.split(".")[1], r="";
    if(-1!=s)if(a) {
    if("function"==typeof a&&(a=a._svgjsListenerId), !a)return;
    i.listeners[s][n]&&i.listeners[s][n][o||"*"]&&(t.removeEventListener(n, i.listeners[s][n][o||"*"][a], !1), delete i.listeners[s][n][o||"*"][a]);
}
else if(o&&n) {
    if(i.listeners[s][n]&&i.listeners[s][n][o]) {
    for(var l in i.listeners[s][n][o])i.off(t, [n, o].join("."), l);
    delete i.listeners[s][n][o];
}
}else if(o)for(var c in i.listeners[s])for(var r in i.listeners[s][c])o===r&&i.off(t, [c, o].join("."));
    else if(n) {
    if(i.listeners[s][n]) {
    for(var r in i.listeners[s][n])i.off(t, [n, r].join("."));
    delete i.listeners[s][n];
}
}else {
    for(var c in i.listeners[s])i.off(t, c);
    delete i.listeners[s], delete i.handlerMap[s];
}
}, i.extend(i.Element,  {
    on: function(t, e, a, s) {
    return i.on(this.node, t, e, a, s), this;
}
, off: function(t, e) {
    return i.off(this.node, t, e), this;
}
, fire: function(e, a) {
    return e instanceof t.Event?this.node.dispatchEvent(e): this.node.dispatchEvent(e=new i.CustomEvent(e,  {
    detail: a, cancelable:!0;
}
)), this._event=e, this;
}, event:function() {
    return this._event;
}
}), i.Defs=i.invent( {
    create: "defs", inherit:i.Container;
}
), i.G=i.invent( {
    create: "g", inherit:i.Container, extend: {
    x: function(t) {
    return null==t?this.transform("x"): this.transform( {
    x: t-this.x();
}
, !0);
}}, construct: {
    group: function() {
    return this.put(new i.G);
}
}}), i.Doc=i.invent( {
    create: function(t) {
    t&&("svg"==(t="string"==typeof t?e.getElementById(t): t).nodeName?this.constructor.call(this, t):(this.constructor.call(this, i.create("svg")), t.appendChild(this.node), this.size("100%", "100%")), this.namespace().defs());
}
, inherit:i.Container, extend: {
    namespace: function() {
    return this.attr( {
    xmlns: i.ns, version:"1.1"}
).attr("xmlns:xlink", i.xlink, i.xmlns).attr("xmlns:svgjs", i.svgjs, i.xmlns);
}, defs:function() {
    var t;
    return this._defs||((t=this.node.getElementsByTagName("defs")[0])?this._defs=i.adopt(t): this._defs=new i.Defs, this.node.appendChild(this._defs.node)), this._defs;
}
, parent:function() {
    return this.node.parentNode&&"#document"!=this.node.parentNode.nodeName?this.node.parentNode: null;
}
, remove:function() {
    return this.parent()&&this.parent().removeChild(this.node), this;
}
, clear: function() {
    for(;
    this.node.hasChildNodes();
    )this.node.removeChild(this.node.lastChild);
    return delete this._defs, i.parser.draw&&!i.parser.draw.parentNode&&this.node.appendChild(i.parser.draw), this;
}
, clone: function(t) {
    this.writeDataToDom();
    var e=this.node, i=p(e.cloneNode(!0));
    return t?(t.node||t).appendChild(i.node): e.parentNode.insertBefore(i.node, e.nextSibling), i;
}
}}), i.extend(i.Element,  {
}
), i.Gradient=i.invent( {
    create: function(t) {
    this.constructor.call(this, i.create(t+"Gradient")), this.type=t;
}
, inherit: i.Container, extend: {
    at: function(t, e, a) {
    return this.put(new i.Stop).update(t, e, a);
}
, update: function(t) {
    return this.clear(), "function"==typeof t&&t.call(this, this), this;
}
, fill: function() {
    return"url(#"+this.id()+")"}
, toString: function() {
    return this.fill();
}
, attr: function(t, e, a) {
    return"transform"==t&&(t="gradientTransform"), i.Container.prototype.attr.call(this, t, e, a);
}
}, construct:  {
    gradient: function(t, e) {
    return this.defs().gradient(t, e);
}
}}), i.extend(i.Gradient, i.FX,  {
    from: function(t, e) {
    return"radial"==(this._target||this).type?this.attr( {
    fx: new i.Number(t), fy:new i.Number(e);
}
):this.attr( {
    x1: new i.Number(t), y1:new i.Number(e);
}
);
}, to:function(t, e) {
    return"radial"==(this._target||this).type?this.attr( {
    cx: new i.Number(t), cy:new i.Number(e);
}
):this.attr( {
    x2: new i.Number(t), y2:new i.Number(e);
}
);
}}), i.extend(i.Defs,  {
    gradient: function(t, e) {
    return this.put(new i.Gradient(t)).update(e);
}
}), i.Stop=i.invent( {
    create: "stop", inherit:i.Element, extend: {
    update: function(t) {
    return("number"==typeof t||t instanceof i.Number)&&(t= {
    offset: arguments[0], color:arguments[1], opacity:arguments[2];
}
), null!=t.opacity&&this.attr("stop-opacity", t.opacity), null!=t.color&&this.attr("stop-color", t.color), null!=t.offset&&this.attr("offset", new i.Number(t.offset)), this;
}}}), i.Pattern=i.invent( {
    create: "pattern", inherit:i.Container, extend: {
    fill: function() {
    return"url(#"+this.id()+")"}
, update: function(t) {
    return this.clear(), "function"==typeof t&&t.call(this, this), this;
}
, toString: function() {
    return this.fill();
}
, attr: function(t, e, a) {
    return"transform"==t&&(t="patternTransform"), i.Container.prototype.attr.call(this, t, e, a);
}
}, construct:  {
    pattern: function(t, e, i) {
    return this.defs().pattern(t, e, i);
}
}}), i.extend(i.Defs,  {
    pattern: function(t, e, a) {
    return this.put(new i.Pattern).update(a).attr( {
    x: 0, y:0, width:t, height:e, patternUnits:"userSpaceOnUse"}
);
}}), i.Shape=i.invent( {
    create: function(t) {
    this.constructor.call(this, t);
}
, inherit: i.Element;
}), i.Symbol=i.invent( {
    create: "symbol", inherit:i.Container, construct: {
    symbol: function() {
    return this.put(new i.Symbol);
}
}}), i.Use=i.invent( {
    create: "use", inherit:i.Shape, extend: {
    element: function(t, e) {
    return this.attr("href", (e||"")+"#"+t, i.xlink);
}
}, construct:  {
    use: function(t, e) {
    return this.put(new i.Use).element(t, e);
}
}}), i.Rect=i.invent( {
    create: "rect", inherit:i.Shape, construct: {
    rect: function(t, e) {
    return this.put(new i.Rect).size(t, e);
}
}}), i.Circle=i.invent( {
    create: "circle", inherit:i.Shape, construct: {
    circle: function(t) {
    return this.put(new i.Circle).rx(new i.Number(t).divide(2)).move(0, 0);
}
}}), i.extend(i.Circle, i.FX,  {
    rx: function(t) {
    return this.attr("r", t);
}
, ry: function(t) {
    return this.rx(t);
}
}), i.Ellipse=i.invent( {
    create: "ellipse", inherit:i.Shape, construct: {
    ellipse: function(t, e) {
    return this.put(new i.Ellipse).size(t, e).move(0, 0);
}
}}), i.extend(i.Ellipse, i.Rect, i.FX,  {
    rx: function(t) {
    return this.attr("rx", t);
}
, ry: function(t) {
    return this.attr("ry", t);
}
}), i.extend(i.Circle, i.Ellipse,  {
    x: function(t) {
    return null==t?this.cx()-this.rx(): this.cx(t+this.rx());
}
, y:function(t) {
    return null==t?this.cy()-this.ry(): this.cy(t+this.ry());
}
, cx:function(t) {
    return null==t?this.attr("cx"): this.attr("cx", t);
}
, cy:function(t) {
    return null==t?this.attr("cy"): this.attr("cy", t);
}
, width:function(t) {
    return null==t?2*this.rx(): this.rx(new i.Number(t).divide(2));
}
, height:function(t) {
    return null==t?2*this.ry(): this.ry(new i.Number(t).divide(2));
}
, size:function(t, e) {
    var a=u(this, t, e);
    return this.rx(new i.Number(a.width).divide(2)).ry(new i.Number(a.height).divide(2));
}
}), i.Line=i.invent( {
    create: "line", inherit:i.Shape, extend: {
    array: function() {
    return new i.PointArray([[this.attr("x1"), this.attr("y1")], [this.attr("x2"), this.attr("y2")]]);
}
, plot: function(t, e, a, s) {
    return null==t?this.array(): (t=void 0!==e? {
    x1: t, y1:e, x2:a, y2:s;
}
:new i.PointArray(t).toLine(), this.attr(t));
}, move:function(t, e) {
    return this.attr(this.array().move(t, e).toLine());
}
, size: function(t, e) {
    var i=u(this, t, e);
    return this.attr(this.array().size(i.width, i.height).toLine());
}
}, construct:  {
    line: function(t, e, a, s) {
    return i.Line.prototype.plot.apply(this.put(new i.Line), null!=t?[t, e, a, s]: [0, 0, 0, 0]);
}
}}), i.Polyline=i.invent( {
    create: "polyline", inherit:i.Shape, construct: {
    polyline: function(t) {
    return this.put(new i.Polyline).plot(t||new i.PointArray);
}
}}), i.Polygon=i.invent( {
    create: "polygon", inherit:i.Shape, construct: {
    polygon: function(t) {
    return this.put(new i.Polygon).plot(t||new i.PointArray);
}
}}), i.extend(i.Polyline, i.Polygon,  {
    array: function() {
    return this._array||(this._array=new i.PointArray(this.attr("points")));
}
, plot: function(t) {
    return null==t?this.array(): this.clear().attr("points", "string"==typeof t?t:this._array=new i.PointArray(t));
}
, clear:function() {
    return delete this._array, this;
}
, move: function(t, e) {
    return this.attr("points", this.array().move(t, e));
}
, size: function(t, e) {
    var i=u(this, t, e);
    return this.attr("points", this.array().size(i.width, i.height));
}
}), i.extend(i.Line, i.Polyline, i.Polygon,  {
    morphArray: i.PointArray, x:function(t) {
    return null==t?this.bbox().x: this.move(t, this.bbox().y);
}
, y:function(t) {
    return null==t?this.bbox().y: this.move(this.bbox().x, t);
}
, width:function(t) {
    var e=this.bbox();
    return null==t?e.width: this.size(t, e.height);
}
, height:function(t) {
    var e=this.bbox();
    return null==t?e.height: this.size(e.width, t);
}
}), i.Path=i.invent( {
    create: "path", inherit:i.Shape, extend: {
    morphArray: i.PathArray, array:function() {
    return this._array||(this._array=new i.PathArray(this.attr("d")));
}
, plot: function(t) {
    return null==t?this.array(): this.clear().attr("d", "string"==typeof t?t:this._array=new i.PathArray(t));
}
, clear:function() {
    return delete this._array, this;
}
}, construct:  {
    path: function(t) {
    return this.put(new i.Path).plot(t||new i.PathArray);
}
}}), i.Image=i.invent( {
    create: "image", inherit:i.Shape, extend: {
    load: function(e) {
    if(!e)return this;
    var a=this, s=new t.Image;
    return i.on(s, "load", (function() {
    i.off(s);
    var t=a.parent(i.Pattern);
    null!==t&&(0==a.width()&&0==a.height()&&a.size(s.width, s.height), t&&0==t.width()&&0==t.height()&&t.size(a.width(), a.height()), "function"==typeof a._loaded&&a._loaded.call(a,  {
    width: s.width, height:s.height, ratio:s.width/s.height, url:e;
}
));
})), i.on(s, "error", (function(t) {
    i.off(s), "function"==typeof a._error&&a._error.call(a, t);
}
)), this.attr("href", s.src=this.src=e, i.xlink);
}, loaded: function(t) {
    return this._loaded=t, this;
}
, error: function(t) {
    return this._error=t, this;
}
}, construct:  {
    image: function(t, e, a) {
    return this.put(new i.Image).load(t).size(e||0, a||e||0);
}
}}), i.Text=i.invent( {
    create: function() {
    this.constructor.call(this, i.create("text")), this.dom.leading=new i.Number(1.3), this._rebuild=!0, this._build=!1, this.attr("font-family", i.defaults.attrs["font-family"]);
}
, inherit: i.Shape, extend: {
    x: function(t) {
    return null==t?this.attr("x"): this.attr("x", t);
}
, text:function(t) {
    if(void 0===t) {
    t="";
    for(var e=this.node.childNodes, a=0, s=e.length;
    a<s;
    ++a)0!=a&&3!=e[a].nodeType&&1==i.adopt(e[a]).dom.newLined&&(t+="\n"), t+=e[a].textContent;
    return t;
}
if(this.clear().build(!0), "function"==typeof t)t.call(this, this);
    else {
    a=0;
    for(var n=(t=t.split("\n")).length;
    a<n;
    a++)this.tspan(t[a]).newLine();
}
return this.build(!1).rebuild();
}, size: function(t) {
    return this.attr("font-size", t).rebuild();
}
, leading: function(t) {
    return null==t?this.dom.leading: (this.dom.leading=new i.Number(t), this.rebuild());
}
, lines:function() {
    var t=(this.textPath&&this.textPath()||this).node, e=i.utils.map(i.utils.filterSVGElements(t.childNodes), (function(t) {
    return i.adopt(t);
}
));
    return new i.Set(e);
}
, rebuild: function(t) {
    if("boolean"==typeof t&&(this._rebuild=t), this._rebuild) {
    var e=this, a=0, s=this.dom.leading*new i.Number(this.attr("font-size"));
    this.lines().each((function() {
    this.dom.newLined&&(e.textPath()||this.attr("x", e.attr("x")), "\n"==this.text()?a+=s: (this.attr("dy", s+a), a=0));
}
)), this.fire("rebuild");
}return this;
}, build:function(t) {
    return this._build=!!t, this;
}
, setData: function(t) {
    return this.dom=t, this.dom.leading=new i.Number(t.leading||1.3), this;
}
}, construct:  {
    text: function(t) {
    return this.put(new i.Text).text(t);
}
, plain: function(t) {
    return this.put(new i.Text).plain(t);
}
}}), i.Tspan=i.invent( {
    create: "tspan", inherit:i.Shape, extend: {
    text: function(t) {
    return null==t?this.node.textContent+(this.dom.newLined?"\n": ""):("function"==typeof t?t.call(this, this):this.plain(t), this);
}
, dx:function(t) {
    return this.attr("dx", t);
}
, dy: function(t) {
    return this.attr("dy", t);
}
, newLine: function() {
    var t=this.parent(i.Text);
    return this.dom.newLined=!0, this.dy(t.dom.leading*t.attr("font-size")).attr("x", t.x());
}
}}), i.extend(i.Text, i.Tspan,  {
    plain: function(t) {
    return!1===this._build&&this.clear(), this.node.appendChild(e.createTextNode(t)), this;
}
, tspan: function(t) {
    var e=(this.textPath&&this.textPath()||this).node, a=new i.Tspan;
    return!1===this._build&&this.clear(), e.appendChild(a.node), a.text(t);
}
, clear: function() {
    for(var t=(this.textPath&&this.textPath()||this).node;
    t.hasChildNodes();
    )t.removeChild(t.lastChild);
    return this;
}
, length: function() {
    return this.node.getComputedTextLength();
}
}), i.TextPath=i.invent( {
    create: "textPath", inherit:i.Parent, parent:i.Text, construct: {
    morphArray: i.PathArray, array:function() {
    var t=this.track();
    return t?t.array(): null;
}
, plot:function(t) {
    var e=this.track(), i=null;
    return e&&(i=e.plot(t)), null==t?i: this;
}
, track:function() {
    var t=this.textPath();
    if(t)return t.reference("href");
}
, textPath: function() {
    if(this.node.firstChild&&"textPath"==this.node.firstChild.nodeName)return i.adopt(this.node.firstChild);
}
}}), i.Nested=i.invent( {
    create: function() {
    this.constructor.call(this, i.create("svg")), this.style("overflow", "visible");
}
, inherit: i.Container, construct: {
    nested: function() {
    return this.put(new i.Nested);
}
}});
    var r= {
    stroke: ["color", "width", "opacity", "linecap", "linejoin", "miterlimit", "dasharray", "dashoffset"], fill:["color", "opacity", "rule"], prefix:function(t, e) {
    return"color"==e?t: t+"-"+e;
}
};
    function l(t, e, a, s) {
    return a+s.replace(i.regex.dots, " .");
}
function c(t) {
    return t.toLowerCase().replace(/-(.)/g, (function(t, e) {
    return e.toUpperCase();
}
));
}function h(t) {
    return t.charAt(0).toUpperCase()+t.slice(1);
}
function d(t) {
    var e=t.toString(16);
    return 1==e.length?"0"+e: e;
}
function u(t, e, i) {
    if(null==e||null==i) {
    var a=t.bbox();
    null==e?e=a.width/a.height*i: null==i&&(i=a.height/a.width*e);
}
return {
    width: e, height:i;
}
}function g(t, e, i) {
    return {
    x: e*t.a+i*t.c+0, y:e*t.b+i*t.d+0;
}
}function f(t) {
    return {
    a: t[0], b:t[1], c:t[2], d:t[3], e:t[4], f:t[5];
}
}function p(e) {
    for(var a=e.childNodes.length-1;
    a>=0;
    a--)e.childNodes[a]instanceof t.SVGElement&&p(e.childNodes[a]);
    return i.adopt(e).id(i.eid(e.nodeName));
}
function x(t) {
    return null==t.x&&(t.x=0, t.y=0, t.width=0, t.height=0), t.w=t.width, t.h=t.height, t.x2=t.x+t.width, t.y2=t.y+t.height, t.cx=t.x+t.width/2, t.cy=t.y+t.height/2, t;
}
function m(t) {
    return Math.abs(t)>1e-37?t: 0;
}
["fill", "stroke"].forEach((function(t) {
    var e= {
}
;
    e[t]=function(e) {
    if(void 0===e)return this;
    if("string"==typeof e||i.Color.isRgb(e)||e&&"function"==typeof e.fill)this.attr(t, e);
    else for(var a=r[t].length-1;
    a>=0;
    a--)null!=e[r[t][a]]&&this.attr(r.prefix(t, r[t][a]), e[r[t][a]]);
    return this;
}
, i.extend(i.Element, i.FX, e);
})), i.extend(i.Element, i.FX,  {
    translate: function(t, e) {
    return this.transform( {
    x: t, y:e;
}
);
}, matrix:function(t) {
    return this.attr("transform", new i.Matrix(6==arguments.length?[].slice.call(arguments): t));
}
, opacity:function(t) {
    return this.attr("opacity", t);
}
, dx: function(t) {
    return this.x(new i.Number(t).plus(this instanceof i.FX?0: this.x()), !0);
}
, dy:function(t) {
    return this.y(new i.Number(t).plus(this instanceof i.FX?0: this.y()), !0);
}
}), i.extend(i.Path,  {
    length: function() {
    return this.node.getTotalLength();
}
, pointAt: function(t) {
    return this.node.getPointAtLength(t);
}
}), i.Set=i.invent( {
    create: function(t) {
    Array.isArray(t)?this.members=t: this.clear();
}
, extend: {
    add: function() {
    for(var t=[].slice.call(arguments), e=0, i=t.length;
    e<i;
    e++)this.members.push(t[e]);
    return this;
}
, remove: function(t) {
    var e=this.index(t);
    return e>-1&&this.members.splice(e, 1), this;
}
, each: function(t) {
    for(var e=0, i=this.members.length;
    e<i;
    e++)t.apply(this.members[e], [e, this.members]);
    return this;
}
, clear: function() {
    return this.members=[], this;
}
, length: function() {
    return this.members.length;
}
, has: function(t) {
    return this.index(t)>=0;
}
, index: function(t) {
    return this.members.indexOf(t);
}
, get: function(t) {
    return this.members[t];
}
, first: function() {
    return this.get(0);
}
, last: function() {
    return this.get(this.members.length-1);
}
, valueOf: function() {
    return this.members;
}
}, construct:  {
    set: function(t) {
    return new i.Set(t);
}
}}), i.FX.Set=i.invent( {
    create: function(t) {
    this.set=t;
}
}), i.Set.inherit=function() {
    var t=[];
    for(var e in i.Shape.prototype)"function"==typeof i.Shape.prototype[e]&&"function"!=typeof i.Set.prototype[e]&&t.push(e);
    for(var e in t.forEach((function(t) {
    i.Set.prototype[t]=function() {
    for(var e=0, a=this.members.length;
    e<a;
    e++)this.members[e]&&"function"==typeof this.members[e][t]&&this.members[e][t].apply(this.members[e], arguments);
    return"animate"==t?this.fx||(this.fx=new i.FX.Set(this)): this;
}
})), t=[], i.FX.prototype)"function"==typeof i.FX.prototype[e]&&"function"!=typeof i.FX.Set.prototype[e]&&t.push(e);
    t.forEach((function(t) {
    i.FX.Set.prototype[t]=function() {
    for(var e=0, i=this.set.members.length;
    e<i;
    e++)this.set.members[e].fx[t].apply(this.set.members[e].fx, arguments);
    return this;
}
}));
}, i.extend(i.Element,  {
}
), i.extend(i.Element,  {
    remember: function(t, e) {
    if("object"===Ka(arguments[0]))for(var i in t)this.remember(i, t[i]);
    else {
    if(1==arguments.length)return this.memory()[t];
    this.memory()[t]=e;
}
return this;
}, forget: function() {
    if(0==arguments.length)this._memory= {
}
;
    else for(var t=arguments.length-1;
    t>=0;
    t--)delete this.memory()[arguments[t]];
    return this;
}
, memory: function() {
    return this._memory||(this._memory= {
}
);
}
}), i.get=function(t) {
    var a=e.getElementById(function(t) {
    var e=(t||"").toString().match(i.regex.reference);
    if(e)return e[1];
}
(t)||t);
    return i.adopt(a);
}
, i.select=function(t, a) {
    return new i.Set(i.utils.map((a||e).querySelectorAll(t), (function(t) {
    return i.adopt(t);
}
)));
}, i.extend(i.Parent,  {
    select: function(t) {
    return i.select(t, this.node);
}
});
    var b="abcdef".split("");
    if("function"!=typeof t.CustomEvent) {
    var v=function(t, i) {
    i=i|| {
    bubbles: !1, cancelable:!1, detail:void 0;
}
;
    var a=e.createEvent("CustomEvent");
    return a.initCustomEvent(t, i.bubbles, i.cancelable, i.detail), a;
}
;
    v.prototype=t.Event.prototype, i.CustomEvent=v;
}
else i.CustomEvent=t.CustomEvent;
    return i;
}
, "function"==typeof define&&define.amd?define((function() {
    return Sn(Cn, Cn.document);
}
)): "object"===(void 0===qa?"undefined":Ka(qa))?qa=Cn.document?Sn(Cn, Cn.document):function(t) {
    return Sn(t, t.document);
}
: Cn.SVG=Sn(Cn, Cn.document), 
/*! svg.filter.js - v2.0.2 - 2016-02-24
* https://github.com/wout/svg.filter.js
* Copyright (c) 2016 Wout Fierens;
     Licensed MIT */
function() {
    SVG.Filter=SVG.invent( {
    create: "filter", inherit:SVG.Parent, extend: {
    source: "SourceGraphic", sourceAlpha:"SourceAlpha", background:"BackgroundImage", backgroundAlpha:"BackgroundAlpha", fill:"FillPaint", stroke:"StrokePaint", autoSetIn:!0, put:function(t, e) {
    return this.add(t, e), !t.attr("in")&&this.autoSetIn&&t.attr("in", this.source), t.attr("result")||t.attr("result", t), t;
}
, blend: function(t, e, i) {
    return this.put(new SVG.BlendEffect(t, e, i));
}
, colorMatrix: function(t, e) {
    return this.put(new SVG.ColorMatrixEffect(t, e));
}
, convolveMatrix: function(t) {
    return this.put(new SVG.ConvolveMatrixEffect(t));
}
, componentTransfer: function(t) {
    return this.put(new SVG.ComponentTransferEffect(t));
}
, composite: function(t, e, i) {
    return this.put(new SVG.CompositeEffect(t, e, i));
}
, flood: function(t, e) {
    return this.put(new SVG.FloodEffect(t, e));
}
, offset: function(t, e) {
    return this.put(new SVG.OffsetEffect(t, e));
}
, image: function(t) {
    return this.put(new SVG.ImageEffect(t));
}
, merge: function() {
    var t=[void 0];
    for(var e in arguments)t.push(arguments[e]);
    return this.put(new(SVG.MergeEffect.bind.apply(SVG.MergeEffect, t)));
}
, gaussianBlur: function(t, e) {
    return this.put(new SVG.GaussianBlurEffect(t, e));
}
, morphology: function(t, e) {
    return this.put(new SVG.MorphologyEffect(t, e));
}
, diffuseLighting: function(t, e, i) {
    return this.put(new SVG.DiffuseLightingEffect(t, e, i));
}
, displacementMap: function(t, e, i, a, s) {
    return this.put(new SVG.DisplacementMapEffect(t, e, i, a, s));
}
, specularLighting: function(t, e, i, a) {
    return this.put(new SVG.SpecularLightingEffect(t, e, i, a));
}
, tile: function() {
    return this.put(new SVG.TileEffect);
}
, turbulence: function(t, e, i, a, s) {
    return this.put(new SVG.TurbulenceEffect(t, e, i, a, s));
}
, toString: function() {
    return"url(#"+this.attr("id")+")"}
}}), SVG.extend(SVG.Defs,  {
    filter: function(t) {
    var e=this.put(new SVG.Filter);
    return"function"==typeof t&&t.call(e, e), e;
}
}), SVG.extend(SVG.Container,  {
    filter: function(t) {
    return this.defs().filter(t);
}
}), SVG.extend(SVG.Element, SVG.G, SVG.Nested,  {
    filter: function(t) {
    return this.filterer=t instanceof SVG.Element?t: this.doc().filter(t), this.doc()&&this.filterer.doc()!==this.doc()&&this.doc().defs().add(this.filterer), this.attr("filter", this.filterer), this.filterer;
}
, unfilter:function(t) {
    return this.filterer&&!0===t&&this.filterer.remove(), delete this.filterer, this.attr("filter", null);
}
}), SVG.Effect=SVG.invent( {
    create: function() {
    this.constructor.call(this);
}
, inherit: SVG.Element, extend: {
    in: function(t) {
    return null==t?this.parent()&&this.parent().select('[result="'+this.attr("in")+'"]').get(0)||this.attr("in"): this.attr("in", t);
}
, result:function(t) {
    return null==t?this.attr("result"): this.attr("result", t);
}
, toString:function() {
    return this.result();
}
}}), SVG.ParentEffect=SVG.invent( {
    create: function() {
    this.constructor.call(this);
}
, inherit: SVG.Parent, extend: {
    in: function(t) {
    return null==t?this.parent()&&this.parent().select('[result="'+this.attr("in")+'"]').get(0)||this.attr("in"): this.attr("in", t);
}
, result:function(t) {
    return null==t?this.attr("result"): this.attr("result", t);
}
, toString:function() {
    return this.result();
}
}});
    var t= {
    blend: function(t, e) {
    return this.parent()&&this.parent().blend(this, t, e);
}
, colorMatrix: function(t, e) {
    return this.parent()&&this.parent().colorMatrix(t, e).in(this);
}
, convolveMatrix: function(t) {
    return this.parent()&&this.parent().convolveMatrix(t).in(this);
}
, componentTransfer: function(t) {
    return this.parent()&&this.parent().componentTransfer(t).in(this);
}
, composite: function(t, e) {
    return this.parent()&&this.parent().composite(this, t, e);
}
, flood: function(t, e) {
    return this.parent()&&this.parent().flood(t, e);
}
, offset: function(t, e) {
    return this.parent()&&this.parent().offset(t, e).in(this);
}
, image: function(t) {
    return this.parent()&&this.parent().image(t);
}
, merge: function() {
    return this.parent()&&this.parent().merge.apply(this.parent(), [this].concat(arguments));
}
, gaussianBlur: function(t, e) {
    return this.parent()&&this.parent().gaussianBlur(t, e).in(this);
}
, morphology: function(t, e) {
    return this.parent()&&this.parent().morphology(t, e).in(this);
}
, diffuseLighting: function(t, e, i) {
    return this.parent()&&this.parent().diffuseLighting(t, e, i).in(this);
}
, displacementMap: function(t, e, i, a) {
    return this.parent()&&this.parent().displacementMap(this, t, e, i, a);
}
, specularLighting: function(t, e, i, a) {
    return this.parent()&&this.parent().specularLighting(t, e, i, a).in(this);
}
, tile: function() {
    return this.parent()&&this.parent().tile().in(this);
}
, turbulence: function(t, e, i, a, s) {
    return this.parent()&&this.parent().turbulence(t, e, i, a, s).in(this);
}
};
    SVG.extend(SVG.Effect, t), SVG.extend(SVG.ParentEffect, t), SVG.ChildEffect=SVG.invent( {
    create: function() {
    this.constructor.call(this);
}
, inherit: SVG.Element, extend: {
    in: function(t) {
    this.attr("in", t);
}
}});
    var e= {
    blend: function(t, e, i) {
    this.attr( {
    in: t, in2:e, mode:i||"normal"}
);
}, colorMatrix:function(t, e) {
    "matrix"==t&&(e=s(e)), this.attr( {
    type: t, values:void 0===e?null:e;
}
);
}, convolveMatrix:function(t) {
    t=s(t), this.attr( {
    order: Math.sqrt(t.split(" ").length), kernelMatrix:t;
}
);
}, composite:function(t, e, i) {
    this.attr( {
    in: t, in2:e, operator:i;
}
);
}, flood:function(t, e) {
    this.attr("flood-color", t), null!=e&&this.attr("flood-opacity", e);
}
, offset: function(t, e) {
    this.attr( {
    dx: t, dy:e;
}
);
}, image:function(t) {
    this.attr("href", t, SVG.xlink);
}
, displacementMap: function(t, e, i, a, s) {
    this.attr( {
    in: t, in2:e, scale:i, xChannelSelector:a, yChannelSelector:s;
}
);
}, gaussianBlur:function(t, e) {
    null!=t||null!=e?this.attr("stdDeviation", n(Array.prototype.slice.call(arguments))): this.attr("stdDeviation", "0 0");
}
, morphology:function(t, e) {
    this.attr( {
    operator: t, radius:e;
}
);
}, tile:function() {
}
, turbulence:function(t, e, i, a, s) {
    this.attr( {
    numOctaves: e, seed:i, stitchTiles:a, baseFrequency:t, type:s;
}
);
}}, i= {
    merge: function() {
    var t;
    if(arguments[0]instanceof SVG.Set) {
    var e=this;
    arguments[0].each((function(t) {
    this instanceof SVG.MergeNode?e.put(this): (this instanceof SVG.Effect||this instanceof SVG.ParentEffect)&&e.put(new SVG.MergeNode(this));
}
));
}else {
    t=Array.isArray(arguments[0])?arguments[0]: arguments;
    for(var i=0;
    i<t.length;
    i++)t[i]instanceof SVG.MergeNode?this.put(t[i]): this.put(new SVG.MergeNode(t[i]));
}
}, componentTransfer:function(t) {
    if(this.rgb=new SVG.Set, ["r", "g", "b", "a"].forEach(function(t) {
    this[t]=new(SVG["Func"+t.toUpperCase()])("identity"), this.rgb.add(this[t]), this.node.appendChild(this[t].node);
}
.bind(this)), t)for(var e in t.rgb&&(["r", "g", "b"].forEach(function(e) {
    this[e].attr(t.rgb);
}
.bind(this)), delete t.rgb), t)this[e].attr(t[e]);
}, diffuseLighting: function(t, e, i) {
    this.attr( {
    surfaceScale: t, diffuseConstant:e, kernelUnitLength:i;
}
);
}, specularLighting:function(t, e, i, a) {
    this.attr( {
    surfaceScale: t, diffuseConstant:e, specularExponent:i, kernelUnitLength:a;
}
);
}}, a= {
    distantLight: function(t, e) {
    this.attr( {
    azimuth: t, elevation:e;
}
);
}, pointLight:function(t, e, i) {
    this.attr( {
    x: t, y:e, z:i;
}
);
}, spotLight:function(t, e, i, a, s, n) {
    this.attr( {
    x: t, y:e, z:i, pointsAtX:a, pointsAtY:s, pointsAtZ:n;
}
);
}, mergeNode:function(t) {
    this.attr("in", t);
}
};
    function s(t) {
    return Array.isArray(t)&&(t=new SVG.Array(t)), t.toString().replace(/^\s+/, "").replace(/\s+$/, "").replace(/\s+/g, " ");
}
function n(t) {
    if(!Array.isArray(t))return t;
    for(var e=0, i=t.length, a=[];
    e<i;
    e++)a.push(t[e]);
    return a.join(" ");
}
function o() {
    var t=function() {
}
;
    for(var e in"function"==typeof arguments[arguments.length-1]&&(t=arguments[arguments.length-1], Array.prototype.splice.call(arguments, arguments.length-1, 1)), arguments)for(var i in arguments[e])t(arguments[e][i], i, arguments[e]);
}
["r", "g", "b", "a"].forEach((function(t) {
    a["Func"+t.toUpperCase()]=function(t) {
    switch(this.attr("type", t), t) {
    case"table": this.attr("tableValues", arguments[1]);
    break;
    case"linear": this.attr("slope", arguments[1]), this.attr("intercept", arguments[2]);
    break;
    case"gamma": this.attr("amplitude", arguments[1]), this.attr("exponent", arguments[2]), this.attr("offset", arguments[2]);
}
}})), o(e, (function(t, e) {
    var i=e.charAt(0).toUpperCase()+e.slice(1);
    SVG[i+"Effect"]=SVG.invent( {
    create: function() {
    this.constructor.call(this, SVG.create("fe"+i)), t.apply(this, arguments), this.result(this.attr("id")+"Out");
}
, inherit: SVG.Effect, extend: {
}
}
);
})), o(i, (function(t, e) {
    var i=e.charAt(0).toUpperCase()+e.slice(1);
    SVG[i+"Effect"]=SVG.invent( {
    create: function() {
    this.constructor.call(this, SVG.create("fe"+i)), t.apply(this, arguments), this.result(this.attr("id")+"Out");
}
, inherit: SVG.ParentEffect, extend: {
}
}
);
})), o(a, (function(t, e) {
    var i=e.charAt(0).toUpperCase()+e.slice(1);
    SVG[i]=SVG.invent( {
    create: function() {
    this.constructor.call(this, SVG.create("fe"+i)), t.apply(this, arguments);
}
, inherit: SVG.ChildEffect, extend: {
}
}
);
})), SVG.extend(SVG.MergeEffect,  {
    in: function(t) {
    return t instanceof SVG.MergeNode?this.add(t, 0): this.add(new SVG.MergeNode(t), 0), this;
}
}), SVG.extend(SVG.CompositeEffect, SVG.BlendEffect, SVG.DisplacementMapEffect,  {
    in2: function(t) {
    return null==t?this.parent()&&this.parent().select('[result="'+this.attr("in2")+'"]').get(0)||this.attr("in2"): this.attr("in2", t);
}
}), SVG.filter= {
    sepiatone: [.343, .669, .119, 0, 0, .249, .626, .13, 0, 0, .172, .334, .111, 0, 0, 0, 0, 0, 1, 0];
}
}.call(void 0), function() {
    function t(t, s, n, o, r, l, c) {
    for(var h=t.slice(s, n||c), d=o.slice(r, l||c), u=0, g= {
    pos: [0, 0], start:[0, 0];
}
, f= {
    pos: [0, 0], start:[0, 0];
}
;
    h[u]=e.call(g, h[u]), d[u]=e.call(f, d[u]), h[u][0]!=d[u][0]||"M"==h[u][0]||"A"==h[u][0]&&(h[u][4]!=d[u][4]||h[u][5]!=d[u][5])?(Array.prototype.splice.apply(h, [u, 1].concat(a.call(g, h[u]))), Array.prototype.splice.apply(d, [u, 1].concat(a.call(f, d[u])))): (h[u]=i.call(g, h[u]), d[u]=i.call(f, d[u])), ++u!=h.length||u!=d.length;
    )u==h.length&&h.push(["C", g.pos[0], g.pos[1], g.pos[0], g.pos[1], g.pos[0], g.pos[1]]), u==d.length&&d.push(["C", f.pos[0], f.pos[1], f.pos[0], f.pos[1], f.pos[0], f.pos[1]]);
    return {
    start: h, dest:d;
}
}function e(t) {
    switch(t[0]) {
    case"z": case"Z":t[0]="L", t[1]=this.start[0], t[2]=this.start[1];
    break;
    case"H": t[0]="L", t[2]=this.pos[1];
    break;
    case"V": t[0]="L", t[2]=t[1], t[1]=this.pos[0];
    break;
    case"T": t[0]="Q", t[3]=t[1], t[4]=t[2], t[1]=this.reflection[1], t[2]=this.reflection[0];
    break;
    case"S": t[0]="C", t[6]=t[4], t[5]=t[3], t[4]=t[2], t[3]=t[1], t[2]=this.reflection[1], t[1]=this.reflection[0];
}
return t;
}function i(t) {
    var e=t.length;
    return this.pos=[t[e-2], t[e-1]], -1!="SCQT".indexOf(t[0])&&(this.reflection=[2*this.pos[0]-t[e-4], 2*this.pos[1]-t[e-3]]), t;
}
function a(t) {
    var e=[t];
    switch(t[0]) {
    case"M": return this.pos=this.start=[t[1], t[2]], e;
    case"L": t[5]=t[3]=t[1], t[6]=t[4]=t[2], t[1]=this.pos[0], t[2]=this.pos[1];
    break;
    case"Q": t[6]=t[4], t[5]=t[3], t[4]=1*t[4]/3+2*t[2]/3, t[3]=1*t[3]/3+2*t[1]/3, t[2]=1*this.pos[1]/3+2*t[2]/3, t[1]=1*this.pos[0]/3+2*t[1]/3;
    break;
    case"A": t=(e=function(t, e) {
    var i, a, s, n, o, r, l, c, h, d, u, g, f, p, x, m, b, v, y, w, k, A, C, S, E, L, _=Math.abs(e[1]), M=Math.abs(e[2]), T=e[3]%360, P=e[4], D=e[5], I=e[6], O=e[7], z=new SVG.Point(t), Y=new SVG.Point(I, O), N=[];
    if(0===_||0===M||z.x===Y.x&&z.y===Y.y)return[["C", z.x, z.y, Y.x, Y.y, Y.x, Y.y]];
    for((a=(i=new SVG.Point((z.x-Y.x)/2, (z.y-Y.y)/2).transform((new SVG.Matrix).rotate(T))).x*i.x/(_*_)+i.y*i.y/(M*M))>1&&(_*=a=Math.sqrt(a), M*=a), s=(new SVG.Matrix).rotate(T).scale(1/_, 1/M).rotate(-T), z=z.transform(s), r=(n=[(Y=Y.transform(s)).x-z.x, Y.y-z.y])[0]*n[0]+n[1]*n[1], o=Math.sqrt(r), n[0]/=o, n[1]/=o, l=r<4?Math.sqrt(1-r/4): 0, P===D&&(l*=-1), c=new SVG.Point((Y.x+z.x)/2+l*-n[1], (Y.y+z.y)/2+l*n[0]), h=new SVG.Point(z.x-c.x, z.y-c.y), d=new SVG.Point(Y.x-c.x, Y.y-c.y), u=Math.acos(h.x/Math.sqrt(h.x*h.x+h.y*h.y)), h.y<0&&(u*=-1), g=Math.acos(d.x/Math.sqrt(d.x*d.x+d.y*d.y)), d.y<0&&(g*=-1), D&&u>g&&(g+=2*Math.PI), !D&&u<g&&(g-=2*Math.PI), m=[], b=u, f=(g-u)/(p=Math.ceil(2*Math.abs(u-g)/Math.PI)), x=4*Math.tan(f/4)/3, k=0;
    k<=p;
    k++)y=Math.cos(b), v=Math.sin(b), w=new SVG.Point(c.x+y, c.y+v), m[k]=[new SVG.Point(w.x+x*v, w.y-x*y), w, new SVG.Point(w.x-x*v, w.y+x*y)], b+=f;
    for(m[0][0]=m[0][1].clone(), m[m.length-1][2]=m[m.length-1][1].clone(), s=(new SVG.Matrix).rotate(T).scale(_, M).rotate(-T), k=0, A=m.length;
    k<A;
    k++)m[k][0]=m[k][0].transform(s), m[k][1]=m[k][1].transform(s), m[k][2]=m[k][2].transform(s);
    for(k=1, A=m.length;
    k<A;
    k++)C=(w=m[k-1][2]).x, S=w.y, E=(w=m[k][0]).x, L=w.y, I=(w=m[k][1]).x, O=w.y, N.push(["C", C, S, E, L, I, O]);
    return N;
}
(this.pos, t))[0];
}return t[0]="C", this.pos=[t[5], t[6]], this.reflection=[2*t[5]-t[3], 2*t[6]-t[4]], e;
}function s(t, e) {
    if(!1===e)return!1;
    for(var i=e, a=t.length;
    i<a;
    ++i)if("M"==t[i][0])return i;
    return!1;
}
SVG.extend(SVG.PathArray,  {
    morph: function(e) {
    for(var i=this.value, a=this.parse(e), n=0, o=0, r=!1, l=!1;
    !1!==n||!1!==o;
    ) {
    var c;
    r=s(i, !1!==n&&n+1), l=s(a, !1!==o&&o+1), !1===n&&(n=0==(c=new SVG.PathArray(h.start).bbox()).height||0==c.width?i.push(i[0])-1: i.push(["M", c.x+c.width/2, c.y+c.height/2])-1), !1===o&&(o=0==(c=new SVG.PathArray(h.dest).bbox()).height||0==c.width?a.push(a[0])-1:a.push(["M", c.x+c.width/2, c.y+c.height/2])-1);
    var h=t(i, n, r, a, o, l);
    i=i.slice(0, n).concat(h.start, !1===r?[]: i.slice(r)), a=a.slice(0, o).concat(h.dest, !1===l?[]:a.slice(l)), n=!1!==r&&n+h.start.length, o=!1!==l&&o+h.dest.length;
}
return this.value=i, this.destination=new SVG.PathArray, this.destination.value=a, this;
}});
}(), 
/*! svg.draggable.js - v2.2.2 - 2019-01-08
* https://github.com/svgdotjs/svg.draggable.js
* Copyright (c) 2019 Wout Fierens;
     Licensed MIT */
function() {
    function t(t) {
    t.remember("_draggable", this), this.el=t;
}
t.prototype.init=function(t, e) {
    var i=this;
    this.constraint=t, this.value=e, this.el.on("mousedown.drag", (function(t) {
    i.start(t);
}
)), this.el.on("touchstart.drag", (function(t) {
    i.start(t);
}
));
}, t.prototype.transformPoint=function(t, e) {
    var i=(t=t||window.event).changedTouches&&t.changedTouches[0]||t;
    return this.p.x=i.clientX-(e||0), this.p.y=i.clientY, this.p.matrixTransform(this.m);
}
, t.prototype.getBBox=function() {
    var t=this.el.bbox();
    return this.el instanceof SVG.Nested&&(t=this.el.rbox()), (this.el instanceof SVG.G||this.el instanceof SVG.Use||this.el instanceof SVG.Nested)&&(t.x=this.el.x(), t.y=this.el.y()), t;
}
, t.prototype.start=function(t) {
    if("click"!=t.type&&"mousedown"!=t.type&&"mousemove"!=t.type||1==(t.which||t.buttons)) {
    var e=this;
    if(this.el.fire("beforedrag",  {
    event: t, handler:this;
}
), !this.el.event().defaultPrevented) {
    t.preventDefault(), t.stopPropagation(), this.parent=this.parent||this.el.parent(SVG.Nested)||this.el.parent(SVG.Doc), this.p=this.parent.node.createSVGPoint(), this.m=this.el.node.getScreenCTM().inverse();
    var i, a=this.getBBox();
    if(this.el instanceof SVG.Text)switch(i=this.el.node.getComputedTextLength(), this.el.attr("text-anchor")) {
    case"middle": i/=2;
    break;
    case"start": i=0;
}
this.startPoints= {
    point: this.transformPoint(t, i), box:a, transform:this.el.transform();
}
, SVG.on(window, "mousemove.drag", (function(t) {
    e.drag(t);
}
)), SVG.on(window, "touchmove.drag", (function(t) {
    e.drag(t);
}
)), SVG.on(window, "mouseup.drag", (function(t) {
    e.end(t);
}
)), SVG.on(window, "touchend.drag", (function(t) {
    e.end(t);
}
)), this.el.fire("dragstart",  {
    event: t, p:this.startPoints.point, m:this.m, handler:this;
}
);
}}}, t.prototype.drag=function(t) {
    var e=this.getBBox(), i=this.transformPoint(t), a=this.startPoints.box.x+i.x-this.startPoints.point.x, s=this.startPoints.box.y+i.y-this.startPoints.point.y, n=this.constraint, o=i.x-this.startPoints.point.x, r=i.y-this.startPoints.point.y;
    if(this.el.fire("dragmove",  {
    event: t, p:i, m:this.m, handler:this;
}
), this.el.event().defaultPrevented)return i;
    if("function"==typeof n) {
    var l=n.call(this.el, a, s, this.m);
    "boolean"==typeof l&&(l= {
    x: l, y:l;
}
), !0===l.x?this.el.x(a):!1!==l.x&&this.el.x(l.x), !0===l.y?this.el.y(s):!1!==l.y&&this.el.y(l.y);
}else"object"==typeof n&&(null!=n.minX&&a<n.minX?o=(a=n.minX)-this.startPoints.box.x:null!=n.maxX&&a>n.maxX-e.width&&(o=(a=n.maxX-e.width)-this.startPoints.box.x), null!=n.minY&&s<n.minY?r=(s=n.minY)-this.startPoints.box.y:null!=n.maxY&&s>n.maxY-e.height&&(r=(s=n.maxY-e.height)-this.startPoints.box.y), null!=n.snapToGrid&&(a-=a%n.snapToGrid, s-=s%n.snapToGrid, o-=o%n.snapToGrid, r-=r%n.snapToGrid), this.el instanceof SVG.G?this.el.matrix(this.startPoints.transform).transform( {
    x: o, y:r;
}
, !0):this.el.move(a, s));
    return i;
}
, t.prototype.end=function(t) {
    var e=this.drag(t);
    this.el.fire("dragend",  {
    event: t, p:e, m:this.m, handler:this;
}
), SVG.off(window, "mousemove.drag"), SVG.off(window, "touchmove.drag"), SVG.off(window, "mouseup.drag"), SVG.off(window, "touchend.drag");
}, SVG.extend(SVG.Element,  {
    draggable: function(e, i) {
    "function"!=typeof e&&"object"!=typeof e||(i=e, e=!0);
    var a=this.remember("_draggable")||new t(this);
    return(e=void 0===e||e)?a.init(i|| {
}
, e): (this.off("mousedown.drag"), this.off("touchstart.drag")), this;
}
});
}.call(void 0), function() {
    function t(t) {
    this.el=t, t.remember("_selectHandler", this), this.pointSelection= {
    isSelected: !1;
}
, this.rectSelection= {
    isSelected: !1;
}
, this.pointsList= {
    lt: [0, 0], rt:["width", 0], rb:["width", "height"], lb:[0, "height"], t:["width", 0], r:["width", "height"], b:["width", "height"], l:[0, "height"];
}
, this.pointCoord=function(t, e, i) {
    var a="string"!=typeof t?t: e[t];
    return i?a/2: a;
}
, this.pointCoords=function(t, e) {
    var i=this.pointsList[t];
    return {
    x: this.pointCoord(i[0], e, "t"===t||"b"===t), y:this.pointCoord(i[1], e, "r"===t||"l"===t);
}
}}t.prototype.init=function(t, e) {
    var i=this.el.bbox();
    this.options= {
}
;
    var a=this.el.selectize.defaults.points;
    for(var s in this.el.selectize.defaults)this.options[s]=this.el.selectize.defaults[s], void 0!==e[s]&&(this.options[s]=e[s]);
    var n=["points", "pointsExclude"];
    for(var s in n) {
    var o=this.options[n[s]];
    "string"==typeof o?o=o.length>0?o.split(/\s*, \s*/i): []:"boolean"==typeof o&&"points"===n[s]&&(o=o?a:[]), this.options[n[s]]=o;
}
this.options.points=[a, this.options.points].reduce((function(t, e) {
    return t.filter((function(t) {
    return e.indexOf(t)>-1;
}
));
})), this.options.points=[this.options.points, this.options.pointsExclude].reduce((function(t, e) {
    return t.filter((function(t) {
    return e.indexOf(t)<0;
}
));
})), this.parent=this.el.parent(), this.nested=this.nested||this.parent.group(), this.nested.matrix(new SVG.Matrix(this.el).translate(i.x, i.y)), this.options.deepSelect&&-1!==["line", "polyline", "polygon"].indexOf(this.el.type)?this.selectPoints(t): this.selectRect(t), this.observe(), this.cleanup();
}, t.prototype.selectPoints=function(t) {
    return this.pointSelection.isSelected=t, this.pointSelection.set||(this.pointSelection.set=this.parent.set(), this.drawPoints()), this;
}
, t.prototype.getPointArray=function() {
    var t=this.el.bbox();
    return this.el.array().valueOf().map((function(e) {
    return[e[0]-t.x, e[1]-t.y];
}
));
}, t.prototype.drawPoints=function() {
    for(var t=this, e=this.getPointArray(), i=0, a=e.length;
    i<a;
    ++i) {
    var s=function(e) {
    return function(i) {
    (i=i||window.event).preventDefault?i.preventDefault(): i.returnValue=!1, i.stopPropagation();
    var a=i.pageX||i.touches[0].pageX, s=i.pageY||i.touches[0].pageY;
    t.el.fire("point",  {
    x: a, y:s, i:e, event:i;
}
);
}}(i), n=this.drawPoint(e[i][0], e[i][1]).addClass(this.options.classPoints).addClass(this.options.classPoints+"_point").on("touchstart", s).on("mousedown", s);
    this.pointSelection.set.add(n);
}
}, t.prototype.drawPoint=function(t, e) {
    var i=this.options.pointType;
    switch(i) {
    case"circle": return this.drawCircle(t, e);
    case"rect": return this.drawRect(t, e);
    default: if("function"==typeof i)return i.call(this, t, e);
    throw new Error("Unknown "+i+" point type!");
}
}, t.prototype.drawCircle=function(t, e) {
    return this.nested.circle(this.options.pointSize).center(t, e);
}
, t.prototype.drawRect=function(t, e) {
    return this.nested.rect(this.options.pointSize, this.options.pointSize).center(t, e);
}
, t.prototype.updatePointSelection=function() {
    var t=this.getPointArray();
    this.pointSelection.set.each((function(e) {
    this.cx()===t[e][0]&&this.cy()===t[e][1]||this.center(t[e][0], t[e][1]);
}
));
}, t.prototype.updateRectSelection=function() {
    var t=this, e=this.el.bbox();
    if(this.rectSelection.set.get(0).attr( {
    width: e.width, height:e.height;
}
), this.options.points.length&&this.options.points.map((function(i, a) {
    var s=t.pointCoords(i, e);
    t.rectSelection.set.get(a+1).center(s.x, s.y);
}
)), this.options.rotationPoint) {
    var i=this.rectSelection.set.length();
    this.rectSelection.set.get(i-1).center(e.width/2, 20);
}
}, t.prototype.selectRect=function(t) {
    var e=this, i=this.el.bbox();
    function a(t) {
    return function(i) {
    (i=i||window.event).preventDefault?i.preventDefault(): i.returnValue=!1, i.stopPropagation();
    var a=i.pageX||i.touches[0].pageX, s=i.pageY||i.touches[0].pageY;
    e.el.fire(t,  {
    x: a, y:s, event:i;
}
);
}}if(this.rectSelection.isSelected=t, this.rectSelection.set=this.rectSelection.set||this.parent.set(), this.rectSelection.set.get(0)||this.rectSelection.set.add(this.nested.rect(i.width, i.height).addClass(this.options.classRect)), this.options.points.length&&this.rectSelection.set.length()<2&&(this.options.points.map((function(t, s) {
    var n=e.pointCoords(t, i), o=e.drawPoint(n.x, n.y).attr("class", e.options.classPoints+"_"+t).on("mousedown", a(t)).on("touchstart", a(t));
    e.rectSelection.set.add(o);
}
)), this.rectSelection.set.each((function() {
    this.addClass(e.options.classPoints);
}
))), this.options.rotationPoint&&(this.options.points&&!this.rectSelection.set.get(9)||!this.options.points&&!this.rectSelection.set.get(1))) {
    var s=function(t) {
    (t=t||window.event).preventDefault?t.preventDefault(): t.returnValue=!1, t.stopPropagation();
    var i=t.pageX||t.touches[0].pageX, a=t.pageY||t.touches[0].pageY;
    e.el.fire("rot",  {
    x: i, y:a, event:t;
}
);
}, n=this.drawPoint(i.width/2, 20).attr("class", this.options.classPoints+"_rot").on("touchstart", s).on("mousedown", s);
    this.rectSelection.set.add(n);
}
}, t.prototype.handler=function() {
    var t=this.el.bbox();
    this.nested.matrix(new SVG.Matrix(this.el).translate(t.x, t.y)), this.rectSelection.isSelected&&this.updateRectSelection(), this.pointSelection.isSelected&&this.updatePointSelection();
}
, t.prototype.observe=function() {
    var t=this;
    if(MutationObserver)if(this.rectSelection.isSelected||this.pointSelection.isSelected)this.observerInst=this.observerInst||new MutationObserver((function() {
    t.handler();
}
)), this.observerInst.observe(this.el.node,  {
    attributes: !0;
}
);
    else try {
    this.observerInst.disconnect(), delete this.observerInst;
}
catch(t) {
}
else this.el.off("DOMAttrModified.select"), (this.rectSelection.isSelected||this.pointSelection.isSelected)&&this.el.on("DOMAttrModified.select", (function() {
    t.handler();
}
));
}, t.prototype.cleanup=function() {
    !this.rectSelection.isSelected&&this.rectSelection.set&&(this.rectSelection.set.each((function() {
    this.remove();
}
)), this.rectSelection.set.clear(), delete this.rectSelection.set), !this.pointSelection.isSelected&&this.pointSelection.set&&(this.pointSelection.set.each((function() {
    this.remove();
}
)), this.pointSelection.set.clear(), delete this.pointSelection.set), this.pointSelection.isSelected||this.rectSelection.isSelected||(this.nested.remove(), delete this.nested);
}, SVG.extend(SVG.Element,  {
    selectize: function(e, i) {
    return"object"==typeof e&&(i=e, e=!0), (this.remember("_selectHandler")||new t(this)).init(void 0===e||e, i|| {
}
), this;
}
}), SVG.Element.prototype.selectize.defaults= {
    points: ["lt", "rt", "rb", "lb", "t", "r", "b", "l"], pointsExclude:[], classRect:"svg_select_boundingRect", classPoints:"svg_select_points", pointSize:7, rotationPoint:!0, deepSelect:!1, pointType:"circle"}
}(), function() {
    (function() {
    function t(t) {
    t.remember("_resizeHandler", this), this.el=t, this.parameters= {
}
, this.lastUpdateCall=null, this.p=t.doc().node.createSVGPoint();
}
t.prototype.transformPoint=function(t, e, i) {
    return this.p.x=t-(this.offset.x-window.pageXOffset), this.p.y=e-(this.offset.y-window.pageYOffset), this.p.matrixTransform(i||this.m);
}
, t.prototype._extractPosition=function(t) {
    return {
    x: null!=t.clientX?t.clientX:t.touches[0].clientX, y:null!=t.clientY?t.clientY:t.touches[0].clientY;
}
}, t.prototype.init=function(t) {
    var e=this;
    if(this.stop(), "stop"!==t) {
    for(var i in this.options= {
}
, this.el.resize.defaults)this.options[i]=this.el.resize.defaults[i], void 0!==t[i]&&(this.options[i]=t[i]);
    this.el.on("lt.resize", (function(t) {
    e.resize(t||window.event);
}
)), this.el.on("rt.resize", (function(t) {
    e.resize(t||window.event);
}
)), this.el.on("rb.resize", (function(t) {
    e.resize(t||window.event);
}
)), this.el.on("lb.resize", (function(t) {
    e.resize(t||window.event);
}
)), this.el.on("t.resize", (function(t) {
    e.resize(t||window.event);
}
)), this.el.on("r.resize", (function(t) {
    e.resize(t||window.event);
}
)), this.el.on("b.resize", (function(t) {
    e.resize(t||window.event);
}
)), this.el.on("l.resize", (function(t) {
    e.resize(t||window.event);
}
)), this.el.on("rot.resize", (function(t) {
    e.resize(t||window.event);
}
)), this.el.on("point.resize", (function(t) {
    e.resize(t||window.event);
}
)), this.update();
}}, t.prototype.stop=function() {
    return this.el.off("lt.resize"), this.el.off("rt.resize"), this.el.off("rb.resize"), this.el.off("lb.resize"), this.el.off("t.resize"), this.el.off("r.resize"), this.el.off("b.resize"), this.el.off("l.resize"), this.el.off("rot.resize"), this.el.off("point.resize"), this;
}
, t.prototype.resize=function(t) {
    var e=this;
    this.m=this.el.node.getScreenCTM().inverse(), this.offset= {
    x: window.pageXOffset, y:window.pageYOffset;
}
;
    var i=this._extractPosition(t.detail.event);
    if(this.parameters= {
    type: this.el.type, p:this.transformPoint(i.x, i.y), x:t.detail.x, y:t.detail.y, box:this.el.bbox(), rotation:this.el.transform().rotation;
}
, "text"===this.el.type&&(this.parameters.fontSize=this.el.attr()["font-size"]), void 0!==t.detail.i) {
    var a=this.el.array().valueOf();
    this.parameters.i=t.detail.i, this.parameters.pointCoords=[a[t.detail.i][0], a[t.detail.i][1]];
}
switch(t.type) {
    case"lt": this.calc=function(t, e) {
    var i=this.snapToGrid(t, e);
    if(this.parameters.box.width-i[0]>0&&this.parameters.box.height-i[1]>0) {
    if("text"===this.parameters.type)return this.el.move(this.parameters.box.x+i[0], this.parameters.box.y), void this.el.attr("font-size", this.parameters.fontSize-i[0]);
    i=this.checkAspectRatio(i), this.el.move(this.parameters.box.x+i[0], this.parameters.box.y+i[1]).size(this.parameters.box.width-i[0], this.parameters.box.height-i[1]);
}
};
    break;
    case"rt": this.calc=function(t, e) {
    var i=this.snapToGrid(t, e, 2);
    if(this.parameters.box.width+i[0]>0&&this.parameters.box.height-i[1]>0) {
    if("text"===this.parameters.type)return this.el.move(this.parameters.box.x-i[0], this.parameters.box.y), void this.el.attr("font-size", this.parameters.fontSize+i[0]);
    i=this.checkAspectRatio(i, !0), this.el.move(this.parameters.box.x, this.parameters.box.y+i[1]).size(this.parameters.box.width+i[0], this.parameters.box.height-i[1]);
}
};
    break;
    case"rb": this.calc=function(t, e) {
    var i=this.snapToGrid(t, e, 0);
    if(this.parameters.box.width+i[0]>0&&this.parameters.box.height+i[1]>0) {
    if("text"===this.parameters.type)return this.el.move(this.parameters.box.x-i[0], this.parameters.box.y), void this.el.attr("font-size", this.parameters.fontSize+i[0]);
    i=this.checkAspectRatio(i), this.el.move(this.parameters.box.x, this.parameters.box.y).size(this.parameters.box.width+i[0], this.parameters.box.height+i[1]);
}
};
    break;
    case"lb": this.calc=function(t, e) {
    var i=this.snapToGrid(t, e, 1);
    if(this.parameters.box.width-i[0]>0&&this.parameters.box.height+i[1]>0) {
    if("text"===this.parameters.type)return this.el.move(this.parameters.box.x+i[0], this.parameters.box.y), void this.el.attr("font-size", this.parameters.fontSize-i[0]);
    i=this.checkAspectRatio(i, !0), this.el.move(this.parameters.box.x+i[0], this.parameters.box.y).size(this.parameters.box.width-i[0], this.parameters.box.height+i[1]);
}
};
    break;
    case"t": this.calc=function(t, e) {
    var i=this.snapToGrid(t, e, 2);
    if(this.parameters.box.height-i[1]>0) {
    if("text"===this.parameters.type)return;
    this.el.move(this.parameters.box.x, this.parameters.box.y+i[1]).height(this.parameters.box.height-i[1]);
}
};
    break;
    case"r": this.calc=function(t, e) {
    var i=this.snapToGrid(t, e, 0);
    if(this.parameters.box.width+i[0]>0) {
    if("text"===this.parameters.type)return;
    this.el.move(this.parameters.box.x, this.parameters.box.y).width(this.parameters.box.width+i[0]);
}
};
    break;
    case"b": this.calc=function(t, e) {
    var i=this.snapToGrid(t, e, 0);
    if(this.parameters.box.height+i[1]>0) {
    if("text"===this.parameters.type)return;
    this.el.move(this.parameters.box.x, this.parameters.box.y).height(this.parameters.box.height+i[1]);
}
};
    break;
    case"l": this.calc=function(t, e) {
    var i=this.snapToGrid(t, e, 1);
    if(this.parameters.box.width-i[0]>0) {
    if("text"===this.parameters.type)return;
    this.el.move(this.parameters.box.x+i[0], this.parameters.box.y).width(this.parameters.box.width-i[0]);
}
};
    break;
    case"rot": this.calc=function(t, e) {
    var i=t+this.parameters.p.x, a=e+this.parameters.p.y, s=Math.atan2(this.parameters.p.y-this.parameters.box.y-this.parameters.box.height/2, this.parameters.p.x-this.parameters.box.x-this.parameters.box.width/2), n=Math.atan2(a-this.parameters.box.y-this.parameters.box.height/2, i-this.parameters.box.x-this.parameters.box.width/2), o=this.parameters.rotation+180*(n-s)/Math.PI+this.options.snapToAngle/2;
    this.el.center(this.parameters.box.cx, this.parameters.box.cy).rotate(o-o%this.options.snapToAngle, this.parameters.box.cx, this.parameters.box.cy);
}
;
    break;
    case"point": this.calc=function(t, e) {
    var i=this.snapToGrid(t, e, this.parameters.pointCoords[0], this.parameters.pointCoords[1]), a=this.el.array().valueOf();
    a[this.parameters.i][0]=this.parameters.pointCoords[0]+i[0], a[this.parameters.i][1]=this.parameters.pointCoords[1]+i[1], this.el.plot(a);
}
}this.el.fire("resizestart",  {
    dx: this.parameters.x, dy:this.parameters.y, event:t;
}
), SVG.on(window, "touchmove.resize", (function(t) {
    e.update(t||window.event);
}
)), SVG.on(window, "touchend.resize", (function() {
    e.done();
}
)), SVG.on(window, "mousemove.resize", (function(t) {
    e.update(t||window.event);
}
)), SVG.on(window, "mouseup.resize", (function() {
    e.done();
}
));
}, t.prototype.update=function(t) {
    if(t) {
    var e=this._extractPosition(t), i=this.transformPoint(e.x, e.y), a=i.x-this.parameters.p.x, s=i.y-this.parameters.p.y;
    this.lastUpdateCall=[a, s], this.calc(a, s), this.el.fire("resizing",  {
    dx: a, dy:s, event:t;
}
);
}else this.lastUpdateCall&&this.calc(this.lastUpdateCall[0], this.lastUpdateCall[1]);
}, t.prototype.done=function() {
    this.lastUpdateCall=null, SVG.off(window, "mousemove.resize"), SVG.off(window, "mouseup.resize"), SVG.off(window, "touchmove.resize"), SVG.off(window, "touchend.resize"), this.el.fire("resizedone");
}
, t.prototype.snapToGrid=function(t, e, i, a) {
    var s;
    return void 0!==a?s=[(i+t)%this.options.snapToGrid, (a+e)%this.options.snapToGrid]: (i=null==i?3:i, s=[(this.parameters.box.x+t+(1&i?0:this.parameters.box.width))%this.options.snapToGrid, (this.parameters.box.y+e+(2&i?0:this.parameters.box.height))%this.options.snapToGrid]), t<0&&(s[0]-=this.options.snapToGrid), e<0&&(s[1]-=this.options.snapToGrid), t-=Math.abs(s[0])<this.options.snapToGrid/2?s[0]:s[0]-(t<0?-this.options.snapToGrid:this.options.snapToGrid), e-=Math.abs(s[1])<this.options.snapToGrid/2?s[1]:s[1]-(e<0?-this.options.snapToGrid:this.options.snapToGrid), this.constraintToBox(t, e, i, a);
}
, t.prototype.constraintToBox=function(t, e, i, a) {
    var s, n, o=this.options.constraint|| {
}
;
    return void 0!==a?(s=i, n=a): (s=this.parameters.box.x+(1&i?0:this.parameters.box.width), n=this.parameters.box.y+(2&i?0:this.parameters.box.height)), void 0!==o.minX&&s+t<o.minX&&(t=o.minX-s), void 0!==o.maxX&&s+t>o.maxX&&(t=o.maxX-s), void 0!==o.minY&&n+e<o.minY&&(e=o.minY-n), void 0!==o.maxY&&n+e>o.maxY&&(e=o.maxY-n), [t, e];
}
, t.prototype.checkAspectRatio=function(t, e) {
    if(!this.options.saveAspectRatio)return t;
    var i=t.slice(), a=this.parameters.box.width/this.parameters.box.height, s=this.parameters.box.width+t[0], n=this.parameters.box.height-t[1], o=s/n;
    return o<a?(i[1]=s/a-this.parameters.box.height, e&&(i[1]=-i[1])): o>a&&(i[0]=this.parameters.box.width-n*a, e&&(i[0]=-i[0])), i;
}
, SVG.extend(SVG.Element,  {
    resize: function(e) {
    return(this.remember("_resizeHandler")||new t(this)).init(e|| {
}
), this;
}
}), SVG.Element.prototype.resize.defaults= {
    snapToAngle: .1, snapToGrid:1, constraint: {
}
, saveAspectRatio:!1;
}
}).call(this);
}(), void 0===window.Apex&&(window.Apex= {
}
);
    var Tn=function() {
    function t(e) {
    Ja(this, t), this.ctx=e, this.w=e.w;
}
return ts(t, [ {
    key: "initModules", value:function() {
    this.ctx.publicMethods=["updateOptions", "updateSeries", "appendData", "appendSeries", "toggleSeries", "showSeries", "hideSeries", "setLocale", "resetSeries", "zoomX", "toggleDataPointSelection", "dataURI", "addXaxisAnnotation", "addYaxisAnnotation", "addPointAnnotation", "clearAnnotations", "removeAnnotation", "paper", "destroy"], this.ctx.eventList=["click", "mousedown", "mousemove", "mouseleave", "touchstart", "touchmove", "touchleave", "mouseup", "touchend"], this.ctx.animations=new hs(this.ctx), this.ctx.axes=new Gs(this.ctx), this.ctx.core=new _n(this.ctx.el, this.ctx), this.ctx.config=new Ds( {
}
), this.ctx.data=new zs(this.ctx), this.ctx.grid=new Hs(this.ctx), this.ctx.graphics=new us(this.ctx), this.ctx.coreUtils=new ps(this.ctx), this.ctx.crosshairs=new Us(this.ctx), this.ctx.events=new Vs(this.ctx), this.ctx.exports=new Fs(this.ctx), this.ctx.localization=new js(this.ctx), this.ctx.options=new vs, this.ctx.responsive=new qs(this.ctx), this.ctx.series=new Es(this.ctx), this.ctx.theme=new $s(this.ctx), this.ctx.formatters=new Ys(this.ctx), this.ctx.titleSubtitle=new Zs(this.ctx), this.ctx.legend=new sn(this.ctx), this.ctx.toolbar=new nn(this.ctx), this.ctx.dimensions=new en(this.ctx), this.ctx.updateHelpers=new Mn(this.ctx), this.ctx.zoomPanSelection=new on(this.ctx), this.ctx.w.globals.tooltip=new gn(this.ctx);
}
}]), t;
}(), Pn=function() {
    function t(e) {
    Ja(this, t), this.ctx=e, this.w=e.w;
}
return ts(t, [ {
    key: "clear", value:function(t) {
    var e=t.isUpdating;
    this.ctx.zoomPanSelection&&this.ctx.zoomPanSelection.destroy(), this.ctx.toolbar&&this.ctx.toolbar.destroy(), this.ctx.animations=null, this.ctx.axes=null, this.ctx.annotations=null, this.ctx.core=null, this.ctx.data=null, this.ctx.grid=null, this.ctx.series=null, this.ctx.responsive=null, this.ctx.theme=null, this.ctx.formatters=null, this.ctx.titleSubtitle=null, this.ctx.legend=null, this.ctx.dimensions=null, this.ctx.options=null, this.ctx.crosshairs=null, this.ctx.zoomPanSelection=null, this.ctx.updateHelpers=null, this.ctx.toolbar=null, this.ctx.localization=null, this.ctx.w.globals.tooltip=null, this.clearDomElements( {
    isUpdating: e;
}
);
}},  {
    key: "killSVG", value:function(t) {
    t.each((function(t, e) {
    this.removeClass("*"), this.off(), this.stop();
}
), !0), t.ungroup(), t.clear();
}},  {
    key: "clearDomElements", value:function(t) {
    var e=this, i=t.isUpdating, a=this.w.globals.dom.Paper.node;
    a.parentNode&&a.parentNode.parentNode&&!i&&(a.parentNode.parentNode.style.minHeight="unset");
    var s=this.w.globals.dom.baseEl;
    s&&this.ctx.eventList.forEach((function(t) {
    s.removeEventListener(t, e.ctx.events.documentEvent);
}
));
    var n=this.w.globals.dom;
    if(null!==this.ctx.el)for(;
    this.ctx.el.firstChild;
    )this.ctx.el.removeChild(this.ctx.el.firstChild);
    this.killSVG(n.Paper), n.Paper.remove(), n.elWrap=null, n.elGraphical=null, n.elAnnotations=null, n.elLegendWrap=null, n.baseEl=null, n.elGridRect=null, n.elGridRectMask=null, n.elGridRectMarkerMask=null, n.elForecastMask=null, n.elNonForecastMask=null, n.elDefs=null;
}
}]), t;
}(), Dn=new WeakMap, In=function() {
    function t(e, i) {
    Ja(this, t), this.opts=i, this.ctx=this, this.w=new Os(i).init(), this.el=e, this.w.globals.cuid=cs.randomId(), this.w.globals.chartID=this.w.config.chart.id?cs.escapeString(this.w.config.chart.id): this.w.globals.cuid, new Tn(this).initModules(), this.create=cs.bind(this.create, this), this.windowResizeHandler=this._windowResizeHandler.bind(this), this.parentResizeHandler=this._parentResizeCallback.bind(this);
}
return ts(t, [ {
    key: "render", value:function() {
    var t=this;
    return new Promise((function(e, i) {
    if(null!==t.el) {
    void 0===Apex._chartInstances&&(Apex._chartInstances=[]), t.w.config.chart.id&&Apex._chartInstances.push( {
    id: t.w.globals.chartID, group:t.w.config.chart.group, chart:t;
}
), t.setLocale(t.w.config.chart.defaultLocale);
    var a=t.w.config.chart.events.beforeMount;
    if("function"==typeof a&&a(t, t.w), t.events.fireEvent("beforeMount", [t, t.w]), window.addEventListener("resize", t.windowResizeHandler), c=t.el.parentNode, h=t.parentResizeHandler, d=!1, u=new ResizeObserver((function(t) {
    d&&h.call(c, t), d=!0;
}
)), c.nodeType===Node.DOCUMENT_FRAGMENT_NODE?Array.from(c.children).forEach((function(t) {
    return u.observe(t);
}
)): u.observe(c), Dn.set(h, u), !t.css) {
    var s=t.el.getRootNode&&t.el.getRootNode(), n=cs.is("ShadowRoot", s), o=t.el.ownerDocument, r=o.getElementById("apexcharts-css");
    !n&&r||(t.css=document.createElement("style"), t.css.id="apexcharts-css", t.css.textContent='.apexcharts-canvas  {
    \n  position:  relative;
    \n  user-select:  none;
    \n  /* cannot give overflow:  hidden as it will crop tooltips which overflow outside chart area */\n;
}
\n\n\n/* scrollbar is not visible by default for legend,  hence forcing the visibility */\n.apexcharts-canvas ::-webkit-scrollbar  {
    \n  -webkit-appearance:  none;
    \n  width:  6px;
    \n;
}
\n\n.apexcharts-canvas : :-webkit-scrollbar-thumb  {
    \n  border-radius:  4px;
    \n  background-color:  rgba(0,  0,  0,  .5);
    \n  box-shadow:  0 0 1px rgba(255,  255,  255,  .5);
    \n  -webkit-box-shadow:  0 0 1px rgba(255,  255,  255,  .5);
    \n;
}
\n\n\n.apexcharts-inner  {
    \n  position:  relative;
    \n;
}
\n\n.apexcharts-text tspan  {
    \n  font-family:  inherit;
    \n;
}
\n\n.legend-mouseover-inactive  {
    \n  transition:  0.15s ease all;
    \n  opacity:  0.20;
    \n;
}
\n\n.apexcharts-series-collapsed  {
    \n  opacity:  0;
    \n;
}
\n\n.apexcharts-tooltip  {
    \n  border-radius:  5px;
    \n  box-shadow:  2px 2px 6px -4px #999;
    \n  cursor:  default;
    \n  font-size:  14px;
    \n  left:  62px;
    \n  opacity:  0;
    \n  pointer-events:  none;
    \n  position:  absolute;
    \n  top:  20px;
    \n  display:  flex;
    \n  flex-direction:  column;
    \n  overflow:  hidden;
    \n  white-space:  nowrap;
    \n  z-index:  12;
    \n  transition:  0.15s ease all;
    \n;
}
\n\n.apexcharts-tooltip.apexcharts-active  {
    \n  opacity:  1;
    \n  transition:  0.15s ease all;
    \n;
}
\n\n.apexcharts-tooltip.apexcharts-theme-light  {
    \n  border:  1px solid #e3e3e3;
    \n  background:  rgba(255,  255,  255,  0.96);
    \n;
}
\n\n.apexcharts-tooltip.apexcharts-theme-dark  {
    \n  color:  #fff;
    \n  background:  rgba(30,  30,  30,  0.8);
    \n;
}
\n\n.apexcharts-tooltip *  {
    \n  font-family:  inherit;
    \n;
}
\n\n\n.apexcharts-tooltip-title  {
    \n  padding:  6px;
    \n  font-size:  15px;
    \n  margin-bottom:  4px;
    \n;
}
\n\n.apexcharts-tooltip.apexcharts-theme-light .apexcharts-tooltip-title  {
    \n  background:  #ECEFF1;
    \n  border-bottom:  1px solid #ddd;
    \n;
}
\n\n.apexcharts-tooltip.apexcharts-theme-dark .apexcharts-tooltip-title  {
    \n  background:  rgba(0,  0,  0,  0.7);
    \n  border-bottom:  1px solid #333;
    \n;
}
\n\n.apexcharts-tooltip-text-y-value, \n.apexcharts-tooltip-text-goals-value, \n.apexcharts-tooltip-text-z-value  {
    \n  display:  inline-block;
    \n  font-weight:  600;
    \n  margin-left:  5px;
    \n;
}
\n\n.apexcharts-tooltip-title: empty, \n.apexcharts-tooltip-text-y-label:empty, \n.apexcharts-tooltip-text-y-value:empty, \n.apexcharts-tooltip-text-goals-label:empty, \n.apexcharts-tooltip-text-goals-value:empty, \n.apexcharts-tooltip-text-z-value:empty  {
    \n  display:  none;
    \n;
}
\n\n.apexcharts-tooltip-text-y-value, \n.apexcharts-tooltip-text-goals-value, \n.apexcharts-tooltip-text-z-value  {
    \n  font-weight:  600;
    \n;
}
\n\n.apexcharts-tooltip-text-goals-label,  \n.apexcharts-tooltip-text-goals-value  {
    \n  padding:  6px 0 5px;
    \n;
}
\n\n.apexcharts-tooltip-goals-group,  \n.apexcharts-tooltip-text-goals-label,  \n.apexcharts-tooltip-text-goals-value  {
    \n  display:  flex;
    \n;
}
\n.apexcharts-tooltip-text-goals-label: not(:empty), \n.apexcharts-tooltip-text-goals-value:not(:empty)  {
    \n  margin-top:  -6px;
    \n;
}
\n\n.apexcharts-tooltip-marker  {
    \n  width:  12px;
    \n  height:  12px;
    \n  position:  relative;
    \n  top:  0px;
    \n  margin-right:  10px;
    \n  border-radius:  50%;
    \n;
}
\n\n.apexcharts-tooltip-series-group  {
    \n  padding:  0 10px;
    \n  display:  none;
    \n  text-align:  left;
    \n  justify-content:  left;
    \n  align-items:  center;
    \n;
}
\n\n.apexcharts-tooltip-series-group.apexcharts-active .apexcharts-tooltip-marker  {
    \n  opacity:  1;
    \n;
}
\n\n.apexcharts-tooltip-series-group.apexcharts-active, \n.apexcharts-tooltip-series-group: last-child  {
    \n  padding-bottom:  4px;
    \n;
}
\n\n.apexcharts-tooltip-series-group-hidden  {
    \n  opacity:  0;
    \n  height:  0;
    \n  line-height:  0;
    \n  padding:  0 !important;
    \n;
}
\n\n.apexcharts-tooltip-y-group  {
    \n  padding:  6px 0 5px;
    \n;
}
\n\n.apexcharts-tooltip-box,  .apexcharts-custom-tooltip  {
    \n  padding:  4px 8px;
    \n;
}
\n\n.apexcharts-tooltip-boxPlot  {
    \n  display:  flex;
    \n  flex-direction:  column-reverse;
    \n;
}
\n\n.apexcharts-tooltip-box>div  {
    \n  margin:  4px 0;
    \n;
}
\n\n.apexcharts-tooltip-box span.value  {
    \n  font-weight:  bold;
    \n;
}
\n\n.apexcharts-tooltip-rangebar  {
    \n  padding:  5px 8px;
    \n;
}
\n\n.apexcharts-tooltip-rangebar .category  {
    \n  font-weight:  600;
    \n  color:  #777;
    \n;
}
\n\n.apexcharts-tooltip-rangebar .series-name  {
    \n  font-weight:  bold;
    \n  display:  block;
    \n  margin-bottom:  5px;
    \n;
}
\n\n.apexcharts-xaxistooltip  {
    \n  opacity:  0;
    \n  padding:  9px 10px;
    \n  pointer-events:  none;
    \n  color:  #373d3f;
    \n  font-size:  13px;
    \n  text-align:  center;
    \n  border-radius:  2px;
    \n  position:  absolute;
    \n  z-index:  10;
    \n  background:  #ECEFF1;
    \n  border:  1px solid #90A4AE;
    \n  transition:  0.15s ease all;
    \n;
}
\n\n.apexcharts-xaxistooltip.apexcharts-theme-dark  {
    \n  background:  rgba(0,  0,  0,  0.7);
    \n  border:  1px solid rgba(0,  0,  0,  0.5);
    \n  color:  #fff;
    \n;
}
\n\n.apexcharts-xaxistooltip: after, \n.apexcharts-xaxistooltip:before  {
    \n  left:  50%;
    \n  border:  solid transparent;
    \n  content:  " ";
    \n  height:  0;
    \n  width:  0;
    \n  position:  absolute;
    \n  pointer-events:  none;
    \n;
}
\n\n.apexcharts-xaxistooltip: after  {
    \n  border-color:  rgba(236,  239,  241,  0);
    \n  border-width:  6px;
    \n  margin-left:  -6px;
    \n;
}
\n\n.apexcharts-xaxistooltip: before  {
    \n  border-color:  rgba(144,  164,  174,  0);
    \n  border-width:  7px;
    \n  margin-left:  -7px;
    \n;
}
\n\n.apexcharts-xaxistooltip-bottom: after, \n.apexcharts-xaxistooltip-bottom:before  {
    \n  bottom:  100%;
    \n;
}
\n\n.apexcharts-xaxistooltip-top: after, \n.apexcharts-xaxistooltip-top:before  {
    \n  top:  100%;
    \n;
}
\n\n.apexcharts-xaxistooltip-bottom: after  {
    \n  border-bottom-color:  #ECEFF1;
    \n;
}
\n\n.apexcharts-xaxistooltip-bottom: before  {
    \n  border-bottom-color:  #90A4AE;
    \n;
}
\n\n.apexcharts-xaxistooltip-bottom.apexcharts-theme-dark: after  {
    \n  border-bottom-color:  rgba(0,  0,  0,  0.5);
    \n;
}
\n\n.apexcharts-xaxistooltip-bottom.apexcharts-theme-dark: before  {
    \n  border-bottom-color:  rgba(0,  0,  0,  0.5);
    \n;
}
\n\n.apexcharts-xaxistooltip-top: after  {
    \n  border-top-color:  #ECEFF1\n;
}
\n\n.apexcharts-xaxistooltip-top:before  {
    \n  border-top-color:  #90A4AE;
    \n;
}
\n\n.apexcharts-xaxistooltip-top.apexcharts-theme-dark: after  {
    \n  border-top-color:  rgba(0,  0,  0,  0.5);
    \n;
}
\n\n.apexcharts-xaxistooltip-top.apexcharts-theme-dark: before  {
    \n  border-top-color:  rgba(0,  0,  0,  0.5);
    \n;
}
\n\n.apexcharts-xaxistooltip.apexcharts-active  {
    \n  opacity:  1;
    \n  transition:  0.15s ease all;
    \n;
}
\n\n.apexcharts-yaxistooltip  {
    \n  opacity:  0;
    \n  padding:  4px 10px;
    \n  pointer-events:  none;
    \n  color:  #373d3f;
    \n  font-size:  13px;
    \n  text-align:  center;
    \n  border-radius:  2px;
    \n  position:  absolute;
    \n  z-index:  10;
    \n  background:  #ECEFF1;
    \n  border:  1px solid #90A4AE;
    \n;
}
\n\n.apexcharts-yaxistooltip.apexcharts-theme-dark  {
    \n  background:  rgba(0,  0,  0,  0.7);
    \n  border:  1px solid rgba(0,  0,  0,  0.5);
    \n  color:  #fff;
    \n;
}
\n\n.apexcharts-yaxistooltip: after, \n.apexcharts-yaxistooltip:before  {
    \n  top:  50%;
    \n  border:  solid transparent;
    \n  content:  " ";
    \n  height:  0;
    \n  width:  0;
    \n  position:  absolute;
    \n  pointer-events:  none;
    \n;
}
\n\n.apexcharts-yaxistooltip: after  {
    \n  border-color:  rgba(236,  239,  241,  0);
    \n  border-width:  6px;
    \n  margin-top:  -6px;
    \n;
}
\n\n.apexcharts-yaxistooltip: before  {
    \n  border-color:  rgba(144,  164,  174,  0);
    \n  border-width:  7px;
    \n  margin-top:  -7px;
    \n;
}
\n\n.apexcharts-yaxistooltip-left: after, \n.apexcharts-yaxistooltip-left:before  {
    \n  left:  100%;
    \n;
}
\n\n.apexcharts-yaxistooltip-right: after, \n.apexcharts-yaxistooltip-right:before  {
    \n  right:  100%;
    \n;
}
\n\n.apexcharts-yaxistooltip-left: after  {
    \n  border-left-color:  #ECEFF1;
    \n;
}
\n\n.apexcharts-yaxistooltip-left: before  {
    \n  border-left-color:  #90A4AE;
    \n;
}
\n\n.apexcharts-yaxistooltip-left.apexcharts-theme-dark: after  {
    \n  border-left-color:  rgba(0,  0,  0,  0.5);
    \n;
}
\n\n.apexcharts-yaxistooltip-left.apexcharts-theme-dark: before  {
    \n  border-left-color:  rgba(0,  0,  0,  0.5);
    \n;
}
\n\n.apexcharts-yaxistooltip-right: after  {
    \n  border-right-color:  #ECEFF1;
    \n;
}
\n\n.apexcharts-yaxistooltip-right: before  {
    \n  border-right-color:  #90A4AE;
    \n;
}
\n\n.apexcharts-yaxistooltip-right.apexcharts-theme-dark: after  {
    \n  border-right-color:  rgba(0,  0,  0,  0.5);
    \n;
}
\n\n.apexcharts-yaxistooltip-right.apexcharts-theme-dark: before  {
    \n  border-right-color:  rgba(0,  0,  0,  0.5);
    \n;
}
\n\n.apexcharts-yaxistooltip.apexcharts-active  {
    \n  opacity:  1;
    \n;
}
\n\n.apexcharts-yaxistooltip-hidden  {
    \n  display:  none;
    \n;
}
\n\n.apexcharts-xcrosshairs, \n.apexcharts-ycrosshairs  {
    \n  pointer-events:  none;
    \n  opacity:  0;
    \n  transition:  0.15s ease all;
    \n;
}
\n\n.apexcharts-xcrosshairs.apexcharts-active, \n.apexcharts-ycrosshairs.apexcharts-active  {
    \n  opacity:  1;
    \n  transition:  0.15s ease all;
    \n;
}
\n\n.apexcharts-ycrosshairs-hidden  {
    \n  opacity:  0;
    \n;
}
\n\n.apexcharts-selection-rect  {
    \n  cursor:  move;
    \n;
}
\n\n.svg_select_boundingRect,  .svg_select_points_rot  {
    \n  pointer-events:  none;
    \n  opacity:  0;
    \n  visibility:  hidden;
    \n;
}
\n.apexcharts-selection-rect + g .svg_select_boundingRect, \n.apexcharts-selection-rect + g .svg_select_points_rot  {
    \n  opacity:  0;
    \n  visibility:  hidden;
    \n;
}
\n\n.apexcharts-selection-rect + g .svg_select_points_l, \n.apexcharts-selection-rect + g .svg_select_points_r  {
    \n  cursor:  ew-resize;
    \n  opacity:  1;
    \n  visibility:  visible;
    \n;
}
\n\n.svg_select_points  {
    \n  fill:  #efefef;
    \n  stroke:  #333;
    \n  rx:  2;
    \n;
}
\n\n.apexcharts-svg.apexcharts-zoomable.hovering-zoom  {
    \n  cursor:  crosshair\n;
}
\n\n.apexcharts-svg.apexcharts-zoomable.hovering-pan  {
    \n  cursor:  move\n;
}
\n\n.apexcharts-zoom-icon, \n.apexcharts-zoomin-icon, \n.apexcharts-zoomout-icon, \n.apexcharts-reset-icon, \n.apexcharts-pan-icon, \n.apexcharts-selection-icon, \n.apexcharts-menu-icon, \n.apexcharts-toolbar-custom-icon  {
    \n  cursor:  pointer;
    \n  width:  20px;
    \n  height:  20px;
    \n  line-height:  24px;
    \n  color:  #6E8192;
    \n  text-align:  center;
    \n;
}
\n\n.apexcharts-zoom-icon svg, \n.apexcharts-zoomin-icon svg, \n.apexcharts-zoomout-icon svg, \n.apexcharts-reset-icon svg, \n.apexcharts-menu-icon svg  {
    \n  fill:  #6E8192;
    \n;
}
\n\n.apexcharts-selection-icon svg  {
    \n  fill:  #444;
    \n  transform:  scale(0.76)\n;
}
\n\n.apexcharts-theme-dark .apexcharts-zoom-icon svg, \n.apexcharts-theme-dark .apexcharts-zoomin-icon svg, \n.apexcharts-theme-dark .apexcharts-zoomout-icon svg, \n.apexcharts-theme-dark .apexcharts-reset-icon svg, \n.apexcharts-theme-dark .apexcharts-pan-icon svg, \n.apexcharts-theme-dark .apexcharts-selection-icon svg, \n.apexcharts-theme-dark .apexcharts-menu-icon svg, \n.apexcharts-theme-dark .apexcharts-toolbar-custom-icon svg  {
    \n  fill:  #f3f4f5;
    \n;
}
\n\n.apexcharts-canvas .apexcharts-zoom-icon.apexcharts-selected svg, \n.apexcharts-canvas .apexcharts-selection-icon.apexcharts-selected svg, \n.apexcharts-canvas .apexcharts-reset-zoom-icon.apexcharts-selected svg  {
    \n  fill:  #008FFB;
    \n;
}
\n\n.apexcharts-theme-light .apexcharts-selection-icon: not(.apexcharts-selected):hover svg, \n.apexcharts-theme-light .apexcharts-zoom-icon:not(.apexcharts-selected):hover svg, \n.apexcharts-theme-light .apexcharts-zoomin-icon:hover svg, \n.apexcharts-theme-light .apexcharts-zoomout-icon:hover svg, \n.apexcharts-theme-light .apexcharts-reset-icon:hover svg, \n.apexcharts-theme-light .apexcharts-menu-icon:hover svg  {
    \n  fill:  #333;
    \n;
}
\n\n.apexcharts-selection-icon, \n.apexcharts-menu-icon  {
    \n  position:  relative;
    \n;
}
\n\n.apexcharts-reset-icon  {
    \n  margin-left:  5px;
    \n;
}
\n\n.apexcharts-zoom-icon, \n.apexcharts-reset-icon, \n.apexcharts-menu-icon  {
    \n  transform:  scale(0.85);
    \n;
}
\n\n.apexcharts-zoomin-icon, \n.apexcharts-zoomout-icon  {
    \n  transform:  scale(0.7)\n;
}
\n\n.apexcharts-zoomout-icon  {
    \n  margin-right:  3px;
    \n;
}
\n\n.apexcharts-pan-icon  {
    \n  transform:  scale(0.62);
    \n  position:  relative;
    \n  left:  1px;
    \n  top:  0px;
    \n;
}
\n\n.apexcharts-pan-icon svg  {
    \n  fill:  #fff;
    \n  stroke:  #6E8192;
    \n  stroke-width:  2;
    \n;
}
\n\n.apexcharts-pan-icon.apexcharts-selected svg  {
    \n  stroke:  #008FFB;
    \n;
}
\n\n.apexcharts-pan-icon: not(.apexcharts-selected):hover svg  {
    \n  stroke:  #333;
    \n;
}
\n\n.apexcharts-toolbar  {
    \n  position:  absolute;
    \n  z-index:  11;
    \n  max-width:  176px;
    \n  text-align:  right;
    \n  border-radius:  3px;
    \n  padding:  0px 6px 2px 6px;
    \n  display:  flex;
    \n  justify-content:  space-between;
    \n  align-items:  center;
    \n;
}
\n\n.apexcharts-menu  {
    \n  background:  #fff;
    \n  position:  absolute;
    \n  top:  100%;
    \n  border:  1px solid #ddd;
    \n  border-radius:  3px;
    \n  padding:  3px;
    \n  right:  10px;
    \n  opacity:  0;
    \n  min-width:  110px;
    \n  transition:  0.15s ease all;
    \n  pointer-events:  none;
    \n;
}
\n\n.apexcharts-menu.apexcharts-menu-open  {
    \n  opacity:  1;
    \n  pointer-events:  all;
    \n  transition:  0.15s ease all;
    \n;
}
\n\n.apexcharts-menu-item  {
    \n  padding:  6px 7px;
    \n  font-size:  12px;
    \n  cursor:  pointer;
    \n;
}
\n\n.apexcharts-theme-light .apexcharts-menu-item: hover  {
    \n  background:  #eee;
    \n;
}
\n\n.apexcharts-theme-dark .apexcharts-menu  {
    \n  background:  rgba(0,  0,  0,  0.7);
    \n  color:  #fff;
    \n;
}
\n\n@media screen and (min-width:  768px)  {
    \n  .apexcharts-canvas: hover .apexcharts-toolbar  {
    \n    opacity:  1;
    \n  }
\n;
}\n\n.apexcharts-datalabel.apexcharts-element-hidden  {
    \n  opacity:  0;
    \n;
}
\n\n.apexcharts-pie-label, \n.apexcharts-datalabels, \n.apexcharts-datalabel, \n.apexcharts-datalabel-label, \n.apexcharts-datalabel-value  {
    \n  cursor:  default;
    \n  pointer-events:  none;
    \n;
}
\n\n.apexcharts-pie-label-delay  {
    \n  opacity:  0;
    \n  animation-name:  opaque;
    \n  animation-duration:  0.3s;
    \n  animation-fill-mode:  forwards;
    \n  animation-timing-function:  ease;
    \n;
}
\n\n.apexcharts-canvas .apexcharts-element-hidden  {
    \n  opacity:  0;
    \n;
}
\n\n.apexcharts-hide .apexcharts-series-points  {
    \n  opacity:  0;
    \n;
}
\n\n.apexcharts-gridline, \n.apexcharts-annotation-rect, \n.apexcharts-tooltip .apexcharts-marker, \n.apexcharts-area-series .apexcharts-area, \n.apexcharts-line, \n.apexcharts-zoom-rect, \n.apexcharts-toolbar svg, \n.apexcharts-area-series .apexcharts-series-markers .apexcharts-marker.no-pointer-events, \n.apexcharts-line-series .apexcharts-series-markers .apexcharts-marker.no-pointer-events, \n.apexcharts-radar-series path, \n.apexcharts-radar-series polygon  {
    \n  pointer-events:  none;
    \n;
}
\n\n\n/* markers */\n\n.apexcharts-marker  {
    \n  transition:  0.15s ease all;
    \n;
}
\n\n@keyframes opaque  {
    \n  0%  {
    \n    opacity:  0;
    \n  }
\n  100%  {
    \n    opacity:  1;
    \n  }
\n;
}\n\n\n/* Resize generated styles */\n\n@keyframes resizeanim  {
    \n  from  {
    \n    opacity:  0;
    \n  }
\n  to  {
    \n    opacity:  0;
    \n  }
\n;
}\n\n.resize-triggers  {
    \n  animation:  1ms resizeanim;
    \n  visibility:  hidden;
    \n  opacity:  0;
    \n;
}
\n\n.resize-triggers, \n.resize-triggers>div, \n.contract-trigger: before  {
    \n  content:  " ";
    \n  display:  block;
    \n  position:  absolute;
    \n  top:  0;
    \n  left:  0;
    \n  height:  100%;
    \n  width:  100%;
    \n  overflow:  hidden;
    \n;
}
\n\n.resize-triggers>div  {
    \n  background:  #eee;
    \n  overflow:  auto;
    \n;
}
\n\n.contract-trigger: before  {
    \n  width:  200%;
    \n  height:  200%;
    \n;
}
', n?s.prepend(t.css): o.head.appendChild(t.css));
}var l=t.create(t.w.config.series,  {
}
);
    if(!l)return e(t);
    t.mount(l).then((function() {
    "function"==typeof t.w.config.chart.events.mounted&&t.w.config.chart.events.mounted(t, t.w), t.events.fireEvent("mounted", [t, t.w]), e(l);
}
)).catch((function(t) {
    i(t);
}
));
}else i(new Error("Element not found"));
    var c, h, d, u;
}
));
}},  {
    key: "create", value:function(t, e) {
    var i=this.w;
    new Tn(this).initModules();
    var a=this.w.globals;
    if(a.noData=!1, a.animationEnded=!1, this.responsive.checkResponsiveConfig(e), i.config.xaxis.convertedCatToNumeric&&new Ps(i.config).convertCatToNumericXaxis(i.config, this.ctx), null===this.el)return a.animationEnded=!0, null;
    if(this.core.setupElements(), "treemap"===i.config.chart.type&&(i.config.grid.show=!1, i.config.yaxis[0].show=!1), 0===a.svgWidth)return a.animationEnded=!0, null;
    var s=ps.checkComboSeries(t);
    a.comboCharts=s.comboCharts, a.comboBarCount=s.comboBarCount;
    var n=t.every((function(t) {
    return t.data&&0===t.data.length;
}
));
    (0===t.length||n)&&this.series.handleNoData(), this.events.setupEventHandlers(), this.data.parseData(t), this.theme.init(), new ks(this).setGlobalMarkerSize(), this.formatters.setLabelFormatters(), this.titleSubtitle.draw(), a.noData&&a.collapsedSeries.length!==a.series.length&&!i.config.legend.showForSingleSeries||this.legend.init(), this.series.hasAllSeriesEqualX(), a.axisCharts&&(this.core.coreCalculations(), "category"!==i.config.xaxis.type&&this.formatters.setLabelFormatters(), this.ctx.toolbar.minX=i.globals.minX, this.ctx.toolbar.maxX=i.globals.maxX), this.formatters.heatmapLabelFormatters(), this.dimensions.plotCoords();
    var o=this.core.xySettings();
    this.grid.createGridMask();
    var r=this.core.plotChartType(t, o), l=new Cs(this);
    l.bringForward(), i.config.dataLabels.background.enabled&&l.dataLabelsBackground(), this.core.shiftGraphPosition();
    var c= {
    plot:  {
    left: i.globals.translateX, top:i.globals.translateY, width:i.globals.gridWidth, height:i.globals.gridHeight;
}
};
    return {
    elGraph: r, xyRatios:o, elInner:i.globals.dom.elGraphical, dimensions:c;
}
}},  {
    key: "mount", value:function() {
    var t=this, e=arguments.length>0&&void 0!==arguments[0]?arguments[0]: null, i=this, a=i.w;
    return new Promise((function(s, n) {
    if(null===i.el)return n(new Error("Not enough data to display or target element not found"));
    (null===e||a.globals.allSeriesCollapsed)&&i.series.handleNoData(), "treemap"!==a.config.chart.type&&i.axes.drawAxis(a.config.chart.type, e.xyRatios), i.grid=new Hs(i);
    var o=i.grid.drawGrid();
    i.annotations=new ys(i), i.annotations.drawImageAnnos(), i.annotations.drawTextAnnos(), "back"===a.config.grid.position&&o&&a.globals.dom.elGraphical.add(o.el);
    var r=new Xs(t.ctx), l=new Bs(t.ctx);
    if(null!==o&&(r.xAxisLabelCorrections(o.xAxisTickWidth), l.setYAxisTextAlignments(), a.config.yaxis.map((function(t, e) {
    -1===a.globals.ignoreYAxisIndexes.indexOf(e)&&l.yAxisTitleRotate(e, t.opposite);
}
))), "back"===a.config.annotations.position&&(a.globals.dom.Paper.add(a.globals.dom.elAnnotations), i.annotations.drawAxesAnnotations()), Array.isArray(e.elGraph))for(var c=0;
    c<e.elGraph.length;
    c++)a.globals.dom.elGraphical.add(e.elGraph[c]);
    else a.globals.dom.elGraphical.add(e.elGraph);
    if("front"===a.config.grid.position&&o&&a.globals.dom.elGraphical.add(o.el), "front"===a.config.xaxis.crosshairs.position&&i.crosshairs.drawXCrosshairs(), "front"===a.config.yaxis[0].crosshairs.position&&i.crosshairs.drawYCrosshairs(), "front"===a.config.annotations.position&&(a.globals.dom.Paper.add(a.globals.dom.elAnnotations), i.annotations.drawAxesAnnotations()), !a.globals.noData) {
    if(a.config.tooltip.enabled&&!a.globals.noData&&i.w.globals.tooltip.drawTooltip(e.xyRatios), a.globals.axisCharts&&(a.globals.isXNumeric||a.config.xaxis.convertedCatToNumeric||a.globals.isRangeBar))(a.config.chart.zoom.enabled||a.config.chart.selection&&a.config.chart.selection.enabled||a.config.chart.pan&&a.config.chart.pan.enabled)&&i.zoomPanSelection.init( {
    xyRatios: e.xyRatios;
}
);
    else {
    var h=a.config.chart.toolbar.tools;
    ["zoom", "zoomin", "zoomout", "selection", "pan", "reset"].forEach((function(t) {
    h[t]=!1;
}
));
}a.config.chart.toolbar.show&&!a.globals.allSeriesCollapsed&&i.toolbar.createToolbar();
}a.globals.memory.methodsToExec.length>0&&a.globals.memory.methodsToExec.forEach((function(t) {
    t.method(t.params, !1, t.context);
}
)), a.globals.axisCharts||a.globals.noData||i.core.resizeNonAxisCharts(), s(i);
}));
}},  {
    key: "destroy", value:function() {
    var t, e;
    window.removeEventListener("resize", this.windowResizeHandler), this.el.parentNode, t=this.parentResizeHandler, (e=Dn.get(t))&&(e.disconnect(), Dn.delete(t));
    var i=this.w.config.chart.id;
    i&&Apex._chartInstances.forEach((function(t, e) {
    t.id===cs.escapeString(i)&&Apex._chartInstances.splice(e, 1);
}
)), new Pn(this.ctx).clear( {
    isUpdating: !1;
}
);
}},  {
    key: "updateOptions", value:function(t) {
    var e=this, i=arguments.length>1&&void 0!==arguments[1]&&arguments[1], a=!(arguments.length>2&&void 0!==arguments[2])||arguments[2], s=!(arguments.length>3&&void 0!==arguments[3])||arguments[3], n=!(arguments.length>4&&void 0!==arguments[4])||arguments[4], o=this.w;
    return o.globals.selection=void 0, t.series&&(this.series.resetSeries(!1, !0, !1), t.series.length&&t.series[0].data&&(t.series=t.series.map((function(t, i) {
    return e.updateHelpers._extendSeries(t, i);
}
))), this.updateHelpers.revertDefaultAxisMinMax()), t.xaxis&&(t=this.updateHelpers.forceXAxisUpdate(t)), t.yaxis&&(t=this.updateHelpers.forceYAxisUpdate(t)), o.globals.collapsedSeriesIndices.length>0&&this.series.clearPreviousPaths(), t.theme&&(t=this.theme.updateThemeOptions(t)), this.updateHelpers._updateOptions(t, i, a, s, n);
}},  {
    key: "updateSeries", value:function() {
    var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]: [], e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1], i=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];
    return this.series.resetSeries(!1), this.updateHelpers.revertDefaultAxisMinMax(), this.updateHelpers._updateSeries(t, e, i);
}
},  {
    key: "appendSeries", value:function(t) {
    var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1], i=!(arguments.length>2&&void 0!==arguments[2])||arguments[2], a=this.w.config.series.slice();
    return a.push(t), this.series.resetSeries(!1), this.updateHelpers.revertDefaultAxisMinMax(), this.updateHelpers._updateSeries(a, e, i);
}
},  {
    key: "appendData", value:function(t) {
    var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1], i=this;
    i.w.globals.dataChanged=!0, i.series.getPreviousPaths();
    for(var a=i.w.config.series.slice(), s=0;
    s<a.length;
    s++)if(null!==t[s]&&void 0!==t[s])for(var n=0;
    n<t[s].data.length;
    n++)a[s].data.push(t[s].data[n]);
    return i.w.config.series=a, e&&(i.w.globals.initialSeries=cs.clone(i.w.config.series)), this.update();
}
},  {
    key: "update", value:function(t) {
    var e=this;
    return new Promise((function(i, a) {
    new Pn(e.ctx).clear( {
    isUpdating: !0;
}
);
    var s=e.create(e.w.config.series, t);
    if(!s)return i(e);
    e.mount(s).then((function() {
    "function"==typeof e.w.config.chart.events.updated&&e.w.config.chart.events.updated(e, e.w), e.events.fireEvent("updated", [e, e.w]), e.w.globals.isDirty=!0, i(e);
}
)).catch((function(t) {
    a(t);
}
));
}));
}},  {
    key: "getSyncedCharts", value:function() {
    var t=this.getGroupedCharts(), e=[this];
    return t.length&&(e=[], t.forEach((function(t) {
    e.push(t);
}
))), e;
}},  {
    key: "getGroupedCharts", value:function() {
    var t=this;
    return Apex._chartInstances.filter((function(t) {
    if(t.group)return!0;
}
)).map((function(e) {
    return t.w.config.chart.group===e.group?e.chart: t;
}
));
}},  {
    key: "toggleSeries", value:function(t) {
    return this.series.toggleSeries(t);
}
},  {
    key: "highlightSeriesOnLegendHover", value:function(t, e) {
    return this.series.toggleSeriesOnHover(t, e);
}
},  {
    key: "showSeries", value:function(t) {
    this.series.showSeries(t);
}
},  {
    key: "hideSeries", value:function(t) {
    this.series.hideSeries(t);
}
},  {
    key: "resetSeries", value:function() {
    var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0], e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];
    this.series.resetSeries(t, e);
}
},  {
    key: "addEventListener", value:function(t, e) {
    this.events.addEventListener(t, e);
}
},  {
    key: "removeEventListener", value:function(t, e) {
    this.events.removeEventListener(t, e);
}
},  {
    key: "addXaxisAnnotation", value:function(t) {
    var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1], i=arguments.length>2&&void 0!==arguments[2]?arguments[2]: void 0, a=this;
    i&&(a=i), a.annotations.addXaxisAnnotationExternal(t, e, a);
}
},  {
    key: "addYaxisAnnotation", value:function(t) {
    var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1], i=arguments.length>2&&void 0!==arguments[2]?arguments[2]: void 0, a=this;
    i&&(a=i), a.annotations.addYaxisAnnotationExternal(t, e, a);
}
},  {
    key: "addPointAnnotation", value:function(t) {
    var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1], i=arguments.length>2&&void 0!==arguments[2]?arguments[2]: void 0, a=this;
    i&&(a=i), a.annotations.addPointAnnotationExternal(t, e, a);
}
},  {
    key: "clearAnnotations", value:function() {
    var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]: void 0, e=this;
    t&&(e=t), e.annotations.clearAnnotations(e);
}
},  {
    key: "removeAnnotation", value:function(t) {
    var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]: void 0, i=this;
    e&&(i=e), i.annotations.removeAnnotation(i, t);
}
},  {
    key: "getChartArea", value:function() {
    return this.w.globals.dom.baseEl.querySelector(".apexcharts-inner");
}
},  {
    key: "getSeriesTotalXRange", value:function(t, e) {
    return this.coreUtils.getSeriesTotalsXRange(t, e);
}
},  {
    key: "getHighestValueInSeries", value:function() {
    var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]: 0, e=new Ws(this.ctx);
    return e.getMinYMaxY(t).highestY;
}
},  {
    key: "getLowestValueInSeries", value:function() {
    var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]: 0, e=new Ws(this.ctx);
    return e.getMinYMaxY(t).lowestY;
}
},  {
    key: "getSeriesTotal", value:function() {
    return this.w.globals.seriesTotals;
}
},  {
    key: "toggleDataPointSelection", value:function(t, e) {
    return this.updateHelpers.toggleDataPointSelection(t, e);
}
},  {
    key: "zoomX", value:function(t, e) {
    this.ctx.toolbar.zoomUpdateOptions(t, e);
}
},  {
    key: "setLocale", value:function(t) {
    this.localization.setCurrentLocaleValues(t);
}
},  {
    key: "dataURI", value:function(t) {
    return new Fs(this.ctx).dataURI(t);
}
},  {
    key: "paper", value:function() {
    return this.w.globals.dom.Paper;
}
},  {
    key: "_parentResizeCallback", value:function() {
    this.w.globals.animationEnded&&this.w.config.chart.redrawOnParentResize&&this._windowResize();
}
},  {
    key: "_windowResize", value:function() {
    var t=this;
    clearTimeout(this.w.globals.resizeTimer), this.w.globals.resizeTimer=window.setTimeout((function() {
    t.w.globals.resized=!0, t.w.globals.dataChanged=!1, t.ctx.update();
}
), 150);
}},  {
    key: "_windowResizeHandler", value:function() {
    var t=this.w.config.chart.redrawOnWindowResize;
    "function"==typeof t&&(t=t()), t&&this._windowResize();
}
}], [ {
    key: "getChartByID", value:function(t) {
    var e=cs.escapeString(t), i=Apex._chartInstances.filter((function(t) {
    return t.id===e;
}
))[0];
    return i&&i.chart;
}
},  {
    key: "initOnLoad", value:function() {
    for(var e=document.querySelectorAll("[data-apexcharts]"), i=0;
    i<e.length;
    i++)new t(e[i], JSON.parse(e[i].getAttribute("data-options"))).render();
}
},  {
    key: "exec", value:function(t, e) {
    var i=this.getChartByID(t);
    if(i) {
    i.w.globals.isExecCalled=!0;
    var a=null;
    if(-1!==i.publicMethods.indexOf(e)) {
    for(var s=arguments.length, n=new Array(s>2?s-2: 0), o=2;
    o<s;
    o++)n[o-2]=arguments[o];
    a=i[e].apply(i, n);
}
return a;
}}},  {
    key: "merge", value:function(t, e) {
    return cs.extend(t, e);
}
}]), t;
}();
    qa=In;
    var On= {
}
;
    On=function() {
    this.style=function(t) {
    var e=getComputedStyle(document.body).getPropertyValue(t);
    return e?e.trim(): "undefined"}
, this.colors=function() {
    return {
    gray:  {
    50: this.style("--x-gray-50"), 100:this.style("--x-gray-100"), 200:this.style("--x-gray-200"), 300:this.style("--x-gray-300"), 400:this.style("--x-gray-400"), 500:this.style("--x-gray-500"), 600:this.style("--x-gray-600"), 700:this.style("--x-gray-700"), 800:this.style("--x-gray-800"), 900:this.style("--x-gray-900");
}
, theme: {
    primary: this.style("--x-primary"), secondary:this.style("--x-secondary"), tertiary:this.style("--x-tertiary"), info:this.style("--x-info"), success:this.style("--x-success"), danger:this.style("--x-danger"), warning:this.style("--x-warning"), dark:this.style("--x-dark");
}
, transparent:"transparent"}}, this.fonts=function() {
    return {
    base: this.style("--x-font-sans-serif"), code:this.style("--x-font-monospace"), serif:this.style("--x-font-serif");
}
}}, Ua=function() {
    this.init=function(t) {
    var e, i, a, s=new On, n=[s.colors().theme.primary, s.colors().theme.tertiary, s.colors().theme.secondary, s.colors().theme.warning];
    t&&(i= {
    chart:  {
    zoom:  {
    enabled: !1;
}
, toolbar: {
    show: !1;
}
, shadow: {
    enabled: !1;
}
}, colors:n, stroke: {
    width: 4, curve:"smooth"}
, series:[ {
    name: "Ongoing", type:"line", data:[30, 50, 70, 90, 80, 70, 90, 120, 100, 120, 140];
}
,  {
    name: "Finished", type:"line", data:[50, 70, 30, 20, 10, 10, 40, 100, 90, 100, 120];
}
], markers: {
    size: 0;
}
, xaxis: {
    axisBorder:  {
    show: !1;
}
, axisTicks: {
    show: !1;
}
, categories:["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], labels: {
    style:  {
    colors: "#999", fontSize:"13px", fontFamily:"#333", cssClass:"apexcharts-xaxis-label"}
}}, yaxis: {
    axisBorder:  {
    show: !1;
}
, axisTicks: {
    show: !1;
}
, labels: {
    style:  {
    colors: "#999", fontSize:"13px", fontFamily:"inherit", cssClass:"apexcharts-xaxis-label"}
}}, legend: {
    show: !1;
}
, grid: {
    borderColor: "#f3f3f3", strokeDashArray:3;
}
, dataLabels: {
    enabled: !1;
}
, tooltip: {
    shared: !0, intersect:!1, y: {
    formatter: function(t) {
    return void 0!==t?t.toFixed(0)+" orders": t;
}
}}}, a=(e=t).dataset.height, i.colors=n, i.chart.height=a||350, new qa(e, i).render());
}};
    var zn= {
}
;
    zn=function() {
    this.init=function(t) {
    var e, i, a, s=new On, n=[s.colors().theme.primary, s.colors().theme.tertiary, s.colors().theme.warning];
    t&&(e=t, i= {
    chart:  {
    type: "line", stacked:!1, zoom: {
    enabled: !1;
}
, toolbar: {
    show: !1;
}
, shadow: {
    enabled: !1;
}
, offsetX:0, animations: {
    enabled: !0, easing:"easeinout", speed:800, animateGradually: {
    enabled: !0, delay:150;
}
, dynamicAnimation: {
    enabled: !0, speed:350;
}
}, fontFamily:s.fonts().base;
}, colors:n, plotOptions: {
    bar:  {
    columnWidth: "26%", borderRadius:5;
}
}, stroke: {
    colors: ["transparent"], width:4, curve:"smooth"}
, series:[ {
    name: "Delivered", type:"bar", data:[10, 17, 12, 8, 10, 10, 20];
}
,  {
    name: "Rejected", type:"bar", data:[20, 10, 14, 20, 10, 14, 15];
}
,  {
    name: "Rejected", type:"bar", data:[15, 8, 16, 15, 15, 18, 10];
}
], markers: {
    size: 0;
}
, xaxis: {
    axisBorder:  {
    show: !1;
}
, axisTicks: {
    show: !1;
}
, categories:["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"], labels: {
    style:  {
    colors: "#999", fontSize:"13px", cssClass:"apexcharts-xaxis-label"}
}}, yaxis: {
    axisBorder:  {
    show: !1;
}
, axisTicks: {
    show: !1;
}
, labels: {
    style:  {
    colors: ["#999"], fontSize:"13px", cssClass:"apexcharts-xaxis-label"}
}}, legend: {
    show: !1;
}
, grid: {
    borderColor: "#e3ebf6", strokeDashArray:3;
}
, dataLabels: {
    enabled: !1;
}
, tooltip: {
    shared: !0, intersect:!1, y: {
    formatter: function(t) {
    return void 0!==t?t.toFixed(0)+" orders": t;
}
}}}, a=e.dataset.height, i.colors=n, i.chart.height=a||350, new qa(e, i).render());
}};
    var Yn= {
}
;
    Yn=function() {
    this.init=function(t) {
    var e, i, a, s=new On, n=[s.colors().theme.primary, s.colors().theme.secondary];
    t&&(e=t, i= {
    chart:  {
    type: "line", stacked:!1, zoom: {
    enabled: !1;
}
, toolbar: {
    show: !1;
}
, shadow: {
    enabled: !1;
}
, offsetX:0, animations: {
    enabled: !0, easing:"easeinout", speed:800, animateGradually: {
    enabled: !0, delay:150;
}
, dynamicAnimation: {
    enabled: !0, speed:350;
}
}, fontFamily:s.fonts().base;
}, colors:n, plotOptions: {
    bar:  {
    columnWidth: "22px", borderRadius:5;
}
}, stroke: {
    colors: ["transparent"], width:4, curve:"smooth"}
, series:[ {
    name: "Registered", type:"bar", data:[10, 17, 12, 8, 10, 10, 20, 10, 17, 12, 8, 10];
}
,  {
    name: "Subscribed", type:"bar", data:[20, 10, 14, 20, 10, 14, 15, 20, 10, 14, 20, 10];
}
], markers: {
    size: 0;
}
, xaxis: {
    axisBorder:  {
    show: !1;
}
, axisTicks: {
    show: !1;
}
, categories:["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], labels: {
    style:  {
    colors: "#999", fontSize:"13px", cssClass:"apexcharts-xaxis-label"}
}}, yaxis: {
    axisBorder:  {
    show: !1;
}
, axisTicks: {
    show: !1;
}
, labels: {
    style:  {
    colors: ["#999"], fontSize:"13px", cssClass:"apexcharts-xaxis-label"}
}}, legend: {
    show: !1;
}
, grid: {
    borderColor: "#e3ebf6", strokeDashArray:3;
}
, dataLabels: {
    enabled: !1;
}
, tooltip: {
    shared: !0, intersect:!1, y: {
    formatter: function(t) {
    return void 0!==t?t.toFixed(0)+" orders": t;
}
}}, responsive:[ {
    breakpoint: 1300, options: {
    plotOptions:  {
    bar:  {
    columnWidth: "30px", borderRadius:4;
}
}}}];
}, a=e.dataset.height, i.colors=n, i.chart.height=a||350, new qa(e, i).render());
}};
    var Nn= {
}
;
    Nn=function() {
    this.init=function(t) {
    var e, i, a, s, n, o, r, l, c=new On;
    t&&(i= {
    chart:  {
    width: "100%", sparkline: {
    enabled: !0;
}
}, series:[], labels:[], plotOptions: {
    bar:  {
    columnWidth: "40%", endingShape:"rounded"}
}, stroke: {
    curve: "smooth"}
, markers: {
    size: 0;
}
, colors:[], tooltip: {
    fixed:  {
    enabled: !1;
}
, x: {
    show: !1;
}
, y: {
    title:  {
    formatter: function(t) {
    return""}
}}, marker:  {
    show: !1;
}
}}, a=(e=t).dataset.dataset, s=e.dataset.labels, n=e.dataset.color, o=e.dataset.height, r=e.dataset.type, l=e.dataset.stroke, i.series=[ {
    data: a.split(", ");
}
], s&&(i.labels=[s]), i.colors=[c.colors().theme[n]], i.chart.height=o||35, i.chart.type=r||"line", i.stroke.width=l||2, setTimeout((function() {
    new qa(e, i).render();
}
), 300));
}};
    var Fn;
    const Xn=["onChange", "onClose", "onDayCreate", "onDestroy", "onKeyDown", "onMonthChange", "onOpen", "onParseConfig", "onReady", "onValueUpdate", "onYearChange", "onPreCalendarPosition"], Hn= {
    _disable: [], allowInput:!1, allowInvalidPreload:!1, altFormat:"F j,  Y", altInput:!1, altInputClass:"form-control input", animate:"object"==typeof window&&-1===window.navigator.userAgent.indexOf("MSIE"), ariaDateFormat:"F j,  Y", autoFillDefaultTime:!0, clickOpens:!0, closeOnSelect:!0, conjunction:",  ", dateFormat:"Y-m-d", defaultHour:12, defaultMinute:0, defaultSeconds:0, disable:[], disableMobile:!1, enableSeconds:!1, enableTime:!1, errorHandler:t=>"undefined"!=typeof console&&console.warn(t), getWeek:t=> {
    const e=new Date(t.getTime());
    e.setHours(0, 0, 0, 0), e.setDate(e.getDate()+3-(e.getDay()+6)%7);
    var i=new Date(e.getFullYear(), 0, 4);
    return 1+Math.round(((e.getTime()-i.getTime())/864e5-3+(i.getDay()+6)%7)/7);
}
, hourIncrement: 1, ignoredFocusElements:[], inline:!1, locale:"default", minuteIncrement:5, mode:"single", monthSelectorType:"dropdown", nextArrow:"<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z' /></svg>", noCalendar:!1, now:new Date, onChange:[], onClose:[], onDayCreate:[], onDestroy:[], onKeyDown:[], onMonthChange:[], onOpen:[], onParseConfig:[], onReady:[], onValueUpdate:[], onYearChange:[], onPreCalendarPosition:[], plugins:[], position:"auto", positionElement:void 0, prevArrow:"<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z' /></svg>", shorthandCurrentMonth:!1, showMonths:1, static:!1, time_24hr:!1, weekNumbers:!1, wrap:!1;
}, Rn= {
    weekdays:  {
    shorthand: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], longhand:["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
}
, months: {
    shorthand: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], longhand:["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
}
, daysInMonth:[31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], firstDayOfWeek:0, ordinal:t=> {
    const e=t%100;
    if(e>3&&e<21)return"th";
    switch(e%10) {
    case 1: return"st";
    case 2: return"nd";
    case 3: return"rd";
    default: return"th"}
}, rangeSeparator:" to ", weekAbbreviation:"Wk", scrollTitle:"Scroll to increment", toggleTitle:"Click to toggle", amPM:["AM", "PM"], yearAriaLabel:"Year", monthAriaLabel:"Month", hourAriaLabel:"Hour", minuteAriaLabel:"Minute", time_24hr:!1;
};
    var Wn=Rn;
    const Bn=(t, e=2)=>`000$ {
    t;
}
`.slice(-1*e), Vn=t=>!0===t?1: 0;
    function jn(t, e) {
    let i;
    return function() {
    clearTimeout(i), i=setTimeout((()=>t.apply(this, arguments)), e);
}
}const Gn=t=>t instanceof Array?t: [t];
    function Un(t, e, i) {
    if(!0===i)return t.classList.add(e);
    t.classList.remove(e);
}
function qn(t, e, i) {
    const a=window.document.createElement(t);
    return e=e||"", i=i||"", a.className=e, void 0!==i&&(a.textContent=i), a;
}
function $n(t) {
    for(;
    t.firstChild;
    )t.removeChild(t.firstChild);
}
function Zn(t, e) {
    return e(t)?t: t.parentNode?Zn(t.parentNode, e):void 0;
}
function Kn(t, e) {
    const i=qn("div", "numInputWrapper"), a=qn("input", "numInput "+t), s=qn("span", "arrowUp"), n=qn("span", "arrowDown");
    if(-1===navigator.userAgent.indexOf("MSIE 9.0")?a.type="number": (a.type="text", a.pattern="\\d*"), void 0!==e)for(const t in e)a.setAttribute(t, e[t]);
    return i.appendChild(a), i.appendChild(s), i.appendChild(n), i;
}
function Jn(t) {
    try {
    if("function"==typeof t.composedPath) {
    return t.composedPath()[0];
}
return t.target;
}catch(e) {
    return t.target;
}
}const Qn=()=> {
}
, to=(t, e, i)=>i.months[e?"shorthand": "longhand"][t], eo= {
    D: Qn, F:function(t, e, i) {
    t.setMonth(i.months.longhand.indexOf(e));
}
, G: (t, e)=> {
    t.setHours(parseFloat(e));
}
, H: (t, e)=> {
    t.setHours(parseFloat(e));
}
, J: (t, e)=> {
    t.setDate(parseFloat(e));
}
, K: (t, e, i)=> {
    t.setHours(t.getHours()%12+12*Vn(new RegExp(i.amPM[1], "i").test(e)));
}
, M: function(t, e, i) {
    t.setMonth(i.months.shorthand.indexOf(e));
}
, S: (t, e)=> {
    t.setSeconds(parseFloat(e));
}
, U: (t, e)=>new Date(1e3*parseFloat(e)), W:function(t, e, i) {
    const a=parseInt(e), s=new Date(t.getFullYear(), 0, 2+7*(a-1), 0, 0, 0, 0);
    return s.setDate(s.getDate()-s.getDay()+i.firstDayOfWeek), s;
}
, Y: (t, e)=> {
    t.setFullYear(parseFloat(e));
}
, Z: (t, e)=>new Date(e), d:(t, e)=> {
    t.setDate(parseFloat(e));
}
, h: (t, e)=> {
    t.setHours(parseFloat(e));
}
, i: (t, e)=> {
    t.setMinutes(parseFloat(e));
}
, j: (t, e)=> {
    t.setDate(parseFloat(e));
}
, l: Qn, m:(t, e)=> {
    t.setMonth(parseFloat(e)-1);
}
, n: (t, e)=> {
    t.setMonth(parseFloat(e)-1);
}
, s: (t, e)=> {
    t.setSeconds(parseFloat(e));
}
, u: (t, e)=>new Date(parseFloat(e)), w:Qn, y:(t, e)=> {
    t.setFullYear(2e3+parseFloat(e));
}
}, io= {
    D: "(\\w+)", F:"(\\w+)", G:"(\\d\\d|\\d)", H:"(\\d\\d|\\d)", J:"(\\d\\d|\\d)\\w+", K:"", M:"(\\w+)", S:"(\\d\\d|\\d)", U:"(.+)", W:"(\\d\\d|\\d)", Y:"(\\d {
    4;
}
)", Z: "(.+)", d:"(\\d\\d|\\d)", h:"(\\d\\d|\\d)", i:"(\\d\\d|\\d)", j:"(\\d\\d|\\d)", l:"(\\w+)", m:"(\\d\\d|\\d)", n:"(\\d\\d|\\d)", s:"(\\d\\d|\\d)", u:"(.+)", w:"(\\d\\d|\\d)", y:"(\\d {
    2;
}
)"}, ao= {
    Z: t=>t.toISOString(), D:function(t, e, i) {
    return e.weekdays.shorthand[ao.w(t, e, i)];
}
, F: function(t, e, i) {
    return to(ao.n(t, e, i)-1, !1, e);
}
, G: function(t, e, i) {
    return Bn(ao.h(t, e, i));
}
, H: t=>Bn(t.getHours()), J:function(t, e) {
    return void 0!==e.ordinal?t.getDate()+e.ordinal(t.getDate()): t.getDate();
}
, K:(t, e)=>e.amPM[Vn(t.getHours()>11)], M:function(t, e) {
    return to(t.getMonth(), !0, e);
}
, S: t=>Bn(t.getSeconds()), U:t=>t.getTime()/1e3, W:function(t, e, i) {
    return i.getWeek(t);
}
, Y: t=>Bn(t.getFullYear(), 4), d:t=>Bn(t.getDate()), h:t=>t.getHours()%12?t.getHours()%12:12, i:t=>Bn(t.getMinutes()), j:t=>t.getDate(), l:function(t, e) {
    return e.weekdays.longhand[t.getDay()];
}
, m: t=>Bn(t.getMonth()+1), n:t=>t.getMonth()+1, s:t=>t.getSeconds(), u:t=>t.getTime(), w:t=>t.getDay(), y:t=>String(t.getFullYear()).substring(2);
}, so=( {
    config: t=Hn, l10n:e=Rn, isMobile:i=!1;
}
)=>(a, s, n)=> {
    const o=n||e;
    return void 0===t.formatDate||i?s.split("").map(((e, i, s)=>ao[e]&&"\\"!==s[i-1]?ao[e](a, o, t): "\\"!==e?e:"")).join(""):t.formatDate(a, s, o);
}
, no=( {
    config: t=Hn, l10n:e=Rn;
}
)=>(i, a, s, n)=> {
    if(0!==i&&!i)return;
    const o=n||e;
    let r;
    const l=i;
    if(i instanceof Date)r=new Date(i.getTime());
    else if("string"!=typeof i&&void 0!==i.toFixed)r=new Date(i);
    else if("string"==typeof i) {
    const e=a||(t||Hn).dateFormat, n=String(i).trim();
    if("today"===n)r=new Date, s=!0;
    else if(/Z$/.test(n)||/GMT$/.test(n))r=new Date(i);
    else if(t&&t.parseDate)r=t.parseDate(i, e);
    else {
    r=t&&t.noCalendar?new Date((new Date).setHours(0, 0, 0, 0)): new Date((new Date).getFullYear(), 0, 1, 0, 0, 0, 0);
    let a, s=[];
    for(let t=0, n=0, l="";
    t<e.length;
    t++) {
    const c=e[t], h="\\"===c, d="\\"===e[t-1]||h;
    if(io[c]&&!d) {
    l+=io[c];
    const t=new RegExp(l).exec(i);
    t&&(a=!0)&&s["Y"!==c?"push": "unshift"]( {
    fn: eo[c], val:t[++n];
}
);
}else h||(l+=".");
    s.forEach((( {
    fn: t, val:e;
}
)=>r=t(r, e, o)||r));
}r=a?r:void 0;
}}if(r instanceof Date&&!isNaN(r.getTime()))return!0===s&&r.setHours(0, 0, 0, 0), r;
    t.errorHandler(new Error(`Invalid date provided:  $ {
    l;
}
`));
};
    function oo(t, e, i=!0) {
    return!1!==i?new Date(t.getTime()).setHours(0, 0, 0, 0)-new Date(e.getTime()).setHours(0, 0, 0, 0): t.getTime()-e.getTime();
}
const ro=864e5;
    function lo(t) {
    let e=t.defaultHour, i=t.defaultMinute, a=t.defaultSeconds;
    if(void 0!==t.minDate) {
    const s=t.minDate.getHours(), n=t.minDate.getMinutes(), o=t.minDate.getSeconds();
    e<s&&(e=s), e===s&&i<n&&(i=n), e===s&&i===n&&a<o&&(a=t.minDate.getSeconds());
}
if(void 0!==t.maxDate) {
    const s=t.maxDate.getHours(), n=t.maxDate.getMinutes();
    e=Math.min(e, s), e===s&&(i=Math.min(n, i)), e===s&&i===n&&(a=t.maxDate.getSeconds());
}
return {
    hours: e, minutes:i, seconds:a;
}
}"function"!=typeof Object.assign&&(Object.assign=function(t, ...e) {
    if(!t)throw TypeError("Cannot convert undefined or null to object");
    for(const i of e)i&&Object.keys(i).forEach((e=>t[e]=i[e]));
    return t;
}
);
    function co(t, e) {
    const i= {
    config: Object.assign(Object.assign( {
}
, Hn), uo.defaultConfig), l10n:Wn;
}
;
    function a(t) {
    return t.bind(i);
}
function s() {
    const t=i.config;
    !1===t.weekNumbers&&1===t.showMonths||!0!==t.noCalendar&&window.requestAnimationFrame((function() {
    if(void 0!==i.calendarContainer&&(i.calendarContainer.style.visibility="hidden", i.calendarContainer.style.display="block"), void 0!==i.daysContainer) {
    const e=(i.days.offsetWidth+1)*t.showMonths;
    i.daysContainer.style.width=e+"px", i.calendarContainer.style.width=e+(void 0!==i.weekWrapper?i.weekWrapper.offsetWidth: 0)+"px", i.calendarContainer.style.removeProperty("visibility"), i.calendarContainer.style.removeProperty("display");
}
}));
}function n(t) {
    if(0===i.selectedDates.length) {
    const t=void 0===i.config.minDate||oo(new Date, i.config.minDate)>=0?new Date: new Date(i.config.minDate.getTime()), e=lo(i.config);
    t.setHours(e.hours, e.minutes, e.seconds, t.getMilliseconds()), i.selectedDates=[t], i.latestSelectedDateObj=t;
}
void 0!==t&&"blur"!==t.type&&function(t) {
    t.preventDefault();
    const e="keydown"===t.type, a=Jn(t), s=a;
    void 0!==i.amPM&&a===i.amPM&&(i.amPM.textContent=i.l10n.amPM[Vn(i.amPM.textContent===i.l10n.amPM[0])]);
    const n=parseFloat(s.getAttribute("min")), o=parseFloat(s.getAttribute("max")), r=parseFloat(s.getAttribute("step")), l=parseInt(s.value, 10), c=t.delta||(e?38===t.which?1: -1:0);
    let h=l+r*c;
    if(void 0!==s.value&&2===s.value.length) {
    const t=s===i.hourElement, e=s===i.minuteElement;
    h<n?(h=o+h+Vn(!t)+(Vn(t)&&Vn(!i.amPM)), e&&f(void 0, -1, i.hourElement)): h>o&&(h=s===i.hourElement?h-o-Vn(!i.amPM):n, e&&f(void 0, 1, i.hourElement)), i.amPM&&t&&(1===r?h+l===23:Math.abs(h-l)>r)&&(i.amPM.textContent=i.l10n.amPM[Vn(i.amPM.textContent===i.l10n.amPM[0])]), s.value=Bn(h);
}
}(t);
    const e=i._input.value;
    o(), K(), i._input.value!==e&&i._debouncedChange();
}
function o() {
    if(void 0===i.hourElement||void 0===i.minuteElement)return;
    let t=(parseInt(i.hourElement.value.slice(-2), 10)||0)%24, e=(parseInt(i.minuteElement.value, 10)||0)%60, a=void 0!==i.secondElement?(parseInt(i.secondElement.value, 10)||0)%60: 0;
    var s, n;
    void 0!==i.amPM&&(s=t, n=i.amPM.textContent, t=s%12+12*Vn(n===i.l10n.amPM[1]));
    const o=void 0!==i.config.minTime||i.config.minDate&&i.minDateHasTime&&i.latestSelectedDateObj&&0===oo(i.latestSelectedDateObj, i.config.minDate, !0);
    if(void 0!==i.config.maxTime||i.config.maxDate&&i.maxDateHasTime&&i.latestSelectedDateObj&&0===oo(i.latestSelectedDateObj, i.config.maxDate, !0)) {
    const s=void 0!==i.config.maxTime?i.config.maxTime: i.config.maxDate;
    t=Math.min(t, s.getHours()), t===s.getHours()&&(e=Math.min(e, s.getMinutes())), e===s.getMinutes()&&(a=Math.min(a, s.getSeconds()));
}
if(o) {
    const s=void 0!==i.config.minTime?i.config.minTime: i.config.minDate;
    t=Math.max(t, s.getHours()), t===s.getHours()&&e<s.getMinutes()&&(e=s.getMinutes()), e===s.getMinutes()&&(a=Math.max(a, s.getSeconds()));
}
l(t, e, a);
}function r(t) {
    const e=t||i.latestSelectedDateObj;
    e&&l(e.getHours(), e.getMinutes(), e.getSeconds());
}
function l(t, e, a) {
    void 0!==i.latestSelectedDateObj&&i.latestSelectedDateObj.setHours(t%24, e, a||0, 0), i.hourElement&&i.minuteElement&&!i.isMobile&&(i.hourElement.value=Bn(i.config.time_24hr?t: (12+t)%12+12*Vn(t%12==0)), i.minuteElement.value=Bn(e), void 0!==i.amPM&&(i.amPM.textContent=i.l10n.amPM[Vn(t>=12)]), void 0!==i.secondElement&&(i.secondElement.value=Bn(a)));
}
function c(t) {
    const e=Jn(t), i=parseInt(e.value)+(t.delta||0);
    (i/1e3>1||"Enter"===t.key&&!/[^\d]/.test(i.toString()))&&M(i);
}
function h(t, e, a, s) {
    return e instanceof Array?e.forEach((e=>h(t, e, a, s))): t instanceof Array?t.forEach((t=>h(t, e, a, s))):(t.addEventListener(e, a, s), void i._handlers.push( {
    remove: ()=>t.removeEventListener(e, a);
}
));
}function d() {
    G("onChange");
}
function u(t, e) {
    const a=void 0!==t?i.parseDate(t): i.latestSelectedDateObj||(i.config.minDate&&i.config.minDate>i.now?i.config.minDate:i.config.maxDate&&i.config.maxDate<i.now?i.config.maxDate:i.now), s=i.currentYear, n=i.currentMonth;
    try {
    void 0!==a&&(i.currentYear=a.getFullYear(), i.currentMonth=a.getMonth());
}
catch(t) {
    t.message="Invalid date supplied:  "+a, i.config.errorHandler(t);
}
e&&i.currentYear!==s&&(G("onYearChange"), w()), !e||i.currentYear===s&&i.currentMonth===n||G("onMonthChange"), i.redraw();
}function g(t) {
    const e=Jn(t);
    ~e.className.indexOf("arrow")&&f(t, e.classList.contains("arrowUp")?1: -1);
}
function f(t, e, i) {
    const a=t&&Jn(t), s=i||a&&a.parentNode&&a.parentNode.firstChild, n=U("increment");
    n.delta=e, s&&s.dispatchEvent(n);
}
function p(t, e, a, s) {
    const n=T(e, !0), o=qn("span", "flatpickr-day "+t, e.getDate().toString());
    return o.dateObj=e, o.$i=s, o.setAttribute("aria-label", i.formatDate(e, i.config.ariaDateFormat)), -1===t.indexOf("hidden")&&0===oo(e, i.now)&&(i.todayDateElem=o, o.classList.add("today"), o.setAttribute("aria-current", "date")), n?(o.tabIndex=-1, q(e)&&(o.classList.add("selected"), i.selectedDateElem=o, "range"===i.config.mode&&(Un(o, "startRange", i.selectedDates[0]&&0===oo(e, i.selectedDates[0], !0)), Un(o, "endRange", i.selectedDates[1]&&0===oo(e, i.selectedDates[1], !0)), "nextMonthDay"===t&&o.classList.add("inRange")))): o.classList.add("flatpickr-disabled"), "range"===i.config.mode&&function(t) {
    return!("range"!==i.config.mode||i.selectedDates.length<2)&&(oo(t, i.selectedDates[0])>=0&&oo(t, i.selectedDates[1])<=0);
}
(e)&&!q(e)&&o.classList.add("inRange"), i.weekNumbers&&1===i.config.showMonths&&"prevMonthDay"!==t&&a%7==1&&i.weekNumbers.insertAdjacentHTML("beforeend", "<span class='flatpickr-day'>"+i.config.getWeek(e)+"</span>"), G("onDayCreate", o), o;
}function x(t) {
    t.focus(), "range"===i.config.mode&&O(t);
}
function m(t) {
    const e=t>0?0: i.config.showMonths-1, a=t>0?i.config.showMonths:-1;
    for(let s=e;
    s!=a;
    s+=t) {
    const e=i.daysContainer.children[s], a=t>0?0: e.children.length-1, n=t>0?e.children.length:-1;
    for(let i=a;
    i!=n;
    i+=t) {
    const t=e.children[i];
    if(-1===t.className.indexOf("hidden")&&T(t.dateObj))return t;
}
}}function b(t, e) {
    const a=P(document.activeElement||document.body), s=void 0!==t?t: a?document.activeElement:void 0!==i.selectedDateElem&&P(i.selectedDateElem)?i.selectedDateElem:void 0!==i.todayDateElem&&P(i.todayDateElem)?i.todayDateElem:m(e>0?1:-1);
    void 0===s?i._input.focus(): a?function(t, e) {
    const a=-1===t.className.indexOf("Month")?t.dateObj.getMonth(): i.currentMonth, s=e>0?i.config.showMonths:-1, n=e>0?1:-1;
    for(let o=a-i.currentMonth;
    o!=s;
    o+=n) {
    const s=i.daysContainer.children[o], r=a-i.currentMonth===o?t.$i+e: e<0?s.children.length-1:0, l=s.children.length;
    for(let i=r;
    i>=0&&i<l&&i!=(e>0?l: -1);
    i+=n) {
    const a=s.children[i];
    if(-1===a.className.indexOf("hidden")&&T(a.dateObj)&&Math.abs(t.$i-i)>=Math.abs(e))return x(a);
}
}i.changeMonth(n), b(m(n), 0);
}(s, e): x(s);
}function v(t, e) {
    const a=(new Date(t, e, 1).getDay()-i.l10n.firstDayOfWeek+7)%7, s=i.utils.getDaysInMonth((e-1+12)%12, t), n=i.utils.getDaysInMonth(e, t), o=window.document.createDocumentFragment(), r=i.config.showMonths>1, l=r?"prevMonthDay hidden": "prevMonthDay", c=r?"nextMonthDay hidden":"nextMonthDay";
    let h=s+1-a, d=0;
    for(;
    h<=s;
    h++, d++)o.appendChild(p(l, new Date(t, e-1, h), h, d));
    for(h=1;
    h<=n;
    h++, d++)o.appendChild(p("", new Date(t, e, h), h, d));
    for(let s=n+1;
    s<=42-a&&(1===i.config.showMonths||d%7!=0);
    s++, d++)o.appendChild(p(c, new Date(t, e+1, s%n), s, d));
    const u=qn("div", "dayContainer");
    return u.appendChild(o), u;
}
function y() {
    if(void 0===i.daysContainer)return;
    $n(i.daysContainer), i.weekNumbers&&$n(i.weekNumbers);
    const t=document.createDocumentFragment();
    for(let e=0;
    e<i.config.showMonths;
    e++) {
    const a=new Date(i.currentYear, i.currentMonth, 1);
    a.setMonth(i.currentMonth+e), t.appendChild(v(a.getFullYear(), a.getMonth()));
}
i.daysContainer.appendChild(t), i.days=i.daysContainer.firstChild, "range"===i.config.mode&&1===i.selectedDates.length&&O();
}function w() {
    if(i.config.showMonths>1||"dropdown"!==i.config.monthSelectorType)return;
    const t=function(t) {
    return!(void 0!==i.config.minDate&&i.currentYear===i.config.minDate.getFullYear()&&t<i.config.minDate.getMonth())&&!(void 0!==i.config.maxDate&&i.currentYear===i.config.maxDate.getFullYear()&&t>i.config.maxDate.getMonth());
}
;
    i.monthsDropdownContainer.tabIndex=-1, i.monthsDropdownContainer.innerHTML="";
    for(let e=0;
    e<12;
    e++) {
    if(!t(e))continue;
    const a=qn("option", "flatpickr-monthDropdown-month");
    a.value=new Date(i.currentYear, e).getMonth().toString(), a.textContent=to(e, i.config.shorthandCurrentMonth, i.l10n), a.tabIndex=-1, i.currentMonth===e&&(a.selected=!0), i.monthsDropdownContainer.appendChild(a);
}
}function k() {
    const t=qn("div", "flatpickr-month"), e=window.document.createDocumentFragment();
    let a;
    i.config.showMonths>1||"static"===i.config.monthSelectorType?a=qn("span", "cur-month"): (i.monthsDropdownContainer=qn("select", "flatpickr-monthDropdown-months"), i.monthsDropdownContainer.setAttribute("aria-label", i.l10n.monthAriaLabel), h(i.monthsDropdownContainer, "change", (t=> {
    const e=Jn(t), a=parseInt(e.value, 10);
    i.changeMonth(a-i.currentMonth), G("onMonthChange");
}
)), w(), a=i.monthsDropdownContainer);
    const s=Kn("cur-year",  {
    tabindex: "-1"}
), n=s.getElementsByTagName("input")[0];
    n.setAttribute("aria-label", i.l10n.yearAriaLabel), i.config.minDate&&n.setAttribute("min", i.config.minDate.getFullYear().toString()), i.config.maxDate&&(n.setAttribute("max", i.config.maxDate.getFullYear().toString()), n.disabled=!!i.config.minDate&&i.config.minDate.getFullYear()===i.config.maxDate.getFullYear());
    const o=qn("div", "flatpickr-current-month");
    return o.appendChild(a), o.appendChild(s), e.appendChild(o), t.appendChild(e),  {
    container: t, yearElement:n, monthElement:a;
}
}function A() {
    $n(i.monthNav), i.monthNav.appendChild(i.prevMonthNav), i.config.showMonths&&(i.yearElements=[], i.monthElements=[]);
    for(let t=i.config.showMonths;
    t--;
    ) {
    const t=k();
    i.yearElements.push(t.yearElement), i.monthElements.push(t.monthElement), i.monthNav.appendChild(t.container);
}
i.monthNav.appendChild(i.nextMonthNav);
}function C() {
    i.weekdayContainer?$n(i.weekdayContainer): i.weekdayContainer=qn("div", "flatpickr-weekdays");
    for(let t=i.config.showMonths;
    t--;
    ) {
    const t=qn("div", "flatpickr-weekdaycontainer");
    i.weekdayContainer.appendChild(t);
}
return S(), i.weekdayContainer;
}function S() {
    if(!i.weekdayContainer)return;
    const t=i.l10n.firstDayOfWeek;
    let e=[...i.l10n.weekdays.shorthand];
    t>0&&t<e.length&&(e=[...e.splice(t, e.length), ...e.splice(0, t)]);
    for(let t=i.config.showMonths;
    t--;
    )i.weekdayContainer.children[t].innerHTML=`\n      <span class='flatpickr-weekday'>\n        $ {
    e.join("</span><span class='flatpickr-weekday'>");
}
\n      </span>\n      `;
}function E(t, e=!0) {
    const a=e?t: t-i.currentMonth;
    a<0&&!0===i._hidePrevMonthArrow||a>0&&!0===i._hideNextMonthArrow||(i.currentMonth+=a, (i.currentMonth<0||i.currentMonth>11)&&(i.currentYear+=i.currentMonth>11?1: -1, i.currentMonth=(i.currentMonth+12)%12, G("onYearChange"), w()), y(), G("onMonthChange"), $());
}
function L(t) {
    return!(!i.config.appendTo||!i.config.appendTo.contains(t))||i.calendarContainer.contains(t);
}
function _(t) {
    if(i.isOpen&&!i.config.inline) {
    const e=Jn(t), a=L(e), s=e===i.input||e===i.altInput||i.element.contains(e)||t.path&&t.path.indexOf&&(~t.path.indexOf(i.input)||~t.path.indexOf(i.altInput)), o="blur"===t.type?s&&t.relatedTarget&&!L(t.relatedTarget): !s&&!a&&!L(t.relatedTarget), r=!i.config.ignoredFocusElements.some((t=>t.contains(e)));
    o&&r&&(void 0!==i.timeContainer&&void 0!==i.minuteElement&&void 0!==i.hourElement&&""!==i.input.value&&void 0!==i.input.value&&n(), i.close(), i.config&&"range"===i.config.mode&&1===i.selectedDates.length&&(i.clear(!1), i.redraw()));
}
}function M(t) {
    if(!t||i.config.minDate&&t<i.config.minDate.getFullYear()||i.config.maxDate&&t>i.config.maxDate.getFullYear())return;
    const e=t, a=i.currentYear!==e;
    i.currentYear=e||i.currentYear, i.config.maxDate&&i.currentYear===i.config.maxDate.getFullYear()?i.currentMonth=Math.min(i.config.maxDate.getMonth(), i.currentMonth): i.config.minDate&&i.currentYear===i.config.minDate.getFullYear()&&(i.currentMonth=Math.max(i.config.minDate.getMonth(), i.currentMonth)), a&&(i.redraw(), G("onYearChange"), w());
}
function T(t, e=!0) {
    var a;
    const s=i.parseDate(t, void 0, e);
    if(i.config.minDate&&s&&oo(s, i.config.minDate, void 0!==e?e: !i.minDateHasTime)<0||i.config.maxDate&&s&&oo(s, i.config.maxDate, void 0!==e?e:!i.maxDateHasTime)>0)return!1;
    if(!i.config.enable&&0===i.config.disable.length)return!0;
    if(void 0===s)return!1;
    const n=!!i.config.enable, o=null!==(a=i.config.enable)&&void 0!==a?a: i.config.disable;
    for(let t, e=0;
    e<o.length;
    e++) {
    if(t=o[e], "function"==typeof t&&t(s))return n;
    if(t instanceof Date&&void 0!==s&&t.getTime()===s.getTime())return n;
    if("string"==typeof t) {
    const e=i.parseDate(t, void 0, !0);
    return e&&e.getTime()===s.getTime()?n: !n;
}
if("object"==typeof t&&void 0!==s&&t.from&&t.to&&s.getTime()>=t.from.getTime()&&s.getTime()<=t.to.getTime())return n;
}return!n;
}function P(t) {
    return void 0!==i.daysContainer&&(-1===t.className.indexOf("hidden")&&-1===t.className.indexOf("flatpickr-disabled")&&i.daysContainer.contains(t));
}
function D(t) {
    !(t.target===i._input)||!(i.selectedDates.length>0||i._input.value.length>0)||t.relatedTarget&&L(t.relatedTarget)||i.setDate(i._input.value, !0, t.target===i.altInput?i.config.altFormat: i.config.dateFormat);
}
function I(e) {
    const a=Jn(e), s=i.config.wrap?t.contains(a): a===i._input, r=i.config.allowInput, l=i.isOpen&&(!r||!s), c=i.config.inline&&s&&!r;
    if(13===e.keyCode&&s) {
    if(r)return i.setDate(i._input.value, !0, a===i.altInput?i.config.altFormat: i.config.dateFormat), a.blur();
    i.open();
}
else if(L(a)||l||c) {
    const t=!!i.timeContainer&&i.timeContainer.contains(a);
    switch(e.keyCode) {
    case 13: t?(e.preventDefault(), n(), R()):W(e);
    break;
    case 27: e.preventDefault(), R();
    break;
    case 8: case 46:s&&!i.config.allowInput&&(e.preventDefault(), i.clear());
    break;
    case 37: case 39:if(t||s)i.hourElement&&i.hourElement.focus();
    else if(e.preventDefault(), void 0!==i.daysContainer&&(!1===r||document.activeElement&&P(document.activeElement))) {
    const t=39===e.keyCode?1: -1;
    e.ctrlKey?(e.stopPropagation(), E(t), b(m(1), 0)): b(void 0, t);
}
break;
    case 38: case 40:e.preventDefault();
    const o=40===e.keyCode?1: -1;
    i.daysContainer&&void 0!==a.$i||a===i.input||a===i.altInput?e.ctrlKey?(e.stopPropagation(), M(i.currentYear-o), b(m(1), 0)): t||b(void 0, 7*o):a===i.currentYearElement?M(i.currentYear-o):i.config.enableTime&&(!t&&i.hourElement&&i.hourElement.focus(), n(e), i._debouncedChange());
    break;
    case 9: if(t) {
    const t=[i.hourElement, i.minuteElement, i.secondElement, i.amPM].concat(i.pluginElements).filter((t=>t)), s=t.indexOf(a);
    if(-1!==s) {
    const a=t[s+(e.shiftKey?-1: 1)];
    e.preventDefault(), (a||i._input).focus();
}
}else!i.config.noCalendar&&i.daysContainer&&i.daysContainer.contains(a)&&e.shiftKey&&(e.preventDefault(), i._input.focus());
}}if(void 0!==i.amPM&&a===i.amPM)switch(e.key) {
    case i.l10n.amPM[0].charAt(0): case i.l10n.amPM[0].charAt(0).toLowerCase():i.amPM.textContent=i.l10n.amPM[0], o(), K();
    break;
    case i.l10n.amPM[1].charAt(0): case i.l10n.amPM[1].charAt(0).toLowerCase():i.amPM.textContent=i.l10n.amPM[1], o(), K();
}
(s||L(a))&&G("onKeyDown", e);
}function O(t) {
    if(1!==i.selectedDates.length||t&&(!t.classList.contains("flatpickr-day")||t.classList.contains("flatpickr-disabled")))return;
    const e=t?t.dateObj.getTime(): i.days.firstElementChild.dateObj.getTime(), a=i.parseDate(i.selectedDates[0], void 0, !0).getTime(), s=Math.min(e, i.selectedDates[0].getTime()), n=Math.max(e, i.selectedDates[0].getTime());
    let o=!1, r=0, l=0;
    for(let t=s;
    t<n;
    t+=ro)T(new Date(t), !0)||(o=o||t>s&&t<n, t<a&&(!r||t>r)?r=t: t>a&&(!l||t<l)&&(l=t));
    for(let s=0;
    s<i.config.showMonths;
    s++) {
    const n=i.daysContainer.children[s];
    for(let s=0, u=n.children.length;
    s<u;
    s++) {
    const u=n.children[s], g=u.dateObj.getTime(), f=r>0&&g<r||l>0&&g>l;
    f?(u.classList.add("notAllowed"), ["inRange", "startRange", "endRange"].forEach((t=> {
    u.classList.remove(t);
}
))): o&&!f||(["startRange", "inRange", "endRange", "notAllowed"].forEach((t=> {
    u.classList.remove(t);
}
)), void 0!==t&&(t.classList.add(e<=i.selectedDates[0].getTime()?"startRange": "endRange"), a<e&&g===a?u.classList.add("startRange"):a>e&&g===a&&u.classList.add("endRange"), g>=r&&(0===l||g<=l)&&(h=a, d=e, (c=g)>Math.min(h, d)&&c<Math.max(h, d))&&u.classList.add("inRange")));
}}var c, h, d;
}function z() {
    !i.isOpen||i.config.static||i.config.inline||X();
}
function Y(t) {
    return e=> {
    const a=i.config[`_$ {
    t;
}
Date`]=i.parseDate(e, i.config.dateFormat), s=i.config[`_$ {
    "min"===t?"max": "min"}
Date`];
    void 0!==a&&(i["min"===t?"minDateHasTime": "maxDateHasTime"]=a.getHours()>0||a.getMinutes()>0||a.getSeconds()>0), i.selectedDates&&(i.selectedDates=i.selectedDates.filter((t=>T(t))), i.selectedDates.length||"min"!==t||r(a), K()), i.daysContainer&&(H(), void 0!==a?i.currentYearElement[t]=a.getFullYear().toString():i.currentYearElement.removeAttribute(t), i.currentYearElement.disabled=!!s&&void 0!==a&&s.getFullYear()===a.getFullYear());
}
}function N() {
    return i.config.wrap?t.querySelector("[data-input]"): t;
}
function F() {
    "object"!=typeof i.config.locale&&void 0===uo.l10ns[i.config.locale]&&i.config.errorHandler(new Error(`flatpickr:  invalid locale $ {
    i.config.locale;
}
`)), i.l10n=Object.assign(Object.assign( {
}
, uo.l10ns.default), "object"==typeof i.config.locale?i.config.locale: "default"!==i.config.locale?uo.l10ns[i.config.locale]:void 0), io.K=`($ {
    i.l10n.amPM[0];
}
|$ {
    i.l10n.amPM[1];
}
|$ {
    i.l10n.amPM[0].toLowerCase();
}
|$ {
    i.l10n.amPM[1].toLowerCase();
}
)`;
    void 0===Object.assign(Object.assign( {
}
, e), JSON.parse(JSON.stringify(t.dataset|| {
}
))).time_24hr&&void 0===uo.defaultConfig.time_24hr&&(i.config.time_24hr=i.l10n.time_24hr), i.formatDate=so(i), i.parseDate=no( {
    config: i.config, l10n:i.l10n;
}
);
}function X(t) {
    if("function"==typeof i.config.position)return void i.config.position(i, t);
    if(void 0===i.calendarContainer)return;
    G("onPreCalendarPosition");
    const e=t||i._positionElement, a=Array.prototype.reduce.call(i.calendarContainer.children, ((t, e)=>t+e.offsetHeight), 0), s=i.calendarContainer.offsetWidth, n=i.config.position.split(" "), o=n[0], r=n.length>1?n[1]: null, l=e.getBoundingClientRect(), c=window.innerHeight-l.bottom, h="above"===o||"below"!==o&&c<a&&l.top>a, d=window.pageYOffset+l.top+(h?-a-2:e.offsetHeight+2);
    if(Un(i.calendarContainer, "arrowTop", !h), Un(i.calendarContainer, "arrowBottom", h), i.config.inline)return;
    let u=window.pageXOffset+l.left, g=!1, f=!1;
    "center"===r?(u-=(s-l.width)/2, g=!0): "right"===r&&(u-=s-l.width, f=!0), Un(i.calendarContainer, "arrowLeft", !g&&!f), Un(i.calendarContainer, "arrowCenter", g), Un(i.calendarContainer, "arrowRight", f);
    const p=window.document.body.offsetWidth-(window.pageXOffset+l.right), x=u+s>window.document.body.offsetWidth, m=p+s>window.document.body.offsetWidth;
    if(Un(i.calendarContainer, "rightMost", x), !i.config.static)if(i.calendarContainer.style.top=`$ {
    d;
}
px`, x)if(m) {
    const t=function() {
    let t=null;
    for(let e=0;
    e<document.styleSheets.length;
    e++) {
    const i=document.styleSheets[e];
    try {
    i.cssRules;
}
catch(t) {
    continue;
}
t=i;
    break;
}
return null!=t?t: function() {
    const t=document.createElement("style");
    return document.head.appendChild(t), t.sheet;
}
();
}();
    if(void 0===t)return;
    const e=window.document.body.offsetWidth, a=Math.max(0, e/2-s/2), n=".flatpickr-calendar.centerMost: before", o=".flatpickr-calendar.centerMost:after", r=t.cssRules.length, c=` {
    left: $ {
    l.left;
}
px;
    right: auto;
}
`;
    Un(i.calendarContainer, "rightMost", !1), Un(i.calendarContainer, "centerMost", !0), t.insertRule(`$ {
    n;
}
, $ {
    o;
}
$ {
    c;
}
`, r), i.calendarContainer.style.left=`$ {
    a;
}
px`, i.calendarContainer.style.right="auto"}else i.calendarContainer.style.left="auto", i.calendarContainer.style.right=`$ {
    p;
}
px`;
    else i.calendarContainer.style.left=`$ {
    u;
}
px`, i.calendarContainer.style.right="auto"}function H() {
    i.config.noCalendar||i.isMobile||(w(), $(), y());
}
function R() {
    i._input.focus(), -1!==window.navigator.userAgent.indexOf("MSIE")||void 0!==navigator.msMaxTouchPoints?setTimeout(i.close, 0): i.close();
}
function W(t) {
    t.preventDefault(), t.stopPropagation();
    const e=Zn(Jn(t), (t=>t.classList&&t.classList.contains("flatpickr-day")&&!t.classList.contains("flatpickr-disabled")&&!t.classList.contains("notAllowed")));
    if(void 0===e)return;
    const a=e, s=i.latestSelectedDateObj=new Date(a.dateObj.getTime()), n=(s.getMonth()<i.currentMonth||s.getMonth()>i.currentMonth+i.config.showMonths-1)&&"range"!==i.config.mode;
    if(i.selectedDateElem=a, "single"===i.config.mode)i.selectedDates=[s];
    else if("multiple"===i.config.mode) {
    const t=q(s);
    t?i.selectedDates.splice(parseInt(t), 1): i.selectedDates.push(s);
}
else"range"===i.config.mode&&(2===i.selectedDates.length&&i.clear(!1, !1), i.latestSelectedDateObj=s, i.selectedDates.push(s), 0!==oo(s, i.selectedDates[0], !0)&&i.selectedDates.sort(((t, e)=>t.getTime()-e.getTime())));
    if(o(), n) {
    const t=i.currentYear!==s.getFullYear();
    i.currentYear=s.getFullYear(), i.currentMonth=s.getMonth(), t&&(G("onYearChange"), w()), G("onMonthChange");
}
if($(), y(), K(), n||"range"===i.config.mode||1!==i.config.showMonths?void 0!==i.selectedDateElem&&void 0===i.hourElement&&i.selectedDateElem&&i.selectedDateElem.focus(): x(a), void 0!==i.hourElement&&void 0!==i.hourElement&&i.hourElement.focus(), i.config.closeOnSelect) {
    const t="single"===i.config.mode&&!i.config.enableTime, e="range"===i.config.mode&&2===i.selectedDates.length&&!i.config.enableTime;
    (t||e)&&R();
}
d();
}i.parseDate=no( {
    config: i.config, l10n:i.l10n;
}
), i._handlers=[], i.pluginElements=[], i.loadedPlugins=[], i._bind=h, i._setHoursFromDate=r, i._positionCalendar=X, i.changeMonth=E, i.changeYear=M, i.clear=function(t=!0, e=!0) {
    i.input.value="", void 0!==i.altInput&&(i.altInput.value="");
    void 0!==i.mobileInput&&(i.mobileInput.value="");
    i.selectedDates=[], i.latestSelectedDateObj=void 0, !0===e&&(i.currentYear=i._initialDate.getFullYear(), i.currentMonth=i._initialDate.getMonth());
    if(!0===i.config.enableTime) {
    const {
    hours: t, minutes:e, seconds:a;
}
=lo(i.config);
    l(t, e, a);
}
i.redraw(), t&&G("onChange");
}, i.close=function() {
    i.isOpen=!1, i.isMobile||(void 0!==i.calendarContainer&&i.calendarContainer.classList.remove("open"), void 0!==i._input&&i._input.classList.remove("active"));
    G("onClose");
}
, i._createElement=qn, i.destroy=function() {
    void 0!==i.config&&G("onDestroy");
    for(let t=i._handlers.length;
    t--;
    )i._handlers[t].remove();
    if(i._handlers=[], i.mobileInput)i.mobileInput.parentNode&&i.mobileInput.parentNode.removeChild(i.mobileInput), i.mobileInput=void 0;
    else if(i.calendarContainer&&i.calendarContainer.parentNode)if(i.config.static&&i.calendarContainer.parentNode) {
    const t=i.calendarContainer.parentNode;
    if(t.lastChild&&t.removeChild(t.lastChild), t.parentNode) {
    for(;
    t.firstChild;
    )t.parentNode.insertBefore(t.firstChild, t);
    t.parentNode.removeChild(t);
}
}else i.calendarContainer.parentNode.removeChild(i.calendarContainer);
    i.altInput&&(i.input.type="text", i.altInput.parentNode&&i.altInput.parentNode.removeChild(i.altInput), delete i.altInput);
    i.input&&(i.input.type=i.input._type, i.input.classList.remove("flatpickr-input"), i.input.removeAttribute("readonly"));
    ["_showTimeInput", "latestSelectedDateObj", "_hideNextMonthArrow", "_hidePrevMonthArrow", "__hideNextMonthArrow", "__hidePrevMonthArrow", "isMobile", "isOpen", "selectedDateElem", "minDateHasTime", "maxDateHasTime", "days", "daysContainer", "_input", "_positionElement", "innerContainer", "rContainer", "monthNav", "todayDateElem", "calendarContainer", "weekdayContainer", "prevMonthNav", "nextMonthNav", "monthsDropdownContainer", "currentMonthElement", "currentYearElement", "navigationCurrentMonth", "selectedDateElem", "config"].forEach((t=> {
    try {
    delete i[t];
}
catch(t) {
}
}
));
}, i.isEnabled=T, i.jumpToDate=u, i.open=function(t, e=i._positionElement) {
    if(!0===i.isMobile) {
    if(t) {
    t.preventDefault();
    const e=Jn(t);
    e&&e.blur();
}
return void 0!==i.mobileInput&&(i.mobileInput.focus(), i.mobileInput.click()), void G("onOpen");
}if(i._input.disabled||i.config.inline)return;
    const a=i.isOpen;
    i.isOpen=!0, a||(i.calendarContainer.classList.add("open"), i._input.classList.add("active"), G("onOpen"), X(e));
    !0===i.config.enableTime&&!0===i.config.noCalendar&&(!1!==i.config.allowInput||void 0!==t&&i.timeContainer.contains(t.relatedTarget)||setTimeout((()=>i.hourElement.select()), 50));
}
, i.redraw=H, i.set=function(t, e) {
    if(null!==t&&"object"==typeof t) {
    Object.assign(i.config, t);
    for(const e in t)void 0!==B[e]&&B[e].forEach((t=>t()));
}
else i.config[t]=e, void 0!==B[t]?B[t].forEach((t=>t())): Xn.indexOf(t)>-1&&(i.config[t]=Gn(e));
    i.redraw(), K(!0);
}
, i.setDate=function(t, e=!1, a=i.config.dateFormat) {
    if(0!==t&&!t||t instanceof Array&&0===t.length)return i.clear(e);
    V(t, a), i.latestSelectedDateObj=i.selectedDates[i.selectedDates.length-1], i.redraw(), u(void 0, e), r(), 0===i.selectedDates.length&&i.clear(!1);
    K(e), e&&G("onChange");
}
, i.toggle=function(t) {
    if(!0===i.isOpen)return i.close();
    i.open(t);
}
;
    const B= {
    locale: [F, S], showMonths:[A, s, C], minDate:[u], maxDate:[u], clickOpens:[()=> {
    !0===i.config.clickOpens?(h(i._input, "focus", i.open), h(i._input, "click", i.open)): (i._input.removeEventListener("focus", i.open), i._input.removeEventListener("click", i.open));
}
];
};
    function V(t, e) {
    let a=[];
    if(t instanceof Array)a=t.map((t=>i.parseDate(t, e)));
    else if(t instanceof Date||"number"==typeof t)a=[i.parseDate(t, e)];
    else if("string"==typeof t)switch(i.config.mode) {
    case"single": case"time":a=[i.parseDate(t, e)];
    break;
    case"multiple": a=t.split(i.config.conjunction).map((t=>i.parseDate(t, e)));
    break;
    case"range": a=t.split(i.l10n.rangeSeparator).map((t=>i.parseDate(t, e)));
}
else i.config.errorHandler(new Error(`Invalid date supplied: $ {
    JSON.stringify(t);
}
`));
    i.selectedDates=i.config.allowInvalidPreload?a: a.filter((t=>t instanceof Date&&T(t, !1))), "range"===i.config.mode&&i.selectedDates.sort(((t, e)=>t.getTime()-e.getTime()));
}
function j(t) {
    return t.slice().map((t=>"string"==typeof t||"number"==typeof t||t instanceof Date?i.parseDate(t, void 0, !0): t&&"object"==typeof t&&t.from&&t.to? {
    from: i.parseDate(t.from, void 0), to:i.parseDate(t.to, void 0);
}
:t)).filter((t=>t));
}function G(t, e) {
    if(void 0===i.config)return;
    const a=i.config[t];
    if(void 0!==a&&a.length>0)for(let t=0;
    a[t]&&t<a.length;
    t++)a[t](i.selectedDates, i.input.value, i, e);
    "onChange"===t&&(i.input.dispatchEvent(U("change")), i.input.dispatchEvent(U("input")));
}
function U(t) {
    const e=document.createEvent("Event");
    return e.initEvent(t, !0, !0), e;
}
function q(t) {
    for(let e=0;
    e<i.selectedDates.length;
    e++)if(0===oo(i.selectedDates[e], t))return""+e;
    return!1;
}
function $() {
    i.config.noCalendar||i.isMobile||!i.monthNav||(i.yearElements.forEach(((t, e)=> {
    const a=new Date(i.currentYear, i.currentMonth, 1);
    a.setMonth(i.currentMonth+e), i.config.showMonths>1||"static"===i.config.monthSelectorType?i.monthElements[e].textContent=to(a.getMonth(), i.config.shorthandCurrentMonth, i.l10n)+" ": i.monthsDropdownContainer.value=a.getMonth().toString(), t.value=a.getFullYear().toString();
}
)), i._hidePrevMonthArrow=void 0!==i.config.minDate&&(i.currentYear===i.config.minDate.getFullYear()?i.currentMonth<=i.config.minDate.getMonth():i.currentYear<i.config.minDate.getFullYear()), i._hideNextMonthArrow=void 0!==i.config.maxDate&&(i.currentYear===i.config.maxDate.getFullYear()?i.currentMonth+1>i.config.maxDate.getMonth():i.currentYear>i.config.maxDate.getFullYear()));
}function Z(t) {
    return i.selectedDates.map((e=>i.formatDate(e, t))).filter(((t, e, a)=>"range"!==i.config.mode||i.config.enableTime||a.indexOf(t)===e)).join("range"!==i.config.mode?i.config.conjunction: i.l10n.rangeSeparator);
}
function K(t=!0) {
    void 0!==i.mobileInput&&i.mobileFormatStr&&(i.mobileInput.value=void 0!==i.latestSelectedDateObj?i.formatDate(i.latestSelectedDateObj, i.mobileFormatStr): ""), i.input.value=Z(i.config.dateFormat), void 0!==i.altInput&&(i.altInput.value=Z(i.config.altFormat)), !1!==t&&G("onValueUpdate");
}
function J(t) {
    const e=Jn(t), a=i.prevMonthNav.contains(e), s=i.nextMonthNav.contains(e);
    a||s?E(a?-1: 1):i.yearElements.indexOf(e)>=0?e.select():e.classList.contains("arrowUp")?i.changeYear(i.currentYear+1):e.classList.contains("arrowDown")&&i.changeYear(i.currentYear-1);
}
return function() {
    i.element=i.input=t, i.isOpen=!1, function() {
    const s=["wrap", "weekNumbers", "allowInput", "allowInvalidPreload", "clickOpens", "time_24hr", "enableTime", "noCalendar", "altInput", "shorthandCurrentMonth", "inline", "static", "enableSeconds", "disableMobile"], n=Object.assign(Object.assign( {
}
, JSON.parse(JSON.stringify(t.dataset|| {
}
))), e), o= {
}
;
    i.config.parseDate=n.parseDate, i.config.formatDate=n.formatDate, Object.defineProperty(i.config, "enable",  {
    get: ()=>i.config._enable, set:t=> {
    i.config._enable=j(t);
}
}), Object.defineProperty(i.config, "disable",  {
    get: ()=>i.config._disable, set:t=> {
    i.config._disable=j(t);
}
});
    const r="time"===n.mode;
    if(!n.dateFormat&&(n.enableTime||r)) {
    const t=uo.defaultConfig.dateFormat||Hn.dateFormat;
    o.dateFormat=n.noCalendar||r?"H: i"+(n.enableSeconds?":S":""):t+" H:i"+(n.enableSeconds?":S":"");
}
if(n.altInput&&(n.enableTime||r)&&!n.altFormat) {
    const t=uo.defaultConfig.altFormat||Hn.altFormat;
    o.altFormat=n.noCalendar||r?"h: i"+(n.enableSeconds?":S K":" K"):t+` h:i$ {
    n.enableSeconds?": S":""}
 K`;
}Object.defineProperty(i.config, "minDate",  {
    get: ()=>i.config._minDate, set:Y("min");
}
), Object.defineProperty(i.config, "maxDate",  {
    get: ()=>i.config._maxDate, set:Y("max");
}
);
    const l=t=>e=> {
    i.config["min"===t?"_minTime": "_maxTime"]=i.parseDate(e, "H:i:S");
}
;
    Object.defineProperty(i.config, "minTime",  {
    get: ()=>i.config._minTime, set:l("min");
}
), Object.defineProperty(i.config, "maxTime",  {
    get: ()=>i.config._maxTime, set:l("max");
}
), "time"===n.mode&&(i.config.noCalendar=!0, i.config.enableTime=!0);
    Object.assign(i.config, o, n);
    for(let t=0;
    t<s.length;
    t++)i.config[s[t]]=!0===i.config[s[t]]||"true"===i.config[s[t]];
    Xn.filter((t=>void 0!==i.config[t])).forEach((t=> {
    i.config[t]=Gn(i.config[t]||[]).map(a);
}
)), i.isMobile=!i.config.disableMobile&&!i.config.inline&&"single"===i.config.mode&&!i.config.disable.length&&!i.config.enable&&!i.config.weekNumbers&&/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    for(let t=0;
    t<i.config.plugins.length;
    t++) {
    const e=i.config.plugins[t](i)|| {
}
;
    for(const t in e)Xn.indexOf(t)>-1?i.config[t]=Gn(e[t]).map(a).concat(i.config[t]): void 0===n[t]&&(i.config[t]=e[t]);
}
n.altInputClass||(i.config.altInputClass=N().className+" "+i.config.altInputClass);
    G("onParseConfig");
}
(), F(), function() {
    if(i.input=N(), !i.input)return void i.config.errorHandler(new Error("Invalid input element specified"));
    i.input._type=i.input.type, i.input.type="text", i.input.classList.add("flatpickr-input"), i._input=i.input, i.config.altInput&&(i.altInput=qn(i.input.nodeName, i.config.altInputClass), i._input=i.altInput, i.altInput.placeholder=i.input.placeholder, i.altInput.disabled=i.input.disabled, i.altInput.required=i.input.required, i.altInput.tabIndex=i.input.tabIndex, i.altInput.type="text", i.input.setAttribute("type", "hidden"), !i.config.static&&i.input.parentNode&&i.input.parentNode.insertBefore(i.altInput, i.input.nextSibling));
    i.config.allowInput||i._input.setAttribute("readonly", "readonly");
    i._positionElement=i.config.positionElement||i._input;
}
(), function() {
    i.selectedDates=[], i.now=i.parseDate(i.config.now)||new Date;
    const t=i.config.defaultDate||("INPUT"!==i.input.nodeName&&"TEXTAREA"!==i.input.nodeName||!i.input.placeholder||i.input.value!==i.input.placeholder?i.input.value: null);
    t&&V(t, i.config.dateFormat);
    i._initialDate=i.selectedDates.length>0?i.selectedDates[0]: i.config.minDate&&i.config.minDate.getTime()>i.now.getTime()?i.config.minDate:i.config.maxDate&&i.config.maxDate.getTime()<i.now.getTime()?i.config.maxDate:i.now, i.currentYear=i._initialDate.getFullYear(), i.currentMonth=i._initialDate.getMonth(), i.selectedDates.length>0&&(i.latestSelectedDateObj=i.selectedDates[0]);
    void 0!==i.config.minTime&&(i.config.minTime=i.parseDate(i.config.minTime, "H: i"));
    void 0!==i.config.maxTime&&(i.config.maxTime=i.parseDate(i.config.maxTime, "H: i"));
    i.minDateHasTime=!!i.config.minDate&&(i.config.minDate.getHours()>0||i.config.minDate.getMinutes()>0||i.config.minDate.getSeconds()>0), i.maxDateHasTime=!!i.config.maxDate&&(i.config.maxDate.getHours()>0||i.config.maxDate.getMinutes()>0||i.config.maxDate.getSeconds()>0);
}
(), i.utils= {
    getDaysInMonth: (t=i.currentMonth, e=i.currentYear)=>1===t&&(e%4==0&&e%100!=0||e%400==0)?29:i.l10n.daysInMonth[t];
}
, i.isMobile||function() {
    const t=window.document.createDocumentFragment();
    if(i.calendarContainer=qn("div", "flatpickr-calendar"), i.calendarContainer.tabIndex=-1, !i.config.noCalendar) {
    if(t.appendChild((i.monthNav=qn("div", "flatpickr-months"), i.yearElements=[], i.monthElements=[], i.prevMonthNav=qn("span", "flatpickr-prev-month"), i.prevMonthNav.innerHTML=i.config.prevArrow, i.nextMonthNav=qn("span", "flatpickr-next-month"), i.nextMonthNav.innerHTML=i.config.nextArrow, A(), Object.defineProperty(i, "_hidePrevMonthArrow",  {
    get: ()=>i.__hidePrevMonthArrow, set(t) {
    i.__hidePrevMonthArrow!==t&&(Un(i.prevMonthNav, "flatpickr-disabled", t), i.__hidePrevMonthArrow=t);
}
}), Object.defineProperty(i, "_hideNextMonthArrow",  {
    get: ()=>i.__hideNextMonthArrow, set(t) {
    i.__hideNextMonthArrow!==t&&(Un(i.nextMonthNav, "flatpickr-disabled", t), i.__hideNextMonthArrow=t);
}
}), i.currentYearElement=i.yearElements[0], $(), i.monthNav)), i.innerContainer=qn("div", "flatpickr-innerContainer"), i.config.weekNumbers) {
    const {
    weekWrapper: t, weekNumbers:e;
}
=function() {
    i.calendarContainer.classList.add("hasWeeks");
    const t=qn("div", "flatpickr-weekwrapper");
    t.appendChild(qn("span", "flatpickr-weekday", i.l10n.weekAbbreviation));
    const e=qn("div", "flatpickr-weeks");
    return t.appendChild(e),  {
    weekWrapper: t, weekNumbers:e;
}
}();
    i.innerContainer.appendChild(t), i.weekNumbers=e, i.weekWrapper=t;
}
i.rContainer=qn("div", "flatpickr-rContainer"), i.rContainer.appendChild(C()), i.daysContainer||(i.daysContainer=qn("div", "flatpickr-days"), i.daysContainer.tabIndex=-1), y(), i.rContainer.appendChild(i.daysContainer), i.innerContainer.appendChild(i.rContainer), t.appendChild(i.innerContainer);
}i.config.enableTime&&t.appendChild(function() {
    i.calendarContainer.classList.add("hasTime"), i.config.noCalendar&&i.calendarContainer.classList.add("noCalendar");
    const t=lo(i.config);
    i.timeContainer=qn("div", "flatpickr-time"), i.timeContainer.tabIndex=-1;
    const e=qn("span", "flatpickr-time-separator", ": "), a=Kn("flatpickr-hour",  {
    "aria-label": i.l10n.hourAriaLabel;
}
);
    i.hourElement=a.getElementsByTagName("input")[0];
    const s=Kn("flatpickr-minute",  {
    "aria-label": i.l10n.minuteAriaLabel;
}
);
    i.minuteElement=s.getElementsByTagName("input")[0], i.hourElement.tabIndex=i.minuteElement.tabIndex=-1, i.hourElement.value=Bn(i.latestSelectedDateObj?i.latestSelectedDateObj.getHours(): i.config.time_24hr?t.hours:function(t) {
    switch(t%24) {
    case 0: case 12:return 12;
    default: return t%12;
}
}(t.hours)), i.minuteElement.value=Bn(i.latestSelectedDateObj?i.latestSelectedDateObj.getMinutes():t.minutes), i.hourElement.setAttribute("step", i.config.hourIncrement.toString()), i.minuteElement.setAttribute("step", i.config.minuteIncrement.toString()), i.hourElement.setAttribute("min", i.config.time_24hr?"0":"1"), i.hourElement.setAttribute("max", i.config.time_24hr?"23":"12"), i.hourElement.setAttribute("maxlength", "2"), i.minuteElement.setAttribute("min", "0"), i.minuteElement.setAttribute("max", "59"), i.minuteElement.setAttribute("maxlength", "2"), i.timeContainer.appendChild(a), i.timeContainer.appendChild(e), i.timeContainer.appendChild(s), i.config.time_24hr&&i.timeContainer.classList.add("time24hr");
    if(i.config.enableSeconds) {
    i.timeContainer.classList.add("hasSeconds");
    const e=Kn("flatpickr-second");
    i.secondElement=e.getElementsByTagName("input")[0], i.secondElement.value=Bn(i.latestSelectedDateObj?i.latestSelectedDateObj.getSeconds(): t.seconds), i.secondElement.setAttribute("step", i.minuteElement.getAttribute("step")), i.secondElement.setAttribute("min", "0"), i.secondElement.setAttribute("max", "59"), i.secondElement.setAttribute("maxlength", "2"), i.timeContainer.appendChild(qn("span", "flatpickr-time-separator", ":")), i.timeContainer.appendChild(e);
}
i.config.time_24hr||(i.amPM=qn("span", "flatpickr-am-pm", i.l10n.amPM[Vn((i.latestSelectedDateObj?i.hourElement.value:i.config.defaultHour)>11)]), i.amPM.title=i.l10n.toggleTitle, i.amPM.tabIndex=-1, i.timeContainer.appendChild(i.amPM));
    return i.timeContainer;
}
());
    Un(i.calendarContainer, "rangeMode", "range"===i.config.mode), Un(i.calendarContainer, "animate", !0===i.config.animate), Un(i.calendarContainer, "multiMonth", i.config.showMonths>1), i.calendarContainer.appendChild(t);
    const e=void 0!==i.config.appendTo&&void 0!==i.config.appendTo.nodeType;
    if((i.config.inline||i.config.static)&&(i.calendarContainer.classList.add(i.config.inline?"inline": "static"), i.config.inline&&(!e&&i.element.parentNode?i.element.parentNode.insertBefore(i.calendarContainer, i._input.nextSibling):void 0!==i.config.appendTo&&i.config.appendTo.appendChild(i.calendarContainer)), i.config.static)) {
    const t=qn("div", "flatpickr-wrapper");
    i.element.parentNode&&i.element.parentNode.insertBefore(t, i.element), t.appendChild(i.element), i.altInput&&t.appendChild(i.altInput), t.appendChild(i.calendarContainer);
}
i.config.static||i.config.inline||(void 0!==i.config.appendTo?i.config.appendTo: window.document.body).appendChild(i.calendarContainer);
}(), function() {
    i.config.wrap&&["open", "close", "toggle", "clear"].forEach((t=> {
    Array.prototype.forEach.call(i.element.querySelectorAll(`[data-$ {
    t;
}
]`), (e=>h(e, "click", i[t])));
}));
    if(i.isMobile)return void function() {
    const t=i.config.enableTime?i.config.noCalendar?"time": "datetime-local":"date";
    i.mobileInput=qn("input", i.input.className+" flatpickr-mobile"), i.mobileInput.tabIndex=1, i.mobileInput.type=t, i.mobileInput.disabled=i.input.disabled, i.mobileInput.required=i.input.required, i.mobileInput.placeholder=i.input.placeholder, i.mobileFormatStr="datetime-local"===t?"Y-m-d\\TH: i:S":"date"===t?"Y-m-d":"H:i:S", i.selectedDates.length>0&&(i.mobileInput.defaultValue=i.mobileInput.value=i.formatDate(i.selectedDates[0], i.mobileFormatStr));
    i.config.minDate&&(i.mobileInput.min=i.formatDate(i.config.minDate, "Y-m-d"));
    i.config.maxDate&&(i.mobileInput.max=i.formatDate(i.config.maxDate, "Y-m-d"));
    i.input.getAttribute("step")&&(i.mobileInput.step=String(i.input.getAttribute("step")));
    i.input.type="hidden", void 0!==i.altInput&&(i.altInput.type="hidden");
    try {
    i.input.parentNode&&i.input.parentNode.insertBefore(i.mobileInput, i.input.nextSibling);
}
catch(t) {
}
h(i.mobileInput, "change", (t=> {
    i.setDate(Jn(t).value, !1, i.mobileFormatStr), G("onChange"), G("onClose");
}
));
}();
    const t=jn(z, 50);
    i._debouncedChange=jn(d, 300), i.daysContainer&&!/iPhone|iPad|iPod/i.test(navigator.userAgent)&&h(i.daysContainer, "mouseover", (t=> {
    "range"===i.config.mode&&O(Jn(t));
}
));
    h(window.document.body, "keydown", I), i.config.inline||i.config.static||h(window, "resize", t);
    void 0!==window.ontouchstart?h(window.document, "touchstart", _): h(window.document, "mousedown", _);
    h(window.document, "focus", _,  {
    capture: !0;
}
), !0===i.config.clickOpens&&(h(i._input, "focus", i.open), h(i._input, "click", i.open));
    void 0!==i.daysContainer&&(h(i.monthNav, "click", J), h(i.monthNav, ["keyup", "increment"], c), h(i.daysContainer, "click", W));
    if(void 0!==i.timeContainer&&void 0!==i.minuteElement&&void 0!==i.hourElement) {
    const t=t=>Jn(t).select();
    h(i.timeContainer, ["increment"], n), h(i.timeContainer, "blur", n,  {
    capture: !0;
}
), h(i.timeContainer, "click", g), h([i.hourElement, i.minuteElement], ["focus", "click"], t), void 0!==i.secondElement&&h(i.secondElement, "focus", (()=>i.secondElement&&i.secondElement.select())), void 0!==i.amPM&&h(i.amPM, "click", (t=> {
    n(t), d();
}
));
}i.config.allowInput&&h(i._input, "blur", D);
}(), (i.selectedDates.length||i.config.noCalendar)&&(i.config.enableTime&&r(i.config.noCalendar?i.latestSelectedDateObj: void 0), K(!1)), s();
    const o=/^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    !i.isMobile&&o&&X(), G("onReady");
}
(), i;
}function ho(t, e) {
    const i=Array.prototype.slice.call(t).filter((t=>t instanceof HTMLElement)), a=[];
    for(let t=0;
    t<i.length;
    t++) {
    const s=i[t];
    try {
    if(null!==s.getAttribute("data-fp-omit"))continue;
    void 0!==s._flatpickr&&(s._flatpickr.destroy(), s._flatpickr=void 0), s._flatpickr=co(s, e|| {
}
), a.push(s._flatpickr);
}
catch(t) {
    console.error(t);
}
}return 1===a.length?a[0]: a;
}"undefined"!=typeof HTMLElement&&"undefined"!=typeof HTMLCollection&&"undefined"!=typeof NodeList&&(HTMLCollection.prototype.flatpickr=NodeList.prototype.flatpickr=function(t) {
    return ho(this, t);
}
, HTMLElement.prototype.flatpickr=function(t) {
    return ho([this], t);
}
);
    var uo=function(t, e) {
    return"string"==typeof t?ho(window.document.querySelectorAll(t), e): t instanceof Node?ho([t], e):ho(t, e);
}
;
    uo.defaultConfig= {
}
, uo.l10ns= {
    en: Object.assign( {
}
, Wn), default:Object.assign( {
}
, Wn);
}
, uo.localize=t=> {
    uo.l10ns.default=Object.assign(Object.assign( {
}
, uo.l10ns.default), t);
}
, uo.setDefaults=t=> {
    uo.defaultConfig=Object.assign(Object.assign( {
}
, uo.defaultConfig), t);
}
, uo.parseDate=no( {
}
), uo.formatDate=so( {
}
), uo.compareDates=oo, "undefined"!=typeof jQuery&&void 0!==jQuery.fn&&(jQuery.fn.flatpickr=function(t) {
    return ho(this, t);
}
), Date.prototype.fp_incr=function(t) {
    return new Date(this.getFullYear(), this.getMonth(), this.getDate()+("string"==typeof t?parseInt(t, 10): t));
}
, "undefined"!=typeof window&&(window.flatpickr=uo);
    var go=uo;
    Fn=function() {
    this.init=function(t) {
    go(t,  {
    enableTime: !1, allowInput:!0, wrap:!0, dateFormat:"M d,  Y", position:"right"}
);
}, this.range=function(t) {
    go(t,  {
    enableTime: !1, allowInput:!0, wrap:!0, dateFormat:"M d,  Y", mode:"range", defaultDate:["Jan 23,  2022", "Jan 30,  2022"];
}
);
}}, document.addEventListener("DOMContentLoaded", (()=> {
    const t=document.querySelector("#chart-line");
    t&&(new Ua).init(t);
    const e=document.querySelector("#chart-bar");
    e&&(new zn).init(e);
    const i=document.querySelector("#chart-users");
    i&&(new Yn).init(i);
    const a=document.querySelectorAll("[data-toggle='spark-chart']");
    a&&Array.prototype.forEach.call(a, (function(t) {
    (new Nn).init(t);
}
));
    const s=document.querySelector("#lightgallery");
    e&&(new lightGallery).init(s);
    document.querySelector(".daterangepicker")&&(new Fn).range(".daterangepicker");
    document.querySelector(".datepicker")&&(new Fn).init(".datepicker");
}
));
}();
    
//# sourceMappingURL=main.js.map
