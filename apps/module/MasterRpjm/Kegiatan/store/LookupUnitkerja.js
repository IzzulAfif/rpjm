Ext.define('RPJM.module.MasterRpjm.Kegiatan.store.LookupUnitkerja', {
    extend      : 'Ext.data.Store',
    model       : 'RPJM.module.MasterRpjm.Kegiatan.model.LookupUnitkerja',
    requires    : [
        'RPJM.module.MasterRpjm.Kegiatan.model.LookupUnitkerja'
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
            read    : BASE_URL + 'kegiatan/c_kegiatan/getLookupUnitkerja'
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