Ext.define('RPJM.module.Musrenbang.UsulanKomunitas.store.UsulanKomunitas', {
    extend      : 'Ext.data.Store',
    model       : 'RPJM.module.Musrenbang.UsulanKomunitas.model.UsulanKomunitas',
    requires    : [
        'RPJM.module.Musrenbang.UsulanKomunitas.model.UsulanKomunitas'
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
            read    : BASE_URL + 'usulankomunitas/c_usulankomunitas/getUsulanKomunitas'
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