Ext.define('RPJM.module.MasterData.Agama.store.Agama', {
    extend      : 'Ext.data.Store',
    model       : 'RPJM.module.MasterData.Agama.model.Agama',
    requires    : [
        'RPJM.module.MasterData.Agama.model.Agama'
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
            read    : BASE_URL + 'agama/c_agama/getAgama'
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