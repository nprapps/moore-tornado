$(document).ready(function(){
    
    var map = L.mapbox.map('map',null,{
        minZoom:12,
        maxZoom:19
    });
    map.addLayer(L.mapbox.tileLayer('npr.map-g7ewv5af'));
    
    L.control.scale().addTo(map);
    
    var width = $(window).width();
    if(width > 768){
        map.setView([35.338, -97.486], 14);
    } else {
        map.setView([35.338, -97.486], 13);
    }

    var zoommap = L.mapbox.map('zoommap', 'npr.ok-moore-tornado-satellite', {    
//    var zoommap = L.mapbox.map('zoommap', 'http://localdev.npr.org:20009/api/Project/ok-moore-tornado/', {
        fadeAnimation: false,
        zoomControl: false,
        attributionControl: false
    });

    var $zl = $('#zoomlens');
    var zl_radius = $zl.width() / 2;

    map.on('mousemove', update);
    map.on('zoomend', zoom);

    function zoom(e) {
        if (zoommap._loaded) zoommap.setZoom(map.getZoom());
    }

    function update(e) {
        $zl.css('top', ~~e.containerPoint.y - zl_radius + 'px');
        $zl.css('left', ~~e.containerPoint.x - zl_radius + 'px');
        zoommap.setView(e.latlng, map.getZoom(), true);
    }

    $('#about').click(function(){
        if($('.modal-body').children().length < 1 ) {
            $('.legend-contents').clone().appendTo('.modal-body');
        }
    });
    
});
