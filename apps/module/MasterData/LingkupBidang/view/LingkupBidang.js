Ext.define('RPJM.module.MasterData.LingkupBidang.view.LingkupBidang', {
    extend   :  'Ext.panel.Panel',
    title    : 'LingkupBidang',
    iconCls  : 'icon-lingkupbidang',
    alias    : 'widget.LingkupBidang',
    id       : 'LingkupBidang',
    layout   : 'fit',     
    requires : [
        'RPJM.module.MasterData.LingkupBidang.view.grid.GridLingkupBidang',
        'RPJM.module.MasterData.LingkupBidang.view.form.FormLingkupBidang'
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
        {xtype   : 'gridlingkupbidang', flex : 1.3},
        {xtype   : 'formlingkupbidang', flex : 0.7}         
    ]
});