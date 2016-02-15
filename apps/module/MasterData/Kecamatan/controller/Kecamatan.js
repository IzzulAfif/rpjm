Ext.define('RPJM.module.MasterData.Kecamatan.controller.Kecamatan', {
    extend  : 'Ext.app.Controller',
    CheckedDataEdit: [],

    init: function() {
        var me = this;
        me.getStore('RPJM.module.MasterData.Kecamatan.store.Kecamatan').load();
        me.control({
            "gridkecamatan  button[action=delete]"          : {
                click: me.del
            }, 
            "#gridkecamatan"                                 : {
               itemclick: me.viewKecamatan
            },            
            "formkecamatan  button[action=save]"        : {
                click: me.save
            }, 
            "formkecamatan  button[action=reset]"       : {
                click: me.resetPanel
            },
            "gridkecamatanorg"                          : {
               itemdblclick: me.addorg
            },
            "gridkecamatan textfield[action=search]"    : {
               keypress: me.search
            },
            "gridkecamatan button[action=print]"        : {
               click: me.print
            },
            "formkecamatan button[action=update]"       : {
               click: me.update
            }
        });
        me.callParent(arguments);
    },
    reloadStore: function(){
        var me = this;
        me.getStore('RPJM.module.MasterData.Kecamatan.store.Kecamatan').reload();
    },
    viewKecamatan: function(grid, record, item, index, e, eOpts){
        var id = record.data.id;
        var form = Ext.getCmp('formkecamatan');
        var grid = Ext.getCmp('gridkecamatan');
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
        var form      = Ext.getCmp('formkecamatan').getForm();
        var kode_kec  = form.findField('kode_kec').getValue();

        Ext.MessageBox.show({
            title           : 'Konfirmasi',
            msg             : 'Anda yakin akan menghapus data yang terseleksi?',
            buttons         : Ext.Msg.YESNO,
            icon            : Ext.MessageBox.WARNING,
            width           : 450,
            fn              : function(btn, evtObj){
                if (btn == 'yes') {
                    Ext.Ajax.request({
                        url             : BASE_URL + 'kecamatan/c_kecamatan/delKecamatan',
                        method          : 'POST',
                        params          : {
                            kode_kec : kode_kec
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
                                var form    = Ext.getCmp('formkecamatan');
                                var grid    = Ext.getCmp('gridkecamatan');
                                form.getForm().reset();
                                me.resetPanel();
                                grid.getSelectionModel().deselectAll();
                                Ext.ComponentQuery.query('#gridkecamatan')[0].getStore('RPJM.module.MasterData.Kecamatan.store.Kecamatan').reload();                             
                            } else {
                                var form    = Ext.getCmp('formkecamatan');
                                var grid    = Ext.getCmp('gridkecamatan');
                                form.getForm().reset();
                                me.resetPanel();
                                grid.getSelectionModel().deselectAll();
                                Ext.ComponentQuery.query('#gridkecamatan')[0].getStore('RPJM.module.MasterData.Kecamatan.store.Kecamatan').reload(); 
                            }
                        }
                    });
                }
            }
        })
    },

    resetPanel: function(btn, gridPanel, selected) {//Reset Form
        var me = this;
        var form = Ext.getCmp('formkecamatan');
        var grid = Ext.getCmp('gridkecamatan');
        form.getForm().reset();

        grid.getSelectionModel().clearSelections();
        me.getStore('RPJM.module.MasterData.Kecamatan.store.Kecamatan').reload();

    },

    save: function(btn, evt, opts){
        var me         = this;
        var form       = btn.up('form').getForm();
        var kode_kab   = form.findField('kode_kab').getValue();
        var kode_kec   = form.findField('kode_kec').getValue();
        var kecamatan  = form.findField('kecamatan').getValue();

        Ext.Ajax.request({
            url     : BASE_URL + 'kecamatan/c_kecamatan/saveKecamatan',
            method  : 'POST',
            params  : {
                kode_kab    : kode_kab,
                kode_kec    : kode_kec,
                kecamatan   : kecamatan
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
                    var form    = Ext.getCmp('formkecamatan');
                    var grid    = Ext.getCmp('gridkecamatan');
                    form.getForm().reset();
                    me.resetPanel();
                    grid.getSelectionModel().deselectAll();
                    Ext.ComponentQuery.query('#gridkecamatan')[0].getStore('RPJM.module.MasterData.Kecamatan.store.Kecamatan').reload(); 
                }else if (data.total === 2){
                    Ext.MessageBox.show({
                        title           : 'Error',
                        msg             : 'Kecamatan Telah Terdaftar - Silahkan Gunakan Kecamatan Lain',
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
                    var form    = Ext.getCmp('formkecamatan');
                    var grid    = Ext.getCmp('gridkecamatan');
                    form.getForm().reset();
                    me.resetPanel();
                    grid.getSelectionModel().deselectAll();
                    Ext.ComponentQuery.query('#gridkecamatan')[0].getStore('RPJM.module.MasterData.Kecamatan.store.Kecamatan').reload();                   
                }
            }
        });   
    },

    update: function(btn, evt, opts){
        var me         = this;
        var form       = btn.up('form').getForm();
        var id         = form.findField('id').getValue();
        var kode_kab   = form.findField('kode_kab').getValue();
        var kode_kec   = form.findField('kode_kec').getValue();
        var kecamatan  = form.findField('kecamatan').getValue();
        Ext.MessageBox.show({
            title           : 'Konfirmasi',
            msg             : 'Anda yakin akan merubah data?',
            buttons         : Ext.Msg.YESNO,
            icon            : Ext.MessageBox.WARNING,
            width           : 450,
            fn              : function(btn, evtObj){
                if (btn == 'yes') {
                    Ext.Ajax.request({
                        url     : BASE_URL + 'kecamatan/c_kecamatan/editKecamatan',
                        method  : 'POST',
                        params  : {
                            id          : id,
                            kode_kab    : kode_kab,
                            kode_kec    : kode_kec,
                            kecamatan   : kecamatan
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
                                var form    = Ext.getCmp('formkecamatan');
                                var grid    = Ext.getCmp('gridkecamatan');
                                form.getForm().reset();
                                me.resetPanel();
                                grid.getSelectionModel().deselectAll();
                                Ext.ComponentQuery.query('#gridkecamatan')[0].getStore('RPJM.module.MasterData.Kecamatan.store.Kecamatan').reload(); 
                            }else if (data.total === 2){
                                Ext.MessageBox.show({
                                    title           : 'Error',
                                    msg             : 'Kecamatan Telah Terdaftar - Silahkan Gunakan Kecamatan Lain',
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
                                var form    = Ext.getCmp('formkecamatan');
                                var grid    = Ext.getCmp('gridkecamatan');
                                form.getForm().reset();
                                me.resetPanel();
                                grid.getSelectionModel().deselectAll();
                                Ext.ComponentQuery.query('#gridkecamatan')[0].getStore('RPJM.module.MasterData.Kecamatan.store.Kecamatan').reload();                   
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
                url     : BASE_URL + 'kecamatan/c_kecamatan/searchKecamatan',
                method  : 'POST',
                params  : {name : value},
                success : function(response){
                    var data    = Ext.JSON.decode(response.responseText);
                    if(data.success){
                            var storeApproval = Ext.getStore('RPJM.module.MasterData.Kecamatan.store.Kecamatan');
                            storeApproval.removeAll();
                            storeApproval.add(data.data);
                    }
                }
            });
    },

    print : function(){
        window.location = BASE_URL + 'kecamatan/c_kecamatan/printKecamatan/';
    },
})
