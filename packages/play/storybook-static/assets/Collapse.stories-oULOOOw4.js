import{c as V,s as x,t as N,B as S,n as T}from"./index-biE01mD0.js";import{d as B,f as j,y as z,w as H,p as L,o as I,l as E,m as r,e as O,b as q,z as c,s as p,n as u,q as A,A as F,B as G,j as J,T as K,C as P,D as M,E as Q,F as R}from"./vue.esm-bundler-lgVW8fIU.js";const $=Symbol("collapseContext"),U={class:"cd-collapse"},v="CdCollapse",W=V(B({name:v,__name:"Collapse",props:{modelValue:{},accordion:{type:Boolean}},emits:["update:modelValue","change"],setup(e,{emit:n}){const l=e,i=n,o=j(l.modelValue);function a(t){o.value=t,T(["update:modelValue","change"],s=>i(s,t))}return l.accordion&&o.value.length>1&&N(),z(()=>{l.accordion&&o.value.length>1&&console.warn(v,"accordion mode should only have one active item")}),H(()=>l.modelValue,t=>a(t)),L($,{activeNames:o,handleItemClick:function(t){let s=[...o.value];if(l.accordion)return s=[s[0]===t?"":t],void a(s);const m=s.indexOf(t);m>-1?s.splice(m,1):s.push(t),a(s)}}),(t,s)=>(I(),E("div",U,[r(t.$slots,"default",{},void 0,!0)]))}}),[["__scopeId","data-v-ef48a303"]]),h=e=>e.style.height="0px",f=e=>e.style.height=`${e.scrollHeight}px`,C=e=>e.style.height="",b=e=>e.style.overflow="hidden",g=e=>e.style.overflow="",X={beforeEnter(e){h(e),b(e)},enter:e=>f(e),afterEnter(e){C(e),g(e)},beforeLeave(e){f(e),b(e)},leave:e=>h(e),afterLeave(e){C(e),g(e)}},Y=["id"],Z={class:"cd-collapse-item__title"},ee={class:"cd-collapse-item__wapper"},ae=["id"],te=V(B({name:"CdCollapseItem",__name:"CollapseItem",props:{name:{},title:{},disabled:{type:Boolean}},setup(e){const n=e,l=O($),i=q(()=>{var a;return(a=l==null?void 0:l.activeNames.value)==null?void 0:a.includes(n.name)});function o(){n.disabled||(l==null||l.handleItemClick(n.name))}return(a,t)=>(I(),E("div",{class:u(["cd-collapse-item",{"is-disabled":a.disabled}])},[c("div",{class:u(["cd-collapse-item__header",{"is-disabled":a.disabled,"is-active":i.value}]),id:`item-header-${a.name}`,onClick:o},[c("span",Z,[r(a.$slots,"title",{},()=>[P(M(a.title),1)],!0)]),p(S,{icon:"angle-right",class:"header-angle"})],10,Y),p(K,F({name:"slide"},G(J(X))),{default:A(()=>[Q(c("div",ee,[c("div",{class:"cd-collapse-item__content",id:`item-content-${a.name}`},[r(a.$slots,"default",{},void 0,!0)],8,ae)],512),[[R,i.value]])]),_:3},16)],2))}}),[["__scopeId","data-v-524727e1"]]),k=x(W),D=x(te),oe={title:"Example/Collapse",component:k,subcomponents:{CdCollapseItem:D},tags:["autodocs"]},d={render:e=>({components:{CdCollapse:k,CdCollapseItem:D},setup(){return{args:e}},template:`
    <cd-collapse v-bind="args">
      <cd-collapse-item name="a" title="Title a">
        <div>this is content a</div>
      </cd-collapse-item>
      <cd-collapse-item name="b" title="title b">
        <div>this is content b</div>
      </cd-collapse-item>
      <cd-collapse-item name="c" title="title c  disable" disabled>
        <div>this is content c</div>
      </cd-collapse-item>
    </cd-collapse>
    `}),args:{accordion:!0,modelValue:["a"]}};var _,y,w;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: args => ({
    components: {
      CdCollapse,
      CdCollapseItem
    },
    setup() {
      return {
        args
      };
    },
    template: \`
    <cd-collapse v-bind="args">
      <cd-collapse-item name="a" title="Title a">
        <div>this is content a</div>
      </cd-collapse-item>
      <cd-collapse-item name="b" title="title b">
        <div>this is content b</div>
      </cd-collapse-item>
      <cd-collapse-item name="c" title="title c  disable" disabled>
        <div>this is content c</div>
      </cd-collapse-item>
    </cd-collapse>
    \`
  }),
  args: {
    accordion: true,
    modelValue: ["a"]
  }
}`,...(w=(y=d.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};const ne=["Default"];export{d as Default,ne as __namedExportsOrder,oe as default};
