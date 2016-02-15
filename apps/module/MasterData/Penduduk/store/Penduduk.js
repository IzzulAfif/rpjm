Ext.define('RPJM.module.MasterData.Penduduk.store.Penduduk', {
    extend      : 'Ext.data.Store',
    model       : 'RPJM.module.MasterData.Penduduk.model.Penduduk',
    requires    : [
        'RPJM.module.MasterData.Penduduk.model.Penduduk'
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
            read    : BASE_URL + 'penduduk/c_penduduk/getPenduduk'
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