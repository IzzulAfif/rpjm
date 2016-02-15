Ext.define('RPJM.module.MasterRpjm.Kegiatan.view.Kegiatan', {
    extend   :  'Ext.panel.Panel',
    title    : 'Kegiatan',
    iconCls  : 'icon-kegiatan',
    alias    : 'widget.Kegiatan',
    id       : 'Kegiatan',
    layout   : 'fit',     
    requires : [
        'RPJM.module.MasterRpjm.Kegiatan.view.grid.GridKegiatan',
        'RPJM.module.MasterRpjm.Kegiatan.view.form.FormKegiatan'
    ],
    layout      : {
        type    :'hbox',
        align   :'stretch'
    },
    defaults    : {
        flex    : 1
    },    
    closable    : true,
    items       : [ 
        {xtype   : 'gridkegiatan', flex : 1.2},
        {xtype   : 'formkegiatan', flex : 0.8}         
    ]
});