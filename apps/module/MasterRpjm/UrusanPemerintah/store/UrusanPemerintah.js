Ext.define('RPJM.module.MasterRpjm.UrusanPemerintah.store.UrusanPemerintah', {
    extend      : 'Ext.data.Store',
    model       : 'RPJM.module.MasterRpjm.UrusanPemerintah.model.UrusanPemerintah',
    requires    : [
        'RPJM.module.MasterRpjm.UrusanPemerintah.model.UrusanPemerintah'
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
            read    : BASE_URL + 'urusanpemerintah/c_urusanpemerintah/getUrusanPemerintah'
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