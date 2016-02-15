Ext.define('RPJM.module.MasterData.Partai.store.Partai', {
    extend      : 'Ext.data.Store',
    model       : 'RPJM.module.MasterData.Partai.model.Partai',
    requires    : [
        'RPJM.module.MasterData.Partai.model.Partai'
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
            read    : BASE_URL + 'partai/c_partai/getPartai'
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