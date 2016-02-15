Ext.define('RPJM.module.Renja.TransaksiRenja.view.grid.WindowKegiatanSkpd',{
    extend   : 'Ext.window.Window',
    title    : 'GRID KEGIATAN',
    iconCls  : 'icon-kegiatan',
    alias    : 'widget.windowkegiatanskpd',
    id       : 'windowkegiatanskpd',
    layout   : 'fit',
    width    : 850,
    height   : 500,
    border   : false,  
    modal    : true, 
    requires : ['RPJM.module.Renja.TransaksiRenja.view.grid.GridLookupKegiatanSkpd'],
    layout      : {
        type    :'hbox',
        align   :'stretch'
    },
    defaults    : {
        flex    : 1
    },    
    closable    : true,
    items       : [ 
        {xtype   : 'gridlookupkegiatanskpd', flex : 1}       
    ]
});