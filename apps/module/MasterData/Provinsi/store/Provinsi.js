Ext.define('RPJM.module.MasterData.Provinsi.store.Provinsi', {
    extend      : 'Ext.data.Store',
    model       : 'RPJM.module.MasterData.Provinsi.model.Provinsi',
    requires    : [
        'RPJM.module.MasterData.Provinsi.model.Provinsi'
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
            read    : BASE_URL + 'provinsi/c_provinsi/getProvinsi'
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