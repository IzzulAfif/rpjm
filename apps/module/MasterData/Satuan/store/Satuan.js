Ext.define('RPJM.module.MasterData.Satuan.store.Satuan', {
    extend      : 'Ext.data.Store',
    model       : 'RPJM.module.MasterData.Satuan.model.Satuan',
    requires    : [
        'RPJM.module.MasterData.Satuan.model.Satuan'
    ],
    autoLoad    : true,
    autoSync    : false,
    pageSize    : 20,
    remoteFilter: true,
    root        : {
        expanded    : false
    },
    proxy       : {
        type            : 'ajax',
        api             : {
            read    : BASE_URL + 'satuan/c_satuan/getSatuan'
        },
        actionMethods   : {
            read    : 'POST'
        },
        reader          : {
            type            : 'json',
            root            : 'data',
            successProperty : 'success',
            totalProperty   : 'total'
        },
        writer          : {
            type            : 'json',
            writeAllFields  : true,
            root            : 'data',
            encode          : true
        }
    }
});