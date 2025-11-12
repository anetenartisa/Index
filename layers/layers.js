var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Jelgavas_novada_ipasumpiederiba_1 = new ol.format.GeoJSON();
var features_Jelgavas_novada_ipasumpiederiba_1 = format_Jelgavas_novada_ipasumpiederiba_1.readFeatures(json_Jelgavas_novada_ipasumpiederiba_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jelgavas_novada_ipasumpiederiba_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jelgavas_novada_ipasumpiederiba_1.addFeatures(features_Jelgavas_novada_ipasumpiederiba_1);
var lyr_Jelgavas_novada_ipasumpiederiba_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jelgavas_novada_ipasumpiederiba_1, 
                style: style_Jelgavas_novada_ipasumpiederiba_1,
                popuplayertitle: 'Jelgavas_novada_ipasumpiederiba',
                interactive: true,
    title: 'Jelgavas_novada_ipasumpiederiba<br />\
    <img src="styles/legend/Jelgavas_novada_ipasumpiederiba_1_0.png" /> fiziska persona<br />\
    <img src="styles/legend/Jelgavas_novada_ipasumpiederiba_1_1.png" /> juridiska persona<br />\
    <img src="styles/legend/Jelgavas_novada_ipasumpiederiba_1_2.png" /> pašvaldība<br />\
    <img src="styles/legend/Jelgavas_novada_ipasumpiederiba_1_3.png" /> valsts<br />\
    <img src="styles/legend/Jelgavas_novada_ipasumpiederiba_1_4.png" /> nav datu<br />' });

lyr_OpenStreetMap_0.setVisible(true);lyr_Jelgavas_novada_ipasumpiederiba_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Jelgavas_novada_ipasumpiederiba_1];
lyr_Jelgavas_novada_ipasumpiederiba_1.set('fieldAliases', {'CODE': 'CODE', 'GEOM_ACT_D': 'GEOM_ACT_D', 'OBJECTCODE': 'OBJECTCODE', 'AREA_SCALE': 'AREA_SCALE', 'GROUP_CODE': 'GROUP_CODE', 'Jelgavas_n': 'Jelgavas_n', 'Jelgavas_1': 'Jelgavas_1', 'Jelgavas_2': 'Jelgavas_2', 'Jelgavas_3': 'Jelgavas_3', 'Jelgavas_4': 'Jelgavas_4', 'Jelgavas_5': 'Jelgavas_5', 'Jelgavas_6': 'Jelgavas_6', 'Jelgavas_7': 'Jelgavas_7', });
lyr_Jelgavas_novada_ipasumpiederiba_1.set('fieldImages', {'CODE': 'TextEdit', 'GEOM_ACT_D': 'DateTime', 'OBJECTCODE': 'TextEdit', 'AREA_SCALE': 'TextEdit', 'GROUP_CODE': 'TextEdit', 'Jelgavas_n': 'DateTime', 'Jelgavas_1': 'TextEdit', 'Jelgavas_2': 'TextEdit', 'Jelgavas_3': 'TextEdit', 'Jelgavas_4': 'TextEdit', 'Jelgavas_5': 'TextEdit', 'Jelgavas_6': 'TextEdit', 'Jelgavas_7': 'TextEdit', });
lyr_Jelgavas_novada_ipasumpiederiba_1.set('fieldLabels', {'CODE': 'no label', 'GEOM_ACT_D': 'no label', 'OBJECTCODE': 'no label', 'AREA_SCALE': 'no label', 'GROUP_CODE': 'no label', 'Jelgavas_n': 'no label', 'Jelgavas_1': 'no label', 'Jelgavas_2': 'no label', 'Jelgavas_3': 'no label', 'Jelgavas_4': 'no label', 'Jelgavas_5': 'no label', 'Jelgavas_6': 'no label', 'Jelgavas_7': 'no label', });
lyr_Jelgavas_novada_ipasumpiederiba_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});