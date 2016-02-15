Ext.define('RPJM.module.MasterData.Provinsi.view.form.FormProvinsi', {
    extend      : 'Ext.form.Panel',
    title       : 'Form Provinsi',
    iconCls     : 'icon-provinsi',
    store       : 'RPJM.module.MasterData.Provinsi.store.Provinsi',
    requires    : ['RPJM.module.MasterData.Provinsi.store.Provinsi'],
    alias       : 'widget.formprovinsi',
    id          : 'formprovinsi',
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
                        name        : 'kode_prov',
                        allowBlank  : true,
                        fieldLabel  : 'Kode Provinsi',
                        emptyText   : 'Kode Provinsi',
                        anchor      : '100%',
                        labelAlign  : 'top',
                        labelStyle  : 'padding : 3px; font-weight : bold;',
                        padding     : '0px 2px 0px 2px',
                    },
                    {
                        xtype       : 'textfield',
                        name        : 'provinsi',
                        allowBlank  : true,
                        fieldLabel  : 'Provinsi',
                        emptyText   : 'Provinsi',
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
                disabled: createProvinsi
            },
            {
                text    : 'Edit',
                iconCls : 'icon-edit',
                action  : 'update',
                disabled: updateProvinsi
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