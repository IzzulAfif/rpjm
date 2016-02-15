Ext.define('RPJM.module.MasterData.Golongan.store.Golongan', {
    extend      : 'Ext.data.Store',
    model       : 'RPJM.module.MasterData.Golongan.model.Golongan',
    requires    : [
        'RPJM.module.MasterData.Golongan.model.Golongan'
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
            read    : BASE_URL + 'golongan/c_golongan/getGolongan'
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