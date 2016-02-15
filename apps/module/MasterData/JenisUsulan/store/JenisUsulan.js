Ext.define('RPJM.module.MasterData.JenisUsulan.store.JenisUsulan', {
    extend      : 'Ext.data.Store',
    model       : 'RPJM.module.MasterData.JenisUsulan.model.JenisUsulan',
    requires    : [
        'RPJM.module.MasterData.JenisUsulan.model.JenisUsulan'
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
            read    : BASE_URL + 'jenisusulan/c_jenisusulan/getJenisUsulan'
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