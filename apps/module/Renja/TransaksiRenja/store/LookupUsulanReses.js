Ext.define('RPJM.module.Renja.TransaksiRenja.store.LookupUsulanReses', {
    extend      : 'Ext.data.Store',
    model       : 'RPJM.module.Renja.TransaksiRenja.model.LookupUsulanReses',
    requires    : [
        'RPJM.module.Renja.TransaksiRenja.model.LookupUsulanReses'
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
            read    : BASE_URL + 'transaksirenja/c_transaksirenja/getLookupUsulanReses'
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