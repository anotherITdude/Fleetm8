import{u as b,aQ as f,j as a,ar as g,aV as P,ad as L,aW as w,r as m,n as B,aX as k,at as T,aY as _,$ as A,aS as C,as as S,aT as W,ap as D,ag as H,aU as E}from"./sanity-903f422c.js";const G=b.hr`
  background-color: var(--card-border-color);
  height: 1px;
  margin: 0;
  border: none;
`;function F(c){const{childItemId:n,items:t,isActive:o,layout:d,showIcons:i,title:r}=c,{collapsed:l}=L(),u=w(t==null?void 0:t.filter(e=>e.type!=="divider")),x=m.useCallback(e=>{var s;return((s=t==null?void 0:t.find((p,v)=>v===e))==null?void 0:s.type)==="divider"},[t]),h=m.useCallback(e=>{var s;const p=(s=e.displayOptions)==null?void 0:s.showIcon;return typeof p<"u"?p!==!1:i!==!1},[i]),I=m.useCallback((e,s)=>{const{virtualIndex:p}=s;if(e.type==="divider")return a.jsx(B,{marginBottom:1,children:a.jsx(G,{})},`divider-${p}`);const v=!o&&n===e.id,y=o&&n===e.id,j=e._id&&e.schemaType?{_id:e._id,_type:e.schemaType.name,title:e.title}:void 0;return a.jsx(k,{icon:h(e)?e.icon:!1,id:e.id,layout:d,marginBottom:1,pressed:v,schemaType:e.schemaType,selected:y,title:u(e).title,value:j},e.id)},[n,u,o,d,h]);return a.jsx(T,{overflow:l?"hidden":"auto",children:t&&t.length>0&&a.jsx(_,{activeItemDataAttr:"data-hovered",ariaLabel:r,canReceiveFocus:!0,getItemDisabled:x,itemHeight:51,items:t,onlyShowSelectionWhenActive:!0,paddingBottom:1,paddingX:3,renderItem:I,wrapAround:!1})})}const O=({index:c,menuItems:n,menuItemGroups:t,title:o})=>{const{features:d}=A(),{collapsed:i,isLast:r}=C(),l=r&&!i?-1:0;return a.jsx(S,{actions:a.jsx(W,{menuItems:n,menuItemGroups:t}),backButton:d.backButton&&c>0&&a.jsx(D,{as:H,"data-as":"a",icon:E,mode:"bleed",tooltipProps:{content:"Back"}}),tabIndex:l,title:o})};function U(c){const{childItemId:n,index:t,isActive:o,isSelected:d,pane:i,paneKey:r}=c,{defaultLayout:l,displayOptions:u,items:x,menuItems:h,menuItemGroups:I}=i,e=(u==null?void 0:u.showIcons)!==!1,{title:s}=f(i);return a.jsxs(g,{currentMaxWidth:350,"data-testid":"structure-tool-list-pane","data-ui":"ListPane",id:r,maxWidth:640,minWidth:320,selected:d,children:[P,a.jsx(O,{index:t,menuItems:h,menuItemGroups:I,title:s}),a.jsx(F,{childItemId:n,isActive:o,items:x,layout:l,showIcons:e,title:s},r)]})}export{U as default};
