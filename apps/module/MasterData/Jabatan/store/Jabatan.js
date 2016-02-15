Ext.define('RPJM.module.MasterData.Jabatan.store.Jabatan', {
    extend      : 'Ext.data.Store',
    model       : 'RPJM.module.MasterData.Jabatan.model.Jabatan',
    requires    : [
        'RPJM.module.MasterData.Jabatan.model.Jabatan'
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
            read    : BASE_URL + 'jabatan/c_jabatan/getJabatan'
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