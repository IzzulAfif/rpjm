Ext.define('RPJM.module.MasterData.Satuan.controller.Satuan', {
    extend  : 'Ext.app.Controller',
    CheckedDataEdit: [],

    init: function() {
        var me = this;
        me.getStore('RPJM.module.MasterData.Satuan.store.Satuan').load();
        me.control({
            "gridsatuan  button[action=delete]"          : {
                click: me.del
            }, 
            "#gridsatuan"                                 : {
               select: me.viewSatuan
            },            
            "formsatuan  button[action=save]"        : {
                click: me.save
            }, 
            "formsatuan  button[action=reset]"       : {
                click: me.resetPanel
            },
            "gridsatuanorg"                          : {
               itemdblclick: me.addorg
            },
            "gridsatuan textfield[action=search]"    : {
               keypress: me.search
            },
            "gridsatuan button[action=print]"        : {
               click: me.print
            },
            "formsatuan button[action=update]"       : {
               click: me.update
            }
        });
        me.callParent(arguments);
    },

    reloadStore: function(){
        var me = this;
        me.getStore('RPJM.module.MasterData.Satuan.store.Satuan').reload();
    },

    viewSatuan: function(grid, record, item, index, e, eOpts){
        var id = record.data.id;
        var form = Ext.getCmp('formsatuan');
        var grid = Ext.getCmp('gridsatuan');
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
        var form       = Ext.getCmp('formsatuan').getForm();
        var kode_prov  = form.findField('kode_prov').getValue();

        Ext.MessageBox.show({
            title           : 'Konfirmasi',
            msg             : 'Anda yakin akan menghapus data yang terseleksi?',
            buttons         : Ext.Msg.YESNO,
            icon            : Ext.MessageBox.WARNING,
            width           : 450,
            fn              : function(btn, evtObj){
                if (btn == 'yes') {
                    Ext.Ajax.request({
                        url             : BASE_URL + 'satuan/c_satuan/delSatuan',
                        method          : 'POST',
                        params          : {
                            kode_prov   : kode_prov
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
                                var form    = Ext.getCmp('formsatuan');
                                var grid    = Ext.getCmp('gridsatuan');
                                form.getForm().reset();
                                me.resetPanel();
                                grid.getSelectionModel().deselectAll();
                                Ext.ComponentQuery.query('#gridsatuan')[0].getStore('RPJM.module.MasterData.Satuan.store.Satuan').reload();                             
                            } else {
                                var form    = Ext.getCmp('formsatuan');
                                var grid    = Ext.getCmp('gridsatuan');
                                form.getForm().reset();
                                me.resetPanel();
                                grid.getSelectionModel().deselectAll();
                                Ext.ComponentQuery.query('#gridsatuan')[0].getStore('RPJM.module.MasterData.Satuan.store.Satuan').reload(); 
                            }
                        }
                    });
                }
            }
        })
    },

    resetPanel: function(btn, gridPanel, selected) {//Reset Form
        var me = this;
        var form = Ext.getCmp('formsatuan');
        var grid = Ext.getCmp('gridsatuan');
        form.getForm().reset();

        grid.getSelectionModel().clearSelections();
        me.getStore('RPJM.module.MasterData.Satuan.store.Satuan').reload();

    },

    save: function(btn, evt, opts){
        var me         = this;
        var form       = btn.up('form').getForm();
        var kode_prov  = form.findField('kode_prov').getValue();
        var satuan   = form.findField('satuan').getValue();

        Ext.Ajax.request({
            url     : BASE_URL + 'satuan/c_satuan/saveSatuan',
            method  : 'POST',
            params  : {
                kode_prov   : kode_prov,
                satuan    : satuan
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
                    var form    = Ext.getCmp('formsatuan');
                    var grid    = Ext.getCmp('gridsatuan');
                    form.getForm().reset();
                    me.resetPanel();
                    grid.getSelectionModel().deselectAll();
                    Ext.ComponentQuery.query('#gridsatuan')[0].getStore('RPJM.module.MasterData.Satuan.store.Satuan').reload(); 
                }else if (data.total === 2){
                    Ext.MessageBox.show({
                        title           : 'Error',
                        msg             : 'Satuan Telah Terdaftar - Silahkan Gunakan Satuan Lain',
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
                    var form    = Ext.getCmp('formsatuan');
                    var grid    = Ext.getCmp('gridsatuan');
                    form.getForm().reset();
                    me.resetPanel();
                    grid.getSelectionModel().deselectAll();
                    Ext.ComponentQuery.query('#gridsatuan')[0].getStore('RPJM.module.MasterData.Satuan.store.Satuan').reload();                   
                }
            }
        });   
    },

    update: function(btn, evt, opts){
        var me             = this;
        var form           = btn.up('form').getForm();
        var id             = form.findField('id').getValue();
        var kode_prov  = form.findField('kode_prov').getValue();
        var satuan   = form.findField('satuan').getValue();
        Ext.MessageBox.show({
            title           : 'Konfirmasi',
            msg             : 'Anda yakin akan merubah data?',
            buttons         : Ext.Msg.YESNO,
            icon            : Ext.MessageBox.WARNING,
            width           : 450,
            fn              : function(btn, evtObj){
                if (btn == 'yes') {
                    Ext.Ajax.request({
                        url     : BASE_URL + 'satuan/c_satuan/editSatuan',
                        method  : 'POST',
                        params  : {
                            id          : id,
                            kode_prov   : kode_prov,
                            satuan    : satuan
                        },
                        success : function(response){
                            var data    = Ext.JSON.decode(response.responseText);
                            if(data.total === 1){
                                Ext.MessageBox.show({
                                    title           : 'Informasi',
                                    msg             : 'Data Telah Dirubah',
                                    icon            : Ext.MessageBox.INFO,
                                    buttons         : Ext.MessageBox.OK
                                });
                                var form    = Ext.getCmp('formsatuan');
                                var grid    = Ext.getCmp('gridsatuan');
                                form.getForm().reset();
                                me.resetPanel();
                                grid.getSelectionModel().deselectAll();
                                Ext.ComponentQuery.query('#gridsatuan')[0].getStore('RPJM.module.MasterData.Satuan.store.Satuan').reload(); 
                            }else if (data.total === 2){
                                Ext.MessageBox.show({
                                    title           : 'Error',
                                    msg             : 'Satuan Telah Terdaftar - Silahkan Gunakan Satuan Lain',
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
                                var form    = Ext.getCmp('formsatuan');
                                var grid    = Ext.getCmp('gridsatuan');
                                form.getForm().reset();
                                me.resetPanel();
                                grid.getSelectionModel().deselectAll();
                                Ext.ComponentQuery.query('#gridsatuan')[0].getStore('RPJM.module.MasterData.Satuan.store.Satuan').reload();                   
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
                url     : BASE_URL + 'satuan/c_satuan/searchSatuan',
                method  : 'POST',
                params  : {name : value},
                success : function(response){
                    var data    = Ext.JSON.decode(response.responseText);
                    if(data.success){
                            var storeApproval = Ext.getStore('RPJM.module.MasterData.Satuan.store.Satuan');
                            storeApproval.removeAll();
                            storeApproval.add(data.data);
                    }
                }
            });
    },

    print : function(){
        window.location = BASE_URL + 'satuan/c_satuan/printSatuan/';
    },
})
