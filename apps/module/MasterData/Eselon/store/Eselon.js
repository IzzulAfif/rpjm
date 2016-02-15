Ext.define('RPJM.module.MasterData.Eselon.store.Eselon', {
    extend      : 'Ext.data.Store',
    model       : 'RPJM.module.MasterData.Eselon.model.Eselon',
    requires    : [
        'RPJM.module.MasterData.Eselon.model.Eselon'
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
            read    : BASE_URL + 'eselon/c_eselon/getEselon'
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