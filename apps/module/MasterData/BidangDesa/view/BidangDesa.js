Ext.define('RPJM.module.MasterData.BidangDesa.view.BidangDesa', {
    extend   :  'Ext.panel.Panel',
    title    : 'BidangDesa',
    iconCls  : 'icon-bidangdesa',
    alias    : 'widget.BidangDesa',
    id       : 'BidangDesa',
    layout   : 'fit',     
    requires : [
        'RPJM.module.MasterData.BidangDesa.view.grid.GridBidangDesa',
        'RPJM.module.MasterData.BidangDesa.view.form.FormBidangDesa'
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
        {xtype   : 'gridbidangdesa', flex : 1.3},
        {xtype   : 'formbidangdesa', flex : 0.7}         
    ]
});