Ext.define('RPJM.module.MasterRpjm.BidangUrusanWajib.view.BidangUrusanWajib', {
    extend   : 'Ext.panel.Panel',
    title    : 'Bidang Urusan Wajib',
    iconCls  : 'icon-bidang',
    alias    : 'widget.BidangUrusanWajib',
    id       : 'BidangUrusanWajib',
    layout   : 'fit',     
    requires : [
        'RPJM.module.MasterRpjm.BidangUrusanWajib.view.grid.GridSubUrusan',
        'RPJM.module.MasterRpjm.BidangUrusanWajib.view.form.FormBidangUrusanWajib'
    ],
    layout      : {
        type    :'hbox',
        align   :'stretch'
    },
    closable    : true,
    items       : [ 
        {xtype   : 'gridsuburusan', flex : 0.8},
        {xtype   : 'formbidangurusanwajib', flex : 1.2}         
    ]
});