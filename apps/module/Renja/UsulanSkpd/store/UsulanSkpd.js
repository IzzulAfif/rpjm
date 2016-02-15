Ext.define('RPJM.module.Renja.UsulanSkpd.store.UsulanSkpd', {
    extend      : 'Ext.data.Store',
    model       : 'RPJM.module.Renja.UsulanSkpd.model.UsulanSkpd',
    requires    : [
        'RPJM.module.Renja.UsulanSkpd.model.UsulanSkpd'
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
            read    : BASE_URL + 'usulanskpd/c_usulanskpd/getUsulanSkpd'
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