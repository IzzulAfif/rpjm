Ext.define('RPJM.module.Musrenbang.MusrenbangKecamatan.store.MusrenbangKecamatan', {
    extend      : 'Ext.data.Store',
    model       : 'RPJM.module.Musrenbang.MusrenbangKecamatan.model.MusrenbangKecamatan',
    requires    : [
        'RPJM.module.Musrenbang.MusrenbangKecamatan.model.MusrenbangKecamatan'
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
            read    : BASE_URL + 'musrenbangkecamatan/c_musrenbangkecamatan/getMusrenbangKecamatan'
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