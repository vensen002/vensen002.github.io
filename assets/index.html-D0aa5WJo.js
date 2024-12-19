import { _ as _export_sfc, r as resolveComponent, c as createElementBlock, b as createStaticVNode, a as createBaseVNode, d as createTextVNode, e as createVNode, o as openBlock } from "./app-xhKhQ7Db.js";
const _sfc_main = {};
const _hoisted_1 = {
  href: "https://commonmark.org/help/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_2 = {
  href: "https://v2.vuepress.vuejs.org/zh/guide/markdown.html#%E8%AF%AD%E6%B3%95%E6%89%A9%E5%B1%95",
  target: "_blank",
  rel: "noopener noreferrer"
};
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock("div", null, [
    _cache[2] || (_cache[2] = createStaticVNode('<h1 id="vuepress-技巧" tabindex="-1"><a class="header-anchor" href="#vuepress-技巧"><span>Vuepress 技巧</span></a></h1><h1 id="markdown-语法" tabindex="-1"><a class="header-anchor" href="#markdown-语法"><span>Markdown 语法</span></a></h1><h2 id="基础语法" tabindex="-1"><a class="header-anchor" href="#基础语法"><span>基础语法</span></a></h2>', 3)),
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_1, [
        _cache[0] || (_cache[0] = createTextVNode("Markdown 教程")),
        createVNode(_component_ExternalLinkIcon)
      ])
    ]),
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_2, [
        _cache[1] || (_cache[1] = createTextVNode("Markdown 扩展")),
        createVNode(_component_ExternalLinkIcon)
      ])
    ])
  ]);
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "index.html.vue"]]);
const data = JSON.parse('{"path":"/docs/vue/vuepress/","title":"技法","lang":"en-US","frontmatter":{"title":"技法","date":"2024-12-11T00:00:00.000Z","tags":["vuepress"]},"headers":[{"level":2,"title":"基础语法","slug":"基础语法","link":"#基础语法","children":[]}],"git":{"createdTime":1734637665000,"updatedTime":1734637665000,"contributors":[{"name":"vensen","email":"vensen002@outlook.com","commits":1}]},"filePathRelative":"docs/vue/vuepress/index.md"}');
export {
  index_html as comp,
  data
};
