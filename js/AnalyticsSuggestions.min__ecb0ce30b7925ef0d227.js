webpackJsonpCoveo__temporary([38],{17:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(11),o=n(30),s=n(1);n(372);var r=function(){function t(){this.logger=new i.Logger(this)}return t.prototype.withOwner=function(t){return this.eventOwner=t,this},t.prototype.withElement=function(t){return t instanceof HTMLElement?this.element=s.$$(t):this.element=t,this},t.prototype.withLabel=function(t){return this.label=t,this},t.prototype.withTitle=function(t){return this.title=t,this},t.prototype.withSelectAction=function(t){return this.clickAction=t,this.enterKeyboardAction=t,this},t.prototype.withClickAction=function(t){return this.clickAction=t,this},t.prototype.withEnterKeyboardAction=function(t){return this.enterKeyboardAction=t,this},t.prototype.withFocusAndMouseEnterAction=function(t){return this.focusAction=t,this.mouseenterAction=t,this},t.prototype.withFocusAction=function(t){return this.focusAction=t,this},t.prototype.withMouseEnterAction=function(t){return this.mouseenterAction=t,this},t.prototype.withBlurAndMouseLeaveAction=function(t){return this.mouseleaveAction=t,this.blurAction=t,this},t.prototype.withMouseLeaveAction=function(t){return this.mouseleaveAction=t,this},t.prototype.withBlurAction=function(t){return this.blurAction=t,this},t.prototype.build=function(){return this.element||(this.element=s.$$("div")),this.ensureCorrectRole(),this.ensureCorrectLabel(),this.ensureTitle(),this.ensureSelectAction(),this.ensureUnselectAction(),this.ensureMouseenterAndFocusAction(),this.ensureMouseleaveAndBlurAction(),this.ensureDifferentiationBetweenKeyboardAndMouseFocus(),this},t.prototype.ensureDifferentiationBetweenKeyboardAndMouseFocus=function(){var t=this,e="coveo-accessible-button-pressed",n="coveo-accessible-button-focused";s.$$(this.element).addClass("coveo-accessible-button"),s.$$(this.element).on("mousedown",function(){s.$$(t.element).addClass(e),s.$$(t.element).removeClass(n)}),s.$$(this.element).on("mouseup",function(){return s.$$(t.element).removeClass(e)}),s.$$(this.element).on("focus",function(){s.$$(t.element).hasClass(e)||s.$$(t.element).addClass(n)}),s.$$(this.element).on("blur",function(){return s.$$(t.element).removeClass(n)})},t.prototype.ensureCorrectRole=function(){this.element.getAttribute("role")||this.element.setAttribute("role","button")},t.prototype.ensureCorrectLabel=function(){if(!this.label)return void this.logger.error("Missing label to create an accessible button !");this.element.setAttribute("aria-label",this.label)},t.prototype.ensureTitle=function(){this.title&&this.element.setAttribute("title",this.title)},t.prototype.ensureTabIndex=function(){this.element.setAttribute("tabindex","0")},t.prototype.ensureSelectAction=function(){var t=this;this.enterKeyboardAction&&(this.ensureTabIndex(),this.bindEvent("keyup",o.KeyboardUtils.keypressAction(o.KEYBOARD.ENTER,function(e){return t.enterKeyboardAction(e)}))),this.clickAction&&this.bindEvent("click",this.clickAction)},t.prototype.ensureUnselectAction=function(){this.blurAction&&this.bindEvent("blur",this.blurAction),this.mouseleaveAction&&this.bindEvent("mouseleave",this.mouseleaveAction)},t.prototype.ensureMouseenterAndFocusAction=function(){this.mouseenterAction&&this.bindEvent("mouseenter",this.mouseenterAction),this.focusAction&&this.bindEvent("focus",this.focusAction)},t.prototype.ensureMouseleaveAndBlurAction=function(){this.mouseleaveAction&&this.bindEvent("mouseleave",this.mouseleaveAction),this.blurAction&&this.bindEvent("blur",this.blurAction)},t.prototype.bindEvent=function(t,e){this.eventOwner?this.eventOwner.on(this.element,t,e):s.$$(this.element).on(t,e)},t}();e.AccessibleButton=r},179:function(t,e,n){"use strict";var i=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function i(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}}();Object.defineProperty(e,"__esModule",{value:!0});var o=n(367),s=n(8),r=n(6),u=n(5),l=n(32),c=n(10),a=n(7),h=n(12),p=n(9),d=n(2),m=n(1),b=n(18),f=n(0),y=n(3),g=n(17),v=function(t){function e(n,i,r){var u=t.call(this,n,e.ID,r)||this;u.options=i,u.partialQueries=[],u.lastSuggestions=[],u.resultsToBuildWith=[],u.options&&"omniboxSuggestionOptions"in u.options&&(u.options=f.extend(u.options,u.options.omniboxSuggestionOptions)),u.options=s.ComponentOptions.initComponentOptions(n,e,u.options);var a=function(t){var e=m.$$("div",{className:"magic-box-suggestion coveo-omnibox-selectable coveo-top-analytics-suggestion-row"});return(new g.AccessibleButton).withElement(e).withLabel(t.rawValue).build(),t.data&&(e.el.innerHTML=t.data),e.el.outerHTML};u.options.onSelect=u.options.onSelect||u.onRowSelection;var h={row:a};return u.suggestionForOmnibox=new o.SuggestionForOmnibox(h,function(t,e){u.options.onSelect.call(u,t,e)},function(t,e){u.onRowTab.call(u,t,e)}),u.bind.onRootElement(l.OmniboxEvents.populateOmnibox,function(t){return u.handlePopulateOmnibox(t)}),u.bind.onRootElement(c.QueryEvents.querySuccess,function(){return u.partialQueries=[]}),u}return i(e,t),e.doExport=function(){y.exportGlobally({AnalyticsSuggestions:e})},e.prototype.selectSuggestion=function(t){if(this.currentlyDisplayedSuggestions)if(isNaN(t))this.currentlyDisplayedSuggestions[t]&&m.$$(this.currentlyDisplayedSuggestions[t].element).trigger("click");else{var e=f.findWhere(this.currentlyDisplayedSuggestions,{pos:t});e&&m.$$(e.element).trigger("click")}},e.prototype.handlePopulateOmnibox=function(t){var e=this;u.Assert.exists(t);var n=new Promise(function(n,i){var o=e.usageAnalytics.getTopQueries({pageSize:e.options.numberOfSuggestions,queryText:t.completeQueryExpression.word});o.then(function(i){e.resultsToBuildWith=f.map(i,function(t){return{value:t}}),e.lastSuggestions=i,f.isEmpty(e.resultsToBuildWith)||""==t.completeQueryExpression.word||e.partialQueries.push(t.completeQueryExpression.word);var o=e.suggestionForOmnibox.buildOmniboxElement(e.resultsToBuildWith,t);e.currentlyDisplayedSuggestions={},o&&f.map(m.$$(o).findAll(".coveo-omnibox-selectable"),function(t,n){e.currentlyDisplayedSuggestions[m.$$(t).text()]={element:t,pos:n}}),n({element:o,zIndex:e.options.omniboxZIndex})}),o.catch(function(){n({element:void 0})})});t.rows.push({deferred:n})},e.prototype.onRowSelection=function(t,e){e.clear(),e.closeOmnibox(),this.queryStateModel.set(h.QueryStateModel.attributesEnum.q,t),this.usageAnalytics.logSearchEvent(this.getOmniboxAnalyticsEventCause(),{partialQueries:this.cleanCustomData(this.partialQueries),suggestionRanking:f.indexOf(f.pluck(this.resultsToBuildWith,"value"),t),suggestions:this.cleanCustomData(this.lastSuggestions),partialQuery:e.completeQueryExpression.word}),this.queryController.executeQuery()},e.prototype.onRowTab=function(t,e){e.clear(),e.closeOmnibox(),this.queryStateModel.set(h.QueryStateModel.attributesEnum.q,""+t),this.usageAnalytics.logCustomEvent(this.getOmniboxAnalyticsEventCause(),{partialQueries:this.cleanCustomData(this.partialQueries),suggestionRanking:f.indexOf(f.pluck(this.resultsToBuildWith,"value"),t),suggestions:this.cleanCustomData(this.lastSuggestions),partialQuery:e.completeQueryExpression.word},this.element)},e.prototype.cleanCustomData=function(t,e){void 0===e&&(e=256),t=f.compact(f.filter(t,function(t,e,n){return 0===e||t!==n[e-1]})),t=f.map(t,function(t){return t.replace(/;/g,"")});var n=[];return f.reduceRight(t,function(t,i){var o=t+i.length;return o<=e&&n.push(i),o},0),t=n.reverse(),t.join(";").length>=256?this.cleanCustomData(t,e-10):t.join(";")},e.prototype.getOmniboxAnalyticsEventCause=function(){return this.searchInterface instanceof b.StandaloneSearchInterface?p.analyticsActionCauseList.omniboxFromLink:p.analyticsActionCauseList.omniboxAnalytics},e.ID="AnalyticsSuggestions",e.options={omniboxZIndex:s.ComponentOptions.buildNumberOption({defaultValue:52,min:0}),headerTitle:s.ComponentOptions.buildLocalizedStringOption({defaultValue:a.l("SuggestedQueries")}),numberOfSuggestions:s.ComponentOptions.buildNumberOption({defaultValue:5,min:1})},e}(r.Component);e.AnalyticsSuggestions=v,d.Initialization.registerAutoCreateComponent(v)},367:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(65),o=n(1),s=n(0),r=function(){function t(t,e,n){this.structure=t,this.onSelect=e,this.onTabPress=n}return t.prototype.buildOmniboxElement=function(t,e){var n;if(0!=t.length){if(n=o.$$("div").el,this.structure.header){var i=this.buildElementHeader();n.appendChild(i)}var r=this.buildRowElements(t,e);s.each(r,function(t){n.appendChild(t)})}return n},t.prototype.buildElementHeader=function(){return o.$$("div",void 0,this.structure.header.template({headerTitle:this.structure.header.title})).el},t.prototype.buildRowElements=function(t,e){var n=this,r=[];return s.each(t,function(t){var s=o.$$("div",void 0,n.structure.row({rawValue:t.value,data:i.DomUtils.highlightElement(t.value,e.completeQueryExpression.word)})).el;o.$$(s).on("click",function(){n.onSelect.call(n,t.value,e)}),o.$$(s).on("keyboardSelect",function(){n.onSelect.call(n,t.value,e)}),o.$$(s).on("tabSelect",function(){n.onTabPress.call(n,t.value,e)}),r.push(s)}),r},t}();e.SuggestionForOmnibox=r},372:function(t,e){}});