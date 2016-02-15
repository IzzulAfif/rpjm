Ext.define('RPJM.module.MasterRpjm.Kegiatan.view.form.FormKegiatan', {
    extend      : 'Ext.form.Panel',
    title       : 'Form Kegiatan',
    iconCls     : 'icon-kegiatan',
    store       : 'RPJM.module.MasterRpjm.Kegiatan.store.Kegiatan',
    requires    : ['RPJM.module.MasterRpjm.Kegiatan.store.Kegiatan'],
    alias       : 'widget.formkegiatan',
    id          : 'formkegiatan',
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
                                name            : 'kode_programrpjm',
                                allowBlank      : true,
                                emptyText       : 'Program',
                                labelAlign      : 'top',
                                labelStyle      : 'padding : 3px; font-weight : bold;',
                                store           : Ext.create('RPJM.module.MasterRpjm.Kegiatan.store.LookupProgram'),
                                anchor          : '100%',
                                padding         : '0px 2px 0px 2px',
                                displayField    : 'programrpjm',
                                valueField      : 'kode_programrpjm',
                                displayTpl      : Ext.create('Ext.XTemplate', '<tpl for=".">', '{kode_programrpjm} | {programrpjm}', '</tpl>'),
                                flex            : 1.5,
                                listConfig      : {
                                    getInnerTpl : function(){
                                        return '{kode_programrpjm} | {programrpjm}';
                                    }
                                }                                  
                            },
                            {
                                xtype           : 'button',
                                fieldLabel      : 'Program',
                                text            : 'Load Program',
                                iconCls         : 'icon-lookup',
                                action          : 'lookupProgram',
                                flex            : 0.5
                            }
                        ]
                    },
                    {
                        xtype       : 'textfield',
                        name        : 'kode_kegiatanrpjm',
                        allowBlank  : true,
                        fieldLabel  : 'Kode Kegiatan',
                        emptyText   : 'Kode Kegiatan',
                        anchor      : '100%',
                        labelAlign  : 'top',
                        labelStyle  : 'padding : 3px; font-weight : bold;',
                        padding     : '0px 2px 0px 2px',
                        hidden      : true
                    },
                    {
                        xtype       : 'textareafield',
                        name        : 'kegiatan',
                        allowBlank  : true,
                        fieldLabel  : 'Kegiatan',
                        emptyText   : 'Kegiatan',
                        labelAlign  : 'top',
                        labelStyle  : 'padding : 3px; font-weight : bold;',
                        anchor      : '100%',
                        padding     : '0px 2px 0px 2px',
                    },
                    {
                        xtype       : 'textfield',
                        name        : 'no_urut',
                        allowBlank  : true,
                        fieldLabel  : 'No Urut',
                        emptyText   : 'No Urut',
                        labelAlign  : 'top',
                        labelStyle  : 'padding : 3px; font-weight : bold;',
                        anchor      : '100%',
                        padding     : '0px 2px 0px 2px',
                    },
                    {
                        xtype   : 'fieldcontainer',
                        layout  : 'hbox',
                        items   : [
                            {
                                xtype           : 'combobox',
                                name            : 'kode_unitkerja',
                                allowBlank      : true,
                                emptyText       : 'Unitkerja',
                                labelAlign      : 'top',
                                labelStyle      : 'padding : 3px; font-weight : bold;',
                                store           : Ext.create('RPJM.module.MasterRpjm.Kegiatan.store.LookupUnitkerja'),
                                anchor          : '100%',
                                padding         : '0px 2px 0px 2px',
                                displayField    : 'unitkerja',
                                valueField      : 'kode_unitkerja',
                                displayTpl      : Ext.create('Ext.XTemplate', '<tpl for=".">', '{kode_unitkerja} | {unitkerja}', '</tpl>'),
                                flex            : 1.5,
                                listConfig      : {
                                    getInnerTpl : function(){
                                        return '{kode_unitkerja} | {unitkerja}';
                                    }
                                }                                  
                            },
                            {
                                xtype           : 'button',
                                fieldLabel      : 'Unitkerja',
                                text            : 'Load Unitkerja',
                                iconCls         : 'icon-lookup',
                                action          : 'lookupUnitkerja',
                                flex            : 0.5
                            }
                        ]
                    },
                ]
            }
        ];
        me.buttons = [
            {
                text    : 'Save',
                iconCls : 'icon-save',
                action  : 'save',
                disabled: createKegiatan
            },
            {
                text    : 'Edit',
                iconCls : 'icon-edit',
                action  : 'update',
                disabled: updateKegiatan
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