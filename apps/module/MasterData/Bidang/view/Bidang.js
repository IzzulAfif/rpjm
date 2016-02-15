Ext.define('RPJM.module.MasterData.Bidang.view.Bidang', {
    extend   :  'Ext.panel.Panel',
    title    : 'Bidang',
    iconCls  : 'icon-bidang',
    alias    : 'widget.Bidang',
    id       : 'Bidang',
    layout   : 'fit',     
    requires : [
        'RPJM.module.MasterData.Bidang.view.grid.GridBidang',
        'RPJM.module.MasterData.Bidang.view.form.FormBidang'
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
        {xtype   : 'gridbidang', flex : 1},
        {xtype   : 'formbidang', flex : 1}         
    ]
});