Ext.define('RPJM.module.Renja.TransaksiRenja.store.TransaksiRenja', {
    extend      : 'Ext.data.Store',
    model       : 'RPJM.module.Renja.TransaksiRenja.model.TransaksiRenja',
    requires    : [
        'RPJM.module.Renja.TransaksiRenja.model.TransaksiRenja'
    ],
    autoLoad    : true,
    autoSync    : false,
    // pageSize    : 20,
    remoteFilter: true,
    root        : {
        expanded    : false
    },
    proxy       : {
        type            : 'ajax',
        api             : {
            read    : BASE_URL + 'transaksirenja/c_transaksirenja/getMusrenbang'
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