import { _ as _export_sfc, r as resolveComponent, c as createElementBlock, a as createBaseVNode, e as createVNode, f as withCtx, b as createStaticVNode, o as openBlock, d as createTextVNode } from "./app-xhKhQ7Db.js";
const _sfc_main = {};
const _hoisted_1 = { class: "table-of-contents" };
function _sfc_render(_ctx, _cache) {
  const _component_router_link = resolveComponent("router-link");
  return openBlock(), createElementBlock("div", null, [
    _cache[11] || (_cache[11] = createBaseVNode("h1", {
      id: "vue-面试题",
      tabindex: "-1"
    }, [
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#vue-面试题"
      }, [
        createBaseVNode("span", null, "Vue 面试题")
      ])
    ], -1)),
    createBaseVNode("nav", _hoisted_1, [
      createBaseVNode("ul", null, [
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#对-vue-的理解" }, {
            default: withCtx(() => _cache[0] || (_cache[0] = [
              createTextVNode("对 Vue 的理解")
            ])),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#为什么将-vue-成为渐进式框架" }, {
                default: withCtx(() => _cache[1] || (_cache[1] = [
                  createTextVNode("为什么将 Vue 成为渐进式框架")
                ])),
                _: 1
              })
            ])
          ])
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#vue中双向绑定的理解" }, {
            default: withCtx(() => _cache[2] || (_cache[2] = [
              createTextVNode("Vue中双向绑定的理解")
            ])),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#理解-viewmodel" }, {
                default: withCtx(() => _cache[3] || (_cache[3] = [
                  createTextVNode("理解 ViewModel")
                ])),
                _: 1
              })
            ])
          ])
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#vue生命周期的理解" }, {
            default: withCtx(() => _cache[4] || (_cache[4] = [
              createTextVNode("Vue生命周期的理解")
            ])),
            _: 1
          }),
          createBaseVNode("ul", null, [
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#生命周期是什么" }, {
                default: withCtx(() => _cache[5] || (_cache[5] = [
                  createTextVNode("生命周期是什么")
                ])),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#生命周期有哪些" }, {
                default: withCtx(() => _cache[6] || (_cache[6] = [
                  createTextVNode("生命周期有哪些")
                ])),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_router_link, { to: "#数据请求在created和mouted的区别" }, {
                default: withCtx(() => _cache[7] || (_cache[7] = [
                  createTextVNode("数据请求在created和mouted的区别")
                ])),
                _: 1
              })
            ])
          ])
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#v-show-和-v-if-有什么区别" }, {
            default: withCtx(() => _cache[8] || (_cache[8] = [
              createTextVNode("v-show 和 v-if 有什么区别")
            ])),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#v-if和v-for不建议一起用" }, {
            default: withCtx(() => _cache[9] || (_cache[9] = [
              createTextVNode("v-if和v-for不建议一起用")
            ])),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#为什么vue中的data属性是一个函数而不是一个对象" }, {
            default: withCtx(() => _cache[10] || (_cache[10] = [
              createTextVNode("为什么Vue中的data属性是一个函数而不是一个对象")
            ])),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_router_link, { to: "#" })
        ])
      ])
    ]),
    _cache[12] || (_cache[12] = createStaticVNode('<h2 id="对-vue-的理解" tabindex="-1"><a class="header-anchor" href="#对-vue-的理解"><span>对 Vue 的理解</span></a></h2><ul><li>Vue 是一款用于构建用户界面的 JavaScript 框架。</li><li>基于 HTML、CSS 和 JavaScript，并提供了一套声明式、组件化的编程模型，高效地开发用户界面。</li><li>Vue 的两个核心功能：声明式渲染 和 响应性 <ul><li>声明式渲染：基于标准 HTML 扩展了一套模板语法，使得我们可以声明式地描述最终输出的HTML 和 JavaScript 状态之间的关系。</li><li>响应式： Vue 会自动跟踪 Javascript 状态并在其发生变化时响应式的更新 DOM。</li></ul></li><li>Vue 也是一套渐进式 MVVM框架（Model-View-ViewModel）模型-视图-视图模型层。 <ul><li>Model：模型层，负责处理业务逻辑（增删改查）以及和服务端进行进行交互。</li><li>View：试图层，负责将数据模型转化为UI展示出来，即HTML页面。</li><li>ViewModel：视图模型层，是用来连接Model和View，是它们之间的桥梁。</li></ul></li><li>单文件组件(<code>.vue</code> 文件，Single-File Components) <ul><li>将一个组件的逻辑 (JavaScript)、模板 (HTML) 和样式 (CSS)封装在同一个文件里。</li></ul></li></ul><h3 id="为什么将-vue-成为渐进式框架" tabindex="-1"><a class="header-anchor" href="#为什么将-vue-成为渐进式框架"><span>为什么将 Vue 成为渐进式框架</span></a></h3><ul><li>它是一个可以与你共同成长、适应你不同需求的框架。</li><li>只做你需要的，不强制要求你接受它全部特性。</li></ul><h2 id="vue中双向绑定的理解" tabindex="-1"><a class="header-anchor" href="#vue中双向绑定的理解"><span>Vue中双向绑定的理解</span></a></h2><ul><li>单向绑定：就是把 Model 绑定到 View，当 JavaScript 更新 Model 时，View自动更新。</li><li>双向绑定：在单向绑定基础上，View 更新时，反向使 Model 也同时更新。</li></ul><p>双向绑定讲的就是 MVVM 模型框架（Model-View-ViewModel）模型-视图-视图模型层。</p><ul><li>Model：模型层，负责处理业务逻辑（增删改查）以及和服务端进行进行交互。</li><li>View：试图层，负责将数据模型转化为UI展示出来，即HTML页面。</li><li>ViewModel：视图模型层，是用来连接Model和View，是它们之间的桥梁。</li></ul><h3 id="理解-viewmodel" tabindex="-1"><a class="header-anchor" href="#理解-viewmodel"><span>理解 ViewModel</span></a></h3><ul><li>它时连接 Model 和 View 之间的桥梁，也同时说明了 Model 和 View 之间没有联系</li><li>当 Model 更新后，通过 ViewModel 来更新 View</li><li>当 View 更新后，通过 ViewModel 来更新 Model</li><li>ViewModel 主要有两个组成部分 监听器（Observer） 和 解析器（Compiler） <ul><li>监听器：对所有数据进行监听</li><li>解释器：对每个元素节点的指令进行扫描解析，根据指令模板替换数据，以及绑定相应的更新函数</li></ul></li></ul><h2 id="vue生命周期的理解" tabindex="-1"><a class="header-anchor" href="#vue生命周期的理解"><span>Vue生命周期的理解</span></a></h2><h3 id="生命周期是什么" tabindex="-1"><a class="header-anchor" href="#生命周期是什么"><span>生命周期是什么</span></a></h3><ul><li>生命周期（live Cycle）通俗理解为&quot;从摇篮到坟墓&quot;</li><li>Vue中实例从创建到销毁的过程就是生命周期，即指从创建、初始化数据、编译模板、挂载Dom→渲染、更新→渲染、卸载等一系列过程</li></ul><h3 id="生命周期有哪些" tabindex="-1"><a class="header-anchor" href="#生命周期有哪些"><span>生命周期有哪些</span></a></h3><p>Vue生命周期总共可以分为8个阶段：创建前后, 载入前后,更新前后,销毁前销毁后，以及一些特殊场景的生命周期</p><table><thead><tr><th>生命周期</th><th>描述</th><th>Vue3</th></tr></thead><tbody><tr><td>beforeCreate</td><td>组件实例被创建前</td><td></td></tr><tr><td>created</td><td>组件实例创建后</td><td></td></tr><tr><td>beforeMount</td><td>组件挂载之前</td><td>onBeforeMount()</td></tr><tr><td>mounted</td><td>组件挂载到实例上之后</td><td>onMounted()</td></tr><tr><td>beforeUpdate</td><td>组件数据发生变化，更新之前</td><td>onBeforeUpdate()</td></tr><tr><td>updated</td><td>组件数据更新之后</td><td>onUpdated()</td></tr><tr><td>beforeDestroy</td><td>组件实例销毁之前</td><td>onBeforeUnmount()</td></tr><tr><td>destroyed</td><td>组件实例销毁之后</td><td>onUnmounted()</td></tr><tr><td>activated</td><td>keep-alive 缓存的组件激活时</td><td>onActivated()</td></tr><tr><td>deactivated</td><td>keep-alive 缓存的组件停用时调用</td><td>onDeactivated()</td></tr><tr><td>errorCaptured</td><td>捕获一个来自子孙组件的错误时调用</td><td>onErrorCaptured()</td></tr></tbody></table><h3 id="数据请求在created和mouted的区别" tabindex="-1"><a class="header-anchor" href="#数据请求在created和mouted的区别"><span>数据请求在created和mouted的区别</span></a></h3><ul><li>created 是在组件实例一创建完成就调用，DOM 节点还未生成</li><li>mounted 是DOM 节点渲染完毕之后再调用</li><li>created 比 mounted 触发时机更早</li><li>mounted 的时候调用可能会导致页面闪动（DOM 已经生成）</li><li>所以 数据请求放在 created 中更好</li></ul><h2 id="v-show-和-v-if-有什么区别" tabindex="-1"><a class="header-anchor" href="#v-show-和-v-if-有什么区别"><span>v-show 和 v-if 有什么区别</span></a></h2><p>相同点：</p><ul><li>v-show 和 v-if 的效果是相同，都能控制元素在页面上是否显示</li><li>用法上也是相同的，条件为 true 时显示，条件为 false 隐藏</li></ul><p>区别：</p><ul><li>控制手段不同、编译过程不同、编译条件不同</li><li>控制手段： <ul><li>v-show 是为该元素添加 <code>display: none;</code>, DOM 元素还存在</li><li>v-if 是将 DOM 元素整个 添加 或者 删除</li></ul></li><li>编译过程： <ul><li>v-show 只是简单的基于 CSS 样式切换</li><li>v-if 有一个 局部编译/卸载 的过程，切换过程中会销毁和重建内部的事件监听 和 子组件</li></ul></li><li>编译条件 <ul><li>v-show 切换时并不会触发组件的生命周期</li><li>v-if 切换时会触发组件的生命周期 <ul><li><code>true -&gt; false</code> : 会触发组件的 <code>beforeDestory</code>、<code>destored</code>方法</li><li><code>false -&gt; true</code> : 会触发组件的 <code>beforeCreate</code>、<code>created</code>、<code>beforeMount</code>、<code>mounted</code>方法</li></ul></li></ul></li><li>性能消耗：v-if有更高的切换消耗；v-show有更高的初始渲染消耗；</li></ul><p>使用场景：</p><ul><li>如果是频繁的切换显示使用 v-show，否则使用 v-if</li></ul><h2 id="v-if和v-for不建议一起用" tabindex="-1"><a class="header-anchor" href="#v-if和v-for不建议一起用"><span>v-if和v-for不建议一起用</span></a></h2><ul><li>v-for 基于数字渲染一个列表，<code>item in items</code> items 数组，item 数组中一个元素</li><li>使用v-for 时，建议使用 key 并保证每个 key 都独一无二，并于 diff 算法进行优化</li><li>v-for优先级比v-if高，所以同时使用的话，每次渲染都会先循环再进行条件判断，极大地浪费性能</li><li>解决方案：使用 compute 和 template <ul><li>条件在循环外部，使用template 嵌套内容，并在 template 进行判断，内部进行循环</li><li>条件在循环内部，使用compute 计算属性滤掉不需要显示的数据</li></ul></li></ul><h2 id="为什么vue中的data属性是一个函数而不是一个对象" tabindex="-1"><a class="header-anchor" href="#为什么vue中的data属性是一个函数而不是一个对象"><span>为什么Vue中的data属性是一个函数而不是一个对象</span></a></h2><ul><li>根实例对象 data 可以是对象也可以是函数，不会产生数据污染。</li><li>组件实例对象 data 必须是函数，目的是为了防止多个组件实例对象之间共用一个打他，产生数据污染。</li><li>采用函数的形式，initData 时会将其作为工厂函数，都会返回一个全新的 data 对象</li></ul><h2 id="" tabindex="-1"><a class="header-anchor" href="#"><span></span></a></h2>', 30))
  ]);
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "index.html.vue"]]);
const data = JSON.parse('{"path":"/docs/interview/vue/","title":"Vue 面试题","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"对 Vue 的理解","slug":"对-vue-的理解","link":"#对-vue-的理解","children":[{"level":3,"title":"为什么将 Vue 成为渐进式框架","slug":"为什么将-vue-成为渐进式框架","link":"#为什么将-vue-成为渐进式框架","children":[]}]},{"level":2,"title":"Vue中双向绑定的理解","slug":"vue中双向绑定的理解","link":"#vue中双向绑定的理解","children":[{"level":3,"title":"理解 ViewModel","slug":"理解-viewmodel","link":"#理解-viewmodel","children":[]}]},{"level":2,"title":"Vue生命周期的理解","slug":"vue生命周期的理解","link":"#vue生命周期的理解","children":[{"level":3,"title":"生命周期是什么","slug":"生命周期是什么","link":"#生命周期是什么","children":[]},{"level":3,"title":"生命周期有哪些","slug":"生命周期有哪些","link":"#生命周期有哪些","children":[]},{"level":3,"title":"数据请求在created和mouted的区别","slug":"数据请求在created和mouted的区别","link":"#数据请求在created和mouted的区别","children":[]}]},{"level":2,"title":"v-show 和 v-if 有什么区别","slug":"v-show-和-v-if-有什么区别","link":"#v-show-和-v-if-有什么区别","children":[]},{"level":2,"title":"v-if和v-for不建议一起用","slug":"v-if和v-for不建议一起用","link":"#v-if和v-for不建议一起用","children":[]},{"level":2,"title":"为什么Vue中的data属性是一个函数而不是一个对象","slug":"为什么vue中的data属性是一个函数而不是一个对象","link":"#为什么vue中的data属性是一个函数而不是一个对象","children":[]},{"level":2,"title":"","slug":"","link":"#","children":[]}],"git":{"createdTime":1734637665000,"updatedTime":1734637665000,"contributors":[{"name":"vensen","email":"vensen002@outlook.com","commits":1}]},"filePathRelative":"docs/interview/vue/index.md"}');
export {
  index_html as comp,
  data
};
