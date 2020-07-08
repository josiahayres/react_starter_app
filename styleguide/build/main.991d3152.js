(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{165:function(t,n,e){"use strict";e.r(n),e.d(n,"default",(function(){return j}));var s=e(75),a=e(0),r=e.n(a),i=e(16),o=e(174),c=e(254),p=e(175),u=Object(i.a)((function(t){return{root:{color:t.palette.getContrastText(p.a[500]),backgroundColor:p.a[500],"&:hover":{backgroundColor:p.a[700]}}}}))(c.a),l=Object(o.a)((function(t){return{margin:{margin:t.spacing(1)}}}));function j(t){var n=l(),e=t.children,a=void 0===e?"Custom button":e,i=Object(s.a)(t,["children"]);return r.a.createElement(u,Object.assign({variant:"contained",color:"primary",className:n.margin},i),a)}},233:function(t,n,e){"use strict";e.r(n),e.d(n,"default",(function(){return l}));var s=e(75),a=e(0),r=e.n(a),i=e(16),o=e(174),c=e(254),p=Object(i.a)({root:{boxShadow:"none",textTransform:"none",fontSize:16,padding:"6px 12px",border:"1px solid",lineHeight:1.5,backgroundColor:"#0063cc",borderColor:"#0063cc",fontFamily:["-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'].join(","),"&:hover":{backgroundColor:"#0069d9",borderColor:"#0062cc",boxShadow:"none"},"&:active":{boxShadow:"none",backgroundColor:"#0062cc",borderColor:"#005cbf"},"&:focus":{boxShadow:"0 0 0 0.2rem rgba(0,123,255,.5)"}}})(c.a),u=Object(o.a)((function(t){return{margin:{margin:t.spacing(1)}}}));function l(t){var n=t.children,e=void 0===n?"Bootstrap":n,a=Object(s.a)(t,["children"]),i=u();return r.a.createElement(p,Object.assign({variant:"contained",color:"primary",disableRipple:!0,className:i.margin},a),e)}},234:function(t,n,e){"use strict";e.r(n),e.d(n,"default",(function(){return c}));var s=e(75),a=e(0),r=e.n(a),i=e(174),o=Object(i.a)((function(t){return{margin:{margin:t.spacing(1),color:function(n){var e;return(null==t||null===(e=t.status)||void 0===e?void 0:e[null==n?void 0:n.status])||"black"}}}}));function c(t){var n=t.children,e=Object(s.a)(t,["children"]),a=o(e).margin;return r.a.createElement("div",{className:a},n)}},251:function(t,n,e){"use strict";var s=e(0),a=e.n(s),r=e(252),i=e(249),o=e(74),c=e(40),p=e(130),u=e(77),l=e.n(u),j=e(124),_=e(401).default.create();_.interceptors.request.use((function(t){return t}),(function(t){return Promise.reject(t)})),_.interceptors.response.use((function(t){return t}),(function(t){var n="";if(t.response){var e,s=(null==t||null===(e=t.response)||void 0===e?void 0:e.status)||0;switch(s){case 400:n="Bad input [400]";break;case 401:n="Authentication check failed [401]";break;case 403:n="The user is not in required AD Groups/Roles [403]";break;case 500:n="Internal server error [500]";break;default:n="Unexpected server error [".concat(s,"]")}}else n=t.request?"The request was made but no response was received":t.message;return console.error("Axios request failed: ".concat(n,". Full error:"),JSON.stringify(t)),Promise.reject(n)}));var S,d=_;function m(){return y.apply(this,arguments)}function y(){return(y=Object(j.a)(l.a.mark((function t(){var n,e,s,a,r=arguments;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=r.length>0&&void 0!==r[0]?r[0]:"",e=r.length>1&&void 0!==r[1]?r[1]:"",s=d.get("/login",{data:{username:n,password:e}}),a=s.data,t.abrupt("return",a);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var g=Object(o.b)("user/fetchLogin",function(){var t=Object(j.a)(l.a.mark((function t(n,e,s){var a,r,i,o,c;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a=s.getState,r=s.requestId,i=a().users,o=i.currentRequestId,"pending"===i.loading&&r===o){t.next=4;break}return t.abrupt("return");case 4:return t.next=6,m(n,e);case 6:return c=t.sent,t.abrupt("return",c.data);case 8:case"end":return t.stop()}}),t)})));return function(n,e,s){return t.apply(this,arguments)}}()),x=Object(o.c)({name:"user",initialState:{user:{},loading:!1,error:"",currentRequestId:void 0},reducers:{},extraReducers:(S={},Object(p.a)(S,g.pending,(function(t,n){t.loading||(t.loading=!0,t.currentRequestId=n.meta.requestId)})),Object(p.a)(S,g.fulfilled,(function(t,n){var e=n.meta.requestId;t.loading&&t.currentRequestId===e&&(t.loading=!1,t.entities.push(n.payload),t.currentRequestId=void 0)})),Object(p.a)(S,g.rejected,(function(t,n){var e=n.meta.requestId;t.loading&&t.currentRequestId===e&&(t.loading=!1,t.error=n.error,t.currentRequestId=void 0)})),S)}).reducer,h=Object(c.c)({authentication:x}),E=Object(o.a)({reducer:h}),k=e(168),f=e(250),B=e(899),b={status:{warning:"#e5720f",error:"#bc0000",danger:e(131).a[500]},colours:{CUSTOMS_BLUE:"#003d6e",BLUE:"#0062cb"},palette:{type:"light",primary:{main:"#0062cb"},secondary:{main:"#406e92"}},overrides:{MuiCheckbox:{checked:{}}}},C=Object(f.a)(b);n.a=function(t){var n=t.children,e=a.a.createRef(),s=function(t){return function(){e.current.closeSnackbar(t)}};return a.a.createElement(i.a,{store:E},a.a.createElement(B.a,{theme:C},a.a.createElement(k.SnackbarProvider,{maxSnack:3,anchorOrigin:{vertical:"bottom",horizontal:"left"},preventDuplicate:!0,ref:e,action:function(t){return a.a.createElement("button",{onClick:s(t)},"dismiss")}},a.a.createElement(r.a,null,n))))}},258:function(t,n,e){t.exports=e(876)},433:function(t,n,e){var s={"./Binary_Property/ASCII.js":434,"./Binary_Property/ASCII_Hex_Digit.js":435,"./Binary_Property/Alphabetic.js":436,"./Binary_Property/Any.js":437,"./Binary_Property/Assigned.js":438,"./Binary_Property/Bidi_Control.js":439,"./Binary_Property/Bidi_Mirrored.js":440,"./Binary_Property/Case_Ignorable.js":441,"./Binary_Property/Cased.js":442,"./Binary_Property/Changes_When_Casefolded.js":443,"./Binary_Property/Changes_When_Casemapped.js":444,"./Binary_Property/Changes_When_Lowercased.js":445,"./Binary_Property/Changes_When_NFKC_Casefolded.js":446,"./Binary_Property/Changes_When_Titlecased.js":447,"./Binary_Property/Changes_When_Uppercased.js":448,"./Binary_Property/Dash.js":449,"./Binary_Property/Default_Ignorable_Code_Point.js":450,"./Binary_Property/Deprecated.js":451,"./Binary_Property/Diacritic.js":452,"./Binary_Property/Emoji.js":453,"./Binary_Property/Emoji_Component.js":454,"./Binary_Property/Emoji_Modifier.js":455,"./Binary_Property/Emoji_Modifier_Base.js":456,"./Binary_Property/Emoji_Presentation.js":457,"./Binary_Property/Extended_Pictographic.js":458,"./Binary_Property/Extender.js":459,"./Binary_Property/Grapheme_Base.js":460,"./Binary_Property/Grapheme_Extend.js":461,"./Binary_Property/Hex_Digit.js":462,"./Binary_Property/IDS_Binary_Operator.js":463,"./Binary_Property/IDS_Trinary_Operator.js":464,"./Binary_Property/ID_Continue.js":465,"./Binary_Property/ID_Start.js":466,"./Binary_Property/Ideographic.js":467,"./Binary_Property/Join_Control.js":468,"./Binary_Property/Logical_Order_Exception.js":469,"./Binary_Property/Lowercase.js":470,"./Binary_Property/Math.js":471,"./Binary_Property/Noncharacter_Code_Point.js":472,"./Binary_Property/Pattern_Syntax.js":473,"./Binary_Property/Pattern_White_Space.js":474,"./Binary_Property/Quotation_Mark.js":475,"./Binary_Property/Radical.js":476,"./Binary_Property/Regional_Indicator.js":477,"./Binary_Property/Sentence_Terminal.js":478,"./Binary_Property/Soft_Dotted.js":479,"./Binary_Property/Terminal_Punctuation.js":480,"./Binary_Property/Unified_Ideograph.js":481,"./Binary_Property/Uppercase.js":482,"./Binary_Property/Variation_Selector.js":483,"./Binary_Property/White_Space.js":484,"./Binary_Property/XID_Continue.js":485,"./Binary_Property/XID_Start.js":486,"./General_Category/Cased_Letter.js":487,"./General_Category/Close_Punctuation.js":488,"./General_Category/Connector_Punctuation.js":489,"./General_Category/Control.js":490,"./General_Category/Currency_Symbol.js":491,"./General_Category/Dash_Punctuation.js":492,"./General_Category/Decimal_Number.js":493,"./General_Category/Enclosing_Mark.js":494,"./General_Category/Final_Punctuation.js":495,"./General_Category/Format.js":496,"./General_Category/Initial_Punctuation.js":497,"./General_Category/Letter.js":498,"./General_Category/Letter_Number.js":499,"./General_Category/Line_Separator.js":500,"./General_Category/Lowercase_Letter.js":501,"./General_Category/Mark.js":502,"./General_Category/Math_Symbol.js":503,"./General_Category/Modifier_Letter.js":504,"./General_Category/Modifier_Symbol.js":505,"./General_Category/Nonspacing_Mark.js":506,"./General_Category/Number.js":507,"./General_Category/Open_Punctuation.js":508,"./General_Category/Other.js":509,"./General_Category/Other_Letter.js":510,"./General_Category/Other_Number.js":511,"./General_Category/Other_Punctuation.js":512,"./General_Category/Other_Symbol.js":513,"./General_Category/Paragraph_Separator.js":514,"./General_Category/Private_Use.js":515,"./General_Category/Punctuation.js":516,"./General_Category/Separator.js":517,"./General_Category/Space_Separator.js":518,"./General_Category/Spacing_Mark.js":519,"./General_Category/Surrogate.js":520,"./General_Category/Symbol.js":521,"./General_Category/Titlecase_Letter.js":522,"./General_Category/Unassigned.js":523,"./General_Category/Uppercase_Letter.js":524,"./Script/Adlam.js":525,"./Script/Ahom.js":526,"./Script/Anatolian_Hieroglyphs.js":527,"./Script/Arabic.js":528,"./Script/Armenian.js":529,"./Script/Avestan.js":530,"./Script/Balinese.js":531,"./Script/Bamum.js":532,"./Script/Bassa_Vah.js":533,"./Script/Batak.js":534,"./Script/Bengali.js":535,"./Script/Bhaiksuki.js":536,"./Script/Bopomofo.js":537,"./Script/Brahmi.js":538,"./Script/Braille.js":539,"./Script/Buginese.js":540,"./Script/Buhid.js":541,"./Script/Canadian_Aboriginal.js":542,"./Script/Carian.js":543,"./Script/Caucasian_Albanian.js":544,"./Script/Chakma.js":545,"./Script/Cham.js":546,"./Script/Cherokee.js":547,"./Script/Chorasmian.js":548,"./Script/Common.js":549,"./Script/Coptic.js":550,"./Script/Cuneiform.js":551,"./Script/Cypriot.js":552,"./Script/Cyrillic.js":553,"./Script/Deseret.js":554,"./Script/Devanagari.js":555,"./Script/Dives_Akuru.js":556,"./Script/Dogra.js":557,"./Script/Duployan.js":558,"./Script/Egyptian_Hieroglyphs.js":559,"./Script/Elbasan.js":560,"./Script/Elymaic.js":561,"./Script/Ethiopic.js":562,"./Script/Georgian.js":563,"./Script/Glagolitic.js":564,"./Script/Gothic.js":565,"./Script/Grantha.js":566,"./Script/Greek.js":567,"./Script/Gujarati.js":568,"./Script/Gunjala_Gondi.js":569,"./Script/Gurmukhi.js":570,"./Script/Han.js":571,"./Script/Hangul.js":572,"./Script/Hanifi_Rohingya.js":573,"./Script/Hanunoo.js":574,"./Script/Hatran.js":575,"./Script/Hebrew.js":576,"./Script/Hiragana.js":577,"./Script/Imperial_Aramaic.js":578,"./Script/Inherited.js":579,"./Script/Inscriptional_Pahlavi.js":580,"./Script/Inscriptional_Parthian.js":581,"./Script/Javanese.js":582,"./Script/Kaithi.js":583,"./Script/Kannada.js":584,"./Script/Katakana.js":585,"./Script/Kayah_Li.js":586,"./Script/Kharoshthi.js":587,"./Script/Khitan_Small_Script.js":588,"./Script/Khmer.js":589,"./Script/Khojki.js":590,"./Script/Khudawadi.js":591,"./Script/Lao.js":592,"./Script/Latin.js":593,"./Script/Lepcha.js":594,"./Script/Limbu.js":595,"./Script/Linear_A.js":596,"./Script/Linear_B.js":597,"./Script/Lisu.js":598,"./Script/Lycian.js":599,"./Script/Lydian.js":600,"./Script/Mahajani.js":601,"./Script/Makasar.js":602,"./Script/Malayalam.js":603,"./Script/Mandaic.js":604,"./Script/Manichaean.js":605,"./Script/Marchen.js":606,"./Script/Masaram_Gondi.js":607,"./Script/Medefaidrin.js":608,"./Script/Meetei_Mayek.js":609,"./Script/Mende_Kikakui.js":610,"./Script/Meroitic_Cursive.js":611,"./Script/Meroitic_Hieroglyphs.js":612,"./Script/Miao.js":613,"./Script/Modi.js":614,"./Script/Mongolian.js":615,"./Script/Mro.js":616,"./Script/Multani.js":617,"./Script/Myanmar.js":618,"./Script/Nabataean.js":619,"./Script/Nandinagari.js":620,"./Script/New_Tai_Lue.js":621,"./Script/Newa.js":622,"./Script/Nko.js":623,"./Script/Nushu.js":624,"./Script/Nyiakeng_Puachue_Hmong.js":625,"./Script/Ogham.js":626,"./Script/Ol_Chiki.js":627,"./Script/Old_Hungarian.js":628,"./Script/Old_Italic.js":629,"./Script/Old_North_Arabian.js":630,"./Script/Old_Permic.js":631,"./Script/Old_Persian.js":632,"./Script/Old_Sogdian.js":633,"./Script/Old_South_Arabian.js":634,"./Script/Old_Turkic.js":635,"./Script/Oriya.js":636,"./Script/Osage.js":637,"./Script/Osmanya.js":638,"./Script/Pahawh_Hmong.js":639,"./Script/Palmyrene.js":640,"./Script/Pau_Cin_Hau.js":641,"./Script/Phags_Pa.js":642,"./Script/Phoenician.js":643,"./Script/Psalter_Pahlavi.js":644,"./Script/Rejang.js":645,"./Script/Runic.js":646,"./Script/Samaritan.js":647,"./Script/Saurashtra.js":648,"./Script/Sharada.js":649,"./Script/Shavian.js":650,"./Script/Siddham.js":651,"./Script/SignWriting.js":652,"./Script/Sinhala.js":653,"./Script/Sogdian.js":654,"./Script/Sora_Sompeng.js":655,"./Script/Soyombo.js":656,"./Script/Sundanese.js":657,"./Script/Syloti_Nagri.js":658,"./Script/Syriac.js":659,"./Script/Tagalog.js":660,"./Script/Tagbanwa.js":661,"./Script/Tai_Le.js":662,"./Script/Tai_Tham.js":663,"./Script/Tai_Viet.js":664,"./Script/Takri.js":665,"./Script/Tamil.js":666,"./Script/Tangut.js":667,"./Script/Telugu.js":668,"./Script/Thaana.js":669,"./Script/Thai.js":670,"./Script/Tibetan.js":671,"./Script/Tifinagh.js":672,"./Script/Tirhuta.js":673,"./Script/Ugaritic.js":674,"./Script/Vai.js":675,"./Script/Wancho.js":676,"./Script/Warang_Citi.js":677,"./Script/Yezidi.js":678,"./Script/Yi.js":679,"./Script/Zanabazar_Square.js":680,"./Script_Extensions/Adlam.js":681,"./Script_Extensions/Ahom.js":682,"./Script_Extensions/Anatolian_Hieroglyphs.js":683,"./Script_Extensions/Arabic.js":684,"./Script_Extensions/Armenian.js":685,"./Script_Extensions/Avestan.js":686,"./Script_Extensions/Balinese.js":687,"./Script_Extensions/Bamum.js":688,"./Script_Extensions/Bassa_Vah.js":689,"./Script_Extensions/Batak.js":690,"./Script_Extensions/Bengali.js":691,"./Script_Extensions/Bhaiksuki.js":692,"./Script_Extensions/Bopomofo.js":693,"./Script_Extensions/Brahmi.js":694,"./Script_Extensions/Braille.js":695,"./Script_Extensions/Buginese.js":696,"./Script_Extensions/Buhid.js":697,"./Script_Extensions/Canadian_Aboriginal.js":698,"./Script_Extensions/Carian.js":699,"./Script_Extensions/Caucasian_Albanian.js":700,"./Script_Extensions/Chakma.js":701,"./Script_Extensions/Cham.js":702,"./Script_Extensions/Cherokee.js":703,"./Script_Extensions/Chorasmian.js":704,"./Script_Extensions/Common.js":705,"./Script_Extensions/Coptic.js":706,"./Script_Extensions/Cuneiform.js":707,"./Script_Extensions/Cypriot.js":708,"./Script_Extensions/Cyrillic.js":709,"./Script_Extensions/Deseret.js":710,"./Script_Extensions/Devanagari.js":711,"./Script_Extensions/Dives_Akuru.js":712,"./Script_Extensions/Dogra.js":713,"./Script_Extensions/Duployan.js":714,"./Script_Extensions/Egyptian_Hieroglyphs.js":715,"./Script_Extensions/Elbasan.js":716,"./Script_Extensions/Elymaic.js":717,"./Script_Extensions/Ethiopic.js":718,"./Script_Extensions/Georgian.js":719,"./Script_Extensions/Glagolitic.js":720,"./Script_Extensions/Gothic.js":721,"./Script_Extensions/Grantha.js":722,"./Script_Extensions/Greek.js":723,"./Script_Extensions/Gujarati.js":724,"./Script_Extensions/Gunjala_Gondi.js":725,"./Script_Extensions/Gurmukhi.js":726,"./Script_Extensions/Han.js":727,"./Script_Extensions/Hangul.js":728,"./Script_Extensions/Hanifi_Rohingya.js":729,"./Script_Extensions/Hanunoo.js":730,"./Script_Extensions/Hatran.js":731,"./Script_Extensions/Hebrew.js":732,"./Script_Extensions/Hiragana.js":733,"./Script_Extensions/Imperial_Aramaic.js":734,"./Script_Extensions/Inherited.js":735,"./Script_Extensions/Inscriptional_Pahlavi.js":736,"./Script_Extensions/Inscriptional_Parthian.js":737,"./Script_Extensions/Javanese.js":738,"./Script_Extensions/Kaithi.js":739,"./Script_Extensions/Kannada.js":740,"./Script_Extensions/Katakana.js":741,"./Script_Extensions/Kayah_Li.js":742,"./Script_Extensions/Kharoshthi.js":743,"./Script_Extensions/Khitan_Small_Script.js":744,"./Script_Extensions/Khmer.js":745,"./Script_Extensions/Khojki.js":746,"./Script_Extensions/Khudawadi.js":747,"./Script_Extensions/Lao.js":748,"./Script_Extensions/Latin.js":749,"./Script_Extensions/Lepcha.js":750,"./Script_Extensions/Limbu.js":751,"./Script_Extensions/Linear_A.js":752,"./Script_Extensions/Linear_B.js":753,"./Script_Extensions/Lisu.js":754,"./Script_Extensions/Lycian.js":755,"./Script_Extensions/Lydian.js":756,"./Script_Extensions/Mahajani.js":757,"./Script_Extensions/Makasar.js":758,"./Script_Extensions/Malayalam.js":759,"./Script_Extensions/Mandaic.js":760,"./Script_Extensions/Manichaean.js":761,"./Script_Extensions/Marchen.js":762,"./Script_Extensions/Masaram_Gondi.js":763,"./Script_Extensions/Medefaidrin.js":764,"./Script_Extensions/Meetei_Mayek.js":765,"./Script_Extensions/Mende_Kikakui.js":766,"./Script_Extensions/Meroitic_Cursive.js":767,"./Script_Extensions/Meroitic_Hieroglyphs.js":768,"./Script_Extensions/Miao.js":769,"./Script_Extensions/Modi.js":770,"./Script_Extensions/Mongolian.js":771,"./Script_Extensions/Mro.js":772,"./Script_Extensions/Multani.js":773,"./Script_Extensions/Myanmar.js":774,"./Script_Extensions/Nabataean.js":775,"./Script_Extensions/Nandinagari.js":776,"./Script_Extensions/New_Tai_Lue.js":777,"./Script_Extensions/Newa.js":778,"./Script_Extensions/Nko.js":779,"./Script_Extensions/Nushu.js":780,"./Script_Extensions/Nyiakeng_Puachue_Hmong.js":781,"./Script_Extensions/Ogham.js":782,"./Script_Extensions/Ol_Chiki.js":783,"./Script_Extensions/Old_Hungarian.js":784,"./Script_Extensions/Old_Italic.js":785,"./Script_Extensions/Old_North_Arabian.js":786,"./Script_Extensions/Old_Permic.js":787,"./Script_Extensions/Old_Persian.js":788,"./Script_Extensions/Old_Sogdian.js":789,"./Script_Extensions/Old_South_Arabian.js":790,"./Script_Extensions/Old_Turkic.js":791,"./Script_Extensions/Oriya.js":792,"./Script_Extensions/Osage.js":793,"./Script_Extensions/Osmanya.js":794,"./Script_Extensions/Pahawh_Hmong.js":795,"./Script_Extensions/Palmyrene.js":796,"./Script_Extensions/Pau_Cin_Hau.js":797,"./Script_Extensions/Phags_Pa.js":798,"./Script_Extensions/Phoenician.js":799,"./Script_Extensions/Psalter_Pahlavi.js":800,"./Script_Extensions/Rejang.js":801,"./Script_Extensions/Runic.js":802,"./Script_Extensions/Samaritan.js":803,"./Script_Extensions/Saurashtra.js":804,"./Script_Extensions/Sharada.js":805,"./Script_Extensions/Shavian.js":806,"./Script_Extensions/Siddham.js":807,"./Script_Extensions/SignWriting.js":808,"./Script_Extensions/Sinhala.js":809,"./Script_Extensions/Sogdian.js":810,"./Script_Extensions/Sora_Sompeng.js":811,"./Script_Extensions/Soyombo.js":812,"./Script_Extensions/Sundanese.js":813,"./Script_Extensions/Syloti_Nagri.js":814,"./Script_Extensions/Syriac.js":815,"./Script_Extensions/Tagalog.js":816,"./Script_Extensions/Tagbanwa.js":817,"./Script_Extensions/Tai_Le.js":818,"./Script_Extensions/Tai_Tham.js":819,"./Script_Extensions/Tai_Viet.js":820,"./Script_Extensions/Takri.js":821,"./Script_Extensions/Tamil.js":822,"./Script_Extensions/Tangut.js":823,"./Script_Extensions/Telugu.js":824,"./Script_Extensions/Thaana.js":825,"./Script_Extensions/Thai.js":826,"./Script_Extensions/Tibetan.js":827,"./Script_Extensions/Tifinagh.js":828,"./Script_Extensions/Tirhuta.js":829,"./Script_Extensions/Ugaritic.js":830,"./Script_Extensions/Vai.js":831,"./Script_Extensions/Wancho.js":832,"./Script_Extensions/Warang_Citi.js":833,"./Script_Extensions/Yezidi.js":834,"./Script_Extensions/Yi.js":835,"./Script_Extensions/Zanabazar_Square.js":836,"./index.js":837,"./unicode-version.js":838};function a(t){var n=r(t);return e(n)}function r(t){if(!e.o(s,t)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return s[t]}a.keys=function(){return Object.keys(s)},a.resolve=r,t.exports=a,a.id=433},864:function(t,n,e){var s={react:e(0)},a=e(53).default.bind(null,s);e(54).default.bind(null,"const React$0 = require('react');\nconst React = React$0.default || (React$0['React'] || React$0);",a),t.exports=[{type:"markdown",content:"## About this guide\n\nComponents are documented explaining how to use them & what options they expect.\nThis guide is setup so that notifications (notistack), Material UI theme, Redux, are all setup.\n\n### UI Components\n\nComponents are automatically added to the tool when you add a `*.examples.md` in the same folder as the component - no need to restart styleguide.\n\nYou can see how components handle different props and data right in your browser.\n\nFind the right combination of props and copy the code.\n\n### Documentation\n\nA collection of how to / best practice guides for common tasks."}]},865:function(t,n,e){t.exports={doclets:{param:"{string} props"},displayName:"BootstrapButton",description:"\n",methods:[],tags:{param:[{title:"param",description:null,type:{type:"NameExpression",name:"string"},name:"props"}]},visibleName:"Bootstrap Button \ud83d\udc19",props:[],examples:e(866)}},866:function(t,n,e){var s={react:e(0),"./BootstrapButton.js":e(233)},a=e(53).default.bind(null,s),r=e(54).default.bind(null,"const React$0 = require('react');\nconst React = React$0.default || (React$0['React'] || React$0);\nconst BootstrapButton$0 = require('./BootstrapButton.js');\nconst BootstrapButton = BootstrapButton$0.default || (BootstrapButton$0['BootstrapButton'] || BootstrapButton$0);",a);t.exports=[{type:"code",content:"<BootstrapButton>Click me</BootstrapButton>\n\n<BootstrapButton>Pushable</BootstrapButton>\n\n<BootstrapButton>Click me</BootstrapButton>",settings:{padded:!0},evalInContext:r}]},867:function(t,n,e){t.exports={doclets:{},displayName:"Button",description:"",methods:[],props:[],examples:e(868)}},868:function(t,n,e){var s={react:e(0),"./Button.js":e(165)},a=e(53).default.bind(null,s),r=e(54).default.bind(null,"const React$0 = require('react');\nconst React = React$0.default || (React$0['React'] || React$0);\nconst Button$0 = require('./Button.js');\nconst Button = Button$0.default || (Button$0['Button'] || Button$0);",a);t.exports=[{type:"code",content:"<Button>Click me</Button>",settings:{},evalInContext:r}]},869:function(t,n,e){t.exports={doclets:{param:'{string} status - ["warning", "danger", "error"]'},displayName:"Example",description:"Makes the text inside the Example component the colour of the provided status.\ndefault text colour to black if no status provided.\nStatus must be in `config/appTheme.js` status object.\n",methods:[],tags:{param:[{title:"param",description:'["warning", "danger", "error"]',type:{type:"NameExpression",name:"string"},name:"status"}]},props:[],examples:e(870)}},870:function(t,n,e){var s={react:e(0),"./Example.js":e(234)},a=e(53).default.bind(null,s),r=e(54).default.bind(null,"const React$0 = require('react');\nconst React = React$0.default || (React$0['React'] || React$0);\nconst Example$0 = require('./Example.js');\nconst Example = Example$0.default || (Example$0['Example'] || Example$0);",a);t.exports=[{type:"code",content:'<Example>No status</Example>\n\n<Example status="warning">warning</Example>\n\n<Example status="error">error</Example>\n\n<Example status="danger">danger</Example>\n\n<Example status="faker">unmatched status</Example>',settings:{padded:!0},evalInContext:r}]},871:function(t,n,e){var s={react:e(0)},a=e(53).default.bind(null,s);e(54).default.bind(null,"const React$0 = require('react');\nconst React = React$0.default || (React$0['React'] || React$0);",a),t.exports=[{type:"markdown",content:'We\'re using the following theme object to create a custom Material UI theme\n\n```js\n<span class="token keyword">import</span> <span class="token punctuation">{</span> orange <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'@material-ui/core/colors\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n    <span class="token comment">// Custom status colours. Usage: `theme.status.warning`</span>\n    status<span class="token operator">:</span> <span class="token punctuation">{</span>\n        warning<span class="token operator">:</span> <span class="token string">"#e5720f"</span><span class="token punctuation">,</span>\n        error<span class="token operator">:</span> <span class="token string">"#bc0000"</span><span class="token punctuation">,</span>\n        danger<span class="token operator">:</span> orange<span class="token punctuation">[</span><span class="token number">500</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    colours<span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token constant">CUSTOMS_BLUE</span><span class="token operator">:</span> <span class="token string">"#003d6e"</span><span class="token punctuation">,</span>\n        <span class="token constant">BLUE</span><span class="token operator">:</span> <span class="token string">"#0062cb"</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    palette<span class="token operator">:</span> <span class="token punctuation">{</span>\n        type<span class="token operator">:</span> <span class="token string">"light"</span><span class="token punctuation">,</span>\n        primary<span class="token operator">:</span> <span class="token punctuation">{</span>\n            main<span class="token operator">:</span> <span class="token string">\'#0062cb\'</span><span class="token punctuation">,</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        secondary<span class="token operator">:</span> <span class="token punctuation">{</span>\n            main<span class="token operator">:</span> <span class="token string">\'#406e92\'</span><span class="token punctuation">,</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    overrides<span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token comment">// Component name https://material-ui.com/api/[component]/#component-name</span>\n        MuiCheckbox<span class="token operator">:</span> <span class="token punctuation">{</span>\n            <span class="token comment">// Rule name</span>\n            checked<span class="token operator">:</span> <span class="token punctuation">{</span>\n                <span class="token comment">// Style it just how you like</span>\n                <span class="token comment">// color: "red"</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n```'}]},872:function(t,n,e){var s={notistack:e(168),"../src/components/Button/Button":e(165),react:e(0)},a=e(53).default.bind(null,s),r=e(54).default.bind(null,"const React$0 = require('react');\nconst React = React$0.default || (React$0['React'] || React$0);",a);t.exports=[{type:"markdown",content:"By default we're adding a clear Button to all notifications.\n\n### Notification Variants"},{type:"code",content:'import { useSnackbar } from "notistack";\nimport Button from "../src/components/Button/Button";\n\nconst { enqueueSnackbar } = useSnackbar();\n\nconst showNotification = (e, variant = "default") => {\n\tconst message = `${variant} notification triggered @${Number(e.timeStamp)}`;\n\tenqueueSnackbar(message, { variant: variant });\n};\n\n<>\n\t<Button onClick={(e) => showNotification(e)}>Click me (default)</Button>\n\t<Button onClick={(e) => showNotification(e, "success")}>\n\t\tClick me (success)\n\t</Button>\n\t<Button onClick={(e) => showNotification(e, "error")}>\n\t\tClick me (error)\n\t</Button>\n\t<Button onClick={(e) => showNotification(e, "warning")}>\n\t\tClick me (error)\n\t</Button>\n\t<Button onClick={(e) => showNotification(e, "info")}>\n\t\tClick me (error)\n\t</Button>\n</>;',settings:{padded:!0},evalInContext:r},{type:"markdown",content:"[See original documentation](https://iamhosseindhv.com/notistack/demos#variants)\n\n### Persistent / Programmatically clear notification"},{type:"code",content:'import { useSnackbar } from "notistack";\nimport Button from "../src/components/Button/Button";\n\nconst { enqueueSnackbar, closeSnackbar } = useSnackbar();\n\n// on connection loss\nconst [key, setKey] = React.useState(null);\n<>\n\t<Button\n\t\tonClick={() => {\n\t\t\t// on connection loss\n\t\t\tconst key = enqueueSnackbar("No connection!", {\n\t\t\t\tvariant: "error",\n\t\t\t\tpersist: true,\n\t\t\t});\n\t\t\tsetKey(key);\n\t\t}}\n\t>\n\t\tsimulate connection loss\n\t</Button>\n\t<Button\n\t\tonClick={() => {\n\t\t\t// when we\'re back online\n\t\t\tcloseSnackbar(key);\n\t\t}}\n\t>\n\t\tback online\n\t</Button>\n</>;',settings:{padded:!0},evalInContext:r}]},873:function(t,n,e){var s={react:e(0)},a=e(53).default.bind(null,s);e(54).default.bind(null,"const React$0 = require('react');\nconst React = React$0.default || (React$0['React'] || React$0);",a),t.exports=[{type:"markdown",content:"We are using redux toolkit to help keep our redux store tidy"}]},874:function(t,n,e){var s={react:e(0)},a=e(53).default.bind(null,s);e(54).default.bind(null,"const React$0 = require('react');\nconst React = React$0.default || (React$0['React'] || React$0);",a),t.exports=[{type:"markdown",content:'## React Router\n\n```js\n<span class="token keyword">import</span> <span class="token punctuation">{</span> BrowserRouter<span class="token punctuation">,</span> Switch<span class="token punctuation">,</span> Route <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react-router-dom"</span><span class="token punctuation">;</span>\n```'}]},875:function(t,n,e){var s={react:e(0)},a=e(53).default.bind(null,s);e(54).default.bind(null,"const React$0 = require('react');\nconst React = React$0.default || (React$0['React'] || React$0);",a),t.exports=[{type:"markdown",content:"A how to / best practice guide for common tasks.\n\n-   Customize Theme (material-ui)\n-   Show notifications (notistack)\n-   Data fetching & storage (redux)\n-   Navigation (react-router)"}]}},[[258,1,2]]]);