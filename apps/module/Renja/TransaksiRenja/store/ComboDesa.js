Ext.define('RPJM.module.Renja.TransaksiRenja.store.ComboDesa', {
    extend      : 'Ext.data.Store',
    model       : 'RPJM.module.Renja.TransaksiRenja.model.ComboDesa',
    requires    : [
        'RPJM.module.Renja.TransaksiRenja.model.ComboDesa'
    ],
    autoLoad    : true,
    autoSync    : false,
    remoteFilter: true,
    root        : {
        expanded    : false
    },
    proxy       : {
        type            : 'ajax',
        api             : {
            read    : BASE_URL + 'transaksirenja/c_transaksirenja/getComboDesa'
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