(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{111:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return b})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return p}));var n=a(2),r=a(6),l=(a(0),a(124)),i={id:"pretrained_models",title:"Pretrained Models",sidebar_label:"Pretrained Models"},b={id:"notes/pretrained_models",title:"Pretrained Models",description:"[Outdated] A new version of this will be uploaded soon",source:"@site/docs/notes/pretrained_models.md",permalink:"/docs/notes/pretrained_models",editUrl:"https://github.com/facebookresearch/mmf/edit/master/website/docs/notes/pretrained_models.md",lastUpdatedBy:"Amanpreet Singh",lastUpdatedAt:1591766348,sidebar_label:"Pretrained Models",sidebar:"docs",previous:{title:"MMF's Configuration System",permalink:"/docs/notes/configuration"},next:{title:"Adding a dataset",permalink:"/docs/tutorials/dataset"}},c=[],o={rightToc:c};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"[Outdated]")," A new version of this will be uploaded soon"),Object(l.b)("p",null,"Performing inference using pretrained models in MMF is easy. Pickup a pretrained model from the table below and follow the steps to do inference or generate predictions for EvalAI evaluation. This section expects that you have already installed the required data as explained in ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"./quickstart"}),"quickstart"),"."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null})))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Model"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Model Key"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Supported Datasets"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Pretrained Models"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Notes")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Pythia"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"pythia"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"vqa2, vizwiz, textvqa, visual_genome,"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"vqa2 train+val, vqa2 train only,  vizwiz"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"VizWiz model has been pretrained on VQAv2 and transferred")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"LoRRA"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"lorra"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"vqa2, vizwiz, textvqa"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"textvqa"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"CNNLSTM"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"cnn_lstm"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"clevr"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Features are calculated on fly in this on")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"BAN"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ban"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"vqa2, vizwiz, textvqa"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Coming soon!"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Support is preliminary and haven\u2019t been tested throughly.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"BUTD"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"butd"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"coco"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"coco"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}))))),Object(l.b)("p",null,".. _vqa2 train+val: ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://dl.fbaipublicfiles.com/pythia/pretrained_models/vqa2/pythia_train_val.pth"}),"https://dl.fbaipublicfiles.com/pythia/pretrained_models/vqa2/pythia_train_val.pth"),"\n.. _vqa2 train only: ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://dl.fbaipublicfiles.com/pythia/pretrained_models/vqa2/pythia.pth"}),"https://dl.fbaipublicfiles.com/pythia/pretrained_models/vqa2/pythia.pth"),"\n.. _vizwiz: ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://dl.fbaipublicfiles.com/pythia/pretrained_models/vizwiz/pythia_pretrained_vqa2.pth"}),"https://dl.fbaipublicfiles.com/pythia/pretrained_models/vizwiz/pythia_pretrained_vqa2.pth"),"\n.. _textvqa: ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://dl.fbaipublicfiles.com/pythia/pretrained_models/textvqa/lorra_best.pth"}),"https://dl.fbaipublicfiles.com/pythia/pretrained_models/textvqa/lorra_best.pth"),"\n.. _coco: ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://dl.fbaipublicfiles.com/pythia/pretrained_models/coco_captions/butd.pth"}),"https://dl.fbaipublicfiles.com/pythia/pretrained_models/coco_captions/butd.pth")),Object(l.b)("p",null,"Now, let's say your link to pretrained model ",Object(l.b)("inlineCode",{parentName:"p"},"model")," is ",Object(l.b)("inlineCode",{parentName:"p"},"link")," (select from table > right click > copy link address), the respective config should be at ",Object(l.b)("inlineCode",{parentName:"p"},"configs/[task]/[dataset]/[model].yaml"),". For example, config file for ",Object(l.b)("inlineCode",{parentName:"p"},"vqa2 train_and_val")," should be ",Object(l.b)("inlineCode",{parentName:"p"},"configs/vqa/vqa2/pythia_train_and_val.yaml"),". Now to run inference for EvalAI, run the following command."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),"cd ~/mmf/data\nmkdir -p models && cd models;\n# Download the pretrained model\nwget [link]\ncd ../..;\npython tools/run.py --datasets [dataset] --model [model] --config [config] \\\n--run_type inference --evalai_inference 1 --resume_file data/[model].pth\n")),Object(l.b)("p",null,"If you want to train or evaluate on val, change the ",Object(l.b)("inlineCode",{parentName:"p"},"run_type")," to ",Object(l.b)("inlineCode",{parentName:"p"},"train")," or ",Object(l.b)("inlineCode",{parentName:"p"},"val")," accordingly. You can also use multiple run types, for e.g. to do training, inference on val as well as test you can set ",Object(l.b)("inlineCode",{parentName:"p"},"--run_type")," to ",Object(l.b)("inlineCode",{parentName:"p"},"train+val+inference"),"."),Object(l.b)("p",null,"if you remove ",Object(l.b)("inlineCode",{parentName:"p"},"--evalai_inference")," argument, Pythia will perform inference and provide results directly on the dataset. Do note that this is not possible in case of test sets as we don't have answers/targets for them. So, this can be useful for performing inference on val set locally."),Object(l.b)("p",null,"Table below shows evaluation metrics for various pretrained models:"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null})))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Model"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Dataset"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Metric"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Notes")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Pythia"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"vqa2 (train+val)"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"test-dev accuracy - 68.31%"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Can be easily pushed to 69.2%")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Pythia"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"vqa2 (train)"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"test-dev accuracy - 66.7%"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Pythia"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"vizwiz (train)"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"test-dev accuracy - 54.22%"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Pretrained on VQA2 and transferred to VizWiz")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"LoRRA"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"textvqa (train)"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"val accuracy - 27.4%"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"BUTD"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"coco(karpathy-train)"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"BLEU 1 - 76.02, BLEU 4- 35.42, METEOR- 27.39, ROUGE_L- 56.17, CIDEr - 112.03, SPICE - 20.33"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Beam Search(length 5), Karpathy test split")))),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Note for BUTD model :")," For training BUTD model use the config ",Object(l.b)("inlineCode",{parentName:"p"},"butd.yaml"),". Training uses greedy decoding for validation. Currently we do not have support to train the model using beam search decoding validation. We will add that support soon. For inference only use ",Object(l.b)("inlineCode",{parentName:"p"},"butd_beam_search.yaml")," config that supports beam search decoding."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Note")," that, for simplicity, our current released model ",Object(l.b)("strong",{parentName:"p"},"does not")," incorporate extensive data augmentations (e.g. visual genome, visual dialogue) during training, which was used in our challenge winner entries for VQA and VizWiz 2018. As a result, there can be some performance gap to models reported and released previously. If you are looking for reproducing those results, please checkout the ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/facebookresearch/mmf/releases/tag/v0.1"}),"v0.1")," release."))}p.isMDXComponent=!0},124:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return u}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),p=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):b(b({},t),e)),a},d=function(e){var t=p(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),d=p(a),m=n,u=d["".concat(i,".").concat(m)]||d[m]||s[m]||l;return a?r.a.createElement(u,b(b({ref:t},o),{},{components:a})):r.a.createElement(u,b({ref:t},o))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=m;var b={};for(var c in t)hasOwnProperty.call(t,c)&&(b[c]=t[c]);b.originalType=e,b.mdxType="string"==typeof e?e:n,i[1]=b;for(var o=2;o<l;o++)i[o]=a[o];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);