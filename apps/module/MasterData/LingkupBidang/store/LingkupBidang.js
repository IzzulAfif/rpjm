Ext.define('RPJM.module.MasterData.LingkupBidang.store.LingkupBidang', {
    extend      : 'Ext.data.Store',
    model       : 'RPJM.module.MasterData.LingkupBidang.model.LingkupBidang',
    requires    : [
        'RPJM.module.MasterData.LingkupBidang.model.LingkupBidang'
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
            read    : BASE_URL + 'lingkupbidang/c_lingkupbidang/getLingkupBidang'
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