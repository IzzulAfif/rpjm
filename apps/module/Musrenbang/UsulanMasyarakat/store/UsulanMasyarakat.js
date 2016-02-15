Ext.define('RPJM.module.Musrenbang.UsulanMasyarakat.store.UsulanMasyarakat', {
    extend      : 'Ext.data.Store',
    model       : 'RPJM.module.Musrenbang.UsulanMasyarakat.model.UsulanMasyarakat',
    requires    : [
        'RPJM.module.Musrenbang.UsulanMasyarakat.model.UsulanMasyarakat'
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
            read    : BASE_URL + 'usulanmasyarakat/c_usulanmasyarakat/getUsulanMasyarakat'
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