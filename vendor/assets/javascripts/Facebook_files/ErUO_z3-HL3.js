/*!CK:2159748399!*//*1408933409,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["LguNw"]); }

__d("BookmarkPopoverMenu.react",["React","PopoverMenu.react","ReactXUIMenu","MenuSeparator.react","Link.react","cx","Arbiter","LeftNavConfig"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n){"use strict";var o=i.Item,p=g.createClass({displayName:'BookmarkPopoverMenu',render:function(){var q=this._renderMenuContent();if(q.length===0)return null;var r=g.createElement(i,null,q),s=g.createElement(k,{href:"#",title:"Edit",'aria-label':"Edit",className:"_1wc5 _26tg accessible_elem"});return (g.createElement(g.DOM.div,{className:"buttonWrap"},g.createElement(h,{className:"uiSideNavEditButton",menu:r},s)));},_renderMenuContent:function(){var q=this.props.navItem,r=this.props.navSection,s=this.props.editmenu,t=q.props.model.pinned,u=r.props.id==='pinnedNav',v=[];if(s.favoriteOption){var w=t?s.favoriteOption.title.unfavorite:s.favoriteOption.title.favorite;v.push(g.createElement(o,{onclick:this._toggleFavorite},w));}if(n.gkResults.left_nav_drag_to_favorite!==1&&u&&s.rearrangeOption)v.push(g.createElement(o,{onclick:this._toggleEditMode},s.rearrangeOption.title));if(s.hideOption)v.push(this._renderAjaxMenuItem(s.hideOption));if(s.editOption)v.push(this._renderAjaxMenuItem(s.editOption));if(s.deleteOption){if(v.length!==0)v.push(g.createElement(j,null));v.push(this._renderAjaxMenuItem(s.deleteOption));}return v;},_renderAjaxMenuItem:function(q){return (g.createElement(o,{href:q.href,ajaxify:q.ajaxify,rel:q.rel},q.title));},_toggleFavorite:function(){var q=this.props.navItem;m.inform('LeftNavController/toggleFavorite',q.props.model.id);},_toggleEditMode:function(){m.inform('LeftNavDragController/toggleEditMode',{section:this.props.navSection});}});e.exports=p;},null);