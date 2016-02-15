Ext.define('RPJM.module.MasterRpjm.BidangUrusanPilihan.store.BidangUrusanPilihan', {
    extend      : 'Ext.data.Store',
    model       : 'RPJM.module.MasterRpjm.BidangUrusanPilihan.model.BidangUrusanPilihan',
    requires    : [
        'RPJM.module.MasterRpjm.BidangUrusanPilihan.model.BidangUrusanPilihan'
    ],
    autoLoad    : false,
    autoSync    : false,
    pageSize    : 20,
    remoteFilter: true,
    root        : {
        expanded    : false
    },
    proxy       : {
        type        : 'ajax',
        api         : {
            read    : BASE_URL + 'bidangurusanpilihan/c_bidangurusanpilihan/getBidangUrusanPilihanDetail',            
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