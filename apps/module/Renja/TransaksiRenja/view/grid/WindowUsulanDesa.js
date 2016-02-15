Ext.define('RPJM.module.Renja.TransaksiRenja.view.grid.WindowUsulanDesa',{
    extend   : 'Ext.window.Window',
    title    : 'GRID USULAN DESA',
    iconCls  : 'icon-desa',
    alias    : 'widget.windowusulandesa',
    id       : 'windowusulandesa',
    layout   : 'fit',
    width    : 850,
    height   : 500,
    border   : false,  
    modal    : true, 
    requires : ['RPJM.module.Renja.TransaksiRenja.view.grid.GridUsulanDesa'],
    layout      : {
        type    :'hbox',
        align   :'stretch'
    },
    defaults    : {
        flex    : 1
    },    
    closable    : true,
    items       : [ 
        {xtype   : 'gridusulandesa', flex : 1}       
    ]
});