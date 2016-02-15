Ext.define('RPJM.module.MasterData.Bidang.controller.Bidang', {
    extend  : 'Ext.app.Controller',
    CheckedDataEdit: [],

    init: function() {
        var me = this;
        me.getStore('RPJM.module.MasterData.Bidang.store.Bidang').load();
        me.control({
            "gridbidang  button[action=delete]"          : {
                click: me.del
            }, 
            "#gridbidang"                                 : {
               select: me.viewBidang
            },            
            "formbidang  button[action=save]"        : {
                click: me.save
            }, 
            "formbidang  button[action=reset]"       : {
                click: me.resetPanel
            },
            "gridbidangorg"                          : {
               itemdblclick: me.addorg
            },
            "gridbidang textfield[action=search]"    : {
               keypress: me.search
            },
            "gridbidang button[action=print]"        : {
               click: me.print
            },
            "formbidang button[action=update]"       : {
               click: me.update
            }
        });
        me.callParent(arguments);
    },
    reloadStore: function(){
        var me = this;
        me.getStore('RPJM.module.MasterData.Bidang.store.Bidang').reload();
    },
    viewBidang: function(grid, record, item, index, e, eOpts){
        var id = record.data.id;
        var form = Ext.getCmp('formbidang');
        var grid = Ext.getCmp('gridbidang');
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
        var kode_bidang  = form.findField('kode_bidang').getValue();

        Ext.MessageBox.show({
            title           : 'Konfirmasi',
            msg             : 'Anda yakin akan menghapus data yang terseleksi?',
            buttons         : Ext.Msg.YESNO,
            icon            : Ext.MessageBox.WARNING,
            width           : 450,
            fn              : function(btn, evtObj){
                if (btn == 'yes') {
                    Ext.Ajax.request({
                        url             : BASE_URL + 'bidang/c_bidang/delBidang',
                        method          : 'POST',
                        params          : {
                            kode_bidang : kode_bidang
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
                                var form    = Ext.getCmp('formbidang');
                                var grid    = Ext.getCmp('gridbidang');
                                form.getForm().reset();
                                me.resetPanel();
                                grid.getSelectionModel().deselectAll();
                                Ext.ComponentQuery.query('#gridbidang')[0].getStore('RPJM.module.MasterData.Bidang.store.Bidang').reload();                             
                            } else {
                                var form    = Ext.getCmp('formbidang');
                                var grid    = Ext.getCmp('gridbidang');
                                form.getForm().reset();
                                me.resetPanel();
                                grid.getSelectionModel().deselectAll();
                                Ext.ComponentQuery.query('#gridbidang')[0].getStore('RPJM.module.MasterData.Bidang.store.Bidang').reload(); 
                            }
                        }
                    });
                }
            }
        })
    },

    resetPanel: function(btn, gridPanel, selected) {//Reset Form
        var me = this;
        var form = Ext.getCmp('formbidang');
        var grid = Ext.getCmp('gridbidang');
        form.getForm().reset();

        grid.getSelectionModel().clearSelections();
        me.getStore('RPJM.module.MasterData.Bidang.store.Bidang').reload();

    },
    save: function(btn, evt, opts){
        var me         = this;
        var form       = btn.up('form').getForm();
        var kode_bidang  = form.findField('kode_bidang').getValue();
        var nama_bidang  = form.findField('nama_bidang').getValue();
        var no_bidang  = form.findField('no_bidang').getValue();
        var kode_pilihanurusan  = form.findField('kode_pilihanurusan').getValue();
        var kode_subpilihanurusan  = form.findField('kode_subpilihanurusan').getValue();

        // console.log(role);

        Ext.Ajax.request({
            url     : BASE_URL + 'bidang/c_bidang/saveBidang',
            method  : 'POST',
            params  : {
                kode_bidang        : kode_bidang
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
                    var form    = Ext.getCmp('formbidang');
                    var grid    = Ext.getCmp('gridbidang');
                    form.getForm().reset();
                    me.resetPanel();
                    grid.getSelectionModel().deselectAll();
                    Ext.ComponentQuery.query('#gridbidang')[0].getStore('RPJM.module.MasterData.Bidang.store.Bidang').reload(); 
                }else if (data.total === 2){
                    Ext.MessageBox.show({
                        title           : 'Error',
                        msg             : 'Bidang Telah Terdaftar - Silahkan Gunakan Bidang Lain',
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
                    var form    = Ext.getCmp('formbidang');
                    var grid    = Ext.getCmp('gridbidang');
                    form.getForm().reset();
                    me.resetPanel();
                    grid.getSelectionModel().deselectAll();
                    Ext.ComponentQuery.query('#gridbidang')[0].getStore('RPJM.module.MasterData.Bidang.store.Bidang').reload();                   
                }
            }
        });   
    },
    update: function(btn, evt, opts){
        var me             = this;
        var form           = btn.up('form').getForm();
                // console.log(form);
        var id             = form.findField('id').getValue();
        var kode_bidang      = form.findField('kode_bidang').getValue();
// console.log(role);
        Ext.MessageBox.show({
            title           : 'Konfirmasi',
            msg             : 'Anda yakin akan merubah data?',
            buttons         : Ext.Msg.YESNO,
            icon            : Ext.MessageBox.WARNING,
            width           : 450,
            fn              : function(btn, evtObj){
                if (btn == 'yes') {
                    Ext.Ajax.request({
                        url     : BASE_URL + 'bidang/c_bidang/editBidang',
                        method  : 'POST',
                        params  : {
                            id           : id,
                            kode_bidang    : kode_bidang
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
                                var form    = Ext.getCmp('formbidang');
                                var grid    = Ext.getCmp('gridbidang');
                                form.getForm().reset();
                                me.resetPanel();
                                grid.getSelectionModel().deselectAll();
                                Ext.ComponentQuery.query('#gridbidang')[0].getStore('RPJM.module.MasterData.Bidang.store.Bidang').reload(); 
                            }else if (data.total === 2){
                                Ext.MessageBox.show({
                                    title           : 'Error',
                                    msg             : 'Bidang Telah Terdaftar - Silahkan Gunakan Bidang Lain',
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
                                var form    = Ext.getCmp('formbidang');
                                var grid    = Ext.getCmp('gridbidang');
                                form.getForm().reset();
                                me.resetPanel();
                                grid.getSelectionModel().deselectAll();
                                Ext.ComponentQuery.query('#gridbidang')[0].getStore('RPJM.module.MasterData.Bidang.store.Bidang').reload();                   
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
                url     : BASE_URL + 'bidang/c_bidang/searchBidang',
                method  : 'POST',
                params  : {name : value},
                success : function(response){
                    var data    = Ext.JSON.decode(response.responseText);
                    if(data.success){
                            var storeApproval = Ext.getStore('RPJM.module.MasterData.Bidang.store.Bidang');
                            storeApproval.removeAll();
                            storeApproval.add(data.data);
                    }
                }
            });
    },

    print : function(){
        window.location = BASE_URL + 'bidang/c_bidang/printBidang/';
    },
})
