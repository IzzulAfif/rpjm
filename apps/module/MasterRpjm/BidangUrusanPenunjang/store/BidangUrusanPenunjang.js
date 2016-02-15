Ext.define('RPJM.module.MasterRpjm.BidangUrusanPenunjang.store.BidangUrusanPenunjang', {
    extend      : 'Ext.data.Store',
    model       : 'RPJM.module.MasterRpjm.BidangUrusanPenunjang.model.BidangUrusanPenunjang',
    requires    : [
        'RPJM.module.MasterRpjm.BidangUrusanPenunjang.model.BidangUrusanPenunjang'
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
            read    : BASE_URL + 'bidangurusanpenunjang/c_bidangurusanpenunjang/getBidangUrusanPenunjangDetail',            
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