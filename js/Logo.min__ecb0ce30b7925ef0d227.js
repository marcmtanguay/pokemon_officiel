webpackJsonpCoveo__temporary([49],{14:function(e,o,t){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var n=t(0),r=function(){function e(){}return e.addClassToSVGInContainer=function(o,t){var n=o.querySelector("svg");n.setAttribute("class",""+e.getClass(n)+t)},e.removeClassFromSVGInContainer=function(o,t){var n=o.querySelector("svg");n.setAttribute("class",e.getClass(n).replace(t,""))},e.addStyleToSVGInContainer=function(e,o){var t=e.querySelector("svg");n.each(o,function(e,o){t.style[o]=e})},e.getClass=function(e){var o=e.getAttribute("class");return o?o+" ":""},e}();o.SVGDom=r},201:function(e,o,t){"use strict";var n=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,o){e.__proto__=o}||function(e,o){for(var t in o)o.hasOwnProperty(t)&&(e[t]=o[t])};return function(o,t){function n(){this.constructor=o}e(o,t),o.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}}();Object.defineProperty(o,"__esModule",{value:!0});var r=t(3),s=t(10),i=t(7),c=t(1),a=t(14),u=t(13),l=t(6),p=t(8),v=t(2),d=function(e){function o(t,n,r){var l=e.call(this,t,o.ID,r)||this;l.element=t,l.options=n,l.options=p.ComponentOptions.initComponentOptions(t,o,n);var v=c.$$("a",{className:"coveo-powered-by coveo-footer-logo",href:"http://www.coveo.com/","aria-label":i.l("CoveoHomePage")},u.SVGIcons.icons.coveoPoweredBy);return a.SVGDom.addClassToSVGInContainer(v.el,"coveo-powered-by-svg"),l.element.appendChild(v.el),l.bind.onRootElement(s.QueryEvents.noResults,function(){return l.hide()}),l.bind.onRootElement(s.QueryEvents.querySuccess,function(e){e.results.results.length>0?l.show():l.hide()}),l.bind.onRootElement(s.QueryEvents.queryError,function(){return l.hide()}),l}return n(o,e),o.prototype.hide=function(){c.$$(this.element).addClass("coveo-hidden")},o.prototype.show=function(){c.$$(this.element).removeClass("coveo-hidden")},o.ID="Logo",o.doExport=function(){r.exportGlobally({Logo:o})},o.options={},o}(l.Component);o.Logo=d,v.Initialization.registerAutoCreateComponent(d)}});