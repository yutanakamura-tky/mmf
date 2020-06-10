(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{119:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(2),a=n(6),o=(n(0),n(124)),i={id:"features",title:"MMF Features",sidebar_label:"MMF Features"},l={id:"getting_started/features",title:"MMF Features",description:"MMF features:",source:"@site/docs/getting_started/features.md",permalink:"/docs/getting_started/features",editUrl:"https://github.com/facebookresearch/mmf/edit/master/website/docs/getting_started/features.md",lastUpdatedBy:"Amanpreet Singh",lastUpdatedAt:1591766348,sidebar_label:"MMF Features",sidebar:"docs",previous:{title:"Installation",permalink:"/docs/getting_started/installation"},next:{title:"Quickstart",permalink:"/docs/getting_started/quickstart"}},s=[],c={rightToc:s};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"MMF features:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Model Zoo"),": Reference implementations for state-of-the-art vision and language model including ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://arxiv.org/abs/1904.08920"}),"LoRRA")," (SoTA on VQA and TextVQA), ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://arxiv.org/abs/1807.09956"}),"Pythia")," model (VQA 2018 challenge winner), BAN and ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://arxiv.org/abs/1707.07998"}),"BUTD"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Multi-Tasking"),": Support for multi-tasking which allows training on multiple datasets together."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Datasets"),": Includes support for various datasets built-in including VQA, VizWiz, TextVQA, VisualDialog, MS COCO Captioning."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Modules"),": Provides implementations for many commonly used layers in vision and language domain"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Distributed"),": Support for distributed training based on DataParallel as well as DistributedDataParallel."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Unopinionated"),": Unopinionated about the dataset and model implementations built on top of it."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Customization"),": Custom losses, metrics, scheduling, optimizers, tensorboard; suits all your custom needs.")),Object(o.b)("p",null,"You can use MMF to ",Object(o.b)("strong",{parentName:"p"},"bootstrap")," for your next vision and language multimodal research project."),Object(o.b)("p",null,"MMF can also act as ",Object(o.b)("strong",{parentName:"p"},"starter codebase")," for challenges around vision and language datasets (TextVQA challenge, VQA challenge)."))}u.isMDXComponent=!0},124:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),u=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,m=p["".concat(i,".").concat(d)]||p[d]||b[d]||o;return n?a.a.createElement(m,l(l({ref:t},c),{},{components:n})):a.a.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);