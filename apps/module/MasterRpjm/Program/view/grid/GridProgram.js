Ext.define('RPJM.module.MasterRpjm.Program.view.grid.GridProgram', {
    extend   : 'Ext.grid.Panel',
    store    : 'RPJM.module.MasterRpjm.Program.store.Program',
    requires : ['RPJM.module.MasterRpjm.Program.store.Program'],
    title    : 'Grid Program',
    iconCls  : 'icon-grid',
    alias    : 'widget.gridprogram',
    id       : 'gridprogram',
    border   : true,
    frame    : true,
        margins     : '3px', 
    selModel: {
        selType     : 'checkboxmodel',
        mode        : 'SINGLE',
        checkOnly   : true,
        width       : '3%',
        action      : 'selected',
    },
    dockedItems: [{
        xtype       : 'pagingtoolbar',
        store       : 'RPJM.module.MasterRpjm.Program.store.Program',
        dock        : 'bottom'
    }], 
    columns  : [
        {
            text    : 'No',
            xtype   : 'rownumberer',
            width   : '5%'
        },
        {
            text     : 'Bidang',
            dataIndex: 'nama_bidangrpjm',
            width    : '20%'
        },
        {
            text     : 'Program',
            dataIndex: 'programrpjm',
            width    : '75%'
        },
        {
            text     : 'No Urut',
            dataIndex: 'no_urut',
            width    : '8%'
        }
    ],
    tbar: [
         // { xtype: 'button', iconCls: 'icon-excel', text: 'Print', action : 'print' },
        {
            xtype               : 'combobox',
            emptyText           : 'Bidang',
            name                : 'kode_bidangrpjm',
            id                  : 'kode_bidangrpjm',
            store               : Ext.create('RPJM.module.MasterRpjm.Program.store.LookupBidang'),
            enableKeyEvents     : true,
            displayField        : 'nama_bidangrpjm',
            valueField          : 'kode_bidangrpjm',
            listeners           : {
                'select' : function(combo, records, e, evt, opts){
                    var value       = Ext.getCmp('kode_bidangrpjm').getValue();
                    Ext.Ajax.request({
                        url             : BASE_URL + 'program/c_program/getProgram',
                        method          : 'POST',
                        params          : {
                            value : Ext.JSON.encode(value)
                        },
                        success         : function(response){
                            var data    = Ext.JSON.decode(response.responseText);
                            var storeMenu = Ext.getStore('RPJM.module.MasterRpjm.Program.store.Program');
                            storeMenu.loadData([],false);
                            storeMenu.add(data.data);
                        }
                    });
                }
            }
        },
        {
            xtype               : 'textfield',
            emptyText           : 'Type a keyword Press Enter',
            width               : '65%',
            enableKeyEvents     : true,
            action              : 'search'
        },
        {   xtype               : 'button', 
            iconCls             : 'icon-delete', 
            text                : 'Delete', 
            action              : 'delete', 
            disabled            : deleteProgram 
        }
    ]
});