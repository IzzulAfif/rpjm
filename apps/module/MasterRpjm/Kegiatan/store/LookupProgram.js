Ext.define('RPJM.module.MasterRpjm.Kegiatan.store.LookupProgram', {
    extend      : 'Ext.data.Store',
    model       : 'RPJM.module.MasterRpjm.Kegiatan.model.LookupProgram',
    requires    : [
        'RPJM.module.MasterRpjm.Kegiatan.model.LookupProgram'
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
            read    : BASE_URL + 'kegiatan/c_kegiatan/getLookupProgram'
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