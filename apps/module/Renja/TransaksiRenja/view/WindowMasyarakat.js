Ext.define('RPJM.module.Renja.TransaksiRenja.view.WindowMasyarakat',{
    extend   : 'Ext.window.Window',
    iconCls  : 'icon-form',
    alias    : 'widget.windowmasyarakat',
    id       : 'windowmasyarakat',
    requires : ['RPJM.module.Renja.TransaksiRenja.view.form.FormRenjaMasyarakat'],
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
       { xtype : 'formrenjamasyarakat' }      
    ]
});