Ext.define('RPJM.module.MasterData.Kabupaten.controller.Kabupaten', {
    extend  : 'Ext.app.Controller',
    CheckedDataEdit: [],

    init: function() {
        var me = this;
        me.getStore('RPJM.module.MasterData.Kabupaten.store.Kabupaten').load();
        me.control({
            "gridkabupaten  button[action=delete]"          : {
                click: me.del
            }, 
            "#gridkabupaten"                                 : {
               select: me.viewKabupaten
            },            
            "formkabupaten  button[action=save]"        : {
                click: me.save
            }, 
            "formkabupaten  button[action=reset]"       : {
                click: me.resetPanel
            },
            "gridkabupatenorg"                          : {
               itemdblclick: me.addorg
            },
            "gridkabupaten textfield[action=search]"    : {
               keypress: me.search
            },
            "gridkabupaten button[action=print]"        : {
               click: me.print
            },
            "formkabupaten button[action=update]"       : {
               click: me.update
            }
        });
        me.callParent(arguments);
    },
    reloadStore: function(){
        var me = this;
        me.getStore('RPJM.module.MasterData.Kabupaten.store.Kabupaten').reload();
    },
    viewKabupaten: function(grid, record, item, index, e, eOpts){
        var id = record.data.id;
        var form = Ext.getCmp('formkabupaten');
        var grid = Ext.getCmp('gridkabupaten');
        form.getForm().setValues(record.data);
    },

    del: function(gridPanel, selected){
        var me = this;
        me.CheckedDataEdit = new Array();
        var record = gridPanel.up('grid').getSelectionModel().getSelection();
        Ext.each(record, function(selected){
            me.CheckedDataEdit.push({
                id : selected.data.id
            });
        }); 

        //Parameter Primary Key 
        var form      = Ext.getCmp('formkabupaten').getForm();
        var kode_kab  = form.findField('kode_kab').getValue();

        Ext.MessageBox.show({
            title           : 'Konfirmasi',
            msg             : 'Anda yakin akan menghapus data yang terseleksi?',
            buttons         : Ext.Msg.YESNO,
            icon            : Ext.MessageBox.WARNING,
            width           : 450,
            fn              : function(btn, evtObj){
                if (btn == 'yes') {
                    Ext.Ajax.request({
                        url             : BASE_URL + 'kabupaten/c_kabupaten/delKabupaten',
                        method          : 'POST',
                        params          : {
                            kode_kab : kode_kab
                        },
                        success         : function(response){
                            var data    = Ext.JSON.decode(response.responseText);
                            // console.log(data.msg);
                            if(data.msg === 1){
                                Ext.MessageBox.show({
                                    title           : 'Informasi',
                                    msg             : 'Data Digunakan di Table Lain',
                                    icon            : Ext.MessageBox.INFO,
                                    buttons         : Ext.MessageBox.OK
                                });
                                var form    = Ext.getCmp('formkabupaten');
                                var grid    = Ext.getCmp('gridkabupaten');
                                form.getForm().reset();
                                me.resetPanel();
                                grid.getSelectionModel().deselectAll();
                                Ext.ComponentQuery.query('#gridkabupaten')[0].getStore('RPJM.module.MasterData.Kabupaten.store.Kabupaten').reload();                             
                            } else {
                                var form    = Ext.getCmp('formkabupaten');
                                var grid    = Ext.getCmp('gridkabupaten');
                                form.getForm().reset();
                                me.resetPanel();
                                grid.getSelectionModel().deselectAll();
                                Ext.ComponentQuery.query('#gridkabupaten')[0].getStore('RPJM.module.MasterData.Kabupaten.store.Kabupaten').reload(); 
                            }
                        }
                    });
                }
            }
        })
    },

    resetPanel: function(btn, gridPanel, selected) {//Reset Form
        var me = this;
        var form = Ext.getCmp('formkabupaten');
        var grid = Ext.getCmp('gridkabupaten');
        form.getForm().reset();
        grid.getSelectionModel().clearSelections();
        me.getStore('RPJM.module.MasterData.Kabupaten.store.Kabupaten').reload();

    },

    save: function(btn, evt, opts){
        var me         = this;
        var form       = btn.up('formkabupaten').getForm();
        var kode_prov  = form.findField('kode_prov').getValue();
        var kode_kab   = form.findField('kode_kab').getValue();
        var kabupaten  = form.findField('kabupaten').getValue();

        Ext.Ajax.request({
            url     : BASE_URL + 'kabupaten/c_kabupaten/saveKabupaten',
            method  : 'POST',
            params  : {
                kode_prov   : kode_prov,
                kode_kab    : kode_kab,
                kabupaten   : kabupaten
            },
            success : function(response){
                var data    = Ext.JSON.decode(response.responseText);
                if(data.total === 1){
                    Ext.MessageBox.show({
                        title           : 'Informasi',
                        msg             : 'Data Telah Tersimpan',
                        icon            : Ext.MessageBox.INFO,
                        buttons         : Ext.MessageBox.OK
                    });
                    var form    = Ext.getCmp('formkabupaten');
                    var grid    = Ext.getCmp('gridkabupaten');
                    form.getForm().reset();
                    me.resetPanel();
                    grid.getSelectionModel().deselectAll();
                    Ext.ComponentQuery.query('#gridkabupaten')[0].getStore('RPJM.module.MasterData.Kabupaten.store.Kabupaten').reload(); 
                }else if (data.total === 2){
                    Ext.MessageBox.show({
                        title           : 'Error',
                        msg             : 'Kabupaten Telah Terdaftar - Silahkan Gunakan Kabupaten Lain',
                        icon            : Ext.MessageBox.ERROR,
                        buttons         : Ext.MessageBox.OK
                    });
                } else {
                    Ext.MessageBox.show({
                        title           : 'Error',
                        msg             : 'Pengisian Data Salah',
                        icon            : Ext.MessageBox.ERROR,
                        buttons         : Ext.MessageBox.OK
                    }); 
                    var form    = Ext.getCmp('formkabupaten');
                    var grid    = Ext.getCmp('gridkabupaten');
                    form.getForm().reset();
                    me.resetPanel();
                    grid.getSelectionModel().deselectAll();
                    Ext.ComponentQuery.query('#gridkabupaten')[0].getStore('RPJM.module.MasterData.Kabupaten.store.Kabupaten').reload();                   
                }
            }
        });   
    },
    
    update: function(btn, evt, opts){
        var me             = this;
        var form           = btn.up('form').getForm();
        var id             = form.findField('id').getValue();
        var kode_prov  = form.findField('kode_prov').getValue();
        var kode_kab   = form.findField('kode_kab').getValue();
        var kabupaten   = form.findField('kabupaten').getValue();;
        Ext.MessageBox.show({
            title           : 'Konfirmasi',
            msg             : 'Anda yakin akan merubah data?',
            buttons         : Ext.Msg.YESNO,
            icon            : Ext.MessageBox.WARNING,
            width           : 450,
            fn              : function(btn, evtObj){
                if (btn == 'yes') {
                    Ext.Ajax.request({
                        url     : BASE_URL + 'kabupaten/c_kabupaten/editKabupaten',
                        method  : 'POST',
                        params  : {
                            id          : id,
                            kode_prov   : kode_prov,
                            kode_kab    : kode_kab,
                            kabupaten   : kabupaten
                        },
                        success : function(response){
                            var data    = Ext.JSON.decode(response.responseText);
                            // console.log(data.total);
                            if(data.total === 1){
                                Ext.MessageBox.show({
                                    title           : 'Informasi',
                                    msg             : 'Data Telah Dirubah',
                                    icon            : Ext.MessageBox.INFO,
                                    buttons         : Ext.MessageBox.OK
                                });
                                var form    = Ext.getCmp('formkabupaten');
                                var grid    = Ext.getCmp('gridkabupaten');
                                form.getForm().reset();
                                me.resetPanel();
                                grid.getSelectionModel().deselectAll();
                                Ext.ComponentQuery.query('#gridkabupaten')[0].getStore('RPJM.module.MasterData.Kabupaten.store.Kabupaten').reload(); 
                            }else if (data.total === 2){
                                Ext.MessageBox.show({
                                    title           : 'Error',
                                    msg             : 'Kabupaten Telah Terdaftar - Silahkan Gunakan Kabupaten Lain',
                                    icon            : Ext.MessageBox.ERROR,
                                    buttons         : Ext.MessageBox.OK
                                });
                            } else {
                                Ext.MessageBox.show({
                                    title           : 'Error',
                                    msg             : 'Pengisian Data Salah',
                                    icon            : Ext.MessageBox.ERROR,
                                    buttons         : Ext.MessageBox.OK
                                }); 
                                var form    = Ext.getCmp('formkabupaten');
                                var grid    = Ext.getCmp('gridkabupaten');
                                form.getForm().reset();
                                me.resetPanel();
                                grid.getSelectionModel().deselectAll();
                                Ext.ComponentQuery.query('#gridkabupaten')[0].getStore('RPJM.module.MasterData.Kabupaten.store.Kabupaten').reload();                   
                            }
                        }
                    });
                }
            }
        });      
    },
    search: function(field, evt, opts){
        var value       = field.getValue();
            Ext.Ajax.request({
                url     : BASE_URL + 'kabupaten/c_kabupaten/searchKabupaten',
                method  : 'POST',
                params  : {name : value},
                success : function(response){
                    var data    = Ext.JSON.decode(response.responseText);
                    if(data.success){
                            var storeApproval = Ext.getStore('RPJM.module.MasterData.Kabupaten.store.Kabupaten');
                            storeApproval.removeAll();
                            storeApproval.add(data.data);
                    }
                }
            });
    },

    print : function(){
        window.location = BASE_URL + 'kabupaten/c_kabupaten/printKabupaten/';
    },

    loadProvinsi : function(combo, records){
        var comboProvinsi = Ext.ComponentQuery.query('formkabupaten #kode_prov')[0];
        comboProvinsi.setDisabled(true);
        comboProvinsi.setValue('');
        comboProvinsi.store.removeAll();

        var form            = Ext.getCmp('formkabupaten').getForm();
        Ext.Ajax.request({
            url     : BASE_URL + 'kabupaten/c_kabupaten/lookupProvinsi',
            method  : 'POST',
        });
        comboProvinsi.setDisabled(false);
    },
})
