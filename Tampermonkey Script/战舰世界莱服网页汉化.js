// ==UserScript==
// @name         战舰世界莱服网页汉化
// @namespace    https://github.com/windofxy
// @version      202503110012
// @description  一个将战舰世界莱服网页内容翻译为中文的插件
// @author       Windofxy
// @icon         https://gh-proxy.net/github.com/OpenKorabli/Korabli-InGameBrowser-L10n-CHS/blob/main/Tampermonkey%20Script/icon128.png
// @grant        none
// @license      MIT

// @downloadURL  https://update.greasyfork.org/scripts/529417/%E6%88%98%E8%88%B0%E4%B8%96%E7%95%8C%E8%8E%B1%E6%9C%8D%E7%BD%91%E9%A1%B5%E6%B1%89%E5%8C%96.user.js
// @updateURL    https://update.greasyfork.org/scripts/529417/%E6%88%98%E8%88%B0%E4%B8%96%E7%95%8C%E8%8E%B1%E6%9C%8D%E7%BD%91%E9%A1%B5%E6%B1%89%E5%8C%96.meta.js

// @run-at       document_idle

// @match        http://armory.korabli.su/*
// @match        https://armory.korabli.su/*
// @match        http://clans.korabli.su/*
// @match        https://clans.korabli.su/*
// @match        http://dockyard.korabli.su/*
// @match        https://dockyard.korabli.su/*
// @match        http://friends.korabli.su/*
// @match        https://friends.korabli.su/*
// @match        http://profile.korabli.su/*
// @match        https://profile.korabli.su/*
// @match        http://warehouse.korabli.su/*
// @match        https://warehouse.korabli.su/*

// 代码-框架
// @require      https://update.greasyfork.org/scripts/529413/1551061/%E6%88%98%E8%88%B0%E4%B8%96%E7%95%8C%E8%8E%B1%E6%9C%8D%E7%BD%91%E9%A1%B5%E6%B1%89%E5%8C%96-%E4%BB%A3%E7%A0%81-%E6%A1%86%E6%9E%B6.js
// 资源-兵工厂翻译
// @require      https://update.greasyfork.org/scripts/529395/1550983/%E6%88%98%E8%88%B0%E4%B8%96%E7%95%8C%E8%8E%B1%E6%9C%8D%E7%BD%91%E9%A1%B5%E6%B1%89%E5%8C%96-%E8%B5%84%E6%BA%90-%E5%85%B5%E5%B7%A5%E5%8E%82%E7%BF%BB%E8%AF%91.js
// 资源-军团翻译
// @require      https://update.greasyfork.org/scripts/529397/1550989/%E6%88%98%E8%88%B0%E4%B8%96%E7%95%8C%E8%8E%B1%E6%9C%8D%E7%BD%91%E9%A1%B5%E6%B1%89%E5%8C%96-%E8%B5%84%E6%BA%90-%E5%86%9B%E5%9B%A2%E7%BF%BB%E8%AF%91.js
// 资源-造船厂翻译
// @require      https://update.greasyfork.org/scripts/529398/1550991/%E6%88%98%E8%88%B0%E4%B8%96%E7%95%8C%E8%8E%B1%E6%9C%8D%E7%BD%91%E9%A1%B5%E6%B1%89%E5%8C%96-%E8%B5%84%E6%BA%90-%E9%80%A0%E8%88%B9%E5%8E%82%E7%BF%BB%E8%AF%91.js
// 资源-征募站翻译
// @require      https://update.greasyfork.org/scripts/529402/1551011/%E6%88%98%E8%88%B0%E4%B8%96%E7%95%8C%E8%8E%B1%E6%9C%8D%E7%BD%91%E9%A1%B5%E6%B1%89%E5%8C%96-%E8%B5%84%E6%BA%90-%E5%BE%81%E5%8B%9F%E7%AB%99%E7%BF%BB%E8%AF%91.js
// 资源-账号档案翻译
// @require      https://update.greasyfork.org/scripts/529405/1551022/%E6%88%98%E8%88%B0%E4%B8%96%E7%95%8C%E8%8E%B1%E6%9C%8D%E7%BD%91%E9%A1%B5%E6%B1%89%E5%8C%96-%E8%B5%84%E6%BA%90-%E8%B4%A6%E5%8F%B7%E6%A1%A3%E6%A1%88%E7%BF%BB%E8%AF%91.js
// 资源-仓库翻译
// @require      https://update.greasyfork.org/scripts/529406/1551020/%E6%88%98%E8%88%B0%E4%B8%96%E7%95%8C%E8%8E%B1%E6%9C%8D%E7%BD%91%E9%A1%B5%E6%B1%89%E5%8C%96-%E8%B5%84%E6%BA%90-%E4%BB%93%E5%BA%93%E7%BF%BB%E8%AF%91.js
// ==/UserScript==

(function() {
    'use strict';
    // Your code here...
})();