/*!CK:2640572268!*//*1409668658,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["IDlPa"]); }

__d("InlineEditor",["DOM","UserAgent_DEPRECATED","copyProperties"],function(a,b,c,d,e,f,g,h,i){function j(k,l,m,n,o,p){this._name=l;this._obj=k;this._root=m;this._target=n;this._more_than_meets_the_eye=true;this._original_value=k.firstChild.nodeValue;this._is_textarea=o;this._max_edit_length=p;this._edit=g.create(o?'textarea':'input',{value:this._original_value,className:'inputtext inline_edit'});if(this._max_edit_length)this._edit.setAttribute('maxLength',p);var q=this._edit;k.parentNode.insertBefore(q,k);k.parentNode.removeChild(k);q.onblur=this._onblur.bind(this);q.onchange=this._onchange.bind(this);q.onkeypress=function(event){return this._onkeypress(event?event:window.event);}.bind(this);q.focus();q.select();}i(j.prototype,{_onkeypress:function(event){switch(event?event.keyCode:0){case 27:if(h.firefox()<3&&this._valueIsWhitespace(this._original_value))this._edit.value=j.FIREFOX_2_BLANK_SUMMARY;this._edit.value=this._original_value;case 13:this._onblur();return false;}},_onblur:function(){if(!this._more_than_meets_the_eye)return false;this._more_than_meets_the_eye=false;this._onchange();var k=this._is_textarea;if(!this._edit.value||this._valueIsWhitespace(this._edit.value))if(h.firefox()<3){this._edit.value=j.FIREFOX_2_BLANK_SUMMARY;}else this._edit.value=j.DEFAULT_BLANK_SUMMARY;var l=this._root,m=this._target,n=this._max_edit_length,o=g.create('a',{href:'#',className:'inline_edit',onmousedown:function(){return false;},onclick:function(){new j(this,name,l,m,k,n);return false;}},this._edit.value);this._edit.parentNode.insertBefore(o,this._edit);this._edit.parentNode.removeChild(this._edit);},_valueIsWhitespace:function(k){return !!!(k.trim().length);},_onchange:function(){if(!this._target){this._target=g.create('input',{name:this._name,type:'hidden'});this._root.appendChild(this._target);}this._target.value=this._edit.value;}});i(j,{FIREFOX_2_BLANK_SUMMARY:'...',DEFAULT_BLANK_SUMMARY:'\u00A0\u00A0\u00A0'});e.exports=j;},null);
__d("legacy:inline-editor",["InlineEditor"],function(a,b,c,d){a.InlineEditor=b('InlineEditor');},3);