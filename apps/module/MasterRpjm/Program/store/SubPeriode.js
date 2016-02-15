Ext.define('RPJM.module.MasterRpjm.Program.store.SubPeriode', {
    extend      : 'Ext.data.Store',
    model       : 'RPJM.module.MasterRpjm.Program.model.SubPeriode',
    requires    : [
        'RPJM.module.MasterRpjm.Program.model.SubPeriode'
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
            read    : BASE_URL + 'program/c_program/getSubPeriode'
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