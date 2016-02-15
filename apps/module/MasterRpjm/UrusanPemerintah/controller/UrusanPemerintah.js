Ext.define('RPJM.module.MasterRpjm.UrusanPemerintah.controller.UrusanPemerintah', {
    extend  : 'Ext.app.Controller',
    CheckedDataEdit: [],

    init: function() {
        var me = this;
        me.getStore('RPJM.module.MasterRpjm.UrusanPemerintah.store.UrusanPemerintah').load();
        me.control({
            "gridurusanpemerintah  button[action=delete]"          : {
                click: me.del
            }, 
            "#gridurusanpemerintah"                                 : {
               select: me.viewUrusanPemerintah
            },            
            "formurusanpemerintah  button[action=save]"        : {
                click: me.save
            }, 
            "formurusanpemerintah  button[action=reset]"       : {
                click: me.resetPanel
            },
            "gridurusanpemerintahorg"                          : {
               itemdblclick: me.addorg
            },
            "gridurusanpemerintah textfield[action=search]"    : {
               keypress: me.search
            },
            "gridurusanpemerintah button[action=print]"        : {
               click: me.print
            },
            "formurusanpemerintah button[action=update]"       : {
               click: me.update
            }
        });
        me.callParent(arguments);
    },

    reloadStore: function(){
        var me = this;
        me.getStore('RPJM.module.MasterRpjm.UrusanPemerintah.store.UrusanPemerintah').reload();
    },

    viewUrusanPemerintah: function(grid, record, item, index, e, eOpts){
        var id = record.data.id;
        var form = Ext.getCmp('formurusanpemerintah');
        var grid = Ext.getCmp('gridurusanpemerintah');
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

        var form            = Ext.getCmp('formurusanpemerintah').getForm();
        var kode_urusan_uu  = form.findField('kode_urusan_uu').getValue();

        Ext.MessageBox.show({
            title           : 'Konfirmasi',
            msg             : 'Anda yakin akan menghapus data yang terseleksi?',
            buttons         : Ext.Msg.YESNO,
            icon            : Ext.MessageBox.WARNING,
            width           : 450,
            fn              : function(btn, evtObj){
                if (btn == 'yes') {
                    Ext.Ajax.request({
                        url             : BASE_URL + 'urusanpemerintah/c_urusanpemerintah/delUrusanPemerintah',
                        method          : 'POST',
                        params          : {
                            kode_urusan_uu : kode_urusan_uu
                        },
                        success         : function(response){
                            var data    = Ext.JSON.decode(response.responseText);
                            if(data.msg === 1){
                                Ext.MessageBox.show({
                                    title           : 'Informasi',
                                    msg             : 'Data Digunakan di Table Lain',
                                    icon            : Ext.MessageBox.INFO,
                                    buttons         : Ext.MessageBox.OK
                                });
                                var form    = Ext.getCmp('formurusanpemerintah');
                                var grid    = Ext.getCmp('gridurusanpemerintah');
                                form.getForm().reset();
                                me.resetPanel();
                                grid.getSelectionModel().deselectAll();
                                Ext.ComponentQuery.query('#gridurusanpemerintah')[0].getStore('RPJM.module.MasterRpjm.UrusanPemerintah.store.UrusanPemerintah').reload();                             
                            } else {
                                var form    = Ext.getCmp('formurusanpemerintah');
                                var grid    = Ext.getCmp('gridurusanpemerintah');
                                form.getForm().reset();
                                me.resetPanel();
                                grid.getSelectionModel().deselectAll();
                                Ext.ComponentQuery.query('#gridurusanpemerintah')[0].getStore('RPJM.module.MasterRpjm.UrusanPemerintah.store.UrusanPemerintah').reload(); 
                            }
                        }
                    });
                }
            }
        })
    },

    resetPanel: function(btn, gridPanel, selected) {//Reset Form
        var me = this;
        var form = Ext.getCmp('formurusanpemerintah');
        var grid = Ext.getCmp('gridurusanpemerintah');
        form.getForm().reset();

        grid.getSelectionModel().clearSelections();
        me.getStore('RPJM.module.MasterRpjm.UrusanPemerintah.store.UrusanPemerintah').reload();

    },

    save: function(btn, evt, opts){
        var me              = this;
        var form            = btn.up('form').getForm();
        var kode_urusan_uu  = form.findField('kode_urusan_uu').getValue();
        var nama_urusan_uu  = form.findField('nama_urusan_uu').getValue();
        var no_urusan_uu    = form.findField('no_urusan_uu').getValue();

        Ext.Ajax.request({
            url     : BASE_URL + 'urusanpemerintah/c_urusanpemerintah/saveUrusanPemerintah',
            method  : 'POST',
            params  : {
                kode_urusan_uu     : kode_urusan_uu,
                nama_urusan_uu     : nama_urusan_uu,
                no_urusan_uu       : no_urusan_uu
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
                    var form    = Ext.getCmp('formurusanpemerintah');
                    var grid    = Ext.getCmp('gridurusanpemerintah');
                    form.getForm().reset();
                    me.resetPanel();
                    grid.getSelectionModel().deselectAll();
                    Ext.ComponentQuery.query('#gridurusanpemerintah')[0].getStore('RPJM.module.MasterRpjm.UrusanPemerintah.store.UrusanPemerintah').reload(); 
                }else if (data.total === 2){
                    Ext.MessageBox.show({
                        title           : 'Error',
                        msg             : 'UrusanPemerintah Telah Terdaftar - Silahkan Gunakan UrusanPemerintah Lain',
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
                    var form    = Ext.getCmp('formurusanpemerintah');
                    var grid    = Ext.getCmp('gridurusanpemerintah');
                    form.getForm().reset();
                    me.resetPanel();
                    grid.getSelectionModel().deselectAll();
                    Ext.ComponentQuery.query('#gridurusanpemerintah')[0].getStore('RPJM.module.MasterRpjm.UrusanPemerintah.store.UrusanPemerintah').reload();                   
                }
            }
        });   
    },

    update: function(btn, evt, opts){
        var me              = this;
        var form            = btn.up('form').getForm();
        var id              = form.findField('id').getValue();
        var kode_urusan_uu  = form.findField('kode_urusan_uu').getValue();
        var nama_urusan_uu  = form.findField('nama_urusan_uu').getValue();
        var no_urusan_uu    = form.findField('no_urusan_uu').getValue();
        Ext.MessageBox.show({
            title           : 'Konfirmasi',
            msg             : 'Anda yakin akan merubah data?',
            buttons         : Ext.Msg.YESNO,
            icon            : Ext.MessageBox.WARNING,
            width           : 450,
            fn              : function(btn, evtObj){
                if (btn == 'yes') {
                    Ext.Ajax.request({
                        url     : BASE_URL + 'urusanpemerintah/c_urusanpemerintah/editUrusanPemerintah',
                        method  : 'POST',
                        params  : {
                            id                 : id,
                            kode_urusan_uu     : kode_urusan_uu,
                            nama_urusan_uu     : nama_urusan_uu,
                            no_urusan_uu       : no_urusan_uu
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
                                var form    = Ext.getCmp('formurusanpemerintah');
                                var grid    = Ext.getCmp('gridurusanpemerintah');
                                form.getForm().reset();
                                me.resetPanel();
                                grid.getSelectionModel().deselectAll();
                                Ext.ComponentQuery.query('#gridurusanpemerintah')[0].getStore('RPJM.module.MasterRpjm.UrusanPemerintah.store.UrusanPemerintah').reload(); 
                            }else if (data.total === 2){
                                Ext.MessageBox.show({
                                    title           : 'Error',
                                    msg             : 'UrusanPemerintah Telah Terdaftar - Silahkan Gunakan UrusanPemerintah Lain',
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
                                var form    = Ext.getCmp('formurusanpemerintah');
                                var grid    = Ext.getCmp('gridurusanpemerintah');
                                form.getForm().reset();
                                me.resetPanel();
                                grid.getSelectionModel().deselectAll();
                                Ext.ComponentQuery.query('#gridurusanpemerintah')[0].getStore('RPJM.module.MasterRpjm.UrusanPemerintah.store.UrusanPemerintah').reload();                   
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
                url     : BASE_URL + 'urusanpemerintah/c_urusanpemerintah/searchUrusanPemerintah',
                method  : 'POST',
                params  : {name : value},
                success : function(response){
                    var data    = Ext.JSON.decode(response.responseText);
                    if(data.success){
                            var storeApproval = Ext.getStore('RPJM.module.MasterRpjm.UrusanPemerintah.store.UrusanPemerintah');
                            storeApproval.removeAll();
                            storeApproval.add(data.data);
                    }
                }
            });
    },

    print : function(){
        window.location = BASE_URL + 'urusanpemerintah/c_urusanpemerintah/printUrusanPemerintah/';
    },
})
