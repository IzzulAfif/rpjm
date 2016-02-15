Ext.define('RPJM.module.MasterData.SubBidangSkpd.view.SubBidangSkpd', {
    extend   :  'Ext.panel.Panel',
    title    : 'SubBidangSkpd',
    iconCls  : 'icon-subbidangskpd',
    alias    : 'widget.SubBidangSkpd',
    id       : 'SubBidangSkpd',
    layout   : 'fit',     
    requires : [
        'RPJM.module.MasterData.SubBidangSkpd.view.grid.GridSubBidangSkpd',
        'RPJM.module.MasterData.SubBidangSkpd.view.form.FormSubBidangSkpd'
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
        {xtype   : 'gridsubbidangskpd', flex : 1},
        {xtype   : 'formsubbidangskpd', flex : 1}         
    ]
});