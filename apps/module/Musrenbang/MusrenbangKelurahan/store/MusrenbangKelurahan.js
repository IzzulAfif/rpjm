Ext.define('RPJM.module.Musrenbang.MusrenbangKelurahan.store.MusrenbangKelurahan', {
    extend      : 'Ext.data.Store',
    model       : 'RPJM.module.Musrenbang.MusrenbangKelurahan.model.MusrenbangKelurahan',
    requires    : [
        'RPJM.module.Musrenbang.MusrenbangKelurahan.model.MusrenbangKelurahan'
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
            read    : BASE_URL + 'musrenbangkelurahan/c_musrenbangkelurahan/getMusrenbangKelurahan'
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