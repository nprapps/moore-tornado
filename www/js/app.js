$(document).ready(function(){
    
    var map = L.mapbox.map('map',null,{
        minZoom:12,
        maxZoom:19
    });
    map.addLayer(L.mapbox.tileLayer('npr.map-g7ewv5af'));
    //map.addLayer(L.mapbox.tileLayer('http://localdev.npr.org:20009/api/Project/ok-moore-tornado/'));
    
    L.control.scale().addTo(map);
    
    var width = $(window).width();
    if(width > 768){
        map.setView([35.338, -97.486], 14);
    } else {
        map.setView([35.338, -97.486], 13);
    }
    
    var zoommap = L.mapbox.map('zoommap', 'npr.map-g7ewv5af,npr.ok-moore-tornado-satellite', {
        fadeAnimation: false,
        zoomControl: false,
        attributionControl: false
    });

    var zl = document.getElementById('zoomlens');

    map.on('mousemove', update);
    map.on('zoomend', zoom);

    function zoom(e) {
        if (zoommap._loaded) zoommap.setZoom(map.getZoom());
    }

    function update(e) {
        zl.style.top = ~~e.containerPoint.y-100 + 'px';
        zl.style.left = ~~e.containerPoint.x-100 + 'px';
        zoommap.setView(e.latlng, map.getZoom(), true);
    }

    $('#about').click(function(){
        if($('.modal-body').children().length < 1 ) {
            $('.legend-contents').clone().appendTo('.modal-body');
        }
    });
    
});
