import { _ as _export_sfc, r as resolveComponent, c as createElementBlock, a as createBaseVNode, d as createTextVNode, e as createVNode, b as createStaticVNode, o as openBlock } from "./app-xhKhQ7Db.js";
const _imports_0 = "/assets/vuepress_info-o_9hPSUg.png";
const _sfc_main = {};
const _hoisted_1 = {
  href: "https://v2.vuepress.vuejs.org/zh/reference/cli.html",
  target: "_blank",
  rel: "noopener noreferrer"
};
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock("div", null, [
    _cache[1] || (_cache[1] = createBaseVNode("h1", {
      id: "核心",
      tabindex: "-1"
    }, [
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#核心"
      }, [
        createBaseVNode("span", null, "核心")
      ])
    ], -1)),
    _cache[2] || (_cache[2] = createBaseVNode("h2", {
      id: "命令行接口",
      tabindex: "-1"
    }, [
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#命令行接口"
      }, [
        createBaseVNode("span", null, "命令行接口")
      ])
    ], -1)),
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_1, [
        _cache[0] || (_cache[0] = createTextVNode("vuepress>参考>核心")),
        createVNode(_component_ExternalLinkIcon)
      ])
    ]),
    _cache[3] || (_cache[3] = createStaticVNode('<h3 id="执行-vuepress-info-命令" tabindex="-1"><a class="header-anchor" href="#执行-vuepress-info-命令"><span>执行 vuepress info 命令</span></a></h3><div class="custom-container tip"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8h.01"></path><path d="M11 12h1v4h1"></path></g></svg><p class="custom-container-title">TIP</p><p>可以在 <code>node_modules\\.bin</code> 目录下以 shell 命令执行该命令</p></div><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">./vuepress info</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><img src="' + _imports_0 + '" alt="执行info命令"></p>', 4))
  ]);
}
const coreNote_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "coreNote.html.vue"]]);
const data = JSON.parse('{"path":"/docs/vue/vuepress/coreNote.html","title":"核心笔记","lang":"en-US","frontmatter":{"title":"核心笔记","date":"2024-12-11T00:00:00.000Z","tags":["vuepress"]},"headers":[{"level":2,"title":"命令行接口","slug":"命令行接口","link":"#命令行接口","children":[{"level":3,"title":"执行 vuepress info 命令","slug":"执行-vuepress-info-命令","link":"#执行-vuepress-info-命令","children":[]}]}],"git":{"createdTime":1734637665000,"updatedTime":1734637665000,"contributors":[{"name":"vensen","email":"vensen002@outlook.com","commits":1}]},"filePathRelative":"docs/vue/vuepress/coreNote.md"}');
export {
  coreNote_html as comp,
  data
};
