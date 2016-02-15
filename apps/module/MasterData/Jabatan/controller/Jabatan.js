Ext.define('RPJM.module.MasterData.Jabatan.controller.Jabatan', {
    extend  : 'Ext.app.Controller',
    CheckedDataEdit: [],

    init: function() {
        var me = this;
        me.getStore('RPJM.module.MasterData.Jabatan.store.Jabatan').load();
        me.control({
            "gridjabatan  button[action=delete]"          : {
                click: me.del
            }, 
            "#gridjabatan"                                 : {
               itemclick: me.viewJabatan
            },            
            "formjabatan  button[action=save]"        : {
                click: me.save
            }, 
            "formjabatan  button[action=reset]"       : {
                click: me.resetPanel
            },
            "gridjabatanorg"                          : {
               itemdblclick: me.addorg
            },
            "gridjabatan textfield[action=search]"    : {
               keypress: me.search
            },
            "gridjabatan button[action=print]"        : {
               click: me.print
            },
            "formjabatan button[action=update]"       : {
               click: me.update
            }
        });
        me.callParent(arguments);
    },

    reloadStore: function(){
        var me = this;
        me.getStore('RPJM.module.MasterData.Jabatan.store.Jabatan').reload();
    },

    viewJabatan: function(grid, record, item, index, e, eOpts){
        var id = record.data.id;
        var form = Ext.getCmp('formjabatan');
        var grid = Ext.getCmp('gridjabatan');
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
        var form            = Ext.getCmp('formjabatan').getForm();
        var kode_jabatan    = form.findField('kode_jabatan').getValue();

        Ext.MessageBox.show({
            title           : 'Konfirmasi',
            msg             : 'Anda yakin akan menghapus data yang terseleksi?',
            buttons         : Ext.Msg.YESNO,
            icon            : Ext.MessageBox.WARNING,
            width           : 450,
            fn              : function(btn, evtObj){
                if (btn == 'yes') {
                    Ext.Ajax.request({
                        url             : BASE_URL + 'jabatan/c_jabatan/delJabatan',
                        method          : 'POST',
                        params          : {
                            kode_jabatan : kode_jabatan
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
                                var form    = Ext.getCmp('formjabatan');
                                var grid    = Ext.getCmp('gridjabatan');
                                form.getForm().reset();
                                me.resetPanel();
                                grid.getSelectionModel().deselectAll();
                                Ext.ComponentQuery.query('#gridjabatan')[0].getStore('RPJM.module.MasterData.Jabatan.store.Jabatan').reload();                             
                            } else {
                                var form    = Ext.getCmp('formjabatan');
                                var grid    = Ext.getCmp('gridjabatan');
                                form.getForm().reset();
                                me.resetPanel();
                                grid.getSelectionModel().deselectAll();
                                Ext.ComponentQuery.query('#gridjabatan')[0].getStore('RPJM.module.MasterData.Jabatan.store.Jabatan').reload(); 
                            }
                        }
                    });
                }
            }
        })
    },

    resetPanel: function(btn, gridPanel, selected) {//Reset Form
        var me = this;
        var form = Ext.getCmp('formjabatan');
        var grid = Ext.getCmp('gridjabatan');
        form.getForm().reset();

        grid.getSelectionModel().clearSelections();
        me.getStore('RPJM.module.MasterData.Jabatan.store.Jabatan').reload();

    },

    save: function(btn, evt, opts){
        var me              = this;
        var form            = btn.up('form').getForm();
        var kode_jabatan    = form.findField('kode_jabatan').getValue();
        var jabatan         = form.findField('jabatan').getValue();
        Ext.Ajax.request({
            url     : BASE_URL + 'jabatan/c_jabatan/saveJabatan',
            method  : 'POST',
            params  : {
                kode_jabatan    : kode_jabatan,
                jabatan         : jabatan
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
                    var form    = Ext.getCmp('formjabatan');
                    var grid    = Ext.getCmp('gridjabatan');
                    form.getForm().reset();
                    me.resetPanel();
                    grid.getSelectionModel().deselectAll();
                    Ext.ComponentQuery.query('#gridjabatan')[0].getStore('RPJM.module.MasterData.Jabatan.store.Jabatan').reload(); 
                }else if (data.total === 2){
                    Ext.MessageBox.show({
                        title           : 'Error',
                        msg             : 'Jabatan Telah Terdaftar - Silahkan Gunakan Jabatan Lain',
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
                    var form    = Ext.getCmp('formjabatan');
                    var grid    = Ext.getCmp('gridjabatan');
                    form.getForm().reset();
                    me.resetPanel();
                    grid.getSelectionModel().deselectAll();
                    Ext.ComponentQuery.query('#gridjabatan')[0].getStore('RPJM.module.MasterData.Jabatan.store.Jabatan').reload();                   
                }
            }
        });   
    },

    update: function(btn, evt, opts){
        var me             = this;
        var form           = btn.up('form').getForm();
        var id             = form.findField('id').getValue();
        var kode_jabatan   = form.findField('kode_jabatan').getValue();
        var jabatan        = form.findField('jabatan').getValue();
        Ext.MessageBox.show({
            title           : 'Konfirmasi',
            msg             : 'Anda yakin akan merubah data?',
            buttons         : Ext.Msg.YESNO,
            icon            : Ext.MessageBox.WARNING,
            width           : 450,
            fn              : function(btn, evtObj){
                if (btn == 'yes') {
                    Ext.Ajax.request({
                        url     : BASE_URL + 'jabatan/c_jabatan/editJabatan',
                        method  : 'POST',
                        params  : {
                            id           : id,
                            kode_jabatan : kode_jabatan,
                            jabatan      : jabatan
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
                                var form    = Ext.getCmp('formjabatan');
                                var grid    = Ext.getCmp('gridjabatan');
                                form.getForm().reset();
                                me.resetPanel();
                                grid.getSelectionModel().deselectAll();
                                Ext.ComponentQuery.query('#gridjabatan')[0].getStore('RPJM.module.MasterData.Jabatan.store.Jabatan').reload(); 
                            }else if (data.total === 2){
                                Ext.MessageBox.show({
                                    title           : 'Error',
                                    msg             : 'Jabatan Telah Terdaftar - Silahkan Gunakan Jabatan Lain',
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
                                var form    = Ext.getCmp('formjabatan');
                                var grid    = Ext.getCmp('gridjabatan');
                                form.getForm().reset();
                                me.resetPanel();
                                grid.getSelectionModel().deselectAll();
                                Ext.ComponentQuery.query('#gridjabatan')[0].getStore('RPJM.module.MasterData.Jabatan.store.Jabatan').reload();                   
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
                url     : BASE_URL + 'jabatan/c_jabatan/searchJabatan',
                method  : 'POST',
                params  : {name : value},
                success : function(response){
                    var data    = Ext.JSON.decode(response.responseText);
                    if(data.success){
                            var storeApproval = Ext.getStore('RPJM.module.MasterData.Jabatan.store.Jabatan');
                            storeApproval.removeAll();
                            storeApproval.add(data.data);
                    }
                }
            });
    },

    print : function(){
        window.location = BASE_URL + 'jabatan/c_jabatan/printJabatan/';
    },
})
