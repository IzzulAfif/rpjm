Ext.define('RPJM.module.MasterData.Prioritas.store.Prioritas', {
    extend      : 'Ext.data.Store',
    model       : 'RPJM.module.MasterData.Prioritas.model.Prioritas',
    requires    : [
        'RPJM.module.MasterData.Prioritas.model.Prioritas'
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
            read    : BASE_URL + 'prioritas/c_prioritas/getPrioritas'
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