Ext.define('RPJM.module.MasterData.Kedudukan.store.Kedudukan', {
    extend      : 'Ext.data.Store',
    model       : 'RPJM.module.MasterData.Kedudukan.model.Kedudukan',
    requires    : [
        'RPJM.module.MasterData.Kedudukan.model.Kedudukan'
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
            read    : BASE_URL + 'kedudukan/c_kedudukan/getKedudukan'
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