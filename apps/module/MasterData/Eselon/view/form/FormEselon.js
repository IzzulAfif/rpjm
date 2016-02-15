Ext.define('RPJM.module.MasterData.Eselon.view.form.FormEselon', {
    extend      : 'Ext.form.Panel',
    title       : 'Form Eselon',
    iconCls     : 'icon-eselon',
    //store       : 'RPJM.module.MasterData.Eselon.store.Eselon',
    //requires    : ['RPJM.module.MasterData.Eselon.store.Eselon'],
    alias       : 'widget.formeselon',
    id          : 'formeselon',
    layout      : 'fit',
    border      : true,
    frame       : true,
    margins     : '3px',
    initComponent: function() {
        var me = this;
        me.items  = [
            {
                xtype       : 'form',
                bodyPadding : 5,
                frame       : true,
                items       : [
                    {
                        xtype       : 'textfield',
                        name        : 'id',
                        hidden      : true,
                        fieldLabel  : 'ID',                    
                    },
                    {
                        xtype       : 'textfield',
                        name        : 'kode_eselon',
                        allowBlank  : true,
                        fieldLabel  : 'Kode Eselon',
                        emptyText   : 'Kode Eselon',
                        anchor      : '100%',
                        padding     : '0px 2px 0px 2px',
                        labelStyle  : 'padding : 3px; font-weight : bold;',
                        labelAlign  : 'top',
                        anchor      : '100%',
                        flex         : 0.5
                    },
                    {
                        xtype       : 'textfield',
                        name        : 'eselon',
                        allowBlank  : true,
                        fieldLabel  : 'Eselon',
                        emptyText   : 'Eselon',
                        anchor      : '100%',
                        padding     : '0px 2px 0px 2px',
                        labelStyle  : 'padding : 3px; font-weight : bold;',
                        labelAlign  : 'top',
                        anchor      : '100%',
                        flex        : 0.5
                    }
                ]
            }
        ];
        me.buttons = [
            {
                text    : 'Save Add',
                iconCls : 'icon-save',
                action  : 'save',
                disabled: createEselon
            },
            {
                text    : 'Edit Eselon',
                iconCls : 'icon-edit',
                action  : 'update',
                disabled: updateEselon
            },
            {
                text    : 'Reset',
                iconCls : 'icon-refresh',
                action  : 'reset'
            }
        ];
        me.callParent(arguments);
    }  
});