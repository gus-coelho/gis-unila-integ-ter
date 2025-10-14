var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_CampusIntegraoTrreo_1 = new ol.format.GeoJSON();
var features_CampusIntegraoTrreo_1 = format_CampusIntegraoTrreo_1.readFeatures(json_CampusIntegraoTrreo_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CampusIntegraoTrreo_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CampusIntegraoTrreo_1.addFeatures(features_CampusIntegraoTrreo_1);
var lyr_CampusIntegraoTrreo_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CampusIntegraoTrreo_1, 
                style: style_CampusIntegraoTrreo_1,
                popuplayertitle: 'Campus Integração - Térreo',
                interactive: true,
    title: 'Campus Integração - Térreo<br />\
    <img src="styles/legend/CampusIntegraoTrreo_1_0.png" /> AUDIN<br />\
    <img src="styles/legend/CampusIntegraoTrreo_1_1.png" /> BIUNILA<br />\
    <img src="styles/legend/CampusIntegraoTrreo_1_2.png" /> COMPARTILHADO<br />\
    <img src="styles/legend/CampusIntegraoTrreo_1_3.png" /> CORREGEDORIA<br />\
    <img src="styles/legend/CampusIntegraoTrreo_1_4.png" /> EaD<br />\
    <img src="styles/legend/CampusIntegraoTrreo_1_5.png" /> EdUNILA<br />\
    <img src="styles/legend/CampusIntegraoTrreo_1_6.png" /> ILAACH<br />\
    <img src="styles/legend/CampusIntegraoTrreo_1_7.png" /> ILACVN<br />\
    <img src="styles/legend/CampusIntegraoTrreo_1_8.png" /> ILACVN/ILATIT<br />\
    <img src="styles/legend/CampusIntegraoTrreo_1_9.png" /> ILAESP<br />\
    <img src="styles/legend/CampusIntegraoTrreo_1_10.png" /> ILATIT<br />\
    <img src="styles/legend/CampusIntegraoTrreo_1_11.png" /> IMEA<br />\
    <img src="styles/legend/CampusIntegraoTrreo_1_12.png" /> OUVIDORIA<br />\
    <img src="styles/legend/CampusIntegraoTrreo_1_13.png" /> PPGIES<br />\
    <img src="styles/legend/CampusIntegraoTrreo_1_14.png" /> PRAE<br />\
    <img src="styles/legend/CampusIntegraoTrreo_1_15.png" /> PROAGI<br />\
    <img src="styles/legend/CampusIntegraoTrreo_1_16.png" /> PROCURADORIA<br />\
    <img src="styles/legend/CampusIntegraoTrreo_1_17.png" /> PROEX<br />\
    <img src="styles/legend/CampusIntegraoTrreo_1_18.png" /> PROGEPE<br />\
    <img src="styles/legend/CampusIntegraoTrreo_1_19.png" /> PROGRAD<br />\
    <img src="styles/legend/CampusIntegraoTrreo_1_20.png" /> PROINT<br />\
    <img src="styles/legend/CampusIntegraoTrreo_1_21.png" /> PROPLAN<br />\
    <img src="styles/legend/CampusIntegraoTrreo_1_22.png" /> PRPPG<br />\
    <img src="styles/legend/CampusIntegraoTrreo_1_23.png" /> PRU<br />\
    <img src="styles/legend/CampusIntegraoTrreo_1_24.png" /> REITORIA<br />\
    <img src="styles/legend/CampusIntegraoTrreo_1_25.png" /> SACT<br />\
    <img src="styles/legend/CampusIntegraoTrreo_1_26.png" /> SECAFE<br />\
    <img src="styles/legend/CampusIntegraoTrreo_1_27.png" /> SECOM<br />\
    <img src="styles/legend/CampusIntegraoTrreo_1_28.png" /> Uso comum<br />\
    <img src="styles/legend/CampusIntegraoTrreo_1_29.png" /> <br />' });
var format_limitester_2 = new ol.format.GeoJSON();
var features_limitester_2 = format_limitester_2.readFeatures(json_limitester_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_limitester_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_limitester_2.addFeatures(features_limitester_2);
var lyr_limitester_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_limitester_2, 
                style: style_limitester_2,
                popuplayertitle: 'limites-ter',
                interactive: false,
                title: '<img src="styles/legend/limitester_2.png" /> limites-ter'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_CampusIntegraoTrreo_1.setVisible(true);lyr_limitester_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_CampusIntegraoTrreo_1,lyr_limitester_2];
lyr_CampusIntegraoTrreo_1.set('fieldAliases', {'ID': 'ID', 'integ-ter_SALA': 'SALA', 'integ-ter_DESCRICAO': 'DESCRICAO', 'integ-ter_AREA': 'AREA', 'integ-ter_CAPACIDADE': 'CAPACIDADE', 'integ-ter_USO': 'USO', 'integ-ter_SETOR': 'SETOR', 'integ-ter_RESPONSAVEL': 'RESPONSAVEL', });
lyr_limitester_2.set('fieldAliases', {'ID': 'ID', });
lyr_CampusIntegraoTrreo_1.set('fieldImages', {'ID': 'TextEdit', 'integ-ter_SALA': 'TextEdit', 'integ-ter_DESCRICAO': 'TextEdit', 'integ-ter_AREA': 'TextEdit', 'integ-ter_CAPACIDADE': 'Range', 'integ-ter_USO': 'TextEdit', 'integ-ter_SETOR': 'TextEdit', 'integ-ter_RESPONSAVEL': 'TextEdit', });
lyr_limitester_2.set('fieldImages', {'ID': '', });
lyr_CampusIntegraoTrreo_1.set('fieldLabels', {'ID': 'inline label - visible with data', 'integ-ter_SALA': 'inline label - visible with data', 'integ-ter_DESCRICAO': 'inline label - visible with data', 'integ-ter_AREA': 'inline label - visible with data', 'integ-ter_CAPACIDADE': 'inline label - visible with data', 'integ-ter_USO': 'inline label - visible with data', 'integ-ter_SETOR': 'inline label - visible with data', 'integ-ter_RESPONSAVEL': 'inline label - visible with data', });
lyr_limitester_2.set('fieldLabels', {'ID': 'inline label - visible with data', });
lyr_limitester_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});