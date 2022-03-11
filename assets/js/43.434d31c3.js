(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{247:function(t,e,s){"use strict";s.r(e);var a=s(0),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"quic"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#quic"}},[t._v("#")]),t._v(" QUIC")]),t._v(" "),s("p",[t._v("QUIC 全称 Quick UDP Internet Connection，是由 Google 提出的使用 UDP 进行多路并发传输的协议。其主要优势是:")]),t._v(" "),s("ol",[s("li",[t._v("减少了握手的延迟（1-RTT 或 0-RTT）")]),t._v(" "),s("li",[t._v("多路复用，并且没有 TCP 的阻塞问题")]),t._v(" "),s("li",[t._v("连接迁移，（主要是在客户端）当由 Wifi 转移到 4G 时，连接不会被断开。")])]),t._v(" "),s("p",[t._v("QUIC 目前处于实验期，使用了正在标准化过程中的 IETF 实现，不能保证与最终版本的兼容性。")]),t._v(" "),s("h2",{attrs:{id:"版本历史"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#版本历史"}},[t._v("#")]),t._v(" 版本历史")]),t._v(" "),s("p",[t._v("V2Ray 4.7:")]),t._v(" "),s("ul",[s("li",[t._v("开始支持 QUIC。")]),t._v(" "),s("li",[t._v("默认设定:\n"),s("ul",[s("li",[t._v("12 字节的 Connection ID")]),t._v(" "),s("li",[t._v("30 秒没有数据通过时自动断开连接 (可能会影响一些长连接的使用)")])])])]),t._v(" "),s("h2",{attrs:{id:"quicobject"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#quicobject"}},[t._v("#")]),t._v(" QuicObject")]),t._v(" "),s("p",[s("code",[t._v("QuicObject")]),t._v(" 对应传输配置的 "),s("code",[t._v("quicSettings")]),t._v(" 项。对接的两端的配置必须完全一致，否则连接失败。QUIC 强制要求开启 TLS，在传输配置中没有开启 TLS 时，V2Ray 会自行签发一个证书进行 TLS 通讯。在使用 QUIC 传输时，可以关闭 VMess 的加密。")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"security"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"none"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"key"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"header"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"none"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("blockquote",[s("p",[s("code",[t._v("security")]),t._v(': "none" | "aes-128-gcm" | "chacha20-poly1305"')])]),t._v(" "),s("p",[t._v("加密方式。默认值为不加密。")]),t._v(" "),s("p",[t._v("此加密是对 QUIC 数据包的加密，加密后数据包无法被探测。")]),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("key")]),t._v(": string")])]),t._v(" "),s("p",[t._v("加密时所用的密钥。可以是任意字符串。当 "),s("code",[t._v("security")]),t._v(" 不为 "),s("code",[t._v('"none"')]),t._v(" 时有效。")]),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("header")]),t._v(": "),s("a",{attrs:{href:"#headerobject"}},[t._v("HeaderObject")])])]),t._v(" "),s("p",[t._v("数据包头部伪装设置")]),t._v(" "),s("h2",{attrs:{id:"headerobject"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#headerobject"}},[t._v("#")]),t._v(" HeaderObject")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"none"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("blockquote",[s("p",[s("code",[t._v("type")]),t._v(": string")])]),t._v(" "),s("p",[t._v("伪装类型，可选的值有：")]),t._v(" "),s("ul",[s("li",[s("code",[t._v('"none"')]),t._v("：默认值，不进行伪装，发送的数据是没有特征的数据包。")]),t._v(" "),s("li",[s("code",[t._v('"srtp"')]),t._v("：伪装成 SRTP 数据包，会被识别为视频通话数据（如 FaceTime）。")]),t._v(" "),s("li",[s("code",[t._v('"utp"')]),t._v("：伪装成 uTP 数据包，会被识别为 BT 下载数据。")]),t._v(" "),s("li",[s("code",[t._v('"wechat-video"')]),t._v("：伪装成微信视频通话的数据包。")]),t._v(" "),s("li",[s("code",[t._v('"dtls"')]),t._v("：伪装成 DTLS 1.2 数据包。")]),t._v(" "),s("li",[s("code",[t._v('"wireguard"')]),t._v("：伪装成 WireGuard 数据包。（并不是真正的 WireGuard 协议）")])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("当加密和伪装都不启用时，数据包即为原始的 QUIC 数据包，可以与其它的 QUIC 工具对接。为了避免被探测，建议加密或伪装至少开启一项。")])])])}),[],!1,null,null,null);e.default=r.exports}}]);