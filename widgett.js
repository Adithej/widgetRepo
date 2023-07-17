!(function (t, e) {
  if ("object" == typeof exports && "object" == typeof module)
    module.exports = e();
  else if ("function" == typeof define && define.amd) define([], e);
  else {
    var o = e();
    for (var n in o) ("object" == typeof exports ? exports : t)[n] = o[n];
  }
})(self, () =>
  (() => {
    "use strict";
    var t = {
        d: (e, o) => {
          for (var n in o)
            t.o(o, n) &&
              !t.o(e, n) &&
              Object.defineProperty(e, n, { enumerable: !0, get: o[n] });
        },
        o: (t, e) => Object.prototype.hasOwnProperty.call(t, e),
        r: (t) => {
          "undefined" != typeof Symbol &&
            Symbol.toStringTag &&
            Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
            Object.defineProperty(t, "__esModule", { value: !0 });
        },
      },
      e = {};
    function o(t, e) {
      return t.getAttribute(`data-${e}`) || "";
    }
    t.r(e),
      t.d(e, {
        handleDOMContentLoaded: () => s,
        handleDropdownChange: () => d,
        initializeWidget: () => c,
        saveProductData: () => a,
      });
    const n = "webtoffee";
    var r = function (t, e, o, n) {
      return new (o || (o = Promise))(function (r, i) {
        function c(t) {
          try {
            d(n.next(t));
          } catch (t) {
            i(t);
          }
        }
        function a(t) {
          try {
            d(n.throw(t));
          } catch (t) {
            i(t);
          }
        }
        function d(t) {
          var e;
          t.done
            ? r(t.value)
            : ((e = t.value),
              e instanceof o
                ? e
                : new o(function (t) {
                    t(e);
                  })).then(c, a);
        }
        d((n = n.apply(t, e || [])).next());
      });
    };
    var i = function (t, e, o, n) {
      return new (o || (o = Promise))(function (r, i) {
        function c(t) {
          try {
            d(n.next(t));
          } catch (t) {
            i(t);
          }
        }
        function a(t) {
          try {
            d(n.throw(t));
          } catch (t) {
            i(t);
          }
        }
        function d(t) {
          var e;
          t.done
            ? r(t.value)
            : ((e = t.value),
              e instanceof o
                ? e
                : new o(function (t) {
                    t(e);
                  })).then(c, a);
        }
        d((n = n.apply(t, e || [])).next());
      });
    };
    function c() {
      var t;
      return i(this, void 0, void 0, function* () {
        const e = `${n}-widget`,
          i = Array.from(document.querySelectorAll(`.${e}`));
        try {
          const {
            widgetIds: e,
            productIds: c,
            shopIds: s,
            pagePaths: u,
            productHandles: f,
          } = (function (t) {
            const e = [],
              n = [],
              r = [],
              i = [],
              c = [];
            return (
              t.forEach((t) => {
                const d = o(t, "widget-id"),
                  s = o(t, "product-id");
                s && a(o(t, "product-handle"), s);
                const u = o(t, "shop-id"),
                  f = o(t, "page-path"),
                  l = o(t, "product-handle");
                e.push(d), n.push(s), r.push(u), i.push(f), c.push(l);
              }),
              {
                widgetIds: e,
                productIds: n,
                shopIds: r,
                pagePaths: i,
                productHandles: c,
              }
            );
          })(i);
          yield (function (t, e, o, i, c) {
            return r(this, void 0, void 0, function* () {
              const d = [...t].map((t, d) =>
                (function (t, e, o, i, c) {
                  return r(this, void 0, void 0, function* () {
                    try {
                      const d = yield fetch(
                          `https://d8ewmsj0ziqpa.cloudfront.net/${o}/widgets/${t}/widget.json`
                        ),
                        s = yield d.json(),
                        u = yield (function (t, e, o, n, i, c) {
                          return r(this, void 0, void 0, function* () {
                            try {
                              const d = t.settings.type,
                                s = t.settings.version,
                                u = t.settings.rule,
                                f = yield (function (t = "grid", e = "1.0", o) {
                                  return r(this, void 0, void 0, function* () {
                                    try {
                                      const n = yield fetch(
                                        `https://d8ewmsj0ziqpa.cloudfront.net/${o}/templates/${e}/${t}/template.json`
                                      );
                                      return yield n.json();
                                    } catch (t) {
                                      console.error(
                                        `Error fetching data for Widget ID: ${e}`,
                                        t
                                      );
                                    }
                                  });
                                })(d, s, n);
                              if (
                                ("/" === i && (o = "all"),
                                i.startsWith("/collections"))
                              ) {
                                const t = i.split("/")[2];
                                o = t;
                              }
                              let l, p;
                              if (
                                ("/cart" === i && (o = "lastaddedtocart"),
                                "RECENTLY_VIEWED" === u)
                              ) {
                                a(c, o);
                                const t = localStorage.getItem(
                                  "webToffeeProDetails"
                                );
                                (l = t ? JSON.parse(t) : null), (p = l);
                              } else {
                                const t = yield fetch(
                                  `https://d8ewmsj0ziqpa.cloudfront.net/${n}/products/${o}.json`
                                );
                                (l = yield t.json()), (p = l.product);
                              }
                              const w = yield fetch(
                                  `https://d8ewmsj0ziqpa.cloudfront.net/${n}/widgets/${e}/widget.json`
                                ),
                                g = yield w.json(),
                                h = {};
                              Object.entries(p).forEach(([t, e]) => {
                                e &&
                                  "object" == typeof e &&
                                  (h[e.id] = e.variants);
                              });
                              const y = {
                                title: g.settings.rule,
                                products: p,
                                variants: h,
                                settings: g.settings,
                                config: g.config,
                                elements: g.config.widget.elements,
                                styleCon: {},
                                html: f.html,
                              };
                              !(function (t = "grid", e = "") {
                                r(this, void 0, void 0, function* () {
                                  const o = `webtoffee-style-${t}`;
                                  document.getElementById(o) ||
                                    document.head.insertAdjacentHTML(
                                      "beforeend",
                                      ` <style id="${o}">${e}</style>`
                                    );
                                });
                              })(d, f.style);
                              const m = y.products,
                                v = y.variants;
                              return (
                                window.webToffeeProductVariant
                                  ? window.webToffeeProductVariant.variants
                                    ? (window.webToffeeProductVariant.variants =
                                        Object.assign(
                                          Object.assign(
                                            {},
                                            window.webToffeeProductVariant
                                              .variants
                                          ),
                                          v
                                        ))
                                    : (window.webToffeeProductVariant.variants =
                                        v)
                                  : ((window.webToffeeProductVariant = {}),
                                    (window.webToffeeProductVariant.variants =
                                      v)),
                                window.webToffeeProduct
                                  ? window.webToffeeProduct.products
                                    ? (window.webToffeeProduct.products =
                                        window.webToffeeProduct.products.concat(
                                          m
                                        ))
                                    : (window.webToffeeProduct.products = m)
                                  : ((window.webToffeeProduct = {}),
                                    (window.webToffeeProduct.products = m)),
                                (function (t, e) {
                                  function o(t, e) {
                                    let o = t;
                                    return (
                                      (o = o.replace(/{{(.*?)}}/g, (t, o) => {
                                        const n = (function (t, e) {
                                          const o = e.split(".");
                                          let n = t;
                                          for (const t of o) {
                                            if (!n.hasOwnProperty(t)) return;
                                            n = n[t];
                                          }
                                          return n;
                                        })(e, o.trim());
                                        return void 0 !== n ? n : t;
                                      })),
                                      o
                                    );
                                  }
                                  return o(
                                    (function (t) {
                                      const n = new RegExp(
                                          "{% forinner (.+?) %}"
                                        ),
                                        r = new RegExp("{% endforinner %}");
                                      let i = t;
                                      for (; n.test(i); ) {
                                        const t = i.match(n),
                                          c = i.match(r),
                                          a = i.slice(
                                            t.index + t[0].length,
                                            c.index
                                          ),
                                          d = t[1].trim(),
                                          s = d.split("in")[1].trim(),
                                          u = d.match(/and\s+(\d+)\s+in/),
                                          f = u ? u[1] : "";
                                        let l = "";
                                        const p = e[s][f];
                                        for (const t of p)
                                          l += o(a, { variant: t });
                                        i = i.replace(`${t[0]}${a}${c[0]}`, l);
                                      }
                                      return i;
                                    })(
                                      (function (t) {
                                        const n = new RegExp("{% for (.+?) %}"),
                                          r = new RegExp("{% endfor %}");
                                        let i = t;
                                        for (; n.test(i); ) {
                                          const t = i.match(n),
                                            c = i.match(r),
                                            a = i.slice(
                                              t.index + t[0].length,
                                              c.index
                                            ),
                                            d = t[1]
                                              .trim()
                                              .split("in")[1]
                                              .trim();
                                          let s = "";
                                          for (const t of e[d])
                                            s += o(a, { product: t });
                                          i = i.replace(
                                            `${t[0]}${a}${c[0]}`,
                                            s
                                          );
                                        }
                                        return i;
                                      })(t)
                                    ),
                                    e
                                  );
                                })(f.html, y)
                              );
                            } catch (t) {
                              return (
                                console.error(
                                  "Error fetching product data:",
                                  t
                                ),
                                ""
                              );
                            }
                          });
                        })(s, t, e, o, i, c),
                        f = document.querySelector(
                          `.${n}-widget[data-widget-id="${t}"]`
                        );
                      if (!f) return;
                      f.innerHTML = u;
                      const l = s.config.widget.elements;
                      for (const t in l)
                        if (l.hasOwnProperty(t)) {
                          const e = l[t].styles;
                          let o = "";
                          for (const t in e)
                            e.hasOwnProperty(t) && (o += `${t}: ${e[t]}; `);
                          const n = l[t].tag,
                            r = f.querySelectorAll(`[data-tag="${n}"]`);
                          for (const t of r) {
                            const e = new DOMParser()
                              .parseFromString(t.outerHTML, "text/html")
                              .querySelector(`[data-tag="${n}"]`);
                            null !== e &&
                              ((e.style.cssText = o),
                              (t.outerHTML = e.outerHTML));
                          }
                        }
                    } catch (e) {
                      console.error(
                        `Error fetching data for Widget ID: ${t}`,
                        e
                      );
                    }
                  });
                })(t, e[d], o[d], i[d], c[d])
              );
              yield Promise.all(d);
            });
          })(e, c, s, u, f),
            !(function (t) {
              const e = document.querySelectorAll(".webtoffee-product-item");
              e.length > 0 &&
                e.forEach((e) => {
                  const o = e.getAttribute("data-product-id");
                  for (const n in t)
                    if (t.hasOwnProperty(n)) {
                      const r = t[n];
                      if (r.id == o && 1 === r.totalVariants) {
                        const t = e.querySelector(
                          ".webtoffee-product-variants-dropdown"
                        );
                        t && t.remove();
                      }
                    }
                });
            })(window.webToffeeProduct.products),
            (function () {
              const t = document.querySelectorAll(
                ".webtoffee-product-variants-dropdown"
              );
              t.length > 0 &&
                t.forEach((t) => {
                  const e = t.getAttribute("data-main-product-id");
                  t.addEventListener("change", (t) => {
                    d(t.target, e);
                  });
                });
            })();
          const l =
            null === (t = window.ShopifyAnalytics) || void 0 === t
              ? void 0
              : t.meta.page.customerId;
          console.log("Customer ID:", l);
        } catch (t) {
          console.log("Error Widget: ", t);
        }
      });
    }
    function a(t, e) {
      var o;
      return i(this, void 0, void 0, function* () {
        let n = [];
        const r = localStorage.getItem("webToffeeProDetails");
        r && (n = JSON.parse(r)), 10 === n.length && n.shift();
        const i = window.location.href,
          c =
            ((null === (o = i.match(/^(.*\/products\/)/)) || void 0 === o
              ? void 0
              : o[0]) || "") +
            t +
            ".json";
        try {
          const o = yield fetch(c);
          if (o.redirected) {
            const o = yield fetch(
                "https://cdn.jsdelivr.net/gh/rohitsasi720/products/datasets.json"
              ),
              r = (yield o.json()).products.filter((t) => t.gid === e);
            n.some((e) => e.productHandle === t)
              ? n.forEach((e) => {
                  e.productHandle === t &&
                    ((e.productHandle = t),
                    (e.product = r),
                    (e.variantData = r[0].variants));
                })
              : n.push({
                  productHandle: t,
                  product: r,
                  variantData: r[0].variants,
                });
          } else {
            if (o.redirected || !o.ok)
              throw new Error("Invalid response status");
            {
              const e = (function (t, e) {
                const o = new Map(t.images.map((t) => [t.id, t.src])),
                  n = e.replace(".json", "");
                return {
                  id: t.id,
                  title: t.title,
                  tags: t.tags,
                  featured_image: t.image.src,
                  price: parseFloat(t.variants[0].price),
                  url: n,
                  variant_type: t.options[0].name,
                  totalVariants: t.variants.length,
                  variants: t.variants.map((t) => ({
                    id: t.id,
                    product_id: t.product_id,
                    title: t.title,
                    price: t.price,
                    compare_at_price: t.compare_at_price,
                    featured_image: o.get(t.image_id),
                  })),
                };
              })((yield o.json()).product, c);
              let r = -1;
              for (let e = 0; e < n.length; e++)
                if (n[e].productHandle === t) {
                  r = e;
                  break;
                }
              if (-1 !== r) (n[r].productHandle = t), Object.assign(n[r], e);
              else {
                const o = Object.assign({ productHandle: t }, e);
                n.push(o);
              }
            }
          }
          localStorage.setItem("webToffeeProDetails", JSON.stringify(n));
        } catch (t) {
          console.error("Error saving product:", t);
        }
      });
    }
    function d(t, e) {
      const o = window.webToffeeProductVariant.variants[e][t.selectedIndex - 1];
      if (o) {
        const t = document.querySelector(`[data-product-id="${e}"]`);
        if (t) {
          const e = t.querySelector('[data-tag="price"]'),
            n = t.querySelector('[data-tag="image"]'),
            r = t.querySelector('[data-tag="product-link"]');
          e && (e.textContent = o.price),
            n &&
              null != o.featured_image &&
              n.setAttribute("src", o.featured_image),
            r && r.setAttribute("href", o.url);
        }
      }
    }
    function s() {
      c();
    }
    return document.addEventListener("DOMContentLoaded", s), e;
  })()
);
