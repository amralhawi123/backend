import{j as e,k as h,a8 as g,e9 as O,a as S,e as m,T as k,h as pe,r as F,ai as L,I as U,f as ge,fA as me,bA as Y,aK as z,a_ as J,fB as fe,g as K,bc as he,cz as xe,aY as ye,b as X,af as be,s as je,D as B,cE as Ce,ak as we,z as $e,ex as Te,a$ as ve,aq as _,fC as ke,B as Q}from"./strapi-Ld8envQN.js";import{u as D,g as y,C as G,a as Z,A as De,S as Me}from"./index-Doxoftr0.js";import{d as Re,e as Fe,D as Se,f as Ae,a as Ee,S as Ie,v as Le,P as Oe,c as Ne,C as Ue}from"./sortable.esm-DtCVL93Q.js";import"./groupBy-FNK_cXq2.js";import"./_baseEach-E0PE5Wf4.js";import"./sortBy-DLlLYKls.js";import"./_baseMap-DRxGhjzr.js";import"./index-DnWwH8CI.js";import"./index-BRVyLNfZ.js";import"./_arrayIncludesWith-BNzMLSv9.js";const Be=t=>{let{transform:n}=t;return{...n,x:0}},Pe=h(g)`
  position: absolute;
  left: -3.4rem;
  top: 0px;

  &:before {
    content: '';
    width: 0.4rem;
    height: 1.2rem;
    background: ${({theme:t,color:n})=>t.colors[n]};
    display: block;
  }
`,ze=h.svg`
  position: relative;
  flex-shrink: 0;
  transform: translate(-0.5px, -1px);

  * {
    fill: ${({theme:t,color:n})=>t.colors[n]};
  }
`,Ze=t=>e.jsx(Pe,{children:e.jsx(ze,{width:"20",height:"23",viewBox:"0 0 20 23",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t,children:e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.02477 14.7513C8.65865 17.0594 11.6046 18.6059 17.5596 18.8856C18.6836 18.9384 19.5976 19.8435 19.5976 20.9688V20.9688C19.5976 22.0941 18.6841 23.0125 17.5599 22.9643C10.9409 22.6805 6.454 20.9387 3.75496 17.1258C0.937988 13.1464 0.486328 7.39309 0.486328 0.593262H4.50974C4.50974 7.54693 5.06394 11.9813 7.02477 14.7513Z"})})}),Ve=t=>{let n;switch(t){case"date":case"datetime":case"time":case"timestamp":n="date";break;case"integer":case"biginteger":case"decimal":case"float":n="number";break;case"string":case"text":n="text";break;case"":n="relation";break;default:n=t}return n},ee=h(g)`
  &.component-row,
  &.dynamiczone-row {
    position: relative;

    > ul:first-of-type {
      padding: 0 0 0 104px;
      position: relative;

      &::before {
        content: '';
        width: 0.4rem;
        height: ${({$isFromDynamicZone:t})=>t?"calc(100% - 65px)":"calc(100%)"};
        position: absolute;
        left: 7rem;
        border-radius: 4px;

        ${({$isFromDynamicZone:t,$isChildOfDynamicZone:n,theme:o})=>n?`background-color: ${o.colors.primary200};`:t?`background-color: ${o.colors.primary200};`:`background: ${o.colors.neutral150};`}
      }
    }
  }

  &.dynamiczone-row > ul:first-of-type {
    padding: 0;
  }
`,te=({component:t,isFromDynamicZone:n=!1,firstLoopComponentUid:o})=>{const{components:s}=D(),l=O(s,t);return e.jsx(ee,{$isChildOfDynamicZone:n,className:"component-row",children:e.jsx(re,{type:l,firstLoopComponentUid:o||t,isFromDynamicZone:n,isSub:!0,secondLoopComponentUid:o?t:null})})},We=({type:t,customField:n=null,repeatable:o=!1,multiple:s=!1})=>{const{formatMessage:l}=S();let a=t;return["integer","biginteger","float","decimal"].includes(t)?a="number":["string"].includes(t)&&(a="text"),n?l({id:y("attribute.customField"),defaultMessage:"Custom field"}):e.jsxs(e.Fragment,{children:[o&&l({id:y("component.repeatable"),defaultMessage:"Repeatable"}),s&&l({id:y("media.multiple"),defaultMessage:"Multiple"})," ",l({id:y(`attribute.${a}`),defaultMessage:t})]})},He=({isActive:t=!1,icon:n="dashboard"})=>{const o=G[n]||G.dashboard;return e.jsx(m,{alignItems:"center",background:t?"primary200":"neutral200",justifyContent:"center",height:8,width:8,borderRadius:"50%",children:e.jsx(o,{height:"2rem",width:"2rem"})})},ne=h(g)`
  position: absolute;
  display: none;
  top: 5px;
  right: 0.8rem;

  svg {
    width: 1rem;
    height: 1rem;

    path {
      fill: ${({theme:t})=>t.colors.primary600};
    }
  }
`,qe=h(m)`
  width: 14rem;
  height: 8rem;
  position: relative;
  border: 1px solid ${({theme:t})=>t.colors.neutral200};
  background: ${({theme:t})=>t.colors.neutral100};
  border-radius: ${({theme:t})=>t.borderRadius};
  max-width: 100%;

  &.active,
  &:focus,
  &:hover {
    border: 1px solid ${({theme:t})=>t.colors.primary200};
    background: ${({theme:t})=>t.colors.primary100};
    color: ${({theme:t})=>t.colors.primary600};

    ${ne} {
      display: block;
    }

    /* > ComponentIcon */
    > div:first-child {
      background: ${({theme:t})=>t.colors.primary200};
      color: ${({theme:t})=>t.colors.primary600};

      svg {
        path {
          fill: ${({theme:t})=>t.colors.primary600};
        }
      }
    }
  }
`,_e=({component:t,dzName:n,index:o,isActive:s=!1,isInDevelopmentMode:l=!1,onClick:a,forTarget:i,targetUid:c,disabled:f})=>{const{components:b,removeComponentFromDynamicZone:T}=D(),r=O(b,t),{icon:d,displayName:u}=r?.info||{},j=w=>{w.stopPropagation(),T({forTarget:i,targetUid:c,dzName:n,componentToRemoveIndex:o})};return e.jsxs(qe,{alignItems:"center",direction:"column",className:s?"active":"",borderRadius:"borderRadius",justifyContent:"center",paddingLeft:4,paddingRight:4,shrink:0,onClick:a,role:"tab",tabIndex:s?0:-1,cursor:"pointer","aria-selected":s,"aria-controls":`dz-${n}-panel-${o}`,id:`dz-${n}-tab-${o}`,children:[e.jsx(He,{icon:d,isActive:s}),e.jsx(g,{marginTop:1,maxWidth:"100%",children:e.jsx(k,{variant:"pi",fontWeight:"bold",ellipsis:!0,children:u})}),l&&!f&&e.jsx(ne,{cursor:"pointer",tag:"button",onClick:j,children:e.jsx(pe,{})})]})},Ge=h(L)`
  width: 3.2rem;
  height: 3.2rem;
  padding: 0.9rem;
  border-radius: 6.4rem;
  background: ${({theme:t,disabled:n})=>n?t.colors.neutral100:t.colors.primary100};
  path {
    fill: ${({theme:t,disabled:n})=>n?t.colors.neutral600:t.colors.primary600};
  }
`,Ye=h(m)`
  width: 100%;
  overflow-x: auto;

  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`,Je=h(m)`
  flex-shrink: 0;
  width: 14rem;
  height: 8rem;
  justify-content: center;
  align-items: center;
`,Ke=({components:t=[],addComponent:n,name:o,forTarget:s,targetUid:l,disabled:a=!1})=>{const{isInDevelopmentMode:i}=D(),[c,f]=F.useState(0),{formatMessage:b}=S(),T=d=>{c!==d&&f(d)},r=()=>{n(o)};return e.jsx(ee,{className:"dynamiczone-row",$isFromDynamicZone:!0,children:e.jsxs(g,{children:[e.jsx(g,{padding:2,paddingLeft:"104px",children:e.jsxs(Ye,{gap:2,children:[i&&e.jsx("button",{type:"button",onClick:r,disabled:a,style:{cursor:a?"not-allowed":"pointer"},children:e.jsxs(Je,{direction:"column",alignItems:"stretch",gap:1,children:[e.jsx(Ge,{disabled:a}),e.jsx(k,{variant:"pi",fontWeight:"bold",textColor:a?"neutral600":"primary600",children:b({id:y("button.component.add"),defaultMessage:"Add a component"})})]})}),e.jsx(m,{role:"tablist",gap:2,children:t.map((d,u)=>e.jsx(_e,{dzName:o||"",index:u,component:d,isActive:c===u,isInDevelopmentMode:i,onClick:()=>T(u),forTarget:s,targetUid:l,disabled:a},d))})]})}),e.jsx(g,{children:t.map((d,u)=>e.jsx(g,{id:`dz-${o}-panel-${u}`,role:"tabpanel","aria-labelledby":`dz-${o}-tab-${u}`,style:{display:c===u?"block":"none"},children:e.jsx(te,{isFromDynamicZone:!0,component:d},d)},d))})]})})},Xe=h(m)`
  justify-content: space-between;

  border-top: ${({theme:t,$isOverlay:n})=>n?"none":`1px solid ${t.colors.neutral150}`};

  padding-top: ${({theme:t})=>t.spaces[4]};
  padding-bottom: ${({theme:t})=>t.spaces[4]};

  opacity: ${({$isDragging:t})=>t?0:1};
  align-items: center;
`,Qe=h(g)`
  list-style: none;
  list-style-type: none;
`,oe=F.forwardRef((t,n)=>{const{style:o,...s}=t;return e.jsx(Qe,{tag:"li",ref:n,...t.attributes,style:o,background:"neutral0",shadow:t.isOverlay?"filterShadow":"none","aria-label":t.item.name,children:e.jsx(et,{...s})})}),et=F.memo(t=>{const{item:n,firstLoopComponentUid:o,isFromDynamicZone:s,addComponentToDZ:l,secondLoopComponentUid:a,type:i,isDragging:c,isOverlay:f,handleRef:b,listeners:T}=t,r=f||c,[d,u]=F.useState(!0),j=i.status==="REMOVED",{contentTypes:w,removeAttribute:A,isInDevelopmentMode:M}=D(),{onOpenModalEditField:E,onOpenModalEditCustomField:R}=Z(),{formatMessage:x}=S(),p=n.status==="REMOVED",C=n.type==="relation"&&n.relation.includes("morph"),v=["integer","biginteger","float","decimal"].includes(n.type)?"number":n.type,I=n.type==="relation"?O(w,n.target):null,V=O(I,"plugin"),ae="target"in n&&n.target?"relation":v,W=()=>{if(!C&&n.configurable!==!1){const $=a||o||i.uid,q=Ve(n.type),ue=n.type==="component"?"2":null;n.customField?R({forTarget:i.modelType,targetUid:$,attributeName:n.name,attributeType:q,customFieldUid:n.customField}):E({forTarget:i.modelType,targetUid:$,attributeName:n.name,attributeType:q,step:ue})}};let N;a&&o?N=2:o?N=1:N=0;const H=!j&&!p,le=!j&&!p,de=j||p?"not-allowed":"move",ce=M&&n.configurable!==!1&&!C&&H;return e.jsxs(e.Fragment,{children:[e.jsxs(Xe,{$isOverlay:f,$isDragging:c,onClick:ce?W:void 0,paddingLeft:4,paddingRight:4,children:[e.jsxs(m,{alignItems:"center",overflow:"hidden",gap:2,children:[N!==0&&!f&&e.jsx(Ze,{color:s?"primary200":"neutral150"}),M&&e.jsx(U,{cursor:de,role:"Handle",ref:b,...T,variant:"ghost",withTooltip:!1,label:`${x({id:"app.utils.drag",defaultMessage:"Drag"})} ${n.name}`,disabled:j||p,children:e.jsx(ge,{})}),e.jsxs(m,{gap:4,children:[e.jsxs(m,{gap:4,alignItems:"center",children:[e.jsx(De,{type:ae,customField:n.customField}),e.jsxs(k,{textColor:"neutral800",fontWeight:"bold",textDecoration:p?"line-through":"none",ellipsis:!0,overflow:"hidden",children:[n.name,"required"in n&&n.required&&e.jsx(k,{textColor:"danger600",children:"* "})]})]}),e.jsx(m,{children:e.jsxs(k,{textColor:"neutral600",children:[e.jsx(We,{type:n.type,customField:n.customField,repeatable:"repeatable"in n&&n.repeatable,multiple:"multiple"in n&&n.multiple}),n.type==="relation"&&e.jsxs(e.Fragment,{children:[" (",me(n.relation,n.targetAttribute),") ",I&&x({id:y("modelPage.attribute.with"),defaultMessage:"with"})," ",I&&e.jsx(Y,{onClick:$=>$.stopPropagation(),tag:J,to:`/plugins/content-type-builder/content-types/${I.uid}`,children:z(I.info.displayName)}),V&&`(${x({id:y("from"),defaultMessage:"from"})}: ${V})`]}),n.type==="component"&&e.jsx(nt,{uid:n.component})]})})]})]}),e.jsx(g,{children:e.jsx(m,{justifyContent:"flex-end",gap:1,onClick:$=>$.stopPropagation(),children:e.jsxs(e.Fragment,{children:[e.jsx(g,{children:n.status&&e.jsx(Me,{status:n.status})}),["component","dynamiczone"].includes(n.type)&&e.jsx(U,{onClick:$=>{$.preventDefault(),$.stopPropagation(),u(!d)},"aria-expanded":d,label:x({id:"app.utils.toggle",defaultMessage:"Toggle"}),variant:"ghost",withTooltip:!1,children:e.jsx(fe,{"aria-hidden":!0,fill:"neutral500",style:{transform:`rotate(${d?"0deg":"-90deg"})`,transition:"transform 0.5s"}})}),M&&n.configurable!==!1?e.jsxs(e.Fragment,{children:[!C&&e.jsx(U,{onClick:W,label:`${x({id:"app.utils.edit",defaultMessage:"Edit"})} ${n.name}`,variant:"ghost",disabled:!H,children:e.jsx(K,{})}),e.jsx(U,{onClick:$=>{$.stopPropagation(),A({forTarget:i.modelType,targetUid:i.uid,attributeToRemoveName:n.name})},label:`${x({id:"global.delete",defaultMessage:"Delete"})} ${n.name}`,variant:"ghost",disabled:!le,children:e.jsx(he,{})})]}):e.jsx(m,{padding:2,children:e.jsx(xe,{fill:"neutral500"})})]})})})]}),e.jsxs(tt,{$shouldHideNestedInfos:r,$isOpen:d,children:[n.type==="component"&&e.jsx(te,{...n,isFromDynamicZone:s,firstLoopComponentUid:o}),n.type==="dynamiczone"&&e.jsx(Ke,{...n,disabled:j||n.status==="REMOVED",addComponent:l,forTarget:i.modelType,targetUid:i.uid})]})]})}),tt=h(g)`
  display: ${({$shouldHideNestedInfos:t})=>t?"none":"block"};
  max-height: ${({$isOpen:t})=>t?"9999px":"0px"};
  overflow: hidden;

  transition: ${({$isOpen:t})=>t?"max-height 1s ease-in-out":"max-height 0.5s cubic-bezier(0, 1, 0, 1)"};
`,nt=({uid:t})=>{const{components:n}=D(),o=O(n,t);return e.jsxs(e.Fragment,{children:[" (",e.jsx(Y,{onClick:s=>s.stopPropagation(),tag:J,to:`/plugins/content-type-builder/component-categories/${o.category}/${o.uid}`,children:z(o.info.displayName)}),")"]})},ie=h(g)`
  height: 2.4rem;
  width: 2.4rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    height: 1rem;
    width: 1rem;
  }

  svg path {
    fill: ${({theme:t,color:n})=>t.colors[`${n}600`]};
  }
`,se=h(g)`
  border-radius: 0 0 ${({theme:t})=>t.borderRadius} ${({theme:t})=>t.borderRadius};
  display: block;
  width: 100%;
  border: none;
  position: relative;
`,ot=({children:t,icon:n,color:o,...s})=>e.jsx(se,{paddingBottom:4,paddingTop:4,paddingLeft:"6rem",tag:"button",type:"button",...s,children:e.jsxs(m,{children:[e.jsx(ie,{color:o,"aria-hidden":!0,background:`${o}200`,children:n}),e.jsx(g,{paddingLeft:3,children:e.jsx(k,{variant:"pi",fontWeight:"bold",textColor:`${o}600`,children:t})})]})}),it=({children:t,icon:n,color:o,...s})=>e.jsxs("div",{children:[e.jsx(ye,{}),e.jsx(se,{tag:"button",background:`${o}100`,padding:5,...s,children:e.jsxs(m,{children:[e.jsx(ie,{color:o,"aria-hidden":!0,background:`${o}200`,children:n}),e.jsx(g,{paddingLeft:3,children:e.jsx(k,{variant:"pi",fontWeight:"bold",textColor:`${o}600`,children:t})})]})})]}),st=h(g)`
  white-space: nowrap;
  list-style: none;
  list-style-type: none;
`,rt=t=>{const{isInDevelopmentMode:n}=D(),{isDragging:o,attributes:s,listeners:l,setNodeRef:a,transform:i,transition:c,setActivatorNodeRef:f}=Ne({disabled:!n||t.item.status==="REMOVED"||t.type.status==="REMOVED",id:t.item.id,data:{index:t.item.index}}),b={transform:Ue.Transform.toString({x:i?.x??0,y:i?.y??0,scaleX:1,scaleY:1}),transition:c};return e.jsx(oe,{ref:a,handleRef:f,isDragging:o,attributes:s,listeners:l,style:b,...t})},re=({addComponentToDZ:t,firstLoopComponentUid:n,isFromDynamicZone:o=!1,isMain:s=!1,isSub:l=!1,secondLoopComponentUid:a,type:i})=>{const{formatMessage:c}=S(),{trackUsage:f}=X(),{isInDevelopmentMode:b,moveAttribute:T}=D(),{onOpenModalAddField:r}=Z(),d=i?.attributes.map((p,C)=>({id:`${i.uid}_${p.name}`,index:C,...p})),[u,j]=F.useState(null),w=i?.status==="REMOVED",A=Re(Fe(Oe));function M({active:p}){p&&j(p.id)}function E(p){const{active:C,over:v}=p;j(null),v&&C.id!==v.id&&T({forTarget:i.modelType,targetUid:i.uid,from:C.data.current.index,to:v.data.current.index})}const R=d.find(p=>p.id===u),x=()=>{w||(f("hasClickedCTBAddFieldBanner"),r({forTarget:i?.modelType,targetUid:i.uid}))};return i?.attributes.length===0&&s?e.jsx(be,{action:e.jsx(B,{onClick:x,size:"L",startIcon:e.jsx(L,{}),variant:"secondary",children:c({id:y("table.button.no-fields"),defaultMessage:"Add new field"})}),content:c(i.modelType==="contentType"?{id:y("table.content.no-fields.collection-type"),defaultMessage:"Add your first field to this Collection-Type"}:{id:y("table.content.no-fields.component"),defaultMessage:"Add your first field to this component"}),hasRadius:!0,icon:e.jsx(je,{width:"16rem"})}):e.jsxs(Se,{sensors:A,collisionDetection:Ae,onDragEnd:E,onDragStart:M,onDragCancel:()=>j(null),modifiers:[Be],children:[e.jsxs(st,{tag:"ul",children:[Ce.createPortal(e.jsx(Ee,{zIndex:10,children:R&&e.jsx(oe,{isOverlay:!0,item:R,firstLoopComponentUid:n,isFromDynamicZone:o,secondLoopComponentUid:a,type:i,addComponentToDZ:t})}),document.body),e.jsx(Ie,{items:d,strategy:Le,children:d.map(p=>e.jsx(rt,{item:p,firstLoopComponentUid:n,isFromDynamicZone:o,secondLoopComponentUid:a,type:i,addComponentToDZ:t},p.id))})]}),s&&b&&e.jsx(it,{cursor:w?"normal":"pointer",icon:e.jsx(L,{}),onClick:x,color:w?"neutral":"primary",children:c({id:y(`form.button.add.field.to.${i.modelType==="component"?"component":i.kind}`),defaultMessage:"Add another field"})}),l&&b&&e.jsx(ot,{cursor:w?"normal":"pointer",icon:e.jsx(L,{}),onClick:x,color:o&&!w?"primary":"neutral",children:c({id:y("form.button.add.field.to.component"),defaultMessage:"Add another field"})})]})},P={collectionTypesConfigurations:[{action:"plugin::content-manager.collection-types.configure-view",subject:null}],componentsConfigurations:[{action:"plugin::content-manager.components.configure-layout",subject:null}],singleTypesConfigurations:[{action:"plugin::content-manager.single-types.configure-view",subject:null}]},at=t=>t.modelType==="contentType"?t.kind==="singleType"?P.singleTypesConfigurations:P.collectionTypesConfigurations:P.componentsConfigurations,lt=t=>{switch(t.modelType){case"contentType":switch(t.kind){case"singleType":return`/content-manager/single-types/${t.uid}/configurations/edit`;case"collectionType":return`/content-manager/collection-types/${t.uid}/configurations/edit`}case"component":return`/content-manager/components/${t.uid}/configurations/edit`}},dt=h(B)`
  white-space: nowrap;
`,ct=F.memo(({disabled:t,type:n})=>{const{formatMessage:o}=S(),s=we(),l=at(n),a=o({id:"content-type-builder.form.button.configure-view",defaultMessage:"Configure the view"}),i=()=>{if(t)return!1;const b=lt(n);return s(b),!1},{isLoading:c,allowedActions:f}=$e(l);return c||!f.canConfigureView&&!f.canConfigureLayout?null:e.jsx(dt,{startIcon:e.jsx(Te,{}),variant:"tertiary",onClick:i,disabled:t,children:a})}),ut=h(Q.Header)`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,wt=()=>{const{isInDevelopmentMode:t,contentTypes:n,components:o,isLoading:s}=D(),{formatMessage:l}=S(),{trackUsage:a}=X(),{contentTypeUid:i,componentUid:c}=ve(),{onOpenModalAddComponentsToDZ:f,onOpenModalAddField:b,onOpenModalEditSchema:T}=Z(),r=i?n[i]:c?o[c]:null;if(s)return null;if(!r){const C=Object.values(n).filter(v=>v.visible===!0&&!v.plugin).map(v=>v.uid).sort();return C.length>0?e.jsx(_,{to:`/plugins/content-type-builder/content-types/${C[0]}`}):e.jsx(_,{to:"/plugins/content-type-builder/content-types/create-content-type"})}const d="plugin"in r&&r?.plugin!==void 0,u=i?"contentType":"component",j=r?.info?.displayName??"",w=t&&!d,A=C=>{f({dynamicZoneTarget:C,targetUid:r.uid})},M=()=>{if("kind"in r){r?.kind==="collectionType"&&a("willEditNameOfContentType"),r?.kind==="singleType"&&a("willEditNameOfSingleType"),T({modalType:u,forTarget:u,targetUid:r.uid,kind:r?.kind});return}T({modalType:u,forTarget:u,targetUid:r.uid})},E=l({id:y("table.button.no-fields"),defaultMessage:"Add new field"}),R=l({id:y("button.attributes.add.another"),defaultMessage:"Add another field"}),x=r.status==="REMOVED",p=t&&e.jsxs(m,{gap:2,children:[e.jsx(ct,{type:r,disabled:r.status==="NEW"||x},"link-to-cm-settings-view"),e.jsx(B,{startIcon:e.jsx(K,{}),variant:"tertiary",onClick:M,disabled:!w||x,children:l({id:"app.utils.edit",defaultMessage:"Edit"})}),e.jsx(B,{startIcon:e.jsx(L,{}),variant:"secondary",minWidth:"max-content",onClick:()=>{b({forTarget:u,targetUid:r.uid})},disabled:x,children:r.attributes.length===0?E:R})]});return e.jsxs(e.Fragment,{children:[x&&e.jsx(m,{background:"danger100",justifyContent:"center",padding:4,children:e.jsxs(m,{gap:2,children:[e.jsx(ke,{fill:"danger600",height:"2rem",width:"2rem"}),e.jsx(k,{children:l({id:y("table.warning.deleted"),defaultMessage:"This {kind} has been deleted"},{kind:r.modelType==="contentType"?"Content Type":"Component"})})]})}),e.jsx(ut,{id:"title",primaryAction:p,title:z(j)}),e.jsx(Q.Content,{children:e.jsx(g,{background:"neutral0",shadow:"filterShadow",hasRadius:!0,overflow:"auto",borderColor:"neutral150",children:e.jsx(re,{type:r,addComponentToDZ:A,isMain:!0})})})]})};export{wt as default};
