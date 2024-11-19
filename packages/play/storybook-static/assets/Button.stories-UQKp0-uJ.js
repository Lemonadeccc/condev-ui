import{f as Q,w as B,u as c,e as g,c as W}from"./index-wT5uinjA.js";import{c as q,s as K,a as Z,B as E}from"./index-biE01mD0.js";import{d as P,u as nn,b as u,e as tn,f as en,o as m,g as _,n as on,j as an,k as sn,p as rn,r as cn,t as b,l as ln,m as v,q as un,s as pn,v as S,x as D}from"./vue.esm-bundler-lgVW8fIU.js";const X=Symbol("BUTTON_GROUP_CTX_KEY"),dn=q(P({name:"CdButton",__name:"Button",props:{tag:{default:"button"},type:{},size:{},nativeType:{default:"button"},disabled:{type:Boolean},loading:{type:Boolean},icon:{},plain:{type:Boolean},round:{type:Boolean},circle:{type:Boolean},loadingIcon:{},autofocus:{type:Boolean},useThrottle:{type:Boolean,default:!0},throttleDuration:{default:500}},emits:["click"],setup(n,{expose:o,emit:a}){const e=n,F=a,J=nn(),f=u(()=>({marginRight:J.default?"6px":"0px"})),s=tn(X,void 0),k=en(),C=u(()=>(s==null?void 0:s.size)??(e==null?void 0:e.size)??""),x=u(()=>(s==null?void 0:s.type)??(e==null?void 0:e.type)??""),w=u(()=>(s==null?void 0:s.disabled)||(e==null?void 0:e.disabled)||!1),T=t=>F("click",t),L=Z(T,e.throttleDuration,{trailing:!1});return o({ref:k}),(t,z)=>(m(),_(sn(t.tag),{autofocus:t.autofocus,class:on(["cd-button",{[`cd-button--${x.value}`]:x.value,[`cd-button--${C.value}`]:C.value,"is-plain":t.plain,"is-round":t.round,"is-circle":t.circle,"is-disabled":w.value,"is-loading":t.loading}]),ref_key:"_ref",ref:k,type:t.tag==="button"?t.nativeType:void 0,disabled:!(!w.value&&!t.loading)||void 0,onClick:z[0]||(z[0]=h=>t.useThrottle?an(L)(h):T(h))},{default:un(()=>[t.loading?v(t.$slots,"loading",{key:0},()=>[pn(E,{class:"loading-icon",icon:t.loadingIcon??"spinner",style:S(f.value),size:"1x",spin:""},null,8,["icon","style"])],!0):D("",!0),t.icon&&!t.loading?(m(),_(E,{key:1,icon:t.icon,style:S(f.value),size:"1x"},null,8,["icon","style"])):D("",!0),v(t.$slots,"default",{},void 0,!0)]),_:3},8,["autofocus","class","type","disabled"]))}}),[["__scopeId","data-v-a75e9691"]]),gn={class:"cd-button-group"},yn=q(P({name:"CdButtonGroup",__name:"ButtonGroup",props:{size:{},type:{},disabled:{type:Boolean}},setup(n){const o=n;return rn(X,cn({size:b(o,"size"),type:b(o,"type"),disabled:b(o,"disabled")})),(a,e)=>(m(),ln("div",gn,[v(a.$slots,"default",{},void 0,!0)]))}}),[["__scopeId","data-v-766f334a"]]),l=K(dn),Y=K(yn),Bn={title:"Example/Button",component:l,tags:["autodocs"],subcomponents:{ButtonGroup:Y},argTypes:{type:{control:{type:"select"},options:["primary","success","warning","danger","info",""]},size:{control:{type:"select"},options:["large","default","small",""]},disabled:{control:"boolean"},loading:{control:"boolean"},useThrottle:{control:"boolean"},throttleDuration:{control:"number"},autofocus:{control:"boolean"},tag:{control:{type:"select"},options:["button","a","div"]},nativeType:{control:{type:"select"},options:["button","submit","reset",""]},icon:{control:{type:"text"}},loadingIcon:{control:{type:"text"}}},args:{onClick:Q()}},y=n=>`
<div style="margin:5px">
  ${n}
</div>
`,i={argTypes:{content:{control:{type:"text"}}},args:{type:"primary",content:"Button"},render:n=>({components:{CdButton:l},setup(){return{args:n}},template:y('<cd-button v-bind="args">{{args.content}}</cd-button>')}),play:async({canvasElement:n,args:o,step:a})=>{const e=B(n);await a("click btn",async()=>{await c.click(e.getByRole("button"))}),g(o.onClick).toHaveBeenCalled()}},p={argTypes:{content:{control:{type:"text"}}},args:{content:"Button",autofocus:!0},render:n=>({components:{CdButton:l},setup(){return{args:n}},template:y(`
        <p>请点击浏览器的刷新页面来获取按钮聚焦</p>
        <cd-button data-testid="story-test-btn" v-bind="args">{{args.content}}</cd-button>
      `)}),play:async({args:n})=>{await c.keyboard("{enter}"),g(n.onClick).toHaveBeenCalledOnce(),W()}},r={args:{icon:"search"},render:n=>({components:{CdButton:l},setup(){return{args:n}},template:y(`
        <cd-button circle v-bind="args" />
      `)}),play:async({canvasElement:n,args:o,step:a})=>{const e=B(n);await a("click button",async()=>{await c.click(e.getByRole("button"))}),g(o.onClick).toHaveBeenCalled()}};r.parameters={};const d={argTypes:{groupType:{control:{type:"select"},options:["primary","success","warning","danger","info",""]},groupSize:{control:{type:"select"},options:["large","default","small",""]},groupDisabled:{control:"boolean"},content1:{control:{type:"text"},defaultValue:"Button1"},content2:{control:{type:"text"},defaultValue:"Button2"}},args:{round:!0,content1:"Button1",content2:"Button2"},render:n=>({components:{CdButton:l,CdButtonGroup:Y},setup(){return{args:n}},template:y(`
       <cd-button-group :type="args.groupType" :size="args.groupSize" :disabled="args.groupDisabled">
         <cd-button v-bind="args">{{args.content1}}</cd-button>
         <cd-button v-bind="args">{{args.content2}}</cd-button>
       </cd-button-group>
    `)}),play:async({canvasElement:n,args:o,step:a})=>{const e=B(n);await a("click btn1",async()=>{await c.click(e.getByText("Button1"))}),await a("click btn2",async()=>{await c.click(e.getByText("Button2"))}),g(o.onClick).toHaveBeenCalled()}};var G,H,$;i.parameters={...i.parameters,docs:{...(G=i.parameters)==null?void 0:G.docs,source:{originalSource:`{
  argTypes: {
    content: {
      control: {
        type: "text"
      }
    }
  },
  args: {
    type: "primary",
    content: "Button"
  },
  render: args => ({
    components: {
      CdButton
    },
    setup() {
      return {
        args
      };
    },
    template: container(\`<cd-button v-bind="args">{{args.content}}</cd-button>\`)
  }),
  play: async ({
    canvasElement,
    args,
    step
  }) => {
    const canvas = within(canvasElement);
    await step("click btn", async () => {
      await userEvent.click(canvas.getByRole("button"));
    });
    expect(args.onClick).toHaveBeenCalled();
  }
}`,...($=(H=i.parameters)==null?void 0:H.docs)==null?void 0:$.source}}};var I,R,V;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
  argTypes: {
    content: {
      control: {
        type: "text"
      }
    }
  },
  args: {
    content: "Button",
    autofocus: true
  },
  render: args => ({
    components: {
      CdButton
    },
    setup() {
      return {
        args
      };
    },
    template: container(\`
        <p>请点击浏览器的刷新页面来获取按钮聚焦</p>
        <cd-button data-testid="story-test-btn" v-bind="args">{{args.content}}</cd-button>
      \`)
  }),
  play: async ({
    args
  }) => {
    await userEvent.keyboard("{enter}");
    expect(args.onClick).toHaveBeenCalledOnce();
    clearAllMocks();
  }
}`,...(V=(R=p.parameters)==null?void 0:R.docs)==null?void 0:V.source}}};var O,A,j;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    icon: "search"
  },
  render: args => ({
    components: {
      CdButton
    },
    setup() {
      return {
        args
      };
    },
    template: container(\`
        <cd-button circle v-bind="args" />
      \`)
  }),
  play: async ({
    canvasElement,
    args,
    step
  }) => {
    const canvas = within(canvasElement);
    await step("click button", async () => {
      await userEvent.click(canvas.getByRole("button"));
    });
    expect(args.onClick).toHaveBeenCalled();
  }
}`,...(j=(A=r.parameters)==null?void 0:A.docs)==null?void 0:j.source}}};var N,M,U;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  argTypes: {
    groupType: {
      control: {
        type: "select"
      },
      options: ["primary", "success", "warning", "danger", "info", ""]
    },
    groupSize: {
      control: {
        type: "select"
      },
      options: ["large", "default", "small", ""]
    },
    groupDisabled: {
      control: "boolean"
    },
    content1: {
      control: {
        type: "text"
      },
      defaultValue: "Button1"
    },
    content2: {
      control: {
        type: "text"
      },
      defaultValue: "Button2"
    }
  },
  args: {
    round: true,
    content1: "Button1",
    content2: "Button2"
  },
  render: args => ({
    components: {
      CdButton,
      CdButtonGroup
    },
    setup() {
      return {
        args
      };
    },
    template: container(\`
       <cd-button-group :type="args.groupType" :size="args.groupSize" :disabled="args.groupDisabled">
         <cd-button v-bind="args">{{args.content1}}</cd-button>
         <cd-button v-bind="args">{{args.content2}}</cd-button>
       </cd-button-group>
    \`)
  }),
  play: async ({
    canvasElement,
    args,
    step
  }) => {
    const canvas = within(canvasElement);
    await step("click btn1", async () => {
      await userEvent.click(canvas.getByText("Button1"));
    });
    await step("click btn2", async () => {
      await userEvent.click(canvas.getByText("Button2"));
    });
    expect(args.onClick).toHaveBeenCalled();
  }
}`,...(U=(M=d.parameters)==null?void 0:M.docs)==null?void 0:U.source}}};const fn=["Default","Autofocus","Circle","Group"];export{p as Autofocus,r as Circle,i as Default,d as Group,fn as __namedExportsOrder,Bn as default};
