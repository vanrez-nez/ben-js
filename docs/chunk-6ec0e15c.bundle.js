(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6ec0e15c"],{d1db:function(e,n,t){"use strict";var r,i,o,a,u,s,c,d,f,l,g,h,p,m,v,b,y,_,k;t.d(n,"h",function(){return r}),t.d(n,"i",function(){return i}),t.d(n,"f",function(){return o}),t.d(n,"d",function(){return d}),t.d(n,"b",function(){return g}),t.d(n,"l",function(){return m}),t.d(n,"a",function(){return S}),t.d(n,"e",function(){return T}),t.d(n,"g",function(){return R}),t.d(n,"c",function(){return D}),t.d(n,"j",function(){return O}),t.d(n,"k",function(){return $}),function(e){function n(e,n){return{line:e,character:n}}function t(e){var n=e;return Q.objectLiteral(n)&&Q.number(n.line)&&Q.number(n.character)}e.create=n,e.is=t}(r||(r={})),function(e){function n(e,n,t,i){if(Q.number(e)&&Q.number(n)&&Q.number(t)&&Q.number(i))return{start:r.create(e,n),end:r.create(t,i)};if(r.is(e)&&r.is(n))return{start:e,end:n};throw new Error("Range#create called with invalid arguments["+e+", "+n+", "+t+", "+i+"]")}function t(e){var n=e;return Q.objectLiteral(n)&&r.is(n.start)&&r.is(n.end)}e.create=n,e.is=t}(i||(i={})),function(e){function n(e,n){return{uri:e,range:n}}function t(e){var n=e;return Q.defined(n)&&i.is(n.range)&&(Q.string(n.uri)||Q.undefined(n.uri))}e.create=n,e.is=t}(o||(o={})),function(e){function n(e,n,t,r){return{targetUri:e,targetRange:n,targetSelectionRange:t,originSelectionRange:r}}function t(e){var n=e;return Q.defined(n)&&i.is(n.targetRange)&&Q.string(n.targetUri)&&(i.is(n.targetSelectionRange)||Q.undefined(n.targetSelectionRange))&&(i.is(n.originSelectionRange)||Q.undefined(n.originSelectionRange))}e.create=n,e.is=t}(a||(a={})),function(e){function n(e,n,t,r){return{red:e,green:n,blue:t,alpha:r}}function t(e){var n=e;return Q.number(n.red)&&Q.number(n.green)&&Q.number(n.blue)&&Q.number(n.alpha)}e.create=n,e.is=t}(u||(u={})),function(e){function n(e,n){return{range:e,color:n}}function t(e){var n=e;return i.is(n.range)&&u.is(n.color)}e.create=n,e.is=t}(s||(s={})),function(e){function n(e,n,t){return{label:e,textEdit:n,additionalTextEdits:t}}function t(e){var n=e;return Q.string(n.label)&&(Q.undefined(n.textEdit)||m.is(n))&&(Q.undefined(n.additionalTextEdits)||Q.typedArray(n.additionalTextEdits,m.is))}e.create=n,e.is=t}(c||(c={})),function(e){e["Comment"]="comment",e["Imports"]="imports",e["Region"]="region"}(d||(d={})),function(e){function n(e,n,t,r,i){var o={startLine:e,endLine:n};return Q.defined(t)&&(o.startCharacter=t),Q.defined(r)&&(o.endCharacter=r),Q.defined(i)&&(o.kind=i),o}function t(e){var n=e;return Q.number(n.startLine)&&Q.number(n.startLine)&&(Q.undefined(n.startCharacter)||Q.number(n.startCharacter))&&(Q.undefined(n.endCharacter)||Q.number(n.endCharacter))&&(Q.undefined(n.kind)||Q.string(n.kind))}e.create=n,e.is=t}(f||(f={})),function(e){function n(e,n){return{location:e,message:n}}function t(e){var n=e;return Q.defined(n)&&o.is(n.location)&&Q.string(n.message)}e.create=n,e.is=t}(l||(l={})),function(e){e.Error=1,e.Warning=2,e.Information=3,e.Hint=4}(g||(g={})),function(e){function n(e,n,t,r,i,o){var a={range:e,message:n};return Q.defined(t)&&(a.severity=t),Q.defined(r)&&(a.code=r),Q.defined(i)&&(a.source=i),Q.defined(o)&&(a.relatedInformation=o),a}function t(e){var n=e;return Q.defined(n)&&i.is(n.range)&&Q.string(n.message)&&(Q.number(n.severity)||Q.undefined(n.severity))&&(Q.number(n.code)||Q.string(n.code)||Q.undefined(n.code))&&(Q.string(n.source)||Q.undefined(n.source))&&(Q.undefined(n.relatedInformation)||Q.typedArray(n.relatedInformation,l.is))}e.create=n,e.is=t}(h||(h={})),function(e){function n(e,n){for(var t=[],r=2;r<arguments.length;r++)t[r-2]=arguments[r];var i={title:e,command:n};return Q.defined(t)&&t.length>0&&(i.arguments=t),i}function t(e){var n=e;return Q.defined(n)&&Q.string(n.title)&&Q.string(n.command)}e.create=n,e.is=t}(p||(p={})),function(e){function n(e,n){return{range:e,newText:n}}function t(e,n){return{range:{start:e,end:e},newText:n}}function r(e){return{range:e,newText:""}}function o(e){var n=e;return Q.objectLiteral(n)&&Q.string(n.newText)&&i.is(n.range)}e.replace=n,e.insert=t,e.del=r,e.is=o}(m||(m={})),function(e){function n(e,n){return{textDocument:e,edits:n}}function t(e){var n=e;return Q.defined(n)&&x.is(n.textDocument)&&Array.isArray(n.edits)}e.create=n,e.is=t}(v||(v={})),function(e){function n(e,n){var t={kind:"create",uri:e};return void 0===n||void 0===n.overwrite&&void 0===n.ignoreIfExists||(t.options=n),t}function t(e){var n=e;return n&&"create"===n.kind&&Q.string(n.uri)&&(void 0===n.options||(void 0===n.options.overwrite||Q.boolean(n.options.overwrite))&&(void 0===n.options.ignoreIfExists||Q.boolean(n.options.ignoreIfExists)))}e.create=n,e.is=t}(b||(b={})),function(e){function n(e,n,t){var r={kind:"rename",oldUri:e,newUri:n};return void 0===t||void 0===t.overwrite&&void 0===t.ignoreIfExists||(r.options=t),r}function t(e){var n=e;return n&&"rename"===n.kind&&Q.string(n.oldUri)&&Q.string(n.newUri)&&(void 0===n.options||(void 0===n.options.overwrite||Q.boolean(n.options.overwrite))&&(void 0===n.options.ignoreIfExists||Q.boolean(n.options.ignoreIfExists)))}e.create=n,e.is=t}(y||(y={})),function(e){function n(e,n){var t={kind:"delete",uri:e};return void 0===n||void 0===n.recursive&&void 0===n.ignoreIfNotExists||(t.options=n),t}function t(e){var n=e;return n&&"delete"===n.kind&&Q.string(n.uri)&&(void 0===n.options||(void 0===n.options.recursive||Q.boolean(n.options.recursive))&&(void 0===n.options.ignoreIfNotExists||Q.boolean(n.options.ignoreIfNotExists)))}e.create=n,e.is=t}(_||(_={})),function(e){function n(e){var n=e;return n&&(void 0!==n.changes||void 0!==n.documentChanges)&&(void 0===n.documentChanges||n.documentChanges.every(function(e){return Q.string(e.kind)?b.is(e)||y.is(e)||_.is(e):v.is(e)}))}e.is=n}(k||(k={}));var w,x,C,E,I,S,T,j,M,R,F,P,A,D,L,O,W,N=function(){function e(e){this.edits=e}return e.prototype.insert=function(e,n){this.edits.push(m.insert(e,n))},e.prototype.replace=function(e,n){this.edits.push(m.replace(e,n))},e.prototype.delete=function(e){this.edits.push(m.del(e))},e.prototype.add=function(e){this.edits.push(e)},e.prototype.all=function(){return this.edits},e.prototype.clear=function(){this.edits.splice(0,this.edits.length)},e}();(function(){function e(e){var n=this;this._textEditChanges=Object.create(null),e&&(this._workspaceEdit=e,e.documentChanges?e.documentChanges.forEach(function(e){if(v.is(e)){var t=new N(e.edits);n._textEditChanges[e.textDocument.uri]=t}}):e.changes&&Object.keys(e.changes).forEach(function(t){var r=new N(e.changes[t]);n._textEditChanges[t]=r}))}Object.defineProperty(e.prototype,"edit",{get:function(){return this._workspaceEdit},enumerable:!0,configurable:!0}),e.prototype.getTextEditChange=function(e){if(x.is(e)){if(this._workspaceEdit||(this._workspaceEdit={documentChanges:[]}),!this._workspaceEdit.documentChanges)throw new Error("Workspace edit is not configured for document changes.");var n=e,t=this._textEditChanges[n.uri];if(!t){var r=[],i={textDocument:n,edits:r};this._workspaceEdit.documentChanges.push(i),t=new N(r),this._textEditChanges[n.uri]=t}return t}if(this._workspaceEdit||(this._workspaceEdit={changes:Object.create(null)}),!this._workspaceEdit.changes)throw new Error("Workspace edit is not configured for normal text edit changes.");t=this._textEditChanges[e];if(!t){r=[];this._workspaceEdit.changes[e]=r,t=new N(r),this._textEditChanges[e]=t}return t},e.prototype.createFile=function(e,n){this.checkDocumentChanges(),this._workspaceEdit.documentChanges.push(b.create(e,n))},e.prototype.renameFile=function(e,n,t){this.checkDocumentChanges(),this._workspaceEdit.documentChanges.push(y.create(e,n,t))},e.prototype.deleteFile=function(e,n){this.checkDocumentChanges(),this._workspaceEdit.documentChanges.push(_.create(e,n))},e.prototype.checkDocumentChanges=function(){if(!this._workspaceEdit||!this._workspaceEdit.documentChanges)throw new Error("Workspace edit is not configured for document changes.")}})();(function(e){function n(e){return{uri:e}}function t(e){var n=e;return Q.defined(n)&&Q.string(n.uri)}e.create=n,e.is=t})(w||(w={})),function(e){function n(e,n){return{uri:e,version:n}}function t(e){var n=e;return Q.defined(n)&&Q.string(n.uri)&&(null===n.version||Q.number(n.version))}e.create=n,e.is=t}(x||(x={})),function(e){function n(e,n,t,r){return{uri:e,languageId:n,version:t,text:r}}function t(e){var n=e;return Q.defined(n)&&Q.string(n.uri)&&Q.string(n.languageId)&&Q.number(n.version)&&Q.string(n.text)}e.create=n,e.is=t}(C||(C={})),function(e){e.PlainText="plaintext",e.Markdown="markdown"}(E||(E={})),function(e){function n(n){var t=n;return t===e.PlainText||t===e.Markdown}e.is=n}(E||(E={})),function(e){function n(e){var n=e;return Q.objectLiteral(e)&&E.is(n.kind)&&Q.string(n.value)}e.is=n}(I||(I={})),function(e){e.Text=1,e.Method=2,e.Function=3,e.Constructor=4,e.Field=5,e.Variable=6,e.Class=7,e.Interface=8,e.Module=9,e.Property=10,e.Unit=11,e.Value=12,e.Enum=13,e.Keyword=14,e.Snippet=15,e.Color=16,e.File=17,e.Reference=18,e.Folder=19,e.EnumMember=20,e.Constant=21,e.Struct=22,e.Event=23,e.Operator=24,e.TypeParameter=25}(S||(S={})),function(e){e.PlainText=1,e.Snippet=2}(T||(T={})),function(e){function n(e){return{label:e}}e.create=n}(j||(j={})),function(e){function n(e,n){return{items:e||[],isIncomplete:!!n}}e.create=n}(M||(M={})),function(e){function n(e){return e.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")}function t(e){var n=e;return Q.string(n)||Q.objectLiteral(n)&&Q.string(n.language)&&Q.string(n.value)}e.fromPlainText=n,e.is=t}(R||(R={})),function(e){function n(e){var n=e;return!!n&&Q.objectLiteral(n)&&(I.is(n.contents)||R.is(n.contents)||Q.typedArray(n.contents,R.is))&&(void 0===e.range||i.is(e.range))}e.is=n}(F||(F={})),function(e){function n(e,n){return n?{label:e,documentation:n}:{label:e}}e.create=n}(P||(P={})),function(e){function n(e,n){for(var t=[],r=2;r<arguments.length;r++)t[r-2]=arguments[r];var i={label:e};return Q.defined(n)&&(i.documentation=n),Q.defined(t)?i.parameters=t:i.parameters=[],i}e.create=n}(A||(A={})),function(e){e.Text=1,e.Read=2,e.Write=3}(D||(D={})),function(e){function n(e,n){var t={range:e};return Q.number(n)&&(t.kind=n),t}e.create=n}(L||(L={})),function(e){e.File=1,e.Module=2,e.Namespace=3,e.Package=4,e.Class=5,e.Method=6,e.Property=7,e.Field=8,e.Constructor=9,e.Enum=10,e.Interface=11,e.Function=12,e.Variable=13,e.Constant=14,e.String=15,e.Number=16,e.Boolean=17,e.Array=18,e.Object=19,e.Key=20,e.Null=21,e.EnumMember=22,e.Struct=23,e.Event=24,e.Operator=25,e.TypeParameter=26}(O||(O={})),function(e){function n(e,n,t,r,i){var o={name:e,kind:n,location:{uri:r,range:t}};return i&&(o.containerName=i),o}e.create=n}(W||(W={}));var U,V,H,K,z,B=function(){function e(){}return e}();(function(e){function n(e,n,t,r,i,o){var a={name:e,detail:n,kind:t,range:r,selectionRange:i};return void 0!==o&&(a.children=o),a}function t(e){var n=e;return n&&Q.string(n.name)&&Q.number(n.kind)&&i.is(n.range)&&i.is(n.selectionRange)&&(void 0===n.detail||Q.string(n.detail))&&(void 0===n.deprecated||Q.boolean(n.deprecated))&&(void 0===n.children||Array.isArray(n.children))}e.create=n,e.is=t})(B||(B={})),function(e){e.QuickFix="quickfix",e.Refactor="refactor",e.RefactorExtract="refactor.extract",e.RefactorInline="refactor.inline",e.RefactorRewrite="refactor.rewrite",e.Source="source",e.SourceOrganizeImports="source.organizeImports"}(U||(U={})),function(e){function n(e,n){var t={diagnostics:e};return void 0!==n&&null!==n&&(t.only=n),t}function t(e){var n=e;return Q.defined(n)&&Q.typedArray(n.diagnostics,h.is)&&(void 0===n.only||Q.typedArray(n.only,Q.string))}e.create=n,e.is=t}(V||(V={})),function(e){function n(e,n,t){var r={title:e};return p.is(n)?r.command=n:r.edit=n,void 0!==t&&(r.kind=t),r}function t(e){var n=e;return n&&Q.string(n.title)&&(void 0===n.diagnostics||Q.typedArray(n.diagnostics,h.is))&&(void 0===n.kind||Q.string(n.kind))&&(void 0!==n.edit||void 0!==n.command)&&(void 0===n.command||p.is(n.command))&&(void 0===n.edit||k.is(n.edit))}e.create=n,e.is=t}(H||(H={})),function(e){function n(e,n){var t={range:e};return Q.defined(n)&&(t.data=n),t}function t(e){var n=e;return Q.defined(n)&&i.is(n.range)&&(Q.undefined(n.command)||p.is(n.command))}e.create=n,e.is=t}(K||(K={})),function(e){function n(e,n){return{tabSize:e,insertSpaces:n}}function t(e){var n=e;return Q.defined(n)&&Q.number(n.tabSize)&&Q.boolean(n.insertSpaces)}e.create=n,e.is=t}(z||(z={}));var J=function(){function e(){}return e}();(function(e){function n(e,n,t){return{range:e,target:n,data:t}}function t(e){var n=e;return Q.defined(n)&&i.is(n.range)&&(Q.undefined(n.target)||Q.string(n.target))}e.create=n,e.is=t})(J||(J={}));var $,q;(function(e){function n(e,n,t,r){return new G(e,n,t,r)}function t(e){var n=e;return!!(Q.defined(n)&&Q.string(n.uri)&&(Q.undefined(n.languageId)||Q.string(n.languageId))&&Q.number(n.lineCount)&&Q.func(n.getText)&&Q.func(n.positionAt)&&Q.func(n.offsetAt))}function r(e,n){for(var t=e.getText(),r=i(n,function(e,n){var t=e.range.start.line-n.range.start.line;return 0===t?e.range.start.character-n.range.start.character:t}),o=t.length,a=r.length-1;a>=0;a--){var u=r[a],s=e.offsetAt(u.range.start),c=e.offsetAt(u.range.end);if(!(c<=o))throw new Error("Overlapping edit");t=t.substring(0,s)+u.newText+t.substring(c,t.length),o=s}return t}function i(e,n){if(e.length<=1)return e;var t=e.length/2|0,r=e.slice(0,t),o=e.slice(t);i(r,n),i(o,n);var a=0,u=0,s=0;while(a<r.length&&u<o.length){var c=n(r[a],o[u]);e[s++]=c<=0?r[a++]:o[u++]}while(a<r.length)e[s++]=r[a++];while(u<o.length)e[s++]=o[u++];return e}e.create=n,e.is=t,e.applyEdits=r})($||($={})),function(e){e.Manual=1,e.AfterDelay=2,e.FocusOut=3}(q||(q={}));var Q,G=function(){function e(e,n,t,r){this._uri=e,this._languageId=n,this._version=t,this._content=r,this._lineOffsets=null}return Object.defineProperty(e.prototype,"uri",{get:function(){return this._uri},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"languageId",{get:function(){return this._languageId},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"version",{get:function(){return this._version},enumerable:!0,configurable:!0}),e.prototype.getText=function(e){if(e){var n=this.offsetAt(e.start),t=this.offsetAt(e.end);return this._content.substring(n,t)}return this._content},e.prototype.update=function(e,n){this._content=e.text,this._version=n,this._lineOffsets=null},e.prototype.getLineOffsets=function(){if(null===this._lineOffsets){for(var e=[],n=this._content,t=!0,r=0;r<n.length;r++){t&&(e.push(r),t=!1);var i=n.charAt(r);t="\r"===i||"\n"===i,"\r"===i&&r+1<n.length&&"\n"===n.charAt(r+1)&&r++}t&&n.length>0&&e.push(n.length),this._lineOffsets=e}return this._lineOffsets},e.prototype.positionAt=function(e){e=Math.max(Math.min(e,this._content.length),0);var n=this.getLineOffsets(),t=0,i=n.length;if(0===i)return r.create(0,e);while(t<i){var o=Math.floor((t+i)/2);n[o]>e?i=o:t=o+1}var a=t-1;return r.create(a,e-n[a])},e.prototype.offsetAt=function(e){var n=this.getLineOffsets();if(e.line>=n.length)return this._content.length;if(e.line<0)return 0;var t=n[e.line],r=e.line+1<n.length?n[e.line+1]:this._content.length;return Math.max(Math.min(t+e.character,r),t)},Object.defineProperty(e.prototype,"lineCount",{get:function(){return this.getLineOffsets().length},enumerable:!0,configurable:!0}),e}();(function(e){var n=Object.prototype.toString;function t(e){return"undefined"!==typeof e}function r(e){return"undefined"===typeof e}function i(e){return!0===e||!1===e}function o(e){return"[object String]"===n.call(e)}function a(e){return"[object Number]"===n.call(e)}function u(e){return"[object Function]"===n.call(e)}function s(e){return null!==e&&"object"===typeof e}function c(e,n){return Array.isArray(e)&&e.every(n)}e.defined=t,e.undefined=r,e.boolean=i,e.string=o,e.number=a,e.func=u,e.objectLiteral=s,e.typedArray=c})(Q||(Q={}))},fa5bb:function(e,n,t){"use strict";t.r(n);var r=12e4,i=function(){function e(e){var n=this;this._defaults=e,this._worker=null,this._idleCheckInterval=setInterval(function(){return n._checkIfIdle()},3e4),this._lastUsedTime=0,this._configChangeListener=this._defaults.onDidChange(function(){return n._stopWorker()})}return e.prototype._stopWorker=function(){this._worker&&(this._worker.dispose(),this._worker=null),this._client=null},e.prototype.dispose=function(){clearInterval(this._idleCheckInterval),this._configChangeListener.dispose(),this._stopWorker()},e.prototype._checkIfIdle=function(){if(this._worker){var e=Date.now()-this._lastUsedTime;e>r&&this._stopWorker()}},e.prototype._getClient=function(){return this._lastUsedTime=Date.now(),this._client||(this._worker=monaco.editor.createWebWorker({moduleId:"vs/language/html/htmlWorker",createData:{languageSettings:this._defaults.options,languageId:this._defaults.languageId},label:this._defaults.languageId}),this._client=this._worker.getProxy()),this._client},e.prototype.getLanguageServiceWorker=function(){for(var e,n=this,t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return this._getClient().then(function(n){e=n}).then(function(e){return n._worker.withSyncedResources(t)}).then(function(n){return e})},e}(),o=t("d1db"),a=monaco.Range,u=function(){function e(e,n,t){var r=this;this._languageId=e,this._worker=n,this._disposables=[],this._listener=Object.create(null);var i=function(e){var n,t=e.getModeId();t===r._languageId&&(r._listener[e.uri.toString()]=e.onDidChangeContent(function(){clearTimeout(n),n=setTimeout(function(){return r._doValidate(e.uri,t)},500)}),r._doValidate(e.uri,t))},o=function(e){monaco.editor.setModelMarkers(e,r._languageId,[]);var n=e.uri.toString(),t=r._listener[n];t&&(t.dispose(),delete r._listener[n])};this._disposables.push(monaco.editor.onDidCreateModel(i)),this._disposables.push(monaco.editor.onWillDisposeModel(function(e){o(e)})),this._disposables.push(monaco.editor.onDidChangeModelLanguage(function(e){o(e.model),i(e.model)})),this._disposables.push(t.onDidChange(function(e){monaco.editor.getModels().forEach(function(e){e.getModeId()===r._languageId&&(o(e),i(e))})})),this._disposables.push({dispose:function(){for(var e in r._listener)r._listener[e].dispose()}}),monaco.editor.getModels().forEach(i)}return e.prototype.dispose=function(){this._disposables.forEach(function(e){return e&&e.dispose()}),this._disposables=[]},e.prototype._doValidate=function(e,n){this._worker(e).then(function(t){return t.doValidation(e.toString()).then(function(t){var r=t.map(function(n){return c(e,n)});monaco.editor.setModelMarkers(monaco.editor.getModel(e),n,r)})}).then(void 0,function(e){console.error(e)})},e}();function s(e){switch(e){case o["b"].Error:return monaco.MarkerSeverity.Error;case o["b"].Warning:return monaco.MarkerSeverity.Warning;case o["b"].Information:return monaco.MarkerSeverity.Info;case o["b"].Hint:return monaco.MarkerSeverity.Hint;default:return monaco.MarkerSeverity.Info}}function c(e,n){var t="number"===typeof n.code?String(n.code):n.code;return{severity:s(n.severity),startLineNumber:n.range.start.line+1,startColumn:n.range.start.character+1,endLineNumber:n.range.end.line+1,endColumn:n.range.end.character+1,message:n.message,code:t,source:n.source}}function d(e){if(e)return{character:e.column-1,line:e.lineNumber-1}}function f(e){if(e)return{start:d(e.getStartPosition()),end:d(e.getEndPosition())}}function l(e){if(e)return new a(e.start.line+1,e.start.character+1,e.end.line+1,e.end.character+1)}function g(e){var n=monaco.languages.CompletionItemKind;switch(e){case o["a"].Text:return n.Text;case o["a"].Method:return n.Method;case o["a"].Function:return n.Function;case o["a"].Constructor:return n.Constructor;case o["a"].Field:return n.Field;case o["a"].Variable:return n.Variable;case o["a"].Class:return n.Class;case o["a"].Interface:return n.Interface;case o["a"].Module:return n.Module;case o["a"].Property:return n.Property;case o["a"].Unit:return n.Unit;case o["a"].Value:return n.Value;case o["a"].Enum:return n.Enum;case o["a"].Keyword:return n.Keyword;case o["a"].Snippet:return n.Snippet;case o["a"].Color:return n.Color;case o["a"].File:return n.File;case o["a"].Reference:return n.Reference}return n.Property}function h(e){if(e)return{range:l(e.range),text:e.newText}}var p=function(){function e(e){this._worker=e}return Object.defineProperty(e.prototype,"triggerCharacters",{get:function(){return[".",":","<",'"',"=","/"]},enumerable:!0,configurable:!0}),e.prototype.provideCompletionItems=function(e,n,t,r){var i=e.uri;return this._worker(i).then(function(e){return e.doComplete(i.toString(),d(n))}).then(function(t){if(t){var r=e.getWordUntilPosition(n),i=new a(n.lineNumber,r.startColumn,n.lineNumber,r.endColumn),u=t.items.map(function(e){var n={label:e.label,insertText:e.insertText||e.label,sortText:e.sortText,filterText:e.filterText,documentation:e.documentation,detail:e.detail,range:i,kind:g(e.kind)};return e.textEdit&&(n.range=l(e.textEdit.range),n.insertText=e.textEdit.newText),e.additionalTextEdits&&(n.additionalTextEdits=e.additionalTextEdits.map(h)),e.insertTextFormat===o["e"].Snippet&&(n.insertTextRules=monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet),n});return{isIncomplete:t.isIncomplete,suggestions:u}}})},e}();function m(e){return e&&"object"===typeof e&&"string"===typeof e.kind}function v(e){return"string"===typeof e?{value:e}:m(e)?"plaintext"===e.kind?{value:e.value.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")}:{value:e.value}:{value:"```"+e.language+"\n"+e.value+"\n```\n"}}function b(e){if(e)return Array.isArray(e)?e.map(v):[v(e)]}var y=function(){function e(e){this._worker=e}return e.prototype.provideHover=function(e,n,t){var r=e.uri;return this._worker(r).then(function(e){return e.doHover(r.toString(),d(n))}).then(function(e){if(e)return{range:l(e.range),contents:b(e.contents)}})},e}();function _(e){var n=monaco.languages.DocumentHighlightKind;switch(e){case o["c"].Read:return n.Read;case o["c"].Write:return n.Write;case o["c"].Text:return n.Text}return n.Text}var k=function(){function e(e){this._worker=e}return e.prototype.provideDocumentHighlights=function(e,n,t){var r=e.uri;return this._worker(r).then(function(e){return e.findDocumentHighlights(r.toString(),d(n))}).then(function(e){if(e)return e.map(function(e){return{range:l(e.range),kind:_(e.kind)}})})},e}();function w(e){var n=monaco.languages.SymbolKind;switch(e){case o["j"].File:return n.Array;case o["j"].Module:return n.Module;case o["j"].Namespace:return n.Namespace;case o["j"].Package:return n.Package;case o["j"].Class:return n.Class;case o["j"].Method:return n.Method;case o["j"].Property:return n.Property;case o["j"].Field:return n.Field;case o["j"].Constructor:return n.Constructor;case o["j"].Enum:return n.Enum;case o["j"].Interface:return n.Interface;case o["j"].Function:return n.Function;case o["j"].Variable:return n.Variable;case o["j"].Constant:return n.Constant;case o["j"].String:return n.String;case o["j"].Number:return n.Number;case o["j"].Boolean:return n.Boolean;case o["j"].Array:return n.Array}return n.Function}var x=function(){function e(e){this._worker=e}return e.prototype.provideDocumentSymbols=function(e,n){var t=e.uri;return this._worker(t).then(function(e){return e.findDocumentSymbols(t.toString())}).then(function(e){if(e)return e.map(function(e){return{name:e.name,detail:"",containerName:e.containerName,kind:w(e.kind),range:l(e.location.range),selectionRange:l(e.location.range)}})})},e}(),C=function(){function e(e){this._worker=e}return e.prototype.provideLinks=function(e,n){var t=e.uri;return this._worker(t).then(function(e){return e.findDocumentLinks(t.toString())}).then(function(e){if(e)return{links:e.map(function(e){return{range:l(e.range),url:e.target}})}})},e}();function E(e){return{tabSize:e.tabSize,insertSpaces:e.insertSpaces}}var I=function(){function e(e){this._worker=e}return e.prototype.provideDocumentFormattingEdits=function(e,n,t){var r=e.uri;return this._worker(r).then(function(e){return e.format(r.toString(),null,E(n)).then(function(e){if(e&&0!==e.length)return e.map(h)})})},e}(),S=function(){function e(e){this._worker=e}return e.prototype.provideDocumentRangeFormattingEdits=function(e,n,t,r){var i=e.uri;return this._worker(i).then(function(e){return e.format(i.toString(),f(n),E(t)).then(function(e){if(e&&0!==e.length)return e.map(h)})})},e}(),T=function(){function e(e){this._worker=e}return e.prototype.provideFoldingRanges=function(e,n,t){var r=e.uri;return this._worker(r).then(function(e){return e.provideFoldingRanges(r.toString(),n)}).then(function(e){if(e)return e.map(function(e){var n={start:e.startLine+1,end:e.endLine+1};return"undefined"!==typeof e.kind&&(n.kind=j(e.kind)),n})})},e}();function j(e){switch(e){case o["d"].Comment:return monaco.languages.FoldingRangeKind.Comment;case o["d"].Imports:return monaco.languages.FoldingRangeKind.Imports;case o["d"].Region:return monaco.languages.FoldingRangeKind.Region}}function M(e){var n=new i(e),t=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return n.getLanguageServiceWorker.apply(n,e)},r=e.languageId;monaco.languages.registerCompletionItemProvider(r,new p(t)),monaco.languages.registerHoverProvider(r,new y(t)),monaco.languages.registerDocumentHighlightProvider(r,new k(t)),monaco.languages.registerLinkProvider(r,new C(t)),monaco.languages.registerFoldingRangeProvider(r,new T(t)),monaco.languages.registerDocumentSymbolProvider(r,new x(t)),"html"===r&&(monaco.languages.registerDocumentFormattingEditProvider(r,new I(t)),monaco.languages.registerDocumentRangeFormattingEditProvider(r,new S(t)),new u(r,t,e))}t.d(n,"setupMode",function(){return M})}}]);
//# sourceMappingURL=chunk-6ec0e15c.bundle.js.map