$(document).ready(function(){
    
    var map = L.mapbox.map('map',null,{
        minZoom:12,
        maxZoom:19
    });
    map.addLayer(L.mapbox.tileLayer('npr.map-g7ewv5af,npr.ok-moore-tornado-satellite'));
    //map.addLayer(L.mapbox.tileLayer('http://localdev.npr.org:20009/api/Project/ok-moore-tornado/'));
    
    L.control.scale().addTo(map);
    
    var width = $(window).width();
    if(width > 768){
        map.setView([35.338, -97.486], 14);
    } else {
        map.setView([35.338, -97.486], 13);
    }

    $('#about').click(function(){
        if($('.modal-body').children().length < 1 ) {
            $('.legend-contents').clone().appendTo('.modal-body');
        }
    });
    
});
