(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{424:function(t,e,o){"use strict";o.r(e);var s=o(11),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"outbounds"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#outbounds"}},[t._v("#")]),t._v(" Outbounds")]),t._v(" "),o("p",[t._v("Outbound connections are used to send data to remote websites or the next level of proxy server. For available protocols, see the protocol list.")]),t._v(" "),o("h2",{attrs:{id:"outboundobject"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#outboundobject"}},[t._v("#")]),t._v(" OutboundObject")]),t._v(" "),o("p",[o("code",[t._v("OutboundObject")]),t._v(" corresponds to a child element of the "),o("code",[t._v("outbounds")]),t._v(" item in the configuration file.")]),t._v(" "),o("div",{staticClass:"language-json extra-class"},[o("pre",{pre:!0,attrs:{class:"language-json"}},[o("code",[o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),o("span",{pre:!0,attrs:{class:"token property"}},[t._v('"sendThrough"')]),o("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),o("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0.0.0.0"')]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),o("span",{pre:!0,attrs:{class:"token property"}},[t._v('"protocol"')]),o("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),o("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Protocol Name"')]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),o("span",{pre:!0,attrs:{class:"token property"}},[t._v('"settings"')]),o("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),o("span",{pre:!0,attrs:{class:"token property"}},[t._v('"tag"')]),o("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),o("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Tag"')]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),o("span",{pre:!0,attrs:{class:"token property"}},[t._v('"streamSettings"')]),o("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),o("span",{pre:!0,attrs:{class:"token property"}},[t._v('"proxySettings"')]),o("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),o("span",{pre:!0,attrs:{class:"token property"}},[t._v('"tag"')]),o("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),o("span",{pre:!0,attrs:{class:"token string"}},[t._v('"another-outbound-tag"')]),t._v("\n    "),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),o("span",{pre:!0,attrs:{class:"token property"}},[t._v('"mux"')]),o("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),o("blockquote",[o("p",[o("code",[t._v("sendThrough")]),t._v(": address")])]),t._v(" "),o("p",[t._v("The IP address used to send data, valid when the host has multiple IP addresses, the default value is "),o("code",[t._v('"0.0.0.0"')]),t._v(".")]),t._v(" "),o("blockquote",[o("p",[o("code",[t._v("protocol")]),t._v(": string")])]),t._v(" "),o("p",[t._v("The name of the connection protocol. See the protocol list for optional values.")]),t._v(" "),o("blockquote",[o("p",[o("code",[t._v("settings")]),t._v(": OutboundConfigurationObject")])]),t._v(" "),o("p",[t._v("The specific configuration content varies depending on the protocol. See "),o("code",[t._v("OutboundConfigurationObject")]),t._v(" in each protocol for details.")]),t._v(" "),o("blockquote",[o("p",[o("code",[t._v("tag")]),t._v(": string")])]),t._v(" "),o("p",[t._v("The identifier of this outbound connection, used to locate this connection in other configurations. When its value is not empty, it must be unique among all tags.")]),t._v(" "),o("blockquote",[o("p",[o("code",[t._v("streamSettings")]),t._v(": "),o("RouterLink",{attrs:{to:"/en_US/config/transport.html#perproxy"}},[t._v("StreamSettingsObject")])],1)]),t._v(" "),o("p",[o("RouterLink",{attrs:{to:"/en_US/config/transport.html#perproxy"}},[t._v("Low-level transmission configuration")])],1),t._v(" "),o("blockquote",[o("p",[o("code",[t._v("proxySettings")]),t._v(": "),o("a",{attrs:{href:"#proxysettingsobject"}},[t._v("ProxySettingsObject")])])]),t._v(" "),o("p",[t._v("Outbound proxy configuration. When the outbound proxy is in effect, the "),o("code",[t._v("streamSettings")]),t._v(" of this outbound protocol will not work.")]),t._v(" "),o("blockquote",[o("p",[o("code",[t._v("mux")]),t._v(": "),o("a",{attrs:{href:"#muxobject"}},[t._v("MuxObject")])])]),t._v(" "),o("p",[o("a",{attrs:{href:"#muxobject"}},[t._v("Mux Configuration")]),t._v(".")]),t._v(" "),o("h2",{attrs:{id:"proxysettingsobject"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#proxysettingsobject"}},[t._v("#")]),t._v(" ProxySettingsObject")]),t._v(" "),o("div",{staticClass:"language-json extra-class"},[o("pre",{pre:!0,attrs:{class:"language-json"}},[o("code",[o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),o("span",{pre:!0,attrs:{class:"token property"}},[t._v('"tag"')]),o("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),o("span",{pre:!0,attrs:{class:"token string"}},[t._v('"another-outbound-tag"')]),t._v("\n"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),o("blockquote",[o("p",[o("code",[t._v("tag")]),t._v(": string")])]),t._v(" "),o("p",[t._v("When the identifier of another outbound protocol is specified, the data sent by this outbound protocol will be forwarded to the specified outbound protocol.")]),t._v(" "),o("h2",{attrs:{id:"muxobject"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#muxobject"}},[t._v("#")]),t._v(" MuxObject")]),t._v(" "),o("p",[t._v("The function of Mux is to distribute the data of multiple TCP connections on one TCP connection. See "),o("RouterLink",{attrs:{to:"/en_US/developer/protocols/muxcool.html"}},[t._v("Mux.Cool")]),t._v(" for implementation details. Mux is designed to reduce TCP's handshake delay, not to increase connection throughput. Using Mux to watch videos, download or measure speed usually has the opposite effect. Mux only needs to be enabled on the client side, and the server side automatically adapts.")],1),t._v(" "),o("p",[o("code",[t._v("MuxObject")]),t._v(" corresponds to the "),o("code",[t._v("mux")]),t._v(" item in "),o("code",[t._v("OutboundObject")]),t._v(".")]),t._v(" "),o("div",{staticClass:"language-json extra-class"},[o("pre",{pre:!0,attrs:{class:"language-json"}},[o("code",[o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),o("span",{pre:!0,attrs:{class:"token property"}},[t._v('"enabled"')]),o("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),o("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),o("span",{pre:!0,attrs:{class:"token property"}},[t._v('"concurrency"')]),o("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),o("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v("\n"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),o("blockquote",[o("p",[o("code",[t._v("Enabled")]),t._v(": true | false")])]),t._v(" "),o("p",[t._v("Whether to enable Mux forwarding requests, the default value is "),o("code",[t._v("false")]),t._v(".")]),t._v(" "),o("blockquote",[o("p",[o("code",[t._v("concurrency")]),t._v(": number")])]),t._v(" "),o("p",[t._v("The maximum number of concurrent connections. The minimum value is "),o("code",[t._v("1")]),t._v(", the maximum value is "),o("code",[t._v("1024")]),t._v(", and the default value is "),o("code",[t._v("8")]),t._v(".")]),t._v(" "),o("p",[t._v("Fill in a negative number, such as "),o("code",[t._v("-1")]),t._v(", do not load the mux module (v4.22.0+).")]),t._v(" "),o("p",[t._v("This value indicates the maximum number of Mux connections carried on a TCP connection. When the client sends 8 TCP requests and "),o("code",[t._v("concurrency=8")]),t._v(", V2Ray will only send an actual TCP connection, and all 8 requests of the client are transmitted by this TCP connection.")])])}),[],!1,null,null,null);e.default=n.exports}}]);