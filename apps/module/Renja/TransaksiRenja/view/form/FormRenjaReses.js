Ext.define('RPJM.module.Renja.TransaksiRenja.view.form.FormRenjaReses', {
    extend      : 'Ext.form.Panel',
    title       : 'Form Usulan Reses',
    alias       : 'widget.formrenjareses',
    id          : 'formrenjareses',
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
                        xtype   : 'fieldcontainer',
                        layout  : 'hbox',
                        items   : [
                            {
                                xtype           : 'combobox',
                                name            : 'kode_kegiatanrpjm',
                                allowBlank      : true,
                                emptyText       : 'Kegiatan',
                                labelAlign      : 'top',
                                labelStyle      : 'padding : 3px; font-weight : bold;',
                                store           : Ext.create('RPJM.module.Renja.TransaksiRenja.store.LookupKegiatanReses'),
                                anchor          : '100%',
                                padding         : '0px 2px 0px 2px',
                                displayField    : 'kegiatan',
                                valueField      : 'kode_kegiatanrpjm',
                                displayTpl      : Ext.create('Ext.XTemplate', '<tpl for=".">', '{kode_kegiatanrpjm} | {kegiatan}', '</tpl>'),
                                flex            : 1.7,
                                listConfig      : {
                                    getInnerTpl : function(){
                                        return '{kode_kegiatanrpjm} | {kegiatan}';
                                    }
                                }                                  
                            },
                            {
                                xtype           : 'button',
                                fieldLabel      : 'Kegiatan',
                                text            : 'Load Data',
                                iconCls         : 'icon-lookup',
                                action          : 'loadKegiatanReses',
                                flex            : 0.3
                            }
                        ]
                    },
                    {
                        xtype   : 'fieldcontainer',
                        layout  : 'hbox',
                        items   : [
                            {
                                xtype           : 'combobox',
                                name            : 'kode_musrenbang',
                                allowBlank      : true,
                                emptyText       : 'Usulan Reses',
                                labelAlign      : 'top',
                                labelStyle      : 'padding : 3px; font-weight : bold;',
                                store           : Ext.create('RPJM.module.Renja.TransaksiRenja.store.LookupUsulanReses'),
                                anchor          : '100%',
                                padding         : '0px 2px 0px 2px',
                                displayField    : 'kode_musrenbang',
                                valueField      : 'kode_musrenbang',
                                displayTpl      : Ext.create('Ext.XTemplate', '<tpl for=".">', '{kode_musrenbang} | {kegiatan}', '</tpl>'),
                                flex            : 1.7,
                                listConfig      : {
                                    getInnerTpl : function(){
                                        return '{kode_musrenbang} | {kegiatan}';
                                    }
                                }                                  
                            },
                            {
                                xtype           : 'button',
                                fieldLabel      : 'Usulan Reses',
                                text            : 'Load Data',
                                iconCls         : 'icon-lookup',
                                action          : 'loadUsulanReses',
                                flex            : 0.3
                            }
                        ]
                    },
                    {
                        xtype           : 'fieldset',
                        title           : 'DATA MUSRENBANG',
                        collapsible     : true,
                        defaults        : {anchor: '100%'},
                        layout          : 'anchor',
                        items           :[
                            {
                                xtype       : 'textfield',
                                name        : 'lokasi',
                                allowBlank  : true,
                                fieldLabel  : 'Lokasi',
                                emptyText   : 'Lokasi',
                                anchor      : '100%',
                                labelAlign  : 'top',
                                labelStyle  : 'padding : 3px; font-weight : bold;',
                                padding     : '0px 2px 0px 2px',
                                flex        : 1,
                                readOnly    : true,
                            },
                            {
                                xtype   : 'fieldcontainer',
                                layout  : 'hbox',
                                items   : [
                                    
                                    {
                                        xtype       : 'textfield',
                                        name        : 'volume',
                                        allowBlank  : true,
                                        fieldLabel  : 'Volume',
                                        emptyText   : 'Volume',
                                        anchor      : '100%',
                                        labelAlign  : 'top',
                                        labelStyle  : 'padding : 3px; font-weight : bold;',
                                        padding     : '0px 2px 0px 2px',
                                        flex        : 1,
                                        readOnly    : true,
                                    },
                                    {
                                        xtype       : 'textfield',
                                        name        : 'satuan',
                                        allowBlank  : true,
                                        fieldLabel  : 'Satuan',
                                        emptyText   : 'Satuan',
                                        anchor      : '100%',
                                        labelAlign  : 'top',
                                        labelStyle  : 'padding : 3px; font-weight : bold;',
                                        padding     : '0px 2px 0px 2px',
                                        flex        : 1,
                                        readOnly    : true,
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
                                        flex        : 1,
                                        readOnly    : true,
                                    },
                                    {
                                        xtype       : 'textfield',
                                        name        : 'lingkupbidang',
                                        allowBlank  : true,
                                        fieldLabel  : 'Lingkup Bidang',
                                        emptyText   : 'Lingkup Bidang',
                                        anchor      : '100%',
                                        labelAlign  : 'top',
                                        labelStyle  : 'padding : 3px; font-weight : bold;',
                                        padding     : '0px 2px 0px 2px',
                                        flex        : 1,
                                        readOnly    : true,
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
                                        name        : 'swadana',
                                        fieldLabel  : 'Swadana',
                                        emptyText   : 'swadana',
                                        labelAlign  : 'top',
                                        labelStyle  : 'padding : 3px; font-weight : bold;',
                                        anchor      : '100%',
                                        padding     : '0px 2px 0px 2px',
                                        flex        : 0.5,
                                        readOnly    : true,
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
                                        flex        : 0.5,
                                        readOnly    : true,
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
                                        flex        : 0.5,
                                        readOnly    : true,
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
                                        flex        : 0.5,
                                        readOnly    : true,
                                    }
                                ]
                            },
                        ]
                    },
                    {
                        xtype           : 'fieldset',
                        title           : 'APBD KAB',
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
                                        maskRe      : /[0-9.]/
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
                                        maskRe      : /[0-9.]/
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
                                        maskRe      : /[0-9.]/
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        xtype           : 'fieldset',
                        title           : 'APBD PROV',
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
                                        maskRe      : /[0-9.]/
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
                                        maskRe      : /[0-9.]/
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        xtype           : 'fieldset',
                        title           : 'APBN',
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
                                        maskRe      : /[0-9.]/
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
                                        maskRe      : /[0-9.]/
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
                                        maskRe      : /[0-9.]/
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
                                        maskRe      : /[0-9.]/
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
                                        maskRe      : /[0-9.]/
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
                                        maskRe      : /[0-9.]/
                                    }
                                ]
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
                    },
                ]
            }
        ];
        me.buttons = [
            {
                text    : 'Save',
                iconCls : 'icon-save',
                action  : 'saveRenjaReses'
            },
            {
                text    : 'Reset',
                iconCls : 'icon-refresh',
                action  : 'resetRenjaReses'
            }
        ];
        me.callParent(arguments);
    }  
});