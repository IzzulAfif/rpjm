Ext.define('RPJM.module.Renja.TransaksiRenja.view.grid.WindowUsulanKelurahan',{
    extend   : 'Ext.window.Window',
    title    : 'GRID USULAN KELURAHAN',
    iconCls  : 'icon-kelurahan',
    alias    : 'widget.windowusulankelurahan',
    id       : 'windowusulankelurahan',
    layout   : 'fit',
    width    : 850,
    height   : 500,
    border   : false,  
    modal    : true, 
    requires : ['RPJM.module.Renja.TransaksiRenja.view.grid.GridUsulanKelurahan'],
    layout      : {
        type    :'hbox',
        align   :'stretch'
    },
    defaults    : {
        flex    : 1
    },    
    closable    : true,
    items       : [ 
        {xtype   : 'gridusulankelurahan', flex : 1}       
    ]
});