/*!CK:2972537732!*//*1409628810,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["uWIG5"]); }

__d("FriendsCenterStickyController",["StickyController"],function(a,b,c,d,e,f,g){for(var h in g)if(g.hasOwnProperty(h))j[h]=g[h];var i=g===null?null:g.prototype;j.prototype=Object.create(i);j.prototype.constructor=j;j.__superConstructor__=g;function j(k,l,m,n){"use strict";g.call(this,k,l,m,n);this.$FriendsCenterStickyController0=l;this.$FriendsCenterStickyController1=n||k.parentNode;var o=k.getBoundingClientRect();this.$FriendsCenterStickyController2=o.bottom-o.top;this.$FriendsCenterStickyController3=true;}j.prototype.unstick=function(){"use strict";this.$FriendsCenterStickyController3=false;this.handleScroll();};j.prototype.restick=function(){"use strict";this.$FriendsCenterStickyController3=true;this.handleScroll();};j.prototype.shouldFix=function(){"use strict";if(!this.$FriendsCenterStickyController3)return false;var k=this.$FriendsCenterStickyController1.getBoundingClientRect();return this.$FriendsCenterStickyController0>=k.top&&this.$FriendsCenterStickyController0+this.$FriendsCenterStickyController2<k.bottom;};e.exports=j;},null);
__d("FriendsCenterStickyHeader",["CSS","DOM","FriendsCenterStickyController","Style","Vector","csx","cx"],function(a,b,c,d,e,f,g,h,i,j,k,l,m){var n=[];function o(p){"use strict";var q=h.scry(document,"div._4f7n")[0];if(!q)return;var r=j.isFixed(q)?k.getElementDimensions(q).y:0,s=this.getPlaceholder(p.getBoundingClientRect());h.insertAfter(p,s);g.addClass(p,"_5m65");var t=new i(p,r,function(u){g.conditionShow(s,u);g.conditionClass(p,'stuck',u);}.bind(this));t.start();n[p.id]=t;}o.prototype.getPlaceholder=function(p){"use strict";var q=h.create('div');g.hide(q);j.set(q,'height',(p.bottom-p.top)+'px');j.set(q,'width',(p.right-p.left)+'px');return q;};o.stopSticky=function(p){"use strict";p&&(p.id in n)&&n[p.id].unstick();};o.startSticky=function(p){"use strict";p&&(p.id in n)&&n[p.id].restick();};e.exports=o;},null);
__d("FriendBrowserCheckboxController",["Arbiter","AsyncRequest","CSS","DOM","Event","Form","FriendsCenterStickyHeader","OnVisible","$","bind","copyProperties","csx","ge"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){var t='friend_browser_list';function u(){}q(u,{instances:{},getInstance:function(v){return this.instances[v];}});q(u.prototype,{init:function(v,w,x,y){u.instances[v]=this;this._id=v;this._simplified=x;this._infiniteScroll=y;this._form=w;this._contentGrid=j.find(w,'.friendBrowserCheckboxContentGrid');this._loadingIndicator=j.find(w,'.friendBrowsingCheckboxContentLoadingIndicator');this._checkboxResults=j.find(w,'.friendBrowserCheckboxResults');this._contentPager=j.find(w,'.friendBrowserCheckboxContentPager');this._standaloneFilters=null;this._searchStarted=false;this._stickyHeader=null;g.subscribe('friend-browser/name-change',this.getNew.bind(this,false));this.numGetNewRequests=0;this.queuedRequests={};k.listen(this._form,'submit',this.onFormSubmit.bind(this));},addTypeahead:function(v,w){v.subscribe('select',this.onHubSelect.bind(this,v,w));if(this._simplified)v.subscribe('unselect',this.onHubSelect.bind(this,v,w));},setStandaloneFilters:function(v){if(v){this._standaloneFilters=j.scry(document.body,'.friendBrowserCheckboxFilters')[0];this._stickyHeader=j.scry(o('fbSearchResultsBox'),"._5m65")[0];var w=o('doneSearchButton');w.onclick=function(){this._searchStarted=false;j.scry(document.body,"._5n-u").forEach(function(x){i.show(x);});i.hide(w);window.scrollTo(0,0);m.startSticky(this._stickyHeader);}.bind(this);}return this;},onFormSubmit:function(){this.getNew(true);return false;},addSelector:function(v){v.subscribe('change',this.getNew.bind(this,false));},onHubSelect:function(v,w,event,x){if(this._simplified){this.getNew(true);return;}if(!((event=='select')&&x.selected))return;var y=this.buildNewCheckbox(w,x.selected.text,x.selected.uid),z=j.find(this._standaloneFilters||this._form,'.checkboxes_'+w);j.appendContent(z.firstChild,y);var aa=j.scry(v.getElement(),'input[type="button"]');if(aa&&aa[0])aa[0].click();this.getNew(true);},buildNewCheckbox:function(v,w,x){var y=v+'_ids_'+x,z=v+'_ids[]',aa=j.create('input',{id:y,type:'checkbox',value:x,name:z,checked:true});k.listen(aa,'click',p(this,'getNew',false));var ba=j.create('td',null,aa);i.addClass(ba,'vTop');i.addClass(ba,'hLeft');var ca=j.create('label',null,w),da=j.create('td',null,ca);i.addClass(da,'vMid');i.addClass(da,'hLeft');var ea=j.create('tr');ea.appendChild(ba);ea.appendChild(da);return ea;},showMore:function(){var v=j.scry(this._contentPager,'.friendBrowserMorePager')[0];if(!v)return false;if(i.hasClass(v,'async_saving'))return false;var w=this.numGetNewRequests,x=this.getFormData();x.show_more=true;if(this._searchStarted)x.page=t;new h().setURI('/ajax/growth/friend_browser/checkbox.php').setData(x).setHandler(p(this,function(y){this.showMoreHandler(y,w);})).setStatusElement(v).send();},showMoreHandler:function(v,w){if(w==this.numGetNewRequests){var x=v.payload;j.appendContent(this._contentGrid,x.results);this.updatePagerAndExtraData(x.pager,x.extra_data);}},getFormData:function(){var v=l.serialize(this._form);if(this._standaloneFilters){var w=l.serialize(this._standaloneFilters);for(var x in w)v[x]=w[x];}return v;},getNew:function(v){this.numGetNewRequests++;var w=this.numGetNewRequests;i.addClass(this._checkboxResults,'friendBrowserCheckboxContentOnload');if(s('friendBrowserCI'))i.addClass(o('friendBrowserCI'),'friendBrowserCheckboxContentOnload');this.startStandaloneSearch();i.show(this._loadingIndicator);var x=this.getFormData();x.used_typeahead=v;if(this._searchStarted)x.page=t;new h().setURI('/ajax/growth/friend_browser/checkbox.php').setData(x).setHandler(p(this,function(y){this.getNewHandler(y,w);})).send();},getNewHandler:function(v,w){if(w==this.numGetNewRequests){var x=v.payload;j.setContent(this._contentGrid,x.results);i.removeClass(this._checkboxResults,'friendBrowserCheckboxContentOnload');if(s('friendBrowserCI'))i.hide(o('friendBrowserCI'));i.hide(this._loadingIndicator);this.updatePagerAndExtraData(x.pager,x.extra_data);}},startStandaloneSearch:function(){if(!this._standaloneFilters)return;window.scrollTo(0,0);if(this._searchStarted)return;this._searchStarted=true;i.show(o('fbSearchResultsBox'));j.scry(document.body,"._5n-u").forEach(function(v){i.hide(v);});i.show(o('doneSearchButton'));m.stopSticky(this._stickyHeader);},updatePagerAndExtraData:function(v,w){j.setContent(this._contentPager,v);if(this._infiniteScroll)this.setupOnVisible();j.replace(this._form.elements.extra_data,w);},setupOnVisible:function(){var v=j.scry(this._contentPager,'.friendBrowserMorePager')[0];if(v&&this._id!='jewel'){this._onVisible&&this._onVisible.remove();this._onVisible=new n(v,p(this,'showMore'),false,1000);}}});e.exports=u;},null);
__d("MercuryOrderedThreadlist",["LogHistory","MercuryActionTypeConstants","MercuryFilters","MercuryFolders","MercuryPayloadSource","MercurySingletonMixin","MessagingTag","RangedCallbackManager","MercuryServerRequests","MercuryThreadInformer","MercuryThreads","arrayContains","copyProperties"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){var t=g.getInstance('ordered_threadlist_model'),u=i.getSupportedFilters().concat([i.ALL,m.GROUPS]),v=j.getSupportedFolders();function w(ga,ha,ia,ja){var ka=[],la=false,ma=false,na=(ha||[]).filter(function(ua){var va=ua.filter||i.ALL;return (ua.folder==ia||(!ua.folder&&ia==m.INBOX))&&va==ja;}),oa=ga._threadlistOrderMap[ia][ja].getAllResources(),pa;na.forEach(function(ua){ka=ka.concat(ua.thread_ids);if(ua.error){if(ua.end>oa.length)ma=ua.error;}else{var va=ua.end-ua.start;if(ua.thread_ids.length<va)la=true;}if(!pa||ua.end>pa)pa=ua.end;});aa(ga,ka,ia,ja);if(la){ga._threadlistOrderMap[ia][ja].setReachedEndOfArray();}else if(ma){ga._threadlistOrderMap[ia][ja].setError(ma);}else{var qa=ga._threadlistOrderMap[ia][ja].getCurrentArraySize();if(pa&&qa<pa){var ra={},sa=oa.concat(ka),ta=sa.filter(function(ua){var va=ra[ua];ra[ua]=true;return va;});if(ta.length){t.warn('duplicate_threads',{folder:ia,expected_final_size:pa,actual_final_size:qa,duplicate_thread_ids:ta});ga._serverRequests.fetchThreadlistInfo(pa,ta.length,ia,ja==i.ALL?null:ja);}}}}function x(ga,ha){v.forEach(function(ia){u.forEach(function(ja){w(ga,ha,ia,ja);});});}function y(ga,ha){var ia={};v.forEach(function(ja){ia[ja]={};u.forEach(function(ka){ia[ja][ka]={to_add:[],to_remove:[],to_remove_if_last_after_add:{}};});});ha.forEach(function(ja){if(ja.is_forward)return;var ka=ja.thread_id,la=ba(ga,ka),ma=ca(ga,ka);function na(){ma.forEach(function(pa){ia[la][pa].to_add.push(ka);if(!ga._threadlistOrderMap[la][pa].hasReachedEndOfArray()&&!ga._threadlistOrderMap[la][pa].hasResource(ka))ia[la][pa].to_remove_if_last_after_add[ka]=true;});}function oa(pa){if(r(u,pa))if(r(ma,pa)){ia[la][pa].to_add.push(ka);}else ia[la][pa].to_remove.push(ka);}if(!la){if(ja.action_type===h.CHANGE_FOLDER||ja.action_type===h.CHANGE_ARCHIVED_STATUS)v.forEach(function(pa){if(pa!==la)u.forEach(function(qa){ga._threadlistOrderMap[pa][qa].removeResources([ka]);});});return;}switch(ja.action_type){case h.DELETE_THREAD:ma.forEach(function(pa){ia[la][pa].to_remove.push(ka);});break;case h.CHANGE_ARCHIVED_STATUS:case h.CHANGE_FOLDER:na();break;case h.CHANGE_READ_STATUS:oa(m.UNREAD);break;case h.USER_GENERATED_MESSAGE:case h.LOG_MESSAGE:ma.forEach(function(pa){if(da(ga,ka,la,pa))ia[la][pa].to_add.push(ka);});break;}});v.forEach(function(ja){u.forEach(function(ka){var la=ga._threadlistOrderMap[ja][ka];aa(ga,ia[ja][ka].to_add,ja,ka);for(var ma=la.getCurrentArraySize()-1;ma>=0;ma--){var na=la.getResourceAtIndex(ma);if(!ia[ja][ka].to_remove_if_last_after_add[na])break;ia[ja][ka].to_remove.push(na);}la.removeResources(ia[ja][ka].to_remove);});});}function z(ga,ha){var ia={};v.forEach(function(ja){ia[ja]={};u.forEach(function(ka){ia[ja][ka]=[];});});ha.forEach(function(ja){var ka=ba(ga,ja.thread_id),la=ca(ga,ja.thread_id);if(ka)la.forEach(function(ma){if(da(ga,ja.thread_id,ka,ma))ia[ka][ma].push(ja.thread_id);});});v.forEach(function(ja){u.forEach(function(ka){if(ia[ja][ka].length>0)aa(ga,ia[ja][ka],ja,ka);});});}function aa(ga,ha,ia,ja){ja=ja||i.ALL;ga._threadlistOrderMap[ia][ja].addResources(ha);v.forEach(function(ka){if(ka!=ia)ga._threadlistOrderMap[ka][ja].removeResources(ha);});}function ba(ga,ha){var ia=ga._threads.getThreadMetaNow(ha),ja=null;if(!ia){ja='No thread metadata';}else if(!ia.folder)ja='No thread folder';if(ja){var ka={error:ja,tid:ha};t.warn('no_thread_folder',ka);return null;}var la=ia.folder;if(ia.is_archived)la=m.ACTION_ARCHIVED;if(ga._threadlistOrderMap[la]){return la;}else return null;}function ca(ga,ha){var ia=ga._threads.getThreadMetaNow(ha),ja=[i.ALL];if(!ia){var ka={error:'no_thread_metadata',tid:ha};t.warn('no_thread_metadata',ka);return [];}if(ia.unread_count)ja.push(m.UNREAD);if(!ia.is_canonical)ja.push(m.GROUPS);return ja;}function da(ga,ha,ia,ja){var ka=ga._threads.getThreadMetaNow(ha);return ka&&ka.timestamp&&ba(ga,ha)==ia&&r(ca(ga,ha),ja);}function ea(ga){this._fbid=ga;this._serverRequests=o.getForFBID(this._fbid);this._threadInformer=p.getForFBID(this._fbid);this._threads=q.getForFBID(this._fbid);this._threadlistOrderMap={};v.forEach(function(ha){this._threadlistOrderMap[ha]={};u.forEach(function(ia){this._threadlistOrderMap[ha][ia]=new n(function(ja){return this._threads.getThreadMetaNow(ja).timestamp;}.bind(this),function(ja,ka){return ka-ja;},this._serverRequests.canLinkExternally.bind(this._serverRequests));}.bind(this));}.bind(this));this._serverRequests.subscribe('update-threadlist',function(ha,ia){if(!fa(ia))return;var ja=ia.ordered_threadlists;if(ja&&ja.length){x(this,ja);}else{var ka=(ia.actions||[]).filter(function(la){return la.thread_id;});z(this,ia.threads||[]);y(this,ka);}this._threadInformer.updatedThreadlist();}.bind(this));}s(ea.prototype,{getThreadlist:function(ga,ha,ia,ja,ka,la){return this.getFilteredThreadlist(ga,ha,ia,i.ALL,ja,ka,la);},getFilteredThreadlist:function(ga,ha,ia,ja,ka,la,ma){var na=this._threadlistOrderMap[ia][ja],oa=na.executeOrEnqueue(ga,ha,ka,la),pa=na.getUnavailableResources(oa),qa=na.getError(ga,ha,la);if(pa.length||qa){if(na.getCurrentArraySize()<ga){var ra={start:ga,limit:ha,filter:ja,resources_size:na.getCurrentArraySize()};t.warn('range_with_gap',ra);}na.setError(false);this._serverRequests.fetchThreadlistInfo(na.getCurrentArraySize(),pa.length,ia,ja==i.ALL?null:ja,ma);}return oa;},getThreadlistUntilTimestamp:function(ga,ha,ia){ia=ia||i.ALL;return this._threadlistOrderMap[ha][ia].getElementsUntil(ga);},unsubscribe:function(ga,ha,ia){ia=ia||i.ALL;this._threadlistOrderMap[ha][ia].unsubscribe(ga);}});s(ea,l);function fa(ga){switch(ga.payload_source){case k.CLIENT_CHANGE_ARCHIVED_STATUS:case k.CLIENT_CHANGE_READ_STATUS:case k.CLIENT_CHANGE_FOLDER:case k.CLIENT_CHANNEL_MESSAGE:case k.CLIENT_DELETE_MESSAGES:case k.CLIENT_DELETE_THREAD:case k.CLIENT_SEND_MESSAGE:case k.SERVER_SEND_MESSAGE:case k.SERVER_CONFIRM_MESSAGES:case k.SERVER_FETCH_THREADLIST_INFO:case k.SERVER_THREAD_SYNC:return true;case k.SERVER_INITIAL_DATA:return ga.ordered_threadlists;default:return false;}}e.exports=ea;},null);
__d("MercuryPresence",["Arbiter","AvailableListConstants","DOM","CSS","requireWeak","fbt"],function(a,b,c,d,e,f,g,h,i,j,k,l){var m={},n={},o={updateOnPresenceChanges:function(u,v){n[v.tagName]=true;m[u]=true;j.addClass(v,'presenceListener_'+u);var w=p(u);q(v,w.classes);r(v,w.label);}};function p(u){var v=t(u),w={presenceActive:false,presenceMobile:false},x=null;switch(v){case h.ACTIVE:w.presenceActive=true;x="Active";break;case h.MOBILE:w.presenceMobile=true;x="Mobile";break;default:break;}return {classes:w,label:x};}function q(u,v){for(var w in v)j.conditionClass(u,w,v[w]);}function r(u,v){if(u&&v){var w=i.create('span',{className:'accessible_elem'},v);i.setContent(u,w);}}function s(){for(var u in m){var v=p(u);for(var w in n){var x=i.scry(document,w+'.presenceListener_'+u);for(var y=0;y<x.length;y++){q(x[y],v.classes);r(x[y],v.label);}}}}var t=function(u){return h.OFFLINE;};k(['AvailableList'],function(u){t=u.get;s();});g.subscribe(h.ON_AVAILABILITY_CHANGED,s);e.exports=o;},null);
__d("isEmail",[],function(a,b,c,d,e,f){var g=/^[\w!#\$%&'\*\+\/\=\?\^`\{\|\}~\-]+(:?\.[\w!#\$%&'\*\+\/\=\?\^`\{\|\}~\-]+)*@(?:[a-z0-9](?:[a-z0-9\-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9\-]*[a-z0-9])?$/i;function h(i){return g.test(i);}e.exports=h;},null);
__d("PagesVoiceBar",["$","Arbiter","AsyncRequest","ChannelConstants","DOM","URI"],function(a,b,c,d,e,f,g,h,i,j,k,l){var m='PagesVoiceBar/initialized',n='PagesVoiceBar/switchVoice',o='page_transition',p='pages_voice_bar_sync',q=null,r=null,s=false;function t(z,aa){new i('/ajax/pages/switch_voice.php').setData(aa).setHandler(function(ba){x();}).send();}function u(){q=null;}function v(z,aa){if(aa.obj.profile_id&&aa.obj.profile_id===q)x();}function w(z){h.subscribe(m,z);}function x(){l.getNextURI().go();}var y={initVoiceBar:function(){if(s)return;r=g('pagesVoiceBarContent');h.subscribe(n,t);h.subscribe(o,u);h.subscribe(j.getArbiterType(p),v);s=true;h.inform(m,null,h.BEHAVIOR_STATE);},update:function(z,aa){w(function(){q=aa;k.setContent(r,z);});}};e.exports=y;},null);
__d("legacy:SearchDataSource",["SearchDataSource"],function(a,b,c,d){a.SearchDataSource=b('SearchDataSource');},3);
__d("SearchTypeaheadCore",["Arbiter","DOM","Event","Input","Parent","TypeaheadCore"],function(a,b,c,d,e,f,g,h,i,j,k,l){for(var m in l)if(l.hasOwnProperty(m))o[m]=l[m];var n=l===null?null:l.prototype;o.prototype=Object.create(n);o.prototype.constructor=o;o.__superConstructor__=l;function o(p){"use strict";l.call(this,p);}o.prototype.init=function(p,q,r){"use strict";n.init.call(this,p,q,r);var s=k.byTag(r,'form'),t=this.reset.bind(this);g.subscribe('pre_page_transition',function(event,v){var w=/^\/search/,x=w.test(v.from.path),y=w.test(v.to.path);if(x&&!y)setTimeout(t,0);});if(s){var u=h.find(s,'input.search_sid_input');i.listen(s,'submit',function(){if(this.data&&this.data.queryData)u.value=this.data.queryData.sid;setTimeout(t,0);}.bind(this),i.Priority.URGENT);}};o.prototype.select=function(){"use strict";this.reset();this.element.focus();setTimeout((function(){this.element.blur();}).bind(this),0);};o.prototype.handleTab=function(event){"use strict";var p=this.view.getQuerySuggestion(this.value);if(p){j.setValue(this.element,p);this.checkValue();event.kill();}else n.handleTab.call(this,event);};o.prototype.getSearchType=function(){"use strict";return 'regular';};o.prototype.focus=function(){"use strict";n.focus.call(this);if(this.getValue().length===0||this.element.getAttribute('singlestate')==='true')this.data.fetchNullState(this.getValue());};o.prototype.keyup=function(){"use strict";n.keyup.call(this);if(this.getValue().length===0)this.data.fetchNullState(this.getValue());this.element.setAttribute('singlestate',false);};e.exports=o;},null);
__d("legacy:SearchTypeaheadCore",["SearchTypeaheadCore"],function(a,b,c,d){a.SearchTypeaheadCore=b('SearchTypeaheadCore');},3);
__d("SearchPeopleSeeMore",["fbt","TokenizeUtil","URI"],function(a,b,c,d,e,f,g,h,i){var j=3;function k(l,m){"use strict";this.results=l;this.seeMoreUri=m;}k.prototype.addResult=function(){"use strict";var l=null,m=0,n=[];for(var o=0;o<this.results.length;o++){var p=this.results[o];if(p.type!='user')break;m++;if(!l){l=p.text;}else l=this.findCommonTokens(l,p.text);if(!l)break;n.push(p);}if(l&&m>=j)n.push(this.createFindAllPeopleResult(l));for(;o<this.results.length;o++)n.push(this.results[o]);return n;};k.prototype.createFindAllPeopleResult=function(l){"use strict";var m=g._("Find all people named \"{query}\"",[g.param("query",l.toLowerCase())]),n=i(this.seeMoreUri).addQueryData({q:l,init:'psm'}).toString();return {type:'user',text:m,classNames:'seeAllUser',photo:'/images/search_typeahead/people_see_more.png',logType:'grammar',path:n};};k.prototype.findCommonTokens=function(l,m){"use strict";if(!l||!m)return;var n=h.tokenize(l),o=h.tokenize(m),p=0;for(var q=0;q<n.length&&q<o.length;q++)if(n[q]===o[q]){p++;}else break;if(!p)return null;if(p===n.length)return l;if(p===o.length)return m;var r='';for(var s=0;s<p;s++)r=n[s]+'';return r.trim();};e.exports=k;},null);
__d("SearchTypeaheadView",["Arbiter","ContextualTypeaheadView","ContextualLayerUpdateOnScroll","copyProperties","DOM","goURI","MusicConstants","MusicEvents","tx","URI","isEmail","fbt","SearchPeopleSeeMore"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){for(var t in h)if(h.hasOwnProperty(t))v[t]=h[t];var u=h===null?null:h.prototype;v.prototype=Object.create(u);v.prototype.constructor=v;v.__superConstructor__=h;function v(x,y){"use strict";h.call(this,x,y);}v.prototype.initializeLayer=function(){"use strict";u.initializeLayer.call(this);this.layer.setOffsetY(-1);this.layer.enableBehavior(i);};v.prototype.ignoreClick=function(event){"use strict";event.prevent();};v.prototype.render=function(x,y,z){"use strict";if(!y||!y.length)return;if(this._bucketize)y=w(y);if(this.showPeopleSeeMore&&x){var aa=new s(y,this.getSeeMoreEndpoint('',true));y=aa.addResult();}var ba={results:y,value:x};this.inform('finalResultsReordering',ba);return u.render.call(this,x,ba.results,z);};v.prototype.disableBucketization=function(){"use strict";this._bucketize=false;};v.prototype.buildBuckets=function(x,y){"use strict";var z=y.length,aa=0,ba;for(ba=0;ba<z;++ba)if(y[ba].type=='user')aa++;this._redirectToUsersResultsPage=this.showFilterResults&&aa===z;this.setWebSuggLoggingParams(x,y);if(!x&&this.showFindPeople)y.unshift(this.buildFindPeople());if(this._bucketize)y=u.buildBuckets.call(this,x,y);if(x&&this._shouldShowSeeMore){y.push(this.buildSeeMore(x,z));if(q(x)&&(aa<1))y.push(this.buildInvite(x));}return y;};v.prototype.buildFindPeople=function(){"use strict";var x="Find people";return {classNames:'seeAllUser seeAllUserNullState',logType:'grammar',path:this.getSeeMoreEndpoint(null,true),photo:'/images/search_typeahead/people_see_more.png',text:x,type:'no_header'};};v.prototype.buildSeeMore=function(x,y){"use strict";var z=this.getSeeMoreText(x,y),aa=y==1?"Displaying top result":o._("Displaying top {number} results",{number:y}),ba=k.create('li',{className:'calltoaction'},[k.create('a',{href:this.getSeeMoreEndpoint(x),rel:'ignore'},[k.create('span',{className:'text'},[k.create('span',{className:'seeMore'},[z,k.create('span',{className:'arrow'})]),k.create('span',{className:'subtext'},[aa])])])]);ba.setAttribute('aria-label',z);return {uid:'search',node:ba,search:true};};v.prototype.getSeeMoreText=function(x,y){"use strict";if(this.showKeywordResultsPage)return r._("Search for {query}",[r.param("query",x)]);if(y<=0)return o._("See results for {query}",{query:x});if(this._redirectToUsersResultsPage)return r._("Filter results for {query}",[r.param("query",x)]);return o._("See more results for {query}",{query:x});};v.prototype.buildInvite=function(x){"use strict";var y=o._("Invite {query} to Facebook",{query:x}),z=k.create('li',{className:'calltoaction'},[k.create('a',{href:this.getInviteEndpoint(x),rel:'ignore'},[k.create('span',{className:'text'},[k.create('span',{className:'invite'},[y])])])]);z.setAttribute('aria-label',y);return {uid:'invite',node:z,search:true};};v.prototype.searchPageQueryData=function(x){"use strict";return j({q:x},this.queryData||{});};v.prototype.searchPageTypeData=function(x){"use strict";return this._redirectToUsersResultsPage||x?{type:"users"}:{};};v.prototype.select=function(x){"use strict";var y=this.index,z=this.results[y];if(!z||z.type=='header')return;var aa=this.items[y],ba=k.scry(aa,'a')[0];if(z.song){if(ba)n.inform(m.MUSIC_BUTTON.ACTIVATE,ba);x&&this.inform('highlight',{index:y,selected:z});}else{u.select.call(this,x);if(ba&&ba.href)if(ba.target=='_blank'){window.open(ba.href);}else l(ba.href);}};v.prototype.setSid=function(x){"use strict";this.queryData.tas=x;};v.prototype.getSeeMoreEndpoint=function(x,y){"use strict";return p(this.seeMoreEndpoint).addQueryData(this.searchPageQueryData(x)).addQueryData(this.searchPageTypeData(y)).toString();};v.prototype.getInviteEndpoint=function(x){"use strict";return p('/invite.php').addQueryData({email_list:x});};v.prototype.show=function(){"use strict";if(!this.isVisible()){g.inform('layer_shown',{type:'SearchTypeahead'});u.show.call(this);}};v.prototype.hide=function(){"use strict";if(this.isVisible()){g.inform('layer_hidden',{type:'SearchTypeahead'});u.hide.call(this);}};v.prototype.getQuerySuggestion=function(x){"use strict";var y=this.results[this.index],z=y&&y.type!='header'?y.text.toLowerCase():'';return z==x.toLowerCase()?'':z;};v.prototype.setWebSuggLoggingParams=function(x,y){"use strict";var z=0,aa=0;for(var ba=0;ba<y.length;ba++)if(y[ba].type==='websuggestion'){if(aa===0)aa=ba+1;var ca='FR'+(ba-z)+'AS'+z,da=ba+1;y[ba].path+='&wssk='+ca+'&wssp='+da+'&wspq='+encodeURIComponent(x);y[ba].path+='&wssrc='+y[ba].websuggestion_source;z++;}var ea='&wssc='+y.length+'-'+x.length+'&wsbp='+z+'-'+aa;for(ba=0;ba<y.length;ba++)if(y[ba].type==='websuggestion')y[ba].path+=ea;};function w(x){var y,z,aa,ba,ca=[],da={};z=x.length;for(y=0;y<z;y++){aa=x[y];ba=aa.render_type||aa.type;if(!da.hasOwnProperty(ba)){da[ba]=ca.length;ca.push([]);}ca[da[ba]].push(aa);}var ea=[];z=ca.length;for(y=0;y<z;++y){aa=ca[y][0];ba=aa.render_type||aa.type;ea=ea.concat(ca[y]);}return ea;}j(v.prototype,{_shouldShowSeeMore:true,_bucketize:true,queryData:{init:'quick'}});e.exports=v;},null);
__d("legacy:SearchTypeaheadView",["SearchTypeaheadView"],function(a,b,c,d){a.SearchTypeaheadView=b('SearchTypeaheadView');},3);
__d("legacy:Typeahead",["Typeahead"],function(a,b,c,d){a.Typeahead=b('Typeahead');},3);
__d("TypeaheadSearchRecorderBasic",["SearchTypeaheadRecorder","copyProperties","emptyFunction"],function(a,b,c,d,e,f,g,h,i){function j(k){"use strict";this._typeahead=k;}j.prototype.enable=function(){"use strict";new g(this._typeahead);};h(j.prototype,{disable:i});e.exports=j;},null);
__d("legacy:SearchRecorderBasicTypeaheadBehavior",["TypeaheadSearchRecorderBasic"],function(a,b,c,d,e,f,g){if(!a.TypeaheadBehaviors)a.TypeaheadBehaviors={};a.TypeaheadBehaviors.searchRecorderBasic=function(h){h.enableBehavior(g);};},3);
__d("legacy:SearchTypeaheadRenderer",["SearchTypeaheadRenderer"],function(a,b,c,d){if(!a.TypeaheadRenderers)a.TypeaheadRenderers={};a.TypeaheadRenderers.search=b('SearchTypeaheadRenderer');},3);
void(0);
__d("TypeaheadSearchFilter",["Arbiter","copyProperties"],function(a,b,c,d,e,f,g,h){function i(j){"use strict";this._typeahead=j;}i.prototype.enable=function(){"use strict";var j=this._typeahead,k=j.getView().seeMoreEndpoint;this._subscriptions=[g.subscribe('search/typeahead/updateFilter',function(l,m){if(m.filter_type=='web')j.getView().queryData.form='FBKBFR';j.getView().queryData.type=m.filter_type;}),g.subscribe('search/typeahead/updateSeeMoreEndpoint',function(l,m){j.getView().seeMoreEndpoint=m;}),g.subscribe('page_transition',function(l,m){if(j.getView().queryData.form)delete j.getView().queryData.form;delete j.getView().queryData.type;j.getView().seeMoreEndpoint=k;},g.SUBSCRIBE_NEW)];};i.prototype.disable=function(){"use strict";this._subscriptions.forEach(function(j){j.unsubscribe();});this._subscriptions=null;};h(i.prototype,{_subscription:null});e.exports=i;},null);
__d("legacy:SearchFilterTypeaheadBehavior",["TypeaheadSearchFilter"],function(a,b,c,d,e,f,g){if(!a.TypeaheadBehaviors)a.TypeaheadBehaviors={};a.TypeaheadBehaviors.initFilters=function(h){h.enableBehavior(g);};},3);
__d("TypeaheadDetectQueryLocale",[],function(a,b,c,d,e,f){function g(h){"use strict";this._typeahead=h;this._data=h.getData();this._queryCache={'':this._data.queryCache,ja_JP:{},zh_TW:{}};}g.prototype.enable=function(){"use strict";this._previousLocale='';this._reset=this._typeahead.subscribe('reset',this._swapQueryCache.bind(this,''));this._beforeQuery=this._data.subscribe('beforeQuery',function(h,i){var j=i.value;if(j===''){this._swapQueryCache('');return;}var k=null,l=j.charCodeAt(j.length-1);if(12352<=l&&l<=12543){k='ja_JP';}else if(12544<=l&&l<=12735)k='zh_TW';this._swapQueryCache(k);}.bind(this));};g.prototype.disable=function(){"use strict";this._swapQueryCache('');this._data.unsubscribe(this._beforeQuery);this._typeahead.ubsubscribe(this._reset);};g.prototype._swapQueryCache=function(h){"use strict";if(h===null||h===this._previousLocale)return;this._data.queryCache=this._queryCache[h];this._data.setQueryData({query_locale:h});this._previousLocale=h;};e.exports=g;},null);
__d("TypeaheadExcludeBootstrapFromQueryCache",[],function(a,b,c,d,e,f){function g(h){"use strict";this._data=h.getData();}g.prototype.enable=function(){"use strict";this._buildingQueryCache=false;this._buildQueryCache=this._data.subscribe('buildQueryCache',function(){this._buildingQueryCache=true;}.bind(this));this._mergeUids=this._data.subscribe('mergeUids',function(h,i){if(this._buildingQueryCache)i.local_uids.splice(0,i.local_uids.length);}.bind(this));this._fetchComplete=this._data.subscribe('fetchComplete',function(){this._buildingQueryCache=false;}.bind(this));};g.prototype.disable=function(){"use strict";this._data.unsubscribe(this._buildQueryCache);this._data.unsubscribe(this._mergeUids);this._data.unsubscribe(this._fetchComplete);};e.exports=g;},null);
__d("TypeaheadRegulateMemorializedUsers",["TokenizeUtil","copyProperties"],function(a,b,c,d,e,f,g,h){function i(j){"use strict";this._typeahead=j;}i.prototype._filter=function(j,k){"use strict";if(j.type!=='user'||!j.memorialized)return true;var l=g.parse(j.text).tokens;if(l.length===1&&g.isExactMatch(k,j.text))return true;var m=this._typeahead.getData().getTextToIndex(j),n=g.parse(k).tokens;return (n.length>1&&g.isQueryMatch(k,m));};i.prototype.enable=function(){"use strict";this._filterRegistry=this._typeahead.getData().addFilter(this._filter.bind(this));};i.prototype.disable=function(){"use strict";this._filterRegistry.remove();this._filterRegistry=null;};h(i.prototype,{_filterRegistry:null});e.exports=i;},null);
__d("legacy:RegulateMemorializedUsersTypeaheadBehavior",["TypeaheadRegulateMemorializedUsers"],function(a,b,c,d,e,f,g){if(!a.TypeaheadBehaviors)a.TypeaheadBehaviors={};a.TypeaheadBehaviors.regulateMemorializedUsers=function(h){h.enableBehavior(g);};},3);
__d("XUIBadge",["CSS","DOM","cx","invariant"],function(a,b,c,d,e,f,g,h,i,j){function k(m){return parseInt(m,10)===m;}function l(m){"use strict";this.target=m.target;this.count=m.count;this.maxcount=m.maxcount;}l.prototype.getCount=function(){"use strict";return this.count;};l.prototype.setCount=function(m){"use strict";j(k(m));j(m>=0);this.count=m;g.conditionClass(this.target,'hidden_elem',this.count===0);if(m>this.maxcount){h.setContent(this.target,this.maxcount+'+');g.addClass(this.target,"_5ugi");}else{h.setContent(this.target,m);g.removeClass(this.target,"_5ugi");}};l.prototype.setLegacyContent=function(m){"use strict";if(typeof m==='string'){g.conditionClass(this.target,'hidden_elem',m==0);h.setContent(this.target,m);g.removeClass(this.target,"_5ugi");}else this.setCount(m);};l.prototype.increment=function(){"use strict";this.setCount(this.getCount()+1);};e.exports=l;},null);
__d("VaultBoxURI",["URI"],function(a,b,c,d,e,f,g){var h={PHOTOS_SYNCED:'photos_synced',isVaultBoxURI:function(i){var j=new RegExp("\/"+h.PHOTOS_SYNCED+"\/?$");return i.getPath().match(j)&&i.getQueryData().hasOwnProperty('view_image');},isVaultArchiveURI:function(i){var j=new RegExp("\/"+h.PHOTOS_SYNCED+"\/?$");return i.getPath().match(j);},getSyncedTabURI:function(){return new g('/me/'+h.PHOTOS_SYNCED).getQualifiedURI();}};e.exports=h;},null);