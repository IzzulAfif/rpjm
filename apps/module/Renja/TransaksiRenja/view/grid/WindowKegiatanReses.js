Ext.define('RPJM.module.Renja.TransaksiRenja.view.grid.WindowKegiatanReses',{
    extend   : 'Ext.window.Window',
    title    : 'GRID KEGIATAN',
    iconCls  : 'icon-kegiatan',
    alias    : 'widget.windowkegiatanreses',
    id       : 'windowkegiatanreses',
    layout   : 'fit',
    width    : 850,
    height   : 500,
    border   : false,  
    modal    : true, 
    requires : ['RPJM.module.Renja.TransaksiRenja.view.grid.GridLookupKegiatanReses'],
    layout      : {
        type    :'hbox',
        align   :'stretch'
    },
    defaults    : {
        flex    : 1
    },    
    closable    : true,
    items       : [ 
        {xtype   : 'gridlookupkegiatanreses', flex : 1}       
    ]
});