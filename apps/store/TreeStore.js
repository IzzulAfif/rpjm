Ext.define('RPJM.store.TreeStore', {
    extend      : 'Ext.data.TreeStore',
    model       : 'RPJM.model.TreeStore',
    requires    : [
        'RPJM.model.TreeStore'
    ],
    autoLoad    : true,
    autoSync    : false,
    root        : {
        expanded    : false
    },
    proxy       : {
        type            : 'ajax',
        api             : {
            read    : BASE_URL + 'dashboard/Menu'
        },
        actionMethods   : {
            read    : 'POST'
        },
        reader          : {
            type            : 'json',
            root            : 'data',
            successProperty : 'success'
        },
        writer          : {
            type            : 'json',
            writeAllFields  : true,
            root            : 'data',
            encode          : true
        }
    }
});