Ext.define('RPJM.module.MasterData.Agama.view.form.FormAgama', {
    extend      : 'Ext.form.Panel',
    title       : 'Form Agama',
    iconCls     : 'icon-agama',
    store       : 'RPJM.module.MasterData.Agama.store.Agama',
    requires    : ['RPJM.module.MasterData.Agama.store.Agama'],
    alias       : 'widget.formagama',
    id          : 'formagama',
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
                        name        : 'kode_agama',
                        allowBlank  : true,
                        fieldLabel  : 'Kode Agama',
                        emptyText   : 'Kode Agama',
                        anchor      : '100%',
                        padding     : '0px 2px 0px 2px',
                        labelAlign  : 'top',
                        labelStyle  : 'padding : 3px; font-weight : bold;',
                    },
                    {
                        xtype       : 'combobox',
                        name        : 'agama',
                        allowBlank  : true,
                        fieldLabel  : 'Agama',
                        emptyText   : 'Agama',
                        anchor      : '100%',
                        padding     : '0px 2px 0px 2px',
                        labelStyle  : 'padding : 3px; font-weight : bold;',
                        labelAlign  : 'top',
                    }
                ]
            }
        ];
        me.buttons = [
            {
                text    : 'Save Add',
                iconCls : 'icon-save',
                action  : 'save',
                disabled: createAgama
            },
            {
                text    : 'Edit Agama',
                iconCls : 'icon-edit',
                action  : 'update',
                disabled: updateAgama
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