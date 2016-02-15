Ext.define('RPJM.module.Musrenbang.MusrenbangDesa.store.MusrenbangDesa', {
    extend      : 'Ext.data.Store',
    model       : 'RPJM.module.Musrenbang.MusrenbangDesa.model.MusrenbangDesa',
    requires    : [
        'RPJM.module.Musrenbang.MusrenbangDesa.model.MusrenbangDesa'
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
            read    : BASE_URL + 'musrenbangdesa/c_musrenbangdesa/getMusrenbangDesa'
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