Ext.define('RPJM.module.MasterData.Satuan.view.form.FormSatuan', {
    extend      : 'Ext.form.Panel',
    title       : 'Form Satuan',
    iconCls     : 'icon-satuan',
    store       : 'RPJM.module.MasterData.Satuan.store.Satuan',
    requires    : ['RPJM.module.MasterData.Satuan.store.Satuan'],
    alias       : 'widget.formsatuan',
    id          : 'formsatuan',
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
                        name        : 'kode_satuan',
                        allowBlank  : true,
                        fieldLabel  : 'Kode Satuan',
                        emptyText   : 'Kode Satuan',
                        anchor      : '100%',
                        labelAlign  : 'top',
                        labelStyle  : 'padding : 3px; font-weight : bold;',
                        padding     : '0px 2px 0px 2px',
                    },
                    {
                        xtype       : 'textfield',
                        name        : 'satuan',
                        allowBlank  : true,
                        fieldLabel  : 'Satuan',
                        emptyText   : 'Satuan',
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
                disabled: createSatuan
            },
            {
                text    : 'Edit Satuan',
                iconCls : 'icon-edit',
                action  : 'update',
                disabled: updateSatuan
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