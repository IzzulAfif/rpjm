Ext.define('RPJM.module.MasterData.PilihanUrusan.store.PilihanUrusan', {
    extend      : 'Ext.data.Store',
    model       : 'RPJM.module.MasterData.PilihanUrusan.model.PilihanUrusan',
    requires    : [
        'RPJM.module.MasterData.PilihanUrusan.model.PilihanUrusan'
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
            read    : BASE_URL + 'pilihanurusan/c_pilihanurusan/getPilihanUrusan'
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