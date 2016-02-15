Ext.define('RPJM.module.MasterData.Prioritas.view.form.FormPrioritas', {
    extend      : 'Ext.form.Panel',
    title       : 'Form Prioritas',
    iconCls     : 'icon-prioritas',
    //store       : 'RPJM.module.MasterData.Prioritas.store.Prioritas',
    //requires    : ['RPJM.module.MasterData.Prioritas.store.Prioritas'],
    alias       : 'widget.formprioritas',
    id          : 'formprioritas',
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
                        name        : 'kode_prioritas',
                        allowBlank  : true,
                        fieldLabel  : 'Kode Prioritas',
                        emptyText   : 'Kode Prioritas',
                        anchor      : '100%',
                        labelAlign  : 'top',
                        labelStyle  : 'padding : 3px; font-weight : bold;',
                        padding     : '0px 2px 0px 2px',
                    },
                    {
                        xtype       : 'textfield',
                        name        : 'prioritas',
                        allowBlank  : true,
                        fieldLabel  : 'Prioritas',
                        emptyText   : 'Prioritas',
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
                text    : 'Save Add',
                iconCls : 'icon-save',
                action  : 'save',
                disabled: createPrioritas
            },
            {
                text    : 'Edit Prioritas',
                iconCls : 'icon-edit',
                action  : 'update',
                disabled: updatePrioritas
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