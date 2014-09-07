/*!CK:950537274!*//*1409628798,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["FeWK7"]); }

__d("XUIText.react",["React","cx","joinClasses"],function(a,b,c,d,e,f,g,h,i){var j=g.PropTypes,k=g.createClass({displayName:'XUIText',propTypes:{size:j.oneOf(['small','medium','large','xlarge','inherit']),weight:j.oneOf(['bold','inherit','normal']),display:j.oneOf(['inline','block'])},getDefaultProps:function(){return {size:'inherit',weight:'inherit',display:'inline'};},render:function(){var l=this.props.size,m=this.props.weight,n=((l==='small'?"_50f3":'')+(l==='medium'?' '+"_50f4":'')+(l==='large'?' '+"_50f5":'')+(l==='xlarge'?' '+"_50f6":'')+(m==='bold'?' '+"_50f7":'')+(m==='normal'?' '+"_5kx5":''));if(this.props.display==='block')return (g.createElement(g.DOM.div,Object.assign({},this.props,{className:i(this.props.className,n)}),this.props.children));return (g.createElement(g.DOM.span,Object.assign({},this.props,{className:i(this.props.className,n)}),this.props.children));}});e.exports=k;},null);
__d("DetectBrokenProxyCache",["AsyncSignal","Cookie","URI"],function(a,b,c,d,e,f,g,h,i){function j(k,l){var m=h.get(l);if((m!=k)&&(m!=null)&&(k!='0')){var n={c:'si_detect_broken_proxy_cache',m:l+' '+k+' '+m},o=new i('/common/scribe_endpoint.php').getQualifiedURI().toString();new g(o,n).send();}}e.exports={run:j};},null);
__d("BanzaiLogger",["Banzai"],function(a,b,c,d,e,f,g){var h='logger';function i(k){return {log:function(l,m){g.post(h+':'+l,m,k);}};}var j=i();j.create=i;e.exports=j;},null);
__d("classWithMixins",["copyProperties"],function(a,b,c,d,e,f,g){function h(i,j){var k=function(){i.apply(this,arguments);};k.prototype=g(Object.create(i.prototype),j.prototype);return k;}e.exports=h;},null);
__d("eachKeyVal",[],function(a,b,c,d,e,f){"use strict";function g(h,i,j){if(!h||!i)return;var k=Object.keys(h),l;for(l=0;l<k.length;l++)i.call(j,k[l],h[k[l]],h,l);}e.exports=g;},null);
__d("escapeRegex",[],function(a,b,c,d,e,f){function g(h){return h.replace(/([.?*+\^$\[\]\\(){}|\-])/g,"\\$1");}e.exports=g;},null);
__d("extendArray",[],function(a,b,c,d,e,f){function g(h,i){Array.prototype.push.apply(h,i);return h;}e.exports=g;},null);
__d("PresenceUtil",["CurrentUser","randomInt"],function(a,b,c,d,e,f,g,h){var i=h(0,4294967295)+1;function j(){return i;}function k(){return g.isLoggedInNow();}e.exports={getSessionID:j,hasUserCookie:k};},null);
__d("SimpleDrag",["Event","ArbiterMixin","UserAgent_DEPRECATED","Vector","copyProperties","emptyFunction"],function(a,b,c,d,e,f,g,h,i,j,k,l){function m(n){this.minDragDistance=0;g.listen(n,'mousedown',this._start.bind(this));}k(m.prototype,h,{setMinDragDistance:function(n){this.minDragDistance=n;},_start:function(event){var n=false,o=true,p=null;if(this.inform('mousedown',event))o=false;if(this.minDragDistance){p=j.getEventPosition(event);}else{n=true;var q=this.inform('start',event);if(q===true){o=false;}else if(q===false){n=false;return;}}var r=i.ie()<9?document.documentElement:window,s=g.listen(r,{selectstart:o?g.prevent:l,mousemove:function(event){if(!n){var t=j.getEventPosition(event);if(p.distanceTo(t)<this.minDragDistance)return;n=true;if(this.inform('start',event)===false){n=false;return;}}this.inform('update',event);}.bind(this),mouseup:function(event){for(var t in s)s[t].remove();if(n){this.inform('end',event);}else this.inform('click',event);}.bind(this)});o&&event.prevent();}});e.exports=m;},null);
__d("AjaxPipeRequest",["Arbiter","AsyncRequest","BigPipe","CSS","DOM","Env","PageletSet","ScriptPathState","URI","copyProperties","ge","goOrReplace","performance"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){var t;function u(x,y){var z=q(x);if(!z)return;if(!y)z.style.minHeight='100px';var aa=m.getPageletIDs();for(var ba=0;ba<aa.length;ba++){var ca=aa[ba];if(k.contains(z,ca))m.removePagelet(ca);}k.empty(z);g.inform('pagelet/destroy',{id:null,root:z});}function v(x,y){var z=q(x);if(z&&!y)z.style.minHeight='100px';}function w(x,y){"use strict";this._uri=x;this._query_data=y;this._request=new h();this._canvas_id=null;this._allow_cross_page_transition=true;}w.prototype.setCanvasId=function(x){"use strict";this._canvas_id=x;return this;};w.prototype.setURI=function(x){"use strict";this._uri=x;return this;};w.prototype.setData=function(x){"use strict";this._query_data=x;return this;};w.prototype.getData=function(x){"use strict";return this._query_data;};w.prototype.setAllowCrossPageTransition=function(x){"use strict";this._allow_cross_page_transition=x;return this;};w.prototype.setAppend=function(x){"use strict";this._append=x;return this;};w.prototype.send=function(){"use strict";var x={ajaxpipe:1,ajaxpipe_token:l.ajaxpipe_token};p(x,n.getParams());n.reset();this._request.setOption('useIframeTransport',true).setURI(this._uri).setData(p(x,this._query_data)).setPreBootloadHandler(this._preBootloadHandler.bind(this)).setInitialHandler(this._onInitialResponse.bind(this)).setHandler(this._onResponse.bind(this)).setMethod('GET').setReadOnly(true).setAllowCrossPageTransition(this._allow_cross_page_transition).setAllowIrrelevantRequests(this._allowIrrelevantRequests);if(this._automatic){this._relevantRequest=t;}else t=this._request;var y=s.webkitClearResourceTimings||s.clearResourceTimings||null;if(y)y.call(s);this._request.send();return this;};w.prototype._preBootloadFirstResponse=function(x){"use strict";return false;};w.prototype._fireDomContentCallback=function(){"use strict";this._arbiter.inform('ajaxpipe/domcontent_callback',true,g.BEHAVIOR_STATE);};w.prototype._fireOnloadCallback=function(){"use strict";this._arbiter.inform('ajaxpipe/onload_callback',true,g.BEHAVIOR_STATE);};w.prototype._isRelevant=function(x){"use strict";return this._request==t||(this._automatic&&this._relevantRequest==t)||this._jsNonBlock||(t&&t._allowIrrelevantRequests);};w.prototype._preBootloadHandler=function(x){"use strict";var y=x.getPayload();if(!y||y.redirect||!this._isRelevant(x))return false;var z=false;if(x.is_first){!this._append&&!this._displayCallback&&u(this._canvas_id,this._constHeight);this._arbiter=new g();z=this._preBootloadFirstResponse(x);this.pipe=new i({arbiter:this._arbiter,rootNodeID:this._canvas_id,lid:this._request.lid,isAjax:true,domContentCallback:this._fireDomContentCallback.bind(this),onloadCallback:this._fireOnloadCallback.bind(this),domContentEvt:'ajaxpipe/domcontent_callback',onloadEvt:'ajaxpipe/onload_callback',jsNonBlock:this._jsNonBlock,automatic:this._automatic,displayCallback:this._displayCallback,allowIrrelevantRequests:this._allowIrrelevantRequests});}return z;};w.prototype._redirect=function(x){"use strict";if(x.redirect){if(x.force||!this.isPageActive(x.redirect)){var y=['ajaxpipe','ajaxpipe_token'].concat(this.getSanitizedParameters());r(window.location,o(x.redirect).removeQueryData(y),true);}else{var z=a.PageTransitions;z.go(x.redirect,true);}return true;}else return false;};w.prototype.isPageActive=function(x){"use strict";return true;};w.prototype.getSanitizedParameters=function(){"use strict";return [];};w.prototype._versionCheck=function(x){"use strict";return true;};w.prototype._onInitialResponse=function(x){"use strict";var y=x.getPayload();if(!this._isRelevant(x))return false;if(!y)return true;if(this._redirect(y)||!this._versionCheck(y))return false;return true;};w.prototype._processFirstResponse=function(x){"use strict";var y=x.getPayload();if(q(this._canvas_id)&&y.canvas_class!=null)j.setClass(this._canvas_id,y.canvas_class);};w.prototype.setFirstResponseCallback=function(x){"use strict";this._firstResponseCallback=x;return this;};w.prototype.setFirstResponseHandler=function(x){"use strict";this._processFirstResponse=x;return this;};w.prototype._onResponse=function(x){"use strict";var y=x.payload;if(!this._isRelevant(x))return h.suppressOnloadToken;if(x.is_first){this._processFirstResponse(x);this._firstResponseCallback&&this._firstResponseCallback();y.provides=y.provides||[];y.provides.push('uipage_onload');if(this._append)y.append=this._canvas_id;}if(y){if('content' in y.content&&this._canvas_id!==null&&this._canvas_id!='content'){y.content[this._canvas_id]=y.content.content;delete y.content.content;}this.pipe.onPageletArrive(y);}if(x.is_last)v(this._canvas_id,this._constHeight);return h.suppressOnloadToken;};w.prototype.setNectarModuleDataSafe=function(x){"use strict";this._request.setNectarModuleDataSafe(x);return this;};w.prototype.setFinallyHandler=function(x){"use strict";this._request.setFinallyHandler(x);return this;};w.prototype.setErrorHandler=function(x){"use strict";this._request.setErrorHandler(x);return this;};w.prototype.abort=function(){"use strict";this._request.abort();if(t==this._request)t=null;this._request=null;return this;};w.prototype.setJSNonBlock=function(x){"use strict";this._jsNonBlock=x;return this;};w.prototype.setAutomatic=function(x){"use strict";this._automatic=x;return this;};w.prototype.setDisplayCallback=function(x){"use strict";this._displayCallback=x;return this;};w.prototype.setConstHeight=function(x){"use strict";this._constHeight=x;return this;};w.prototype.setAllowIrrelevantRequests=function(x){"use strict";this._allowIrrelevantRequests=x;return this;};w.prototype.getAsyncRequest=function(){"use strict";return this._request;};w.getCurrentRequest=function(){"use strict";return t;};w.setCurrentRequest=function(x){"use strict";t=x;};e.exports=w;},null);
__d("AsyncRequestNectarLogging",["AsyncRequest","Nectar","copyProperties"],function(a,b,c,d,e,f,g,h,i){i(g.prototype,{setNectarModuleData:function(j){if(this.method=='POST')h.addModuleData(this.data,j);},setNectarImpressionId:function(){if(this.method=='POST')h.addImpressionID(this.data);}});},null);
__d("DimensionTracking",["Cookie","DOMDimensions","Event","debounce","isInIframe"],function(a,b,c,d,e,f,g,h,i,j,k){function l(){var m=h.getViewportDimensions();g.set('wd',m.width+'x'+m.height);}if(!k()){setTimeout(l,100);i.listen(window,'resize',j(l,250));i.listen(window,'focus',l);}},null);
__d("HighContrastMode",["AccessibilityLogger","CSS","CurrentUser","DOM","Style","emptyFunction"],function(a,b,c,d,e,f,g,h,i,j,k,l){var m={init:function(n){if(window.top!==window.self)return;var o=j.create('div');j.appendContent(document.body,o);o.style.cssText='border: 1px solid;'+'border-color: red green;'+'position: fixed;'+'height: 5px;'+'top: -999px;'+'background-image: url('+n.spacerImage+');';var p=k.get(o,'background-image'),q=k.get(o,'border-top-color'),r=k.get(o,'border-right-color'),s=q==r&&(p&&(p=='none'||p=='url(invalid-url:)'));if(s){h.conditionClass(document.documentElement,'highContrast',s);if(i.getID())g.logHCM();}j.remove(o);m.init=l;}};e.exports=m;},null);
__d("curry",["bind"],function(a,b,c,d,e,f,g){var h=g(null,g,null);e.exports=h;},null);
__d("UIPagelet",["ActorURI","AjaxPipeRequest","AsyncRequest","DOM","HTML","ScriptPathState","URI","copyProperties","emptyFunction","ge"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){function q(r,s,t){"use strict";var u=r&&j.isElementNode(r)?r.id:r;this._id=u||null;this._element=p(r||j.create('div'));this._src=s||null;this._context_data=t||{};this._data={};this._handler=o;this._request=null;this._use_ajaxpipe=false;this._use_post_request=false;this._is_bundle=true;this._allow_cross_page_transition=false;this._append=false;}q.prototype.getElement=function(){"use strict";return this._element;};q.prototype.setHandler=function(r){"use strict";this._handler=r;return this;};q.prototype.go=function(r,s){"use strict";if(arguments.length>=2||typeof r=='string'){this._src=r;this._data=s||{};}else if(arguments.length==1)this._data=r;this.refresh();return this;};q.prototype.setAllowCrossPageTransition=function(r){"use strict";this._allow_cross_page_transition=r;return this;};q.prototype.setBundleOption=function(r){"use strict";this._is_bundle=r;return this;};q.prototype.setErrorHandler=function(r){"use strict";this._errorHandler=r;return this;};q.prototype.setTransportErrorHandler=function(r){"use strict";this.transportErrorHandler=r;return this;};q.prototype.refresh=function(){"use strict";if(this._use_ajaxpipe){l.setIsUIPageletRequest(true);this._request=new h();this._request.setCanvasId(this._id).setAppend(this._append).setConstHeight(this._constHeight).setJSNonBlock(this._jsNonblock).setAutomatic(this._automatic).setDisplayCallback(this._displayCallback).setFinallyHandler(this._finallyHandler).setAllowIrrelevantRequests(this._allowIrrelevantRequests);}else{var r=function(v){this._request=null;var w=k(v.getPayload());if(this._append){j.appendContent(this._element,w);}else j.setContent(this._element,w);this._handler();}.bind(this),s=this._displayCallback,t=this._finallyHandler;this._request=new i().setMethod('GET').setReadOnly(true).setOption('bundle',this._is_bundle).setHandler(function(v){if(s){s(r.bind(null,v));}else r(v);t&&t();});if(this._errorHandler)this._request.setErrorHandler(this._errorHandler);if(this.transportErrorHandler)this._request.setTransportErrorHandler(this.transportErrorHandler);if(this._use_post_request)this._request.setMethod('POST');}var u={};n(u,this._context_data);n(u,this._data);if(this._actorID)u[g.PARAMETER_ACTOR]=this._actorID;this._request.setURI(this._src).setAllowCrossPageTransition(this._allow_cross_page_transition).setData({data:JSON.stringify(u)}).send();return this;};q.prototype.cancel=function(){"use strict";if(this._request)this._request.abort();};q.prototype.setUseAjaxPipe=function(r){"use strict";this._use_ajaxpipe=!!r;return this;};q.prototype.setUsePostRequest=function(r){"use strict";this._use_post_request=!!r;return this;};q.prototype.setAppend=function(r){"use strict";this._append=!!r;return this;};q.prototype.setJSNonBlock=function(r){"use strict";this._jsNonblock=!!r;return this;};q.prototype.setAutomatic=function(r){"use strict";this._automatic=!!r;return this;};q.prototype.setDisplayCallback=function(r){"use strict";this._displayCallback=r;return this;};q.prototype.setConstHeight=function(r){"use strict";this._constHeight=!!r;return this;};q.prototype.setFinallyHandler=function(r){"use strict";this._finallyHandler=r;return this;};q.prototype.setAllowIrrelevantRequests=function(r){"use strict";this._allowIrrelevantRequests=r;return this;};q.prototype.setActorID=function(r){"use strict";this._actorID=r;return this;};q.appendToInline=function(r,s){"use strict";var t=p(r),u=p(s);if(t&&u){while(u.firstChild)j.appendContent(t,u.firstChild);j.remove(u);}};q.loadFromEndpoint=function(r,s,t,u){"use strict";u=u||{};var v='/ajax/pagelet/generic.php/'+r;if(u.intern)v='/intern'+v;var w=new m(v.replace(/\/+/g,'/'));if(u.subdomain)w.setSubdomain(u.subdomain);var x=new q(s,w,t).setUseAjaxPipe(u.usePipe).setBundleOption(u.bundle!==false).setAppend(u.append).setJSNonBlock(u.jsNonblock).setAutomatic(u.automatic).setDisplayCallback(u.displayCallback).setConstHeight(u.constHeight).setAllowCrossPageTransition(u.crossPage).setFinallyHandler(u.finallyHandler||o).setErrorHandler(u.errorHandler).setTransportErrorHandler(u.transportErrorHandler).setAllowIrrelevantRequests(u.allowIrrelevantRequests).setActorID(u.actorID).setUsePostRequest(u.usePostRequest);u.handler&&x.setHandler(u.handler);x.go();return x;};e.exports=q;},null);
__d("ScrollableArea",["Animation","ArbiterMixin","BrowserSupport","CSS","DataStore","DOM","Event","Parent","Run","SimpleDrag","Style","UserAgent_DEPRECATED","Vector","throttle","mixin"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){var v=12,w=u(h);for(var x in w)if(w.hasOwnProperty(x))z[x]=w[x];var y=w===null?null:w.prototype;z.prototype=Object.create(y);z.prototype.constructor=z;z.__superConstructor__=w;function z(aa,ba){"use strict";if(!aa)return;ba=ba||{};this._elem=aa;this._wrap=l.find(aa,'div.uiScrollableAreaWrap');this._body=l.find(this._wrap,'div.uiScrollableAreaBody');this._content=l.find(this._body,'div.uiScrollableAreaContent');this._track=l.find(aa,'div.uiScrollableAreaTrack');this._gripper=l.find(this._track,'div.uiScrollableAreaGripper');this._options=ba;this._throttledComputeHeights=t.withBlocking(this._computeHeights,250,this);this.throttledAdjustGripper=t.withBlocking(this.adjustGripper,250,this);this._throttledShowGripperAndShadows=t.withBlocking(this._showGripperAndShadows,250,this);this._throttledRespondMouseMove=t(this._respondMouseMove,250,this);setTimeout(this.adjustGripper.bind(this),0);this._listeners=[m.listen(this._wrap,'scroll',this._handleScroll.bind(this)),m.listen(aa,'mousemove',this._handleMouseMove.bind(this)),m.listen(this._track,'click',this._handleClickOnTrack.bind(this))];if(i.hasPointerEvents())this._listeners.push(m.listen(aa,'mousedown',this._handleClickOnTrack.bind(this)));if(ba.fade!==false){this._listeners.push(m.listen(aa,'mouseenter',this._handleMouseEnter.bind(this)),m.listen(aa,'mouseleave',this._handleMouseLeave.bind(this)),m.listen(aa,'focusin',this.showScrollbar.bind(this,false)),m.listen(aa,'focusout',this.hideScrollbar.bind(this)));}else if(i.hasPointerEvents())this._listeners.push(m.listen(aa,'mouseleave',j.removeClass.bind(null,aa,'uiScrollableAreaTrackOver')));if(r.webkit()||r.chrome()){this._listeners.push(m.listen(aa,'mousedown',function(){var ca=m.listen(window,'mouseup',function(){if(aa.scrollLeft)aa.scrollLeft=0;ca.remove();});}));}else if(r.firefox())this._wrap.addEventListener('DOMMouseScroll',function(event){event.axis===event.HORIZONTAL_AXIS&&event.preventDefault();},false);this.initDrag();k.set(this._elem,'ScrollableArea',this);if(!ba.persistent)o.onLeave(this.destroy.bind(this));if(ba.shadow!==false)j.addClass(this._elem,'uiScrollableAreaWithShadow');}z.prototype.getElement=function(){"use strict";return this._elem;};z.prototype.initDrag=function(){"use strict";var aa=i.hasPointerEvents(),ba=new p(aa?this._elem:this._gripper);ba.subscribe('start',function(ca,event){if(!((event.which&&event.which===1)||(event.button&&event.button===1)))return;var da=s.getEventPosition(event,'viewport');if(aa){var ea=this._gripper.getBoundingClientRect();if(da.x<ea.left||da.x>ea.right||da.y<ea.top||da.y>ea.bottom)return false;}this.inform('grip_start');var fa=da.y,ga=this._gripper.offsetTop;j.addClass(this._elem,'uiScrollableAreaDragging');var ha=ba.subscribe('update',function(ja,event){var ka=s.getEventPosition(event,'viewport').y-fa;this._throttledComputeHeights();var la=this._contentHeight-this._containerHeight,ma=ga+ka,na=this._trackHeight-this._gripperHeight;ma=Math.max(Math.min(ma,na),0);var oa=ma/na*la;this._wrap.scrollTop=oa;}.bind(this)),ia=ba.subscribe('end',function(){ba.unsubscribe(ha);ba.unsubscribe(ia);j.removeClass(this._elem,'uiScrollableAreaDragging');this.inform('grip_end');}.bind(this));}.bind(this));};z.prototype.adjustGripper=function(){"use strict";if(this._needsGripper()){q.set(this._gripper,'height',this._gripperHeight+'px');this._slideGripper();}this._throttledShowGripperAndShadows();return this;};z.prototype._computeHeights=function(){"use strict";this._containerHeight=this._elem.clientHeight;this._contentHeight=this._content.offsetHeight;this._trackHeight=this._track.offsetHeight;this._gripperHeight=Math.max(this._containerHeight/this._contentHeight*this._trackHeight,v);};z.prototype._needsGripper=function(){"use strict";this._throttledComputeHeights();return this._gripperHeight<this._trackHeight;};z.prototype._slideGripper=function(){"use strict";var aa=this._wrap.scrollTop/(this._contentHeight-this._containerHeight)*(this._trackHeight-this._gripperHeight);q.set(this._gripper,'top',aa+'px');};z.prototype._showGripperAndShadows=function(){"use strict";j.conditionShow(this._gripper,this._needsGripper());j.conditionClass(this._elem,'contentBefore',this._wrap.scrollTop>0);j.conditionClass(this._elem,'contentAfter',!this.isScrolledToBottom());};z.prototype.destroy=function(){"use strict";this._listeners.forEach(function(aa){aa.remove();});this._listeners.length=0;};z.prototype._handleClickOnTrack=function(event){"use strict";var aa=s.getEventPosition(event,'viewport'),ba=this._gripper.getBoundingClientRect();if(aa.x<ba.right&&aa.x>ba.left){if(aa.y<ba.top){this.setScrollTop(this.getScrollTop()-this._elem.clientHeight);}else if(aa.y>ba.bottom)this.setScrollTop(this.getScrollTop()+this._elem.clientHeight);event.prevent();}};z.prototype._handleMouseMove=function(event){"use strict";var aa=this._options.fade!==false;if(i.hasPointerEvents()||aa){this._mousePos=s.getEventPosition(event);this._throttledRespondMouseMove();}};z.prototype._respondMouseMove=function(){"use strict";if(!this._mouseOver)return;var aa=this._options.fade!==false,ba=this._mousePos,ca=s.getElementPosition(this._track).x,da=s.getElementDimensions(this._track).x,ea=Math.abs(ca+da/2-ba.x);j.conditionClass(this._elem,'uiScrollableAreaTrackOver',i.hasPointerEvents()&&ea<=10);if(aa)if(ea<25){this.showScrollbar(false);}else if(!this._options.no_fade_on_hover)this.hideScrollbar();};z.prototype._handleScroll=function(event){"use strict";if(this._needsGripper())this._slideGripper();this.throttledAdjustGripper();if(this._options.fade!==false)this.showScrollbar();this.inform('scroll');};z.prototype._handleMouseLeave=function(){"use strict";this._mouseOver=false;this.hideScrollbar();};z.prototype._handleMouseEnter=function(){"use strict";this._mouseOver=true;this.showScrollbar();};z.prototype.hideScrollbar=function(aa){"use strict";if(!this._scrollbarVisible)return this;this._scrollbarVisible=false;if(this._hideTimeout){clearTimeout(this._hideTimeout);this._hideTimeout=null;}if(aa){q.set(this._track,'opacity',0);j.addClass.bind(null,this._track,'invisible_elem');}else this._hideTimeout=setTimeout(function(){if(this._hideAnimation){this._hideAnimation.stop();this._hideAnimation=null;}this._hideAnimation=(new g(this._track)).from('opacity',1).to('opacity',0).duration(250).ondone(j.addClass.bind(null,this._track,'invisible_elem')).go();}.bind(this),750);return this;};z.prototype.resize=function(){"use strict";if(this._body.style.width)this._body.style.width='';var aa=this._wrap.offsetWidth-this._wrap.clientWidth;if(aa>0)q.set(this._body,'margin-right',(-aa)+'px');return this;};z.prototype.showScrollbar=function(aa){"use strict";this.throttledAdjustGripper();if(this._scrollbarVisible)return this;this._scrollbarVisible=true;if(this._hideTimeout){clearTimeout(this._hideTimeout);this._hideTimeout=null;}if(this._hideAnimation){this._hideAnimation.stop();this._hideAnimation=null;}q.set(this._track,'opacity',1);j.removeClass(this._track,'invisible_elem');if((aa!==false)&&!this._options.no_fade_on_hover)this.hideScrollbar();return this;};z.prototype.isScrolledToBottom=function(){"use strict";this._computeHeights();return this._wrap.scrollTop>=this._contentHeight-this._containerHeight;};z.prototype.isScrolledToTop=function(){"use strict";return this._wrap.scrollTop===0;};z.prototype.scrollToBottom=function(aa,ba){"use strict";this.setScrollTop(this._wrap.scrollHeight,aa,ba);};z.prototype.scrollToTop=function(aa){"use strict";this.setScrollTop(0,aa);};z.prototype.scrollIntoView=function(aa,ba){"use strict";var ca=this._wrap.clientHeight,da=aa.offsetHeight,ea=this._wrap.scrollTop,fa=ea+ca,ga=aa.offsetTop,ha=ga+da;if(ga<ea||ca<da){this.setScrollTop(ga,ba);}else if(ha>fa)this.setScrollTop(ea+(ha-fa),ba);};z.prototype.scrollElemToTop=function(aa,ba,ca){"use strict";this.setScrollTop(aa.offsetTop,ba,{callback:ca});};z.prototype.poke=function(){"use strict";var aa=this._wrap.scrollTop;this._wrap.scrollTop+=1;this._wrap.scrollTop-=1;this._wrap.scrollTop=aa;return this.showScrollbar(false);};z.prototype.getScrollTop=function(){"use strict";return this._wrap.scrollTop;};z.prototype.getScrollHeight=function(){"use strict";return this._wrap.scrollHeight;};z.prototype.setScrollTop=function(aa,ba,ca){"use strict";ca=ca||{};if(ba!==false){if(this._scrollTopAnimation)this._scrollTopAnimation.stop();var da=ca.duration||250,ea=ca.ease||g.ease.end;this._scrollTopAnimation=(new g(this._wrap)).to('scrollTop',aa).ease(ea).duration(da).ondone(ca.callback).go();}else{this._wrap.scrollTop=aa;ca.callback&&ca.callback();}};z.renderDOM=function(){"use strict";var aa=l.create('div',{className:'uiScrollableAreaContent'}),ba=l.create('div',{className:'uiScrollableAreaBody'},aa),ca=l.create('div',{className:'uiScrollableAreaWrap scrollable'},ba),da=l.create('div',{className:'uiScrollableArea native'},ca);return {root:da,wrap:ca,body:ba,content:aa};};z.fromNative=function(aa,ba){"use strict";if(!j.hasClass(aa,'uiScrollableArea')||!j.hasClass(aa,'native'))return;ba=ba||{};j.removeClass(aa,'native');var ca=l.create('div',{className:'uiScrollableAreaTrack'},l.create('div',{className:'uiScrollableAreaGripper'}));if(ba.fade!==false){j.addClass(aa,'fade');j.addClass(ca,'invisible_elem');}else j.addClass(aa,'nofade');l.appendContent(aa,ca);var da=new z(aa,ba);da.resize();return da;};z.getInstance=function(aa){"use strict";var ba=n.byClass(aa,'uiScrollableArea');return ba?k.get(ba,'ScrollableArea'):null;};z.poke=function(aa){"use strict";var ba=z.getInstance(aa);ba&&ba.poke();};e.exports=z;},null);
__d("ContextualLayerHideOnScroll",["Event","copyProperties"],function(a,b,c,d,e,f,g,h){function i(j){"use strict";this._layer=j;}i.prototype.enable=function(){"use strict";this._subscriptions=[this._layer.subscribe('contextchange',this._handleContextChange.bind(this)),this._layer.subscribe('show',this.attach.bind(this)),this._layer.subscribe('hide',this.detach.bind(this))];};i.prototype.disable=function(){"use strict";while(this._subscriptions.length)this._subscriptions.pop().unsubscribe();this.detach();};i.prototype.attach=function(){"use strict";if(this._listener)return;var j=this._layer.getContextScrollParent();if(j===window)return;this._listener=g.listen(j,'scroll',this._layer.hide.bind(this._layer));};i.prototype.detach=function(){"use strict";this._listener&&this._listener.remove();this._listener=null;};i.prototype._handleContextChange=function(){"use strict";this.detach();if(this._layer.isShown())this.attach();};h(i.prototype,{_subscriptions:[]});e.exports=i;},null);
__d("LayerTogglerContext",["Toggler"],function(a,b,c,d,e,f,g){function h(i){"use strict";this._layer=i;}h.prototype.enable=function(){"use strict";this._root=this._layer.getRoot();g.createInstance(this._root).setSticky(false);};h.prototype.disable=function(){"use strict";g.destroyInstance(this._root);this._root=null;};e.exports=h;},null);
__d("ContextualDialogXUITheme",["cx"],function(a,b,c,d,e,f,g){var h={wrapperClassName:"_53ii",arrowDimensions:{offset:12,length:16}};e.exports=h;},null);
__d("DialogPosition",["Vector"],function(a,b,c,d,e,f,g){var h=40,i,j={calculateTopMargin:function(k,l){if(i)return i;var m=g.getViewportDimensions(),n=Math.floor((m.x+k)*(m.y-l)/(4*m.x));return Math.max(n,h);},setFixedTopMargin:function(k){i=k;}};e.exports=j;},null);
__d("DialogX",["Arbiter","CSS","DialogPosition","Event","JSXDOM","Layer","LayerAutoFocus","LayerButtons","LayerFormHooks","LayerRefocusOnHide","LayerTabIsolation","LayerTogglerContext","ModalLayer","Style","Vector","copyProperties","cx","debounce","goURI","shield"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z){for(var aa in l)if(l.hasOwnProperty(aa))ca[aa]=l[aa];var ba=l===null?null:l.prototype;ca.prototype=Object.create(ba);ca.prototype.constructor=ca;ca.__superConstructor__=l;function ca(){"use strict";if(l!==null)l.apply(this,arguments);}ca.prototype._configure=function(ea,fa){"use strict";ba._configure.call(this,ea,fa);h.addClass(this.getRoot(),"_4-hy");if(ea.autohide)var ga=this.subscribe('show',function(){ga.unsubscribe();setTimeout(z(this.hide,this),ea.autohide);}.bind(this));if(ea.redirectURI)var ha=this.subscribe('hide',function(){ha.unsubscribe();y(ea.redirectURI);});this._fixedTopPosition=ea.fixedTopPosition;};ca.prototype._getDefaultBehaviors=function(){"use strict";return ba._getDefaultBehaviors.call(this).concat([da,s,m,n,o,q,r,p]);};ca.prototype._buildWrapper=function(ea,fa){"use strict";var ga=ea.xui?"_4-hz":"_t",ha=ea.xui?"_59s7":"_1yv";this._innerContent=k.div(null,fa);this._wrapper=k.div({className:ha,role:"dialog",'aria-labelledby':ea.titleID||null},k.div({className:ga},this._innerContent));this.setWidth(ea.width);return (k.div({className:"_10",role:"dialog"},this._wrapper));};ca.prototype.getContentRoot=function(){"use strict";return this._wrapper;};ca.prototype.getInnerContent=function(){"use strict";return this._innerContent;};ca.prototype.updatePosition=function(){"use strict";var ea;if(this._fixedTopPosition){ea=this._fixedTopPosition;}else{var fa=u.getElementDimensions(this._wrapper);ea=i.calculateTopMargin(fa.x,fa.y);}t.set(this._wrapper,'margin-top',ea+'px');this.inform('update_position',{type:'DialogX',top:ea});};ca.prototype.setWidth=function(ea){"use strict";ea=Math.floor(ea);if(ea===this._width)return;this._width=ea;t.set(this._wrapper,'width',ea+'px');};ca.prototype.getWidth=function(){"use strict";return this._width;};ca.prototype.getFixedTopPosition=function(){"use strict";return this._fixedTopPosition;};function da(ea){"use strict";this._layer=ea;}da.prototype.enable=function(){"use strict";this._subscription=this._layer.subscribe(['show','hide'],function(ea){if(ea==='show'){this._attach();g.inform('layer_shown',{type:'DialogX'});}else{this._detach();g.inform('layer_hidden',{type:'DialogX'});}}.bind(this));};da.prototype.disable=function(){"use strict";this._subscription.unsubscribe();this._subscription=null;this._resize&&this._detach();};da.prototype._attach=function(){"use strict";this._layer.updatePosition();this._resize=j.listen(window,'resize',x(this._layer.updatePosition.bind(this._layer)));};da.prototype._detach=function(){"use strict";this._resize.remove();this._resize=null;};v(da.prototype,{_subscription:null,_resize:null});e.exports=ca;},null);
__d("LoadingDialogDimensions",[],function(a,b,c,d,e,f){var g={HEIGHT:96,WIDTH:300};e.exports=g;},null);
__d("AsyncDialog",["AsyncRequest","Bootloader","CSS","DialogX","DOM","Env","Keys","LayerFadeOnShow","Parent","React","URI","XUISpinner.react","copyProperties","cx","eachKeyVal","emptyFunction","LoadingDialogDimensions"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v){var w=b('LoadingDialogDimensions').WIDTH,x;function y(){if(!x){var ga=k.create('div',{className:"_57-x"});x=new j({width:w,addedBehaviors:[n],xui:true},k.create('div',null,ga));p.renderComponent(p.createElement(r,{size:"large"}),ga);x.subscribe(['key','blur'],function(ha,ia){if(ha=='blur'||(ha=='key'&&ia.keyCode==m.ESC)){ca();return false;}});}return x;}var z={},aa=1,ba=[];function ca(){u(z,function(ga,ha){ha.abandon();da(ga);});}function da(ga){delete z[ga];if(!Object.keys(z).length)y().hide();}function ea(ga,ha){var ia=aa++;ba[ia]=ha;z[ia]=ga;var ja=da.bind(null,''+ia);s(ga.getData(),{__asyncDialog:ia});y().setCausalElement(ga.getRelativeTo()).show();var ka=ga.finallyHandler;ga.setFinallyHandler(function(la){var ma=la.getPayload();if(ma&&ma.asyncURL)fa.send(new g(ma.asyncURL));ja();ka&&ka(la);});ga.setInterceptHandler(ja).setAbortHandler(ja);ga.send();}var fa={send:function(ga,ha){ea(ga,ha||v);},bootstrap:function(ga,ha,ia){if(!ga)return;var ja=o.byClass(ha,'stat_elem')||ha;if(ja&&i.hasClass(ja,'async_saving'))return false;var ka=new q(ga).getQueryData(),la=ia==='dialog',ma=new g().setURI(ga).setData(ka).setMethod(la?'GET':'POST').setReadOnly(la).setRelativeTo(ha).setStatusElement(ja).setNectarModuleDataSafe(ha);fa.send(ma);},respond:function(ga,ha){var ia=ba[ga];if(ia){ia(ha);delete ba[ga];}},getLoadingDialog:function(){return y();}};e.exports=fa;},null);