(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{211:function(a,e,t){"use strict";t.r(e);var n=t(0),r=function(a){a.options.__data__block__={mermaid_1a962853:"graph LR;\nA(PC) -.- B(防火墙);\nB -.-> C(墙外网站);\nA --\x3e D(V2Ray/VPS);\nD --\x3e C;\nA --\x3e E(墙内网站);\n",mermaid_382ee14e:"graph LR;\nA(PC) -.-> B(防火墙);\nB -.-> C(墙外网站);\nA --\x3e D(墙内VPS);\nD --\x3e E(墙外VPS);\nE --\x3e C;\nD --\x3e F(墙内网站);\n",mermaid_382ee16a:"graph LR;\nA1(inbound) --\x3e D(Dispatcher / Router / DNS);\nA2(inbound) --\x3e D;\nA3(inbound) --\x3e D;\nA4(inbound) --\x3e D;\nD --\x3e B1(outbound);\nD --\x3e B2(outbound);\nD --\x3e B3(outbound);\nD --\x3e B4(outbound);\n"}},i=Object(n.a)({},(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"工作机制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#工作机制"}},[a._v("#")]),a._v(" 工作机制")]),a._v(" "),t("h2",{attrs:{id:"单服务器模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#单服务器模式"}},[a._v("#")]),a._v(" 单服务器模式")]),a._v(" "),t("p",[a._v("与其它的网络代理工具一样，你需要一台配置了 V2Ray 的服务器，然后在自己的设备上安装并配置 V2Ray 客户端，然后即可流畅地访问互联网。")]),a._v(" "),t("Mermaid",{attrs:{id:"mermaid_1a962853",graph:a.$dataBlock.mermaid_1a962853}}),t("p",[a._v("一个 V2Ray 服务器可同时支持多台设备使用不同的代理协议访问。同时，经过合理的配置，V2Ray 可以识别并区分需要代理以及不需要代理的流量，直连的流量不需要绕路。")]),a._v(" "),t("h2",{attrs:{id:"桥接模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#桥接模式"}},[a._v("#")]),a._v(" 桥接模式")]),a._v(" "),t("p",[a._v("如果你不想在每一台设备上都配置路由，你也可以设置一台中转服务器，用于接收客户端发来的所有流量，然后在服务器中进行转发判断。")]),a._v(" "),t("Mermaid",{attrs:{id:"mermaid_382ee14e",graph:a.$dataBlock.mermaid_382ee14e}}),t("h2",{attrs:{id:"工作原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#工作原理"}},[a._v("#")]),a._v(" 工作原理")]),a._v(" "),t("p",[a._v("在配置 V2Ray 之前，不妨先来看一下 V2Ray 的工作原理，以下是单个 V2Ray 进程的内部结构示意图。多个 V2Ray 之间相互独立，互不影响。")]),a._v(" "),t("Mermaid",{attrs:{id:"mermaid_382ee16a",graph:a.$dataBlock.mermaid_382ee16a}}),t("ul",[t("li",[a._v("需要配置至少一个入站协议（Inbound）和一个出站协议（Outbound）才可以正常工作。\n"),t("ul",[t("li",[a._v("入站协议负责与客户端（如浏览器）通信：\n"),t("ul",[t("li",[a._v("入站协议通常可以配置用户认证，如 ID 和密码等；")]),a._v(" "),t("li",[a._v("入站协议收到数据之后，会交给分发器（Dispatcher）进行分发；")])])]),a._v(" "),t("li",[a._v("出站协议负责将数据发给服务器，如另一台主机上的 V2Ray。")])])]),a._v(" "),t("li",[a._v("当有多个出站协议时，可以配置路由（Routing）来指定某一类流量由某一个出站协议发出。\n"),t("ul",[t("li",[a._v("路由会在必要时查询 DNS 以获取更多信息来进行判断。")])])])]),a._v(" "),t("p",[a._v("具体的配置格式详见 "),t("RouterLink",{attrs:{to:"/config/overview.html"}},[a._v("第二章节")]),a._v("。")],1)],1)}),[],!1,null,null,null);"function"==typeof r&&r(i);e.default=i.exports}}]);