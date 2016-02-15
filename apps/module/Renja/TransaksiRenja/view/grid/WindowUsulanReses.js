Ext.define('RPJM.module.Renja.TransaksiRenja.view.grid.WindowUsulanReses',{
    extend   : 'Ext.window.Window',
    title    : 'GRID USULAN HASIL RESES',
    iconCls  : 'icon-reses',
    alias    : 'widget.windowusulanreses',
    id       : 'windowusulanreses',
    layout   : 'fit',
    width    : 850,
    height   : 500,
    border   : false,  
    modal    : true, 
    requires : ['RPJM.module.Renja.TransaksiRenja.view.grid.GridUsulanReses'],
    layout      : {
        type    :'hbox',
        align   :'stretch'
    },
    defaults    : {
        flex    : 1
    },    
    closable    : true,
    items       : [ 
        {xtype   : 'gridusulanreses', flex : 1}       
    ]
});