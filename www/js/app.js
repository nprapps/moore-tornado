var IS_MOBILE = Modernizr.touch; // disable certain features for touch devices
var WINDOW_WIDTH = $('body').width();
var ZOOM_LENS_THRESHOLD = 16;

var show_overlay = true;

$(document).ready(function(){

    if (WINDOW_WIDTH < 768) {
        IS_MOBILE = true;
    }

    var southWest = new L.LatLng(35.2473, -97.6177);
    var northEast = new L.LatLng(35.3828, -97.4254);
    var bounds = new L.LatLngBounds(southWest, northEast);

    var map = L.mapbox.map('map',null,{
        minZoom:14,
        maxZoom:19,
        maxBounds: bounds
    });
    L.control.scale().addTo(map);

    //var base_layer = L.mapbox.tileLayer('npr.map-g7ewv5af');
    var base_layer = L.tileLayer('https://mw1.gstatic.com/crisisresponse/2013/2013-oklahoma-tornado/digitalglobe/OK_PO_1194054_GE1_2013_05_23_maptiles/{x}_{y}_{z}.png')
    var info_layer = L.mapbox.tileLayer('npr.ok-moore-tornado-satellite');
    var info_grid = L.mapbox.gridLayer('npr.ok-moore-tornado-satellite');
    var zoom_layer = L.mapbox.tileLayer('npr.ok-moore-tornado-zoomlens');

    map.addLayer(base_layer);
    map.addLayer(info_layer);
    map.addLayer(info_grid);

    function update_info_boxes(latlng){
        var $info_boxes = $('.info-box');
        info_grid.getData(latlng,function(data){
            if(data){
                var html = '';
                if(data.location) {
                    html += '<p class="poi">' + data.location + '</p>';
                }
                if(data.locationad) {
                    html += '<p class="locationad">' + data.locationad + '</p>';
                }
                $info_boxes.html(html);
            }
        });
    }

    if (IS_MOBILE) {
        map.addLayer(zoom_layer);
        map.setView([35.338, -97.486], 14);

        var $info_bar = $('#info-bar');

        map.on('click', function(e){
            update_info_boxes(e.latlng);
        });
        map.on('zoomend', function(e) {
            if (map.getZoom() >= ZOOM_LENS_THRESHOLD) {
                $info_bar.show()
            } else {
                $info_bar.hide()
            }
        });

        $('#about').click(function(){
            if($('.modal-body').children().length < 1 ) {
                $('.legend-contents').clone().appendTo('.modal-body');
            }
        });
    } else {
        map.setView([35.325, -97.486], 14);

        var zoommap = L.mapbox.map('zoommap', null, {
            fadeAnimation: false,
            zoomControl: false,
            attributionControl: false
        });
        zoommap.addLayer(zoom_layer);

        var $zl = $('#zoomlens');
        var zl_radius = $zl.width() / 2;

        map.on('mousemove', function(e){
            if (map.getZoom() >= ZOOM_LENS_THRESHOLD && show_overlay) {
                $zl.css('top', ~~e.containerPoint.y - zl_radius + 'px');
                $zl.css('left', ~~e.containerPoint.x - zl_radius + 'px');
                zoommap.setView(e.latlng, map.getZoom(), true);
                update_info_boxes(e.latlng);
            }
        });
        zoommap.on('drag', function(e) {
            map.setView(zoommap.getCenter(), map.getZoom(), true);
            return false;
        });
        map.on('zoomend', function(e) {
            if (map.getZoom() >= ZOOM_LENS_THRESHOLD && show_overlay) {
                $zl.show();
                if (zoommap._loaded) zoommap.setZoom(map.getZoom());
            } else {
                $zl.hide();
            }
        });

        $('.chatter.call').click(function() {
            map.setView([35.3256, -97.5059], 18);
        });
    }

    $('.hide-overlay').click(function(){
        if (map.hasLayer(info_layer)) {
            map.removeLayer(info_layer);
            if (IS_MOBILE) {
                map.removeLayer(zoom_layer);
            } else {
                $zl.hide();
            }
            $('.hide-overlay').addClass('engaged');

            show_overlay = false;
        } else {
            map.addLayer(info_layer);
            if (IS_MOBILE) {
                map.addLayer(zoom_layer);
            } else {
                if (map.getZoom() >= ZOOM_LENS_THRESHOLD) {
                    $zl.show();
                }
            }
            $('.hide-overlay').removeClass('engaged');

            show_overlay = true;
        }
    });
});
