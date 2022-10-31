import{_ as n,o as s,c as a,a as e}from"./app.befe5af1.js";const t={},p=e(`<h1 id="基础数据类型" tabindex="-1"><a class="header-anchor" href="#基础数据类型" aria-hidden="true">#</a> 基础数据类型</h1><h2 id="布尔值-boolean" tabindex="-1"><a class="header-anchor" href="#布尔值-boolean" aria-hidden="true">#</a> 布尔值 Boolean</h2><ul><li>默认值: true/false</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 布尔值类型</span>
<span class="token keyword">let</span> flag<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
flag <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token comment">// flag = 1; // error 不能将类型&quot;number&quot;分配给类型&quot;boolean&quot;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>flag<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="数字-number" tabindex="-1"><a class="header-anchor" href="#数字-number" aria-hidden="true">#</a> 数字 number</h2><ul><li>双精度 64 位浮点值</li><li>支持十进制和十六进制字面量</li><li>同时也支持ECMAScript 2015中引入的二进制和八进制字面量</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 数字类型 number</span>
<span class="token keyword">let</span> decLiteral<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">6</span><span class="token punctuation">;</span> <span class="token comment">// 十进制字面量</span>
<span class="token keyword">let</span> hexLiteral<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">0xf00d</span><span class="token punctuation">;</span> <span class="token comment">// 十六进制</span>
<span class="token keyword">let</span> binaryLiteral<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">0b1010</span><span class="token punctuation">;</span> <span class="token comment">// 二进制</span>
<span class="token keyword">let</span> octalLiteral<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">0o744</span><span class="token punctuation">;</span> <span class="token comment">// 八进制</span>
<span class="token keyword">let</span> num<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
num <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>
<span class="token comment">// num = &quot;123456&quot; // error 不能将类型&quot;string&quot;分配给类型&quot;number&quot;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>num<span class="token punctuation">,</span> decLiteral<span class="token punctuation">,</span> hexLiteral<span class="token punctuation">,</span> binaryLiteral<span class="token punctuation">,</span> octalLiteral<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="字符串-string" tabindex="-1"><a class="header-anchor" href="#字符串-string" aria-hidden="true">#</a> 字符串 String</h2><ul><li>使用双引号（ &quot;）或单引号（&#39;）表示字符串。</li><li>反引号（<strong>\`</strong>）来定义多行文本和内嵌表达式，并且以\${ expr }这种形式嵌入表达式</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 字符串类型 string</span>
<span class="token keyword">let</span> name<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&quot;bob&quot;</span><span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span>
name <span class="token operator">=</span> <span class="token string">&quot;smith&quot;</span><span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span>
<span class="token keyword">let</span> beauty<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">;</span>
beauty <span class="token operator">=</span> <span class="token string">&quot;李一桐&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> dream <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">我的女神是</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>beauty<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">,为了她，我想月入</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>money<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">k</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>dream<span class="token punctuation">)</span><span class="token punctuation">;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>总结：数值，字符串和布尔值是我们开发中最常使用的基础数据类型，与js中的数值，字符串和布尔完全一致， 在ts中我们主要做类型校验使用</p></blockquote><h2 id="数组" tabindex="-1"><a class="header-anchor" href="#数组" aria-hidden="true">#</a> 数组</h2><ul><li>声明变量的一组集合称之为数组</li><li>TypeScript像JavaScript一样可以操作数组元素。</li><li>数组声明方式</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>

<span class="token comment">// 数组类型</span>
<span class="token comment">// 数组声明方式</span>
<span class="token comment">// 方式一 在元素类型后面接上 []，表示由此类型元素组成的一个数组：</span>
<span class="token keyword">let</span> list<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token comment">// list = [ 1, 2, 3, &#39;4&#39;]; // error 不能将类型&quot;string&quot; 分配给类型&quot;number&quot;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>list<span class="token punctuation">)</span>

<span class="token comment">// 方式二 第二种方式是使用数组泛型，Array&lt;元素类型&gt;：</span>
<span class="token keyword">let</span> arrList<span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token comment">// arrList = [4, 5, 6, &#39;a&#39;] // error 不能将类型&quot;string&quot; 分配给类型&quot;number&quot;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arrList<span class="token punctuation">)</span>

<span class="token comment">// 方式三 联合类型，即数组里可以存放规定的数据类型</span>
<span class="token keyword">let</span> uniList<span class="token operator">:</span> <span class="token punctuation">(</span><span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> uniList2<span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
uniList <span class="token operator">=</span> <span class="token punctuation">[</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;c&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;abc&#39;</span><span class="token punctuation">]</span>
<span class="token comment">// uniList = [ 1, 2, 3, &#39;a&#39;, &#39;b&#39;, &#39;c&#39;, &#39;abc&#39;, false, true] // error 不能将类型&quot;boolean&quot;分配给类型&quot;string | number&quot;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>uniList<span class="token punctuation">)</span>

<span class="token comment">// 方式四 any类型 即任意类型</span>
<span class="token keyword">let</span> anyList<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> anyList2<span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token builtin">any</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
anyList <span class="token operator">=</span> <span class="token punctuation">[</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;abc&#39;</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">]</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>anyList<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="元组-tuple" tabindex="-1"><a class="header-anchor" href="#元组-tuple" aria-hidden="true">#</a> 元组 Tuple</h2><ul><li>TS中的元祖类型其实就是数组类型的扩展</li><li>元组类型用来表示已知元素数量和类型的数组，各元素的类型不必相同。</li><li>对应位置的类型需要相同</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> 

<span class="token comment">// 元组 tuple</span>
<span class="token comment">// TS中的元祖类型其实就是数组类型的扩展</span>
<span class="token comment">// 元组类型用来表示已知元素数量和类型的数组，各元素的类型不必相同，对应位置的类型需要相同</span>

<span class="token comment">// Declare a tuple type 声明一个元组</span>
<span class="token keyword">let</span> x<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">number</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token comment">// Initialize it 初始化</span>
x <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// OK</span>
<span class="token comment">// Initialize it incorrectly 初始化失败</span>
<span class="token comment">// x = [10, &#39;hello&#39;]; // Error 不能将类型&quot;number&quot;分配给&quot;string&quot;</span>
<span class="token comment">// 当访问一个已知索引的元素，会得到正确的类型：</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>x<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">substr</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// OK</span>
<span class="token comment">// console.log(x[1].substr(1)); // Error, &#39;number&#39; does not have &#39;substr&#39; 类型&#39;number&#39;上不存在属性&#39;substr&#39;</span>

<span class="token comment">// 表示定义了一个名称叫做 tup1 的元祖, 这个元祖中将来可以存储3个元素, </span>
<span class="token comment">// 第一个元素必须是字符串类型, 第二个元素必须是数字类型, 第三个元素必须是布尔类型</span>
<span class="token keyword">let</span> tup1<span class="token operator">:</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">number</span><span class="token punctuation">,</span> <span class="token builtin">boolean</span><span class="token punctuation">]</span><span class="token punctuation">;</span> 
tup1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;宋祖儿&#39;</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token comment">// tup1 = [&#39;宋祖儿&#39;, 100, true, 200]; // 超过指定的长度会报错</span>
<span class="token comment">// tup1 = [100,&quot;宋祖儿&quot;, true];</span>
<span class="token comment">// tup1 = [&#39;杨超越&#39;, 100, true];</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>tup1<span class="token punctuation">)</span><span class="token punctuation">;</span> 

<span class="token comment">/* 
  总结:
  定义: [&#39;&#39;, &#39;&#39;, ...]
  作用:元祖用于保存定长定数据类型的数据
*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="枚举-enum" tabindex="-1"><a class="header-anchor" href="#枚举-enum" aria-hidden="true">#</a> 枚举 enum</h2><ul><li>enum类型是对JavaScript标准数据类型的一个补充。 像C#等其它语言一样，使用枚举类型可以为一组数值赋予友好的名字。</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token comment">// 枚举用于表示固定的几个取值</span>
<span class="token comment">// 例如: 人的性别只能是男或者女</span>

<span class="token keyword">enum</span> Gender<span class="token punctuation">{</span> 
  Male<span class="token punctuation">,</span>
  Femal
<span class="token punctuation">}</span>

<span class="token comment">// 定义了一个名称叫做val的变量, 这个变量中只能保存Male或者Femal</span>
<span class="token keyword">let</span> val<span class="token operator">:</span>Gender<span class="token punctuation">;</span> 
val <span class="token operator">=</span> Gender<span class="token punctuation">.</span>Male<span class="token punctuation">;</span>
val <span class="token operator">=</span> Gender<span class="token punctuation">.</span>Femal<span class="token punctuation">;</span>
<span class="token comment">// val = &#39;nan&#39;; // 报错</span>
<span class="token comment">// val  = false;// 报错</span>

<span class="token comment">// 注意点: TS中的枚举底层实现的本质其实就是数值类型, 所以赋值一个数值不会报错</span>
val <span class="token operator">=</span> <span class="token number">666</span><span class="token punctuation">;</span> <span class="token comment">// 不会报错</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Gender<span class="token punctuation">.</span>Male<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 0</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Gender<span class="token punctuation">.</span>Femal<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 1</span>

<span class="token comment">// 注意点: TS中的枚举类型的取值, 默认是从上至下从0开始递增的</span>
<span class="token comment">//         虽然默认是从0开始递增的, 但是我们也可以手动的指定枚举的取值的值</span>
<span class="token comment">// 注意点: 如果手动指定了前面枚举值的取值, 那么后面枚举值的取值会根据前面的值来递增</span>
<span class="token keyword">enum</span> Gender2<span class="token punctuation">{</span> 
  Male<span class="token operator">=</span><span class="token number">5</span><span class="token punctuation">,</span>
  Femal
<span class="token punctuation">}</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Gender2<span class="token punctuation">.</span>Male<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 5</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Gender2<span class="token punctuation">.</span>Femal<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 6</span>

<span class="token comment">// 注意点: 如果手动指定了后面枚举值的取值, 那么前面枚举值的取值不会受到影响</span>
<span class="token keyword">enum</span> Gender3<span class="token punctuation">{</span> 
  Male<span class="token punctuation">,</span>
  Femal<span class="token operator">=</span><span class="token number">10</span>
<span class="token punctuation">}</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Gender3<span class="token punctuation">.</span>Male<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 0</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Gender3<span class="token punctuation">.</span>Femal<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 10</span>

<span class="token comment">// 注意点: 我们还可以同时修改多个枚举值的取值, 如果同时修改了多个, 那么修改的是什么最后就是什么</span>
<span class="token keyword">enum</span> Gender4<span class="token punctuation">{</span> 
  Male<span class="token operator">=</span><span class="token number">100</span><span class="token punctuation">,</span>
  Femal<span class="token operator">=</span><span class="token number">200</span>
<span class="token punctuation">}</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Gender4<span class="token punctuation">.</span>Male<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 100</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Gender4<span class="token punctuation">.</span>Femal<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 200</span>

<span class="token comment">// 我们可以通过枚举值拿到它对应的数字</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Gender<span class="token punctuation">.</span>Male<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 0</span>
<span class="token comment">// 我们还可以通过它对应的数据拿到它的枚举值</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Gender<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Male</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><ul><li>TS中的枚举底层实现的本质其实就是数值类型</li><li>默认是从0开始递增的为元素编号，也可以手动的指定成员的数值</li><li>如果手动指定了前面枚举值的取值, 那么后面枚举值的取值会根据前面的值来递增</li><li>如果手动指定了后面枚举值的取值, 那么前面枚举值的取值不会受到影响</li><li>可以同时修改多个枚举值，修改的值是什么就是什么</li><li>我们可以通过枚举值拿到它对应的数字, 还可以通过它对应的数据拿到它的枚举值</li></ul></blockquote><h2 id="any-与-void" tabindex="-1"><a class="header-anchor" href="#any-与-void" aria-hidden="true">#</a> Any 与 Void</h2><ul><li><strong>Any:</strong> 表示任意类型, 当我们不清楚某个值的具体类型的时候我们就可以使用<code>any</code></li><li><strong>Void:</strong> <code>void</code>与<code>any</code>相反，它表示没有任何类型。当一个函数没有返回值时，你通常会见到其返回值类型是 <code>void</code></li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> 

<span class="token comment">// any类型</span>
<span class="token comment">// any 表示任意类型，当我们不清楚某个值的具体类型的时候我们就可以使用any</span>
<span class="token comment">// 在TS中任何数据类型的值都可以负责给any类型</span>

<span class="token comment">// 使用场景一 </span>
<span class="token comment">// 变量的值会动态改变时，比如来自用户的输入，any类型可以让这些变量跳过编译阶段的类型检查</span>
<span class="token keyword">let</span> notSure<span class="token operator">:</span> <span class="token builtin">any</span> <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">;</span>
notSure <span class="token operator">=</span> <span class="token string">&quot;maybe a string instead&quot;</span><span class="token punctuation">;</span>
notSure <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span> <span class="token comment">// okay, definitely a boolean</span>

<span class="token comment">// 使用场景二</span>
<span class="token comment">// 改写现有代码时，任意值允许在编译时可选择地包含或移除类型检查</span>
<span class="token keyword">let</span> notSure2<span class="token operator">:</span> <span class="token builtin">any</span> <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">;</span>
<span class="token comment">// notSure2.ifItExists(); //okay，ifItExists方法在运行时可能存在，但这里并不会检查</span>
notSure2<span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// okay, toFixed exists (but the compiler doesn&#39;t check) toFixed方法存在，但是在编译时不会检查</span>

<span class="token comment">// 使用场景三</span>
<span class="token comment">// 定义存储各种类型数据的数组时</span>
<span class="token keyword">let</span> list<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token string">&quot;free&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

list<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>

<span class="token comment">// void类型</span>
<span class="token comment">// 某种程度上来说，void类型像是与any类型相反，它表示没有任何类型。 </span>
<span class="token comment">// 当一个函数没有返回值时，你通常会见到其返回值类型是 void</span>
<span class="token comment">// 在TS中只有null和undefined可以赋值给void类型</span>

<span class="token keyword">function</span> <span class="token function">makeMoney</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;I want to make much money and marry a wife!!!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// return &quot;100K beauty&quot; // 报错</span>
<span class="token punctuation">}</span>

<span class="token function">makeMoney</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">let</span> value<span class="token operator">:</span><span class="token keyword">void</span><span class="token punctuation">;</span> 
<span class="token comment">// 定义了一个不可以保存任意类型数据的变量, 只能保存null和undefined</span>
<span class="token comment">// value = 100; // 报错</span>
<span class="token comment">// value = &quot;杨紫&quot;;// 报错</span>
<span class="token comment">// value = true;// 报错</span>
<span class="token comment">// 注意点: null和undefined是所有类型的子类型, 所以我们可以将null和undefined赋值给任意类型</span>
<span class="token comment">// 严格模式下会null报错</span>
<span class="token comment">// value = null; // 不会报错  </span>
value <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span><span class="token comment">// 不会报错</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="null-和-undefined" tabindex="-1"><a class="header-anchor" href="#null-和-undefined" aria-hidden="true">#</a> Null 和 Undefined</h2><ul><li>TypeScript里，<code>undefined</code>和<code>null</code>两者各自有自己的类型分别叫做<code>undefined</code>和<code>null</code>。</li><li>和 <code>void</code>相似，它们的本身的类型用处不是很大。</li><li>默认情况下<code>null</code>和<code>undefined</code>是所有类型的子类型。就是说你可以把 <code>null</code>和<code>undefined</code>赋值给任意类型的变量。</li><li>当 <code>strictNullChecks</code>(严格模式)开启时，<code>null</code>和<code>undefined</code>只能赋值给<code>void</code>和它们各自。</li><li>官方鼓励 <code>strictNullChecks</code> 打开使用</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> 

<span class="token comment">// TypeScript里，undefined和null两者各自有自己的类型分别叫做undefined和null。 </span>
<span class="token comment">// 和 void相似，它们的本身的类型用处不是很大</span>
<span class="token keyword">let</span> u<span class="token operator">:</span> <span class="token keyword">undefined</span> <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> n<span class="token operator">:</span> <span class="token keyword">null</span> <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> money<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>
<span class="token comment">// 非严格模式下，可以把null / undefined 赋值给 money ,即&quot;strictNullChecks&quot;: false,  </span>
money <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
money <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="never-和-object" tabindex="-1"><a class="header-anchor" href="#never-和-object" aria-hidden="true">#</a> Never 和 Object</h2><h3 id="never" tabindex="-1"><a class="header-anchor" href="#never" aria-hidden="true">#</a> Never</h3><ul><li>never类型表示的是那些永不存在的值的类型</li><li>never类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型</li><li>变量也可能是 never类型，当它们被永不为真的类型保护所约束时</li></ul><blockquote><ul><li><code>never</code>类型是任何类型的子类型，也可以赋值给任何类型；</li><li>没有类型是<code>never</code>的子类型或可以赋值给<code>never</code>类型（除了<code>never</code>本身之外）。</li><li>即使 <code>any</code>也不可以赋值给<code>never</code>。</li></ul></blockquote><h3 id="object" tabindex="-1"><a class="header-anchor" href="#object" aria-hidden="true">#</a> Object</h3><ul><li><code>object</code>表示非原始类型，也就是除<code>number</code>，<code>string</code>，<code>boolean</code>，<code>symbol</code>，<code>null</code>或<code>undefined</code>之外的类型</li><li>使用<code>object</code>类型，就可以更好的表示像<code>Object.create</code>这样的API。</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token comment">// Never</span>
<span class="token comment">// 返回never的函数必须存在无法达到的终点</span>
<span class="token keyword">function</span> <span class="token function">error</span><span class="token punctuation">(</span>message<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">never</span> <span class="token punctuation">{</span>
  <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// error(&quot;你错了！&quot;);</span>

<span class="token comment">// 推断的返回值类型为never</span>
<span class="token keyword">function</span> <span class="token function">fail</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&quot;Something failed&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// fail();</span>

<span class="token comment">// 返回never的函数必须存在无法达到的终点 死循环</span>
<span class="token keyword">function</span> <span class="token function">infiniteLoop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">never</span> <span class="token punctuation">{</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// Object类型</span>
<span class="token comment">// 表示一个对象</span>
<span class="token comment">// 定义了一个只能保存对象的变量</span>

<span class="token keyword">let</span> goddess<span class="token operator">:</span>object<span class="token punctuation">;</span> 
<span class="token comment">// goddess = 1;</span>
<span class="token comment">// goddess = &quot;123&quot;;</span>
<span class="token comment">// goddess = true;</span>
goddess <span class="token operator">=</span> <span class="token punctuation">{</span>name<span class="token operator">:</span><span class="token string">&#39;白鹿&#39;</span><span class="token punctuation">,</span> age<span class="token operator">:</span><span class="token number">27</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>goddess<span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h2>`,35),o=[p];function l(c,i){return s(),a("div",null,o)}const d=n(t,[["render",l],["__file","02index.html.vue"]]);export{d as default};
