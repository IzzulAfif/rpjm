Ext.define('RPJM.module.MasterData.Skpd.view.Skpd', {
    extend   :  'Ext.panel.Panel',
    title    : 'Skpd',
    iconCls  : 'icon-skpd',
    alias    : 'widget.Skpd',
    id       : 'Skpd',
    layout   : 'fit',     
    requires : [
        'RPJM.module.MasterData.Skpd.view.grid.GridSkpd',
        'RPJM.module.MasterData.Skpd.view.form.FormSkpd'
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
        {xtype   : 'gridskpd', flex : 1},
        {xtype   : 'formskpd', flex : 1}         
    ]
});