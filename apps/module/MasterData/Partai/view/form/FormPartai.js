Ext.define('RPJM.module.MasterData.Partai.view.form.FormPartai', {
    extend      : 'Ext.form.Panel',
    title       : 'Form Partai',
    iconCls     : 'icon-partai',
    store       : 'RPJM.module.MasterData.Partai.store.Partai',
    requires    : ['RPJM.module.MasterData.Partai.store.Partai'],
    alias       : 'widget.formpartai',
    id          : 'formpartai',
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
                        name        : 'partai',
                        allowBlank  : true,
                        fieldLabel  : 'Nama Partai',
                        emptyText   : 'Nama Partai',
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
                disabled: createPartai
            },
            {
                text    : 'Edit Partai',
                iconCls : 'icon-edit',
                action  : 'update',
                disabled: updatePartai
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