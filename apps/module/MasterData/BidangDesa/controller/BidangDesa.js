Ext.define('RPJM.module.MasterData.BidangDesa.controller.BidangDesa', {
    extend  : 'Ext.app.Controller',
    CheckedDataEdit: [],

    init: function() {
        var me = this;
        me.getStore('RPJM.module.MasterData.BidangDesa.store.BidangDesa').load();
        me.control({
            "gridbidangdesa  button[action=delete]"          : {
                click: me.del
            }, 
            "#gridbidangdesa"                                 : {
               select: me.viewBidangDesa
            },            
            "formbidangdesa  button[action=save]"        : {
                click: me.save
            }, 
            "formbidangdesa  button[action=reset]"       : {
                click: me.resetPanel
            },
            "gridbidangdesaorg"                          : {
               itemdblclick: me.addorg
            },
            "gridbidangdesa textfield[action=search]"    : {
               keypress: me.search
            },
            "gridbidangdesa button[action=print]"        : {
               click: me.print
            },
            "formbidangdesa button[action=update]"       : {
               click: me.update
            }
        });
        me.callParent(arguments);
    },

    reloadStore: function(){
        var me = this;
        me.getStore('RPJM.module.MasterData.BidangDesa.store.BidangDesa').reload();
    },

    viewBidangDesa: function(grid, record, item, index, e, eOpts){
        var id = record.data.id;
        var form = Ext.getCmp('formbidangdesa');
        var grid = Ext.getCmp('gridbidangdesa');
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
        var form       = Ext.getCmp('formbidangdesa').getForm();
        var kode_bidangdesa  = form.findField('kode_bidangdesa').getValue();

        Ext.MessageBox.show({
            title           : 'Konfirmasi',
            msg             : 'Anda yakin akan menghapus data yang terseleksi?',
            buttons         : Ext.Msg.YESNO,
            icon            : Ext.MessageBox.WARNING,
            width           : 450,
            fn              : function(btn, evtObj){
                if (btn == 'yes') {
                    Ext.Ajax.request({
                        url             : BASE_URL + 'bidangdesa/c_bidangdesa/delBidangDesa',
                        method          : 'POST',
                        params          : {
                            kode_bidangdesa   : kode_bidangdesa
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
                                var form    = Ext.getCmp('formbidangdesa');
                                var grid    = Ext.getCmp('gridbidangdesa');
                                form.getForm().reset();
                                me.resetPanel();
                                grid.getSelectionModel().deselectAll();
                                Ext.ComponentQuery.query('#gridbidangdesa')[0].getStore('RPJM.module.MasterData.BidangDesa.store.BidangDesa').reload();                             
                            } else {
                                var form    = Ext.getCmp('formbidangdesa');
                                var grid    = Ext.getCmp('gridbidangdesa');
                                form.getForm().reset();
                                me.resetPanel();
                                grid.getSelectionModel().deselectAll();
                                Ext.ComponentQuery.query('#gridbidangdesa')[0].getStore('RPJM.module.MasterData.BidangDesa.store.BidangDesa').reload(); 
                            }
                        }
                    });
                }
            }
        })
    },

    resetPanel: function(btn, gridPanel, selected) {//Reset Form
        var me = this;
        var form = Ext.getCmp('formbidangdesa');
        var grid = Ext.getCmp('gridbidangdesa');
        form.getForm().reset();

        grid.getSelectionModel().clearSelections();
        me.getStore('RPJM.module.MasterData.BidangDesa.store.BidangDesa').reload();

    },

    save: function(btn, evt, opts){
        var me         = this;
        var form       = btn.up('form').getForm();
        var kode_bidangdesa  = form.findField('kode_bidangdesa').getValue();
        var bidangdesa   = form.findField('bidangdesa').getValue();

        Ext.Ajax.request({
            url     : BASE_URL + 'bidangdesa/c_bidangdesa/saveBidangDesa',
            method  : 'POST',
            params  : {
                kode_bidangdesa   : kode_bidangdesa,
                bidangdesa    : bidangdesa
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
                    var form    = Ext.getCmp('formbidangdesa');
                    var grid    = Ext.getCmp('gridbidangdesa');
                    form.getForm().reset();
                    me.resetPanel();
                    grid.getSelectionModel().deselectAll();
                    Ext.ComponentQuery.query('#gridbidangdesa')[0].getStore('RPJM.module.MasterData.BidangDesa.store.BidangDesa').reload(); 
                }else if (data.total === 2){
                    Ext.MessageBox.show({
                        title           : 'Error',
                        msg             : 'BidangDesa Telah Terdaftar - Silahkan Gunakan BidangDesa Lain',
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
                    var form    = Ext.getCmp('formbidangdesa');
                    var grid    = Ext.getCmp('gridbidangdesa');
                    form.getForm().reset();
                    me.resetPanel();
                    grid.getSelectionModel().deselectAll();
                    Ext.ComponentQuery.query('#gridbidangdesa')[0].getStore('RPJM.module.MasterData.BidangDesa.store.BidangDesa').reload();                   
                }
            }
        });   
    },

    update: function(btn, evt, opts){
        var me             = this;
        var form           = btn.up('form').getForm();
        var id             = form.findField('id').getValue();
        var kode_bidangdesa  = form.findField('kode_bidangdesa').getValue();
        var bidangdesa   = form.findField('bidangdesa').getValue();
        Ext.MessageBox.show({
            title           : 'Konfirmasi',
            msg             : 'Anda yakin akan merubah data?',
            buttons         : Ext.Msg.YESNO,
            icon            : Ext.MessageBox.WARNING,
            width           : 450,
            fn              : function(btn, evtObj){
                if (btn == 'yes') {
                    Ext.Ajax.request({
                        url     : BASE_URL + 'bidangdesa/c_bidangdesa/editBidangDesa',
                        method  : 'POST',
                        params  : {
                            id          : id,
                            kode_bidangdesa   : kode_bidangdesa,
                            bidangdesa    : bidangdesa
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
                                var form    = Ext.getCmp('formbidangdesa');
                                var grid    = Ext.getCmp('gridbidangdesa');
                                form.getForm().reset();
                                me.resetPanel();
                                grid.getSelectionModel().deselectAll();
                                Ext.ComponentQuery.query('#gridbidangdesa')[0].getStore('RPJM.module.MasterData.BidangDesa.store.BidangDesa').reload(); 
                            }else if (data.total === 2){
                                Ext.MessageBox.show({
                                    title           : 'Error',
                                    msg             : 'BidangDesa Telah Terdaftar - Silahkan Gunakan BidangDesa Lain',
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
                                var form    = Ext.getCmp('formbidangdesa');
                                var grid    = Ext.getCmp('gridbidangdesa');
                                form.getForm().reset();
                                me.resetPanel();
                                grid.getSelectionModel().deselectAll();
                                Ext.ComponentQuery.query('#gridbidangdesa')[0].getStore('RPJM.module.MasterData.BidangDesa.store.BidangDesa').reload();                   
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
            url     : BASE_URL + 'bidangdesa/c_bidangdesa/searchBidangDesa',
            method  : 'POST',
            params  : {name : value},
            success : function(response){
                var data    = Ext.JSON.decode(response.responseText);
                if(data.success){
                        var storeApproval = Ext.getStore('RPJM.module.MasterData.BidangDesa.store.BidangDesa');
                        storeApproval.removeAll();
                        storeApproval.add(data.data);
                }
            }
        });
    },

    print : function(){
        window.location = BASE_URL + 'bidangdesa/c_bidangdesa/printBidangDesa/';
    },
})
