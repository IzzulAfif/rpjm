Ext.define('RPJM.module.Renja.TransaksiRenja.view.WindowDesa',{
    extend   : 'Ext.window.Window',
    iconCls  : 'icon-form',
    alias    : 'widget.windowdesa',
    id       : 'windowdesa',
    requires : ['RPJM.module.Renja.TransaksiRenja.view.form.FormRenjaDesa'],
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
       { xtype : 'formrenjadesa' }      
    ]
});