Ext.define('RPJM.module.Renja.TransaksiRenja.view.WindowKelurahan',{
    extend   : 'Ext.window.Window',
    iconCls  : 'icon-form',
    alias    : 'widget.windowkelurahan',
    id       : 'windowkelurahan',
    requires : ['RPJM.module.Renja.TransaksiRenja.view.form.FormRenjaKelurahan'],
    layout   : 'fit',
    width    : 750,
    height   : 650,
    modal    : true, 
    layout      : {
        type    :'hbox',
        align   :'stretch'
    },
    defaults    : {
        flex    : 1
    },    
    closable    : true,
    items       : [ 
       { xtype : 'formrenjakelurahan' }      
    ]
});