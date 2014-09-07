/*!CK:208202857!*//*1409628810,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["1pZbl"]); }

__d("ComposerXAjaxEndpoint",[],function(a,b,c,d,e,f){e.exports={ADS_MEDIA_UPLOAD:"\/ajax\/ads\/create\/composerx\/attachment\/media\/upload\/",ADS_ATTACHMENT_STATUS:"\/ajax\/ads\/create\/composerx\/attachment\/status\/",MEDIA_UPLOAD:"\/ajax\/composerx\/attachment\/media\/upload\/"};},null);
__d("ComposerXContextConfig",[],function(a,b,c,d,e,f){e.exports={propertyNames:{actorID:"ACTOR_ID",postID:"POST_ID"},propertyValues:{ACTOR_ID:"actorID",POST_ID:"postID"}};},null);
__d("ComposerXAttachmentBootstrap",["CSS","Form","Parent","URI","cx"],function(a,b,c,d,e,f,g,h,i,j,k){var l=[],m={bootstrap:function(n){m.load(i.byTag(n,'form'),n.getAttribute('data-endpoint'));},load:function(n,o,p){var q=j(o).addQueryData({composerurihash:m.getURIHash(o)});g.conditionClass(n,"_fu",p);var r=i.byClass(n,"_2_4");g.removeClass(r,'async_saving');h.setDisabled(n,false);n.action=q.toString();h.bootstrap(n);},getURIHash:function(n){if(n==='initial')return 'initial';var o=l.indexOf(n);if(o!==-1){return o+'';}else{o=l.length;l[o]=n;return o+'';}}};e.exports=m;},null);
__d("ComposerXContext",["ComposerXContextConfig","invariant"],function(a,b,c,d,e,f,g,h){var i=function(k){return g.propertyNames[k];};function j(k){"use strict";this.$ComposerXContext0={};for(var l in k)this.setProperty(l,k[l]);}j.prototype.getProperty=function(k){"use strict";h(i(k));return this.$ComposerXContext0[k];};j.prototype.setProperty=function(k,l){"use strict";h(i(k));this.$ComposerXContext0[k]=l;return this;};j.PROPERTIES=g.propertyValues;e.exports=j;},null);
__d("ComposerXSessionIDs",[],function(a,b,c,d,e,f){function g(){return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g,function(j){var k=Math.random()*16|0,l=j=='x'?k:(k&3|8);return l.toString(16);});}var h={},i={getSessionID:function(j){return h[j];},resetSessionID:function(j){h[j]=g();}};e.exports=i;},null);
__d("CacheStorage",["ErrorUtils","EventListener","ExecutionEnvironment","FBJSON","WebStorage","startsWith"],function(a,b,c,d,e,f,g,h,i,j,k,l){var m={memory:v,localstorage:t,sessionstorage:u},n='_@_',o='3b',p='CacheStorageVersion';function q(x){"use strict";this._store=x;}q.prototype.getStore=function(){"use strict";return this._store;};q.prototype.keys=function(){"use strict";var x=[];for(var y=0;y<this._store.length;y++)x.push(this._store.key(y));return x;};q.prototype.get=function(x){"use strict";return this._store.getItem(x);};q.prototype.set=function(x,y){"use strict";this._store.setItem(x,y);};q.prototype.remove=function(x){"use strict";this._store.removeItem(x);};q.prototype.clear=function(){"use strict";this._store.clear();};for(var r in q)if(q.hasOwnProperty(r))t[r]=q[r];var s=q===null?null:q.prototype;t.prototype=Object.create(s);t.prototype.constructor=t;t.__superConstructor__=q;function t(){"use strict";q.call(this,k.getLocalStorage());}t.available=function(){"use strict";return !!k.getLocalStorage();};for(r in q)if(q.hasOwnProperty(r))u[r]=q[r];u.prototype=Object.create(s);u.prototype.constructor=u;u.__superConstructor__=q;function u(){"use strict";q.call(this,k.getSessionStorage());}u.available=function(){"use strict";return !!k.getSessionStorage();};function v(){"use strict";this._store={};}v.prototype.getStore=function(){"use strict";return this._store;};v.prototype.keys=function(){"use strict";return Object.keys(this._store);};v.prototype.get=function(x){"use strict";if(this._store[x]===undefined)return null;return this._store[x];};v.prototype.set=function(x,y){"use strict";this._store[x]=y;};v.prototype.remove=function(x){"use strict";if(x in this._store)delete this._store[x];};v.prototype.clear=function(){"use strict";this._store={};};v.available=function(){"use strict";return true;};function w(x,y){"use strict";this._key_prefix=y||'_cs_';if(x=='AUTO'||!x)for(var z in m){var aa=m[z];if(aa.available()){x=z;break;}}if(x)if(!m[x]||!m[x].available()){i.canUseDOM;this._backend=new v();}else this._backend=new m[x]();var ba=this.useBrowserStorage();if(ba)h.listen(window,'storage',this._onBrowserValueChanged.bind(this));var ca=ba?this._backend.getStore().getItem(p):this._backend.getStore()[p];if(ca!==o)this.clear();}w.prototype.useBrowserStorage=function(){"use strict";return this._backend.getStore()===k.getLocalStorage()||this._backend.getStore()===k.getSessionStorage();};w.prototype.addValueChangeCallback=function(x){"use strict";this._changeCallbacks=this._changeCallbacks||[];this._changeCallbacks.push(x);return {remove:function(){this._changeCallbacks.slice(this._changeCallbacks.indexOf(x),1);}.bind(this)};};w.prototype._onBrowserValueChanged=function(x){"use strict";if(this._changeCallbacks&&l(x.key,this._key_prefix))this._changeCallbacks.forEach(function(y){y(x.key,x.oldValue,x.newValue);});};w.prototype.keys=function(){"use strict";var x=[];g.guard(function(){if(this._backend){var y=this._backend.keys(),z=this._key_prefix.length;for(var aa=0;aa<y.length;aa++)if(y[aa].substr(0,z)==this._key_prefix)x.push(y[aa].substr(z));}}.bind(this),'CacheStorage')();return x;};w.prototype.set=function(x,y,z){"use strict";if(this._backend){var aa;if(typeof y=='string'){aa=n+y;}else if(!z){aa={__t:Date.now(),__v:y};aa=j.stringify(aa);}else aa=j.stringify(y);var ba=this._backend,ca=this._key_prefix+x,da=true;while(da)try{ba.set(ca,aa);da=false;}catch(ea){var fa=ba.keys().length;this._evictCacheEntries();da=ba.keys().length<fa;}}};w.prototype._evictCacheEntries=function(){"use strict";var x=[],y=this._backend;y.keys().forEach(function(aa){if(aa===p)return;var ba=y.get(aa);if(ba===undefined){y.remove(aa);return;}if(w._hasMagicPrefix(ba))return;try{ba=j.parse(ba,e.id);}catch(ca){y.remove(aa);return;}if(ba&&ba.__t!==undefined&&ba.__v!==undefined)x.push([aa,ba.__t]);});x.sort(function(aa,ba){return aa[1]-ba[1];});for(var z=0;z<Math.ceil(x.length/2);z++)y.remove(x[z][0]);};w.prototype.get=function(x,y){"use strict";var z;if(this._backend){g.applyWithGuard(function(){z=this._backend.get(this._key_prefix+x);},this,null,function(){z=null;},'CacheStorage:get');if(z!==null){if(w._hasMagicPrefix(z)){z=z.substr(n.length);}else try{z=j.parse(z,e.id);if(z&&z.__t!==undefined&&z.__v!==undefined)z=z.__v;}catch(aa){z=undefined;}}else z=undefined;}if(z===undefined&&y!==undefined){z=y;this.set(x,z);}return z;};w.prototype.remove=function(x){"use strict";if(this._backend)g.applyWithGuard(this._backend.remove,this._backend,[this._key_prefix+x],null,'CacheStorage:remove');};w.prototype.clear=function(){"use strict";if(this._backend){g.applyWithGuard(this._backend.clear,this._backend,null,null,null,'CacheStorage:clear');if(this.useBrowserStorage()){this._backend.getStore().setItem(p,o);}else this._backend.getStore()[p]=o;}};w.getAllStorageTypes=function(){"use strict";return Object.keys(m);};w._hasMagicPrefix=function(x){"use strict";return x.substr(0,n.length)===n;};e.exports=w;},null);
__d("MarauderLogger",["Banzai","CacheStorage","MarauderConfig"],function(a,b,c,d,e,f,g,h,i){var j='client_event',k='navigation',l=180000,m='marauder',n='marauder_last_event_time',o='marauder_last_session_id',p={},q=[],r=false,s=null,t=null,u=null,v=0,w,x,y=false,z=new h('localstorage','');function aa(){z.set(n,ba());}g.subscribe(g.SHUTDOWN,aa);function ba(){w=w||z.get(n)||0;return w;}function ca(){if(!y){x=z.get(o);y=true;}var ra=Date.now();if(!x||ra-l>ba()){x=ra.toString(16)+'-'+(~~(Math.random()*16777215)).toString(16);z.set(o,x);}return x;}function da(){return {user_agent:window.navigator.userAgent,screen_height:window.screen.availHeight,screen_width:window.screen.availWidth,density:(window.screen.devicePixelRatio||null),platform:(window.navigator.platform||null),locale:(window.navigator.language||null)};}function ea(){return {locale:navigator.language};}function fa(ra,sa,ta,ua,va,wa,xa){var ya=xa||Date.now();w=xa?Date.now():ya;sa=sa||s;return {name:ra,time:ya/1000,module:sa,obj_type:ua,obj_id:va,uuid:wa,extra:ta};}function ga(ra,sa,ta){return fa('content',null,{flags:sa},null,null,ra,ta);}function ha(ra){var sa=window.__mrdr;if(sa)for(var ta in sa){var ua=sa[ta];if(ua[3]!==0){delete sa[ta];if(ta==="1")if(u!==null){ta=u;}else continue;ra.push(ga(ta,1,ua[1]));ra.push(ga(ta,2,ua[2]));ra.push(ga(ta,3,ua[3]));}}}function ia(ra){ha(ra);if(ra.length===0)return;if(r)ra.push(fa('counters',null,p));var sa=g.BASIC,ta=i.gk_enabled;if(v===0&&ta){ra.push(fa('device_status',null,ea()));sa={delay:5000};}if(ta&&Math.random()<.01)ra.push(fa('device_info',null,da()));if(u!==null)for(var ua=0;ua<ra.length;ua++){var va=ra[ua];if(va.uuid===null||va.uuid===undefined)va.uuid=u;}var wa={app_ver:i.app_version,data:ra,log_type:j,seq:v++,session_id:ca()},xa=z.get('device_id');if(xa)wa.device_id=xa;p={};r=false;g.post(m,wa,sa);}function ja(ra){if(!p[ra])p[ra]=0;p[ra]++;r=true;}function ka(ra,sa,ta,ua,va,wa,xa){ia([fa(ra,sa,ta,ua,va,wa,xa)]);}function la(ra,sa){if(s!==sa){q.push(fa(k,s,{dest_module:sa,source_url:t,destination_url:ra}));s=sa;t=ra;}}function ma(ra,sa){if(s!==sa){u=null;la(ra,sa);}}function na(ra,sa,ta){ka(sa?'show_module':'hide_module',ra,ta);}function oa(ra){s=ra;}function pa(){return s;}function qa(ra){if(u===null){u=ra;if(ra!==null){ia(q);q=[];}}}e.exports={count:ja,log:ka,navigateTo:ma,navigateWithinSession:la,toggleModule:na,setUUID:qa,setNavigationModule:oa,getNavigationModule:pa};},null);
__d("ComposerXMarauderLogger",["Event","ComposerXSessionIDs","MarauderLogger"],function(a,b,c,d,e,f,g,h,i){var j={};function k(m,n){return function(o,p,q){var r=j[o],s=h.getSessionID(o);if(!r||!s)return;if(n){if(!r.loggedEventTypes[s])r.loggedEventTypes[s]={};if(r.loggedEventTypes[s][m])return;r.loggedEventTypes[s][m]=true;}i.log(m,'composer',{composer_type:p,target_type:r.targetType,ref:r.entryPointRef,error_info:q},undefined,undefined,s);};}var l={registerComposer:function(m,n,o){j[m.id]={targetType:n,entryPointRef:o,loggedEventTypes:{}};},listenForPostEvents:function(m,n){if(!n)return [];return [g.listen(n,'submit',function(){l.logPost(m);}),g.listen(n,'success',function(){l.logPostSuccess(m);}),g.listen(n,'error',function(event){l.logPostFailure(m,null,{error_code:event.data.response.error,error_description:event.data.response.errorDescription,error_summary:event.data.response.errorSummary});})];},logEntry:k('composer_entry',true),logCompleted:k('composer_post_completed',false),logPost:k('composer_post',false),logPostSuccess:k('composer_post_success',false),logPostFailure:k('composer_post_failure',false)};e.exports=l;},null);
__d("ComposerXSessionIDInserter",["ComposerXSessionIDs","DOM","DOMQuery","Event","Parent","csx","cx","onEnclosingPageletDestroy"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var o={init:function(p){var q=j.listen(p,'submit',o._onSubmit);n(p,function(){q.remove();});},_onSubmit:function(p){o.insertSessionInput(p.getTarget());},insertSessionInput:function(p){var q=k.byClass(p,"_119");if(!q)return;var r=g.getSessionID(q.id);if(!r)return;var s=i.scry(p,"._5r_b")[0];if(!s){s=h.create('input',{type:'hidden',name:'composer_session_id',className:"_5r_b"});h.prependContent(p,s);}s.value=r;}};e.exports=o;},null);
__d("ComposerXStore",["Arbiter","ge"],function(a,b,c,d,e,f,g,h){var i={};function j(l,m){return 'ComposerX/'+l+'/'+m;}var k={set:function(l,m,n){if(!i[l])i[l]={};i[l][m]=n;g.inform(j(l,m),{},g.BEHAVIOR_STATE);},get:function(l,m){if(i[l])return i[l][m];return null;},getAllForComposer:function(l){return i[l]||{};},waitForComponents:function(l,m,n){g.registerCallback(n,m.map(j.bind(null,l)));}};g.subscribe('page_transition',function(){for(var l in i)if(!h(l))delete i[l];});e.exports=k;},null);
__d("ComposerX",["ActorURI","Arbiter","ComposerXAttachmentBootstrap","ComposerXContext","ComposerXMarauderLogger","ComposerXSessionIDs","ComposerXSessionIDInserter","ComposerXStore","CSS","DOM","DOMQuery","URI","SubscriptionsHandler","arrayContains","copyProperties","csx","cx","getObjectValues","removeFromArray"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y){var z='any';function aa(ba){"use strict";this._root=ba;this._composerID=ba.id;this._attachments={};this._context=new j({});l.resetSessionID(this._composerID);m.init(this._root);this._subscriptionsHandler=new s();this._subscriptionsHandler.addSubscriptions(h.subscribe(['composer/publish','composer/close'],function(ca,da){if(da.composer_id===this._composerID)this.reset();}.bind(this)));this._subscriptionsHandler.addSubscriptions.apply(this._subscriptionsHandler,k.listenForPostEvents(this._composerID,this._getContent()));this._attachmentFetchForm=q.find(ba,"._2_4");}aa.prototype.getAttachment=function(ba,ca,da){"use strict";ba=this._augmentURI(ba);var ea=i.getURIHash(ba);this._endpointHashToShow=ea;var fa=this._attachments[ea];if(fa){this._showAttachmentAfterComponentsLoaded(ea,da);}else this.fetchAttachmentData(ba,ca);};aa.prototype.fetchAttachmentData=function(ba,ca){"use strict";ba=this._augmentURI(ba);var da=i.getURIHash(ba);if(this._attachments[da])return;if(!t(this._currentFetchEndpoints,da)){i.load(this._attachmentFetchForm,ba,ca);this._currentFetchEndpoints.push(da);}};aa.prototype.setAttachment=function(ba,ca,da,ea){"use strict";y(this._currentFetchEndpoints,ba);this._setupAttachment(ba,ca,da,ea);this._showAttachmentAfterComponentsLoaded(ba,false);};aa.prototype.setInitialAttachment=function(ba,ca,da,ea,fa){"use strict";if(fa)this._context=fa;ba=this._augmentURI(ba);var ga=i.getURIHash(ba);this._setupAttachment(ga,ca,da,ea);this._initialAttachmentEndpoint=ba;if(!this._currentInstance)this._showAttachmentAfterComponentsLoaded(ga,true);};aa.prototype.setComponent=function(ba,ca){"use strict";if(!n.get(this._composerID,ba)){n.set(this._composerID,ba,ca);p.appendContent(this._attachmentFetchForm,p.create('input',{type:'hidden',name:'loaded_components[]',value:ba}));}};aa.prototype.reset=function(){"use strict";if(this._currentInstance){this._currentInstance.cleanup();this._currentInstance=null;}l.resetSessionID(this._composerID);for(var ba in this._attachments)this._attachments[ba].instance.reset();var ca=n.getAllForComposer(this._composerID);x(ca).forEach(function(da){if(da.reset)da.reset(da);});this.getAttachment(this._initialAttachmentEndpoint,false,true);h.inform('composer/reset');};aa.prototype.destroy=function(){"use strict";this._subscriptionsHandler.release();};aa.prototype.addPlaceholders=function(ba,ca){"use strict";var da;for(var ea in this._attachments){da=this._attachments[ea];if(da.instance===ba){ca.forEach(function(fa){da.placeholders.push(fa);da.required_components.push(fa.component_name);});break;}}if(this._currentInstance===ba)this._fillPlaceholders(ca);};aa.prototype.hasAttachmentWithClassName=function(ba){"use strict";return q.scry(this._root,'.'+ba).length>0;};aa.prototype.showAttachmentThrobber=function(){"use strict";o.addClass(this._attachmentFetchForm,'async_saving');};aa.prototype.hideAttachmentThrobber=function(){"use strict";o.removeClass(this._attachmentFetchForm,'async_saving');};aa.prototype.getContext=function(){"use strict";return this._context;};aa.prototype.getID=function(){"use strict";return this._composerID;};aa.prototype._setupAttachment=function(ba,ca,da,ea){"use strict";ca.setComposerID(this._composerID);this._attachments[ba]={instance:ca,placeholders:da,required_components:ea};var fa=this._getContent(),ga=ca.getRoot();if(ga.parentNode!==fa){o.hide(ga);p.appendContent(fa,ga);}};aa.prototype._getContent=function(){"use strict";return q.find(this._root,"div._55d0");};aa.prototype._showAttachment=function(ba,ca,da,ea){"use strict";if(this._currentInstance===ba)return;if(this._endpointHashToShow===z){this._endpointHashToShow=null;}else if(this._endpointHashToShow!==ca)return;if(this._currentInstance){if(!this._currentInstance.canSwitchAway())return;this._currentInstance.cleanup();}this._currentInstance=ba;var fa=this._getContent().childNodes,ga=ba.getRoot();for(var ha=0;ha<fa.length;ha++)if(fa[ha]!==ga)o.hide(fa[ha]);o.show(ga);this._fillPlaceholders(da);ba.initWithComponents(ea);this._setAttachmentSelectedClass(ba.attachmentClassName);h.inform('composer/initializedAttachment',{composerRoot:this._root,isInitial:ea});};aa.prototype._showAttachmentAfterComponentsLoaded=function(ba,ca){"use strict";var da=this._attachments[ba];n.waitForComponents(this._composerID,da.required_components,this._showAttachment.bind(this,da.instance,ba,da.placeholders,ca));};aa.prototype._fillPlaceholders=function(ba){"use strict";ba.forEach(function(ca){var da=n.get(this._composerID,ca.component_name);if(da.element&&ca.element!==da.element.parentNode)p.setContent(ca.element,da.element);}.bind(this));};aa.prototype._setAttachmentSelectedClass=function(ba){"use strict";var ca=q.scry(this._root,"._519b")[0],da;if(ca){o.removeClass(ca,"_519b");da=q.scry(ca,'*[aria-pressed="true"]')[0];if(da)da.setAttribute('aria-pressed','false');}if(ba){var ea=q.scry(this._root,'.'+ba)[0];if(ea){o.addClass(ea,"_519b");da=q.scry(ea,'*[aria-pressed="false"]')[0];if(da)da.setAttribute('aria-pressed','true');}}};aa.prototype._augmentURI=function(ba){"use strict";var ca=this._context.getProperty(j.PROPERTIES.ACTOR_ID),da=(ca)?g.create(ba,ca):new r(ba),ea=this._context.getProperty(j.PROPERTIES.POST_ID);if(ea)da.addQueryData('post_id',ea);return da.toString();};u(aa.prototype,{_endpointHashToShow:z,_currentFetchEndpoints:[],_initialAttachmentEndpoint:''});e.exports=aa;},null);
__d("ComposerXAttachment",["ComposerXStore","copyProperties"],function(a,b,c,d,e,f,g,h){function i(){"use strict";}i.prototype.getRoot=function(){"use strict";};i.prototype.initWithComponents=function(j){"use strict";};i.prototype.cleanup=function(){"use strict";};i.prototype.reset=function(){"use strict";};i.prototype.getComponent=function(j){"use strict";return g.get(this._composerID,j);};i.prototype.getComponentInstance=function(j){"use strict";var k=g.get(this._composerID,j);return k&&k.instance;};i.prototype.canSwitchAway=function(){"use strict";return true;};i.prototype.setComposerID=function(j){"use strict";this._composerID=j;};i.prototype.getComposerID=function(){"use strict";return this._composerID;};i.prototype.allowOGTagPreview=function(){"use strict";return false;};h(i.prototype,{attachmentClassName:''});e.exports=i;},null);
__d("ComposerXController",["ActorURI","Arbiter","ComposerX","ComposerXAttachmentBootstrap","ComposerXContext","Parent","$","cx","emptyFunction","ge","invariant"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var r={};function s(v){var w=p(v);if(!w)return null;var x=l.byClass(m(v),"_119"),y=x.id;if(!r[y])r[y]=new i(x);return r[y];}function t(v){var w=s(v);q(w!==null);return w;}var u={getAttachment:function(v,w,x){var y=t(v);y.getAttachment(w,x);},fetchAttachmentData:function(v,w,x){t(v).fetchAttachmentData(w,x);},setAttachment:function(v,w,x,y,z){var aa=s(v);if(aa)aa.setAttachment(w,x,y,z);},setInitialAttachment:function(v,w,x,y,z,aa){var ba=t(v);ba.setInitialAttachment(w,x,y,z,aa);},setComponent:function(v,w,x){var y=s(v);if(y)y.setComponent(w,x);},reset:function(v){var w=t(v);w.reset();},holdTheMarkup:o,getEndpoint:function(v,w,x){var y=t(v),z=y.getContext();w=g.create(w,z.getProperty(k.PROPERTIES.ACTOR_ID)).toString();j.load(y._attachmentFetchForm,w,x);},addPlaceholders:function(v,w,x){var y=t(v);y.addPlaceholders(w,x);},hasAttachmentWithClassName:function(v,w){var x=t(v);return x.hasAttachmentWithClassName(w);},showAttachmentThrobber:function(v){var w=t(v);w.showAttachmentThrobber();},hideAttachmentThrobber:function(v){var w=t(v);w.hideAttachmentThrobber();},getComposerID:function(v){return t(v).getID();}};j.bootstrap=function(v){u.getAttachment(v,v.getAttribute('data-endpoint'));};h.subscribe('page_transition',function(){for(var v in r)if(!p(v)){r[v].destroy();delete r[v];}});e.exports=u;},null);
__d("ComposerXDragDrop",["Arbiter","ComposerXAjaxEndpoint","ComposerXController","CSS","DOMQuery","DragDropTarget","Parent","URI","csx","cx"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var q=h.MEDIA_UPLOAD,r='/ajax/composerx/attachment/link/scraper/',s=function(u){u();};function t(u,v,w,x){"use strict";this._root=u;this._composerID=v;this._targetID=w;x=x||s;this._dragdrop=new l(u).setOnFilesDropCallback(function(y){x(this._uploadFiles.bind(this,y));}.bind(this)).setFileFilter(t.filterImages).enable();t.handleDragEnterAndLeave(u);g.subscribe('composer/deactivateDragdrop',function(){this.deactivate();}.bind(this));g.subscribe('composer/reactivateDragdrop',function(){this.reactivate();}.bind(this));}t.prototype.enableURLDropping=function(){"use strict";this._dragdrop.setOnURLDropCallback(this._onURLDrop.bind(this));};t.prototype.deactivate=function(){"use strict";this._dragdrop.disable();};t.prototype.reactivate=function(){"use strict";this._dragdrop.enable();};t.prototype._uploadFiles=function(u){"use strict";i.getAttachment(this._root,q);g.inform('ComposerXFilesStore/filesDropped/'+this._composerID+'/mediaupload',{files:u},g.BEHAVIOR_PERSISTENT);};t.prototype._onURLDrop=function(u){"use strict";var v=new n(r);v.addQueryData({scrape_url:encodeURIComponent(u)});i.getAttachment(this._root,v.toString());};t.handleDragEnterAndLeave=function(u){"use strict";var v=k.scry(m.byClass(u,"_119"),"._2wr");g.subscribe('dragenter',function(w,x){if(u==x.element)v.forEach(j.hide);});g.subscribe('dragleave',function(w,x){if(u==x.element)v.forEach(j.show);});};t.filterImages=function(u){"use strict";var v=[];for(var w=0;w<u.length;w++)if(u[w].type.match('image/*'))v.push(u[w]);return v;};e.exports=t;},null);