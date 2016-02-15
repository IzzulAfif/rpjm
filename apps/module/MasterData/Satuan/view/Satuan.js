Ext.define('RPJM.module.MasterData.Satuan.view.Satuan', {
    extend   :  'Ext.panel.Panel',
    title    : 'Satuan',
    iconCls  : 'icon-satuan',
    alias    : 'widget.Satuan',
    id       : 'Satuan',
    layout   : 'fit',     
    requires : [
        'RPJM.module.MasterData.Satuan.view.grid.GridSatuan',
        'RPJM.module.MasterData.Satuan.view.form.FormSatuan'
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
        {xtype   : 'gridsatuan', flex : 1},
        {xtype   : 'formsatuan', flex : 1}         
    ]
});