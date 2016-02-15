Ext.define('RPJM.module.MasterRpjm.Kegiatan.controller.Kegiatan', {
    extend  : 'Ext.app.Controller',
    CheckedDataEdit: [],

    init: function() {
        var me = this;
        me.getStore('RPJM.module.MasterRpjm.Kegiatan.store.Kegiatan').load();
        me.control({
            "gridkegiatan  button[action=delete]"                    : {
                click: me.del
            }, 
            "#gridkegiatan"                                          : {
               select: me.viewKegiatan
            },
            "#gridlookupprogram"                                     : {
               select: me.viewLookupProgram
            },      
            "#gridlookupunitkerja"                                     : {
               select: me.viewLookupUnitkerja
            },      
            "formkegiatan  button[action=save]"                      : {
                click: me.save
            }, 
            "formkegiatan  button[action=reset]"                     : {
                click: me.resetPanel
            },
            "formkegiatan  button[action=lookupProgram]"              : {
                click: me.lookupProgram
            },
            "formkegiatan  button[action=lookupUnitkerja]"              : {
                click: me.lookupUnitkerja
            },
            "gridkegiatanorg"                                        : {
               itemdblclick: me.addorg
            },
            "gridkegiatan textfield[action=search]"                  : {
               keypress: me.search
            },
            "gridkegiatan button[action=print]"                      : {
               click: me.print
            },
            "formkegiatan button[action=update]"                     : {
               click: me.update
            }
        });
        me.callParent(arguments);
    },

    reloadStore: function(){
        var me = this;
        me.getStore('RPJM.module.MasterRpjm.Kegiatan.store.Kegiatan').reload();
    },

    viewKegiatan: function(grid, record, item, index, e, eOpts){
        var id = record.data.id;
        var form = Ext.getCmp('formkegiatan');
        var grid = Ext.getCmp('gridkegiatan');
        form.getForm().setValues(record.data);
    },

    viewLookupProgram: function(grid, record, item, index, e, eOpts){
        var id      = record.data.id;
        var form    = Ext.getCmp('formkegiatan');
        var window  = Ext.getCmp('windowprogram');
        form.getForm().findField('kode_programrpjm').setValue(record.data.kode_programrpjm);
        window.close();
    },

    viewLookupUnitkerja: function(grid, record, item, index, e, eOpts){
        var id      = record.data.id;
        var form    = Ext.getCmp('formkegiatan');
        var window  = Ext.getCmp('windowunitkerja');
        form.getForm().findField('kode_unitkerja').setValue(record.data.kode_unitkerja);
        window.close();
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
        var form                 = Ext.getCmp('formkegiatan').getForm();
        var kode_kegiatanrpjm    = form.findField('kode_kegiatanrpjm').getValue();

        Ext.MessageBox.show({
            title           : 'Konfirmasi',
            msg             : 'Anda yakin akan menghapus data yang terseleksi?',
            buttons         : Ext.Msg.YESNO,
            icon            : Ext.MessageBox.WARNING,
            width           : 450,
            fn              : function(btn, evtObj){
                if (btn == 'yes') {
                    Ext.Ajax.request({
                        url             : BASE_URL + 'kegiatan/c_kegiatan/delKegiatan',
                        method          : 'POST',
                        params          : {
                            kode_kegiatanrpjm   : kode_kegiatanrpjm
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
                                var form    = Ext.getCmp('formkegiatan');
                                var grid    = Ext.getCmp('gridkegiatan');
                                form.getForm().reset();
                                me.resetPanel();
                                grid.getSelectionModel().deselectAll();
                                Ext.ComponentQuery.query('#gridkegiatan')[0].getStore('RPJM.module.MasterRpjm.Kegiatan.store.Kegiatan').reload();                             
                            } else {
                                var form    = Ext.getCmp('formkegiatan');
                                var grid    = Ext.getCmp('gridkegiatan');
                                form.getForm().reset();
                                me.resetPanel();
                                grid.getSelectionModel().deselectAll();
                                Ext.ComponentQuery.query('#gridkegiatan')[0].getStore('RPJM.module.MasterRpjm.Kegiatan.store.Kegiatan').reload(); 
                            }
                        }
                    });
                }
            }
        })
    },

    lookupProgram : function(btn, combo, evt, e, opts, click){
        this.getStore('RPJM.module.MasterRpjm.Kegiatan.store.LookupProgram').load();
        var win = Ext.create('RPJM.module.MasterRpjm.Kegiatan.view.grid.WindowProgram');
        win.show();
        // win.down('form').loadRecord(record);
    },

    lookupUnitkerja : function(btn, combo, evt, e, opts, click){
        this.getStore('RPJM.module.MasterRpjm.Kegiatan.store.LookupUnitkerja').load();
        var win = Ext.create('RPJM.module.MasterRpjm.Kegiatan.view.grid.WindowUnitkerja');
        win.show();
        // win.down('form').loadRecord(record);
    },

    resetPanel: function(btn, gridPanel, selected) {//Reset Form
        var me = this;
        var form = Ext.getCmp('formkegiatan');
        var grid = Ext.getCmp('gridkegiatan');
        form.getForm().reset();

        var loadingan = Ext.getCmp('kode_programrpjm');
        loadingan.reset();

        grid.getSelectionModel().clearSelections();
        me.getStore('RPJM.module.MasterRpjm.Kegiatan.store.Kegiatan').reload();

    },

    save: function(btn, evt, opts){
        var me                  = this;
        var form                = btn.up('form').getForm();
        var kode_programrpjm    = form.findField('kode_programrpjm').getValue();
        var kegiatan            = form.findField('kegiatan').getValue();
        var no_urut             = form.findField('no_urut').getValue();
        var kode_unitkerja      = form.findField('kode_unitkerja').getValue();
        Ext.Ajax.request({
            headers : {'Content-Type':'multipart/form-data; charset=UTF-8'},
            url     : BASE_URL + 'kegiatan/c_kegiatan/saveKegiatan',
            method  : 'GET',
            params  : {
                kode_programrpjm    : kode_programrpjm,
                kegiatan            : kegiatan,
                no_urut             : no_urut,
                kode_unitkerja      : kode_unitkerja
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
                    var form    = Ext.getCmp('formkegiatan');
                    var grid    = Ext.getCmp('gridkegiatan');
                    form.getForm().reset();
                    me.resetPanel();
                    grid.getSelectionModel().deselectAll();
                    Ext.ComponentQuery.query('#gridkegiatan')[0].getStore('RPJM.module.MasterRpjm.Kegiatan.store.Kegiatan').reload(); 
                }else if (data.total === 2){
                    Ext.MessageBox.show({
                        title           : 'Error',
                        msg             : 'Kegiatan Telah Terdaftar - Silahkan Gunakan Kegiatan Lain',
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
                    var form    = Ext.getCmp('formkegiatan');
                    var grid    = Ext.getCmp('gridkegiatan');
                    form.getForm().reset();
                    me.resetPanel();
                    grid.getSelectionModel().deselectAll();
                    Ext.ComponentQuery.query('#gridkegiatan')[0].getStore('RPJM.module.MasterRpjm.Kegiatan.store.Kegiatan').reload();                   
                }
            }
        });   
    },

    update: function(btn, evt, opts){
        var me                  = this;
        var form                = btn.up('form').getForm();
        var id                  = form.findField('id').getValue();
        var kode_programrpjm    = form.findField('kode_programrpjm').getValue();
        var kegiatan            = form.findField('kegiatan').getValue();
        var kode_kegiatanrpjm   = form.findField('kode_kegiatanrpjm').getValue();
        var no_urut             = form.findField('no_urut').getValue();
        var kode_unitkerja      = form.findField('kode_unitkerja').getValue();
        Ext.MessageBox.show({
            title           : 'Konfirmasi',
            msg             : 'Anda yakin akan merubah data?',
            buttons         : Ext.Msg.YESNO,
            icon            : Ext.MessageBox.WARNING,
            width           : 450,
            fn              : function(btn, evtObj){
                if (btn == 'yes') {
                    Ext.Ajax.request({
                        headers : {'Content-Type':'multipart/form-data; charset=UTF-8'},
                        url     : BASE_URL + 'kegiatan/c_kegiatan/editKegiatan',
                        method  : 'GET',
                        params  : {
                            id                  : id,
                            kode_programrpjm    : kode_programrpjm,
                            kegiatan            : kegiatan,
                            kode_kegiatanrpjm   : kode_kegiatanrpjm,
                            no_urut             : no_urut
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
                                var form    = Ext.getCmp('formkegiatan');
                                var grid    = Ext.getCmp('gridkegiatan');
                                form.getForm().reset();
                                me.resetPanel();
                                grid.getSelectionModel().deselectAll();
                                Ext.ComponentQuery.query('#gridkegiatan')[0].getStore('RPJM.module.MasterRpjm.Kegiatan.store.Kegiatan').reload(); 
                            }else if (data.total === 2){
                                Ext.MessageBox.show({
                                    title           : 'Error',
                                    msg             : 'Kegiatan Telah Terdaftar - Silahkan Gunakan Kegiatan Lain',
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
                                var form    = Ext.getCmp('formkegiatan');
                                var grid    = Ext.getCmp('gridkegiatan');
                                form.getForm().reset();
                                me.resetPanel();
                                grid.getSelectionModel().deselectAll();
                                Ext.ComponentQuery.query('#gridkegiatan')[0].getStore('RPJM.module.MasterRpjm.Kegiatan.store.Kegiatan').reload();                   
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
            url     : BASE_URL + 'kegiatan/c_kegiatan/searchKegiatan',
            method  : 'POST',
            params  : {name : value},
            success : function(response){
                var data    = Ext.JSON.decode(response.responseText);
                if(data.success){
                        var storeApproval = Ext.getStore('RPJM.module.MasterRpjm.Kegiatan.store.Kegiatan');
                        storeApproval.removeAll();
                        storeApproval.add(data.data);
                }
            }
        });
    },

    print : function(){
        window.location = BASE_URL + 'kegiatan/c_kegiatan/printKegiatan/';
    },
})
