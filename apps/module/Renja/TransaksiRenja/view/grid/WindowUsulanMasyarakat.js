Ext.define('RPJM.module.Renja.TransaksiRenja.view.grid.WindowUsulanMasyarakat',{
    extend   : 'Ext.window.Window',
    title    : 'GRID USULAN MASYARAKAT',
    iconCls  : 'icon-masyarakat',
    alias    : 'widget.windowusulanmasyarakat',
    id       : 'windowusulanmasyarakat',
    layout   : 'fit',
    width    : 850,
    height   : 500,
    border   : false,  
    modal    : true, 
    requires : ['RPJM.module.Renja.TransaksiRenja.view.grid.GridUsulanMasyarakat'],
    layout      : {
        type    :'hbox',
        align   :'stretch'
    },
    defaults    : {
        flex    : 1
    },    
    closable    : true,
    items       : [ 
        {xtype   : 'gridusulanmasyarakat', flex : 1}       
    ]
});