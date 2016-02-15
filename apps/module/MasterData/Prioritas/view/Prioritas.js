Ext.define('RPJM.module.MasterData.Prioritas.view.Prioritas', {
    extend   :  'Ext.panel.Panel',
    title    : 'Prioritas',
    iconCls  : 'icon-prov',
    alias    : 'widget.Prioritas',
    id       : 'Prioritas',
    layout   : 'fit',     
    requires : [
        'RPJM.module.MasterData.Prioritas.view.grid.GridPrioritas',
        'RPJM.module.MasterData.Prioritas.view.form.FormPrioritas'
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
        {xtype   : 'gridprioritas', flex : 1.2},
        {xtype   : 'formprioritas', flex : 0.8}         
    ]
});