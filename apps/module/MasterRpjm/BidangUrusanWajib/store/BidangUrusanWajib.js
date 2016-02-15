Ext.define('RPJM.module.MasterRpjm.BidangUrusanWajib.store.BidangUrusanWajib', {
    extend      : 'Ext.data.Store',
    model       : 'RPJM.module.MasterRpjm.BidangUrusanWajib.model.BidangUrusanWajib',
    requires    : [
        'RPJM.module.MasterRpjm.BidangUrusanWajib.model.BidangUrusanWajib'
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
            read    : BASE_URL + 'bidangurusanwajib/c_bidangurusanwajib/getBidangUrusanWajibDetail',            
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