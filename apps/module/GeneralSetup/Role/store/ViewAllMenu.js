Ext.define('RPJM.module.GeneralSetup.Role.store.ViewAllMenu', {
    extend      : 'Ext.data.Store',
    model       : 'RPJM.module.GeneralSetup.Role.model.ViewMenu',
    requires    : ['RPJM.module.GeneralSetup.Role.model.ViewMenu'],
    autoLoad    : true,
    autoSync    : false,
    root        : {
        expanded    : false
    },
    proxy       : {
        type            : 'ajax',
        api             : {
            read    : BASE_URL + 'GeneralSetup/c_menu/viewAllMenu'
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