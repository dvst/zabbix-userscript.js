// ==UserScript==
// @name         Zabbix Userscript overview
// @namespace    https://bitbucket.org/dvst/zabbix-userscript.js
// @version      0.6
// @description  Freeze table header in overview page
// @author       You
// @match        https://www.zabbix.org/zabbix/overview.php
// @grant        none
// ==/UserScript==

        $(document).on('scroll', function(){
                if (jQuery("table.tableinfo:first").offset().top <  jQuery(document).scrollTop()){
                        jQuery("table.tableinfo:first").css({position: "fixed", top:0});
                        console.info("pasando a fix");
                }
                if ($(document).scrollTop() < $("#encabezado-ajustado")[0].offsetTop){
                        jQuery("table.tableinfo:first").css({position: "static", top: 0});
                        console.info("pasando a static");
                }
         });
