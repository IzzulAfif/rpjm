Ext.define('RPJM.module.Renja.TransaksiRenja.view.grid.WindowKegiatanDesa',{
    extend   : 'Ext.window.Window',
    title    : 'GRID KEGIATAN',
    iconCls  : 'icon-kegiatan',
    alias    : 'widget.windowkegiatandesa',
    id       : 'windowkegiatandesa',
    layout   : 'fit',
    width    : 850,
    height   : 500,
    border   : false,  
    modal    : true, 
    requires : ['RPJM.module.Renja.TransaksiRenja.view.grid.GridLookupKegiatanDesa'],
    layout      : {
        type    :'hbox',
        align   :'stretch'
    },
    defaults    : {
        flex    : 1
    },    
    closable    : true,
    items       : [ 
        {xtype   : 'gridlookupkegiatandesa', flex : 1}       
    ]
});