(window.webpackJsonp=window.webpackJsonp||[]).push([[114],{316:function(o,s,t){"use strict";t.r(s);var e=t(0),v=Object(e.a)({},(function(){var o=this,s=o.$createElement,t=o._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":o.$parent.slotKey}},[t("h1",{attrs:{id:"shadowsocks"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#shadowsocks"}},[o._v("#")]),o._v(" Shadowsocks")]),o._v(" "),t("p",[t("a",{attrs:{href:"https://shadowsocks.org",target:"_blank",rel:"noopener noreferrer"}},[o._v("Shadowsocks"),t("OutboundLink")],1),o._v(" 协议，兼容大部分其它版本的实现。")]),o._v(" "),t("h2",{attrs:{id:"shadowsocks-入站"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#shadowsocks-入站"}},[o._v("#")]),o._v(" Shadowsocks 入站")]),o._v(" "),t("p",[o._v("inbound.shadowsocks")]),o._v(" "),t("blockquote",[t("p",[t("code",[o._v("method")]),o._v(" : string")])]),o._v(" "),t("p",[o._v("加密方式，可选值见"),t("a",{attrs:{href:"#%E5%8A%A0%E5%AF%86%E6%96%B9%E5%BC%8F%E5%88%97%E8%A1%A8"}},[o._v("加密方式列表")]),o._v("。")]),o._v(" "),t("blockquote",[t("p",[t("code",[o._v("password")]),o._v(": string")])]),o._v(" "),t("p",[o._v("服务器认可的密码。Shadowsocks 协议不限制密码长度，但短密码会更可能被破解，建议使用 16 字符或更长的密码。")]),o._v(" "),t("blockquote",[t("p",[t("code",[o._v("network")]),o._v(': "tcp" | "udp" | "tcp,udp"')])]),o._v(" "),t("p",[o._v("可接收的网络连接类型，比如当指定为 "),t("code",[o._v('"tcp"')]),o._v(" 时，Shadowsocks 入站仅会接收 TCP 流量。默认值为 "),t("code",[o._v('"tcp"')]),o._v("。")]),o._v(" "),t("blockquote",[t("p",[t("code",[o._v("packetEncoding")]),o._v(':  ["None" | "Packet"]')])]),o._v(" "),t("p",[o._v("UDP 包编码方式，默认值为 "),t("code",[o._v("None")]),o._v("。\n当该值为 "),t("code",[o._v("None")]),o._v(" 时，UDP 将根据目标地址被映射 (Address and Port-Dependent Mapping)。\n当该值为 "),t("code",[o._v("Packet")]),o._v(" 时，UDP 将被端点独立映射 (Endpoint Independent Mapping)，此 UDP 行为也被称为 FullCone 或 NAT1。")]),o._v(" "),t("h2",{attrs:{id:"shadowsocks-出站"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#shadowsocks-出站"}},[o._v("#")]),o._v(" Shadowsocks 出站")]),o._v(" "),t("p",[o._v("outbound.shadowsocks")]),o._v(" "),t("blockquote",[t("p",[t("code",[o._v("address")]),o._v(": string")])]),o._v(" "),t("p",[o._v("服务器地址，支持 IP 地址或者域名。")]),o._v(" "),t("blockquote",[t("p",[t("code",[o._v("port")]),o._v(": number")])]),o._v(" "),t("p",[o._v("服务器端口号。")]),o._v(" "),t("blockquote",[t("p",[t("code",[o._v("method")]),o._v(" : string")])]),o._v(" "),t("p",[o._v("加密方式，可选值见"),t("a",{attrs:{href:"#%E5%8A%A0%E5%AF%86%E6%96%B9%E5%BC%8F%E5%88%97%E8%A1%A8"}},[o._v("加密方式列表")]),o._v("。")]),o._v(" "),t("blockquote",[t("p",[t("code",[o._v("password")]),o._v(": string")])]),o._v(" "),t("p",[o._v("服务器认可的密码。Shadowsocks 协议不限制密码长度，但短密码会更可能被破解，建议使用 16 字符或更长的密码。")]),o._v(" "),t("h2",{attrs:{id:"加密方式列表"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#加密方式列表"}},[o._v("#")]),o._v(" 加密方式列表")]),o._v(" "),t("ul",[t("li",[t("code",[o._v('"aes-256-gcm"')])]),o._v(" "),t("li",[t("code",[o._v('"aes-128-gcm"')])]),o._v(" "),t("li",[t("code",[o._v('"chacha20-poly1305"')]),o._v(" 或 "),t("code",[o._v('"chacha20-ietf-poly1305"')])]),o._v(" "),t("li",[t("code",[o._v('"none"')]),o._v(" 或 "),t("code",[o._v('"plain"')])])]),o._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[o._v("WARNING")]),o._v(" "),t("p",[o._v('"none" 不加密方式下，服务器端不会验证 "password" 中的密码。一般需要加上 TLS 并在传输层使用安全配置，例如 WebSocket 配置较长的 path')])])])}),[],!1,null,null,null);s.default=v.exports}}]);