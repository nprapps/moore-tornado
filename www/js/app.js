$(document).ready(function(){
//    mapbox.load(['npr.map-g7ewv5af'], function(data){
    mapbox.load(['npr.map-g7ewv5af','npr.ok-moore-tornado-satellite'], function(data){
//    mapbox.load(['http://localhost:20009/api/Project/okla-tornadoe'], function(data){
        window.m = mapbox.map('map');
        m.addLayer(data[0].layer);
        m.addLayer(data[1].layer);
        m.setZoomRange(12, 20);
        m.interaction.auto();
        m.ui.zoomer.add();
        
        var width = $(window).width();
        
        if(width > 768){
            m.zoom(14);
            m.center({ lat: 35.338, lon: -97.486 });
        } else {
            m.zoom(13);
            m.center({ lat: 35.338, lon: -97.486 });
        }

        $("#about").click(function(){
            if($(".modal-body").children().length < 1 ) {
                // $(".modal h3").text($(".legend-contents .headline").text());
                // $(".legend-contents .headline").hide();
                $(".legend-contents").clone().appendTo(".modal-body");
            } else {
                // $(".legend-contents .headline").show();
            }
        });
    });
});
