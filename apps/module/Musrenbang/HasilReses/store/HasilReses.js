Ext.define('RPJM.module.Musrenbang.HasilReses.store.HasilReses', {
    extend      : 'Ext.data.Store',
    model       : 'RPJM.module.Musrenbang.HasilReses.model.HasilReses',
    requires    : [
        'RPJM.module.Musrenbang.HasilReses.model.HasilReses'
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
            read    : BASE_URL + 'hasilreses/c_hasilreses/getHasilReses'
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