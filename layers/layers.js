var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Trreo_1 = new ol.format.GeoJSON();
var features_Trreo_1 = format_Trreo_1.readFeatures(json_Trreo_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Trreo_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Trreo_1.addFeatures(features_Trreo_1);
var lyr_Trreo_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Trreo_1, 
                style: style_Trreo_1,
                popuplayertitle: "Térreo",
                interactive: true,
    title: 'Térreo<br />\
    <img src="styles/legend/Trreo_1_0.png" /> Acadêmico<br />\
    <img src="styles/legend/Trreo_1_1.png" /> Administrativo<br />\
    <img src="styles/legend/Trreo_1_2.png" /> Atend. Individualizado<br />\
    <img src="styles/legend/Trreo_1_3.png" /> Auditório<br />\
    <img src="styles/legend/Trreo_1_4.png" /> Biblioteca<br />\
    <img src="styles/legend/Trreo_1_5.png" /> Circulação<br />\
    <img src="styles/legend/Trreo_1_6.png" /> Convivência<br />\
    <img src="styles/legend/Trreo_1_7.png" /> Copa – Cozinha – Cantina<br />\
    <img src="styles/legend/Trreo_1_8.png" /> Depósito<br />\
    <img src="styles/legend/Trreo_1_9.png" /> Dormitório<br />\
    <img src="styles/legend/Trreo_1_10.png" /> Esporte<br />\
    <img src="styles/legend/Trreo_1_11.png" /> Extensão<br />\
    <img src="styles/legend/Trreo_1_12.png" /> Lab. de Informática<br />\
    <img src="styles/legend/Trreo_1_13.png" /> Laboratório – Ensino<br />\
    <img src="styles/legend/Trreo_1_14.png" /> Laboratório – Pesquisa<br />\
    <img src="styles/legend/Trreo_1_15.png" /> Laboratório – Prática<br />\
    <img src="styles/legend/Trreo_1_16.png" /> Monitoria<br />\
    <img src="styles/legend/Trreo_1_17.png" /> Restaurante<br />\
    <img src="styles/legend/Trreo_1_18.png" /> Reunião<br />\
    <img src="styles/legend/Trreo_1_19.png" /> Sala de aula<br />\
    <img src="styles/legend/Trreo_1_20.png" /> Sala de aula (Pós)<br />\
    <img src="styles/legend/Trreo_1_21.png" /> Sala de estudo<br />\
    <img src="styles/legend/Trreo_1_22.png" /> Sala de Professores<br />\
    <img src="styles/legend/Trreo_1_23.png" /> Sala Técnica<br />\
    <img src="styles/legend/Trreo_1_24.png" /> Sanitários<br />\
    <img src="styles/legend/Trreo_1_25.png" /> Saúde<br />\
    <img src="styles/legend/Trreo_1_26.png" /> <br />'
        });
var format_terreno_2 = new ol.format.GeoJSON();
var features_terreno_2 = format_terreno_2.readFeatures(json_terreno_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_terreno_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_terreno_2.addFeatures(features_terreno_2);
var lyr_terreno_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_terreno_2, 
                style: style_terreno_2,
                popuplayertitle: "terreno",
                interactive: true,
                title: '<img src="styles/legend/terreno_2.png" /> terreno'
            });
var format_Prdios_3 = new ol.format.GeoJSON();
var features_Prdios_3 = format_Prdios_3.readFeatures(json_Prdios_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Prdios_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Prdios_3.addFeatures(features_Prdios_3);
var lyr_Prdios_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Prdios_3, 
                style: style_Prdios_3,
                popuplayertitle: "Prédios",
                interactive: true,
                title: '<img src="styles/legend/Prdios_3.png" /> Prédios'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_Trreo_1.setVisible(true);lyr_terreno_2.setVisible(true);lyr_Prdios_3.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Trreo_1,lyr_terreno_2,lyr_Prdios_3];
lyr_Trreo_1.set('fieldAliases', {'ID': 'ID', 'integ-ter_SALA': 'SALA', 'integ-ter_DESCRICAO': 'DESCRICAO', 'integ-ter_AREA': 'AREA', 'integ-ter_CAPACIDADE': 'CAPACIDADE', 'integ-ter_USO': 'USO', 'integ-ter_SETOR': 'SETOR', 'integ-ter_RESPONSAVEL': 'RESPONSAVEL', });
lyr_terreno_2.set('fieldAliases', {'id': 'id', 'Nome': 'Nome', 'Area': 'Area', 'Perimetro': 'Perimetro', });
lyr_Prdios_3.set('fieldAliases', {'ID': 'ID', 'nome': 'Prédio', 'url': 'Mais info', });
lyr_Trreo_1.set('fieldImages', {'ID': 'TextEdit', 'integ-ter_SALA': 'TextEdit', 'integ-ter_DESCRICAO': 'TextEdit', 'integ-ter_AREA': 'TextEdit', 'integ-ter_CAPACIDADE': 'Range', 'integ-ter_USO': 'TextEdit', 'integ-ter_SETOR': 'TextEdit', 'integ-ter_RESPONSAVEL': 'TextEdit', });
lyr_terreno_2.set('fieldImages', {'id': 'TextEdit', 'Nome': 'TextEdit', 'Area': 'TextEdit', 'Perimetro': 'TextEdit', });
lyr_Prdios_3.set('fieldImages', {'ID': 'TextEdit', 'nome': 'TextEdit', 'url': 'TextEdit', });
lyr_Trreo_1.set('fieldLabels', {'ID': 'inline label - visible with data', 'integ-ter_SALA': 'inline label - visible with data', 'integ-ter_DESCRICAO': 'inline label - visible with data', 'integ-ter_AREA': 'inline label - visible with data', 'integ-ter_CAPACIDADE': 'inline label - visible with data', 'integ-ter_USO': 'inline label - visible with data', 'integ-ter_SETOR': 'inline label - visible with data', 'integ-ter_RESPONSAVEL': 'inline label - visible with data', });
lyr_terreno_2.set('fieldLabels', {'id': 'hidden field', 'Nome': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'Perimetro': 'inline label - visible with data', });
lyr_Prdios_3.set('fieldLabels', {'ID': 'hidden field', 'nome': 'inline label - visible with data', 'url': 'inline label - visible with data', });
lyr_Prdios_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});