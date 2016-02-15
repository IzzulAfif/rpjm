Ext.define('RPJM.module.MasterRpjm.Program.store.ProgramFilter', {
    extend      : 'Ext.data.Store',
    model       : 'RPJM.module.MasterRpjm.Program.model.Program',
    requires    : [
        'RPJM.module.MasterRpjm.Program.model.Program'
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
            read    : BASE_URL + 'program/c_program/getProgramFilter'
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