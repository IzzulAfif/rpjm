Ext.define('RPJM.module.MasterData.SubBidangSkpd.store.SubBidangSkpd', {
    extend      : 'Ext.data.Store',
    model       : 'RPJM.module.MasterData.SubBidangSkpd.model.SubBidangSkpd',
    requires    : [
        'RPJM.module.MasterData.SubBidangSkpd.model.SubBidangSkpd'
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
            read    : BASE_URL + 'subbidangskpd/c_subbidangskpd/getSubBidangSkpd'
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