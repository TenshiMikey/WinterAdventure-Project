    function addMarkersToMap(map) {
        
        var morzineMarker = new H.map.Marker({lat:46.17837943483857, lng:6.707124661364578});
        //var pngIcon = new H.map.Icon('media/media/icon/ski-route.png', { size: { w: 56, h: 56 } });
        map.addObject(morzineMarker);
    
        var tignesMarker = new H.map.Marker({lat:45.908708326427984, lng: 6.799694993881432});
        map.addObject(tignesMarker);
    
        var laTaniaMarker = new H.map.Marker({lat:45.43047710379096, lng:6.597062409601825}); 
        map.addObject(laTaniaMarker);
        
    }
    
//Step 1: initialize communication with the platform
// Replace variable YOUR_API_KEY with your own apikey
var platform = new H.service.Platform({
    apikey: 'ObgUNzJcXbXM0MWfs1tXuw'
    });

var defaultLayers = platform.createDefaultLayers();

//Step 2: initialize a map - this map is centered over Europe
var map = new H.Map(document.getElementById('mapContainer'),
    defaultLayers.vector.normal.map,
        {
        center: { lat:46.17837943483857, lng:6.707124661364578},
        zoom: 8,
        pixelRatio: window.devicePixelRatio || 1
        }
    );
    // This adds a resize listener to make sure that the map occupies the whole container
    window.addEventListener('resize', () => map.getViewPort().resize());
    //Step 3: make the map interactive
    // MapEvents enables the event system
    // Behavior implements default interactions for pan/zoom (also on mobile touch environments)
    var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

    // Create the default UI components
    var ui = H.ui.UI.createDefault(map, defaultLayers);

    window.onload = function () {
        addMarkersToMap(map);
    };
