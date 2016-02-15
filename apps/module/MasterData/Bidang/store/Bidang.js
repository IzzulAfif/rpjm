Ext.define('RPJM.module.MasterData.Bidang.store.Bidang', {
    extend      : 'Ext.data.Store',
    model       : 'RPJM.module.MasterData.Bidang.model.Bidang',
    requires    : [
        'RPJM.module.MasterData.Bidang.model.Bidang'
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
            read    : BASE_URL + 'bidang/c_bidang/getBidang'
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