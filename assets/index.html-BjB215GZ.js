import{_ as p,c,a as s,d as t,e as a,b as r,o as d,r as e}from"./app-DC2AytKD.js";const o={},v={href:"https://github.com/vensen002/nginx-tutorial",target:"_blank",rel:"noopener noreferrer"};function u(m,n){const i=e("ExternalLinkIcon"),l=e("Xicons");return d(),c("div",null,[s("p",null,[s("a",v,[n[0]||(n[0]=t("外链地址")),a(i)])]),a(l,{icon:"LogoGithub",color:"red","icon-position":"bottom",text:"外链地址",link:"https://github.com/vensen002/nginx-tutorial","icon-size":"18","text-size":"16",target:"_blank"}),n[1]||(n[1]=r(`<div class="custom-container tip"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8h.01"></path><path d="M11 12h1v4h1"></path></g></svg><p class="custom-container-title">Nginx</p><p>Nginx (engine x) 是一款轻量级的 Web 服务器 、反向代理服务器及电子邮件（IMAP/POP3）代理服务器。</p></div><div class="custom-container tip"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8h.01"></path><path d="M11 12h1v4h1"></path></g></svg><p class="custom-container-title">反向代理</p><p>反向代理（Reverse Proxy）方式是指以代理服务器来接受 internet 上的连接请求，然后将请求转发给内部网络上的服务器，并将从服务器上得到的结果返回给 internet 上请求连接的客户端，此时代理服务器对外就表现为一个反向代理服务器。</p></div><h2 id="nginx-命令" tabindex="-1"><a class="header-anchor" href="#nginx-命令"><span>nginx 命令</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">nginx -s stop       快速关闭Nginx，可能不保存相关信息，并迅速终止web服务。</span>
<span class="line">nginx -s quit       平稳关闭Nginx，保存相关信息，有安排的结束web服务。</span>
<span class="line">nginx -s reload     因改变了Nginx相关配置，需要重新加载配置而重载。</span>
<span class="line">nginx -s reopen     重新打开日志文件。</span>
<span class="line">nginx -c filename   为 Nginx 指定一个配置文件，来代替缺省的。</span>
<span class="line">nginx -t            不运行，仅仅测试配置文件。nginx 将检查配置文件的语法的正确性，并尝试打开配置文件中所引用到的文件。</span>
<span class="line">nginx -v            显示 nginx 的版本。</span>
<span class="line">nginx -V            显示 nginx 的版本，编译器版本和配置参数。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="nginx-配置文件" tabindex="-1"><a class="header-anchor" href="#nginx-配置文件"><span>nginx 配置文件</span></a></h2><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre><code><span class="line">#运行用户</span>
<span class="line">#user  nobody;</span>
<span class="line">#启动进程，通常设置成和cpu的数量相等</span>
<span class="line">worker_processes  <span class="token number">1</span>;</span>
<span class="line"></span>
<span class="line">#全局错误日志</span>
<span class="line">#error_log  logs/error.log;</span>
<span class="line">#error_log  logs/error.log  notice;</span>
<span class="line">#error_log  logs/error.log  info;</span>
<span class="line"></span>
<span class="line">#PID文件，记录当前启动的nginx的进程ID</span>
<span class="line">#pid        logs/nginx.pid;</span>
<span class="line"></span>
<span class="line">#工作模式及连接数上限</span>
<span class="line">events <span class="token punctuation">{</span></span>
<span class="line">    worker_connections  <span class="token number">1024</span>;   #单个后台worker process进程的最大并发链接数</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">#设定http服务器，利用它的反向代理功能提供负载均衡支持</span>
<span class="line">http <span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line">    ##</span>
<span class="line">    # 基础配置</span>
<span class="line">	# Basic Settings</span>
<span class="line">	##</span>
<span class="line"></span>
<span class="line">    #设定mime类型(邮件支持类型)<span class="token punctuation">,</span>类型由mime.types文件定义</span>
<span class="line">    include       mime.types;</span>
<span class="line">    default_type  application/octet-stream;</span>
<span class="line"></span>
<span class="line">    #sendfile 指令指定 nginx 是否调用 sendfile 函数（zero copy 方式）来输出文件，对于普通应用，</span>
<span class="line">    #必须设为 on<span class="token punctuation">,</span>如果用来进行下载等应用磁盘IO重负载应用，可设置为 off，以平衡磁盘与网络I/O处理速度，降低系统的uptime.</span>
<span class="line">    sendfile        on;</span>
<span class="line">    #tcp_nopush     on;</span>
<span class="line"></span>
<span class="line">    #连接超时时间</span>
<span class="line">    #keepalive_timeout  <span class="token number">0</span>;</span>
<span class="line">    keepalive_timeout  <span class="token number">65</span>;</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">    ##</span>
<span class="line">    # 日志配置</span>
<span class="line">    # Logging Settings</span>
<span class="line">    ##</span>
<span class="line"></span>
<span class="line">    #设定日志</span>
<span class="line">    #log_format  main  &#39;$remote_addr - $remote_user <span class="token punctuation">[</span>$time_local<span class="token punctuation">]</span> <span class="token string">&quot;$request&quot;</span> &#39;</span>
<span class="line">    #                  &#39;$status $body_bytes_sent <span class="token string">&quot;$http_referer&quot;</span> &#39;</span>
<span class="line">    #                  &#39;<span class="token string">&quot;$http_user_agent&quot;</span> <span class="token string">&quot;$http_x_forwarded_for&quot;</span>&#39;;</span>
<span class="line"></span>
<span class="line">    #access_log  logs/access.log  main;</span>
<span class="line"></span>
<span class="line">    ##</span>
<span class="line">    # 压缩配置</span>
<span class="line">	# Gzip Settings</span>
<span class="line">	##</span>
<span class="line"></span>
<span class="line">    #gzip压缩开关</span>
<span class="line">    #gzip  on;</span>
<span class="line"></span>
<span class="line">    # gzip_vary on;</span>
<span class="line">	# gzip_proxied any;</span>
<span class="line">	# gzip_comp_level <span class="token number">6</span>;</span>
<span class="line">	# gzip_buffers <span class="token number">16</span> 8k;</span>
<span class="line">	# gzip_http_version <span class="token number">1.1</span>;</span>
<span class="line"></span>
<span class="line">    # HTTP服务器 参考下面</span>
<span class="line">    server <span class="token punctuation">{</span>...<span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    # HTTPS 服务 参考下面</span>
<span class="line">    server <span class="token punctuation">{</span>...<span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="http-服务" tabindex="-1"><a class="header-anchor" href="#http-服务"><span>http 服务</span></a></h3><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre><code><span class="line">server <span class="token punctuation">{</span></span>
<span class="line">    listen       <span class="token number">80</span>;            #监听<span class="token number">80</span>端口，<span class="token number">80</span>端口是知名端口号，用于HTTP协议</span>
<span class="line">    server_name  localhost;     #定义使用www.xx.com访问</span>
<span class="line"></span>
<span class="line">    #charset koi8-r;</span>
<span class="line"></span>
<span class="line">    #access_log  logs/host.access.log  main;</span>
<span class="line"></span>
<span class="line">    #反向代理的路径，location 后面设置映射的路径</span>
<span class="line">    location / <span class="token punctuation">{</span></span>
<span class="line">        root   html;</span>
<span class="line">        index  index.html index.htm;</span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    #error_page  <span class="token number">404</span>              /<span class="token number">404</span>.html;</span>
<span class="line"></span>
<span class="line">    # redirect server error pages to the static page /50x.html</span>
<span class="line">    # 重定向error 页面 到静态页面</span>
<span class="line">    error_page   <span class="token number">500</span> <span class="token number">502</span> <span class="token number">503</span> <span class="token number">504</span>  /50x.html;</span>
<span class="line">    location = /50x.html <span class="token punctuation">{</span></span>
<span class="line">        root   html;</span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    # proxy the PHP scripts to Apache listening on <span class="token number">127.0</span>.<span class="token number">0.1</span><span class="token operator">:</span><span class="token number">80</span></span>
<span class="line">    #</span>
<span class="line">    #location ~ \\.php$ <span class="token punctuation">{</span></span>
<span class="line">    #    proxy_pass   http<span class="token operator">:</span><span class="token comment">//127.0.0.1;</span></span>
<span class="line">    #<span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    # pass the PHP scripts to FastCGI server listening on <span class="token number">127.0</span>.<span class="token number">0.1</span><span class="token operator">:</span><span class="token number">9000</span></span>
<span class="line">    #</span>
<span class="line">    #location ~ \\.php$ <span class="token punctuation">{</span></span>
<span class="line">    #    root           html;</span>
<span class="line">    #    fastcgi_pass   <span class="token number">127.0</span>.<span class="token number">0.1</span><span class="token operator">:</span><span class="token number">9000</span>;</span>
<span class="line">    #    fastcgi_index  index.php;</span>
<span class="line">    #    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;</span>
<span class="line">    #    include        fastcgi_params;</span>
<span class="line">    #<span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    # deny access to .htaccess files<span class="token punctuation">,</span> if Apache&#39;s document root</span>
<span class="line">    # concurs with nginx&#39;s one</span>
<span class="line">    #</span>
<span class="line">    #location ~ /\\.ht <span class="token punctuation">{</span></span>
<span class="line">    #    deny  all;</span>
<span class="line">    #<span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="https-服务" tabindex="-1"><a class="header-anchor" href="#https-服务"><span>https 服务</span></a></h3><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre><code><span class="line">server <span class="token punctuation">{</span></span>
<span class="line">    listen       <span class="token number">443</span> ssl;       #监听<span class="token number">443</span>端口 用于HTTPS协议</span>
<span class="line">    server_name  localhost;     #服务名</span>
<span class="line"></span>
<span class="line">    ssl_certificate      cert.pem;  #ssl证书</span>
<span class="line">    ssl_certificate_key  cert.key;  #ssl证书密钥</span>
<span class="line"></span>
<span class="line">    ssl_session_cache    shared<span class="token operator">:</span>SSL<span class="token operator">:</span>1m;</span>
<span class="line">    ssl_session_timeout  5m;</span>
<span class="line"></span>
<span class="line">    ssl_ciphers  HIGH<span class="token operator">:</span>!aNULL<span class="token operator">:</span>!MD5;</span>
<span class="line">    ssl_prefer_server_ciphers  on;</span>
<span class="line"></span>
<span class="line">    location / <span class="token punctuation">{</span></span>
<span class="line">        root   html;</span>
<span class="line">        index  index.html index.htm;</span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10))])}const g=p(o,[["render",u],["__file","index.html.vue"]]),h=JSON.parse('{"path":"/docs/nginx/","title":"nginx 笔记","lang":"en-US","frontmatter":{"title":"nginx 笔记","date":"2024-12-12T00:00:00.000Z","tags":["nginx"]},"headers":[{"level":2,"title":"nginx 命令","slug":"nginx-命令","link":"#nginx-命令","children":[]},{"level":2,"title":"nginx 配置文件","slug":"nginx-配置文件","link":"#nginx-配置文件","children":[{"level":3,"title":"http 服务","slug":"http-服务","link":"#http-服务","children":[]},{"level":3,"title":"https 服务","slug":"https-服务","link":"#https-服务","children":[]}]}],"git":{"createdTime":1734637665000,"updatedTime":1734637665000,"contributors":[{"name":"vensen","email":"vensen002@outlook.com","commits":1}]},"filePathRelative":"docs/nginx/index.md"}');export{g as comp,h as data};
