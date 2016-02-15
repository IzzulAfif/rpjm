Ext.define('RPJM.module.MasterData.Kabupaten.view.form.FormKabupaten', {
    extend      : 'Ext.form.Panel',
    title       : 'Form Kabupaten',
    iconCls     : 'icon-kabupaten',
    store       : [
        'RPJM.module.MasterData.Kabupaten.store.Kabupaten'
    ],
    requires    : [
        'RPJM.module.MasterData.Kabupaten.store.Kabupaten'
    ],
    alias       : 'widget.formkabupaten',
    id          : 'formkabupaten',
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
                        xtype           : 'combobox',
                        name            : 'kode_prov',
                        id              : 'kode_prov',
                        allowBlank      : true,
                        fieldLabel      : 'Provinsi',
                        emptyText       : 'Provinsi',
                        store           : Ext.create('RPJM.module.MasterData.Provinsi.store.Provinsi'),
                        queryMode       : 'local',
                        typeAhead       : true,
                        editable        : true,
                        anchor          : '100%',
                        labelAlign      : 'top',
                        labelStyle      : 'padding : 3px; font-weight : bold;',
                        displayField    : 'provinsi',
                        valueField      : 'kode_prov',
                        pageSize        : 5,
                        padding         : '0px 2px 0px 2px',
                    },
                    {
                        xtype       : 'textfield',
                        name        : 'kode_kab',
                        id          : 'kode_kab',
                        allowBlank  : true,
                        fieldLabel  : 'Kode Kab',
                        emptyText   : 'Kode Kab',
                        anchor      : '100%',
                        labelAlign  : 'top',
                        labelStyle  : 'padding : 3px; font-weight : bold;',
                        padding     : '0px 2px 0px 2px'
                    },
                    {
                        xtype       : 'textfield',
                        name        : 'kabupaten',
                        id          : 'kabupaten',
                        allowBlank  : true,
                        fieldLabel  : 'Kabupaten',
                        emptyText   : 'Kabupaten',
                        anchor      : '100%',
                        labelAlign  : 'top',
                        labelStyle  : 'padding : 3px; font-weight : bold;',
                        padding     : '0px 2px 0px 2px'
                    }
                ]
            }
        ];
        me.buttons = [
            {
                text    : 'Save',
                iconCls : 'icon-save',
                action  : 'save',
                disabled: createKabupaten
            },
            {
                text    : 'Edit',
                iconCls : 'icon-edit',
                action  : 'update',
                disabled: updateKabupaten
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