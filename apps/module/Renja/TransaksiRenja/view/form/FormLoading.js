Ext.define('RPJM.module.Renja.TransaksiRenja.view.form.FormLoading', {
    extend      : 'Ext.form.Panel',
    title       : 'Form Kegiatan',
    iconCls     : 'icon-kegiatan',
    alias       : 'widget.formloading',
    id          : 'formloading',
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
                                store           : Ext.create('RPJM.module.Renja.TransaksiRenja.store.LookupKegiatan'),
                                anchor          : '100%',
                                padding         : '0px 2px 0px 2px',
                                displayField    : 'kegiatan',
                                valueField      : 'kode_kegiatanrpjm',
                                displayTpl      : Ext.create('Ext.XTemplate', '<tpl for=".">', '{kode_kegiatanrpjm} | {kegiatan}', '</tpl>'),
                                flex            : 1.5,
                                listConfig      : {
                                    getInnerTpl : function(){
                                        return '{kode_kegiatanrpjm} | {kegiatan}';
                                    }
                                },
                                listeners           : {
                                    'select' : function(combo, records, e, evt, opts){
                                        var form    = Ext.getCmp('formloading');
                                        var value   = form.getForm().findField('kode_kegiatanrpjm').getValue();
                                        Ext.Ajax.request({
                                            url             : BASE_URL + 'transaksirenja/c_transaksirenja/getMusrenbang',
                                            method          : 'POST',
                                            params          : {
                                                value : Ext.JSON.encode(value)
                                            },
                                            success         : function(response){
                                                var data    = Ext.JSON.decode(response.responseText);
                                                var storeMenu = Ext.getStore('RPJM.module.Renja.TransaksiRenja.store.TransaksiRenja');
                                                storeMenu.loadData([],false);
                                                storeMenu.add(data.data);
                                            }
                                        });
                                    }
                                }                                  
                            },
                            {
                                xtype           : 'button',
                                fieldLabel      : 'Kegiatan',
                                text            : 'Load Data',
                                iconCls         : 'icon-lookup',
                                action          : 'lookupKegiatan',
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
                        readOnly    : true
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
                        readOnly    : true
                    }
                ]
            }
        ];
        me.buttons = [
            {
                text    : 'Reset',
                iconCls : 'icon-refresh',
                action  : 'reset'
            }
        ];
        me.callParent(arguments);
    }  
});