Ext.define('RPJM.module.Renja.TransaksiRenja.view.grid.WindowUsulanSkpd',{
    extend   : 'Ext.window.Window',
    title    : 'GRID USULAN SKPD',
    iconCls  : 'icon-skpd',
    alias    : 'widget.windowusulanskpd',
    id       : 'windowusulanskpd',
    layout   : 'fit',
    width    : 850,
    height   : 500,
    border   : false,  
    modal    : true, 
    requires : ['RPJM.module.Renja.TransaksiRenja.view.grid.GridUsulanSkpd'],
    layout      : {
        type    :'hbox',
        align   :'stretch'
    },
    defaults    : {
        flex    : 1
    },    
    closable    : true,
    items       : [ 
        {xtype   : 'gridusulanskpd', flex : 1}       
    ]
});