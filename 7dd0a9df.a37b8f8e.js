(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{114:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return p}));var n=a(2),l=a(6),r=(a(0),a(124)),o={id:"other_challenges",title:"Other Challenges",sidebar_label:"Other Challenges"},i={id:"challenges/other_challenges",title:"Other Challenges",description:"Challenge Participation",source:"@site/docs/challenges/other_challenges.md",permalink:"/docs/challenges/other_challenges",editUrl:"https://github.com/facebookresearch/mmf/edit/master/website/docs/challenges/other_challenges.md",lastUpdatedBy:"Amanpreet Singh",lastUpdatedAt:1591766348,sidebar_label:"Other Challenges",sidebar:"docs",previous:{title:"Hateful Memes Challenge",permalink:"/docs/challenges/hateful_memes_challenge"}},c=[{value:"TextVQA challenge",id:"textvqa-challenge",children:[]},{value:"VQA Challenge",id:"vqa-challenge",children:[]}],s={rightToc:c};function p(e){var t=e.components,a=Object(l.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"challenge-participation"},"Challenge Participation"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"[Outdated]")," A new version of this will be uploaded soon"),Object(r.b)("p",null,"Participating in EvalAI challenges is really easy using MMF. We will show how to do inference for two challenges here:"),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"This section assumes that you have downloaded data following the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/getting_started/quickstart"}),"Quickstart")," tutorial."))),Object(r.b)("h2",{id:"textvqa-challenge"},"TextVQA challenge"),Object(r.b)("p",null,"TextVQA challenge is available at ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://evalai.cloudcv.org/web/challenges/challenge-page/244/overview"}),"this link"),". Currently, LoRRA is the SoTA on TextVQA. To do inference on val set using LoRRA, follow the steps below:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"# Download the model first\ncd ~/mmf/data\nmkdir -p models && cd models;\n# Get link from the table above and extract if needed\nwget https://dl.fbaipublicfiles.com/pythia/pretrained_models/textvqa/lorra_best.pth\n\ncd ../..\n# Replace datasets and model with corresponding key for other pretrained models\npython tools/run.py --datasets textvqa --model lorra --config configs/vqa/textvqa/lorra.yaml \\\n--run_type val --evalai_inference 1 --resume_file data/models/lorra_best.pth\n")),Object(r.b)("p",null,"In the printed log, MMF will mention where it wrote the JSON file it created. Upload that file on EvalAI:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"> Go to https://evalai.cloudcv.org/web/challenges/challenge-page/244/overview\n> Select Submit Tab\n> Select Validation Phase\n> Select the file by click Upload file\n> Write a model name\n> Upload\n")),Object(r.b)("p",null,"To check your results, go in 'My submissions' section and select 'Validation Phase' and click on 'Result file'."),Object(r.b)("p",null,"Now, you can either edit the LoRRA model to create your own model on top of it or create your own model inside MMF to beat LoRRA in challenge."),Object(r.b)("h2",{id:"vqa-challenge"},"VQA Challenge"),Object(r.b)("p",null,"Similar to TextVQA challenge, VQA Challenge is available at ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://evalai.cloudcv.org/web/challenges/challenge-page/163/overview"}),"this link"),". You can either select Pythia as your base model or LoRRA model (available soon for VQA2) from the table in ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"pretrained_models"}),"pretrained models")," section as a base."),Object(r.b)("p",null,"Follow the same steps above, replacing ",Object(r.b)("inlineCode",{parentName:"p"},"--model")," with ",Object(r.b)("inlineCode",{parentName:"p"},"pythia")," or ",Object(r.b)("inlineCode",{parentName:"p"},"lorra")," and ",Object(r.b)("inlineCode",{parentName:"p"},"--datasets")," with ",Object(r.b)("inlineCode",{parentName:"p"},"vqa2"),". Also, replace the config accordingly. Here are example commands for using Pythia to do inference on test set of VQA2."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"# Download the model first\ncd ~/mmf/data\nmkdir -p models && cd models;\n# Get link from the table above and extract if needed\nwget https://dl.fbaipublicfiles.com/pythia/pretrained_models/textvqa/pythia_train_val.pth\n\ncd ../..\n# Replace datasets and model with corresponding key for other pretrained models\npython tools/run.py --datasets vqa2 --model pythia --config configs/vqa/vqa2/pythia.yaml \\\n--run_type inference --evalai_inference 1 --resume_file data/models/pythia_train_val.pth\n")),Object(r.b)("p",null,"Now, similar to TextVQA challenge follow the steps to upload the prediction file, but this time to ",Object(r.b)("inlineCode",{parentName:"p"},"test-dev")," phase."))}p.isMDXComponent=!0},124:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return m}));var n=a(0),l=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=l.a.createContext({}),p=function(e){var t=l.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return l.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},h=l.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(a),h=n,m=d["".concat(o,".").concat(h)]||d[h]||b[h]||r;return a?l.a.createElement(m,i(i({ref:t},s),{},{components:a})):l.a.createElement(m,i({ref:t},s))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=h;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var s=2;s<r;s++)o[s]=a[s];return l.a.createElement.apply(null,o)}return l.a.createElement.apply(null,a)}h.displayName="MDXCreateElement"}}]);