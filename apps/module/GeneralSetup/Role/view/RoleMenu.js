Ext.define('RPJM.module.GeneralSetup.Role.view.RoleMenu', {
    extend   :  'Ext.panel.Panel',
    alias    : 'widget.rolemenu',
    id       : 'rolemenu',
    layout   : 'fit',     
    requires : [
        'RPJM.module.GeneralSetup.Role.view.form.FormRole',
        'RPJM.module.GeneralSetup.Role.view.grid.GridRoleMenu'
    ],
    layout      : {
        type    :'vbox',
        align   :'stretch'
    },
    defaults    : {
        flex    : 1
    },    
    items       : [ 
        {xtype   : 'formrole', flex : 0.6},
        {xtype   : 'gridrolemenu', flex : 1.7},         
    ]
});