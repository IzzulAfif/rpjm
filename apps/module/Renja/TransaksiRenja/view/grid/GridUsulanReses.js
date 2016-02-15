Ext.define('RPJM.module.Renja.TransaksiRenja.view.grid.GridUsulanReses', {
    extend      : 'Ext.grid.Panel',
    store       : 'RPJM.module.Renja.TransaksiRenja.store.LookupUsulanReses',
    requires    : ['RPJM.module.Renja.TransaksiRenja.store.LookupUsulanReses'],
    iconCls     : 'icon-grid',
    alias       : 'widget.gridusulanreses',
    id          : 'gridusulanreses',
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
        store       : 'RPJM.module.Renja.TransaksiRenja.store.LookupUsulanReses',
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
            width       : '15%'
        },
        {
            text        : 'Kegiatan',
            dataIndex   : 'kegiatan',
            width       : '50%'
        },
        {
            text        : 'Lokasi',
            dataIndex   : 'lokasi',
            width       : '50%'
        },
        {
            text        : 'Volume',
            dataIndex   : 'volume',
            width       : '50%',
            hidden      : true
        },
        {
            text        : 'Satuan',
            dataIndex   : 'satuan',
            width       : '50%',
            hidden      : true
        },
        {
            text        : 'Prioritas',
            dataIndex   : 'prioritas',
            width       : '50%',
            hidden      : true
        },
        {
            text        : 'Lingkup Bidang',
            dataIndex   : 'lingkupbidang',
            width       : '50%',
            hidden      : true
        },
        {
            text        : 'Swadana',
            dataIndex   : 'swadana',
            width       : '50%',
            hidden      : true
        },
        {
            text        : 'APBD Kab',
            dataIndex   : 'apbd_kab',
            width       : '50%',
            hidden      : true
        },
        {
            text        : 'APBD Prov',
            dataIndex   : 'apbd_prov',
            width       : '50%',
            hidden      : true
        },
        {
            text        : 'APBN',
            dataIndex   : 'apbn',
            width       : '50%',
            hidden      : true
        }
    ],
    tbar: [
        {
            xtype           : 'checkbox',
            name            : 'verified',
            id              : 'verified',
            uncheckedValue  : '0',
            inputValue      : 1,
            boxLabel        : 'Verifikasi'
        }, 
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
                        url     : BASE_URL + 'transaksirenja/c_transaksirenja/searchLookupUsulanReses',
                        method  : 'POST',
                        params  : {name : value},
                        success : function(response){
                            var data    = Ext.JSON.decode(response.responseText);
                            if(data.success){
                                    var storeApproval = Ext.getStore('RPJM.module.Renja.TransaksiRenja.store.LookupUsulanReses');
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