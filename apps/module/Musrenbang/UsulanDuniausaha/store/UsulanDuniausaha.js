Ext.define('RPJM.module.Musrenbang.UsulanDuniausaha.store.UsulanDuniausaha', {
    extend      : 'Ext.data.Store',
    model       : 'RPJM.module.Musrenbang.UsulanDuniausaha.model.UsulanDuniausaha',
    requires    : [
        'RPJM.module.Musrenbang.UsulanDuniausaha.model.UsulanDuniausaha'
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
            read    : BASE_URL + 'usulanduniausaha/c_usulanduniausaha/getUsulanDuniausaha'
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