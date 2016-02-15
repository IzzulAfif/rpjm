Ext.define('RPJM.module.MasterData.Pegawai.store.Pegawai', {
    extend      : 'Ext.data.Store',
    model       : 'RPJM.module.MasterData.Pegawai.model.Pegawai',
    requires    : [
        'RPJM.module.MasterData.Pegawai.model.Pegawai'
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
            read    : BASE_URL + 'pegawai/c_pegawai/getPegawai'
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