(function(e){function t(t){for(var i,n,r=t[0],u=t[1],c=t[2],d=0,p=[];d<r.length;d++)n=r[d],Object.prototype.hasOwnProperty.call(o,n)&&o[n]&&p.push(o[n][0]),o[n]=0;for(i in u)Object.prototype.hasOwnProperty.call(u,i)&&(e[i]=u[i]);l&&l(t);while(p.length)p.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],i=!0,r=1;r<a.length;r++){var u=a[r];0!==o[u]&&(i=!1)}i&&(s.splice(t--,1),e=n(n.s=a[0]))}return e}var i={},o={app:0},s=[];function n(t){if(i[t])return i[t].exports;var a=i[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=i,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(a,i,function(t){return e[t]}.bind(null,i));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],u=r.push.bind(r);r.push=t,r=r.slice();for(var c=0;c<r.length;c++)t(r[c]);var l=u;s.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";var i=a("85ec"),o=a.n(i);o.a},"2e69":function(e,t,a){e.exports=a.p+"img/quma.0fae6315.svg"},3257:function(e,t,a){e.exports=a.p+"img/shcnhu.037a9883.svg"},"3c52":function(e,t,a){e.exports=a.p+"img/wechatpay.2b8aae16.svg"},"3f9d":function(e,t,a){e.exports=a.p+"img/sl.f641b48b.svg"},"45fb":function(e,t,a){e.exports=a.p+"img/fuzhi.6415a8f0.svg"},"4d68":function(e,t,a){e.exports=a.p+"img/hy.a269fd65.svg"},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("2b0e"),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("index")],1)},s=[],n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"box"},[i("div",{staticClass:"box-pop"},[i("div",{staticClass:"box-content"},[i("div",{staticClass:"choose-type"},[i("p",{staticClass:"choose-type-p"},[e._v("选择支付方式")]),i("div",{staticClass:"choose-type-div display"},e._l(e.imgList,(function(t,a){return i("div",{key:t.key,style:{borderColor:e.imgIndex==a?t.color:"#e6e6e6"},on:{click:function(i){return e.chooseType(a,t.key)}}},[i("img",{attrs:{src:t.imgSrc,alt:"图片加载失败"}}),i("p",[e._v(e._s(t.text))])])})),0)]),i("div",[i("div",{staticClass:"order-amount display"},[i("div",[e._v("订单金额")]),i("div",{staticClass:"input display"},[i("p",{directives:[{name:"show",rawName:"v-show",value:e.inputValue,expression:"inputValue"}],staticClass:"inputValue-p"},[e._v("￥")]),i("input",{directives:[{name:"model",rawName:"v-model",value:e.inputValue,expression:"inputValue"}],class:{"inputValue-p1":!e.inputValue},attrs:{id:"input",tabindex:"1",type:"text",onkeyup:"this.value=this.value.match(/\\d+\\.?\\d{0,2}/)",onafterpaste:"this.value=this.value.match(/\\d+\\.?\\d{0,2}/)",placeholder:"请输入金额",size:"1",autocomplete:"off",maxlength:e.inputlength},domProps:{value:e.inputValue},on:{input:function(t){t.target.composing||(e.inputValue=t.target.value)}}}),i("img",{staticClass:"cncal",attrs:{src:a("6c4c"),alt:""},on:{click:e.cancel}})])]),i("div",{staticClass:"order-amount display"},[i("div",[e._v("卡券核销")]),i("div",{staticClass:"input display"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.couponNo,expression:"couponNo"}],staticStyle:{"margin-left":"20px"},attrs:{type:"text",id:"verification",placeholder:"请输入核销码",size:"1",autocomplete:"off"},domProps:{value:e.couponNo},on:{input:function(t){t.target.composing||(e.couponNo=t.target.value)}}}),i("div",{staticClass:"dicout display"},[i("div",{on:{click:e.verificationFn}},[i("img",{attrs:{src:a("2e69"),alt:""}})]),i("button",{on:{click:function(t){return e.checkCoupon()}}},[e._v("确认")])])])]),i("div",{staticClass:"sorts-amount"},[i("div",{staticClass:"should-amount display"},[i("p",[e._v("应付金额")]),i("p",[e._v("￥"+e._s(e.shouldAmount||"0.00"))])]),i("div",{staticClass:"should-amount display"},[i("p",[e._v("优惠金额")]),i("p",[e._v("￥"+e._s(e.dicoutAmout||"0.00"))])])])]),i("div",{staticClass:"remark display"},[i("p",[e._v("备注")]),i("input",{directives:[{name:"model",rawName:"v-model",value:e.remark,expression:"remark"}],attrs:{type:"text",placeholder:"请输入备注",size:"1",autocomplete:"off"},domProps:{value:e.remark},on:{input:function(t){t.target.composing||(e.remark=t.target.value)}}})]),i("div",{staticClass:"keyboard display",staticStyle:{"margin-top":"40px"}},[i("div",{staticClass:"keyboard-num noSelect"},e._l(e.numList,(function(t,a){return i("div",{key:a,class:{deepBackground:e.deepIndex==a+1},on:{click:function(i){return e.keyNumber(t,a)}}},[e._v(" "+e._s(t)+" ")])})),0),i("div",{staticClass:"operate"},[i("div",{class:{deepBackground:e.delLight},on:{click:e.delet}},[i("img",{attrs:{src:a("3257"),alt:""}})]),i("div",{staticClass:"reallybutton noSelect",staticStyle:{position:"relative"},on:{click:e.reallyPay}},[e._v(" 确认支付 ")])])]),i("div",{directives:[{name:"show",rawName:"v-show",value:e.payReaultFlage,expression:"payReaultFlage"}],staticClass:"pop-box"},[i("div",{staticClass:"pay-result"},[i("div",{staticClass:"pay-result-box"},[i("div",{directives:[{name:"show",rawName:"v-show",value:2==e.payReault,expression:"payReault == 2"}],staticClass:"pay-result-box-div"},[i("p",{staticClass:"setNumber"},[e._v(e._s(e.setNumber)+"s")]),i("img",{attrs:{src:a("8718"),alt:""}}),i("p",[e._v("支付成功")])]),i("div",{directives:[{name:"show",rawName:"v-show",value:-1==e.payReault,expression:"payReault == -1"}],staticClass:"pay-result-box-div"},[i("img",{attrs:{src:a("8222"),alt:""}}),i("p",[e._v("支付失败")])]),i("div",{staticClass:"order-number display"},[i("p",[e._v(" 订单编号"),i("span",[e._v(e._s(e.tradeOrderId))])]),i("img",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:e.tradeOrderId,expression:"tradeOrderId",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.onCopy,expression:"onCopy",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:e.onError,expression:"onError",arg:"error"},{name:"show",rawName:"v-show",value:e.tradeOrderId,expression:"tradeOrderId"}],attrs:{src:a("45fb"),alt:""}})]),i("div",{staticClass:"close",on:{click:e.closeUp}},[e._v("关闭")])])])]),i("div",{directives:[{name:"show",rawName:"v-show",value:e.payTypeFlage&&"payFace"!=e.payKey,expression:"payTypeFlage&&payKey != 'payFace'"}],staticClass:"pay-code"},[i("div",{directives:[{name:"show",rawName:"v-show",value:"payCode"==e.payKey,expression:"payKey == 'payCode'"}],staticClass:"pay-code-div"},[i("div",[e._m(0),i("p",{staticClass:"pay-code-p"},[e._v(e._s(e.codeFlase?"已扫码等待付款":"请扫描付款码收款"))])]),i("div",{on:{click:e.cancal}},[e._v("取消收款")])]),i("div",{directives:[{name:"show",rawName:"v-show",value:"scanCode"==e.payKey,expression:"payKey == 'scanCode'"}],staticClass:"pay-code-div",staticStyle:{background:"white"}},[i("div",{staticStyle:{height:"auto",background:"white"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:e.codeImgUrl,expression:"codeImgUrl"}],staticClass:"display code_img_url"},[i("img",{attrs:{src:e.codeImgUrl}})]),"scanCode"!=e.payKey||e.codeImgUrl?e._e():i("div",{staticClass:"display",staticStyle:{height:"174px"},attrs:{d:e.codeImgUrlFun()}},[e._m(1)]),i("div",{directives:[{name:"show",rawName:"v-show",value:e.codeImgUrl,expression:"codeImgUrl"}],staticClass:"twoCode display"},[i("img",{staticClass:"svg",attrs:{src:a("a3a8"),alt:""}}),i("img",{staticClass:"svg",attrs:{src:a("3c52"),alt:""}})]),i("p",{directives:[{name:"show",rawName:"v-show",value:e.codeImgUrl,expression:"codeImgUrl"}],staticClass:"pay-code-p",staticStyle:{background:"white",margin:"0px","padding-top":"10px"}},[e._v("请扫描二维码收款")])]),i("div",{staticStyle:{margin:"0"},on:{click:e.cancal}},[e._v("取消收款")])]),i("div",{directives:[{name:"show",rawName:"v-show",value:"payCash"==e.payKey,expression:"payKey == 'payCash'"}],staticClass:"pay-cash"},[e._m(2),i("div",{staticClass:"should-amount display"},[i("p",[e._v("实付金额")]),i("p",{staticStyle:{width:"auto",height:"auto",margin:"0","line-height":"auto"}},[e._v(" ￥ ")]),i("input",{directives:[{name:"model",rawName:"v-model",value:e.amountPaid,expression:"amountPaid"}],staticClass:"amountPaid-input",staticStyle:{width:"100px"},attrs:{id:"input_should",tabindex:"1",type:"text",onkeyup:"this.value=this.value.match(/\\d+\\.?\\d{0,2}/)",onafterpaste:"this.value=this.value.match(/\\d+\\.?\\d{0,2}/)",placeholder:"请输入金额",size:"1",autocomplete:"off"},domProps:{value:e.amountPaid},on:{input:function(t){t.target.composing||(e.amountPaid=t.target.value)}}})]),i("div",{staticClass:"should-amount display"},[i("p",[e._v("找零金额")]),i("p",{staticStyle:{"text-align":"left"}},[i("span",{staticStyle:{"margin-right":"10px"}},[e._v("￥")]),e._v(e._s(e.changeAmount))])]),i("div",{staticClass:"really-button display"},[i("button",{on:{click:e.cancal}},[e._v("取消")]),i("button",{on:{click:function(t){return e.cashClicOkFn()}}},[e._v("确认")])])]),i("div",{directives:[{name:"show",rawName:"v-show",value:"payMember"==e.payKey,expression:"payKey == 'payMember'"}],staticClass:"pay-member"},[i("div",{staticStyle:{background:"#f3f3f3",overflow:"hidden"}},[e._m(3),i("div",{staticClass:"pay-member-card display",staticStyle:{paddingBottom:"10px"}},[i("div",[i("input",{directives:[{name:"model",rawName:"v-model",value:e.memberPhneCard,expression:"memberPhneCard"},{name:"show",rawName:"v-show",value:!e.memberPayTypeCode,expression:"!memberPayTypeCode"}],attrs:{type:"text",size:"1",id:"memberPay",placeholder:"搜索会员手机号/卡号",autocomplete:"off"},domProps:{value:e.memberPhneCard},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.eneter(t)},input:function(t){t.target.composing||(e.memberPhneCard=t.target.value)}}}),i("input",{directives:[{name:"model",rawName:"v-model",value:e.memberPayTypeCode,expression:"memberPayTypeCode"},{name:"show",rawName:"v-show",value:e.memberPayTypeCode,expression:"memberPayTypeCode"}],attrs:{type:"text",size:"1",id:"inpin",placeholder:"扫描付款码",autocomplete:"off"},domProps:{value:e.memberPayTypeCode},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.eneter1(t)},input:function(t){t.target.composing||(e.memberPayTypeCode=t.target.value)}}})]),i("div",{on:{click:e.open}},[i("img",{attrs:{src:a("2e69"),alt:""}}),i("P",[e._v("付款码")])],1)]),i("div",{directives:[{name:"show",rawName:"v-show",value:e.getAllMemberInfo,expression:"getAllMemberInfo"}],staticClass:"pay-member-mess"},[i("div",{staticClass:"display pay-member-mess-name"},[i("p",[e._v("姓名："),i("span",[e._v(e._s(e.getAllMemberInfo.memberName))])])]),i("div",[i("p",[e._v("卡号："),i("span",[e._v(e._s(e.getAllMemberInfo.memberNo))])])]),i("div",[i("p",[e._v("电话："),i("span",[e._v(e._s(e.getAllMemberInfo.tel))])])]),i("div",[i("p",[e._v("余额："),i("span",[e._v("￥"+e._s(e.getAllMemberInfo.balance))])])]),i("div",[i("p",{directives:[{name:"show",rawName:"v-show",value:e.getAllMemberInfo.balance-e.amountPaid>=0,expression:"(getAllMemberInfo.balance)-amountPaid>=0"}]},[e._v("交易后余额："),i("span",[e._v("￥"+e._s(e.getAllMemberInfo.balance-e.amountPaid))])])])])]),i("div",{staticClass:"really-button1 display"},[i("button",{on:{click:e.cancal}},[e._v("取消")]),i("button",{on:{click:e.payreally}},[e._v("确认")])])])])])])])},r=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"display"},[i("img",{attrs:{src:a("fa37")}}),i("p",{staticClass:"onltP"},[e._v("支付中…")])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticStyle:{margin:"0 auto","margin-bottom":"0",background:"white",height:"100%"}},[i("img",{staticStyle:{width:"40px",height:"40px"},attrs:{src:a("65bc"),alt:""}}),i("p",[e._v("获取二维码失败，请重试")])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"pay-cash-really"},[i("img",{attrs:{src:a("bcb9"),alt:""}}),i("p",[e._v("现金支付确认")])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"pay-member-title display"},[i("img",{attrs:{src:a("4d68"),alt:""}}),i("p",[e._v("会员支付确认")])])}],u=(a("c975"),a("b680"),a("d3b7"),a("ac1f"),a("25f0"),a("466d"),a("1276"),{data:function(){return{imgList:[{imgSrc:a("fa37"),text:"付款码支付",color:"#17c2b2",key:"payCode"},{imgSrc:a("65bc"),text:"扫码支付",color:"#000000",key:"scanCode"},{imgSrc:a("3f9d"),text:"刷脸支付",color:"#4784ff ",key:"payFace"},{imgSrc:a("bcb9"),text:"现金支付",color:"#ffb73b",key:"payCash"},{imgSrc:a("4d68"),text:"会员支付",color:"#d19710",key:"payMember"}],numList:["1","2","3","4","5","6","7","8","9",".","0","00"],deepIndex:"",imgIndex:"",time:"",delLight:!1,inputValue:"",inputitem:"",dicoutAmout:"0.00",amountPaid:"",shouldAmount:"0.00",changeAmount:"0.00",key:"payCode",payKey:"",payTypeFlage:!1,codeValue:"",tradeOrderId:"",payReault:"",payReaultFlage:!1,focusBoolan:!1,codeImgUrl:"",couponNo:"",verificationState:!1,memberPhneCard:"",getAllMemberInfo:"",memberPayTypeCode:"",memberCodeFlage:!1,a:"",couponState:!0,setNumber:5,inputFocus:"",codeFlase:"",remark:"",inputlength:7}},created:function(){this.amountPaid="0.00";var e=this;document.addEventListener("keyup",(function(){var t=window.event.keyCode;13!=t||e.verificationState||e.reallyPay()}))},mounted:function(){this.inputFocus=document.getElementById("input"),this.inputFocus.focus(),this.a=document.getElementById("inpin")},watch:{couponNo:function(e,t){parseFloat(e)<parseFloat(t)&&(this.dicoutAmout="0.00")},payKey:function(){this.codeImgUrl=null},inputValue:function(e){if(e){var t=e.indexOf(".");t>0&&(this.inputlength=10,e=e.substr(0,t+3)),this.shouldAmount=e,this.amountPaid=this.shouldAmount}else this.shouldAmount="",this.couponNo="",this.dicoutAmout="0.00"},dicoutAmout:function(e){e&&"0.00"!=e&&(parseFloat(this.inputValue)-parseFloat(this.dicoutAmout)>0?(this.shouldAmount=this.accSub(this.inputValue,e),this.amountPaid=this.shouldAmount):(this.amountPaid="0.01",this.shouldAmount="0.01"))},amountPaid:function(e){if("payCash"==this.payKey){var t=parseFloat(e)-parseFloat(this.shouldAmount);this.changeAmount=t>0?t:"0.00"}},codeValue:function(e){var t=this;console.log("扫码值",e);var a=this;this.amountPaid&&(console.log(this.codeFlase),e&&(this.codeFlase=!0,this.$axios.memberPay({requiredAmount:this.shouldAmount,realAmount:this.amountPaid,barCode:e,remark:this.remark}).then((function(e){console.log(e),t.tradeOrderId=e.tradeOrderId,1==e.orderStatus?t.time=setInterval((function(){a.referStatus(e.tradeOrderId)}),2e3):2==e.orderStatus&&(t.payReault=e.orderStatus,t.settimeout())}))))},memberPhneCard:function(){this.getAllMemberInfo=""},memberPayTypeCode:function(){}},methods:{onCopy:function(){this.messageTip("复制成功","success")},onError:function(){this.$message.error("复制失败")},closeUp:function(){this.empty()},eneter:function(){this.getMemberMess(2,this.memberPhneCard)},open:function(){this.memberCodeFlage=!0,this.memberPayCode="",this.memberPhneCard="",this.a.focus(),this.onkeydown(),this.messageTip("请扫描付款码","info")},messageTip:function(e,t){this.$message({message:e,duration:2e3,type:t})},getMemberMess:function(e,t){var a=this;this.$axios.getAllMemberInfo({type:e,memberId:t}).then((function(e){e=JSON.stringify(e),"{}"===e?a.getAllMemberInfo="":(a.getAllMemberInfo=JSON.parse(e),document.onkeydown=function(){},a.memberCodeFlage=!1)})).catch((function(e){a.$message(e.msg),a.getAllMemberInfo=""}))},onkeydown:function(){var e=this,t="",a=this;a.codeValue="",document.onkeydown=function(){if(13!=event.keyCode){var i=String.fromCharCode(event.keyCode);event.keyCode>=48&&event.keyCode<=122&&(t+=i)}else console.log("payMember"==a.payKey,a.memberCodeFlage,a.payKey,a.key),e.verificationState?(setTimeout((function(){a.verificationState=!1}),0),console.log("3422222243")):a.payTypeFlage&&(t=JSON.parse(JSON.stringify(t)),"payCode"==a.payKey?a.codeValue=t:"payMember"==a.payKey&&a.memberCodeFlage&&(a.memberPayTypeCode=t,e.getMemberMess(3,JSON.parse(JSON.stringify(t))))),t=""}},chooseType:function(e,t){this.imgIndex=e,this.key=t,this.tradeOrderId=""},keyNumber:function(e,t){var a=this;this.deepIndex=t+1,this.inputitem+=e,this.inputValue=this.inputitem.match(/\d+\.?\d{0,2}/).toString(),setTimeout((function(){a.deepIndex=""}),400)},cancel:function(){this.inputValue="",this.inputitem=""},delet:function(){var e=this;this.inputValue.length>0?(this.inputitem=this.inputitem.substr(0,this.inputValue.length-1),this.inputValue=this.inputValue.substr(0,this.inputValue.length-1),this.delLight=!0,setTimeout((function(){e.delLight=!1}),400)):this.inputValue=""},reallyPay:function(){var e=document.getElementById("input");e.blur(),"payFace"==this.key&&this.$message("刷脸支付暂未开通，敬请期待"),"payCode"==this.key?this.onkeydown():"payMember"==this.key&&document.getElementById("memberPay").focus(),this.inputValue&&(this.focusBoolan=!0,this.payKey=this.key,this.payKey&&(this.payTypeFlage=!0))},cancal:function(){this.empty(),this.time&&clearInterval(this.time)},referStatusCode:function(e){var t=this;this.time=setInterval((function(){t.referStatus(e)}),2e3)},referStatus:function(e){var t=this,a=this;this.$axios.queryStatus({tradeOrderId:e}).then((function(e){a.payReault=e.orderStatus,console.log(e),2!=e.orderStatus&&-1!=e.orderStatus||(clearInterval(t.time),t.settimeout())}))},codeImgUrlFun:function(){var e=this;console.log(this.amountPaid);var t=this.amountPaid;if("0.00"!=t){var a=this;this.$axios.viewCodeAmount({payAmount:t}).then((function(t){e.codeImgUrl=t.codeImgUrl,a.time=setInterval((function(){a.referStatus(t.tradeOrderId)}),2e3)}))}},verificationFn:function(){this.messageTip("请扫描核销码","info"),this.couponNo="",this.verificationState=!0,document.getElementById("verification").focus(),this.onkeydown()},checkCoupon:function(){var e=this,t=this.couponNo,a=this.shouldAmount,i=this.couponState;this.couponState=!i,i&&t.length&&this.$axios.checkCouponPost({couponNo:t,amount:a}).then((function(t){console.log(t),e.dicoutAmout=t.couponAmount/100,e.verificationState=!1,document.onkeydown=function(){},e.messageTip("核销成功","success"),e.couponState=!1})).catch((function(t){console.log("err",t),e.$message.error(t.msg),e.verificationState=!1}))},cashClicOkFn:function(){var e=this,t=this.amountPaid,a=this.shouldAmount;this.$axios.cash({requiredAmount:t,realAmount:a,remark:this.remark}).then((function(t){var a;e.tradeOrderId=null!==(a=null===t||void 0===t?void 0:t.tradeOrderId)&&void 0!==a?a:"",2==t.orderStatus&&e.referStatus(t.tradeOrderId)}))},accept:function(e){alert("Input text: "+e),this.hide()},show:function(e){this.input=e.target,this.layout=e.target.dataset.layout,this.visible||(this.visible=!0)},hide:function(){this.visible=!1},inputShouldFn:function(){return document.getElementById("input_should")},payreally:function(){var e=this;this.memberPhneCard&&!this.getAllMemberInfo?this.getMemberMess(2,this.memberPhneCard):this.getAllMemberInfo&&this.$axios.memberPayBalance({requiredAmount:this.inputValue,realAmount:this.inputValue,memberNo:this.memberPhneCard,memberPayCode:this.memberPayTypeCode,remark:this.remark}).then((function(t){console.log(t),t=JSON.stringify(t),"{}"===t?e.payReault=-1:(e.payReault=JSON.parse(t).orderStatus,e.tradeOrderId=JSON.parse(t).tradeOrderId),e.settimeout()})).catch((function(t){e.$message.error(t.msg)}))},settimeout:function(){var e=this;e.payKey="",e.payTypeFlage=!1,e.payReaultFlage=!0;var t=setInterval((function(){e.setNumber-=1}),1e3);setTimeout((function(){clearInterval(t),e.empty()}),5e3)},empty:function(){var e=this;e.payReaultFlage=!1,e.payReault="",e.inputValue="",e.inputitem="",e.couponNo="",e.setNumber=5,e.codeFlase="",e.changeAmount="0.00",e.remark="",e.inputFocus.focus(),e.payKey="",e.memberCodeFlage=!1,e.payTypeFlage=!1,(e.memberPayTypeCode||e.memberPhneCard)&&(e.memberPayTypeCode="",e.memberPhneCard="",e.getAllMemberInfo="")},accSub:function(e,t){var a,i,o,s;try{a=e.toString().split(".")[1].length}catch(n){a=0}try{i=t.toString().split(".")[1].length}catch(n){i=0}return o=Math.pow(10,Math.max(a,i)),s=a>=i?a:i,((e*o-t*o)/o).toFixed(s)}}}),c=u,l=(a("cbed"),a("2877")),d=Object(l["a"])(c,n,r,!1,null,null,null),p=d.exports,m={name:"App",components:{index:p}},h=m,v=(a("034f"),Object(l["a"])(h,o,s,!1,null,null,null)),y=v.exports,f=(a("99af"),a("4160"),a("159b"),a("5530")),g=a("2909"),b=a("d4ec"),C=a("bee2"),w=a("ade3"),x=a("bc3a"),_=a.n(x),k="";_.a.defaults.baseURL="https://www.juhezhifu.com/api",_.a.defaults.headers["Content-Type"]="application/x-www-form-urlencoded",_.a.interceptors.request.use((function(e){var t=localStorage.getItem("layuiAdmin"),a=JSON.parse(t).Authorization||"";return a&&(e.headers.authorization=a),e.headers.mpVersion="0.0.0",e}),(function(e){return Promise.reject(e)})),_.a.defaults.transformRequest=function(e){if(!e)return e;var t="";for(var a in e)t+="&".concat(a,"=").concat(e[a]);return t.substring(1)},_.a.defaults.validateStatus=function(e){return/^(2|3)\d{2}$/.test(e)},_.a.defaults.withCredentials=!0,_.a.interceptors.response.use((function(e){var t,a;return clearTimeout(k),0!=e.data.code?Promise.reject(e.data):null!==(t=null===e||void 0===e||null===(a=e.data)||void 0===a?void 0:a.data)&&void 0!==t?t:{}}),(function(e){if(clearTimeout(k),!e.response){if(!window.navigator.onLine)return;return Promise.reject(e)}switch(e.response.status){case 401:alert("401");break;case 403:alert("403");break;case 404:alert("404");break;default:alert("请求出错");break}}));var P=_.a,S=[["memberPay","/memberPay/bar","GET"],["queryStatus","/memberPay/queryStatus","GET"],["getAllMemberInfo","/member/getAllMemberInfo","GET"],["memberPayBalance","memberPay/balance","GET"]],I=[["viewCodeAmount","/mch_qrcode/view_code_amount","GET"],["checkCouponPost","/member_coupon/checkCoupon","POST"],["cash","/memberPay/cash","POST"]],N=function(){function e(){Object(b["a"])(this,e),Object(w["a"])(this,"apiPath",[].concat(Object(g["a"])(S),Object(g["a"])(I))),Object(w["a"])(this,"_apiconfig",{}),this._init()}return Object(C["a"])(e,[{key:"_init",value:function(){var e=this;this.apiPath.forEach((function(t){t[2]?e._apiconfig[t[0]]=function(e){return(null===e||void 0===e?void 0:e.url)&&(e.url.forEach((function(e){e[1]+="/"+e})),delete e.url),"GET"!=t[2]&&t[2]?P[t[2].toLowerCase()](t[1],Object(f["a"])({},e)):P[t[2].toLowerCase()](t[1],{params:Object(f["a"])({},e)})}:e.apiPath.forEach((function(t){e.$apiconfig[t[0]]=function(){return P.get(t[0])}}))}))}}]),e}(),A=new N,O=a("4eb5"),T=a.n(O),F=a("5c96"),M=a.n(F);a("0fae");i["default"].use(M.a),i["default"].use(T.a),i["default"].prototype.$axios=A._apiconfig,i["default"].config.productionTip=!1,new i["default"]({render:function(e){return e(y)}}).$mount("#app")},"65bc":function(e,t,a){e.exports=a.p+"img/sm.f28a74dd.svg"},"6c4c":function(e,t,a){e.exports=a.p+"img/qx.def4e220.svg"},8222:function(e,t,a){e.exports=a.p+"img/zfsb.5381f0be.svg"},"85ec":function(e,t,a){},8718:function(e,t,a){e.exports=a.p+"img/zfcg.78fd52ac.svg"},a3a8:function(e,t,a){e.exports=a.p+"img/alipay.f4d03c09.svg"},a869:function(e,t,a){},bcb9:function(e,t,a){e.exports=a.p+"img/xj.ccb872e4.svg"},cbed:function(e,t,a){"use strict";var i=a("a869"),o=a.n(i);o.a},fa37:function(e,t,a){e.exports=a.p+"img/fk.d0f95839.svg"}});
//# sourceMappingURL=app.e8debf5c.js.map