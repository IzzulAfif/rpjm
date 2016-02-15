Ext.define('RPJM.module.MasterData.Kecamatan.store.Kecamatan', {
    extend      : 'Ext.data.Store',
    model       : 'RPJM.module.MasterData.Kecamatan.model.Kecamatan',
    requires    : [
        'RPJM.module.MasterData.Kecamatan.model.Kecamatan'
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
            read    : BASE_URL + 'kecamatan/c_kecamatan/getKecamatan'
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