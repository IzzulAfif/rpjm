Ext.define('RPJM.module.Renja.TransaksiRenja.view.grid.WindowKegiatan',{
    extend   : 'Ext.window.Window',
    title    : 'GRID KEGIATAN',
    iconCls  : 'icon-kegiatan',
    alias    : 'widget.windowkegiatan',
    id       : 'windowkegiatan',
    layout   : 'fit',
    width    : 850,
    height   : 500,
    border   : false,  
    modal    : true, 
    requires : ['RPJM.module.Renja.TransaksiRenja.view.grid.GridLookupKegiatan'],
    layout      : {
        type    :'hbox',
        align   :'stretch'
    },
    defaults    : {
        flex    : 1
    },    
    closable    : true,
    items       : [ 
        {xtype   : 'gridlookupkegiatan', flex : 1}       
    ]
});