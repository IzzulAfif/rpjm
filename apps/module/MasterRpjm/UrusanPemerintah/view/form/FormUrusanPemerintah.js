Ext.define('RPJM.module.MasterRpjm.UrusanPemerintah.view.form.FormUrusanPemerintah', {
    extend      : 'Ext.form.Panel',
    title       : 'Form UrusanPemerintah',
    iconCls     : 'icon-urusanpemerintah',
    store       : 'RPJM.module.MasterRpjm.UrusanPemerintah.store.UrusanPemerintah',
    requires    : ['RPJM.module.MasterRpjm.UrusanPemerintah.store.UrusanPemerintah'],
    alias       : 'widget.formurusanpemerintah',
    id          : 'formurusanpemerintah',
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
                        name        : 'kode_urusan_uu',
                        allowBlank  : true,
                        fieldLabel  : 'Kode Urusan',
                        emptyText   : 'Kode Urusan',
                        labelAlign  : 'top',
                        labelStyle  : 'padding : 3px; font-weight : bold;',
                        anchor      : '100%',
                        padding     : '0px 2px 0px 2px',
                    },
                    {
                        xtype       : 'textareafield',
                        name        : 'nama_urusan_uu',
                        allowBlank  : true,
                        fieldLabel  : 'Urusan',
                        emptyText   : 'Urusan Pemerintah',
                        labelAlign  : 'top',
                        labelStyle  : 'padding : 3px; font-weight : bold;',
                        anchor      : '100%',
                        padding     : '0px 2px 0px 2px',
                    },
                    {
                        xtype       : 'textfield',
                        name        : 'no_urusan_uu',
                        allowBlank  : true,
                        fieldLabel  : 'No Urusan',
                        emptyText   : 'No Urusan',
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
                text    : 'Save',
                iconCls : 'icon-save',
                action  : 'save',
                disabled: createUrusanPemerintah
            },
            {
                text    : 'Edit',
                iconCls : 'icon-edit',
                action  : 'update',
                disabled: updateUrusanPemerintah
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