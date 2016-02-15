Ext.define('RPJM.module.MasterData.Skpd.store.Skpd', {
    extend      : 'Ext.data.Store',
    model       : 'RPJM.module.MasterData.Skpd.model.Skpd',
    requires    : [
        'RPJM.module.MasterData.Skpd.model.Skpd'
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
            read    : BASE_URL + 'skpd/c_skpd/getSkpd'
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