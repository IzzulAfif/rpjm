Ext.define('RPJM.module.Renja.UsulanSkpd.view.form.FormUsulanSkpd', {
    extend      : 'Ext.form.Panel',
    title       : 'Form Usulan SKPD',
    iconCls     : 'icon-form',
    store       : 'RPJM.module.Renja.UsulanSkpd.store.UsulanSkpd',
    requires    : ['RPJM.module.Renja.UsulanSkpd.store.UsulanSkpd'],
    alias       : 'widget.formusulanskpd',
    id          : 'formusulanskpd',
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
                        fieldLabel  : 'Kode Musrenbang',                    
                    },
                    {
                        xtype       : 'textareafield',
                        name        : 'kegiatan',
                        fieldLabel  : 'Usulan',
                        emptyText   : 'usulan',
                        labelAlign  : 'top',
                        labelStyle  : 'padding : 3px; font-weight : bold;',
                        anchor      : '100%',
                        padding     : '0px 2px 0px 2px',
                    },
                    {
                        xtype       : 'textfield',
                        name        : 'lokasi',
                        fieldLabel  : 'Lokasi',
                        emptyText   : 'Lokasi',
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
                                emptyText   : 'Volume',
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
                                emptyText       : 'Satuan',
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
                        ]
                    },
                    {
                        xtype           : 'fieldset',
                        title           : 'SUMBER DANA APBD KAB',
                        collapsible     : true,
                        defaults        : {anchor: '100%'},
                        layout          : 'anchor',
                        items           :[
                            {
                                xtype   : 'fieldcontainer',
                                layout  : 'hbox',
                                items   : [
                                    {
                                        xtype       : 'textfield',
                                        name        : 'penerimaan_lain',
                                        allowBlank  : true,
                                        fieldLabel  : 'Penerimaan Lain',
                                        emptyText   : 'Penerimaan Lain',
                                        anchor      : '100%',
                                        labelAlign  : 'top',
                                        labelStyle  : 'padding : 3px; font-weight : bold;',
                                        padding     : '0px 2px 0px 2px',
                                        flex        : 1,
                                        maskRe      : /[0-9.]/,
                                        allowBlank  : true
                                    },
                                    {
                                        xtype       : 'textfield',
                                        name        : 'rsud',
                                        allowBlank  : true,
                                        fieldLabel  : 'RSUD',
                                        emptyText   : 'RSUD',
                                        anchor      : '100%',
                                        labelAlign  : 'top',
                                        labelStyle  : 'padding : 3px; font-weight : bold;',
                                        padding     : '0px 2px 0px 2px',
                                        flex        : 1,
                                        maskRe      : /[0-9.]/,
                                        allowBlank  : true
                                    },
                                    {
                                        xtype       : 'textfield',
                                        name        : 'kapitasi',
                                        allowBlank  : true,
                                        fieldLabel  : 'Kapitasi',
                                        emptyText   : 'Kapitasi',
                                        anchor      : '100%',
                                        labelAlign  : 'top',
                                        labelStyle  : 'padding : 3px; font-weight : bold;',
                                        padding     : '0px 2px 0px 2px',
                                        flex        : 1,
                                        maskRe      : /[0-9.]/,
                                        allowBlank  : true
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        xtype           : 'fieldset',
                        title           : 'SUMBER APBD PROV',
                        collapsible     : true,
                        defaults        : {anchor: '100%'},
                        layout          : 'anchor',
                        items           :[
                            {
                                xtype   : 'fieldcontainer',
                                layout  : 'hbox',
                                items   : [
                                    {
                                        xtype       : 'textfield',
                                        name        : 'bangub',
                                        allowBlank  : true,
                                        fieldLabel  : 'Bantuan Gubernur',
                                        emptyText   : 'Bantuan Gubernur',
                                        anchor      : '100%',
                                        labelAlign  : 'top',
                                        labelStyle  : 'padding : 3px; font-weight : bold;',
                                        padding     : '0px 2px 0px 2px',
                                        flex        : 1,
                                        maskRe      : /[0-9.]/,
                                        allowBlank  : true
                                    },
                                    {
                                        xtype       : 'textfield',
                                        name        : 'sektoral_apbd',
                                        allowBlank  : true,
                                        fieldLabel  : 'Sektoral APBD',
                                        emptyText   : 'Sektoral APBD',
                                        anchor      : '100%',
                                        labelAlign  : 'top',
                                        labelStyle  : 'padding : 3px; font-weight : bold;',
                                        padding     : '0px 2px 0px 2px',
                                        flex        : 1,
                                        maskRe      : /[0-9.]/,
                                        allowBlank  : true
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        xtype           : 'fieldset',
                        title           : 'SUMBER DANA APBN',
                        collapsible     : true,
                        defaults        : {anchor: '100%'},
                        layout          : 'anchor',
                        items           :[
                            {
                                xtype   : 'fieldcontainer',
                                layout  : 'hbox',
                                items   : [
                                    {
                                        xtype       : 'textfield',
                                        name        : 'dak',
                                        allowBlank  : true,
                                        fieldLabel  : 'DAK',
                                        emptyText   : 'DAK',
                                        anchor      : '100%',
                                        labelAlign  : 'top',
                                        labelStyle  : 'padding : 3px; font-weight : bold;',
                                        padding     : '0px 2px 0px 2px',
                                        flex        : 1,
                                        maskRe      : /[0-9.]/,
                                        allowBlank  : true
                                    },
                                    {
                                        xtype       : 'textfield',
                                        name        : 'dbhcht',
                                        allowBlank  : true,
                                        fieldLabel  : 'DBHCHT',
                                        emptyText   : 'DBHCHT',
                                        anchor      : '100%',
                                        labelAlign  : 'top',
                                        labelStyle  : 'padding : 3px; font-weight : bold;',
                                        padding     : '0px 2px 0px 2px',
                                        flex        : 1,
                                        maskRe      : /[0-9.]/,
                                        allowBlank  : true
                                    },
                                    {
                                        xtype       : 'textfield',
                                        name        : 'did',
                                        allowBlank  : true,
                                        fieldLabel  : 'DID',
                                        emptyText   : 'DID',
                                        anchor      : '100%',
                                        labelAlign  : 'top',
                                        labelStyle  : 'padding : 3px; font-weight : bold;',
                                        padding     : '0px 2px 0px 2px',
                                        flex        : 1,
                                        maskRe      : /[0-9.]/,
                                        allowBlank  : true
                                    }
                                ]
                            },
                            {
                                xtype   : 'fieldcontainer',
                                layout  : 'hbox',
                                items   : [
                                    {
                                        xtype       : 'textfield',
                                        name        : 'tp',
                                        allowBlank  : true,
                                        fieldLabel  : 'TP',
                                        emptyText   : 'TP',
                                        anchor      : '100%',
                                        labelAlign  : 'top',
                                        labelStyle  : 'padding : 3px; font-weight : bold;',
                                        padding     : '0px 2px 0px 2px',
                                        flex        : 1,
                                        maskRe      : /[0-9.]/,
                                        allowBlank  : true
                                    },
                                    {
                                        xtype       : 'textfield',
                                        name        : 'dekonsentrasi',
                                        allowBlank  : true,
                                        fieldLabel  : 'Dekonsentrasi',
                                        emptyText   : 'Dekonsentrasi',
                                        anchor      : '100%',
                                        labelAlign  : 'top',
                                        labelStyle  : 'padding : 3px; font-weight : bold;',
                                        padding     : '0px 2px 0px 2px',
                                        flex        : 1,
                                        maskRe      : /[0-9.]/,
                                        allowBlank  : true
                                    },
                                    {
                                        xtype       : 'textfield',
                                        name        : 'sektoral_apbn',
                                        allowBlank  : true,
                                        fieldLabel  : 'Sektoral APBN',
                                        emptyText   : 'Sektoral APBN',
                                        anchor      : '100%',
                                        labelAlign  : 'top',
                                        labelStyle  : 'padding : 3px; font-weight : bold;',
                                        padding     : '0px 2px 0px 2px',
                                        flex        : 1,
                                        maskRe      : /[0-9.]/,
                                        allowBlank  : true
                                    }
                                ]
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
                            {
                                xtype       : 'textfield',
                                name        : 'current_goal',
                                fieldLabel  : 'Target Capaian 2016',
                                emptyText   : 'Target Capaian Kinerja',
                                labelAlign  : 'top',
                                labelStyle  : 'padding : 3px; font-weight : bold;',
                                anchor      : '100%',
                                padding     : '0px 2px 0px 2px',
                            },
                            {
                                xtype       : 'textfield',
                                name        : 'next_goal',
                                fieldLabel  : 'Target Capaian 2017',
                                emptyText   : 'Target Capaian Kinerja',
                                labelAlign  : 'top',
                                labelStyle  : 'padding : 3px; font-weight : bold;',
                                anchor      : '100%',
                                padding     : '0px 2px 0px 2px',
                            },
                        ]
                    },
                    {
                        xtype       : 'textfield',
                        name        : 'next_anggaran',
                        fieldLabel  : 'Anggaran',
                        emptyText   : 'Anggaran Selanjutnya',
                        labelAlign  : 'top',
                        labelStyle  : 'padding : 3px; font-weight : bold;',
                        anchor      : '100%',
                        padding     : '0px 2px 0px 2px',
                        flex        : 0.5
                    },
                ]
            }
        ];
        me.buttons = [
            {
                text    : 'Save',
                iconCls : 'icon-save',
                action  : 'save',
                disabled: createUsulanSkpd
            },
            {
                text    : 'Edit',
                iconCls : 'icon-edit',
                action  : 'update',
                disabled: updateUsulanSkpd
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