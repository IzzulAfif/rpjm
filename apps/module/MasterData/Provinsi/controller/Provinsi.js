Ext.define('RPJM.module.MasterData.Provinsi.controller.Provinsi', {
    extend  : 'Ext.app.Controller',
    CheckedDataEdit: [],

    init: function() {
        var me = this;
        me.getStore('RPJM.module.MasterData.Provinsi.store.Provinsi').load();
        me.control({
            "gridprovinsi  button[action=delete]"          : {
                click: me.del
            }, 
            "#gridprovinsi"                                 : {
               select: me.viewProvinsi
            },            
            "formprovinsi  button[action=save]"        : {
                click: me.save
            }, 
            "formprovinsi  button[action=reset]"       : {
                click: me.resetPanel
            },
            "gridprovinsiorg"                          : {
               itemdblclick: me.addorg
            },
            "gridprovinsi textfield[action=search]"    : {
               keypress: me.search
            },
            "gridprovinsi button[action=print]"        : {
               click: me.print
            },
            "formprovinsi button[action=update]"       : {
               click: me.update
            }
        });
        me.callParent(arguments);
    },

    reloadStore: function(){
        var me = this;
        me.getStore('RPJM.module.MasterData.Provinsi.store.Provinsi').reload();
    },

    viewProvinsi: function(grid, record, item, index, e, eOpts){
        var id = record.data.id;
        var form = Ext.getCmp('formprovinsi');
        var grid = Ext.getCmp('gridprovinsi');
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
        var form       = Ext.getCmp('formprovinsi').getForm();
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
                        url             : BASE_URL + 'provinsi/c_provinsi/delProvinsi',
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
                                var form    = Ext.getCmp('formprovinsi');
                                var grid    = Ext.getCmp('gridprovinsi');
                                form.getForm().reset();
                                me.resetPanel();
                                grid.getSelectionModel().deselectAll();
                                Ext.ComponentQuery.query('#gridprovinsi')[0].getStore('RPJM.module.MasterData.Provinsi.store.Provinsi').reload();                             
                            } else {
                                var form    = Ext.getCmp('formprovinsi');
                                var grid    = Ext.getCmp('gridprovinsi');
                                form.getForm().reset();
                                me.resetPanel();
                                grid.getSelectionModel().deselectAll();
                                Ext.ComponentQuery.query('#gridprovinsi')[0].getStore('RPJM.module.MasterData.Provinsi.store.Provinsi').reload(); 
                            }
                        }
                    });
                }
            }
        })
    },

    resetPanel: function(btn, gridPanel, selected) {//Reset Form
        var me = this;
        var form = Ext.getCmp('formprovinsi');
        var grid = Ext.getCmp('gridprovinsi');
        form.getForm().reset();

        grid.getSelectionModel().clearSelections();
        me.getStore('RPJM.module.MasterData.Provinsi.store.Provinsi').reload();

    },

    save: function(btn, evt, opts){
        var me         = this;
        var form       = btn.up('form').getForm();
        var kode_prov  = form.findField('kode_prov').getValue();
        var provinsi   = form.findField('provinsi').getValue();

        Ext.Ajax.request({
            url     : BASE_URL + 'provinsi/c_provinsi/saveProvinsi',
            method  : 'POST',
            params  : {
                kode_prov   : kode_prov,
                provinsi    : provinsi
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
                    var form    = Ext.getCmp('formprovinsi');
                    var grid    = Ext.getCmp('gridprovinsi');
                    form.getForm().reset();
                    me.resetPanel();
                    grid.getSelectionModel().deselectAll();
                    Ext.ComponentQuery.query('#gridprovinsi')[0].getStore('RPJM.module.MasterData.Provinsi.store.Provinsi').reload(); 
                }else if (data.total === 2){
                    Ext.MessageBox.show({
                        title           : 'Error',
                        msg             : 'Provinsi Telah Terdaftar - Silahkan Gunakan Provinsi Lain',
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
                    var form    = Ext.getCmp('formprovinsi');
                    var grid    = Ext.getCmp('gridprovinsi');
                    form.getForm().reset();
                    me.resetPanel();
                    grid.getSelectionModel().deselectAll();
                    Ext.ComponentQuery.query('#gridprovinsi')[0].getStore('RPJM.module.MasterData.Provinsi.store.Provinsi').reload();                   
                }
            }
        });   
    },

    update: function(btn, evt, opts){
        var me             = this;
        var form           = btn.up('form').getForm();
        var id             = form.findField('id').getValue();
        var kode_prov  = form.findField('kode_prov').getValue();
        var provinsi   = form.findField('provinsi').getValue();
        Ext.MessageBox.show({
            title           : 'Konfirmasi',
            msg             : 'Anda yakin akan merubah data?',
            buttons         : Ext.Msg.YESNO,
            icon            : Ext.MessageBox.WARNING,
            width           : 450,
            fn              : function(btn, evtObj){
                if (btn == 'yes') {
                    Ext.Ajax.request({
                        url     : BASE_URL + 'provinsi/c_provinsi/editProvinsi',
                        method  : 'POST',
                        params  : {
                            id          : id,
                            kode_prov   : kode_prov,
                            provinsi    : provinsi
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
                                var form    = Ext.getCmp('formprovinsi');
                                var grid    = Ext.getCmp('gridprovinsi');
                                form.getForm().reset();
                                me.resetPanel();
                                grid.getSelectionModel().deselectAll();
                                Ext.ComponentQuery.query('#gridprovinsi')[0].getStore('RPJM.module.MasterData.Provinsi.store.Provinsi').reload(); 
                            }else if (data.total === 2){
                                Ext.MessageBox.show({
                                    title           : 'Error',
                                    msg             : 'Provinsi Telah Terdaftar - Silahkan Gunakan Provinsi Lain',
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
                                var form    = Ext.getCmp('formprovinsi');
                                var grid    = Ext.getCmp('gridprovinsi');
                                form.getForm().reset();
                                me.resetPanel();
                                grid.getSelectionModel().deselectAll();
                                Ext.ComponentQuery.query('#gridprovinsi')[0].getStore('RPJM.module.MasterData.Provinsi.store.Provinsi').reload();                   
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
            url     : BASE_URL + 'provinsi/c_provinsi/searchProvinsi',
            method  : 'POST',
            params  : {name : value},
            success : function(response){
                var data    = Ext.JSON.decode(response.responseText);
                if(data.success){
                        var storeApproval = Ext.getStore('RPJM.module.MasterData.Provinsi.store.Provinsi');
                        storeApproval.removeAll();
                        storeApproval.add(data.data);
                }
            }
        });
    },

    print : function(){
        window.location = BASE_URL + 'provinsi/c_provinsi/printProvinsi/';
    },
})
