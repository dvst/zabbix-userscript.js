== UserScript ==
// @name        atmv13
// @namespace   www.buhoz.com.ve
// @include     http://zabbix.bt.gob.ve/overview.php?*
// @version     1
// ==/UserScript==

var guion = 0;
var ceros = 0;
// imprime cuantos ATM no tiene 
jQuery(".tableinfo tr td:nth-child(21)").each(function (e) {
    if (jQuery(this).text() == "0 B") {
        guion++;
        jQuery(this).parent().children().first().css("background-color", "red");
    } else if (jQuery(this).text() == "-") {
        ceros++;
    }
    total = e;
});
var suma = guion + ceros;
var diferencia = total - suma;
jQuery("table.header_wide  tr.next td:nth-child(2)").html("<b>Guion (-):</b> " + guion +
    " <br> <b>Ceros (0 B):</b> " + ceros + "<br> <b>Faltan:</b> " + suma +
    " de " + total + " <br> <b>Van:</b> " + diferencia + " instalados");
