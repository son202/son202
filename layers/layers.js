ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:32618").setExtent([-20037508.342789, -20037508.342789, 20037508.342789, 20037508.342789]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Sectioncommunale_1 = new ol.format.GeoJSON();
var features_Sectioncommunale_1 = format_Sectioncommunale_1.readFeatures(json_Sectioncommunale_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32618'});
var jsonSource_Sectioncommunale_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sectioncommunale_1.addFeatures(features_Sectioncommunale_1);
var lyr_Sectioncommunale_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Sectioncommunale_1, 
                style: style_Sectioncommunale_1,
                interactive: true,
    title: 'Section communale <br />\
    <img src="styles/legend/Sectioncommunale_1_0.png" /> Foulon<br />\
    <img src="styles/legend/Sectioncommunale_1_1.png" /> Bois Blanc<br />\
    <img src="styles/legend/Sectioncommunale_1_2.png" /> Cotelette<br />\
    <img src="styles/legend/Sectioncommunale_1_3.png" /> Sarazin<br />\
    <img src="styles/legend/Sectioncommunale_1_4.png" /> Moka Neuf<br />\
    <img src="styles/legend/Sectioncommunale_1_5.png" /> Fond Bleu<br />'
        });
var format_Batis_2 = new ol.format.GeoJSON();
var features_Batis_2 = format_Batis_2.readFeatures(json_Batis_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32618'});
var jsonSource_Batis_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Batis_2.addFeatures(features_Batis_2);
var lyr_Batis_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Batis_2, 
                style: style_Batis_2,
                interactive: true,
                title: '<img src="styles/legend/Batis_2.png" /> Batis'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Sectioncommunale_1.setVisible(true);lyr_Batis_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Sectioncommunale_1,lyr_Batis_2];
lyr_Sectioncommunale_1.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'ID_Com': 'ID_Com', 'NAME_Sec': 'NAME_Sec', 'ID_Dep': 'ID_Dep', 'NAME_Dep': 'NAME_Dep', 'NAME_Com': 'NAME_Com', 'N_Section_': 'N_Section_', 'Section_': 'Section_', 'ID_Sec_COR': 'ID_Sec_COR', 'No_Section': 'No_Section', 'ID_Arr': 'ID_Arr', 'NAME_Arr': 'NAME_Arr', 'Shape_Leng': 'Shape_Leng', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', });
lyr_Batis_2.set('fieldAliases', {'fid': 'fid', 'gid,N,10,0': 'gid,N,10,0', 'ID,N,24,15': 'ID,N,24,15', 'FLAG_DUPLI': 'FLAG_DUPLI', 'NGDC_DATE,': 'NGDC_DATE,', 'TEMPORAL_A': 'TEMPORAL_A', 'EQ_YEAR,N,': 'EQ_YEAR,N,', 'EQ_MONTH,N': 'EQ_MONTH,N', 'EQ_DAY,N,1': 'EQ_DAY,N,1', 'HOUR,N,10,': 'HOUR,N,10,', 'MINUTE,N,1': 'MINUTE,N,1', 'LATITUDE,N': 'LATITUDE,N', 'LONGITUDE,': 'LONGITUDE,', 'DEPTH_KM,N': 'DEPTH_KM,N', 'MAGNITUDE_': 'MAGNITUDE_', 'Descriptio': 'Descriptio', 'INTENSITY,': 'INTENSITY,', 'DEATH_DESC': 'DEATH_DESC', 'NUMBER_OF_': 'NUMBER_OF_', 'DAMAGE_DES': 'DAMAGE_DES', 'DAMAGE_MIL': 'DAMAGE_MIL', 'FLAG_TSUNA': 'FLAG_TSUNA', 'LOCATION_D': 'LOCATION_D', 'SLIDES_URL': 'SLIDES_URL', 'MAP_SLIDE_': 'MAP_SLIDE_', 'OBJECTID,N': 'OBJECTID,N', });
lyr_Sectioncommunale_1.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'Range', 'ID_Com': 'Range', 'NAME_Sec': 'TextEdit', 'ID_Dep': 'Range', 'NAME_Dep': 'TextEdit', 'NAME_Com': 'TextEdit', 'N_Section_': 'Range', 'Section_': 'TextEdit', 'ID_Sec_COR': 'TextEdit', 'No_Section': 'TextEdit', 'ID_Arr': 'Range', 'NAME_Arr': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Batis_2.set('fieldImages', {'fid': 'TextEdit', 'gid,N,10,0': 'TextEdit', 'ID,N,24,15': 'TextEdit', 'FLAG_DUPLI': 'TextEdit', 'NGDC_DATE,': 'TextEdit', 'TEMPORAL_A': 'TextEdit', 'EQ_YEAR,N,': 'TextEdit', 'EQ_MONTH,N': 'TextEdit', 'EQ_DAY,N,1': 'TextEdit', 'HOUR,N,10,': 'TextEdit', 'MINUTE,N,1': 'TextEdit', 'LATITUDE,N': 'TextEdit', 'LONGITUDE,': 'TextEdit', 'DEPTH_KM,N': 'TextEdit', 'MAGNITUDE_': 'TextEdit', 'Descriptio': 'TextEdit', 'INTENSITY,': 'TextEdit', 'DEATH_DESC': 'TextEdit', 'NUMBER_OF_': 'TextEdit', 'DAMAGE_DES': 'TextEdit', 'DAMAGE_MIL': 'TextEdit', 'FLAG_TSUNA': 'TextEdit', 'LOCATION_D': 'TextEdit', 'SLIDES_URL': 'TextEdit', 'MAP_SLIDE_': 'TextEdit', 'OBJECTID,N': 'TextEdit', });
lyr_Sectioncommunale_1.set('fieldLabels', {'fid': 'header label', 'OBJECTID': 'inline label', 'ID_Com': 'inline label', 'NAME_Sec': 'inline label', 'ID_Dep': 'inline label', 'NAME_Dep': 'inline label', 'NAME_Com': 'inline label', 'N_Section_': 'inline label', 'Section_': 'inline label', 'ID_Sec_COR': 'inline label', 'No_Section': 'inline label', 'ID_Arr': 'inline label', 'NAME_Arr': 'inline label', 'Shape_Leng': 'inline label', 'Shape_Le_1': 'inline label', 'Shape_Area': 'inline label', });
lyr_Batis_2.set('fieldLabels', {'fid': 'inline label', 'gid,N,10,0': 'inline label', 'ID,N,24,15': 'inline label', 'FLAG_DUPLI': 'inline label', 'NGDC_DATE,': 'inline label', 'TEMPORAL_A': 'inline label', 'EQ_YEAR,N,': 'inline label', 'EQ_MONTH,N': 'header label', 'EQ_DAY,N,1': 'inline label', 'HOUR,N,10,': 'header label', 'MINUTE,N,1': 'header label', 'LATITUDE,N': 'header label', 'LONGITUDE,': 'inline label', 'DEPTH_KM,N': 'inline label', 'MAGNITUDE_': 'inline label', 'Descriptio': 'inline label', 'INTENSITY,': 'header label', 'DEATH_DESC': 'header label', 'NUMBER_OF_': 'header label', 'DAMAGE_DES': 'header label', 'DAMAGE_MIL': 'inline label', 'FLAG_TSUNA': 'header label', 'LOCATION_D': 'inline label', 'SLIDES_URL': 'inline label', 'MAP_SLIDE_': 'inline label', 'OBJECTID,N': 'inline label', });
lyr_Batis_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});