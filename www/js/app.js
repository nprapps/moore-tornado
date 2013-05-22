var IS_MOBILE = Modernizr.touch; // disable certain features for touch devices
var WINDOW_WIDTH = $('body').width();

$(document).ready(function(){
    
    if (WINDOW_WIDTH < 768) {
        IS_MOBILE = true;
    }
    
    var map = L.mapbox.map('map',null,{
        minZoom:12,
        maxZoom:19
    });
    L.control.scale().addTo(map);
        
    var base_layer = L.mapbox.tileLayer('npr.map-g7ewv5af');
    var info_layer = L.mapbox.tileLayer('npr.ok-moore-tornado-satellite');
    var zoom_layer = L.mapbox.tileLayer('npr.ok-moore-tornado-satellite');
    
    map.addLayer(base_layer);
    map.addLayer(info_layer);
    
    if (IS_MOBILE) {
        map.setView([35.338, -97.486], 13);
        $('#about').click(function(){
            if($('.modal-body').children().length < 1 ) {
                $('.legend-contents').clone().appendTo('.modal-body');
            }
        });
        
    } else {
        map.setView([35.338, -97.486], 14);
        
        var zoommap = L.mapbox.map('zoommap', null, {    
            fadeAnimation: false,
            zoomControl: false,
            attributionControl: false
        });
        zoommap.addLayer(zoom_layer);
        //PROBABLY NEED TO ADD A GRID LAYER, MAYBE THE INFO LAYER GRID
        //zoommap.addLayer(zoom_grid);
    
        var $zl = $('#zoomlens');
        var $tooltip = $('#tooltip');
        var zl_radius = $zl.width() / 2;
    
        map.on('mousemove', function(e) {
            $zl.css('top', ~~e.containerPoint.y - zl_radius + 'px');
            $zl.css('left', ~~e.containerPoint.x - zl_radius + 'px');
            zoommap.setView(e.latlng, map.getZoom(), true);
            
            //THIS DOESNT WORK NOW, need to fix since we rejiggered the layers (it's ticketed)
            zoommap.gridLayer.getData(e.latlng,function(data){
                if(data){
                
                    var html = '';
                    if(data.locationad) {
                        html += '<p class="locationad">' + data.locationad + '</p>';                    
                    }
                    html += '<p class="owner">';
                    if(data.ownername1) {
                        html += ' ' + data.ownername1;
                    }
                    if(data.ownername2) {
                        html += ' ' + data.ownername2;
                    }
                    html += '</p>'
                    $tooltip.html(html);
                }
            });
        });
        map.on('zoomend', function(e) {
            if (zoommap._loaded) zoommap.setZoom(map.getZoom());
        });
        map.gridLayer.on('mousemove', function(e){
           console.log(e.data); 
        });
    }
    
    $('.hide-overlay').click(function(){
        if (map.hasLayer(info_layer)) {
            map.removeLayer(info_layer);
        } else {
            map.addLayer(info_layer);
        }
    });
});
