Ext.define('RPJM.module.MasterRpjm.BidangUrusanPilihan.view.BidangUrusanPilihan', {
    extend   : 'Ext.panel.Panel',
    title    : 'Bidang Urusan Pilihan',
    iconCls  : 'icon-bidang',
    alias    : 'widget.BidangUrusanPilihan',
    id       : 'BidangUrusanPilihan',
    layout   : 'fit',     
    requires : [
        'RPJM.module.MasterRpjm.BidangUrusanPilihan.view.grid.GridUrusan',
        'RPJM.module.MasterRpjm.BidangUrusanPilihan.view.form.FormBidangUrusanPilihan'
    ],
    layout      : {
        type    :'hbox',
        align   :'stretch'
    },
    closable    : true,
    items       : [ 
        {xtype   : 'gridurusan', flex : 0.8},
        {xtype   : 'formbidangurusanpilihan', flex : 1.2}         
    ]
});