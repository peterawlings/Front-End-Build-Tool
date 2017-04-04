"use strict";var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};/*!
 * jQuery JavaScript Library v3.2.0
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2017-03-16T21:26Z
 */(function(global,factory){"use strict";if((typeof module==="undefined"?"undefined":_typeof(module))==="object"&&_typeof(module.exports)==="object"){// For CommonJS and CommonJS-like environments where a proper `window`
// is present, execute the factory and get jQuery.
// For environments that do not have a `window` with a `document`
// (such as Node.js), expose a factory as module.exports.
// This accentuates the need for the creation of a real `window`.
// e.g. var jQuery = require("jquery")(window);
// See ticket #14549 for more info.
module.exports=global.document?factory(global,true):function(w){if(!w.document){throw new Error("jQuery requires a window with a document");}return factory(w);};}else{factory(global);}// Pass this if window is not defined yet
})(typeof window!=="undefined"?window:undefined,function(window,noGlobal){// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";var arr=[];var document=window.document;var getProto=Object.getPrototypeOf;var _slice=arr.slice;var concat=arr.concat;var push=arr.push;var indexOf=arr.indexOf;var class2type={};var toString=class2type.toString;var hasOwn=class2type.hasOwnProperty;var fnToString=hasOwn.toString;var ObjectFunctionString=fnToString.call(Object);var support={};function DOMEval(code,doc){doc=doc||document;var script=doc.createElement("script");script.text=code;doc.head.appendChild(script).parentNode.removeChild(script);}/* global Symbol */// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module
var version="3.2.0",// Define a local copy of jQuery
jQuery=function jQuery(selector,context){// The jQuery object is actually just the init constructor 'enhanced'
// Need init if jQuery is called (just allow error to be thrown if not included)
return new jQuery.fn.init(selector,context);},// Support: Android <=4.0 only
// Make sure we trim BOM and NBSP
rtrim=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,// Matches dashed string for camelizing
rmsPrefix=/^-ms-/,rdashAlpha=/-([a-z])/g,// Used by jQuery.camelCase as callback to replace()
fcamelCase=function fcamelCase(all,letter){return letter.toUpperCase();};jQuery.fn=jQuery.prototype={// The current version of jQuery being used
jquery:version,constructor:jQuery,// The default length of a jQuery object is 0
length:0,toArray:function toArray(){return _slice.call(this);},// Get the Nth element in the matched element set OR
// Get the whole matched element set as a clean array
get:function get(num){// Return all the elements in a clean array
if(num==null){return _slice.call(this);}// Return just the one element from the set
return num<0?this[num+this.length]:this[num];},// Take an array of elements and push it onto the stack
// (returning the new matched element set)
pushStack:function pushStack(elems){// Build a new jQuery matched element set
var ret=jQuery.merge(this.constructor(),elems);// Add the old object onto the stack (as a reference)
ret.prevObject=this;// Return the newly-formed element set
return ret;},// Execute a callback for every element in the matched set.
each:function each(callback){return jQuery.each(this,callback);},map:function map(callback){return this.pushStack(jQuery.map(this,function(elem,i){return callback.call(elem,i,elem);}));},slice:function slice(){return this.pushStack(_slice.apply(this,arguments));},first:function first(){return this.eq(0);},last:function last(){return this.eq(-1);},eq:function eq(i){var len=this.length,j=+i+(i<0?len:0);return this.pushStack(j>=0&&j<len?[this[j]]:[]);},end:function end(){return this.prevObject||this.constructor();},// For internal use only.
// Behaves like an Array's method, not like a jQuery method.
push:push,sort:arr.sort,splice:arr.splice};jQuery.extend=jQuery.fn.extend=function(){var options,name,src,copy,copyIsArray,clone,target=arguments[0]||{},i=1,length=arguments.length,deep=false;// Handle a deep copy situation
if(typeof target==="boolean"){deep=target;// Skip the boolean and the target
target=arguments[i]||{};i++;}// Handle case when target is a string or something (possible in deep copy)
if((typeof target==="undefined"?"undefined":_typeof(target))!=="object"&&!jQuery.isFunction(target)){target={};}// Extend jQuery itself if only one argument is passed
if(i===length){target=this;i--;}for(;i<length;i++){// Only deal with non-null/undefined values
if((options=arguments[i])!=null){// Extend the base object
for(name in options){src=target[name];copy=options[name];// Prevent never-ending loop
if(target===copy){continue;}// Recurse if we're merging plain objects or arrays
if(deep&&copy&&(jQuery.isPlainObject(copy)||(copyIsArray=Array.isArray(copy)))){if(copyIsArray){copyIsArray=false;clone=src&&Array.isArray(src)?src:[];}else{clone=src&&jQuery.isPlainObject(src)?src:{};}// Never move original objects, clone them
target[name]=jQuery.extend(deep,clone,copy);// Don't bring in undefined values
}else if(copy!==undefined){target[name]=copy;}}}}// Return the modified object
return target;};jQuery.extend({// Unique for each copy of jQuery on the page
expando:"jQuery"+(version+Math.random()).replace(/\D/g,""),// Assume jQuery is ready without the ready module
isReady:true,error:function error(msg){throw new Error(msg);},noop:function noop(){},isFunction:function isFunction(obj){return jQuery.type(obj)==="function";},isWindow:function isWindow(obj){return obj!=null&&obj===obj.window;},isNumeric:function isNumeric(obj){// As of jQuery 3.0, isNumeric is limited to
// strings and numbers (primitives or objects)
// that can be coerced to finite numbers (gh-2662)
var type=jQuery.type(obj);return(type==="number"||type==="string")&&// parseFloat NaNs numeric-cast false positives ("")
// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
// subtraction forces infinities to NaN
!isNaN(obj-parseFloat(obj));},isPlainObject:function isPlainObject(obj){var proto,Ctor;// Detect obvious negatives
// Use toString instead of jQuery.type to catch host objects
if(!obj||toString.call(obj)!=="[object Object]"){return false;}proto=getProto(obj);// Objects with no prototype (e.g., `Object.create( null )`) are plain
if(!proto){return true;}// Objects with prototype are plain iff they were constructed by a global Object function
Ctor=hasOwn.call(proto,"constructor")&&proto.constructor;return typeof Ctor==="function"&&fnToString.call(Ctor)===ObjectFunctionString;},isEmptyObject:function isEmptyObject(obj){/* eslint-disable no-unused-vars */// See https://github.com/eslint/eslint/issues/6125
var name;for(name in obj){return false;}return true;},type:function type(obj){if(obj==null){return obj+"";}// Support: Android <=2.3 only (functionish RegExp)
return(typeof obj==="undefined"?"undefined":_typeof(obj))==="object"||typeof obj==="function"?class2type[toString.call(obj)]||"object":typeof obj==="undefined"?"undefined":_typeof(obj);},// Evaluates a script in a global context
globalEval:function globalEval(code){DOMEval(code);},// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 13
// Microsoft forgot to hump their vendor prefix (#9572)
camelCase:function camelCase(string){return string.replace(rmsPrefix,"ms-").replace(rdashAlpha,fcamelCase);},each:function each(obj,callback){var length,i=0;if(isArrayLike(obj)){length=obj.length;for(;i<length;i++){if(callback.call(obj[i],i,obj[i])===false){break;}}}else{for(i in obj){if(callback.call(obj[i],i,obj[i])===false){break;}}}return obj;},// Support: Android <=4.0 only
trim:function trim(text){return text==null?"":(text+"").replace(rtrim,"");},// results is for internal usage only
makeArray:function makeArray(arr,results){var ret=results||[];if(arr!=null){if(isArrayLike(Object(arr))){jQuery.merge(ret,typeof arr==="string"?[arr]:arr);}else{push.call(ret,arr);}}return ret;},inArray:function inArray(elem,arr,i){return arr==null?-1:indexOf.call(arr,elem,i);},// Support: Android <=4.0 only, PhantomJS 1 only
// push.apply(_, arraylike) throws on ancient WebKit
merge:function merge(first,second){var len=+second.length,j=0,i=first.length;for(;j<len;j++){first[i++]=second[j];}first.length=i;return first;},grep:function grep(elems,callback,invert){var callbackInverse,matches=[],i=0,length=elems.length,callbackExpect=!invert;// Go through the array, only saving the items
// that pass the validator function
for(;i<length;i++){callbackInverse=!callback(elems[i],i);if(callbackInverse!==callbackExpect){matches.push(elems[i]);}}return matches;},// arg is for internal usage only
map:function map(elems,callback,arg){var length,value,i=0,ret=[];// Go through the array, translating each of the items to their new values
if(isArrayLike(elems)){length=elems.length;for(;i<length;i++){value=callback(elems[i],i,arg);if(value!=null){ret.push(value);}}// Go through every key on the object,
}else{for(i in elems){value=callback(elems[i],i,arg);if(value!=null){ret.push(value);}}}// Flatten any nested arrays
return concat.apply([],ret);},// A global GUID counter for objects
guid:1,// Bind a function to a context, optionally partially applying any
// arguments.
proxy:function proxy(fn,context){var tmp,args,proxy;if(typeof context==="string"){tmp=fn[context];context=fn;fn=tmp;}// Quick check to determine if target is callable, in the spec
// this throws a TypeError, but we will just return undefined.
if(!jQuery.isFunction(fn)){return undefined;}// Simulated bind
args=_slice.call(arguments,2);proxy=function proxy(){return fn.apply(context||this,args.concat(_slice.call(arguments)));};// Set the guid of unique handler to the same of original handler, so it can be removed
proxy.guid=fn.guid=fn.guid||jQuery.guid++;return proxy;},now:Date.now,// jQuery.support is not used in Core but other projects attach their
// properties to it so it needs to exist.
support:support});if(typeof Symbol==="function"){jQuery.fn[Symbol.iterator]=arr[Symbol.iterator];}// Populate the class2type map
jQuery.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(i,name){class2type["[object "+name+"]"]=name.toLowerCase();});function isArrayLike(obj){// Support: real iOS 8.2 only (not reproducible in simulator)
// `in` check used to prevent JIT error (gh-2145)
// hasOwn isn't used here due to false negatives
// regarding Nodelist length in IE
var length=!!obj&&"length"in obj&&obj.length,type=jQuery.type(obj);if(type==="function"||jQuery.isWindow(obj)){return false;}return type==="array"||length===0||typeof length==="number"&&length>0&&length-1 in obj;}var Sizzle=/*!
 * Sizzle CSS Selector Engine v2.3.3
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-08-08
 */function(window){var i,support,Expr,getText,isXML,tokenize,compile,select,outermostContext,sortInput,hasDuplicate,// Local document vars
setDocument,document,docElem,documentIsHTML,rbuggyQSA,rbuggyMatches,matches,contains,// Instance-specific data
expando="sizzle"+1*new Date(),preferredDoc=window.document,dirruns=0,done=0,classCache=createCache(),tokenCache=createCache(),compilerCache=createCache(),sortOrder=function sortOrder(a,b){if(a===b){hasDuplicate=true;}return 0;},// Instance methods
hasOwn={}.hasOwnProperty,arr=[],pop=arr.pop,push_native=arr.push,push=arr.push,slice=arr.slice,// Use a stripped-down indexOf as it's faster than native
// https://jsperf.com/thor-indexof-vs-for/5
indexOf=function indexOf(list,elem){var i=0,len=list.length;for(;i<len;i++){if(list[i]===elem){return i;}}return-1;},booleans="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",// Regular expressions
// http://www.w3.org/TR/css3-selectors/#whitespace
whitespace="[\\x20\\t\\r\\n\\f]",// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
identifier="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
attributes="\\["+whitespace+"*("+identifier+")(?:"+whitespace+// Operator (capture 2)
"*([*^$|!~]?=)"+whitespace+// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+identifier+"))|)"+whitespace+"*\\]",pseudos=":("+identifier+")(?:\\(("+// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
// 1. quoted (capture 3; capture 4 or capture 5)
"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|"+// 2. simple (capture 6)
"((?:\\\\.|[^\\\\()[\\]]|"+attributes+")*)|"+// 3. anything else (capture 2)
".*"+")\\)|)",// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
rwhitespace=new RegExp(whitespace+"+","g"),rtrim=new RegExp("^"+whitespace+"+|((?:^|[^\\\\])(?:\\\\.)*)"+whitespace+"+$","g"),rcomma=new RegExp("^"+whitespace+"*,"+whitespace+"*"),rcombinators=new RegExp("^"+whitespace+"*([>+~]|"+whitespace+")"+whitespace+"*"),rattributeQuotes=new RegExp("="+whitespace+"*([^\\]'\"]*?)"+whitespace+"*\\]","g"),rpseudo=new RegExp(pseudos),ridentifier=new RegExp("^"+identifier+"$"),matchExpr={"ID":new RegExp("^#("+identifier+")"),"CLASS":new RegExp("^\\.("+identifier+")"),"TAG":new RegExp("^("+identifier+"|[*])"),"ATTR":new RegExp("^"+attributes),"PSEUDO":new RegExp("^"+pseudos),"CHILD":new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+whitespace+"*(even|odd|(([+-]|)(\\d*)n|)"+whitespace+"*(?:([+-]|)"+whitespace+"*(\\d+)|))"+whitespace+"*\\)|)","i"),"bool":new RegExp("^(?:"+booleans+")$","i"),// For use in libraries implementing .is()
// We use this for POS matching in `select`
"needsContext":new RegExp("^"+whitespace+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+whitespace+"*((?:-\\d)?\\d*)"+whitespace+"*\\)|)(?=[^-]|$)","i")},rinputs=/^(?:input|select|textarea|button)$/i,rheader=/^h\d$/i,rnative=/^[^{]+\{\s*\[native \w/,// Easily-parseable/retrievable ID or TAG or CLASS selectors
rquickExpr=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,rsibling=/[+~]/,// CSS escapes
// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
runescape=new RegExp("\\\\([\\da-f]{1,6}"+whitespace+"?|("+whitespace+")|.)","ig"),funescape=function funescape(_,escaped,escapedWhitespace){var high="0x"+escaped-0x10000;// NaN means non-codepoint
// Support: Firefox<24
// Workaround erroneous numeric interpretation of +"0x"
return high!==high||escapedWhitespace?escaped:high<0?// BMP codepoint
String.fromCharCode(high+0x10000):// Supplemental Plane codepoint (surrogate pair)
String.fromCharCode(high>>10|0xD800,high&0x3FF|0xDC00);},// CSS string/identifier serialization
// https://drafts.csswg.org/cssom/#common-serializing-idioms
rcssescape=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,fcssescape=function fcssescape(ch,asCodePoint){if(asCodePoint){// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
if(ch==="\0"){return"\uFFFD";}// Control characters and (dependent upon position) numbers get escaped as code points
return ch.slice(0,-1)+"\\"+ch.charCodeAt(ch.length-1).toString(16)+" ";}// Other potentially-special ASCII characters get backslash-escaped
return"\\"+ch;},// Used for iframes
// See setDocument()
// Removing the function wrapper causes a "Permission Denied"
// error in IE
unloadHandler=function unloadHandler(){setDocument();},disabledAncestor=addCombinator(function(elem){return elem.disabled===true&&("form"in elem||"label"in elem);},{dir:"parentNode",next:"legend"});// Optimize for push.apply( _, NodeList )
try{push.apply(arr=slice.call(preferredDoc.childNodes),preferredDoc.childNodes);// Support: Android<4.0
// Detect silently failing push.apply
arr[preferredDoc.childNodes.length].nodeType;}catch(e){push={apply:arr.length?// Leverage slice if possible
function(target,els){push_native.apply(target,slice.call(els));}:// Support: IE<9
// Otherwise append directly
function(target,els){var j=target.length,i=0;// Can't trust NodeList.length
while(target[j++]=els[i++]){}target.length=j-1;}};}function Sizzle(selector,context,results,seed){var m,i,elem,nid,match,groups,newSelector,newContext=context&&context.ownerDocument,// nodeType defaults to 9, since context defaults to document
nodeType=context?context.nodeType:9;results=results||[];// Return early from calls with invalid selector or context
if(typeof selector!=="string"||!selector||nodeType!==1&&nodeType!==9&&nodeType!==11){return results;}// Try to shortcut find operations (as opposed to filters) in HTML documents
if(!seed){if((context?context.ownerDocument||context:preferredDoc)!==document){setDocument(context);}context=context||document;if(documentIsHTML){// If the selector is sufficiently simple, try using a "get*By*" DOM method
// (excepting DocumentFragment context, where the methods don't exist)
if(nodeType!==11&&(match=rquickExpr.exec(selector))){// ID selector
if(m=match[1]){// Document context
if(nodeType===9){if(elem=context.getElementById(m)){// Support: IE, Opera, Webkit
// TODO: identify versions
// getElementById can match elements by name instead of ID
if(elem.id===m){results.push(elem);return results;}}else{return results;}// Element context
}else{// Support: IE, Opera, Webkit
// TODO: identify versions
// getElementById can match elements by name instead of ID
if(newContext&&(elem=newContext.getElementById(m))&&contains(context,elem)&&elem.id===m){results.push(elem);return results;}}// Type selector
}else if(match[2]){push.apply(results,context.getElementsByTagName(selector));return results;// Class selector
}else if((m=match[3])&&support.getElementsByClassName&&context.getElementsByClassName){push.apply(results,context.getElementsByClassName(m));return results;}}// Take advantage of querySelectorAll
if(support.qsa&&!compilerCache[selector+" "]&&(!rbuggyQSA||!rbuggyQSA.test(selector))){if(nodeType!==1){newContext=context;newSelector=selector;// qSA looks outside Element context, which is not what we want
// Thanks to Andrew Dupont for this workaround technique
// Support: IE <=8
// Exclude object elements
}else if(context.nodeName.toLowerCase()!=="object"){// Capture the context ID, setting it first if necessary
if(nid=context.getAttribute("id")){nid=nid.replace(rcssescape,fcssescape);}else{context.setAttribute("id",nid=expando);}// Prefix every selector in the list
groups=tokenize(selector);i=groups.length;while(i--){groups[i]="#"+nid+" "+toSelector(groups[i]);}newSelector=groups.join(",");// Expand context for sibling selectors
newContext=rsibling.test(selector)&&testContext(context.parentNode)||context;}if(newSelector){try{push.apply(results,newContext.querySelectorAll(newSelector));return results;}catch(qsaError){}finally{if(nid===expando){context.removeAttribute("id");}}}}}}// All others
return select(selector.replace(rtrim,"$1"),context,results,seed);}/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */function createCache(){var keys=[];function cache(key,value){// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
if(keys.push(key+" ")>Expr.cacheLength){// Only keep the most recent entries
delete cache[keys.shift()];}return cache[key+" "]=value;}return cache;}/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */function markFunction(fn){fn[expando]=true;return fn;}/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */function assert(fn){var el=document.createElement("fieldset");try{return!!fn(el);}catch(e){return false;}finally{// Remove from its parent by default
if(el.parentNode){el.parentNode.removeChild(el);}// release memory in IE
el=null;}}/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */function addHandle(attrs,handler){var arr=attrs.split("|"),i=arr.length;while(i--){Expr.attrHandle[arr[i]]=handler;}}/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */function siblingCheck(a,b){var cur=b&&a,diff=cur&&a.nodeType===1&&b.nodeType===1&&a.sourceIndex-b.sourceIndex;// Use IE sourceIndex if available on both nodes
if(diff){return diff;}// Check if b follows a
if(cur){while(cur=cur.nextSibling){if(cur===b){return-1;}}}return a?1:-1;}/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */function createInputPseudo(type){return function(elem){var name=elem.nodeName.toLowerCase();return name==="input"&&elem.type===type;};}/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */function createButtonPseudo(type){return function(elem){var name=elem.nodeName.toLowerCase();return(name==="input"||name==="button")&&elem.type===type;};}/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */function createDisabledPseudo(disabled){// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
return function(elem){// Only certain elements can match :enabled or :disabled
// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
if("form"in elem){// Check for inherited disabledness on relevant non-disabled elements:
// * listed form-associated elements in a disabled fieldset
//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
// * option elements in a disabled optgroup
//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
// All such elements have a "form" property.
if(elem.parentNode&&elem.disabled===false){// Option elements defer to a parent optgroup if present
if("label"in elem){if("label"in elem.parentNode){return elem.parentNode.disabled===disabled;}else{return elem.disabled===disabled;}}// Support: IE 6 - 11
// Use the isDisabled shortcut property to check for disabled fieldset ancestors
return elem.isDisabled===disabled||// Where there is no isDisabled, check manually
/* jshint -W018 */elem.isDisabled!==!disabled&&disabledAncestor(elem)===disabled;}return elem.disabled===disabled;// Try to winnow out elements that can't be disabled before trusting the disabled property.
// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
// even exist on them, let alone have a boolean value.
}else if("label"in elem){return elem.disabled===disabled;}// Remaining elements are neither :enabled nor :disabled
return false;};}/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */function createPositionalPseudo(fn){return markFunction(function(argument){argument=+argument;return markFunction(function(seed,matches){var j,matchIndexes=fn([],seed.length,argument),i=matchIndexes.length;// Match elements found at the specified indexes
while(i--){if(seed[j=matchIndexes[i]]){seed[j]=!(matches[j]=seed[j]);}}});});}/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */function testContext(context){return context&&typeof context.getElementsByTagName!=="undefined"&&context;}// Expose support vars for convenience
support=Sizzle.support={};/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */isXML=Sizzle.isXML=function(elem){// documentElement is verified for cases where it doesn't yet exist
// (such as loading iframes in IE - #4833)
var documentElement=elem&&(elem.ownerDocument||elem).documentElement;return documentElement?documentElement.nodeName!=="HTML":false;};/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */setDocument=Sizzle.setDocument=function(node){var hasCompare,subWindow,doc=node?node.ownerDocument||node:preferredDoc;// Return early if doc is invalid or already selected
if(doc===document||doc.nodeType!==9||!doc.documentElement){return document;}// Update global variables
document=doc;docElem=document.documentElement;documentIsHTML=!isXML(document);// Support: IE 9-11, Edge
// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
if(preferredDoc!==document&&(subWindow=document.defaultView)&&subWindow.top!==subWindow){// Support: IE 11, Edge
if(subWindow.addEventListener){subWindow.addEventListener("unload",unloadHandler,false);// Support: IE 9 - 10 only
}else if(subWindow.attachEvent){subWindow.attachEvent("onunload",unloadHandler);}}/* Attributes
	---------------------------------------------------------------------- */// Support: IE<8
// Verify that getAttribute really returns attributes and not properties
// (excepting IE8 booleans)
support.attributes=assert(function(el){el.className="i";return!el.getAttribute("className");});/* getElement(s)By*
	---------------------------------------------------------------------- */// Check if getElementsByTagName("*") returns only elements
support.getElementsByTagName=assert(function(el){el.appendChild(document.createComment(""));return!el.getElementsByTagName("*").length;});// Support: IE<9
support.getElementsByClassName=rnative.test(document.getElementsByClassName);// Support: IE<10
// Check if getElementById returns elements by name
// The broken getElementById methods don't pick up programmatically-set names,
// so use a roundabout getElementsByName test
support.getById=assert(function(el){docElem.appendChild(el).id=expando;return!document.getElementsByName||!document.getElementsByName(expando).length;});// ID filter and find
if(support.getById){Expr.filter["ID"]=function(id){var attrId=id.replace(runescape,funescape);return function(elem){return elem.getAttribute("id")===attrId;};};Expr.find["ID"]=function(id,context){if(typeof context.getElementById!=="undefined"&&documentIsHTML){var elem=context.getElementById(id);return elem?[elem]:[];}};}else{Expr.filter["ID"]=function(id){var attrId=id.replace(runescape,funescape);return function(elem){var node=typeof elem.getAttributeNode!=="undefined"&&elem.getAttributeNode("id");return node&&node.value===attrId;};};// Support: IE 6 - 7 only
// getElementById is not reliable as a find shortcut
Expr.find["ID"]=function(id,context){if(typeof context.getElementById!=="undefined"&&documentIsHTML){var node,i,elems,elem=context.getElementById(id);if(elem){// Verify the id attribute
node=elem.getAttributeNode("id");if(node&&node.value===id){return[elem];}// Fall back on getElementsByName
elems=context.getElementsByName(id);i=0;while(elem=elems[i++]){node=elem.getAttributeNode("id");if(node&&node.value===id){return[elem];}}}return[];}};}// Tag
Expr.find["TAG"]=support.getElementsByTagName?function(tag,context){if(typeof context.getElementsByTagName!=="undefined"){return context.getElementsByTagName(tag);// DocumentFragment nodes don't have gEBTN
}else if(support.qsa){return context.querySelectorAll(tag);}}:function(tag,context){var elem,tmp=[],i=0,// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
results=context.getElementsByTagName(tag);// Filter out possible comments
if(tag==="*"){while(elem=results[i++]){if(elem.nodeType===1){tmp.push(elem);}}return tmp;}return results;};// Class
Expr.find["CLASS"]=support.getElementsByClassName&&function(className,context){if(typeof context.getElementsByClassName!=="undefined"&&documentIsHTML){return context.getElementsByClassName(className);}};/* QSA/matchesSelector
	---------------------------------------------------------------------- */// QSA and matchesSelector support
// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
rbuggyMatches=[];// qSa(:focus) reports false when true (Chrome 21)
// We allow this because of a bug in IE8/9 that throws an error
// whenever `document.activeElement` is accessed on an iframe
// So, we allow :focus to pass through QSA all the time to avoid the IE error
// See https://bugs.jquery.com/ticket/13378
rbuggyQSA=[];if(support.qsa=rnative.test(document.querySelectorAll)){// Build QSA regex
// Regex strategy adopted from Diego Perini
assert(function(el){// Select is set to empty string on purpose
// This is to test IE's treatment of not explicitly
// setting a boolean content attribute,
// since its presence should be enough
// https://bugs.jquery.com/ticket/12359
docElem.appendChild(el).innerHTML="<a id='"+expando+"'></a>"+"<select id='"+expando+"-\r\\' msallowcapture=''>"+"<option selected=''></option></select>";// Support: IE8, Opera 11-12.16
// Nothing should be selected when empty strings follow ^= or $= or *=
// The test attribute must be unknown in Opera but "safe" for WinRT
// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
if(el.querySelectorAll("[msallowcapture^='']").length){rbuggyQSA.push("[*^$]="+whitespace+"*(?:''|\"\")");}// Support: IE8
// Boolean attributes and "value" are not treated correctly
if(!el.querySelectorAll("[selected]").length){rbuggyQSA.push("\\["+whitespace+"*(?:value|"+booleans+")");}// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
if(!el.querySelectorAll("[id~="+expando+"-]").length){rbuggyQSA.push("~=");}// Webkit/Opera - :checked should return selected option elements
// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
// IE8 throws error here and will not see later tests
if(!el.querySelectorAll(":checked").length){rbuggyQSA.push(":checked");}// Support: Safari 8+, iOS 8+
// https://bugs.webkit.org/show_bug.cgi?id=136851
// In-page `selector#id sibling-combinator selector` fails
if(!el.querySelectorAll("a#"+expando+"+*").length){rbuggyQSA.push(".#.+[+~]");}});assert(function(el){el.innerHTML="<a href='' disabled='disabled'></a>"+"<select disabled='disabled'><option/></select>";// Support: Windows 8 Native Apps
// The type and name attributes are restricted during .innerHTML assignment
var input=document.createElement("input");input.setAttribute("type","hidden");el.appendChild(input).setAttribute("name","D");// Support: IE8
// Enforce case-sensitivity of name attribute
if(el.querySelectorAll("[name=d]").length){rbuggyQSA.push("name"+whitespace+"*[*^$|!~]?=");}// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
// IE8 throws error here and will not see later tests
if(el.querySelectorAll(":enabled").length!==2){rbuggyQSA.push(":enabled",":disabled");}// Support: IE9-11+
// IE's :disabled selector does not pick up the children of disabled fieldsets
docElem.appendChild(el).disabled=true;if(el.querySelectorAll(":disabled").length!==2){rbuggyQSA.push(":enabled",":disabled");}// Opera 10-11 does not throw on post-comma invalid pseudos
el.querySelectorAll("*,:x");rbuggyQSA.push(",.*:");});}if(support.matchesSelector=rnative.test(matches=docElem.matches||docElem.webkitMatchesSelector||docElem.mozMatchesSelector||docElem.oMatchesSelector||docElem.msMatchesSelector)){assert(function(el){// Check to see if it's possible to do matchesSelector
// on a disconnected node (IE 9)
support.disconnectedMatch=matches.call(el,"*");// This should fail with an exception
// Gecko does not error, returns false instead
matches.call(el,"[s!='']:x");rbuggyMatches.push("!=",pseudos);});}rbuggyQSA=rbuggyQSA.length&&new RegExp(rbuggyQSA.join("|"));rbuggyMatches=rbuggyMatches.length&&new RegExp(rbuggyMatches.join("|"));/* Contains
	---------------------------------------------------------------------- */hasCompare=rnative.test(docElem.compareDocumentPosition);// Element contains another
// Purposefully self-exclusive
// As in, an element does not contain itself
contains=hasCompare||rnative.test(docElem.contains)?function(a,b){var adown=a.nodeType===9?a.documentElement:a,bup=b&&b.parentNode;return a===bup||!!(bup&&bup.nodeType===1&&(adown.contains?adown.contains(bup):a.compareDocumentPosition&&a.compareDocumentPosition(bup)&16));}:function(a,b){if(b){while(b=b.parentNode){if(b===a){return true;}}}return false;};/* Sorting
	---------------------------------------------------------------------- */// Document order sorting
sortOrder=hasCompare?function(a,b){// Flag for duplicate removal
if(a===b){hasDuplicate=true;return 0;}// Sort on method existence if only one input has compareDocumentPosition
var compare=!a.compareDocumentPosition-!b.compareDocumentPosition;if(compare){return compare;}// Calculate position if both inputs belong to the same document
compare=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):// Otherwise we know they are disconnected
1;// Disconnected nodes
if(compare&1||!support.sortDetached&&b.compareDocumentPosition(a)===compare){// Choose the first element that is related to our preferred document
if(a===document||a.ownerDocument===preferredDoc&&contains(preferredDoc,a)){return-1;}if(b===document||b.ownerDocument===preferredDoc&&contains(preferredDoc,b)){return 1;}// Maintain original order
return sortInput?indexOf(sortInput,a)-indexOf(sortInput,b):0;}return compare&4?-1:1;}:function(a,b){// Exit early if the nodes are identical
if(a===b){hasDuplicate=true;return 0;}var cur,i=0,aup=a.parentNode,bup=b.parentNode,ap=[a],bp=[b];// Parentless nodes are either documents or disconnected
if(!aup||!bup){return a===document?-1:b===document?1:aup?-1:bup?1:sortInput?indexOf(sortInput,a)-indexOf(sortInput,b):0;// If the nodes are siblings, we can do a quick check
}else if(aup===bup){return siblingCheck(a,b);}// Otherwise we need full lists of their ancestors for comparison
cur=a;while(cur=cur.parentNode){ap.unshift(cur);}cur=b;while(cur=cur.parentNode){bp.unshift(cur);}// Walk down the tree looking for a discrepancy
while(ap[i]===bp[i]){i++;}return i?// Do a sibling check if the nodes have a common ancestor
siblingCheck(ap[i],bp[i]):// Otherwise nodes in our document sort first
ap[i]===preferredDoc?-1:bp[i]===preferredDoc?1:0;};return document;};Sizzle.matches=function(expr,elements){return Sizzle(expr,null,null,elements);};Sizzle.matchesSelector=function(elem,expr){// Set document vars if needed
if((elem.ownerDocument||elem)!==document){setDocument(elem);}// Make sure that attribute selectors are quoted
expr=expr.replace(rattributeQuotes,"='$1']");if(support.matchesSelector&&documentIsHTML&&!compilerCache[expr+" "]&&(!rbuggyMatches||!rbuggyMatches.test(expr))&&(!rbuggyQSA||!rbuggyQSA.test(expr))){try{var ret=matches.call(elem,expr);// IE 9's matchesSelector returns false on disconnected nodes
if(ret||support.disconnectedMatch||// As well, disconnected nodes are said to be in a document
// fragment in IE 9
elem.document&&elem.document.nodeType!==11){return ret;}}catch(e){}}return Sizzle(expr,document,null,[elem]).length>0;};Sizzle.contains=function(context,elem){// Set document vars if needed
if((context.ownerDocument||context)!==document){setDocument(context);}return contains(context,elem);};Sizzle.attr=function(elem,name){// Set document vars if needed
if((elem.ownerDocument||elem)!==document){setDocument(elem);}var fn=Expr.attrHandle[name.toLowerCase()],// Don't get fooled by Object.prototype properties (jQuery #13807)
val=fn&&hasOwn.call(Expr.attrHandle,name.toLowerCase())?fn(elem,name,!documentIsHTML):undefined;return val!==undefined?val:support.attributes||!documentIsHTML?elem.getAttribute(name):(val=elem.getAttributeNode(name))&&val.specified?val.value:null;};Sizzle.escape=function(sel){return(sel+"").replace(rcssescape,fcssescape);};Sizzle.error=function(msg){throw new Error("Syntax error, unrecognized expression: "+msg);};/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */Sizzle.uniqueSort=function(results){var elem,duplicates=[],j=0,i=0;// Unless we *know* we can detect duplicates, assume their presence
hasDuplicate=!support.detectDuplicates;sortInput=!support.sortStable&&results.slice(0);results.sort(sortOrder);if(hasDuplicate){while(elem=results[i++]){if(elem===results[i]){j=duplicates.push(i);}}while(j--){results.splice(duplicates[j],1);}}// Clear input after sorting to release objects
// See https://github.com/jquery/sizzle/pull/225
sortInput=null;return results;};/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */getText=Sizzle.getText=function(elem){var node,ret="",i=0,nodeType=elem.nodeType;if(!nodeType){// If no nodeType, this is expected to be an array
while(node=elem[i++]){// Do not traverse comment nodes
ret+=getText(node);}}else if(nodeType===1||nodeType===9||nodeType===11){// Use textContent for elements
// innerText usage removed for consistency of new lines (jQuery #11153)
if(typeof elem.textContent==="string"){return elem.textContent;}else{// Traverse its children
for(elem=elem.firstChild;elem;elem=elem.nextSibling){ret+=getText(elem);}}}else if(nodeType===3||nodeType===4){return elem.nodeValue;}// Do not include comment or processing instruction nodes
return ret;};Expr=Sizzle.selectors={// Can be adjusted by the user
cacheLength:50,createPseudo:markFunction,match:matchExpr,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:true}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:true},"~":{dir:"previousSibling"}},preFilter:{"ATTR":function ATTR(match){match[1]=match[1].replace(runescape,funescape);// Move the given value to match[3] whether quoted or unquoted
match[3]=(match[3]||match[4]||match[5]||"").replace(runescape,funescape);if(match[2]==="~="){match[3]=" "+match[3]+" ";}return match.slice(0,4);},"CHILD":function CHILD(match){/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/match[1]=match[1].toLowerCase();if(match[1].slice(0,3)==="nth"){// nth-* requires argument
if(!match[3]){Sizzle.error(match[0]);}// numeric x and y parameters for Expr.filter.CHILD
// remember that false/true cast respectively to 0/1
match[4]=+(match[4]?match[5]+(match[6]||1):2*(match[3]==="even"||match[3]==="odd"));match[5]=+(match[7]+match[8]||match[3]==="odd");// other types prohibit arguments
}else if(match[3]){Sizzle.error(match[0]);}return match;},"PSEUDO":function PSEUDO(match){var excess,unquoted=!match[6]&&match[2];if(matchExpr["CHILD"].test(match[0])){return null;}// Accept quoted arguments as-is
if(match[3]){match[2]=match[4]||match[5]||"";// Strip excess characters from unquoted arguments
}else if(unquoted&&rpseudo.test(unquoted)&&(// Get excess from tokenize (recursively)
excess=tokenize(unquoted,true))&&(// advance to the next closing parenthesis
excess=unquoted.indexOf(")",unquoted.length-excess)-unquoted.length)){// excess is a negative index
match[0]=match[0].slice(0,excess);match[2]=unquoted.slice(0,excess);}// Return only captures needed by the pseudo filter method (type and argument)
return match.slice(0,3);}},filter:{"TAG":function TAG(nodeNameSelector){var nodeName=nodeNameSelector.replace(runescape,funescape).toLowerCase();return nodeNameSelector==="*"?function(){return true;}:function(elem){return elem.nodeName&&elem.nodeName.toLowerCase()===nodeName;};},"CLASS":function CLASS(className){var pattern=classCache[className+" "];return pattern||(pattern=new RegExp("(^|"+whitespace+")"+className+"("+whitespace+"|$)"))&&classCache(className,function(elem){return pattern.test(typeof elem.className==="string"&&elem.className||typeof elem.getAttribute!=="undefined"&&elem.getAttribute("class")||"");});},"ATTR":function ATTR(name,operator,check){return function(elem){var result=Sizzle.attr(elem,name);if(result==null){return operator==="!=";}if(!operator){return true;}result+="";return operator==="="?result===check:operator==="!="?result!==check:operator==="^="?check&&result.indexOf(check)===0:operator==="*="?check&&result.indexOf(check)>-1:operator==="$="?check&&result.slice(-check.length)===check:operator==="~="?(" "+result.replace(rwhitespace," ")+" ").indexOf(check)>-1:operator==="|="?result===check||result.slice(0,check.length+1)===check+"-":false;};},"CHILD":function CHILD(type,what,argument,first,last){var simple=type.slice(0,3)!=="nth",forward=type.slice(-4)!=="last",ofType=what==="of-type";return first===1&&last===0?// Shortcut for :nth-*(n)
function(elem){return!!elem.parentNode;}:function(elem,context,xml){var cache,uniqueCache,outerCache,node,nodeIndex,start,dir=simple!==forward?"nextSibling":"previousSibling",parent=elem.parentNode,name=ofType&&elem.nodeName.toLowerCase(),useCache=!xml&&!ofType,diff=false;if(parent){// :(first|last|only)-(child|of-type)
if(simple){while(dir){node=elem;while(node=node[dir]){if(ofType?node.nodeName.toLowerCase()===name:node.nodeType===1){return false;}}// Reverse direction for :only-* (if we haven't yet done so)
start=dir=type==="only"&&!start&&"nextSibling";}return true;}start=[forward?parent.firstChild:parent.lastChild];// non-xml :nth-child(...) stores cache data on `parent`
if(forward&&useCache){// Seek `elem` from a previously-cached index
// ...in a gzip-friendly way
node=parent;outerCache=node[expando]||(node[expando]={});// Support: IE <9 only
// Defend against cloned attroperties (jQuery gh-1709)
uniqueCache=outerCache[node.uniqueID]||(outerCache[node.uniqueID]={});cache=uniqueCache[type]||[];nodeIndex=cache[0]===dirruns&&cache[1];diff=nodeIndex&&cache[2];node=nodeIndex&&parent.childNodes[nodeIndex];while(node=++nodeIndex&&node&&node[dir]||(// Fallback to seeking `elem` from the start
diff=nodeIndex=0)||start.pop()){// When found, cache indexes on `parent` and break
if(node.nodeType===1&&++diff&&node===elem){uniqueCache[type]=[dirruns,nodeIndex,diff];break;}}}else{// Use previously-cached element index if available
if(useCache){// ...in a gzip-friendly way
node=elem;outerCache=node[expando]||(node[expando]={});// Support: IE <9 only
// Defend against cloned attroperties (jQuery gh-1709)
uniqueCache=outerCache[node.uniqueID]||(outerCache[node.uniqueID]={});cache=uniqueCache[type]||[];nodeIndex=cache[0]===dirruns&&cache[1];diff=nodeIndex;}// xml :nth-child(...)
// or :nth-last-child(...) or :nth(-last)?-of-type(...)
if(diff===false){// Use the same loop as above to seek `elem` from the start
while(node=++nodeIndex&&node&&node[dir]||(diff=nodeIndex=0)||start.pop()){if((ofType?node.nodeName.toLowerCase()===name:node.nodeType===1)&&++diff){// Cache the index of each encountered element
if(useCache){outerCache=node[expando]||(node[expando]={});// Support: IE <9 only
// Defend against cloned attroperties (jQuery gh-1709)
uniqueCache=outerCache[node.uniqueID]||(outerCache[node.uniqueID]={});uniqueCache[type]=[dirruns,diff];}if(node===elem){break;}}}}}// Incorporate the offset, then check against cycle size
diff-=last;return diff===first||diff%first===0&&diff/first>=0;}};},"PSEUDO":function PSEUDO(pseudo,argument){// pseudo-class names are case-insensitive
// http://www.w3.org/TR/selectors/#pseudo-classes
// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
// Remember that setFilters inherits from pseudos
var args,fn=Expr.pseudos[pseudo]||Expr.setFilters[pseudo.toLowerCase()]||Sizzle.error("unsupported pseudo: "+pseudo);// The user may use createPseudo to indicate that
// arguments are needed to create the filter function
// just as Sizzle does
if(fn[expando]){return fn(argument);}// But maintain support for old signatures
if(fn.length>1){args=[pseudo,pseudo,"",argument];return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase())?markFunction(function(seed,matches){var idx,matched=fn(seed,argument),i=matched.length;while(i--){idx=indexOf(seed,matched[i]);seed[idx]=!(matches[idx]=matched[i]);}}):function(elem){return fn(elem,0,args);};}return fn;}},pseudos:{// Potentially complex pseudos
"not":markFunction(function(selector){// Trim the selector passed to compile
// to avoid treating leading and trailing
// spaces as combinators
var input=[],results=[],matcher=compile(selector.replace(rtrim,"$1"));return matcher[expando]?markFunction(function(seed,matches,context,xml){var elem,unmatched=matcher(seed,null,xml,[]),i=seed.length;// Match elements unmatched by `matcher`
while(i--){if(elem=unmatched[i]){seed[i]=!(matches[i]=elem);}}}):function(elem,context,xml){input[0]=elem;matcher(input,null,xml,results);// Don't keep the element (issue #299)
input[0]=null;return!results.pop();};}),"has":markFunction(function(selector){return function(elem){return Sizzle(selector,elem).length>0;};}),"contains":markFunction(function(text){text=text.replace(runescape,funescape);return function(elem){return(elem.textContent||elem.innerText||getText(elem)).indexOf(text)>-1;};}),// "Whether an element is represented by a :lang() selector
// is based solely on the element's language value
// being equal to the identifier C,
// or beginning with the identifier C immediately followed by "-".
// The matching of C against the element's language value is performed case-insensitively.
// The identifier C does not have to be a valid language name."
// http://www.w3.org/TR/selectors/#lang-pseudo
"lang":markFunction(function(lang){// lang value must be a valid identifier
if(!ridentifier.test(lang||"")){Sizzle.error("unsupported lang: "+lang);}lang=lang.replace(runescape,funescape).toLowerCase();return function(elem){var elemLang;do{if(elemLang=documentIsHTML?elem.lang:elem.getAttribute("xml:lang")||elem.getAttribute("lang")){elemLang=elemLang.toLowerCase();return elemLang===lang||elemLang.indexOf(lang+"-")===0;}}while((elem=elem.parentNode)&&elem.nodeType===1);return false;};}),// Miscellaneous
"target":function target(elem){var hash=window.location&&window.location.hash;return hash&&hash.slice(1)===elem.id;},"root":function root(elem){return elem===docElem;},"focus":function focus(elem){return elem===document.activeElement&&(!document.hasFocus||document.hasFocus())&&!!(elem.type||elem.href||~elem.tabIndex);},// Boolean properties
"enabled":createDisabledPseudo(false),"disabled":createDisabledPseudo(true),"checked":function checked(elem){// In CSS3, :checked should return both checked and selected elements
// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
var nodeName=elem.nodeName.toLowerCase();return nodeName==="input"&&!!elem.checked||nodeName==="option"&&!!elem.selected;},"selected":function selected(elem){// Accessing this property makes selected-by-default
// options in Safari work properly
if(elem.parentNode){elem.parentNode.selectedIndex;}return elem.selected===true;},// Contents
"empty":function empty(elem){// http://www.w3.org/TR/selectors/#empty-pseudo
// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
//   but not by others (comment: 8; processing instruction: 7; etc.)
// nodeType < 6 works because attributes (2) do not appear as children
for(elem=elem.firstChild;elem;elem=elem.nextSibling){if(elem.nodeType<6){return false;}}return true;},"parent":function parent(elem){return!Expr.pseudos["empty"](elem);},// Element/input types
"header":function header(elem){return rheader.test(elem.nodeName);},"input":function input(elem){return rinputs.test(elem.nodeName);},"button":function button(elem){var name=elem.nodeName.toLowerCase();return name==="input"&&elem.type==="button"||name==="button";},"text":function text(elem){var attr;return elem.nodeName.toLowerCase()==="input"&&elem.type==="text"&&(// Support: IE<8
// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
(attr=elem.getAttribute("type"))==null||attr.toLowerCase()==="text");},// Position-in-collection
"first":createPositionalPseudo(function(){return[0];}),"last":createPositionalPseudo(function(matchIndexes,length){return[length-1];}),"eq":createPositionalPseudo(function(matchIndexes,length,argument){return[argument<0?argument+length:argument];}),"even":createPositionalPseudo(function(matchIndexes,length){var i=0;for(;i<length;i+=2){matchIndexes.push(i);}return matchIndexes;}),"odd":createPositionalPseudo(function(matchIndexes,length){var i=1;for(;i<length;i+=2){matchIndexes.push(i);}return matchIndexes;}),"lt":createPositionalPseudo(function(matchIndexes,length,argument){var i=argument<0?argument+length:argument;for(;--i>=0;){matchIndexes.push(i);}return matchIndexes;}),"gt":createPositionalPseudo(function(matchIndexes,length,argument){var i=argument<0?argument+length:argument;for(;++i<length;){matchIndexes.push(i);}return matchIndexes;})}};Expr.pseudos["nth"]=Expr.pseudos["eq"];// Add button/input type pseudos
for(i in{radio:true,checkbox:true,file:true,password:true,image:true}){Expr.pseudos[i]=createInputPseudo(i);}for(i in{submit:true,reset:true}){Expr.pseudos[i]=createButtonPseudo(i);}// Easy API for creating new setFilters
function setFilters(){}setFilters.prototype=Expr.filters=Expr.pseudos;Expr.setFilters=new setFilters();tokenize=Sizzle.tokenize=function(selector,parseOnly){var matched,match,tokens,type,soFar,groups,preFilters,cached=tokenCache[selector+" "];if(cached){return parseOnly?0:cached.slice(0);}soFar=selector;groups=[];preFilters=Expr.preFilter;while(soFar){// Comma and first run
if(!matched||(match=rcomma.exec(soFar))){if(match){// Don't consume trailing commas as valid
soFar=soFar.slice(match[0].length)||soFar;}groups.push(tokens=[]);}matched=false;// Combinators
if(match=rcombinators.exec(soFar)){matched=match.shift();tokens.push({value:matched,// Cast descendant combinators to space
type:match[0].replace(rtrim," ")});soFar=soFar.slice(matched.length);}// Filters
for(type in Expr.filter){if((match=matchExpr[type].exec(soFar))&&(!preFilters[type]||(match=preFilters[type](match)))){matched=match.shift();tokens.push({value:matched,type:type,matches:match});soFar=soFar.slice(matched.length);}}if(!matched){break;}}// Return the length of the invalid excess
// if we're just parsing
// Otherwise, throw an error or return tokens
return parseOnly?soFar.length:soFar?Sizzle.error(selector):// Cache the tokens
tokenCache(selector,groups).slice(0);};function toSelector(tokens){var i=0,len=tokens.length,selector="";for(;i<len;i++){selector+=tokens[i].value;}return selector;}function addCombinator(matcher,combinator,base){var dir=combinator.dir,skip=combinator.next,key=skip||dir,checkNonElements=base&&key==="parentNode",doneName=done++;return combinator.first?// Check against closest ancestor/preceding element
function(elem,context,xml){while(elem=elem[dir]){if(elem.nodeType===1||checkNonElements){return matcher(elem,context,xml);}}return false;}:// Check against all ancestor/preceding elements
function(elem,context,xml){var oldCache,uniqueCache,outerCache,newCache=[dirruns,doneName];// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
if(xml){while(elem=elem[dir]){if(elem.nodeType===1||checkNonElements){if(matcher(elem,context,xml)){return true;}}}}else{while(elem=elem[dir]){if(elem.nodeType===1||checkNonElements){outerCache=elem[expando]||(elem[expando]={});// Support: IE <9 only
// Defend against cloned attroperties (jQuery gh-1709)
uniqueCache=outerCache[elem.uniqueID]||(outerCache[elem.uniqueID]={});if(skip&&skip===elem.nodeName.toLowerCase()){elem=elem[dir]||elem;}else if((oldCache=uniqueCache[key])&&oldCache[0]===dirruns&&oldCache[1]===doneName){// Assign to newCache so results back-propagate to previous elements
return newCache[2]=oldCache[2];}else{// Reuse newcache so results back-propagate to previous elements
uniqueCache[key]=newCache;// A match means we're done; a fail means we have to keep checking
if(newCache[2]=matcher(elem,context,xml)){return true;}}}}}return false;};}function elementMatcher(matchers){return matchers.length>1?function(elem,context,xml){var i=matchers.length;while(i--){if(!matchers[i](elem,context,xml)){return false;}}return true;}:matchers[0];}function multipleContexts(selector,contexts,results){var i=0,len=contexts.length;for(;i<len;i++){Sizzle(selector,contexts[i],results);}return results;}function condense(unmatched,map,filter,context,xml){var elem,newUnmatched=[],i=0,len=unmatched.length,mapped=map!=null;for(;i<len;i++){if(elem=unmatched[i]){if(!filter||filter(elem,context,xml)){newUnmatched.push(elem);if(mapped){map.push(i);}}}}return newUnmatched;}function setMatcher(preFilter,selector,matcher,postFilter,postFinder,postSelector){if(postFilter&&!postFilter[expando]){postFilter=setMatcher(postFilter);}if(postFinder&&!postFinder[expando]){postFinder=setMatcher(postFinder,postSelector);}return markFunction(function(seed,results,context,xml){var temp,i,elem,preMap=[],postMap=[],preexisting=results.length,// Get initial elements from seed or context
elems=seed||multipleContexts(selector||"*",context.nodeType?[context]:context,[]),// Prefilter to get matcher input, preserving a map for seed-results synchronization
matcherIn=preFilter&&(seed||!selector)?condense(elems,preMap,preFilter,context,xml):elems,matcherOut=matcher?// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
postFinder||(seed?preFilter:preexisting||postFilter)?// ...intermediate processing is necessary
[]:// ...otherwise use results directly
results:matcherIn;// Find primary matches
if(matcher){matcher(matcherIn,matcherOut,context,xml);}// Apply postFilter
if(postFilter){temp=condense(matcherOut,postMap);postFilter(temp,[],context,xml);// Un-match failing elements by moving them back to matcherIn
i=temp.length;while(i--){if(elem=temp[i]){matcherOut[postMap[i]]=!(matcherIn[postMap[i]]=elem);}}}if(seed){if(postFinder||preFilter){if(postFinder){// Get the final matcherOut by condensing this intermediate into postFinder contexts
temp=[];i=matcherOut.length;while(i--){if(elem=matcherOut[i]){// Restore matcherIn since elem is not yet a final match
temp.push(matcherIn[i]=elem);}}postFinder(null,matcherOut=[],temp,xml);}// Move matched elements from seed to results to keep them synchronized
i=matcherOut.length;while(i--){if((elem=matcherOut[i])&&(temp=postFinder?indexOf(seed,elem):preMap[i])>-1){seed[temp]=!(results[temp]=elem);}}}// Add elements to results, through postFinder if defined
}else{matcherOut=condense(matcherOut===results?matcherOut.splice(preexisting,matcherOut.length):matcherOut);if(postFinder){postFinder(null,results,matcherOut,xml);}else{push.apply(results,matcherOut);}}});}function matcherFromTokens(tokens){var checkContext,matcher,j,len=tokens.length,leadingRelative=Expr.relative[tokens[0].type],implicitRelative=leadingRelative||Expr.relative[" "],i=leadingRelative?1:0,// The foundational matcher ensures that elements are reachable from top-level context(s)
matchContext=addCombinator(function(elem){return elem===checkContext;},implicitRelative,true),matchAnyContext=addCombinator(function(elem){return indexOf(checkContext,elem)>-1;},implicitRelative,true),matchers=[function(elem,context,xml){var ret=!leadingRelative&&(xml||context!==outermostContext)||((checkContext=context).nodeType?matchContext(elem,context,xml):matchAnyContext(elem,context,xml));// Avoid hanging onto element (issue #299)
checkContext=null;return ret;}];for(;i<len;i++){if(matcher=Expr.relative[tokens[i].type]){matchers=[addCombinator(elementMatcher(matchers),matcher)];}else{matcher=Expr.filter[tokens[i].type].apply(null,tokens[i].matches);// Return special upon seeing a positional matcher
if(matcher[expando]){// Find the next relative operator (if any) for proper handling
j=++i;for(;j<len;j++){if(Expr.relative[tokens[j].type]){break;}}return setMatcher(i>1&&elementMatcher(matchers),i>1&&toSelector(// If the preceding token was a descendant combinator, insert an implicit any-element `*`
tokens.slice(0,i-1).concat({value:tokens[i-2].type===" "?"*":""})).replace(rtrim,"$1"),matcher,i<j&&matcherFromTokens(tokens.slice(i,j)),j<len&&matcherFromTokens(tokens=tokens.slice(j)),j<len&&toSelector(tokens));}matchers.push(matcher);}}return elementMatcher(matchers);}function matcherFromGroupMatchers(elementMatchers,setMatchers){var bySet=setMatchers.length>0,byElement=elementMatchers.length>0,superMatcher=function superMatcher(seed,context,xml,results,outermost){var elem,j,matcher,matchedCount=0,i="0",unmatched=seed&&[],setMatched=[],contextBackup=outermostContext,// We must always have either seed elements or outermost context
elems=seed||byElement&&Expr.find["TAG"]("*",outermost),// Use integer dirruns iff this is the outermost matcher
dirrunsUnique=dirruns+=contextBackup==null?1:Math.random()||0.1,len=elems.length;if(outermost){outermostContext=context===document||context||outermost;}// Add elements passing elementMatchers directly to results
// Support: IE<9, Safari
// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
for(;i!==len&&(elem=elems[i])!=null;i++){if(byElement&&elem){j=0;if(!context&&elem.ownerDocument!==document){setDocument(elem);xml=!documentIsHTML;}while(matcher=elementMatchers[j++]){if(matcher(elem,context||document,xml)){results.push(elem);break;}}if(outermost){dirruns=dirrunsUnique;}}// Track unmatched elements for set filters
if(bySet){// They will have gone through all possible matchers
if(elem=!matcher&&elem){matchedCount--;}// Lengthen the array for every element, matched or not
if(seed){unmatched.push(elem);}}}// `i` is now the count of elements visited above, and adding it to `matchedCount`
// makes the latter nonnegative.
matchedCount+=i;// Apply set filters to unmatched elements
// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
// no element matchers and no seed.
// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
// case, which will result in a "00" `matchedCount` that differs from `i` but is also
// numerically zero.
if(bySet&&i!==matchedCount){j=0;while(matcher=setMatchers[j++]){matcher(unmatched,setMatched,context,xml);}if(seed){// Reintegrate element matches to eliminate the need for sorting
if(matchedCount>0){while(i--){if(!(unmatched[i]||setMatched[i])){setMatched[i]=pop.call(results);}}}// Discard index placeholder values to get only actual matches
setMatched=condense(setMatched);}// Add matches to results
push.apply(results,setMatched);// Seedless set matches succeeding multiple successful matchers stipulate sorting
if(outermost&&!seed&&setMatched.length>0&&matchedCount+setMatchers.length>1){Sizzle.uniqueSort(results);}}// Override manipulation of globals by nested matchers
if(outermost){dirruns=dirrunsUnique;outermostContext=contextBackup;}return unmatched;};return bySet?markFunction(superMatcher):superMatcher;}compile=Sizzle.compile=function(selector,match/* Internal Use Only */){var i,setMatchers=[],elementMatchers=[],cached=compilerCache[selector+" "];if(!cached){// Generate a function of recursive functions that can be used to check each element
if(!match){match=tokenize(selector);}i=match.length;while(i--){cached=matcherFromTokens(match[i]);if(cached[expando]){setMatchers.push(cached);}else{elementMatchers.push(cached);}}// Cache the compiled function
cached=compilerCache(selector,matcherFromGroupMatchers(elementMatchers,setMatchers));// Save selector and tokenization
cached.selector=selector;}return cached;};/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */select=Sizzle.select=function(selector,context,results,seed){var i,tokens,token,type,find,compiled=typeof selector==="function"&&selector,match=!seed&&tokenize(selector=compiled.selector||selector);results=results||[];// Try to minimize operations if there is only one selector in the list and no seed
// (the latter of which guarantees us context)
if(match.length===1){// Reduce context if the leading compound selector is an ID
tokens=match[0]=match[0].slice(0);if(tokens.length>2&&(token=tokens[0]).type==="ID"&&context.nodeType===9&&documentIsHTML&&Expr.relative[tokens[1].type]){context=(Expr.find["ID"](token.matches[0].replace(runescape,funescape),context)||[])[0];if(!context){return results;// Precompiled matchers will still verify ancestry, so step up a level
}else if(compiled){context=context.parentNode;}selector=selector.slice(tokens.shift().value.length);}// Fetch a seed set for right-to-left matching
i=matchExpr["needsContext"].test(selector)?0:tokens.length;while(i--){token=tokens[i];// Abort if we hit a combinator
if(Expr.relative[type=token.type]){break;}if(find=Expr.find[type]){// Search, expanding context for leading sibling combinators
if(seed=find(token.matches[0].replace(runescape,funescape),rsibling.test(tokens[0].type)&&testContext(context.parentNode)||context)){// If seed is empty or no tokens remain, we can return early
tokens.splice(i,1);selector=seed.length&&toSelector(tokens);if(!selector){push.apply(results,seed);return results;}break;}}}}// Compile and execute a filtering function if one is not provided
// Provide `match` to avoid retokenization if we modified the selector above
(compiled||compile(selector,match))(seed,context,!documentIsHTML,results,!context||rsibling.test(selector)&&testContext(context.parentNode)||context);return results;};// One-time assignments
// Sort stability
support.sortStable=expando.split("").sort(sortOrder).join("")===expando;// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates=!!hasDuplicate;// Initialize against the default document
setDocument();// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached=assert(function(el){// Should return 1, but returns 4 (following)
return el.compareDocumentPosition(document.createElement("fieldset"))&1;});// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if(!assert(function(el){el.innerHTML="<a href='#'></a>";return el.firstChild.getAttribute("href")==="#";})){addHandle("type|href|height|width",function(elem,name,isXML){if(!isXML){return elem.getAttribute(name,name.toLowerCase()==="type"?1:2);}});}// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if(!support.attributes||!assert(function(el){el.innerHTML="<input/>";el.firstChild.setAttribute("value","");return el.firstChild.getAttribute("value")==="";})){addHandle("value",function(elem,name,isXML){if(!isXML&&elem.nodeName.toLowerCase()==="input"){return elem.defaultValue;}});}// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if(!assert(function(el){return el.getAttribute("disabled")==null;})){addHandle(booleans,function(elem,name,isXML){var val;if(!isXML){return elem[name]===true?name.toLowerCase():(val=elem.getAttributeNode(name))&&val.specified?val.value:null;}});}return Sizzle;}(window);jQuery.find=Sizzle;jQuery.expr=Sizzle.selectors;// Deprecated
jQuery.expr[":"]=jQuery.expr.pseudos;jQuery.uniqueSort=jQuery.unique=Sizzle.uniqueSort;jQuery.text=Sizzle.getText;jQuery.isXMLDoc=Sizzle.isXML;jQuery.contains=Sizzle.contains;jQuery.escapeSelector=Sizzle.escape;var dir=function dir(elem,_dir,until){var matched=[],truncate=until!==undefined;while((elem=elem[_dir])&&elem.nodeType!==9){if(elem.nodeType===1){if(truncate&&jQuery(elem).is(until)){break;}matched.push(elem);}}return matched;};var _siblings=function _siblings(n,elem){var matched=[];for(;n;n=n.nextSibling){if(n.nodeType===1&&n!==elem){matched.push(n);}}return matched;};var rneedsContext=jQuery.expr.match.needsContext;function nodeName(elem,name){return elem.nodeName&&elem.nodeName.toLowerCase()===name.toLowerCase();};var rsingleTag=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;var risSimple=/^.[^:#\[\.,]*$/;// Implement the identical functionality for filter and not
function winnow(elements,qualifier,not){if(jQuery.isFunction(qualifier)){return jQuery.grep(elements,function(elem,i){return!!qualifier.call(elem,i,elem)!==not;});}// Single element
if(qualifier.nodeType){return jQuery.grep(elements,function(elem){return elem===qualifier!==not;});}// Arraylike of elements (jQuery, arguments, Array)
if(typeof qualifier!=="string"){return jQuery.grep(elements,function(elem){return indexOf.call(qualifier,elem)>-1!==not;});}// Simple selector that can be filtered directly, removing non-Elements
if(risSimple.test(qualifier)){return jQuery.filter(qualifier,elements,not);}// Complex selector, compare the two sets, removing non-Elements
qualifier=jQuery.filter(qualifier,elements);return jQuery.grep(elements,function(elem){return indexOf.call(qualifier,elem)>-1!==not&&elem.nodeType===1;});}jQuery.filter=function(expr,elems,not){var elem=elems[0];if(not){expr=":not("+expr+")";}if(elems.length===1&&elem.nodeType===1){return jQuery.find.matchesSelector(elem,expr)?[elem]:[];}return jQuery.find.matches(expr,jQuery.grep(elems,function(elem){return elem.nodeType===1;}));};jQuery.fn.extend({find:function find(selector){var i,ret,len=this.length,self=this;if(typeof selector!=="string"){return this.pushStack(jQuery(selector).filter(function(){for(i=0;i<len;i++){if(jQuery.contains(self[i],this)){return true;}}}));}ret=this.pushStack([]);for(i=0;i<len;i++){jQuery.find(selector,self[i],ret);}return len>1?jQuery.uniqueSort(ret):ret;},filter:function filter(selector){return this.pushStack(winnow(this,selector||[],false));},not:function not(selector){return this.pushStack(winnow(this,selector||[],true));},is:function is(selector){return!!winnow(this,// If this is a positional/relative selector, check membership in the returned set
// so $("p:first").is("p:last") won't return true for a doc with two "p".
typeof selector==="string"&&rneedsContext.test(selector)?jQuery(selector):selector||[],false).length;}});// Initialize a jQuery object
// A central reference to the root jQuery(document)
var rootjQuery,// A simple way to check for HTML strings
// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
// Strict HTML recognition (#11290: must start with <)
// Shortcut simple #id case for speed
rquickExpr=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,init=jQuery.fn.init=function(selector,context,root){var match,elem;// HANDLE: $(""), $(null), $(undefined), $(false)
if(!selector){return this;}// Method init() accepts an alternate rootjQuery
// so migrate can support jQuery.sub (gh-2101)
root=root||rootjQuery;// Handle HTML strings
if(typeof selector==="string"){if(selector[0]==="<"&&selector[selector.length-1]===">"&&selector.length>=3){// Assume that strings that start and end with <> are HTML and skip the regex check
match=[null,selector,null];}else{match=rquickExpr.exec(selector);}// Match html or make sure no context is specified for #id
if(match&&(match[1]||!context)){// HANDLE: $(html) -> $(array)
if(match[1]){context=context instanceof jQuery?context[0]:context;// Option to run scripts is true for back-compat
// Intentionally let the error be thrown if parseHTML is not present
jQuery.merge(this,jQuery.parseHTML(match[1],context&&context.nodeType?context.ownerDocument||context:document,true));// HANDLE: $(html, props)
if(rsingleTag.test(match[1])&&jQuery.isPlainObject(context)){for(match in context){// Properties of context are called as methods if possible
if(jQuery.isFunction(this[match])){this[match](context[match]);// ...and otherwise set as attributes
}else{this.attr(match,context[match]);}}}return this;// HANDLE: $(#id)
}else{elem=document.getElementById(match[2]);if(elem){// Inject the element directly into the jQuery object
this[0]=elem;this.length=1;}return this;}// HANDLE: $(expr, $(...))
}else if(!context||context.jquery){return(context||root).find(selector);// HANDLE: $(expr, context)
// (which is just equivalent to: $(context).find(expr)
}else{return this.constructor(context).find(selector);}// HANDLE: $(DOMElement)
}else if(selector.nodeType){this[0]=selector;this.length=1;return this;// HANDLE: $(function)
// Shortcut for document ready
}else if(jQuery.isFunction(selector)){return root.ready!==undefined?root.ready(selector):// Execute immediately if ready is not present
selector(jQuery);}return jQuery.makeArray(selector,this);};// Give the init function the jQuery prototype for later instantiation
init.prototype=jQuery.fn;// Initialize central reference
rootjQuery=jQuery(document);var rparentsprev=/^(?:parents|prev(?:Until|All))/,// Methods guaranteed to produce a unique set when starting from a unique set
guaranteedUnique={children:true,contents:true,next:true,prev:true};jQuery.fn.extend({has:function has(target){var targets=jQuery(target,this),l=targets.length;return this.filter(function(){var i=0;for(;i<l;i++){if(jQuery.contains(this,targets[i])){return true;}}});},closest:function closest(selectors,context){var cur,i=0,l=this.length,matched=[],targets=typeof selectors!=="string"&&jQuery(selectors);// Positional selectors never match, since there's no _selection_ context
if(!rneedsContext.test(selectors)){for(;i<l;i++){for(cur=this[i];cur&&cur!==context;cur=cur.parentNode){// Always skip document fragments
if(cur.nodeType<11&&(targets?targets.index(cur)>-1:// Don't pass non-elements to Sizzle
cur.nodeType===1&&jQuery.find.matchesSelector(cur,selectors))){matched.push(cur);break;}}}}return this.pushStack(matched.length>1?jQuery.uniqueSort(matched):matched);},// Determine the position of an element within the set
index:function index(elem){// No argument, return index in parent
if(!elem){return this[0]&&this[0].parentNode?this.first().prevAll().length:-1;}// Index in selector
if(typeof elem==="string"){return indexOf.call(jQuery(elem),this[0]);}// Locate the position of the desired element
return indexOf.call(this,// If it receives a jQuery object, the first element is used
elem.jquery?elem[0]:elem);},add:function add(selector,context){return this.pushStack(jQuery.uniqueSort(jQuery.merge(this.get(),jQuery(selector,context))));},addBack:function addBack(selector){return this.add(selector==null?this.prevObject:this.prevObject.filter(selector));}});function sibling(cur,dir){while((cur=cur[dir])&&cur.nodeType!==1){}return cur;}jQuery.each({parent:function parent(elem){var parent=elem.parentNode;return parent&&parent.nodeType!==11?parent:null;},parents:function parents(elem){return dir(elem,"parentNode");},parentsUntil:function parentsUntil(elem,i,until){return dir(elem,"parentNode",until);},next:function next(elem){return sibling(elem,"nextSibling");},prev:function prev(elem){return sibling(elem,"previousSibling");},nextAll:function nextAll(elem){return dir(elem,"nextSibling");},prevAll:function prevAll(elem){return dir(elem,"previousSibling");},nextUntil:function nextUntil(elem,i,until){return dir(elem,"nextSibling",until);},prevUntil:function prevUntil(elem,i,until){return dir(elem,"previousSibling",until);},siblings:function siblings(elem){return _siblings((elem.parentNode||{}).firstChild,elem);},children:function children(elem){return _siblings(elem.firstChild);},contents:function contents(elem){if(nodeName(elem,"iframe")){return elem.contentDocument;}// Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
// Treat the template element as a regular one in browsers that
// don't support it.
if(nodeName(elem,"template")){elem=elem.content||elem;}return jQuery.merge([],elem.childNodes);}},function(name,fn){jQuery.fn[name]=function(until,selector){var matched=jQuery.map(this,fn,until);if(name.slice(-5)!=="Until"){selector=until;}if(selector&&typeof selector==="string"){matched=jQuery.filter(selector,matched);}if(this.length>1){// Remove duplicates
if(!guaranteedUnique[name]){jQuery.uniqueSort(matched);}// Reverse order for parents* and prev-derivatives
if(rparentsprev.test(name)){matched.reverse();}}return this.pushStack(matched);};});var rnothtmlwhite=/[^\x20\t\r\n\f]+/g;// Convert String-formatted options into Object-formatted ones
function createOptions(options){var object={};jQuery.each(options.match(rnothtmlwhite)||[],function(_,flag){object[flag]=true;});return object;}/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */jQuery.Callbacks=function(options){// Convert options from String-formatted to Object-formatted if needed
// (we check in cache first)
options=typeof options==="string"?createOptions(options):jQuery.extend({},options);var// Flag to know if list is currently firing
firing,// Last fire value for non-forgettable lists
memory,// Flag to know if list was already fired
_fired,// Flag to prevent firing
_locked,// Actual callback list
list=[],// Queue of execution data for repeatable lists
queue=[],// Index of currently firing callback (modified by add/remove as needed)
firingIndex=-1,// Fire callbacks
fire=function fire(){// Enforce single-firing
_locked=_locked||options.once;// Execute callbacks for all pending executions,
// respecting firingIndex overrides and runtime changes
_fired=firing=true;for(;queue.length;firingIndex=-1){memory=queue.shift();while(++firingIndex<list.length){// Run callback and check for early termination
if(list[firingIndex].apply(memory[0],memory[1])===false&&options.stopOnFalse){// Jump to end and forget the data so .add doesn't re-fire
firingIndex=list.length;memory=false;}}}// Forget the data if we're done with it
if(!options.memory){memory=false;}firing=false;// Clean up if we're done firing for good
if(_locked){// Keep an empty list if we have data for future add calls
if(memory){list=[];// Otherwise, this object is spent
}else{list="";}}},// Actual Callbacks object
self={// Add a callback or a collection of callbacks to the list
add:function add(){if(list){// If we have memory from a past run, we should fire after adding
if(memory&&!firing){firingIndex=list.length-1;queue.push(memory);}(function add(args){jQuery.each(args,function(_,arg){if(jQuery.isFunction(arg)){if(!options.unique||!self.has(arg)){list.push(arg);}}else if(arg&&arg.length&&jQuery.type(arg)!=="string"){// Inspect recursively
add(arg);}});})(arguments);if(memory&&!firing){fire();}}return this;},// Remove a callback from the list
remove:function remove(){jQuery.each(arguments,function(_,arg){var index;while((index=jQuery.inArray(arg,list,index))>-1){list.splice(index,1);// Handle firing indexes
if(index<=firingIndex){firingIndex--;}}});return this;},// Check if a given callback is in the list.
// If no argument is given, return whether or not list has callbacks attached.
has:function has(fn){return fn?jQuery.inArray(fn,list)>-1:list.length>0;},// Remove all callbacks from the list
empty:function empty(){if(list){list=[];}return this;},// Disable .fire and .add
// Abort any current/pending executions
// Clear all callbacks and values
disable:function disable(){_locked=queue=[];list=memory="";return this;},disabled:function disabled(){return!list;},// Disable .fire
// Also disable .add unless we have memory (since it would have no effect)
// Abort any pending executions
lock:function lock(){_locked=queue=[];if(!memory&&!firing){list=memory="";}return this;},locked:function locked(){return!!_locked;},// Call all callbacks with the given context and arguments
fireWith:function fireWith(context,args){if(!_locked){args=args||[];args=[context,args.slice?args.slice():args];queue.push(args);if(!firing){fire();}}return this;},// Call all the callbacks with the given arguments
fire:function fire(){self.fireWith(this,arguments);return this;},// To know if the callbacks have already been called at least once
fired:function fired(){return!!_fired;}};return self;};function Identity(v){return v;}function Thrower(ex){throw ex;}function adoptValue(value,resolve,reject,noValue){var method;try{// Check for promise aspect first to privilege synchronous behavior
if(value&&jQuery.isFunction(method=value.promise)){method.call(value).done(resolve).fail(reject);// Other thenables
}else if(value&&jQuery.isFunction(method=value.then)){method.call(value,resolve,reject);// Other non-thenables
}else{// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
// * false: [ value ].slice( 0 ) => resolve( value )
// * true: [ value ].slice( 1 ) => resolve()
resolve.apply(undefined,[value].slice(noValue));}// For Promises/A+, convert exceptions into rejections
// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
// Deferred#then to conditionally suppress rejection.
}catch(value){// Support: Android 4.0 only
// Strict mode functions invoked without .call/.apply get global-object context
reject.apply(undefined,[value]);}}jQuery.extend({Deferred:function Deferred(func){var tuples=[// action, add listener, callbacks,
// ... .then handlers, argument index, [final state]
["notify","progress",jQuery.Callbacks("memory"),jQuery.Callbacks("memory"),2],["resolve","done",jQuery.Callbacks("once memory"),jQuery.Callbacks("once memory"),0,"resolved"],["reject","fail",jQuery.Callbacks("once memory"),jQuery.Callbacks("once memory"),1,"rejected"]],_state="pending",_promise={state:function state(){return _state;},always:function always(){deferred.done(arguments).fail(arguments);return this;},"catch":function _catch(fn){return _promise.then(null,fn);},// Keep pipe for back-compat
pipe:function pipe()/* fnDone, fnFail, fnProgress */{var fns=arguments;return jQuery.Deferred(function(newDefer){jQuery.each(tuples,function(i,tuple){// Map tuples (progress, done, fail) to arguments (done, fail, progress)
var fn=jQuery.isFunction(fns[tuple[4]])&&fns[tuple[4]];// deferred.progress(function() { bind to newDefer or newDefer.notify })
// deferred.done(function() { bind to newDefer or newDefer.resolve })
// deferred.fail(function() { bind to newDefer or newDefer.reject })
deferred[tuple[1]](function(){var returned=fn&&fn.apply(this,arguments);if(returned&&jQuery.isFunction(returned.promise)){returned.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject);}else{newDefer[tuple[0]+"With"](this,fn?[returned]:arguments);}});});fns=null;}).promise();},then:function then(onFulfilled,onRejected,onProgress){var maxDepth=0;function resolve(depth,deferred,handler,special){return function(){var that=this,args=arguments,mightThrow=function mightThrow(){var returned,then;// Support: Promises/A+ section 2.3.3.3.3
// https://promisesaplus.com/#point-59
// Ignore double-resolution attempts
if(depth<maxDepth){return;}returned=handler.apply(that,args);// Support: Promises/A+ section 2.3.1
// https://promisesaplus.com/#point-48
if(returned===deferred.promise()){throw new TypeError("Thenable self-resolution");}// Support: Promises/A+ sections 2.3.3.1, 3.5
// https://promisesaplus.com/#point-54
// https://promisesaplus.com/#point-75
// Retrieve `then` only once
then=returned&&(// Support: Promises/A+ section 2.3.4
// https://promisesaplus.com/#point-64
// Only check objects and functions for thenability
(typeof returned==="undefined"?"undefined":_typeof(returned))==="object"||typeof returned==="function")&&returned.then;// Handle a returned thenable
if(jQuery.isFunction(then)){// Special processors (notify) just wait for resolution
if(special){then.call(returned,resolve(maxDepth,deferred,Identity,special),resolve(maxDepth,deferred,Thrower,special));// Normal processors (resolve) also hook into progress
}else{// ...and disregard older resolution values
maxDepth++;then.call(returned,resolve(maxDepth,deferred,Identity,special),resolve(maxDepth,deferred,Thrower,special),resolve(maxDepth,deferred,Identity,deferred.notifyWith));}// Handle all other returned values
}else{// Only substitute handlers pass on context
// and multiple values (non-spec behavior)
if(handler!==Identity){that=undefined;args=[returned];}// Process the value(s)
// Default process is resolve
(special||deferred.resolveWith)(that,args);}},// Only normal processors (resolve) catch and reject exceptions
process=special?mightThrow:function(){try{mightThrow();}catch(e){if(jQuery.Deferred.exceptionHook){jQuery.Deferred.exceptionHook(e,process.stackTrace);}// Support: Promises/A+ section 2.3.3.3.4.1
// https://promisesaplus.com/#point-61
// Ignore post-resolution exceptions
if(depth+1>=maxDepth){// Only substitute handlers pass on context
// and multiple values (non-spec behavior)
if(handler!==Thrower){that=undefined;args=[e];}deferred.rejectWith(that,args);}}};// Support: Promises/A+ section 2.3.3.3.1
// https://promisesaplus.com/#point-57
// Re-resolve promises immediately to dodge false rejection from
// subsequent errors
if(depth){process();}else{// Call an optional hook to record the stack, in case of exception
// since it's otherwise lost when execution goes async
if(jQuery.Deferred.getStackHook){process.stackTrace=jQuery.Deferred.getStackHook();}window.setTimeout(process);}};}return jQuery.Deferred(function(newDefer){// progress_handlers.add( ... )
tuples[0][3].add(resolve(0,newDefer,jQuery.isFunction(onProgress)?onProgress:Identity,newDefer.notifyWith));// fulfilled_handlers.add( ... )
tuples[1][3].add(resolve(0,newDefer,jQuery.isFunction(onFulfilled)?onFulfilled:Identity));// rejected_handlers.add( ... )
tuples[2][3].add(resolve(0,newDefer,jQuery.isFunction(onRejected)?onRejected:Thrower));}).promise();},// Get a promise for this deferred
// If obj is provided, the promise aspect is added to the object
promise:function promise(obj){return obj!=null?jQuery.extend(obj,_promise):_promise;}},deferred={};// Add list-specific methods
jQuery.each(tuples,function(i,tuple){var list=tuple[2],stateString=tuple[5];// promise.progress = list.add
// promise.done = list.add
// promise.fail = list.add
_promise[tuple[1]]=list.add;// Handle state
if(stateString){list.add(function(){// state = "resolved" (i.e., fulfilled)
// state = "rejected"
_state=stateString;},// rejected_callbacks.disable
// fulfilled_callbacks.disable
tuples[3-i][2].disable,// progress_callbacks.lock
tuples[0][2].lock);}// progress_handlers.fire
// fulfilled_handlers.fire
// rejected_handlers.fire
list.add(tuple[3].fire);// deferred.notify = function() { deferred.notifyWith(...) }
// deferred.resolve = function() { deferred.resolveWith(...) }
// deferred.reject = function() { deferred.rejectWith(...) }
deferred[tuple[0]]=function(){deferred[tuple[0]+"With"](this===deferred?undefined:this,arguments);return this;};// deferred.notifyWith = list.fireWith
// deferred.resolveWith = list.fireWith
// deferred.rejectWith = list.fireWith
deferred[tuple[0]+"With"]=list.fireWith;});// Make the deferred a promise
_promise.promise(deferred);// Call given func if any
if(func){func.call(deferred,deferred);}// All done!
return deferred;},// Deferred helper
when:function when(singleValue){var// count of uncompleted subordinates
remaining=arguments.length,// count of unprocessed arguments
i=remaining,// subordinate fulfillment data
resolveContexts=Array(i),resolveValues=_slice.call(arguments),// the master Deferred
master=jQuery.Deferred(),// subordinate callback factory
updateFunc=function updateFunc(i){return function(value){resolveContexts[i]=this;resolveValues[i]=arguments.length>1?_slice.call(arguments):value;if(! --remaining){master.resolveWith(resolveContexts,resolveValues);}};};// Single- and empty arguments are adopted like Promise.resolve
if(remaining<=1){adoptValue(singleValue,master.done(updateFunc(i)).resolve,master.reject,!remaining);// Use .then() to unwrap secondary thenables (cf. gh-3000)
if(master.state()==="pending"||jQuery.isFunction(resolveValues[i]&&resolveValues[i].then)){return master.then();}}// Multiple arguments are aggregated like Promise.all array elements
while(i--){adoptValue(resolveValues[i],updateFunc(i),master.reject);}return master.promise();}});// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;jQuery.Deferred.exceptionHook=function(error,stack){// Support: IE 8 - 9 only
// Console exists when dev tools are open, which can happen at any time
if(window.console&&window.console.warn&&error&&rerrorNames.test(error.name)){window.console.warn("jQuery.Deferred exception: "+error.message,error.stack,stack);}};jQuery.readyException=function(error){window.setTimeout(function(){throw error;});};// The deferred used on DOM ready
var readyList=jQuery.Deferred();jQuery.fn.ready=function(fn){readyList.then(fn)// Wrap jQuery.readyException in a function so that the lookup
// happens at the time of error handling instead of callback
// registration.
.catch(function(error){jQuery.readyException(error);});return this;};jQuery.extend({// Is the DOM ready to be used? Set to true once it occurs.
isReady:false,// A counter to track how many items to wait for before
// the ready event fires. See #6781
readyWait:1,// Handle when the DOM is ready
ready:function ready(wait){// Abort if there are pending holds or we're already ready
if(wait===true?--jQuery.readyWait:jQuery.isReady){return;}// Remember that the DOM is ready
jQuery.isReady=true;// If a normal DOM Ready event fired, decrement, and wait if need be
if(wait!==true&&--jQuery.readyWait>0){return;}// If there are functions bound, to execute
readyList.resolveWith(document,[jQuery]);}});jQuery.ready.then=readyList.then;// The ready event handler and self cleanup method
function completed(){document.removeEventListener("DOMContentLoaded",completed);window.removeEventListener("load",completed);jQuery.ready();}// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if(document.readyState==="complete"||document.readyState!=="loading"&&!document.documentElement.doScroll){// Handle it asynchronously to allow scripts the opportunity to delay ready
window.setTimeout(jQuery.ready);}else{// Use the handy event callback
document.addEventListener("DOMContentLoaded",completed);// A fallback to window.onload, that will always work
window.addEventListener("load",completed);}// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access=function access(elems,fn,key,value,chainable,emptyGet,raw){var i=0,len=elems.length,bulk=key==null;// Sets many values
if(jQuery.type(key)==="object"){chainable=true;for(i in key){access(elems,fn,i,key[i],true,emptyGet,raw);}// Sets one value
}else if(value!==undefined){chainable=true;if(!jQuery.isFunction(value)){raw=true;}if(bulk){// Bulk operations run against the entire set
if(raw){fn.call(elems,value);fn=null;// ...except when executing function values
}else{bulk=fn;fn=function fn(elem,key,value){return bulk.call(jQuery(elem),value);};}}if(fn){for(;i<len;i++){fn(elems[i],key,raw?value:value.call(elems[i],i,fn(elems[i],key)));}}}if(chainable){return elems;}// Gets
if(bulk){return fn.call(elems);}return len?fn(elems[0],key):emptyGet;};var acceptData=function acceptData(owner){// Accepts only:
//  - Node
//    - Node.ELEMENT_NODE
//    - Node.DOCUMENT_NODE
//  - Object
//    - Any
return owner.nodeType===1||owner.nodeType===9||!+owner.nodeType;};function Data(){this.expando=jQuery.expando+Data.uid++;}Data.uid=1;Data.prototype={cache:function cache(owner){// Check if the owner object already has a cache
var value=owner[this.expando];// If not, create one
if(!value){value={};// We can accept data for non-element nodes in modern browsers,
// but we should not, see #8335.
// Always return an empty object.
if(acceptData(owner)){// If it is a node unlikely to be stringify-ed or looped over
// use plain assignment
if(owner.nodeType){owner[this.expando]=value;// Otherwise secure it in a non-enumerable property
// configurable must be true to allow the property to be
// deleted when data is removed
}else{Object.defineProperty(owner,this.expando,{value:value,configurable:true});}}}return value;},set:function set(owner,data,value){var prop,cache=this.cache(owner);// Handle: [ owner, key, value ] args
// Always use camelCase key (gh-2257)
if(typeof data==="string"){cache[jQuery.camelCase(data)]=value;// Handle: [ owner, { properties } ] args
}else{// Copy the properties one-by-one to the cache object
for(prop in data){cache[jQuery.camelCase(prop)]=data[prop];}}return cache;},get:function get(owner,key){return key===undefined?this.cache(owner):// Always use camelCase key (gh-2257)
owner[this.expando]&&owner[this.expando][jQuery.camelCase(key)];},access:function access(owner,key,value){// In cases where either:
//
//   1. No key was specified
//   2. A string key was specified, but no value provided
//
// Take the "read" path and allow the get method to determine
// which value to return, respectively either:
//
//   1. The entire cache object
//   2. The data stored at the key
//
if(key===undefined||key&&typeof key==="string"&&value===undefined){return this.get(owner,key);}// When the key is not a string, or both a key and value
// are specified, set or extend (existing objects) with either:
//
//   1. An object of properties
//   2. A key and value
//
this.set(owner,key,value);// Since the "set" path can have two possible entry points
// return the expected data based on which path was taken[*]
return value!==undefined?value:key;},remove:function remove(owner,key){var i,cache=owner[this.expando];if(cache===undefined){return;}if(key!==undefined){// Support array or space separated string of keys
if(Array.isArray(key)){// If key is an array of keys...
// We always set camelCase keys, so remove that.
key=key.map(jQuery.camelCase);}else{key=jQuery.camelCase(key);// If a key with the spaces exists, use it.
// Otherwise, create an array by matching non-whitespace
key=key in cache?[key]:key.match(rnothtmlwhite)||[];}i=key.length;while(i--){delete cache[key[i]];}}// Remove the expando if there's no more data
if(key===undefined||jQuery.isEmptyObject(cache)){// Support: Chrome <=35 - 45
// Webkit & Blink performance suffers when deleting properties
// from DOM nodes, so set to undefined instead
// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
if(owner.nodeType){owner[this.expando]=undefined;}else{delete owner[this.expando];}}},hasData:function hasData(owner){var cache=owner[this.expando];return cache!==undefined&&!jQuery.isEmptyObject(cache);}};var dataPriv=new Data();var dataUser=new Data();//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014
var rbrace=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,rmultiDash=/[A-Z]/g;function getData(data){if(data==="true"){return true;}if(data==="false"){return false;}if(data==="null"){return null;}// Only convert to a number if it doesn't change the string
if(data===+data+""){return+data;}if(rbrace.test(data)){return JSON.parse(data);}return data;}function dataAttr(elem,key,data){var name;// If nothing was found internally, try to fetch any
// data from the HTML5 data-* attribute
if(data===undefined&&elem.nodeType===1){name="data-"+key.replace(rmultiDash,"-$&").toLowerCase();data=elem.getAttribute(name);if(typeof data==="string"){try{data=getData(data);}catch(e){}// Make sure we set the data so it isn't changed later
dataUser.set(elem,key,data);}else{data=undefined;}}return data;}jQuery.extend({hasData:function hasData(elem){return dataUser.hasData(elem)||dataPriv.hasData(elem);},data:function data(elem,name,_data){return dataUser.access(elem,name,_data);},removeData:function removeData(elem,name){dataUser.remove(elem,name);},// TODO: Now that all calls to _data and _removeData have been replaced
// with direct calls to dataPriv methods, these can be deprecated.
_data:function _data(elem,name,data){return dataPriv.access(elem,name,data);},_removeData:function _removeData(elem,name){dataPriv.remove(elem,name);}});jQuery.fn.extend({data:function data(key,value){var i,name,data,elem=this[0],attrs=elem&&elem.attributes;// Gets all values
if(key===undefined){if(this.length){data=dataUser.get(elem);if(elem.nodeType===1&&!dataPriv.get(elem,"hasDataAttrs")){i=attrs.length;while(i--){// Support: IE 11 only
// The attrs elements can be null (#14894)
if(attrs[i]){name=attrs[i].name;if(name.indexOf("data-")===0){name=jQuery.camelCase(name.slice(5));dataAttr(elem,name,data[name]);}}}dataPriv.set(elem,"hasDataAttrs",true);}}return data;}// Sets multiple values
if((typeof key==="undefined"?"undefined":_typeof(key))==="object"){return this.each(function(){dataUser.set(this,key);});}return access(this,function(value){var data;// The calling jQuery object (element matches) is not empty
// (and therefore has an element appears at this[ 0 ]) and the
// `value` parameter was not undefined. An empty jQuery object
// will result in `undefined` for elem = this[ 0 ] which will
// throw an exception if an attempt to read a data cache is made.
if(elem&&value===undefined){// Attempt to get data from the cache
// The key will always be camelCased in Data
data=dataUser.get(elem,key);if(data!==undefined){return data;}// Attempt to "discover" the data in
// HTML5 custom data-* attrs
data=dataAttr(elem,key);if(data!==undefined){return data;}// We tried really hard, but the data doesn't exist.
return;}// Set the data...
this.each(function(){// We always store the camelCased key
dataUser.set(this,key,value);});},null,value,arguments.length>1,null,true);},removeData:function removeData(key){return this.each(function(){dataUser.remove(this,key);});}});jQuery.extend({queue:function queue(elem,type,data){var queue;if(elem){type=(type||"fx")+"queue";queue=dataPriv.get(elem,type);// Speed up dequeue by getting out quickly if this is just a lookup
if(data){if(!queue||Array.isArray(data)){queue=dataPriv.access(elem,type,jQuery.makeArray(data));}else{queue.push(data);}}return queue||[];}},dequeue:function dequeue(elem,type){type=type||"fx";var queue=jQuery.queue(elem,type),startLength=queue.length,fn=queue.shift(),hooks=jQuery._queueHooks(elem,type),next=function next(){jQuery.dequeue(elem,type);};// If the fx queue is dequeued, always remove the progress sentinel
if(fn==="inprogress"){fn=queue.shift();startLength--;}if(fn){// Add a progress sentinel to prevent the fx queue from being
// automatically dequeued
if(type==="fx"){queue.unshift("inprogress");}// Clear up the last queue stop function
delete hooks.stop;fn.call(elem,next,hooks);}if(!startLength&&hooks){hooks.empty.fire();}},// Not public - generate a queueHooks object, or return the current one
_queueHooks:function _queueHooks(elem,type){var key=type+"queueHooks";return dataPriv.get(elem,key)||dataPriv.access(elem,key,{empty:jQuery.Callbacks("once memory").add(function(){dataPriv.remove(elem,[type+"queue",key]);})});}});jQuery.fn.extend({queue:function queue(type,data){var setter=2;if(typeof type!=="string"){data=type;type="fx";setter--;}if(arguments.length<setter){return jQuery.queue(this[0],type);}return data===undefined?this:this.each(function(){var queue=jQuery.queue(this,type,data);// Ensure a hooks for this queue
jQuery._queueHooks(this,type);if(type==="fx"&&queue[0]!=="inprogress"){jQuery.dequeue(this,type);}});},dequeue:function dequeue(type){return this.each(function(){jQuery.dequeue(this,type);});},clearQueue:function clearQueue(type){return this.queue(type||"fx",[]);},// Get a promise resolved when queues of a certain type
// are emptied (fx is the type by default)
promise:function promise(type,obj){var tmp,count=1,defer=jQuery.Deferred(),elements=this,i=this.length,resolve=function resolve(){if(! --count){defer.resolveWith(elements,[elements]);}};if(typeof type!=="string"){obj=type;type=undefined;}type=type||"fx";while(i--){tmp=dataPriv.get(elements[i],type+"queueHooks");if(tmp&&tmp.empty){count++;tmp.empty.add(resolve);}}resolve();return defer.promise(obj);}});var pnum=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;var rcssNum=new RegExp("^(?:([+-])=|)("+pnum+")([a-z%]*)$","i");var cssExpand=["Top","Right","Bottom","Left"];var isHiddenWithinTree=function isHiddenWithinTree(elem,el){// isHiddenWithinTree might be called from jQuery#filter function;
// in that case, element will be second argument
elem=el||elem;// Inline style trumps all
return elem.style.display==="none"||elem.style.display===""&&// Otherwise, check computed style
// Support: Firefox <=43 - 45
// Disconnected elements can have computed display: none, so first confirm that elem is
// in the document.
jQuery.contains(elem.ownerDocument,elem)&&jQuery.css(elem,"display")==="none";};var swap=function swap(elem,options,callback,args){var ret,name,old={};// Remember the old values, and insert the new ones
for(name in options){old[name]=elem.style[name];elem.style[name]=options[name];}ret=callback.apply(elem,args||[]);// Revert the old values
for(name in options){elem.style[name]=old[name];}return ret;};function adjustCSS(elem,prop,valueParts,tween){var adjusted,scale=1,maxIterations=20,currentValue=tween?function(){return tween.cur();}:function(){return jQuery.css(elem,prop,"");},initial=currentValue(),unit=valueParts&&valueParts[3]||(jQuery.cssNumber[prop]?"":"px"),// Starting value computation is required for potential unit mismatches
initialInUnit=(jQuery.cssNumber[prop]||unit!=="px"&&+initial)&&rcssNum.exec(jQuery.css(elem,prop));if(initialInUnit&&initialInUnit[3]!==unit){// Trust units reported by jQuery.css
unit=unit||initialInUnit[3];// Make sure we update the tween properties later on
valueParts=valueParts||[];// Iteratively approximate from a nonzero starting point
initialInUnit=+initial||1;do{// If previous iteration zeroed out, double until we get *something*.
// Use string for doubling so we don't accidentally see scale as unchanged below
scale=scale||".5";// Adjust and apply
initialInUnit=initialInUnit/scale;jQuery.style(elem,prop,initialInUnit+unit);// Update scale, tolerating zero or NaN from tween.cur()
// Break the loop if scale is unchanged or perfect, or if we've just had enough.
}while(scale!==(scale=currentValue()/initial)&&scale!==1&&--maxIterations);}if(valueParts){initialInUnit=+initialInUnit||+initial||0;// Apply relative offset (+=/-=) if specified
adjusted=valueParts[1]?initialInUnit+(valueParts[1]+1)*valueParts[2]:+valueParts[2];if(tween){tween.unit=unit;tween.start=initialInUnit;tween.end=adjusted;}}return adjusted;}var defaultDisplayMap={};function getDefaultDisplay(elem){var temp,doc=elem.ownerDocument,nodeName=elem.nodeName,display=defaultDisplayMap[nodeName];if(display){return display;}temp=doc.body.appendChild(doc.createElement(nodeName));display=jQuery.css(temp,"display");temp.parentNode.removeChild(temp);if(display==="none"){display="block";}defaultDisplayMap[nodeName]=display;return display;}function showHide(elements,show){var display,elem,values=[],index=0,length=elements.length;// Determine new display value for elements that need to change
for(;index<length;index++){elem=elements[index];if(!elem.style){continue;}display=elem.style.display;if(show){// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
// check is required in this first loop unless we have a nonempty display value (either
// inline or about-to-be-restored)
if(display==="none"){values[index]=dataPriv.get(elem,"display")||null;if(!values[index]){elem.style.display="";}}if(elem.style.display===""&&isHiddenWithinTree(elem)){values[index]=getDefaultDisplay(elem);}}else{if(display!=="none"){values[index]="none";// Remember what we're overwriting
dataPriv.set(elem,"display",display);}}}// Set the display of the elements in a second loop to avoid constant reflow
for(index=0;index<length;index++){if(values[index]!=null){elements[index].style.display=values[index];}}return elements;}jQuery.fn.extend({show:function show(){return showHide(this,true);},hide:function hide(){return showHide(this);},toggle:function toggle(state){if(typeof state==="boolean"){return state?this.show():this.hide();}return this.each(function(){if(isHiddenWithinTree(this)){jQuery(this).show();}else{jQuery(this).hide();}});}});var rcheckableType=/^(?:checkbox|radio)$/i;var rtagName=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i;var rscriptType=/^$|\/(?:java|ecma)script/i;// We have to close these tags to support XHTML (#13200)
var wrapMap={// Support: IE <=9 only
option:[1,"<select multiple='multiple'>","</select>"],// XHTML parsers do not magically insert elements in the
// same way that tag soup parsers do. So we cannot shorten
// this by omitting <tbody> or other required elements.
thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};// Support: IE <=9 only
wrapMap.optgroup=wrapMap.option;wrapMap.tbody=wrapMap.tfoot=wrapMap.colgroup=wrapMap.caption=wrapMap.thead;wrapMap.th=wrapMap.td;function getAll(context,tag){// Support: IE <=9 - 11 only
// Use typeof to avoid zero-argument method invocation on host objects (#15151)
var ret;if(typeof context.getElementsByTagName!=="undefined"){ret=context.getElementsByTagName(tag||"*");}else if(typeof context.querySelectorAll!=="undefined"){ret=context.querySelectorAll(tag||"*");}else{ret=[];}if(tag===undefined||tag&&nodeName(context,tag)){return jQuery.merge([context],ret);}return ret;}// Mark scripts as having already been evaluated
function setGlobalEval(elems,refElements){var i=0,l=elems.length;for(;i<l;i++){dataPriv.set(elems[i],"globalEval",!refElements||dataPriv.get(refElements[i],"globalEval"));}}var rhtml=/<|&#?\w+;/;function buildFragment(elems,context,scripts,selection,ignored){var elem,tmp,tag,wrap,contains,j,fragment=context.createDocumentFragment(),nodes=[],i=0,l=elems.length;for(;i<l;i++){elem=elems[i];if(elem||elem===0){// Add nodes directly
if(jQuery.type(elem)==="object"){// Support: Android <=4.0 only, PhantomJS 1 only
// push.apply(_, arraylike) throws on ancient WebKit
jQuery.merge(nodes,elem.nodeType?[elem]:elem);// Convert non-html into a text node
}else if(!rhtml.test(elem)){nodes.push(context.createTextNode(elem));// Convert html into DOM nodes
}else{tmp=tmp||fragment.appendChild(context.createElement("div"));// Deserialize a standard representation
tag=(rtagName.exec(elem)||["",""])[1].toLowerCase();wrap=wrapMap[tag]||wrapMap._default;tmp.innerHTML=wrap[1]+jQuery.htmlPrefilter(elem)+wrap[2];// Descend through wrappers to the right content
j=wrap[0];while(j--){tmp=tmp.lastChild;}// Support: Android <=4.0 only, PhantomJS 1 only
// push.apply(_, arraylike) throws on ancient WebKit
jQuery.merge(nodes,tmp.childNodes);// Remember the top-level container
tmp=fragment.firstChild;// Ensure the created nodes are orphaned (#12392)
tmp.textContent="";}}}// Remove wrapper from fragment
fragment.textContent="";i=0;while(elem=nodes[i++]){// Skip elements already in the context collection (trac-4087)
if(selection&&jQuery.inArray(elem,selection)>-1){if(ignored){ignored.push(elem);}continue;}contains=jQuery.contains(elem.ownerDocument,elem);// Append to fragment
tmp=getAll(fragment.appendChild(elem),"script");// Preserve script evaluation history
if(contains){setGlobalEval(tmp);}// Capture executables
if(scripts){j=0;while(elem=tmp[j++]){if(rscriptType.test(elem.type||"")){scripts.push(elem);}}}}return fragment;}(function(){var fragment=document.createDocumentFragment(),div=fragment.appendChild(document.createElement("div")),input=document.createElement("input");// Support: Android 4.0 - 4.3 only
// Check state lost if the name is set (#11217)
// Support: Windows Web Apps (WWA)
// `name` and `type` must use .setAttribute for WWA (#14901)
input.setAttribute("type","radio");input.setAttribute("checked","checked");input.setAttribute("name","t");div.appendChild(input);// Support: Android <=4.1 only
// Older WebKit doesn't clone checked state correctly in fragments
support.checkClone=div.cloneNode(true).cloneNode(true).lastChild.checked;// Support: IE <=11 only
// Make sure textarea (and checkbox) defaultValue is properly cloned
div.innerHTML="<textarea>x</textarea>";support.noCloneChecked=!!div.cloneNode(true).lastChild.defaultValue;})();var documentElement=document.documentElement;var rkeyEvent=/^key/,rmouseEvent=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,rtypenamespace=/^([^.]*)(?:\.(.+)|)/;function returnTrue(){return true;}function returnFalse(){return false;}// Support: IE <=9 only
// See #13393 for more info
function safeActiveElement(){try{return document.activeElement;}catch(err){}}function _on(elem,types,selector,data,fn,one){var origFn,type;// Types can be a map of types/handlers
if((typeof types==="undefined"?"undefined":_typeof(types))==="object"){// ( types-Object, selector, data )
if(typeof selector!=="string"){// ( types-Object, data )
data=data||selector;selector=undefined;}for(type in types){_on(elem,type,selector,data,types[type],one);}return elem;}if(data==null&&fn==null){// ( types, fn )
fn=selector;data=selector=undefined;}else if(fn==null){if(typeof selector==="string"){// ( types, selector, fn )
fn=data;data=undefined;}else{// ( types, data, fn )
fn=data;data=selector;selector=undefined;}}if(fn===false){fn=returnFalse;}else if(!fn){return elem;}if(one===1){origFn=fn;fn=function fn(event){// Can use an empty set, since event contains the info
jQuery().off(event);return origFn.apply(this,arguments);};// Use same guid so caller can remove using origFn
fn.guid=origFn.guid||(origFn.guid=jQuery.guid++);}return elem.each(function(){jQuery.event.add(this,types,fn,data,selector);});}/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */jQuery.event={global:{},add:function add(elem,types,handler,data,selector){var handleObjIn,eventHandle,tmp,events,t,handleObj,special,handlers,type,namespaces,origType,elemData=dataPriv.get(elem);// Don't attach events to noData or text/comment nodes (but allow plain objects)
if(!elemData){return;}// Caller can pass in an object of custom data in lieu of the handler
if(handler.handler){handleObjIn=handler;handler=handleObjIn.handler;selector=handleObjIn.selector;}// Ensure that invalid selectors throw exceptions at attach time
// Evaluate against documentElement in case elem is a non-element node (e.g., document)
if(selector){jQuery.find.matchesSelector(documentElement,selector);}// Make sure that the handler has a unique ID, used to find/remove it later
if(!handler.guid){handler.guid=jQuery.guid++;}// Init the element's event structure and main handler, if this is the first
if(!(events=elemData.events)){events=elemData.events={};}if(!(eventHandle=elemData.handle)){eventHandle=elemData.handle=function(e){// Discard the second event of a jQuery.event.trigger() and
// when an event is called after a page has unloaded
return typeof jQuery!=="undefined"&&jQuery.event.triggered!==e.type?jQuery.event.dispatch.apply(elem,arguments):undefined;};}// Handle multiple events separated by a space
types=(types||"").match(rnothtmlwhite)||[""];t=types.length;while(t--){tmp=rtypenamespace.exec(types[t])||[];type=origType=tmp[1];namespaces=(tmp[2]||"").split(".").sort();// There *must* be a type, no attaching namespace-only handlers
if(!type){continue;}// If event changes its type, use the special event handlers for the changed type
special=jQuery.event.special[type]||{};// If selector defined, determine special event api type, otherwise given type
type=(selector?special.delegateType:special.bindType)||type;// Update special based on newly reset type
special=jQuery.event.special[type]||{};// handleObj is passed to all event handlers
handleObj=jQuery.extend({type:type,origType:origType,data:data,handler:handler,guid:handler.guid,selector:selector,needsContext:selector&&jQuery.expr.match.needsContext.test(selector),namespace:namespaces.join(".")},handleObjIn);// Init the event handler queue if we're the first
if(!(handlers=events[type])){handlers=events[type]=[];handlers.delegateCount=0;// Only use addEventListener if the special events handler returns false
if(!special.setup||special.setup.call(elem,data,namespaces,eventHandle)===false){if(elem.addEventListener){elem.addEventListener(type,eventHandle);}}}if(special.add){special.add.call(elem,handleObj);if(!handleObj.handler.guid){handleObj.handler.guid=handler.guid;}}// Add to the element's handler list, delegates in front
if(selector){handlers.splice(handlers.delegateCount++,0,handleObj);}else{handlers.push(handleObj);}// Keep track of which events have ever been used, for event optimization
jQuery.event.global[type]=true;}},// Detach an event or set of events from an element
remove:function remove(elem,types,handler,selector,mappedTypes){var j,origCount,tmp,events,t,handleObj,special,handlers,type,namespaces,origType,elemData=dataPriv.hasData(elem)&&dataPriv.get(elem);if(!elemData||!(events=elemData.events)){return;}// Once for each type.namespace in types; type may be omitted
types=(types||"").match(rnothtmlwhite)||[""];t=types.length;while(t--){tmp=rtypenamespace.exec(types[t])||[];type=origType=tmp[1];namespaces=(tmp[2]||"").split(".").sort();// Unbind all events (on this namespace, if provided) for the element
if(!type){for(type in events){jQuery.event.remove(elem,type+types[t],handler,selector,true);}continue;}special=jQuery.event.special[type]||{};type=(selector?special.delegateType:special.bindType)||type;handlers=events[type]||[];tmp=tmp[2]&&new RegExp("(^|\\.)"+namespaces.join("\\.(?:.*\\.|)")+"(\\.|$)");// Remove matching events
origCount=j=handlers.length;while(j--){handleObj=handlers[j];if((mappedTypes||origType===handleObj.origType)&&(!handler||handler.guid===handleObj.guid)&&(!tmp||tmp.test(handleObj.namespace))&&(!selector||selector===handleObj.selector||selector==="**"&&handleObj.selector)){handlers.splice(j,1);if(handleObj.selector){handlers.delegateCount--;}if(special.remove){special.remove.call(elem,handleObj);}}}// Remove generic event handler if we removed something and no more handlers exist
// (avoids potential for endless recursion during removal of special event handlers)
if(origCount&&!handlers.length){if(!special.teardown||special.teardown.call(elem,namespaces,elemData.handle)===false){jQuery.removeEvent(elem,type,elemData.handle);}delete events[type];}}// Remove data and the expando if it's no longer used
if(jQuery.isEmptyObject(events)){dataPriv.remove(elem,"handle events");}},dispatch:function dispatch(nativeEvent){// Make a writable jQuery.Event from the native event object
var event=jQuery.event.fix(nativeEvent);var i,j,ret,matched,handleObj,handlerQueue,args=new Array(arguments.length),handlers=(dataPriv.get(this,"events")||{})[event.type]||[],special=jQuery.event.special[event.type]||{};// Use the fix-ed jQuery.Event rather than the (read-only) native event
args[0]=event;for(i=1;i<arguments.length;i++){args[i]=arguments[i];}event.delegateTarget=this;// Call the preDispatch hook for the mapped type, and let it bail if desired
if(special.preDispatch&&special.preDispatch.call(this,event)===false){return;}// Determine handlers
handlerQueue=jQuery.event.handlers.call(this,event,handlers);// Run delegates first; they may want to stop propagation beneath us
i=0;while((matched=handlerQueue[i++])&&!event.isPropagationStopped()){event.currentTarget=matched.elem;j=0;while((handleObj=matched.handlers[j++])&&!event.isImmediatePropagationStopped()){// Triggered event must either 1) have no namespace, or 2) have namespace(s)
// a subset or equal to those in the bound event (both can have no namespace).
if(!event.rnamespace||event.rnamespace.test(handleObj.namespace)){event.handleObj=handleObj;event.data=handleObj.data;ret=((jQuery.event.special[handleObj.origType]||{}).handle||handleObj.handler).apply(matched.elem,args);if(ret!==undefined){if((event.result=ret)===false){event.preventDefault();event.stopPropagation();}}}}}// Call the postDispatch hook for the mapped type
if(special.postDispatch){special.postDispatch.call(this,event);}return event.result;},handlers:function handlers(event,_handlers){var i,handleObj,sel,matchedHandlers,matchedSelectors,handlerQueue=[],delegateCount=_handlers.delegateCount,cur=event.target;// Find delegate handlers
if(delegateCount&&// Support: IE <=9
// Black-hole SVG <use> instance trees (trac-13180)
cur.nodeType&&// Support: Firefox <=42
// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
// Support: IE 11 only
// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
!(event.type==="click"&&event.button>=1)){for(;cur!==this;cur=cur.parentNode||this){// Don't check non-elements (#13208)
// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
if(cur.nodeType===1&&!(event.type==="click"&&cur.disabled===true)){matchedHandlers=[];matchedSelectors={};for(i=0;i<delegateCount;i++){handleObj=_handlers[i];// Don't conflict with Object.prototype properties (#13203)
sel=handleObj.selector+" ";if(matchedSelectors[sel]===undefined){matchedSelectors[sel]=handleObj.needsContext?jQuery(sel,this).index(cur)>-1:jQuery.find(sel,this,null,[cur]).length;}if(matchedSelectors[sel]){matchedHandlers.push(handleObj);}}if(matchedHandlers.length){handlerQueue.push({elem:cur,handlers:matchedHandlers});}}}}// Add the remaining (directly-bound) handlers
cur=this;if(delegateCount<_handlers.length){handlerQueue.push({elem:cur,handlers:_handlers.slice(delegateCount)});}return handlerQueue;},addProp:function addProp(name,hook){Object.defineProperty(jQuery.Event.prototype,name,{enumerable:true,configurable:true,get:jQuery.isFunction(hook)?function(){if(this.originalEvent){return hook(this.originalEvent);}}:function(){if(this.originalEvent){return this.originalEvent[name];}},set:function set(value){Object.defineProperty(this,name,{enumerable:true,configurable:true,writable:true,value:value});}});},fix:function fix(originalEvent){return originalEvent[jQuery.expando]?originalEvent:new jQuery.Event(originalEvent);},special:{load:{// Prevent triggered image.load events from bubbling to window.load
noBubble:true},focus:{// Fire native event if possible so blur/focus sequence is correct
trigger:function trigger(){if(this!==safeActiveElement()&&this.focus){this.focus();return false;}},delegateType:"focusin"},blur:{trigger:function trigger(){if(this===safeActiveElement()&&this.blur){this.blur();return false;}},delegateType:"focusout"},click:{// For checkable types, fire native event so checked state will be right
trigger:function trigger(){if(rcheckableType.test(this.type)&&this.click&&nodeName(this,"input")){this.click();return false;}},// For cross-browser consistency, don't fire native .click() on links
_default:function _default(event){return nodeName(event.target,"a");}},beforeunload:{postDispatch:function postDispatch(event){// Support: Firefox 20+
// Firefox doesn't alert if the returnValue field is not set.
if(event.result!==undefined&&event.originalEvent){event.originalEvent.returnValue=event.result;}}}}};jQuery.removeEvent=function(elem,type,handle){// This "if" is needed for plain objects
if(elem.removeEventListener){elem.removeEventListener(type,handle);}};jQuery.Event=function(src,props){// Allow instantiation without the 'new' keyword
if(!(this instanceof jQuery.Event)){return new jQuery.Event(src,props);}// Event object
if(src&&src.type){this.originalEvent=src;this.type=src.type;// Events bubbling up the document may have been marked as prevented
// by a handler lower down the tree; reflect the correct value.
this.isDefaultPrevented=src.defaultPrevented||src.defaultPrevented===undefined&&// Support: Android <=2.3 only
src.returnValue===false?returnTrue:returnFalse;// Create target properties
// Support: Safari <=6 - 7 only
// Target should not be a text node (#504, #13143)
this.target=src.target&&src.target.nodeType===3?src.target.parentNode:src.target;this.currentTarget=src.currentTarget;this.relatedTarget=src.relatedTarget;// Event type
}else{this.type=src;}// Put explicitly provided properties onto the event object
if(props){jQuery.extend(this,props);}// Create a timestamp if incoming event doesn't have one
this.timeStamp=src&&src.timeStamp||jQuery.now();// Mark it as fixed
this[jQuery.expando]=true;};// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype={constructor:jQuery.Event,isDefaultPrevented:returnFalse,isPropagationStopped:returnFalse,isImmediatePropagationStopped:returnFalse,isSimulated:false,preventDefault:function preventDefault(){var e=this.originalEvent;this.isDefaultPrevented=returnTrue;if(e&&!this.isSimulated){e.preventDefault();}},stopPropagation:function stopPropagation(){var e=this.originalEvent;this.isPropagationStopped=returnTrue;if(e&&!this.isSimulated){e.stopPropagation();}},stopImmediatePropagation:function stopImmediatePropagation(){var e=this.originalEvent;this.isImmediatePropagationStopped=returnTrue;if(e&&!this.isSimulated){e.stopImmediatePropagation();}this.stopPropagation();}};// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each({altKey:true,bubbles:true,cancelable:true,changedTouches:true,ctrlKey:true,detail:true,eventPhase:true,metaKey:true,pageX:true,pageY:true,shiftKey:true,view:true,"char":true,charCode:true,key:true,keyCode:true,button:true,buttons:true,clientX:true,clientY:true,offsetX:true,offsetY:true,pointerId:true,pointerType:true,screenX:true,screenY:true,targetTouches:true,toElement:true,touches:true,which:function which(event){var button=event.button;// Add which for key events
if(event.which==null&&rkeyEvent.test(event.type)){return event.charCode!=null?event.charCode:event.keyCode;}// Add which for click: 1 === left; 2 === middle; 3 === right
if(!event.which&&button!==undefined&&rmouseEvent.test(event.type)){if(button&1){return 1;}if(button&2){return 3;}if(button&4){return 2;}return 0;}return event.which;}},jQuery.event.addProp);// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(orig,fix){jQuery.event.special[orig]={delegateType:fix,bindType:fix,handle:function handle(event){var ret,target=this,related=event.relatedTarget,handleObj=event.handleObj;// For mouseenter/leave call the handler if related is outside the target.
// NB: No relatedTarget if the mouse left/entered the browser window
if(!related||related!==target&&!jQuery.contains(target,related)){event.type=handleObj.origType;ret=handleObj.handler.apply(this,arguments);event.type=fix;}return ret;}};});jQuery.fn.extend({on:function on(types,selector,data,fn){return _on(this,types,selector,data,fn);},one:function one(types,selector,data,fn){return _on(this,types,selector,data,fn,1);},off:function off(types,selector,fn){var handleObj,type;if(types&&types.preventDefault&&types.handleObj){// ( event )  dispatched jQuery.Event
handleObj=types.handleObj;jQuery(types.delegateTarget).off(handleObj.namespace?handleObj.origType+"."+handleObj.namespace:handleObj.origType,handleObj.selector,handleObj.handler);return this;}if((typeof types==="undefined"?"undefined":_typeof(types))==="object"){// ( types-object [, selector] )
for(type in types){this.off(type,selector,types[type]);}return this;}if(selector===false||typeof selector==="function"){// ( types [, fn] )
fn=selector;selector=undefined;}if(fn===false){fn=returnFalse;}return this.each(function(){jQuery.event.remove(this,types,fn,selector);});}});var/* eslint-disable max-len */// See https://github.com/eslint/eslint/issues/3229
rxhtmlTag=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,/* eslint-enable */// Support: IE <=10 - 11, Edge 12 - 13
// In IE/Edge using regex groups here causes severe slowdowns.
// See https://connect.microsoft.com/IE/feedback/details/1736512/
rnoInnerhtml=/<script|<style|<link/i,// checked="checked" or checked
rchecked=/checked\s*(?:[^=]|=\s*.checked.)/i,rscriptTypeMasked=/^true\/(.*)/,rcleanScript=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;// Prefer a tbody over its parent table for containing new rows
function manipulationTarget(elem,content){if(nodeName(elem,"table")&&nodeName(content.nodeType!==11?content:content.firstChild,"tr")){return jQuery(">tbody",elem)[0]||elem;}return elem;}// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript(elem){elem.type=(elem.getAttribute("type")!==null)+"/"+elem.type;return elem;}function restoreScript(elem){var match=rscriptTypeMasked.exec(elem.type);if(match){elem.type=match[1];}else{elem.removeAttribute("type");}return elem;}function cloneCopyEvent(src,dest){var i,l,type,pdataOld,pdataCur,udataOld,udataCur,events;if(dest.nodeType!==1){return;}// 1. Copy private data: events, handlers, etc.
if(dataPriv.hasData(src)){pdataOld=dataPriv.access(src);pdataCur=dataPriv.set(dest,pdataOld);events=pdataOld.events;if(events){delete pdataCur.handle;pdataCur.events={};for(type in events){for(i=0,l=events[type].length;i<l;i++){jQuery.event.add(dest,type,events[type][i]);}}}}// 2. Copy user data
if(dataUser.hasData(src)){udataOld=dataUser.access(src);udataCur=jQuery.extend({},udataOld);dataUser.set(dest,udataCur);}}// Fix IE bugs, see support tests
function fixInput(src,dest){var nodeName=dest.nodeName.toLowerCase();// Fails to persist the checked state of a cloned checkbox or radio button.
if(nodeName==="input"&&rcheckableType.test(src.type)){dest.checked=src.checked;// Fails to return the selected option to the default selected state when cloning options
}else if(nodeName==="input"||nodeName==="textarea"){dest.defaultValue=src.defaultValue;}}function domManip(collection,args,callback,ignored){// Flatten any nested arrays
args=concat.apply([],args);var fragment,first,scripts,hasScripts,node,doc,i=0,l=collection.length,iNoClone=l-1,value=args[0],isFunction=jQuery.isFunction(value);// We can't cloneNode fragments that contain checked, in WebKit
if(isFunction||l>1&&typeof value==="string"&&!support.checkClone&&rchecked.test(value)){return collection.each(function(index){var self=collection.eq(index);if(isFunction){args[0]=value.call(this,index,self.html());}domManip(self,args,callback,ignored);});}if(l){fragment=buildFragment(args,collection[0].ownerDocument,false,collection,ignored);first=fragment.firstChild;if(fragment.childNodes.length===1){fragment=first;}// Require either new content or an interest in ignored elements to invoke the callback
if(first||ignored){scripts=jQuery.map(getAll(fragment,"script"),disableScript);hasScripts=scripts.length;// Use the original fragment for the last item
// instead of the first because it can end up
// being emptied incorrectly in certain situations (#8070).
for(;i<l;i++){node=fragment;if(i!==iNoClone){node=jQuery.clone(node,true,true);// Keep references to cloned scripts for later restoration
if(hasScripts){// Support: Android <=4.0 only, PhantomJS 1 only
// push.apply(_, arraylike) throws on ancient WebKit
jQuery.merge(scripts,getAll(node,"script"));}}callback.call(collection[i],node,i);}if(hasScripts){doc=scripts[scripts.length-1].ownerDocument;// Reenable scripts
jQuery.map(scripts,restoreScript);// Evaluate executable scripts on first document insertion
for(i=0;i<hasScripts;i++){node=scripts[i];if(rscriptType.test(node.type||"")&&!dataPriv.access(node,"globalEval")&&jQuery.contains(doc,node)){if(node.src){// Optional AJAX dependency, but won't run scripts if not present
if(jQuery._evalUrl){jQuery._evalUrl(node.src);}}else{DOMEval(node.textContent.replace(rcleanScript,""),doc);}}}}}}return collection;}function _remove(elem,selector,keepData){var node,nodes=selector?jQuery.filter(selector,elem):elem,i=0;for(;(node=nodes[i])!=null;i++){if(!keepData&&node.nodeType===1){jQuery.cleanData(getAll(node));}if(node.parentNode){if(keepData&&jQuery.contains(node.ownerDocument,node)){setGlobalEval(getAll(node,"script"));}node.parentNode.removeChild(node);}}return elem;}jQuery.extend({htmlPrefilter:function htmlPrefilter(html){return html.replace(rxhtmlTag,"<$1></$2>");},clone:function clone(elem,dataAndEvents,deepDataAndEvents){var i,l,srcElements,destElements,clone=elem.cloneNode(true),inPage=jQuery.contains(elem.ownerDocument,elem);// Fix IE cloning issues
if(!support.noCloneChecked&&(elem.nodeType===1||elem.nodeType===11)&&!jQuery.isXMLDoc(elem)){// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
destElements=getAll(clone);srcElements=getAll(elem);for(i=0,l=srcElements.length;i<l;i++){fixInput(srcElements[i],destElements[i]);}}// Copy the events from the original to the clone
if(dataAndEvents){if(deepDataAndEvents){srcElements=srcElements||getAll(elem);destElements=destElements||getAll(clone);for(i=0,l=srcElements.length;i<l;i++){cloneCopyEvent(srcElements[i],destElements[i]);}}else{cloneCopyEvent(elem,clone);}}// Preserve script evaluation history
destElements=getAll(clone,"script");if(destElements.length>0){setGlobalEval(destElements,!inPage&&getAll(elem,"script"));}// Return the cloned set
return clone;},cleanData:function cleanData(elems){var data,elem,type,special=jQuery.event.special,i=0;for(;(elem=elems[i])!==undefined;i++){if(acceptData(elem)){if(data=elem[dataPriv.expando]){if(data.events){for(type in data.events){if(special[type]){jQuery.event.remove(elem,type);// This is a shortcut to avoid jQuery.event.remove's overhead
}else{jQuery.removeEvent(elem,type,data.handle);}}}// Support: Chrome <=35 - 45+
// Assign undefined instead of using delete, see Data#remove
elem[dataPriv.expando]=undefined;}if(elem[dataUser.expando]){// Support: Chrome <=35 - 45+
// Assign undefined instead of using delete, see Data#remove
elem[dataUser.expando]=undefined;}}}}});jQuery.fn.extend({detach:function detach(selector){return _remove(this,selector,true);},remove:function remove(selector){return _remove(this,selector);},text:function text(value){return access(this,function(value){return value===undefined?jQuery.text(this):this.empty().each(function(){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){this.textContent=value;}});},null,value,arguments.length);},append:function append(){return domManip(this,arguments,function(elem){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var target=manipulationTarget(this,elem);target.appendChild(elem);}});},prepend:function prepend(){return domManip(this,arguments,function(elem){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var target=manipulationTarget(this,elem);target.insertBefore(elem,target.firstChild);}});},before:function before(){return domManip(this,arguments,function(elem){if(this.parentNode){this.parentNode.insertBefore(elem,this);}});},after:function after(){return domManip(this,arguments,function(elem){if(this.parentNode){this.parentNode.insertBefore(elem,this.nextSibling);}});},empty:function empty(){var elem,i=0;for(;(elem=this[i])!=null;i++){if(elem.nodeType===1){// Prevent memory leaks
jQuery.cleanData(getAll(elem,false));// Remove any remaining nodes
elem.textContent="";}}return this;},clone:function clone(dataAndEvents,deepDataAndEvents){dataAndEvents=dataAndEvents==null?false:dataAndEvents;deepDataAndEvents=deepDataAndEvents==null?dataAndEvents:deepDataAndEvents;return this.map(function(){return jQuery.clone(this,dataAndEvents,deepDataAndEvents);});},html:function html(value){return access(this,function(value){var elem=this[0]||{},i=0,l=this.length;if(value===undefined&&elem.nodeType===1){return elem.innerHTML;}// See if we can take a shortcut and just use innerHTML
if(typeof value==="string"&&!rnoInnerhtml.test(value)&&!wrapMap[(rtagName.exec(value)||["",""])[1].toLowerCase()]){value=jQuery.htmlPrefilter(value);try{for(;i<l;i++){elem=this[i]||{};// Remove element nodes and prevent memory leaks
if(elem.nodeType===1){jQuery.cleanData(getAll(elem,false));elem.innerHTML=value;}}elem=0;// If using innerHTML throws an exception, use the fallback method
}catch(e){}}if(elem){this.empty().append(value);}},null,value,arguments.length);},replaceWith:function replaceWith(){var ignored=[];// Make the changes, replacing each non-ignored context element with the new content
return domManip(this,arguments,function(elem){var parent=this.parentNode;if(jQuery.inArray(this,ignored)<0){jQuery.cleanData(getAll(this));if(parent){parent.replaceChild(elem,this);}}// Force callback invocation
},ignored);}});jQuery.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(name,original){jQuery.fn[name]=function(selector){var elems,ret=[],insert=jQuery(selector),last=insert.length-1,i=0;for(;i<=last;i++){elems=i===last?this:this.clone(true);jQuery(insert[i])[original](elems);// Support: Android <=4.0 only, PhantomJS 1 only
// .get() because push.apply(_, arraylike) throws on ancient WebKit
push.apply(ret,elems.get());}return this.pushStack(ret);};});var rmargin=/^margin/;var rnumnonpx=new RegExp("^("+pnum+")(?!px)[a-z%]+$","i");var getStyles=function getStyles(elem){// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
// IE throws on elements created in popups
// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
var view=elem.ownerDocument.defaultView;if(!view||!view.opener){view=window;}return view.getComputedStyle(elem);};(function(){// Executing both pixelPosition & boxSizingReliable tests require only one layout
// so they're executed at the same time to save the second computation.
function computeStyleTests(){// This is a singleton, we need to execute it only once
if(!div){return;}div.style.cssText="box-sizing:border-box;"+"position:relative;display:block;"+"margin:auto;border:1px;padding:1px;"+"top:1%;width:50%";div.innerHTML="";documentElement.appendChild(container);var divStyle=window.getComputedStyle(div);pixelPositionVal=divStyle.top!=="1%";// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
reliableMarginLeftVal=divStyle.marginLeft==="2px";boxSizingReliableVal=divStyle.width==="4px";// Support: Android 4.0 - 4.3 only
// Some styles come back with percentage values, even though they shouldn't
div.style.marginRight="50%";pixelMarginRightVal=divStyle.marginRight==="4px";documentElement.removeChild(container);// Nullify the div so it wouldn't be stored in the memory and
// it will also be a sign that checks already performed
div=null;}var pixelPositionVal,boxSizingReliableVal,pixelMarginRightVal,reliableMarginLeftVal,container=document.createElement("div"),div=document.createElement("div");// Finish early in limited (non-browser) environments
if(!div.style){return;}// Support: IE <=9 - 11 only
// Style of cloned element affects source element cloned (#8908)
div.style.backgroundClip="content-box";div.cloneNode(true).style.backgroundClip="";support.clearCloneStyle=div.style.backgroundClip==="content-box";container.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;"+"padding:0;margin-top:1px;position:absolute";container.appendChild(div);jQuery.extend(support,{pixelPosition:function pixelPosition(){computeStyleTests();return pixelPositionVal;},boxSizingReliable:function boxSizingReliable(){computeStyleTests();return boxSizingReliableVal;},pixelMarginRight:function pixelMarginRight(){computeStyleTests();return pixelMarginRightVal;},reliableMarginLeft:function reliableMarginLeft(){computeStyleTests();return reliableMarginLeftVal;}});})();function curCSS(elem,name,computed){var width,minWidth,maxWidth,ret,style=elem.style;computed=computed||getStyles(elem);// getPropertyValue is needed for:
//   .css('filter') (IE 9 only, #12537)
//   .css('--customProperty) (#3144)
if(computed){ret=computed.getPropertyValue(name)||computed[name];if(ret===""&&!jQuery.contains(elem.ownerDocument,elem)){ret=jQuery.style(elem,name);}// A tribute to the "awesome hack by Dean Edwards"
// Android Browser returns percentage for some values,
// but width seems to be reliably pixels.
// This is against the CSSOM draft spec:
// https://drafts.csswg.org/cssom/#resolved-values
if(!support.pixelMarginRight()&&rnumnonpx.test(ret)&&rmargin.test(name)){// Remember the original values
width=style.width;minWidth=style.minWidth;maxWidth=style.maxWidth;// Put in the new values to get a computed value out
style.minWidth=style.maxWidth=style.width=ret;ret=computed.width;// Revert the changed values
style.width=width;style.minWidth=minWidth;style.maxWidth=maxWidth;}}return ret!==undefined?// Support: IE <=9 - 11 only
// IE returns zIndex value as an integer.
ret+"":ret;}function addGetHookIf(conditionFn,hookFn){// Define the hook, we'll check on the first run if it's really needed.
return{get:function get(){if(conditionFn()){// Hook not needed (or it's not possible to use it due
// to missing dependency), remove it.
delete this.get;return;}// Hook needed; redefine it so that the support test is not executed again.
return(this.get=hookFn).apply(this,arguments);}};}var// Swappable if display is none or starts with table
// except "table", "table-cell", or "table-caption"
// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
rdisplayswap=/^(none|table(?!-c[ea]).+)/,rcustomProp=/^--/,cssShow={position:"absolute",visibility:"hidden",display:"block"},cssNormalTransform={letterSpacing:"0",fontWeight:"400"},cssPrefixes=["Webkit","Moz","ms"],emptyStyle=document.createElement("div").style;// Return a css property mapped to a potentially vendor prefixed property
function vendorPropName(name){// Shortcut for names that are not vendor prefixed
if(name in emptyStyle){return name;}// Check for vendor prefixed names
var capName=name[0].toUpperCase()+name.slice(1),i=cssPrefixes.length;while(i--){name=cssPrefixes[i]+capName;if(name in emptyStyle){return name;}}}// Return a property mapped along what jQuery.cssProps suggests or to
// a vendor prefixed property.
function finalPropName(name){var ret=jQuery.cssProps[name];if(!ret){ret=jQuery.cssProps[name]=vendorPropName(name)||name;}return ret;}function setPositiveNumber(elem,value,subtract){// Any relative (+/-) values have already been
// normalized at this point
var matches=rcssNum.exec(value);return matches?// Guard against undefined "subtract", e.g., when used as in cssHooks
Math.max(0,matches[2]-(subtract||0))+(matches[3]||"px"):value;}function augmentWidthOrHeight(elem,name,extra,isBorderBox,styles){var i,val=0;// If we already have the right measurement, avoid augmentation
if(extra===(isBorderBox?"border":"content")){i=4;// Otherwise initialize for horizontal or vertical properties
}else{i=name==="width"?1:0;}for(;i<4;i+=2){// Both box models exclude margin, so add it if we want it
if(extra==="margin"){val+=jQuery.css(elem,extra+cssExpand[i],true,styles);}if(isBorderBox){// border-box includes padding, so remove it if we want content
if(extra==="content"){val-=jQuery.css(elem,"padding"+cssExpand[i],true,styles);}// At this point, extra isn't border nor margin, so remove border
if(extra!=="margin"){val-=jQuery.css(elem,"border"+cssExpand[i]+"Width",true,styles);}}else{// At this point, extra isn't content, so add padding
val+=jQuery.css(elem,"padding"+cssExpand[i],true,styles);// At this point, extra isn't content nor padding, so add border
if(extra!=="padding"){val+=jQuery.css(elem,"border"+cssExpand[i]+"Width",true,styles);}}}return val;}function getWidthOrHeight(elem,name,extra){// Start with computed style
var valueIsBorderBox,styles=getStyles(elem),val=curCSS(elem,name,styles),isBorderBox=jQuery.css(elem,"boxSizing",false,styles)==="border-box";// Computed unit is not pixels. Stop here and return.
if(rnumnonpx.test(val)){return val;}// Check for style in case a browser which returns unreliable values
// for getComputedStyle silently falls back to the reliable elem.style
valueIsBorderBox=isBorderBox&&(support.boxSizingReliable()||val===elem.style[name]);// Normalize "", auto, and prepare for extra
val=parseFloat(val)||0;// Use the active box-sizing model to add/subtract irrelevant styles
return val+augmentWidthOrHeight(elem,name,extra||(isBorderBox?"border":"content"),valueIsBorderBox,styles)+"px";}jQuery.extend({// Add in style property hooks for overriding the default
// behavior of getting and setting a style property
cssHooks:{opacity:{get:function get(elem,computed){if(computed){// We should always get a number back from opacity
var ret=curCSS(elem,"opacity");return ret===""?"1":ret;}}}},// Don't automatically add "px" to these possibly-unitless properties
cssNumber:{"animationIterationCount":true,"columnCount":true,"fillOpacity":true,"flexGrow":true,"flexShrink":true,"fontWeight":true,"lineHeight":true,"opacity":true,"order":true,"orphans":true,"widows":true,"zIndex":true,"zoom":true},// Add in properties whose names you wish to fix before
// setting or getting the value
cssProps:{"float":"cssFloat"},// Get and set the style property on a DOM Node
style:function style(elem,name,value,extra){// Don't set styles on text and comment nodes
if(!elem||elem.nodeType===3||elem.nodeType===8||!elem.style){return;}// Make sure that we're working with the right name
var ret,type,hooks,origName=jQuery.camelCase(name),isCustomProp=rcustomProp.test(name),style=elem.style;// Make sure that we're working with the right name. We don't
// want to query the value if it is a CSS custom property
// since they are user-defined.
if(!isCustomProp){name=finalPropName(origName);}// Gets hook for the prefixed version, then unprefixed version
hooks=jQuery.cssHooks[name]||jQuery.cssHooks[origName];// Check if we're setting a value
if(value!==undefined){type=typeof value==="undefined"?"undefined":_typeof(value);// Convert "+=" or "-=" to relative numbers (#7345)
if(type==="string"&&(ret=rcssNum.exec(value))&&ret[1]){value=adjustCSS(elem,name,ret);// Fixes bug #9237
type="number";}// Make sure that null and NaN values aren't set (#7116)
if(value==null||value!==value){return;}// If a number was passed in, add the unit (except for certain CSS properties)
if(type==="number"){value+=ret&&ret[3]||(jQuery.cssNumber[origName]?"":"px");}// background-* props affect original clone's values
if(!support.clearCloneStyle&&value===""&&name.indexOf("background")===0){style[name]="inherit";}// If a hook was provided, use that value, otherwise just set the specified value
if(!hooks||!("set"in hooks)||(value=hooks.set(elem,value,extra))!==undefined){if(isCustomProp){style.setProperty(name,value);}else{style[name]=value;}}}else{// If a hook was provided get the non-computed value from there
if(hooks&&"get"in hooks&&(ret=hooks.get(elem,false,extra))!==undefined){return ret;}// Otherwise just get the value from the style object
return style[name];}},css:function css(elem,name,extra,styles){var val,num,hooks,origName=jQuery.camelCase(name),isCustomProp=rcustomProp.test(name);// Make sure that we're working with the right name. We don't
// want to modify the value if it is a CSS custom property
// since they are user-defined.
if(!isCustomProp){name=finalPropName(origName);}// Try prefixed name followed by the unprefixed name
hooks=jQuery.cssHooks[name]||jQuery.cssHooks[origName];// If a hook was provided get the computed value from there
if(hooks&&"get"in hooks){val=hooks.get(elem,true,extra);}// Otherwise, if a way to get the computed value exists, use that
if(val===undefined){val=curCSS(elem,name,styles);}// Convert "normal" to computed value
if(val==="normal"&&name in cssNormalTransform){val=cssNormalTransform[name];}// Make numeric if forced or a qualifier was provided and val looks numeric
if(extra===""||extra){num=parseFloat(val);return extra===true||isFinite(num)?num||0:val;}return val;}});jQuery.each(["height","width"],function(i,name){jQuery.cssHooks[name]={get:function get(elem,computed,extra){if(computed){// Certain elements can have dimension info if we invisibly show them
// but it must have a current display style that would benefit
return rdisplayswap.test(jQuery.css(elem,"display"))&&(// Support: Safari 8+
// Table columns in Safari have non-zero offsetWidth & zero
// getBoundingClientRect().width unless display is changed.
// Support: IE <=11 only
// Running getBoundingClientRect on a disconnected node
// in IE throws an error.
!elem.getClientRects().length||!elem.getBoundingClientRect().width)?swap(elem,cssShow,function(){return getWidthOrHeight(elem,name,extra);}):getWidthOrHeight(elem,name,extra);}},set:function set(elem,value,extra){var matches,styles=extra&&getStyles(elem),subtract=extra&&augmentWidthOrHeight(elem,name,extra,jQuery.css(elem,"boxSizing",false,styles)==="border-box",styles);// Convert to pixels if value adjustment is needed
if(subtract&&(matches=rcssNum.exec(value))&&(matches[3]||"px")!=="px"){elem.style[name]=value;value=jQuery.css(elem,name);}return setPositiveNumber(elem,value,subtract);}};});jQuery.cssHooks.marginLeft=addGetHookIf(support.reliableMarginLeft,function(elem,computed){if(computed){return(parseFloat(curCSS(elem,"marginLeft"))||elem.getBoundingClientRect().left-swap(elem,{marginLeft:0},function(){return elem.getBoundingClientRect().left;}))+"px";}});// These hooks are used by animate to expand properties
jQuery.each({margin:"",padding:"",border:"Width"},function(prefix,suffix){jQuery.cssHooks[prefix+suffix]={expand:function expand(value){var i=0,expanded={},// Assumes a single number if not a string
parts=typeof value==="string"?value.split(" "):[value];for(;i<4;i++){expanded[prefix+cssExpand[i]+suffix]=parts[i]||parts[i-2]||parts[0];}return expanded;}};if(!rmargin.test(prefix)){jQuery.cssHooks[prefix+suffix].set=setPositiveNumber;}});jQuery.fn.extend({css:function css(name,value){return access(this,function(elem,name,value){var styles,len,map={},i=0;if(Array.isArray(name)){styles=getStyles(elem);len=name.length;for(;i<len;i++){map[name[i]]=jQuery.css(elem,name[i],false,styles);}return map;}return value!==undefined?jQuery.style(elem,name,value):jQuery.css(elem,name);},name,value,arguments.length>1);}});function Tween(elem,options,prop,end,easing){return new Tween.prototype.init(elem,options,prop,end,easing);}jQuery.Tween=Tween;Tween.prototype={constructor:Tween,init:function init(elem,options,prop,end,easing,unit){this.elem=elem;this.prop=prop;this.easing=easing||jQuery.easing._default;this.options=options;this.start=this.now=this.cur();this.end=end;this.unit=unit||(jQuery.cssNumber[prop]?"":"px");},cur:function cur(){var hooks=Tween.propHooks[this.prop];return hooks&&hooks.get?hooks.get(this):Tween.propHooks._default.get(this);},run:function run(percent){var eased,hooks=Tween.propHooks[this.prop];if(this.options.duration){this.pos=eased=jQuery.easing[this.easing](percent,this.options.duration*percent,0,1,this.options.duration);}else{this.pos=eased=percent;}this.now=(this.end-this.start)*eased+this.start;if(this.options.step){this.options.step.call(this.elem,this.now,this);}if(hooks&&hooks.set){hooks.set(this);}else{Tween.propHooks._default.set(this);}return this;}};Tween.prototype.init.prototype=Tween.prototype;Tween.propHooks={_default:{get:function get(tween){var result;// Use a property on the element directly when it is not a DOM element,
// or when there is no matching style property that exists.
if(tween.elem.nodeType!==1||tween.elem[tween.prop]!=null&&tween.elem.style[tween.prop]==null){return tween.elem[tween.prop];}// Passing an empty string as a 3rd parameter to .css will automatically
// attempt a parseFloat and fallback to a string if the parse fails.
// Simple values such as "10px" are parsed to Float;
// complex values such as "rotate(1rad)" are returned as-is.
result=jQuery.css(tween.elem,tween.prop,"");// Empty strings, null, undefined and "auto" are converted to 0.
return!result||result==="auto"?0:result;},set:function set(tween){// Use step hook for back compat.
// Use cssHook if its there.
// Use .style if available and use plain properties where available.
if(jQuery.fx.step[tween.prop]){jQuery.fx.step[tween.prop](tween);}else if(tween.elem.nodeType===1&&(tween.elem.style[jQuery.cssProps[tween.prop]]!=null||jQuery.cssHooks[tween.prop])){jQuery.style(tween.elem,tween.prop,tween.now+tween.unit);}else{tween.elem[tween.prop]=tween.now;}}}};// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop=Tween.propHooks.scrollLeft={set:function set(tween){if(tween.elem.nodeType&&tween.elem.parentNode){tween.elem[tween.prop]=tween.now;}}};jQuery.easing={linear:function linear(p){return p;},swing:function swing(p){return 0.5-Math.cos(p*Math.PI)/2;},_default:"swing"};jQuery.fx=Tween.prototype.init;// Back compat <1.8 extension point
jQuery.fx.step={};var fxNow,inProgress,rfxtypes=/^(?:toggle|show|hide)$/,rrun=/queueHooks$/;function schedule(){if(inProgress){if(document.hidden===false&&window.requestAnimationFrame){window.requestAnimationFrame(schedule);}else{window.setTimeout(schedule,jQuery.fx.interval);}jQuery.fx.tick();}}// Animations created synchronously will run synchronously
function createFxNow(){window.setTimeout(function(){fxNow=undefined;});return fxNow=jQuery.now();}// Generate parameters to create a standard animation
function genFx(type,includeWidth){var which,i=0,attrs={height:type};// If we include width, step value is 1 to do all cssExpand values,
// otherwise step value is 2 to skip over Left and Right
includeWidth=includeWidth?1:0;for(;i<4;i+=2-includeWidth){which=cssExpand[i];attrs["margin"+which]=attrs["padding"+which]=type;}if(includeWidth){attrs.opacity=attrs.width=type;}return attrs;}function createTween(value,prop,animation){var tween,collection=(Animation.tweeners[prop]||[]).concat(Animation.tweeners["*"]),index=0,length=collection.length;for(;index<length;index++){if(tween=collection[index].call(animation,prop,value)){// We're done with this property
return tween;}}}function defaultPrefilter(elem,props,opts){var prop,value,toggle,hooks,oldfire,propTween,restoreDisplay,display,isBox="width"in props||"height"in props,anim=this,orig={},style=elem.style,hidden=elem.nodeType&&isHiddenWithinTree(elem),dataShow=dataPriv.get(elem,"fxshow");// Queue-skipping animations hijack the fx hooks
if(!opts.queue){hooks=jQuery._queueHooks(elem,"fx");if(hooks.unqueued==null){hooks.unqueued=0;oldfire=hooks.empty.fire;hooks.empty.fire=function(){if(!hooks.unqueued){oldfire();}};}hooks.unqueued++;anim.always(function(){// Ensure the complete handler is called before this completes
anim.always(function(){hooks.unqueued--;if(!jQuery.queue(elem,"fx").length){hooks.empty.fire();}});});}// Detect show/hide animations
for(prop in props){value=props[prop];if(rfxtypes.test(value)){delete props[prop];toggle=toggle||value==="toggle";if(value===(hidden?"hide":"show")){// Pretend to be hidden if this is a "show" and
// there is still data from a stopped show/hide
if(value==="show"&&dataShow&&dataShow[prop]!==undefined){hidden=true;// Ignore all other no-op show/hide data
}else{continue;}}orig[prop]=dataShow&&dataShow[prop]||jQuery.style(elem,prop);}}// Bail out if this is a no-op like .hide().hide()
propTween=!jQuery.isEmptyObject(props);if(!propTween&&jQuery.isEmptyObject(orig)){return;}// Restrict "overflow" and "display" styles during box animations
if(isBox&&elem.nodeType===1){// Support: IE <=9 - 11, Edge 12 - 13
// Record all 3 overflow attributes because IE does not infer the shorthand
// from identically-valued overflowX and overflowY
opts.overflow=[style.overflow,style.overflowX,style.overflowY];// Identify a display type, preferring old show/hide data over the CSS cascade
restoreDisplay=dataShow&&dataShow.display;if(restoreDisplay==null){restoreDisplay=dataPriv.get(elem,"display");}display=jQuery.css(elem,"display");if(display==="none"){if(restoreDisplay){display=restoreDisplay;}else{// Get nonempty value(s) by temporarily forcing visibility
showHide([elem],true);restoreDisplay=elem.style.display||restoreDisplay;display=jQuery.css(elem,"display");showHide([elem]);}}// Animate inline elements as inline-block
if(display==="inline"||display==="inline-block"&&restoreDisplay!=null){if(jQuery.css(elem,"float")==="none"){// Restore the original display value at the end of pure show/hide animations
if(!propTween){anim.done(function(){style.display=restoreDisplay;});if(restoreDisplay==null){display=style.display;restoreDisplay=display==="none"?"":display;}}style.display="inline-block";}}}if(opts.overflow){style.overflow="hidden";anim.always(function(){style.overflow=opts.overflow[0];style.overflowX=opts.overflow[1];style.overflowY=opts.overflow[2];});}// Implement show/hide animations
propTween=false;for(prop in orig){// General show/hide setup for this element animation
if(!propTween){if(dataShow){if("hidden"in dataShow){hidden=dataShow.hidden;}}else{dataShow=dataPriv.access(elem,"fxshow",{display:restoreDisplay});}// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
if(toggle){dataShow.hidden=!hidden;}// Show elements before animating them
if(hidden){showHide([elem],true);}/* eslint-disable no-loop-func */anim.done(function(){/* eslint-enable no-loop-func */// The final step of a "hide" animation is actually hiding the element
if(!hidden){showHide([elem]);}dataPriv.remove(elem,"fxshow");for(prop in orig){jQuery.style(elem,prop,orig[prop]);}});}// Per-property setup
propTween=createTween(hidden?dataShow[prop]:0,prop,anim);if(!(prop in dataShow)){dataShow[prop]=propTween.start;if(hidden){propTween.end=propTween.start;propTween.start=0;}}}}function propFilter(props,specialEasing){var index,name,easing,value,hooks;// camelCase, specialEasing and expand cssHook pass
for(index in props){name=jQuery.camelCase(index);easing=specialEasing[name];value=props[index];if(Array.isArray(value)){easing=value[1];value=props[index]=value[0];}if(index!==name){props[name]=value;delete props[index];}hooks=jQuery.cssHooks[name];if(hooks&&"expand"in hooks){value=hooks.expand(value);delete props[name];// Not quite $.extend, this won't overwrite existing keys.
// Reusing 'index' because we have the correct "name"
for(index in value){if(!(index in props)){props[index]=value[index];specialEasing[index]=easing;}}}else{specialEasing[name]=easing;}}}function Animation(elem,properties,options){var result,stopped,index=0,length=Animation.prefilters.length,deferred=jQuery.Deferred().always(function(){// Don't match elem in the :animated selector
delete tick.elem;}),tick=function tick(){if(stopped){return false;}var currentTime=fxNow||createFxNow(),remaining=Math.max(0,animation.startTime+animation.duration-currentTime),// Support: Android 2.3 only
// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
temp=remaining/animation.duration||0,percent=1-temp,index=0,length=animation.tweens.length;for(;index<length;index++){animation.tweens[index].run(percent);}deferred.notifyWith(elem,[animation,percent,remaining]);// If there's more to do, yield
if(percent<1&&length){return remaining;}// If this was an empty animation, synthesize a final progress notification
if(!length){deferred.notifyWith(elem,[animation,1,0]);}// Resolve the animation and report its conclusion
deferred.resolveWith(elem,[animation]);return false;},animation=deferred.promise({elem:elem,props:jQuery.extend({},properties),opts:jQuery.extend(true,{specialEasing:{},easing:jQuery.easing._default},options),originalProperties:properties,originalOptions:options,startTime:fxNow||createFxNow(),duration:options.duration,tweens:[],createTween:function createTween(prop,end){var tween=jQuery.Tween(elem,animation.opts,prop,end,animation.opts.specialEasing[prop]||animation.opts.easing);animation.tweens.push(tween);return tween;},stop:function stop(gotoEnd){var index=0,// If we are going to the end, we want to run all the tweens
// otherwise we skip this part
length=gotoEnd?animation.tweens.length:0;if(stopped){return this;}stopped=true;for(;index<length;index++){animation.tweens[index].run(1);}// Resolve when we played the last frame; otherwise, reject
if(gotoEnd){deferred.notifyWith(elem,[animation,1,0]);deferred.resolveWith(elem,[animation,gotoEnd]);}else{deferred.rejectWith(elem,[animation,gotoEnd]);}return this;}}),props=animation.props;propFilter(props,animation.opts.specialEasing);for(;index<length;index++){result=Animation.prefilters[index].call(animation,elem,props,animation.opts);if(result){if(jQuery.isFunction(result.stop)){jQuery._queueHooks(animation.elem,animation.opts.queue).stop=jQuery.proxy(result.stop,result);}return result;}}jQuery.map(props,createTween,animation);if(jQuery.isFunction(animation.opts.start)){animation.opts.start.call(elem,animation);}// Attach callbacks from options
animation.progress(animation.opts.progress).done(animation.opts.done,animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);jQuery.fx.timer(jQuery.extend(tick,{elem:elem,anim:animation,queue:animation.opts.queue}));return animation;}jQuery.Animation=jQuery.extend(Animation,{tweeners:{"*":[function(prop,value){var tween=this.createTween(prop,value);adjustCSS(tween.elem,prop,rcssNum.exec(value),tween);return tween;}]},tweener:function tweener(props,callback){if(jQuery.isFunction(props)){callback=props;props=["*"];}else{props=props.match(rnothtmlwhite);}var prop,index=0,length=props.length;for(;index<length;index++){prop=props[index];Animation.tweeners[prop]=Animation.tweeners[prop]||[];Animation.tweeners[prop].unshift(callback);}},prefilters:[defaultPrefilter],prefilter:function prefilter(callback,prepend){if(prepend){Animation.prefilters.unshift(callback);}else{Animation.prefilters.push(callback);}}});jQuery.speed=function(speed,easing,fn){var opt=speed&&(typeof speed==="undefined"?"undefined":_typeof(speed))==="object"?jQuery.extend({},speed):{complete:fn||!fn&&easing||jQuery.isFunction(speed)&&speed,duration:speed,easing:fn&&easing||easing&&!jQuery.isFunction(easing)&&easing};// Go to the end state if fx are off
if(jQuery.fx.off){opt.duration=0;}else{if(typeof opt.duration!=="number"){if(opt.duration in jQuery.fx.speeds){opt.duration=jQuery.fx.speeds[opt.duration];}else{opt.duration=jQuery.fx.speeds._default;}}}// Normalize opt.queue - true/undefined/null -> "fx"
if(opt.queue==null||opt.queue===true){opt.queue="fx";}// Queueing
opt.old=opt.complete;opt.complete=function(){if(jQuery.isFunction(opt.old)){opt.old.call(this);}if(opt.queue){jQuery.dequeue(this,opt.queue);}};return opt;};jQuery.fn.extend({fadeTo:function fadeTo(speed,to,easing,callback){// Show any hidden elements after setting opacity to 0
return this.filter(isHiddenWithinTree).css("opacity",0).show()// Animate to the value specified
.end().animate({opacity:to},speed,easing,callback);},animate:function animate(prop,speed,easing,callback){var empty=jQuery.isEmptyObject(prop),optall=jQuery.speed(speed,easing,callback),doAnimation=function doAnimation(){// Operate on a copy of prop so per-property easing won't be lost
var anim=Animation(this,jQuery.extend({},prop),optall);// Empty animations, or finishing resolves immediately
if(empty||dataPriv.get(this,"finish")){anim.stop(true);}};doAnimation.finish=doAnimation;return empty||optall.queue===false?this.each(doAnimation):this.queue(optall.queue,doAnimation);},stop:function stop(type,clearQueue,gotoEnd){var stopQueue=function stopQueue(hooks){var stop=hooks.stop;delete hooks.stop;stop(gotoEnd);};if(typeof type!=="string"){gotoEnd=clearQueue;clearQueue=type;type=undefined;}if(clearQueue&&type!==false){this.queue(type||"fx",[]);}return this.each(function(){var dequeue=true,index=type!=null&&type+"queueHooks",timers=jQuery.timers,data=dataPriv.get(this);if(index){if(data[index]&&data[index].stop){stopQueue(data[index]);}}else{for(index in data){if(data[index]&&data[index].stop&&rrun.test(index)){stopQueue(data[index]);}}}for(index=timers.length;index--;){if(timers[index].elem===this&&(type==null||timers[index].queue===type)){timers[index].anim.stop(gotoEnd);dequeue=false;timers.splice(index,1);}}// Start the next in the queue if the last step wasn't forced.
// Timers currently will call their complete callbacks, which
// will dequeue but only if they were gotoEnd.
if(dequeue||!gotoEnd){jQuery.dequeue(this,type);}});},finish:function finish(type){if(type!==false){type=type||"fx";}return this.each(function(){var index,data=dataPriv.get(this),queue=data[type+"queue"],hooks=data[type+"queueHooks"],timers=jQuery.timers,length=queue?queue.length:0;// Enable finishing flag on private data
data.finish=true;// Empty the queue first
jQuery.queue(this,type,[]);if(hooks&&hooks.stop){hooks.stop.call(this,true);}// Look for any active animations, and finish them
for(index=timers.length;index--;){if(timers[index].elem===this&&timers[index].queue===type){timers[index].anim.stop(true);timers.splice(index,1);}}// Look for any animations in the old queue and finish them
for(index=0;index<length;index++){if(queue[index]&&queue[index].finish){queue[index].finish.call(this);}}// Turn off finishing flag
delete data.finish;});}});jQuery.each(["toggle","show","hide"],function(i,name){var cssFn=jQuery.fn[name];jQuery.fn[name]=function(speed,easing,callback){return speed==null||typeof speed==="boolean"?cssFn.apply(this,arguments):this.animate(genFx(name,true),speed,easing,callback);};});// Generate shortcuts for custom animations
jQuery.each({slideDown:genFx("show"),slideUp:genFx("hide"),slideToggle:genFx("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(name,props){jQuery.fn[name]=function(speed,easing,callback){return this.animate(props,speed,easing,callback);};});jQuery.timers=[];jQuery.fx.tick=function(){var timer,i=0,timers=jQuery.timers;fxNow=jQuery.now();for(;i<timers.length;i++){timer=timers[i];// Run the timer and safely remove it when done (allowing for external removal)
if(!timer()&&timers[i]===timer){timers.splice(i--,1);}}if(!timers.length){jQuery.fx.stop();}fxNow=undefined;};jQuery.fx.timer=function(timer){jQuery.timers.push(timer);jQuery.fx.start();};jQuery.fx.interval=13;jQuery.fx.start=function(){if(inProgress){return;}inProgress=true;schedule();};jQuery.fx.stop=function(){inProgress=null;};jQuery.fx.speeds={slow:600,fast:200,// Default speed
_default:400};// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay=function(time,type){time=jQuery.fx?jQuery.fx.speeds[time]||time:time;type=type||"fx";return this.queue(type,function(next,hooks){var timeout=window.setTimeout(next,time);hooks.stop=function(){window.clearTimeout(timeout);};});};(function(){var input=document.createElement("input"),select=document.createElement("select"),opt=select.appendChild(document.createElement("option"));input.type="checkbox";// Support: Android <=4.3 only
// Default value for a checkbox should be "on"
support.checkOn=input.value!=="";// Support: IE <=11 only
// Must access selectedIndex to make default options select
support.optSelected=opt.selected;// Support: IE <=11 only
// An input loses its value after becoming a radio
input=document.createElement("input");input.value="t";input.type="radio";support.radioValue=input.value==="t";})();var boolHook,attrHandle=jQuery.expr.attrHandle;jQuery.fn.extend({attr:function attr(name,value){return access(this,jQuery.attr,name,value,arguments.length>1);},removeAttr:function removeAttr(name){return this.each(function(){jQuery.removeAttr(this,name);});}});jQuery.extend({attr:function attr(elem,name,value){var ret,hooks,nType=elem.nodeType;// Don't get/set attributes on text, comment and attribute nodes
if(nType===3||nType===8||nType===2){return;}// Fallback to prop when attributes are not supported
if(typeof elem.getAttribute==="undefined"){return jQuery.prop(elem,name,value);}// Attribute hooks are determined by the lowercase version
// Grab necessary hook if one is defined
if(nType!==1||!jQuery.isXMLDoc(elem)){hooks=jQuery.attrHooks[name.toLowerCase()]||(jQuery.expr.match.bool.test(name)?boolHook:undefined);}if(value!==undefined){if(value===null){jQuery.removeAttr(elem,name);return;}if(hooks&&"set"in hooks&&(ret=hooks.set(elem,value,name))!==undefined){return ret;}elem.setAttribute(name,value+"");return value;}if(hooks&&"get"in hooks&&(ret=hooks.get(elem,name))!==null){return ret;}ret=jQuery.find.attr(elem,name);// Non-existent attributes return null, we normalize to undefined
return ret==null?undefined:ret;},attrHooks:{type:{set:function set(elem,value){if(!support.radioValue&&value==="radio"&&nodeName(elem,"input")){var val=elem.value;elem.setAttribute("type",value);if(val){elem.value=val;}return value;}}}},removeAttr:function removeAttr(elem,value){var name,i=0,// Attribute names can contain non-HTML whitespace characters
// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
attrNames=value&&value.match(rnothtmlwhite);if(attrNames&&elem.nodeType===1){while(name=attrNames[i++]){elem.removeAttribute(name);}}}});// Hooks for boolean attributes
boolHook={set:function set(elem,value,name){if(value===false){// Remove boolean attributes when set to false
jQuery.removeAttr(elem,name);}else{elem.setAttribute(name,name);}return name;}};jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g),function(i,name){var getter=attrHandle[name]||jQuery.find.attr;attrHandle[name]=function(elem,name,isXML){var ret,handle,lowercaseName=name.toLowerCase();if(!isXML){// Avoid an infinite loop by temporarily removing this function from the getter
handle=attrHandle[lowercaseName];attrHandle[lowercaseName]=ret;ret=getter(elem,name,isXML)!=null?lowercaseName:null;attrHandle[lowercaseName]=handle;}return ret;};});var rfocusable=/^(?:input|select|textarea|button)$/i,rclickable=/^(?:a|area)$/i;jQuery.fn.extend({prop:function prop(name,value){return access(this,jQuery.prop,name,value,arguments.length>1);},removeProp:function removeProp(name){return this.each(function(){delete this[jQuery.propFix[name]||name];});}});jQuery.extend({prop:function prop(elem,name,value){var ret,hooks,nType=elem.nodeType;// Don't get/set properties on text, comment and attribute nodes
if(nType===3||nType===8||nType===2){return;}if(nType!==1||!jQuery.isXMLDoc(elem)){// Fix name and attach hooks
name=jQuery.propFix[name]||name;hooks=jQuery.propHooks[name];}if(value!==undefined){if(hooks&&"set"in hooks&&(ret=hooks.set(elem,value,name))!==undefined){return ret;}return elem[name]=value;}if(hooks&&"get"in hooks&&(ret=hooks.get(elem,name))!==null){return ret;}return elem[name];},propHooks:{tabIndex:{get:function get(elem){// Support: IE <=9 - 11 only
// elem.tabIndex doesn't always return the
// correct value when it hasn't been explicitly set
// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
// Use proper attribute retrieval(#12072)
var tabindex=jQuery.find.attr(elem,"tabindex");if(tabindex){return parseInt(tabindex,10);}if(rfocusable.test(elem.nodeName)||rclickable.test(elem.nodeName)&&elem.href){return 0;}return-1;}}},propFix:{"for":"htmlFor","class":"className"}});// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if(!support.optSelected){jQuery.propHooks.selected={get:function get(elem){/* eslint no-unused-expressions: "off" */var parent=elem.parentNode;if(parent&&parent.parentNode){parent.parentNode.selectedIndex;}return null;},set:function set(elem){/* eslint no-unused-expressions: "off" */var parent=elem.parentNode;if(parent){parent.selectedIndex;if(parent.parentNode){parent.parentNode.selectedIndex;}}}};}jQuery.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){jQuery.propFix[this.toLowerCase()]=this;});// Strip and collapse whitespace according to HTML spec
// https://html.spec.whatwg.org/multipage/infrastructure.html#strip-and-collapse-whitespace
function stripAndCollapse(value){var tokens=value.match(rnothtmlwhite)||[];return tokens.join(" ");}function getClass(elem){return elem.getAttribute&&elem.getAttribute("class")||"";}jQuery.fn.extend({addClass:function addClass(value){var classes,elem,cur,curValue,clazz,j,finalValue,i=0;if(jQuery.isFunction(value)){return this.each(function(j){jQuery(this).addClass(value.call(this,j,getClass(this)));});}if(typeof value==="string"&&value){classes=value.match(rnothtmlwhite)||[];while(elem=this[i++]){curValue=getClass(elem);cur=elem.nodeType===1&&" "+stripAndCollapse(curValue)+" ";if(cur){j=0;while(clazz=classes[j++]){if(cur.indexOf(" "+clazz+" ")<0){cur+=clazz+" ";}}// Only assign if different to avoid unneeded rendering.
finalValue=stripAndCollapse(cur);if(curValue!==finalValue){elem.setAttribute("class",finalValue);}}}}return this;},removeClass:function removeClass(value){var classes,elem,cur,curValue,clazz,j,finalValue,i=0;if(jQuery.isFunction(value)){return this.each(function(j){jQuery(this).removeClass(value.call(this,j,getClass(this)));});}if(!arguments.length){return this.attr("class","");}if(typeof value==="string"&&value){classes=value.match(rnothtmlwhite)||[];while(elem=this[i++]){curValue=getClass(elem);// This expression is here for better compressibility (see addClass)
cur=elem.nodeType===1&&" "+stripAndCollapse(curValue)+" ";if(cur){j=0;while(clazz=classes[j++]){// Remove *all* instances
while(cur.indexOf(" "+clazz+" ")>-1){cur=cur.replace(" "+clazz+" "," ");}}// Only assign if different to avoid unneeded rendering.
finalValue=stripAndCollapse(cur);if(curValue!==finalValue){elem.setAttribute("class",finalValue);}}}}return this;},toggleClass:function toggleClass(value,stateVal){var type=typeof value==="undefined"?"undefined":_typeof(value);if(typeof stateVal==="boolean"&&type==="string"){return stateVal?this.addClass(value):this.removeClass(value);}if(jQuery.isFunction(value)){return this.each(function(i){jQuery(this).toggleClass(value.call(this,i,getClass(this),stateVal),stateVal);});}return this.each(function(){var className,i,self,classNames;if(type==="string"){// Toggle individual class names
i=0;self=jQuery(this);classNames=value.match(rnothtmlwhite)||[];while(className=classNames[i++]){// Check each className given, space separated list
if(self.hasClass(className)){self.removeClass(className);}else{self.addClass(className);}}// Toggle whole class name
}else if(value===undefined||type==="boolean"){className=getClass(this);if(className){// Store className if set
dataPriv.set(this,"__className__",className);}// If the element has a class name or if we're passed `false`,
// then remove the whole classname (if there was one, the above saved it).
// Otherwise bring back whatever was previously saved (if anything),
// falling back to the empty string if nothing was stored.
if(this.setAttribute){this.setAttribute("class",className||value===false?"":dataPriv.get(this,"__className__")||"");}}});},hasClass:function hasClass(selector){var className,elem,i=0;className=" "+selector+" ";while(elem=this[i++]){if(elem.nodeType===1&&(" "+stripAndCollapse(getClass(elem))+" ").indexOf(className)>-1){return true;}}return false;}});var rreturn=/\r/g;jQuery.fn.extend({val:function val(value){var hooks,ret,isFunction,elem=this[0];if(!arguments.length){if(elem){hooks=jQuery.valHooks[elem.type]||jQuery.valHooks[elem.nodeName.toLowerCase()];if(hooks&&"get"in hooks&&(ret=hooks.get(elem,"value"))!==undefined){return ret;}ret=elem.value;// Handle most common string cases
if(typeof ret==="string"){return ret.replace(rreturn,"");}// Handle cases where value is null/undef or number
return ret==null?"":ret;}return;}isFunction=jQuery.isFunction(value);return this.each(function(i){var val;if(this.nodeType!==1){return;}if(isFunction){val=value.call(this,i,jQuery(this).val());}else{val=value;}// Treat null/undefined as ""; convert numbers to string
if(val==null){val="";}else if(typeof val==="number"){val+="";}else if(Array.isArray(val)){val=jQuery.map(val,function(value){return value==null?"":value+"";});}hooks=jQuery.valHooks[this.type]||jQuery.valHooks[this.nodeName.toLowerCase()];// If set returns undefined, fall back to normal setting
if(!hooks||!("set"in hooks)||hooks.set(this,val,"value")===undefined){this.value=val;}});}});jQuery.extend({valHooks:{option:{get:function get(elem){var val=jQuery.find.attr(elem,"value");return val!=null?val:// Support: IE <=10 - 11 only
// option.text throws exceptions (#14686, #14858)
// Strip and collapse whitespace
// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
stripAndCollapse(jQuery.text(elem));}},select:{get:function get(elem){var value,option,i,options=elem.options,index=elem.selectedIndex,one=elem.type==="select-one",values=one?null:[],max=one?index+1:options.length;if(index<0){i=max;}else{i=one?index:0;}// Loop through all the selected options
for(;i<max;i++){option=options[i];// Support: IE <=9 only
// IE8-9 doesn't update selected after form reset (#2551)
if((option.selected||i===index)&&// Don't return options that are disabled or in a disabled optgroup
!option.disabled&&(!option.parentNode.disabled||!nodeName(option.parentNode,"optgroup"))){// Get the specific value for the option
value=jQuery(option).val();// We don't need an array for one selects
if(one){return value;}// Multi-Selects return an array
values.push(value);}}return values;},set:function set(elem,value){var optionSet,option,options=elem.options,values=jQuery.makeArray(value),i=options.length;while(i--){option=options[i];/* eslint-disable no-cond-assign */if(option.selected=jQuery.inArray(jQuery.valHooks.option.get(option),values)>-1){optionSet=true;}/* eslint-enable no-cond-assign */}// Force browsers to behave consistently when non-matching value is set
if(!optionSet){elem.selectedIndex=-1;}return values;}}}});// Radios and checkboxes getter/setter
jQuery.each(["radio","checkbox"],function(){jQuery.valHooks[this]={set:function set(elem,value){if(Array.isArray(value)){return elem.checked=jQuery.inArray(jQuery(elem).val(),value)>-1;}}};if(!support.checkOn){jQuery.valHooks[this].get=function(elem){return elem.getAttribute("value")===null?"on":elem.value;};}});// Return jQuery for attributes-only inclusion
var rfocusMorph=/^(?:focusinfocus|focusoutblur)$/;jQuery.extend(jQuery.event,{trigger:function trigger(event,data,elem,onlyHandlers){var i,cur,tmp,bubbleType,ontype,handle,special,eventPath=[elem||document],type=hasOwn.call(event,"type")?event.type:event,namespaces=hasOwn.call(event,"namespace")?event.namespace.split("."):[];cur=tmp=elem=elem||document;// Don't do events on text and comment nodes
if(elem.nodeType===3||elem.nodeType===8){return;}// focus/blur morphs to focusin/out; ensure we're not firing them right now
if(rfocusMorph.test(type+jQuery.event.triggered)){return;}if(type.indexOf(".")>-1){// Namespaced trigger; create a regexp to match event type in handle()
namespaces=type.split(".");type=namespaces.shift();namespaces.sort();}ontype=type.indexOf(":")<0&&"on"+type;// Caller can pass in a jQuery.Event object, Object, or just an event type string
event=event[jQuery.expando]?event:new jQuery.Event(type,(typeof event==="undefined"?"undefined":_typeof(event))==="object"&&event);// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
event.isTrigger=onlyHandlers?2:3;event.namespace=namespaces.join(".");event.rnamespace=event.namespace?new RegExp("(^|\\.)"+namespaces.join("\\.(?:.*\\.|)")+"(\\.|$)"):null;// Clean up the event in case it is being reused
event.result=undefined;if(!event.target){event.target=elem;}// Clone any incoming data and prepend the event, creating the handler arg list
data=data==null?[event]:jQuery.makeArray(data,[event]);// Allow special events to draw outside the lines
special=jQuery.event.special[type]||{};if(!onlyHandlers&&special.trigger&&special.trigger.apply(elem,data)===false){return;}// Determine event propagation path in advance, per W3C events spec (#9951)
// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
if(!onlyHandlers&&!special.noBubble&&!jQuery.isWindow(elem)){bubbleType=special.delegateType||type;if(!rfocusMorph.test(bubbleType+type)){cur=cur.parentNode;}for(;cur;cur=cur.parentNode){eventPath.push(cur);tmp=cur;}// Only add window if we got to document (e.g., not plain obj or detached DOM)
if(tmp===(elem.ownerDocument||document)){eventPath.push(tmp.defaultView||tmp.parentWindow||window);}}// Fire handlers on the event path
i=0;while((cur=eventPath[i++])&&!event.isPropagationStopped()){event.type=i>1?bubbleType:special.bindType||type;// jQuery handler
handle=(dataPriv.get(cur,"events")||{})[event.type]&&dataPriv.get(cur,"handle");if(handle){handle.apply(cur,data);}// Native handler
handle=ontype&&cur[ontype];if(handle&&handle.apply&&acceptData(cur)){event.result=handle.apply(cur,data);if(event.result===false){event.preventDefault();}}}event.type=type;// If nobody prevented the default action, do it now
if(!onlyHandlers&&!event.isDefaultPrevented()){if((!special._default||special._default.apply(eventPath.pop(),data)===false)&&acceptData(elem)){// Call a native DOM method on the target with the same name as the event.
// Don't do default actions on window, that's where global variables be (#6170)
if(ontype&&jQuery.isFunction(elem[type])&&!jQuery.isWindow(elem)){// Don't re-trigger an onFOO event when we call its FOO() method
tmp=elem[ontype];if(tmp){elem[ontype]=null;}// Prevent re-triggering of the same event, since we already bubbled it above
jQuery.event.triggered=type;elem[type]();jQuery.event.triggered=undefined;if(tmp){elem[ontype]=tmp;}}}}return event.result;},// Piggyback on a donor event to simulate a different one
// Used only for `focus(in | out)` events
simulate:function simulate(type,elem,event){var e=jQuery.extend(new jQuery.Event(),event,{type:type,isSimulated:true});jQuery.event.trigger(e,null,elem);}});jQuery.fn.extend({trigger:function trigger(type,data){return this.each(function(){jQuery.event.trigger(type,data,this);});},triggerHandler:function triggerHandler(type,data){var elem=this[0];if(elem){return jQuery.event.trigger(type,data,elem,true);}}});jQuery.each(("blur focus focusin focusout resize scroll click dblclick "+"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave "+"change select submit keydown keypress keyup contextmenu").split(" "),function(i,name){// Handle event binding
jQuery.fn[name]=function(data,fn){return arguments.length>0?this.on(name,null,data,fn):this.trigger(name);};});jQuery.fn.extend({hover:function hover(fnOver,fnOut){return this.mouseenter(fnOver).mouseleave(fnOut||fnOver);}});support.focusin="onfocusin"in window;// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if(!support.focusin){jQuery.each({focus:"focusin",blur:"focusout"},function(orig,fix){// Attach a single capturing handler on the document while someone wants focusin/focusout
var handler=function handler(event){jQuery.event.simulate(fix,event.target,jQuery.event.fix(event));};jQuery.event.special[fix]={setup:function setup(){var doc=this.ownerDocument||this,attaches=dataPriv.access(doc,fix);if(!attaches){doc.addEventListener(orig,handler,true);}dataPriv.access(doc,fix,(attaches||0)+1);},teardown:function teardown(){var doc=this.ownerDocument||this,attaches=dataPriv.access(doc,fix)-1;if(!attaches){doc.removeEventListener(orig,handler,true);dataPriv.remove(doc,fix);}else{dataPriv.access(doc,fix,attaches);}}};});}var location=window.location;var nonce=jQuery.now();var rquery=/\?/;// Cross-browser xml parsing
jQuery.parseXML=function(data){var xml;if(!data||typeof data!=="string"){return null;}// Support: IE 9 - 11 only
// IE throws on parseFromString with invalid input.
try{xml=new window.DOMParser().parseFromString(data,"text/xml");}catch(e){xml=undefined;}if(!xml||xml.getElementsByTagName("parsererror").length){jQuery.error("Invalid XML: "+data);}return xml;};var rbracket=/\[\]$/,rCRLF=/\r?\n/g,rsubmitterTypes=/^(?:submit|button|image|reset|file)$/i,rsubmittable=/^(?:input|select|textarea|keygen)/i;function buildParams(prefix,obj,traditional,add){var name;if(Array.isArray(obj)){// Serialize array item.
jQuery.each(obj,function(i,v){if(traditional||rbracket.test(prefix)){// Treat each array item as a scalar.
add(prefix,v);}else{// Item is non-scalar (array or object), encode its numeric index.
buildParams(prefix+"["+((typeof v==="undefined"?"undefined":_typeof(v))==="object"&&v!=null?i:"")+"]",v,traditional,add);}});}else if(!traditional&&jQuery.type(obj)==="object"){// Serialize object item.
for(name in obj){buildParams(prefix+"["+name+"]",obj[name],traditional,add);}}else{// Serialize scalar item.
add(prefix,obj);}}// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param=function(a,traditional){var prefix,s=[],add=function add(key,valueOrFunction){// If value is a function, invoke it and use its return value
var value=jQuery.isFunction(valueOrFunction)?valueOrFunction():valueOrFunction;s[s.length]=encodeURIComponent(key)+"="+encodeURIComponent(value==null?"":value);};// If an array was passed in, assume that it is an array of form elements.
if(Array.isArray(a)||a.jquery&&!jQuery.isPlainObject(a)){// Serialize the form elements
jQuery.each(a,function(){add(this.name,this.value);});}else{// If traditional, encode the "old" way (the way 1.3.2 or older
// did it), otherwise encode params recursively.
for(prefix in a){buildParams(prefix,a[prefix],traditional,add);}}// Return the resulting serialization
return s.join("&");};jQuery.fn.extend({serialize:function serialize(){return jQuery.param(this.serializeArray());},serializeArray:function serializeArray(){return this.map(function(){// Can add propHook for "elements" to filter or add form elements
var elements=jQuery.prop(this,"elements");return elements?jQuery.makeArray(elements):this;}).filter(function(){var type=this.type;// Use .is( ":disabled" ) so that fieldset[disabled] works
return this.name&&!jQuery(this).is(":disabled")&&rsubmittable.test(this.nodeName)&&!rsubmitterTypes.test(type)&&(this.checked||!rcheckableType.test(type));}).map(function(i,elem){var val=jQuery(this).val();if(val==null){return null;}if(Array.isArray(val)){return jQuery.map(val,function(val){return{name:elem.name,value:val.replace(rCRLF,"\r\n")};});}return{name:elem.name,value:val.replace(rCRLF,"\r\n")};}).get();}});var r20=/%20/g,rhash=/#.*$/,rantiCache=/([?&])_=[^&]*/,rheaders=/^(.*?):[ \t]*([^\r\n]*)$/mg,// #7653, #8125, #8152: local protocol detection
rlocalProtocol=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,rnoContent=/^(?:GET|HEAD)$/,rprotocol=/^\/\//,/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */prefilters={},/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */transports={},// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
allTypes="*/".concat("*"),// Anchor tag for parsing the document origin
originAnchor=document.createElement("a");originAnchor.href=location.href;// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports(structure){// dataTypeExpression is optional and defaults to "*"
return function(dataTypeExpression,func){if(typeof dataTypeExpression!=="string"){func=dataTypeExpression;dataTypeExpression="*";}var dataType,i=0,dataTypes=dataTypeExpression.toLowerCase().match(rnothtmlwhite)||[];if(jQuery.isFunction(func)){// For each dataType in the dataTypeExpression
while(dataType=dataTypes[i++]){// Prepend if requested
if(dataType[0]==="+"){dataType=dataType.slice(1)||"*";(structure[dataType]=structure[dataType]||[]).unshift(func);// Otherwise append
}else{(structure[dataType]=structure[dataType]||[]).push(func);}}}};}// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports(structure,options,originalOptions,jqXHR){var inspected={},seekingTransport=structure===transports;function inspect(dataType){var selected;inspected[dataType]=true;jQuery.each(structure[dataType]||[],function(_,prefilterOrFactory){var dataTypeOrTransport=prefilterOrFactory(options,originalOptions,jqXHR);if(typeof dataTypeOrTransport==="string"&&!seekingTransport&&!inspected[dataTypeOrTransport]){options.dataTypes.unshift(dataTypeOrTransport);inspect(dataTypeOrTransport);return false;}else if(seekingTransport){return!(selected=dataTypeOrTransport);}});return selected;}return inspect(options.dataTypes[0])||!inspected["*"]&&inspect("*");}// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend(target,src){var key,deep,flatOptions=jQuery.ajaxSettings.flatOptions||{};for(key in src){if(src[key]!==undefined){(flatOptions[key]?target:deep||(deep={}))[key]=src[key];}}if(deep){jQuery.extend(true,target,deep);}return target;}/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */function ajaxHandleResponses(s,jqXHR,responses){var ct,type,finalDataType,firstDataType,contents=s.contents,dataTypes=s.dataTypes;// Remove auto dataType and get content-type in the process
while(dataTypes[0]==="*"){dataTypes.shift();if(ct===undefined){ct=s.mimeType||jqXHR.getResponseHeader("Content-Type");}}// Check if we're dealing with a known content-type
if(ct){for(type in contents){if(contents[type]&&contents[type].test(ct)){dataTypes.unshift(type);break;}}}// Check to see if we have a response for the expected dataType
if(dataTypes[0]in responses){finalDataType=dataTypes[0];}else{// Try convertible dataTypes
for(type in responses){if(!dataTypes[0]||s.converters[type+" "+dataTypes[0]]){finalDataType=type;break;}if(!firstDataType){firstDataType=type;}}// Or just use first one
finalDataType=finalDataType||firstDataType;}// If we found a dataType
// We add the dataType to the list if needed
// and return the corresponding response
if(finalDataType){if(finalDataType!==dataTypes[0]){dataTypes.unshift(finalDataType);}return responses[finalDataType];}}/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */function ajaxConvert(s,response,jqXHR,isSuccess){var conv2,current,conv,tmp,prev,converters={},// Work with a copy of dataTypes in case we need to modify it for conversion
dataTypes=s.dataTypes.slice();// Create converters map with lowercased keys
if(dataTypes[1]){for(conv in s.converters){converters[conv.toLowerCase()]=s.converters[conv];}}current=dataTypes.shift();// Convert to each sequential dataType
while(current){if(s.responseFields[current]){jqXHR[s.responseFields[current]]=response;}// Apply the dataFilter if provided
if(!prev&&isSuccess&&s.dataFilter){response=s.dataFilter(response,s.dataType);}prev=current;current=dataTypes.shift();if(current){// There's only work to do if current dataType is non-auto
if(current==="*"){current=prev;// Convert response if prev dataType is non-auto and differs from current
}else if(prev!=="*"&&prev!==current){// Seek a direct converter
conv=converters[prev+" "+current]||converters["* "+current];// If none found, seek a pair
if(!conv){for(conv2 in converters){// If conv2 outputs current
tmp=conv2.split(" ");if(tmp[1]===current){// If prev can be converted to accepted input
conv=converters[prev+" "+tmp[0]]||converters["* "+tmp[0]];if(conv){// Condense equivalence converters
if(conv===true){conv=converters[conv2];// Otherwise, insert the intermediate dataType
}else if(converters[conv2]!==true){current=tmp[0];dataTypes.unshift(tmp[1]);}break;}}}}// Apply converter (if not an equivalence)
if(conv!==true){// Unless errors are allowed to bubble, catch and return them
if(conv&&s.throws){response=conv(response);}else{try{response=conv(response);}catch(e){return{state:"parsererror",error:conv?e:"No conversion from "+prev+" to "+current};}}}}}}return{state:"success",data:response};}jQuery.extend({// Counter for holding the number of active queries
active:0,// Last-Modified header cache for next request
lastModified:{},etag:{},ajaxSettings:{url:location.href,type:"GET",isLocal:rlocalProtocol.test(location.protocol),global:true,processData:true,async:true,contentType:"application/x-www-form-urlencoded; charset=UTF-8",/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/accepts:{"*":allTypes,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},// Data converters
// Keys separate source (or catchall "*") and destination types with a single space
converters:{// Convert anything to text
"* text":String,// Text to html (true = no transformation)
"text html":true,// Evaluate text as a json expression
"text json":JSON.parse,// Parse text as xml
"text xml":jQuery.parseXML},// For options that shouldn't be deep extended:
// you can add your own custom options here if
// and when you create one that shouldn't be
// deep extended (see ajaxExtend)
flatOptions:{url:true,context:true}},// Creates a full fledged settings object into target
// with both ajaxSettings and settings fields.
// If target is omitted, writes into ajaxSettings.
ajaxSetup:function ajaxSetup(target,settings){return settings?// Building a settings object
ajaxExtend(ajaxExtend(target,jQuery.ajaxSettings),settings):// Extending ajaxSettings
ajaxExtend(jQuery.ajaxSettings,target);},ajaxPrefilter:addToPrefiltersOrTransports(prefilters),ajaxTransport:addToPrefiltersOrTransports(transports),// Main method
ajax:function ajax(url,options){// If url is an object, simulate pre-1.5 signature
if((typeof url==="undefined"?"undefined":_typeof(url))==="object"){options=url;url=undefined;}// Force options to be an object
options=options||{};var transport,// URL without anti-cache param
cacheURL,// Response headers
responseHeadersString,responseHeaders,// timeout handle
timeoutTimer,// Url cleanup var
urlAnchor,// Request state (becomes false upon send and true upon completion)
completed,// To know if global events are to be dispatched
fireGlobals,// Loop variable
i,// uncached part of the url
uncached,// Create the final options object
s=jQuery.ajaxSetup({},options),// Callbacks context
callbackContext=s.context||s,// Context for global events is callbackContext if it is a DOM node or jQuery collection
globalEventContext=s.context&&(callbackContext.nodeType||callbackContext.jquery)?jQuery(callbackContext):jQuery.event,// Deferreds
deferred=jQuery.Deferred(),completeDeferred=jQuery.Callbacks("once memory"),// Status-dependent callbacks
_statusCode=s.statusCode||{},// Headers (they are sent all at once)
requestHeaders={},requestHeadersNames={},// Default abort message
strAbort="canceled",// Fake xhr
jqXHR={readyState:0,// Builds headers hashtable if needed
getResponseHeader:function getResponseHeader(key){var match;if(completed){if(!responseHeaders){responseHeaders={};while(match=rheaders.exec(responseHeadersString)){responseHeaders[match[1].toLowerCase()]=match[2];}}match=responseHeaders[key.toLowerCase()];}return match==null?null:match;},// Raw string
getAllResponseHeaders:function getAllResponseHeaders(){return completed?responseHeadersString:null;},// Caches the header
setRequestHeader:function setRequestHeader(name,value){if(completed==null){name=requestHeadersNames[name.toLowerCase()]=requestHeadersNames[name.toLowerCase()]||name;requestHeaders[name]=value;}return this;},// Overrides response content-type header
overrideMimeType:function overrideMimeType(type){if(completed==null){s.mimeType=type;}return this;},// Status-dependent callbacks
statusCode:function statusCode(map){var code;if(map){if(completed){// Execute the appropriate callbacks
jqXHR.always(map[jqXHR.status]);}else{// Lazy-add the new callbacks in a way that preserves old ones
for(code in map){_statusCode[code]=[_statusCode[code],map[code]];}}}return this;},// Cancel the request
abort:function abort(statusText){var finalText=statusText||strAbort;if(transport){transport.abort(finalText);}done(0,finalText);return this;}};// Attach deferreds
deferred.promise(jqXHR);// Add protocol if not provided (prefilters might expect it)
// Handle falsy url in the settings object (#10093: consistency with old signature)
// We also use the url parameter if available
s.url=((url||s.url||location.href)+"").replace(rprotocol,location.protocol+"//");// Alias method option to type as per ticket #12004
s.type=options.method||options.type||s.method||s.type;// Extract dataTypes list
s.dataTypes=(s.dataType||"*").toLowerCase().match(rnothtmlwhite)||[""];// A cross-domain request is in order when the origin doesn't match the current origin.
if(s.crossDomain==null){urlAnchor=document.createElement("a");// Support: IE <=8 - 11, Edge 12 - 13
// IE throws exception on accessing the href property if url is malformed,
// e.g. http://example.com:80x/
try{urlAnchor.href=s.url;// Support: IE <=8 - 11 only
// Anchor's host property isn't correctly set when s.url is relative
urlAnchor.href=urlAnchor.href;s.crossDomain=originAnchor.protocol+"//"+originAnchor.host!==urlAnchor.protocol+"//"+urlAnchor.host;}catch(e){// If there is an error parsing the URL, assume it is crossDomain,
// it can be rejected by the transport if it is invalid
s.crossDomain=true;}}// Convert data if not already a string
if(s.data&&s.processData&&typeof s.data!=="string"){s.data=jQuery.param(s.data,s.traditional);}// Apply prefilters
inspectPrefiltersOrTransports(prefilters,s,options,jqXHR);// If request was aborted inside a prefilter, stop there
if(completed){return jqXHR;}// We can fire global events as of now if asked to
// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
fireGlobals=jQuery.event&&s.global;// Watch for a new set of requests
if(fireGlobals&&jQuery.active++===0){jQuery.event.trigger("ajaxStart");}// Uppercase the type
s.type=s.type.toUpperCase();// Determine if request has content
s.hasContent=!rnoContent.test(s.type);// Save the URL in case we're toying with the If-Modified-Since
// and/or If-None-Match header later on
// Remove hash to simplify url manipulation
cacheURL=s.url.replace(rhash,"");// More options handling for requests with no content
if(!s.hasContent){// Remember the hash so we can put it back
uncached=s.url.slice(cacheURL.length);// If data is available, append data to url
if(s.data){cacheURL+=(rquery.test(cacheURL)?"&":"?")+s.data;// #9682: remove data so that it's not used in an eventual retry
delete s.data;}// Add or update anti-cache param if needed
if(s.cache===false){cacheURL=cacheURL.replace(rantiCache,"$1");uncached=(rquery.test(cacheURL)?"&":"?")+"_="+nonce++ +uncached;}// Put hash and anti-cache on the URL that will be requested (gh-1732)
s.url=cacheURL+uncached;// Change '%20' to '+' if this is encoded form body content (gh-2658)
}else if(s.data&&s.processData&&(s.contentType||"").indexOf("application/x-www-form-urlencoded")===0){s.data=s.data.replace(r20,"+");}// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
if(s.ifModified){if(jQuery.lastModified[cacheURL]){jqXHR.setRequestHeader("If-Modified-Since",jQuery.lastModified[cacheURL]);}if(jQuery.etag[cacheURL]){jqXHR.setRequestHeader("If-None-Match",jQuery.etag[cacheURL]);}}// Set the correct header, if data is being sent
if(s.data&&s.hasContent&&s.contentType!==false||options.contentType){jqXHR.setRequestHeader("Content-Type",s.contentType);}// Set the Accepts header for the server, depending on the dataType
jqXHR.setRequestHeader("Accept",s.dataTypes[0]&&s.accepts[s.dataTypes[0]]?s.accepts[s.dataTypes[0]]+(s.dataTypes[0]!=="*"?", "+allTypes+"; q=0.01":""):s.accepts["*"]);// Check for headers option
for(i in s.headers){jqXHR.setRequestHeader(i,s.headers[i]);}// Allow custom headers/mimetypes and early abort
if(s.beforeSend&&(s.beforeSend.call(callbackContext,jqXHR,s)===false||completed)){// Abort if not done already and return
return jqXHR.abort();}// Aborting is no longer a cancellation
strAbort="abort";// Install callbacks on deferreds
completeDeferred.add(s.complete);jqXHR.done(s.success);jqXHR.fail(s.error);// Get transport
transport=inspectPrefiltersOrTransports(transports,s,options,jqXHR);// If no transport, we auto-abort
if(!transport){done(-1,"No Transport");}else{jqXHR.readyState=1;// Send global event
if(fireGlobals){globalEventContext.trigger("ajaxSend",[jqXHR,s]);}// If request was aborted inside ajaxSend, stop there
if(completed){return jqXHR;}// Timeout
if(s.async&&s.timeout>0){timeoutTimer=window.setTimeout(function(){jqXHR.abort("timeout");},s.timeout);}try{completed=false;transport.send(requestHeaders,done);}catch(e){// Rethrow post-completion exceptions
if(completed){throw e;}// Propagate others as results
done(-1,e);}}// Callback for when everything is done
function done(status,nativeStatusText,responses,headers){var isSuccess,success,error,response,modified,statusText=nativeStatusText;// Ignore repeat invocations
if(completed){return;}completed=true;// Clear timeout if it exists
if(timeoutTimer){window.clearTimeout(timeoutTimer);}// Dereference transport for early garbage collection
// (no matter how long the jqXHR object will be used)
transport=undefined;// Cache response headers
responseHeadersString=headers||"";// Set readyState
jqXHR.readyState=status>0?4:0;// Determine if successful
isSuccess=status>=200&&status<300||status===304;// Get response data
if(responses){response=ajaxHandleResponses(s,jqXHR,responses);}// Convert no matter what (that way responseXXX fields are always set)
response=ajaxConvert(s,response,jqXHR,isSuccess);// If successful, handle type chaining
if(isSuccess){// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
if(s.ifModified){modified=jqXHR.getResponseHeader("Last-Modified");if(modified){jQuery.lastModified[cacheURL]=modified;}modified=jqXHR.getResponseHeader("etag");if(modified){jQuery.etag[cacheURL]=modified;}}// if no content
if(status===204||s.type==="HEAD"){statusText="nocontent";// if not modified
}else if(status===304){statusText="notmodified";// If we have data, let's convert it
}else{statusText=response.state;success=response.data;error=response.error;isSuccess=!error;}}else{// Extract error from statusText and normalize for non-aborts
error=statusText;if(status||!statusText){statusText="error";if(status<0){status=0;}}}// Set data for the fake xhr object
jqXHR.status=status;jqXHR.statusText=(nativeStatusText||statusText)+"";// Success/Error
if(isSuccess){deferred.resolveWith(callbackContext,[success,statusText,jqXHR]);}else{deferred.rejectWith(callbackContext,[jqXHR,statusText,error]);}// Status-dependent callbacks
jqXHR.statusCode(_statusCode);_statusCode=undefined;if(fireGlobals){globalEventContext.trigger(isSuccess?"ajaxSuccess":"ajaxError",[jqXHR,s,isSuccess?success:error]);}// Complete
completeDeferred.fireWith(callbackContext,[jqXHR,statusText]);if(fireGlobals){globalEventContext.trigger("ajaxComplete",[jqXHR,s]);// Handle the global AJAX counter
if(! --jQuery.active){jQuery.event.trigger("ajaxStop");}}}return jqXHR;},getJSON:function getJSON(url,data,callback){return jQuery.get(url,data,callback,"json");},getScript:function getScript(url,callback){return jQuery.get(url,undefined,callback,"script");}});jQuery.each(["get","post"],function(i,method){jQuery[method]=function(url,data,callback,type){// Shift arguments if data argument was omitted
if(jQuery.isFunction(data)){type=type||callback;callback=data;data=undefined;}// The url can be an options object (which then must have .url)
return jQuery.ajax(jQuery.extend({url:url,type:method,dataType:type,data:data,success:callback},jQuery.isPlainObject(url)&&url));};});jQuery._evalUrl=function(url){return jQuery.ajax({url:url,// Make this explicit, since user can override this through ajaxSetup (#11264)
type:"GET",dataType:"script",cache:true,async:false,global:false,"throws":true});};jQuery.fn.extend({wrapAll:function wrapAll(html){var wrap;if(this[0]){if(jQuery.isFunction(html)){html=html.call(this[0]);}// The elements to wrap the target around
wrap=jQuery(html,this[0].ownerDocument).eq(0).clone(true);if(this[0].parentNode){wrap.insertBefore(this[0]);}wrap.map(function(){var elem=this;while(elem.firstElementChild){elem=elem.firstElementChild;}return elem;}).append(this);}return this;},wrapInner:function wrapInner(html){if(jQuery.isFunction(html)){return this.each(function(i){jQuery(this).wrapInner(html.call(this,i));});}return this.each(function(){var self=jQuery(this),contents=self.contents();if(contents.length){contents.wrapAll(html);}else{self.append(html);}});},wrap:function wrap(html){var isFunction=jQuery.isFunction(html);return this.each(function(i){jQuery(this).wrapAll(isFunction?html.call(this,i):html);});},unwrap:function unwrap(selector){this.parent(selector).not("body").each(function(){jQuery(this).replaceWith(this.childNodes);});return this;}});jQuery.expr.pseudos.hidden=function(elem){return!jQuery.expr.pseudos.visible(elem);};jQuery.expr.pseudos.visible=function(elem){return!!(elem.offsetWidth||elem.offsetHeight||elem.getClientRects().length);};jQuery.ajaxSettings.xhr=function(){try{return new window.XMLHttpRequest();}catch(e){}};var xhrSuccessStatus={// File protocol always yields status code 0, assume 200
0:200,// Support: IE <=9 only
// #1450: sometimes IE returns 1223 when it should be 204
1223:204},xhrSupported=jQuery.ajaxSettings.xhr();support.cors=!!xhrSupported&&"withCredentials"in xhrSupported;support.ajax=xhrSupported=!!xhrSupported;jQuery.ajaxTransport(function(options){var _callback,errorCallback;// Cross domain only allowed if supported through XMLHttpRequest
if(support.cors||xhrSupported&&!options.crossDomain){return{send:function send(headers,complete){var i,xhr=options.xhr();xhr.open(options.type,options.url,options.async,options.username,options.password);// Apply custom fields if provided
if(options.xhrFields){for(i in options.xhrFields){xhr[i]=options.xhrFields[i];}}// Override mime type if needed
if(options.mimeType&&xhr.overrideMimeType){xhr.overrideMimeType(options.mimeType);}// X-Requested-With header
// For cross-domain requests, seeing as conditions for a preflight are
// akin to a jigsaw puzzle, we simply never set it to be sure.
// (it can always be set on a per-request basis or even using ajaxSetup)
// For same-domain requests, won't change header if already provided.
if(!options.crossDomain&&!headers["X-Requested-With"]){headers["X-Requested-With"]="XMLHttpRequest";}// Set headers
for(i in headers){xhr.setRequestHeader(i,headers[i]);}// Callback
_callback=function callback(type){return function(){if(_callback){_callback=errorCallback=xhr.onload=xhr.onerror=xhr.onabort=xhr.onreadystatechange=null;if(type==="abort"){xhr.abort();}else if(type==="error"){// Support: IE <=9 only
// On a manual native abort, IE9 throws
// errors on any property access that is not readyState
if(typeof xhr.status!=="number"){complete(0,"error");}else{complete(// File: protocol always yields status 0; see #8605, #14207
xhr.status,xhr.statusText);}}else{complete(xhrSuccessStatus[xhr.status]||xhr.status,xhr.statusText,// Support: IE <=9 only
// IE9 has no XHR2 but throws on binary (trac-11426)
// For XHR2 non-text, let the caller handle it (gh-2498)
(xhr.responseType||"text")!=="text"||typeof xhr.responseText!=="string"?{binary:xhr.response}:{text:xhr.responseText},xhr.getAllResponseHeaders());}}};};// Listen to events
xhr.onload=_callback();errorCallback=xhr.onerror=_callback("error");// Support: IE 9 only
// Use onreadystatechange to replace onabort
// to handle uncaught aborts
if(xhr.onabort!==undefined){xhr.onabort=errorCallback;}else{xhr.onreadystatechange=function(){// Check readyState before timeout as it changes
if(xhr.readyState===4){// Allow onerror to be called first,
// but that will not handle a native abort
// Also, save errorCallback to a variable
// as xhr.onerror cannot be accessed
window.setTimeout(function(){if(_callback){errorCallback();}});}};}// Create the abort callback
_callback=_callback("abort");try{// Do send the request (this may raise an exception)
xhr.send(options.hasContent&&options.data||null);}catch(e){// #14683: Only rethrow if this hasn't been notified as an error yet
if(_callback){throw e;}}},abort:function abort(){if(_callback){_callback();}}};}});// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter(function(s){if(s.crossDomain){s.contents.script=false;}});// Install script dataType
jQuery.ajaxSetup({accepts:{script:"text/javascript, application/javascript, "+"application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function textScript(text){jQuery.globalEval(text);return text;}}});// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter("script",function(s){if(s.cache===undefined){s.cache=false;}if(s.crossDomain){s.type="GET";}});// Bind script tag hack transport
jQuery.ajaxTransport("script",function(s){// This transport only deals with cross domain requests
if(s.crossDomain){var script,_callback2;return{send:function send(_,complete){script=jQuery("<script>").prop({charset:s.scriptCharset,src:s.url}).on("load error",_callback2=function callback(evt){script.remove();_callback2=null;if(evt){complete(evt.type==="error"?404:200,evt.type);}});// Use native DOM manipulation to avoid our domManip AJAX trickery
document.head.appendChild(script[0]);},abort:function abort(){if(_callback2){_callback2();}}};}});var oldCallbacks=[],rjsonp=/(=)\?(?=&|$)|\?\?/;// Default jsonp settings
jQuery.ajaxSetup({jsonp:"callback",jsonpCallback:function jsonpCallback(){var callback=oldCallbacks.pop()||jQuery.expando+"_"+nonce++;this[callback]=true;return callback;}});// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter("json jsonp",function(s,originalSettings,jqXHR){var callbackName,overwritten,responseContainer,jsonProp=s.jsonp!==false&&(rjsonp.test(s.url)?"url":typeof s.data==="string"&&(s.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&rjsonp.test(s.data)&&"data");// Handle iff the expected data type is "jsonp" or we have a parameter to set
if(jsonProp||s.dataTypes[0]==="jsonp"){// Get callback name, remembering preexisting value associated with it
callbackName=s.jsonpCallback=jQuery.isFunction(s.jsonpCallback)?s.jsonpCallback():s.jsonpCallback;// Insert callback into url or form data
if(jsonProp){s[jsonProp]=s[jsonProp].replace(rjsonp,"$1"+callbackName);}else if(s.jsonp!==false){s.url+=(rquery.test(s.url)?"&":"?")+s.jsonp+"="+callbackName;}// Use data converter to retrieve json after script execution
s.converters["script json"]=function(){if(!responseContainer){jQuery.error(callbackName+" was not called");}return responseContainer[0];};// Force json dataType
s.dataTypes[0]="json";// Install callback
overwritten=window[callbackName];window[callbackName]=function(){responseContainer=arguments;};// Clean-up function (fires after converters)
jqXHR.always(function(){// If previous value didn't exist - remove it
if(overwritten===undefined){jQuery(window).removeProp(callbackName);// Otherwise restore preexisting value
}else{window[callbackName]=overwritten;}// Save back as free
if(s[callbackName]){// Make sure that re-using the options doesn't screw things around
s.jsonpCallback=originalSettings.jsonpCallback;// Save the callback name for future use
oldCallbacks.push(callbackName);}// Call if it was a function and we have a response
if(responseContainer&&jQuery.isFunction(overwritten)){overwritten(responseContainer[0]);}responseContainer=overwritten=undefined;});// Delegate to script
return"script";}});// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument=function(){var body=document.implementation.createHTMLDocument("").body;body.innerHTML="<form></form><form></form>";return body.childNodes.length===2;}();// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML=function(data,context,keepScripts){if(typeof data!=="string"){return[];}if(typeof context==="boolean"){keepScripts=context;context=false;}var base,parsed,scripts;if(!context){// Stop scripts or inline event handlers from being executed immediately
// by using document.implementation
if(support.createHTMLDocument){context=document.implementation.createHTMLDocument("");// Set the base href for the created document
// so any parsed elements with URLs
// are based on the document's URL (gh-2965)
base=context.createElement("base");base.href=document.location.href;context.head.appendChild(base);}else{context=document;}}parsed=rsingleTag.exec(data);scripts=!keepScripts&&[];// Single tag
if(parsed){return[context.createElement(parsed[1])];}parsed=buildFragment([data],context,scripts);if(scripts&&scripts.length){jQuery(scripts).remove();}return jQuery.merge([],parsed.childNodes);};/**
 * Load a url into a page
 */jQuery.fn.load=function(url,params,callback){var selector,type,response,self=this,off=url.indexOf(" ");if(off>-1){selector=stripAndCollapse(url.slice(off));url=url.slice(0,off);}// If it's a function
if(jQuery.isFunction(params)){// We assume that it's the callback
callback=params;params=undefined;// Otherwise, build a param string
}else if(params&&(typeof params==="undefined"?"undefined":_typeof(params))==="object"){type="POST";}// If we have elements to modify, make the request
if(self.length>0){jQuery.ajax({url:url,// If "type" variable is undefined, then "GET" method will be used.
// Make value of this field explicit since
// user can override it through ajaxSetup method
type:type||"GET",dataType:"html",data:params}).done(function(responseText){// Save response for use in complete callback
response=arguments;self.html(selector?// If a selector was specified, locate the right elements in a dummy div
// Exclude scripts to avoid IE 'Permission Denied' errors
jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector):// Otherwise use the full result
responseText);// If the request succeeds, this function gets "data", "status", "jqXHR"
// but they are ignored because response was set above.
// If it fails, this function gets "jqXHR", "status", "error"
}).always(callback&&function(jqXHR,status){self.each(function(){callback.apply(this,response||[jqXHR.responseText,status,jqXHR]);});});}return this;};// Attach a bunch of functions for handling common AJAX events
jQuery.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(i,type){jQuery.fn[type]=function(fn){return this.on(type,fn);};});jQuery.expr.pseudos.animated=function(elem){return jQuery.grep(jQuery.timers,function(fn){return elem===fn.elem;}).length;};jQuery.offset={setOffset:function setOffset(elem,options,i){var curPosition,curLeft,curCSSTop,curTop,curOffset,curCSSLeft,calculatePosition,position=jQuery.css(elem,"position"),curElem=jQuery(elem),props={};// Set position first, in-case top/left are set even on static elem
if(position==="static"){elem.style.position="relative";}curOffset=curElem.offset();curCSSTop=jQuery.css(elem,"top");curCSSLeft=jQuery.css(elem,"left");calculatePosition=(position==="absolute"||position==="fixed")&&(curCSSTop+curCSSLeft).indexOf("auto")>-1;// Need to be able to calculate position if either
// top or left is auto and position is either absolute or fixed
if(calculatePosition){curPosition=curElem.position();curTop=curPosition.top;curLeft=curPosition.left;}else{curTop=parseFloat(curCSSTop)||0;curLeft=parseFloat(curCSSLeft)||0;}if(jQuery.isFunction(options)){// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
options=options.call(elem,i,jQuery.extend({},curOffset));}if(options.top!=null){props.top=options.top-curOffset.top+curTop;}if(options.left!=null){props.left=options.left-curOffset.left+curLeft;}if("using"in options){options.using.call(elem,props);}else{curElem.css(props);}}};jQuery.fn.extend({offset:function offset(options){// Preserve chaining for setter
if(arguments.length){return options===undefined?this:this.each(function(i){jQuery.offset.setOffset(this,options,i);});}var doc,docElem,rect,win,elem=this[0];if(!elem){return;}// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
// Support: IE <=11 only
// Running getBoundingClientRect on a
// disconnected node in IE throws an error
if(!elem.getClientRects().length){return{top:0,left:0};}rect=elem.getBoundingClientRect();doc=elem.ownerDocument;docElem=doc.documentElement;win=doc.defaultView;return{top:rect.top+win.pageYOffset-docElem.clientTop,left:rect.left+win.pageXOffset-docElem.clientLeft};},position:function position(){if(!this[0]){return;}var offsetParent,offset,elem=this[0],parentOffset={top:0,left:0};// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
// because it is its only offset parent
if(jQuery.css(elem,"position")==="fixed"){// Assume getBoundingClientRect is there when computed position is fixed
offset=elem.getBoundingClientRect();}else{// Get *real* offsetParent
offsetParent=this.offsetParent();// Get correct offsets
offset=this.offset();if(!nodeName(offsetParent[0],"html")){parentOffset=offsetParent.offset();}// Add offsetParent borders
parentOffset={top:parentOffset.top+jQuery.css(offsetParent[0],"borderTopWidth",true),left:parentOffset.left+jQuery.css(offsetParent[0],"borderLeftWidth",true)};}// Subtract parent offsets and element margins
return{top:offset.top-parentOffset.top-jQuery.css(elem,"marginTop",true),left:offset.left-parentOffset.left-jQuery.css(elem,"marginLeft",true)};},// This method will return documentElement in the following cases:
// 1) For the element inside the iframe without offsetParent, this method will return
//    documentElement of the parent window
// 2) For the hidden or detached element
// 3) For body or html element, i.e. in case of the html node - it will return itself
//
// but those exceptions were never presented as a real life use-cases
// and might be considered as more preferable results.
//
// This logic, however, is not guaranteed and can change at any point in the future
offsetParent:function offsetParent(){return this.map(function(){var offsetParent=this.offsetParent;while(offsetParent&&jQuery.css(offsetParent,"position")==="static"){offsetParent=offsetParent.offsetParent;}return offsetParent||documentElement;});}});// Create scrollLeft and scrollTop methods
jQuery.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(method,prop){var top="pageYOffset"===prop;jQuery.fn[method]=function(val){return access(this,function(elem,method,val){// Coalesce documents and windows
var win;if(jQuery.isWindow(elem)){win=elem;}else if(elem.nodeType===9){win=elem.defaultView;}if(val===undefined){return win?win[prop]:elem[method];}if(win){win.scrollTo(!top?val:win.pageXOffset,top?val:win.pageYOffset);}else{elem[method]=val;}},method,val,arguments.length);};});// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each(["top","left"],function(i,prop){jQuery.cssHooks[prop]=addGetHookIf(support.pixelPosition,function(elem,computed){if(computed){computed=curCSS(elem,prop);// If curCSS returns percentage, fallback to offset
return rnumnonpx.test(computed)?jQuery(elem).position()[prop]+"px":computed;}});});// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each({Height:"height",Width:"width"},function(name,type){jQuery.each({padding:"inner"+name,content:type,"":"outer"+name},function(defaultExtra,funcName){// Margin is only for outerHeight, outerWidth
jQuery.fn[funcName]=function(margin,value){var chainable=arguments.length&&(defaultExtra||typeof margin!=="boolean"),extra=defaultExtra||(margin===true||value===true?"margin":"border");return access(this,function(elem,type,value){var doc;if(jQuery.isWindow(elem)){// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
return funcName.indexOf("outer")===0?elem["inner"+name]:elem.document.documentElement["client"+name];}// Get document width or height
if(elem.nodeType===9){doc=elem.documentElement;// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
// whichever is greatest
return Math.max(elem.body["scroll"+name],doc["scroll"+name],elem.body["offset"+name],doc["offset"+name],doc["client"+name]);}return value===undefined?// Get width or height on the element, requesting but not forcing parseFloat
jQuery.css(elem,type,extra):// Set width or height on the element
jQuery.style(elem,type,value,extra);},type,chainable?margin:undefined,chainable);};});});jQuery.fn.extend({bind:function bind(types,data,fn){return this.on(types,null,data,fn);},unbind:function unbind(types,fn){return this.off(types,null,fn);},delegate:function delegate(selector,types,data,fn){return this.on(types,selector,data,fn);},undelegate:function undelegate(selector,types,fn){// ( namespace ) or ( selector, types [, fn] )
return arguments.length===1?this.off(selector,"**"):this.off(types,selector||"**",fn);},holdReady:function holdReady(hold){if(hold){jQuery.readyWait++;}else{jQuery.ready(true);}}});jQuery.isArray=Array.isArray;jQuery.parseJSON=JSON.parse;jQuery.nodeName=nodeName;// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.
// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon
if(typeof define==="function"&&define.amd){define("jquery",[],function(){return jQuery;});}var// Map over jQuery in case of overwrite
_jQuery=window.jQuery,// Map over the $ in case of overwrite
_$=window.$;jQuery.noConflict=function(deep){if(window.$===jQuery){window.$=_$;}if(deep&&window.jQuery===jQuery){window.jQuery=_jQuery;}return jQuery;};// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if(!noGlobal){window.jQuery=window.$=jQuery;}return jQuery;});// requires: libs/jquery-3.2.0.js
// Avoid `console` errors in browsers that lack a console.
(function(){var method;var noop=function noop(){};var methods=['assert','clear','count','debug','dir','dirxml','error','exception','group','groupCollapsed','groupEnd','info','log','markTimeline','profile','profileEnd','table','time','timeEnd','timeStamp','trace','warn'];var length=methods.length;var console=window.console=window.console||{};while(length--){method=methods[length];// Only stub undefined methods.
if(!console[method]){console[method]=noop;}}})();/* ========================================================================
 * Bootstrap: affix.js v3.2.0
 * http://getbootstrap.com/javascript/#affix
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */+function($){'use strict';// AFFIX CLASS DEFINITION
// ======================
var Affix=function Affix(element,options){this.options=$.extend({},Affix.DEFAULTS,options);this.$target=$(this.options.target).on('scroll.bs.affix.data-api',$.proxy(this.checkPosition,this)).on('click.bs.affix.data-api',$.proxy(this.checkPositionWithEventLoop,this));this.$element=$(element);this.affixed=this.unpin=this.pinnedOffset=null;this.checkPosition();};Affix.VERSION='3.2.0';Affix.RESET='affix affix-top affix-bottom';Affix.DEFAULTS={offset:0,target:window};Affix.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(Affix.RESET).addClass('affix');var scrollTop=this.$target.scrollTop();var position=this.$element.offset();return this.pinnedOffset=position.top-scrollTop;};Affix.prototype.checkPositionWithEventLoop=function(){setTimeout($.proxy(this.checkPosition,this),1);};Affix.prototype.checkPosition=function(){if(!this.$element.is(':visible'))return;var scrollHeight=$(document).height();var scrollTop=this.$target.scrollTop();var position=this.$element.offset();var offset=this.options.offset;var offsetTop=offset.top;var offsetBottom=offset.bottom;if((typeof offset==="undefined"?"undefined":_typeof(offset))!='object')offsetBottom=offsetTop=offset;if(typeof offsetTop=='function')offsetTop=offset.top(this.$element);if(typeof offsetBottom=='function')offsetBottom=offset.bottom(this.$element);var affix=this.unpin!=null&&scrollTop+this.unpin<=position.top?false:offsetBottom!=null&&position.top+this.$element.height()>=scrollHeight-offsetBottom?'bottom':offsetTop!=null&&scrollTop<=offsetTop?'top':false;if(this.affixed===affix)return;if(this.unpin!=null)this.$element.css('top','');var affixType='affix'+(affix?'-'+affix:'');var e=$.Event(affixType+'.bs.affix');this.$element.trigger(e);if(e.isDefaultPrevented())return;this.affixed=affix;this.unpin=affix=='bottom'?this.getPinnedOffset():null;this.$element.removeClass(Affix.RESET).addClass(affixType).trigger($.Event(affixType.replace('affix','affixed')));if(affix=='bottom'){this.$element.offset({top:scrollHeight-this.$element.height()-offsetBottom});}};// AFFIX PLUGIN DEFINITION
// =======================
function Plugin(option){return this.each(function(){var $this=$(this);var data=$this.data('bs.affix');var options=(typeof option==="undefined"?"undefined":_typeof(option))=='object'&&option;if(!data)$this.data('bs.affix',data=new Affix(this,options));if(typeof option=='string')data[option]();});}var old=$.fn.affix;$.fn.affix=Plugin;$.fn.affix.Constructor=Affix;// AFFIX NO CONFLICT
// =================
$.fn.affix.noConflict=function(){$.fn.affix=old;return this;};// AFFIX DATA-API
// ==============
$(window).on('load',function(){$('[data-spy="affix"]').each(function(){var $spy=$(this);var data=$spy.data();data.offset=data.offset||{};if(data.offsetBottom)data.offset.bottom=data.offsetBottom;if(data.offsetTop)data.offset.top=data.offsetTop;Plugin.call($spy,data);});});}(jQuery);/* ========================================================================
 * Bootstrap: alert.js v3.2.0
 * http://getbootstrap.com/javascript/#alerts
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */+function($){'use strict';// ALERT CLASS DEFINITION
// ======================
var dismiss='[data-dismiss="alert"]';var Alert=function Alert(el){$(el).on('click',dismiss,this.close);};Alert.VERSION='3.2.0';Alert.prototype.close=function(e){var $this=$(this);var selector=$this.attr('data-target');if(!selector){selector=$this.attr('href');selector=selector&&selector.replace(/.*(?=#[^\s]*$)/,'');// strip for ie7
}var $parent=$(selector);if(e)e.preventDefault();if(!$parent.length){$parent=$this.hasClass('alert')?$this:$this.parent();}$parent.trigger(e=$.Event('close.bs.alert'));if(e.isDefaultPrevented())return;$parent.removeClass('in');function removeElement(){// detach from parent, fire event then clean up data
$parent.detach().trigger('closed.bs.alert').remove();}$.support.transition&&$parent.hasClass('fade')?$parent.one('bsTransitionEnd',removeElement).emulateTransitionEnd(150):removeElement();};// ALERT PLUGIN DEFINITION
// =======================
function Plugin(option){return this.each(function(){var $this=$(this);var data=$this.data('bs.alert');if(!data)$this.data('bs.alert',data=new Alert(this));if(typeof option=='string')data[option].call($this);});}var old=$.fn.alert;$.fn.alert=Plugin;$.fn.alert.Constructor=Alert;// ALERT NO CONFLICT
// =================
$.fn.alert.noConflict=function(){$.fn.alert=old;return this;};// ALERT DATA-API
// ==============
$(document).on('click.bs.alert.data-api',dismiss,Alert.prototype.close);}(jQuery);/* ========================================================================
 * Bootstrap: button.js v3.2.0
 * http://getbootstrap.com/javascript/#buttons
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */+function($){'use strict';// BUTTON PUBLIC CLASS DEFINITION
// ==============================
var Button=function Button(element,options){this.$element=$(element);this.options=$.extend({},Button.DEFAULTS,options);this.isLoading=false;};Button.VERSION='3.2.0';Button.DEFAULTS={loadingText:'loading...'};Button.prototype.setState=function(state){var d='disabled';var $el=this.$element;var val=$el.is('input')?'val':'html';var data=$el.data();state=state+'Text';if(data.resetText==null)$el.data('resetText',$el[val]());$el[val](data[state]==null?this.options[state]:data[state]);// push to event loop to allow forms to submit
setTimeout($.proxy(function(){if(state=='loadingText'){this.isLoading=true;$el.addClass(d).attr(d,d);}else if(this.isLoading){this.isLoading=false;$el.removeClass(d).removeAttr(d);}},this),0);};Button.prototype.toggle=function(){var changed=true;var $parent=this.$element.closest('[data-toggle="buttons"]');if($parent.length){var $input=this.$element.find('input');if($input.prop('type')=='radio'){if($input.prop('checked')&&this.$element.hasClass('active'))changed=false;else $parent.find('.active').removeClass('active');}if(changed)$input.prop('checked',!this.$element.hasClass('active')).trigger('change');}if(changed)this.$element.toggleClass('active');};// BUTTON PLUGIN DEFINITION
// ========================
function Plugin(option){return this.each(function(){var $this=$(this);var data=$this.data('bs.button');var options=(typeof option==="undefined"?"undefined":_typeof(option))=='object'&&option;if(!data)$this.data('bs.button',data=new Button(this,options));if(option=='toggle')data.toggle();else if(option)data.setState(option);});}var old=$.fn.button;$.fn.button=Plugin;$.fn.button.Constructor=Button;// BUTTON NO CONFLICT
// ==================
$.fn.button.noConflict=function(){$.fn.button=old;return this;};// BUTTON DATA-API
// ===============
$(document).on('click.bs.button.data-api','[data-toggle^="button"]',function(e){var $btn=$(e.target);if(!$btn.hasClass('btn'))$btn=$btn.closest('.btn');Plugin.call($btn,'toggle');e.preventDefault();});}(jQuery);/* ========================================================================
 * Bootstrap: carousel.js v3.2.0
 * http://getbootstrap.com/javascript/#carousel
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */+function($){'use strict';// CAROUSEL CLASS DEFINITION
// =========================
var Carousel=function Carousel(element,options){this.$element=$(element).on('keydown.bs.carousel',$.proxy(this.keydown,this));this.$indicators=this.$element.find('.carousel-indicators');this.options=options;this.paused=this.sliding=this.interval=this.$active=this.$items=null;this.options.pause=='hover'&&this.$element.on('mouseenter.bs.carousel',$.proxy(this.pause,this)).on('mouseleave.bs.carousel',$.proxy(this.cycle,this));};Carousel.VERSION='3.2.0';Carousel.DEFAULTS={interval:5000,pause:'hover',wrap:true};Carousel.prototype.keydown=function(e){switch(e.which){case 37:this.prev();break;case 39:this.next();break;default:return;}e.preventDefault();};Carousel.prototype.cycle=function(e){e||(this.paused=false);this.interval&&clearInterval(this.interval);this.options.interval&&!this.paused&&(this.interval=setInterval($.proxy(this.next,this),this.options.interval));return this;};Carousel.prototype.getItemIndex=function(item){this.$items=item.parent().children('.item');return this.$items.index(item||this.$active);};Carousel.prototype.to=function(pos){var that=this;var activeIndex=this.getItemIndex(this.$active=this.$element.find('.item.active'));if(pos>this.$items.length-1||pos<0)return;if(this.sliding)return this.$element.one('slid.bs.carousel',function(){that.to(pos);});// yes, "slid"
if(activeIndex==pos)return this.pause().cycle();return this.slide(pos>activeIndex?'next':'prev',$(this.$items[pos]));};Carousel.prototype.pause=function(e){e||(this.paused=true);if(this.$element.find('.next, .prev').length&&$.support.transition){this.$element.trigger($.support.transition.end);this.cycle(true);}this.interval=clearInterval(this.interval);return this;};Carousel.prototype.next=function(){if(this.sliding)return;return this.slide('next');};Carousel.prototype.prev=function(){if(this.sliding)return;return this.slide('prev');};Carousel.prototype.slide=function(type,next){var $active=this.$element.find('.item.active');var $next=next||$active[type]();var isCycling=this.interval;var direction=type=='next'?'left':'right';var fallback=type=='next'?'first':'last';var that=this;if(!$next.length){if(!this.options.wrap)return;$next=this.$element.find('.item')[fallback]();}if($next.hasClass('active'))return this.sliding=false;var relatedTarget=$next[0];var slideEvent=$.Event('slide.bs.carousel',{relatedTarget:relatedTarget,direction:direction});this.$element.trigger(slideEvent);if(slideEvent.isDefaultPrevented())return;this.sliding=true;isCycling&&this.pause();if(this.$indicators.length){this.$indicators.find('.active').removeClass('active');var $nextIndicator=$(this.$indicators.children()[this.getItemIndex($next)]);$nextIndicator&&$nextIndicator.addClass('active');}var slidEvent=$.Event('slid.bs.carousel',{relatedTarget:relatedTarget,direction:direction});// yes, "slid"
if($.support.transition&&this.$element.hasClass('slide')){$next.addClass(type);$next[0].offsetWidth;// force reflow
$active.addClass(direction);$next.addClass(direction);$active.one('bsTransitionEnd',function(){$next.removeClass([type,direction].join(' ')).addClass('active');$active.removeClass(['active',direction].join(' '));that.sliding=false;setTimeout(function(){that.$element.trigger(slidEvent);},0);}).emulateTransitionEnd($active.css('transition-duration').slice(0,-1)*1000);}else{$active.removeClass('active');$next.addClass('active');this.sliding=false;this.$element.trigger(slidEvent);}isCycling&&this.cycle();return this;};// CAROUSEL PLUGIN DEFINITION
// ==========================
function Plugin(option){return this.each(function(){var $this=$(this);var data=$this.data('bs.carousel');var options=$.extend({},Carousel.DEFAULTS,$this.data(),(typeof option==="undefined"?"undefined":_typeof(option))=='object'&&option);var action=typeof option=='string'?option:options.slide;if(!data)$this.data('bs.carousel',data=new Carousel(this,options));if(typeof option=='number')data.to(option);else if(action)data[action]();else if(options.interval)data.pause().cycle();});}var old=$.fn.carousel;$.fn.carousel=Plugin;$.fn.carousel.Constructor=Carousel;// CAROUSEL NO CONFLICT
// ====================
$.fn.carousel.noConflict=function(){$.fn.carousel=old;return this;};// CAROUSEL DATA-API
// =================
$(document).on('click.bs.carousel.data-api','[data-slide], [data-slide-to]',function(e){var href;var $this=$(this);var $target=$($this.attr('data-target')||(href=$this.attr('href'))&&href.replace(/.*(?=#[^\s]+$)/,''));// strip for ie7
if(!$target.hasClass('carousel'))return;var options=$.extend({},$target.data(),$this.data());var slideIndex=$this.attr('data-slide-to');if(slideIndex)options.interval=false;Plugin.call($target,options);if(slideIndex){$target.data('bs.carousel').to(slideIndex);}e.preventDefault();});$(window).on('load',function(){$('[data-ride="carousel"]').each(function(){var $carousel=$(this);Plugin.call($carousel,$carousel.data());});});}(jQuery);/* ========================================================================
 * Bootstrap: collapse.js v3.2.0
 * http://getbootstrap.com/javascript/#collapse
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */+function($){'use strict';// COLLAPSE PUBLIC CLASS DEFINITION
// ================================
var Collapse=function Collapse(element,options){this.$element=$(element);this.options=$.extend({},Collapse.DEFAULTS,options);this.transitioning=null;if(this.options.parent)this.$parent=$(this.options.parent);if(this.options.toggle)this.toggle();};Collapse.VERSION='3.2.0';Collapse.DEFAULTS={toggle:true};Collapse.prototype.dimension=function(){var hasWidth=this.$element.hasClass('width');return hasWidth?'width':'height';};Collapse.prototype.show=function(){if(this.transitioning||this.$element.hasClass('in'))return;var startEvent=$.Event('show.bs.collapse');this.$element.trigger(startEvent);if(startEvent.isDefaultPrevented())return;var actives=this.$parent&&this.$parent.find('> .panel > .in');if(actives&&actives.length){var hasData=actives.data('bs.collapse');if(hasData&&hasData.transitioning)return;Plugin.call(actives,'hide');hasData||actives.data('bs.collapse',null);}var dimension=this.dimension();this.$element.removeClass('collapse').addClass('collapsing')[dimension](0);this.transitioning=1;var complete=function complete(){this.$element.removeClass('collapsing').addClass('collapse in')[dimension]('');this.transitioning=0;this.$element.trigger('shown.bs.collapse');};if(!$.support.transition)return complete.call(this);var scrollSize=$.camelCase(['scroll',dimension].join('-'));this.$element.one('bsTransitionEnd',$.proxy(complete,this)).emulateTransitionEnd(350)[dimension](this.$element[0][scrollSize]);};Collapse.prototype.hide=function(){if(this.transitioning||!this.$element.hasClass('in'))return;var startEvent=$.Event('hide.bs.collapse');this.$element.trigger(startEvent);if(startEvent.isDefaultPrevented())return;var dimension=this.dimension();this.$element[dimension](this.$element[dimension]())[0].offsetHeight;this.$element.addClass('collapsing').removeClass('collapse').removeClass('in');this.transitioning=1;var complete=function complete(){this.transitioning=0;this.$element.trigger('hidden.bs.collapse').removeClass('collapsing').addClass('collapse');};if(!$.support.transition)return complete.call(this);this.$element[dimension](0).one('bsTransitionEnd',$.proxy(complete,this)).emulateTransitionEnd(350);};Collapse.prototype.toggle=function(){this[this.$element.hasClass('in')?'hide':'show']();};// COLLAPSE PLUGIN DEFINITION
// ==========================
function Plugin(option){return this.each(function(){var $this=$(this);var data=$this.data('bs.collapse');var options=$.extend({},Collapse.DEFAULTS,$this.data(),(typeof option==="undefined"?"undefined":_typeof(option))=='object'&&option);if(!data&&options.toggle&&option=='show')option=!option;if(!data)$this.data('bs.collapse',data=new Collapse(this,options));if(typeof option=='string')data[option]();});}var old=$.fn.collapse;$.fn.collapse=Plugin;$.fn.collapse.Constructor=Collapse;// COLLAPSE NO CONFLICT
// ====================
$.fn.collapse.noConflict=function(){$.fn.collapse=old;return this;};// COLLAPSE DATA-API
// =================
$(document).on('click.bs.collapse.data-api','[data-toggle="collapse"]',function(e){var href;var $this=$(this);var target=$this.attr('data-target')||e.preventDefault()||(href=$this.attr('href'))&&href.replace(/.*(?=#[^\s]+$)/,'');// strip for ie7
var $target=$(target);var data=$target.data('bs.collapse');var option=data?'toggle':$this.data();var parent=$this.attr('data-parent');var $parent=parent&&$(parent);if(!data||!data.transitioning){if($parent)$parent.find('[data-toggle="collapse"][data-parent="'+parent+'"]').not($this).addClass('collapsed');$this[$target.hasClass('in')?'addClass':'removeClass']('collapsed');}Plugin.call($target,option);});}(jQuery);/* ========================================================================
 * Bootstrap: dropdown.js v3.2.0
 * http://getbootstrap.com/javascript/#dropdowns
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */+function($){'use strict';// DROPDOWN CLASS DEFINITION
// =========================
var backdrop='.dropdown-backdrop';var toggle='[data-toggle="dropdown"]';var Dropdown=function Dropdown(element){$(element).on('click.bs.dropdown',this.toggle);};Dropdown.VERSION='3.2.0';Dropdown.prototype.toggle=function(e){var $this=$(this);if($this.is('.disabled, :disabled'))return;var $parent=getParent($this);var isActive=$parent.hasClass('open');clearMenus();if(!isActive){if('ontouchstart'in document.documentElement&&!$parent.closest('.navbar-nav').length){// if mobile we use a backdrop because click events don't delegate
$('<div class="dropdown-backdrop"/>').insertAfter($(this)).on('click',clearMenus);}var relatedTarget={relatedTarget:this};$parent.trigger(e=$.Event('show.bs.dropdown',relatedTarget));if(e.isDefaultPrevented())return;$this.trigger('focus');$parent.toggleClass('open').trigger('shown.bs.dropdown',relatedTarget);}return false;};Dropdown.prototype.keydown=function(e){if(!/(38|40|27)/.test(e.keyCode))return;var $this=$(this);e.preventDefault();e.stopPropagation();if($this.is('.disabled, :disabled'))return;var $parent=getParent($this);var isActive=$parent.hasClass('open');if(!isActive||isActive&&e.keyCode==27){if(e.which==27)$parent.find(toggle).trigger('focus');return $this.trigger('click');}var desc=' li:not(.divider):visible a';var $items=$parent.find('[role="menu"]'+desc+', [role="listbox"]'+desc);if(!$items.length)return;var index=$items.index($items.filter(':focus'));if(e.keyCode==38&&index>0)index--;// up
if(e.keyCode==40&&index<$items.length-1)index++;// down
if(!~index)index=0;$items.eq(index).trigger('focus');};function clearMenus(e){if(e&&e.which===3)return;$(backdrop).remove();$(toggle).each(function(){var $parent=getParent($(this));var relatedTarget={relatedTarget:this};if(!$parent.hasClass('open'))return;$parent.trigger(e=$.Event('hide.bs.dropdown',relatedTarget));if(e.isDefaultPrevented())return;$parent.removeClass('open').trigger('hidden.bs.dropdown',relatedTarget);});}function getParent($this){var selector=$this.attr('data-target');if(!selector){selector=$this.attr('href');selector=selector&&/#[A-Za-z]/.test(selector)&&selector.replace(/.*(?=#[^\s]*$)/,'');// strip for ie7
}var $parent=selector&&$(selector);return $parent&&$parent.length?$parent:$this.parent();}// DROPDOWN PLUGIN DEFINITION
// ==========================
function Plugin(option){return this.each(function(){var $this=$(this);var data=$this.data('bs.dropdown');if(!data)$this.data('bs.dropdown',data=new Dropdown(this));if(typeof option=='string')data[option].call($this);});}var old=$.fn.dropdown;$.fn.dropdown=Plugin;$.fn.dropdown.Constructor=Dropdown;// DROPDOWN NO CONFLICT
// ====================
$.fn.dropdown.noConflict=function(){$.fn.dropdown=old;return this;};// APPLY TO STANDARD DROPDOWN ELEMENTS
// ===================================
$(document).on('click.bs.dropdown.data-api',clearMenus).on('click.bs.dropdown.data-api','.dropdown form',function(e){e.stopPropagation();}).on('click.bs.dropdown.data-api',toggle,Dropdown.prototype.toggle).on('keydown.bs.dropdown.data-api',toggle+', [role="menu"], [role="listbox"]',Dropdown.prototype.keydown);}(jQuery);/* ========================================================================
 * Bootstrap: tab.js v3.2.0
 * http://getbootstrap.com/javascript/#tabs
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */+function($){'use strict';// TAB CLASS DEFINITION
// ====================
var Tab=function Tab(element){this.element=$(element);};Tab.VERSION='3.2.0';Tab.prototype.show=function(){var $this=this.element;var $ul=$this.closest('ul:not(.dropdown-menu)');var selector=$this.data('target');if(!selector){selector=$this.attr('href');selector=selector&&selector.replace(/.*(?=#[^\s]*$)/,'');// strip for ie7
}if($this.parent('li').hasClass('active'))return;var previous=$ul.find('.active:last a')[0];var e=$.Event('show.bs.tab',{relatedTarget:previous});$this.trigger(e);if(e.isDefaultPrevented())return;var $target=$(selector);this.activate($this.closest('li'),$ul);this.activate($target,$target.parent(),function(){$this.trigger({type:'shown.bs.tab',relatedTarget:previous});});};Tab.prototype.activate=function(element,container,callback){var $active=container.find('> .active');var transition=callback&&$.support.transition&&$active.hasClass('fade');function next(){$active.removeClass('active').find('> .dropdown-menu > .active').removeClass('active');element.addClass('active');if(transition){element[0].offsetWidth;// reflow for transition
element.addClass('in');}else{element.removeClass('fade');}if(element.parent('.dropdown-menu')){element.closest('li.dropdown').addClass('active');}callback&&callback();}transition?$active.one('bsTransitionEnd',next).emulateTransitionEnd(150):next();$active.removeClass('in');};// TAB PLUGIN DEFINITION
// =====================
function Plugin(option){return this.each(function(){var $this=$(this);var data=$this.data('bs.tab');if(!data)$this.data('bs.tab',data=new Tab(this));if(typeof option=='string')data[option]();});}var old=$.fn.tab;$.fn.tab=Plugin;$.fn.tab.Constructor=Tab;// TAB NO CONFLICT
// ===============
$.fn.tab.noConflict=function(){$.fn.tab=old;return this;};// TAB DATA-API
// ============
$(document).on('click.bs.tab.data-api','[data-toggle="tab"], [data-toggle="pill"]',function(e){e.preventDefault();Plugin.call($(this),'show');});}(jQuery);/* ========================================================================
 * Bootstrap: transition.js v3.2.0
 * http://getbootstrap.com/javascript/#transitions
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */+function($){'use strict';// CSS TRANSITION SUPPORT (Shoutout: http://www.modernizr.com/)
// ============================================================
function transitionEnd(){var el=document.createElement('bootstrap');var transEndEventNames={WebkitTransition:'webkitTransitionEnd',MozTransition:'transitionend',OTransition:'oTransitionEnd otransitionend',transition:'transitionend'};for(var name in transEndEventNames){if(el.style[name]!==undefined){return{end:transEndEventNames[name]};}}return false;// explicit for ie8 (  ._.)
}// http://blog.alexmaccaw.com/css-transitions
$.fn.emulateTransitionEnd=function(duration){var called=false;var $el=this;$(this).one('bsTransitionEnd',function(){called=true;});var callback=function callback(){if(!called)$($el).trigger($.support.transition.end);};setTimeout(callback,duration);return this;};$(function(){$.support.transition=transitionEnd();if(!$.support.transition)return;$.event.special.bsTransitionEnd={bindType:$.support.transition.end,delegateType:$.support.transition.end,handle:function handle(e){if($(e.target).is(this))return e.handleObj.handler.apply(this,arguments);}};});}(jQuery);/* ========================================================================
 * Bootstrap: scrollspy.js v3.2.0
 * http://getbootstrap.com/javascript/#scrollspy
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */+function($){'use strict';// SCROLLSPY CLASS DEFINITION
// ==========================
function ScrollSpy(element,options){var process=$.proxy(this.process,this);this.$body=$('body');this.$scrollElement=$(element).is('body')?$(window):$(element);this.options=$.extend({},ScrollSpy.DEFAULTS,options);this.selector=(this.options.target||'')+' .nav li > a';this.offsets=[];this.targets=[];this.activeTarget=null;this.scrollHeight=0;this.$scrollElement.on('scroll.bs.scrollspy',process);this.refresh();this.process();}ScrollSpy.VERSION='3.2.0';ScrollSpy.DEFAULTS={offset:10};ScrollSpy.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight);};ScrollSpy.prototype.refresh=function(){var offsetMethod='offset';var offsetBase=0;if(!$.isWindow(this.$scrollElement[0])){offsetMethod='position';offsetBase=this.$scrollElement.scrollTop();}this.offsets=[];this.targets=[];this.scrollHeight=this.getScrollHeight();var self=this;this.$body.find(this.selector).map(function(){var $el=$(this);var href=$el.data('target')||$el.attr('href');var $href=/^#./.test(href)&&$(href);return $href&&$href.length&&$href.is(':visible')&&[[$href[offsetMethod]().top+offsetBase,href]]||null;}).sort(function(a,b){return a[0]-b[0];}).each(function(){self.offsets.push(this[0]);self.targets.push(this[1]);});};ScrollSpy.prototype.process=function(){var scrollTop=this.$scrollElement.scrollTop()+this.options.offset;var scrollHeight=this.getScrollHeight();var maxScroll=this.options.offset+scrollHeight-this.$scrollElement.height();var offsets=this.offsets;var targets=this.targets;var activeTarget=this.activeTarget;var i;if(this.scrollHeight!=scrollHeight){this.refresh();}if(scrollTop>=maxScroll){return activeTarget!=(i=targets[targets.length-1])&&this.activate(i);}if(activeTarget&&scrollTop<=offsets[0]){return activeTarget!=(i=targets[0])&&this.activate(i);}for(i=offsets.length;i--;){activeTarget!=targets[i]&&scrollTop>=offsets[i]&&(!offsets[i+1]||scrollTop<=offsets[i+1])&&this.activate(targets[i]);}};ScrollSpy.prototype.activate=function(target){this.activeTarget=target;$(this.selector).parentsUntil(this.options.target,'.active').removeClass('active');var selector=this.selector+'[data-target="'+target+'"],'+this.selector+'[href="'+target+'"]';var active=$(selector).parents('li').addClass('active');if(active.parent('.dropdown-menu').length){active=active.closest('li.dropdown').addClass('active');}active.trigger('activate.bs.scrollspy');};// SCROLLSPY PLUGIN DEFINITION
// ===========================
function Plugin(option){return this.each(function(){var $this=$(this);var data=$this.data('bs.scrollspy');var options=(typeof option==="undefined"?"undefined":_typeof(option))=='object'&&option;if(!data)$this.data('bs.scrollspy',data=new ScrollSpy(this,options));if(typeof option=='string')data[option]();});}var old=$.fn.scrollspy;$.fn.scrollspy=Plugin;$.fn.scrollspy.Constructor=ScrollSpy;// SCROLLSPY NO CONFLICT
// =====================
$.fn.scrollspy.noConflict=function(){$.fn.scrollspy=old;return this;};// SCROLLSPY DATA-API
// ==================
$(window).on('load.bs.scrollspy.data-api',function(){$('[data-spy="scroll"]').each(function(){var $spy=$(this);Plugin.call($spy,$spy.data());});});}(jQuery);/* ========================================================================
 * Bootstrap: modal.js v3.2.0
 * http://getbootstrap.com/javascript/#modals
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */+function($){'use strict';// MODAL CLASS DEFINITION
// ======================
var Modal=function Modal(element,options){this.options=options;this.$body=$(document.body);this.$element=$(element);this.$backdrop=this.isShown=null;this.scrollbarWidth=0;if(this.options.remote){this.$element.find('.modal-content').load(this.options.remote,$.proxy(function(){this.$element.trigger('loaded.bs.modal');},this));}};Modal.VERSION='3.2.0';Modal.DEFAULTS={backdrop:true,keyboard:true,show:true};Modal.prototype.toggle=function(_relatedTarget){return this.isShown?this.hide():this.show(_relatedTarget);};Modal.prototype.show=function(_relatedTarget){var that=this;var e=$.Event('show.bs.modal',{relatedTarget:_relatedTarget});this.$element.trigger(e);if(this.isShown||e.isDefaultPrevented())return;this.isShown=true;this.checkScrollbar();this.$body.addClass('modal-open');this.setScrollbar();this.escape();this.$element.on('click.dismiss.bs.modal','[data-dismiss="modal"]',$.proxy(this.hide,this));this.backdrop(function(){var transition=$.support.transition&&that.$element.hasClass('fade');if(!that.$element.parent().length){that.$element.appendTo(that.$body);// don't move modals dom position
}that.$element.show().scrollTop(0);if(transition){that.$element[0].offsetWidth;// force reflow
}that.$element.addClass('in').attr('aria-hidden',false);that.enforceFocus();var e=$.Event('shown.bs.modal',{relatedTarget:_relatedTarget});transition?that.$element.find('.modal-dialog')// wait for modal to slide in
.one('bsTransitionEnd',function(){that.$element.trigger('focus').trigger(e);}).emulateTransitionEnd(300):that.$element.trigger('focus').trigger(e);});};Modal.prototype.hide=function(e){if(e)e.preventDefault();e=$.Event('hide.bs.modal');this.$element.trigger(e);if(!this.isShown||e.isDefaultPrevented())return;this.isShown=false;this.$body.removeClass('modal-open');this.resetScrollbar();this.escape();$(document).off('focusin.bs.modal');this.$element.removeClass('in').attr('aria-hidden',true).off('click.dismiss.bs.modal');$.support.transition&&this.$element.hasClass('fade')?this.$element.one('bsTransitionEnd',$.proxy(this.hideModal,this)).emulateTransitionEnd(300):this.hideModal();};Modal.prototype.enforceFocus=function(){$(document).off('focusin.bs.modal')// guard against infinite focus loop
.on('focusin.bs.modal',$.proxy(function(e){if(this.$element[0]!==e.target&&!this.$element.has(e.target).length){this.$element.trigger('focus');}},this));};Modal.prototype.escape=function(){if(this.isShown&&this.options.keyboard){this.$element.on('keyup.dismiss.bs.modal',$.proxy(function(e){e.which==27&&this.hide();},this));}else if(!this.isShown){this.$element.off('keyup.dismiss.bs.modal');}};Modal.prototype.hideModal=function(){var that=this;this.$element.hide();this.backdrop(function(){that.$element.trigger('hidden.bs.modal');});};Modal.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove();this.$backdrop=null;};Modal.prototype.backdrop=function(callback){var that=this;var animate=this.$element.hasClass('fade')?'fade':'';if(this.isShown&&this.options.backdrop){var doAnimate=$.support.transition&&animate;this.$backdrop=$('<div class="modal-backdrop '+animate+'" />').appendTo(this.$body);this.$element.on('click.dismiss.bs.modal',$.proxy(function(e){if(e.target!==e.currentTarget)return;this.options.backdrop=='static'?this.$element[0].focus.call(this.$element[0]):this.hide.call(this);},this));if(doAnimate)this.$backdrop[0].offsetWidth;// force reflow
this.$backdrop.addClass('in');if(!callback)return;doAnimate?this.$backdrop.one('bsTransitionEnd',callback).emulateTransitionEnd(150):callback();}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass('in');var callbackRemove=function callbackRemove(){that.removeBackdrop();callback&&callback();};$.support.transition&&this.$element.hasClass('fade')?this.$backdrop.one('bsTransitionEnd',callbackRemove).emulateTransitionEnd(150):callbackRemove();}else if(callback){callback();}};Modal.prototype.checkScrollbar=function(){if(document.body.clientWidth>=window.innerWidth)return;this.scrollbarWidth=this.scrollbarWidth||this.measureScrollbar();};Modal.prototype.setScrollbar=function(){var bodyPad=parseInt(this.$body.css('padding-right')||0,10);if(this.scrollbarWidth)this.$body.css('padding-right',bodyPad+this.scrollbarWidth);};Modal.prototype.resetScrollbar=function(){this.$body.css('padding-right','');};Modal.prototype.measureScrollbar=function(){// thx walsh
var scrollDiv=document.createElement('div');scrollDiv.className='modal-scrollbar-measure';this.$body.append(scrollDiv);var scrollbarWidth=scrollDiv.offsetWidth-scrollDiv.clientWidth;this.$body[0].removeChild(scrollDiv);return scrollbarWidth;};// MODAL PLUGIN DEFINITION
// =======================
function Plugin(option,_relatedTarget){return this.each(function(){var $this=$(this);var data=$this.data('bs.modal');var options=$.extend({},Modal.DEFAULTS,$this.data(),(typeof option==="undefined"?"undefined":_typeof(option))=='object'&&option);if(!data)$this.data('bs.modal',data=new Modal(this,options));if(typeof option=='string')data[option](_relatedTarget);else if(options.show)data.show(_relatedTarget);});}var old=$.fn.modal;$.fn.modal=Plugin;$.fn.modal.Constructor=Modal;// MODAL NO CONFLICT
// =================
$.fn.modal.noConflict=function(){$.fn.modal=old;return this;};// MODAL DATA-API
// ==============
$(document).on('click.bs.modal.data-api','[data-toggle="modal"]',function(e){var $this=$(this);var href=$this.attr('href');var $target=$($this.attr('data-target')||href&&href.replace(/.*(?=#[^\s]+$)/,''));// strip for ie7
var option=$target.data('bs.modal')?'toggle':$.extend({remote:!/#/.test(href)&&href},$target.data(),$this.data());if($this.is('a'))e.preventDefault();$target.one('show.bs.modal',function(showEvent){if(showEvent.isDefaultPrevented())return;// only register focus restorer if modal will actually get shown
$target.one('hidden.bs.modal',function(){$this.is(':visible')&&$this.trigger('focus');});});Plugin.call($target,option,this);});}(jQuery);/* ========================================================================
 * Bootstrap: tooltip.js v3.2.0
 * http://getbootstrap.com/javascript/#tooltip
 * Inspired by the original jQuery.tipsy by Jason Frame
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */+function($){'use strict';// TOOLTIP PUBLIC CLASS DEFINITION
// ===============================
var Tooltip=function Tooltip(element,options){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null;this.init('tooltip',element,options);};Tooltip.VERSION='3.2.0';Tooltip.DEFAULTS={animation:true,placement:'top',selector:false,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:'hover focus',title:'',delay:0,html:false,container:false,viewport:{selector:'body',padding:0}};Tooltip.prototype.init=function(type,element,options){this.enabled=true;this.type=type;this.$element=$(element);this.options=this.getOptions(options);this.$viewport=this.options.viewport&&$(this.options.viewport.selector||this.options.viewport);var triggers=this.options.trigger.split(' ');for(var i=triggers.length;i--;){var trigger=triggers[i];if(trigger=='click'){this.$element.on('click.'+this.type,this.options.selector,$.proxy(this.toggle,this));}else if(trigger!='manual'){var eventIn=trigger=='hover'?'mouseenter':'focusin';var eventOut=trigger=='hover'?'mouseleave':'focusout';this.$element.on(eventIn+'.'+this.type,this.options.selector,$.proxy(this.enter,this));this.$element.on(eventOut+'.'+this.type,this.options.selector,$.proxy(this.leave,this));}}this.options.selector?this._options=$.extend({},this.options,{trigger:'manual',selector:''}):this.fixTitle();};Tooltip.prototype.getDefaults=function(){return Tooltip.DEFAULTS;};Tooltip.prototype.getOptions=function(options){options=$.extend({},this.getDefaults(),this.$element.data(),options);if(options.delay&&typeof options.delay=='number'){options.delay={show:options.delay,hide:options.delay};}return options;};Tooltip.prototype.getDelegateOptions=function(){var options={};var defaults=this.getDefaults();this._options&&$.each(this._options,function(key,value){if(defaults[key]!=value)options[key]=value;});return options;};Tooltip.prototype.enter=function(obj){var self=obj instanceof this.constructor?obj:$(obj.currentTarget).data('bs.'+this.type);if(!self){self=new this.constructor(obj.currentTarget,this.getDelegateOptions());$(obj.currentTarget).data('bs.'+this.type,self);}clearTimeout(self.timeout);self.hoverState='in';if(!self.options.delay||!self.options.delay.show)return self.show();self.timeout=setTimeout(function(){if(self.hoverState=='in')self.show();},self.options.delay.show);};Tooltip.prototype.leave=function(obj){var self=obj instanceof this.constructor?obj:$(obj.currentTarget).data('bs.'+this.type);if(!self){self=new this.constructor(obj.currentTarget,this.getDelegateOptions());$(obj.currentTarget).data('bs.'+this.type,self);}clearTimeout(self.timeout);self.hoverState='out';if(!self.options.delay||!self.options.delay.hide)return self.hide();self.timeout=setTimeout(function(){if(self.hoverState=='out')self.hide();},self.options.delay.hide);};Tooltip.prototype.show=function(){var e=$.Event('show.bs.'+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(e);var inDom=$.contains(document.documentElement,this.$element[0]);if(e.isDefaultPrevented()||!inDom)return;var that=this;var $tip=this.tip();var tipId=this.getUID(this.type);this.setContent();$tip.attr('id',tipId);this.$element.attr('aria-describedby',tipId);if(this.options.animation)$tip.addClass('fade');var placement=typeof this.options.placement=='function'?this.options.placement.call(this,$tip[0],this.$element[0]):this.options.placement;var autoToken=/\s?auto?\s?/i;var autoPlace=autoToken.test(placement);if(autoPlace)placement=placement.replace(autoToken,'')||'top';$tip.detach().css({top:0,left:0,display:'block'}).addClass(placement).data('bs.'+this.type,this);this.options.container?$tip.appendTo(this.options.container):$tip.insertAfter(this.$element);var pos=this.getPosition();var actualWidth=$tip[0].offsetWidth;var actualHeight=$tip[0].offsetHeight;if(autoPlace){var orgPlacement=placement;var $parent=this.$element.parent();var parentDim=this.getPosition($parent);placement=placement=='bottom'&&pos.top+pos.height+actualHeight-parentDim.scroll>parentDim.height?'top':placement=='top'&&pos.top-parentDim.scroll-actualHeight<0?'bottom':placement=='right'&&pos.right+actualWidth>parentDim.width?'left':placement=='left'&&pos.left-actualWidth<parentDim.left?'right':placement;$tip.removeClass(orgPlacement).addClass(placement);}var calculatedOffset=this.getCalculatedOffset(placement,pos,actualWidth,actualHeight);this.applyPlacement(calculatedOffset,placement);var complete=function complete(){that.$element.trigger('shown.bs.'+that.type);that.hoverState=null;};$.support.transition&&this.$tip.hasClass('fade')?$tip.one('bsTransitionEnd',complete).emulateTransitionEnd(150):complete();}};Tooltip.prototype.applyPlacement=function(offset,placement){var $tip=this.tip();var width=$tip[0].offsetWidth;var height=$tip[0].offsetHeight;// manually read margins because getBoundingClientRect includes difference
var marginTop=parseInt($tip.css('margin-top'),10);var marginLeft=parseInt($tip.css('margin-left'),10);// we must check for NaN for ie 8/9
if(isNaN(marginTop))marginTop=0;if(isNaN(marginLeft))marginLeft=0;offset.top=offset.top+marginTop;offset.left=offset.left+marginLeft;// $.fn.offset doesn't round pixel values
// so we use setOffset directly with our own function B-0
$.offset.setOffset($tip[0],$.extend({using:function using(props){$tip.css({top:Math.round(props.top),left:Math.round(props.left)});}},offset),0);$tip.addClass('in');// check to see if placing tip in new offset caused the tip to resize itself
var actualWidth=$tip[0].offsetWidth;var actualHeight=$tip[0].offsetHeight;if(placement=='top'&&actualHeight!=height){offset.top=offset.top+height-actualHeight;}var delta=this.getViewportAdjustedDelta(placement,offset,actualWidth,actualHeight);if(delta.left)offset.left+=delta.left;else offset.top+=delta.top;var arrowDelta=delta.left?delta.left*2-width+actualWidth:delta.top*2-height+actualHeight;var arrowPosition=delta.left?'left':'top';var arrowOffsetPosition=delta.left?'offsetWidth':'offsetHeight';$tip.offset(offset);this.replaceArrow(arrowDelta,$tip[0][arrowOffsetPosition],arrowPosition);};Tooltip.prototype.replaceArrow=function(delta,dimension,position){this.arrow().css(position,delta?50*(1-delta/dimension)+'%':'');};Tooltip.prototype.setContent=function(){var $tip=this.tip();var title=this.getTitle();$tip.find('.tooltip-inner')[this.options.html?'html':'text'](title);$tip.removeClass('fade in top bottom left right');};Tooltip.prototype.hide=function(){var that=this;var $tip=this.tip();var e=$.Event('hide.bs.'+this.type);this.$element.removeAttr('aria-describedby');function complete(){if(that.hoverState!='in')$tip.detach();that.$element.trigger('hidden.bs.'+that.type);}this.$element.trigger(e);if(e.isDefaultPrevented())return;$tip.removeClass('in');$.support.transition&&this.$tip.hasClass('fade')?$tip.one('bsTransitionEnd',complete).emulateTransitionEnd(150):complete();this.hoverState=null;return this;};Tooltip.prototype.fixTitle=function(){var $e=this.$element;if($e.attr('title')||typeof $e.attr('data-original-title')!='string'){$e.attr('data-original-title',$e.attr('title')||'').attr('title','');}};Tooltip.prototype.hasContent=function(){return this.getTitle();};Tooltip.prototype.getPosition=function($element){$element=$element||this.$element;var el=$element[0];var isBody=el.tagName=='BODY';return $.extend({},typeof el.getBoundingClientRect=='function'?el.getBoundingClientRect():null,{scroll:isBody?document.documentElement.scrollTop||document.body.scrollTop:$element.scrollTop(),width:isBody?$(window).width():$element.outerWidth(),height:isBody?$(window).height():$element.outerHeight()},isBody?{top:0,left:0}:$element.offset());};Tooltip.prototype.getCalculatedOffset=function(placement,pos,actualWidth,actualHeight){return placement=='bottom'?{top:pos.top+pos.height,left:pos.left+pos.width/2-actualWidth/2}:placement=='top'?{top:pos.top-actualHeight,left:pos.left+pos.width/2-actualWidth/2}:placement=='left'?{top:pos.top+pos.height/2-actualHeight/2,left:pos.left-actualWidth}:/* placement == 'right' */{top:pos.top+pos.height/2-actualHeight/2,left:pos.left+pos.width};};Tooltip.prototype.getViewportAdjustedDelta=function(placement,pos,actualWidth,actualHeight){var delta={top:0,left:0};if(!this.$viewport)return delta;var viewportPadding=this.options.viewport&&this.options.viewport.padding||0;var viewportDimensions=this.getPosition(this.$viewport);if(/right|left/.test(placement)){var topEdgeOffset=pos.top-viewportPadding-viewportDimensions.scroll;var bottomEdgeOffset=pos.top+viewportPadding-viewportDimensions.scroll+actualHeight;if(topEdgeOffset<viewportDimensions.top){// top overflow
delta.top=viewportDimensions.top-topEdgeOffset;}else if(bottomEdgeOffset>viewportDimensions.top+viewportDimensions.height){// bottom overflow
delta.top=viewportDimensions.top+viewportDimensions.height-bottomEdgeOffset;}}else{var leftEdgeOffset=pos.left-viewportPadding;var rightEdgeOffset=pos.left+viewportPadding+actualWidth;if(leftEdgeOffset<viewportDimensions.left){// left overflow
delta.left=viewportDimensions.left-leftEdgeOffset;}else if(rightEdgeOffset>viewportDimensions.width){// right overflow
delta.left=viewportDimensions.left+viewportDimensions.width-rightEdgeOffset;}}return delta;};Tooltip.prototype.getTitle=function(){var title;var $e=this.$element;var o=this.options;title=$e.attr('data-original-title')||(typeof o.title=='function'?o.title.call($e[0]):o.title);return title;};Tooltip.prototype.getUID=function(prefix){do{prefix+=~~(Math.random()*1000000);}while(document.getElementById(prefix));return prefix;};Tooltip.prototype.tip=function(){return this.$tip=this.$tip||$(this.options.template);};Tooltip.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find('.tooltip-arrow');};Tooltip.prototype.validate=function(){if(!this.$element[0].parentNode){this.hide();this.$element=null;this.options=null;}};Tooltip.prototype.enable=function(){this.enabled=true;};Tooltip.prototype.disable=function(){this.enabled=false;};Tooltip.prototype.toggleEnabled=function(){this.enabled=!this.enabled;};Tooltip.prototype.toggle=function(e){var self=this;if(e){self=$(e.currentTarget).data('bs.'+this.type);if(!self){self=new this.constructor(e.currentTarget,this.getDelegateOptions());$(e.currentTarget).data('bs.'+this.type,self);}}self.tip().hasClass('in')?self.leave(self):self.enter(self);};Tooltip.prototype.destroy=function(){clearTimeout(this.timeout);this.hide().$element.off('.'+this.type).removeData('bs.'+this.type);};// TOOLTIP PLUGIN DEFINITION
// =========================
function Plugin(option){return this.each(function(){var $this=$(this);var data=$this.data('bs.tooltip');var options=(typeof option==="undefined"?"undefined":_typeof(option))=='object'&&option;if(!data&&option=='destroy')return;if(!data)$this.data('bs.tooltip',data=new Tooltip(this,options));if(typeof option=='string')data[option]();});}var old=$.fn.tooltip;$.fn.tooltip=Plugin;$.fn.tooltip.Constructor=Tooltip;// TOOLTIP NO CONFLICT
// ===================
$.fn.tooltip.noConflict=function(){$.fn.tooltip=old;return this;};}(jQuery);/* ========================================================================
 * Bootstrap: popover.js v3.2.0
 * http://getbootstrap.com/javascript/#popovers
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */+function($){'use strict';// POPOVER PUBLIC CLASS DEFINITION
// ===============================
var Popover=function Popover(element,options){this.init('popover',element,options);};if(!$.fn.tooltip)throw new Error('Popover requires tooltip.js');Popover.VERSION='3.2.0';Popover.DEFAULTS=$.extend({},$.fn.tooltip.Constructor.DEFAULTS,{placement:'right',trigger:'click',content:'',template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'});// NOTE: POPOVER EXTENDS tooltip.js
// ================================
Popover.prototype=$.extend({},$.fn.tooltip.Constructor.prototype);Popover.prototype.constructor=Popover;Popover.prototype.getDefaults=function(){return Popover.DEFAULTS;};Popover.prototype.setContent=function(){var $tip=this.tip();var title=this.getTitle();var content=this.getContent();$tip.find('.popover-title')[this.options.html?'html':'text'](title);$tip.find('.popover-content').empty()[// we use append for html objects to maintain js events
this.options.html?typeof content=='string'?'html':'append':'text'](content);$tip.removeClass('fade top bottom left right in');// IE8 doesn't accept hiding via the `:empty` pseudo selector, we have to do
// this manually by checking the contents.
if(!$tip.find('.popover-title').html())$tip.find('.popover-title').hide();};Popover.prototype.hasContent=function(){return this.getTitle()||this.getContent();};Popover.prototype.getContent=function(){var $e=this.$element;var o=this.options;return $e.attr('data-content')||(typeof o.content=='function'?o.content.call($e[0]):o.content);};Popover.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find('.arrow');};Popover.prototype.tip=function(){if(!this.$tip)this.$tip=$(this.options.template);return this.$tip;};// POPOVER PLUGIN DEFINITION
// =========================
function Plugin(option){return this.each(function(){var $this=$(this);var data=$this.data('bs.popover');var options=(typeof option==="undefined"?"undefined":_typeof(option))=='object'&&option;if(!data&&option=='destroy')return;if(!data)$this.data('bs.popover',data=new Popover(this,options));if(typeof option=='string')data[option]();});}var old=$.fn.popover;$.fn.popover=Plugin;$.fn.popover.Constructor=Popover;// POPOVER NO CONFLICT
// ===================
$.fn.popover.noConflict=function(){$.fn.popover=old;return this;};}(jQuery);/* Chosen v1.1.0 | (c) 2011-2013 by Harvest | MIT License, https://github.com/harvesthq/chosen/blob/master/LICENSE.md */!function(){var a,AbstractChosen,Chosen,SelectParser,b,c={}.hasOwnProperty,d=function d(a,b){function d(){this.constructor=a;}for(var e in b){c.call(b,e)&&(a[e]=b[e]);}return d.prototype=b.prototype,a.prototype=new d(),a.__super__=b.prototype,a;};SelectParser=function(){function SelectParser(){this.options_index=0,this.parsed=[];}return SelectParser.prototype.add_node=function(a){return"OPTGROUP"===a.nodeName.toUpperCase()?this.add_group(a):this.add_option(a);},SelectParser.prototype.add_group=function(a){var b,c,d,e,f,g;for(b=this.parsed.length,this.parsed.push({array_index:b,group:!0,label:this.escapeExpression(a.label),children:0,disabled:a.disabled}),f=a.childNodes,g=[],d=0,e=f.length;e>d;d++){c=f[d],g.push(this.add_option(c,b,a.disabled));}return g;},SelectParser.prototype.add_option=function(a,b,c){return"OPTION"===a.nodeName.toUpperCase()?(""!==a.text?(null!=b&&(this.parsed[b].children+=1),this.parsed.push({array_index:this.parsed.length,options_index:this.options_index,value:a.value,text:a.text,html:a.innerHTML,selected:a.selected,disabled:c===!0?c:a.disabled,group_array_index:b,classes:a.className,style:a.style.cssText})):this.parsed.push({array_index:this.parsed.length,options_index:this.options_index,empty:!0}),this.options_index+=1):void 0;},SelectParser.prototype.escapeExpression=function(a){var b,c;return null==a||a===!1?"":/[\&\<\>\"\'\`]/.test(a)?(b={"<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},c=/&(?!\w+;)|[\<\>\"\'\`]/g,a.replace(c,function(a){return b[a]||"&amp;";})):a;},SelectParser;}(),SelectParser.select_to_array=function(a){var b,c,d,e,f;for(c=new SelectParser(),f=a.childNodes,d=0,e=f.length;e>d;d++){b=f[d],c.add_node(b);}return c.parsed;},AbstractChosen=function(){function AbstractChosen(a,b){this.form_field=a,this.options=null!=b?b:{},AbstractChosen.browser_is_supported()&&(this.is_multiple=this.form_field.multiple,this.set_default_text(),this.set_default_values(),this.setup(),this.set_up_html(),this.register_observers());}return AbstractChosen.prototype.set_default_values=function(){var a=this;return this.click_test_action=function(b){return a.test_active_click(b);},this.activate_action=function(b){return a.activate_field(b);},this.active_field=!1,this.mouse_on_container=!1,this.results_showing=!1,this.result_highlighted=null,this.allow_single_deselect=null!=this.options.allow_single_deselect&&null!=this.form_field.options[0]&&""===this.form_field.options[0].text?this.options.allow_single_deselect:!1,this.disable_search_threshold=this.options.disable_search_threshold||0,this.disable_search=this.options.disable_search||!1,this.enable_split_word_search=null!=this.options.enable_split_word_search?this.options.enable_split_word_search:!0,this.group_search=null!=this.options.group_search?this.options.group_search:!0,this.search_contains=this.options.search_contains||!1,this.single_backstroke_delete=null!=this.options.single_backstroke_delete?this.options.single_backstroke_delete:!0,this.max_selected_options=this.options.max_selected_options||1/0,this.inherit_select_classes=this.options.inherit_select_classes||!1,this.display_selected_options=null!=this.options.display_selected_options?this.options.display_selected_options:!0,this.display_disabled_options=null!=this.options.display_disabled_options?this.options.display_disabled_options:!0;},AbstractChosen.prototype.set_default_text=function(){return this.default_text=this.form_field.getAttribute("data-placeholder")?this.form_field.getAttribute("data-placeholder"):this.is_multiple?this.options.placeholder_text_multiple||this.options.placeholder_text||AbstractChosen.default_multiple_text:this.options.placeholder_text_single||this.options.placeholder_text||AbstractChosen.default_single_text,this.results_none_found=this.form_field.getAttribute("data-no_results_text")||this.options.no_results_text||AbstractChosen.default_no_result_text;},AbstractChosen.prototype.mouse_enter=function(){return this.mouse_on_container=!0;},AbstractChosen.prototype.mouse_leave=function(){return this.mouse_on_container=!1;},AbstractChosen.prototype.input_focus=function(){var a=this;if(this.is_multiple){if(!this.active_field)return setTimeout(function(){return a.container_mousedown();},50);}else if(!this.active_field)return this.activate_field();},AbstractChosen.prototype.input_blur=function(){var a=this;return this.mouse_on_container?void 0:(this.active_field=!1,setTimeout(function(){return a.blur_test();},100));},AbstractChosen.prototype.results_option_build=function(a){var b,c,d,e,f;for(b="",f=this.results_data,d=0,e=f.length;e>d;d++){c=f[d],b+=c.group?this.result_add_group(c):this.result_add_option(c),(null!=a?a.first:void 0)&&(c.selected&&this.is_multiple?this.choice_build(c):c.selected&&!this.is_multiple&&this.single_set_selected_text(c.text));}return b;},AbstractChosen.prototype.result_add_option=function(a){var b,c;return a.search_match?this.include_option_in_results(a)?(b=[],a.disabled||a.selected&&this.is_multiple||b.push("active-result"),!a.disabled||a.selected&&this.is_multiple||b.push("disabled-result"),a.selected&&b.push("result-selected"),null!=a.group_array_index&&b.push("group-option"),""!==a.classes&&b.push(a.classes),c=document.createElement("li"),c.className=b.join(" "),c.style.cssText=a.style,c.setAttribute("data-option-array-index",a.array_index),c.innerHTML=a.search_text,this.outerHTML(c)):"":"";},AbstractChosen.prototype.result_add_group=function(a){var b;return a.search_match||a.group_match?a.active_options>0?(b=document.createElement("li"),b.className="group-result",b.innerHTML=a.search_text,this.outerHTML(b)):"":"";},AbstractChosen.prototype.results_update_field=function(){return this.set_default_text(),this.is_multiple||this.results_reset_cleanup(),this.result_clear_highlight(),this.results_build(),this.results_showing?this.winnow_results():void 0;},AbstractChosen.prototype.reset_single_select_options=function(){var a,b,c,d,e;for(d=this.results_data,e=[],b=0,c=d.length;c>b;b++){a=d[b],a.selected?e.push(a.selected=!1):e.push(void 0);}return e;},AbstractChosen.prototype.results_toggle=function(){return this.results_showing?this.results_hide():this.results_show();},AbstractChosen.prototype.results_search=function(){return this.results_showing?this.winnow_results():this.results_show();},AbstractChosen.prototype.winnow_results=function(){var a,b,c,d,e,f,g,h,i,j,k,l,m;for(this.no_results_clear(),e=0,g=this.get_search_text(),a=g.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&"),d=this.search_contains?"":"^",c=new RegExp(d+a,"i"),j=new RegExp(a,"i"),m=this.results_data,k=0,l=m.length;l>k;k++){b=m[k],b.search_match=!1,f=null,this.include_option_in_results(b)&&(b.group&&(b.group_match=!1,b.active_options=0),null!=b.group_array_index&&this.results_data[b.group_array_index]&&(f=this.results_data[b.group_array_index],0===f.active_options&&f.search_match&&(e+=1),f.active_options+=1),(!b.group||this.group_search)&&(b.search_text=b.group?b.label:b.html,b.search_match=this.search_string_match(b.search_text,c),b.search_match&&!b.group&&(e+=1),b.search_match?(g.length&&(h=b.search_text.search(j),i=b.search_text.substr(0,h+g.length)+"</em>"+b.search_text.substr(h+g.length),b.search_text=i.substr(0,h)+"<em>"+i.substr(h)),null!=f&&(f.group_match=!0)):null!=b.group_array_index&&this.results_data[b.group_array_index].search_match&&(b.search_match=!0)));}return this.result_clear_highlight(),1>e&&g.length?(this.update_results_content(""),this.no_results(g)):(this.update_results_content(this.results_option_build()),this.winnow_results_set_highlight());},AbstractChosen.prototype.search_string_match=function(a,b){var c,d,e,f;if(b.test(a))return!0;if(this.enable_split_word_search&&(a.indexOf(" ")>=0||0===a.indexOf("["))&&(d=a.replace(/\[|\]/g,"").split(" "),d.length))for(e=0,f=d.length;f>e;e++){if(c=d[e],b.test(c))return!0;}},AbstractChosen.prototype.choices_count=function(){var a,b,c,d;if(null!=this.selected_option_count)return this.selected_option_count;for(this.selected_option_count=0,d=this.form_field.options,b=0,c=d.length;c>b;b++){a=d[b],a.selected&&(this.selected_option_count+=1);}return this.selected_option_count;},AbstractChosen.prototype.choices_click=function(a){return a.preventDefault(),this.results_showing||this.is_disabled?void 0:this.results_show();},AbstractChosen.prototype.keyup_checker=function(a){var b,c;switch(b=null!=(c=a.which)?c:a.keyCode,this.search_field_scale(),b){case 8:if(this.is_multiple&&this.backstroke_length<1&&this.choices_count()>0)return this.keydown_backstroke();if(!this.pending_backstroke)return this.result_clear_highlight(),this.results_search();break;case 13:if(a.preventDefault(),this.results_showing)return this.result_select(a);break;case 27:return this.results_showing&&this.results_hide(),!0;case 9:case 38:case 40:case 16:case 91:case 17:break;default:return this.results_search();}},AbstractChosen.prototype.clipboard_event_checker=function(){var a=this;return setTimeout(function(){return a.results_search();},50);},AbstractChosen.prototype.container_width=function(){return null!=this.options.width?this.options.width:""+this.form_field.offsetWidth+"px";},AbstractChosen.prototype.include_option_in_results=function(a){return this.is_multiple&&!this.display_selected_options&&a.selected?!1:!this.display_disabled_options&&a.disabled?!1:a.empty?!1:!0;},AbstractChosen.prototype.search_results_touchstart=function(a){return this.touch_started=!0,this.search_results_mouseover(a);},AbstractChosen.prototype.search_results_touchmove=function(a){return this.touch_started=!1,this.search_results_mouseout(a);},AbstractChosen.prototype.search_results_touchend=function(a){return this.touch_started?this.search_results_mouseup(a):void 0;},AbstractChosen.prototype.outerHTML=function(a){var b;return a.outerHTML?a.outerHTML:(b=document.createElement("div"),b.appendChild(a),b.innerHTML);},AbstractChosen.browser_is_supported=function(){return"Microsoft Internet Explorer"===window.navigator.appName?document.documentMode>=8:/iP(od|hone)/i.test(window.navigator.userAgent)?!1:/Android/i.test(window.navigator.userAgent)&&/Mobile/i.test(window.navigator.userAgent)?!1:!0;},AbstractChosen.default_multiple_text="Select Some Options",AbstractChosen.default_single_text="Select an Option",AbstractChosen.default_no_result_text="No results match",AbstractChosen;}(),a=jQuery,a.fn.extend({chosen:function chosen(b){return AbstractChosen.browser_is_supported()?this.each(function(){var c,d;c=a(this),d=c.data("chosen"),"destroy"===b&&d?d.destroy():d||c.data("chosen",new Chosen(this,b));}):this;}}),Chosen=function(c){function Chosen(){return b=Chosen.__super__.constructor.apply(this,arguments);}return d(Chosen,c),Chosen.prototype.setup=function(){return this.form_field_jq=a(this.form_field),this.current_selectedIndex=this.form_field.selectedIndex,this.is_rtl=this.form_field_jq.hasClass("chosen-rtl");},Chosen.prototype.set_up_html=function(){var b,c;return b=["chosen-container"],b.push("chosen-container-"+(this.is_multiple?"multi":"single")),this.inherit_select_classes&&this.form_field.className&&b.push(this.form_field.className),this.is_rtl&&b.push("chosen-rtl"),c={"class":b.join(" "),style:"width: "+this.container_width()+";",title:this.form_field.title},this.form_field.id.length&&(c.id=this.form_field.id.replace(/[^\w]/g,"_")+"_chosen"),this.container=a("<div />",c),this.is_multiple?this.container.html('<ul class="chosen-choices"><li class="search-field"><input type="text" value="'+this.default_text+'" class="default" autocomplete="off" style="width:25px;" /></li></ul><div class="chosen-drop"><ul class="chosen-results"></ul></div>'):this.container.html('<a class="chosen-single chosen-default" tabindex="-1"><span>'+this.default_text+'</span><div><b></b></div></a><div class="chosen-drop"><div class="chosen-search"><input type="text" autocomplete="off" /></div><ul class="chosen-results"></ul></div>'),this.form_field_jq.hide().after(this.container),this.dropdown=this.container.find("div.chosen-drop").first(),this.search_field=this.container.find("input").first(),this.search_results=this.container.find("ul.chosen-results").first(),this.search_field_scale(),this.search_no_results=this.container.find("li.no-results").first(),this.is_multiple?(this.search_choices=this.container.find("ul.chosen-choices").first(),this.search_container=this.container.find("li.search-field").first()):(this.search_container=this.container.find("div.chosen-search").first(),this.selected_item=this.container.find(".chosen-single").first()),this.results_build(),this.set_tab_index(),this.set_label_behavior(),this.form_field_jq.trigger("chosen:ready",{chosen:this});},Chosen.prototype.register_observers=function(){var a=this;return this.container.bind("mousedown.chosen",function(b){a.container_mousedown(b);}),this.container.bind("mouseup.chosen",function(b){a.container_mouseup(b);}),this.container.bind("mouseenter.chosen",function(b){a.mouse_enter(b);}),this.container.bind("mouseleave.chosen",function(b){a.mouse_leave(b);}),this.search_results.bind("mouseup.chosen",function(b){a.search_results_mouseup(b);}),this.search_results.bind("mouseover.chosen",function(b){a.search_results_mouseover(b);}),this.search_results.bind("mouseout.chosen",function(b){a.search_results_mouseout(b);}),this.search_results.bind("mousewheel.chosen DOMMouseScroll.chosen",function(b){a.search_results_mousewheel(b);}),this.search_results.bind("touchstart.chosen",function(b){a.search_results_touchstart(b);}),this.search_results.bind("touchmove.chosen",function(b){a.search_results_touchmove(b);}),this.search_results.bind("touchend.chosen",function(b){a.search_results_touchend(b);}),this.form_field_jq.bind("chosen:updated.chosen",function(b){a.results_update_field(b);}),this.form_field_jq.bind("chosen:activate.chosen",function(b){a.activate_field(b);}),this.form_field_jq.bind("chosen:open.chosen",function(b){a.container_mousedown(b);}),this.form_field_jq.bind("chosen:close.chosen",function(b){a.input_blur(b);}),this.search_field.bind("blur.chosen",function(b){a.input_blur(b);}),this.search_field.bind("keyup.chosen",function(b){a.keyup_checker(b);}),this.search_field.bind("keydown.chosen",function(b){a.keydown_checker(b);}),this.search_field.bind("focus.chosen",function(b){a.input_focus(b);}),this.search_field.bind("cut.chosen",function(b){a.clipboard_event_checker(b);}),this.search_field.bind("paste.chosen",function(b){a.clipboard_event_checker(b);}),this.is_multiple?this.search_choices.bind("click.chosen",function(b){a.choices_click(b);}):this.container.bind("click.chosen",function(a){a.preventDefault();});},Chosen.prototype.destroy=function(){return a(this.container[0].ownerDocument).unbind("click.chosen",this.click_test_action),this.search_field[0].tabIndex&&(this.form_field_jq[0].tabIndex=this.search_field[0].tabIndex),this.container.remove(),this.form_field_jq.removeData("chosen"),this.form_field_jq.show();},Chosen.prototype.search_field_disabled=function(){return this.is_disabled=this.form_field_jq[0].disabled,this.is_disabled?(this.container.addClass("chosen-disabled"),this.search_field[0].disabled=!0,this.is_multiple||this.selected_item.unbind("focus.chosen",this.activate_action),this.close_field()):(this.container.removeClass("chosen-disabled"),this.search_field[0].disabled=!1,this.is_multiple?void 0:this.selected_item.bind("focus.chosen",this.activate_action));},Chosen.prototype.container_mousedown=function(b){return this.is_disabled||(b&&"mousedown"===b.type&&!this.results_showing&&b.preventDefault(),null!=b&&a(b.target).hasClass("search-choice-close"))?void 0:(this.active_field?this.is_multiple||!b||a(b.target)[0]!==this.selected_item[0]&&!a(b.target).parents("a.chosen-single").length||(b.preventDefault(),this.results_toggle()):(this.is_multiple&&this.search_field.val(""),a(this.container[0].ownerDocument).bind("click.chosen",this.click_test_action),this.results_show()),this.activate_field());},Chosen.prototype.container_mouseup=function(a){return"ABBR"!==a.target.nodeName||this.is_disabled?void 0:this.results_reset(a);},Chosen.prototype.search_results_mousewheel=function(a){var b;return a.originalEvent&&(b=-a.originalEvent.wheelDelta||a.originalEvent.detail),null!=b?(a.preventDefault(),"DOMMouseScroll"===a.type&&(b=40*b),this.search_results.scrollTop(b+this.search_results.scrollTop())):void 0;},Chosen.prototype.blur_test=function(){return!this.active_field&&this.container.hasClass("chosen-container-active")?this.close_field():void 0;},Chosen.prototype.close_field=function(){return a(this.container[0].ownerDocument).unbind("click.chosen",this.click_test_action),this.active_field=!1,this.results_hide(),this.container.removeClass("chosen-container-active"),this.clear_backstroke(),this.show_search_field_default(),this.search_field_scale();},Chosen.prototype.activate_field=function(){return this.container.addClass("chosen-container-active"),this.active_field=!0,this.search_field.val(this.search_field.val()),this.search_field.focus();},Chosen.prototype.test_active_click=function(b){var c;return c=a(b.target).closest(".chosen-container"),c.length&&this.container[0]===c[0]?this.active_field=!0:this.close_field();},Chosen.prototype.results_build=function(){return this.parsing=!0,this.selected_option_count=null,this.results_data=SelectParser.select_to_array(this.form_field),this.is_multiple?this.search_choices.find("li.search-choice").remove():this.is_multiple||(this.single_set_selected_text(),this.disable_search||this.form_field.options.length<=this.disable_search_threshold?(this.search_field[0].readOnly=!0,this.container.addClass("chosen-container-single-nosearch")):(this.search_field[0].readOnly=!1,this.container.removeClass("chosen-container-single-nosearch"))),this.update_results_content(this.results_option_build({first:!0})),this.search_field_disabled(),this.show_search_field_default(),this.search_field_scale(),this.parsing=!1;},Chosen.prototype.result_do_highlight=function(a){var b,c,d,e,f;if(a.length){if(this.result_clear_highlight(),this.result_highlight=a,this.result_highlight.addClass("highlighted"),d=parseInt(this.search_results.css("maxHeight"),10),f=this.search_results.scrollTop(),e=d+f,c=this.result_highlight.position().top+this.search_results.scrollTop(),b=c+this.result_highlight.outerHeight(),b>=e)return this.search_results.scrollTop(b-d>0?b-d:0);if(f>c)return this.search_results.scrollTop(c);}},Chosen.prototype.result_clear_highlight=function(){return this.result_highlight&&this.result_highlight.removeClass("highlighted"),this.result_highlight=null;},Chosen.prototype.results_show=function(){return this.is_multiple&&this.max_selected_options<=this.choices_count()?(this.form_field_jq.trigger("chosen:maxselected",{chosen:this}),!1):(this.container.addClass("chosen-with-drop"),this.results_showing=!0,this.search_field.focus(),this.search_field.val(this.search_field.val()),this.winnow_results(),this.form_field_jq.trigger("chosen:showing_dropdown",{chosen:this}));},Chosen.prototype.update_results_content=function(a){return this.search_results.html(a);},Chosen.prototype.results_hide=function(){return this.results_showing&&(this.result_clear_highlight(),this.container.removeClass("chosen-with-drop"),this.form_field_jq.trigger("chosen:hiding_dropdown",{chosen:this})),this.results_showing=!1;},Chosen.prototype.set_tab_index=function(){var a;return this.form_field.tabIndex?(a=this.form_field.tabIndex,this.form_field.tabIndex=-1,this.search_field[0].tabIndex=a):void 0;},Chosen.prototype.set_label_behavior=function(){var b=this;return this.form_field_label=this.form_field_jq.parents("label"),!this.form_field_label.length&&this.form_field.id.length&&(this.form_field_label=a("label[for='"+this.form_field.id+"']")),this.form_field_label.length>0?this.form_field_label.bind("click.chosen",function(a){return b.is_multiple?b.container_mousedown(a):b.activate_field();}):void 0;},Chosen.prototype.show_search_field_default=function(){return this.is_multiple&&this.choices_count()<1&&!this.active_field?(this.search_field.val(this.default_text),this.search_field.addClass("default")):(this.search_field.val(""),this.search_field.removeClass("default"));},Chosen.prototype.search_results_mouseup=function(b){var c;return c=a(b.target).hasClass("active-result")?a(b.target):a(b.target).parents(".active-result").first(),c.length?(this.result_highlight=c,this.result_select(b),this.search_field.focus()):void 0;},Chosen.prototype.search_results_mouseover=function(b){var c;return c=a(b.target).hasClass("active-result")?a(b.target):a(b.target).parents(".active-result").first(),c?this.result_do_highlight(c):void 0;},Chosen.prototype.search_results_mouseout=function(b){return a(b.target).hasClass("active-result")?this.result_clear_highlight():void 0;},Chosen.prototype.choice_build=function(b){var c,d,e=this;return c=a("<li />",{"class":"search-choice"}).html("<span>"+b.html+"</span>"),b.disabled?c.addClass("search-choice-disabled"):(d=a("<a />",{"class":"search-choice-close","data-option-array-index":b.array_index}),d.bind("click.chosen",function(a){return e.choice_destroy_link_click(a);}),c.append(d)),this.search_container.before(c);},Chosen.prototype.choice_destroy_link_click=function(b){return b.preventDefault(),b.stopPropagation(),this.is_disabled?void 0:this.choice_destroy(a(b.target));},Chosen.prototype.choice_destroy=function(a){return this.result_deselect(a[0].getAttribute("data-option-array-index"))?(this.show_search_field_default(),this.is_multiple&&this.choices_count()>0&&this.search_field.val().length<1&&this.results_hide(),a.parents("li").first().remove(),this.search_field_scale()):void 0;},Chosen.prototype.results_reset=function(){return this.reset_single_select_options(),this.form_field.options[0].selected=!0,this.single_set_selected_text(),this.show_search_field_default(),this.results_reset_cleanup(),this.form_field_jq.trigger("change"),this.active_field?this.results_hide():void 0;},Chosen.prototype.results_reset_cleanup=function(){return this.current_selectedIndex=this.form_field.selectedIndex,this.selected_item.find("abbr").remove();},Chosen.prototype.result_select=function(a){var b,c;return this.result_highlight?(b=this.result_highlight,this.result_clear_highlight(),this.is_multiple&&this.max_selected_options<=this.choices_count()?(this.form_field_jq.trigger("chosen:maxselected",{chosen:this}),!1):(this.is_multiple?b.removeClass("active-result"):this.reset_single_select_options(),c=this.results_data[b[0].getAttribute("data-option-array-index")],c.selected=!0,this.form_field.options[c.options_index].selected=!0,this.selected_option_count=null,this.is_multiple?this.choice_build(c):this.single_set_selected_text(c.text),(a.metaKey||a.ctrlKey)&&this.is_multiple||this.results_hide(),this.search_field.val(""),(this.is_multiple||this.form_field.selectedIndex!==this.current_selectedIndex)&&this.form_field_jq.trigger("change",{selected:this.form_field.options[c.options_index].value}),this.current_selectedIndex=this.form_field.selectedIndex,this.search_field_scale())):void 0;},Chosen.prototype.single_set_selected_text=function(a){return null==a&&(a=this.default_text),a===this.default_text?this.selected_item.addClass("chosen-default"):(this.single_deselect_control_build(),this.selected_item.removeClass("chosen-default")),this.selected_item.find("span").text(a);},Chosen.prototype.result_deselect=function(a){var b;return b=this.results_data[a],this.form_field.options[b.options_index].disabled?!1:(b.selected=!1,this.form_field.options[b.options_index].selected=!1,this.selected_option_count=null,this.result_clear_highlight(),this.results_showing&&this.winnow_results(),this.form_field_jq.trigger("change",{deselected:this.form_field.options[b.options_index].value}),this.search_field_scale(),!0);},Chosen.prototype.single_deselect_control_build=function(){return this.allow_single_deselect?(this.selected_item.find("abbr").length||this.selected_item.find("span").first().after('<abbr class="search-choice-close"></abbr>'),this.selected_item.addClass("chosen-single-with-deselect")):void 0;},Chosen.prototype.get_search_text=function(){return this.search_field.val()===this.default_text?"":a("<div/>").text(a.trim(this.search_field.val())).html();},Chosen.prototype.winnow_results_set_highlight=function(){var a,b;return b=this.is_multiple?[]:this.search_results.find(".result-selected.active-result"),a=b.length?b.first():this.search_results.find(".active-result").first(),null!=a?this.result_do_highlight(a):void 0;},Chosen.prototype.no_results=function(b){var c;return c=a('<li class="no-results">'+this.results_none_found+' "<span></span>"</li>'),c.find("span").first().html(b),this.search_results.append(c),this.form_field_jq.trigger("chosen:no_results",{chosen:this});},Chosen.prototype.no_results_clear=function(){return this.search_results.find(".no-results").remove();},Chosen.prototype.keydown_arrow=function(){var a;return this.results_showing&&this.result_highlight?(a=this.result_highlight.nextAll("li.active-result").first())?this.result_do_highlight(a):void 0:this.results_show();},Chosen.prototype.keyup_arrow=function(){var a;return this.results_showing||this.is_multiple?this.result_highlight?(a=this.result_highlight.prevAll("li.active-result"),a.length?this.result_do_highlight(a.first()):(this.choices_count()>0&&this.results_hide(),this.result_clear_highlight())):void 0:this.results_show();},Chosen.prototype.keydown_backstroke=function(){var a;return this.pending_backstroke?(this.choice_destroy(this.pending_backstroke.find("a").first()),this.clear_backstroke()):(a=this.search_container.siblings("li.search-choice").last(),a.length&&!a.hasClass("search-choice-disabled")?(this.pending_backstroke=a,this.single_backstroke_delete?this.keydown_backstroke():this.pending_backstroke.addClass("search-choice-focus")):void 0);},Chosen.prototype.clear_backstroke=function(){return this.pending_backstroke&&this.pending_backstroke.removeClass("search-choice-focus"),this.pending_backstroke=null;},Chosen.prototype.keydown_checker=function(a){var b,c;switch(b=null!=(c=a.which)?c:a.keyCode,this.search_field_scale(),8!==b&&this.pending_backstroke&&this.clear_backstroke(),b){case 8:this.backstroke_length=this.search_field.val().length;break;case 9:this.results_showing&&!this.is_multiple&&this.result_select(a),this.mouse_on_container=!1;break;case 13:a.preventDefault();break;case 38:a.preventDefault(),this.keyup_arrow();break;case 40:a.preventDefault(),this.keydown_arrow();}},Chosen.prototype.search_field_scale=function(){var b,c,d,e,f,g,h,i,j;if(this.is_multiple){for(d=0,h=0,f="position:absolute; left: -1000px; top: -1000px; display:none;",g=["font-size","font-style","font-weight","font-family","line-height","text-transform","letter-spacing"],i=0,j=g.length;j>i;i++){e=g[i],f+=e+":"+this.search_field.css(e)+";";}return b=a("<div />",{style:f}),b.text(this.search_field.val()),a("body").append(b),h=b.width()+25,b.remove(),c=this.container.outerWidth(),h>c-10&&(h=c-10),this.search_field.css({width:h+"px"});}},Chosen;}(AbstractChosen);}.call(undefined);/*
 * jQuery FlexSlider v2.2.2
 * Copyright 2012 WooThemes
 * Contributing Author: Tyler Smith
 */;(function($){//FlexSlider: Object Instance
$.flexslider=function(el,options){var slider=$(el);// making variables public
slider.vars=$.extend({},$.flexslider.defaults,options);var namespace=slider.vars.namespace,msGesture=window.navigator&&window.navigator.msPointerEnabled&&window.MSGesture,touch=("ontouchstart"in window||msGesture||window.DocumentTouch&&document instanceof DocumentTouch)&&slider.vars.touch,// depricating this idea, as devices are being released with both of these events
//eventType = (touch) ? "touchend" : "click",
eventType="click touchend MSPointerUp keyup",watchedEvent="",watchedEventClearTimer,vertical=slider.vars.direction==="vertical",reverse=slider.vars.reverse,carousel=slider.vars.itemWidth>0,fade=slider.vars.animation==="fade",asNav=slider.vars.asNavFor!=="",methods={},focused=true;// Store a reference to the slider object
$.data(el,"flexslider",slider);// Private slider methods
methods={init:function init(){slider.animating=false;// Get current slide and make sure it is a number
slider.currentSlide=parseInt(slider.vars.startAt?slider.vars.startAt:0,10);if(isNaN(slider.currentSlide))slider.currentSlide=0;slider.animatingTo=slider.currentSlide;slider.atEnd=slider.currentSlide===0||slider.currentSlide===slider.last;slider.containerSelector=slider.vars.selector.substr(0,slider.vars.selector.search(' '));slider.slides=$(slider.vars.selector,slider);slider.container=$(slider.containerSelector,slider);slider.count=slider.slides.length;// SYNC:
slider.syncExists=$(slider.vars.sync).length>0;// SLIDE:
if(slider.vars.animation==="slide")slider.vars.animation="swing";slider.prop=vertical?"top":"marginLeft";slider.args={};// SLIDESHOW:
slider.manualPause=false;slider.stopped=false;//PAUSE WHEN INVISIBLE
slider.started=false;slider.startTimeout=null;// TOUCH/USECSS:
slider.transitions=!slider.vars.video&&!fade&&slider.vars.useCSS&&function(){var obj=document.createElement('div'),props=['perspectiveProperty','WebkitPerspective','MozPerspective','OPerspective','msPerspective'];for(var i in props){if(obj.style[props[i]]!==undefined){slider.pfx=props[i].replace('Perspective','').toLowerCase();slider.prop="-"+slider.pfx+"-transform";return true;}}return false;}();slider.ensureAnimationEnd='';// CONTROLSCONTAINER:
if(slider.vars.controlsContainer!=="")slider.controlsContainer=$(slider.vars.controlsContainer).length>0&&$(slider.vars.controlsContainer);// MANUAL:
if(slider.vars.manualControls!=="")slider.manualControls=$(slider.vars.manualControls).length>0&&$(slider.vars.manualControls);// RANDOMIZE:
if(slider.vars.randomize){slider.slides.sort(function(){return Math.round(Math.random())-0.5;});slider.container.empty().append(slider.slides);}slider.doMath();// INIT
slider.setup("init");// CONTROLNAV:
if(slider.vars.controlNav)methods.controlNav.setup();// DIRECTIONNAV:
if(slider.vars.directionNav)methods.directionNav.setup();// KEYBOARD:
if(slider.vars.keyboard&&($(slider.containerSelector).length===1||slider.vars.multipleKeyboard)){$(document).bind('keyup',function(event){var keycode=event.keyCode;if(!slider.animating&&(keycode===39||keycode===37)){var target=keycode===39?slider.getTarget('next'):keycode===37?slider.getTarget('prev'):false;slider.flexAnimate(target,slider.vars.pauseOnAction);}});}// MOUSEWHEEL:
if(slider.vars.mousewheel){slider.bind('mousewheel',function(event,delta,deltaX,deltaY){event.preventDefault();var target=delta<0?slider.getTarget('next'):slider.getTarget('prev');slider.flexAnimate(target,slider.vars.pauseOnAction);});}// PAUSEPLAY
if(slider.vars.pausePlay)methods.pausePlay.setup();//PAUSE WHEN INVISIBLE
if(slider.vars.slideshow&&slider.vars.pauseInvisible)methods.pauseInvisible.init();// SLIDSESHOW
if(slider.vars.slideshow){if(slider.vars.pauseOnHover){slider.hover(function(){if(!slider.manualPlay&&!slider.manualPause)slider.pause();},function(){if(!slider.manualPause&&!slider.manualPlay&&!slider.stopped)slider.play();});}// initialize animation
//If we're visible, or we don't use PageVisibility API
if(!slider.vars.pauseInvisible||!methods.pauseInvisible.isHidden()){slider.vars.initDelay>0?slider.startTimeout=setTimeout(slider.play,slider.vars.initDelay):slider.play();}}// ASNAV:
if(asNav)methods.asNav.setup();// TOUCH
if(touch&&slider.vars.touch)methods.touch();// FADE&&SMOOTHHEIGHT || SLIDE:
if(!fade||fade&&slider.vars.smoothHeight)$(window).bind("resize orientationchange focus",methods.resize);slider.find("img").attr("draggable","false");// API: start() Callback
setTimeout(function(){slider.vars.start(slider);},200);},asNav:{setup:function setup(){slider.asNav=true;slider.animatingTo=Math.floor(slider.currentSlide/slider.move);slider.currentItem=slider.currentSlide;slider.slides.removeClass(namespace+"active-slide").eq(slider.currentItem).addClass(namespace+"active-slide");if(!msGesture){slider.slides.on(eventType,function(e){e.preventDefault();var $slide=$(this),target=$slide.index();var posFromLeft=$slide.offset().left-$(slider).scrollLeft();// Find position of slide relative to left of slider container
if(posFromLeft<=0&&$slide.hasClass(namespace+'active-slide')){slider.flexAnimate(slider.getTarget("prev"),true);}else if(!$(slider.vars.asNavFor).data('flexslider').animating&&!$slide.hasClass(namespace+"active-slide")){slider.direction=slider.currentItem<target?"next":"prev";slider.flexAnimate(target,slider.vars.pauseOnAction,false,true,true);}});}else{el._slider=slider;slider.slides.each(function(){var that=this;that._gesture=new MSGesture();that._gesture.target=that;that.addEventListener("MSPointerDown",function(e){e.preventDefault();if(e.currentTarget._gesture)e.currentTarget._gesture.addPointer(e.pointerId);},false);that.addEventListener("MSGestureTap",function(e){e.preventDefault();var $slide=$(this),target=$slide.index();if(!$(slider.vars.asNavFor).data('flexslider').animating&&!$slide.hasClass('active')){slider.direction=slider.currentItem<target?"next":"prev";slider.flexAnimate(target,slider.vars.pauseOnAction,false,true,true);}});});}}},controlNav:{setup:function setup(){if(!slider.manualControls){methods.controlNav.setupPaging();}else{// MANUALCONTROLS:
methods.controlNav.setupManual();}},setupPaging:function setupPaging(){var type=slider.vars.controlNav==="thumbnails"?'control-thumbs':'control-paging',j=1,item,slide;slider.controlNavScaffold=$('<ol class="'+namespace+'control-nav '+namespace+type+'"></ol>');if(slider.pagingCount>1){for(var i=0;i<slider.pagingCount;i++){slide=slider.slides.eq(i);item=slider.vars.controlNav==="thumbnails"?'<img src="'+slide.attr('data-thumb')+'"/>':'<a>'+j+'</a>';if('thumbnails'===slider.vars.controlNav&&true===slider.vars.thumbCaptions){var captn=slide.attr('data-thumbcaption');if(''!=captn&&undefined!=captn)item+='<span class="'+namespace+'caption">'+captn+'</span>';}slider.controlNavScaffold.append('<li>'+item+'</li>');j++;}}// CONTROLSCONTAINER:
slider.controlsContainer?$(slider.controlsContainer).append(slider.controlNavScaffold):slider.append(slider.controlNavScaffold);methods.controlNav.set();methods.controlNav.active();slider.controlNavScaffold.delegate('a, img',eventType,function(event){event.preventDefault();if(watchedEvent===""||watchedEvent===event.type){var $this=$(this),target=slider.controlNav.index($this);if(!$this.hasClass(namespace+'active')){slider.direction=target>slider.currentSlide?"next":"prev";slider.flexAnimate(target,slider.vars.pauseOnAction);}}// setup flags to prevent event duplication
if(watchedEvent===""){watchedEvent=event.type;}methods.setToClearWatchedEvent();});},setupManual:function setupManual(){slider.controlNav=slider.manualControls;methods.controlNav.active();slider.controlNav.bind(eventType,function(event){event.preventDefault();if(watchedEvent===""||watchedEvent===event.type){var $this=$(this),target=slider.controlNav.index($this);if(!$this.hasClass(namespace+'active')){target>slider.currentSlide?slider.direction="next":slider.direction="prev";slider.flexAnimate(target,slider.vars.pauseOnAction);}}// setup flags to prevent event duplication
if(watchedEvent===""){watchedEvent=event.type;}methods.setToClearWatchedEvent();});},set:function set(){var selector=slider.vars.controlNav==="thumbnails"?'img':'a';slider.controlNav=$('.'+namespace+'control-nav li '+selector,slider.controlsContainer?slider.controlsContainer:slider);},active:function active(){slider.controlNav.removeClass(namespace+"active").eq(slider.animatingTo).addClass(namespace+"active");},update:function update(action,pos){if(slider.pagingCount>1&&action==="add"){slider.controlNavScaffold.append($('<li><a>'+slider.count+'</a></li>'));}else if(slider.pagingCount===1){slider.controlNavScaffold.find('li').remove();}else{slider.controlNav.eq(pos).closest('li').remove();}methods.controlNav.set();slider.pagingCount>1&&slider.pagingCount!==slider.controlNav.length?slider.update(pos,action):methods.controlNav.active();}},directionNav:{setup:function setup(){var directionNavScaffold=$('<ul class="'+namespace+'direction-nav"><li><a class="'+namespace+'prev" href="#">'+slider.vars.prevText+'</a></li><li><a class="'+namespace+'next" href="#">'+slider.vars.nextText+'</a></li></ul>');// CONTROLSCONTAINER:
if(slider.controlsContainer){$(slider.controlsContainer).append(directionNavScaffold);slider.directionNav=$('.'+namespace+'direction-nav li a',slider.controlsContainer);}else{slider.append(directionNavScaffold);slider.directionNav=$('.'+namespace+'direction-nav li a',slider);}methods.directionNav.update();slider.directionNav.bind(eventType,function(event){event.preventDefault();var target;if(watchedEvent===""||watchedEvent===event.type){target=$(this).hasClass(namespace+'next')?slider.getTarget('next'):slider.getTarget('prev');slider.flexAnimate(target,slider.vars.pauseOnAction);}// setup flags to prevent event duplication
if(watchedEvent===""){watchedEvent=event.type;}methods.setToClearWatchedEvent();});},update:function update(){var disabledClass=namespace+'disabled';if(slider.pagingCount===1){slider.directionNav.addClass(disabledClass).attr('tabindex','-1');}else if(!slider.vars.animationLoop){if(slider.animatingTo===0){slider.directionNav.removeClass(disabledClass).filter('.'+namespace+"prev").addClass(disabledClass).attr('tabindex','-1');}else if(slider.animatingTo===slider.last){slider.directionNav.removeClass(disabledClass).filter('.'+namespace+"next").addClass(disabledClass).attr('tabindex','-1');}else{slider.directionNav.removeClass(disabledClass).removeAttr('tabindex');}}else{slider.directionNav.removeClass(disabledClass).removeAttr('tabindex');}}},pausePlay:{setup:function setup(){var pausePlayScaffold=$('<div class="'+namespace+'pauseplay"><a></a></div>');// CONTROLSCONTAINER:
if(slider.controlsContainer){slider.controlsContainer.append(pausePlayScaffold);slider.pausePlay=$('.'+namespace+'pauseplay a',slider.controlsContainer);}else{slider.append(pausePlayScaffold);slider.pausePlay=$('.'+namespace+'pauseplay a',slider);}methods.pausePlay.update(slider.vars.slideshow?namespace+'pause':namespace+'play');slider.pausePlay.bind(eventType,function(event){event.preventDefault();if(watchedEvent===""||watchedEvent===event.type){if($(this).hasClass(namespace+'pause')){slider.manualPause=true;slider.manualPlay=false;slider.pause();}else{slider.manualPause=false;slider.manualPlay=true;slider.play();}}// setup flags to prevent event duplication
if(watchedEvent===""){watchedEvent=event.type;}methods.setToClearWatchedEvent();});},update:function update(state){state==="play"?slider.pausePlay.removeClass(namespace+'pause').addClass(namespace+'play').html(slider.vars.playText):slider.pausePlay.removeClass(namespace+'play').addClass(namespace+'pause').html(slider.vars.pauseText);}},touch:function touch(){var startX,startY,offset,cwidth,dx,startT,scrolling=false,localX=0,localY=0,accDx=0;if(!msGesture){var onTouchStart=function onTouchStart(e){if(slider.animating){e.preventDefault();}else if(window.navigator.msPointerEnabled||e.touches.length===1){slider.pause();// CAROUSEL:
cwidth=vertical?slider.h:slider.w;startT=Number(new Date());// CAROUSEL:
// Local vars for X and Y points.
localX=e.touches[0].pageX;localY=e.touches[0].pageY;offset=carousel&&reverse&&slider.animatingTo===slider.last?0:carousel&&reverse?slider.limit-(slider.itemW+slider.vars.itemMargin)*slider.move*slider.animatingTo:carousel&&slider.currentSlide===slider.last?slider.limit:carousel?(slider.itemW+slider.vars.itemMargin)*slider.move*slider.currentSlide:reverse?(slider.last-slider.currentSlide+slider.cloneOffset)*cwidth:(slider.currentSlide+slider.cloneOffset)*cwidth;startX=vertical?localY:localX;startY=vertical?localX:localY;el.addEventListener('touchmove',onTouchMove,false);el.addEventListener('touchend',onTouchEnd,false);}};var onTouchMove=function onTouchMove(e){// Local vars for X and Y points.
localX=e.touches[0].pageX;localY=e.touches[0].pageY;dx=vertical?startX-localY:startX-localX;scrolling=vertical?Math.abs(dx)<Math.abs(localX-startY):Math.abs(dx)<Math.abs(localY-startY);var fxms=500;if(!scrolling||Number(new Date())-startT>fxms){e.preventDefault();if(!fade&&slider.transitions){if(!slider.vars.animationLoop){dx=dx/(slider.currentSlide===0&&dx<0||slider.currentSlide===slider.last&&dx>0?Math.abs(dx)/cwidth+2:1);}slider.setProps(offset+dx,"setTouch");}}};var onTouchEnd=function onTouchEnd(e){// finish the touch by undoing the touch session
el.removeEventListener('touchmove',onTouchMove,false);if(slider.animatingTo===slider.currentSlide&&!scrolling&&!(dx===null)){var updateDx=reverse?-dx:dx,target=updateDx>0?slider.getTarget('next'):slider.getTarget('prev');if(slider.canAdvance(target)&&(Number(new Date())-startT<550&&Math.abs(updateDx)>50||Math.abs(updateDx)>cwidth/2)){slider.flexAnimate(target,slider.vars.pauseOnAction);}else{if(!fade)slider.flexAnimate(slider.currentSlide,slider.vars.pauseOnAction,true);}}el.removeEventListener('touchend',onTouchEnd,false);startX=null;startY=null;dx=null;offset=null;};el.addEventListener('touchstart',onTouchStart,false);}else{var onMSPointerDown=function onMSPointerDown(e){e.stopPropagation();if(slider.animating){e.preventDefault();}else{slider.pause();el._gesture.addPointer(e.pointerId);accDx=0;cwidth=vertical?slider.h:slider.w;startT=Number(new Date());// CAROUSEL:
offset=carousel&&reverse&&slider.animatingTo===slider.last?0:carousel&&reverse?slider.limit-(slider.itemW+slider.vars.itemMargin)*slider.move*slider.animatingTo:carousel&&slider.currentSlide===slider.last?slider.limit:carousel?(slider.itemW+slider.vars.itemMargin)*slider.move*slider.currentSlide:reverse?(slider.last-slider.currentSlide+slider.cloneOffset)*cwidth:(slider.currentSlide+slider.cloneOffset)*cwidth;}};var onMSGestureChange=function onMSGestureChange(e){e.stopPropagation();var slider=e.target._slider;if(!slider){return;}var transX=-e.translationX,transY=-e.translationY;//Accumulate translations.
accDx=accDx+(vertical?transY:transX);dx=accDx;scrolling=vertical?Math.abs(accDx)<Math.abs(-transX):Math.abs(accDx)<Math.abs(-transY);if(e.detail===e.MSGESTURE_FLAG_INERTIA){setImmediate(function(){el._gesture.stop();});return;}if(!scrolling||Number(new Date())-startT>500){e.preventDefault();if(!fade&&slider.transitions){if(!slider.vars.animationLoop){dx=accDx/(slider.currentSlide===0&&accDx<0||slider.currentSlide===slider.last&&accDx>0?Math.abs(accDx)/cwidth+2:1);}slider.setProps(offset+dx,"setTouch");}}};var onMSGestureEnd=function onMSGestureEnd(e){e.stopPropagation();var slider=e.target._slider;if(!slider){return;}if(slider.animatingTo===slider.currentSlide&&!scrolling&&!(dx===null)){var updateDx=reverse?-dx:dx,target=updateDx>0?slider.getTarget('next'):slider.getTarget('prev');if(slider.canAdvance(target)&&(Number(new Date())-startT<550&&Math.abs(updateDx)>50||Math.abs(updateDx)>cwidth/2)){slider.flexAnimate(target,slider.vars.pauseOnAction);}else{if(!fade)slider.flexAnimate(slider.currentSlide,slider.vars.pauseOnAction,true);}}startX=null;startY=null;dx=null;offset=null;accDx=0;};el.style.msTouchAction="none";el._gesture=new MSGesture();el._gesture.target=el;el.addEventListener("MSPointerDown",onMSPointerDown,false);el._slider=slider;el.addEventListener("MSGestureChange",onMSGestureChange,false);el.addEventListener("MSGestureEnd",onMSGestureEnd,false);}},resize:function resize(){if(!slider.animating&&slider.is(':visible')){if(!carousel)slider.doMath();if(fade){// SMOOTH HEIGHT:
methods.smoothHeight();}else if(carousel){//CAROUSEL:
slider.slides.width(slider.computedW);slider.update(slider.pagingCount);slider.setProps();}else if(vertical){//VERTICAL:
slider.viewport.height(slider.h);slider.setProps(slider.h,"setTotal");}else{// SMOOTH HEIGHT:
if(slider.vars.smoothHeight)methods.smoothHeight();slider.newSlides.width(slider.computedW);slider.setProps(slider.computedW,"setTotal");}}},smoothHeight:function smoothHeight(dur){if(!vertical||fade){var $obj=fade?slider:slider.viewport;dur?$obj.animate({"height":slider.slides.eq(slider.animatingTo).height()},dur):$obj.height(slider.slides.eq(slider.animatingTo).height());}},sync:function sync(action){var $obj=$(slider.vars.sync).data("flexslider"),target=slider.animatingTo;switch(action){case"animate":$obj.flexAnimate(target,slider.vars.pauseOnAction,false,true);break;case"play":if(!$obj.playing&&!$obj.asNav){$obj.play();}break;case"pause":$obj.pause();break;}},uniqueID:function uniqueID($clone){// Append _clone to current level and children elements with id attributes
$clone.filter('[id]').add($clone.find('[id]')).each(function(){var $this=$(this);$this.attr('id',$this.attr('id')+'_clone');});return $clone;},pauseInvisible:{visProp:null,init:function init(){var prefixes=['webkit','moz','ms','o'];if('hidden'in document)return'hidden';for(var i=0;i<prefixes.length;i++){if(prefixes[i]+'Hidden'in document)methods.pauseInvisible.visProp=prefixes[i]+'Hidden';}if(methods.pauseInvisible.visProp){var evtname=methods.pauseInvisible.visProp.replace(/[H|h]idden/,'')+'visibilitychange';document.addEventListener(evtname,function(){if(methods.pauseInvisible.isHidden()){if(slider.startTimeout)clearTimeout(slider.startTimeout);//If clock is ticking, stop timer and prevent from starting while invisible
else slider.pause();//Or just pause
}else{if(slider.started)slider.play();//Initiated before, just play
else slider.vars.initDelay>0?setTimeout(slider.play,slider.vars.initDelay):slider.play();//Didn't init before: simply init or wait for it
}});}},isHidden:function isHidden(){return document[methods.pauseInvisible.visProp]||false;}},setToClearWatchedEvent:function setToClearWatchedEvent(){clearTimeout(watchedEventClearTimer);watchedEventClearTimer=setTimeout(function(){watchedEvent="";},3000);}};// public methods
slider.flexAnimate=function(target,pause,override,withSync,fromNav){if(!slider.vars.animationLoop&&target!==slider.currentSlide){slider.direction=target>slider.currentSlide?"next":"prev";}if(asNav&&slider.pagingCount===1)slider.direction=slider.currentItem<target?"next":"prev";if(!slider.animating&&(slider.canAdvance(target,fromNav)||override)&&slider.is(":visible")){if(asNav&&withSync){var master=$(slider.vars.asNavFor).data('flexslider');slider.atEnd=target===0||target===slider.count-1;master.flexAnimate(target,true,false,true,fromNav);slider.direction=slider.currentItem<target?"next":"prev";master.direction=slider.direction;if(Math.ceil((target+1)/slider.visible)-1!==slider.currentSlide&&target!==0){slider.currentItem=target;slider.slides.removeClass(namespace+"active-slide").eq(target).addClass(namespace+"active-slide");target=Math.floor(target/slider.visible);}else{slider.currentItem=target;slider.slides.removeClass(namespace+"active-slide").eq(target).addClass(namespace+"active-slide");return false;}}slider.animating=true;slider.animatingTo=target;// SLIDESHOW:
if(pause)slider.pause();// API: before() animation Callback
slider.vars.before(slider);// SYNC:
if(slider.syncExists&&!fromNav)methods.sync("animate");// CONTROLNAV
if(slider.vars.controlNav)methods.controlNav.active();// !CAROUSEL:
// CANDIDATE: slide active class (for add/remove slide)
if(!carousel)slider.slides.removeClass(namespace+'active-slide').eq(target).addClass(namespace+'active-slide');// INFINITE LOOP:
// CANDIDATE: atEnd
slider.atEnd=target===0||target===slider.last;// DIRECTIONNAV:
if(slider.vars.directionNav)methods.directionNav.update();if(target===slider.last){// API: end() of cycle Callback
slider.vars.end(slider);// SLIDESHOW && !INFINITE LOOP:
if(!slider.vars.animationLoop)slider.pause();}// SLIDE:
if(!fade){var dimension=vertical?slider.slides.filter(':first').height():slider.computedW,margin,slideString,calcNext;// INFINITE LOOP / REVERSE:
if(carousel){//margin = (slider.vars.itemWidth > slider.w) ? slider.vars.itemMargin * 2 : slider.vars.itemMargin;
margin=slider.vars.itemMargin;calcNext=(slider.itemW+margin)*slider.move*slider.animatingTo;slideString=calcNext>slider.limit&&slider.visible!==1?slider.limit:calcNext;}else if(slider.currentSlide===0&&target===slider.count-1&&slider.vars.animationLoop&&slider.direction!=="next"){slideString=reverse?(slider.count+slider.cloneOffset)*dimension:0;}else if(slider.currentSlide===slider.last&&target===0&&slider.vars.animationLoop&&slider.direction!=="prev"){slideString=reverse?0:(slider.count+1)*dimension;}else{slideString=reverse?(slider.count-1-target+slider.cloneOffset)*dimension:(target+slider.cloneOffset)*dimension;}slider.setProps(slideString,"",slider.vars.animationSpeed);if(slider.transitions){if(!slider.vars.animationLoop||!slider.atEnd){slider.animating=false;slider.currentSlide=slider.animatingTo;}// Unbind previous transitionEnd events and re-bind new transitionEnd event
slider.container.unbind("webkitTransitionEnd transitionend");slider.container.bind("webkitTransitionEnd transitionend",function(){clearTimeout(slider.ensureAnimationEnd);slider.wrapup(dimension);});// Insurance for the ever-so-fickle transitionEnd event
clearTimeout(slider.ensureAnimationEnd);slider.ensureAnimationEnd=setTimeout(function(){slider.wrapup(dimension);},slider.vars.animationSpeed+100);}else{slider.container.animate(slider.args,slider.vars.animationSpeed,slider.vars.easing,function(){slider.wrapup(dimension);});}}else{// FADE:
if(!touch){//slider.slides.eq(slider.currentSlide).fadeOut(slider.vars.animationSpeed, slider.vars.easing);
//slider.slides.eq(target).fadeIn(slider.vars.animationSpeed, slider.vars.easing, slider.wrapup);
slider.slides.eq(slider.currentSlide).css({"zIndex":1}).animate({"opacity":0},slider.vars.animationSpeed,slider.vars.easing);slider.slides.eq(target).css({"zIndex":2}).animate({"opacity":1},slider.vars.animationSpeed,slider.vars.easing,slider.wrapup);}else{slider.slides.eq(slider.currentSlide).css({"opacity":0,"zIndex":1});slider.slides.eq(target).css({"opacity":1,"zIndex":2});slider.wrapup(dimension);}}// SMOOTH HEIGHT:
if(slider.vars.smoothHeight)methods.smoothHeight(slider.vars.animationSpeed);}};slider.wrapup=function(dimension){// SLIDE:
if(!fade&&!carousel){if(slider.currentSlide===0&&slider.animatingTo===slider.last&&slider.vars.animationLoop){slider.setProps(dimension,"jumpEnd");}else if(slider.currentSlide===slider.last&&slider.animatingTo===0&&slider.vars.animationLoop){slider.setProps(dimension,"jumpStart");}}slider.animating=false;slider.currentSlide=slider.animatingTo;// API: after() animation Callback
slider.vars.after(slider);};// SLIDESHOW:
slider.animateSlides=function(){if(!slider.animating&&focused)slider.flexAnimate(slider.getTarget("next"));};// SLIDESHOW:
slider.pause=function(){clearInterval(slider.animatedSlides);slider.animatedSlides=null;slider.playing=false;// PAUSEPLAY:
if(slider.vars.pausePlay)methods.pausePlay.update("play");// SYNC:
if(slider.syncExists)methods.sync("pause");};// SLIDESHOW:
slider.play=function(){if(slider.playing)clearInterval(slider.animatedSlides);slider.animatedSlides=slider.animatedSlides||setInterval(slider.animateSlides,slider.vars.slideshowSpeed);slider.started=slider.playing=true;// PAUSEPLAY:
if(slider.vars.pausePlay)methods.pausePlay.update("pause");// SYNC:
if(slider.syncExists)methods.sync("play");};// STOP:
slider.stop=function(){slider.pause();slider.stopped=true;};slider.canAdvance=function(target,fromNav){// ASNAV:
var last=asNav?slider.pagingCount-1:slider.last;return fromNav?true:asNav&&slider.currentItem===slider.count-1&&target===0&&slider.direction==="prev"?true:asNav&&slider.currentItem===0&&target===slider.pagingCount-1&&slider.direction!=="next"?false:target===slider.currentSlide&&!asNav?false:slider.vars.animationLoop?true:slider.atEnd&&slider.currentSlide===0&&target===last&&slider.direction!=="next"?false:slider.atEnd&&slider.currentSlide===last&&target===0&&slider.direction==="next"?false:true;};slider.getTarget=function(dir){slider.direction=dir;if(dir==="next"){return slider.currentSlide===slider.last?0:slider.currentSlide+1;}else{return slider.currentSlide===0?slider.last:slider.currentSlide-1;}};// SLIDE:
slider.setProps=function(pos,special,dur){var target=function(){var posCheck=pos?pos:(slider.itemW+slider.vars.itemMargin)*slider.move*slider.animatingTo,posCalc=function(){if(carousel){return special==="setTouch"?pos:reverse&&slider.animatingTo===slider.last?0:reverse?slider.limit-(slider.itemW+slider.vars.itemMargin)*slider.move*slider.animatingTo:slider.animatingTo===slider.last?slider.limit:posCheck;}else{switch(special){case"setTotal":return reverse?(slider.count-1-slider.currentSlide+slider.cloneOffset)*pos:(slider.currentSlide+slider.cloneOffset)*pos;case"setTouch":return reverse?pos:pos;case"jumpEnd":return reverse?pos:slider.count*pos;case"jumpStart":return reverse?slider.count*pos:pos;default:return pos;}}}();return posCalc*-1+"px";}();if(slider.transitions){target=vertical?"translate3d(0,"+target+",0)":"translate3d("+target+",0,0)";dur=dur!==undefined?dur/1000+"s":"0s";slider.container.css("-"+slider.pfx+"-transition-duration",dur);slider.container.css("transition-duration",dur);}slider.args[slider.prop]=target;if(slider.transitions||dur===undefined)slider.container.css(slider.args);slider.container.css('transform',target);};slider.setup=function(type){// SLIDE:
if(!fade){var sliderOffset,arr;if(type==="init"){slider.viewport=$('<div class="'+namespace+'viewport"></div>').css({"overflow":"hidden","position":"relative"}).appendTo(slider).append(slider.container);// INFINITE LOOP:
slider.cloneCount=0;slider.cloneOffset=0;// REVERSE:
if(reverse){arr=$.makeArray(slider.slides).reverse();slider.slides=$(arr);slider.container.empty().append(slider.slides);}}// INFINITE LOOP && !CAROUSEL:
if(slider.vars.animationLoop&&!carousel){slider.cloneCount=2;slider.cloneOffset=1;// clear out old clones
if(type!=="init")slider.container.find('.clone').remove();slider.container.append(methods.uniqueID(slider.slides.first().clone().addClass('clone')).attr('aria-hidden','true')).prepend(methods.uniqueID(slider.slides.last().clone().addClass('clone')).attr('aria-hidden','true'));}slider.newSlides=$(slider.vars.selector,slider);sliderOffset=reverse?slider.count-1-slider.currentSlide+slider.cloneOffset:slider.currentSlide+slider.cloneOffset;// VERTICAL:
if(vertical&&!carousel){slider.container.height((slider.count+slider.cloneCount)*200+"%").css("position","absolute").width("100%");setTimeout(function(){slider.newSlides.css({"display":"block"});slider.doMath();slider.viewport.height(slider.h);slider.setProps(sliderOffset*slider.h,"init");},type==="init"?100:0);}else{slider.container.width((slider.count+slider.cloneCount)*200+"%");slider.setProps(sliderOffset*slider.computedW,"init");setTimeout(function(){slider.doMath();slider.newSlides.css({"width":slider.computedW,"float":"left","display":"block"});// SMOOTH HEIGHT:
if(slider.vars.smoothHeight)methods.smoothHeight();},type==="init"?100:0);}}else{// FADE:
slider.slides.css({"width":"100%","float":"left","marginRight":"-100%","position":"relative"});if(type==="init"){if(!touch){//slider.slides.eq(slider.currentSlide).fadeIn(slider.vars.animationSpeed, slider.vars.easing);
if(slider.vars.fadeFirstSlide==false){slider.slides.css({"opacity":0,"display":"block","zIndex":1}).eq(slider.currentSlide).css({"zIndex":2}).css({"opacity":1});}else{slider.slides.css({"opacity":0,"display":"block","zIndex":1}).eq(slider.currentSlide).css({"zIndex":2}).animate({"opacity":1},slider.vars.animationSpeed,slider.vars.easing);}}else{slider.slides.css({"opacity":0,"display":"block","webkitTransition":"opacity "+slider.vars.animationSpeed/1000+"s ease","zIndex":1}).eq(slider.currentSlide).css({"opacity":1,"zIndex":2});}}// SMOOTH HEIGHT:
if(slider.vars.smoothHeight)methods.smoothHeight();}// !CAROUSEL:
// CANDIDATE: active slide
if(!carousel)slider.slides.removeClass(namespace+"active-slide").eq(slider.currentSlide).addClass(namespace+"active-slide");//FlexSlider: init() Callback
slider.vars.init(slider);};slider.doMath=function(){var slide=slider.slides.first(),slideMargin=slider.vars.itemMargin,minItems=slider.vars.minItems,maxItems=slider.vars.maxItems;slider.w=slider.viewport===undefined?slider.width():slider.viewport.width();slider.h=slide.height();slider.boxPadding=slide.outerWidth()-slide.width();// CAROUSEL:
if(carousel){slider.itemT=slider.vars.itemWidth+slideMargin;slider.minW=minItems?minItems*slider.itemT:slider.w;slider.maxW=maxItems?maxItems*slider.itemT-slideMargin:slider.w;slider.itemW=slider.minW>slider.w?(slider.w-slideMargin*(minItems-1))/minItems:slider.maxW<slider.w?(slider.w-slideMargin*(maxItems-1))/maxItems:slider.vars.itemWidth>slider.w?slider.w:slider.vars.itemWidth;slider.visible=Math.floor(slider.w/slider.itemW);slider.move=slider.vars.move>0&&slider.vars.move<slider.visible?slider.vars.move:slider.visible;slider.pagingCount=Math.ceil((slider.count-slider.visible)/slider.move+1);slider.last=slider.pagingCount-1;slider.limit=slider.pagingCount===1?0:slider.vars.itemWidth>slider.w?slider.itemW*(slider.count-1)+slideMargin*(slider.count-1):(slider.itemW+slideMargin)*slider.count-slider.w-slideMargin;}else{slider.itemW=slider.w;slider.pagingCount=slider.count;slider.last=slider.count-1;}slider.computedW=slider.itemW-slider.boxPadding;};slider.update=function(pos,action){slider.doMath();// update currentSlide and slider.animatingTo if necessary
if(!carousel){if(pos<slider.currentSlide){slider.currentSlide+=1;}else if(pos<=slider.currentSlide&&pos!==0){slider.currentSlide-=1;}slider.animatingTo=slider.currentSlide;}// update controlNav
if(slider.vars.controlNav&&!slider.manualControls){if(action==="add"&&!carousel||slider.pagingCount>slider.controlNav.length){methods.controlNav.update("add");}else if(action==="remove"&&!carousel||slider.pagingCount<slider.controlNav.length){if(carousel&&slider.currentSlide>slider.last){slider.currentSlide-=1;slider.animatingTo-=1;}methods.controlNav.update("remove",slider.last);}}// update directionNav
if(slider.vars.directionNav)methods.directionNav.update();};slider.addSlide=function(obj,pos){var $obj=$(obj);slider.count+=1;slider.last=slider.count-1;// append new slide
if(vertical&&reverse){pos!==undefined?slider.slides.eq(slider.count-pos).after($obj):slider.container.prepend($obj);}else{pos!==undefined?slider.slides.eq(pos).before($obj):slider.container.append($obj);}// update currentSlide, animatingTo, controlNav, and directionNav
slider.update(pos,"add");// update slider.slides
slider.slides=$(slider.vars.selector+':not(.clone)',slider);// re-setup the slider to accomdate new slide
slider.setup();//FlexSlider: added() Callback
slider.vars.added(slider);};slider.removeSlide=function(obj){var pos=isNaN(obj)?slider.slides.index($(obj)):obj;// update count
slider.count-=1;slider.last=slider.count-1;// remove slide
if(isNaN(obj)){$(obj,slider.slides).remove();}else{vertical&&reverse?slider.slides.eq(slider.last).remove():slider.slides.eq(obj).remove();}// update currentSlide, animatingTo, controlNav, and directionNav
slider.doMath();slider.update(pos,"remove");// update slider.slides
slider.slides=$(slider.vars.selector+':not(.clone)',slider);// re-setup the slider to accomdate new slide
slider.setup();// FlexSlider: removed() Callback
slider.vars.removed(slider);};//FlexSlider: Initialize
methods.init();};// Ensure the slider isn't focussed if the window loses focus.
$(window).blur(function(e){focused=false;}).focus(function(e){focused=true;});//FlexSlider: Default Settings
$.flexslider.defaults={namespace:"flex-",//{NEW} String: Prefix string attached to the class of every element generated by the plugin
selector:".slides > li",//{NEW} Selector: Must match a simple pattern. '{container} > {slide}' -- Ignore pattern at your own peril
animation:"fade",//String: Select your animation type, "fade" or "slide"
easing:"swing",//{NEW} String: Determines the easing method used in jQuery transitions. jQuery easing plugin is supported!
direction:"horizontal",//String: Select the sliding direction, "horizontal" or "vertical"
reverse:false,//{NEW} Boolean: Reverse the animation direction
animationLoop:true,//Boolean: Should the animation loop? If false, directionNav will received "disable" classes at either end
smoothHeight:false,//{NEW} Boolean: Allow height of the slider to animate smoothly in horizontal mode
startAt:0,//Integer: The slide that the slider should start on. Array notation (0 = first slide)
slideshow:true,//Boolean: Animate slider automatically
slideshowSpeed:7000,//Integer: Set the speed of the slideshow cycling, in milliseconds
animationSpeed:600,//Integer: Set the speed of animations, in milliseconds
initDelay:0,//{NEW} Integer: Set an initialization delay, in milliseconds
randomize:false,//Boolean: Randomize slide order
fadeFirstSlide:true,//Boolean: Fade in the first slide when animation type is "fade"
thumbCaptions:false,//Boolean: Whether or not to put captions on thumbnails when using the "thumbnails" controlNav.
// Usability features
pauseOnAction:true,//Boolean: Pause the slideshow when interacting with control elements, highly recommended.
pauseOnHover:false,//Boolean: Pause the slideshow when hovering over slider, then resume when no longer hovering
pauseInvisible:true,//{NEW} Boolean: Pause the slideshow when tab is invisible, resume when visible. Provides better UX, lower CPU usage.
useCSS:true,//{NEW} Boolean: Slider will use CSS3 transitions if available
touch:true,//{NEW} Boolean: Allow touch swipe navigation of the slider on touch-enabled devices
video:false,//{NEW} Boolean: If using video in the slider, will prevent CSS3 3D Transforms to avoid graphical glitches
// Primary Controls
controlNav:true,//Boolean: Create navigation for paging control of each slide? Note: Leave true for manualControls usage
directionNav:true,//Boolean: Create navigation for previous/next navigation? (true/false)
prevText:"Previous",//String: Set the text for the "previous" directionNav item
nextText:"Next",//String: Set the text for the "next" directionNav item
// Secondary Navigation
keyboard:true,//Boolean: Allow slider navigating via keyboard left/right keys
multipleKeyboard:false,//{NEW} Boolean: Allow keyboard navigation to affect multiple sliders. Default behavior cuts out keyboard navigation with more than one slider present.
mousewheel:false,//{UPDATED} Boolean: Requires jquery.mousewheel.js (https://github.com/brandonaaron/jquery-mousewheel) - Allows slider navigating via mousewheel
pausePlay:false,//Boolean: Create pause/play dynamic element
pauseText:"Pause",//String: Set the text for the "pause" pausePlay item
playText:"Play",//String: Set the text for the "play" pausePlay item
// Special properties
controlsContainer:"",//{UPDATED} jQuery Object/Selector: Declare which container the navigation elements should be appended too. Default container is the FlexSlider element. Example use would be $(".flexslider-container"). Property is ignored if given element is not found.
manualControls:"",//{UPDATED} jQuery Object/Selector: Declare custom control navigation. Examples would be $(".flex-control-nav li") or "#tabs-nav li img", etc. The number of elements in your controlNav should match the number of slides/tabs.
sync:"",//{NEW} Selector: Mirror the actions performed on this slider with another slider. Use with care.
asNavFor:"",//{NEW} Selector: Internal property exposed for turning the slider into a thumbnail navigation for another slider
// Carousel Options
itemWidth:0,//{NEW} Integer: Box-model width of individual carousel items, including horizontal borders and padding.
itemMargin:0,//{NEW} Integer: Margin between carousel items.
minItems:1,//{NEW} Integer: Minimum number of carousel items that should be visible. Items will resize fluidly when below this.
maxItems:0,//{NEW} Integer: Maxmimum number of carousel items that should be visible. Items will resize fluidly when above this limit.
move:0,//{NEW} Integer: Number of carousel items that should move on animation. If 0, slider will move all visible items.
allowOneSlide:true,//{NEW} Boolean: Whether or not to allow a slider comprised of a single slide
// Callback API
start:function start(){},//Callback: function(slider) - Fires when the slider loads the first slide
before:function before(){},//Callback: function(slider) - Fires asynchronously with each slider animation
after:function after(){},//Callback: function(slider) - Fires after each slider animation completes
end:function end(){},//Callback: function(slider) - Fires when the slider reaches the last slide (asynchronous)
added:function added(){},//{NEW} Callback: function(slider) - Fires after a slide is added
removed:function removed(){},//{NEW} Callback: function(slider) - Fires after a slide is removed
init:function init(){}//{NEW} Callback: function(slider) - Fires after the slider is initially setup
};//FlexSlider: Plugin Function
$.fn.flexslider=function(options){if(options===undefined)options={};if((typeof options==="undefined"?"undefined":_typeof(options))==="object"){return this.each(function(){var $this=$(this),selector=options.selector?options.selector:".slides > li",$slides=$this.find(selector);if($slides.length===1&&options.allowOneSlide===true||$slides.length===0){$slides.fadeIn(400);if(options.start)options.start($this);}else if($this.data('flexslider')===undefined){new $.flexslider(this,options);}});}else{// Helper strings to quickly perform functions on the slider
var $slider=$(this).data('flexslider');switch(options){case"play":$slider.play();break;case"pause":$slider.pause();break;case"stop":$slider.stop();break;case"next":$slider.flexAnimate($slider.getTarget("next"),true);break;case"prev":case"previous":$slider.flexAnimate($slider.getTarget("prev"),true);break;default:if(typeof options==="number")$slider.flexAnimate(options,true);}}};})(jQuery);/*! Magnific Popup - v0.9.9 - 2013-12-27
* http://dimsemenov.com/plugins/magnific-popup/
* Copyright (c) 2013 Dmitry Semenov; */;(function($){/*>>core*//**
 *
 * Magnific Popup Core JS file
 *
 *//**
 * Private static constants
 */var CLOSE_EVENT='Close',BEFORE_CLOSE_EVENT='BeforeClose',AFTER_CLOSE_EVENT='AfterClose',BEFORE_APPEND_EVENT='BeforeAppend',MARKUP_PARSE_EVENT='MarkupParse',OPEN_EVENT='Open',CHANGE_EVENT='Change',NS='mfp',EVENT_NS='.'+NS,READY_CLASS='mfp-ready',REMOVING_CLASS='mfp-removing',PREVENT_CLOSE_CLASS='mfp-prevent-close';/**
 * Private vars
 */var mfp,// As we have only one instance of MagnificPopup object, we define it locally to not to use 'this'
MagnificPopup=function MagnificPopup(){},_isJQ=!!window.jQuery,_prevStatus,_window=$(window),_body,_document,_prevContentType,_wrapClasses,_currPopupType;/**
 * Private functions
 */var _mfpOn=function _mfpOn(name,f){mfp.ev.on(NS+name+EVENT_NS,f);},_getEl=function _getEl(className,appendTo,html,raw){var el=document.createElement('div');el.className='mfp-'+className;if(html){el.innerHTML=html;}if(!raw){el=$(el);if(appendTo){el.appendTo(appendTo);}}else if(appendTo){appendTo.appendChild(el);}return el;},_mfpTrigger=function _mfpTrigger(e,data){mfp.ev.triggerHandler(NS+e,data);if(mfp.st.callbacks){// converts "mfpEventName" to "eventName" callback and triggers it if it's present
e=e.charAt(0).toLowerCase()+e.slice(1);if(mfp.st.callbacks[e]){mfp.st.callbacks[e].apply(mfp,$.isArray(data)?data:[data]);}}},_getCloseBtn=function _getCloseBtn(type){if(type!==_currPopupType||!mfp.currTemplate.closeBtn){mfp.currTemplate.closeBtn=$(mfp.st.closeMarkup.replace('%title%',mfp.st.tClose));_currPopupType=type;}return mfp.currTemplate.closeBtn;},// Initialize Magnific Popup only when called at least once
_checkInstance=function _checkInstance(){if(!$.magnificPopup.instance){mfp=new MagnificPopup();mfp.init();$.magnificPopup.instance=mfp;}},// CSS transition detection, http://stackoverflow.com/questions/7264899/detect-css-transitions-using-javascript-and-without-modernizr
supportsTransitions=function supportsTransitions(){var s=document.createElement('p').style,// 's' for style. better to create an element if body yet to exist
v=['ms','O','Moz','Webkit'];// 'v' for vendor
if(s['transition']!==undefined){return true;}while(v.length){if(v.pop()+'Transition'in s){return true;}}return false;};/**
 * Public functions
 */MagnificPopup.prototype={constructor:MagnificPopup,/**
	 * Initializes Magnific Popup plugin.
	 * This function is triggered only once when $.fn.magnificPopup or $.magnificPopup is executed
	 */init:function init(){var appVersion=navigator.appVersion;mfp.isIE7=appVersion.indexOf("MSIE 7.")!==-1;mfp.isIE8=appVersion.indexOf("MSIE 8.")!==-1;mfp.isLowIE=mfp.isIE7||mfp.isIE8;mfp.isAndroid=/android/gi.test(appVersion);mfp.isIOS=/iphone|ipad|ipod/gi.test(appVersion);mfp.supportsTransition=supportsTransitions();// We disable fixed positioned lightbox on devices that don't handle it nicely.
// If you know a better way of detecting this - let me know.
mfp.probablyMobile=mfp.isAndroid||mfp.isIOS||/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent);_document=$(document);mfp.popupsCache={};},/**
	 * Opens popup
	 * @param  data [description]
	 */open:function open(data){if(!_body){_body=$(document.body);}var i;if(data.isObj===false){// convert jQuery collection to array to avoid conflicts later
mfp.items=data.items.toArray();mfp.index=0;var items=data.items,item;for(i=0;i<items.length;i++){item=items[i];if(item.parsed){item=item.el[0];}if(item===data.el[0]){mfp.index=i;break;}}}else{mfp.items=$.isArray(data.items)?data.items:[data.items];mfp.index=data.index||0;}// if popup is already opened - we just update the content
if(mfp.isOpen){mfp.updateItemHTML();return;}mfp.types=[];_wrapClasses='';if(data.mainEl&&data.mainEl.length){mfp.ev=data.mainEl.eq(0);}else{mfp.ev=_document;}if(data.key){if(!mfp.popupsCache[data.key]){mfp.popupsCache[data.key]={};}mfp.currTemplate=mfp.popupsCache[data.key];}else{mfp.currTemplate={};}mfp.st=$.extend(true,{},$.magnificPopup.defaults,data);mfp.fixedContentPos=mfp.st.fixedContentPos==='auto'?!mfp.probablyMobile:mfp.st.fixedContentPos;if(mfp.st.modal){mfp.st.closeOnContentClick=false;mfp.st.closeOnBgClick=false;mfp.st.showCloseBtn=false;mfp.st.enableEscapeKey=false;}// Building markup
// main containers are created only once
if(!mfp.bgOverlay){// Dark overlay
mfp.bgOverlay=_getEl('bg').on('click'+EVENT_NS,function(){mfp.close();});mfp.wrap=_getEl('wrap').attr('tabindex',-1).on('click'+EVENT_NS,function(e){if(mfp._checkIfClose(e.target)){mfp.close();}});mfp.container=_getEl('container',mfp.wrap);}mfp.contentContainer=_getEl('content');if(mfp.st.preloader){mfp.preloader=_getEl('preloader',mfp.container,mfp.st.tLoading);}// Initializing modules
var modules=$.magnificPopup.modules;for(i=0;i<modules.length;i++){var n=modules[i];n=n.charAt(0).toUpperCase()+n.slice(1);mfp['init'+n].call(mfp);}_mfpTrigger('BeforeOpen');if(mfp.st.showCloseBtn){// Close button
if(!mfp.st.closeBtnInside){mfp.wrap.append(_getCloseBtn());}else{_mfpOn(MARKUP_PARSE_EVENT,function(e,template,values,item){values.close_replaceWith=_getCloseBtn(item.type);});_wrapClasses+=' mfp-close-btn-in';}}if(mfp.st.alignTop){_wrapClasses+=' mfp-align-top';}if(mfp.fixedContentPos){mfp.wrap.css({overflow:mfp.st.overflowY,overflowX:'hidden',overflowY:mfp.st.overflowY});}else{mfp.wrap.css({top:_window.scrollTop(),position:'absolute'});}if(mfp.st.fixedBgPos===false||mfp.st.fixedBgPos==='auto'&&!mfp.fixedContentPos){mfp.bgOverlay.css({height:_document.height(),position:'absolute'});}if(mfp.st.enableEscapeKey){// Close on ESC key
_document.on('keyup'+EVENT_NS,function(e){if(e.keyCode===27){mfp.close();}});}_window.on('resize'+EVENT_NS,function(){mfp.updateSize();});if(!mfp.st.closeOnContentClick){_wrapClasses+=' mfp-auto-cursor';}if(_wrapClasses)mfp.wrap.addClass(_wrapClasses);// this triggers recalculation of layout, so we get it once to not to trigger twice
var windowHeight=mfp.wH=_window.height();var windowStyles={};if(mfp.fixedContentPos){if(mfp._hasScrollBar(windowHeight)){var s=mfp._getScrollbarSize();if(s){windowStyles.marginRight=s;}}}if(mfp.fixedContentPos){if(!mfp.isIE7){windowStyles.overflow='hidden';}else{// ie7 double-scroll bug
$('body, html').css('overflow','hidden');}}var classesToadd=mfp.st.mainClass;if(mfp.isIE7){classesToadd+=' mfp-ie7';}if(classesToadd){mfp._addClassToMFP(classesToadd);}// add content
mfp.updateItemHTML();_mfpTrigger('BuildControls');// remove scrollbar, add margin e.t.c
$('html').css(windowStyles);// add everything to DOM
mfp.bgOverlay.add(mfp.wrap).prependTo(mfp.st.prependTo||_body);// Save last focused element
mfp._lastFocusedEl=document.activeElement;// Wait for next cycle to allow CSS transition
setTimeout(function(){if(mfp.content){mfp._addClassToMFP(READY_CLASS);mfp._setFocus();}else{// if content is not defined (not loaded e.t.c) we add class only for BG
mfp.bgOverlay.addClass(READY_CLASS);}// Trap the focus in popup
_document.on('focusin'+EVENT_NS,mfp._onFocusIn);},16);mfp.isOpen=true;mfp.updateSize(windowHeight);_mfpTrigger(OPEN_EVENT);return data;},/**
	 * Closes the popup
	 */close:function close(){if(!mfp.isOpen)return;_mfpTrigger(BEFORE_CLOSE_EVENT);mfp.isOpen=false;// for CSS3 animation
if(mfp.st.removalDelay&&!mfp.isLowIE&&mfp.supportsTransition){mfp._addClassToMFP(REMOVING_CLASS);setTimeout(function(){mfp._close();},mfp.st.removalDelay);}else{mfp._close();}},/**
	 * Helper for close() function
	 */_close:function _close(){_mfpTrigger(CLOSE_EVENT);var classesToRemove=REMOVING_CLASS+' '+READY_CLASS+' ';mfp.bgOverlay.detach();mfp.wrap.detach();mfp.container.empty();if(mfp.st.mainClass){classesToRemove+=mfp.st.mainClass+' ';}mfp._removeClassFromMFP(classesToRemove);if(mfp.fixedContentPos){var windowStyles={marginRight:''};if(mfp.isIE7){$('body, html').css('overflow','');}else{windowStyles.overflow='';}$('html').css(windowStyles);}_document.off('keyup'+EVENT_NS+' focusin'+EVENT_NS);mfp.ev.off(EVENT_NS);// clean up DOM elements that aren't removed
mfp.wrap.attr('class','mfp-wrap').removeAttr('style');mfp.bgOverlay.attr('class','mfp-bg');mfp.container.attr('class','mfp-container');// remove close button from target element
if(mfp.st.showCloseBtn&&(!mfp.st.closeBtnInside||mfp.currTemplate[mfp.currItem.type]===true)){if(mfp.currTemplate.closeBtn)mfp.currTemplate.closeBtn.detach();}if(mfp._lastFocusedEl){$(mfp._lastFocusedEl).focus();// put tab focus back
}mfp.currItem=null;mfp.content=null;mfp.currTemplate=null;mfp.prevHeight=0;_mfpTrigger(AFTER_CLOSE_EVENT);},updateSize:function updateSize(winHeight){if(mfp.isIOS){// fixes iOS nav bars https://github.com/dimsemenov/Magnific-Popup/issues/2
var zoomLevel=document.documentElement.clientWidth/window.innerWidth;var height=window.innerHeight*zoomLevel;mfp.wrap.css('height',height);mfp.wH=height;}else{mfp.wH=winHeight||_window.height();}// Fixes #84: popup incorrectly positioned with position:relative on body
if(!mfp.fixedContentPos){mfp.wrap.css('height',mfp.wH);}_mfpTrigger('Resize');},/**
	 * Set content of popup based on current index
	 */updateItemHTML:function updateItemHTML(){var item=mfp.items[mfp.index];// Detach and perform modifications
mfp.contentContainer.detach();if(mfp.content)mfp.content.detach();if(!item.parsed){item=mfp.parseEl(mfp.index);}var type=item.type;_mfpTrigger('BeforeChange',[mfp.currItem?mfp.currItem.type:'',type]);// BeforeChange event works like so:
// _mfpOn('BeforeChange', function(e, prevType, newType) { });
mfp.currItem=item;if(!mfp.currTemplate[type]){var markup=mfp.st[type]?mfp.st[type].markup:false;// allows to modify markup
_mfpTrigger('FirstMarkupParse',markup);if(markup){mfp.currTemplate[type]=$(markup);}else{// if there is no markup found we just define that template is parsed
mfp.currTemplate[type]=true;}}if(_prevContentType&&_prevContentType!==item.type){mfp.container.removeClass('mfp-'+_prevContentType+'-holder');}var newContent=mfp['get'+type.charAt(0).toUpperCase()+type.slice(1)](item,mfp.currTemplate[type]);mfp.appendContent(newContent,type);item.preloaded=true;_mfpTrigger(CHANGE_EVENT,item);_prevContentType=item.type;// Append container back after its content changed
mfp.container.prepend(mfp.contentContainer);_mfpTrigger('AfterChange');},/**
	 * Set HTML content of popup
	 */appendContent:function appendContent(newContent,type){mfp.content=newContent;if(newContent){if(mfp.st.showCloseBtn&&mfp.st.closeBtnInside&&mfp.currTemplate[type]===true){// if there is no markup, we just append close button element inside
if(!mfp.content.find('.mfp-close').length){mfp.content.append(_getCloseBtn());}}else{mfp.content=newContent;}}else{mfp.content='';}_mfpTrigger(BEFORE_APPEND_EVENT);mfp.container.addClass('mfp-'+type+'-holder');mfp.contentContainer.append(mfp.content);},/**
	 * Creates Magnific Popup data object based on given data
	 * @param  {int} index Index of item to parse
	 */parseEl:function parseEl(index){var item=mfp.items[index],type;if(item.tagName){item={el:$(item)};}else{type=item.type;item={data:item,src:item.src};}if(item.el){var types=mfp.types;// check for 'mfp-TYPE' class
for(var i=0;i<types.length;i++){if(item.el.hasClass('mfp-'+types[i])){type=types[i];break;}}item.src=item.el.attr('data-mfp-src');if(!item.src){item.src=item.el.attr('href');}}item.type=type||mfp.st.type||'inline';item.index=index;item.parsed=true;mfp.items[index]=item;_mfpTrigger('ElementParse',item);return mfp.items[index];},/**
	 * Initializes single popup or a group of popups
	 */addGroup:function addGroup(el,options){var eHandler=function eHandler(e){e.mfpEl=this;mfp._openClick(e,el,options);};if(!options){options={};}var eName='click.magnificPopup';options.mainEl=el;if(options.items){options.isObj=true;el.off(eName).on(eName,eHandler);}else{options.isObj=false;if(options.delegate){el.off(eName).on(eName,options.delegate,eHandler);}else{options.items=el;el.off(eName).on(eName,eHandler);}}},_openClick:function _openClick(e,el,options){var midClick=options.midClick!==undefined?options.midClick:$.magnificPopup.defaults.midClick;if(!midClick&&(e.which===2||e.ctrlKey||e.metaKey)){return;}var disableOn=options.disableOn!==undefined?options.disableOn:$.magnificPopup.defaults.disableOn;if(disableOn){if($.isFunction(disableOn)){if(!disableOn.call(mfp)){return true;}}else{// else it's number
if(_window.width()<disableOn){return true;}}}if(e.type){e.preventDefault();// This will prevent popup from closing if element is inside and popup is already opened
if(mfp.isOpen){e.stopPropagation();}}options.el=$(e.mfpEl);if(options.delegate){options.items=el.find(options.delegate);}mfp.open(options);},/**
	 * Updates text on preloader
	 */updateStatus:function updateStatus(status,text){if(mfp.preloader){if(_prevStatus!==status){mfp.container.removeClass('mfp-s-'+_prevStatus);}if(!text&&status==='loading'){text=mfp.st.tLoading;}var data={status:status,text:text};// allows to modify status
_mfpTrigger('UpdateStatus',data);status=data.status;text=data.text;mfp.preloader.html(text);mfp.preloader.find('a').on('click',function(e){e.stopImmediatePropagation();});mfp.container.addClass('mfp-s-'+status);_prevStatus=status;}},/*
		"Private" helpers that aren't private at all
	 */// Check to close popup or not
// "target" is an element that was clicked
_checkIfClose:function _checkIfClose(target){if($(target).hasClass(PREVENT_CLOSE_CLASS)){return;}var closeOnContent=mfp.st.closeOnContentClick;var closeOnBg=mfp.st.closeOnBgClick;if(closeOnContent&&closeOnBg){return true;}else{// We close the popup if click is on close button or on preloader. Or if there is no content.
if(!mfp.content||$(target).hasClass('mfp-close')||mfp.preloader&&target===mfp.preloader[0]){return true;}// if click is outside the content
if(target!==mfp.content[0]&&!$.contains(mfp.content[0],target)){if(closeOnBg){// last check, if the clicked element is in DOM, (in case it's removed onclick)
if($.contains(document,target)){return true;}}}else if(closeOnContent){return true;}}return false;},_addClassToMFP:function _addClassToMFP(cName){mfp.bgOverlay.addClass(cName);mfp.wrap.addClass(cName);},_removeClassFromMFP:function _removeClassFromMFP(cName){this.bgOverlay.removeClass(cName);mfp.wrap.removeClass(cName);},_hasScrollBar:function _hasScrollBar(winHeight){return(mfp.isIE7?_document.height():document.body.scrollHeight)>(winHeight||_window.height());},_setFocus:function _setFocus(){(mfp.st.focus?mfp.content.find(mfp.st.focus).eq(0):mfp.wrap).focus();},_onFocusIn:function _onFocusIn(e){if(e.target!==mfp.wrap[0]&&!$.contains(mfp.wrap[0],e.target)){mfp._setFocus();return false;}},_parseMarkup:function _parseMarkup(template,values,item){var arr;if(item.data){values=$.extend(item.data,values);}_mfpTrigger(MARKUP_PARSE_EVENT,[template,values,item]);$.each(values,function(key,value){if(value===undefined||value===false){return true;}arr=key.split('_');if(arr.length>1){var el=template.find(EVENT_NS+'-'+arr[0]);if(el.length>0){var attr=arr[1];if(attr==='replaceWith'){if(el[0]!==value[0]){el.replaceWith(value);}}else if(attr==='img'){if(el.is('img')){el.attr('src',value);}else{el.replaceWith('<img src="'+value+'" class="'+el.attr('class')+'" />');}}else{el.attr(arr[1],value);}}}else{template.find(EVENT_NS+'-'+key).html(value);}});},_getScrollbarSize:function _getScrollbarSize(){// thx David
if(mfp.scrollbarSize===undefined){var scrollDiv=document.createElement("div");scrollDiv.id="mfp-sbm";scrollDiv.style.cssText='width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;';document.body.appendChild(scrollDiv);mfp.scrollbarSize=scrollDiv.offsetWidth-scrollDiv.clientWidth;document.body.removeChild(scrollDiv);}return mfp.scrollbarSize;}};/* MagnificPopup core prototype end *//**
 * Public static functions
 */$.magnificPopup={instance:null,proto:MagnificPopup.prototype,modules:[],open:function open(options,index){_checkInstance();if(!options){options={};}else{options=$.extend(true,{},options);}options.isObj=true;options.index=index||0;return this.instance.open(options);},close:function close(){return $.magnificPopup.instance&&$.magnificPopup.instance.close();},registerModule:function registerModule(name,module){if(module.options){$.magnificPopup.defaults[name]=module.options;}$.extend(this.proto,module.proto);this.modules.push(name);},defaults:{// Info about options is in docs:
// http://dimsemenov.com/plugins/magnific-popup/documentation.html#options
disableOn:0,key:null,midClick:false,mainClass:'',preloader:true,focus:'',// CSS selector of input to focus after popup is opened
closeOnContentClick:false,closeOnBgClick:true,closeBtnInside:true,showCloseBtn:true,enableEscapeKey:true,modal:false,alignTop:false,removalDelay:0,prependTo:null,fixedContentPos:'auto',fixedBgPos:'auto',overflowY:'auto',closeMarkup:'<button title="%title%" type="button" class="mfp-close">&times;</button>',tClose:'Close (Esc)',tLoading:'Loading...'}};$.fn.magnificPopup=function(options){_checkInstance();var jqEl=$(this);// We call some API method of first param is a string
if(typeof options==="string"){if(options==='open'){var items,itemOpts=_isJQ?jqEl.data('magnificPopup'):jqEl[0].magnificPopup,index=parseInt(arguments[1],10)||0;if(itemOpts.items){items=itemOpts.items[index];}else{items=jqEl;if(itemOpts.delegate){items=items.find(itemOpts.delegate);}items=items.eq(index);}mfp._openClick({mfpEl:items},jqEl,itemOpts);}else{if(mfp.isOpen)mfp[options].apply(mfp,Array.prototype.slice.call(arguments,1));}}else{// clone options obj
options=$.extend(true,{},options);/*
		 * As Zepto doesn't support .data() method for objects
		 * and it works only in normal browsers
		 * we assign "options" object directly to the DOM element. FTW!
		 */if(_isJQ){jqEl.data('magnificPopup',options);}else{jqEl[0].magnificPopup=options;}mfp.addGroup(jqEl,options);}return jqEl;};//Quick benchmark
/*
var start = performance.now(),
	i,
	rounds = 1000;

for(i = 0; i < rounds; i++) {

}
console.log('Test #1:', performance.now() - start);

start = performance.now();
for(i = 0; i < rounds; i++) {

}
console.log('Test #2:', performance.now() - start);
*//*>>core*//*>>inline*/var INLINE_NS='inline',_hiddenClass,_inlinePlaceholder,_lastInlineElement,_putInlineElementsBack=function _putInlineElementsBack(){if(_lastInlineElement){_inlinePlaceholder.after(_lastInlineElement.addClass(_hiddenClass)).detach();_lastInlineElement=null;}};$.magnificPopup.registerModule(INLINE_NS,{options:{hiddenClass:'hide',// will be appended with `mfp-` prefix
markup:'',tNotFound:'Content not found'},proto:{initInline:function initInline(){mfp.types.push(INLINE_NS);_mfpOn(CLOSE_EVENT+'.'+INLINE_NS,function(){_putInlineElementsBack();});},getInline:function getInline(item,template){_putInlineElementsBack();if(item.src){var inlineSt=mfp.st.inline,el=$(item.src);if(el.length){// If target element has parent - we replace it with placeholder and put it back after popup is closed
var parent=el[0].parentNode;if(parent&&parent.tagName){if(!_inlinePlaceholder){_hiddenClass=inlineSt.hiddenClass;_inlinePlaceholder=_getEl(_hiddenClass);_hiddenClass='mfp-'+_hiddenClass;}// replace target inline element with placeholder
_lastInlineElement=el.after(_inlinePlaceholder).detach().removeClass(_hiddenClass);}mfp.updateStatus('ready');}else{mfp.updateStatus('error',inlineSt.tNotFound);el=$('<div>');}item.inlineElement=el;return el;}mfp.updateStatus('ready');mfp._parseMarkup(template,{},item);return template;}}});/*>>inline*//*>>ajax*/var AJAX_NS='ajax',_ajaxCur,_removeAjaxCursor=function _removeAjaxCursor(){if(_ajaxCur){_body.removeClass(_ajaxCur);}},_destroyAjaxRequest=function _destroyAjaxRequest(){_removeAjaxCursor();if(mfp.req){mfp.req.abort();}};$.magnificPopup.registerModule(AJAX_NS,{options:{settings:null,cursor:'mfp-ajax-cur',tError:'<a href="%url%">The content</a> could not be loaded.'},proto:{initAjax:function initAjax(){mfp.types.push(AJAX_NS);_ajaxCur=mfp.st.ajax.cursor;_mfpOn(CLOSE_EVENT+'.'+AJAX_NS,_destroyAjaxRequest);_mfpOn('BeforeChange.'+AJAX_NS,_destroyAjaxRequest);},getAjax:function getAjax(item){if(_ajaxCur)_body.addClass(_ajaxCur);mfp.updateStatus('loading');var opts=$.extend({url:item.src,success:function success(data,textStatus,jqXHR){var temp={data:data,xhr:jqXHR};_mfpTrigger('ParseAjax',temp);mfp.appendContent($(temp.data),AJAX_NS);item.finished=true;_removeAjaxCursor();mfp._setFocus();setTimeout(function(){mfp.wrap.addClass(READY_CLASS);},16);mfp.updateStatus('ready');_mfpTrigger('AjaxContentAdded');},error:function error(){_removeAjaxCursor();item.finished=item.loadError=true;mfp.updateStatus('error',mfp.st.ajax.tError.replace('%url%',item.src));}},mfp.st.ajax.settings);mfp.req=$.ajax(opts);return'';}}});/*>>ajax*//*>>image*/var _imgInterval,_getTitle=function _getTitle(item){if(item.data&&item.data.title!==undefined)return item.data.title;var src=mfp.st.image.titleSrc;if(src){if($.isFunction(src)){return src.call(mfp,item);}else if(item.el){return item.el.attr(src)||'';}}return'';};$.magnificPopup.registerModule('image',{options:{markup:'<div class="mfp-figure">'+'<div class="mfp-close"></div>'+'<figure>'+'<div class="mfp-img"></div>'+'<figcaption>'+'<div class="mfp-bottom-bar">'+'<div class="mfp-title"></div>'+'<div class="mfp-counter"></div>'+'</div>'+'</figcaption>'+'</figure>'+'</div>',cursor:'mfp-zoom-out-cur',titleSrc:'title',verticalFit:true,tError:'<a href="%url%">The image</a> could not be loaded.'},proto:{initImage:function initImage(){var imgSt=mfp.st.image,ns='.image';mfp.types.push('image');_mfpOn(OPEN_EVENT+ns,function(){if(mfp.currItem.type==='image'&&imgSt.cursor){_body.addClass(imgSt.cursor);}});_mfpOn(CLOSE_EVENT+ns,function(){if(imgSt.cursor){_body.removeClass(imgSt.cursor);}_window.off('resize'+EVENT_NS);});_mfpOn('Resize'+ns,mfp.resizeImage);if(mfp.isLowIE){_mfpOn('AfterChange',mfp.resizeImage);}},resizeImage:function resizeImage(){var item=mfp.currItem;if(!item||!item.img)return;if(mfp.st.image.verticalFit){var decr=0;// fix box-sizing in ie7/8
if(mfp.isLowIE){decr=parseInt(item.img.css('padding-top'),10)+parseInt(item.img.css('padding-bottom'),10);}item.img.css('max-height',mfp.wH-decr);}},_onImageHasSize:function _onImageHasSize(item){if(item.img){item.hasSize=true;if(_imgInterval){clearInterval(_imgInterval);}item.isCheckingImgSize=false;_mfpTrigger('ImageHasSize',item);if(item.imgHidden){if(mfp.content)mfp.content.removeClass('mfp-loading');item.imgHidden=false;}}},/**
		 * Function that loops until the image has size to display elements that rely on it asap
		 */findImageSize:function findImageSize(item){var counter=0,img=item.img[0],mfpSetInterval=function mfpSetInterval(delay){if(_imgInterval){clearInterval(_imgInterval);}// decelerating interval that checks for size of an image
_imgInterval=setInterval(function(){if(img.naturalWidth>0){mfp._onImageHasSize(item);return;}if(counter>200){clearInterval(_imgInterval);}counter++;if(counter===3){mfpSetInterval(10);}else if(counter===40){mfpSetInterval(50);}else if(counter===100){mfpSetInterval(500);}},delay);};mfpSetInterval(1);},getImage:function getImage(item,template){var guard=0,// image load complete handler
onLoadComplete=function onLoadComplete(){if(item){if(item.img[0].complete){item.img.off('.mfploader');if(item===mfp.currItem){mfp._onImageHasSize(item);mfp.updateStatus('ready');}item.hasSize=true;item.loaded=true;_mfpTrigger('ImageLoadComplete');}else{// if image complete check fails 200 times (20 sec), we assume that there was an error.
guard++;if(guard<200){setTimeout(onLoadComplete,100);}else{onLoadError();}}}},// image error handler
onLoadError=function onLoadError(){if(item){item.img.off('.mfploader');if(item===mfp.currItem){mfp._onImageHasSize(item);mfp.updateStatus('error',imgSt.tError.replace('%url%',item.src));}item.hasSize=true;item.loaded=true;item.loadError=true;}},imgSt=mfp.st.image;var el=template.find('.mfp-img');if(el.length){var img=document.createElement('img');img.className='mfp-img';item.img=$(img).on('load.mfploader',onLoadComplete).on('error.mfploader',onLoadError);img.src=item.src;// without clone() "error" event is not firing when IMG is replaced by new IMG
// TODO: find a way to avoid such cloning
if(el.is('img')){item.img=item.img.clone();}img=item.img[0];if(img.naturalWidth>0){item.hasSize=true;}else if(!img.width){item.hasSize=false;}}mfp._parseMarkup(template,{title:_getTitle(item),img_replaceWith:item.img},item);mfp.resizeImage();if(item.hasSize){if(_imgInterval)clearInterval(_imgInterval);if(item.loadError){template.addClass('mfp-loading');mfp.updateStatus('error',imgSt.tError.replace('%url%',item.src));}else{template.removeClass('mfp-loading');mfp.updateStatus('ready');}return template;}mfp.updateStatus('loading');item.loading=true;if(!item.hasSize){item.imgHidden=true;template.addClass('mfp-loading');mfp.findImageSize(item);}return template;}}});/*>>image*//*>>zoom*/var hasMozTransform,getHasMozTransform=function getHasMozTransform(){if(hasMozTransform===undefined){hasMozTransform=document.createElement('p').style.MozTransform!==undefined;}return hasMozTransform;};$.magnificPopup.registerModule('zoom',{options:{enabled:false,easing:'ease-in-out',duration:300,opener:function opener(element){return element.is('img')?element:element.find('img');}},proto:{initZoom:function initZoom(){var zoomSt=mfp.st.zoom,ns='.zoom',image;if(!zoomSt.enabled||!mfp.supportsTransition){return;}var duration=zoomSt.duration,getElToAnimate=function getElToAnimate(image){var newImg=image.clone().removeAttr('style').removeAttr('class').addClass('mfp-animated-image'),transition='all '+zoomSt.duration/1000+'s '+zoomSt.easing,cssObj={position:'fixed',zIndex:9999,left:0,top:0,'-webkit-backface-visibility':'hidden'},t='transition';cssObj['-webkit-'+t]=cssObj['-moz-'+t]=cssObj['-o-'+t]=cssObj[t]=transition;newImg.css(cssObj);return newImg;},showMainContent=function showMainContent(){mfp.content.css('visibility','visible');},openTimeout,animatedImg;_mfpOn('BuildControls'+ns,function(){if(mfp._allowZoom()){clearTimeout(openTimeout);mfp.content.css('visibility','hidden');// Basically, all code below does is clones existing image, puts in on top of the current one and animated it
image=mfp._getItemToZoom();if(!image){showMainContent();return;}animatedImg=getElToAnimate(image);animatedImg.css(mfp._getOffset());mfp.wrap.append(animatedImg);openTimeout=setTimeout(function(){animatedImg.css(mfp._getOffset(true));openTimeout=setTimeout(function(){showMainContent();setTimeout(function(){animatedImg.remove();image=animatedImg=null;_mfpTrigger('ZoomAnimationEnded');},16);// avoid blink when switching images
},duration);// this timeout equals animation duration
},16);// by adding this timeout we avoid short glitch at the beginning of animation
// Lots of timeouts...
}});_mfpOn(BEFORE_CLOSE_EVENT+ns,function(){if(mfp._allowZoom()){clearTimeout(openTimeout);mfp.st.removalDelay=duration;if(!image){image=mfp._getItemToZoom();if(!image){return;}animatedImg=getElToAnimate(image);}animatedImg.css(mfp._getOffset(true));mfp.wrap.append(animatedImg);mfp.content.css('visibility','hidden');setTimeout(function(){animatedImg.css(mfp._getOffset());},16);}});_mfpOn(CLOSE_EVENT+ns,function(){if(mfp._allowZoom()){showMainContent();if(animatedImg){animatedImg.remove();}image=null;}});},_allowZoom:function _allowZoom(){return mfp.currItem.type==='image';},_getItemToZoom:function _getItemToZoom(){if(mfp.currItem.hasSize){return mfp.currItem.img;}else{return false;}},// Get element postion relative to viewport
_getOffset:function _getOffset(isLarge){var el;if(isLarge){el=mfp.currItem.img;}else{el=mfp.st.zoom.opener(mfp.currItem.el||mfp.currItem);}var offset=el.offset();var paddingTop=parseInt(el.css('padding-top'),10);var paddingBottom=parseInt(el.css('padding-bottom'),10);offset.top-=$(window).scrollTop()-paddingTop;/*

			Animating left + top + width/height looks glitchy in Firefox, but perfect in Chrome. And vice-versa.

			 */var obj={width:el.width(),// fix Zepto height+padding issue
height:(_isJQ?el.innerHeight():el[0].offsetHeight)-paddingBottom-paddingTop};// I hate to do this, but there is no another option
if(getHasMozTransform()){obj['-moz-transform']=obj['transform']='translate('+offset.left+'px,'+offset.top+'px)';}else{obj.left=offset.left;obj.top=offset.top;}return obj;}}});/*>>zoom*//*>>iframe*/var IFRAME_NS='iframe',_emptyPage='//about:blank',_fixIframeBugs=function _fixIframeBugs(isShowing){if(mfp.currTemplate[IFRAME_NS]){var el=mfp.currTemplate[IFRAME_NS].find('iframe');if(el.length){// reset src after the popup is closed to avoid "video keeps playing after popup is closed" bug
if(!isShowing){el[0].src=_emptyPage;}// IE8 black screen bug fix
if(mfp.isIE8){el.css('display',isShowing?'block':'none');}}}};$.magnificPopup.registerModule(IFRAME_NS,{options:{markup:'<div class="mfp-iframe-scaler">'+'<div class="mfp-close"></div>'+'<iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe>'+'</div>',srcAction:'iframe_src',// we don't care and support only one default type of URL by default
patterns:{youtube:{index:'youtube.com',id:'v=',src:'//www.youtube.com/embed/%id%?autoplay=1'},vimeo:{index:'vimeo.com/',id:'/',src:'//player.vimeo.com/video/%id%?autoplay=1'},gmaps:{index:'//maps.google.',src:'%id%&output=embed'}}},proto:{initIframe:function initIframe(){mfp.types.push(IFRAME_NS);_mfpOn('BeforeChange',function(e,prevType,newType){if(prevType!==newType){if(prevType===IFRAME_NS){_fixIframeBugs();// iframe if removed
}else if(newType===IFRAME_NS){_fixIframeBugs(true);// iframe is showing
}}// else {
// iframe source is switched, don't do anything
//}
});_mfpOn(CLOSE_EVENT+'.'+IFRAME_NS,function(){_fixIframeBugs();});},getIframe:function getIframe(item,template){var embedSrc=item.src;var iframeSt=mfp.st.iframe;$.each(iframeSt.patterns,function(){if(embedSrc.indexOf(this.index)>-1){if(this.id){if(typeof this.id==='string'){embedSrc=embedSrc.substr(embedSrc.lastIndexOf(this.id)+this.id.length,embedSrc.length);}else{embedSrc=this.id.call(this,embedSrc);}}embedSrc=this.src.replace('%id%',embedSrc);return false;// break;
}});var dataObj={};if(iframeSt.srcAction){dataObj[iframeSt.srcAction]=embedSrc;}mfp._parseMarkup(template,dataObj,item);mfp.updateStatus('ready');return template;}}});/*>>iframe*//*>>gallery*//**
 * Get looped index depending on number of slides
 */var _getLoopedId=function _getLoopedId(index){var numSlides=mfp.items.length;if(index>numSlides-1){return index-numSlides;}else if(index<0){return numSlides+index;}return index;},_replaceCurrTotal=function _replaceCurrTotal(text,curr,total){return text.replace(/%curr%/gi,curr+1).replace(/%total%/gi,total);};$.magnificPopup.registerModule('gallery',{options:{enabled:false,arrowMarkup:'<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',preload:[0,2],navigateByImgClick:true,arrows:true,tPrev:'Previous (Left arrow key)',tNext:'Next (Right arrow key)',tCounter:'%curr% of %total%'},proto:{initGallery:function initGallery(){var gSt=mfp.st.gallery,ns='.mfp-gallery',supportsFastClick=Boolean($.fn.mfpFastClick);mfp.direction=true;// true - next, false - prev
if(!gSt||!gSt.enabled)return false;_wrapClasses+=' mfp-gallery';_mfpOn(OPEN_EVENT+ns,function(){if(gSt.navigateByImgClick){mfp.wrap.on('click'+ns,'.mfp-img',function(){if(mfp.items.length>1){mfp.next();return false;}});}_document.on('keydown'+ns,function(e){if(e.keyCode===37){mfp.prev();}else if(e.keyCode===39){mfp.next();}});});_mfpOn('UpdateStatus'+ns,function(e,data){if(data.text){data.text=_replaceCurrTotal(data.text,mfp.currItem.index,mfp.items.length);}});_mfpOn(MARKUP_PARSE_EVENT+ns,function(e,element,values,item){var l=mfp.items.length;values.counter=l>1?_replaceCurrTotal(gSt.tCounter,item.index,l):'';});_mfpOn('BuildControls'+ns,function(){if(mfp.items.length>1&&gSt.arrows&&!mfp.arrowLeft){var markup=gSt.arrowMarkup,arrowLeft=mfp.arrowLeft=$(markup.replace(/%title%/gi,gSt.tPrev).replace(/%dir%/gi,'left')).addClass(PREVENT_CLOSE_CLASS),arrowRight=mfp.arrowRight=$(markup.replace(/%title%/gi,gSt.tNext).replace(/%dir%/gi,'right')).addClass(PREVENT_CLOSE_CLASS);var eName=supportsFastClick?'mfpFastClick':'click';arrowLeft[eName](function(){mfp.prev();});arrowRight[eName](function(){mfp.next();});// Polyfill for :before and :after (adds elements with classes mfp-a and mfp-b)
if(mfp.isIE7){_getEl('b',arrowLeft[0],false,true);_getEl('a',arrowLeft[0],false,true);_getEl('b',arrowRight[0],false,true);_getEl('a',arrowRight[0],false,true);}mfp.container.append(arrowLeft.add(arrowRight));}});_mfpOn(CHANGE_EVENT+ns,function(){if(mfp._preloadTimeout)clearTimeout(mfp._preloadTimeout);mfp._preloadTimeout=setTimeout(function(){mfp.preloadNearbyImages();mfp._preloadTimeout=null;},16);});_mfpOn(CLOSE_EVENT+ns,function(){_document.off(ns);mfp.wrap.off('click'+ns);if(mfp.arrowLeft&&supportsFastClick){mfp.arrowLeft.add(mfp.arrowRight).destroyMfpFastClick();}mfp.arrowRight=mfp.arrowLeft=null;});},next:function next(){mfp.direction=true;mfp.index=_getLoopedId(mfp.index+1);mfp.updateItemHTML();},prev:function prev(){mfp.direction=false;mfp.index=_getLoopedId(mfp.index-1);mfp.updateItemHTML();},goTo:function goTo(newIndex){mfp.direction=newIndex>=mfp.index;mfp.index=newIndex;mfp.updateItemHTML();},preloadNearbyImages:function preloadNearbyImages(){var p=mfp.st.gallery.preload,preloadBefore=Math.min(p[0],mfp.items.length),preloadAfter=Math.min(p[1],mfp.items.length),i;for(i=1;i<=(mfp.direction?preloadAfter:preloadBefore);i++){mfp._preloadItem(mfp.index+i);}for(i=1;i<=(mfp.direction?preloadBefore:preloadAfter);i++){mfp._preloadItem(mfp.index-i);}},_preloadItem:function _preloadItem(index){index=_getLoopedId(index);if(mfp.items[index].preloaded){return;}var item=mfp.items[index];if(!item.parsed){item=mfp.parseEl(index);}_mfpTrigger('LazyLoad',item);if(item.type==='image'){item.img=$('<img class="mfp-img" />').on('load.mfploader',function(){item.hasSize=true;}).on('error.mfploader',function(){item.hasSize=true;item.loadError=true;_mfpTrigger('LazyLoadError',item);}).attr('src',item.src);}item.preloaded=true;}}});/*
Touch Support that might be implemented some day

addSwipeGesture: function() {
	var startX,
		moved,
		multipleTouches;

		return;

	var namespace = '.mfp',
		addEventNames = function(pref, down, move, up, cancel) {
			mfp._tStart = pref + down + namespace;
			mfp._tMove = pref + move + namespace;
			mfp._tEnd = pref + up + namespace;
			mfp._tCancel = pref + cancel + namespace;
		};

	if(window.navigator.msPointerEnabled) {
		addEventNames('MSPointer', 'Down', 'Move', 'Up', 'Cancel');
	} else if('ontouchstart' in window) {
		addEventNames('touch', 'start', 'move', 'end', 'cancel');
	} else {
		return;
	}
	_window.on(mfp._tStart, function(e) {
		var oE = e.originalEvent;
		multipleTouches = moved = false;
		startX = oE.pageX || oE.changedTouches[0].pageX;
	}).on(mfp._tMove, function(e) {
		if(e.originalEvent.touches.length > 1) {
			multipleTouches = e.originalEvent.touches.length;
		} else {
			//e.preventDefault();
			moved = true;
		}
	}).on(mfp._tEnd + ' ' + mfp._tCancel, function(e) {
		if(moved && !multipleTouches) {
			var oE = e.originalEvent,
				diff = startX - (oE.pageX || oE.changedTouches[0].pageX);

			if(diff > 20) {
				mfp.next();
			} else if(diff < -20) {
				mfp.prev();
			}
		}
	});
},
*//*>>gallery*//*>>retina*/var RETINA_NS='retina';$.magnificPopup.registerModule(RETINA_NS,{options:{replaceSrc:function replaceSrc(item){return item.src.replace(/\.\w+$/,function(m){return'@2x'+m;});},ratio:1// Function or number.  Set to 1 to disable.
},proto:{initRetina:function initRetina(){if(window.devicePixelRatio>1){var st=mfp.st.retina,ratio=st.ratio;ratio=!isNaN(ratio)?ratio:ratio();if(ratio>1){_mfpOn('ImageHasSize'+'.'+RETINA_NS,function(e,item){item.img.css({'max-width':item.img[0].naturalWidth/ratio,'width':'100%'});});_mfpOn('ElementParse'+'.'+RETINA_NS,function(e,item){item.src=st.replaceSrc(item,ratio);});}}}}});/*>>retina*//*>>fastclick*//**
 * FastClick event implementation. (removes 300ms delay on touch devices)
 * Based on https://developers.google.com/mobile/articles/fast_buttons
 *
 * You may use it outside the Magnific Popup by calling just:
 *
 * $('.your-el').mfpFastClick(function() {
 *     console.log('Clicked!');
 * });
 *
 * To unbind:
 * $('.your-el').destroyMfpFastClick();
 *
 *
 * Note that it's a very basic and simple implementation, it blocks ghost click on the same element where it was bound.
 * If you need something more advanced, use plugin by FT Labs https://github.com/ftlabs/fastclick
 *
 */(function(){var ghostClickDelay=1000,supportsTouch='ontouchstart'in window,unbindTouchMove=function unbindTouchMove(){_window.off('touchmove'+ns+' touchend'+ns);},eName='mfpFastClick',ns='.'+eName;// As Zepto.js doesn't have an easy way to add custom events (like jQuery), so we implement it in this way
$.fn.mfpFastClick=function(callback){return $(this).each(function(){var elem=$(this),lock;if(supportsTouch){var timeout,startX,startY,pointerMoved,point,numPointers;elem.on('touchstart'+ns,function(e){pointerMoved=false;numPointers=1;point=e.originalEvent?e.originalEvent.touches[0]:e.touches[0];startX=point.clientX;startY=point.clientY;_window.on('touchmove'+ns,function(e){point=e.originalEvent?e.originalEvent.touches:e.touches;numPointers=point.length;point=point[0];if(Math.abs(point.clientX-startX)>10||Math.abs(point.clientY-startY)>10){pointerMoved=true;unbindTouchMove();}}).on('touchend'+ns,function(e){unbindTouchMove();if(pointerMoved||numPointers>1){return;}lock=true;e.preventDefault();clearTimeout(timeout);timeout=setTimeout(function(){lock=false;},ghostClickDelay);callback();});});}elem.on('click'+ns,function(){if(!lock){callback();}});});};$.fn.destroyMfpFastClick=function(){$(this).off('touchstart'+ns+' click'+ns);if(supportsTouch)_window.off('touchmove'+ns+' touchend'+ns);};})();/*>>fastclick*/_checkInstance();})(window.jQuery||window.Zepto);/*! jQuery UI - v1.11.1 - 2014-10-15
* http://jqueryui.com
* Includes: core.js, widget.js, mouse.js, datepicker.js, slider.js
* Copyright 2014 jQuery Foundation and other contributors; Licensed MIT */(function(factory){if(typeof define==="function"&&define.amd){// AMD. Register as an anonymous module.
define(["jquery"],factory);}else{// Browser globals
factory(jQuery);}})(function($){/*!
 * jQuery UI Core 1.11.1
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */// $.ui might exist from components with no dependencies, e.g., $.ui.position
$.ui=$.ui||{};$.extend($.ui,{version:"1.11.1",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}});// plugins
$.fn.extend({scrollParent:function scrollParent(includeHidden){var position=this.css("position"),excludeStaticParent=position==="absolute",overflowRegex=includeHidden?/(auto|scroll|hidden)/:/(auto|scroll)/,scrollParent=this.parents().filter(function(){var parent=$(this);if(excludeStaticParent&&parent.css("position")==="static"){return false;}return overflowRegex.test(parent.css("overflow")+parent.css("overflow-y")+parent.css("overflow-x"));}).eq(0);return position==="fixed"||!scrollParent.length?$(this[0].ownerDocument||document):scrollParent;},uniqueId:function(){var uuid=0;return function(){return this.each(function(){if(!this.id){this.id="ui-id-"+ ++uuid;}});};}(),removeUniqueId:function removeUniqueId(){return this.each(function(){if(/^ui-id-\d+$/.test(this.id)){$(this).removeAttr("id");}});}});// selectors
function _focusable(element,isTabIndexNotNaN){var map,mapName,img,nodeName=element.nodeName.toLowerCase();if("area"===nodeName){map=element.parentNode;mapName=map.name;if(!element.href||!mapName||map.nodeName.toLowerCase()!=="map"){return false;}img=$("img[usemap='#"+mapName+"']")[0];return!!img&&visible(img);}return(/input|select|textarea|button|object/.test(nodeName)?!element.disabled:"a"===nodeName?element.href||isTabIndexNotNaN:isTabIndexNotNaN)&&// the element and all of its ancestors must be visible
visible(element);}function visible(element){return $.expr.filters.visible(element)&&!$(element).parents().addBack().filter(function(){return $.css(this,"visibility")==="hidden";}).length;}$.extend($.expr[":"],{data:$.expr.createPseudo?$.expr.createPseudo(function(dataName){return function(elem){return!!$.data(elem,dataName);};}):// support: jQuery <1.8
function(elem,i,match){return!!$.data(elem,match[3]);},focusable:function focusable(element){return _focusable(element,!isNaN($.attr(element,"tabindex")));},tabbable:function tabbable(element){var tabIndex=$.attr(element,"tabindex"),isTabIndexNaN=isNaN(tabIndex);return(isTabIndexNaN||tabIndex>=0)&&_focusable(element,!isTabIndexNaN);}});// support: jQuery <1.8
if(!$("<a>").outerWidth(1).jquery){$.each(["Width","Height"],function(i,name){var side=name==="Width"?["Left","Right"]:["Top","Bottom"],type=name.toLowerCase(),orig={innerWidth:$.fn.innerWidth,innerHeight:$.fn.innerHeight,outerWidth:$.fn.outerWidth,outerHeight:$.fn.outerHeight};function reduce(elem,size,border,margin){$.each(side,function(){size-=parseFloat($.css(elem,"padding"+this))||0;if(border){size-=parseFloat($.css(elem,"border"+this+"Width"))||0;}if(margin){size-=parseFloat($.css(elem,"margin"+this))||0;}});return size;}$.fn["inner"+name]=function(size){if(size===undefined){return orig["inner"+name].call(this);}return this.each(function(){$(this).css(type,reduce(this,size)+"px");});};$.fn["outer"+name]=function(size,margin){if(typeof size!=="number"){return orig["outer"+name].call(this,size);}return this.each(function(){$(this).css(type,reduce(this,size,true,margin)+"px");});};});}// support: jQuery <1.8
if(!$.fn.addBack){$.fn.addBack=function(selector){return this.add(selector==null?this.prevObject:this.prevObject.filter(selector));};}// support: jQuery 1.6.1, 1.6.2 (http://bugs.jquery.com/ticket/9413)
if($("<a>").data("a-b","a").removeData("a-b").data("a-b")){$.fn.removeData=function(removeData){return function(key){if(arguments.length){return removeData.call(this,$.camelCase(key));}else{return removeData.call(this);}};}($.fn.removeData);}// deprecated
$.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());$.fn.extend({focus:function(orig){return function(delay,fn){return typeof delay==="number"?this.each(function(){var elem=this;setTimeout(function(){$(elem).focus();if(fn){fn.call(elem);}},delay);}):orig.apply(this,arguments);};}($.fn.focus),disableSelection:function(){var eventType="onselectstart"in document.createElement("div")?"selectstart":"mousedown";return function(){return this.bind(eventType+".ui-disableSelection",function(event){event.preventDefault();});};}(),enableSelection:function enableSelection(){return this.unbind(".ui-disableSelection");},zIndex:function zIndex(_zIndex){if(_zIndex!==undefined){return this.css("zIndex",_zIndex);}if(this.length){var elem=$(this[0]),position,value;while(elem.length&&elem[0]!==document){// Ignore z-index if position is set to a value where z-index is ignored by the browser
// This makes behavior of this function consistent across browsers
// WebKit always returns auto if the element is positioned
position=elem.css("position");if(position==="absolute"||position==="relative"||position==="fixed"){// IE returns 0 when zIndex is not specified
// other browsers return a string
// we ignore the case of nested elements with an explicit value of 0
// <div style="z-index: -10;"><div style="z-index: 0;"></div></div>
value=parseInt(elem.css("zIndex"),10);if(!isNaN(value)&&value!==0){return value;}}elem=elem.parent();}}return 0;}});// $.ui.plugin is deprecated. Use $.widget() extensions instead.
$.ui.plugin={add:function add(module,option,set){var i,proto=$.ui[module].prototype;for(i in set){proto.plugins[i]=proto.plugins[i]||[];proto.plugins[i].push([option,set[i]]);}},call:function call(instance,name,args,allowDisconnected){var i,set=instance.plugins[name];if(!set){return;}if(!allowDisconnected&&(!instance.element[0].parentNode||instance.element[0].parentNode.nodeType===11)){return;}for(i=0;i<set.length;i++){if(instance.options[set[i][0]]){set[i][1].apply(instance.element,args);}}}};/*!
 * jQuery UI Widget 1.11.1
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/jQuery.widget/
 */var widget_uuid=0,widget_slice=Array.prototype.slice;$.cleanData=function(orig){return function(elems){var events,elem,i;for(i=0;(elem=elems[i])!=null;i++){try{// Only trigger remove when necessary to save time
events=$._data(elem,"events");if(events&&events.remove){$(elem).triggerHandler("remove");}// http://bugs.jquery.com/ticket/8235
}catch(e){}}orig(elems);};}($.cleanData);$.widget=function(name,base,prototype){var fullName,existingConstructor,constructor,basePrototype,// proxiedPrototype allows the provided prototype to remain unmodified
// so that it can be used as a mixin for multiple widgets (#8876)
proxiedPrototype={},namespace=name.split(".")[0];name=name.split(".")[1];fullName=namespace+"-"+name;if(!prototype){prototype=base;base=$.Widget;}// create selector for plugin
$.expr[":"][fullName.toLowerCase()]=function(elem){return!!$.data(elem,fullName);};$[namespace]=$[namespace]||{};existingConstructor=$[namespace][name];constructor=$[namespace][name]=function(options,element){// allow instantiation without "new" keyword
if(!this._createWidget){return new constructor(options,element);}// allow instantiation without initializing for simple inheritance
// must use "new" keyword (the code above always passes args)
if(arguments.length){this._createWidget(options,element);}};// extend with the existing constructor to carry over any static properties
$.extend(constructor,existingConstructor,{version:prototype.version,// copy the object used to create the prototype in case we need to
// redefine the widget later
_proto:$.extend({},prototype),// track widgets that inherit from this widget in case this widget is
// redefined after a widget inherits from it
_childConstructors:[]});basePrototype=new base();// we need to make the options hash a property directly on the new instance
// otherwise we'll modify the options hash on the prototype that we're
// inheriting from
basePrototype.options=$.widget.extend({},basePrototype.options);$.each(prototype,function(prop,value){if(!$.isFunction(value)){proxiedPrototype[prop]=value;return;}proxiedPrototype[prop]=function(){var _super=function _super(){return base.prototype[prop].apply(this,arguments);},_superApply=function _superApply(args){return base.prototype[prop].apply(this,args);};return function(){var __super=this._super,__superApply=this._superApply,returnValue;this._super=_super;this._superApply=_superApply;returnValue=value.apply(this,arguments);this._super=__super;this._superApply=__superApply;return returnValue;};}();});constructor.prototype=$.widget.extend(basePrototype,{// TODO: remove support for widgetEventPrefix
// always use the name + a colon as the prefix, e.g., draggable:start
// don't prefix for widgets that aren't DOM-based
widgetEventPrefix:existingConstructor?basePrototype.widgetEventPrefix||name:name},proxiedPrototype,{constructor:constructor,namespace:namespace,widgetName:name,widgetFullName:fullName});// If this widget is being redefined then we need to find all widgets that
// are inheriting from it and redefine all of them so that they inherit from
// the new version of this widget. We're essentially trying to replace one
// level in the prototype chain.
if(existingConstructor){$.each(existingConstructor._childConstructors,function(i,child){var childPrototype=child.prototype;// redefine the child widget using the same prototype that was
// originally used, but inherit from the new version of the base
$.widget(childPrototype.namespace+"."+childPrototype.widgetName,constructor,child._proto);});// remove the list of existing child constructors from the old constructor
// so the old child constructors can be garbage collected
delete existingConstructor._childConstructors;}else{base._childConstructors.push(constructor);}$.widget.bridge(name,constructor);return constructor;};$.widget.extend=function(target){var input=widget_slice.call(arguments,1),inputIndex=0,inputLength=input.length,key,value;for(;inputIndex<inputLength;inputIndex++){for(key in input[inputIndex]){value=input[inputIndex][key];if(input[inputIndex].hasOwnProperty(key)&&value!==undefined){// Clone objects
if($.isPlainObject(value)){target[key]=$.isPlainObject(target[key])?$.widget.extend({},target[key],value):// Don't extend strings, arrays, etc. with objects
$.widget.extend({},value);// Copy everything else by reference
}else{target[key]=value;}}}}return target;};$.widget.bridge=function(name,object){var fullName=object.prototype.widgetFullName||name;$.fn[name]=function(options){var isMethodCall=typeof options==="string",args=widget_slice.call(arguments,1),returnValue=this;// allow multiple hashes to be passed on init
options=!isMethodCall&&args.length?$.widget.extend.apply(null,[options].concat(args)):options;if(isMethodCall){this.each(function(){var methodValue,instance=$.data(this,fullName);if(options==="instance"){returnValue=instance;return false;}if(!instance){return $.error("cannot call methods on "+name+" prior to initialization; "+"attempted to call method '"+options+"'");}if(!$.isFunction(instance[options])||options.charAt(0)==="_"){return $.error("no such method '"+options+"' for "+name+" widget instance");}methodValue=instance[options].apply(instance,args);if(methodValue!==instance&&methodValue!==undefined){returnValue=methodValue&&methodValue.jquery?returnValue.pushStack(methodValue.get()):methodValue;return false;}});}else{this.each(function(){var instance=$.data(this,fullName);if(instance){instance.option(options||{});if(instance._init){instance._init();}}else{$.data(this,fullName,new object(options,this));}});}return returnValue;};};$.Widget=function()/* options, element */{};$.Widget._childConstructors=[];$.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:false,// callbacks
create:null},_createWidget:function _createWidget(options,element){element=$(element||this.defaultElement||this)[0];this.element=$(element);this.uuid=widget_uuid++;this.eventNamespace="."+this.widgetName+this.uuid;this.options=$.widget.extend({},this.options,this._getCreateOptions(),options);this.bindings=$();this.hoverable=$();this.focusable=$();if(element!==this){$.data(element,this.widgetFullName,this);this._on(true,this.element,{remove:function remove(event){if(event.target===element){this.destroy();}}});this.document=$(element.style?// element within the document
element.ownerDocument:// element is window or document
element.document||element);this.window=$(this.document[0].defaultView||this.document[0].parentWindow);}this._create();this._trigger("create",null,this._getCreateEventData());this._init();},_getCreateOptions:$.noop,_getCreateEventData:$.noop,_create:$.noop,_init:$.noop,destroy:function destroy(){this._destroy();// we can probably remove the unbind calls in 2.0
// all event bindings should go through this._on()
this.element.unbind(this.eventNamespace).removeData(this.widgetFullName)// support: jquery <1.6.3
// http://bugs.jquery.com/ticket/9413
.removeData($.camelCase(this.widgetFullName));this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled "+"ui-state-disabled");// clean up events and states
this.bindings.unbind(this.eventNamespace);this.hoverable.removeClass("ui-state-hover");this.focusable.removeClass("ui-state-focus");},_destroy:$.noop,widget:function widget(){return this.element;},option:function option(key,value){var options=key,parts,curOption,i;if(arguments.length===0){// don't return a reference to the internal hash
return $.widget.extend({},this.options);}if(typeof key==="string"){// handle nested keys, e.g., "foo.bar" => { foo: { bar: ___ } }
options={};parts=key.split(".");key=parts.shift();if(parts.length){curOption=options[key]=$.widget.extend({},this.options[key]);for(i=0;i<parts.length-1;i++){curOption[parts[i]]=curOption[parts[i]]||{};curOption=curOption[parts[i]];}key=parts.pop();if(arguments.length===1){return curOption[key]===undefined?null:curOption[key];}curOption[key]=value;}else{if(arguments.length===1){return this.options[key]===undefined?null:this.options[key];}options[key]=value;}}this._setOptions(options);return this;},_setOptions:function _setOptions(options){var key;for(key in options){this._setOption(key,options[key]);}return this;},_setOption:function _setOption(key,value){this.options[key]=value;if(key==="disabled"){this.widget().toggleClass(this.widgetFullName+"-disabled",!!value);// If the widget is becoming disabled, then nothing is interactive
if(value){this.hoverable.removeClass("ui-state-hover");this.focusable.removeClass("ui-state-focus");}}return this;},enable:function enable(){return this._setOptions({disabled:false});},disable:function disable(){return this._setOptions({disabled:true});},_on:function _on(suppressDisabledCheck,element,handlers){var delegateElement,instance=this;// no suppressDisabledCheck flag, shuffle arguments
if(typeof suppressDisabledCheck!=="boolean"){handlers=element;element=suppressDisabledCheck;suppressDisabledCheck=false;}// no element argument, shuffle and use this.element
if(!handlers){handlers=element;element=this.element;delegateElement=this.widget();}else{element=delegateElement=$(element);this.bindings=this.bindings.add(element);}$.each(handlers,function(event,handler){function handlerProxy(){// allow widgets to customize the disabled handling
// - disabled as an array instead of boolean
// - disabled class as method for disabling individual parts
if(!suppressDisabledCheck&&(instance.options.disabled===true||$(this).hasClass("ui-state-disabled"))){return;}return(typeof handler==="string"?instance[handler]:handler).apply(instance,arguments);}// copy the guid so direct unbinding works
if(typeof handler!=="string"){handlerProxy.guid=handler.guid=handler.guid||handlerProxy.guid||$.guid++;}var match=event.match(/^([\w:-]*)\s*(.*)$/),eventName=match[1]+instance.eventNamespace,selector=match[2];if(selector){delegateElement.delegate(selector,eventName,handlerProxy);}else{element.bind(eventName,handlerProxy);}});},_off:function _off(element,eventName){eventName=(eventName||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace;element.unbind(eventName).undelegate(eventName);},_delay:function _delay(handler,delay){function handlerProxy(){return(typeof handler==="string"?instance[handler]:handler).apply(instance,arguments);}var instance=this;return setTimeout(handlerProxy,delay||0);},_hoverable:function _hoverable(element){this.hoverable=this.hoverable.add(element);this._on(element,{mouseenter:function mouseenter(event){$(event.currentTarget).addClass("ui-state-hover");},mouseleave:function mouseleave(event){$(event.currentTarget).removeClass("ui-state-hover");}});},_focusable:function _focusable(element){this.focusable=this.focusable.add(element);this._on(element,{focusin:function focusin(event){$(event.currentTarget).addClass("ui-state-focus");},focusout:function focusout(event){$(event.currentTarget).removeClass("ui-state-focus");}});},_trigger:function _trigger(type,event,data){var prop,orig,callback=this.options[type];data=data||{};event=$.Event(event);event.type=(type===this.widgetEventPrefix?type:this.widgetEventPrefix+type).toLowerCase();// the original event may come from any element
// so we need to reset the target on the new event
event.target=this.element[0];// copy original event properties over to the new event
orig=event.originalEvent;if(orig){for(prop in orig){if(!(prop in event)){event[prop]=orig[prop];}}}this.element.trigger(event,data);return!($.isFunction(callback)&&callback.apply(this.element[0],[event].concat(data))===false||event.isDefaultPrevented());}};$.each({show:"fadeIn",hide:"fadeOut"},function(method,defaultEffect){$.Widget.prototype["_"+method]=function(element,options,callback){if(typeof options==="string"){options={effect:options};}var hasOptions,effectName=!options?method:options===true||typeof options==="number"?defaultEffect:options.effect||defaultEffect;options=options||{};if(typeof options==="number"){options={duration:options};}hasOptions=!$.isEmptyObject(options);options.complete=callback;if(options.delay){element.delay(options.delay);}if(hasOptions&&$.effects&&$.effects.effect[effectName]){element[method](options);}else if(effectName!==method&&element[effectName]){element[effectName](options.duration,options.easing,callback);}else{element.queue(function(next){$(this)[method]();if(callback){callback.call(element[0]);}next();});}};});var widget=$.widget;/*!
 * jQuery UI Mouse 1.11.1
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/mouse/
 */var mouseHandled=false;$(document).mouseup(function(){mouseHandled=false;});var mouse=$.widget("ui.mouse",{version:"1.11.1",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function _mouseInit(){var that=this;this.element.bind("mousedown."+this.widgetName,function(event){return that._mouseDown(event);}).bind("click."+this.widgetName,function(event){if(true===$.data(event.target,that.widgetName+".preventClickEvent")){$.removeData(event.target,that.widgetName+".preventClickEvent");event.stopImmediatePropagation();return false;}});this.started=false;},// TODO: make sure destroying one instance of mouse doesn't mess with
// other instances of mouse
_mouseDestroy:function _mouseDestroy(){this.element.unbind("."+this.widgetName);if(this._mouseMoveDelegate){this.document.unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate);}},_mouseDown:function _mouseDown(event){// don't let more than one widget handle mouseStart
if(mouseHandled){return;}// we may have missed mouseup (out of window)
this._mouseStarted&&this._mouseUp(event);this._mouseDownEvent=event;var that=this,btnIsLeft=event.which===1,// event.target.nodeName works around a bug in IE 8 with
// disabled inputs (#7620)
elIsCancel=typeof this.options.cancel==="string"&&event.target.nodeName?$(event.target).closest(this.options.cancel).length:false;if(!btnIsLeft||elIsCancel||!this._mouseCapture(event)){return true;}this.mouseDelayMet=!this.options.delay;if(!this.mouseDelayMet){this._mouseDelayTimer=setTimeout(function(){that.mouseDelayMet=true;},this.options.delay);}if(this._mouseDistanceMet(event)&&this._mouseDelayMet(event)){this._mouseStarted=this._mouseStart(event)!==false;if(!this._mouseStarted){event.preventDefault();return true;}}// Click event may never have fired (Gecko & Opera)
if(true===$.data(event.target,this.widgetName+".preventClickEvent")){$.removeData(event.target,this.widgetName+".preventClickEvent");}// these delegates are required to keep context
this._mouseMoveDelegate=function(event){return that._mouseMove(event);};this._mouseUpDelegate=function(event){return that._mouseUp(event);};this.document.bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate);event.preventDefault();mouseHandled=true;return true;},_mouseMove:function _mouseMove(event){// IE mouseup check - mouseup happened when mouse was out of window
if($.ui.ie&&(!document.documentMode||document.documentMode<9)&&!event.button){return this._mouseUp(event);// Iframe mouseup check - mouseup occurred in another document
}else if(!event.which){return this._mouseUp(event);}if(this._mouseStarted){this._mouseDrag(event);return event.preventDefault();}if(this._mouseDistanceMet(event)&&this._mouseDelayMet(event)){this._mouseStarted=this._mouseStart(this._mouseDownEvent,event)!==false;this._mouseStarted?this._mouseDrag(event):this._mouseUp(event);}return!this._mouseStarted;},_mouseUp:function _mouseUp(event){this.document.unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate);if(this._mouseStarted){this._mouseStarted=false;if(event.target===this._mouseDownEvent.target){$.data(event.target,this.widgetName+".preventClickEvent",true);}this._mouseStop(event);}mouseHandled=false;return false;},_mouseDistanceMet:function _mouseDistanceMet(event){return Math.max(Math.abs(this._mouseDownEvent.pageX-event.pageX),Math.abs(this._mouseDownEvent.pageY-event.pageY))>=this.options.distance;},_mouseDelayMet:function _mouseDelayMet()/* event */{return this.mouseDelayMet;},// These are placeholder methods, to be overriden by extending plugin
_mouseStart:function _mouseStart()/* event */{},_mouseDrag:function _mouseDrag()/* event */{},_mouseStop:function _mouseStop()/* event */{},_mouseCapture:function _mouseCapture()/* event */{return true;}});/*!
 * jQuery UI Datepicker 1.11.1
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/datepicker/
 */$.extend($.ui,{datepicker:{version:"1.11.1"}});var datepicker_instActive;function datepicker_getZindex(elem){var position,value;while(elem.length&&elem[0]!==document){// Ignore z-index if position is set to a value where z-index is ignored by the browser
// This makes behavior of this function consistent across browsers
// WebKit always returns auto if the element is positioned
position=elem.css("position");if(position==="absolute"||position==="relative"||position==="fixed"){// IE returns 0 when zIndex is not specified
// other browsers return a string
// we ignore the case of nested elements with an explicit value of 0
// <div style="z-index: -10;"><div style="z-index: 0;"></div></div>
value=parseInt(elem.css("zIndex"),10);if(!isNaN(value)&&value!==0){return value;}}elem=elem.parent();}return 0;}/* Date picker manager.
   Use the singleton instance of this class, $.datepicker, to interact with the date picker.
   Settings for (groups of) date pickers are maintained in an instance object,
   allowing multiple different settings on the same page. */function Datepicker(){this._curInst=null;// The current instance in use
this._keyEvent=false;// If the last event was a key event
this._disabledInputs=[];// List of date picker inputs that have been disabled
this._datepickerShowing=false;// True if the popup picker is showing , false if not
this._inDialog=false;// True if showing within a "dialog", false if not
this._mainDivId="ui-datepicker-div";// The ID of the main datepicker division
this._inlineClass="ui-datepicker-inline";// The name of the inline marker class
this._appendClass="ui-datepicker-append";// The name of the append marker class
this._triggerClass="ui-datepicker-trigger";// The name of the trigger marker class
this._dialogClass="ui-datepicker-dialog";// The name of the dialog marker class
this._disableClass="ui-datepicker-disabled";// The name of the disabled covering marker class
this._unselectableClass="ui-datepicker-unselectable";// The name of the unselectable cell marker class
this._currentClass="ui-datepicker-current-day";// The name of the current day marker class
this._dayOverClass="ui-datepicker-days-cell-over";// The name of the day hover marker class
this.regional=[];// Available regional settings, indexed by language code
this.regional[""]={// Default regional settings
closeText:"Done",// Display text for close link
prevText:"Prev",// Display text for previous month link
nextText:"Next",// Display text for next month link
currentText:"Today",// Display text for current month link
monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],// Names of months for drop-down and formatting
monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],// For formatting
dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],// For formatting
dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],// For formatting
dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],// Column headings for days starting at Sunday
weekHeader:"Wk",// Column header for week of the year
dateFormat:"mm/dd/yy",// See format options on parseDate
firstDay:0,// The first day of the week, Sun = 0, Mon = 1, ...
isRTL:false,// True if right-to-left language, false if left-to-right
showMonthAfterYear:false,// True if the year select precedes month, false for month then year
yearSuffix:""// Additional text to append to the year in the month headers
};this._defaults={// Global defaults for all the date picker instances
showOn:"focus",// "focus" for popup on focus,
// "button" for trigger button, or "both" for either
showAnim:"fadeIn",// Name of jQuery animation for popup
showOptions:{},// Options for enhanced animations
defaultDate:null,// Used when field is blank: actual date,
// +/-number for offset from today, null for today
appendText:"",// Display text following the input box, e.g. showing the format
buttonText:"...",// Text for trigger button
buttonImage:"",// URL for trigger button image
buttonImageOnly:false,// True if the image appears alone, false if it appears on a button
hideIfNoPrevNext:false,// True to hide next/previous month links
// if not applicable, false to just disable them
navigationAsDateFormat:false,// True if date formatting applied to prev/today/next links
gotoCurrent:false,// True if today link goes back to current selection instead
changeMonth:false,// True if month can be selected directly, false if only prev/next
changeYear:false,// True if year can be selected directly, false if only prev/next
yearRange:"c-10:c+10",// Range of years to display in drop-down,
// either relative to today's year (-nn:+nn), relative to currently displayed year
// (c-nn:c+nn), absolute (nnnn:nnnn), or a combination of the above (nnnn:-n)
showOtherMonths:false,// True to show dates in other months, false to leave blank
selectOtherMonths:false,// True to allow selection of dates in other months, false for unselectable
showWeek:false,// True to show week of the year, false to not show it
calculateWeek:this.iso8601Week,// How to calculate the week of the year,
// takes a Date and returns the number of the week for it
shortYearCutoff:"+10",// Short year values < this are in the current century,
// > this are in the previous century,
// string value starting with "+" for current year + value
minDate:null,// The earliest selectable date, or null for no limit
maxDate:null,// The latest selectable date, or null for no limit
duration:"fast",// Duration of display/closure
beforeShowDay:null,// Function that takes a date and returns an array with
// [0] = true if selectable, false if not, [1] = custom CSS class name(s) or "",
// [2] = cell title (optional), e.g. $.datepicker.noWeekends
beforeShow:null,// Function that takes an input field and
// returns a set of custom settings for the date picker
onSelect:null,// Define a callback function when a date is selected
onChangeMonthYear:null,// Define a callback function when the month or year is changed
onClose:null,// Define a callback function when the datepicker is closed
numberOfMonths:1,// Number of months to show at a time
showCurrentAtPos:0,// The position in multipe months at which to show the current month (starting at 0)
stepMonths:1,// Number of months to step back/forward
stepBigMonths:12,// Number of months to step back/forward for the big links
altField:"",// Selector for an alternate field to store selected dates into
altFormat:"",// The date format to use for the alternate field
constrainInput:true,// The input is constrained by the current date format
showButtonPanel:false,// True to show button panel, false to not show it
autoSize:false,// True to size the input for the date format, false to leave as is
disabled:false// The initial disabled state
};$.extend(this._defaults,this.regional[""]);this.regional.en=$.extend(true,{},this.regional[""]);this.regional["en-US"]=$.extend(true,{},this.regional.en);this.dpDiv=datepicker_bindHover($("<div id='"+this._mainDivId+"' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"));}$.extend(Datepicker.prototype,{/* Class name added to elements to indicate already configured with a date picker. */markerClassName:"hasDatepicker",//Keep track of the maximum number of rows displayed (see #7043)
maxRows:4,// TODO rename to "widget" when switching to widget factory
_widgetDatepicker:function _widgetDatepicker(){return this.dpDiv;},/* Override the default settings for all instances of the date picker.
	 * @param  settings  object - the new settings to use as defaults (anonymous object)
	 * @return the manager object
	 */setDefaults:function setDefaults(settings){datepicker_extendRemove(this._defaults,settings||{});return this;},/* Attach the date picker to a jQuery selection.
	 * @param  target	element - the target input field or division or span
	 * @param  settings  object - the new settings to use for this date picker instance (anonymous)
	 */_attachDatepicker:function _attachDatepicker(target,settings){var nodeName,inline,inst;nodeName=target.nodeName.toLowerCase();inline=nodeName==="div"||nodeName==="span";if(!target.id){this.uuid+=1;target.id="dp"+this.uuid;}inst=this._newInst($(target),inline);inst.settings=$.extend({},settings||{});if(nodeName==="input"){this._connectDatepicker(target,inst);}else if(inline){this._inlineDatepicker(target,inst);}},/* Create a new instance object. */_newInst:function _newInst(target,inline){var id=target[0].id.replace(/([^A-Za-z0-9_\-])/g,"\\\\$1");// escape jQuery meta chars
return{id:id,input:target,// associated target
selectedDay:0,selectedMonth:0,selectedYear:0,// current selection
drawMonth:0,drawYear:0,// month being drawn
inline:inline,// is datepicker inline or not
dpDiv:!inline?this.dpDiv:// presentation div
datepicker_bindHover($("<div class='"+this._inlineClass+" ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))};},/* Attach the date picker to an input field. */_connectDatepicker:function _connectDatepicker(target,inst){var input=$(target);inst.append=$([]);inst.trigger=$([]);if(input.hasClass(this.markerClassName)){return;}this._attachments(input,inst);input.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp);this._autoSize(inst);$.data(target,"datepicker",inst);//If disabled option is true, disable the datepicker once it has been attached to the input (see ticket #5665)
if(inst.settings.disabled){this._disableDatepicker(target);}},/* Make attachments based on settings. */_attachments:function _attachments(input,inst){var showOn,buttonText,buttonImage,appendText=this._get(inst,"appendText"),isRTL=this._get(inst,"isRTL");if(inst.append){inst.append.remove();}if(appendText){inst.append=$("<span class='"+this._appendClass+"'>"+appendText+"</span>");input[isRTL?"before":"after"](inst.append);}input.unbind("focus",this._showDatepicker);if(inst.trigger){inst.trigger.remove();}showOn=this._get(inst,"showOn");if(showOn==="focus"||showOn==="both"){// pop-up date picker when in the marked field
input.focus(this._showDatepicker);}if(showOn==="button"||showOn==="both"){// pop-up date picker when button clicked
buttonText=this._get(inst,"buttonText");buttonImage=this._get(inst,"buttonImage");inst.trigger=$(this._get(inst,"buttonImageOnly")?$("<img/>").addClass(this._triggerClass).attr({src:buttonImage,alt:buttonText,title:buttonText}):$("<button type='button'></button>").addClass(this._triggerClass).html(!buttonImage?buttonText:$("<img/>").attr({src:buttonImage,alt:buttonText,title:buttonText})));input[isRTL?"before":"after"](inst.trigger);inst.trigger.click(function(){if($.datepicker._datepickerShowing&&$.datepicker._lastInput===input[0]){$.datepicker._hideDatepicker();}else if($.datepicker._datepickerShowing&&$.datepicker._lastInput!==input[0]){$.datepicker._hideDatepicker();$.datepicker._showDatepicker(input[0]);}else{$.datepicker._showDatepicker(input[0]);}return false;});}},/* Apply the maximum length for the date format. */_autoSize:function _autoSize(inst){if(this._get(inst,"autoSize")&&!inst.inline){var findMax,max,maxI,i,date=new Date(2009,12-1,20),// Ensure double digits
dateFormat=this._get(inst,"dateFormat");if(dateFormat.match(/[DM]/)){findMax=function findMax(names){max=0;maxI=0;for(i=0;i<names.length;i++){if(names[i].length>max){max=names[i].length;maxI=i;}}return maxI;};date.setMonth(findMax(this._get(inst,dateFormat.match(/MM/)?"monthNames":"monthNamesShort")));date.setDate(findMax(this._get(inst,dateFormat.match(/DD/)?"dayNames":"dayNamesShort"))+20-date.getDay());}inst.input.attr("size",this._formatDate(inst,date).length);}},/* Attach an inline date picker to a div. */_inlineDatepicker:function _inlineDatepicker(target,inst){var divSpan=$(target);if(divSpan.hasClass(this.markerClassName)){return;}divSpan.addClass(this.markerClassName).append(inst.dpDiv);$.data(target,"datepicker",inst);this._setDate(inst,this._getDefaultDate(inst),true);this._updateDatepicker(inst);this._updateAlternate(inst);//If disabled option is true, disable the datepicker before showing it (see ticket #5665)
if(inst.settings.disabled){this._disableDatepicker(target);}// Set display:block in place of inst.dpDiv.show() which won't work on disconnected elements
// http://bugs.jqueryui.com/ticket/7552 - A Datepicker created on a detached div has zero height
inst.dpDiv.css("display","block");},/* Pop-up the date picker in a "dialog" box.
	 * @param  input element - ignored
	 * @param  date	string or Date - the initial date to display
	 * @param  onSelect  function - the function to call when a date is selected
	 * @param  settings  object - update the dialog date picker instance's settings (anonymous object)
	 * @param  pos int[2] - coordinates for the dialog's position within the screen or
	 *					event - with x/y coordinates or
	 *					leave empty for default (screen centre)
	 * @return the manager object
	 */_dialogDatepicker:function _dialogDatepicker(input,date,onSelect,settings,pos){var id,browserWidth,browserHeight,scrollX,scrollY,inst=this._dialogInst;// internal instance
if(!inst){this.uuid+=1;id="dp"+this.uuid;this._dialogInput=$("<input type='text' id='"+id+"' style='position: absolute; top: -100px; width: 0px;'/>");this._dialogInput.keydown(this._doKeyDown);$("body").append(this._dialogInput);inst=this._dialogInst=this._newInst(this._dialogInput,false);inst.settings={};$.data(this._dialogInput[0],"datepicker",inst);}datepicker_extendRemove(inst.settings,settings||{});date=date&&date.constructor===Date?this._formatDate(inst,date):date;this._dialogInput.val(date);this._pos=pos?pos.length?pos:[pos.pageX,pos.pageY]:null;if(!this._pos){browserWidth=document.documentElement.clientWidth;browserHeight=document.documentElement.clientHeight;scrollX=document.documentElement.scrollLeft||document.body.scrollLeft;scrollY=document.documentElement.scrollTop||document.body.scrollTop;this._pos=// should use actual width/height below
[browserWidth/2-100+scrollX,browserHeight/2-150+scrollY];}// move input on screen for focus, but hidden behind dialog
this._dialogInput.css("left",this._pos[0]+20+"px").css("top",this._pos[1]+"px");inst.settings.onSelect=onSelect;this._inDialog=true;this.dpDiv.addClass(this._dialogClass);this._showDatepicker(this._dialogInput[0]);if($.blockUI){$.blockUI(this.dpDiv);}$.data(this._dialogInput[0],"datepicker",inst);return this;},/* Detach a datepicker from its control.
	 * @param  target	element - the target input field or division or span
	 */_destroyDatepicker:function _destroyDatepicker(target){var nodeName,$target=$(target),inst=$.data(target,"datepicker");if(!$target.hasClass(this.markerClassName)){return;}nodeName=target.nodeName.toLowerCase();$.removeData(target,"datepicker");if(nodeName==="input"){inst.append.remove();inst.trigger.remove();$target.removeClass(this.markerClassName).unbind("focus",this._showDatepicker).unbind("keydown",this._doKeyDown).unbind("keypress",this._doKeyPress).unbind("keyup",this._doKeyUp);}else if(nodeName==="div"||nodeName==="span"){$target.removeClass(this.markerClassName).empty();}},/* Enable the date picker to a jQuery selection.
	 * @param  target	element - the target input field or division or span
	 */_enableDatepicker:function _enableDatepicker(target){var nodeName,inline,$target=$(target),inst=$.data(target,"datepicker");if(!$target.hasClass(this.markerClassName)){return;}nodeName=target.nodeName.toLowerCase();if(nodeName==="input"){target.disabled=false;inst.trigger.filter("button").each(function(){this.disabled=false;}).end().filter("img").css({opacity:"1.0",cursor:""});}else if(nodeName==="div"||nodeName==="span"){inline=$target.children("."+this._inlineClass);inline.children().removeClass("ui-state-disabled");inline.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",false);}this._disabledInputs=$.map(this._disabledInputs,function(value){return value===target?null:value;});// delete entry
},/* Disable the date picker to a jQuery selection.
	 * @param  target	element - the target input field or division or span
	 */_disableDatepicker:function _disableDatepicker(target){var nodeName,inline,$target=$(target),inst=$.data(target,"datepicker");if(!$target.hasClass(this.markerClassName)){return;}nodeName=target.nodeName.toLowerCase();if(nodeName==="input"){target.disabled=true;inst.trigger.filter("button").each(function(){this.disabled=true;}).end().filter("img").css({opacity:"0.5",cursor:"default"});}else if(nodeName==="div"||nodeName==="span"){inline=$target.children("."+this._inlineClass);inline.children().addClass("ui-state-disabled");inline.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",true);}this._disabledInputs=$.map(this._disabledInputs,function(value){return value===target?null:value;});// delete entry
this._disabledInputs[this._disabledInputs.length]=target;},/* Is the first field in a jQuery collection disabled as a datepicker?
	 * @param  target	element - the target input field or division or span
	 * @return boolean - true if disabled, false if enabled
	 */_isDisabledDatepicker:function _isDisabledDatepicker(target){if(!target){return false;}for(var i=0;i<this._disabledInputs.length;i++){if(this._disabledInputs[i]===target){return true;}}return false;},/* Retrieve the instance data for the target control.
	 * @param  target  element - the target input field or division or span
	 * @return  object - the associated instance data
	 * @throws  error if a jQuery problem getting data
	 */_getInst:function _getInst(target){try{return $.data(target,"datepicker");}catch(err){throw"Missing instance data for this datepicker";}},/* Update or retrieve the settings for a date picker attached to an input field or division.
	 * @param  target  element - the target input field or division or span
	 * @param  name	object - the new settings to update or
	 *				string - the name of the setting to change or retrieve,
	 *				when retrieving also "all" for all instance settings or
	 *				"defaults" for all global defaults
	 * @param  value   any - the new value for the setting
	 *				(omit if above is an object or to retrieve a value)
	 */_optionDatepicker:function _optionDatepicker(target,name,value){var settings,date,minDate,maxDate,inst=this._getInst(target);if(arguments.length===2&&typeof name==="string"){return name==="defaults"?$.extend({},$.datepicker._defaults):inst?name==="all"?$.extend({},inst.settings):this._get(inst,name):null;}settings=name||{};if(typeof name==="string"){settings={};settings[name]=value;}if(inst){if(this._curInst===inst){this._hideDatepicker();}date=this._getDateDatepicker(target,true);minDate=this._getMinMaxDate(inst,"min");maxDate=this._getMinMaxDate(inst,"max");datepicker_extendRemove(inst.settings,settings);// reformat the old minDate/maxDate values if dateFormat changes and a new minDate/maxDate isn't provided
if(minDate!==null&&settings.dateFormat!==undefined&&settings.minDate===undefined){inst.settings.minDate=this._formatDate(inst,minDate);}if(maxDate!==null&&settings.dateFormat!==undefined&&settings.maxDate===undefined){inst.settings.maxDate=this._formatDate(inst,maxDate);}if("disabled"in settings){if(settings.disabled){this._disableDatepicker(target);}else{this._enableDatepicker(target);}}this._attachments($(target),inst);this._autoSize(inst);this._setDate(inst,date);this._updateAlternate(inst);this._updateDatepicker(inst);}},// change method deprecated
_changeDatepicker:function _changeDatepicker(target,name,value){this._optionDatepicker(target,name,value);},/* Redraw the date picker attached to an input field or division.
	 * @param  target  element - the target input field or division or span
	 */_refreshDatepicker:function _refreshDatepicker(target){var inst=this._getInst(target);if(inst){this._updateDatepicker(inst);}},/* Set the dates for a jQuery selection.
	 * @param  target element - the target input field or division or span
	 * @param  date	Date - the new date
	 */_setDateDatepicker:function _setDateDatepicker(target,date){var inst=this._getInst(target);if(inst){this._setDate(inst,date);this._updateDatepicker(inst);this._updateAlternate(inst);}},/* Get the date(s) for the first entry in a jQuery selection.
	 * @param  target element - the target input field or division or span
	 * @param  noDefault boolean - true if no default date is to be used
	 * @return Date - the current date
	 */_getDateDatepicker:function _getDateDatepicker(target,noDefault){var inst=this._getInst(target);if(inst&&!inst.inline){this._setDateFromField(inst,noDefault);}return inst?this._getDate(inst):null;},/* Handle keystrokes. */_doKeyDown:function _doKeyDown(event){var onSelect,dateStr,sel,inst=$.datepicker._getInst(event.target),handled=true,isRTL=inst.dpDiv.is(".ui-datepicker-rtl");inst._keyEvent=true;if($.datepicker._datepickerShowing){switch(event.keyCode){case 9:$.datepicker._hideDatepicker();handled=false;break;// hide on tab out
case 13:sel=$("td."+$.datepicker._dayOverClass+":not(."+$.datepicker._currentClass+")",inst.dpDiv);if(sel[0]){$.datepicker._selectDay(event.target,inst.selectedMonth,inst.selectedYear,sel[0]);}onSelect=$.datepicker._get(inst,"onSelect");if(onSelect){dateStr=$.datepicker._formatDate(inst);// trigger custom callback
onSelect.apply(inst.input?inst.input[0]:null,[dateStr,inst]);}else{$.datepicker._hideDatepicker();}return false;// don't submit the form
case 27:$.datepicker._hideDatepicker();break;// hide on escape
case 33:$.datepicker._adjustDate(event.target,event.ctrlKey?-$.datepicker._get(inst,"stepBigMonths"):-$.datepicker._get(inst,"stepMonths"),"M");break;// previous month/year on page up/+ ctrl
case 34:$.datepicker._adjustDate(event.target,event.ctrlKey?+$.datepicker._get(inst,"stepBigMonths"):+$.datepicker._get(inst,"stepMonths"),"M");break;// next month/year on page down/+ ctrl
case 35:if(event.ctrlKey||event.metaKey){$.datepicker._clearDate(event.target);}handled=event.ctrlKey||event.metaKey;break;// clear on ctrl or command +end
case 36:if(event.ctrlKey||event.metaKey){$.datepicker._gotoToday(event.target);}handled=event.ctrlKey||event.metaKey;break;// current on ctrl or command +home
case 37:if(event.ctrlKey||event.metaKey){$.datepicker._adjustDate(event.target,isRTL?+1:-1,"D");}handled=event.ctrlKey||event.metaKey;// -1 day on ctrl or command +left
if(event.originalEvent.altKey){$.datepicker._adjustDate(event.target,event.ctrlKey?-$.datepicker._get(inst,"stepBigMonths"):-$.datepicker._get(inst,"stepMonths"),"M");}// next month/year on alt +left on Mac
break;case 38:if(event.ctrlKey||event.metaKey){$.datepicker._adjustDate(event.target,-7,"D");}handled=event.ctrlKey||event.metaKey;break;// -1 week on ctrl or command +up
case 39:if(event.ctrlKey||event.metaKey){$.datepicker._adjustDate(event.target,isRTL?-1:+1,"D");}handled=event.ctrlKey||event.metaKey;// +1 day on ctrl or command +right
if(event.originalEvent.altKey){$.datepicker._adjustDate(event.target,event.ctrlKey?+$.datepicker._get(inst,"stepBigMonths"):+$.datepicker._get(inst,"stepMonths"),"M");}// next month/year on alt +right
break;case 40:if(event.ctrlKey||event.metaKey){$.datepicker._adjustDate(event.target,+7,"D");}handled=event.ctrlKey||event.metaKey;break;// +1 week on ctrl or command +down
default:handled=false;}}else if(event.keyCode===36&&event.ctrlKey){// display the date picker on ctrl+home
$.datepicker._showDatepicker(this);}else{handled=false;}if(handled){event.preventDefault();event.stopPropagation();}},/* Filter entered characters - based on date format. */_doKeyPress:function _doKeyPress(event){var chars,chr,inst=$.datepicker._getInst(event.target);if($.datepicker._get(inst,"constrainInput")){chars=$.datepicker._possibleChars($.datepicker._get(inst,"dateFormat"));chr=String.fromCharCode(event.charCode==null?event.keyCode:event.charCode);return event.ctrlKey||event.metaKey||chr<" "||!chars||chars.indexOf(chr)>-1;}},/* Synchronise manual entry and field/alternate field. */_doKeyUp:function _doKeyUp(event){var date,inst=$.datepicker._getInst(event.target);if(inst.input.val()!==inst.lastVal){try{date=$.datepicker.parseDate($.datepicker._get(inst,"dateFormat"),inst.input?inst.input.val():null,$.datepicker._getFormatConfig(inst));if(date){// only if valid
$.datepicker._setDateFromField(inst);$.datepicker._updateAlternate(inst);$.datepicker._updateDatepicker(inst);}}catch(err){}}return true;},/* Pop-up the date picker for a given input field.
	 * If false returned from beforeShow event handler do not show.
	 * @param  input  element - the input field attached to the date picker or
	 *					event - if triggered by focus
	 */_showDatepicker:function _showDatepicker(input){input=input.target||input;if(input.nodeName.toLowerCase()!=="input"){// find from button/image trigger
input=$("input",input.parentNode)[0];}if($.datepicker._isDisabledDatepicker(input)||$.datepicker._lastInput===input){// already here
return;}var inst,beforeShow,beforeShowSettings,isFixed,offset,showAnim,duration;inst=$.datepicker._getInst(input);if($.datepicker._curInst&&$.datepicker._curInst!==inst){$.datepicker._curInst.dpDiv.stop(true,true);if(inst&&$.datepicker._datepickerShowing){$.datepicker._hideDatepicker($.datepicker._curInst.input[0]);}}beforeShow=$.datepicker._get(inst,"beforeShow");beforeShowSettings=beforeShow?beforeShow.apply(input,[input,inst]):{};if(beforeShowSettings===false){return;}datepicker_extendRemove(inst.settings,beforeShowSettings);inst.lastVal=null;$.datepicker._lastInput=input;$.datepicker._setDateFromField(inst);if($.datepicker._inDialog){// hide cursor
input.value="";}if(!$.datepicker._pos){// position below input
$.datepicker._pos=$.datepicker._findPos(input);$.datepicker._pos[1]+=input.offsetHeight;// add the height
}isFixed=false;$(input).parents().each(function(){isFixed|=$(this).css("position")==="fixed";return!isFixed;});offset={left:$.datepicker._pos[0],top:$.datepicker._pos[1]};$.datepicker._pos=null;//to avoid flashes on Firefox
inst.dpDiv.empty();// determine sizing offscreen
inst.dpDiv.css({position:"absolute",display:"block",top:"-1000px"});$.datepicker._updateDatepicker(inst);// fix width for dynamic number of date pickers
// and adjust position before showing
offset=$.datepicker._checkOffset(inst,offset,isFixed);inst.dpDiv.css({position:$.datepicker._inDialog&&$.blockUI?"static":isFixed?"fixed":"absolute",display:"none",left:offset.left+"px",top:offset.top+"px"});if(!inst.inline){showAnim=$.datepicker._get(inst,"showAnim");duration=$.datepicker._get(inst,"duration");inst.dpDiv.css("z-index",datepicker_getZindex($(input))+1);$.datepicker._datepickerShowing=true;if($.effects&&$.effects.effect[showAnim]){inst.dpDiv.show(showAnim,$.datepicker._get(inst,"showOptions"),duration);}else{inst.dpDiv[showAnim||"show"](showAnim?duration:null);}if($.datepicker._shouldFocusInput(inst)){inst.input.focus();}$.datepicker._curInst=inst;}},/* Generate the date picker content. */_updateDatepicker:function _updateDatepicker(inst){this.maxRows=4;//Reset the max number of rows being displayed (see #7043)
datepicker_instActive=inst;// for delegate hover events
inst.dpDiv.empty().append(this._generateHTML(inst));this._attachHandlers(inst);var origyearshtml,numMonths=this._getNumberOfMonths(inst),cols=numMonths[1],width=17,activeCell=inst.dpDiv.find("."+this._dayOverClass+" a");if(activeCell.length>0){datepicker_handleMouseover.apply(activeCell.get(0));}inst.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width("");if(cols>1){inst.dpDiv.addClass("ui-datepicker-multi-"+cols).css("width",width*cols+"em");}inst.dpDiv[(numMonths[0]!==1||numMonths[1]!==1?"add":"remove")+"Class"]("ui-datepicker-multi");inst.dpDiv[(this._get(inst,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl");if(inst===$.datepicker._curInst&&$.datepicker._datepickerShowing&&$.datepicker._shouldFocusInput(inst)){inst.input.focus();}// deffered render of the years select (to avoid flashes on Firefox)
if(inst.yearshtml){origyearshtml=inst.yearshtml;setTimeout(function(){//assure that inst.yearshtml didn't change.
if(origyearshtml===inst.yearshtml&&inst.yearshtml){inst.dpDiv.find("select.ui-datepicker-year:first").replaceWith(inst.yearshtml);}origyearshtml=inst.yearshtml=null;},0);}},// #6694 - don't focus the input if it's already focused
// this breaks the change event in IE
// Support: IE and jQuery <1.9
_shouldFocusInput:function _shouldFocusInput(inst){return inst.input&&inst.input.is(":visible")&&!inst.input.is(":disabled")&&!inst.input.is(":focus");},/* Check positioning to remain on screen. */_checkOffset:function _checkOffset(inst,offset,isFixed){var dpWidth=inst.dpDiv.outerWidth(),dpHeight=inst.dpDiv.outerHeight(),inputWidth=inst.input?inst.input.outerWidth():0,inputHeight=inst.input?inst.input.outerHeight():0,viewWidth=document.documentElement.clientWidth+(isFixed?0:$(document).scrollLeft()),viewHeight=document.documentElement.clientHeight+(isFixed?0:$(document).scrollTop());offset.left-=this._get(inst,"isRTL")?dpWidth-inputWidth:0;offset.left-=isFixed&&offset.left===inst.input.offset().left?$(document).scrollLeft():0;offset.top-=isFixed&&offset.top===inst.input.offset().top+inputHeight?$(document).scrollTop():0;// now check if datepicker is showing outside window viewport - move to a better place if so.
offset.left-=Math.min(offset.left,offset.left+dpWidth>viewWidth&&viewWidth>dpWidth?Math.abs(offset.left+dpWidth-viewWidth):0);offset.top-=Math.min(offset.top,offset.top+dpHeight>viewHeight&&viewHeight>dpHeight?Math.abs(dpHeight+inputHeight):0);return offset;},/* Find an object's position on the screen. */_findPos:function _findPos(obj){var position,inst=this._getInst(obj),isRTL=this._get(inst,"isRTL");while(obj&&(obj.type==="hidden"||obj.nodeType!==1||$.expr.filters.hidden(obj))){obj=obj[isRTL?"previousSibling":"nextSibling"];}position=$(obj).offset();return[position.left,position.top];},/* Hide the date picker from view.
	 * @param  input  element - the input field attached to the date picker
	 */_hideDatepicker:function _hideDatepicker(input){var showAnim,duration,postProcess,onClose,inst=this._curInst;if(!inst||input&&inst!==$.data(input,"datepicker")){return;}if(this._datepickerShowing){showAnim=this._get(inst,"showAnim");duration=this._get(inst,"duration");postProcess=function postProcess(){$.datepicker._tidyDialog(inst);};// DEPRECATED: after BC for 1.8.x $.effects[ showAnim ] is not needed
if($.effects&&($.effects.effect[showAnim]||$.effects[showAnim])){inst.dpDiv.hide(showAnim,$.datepicker._get(inst,"showOptions"),duration,postProcess);}else{inst.dpDiv[showAnim==="slideDown"?"slideUp":showAnim==="fadeIn"?"fadeOut":"hide"](showAnim?duration:null,postProcess);}if(!showAnim){postProcess();}this._datepickerShowing=false;onClose=this._get(inst,"onClose");if(onClose){onClose.apply(inst.input?inst.input[0]:null,[inst.input?inst.input.val():"",inst]);}this._lastInput=null;if(this._inDialog){this._dialogInput.css({position:"absolute",left:"0",top:"-100px"});if($.blockUI){$.unblockUI();$("body").append(this.dpDiv);}}this._inDialog=false;}},/* Tidy up after a dialog display. */_tidyDialog:function _tidyDialog(inst){inst.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar");},/* Close date picker if clicked elsewhere. */_checkExternalClick:function _checkExternalClick(event){if(!$.datepicker._curInst){return;}var $target=$(event.target),inst=$.datepicker._getInst($target[0]);if($target[0].id!==$.datepicker._mainDivId&&$target.parents("#"+$.datepicker._mainDivId).length===0&&!$target.hasClass($.datepicker.markerClassName)&&!$target.closest("."+$.datepicker._triggerClass).length&&$.datepicker._datepickerShowing&&!($.datepicker._inDialog&&$.blockUI)||$target.hasClass($.datepicker.markerClassName)&&$.datepicker._curInst!==inst){$.datepicker._hideDatepicker();}},/* Adjust one of the date sub-fields. */_adjustDate:function _adjustDate(id,offset,period){var target=$(id),inst=this._getInst(target[0]);if(this._isDisabledDatepicker(target[0])){return;}this._adjustInstDate(inst,offset+(period==="M"?this._get(inst,"showCurrentAtPos"):0),// undo positioning
period);this._updateDatepicker(inst);},/* Action for current link. */_gotoToday:function _gotoToday(id){var date,target=$(id),inst=this._getInst(target[0]);if(this._get(inst,"gotoCurrent")&&inst.currentDay){inst.selectedDay=inst.currentDay;inst.drawMonth=inst.selectedMonth=inst.currentMonth;inst.drawYear=inst.selectedYear=inst.currentYear;}else{date=new Date();inst.selectedDay=date.getDate();inst.drawMonth=inst.selectedMonth=date.getMonth();inst.drawYear=inst.selectedYear=date.getFullYear();}this._notifyChange(inst);this._adjustDate(target);},/* Action for selecting a new month/year. */_selectMonthYear:function _selectMonthYear(id,select,period){var target=$(id),inst=this._getInst(target[0]);inst["selected"+(period==="M"?"Month":"Year")]=inst["draw"+(period==="M"?"Month":"Year")]=parseInt(select.options[select.selectedIndex].value,10);this._notifyChange(inst);this._adjustDate(target);},/* Action for selecting a day. */_selectDay:function _selectDay(id,month,year,td){var inst,target=$(id);if($(td).hasClass(this._unselectableClass)||this._isDisabledDatepicker(target[0])){return;}inst=this._getInst(target[0]);inst.selectedDay=inst.currentDay=$("a",td).html();inst.selectedMonth=inst.currentMonth=month;inst.selectedYear=inst.currentYear=year;this._selectDate(id,this._formatDate(inst,inst.currentDay,inst.currentMonth,inst.currentYear));},/* Erase the input field and hide the date picker. */_clearDate:function _clearDate(id){var target=$(id);this._selectDate(target,"");},/* Update the input field with the selected date. */_selectDate:function _selectDate(id,dateStr){var onSelect,target=$(id),inst=this._getInst(target[0]);dateStr=dateStr!=null?dateStr:this._formatDate(inst);if(inst.input){inst.input.val(dateStr);}this._updateAlternate(inst);onSelect=this._get(inst,"onSelect");if(onSelect){onSelect.apply(inst.input?inst.input[0]:null,[dateStr,inst]);// trigger custom callback
}else if(inst.input){inst.input.trigger("change");// fire the change event
}if(inst.inline){this._updateDatepicker(inst);}else{this._hideDatepicker();this._lastInput=inst.input[0];if(_typeof(inst.input[0])!=="object"){inst.input.focus();// restore focus
}this._lastInput=null;}},/* Update any alternate field to synchronise with the main field. */_updateAlternate:function _updateAlternate(inst){var altFormat,date,dateStr,altField=this._get(inst,"altField");if(altField){// update alternate field too
altFormat=this._get(inst,"altFormat")||this._get(inst,"dateFormat");date=this._getDate(inst);dateStr=this.formatDate(altFormat,date,this._getFormatConfig(inst));$(altField).each(function(){$(this).val(dateStr);});}},/* Set as beforeShowDay function to prevent selection of weekends.
	 * @param  date  Date - the date to customise
	 * @return [boolean, string] - is this date selectable?, what is its CSS class?
	 */noWeekends:function noWeekends(date){var day=date.getDay();return[day>0&&day<6,""];},/* Set as calculateWeek to determine the week of the year based on the ISO 8601 definition.
	 * @param  date  Date - the date to get the week for
	 * @return  number - the number of the week within the year that contains this date
	 */iso8601Week:function iso8601Week(date){var time,checkDate=new Date(date.getTime());// Find Thursday of this week starting on Monday
checkDate.setDate(checkDate.getDate()+4-(checkDate.getDay()||7));time=checkDate.getTime();checkDate.setMonth(0);// Compare with Jan 1
checkDate.setDate(1);return Math.floor(Math.round((time-checkDate)/86400000)/7)+1;},/* Parse a string value into a date object.
	 * See formatDate below for the possible formats.
	 *
	 * @param  format string - the expected format of the date
	 * @param  value string - the date in the above format
	 * @param  settings Object - attributes include:
	 *					shortYearCutoff  number - the cutoff year for determining the century (optional)
	 *					dayNamesShort	string[7] - abbreviated names of the days from Sunday (optional)
	 *					dayNames		string[7] - names of the days from Sunday (optional)
	 *					monthNamesShort string[12] - abbreviated names of the months (optional)
	 *					monthNames		string[12] - names of the months (optional)
	 * @return  Date - the extracted date value or null if value is blank
	 */parseDate:function parseDate(format,value,settings){if(format==null||value==null){throw"Invalid arguments";}value=(typeof value==="undefined"?"undefined":_typeof(value))==="object"?value.toString():value+"";if(value===""){return null;}var iFormat,dim,extra,iValue=0,shortYearCutoffTemp=(settings?settings.shortYearCutoff:null)||this._defaults.shortYearCutoff,shortYearCutoff=typeof shortYearCutoffTemp!=="string"?shortYearCutoffTemp:new Date().getFullYear()%100+parseInt(shortYearCutoffTemp,10),dayNamesShort=(settings?settings.dayNamesShort:null)||this._defaults.dayNamesShort,dayNames=(settings?settings.dayNames:null)||this._defaults.dayNames,monthNamesShort=(settings?settings.monthNamesShort:null)||this._defaults.monthNamesShort,monthNames=(settings?settings.monthNames:null)||this._defaults.monthNames,year=-1,month=-1,day=-1,doy=-1,literal=false,date,// Check whether a format character is doubled
lookAhead=function lookAhead(match){var matches=iFormat+1<format.length&&format.charAt(iFormat+1)===match;if(matches){iFormat++;}return matches;},// Extract a number from the string value
getNumber=function getNumber(match){var isDoubled=lookAhead(match),size=match==="@"?14:match==="!"?20:match==="y"&&isDoubled?4:match==="o"?3:2,minSize=match==="y"?size:1,digits=new RegExp("^\\d{"+minSize+","+size+"}"),num=value.substring(iValue).match(digits);if(!num){throw"Missing number at position "+iValue;}iValue+=num[0].length;return parseInt(num[0],10);},// Extract a name from the string value and convert to an index
getName=function getName(match,shortNames,longNames){var index=-1,names=$.map(lookAhead(match)?longNames:shortNames,function(v,k){return[[k,v]];}).sort(function(a,b){return-(a[1].length-b[1].length);});$.each(names,function(i,pair){var name=pair[1];if(value.substr(iValue,name.length).toLowerCase()===name.toLowerCase()){index=pair[0];iValue+=name.length;return false;}});if(index!==-1){return index+1;}else{throw"Unknown name at position "+iValue;}},// Confirm that a literal character matches the string value
checkLiteral=function checkLiteral(){if(value.charAt(iValue)!==format.charAt(iFormat)){throw"Unexpected literal at position "+iValue;}iValue++;};for(iFormat=0;iFormat<format.length;iFormat++){if(literal){if(format.charAt(iFormat)==="'"&&!lookAhead("'")){literal=false;}else{checkLiteral();}}else{switch(format.charAt(iFormat)){case"d":day=getNumber("d");break;case"D":getName("D",dayNamesShort,dayNames);break;case"o":doy=getNumber("o");break;case"m":month=getNumber("m");break;case"M":month=getName("M",monthNamesShort,monthNames);break;case"y":year=getNumber("y");break;case"@":date=new Date(getNumber("@"));year=date.getFullYear();month=date.getMonth()+1;day=date.getDate();break;case"!":date=new Date((getNumber("!")-this._ticksTo1970)/10000);year=date.getFullYear();month=date.getMonth()+1;day=date.getDate();break;case"'":if(lookAhead("'")){checkLiteral();}else{literal=true;}break;default:checkLiteral();}}}if(iValue<value.length){extra=value.substr(iValue);if(!/^\s+/.test(extra)){throw"Extra/unparsed characters found in date: "+extra;}}if(year===-1){year=new Date().getFullYear();}else if(year<100){year+=new Date().getFullYear()-new Date().getFullYear()%100+(year<=shortYearCutoff?0:-100);}if(doy>-1){month=1;day=doy;do{dim=this._getDaysInMonth(year,month-1);if(day<=dim){break;}month++;day-=dim;}while(true);}date=this._daylightSavingAdjust(new Date(year,month-1,day));if(date.getFullYear()!==year||date.getMonth()+1!==month||date.getDate()!==day){throw"Invalid date";// E.g. 31/02/00
}return date;},/* Standard date formats. */ATOM:"yy-mm-dd",// RFC 3339 (ISO 8601)
COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",// RFC 822
TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",// ISO 8601
_ticksTo1970:((1970-1)*365+Math.floor(1970/4)-Math.floor(1970/100)+Math.floor(1970/400))*24*60*60*10000000,/* Format a date object into a string value.
	 * The format can be combinations of the following:
	 * d  - day of month (no leading zero)
	 * dd - day of month (two digit)
	 * o  - day of year (no leading zeros)
	 * oo - day of year (three digit)
	 * D  - day name short
	 * DD - day name long
	 * m  - month of year (no leading zero)
	 * mm - month of year (two digit)
	 * M  - month name short
	 * MM - month name long
	 * y  - year (two digit)
	 * yy - year (four digit)
	 * @ - Unix timestamp (ms since 01/01/1970)
	 * ! - Windows ticks (100ns since 01/01/0001)
	 * "..." - literal text
	 * '' - single quote
	 *
	 * @param  format string - the desired format of the date
	 * @param  date Date - the date value to format
	 * @param  settings Object - attributes include:
	 *					dayNamesShort	string[7] - abbreviated names of the days from Sunday (optional)
	 *					dayNames		string[7] - names of the days from Sunday (optional)
	 *					monthNamesShort string[12] - abbreviated names of the months (optional)
	 *					monthNames		string[12] - names of the months (optional)
	 * @return  string - the date in the above format
	 */formatDate:function formatDate(format,date,settings){if(!date){return"";}var iFormat,dayNamesShort=(settings?settings.dayNamesShort:null)||this._defaults.dayNamesShort,dayNames=(settings?settings.dayNames:null)||this._defaults.dayNames,monthNamesShort=(settings?settings.monthNamesShort:null)||this._defaults.monthNamesShort,monthNames=(settings?settings.monthNames:null)||this._defaults.monthNames,// Check whether a format character is doubled
lookAhead=function lookAhead(match){var matches=iFormat+1<format.length&&format.charAt(iFormat+1)===match;if(matches){iFormat++;}return matches;},// Format a number, with leading zero if necessary
formatNumber=function formatNumber(match,value,len){var num=""+value;if(lookAhead(match)){while(num.length<len){num="0"+num;}}return num;},// Format a name, short or long as requested
formatName=function formatName(match,value,shortNames,longNames){return lookAhead(match)?longNames[value]:shortNames[value];},output="",literal=false;if(date){for(iFormat=0;iFormat<format.length;iFormat++){if(literal){if(format.charAt(iFormat)==="'"&&!lookAhead("'")){literal=false;}else{output+=format.charAt(iFormat);}}else{switch(format.charAt(iFormat)){case"d":output+=formatNumber("d",date.getDate(),2);break;case"D":output+=formatName("D",date.getDay(),dayNamesShort,dayNames);break;case"o":output+=formatNumber("o",Math.round((new Date(date.getFullYear(),date.getMonth(),date.getDate()).getTime()-new Date(date.getFullYear(),0,0).getTime())/86400000),3);break;case"m":output+=formatNumber("m",date.getMonth()+1,2);break;case"M":output+=formatName("M",date.getMonth(),monthNamesShort,monthNames);break;case"y":output+=lookAhead("y")?date.getFullYear():(date.getYear()%100<10?"0":"")+date.getYear()%100;break;case"@":output+=date.getTime();break;case"!":output+=date.getTime()*10000+this._ticksTo1970;break;case"'":if(lookAhead("'")){output+="'";}else{literal=true;}break;default:output+=format.charAt(iFormat);}}}}return output;},/* Extract all possible characters from the date format. */_possibleChars:function _possibleChars(format){var iFormat,chars="",literal=false,// Check whether a format character is doubled
lookAhead=function lookAhead(match){var matches=iFormat+1<format.length&&format.charAt(iFormat+1)===match;if(matches){iFormat++;}return matches;};for(iFormat=0;iFormat<format.length;iFormat++){if(literal){if(format.charAt(iFormat)==="'"&&!lookAhead("'")){literal=false;}else{chars+=format.charAt(iFormat);}}else{switch(format.charAt(iFormat)){case"d":case"m":case"y":case"@":chars+="0123456789";break;case"D":case"M":return null;// Accept anything
case"'":if(lookAhead("'")){chars+="'";}else{literal=true;}break;default:chars+=format.charAt(iFormat);}}}return chars;},/* Get a setting value, defaulting if necessary. */_get:function _get(inst,name){return inst.settings[name]!==undefined?inst.settings[name]:this._defaults[name];},/* Parse existing date and initialise date picker. */_setDateFromField:function _setDateFromField(inst,noDefault){if(inst.input.val()===inst.lastVal){return;}var dateFormat=this._get(inst,"dateFormat"),dates=inst.lastVal=inst.input?inst.input.val():null,defaultDate=this._getDefaultDate(inst),date=defaultDate,settings=this._getFormatConfig(inst);try{date=this.parseDate(dateFormat,dates,settings)||defaultDate;}catch(event){dates=noDefault?"":dates;}inst.selectedDay=date.getDate();inst.drawMonth=inst.selectedMonth=date.getMonth();inst.drawYear=inst.selectedYear=date.getFullYear();inst.currentDay=dates?date.getDate():0;inst.currentMonth=dates?date.getMonth():0;inst.currentYear=dates?date.getFullYear():0;this._adjustInstDate(inst);},/* Retrieve the default date shown on opening. */_getDefaultDate:function _getDefaultDate(inst){return this._restrictMinMax(inst,this._determineDate(inst,this._get(inst,"defaultDate"),new Date()));},/* A date may be specified as an exact value or a relative one. */_determineDate:function _determineDate(inst,date,defaultDate){var offsetNumeric=function offsetNumeric(offset){var date=new Date();date.setDate(date.getDate()+offset);return date;},offsetString=function offsetString(offset){try{return $.datepicker.parseDate($.datepicker._get(inst,"dateFormat"),offset,$.datepicker._getFormatConfig(inst));}catch(e){// Ignore
}var date=(offset.toLowerCase().match(/^c/)?$.datepicker._getDate(inst):null)||new Date(),year=date.getFullYear(),month=date.getMonth(),day=date.getDate(),pattern=/([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,matches=pattern.exec(offset);while(matches){switch(matches[2]||"d"){case"d":case"D":day+=parseInt(matches[1],10);break;case"w":case"W":day+=parseInt(matches[1],10)*7;break;case"m":case"M":month+=parseInt(matches[1],10);day=Math.min(day,$.datepicker._getDaysInMonth(year,month));break;case"y":case"Y":year+=parseInt(matches[1],10);day=Math.min(day,$.datepicker._getDaysInMonth(year,month));break;}matches=pattern.exec(offset);}return new Date(year,month,day);},newDate=date==null||date===""?defaultDate:typeof date==="string"?offsetString(date):typeof date==="number"?isNaN(date)?defaultDate:offsetNumeric(date):new Date(date.getTime());newDate=newDate&&newDate.toString()==="Invalid Date"?defaultDate:newDate;if(newDate){newDate.setHours(0);newDate.setMinutes(0);newDate.setSeconds(0);newDate.setMilliseconds(0);}return this._daylightSavingAdjust(newDate);},/* Handle switch to/from daylight saving.
	 * Hours may be non-zero on daylight saving cut-over:
	 * > 12 when midnight changeover, but then cannot generate
	 * midnight datetime, so jump to 1AM, otherwise reset.
	 * @param  date  (Date) the date to check
	 * @return  (Date) the corrected date
	 */_daylightSavingAdjust:function _daylightSavingAdjust(date){if(!date){return null;}date.setHours(date.getHours()>12?date.getHours()+2:0);return date;},/* Set the date(s) directly. */_setDate:function _setDate(inst,date,noChange){var clear=!date,origMonth=inst.selectedMonth,origYear=inst.selectedYear,newDate=this._restrictMinMax(inst,this._determineDate(inst,date,new Date()));inst.selectedDay=inst.currentDay=newDate.getDate();inst.drawMonth=inst.selectedMonth=inst.currentMonth=newDate.getMonth();inst.drawYear=inst.selectedYear=inst.currentYear=newDate.getFullYear();if((origMonth!==inst.selectedMonth||origYear!==inst.selectedYear)&&!noChange){this._notifyChange(inst);}this._adjustInstDate(inst);if(inst.input){inst.input.val(clear?"":this._formatDate(inst));}},/* Retrieve the date(s) directly. */_getDate:function _getDate(inst){var startDate=!inst.currentYear||inst.input&&inst.input.val()===""?null:this._daylightSavingAdjust(new Date(inst.currentYear,inst.currentMonth,inst.currentDay));return startDate;},/* Attach the onxxx handlers.  These are declared statically so
	 * they work with static code transformers like Caja.
	 */_attachHandlers:function _attachHandlers(inst){var stepMonths=this._get(inst,"stepMonths"),id="#"+inst.id.replace(/\\\\/g,"\\");inst.dpDiv.find("[data-handler]").map(function(){var handler={prev:function prev(){$.datepicker._adjustDate(id,-stepMonths,"M");},next:function next(){$.datepicker._adjustDate(id,+stepMonths,"M");},hide:function hide(){$.datepicker._hideDatepicker();},today:function today(){$.datepicker._gotoToday(id);},selectDay:function selectDay(){$.datepicker._selectDay(id,+this.getAttribute("data-month"),+this.getAttribute("data-year"),this);return false;},selectMonth:function selectMonth(){$.datepicker._selectMonthYear(id,this,"M");return false;},selectYear:function selectYear(){$.datepicker._selectMonthYear(id,this,"Y");return false;}};$(this).bind(this.getAttribute("data-event"),handler[this.getAttribute("data-handler")]);});},/* Generate the HTML for the current state of the date picker. */_generateHTML:function _generateHTML(inst){var maxDraw,prevText,prev,nextText,next,currentText,gotoDate,controls,buttonPanel,firstDay,showWeek,dayNames,dayNamesMin,monthNames,monthNamesShort,beforeShowDay,showOtherMonths,selectOtherMonths,defaultDate,html,dow,row,group,col,selectedDate,cornerClass,calender,thead,day,daysInMonth,leadDays,curRows,numRows,printDate,dRow,tbody,daySettings,otherMonth,unselectable,tempDate=new Date(),today=this._daylightSavingAdjust(new Date(tempDate.getFullYear(),tempDate.getMonth(),tempDate.getDate())),// clear time
isRTL=this._get(inst,"isRTL"),showButtonPanel=this._get(inst,"showButtonPanel"),hideIfNoPrevNext=this._get(inst,"hideIfNoPrevNext"),navigationAsDateFormat=this._get(inst,"navigationAsDateFormat"),numMonths=this._getNumberOfMonths(inst),showCurrentAtPos=this._get(inst,"showCurrentAtPos"),stepMonths=this._get(inst,"stepMonths"),isMultiMonth=numMonths[0]!==1||numMonths[1]!==1,currentDate=this._daylightSavingAdjust(!inst.currentDay?new Date(9999,9,9):new Date(inst.currentYear,inst.currentMonth,inst.currentDay)),minDate=this._getMinMaxDate(inst,"min"),maxDate=this._getMinMaxDate(inst,"max"),drawMonth=inst.drawMonth-showCurrentAtPos,drawYear=inst.drawYear;if(drawMonth<0){drawMonth+=12;drawYear--;}if(maxDate){maxDraw=this._daylightSavingAdjust(new Date(maxDate.getFullYear(),maxDate.getMonth()-numMonths[0]*numMonths[1]+1,maxDate.getDate()));maxDraw=minDate&&maxDraw<minDate?minDate:maxDraw;while(this._daylightSavingAdjust(new Date(drawYear,drawMonth,1))>maxDraw){drawMonth--;if(drawMonth<0){drawMonth=11;drawYear--;}}}inst.drawMonth=drawMonth;inst.drawYear=drawYear;prevText=this._get(inst,"prevText");prevText=!navigationAsDateFormat?prevText:this.formatDate(prevText,this._daylightSavingAdjust(new Date(drawYear,drawMonth-stepMonths,1)),this._getFormatConfig(inst));prev=this._canAdjustMonth(inst,-1,drawYear,drawMonth)?"<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click'"+" title='"+prevText+"'><span class='ui-icon ui-icon-circle-triangle-"+(isRTL?"e":"w")+"'>"+prevText+"</span></a>":hideIfNoPrevNext?"":"<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='"+prevText+"'><span class='ui-icon ui-icon-circle-triangle-"+(isRTL?"e":"w")+"'>"+prevText+"</span></a>";nextText=this._get(inst,"nextText");nextText=!navigationAsDateFormat?nextText:this.formatDate(nextText,this._daylightSavingAdjust(new Date(drawYear,drawMonth+stepMonths,1)),this._getFormatConfig(inst));next=this._canAdjustMonth(inst,+1,drawYear,drawMonth)?"<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click'"+" title='"+nextText+"'><span class='ui-icon ui-icon-circle-triangle-"+(isRTL?"w":"e")+"'>"+nextText+"</span></a>":hideIfNoPrevNext?"":"<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='"+nextText+"'><span class='ui-icon ui-icon-circle-triangle-"+(isRTL?"w":"e")+"'>"+nextText+"</span></a>";currentText=this._get(inst,"currentText");gotoDate=this._get(inst,"gotoCurrent")&&inst.currentDay?currentDate:today;currentText=!navigationAsDateFormat?currentText:this.formatDate(currentText,gotoDate,this._getFormatConfig(inst));controls=!inst.inline?"<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>"+this._get(inst,"closeText")+"</button>":"";buttonPanel=showButtonPanel?"<div class='ui-datepicker-buttonpane ui-widget-content'>"+(isRTL?controls:"")+(this._isInRange(inst,gotoDate)?"<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'"+">"+currentText+"</button>":"")+(isRTL?"":controls)+"</div>":"";firstDay=parseInt(this._get(inst,"firstDay"),10);firstDay=isNaN(firstDay)?0:firstDay;showWeek=this._get(inst,"showWeek");dayNames=this._get(inst,"dayNames");dayNamesMin=this._get(inst,"dayNamesMin");monthNames=this._get(inst,"monthNames");monthNamesShort=this._get(inst,"monthNamesShort");beforeShowDay=this._get(inst,"beforeShowDay");showOtherMonths=this._get(inst,"showOtherMonths");selectOtherMonths=this._get(inst,"selectOtherMonths");defaultDate=this._getDefaultDate(inst);html="";dow;for(row=0;row<numMonths[0];row++){group="";this.maxRows=4;for(col=0;col<numMonths[1];col++){selectedDate=this._daylightSavingAdjust(new Date(drawYear,drawMonth,inst.selectedDay));cornerClass=" ui-corner-all";calender="";if(isMultiMonth){calender+="<div class='ui-datepicker-group";if(numMonths[1]>1){switch(col){case 0:calender+=" ui-datepicker-group-first";cornerClass=" ui-corner-"+(isRTL?"right":"left");break;case numMonths[1]-1:calender+=" ui-datepicker-group-last";cornerClass=" ui-corner-"+(isRTL?"left":"right");break;default:calender+=" ui-datepicker-group-middle";cornerClass="";break;}}calender+="'>";}calender+="<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix"+cornerClass+"'>"+(/all|left/.test(cornerClass)&&row===0?isRTL?next:prev:"")+(/all|right/.test(cornerClass)&&row===0?isRTL?prev:next:"")+this._generateMonthYearHeader(inst,drawMonth,drawYear,minDate,maxDate,row>0||col>0,monthNames,monthNamesShort)+// draw month headers
"</div><table class='ui-datepicker-calendar'><thead>"+"<tr>";thead=showWeek?"<th class='ui-datepicker-week-col'>"+this._get(inst,"weekHeader")+"</th>":"";for(dow=0;dow<7;dow++){// days of the week
day=(dow+firstDay)%7;thead+="<th scope='col'"+((dow+firstDay+6)%7>=5?" class='ui-datepicker-week-end'":"")+">"+"<span title='"+dayNames[day]+"'>"+dayNamesMin[day]+"</span></th>";}calender+=thead+"</tr></thead><tbody>";daysInMonth=this._getDaysInMonth(drawYear,drawMonth);if(drawYear===inst.selectedYear&&drawMonth===inst.selectedMonth){inst.selectedDay=Math.min(inst.selectedDay,daysInMonth);}leadDays=(this._getFirstDayOfMonth(drawYear,drawMonth)-firstDay+7)%7;curRows=Math.ceil((leadDays+daysInMonth)/7);// calculate the number of rows to generate
numRows=isMultiMonth?this.maxRows>curRows?this.maxRows:curRows:curRows;//If multiple months, use the higher number of rows (see #7043)
this.maxRows=numRows;printDate=this._daylightSavingAdjust(new Date(drawYear,drawMonth,1-leadDays));for(dRow=0;dRow<numRows;dRow++){// create date picker rows
calender+="<tr>";tbody=!showWeek?"":"<td class='ui-datepicker-week-col'>"+this._get(inst,"calculateWeek")(printDate)+"</td>";for(dow=0;dow<7;dow++){// create date picker days
daySettings=beforeShowDay?beforeShowDay.apply(inst.input?inst.input[0]:null,[printDate]):[true,""];otherMonth=printDate.getMonth()!==drawMonth;unselectable=otherMonth&&!selectOtherMonths||!daySettings[0]||minDate&&printDate<minDate||maxDate&&printDate>maxDate;tbody+="<td class='"+((dow+firstDay+6)%7>=5?" ui-datepicker-week-end":"")+(// highlight weekends
otherMonth?" ui-datepicker-other-month":"")+(// highlight days from other months
printDate.getTime()===selectedDate.getTime()&&drawMonth===inst.selectedMonth&&inst._keyEvent||// user pressed key
defaultDate.getTime()===printDate.getTime()&&defaultDate.getTime()===selectedDate.getTime()?// or defaultDate is current printedDate and defaultDate is selectedDate
" "+this._dayOverClass:"")+(// highlight selected day
unselectable?" "+this._unselectableClass+" ui-state-disabled":"")+(// highlight unselectable days
otherMonth&&!showOtherMonths?"":" "+daySettings[1]+(// highlight custom dates
printDate.getTime()===currentDate.getTime()?" "+this._currentClass:"")+(// highlight selected day
printDate.getTime()===today.getTime()?" ui-datepicker-today":""))+"'"+(// highlight today (if different)
(!otherMonth||showOtherMonths)&&daySettings[2]?" title='"+daySettings[2].replace(/'/g,"&#39;")+"'":"")+(// cell title
unselectable?"":" data-handler='selectDay' data-event='click' data-month='"+printDate.getMonth()+"' data-year='"+printDate.getFullYear()+"'")+">"+(// actions
otherMonth&&!showOtherMonths?"&#xa0;":// display for other months
unselectable?"<span class='ui-state-default'>"+printDate.getDate()+"</span>":"<a class='ui-state-default"+(printDate.getTime()===today.getTime()?" ui-state-highlight":"")+(printDate.getTime()===currentDate.getTime()?" ui-state-active":"")+(// highlight selected day
otherMonth?" ui-priority-secondary":"")+// distinguish dates from other months
"' href='#'>"+printDate.getDate()+"</a>")+"</td>";// display selectable date
printDate.setDate(printDate.getDate()+1);printDate=this._daylightSavingAdjust(printDate);}calender+=tbody+"</tr>";}drawMonth++;if(drawMonth>11){drawMonth=0;drawYear++;}calender+="</tbody></table>"+(isMultiMonth?"</div>"+(numMonths[0]>0&&col===numMonths[1]-1?"<div class='ui-datepicker-row-break'></div>":""):"");group+=calender;}html+=group;}html+=buttonPanel;inst._keyEvent=false;return html;},/* Generate the month and year header. */_generateMonthYearHeader:function _generateMonthYearHeader(inst,drawMonth,drawYear,minDate,maxDate,secondary,monthNames,monthNamesShort){var inMinYear,inMaxYear,month,years,thisYear,determineYear,year,endYear,changeMonth=this._get(inst,"changeMonth"),changeYear=this._get(inst,"changeYear"),showMonthAfterYear=this._get(inst,"showMonthAfterYear"),html="<div class='ui-datepicker-title'>",monthHtml="";// month selection
if(secondary||!changeMonth){monthHtml+="<span class='ui-datepicker-month'>"+monthNames[drawMonth]+"</span>";}else{inMinYear=minDate&&minDate.getFullYear()===drawYear;inMaxYear=maxDate&&maxDate.getFullYear()===drawYear;monthHtml+="<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>";for(month=0;month<12;month++){if((!inMinYear||month>=minDate.getMonth())&&(!inMaxYear||month<=maxDate.getMonth())){monthHtml+="<option value='"+month+"'"+(month===drawMonth?" selected='selected'":"")+">"+monthNamesShort[month]+"</option>";}}monthHtml+="</select>";}if(!showMonthAfterYear){html+=monthHtml+(secondary||!(changeMonth&&changeYear)?"&#xa0;":"");}// year selection
if(!inst.yearshtml){inst.yearshtml="";if(secondary||!changeYear){html+="<span class='ui-datepicker-year'>"+drawYear+"</span>";}else{// determine range of years to display
years=this._get(inst,"yearRange").split(":");thisYear=new Date().getFullYear();determineYear=function determineYear(value){var year=value.match(/c[+\-].*/)?drawYear+parseInt(value.substring(1),10):value.match(/[+\-].*/)?thisYear+parseInt(value,10):parseInt(value,10);return isNaN(year)?thisYear:year;};year=determineYear(years[0]);endYear=Math.max(year,determineYear(years[1]||""));year=minDate?Math.max(year,minDate.getFullYear()):year;endYear=maxDate?Math.min(endYear,maxDate.getFullYear()):endYear;inst.yearshtml+="<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";for(;year<=endYear;year++){inst.yearshtml+="<option value='"+year+"'"+(year===drawYear?" selected='selected'":"")+">"+year+"</option>";}inst.yearshtml+="</select>";html+=inst.yearshtml;inst.yearshtml=null;}}html+=this._get(inst,"yearSuffix");if(showMonthAfterYear){html+=(secondary||!(changeMonth&&changeYear)?"&#xa0;":"")+monthHtml;}html+="</div>";// Close datepicker_header
return html;},/* Adjust one of the date sub-fields. */_adjustInstDate:function _adjustInstDate(inst,offset,period){var year=inst.drawYear+(period==="Y"?offset:0),month=inst.drawMonth+(period==="M"?offset:0),day=Math.min(inst.selectedDay,this._getDaysInMonth(year,month))+(period==="D"?offset:0),date=this._restrictMinMax(inst,this._daylightSavingAdjust(new Date(year,month,day)));inst.selectedDay=date.getDate();inst.drawMonth=inst.selectedMonth=date.getMonth();inst.drawYear=inst.selectedYear=date.getFullYear();if(period==="M"||period==="Y"){this._notifyChange(inst);}},/* Ensure a date is within any min/max bounds. */_restrictMinMax:function _restrictMinMax(inst,date){var minDate=this._getMinMaxDate(inst,"min"),maxDate=this._getMinMaxDate(inst,"max"),newDate=minDate&&date<minDate?minDate:date;return maxDate&&newDate>maxDate?maxDate:newDate;},/* Notify change of month/year. */_notifyChange:function _notifyChange(inst){var onChange=this._get(inst,"onChangeMonthYear");if(onChange){onChange.apply(inst.input?inst.input[0]:null,[inst.selectedYear,inst.selectedMonth+1,inst]);}},/* Determine the number of months to show. */_getNumberOfMonths:function _getNumberOfMonths(inst){var numMonths=this._get(inst,"numberOfMonths");return numMonths==null?[1,1]:typeof numMonths==="number"?[1,numMonths]:numMonths;},/* Determine the current maximum date - ensure no time components are set. */_getMinMaxDate:function _getMinMaxDate(inst,minMax){return this._determineDate(inst,this._get(inst,minMax+"Date"),null);},/* Find the number of days in a given month. */_getDaysInMonth:function _getDaysInMonth(year,month){return 32-this._daylightSavingAdjust(new Date(year,month,32)).getDate();},/* Find the day of the week of the first of a month. */_getFirstDayOfMonth:function _getFirstDayOfMonth(year,month){return new Date(year,month,1).getDay();},/* Determines if we should allow a "next/prev" month display change. */_canAdjustMonth:function _canAdjustMonth(inst,offset,curYear,curMonth){var numMonths=this._getNumberOfMonths(inst),date=this._daylightSavingAdjust(new Date(curYear,curMonth+(offset<0?offset:numMonths[0]*numMonths[1]),1));if(offset<0){date.setDate(this._getDaysInMonth(date.getFullYear(),date.getMonth()));}return this._isInRange(inst,date);},/* Is the given date in the accepted range? */_isInRange:function _isInRange(inst,date){var yearSplit,currentYear,minDate=this._getMinMaxDate(inst,"min"),maxDate=this._getMinMaxDate(inst,"max"),minYear=null,maxYear=null,years=this._get(inst,"yearRange");if(years){yearSplit=years.split(":");currentYear=new Date().getFullYear();minYear=parseInt(yearSplit[0],10);maxYear=parseInt(yearSplit[1],10);if(yearSplit[0].match(/[+\-].*/)){minYear+=currentYear;}if(yearSplit[1].match(/[+\-].*/)){maxYear+=currentYear;}}return(!minDate||date.getTime()>=minDate.getTime())&&(!maxDate||date.getTime()<=maxDate.getTime())&&(!minYear||date.getFullYear()>=minYear)&&(!maxYear||date.getFullYear()<=maxYear);},/* Provide the configuration settings for formatting/parsing. */_getFormatConfig:function _getFormatConfig(inst){var shortYearCutoff=this._get(inst,"shortYearCutoff");shortYearCutoff=typeof shortYearCutoff!=="string"?shortYearCutoff:new Date().getFullYear()%100+parseInt(shortYearCutoff,10);return{shortYearCutoff:shortYearCutoff,dayNamesShort:this._get(inst,"dayNamesShort"),dayNames:this._get(inst,"dayNames"),monthNamesShort:this._get(inst,"monthNamesShort"),monthNames:this._get(inst,"monthNames")};},/* Format the given date for display. */_formatDate:function _formatDate(inst,day,month,year){if(!day){inst.currentDay=inst.selectedDay;inst.currentMonth=inst.selectedMonth;inst.currentYear=inst.selectedYear;}var date=day?(typeof day==="undefined"?"undefined":_typeof(day))==="object"?day:this._daylightSavingAdjust(new Date(year,month,day)):this._daylightSavingAdjust(new Date(inst.currentYear,inst.currentMonth,inst.currentDay));return this.formatDate(this._get(inst,"dateFormat"),date,this._getFormatConfig(inst));}});/*
 * Bind hover events for datepicker elements.
 * Done via delegate so the binding only occurs once in the lifetime of the parent div.
 * Global datepicker_instActive, set by _updateDatepicker allows the handlers to find their way back to the active picker.
 */function datepicker_bindHover(dpDiv){var selector="button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";return dpDiv.delegate(selector,"mouseout",function(){$(this).removeClass("ui-state-hover");if(this.className.indexOf("ui-datepicker-prev")!==-1){$(this).removeClass("ui-datepicker-prev-hover");}if(this.className.indexOf("ui-datepicker-next")!==-1){$(this).removeClass("ui-datepicker-next-hover");}}).delegate(selector,"mouseover",datepicker_handleMouseover);}function datepicker_handleMouseover(){if(!$.datepicker._isDisabledDatepicker(datepicker_instActive.inline?datepicker_instActive.dpDiv.parent()[0]:datepicker_instActive.input[0])){$(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover");$(this).addClass("ui-state-hover");if(this.className.indexOf("ui-datepicker-prev")!==-1){$(this).addClass("ui-datepicker-prev-hover");}if(this.className.indexOf("ui-datepicker-next")!==-1){$(this).addClass("ui-datepicker-next-hover");}}}/* jQuery extend now ignores nulls! */function datepicker_extendRemove(target,props){$.extend(target,props);for(var name in props){if(props[name]==null){target[name]=props[name];}}return target;}/* Invoke the datepicker functionality.
   @param  options  string - a command, optionally followed by additional parameters or
					Object - settings for attaching new datepicker functionality
   @return  jQuery object */$.fn.datepicker=function(options){/* Verify an empty collection wasn't passed - Fixes #6976 */if(!this.length){return this;}/* Initialise the date picker. */if(!$.datepicker.initialized){$(document).mousedown($.datepicker._checkExternalClick);$.datepicker.initialized=true;}/* Append datepicker main container to body if not exist. */if($("#"+$.datepicker._mainDivId).length===0){$("body").append($.datepicker.dpDiv);}var otherArgs=Array.prototype.slice.call(arguments,1);if(typeof options==="string"&&(options==="isDisabled"||options==="getDate"||options==="widget")){return $.datepicker["_"+options+"Datepicker"].apply($.datepicker,[this[0]].concat(otherArgs));}if(options==="option"&&arguments.length===2&&typeof arguments[1]==="string"){return $.datepicker["_"+options+"Datepicker"].apply($.datepicker,[this[0]].concat(otherArgs));}return this.each(function(){typeof options==="string"?$.datepicker["_"+options+"Datepicker"].apply($.datepicker,[this].concat(otherArgs)):$.datepicker._attachDatepicker(this,options);});};$.datepicker=new Datepicker();// singleton instance
$.datepicker.initialized=false;$.datepicker.uuid=new Date().getTime();$.datepicker.version="1.11.1";var datepicker=$.datepicker;/*!
 * jQuery UI Slider 1.11.1
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/slider/
 */var slider=$.widget("ui.slider",$.ui.mouse,{version:"1.11.1",widgetEventPrefix:"slide",options:{animate:false,distance:0,max:100,min:0,orientation:"horizontal",range:false,step:1,value:0,values:null,// callbacks
change:null,slide:null,start:null,stop:null},// number of pages in a slider
// (how many times can you page up/down to go through the whole range)
numPages:5,_create:function _create(){this._keySliding=false;this._mouseSliding=false;this._animateOff=true;this._handleIndex=null;this._detectOrientation();this._mouseInit();this.element.addClass("ui-slider"+" ui-slider-"+this.orientation+" ui-widget"+" ui-widget-content"+" ui-corner-all");this._refresh();this._setOption("disabled",this.options.disabled);this._animateOff=false;},_refresh:function _refresh(){this._createRange();this._createHandles();this._setupEvents();this._refreshValue();},_createHandles:function _createHandles(){var i,handleCount,options=this.options,existingHandles=this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),handle="<span class='ui-slider-handle ui-state-default ui-corner-all' tabindex='0'></span>",handles=[];handleCount=options.values&&options.values.length||1;if(existingHandles.length>handleCount){existingHandles.slice(handleCount).remove();existingHandles=existingHandles.slice(0,handleCount);}for(i=existingHandles.length;i<handleCount;i++){handles.push(handle);}this.handles=existingHandles.add($(handles.join("")).appendTo(this.element));this.handle=this.handles.eq(0);this.handles.each(function(i){$(this).data("ui-slider-handle-index",i);});},_createRange:function _createRange(){var options=this.options,classes="";if(options.range){if(options.range===true){if(!options.values){options.values=[this._valueMin(),this._valueMin()];}else if(options.values.length&&options.values.length!==2){options.values=[options.values[0],options.values[0]];}else if($.isArray(options.values)){options.values=options.values.slice(0);}}if(!this.range||!this.range.length){this.range=$("<div></div>").appendTo(this.element);classes="ui-slider-range"+// note: this isn't the most fittingly semantic framework class for this element,
// but worked best visually with a variety of themes
" ui-widget-header ui-corner-all";}else{this.range.removeClass("ui-slider-range-min ui-slider-range-max")// Handle range switching from true to min/max
.css({"left":"","bottom":""});}this.range.addClass(classes+(options.range==="min"||options.range==="max"?" ui-slider-range-"+options.range:""));}else{if(this.range){this.range.remove();}this.range=null;}},_setupEvents:function _setupEvents(){this._off(this.handles);this._on(this.handles,this._handleEvents);this._hoverable(this.handles);this._focusable(this.handles);},_destroy:function _destroy(){this.handles.remove();if(this.range){this.range.remove();}this.element.removeClass("ui-slider"+" ui-slider-horizontal"+" ui-slider-vertical"+" ui-widget"+" ui-widget-content"+" ui-corner-all");this._mouseDestroy();},_mouseCapture:function _mouseCapture(event){var position,normValue,distance,closestHandle,index,allowed,offset,mouseOverHandle,that=this,o=this.options;if(o.disabled){return false;}this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()};this.elementOffset=this.element.offset();position={x:event.pageX,y:event.pageY};normValue=this._normValueFromMouse(position);distance=this._valueMax()-this._valueMin()+1;this.handles.each(function(i){var thisDistance=Math.abs(normValue-that.values(i));if(distance>thisDistance||distance===thisDistance&&(i===that._lastChangedValue||that.values(i)===o.min)){distance=thisDistance;closestHandle=$(this);index=i;}});allowed=this._start(event,index);if(allowed===false){return false;}this._mouseSliding=true;this._handleIndex=index;closestHandle.addClass("ui-state-active").focus();offset=closestHandle.offset();mouseOverHandle=!$(event.target).parents().addBack().is(".ui-slider-handle");this._clickOffset=mouseOverHandle?{left:0,top:0}:{left:event.pageX-offset.left-closestHandle.width()/2,top:event.pageY-offset.top-closestHandle.height()/2-(parseInt(closestHandle.css("borderTopWidth"),10)||0)-(parseInt(closestHandle.css("borderBottomWidth"),10)||0)+(parseInt(closestHandle.css("marginTop"),10)||0)};if(!this.handles.hasClass("ui-state-hover")){this._slide(event,index,normValue);}this._animateOff=true;return true;},_mouseStart:function _mouseStart(){return true;},_mouseDrag:function _mouseDrag(event){var position={x:event.pageX,y:event.pageY},normValue=this._normValueFromMouse(position);this._slide(event,this._handleIndex,normValue);return false;},_mouseStop:function _mouseStop(event){this.handles.removeClass("ui-state-active");this._mouseSliding=false;this._stop(event,this._handleIndex);this._change(event,this._handleIndex);this._handleIndex=null;this._clickOffset=null;this._animateOff=false;return false;},_detectOrientation:function _detectOrientation(){this.orientation=this.options.orientation==="vertical"?"vertical":"horizontal";},_normValueFromMouse:function _normValueFromMouse(position){var pixelTotal,pixelMouse,percentMouse,valueTotal,valueMouse;if(this.orientation==="horizontal"){pixelTotal=this.elementSize.width;pixelMouse=position.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0);}else{pixelTotal=this.elementSize.height;pixelMouse=position.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0);}percentMouse=pixelMouse/pixelTotal;if(percentMouse>1){percentMouse=1;}if(percentMouse<0){percentMouse=0;}if(this.orientation==="vertical"){percentMouse=1-percentMouse;}valueTotal=this._valueMax()-this._valueMin();valueMouse=this._valueMin()+percentMouse*valueTotal;return this._trimAlignValue(valueMouse);},_start:function _start(event,index){var uiHash={handle:this.handles[index],value:this.value()};if(this.options.values&&this.options.values.length){uiHash.value=this.values(index);uiHash.values=this.values();}return this._trigger("start",event,uiHash);},_slide:function _slide(event,index,newVal){var otherVal,newValues,allowed;if(this.options.values&&this.options.values.length){otherVal=this.values(index?0:1);if(this.options.values.length===2&&this.options.range===true&&(index===0&&newVal>otherVal||index===1&&newVal<otherVal)){newVal=otherVal;}if(newVal!==this.values(index)){newValues=this.values();newValues[index]=newVal;// A slide can be canceled by returning false from the slide callback
allowed=this._trigger("slide",event,{handle:this.handles[index],value:newVal,values:newValues});otherVal=this.values(index?0:1);if(allowed!==false){this.values(index,newVal);}}}else{if(newVal!==this.value()){// A slide can be canceled by returning false from the slide callback
allowed=this._trigger("slide",event,{handle:this.handles[index],value:newVal});if(allowed!==false){this.value(newVal);}}}},_stop:function _stop(event,index){var uiHash={handle:this.handles[index],value:this.value()};if(this.options.values&&this.options.values.length){uiHash.value=this.values(index);uiHash.values=this.values();}this._trigger("stop",event,uiHash);},_change:function _change(event,index){if(!this._keySliding&&!this._mouseSliding){var uiHash={handle:this.handles[index],value:this.value()};if(this.options.values&&this.options.values.length){uiHash.value=this.values(index);uiHash.values=this.values();}//store the last changed value index for reference when handles overlap
this._lastChangedValue=index;this._trigger("change",event,uiHash);}},value:function value(newValue){if(arguments.length){this.options.value=this._trimAlignValue(newValue);this._refreshValue();this._change(null,0);return;}return this._value();},values:function values(index,newValue){var vals,newValues,i;if(arguments.length>1){this.options.values[index]=this._trimAlignValue(newValue);this._refreshValue();this._change(null,index);return;}if(arguments.length){if($.isArray(arguments[0])){vals=this.options.values;newValues=arguments[0];for(i=0;i<vals.length;i+=1){vals[i]=this._trimAlignValue(newValues[i]);this._change(null,i);}this._refreshValue();}else{if(this.options.values&&this.options.values.length){return this._values(index);}else{return this.value();}}}else{return this._values();}},_setOption:function _setOption(key,value){var i,valsLength=0;if(key==="range"&&this.options.range===true){if(value==="min"){this.options.value=this._values(0);this.options.values=null;}else if(value==="max"){this.options.value=this._values(this.options.values.length-1);this.options.values=null;}}if($.isArray(this.options.values)){valsLength=this.options.values.length;}if(key==="disabled"){this.element.toggleClass("ui-state-disabled",!!value);}this._super(key,value);switch(key){case"orientation":this._detectOrientation();this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-"+this.orientation);this._refreshValue();// Reset positioning from previous orientation
this.handles.css(value==="horizontal"?"bottom":"left","");break;case"value":this._animateOff=true;this._refreshValue();this._change(null,0);this._animateOff=false;break;case"values":this._animateOff=true;this._refreshValue();for(i=0;i<valsLength;i+=1){this._change(null,i);}this._animateOff=false;break;case"min":case"max":this._animateOff=true;this._refreshValue();this._animateOff=false;break;case"range":this._animateOff=true;this._refresh();this._animateOff=false;break;}},//internal value getter
// _value() returns value trimmed by min and max, aligned by step
_value:function _value(){var val=this.options.value;val=this._trimAlignValue(val);return val;},//internal values getter
// _values() returns array of values trimmed by min and max, aligned by step
// _values( index ) returns single value trimmed by min and max, aligned by step
_values:function _values(index){var val,vals,i;if(arguments.length){val=this.options.values[index];val=this._trimAlignValue(val);return val;}else if(this.options.values&&this.options.values.length){// .slice() creates a copy of the array
// this copy gets trimmed by min and max and then returned
vals=this.options.values.slice();for(i=0;i<vals.length;i+=1){vals[i]=this._trimAlignValue(vals[i]);}return vals;}else{return[];}},// returns the step-aligned value that val is closest to, between (inclusive) min and max
_trimAlignValue:function _trimAlignValue(val){if(val<=this._valueMin()){return this._valueMin();}if(val>=this._valueMax()){return this._valueMax();}var step=this.options.step>0?this.options.step:1,valModStep=(val-this._valueMin())%step,alignValue=val-valModStep;if(Math.abs(valModStep)*2>=step){alignValue+=valModStep>0?step:-step;}// Since JavaScript has problems with large floats, round
// the final value to 5 digits after the decimal point (see #4124)
return parseFloat(alignValue.toFixed(5));},_valueMin:function _valueMin(){return this.options.min;},_valueMax:function _valueMax(){return this.options.max;},_refreshValue:function _refreshValue(){var lastValPercent,valPercent,value,valueMin,valueMax,oRange=this.options.range,o=this.options,that=this,animate=!this._animateOff?o.animate:false,_set={};if(this.options.values&&this.options.values.length){this.handles.each(function(i){valPercent=(that.values(i)-that._valueMin())/(that._valueMax()-that._valueMin())*100;_set[that.orientation==="horizontal"?"left":"bottom"]=valPercent+"%";$(this).stop(1,1)[animate?"animate":"css"](_set,o.animate);if(that.options.range===true){if(that.orientation==="horizontal"){if(i===0){that.range.stop(1,1)[animate?"animate":"css"]({left:valPercent+"%"},o.animate);}if(i===1){that.range[animate?"animate":"css"]({width:valPercent-lastValPercent+"%"},{queue:false,duration:o.animate});}}else{if(i===0){that.range.stop(1,1)[animate?"animate":"css"]({bottom:valPercent+"%"},o.animate);}if(i===1){that.range[animate?"animate":"css"]({height:valPercent-lastValPercent+"%"},{queue:false,duration:o.animate});}}}lastValPercent=valPercent;});}else{value=this.value();valueMin=this._valueMin();valueMax=this._valueMax();valPercent=valueMax!==valueMin?(value-valueMin)/(valueMax-valueMin)*100:0;_set[this.orientation==="horizontal"?"left":"bottom"]=valPercent+"%";this.handle.stop(1,1)[animate?"animate":"css"](_set,o.animate);if(oRange==="min"&&this.orientation==="horizontal"){this.range.stop(1,1)[animate?"animate":"css"]({width:valPercent+"%"},o.animate);}if(oRange==="max"&&this.orientation==="horizontal"){this.range[animate?"animate":"css"]({width:100-valPercent+"%"},{queue:false,duration:o.animate});}if(oRange==="min"&&this.orientation==="vertical"){this.range.stop(1,1)[animate?"animate":"css"]({height:valPercent+"%"},o.animate);}if(oRange==="max"&&this.orientation==="vertical"){this.range[animate?"animate":"css"]({height:100-valPercent+"%"},{queue:false,duration:o.animate});}}},_handleEvents:{keydown:function keydown(event){var allowed,curVal,newVal,step,index=$(event.target).data("ui-slider-handle-index");switch(event.keyCode){case $.ui.keyCode.HOME:case $.ui.keyCode.END:case $.ui.keyCode.PAGE_UP:case $.ui.keyCode.PAGE_DOWN:case $.ui.keyCode.UP:case $.ui.keyCode.RIGHT:case $.ui.keyCode.DOWN:case $.ui.keyCode.LEFT:event.preventDefault();if(!this._keySliding){this._keySliding=true;$(event.target).addClass("ui-state-active");allowed=this._start(event,index);if(allowed===false){return;}}break;}step=this.options.step;if(this.options.values&&this.options.values.length){curVal=newVal=this.values(index);}else{curVal=newVal=this.value();}switch(event.keyCode){case $.ui.keyCode.HOME:newVal=this._valueMin();break;case $.ui.keyCode.END:newVal=this._valueMax();break;case $.ui.keyCode.PAGE_UP:newVal=this._trimAlignValue(curVal+(this._valueMax()-this._valueMin())/this.numPages);break;case $.ui.keyCode.PAGE_DOWN:newVal=this._trimAlignValue(curVal-(this._valueMax()-this._valueMin())/this.numPages);break;case $.ui.keyCode.UP:case $.ui.keyCode.RIGHT:if(curVal===this._valueMax()){return;}newVal=this._trimAlignValue(curVal+step);break;case $.ui.keyCode.DOWN:case $.ui.keyCode.LEFT:if(curVal===this._valueMin()){return;}newVal=this._trimAlignValue(curVal-step);break;}this._slide(event,index,newVal);},keyup:function keyup(event){var index=$(event.target).data("ui-slider-handle-index");if(this._keySliding){this._keySliding=false;this._stop(event,index);this._change(event,index);$(event.target).removeClass("ui-state-active");}}}});});/*!
 * jQuery UI Touch Punch 0.2.3
 *
 * Copyright 2011–2014, Dave Furfero
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 * Depends:
 *  jquery.ui.widget.js
 *  jquery.ui.mouse.js
 */(function($){// Detect touch support
$.support.touch='ontouchend'in document;// Ignore browsers without touch support
if(!$.support.touch){return;}var mouseProto=$.ui.mouse.prototype,_mouseInit=mouseProto._mouseInit,_mouseDestroy=mouseProto._mouseDestroy,touchHandled;/**
   * Simulate a mouse event based on a corresponding touch event
   * @param {Object} event A touch event
   * @param {String} simulatedType The corresponding mouse event
   */function simulateMouseEvent(event,simulatedType){// Ignore multi-touch events
if(event.originalEvent.touches.length>1){return;}event.preventDefault();var touch=event.originalEvent.changedTouches[0],simulatedEvent=document.createEvent('MouseEvents');// Initialize the simulated mouse event using the touch event's coordinates
simulatedEvent.initMouseEvent(simulatedType,// type
true,// bubbles
true,// cancelable
window,// view
1,// detail
touch.screenX,// screenX
touch.screenY,// screenY
touch.clientX,// clientX
touch.clientY,// clientY
false,// ctrlKey
false,// altKey
false,// shiftKey
false,// metaKey
0,// button
null// relatedTarget
);// Dispatch the simulated event to the target element
event.target.dispatchEvent(simulatedEvent);}/**
   * Handle the jQuery UI widget's touchstart events
   * @param {Object} event The widget element's touchstart event
   */mouseProto._touchStart=function(event){var self=this;// Ignore the event if another widget is already being handled
if(touchHandled||!self._mouseCapture(event.originalEvent.changedTouches[0])){return;}// Set the flag to prevent other widgets from inheriting the touch event
touchHandled=true;// Track movement to determine if interaction was a click
self._touchMoved=false;// Simulate the mouseover event
simulateMouseEvent(event,'mouseover');// Simulate the mousemove event
simulateMouseEvent(event,'mousemove');// Simulate the mousedown event
simulateMouseEvent(event,'mousedown');};/**
   * Handle the jQuery UI widget's touchmove events
   * @param {Object} event The document's touchmove event
   */mouseProto._touchMove=function(event){// Ignore event if not handled
if(!touchHandled){return;}// Interaction was not a click
this._touchMoved=true;// Simulate the mousemove event
simulateMouseEvent(event,'mousemove');};/**
   * Handle the jQuery UI widget's touchend events
   * @param {Object} event The document's touchend event
   */mouseProto._touchEnd=function(event){// Ignore event if not handled
if(!touchHandled){return;}// Simulate the mouseup event
simulateMouseEvent(event,'mouseup');// Simulate the mouseout event
simulateMouseEvent(event,'mouseout');// If the touch interaction did not move, it should trigger a click
if(!this._touchMoved){// Simulate the click event
simulateMouseEvent(event,'click');}// Unset the flag to allow other widgets to inherit the touch event
touchHandled=false;};/**
   * A duck punch of the $.ui.mouse _mouseInit method to support touch events.
   * This method extends the widget with bound touch event handlers that
   * translate touch events to mouse events and pass them to the widget's
   * original mouse event handling methods.
   */mouseProto._mouseInit=function(){var self=this;// Delegate the touch handlers to the widget's element
self.element.bind({touchstart:$.proxy(self,'_touchStart'),touchmove:$.proxy(self,'_touchMove'),touchend:$.proxy(self,'_touchEnd')});// Call the original $.ui.mouse init method
_mouseInit.call(self);};/**
   * Remove the touch event handlers
   */mouseProto._mouseDestroy=function(){var self=this;// Delegate the touch handlers to the widget's element
self.element.unbind({touchstart:$.proxy(self,'_touchStart'),touchmove:$.proxy(self,'_touchMove'),touchend:$.proxy(self,'_touchEnd')});// Call the original $.ui.mouse destroy method
_mouseDestroy.call(self);};})(jQuery);/*!
 * jQuery Validation Plugin v1.13.0
 *
 * http://jqueryvalidation.org/
 *
 * Copyright (c) 2014 Jörn Zaefferer
 * Released under the MIT license
 */(function(factory){if(typeof define==="function"&&define.amd){define(["jquery"],factory);}else{factory(jQuery);}})(function($){$.extend($.fn,{// http://jqueryvalidation.org/validate/
validate:function validate(options){// if nothing is selected, return nothing; can't chain anyway
if(!this.length){if(options&&options.debug&&window.console){console.warn("Nothing selected, can't validate, returning nothing.");}return;}// check if a validator for this form was already created
var validator=$.data(this[0],"validator");if(validator){return validator;}// Add novalidate tag if HTML5.
this.attr("novalidate","novalidate");validator=new $.validator(options,this[0]);$.data(this[0],"validator",validator);if(validator.settings.onsubmit){this.validateDelegate(":submit","click",function(event){if(validator.settings.submitHandler){validator.submitButton=event.target;}// allow suppressing validation by adding a cancel class to the submit button
if($(event.target).hasClass("cancel")){validator.cancelSubmit=true;}// allow suppressing validation by adding the html5 formnovalidate attribute to the submit button
if($(event.target).attr("formnovalidate")!==undefined){validator.cancelSubmit=true;}});// validate the form on submit
this.submit(function(event){if(validator.settings.debug){// prevent form submit to be able to see console output
event.preventDefault();}function handle(){var hidden;if(validator.settings.submitHandler){if(validator.submitButton){// insert a hidden input as a replacement for the missing submit button
hidden=$("<input type='hidden'/>").attr("name",validator.submitButton.name).val($(validator.submitButton).val()).appendTo(validator.currentForm);}validator.settings.submitHandler.call(validator,validator.currentForm,event);if(validator.submitButton){// and clean up afterwards; thanks to no-block-scope, hidden can be referenced
hidden.remove();}return false;}return true;}// prevent submit for invalid forms or custom submit handlers
if(validator.cancelSubmit){validator.cancelSubmit=false;return handle();}if(validator.form()){if(validator.pendingRequest){validator.formSubmitted=true;return false;}return handle();}else{validator.focusInvalid();return false;}});}return validator;},// http://jqueryvalidation.org/valid/
valid:function valid(){var valid,validator;if($(this[0]).is("form")){valid=this.validate().form();}else{valid=true;validator=$(this[0].form).validate();this.each(function(){valid=validator.element(this)&&valid;});}return valid;},// attributes: space separated list of attributes to retrieve and remove
removeAttrs:function removeAttrs(attributes){var result={},$element=this;$.each(attributes.split(/\s/),function(index,value){result[value]=$element.attr(value);$element.removeAttr(value);});return result;},// http://jqueryvalidation.org/rules/
rules:function rules(command,argument){var element=this[0],settings,staticRules,existingRules,data,param,filtered;if(command){settings=$.data(element.form,"validator").settings;staticRules=settings.rules;existingRules=$.validator.staticRules(element);switch(command){case"add":$.extend(existingRules,$.validator.normalizeRule(argument));// remove messages from rules, but allow them to be set separately
delete existingRules.messages;staticRules[element.name]=existingRules;if(argument.messages){settings.messages[element.name]=$.extend(settings.messages[element.name],argument.messages);}break;case"remove":if(!argument){delete staticRules[element.name];return existingRules;}filtered={};$.each(argument.split(/\s/),function(index,method){filtered[method]=existingRules[method];delete existingRules[method];if(method==="required"){$(element).removeAttr("aria-required");}});return filtered;}}data=$.validator.normalizeRules($.extend({},$.validator.classRules(element),$.validator.attributeRules(element),$.validator.dataRules(element),$.validator.staticRules(element)),element);// make sure required is at front
if(data.required){param=data.required;delete data.required;data=$.extend({required:param},data);$(element).attr("aria-required","true");}// make sure remote is at back
if(data.remote){param=data.remote;delete data.remote;data=$.extend(data,{remote:param});}return data;}});// Custom selectors
$.extend($.expr[":"],{// http://jqueryvalidation.org/blank-selector/
blank:function blank(a){return!$.trim(""+$(a).val());},// http://jqueryvalidation.org/filled-selector/
filled:function filled(a){return!!$.trim(""+$(a).val());},// http://jqueryvalidation.org/unchecked-selector/
unchecked:function unchecked(a){return!$(a).prop("checked");}});// constructor for validator
$.validator=function(options,form){this.settings=$.extend(true,{},$.validator.defaults,options);this.currentForm=form;this.init();};// http://jqueryvalidation.org/jQuery.validator.format/
$.validator.format=function(source,params){if(arguments.length===1){return function(){var args=$.makeArray(arguments);args.unshift(source);return $.validator.format.apply(this,args);};}if(arguments.length>2&&params.constructor!==Array){params=$.makeArray(arguments).slice(1);}if(params.constructor!==Array){params=[params];}$.each(params,function(i,n){source=source.replace(new RegExp("\\{"+i+"\\}","g"),function(){return n;});});return source;};$.extend($.validator,{defaults:{messages:{},groups:{},rules:{},errorClass:"error",validClass:"valid",errorElement:"label",focusInvalid:true,errorContainer:$([]),errorLabelContainer:$([]),onsubmit:true,ignore:":hidden",ignoreTitle:false,onfocusin:function onfocusin(element){this.lastActive=element;// hide error label and remove error class on focus if enabled
if(this.settings.focusCleanup&&!this.blockFocusCleanup){if(this.settings.unhighlight){this.settings.unhighlight.call(this,element,this.settings.errorClass,this.settings.validClass);}this.hideThese(this.errorsFor(element));}},onfocusout:function onfocusout(element){if(!this.checkable(element)&&(element.name in this.submitted||!this.optional(element))){this.element(element);}},onkeyup:function onkeyup(element,event){if(event.which===9&&this.elementValue(element)===""){return;}else if(element.name in this.submitted||element===this.lastElement){this.element(element);}},onclick:function onclick(element){// click on selects, radiobuttons and checkboxes
if(element.name in this.submitted){this.element(element);// or option elements, check parent select in that case
}else if(element.parentNode.name in this.submitted){this.element(element.parentNode);}},highlight:function highlight(element,errorClass,validClass){if(element.type==="radio"){this.findByName(element.name).addClass(errorClass).removeClass(validClass);}else{$(element).addClass(errorClass).removeClass(validClass);}},unhighlight:function unhighlight(element,errorClass,validClass){if(element.type==="radio"){this.findByName(element.name).removeClass(errorClass).addClass(validClass);}else{$(element).removeClass(errorClass).addClass(validClass);}}},// http://jqueryvalidation.org/jQuery.validator.setDefaults/
setDefaults:function setDefaults(settings){$.extend($.validator.defaults,settings);},messages:{required:"This field is required.",remote:"Please fix this field.",email:"Please enter a valid email address.",url:"Please enter a valid URL.",date:"Please enter a valid date.",dateISO:"Please enter a valid date ( ISO ).",number:"Please enter a valid number.",digits:"Please enter only digits.",creditcard:"Please enter a valid credit card number.",equalTo:"Please enter the same value again.",maxlength:$.validator.format("Please enter no more than {0} characters."),minlength:$.validator.format("Please enter at least {0} characters."),rangelength:$.validator.format("Please enter a value between {0} and {1} characters long."),range:$.validator.format("Please enter a value between {0} and {1}."),max:$.validator.format("Please enter a value less than or equal to {0}."),min:$.validator.format("Please enter a value greater than or equal to {0}.")},autoCreateRanges:false,prototype:{init:function init(){this.labelContainer=$(this.settings.errorLabelContainer);this.errorContext=this.labelContainer.length&&this.labelContainer||$(this.currentForm);this.containers=$(this.settings.errorContainer).add(this.settings.errorLabelContainer);this.submitted={};this.valueCache={};this.pendingRequest=0;this.pending={};this.invalid={};this.reset();var groups=this.groups={},rules;$.each(this.settings.groups,function(key,value){if(typeof value==="string"){value=value.split(/\s/);}$.each(value,function(index,name){groups[name]=key;});});rules=this.settings.rules;$.each(rules,function(key,value){rules[key]=$.validator.normalizeRule(value);});function delegate(event){var validator=$.data(this[0].form,"validator"),eventType="on"+event.type.replace(/^validate/,""),settings=validator.settings;if(settings[eventType]&&!this.is(settings.ignore)){settings[eventType].call(validator,this[0],event);}}$(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, "+"[type='number'], [type='search'] ,[type='tel'], [type='url'], "+"[type='email'], [type='datetime'], [type='date'], [type='month'], "+"[type='week'], [type='time'], [type='datetime-local'], "+"[type='range'], [type='color'], [type='radio'], [type='checkbox']","focusin focusout keyup",delegate)// Support: Chrome, oldIE
// "select" is provided as event.target when clicking a option
.validateDelegate("select, option, [type='radio'], [type='checkbox']","click",delegate);if(this.settings.invalidHandler){$(this.currentForm).bind("invalid-form.validate",this.settings.invalidHandler);}// Add aria-required to any Static/Data/Class required fields before first validation
// Screen readers require this attribute to be present before the initial submission http://www.w3.org/TR/WCAG-TECHS/ARIA2.html
$(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required","true");},// http://jqueryvalidation.org/Validator.form/
form:function form(){this.checkForm();$.extend(this.submitted,this.errorMap);this.invalid=$.extend({},this.errorMap);if(!this.valid()){$(this.currentForm).triggerHandler("invalid-form",[this]);}this.showErrors();return this.valid();},checkForm:function checkForm(){this.prepareForm();for(var i=0,elements=this.currentElements=this.elements();elements[i];i++){this.check(elements[i]);}return this.valid();},// http://jqueryvalidation.org/Validator.element/
element:function element(_element){var cleanElement=this.clean(_element),checkElement=this.validationTargetFor(cleanElement),result=true;this.lastElement=checkElement;if(checkElement===undefined){delete this.invalid[cleanElement.name];}else{this.prepareElement(checkElement);this.currentElements=$(checkElement);result=this.check(checkElement)!==false;if(result){delete this.invalid[checkElement.name];}else{this.invalid[checkElement.name]=true;}}// Add aria-invalid status for screen readers
$(_element).attr("aria-invalid",!result);if(!this.numberOfInvalids()){// Hide error containers on last error
this.toHide=this.toHide.add(this.containers);}this.showErrors();return result;},// http://jqueryvalidation.org/Validator.showErrors/
showErrors:function showErrors(errors){if(errors){// add items to error list and map
$.extend(this.errorMap,errors);this.errorList=[];for(var name in errors){this.errorList.push({message:errors[name],element:this.findByName(name)[0]});}// remove items from success list
this.successList=$.grep(this.successList,function(element){return!(element.name in errors);});}if(this.settings.showErrors){this.settings.showErrors.call(this,this.errorMap,this.errorList);}else{this.defaultShowErrors();}},// http://jqueryvalidation.org/Validator.resetForm/
resetForm:function resetForm(){if($.fn.resetForm){$(this.currentForm).resetForm();}this.submitted={};this.lastElement=null;this.prepareForm();this.hideErrors();this.elements().removeClass(this.settings.errorClass).removeData("previousValue").removeAttr("aria-invalid");},numberOfInvalids:function numberOfInvalids(){return this.objectLength(this.invalid);},objectLength:function objectLength(obj){/* jshint unused: false */var count=0,i;for(i in obj){count++;}return count;},hideErrors:function hideErrors(){this.hideThese(this.toHide);},hideThese:function hideThese(errors){errors.not(this.containers).text("");this.addWrapper(errors).hide();},valid:function valid(){return this.size()===0;},size:function size(){return this.errorList.length;},focusInvalid:function focusInvalid(){if(this.settings.focusInvalid){try{$(this.findLastActive()||this.errorList.length&&this.errorList[0].element||[]).filter(":visible").focus()// manually trigger focusin event; without it, focusin handler isn't called, findLastActive won't have anything to find
.trigger("focusin");}catch(e){// ignore IE throwing errors when focusing hidden elements
}}},findLastActive:function findLastActive(){var lastActive=this.lastActive;return lastActive&&$.grep(this.errorList,function(n){return n.element.name===lastActive.name;}).length===1&&lastActive;},elements:function elements(){var validator=this,rulesCache={};// select all valid inputs inside the form (no submit or reset buttons)
return $(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function(){if(!this.name&&validator.settings.debug&&window.console){console.error("%o has no name assigned",this);}// select only the first element for each name, and only those with rules specified
if(this.name in rulesCache||!validator.objectLength($(this).rules())){return false;}rulesCache[this.name]=true;return true;});},clean:function clean(selector){return $(selector)[0];},errors:function errors(){var errorClass=this.settings.errorClass.split(" ").join(".");return $(this.settings.errorElement+"."+errorClass,this.errorContext);},reset:function reset(){this.successList=[];this.errorList=[];this.errorMap={};this.toShow=$([]);this.toHide=$([]);this.currentElements=$([]);},prepareForm:function prepareForm(){this.reset();this.toHide=this.errors().add(this.containers);},prepareElement:function prepareElement(element){this.reset();this.toHide=this.errorsFor(element);},elementValue:function elementValue(element){var val,$element=$(element),type=element.type;if(type==="radio"||type==="checkbox"){return $("input[name='"+element.name+"']:checked").val();}else if(type==="number"&&typeof element.validity!=="undefined"){return element.validity.badInput?false:$element.val();}val=$element.val();if(typeof val==="string"){return val.replace(/\r/g,"");}return val;},check:function check(element){element=this.validationTargetFor(this.clean(element));var rules=$(element).rules(),rulesCount=$.map(rules,function(n,i){return i;}).length,dependencyMismatch=false,val=this.elementValue(element),result,method,rule;for(method in rules){rule={method:method,parameters:rules[method]};try{result=$.validator.methods[method].call(this,val,element,rule.parameters);// if a method indicates that the field is optional and therefore valid,
// don't mark it as valid when there are no other rules
if(result==="dependency-mismatch"&&rulesCount===1){dependencyMismatch=true;continue;}dependencyMismatch=false;if(result==="pending"){this.toHide=this.toHide.not(this.errorsFor(element));return;}if(!result){this.formatAndAdd(element,rule);return false;}}catch(e){if(this.settings.debug&&window.console){console.log("Exception occurred when checking element "+element.id+", check the '"+rule.method+"' method.",e);}throw e;}}if(dependencyMismatch){return;}if(this.objectLength(rules)){this.successList.push(element);}return true;},// return the custom message for the given element and validation method
// specified in the element's HTML5 data attribute
// return the generic message if present and no method specific message is present
customDataMessage:function customDataMessage(element,method){return $(element).data("msg"+method.charAt(0).toUpperCase()+method.substring(1).toLowerCase())||$(element).data("msg");},// return the custom message for the given element name and validation method
customMessage:function customMessage(name,method){var m=this.settings.messages[name];return m&&(m.constructor===String?m:m[method]);},// return the first defined argument, allowing empty strings
findDefined:function findDefined(){for(var i=0;i<arguments.length;i++){if(arguments[i]!==undefined){return arguments[i];}}return undefined;},defaultMessage:function defaultMessage(element,method){return this.findDefined(this.customMessage(element.name,method),this.customDataMessage(element,method),// title is never undefined, so handle empty string as undefined
!this.settings.ignoreTitle&&element.title||undefined,$.validator.messages[method],"<strong>Warning: No message defined for "+element.name+"</strong>");},formatAndAdd:function formatAndAdd(element,rule){var message=this.defaultMessage(element,rule.method),theregex=/\$?\{(\d+)\}/g;if(typeof message==="function"){message=message.call(this,rule.parameters,element);}else if(theregex.test(message)){message=$.validator.format(message.replace(theregex,"{$1}"),rule.parameters);}this.errorList.push({message:message,element:element,method:rule.method});this.errorMap[element.name]=message;this.submitted[element.name]=message;},addWrapper:function addWrapper(toToggle){if(this.settings.wrapper){toToggle=toToggle.add(toToggle.parent(this.settings.wrapper));}return toToggle;},defaultShowErrors:function defaultShowErrors(){var i,elements,error;for(i=0;this.errorList[i];i++){error=this.errorList[i];if(this.settings.highlight){this.settings.highlight.call(this,error.element,this.settings.errorClass,this.settings.validClass);}this.showLabel(error.element,error.message);}if(this.errorList.length){this.toShow=this.toShow.add(this.containers);}if(this.settings.success){for(i=0;this.successList[i];i++){this.showLabel(this.successList[i]);}}if(this.settings.unhighlight){for(i=0,elements=this.validElements();elements[i];i++){this.settings.unhighlight.call(this,elements[i],this.settings.errorClass,this.settings.validClass);}}this.toHide=this.toHide.not(this.toShow);this.hideErrors();this.addWrapper(this.toShow).show();},validElements:function validElements(){return this.currentElements.not(this.invalidElements());},invalidElements:function invalidElements(){return $(this.errorList).map(function(){return this.element;});},showLabel:function showLabel(element,message){var place,group,errorID,error=this.errorsFor(element),elementID=this.idOrName(element),describedBy=$(element).attr("aria-describedby");if(error.length){// refresh error/success class
error.removeClass(this.settings.validClass).addClass(this.settings.errorClass);// replace message on existing label
error.html(message);}else{// create error element
error=$("<"+this.settings.errorElement+">").attr("id",elementID+"-error").addClass(this.settings.errorClass).html(message||"");// Maintain reference to the element to be placed into the DOM
place=error;if(this.settings.wrapper){// make sure the element is visible, even in IE
// actually showing the wrapped element is handled elsewhere
place=error.hide().show().wrap("<"+this.settings.wrapper+"/>").parent();}if(this.labelContainer.length){this.labelContainer.append(place);}else if(this.settings.errorPlacement){this.settings.errorPlacement(place,$(element));}else{place.insertAfter(element);}// Link error back to the element
if(error.is("label")){// If the error is a label, then associate using 'for'
error.attr("for",elementID);}else if(error.parents("label[for='"+elementID+"']").length===0){// If the element is not a child of an associated label, then it's necessary
// to explicitly apply aria-describedby
errorID=error.attr("id");// Respect existing non-error aria-describedby
if(!describedBy){describedBy=errorID;}else if(!describedBy.match(new RegExp("\b"+errorID+"\b"))){// Add to end of list if not already present
describedBy+=" "+errorID;}$(element).attr("aria-describedby",describedBy);// If this element is grouped, then assign to all elements in the same group
group=this.groups[element.name];if(group){$.each(this.groups,function(name,testgroup){if(testgroup===group){$("[name='"+name+"']",this.currentForm).attr("aria-describedby",error.attr("id"));}});}}}if(!message&&this.settings.success){error.text("");if(typeof this.settings.success==="string"){error.addClass(this.settings.success);}else{this.settings.success(error,element);}}this.toShow=this.toShow.add(error);},errorsFor:function errorsFor(element){var name=this.idOrName(element),describer=$(element).attr("aria-describedby"),selector="label[for='"+name+"'], label[for='"+name+"'] *";// aria-describedby should directly reference the error element
if(describer){selector=selector+", #"+describer.replace(/\s+/g,", #");}return this.errors().filter(selector);},idOrName:function idOrName(element){return this.groups[element.name]||(this.checkable(element)?element.name:element.id||element.name);},validationTargetFor:function validationTargetFor(element){// if radio/checkbox, validate first element in group instead
if(this.checkable(element)){element=this.findByName(element.name).not(this.settings.ignore)[0];}return element;},checkable:function checkable(element){return /radio|checkbox/i.test(element.type);},findByName:function findByName(name){return $(this.currentForm).find("[name='"+name+"']");},getLength:function getLength(value,element){switch(element.nodeName.toLowerCase()){case"select":return $("option:selected",element).length;case"input":if(this.checkable(element)){return this.findByName(element.name).filter(":checked").length;}}return value.length;},depend:function depend(param,element){return this.dependTypes[typeof param==="undefined"?"undefined":_typeof(param)]?this.dependTypes[typeof param==="undefined"?"undefined":_typeof(param)](param,element):true;},dependTypes:{"boolean":function boolean(param){return param;},"string":function string(param,element){return!!$(param,element.form).length;},"function":function _function(param,element){return param(element);}},optional:function optional(element){var val=this.elementValue(element);return!$.validator.methods.required.call(this,val,element)&&"dependency-mismatch";},startRequest:function startRequest(element){if(!this.pending[element.name]){this.pendingRequest++;this.pending[element.name]=true;}},stopRequest:function stopRequest(element,valid){this.pendingRequest--;// sometimes synchronization fails, make sure pendingRequest is never < 0
if(this.pendingRequest<0){this.pendingRequest=0;}delete this.pending[element.name];if(valid&&this.pendingRequest===0&&this.formSubmitted&&this.form()){$(this.currentForm).submit();this.formSubmitted=false;}else if(!valid&&this.pendingRequest===0&&this.formSubmitted){$(this.currentForm).triggerHandler("invalid-form",[this]);this.formSubmitted=false;}},previousValue:function previousValue(element){return $.data(element,"previousValue")||$.data(element,"previousValue",{old:null,valid:true,message:this.defaultMessage(element,"remote")});}},classRuleSettings:{required:{required:true},email:{email:true},url:{url:true},date:{date:true},dateISO:{dateISO:true},number:{number:true},digits:{digits:true},creditcard:{creditcard:true}},addClassRules:function addClassRules(className,rules){if(className.constructor===String){this.classRuleSettings[className]=rules;}else{$.extend(this.classRuleSettings,className);}},classRules:function classRules(element){var rules={},classes=$(element).attr("class");if(classes){$.each(classes.split(" "),function(){if(this in $.validator.classRuleSettings){$.extend(rules,$.validator.classRuleSettings[this]);}});}return rules;},attributeRules:function attributeRules(element){var rules={},$element=$(element),type=element.getAttribute("type"),method,value;for(method in $.validator.methods){// support for <input required> in both html5 and older browsers
if(method==="required"){value=element.getAttribute(method);// Some browsers return an empty string for the required attribute
// and non-HTML5 browsers might have required="" markup
if(value===""){value=true;}// force non-HTML5 browsers to return bool
value=!!value;}else{value=$element.attr(method);}// convert the value to a number for number inputs, and for text for backwards compability
// allows type="date" and others to be compared as strings
if(/min|max/.test(method)&&(type===null||/number|range|text/.test(type))){value=Number(value);}if(value||value===0){rules[method]=value;}else if(type===method&&type!=="range"){// exception: the jquery validate 'range' method
// does not test for the html5 'range' type
rules[method]=true;}}// maxlength may be returned as -1, 2147483647 ( IE ) and 524288 ( safari ) for text inputs
if(rules.maxlength&&/-1|2147483647|524288/.test(rules.maxlength)){delete rules.maxlength;}return rules;},dataRules:function dataRules(element){var method,value,rules={},$element=$(element);for(method in $.validator.methods){value=$element.data("rule"+method.charAt(0).toUpperCase()+method.substring(1).toLowerCase());if(value!==undefined){rules[method]=value;}}return rules;},staticRules:function staticRules(element){var rules={},validator=$.data(element.form,"validator");if(validator.settings.rules){rules=$.validator.normalizeRule(validator.settings.rules[element.name])||{};}return rules;},normalizeRules:function normalizeRules(rules,element){// handle dependency check
$.each(rules,function(prop,val){// ignore rule when param is explicitly false, eg. required:false
if(val===false){delete rules[prop];return;}if(val.param||val.depends){var keepRule=true;switch(_typeof(val.depends)){case"string":keepRule=!!$(val.depends,element.form).length;break;case"function":keepRule=val.depends.call(element,element);break;}if(keepRule){rules[prop]=val.param!==undefined?val.param:true;}else{delete rules[prop];}}});// evaluate parameters
$.each(rules,function(rule,parameter){rules[rule]=$.isFunction(parameter)?parameter(element):parameter;});// clean number parameters
$.each(["minlength","maxlength"],function(){if(rules[this]){rules[this]=Number(rules[this]);}});$.each(["rangelength","range"],function(){var parts;if(rules[this]){if($.isArray(rules[this])){rules[this]=[Number(rules[this][0]),Number(rules[this][1])];}else if(typeof rules[this]==="string"){parts=rules[this].replace(/[\[\]]/g,"").split(/[\s,]+/);rules[this]=[Number(parts[0]),Number(parts[1])];}}});if($.validator.autoCreateRanges){// auto-create ranges
if(rules.min&&rules.max){rules.range=[rules.min,rules.max];delete rules.min;delete rules.max;}if(rules.minlength&&rules.maxlength){rules.rangelength=[rules.minlength,rules.maxlength];delete rules.minlength;delete rules.maxlength;}}return rules;},// Converts a simple string to a {string: true} rule, e.g., "required" to {required:true}
normalizeRule:function normalizeRule(data){if(typeof data==="string"){var transformed={};$.each(data.split(/\s/),function(){transformed[this]=true;});data=transformed;}return data;},// http://jqueryvalidation.org/jQuery.validator.addMethod/
addMethod:function addMethod(name,method,message){$.validator.methods[name]=method;$.validator.messages[name]=message!==undefined?message:$.validator.messages[name];if(method.length<3){$.validator.addClassRules(name,$.validator.normalizeRule(name));}},methods:{// http://jqueryvalidation.org/required-method/
required:function required(value,element,param){// check if dependency is met
if(!this.depend(param,element)){return"dependency-mismatch";}if(element.nodeName.toLowerCase()==="select"){// could be an array for select-multiple or a string, both are fine this way
var val=$(element).val();return val&&val.length>0;}if(this.checkable(element)){return this.getLength(value,element)>0;}return $.trim(value).length>0;},// http://jqueryvalidation.org/email-method/
email:function email(value,element){// From http://www.whatwg.org/specs/web-apps/current-work/multipage/states-of-the-type-attribute.html#e-mail-state-%28type=email%29
// Retrieved 2014-01-14
// If you have a problem with this implementation, report a bug against the above spec
// Or use custom methods to implement your own email validation
return this.optional(element)||/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(value);},// http://jqueryvalidation.org/url-method/
url:function url(value,element){// contributed by Scott Gonzalez: http://projects.scottsplayground.com/iri/
return this.optional(element)||/^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(value);},// http://jqueryvalidation.org/date-method/
date:function date(value,element){return this.optional(element)||!/Invalid|NaN/.test(new Date(value).toString());},// http://jqueryvalidation.org/dateISO-method/
dateISO:function dateISO(value,element){return this.optional(element)||/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(value);},// http://jqueryvalidation.org/number-method/
number:function number(value,element){return this.optional(element)||/^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(value);},// http://jqueryvalidation.org/digits-method/
digits:function digits(value,element){return this.optional(element)||/^\d+$/.test(value);},// http://jqueryvalidation.org/creditcard-method/
// based on http://en.wikipedia.org/wiki/Luhn/
creditcard:function creditcard(value,element){if(this.optional(element)){return"dependency-mismatch";}// accept only spaces, digits and dashes
if(/[^0-9 \-]+/.test(value)){return false;}var nCheck=0,nDigit=0,bEven=false,n,cDigit;value=value.replace(/\D/g,"");// Basing min and max length on
// http://developer.ean.com/general_info/Valid_Credit_Card_Types
if(value.length<13||value.length>19){return false;}for(n=value.length-1;n>=0;n--){cDigit=value.charAt(n);nDigit=parseInt(cDigit,10);if(bEven){if((nDigit*=2)>9){nDigit-=9;}}nCheck+=nDigit;bEven=!bEven;}return nCheck%10===0;},// http://jqueryvalidation.org/minlength-method/
minlength:function minlength(value,element,param){var length=$.isArray(value)?value.length:this.getLength($.trim(value),element);return this.optional(element)||length>=param;},// http://jqueryvalidation.org/maxlength-method/
maxlength:function maxlength(value,element,param){var length=$.isArray(value)?value.length:this.getLength($.trim(value),element);return this.optional(element)||length<=param;},// http://jqueryvalidation.org/rangelength-method/
rangelength:function rangelength(value,element,param){var length=$.isArray(value)?value.length:this.getLength($.trim(value),element);return this.optional(element)||length>=param[0]&&length<=param[1];},// http://jqueryvalidation.org/min-method/
min:function min(value,element,param){return this.optional(element)||value>=param;},// http://jqueryvalidation.org/max-method/
max:function max(value,element,param){return this.optional(element)||value<=param;},// http://jqueryvalidation.org/range-method/
range:function range(value,element,param){return this.optional(element)||value>=param[0]&&value<=param[1];},// http://jqueryvalidation.org/equalTo-method/
equalTo:function equalTo(value,element,param){// bind to the blur event of the target in order to revalidate whenever the target field is updated
// TODO find a way to bind the event just once, avoiding the unbind-rebind overhead
var target=$(param);if(this.settings.onfocusout){target.unbind(".validate-equalTo").bind("blur.validate-equalTo",function(){$(element).valid();});}return value===target.val();},// http://jqueryvalidation.org/remote-method/
remote:function remote(value,element,param){if(this.optional(element)){return"dependency-mismatch";}var previous=this.previousValue(element),validator,data;if(!this.settings.messages[element.name]){this.settings.messages[element.name]={};}previous.originalMessage=this.settings.messages[element.name].remote;this.settings.messages[element.name].remote=previous.message;param=typeof param==="string"&&{url:param}||param;if(previous.old===value){return previous.valid;}previous.old=value;validator=this;this.startRequest(element);data={};data[element.name]=value;$.ajax($.extend(true,{url:param,mode:"abort",port:"validate"+element.name,dataType:"json",data:data,context:validator.currentForm,success:function success(response){var valid=response===true||response==="true",errors,message,submitted;validator.settings.messages[element.name].remote=previous.originalMessage;if(valid){submitted=validator.formSubmitted;validator.prepareElement(element);validator.formSubmitted=submitted;validator.successList.push(element);delete validator.invalid[element.name];validator.showErrors();}else{errors={};message=response||validator.defaultMessage(element,"remote");errors[element.name]=previous.message=$.isFunction(message)?message(value):message;validator.invalid[element.name]=true;validator.showErrors(errors);}previous.valid=valid;validator.stopRequest(element,valid);}},param));return"pending";}}});$.format=function deprecated(){throw"$.format has been deprecated. Please use $.validator.format instead.";};// ajax mode: abort
// usage: $.ajax({ mode: "abort"[, port: "uniqueport"]});
// if mode:"abort" is used, the previous request on that port (port can be undefined) is aborted via XMLHttpRequest.abort()
var pendingRequests={},ajax;// Use a prefilter if available (1.5+)
if($.ajaxPrefilter){$.ajaxPrefilter(function(settings,_,xhr){var port=settings.port;if(settings.mode==="abort"){if(pendingRequests[port]){pendingRequests[port].abort();}pendingRequests[port]=xhr;}});}else{// Proxy ajax
ajax=$.ajax;$.ajax=function(settings){var mode=("mode"in settings?settings:$.ajaxSettings).mode,port=("port"in settings?settings:$.ajaxSettings).port;if(mode==="abort"){if(pendingRequests[port]){pendingRequests[port].abort();}pendingRequests[port]=ajax.apply(this,arguments);return pendingRequests[port];}return ajax.apply(this,arguments);};}// provides delegate(type: String, delegate: Selector, handler: Callback) plugin for easier event delegation
// handler is only called when $(event.target).is(delegate), in the scope of the jquery-object for event.target
$.extend($.fn,{validateDelegate:function validateDelegate(delegate,type,handler){return this.bind(type,function(event){var target=$(event.target);if(target.is(delegate)){return handler.apply(target,arguments);}});}});});/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 *
 * Open source under the BSD License.
 *
 * Copyright © 2008 George McGinley Smith
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice, this list of
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list
 * of conditions and the following disclaimer in the documentation and/or other materials
 * provided with the distribution.
 *
 * Neither the name of the author nor the names of contributors may be used to endorse
 * or promote products derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
 * OF THE POSSIBILITY OF SUCH DAMAGE.
 *
*/// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing']=jQuery.easing['swing'];jQuery.extend(jQuery.easing,{def:'easeOutQuad',swing:function swing(x,t,b,c,d){//alert(jQuery.easing.default);
return jQuery.easing[jQuery.easing.def](x,t,b,c,d);},easeInQuad:function easeInQuad(x,t,b,c,d){return c*(t/=d)*t+b;},easeOutQuad:function easeOutQuad(x,t,b,c,d){return-c*(t/=d)*(t-2)+b;},easeInOutQuad:function easeInOutQuad(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t+b;return-c/2*(--t*(t-2)-1)+b;},easeInCubic:function easeInCubic(x,t,b,c,d){return c*(t/=d)*t*t+b;},easeOutCubic:function easeOutCubic(x,t,b,c,d){return c*((t=t/d-1)*t*t+1)+b;},easeInOutCubic:function easeInOutCubic(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t*t+b;return c/2*((t-=2)*t*t+2)+b;},easeInQuart:function easeInQuart(x,t,b,c,d){return c*(t/=d)*t*t*t+b;},easeOutQuart:function easeOutQuart(x,t,b,c,d){return-c*((t=t/d-1)*t*t*t-1)+b;},easeInOutQuart:function easeInOutQuart(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t*t*t+b;return-c/2*((t-=2)*t*t*t-2)+b;},easeInQuint:function easeInQuint(x,t,b,c,d){return c*(t/=d)*t*t*t*t+b;},easeOutQuint:function easeOutQuint(x,t,b,c,d){return c*((t=t/d-1)*t*t*t*t+1)+b;},easeInOutQuint:function easeInOutQuint(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t*t*t*t+b;return c/2*((t-=2)*t*t*t*t+2)+b;},easeInSine:function easeInSine(x,t,b,c,d){return-c*Math.cos(t/d*(Math.PI/2))+c+b;},easeOutSine:function easeOutSine(x,t,b,c,d){return c*Math.sin(t/d*(Math.PI/2))+b;},easeInOutSine:function easeInOutSine(x,t,b,c,d){return-c/2*(Math.cos(Math.PI*t/d)-1)+b;},easeInExpo:function easeInExpo(x,t,b,c,d){return t==0?b:c*Math.pow(2,10*(t/d-1))+b;},easeOutExpo:function easeOutExpo(x,t,b,c,d){return t==d?b+c:c*(-Math.pow(2,-10*t/d)+1)+b;},easeInOutExpo:function easeInOutExpo(x,t,b,c,d){if(t==0)return b;if(t==d)return b+c;if((t/=d/2)<1)return c/2*Math.pow(2,10*(t-1))+b;return c/2*(-Math.pow(2,-10*--t)+2)+b;},easeInCirc:function easeInCirc(x,t,b,c,d){return-c*(Math.sqrt(1-(t/=d)*t)-1)+b;},easeOutCirc:function easeOutCirc(x,t,b,c,d){return c*Math.sqrt(1-(t=t/d-1)*t)+b;},easeInOutCirc:function easeInOutCirc(x,t,b,c,d){if((t/=d/2)<1)return-c/2*(Math.sqrt(1-t*t)-1)+b;return c/2*(Math.sqrt(1-(t-=2)*t)+1)+b;},easeInElastic:function easeInElastic(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if(t==0)return b;if((t/=d)==1)return b+c;if(!p)p=d*.3;if(a<Math.abs(c)){a=c;var s=p/4;}else var s=p/(2*Math.PI)*Math.asin(c/a);return-(a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p))+b;},easeOutElastic:function easeOutElastic(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if(t==0)return b;if((t/=d)==1)return b+c;if(!p)p=d*.3;if(a<Math.abs(c)){a=c;var s=p/4;}else var s=p/(2*Math.PI)*Math.asin(c/a);return a*Math.pow(2,-10*t)*Math.sin((t*d-s)*(2*Math.PI)/p)+c+b;},easeInOutElastic:function easeInOutElastic(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if(t==0)return b;if((t/=d/2)==2)return b+c;if(!p)p=d*(.3*1.5);if(a<Math.abs(c)){a=c;var s=p/4;}else var s=p/(2*Math.PI)*Math.asin(c/a);if(t<1)return-.5*(a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p))+b;return a*Math.pow(2,-10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p)*.5+c+b;},easeInBack:function easeInBack(x,t,b,c,d,s){if(s==undefined)s=1.70158;return c*(t/=d)*t*((s+1)*t-s)+b;},easeOutBack:function easeOutBack(x,t,b,c,d,s){if(s==undefined)s=1.70158;return c*((t=t/d-1)*t*((s+1)*t+s)+1)+b;},easeInOutBack:function easeInOutBack(x,t,b,c,d,s){if(s==undefined)s=1.70158;if((t/=d/2)<1)return c/2*(t*t*(((s*=1.525)+1)*t-s))+b;return c/2*((t-=2)*t*(((s*=1.525)+1)*t+s)+2)+b;},easeInBounce:function easeInBounce(x,t,b,c,d){return c-jQuery.easing.easeOutBounce(x,d-t,0,c,d)+b;},easeOutBounce:function easeOutBounce(x,t,b,c,d){if((t/=d)<1/2.75){return c*(7.5625*t*t)+b;}else if(t<2/2.75){return c*(7.5625*(t-=1.5/2.75)*t+.75)+b;}else if(t<2.5/2.75){return c*(7.5625*(t-=2.25/2.75)*t+.9375)+b;}else{return c*(7.5625*(t-=2.625/2.75)*t+.984375)+b;}},easeInOutBounce:function easeInOutBounce(x,t,b,c,d){if(t<d/2)return jQuery.easing.easeInBounce(x,t*2,0,c,d)*.5+b;return jQuery.easing.easeOutBounce(x,t*2-d,0,c,d)*.5+c*.5+b;}});/*
 *
 * TERMS OF USE - EASING EQUATIONS
 *
 * Open source under the BSD License.
 *
 * Copyright © 2001 Robert Penner
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice, this list of
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list
 * of conditions and the following disclaimer in the documentation and/or other materials
 * provided with the distribution.
 *
 * Neither the name of the author nor the names of contributors may be used to endorse
 * or promote products derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
 * OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 *//*global jQuery *//*jshint browser:true *//*!
* FitVids 1.1
*
* Copyright 2013, Chris Coyier - http://css-tricks.com + Dave Rupert - http://daverupert.com
* Credit to Thierry Koblentz - http://www.alistapart.com/articles/creating-intrinsic-ratios-for-video/
* Released under the WTFPL license - http://sam.zoy.org/wtfpl/
*
*/(function($){'use strict';$.fn.fitVids=function(options){var settings={customSelector:null,ignore:null};if(!document.getElementById('fit-vids-style')){// appendStyles: https://github.com/toddmotto/fluidvids/blob/master/dist/fluidvids.js
var head=document.head||document.getElementsByTagName('head')[0];var css='.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}';var div=document.createElement("div");div.innerHTML='<p>x</p><style id="fit-vids-style">'+css+'</style>';head.appendChild(div.childNodes[1]);}if(options){$.extend(settings,options);}return this.each(function(){var selectors=['iframe[src*="player.vimeo.com"]','iframe[src*="youtube.com"]','iframe[src*="youtube-nocookie.com"]','iframe[src*="kickstarter.com"][src*="video.html"]','object','embed'];if(settings.customSelector){selectors.push(settings.customSelector);}var ignoreList='.fitvidsignore';if(settings.ignore){ignoreList=ignoreList+', '+settings.ignore;}var $allVideos=$(this).find(selectors.join(','));$allVideos=$allVideos.not('object object');// SwfObj conflict patch
$allVideos=$allVideos.not(ignoreList);// Disable FitVids on this video.
$allVideos.each(function(){var $this=$(this);if($this.parents(ignoreList).length>0){return;// Disable FitVids on this video.
}if(this.tagName.toLowerCase()==='embed'&&$this.parent('object').length||$this.parent('.fluid-width-video-wrapper').length){return;}if(!$this.css('height')&&!$this.css('width')&&(isNaN($this.attr('height'))||isNaN($this.attr('width')))){$this.attr('height',9);$this.attr('width',16);}var height=this.tagName.toLowerCase()==='object'||$this.attr('height')&&!isNaN(parseInt($this.attr('height'),10))?parseInt($this.attr('height'),10):$this.height(),width=!isNaN(parseInt($this.attr('width'),10))?parseInt($this.attr('width'),10):$this.width(),aspectRatio=height/width;if(!$this.attr('id')){var videoID='fitvid'+Math.floor(Math.random()*999999);$this.attr('id',videoID);}$this.wrap('<div class="fluid-width-video-wrapper"></div>').parent('.fluid-width-video-wrapper').css('padding-top',aspectRatio*100+'%');$this.removeAttr('height').removeAttr('width');});});};// Works with either jQuery or Zepto
})(window.jQuery||window.Zepto);(function(){'use strict';/**
	 * @preserve FastClick: polyfill to remove click delays on browsers with touch UIs.
	 *
	 * @codingstandard ftlabs-jsv2
	 * @copyright The Financial Times Limited [All Rights Reserved]
	 * @license MIT License (see LICENSE.txt)
	 *//*jslint browser:true, node:true*//*global define, Event, Node*//**
	 * Instantiate fast-clicking listeners on the specified layer.
	 *
	 * @constructor
	 * @param {Element} layer The layer to listen on
	 * @param {Object} [options={}] The options to override the defaults
	 */function FastClick(layer,options){var oldOnClick;options=options||{};/**
		 * Whether a click is currently being tracked.
		 *
		 * @type boolean
		 */this.trackingClick=false;/**
		 * Timestamp for when click tracking started.
		 *
		 * @type number
		 */this.trackingClickStart=0;/**
		 * The element being tracked for a click.
		 *
		 * @type EventTarget
		 */this.targetElement=null;/**
		 * X-coordinate of touch start event.
		 *
		 * @type number
		 */this.touchStartX=0;/**
		 * Y-coordinate of touch start event.
		 *
		 * @type number
		 */this.touchStartY=0;/**
		 * ID of the last touch, retrieved from Touch.identifier.
		 *
		 * @type number
		 */this.lastTouchIdentifier=0;/**
		 * Touchmove boundary, beyond which a click will be cancelled.
		 *
		 * @type number
		 */this.touchBoundary=options.touchBoundary||10;/**
		 * The FastClick layer.
		 *
		 * @type Element
		 */this.layer=layer;/**
		 * The minimum time between tap(touchstart and touchend) events
		 *
		 * @type number
		 */this.tapDelay=options.tapDelay||200;if(FastClick.notNeeded(layer)){return;}// Some old versions of Android don't have Function.prototype.bind
function bind(method,context){return function(){return method.apply(context,arguments);};}var methods=['onMouse','onClick','onTouchStart','onTouchMove','onTouchEnd','onTouchCancel'];var context=this;for(var i=0,l=methods.length;i<l;i++){context[methods[i]]=bind(context[methods[i]],context);}// Set up event handlers as required
if(deviceIsAndroid){layer.addEventListener('mouseover',this.onMouse,true);layer.addEventListener('mousedown',this.onMouse,true);layer.addEventListener('mouseup',this.onMouse,true);}layer.addEventListener('click',this.onClick,true);layer.addEventListener('touchstart',this.onTouchStart,false);layer.addEventListener('touchmove',this.onTouchMove,false);layer.addEventListener('touchend',this.onTouchEnd,false);layer.addEventListener('touchcancel',this.onTouchCancel,false);// Hack is required for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
// which is how FastClick normally stops click events bubbling to callbacks registered on the FastClick
// layer when they are cancelled.
if(!Event.prototype.stopImmediatePropagation){layer.removeEventListener=function(type,callback,capture){var rmv=Node.prototype.removeEventListener;if(type==='click'){rmv.call(layer,type,callback.hijacked||callback,capture);}else{rmv.call(layer,type,callback,capture);}};layer.addEventListener=function(type,callback,capture){var adv=Node.prototype.addEventListener;if(type==='click'){adv.call(layer,type,callback.hijacked||(callback.hijacked=function(event){if(!event.propagationStopped){callback(event);}}),capture);}else{adv.call(layer,type,callback,capture);}};}// If a handler is already declared in the element's onclick attribute, it will be fired before
// FastClick's onClick handler. Fix this by pulling out the user-defined handler function and
// adding it as listener.
if(typeof layer.onclick==='function'){// Android browser on at least 3.2 requires a new reference to the function in layer.onclick
// - the old one won't work if passed to addEventListener directly.
oldOnClick=layer.onclick;layer.addEventListener('click',function(event){oldOnClick(event);},false);layer.onclick=null;}}/**
	* Windows Phone 8.1 fakes user agent string to look like Android and iPhone.
	*
	* @type boolean
	*/var deviceIsWindowsPhone=navigator.userAgent.indexOf("Windows Phone")>=0;/**
	 * Android requires exceptions.
	 *
	 * @type boolean
	 */var deviceIsAndroid=navigator.userAgent.indexOf('Android')>0&&!deviceIsWindowsPhone;/**
	 * iOS requires exceptions.
	 *
	 * @type boolean
	 */var deviceIsIOS=/iP(ad|hone|od)/.test(navigator.userAgent)&&!deviceIsWindowsPhone;/**
	 * iOS 4 requires an exception for select elements.
	 *
	 * @type boolean
	 */var deviceIsIOS4=deviceIsIOS&&/OS 4_\d(_\d)?/.test(navigator.userAgent);/**
	 * iOS 6.0(+?) requires the target element to be manually derived
	 *
	 * @type boolean
	 */var deviceIsIOSWithBadTarget=deviceIsIOS&&/OS ([6-9]|\d{2})_\d/.test(navigator.userAgent);/**
	 * BlackBerry requires exceptions.
	 *
	 * @type boolean
	 */var deviceIsBlackBerry10=navigator.userAgent.indexOf('BB10')>0;/**
	 * Determine whether a given element requires a native click.
	 *
	 * @param {EventTarget|Element} target Target DOM element
	 * @returns {boolean} Returns true if the element needs a native click
	 */FastClick.prototype.needsClick=function(target){switch(target.nodeName.toLowerCase()){// Don't send a synthetic click to disabled inputs (issue #62)
case'button':case'select':case'textarea':if(target.disabled){return true;}break;case'input':// File inputs need real clicks on iOS 6 due to a browser bug (issue #68)
if(deviceIsIOS&&target.type==='file'||target.disabled){return true;}break;case'label':case'iframe':// iOS8 homescreen apps can prevent events bubbling into frames
case'video':return true;}return /\bneedsclick\b/.test(target.className);};/**
	 * Determine whether a given element requires a call to focus to simulate click into element.
	 *
	 * @param {EventTarget|Element} target Target DOM element
	 * @returns {boolean} Returns true if the element requires a call to focus to simulate native click.
	 */FastClick.prototype.needsFocus=function(target){switch(target.nodeName.toLowerCase()){case'textarea':return true;case'select':return!deviceIsAndroid;case'input':switch(target.type){case'button':case'checkbox':case'file':case'image':case'radio':case'submit':return false;}// No point in attempting to focus disabled inputs
return!target.disabled&&!target.readOnly;default:return /\bneedsfocus\b/.test(target.className);}};/**
	 * Send a click event to the specified element.
	 *
	 * @param {EventTarget|Element} targetElement
	 * @param {Event} event
	 */FastClick.prototype.sendClick=function(targetElement,event){var clickEvent,touch;// On some Android devices activeElement needs to be blurred otherwise the synthetic click will have no effect (#24)
if(document.activeElement&&document.activeElement!==targetElement){document.activeElement.blur();}touch=event.changedTouches[0];// Synthesise a click event, with an extra attribute so it can be tracked
clickEvent=document.createEvent('MouseEvents');clickEvent.initMouseEvent(this.determineEventType(targetElement),true,true,window,1,touch.screenX,touch.screenY,touch.clientX,touch.clientY,false,false,false,false,0,null);clickEvent.forwardedTouchEvent=true;targetElement.dispatchEvent(clickEvent);};FastClick.prototype.determineEventType=function(targetElement){//Issue #159: Android Chrome Select Box does not open with a synthetic click event
if(deviceIsAndroid&&targetElement.tagName.toLowerCase()==='select'){return'mousedown';}return'click';};/**
	 * @param {EventTarget|Element} targetElement
	 */FastClick.prototype.focus=function(targetElement){var length;// Issue #160: on iOS 7, some input elements (e.g. date datetime month) throw a vague TypeError on setSelectionRange. These elements don't have an integer value for the selectionStart and selectionEnd properties, but unfortunately that can't be used for detection because accessing the properties also throws a TypeError. Just check the type instead. Filed as Apple bug #15122724.
if(deviceIsIOS&&targetElement.setSelectionRange&&targetElement.type.indexOf('date')!==0&&targetElement.type!=='time'&&targetElement.type!=='month'){length=targetElement.value.length;targetElement.setSelectionRange(length,length);}else{targetElement.focus();}};/**
	 * Check whether the given target element is a child of a scrollable layer and if so, set a flag on it.
	 *
	 * @param {EventTarget|Element} targetElement
	 */FastClick.prototype.updateScrollParent=function(targetElement){var scrollParent,parentElement;scrollParent=targetElement.fastClickScrollParent;// Attempt to discover whether the target element is contained within a scrollable layer. Re-check if the
// target element was moved to another parent.
if(!scrollParent||!scrollParent.contains(targetElement)){parentElement=targetElement;do{if(parentElement.scrollHeight>parentElement.offsetHeight){scrollParent=parentElement;targetElement.fastClickScrollParent=parentElement;break;}parentElement=parentElement.parentElement;}while(parentElement);}// Always update the scroll top tracker if possible.
if(scrollParent){scrollParent.fastClickLastScrollTop=scrollParent.scrollTop;}};/**
	 * @param {EventTarget} targetElement
	 * @returns {Element|EventTarget}
	 */FastClick.prototype.getTargetElementFromEventTarget=function(eventTarget){// On some older browsers (notably Safari on iOS 4.1 - see issue #56) the event target may be a text node.
if(eventTarget.nodeType===Node.TEXT_NODE){return eventTarget.parentNode;}return eventTarget;};/**
	 * On touch start, record the position and scroll offset.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */FastClick.prototype.onTouchStart=function(event){var targetElement,touch,selection;// Ignore multiple touches, otherwise pinch-to-zoom is prevented if both fingers are on the FastClick element (issue #111).
if(event.targetTouches.length>1){return true;}targetElement=this.getTargetElementFromEventTarget(event.target);touch=event.targetTouches[0];if(deviceIsIOS){// Only trusted events will deselect text on iOS (issue #49)
selection=window.getSelection();if(selection.rangeCount&&!selection.isCollapsed){return true;}if(!deviceIsIOS4){// Weird things happen on iOS when an alert or confirm dialog is opened from a click event callback (issue #23):
// when the user next taps anywhere else on the page, new touchstart and touchend events are dispatched
// with the same identifier as the touch event that previously triggered the click that triggered the alert.
// Sadly, there is an issue on iOS 4 that causes some normal touch events to have the same identifier as an
// immediately preceeding touch event (issue #52), so this fix is unavailable on that platform.
// Issue 120: touch.identifier is 0 when Chrome dev tools 'Emulate touch events' is set with an iOS device UA string,
// which causes all touch events to be ignored. As this block only applies to iOS, and iOS identifiers are always long,
// random integers, it's safe to to continue if the identifier is 0 here.
if(touch.identifier&&touch.identifier===this.lastTouchIdentifier){event.preventDefault();return false;}this.lastTouchIdentifier=touch.identifier;// If the target element is a child of a scrollable layer (using -webkit-overflow-scrolling: touch) and:
// 1) the user does a fling scroll on the scrollable layer
// 2) the user stops the fling scroll with another tap
// then the event.target of the last 'touchend' event will be the element that was under the user's finger
// when the fling scroll was started, causing FastClick to send a click event to that layer - unless a check
// is made to ensure that a parent layer was not scrolled before sending a synthetic click (issue #42).
this.updateScrollParent(targetElement);}}this.trackingClick=true;this.trackingClickStart=event.timeStamp;this.targetElement=targetElement;this.touchStartX=touch.pageX;this.touchStartY=touch.pageY;// Prevent phantom clicks on fast double-tap (issue #36)
if(event.timeStamp-this.lastClickTime<this.tapDelay){event.preventDefault();}return true;};/**
	 * Based on a touchmove event object, check whether the touch has moved past a boundary since it started.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */FastClick.prototype.touchHasMoved=function(event){var touch=event.changedTouches[0],boundary=this.touchBoundary;if(Math.abs(touch.pageX-this.touchStartX)>boundary||Math.abs(touch.pageY-this.touchStartY)>boundary){return true;}return false;};/**
	 * Update the last position.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */FastClick.prototype.onTouchMove=function(event){if(!this.trackingClick){return true;}// If the touch has moved, cancel the click tracking
if(this.targetElement!==this.getTargetElementFromEventTarget(event.target)||this.touchHasMoved(event)){this.trackingClick=false;this.targetElement=null;}return true;};/**
	 * Attempt to find the labelled control for the given label element.
	 *
	 * @param {EventTarget|HTMLLabelElement} labelElement
	 * @returns {Element|null}
	 */FastClick.prototype.findControl=function(labelElement){// Fast path for newer browsers supporting the HTML5 control attribute
if(labelElement.control!==undefined){return labelElement.control;}// All browsers under test that support touch events also support the HTML5 htmlFor attribute
if(labelElement.htmlFor){return document.getElementById(labelElement.htmlFor);}// If no for attribute exists, attempt to retrieve the first labellable descendant element
// the list of which is defined here: http://www.w3.org/TR/html5/forms.html#category-label
return labelElement.querySelector('button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea');};/**
	 * On touch end, determine whether to send a click event at once.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */FastClick.prototype.onTouchEnd=function(event){var forElement,trackingClickStart,targetTagName,scrollParent,touch,targetElement=this.targetElement;if(!this.trackingClick){return true;}// Prevent phantom clicks on fast double-tap (issue #36)
if(event.timeStamp-this.lastClickTime<this.tapDelay){this.cancelNextClick=true;return true;}// Reset to prevent wrong click cancel on input (issue #156).
this.cancelNextClick=false;this.lastClickTime=event.timeStamp;trackingClickStart=this.trackingClickStart;this.trackingClick=false;this.trackingClickStart=0;// On some iOS devices, the targetElement supplied with the event is invalid if the layer
// is performing a transition or scroll, and has to be re-detected manually. Note that
// for this to function correctly, it must be called *after* the event target is checked!
// See issue #57; also filed as rdar://13048589 .
if(deviceIsIOSWithBadTarget){touch=event.changedTouches[0];// In certain cases arguments of elementFromPoint can be negative, so prevent setting targetElement to null
targetElement=document.elementFromPoint(touch.pageX-window.pageXOffset,touch.pageY-window.pageYOffset)||targetElement;targetElement.fastClickScrollParent=this.targetElement.fastClickScrollParent;}targetTagName=targetElement.tagName.toLowerCase();if(targetTagName==='label'){forElement=this.findControl(targetElement);if(forElement){this.focus(targetElement);if(deviceIsAndroid){return false;}targetElement=forElement;}}else if(this.needsFocus(targetElement)){// Case 1: If the touch started a while ago (best guess is 100ms based on tests for issue #36) then focus will be triggered anyway. Return early and unset the target element reference so that the subsequent click will be allowed through.
// Case 2: Without this exception for input elements tapped when the document is contained in an iframe, then any inputted text won't be visible even though the value attribute is updated as the user types (issue #37).
if(event.timeStamp-trackingClickStart>100||deviceIsIOS&&window.top!==window&&targetTagName==='input'){this.targetElement=null;return false;}this.focus(targetElement);this.sendClick(targetElement,event);// Select elements need the event to go through on iOS 4, otherwise the selector menu won't open.
// Also this breaks opening selects when VoiceOver is active on iOS6, iOS7 (and possibly others)
if(!deviceIsIOS||targetTagName!=='select'){this.targetElement=null;event.preventDefault();}return false;}if(deviceIsIOS&&!deviceIsIOS4){// Don't send a synthetic click event if the target element is contained within a parent layer that was scrolled
// and this tap is being used to stop the scrolling (usually initiated by a fling - issue #42).
scrollParent=targetElement.fastClickScrollParent;if(scrollParent&&scrollParent.fastClickLastScrollTop!==scrollParent.scrollTop){return true;}}// Prevent the actual click from going though - unless the target node is marked as requiring
// real clicks or if it is in the whitelist in which case only non-programmatic clicks are permitted.
if(!this.needsClick(targetElement)){event.preventDefault();this.sendClick(targetElement,event);}return false;};/**
	 * On touch cancel, stop tracking the click.
	 *
	 * @returns {void}
	 */FastClick.prototype.onTouchCancel=function(){this.trackingClick=false;this.targetElement=null;};/**
	 * Determine mouse events which should be permitted.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */FastClick.prototype.onMouse=function(event){// If a target element was never set (because a touch event was never fired) allow the event
if(!this.targetElement){return true;}if(event.forwardedTouchEvent){return true;}// Programmatically generated events targeting a specific element should be permitted
if(!event.cancelable){return true;}// Derive and check the target element to see whether the mouse event needs to be permitted;
// unless explicitly enabled, prevent non-touch click events from triggering actions,
// to prevent ghost/doubleclicks.
if(!this.needsClick(this.targetElement)||this.cancelNextClick){// Prevent any user-added listeners declared on FastClick element from being fired.
if(event.stopImmediatePropagation){event.stopImmediatePropagation();}else{// Part of the hack for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
event.propagationStopped=true;}// Cancel the event
event.stopPropagation();event.preventDefault();return false;}// If the mouse event is permitted, return true for the action to go through.
return true;};/**
	 * On actual clicks, determine whether this is a touch-generated click, a click action occurring
	 * naturally after a delay after a touch (which needs to be cancelled to avoid duplication), or
	 * an actual click which should be permitted.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */FastClick.prototype.onClick=function(event){var permitted;// It's possible for another FastClick-like library delivered with third-party code to fire a click event before FastClick does (issue #44). In that case, set the click-tracking flag back to false and return early. This will cause onTouchEnd to return early.
if(this.trackingClick){this.targetElement=null;this.trackingClick=false;return true;}// Very odd behaviour on iOS (issue #18): if a submit element is present inside a form and the user hits enter in the iOS simulator or clicks the Go button on the pop-up OS keyboard the a kind of 'fake' click event will be triggered with the submit-type input element as the target.
if(event.target.type==='submit'&&event.detail===0){return true;}permitted=this.onMouse(event);// Only unset targetElement if the click is not permitted. This will ensure that the check for !targetElement in onMouse fails and the browser's click doesn't go through.
if(!permitted){this.targetElement=null;}// If clicks are permitted, return true for the action to go through.
return permitted;};/**
	 * Remove all FastClick's event listeners.
	 *
	 * @returns {void}
	 */FastClick.prototype.destroy=function(){var layer=this.layer;if(deviceIsAndroid){layer.removeEventListener('mouseover',this.onMouse,true);layer.removeEventListener('mousedown',this.onMouse,true);layer.removeEventListener('mouseup',this.onMouse,true);}layer.removeEventListener('click',this.onClick,true);layer.removeEventListener('touchstart',this.onTouchStart,false);layer.removeEventListener('touchmove',this.onTouchMove,false);layer.removeEventListener('touchend',this.onTouchEnd,false);layer.removeEventListener('touchcancel',this.onTouchCancel,false);};/**
	 * Check whether FastClick is needed.
	 *
	 * @param {Element} layer The layer to listen on
	 */FastClick.notNeeded=function(layer){var metaViewport;var chromeVersion;var blackberryVersion;// Devices that don't support touch don't need FastClick
if(typeof window.ontouchstart==='undefined'){return true;}// Chrome version - zero for other browsers
chromeVersion=+(/Chrome\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1];if(chromeVersion){if(deviceIsAndroid){metaViewport=document.querySelector('meta[name=viewport]');if(metaViewport){// Chrome on Android with user-scalable="no" doesn't need FastClick (issue #89)
if(metaViewport.content.indexOf('user-scalable=no')!==-1){return true;}// Chrome 32 and above with width=device-width or less don't need FastClick
if(chromeVersion>31&&document.documentElement.scrollWidth<=window.outerWidth){return true;}}// Chrome desktop doesn't need FastClick (issue #15)
}else{return true;}}if(deviceIsBlackBerry10){blackberryVersion=navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/);// BlackBerry 10.3+ does not require Fastclick library.
// https://github.com/ftlabs/fastclick/issues/251
if(blackberryVersion[1]>=10&&blackberryVersion[2]>=3){metaViewport=document.querySelector('meta[name=viewport]');if(metaViewport){// user-scalable=no eliminates click delay.
if(metaViewport.content.indexOf('user-scalable=no')!==-1){return true;}// width=device-width (or less than device-width) eliminates click delay.
if(document.documentElement.scrollWidth<=window.outerWidth){return true;}}}}// IE10 with -ms-touch-action: none, which disables double-tap-to-zoom (issue #97)
if(layer.style.msTouchAction==='none'){return true;}// IE11: prefixed -ms-touch-action is no longer supported and it's recomended to use non-prefixed version
// http://msdn.microsoft.com/en-us/library/windows/apps/Hh767313.aspx
if(layer.style.touchAction==='none'){return true;}return false;};/**
	 * Factory method for creating a FastClick object
	 *
	 * @param {Element} layer The layer to listen on
	 * @param {Object} [options={}] The options to override the defaults
	 */FastClick.attach=function(layer,options){return new FastClick(layer,options);};if(typeof define=='function'&&_typeof(define.amd)=='object'&&define.amd){// AMD. Register as an anonymous module.
define(function(){return FastClick;});}else if(typeof module!=='undefined'&&module.exports){module.exports=FastClick.attach;module.exports.FastClick=FastClick;}else{window.FastClick=FastClick;}})();/*jshint esversion: 6 */// requires: plugins.js
var rm=rm||{};/* global FastClick, document */rm.general=function(){'use strict';var init=function init(){console.log('Working');var test=[1,2,3];test.map(function(x){return console.log('this'+x);});};// return public api
return{init:init};}();/* global rm:false, window:false */// requires: src.js
$(function(){'use strict';// initialise modules
rm.general.init();});