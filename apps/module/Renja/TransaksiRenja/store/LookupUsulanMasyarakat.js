Ext.define('RPJM.module.Renja.TransaksiRenja.store.LookupUsulanMasyarakat', {
    extend      : 'Ext.data.Store',
    model       : 'RPJM.module.Renja.TransaksiRenja.model.LookupUsulanMasyarakat',
    requires    : [
        'RPJM.module.Renja.TransaksiRenja.model.LookupUsulanMasyarakat'
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
            read    : BASE_URL + 'transaksirenja/c_transaksirenja/getLookupUsulanMasyarakat'
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