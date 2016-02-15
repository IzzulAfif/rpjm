Ext.define('RPJM.module.Musrenbang.UsulanAkademisi.store.UsulanAkademisi', {
    extend      : 'Ext.data.Store',
    model       : 'RPJM.module.Musrenbang.UsulanAkademisi.model.UsulanAkademisi',
    requires    : [
        'RPJM.module.Musrenbang.UsulanAkademisi.model.UsulanAkademisi'
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
            read    : BASE_URL + 'usulanakademisi/c_usulanakademisi/getUsulanAkademisi'
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