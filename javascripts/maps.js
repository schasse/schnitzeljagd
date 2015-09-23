function load_map() {
    var koordinates = {
        jungbusch: { lat: 52.487500, lng: 13.431083 },
        mamas_toilet: { lat: 52.490556, lng: 13.426028 },
        street_lantern: { lat: 52.492389, lng: 13.425694 },
        subway_schoenlein: { lat: 52.492944, lng: 13.422222 }
    };
    $.each(koordinates, function(place, koordinate) {
        var elements = $('#' + place + '_map');
        if (elements.length > 0) {
            elements.height($(window).height() * 0.9);
            var map = new GMaps({
                div: elements[0],
                lat: koordinate.lat,
                lng: koordinate.lng,
                panControl: true,
                resizable: true
            }).addMarker({
                lat: koordinate.lat,
                lng: koordinate.lng
            });
        }
    });
}

$(document).ready(function() {
    load_map();
});
