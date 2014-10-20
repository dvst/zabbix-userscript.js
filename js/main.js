$(document).ready(function(){
        $(document).on('scroll', function(){
                // jQuery("table.tableinfo:first").offset().top <  jQuery(document).scrollTop()
                if ($('#encabezado')[0].offsetTop < $(document).scrollTop()){
                        $("#encabezado").css({position: "fixed", top:0});            
                }
                        if ($(document).scrollTop() < $("#encabezado-ajustado")[0].offsetTop){
                        $("#encabezado").css({position: "static", top: 0});           
                }            
        });    
});
