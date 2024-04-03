"use strict";(self.webpackChunkquick_admin=self.webpackChunkquick_admin||[]).push([[4393],{4393:function(Ie,A,b){b.d(A,{Z:function(){return ce}});var o=b(67294),F=b(93967),m=b.n(F),K=b(98423),T=b(53124),Z=b(98675),X=b(87564),V=b(11941),J=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)i.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(t[a[r]]=e[a[r]]);return t},G=e=>{var{prefixCls:i,className:t,hoverable:a=!0}=e,r=J(e,["prefixCls","className","hoverable"]);const{getPrefixCls:d}=o.useContext(T.E_),g=d("card",i),h=m()(`${g}-grid`,t,{[`${g}-grid-hoverable`]:a});return o.createElement("div",Object.assign({},r,{className:h}))},n=b(54548),y=b(14747),Q=b(91945),U=b(45503);const Y=e=>{const{antCls:i,componentCls:t,headerHeight:a,cardPaddingBase:r,tabsMarginBottom:d}=e;return Object.assign(Object.assign({display:"flex",justifyContent:"center",flexDirection:"column",minHeight:a,marginBottom:-1,padding:`0 ${(0,n.bf)(r)}`,color:e.colorTextHeading,fontWeight:e.fontWeightStrong,fontSize:e.headerFontSize,background:e.headerBg,borderBottom:`${(0,n.bf)(e.lineWidth)} ${e.lineType} ${e.colorBorderSecondary}`,borderRadius:`${(0,n.bf)(e.borderRadiusLG)} ${(0,n.bf)(e.borderRadiusLG)} 0 0`},(0,y.dF)()),{"&-wrapper":{width:"100%",display:"flex",alignItems:"center"},"&-title":Object.assign(Object.assign({display:"inline-block",flex:1},y.vS),{[`
          > ${t}-typography,
          > ${t}-typography-edit-content
        `]:{insetInlineStart:0,marginTop:0,marginBottom:0}}),[`${i}-tabs-top`]:{clear:"both",marginBottom:d,color:e.colorText,fontWeight:"normal",fontSize:e.fontSize,"&-bar":{borderBottom:`${(0,n.bf)(e.lineWidth)} ${e.lineType} ${e.colorBorderSecondary}`}}})},q=e=>{const{cardPaddingBase:i,colorBorderSecondary:t,cardShadow:a,lineWidth:r}=e;return{width:"33.33%",padding:i,border:0,borderRadius:0,boxShadow:`
      ${(0,n.bf)(r)} 0 0 0 ${t},
      0 ${(0,n.bf)(r)} 0 0 ${t},
      ${(0,n.bf)(r)} ${(0,n.bf)(r)} 0 0 ${t},
      ${(0,n.bf)(r)} 0 0 0 ${t} inset,
      0 ${(0,n.bf)(r)} 0 0 ${t} inset;
    `,transition:`all ${e.motionDurationMid}`,"&-hoverable:hover":{position:"relative",zIndex:1,boxShadow:a}}},_=e=>{const{componentCls:i,iconCls:t,actionsLiMargin:a,cardActionsIconSize:r,colorBorderSecondary:d,actionsBg:g}=e;return Object.assign(Object.assign({margin:0,padding:0,listStyle:"none",background:g,borderTop:`${(0,n.bf)(e.lineWidth)} ${e.lineType} ${d}`,display:"flex",borderRadius:`0 0 ${(0,n.bf)(e.borderRadiusLG)} ${(0,n.bf)(e.borderRadiusLG)}`},(0,y.dF)()),{"& > li":{margin:a,color:e.colorTextDescription,textAlign:"center","> span":{position:"relative",display:"block",minWidth:e.calc(e.cardActionsIconSize).mul(2).equal(),fontSize:e.fontSize,lineHeight:e.lineHeight,cursor:"pointer","&:hover":{color:e.colorPrimary,transition:`color ${e.motionDurationMid}`},[`a:not(${i}-btn), > ${t}`]:{display:"inline-block",width:"100%",color:e.colorTextDescription,lineHeight:(0,n.bf)(e.fontHeight),transition:`color ${e.motionDurationMid}`,"&:hover":{color:e.colorPrimary}},[`> ${t}`]:{fontSize:r,lineHeight:(0,n.bf)(e.calc(r).mul(e.lineHeight).equal())}},"&:not(:last-child)":{borderInlineEnd:`${(0,n.bf)(e.lineWidth)} ${e.lineType} ${d}`}}})},k=e=>Object.assign(Object.assign({margin:`${(0,n.bf)(e.calc(e.marginXXS).mul(-1).equal())} 0`,display:"flex"},(0,y.dF)()),{"&-avatar":{paddingInlineEnd:e.padding},"&-detail":{overflow:"hidden",flex:1,"> div:not(:last-child)":{marginBottom:e.marginXS}},"&-title":Object.assign({color:e.colorTextHeading,fontWeight:e.fontWeightStrong,fontSize:e.fontSizeLG},y.vS),"&-description":{color:e.colorTextDescription}}),ee=e=>{const{componentCls:i,cardPaddingBase:t,colorFillAlter:a}=e;return{[`${i}-head`]:{padding:`0 ${(0,n.bf)(t)}`,background:a,"&-title":{fontSize:e.fontSize}},[`${i}-body`]:{padding:`${(0,n.bf)(e.padding)} ${(0,n.bf)(t)}`}}},te=e=>{const{componentCls:i}=e;return{overflow:"hidden",[`${i}-body`]:{userSelect:"none"}}},ae=e=>{const{antCls:i,componentCls:t,cardShadow:a,cardHeadPadding:r,colorBorderSecondary:d,boxShadowTertiary:g,cardPaddingBase:h,extraColor:u}=e;return{[t]:Object.assign(Object.assign({},(0,y.Wf)(e)),{position:"relative",background:e.colorBgContainer,borderRadius:e.borderRadiusLG,[`&:not(${t}-bordered)`]:{boxShadow:g},[`${t}-head`]:Y(e),[`${t}-extra`]:{marginInlineStart:"auto",color:u,fontWeight:"normal",fontSize:e.fontSize},[`${t}-body`]:Object.assign({padding:h,borderRadius:` 0 0 ${(0,n.bf)(e.borderRadiusLG)} ${(0,n.bf)(e.borderRadiusLG)}`},(0,y.dF)()),[`${t}-grid`]:q(e),[`${t}-cover`]:{"> *":{display:"block",width:"100%"},[`img, img + ${i}-image-mask`]:{borderRadius:`${(0,n.bf)(e.borderRadiusLG)} ${(0,n.bf)(e.borderRadiusLG)} 0 0`}},[`${t}-actions`]:_(e),[`${t}-meta`]:k(e)}),[`${t}-bordered`]:{border:`${(0,n.bf)(e.lineWidth)} ${e.lineType} ${d}`,[`${t}-cover`]:{marginTop:-1,marginInlineStart:-1,marginInlineEnd:-1}},[`${t}-hoverable`]:{cursor:"pointer",transition:`box-shadow ${e.motionDurationMid}, border-color ${e.motionDurationMid}`,"&:hover":{borderColor:"transparent",boxShadow:a}},[`${t}-contain-grid`]:{borderRadius:`${(0,n.bf)(e.borderRadiusLG)} ${(0,n.bf)(e.borderRadiusLG)} 0 0 `,[`${t}-body`]:{display:"flex",flexWrap:"wrap"},[`&:not(${t}-loading) ${t}-body`]:{marginBlockStart:e.calc(e.lineWidth).mul(-1).equal(),marginInlineStart:e.calc(e.lineWidth).mul(-1).equal(),padding:0}},[`${t}-contain-tabs`]:{[`> ${t}-head`]:{minHeight:0,[`${t}-head-title, ${t}-extra`]:{paddingTop:r}}},[`${t}-type-inner`]:ee(e),[`${t}-loading`]:te(e),[`${t}-rtl`]:{direction:"rtl"}}},re=e=>{const{componentCls:i,cardPaddingSM:t,headerHeightSM:a,headerFontSizeSM:r}=e;return{[`${i}-small`]:{[`> ${i}-head`]:{minHeight:a,padding:`0 ${(0,n.bf)(t)}`,fontSize:r,[`> ${i}-head-wrapper`]:{[`> ${i}-extra`]:{fontSize:e.fontSize}}},[`> ${i}-body`]:{padding:t}},[`${i}-small${i}-contain-tabs`]:{[`> ${i}-head`]:{[`${i}-head-title, ${i}-extra`]:{paddingTop:0,display:"flex",alignItems:"center"}}}}},ie=e=>({headerBg:"transparent",headerFontSize:e.fontSizeLG,headerFontSizeSM:e.fontSize,headerHeight:e.fontSizeLG*e.lineHeightLG+e.padding*2,headerHeightSM:e.fontSize*e.lineHeight+e.paddingXS*2,actionsBg:e.colorBgContainer,actionsLiMargin:`${e.paddingSM}px 0`,tabsMarginBottom:-e.padding-e.lineWidth,extraColor:e.colorText});var ne=(0,Q.I$)("Card",e=>{const i=(0,U.TS)(e,{cardShadow:e.boxShadowCard,cardHeadPadding:e.padding,cardPaddingBase:e.paddingLG,cardActionsIconSize:e.fontSize,cardPaddingSM:12});return[ae(i),re(i)]},ie),H=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)i.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(t[a[r]]=e[a[r]]);return t};const oe=e=>{const{actionClasses:i,actions:t=[],actionStyle:a}=e;return o.createElement("ul",{className:i,style:a},t.map((r,d)=>{const g=`action-${d}`;return o.createElement("li",{style:{width:`${100/t.length}%`},key:g},o.createElement("span",null,r))}))};var se=o.forwardRef((e,i)=>{const{prefixCls:t,className:a,rootClassName:r,style:d,extra:g,headStyle:h={},bodyStyle:u={},title:v,loading:C,bordered:x=!0,size:O,type:j,cover:L,actions:P,tabList:z,children:E,activeTabKey:I,defaultActiveTabKey:ge,tabBarExtraContent:be,hoverable:fe,tabProps:me={},classNames:N,styles:w}=e,ue=H(e,["prefixCls","className","rootClassName","style","extra","headStyle","bodyStyle","title","loading","bordered","size","type","cover","actions","tabList","children","activeTabKey","defaultActiveTabKey","tabBarExtraContent","hoverable","tabProps","classNames","styles"]),{getPrefixCls:ye,direction:he,card:f}=o.useContext(T.E_),$e=c=>{var s;(s=e.onTabChange)===null||s===void 0||s.call(e,c)},$=c=>{var s;return m()((s=f==null?void 0:f.classNames)===null||s===void 0?void 0:s[c],N==null?void 0:N[c])},p=c=>{var s;return Object.assign(Object.assign({},(s=f==null?void 0:f.styles)===null||s===void 0?void 0:s[c]),w==null?void 0:w[c])},pe=o.useMemo(()=>{let c=!1;return o.Children.forEach(E,s=>{s&&s.type&&s.type===G&&(c=!0)}),c},[E]),l=ye("card",t),[ve,Se,Ce]=ne(l),xe=o.createElement(X.Z,{loading:!0,active:!0,paragraph:{rows:4},title:!1},E),R=I!==void 0,Oe=Object.assign(Object.assign({},me),{[R?"activeKey":"defaultActiveKey"]:R?I:ge,tabBarExtraContent:be});let W;const S=(0,Z.Z)(O),je=!S||S==="default"?"large":S,D=z?o.createElement(V.Z,Object.assign({size:je},Oe,{className:`${l}-head-tabs`,onChange:$e,items:z.map(c=>{var{tab:s}=c,M=H(c,["tab"]);return Object.assign({label:s},M)})})):null;if(v||g||D){const c=m()(`${l}-head`,$("header")),s=m()(`${l}-head-title`,$("title")),M=m()(`${l}-extra`,$("extra")),Le=Object.assign(Object.assign({},h),p("header"));W=o.createElement("div",{className:c,style:Le},o.createElement("div",{className:`${l}-head-wrapper`},v&&o.createElement("div",{className:s,style:p("title")},v),g&&o.createElement("div",{className:M,style:p("extra")},g)),D)}const ze=m()(`${l}-cover`,$("cover")),Ee=L?o.createElement("div",{className:ze,style:p("cover")},L):null,Te=m()(`${l}-body`,$("body")),Be=Object.assign(Object.assign({},u),p("body")),Pe=o.createElement("div",{className:Te,style:Be},C?xe:E),Ne=m()(`${l}-actions`,$("actions")),we=P&&P.length?o.createElement(oe,{actionClasses:Ne,actionStyle:p("actions"),actions:P}):null,Me=(0,K.Z)(ue,["onTabChange"]),Ge=m()(l,f==null?void 0:f.className,{[`${l}-loading`]:C,[`${l}-bordered`]:x,[`${l}-hoverable`]:fe,[`${l}-contain-grid`]:pe,[`${l}-contain-tabs`]:z&&z.length,[`${l}-${S}`]:S,[`${l}-type-${j}`]:!!j,[`${l}-rtl`]:he==="rtl"},a,r,Se,Ce),He=Object.assign(Object.assign({},f==null?void 0:f.style),d);return ve(o.createElement("div",Object.assign({ref:i},Me,{className:Ge,style:He}),W,Ee,Pe,we))}),le=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)i.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(t[a[r]]=e[a[r]]);return t},de=e=>{const{prefixCls:i,className:t,avatar:a,title:r,description:d}=e,g=le(e,["prefixCls","className","avatar","title","description"]),{getPrefixCls:h}=o.useContext(T.E_),u=h("card",i),v=m()(`${u}-meta`,t),C=a?o.createElement("div",{className:`${u}-meta-avatar`},a):null,x=r?o.createElement("div",{className:`${u}-meta-title`},r):null,O=d?o.createElement("div",{className:`${u}-meta-description`},d):null,j=x||O?o.createElement("div",{className:`${u}-meta-detail`},x,O):null;return o.createElement("div",Object.assign({},g,{className:v}),C,j)};const B=se;B.Grid=G,B.Meta=de;var ce=B}}]);
