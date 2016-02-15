Ext.define('RPJM.module.MasterData.Agama.view.Agama', {
    extend   :  'Ext.panel.Panel',
    title    : 'Agama',
    iconCls  : 'icon-agama',
    alias    : 'widget.Agama',
    id       : 'Agama',
    layout   : 'fit',     
    requires : [
        'RPJM.module.MasterData.Agama.view.grid.GridAgama',
        'RPJM.module.MasterData.Agama.view.form.FormAgama'
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
        {xtype   : 'gridagama', flex : 1.5},
        {xtype   : 'formagama', flex : 0.5}         
    ]
});