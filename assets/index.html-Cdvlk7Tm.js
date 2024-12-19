import { _ as _export_sfc, c as createElementBlock, b as createStaticVNode, o as openBlock } from "./app-xhKhQ7Db.js";
const _sfc_main = {};
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", null, _cache[0] || (_cache[0] = [
    createStaticVNode('<h2 id="docker-是什么" tabindex="-1"><a class="header-anchor" href="#docker-是什么"><span>Docker 是什么</span></a></h2><p>Docker 是一个用于开发，交付和运行应用程序的容器。</p><h2 id="我的-docker-容器" tabindex="-1"><a class="header-anchor" href="#我的-docker-容器"><span>我的 Docker 容器</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">docker rm nginx</span>\n<span class="line">docker run -d --name nginx -v /etc/nginx/nginx.conf:/etc/nginx/nginx.conf -v /usr/share/nginx/html:/usr/html -v /var/log/nginx:/var/log/nginx -v /etc/letsencrypt:/etc/letsencrypt --network host nginx</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div>', 4)
  ]));
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "index.html.vue"]]);
const data = JSON.parse('{"path":"/blogs/docker/","title":"Docker 安装 Nginx","lang":"en-US","frontmatter":{"title":"Docker 安装 Nginx","date":"2024-12-14T00:00:00.000Z","tags":["docker","nginx"]},"headers":[{"level":2,"title":"Docker 是什么","slug":"docker-是什么","link":"#docker-是什么","children":[]},{"level":2,"title":"我的 Docker 容器","slug":"我的-docker-容器","link":"#我的-docker-容器","children":[]}],"git":{"createdTime":1734637665000,"updatedTime":1734637665000,"contributors":[{"name":"vensen","email":"vensen002@outlook.com","commits":1}]},"filePathRelative":"blogs/docker/index.md"}');
export {
  index_html as comp,
  data
};
