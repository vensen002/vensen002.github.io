import { _ as _export_sfc, r as resolveComponent, c as createElementBlock, a as createBaseVNode, d as createTextVNode, e as createVNode, b as createStaticVNode, o as openBlock } from "./app-xhKhQ7Db.js";
const _imports_0 = "/assets/js%E7%BC%BA%E9%99%B7%E6%BC%94%E7%A4%BA-BQrNzZDG.png";
const _sfc_main = {};
const _hoisted_1 = {
  href: "https://www.tslang.cn/docs/home.html",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_2 = {
  href: "https://gitee.com/jiuyueqi/class",
  target: "_blank",
  rel: "noopener noreferrer"
};
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock("div", null, [
    _cache[3] || (_cache[3] = createBaseVNode("h1", {
      id: "typescript-介绍",
      tabindex: "-1"
    }, [
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#typescript-介绍"
      }, [
        createBaseVNode("span", null, "TypeScript 介绍")
      ])
    ], -1)),
    createBaseVNode("p", null, [
      _cache[2] || (_cache[2] = createTextVNode("参考")),
      createBaseVNode("a", _hoisted_1, [
        _cache[0] || (_cache[0] = createTextVNode("官方文档")),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createBaseVNode("a", _hoisted_2, [
        _cache[1] || (_cache[1] = createTextVNode("行业大佬整理文档以及源码")),
        createVNode(_component_ExternalLinkIcon)
      ])
    ]),
    _cache[4] || (_cache[4] = createStaticVNode('<h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介"><span>简介</span></a></h2><ul><li>TS 是由微软 2012 年开发的一款开源的编程语言</li><li>TypeScript 是 Javascript 的超集，遵循最新的 ES6、ES5 规范。TypeScript 扩展了 JavaScript 的语法</li><li>在 js 的基础上，为 js 添加了<strong>类型支持</strong></li></ul><h2 id="设计目标" tabindex="-1"><a class="header-anchor" href="#设计目标"><span>设计目标</span></a></h2><ul><li>遵循当前以及未来出现的 ECMAScript 规范</li><li>开发大型应用，可以编译成纯 JavaScript，编译出来的 JavaScript 可以运行在浏览器上</li><li>成为跨平台的开发工具，TypeScript 使用 Apache 作为开源协议，且能够再所有主流的操作系统上安装和执行</li></ul><h2 id="ts-优势" tabindex="-1"><a class="header-anchor" href="#ts-优势"><span>TS 优势</span></a></h2><ul><li>更早的发现错误</li><li>任何位置都有代码提示，增加开发效率</li><li>类型系统提升了代码的可维护性，重构更容易</li><li>使用最新的 ECMAScript 语法</li><li>ts 类型推断机制，降低成本</li></ul><h2 id="ts-劣势" tabindex="-1"><a class="header-anchor" href="#ts-劣势"><span>TS 劣势</span></a></h2><ul><li>短期投入到工作可能增加开发成本</li><li>和有些库的结合不是很完美</li><li>学习需要成本，需要理解接口、泛型、类型等知识</li><li>集成到自动构建流程中需要额外的工作量</li></ul><h2 id="ts-与-js-的区别" tabindex="-1"><a class="header-anchor" href="#ts-与-js-的区别"><span>TS 与 JS 的区别</span></a></h2><table><thead><tr><th>JavaScript</th><th>TypeScript</th></tr></thead><tbody><tr><td>动态语言</td><td>具有静态语言的特点</td></tr><tr><td>编译性语言运行时报错</td><td>编译期间报错</td></tr><tr><td>弱类型语言，没有类型</td><td>强类型语言，类似 java, C++等，定义时指明类型</td></tr><tr><td>不支持模块、接口、泛型</td><td>支持模块、接口、泛型</td></tr><tr><td>基本数据类型和引用数据类型</td><td>更多的基本数据类型和引用数据类型，如 any, never, enum 等</td></tr><tr><td>在浏览器中直接执行</td><td>编译为 js 后才能在浏览器进行执行</td></tr></tbody></table><h2 id="ts-环境安装与初体验" tabindex="-1"><a class="header-anchor" href="#ts-环境安装与初体验"><span>TS 环境安装与初体验</span></a></h2><h3 id="安装与运行" tabindex="-1"><a class="header-anchor" href="#安装与运行"><span>安装与运行</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> typescript</span>\n<span class="line">或者</span>\n<span class="line">cnpm <span class="token function">install</span> <span class="token parameter variable">-g</span> typescript</span>\n<span class="line">或者</span>\n<span class="line"><span class="token function">yarn</span> global <span class="token function">add</span> typescript</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line">tsc 文件名称<span class="token punctuation">.</span>ts</span>\n<span class="line">tsc <span class="token operator">--</span>watch</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="js-缺陷演示" tabindex="-1"><a class="header-anchor" href="#js-缺陷演示"><span>js 缺陷演示</span></a></h3><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token comment">/* </span>\n<span class="line">  1.没有对类型进行检测</span>\n<span class="line">  2.没有对是否传参进行检测</span>\n<span class="line">*/</span></span>\n<span class="line"><span class="token keyword">function</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token parameter">msg</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>msg<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line"><span class="token punctuation">}</span></span>\n<span class="line"></span>\n<span class="line"><span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&quot;邱淑贞&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 可以正常使用</span></span>\n<span class="line"><span class="token function">test</span><span class="token punctuation">(</span><span class="token number">666</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// undefine</span></span>\n<span class="line"><span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// error</span></span>\n<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;往后余生,风雪是你, 平淡是你,敲每一行代码想的都是你。&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;你是CSS,我是DIV,就算我的布局再好,没了你也就没了色彩。&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="' + _imports_0 + '" alt="js缺陷演示"></p>', 17))
  ]);
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "index.html.vue"]]);
const data = JSON.parse('{"path":"/docs/typescript/","title":"TypeScript 介绍","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"简介","slug":"简介","link":"#简介","children":[]},{"level":2,"title":"设计目标","slug":"设计目标","link":"#设计目标","children":[]},{"level":2,"title":"TS 优势","slug":"ts-优势","link":"#ts-优势","children":[]},{"level":2,"title":"TS 劣势","slug":"ts-劣势","link":"#ts-劣势","children":[]},{"level":2,"title":"TS 与 JS 的区别","slug":"ts-与-js-的区别","link":"#ts-与-js-的区别","children":[]},{"level":2,"title":"TS 环境安装与初体验","slug":"ts-环境安装与初体验","link":"#ts-环境安装与初体验","children":[{"level":3,"title":"安装与运行","slug":"安装与运行","link":"#安装与运行","children":[]},{"level":3,"title":"js 缺陷演示","slug":"js-缺陷演示","link":"#js-缺陷演示","children":[]}]}],"git":{"createdTime":1734637665000,"updatedTime":1734637665000,"contributors":[{"name":"vensen","email":"vensen002@outlook.com","commits":1}]},"filePathRelative":"docs/typescript/index.md"}');
export {
  index_html as comp,
  data
};
