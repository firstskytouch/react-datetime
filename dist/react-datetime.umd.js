!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react"),require("moment"),require("react-dom")):"function"==typeof define&&define.amd?define(["react","moment","react-dom"],t):"object"==typeof exports?exports.Datetime=t(require("react"),require("moment"),require("react-dom")):e.Datetime=t(e.react,e.moment,e["react-dom"])}(window,(function(e,t,n){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t,n){e.exports=n(5)()},function(e,t){e.exports=n},function(e,t,n){e.exports=n(7)},function(e,t,n){"use strict";var r=n(6);function o(){}function a(){}a.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,a,i){if(i!==r){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:o};return n.PropTypes=n,n}},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){"use strict";n.r(t);var r=n(2),o=n.n(r),a=n(1),i=n.n(a),s=n(0),c=n.n(s);function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function l(e){var t=e.onClickPrev,n=e.onClickSwitch,r=e.onClickNext,o=e.switchContent,a=e.switchColSpan,i=e.switchProps;return c.a.createElement("tr",null,c.a.createElement("th",{className:"rdtPrev",onClick:t},c.a.createElement("span",null,"‹")),c.a.createElement("th",u({className:"rdtSwitch",colSpan:a,onClick:n},i),o),c.a.createElement("th",{className:"rdtNext",onClick:r},c.a.createElement("span",null,"›")))}function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=b(e);if(t){var o=b(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return y(this,n)}}function y(e,t){if(t&&("object"===p(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return v(e)}function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var w=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(a,e);var t,n,r,o=m(a);function a(){var e;f(this,a);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return g(v(e=o.call.apply(o,[this].concat(n))),"_setDate",(function(t){e.props.updateDate(t)})),e}return t=a,(n=[{key:"render",value:function(){return c.a.createElement("div",{className:"rdtDays"},c.a.createElement("table",null,c.a.createElement("thead",null,this.renderNavigation(),this.renderDayHeaders()),c.a.createElement("tbody",null,this.renderDays()),this.renderFooter()))}},{key:"renderNavigation",value:function(){var e=this,t=this.props.viewDate,n=t.localeData();return c.a.createElement(l,{onClickPrev:function(){return e.props.navigate(-1,"months")},onClickSwitch:function(){return e.props.showView("months")},onClickNext:function(){return e.props.navigate(1,"months")},switchContent:n.months(t)+" "+t.year(),switchColSpan:5,switchProps:{"data-value":this.props.viewDate.month()}})}},{key:"renderDayHeaders",value:function(){var e=function(e){var t=e.firstDayOfWeek(),n=[],r=0;return e._weekdaysMin.forEach((function(e){n[(7+r++-t)%7]=e})),n}(this.props.viewDate.localeData()).map((function(e,t){return c.a.createElement("th",{key:e+t,className:"dow"},e)}));return c.a.createElement("tr",null,e)}},{key:"renderDays",value:function(){var e=this.props.viewDate,t=e.clone().startOf("month"),n=e.clone().endOf("month"),r=[[],[],[],[],[],[]],o=e.clone().subtract(1,"months");o.date(o.daysInMonth()).startOf("week");for(var a=o.clone().add(42,"d"),i=0;o.isBefore(a);)O(r,i++).push(this.renderDay(o,t,n)),o.add(1,"d");return r.map((function(e,t){return c.a.createElement("tr",{key:"".concat(a.month(),"_").concat(t)},e)}))}},{key:"renderDay",value:function(e,t,n){var r=this.props.selectedDate,o={key:e.format("M_D"),"data-value":e.date(),"data-month":e.month(),"data-year":e.year()},a="rdtDay";return e.isBefore(t)?a+=" rdtOld":e.isAfter(n)&&(a+=" rdtNew"),r&&e.isSame(r,"day")&&(a+=" rdtActive"),e.isSame(this.props.moment(),"day")&&(a+=" rdtToday"),this.props.isValidDate(e)?o.onClick=this._setDate:a+=" rdtDisabled",o.className=a,this.props.renderDay(o,e.clone(),r&&r.clone())}},{key:"renderFooter",value:function(){var e=this;if(this.props.timeFormat){var t=this.props.viewDate;return c.a.createElement("tfoot",null,c.a.createElement("tr",null,c.a.createElement("td",{onClick:function(){return e.props.showView("time")},colSpan:7,className:"rdtTimeToggle"},t.format(this.props.timeFormat))))}}}])&&d(t.prototype,n),r&&d(t,r),a}(c.a.Component);function O(e,t){return e[Math.floor(t/7)]}function D(e){return(D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function k(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _(e,t){return(_=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function E(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=j(e);if(t){var o=j(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return P(this,n)}}function P(e,t){if(t&&("object"===D(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return S(e)}function S(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function j(e){return(j=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function V(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}g(w,"defaultProps",{isValidDate:function(){return!0},renderDay:function(e,t){return c.a.createElement("td",e,t.date())}});var T=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_(e,t)}(a,e);var t,n,r,o=E(a);function a(){var e;k(this,a);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return V(S(e=o.call.apply(o,[this].concat(n))),"_updateSelectedMonth",(function(t){e.props.updateDate(t)})),e}return t=a,(n=[{key:"render",value:function(){return c.a.createElement("div",{className:"rdtMonths"},c.a.createElement("table",null,c.a.createElement("thead",null,this.renderNavigation())),c.a.createElement("table",null,c.a.createElement("tbody",null,this.renderMonths())))}},{key:"renderNavigation",value:function(){var e=this,t=this.props.viewDate.year();return c.a.createElement(l,{onClickPrev:function(){return e.props.navigate(-1,"years")},onClickSwitch:function(){return e.props.showView("years")},onClickNext:function(){return e.props.navigate(1,"years")},switchContent:t,switchColSpan:"2"})}},{key:"renderMonths",value:function(){for(var e=[[],[],[]],t=0;t<12;t++)N(e,t).push(this.renderMonth(t));return e.map((function(e,t){return c.a.createElement("tr",{key:t},e)}))}},{key:"renderMonth",value:function(e){var t,n=this.props.selectedDate,r="rdtMonth";this.isDisabledMonth(e)?r+=" rdtDisabled":t=this._updateSelectedMonth,n&&n.year()===this.props.viewDate.year()&&n.month()===e&&(r+=" rdtActive");var o={key:e,className:r,"data-value":e,onClick:t};return this.props.renderMonth?this.props.renderMonth(o,e,this.props.viewDate.year(),this.props.selectedDate&&this.props.selectedDate.clone()):c.a.createElement("td",o,this.getMonthText(e))}},{key:"isDisabledMonth",value:function(e){var t=this.props.isValidDate;if(!t)return!1;for(var n=this.props.viewDate.clone().set({month:e}),r=n.endOf("month").date()+1;r-- >1;)if(t(n.date(r)))return!1;return!0}},{key:"getMonthText",value:function(e){var t,n=this.props.viewDate,r=n.localeData().monthsShort(n.month(e));return(t=r.substring(0,3)).charAt(0).toUpperCase()+t.slice(1)}}])&&C(t.prototype,n),r&&C(t,r),a}(c.a.Component);function N(e,t){return t<4?e[0]:t<8?e[1]:e[2]}function x(e){return(x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function F(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function I(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function R(e,t){return(R=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function M(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=B(e);if(t){var o=B(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Y(this,n)}}function Y(e,t){if(t&&("object"===x(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return L(e)}function L(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function B(e){return(B=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function A(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var H=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&R(e,t)}(a,e);var t,n,r,o=M(a);function a(){var e;F(this,a);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return A(L(e=o.call.apply(o,[this].concat(n))),"disabledYearsCache",{}),A(L(e),"_updateSelectedYear",(function(t){e.props.updateDate(t)})),e}return t=a,(n=[{key:"render",value:function(){return c.a.createElement("div",{className:"rdtYears"},c.a.createElement("table",null,c.a.createElement("thead",null,this.renderNavigation())),c.a.createElement("table",null,c.a.createElement("tbody",null,this.renderYears())))}},{key:"renderNavigation",value:function(){var e=this,t=this.getViewYear();return c.a.createElement(l,{onClickPrev:function(){return e.props.navigate(-10,"years")},onClickSwitch:function(){return e.props.showView("years")},onClickNext:function(){return e.props.navigate(10,"years")},switchContent:"".concat(t,"-").concat(t+9)})}},{key:"renderYears",value:function(){for(var e=this.getViewYear(),t=[[],[],[]],n=e-1;n<e+11;n++)U(t,n-e).push(this.renderYear(n));return t.map((function(e,t){return c.a.createElement("tr",{key:t},e)}))}},{key:"renderYear",value:function(e){var t,n=this.getSelectedYear(),r="rdtYear";this.isDisabledYear(e)?r+=" rdtDisabled":t=this._updateSelectedYear,n===e&&(r+=" rdtActive");var o={key:e,className:r,"data-value":e,onClick:t};return this.props.renderYear(o,e,this.props.selectedDate&&this.props.selectedDate.clone())}},{key:"getViewYear",value:function(){return 10*parseInt(this.props.viewDate.year()/10,10)}},{key:"getSelectedYear",value:function(){return this.props.selectedDate&&this.props.selectedDate.year()}},{key:"isDisabledYear",value:function(e){var t=this.disabledYearsCache;if(void 0!==t[e])return t[e];var n=this.props.isValidDate;if(!n)return!1;for(var r=this.props.viewDate.clone().set({year:e}),o=r.endOf("year").dayOfYear()+1;o-- >1;)if(n(r.dayOfYear(o)))return t[e]=!1,!1;return t[e]=!0,!0}}])&&I(t.prototype,n),r&&I(t,r),a}(c.a.Component);function U(e,t){return t<3?e[0]:t<7?e[1]:e[2]}function Z(e){return(Z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function W(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function q(e,t){return(q=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function z(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=X(e);if(t){var o=X(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return K(this,n)}}function K(e,t){if(t&&("object"===Z(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function X(e){return(X=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function G(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function J(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?G(Object(n),!0).forEach((function(t){Q(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):G(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function Q(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}A(H,"defaultProps",{renderYear:function(e,t){return c.a.createElement("td",e,t)}});var $={hours:{min:0,max:23,step:1},minutes:{min:0,max:59,step:1},seconds:{min:0,max:59,step:1},milliseconds:{min:0,max:999,step:1}};var ee=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&q(e,t)}(a,e);var t,n,r,o=z(a);function a(e){var t,n,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=o.call(this,e)).constraints=(n=e.timeConstraints,r={},Object.keys($).forEach((function(e){r[e]=J(J({},$[e]),n[e]||{})})),r),t.state=t.getTimeParts(e.selectedDate||e.viewDate),t}return t=a,(n=[{key:"render",value:function(){var e=this,t=[],n=this.state;return this.getCounters().forEach((function(r,o){o&&"ampm"!==r&&t.push(c.a.createElement("div",{key:"sep".concat(o),className:"rdtCounterSeparator"},":")),t.push(e.renderCounter(r,n[r]))})),c.a.createElement("div",{className:"rdtTime"},c.a.createElement("table",null,this.renderHeader(),c.a.createElement("tbody",null,c.a.createElement("tr",null,c.a.createElement("td",null,c.a.createElement("div",{className:"rdtCounters"},t))))))}},{key:"renderCounter",value:function(e,t){var n=this;return"hours"===e&&this.isAMPM()&&0==(t=(t-1)%12+1)&&(t=12),"ampm"===e&&(t=-1!==this.props.timeFormat.indexOf(" A")?this.props.viewDate.format("A"):this.props.viewDate.format("a")),c.a.createElement("div",{key:e,className:"rdtCounter"},c.a.createElement("span",{className:"rdtBtn",onMouseDown:function(t){return n.onStartClicking(t,"increase",e)}},"▲"),c.a.createElement("div",{className:"rdtCount"},t),c.a.createElement("span",{className:"rdtBtn",onMouseDown:function(t){return n.onStartClicking(t,"decrease",e)}},"▼"))}},{key:"renderHeader",value:function(){var e=this;if(this.props.dateFormat){var t=this.props.selectedDate||this.props.viewDate;return c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("td",{className:"rdtSwitch",colSpan:"4",onClick:function(){return e.props.showView("days")}},t.format(this.props.dateFormat))))}}},{key:"onStartClicking",value:function(e,t,n){var r=this;if(!e||!e.button||0===e.button){if("ampm"===n)return this.toggleDayPart();var o={},a=document.body;o[n]=this[t](n),this.setState(o),this.timer=setTimeout((function(){r.increaseTimer=setInterval((function(){o[n]=r[t](n),r.setState(o)}),70)}),500),this.mouseUpListener=function(){clearTimeout(r.timer),clearInterval(r.increaseTimer),r.props.setTime(n,parseInt(r.state[n],10)),a.removeEventListener("mouseup",r.mouseUpListener),a.removeEventListener("touchend",r.mouseUpListener)},a.addEventListener("mouseup",this.mouseUpListener),a.addEventListener("touchend",this.mouseUpListener)}}},{key:"toggleDayPart",value:function(){var e=parseInt(this.state.hours,10);e>=12?e-=12:e+=12,this.props.setTime("hours",e)}},{key:"increase",value:function(e){var t=this.constraints[e],n=parseInt(this.state[e],10)+t.step;return n>t.max&&(n=t.min+(n-(t.max+1))),te(e,n)}},{key:"decrease",value:function(e){var t=this.constraints[e],n=parseInt(this.state[e],10)-t.step;return n<t.min&&(n=t.max+1-(t.min-n)),te(e,n)}},{key:"getCounters",value:function(){var e=[],t=this.props.timeFormat;return-1!==t.toLowerCase().indexOf("h")&&(e.push("hours"),-1!==t.indexOf("m")&&(e.push("minutes"),-1!==t.indexOf("s")&&(e.push("seconds"),-1!==t.indexOf("S")&&e.push("milliseconds")))),this.isAMPM()&&e.push("ampm"),e}},{key:"isAMPM",value:function(){return-1!==this.props.timeFormat.toLowerCase().indexOf(" a")}},{key:"getTimeParts",value:function(e){var t=e.hours();return{hours:te("hours",t),minutes:te("minutes",e.minutes()),seconds:te("seconds",e.seconds()),milliseconds:te("milliseconds",e.milliseconds()),ampm:t<12?"am":"pm"}}},{key:"componentDidUpdate",value:function(e){this.props.selectedDate?this.props.selectedDate!==e.selectedDate&&this.setState(this.getTimeParts(this.props.selectedDate)):e.viewDate!==this.props.viewDate&&this.setState(this.getTimeParts(this.props.viewDate))}}])&&W(t.prototype,n),r&&W(t,r),a}(c.a.Component);function te(e,t){for(var n={hours:1,minutes:2,seconds:2,milliseconds:3},r=t+"";r.length<n[e];)r="0"+r;return r}var ne=n(3);function re(e,t){return(re=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function oe(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ae(e,t,n){return e===t||(e.correspondingElement?e.correspondingElement.classList.contains(n):e.classList.contains(n))}var ie,se,ce=(void 0===ie&&(ie=0),function(){return++ie}),ue={},le={},pe=["touchstart","touchmove"];function fe(e,t){var n=null;return-1!==pe.indexOf(t)&&se&&(n={passive:!e.props.preventDefault}),n}var de=function(e,t){var n,r,o=e.displayName||e.name||"Component";return r=n=function(n){var r,a;function i(e){var r;return(r=n.call(this,e)||this).__outsideClickHandler=function(e){if("function"!=typeof r.__clickOutsideHandlerProp){var t=r.getInstance();if("function"!=typeof t.props.handleClickOutside){if("function"!=typeof t.handleClickOutside)throw new Error("WrappedComponent: "+o+" lacks a handleClickOutside(event) function for processing outside click events.");t.handleClickOutside(e)}else t.props.handleClickOutside(e)}else r.__clickOutsideHandlerProp(e)},r.__getComponentNode=function(){var e=r.getInstance();return t&&"function"==typeof t.setClickOutsideRef?t.setClickOutsideRef()(e):"function"==typeof e.setClickOutsideRef?e.setClickOutsideRef():Object(ne.findDOMNode)(e)},r.enableOnClickOutside=function(){if("undefined"!=typeof document&&!le[r._uid]){void 0===se&&(se=function(){if("undefined"!=typeof window&&"function"==typeof window.addEventListener){var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}}),n=function(){};return window.addEventListener("testPassiveEventSupport",n,t),window.removeEventListener("testPassiveEventSupport",n,t),e}}()),le[r._uid]=!0;var e=r.props.eventTypes;e.forEach||(e=[e]),ue[r._uid]=function(e){var t;null!==r.componentNode&&(r.props.preventDefault&&e.preventDefault(),r.props.stopPropagation&&e.stopPropagation(),r.props.excludeScrollbar&&(t=e,document.documentElement.clientWidth<=t.clientX||document.documentElement.clientHeight<=t.clientY)||function(e,t,n){if(e===t)return!0;for(;e.parentNode||e.host;){if(e.parentNode&&ae(e,t,n))return!0;e=e.parentNode||e.host}return e}(e.composed&&e.composedPath&&e.composedPath().shift()||e.target,r.componentNode,r.props.outsideClickIgnoreClass)===document&&r.__outsideClickHandler(e))},e.forEach((function(e){document.addEventListener(e,ue[r._uid],fe(oe(r),e))}))}},r.disableOnClickOutside=function(){delete le[r._uid];var e=ue[r._uid];if(e&&"undefined"!=typeof document){var t=r.props.eventTypes;t.forEach||(t=[t]),t.forEach((function(t){return document.removeEventListener(t,e,fe(oe(r),t))})),delete ue[r._uid]}},r.getRef=function(e){return r.instanceRef=e},r._uid=ce(),r}a=n,(r=i).prototype=Object.create(a.prototype),r.prototype.constructor=r,re(r,a);var c=i.prototype;return c.getInstance=function(){if(e.prototype&&!e.prototype.isReactComponent)return this;var t=this.instanceRef;return t.getInstance?t.getInstance():t},c.componentDidMount=function(){if("undefined"!=typeof document&&document.createElement){var e=this.getInstance();if(t&&"function"==typeof t.handleClickOutside&&(this.__clickOutsideHandlerProp=t.handleClickOutside(e),"function"!=typeof this.__clickOutsideHandlerProp))throw new Error("WrappedComponent: "+o+" lacks a function for processing outside click events specified by the handleClickOutside config option.");this.componentNode=this.__getComponentNode(),this.props.disableOnClickOutside||this.enableOnClickOutside()}},c.componentDidUpdate=function(){this.componentNode=this.__getComponentNode()},c.componentWillUnmount=function(){this.disableOnClickOutside()},c.render=function(){var t=this.props;t.excludeScrollbar;var n=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(t,["excludeScrollbar"]);return e.prototype&&e.prototype.isReactComponent?n.ref=this.getRef:n.wrappedRef=this.getRef,n.disableOnClickOutside=this.disableOnClickOutside,n.enableOnClickOutside=this.enableOnClickOutside,Object(s.createElement)(e,n)},i}(s.Component),n.displayName="OnClickOutside("+o+")",n.defaultProps={eventTypes:["mousedown","touchstart"],excludeScrollbar:t&&t.excludeScrollbar||!1,outsideClickIgnoreClass:"ignore-react-onclickoutside",preventDefault:!1,stopPropagation:!1},n.getClass=function(){return e.getClass?e.getClass():e},r};function he(e){return(he="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function me(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ye(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?me(Object(n),!0).forEach((function(t){Ee(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):me(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function ve(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function be(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function ge(e,t,n){return t&&be(e.prototype,t),n&&be(e,n),e}function we(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Oe(e,t)}function Oe(e,t){return(Oe=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function De(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=_e(e);if(t){var o=_e(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return ke(this,n)}}function ke(e,t){if(t&&("object"===he(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return Ce(e)}function Ce(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _e(e){return(_e=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Ee(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"default",(function(){return Fe}));var Pe="years",Se="months",je="days",Ve="time",Te=o.a,Ne=function(){},xe=Te.oneOfType([Te.instanceOf(i.a),Te.instanceOf(Date),Te.string]),Fe=function(e){we(n,e);var t=De(n);function n(e){var r;return ve(this,n),Ee(Ce(r=t.call(this,e)),"_renderCalendar",(function(){var e=r.props,t=r.state,n={viewDate:t.viewDate.clone(),selectedDate:r.getSelectedDate(),isValidDate:e.isValidDate,updateDate:r._updateDate,navigate:r._viewNavigate,moment:i.a,showView:r._showView};switch(t.currentView){case Pe:return n.renderYear=e.renderYear,c.a.createElement(H,n);case Se:return n.renderMonth=e.renderMonth,c.a.createElement(T,n);case je:return n.renderDay=e.renderDay,n.timeFormat=r.getFormat("time"),c.a.createElement(w,n);default:return n.dateFormat=r.getFormat("date"),n.timeFormat=r.getFormat("time"),n.timeConstraints=e.timeConstraints,n.setTime=r._setTime,c.a.createElement(ee,n)}})),Ee(Ce(r),"_showView",(function(e,t){var n=(t||r.state.viewDate).clone(),o=r.props.onBeforeNavigate(e,r.state.currentView,n);o&&r.state.currentView!==o&&(r.props.onNavigate(o),r.setState({currentView:o}))})),Ee(Ce(r),"viewToMethod",{days:"date",months:"month",years:"year"}),Ee(Ce(r),"nextView",{days:"time",months:"days",years:"months"}),Ee(Ce(r),"_updateDate",(function(e){var t=r.state.currentView,n=r.getUpdateOn(r.getFormat("date")),o=r.state.viewDate.clone();o[r.viewToMethod[t]](parseInt(e.target.getAttribute("data-value"),10)),"days"===t&&(o.month(parseInt(e.target.getAttribute("data-month"),10)),o.year(parseInt(e.target.getAttribute("data-year"),10)));var a={viewDate:o};t===n?(a.selectedDate=o.clone(),a.inputValue=o.format(r.getFormat("datetime")),void 0===r.props.open&&r.props.input&&r.props.closeOnSelect&&r._closeCalendar(),r.props.onChange(o.clone())):r._showView(r.nextView[t],o),r.setState(a)})),Ee(Ce(r),"_viewNavigate",(function(e,t){var n=r.state.viewDate.clone();n.add(e,t),e>0?r.props.onNavigateForward(e,t):r.props.onNavigateBack(-e,t),r.setState({viewDate:n})})),Ee(Ce(r),"_setTime",(function(e,t){var n=(r.getSelectedDate()||r.state.viewDate).clone();n[e](t),r.props.value||r.setState({selectedDate:n,viewDate:n.clone(),inputValue:n.format(r.getFormat("datetime"))}),r.props.onChange(n)})),Ee(Ce(r),"_openCalendar",(function(){r.isOpen()||r.setState({open:!0},r.props.onOpen)})),Ee(Ce(r),"_closeCalendar",(function(){r.isOpen()&&r.setState({open:!1},(function(){r.props.onClose(r.state.selectedDate||r.state.inputValue)}))})),Ee(Ce(r),"_handleClickOutside",(function(){var e=r.props;e.input&&r.state.open&&void 0===e.open&&e.closeOnClickOutside&&r._closeCalendar()})),Ee(Ce(r),"_onInputFocus",(function(e){r.callHandler(r.props.inputProps.onFocus,e)&&r._openCalendar()})),Ee(Ce(r),"_onInputChange",(function(e){if(r.callHandler(r.props.inputProps.onChange,e)){var t=e.target?e.target.value:e,n=r.localMoment(t,r.getFormat("datetime")),o={inputValue:t};n.isValid()?(o.selectedDate=n,o.viewDate=n.clone().startOf("month")):o.selectedDate=null,r.setState(o,(function(){r.props.onChange(n.isValid()?n:r.state.inputValue)}))}})),Ee(Ce(r),"_onInputKeyDown",(function(e){r.callHandler(r.props.inputProps.onKeyDown,e)&&9===e.which&&r.props.closeOnTab&&r._closeCalendar()})),Ee(Ce(r),"_onInputClick",(function(e){r.callHandler(r.props.inputProps.onClick,e)&&r._openCalendar()})),r.state=r.getInitialState(),r}return ge(n,[{key:"render",value:function(){return c.a.createElement(Re,{className:this.getClassName(),onClickOut:this._handleClickOutside},this.renderInput(),c.a.createElement("div",{className:"rdtPicker"},this.renderView()))}},{key:"renderInput",value:function(){if(this.props.input){var e=ye(ye({type:"text",className:"form-control",value:this.getInputValue()},this.props.inputProps),{},{onFocus:this._onInputFocus,onChange:this._onInputChange,onKeyDown:this._onInputKeyDown,onClick:this._onInputClick});return this.props.renderInput?c.a.createElement("div",null,this.props.renderInput(e,this._openCalendar,this._closeCalendar)):c.a.createElement("input",e)}}},{key:"renderView",value:function(){return this.props.renderView(this.state.currentView,this._renderCalendar)}},{key:"getInitialState",value:function(){var e=this.props,t=this.getFormat("datetime"),n=this.parseDate(e.value||e.initialValue,t);return this.checkTZ(),{open:!e.input,currentView:e.initialViewMode||this.getInitialView(),viewDate:this.getInitialViewDate(n),selectedDate:n&&n.isValid()?n:void 0,inputValue:this.getInitialInputValue(n)}}},{key:"getInitialViewDate",value:function(e){var t,n=this.props.initialViewDate;if(n){if((t=this.parseDate(n,this.getFormat("datetime")))&&t.isValid())return t;Ie('The initialViewDated given "'+n+'" is not valid. Using current date instead.')}else if(e&&e.isValid())return e.clone();return this.getInitialDate()}},{key:"getInitialDate",value:function(){var e=this.localMoment();return e.hour(0).minute(0).second(0).millisecond(0),e}},{key:"getInitialView",value:function(){var e=this.getFormat("date");return e?this.getUpdateOn(e):Ve}},{key:"parseDate",value:function(e,t){var n;return e&&"string"==typeof e?n=this.localMoment(e,t):e&&(n=this.localMoment(e)),n&&!n.isValid()&&(n=null),n}},{key:"getClassName",value:function(){var e="rdt",t=this.props,n=t.className;return Array.isArray(n)?e+=" "+n.join(" "):n&&(e+=" "+n),t.input||(e+=" rdtStatic"),this.isOpen()&&(e+=" rdtOpen"),e}},{key:"isOpen",value:function(){return!this.props.input||(void 0===this.props.open?this.state.open:this.props.open)}},{key:"getUpdateOn",value:function(e){return this.props.updateOnView?this.props.updateOnView:e.match(/[lLD]/)?je:-1!==e.indexOf("M")?Se:-1!==e.indexOf("Y")?Pe:je}},{key:"getLocaleData",value:function(){var e=this.props;return this.localMoment(e.value||e.defaultValue||new Date).localeData()}},{key:"getDateFormat",value:function(){var e=this.getLocaleData(),t=this.props.dateFormat;return!0===t?e.longDateFormat("L"):t||""}},{key:"getTimeFormat",value:function(){var e=this.getLocaleData(),t=this.props.timeFormat;return!0===t?e.longDateFormat("LT"):t||""}},{key:"getFormat",value:function(e){if("date"===e)return this.getDateFormat();if("time"===e)return this.getTimeFormat();var t=this.getDateFormat(),n=this.getTimeFormat();return t&&n?t+" "+n:t||n}},{key:"updateTime",value:function(e,t,n,r){var o={},a=r?"selectedDate":"viewDate";o[a]=this.state[a].clone()[e](t,n),this.setState(o)}},{key:"localMoment",value:function(e,t,n){var r=null;return r=(n=n||this.props).utc?i.a.utc(e,t,n.strictParsing):n.displayTimeZone?i.a.tz(e,t,n.displayTimeZone):i()(e,t,n.strictParsing),n.locale&&r.locale(n.locale),r}},{key:"checkTZ",value:function(){var e=this.props.displayTimeZone;!e||this.tzWarning||i.a.tz||(this.tzWarning=!0,Ie('displayTimeZone prop with value "'+e+'" is used but moment.js timezone is not loaded.',"error"))}},{key:"componentDidUpdate",value:function(e){if(e!==this.props){var t=!1,n=this.props;["locale","utc","displayZone","dateFormat","timeFormat"].forEach((function(r){e[r]!==n[r]&&(t=!0)})),t&&this.regenerateDates(),n.value&&n.value!==e.value&&this.setViewDate(n.value),this.checkTZ()}}},{key:"regenerateDates",value:function(){var e=this.props,t=this.state.viewDate.clone(),n=this.state.selectedDate&&this.state.selectedDate.clone();e.locale&&(t.locale(e.locale),n&&n.locale(e.locale)),e.utc?(t.utc(),n&&n.utc()):e.displayTimeZone?(t.tz(e.displayTimeZone),n&&n.tz(e.displayTimeZone)):(t.locale(),n&&n.locale());var r={viewDate:t,selectedDate:n};n&&n.isValid()&&(r.inputValue=n.format(this.getFormat("datetime"))),this.setState(r)}},{key:"getSelectedDate",value:function(){if(void 0===this.props.value)return this.state.selectedDate;var e=this.parseDate(this.props.value,this.getFormat("datetime"));return!(!e||!e.isValid())&&e}},{key:"getInitialInputValue",value:function(e){var t=this.props;return t.inputProps.value?t.inputProps.value:e&&e.isValid()?e.format(this.getFormat("datetime")):t.value&&"string"==typeof t.value?t.value:t.initialValue&&"string"==typeof t.initialValue?t.initialValue:""}},{key:"getInputValue",value:function(){var e=this.getSelectedDate();return e?e.format(this.getFormat("datetime")):this.state.inputValue}},{key:"setViewDate",value:function(e){var t,n=function(){return Ie("Invalid date passed to the `setViewDate` method: "+e)};return e&&(t="string"==typeof e?this.localMoment(e,this.getFormat("datetime")):this.localMoment(e))&&t.isValid()?void this.setState({viewDate:t}):n()}},{key:"navigate",value:function(e){this._showView(e)}},{key:"callHandler",value:function(e,t){return!e||!1!==e(t)}}]),n}(c.a.Component);function Ie(e,t){var n="undefined"!=typeof window&&window.console;n&&(t||(t="warn"),n[t]("***react-datetime:"+e))}Ee(Fe,"propTypes",{value:xe,initialValue:xe,initialViewDate:xe,initialViewMode:Te.oneOf([Pe,Se,je,Ve]),onOpen:Te.func,onClose:Te.func,onChange:Te.func,onNavigate:Te.func,onBeforeNavigate:Te.func,onNavigateBack:Te.func,onNavigateForward:Te.func,updateOnView:Te.string,locale:Te.string,utc:Te.bool,displayTimeZone:Te.string,input:Te.bool,dateFormat:Te.oneOfType([Te.string,Te.bool]),timeFormat:Te.oneOfType([Te.string,Te.bool]),inputProps:Te.object,timeConstraints:Te.object,isValidDate:Te.func,open:Te.bool,strictParsing:Te.bool,closeOnSelect:Te.bool,closeOnTab:Te.bool,renderView:Te.func,renderInput:Te.func,renderDay:Te.func,renderMonth:Te.func,renderYear:Te.func}),Ee(Fe,"defaultProps",{onOpen:Ne,onClose:Ne,onCalendarOpen:Ne,onCalendarClose:Ne,onChange:Ne,onNavigate:Ne,onBeforeNavigate:function(e){return e},onNavigateBack:Ne,onNavigateForward:Ne,dateFormat:!0,timeFormat:!0,utc:!1,className:"",input:!0,inputProps:{},timeConstraints:{},isValidDate:function(){return!0},strictParsing:!0,closeOnSelect:!1,closeOnTab:!0,closeOnClickOutside:!0,renderView:function(e,t){return t()}}),Ee(Fe,"moment",i.a);var Re=de(function(e){we(n,e);var t=De(n);function n(){var e;ve(this,n);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return Ee(Ce(e=t.call.apply(t,[this].concat(o))),"container",c.a.createRef()),e}return ge(n,[{key:"render",value:function(){return c.a.createElement("div",{className:this.props.className,ref:this.container},this.props.children)}},{key:"handleClickOutside",value:function(e){this.props.onClickOut(e)}},{key:"setClickOutsideRef",value:function(){return this.container.current}}]),n}(c.a.Component))}]).default}));
//# sourceMappingURL=react-datetime.umd.js.map