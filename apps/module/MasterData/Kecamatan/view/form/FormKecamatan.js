Ext.define('RPJM.module.MasterData.Kecamatan.view.form.FormKecamatan', {
    extend      : 'Ext.form.Panel',
    title       : 'Form Kecamatan',
    iconCls     : 'icon-kecamatan',
    store       : 'RPJM.module.MasterData.Kecamatan.store.Kecamatan',
    requires    : ['RPJM.module.MasterData.Kecamatan.store.Kecamatan'],
    alias       : 'widget.formkecamatan',
    id          : 'formkecamatan',
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
                        name            : 'kode_kab',
                        allowBlank      : true,
                        fieldLabel      : 'Kabupaten',
                        store           : Ext.create('RPJM.module.MasterData.Kabupaten.store.Kabupaten').load(),
                        displayField    : 'kabupaten',
                        valueField      : 'kode_kab',
                        emptyText       : 'Kabupaten',
                        anchor          : '100%',
                        queryMode       : 'local',
                        pageSize        : 5,
                        padding         : '0px 2px 0px 2px',
                    },
                    {
                        xtype           : 'textfield',
                        name            : 'kode_kec',
                        allowBlank      : true,
                        fieldLabel      : 'Kode',
                        emptyText       : 'Kode',
                        anchor          : '100%',
                        padding         : '0px 2px 0px 2px',
                    },
                    {
                        xtype           : 'textfield',
                        name            : 'kecamatan',
                        allowBlank      : true,
                        fieldLabel      : 'Kecamatan',
                        emptyText       : 'Kecamatan',
                        anchor          : '100%',
                        padding         : '0px 2px 0px 2px',
                    }
                ]
            }
        ];
        me.buttons = [
            {
                text    : 'Save',
                iconCls : 'icon-save',
                action  : 'save',
                disabled: createKecamatan
            },
            {
                text    : 'Edit',
                iconCls : 'icon-edit',
                action  : 'update',
                disabled: updateKecamatan
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