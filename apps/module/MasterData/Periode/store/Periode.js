Ext.define('RPJM.module.MasterData.Periode.store.Periode', {
    extend      : 'Ext.data.Store',
    model       : 'RPJM.module.MasterData.Periode.model.Periode',
    requires    : [
        'RPJM.module.MasterData.Periode.model.Periode'
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
            read    : BASE_URL + 'periode/c_periode/getPeriode'
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