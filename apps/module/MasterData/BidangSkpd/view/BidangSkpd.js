Ext.define('RPJM.module.MasterData.BidangSkpd.view.BidangSkpd', {
    extend   :  'Ext.panel.Panel',
    title    : 'BidangSkpd',
    iconCls  : 'icon-bidangskpd',
    alias    : 'widget.BidangSkpd',
    id       : 'BidangSkpd',
    layout   : 'fit',     
    requires : [
        'RPJM.module.MasterData.BidangSkpd.view.grid.GridBidangSkpd',
        'RPJM.module.MasterData.BidangSkpd.view.form.FormBidangSkpd'
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
        {xtype   : 'gridbidangskpd', flex : 1.3},
        {xtype   : 'formbidangskpd', flex : 0.7}         
    ]
});