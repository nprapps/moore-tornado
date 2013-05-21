$(document).ready(function(){
    mapbox.load(['npr.ok-moore-tornado'], function(data){
        window.m = mapbox.map('map');
        m.addLayer(data[0].layer);
        m.setZoomRange(14, 18);
        m.interaction.auto();
        m.zoom(14);
        m.center({ lat: 35.338, lon: -97.486 });
        m.ui.zoomer.add();
    
        // var width = $(window).width();
        // 
        // if(width >= 960){
        //     m.zoom(14);
        //     m.center({ lat: 35.338, lon: -97.486 });
        //     m.ui.zoomer.add();
        // } else if (width >= 650){
        //     m.zoom(13);
        //     m.center({ lat: 35.338, lon: -97.486 });
        //     m.ui.zoomer.add();
        // } else {
        //     m.zoom(12);
        //     m.center({ lat: 35.338, lon: -97.486 });
        // }

        $("#about").click(function(){
            if($(".modal-body").children().length < 1 ) {
                $(".modal h3").text($(".legend-contents .headline").text());
                $(".legend-contents .headline").hide();
                $(".legend-contents").clone().appendTo(".modal-body");
            }
        });
    });
});
