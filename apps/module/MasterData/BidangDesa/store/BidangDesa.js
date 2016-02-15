Ext.define('RPJM.module.MasterData.BidangDesa.store.BidangDesa', {
    extend      : 'Ext.data.Store',
    model       : 'RPJM.module.MasterData.BidangDesa.model.BidangDesa',
    requires    : [
        'RPJM.module.MasterData.BidangDesa.model.BidangDesa'
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
            read    : BASE_URL + 'bidangsesa/c_bidangsesa/getBidangDesa'
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