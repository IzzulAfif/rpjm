Ext.define('RPJM.module.MasterData.Jabatan.view.form.FormJabatan', {
    extend      : 'Ext.form.Panel',
    title       : 'Form Jabatan',
    iconCls     : 'icon-jabatan',
    store       : 'RPJM.module.MasterData.Jabatan.store.Jabatan',
    requires    : ['RPJM.module.MasterData.Jabatan.store.Jabatan'],
    alias       : 'widget.formjabatan',
    id          : 'formjabatan',
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
                        name        : 'kode_jabatan',
                        allowBlank  : true,
                        fieldLabel  : 'Kode Jabatan',
                        emptyText   : 'Kode Jabatan',
                        anchor      : '100%',
                        labelAlign  : 'top',
                        labelStyle  : 'padding : 3px; font-weight : bold;',
                        padding     : '0px 2px 0px 2px',
                    },
                    {
                        xtype       : 'textfield',
                        name        : 'jabatan',
                        allowBlank  : true,
                        fieldLabel  : 'Jabatan',
                        emptyText   : 'Jabatan',
                        anchor      : '100%',
                        labelAlign  : 'top',
                        labelStyle  : 'padding : 3px; font-weight : bold;',
                        padding     : '0px 2px 0px 2px',
                    }
                ]
            }
        ];
        me.buttons = [
            {
                text    : 'Save',
                iconCls : 'icon-save',
                action  : 'save',
                disabled: createJabatan
            },
            {
                text    : 'Edit',
                iconCls : 'icon-edit',
                action  : 'update',
                disabled: updateJabatan
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