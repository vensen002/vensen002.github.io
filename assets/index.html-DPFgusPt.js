import{_ as s,c as a,b as e,o as p}from"./app-DC2AytKD.js";const t={};function l(o,n){return p(),a("div",null,n[0]||(n[0]=[e(`<h1 id="webpack" tabindex="-1"><a class="header-anchor" href="#webpack"><span>webpack</span></a></h1><ul><li>webpack 就是一个用于现代 JavaScript 应用程序的 <strong>静态模块打包工具</strong>。</li><li>webpack 处理应用程序时，从一个或多个<strong>入口点</strong>构建一个<a href="#%E4%BE%9D%E8%B5%96%E5%9B%BE">依赖图(dependency graph)</a>，将模块组合成一个或多个 bundles，均为静态资源，用于展示内容。</li></ul><p><strong>核心概念：</strong></p><ul><li><a href="#%E5%85%A5%E5%8F%A3-entry">入口(entry)</a></li><li><a href="#%E8%BE%93%E5%87%BA-output">输出(output)</a></li><li><a href="#loader">loader</a></li><li><a href="#%E6%8F%92%E4%BB%B6-plugin">插件(plugin)</a></li><li><a href="#%E6%A8%A1%E5%BC%8F-mode">模式(mode)</a></li><li><a href="#%E6%B5%8F%E8%A7%88%E5%99%A8%E5%85%BC%E5%AE%B9%E6%80%A7-browser-compatibility">浏览器兼容(browser compatibility)</a></li><li><a href="#%E7%8E%AF%E5%A2%83-environment">环境(environment)</a></li></ul><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">&#39;./src/index.js&#39;</span><span class="token punctuation">,</span>                      <span class="token comment">// 打包入口文件</span></span>
<span class="line">  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token string">&#39;./dist/main.js&#39;</span><span class="token punctuation">,</span>                     <span class="token comment">// 打包输出</span></span>
<span class="line">  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&#39;production&#39;</span><span class="token punctuation">,</span>                           <span class="token comment">// 环境</span></span>
<span class="line">  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>                                    <span class="token comment">// Loader 配置</span></span>
<span class="line">      <span class="token punctuation">{</span> <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.txt$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token string">&#39;raw-loader&#39;</span> <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">]</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>                                    <span class="token comment">// 插件配置</span></span>
<span class="line">      <span class="token keyword">new</span> <span class="token class-name">HtmlwebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">&#39;./src/index.html&#39;</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="依赖图" tabindex="-1"><a class="header-anchor" href="#依赖图"><span>依赖图</span></a></h2><ul><li>当一个文件依赖另一个文件，那么它们之间就存在<strong>依赖关系</strong></li><li>依赖图 就是多个 依赖关系 组成的关系图</li><li>webpack 根据命令参数 或 配置模块处理，从入口开始递归处理，构建依赖关系图</li><li>该依赖图 包含应用程序所需要的模块，将这些模块打包为少量的 bundles——通常只有一个——可由浏览器加载。</li></ul><h2 id="入口-entry" tabindex="-1"><a class="header-anchor" href="#入口-entry"><span>入口(entry)</span></a></h2><ul><li>入口起点(entry point) 是用来作为构建 依赖图开始的地方。</li><li>webpack 会找出哪些 模块和库 是入口起点（直接和间接）依赖的。</li><li>默认值：<code>./src/index.js</code>，可以配置 entry 属性，指定一个（或多个）不同的入口起点。</li></ul><p><strong>webpack.config.js</strong></p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">&#39;./path/to/my/entry/file.js&#39;</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="输出-output" tabindex="-1"><a class="header-anchor" href="#输出-output"><span>输出(output)</span></a></h2><ul><li>定输出所创建 bundles 的位置，以及如何命名</li><li>主要输出文件默认值是<code>./dist/main.js</code>，默认路径<code>./dist/</code></li></ul><p><strong>webpack.config.js</strong></p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">&#39;./src/main.js&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;my-webpack.bundle.js&#39;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;dist&#39;</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="loader" tabindex="-1"><a class="header-anchor" href="#loader"><span>loader</span></a></h2><ul><li>webpack 只能理解 JavaScript 和 JSON 文件，是 webpack 自带的能力。</li><li>loader 是让 webpack 能够处理其他类型文件，将它们转换为有效的 模块，以供应用使用和添加到以来图中。</li><li>在 webpack 的配置中，loader 有两个属性： <ul><li>test: 识别出哪些文件会被转换。</li><li>use: 定义出在进行转换时，应该使用哪个 loader。</li></ul></li></ul><p><strong>webpack.config.js</strong></p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;my-first-webpack.bundle.js&#39;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.txt$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token string">&#39;raw-loader&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8h.01"></path><path d="M11 12h1v4h1"></path></g></svg><p class="custom-container-title">解释</p><p>当 webpack 编译器 遇到「在 require()/import 语句中被解析为&#39;.txt&#39; 的路径」时， 打包之前，先 use(使用) raw-loader 转换一下。</p></div><div class="custom-container warning"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8v4"></path><path d="M12 16h.01"></path></g></svg><p class="custom-container-title">WARNING</p><ul><li>在 webpack 配置中定义 rules 时，要定义在 module.rules 而不是 rules 中。</li><li>使用正则表达式匹配文件时，不要添加引号，否则就是匹配指定的文件</li></ul></div><h2 id="插件-plugin" tabindex="-1"><a class="header-anchor" href="#插件-plugin"><span>插件(plugin)</span></a></h2><ul><li>loader 用于转换某些类型的模块，而插件则可以用于执行范围更广的任务。</li><li>包括：打包优化，资源管理，注入环境变量</li></ul><p><strong>webpack.config.js</strong></p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">const</span> HtmlWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;html-webpack-plugin&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> webpack <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;webpack&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 用于访问内置插件</span></span>
<span class="line"></span>
<span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.txt$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token string">&#39;raw-loader&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token keyword">new</span> <span class="token class-name">HtmlWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">&#39;./src/index.html&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="模式-mode" tabindex="-1"><a class="header-anchor" href="#模式-mode"><span>模式(mode)</span></a></h2><ul><li>通过选择 <code>development</code>, <code>production</code> 或 <code>none</code> 之中的一个，来设置 <code>mode</code> 参数</li><li>不同参数启用 webpack 内置在相应环境下的优化。其默认值为 <code>production</code>。</li></ul><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&#39;production&#39;</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="浏览器兼容性-browser-compatibility" tabindex="-1"><a class="header-anchor" href="#浏览器兼容性-browser-compatibility"><span>浏览器兼容性(browser compatibility)</span></a></h2><p>Webpack 支持所有符合 ES5 标准 的浏览器（不支持 IE8 及以下版本）。 webpack 的 <code>import()</code> 和 <code>require.ensure()</code> 需要 <code>Promise</code>。 如果你想要支持旧版本浏览器，在使用这些表达式之前，还需要 提前加载 <code>polyfill</code>。</p><h2 id="环境-environment" tabindex="-1"><a class="header-anchor" href="#环境-environment"><span>环境(environment)</span></a></h2><ul><li>Webpack 5 运行于 Node.js v10.13.0+ 的版本。</li></ul>`,32)]))}const c=s(t,[["render",l],["__file","index.html.vue"]]),r=JSON.parse('{"path":"/docs/buildTools/webpack/","title":"webpack","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"依赖图","slug":"依赖图","link":"#依赖图","children":[]},{"level":2,"title":"入口(entry)","slug":"入口-entry","link":"#入口-entry","children":[]},{"level":2,"title":"输出(output)","slug":"输出-output","link":"#输出-output","children":[]},{"level":2,"title":"loader","slug":"loader","link":"#loader","children":[]},{"level":2,"title":"插件(plugin)","slug":"插件-plugin","link":"#插件-plugin","children":[]},{"level":2,"title":"模式(mode)","slug":"模式-mode","link":"#模式-mode","children":[]},{"level":2,"title":"浏览器兼容性(browser compatibility)","slug":"浏览器兼容性-browser-compatibility","link":"#浏览器兼容性-browser-compatibility","children":[]},{"level":2,"title":"环境(environment)","slug":"环境-environment","link":"#环境-environment","children":[]}],"git":{"createdTime":1734637665000,"updatedTime":1734637665000,"contributors":[{"name":"vensen","email":"vensen002@outlook.com","commits":1}]},"filePathRelative":"docs/buildTools/webpack/index.md"}');export{c as comp,r as data};