var st=Object.defineProperty,ut=Object.defineProperties;var pt=Object.getOwnPropertyDescriptors;var Qe=Object.getOwnPropertySymbols;var SA=Object.prototype.hasOwnProperty,yA=Object.prototype.propertyIsEnumerable;var gA=(e,o,a)=>o in e?st(e,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[o]=a,r=(e,o)=>{for(var a in o||(o={}))SA.call(o,a)&&gA(e,a,o[a]);if(Qe)for(var a of Qe(o))yA.call(o,a)&&gA(e,a,o[a]);return e},u=(e,o)=>ut(e,pt(o));var v=(e,o)=>{var a={};for(var n in e)SA.call(e,n)&&o.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&Qe)for(var n of Qe(e))o.indexOf(n)<0&&yA.call(e,n)&&(a[n]=e[n]);return a};import{c as dt,d as ct,p as mt,l as bt,j as A,T as ft,a as p,b as gt,C as St,t as yt,e as t,A as oe,M as te,S as DA,D as BA,f as J,I as P,g as PA,h as ht,s as ae,G as k,i as eA,k as AA,m as WA,r as S,F as ne,B as X,n as B,o as Nt,u as O,R as vt,q as R,v as qt,w as oA,x as Ee,y as xe,z as Ct,E as kt,H as hA,J as Rt,K as Qt,L as xt,N as V,O as Xe,P as jA,Q as FA,U as Dt,V as Bt,W as Pt,X as Wt,Y as jt,Z as Ft,_ as Tt,$ as Lt,a0 as NA,a1 as Ye,a2 as Et,a3 as Jt,a4 as Xt,a5 as Ot,a6 as Vt,a7 as Kt,a8 as TA,a9 as Je,aa as _e,ab as LA,ac as It,ad as Gt,ae as wt,af as L,ag as Ut,ah as zt,ai as Zt,aj as vA,ak as qA,al as CA,am as Ht,an as Mt,ao as Yt,ap as _t,aq as $t,ar as ea,as as Aa,at as oa,au as ta,av as aa,aw as na,ax as ra,ay as la,az as ia,aA as sa,aB as ua}from"./vendor.6c048b3d.js";const pa=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))n(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function a(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerpolicy&&(i.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?i.credentials="include":l.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(l){if(l.ep)return;l.ep=!0;const i=a(l);fetch(l.href,i)}};pa();const De=({darkMode:e=!0,locale:o=mt,options:a={}})=>dt(ct({components:{MuiCard:{styleOverrides:{root:{backgroundColor:"#424242"}}}},typography:{fontFamily:["DM Sans","sans-serif","-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'].join(","),h1:{fontFamily:"Integral CF Bold"},h2:{fontFamily:"Integral CF Bold"},h3:{fontFamily:"Integral CF Bold",fontSize:"1.9375rem"}},palette:{mode:e?"dark":"light",primary:{main:e?"#04a7cf":"#166faa",dark:"#166faa"},secondary:{main:e?"#f44336":"#cc4b37",dark:"#cc4b37"},warning:{main:e?"#f57c00":"#e64a19",dark:"#e64a19"},background:{default:e?"#303030":"#fff",paper:e?"#424242":"#fff"}}},a),o);try{De.displayName="AppTheme",De.__docgenInfo={description:"",displayName:"AppTheme",props:{darkMode:{defaultValue:{value:"true"},description:"",name:"darkMode",required:!1,type:{name:"boolean"}},options:{defaultValue:{value:"{}"},description:"",name:"options",required:!1,type:{name:"ThemeOptions"}},locale:{defaultValue:{value:"ptBR"},description:"",name:"locale",required:!1,type:{name:"Localization"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/theme/AppTheme.tsx#AppTheme"]={docgenInfo:De.__docgenInfo,name:"AppTheme",path:"src/theme/AppTheme.tsx#AppTheme"})}catch{}const da="yu-open-lib",ca="2.1.0",ma="A collection of React components, helpers and assets used at YU",ba="jornadayu",fa="UNLICENSED",ga={type:"git",url:"git@bitbucket.org:sal-jornadayu/yulib"},Sa="./dist/index.js",ya="./dist/index.modern.js",ha={".":{import:"./dist/index.modern.js",require:"./dist/index.js"},"./icons":{import:"./dist/index.modern.js",require:"./dist/index.js"}},Na="src/index.tsx",va={node:">=14"},qa={build:"microbundle-crl --no-compress --external=react,react-dom,react-is --format modern,cjs --css-modules false","build:types":"tsc --declaration --emitDeclarationOnly --jsx react --esModuleInterop --outDir dist && cp dist/src/* ./dist -r || exit 0",prepare:"run-s build",test:"echo 'no tests to run'","test:build":"run-s build","test:lint":"eslint .","test:unit":"cross-env CI=1 react-scripts test --env=jsdom","test:watch":"react-scripts test --env=jsdom","version:current":"echo $npm_package_version",storybook:"start-storybook -p 6006","build-storybook":"build-storybook -s ./.storybook/public/ -o ./storybook-static/"},Ca={"babel-loader":"8.1.0","javascript-color-gradient":"^1.3.2"},ka={"@emotion/react":"^11.5.0","@mui/icons-material":"^5.0.4","@mui/lab":"^5.0.0-alpha.51","@mui/material":"^5.0.4","@mui/styles":"^5.0.1","@nivo/bar":">= 0.68.0 <0.72.0","@nivo/core":"0.71.0","@nivo/heatmap":"^0.73.0","@nivo/legends":"0.71.0","@nivo/pie":"0.73.0","@nivo/sunburst":"0.73.0","@nivo/tooltip":"0.71.0",dayjs:"^1.10.4",echarts:"^5.1.0","echarts-for-react":"^3.0.1","qrcode.react":"^1.0.1",react:"^17.0.1","react-dropzone":"^12.0.4","react-toast-notifications":"^2.4.0","react-wordcloud":"^1.2.7"},Ra={"@babel/core":"^7.14.6","@emotion/react":"^11.5.0","@etchteam/storybook-addon-status":"^4.2.0","@geometricpanda/storybook-addon-badges":"^0.2.1","@mui/icons-material":"^5.0.4","@mui/lab":"^5.0.0-alpha.51","@mui/material":"^5.0.4","@mui/styles":"^5.0.1","@nivo/bar":">= 0.68.0 <0.72.0","@nivo/core":"0.71.0","@nivo/heatmap":"^0.73.0","@nivo/legends":"0.71.0","@nivo/pie":"0.73.0","@nivo/sunburst":"0.73.0","@nivo/tooltip":"0.71.0","@originjs/vite-plugin-commonjs":"^1.0.1","@storybook/addon-actions":"^6.4.19","@storybook/addon-essentials":"^6.4.19","@storybook/addon-info":"^5.3.21","@storybook/addon-links":"^6.4.19","@storybook/addon-storysource":"^6.4.19","@storybook/addons":"^6.4.19","@storybook/react":"^6.4.19","@storybook/theming":"6.4.19","@testing-library/jest-dom":"^4.2.4","@testing-library/react":"^9.5.0","@testing-library/user-event":"^7.2.1","@trivago/prettier-plugin-sort-imports":"^3.2.0","@types/d3-shape":"^3.0.1","@types/echarts":"^4.9.7","@types/jest":"^25.1.4","@types/node":"^12.12.38","@types/qrcode.react":"^1.0.1","@types/react":"^17.0.1","@types/react-dom":"^17.0.1","@typescript-eslint/eslint-plugin":"^5.10.2","@typescript-eslint/parser":"^5.10.2","babel-eslint":"^10.0.3","cross-env":"^7.0.2","d3-shape":"^3.0.1",dayjs:"^1.10.4",echarts:"^5.1.0","echarts-for-react":"^3.0.1",eslint:"^6.8.0","eslint-config-prettier":"^6.7.0","eslint-config-standard":"^14.1.0","eslint-config-standard-react":"^9.2.0","eslint-plugin-import":"^2.18.2","eslint-plugin-node":"^11.0.0","eslint-plugin-prettier":"^3.1.1","eslint-plugin-promise":"^4.2.1","eslint-plugin-react":"^7.17.0","eslint-plugin-standard":"^4.0.1","eslint-plugin-unused-imports":"^2.0.0","gh-pages":"^2.2.0","microbundle-crl":"^0.13.10","npm-run-all":"^4.1.5",prettier:"^2.0.4","qrcode.react":"^1.0.1",react:"^17.0.1","react-dom":"^17.0.1","react-dropzone":"^12.0.4","react-toast-notifications":"^2.4.0","react-wordcloud":"^1.2.7","rollup-plugin-typescript2":"^0.30.0",sass:"^1.32.8",storybook:"^6.4.19","storybook-addon-jsx":"^7.3.14","storybook-builder-vite":"^0.1.16",typescript:"^4.5.5",vite:"^2.8.4"},Qa=["dist"];var F={name:da,version:ca,description:ma,author:ba,license:fa,repository:ga,main:Sa,module:ya,exports:ha,source:Na,private:!1,engines:va,scripts:qa,dependencies:Ca,peerDependencies:ka,devDependencies:Ra,files:Qa},EA=(e=>(e.UNRELEASED="unreleased",e))(EA||{});const kA=De({darkMode:!0}),xa=[bt.jsxDecorator(),e=>A(ft,{theme:kA,children:p(gt,{theme:kA,children:[A(St,{}),A(e,{})]})})],Da={options:{storySort:{order:[`${F.version}`,["Intro","AppTheme"],"Components","Hooks","Graphs"]}},actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/},expanded:!0},docs:{theme:yt.dark,source:{excludeDecorators:!0}},badgesConfig:{[EA.UNRELEASED]:{contrast:"#ece9e9",color:"#b92222",title:"Unreleased"}}};var Ba=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",decorators:xa,parameters:Da});const Pa={},Wa="wrapper";function JA(a){var n=a,{components:e}=n,o=v(n,["components"]);return t(Wa,u(r(r({},Pa),o),{components:e,mdxType:"MDXLayout"}),t(te,{title:"Hooks/useToggle",mdxType:"Meta"}),t("h1",null,"useToggle"),t("pre",null,t("code",{parentName:"pre",className:"language-tsx"},`import { useToggle } from 'yu-open-lib'

const MyComponent: React.FC = () => {
  const [value, toggleValue] = useToggle(false)

  return (
    <Card>
      Value is: {value.toString()}

      <Button onClick={toggleValue}>
        Toggle
      </Button>
    </Card>
  )
}
`)),t(DA,{name:"Example",mdxType:"Story"}))}JA.isMDXComponent=!0;const tA=()=>"";tA.storyName="Example";tA.parameters={storySource:{source:"''"}};const G={title:"Hooks/useToggle",includeStories:["example"]},ja={Example:"example"};G.parameters=G.parameters||{};G.parameters.docs=u(r({},G.parameters.docs||{}),{page:()=>t(oe,{mdxStoryNameToKey:ja,mdxComponentMeta:G},t(JA,null))});var Fa=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",example:tA,default:G});const Ta={},La="wrapper";function XA(a){var n=a,{components:e}=n,o=v(n,["components"]);return t(La,u(r(r({},Ta),o),{components:e,mdxType:"MDXLayout"}),t(te,{title:"Hooks/useViewport",mdxType:"Meta"}),t("h1",null,"useViewport"),t("pre",null,t("code",{parentName:"pre",className:"language-tsx"},`import { useViewport } from 'yu-open-lib'

const MyComponent: React.FC = () => {
  const { isMobile } = useViewport()

  return (
    <Card>
      isMobile: {isMobile.toString()}

      {isMobile && <div>I only appear on mobile viewports</div>}
    </Card>
  )
}
`)),t(DA,{name:"Example",mdxType:"Story"}))}XA.isMDXComponent=!0;const aA=()=>"";aA.storyName="Example";aA.parameters={storySource:{source:"''"}};const w={title:"Hooks/useViewport",includeStories:["example"]},Ea={Example:"example"};w.parameters=w.parameters||{};w.parameters.docs=u(r({},w.parameters.docs||{}),{page:()=>t(oe,{mdxStoryNameToKey:Ea,mdxComponentMeta:w},t(XA,null))});var Ja=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",example:aA,default:w});const Xa={},Oa="wrapper";function OA(a){var n=a,{components:e}=n,o=v(n,["components"]);return t(Oa,u(r(r({},Xa),o),{components:e,mdxType:"MDXLayout"}),t(te,{title:`${F.version}/AppTheme`,mdxType:"Meta"}),t("h3",null,"AppTheme Usage"),t("pre",null,t("code",{parentName:"pre",className:"language-tsx"},`import React from 'react'

import { CssBaseline } from '@mui/material'
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles'
import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming'

import { AppTheme } from 'yu-open-lib'

// Can also be in some Context or used with an useState/useToggle for a dark mode toggle
const theme = AppTheme({ darkMode: false })

const App = () => {
  return (
    <StyledEngineProvider injectFirst>
      <EmotionThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          ...
        </ThemeProvider>
      </EmotionThemeProvider>
    </StyledEngineProvider>
  )
}
`)),t("ul",null,t("li",{parentName:"ul"},t("a",{parentName:"li",href:"https://mui.com/customization/theming"},"Read More about ",t("inlineCode",{parentName:"a"},"MUI"),"'s ThemeProvider"))))}OA.isMDXComponent=!0;const VA=()=>{throw new Error("Docs-only story")};VA.parameters={docsOnly:!0};const U={title:`${F.version}/AppTheme`,includeStories:["__page"]},Va={};U.parameters=U.parameters||{};U.parameters.docs=u(r({},U.parameters.docs||{}),{page:()=>t(oe,{mdxStoryNameToKey:Va,mdxComponentMeta:U},t(OA,null))});var Ka=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",__page:VA,default:U});const Ia={},Ga="wrapper";function KA(a){var n=a,{components:e}=n,o=v(n,["components"]);return t(Ga,u(r(r({},Ia),o),{components:e,mdxType:"MDXLayout"}),t(te,{title:`${F.version}/Guidelines`,mdxType:"Meta"}),t("h1",null,"Development and Documentation Guidelines"),t("hr",null),t("h2",null,"Stories"),t("h5",null,"Versioning in documentation"),t("p",null,"Always add a ",t("inlineCode",{parentName:"p"},"UNRELEASED")," badge in the component/hook/helper/etc. story when creating a new one:"),t("pre",null,t("code",{parentName:"pre",className:"language-tsx"},`import { BADGES } from '../../../.storybook/constants'

// src/stories/DialogTitle.stories.tsx
export default {
  title: 'Components/DialogTitle',
  component: DialogTitle,
  argTypes: { onClose: { action: 'onClose' } },
  parameters: {
    badges: ['v2.0.3']
  }
} as ComponentMeta<typeof DialogTitle>
`)),t("p",null,"When a new release is made the unreleased badges will be automatically changed to the version being released."))}KA.isMDXComponent=!0;const IA=()=>{throw new Error("Docs-only story")};IA.parameters={docsOnly:!0};const z={title:`${F.version}/Guidelines`,includeStories:["__page"]},wa={};z.parameters=z.parameters||{};z.parameters.docs=u(r({},z.parameters.docs||{}),{page:()=>t(oe,{mdxStoryNameToKey:wa,mdxComponentMeta:z},t(KA,null))});var Ua=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",__page:IA,default:z});const za={},Za="wrapper";function GA(a){var n=a,{components:e}=n,o=v(n,["components"]);return t(Za,u(r(r({},za),o),{components:e,mdxType:"MDXLayout"}),t(te,{title:`${F.version}/Intro`,mdxType:"Meta"}),t("h1",null,"Intro"),t("p",null,"Latest ",t("code",null,"yu-open-lib")," version: ",t("strong",null,F.version)),t("hr",null),t("h3",null,"Installation"),t("pre",null,t("code",{parentName:"pre",className:"language-bash"},`yarn add yu-open-lib
`)),t("hr",null),t("h3",null,"Useful references:"),t("ul",null,t("li",{parentName:"ul"},t("p",{parentName:"li"},t("a",{parentName:"p",href:"https://mui.com"},"MUI")),t("ul",{parentName:"li"},t("li",{parentName:"ul"},"React UI framework used as the base for most components in ",t("inlineCode",{parentName:"li"},"yu-open-lib")))),t("li",{parentName:"ul"},t("p",{parentName:"li"},t("a",{parentName:"p",href:"https://storybook.js.org"},"Storybook")),t("ul",{parentName:"li"},t("li",{parentName:"ul"},"Tool used to create this documentation page"),t("li",{parentName:"ul"},t("a",{parentName:"li",href:"https://github.com/eirslett/storybook-builder-vite"},"storybook-builder-vite"),t("ul",{parentName:"li"},t("li",{parentName:"ul"},"Storybook (experimental) plugin used to build Storybooks with Vite, used to generate this documentation")))))))}GA.isMDXComponent=!0;const wA=()=>{throw new Error("Docs-only story")};wA.parameters={docsOnly:!0};const Z={title:`${F.version}/Intro`,includeStories:["__page"]},Ha={};Z.parameters=Z.parameters||{};Z.parameters.docs=u(r({},Z.parameters.docs||{}),{page:()=>t(oe,{mdxStoryNameToKey:Ha,mdxComponentMeta:Z},t(GA,null))});var Ma=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",__page:wA,default:Z});const Ya={},_a="wrapper";function UA(a){var n=a,{components:e}=n,o=v(n,["components"]);return t(_a,u(r(r({},Ya),o),{components:e,mdxType:"MDXLayout"}),t(te,{title:`${F.version}/V2 Migration Guide`,mdxType:"Meta"}),t("h1",null,"Migration to yu-open-lib V2"),t("h2",null,"MUI v5 update"),t("p",null,t("inlineCode",{parentName:"p"},"yu-open-lib")," from v2.0.0 and up uses MUI v5 (from v4), follow the instructions to migrate to MUI v5 here before updating to v2: ",t("a",{parentName:"p",href:"https://mui.com/guides/migration-v4/"},"https://mui.com/guides/migration-v4")),t("h2",null,"Breaking Changes"),t("ul",null,t("li",{parentName:"ul"},t("strong",{parentName:"li"},"Removed")," named imports for all external assets:",t("ul",{parentName:"li"},t("li",{parentName:"ul"},"YuriLogo"),t("li",{parentName:"ul"},"YuriNegativeLogo"),t("li",{parentName:"ul"},"YuNegativeSalmao"),t("li",{parentName:"ul"},"YuNegativeLaranja"),t("li",{parentName:"ul"},"YuPositiveSalmao"),t("li",{parentName:"ul"},"YuPositiveLaranja")))),t("blockquote",null,t("p",{parentName:"blockquote"},"The above assets have been converted to ",t("inlineCode",{parentName:"p"},".tsx")," svg components and are, at the moment, only used internally in the library, thus none of them are exported. In the future they may be moved to their own package (also with other assets in different colors and gradients) so the core package does not have a larger bundle size if you do not neet to use any of those icons/images.")),t("ul",null,t("li",{parentName:"ul"},t("inlineCode",{parentName:"li"},"AppTheme")," Setup")),t("pre",null,t("code",{parentName:"pre",className:"language-tsx"},`// BEFORE
import React from 'react'

import { CssBaseline } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'

import { AppTheme } from 'yu-open-lib'

const theme = AppTheme({ darkMode: false })

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      ...
    </ThemeProvider>
  )
}
`)),t("pre",null,t("code",{parentName:"pre",className:"language-tsx"},`// NOW
import React from 'react'

import { CssBaseline } from '@mui/material'
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles'
import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming'

import { AppTheme } from 'yu-open-lib'

const theme = AppTheme({ darkMode: false })

const App = () => {
  return (
    <StyledEngineProvider injectFirst>
      <EmotionThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          ...
        </ThemeProvider>
      </EmotionThemeProvider>
    </StyledEngineProvider>
  )
}
`)),t("pre",null,t("code",{parentName:"pre",className:"language-diff"},`# Diff
- import { ThemeProvider } from '@mui/material/styles'
---
+ import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles'
+ import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming'

-     <ThemeProvider theme={theme}>
-       <CssBaseline />
-       ...
-     </ThemeProvider>
---
+     <StyledEngineProvider injectFirst>
+       <EmotionThemeProvider theme={theme}>
+         <ThemeProvider theme={theme}>
+           <CssBaseline />
+           ...
+         </ThemeProvider>
+       </EmotionThemeProvider>
+     </StyledEngineProvider>
`)),t("hr",null),t("h1",null,"Changelog"),t("h2",null,"New components"),t("ul",null,t("li",{parentName:"ul"},t("a",{parentName:"li",href:"/?path=/story/yu-button--base"},"YuButton")),t("li",{parentName:"ul"},t("a",{parentName:"li",href:"/?path=/story/dialogs-dialogtitle--example"},"DialogTitle")),t("li",{parentName:"ul"},t("a",{parentName:"li",href:"/?path=/story/inputs-copyablebutton--example"},"CopyableButton")),t("li",{parentName:"ul"},t("a",{parentName:"li",href:"/?path=/story/loaders-loadingline--top"},"LoadingLine"))),t("h2",null,"New helpers"),t("ul",null,t("li",{parentName:"ul"},t("inlineCode",{parentName:"li"},"copyToClipboard"))),t("h2",null,"New features"),t("ul",null,t("li",{parentName:"ul"},t("inlineCode",{parentName:"li"},"logo")," prop for ",t("a",{parentName:"li",href:"/?path=/story/navbar-yuappbar--custom-logo"},"YuAppBar")," now can receive a custom logo for the drawer and navbar (just pass a ",t("inlineCode",{parentName:"li"},"React.ReactElement")," instead of ",t("inlineCode",{parentName:"li"},"'yuri'")," or ",t("inlineCode",{parentName:"li"},"'yu'"),")")),t("h2",null,"Bugs fixed"),t("ul",null,t("li",{parentName:"ul"},t("a",{parentName:"li",href:"/?path=/story/navbar-yuappbar--logged-in"},"YuAppBar"),"'s Mobile Drawer Yu/Yuri logo has a delay to load, and shifts content around the drawer"),t("li",{parentName:"ul"},"Fixed warnings related to ",t("inlineCode",{parentName:"li"},"iconButton")," from ",t("a",{parentName:"li",href:"/?path=/story/navbar-yuappbar--logged-in"},"YuAppBar")," components")))}UA.isMDXComponent=!0;const zA=()=>{throw new Error("Docs-only story")};zA.parameters={docsOnly:!0};const H={title:`${F.version}/V2 Migration Guide`,includeStories:["__page"]},$a={};H.parameters=H.parameters||{};H.parameters.docs=u(r({},H.parameters.docs||{}),{page:()=>t(oe,{mdxStoryNameToKey:$a,mdxComponentMeta:H},t(UA,null))});var en=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",__page:zA,default:H});const M=n=>{var l=n,{children:e,onClose:o}=l,a=v(l,["children","onClose"]);return p(BA,u(r({sx:{p:2,m:0}},a),{children:[!!e&&A(J,{variant:"h6",children:e}),o?A(P,{"aria-label":"close",onClick:o,size:"large",sx:{position:"absolute",right:8,top:8,color:PA[500]},children:A(ht,{})}):null]}))};try{M.displayName="DialogTitle",M.__docgenInfo={description:`Custom DialogTitle to be used as a replacement to \`MUI\`'s base \`DialogTitle\`

Has a (somewhat redundant) close button in the upper-right corner

Uses JSX children as its left-aligned title instead of a string

\`\`\`tsx
import { Dialog, DialogContent } from '@mui/material'
import { DialogTitle } from 'yu-open-lib'

const MyComponent: React.FC = () => {
   const close = () => { ... }

   return (
     <Dialog open onClose={close}>
       <DialogTitle onClose={close}>
         <Typography variant="h4">Some Custom Title</Typography>
       </DialogTitle>

       <DialogContent>My Content</DialogContent>
     </Dialog>
   )
}

export default MyComponent
\`\`\``,displayName:"DialogTitle",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/DialogTitle.tsx#DialogTitle"]={docgenInfo:M.__docgenInfo,name:"DialogTitle",path:"src/components/DialogTitle.tsx#DialogTitle"})}catch{}const An="LoadingBars",ZA={loadingGrid:`${An}-loadingGrid`},on=ae(k)(()=>({[`&.${ZA.loadingGrid}`]:{textAlign:"center"}})),HA=({loading:e})=>e&&A(on,{className:ZA.loadingGrid,children:p("svg",{className:"loader active",height:"55px",id:"Layer_1",version:"1.1",viewBox:"0 0 24 30",width:"50px",x:"0px",xmlSpace:"preserve",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",y:"0px",children:[p("rect",{fill:"#333",height:"10",opacity:"0.2",width:"4",x:"0",y:"10",children:[A("animate",{attributeName:"opacity",attributeType:"XML",begin:"0s",dur:"0.6s",repeatCount:"indefinite",values:"0.2; 1; .2"}),A("animate",{attributeName:"height",attributeType:"XML",begin:"0s",dur:"0.6s",repeatCount:"indefinite",values:"10; 20; 10"}),A("animate",{attributeName:"y",attributeType:"XML",begin:"0s",dur:"0.6s",repeatCount:"indefinite",values:"10; 5; 10"})]}),p("rect",{fill:"#333",height:"10",opacity:"0.2",width:"4",x:"8",y:"10",children:[A("animate",{attributeName:"opacity",attributeType:"XML",begin:"0.15s",dur:"0.6s",repeatCount:"indefinite",values:"0.2; 1; .2"}),A("animate",{attributeName:"height",attributeType:"XML",begin:"0.15s",dur:"0.6s",repeatCount:"indefinite",values:"10; 20; 10"}),A("animate",{attributeName:"y",attributeType:"XML",begin:"0.15s",dur:"0.6s",repeatCount:"indefinite",values:"10; 5; 10"})]}),p("rect",{fill:"#333",height:"10",opacity:"0.2",width:"4",x:"16",y:"10",children:[A("animate",{attributeName:"opacity",attributeType:"XML",begin:"0.3s",dur:"0.6s",repeatCount:"indefinite",values:"0.2; 1; .2"}),A("animate",{attributeName:"height",attributeType:"XML",begin:"0.3s",dur:"0.6s",repeatCount:"indefinite",values:"10; 20; 10"}),A("animate",{attributeName:"y",attributeType:"XML",begin:"0.3s",dur:"0.6s",repeatCount:"indefinite",values:"10; 5; 10"})]})]})})||null;try{Loading.displayName="Loading",Loading.__docgenInfo={description:"Generic horizontal loading bars, mostly to be used as specific resources loading (e.g. small cards inside a bigger container)",displayName:"Loading",props:{loading:{defaultValue:null,description:"If the Loading Bar should be active or its children",name:"loading",required:!0,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/loaders/Loading.tsx#Loading"]={docgenInfo:Loading.__docgenInfo,name:"Loading",path:"src/components/loaders/Loading.tsx#Loading"})}catch{}const re=c=>{var d=c,{open:e,onClose:o,actions:a,title:n,children:l,loading:i=!1}=d,s=v(d,["open","onClose","actions","title","children","loading"]);return p(eA,u(r({open:e,onClose:o,maxWidth:"md",fullWidth:!0},s),{children:[A(M,{onClose:()=>o==null?void 0:o(),children:A(J,{variant:"h5",sx:{ml:2},children:n})}),A(AA,{children:i?A(HA,{loading:i}):l}),!!a&&A(WA,{children:a})]}))};try{re.displayName="BaseDialog",re.__docgenInfo={description:`\`\`\`tsx
const MyComponent: React.FC = () => {
  const [dialog, toggleDialog] = useToggle(false)
  const isLoading = false

  return (
    <BaseDialog
      title="Some Title"
      open={dialog}
      onClose={toggleDialog}
      loading={isLoading}
      actions={
        <>
          <Button onClick={toggleDialog}>Yes</Button>
          <Button onClick={toggleDialog}>No</Button>
        </>
      }
    >
      <div>
        Do Thing?
      </div>
    </BaseDialog>
  )
}
\`\`\``,displayName:"BaseDialog",props:{open:{defaultValue:null,description:"If `true`, the component is shown.",name:"open",required:!0,type:{name:"boolean"}},onClose:{defaultValue:null,description:'Callback fired when the component requests to be closed.\n@param event The event source of the callback.\n@param reason Can be: `"escapeKeyDown"`, `"backdropClick"`.',name:"onClose",required:!1,type:{name:'((() => void) & ((event: {}, reason: "backdropClick" | "escapeKeyDown") => void))'}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},actions:{defaultValue:null,description:"",name:"actions",required:!1,type:{name:"ReactChild | ReactChildren | (() => ReactElement<any, string | JSXElementConstructor<any>>)"}},loading:{defaultValue:{value:"false"},description:"",name:"loading",required:!1,type:{name:"boolean"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},components:{defaultValue:{value:"{}"},description:`The components used for each slot inside the Modal.
Either a string to use a HTML element or a component.`,name:"components",required:!1,type:{name:"{ Root?: ElementType<any>; }"}},componentsProps:{defaultValue:{value:"{}"},description:"The props used for each slot inside the Modal.",name:"componentsProps",required:!1,type:{name:"{ root?: (HTMLAttributes<HTMLDivElement> & ModalUnstyledComponentsPropsOverrides); }"}},BackdropComponent:{defaultValue:{value:`styled(Backdrop, {
name: 'MuiModal',
slot: 'Backdrop',
overridesResolver: (props, styles) => {
return styles.backdrop;
},
})({
zIndex: -1,
})`},description:"A backdrop component. This prop enables custom backdrop rendering.",name:"BackdropComponent",required:!1,type:{name:'(ElementType<BackdropProps<"span", {}>> & ElementType<any>)'}},BackdropProps:{defaultValue:null,description:"Props applied to the [`Backdrop`](/api/backdrop/) element.\nProps applied to the [`BackdropUnstyled`](/api/backdrop-unstyled/) element.",name:"BackdropProps",required:!1,type:{name:'(Partial<BackdropProps<"span", {}>> & Partial<BackdropUnstyledProps<"div", {}>>)'}},closeAfterTransition:{defaultValue:{value:"false"},description:"When set to true the Modal waits until a nested Transition is completed before closing.",name:"closeAfterTransition",required:!1,type:{name:"boolean"}},container:{defaultValue:null,description:"An HTML element or function that returns one.\nThe `container` will have the portal children appended to it.\n\nBy default, it uses the body of the top-level document object,\nso it's simply `document.body` most of the time.",name:"container",required:!1,type:{name:"Element | (() => Element | null) | null"}},disableAutoFocus:{defaultValue:{value:"false"},description:"If `true`, the modal will not automatically shift focus to itself when it opens, and\nreplace it to the last focused element when it closes.\nThis also works correctly with any modal children that have the `disableAutoFocus` prop.\n\nGenerally this should never be set to `true` as it makes the modal less\naccessible to assistive technologies, like screen readers.",name:"disableAutoFocus",required:!1,type:{name:"boolean"}},disableEnforceFocus:{defaultValue:{value:"false"},description:"If `true`, the modal will not prevent focus from leaving the modal while open.\n\nGenerally this should never be set to `true` as it makes the modal less\naccessible to assistive technologies, like screen readers.",name:"disableEnforceFocus",required:!1,type:{name:"boolean"}},disablePortal:{defaultValue:{value:"false"},description:"The `children` will be under the DOM hierarchy of the parent component.",name:"disablePortal",required:!1,type:{name:"boolean"}},disableRestoreFocus:{defaultValue:{value:"false"},description:"If `true`, the modal will not restore focus to previously focused element once\nmodal is hidden.",name:"disableRestoreFocus",required:!1,type:{name:"boolean"}},disableScrollLock:{defaultValue:{value:"false"},description:"Disable the scroll lock behavior.",name:"disableScrollLock",required:!1,type:{name:"boolean"}},hideBackdrop:{defaultValue:{value:"false"},description:"If `true`, the backdrop is not rendered.",name:"hideBackdrop",required:!1,type:{name:"boolean"}},keepMounted:{defaultValue:{value:"false"},description:`Always keep the children in the DOM.
This prop can be useful in SEO situation or
when you want to maximize the responsiveness of the Modal.`,name:"keepMounted",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/dialogs/BaseDialog.tsx#BaseDialog"]={docgenInfo:re.__docgenInfo,name:"BaseDialog",path:"src/components/dialogs/BaseDialog.tsx#BaseDialog"})}catch{}var tn={title:"Dialogs/BaseDialog",component:re,argTypes:{onClose:{action:"onClose"}},parameters:{storySource:{source:`import React, { useState } from 'react'

import { ComponentMeta, ComponentStory, Story } from '@storybook/react'

import { Button } from '@mui/material'

import BaseDialog, {
  BaseDialogProps
} from '../../components/dialogs/BaseDialog'

export default {
  title: 'Dialogs/BaseDialog',
  component: BaseDialog,
  argTypes: {
    onClose: { action: 'onClose' }
  },
  parameters: {
    badges: ['Added: 2.0.1'] // Component was added in version 1.7.9
  }
} as ComponentMeta<typeof BaseDialog>

const Template: ComponentStory<typeof BaseDialog> = (args) => {
  const [open, setOpen] = useState(false)

  const close = () => {
    args.onClose && args.onClose()
    setOpen(false)
  }

  return (
    <>
      <button onClick={() => setOpen(true)}>Open Dialog</button>

      <BaseDialog {...args} open={open} onClose={close}>
        Some Content here
      </BaseDialog>
    </>
  )
}

const baseProps: BaseDialogProps = {
  open: false,
  title: 'Dialog Title',
  actions: () => (
    <>
      <Button>Yes</Button>
      <Button>No</Button>
    </>
  )
}

export const Example: Story<BaseDialogProps> = Template.bind({})
Example.args = {
  ...baseProps
}

export const LoadingDialog: Story<BaseDialogProps> = Template.bind({})
LoadingDialog.args = {
  ...baseProps,
  loading: true
}

type PropsWithChildren = BaseDialogProps & { children?: React.ReactNode }

export const CustomChildren: Story<PropsWithChildren> = Template.bind({})
CustomChildren.args = {
  ...baseProps,
  children: (
    <div>
      custom <strong>dialog</strong> <em>content</em> with{' '}
      <span style={{ color: 'red' }}>JSX</span>
    </div>
  )
}
`,locationsMap:{example:{startLoc:{col:52,line:22},endLoc:{col:1,line:39},startBody:{col:52,line:22},endBody:{col:1,line:39}},"loading-dialog":{startLoc:{col:52,line:22},endLoc:{col:1,line:39},startBody:{col:52,line:22},endBody:{col:1,line:39}},"custom-children":{startLoc:{col:52,line:22},endLoc:{col:1,line:39},startBody:{col:52,line:22},endBody:{col:1,line:39}}}},badges:["Added: 2.0.1"]}};const nA=e=>{const[o,a]=S.exports.useState(!1),n=()=>{e.onClose&&e.onClose(),a(!1)};return p(ne,{children:[A("button",{onClick:()=>a(!0),children:"Open Dialog"}),A(re,u(r({},e),{open:o,onClose:n,children:"Some Content here"}))]})},rA={open:!1,title:"Dialog Title",actions:()=>p(ne,{children:[A(X,{children:"Yes"}),A(X,{children:"No"})]})},MA=nA.bind({});MA.args=r({},rA);const YA=nA.bind({});YA.args=u(r({},rA),{loading:!0});const _A=nA.bind({});_A.args=u(r({},rA),{children:p("div",{children:["custom ",A("strong",{children:"dialog"})," ",A("em",{children:"content"})," with"," ",A("span",{style:{color:"red"},children:"JSX"})]})});const an=["Example","LoadingDialog","CustomChildren"];var nn=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:tn,Example:MA,LoadingDialog:YA,CustomChildren:_A,__namedExportsOrder:an});const le=({title:e,text:o,cancelText:a,confirmText:n,open:l,children:i,handleClose:s,handleConfirm:c,path:d,loading:f=!1,confirmColor:g="secondary",cancelColor:x="primary"})=>p(eA,{open:l,onClose:s,children:[A(BA,{children:e}),f&&A(HA,{loading:!0})||p(B.Fragment,{children:[p(AA,{children:[!!o&&A(Nt,{children:o}),i]}),p(WA,{children:[A(X,{onClick:s,color:x,autoFocus:!0,children:a}),A(X,{href:d,onClick:c,color:g,children:n})]})]})]});try{le.displayName="ConfirmDialog",le.__docgenInfo={description:"Generic confirmation/cancel dialog with callbacks for confirm and cancel actions\n\nWill render children in the `<DialogContent />` sub-component when passed",displayName:"ConfirmDialog",props:{title:{defaultValue:null,description:"Dialog title",name:"title",required:!0,type:{name:"ReactNode"}},text:{defaultValue:null,description:"Dialog body text",name:"text",required:!1,type:{name:"ReactNode"}},cancelText:{defaultValue:null,description:"Text on the Cancel button",name:"cancelText",required:!0,type:{name:"string"}},confirmText:{defaultValue:null,description:"Text on the Confirm button",name:"confirmText",required:!0,type:{name:"string"}},open:{defaultValue:null,description:"If the dialog should be open or not",name:"open",required:!0,type:{name:"boolean"}},handleClose:{defaultValue:null,description:"Action when closing/cancelling the Dialog",name:"handleClose",required:!0,type:{name:"() => void"}},handleConfirm:{defaultValue:null,description:"Action when confirming the Dialog action",name:"handleConfirm",required:!0,type:{name:"() => void"}},path:{defaultValue:null,description:"URL to go with the Confirm button, instead of a Confirm action",name:"path",required:!1,type:{name:"string"}},loading:{defaultValue:{value:"false"},description:"Loading bar inside the dialog body",name:"loading",required:!1,type:{name:"boolean"}},confirmColor:{defaultValue:{value:"secondary"},description:"Confirm Button color",name:"confirmColor",required:!1,type:{name:"enum",value:[{value:'"inherit"'},{value:'"primary"'},{value:'"secondary"'}]}},cancelColor:{defaultValue:{value:"primary"},description:"Cancel Button color",name:"cancelColor",required:!1,type:{name:"enum",value:[{value:'"inherit"'},{value:'"primary"'},{value:'"secondary"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/ConfirmDialog.tsx#ConfirmDialog"]={docgenInfo:le.__docgenInfo,name:"ConfirmDialog",path:"src/components/ConfirmDialog.tsx#ConfirmDialog"})}catch{}var rn={parameters:{storySource:{source:`import React, { useState } from 'react'

import { ComponentMeta, ComponentStory, Story } from '@storybook/react'

import ConfirmDialog, { Props } from '../../components/ConfirmDialog'

export default {
  title: 'Dialogs/ConfirmDialog',
  component: ConfirmDialog,
  argTypes: {
    handleConfirm: { action: 'handleConfirm' },
    handleClose: { action: 'handleClose' }
  }
} as ComponentMeta<typeof ConfirmDialog>

const Template: ComponentStory<typeof ConfirmDialog> = (args) => {
  const [open, setOpen] = useState(false)

  const close = () => {
    args.handleClose()
    setOpen(false)
  }

  return (
    <>
      <button onClick={() => setOpen(true)}>Open Dialog</button>

      <ConfirmDialog {...args} open={open} handleClose={close} />
    </>
  )
}

const baseProps: Partial<Props> = {
  title: 'Dialog Title',
  confirmText: 'Confirm',
  cancelText: 'Cancel',
  text: 'Do you want to confirm?'
}

export const Example: Story<Props> = Template.bind({})
Example.args = {
  ...baseProps
}

export const LoadingConfirmation: Story<Props> = Template.bind({})
LoadingConfirmation.args = {
  ...baseProps,
  loading: true
}

type PropsWithChildren = Props & { children?: React.ReactNode }

export const CustomChildren: Story<PropsWithChildren> = Template.bind({})
CustomChildren.args = {
  ...baseProps,
  children: (
    <div>
      custom <strong>dialog</strong> <em>content</em> with{' '}
      <span style={{ color: 'red' }}>JSX</span>
    </div>
  )
}
`,locationsMap:{example:{startLoc:{col:55,line:16},endLoc:{col:1,line:31},startBody:{col:55,line:16},endBody:{col:1,line:31}},"loading-confirmation":{startLoc:{col:55,line:16},endLoc:{col:1,line:31},startBody:{col:55,line:16},endBody:{col:1,line:31}},"custom-children":{startLoc:{col:55,line:16},endLoc:{col:1,line:31},startBody:{col:55,line:16},endBody:{col:1,line:31}}}}},title:"Dialogs/ConfirmDialog",component:le,argTypes:{handleConfirm:{action:"handleConfirm"},handleClose:{action:"handleClose"}}};const lA=e=>{const[o,a]=S.exports.useState(!1),n=()=>{e.handleClose(),a(!1)};return p(ne,{children:[A("button",{onClick:()=>a(!0),children:"Open Dialog"}),A(le,u(r({},e),{open:o,handleClose:n}))]})},iA={title:"Dialog Title",confirmText:"Confirm",cancelText:"Cancel",text:"Do you want to confirm?"},$A=lA.bind({});$A.args=r({},iA);const eo=lA.bind({});eo.args=u(r({},iA),{loading:!0});const Ao=lA.bind({});Ao.args=u(r({},iA),{children:p("div",{children:["custom ",A("strong",{children:"dialog"})," ",A("em",{children:"content"})," with"," ",A("span",{style:{color:"red"},children:"JSX"})]})});const ln=["Example","LoadingConfirmation","CustomChildren"];var sn=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:rn,Example:$A,LoadingConfirmation:eo,CustomChildren:Ao,__namedExportsOrder:ln}),un={title:"Dialogs/DialogTitle",component:M,argTypes:{onClose:{action:"onClose"}},parameters:{storySource:{source:`import React, { useState } from 'react'

import { ComponentMeta, ComponentStory, Story } from '@storybook/react'

import { Dialog, DialogContent } from '@mui/material'

import DialogTitle, { Props } from '../../components/DialogTitle'

export default {
  title: 'Dialogs/DialogTitle',
  component: DialogTitle,
  argTypes: { onClose: { action: 'onClose' } },
  parameters: {
    badges: ['Added: 2.0.0']
  }
} as ComponentMeta<typeof DialogTitle>

const Template: ComponentStory<typeof DialogTitle> = (args) => {
  const [open, setOpen] = useState(false)

  const close = () => {
    args.onClose()
    setOpen(false)
  }

  return (
    <>
      <button onClick={() => setOpen(true)}>Open Dialog</button>

      <Dialog open={open} onClose={close} maxWidth='md' fullWidth>
        <DialogTitle {...args} onClose={close} />

        <DialogContent>Some Content</DialogContent>
      </Dialog>
    </>
  )
}

export const Example: Story<Props> = Template.bind({})
Example.args = {
  children: (
    <h4>
      Some Custom title <span style={{ color: 'red' }}>with JSX</span>
    </h4>
  )
}
`,locationsMap:{example:{startLoc:{col:53,line:18},endLoc:{col:1,line:37},startBody:{col:53,line:18},endBody:{col:1,line:37}}}},badges:["Added: 2.0.0"]}};const pn=e=>{const[o,a]=S.exports.useState(!1),n=()=>{e.onClose(),a(!1)};return p(ne,{children:[A("button",{onClick:()=>a(!0),children:"Open Dialog"}),p(eA,{open:o,onClose:n,maxWidth:"md",fullWidth:!0,children:[A(M,u(r({},e),{onClose:n})),A(AA,{children:"Some Content"})]})]})},oo=pn.bind({});oo.args={children:p("h4",{children:["Some Custom title ",A("span",{style:{color:"red"},children:"with JSX"})]})};const dn=["Example"];var cn=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:un,Example:oo,__namedExportsOrder:dn});const sA={anchor:"bottom",direction:"row",justify:!1,translateX:0,translateY:56,itemsSpacing:20,itemWidth:100,itemHeight:18,itemDirection:"left-to-right",itemOpacity:1,symbolSize:18,symbolShape:"circle",effects:[{on:"hover",style:{itemOpacity:1}}]},ke=e=>{const o=O();return{background:o.palette.background.paper,textColor:o.palette.text.primary,fontSize:(e==null?void 0:e.fontSize)||11,fontFamily:o.typography.fontFamily,tooltip:{container:{background:o.palette.background.default,color:o.palette.getContrastText(o.palette.background.default),fontSize:"inherit",borderRadius:"2px",boxShadow:"0 2px 2px rgba(0, 0, 0, 0.25)",padding:"5px 9px"},basic:{whiteSpace:"pre",display:"flex",alignItems:"center"},table:{},tableCell:{padding:"3px 5px"}},axis:{domain:{line:{stroke:"#777777",strokeWidth:1}},ticks:{line:{stroke:"#737373",strokeWidth:1}},legend:{text:{fontSize:16,fontWeight:o.typography.fontWeightBold,color:o.palette.getContrastText(o.palette.background.paper)}}},grid:{line:{stroke:o.palette.background.paper,strokeWidth:1}}}},Be=e=>{const o=[];return{data:[e.reduce((n,l,i)=>{const s=l.name in n?`${l.name} (${i})`:l.name;return o.push(s),u(r({},n),{[s]:l.count.toFixed(0)})},{})],keys:o}},ie=l=>{var i=l,{steps:e,legend:o="Dias",vertical:a=!1}=i,n=v(i,["steps","legend","vertical"]);const{keys:s,data:c}=S.exports.useMemo(()=>{if(a){const g=new Set;return{data:e.map(({name:h,count:m},y)=>{const N={name:g.has(h)?`${h} (${y})`:h,[o]:m.toFixed(0)};return g.add(h),N}),keys:[o]}}return Be(e)},[e]),d=ke();return console.log(c),A(vt,r({theme:d,data:c,keys:s,colors:"reds",indexBy:"name",margin:{top:100,right:60,bottom:60,left:60},forceSquare:!0,axisTop:{tickSize:5,tickPadding:5,tickRotation:a?0:-25,legend:"",legendOffset:36},axisRight:null,axisBottom:null,axisLeft:{tickSize:5,tickPadding:5,tickRotation:0,legendPosition:"middle",legendOffset:-20,legend:a?null:o},cellOpacity:1,cellBorderColor:{from:"color",modifiers:[["darker",.4]]},labelTextColor:{from:"color",modifiers:[["darker",4]]},motionStiffness:80,motionDamping:9,hoverTarget:"cell",cellHoverOthersOpacity:.5,animate:!0},n))};try{Be.displayName="toHeatmapData",Be.__docgenInfo={description:"```tsx\n> toHeatmapData([{ name: 'A', count: 14.3 }, { name: 'B', count: 13 }])\n{\n  data: { 'A': '14', 'B', '13' },\n  keys: ['A', 'B']\n}\n```",displayName:"toHeatmapData",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/graphs/AverageStepDurationGraph.tsx#toHeatmapData"]={docgenInfo:Be.__docgenInfo,name:"toHeatmapData",path:"src/components/graphs/AverageStepDurationGraph.tsx#toHeatmapData"})}catch{}try{ie.displayName="AverageStepDurationGraph",ie.__docgenInfo={description:"https://nivo.rocks/heatmap",displayName:"AverageStepDurationGraph",props:{steps:{defaultValue:null,description:"",name:"steps",required:!0,type:{name:"StepDuration[]"}},legend:{defaultValue:{value:"Dias"},description:"",name:"legend",required:!1,type:{name:"string"}},vertical:{defaultValue:{value:"false"},description:"",name:"vertical",required:!1,type:{name:"boolean"}},forceSquare:{defaultValue:null,description:"",name:"forceSquare",required:!1,type:{name:"boolean"}},sizeVariation:{defaultValue:null,description:"",name:"sizeVariation",required:!1,type:{name:"number"}},margin:{defaultValue:null,description:"",name:"margin",required:!1,type:{name:"Partial<Margin>"}},padding:{defaultValue:null,description:"",name:"padding",required:!1,type:{name:"number"}},cellShape:{defaultValue:null,description:"",name:"cellShape",required:!1,type:{name:'"circle" | "rect" | StatelessComponent<any>'}},cellOpacity:{defaultValue:null,description:"",name:"cellOpacity",required:!1,type:{name:"number"}},cellBorderWidth:{defaultValue:null,description:"",name:"cellBorderWidth",required:!1,type:{name:"number"}},cellBorderColor:{defaultValue:null,description:"",name:"cellBorderColor",required:!1,type:{name:"InheritedColorConfig<HeatMapDatumWithColor>"}},axisTop:{defaultValue:null,description:"",name:"axisTop",required:!1,type:{name:"AxisProps<any> | null"}},axisRight:{defaultValue:null,description:"",name:"axisRight",required:!1,type:{name:"AxisProps<any> | null"}},axisBottom:{defaultValue:null,description:"",name:"axisBottom",required:!1,type:{name:"AxisProps<any> | null"}},axisLeft:{defaultValue:null,description:"",name:"axisLeft",required:!1,type:{name:"AxisProps<any> | null"}},enableGridX:{defaultValue:null,description:"",name:"enableGridX",required:!1,type:{name:"boolean"}},enableGridY:{defaultValue:null,description:"",name:"enableGridY",required:!1,type:{name:"boolean"}},enableLabels:{defaultValue:null,description:"",name:"enableLabels",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"LabelFormatter"}},labelTextColor:{defaultValue:null,description:"",name:"labelTextColor",required:!1,type:{name:"InheritedColorConfig<HeatMapDatumWithColor>"}},isInteractive:{defaultValue:null,description:"",name:"isInteractive",required:!1,type:{name:"boolean"}},hoverTarget:{defaultValue:null,description:"",name:"hoverTarget",required:!1,type:{name:"enum",value:[{value:'"cell"'},{value:'"row"'},{value:'"column"'},{value:'"rowColumn"'}]}},cellHoverOpacity:{defaultValue:null,description:"",name:"cellHoverOpacity",required:!1,type:{name:"number"}},cellHoverOthersOpacity:{defaultValue:null,description:"",name:"cellHoverOthersOpacity",required:!1,type:{name:"number"}},tooltipFormat:{defaultValue:null,description:"",name:"tooltipFormat",required:!1,type:{name:"string | ValueFormatter"}},tooltip:{defaultValue:null,description:"",name:"tooltip",required:!1,type:{name:"StatelessComponent<any>"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:'Partial<Pick<CompleteTheme, "fontFamily" | "fontSize" | "background" | "textColor"> & { crosshair: Partial<{ line: Partial<{ stroke: string; strokeWidth: number; strokeOpacity: number; strokeDasharray: string; }>; }>; ... 7 more ...; annotations: Partial<...>; }>'}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/graphs/AverageStepDurationGraph.tsx#AverageStepDurationGraph"]={docgenInfo:ie.__docgenInfo,name:"AverageStepDurationGraph",path:"src/components/graphs/AverageStepDurationGraph.tsx#AverageStepDurationGraph"})}catch{}var mn={title:"Graphs/AverageStepDurationGraph",component:ie,parameters:{storySource:{source:`import React from 'react'

import { ComponentMeta, ComponentStory, Story } from '@storybook/react'

import { Card, Grid } from '@mui/material'

import AverageStepDurationGraph, {
  AverageStepDurationGraphProps
} from '../../components/graphs/AverageStepDurationGraph'

export default {
  title: 'Graphs/AverageStepDurationGraph',
  component: AverageStepDurationGraph,
  parameters: {
    badges: ['Added: 1.8.0']
  }
} as ComponentMeta<typeof AverageStepDurationGraph>

const Template: ComponentStory<typeof AverageStepDurationGraph> = (args) => (
  <Grid container>
    <Card style={{ height: 500, width: '100%', padding: 24 }}>
      <AverageStepDurationGraph {...args} />
    </Card>
  </Grid>
)

export const Example: Story<AverageStepDurationGraphProps> = Template.bind({})
Example.args = {
  steps: [
    { name: 'First Step', count: 4 },
    { name: 'Second Step', count: 8.2 },
    { name: 'Third Step', count: 5 },
    { name: 'Fourth Step', count: 13.4 },
    { name: 'Fifth Step', count: 9 }
  ]
}

export const LongStepNames: Story<AverageStepDurationGraphProps> =
  Template.bind({})
LongStepNames.args = {
  steps: [
    { name: 'First Very Long Title Step', count: 4 },
    { name: 'Second Very Long Title Step', count: 8.2 },
    { name: 'Third Very Long Title Step', count: 5 },
    { name: 'Fourth Very Long Title Step', count: 13.4 },
    { name: 'Fifth Very Long Title Step', count: 9 }
  ]
}

export const SameNameSteps: Story<AverageStepDurationGraphProps> =
  Template.bind({})
SameNameSteps.args = {
  steps: [
    { name: 'Same Step Name', count: 4 },
    { name: 'Same Step Name', count: 8.2 },
    { name: 'Same Step Name', count: 5 },
    { name: 'Same Step Name', count: 13.4 },
    { name: 'Same Step Name', count: 9 },
    { name: 'Same Step Name', count: 4 },
    { name: 'Same Step Name', count: 9 },
    { name: 'Same Step Name', count: 14.2 },
    { name: 'Same Step Name', count: 9 }
  ]
}

export const LotsOfSteps: Story<AverageStepDurationGraphProps> = Template.bind(
  {}
)
LotsOfSteps.args = {
  steps: [
    { name: 'First Very Long Title Step', count: 4 },
    { name: 'Second Very Long Title Step', count: 8.2 },
    { name: 'Third Very Long Title Step', count: 5 },
    { name: 'Fourth Very Long Title Step', count: 13.4 },
    { name: 'Fifth Very Long Title Step', count: 9 },
    { name: 'Another Very Long Title Step', count: 9 },
    { name: 'Another Very Long Title Step', count: 9 },
    { name: 'Another Very Long Title Step', count: 9 },
    { name: 'Another Very Long Title Step', count: 9 }
  ]
}

export const CustomColors: Story<AverageStepDurationGraphProps> = Template.bind(
  {}
)
CustomColors.args = {
  steps: [
    { name: 'Some Step', count: 4 },
    { name: 'Some Step', count: 8.2 },
    { name: 'Some Step', count: 5 },
    { name: 'Some Step', count: 13.4 },
    { name: 'Some Step', count: 9 },
    { name: 'Some Step', count: 4 },
    { name: 'Some Step', count: 9 },
    { name: 'Some Step', count: 14.2 },
    { name: 'Some Step', count: 9 }
  ],
  colors: [
    '#b6ec78',
    '#64c052',
    '#2d8d20',
    '#ddaa1f',
    '#b6922f',
    '#db5a5a',
    '#e42727'
  ],
  legend: 'Dias'
}

export const CustomColors2: Story<AverageStepDurationGraphProps> =
  Template.bind({})
CustomColors2.args = {
  steps: [
    { name: 'Some Step', count: 4 },
    { name: 'Some Step', count: 8.2 },
    { name: 'Some Step', count: 5 },
    { name: 'Some Step', count: 13.4 },
    { name: 'Some Step', count: 9 },
    { name: 'Some Step', count: 4 },
    { name: 'Some Step', count: 9 },
    { name: 'Some Step', count: 14.2 },
    { name: 'Some Step', count: 9 }
  ],
  colors: 'blues',
  legend: 'Dias'
}

export const Vertical: Story<AverageStepDurationGraphProps> = Template.bind({})
Vertical.args = {
  vertical: true,
  steps: [
    { name: 'Some Step', count: 4 },
    { name: 'Some Step', count: 8.2 },
    { name: 'Some Step', count: 5 },
    { name: 'Some Step name', count: 13.4 },
    { name: 'Some Step', count: 9 },
    { name: 'Some Step', count: 4 },
    { name: 'Another Step', count: 9 },
    { name: 'Some Step', count: 14.2 },
    { name: 'Some Step', count: 9 }
  ],
  colors: 'blues'
}
`,locationsMap:{example:{startLoc:{col:66,line:19},endLoc:{col:1,line:25},startBody:{col:66,line:19},endBody:{col:1,line:25}},"long-step-names":{startLoc:{col:66,line:19},endLoc:{col:1,line:25},startBody:{col:66,line:19},endBody:{col:1,line:25}},"same-name-steps":{startLoc:{col:66,line:19},endLoc:{col:1,line:25},startBody:{col:66,line:19},endBody:{col:1,line:25}},"lots-of-steps":{startLoc:{col:66,line:19},endLoc:{col:1,line:25},startBody:{col:66,line:19},endBody:{col:1,line:25}},"custom-colors":{startLoc:{col:66,line:19},endLoc:{col:1,line:25},startBody:{col:66,line:19},endBody:{col:1,line:25}},"custom-colors-2":{startLoc:{col:66,line:19},endLoc:{col:1,line:25},startBody:{col:66,line:19},endBody:{col:1,line:25}},vertical:{startLoc:{col:66,line:19},endLoc:{col:1,line:25},startBody:{col:66,line:19},endBody:{col:1,line:25}}}},badges:["Added: 1.8.0"]}};const K=e=>A(k,{container:!0,children:A(R,{style:{height:500,width:"100%",padding:24},children:A(ie,r({},e))})}),to=K.bind({});to.args={steps:[{name:"First Step",count:4},{name:"Second Step",count:8.2},{name:"Third Step",count:5},{name:"Fourth Step",count:13.4},{name:"Fifth Step",count:9}]};const ao=K.bind({});ao.args={steps:[{name:"First Very Long Title Step",count:4},{name:"Second Very Long Title Step",count:8.2},{name:"Third Very Long Title Step",count:5},{name:"Fourth Very Long Title Step",count:13.4},{name:"Fifth Very Long Title Step",count:9}]};const no=K.bind({});no.args={steps:[{name:"Same Step Name",count:4},{name:"Same Step Name",count:8.2},{name:"Same Step Name",count:5},{name:"Same Step Name",count:13.4},{name:"Same Step Name",count:9},{name:"Same Step Name",count:4},{name:"Same Step Name",count:9},{name:"Same Step Name",count:14.2},{name:"Same Step Name",count:9}]};const ro=K.bind({});ro.args={steps:[{name:"First Very Long Title Step",count:4},{name:"Second Very Long Title Step",count:8.2},{name:"Third Very Long Title Step",count:5},{name:"Fourth Very Long Title Step",count:13.4},{name:"Fifth Very Long Title Step",count:9},{name:"Another Very Long Title Step",count:9},{name:"Another Very Long Title Step",count:9},{name:"Another Very Long Title Step",count:9},{name:"Another Very Long Title Step",count:9}]};const lo=K.bind({});lo.args={steps:[{name:"Some Step",count:4},{name:"Some Step",count:8.2},{name:"Some Step",count:5},{name:"Some Step",count:13.4},{name:"Some Step",count:9},{name:"Some Step",count:4},{name:"Some Step",count:9},{name:"Some Step",count:14.2},{name:"Some Step",count:9}],colors:["#b6ec78","#64c052","#2d8d20","#ddaa1f","#b6922f","#db5a5a","#e42727"],legend:"Dias"};const io=K.bind({});io.args={steps:[{name:"Some Step",count:4},{name:"Some Step",count:8.2},{name:"Some Step",count:5},{name:"Some Step",count:13.4},{name:"Some Step",count:9},{name:"Some Step",count:4},{name:"Some Step",count:9},{name:"Some Step",count:14.2},{name:"Some Step",count:9}],colors:"blues",legend:"Dias"};const so=K.bind({});so.args={vertical:!0,steps:[{name:"Some Step",count:4},{name:"Some Step",count:8.2},{name:"Some Step",count:5},{name:"Some Step name",count:13.4},{name:"Some Step",count:9},{name:"Some Step",count:4},{name:"Another Step",count:9},{name:"Some Step",count:14.2},{name:"Some Step",count:9}],colors:"blues"};const bn=["Example","LongStepNames","SameNameSteps","LotsOfSteps","CustomColors","CustomColors2","Vertical"];var fn=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:mn,Example:to,LongStepNames:ao,SameNameSteps:no,LotsOfSteps:ro,CustomColors:lo,CustomColors2:io,Vertical:so,__namedExportsOrder:bn});const $e=e=>`${(e*100).toFixed(0)}%`,gn=(e,o=0)=>`${(parseFloat(e.toString())/1e3).toFixed(o)}k`,RA=(e,o="pt")=>{try{return Intl.NumberFormat(o,{style:"currency",currency:"BRL",currencyDisplay:"symbol",maximumFractionDigits:0}).format(Math.trunc(e))}catch{return`R$ ${e.toFixed(0).split("").reduce((l,i,s)=>l+(s&&!((e.toFixed(0).length-s)%3)?".":"")+i,"")}`}};function Sn(e,o=40){return e?e.length>o?`${e.substring(0,o-3).trimEnd()}...`:e:null}const E=({text:e,value:o,color:a,children:n,isPercentage:l=!1})=>{var s,c,d;const i=ke();return A("div",{style:(s=i.tooltip)==null?void 0:s.container,children:p("div",{style:(c=i.tooltip)==null?void 0:c.basic,children:[A(qt,{color:a,style:(d=i.tooltip)==null?void 0:d.chip}),p("span",{style:{marginLeft:6},children:[e,":"," ",A("strong",{children:l?$e(o):o}),n]})]})})};try{E.displayName="NivoTextTooltip",E.__docgenInfo={description:`Replace a base nivo Tooltip with a custom Tooltip with color chip using
this component, like below:

\`\`\`tsx
<ResponsiveBar
  data={data}
  tooltip={(input) => (
    <NivoTextTooltip
      text={(input.id as string)?.replace(/ *\\([^)]*\\)/, '')}
      value={input.value}
      color={input.color}
    >
      <br />
      Some extra info:
      {' '}
      <strong>{input.data.expected_count}</strong>
    </NivoTextTooltip>
  )}
/>
\`\`\``,displayName:"NivoTextTooltip",props:{text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string | number"}},color:{defaultValue:null,description:"",name:"color",required:!0,type:{name:"string"}},isPercentage:{defaultValue:{value:"false"},description:"",name:"isPercentage",required:!1,type:{name:"true"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/graphs/NivoTextTooltip.tsx#NivoTextTooltip"]={docgenInfo:E.__docgenInfo,name:"NivoTextTooltip",path:"src/components/graphs/NivoTextTooltip.tsx#NivoTextTooltip"})}catch{}const yn=oA(()=>({mobileDiversityContainer:{height:"15%"}})),se=i=>{var s=i,{data:e,key:o="question",verticalGraph:a=!1,isPercentage:n=!1}=s,l=v(s,["data","key","verticalGraph","isPercentage"]);const c=ke(),d=yn(),f=S.exports.useMemo(()=>{const m=new Set;return e&&(e.forEach(y=>{Object.keys(y).forEach(N=>m.add(N))}),m.delete(o),m.delete("total")),m},[e]),g=m=>{const y=`${Sn(m.id.toString(),20)}:`;if(n)return`${y} ${$e(m.value)}`;const N=m.value/m.data.total;return`${y} ${$e(N)}`},x=m=>A(E,{text:m.id,value:m.value,color:m.color,isPercentage:n||void 0}),h={groupMode:"stacked",colors:{scheme:"pastel1"},theme:c,keys:Array.from(f),animate:!0,label:m=>g(m)};return a?A(B.Fragment,{children:e.map((m,y)=>p(B.Fragment,{children:[A(J,{variant:"subtitle2",children:m.question}),A("div",{className:d.mobileDiversityContainer,children:A(Ee,r(u(r({},h),{data:[m],labelTextColor:"rgba(0, 0, 0, 0.87);",tooltip:x,margin:{top:40,right:0,bottom:40,left:0},axisBottom:{tickSize:0,tickPadding:5,tickRotation:0,format:()=>""},layout:"horizontal",labelSkipWidth:64}),l))})]},`diversity-datum-${y}-${m.question}`))}):A("span",{style:{cursor:"pointer"},role:"button",children:A(Ee,r(u(r({},h),{data:e,labelTextColor:"rgba(0, 0, 0, 0.87);",tooltip:x,indexBy:"question",margin:{top:30,right:40,bottom:15,left:40},axisTop:{},axisBottom:{format:()=>""},axisLeft:{format:m=>n?`${m*100}%`:m},layout:"vertical",padding:.3,labelSkipHeight:15}),l))})};try{se.displayName="DiversityBarGraph",se.__docgenInfo={description:"",displayName:"DiversityBarGraph",props:{verticalGraph:{defaultValue:{value:"false"},description:"",name:"verticalGraph",required:!1,type:{name:"boolean"}},key:{defaultValue:{value:"question"},description:"",name:"key",required:!1,type:{name:"string"}},isPercentage:{defaultValue:{value:"false"},description:"",name:"isPercentage",required:!1,type:{name:"boolean"}},data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"(DatumWithTotal[] & Record<string, unknown>[]) | (Datum[] & Record<string, unknown>[])"}},indexBy:{defaultValue:null,description:"",name:"indexBy",required:!1,type:{name:"string | IndexByFunc"}},keys:{defaultValue:null,description:"",name:"keys",required:!1,type:{name:"string[]"}},groupMode:{defaultValue:null,description:"",name:"groupMode",required:!1,type:{name:"enum",value:[{value:'"stacked"'},{value:'"grouped"'}]}},layout:{defaultValue:null,description:"",name:"layout",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},reverse:{defaultValue:null,description:"",name:"reverse",required:!1,type:{name:"boolean"}},innerPadding:{defaultValue:null,description:"",name:"innerPadding",required:!1,type:{name:"number"}},minValue:{defaultValue:null,description:"",name:"minValue",required:!1,type:{name:'number | "auto"'}},margin:{defaultValue:null,description:"",name:"margin",required:!1,type:{name:"Partial<Margin>"}},maxValue:{defaultValue:null,description:"",name:"maxValue",required:!1,type:{name:'number | "auto"'}},padding:{defaultValue:null,description:"",name:"padding",required:!1,type:{name:"number"}},valueScale:{defaultValue:null,description:"",name:"valueScale",required:!1,type:{name:"ScaleSpec"}},indexScale:{defaultValue:null,description:"",name:"indexScale",required:!1,type:{name:"ScaleBandSpec"}},axisBottom:{defaultValue:null,description:"",name:"axisBottom",required:!1,type:{name:"AxisProps<any> | null"}},axisLeft:{defaultValue:null,description:"",name:"axisLeft",required:!1,type:{name:"AxisProps<any> | null"}},axisRight:{defaultValue:null,description:"",name:"axisRight",required:!1,type:{name:"AxisProps<any> | null"}},axisTop:{defaultValue:null,description:"",name:"axisTop",required:!1,type:{name:"AxisProps<any> | null"}},enableGridX:{defaultValue:null,description:"",name:"enableGridX",required:!1,type:{name:"boolean"}},gridXValues:{defaultValue:null,description:"",name:"gridXValues",required:!1,type:{name:"GridValues<Value>"}},enableGridY:{defaultValue:null,description:"",name:"enableGridY",required:!1,type:{name:"boolean"}},gridYValues:{defaultValue:null,description:"",name:"gridYValues",required:!1,type:{name:"GridValues<Value>"}},barComponent:{defaultValue:null,description:"",name:"barComponent",required:!1,type:{name:"FC<BarItemProps>"}},enableLabel:{defaultValue:null,description:"",name:"enableLabel",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string | AccessorFunc"}},labelFormat:{defaultValue:null,description:"",name:"labelFormat",required:!1,type:{name:"string | LabelFormatter"}},labelLinkColor:{defaultValue:null,description:"",name:"labelLinkColor",required:!1,type:{name:"InheritedColorConfig<BarDatumWithColor>"}},labelSkipWidth:{defaultValue:null,description:"",name:"labelSkipWidth",required:!1,type:{name:"number"}},labelSkipHeight:{defaultValue:null,description:"",name:"labelSkipHeight",required:!1,type:{name:"number"}},labelTextColor:{defaultValue:null,description:"",name:"labelTextColor",required:!1,type:{name:"InheritedColorConfig<BarDatumWithColor>"}},colors:{defaultValue:null,description:"",name:"colors",required:!1,type:{name:"OrdinalColorScaleConfig<any>"}},borderColor:{defaultValue:null,description:"",name:"borderColor",required:!1,type:{name:"InheritedColorConfig<BarDatumWithColor>"}},borderRadius:{defaultValue:null,description:"",name:"borderRadius",required:!1,type:{name:"number"}},borderWidth:{defaultValue:null,description:"",name:"borderWidth",required:!1,type:{name:"number"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:'Partial<Pick<CompleteTheme, "fontFamily" | "fontSize" | "background" | "textColor"> & { crosshair: Partial<{ line: Partial<{ stroke: string; strokeWidth: number; strokeOpacity: number; strokeDasharray: string; }>; }>; ... 7 more ...; annotations: Partial<...>; }>'}},isInteractive:{defaultValue:null,description:"",name:"isInteractive",required:!1,type:{name:"boolean"}},tooltipFormat:{defaultValue:null,description:"",name:"tooltipFormat",required:!1,type:{name:"string | ValueFormatter"}},tooltip:{defaultValue:null,description:"",name:"tooltip",required:!1,type:{name:"TooltipProp"}},legends:{defaultValue:null,description:"",name:"legends",required:!1,type:{name:'({ dataFrom: "keys" | "indexes"; } & { translateX?: number; translateY?: number; anchor: LegendAnchor; toggleSerie?: boolean | undefined; } & CommonLegendProps & Partial<...> & Omit<...>)[] | undefined'}},markers:{defaultValue:null,description:"",name:"markers",required:!1,type:{name:"CartesianMarkerProps[]"}},renderWrapper:{defaultValue:null,description:"",name:"renderWrapper",required:!1,type:{name:"boolean"}},animate:{defaultValue:null,description:"",name:"animate",required:!1,type:{name:"boolean"}},motionDamping:{defaultValue:null,description:"",name:"motionDamping",required:!1,type:{name:"number"}},motionStiffness:{defaultValue:null,description:"",name:"motionStiffness",required:!1,type:{name:"number"}},layers:{defaultValue:null,description:"",name:"layers",required:!1,type:{name:"Layer[]"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"BarMouseEventHandler<SVGElement>"}},onMouseEnter:{defaultValue:null,description:"",name:"onMouseEnter",required:!1,type:{name:"BarMouseEventHandler<SVGElement>"}},onMouseLeave:{defaultValue:null,description:"",name:"onMouseLeave",required:!1,type:{name:"BarMouseEventHandler<SVGElement>"}},role:{defaultValue:null,description:"",name:"role",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/graphs/bar/DiversityBarGraph.tsx#DiversityBarGraph"]={docgenInfo:se.__docgenInfo,name:"DiversityBarGraph",path:"src/components/graphs/bar/DiversityBarGraph.tsx#DiversityBarGraph"})}catch{}var hn={parameters:{storySource:{source:`import React from 'react'

import { ComponentMeta, ComponentStory, Story } from '@storybook/react'

import { Card, Grid } from '@mui/material'

import DiversityBarGraph, {
  Datum,
  DatumWithTotal,
  Props
} from '../../components/graphs/bar/DiversityBarGraph'

export default {
  title: 'Graphs/DiversityBarGraph',
  component: DiversityBarGraph
} as ComponentMeta<typeof DiversityBarGraph>

const Template: ComponentStory<typeof DiversityBarGraph> = (args) => (
  <Grid container style={{ height: 500, width: 1070 }}>
    <Card style={{ height: '100%', width: '100%', padding: 24 }}>
      <DiversityBarGraph {...args} />
    </Card>
  </Grid>
)

const data: Datum[] = [
  {
    question: 'PCD',
    'Prefiro n\xE3o responder a esta pergunta.': 10,
    total: 157,
    'Defici\xEAncia visual': 1,
    N\xE3o: 146
  },
  {
    question: 'Cor da pele',
    Pardo: 16,
    total: 157,
    'Prefiro n\xE3o responder a esta pergunta.': 11,
    Branco: 114,
    Preto: 11,
    Amarelo: 2
  },
  {
    question: 'Identidade de G\xEAnero',
    'Prefiro n\xE3o responder a esta pergunta.': 14,
    total: 157,
    Cisg\xEAnero: 125
  },
  {
    question: 'G\xEAnero',
    Feminino: 37,
    total: 157,
    'Prefiro n\xE3o responder a esta pergunta.': 10,
    Masculino: 92
  },
  {
    question: 'Orienta\xE7\xE3o Sexual',
    'Prefiro n\xE3o responder a esta pergunta.': 12,
    total: 157,
    Outro: 2,
    Heterossexual: 141,
    Bissexual: 4,
    Homossexual: 7
  }
]

const toPercentageValues = (datum: Datum): DatumWithTotal => {
  const copy = { ...datum }

  for (const key of Object.keys(datum)) {
    if (key === 'total' || typeof datum[key] === 'string') continue

    copy[key] = (datum[key] as number) / (datum.total as number)
  }

  return { ...copy, total: 1 }
}

const percentageData = data.map(toPercentageValues)

export const Horizontal: Story<Props> = Template.bind({})
Horizontal.args = {
  data
}

export const Vertical: Story<Props> = Template.bind({})
Vertical.args = {
  data,
  verticalGraph: true
}

export const HorizontalPercentage: Story<Props> = Template.bind({})
HorizontalPercentage.args = {
  data: percentageData,
  isPercentage: true
}

export const VerticalPercentage: Story<Props> = Template.bind({})
VerticalPercentage.args = {
  data: percentageData,
  isPercentage: true,
  verticalGraph: true
}
`,locationsMap:{horizontal:{startLoc:{col:59,line:18},endLoc:{col:1,line:24},startBody:{col:59,line:18},endBody:{col:1,line:24}},vertical:{startLoc:{col:59,line:18},endLoc:{col:1,line:24},startBody:{col:59,line:18},endBody:{col:1,line:24}},"horizontal-percentage":{startLoc:{col:59,line:18},endLoc:{col:1,line:24},startBody:{col:59,line:18},endBody:{col:1,line:24}},"vertical-percentage":{startLoc:{col:59,line:18},endLoc:{col:1,line:24},startBody:{col:59,line:18},endBody:{col:1,line:24}}}}},title:"Graphs/DiversityBarGraph",component:se};const Oe=e=>A(k,{container:!0,style:{height:500,width:1070},children:A(R,{style:{height:"100%",width:"100%",padding:24},children:A(se,r({},e))})}),uA=[{question:"PCD","Prefiro n\xE3o responder a esta pergunta.":10,total:157,"Defici\xEAncia visual":1,N\u00E3o:146},{question:"Cor da pele",Pardo:16,total:157,"Prefiro n\xE3o responder a esta pergunta.":11,Branco:114,Preto:11,Amarelo:2},{question:"Identidade de G\xEAnero","Prefiro n\xE3o responder a esta pergunta.":14,total:157,Cisg\u00EAnero:125},{question:"G\xEAnero",Feminino:37,total:157,"Prefiro n\xE3o responder a esta pergunta.":10,Masculino:92},{question:"Orienta\xE7\xE3o Sexual","Prefiro n\xE3o responder a esta pergunta.":12,total:157,Outro:2,Heterossexual:141,Bissexual:4,Homossexual:7}],Nn=e=>{const o=r({},e);for(const a of Object.keys(e))a==="total"||typeof e[a]=="string"||(o[a]=e[a]/e.total);return u(r({},o),{total:1})},uo=uA.map(Nn),po=Oe.bind({});po.args={data:uA};const co=Oe.bind({});co.args={data:uA,verticalGraph:!0};const mo=Oe.bind({});mo.args={data:uo,isPercentage:!0};const bo=Oe.bind({});bo.args={data:uo,isPercentage:!0,verticalGraph:!0};const vn=["Horizontal","Vertical","HorizontalPercentage","VerticalPercentage"];var qn=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:hn,Horizontal:po,Vertical:co,HorizontalPercentage:mo,VerticalPercentage:bo,__namedExportsOrder:vn});const He="InfoLabel",Y={root:`${He}-root`,value:`${He}-value`,label:`${He}-label`},Cn=ae(k)(({theme:e})=>({[`&.${Y.root}`]:{textAlign:"center"},[`& .${Y.value}`]:{fontWeight:e.typography.fontWeightBold,fontSize:38},[`& .${Y.label}`]:{fontSize:16}})),ue=({value:e,text:o,marginTop:a=0})=>p(Cn,{container:!0,spacing:1,className:Y.root,sx:{marginTop:a},children:[A(k,{item:!0,xs:12,children:A("span",{className:Y.value,children:e})}),A(k,{item:!0,xs:12,children:A("span",{className:Y.label,children:o})})]});try{ue.displayName="InfoLabel",ue.__docgenInfo={description:"",displayName:"InfoLabel",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string | number"}},text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}},marginTop:{defaultValue:{value:"0"},description:"",name:"marginTop",required:!1,type:{name:"number"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/InfoLabel.tsx#InfoLabel"]={docgenInfo:ue.__docgenInfo,name:"InfoLabel",path:"src/components/InfoLabel.tsx#InfoLabel"})}catch{}var kn={parameters:{storySource:{source:`import React from 'react'

import { ComponentMeta, ComponentStory, Story } from '@storybook/react'

import { Card } from '@mui/material'

import InfoLabel, { Props } from '../../components/InfoLabel'

export default {
  title: 'Graphs/InfoLabel',
  component: InfoLabel
} as ComponentMeta<typeof InfoLabel>

const Template: ComponentStory<typeof InfoLabel> = (args) => (
  <Card variant='outlined'>
    <InfoLabel {...args} />
  </Card>
)

export const NumberLabel: Story<Props> = Template.bind({})
NumberLabel.args = {
  value: 455_320,
  text: 'Some Text'
}

export const TextLabel: Story<Props> = Template.bind({})
TextLabel.args = {
  value: 'Some info',
  text: 'Some Text'
}
`,locationsMap:{"number-label":{startLoc:{col:51,line:14},endLoc:{col:1,line:18},startBody:{col:51,line:14},endBody:{col:1,line:18}},"text-label":{startLoc:{col:51,line:14},endLoc:{col:1,line:18},startBody:{col:51,line:14},endBody:{col:1,line:18}}}}},title:"Graphs/InfoLabel",component:ue};const fo=e=>A(R,{variant:"outlined",children:A(ue,r({},e))}),go=fo.bind({});go.args={value:455320,text:"Some Text"};const So=fo.bind({});So.args={value:"Some info",text:"Some Text"};const Rn=["NumberLabel","TextLabel"];var Qn=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:kn,NumberLabel:go,TextLabel:So,__namedExportsOrder:Rn}),xn={parameters:{storySource:{source:`import React from 'react'

import { ComponentMeta, ComponentStory, Story } from '@storybook/react'

import { Card, Grid } from '@mui/material'

import NivoTextTooltip, { Props } from '../../components/graphs/NivoTextTooltip'

export default {
  title: 'Graphs/NivoTextTooltip',
  component: NivoTextTooltip
} as ComponentMeta<typeof NivoTextTooltip>

const Template: ComponentStory<typeof NivoTextTooltip> = (args) => (
  <Grid container>
    <Card style={{ height: '100%', width: '100%', padding: 24 }}>
      <NivoTextTooltip {...args} />
    </Card>
  </Grid>
)

export const StringValue: Story<Props> = Template.bind({})
StringValue.args = {
  text: 'Some value',
  value: '55.45',
  color: '#fff'
}

export const PercentageValue: Story<Props> = Template.bind({})
PercentageValue.args = {
  text: 'Some percentage value',
  value: 0.55,
  color: '#fff',
  isPercentage: true
}
`,locationsMap:{"string-value":{startLoc:{col:57,line:14},endLoc:{col:1,line:20},startBody:{col:57,line:14},endBody:{col:1,line:20}},"percentage-value":{startLoc:{col:57,line:14},endLoc:{col:1,line:20},startBody:{col:57,line:14},endBody:{col:1,line:20}}}}},title:"Graphs/NivoTextTooltip",component:E};const yo=e=>A(k,{container:!0,children:A(R,{style:{height:"100%",width:"100%",padding:24},children:A(E,r({},e))})}),ho=yo.bind({});ho.args={text:"Some value",value:"55.45",color:"#fff"};const No=yo.bind({});No.args={text:"Some percentage value",value:.55,color:"#fff",isPercentage:!0};const Dn=["StringValue","PercentageValue"];var Bn=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:xn,StringValue:ho,PercentageValue:No,__namedExportsOrder:Dn});const Ve=()=>{const e=O(),o=xe(e.breakpoints.down("md")),a=xe(e.breakpoints.down("lg")),n=xe(e.breakpoints.up("xl"));return{isMobile:o,isTablet:a,isWide:n}},Pn=e=>{const[o,a]=S.exports.useState(e);return[o,()=>a(!o)]},Me="RejectionsSunburst",_={container:`${Me}-container`,rejectionGraph:`${Me}-rejectionGraph`,legendsStyle:`${Me}-legendsStyle`},Wn=ae(k)(()=>({[`&.${_.container}`]:{height:"100%"},[`& .${_.rejectionGraph}`]:{height:"80%",marginTop:"5%"},[`& .${_.legendsStyle}`]:{marginTop:"2%"}})),pe=a=>{var n=a,{data:e}=n,o=v(n,["data"]);const{isMobile:l}=Ve(),i=O(),s=S.exports.useMemo(()=>!e||!e.children?[]:e.children.map(d=>({id:d.name,label:d.name,value:1})),[e]),c=S.exports.useMemo(()=>!l||!e||!e.children?e:u(r({},e),{children:e.children.map(d=>{var f;return u(r({},d),{count:(f=e==null?void 0:e.children)==null?void 0:f.reduce((g,x)=>g+=x.count||0,0),children:[]})})}),[e,l]);return p(Wn,{container:!0,className:_.container,children:[A(k,{item:!0,xs:l?8:12,md:l?8:12,className:_.rejectionGraph,children:A(Ct,r({data:c,margin:{top:0,right:30,bottom:0,left:10},id:"name",value:"count",cornerRadius:2,borderColor:i.palette.background.paper,childColor:{from:"color",modifiers:[["brighter",.1]]},enableArcLabels:!0,arcLabelsSkipAngle:10,borderWidth:2,arcLabelsTextColor:{from:"color",modifiers:[["darker",1.4]]},arcLabel:d=>d.formattedValue.replace(/\.[0-9]*?(?=%)/,""),tooltip:d=>A(E,{text:d.id,value:d.value,color:d.color})},o))}),A(k,{item:!0,xs:l?4:12,md:l?4:12,className:_.legendsStyle,children:A(kt,{data:s,margin:{top:l?20:-10,right:70,bottom:0,left:51},layers:["legends"],legends:[u(r({},sA),{direction:l?"column":"row",translateY:l?50:20,anchor:"top",itemTextColor:"#999",itemWidth:70,symbolSize:l?10:15,itemsSpacing:l?10:29})]})})]})};try{pe.displayName="RejectionsSunburst",pe.__docgenInfo={description:"",displayName:"RejectionsSunburst",props:{animate:{defaultValue:null,description:"",name:"animate",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"PropertyAccessor<Datum, DatumId>"}},role:{defaultValue:null,description:"",name:"role",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"MouseHandler<Datum>"}},onMouseEnter:{defaultValue:null,description:"",name:"onMouseEnter",required:!1,type:{name:"MouseHandler<Datum>"}},onMouseLeave:{defaultValue:null,description:"",name:"onMouseLeave",required:!1,type:{name:"MouseHandler<Datum>"}},onMouseMove:{defaultValue:null,description:"",name:"onMouseMove",required:!1,type:{name:"MouseHandler<Datum>"}},tooltip:{defaultValue:null,description:"",name:"tooltip",required:!1,type:{name:"((props: ComputedDatum<Datum>) => Element)"}},borderColor:{defaultValue:null,description:"",name:"borderColor",required:!1,type:{name:"InheritedColorConfig<ComputedDatum<Datum>>"}},borderWidth:{defaultValue:null,description:"",name:"borderWidth",required:!1,type:{name:"number"}},margin:{defaultValue:null,description:"",name:"margin",required:!1,type:{name:"Partial<Margin>"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"PropertyAccessor<Datum, number>"}},isInteractive:{defaultValue:null,description:"",name:"isInteractive",required:!1,type:{name:"boolean"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:'Partial<Pick<CompleteTheme, "fontFamily" | "fontSize" | "background" | "textColor"> & { crosshair: Partial<{ line: Partial<{ stroke: string; strokeWidth: number; strokeOpacity: number; strokeDasharray: string; }>; }>; ... 7 more ...; annotations: Partial<...>; }>'}},colors:{defaultValue:null,description:"",name:"colors",required:!1,type:{name:'OrdinalColorScaleConfig<Omit<ComputedDatum<Datum>, "color" | "fill">>'}},colorBy:{defaultValue:null,description:"",name:"colorBy",required:!1,type:{name:"enum",value:[{value:'"id"'},{value:'"depth"'}]}},valueFormat:{defaultValue:null,description:"",name:"valueFormat",required:!1,type:{name:"ValueFormat<number>"}},cornerRadius:{defaultValue:null,description:"",name:"cornerRadius",required:!1,type:{name:"number"}},inheritColorFromParent:{defaultValue:null,description:"",name:"inheritColorFromParent",required:!1,type:{name:"boolean"}},childColor:{defaultValue:null,description:"",name:"childColor",required:!1,type:{name:"InheritedColorConfig<ComputedDatum<Datum>>"}},enableArcLabels:{defaultValue:null,description:"",name:"enableArcLabels",required:!1,type:{name:"boolean"}},layers:{defaultValue:null,description:"",name:"layers",required:!1,type:{name:"SunburstLayer<Datum>[]"}},transitionMode:{defaultValue:null,description:"",name:"transitionMode",required:!1,type:{name:"enum",value:[{value:'"startAngle"'},{value:'"middleAngle"'},{value:'"endAngle"'},{value:'"innerRadius"'},{value:'"centerRadius"'},{value:'"outerRadius"'},{value:'"pushIn"'},{value:'"pushOut"'}]}},motionConfig:{defaultValue:null,description:"",name:"motionConfig",required:!1,type:{name:"string | Partial<AnimationConfig>"}},data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"Datum"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/graphs/RejectionsSunburst.tsx#RejectionsSunburst"]={docgenInfo:pe.__docgenInfo,name:"RejectionsSunburst",path:"src/components/graphs/RejectionsSunburst.tsx#RejectionsSunburst"})}catch{}var jn={parameters:{storySource:{source:`import React from 'react'

import { ComponentMeta, ComponentStory, Story } from '@storybook/react'

import { Card, Grid } from '@mui/material'

import RejectionsSunburst, {
  Props
} from '../../components/graphs/RejectionsSunburst'

export default {
  title: 'Graphs/RejectionsSunburst',
  component: RejectionsSunburst
} as ComponentMeta<typeof RejectionsSunburst>

const Template: ComponentStory<typeof RejectionsSunburst> = (args) => (
  <Grid container style={{ height: 500 }}>
    <Card style={{ height: '100%', width: '100%', padding: 24 }}>
      <RejectionsSunburst {...args} />
    </Card>
  </Grid>
)

const data: Props['data'] = {
  name: 'rejections',
  color: 'hsl(258, 70%, 50%)',
  children: [
    {
      name: 'Sem interesse',
      children: [
        {
          count: 45,
          name: 'Sem interesse - VVVVVV',
          color: 'hsl(13, 70%, 50%)'
        },
        {
          count: 12,
          name: 'Sem interesse - ZZZZZZ',
          color: 'hsl(13, 70%, 50%)'
        },
        {
          count: 6,
          name: 'Sem interesse - XXXXXXX',
          color: 'hsl(13, 70%, 50%)'
        }
      ]
    },
    {
      name: 'T\xE9cnico',
      children: [
        {
          count: 23,
          name: 'T\xE9cnico - QQQQQQQQ',
          color: 'hsl(13, 70%, 50%)'
        },
        {
          count: 67,
          name: 'T\xE9cnico - DDDDDD',
          color: 'hsl(13, 70%, 50%)'
        },
        {
          count: 23,
          name: 'T\xE9cnico - BBBBBB',
          color: 'hsl(13, 70%, 50%)'
        },
        {
          count: 43,
          name: 'T\xE9cnico - CCCCCC',
          color: 'hsl(13, 70%, 50%)'
        },
        {
          count: 54,
          name: 'T\xE9cnico - AAAAAA',
          color: 'hsl(13, 70%, 50%)'
        },
        {
          count: 76,
          name: 'T\xE9cnico - YYYYYY',
          color: 'hsl(13, 70%, 50%)'
        },
        {
          count: 4,
          name: 'T\xE9cnico - GGGGGG',
          color: 'hsl(13, 70%, 50%)'
        }
      ]
    },
    {
      name: 'Outros',
      children: [
        {
          count: 12,
          name: 'Outros - FFFFF',
          color: 'hsl(13, 70%, 50%)'
        },
        {
          count: 4,
          name: 'Outros - VVVVV',
          color: 'hsl(13, 70%, 50%)'
        }
      ]
    },
    {
      name: 'Comportamental',
      children: [
        {
          count: 7,
          name: 'Comportamental - XXXXX',
          color: 'hsl(13, 70%, 50%)'
        },
        {
          count: 2,
          name: 'Comportamental - ZZZZZ',
          color: 'hsl(13, 70%, 50%)'
        },
        {
          count: 2,
          name: 'Comportamental - YYYYY',
          color: 'hsl(13, 70%, 50%)'
        }
      ]
    }
  ]
}

export const CommonRejection: Story<Props> = Template.bind({})
CommonRejection.args = {
  data
}
`,locationsMap:{"common-rejection":{startLoc:{col:60,line:16},endLoc:{col:1,line:22},startBody:{col:60,line:16},endBody:{col:1,line:22}}}}},title:"Graphs/RejectionsSunburst",component:pe};const Fn=e=>A(k,{container:!0,style:{height:500},children:A(R,{style:{height:"100%",width:"100%",padding:24},children:A(pe,r({},e))})}),Tn={name:"rejections",color:"hsl(258, 70%, 50%)",children:[{name:"Sem interesse",children:[{count:45,name:"Sem interesse - VVVVVV",color:"hsl(13, 70%, 50%)"},{count:12,name:"Sem interesse - ZZZZZZ",color:"hsl(13, 70%, 50%)"},{count:6,name:"Sem interesse - XXXXXXX",color:"hsl(13, 70%, 50%)"}]},{name:"T\xE9cnico",children:[{count:23,name:"T\xE9cnico - QQQQQQQQ",color:"hsl(13, 70%, 50%)"},{count:67,name:"T\xE9cnico - DDDDDD",color:"hsl(13, 70%, 50%)"},{count:23,name:"T\xE9cnico - BBBBBB",color:"hsl(13, 70%, 50%)"},{count:43,name:"T\xE9cnico - CCCCCC",color:"hsl(13, 70%, 50%)"},{count:54,name:"T\xE9cnico - AAAAAA",color:"hsl(13, 70%, 50%)"},{count:76,name:"T\xE9cnico - YYYYYY",color:"hsl(13, 70%, 50%)"},{count:4,name:"T\xE9cnico - GGGGGG",color:"hsl(13, 70%, 50%)"}]},{name:"Outros",children:[{count:12,name:"Outros - FFFFF",color:"hsl(13, 70%, 50%)"},{count:4,name:"Outros - VVVVV",color:"hsl(13, 70%, 50%)"}]},{name:"Comportamental",children:[{count:7,name:"Comportamental - XXXXX",color:"hsl(13, 70%, 50%)"},{count:2,name:"Comportamental - ZZZZZ",color:"hsl(13, 70%, 50%)"},{count:2,name:"Comportamental - YYYYY",color:"hsl(13, 70%, 50%)"}]}]},vo=Fn.bind({});vo.args={data:Tn};const Ln=["CommonRejection"];var En=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:jn,CommonRejection:vo,__namedExportsOrder:Ln});const Jn="ClickableArea",qo={clickArea:`${Jn}-clickArea`},Xn=ae("span")(()=>({[`& .${qo.clickArea}`]:{cursor:"pointer",outline:"none"}})),$=({onClick:e,children:o,active:a=!0,useKeybinding:n=!0,keybinding:l="space"})=>A(Xn,{role:"button",tabIndex:0,onClick:a?e:void 0,onKeyDown:a?s=>{s.key===l&&n&&e()}:void 0,className:a?qo.clickArea:void 0,children:o});try{$.displayName="ClickableArea",$.__docgenInfo={description:`Use around a component to have it as a clickable area with a onClick callback

\`\`\`tsx
import { ClickableArea } from 'yu-open-lib'

const MyComponent = () => (
  <ClickableArea onClick={() => console.log('clicked card')}>
    <Card>
      <CardContent>My Card Content</CardContent>
    </Card>
  </ClickableArea>
)
\`\`\``,displayName:"ClickableArea",props:{onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"(e?: MouseEvent<HTMLSpanElement, MouseEvent> | undefined) => any"}},keybinding:{defaultValue:{value:"space"},description:"",name:"keybinding",required:!1,type:{name:"string"}},useKeybinding:{defaultValue:{value:"true"},description:"",name:"useKeybinding",required:!1,type:{name:"boolean"}},active:{defaultValue:{value:"true"},description:"",name:"active",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/ClickableArea.tsx#ClickableArea"]={docgenInfo:$.__docgenInfo,name:"ClickableArea",path:"src/components/ClickableArea.tsx#ClickableArea"})}catch{}const Pe=({bars:e,yScale:o,minValue:a,maxValue:n,sameValueLabel:l,maxValueLabel:i,minValueLabel:s,upperPosition:c=68,bottomPosition:d=76,boundModifier:f=1.2,color:g="red"})=>{const h=O();let m=null;n&&n>0&&(m=hA().x(I=>I.data.index*9999).y(()=>o(n)));let y=null;a&&a>0&&(y=hA().x(I=>I.data.index*9999).y(()=>o(a)));const N=n/f,q=(1-n/n)*(n>N?c:d);let D=null,W="",T="";n===a?(W=l,T=l,D=q):(W=i,T=s,D=(1-a/n)*(a>N?c:d));const Q=h.palette.getContrastText(h.palette.background.paper);return p(B.Fragment,{children:[n&&m&&p(B.Fragment,{children:[A("path",{d:m(e),strokeDasharray:"5, 5",stroke:g}),A("text",{fill:Q,x:"10",y:`${q}%`,children:W})]}),a&&y&&p(B.Fragment,{children:[A("path",{d:y(e),strokeDasharray:"5, 5",stroke:g}),A("text",{fill:Q,x:"10",y:`${D}%`,children:T})]})]})};try{Pe.displayName="BarGraphLine",Pe.__docgenInfo={description:"https://github.com/plouc/nivo/issues/141",displayName:"BarGraphLine",props:{minValue:{defaultValue:null,description:"",name:"minValue",required:!0,type:{name:"number"}},maxValue:{defaultValue:null,description:"",name:"maxValue",required:!0,type:{name:"number"}},sameValueLabel:{defaultValue:null,description:"",name:"sameValueLabel",required:!0,type:{name:"string"}},maxValueLabel:{defaultValue:null,description:"",name:"maxValueLabel",required:!0,type:{name:"string"}},minValueLabel:{defaultValue:null,description:"",name:"minValueLabel",required:!0,type:{name:"string"}},upperPosition:{defaultValue:{value:"68"},description:"",name:"upperPosition",required:!1,type:{name:"number"}},bottomPosition:{defaultValue:{value:"76"},description:"",name:"bottomPosition",required:!1,type:{name:"number"}},boundModifier:{defaultValue:{value:"1.2"},description:"",name:"boundModifier",required:!1,type:{name:"number"}},color:{defaultValue:{value:"red"},description:"default 'red'",name:"color",required:!1,type:{name:"string"}},bars:{defaultValue:null,description:"Passed from `layers` callback from nivo's ResponsiveBar",name:"bars",required:!1,type:{name:"any"}},yScale:{defaultValue:null,description:"Passed from `layers` callback from nivo's ResponsiveBar",name:"yScale",required:!1,type:{name:"any"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/graphs/bar/BarGraphLine.tsx#BarGraphLine"]={docgenInfo:Pe.__docgenInfo,name:"BarGraphLine",path:"src/components/graphs/bar/BarGraphLine.tsx#BarGraphLine"})}catch{}const de=x=>{var h=x,{legend:e,maxValue:o,keys:a,data:n,indexBy:l,line:i,samplingLabel:s,hasSampling:c=!0,startColor:d="#c4f7ff",endColor:f="#066878"}=h,g=v(h,["legend","maxValue","keys","data","indexBy","line","samplingLabel","hasSampling","startColor","endColor"]);const m=ke(),{isMobile:y}=Ve(),[N,q]=S.exports.useState(a[0]),D=()=>{const b=a.indexOf(N);b>=0&&b<a.length-1?q(a[b+1]):q(a[0])},[W]=S.exports.useState(()=>{const b=new Rt;return b.setGradient(d,f),b.setMidpoint(100),b}),T=S.exports.useMemo(()=>n.reduce((b,j)=>b+j.count,0),[n]),Q=S.exports.useMemo(()=>n.map(b=>u(r({},b),{color:W.getColor(Number.parseInt((b.count/(T||1)*100).toFixed(0),10)||1)})),[T,n,W]);if(!o&&!!i&&!!(i==null?void 0:i.maxValue)){const b=Math.max(...n.map(j=>j[a[0]]),...n.map(j=>j[a[1]]));b<(i==null?void 0:i.maxValue)&&(o=b+1e3)}const I=["grid","axes","bars","markers","legends"];return i&&I.push(({bars:b,yScale:j})=>A(Pe,r({bars:b,yScale:j},i))),A($,{onClick:D,active:a.length>1,children:A(Ee,r({axisTop:{legend:e,legendPosition:"start",legendOffset:-13,tickSize:0,format:()=>""},data:Q,maxValue:o,keys:[N],indexBy:l,margin:{top:20,right:10,bottom:65,left:60},label:b=>gn(b.value,1),padding:.2,groupMode:"grouped",valueScale:{type:"linear"},indexScale:{type:"band",round:!0},colors:b=>b.data.color,theme:m,borderColor:{from:"color",modifiers:[["darker",1.6]]},axisRight:null,axisLeft:{format:b=>RA(Number.parseInt(b,10))},axisBottom:{tickSize:5,tickPadding:5,tickRotation:y?-15:0,format:b=>b.length>18?p("tspan",{children:[b.substring(0,16).trim(),"...",A("title",{children:b})]}):b},labelSkipWidth:12,labelSkipHeight:35,labelTextColor:{from:"color",modifiers:[["darker",1.6]]},tooltip:b=>{var j;return A(E,{text:(j=b.id)==null?void 0:j.replace(/ *\([^)]*\)/,""),value:RA(b.value),color:b.color,children:c&&p(B.Fragment,{children:[A("br",{}),s,": ",A("strong",{children:b.data.count})]})})},legends:[u(r({},sA),{translateX:-110,dataFrom:"keys"})],animate:!0,layers:I},g))})};try{de.displayName="SalariesBarGraph",de.__docgenInfo={description:"",displayName:"SalariesBarGraph",props:{legend:{defaultValue:null,description:"",name:"legend",required:!0,type:{name:"string"}},maxValue:{defaultValue:null,description:"",name:"maxValue",required:!1,type:{name:"number"}},keys:{defaultValue:null,description:"",name:"keys",required:!0,type:{name:"string[]"}},indexBy:{defaultValue:null,description:"",name:"indexBy",required:!0,type:{name:"string & (string | IndexByFunc | undefined)"}},line:{defaultValue:null,description:"",name:"line",required:!1,type:{name:"Props"}},startColor:{defaultValue:{value:"#c4f7ff"},description:"",name:"startColor",required:!1,type:{name:"string"}},endColor:{defaultValue:{value:"#066878"},description:"",name:"endColor",required:!1,type:{name:"string"}},samplingLabel:{defaultValue:null,description:"",name:"samplingLabel",required:!1,type:{name:"string"}},data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"(DatumWithCount[] & Record<string, unknown>[]) | (BarDatum[] & Record<string, unknown>[])"}},hasSampling:{defaultValue:{value:"true"},description:"",name:"hasSampling",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string | AccessorFunc"}},animate:{defaultValue:null,description:"",name:"animate",required:!1,type:{name:"boolean"}},role:{defaultValue:null,description:"",name:"role",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"BarMouseEventHandler<SVGElement>"}},onMouseEnter:{defaultValue:null,description:"",name:"onMouseEnter",required:!1,type:{name:"BarMouseEventHandler<SVGElement>"}},onMouseLeave:{defaultValue:null,description:"",name:"onMouseLeave",required:!1,type:{name:"BarMouseEventHandler<SVGElement>"}},tooltip:{defaultValue:null,description:"",name:"tooltip",required:!1,type:{name:"TooltipProp"}},borderColor:{defaultValue:null,description:"",name:"borderColor",required:!1,type:{name:"InheritedColorConfig<BarDatumWithColor>"}},borderRadius:{defaultValue:null,description:"",name:"borderRadius",required:!1,type:{name:"number"}},borderWidth:{defaultValue:null,description:"",name:"borderWidth",required:!1,type:{name:"number"}},margin:{defaultValue:null,description:"",name:"margin",required:!1,type:{name:"Partial<Margin>"}},padding:{defaultValue:null,description:"",name:"padding",required:!1,type:{name:"number"}},axisTop:{defaultValue:null,description:"",name:"axisTop",required:!1,type:{name:"AxisProps<any> | null"}},axisRight:{defaultValue:null,description:"",name:"axisRight",required:!1,type:{name:"AxisProps<any> | null"}},axisBottom:{defaultValue:null,description:"",name:"axisBottom",required:!1,type:{name:"AxisProps<any> | null"}},axisLeft:{defaultValue:null,description:"",name:"axisLeft",required:!1,type:{name:"AxisProps<any> | null"}},enableGridX:{defaultValue:null,description:"",name:"enableGridX",required:!1,type:{name:"boolean"}},enableGridY:{defaultValue:null,description:"",name:"enableGridY",required:!1,type:{name:"boolean"}},labelTextColor:{defaultValue:null,description:"",name:"labelTextColor",required:!1,type:{name:"InheritedColorConfig<BarDatumWithColor>"}},isInteractive:{defaultValue:null,description:"",name:"isInteractive",required:!1,type:{name:"boolean"}},tooltipFormat:{defaultValue:null,description:"",name:"tooltipFormat",required:!1,type:{name:"string | ValueFormatter"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:'Partial<Pick<CompleteTheme, "fontFamily" | "fontSize" | "background" | "textColor"> & { crosshair: Partial<{ line: Partial<{ stroke: string; strokeWidth: number; strokeOpacity: number; strokeDasharray: string; }>; }>; ... 7 more ...; annotations: Partial<...>; }>'}},colors:{defaultValue:null,description:"",name:"colors",required:!1,type:{name:"OrdinalColorScaleConfig<any>"}},layers:{defaultValue:null,description:"",name:"layers",required:!1,type:{name:"Layer[]"}},groupMode:{defaultValue:null,description:"",name:"groupMode",required:!1,type:{name:"enum",value:[{value:'"stacked"'},{value:'"grouped"'}]}},layout:{defaultValue:null,description:"",name:"layout",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},reverse:{defaultValue:null,description:"",name:"reverse",required:!1,type:{name:"boolean"}},innerPadding:{defaultValue:null,description:"",name:"innerPadding",required:!1,type:{name:"number"}},minValue:{defaultValue:null,description:"",name:"minValue",required:!1,type:{name:'number | "auto"'}},valueScale:{defaultValue:null,description:"",name:"valueScale",required:!1,type:{name:"ScaleSpec"}},indexScale:{defaultValue:null,description:"",name:"indexScale",required:!1,type:{name:"ScaleBandSpec"}},gridXValues:{defaultValue:null,description:"",name:"gridXValues",required:!1,type:{name:"GridValues<Value>"}},gridYValues:{defaultValue:null,description:"",name:"gridYValues",required:!1,type:{name:"GridValues<Value>"}},barComponent:{defaultValue:null,description:"",name:"barComponent",required:!1,type:{name:"FC<BarItemProps>"}},enableLabel:{defaultValue:null,description:"",name:"enableLabel",required:!1,type:{name:"boolean"}},labelFormat:{defaultValue:null,description:"",name:"labelFormat",required:!1,type:{name:"string | LabelFormatter"}},labelLinkColor:{defaultValue:null,description:"",name:"labelLinkColor",required:!1,type:{name:"InheritedColorConfig<BarDatumWithColor>"}},labelSkipWidth:{defaultValue:null,description:"",name:"labelSkipWidth",required:!1,type:{name:"number"}},labelSkipHeight:{defaultValue:null,description:"",name:"labelSkipHeight",required:!1,type:{name:"number"}},legends:{defaultValue:null,description:"",name:"legends",required:!1,type:{name:'({ dataFrom: "keys" | "indexes"; } & { translateX?: number; translateY?: number; anchor: LegendAnchor; toggleSerie?: boolean | undefined; } & CommonLegendProps & Partial<...> & Omit<...>)[] | undefined'}},markers:{defaultValue:null,description:"",name:"markers",required:!1,type:{name:"CartesianMarkerProps[]"}},renderWrapper:{defaultValue:null,description:"",name:"renderWrapper",required:!1,type:{name:"boolean"}},motionDamping:{defaultValue:null,description:"",name:"motionDamping",required:!1,type:{name:"number"}},motionStiffness:{defaultValue:null,description:"",name:"motionStiffness",required:!1,type:{name:"number"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/graphs/bar/SalariesBarGraph.tsx#SalariesBarGraph"]={docgenInfo:de.__docgenInfo,name:"SalariesBarGraph",path:"src/components/graphs/bar/SalariesBarGraph.tsx#SalariesBarGraph"})}catch{}var On={title:"Graphs/SalariesBarGraph",component:de,parameters:{storySource:{source:`import React from 'react'

import { BADGE } from '@geometricpanda/storybook-addon-badges'
import { ComponentMeta, ComponentStory, Story } from '@storybook/react'

import { Card, Grid } from '@mui/material'

import SalariesBarGraph, {
  Props
} from '../../components/graphs/bar/SalariesBarGraph'

export default {
  title: 'Graphs/SalariesBarGraph',
  component: SalariesBarGraph,
  parameters: {
    badges: [BADGE.NEEDS_REVISION]
  }
} as ComponentMeta<typeof SalariesBarGraph>

const Template: ComponentStory<typeof SalariesBarGraph> = (args) => (
  <Grid container style={{ height: 500 }}>
    <Card style={{ height: '100%', width: '100%', padding: 24 }}>
      <SalariesBarGraph {...args} />
    </Card>
  </Grid>
)

const data: Props['data'] = [
  {
    job_title: 'Analista',
    'Expectativa Salarial (cor mais forte = maior amostragem)': 4872.0,
    'Sal\xE1rio Fixo Atual (cor mais forte = maior amostragem)': 3499.0,
    count: 8
  },
  {
    job_title: 'Especialista',
    'Expectativa Salarial (cor mais forte = maior amostragem)': 14333.0,
    'Sal\xE1rio Fixo Atual (cor mais forte = maior amostragem)': 12832.333333333334,
    count: 3
  },
  {
    job_title: 'Consultor',
    'Expectativa Salarial (cor mais forte = maior amostragem)': 10999.0,
    'Sal\xE1rio Fixo Atual (cor mais forte = maior amostragem)': 10499.0,
    count: 2
  },
  {
    job_title: 'Coordenador',
    'Expectativa Salarial (cor mais forte = maior amostragem)': 12100.25,
    'Sal\xE1rio Fixo Atual (cor mais forte = maior amostragem)': 10749.0,
    count: 4
  },
  {
    job_title: 'Gerente',
    'Expectativa Salarial (cor mais forte = maior amostragem)': 6499.0,
    'Sal\xE1rio Fixo Atual (cor mais forte = maior amostragem)': 6499.0,
    count: 1
  }
]

const dataWithoutCount: Props['data'] = [
  {
    job_title: 'Analista',
    'Expectativa Salarial (cor mais forte = maior amostragem)': 4872.0,
    'Sal\xE1rio Fixo Atual (cor mais forte = maior amostragem)': 3499.0
  },
  {
    job_title: 'Especialista',
    'Expectativa Salarial (cor mais forte = maior amostragem)': 14333.0,
    'Sal\xE1rio Fixo Atual (cor mais forte = maior amostragem)': 12832.333333333334
  },
  {
    job_title: 'Consultor',
    'Expectativa Salarial (cor mais forte = maior amostragem)': 10999.0,
    'Sal\xE1rio Fixo Atual (cor mais forte = maior amostragem)': 10499.0
  },
  {
    job_title: 'Coordenador',
    'Expectativa Salarial (cor mais forte = maior amostragem)': 12100.25,
    'Sal\xE1rio Fixo Atual (cor mais forte = maior amostragem)': 10749.0
  },
  {
    job_title: 'Gerente',
    'Expectativa Salarial (cor mais forte = maior amostragem)': 6499.0,
    'Sal\xE1rio Fixo Atual (cor mais forte = maior amostragem)': 6499.0
  }
]

export const WithoutLine: Story<Props> = Template.bind({})
WithoutLine.args = {
  data,
  legend: 'Salary Data',
  indexBy: 'job_title',
  keys: [
    'Sal\xE1rio Fixo Atual (cor mais forte = maior amostragem)',
    'Expectativa Salarial (cor mais forte = maior amostragem)'
  ],
  maxValue: 16_000,
  samplingLabel: 'Amostragem'
}

export const WithLine: Story<Props> = Template.bind({})
WithLine.args = {
  data,
  legend: 'Salary Data',
  indexBy: 'job_title',
  keys: [
    'Sal\xE1rio Fixo Atual (cor mais forte = maior amostragem)',
    'Expectativa Salarial (cor mais forte = maior amostragem)'
  ],
  maxValue: 16_000,
  samplingLabel: 'Amostragem',
  line: {
    minValue: 6_000,
    maxValue: 8_000,
    sameValueLabel: 'Target',
    maxValueLabel: 'Fim da faixa',
    minValueLabel: 'In\xEDcio da faixa'
  }
}

export const WithoutMultipleKeys: Story<Props> = Template.bind({})
WithoutMultipleKeys.args = {
  data,
  legend: 'Salary Data',
  indexBy: 'job_title',
  keys: ['Sal\xE1rio Fixo Atual (cor mais forte = maior amostragem)'],
  samplingLabel: 'Amostragem'
}

export const WithoutSampleSize: Story<Props> = Template.bind({})
WithoutSampleSize.args = {
  data: dataWithoutCount,
  legend: 'Salary Data',
  indexBy: 'job_title',
  keys: ['Sal\xE1rio Fixo Atual (cor mais forte = maior amostragem)'],
  hasSampling: false
}

export const ComputedMaxValue: Story<Props> = Template.bind({})
ComputedMaxValue.args = {
  data,
  legend: 'Salary Data',
  indexBy: 'job_title',
  keys: [
    'Sal\xE1rio Fixo Atual (cor mais forte = maior amostragem)',
    'Expectativa Salarial (cor mais forte = maior amostragem)'
  ],
  samplingLabel: 'Amostragem',
  line: {
    minValue: 4_000,
    maxValue: 8_000,
    sameValueLabel: '',
    maxValueLabel: '',
    minValueLabel: ''
  }
}
`,locationsMap:{"without-line":{startLoc:{col:58,line:20},endLoc:{col:1,line:26},startBody:{col:58,line:20},endBody:{col:1,line:26}},"with-line":{startLoc:{col:58,line:20},endLoc:{col:1,line:26},startBody:{col:58,line:20},endBody:{col:1,line:26}},"without-multiple-keys":{startLoc:{col:58,line:20},endLoc:{col:1,line:26},startBody:{col:58,line:20},endBody:{col:1,line:26}},"without-sample-size":{startLoc:{col:58,line:20},endLoc:{col:1,line:26},startBody:{col:58,line:20},endBody:{col:1,line:26}},"computed-max-value":{startLoc:{col:58,line:20},endLoc:{col:1,line:26},startBody:{col:58,line:20},endBody:{col:1,line:26}}}},badges:[Qt.NEEDS_REVISION]}};const Re=e=>A(k,{container:!0,style:{height:500},children:A(R,{style:{height:"100%",width:"100%",padding:24},children:A(de,r({},e))})}),Ke=[{job_title:"Analista","Expectativa Salarial (cor mais forte = maior amostragem)":4872,"Sal\xE1rio Fixo Atual (cor mais forte = maior amostragem)":3499,count:8},{job_title:"Especialista","Expectativa Salarial (cor mais forte = maior amostragem)":14333,"Sal\xE1rio Fixo Atual (cor mais forte = maior amostragem)":12832.333333333334,count:3},{job_title:"Consultor","Expectativa Salarial (cor mais forte = maior amostragem)":10999,"Sal\xE1rio Fixo Atual (cor mais forte = maior amostragem)":10499,count:2},{job_title:"Coordenador","Expectativa Salarial (cor mais forte = maior amostragem)":12100.25,"Sal\xE1rio Fixo Atual (cor mais forte = maior amostragem)":10749,count:4},{job_title:"Gerente","Expectativa Salarial (cor mais forte = maior amostragem)":6499,"Sal\xE1rio Fixo Atual (cor mais forte = maior amostragem)":6499,count:1}],Vn=[{job_title:"Analista","Expectativa Salarial (cor mais forte = maior amostragem)":4872,"Sal\xE1rio Fixo Atual (cor mais forte = maior amostragem)":3499},{job_title:"Especialista","Expectativa Salarial (cor mais forte = maior amostragem)":14333,"Sal\xE1rio Fixo Atual (cor mais forte = maior amostragem)":12832.333333333334},{job_title:"Consultor","Expectativa Salarial (cor mais forte = maior amostragem)":10999,"Sal\xE1rio Fixo Atual (cor mais forte = maior amostragem)":10499},{job_title:"Coordenador","Expectativa Salarial (cor mais forte = maior amostragem)":12100.25,"Sal\xE1rio Fixo Atual (cor mais forte = maior amostragem)":10749},{job_title:"Gerente","Expectativa Salarial (cor mais forte = maior amostragem)":6499,"Sal\xE1rio Fixo Atual (cor mais forte = maior amostragem)":6499}],Co=Re.bind({});Co.args={data:Ke,legend:"Salary Data",indexBy:"job_title",keys:["Sal\xE1rio Fixo Atual (cor mais forte = maior amostragem)","Expectativa Salarial (cor mais forte = maior amostragem)"],maxValue:16e3,samplingLabel:"Amostragem"};const ko=Re.bind({});ko.args={data:Ke,legend:"Salary Data",indexBy:"job_title",keys:["Sal\xE1rio Fixo Atual (cor mais forte = maior amostragem)","Expectativa Salarial (cor mais forte = maior amostragem)"],maxValue:16e3,samplingLabel:"Amostragem",line:{minValue:6e3,maxValue:8e3,sameValueLabel:"Target",maxValueLabel:"Fim da faixa",minValueLabel:"In\xEDcio da faixa"}};const Ro=Re.bind({});Ro.args={data:Ke,legend:"Salary Data",indexBy:"job_title",keys:["Sal\xE1rio Fixo Atual (cor mais forte = maior amostragem)"],samplingLabel:"Amostragem"};const Qo=Re.bind({});Qo.args={data:Vn,legend:"Salary Data",indexBy:"job_title",keys:["Sal\xE1rio Fixo Atual (cor mais forte = maior amostragem)"],hasSampling:!1};const xo=Re.bind({});xo.args={data:Ke,legend:"Salary Data",indexBy:"job_title",keys:["Sal\xE1rio Fixo Atual (cor mais forte = maior amostragem)","Expectativa Salarial (cor mais forte = maior amostragem)"],samplingLabel:"Amostragem",line:{minValue:4e3,maxValue:8e3,sameValueLabel:"",maxValueLabel:"",minValueLabel:""}};const Kn=["WithoutLine","WithLine","WithoutMultipleKeys","WithoutSampleSize","ComputedMaxValue"];var In=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:On,WithoutLine:Co,WithLine:ko,WithoutMultipleKeys:Ro,WithoutSampleSize:Qo,ComputedMaxValue:xo,__namedExportsOrder:Kn});const ce=l=>{var i=l,{keys:e,data:o,colors:a={scheme:"nivo"}}=i,n=v(i,["keys","data","colors"]);const s=ke(),{isMobile:c}=Ve();return A(Ee,r({theme:s,data:o,keys:e,indexBy:"name",margin:{top:0,right:c?30:0,bottom:65,left:c?130:125},animate:!0,padding:.3,valueScale:{type:"linear"},indexScale:{type:"band",round:!0},colors:a,borderColor:{from:"color",modifiers:[["darker",1.6]]},axisTop:null,axisRight:null,axisBottom:{tickSize:5,tickPadding:5,tickRotation:0,tickValues:c?4:9},axisLeft:{format:d=>d.length>22?p("tspan",{children:[d.substring(0,18).trim(),"...",A("title",{children:d})]}):d,tickSize:5,tickPadding:5,tickRotation:0,legend:"",legendPosition:"middle",legendOffset:-40},labelSkipWidth:c?20:10,layout:"horizontal",labelTextColor:{from:"color",modifiers:[["darker",3.5]]},label:d=>{var f;return((f=d==null?void 0:d.value)==null?void 0:f.toString())||""},legends:[u(r({},sA),{translateX:c?-35:-20,translateY:60,dataFrom:"keys",itemsSpacing:c?0:20})]},n))};try{ce.displayName="YuBarGraph",ce.__docgenInfo={description:"",displayName:"YuBarGraph",props:{keys:{defaultValue:null,description:"",name:"keys",required:!0,type:{name:"string[]"}},data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"Datum[] & Record<string, unknown>[]"}},colors:{defaultValue:{value:"{ scheme: 'nivo' }"},description:"",name:"colors",required:!1,type:{name:"(OrdinalColorScaleConfig<BarDatum> & OrdinalColorScaleConfig<...>)"}},indexBy:{defaultValue:null,description:"",name:"indexBy",required:!1,type:{name:"string | IndexByFunc"}},groupMode:{defaultValue:null,description:"",name:"groupMode",required:!1,type:{name:"enum",value:[{value:'"stacked"'},{value:'"grouped"'}]}},layout:{defaultValue:null,description:"",name:"layout",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},reverse:{defaultValue:null,description:"",name:"reverse",required:!1,type:{name:"boolean"}},innerPadding:{defaultValue:null,description:"",name:"innerPadding",required:!1,type:{name:"number"}},minValue:{defaultValue:null,description:"",name:"minValue",required:!1,type:{name:'number | "auto"'}},margin:{defaultValue:null,description:"",name:"margin",required:!1,type:{name:"Partial<Margin>"}},maxValue:{defaultValue:null,description:"",name:"maxValue",required:!1,type:{name:'number | "auto"'}},padding:{defaultValue:null,description:"",name:"padding",required:!1,type:{name:"number"}},valueScale:{defaultValue:null,description:"",name:"valueScale",required:!1,type:{name:"ScaleSpec"}},indexScale:{defaultValue:null,description:"",name:"indexScale",required:!1,type:{name:"ScaleBandSpec"}},axisBottom:{defaultValue:null,description:"",name:"axisBottom",required:!1,type:{name:"AxisProps<any> | null"}},axisLeft:{defaultValue:null,description:"",name:"axisLeft",required:!1,type:{name:"AxisProps<any> | null"}},axisRight:{defaultValue:null,description:"",name:"axisRight",required:!1,type:{name:"AxisProps<any> | null"}},axisTop:{defaultValue:null,description:"",name:"axisTop",required:!1,type:{name:"AxisProps<any> | null"}},enableGridX:{defaultValue:null,description:"",name:"enableGridX",required:!1,type:{name:"boolean"}},gridXValues:{defaultValue:null,description:"",name:"gridXValues",required:!1,type:{name:"GridValues<Value>"}},enableGridY:{defaultValue:null,description:"",name:"enableGridY",required:!1,type:{name:"boolean"}},gridYValues:{defaultValue:null,description:"",name:"gridYValues",required:!1,type:{name:"GridValues<Value>"}},barComponent:{defaultValue:null,description:"",name:"barComponent",required:!1,type:{name:"FC<BarItemProps>"}},enableLabel:{defaultValue:null,description:"",name:"enableLabel",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string | AccessorFunc"}},labelFormat:{defaultValue:null,description:"",name:"labelFormat",required:!1,type:{name:"string | LabelFormatter"}},labelLinkColor:{defaultValue:null,description:"",name:"labelLinkColor",required:!1,type:{name:"InheritedColorConfig<BarDatumWithColor>"}},labelSkipWidth:{defaultValue:null,description:"",name:"labelSkipWidth",required:!1,type:{name:"number"}},labelSkipHeight:{defaultValue:null,description:"",name:"labelSkipHeight",required:!1,type:{name:"number"}},labelTextColor:{defaultValue:null,description:"",name:"labelTextColor",required:!1,type:{name:"InheritedColorConfig<BarDatumWithColor>"}},borderColor:{defaultValue:null,description:"",name:"borderColor",required:!1,type:{name:"InheritedColorConfig<BarDatumWithColor>"}},borderRadius:{defaultValue:null,description:"",name:"borderRadius",required:!1,type:{name:"number"}},borderWidth:{defaultValue:null,description:"",name:"borderWidth",required:!1,type:{name:"number"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:'Partial<Pick<CompleteTheme, "fontFamily" | "fontSize" | "background" | "textColor"> & { crosshair: Partial<{ line: Partial<{ stroke: string; strokeWidth: number; strokeOpacity: number; strokeDasharray: string; }>; }>; ... 7 more ...; annotations: Partial<...>; }>'}},isInteractive:{defaultValue:null,description:"",name:"isInteractive",required:!1,type:{name:"boolean"}},tooltipFormat:{defaultValue:null,description:"",name:"tooltipFormat",required:!1,type:{name:"string | ValueFormatter"}},tooltip:{defaultValue:null,description:"",name:"tooltip",required:!1,type:{name:"TooltipProp"}},legends:{defaultValue:null,description:"",name:"legends",required:!1,type:{name:'({ dataFrom: "keys" | "indexes"; } & { translateX?: number; translateY?: number; anchor: LegendAnchor; toggleSerie?: boolean | undefined; } & CommonLegendProps & Partial<...> & Omit<...>)[] | undefined'}},markers:{defaultValue:null,description:"",name:"markers",required:!1,type:{name:"CartesianMarkerProps[]"}},renderWrapper:{defaultValue:null,description:"",name:"renderWrapper",required:!1,type:{name:"boolean"}},animate:{defaultValue:null,description:"",name:"animate",required:!1,type:{name:"boolean"}},motionDamping:{defaultValue:null,description:"",name:"motionDamping",required:!1,type:{name:"number"}},motionStiffness:{defaultValue:null,description:"",name:"motionStiffness",required:!1,type:{name:"number"}},layers:{defaultValue:null,description:"",name:"layers",required:!1,type:{name:"Layer[]"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"BarMouseEventHandler<SVGElement>"}},onMouseEnter:{defaultValue:null,description:"",name:"onMouseEnter",required:!1,type:{name:"BarMouseEventHandler<SVGElement>"}},onMouseLeave:{defaultValue:null,description:"",name:"onMouseLeave",required:!1,type:{name:"BarMouseEventHandler<SVGElement>"}},role:{defaultValue:null,description:"",name:"role",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/graphs/bar/YuBarGraph.tsx#YuBarGraph"]={docgenInfo:ce.__docgenInfo,name:"YuBarGraph",path:"src/components/graphs/bar/YuBarGraph.tsx#YuBarGraph"})}catch{}var Gn={parameters:{storySource:{source:`import React from 'react'

import { ComponentMeta, ComponentStory, Story } from '@storybook/react'

import { Card, Grid } from '@mui/material'

import YuBarGraph, { Props } from '../../components/graphs/bar/YuBarGraph'

export default {
  title: 'Graphs/YuBarGraph',
  component: YuBarGraph
} as ComponentMeta<typeof YuBarGraph>

const Template: ComponentStory<typeof YuBarGraph> = (args) => (
  <Grid container style={{ height: 500 }}>
    <Card style={{ height: '100%', width: '100%', padding: 24 }}>
      <YuBarGraph {...args} />
    </Card>
  </Grid>
)

const data: Props['data'] = [
  { Placed: 4, name: 'Etapa Final' },
  { Out: 2, 'Stand By': 3, name: 'Etapa 8' },
  { Out: 4, name: 'Etapa 7' },
  { name: 'Etapa 6' },
  { Out: 7, name: 'Etapa 5' },
  { 'Em Processo': 7, Out: 13, name: 'Etapa 4' },
  { Out: 8, 'Stand By': 18, name: 'Etapa 3' },
  { Out: 3, name: 'Etapa 2' },
  { Out: 89, name: 'Etapa 1' }
]

export const Candidates: Story<Props> = Template.bind({})
Candidates.args = {
  data,
  keys: ['Out', 'Placed', 'Em processo', 'Stand By'],
  colors: ['#e66c36', '#3b9230', '#238dff', '#999999']
}
`,locationsMap:{candidates:{startLoc:{col:52,line:14},endLoc:{col:1,line:20},startBody:{col:52,line:14},endBody:{col:1,line:20}}}}},title:"Graphs/YuBarGraph",component:ce};const wn=e=>A(k,{container:!0,style:{height:500},children:A(R,{style:{height:"100%",width:"100%",padding:24},children:A(ce,r({},e))})}),Un=[{Placed:4,name:"Etapa Final"},{Out:2,"Stand By":3,name:"Etapa 8"},{Out:4,name:"Etapa 7"},{name:"Etapa 6"},{Out:7,name:"Etapa 5"},{"Em Processo":7,Out:13,name:"Etapa 4"},{Out:8,"Stand By":18,name:"Etapa 3"},{Out:3,name:"Etapa 2"},{Out:89,name:"Etapa 1"}],Do=wn.bind({});Do.args={data:Un,keys:["Out","Placed","Em processo","Stand By"],colors:["#e66c36","#3b9230","#238dff","#999999"]};const zn=["Candidates"];var Zn=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Gn,Candidates:Do,__namedExportsOrder:zn});var Hn=["ltda","ltda.","informado","desempregado","desempregada","a","\xE0","adeus","agora","a\xED","ainda","al\xE9m","algo","algu\xE9m","algum","alguma","algumas","alguns","ali","ampla","amplas","amplo","amplos","ano","anos","ante","antes","ao","aos","apenas","apoio","ap\xF3s","aquela","aquelas","aquele","aqueles","aqui","aquilo","\xE1rea","as","\xE0s","assim","at\xE9","atr\xE1s","atrav\xE9s","baixo","bastante","bem","boa","boas","bom","bons","brasil","brasil)","brazil","breve","c\xE1","cada","catorze","cedo","cento","certamente","certeza","cima","cinco","coisa","coisas","com","como","conselho","contra","contudo","custa","da","d\xE1","d\xE3o","daquela","daquelas","daquele","daqueles","dar","das","de","debaixo","dela","delas","dele","deles","demais","dentro","depois","desde","dessa","dessas","desse","desses","desta","destas","deste","destes","deve","devem","devendo","dever","dever\xE1","dever\xE3o","deveria","deveriam","devia","deviam","dez","dezanove","dezasseis","dezassete","dezoito","dia","diante","disse","disso","disto","dito","diz","dizem","dizer","do","dois","dos","doze","duas","d\xFAvida","e","\xE9","ela","elas","ele","eles","em","embora","enquanto","entre","era","eram","\xE9ramos","\xE9s","essa","essas","esse","esses","esta","est\xE1","estamos","est\xE3o","estar","estas","est\xE1s","estava","estavam","est\xE1vamos","este","esteja","estejam","estejamos","estes","esteve","estive","estivemos","estiver","estivera","estiveram","estiv\xE9ramos","estiverem","estivermos","estivesse","estivessem","estiv\xE9ssemos","estiveste","estivestes","estou","etc","eu","exemplo","fa\xE7o","falta","favor","faz","fazeis","fazem","fazemos","fazendo","fazer","fazes","feita","feitas","feito","feitos","fez","fim","final","foi","fomos","for","fora","foram","f\xF4ramos","forem","forma","formos","fosse","fossem","f\xF4ssemos","foste","fostes","fui","geral","grande","grandes","grupo","h\xE1","haja","hajam","hajamos","h\xE3o","havemos","havia","hei","hoje","hora","horas","houve","houvemos","houver","houvera","houver\xE1","houveram","houv\xE9ramos","houver\xE3o","houverei","houverem","houveremos","houveria","houveriam","houver\xEDamos","houvermos","houvesse","houvessem","houv\xE9ssemos","isso","isto","j\xE1","la","l\xE1","lado","lhe","lhes","lo","local","logo","longe","lugar","maior","maioria","mais","mal","mas","m\xE1ximo","me","meio","menor","menos","m\xEAs","meses","mesma","mesmas","mesmo","mesmos","meu","meus","mil","minha","minhas","momento","muita","muitas","muito","muitos","na","nada","n\xE3o","naquela","naquelas","naquele","naqueles","nas","nem","nenhum","nenhuma","nessa","nessas","nesse","nesses","nesta","nestas","neste","nestes","ningu\xE9m","n\xEDvel","no","noite","nome","nos","n\xF3s","nossa","nossas","nosso","nossos","nova","novas","nove","novo","novos","num","numa","n\xFAmero","nunca","o","obra","obrigada","obrigado","oitava","oitavo","oito","onde","ontem","onze","os","ou","outra","outras","outro","outros","para","parece","parte","partir","paucas","pela","pelas","pelo","pelos","pequena","pequenas","pequeno","pequenos","per","perante","perto","pode","pude","p\xF4de","podem","podendo","poder","poderia","poderiam","podia","podiam","p\xF5e","p\xF5em","pois","ponto","pontos","por","por\xE9m","porque","porqu\xEA","posi\xE7\xE3o","poss\xEDvel","possivelmente","posso","pouca","poucas","pouco","poucos","primeira","primeiras","primeiro","primeiros","pr\xF3pria","pr\xF3prias","pr\xF3prio","pr\xF3prios","pr\xF3xima","pr\xF3ximas","pr\xF3ximo","pr\xF3ximos","pude","puderam","quais","qu\xE1is","qual","quando","quanto","quantos","quarta","quarto","quatro","que","qu\xEA","quem","quer","quereis","querem","queremas","queres","quero","quest\xE3o","quinta","quinto","quinze","rela\xE7\xE3o","sabe","sabem","s\xE3o","se","segunda","segundo","sei","seis","seja","sejam","sejamos","sem","sempre","sendo","ser","ser\xE1","ser\xE3o","serei","seremos","seria","seriam","ser\xEDamos","sete","s\xE9tima","s\xE9timo","seu","seus","sexta","sexto","si","sido","sim","sistema","s\xF3","sob","sobre","sois","somos","sou","sua","suas","tal","talvez","tamb\xE9m","tampouco","tanta","tantas","tanto","t\xE3o","tarde","te","tem","t\xE9m","t\xEAm","temos","tendes","tendo","tenha","tenham","tenhamos","tenho","tens","ter","ter\xE1","ter\xE3o","terceira","terceiro","terei","teremos","teria","teriam","ter\xEDamos","teu","teus","teve","ti","tido","tinha","tinham","t\xEDnhamos","tive","tivemos","tiver","tivera","tiveram","tiv\xE9ramos","tiverem","tivermos","tivesse","tivessem","tiv\xE9ssemos","tiveste","tivestes","toda","todas","todavia","todo","todos","trabalho","tr\xEAs","treze","tu","tua","tuas","tudo","\xFAltima","\xFAltimas","\xFAltimo","\xFAltimos","um","uma","umas","uns","vai","vais","v\xE3o","v\xE1rios","vem","v\xEAm","vendo","vens","ver","vez","vezes","viagem","vindo","vinte","vir","voc\xEA","voc\xEAs","vos","v\xF3s","vossa","vossas","vosso","vossos","zero","1","2","3","4","5","6","7","8","9","0","_"];function Mn(e,o=Hn){return e.length?typeof e[0]=="string"?e.filter(a=>!o.includes(a.toLowerCase())):e.filter(a=>!o.includes(a.text.toLowerCase())):e}const Yn={enableTooltip:!0,deterministic:!0,fontFamily:"DM Sans, sans-serif",fontSizes:[10,45],fontStyle:"normal",fontWeight:"normal",padding:.5,rotations:3,rotationAngles:[0,0],scale:"log",spiral:"archimedean",transitionDuration:500,tooltipOptions:{theme:"light"}},me=({words:e,options:o=Yn,isPercentage:a=!1,precision:n=0})=>{const l=O(),i=S.exports.useMemo(()=>Mn(e),[e]),s=u(r({},o),{tooltipOptions:u(r({},o==null?void 0:o.tooltipOptions),{theme:l.palette.mode==="dark"?"material":"light"})});return A(xt,{callbacks:{getWordTooltip:a?c=>`${c.text}: ${(c.value*100).toFixed(n)}%`:c=>`${c.text}: ${c.value}`},options:s,words:i})};try{me.displayName="YuWordCloud",me.__docgenInfo={description:"",displayName:"YuWordCloud",props:{words:{defaultValue:null,description:"",name:"words",required:!0,type:{name:"Word[]"}},options:{defaultValue:{value:`{
  enableTooltip: true,
  deterministic: true,
  fontFamily: 'DM Sans, sans-serif',
  fontSizes: [10, 45],
  fontStyle: 'normal',
  fontWeight: 'normal',
  padding: 0.5,
  rotations: 3,
  rotationAngles: [0, 0],
  scale: 'log',
  spiral: 'archimedean',
  transitionDuration: 500,
  tooltipOptions: {
    theme: 'light'
  }
}`},description:"",name:"options",required:!1,type:{name:"Optional<Options>"}},isPercentage:{defaultValue:{value:"false"},description:"",name:"isPercentage",required:!1,type:{name:"boolean"}},precision:{defaultValue:{value:"0"},description:"",name:"precision",required:!1,type:{name:"number"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/graphs/YuWordCloud.tsx#YuWordCloud"]={docgenInfo:me.__docgenInfo,name:"YuWordCloud",path:"src/components/graphs/YuWordCloud.tsx#YuWordCloud"})}catch{}var _n={parameters:{storySource:{source:`import React from 'react'

import { ComponentMeta, ComponentStory, Story } from '@storybook/react'

import { Card, Grid } from '@mui/material'

import YuWordCloud, { Props } from '../../components/graphs/YuWordCloud'

export default {
  title: 'Graphs/YuWordCloud',
  component: YuWordCloud
} as ComponentMeta<typeof YuWordCloud>

const Template: ComponentStory<typeof YuWordCloud> = (args) => (
  <Grid container>
    <Card style={{ height: '100%', width: '100%', padding: 24 }}>
      <YuWordCloud {...args} />
    </Card>
  </Grid>
)

const randomValue = () => Math.floor(Math.random() * (100 - 5) + 5)

const words: Props['words'] = [
  { text: 'Stuff', value: randomValue() },
  { text: 'Other', value: randomValue() },
  { text: 'Computer', value: randomValue() },
  { text: 'Headset', value: randomValue() },
  { text: 'Video', value: randomValue() },
  { text: 'Monitor', value: randomValue() },
  { text: 'People', value: randomValue() },
  { text: 'Shirt', value: randomValue() },
  { text: 'Umbrella', value: randomValue() },
  { text: 'Another', value: randomValue() },
  { text: 'Day', value: randomValue() },
  { text: 'Thing', value: randomValue() },
  { text: 'Car', value: randomValue() },
  { text: 'House', value: randomValue() },
  { text: 'Person', value: randomValue() },
  { text: 'Light', value: randomValue() }
]

const valueSum = words.reduce((a, b) => a + (b.value || 0), 0)

const wordsPercentage = words.map((word) => ({
  ...word,
  value: word.value / valueSum
}))

export const StaticValues: Story<Props> = Template.bind({})
StaticValues.args = {
  words
}

export const Percentage: Story<Props> = Template.bind({})
Percentage.args = {
  words: wordsPercentage,
  isPercentage: true,
  precision: 2
}
`,locationsMap:{"static-values":{startLoc:{col:53,line:14},endLoc:{col:1,line:20},startBody:{col:53,line:14},endBody:{col:1,line:20}},percentage:{startLoc:{col:53,line:14},endLoc:{col:1,line:20},startBody:{col:53,line:14},endBody:{col:1,line:20}}}}},title:"Graphs/YuWordCloud",component:me};const Bo=e=>A(k,{container:!0,children:A(R,{style:{height:"100%",width:"100%",padding:24},children:A(me,r({},e))})}),C=()=>Math.floor(Math.random()*(100-5)+5),pA=[{text:"Stuff",value:C()},{text:"Other",value:C()},{text:"Computer",value:C()},{text:"Headset",value:C()},{text:"Video",value:C()},{text:"Monitor",value:C()},{text:"People",value:C()},{text:"Shirt",value:C()},{text:"Umbrella",value:C()},{text:"Another",value:C()},{text:"Day",value:C()},{text:"Thing",value:C()},{text:"Car",value:C()},{text:"House",value:C()},{text:"Person",value:C()},{text:"Light",value:C()}],$n=pA.reduce((e,o)=>e+(o.value||0),0),er=pA.map(e=>u(r({},e),{value:e.value/$n})),Po=Bo.bind({});Po.args={words:pA};const Wo=Bo.bind({});Wo.args={words:er,isPercentage:!0,precision:2};const Ar=["StaticValues","Percentage"];var or=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:_n,StaticValues:Po,Percentage:Wo,__namedExportsOrder:Ar}),tr={parameters:{storySource:{source:`import React from 'react'

import { Story } from '@storybook/react'

import { Button, Card, CardContent } from '@mui/material'

import { useToggle } from '../../hooks'

export default {
  title: 'Hooks/useToggle'
}

const Template = () => {
  const [value, toggleValue] = useToggle(false)

  return (
    <Card variant='outlined'>
      <CardContent>
        Value is: {value.toString()}
        <br />
        <Button variant='contained' onClick={toggleValue}>
          Toggle
        </Button>
      </CardContent>
    </Card>
  )
}

export const Example: Story = Template.bind({})
`,locationsMap:{example:{startLoc:{col:17,line:13},endLoc:{col:1,line:27},startBody:{col:17,line:13},endBody:{col:1,line:27}}}}},title:"Hooks/useToggle"};const ar=()=>{const[e,o]=Pn(!1);return A(R,{variant:"outlined",children:p(V,{children:["Value is: ",e.toString(),A("br",{}),A(X,{variant:"contained",onClick:o,children:"Toggle"})]})})},nr=ar.bind({}),rr=["Example"];var lr=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:tr,Example:nr,__namedExportsOrder:rr}),ir={parameters:{storySource:{source:`import React from 'react'

import { Story } from '@storybook/react'

import { Card, CardContent } from '@mui/material'

import { useViewport } from '../../hooks'

export default {
  title: 'Hooks/useViewport'
}

const Template = () => {
  const { isMobile } = useViewport()

  return (
    <Card variant='outlined'>
      <CardContent>
        <p>isMobile: {isMobile.toString()}</p>
      </CardContent>
    </Card>
  )
}

export const Example: Story = Template.bind({})
`,locationsMap:{example:{startLoc:{col:17,line:13},endLoc:{col:1,line:23},startBody:{col:17,line:13},endBody:{col:1,line:23}}}}},title:"Hooks/useViewport"};const sr=()=>{const{isMobile:e}=Ve();return A(R,{variant:"outlined",children:A(V,{children:p("p",{children:["isMobile: ",e.toString()]})})})},ur=sr.bind({}),pr=["Example"];var dr=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ir,Example:ur,__namedExportsOrder:pr});const cr=e=>{navigator.clipboard.writeText(e)},be=({text:e,tooltip:o="Copiar"})=>{const[a,n]=S.exports.useState(!1);return A(Xe,{title:o,children:A(P,{onClick:()=>{cr(e),n(!0),setTimeout(()=>n(!1),1e3)},children:a?A(jA,{}):A(FA,{})})})};try{be.displayName="CopyableButton",be.__docgenInfo={description:"",displayName:"CopyableButton",props:{text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}},tooltip:{defaultValue:{value:"Copiar"},description:"",name:"tooltip",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/inputs/CopyableButton.tsx#CopyableButton"]={docgenInfo:be.__docgenInfo,name:"CopyableButton",path:"src/components/inputs/CopyableButton.tsx#CopyableButton"})}catch{}var mr={parameters:{storySource:{source:`import React from 'react'

import { ComponentMeta, ComponentStory, Story } from '@storybook/react'

import { Card, CardContent } from '@mui/material'

import CopyableButton, { Props } from '../../components/inputs/CopyableButton'

export default {
  title: 'Inputs/CopyableButton',
  component: CopyableButton
} as ComponentMeta<typeof CopyableButton>

const Template: ComponentStory<typeof CopyableButton> = (args) => {
  return (
    <Card variant='outlined'>
      <CardContent>
        Some Thing <CopyableButton {...args} />
      </CardContent>
    </Card>
  )
}

export const Example: Story<Props> = Template.bind({})
Example.args = {
  text: 'Some text to copy'
}
`,locationsMap:{example:{startLoc:{col:56,line:14},endLoc:{col:1,line:22},startBody:{col:56,line:14},endBody:{col:1,line:22}}}}},title:"Inputs/CopyableButton",component:be};const br=e=>A(R,{variant:"outlined",children:p(V,{children:["Some Thing ",A(be,r({},e))]})}),jo=br.bind({});jo.args={text:"Some text to copy"};const fr=["Example"];var gr=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:mr,Example:jo,__namedExportsOrder:fr});const fe=({text:e,label:o,fullWidth:a=!1,tooltip:n="Copiar",color:l="primary"})=>{const[i,s]=S.exports.useState(!1),c=()=>{navigator.clipboard.writeText(e),s(!0),setTimeout(()=>s(!1),1e3)};return A(B.Fragment,{children:A(Dt,{variant:"filled",label:o,value:e,style:{margin:8},fullWidth:a,margin:"normal",color:l,InputLabelProps:{shrink:!0},InputProps:{endAdornment:A(Bt,{position:"end",children:A(Xe,{title:n,"aria-label":"copy-to-clipboard",children:A(P,{"aria-label":"copy to clipboard",onClick:c,size:"large",children:i?A(jA,{}):A(FA,{})})})})}})})};try{fe.displayName="CopyableInput",fe.__docgenInfo={description:"A disabled Text input with a copy to clipboard button, when clicked it copies the\ntext passed as the input value (`text` prop)",displayName:"CopyableInput",props:{text:{defaultValue:null,description:"Input Text to be copied",name:"text",required:!0,type:{name:"string"}},label:{defaultValue:null,description:"Input Label",name:"label",required:!0,type:{name:"string"}},fullWidth:{defaultValue:{value:"false"},description:"If the input should be Full Width or not",name:"fullWidth",required:!1,type:{name:"boolean"}},tooltip:{defaultValue:{value:"Copiar"},description:"Tooltip of the copy button inside the tooltip",name:"tooltip",required:!1,type:{name:"string"}},color:{defaultValue:{value:"primary"},description:"Border colors when input is active",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/inputs/CopyableInput.tsx#CopyableInput"]={docgenInfo:fe.__docgenInfo,name:"CopyableInput",path:"src/components/inputs/CopyableInput.tsx#CopyableInput"})}catch{}var Sr={parameters:{storySource:{source:`import React from 'react'

import { ComponentMeta, ComponentStory, Story } from '@storybook/react'

import { Card, CardContent } from '@mui/material'

import CopyableInput, { Props } from '../../components/inputs/CopyableInput'

export default {
  title: 'Inputs/CopyableInput',
  component: CopyableInput
} as ComponentMeta<typeof CopyableInput>

const Template: ComponentStory<typeof CopyableInput> = (args) => {
  return (
    <Card variant='outlined'>
      <CardContent>
        <CopyableInput {...args} />
      </CardContent>
    </Card>
  )
}

const baseProps: Partial<Props> = {
  text: 'https://google.com',
  label: 'Some URL'
}

export const Example: Story<Props> = Template.bind({})
Example.args = {
  ...baseProps
}

export const FullWidth: Story<Props> = Template.bind({})
FullWidth.args = {
  ...baseProps,
  fullWidth: true
}

export const CustomTooltip: Story<Props> = Template.bind({})
CustomTooltip.args = {
  ...baseProps,
  tooltip: 'Copy this specific text'
}

export const SecondaryColor: Story<Props> = Template.bind({})
SecondaryColor.args = {
  ...baseProps,
  color: 'secondary'
}
`,locationsMap:{example:{startLoc:{col:55,line:14},endLoc:{col:1,line:22},startBody:{col:55,line:14},endBody:{col:1,line:22}},"full-width":{startLoc:{col:55,line:14},endLoc:{col:1,line:22},startBody:{col:55,line:14},endBody:{col:1,line:22}},"custom-tooltip":{startLoc:{col:55,line:14},endLoc:{col:1,line:22},startBody:{col:55,line:14},endBody:{col:1,line:22}},"secondary-color":{startLoc:{col:55,line:14},endLoc:{col:1,line:22},startBody:{col:55,line:14},endBody:{col:1,line:22}}}}},title:"Inputs/CopyableInput",component:fe};const Ie=e=>A(R,{variant:"outlined",children:A(V,{children:A(fe,r({},e))})}),Ge={text:"https://google.com",label:"Some URL"},Fo=Ie.bind({});Fo.args=r({},Ge);const To=Ie.bind({});To.args=u(r({},Ge),{fullWidth:!0});const Lo=Ie.bind({});Lo.args=u(r({},Ge),{tooltip:"Copy this specific text"});const Eo=Ie.bind({});Eo.args=u(r({},Ge),{color:"secondary"});const yr=["Example","FullWidth","CustomTooltip","SecondaryColor"];var hr=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Sr,Example:Fo,FullWidth:To,CustomTooltip:Lo,SecondaryColor:Eo,__namedExportsOrder:yr});const ge=({contact:e,revisionDate:o,size:a=128,includeMargin:n=!0})=>A(Pt,{includeMargin:n,size:a,value:`BEGIN:VCARD
VERSION:3.0
FN:${e.fullName}
N:${e.lastName};${e.firstName};
EMAIL:${e.email}
TEL;TYPE=cell:${e.phoneNumber}
REV:${o}
END:VCARD`});try{ge.displayName="VCardQRCode",ge.__docgenInfo={description:"Generates a QR Code (in a HTML Canvas) with a VCard text to add a phone contact",displayName:"VCardQRCode",props:{contact:{defaultValue:null,description:"",name:"contact",required:!0,type:{name:"Contact"}},revisionDate:{defaultValue:null,description:"",name:"revisionDate",required:!0,type:{name:"Date"}},size:{defaultValue:{value:"128"},description:"",name:"size",required:!1,type:{name:"number"}},includeMargin:{defaultValue:{value:"true"},description:"",name:"includeMargin",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/inputs/VCardQRCode.tsx#VCardQRCode"]={docgenInfo:ge.__docgenInfo,name:"VCardQRCode",path:"src/components/inputs/VCardQRCode.tsx#VCardQRCode"})}catch{}var Nr={parameters:{storySource:{source:`import React from 'react'

import { ComponentMeta, ComponentStory, Story } from '@storybook/react'

import { Card, CardContent } from '@mui/material'

import VCardQRCode, { Props } from '../../components/inputs/VCardQRCode'

export default {
  title: 'Inputs/VCardQRCode',
  component: VCardQRCode
} as ComponentMeta<typeof VCardQRCode>

const Template: ComponentStory<typeof VCardQRCode> = (args) => {
  return (
    <Card variant='outlined'>
      <CardContent>
        <VCardQRCode {...args} />
      </CardContent>
    </Card>
  )
}

const baseProps: Partial<Props> = {
  contact: {
    fullName: 'First Middle Last',
    lastName: 'Last',
    firstName: 'First',
    email: 'some_email@email.com',
    phoneNumber: '+5511123456789'
  },
  revisionDate: new Date()
}

export const Example: Story<Props> = Template.bind({})
Example.args = {
  ...baseProps,
  size: 128
}

export const WithoutMargin: Story<Props> = Template.bind({})
WithoutMargin.args = {
  ...baseProps,
  includeMargin: false,
  size: 128
}

export const BiggerSize: Story<Props> = Template.bind({})
BiggerSize.args = {
  ...baseProps,
  size: 512
}
`,locationsMap:{example:{startLoc:{col:53,line:14},endLoc:{col:1,line:22},startBody:{col:53,line:14},endBody:{col:1,line:22}},"without-margin":{startLoc:{col:53,line:14},endLoc:{col:1,line:22},startBody:{col:53,line:14},endBody:{col:1,line:22}},"bigger-size":{startLoc:{col:53,line:14},endLoc:{col:1,line:22},startBody:{col:53,line:14},endBody:{col:1,line:22}}}}},title:"Inputs/VCardQRCode",component:ge};const dA=e=>A(R,{variant:"outlined",children:A(V,{children:A(ge,r({},e))})}),cA={contact:{fullName:"First Middle Last",lastName:"Last",firstName:"First",email:"some_email@email.com",phoneNumber:"+5511123456789"},revisionDate:new Date},Jo=dA.bind({});Jo.args=u(r({},cA),{size:128});const Xo=dA.bind({});Xo.args=u(r({},cA),{includeMargin:!1,size:128});const Oo=dA.bind({});Oo.args=u(r({},cA),{size:512});const vr=["Example","WithoutMargin","BiggerSize"];var qr=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Nr,Example:Jo,WithoutMargin:Xo,BiggerSize:Oo,__namedExportsOrder:vr});const Se=({number:e,message:o="",onClick:a=()=>{}})=>{const n=`https://wa.me/${e}?text=${o}`;return A(Wt,{clickable:!0,component:"a",target:"_blank",href:n,onClick:a,color:"success",icon:A(jt,{}),label:e})};try{Se.displayName="WhatsappChip",Se.__docgenInfo={description:`Basic WhatsApp digit, when clicked goes to a page uising Whatsapp APIs to send a specific message
to the specific number in the props`,displayName:"WhatsappChip",props:{number:{defaultValue:null,description:"Valid Phone number for WhatsApp (with area code)",name:"number",required:!0,type:{name:"string"}},message:{defaultValue:{value:""},description:"Default message on WhatsApp chatbox",name:"message",required:!1,type:{name:"string"}},onClick:{defaultValue:{value:"() => {}"},description:"Callback to run before clicking on the WhatsApp Chip",name:"onClick",required:!1,type:{name:"(() => void)"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/inputs/WhatsappChip.tsx#WhatsappChip"]={docgenInfo:Se.__docgenInfo,name:"WhatsappChip",path:"src/components/inputs/WhatsappChip.tsx#WhatsappChip"})}catch{}var Cr={parameters:{storySource:{source:`import React from 'react'

import { ComponentMeta, ComponentStory, Story } from '@storybook/react'

import { Card, CardContent } from '@mui/material'

import WhatsappChip, { Props } from '../../components/inputs/WhatsappChip'

export default {
  title: 'Inputs/WhatsappChip',
  component: WhatsappChip
} as ComponentMeta<typeof WhatsappChip>

const Template: ComponentStory<typeof WhatsappChip> = (args) => {
  return (
    <Card variant='outlined'>
      <CardContent>
        <WhatsappChip {...args} />
      </CardContent>
    </Card>
  )
}

export const Example: Story<Props> = Template.bind({})
Example.args = {
  number: '551111111111111',
  message: 'Some Message'
}

export const OnClickEvent: Story<Props> = Template.bind({})
OnClickEvent.args = {
  number: '551111111111111',
  message: 'Some Message',
  onClick: () => alert('onClick')
}
`,locationsMap:{example:{startLoc:{col:54,line:14},endLoc:{col:1,line:22},startBody:{col:54,line:14},endBody:{col:1,line:22}},"on-click-event":{startLoc:{col:54,line:14},endLoc:{col:1,line:22},startBody:{col:54,line:14},endBody:{col:1,line:22}}}}},title:"Inputs/WhatsappChip",component:Se};const Vo=e=>A(R,{variant:"outlined",children:A(V,{children:A(Se,r({},e))})}),Ko=Vo.bind({});Ko.args={number:"551111111111111",message:"Some Message"};const Io=Vo.bind({});Io.args={number:"551111111111111",message:"Some Message",onClick:()=>alert("onClick")};const kr=["Example","OnClickEvent"];var Rr=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Cr,Example:Ko,OnClickEvent:Io,__namedExportsOrder:kr});const Qr="BackdropLoading",Go={backdrop:`${Qr}-backdrop`},xr=ae(Ft)(({theme:e})=>({[`&.${Go.backdrop}`]:{zIndex:e.zIndex.drawer+1,color:"#fff"}})),ye=({open:e})=>A(xr,{className:Go.backdrop,open:e,children:A(Tt,{color:"inherit"})});try{ye.displayName="BackdropLoading",ye.__docgenInfo={description:`A full-screen Backdrop loading component, also prevents user from doing any actions when active

Similar example: https://mui.com/components/backdrop/#backdrop

Mostly useful for mobile environments`,displayName:"BackdropLoading",props:{open:{defaultValue:null,description:"",name:"open",required:!0,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/loaders/BackdropLoading.tsx#BackdropLoading"]={docgenInfo:ye.__docgenInfo,name:"BackdropLoading",path:"src/components/loaders/BackdropLoading.tsx#BackdropLoading"})}catch{}var Dr={parameters:{storySource:{source:`import React, { useState } from 'react'

import { ComponentMeta, ComponentStory, Story } from '@storybook/react'

import BackdropLoading, {
  Props
} from '../../components/loaders/BackdropLoading'

export default {
  title: 'Loaders/BackdropLoading',
  component: BackdropLoading
} as ComponentMeta<typeof BackdropLoading>

const Template: ComponentStory<typeof BackdropLoading> = () => {
  const [loading, setLoading] = useState(false)

  return (
    <>
      <button
        onClick={() => {
          setLoading(true)
          setTimeout(() => setLoading(false), 2000)
        }}
      >
        Set Loading
      </button>

      <BackdropLoading open={loading} />
    </>
  )
}

export const Example: Story<Props> = Template.bind({})
Example.args = {}
`,locationsMap:{example:{startLoc:{col:57,line:14},endLoc:{col:1,line:31},startBody:{col:57,line:14},endBody:{col:1,line:31}}}}},title:"Loaders/BackdropLoading",component:ye};const Br=()=>{const[e,o]=S.exports.useState(!1);return p(ne,{children:[A("button",{onClick:()=>{o(!0),setTimeout(()=>o(!1),2e3)},children:"Set Loading"}),A(ye,{open:e})]})},wo=Br.bind({});wo.args={};const Pr=["Example"];var Wr=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Dr,Example:wo,__namedExportsOrder:Pr});const he=()=>A("svg",{xmlns:"http://www.w3.org/2000/svg",width:"64",height:"64",x:"0",y:"0",version:"1.1",viewBox:"0 0 64 64",xmlSpace:"preserve",children:A("image",{width:"64",height:"64",x:"0",y:"0",href:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAGGsAABW6BAMAAAB6IDhSAAAABGdBTUEAALGPC/xhBQAAACBjSFJN AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAG1BMVEUAAAD/oDL/oDL/oDL/ ////////////oDL///9uN+5hAAAAB3RSTlMAgEC/gEC/HKQCnQAAAAFiS0dEBI9o2VEAAAAJcEhZ cwAALiMAAC4jAXilP3YAAAAHdElNRQflChkPAyWGieCcAACAAElEQVR42uzdPXNd173la0u2mzOk ugOmPNUBU56TMEXgvoWQwalbCBHcW4VQsgKnM3C7+LG7JdnHli3NiZc9MPZe+3m+AX+ssbD+xAb4 m98AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkPfNS71t/wkA AICUr7/55k+n8u/f/Pf2HwcAADixf/sfJzsZ/ua7b963/1QAAMCpfHX6m+Fvl0P7jwYAAJzCN59C R8OPfMsBAAAu3ul+nuHX/Pv79p8RAAB4gX+LHw0/Hg7tPyYAAPBcX316lavh//J7lQAA4DKlfhD6 l3z3tv2nBQAAnuz1vtXwk/9o/4EBAIAnes1vNfz1Gw7v239mAADgCb5+9+pXw//1tv3HBgAAHu21 P6D0Nz6oBAAAl+J1fu3qL/mu/UcHAAAe5X/WrgZ3AwAAXIbm1fCnP33/vv3nBwAAdt5VrwZ3AwAA nL/21eBuAACAc9e/GtwNAABw3j60TwZ3AwAAnLnuT0P/w93QDgEAAPyKc7ka/B5WAAA4V1+1jwV3 AwAAnLlzuhr+9Kf/aOcAAAD+xdef2pfCz31sBwEAAP7Zu/ad8M/et4sAAAA/96F9JfwLv04JAADO y2/bR8Iv8GPRAABwTr5unwi/6GM7CwAA8Hef2hfCL3vf7gIAAPzN+fw/bz/nxxsAAOBcnNf/2PCP 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 AACw4WwAAAA2nA0AAMCGswEAANhwNgAAABvOBgAAYMPZAAAAbDgbAACADWcDAACw4WwAAAA2nA0A AMCGswEAANhwNgAAABvOBgAAYMPZAAAAbDgbAACADWcDAACw4WwAAAA2nA0AAMCGswEAANhwNgAA ABvOBgAAYMPZAAAAbDgbAACADWcDAACw4WwAAAA2nA0AAMCGswEAANhwNgAAABvOBgAAYMPZAAAA bDgbAACADWcDAACw4WwAAAA2nA0AAMCGswEAANhwNgAAABvOBgAAYMPZAAAAbDgbAACADWcDAACw 4WwAAAA2nA0AAMCGswEAANhwNgAAABvOBgAAYMPZAAAAbDgbAACADWcDAACw4WwAAAA2nA0AAMCG swEAANhwNgAAABvOBgAAYMPZAAAAbDgbAACADWcDAACw4WwAAAA2nA0AAMCGswEAANhwNgAAABvO BgAAYMPZAAAAbDgbAACADWcDAACw4WwAAAA2nA0AAMCGswEAANhwNgAAABvOBgAAYMPZAAAAbDgb AACADWcDAACw4WwAAAA2nA0AAMCGswEAANhwNgAAABvOBgAAYMPZAAAAbDgbAACADWcDAACw4WwA AAA2nA0AAMCGswEAANhwNgAAABvOBgAAYMPZAAAAbDgbAACADWcDAACw4WwAAAA2nA0AAMCGswEA ANhwNgAAABvOBgAAYMPZAAAAbDgbAACADWcDAACw4WwAAAA2nA0AAMCGswEAANhwNgAAABvOBgAA YMPZAAAAbDgbAACADWcDAACw4WwAAAA2nA0AAMCGswEAANhwNgAAABvOBgAAYMPZAAAAbDgbAACA DWcDAACw4WwAAAA2nA0AAMCGswEAANhwNgAAABvOBgAAYMPZAAAAbDgbAACADWcDAACw4WwAAAA2 nA0AAMCGswEAANhwNgAAABvOBgAAYMPZAAAAbDgbAACADWcDAACw4WwAAAA2nA0AAMCGswEAANhw NgAAABvOBgAAYMPZAAAAbDgbAACADWcDAACw4WwAAAA2nA0AAMCGswEAANhwNgAAABvOBgAAYMPZ AAAAbDgbAACADWcDAACw4WwAAAA2nA0AAMCGswEAANhwNgAAABvOBgAAYMPZAAAAbDgbAACADWcD AACw4WwAAAA2nA0AAMCGswEAANhwNgAAABvOBgAAYMPZAAAAbDgbAACADWcDAACw4WwAAAA2nA0A AMCGswEAANhwNgAAABvOBgAAYMPZAAAAbDgbAACADWcDAACw4WwAAAA2nA0AAMCGswEAANhwNgAA ABvOBgAAYMPZAAAAbDgbAACADWcDAACw4WwAAAA2nA0AAMCGswEAANhwNgAAABvOBgAAYMPZAAAA bDgbAACADWcDAACw4WwAAAA2nA0AAMCGswEAANhwNgAAABvOBgAAYMPZAAAAbDgbAACADWcDAACw 4WwAAAA2nA0AAMCGswEAANhwNgAAABvOBgAAYMPZAAAAbDgbAACADWcDAACw4WwAAAA2nA0AAMCG swEAANhwNgAAABvOBgAAYMPZAAAAbDgbAACADWcDAACw4WwAAAA2nA0AAMCGswEAANhwNgAAABvO BgAAYMPZAAAAbDgbAACADWcDAACw4WwAAAA2nA0AAMCGswEAANhwNgAAABvOBgAAYMPZAAAAbDgb AACADWcDAACw4WwAAAA2nA0AAMCGswEAANhwNgAAABvOBgAAYMPZAAAAbDgbAACADWcDAACw4WwA AAA2nA0AAMCGswEAANhwNgAAABvOBgAAYMPZAAAAbDgbAACADWcDAACw4WwAAAA2nA0AAMCGswEA ANhwNgAAABvOBgAAYMPZAAAAbDgbAACADWcDAACw4WwAAAA2nA0AAMCGswEAANhwNgAAABvOBgAA YMPZAAAAbDgbAACADWcDAACw4WwAAAA2nA0AAMCGswEAANhwNgAAABvOBgAAYMPZAAAAbDgbAACA DWcDAACw4WwAAAA2nA0AAMCGswEAANhwNgAAABvOBgAAYMPZAAAAbDgbAACADWcDAACw4WwAAAA2 nA0AAMCGswEAANhwNgAAABvOBgAAYMPZAAAAbDgbAACADWcDAACw4WwAAAA2nA0AAMCGswEAANhw NgAAABvOBgAAYMPZAAAAbDgbAACADWcDAACw4WwAAAA2nA0AAMCGswEAANhwNgAAABvOBgAAYMPZ AAAAbDgbAACADWcDAACw4WwAAAA2nA0AAMCGswEAANhwNgAAABvOBgAAYMPZAAAAbDgbAACADWcD AACw4WwAAAA2nA0AAMCGswEAANhwNgAAABvOBgAAYMPZAAAAbDgbAACADWcDAACw4WwAAAA2nA0A AMCGswEAANhwNgAAABvOBgAAYMPZAAAAbDgbAACADWcDAACw4WwAAAA2nA0AAMCGswEAANg49Nnw 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 AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAZPzuDy/3uf2HgMt0gvX9r/af4Sp5bkKN5yZU/OEPD19O5c9WCE/wuz/8Pydb 3xevoK/IcxNaPDeh5Hcn/NL39y+Bn9t/LLgEp/zS919fAr2A5v0+8Nz8i+cmPMZ/em5CSeBr30/+ /If2Hw3O3O8CX/v++hXwpv1nOzbPTWjx3ISW38fW99MEP7f/gHC+/vMhub4/+6ezFM9NqPHchJbf 3Ua/+P3g//vc/kPCefpDfH1/8QUw4feem9DiuQkt4X8x+68vgO0/J5yh7L+Y/dcXwJv2n/NwPDeh xnMTavI3+9843eHnXuEbfX/158/tP+uxeG5Ci+cm1Pzu4dW++lkg/Nzr/IP1X3n9PB3PTajx3ISa V52fBcI/eNV3zy9eP0/HcxNaPDeh5hV+pO9fFtj+M8OZ+M9XX9+Xm/af+RA8N6HGcxNqfvf68/Mz RvCT28b8/IDty3luQo3nJtT8v435ffENd/jNb37/0Fmfb7i/lOcmtHhuQs9t6avfly//f/uPDmWV f7H+0V8+t//sl81zE1o8N6Gm8PHcv/NBXa5b4eO5f3fT/tNfMM9NqPHchJrWt/p8/YPa51x8/Xsh z02o8dyEmvJXP1//uGblr36+/j2X5ybUeG5CTf2rn69/XK/6Vz9f/57nHJ6bn9sRoMNzE2rO4Kuf u4FrdQZf/Xz9ew7PTajx3ISas/jq5+sf1+ksvvr5+vd0nptQ47kJNWfy1c/XP67RmXz18/XvyR7a f2N/5bnJ9flv7dn9zU27BLy+2/bu/sv/bqeAV9b7veP/4nO7xWW5bf99/RfPTa6N5yb03LZX9w/8 /0VclzP66uf/L3qSu/Zf1z/w3OS6eG5Cz9l8RuJH9+0c8IrO5gOCP/pLO8cF8dyEFs9N6DmbTwj+ 1ed2EHg9D+29/ZxPuzzWOf1r5w9u2kHg9Ty09/Zznptck9+3B/fPfMOP63HXnts/82mXx/HchJq7 9tz+mecmV+Shvbd/4deCcC3O7Vt9X/yr9SM9tP+e/oXnJtfCcxN67tpr+wUOd67DuX3Q5Qf+1fox 7tp/Tb/Ac5PrcHbf6vviucn1OMOr/YvDnSvx0F7aL/Gv1nuem1Dz0F7aL/Hc5Dqc49X+xeHOdbhr D+2X+VfrHc9NqLlrD+2XeW5yFR7aS/sVfi8Bx3ee/2T9xS8z23po/w39Cv/gyfGd7XPzpl0G8u7a O/tV9+00EHam/2T9xW8h37lr/wX9qvt2Ggjz3ISec/yBzL/53I4DWbftjf063+1b8dyEmtv2xn6d 5yaH99Be2YJvt3NsZ/ut9h/ctOucs4f2386C5ybH5rkJPXftjS3dt/NA0Pl+q/0Hvt3+6+7afzlL 9+08EOS5CT3nvT+/FYRDu2sPbM1vBfk1Z/7c9DEljuyuva81z00O7aG9sA2fE+S4zvpb7T/43C50 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 XTatHTjFc5PzN9ozSblvl4W9o/76cZ8S5ALctVeSMttlwzw3oeauvZKU2S4Le4f9kKAvf5y/2/ZK Uma7bJjnJtTctleSMttlYe+ov37cpwS5AA/tlaQc/SPyxz0bbtppYeehvZKUoz83OYTR3knMTTst 7LRHEnP0L3+jHTjmpp0WdtojiTn6c5NDGO2dxNy308JOeyQxR//J2tEOHHPfTgs77ZHEHP25ySHc tncSM9tpYeO4H3U5+kfk79p9Y2Y7LWx4bkLRbXsmMbOdFjZ8+btUt+2+MbOdFjY8N6Hotj2TGJ8S 5Nwd+MvfTbtt1m27b4znJufOcxOK2ivJ8eWPczfaI8m5abfNaufN8dzk3I32SHJu2m1hq72SHF/+ OHejPZKcm3bbrHbeHM9Nzt1ojyTnpt0WttorCWqnhY3R3kjObLfNaucNaqeFjdHeSM5st4WdA39I 0Jc/zt1teyM5s902ynMTam7bG8mZ7baw48sf1Ny2N5Iz222jPDeh5ra9kZzZbgs7R/7y97kdF9Zu 2xvJ+d/ttlFHfm7etOPC2m17Izl+tIiz99/aKwm6aceFtYf2RnKO/eXPcxNqHtobyTn2c5NDGO2V BN2048JaeyJBx/7yN9p5g27acWGtPZGgYz83OYTRXknQTTsurLUnEnTsL3+jnTfoph0X1toTCTr2 c5NDGO2VBM12XFhrTyToL+22UaOdN2i248JaeyJJ7bawc9ceSdBsx4Wl37cnktSOGzXadYNmOy4s eW5C0W17JEGzHReWjvz7eI795e+2XTdotuPCkucmFN22RxI023FhyZe/S3Xbrhs023FhyXMTim7b Iwma7biw5Mvfpbpt1w2a7biw5LkJRbftkQT5nQSct0N/+fvcrpt0264b5LnJeTv0c/OmXRc2btsj CfLlj/Pmy9+lum3XDfLc5Lx5bkJReyNJvvxx3kZ7Ikk37bpJD+26QZ6bnLcj/x/tx35ucgjtjST5 8sd5G+2JJN206ya14yZ5bnLeRnsiSTfturDR3kiSL3+ct9GeSNJNu25SO26S5ybnbbQnknTTrgsb 7Y0k+fLHeRvtiSTdtOsmteMmeW5y3kZ7Ikk37bqw0d5Iki9/nLfRnkjSTbtuUjtukucm5220J5J0 064LG+2NJPnyx3kb7Ykk3bTrJrXjJnluct5GeyJJN+26sNHeSNJf2nFhabQnknTTrpvUjhvVjgtL o72QpPt2XdhobySqHReWRnshSbNdN6kdN6odF5ZGeyFJs10XNtobiWrHhaXRXkjSbNdNaseNaseF pdFeSNJs14WN9kai2nFhabQXkjTbdZPacaPacWFptBeSNNt1YaO9kah2XFga7YUkzXbdpHbcqHZc WBrthSTNdl3YaG8kqh0XlkZ7IUmzXTepHTeqHReWRnshSbNdFzbaG4lqx4Wl0V5I0mzXTWrHjWrH haXRXkjSbNeFjfZGotpxYWm0F5I023WT2nGj2nFhabQXkjTbdWGjvZGodlxYGu2FJM123aR23Kh2 XFga7YUkzXZd2GhvJKodF5ZGeyFJs103qR03qh0XlkZ7IUmzXRc22huJaseFpdFeSNJs101qx41q x4Wl0V5I0mzXhY32RqLacWFptBeSNNt1k9pxo9pxYWm0F5I023Vho72RqHZcWBrthSTNdt2kdtyo dlxYGu2FJM12XdhobySqHReWRnshSbNdN6kdN6odF5ZGeyFJs10XNtobiWrHhaXRXkjSbNdNaseN aseFpdFeSNJs14WN9kai2nFhabQXkjTbdZPacaPacWFptBeSNNt1YaO9kah2XFga7YUkzXbdpHbc qHZcWBrthSTNdl3YaG8kqh0XlkZ7IUmzXTepHTeqHReWRnshSbNdFzbaG4lqx4Wl0V5I0mzXTWrH jWrHhaXRXkjSbNeFjfZGotpxYWm0F5I023WT2nGj2nFhabQXkjTbdWGjvZGodlxYGu2FJM123aR2 3Kh2XFga7YUkzXZd2GhvJKodF5ZGeyFJs103qR03qh0XlkZ7IUmzXRc22huJaseFpdFeSNJs101q x41qx4Wl0V5I0mzXhY32RqLacWFptBeSNNt1k9pxo9pxYWm0F5I023Vho72RqHZcWBrthSTNdt2k dtyodlxYGu2FJM12XdhobySqHReWRnshSbNdN6kdN6odF5ZGeyFJs10XNtobiWrHhaXRXkjSbNdN aseNaseFpdFeSNJs14WN9kai2nFhabQXkjTbdZPacaPacWFptBeSNNt1YaO9kah2XFga7YUkzXbd pHbcqHZcWBrthSTNdl3YaG8kqh0XlkZ7IUmzXTepHTeqHReWRnshSbNdFzbaG4lqx4Wl0V5I0mzX TWrHjWrHhaXRXkjSbNeFjfZGotpxYWm0F5I023WT2nGj2nFhabQXkjTbdWGjvZGodlxYGu2FJM12 3aR23Kh2XFga7YUkzXZd2GhvJKodF5ZGeyFJs103qR03qh0XlkZ7IUmzXRc22huJaseFpdFeSNJs 101qx41qx4Wl0V5I0mzXhY32RqLacWFptBeSNNt1k9pxo9pxYWm0F5I023Vho72RqHZcWBrthSTN dt2kdtyodlxYGu2FJM12XdhobySqHReWRnshSbNdN6kdN6odF5ZGeyFJs10XNtobiWrHhaXRXkjS bNdNaseNaseFpdFeSNJs14WN9kai2nFhabQXkjTbdZPacaPacWFptBeSNNt1YaO9kah2XFga7YUk zXbdpHbcqHZcWBrthSTNdl3YaG8kqh0XlkZ7IUmzXTepHTeqHReWRnshSbNdFzbaG4lqx4Wl0V5I 0mzXTWrHjWrHhaXRXkjSbNeFjfZGotpxYWm0F5I023WT2nGj2nFhabQXkjTbdWGjvZGodlxYGu2F JM123aR23Kh2XFga7YUkzXZd2GhvJKodF5ZGeyFJs103qR03qh0XlkZ7IUmzXRc22huJaseFpdFe SNJs101qx41qx4Wl0V5I0mzXhY32RqLacWFptBeSNNt1k9pxo9pxYWm0F5I023Vho72RqHZcWBrt hSTNdt2kdtyodlxYGu2FJM12XdhobySqHReWRnshSbNdN6kdN6odF5ZGeyFJs10XNtobiWrHhaXR XkjSbNdNaseNaseFpdFeSNJs14WN9kai2nFhabQXkjTbdZPacaPacWFptBeSNNt1YaO9kah2XFga 7YUkzXbdpHbcqHZcWBrthSTNdl3YaG8kqh0XlkZ7IUmzXTepHTeqHReWRnshSbNdFzbaG4lqx4Wl 0V5I0mzXTWrHjWrHhaXRXkjSbNeFjfZGotpxYWm0F5I023WT2nGj2nFhabQXkjTbdWGjvZGodlxY Gu2FJM123aR23Kh2XFga7YUkzXZd2GhvJKodF5ZGeyFJs103qR03qh0XlkZ7IUmzXRc22huJaseF pdFeSNJs101qx41qx4Wl0V5I0mzXhY32RqLacWFptBeSNNt1k9pxo9pxYWm0F5I023Vho72RqHZc WBrthSTNdt2kdtyodlxYGu2FJM12XdhobySqHReWRnshSbNdN6kdN6odF5ZGeyFJs10XNtobiWrH haXRXkjSbNdNaseNaseFpdFeSNJs14WN9kai2nFhabQXkjTbdZPacaPacWFptBeSNNt1YaO9kah2 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 2nFhabQXkjTbdWGjvZGodlxYGu2FJM123aR23Kh2XFga7YUkzXZd2GhvJKodF5ZGeyFJs103qR03 qh0XlkZ7IUmzXRc22huJaseFpdFeSNJs101qx41qx4Wl0V5I0mzXhY32RqLacWFptBeSNNt1k9px o9pxYWm0F5I023Vho72RqHZcWBrthSTNdt2kdtyodlxYGu2FJM12XdhobySqHReWRnshSbNdN6kd N6odF5ZGeyFJs10XNtobiWrHhaXRXkjSbNdNaseNaseFpdFeSNJs14WN9kai2nFhabQXkjTbdZPa caPacWFptBeSNNt1YaO9kah2XFga7YUkzXbdpHbcqHZcWBrthSTNdl3YaG8kqh0XlkZ7IUmzXTep HTeqHReWRnshSbNdFzbaG4lqx4Wl0V5I0mzXTWrHjWrHhaXRXkjSbNeFjfZGotpxYWm0F5I023WT 2nGj2nFhabQXkjTbdWGjvZGodlxYGu2FJM123aR23Kh2XFga7YUkzXZd2GhvJKodF5ZGeyFJs103 qR03qh0XlkZ7IUmzXRc22huJaseFpdFeSNJs101qx41qx4Wl0V5I0mzXhY32RqLacWFptBeSNNt1 k9pxo9pxYWm0F5I023Vho72RqHZcWBrthSTNdt2kdtyodlxYGu2FJM12XdhobySqHReWRnshSbNd N6kdN6odF5ZGeyFJs10XNtobiWrHhaXRXkjSbNdNaseNaseFpdFeSNJs14WN9kai2nFhabQXkjTb dZPacaPacWFptBeSNNt1YaO9kah2XFga7YUkzXbdpHbcqHZcWBrthSTNdl3YaG8kqh0XlkZ7IUmz XTepHTeqHReWRnshSbNdFzbaG4lqx4Wl0V5I0mzXTWrHjWrHhaXRXkjSbNeFjfZGotpxYWm0F5I0 23WT2nGj2nFhabQXkjTbdWGjvZGodlxYGu2FJM123aR23Kh2XFga7YUkzXZd2GhvJKodF5ZGeyFJ s103qR03qh0XlkZ7IUmzXRc22huJaseFpdFeSNJs101qx41qx4Wl0V5I0mzXhY32RqLacWFptBeS NNt1k9pxo9pxYWm0F5I023Vho72RqHZcWBrthSTNdt2kdtyodlxYGu2FJM12XdhobySqHReWRnsh SbNdN6kdN6odF5ZGeyFJs10XNtobiWrHhaXRXkjSbNdNaseNaseFpdFeSNJs14WN9kai2nFhabQX kjTbdZPacaPacWFptBeSNNt1YaO9kah2XFga7YUkzXbdpHbcqHZcWBrthSTNdl3YaG8kqh0XlkZ7 IUmzXTepHTeqHReWRnshSbNdFzbaG4lqx4Wl0V5I0mzXTWrHjWrHhaXRXkjSbNeFjfZGotpxYWm0 F5I023WT2nGj2nFhabQXkjTbdWGjvZGodlxYGu2FJM123aR23Kh2XFga7YUkzXZd2GhvJKodF5ZG eyFJs103qR03qh0XlkZ7IUmzXRc22huJaseFpdFeSNJs101qx41qx4Wl0V5I0mzXhY32RqLacWFp tBeSNNt1k9pxo9pxYWm0F5I023Vho72RqHZcWBrthSTNdt2kdtyodlxYGu2FJM12XdhobySqHReW RnshSbNdN6kdN6odF5ZGeyFJs10XNtobiWrHhaXRXkjSbNdNaseNaseFpdFeSNJs14WN9kai2nFh abQXkjTbdZPacaPacWFptBeSNNt1YaO9kah2XFga7YUkzXbdpHbcqHZcWBrthSTNdl3YaG8kqh0X lkZ7IUmzXTepHTeqHReWRnshSbNdFzbaG4lqx4Wl0V5I0mzXTWrHjWrHhaXRXkjSbNeFjfZGotpx YWm0F5I023WT2nGj2nFhabQXkjTbdWGjvZGodlxYGu2FJM123aR23Kh2XFga7YUkzXZd2GhvJKod F5ZGeyFJs103qR03qh0XlkZ7IUmzXRc22huJaseFpdFeSNJs101qx41qx4Wl0V5I0mzXhY32RqLa cWFptBeSNNt1k9pxo9pxYWm0F5I023Vho72RqHZcWBrthSTNdt2kdtyodlxYGu2FJM12XdhobySq HReWRnshSbNdN6kdN6odF5ZGeyFJs10XNtobiWrHhaXRXkjSbNdNaseNaseFpdFeSNJs14WN9kai 2nFhabQXkjTbdZPacaPacWFptBeSNNt1YaO9kah2XFga7YUkzXbdpHbcqHZcWBrthSTNdl3YaG8k qh0XlkZ7IUmzXTepHTeqHReWRnshSbNdFzbaG4lqx4Wl0V5I0mzXTWrHjWrHhaXRXkjSbNeFjfZG otpxYWm0F5I023WT2nGj2nFhabQXkjTbdWGjvZGodlxYGu2FJM123aR23Kh2XFga7YUkzXZd2Ghv JKodF5ZGeyFJs103qR03qh0XlkZ7IUmzXRc22huJaseFpdFeSNJs101qx41qx4Wl0V5I0mzXhY32 RqLacWFptBeSNNt1k9pxo9pxYWm0F5I023Vho72RqHZcWBrthSTNdt2kdtyodlxYGu2FJM12Xdho bySqHReWRnshSbNdN6kdN6odF5ZGeyFJs10XNtobiWrHhaXRXkjSbNdNaseNaseFpdFeSNJs14WN 9kai2nFhabQXkjTbdZPacaPacWFptBeSNNt1YaO9kah2XFga7YUkzXbdpHbcqHZcWBrthSTNdl3Y aG8kqh0XlkZ7IUmzXTepHTeqHReWRnshSbNdFzbaG4lqx4Wl0V5I0mzXTWrHjWrHhaXRXkjSbNeF jfZGotpxYWm0F5I023WT2nGj2nFhabQXkjTbdWGjvZGodlxYGu2FJM123aR23Kh2XFga7YUkzXZd 2GhvJKodF5ZGeyFJs103qR03qh0XlkZ7IUmzXRc22huJaseFpdFeSNJs101qx41qx4Wl0V5I0mzX hY32RqLacWFptBeSNNt1k9pxo9pxYWm0F5I023Vho72RqHZcWBrthSTNdt2kdtyodlxYGu2FJM12 XdhobySqHReWRnshSbNdN6kdN6odF5ZGeyFJs10XNtobiWrHhaXRXkjSbNdNaseNaseFpdFeSNJs 14WN9kai2nFhabQXkjTbdZPacaPacWFptBeSNNt1YaO9kah2XFga7YUkzXbdpHbcqHZcWBrthSTN dl3YaG8kqh0XlkZ7IUmzXTepHTeqHReWRnshSbNdFzbaG4lqx4Wl0V5I0mzXTWrHjWrHhaXRXkjS bNeFjfZGotpxYWm0F5I023WT2nGj2nFhabQXkjTbdWGjvZGodlxYGu2FJM123aR23Kh2XFga7YUk zXZd2GhvJKodF5ZGeyFJs103qR03qh0XlkZ7IUmzXRc22huJaseFpdFeSNJs101qx41qx4Wl0V5I 0mzXhY32RqLacWFptBeSNNt1k9pxo9pxYWm0F5I023Vho72RqHZcWBrthSTNdt2kdtyodlxYGu2F JM12XdhobySqHReWRnshSbNdN6kdN6odF5ZGeyFJs10XNtobiWrHhaXRXkjSbNdNaseNaseFpdFe SNJs14WN9kai2nFhabQXkjTbdZPacaPacWFptBeSNNt1YaO9kah2XFga7YUkzXbdpHbcqHZcWBrt hSTNdl3YaG8kqh0XlkZ7IUmzXTepHTeqHReWRnshSbNdFzbaG4lqx4Wl0V5I0mzXTWrHjWrHhaXR XkjSbNeFjfZGotpxYWm0F5I023WT2nGj2nFhabQXkjTbdWGjvZGodlxYGu2FJM123aR23Kh2XFga 7YUkzXZd2GhvJKodF5ZGeyFJs103qR03qh0XlkZ7IUmzXRc22huJaseFpdFeSNJs101qx41qx4Wl 0V5I0mzXhY32RqLacWFptBeSNNt1k9pxo9pxYWm0F5I023Vho72RqHZcWBrthSTNdt2kdtyodlxY Gu2FJM12XdhobySqHReWRnshSbNdN6kdN6odF5ZGeyFJs10XNtobiWrHhaXRXkjSbNdNaseNaseF pdFeSNJs14WN9kai2nFhabQXkjTbdZPacaPacWFptBeSNNt1YaO9kah2XFga7YUkzXbdpHbcqHZc WBrthSTNdl3YaG8kqh0XlkZ7IUmzXTepHTeqHReWRnshSbNdFzbaG4lqx4Wl0V5I0mzXTWrHjWrH haXRXkjSbNeFjfZGotpxYWm0F5I023WT2nGj2nFhabQXkjTbdWGjvZGodlxYGu2FJM123aR23Kh2 XFga7YUkzXZd2GhvJKodF5ZGeyFJs103qR03qh0XlkZ7IUmzXRc22huJaseFpdFeSNJs101qx41q x4Wl0V5I0mzXhY32RqLacWFptBeSNNt1k9pxo9pxYWm0F5I023Vho72RqHZcWBrthSTNdt2kdtyo dlxYGu2FJM12XdhobySqHReWRnshSbNdN6kdN6odF5ZGeyFJs10XNtobiWrHhaXRXkjSbNdNaseN aseFpdFeSNJs14WN9kai2nFhabQXkjTbdZPacaPacWFptBeSNNt1YaO9kah2XFga7YUkzXbdpHbc qHZcWBrthSTNdl3YaG8kqh0XlkZ7IUmzXTepHTeqHReWRnshSbNdFzbaG4lqx4Wl0V5I0mzXTWrH jWrHhaXRXkjSbNeFjfZGotpxYWm0F5I023WT2nGj2nFhabQXkjTbdWGjvZGodlxYGu2FJM123aR2 3Kh2XFga7YUkzXZd2GhvJKodF5ZGeyFJs103qR03qh0XlkZ7IUmzXRc22huJaseFpdFeSNJs101q x41qx4Wl0V5I0mzXhY32RqLacWFptBeSNNt1k9pxo9pxYWm0F5I023Vho72RqHZcWBrthSTNdt2k dtyodlxYGu2FJM12XdhobySqHReWRnshSbNdN6kdN6odF5ZGeyFJs10XNtobiWrHhaXRXkjSbNdN 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 bvS5ncGVPsWD8nftPN+l9Ck3+tzO4Eqf4kF5b0qvQW/5mPwa8q+70od4VA/65OS9+Tnem193pw/x qB70yUkncafHfEy+/n2VXyH4WfTJ6U/em5/kvflV3pufRZ+cdBa+S+lz/Bryr/HV77P8XfseeG9+ jm8w/xrvzc/y3pRexO9y+yT/u+ErfG/4pz3os9N39GNwVN6bX+G9+WkP+uyk07jScz4qX/8+z1e/ z7vRh6fvrvRzcFTem5/nvfl5N/rwpNPwt+2f5W89P8tXv8/zX1374L35Wd6bn+W9+Xnem9LL+C6l T/PPnn6Of67oCx706elX3puf5r35Od6bX/CgT086kSs96OPy9e8zfPX7iht9fPqnK/0kHJf35md4 b37FjT4+6USKHvSB+fr3cb76fYW/a9+Loh+FA/Pe/Djvza/wG7ykF/K37V/g699H+er3JU2fn/7F e/MLvDc/ynvzS5o+P+lUnvSkj8zXvw960id2bDf6/PRvT/pZODLvzQ+60id2bDf6/KRTKXrSh/ag j+9YrvR5HZu/a9+Poh+GQ/O/Gz7kSp/XsXlvSi/lb9u/5EKf35Fc6dM6uKYPUP/hvfklD/r8juRK n9bBNX2A0sk86VEf24U+v+O40md1dDf6BPVfT/ppOLYLfX7HcaXP6ugu9AlKJ3OnR31wF/oAj+JK n9TR+bv2PSn6cTi4C32AR3GlT+rovDelF/OPT37RhT7BY7jS53R4/oHdPfHe/CI/3/AuV/qcDs97 U3q1Jz3ro/P17x2u9Ckd34U+Q/3Wk34ejs578x2u9Ckd34U+Q+l07vSsD8/Xv6krfUbH5+/a9+VO PxCH5705daXP6Pi8N6WX87ftX+br38SVPqET8Hft++K9+WXemxNX+oROwHtTer0nPezj8/Vv6Eqf zxlc6FPU7z3pJ+L4vDeHrvT5nMGFPkXphO70sE/A17+BK306Z+Dv2vfmTj8SJ+C9OXClT+cMvDel AH/b/gL/S5/ibv3lSZ/NKfi79r3x3nwB782f8d58Ce9NKeFJT/sM/k6f4k756vcaF/og9UdP+pk4 A+/Nt3lvvsaFPkjplO70tE/B17+3+Or3Gv6ufX/u9ENxCt6bb/HefA3vTSnir/S2z+HvN/og9+fP T/pUTsLfte+P71J6Ce/NH/lfDS/ivSll0Ns+iV9u9EHujf+wepULfZT60ZN+Ks7Be/OPvDdf5UEf pXRSd3rcJ+Hr3+/56vcq/q59j+70Y3ESv1zok9wX782XoY9SOivfpfQqF/oo9+R/6NM4D3/Xvkf+ 8+5VLvRR7on35st4b0op9LrP4/9HH+V+/L/0WZzIhT5MveVJPxen4b35H96br/OgD1M6rTs97/Pw Dxj9y/9Dn8SJ+B6lfbrTD8Z5eG/+i/fmC9GHKZ2X71J6Hb9Q8FdX+hzOxN+175PvUnod781fXelz OBPvTSmH3veZ+IWCfoHgi13o89TbnvSTcSLem96bL/agz1M6sTs98DPxC5X8cw0v5XuU9upOPxpn 4r3pvfla9HlKZ+a7lF7qQp8ny/duvJa/a98rn/SXutDn6dN0Jt6bUtKTnvi5LP0BP78K5MUu9Inq Z570s3Eu3pt6nQt9otKp3emJn8z/0gfKudLtz8b3KO3XnX44TmbhD0Zf6fZn470pRfn70Rdb9QN+ f7nS5U/H37Xvl/fmi3lv6kW8N6WsJz3ys/nlQh8pwQ/1vd6SD9JRPOmn42y8N/UaSz5I0obu9MjP Z8G/fPo/dPMT8nfte3anH4/zWfADDt6br+e9KYX52/bXW+6Nuv6F0wB/175n3puv572pr/PelNKe 9MxPaK1vIvdvFUVc6HPVyJN+Pk5osXvzSvc+pQt9rtLp3emZn9JCb1Ty564R/q593+70A3JK3pv6 Gu9NKc7bK2KZb2L1F+0Z/q5937w3I7w39SXem1Lekx76Oa3xzSD+oj3lRh+txp70E3JO3pv6iiUe Hwl2p4d+Vgv8wt0fuab4u/a9K/oROSvvTX2a96a0gb/QSz+t0/8JI3/RHtP02WrCezPFe1Of1fTZ Skt40lM/rXP/wt1vUAq60aermSf9jJyW96Y+6UafrrSEoqd+Yif+hJ9/qijI37XvX9EPyYl5b+oz vDelTfjb9qCz/uDMz/RFNX2+mvLeDPLe1Cc0fb7SIp702E/tlD8480dmWTf6gDX3pJ+SU/Pe1Ifd 6AOWFvFXeuzndr4fnPkjs7C/0yesd/DejDrfvfmnK9305HyPkrQRf9sedrIfnPkjs7QHfcR6B+/N sJPdm39+0kHP7kEfsbSMKz33szvTD878VUPejT5kvceVfk7OzntTH3GjD1lahr9tjzvND878VUOe 71E6Bu/NOO9NvZv3prQZf9u+gVP88VN/ZLaFB33Meh/6QVmB96be6UEfs7SQOz34FZzgj5/+jW64 BvqY9U53+klZgfem3oc+Zmkl/rZ9Ewf/jbsf6dvGP+iD1jt5b27Ce1Pv4L0pbYle/CJ+OfBv3P09 +1Ye9FHrvehHZRGHvjf/H7reKh70UUtLudOTX8XfL/RRf5K/Z9+KXz5+HHf6YVmF96YmvDelTf2Z 3vw6/vdGH/Yn/M+TzrYOf9d+HN6bm/He1JD3prStJz36hfyNPuyP+vOVTraSC33cer8n/bQs5HAf cfDe3NKFPm5pMXd69Es51H84+ObcTfm79iO504/LUrw39TPem9LG/NMNmzrOZ/x88dtY0yeuD/De 3NRx7s0/eW9uq+kDl5bzpGe/mIO8APqJvq3d6CPXRzzp52Ux3pt6040+cmk5Rc9+OQd4AfTFb3P+ rv1Y/NMNW/Pe1I+8N6XN+dv27e38BdAXP8CDPnV9iPfm9rw39UcP+tSlBV3p4a9oxy+AvvghbvS5 62Ou9BOzIu9N/d6NPndpQf62nbHLbwfxg9AQv3z8aLw3Gd6b+i/vTYlAL39Zf7vRR/8Hf/bFj/Kg z14fRT8yy9rdH4Dz3sQ86LOXlnSnp7+uv1/ow/+N/7nSORZGH74+7E4/M+vy3tQ/0YcvrenP9PRX 9stefuf+tyedYmX+rv14vDdB3pv65r0pUZ70+Nf2vxf6AfC37DT+EdCHPemnZm3em+IfAWlNd3r8 q4N/dOYPzGh++fgR3enHZnXem4vz3pQgfgU573+pbxb8H39gxmv6CtAneG/yvDdX1vQVIC3rSc9f /+dvl80P/s9+2fgu3OgbQJ/xpJ8bffPeXNiNvgGkZfkV5Dux6Sugr3178Xf6AtCneG/uhPfmkrw3 JYy/bd+Pv23zW3df+3bkQV8A+hTvzf3w3lzPg74ApIXd6QtAv/H39Cf9/ub7cneFnr8+6U4/OfoN 783F0POXVuZv2/cm9sOzP/v9H3vjl48flffm3nhvrsN7UyI96StAP/jl5S+Bf/7blf4/pR9d6PXr s570s6MfeG8u4kKvX1ranb4C9La//e32mhP+mz8t2ym/fPy47vTDo7d5b56e96aE8sN9O/bLF18D /+Z7cves6fHr07w3d8x789SaHr+0uCd9CWjif//24a8Z/Mvf/uYXf+zejd6+Pu9JPz2a8N48qRu9 fWlxfrjvIP7vVfBvs28M+Z+/+bp3GH75+JF5bx6E9+bJeG9KMH/bfkB/+6Mn/b9IH/agp68v8N48 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 AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABnevry5eW7Sbx8+V/pPwYAAJja 06kawx/evrxI/1EAAMB0Xt5O3Bk+P3W4Sv9lAADAFJ789zyd4T/eeFsJAABW78nULyf92VvFAQAA Vm320qA4AADAys35etLX3lyk/1IAAOBR/meh0vDR39J/LAAAcLqnlwu2hnfv3l6k/2AAAOBETxYt DR44AADA+iz1VcPX3lyl/2oAAODBFn5B6Q8X6T8cAAB4oCe3mdbw7p2jWAEAYB2W/6zhi7+n/3gA AOABljx39Xtv0n8+AABQ+t9oa9AbAACgfenWoDcAAEDr8q1BbwAAgLa10Br0BgAAaNlP6cKgNwAA QOOSJ69+yzmsAADQpqfpsqA3AABA457eprvC1y7SwwEAAHzvMt0UvnWVHg8AAODPrtM94U/eXqVH BAAA+FYrhyh94TglAABoSzuHKH3hs2gAAGhJW59Df3aRHhYAAOCL63RDuJPPGwAAoB3tfdjwic8b AACgFS39ztu3btJDAwAAfHKZbgf3u0qPDQAA8FGrryh95DUlAABoQbuvKH10kx4eAACg6VeUPrpK jw8AANDyK0of/Z4eIAAAGF6bP/T2tZv0EAEAwOiu062g9DY9RAAAMLi2v4f+5O/pQQIAgLHdpjvB Q1ylRwkAAEbW+vfQn/gqGgAAgm7TjeBhrtLjBAAA41rHwwZfRQMAQE77h69+dpMeKgAAGNV1ug08 mMcNAACQsYbDVz+7SQ8WAACM6TrdBU7gcQMAACSs6WGDxw0AABBxnW4CJ/G4AQAAlreuhw0eNwAA QMB1ugecyOMGAABYXLoGnOwmPWIAADCatfxA9BceNwAAwMJu0y3gdBfpMQMAgLGs72HDu3e/pwcN AADGcpvuAI9xlR41AAAYyZN0A3gUjxsAAGBB1+kG8DjpYQMAgIGs7afePrtJDxwAAIzjRXr//0jO YAUAgMXcpvf/j3WVHjkAABjFGk9f/cRH0QAAsJDr9O7/8dJDBwAAg1jrB9Ef3aQHDwAAxrDed5R8 FA0AAAu5Te/9z3GVHj0AABjBmt9RevfudXr4AABgBNfpnf9ZvKUEAAALuE3v/M9zkR4/AADo35P0 vv9MfroBAABmd53e95/JW0oAADC79Lb/bBfpEQQAgN6t+UcbPvGWEgAAzOw6ves/m7eUAABgZrfp Xf/5LtJjCAAAfVv7OUofeUsJAABmdZ3e80/AW0oAADCr2/SefwoX6VEEAICePU3v+CfxOj2MAADQ sxfpHf8kvKUEAAAzukzv+KdxlR5HAADoVx/vKL17d5MeSAAA6Nf6fyL6E0ewAgDAbK7T+/2ppAcS AAD6dZve7k/lIj2SAADQqx5+IvqT1+mhBACAXr1I7/Yn8yY9lAAA0KvL9G5/OumhBACAXqX3+hO6 SI8lAAD0qZ9PG3zcAAAAM3mR3utPyMcNAAAwi8v0Xn9K6cEEAIA+pXf6k7pIjyYAAPSop08bfNwA AACzeJHe6U/Kxw0AADCD6/ROf1rp4QQAgB7dpjf607pIjycAAPTnaXqfP7HX6QEFAID+/JTe50/s 9/SAAgBAf16k9/kTe5seUAAA6M9lep8/tfSAAgBAf9K7/MldpEcUAAB609sX0b6JBgCAyfX2RbRv ogEAYHIv0rv8yfkmGgAAJnaZ3uVPLz2kAADQm9v0Jn96F+kxBQCAvvT3RfS7dzfpQQUAgL48Se/x Z+CbaAAAmNSL9B5/Bm/SgwoAAH25Tu/x55AeVAAA6Mtleos/h6v0qAIAQFfSO/xZXKRHFQAAetLj QUrv3r1ODysAAPSkx4OU1AYAAJjUT+kd/iwcpQQAABN6kd7hz+JtelgBAKAnl+kd/jzSwwoAAD25 TW/w53GRHlcAAOhIen+vNgAAQOv6PH/VUUoAADChPs9fVRsAAGBCfZ6/6gRWAACY0Iv0/l5tAACA 1l2n9/dzSQ8sAAD04zK9vVcbAACgdbfp7f1cLtIjCwAA3Ujv7tUGAABoXnp3P5ub9MgCAEAvev3Z Bj/cAAAAk+m3NvyeHloAAOhFr7/25ocbAABgMi/Su3u1AQAAWtdvbXibHloAAOjFZXp3P5/00AIA QC/UBgAAoNBxbbhKjy0AAHQivbef0UV6bAEAoBPpvb3aAAAAzUvv7Wd0kx5bAADow9P03n5Gr9OD CwAAfXiS3turDQAA0Dq1AQAAKPRcG35PDy4AAPSh59rwJj24AADQhxfpvb3aAAAArVMbAACAgtoA AAAUeq4Nb9ODCwAAfei5NrxLDy4AAPThOr21VxsAAKB1l+mtvdoAAACtUxsAAICC2gAAABTUBgAA oKA2AAAABbUBAAAodF0bLtKjCwAAXVAbAACAgtoAAAAU1AYAAKCgNgAAAAW1AQAAKKgNAABAQW0A AAAKagMAAFBQGwAAgILaAAAAFNQGAACgoDYAAAAFtQEAACioDQAAQEFtAAAACmoDAABQUBsAAICC 2gAAABTUBgAAoKA2AAAABbUBAAAoqA0AAEBBbQAAAApqAwAAUFAbAACAgtoAAAAU1AYAAKCgNgAA AAW1AQAAKKgNAABAQW0AAAAKagMAAFBQGwAAgILaAAAAFNQGAACgoDYAAAAFtQEAACioDQAAQEFt AAAACmoDAABQUBsAAICC2gAAABTUBgAAoKA2AAAABbUBAAAoqA0AAEBBbQAAAApqAwAAUFAbAACA gtoAAAAU1AYAAKCgNgAAAAW1AQAAKKgNAABAQW0AAAAKagMAAFBQGwAAgILaAAAAFNQGAACgoDYA AAAFtQEAACioDQAAQEFtAAAACmoDAABQUBsAAICC2gAAABTUBgAAoKA2AAAABbUBAAAoqA0AAEBB bQAAAApqAwAAUFAbAACAgtoAAAAU1AYAAKCgNgAAAAW1AQAAKKgNAABAQW0AAAAKagMAAFBQGwAA gILaAAAAFNQGAACgoDYAAAAFtQEAACioDQAAQEFtAAAACmoDAABQUBsAAICC2gAAABTUBgAAoKA2 AAAABbUBAAAoqA0AAEBBbQAAAApqAwAAUFAbAACAgtoAAAAU1AYAAKCgNgAAAAW1AQAAKKgNAABA QW0AAAAKagMAAFBQGwAAgILaAAAAFNQGAACgoDYAAAAFtQEAACioDQAAQEFtAAAACmoDAABQUBsA AICC2gAAABTUBgAAoKA2AAAABbUBAAAoqA0AAEBBbQAAAApqAwAAUFAbAACAgtoAAAAU1AYAAKCg NgAAAAW1AQAAKKgNAABAQW0AAAAKagMAAFBQGwAAgILaAAAAFNQGAACgoDYAAAAFtQEAACioDQAA QEFtAAAACmoDAABQUBsAAICC2gAAABTUBgAAoKA2AAAABbUBAAAoqA0AAEBBbQAAAApqAwAAUFAb AACAgtoAAAAU1AYAAKCgNgAAAAW1AQAAKKgNAABAQW0AAAAKagMAAFBQGwAAgILaAAAAFNQGAACg oDYAAAAFtQEAACioDQAAQEFtAAAACmoDAABQUBsAAICC2gAAABTUBgAAoKA2AAAABbUBAAAoqA0A AEBBbQAAAApqAwAAUFAbAACAgtoAAAAU1AYAAKCgNgAAAAW1AQAAKKgNAABAQW0AAAAKagMAAFBQ GwAAgILaAAAAFNQGAACgoDYAAAAFtQEAACioDQAAQEFtAAAACmoDAABQUBsAAICC2gAAABTUBgAA oKA2AAAABbUBAAAoqA0AAEBBbQAAAApqAwAAUFAbAACAgtoAAAAU1AYAAKCgNgAAAAW1AQAAKKgN AABAQW0AAAAKagMAAFBQGwAAgILaAAAAFNQGAACgoDYAAAAFtQEAACioDQAAQEFtAAAACmoDAABQ UBsAAICC2gAAABTUBgAAoKA2AAAABbUBAAAoqA0AAEBBbQAAAApqAwAAUFAbAACAgtoAAAAU1AYA AKCgNgAAAAW1AQAAKKgNAABAQW0AAAAKagMAAFBQGwAAgILaAAAAFNQGAACgoDYAAAAFtQEAACio DQAAQEFtAAAACmoDAABQUBsAAICC2gAAABTUBgAAoKA2AAAABbUBAAAoqA0AAEBBbQAAAApqAwAA UFAbAACAgtoAAAAU1AYAAKCgNgAAAAW1AQAAKKgNAABAQW0AAAAKagMAAFBQGwAAgILaAAAAFNQG AACgoDYAAAAFtQEAACioDQAAQEFtAAAACmoDAABQUBsAAICC2gAAABTUBgAAoKA2AAAABbUBAAAo qA0AAEBBbQAAAApqAwAAUFAbAACAgtoAAAAU1AYAAKCgNgAAAAW1AQAAKKgNAABAQW0AAAAKagMA AFBQGwAAgILaAAAAFNQGAACgoDYAAAAFtQEAACioDQAAQEFtAAAACmoDAABQUBsAAICC2gAAABTU BgAAoKA2AAAABbUBAAAoqA0AAEBBbQAAAApqAwAAUFAbAACAgtoAAAAU1AYAAKCgNgAAAAW1AQAA KKgNAABAQW0AAAAKagMAAFBQGwAAgILaAAAAFNQGAACgoDYAAAAFtQEAACioDQAAQEFtAAAACmoD AABQUBsAAICC2gAAABTUBgAAoKA2AAAABbUBAAAoqA0AAEBBbQAAAApqAwAAUFAbAACAgtoAAAAU 1AYAAKCgNgAAAAW1AQAAKKgNAABAQW0AAAAKagMAAFBQGwAAgILaAAAAFNQGAACgoDYAAAAFtQEA ACioDQAAQEFtAAAACmoDAABQUBsAAICC2gAAABTUBgAAoKA2AAAABbUBAAAoqA0AAEBBbQAAAApq AwAAUFAbAACAgtoAAAAU1AYAAKCgNgAAAAW1AQAAKKgNAABAQW0AAAAKagMAAFBQGwAAgILaAAAA FNQGAACgoDYAAAAFtQEAACioDQAAQEFtAAAACmoDAABQUBsAAICC2gAAABTUBgAAoKA2AAAABbUB AAAoqA0AAEBBbQAAAApqAwAAUFAbAACAgtoAAAAU1AYAAKCgNgAAAAW1AQAAKKgNAABAQW0AAAAK agMAAFBQGwAAgILaAAAAFNQGAACgoDYAAAAFtQEAACioDQAAQEFtAAAACmoDAABQUBsAAICC2gAA ABTUBgAAoKA2AAAABbUBAAAoqA0AAEBBbQAAAApqAwAAUFAbAACAgtoAAAAU1AYAAKCgNgAAAAW1 AQAAKKgNAABAQW0AAAAKagMAAFBQGwAAgILaAAAAFNQGAACgoDYAAAAFtQEAACioDQAAQKHr2pAe XAAA6IPaAAAAFNQGAACgoDYAAAAFtQEAACioDQAAQEFtAAAACi/SW3u1AQAAWtdzbXibHlwAAOhD z7XhTXpwAQCgD2oDAABQUBsAAIDCT+m9vdoAAACte5Le28/o9/TgAgBAH3quDa/TgwsAAH1QGwAA gMLT9N5ebQAAgOal9/YzukmPLQAAdCK9t5/RRXpsAQCgE+m9vdoAAADNu0xv7tUGAABoXce1IT20 AADQC7UBAAAovEhv7tUGAABoXb+14U16aAEAoBc/pXf3agMAALTuSXp3P5vf00MLAAC96Lc2vE4P LQAAdCO9u1cbAACgeend/Wwu0iMLAADduE1v79UGAABo3WV6ez+X9MACAEA/rtPbe7UBAABa9yK9 vZ/J2/TAAgBAP3r9vTe/9gYAAJPp9Ycb/NobAABM5ml6fz+T1+mBBQCAjqT39zO5SI8rAAB05Da9 wVcbAACgdZfpDf480sMKAAA9uU5v8NUGAABo3Yv0Bn8Wzl8FAIAJ9XkCq/NXAQBgQn2ewPo6PawA ANCV9A5/FhfpUQUAgK5cprf4c7hKjyoAAHTlOr3Fn0N6UAEAoC8v0lv8GThICQAAJtXjUUoOUgIA gEn1eJTS6/SgAgBAZ9J7/BlcpMcUAAA6c5ne5E/vKj2mAADQmev0Jn9yb9NDCgAAvfkpvcufnIOU AABgYv0dpfQ6PaQAANCd9C5/chfpEQUAgO5cprf5U7tKjygAAHTnOr3Nn5gvogEAYHK9fRPti2gA AJhcb78T/To9oAAA0KH0Pn9iF+nxBACADl2mN/rTSg8nAAD06EV6oz8pnzYAAMAM+vrBt9/TwwkA AF1K7/QndZMeTQAA6NJleqs/pav0aAIAQJdepLf6E/JjbwAAMIuePm7waQMAAMwjvdef0E16LAEA oFOX6c3+dK7SYwkAAJ16kd7sT8anDQAAMJN+Pm7waQMAAMwlvdufzEV6JAEAoFuX6e3+VNIDCQAA /fopvd2fyJv0QAIAQL+epvf7E3mdHkgAAOjYbXrDP42r9DgCAEDHrtMb/kk4fhUAAGbUxxGsjl8F AIA5pXf8k7hIjyIAAHTtOr3ln0J6EAEAoG89HMHqHSUAAJhXes8/gZv0GAIAQOeu05v+86WHEAAA erf+t5S8owQAAHNL7/rPdpMeQQAA6N51ett/rvQAAgBA/9b+lpJ3lAAAYH7pff+ZbtLjBwAAA7hO b/zPkx4+AAAYwZP0xv8s3lECAIAl3Ka3/ue4SI8eAAAM4Tq99T/D2/TgAQDAGJ6m9/5neJ0ePAAA GMRlevP/eFfpsQMAgEGs96cbfBANAABLSe/+H+0mPXIAADCM6/T2/5F8EA0AAItZ60fRr9MDBwAA A7lMF4DHuUqPGwAADGSdH0X7IBoAAJZ0m64Aj3GVHjUAABjKGh83+CAaAAAWtcaPom/SgwYAAIO5 TpeAk3nYAAAAC1vf44ab9JABAMBwrtM14EQeNgAAwOLW9rjhJj1gAAAwoOt0ETiJhw0AABCwrscN N+nhAgCAIV2nq8AJPGwAAICINT1uuEkPFgAADOo6XQYezMMGAAAIWc/jhpv0UAEAwLCu03XggTxs AACAmLU8brhJDxQAAAzsp3QheBAPGwAAIOk2XQke4io9SgAAMLQ1PG74PT1IAAAwuMt0KahdpccI AAAG1/5X0TfpIQIAgOH9b7oWFHwPDQAAebfpYvBjV+nxAQAA/vIkXQx+yPfQAADQgut0NfgBrygB AEAbbtPl4H4X6bEBAAD+o93XlLyiBAAArWj1NCWvKAEAQDtu0wXhblfpcQEAAP7Q5o++3aSHBQAA +MpP6YpwBx82AABAW67TJeE7PmwAAIDWXKZrwp9dpUcEAAD4k6e36Z7wrYv0gAAAAN9p69cb/p4e DgAA4A4t9QafQwMAQJva+dW3N+mhAAAA7tFKb3CIEgAAtOs6XRg+tYar9DgAAAD3u0xXBq0BAACa l+8NWgMAALQu3Ru0BgAAaF/2u2itAQAA1iDZG5y8CgAA6/A/sdbwt/SfDgAAPNCT20xr+Hv6DwcA AB7s6WWgNLy9SP/ZAADAKf578dbw5ir9NwMAAKdZ+kWl/0r/wQAAwOmWfODgUQMAAKzTcg8cPGoA AIDVWuYoVseuAgDAqr2cvzRcpf9GAADgTC9v5ywNL6/Sfx8AADCBJ3N9HP3mZfpPAwAAJvM/0zeH Nx40AABAb56+nO51pb+9vEj/OQAAwGxenusi/RcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAADOH/AA8JtDLzhU/QAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIxLTEw LTI1VDE1OjAzOjM0KzAwOjAwwWG+MwAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMS0xMC0yNVQxNTow MzozNSswMDowMBZLDTsAAAAASUVORK5CYII="})});try{he.displayName="LaranjaIcon",he.__docgenInfo={description:"",displayName:"LaranjaIcon",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/assets/icons/yu/negative/LaranjaIcon.tsx#LaranjaIcon"]={docgenInfo:he.__docgenInfo,name:"LaranjaIcon",path:"src/assets/icons/yu/negative/LaranjaIcon.tsx#LaranjaIcon"})}catch{}const Ne=()=>A("svg",{xmlns:"http://www.w3.org/2000/svg",width:"8333.333",height:"7417.333",version:"1",viewBox:"0 0 6250 5563",children:A("path",{d:"M43889 48880c-579-54-1073-396-1324-915-88-183-135-352-155-565-8-81-10-728-7-2160 3-1886 4-2052 20-2130 77-377 222-648 484-901 224-216 477-350 793-421l105-23h1610l105 23c220 50 399 125 572 241 414 278 667 701 717 1200 7 68 11 771 11 2091s-4 2023-11 2091c-21 211-68 378-159 564-228 466-655 789-1175 887-104 20-149 21-805 23-382 2-733-1-781-5zM8185 38963c-109-14-260-49-347-79-610-212-1036-752-1098-1393-13-133-13-9747 0-10076 12-301 24-475 51-740 223-2204 1099-4285 2520-5991 428-514 917-1005 1424-1429 1376-1150 2989-1946 4733-2334 472-105 1000-185 1492-225 594-49 1266-49 1860 0 2975 244 5725 1678 7649 3988 897 1076 1582 2311 2019 3636 330 1002 511 2017 552 3100 14 375 14 9932-1 10071-66 655-499 1197-1116 1398-235 77-222 76-1093 76-767 0-776 0-887-23-712-144-1237-721-1313-1444-6-59-10-1855-10-4918 0-4856-1-4948-36-5295-238-2352-1670-4457-3744-5504-1734-876-3785-931-5610-151-323 138-759 375-1060 575-1583 1055-2647 2717-2934 4585-30 194-51 395-66 608-7 102-10 1817-10 5072 0 3371-3 4950-11 5021-14 142-34 234-79 370-182 548-649 959-1227 1081-106 22-119 23-868 24-418 1-773 0-790-3zM34910 38964c-319-51-526-128-739-274-409-280-660-703-710-1199-15-139-15-9696-1-10071 108-2852 1252-5479 3260-7490 1612-1613 3662-2691 5890-3094 945-171 1961-220 2930-140 2288 188 4454 1078 6225 2559 606 507 1198 1122 1673 1738 506 656 939 1364 1277 2086 641 1370 984 2795 1045 4336 13 329 13 9943 0 10076-70 722-599 1307-1313 1451-111 23-120 23-892 23s-781 0-892-23c-620-125-1110-587-1269-1195-51-196-47 173-54-5212-7-5449-2-5030-60-5460-254-1871-1228-3546-2715-4668-1605-1211-3641-1615-5620-1115-673 170-1374 475-1973 859-1167 749-2086 1860-2608 3152-241 596-389 1205-461 1902-16 159-18 492-23 5250-7 5490-3 5093-54 5292-157 604-643 1064-1263 1195-106 22-119 23-868 24-418 1-771 0-785-2zM17110 13863c-238-29-502-129-720-274-123-81-333-290-417-414-164-243-254-490-283-774-13-136-14-4058 0-4189 45-425 248-814 564-1079 267-224 565-349 911-383 130-12 1320-12 1450 0 495 48 920 298 1203 708 148 214 243 481 271 761 15 143 15 4039 0 4182-40 393-193 715-473 994-233 232-489 373-814 447-95 21-113 22-877 24-429 0-796-1-815-3z",transform:"matrix(.1 0 0 -.1 0 5563)"})});try{Ne.displayName="VioletaIcon",Ne.__docgenInfo={description:"",displayName:"VioletaIcon",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/assets/icons/yu/positive/VioletaIcon.tsx#VioletaIcon"]={docgenInfo:Ne.__docgenInfo,name:"VioletaIcon",path:"src/assets/icons/yu/positive/VioletaIcon.tsx#VioletaIcon"})}catch{}const We=()=>A("svg",{xmlns:"http://www.w3.org/2000/svg",width:"874",height:"1182",x:"0",y:"0",version:"1.1",viewBox:"0 0 874 1182",xmlSpace:"preserve",children:A("image",{width:"874",height:"1182",x:"0",y:"0",href:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA2oAAASeCAQAAAAdhhUBAAAABGdBTUEAALGPC/xhBQAAACBjSFJN AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAJcEhZ cwAACxIAAAsSAdLdfvwAAAAHdElNRQflChkPCiLJL852AAA58ElEQVR42u3df7DnBX3f+5cdYXe0 w+7M7WJHoWwHMHcWpizkakDS7OG2Sm4aYb3pclujcVMg7YBtwMQWbTusc1vrJI2QRphOwLpWk5sL Td3F6BVtL4fcCFy9wtIrNFVplgBOCvfO3WWqs6zOeP8gKML+Oud8v9/35/P+PB5/OPkjI6/zlT3P /fz4fj6v+F4AoIc/Uz0AAGZF1ABoQ9QAaEPUAGhD1ABoQ9QAaEPUAGhD1ABoQ9QAaEPUAGhD1ABo Q9QAaEPUAGhD1ABoQ9QAaEPUAGhD1ABoQ9QAaEPUAGhD1ABoQ9QAaEPUAGhD1ABoQ9QAaEPUAGhD 1ABoQ9QAaEPUAGhD1ABoQ9QAaEPUAGhD1ABoQ9QAaEPUAGhD1ABoQ9QAaEPUAGhD1ABoQ9QAaEPU AGhD1ABoQ9QAaEPUAGhD1ABoQ9QAaEPUAGhD1ABoQ9QAaEPUAGhD1ABoQ9QAaEPUAGhD1ABoQ9QA aEPUAGhD1ABoQ9QAaEPUAGhD1ABoQ9QAaEPUAGhD1ABoQ9QAaEPUAGhD1ABoQ9QAaEPUAGhD1ABo Q9QAaEPUAGhD1ABoQ9QAaEPUAGhD1ABoQ9QAaEPUAGhD1ABoQ9QAaEPUAGhD1ABoQ9QAaEPUAGhD 1ABoQ9QAaEPUAGhD1ABoQ9QAaEPUAGhD1ABoQ9QAaEPUAGhD1ABoQ9QAaEPUAGhD1ABoQ9QAaEPU AGhD1ABoQ9QAaEPUAGhD1ABoQ9QAaEPUAGhD1ABoQ9QAaEPUAGhD1ABoQ9QAaEPUAGhD1ABoQ9QA aEPUAGhD1ABoQ9QAaEPUAGhD1ABoQ9QAaEPUAGhD1ABoQ9QAaOOV1QMGY1M2Z3P+Ql6TTXl1Ns3h n/BUvpOnciB/lD/O13Og+gcG5u5HcmZel9fmz2d9Ns/hv/9wvpn/mv8n+/PNfC2PV/+4QyBqp+XS XJptOXXB/9wn8u/z2SznmeoPAJixV+XHc2kuyvlZv9B/7sE8lOUs5758p/ojqPOK71UvqLMpV+ft Oad4xYO5M/8636z+MIAZWJdLsyM/nY2lKw7kt3Jn7q3+MGpMM2rrsiPvyKXVM77vcD6Xj+au6hnA GpyWv5dfyIbqGd/3dG7NTXm2esaiTS9q5+Xv5J15dfWMI3g6v51b8/XqGcAKbcrbsz1L1TOO4HDu zW9l75Su4U8ratuya5D/4r3Yct6XB6pHACdoXW7IDQu+drZSh/KhfKB6xKJMJ2qn5PbsqB5xgu7M da6ywQhcmRtzevWIE/JI3j+NSxxTidqV+eDC729ci6dz9TT+BYTROjsfz0XVI1bk7vyt/n9dnkLU zswnRvav3vPuzLVu+IeB2pHfLL7HcTWeyl/vfnmj/xNF/kEeHWXSkh35Wv529QjgZc7LPbljhElL Xpf7c0fOrp4xT72P1DbljsHfGHI8d+aq6d2UCwN2Y3ZVT1ijQ/ml3Fo9Yl46R+38fG5U19GO5pFc kUerRwBJkt/M1dUTZmJX1/sh+55+3Jb7WiQtOSf35C3VI4Csy21NkpbsygerJ8xH1yO1LfniKM94 H82h/JXcVz0CJm1d9g7oOUSzcEt+Kc9Vj5i1nkdq72qWtGR97s7l1SNgwn4kv98sacm1+f28pnrE rHU8Ursh/6x6wpxc2/fiLgzaunyl/OHn8/Gl/ESvo7V+R2rXtE1ackveWj0BJmhd9jZNWvLG3FY9 Yba6Halty3L1hLk6lAvzcPUImJg7RvOIvdX5cH6pesLs9DpSOyO/Uz1hztbndwb0agvo76R8snnS kvfkn1RPmJ1OUduUf5c/Xz1i7v7b/G9ZVz0CJuPW/Gz1hAX4h7mhesKsdDr9uDeXVU9YkFvy7uoJ MAlvzuerJyzM1h6XNvocqV0zmaQl17phBBbiV6oH+FlXqsuR2pn56sBf0zdbT+dcT/CHObs+H66e sFBX5M7qCWvXI2rr83+1veH2aJbz5ny3egQ0ti2fz8nVIxbqQC4e/3Nme5x+fPfkkpYs5YrqCdDY KfnExJKWbMwnqiesXYeorcu11RNKvLd6ADR2Q06vnlDgglxTPWGtOpx+vCa3VE8ocnnuqp4ALW3K H0/qKv0PPJ2/mG9Xj1iL8R+pndLn+xUr1vTVEVDu6okmLTl17F81H3/UPjjJkwTPO2f8pwpggF6V v1s9odB11QPWZuxROy1XVk8o9cGcUj0B2tk5gWcTHd3WcR+rjT1q10/2JMHzNkw86jAP072k8bzr qwesxbhvFDkpz0z+8b7fyNnVE6CVHbmjekK5C/JQ9YTVGveR2tLkk5aclTdUT4BW3lE9YABGfLV+ 3FHz9eMkE3rmJczf2f5EJfmb2Vg9YbXGHbW/Xj1gEKQdZucXqwcMwqvz9uoJqzXmqF043r9LzNTr s6l6ArQx6jv/Zmi0n8OYo+YkwQtG+68fDMz5ObV6wkAsjfUvy2OO2s9UDxiM7dUDoAm/VX5ge/WA 1Rlv1Lbk9dUTBuPNvoINM7G9esCAjDTw443aRdUDBuXC6gHQwKsm+BKroxvpb5XxRm2kH/icXFA9 ABqQtBfbkNdWT1iN8UbNr/EXc9wKa+fpPD9slJEfa9ROyrnVEwblR6sHQAOi9sNGed/CWKN29uRe tH5srxvr7bcwIJurBwzMGdUDVmOsURvlYfFcnVY9AEZvc/WAgXFNbYH8Cn+ps6oHwOg53/HDXlc9 YDXGGjXfy3opfxxhrV5dPWBgNlYPWI2xRs0F3ZcSNVgrZ4B+2MbqAasx1qi5TQSYtVdWD2Dtxho1 XsqtM8BsuVEEgDZGeUZM1ABoQ9QAaEPUAGhD1ABoQ9QAaEPUAGhD1ABoQ9QAaEPUAGhD1ABoQ9QA aEPUAGhD1ABoQ9QAaEPUAGhD1ABoQ9QAaEPUAGhD1ABoQ9QAaEPUAGhD1ABoQ9QAaEPUAGhD1ABo Q9QAaEPUAGhD1ABoQ9QAaEPUAGhD1ABoQ9QAaEPUAGhD1ABoQ9QAaEPUAGhD1ABoQ9QAaEPUAGhD 1ABoQ9QAaEPUAGhD1ABoQ9QAaEPUAGhD1ABoQ9QAaEPUAGhD1ABoQ9QAaEPUAGhD1ABoQ9QAaEPU AGhD1ABoQ9QAaEPUAGhD1ABoQ9QAaEPUAGhD1ABoQ9QAaEPUAGhD1ABoQ9QAaEPUAGhD1ABoQ9QA aOOV1QPgJTZma5LN2TzT/9b92Z9kXw5U/3gL5tNkYkSNoVjKUpayNRvm+k85mH1Zzr7sqf5x52x7 ti7s01zOcvWPCy94xfeqF6zOHdlRPWFg7swV1RNWbXu2Z/ucf/2+3N7sbpm27dmZpQV/mgezJ3sa fJoj/XU4R6+oHrCKySP9X1HUXmqcUduY67IzZ5T98x/P7tzc5iRa/ad5c3aP+tMc6a/DORph1Nwo QpWN2ZX9ubHwl3ByRm7M/uzKxuoPY82G8WnelP3ZVf1RMG2iRo3t2ZcbF37K8Ug25Mbsy/bqGWsy rE9zf5aqZzBdosbibcyefKr0mOKlzsinsmekx2tD/DTvye6RfpqMnqixaFuzL5dXjziCy7M/W6tH rNhQP813Zd8IP00aEDUWa2eWB3VU8WIb8lB2Vo9YkZ15aLCf5hlZHtmnSQu+p8Yi7czHqiccx8eS 7K4ecYKG/mluGNWnSROO1Ficof8Sft7HRnJ84dOEIxA1FmUcv4STcfwi9mnCEYkai7E0ml/CSfKx gd/iv31kn+bW6glMh6ixCJtH9wil3QP+Rbx1dNeplt3gz6KIGouwZxBfDF6JDQMOx+4Rfpp7qicw FaLG/O3KedUTVuG8gT7waZyf5rZcVz2BaRA15m1zbqyesEo3DvAU5NbRfpq7ZvxONzgiUWPedlcP WIObqweMYNGJ2jDi7YyIqDFfS9lWPWENtg3s0bzj/jQvH9inSUuixnztqh7Qav+w1kxvPyMgaszT 1lEfWSTDOlYb93FakmxzXY15EzXm6brqATOws3rAAJes3nXVA+hO1Jin7dUDZvIzbKyekCTZmHdV T5iBndUD6E7UmJ/to/uS8JFsGEiah7FirYbyadKWqDE/26sHzMhS9YAkfT7NLj8HAyVqzM9S9YAZ 2V49IEmfT7PLz8FAiRrzsnmw72ReqQ0DeLLI1hancpPkDHdAMk+ixrxsrR7Q6mepXzA7m6sH0Jmo MS9bqwfM0ObqAQNYMDtL1QPoTNSYl63VA2ZoqXrAABbMzubqAXQmaszLxuoBDNTm6gF0JmpwfBur BwgBnBhRY142Vw+YofrXcna5kxTmTNSYF7+GObKt1QPoTNSAxeryjTsGSdQAaEPUAGhD1ABoQ9QA aEPUAGhD1ABoQ9QAaEPUAGhD1ABoQ9QAaEPUAGhD1ABoQ9QAaEPUAGhD1ABoQ9QAaEPUAGhD1ABo Q9QAaEPUAGhD1ABoQ9QAaEPUAGhD1ABoQ9QAaEPUAGhD1ABoQ9QAaEPUAGhD1ABoQ9QAaEPUAGhD 1ABoQ9QAaEPUAGhD1ABoQ9QAaEPUAGhD1ABoQ9QAaEPUAGhD1ABoQ9QAaEPUAGhD1ABoQ9QAaEPU AGhD1ABoQ9QAaEPUAGhD1ABoQ9QAaEPUAGhD1ABoQ9QAaEPUAGhD1ABoQ9QAaEPUAGhD1ABoQ9QA aEPUAGhD1ABoQ9QAaEPUAGhD1ABoQ9QAaEPUAGhD1ABoQ9QAaEPUAGhD1ABoQ9QAaEPUAGhD1ABo Q9QAaEPUAGhD1ABoQ9QAaEPUAGhD1ABoQ9QAaEPUAGhD1ABoQ9QAaEPUAGhD1ABoQ9QAaEPUAGhD 1ABoQ9QAaEPUAGhD1ABoQ9QAaEPUAGhD1ABoQ9QAaEPUAGhD1ABoQ9QAaEPUgMV6uHoAnYka83Jv 9YAZOlg9oJUD1QPoTNTg+PZVD2j1VwSYI1EDFutA9QA6EzXmZbl6wAztqx4wgAV+FkZB1JiXA9UD Zmh/9YABLPCzMAqixrzsqx7Q6mepX+BnYRREjXlZrh7Q6mepXzArB0WNeRI15mdv9YAZGcadh8NY sXbL1QPoTdSYn+XqATOyp3rAgFb4ORg4UWN+9lQPaPVzDGOFn4OBEzXmZ3+LU2YPD+Ruvf0tHi+1 t9VdsQyQqDFPu6sHzMDN1QMGuGT1dlcPoDtRY5525/HqCWt0cEC/hneP/hmUjzv5yLyJGvO1q3rA Gt1cPWDAa1ZuV/UA+hM15mvcx2qPDywjN4/6WO3xAR310paoMW/XVQ9Yg10Du63hwKg/zTFvZzRE jXnbM9p7IO8d4JHF7tF+mntdT2MRRI352znKk2YHs7N6whH5NOEYRI352z/KE0/XDeT7aS81zk9z 58BO5NKWqLEIu/Pr1RNW6OMDPPX4gt35ePWEFfp1px5ZFFFjMa4b1eON7x34ybKdo7qy9vFRHlsy UqLGouwczWOeHs726gnHtX1En+bO6glMiaixKAeyNIpfxA9naQTXf8b0acICiRqLcyBLgz8Jee8o kpY8/2kO/STkx7N1JJ8mbYgai3Qg2wd9y8ivjyZpyfNZG/Kn+QEnHlk8UWPRrsvbBvlNq4N52whv aBjup3mJJz1SQdRYvD3ZPLjTkPdm60hvO9+TrYP7NPdmc5v3njMyokaFA9meSwbzqOPH87YsDfSr 1idif7bnbQP6NC/J9hGdxKUZUaPKcjbn58t/FT+en8/mkR6jvdieAX2ay9UfBlMmalTanc15W9nJ s715WzYP+MkhK1X7aX48l7T6NBmpV1YPYPL2ZE82ZnuWspQzFvJPPJg9Wc6elqfIFv9pPp7ltp8m I/SK71UvWJ07sqN6wsDcmSuqJ8zA5mzOUjZm61z+2/flQJazf8RXz1Zmvp/mctLu0xzpr8M5ekX1 gJVzpMaQ7M9+V2RmxqfJBLmmBkAbogZAG6IGQBuiBkAbogZAG6IGQBuiBkAbogZAG6IGQBuiBkAb ogZAG6IGQBuiBkAbogZAG6IGQBuiBkAbogZAG6IGQBuiBkAbogZAG6IGQBuiBkAbogZAG6IGQBui BkAbogZAG6IGQBuiBkAbogZAG6IGQBuiBkAbogZAG6IGQBuiBkAbogZAG6IGQBuiBkAbogZAG6IG QBuiBkAbogZAG6IGQBuiBkAbogZAG6IGQBuiBkAbogZAG6IGQBuiBkAbogZAG6IGQBuiBkAbogZA G6IGQBuiBpAkr60ewCyIGkCSbKwewCyIGgBtiBoAbYgaAG2IGgBtiBpAkpxZPYBZEDWAJFlfPWBw DlcPWA1RA+BIvlk9YDVEDSBJ1lUPYBZEDSBxTa0JUetiS/UAgHqiBpA4UmtirFE7WD0AaMbdjy2M NWpPVg8YnI3VA2DkPKW/hbFGjZd6XfUAGLmN1QMGZ3/1gNUQNYDENbUmRK2P06oHwKi5ptbCWKP2 WPWAATqlegCMmOO0JsYateeqBwzQpuoBMGKvqR4wQH9SPWA1xho1Xu7U6gEwYm61erlD1QNWY6xR e7p6wAA5UoPVc/qxibFG7ZnqAQMkarB6/vy83IHqAasx1qjxcu5+hNU7vXrAAB2oHrAaY42aI7WX +3PVA2DEPBK8CVHr4+zqATBi51QPGCAvCaWU04+wWv70HMnh6gGrMd6oPVI9YHA25KTqCTBS7n08 km9XD1iN8UaNl/NNG1id11cPGKRRfnVqvFF7tHrAAJ1RPQBG6rzqAYPkSI1inikCq3NW9YBBGuUN eeON2hPVAwbISw5hdVxTOxI3iizUs9UDBsgzEWA11jlSOyK39C/U/uoBA+Rvm7AaP1o9YJAOVA9Y nfFGbZSXMOfMg35gNbZWDxikp6oHrM54o+Z7ai+3uXoAjJJHZB3JKG8TGXPUvCb05V6XddUTYIQu qB4wSKK2YI9VDxgkV9Vg5RypHclI7zAfb9RGe8Z3rt5QPQBG58xsqJ4wSH9SPWB1xhy1/1I9YIBE DVbqR6oHDNT+6gGrM+aoOQH5cl6fASvlpU1H5vTjwo30I58r1wZgpUTtyNwosnAj/cjn6lTvhYIV cn7jyEZ6LmzMURvpRz5nF1UPgJHZWj1gkPZXD1itMUfN16+P5MLqATAqW7KxesIg7a8esFpjjprT j0fia6SwEs5tHNlo71kYd9RG+WKEOTu/egCMinMbRzbayztjjlryx9UDBmhD3lQ9AUbkr1YPGKiv Vw9YrXFH7cnqAYP0Y9UDYDS2eAz4UfzH6gGrNe6oeVDWkSxVD4DRWKoeMFijPWQYd9RG+V7WuXON AE6Ua9BHdnC8N+KNO2pPVw8YpFPz2uoJMBKXVg8YqNEep409an9UPWCgPNYYTsQbvC3+KPZVD1i9 cUfN3Y9HdnH1ABiFn6oeMFijvfdx7FFzo8iReawxnIil6gGD9Wj1gNV7xfeqF6zNyOfPydN5TfUE GLxX5VvVEwbrgjxUPWG1xn2k5vmPR+ZZ/XB8W6sHDNiIj9TGHrV91QMG6meqB8DgXVI9YLD257nq Cas39qh9tXrAQG2vHgCDt616wGB9uXrAWow9ak4/HtmFOaV6Agycr74czTeqB6zF2KM24jO/c7Xe c0XgmLZ5j9pRjfr36tij9lgOVE8YqJ+rHgCDtqN6wIA9WD1gLcZ+S39yj++aHNHBvGbMF3thzv5L Tq2eMFCHs656wlqM/UjNVbWj2eAEJBzVNkk7qv3VA9Zm/FEb9dnfuXJ6BY7Gn46jG/EjspIOURv1 2d+58vxxOJrLqgcM2P7qAWsz/qj9hxyunjBQZ/keDhzRNk/nP4bRvvP6eeOP2rd9AfuonGKBI7mq esCgfa16wNqMP2pOQB6dqMHLnZK3Vk8YNNfUyo32adJzd2rOq54Ag3NZNlRPGLBDrqnVc1P/0S1V D4DBcQbjWEZ/kNAhal/Od6snDNZPVw+AgXlNfrJ6wqD9n9UD1qpD1L6d/1Q9YbB+IpuqJ8CgXJaT qycM2v9ePWCtOkRt9Bc25+hkp1rgh7y5esDAOf04CKJ2dKIGP7BO1I7p6TxZPWGtekRtX/WAAVvK mdUTYDAu9cKZYxr9cVqXqLn/8VjeXT0ABuP66gED9++qB6zd+F89kyQn5dmsrx4xWAfzF/Js9QgY gPM9quE4LsoD1RPWqseR2nc6HDTPzQYPb4UkyTXVAwbuUIffpD2iltxfPWDQ/FGG5BS3TR3HQx1e LNwlav++esCgXZQ3VE+Acr/g8VjHMfrvqCV9ovYH1QMG7r3VA6DYSf4UHNcXqgfMQpeoPesE5DG9 1ZNFmLilnFo9YfBGf5NI0idqXkBzbOvzU9UToNTl1QMG75EOV9Q6Re3e6gEDt716AJTaXj1g8B6t HjAbfaL2hRyunjBoP5nXVk+AMlfnddUTBu+L1QNmo0/UDuS+6gmDtj7vr54AZf5x9YAR2Fc9YDb6 RM1VteN5R06pngAlduT06gkj8HD1gNnoFLW7qwcM3IZcWT0BStxQPWAEHsmB6gmz0SlqLW5HnSsP c2WKtuWC6gkjsFw9YFY6Re3ZfKZ6wsCd7oFZTNCvVA8Yhc9WD5iVTlFr9D/L3HwwJ1VPgIXakTdW TxiBg31+e/aK2nL1gMHb4EvYTMyN1QNGodHFm15Re7TLpc452lk9ABZoW86pnjAKjW6z6xU1x2rH 99M5o3oCLMzO6gEj8W+rB8yOqE3NK/Or1RNgQU7L26snjMKDebx6wux0i9q+6gEjsCNbqifAQtyQ k6snjMJy9YBZ6ha1L1cPGIVd1QNgAU7zuIETdFf1gFnqFrVv9/o7x5w4VmMKPpz11RNG4WCnex/7 RS3ZUz1gFG7xfTWa25Yd1RNG4vd6vEftBf2i9tvVA0ZhKVdXT4C5uqV6wGjcUT1gtl7xveoFs/cV T3o7AU/kzHynegTMyeXO2Zygw9mUZ6tHzFK/I7VWXyOco9M9W4TGdlYPGI1HeyWtZ9Ra3ckzR9dV D4A52eKvbCdsuXrArHWM2gP5WvWEUVjyB5+WTspv+n7aCVuuHjBrHaOW/G71gJH4l1lXPQFm7upc XD1hRO6tHjBrPaN2Z/WAkTjdG4Fp55R8sHrCiCz3ewh8z6g9lKerJ4zEDTmtegLM1AezoXrCiDQ8 AOgZteS26gEjsT7/qnoCzNCbc231hBE53PGLD12j9rHqAaPx5lxePQFm5FX5aPWEUflcvlk9Yfa6 Ru2x7K+eMBrvrR4AM7Izp1dPGJWGJx/7Ri35YvWA0bg4b6meADPxi9UDRqblgyr6Rq3djapzdItb +2ngmry+esKoLOeZ6gnz0Ddqn60eMCJn5TeqJ8AanZdfqZ4wMk1vp+v4QOMX3JOl6gkjckXP8+tM xLp8NWdVjxiVb+W/6fXKmRf0PVJrehF0bn4tp1RPgFW7QdJW6L6eSRM1XnC65zAwWmd4Ns6Kfb56 wLx0jtoznte/ItdmS/UEWJX3Zn31hNH5QvWAeekctXhaxgp5VzBjtC1/u3rC6HwtD1dPmJfeUdvr GZArspTrqyfACm3KHXll9YjRafzMpd5Ri4fmrNAHc2b1BFiRW3Jq9YQRavybsXvU3CyyMuvzieoJ sAI7sqN6wgg1/dr187pH7SFvwV6hi9xHxmiclo9UTxilxsdp/aMWd0Cu2AfyY9UT4ASsz+869bgK T+XfVk+Yp/5R+1T1gNE5Of+yegKcgH+QN1ZPGKV/nW9XT5inzo/Jet5JedLf5lbsfflQ9QQ4ptPy f2dj9YhROiuPVU+Yp/5Hat/JJ6snjNCNubB6AhzTJyRtVe7vnbQpRK35RdE5WZ9PeBYkA3ajx5Wv Uvvfh1OI2qO5qnrCCJ2Vg7mmegQcwYb8cXZVjxipL4haD3fmUPWEUfq1nF09AV7mvTm9esJo7ake MH/TiNqz+TfVE0ZpvdcuMjhb8t7qCSP2meoB8zeNqCX/rHrASG3PjdUT4EXOzudzcvWI0fpMHq+e MH/9b+l/wd5cVj1hpK7qfxaekdiUrzj1uAYX5YHqCfM3lSO1CdzzMzcfcXs/A/EJSVuDR6aQtClF 7S6voVml9dmbDdUjIB/MpdUTRm0if7GfTtSSvdUDRuvU/Gr1BCbvzXlf9YRROyRq/Xy8esCIXZ1f rJ7ApJ3hPfZr9Bt5tnrCYkznRpEk+WrOqZ4wYtfm1uoJTNSm3JezqkeM2uGc1vkdai82pSO1+KW8 Jr+Wt1RPYJLW5Q5JW6N7p5K0qUXtkzlYPWHE1ucT2VI9ggn6iOc8rtmd1QMWZ1pRe9YTMtbk1Hw+ P1I9gon5B57dumbfyh3VExZnWlFLPuJYbU1el9/JuuoRTMhbvdlvBv7FlH7vTS1qz7qutkZbp/R3 Popd6N+2GTg0rd96U4uam0XW7rJ8pHoCk7Ale7O+ekQDn86T1RMWaXpRezLL1RNG79rcUD2B9jbl czm1ekQLE3uc+/SiltxePaCBf+bL2MzVj+RLnvM4E3vyUPWExZrWl6+fd1Ke9DfAGbgsn66eQFPr 8vt5Y/WIJs7Jo9UTFmuKR2rfcV1tJu7wZWzmYl32StqM3DW1pE3zSC05JX/sufMzcCiX5/PVI2hm XfZ6Gv/MLOXe6gmLNsUjteTZfLJ6Qgvrs9fRGjP2EUmbmUeml7SpRi35gLerzcT6fDo/Uz2CRm7y /JAZuq16QIWpRu0Z19Vm5OT8tqM1ZuQjua56QiMHRW1abprSg2Pm6mQnIZmJj+Ta6gmt3JpvV0+o MN2oPZubqie04doaaydpszWxh2P9wHSjlvxq/qR6QhuurbEW/00+JWkz9qFpPRzrB6YctW/nd6on NHJyfjtvrR7BKK3LZ7O9ekQzT0z37QZTjlqyu3pAKyfnrlxTPYLR8VXrefhQnqueUGWaX77+gXu8 U3fG3uNaJSuwKXf4MzhzT+cvTDdq0z5SS3ZVD2jnw15Mwwnb5K+Vc/Hb002aqN2bO6sntHNtPpaT qkcwAhfnoZxTPaKhw9P+i+XUo5a8J4eqJ7SzM/dmU/UIBm5bfi+vqx7R0m15rHpCJVF70jWgObgo 92RL9QgGbEc+l43VI1o6NN37Hp8nasmH8q3qCQ2dk3tyXvUIBur63JH11SOa+uhUv5/2AlFLnnVd bS5OzR5HaxzBL+fD1RPamvxxmqg97+bqAU1tzhfzi24a4UU25Dfzq9UjGvulqR+n+Z7aCzx3bn6W c0WeqR7BIGzJ53J69YjGHsm51RPqidrzTsvXneOfm2/kr+bx6hGU25F/7U/ZXF3qTfROP77gyak+ 0XohzspyzqweQbF3uTlkzvZJWiJqP/CPs796QmOb83De7+raZG3Ib+b26hHtTf4Wkec5/fgD27Jc PaG5R3L5tL8WOlEXZm9OrR7Rnutpf8qR2g/cK2pzdk6+km3VI1iwt+ceSVsAt7r9KVF7Mf9azNuG fCY7qkewQDfkY66kLcDdubd6wlA4/fjDfi9/rXrCBNyed0/5KeKTsSm357LqERNxTh6tnjAUjtR+ 2P9cPWASrsof5tLqEczVK3NNvippC7JL0n7AkdpLfSLvqJ4wER/O+x2vNbUuv+ucx8Lsz1+snjAk jtRe6n05WD1hIt6T+3J+9Qjm4Px8VdIW6JbqAcMiai/1pG97LMwFuS83VI9gpk7KjbkvZ1XPmJCD ua16wrA4/fhy6/J1z6dboDvzTqchm1iXT7i7dcHe442QP8yR2ss9l7+R71aPmJAdeSzX5FXVM1ij k3JNHpO0BftiPlI9YWgcqR3ZHf5wLtgT+Zl8uXoEq7YttzvpuHCHcrZXzbyUI7Uj88anRTs99+T6 6hGs0o1ZlrQCH5C0l3OkdjR7fcemwIO5Kg9Vj2BFzsztWaoeMUnfyLmuRr+cI7WjuSpPVU+YoAvy YD6Vc6pncILOyMfyqKSV+G7eLmlHImpH80z+VvWEidqeB/PBrKuewXFdk0eyMydXz5ioj7kGfWRO Px6Lp4vUeSLvzyerR3BU2/LhXFA9YtI87fEoRO1YTstXs6F6xITdmavybPUIXmZTPuyve8Vuybur JwyV04/H8mTeXz1h0nbkj3O9E5EDsyMPSVqxJ/xmOjpHasfzf+THqydM3NO5Lb+R/1I9g6zP38rV 2Vo9Y/IO5y3ennZ0onY8b8iXqieQb+Xv56Pu9Sq1LbuzuXoESXblA9UThkzUjs/TRYbhiXwot+U7 1TMmaVt2uXF/IJ7Kmf56dyyidnyb8tWcWj2CJMm+XOfEy4KdkX/hQQQDcm1urZ4wbKJ2In4qn/Jt nMHYl9357TxTPWMStmVn/kbWV8/g+76Uiz1u/dhE7cTcmF3VE3iRQ/m1/Irb/edqR270bJeBOZhz Pe3xeETtxKzLf8jrq0fwQw7mptzqiG0u3pL3uYY2QFflo9UThk/UTtS7srt6Ai9zKL+Rf+KIbYZO yv+UGxyhDdLd+cnqCWMgaifqpDzgsUCDdDCfzE15rHpGCzvyft9DGyinHk+QqJ24s/MH7oIcrC/m f8lv5UD1jNH6sVyZy/37PVjfzeX5bPWIcRC1lXhL7q6ewDEcyqdzez5fPWNkTsmOXOMsxMDtzs9X TxgLUVuZ23JV9QSO40v557nL11NPyNn5+9nhod2Ddyh/KV+vHjEWorYyp+SrOb16BMd1MJ/MR71D +xjW5dJcmZ/0/ctReF8+VD1hPERtpS7M/dUTOEFfym/kLvdGvszZ+Tt5h+tno3F/3lQ9YUxEbeVu ynXVEzhhh3NvPpPPOnmTZH3+crblzXlj9RBW4Gu5JN+sHjEmorZyr8ofOgU5Ot/InbkrD1TPKLMt O/Kz2Vg9gxU6nAudRl8ZUVsNpyDH6mv5WO6e2C+JbXlHLnOycaS84XrFRG11PAtyzJ7IXdmbL1TP mLNX5a/mLdkhZyN2MGd7ENxKidrqnJTf8pa1kTuQfflyvph7m31l+4xszcXZmovyZ6unsCbecL0q orZaHnHcxyNZzr1ZHvnfiTflwizlf/R26jY8vnhVRG313p7fqp7ATN2fB0cYt005P0v5K+5pbObO XFE9YZxEbS32eiNwS4/k/jyUB/OVfKd6yjGcnwvyY7kkZ1UPYQ6+kR/1DcvVEbW12JSvugzf2OF8 JQ/m0ezLVwby2K112ZJzsiUX5ULvo27scLZN+OsnayRqa3Neln33ZxKeyv58M4/lP+epPJMn8icL +aduzKa8NmfltGzOa/N618smYlc+UD1hvERtrbZluXoCJR7JM3kmj+TJPJtv5P/L/jX/N27KpmzK 63J2NuXUbMmZjsYm6f5sG/SJ74ETtbXznTVe8EiSb+ZAkqe/f7vJYy87dbkpm/70/3o+W1uSbHIi myTJ0/lRLwNdC1GbhT/IxdUTgBYu9UbAtfkz1QNa+PvVA4AWdknaWonaLNyXq6snAKN3mxtE1s7p x1lxZQ1Yiy/mx6sndCBqs+Or2MDqbc3D1RM6cPpxdt45g5u6gWl6n6TNhqjNzrO5KoerRwAj9E/z oeoJXYjaLP37XFM9ARid2/OPqif04ZrarP1a3lM9ARiRR/KjA3m2aAuiNmvr8rksVY8ARuPi3Fc9 oROnH2ftuVyRb1SPAEZil6TNliO1eTgjf5DTqkcAg/dPXU2bNVGbD8/uB47nw/ml6gn9OP04H/d6 vghwTHdL2jw4UpufO7KjegIwUPtzXp6tHtGRI7X5eWfur54ADNQvSNp8iNr8PJf/wZU14GUOZ2e+ UD2iK6cf52tdHsjW6hHAoLwzn6ye0Jcjtfl6Lr+QQ9UjgAF5n6TNkyO1+bsyt1dPAAZiT95WPaE3 UVuEd+U3c3L1CKDcl/JT+X+rR/Qmaovx1txVPQEo5tHFC+Ca2mJ8OjdXTwBKPZJLJG3+HKktykl5 IBdUjwCKPJ1L8mj1iCkQtcXZlHtyTvUIoMC38kZJWwynHxfnmVySL1WPABbucN4laYviSG2x1mVv Lq0eASzUZfl09YTpELVFW5f/kNdXjwAW5trcWj1hSpx+XLTn8g7PGIHJkLQFE7XF+3IulzWYhNsk bdGcfqzxpnwmG6tHAHO1J+/It6pHTI0jtRr35eIcqB4BzNEteZukLZ6oVXk0O6snAHNzS95dPWGa RK3O3lxbPQGYC0kr45parcuz27U1aObmXF89YbpErdqW3JNTq0cAM+MorZSo1duSLzpagyYkrZhr avXcMgJdSFo5URsCt4xAB3skrZ6oDcOt2e57azBqe/KO6gm4pjYkZ+bfZXP1CGBVnHgcCEdqw/FY rvBMSBilXZI2FI7UhuUt2Zv11SOAFfEk/gFxpDYsn8+F3o4NI3I410nakDhSGx5vx4axOJTL8/nq EbyYI7XheS6X5zPVI4DjOihpw+NIbZg25Is5p3oEcAwHcnEerR7BSzlSG6aDeVPurh4BHNWh/Kyk DZGoDdWzeWt25bvVM4Aj+Fp+Ip+tHsGROP04bFfltuoJwEvcncvzXPUIjsyR2rDd7qmQMDC3SNqQ OVIbPl/IhuG4Lb9QPYFjEbUxOD+f8yJRGIBP5Mp8p3oEx+L04xg8lHOzXD0CJu5AdubnJG3oHKmN xUn5N7msegRM1v785TxZPYLjc6Q2Ft/J5flw9QiYqKfzFkkbB1Ebk1/KVTlcPQIm58Gcm69Xj+DE iNq4fDSXeUM2LNDh7MqFeaZ6BifKNbXx2ZS9uah6BEzC0/nJPFQ9gpVwpDY+z+SSfKJ6BEzA0/lp SRsbURuj5/JzeY+razBXj+RN+XL1CFbK6cfxeld2V0+Atu7MOz0Ma4wcqY3Xx3Nx9lWPgIYO55dz haSNkyO1cVuXG/O+6hHQyhO5Ig9Uj2C1RG38fjm/Wj0B2ljOFW7gHzOnH8fvn+eKHKoeAS3syiWS Nm6O1HrYkjtyTvUIGLlrc2v1BNbKkVoPj+b8/MP81+oZMFpfzMWS1oEjtU7elE957xqs2KF8IB+q HsFsiFovp+UOj9CCFXk6l7vbsQ+nH3t5MpdkV/UIGJFv5MclrRNHah1dmn+ZzdUjYPAO5Ob8ar5d PYNZErWe1uXXcm31CBi0fXmrF3/24/RjT8/l3bksT1fPgMG6K0uS1pEjtc425ffyxuoRMDiH8u58 tHoE8+FIrbNncknurB4BA3N/zpW0vkStt2/niixluXoGDMS38st5Ux6rnsH8OP04DVfm1/Pq6hFQ 7O5c5Tpad6I2FW/I7+b06hFQ5lv5RScdp8Dpx6n4cs7N7dUjoMgTuUTSpkHUpuPZXJ1L3ebPBN2e c/Pl6hEshqhNy+fzl3JLDlfPgIX5TN6Yq/Ns9QwWxTW1KTozt+TS6hEwd4fyc77UMjWO1Kbosfxk rsqB6hkwV3fnXEmbHkdq0+Vt2fR1IH83n6weQQVHatP1aM7Pz2Zf9QyYscO5LedK2lQ5UuP9+afV E2BmfMF64kSN5Pzc4n3ZNPB0rs5d1SOo5fQjyUN5U67yDTZG7u6cL2k4UuMFp+T27KgeAavyjVyb z1ePYAgcqfGCZ3NF3pI91TNghZ7Ou7NF0nieIzVeakt+K1urR8AJOZgP5aY8Vz2D4XCkxks9mjdm Vw5Vz4Djuj3n5kOSxos5UuPITsuNuap6BBzVE7kyX6gewfCIGkfnRCTD5KQjRyVqHMsr87Zck6Xq GfB9T+fW3JyD1TMYKlHj+M7Pv3LExgAczE25yWtkOBZR40SclKtzQ06vnsGEHc5H8gFB43hEjRN1 Sq7P9dlQPYNJWs51ebh6BGMgaqzEq3J1rsvm6hlMyH/N7dktaJwoUWPlduRGb2JjIe7Me/N49QjG RNRYnWvyQacimaND+WhuzaPVMxgbUWO1XGNjfu7Me7wVjdUQNdbilFyT63Nq9QxaWc6u3Fs9grES NdZqQ3Zmuy9oMwMHsjs3u4bGWogas7Elv5K/Vj2CEftGbspHPfqKtRI1ZmdbrvWaUVbhkXwgd1aP oAdRY7bOzPXZmVdXz2A0HsmH8r/mO9Uz6ELUmL3X5J3ZnourZzBwT+bjudPXqpktUWNezsw/ys7q EQzUg7nJ8RnzIGrM05m5Mtf4Lhs/5DP5x3moegRdiRrzti47coPHapHkYO7MTZ4SwjyJGotxWa7M ZdUjKPS1/Eru9OoY5k3UWJxN+an8jfz3Obl6CAv1SD6bz+SL+W71EKZA1Fi0Tbky73A6chIO5dO5 OfdVz2BKRI0ab867nY5s7cF8NJ90upFFEzXqbMo78o5cUD2DGTuYT+df5MvVM5gmUaPaG/L38la3 /TexnI/mLsdn1BE1huCkvCnb81N5ffUQVumpLOfeLOfr1UOYOlFjSM7MjuxwQnJUDubTud37zxgK UWN4zsvP5bKcVT2D4ziUz+VjudvrYhgSUWOozs/fzLu8VXuQDube3OnaGUMkagzbllycN2Upm6uH kORbuS9fyhdyn0cRM1Sixjicn0tzaZaqZ0zW07krn8pnq2fA8YgaY/LabM+l2eYLAAv0pXwqd3uq PmMhaozRtvy1vM2tJHN1IF/I3bk7T1YPgZUQNcbrtFyaS/MWx20zdSgPZDnLrpsxTqLG+G3JOXlD zs9/l43VU0brUP4w+7IvD+RBMWPMRI1OzsxSLsmbfRHghB3MA7k/9+cP8u3qKTALokZHp+WiXJgf zxurhwzWE3kg9+cPPHaYbkSNzk7J+bkgP5E3OXZLkhzMQ3kwv5/78kz1FJgPUWMaNuX8XJAfy4/m 9OopC/d0Hs0jeSj359HqKTBvosbUvCpnZ3POyo/kjLwuZ2Z99aA5eCpP5T/nD7M/+/Of8ifVc2Bx RI2pOzNbclbOzDnZMuKTlN/Kf8pjeSRfz7485hHDTJeowQ+s+9O4nZZTc2bOzsnVg47hiTyT/5iv 57E8kSfzWPUcGAZRg6M7LafknLw2r8lZOSWn5XVl34R7JM/lsTyRZ/NoDuaPvIwTjkzUYGVem5Pz mqzPqXlVTs5rk2zKq7//n8mfy5/9/v/v5qP+tzz1oq84P/9/H843kyRP5rv5Vp7Jd/Nkkm/mO/mT HKr+oWEsRA2ANv5M9QAAmBVRA6ANUQOgDVEDoA1RA6ANUQOgDVEDoA1RA6ANUQOgDVEDoA1RA6AN UQOgDVEDoA1RA6ANUQOgDVEDoA1RA6ANUQOgDVEDoA1RA6ANUQOgDVEDoA1RA6ANUQOgDVEDoA1R A6ANUQOgDVEDoA1RA6ANUQOgDVEDoA1RA6ANUQOgDVEDoA1RA6ANUQOgDVEDoA1RA6ANUQOgDVED oA1RA6ANUQOgDVEDoA1RA6ANUQOgDVEDoA1RA6ANUQOgDVEDoA1RA6ANUQOgDVEDoA1RA6ANUQOg DVEDoA1RA6ANUQOgDVEDoA1RA6ANUQOgDVEDoA1RA6ANUQOgDVEDoA1RA6ANUQOgDVEDoA1RA6AN UQOgDVEDoA1RA6ANUQOgDVEDoA1RA6ANUQOgDVEDoA1RA6ANUQOgDVEDoA1RA6ANUQOgDVEDoA1R A6ANUQOgDVEDoA1RA6ANUQOgDVEDoA1RA6ANUQOgDVEDoA1RA6ANUQOgDVEDoA1RA6ANUQOgDVED oA1RA6CNV1YPgAHbnK3Zmq3ZmM05o3rMSzycA9mf/VnOvhyoHgND8YrvVS+AIdqe7VkaXMiO5uEs Z3f2Vc+AeqIGP2xzdmV7NlTPWIXHc3N2O2pj2kQNfmApu7KtesSaHMye7Mr+6hlQRdTgeZtzcy6v HjETB3NzbnbExjSJGiTJrlw3ylOOR/N4dma5egQsnqjB5uzJedUj5uDXc131BFg0UWPqlrKn1THa iz2cJachmRZfvmbaduaetklLzsv+bK0eAYskakzZznysesKcbciyrDElosZ09U9aImtMjKgxVdNI WiJrTIobRZimrXmoesJCuWWEiRA1pmhj9je+PeTI9mZ79QSYP6cfmaLdk0tacrlvrTEFjtSYnulc TfthB7PVUyHpTtSYmimeenzBvVmqngDz5fQjU7NrsklLtoka3TlSY1o254+qJ5RyrEZzjtSYll3V A4o5VqM5R2pMyZSvp73AsRqtOVJjSnZOPmnJtmyungDzI2pMyc7qAYNwXfUAmB+nH5mOqd8k8oLH HavRlyM1pmN79YCBOEPU6EvUmI6l6gGDsb16AMyLqDEdS9UDBmNr9QCYF1FjKja78/H7tlYPgHkR NaZic/WAATmvegDMi6gxFUvVAwZla/UAmA9RgynaWD0A5kPUmIrN1QOA+RM1pmJz9YBBWaoeAPMh agC0IWoAtCFqALQhagC0IWoAtCFqALQhagC0IWoAtCFqALQhagC0IWoAtCFqALQhagC0IWoAtCFq ALQhagC0IWoAtCFqALQhagC0IWoAtCFqALQhagC0IWoAtCFqALQhagC0IWoAtCFqALQhagC0IWoA tCFqALQhagC0IWoAtCFqALQhagC0IWoAtCFqALQhagC0IWoAtCFqALQhagC0IWoAtCFqALQhagC0 IWoAtCFqALQhagC0IWoAtCFqALQhagC0IWoAtCFqALQhagC0IWoAtCFqALQhagC0IWoAtCFqALQh agC0IWoAtCFqALQhagC0IWoAtCFqALQhagC0IWoAtCFqALQhagC0IWoAtCFqALQhagC0IWoAtCFq ALQhagC0IWoAtCFqALQhagC0IWoAtCFqALQhagC0IWoAtCFqALQhagC0IWoAtCFqALQhagC0IWoA tCFqALQhagC0IWoAtCFqALQhagC0IWoAtCFqALQhagC0IWoAtCFqALQhagC0IWoAtCFqALQhagC0 IWoAtCFqALQhagC0IWoAtCFqALQhagC0IWoAtCFqALQhagC0IWoAtCFqALQhagC0IWoAtCFqALQh agC0IWoAtCFqALQhagC0IWoAtCFqALQhagC0IWoAtCFqALQhagC0IWoAtCFqALQhagC0IWoAtCFq ALQhagC0IWoAtCFqALQhagC0IWoAtCFqALQhagC0IWoAtCFqALQhagC0IWoAtCFqALQhagC0IWoA tCFqALQhagC0IWoAtCFqALQhagC0IWoAtCFqALQhagC0IWoAtCFqALQhagC0IWoAtCFqALQhagC0 IWoAtCFqALQhagC0IWoAtCFqALQhagC0IWowRfurB8B8iBpTsVw9YFD2Vw+A+RA1ANoQNaZif/WA QdlXPQDmQ9SYiv3VAwbkYA5UT4D5EDWmYrl6wIDsqx4A8yJqTMfD1QMGY7l6AMyLqDEdy9UDBmO5 egDMi6gxHcvVAwbioE+CvkSN6diTg9UTBmG5egDMj6gxJXuqBwzC7uoBMD+v+F71AlicrXmoekK5 x7O5egLMjyM1pmRf7q2eUG539QCYJ0dqTMv2fKp6QqmD2eyL13TmSI1p2TPxY7WbJY3eHKkxNUu5 p3pCGcdptOdIjalZzt7qCWWukzS6c6TG9GzM/myoHlHg3ixVT4B5c6TG9BzIzuoJBQ5me/UEmD9R Y4r25NerJyzcdqcemQJRY5qum9hdkNd7OBbT4JoaU7UxyzmvesSCfHySJ1yZJEdqTNWBLE3kDWuS xoSIGtM1jaxJGpMiakzZgSw1/9ba9ZLGtLimBrtyY/WEuTiY7W4PYWpEDZKl7M4Z1SNm7F438TNF Tj9Cspyt+UD1iBk6mJ/PkqQxRY7U4AWbsyvvqh6xZgdzs2fxM12iBi827rA9nt2CxrSJGrzUxmzP zmyrnrEiB7Mne7KnegZUEzU4so1ZylK2DjxuB7Mvy1l2lyM8T9TgeDZn8/f/cyiWX/SfwPeJGgBt uKUfgDZEDYA2RA2ANkQNgDZEDYA2RA2ANkQNgDZEDYA2RA2ANkQNgDZEDYA2RA2ANkQNgDZEDYA2 RA2ANkQNgDZEDYA2RA2ANkQNgDZEDYA2RA2ANkQNgDZEDYA2RA2ANkQNgDZEDYA2RA2ANkQNgDZE DYA2RA2ANkQNgDZEDYA2RA2ANkQNgDZEDYA2RA2ANkQNgDZEDYA2RA2ANkQNgDb+f7I3PiX2ldLG AAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIxLTEwLTI1VDE1OjEwOjM0KzAwOjAw69ja8AAAACV0RVh0 ZGF0ZTptb2RpZnkAMjAyMS0xMC0yNVQxNToxMDozNCswMDowMJqFYkwAAAAASUVORK5CYII="})});try{We.displayName="WhiteIcon",We.__docgenInfo={description:"",displayName:"WhiteIcon",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/assets/icons/yuri/negative/WhiteIcon.tsx#WhiteIcon"]={docgenInfo:We.__docgenInfo,name:"WhiteIcon",path:"src/assets/icons/yuri/negative/WhiteIcon.tsx#WhiteIcon"})}catch{}const je=()=>A("svg",{xmlns:"http://www.w3.org/2000/svg",width:"874",height:"1182",x:"0",y:"0",version:"1.1",viewBox:"0 0 874 1182",xmlSpace:"preserve",children:A("image",{width:"874",height:"1182",x:"0",y:"0",href:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA2oAAASeCAMAAACAUS24AAAABGdBTUEAALGPC/xhBQAAACBjSFJN AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAACplBMVEX////p6em/v7+/v79/ f39/f39/f39/f3+/v7+/v7+Pj49/f39/f3+/v7/U1NSqqqpVVVU4ODgAAAAAAAAcHBxVVVWqqqri 4uKqqqpxcXFVVVUAAAAAAAAqKiqqqqrGxsbU1NRxcXEAAADi4uKNjY0/Pz8VFRXGxsaNjY04ODgA AACNjY2UlJQcHBxxcXE4ODjU1NRxcXEAAADGxsZVVVWUlJTp6ekqKiqqqqocHBw4ODg4ODji4uIV FRVVVVXp6ekcHBzGxsYPDw8PDw+UlJQAAABqamrv7+84ODh/f38/Pz8cHBxVVVU/Pz9VVVWqqqq/ v7/Pz89/f38cHBxVVVU/Pz8/Pz8VFRXv7++NjY1VVVWqqqp/f39vb28/Pz84ODhqamp/f38PDw9f X19xcXGNjY2/v79/f39fX18qKioqKirf39+qqqqqqqp/f38qKioAAAA/Pz8AAACqqqqNjY1VVVWq qqr/mQD/mQD/mQD/mQD/mQD/mQD/mQD/mQD/mQD/mQD/mQD/mQD/mQD/mQD/mQBVVVW/v7+/v7+q qqqvr69/f39qamo/Pz8PDw8/Pz+/v78AAABqamqUlJS/v7/U1NSqqqqqqqqfn5+fn59VVVW/v78V FRVVVVVvb29VVVU/Pz8AAADPz8+Pj48AAACUlJRVVVUVFRVfX19qamoPDw+NjY1qamofHx9/f38f Hx+UlJQqKiofHx9VVVW/v78VFRUqKiqUlJTPz88/Pz8/Pz8VFRXf39/f398cHByfn58vLy8qKiof Hx9/f38PDw8AAAAvLy9qamovLy9/f3/Pz89vb28AAABVVVVvb2/f399fX19xcXFPT09vb29qamrP z8+vr6/v7+/f398fHx9fX19vb28AAADPz8+vr68AAAD/mQD///87MmReAAAA33RSTlMACic/Wl9z fysgU296LxU/hrji6b+NRQc4caLf979NFRpq8A5VqskjTrH5XD/NeJQfY/Qqn08FxDrUqpsVz38P uBzT30XvegSiZLTGaq+UKh8XT9ubj6TEC02PMWd3mqN/Ved/f0Yqa4OquhBKRnTJ1J/zI2OqVUCA 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 qcERqdmQGhyRmg2pwRGp2ZAaHJGaDanBEanZkBockZoNqcERqdmQGhyRmg2pwRGp2ZAaHJGaDanB EanZkBockZoNqcERqdmQGhyRmg2pwRGp2ZAaHJGaDanBEanZkBockZoNqcERqdmQGhyRmg2pwRGp 2ZAaHJGaDanBEanZkBockZoNqcERqdmQGhyRmg2pwRGp2ZAaHJGaDanBEanZkBockZoNqcERqdmQ GhyRmg2pwRGp2ZAaHJGaDanBEanZkBockZoNqcERqdmQGhyRmg2pwRGp2ZAaHJGaDanBEanZkBoc kZoNqcERqdmQGhyRmg2pwRGp2ZAaHJGaDanBEanZkBockZoNqcERqdmQGhyRmg2pwRGp2ZAaHJGa DanBEanZkBockZoNqcERqdmQGhyRmg2pwRGp2ZAaHJGaDanBEanZkBockZoNqcERqdmQGhyRmg2p wRGp2ZAaHJGaDanBEanZkBockZoNqcERqdmQGhyRmg2pwRGp2ZAaHJGaDanBEanZkBockZoNqcER qdmQGhyRmg2pwRGp2ZAaHJGaDanBEanZkBockZoNqcERqdmQGhyRmg2pwRGp2ZAaHJGaDanBEanZ kBockZoNqcERqdmQGhyRmg2pwRGp2ZAaHJGaDanBEanZkBockZoNqcHRi+olkvhSITU46lYvkcSX SjSpzVdPAnWQmk00qR1WTwJ1kJpNm3puww6rJ4E6HlcvkWGJphbNn6rD6kmgjmheAJGazWH1JFAH qdmQGhwdVi+RYaRm06GeBOogNZtoUivUk0AdreoVMmyeehKN+ZZ6biPUk0Ad6gUyols9icZEs7Gt +LZ6FJjWDvUCGUFqRp9XjwLT6lEvkBGkZnRFPQpM61b1AhmxSD2KxsST2g3qUWBa8ayUY+pRNOYl 9dxG/G31KDCteK5VJ5paj3puI+aoR4FpRbMFktSsXlaPAtNapV4gI/arR9GYTvXcRnxOPQpMK5rN IkWPehQNUs9txG+pJ4FpLVMvkBGkZnREPQlM5yb1+hjVpZ5Fg6J5XfCKehKYzkL1+hilHkWjoklt q3oSmM4a9foYsVM9ikYtUE9u2C3qSWA68XysluxCiea7tcm+LqiGR9TLY8Rvq0fRqN3qyY14QT0K TCOaNxrpvqmP54XBIfUoMA316hj1O+pRNGqRenIjXlSPAlP7tnp1jEr2U6F4NmzPU48CU/td9eoY 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 KzAwOjAwXyJcwgAAAABJRU5ErkJggg=="})});try{je.displayName="OrangeIcon",je.__docgenInfo={description:"",displayName:"OrangeIcon",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/assets/icons/yuri/positive/OrangeIcon.tsx#OrangeIcon"]={docgenInfo:je.__docgenInfo,name:"OrangeIcon",path:"src/assets/icons/yuri/positive/OrangeIcon.tsx#OrangeIcon"})}catch{}const mA=oA(()=>({root:{flexGrow:1},menuButton:{marginRight:16},title:{flexGrow:1},logoYuri:{marginRight:16,marginLeft:16,width:64,height:64},toolbarButton:{margin:"0px 0px 0px 24px !important",fontSize:20},externalAppBar:{alignItems:"center"},toolBar:{}})),jr=i=>{var s=i,{path:e,icon:o,text:a,component:n}=s,l=v(s,["path","icon","text","component"]);const c=p(B.Fragment,{children:[A(Xt,{children:o}),A(Ot,{primary:a})]});return n?A(Ye,u(r({button:!0,component:n},l),{children:c}),e||a):A(Ye,u(r({button:!0,href:e,component:"a"},l),{children:c}),e||a)},QA=({buttons:e})=>A(B.Fragment,{children:e.map(o=>A(jr,r({},o),o.path||o.text))}),Fe=({items:e,logo:o,open:a,handleClose:n})=>{const{leftItems:l,rightItems:i,drawerItems:s}=e,c=O(),d=xe(c.breakpoints.down("md")),f=S.exports.useMemo(()=>d?{up:[...l,...i],down:s}:{up:s,down:[]},[d,l,i,s]);return p(Lt,{anchor:"left",open:a,onClose:n,children:[p(NA,{children:[A(Ye,{button:!0,component:"a",href:"/",sx:{display:"flex",justifyContent:"center"},children:A(Et,{sx:{height:48,padding:1.5,width:48,bgcolor:PA[100]},children:o})}),A(QA,{buttons:f.up})]}),A(Jt,{}),A(NA,{children:A(QA,{buttons:f.down})})]})};try{Fe.displayName="YuDrawer",Fe.__docgenInfo={description:"",displayName:"YuDrawer",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"{ leftItems: NavbarItem[]; rightItems: NavbarItem[]; drawerItems: NavbarItem[]; }"}},logo:{defaultValue:null,description:"",name:"logo",required:!0,type:{name:"Element"}},open:{defaultValue:null,description:"",name:"open",required:!0,type:{name:"boolean"}},handleClose:{defaultValue:null,description:"",name:"handleClose",required:!0,type:{name:"() => void"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/NavBar/YuDrawer.tsx#YuDrawer"]={docgenInfo:Fe.__docgenInfo,name:"YuDrawer",path:"src/components/NavBar/YuDrawer.tsx#YuDrawer"})}catch{}const ee=({children:e})=>{const o=Vt();return A(Kt,{appear:!1,direction:"down",in:!o,children:e})};try{ee.displayName="HideOnScroll",ee.__docgenInfo={description:`Hides children node when scrolling down, appears again when scrolling up

Children node always starts as visible when first mounted`,displayName:"HideOnScroll",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/HideOnScroll.tsx#HideOnScroll"]={docgenInfo:ee.__docgenInfo,name:"HideOnScroll",path:"src/components/HideOnScroll.tsx#HideOnScroll"})}catch{}const Te=({toggleLeftDrawer:e,drawer:o,logo:a,backgroundColor:n,centerLogo:l})=>{const i=mA();return A(TA,{mdUp:!0,children:A(ee,{children:A(Je,{className:l?i.externalAppBar:void 0,sx:{backgroundColor:n},children:p(_e,{className:i.toolBar,children:[A(J,{variant:"h2",className:i.title,children:o&&A(P,{edge:"start",className:i.menuButton,color:"inherit","aria-label":"menu",onClick:e,size:"large",children:A(LA,{})})}),A(P,{className:i.logoYuri,color:"inherit",href:"/",size:"large",children:a})]})})})})};try{Te.displayName="YuMobileNavBar",Te.__docgenInfo={description:"",displayName:"YuMobileNavBar",props:{toggleLeftDrawer:{defaultValue:null,description:"",name:"toggleLeftDrawer",required:!0,type:{name:"() => void"}},drawer:{defaultValue:{value:"true"},description:"Whether to have a Drawer or not",name:"drawer",required:!0,type:{name:"boolean"}},logo:{defaultValue:null,description:"",name:"logo",required:!0,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},backgroundColor:{defaultValue:null,description:"",name:"backgroundColor",required:!0,type:{name:"string"}},centerLogo:{defaultValue:null,description:"",name:"centerLogo",required:!0,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/NavBar/YuMobileNavBar.tsx#YuMobileNavBar"]={docgenInfo:Te.__docgenInfo,name:"YuMobileNavBar",path:"src/components/NavBar/YuMobileNavBar.tsx#YuMobileNavBar"})}catch{}const xA=({button:e})=>{const o=mA();let a=null;const n={onClick:e.onClick,to:e.to,component:e.component,path:e.path};return e.iconButton?a=A(P,u(r({className:o.toolbarButton,size:"medium",color:"inherit"},n),{children:e.icon})):a=A(X,u(r({className:o.toolbarButton,size:"large",color:"inherit",href:e.path,startIcon:e.icon,onClick:e.onClick},e),{children:e.text})),e.tooltip?A(Xe,{title:e.tooltip,children:a}):a},Le=({items:e,children:o,backgroundColor:a="#434242",loggedIn:n=!1,homeURL:l="https://jornadayu.com",drawer:i=!0,logo:s="yuri",positiveLogo:c,centerLogo:d=!1,centerMobileLogo:f=!1})=>{var T;const g=mA(),[x,h]=S.exports.useState(!1),m=()=>{h(Q=>!Q)},{leftItems:y,rightItems:N}=e;let q=A(he,{});s==="yuri"?q=A(We,{}):s==="yu"?q=A(he,{}):q=s;let D=A(Ne,{});const W=c||s;return W==="yuri"?D=A(je,{}):W==="yu"?D=A(Ne,{}):D=W,n?p(B.Fragment,{children:[i&&A(Fe,{logo:D,items:e,open:x,handleClose:m}),A(Te,{centerLogo:f,backgroundColor:a,logo:q,drawer:i&&!!(e.leftItems.length||e.rightItems.length||e.drawerItems.length),toggleLeftDrawer:m}),A(TA,{mdDown:!0,children:p(Je,{className:d?g.externalAppBar:void 0,sx:{backgroundColor:a},children:[p(_e,{className:g.toolBar,children:[p(J,{variant:"h2",className:g.title,children:[i&&!!((T=e.drawerItems)==null?void 0:T.length)&&A(P,{edge:"start",className:g.menuButton,color:"inherit","aria-label":"menu",onClick:m,size:"large",children:A(LA,{})}),A(P,{className:g.logoYuri,color:"inherit",href:"/",size:"large",children:q}),y.map(Q=>A(xA,{button:Q},Q.path||Q.text))]}),o,N.map(Q=>A(xA,{button:Q},Q.path||Q.text))]}),A("div",{className:"gradient-line"})]})})]}):p(Je,{className:g.externalAppBar,sx:{backgroundColor:a},children:[A(_e,{className:`${g.toolBar}`,children:A(J,{variant:"h2",className:g.title,children:A(P,{className:g.logoYuri,color:"inherit",href:l,size:"large",children:q})})}),A("div",{className:"gradient-line"})]})};try{Le.displayName="BaseAppBar",Le.__docgenInfo={description:"",displayName:"BaseAppBar",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"{ leftItems: NavbarItem[]; rightItems: NavbarItem[]; drawerItems: NavbarItem[]; }"}},backgroundColor:{defaultValue:{value:"#434242"},description:"Background color of the NavBar",name:"backgroundColor",required:!1,type:{name:"string"}},loggedIn:{defaultValue:{value:"false"},description:"If the User is logged in or not (shows no items if logged out)",name:"loggedIn",required:!1,type:{name:"boolean"}},searchBar:{defaultValue:{value:"false"},description:"If a People Search bar should be on the NavBar or not",name:"searchBar",required:!1,type:{name:"boolean"}},homeURL:{defaultValue:{value:"https://jornadayu.com"},description:"Home URL of Yu Logo when not authenticated",name:"homeURL",required:!1,type:{name:"string"}},drawer:{defaultValue:{value:"true"},description:"Whether to have a Drawer or not",name:"drawer",required:!1,type:{name:"boolean"}},logo:{defaultValue:{value:"yuri"},description:"",name:"logo",required:!1,type:{name:'ReactElement<any, string | JSXElementConstructor<any>> | "yuri" | "yu"'}},positiveLogo:{defaultValue:{value:"'yuri'"},description:"",name:"positiveLogo",required:!1,type:{name:'ReactElement<any, string | JSXElementConstructor<any>> | "yuri" | "yu"'}},centerLogo:{defaultValue:{value:"false"},description:"",name:"centerLogo",required:!1,type:{name:"boolean"}},centerMobileLogo:{defaultValue:{value:"false"},description:"",name:"centerMobileLogo",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/NavBar/BaseAppBar.tsx#BaseAppBar"]={docgenInfo:Le.__docgenInfo,name:"BaseAppBar",path:"src/components/NavBar/BaseAppBar.tsx#BaseAppBar"})}catch{}const Ae=e=>A(Le,r({},e));try{Ae.displayName="YuAppBar",Ae.__docgenInfo={description:"",displayName:"YuAppBar",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"{ leftItems: NavbarItem[]; rightItems: NavbarItem[]; drawerItems: NavbarItem[]; }"}},backgroundColor:{defaultValue:{value:"'#434242'"},description:"Background color of the NavBar",name:"backgroundColor",required:!1,type:{name:"string"}},loggedIn:{defaultValue:{value:"false"},description:"If the User is logged in or not (shows no items if logged out)",name:"loggedIn",required:!1,type:{name:"boolean"}},searchBar:{defaultValue:{value:"false"},description:"If a People Search bar should be on the NavBar or not",name:"searchBar",required:!1,type:{name:"boolean"}},homeURL:{defaultValue:{value:"'https://jornadayu.com'"},description:"Home URL of Yu Logo when not authenticated",name:"homeURL",required:!1,type:{name:"string"}},drawer:{defaultValue:{value:"true"},description:"Whether to have a Drawer or not",name:"drawer",required:!1,type:{name:"boolean"}},logo:{defaultValue:{value:"'yuri'"},description:"",name:"logo",required:!1,type:{name:'ReactElement<any, string | JSXElementConstructor<any>> | "yuri" | "yu"'}},positiveLogo:{defaultValue:{value:"'yuri'"},description:"",name:"positiveLogo",required:!1,type:{name:'ReactElement<any, string | JSXElementConstructor<any>> | "yuri" | "yu"'}},centerLogo:{defaultValue:{value:"false"},description:"",name:"centerLogo",required:!1,type:{name:"boolean"}},centerMobileLogo:{defaultValue:{value:"false"},description:"",name:"centerMobileLogo",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/NavBar/YuAppBar.tsx#YuAppBar"]={docgenInfo:Ae.__docgenInfo,name:"YuAppBar",path:"src/components/NavBar/YuAppBar.tsx#YuAppBar"})}catch{}const ve=({active:e,bottom:o=!0,style:a,topY:n=35,mobileTopY:l=83,mobileBottomY:i=40})=>{const s=O();return A(k,{sx:{paddingTop:0,width:"120%",left:0,position:"fixed",top:n,[s.breakpoints.down("sm")]:{top:o?"initial":l,bottom:o?i:0}},container:!0,spacing:1,style:a,children:A(k,{item:!0,xs:12,style:{paddingTop:0,marginBottom:16},children:A(It,{in:e,children:A(Gt,{style:{height:10}})})})})};try{ve.displayName="LoadingLine",ve.__docgenInfo={description:`Full-width Loading bar below the Navbar, or above bottom bar on mobile if \`bottom = true\`

\`\`\`tsx
const MyComponent: React.FC = () => {
  const { data, isLoading } = useQuery<...>(...)

  return (
    <LoadingLine active={isLoading} />
  )
}
\`\`\``,displayName:"LoadingLine",props:{active:{defaultValue:{value:"false"},description:"",name:"active",required:!1,type:{name:"boolean"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},bottom:{defaultValue:{value:"true"},description:"Show loading line on bottom on mobile, if `true`\nUseful for pages with a bottom navigation bar",name:"bottom",required:!1,type:{name:"boolean"}},topY:{defaultValue:{value:"35"},description:"",name:"topY",required:!1,type:{name:"number"}},mobileTopY:{defaultValue:{value:"83"},description:"",name:"mobileTopY",required:!1,type:{name:"number"}},mobileBottomY:{defaultValue:{value:"40"},description:"",name:"mobileBottomY",required:!1,type:{name:"number"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/loaders/LoadingLine.tsx#LoadingLine"]={docgenInfo:ve.__docgenInfo,name:"LoadingLine",path:"src/components/loaders/LoadingLine.tsx#LoadingLine"})}catch{}var Fr={title:"Loaders/LoadingLine",component:ve,parameters:{storySource:{source:`import React from 'react'

import { ComponentMeta, ComponentStory, Story } from '@storybook/react'

import YuAppBar from '../../components/NavBar/YuAppBar'
import LoadingLine, { Props } from '../../components/loaders/LoadingLine'

export default {
  title: 'Loaders/LoadingLine',
  component: LoadingLine,
  parameters: {
    badges: ['Added: 2.0.0']
  }
} as ComponentMeta<typeof LoadingLine>

const Template: ComponentStory<typeof LoadingLine> = (args) => {
  return (
    <>
      <YuAppBar
        items={{
          drawerItems: [],
          leftItems: [],
          rightItems: []
        }}
      />

      <LoadingLine active {...args} />
    </>
  )
}

export const Top: Story<Props> = Template.bind({})
Top.args = {
  topY: 86,
  bottom: false
}

export const BottomOnMobile: Story<Props> = Template.bind({})
BottomOnMobile.args = {
  topY: 86,
  bottom: true
}
`,locationsMap:{top:{startLoc:{col:53,line:16},endLoc:{col:1,line:30},startBody:{col:53,line:16},endBody:{col:1,line:30}},"bottom-on-mobile":{startLoc:{col:53,line:16},endLoc:{col:1,line:30},startBody:{col:53,line:16},endBody:{col:1,line:30}}}},badges:["Added: 2.0.0"]}};const Uo=e=>p(ne,{children:[A(Ae,{items:{drawerItems:[],leftItems:[],rightItems:[]}}),A(ve,r({active:!0},e))]}),zo=Uo.bind({});zo.args={topY:86,bottom:!1};const Zo=Uo.bind({});Zo.args={topY:86,bottom:!0};const Tr=["Top","BottomOnMobile"];var Lr=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Fr,Top:zo,BottomOnMobile:Zo,__namedExportsOrder:Tr}),Er={parameters:{storySource:{source:`import React from 'react'

import { ComponentMeta, ComponentStory, Story } from '@storybook/react'

import { Group as GroupIcon, Shop as ShopIcon } from '@mui/icons-material'
import { Link } from '@mui/material'

import { Props as YuAppBarProps } from '../../components/NavBar/BaseAppBar'
import YuAppBar from '../../components/NavBar/YuAppBar'

export default {
  title: 'NavBar/YuAppBar',
  component: YuAppBar
} as ComponentMeta<typeof YuAppBar>

const Template: ComponentStory<typeof YuAppBar> = (args) => {
  return <YuAppBar logo='yu' homeURL='/' {...args} />
}

const navItems = {
  drawerItems: [
    { text: 'Marcas', path: '/brands', icon: <GroupIcon /> },
    { text: 'Usu\xE1rios', component: Link, to: '/users', icon: <GroupIcon /> },
    {
      text: 'Some Things',
      path: '/some_things',
      icon: <GroupIcon />
    },
    {
      text: 'Stuff',
      path: '/stuff',
      icon: <GroupIcon />
    },
    {
      text: 'Other Stuff',
      path: '/other_stuff',
      icon: <GroupIcon />
    }
  ],
  leftItems: [
    { text: 'Vagas', path: '/jobs', icon: <GroupIcon />, iconButton: true },
    {
      text: 'Projetos',
      path: '/projects',
      icon: <GroupIcon />,
      iconButton: true,
      tooltip: 'Projetos'
    },
    {
      text: 'Search',
      path: '/search',
      icon: <GroupIcon />
    }
  ],
  rightItems: []
}

export const LoggedIn: Story<YuAppBarProps> = Template.bind({})
LoggedIn.args = {
  loggedIn: true,
  items: navItems
}

export const LoggedOut: Story<YuAppBarProps> = Template.bind({})
LoggedOut.args = {
  loggedIn: false,
  items: navItems
}

export const YuriLogo: Story<YuAppBarProps> = Template.bind({})
YuriLogo.args = {
  loggedIn: true,
  items: navItems,
  logo: 'yuri'
}

export const CustomLogo: Story<YuAppBarProps> = Template.bind({})
CustomLogo.args = {
  loggedIn: true,
  items: navItems,
  logo: <ShopIcon />
}
`,locationsMap:{"logged-in":{startLoc:{col:50,line:16},endLoc:{col:1,line:18},startBody:{col:50,line:16},endBody:{col:1,line:18}},"logged-out":{startLoc:{col:50,line:16},endLoc:{col:1,line:18},startBody:{col:50,line:16},endBody:{col:1,line:18}},"yuri-logo":{startLoc:{col:50,line:16},endLoc:{col:1,line:18},startBody:{col:50,line:16},endBody:{col:1,line:18}},"custom-logo":{startLoc:{col:50,line:16},endLoc:{col:1,line:18},startBody:{col:50,line:16},endBody:{col:1,line:18}}}}},title:"NavBar/YuAppBar",component:Ae};const we=e=>A(Ae,r({logo:"yu",homeURL:"/"},e)),Ue={drawerItems:[{text:"Marcas",path:"/brands",icon:A(L,{})},{text:"Usu\xE1rios",component:Ut,to:"/users",icon:A(L,{})},{text:"Some Things",path:"/some_things",icon:A(L,{})},{text:"Stuff",path:"/stuff",icon:A(L,{})},{text:"Other Stuff",path:"/other_stuff",icon:A(L,{})}],leftItems:[{text:"Vagas",path:"/jobs",icon:A(L,{}),iconButton:!0},{text:"Projetos",path:"/projects",icon:A(L,{}),iconButton:!0,tooltip:"Projetos"},{text:"Search",path:"/search",icon:A(L,{})}],rightItems:[]},Ho=we.bind({});Ho.args={loggedIn:!0,items:Ue};const Mo=we.bind({});Mo.args={loggedIn:!1,items:Ue};const Yo=we.bind({});Yo.args={loggedIn:!0,items:Ue,logo:"yuri"};const _o=we.bind({});_o.args={loggedIn:!0,items:Ue,logo:A(wt,{})};const Jr=["LoggedIn","LoggedOut","YuriLogo","CustomLogo"];var Xr=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Er,LoggedIn:Ho,LoggedOut:Mo,YuriLogo:Yo,CustomLogo:_o,__namedExportsOrder:Jr});const Or=oA(()=>({root:{position:"relative","& $img":{width:"280px",height:"280px",objectFit:"cover",objectPosition:"center",borderRadius:"5px"},"&:hover":{cursor:"pointer","& $addIcon":{opacity:"0.7"}}},addIcon:{transition:"500ms",position:"absolute",right:0,top:0,opacity:"0.3",color:"white"},backdrop:{display:"flex",alignItems:"center",justifyContent:"center","& $div":{position:"absolute",background:"rgba(255,255,255,0.3)",width:"100%",height:"100%"}},rejectFile:{position:"absolute",display:"flex",flexDirection:"column",alignItems:"center"},children:{position:"absolute",padding:"5px",zIndex:2,bottom:0}})),qe=c=>{var d=c,{avatarSrc:e,children:o,onAttach:a,fileKey:n="avatar",tooltip:l="Clique ou arraste para adicionar",imageProps:i}=d,s=v(d,["avatarSrc","children","onAttach","fileKey","tooltip","imageProps"]);const f=Or(),g=S.exports.useCallback(q=>{const D=new FormData;q.length&&(D.append(n,q[0]),a&&a(D))},[]),{getRootProps:x,getInputProps:h,isDragActive:m,isDragReject:y}=zt({onDrop:g,accept:"image/*"}),N=()=>A("img",r({src:e},i));return p("div",{style:{position:"relative"},children:[A("div",{className:f.children,children:o}),A(Xe,{title:l,children:p("div",u(r(r({className:f.root},x()),s),{children:[A("input",r({},h())),m?y?p("div",{className:f.backdrop,children:[A("div",{}),p(J,{color:"secondary",className:f.rejectFile,children:["Somente imagens ",A(Zt,{})]}),A(N,{})]}):p("div",{className:f.backdrop,children:[A("div",{}),A(P,{color:"primary",style:{position:"absolute"},size:"large",children:A(vA,{})}),A(N,{})]}):p(B.Fragment,{children:[A(P,{className:f.addIcon,size:"large",children:A(vA,{})}),A(N,{})]})]}))})]})};try{qe.displayName="PersonAvatar",qe.__docgenInfo={description:"",displayName:"PersonAvatar",props:{avatarSrc:{defaultValue:null,description:"",name:"avatarSrc",required:!0,type:{name:"string | undefined"}},tooltip:{defaultValue:{value:"Clique ou arraste para adicionar"},description:"",name:"tooltip",required:!1,type:{name:"string"}},fileKey:{defaultValue:{value:"avatar"},description:"",name:"fileKey",required:!1,type:{name:"string"}},onAttach:{defaultValue:null,description:"",name:"onAttach",required:!1,type:{name:"((data: FormData) => void)"}},imageProps:{defaultValue:null,description:"",name:"imageProps",required:!1,type:{name:"DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/person/PersonAvatar.tsx#PersonAvatar"]={docgenInfo:qe.__docgenInfo,name:"PersonAvatar",path:"src/components/person/PersonAvatar.tsx#PersonAvatar"})}catch{}var Vr={title:"person/PersonAvatar",component:qe,parameters:{storySource:{source:`import React from 'react'

import { ComponentMeta, ComponentStory, Story } from '@storybook/react'

import PersonAvatar, { Props } from '../../components/person/PersonAvatar'

export default {
  title: 'person/PersonAvatar',
  component: PersonAvatar,
  parameters: {
    badges: ['v2.1.0']
  }
} as ComponentMeta<typeof PersonAvatar>

const Template: ComponentStory<typeof PersonAvatar> = (args) => {
  return (
    <div style={{ width: 280 }}>
      <PersonAvatar {...args} />
    </div>
  )
}

const baseProps: Partial<Props> = {
  avatarSrc: 'https://via.placeholder.com/150',
  fileKey: 'avatar',
  onAttach(data) {
    console.log('attached image' + JSON.stringify(data.get('avatar')))
  }
}

export const Base: Story<Props> = Template.bind({})
Base.args = {
  ...baseProps
}

export const OnAttach: Story<Props> = Template.bind({})
OnAttach.args = {
  ...baseProps,
  fileKey: 'avatar',
  onAttach(data) {
    alert('attached image' + JSON.stringify(data.get('avatar')))
  }
}

export const CustomTooltip: Story<Props> = Template.bind({})
CustomTooltip.args = {
  ...baseProps,
  tooltip: 'Drag to upload'
}

export const CustomStyling: Story<Props> = Template.bind({})
CustomStyling.args = {
  ...baseProps,
  avatarSrc: 'https://via.placeholder.com/500',
  style: {
    width: '500px',
    height: '500px'
  },
  imageProps: {
    style: {
      width: '500px',
      height: '500px'
    }
  }
}
`,locationsMap:{base:{startLoc:{col:54,line:15},endLoc:{col:1,line:21},startBody:{col:54,line:15},endBody:{col:1,line:21}},"on-attach":{startLoc:{col:54,line:15},endLoc:{col:1,line:21},startBody:{col:54,line:15},endBody:{col:1,line:21}},"custom-tooltip":{startLoc:{col:54,line:15},endLoc:{col:1,line:21},startBody:{col:54,line:15},endBody:{col:1,line:21}},"custom-styling":{startLoc:{col:54,line:15},endLoc:{col:1,line:21},startBody:{col:54,line:15},endBody:{col:1,line:21}}}},badges:["v2.1.0"]}};const ze=e=>A("div",{style:{width:280},children:A(qe,r({},e))}),Ze={avatarSrc:"https://via.placeholder.com/150",fileKey:"avatar",onAttach(e){console.log("attached image"+JSON.stringify(e.get("avatar")))}},$o=ze.bind({});$o.args=r({},Ze);const et=ze.bind({});et.args=u(r({},Ze),{fileKey:"avatar",onAttach(e){alert("attached image"+JSON.stringify(e.get("avatar")))}});const At=ze.bind({});At.args=u(r({},Ze),{tooltip:"Drag to upload"});const ot=ze.bind({});ot.args=u(r({},Ze),{avatarSrc:"https://via.placeholder.com/500",style:{width:"500px",height:"500px"},imageProps:{style:{width:"500px",height:"500px"}}});const Kr=["Base","OnAttach","CustomTooltip","CustomStyling"];var Ir=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Vr,Base:$o,OnAttach:et,CustomTooltip:At,CustomStyling:ot,__namedExportsOrder:Kr}),Gr={parameters:{storySource:{source:`import React from 'react'

import { ComponentMeta, ComponentStory, Story } from '@storybook/react'

import ClickableArea, { Props } from '../../components/ClickableArea'

export default {
  title: 'Utils/ClickableArea',
  component: ClickableArea,
  argTypes: { onClick: { action: 'clicked' } }
} as ComponentMeta<typeof ClickableArea>

const Template: ComponentStory<typeof ClickableArea> = (args) => (
  <ClickableArea {...args}>
    <div style={{ backgroundColor: 'red' }}>Click anywhere in the red area</div>
  </ClickableArea>
)

export const Example: Story<Props> = Template.bind({})
Example.args = {}
`,locationsMap:{example:{startLoc:{col:55,line:13},endLoc:{col:1,line:17},startBody:{col:55,line:13},endBody:{col:1,line:17}}}}},title:"Utils/ClickableArea",component:$,argTypes:{onClick:{action:"clicked"}}};const wr=e=>A($,u(r({},e),{children:A("div",{style:{backgroundColor:"red"},children:"Click anywhere in the red area"})})),tt=wr.bind({});tt.args={};const Ur=["Example"];var zr=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Gr,Example:tt,__namedExportsOrder:Ur}),Zr={parameters:{storySource:{source:`import React from 'react'

import { ComponentMeta, ComponentStory, Story } from '@storybook/react'

import { AppBar, Card, CardContent } from '@mui/material'

import HideOnScroll, { Props } from '../../components/HideOnScroll'

export default {
  title: 'Utils/HideOnScroll',
  component: HideOnScroll
} as ComponentMeta<typeof HideOnScroll>

const Template: ComponentStory<typeof HideOnScroll> = (args) => {
  return (
    <Card variant='outlined'>
      <CardContent style={{ height: 600 }}>
        Scroll down
        <HideOnScroll {...args} />
      </CardContent>
    </Card>
  )
}

export const Example: Story<Props> = Template.bind({})
Example.args = {
  children: (
    <AppBar>
      I disappear when scrolling down, and appear back scrolling up
    </AppBar>
  )
}
`,locationsMap:{example:{startLoc:{col:54,line:14},endLoc:{col:1,line:23},startBody:{col:54,line:14},endBody:{col:1,line:23}}}}},title:"Utils/HideOnScroll",component:ee};const Hr=e=>A(R,{variant:"outlined",children:p(V,{style:{height:600},children:["Scroll down",A(ee,r({},e))]})}),at=Hr.bind({});at.args={children:A(Je,{children:"I disappear when scrolling down, and appear back scrolling up"})};const Mr=["Example"];var Yr=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Zr,Example:at,__namedExportsOrder:Mr});const _r=ae(X)(({theme:e})=>{const o=e.palette.mode==="dark"?e.palette.common.white:e.palette.common.black,a=e.palette.mode==="dark"?e.palette.common.black:e.palette.common.white;return{textTransform:"initial",borderRadius:0,"&.MuiButton-sizeLarge":{fontSize:20},"&.MuiButton-sizeMedium":{fontSize:16},"&.MuiButton-sizeSmall":{fontSize:14},"&.MuiButton-contained":{color:`${a} !important`,backgroundColor:o,"&:hover":{backgroundColor:`${qA(o,.9)} !important`}},"&.MuiButton-root":{borderColor:o,color:o,"&:hover":{backgroundColor:qA(o,.16)}}}}),Ce=o=>{var e=v(o,[]);return A(_r,r({},e))};try{Ce.displayName="YuButton",Ce.__docgenInfo={description:"",displayName:"YuButton",props:{children:{defaultValue:null,description:"The content of the component.",name:"children",required:!1,type:{name:"ReactNode"}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"(Partial<ButtonClasses> & Partial<ClassNameMap<never>>)"}},color:{defaultValue:{value:"'primary'"},description:"The color of the component. It supports those theme colors that make sense for this component.",name:"color",required:!1,type:{name:"enum",value:[{value:'"inherit"'},{value:'"primary"'},{value:'"secondary"'},{value:'"success"'},{value:'"error"'},{value:'"info"'},{value:'"warning"'}]}},disabled:{defaultValue:{value:`false
false`},description:"If `true`, the component is disabled.",name:"disabled",required:!1,type:{name:"boolean"}},disableElevation:{defaultValue:{value:"false"},description:"If `true`, no elevation is used.",name:"disableElevation",required:!1,type:{name:"boolean"}},disableFocusRipple:{defaultValue:{value:"false"},description:"If `true`, the  keyboard focus ripple is disabled.",name:"disableFocusRipple",required:!1,type:{name:"boolean"}},endIcon:{defaultValue:null,description:"Element placed after the children.",name:"endIcon",required:!1,type:{name:"ReactNode"}},fullWidth:{defaultValue:{value:"false"},description:"If `true`, the button will take up the full width of its container.",name:"fullWidth",required:!1,type:{name:"boolean"}},href:{defaultValue:null,description:"The URL to link to when the button is clicked.\nIf defined, an `a` element will be used as the root node.",name:"href",required:!1,type:{name:"string"}},size:{defaultValue:{value:"'medium'"},description:"The size of the component.\n`small` is equivalent to the dense button styling.",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},startIcon:{defaultValue:null,description:"Element placed before the children.",name:"startIcon",required:!1,type:{name:"ReactNode"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},variant:{defaultValue:{value:"'text'"},description:"The variant to use.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"outlined"'},{value:'"contained"'}]}},tabIndex:{defaultValue:{value:"0"},description:"",name:"tabIndex",required:!1,type:{name:"number"}},action:{defaultValue:null,description:"A ref for imperative actions.\nIt currently only supports `focusVisible()` action.",name:"action",required:!1,type:{name:"Ref<ButtonBaseActions>"}},centerRipple:{defaultValue:{value:"false"},description:"If `true`, the ripples are centered.\nThey won't start at the cursor interaction position.",name:"centerRipple",required:!1,type:{name:"boolean"}},disableRipple:{defaultValue:{value:"false"},description:"If `true`, the ripple effect is disabled.\n\n\u26A0\uFE0F Without a ripple there is no styling for :focus-visible by default. Be sure\nto highlight the element by applying separate styles with the `.Mui-focusVisible` class.",name:"disableRipple",required:!1,type:{name:"boolean"}},disableTouchRipple:{defaultValue:{value:"false"},description:"If `true`, the touch ripple effect is disabled.",name:"disableTouchRipple",required:!1,type:{name:"boolean"}},focusRipple:{defaultValue:{value:"false"},description:"If `true`, the base button will have a keyboard focus ripple.",name:"focusRipple",required:!1,type:{name:"boolean"}},focusVisibleClassName:{defaultValue:null,description:`This prop can help identify which element has keyboard focus.
The class name will be applied when the element gains the focus through keyboard interaction.
It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/master/explainer.md).
A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a \`focus-visible\` class to other components
if needed.`,name:"focusVisibleClassName",required:!1,type:{name:"string"}},LinkComponent:{defaultValue:{value:"'a'"},description:"The component used to render a link when the `href` prop is provided.",name:"LinkComponent",required:!1,type:{name:"ElementType<any>"}},onFocusVisible:{defaultValue:null,description:"Callback fired when the component is focused with a keyboard.\nWe trigger a `onFocus` callback too.",name:"onFocusVisible",required:!1,type:{name:"FocusEventHandler<any>"}},TouchRippleProps:{defaultValue:null,description:"Props applied to the `TouchRipple` element.",name:"TouchRippleProps",required:!1,type:{name:"Partial<TouchRippleProps>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLButtonElement | null) => void) | RefObject<HTMLButtonElement> | null"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/yu/YuButton.tsx#YuButton"]={docgenInfo:Ce.__docgenInfo,name:"YuButton",path:"src/components/yu/YuButton.tsx#YuButton"})}catch{}var $r={title:"YU/Button",component:Ce,parameters:{storySource:{source:`import React from 'react'

import { ComponentMeta, ComponentStory, Story } from '@storybook/react'

import YuButton, { Props } from '../../components/yu/YuButton'

export default {
  title: 'YU/Button',
  component: YuButton,
  parameters: {
    badges: ['Added: 2.0.0']
  }
} as ComponentMeta<typeof YuButton>

const Template: ComponentStory<typeof YuButton> = (args) => {
  return <YuButton {...args} />
}

const baseProps: Partial<Props> = {
  children: 'Some Text'
}

export const Base: Story<Props> = Template.bind({})
Base.args = {
  ...baseProps
}

export const Contained: Story<Props> = Template.bind({})
Contained.args = {
  ...baseProps,
  variant: 'contained'
}

export const Outlined: Story<Props> = Template.bind({})
Outlined.args = {
  ...baseProps,
  variant: 'outlined'
}
`,locationsMap:{base:{startLoc:{col:50,line:15},endLoc:{col:1,line:17},startBody:{col:50,line:15},endBody:{col:1,line:17}},contained:{startLoc:{col:50,line:15},endLoc:{col:1,line:17},startBody:{col:50,line:15},endBody:{col:1,line:17}},outlined:{startLoc:{col:50,line:15},endLoc:{col:1,line:17},startBody:{col:50,line:15},endBody:{col:1,line:17}}}},badges:["Added: 2.0.0"]}};const bA=e=>A(Ce,r({},e)),fA={children:"Some Text"},nt=bA.bind({});nt.args=r({},fA);const rt=bA.bind({});rt.args=u(r({},fA),{variant:"contained"});const lt=bA.bind({});lt.args=u(r({},fA),{variant:"outlined"});const el=["Base","Contained","Outlined"];var Al=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:$r,Base:nt,Contained:rt,Outlined:lt,__namedExportsOrder:el});const ol=[Aa,oa,ta,aa,na,ra,la,ia,sa,ua,Ba];ol.forEach(e=>{Object.keys(e).forEach(o=>{const a=e[o];switch(o){case"args":case"argTypes":return $t.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(a));case"decorators":return a.forEach(n=>_t(n,!1));case"loaders":return a.forEach(n=>Yt(n,!1));case"parameters":return CA(r({},a),!1);case"argTypesEnhancers":return a.forEach(n=>Mt(n));case"argsEnhancers":return a.forEach(n=>Ht(n));case"globals":case"globalTypes":{const n={};return n[o]=a,CA(n,!1)}case"decorateStory":case"renderToDOM":return null;default:return console.log(o+" was not supported :( !")}})});function it(e){return{"/home/runner/work/yu-open-lib/yu-open-lib/src/stories/hooks/useToggle.stories.mdx":Fa,"/home/runner/work/yu-open-lib/yu-open-lib/src/stories/hooks/useViewport.stories.mdx":Ja,"/home/runner/work/yu-open-lib/yu-open-lib/src/stories/root/AppTheme.stories.mdx":Ka,"/home/runner/work/yu-open-lib/yu-open-lib/src/stories/root/Guidelines.stories.mdx":Ua,"/home/runner/work/yu-open-lib/yu-open-lib/src/stories/root/Intro.stories.mdx":Ma,"/home/runner/work/yu-open-lib/yu-open-lib/src/stories/root/V2Update.stories.mdx":en,"/home/runner/work/yu-open-lib/yu-open-lib/src/stories/dialogs/BaseDialog.stories.tsx":nn,"/home/runner/work/yu-open-lib/yu-open-lib/src/stories/dialogs/ConfirmDialog.stories.tsx":sn,"/home/runner/work/yu-open-lib/yu-open-lib/src/stories/dialogs/DialogTitle.stories.tsx":cn,"/home/runner/work/yu-open-lib/yu-open-lib/src/stories/graphs/AverageStepDurationGraph.stories.tsx":fn,"/home/runner/work/yu-open-lib/yu-open-lib/src/stories/graphs/DiversityBarGraph.stories.tsx":qn,"/home/runner/work/yu-open-lib/yu-open-lib/src/stories/graphs/InfoLabel.stories.tsx":Qn,"/home/runner/work/yu-open-lib/yu-open-lib/src/stories/graphs/NivoTextTooltip.stories.tsx":Bn,"/home/runner/work/yu-open-lib/yu-open-lib/src/stories/graphs/RejectionsSunburst.stories.tsx":En,"/home/runner/work/yu-open-lib/yu-open-lib/src/stories/graphs/SalariesBarGraph.stories.tsx":In,"/home/runner/work/yu-open-lib/yu-open-lib/src/stories/graphs/YuBarGraph.stories.tsx":Zn,"/home/runner/work/yu-open-lib/yu-open-lib/src/stories/graphs/YuWordCloud.stories.tsx":or,"/home/runner/work/yu-open-lib/yu-open-lib/src/stories/hooks/useToggle.stories.tsx":lr,"/home/runner/work/yu-open-lib/yu-open-lib/src/stories/hooks/useViewport.stories.tsx":dr,"/home/runner/work/yu-open-lib/yu-open-lib/src/stories/inputs/CopyableButton.stories.tsx":gr,"/home/runner/work/yu-open-lib/yu-open-lib/src/stories/inputs/CopyableInput.stories.tsx":hr,"/home/runner/work/yu-open-lib/yu-open-lib/src/stories/inputs/VCardQRCode.stories.tsx":qr,"/home/runner/work/yu-open-lib/yu-open-lib/src/stories/inputs/WhatsappChip.stories.tsx":Rr,"/home/runner/work/yu-open-lib/yu-open-lib/src/stories/loaders/BackdropLoading.stories.tsx":Wr,"/home/runner/work/yu-open-lib/yu-open-lib/src/stories/loaders/LoadingLine.stories.tsx":Lr,"/home/runner/work/yu-open-lib/yu-open-lib/src/stories/navbar/YuAppBar.stories.tsx":Xr,"/home/runner/work/yu-open-lib/yu-open-lib/src/stories/person/PersonAvatar.stories.tsx":Ir,"/home/runner/work/yu-open-lib/yu-open-lib/src/stories/utils/ClickableArea.stories.tsx":zr,"/home/runner/work/yu-open-lib/yu-open-lib/src/stories/utils/HideOnScroll.stories.tsx":Yr,"/home/runner/work/yu-open-lib/yu-open-lib/src/stories/yu/YuButton.stories.tsx":Al}[e]}Object.assign(it,{keys:()=>["/home/runner/work/yu-open-lib/yu-open-lib/src/stories/hooks/useToggle.stories.mdx","/home/runner/work/yu-open-lib/yu-open-lib/src/stories/hooks/useViewport.stories.mdx","/home/runner/work/yu-open-lib/yu-open-lib/src/stories/root/AppTheme.stories.mdx","/home/runner/work/yu-open-lib/yu-open-lib/src/stories/root/Guidelines.stories.mdx","/home/runner/work/yu-open-lib/yu-open-lib/src/stories/root/Intro.stories.mdx","/home/runner/work/yu-open-lib/yu-open-lib/src/stories/root/V2Update.stories.mdx","/home/runner/work/yu-open-lib/yu-open-lib/src/stories/dialogs/BaseDialog.stories.tsx","/home/runner/work/yu-open-lib/yu-open-lib/src/stories/dialogs/ConfirmDialog.stories.tsx","/home/runner/work/yu-open-lib/yu-open-lib/src/stories/dialogs/DialogTitle.stories.tsx","/home/runner/work/yu-open-lib/yu-open-lib/src/stories/graphs/AverageStepDurationGraph.stories.tsx","/home/runner/work/yu-open-lib/yu-open-lib/src/stories/graphs/DiversityBarGraph.stories.tsx","/home/runner/work/yu-open-lib/yu-open-lib/src/stories/graphs/InfoLabel.stories.tsx","/home/runner/work/yu-open-lib/yu-open-lib/src/stories/graphs/NivoTextTooltip.stories.tsx","/home/runner/work/yu-open-lib/yu-open-lib/src/stories/graphs/RejectionsSunburst.stories.tsx","/home/runner/work/yu-open-lib/yu-open-lib/src/stories/graphs/SalariesBarGraph.stories.tsx","/home/runner/work/yu-open-lib/yu-open-lib/src/stories/graphs/YuBarGraph.stories.tsx","/home/runner/work/yu-open-lib/yu-open-lib/src/stories/graphs/YuWordCloud.stories.tsx","/home/runner/work/yu-open-lib/yu-open-lib/src/stories/hooks/useToggle.stories.tsx","/home/runner/work/yu-open-lib/yu-open-lib/src/stories/hooks/useViewport.stories.tsx","/home/runner/work/yu-open-lib/yu-open-lib/src/stories/inputs/CopyableButton.stories.tsx","/home/runner/work/yu-open-lib/yu-open-lib/src/stories/inputs/CopyableInput.stories.tsx","/home/runner/work/yu-open-lib/yu-open-lib/src/stories/inputs/VCardQRCode.stories.tsx","/home/runner/work/yu-open-lib/yu-open-lib/src/stories/inputs/WhatsappChip.stories.tsx","/home/runner/work/yu-open-lib/yu-open-lib/src/stories/loaders/BackdropLoading.stories.tsx","/home/runner/work/yu-open-lib/yu-open-lib/src/stories/loaders/LoadingLine.stories.tsx","/home/runner/work/yu-open-lib/yu-open-lib/src/stories/navbar/YuAppBar.stories.tsx","/home/runner/work/yu-open-lib/yu-open-lib/src/stories/person/PersonAvatar.stories.tsx","/home/runner/work/yu-open-lib/yu-open-lib/src/stories/utils/ClickableArea.stories.tsx","/home/runner/work/yu-open-lib/yu-open-lib/src/stories/utils/HideOnScroll.stories.tsx","/home/runner/work/yu-open-lib/yu-open-lib/src/stories/yu/YuButton.stories.tsx"],resolve:e=>({"/home/runner/work/yu-open-lib/yu-open-lib/src/stories/hooks/useToggle.stories.mdx":"./src/stories/hooks/useToggle.stories.mdx","/home/runner/work/yu-open-lib/yu-open-lib/src/stories/hooks/useViewport.stories.mdx":"./src/stories/hooks/useViewport.stories.mdx","/home/runner/work/yu-open-lib/yu-open-lib/src/stories/root/AppTheme.stories.mdx":"./src/stories/root/AppTheme.stories.mdx","/home/runner/work/yu-open-lib/yu-open-lib/src/stories/root/Guidelines.stories.mdx":"./src/stories/root/Guidelines.stories.mdx","/home/runner/work/yu-open-lib/yu-open-lib/src/stories/root/Intro.stories.mdx":"./src/stories/root/Intro.stories.mdx","/home/runner/work/yu-open-lib/yu-open-lib/src/stories/root/V2Update.stories.mdx":"./src/stories/root/V2Update.stories.mdx","/home/runner/work/yu-open-lib/yu-open-lib/src/stories/dialogs/BaseDialog.stories.tsx":"./src/stories/dialogs/BaseDialog.stories.tsx","/home/runner/work/yu-open-lib/yu-open-lib/src/stories/dialogs/ConfirmDialog.stories.tsx":"./src/stories/dialogs/ConfirmDialog.stories.tsx","/home/runner/work/yu-open-lib/yu-open-lib/src/stories/dialogs/DialogTitle.stories.tsx":"./src/stories/dialogs/DialogTitle.stories.tsx","/home/runner/work/yu-open-lib/yu-open-lib/src/stories/graphs/AverageStepDurationGraph.stories.tsx":"./src/stories/graphs/AverageStepDurationGraph.stories.tsx","/home/runner/work/yu-open-lib/yu-open-lib/src/stories/graphs/DiversityBarGraph.stories.tsx":"./src/stories/graphs/DiversityBarGraph.stories.tsx","/home/runner/work/yu-open-lib/yu-open-lib/src/stories/graphs/InfoLabel.stories.tsx":"./src/stories/graphs/InfoLabel.stories.tsx","/home/runner/work/yu-open-lib/yu-open-lib/src/stories/graphs/NivoTextTooltip.stories.tsx":"./src/stories/graphs/NivoTextTooltip.stories.tsx","/home/runner/work/yu-open-lib/yu-open-lib/src/stories/graphs/RejectionsSunburst.stories.tsx":"./src/stories/graphs/RejectionsSunburst.stories.tsx","/home/runner/work/yu-open-lib/yu-open-lib/src/stories/graphs/SalariesBarGraph.stories.tsx":"./src/stories/graphs/SalariesBarGraph.stories.tsx","/home/runner/work/yu-open-lib/yu-open-lib/src/stories/graphs/YuBarGraph.stories.tsx":"./src/stories/graphs/YuBarGraph.stories.tsx","/home/runner/work/yu-open-lib/yu-open-lib/src/stories/graphs/YuWordCloud.stories.tsx":"./src/stories/graphs/YuWordCloud.stories.tsx","/home/runner/work/yu-open-lib/yu-open-lib/src/stories/hooks/useToggle.stories.tsx":"./src/stories/hooks/useToggle.stories.tsx","/home/runner/work/yu-open-lib/yu-open-lib/src/stories/hooks/useViewport.stories.tsx":"./src/stories/hooks/useViewport.stories.tsx","/home/runner/work/yu-open-lib/yu-open-lib/src/stories/inputs/CopyableButton.stories.tsx":"./src/stories/inputs/CopyableButton.stories.tsx","/home/runner/work/yu-open-lib/yu-open-lib/src/stories/inputs/CopyableInput.stories.tsx":"./src/stories/inputs/CopyableInput.stories.tsx","/home/runner/work/yu-open-lib/yu-open-lib/src/stories/inputs/VCardQRCode.stories.tsx":"./src/stories/inputs/VCardQRCode.stories.tsx","/home/runner/work/yu-open-lib/yu-open-lib/src/stories/inputs/WhatsappChip.stories.tsx":"./src/stories/inputs/WhatsappChip.stories.tsx","/home/runner/work/yu-open-lib/yu-open-lib/src/stories/loaders/BackdropLoading.stories.tsx":"./src/stories/loaders/BackdropLoading.stories.tsx","/home/runner/work/yu-open-lib/yu-open-lib/src/stories/loaders/LoadingLine.stories.tsx":"./src/stories/loaders/LoadingLine.stories.tsx","/home/runner/work/yu-open-lib/yu-open-lib/src/stories/navbar/YuAppBar.stories.tsx":"./src/stories/navbar/YuAppBar.stories.tsx","/home/runner/work/yu-open-lib/yu-open-lib/src/stories/person/PersonAvatar.stories.tsx":"./src/stories/person/PersonAvatar.stories.tsx","/home/runner/work/yu-open-lib/yu-open-lib/src/stories/utils/ClickableArea.stories.tsx":"./src/stories/utils/ClickableArea.stories.tsx","/home/runner/work/yu-open-lib/yu-open-lib/src/stories/utils/HideOnScroll.stories.tsx":"./src/stories/utils/HideOnScroll.stories.tsx","/home/runner/work/yu-open-lib/yu-open-lib/src/stories/yu/YuButton.stories.tsx":"./src/stories/yu/YuButton.stories.tsx"})[e]});ea(it,{hot:!1},!1);
//# sourceMappingURL=iframe.7b68f139.js.map
