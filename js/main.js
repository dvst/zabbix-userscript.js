$(document).ready(function(){
        $(document).on('scroll', function(){
                if ($('#encabezado')[0].offsetTop < $(document).scrollTop()){
                        $("#encabezado").css({position: "fixed", top:0});            
                }
                        if ($(document).scrollTop() < $("#encabezado-ajustado")[0].offsetTop){
                        $("#encabezado").css({position: "static", top: 0});           
                }            
        });    
});
