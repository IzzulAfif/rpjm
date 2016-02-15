Ext.define('RPJM.module.MasterData.Golongan.controller.Golongan', {
    extend  : 'Ext.app.Controller',
    CheckedDataEdit: [],

    init: function() {
        var me = this;
        me.getStore('RPJM.module.MasterData.Golongan.store.Golongan').load();
        me.control({
            "gridgolongan  button[action=delete]"          : {
                click: me.del
            }, 
            "#gridgolongan"                                 : {
               select: me.viewGolongan
            },            
            "formgolongan  button[action=save]"        : {
                click: me.save
            }, 
            "formgolongan  button[action=reset]"       : {
                click: me.resetPanel
            },
            "gridgolonganorg"                          : {
               itemdblclick: me.addorg
            },
            "gridgolongan textfield[action=search]"    : {
               keypress: me.search
            },
            "gridgolongan button[action=print]"        : {
               click: me.print
            },
            "formgolongan button[action=update]"       : {
               click: me.update
            }
        });
        me.callParent(arguments);
    },

    reloadStore: function(){
        var me = this;
        me.getStore('RPJM.module.MasterData.Golongan.store.Golongan').reload();
    },

    viewGolongan: function(grid, record, item, index, e, eOpts){
        var id = record.data.id;
        var form = Ext.getCmp('formgolongan');
        var grid = Ext.getCmp('gridgolongan');
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
        var form       = Ext.getCmp('formgolongan').getForm();
        var kode_golongan  = form.findField('kode_golongan').getValue();

        Ext.MessageBox.show({
            title           : 'Konfirmasi',
            msg             : 'Anda yakin akan menghapus data yang terseleksi?',
            buttons         : Ext.Msg.YESNO,
            icon            : Ext.MessageBox.WARNING,
            width           : 450,
            fn              : function(btn, evtObj){
                if (btn == 'yes') {
                    Ext.Ajax.request({
                        url             : BASE_URL + 'golongan/c_golongan/delGolongan',
                        method          : 'POST',
                        params          : {
                            kode_golongan   : kode_golongan
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
                                var form    = Ext.getCmp('formgolongan');
                                var grid    = Ext.getCmp('gridgolongan');
                                form.getForm().reset();
                                me.resetPanel();
                                grid.getSelectionModel().deselectAll();
                                Ext.ComponentQuery.query('#gridgolongan')[0].getStore('RPJM.module.MasterData.Golongan.store.Golongan').reload();                             
                            } else {
                                var form    = Ext.getCmp('formgolongan');
                                var grid    = Ext.getCmp('gridgolongan');
                                form.getForm().reset();
                                me.resetPanel();
                                grid.getSelectionModel().deselectAll();
                                Ext.ComponentQuery.query('#gridgolongan')[0].getStore('RPJM.module.MasterData.Golongan.store.Golongan').reload(); 
                            }
                        }
                    });
                }
            }
        })
    },

    resetPanel: function(btn, gridPanel, selected) {//Reset Form
        var me = this;
        var form = Ext.getCmp('formgolongan');
        var grid = Ext.getCmp('gridgolongan');
        form.getForm().reset();

        grid.getSelectionModel().clearSelections();
        me.getStore('RPJM.module.MasterData.Golongan.store.Golongan').reload();

    },

    save: function(btn, evt, opts){
        var me         = this;
        var form       = btn.up('form').getForm();
        var kode_golongan  = form.findField('kode_golongan').getValue();
        var golongan   = form.findField('golongan').getValue();

        Ext.Ajax.request({
            url     : BASE_URL + 'golongan/c_golongan/saveGolongan',
            method  : 'POST',
            params  : {
                kode_golongan   : kode_golongan,
                golongan    : golongan
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
                    var form    = Ext.getCmp('formgolongan');
                    var grid    = Ext.getCmp('gridgolongan');
                    form.getForm().reset();
                    me.resetPanel();
                    grid.getSelectionModel().deselectAll();
                    Ext.ComponentQuery.query('#gridgolongan')[0].getStore('RPJM.module.MasterData.Golongan.store.Golongan').reload(); 
                }else if (data.total === 2){
                    Ext.MessageBox.show({
                        title           : 'Error',
                        msg             : 'Golongan Telah Terdaftar - Silahkan Gunakan Golongan Lain',
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
                    var form    = Ext.getCmp('formgolongan');
                    var grid    = Ext.getCmp('gridgolongan');
                    form.getForm().reset();
                    me.resetPanel();
                    grid.getSelectionModel().deselectAll();
                    Ext.ComponentQuery.query('#gridgolongan')[0].getStore('RPJM.module.MasterData.Golongan.store.Golongan').reload();                   
                }
            }
        });   
    },

    update: function(btn, evt, opts){
        var me             = this;
        var form           = btn.up('form').getForm();
        var id             = form.findField('id').getValue();
        var kode_golongan  = form.findField('kode_golongan').getValue();
        var golongan   = form.findField('golongan').getValue();
        Ext.MessageBox.show({
            title           : 'Konfirmasi',
            msg             : 'Anda yakin akan merubah data?',
            buttons         : Ext.Msg.YESNO,
            icon            : Ext.MessageBox.WARNING,
            width           : 450,
            fn              : function(btn, evtObj){
                if (btn == 'yes') {
                    Ext.Ajax.request({
                        url     : BASE_URL + 'golongan/c_golongan/editGolongan',
                        method  : 'POST',
                        params  : {
                            id          : id,
                            kode_golongan   : kode_golongan,
                            golongan    : golongan
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
                                var form    = Ext.getCmp('formgolongan');
                                var grid    = Ext.getCmp('gridgolongan');
                                form.getForm().reset();
                                me.resetPanel();
                                grid.getSelectionModel().deselectAll();
                                Ext.ComponentQuery.query('#gridgolongan')[0].getStore('RPJM.module.MasterData.Golongan.store.Golongan').reload(); 
                            }else if (data.total === 2){
                                Ext.MessageBox.show({
                                    title           : 'Error',
                                    msg             : 'Golongan Telah Terdaftar - Silahkan Gunakan Golongan Lain',
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
                                var form    = Ext.getCmp('formgolongan');
                                var grid    = Ext.getCmp('gridgolongan');
                                form.getForm().reset();
                                me.resetPanel();
                                grid.getSelectionModel().deselectAll();
                                Ext.ComponentQuery.query('#gridgolongan')[0].getStore('RPJM.module.MasterData.Golongan.store.Golongan').reload();                   
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
            url     : BASE_URL + 'golongan/c_golongan/searchGolongan',
            method  : 'POST',
            params  : {name : value},
            success : function(response){
                var data    = Ext.JSON.decode(response.responseText);
                if(data.success){
                        var storeApproval = Ext.getStore('RPJM.module.MasterData.Golongan.store.Golongan');
                        storeApproval.removeAll();
                        storeApproval.add(data.data);
                }
            }
        });
    },

    print : function(){
        window.location = BASE_URL + 'golongan/c_golongan/printGolongan/';
    },
})
