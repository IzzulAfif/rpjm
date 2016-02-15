Ext.define('RPJM.module.MasterData.BidangSkpd.store.BidangSkpd', {
    extend      : 'Ext.data.Store',
    model       : 'RPJM.module.MasterData.BidangSkpd.model.BidangSkpd',
    requires    : [
        'RPJM.module.MasterData.BidangSkpd.model.BidangSkpd'
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
            read    : BASE_URL + 'bidangskpd/c_bidangskpd/getBidangSkpd'
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