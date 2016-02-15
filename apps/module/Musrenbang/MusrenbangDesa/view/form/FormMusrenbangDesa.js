Ext.define('RPJM.module.Musrenbang.MusrenbangDesa.view.form.FormMusrenbangDesa', {
    extend      : 'Ext.form.Panel',
    title       : 'Form MusrenbangDesa',
    iconCls     : 'icon-musrenbangdesa',
    store       : 'RPJM.module.Musrenbang.MusrenbangDesa.store.MusrenbangDesa',
    requires    : ['RPJM.module.Musrenbang.MusrenbangDesa.store.MusrenbangDesa'],
    alias       : 'widget.formmusrenbangdesa',
    id          : 'formmusrenbangdesa',
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
                                name            : 'kode_bidangdesa',
                                id              : 'kode_bidangdesa',
                                allowBlank      : true,
                                fieldLabel      : 'Bidang Desa',
                                emptyText       : 'bidangdesa',
                                store           : Ext.create('RPJM.module.MasterData.BidangDesa.store.BidangDesa'),
                                queryMode       : 'local',
                                typeAhead       : true,
                                editable        : true,
                                anchor          : '100%',
                                labelAlign      : 'top',
                                labelStyle      : 'padding : 3px; font-weight : bold;',
                                displayField    : 'bidangdesa',
                                valueField      : 'kode_bidangdesa',
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
                                    name        : 'apbd_des',
                                    fieldLabel  : 'Apbd Desa',
                                    emptyText   : 'apbd_des',
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
                        emptyText   : 'catatan desa',
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
                disabled: createMusrenbangDesa
            },
            {
                text    : 'Edit',
                iconCls : 'icon-edit',
                action  : 'update',
                disabled: updateMusrenbangDesa
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