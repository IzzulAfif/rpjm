Ext.define('RPJM.module.MasterRpjm.Program.view.Program', {
    extend   :  'Ext.panel.Panel',
    title    : 'Program',
    iconCls  : 'icon-program',
    alias    : 'widget.Program',
    id       : 'Program',
    layout   : 'fit',     
    requires : [
        'RPJM.module.MasterRpjm.Program.view.grid.GridProgram',
        'RPJM.module.MasterRpjm.Program.view.form.FormProgram'
    ],
    layout      : {
        type    :'hbox',
        align   :'stretch'
    },
    defaults    : {
        flex    : 1
    },    
    closable    : true,
    items       : [ 
        {xtype   : 'gridprogram', flex : 1.2},
        {xtype   : 'formprogram', flex : 0.8}         
    ]
});