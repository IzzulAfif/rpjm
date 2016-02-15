Ext.define('RPJM.module.MasterRpjm.SubUrusan.store.Urusan', {
    extend      : 'Ext.data.Store',
    model       : 'RPJM.module.MasterRpjm.SubUrusan.model.Urusan',
    requires    : [
        'RPJM.module.MasterRpjm.SubUrusan.model.Urusan'
    ],
    autoLoad    : true,
    autoSync    : true,
    pageSize    : 20,
    remoteFilter: true,
    root        : {
        expanded    : false
    },
    proxy       : {
        type        : 'ajax',
        api         : {
            read    : BASE_URL + 'suburusan/c_suburusan/getUrusan',            
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