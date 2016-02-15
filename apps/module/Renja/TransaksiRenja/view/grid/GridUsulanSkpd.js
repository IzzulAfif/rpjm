Ext.define('RPJM.module.Renja.TransaksiRenja.view.grid.GridUsulanSkpd', {
    extend      : 'Ext.grid.Panel',
    store       : 'RPJM.module.Renja.TransaksiRenja.store.LookupUsulanSkpd',
    requires    : ['RPJM.module.Renja.TransaksiRenja.store.LookupUsulanSkpd'],
    iconCls     : 'icon-grid',
    alias       : 'widget.gridusulanskpd',
    id          : 'gridusulanskpd',
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
        store       : 'RPJM.module.Renja.TransaksiRenja.store.LookupUsulanSkpd',
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
            text        : 'Kode Musrenbang',
            dataIndex   : 'kode_musrenbang',
            width       : '15%',
            hidden      : true
        },
        {
            text        : 'Kegiatan',
            dataIndex   : 'kegiatan',
            width       : '50%'
        },
        {
            text     : 'Penerimaan Lain',
            dataIndex: 'penerimaan_lain',
            width    : '15%'
        },
        {
            text     : 'RSUD',
            dataIndex: 'rsud',
            width    : '15%'
        },
        {
            text     : 'Kapitasi',
            dataIndex: 'kapitasi',
            width    : '15%'
        },
        {
            text     : 'Bangub',
            dataIndex: 'bangub',
            width    : '15%'
        },
        {
            text     : 'Sektoral Apbd',
            dataIndex: 'sektoral_apbd',
            width    : '15%'
        },
        {
            text     : 'DAK',
            dataIndex: 'dak',
            width    : '15%'
        },
        {
            text     : 'DBHCHT',
            dataIndex: 'dbhcht',
            width    : '15%'
        },
        {
            text     : 'DID',
            dataIndex: 'did',
            width    : '15%'
        },
        {
            text     : 'TP',
            dataIndex: 'tp',
            width    : '15%'
        },
        {
            text     : 'Dekonsentrasi',
            dataIndex: 'dekonsentrasi',
            width    : '15%'
        },
        {
            text     : 'Sektoral Apbn',
            dataIndex: 'sektoral_apbn',
            width    : '15%'
        },
    ],
    tbar: [
         {
            xtype               : 'textfield',
            name                : 'carikegiatan',
            id                  : 'carikegiatan',
            emptyText           : 'Type a keyword Press Enter',
            width               : '90%',
            enableKeyEvents     : true,
            listeners           : {
                'keypress' : function(grid, e, evt, opts){
                    var value       = Ext.getCmp('carikegiatan').getValue();
                    Ext.Ajax.request({
                        url     : BASE_URL + 'transaksirenja/c_transaksirenja/searchLookupUsulanSkpd',
                        method  : 'POST',
                        params  : {name : value},
                        success : function(response){
                            var data    = Ext.JSON.decode(response.responseText);
                            if(data.success){
                                    var storeApproval = Ext.getStore('RPJM.module.Renja.TransaksiRenja.store.LookupUsulanSkpd');
                                    // storeApproval.removeAll();
                                    storeApproval.loadData([],false);
                                    storeApproval.add(data.data);
                            }
                        }
                    });
                }
            }
        }
    ]
});