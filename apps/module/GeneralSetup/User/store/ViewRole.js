Ext.define('RPJM.module.GeneralSetup.User.store.ViewRole', {
    extend      : 'Ext.data.Store',
    model       : 'RPJM.module.GeneralSetup.User.model.ViewRole',
    requires    : [
        'RPJM.module.GeneralSetup.User.model.ViewRole'
    ],
    autoLoad    : true,
    autoSync    : false,
    root        : {
        expanded    : false
    },
    proxy       : {
        type            : 'ajax',
        api             : {
            read    : BASE_URL + 'GeneralSetup/c_role/viewRole'
        },
        actionMethods   : {
            read    : 'POST'
        },
        reader          : {
            type            : 'json',
            root            : 'data',
            successProperty : 'success'
        },
        writer          : {
            type            : 'json',
            writeAllFields  : true,
            root            : 'data',
            encode          : true
        }
    }
});