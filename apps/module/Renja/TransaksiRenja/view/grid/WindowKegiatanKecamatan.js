Ext.define('RPJM.module.Renja.TransaksiRenja.view.grid.WindowKegiatanKecamatan',{
    extend   : 'Ext.window.Window',
    title    : 'GRID KEGIATAN',
    iconCls  : 'icon-kegiatan',
    alias    : 'widget.windowkegiatankecamatan',
    id       : 'windowkegiatankecamatan',
    layout   : 'fit',
    width    : 850,
    height   : 500,
    border   : false,  
    modal    : true, 
    requires : ['RPJM.module.Renja.TransaksiRenja.view.grid.GridLookupKegiatanKecamatan'],
    layout      : {
        type    :'hbox',
        align   :'stretch'
    },
    defaults    : {
        flex    : 1
    },    
    closable    : true,
    items       : [ 
        {xtype   : 'gridlookupkegiatankecamatan', flex : 1}       
    ]
});