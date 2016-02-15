Ext.define('RPJM.module.Renja.TransaksiRenja.view.WindowKecamatan',{
    extend   : 'Ext.window.Window',
    iconCls  : 'icon-form',
    alias    : 'widget.windowkecamatan',
    id       : 'windowkecamatan',
    requires : ['RPJM.module.Renja.TransaksiRenja.view.form.FormRenjaKecamatan'],
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
       { xtype : 'formrenjakecamatan' }      
    ]
});