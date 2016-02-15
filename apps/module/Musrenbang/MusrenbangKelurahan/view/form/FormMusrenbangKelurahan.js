Ext.define('RPJM.module.Musrenbang.MusrenbangKelurahan.view.form.FormMusrenbangKelurahan', {
    extend      : 'Ext.form.Panel',
    title       : 'Form MusrenbangKelurahan',
    iconCls     : 'icon-musrenbangkelurahan',
    store       : 'RPJM.module.Musrenbang.MusrenbangKelurahan.store.MusrenbangKelurahan',
    requires    : ['RPJM.module.Musrenbang.MusrenbangKelurahan.store.MusrenbangKelurahan'],
    alias       : 'widget.formmusrenbangkelurahan',
    id          : 'formmusrenbangkelurahan',
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
                        name        : 'kode_musrenbang',
                        hidden      : true,
                        fieldLabel  : 'kode_musrenbang',                    
                    },
                    {
                        xtype       : 'textareafield',
                        name        : 'kegiatan',
                        fieldLabel  : 'Kegiatan',
                        emptyText   : 'kegiatan',
                        labelAlign  : 'top',
                        labelStyle  : 'padding : 3px; font-weight : bold;',
                        anchor      : '100%',
                        padding     : '0px 2px 0px 2px',
                    },
                    {
                        xtype       : 'textfield',
                        name        : 'lokasi',
                        fieldLabel  : 'Lokasi',
                        emptyText   : 'lokasi',
                        labelAlign  : 'top',
                        labelStyle  : 'padding : 3px; font-weight : bold;',
                        anchor      : '100%',
                        padding     : '0px 2px 0px 2px',
                    },
                    {
                        xtype   : 'fieldcontainer',
                        layout  : 'hbox',
                        padding : '5px',
                        items   : [
                            {
                                xtype       : 'textfield',
                                name        : 'volume',
                                fieldLabel  : 'Volume',
                                emptyText   : 'volume',
                                labelAlign  : 'top',
                                labelStyle  : 'padding : 3px; font-weight : bold;',
                                anchor      : '100%',
                                padding     : '0px 2px 0px 2px',
                                flex        : 0.5
                            },
                            {
                                xtype           : 'combobox',
                                name            : 'kode_satuan',
                                id              : 'kode_satuan',
                                allowBlank      : true,
                                fieldLabel      : 'Satuan',
                                emptyText       : 'satuan',
                                store           : Ext.create('RPJM.module.MasterData.Satuan.store.Satuan'),
                                queryMode       : 'local',
                                typeAhead       : true,
                                editable        : true,
                                anchor          : '100%',
                                labelAlign      : 'top',
                                labelStyle      : 'padding : 3px; font-weight : bold;',
                                displayField    : 'satuan',
                                valueField      : 'kode_satuan',
                                padding         : '0px 2px 0px 2px',
                            },
                             {
                                xtype           : 'combobox',
                                name            : 'kode_prioritas',
                                id              : 'kode_prioritas',
                                allowBlank      : true,
                                fieldLabel      : 'Prioritas',
                                emptyText       : 'prioritas',
                                store           : Ext.create('RPJM.module.MasterData.Prioritas.store.Prioritas'),
                                queryMode       : 'local',
                                typeAhead       : true,
                                editable        : true,
                                anchor          : '100%',
                                labelAlign      : 'top',
                                labelStyle      : 'padding : 3px; font-weight : bold;',
                                displayField    : 'prioritas',
                                valueField      : 'kode_prioritas',
                                padding         : '0px 2px 0px 2px',
                                flex            : 1
                            },
                            {
                                xtype           : 'combobox',
                                name            : 'kode_lingkupbidang',
                                id              : 'kode_lingkupbidang',
                                allowBlank      : true,
                                fieldLabel      : 'Lingkup Bidang',
                                emptyText       : 'lingkupbidang',
                                store           : Ext.create('RPJM.module.MasterData.LingkupBidang.store.LingkupBidang'),
                                queryMode       : 'local',
                                typeAhead       : true,
                                editable        : true,
                                anchor          : '100%',
                                labelAlign      : 'top',
                                labelStyle      : 'padding : 3px; font-weight : bold;',
                                displayField    : 'lingkupbidang',
                                valueField      : 'kode_lingkupbidang',
                                padding         : '0px 2px 0px 2px',
                                flex            : 1
                            },
                        ]
                    },
                    {
                            xtype   : 'fieldcontainer',
                            layout  : 'hbox',
                            padding : '5px',
                            items   : [
                                {
                                    xtype       : 'textfield',
                                    name        : 'swadana',
                                    fieldLabel  : 'Swadana',
                                    emptyText   : 'swadana',
                                    labelAlign  : 'top',
                                    labelStyle  : 'padding : 3px; font-weight : bold;',
                                    anchor      : '100%',
                                    padding     : '0px 2px 0px 2px',
                                    flex        : 0.5
                                },
                                {
                                    xtype       : 'textfield',
                                    name        : 'apbd_kab',
                                    fieldLabel  : 'Apbd Kab',
                                    emptyText   : 'apbd_kab',
                                    labelAlign  : 'top',
                                    labelStyle  : 'padding : 3px; font-weight : bold;',
                                    anchor      : '100%',
                                    padding     : '0px 2px 0px 2px',
                                    flex        : 0.5
                                },
                                {
                                    xtype       : 'textfield',
                                    name        : 'apbd_prov',
                                    fieldLabel  : 'Apbd Provinsi',
                                    emptyText   : 'apbd_prov',
                                    labelAlign  : 'top',
                                    labelStyle  : 'padding : 3px; font-weight : bold;',
                                    anchor      : '100%',
                                    padding     : '0px 2px 0px 2px',
                                    flex        : 0.5
                                },
                                {
                                    xtype       : 'textfield',
                                    name        : 'apbn',
                                    fieldLabel  : 'APBN',
                                    emptyText   : 'apbn',
                                    labelAlign  : 'top',
                                    labelStyle  : 'padding : 3px; font-weight : bold;',
                                    anchor      : '100%',
                                    padding     : '0px 2px 0px 2px',
                                    flex        : 0.5
                                }
                            ]
                    },
                    {
                        xtype   : 'fieldcontainer',
                        layout  : 'hbox',
                        padding : '5px',
                        items   : [
                            {
                                xtype       : 'textfield',
                                name        : 'latitude',
                                fieldLabel  : 'Latitude',
                                emptyText   : 'latitude',
                                labelAlign  : 'top',
                                labelStyle  : 'padding : 3px; font-weight : bold;',
                                anchor      : '100%',
                                padding     : '0px 2px 0px 2px',
                                flex        : 0.5
                            },
                            {
                                xtype       : 'textfield',
                                name        : 'longitude',
                                fieldLabel  : 'Longitude',
                                emptyText   : 'longitude',
                                labelAlign  : 'top',
                                labelStyle  : 'padding : 3px; font-weight : bold;',
                                anchor      : '100%',
                                padding     : '0px 2px 0px 2px',
                                flex        : 0.5
                            },
                        ]
                    },
                    {
                        xtype       : 'textareafield',
                        name        : 'catatan_deskel',
                        fieldLabel  : 'Catatan',
                        emptyText   : 'catatan kelurahan',
                        labelAlign  : 'top',
                        labelStyle  : 'padding : 3px; font-weight : bold;',
                        anchor      : '100%',
                        padding     : '0px 2px 0px 2px',
                    },
                ]
            }
        ];
        me.buttons = [
            {
                text    : 'Save',
                iconCls : 'icon-save',
                action  : 'save',
                disabled: createMusrenbangKelurahan
            },
            {
                text    : 'Edit',
                iconCls : 'icon-edit',
                action  : 'update',
                disabled: updateMusrenbangKelurahan
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