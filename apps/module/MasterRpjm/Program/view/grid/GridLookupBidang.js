Ext.define('RPJM.module.MasterRpjm.Program.view.grid.GridLookupBidang', {
    extend      : 'Ext.grid.Panel',
    store       : 'RPJM.module.MasterRpjm.Program.store.LookupBidang',
    requires    : ['RPJM.module.MasterRpjm.Program.store.LookupBidang'],
    iconCls     : 'icon-grid',
    alias       : 'widget.gridlookupbidang',
    id          : 'gridlookupbidang',
    border      : true,
    frame       : true,
    margins     : '3px', 
    selModel    : {
        selType     : 'checkboxmodel',
        mode        : 'SINGLE',
        checkOnly   : true,
        width       : '3%',
        action      : 'selected',
    },
    dockedItems: [{
        // xtype       : 'pagingtoolbar',
        store       : 'RPJM.module.MasterRpjm.Program.store.LookupBidang',
        dock        : 'bottom'
    }], 
    columns  : [
        {
            text        : 'No',
            xtype       : 'rownumberer',
            width       : '7%',
            hidden      : true
        },
        {
            text        : 'Bidang',
            dataIndex   : 'nama_bidangrpjm',
            width       : '50%'
        },
        {
            text        : 'Urusan',
            dataIndex   : 'nama_urusan',
            width       : '30%'
        },
        {
            text        : 'Kode',
            dataIndex   : 'kode_urusan',
            width       : '10%',
            hidden      : true
        },
        {
            text        : 'Kode Bidang',
            dataIndex   : 'kode_bidangrpjm',
            width       : '45%',
            hidden      : true
        }
    ],
    tbar: [
         {
            xtype               : 'textfield',
            name                : 'caribidang',
            id                  : 'caribidang',
            emptyText           : 'Type a keyword Press Enter',
            width               : '90%',
            enableKeyEvents     : true,
            listeners           : {
                'keypress' : function(grid, e, evt, opts){
                    var value       = Ext.getCmp('caribidang').getValue();
                    Ext.Ajax.request({
                        url     : BASE_URL + 'program/c_program/searchLookupBidang',
                        method  : 'POST',
                        params  : {name : value},
                        success : function(response){
                            var data    = Ext.JSON.decode(response.responseText);
                            if(data.success){
                                    var storeApproval = Ext.getStore('RPJM.module.MasterRpjm.Program.store.LookupBidang');
                                    storeApproval.removeAll();
                                    storeApproval.add(data.data);
                            }
                        }
                    });
                }
            }
        }
    ]
});