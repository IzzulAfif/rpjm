Ext.define('RPJM.module.MasterData.Skpd.view.form.FormSkpd', {
    extend      : 'Ext.form.Panel',
    title       : 'Form Skpd',
    iconCls     : 'icon-skpd',
    store       : 'RPJM.module.MasterData.Skpd.store.Skpd',
    requires    : ['RPJM.module.MasterData.Skpd.store.Skpd'],
    alias       : 'widget.formskpd',
    id          : 'formskpd',
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
                        name        : 'kode_skpd',
                        allowBlank  : true,
                        fieldLabel  : 'Kode Skpd',
                        emptyText   : 'Kode Skpd',
                        anchor      : '100%',
                        labelAlign  : 'top',
                        labelStyle  : 'padding : 3px; font-weight : bold;',
                        padding     : '0px 2px 0px 2px',
                    },
                    {
                        xtype       : 'textfield',
                        name        : 'skpd',
                        allowBlank  : true,
                        fieldLabel  : 'Skpd',
                        emptyText   : 'Skpd',
                        labelAlign  : 'top',
                        labelStyle  : 'padding : 3px; font-weight : bold;',
                        anchor      : '100%',
                        padding     : '0px 2px 0px 2px',
                    }
                ]
            }
        ];
        me.buttons = [
            {
                text    : 'Save Add',
                iconCls : 'icon-save',
                action  : 'save',
                disabled: createSkpd
            },
            {
                text    : 'Edit Skpd',
                iconCls : 'icon-edit',
                action  : 'update',
                disabled: updateSkpd
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