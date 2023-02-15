(function () {
  const n = document.createElement("link").relList;
  if (n && n.supports && n.supports("modulepreload")) return;
  for (const e of document.querySelectorAll('link[rel="modulepreload"]')) s(e);
  new MutationObserver((e) => {
    for (const t of e)
      if (t.type === "childList")
        for (const i of t.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && s(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function c(e) {
    const t = {};
    return (
      e.integrity && (t.integrity = e.integrity),
      e.referrerpolicy && (t.referrerPolicy = e.referrerpolicy),
      e.crossorigin === "use-credentials"
        ? (t.credentials = "include")
        : e.crossorigin === "anonymous"
        ? (t.credentials = "omit")
        : (t.credentials = "same-origin"),
      t
    );
  }
  function s(e) {
    if (e.ep) return;
    e.ep = !0;
    const t = c(e);
    fetch(e.href, t);
  }
})();
let r = 0;
l();
function l() {
  let o,
    n = document.getElementsByClassName("quote");
  for (o = 0; o < n.length; o++) n[o].style.display = "none";
  r++,
    r > n.length && (r = 1),
    (n[r - 1].style.display = "block"),
    setTimeout(l, 7e3);
}
let d = document.querySelector(".fa-list"),
  u = document.querySelector(".navbar");
d.addEventListener("click", () => {
  u.classList.toggle("d-none");
});
let f = document.querySelector(".next-btn"),
  a = document.querySelector(".prev-btn");
f.addEventListener("click", () => {
  l();
});
a.addEventListener("click", () => {
  l();
});
