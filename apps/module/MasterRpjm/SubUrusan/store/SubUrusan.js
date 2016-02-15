Ext.define('RPJM.module.MasterRpjm.SubUrusan.store.SubUrusan', {
    extend      : 'Ext.data.Store',
    model       : 'RPJM.module.MasterRpjm.SubUrusan.model.SubUrusan',
    requires    : [
        'RPJM.module.MasterRpjm.SubUrusan.model.SubUrusan'
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
            read    : BASE_URL + 'suburusan/c_suburusan/getSubUrusanDetail'
        },
        actionMethods   : {
            read        : 'POST'
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