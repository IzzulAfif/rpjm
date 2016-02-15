Ext.define('RPJM.module.MasterRpjm.BidangUrusanPenunjang.view.BidangUrusanPenunjang', {
    extend   : 'Ext.panel.Panel',
    title    : 'Bidang Urusan Penunjang',
    iconCls  : 'icon-bidang',
    alias    : 'widget.BidangUrusanPenunjang',
    id       : 'BidangUrusanPenunjang',
    layout   : 'fit',     
    requires : [
        'RPJM.module.MasterRpjm.BidangUrusanPenunjang.view.grid.GridUrusan',
        'RPJM.module.MasterRpjm.BidangUrusanPenunjang.view.form.FormBidangUrusanPenunjang'
    ],
    layout      : {
        type    :'hbox',
        align   :'stretch'
    },
    closable    : true,
    items       : [ 
        {xtype   : 'gridurusan', flex : 0.8},
        {xtype   : 'formbidangurusanpenunjang', flex : 1.2}         
    ]
});