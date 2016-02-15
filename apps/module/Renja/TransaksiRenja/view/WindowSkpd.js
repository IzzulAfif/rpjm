Ext.define('RPJM.module.Renja.TransaksiRenja.view.WindowSkpd',{
    extend   : 'Ext.window.Window',
    iconCls  : 'icon-form',
    alias    : 'widget.windowskpd',
    id       : 'windowskpd',
    requires : ['RPJM.module.Renja.TransaksiRenja.view.form.FormRenjaSkpd'],
    layout   : 'fit',
    width    : 750,
    height   : 470,
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
       { xtype : 'formrenjaskpd' }      
    ]
});