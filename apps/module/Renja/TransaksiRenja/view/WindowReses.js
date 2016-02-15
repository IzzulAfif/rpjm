Ext.define('RPJM.module.Renja.TransaksiRenja.view.WindowReses',{
    extend   : 'Ext.window.Window',
    iconCls  : 'icon-form',
    alias    : 'widget.windowreses',
    id       : 'windowreses',
    requires : ['RPJM.module.Renja.TransaksiRenja.view.form.FormRenjaReses'],
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
       { xtype : 'formrenjareses' }      
    ]
});