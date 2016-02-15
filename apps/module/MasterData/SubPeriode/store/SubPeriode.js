Ext.define('RPJM.module.MasterData.SubPeriode.store.SubPeriode', {
    extend      : 'Ext.data.Store',
    model       : 'RPJM.module.MasterData.SubPeriode.model.SubPeriode',
    requires    : [
        'RPJM.module.MasterData.SubPeriode.model.SubPeriode'
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
            read    : BASE_URL + 'subperiode/c_subperiode/getSubPeriode'
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