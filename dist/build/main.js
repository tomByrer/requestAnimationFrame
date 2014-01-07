/**
 * engineDetector version: "0.0.20" Copyright (c) 2011-2012, Cyril Agosta ( cyril.agosta.dev@gmail.com) All Rights Reserved.
 * Available via the MIT license.
 * see: http://github.com/cagosta/engineDetector for details
 */

/**
 * requestAnimationFrame version: "0.0.7" Copyright (c) 2011-2012, Cyril Agosta ( cyril.agosta.dev@gmail.com) All Rights Reserved.
 * Available via the MIT license.
 * see: http://github.com/cagosta/requestAnimationFrame for details
 *
 * http://paulirish.com/2011/requestanimationframe-for-smart-animating/
 * http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
 * requestAnimationFrame polyfill by Erik Möller. fixes from Paul Irish and Tino Zijdel
 * MIT license
 *
 */

define("engineDetector/EngineDetector",[],function(){var e=function(){this.isNode=!1,this.isBrowser=!1,this.isUnknown=!1,this._exports,this.detect()};return e.prototype={detect:function(){try{process.argv,this._setAsNode()}catch(e){}try{window.location.search,this._setAsBrowser()}catch(e){}this.isNode||this.isBrowser||this._setAsUnknown()},_setAsNode:function(){this.isNode=!0,this.name="node"},_setAsBrowser:function(){this.isBrowser=!0,this._global=window,this.name="browser"},_setAsUnknown:function(){this.isUnknown=!0,this.name="unknown"},setGlobal:function(e){this._global=e},ifNode:function(e){this.isNode&&e()},ifNotNode:function(e){this.isNode||e()},ifNotBrowser:function(e){this.isBrowser||e()},ifBrowser:function(e){this.isBrowser&&e()},exports:function(e,n){this.isNode?this._global.exports=n:this.isBrowser&&(this._global[e]=n)}},e}),define("engineDetector/engineDetector",["./EngineDetector"],function(e){return new e}),define("ifEngineIsNode",["engineDetector/engineDetector"],function(e){var n={load:function(n,o,i,t){return t.isBuild?(i(function(){return null}),void 0):(e.ifNode(function(){o([n],function(e){i(e)})}),e.ifNotNode(function(){i(null)}),void 0)}};return n}),define("window",["engineDetector/engineDetector","./ifEngineIsNode!jsdom"],function(e,n){if(e.isNode){var o=n.jsdom("<html><body></body></html>",n.level(1,"core"));return o.parentWindow}return e.isBrowser?window:void 0}),define("requestAnimationFrame/requestAnimationFrame",["window"],function(e){for(var n=0,o=["ms","moz","webkit","o"],i=0;i<o.length&&!e.requestAnimationFrame;++i)e.requestAnimationFrame=e[o[i]+"RequestAnimationFrame"],e.cancelAnimationFrame=e[o[i]+"CancelAnimationFrame"]||e[o[i]+"CancelRequestAnimationFrame"];return e.requestAnimationFrame||(e.requestAnimationFrame=function(o){var i=(new Date).getTime(),t=Math.max(0,16-(i-n)),s=e.setTimeout(function(){o(i+t)},t);return n=i+t,s}),e.cancelAnimationFrame||(e.cancelAnimationFrame=function(e){clearTimeout(e)}),e.requestAnimationFrame});var EngineDetector=function(){this.isNode=!1,this.isBrowser=!1,this.isUnknown=!1,this._exports,this.detect()};EngineDetector.prototype={detect:function(){"undefined"!=typeof module&&module.exports?this._setAsNode():"undefined"!=typeof window?this._setAsBrowser():this._setAsUnknown()},_setAsNode:function(){this.isNode=!0,this.name="node"},_setAsBrowser:function(){this.isBrowser=!0,this._global=window,this.name="browser"},_setAsUnknown:function(){this.isUnknown=!0,this.name="unknown"},setGlobal:function(e){this._global=e},ifNode:function(e){this.isNode&&e()},ifBrowser:function(e){this.isBrowser&&e()},exports:function(e,n){this.isNode?this._global.exports=n:this.isBrowser&&(this._global[e]=n)}};var engine=new EngineDetector,baseUrl,requirejs;engine.ifNode(function(){baseUrl=__dirname,requirejs=require("requirejs"),engine.setGlobal(module)}),engine.ifBrowser(function(){baseUrl="."}),requirejs.config({baseUrl:function(){return"undefined"==typeof define?__dirname:"."}(),shim:{mocha:{exports:"mocha"}},paths:{requestAnimationFrame:".",almond:"bower_components/almond/almond",chai:"bower_components/chai/chai","chai-as-promised":"bower_components/chai-as-promised/lib/chai-as-promised",mocha:"bower_components/mocha/mocha","normalize-css":"bower_components/normalize-css/normalize.css",requirejs:"bower_components/requirejs/require",async:"bower_components/requirejs-plugins/src/async",depend:"bower_components/requirejs-plugins/src/depend",font:"bower_components/requirejs-plugins/src/font",goog:"bower_components/requirejs-plugins/src/goog",image:"bower_components/requirejs-plugins/src/image",json:"bower_components/requirejs-plugins/src/json",mdown:"bower_components/requirejs-plugins/src/mdown",noext:"bower_components/requirejs-plugins/src/noext",propertyParser:"bower_components/requirejs-plugins/src/propertyParser","Markdown.Converter":"bower_components/requirejs-plugins/lib/Markdown.Converter",text:"bower_components/requirejs-plugins/lib/text","sinon-chai":"bower_components/sinon-chai/lib/sinon-chai",sinonjs:"bower_components/sinonjs/sinon",ifEngineIsNode:"bower_components/engineDetector/app/ifEngineIsNode",ifEngineIsBrowser:"bower_components/engineDetector/app/ifEngineIsBrowser",window:"bower_components/engineDetector/app/window",engineDetector:"bower_components/engineDetector/app",engine:"bower_components/engineDetector/app/engine"}});var isStandalone=!!requirejs._defined,synchronous=isStandalone;if(engine.ifNode(function(){synchronous=!0}),synchronous){var requestAnimationFrame=requirejs("requestAnimationFrame/requestAnimationFrame");engine.exports("requestAnimationFrame",requestAnimationFrame)}else requirejs(["requestAnimationFrame/requestAnimationFrame"],function(e){engine.exports("requestAnimationFrame",e)});define("requestAnimationFrame/main",function(){});