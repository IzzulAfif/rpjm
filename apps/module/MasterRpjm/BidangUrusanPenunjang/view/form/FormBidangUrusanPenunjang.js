Ext.define('RPJM.module.MasterRpjm.BidangUrusanPenunjang.view.form.FormBidangUrusanPenunjang', {
    extend      : 'Ext.form.Panel',
    title       : 'Form Bidang',
    iconCls     : 'icon-form',
    alias       : 'widget.formbidangurusanpenunjang',
    id          : 'formbidangurusanpenunjang',
    layout      : 'fit',
    border      : true,
    frame       : true,
    margins     : '3px',
    initComponent: function() {
        var me = this;
        me.items  = [
            {
                xtype       : 'tabpanel',
                activeTab   : 0,
                border      : false,
                frame       : false,
                items       : [
                    {
                        xtype       : 'panel',
                        autoScroll  : true,
                        border      : false,
                        frame       : false,
                        layout      : {
                            type    : 'fit'
                        },
                        title       : 'Bidang Urusan Penunjang',
                        defaults    : {
                            anchor      : '100%',
                            msgTarget   : 'under'
                        },
                        items       : [{
                            xtype   : 'panelbidangurusanpenunjang'
                        }]
                    },
                ]
            }
        ];
        me.buttons = [

        ];
        me.callParent(arguments);
    }  
});

/*===================================== Panel BidangUrusanPenunjang ==========================================*/

Ext.define('RPJM.module.MasterRpjm.BidangUrusanPenunjang.view.form.PanelBidangUrusanPenunjang', {
    extend   :  'Ext.panel.Panel',
    alias    : 'widget.panelbidangurusanpenunjang',
    id       : 'panelbidangurusanpenunjang',
    layout   : 'fit',
    frame    : true, 
    border   : false,    
    layout      : {
        type    :'vbox',
        align   :'stretch'
    },
    defaults    : {
        flex    : 1
    },    
    closable    : false,
    items       : [ 
        {xtype   : 'bidangurusanpenunjang', flex : 0.5},
        {xtype   : 'gridbidangurusanpenunjang', flex : 1.5}         
    ]
});


/*===================================== Form Urusan ==========================================*/

Ext.define('RPJM.module.MasterRpjm.BidangUrusanPenunjang.view.form.BidangUrusanPenunjang', {
    extend  : 'Ext.form.Panel',
    alias   : 'widget.bidangurusanpenunjang',
    id      : 'bidangurusanpenunjang',
    frame   : true,
    border  : false,
    items   : [
        {
            xtype   : 'textfield',
            hidden  : true,
            name    : 'id'
        },
        {
            xtype       : 'textfield',
            fieldLabel  : 'Kode Urusan',
            name        : 'kode_urusan',
            emptyText   : 'Kode Urusan',
            labelWidth  : 85,
            margins     : '2px 2px 2px 2px',
            allowBlank  : true,
            msgTarget   : 'under',
            anchor      : '100%',
            labelAlign  : 'top',
            labelStyle  : 'padding : 3px; font-weight : bold;',
            hidden      : true,
            flex        : 1
        },
        {
            xtype       : 'textfield',
            fieldLabel  : 'Kode Bidang',
            name        : 'kode_bidangrpjm',
            emptyText   : 'Kode Bidang Rpjm',
            labelWidth  : 85,
            margins     : '2px 2px 2px 2px',
            allowBlank  : true,
            anchor      : '100%',
            msgTarget   : 'under',
            labelAlign  : 'top',
            labelStyle  : 'padding : 3px; font-weight : bold;',
            hidden      : true,
            flex        : 1
        },
        {
            xtype       : 'textfield',
            name        : 'nama_bidangrpjm',
            fieldLabel  : 'Bidang',
            emptyText   : 'Bidang',
            labelWidth  : 85,
            margins     : '2px 2px 2px 2px',
            allowBlank  : true,
            anchor      : '100%',
            msgTarget   : 'under',
            labelAlign  : 'top',
            labelStyle  : 'padding : 3px; font-weight : bold;',
            flex        : 1
        },
        {
            xtype       : 'textfield',
            name        : 'no_bidangrpjm',
            fieldLabel  : 'No Bidang',
            emptyText   : 'No Bidang',
            labelWidth  : 85,
            margins     : '2px 2px 2px 2px',
            allowBlank  : true,
            anchor      : '100%',
            msgTarget   : 'under',
            labelAlign  : 'top',
            labelStyle  : 'padding : 3px; font-weight : bold;',
            flex        : 1
        },
    ],
    buttons : [
        {
            text    : 'Save',
            iconCls : 'icon-save',
            action  : 'save'
        },
           
        {
            text    : 'Edit',
            iconCls : 'icon-edit',
            action  : 'update'
        },
        {
            text    : 'Reset',
            iconCls : 'icon-refresh',
            action  : 'reset'
        }
    ]
});

/*===================================== Grid Bidang Urusan Penunjang ==========================================*/

Ext.define('RPJM.module.MasterRpjm.BidangUrusanPenunjang.view.form.GridBidangUrusanPenunjang', {
    extend   : 'Ext.grid.Panel',
    store    : 'RPJM.module.MasterRpjm.BidangUrusanPenunjang.store.BidangUrusanPenunjang',
    requires : ['RPJM.module.MasterRpjm.BidangUrusanPenunjang.store.BidangUrusanPenunjang'],
    alias    : 'widget.gridbidangurusanpenunjang',
    id       : 'gridbidangurusanpenunjang',
    border   : false,
    frame    : true,
    margins     : '3px', 
    selModel: {
        selType     : 'checkboxmodel',
        mode        : 'SINGLE',
        checkOnly   : true,
        width       : '3%',
        action      : 'selected'
    },
    columns  : [
        {
            text        : 'No',
            xtype       : 'rownumberer',
            width       : '7%',
            hidden      : true
        },
        {
            text        : 'No Bidang',
            dataIndex   : 'no_bidangrpjm',
            width       : '12%'
        },
        {
            text        : 'Kode',
            dataIndex   : 'kode_urusan',
            width       : '10%',
            hidden      : true
        },
        {
            text        : 'Kode',
            dataIndex   : 'kode_bidangrpjm',
            width       : '10%',
            hidden      : true
        },
        {
            text        : 'Nama Bidang',
            dataIndex   : 'nama_bidangrpjm',
            width       : '80%'
        }
    ],
    tbar: [
         { 
            xtype       : 'button', 
            iconCls     : 'icon-delete', 
            text        : 'Delete', 
            action      : 'delete'
        },
         {
            xtype               : 'textfield',
            emptyText           : 'Type a keyword Press Enter',
            width               : '85%',
            enableKeyEvents     : true,
            action              : 'searchBidangUrusanPenunjang'
        }
    ]
});