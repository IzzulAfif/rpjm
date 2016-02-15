Ext.define('RPJM.module.MasterRpjm.Kegiatan.store.KegiatanFilter', {
    extend      : 'Ext.data.Store',
    model       : 'RPJM.module.MasterRpjm.Kegiatan.model.Kegiatan',
    requires    : [
        'RPJM.module.MasterRpjm.Kegiatan.model.Kegiatan'
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
            read    : BASE_URL + 'kegiatan/c_kegiatan/getKegiatanFilter'
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