Ext.define('RPJM.module.MasterRpjm.BidangUrusanPilihan.controller.BidangUrusanPilihan', {
    extend  : 'Ext.app.Controller',
    CheckedDataEdit: [],

    init: function() {
        var me = this;
        me.getStore('RPJM.module.MasterRpjm.BidangUrusanPilihan.store.Urusan2').load();
        me.getStore('RPJM.module.MasterRpjm.BidangUrusanPilihan.store.BidangUrusanPilihan').load();

        me.control({
            "gridbidangurusanpilihan  button[action=delete]"      : {
                click: me.del
            }, 
            "#gridbidangurusanpilihan"                            : {
               select: me.viewBidangUrusanPilihan
            },   

            "#gridurusan"                                  : {
               select: me.viewBidangUrusanPilihanDetail
            },            
            "bidangurusanpilihan  button[action=save]"        : {
                click: me.save
            }, 
            "formbidangurusanpilihan  button[action=reset]"       : {
                click: me.resetPanel
            },
            "gridbidangurusanpilihanorg"                          : {
               itemdblclick: me.addorg
            },
            "gridurusan textfield[action=search]"          : {
               keypress: me.search
            },
            "gridbidangurusanpilihan textfield[action=searchBidangUrusanPilihan]"    : {
               keypress: me.searchBidangUrusanPilihan
            },
            "gridbidangurusanpilihan button[action=print]"        : {
               click: me.print
            },
            "bidangurusanpilihan button[action=update]"       : {
               click: me.update
            }
        });
        me.callParent(arguments);
    },

    reloadStore: function(){
        var me = this;
        me.getStore('RPJM.module.MasterRpjm.BidangUrusanPilihan.store.Urusan2').reload();
        me.getStore('RPJM.module.MasterRpjm.BidangUrusanPilihan.store.BidangUrusanPilihan').reload();
    },

    viewBidangUrusanPilihan: function(grid, record, item, index, e, eOpts){
        var kode_urusan = record.data.kode_urusan;
        var form = Ext.getCmp('bidangurusanpilihan');
        form.getForm().setValues(record.data);
    },

    viewBidangUrusanPilihanDetail: function(grid, record, item, index, e, eOpts){
        var kode_urusan  = record.data.kode_urusan;
        var form            = Ext.getCmp('bidangurusanpilihan');
        form.getForm().setValues(record.data);
        Ext.Ajax.request({
            url             : BASE_URL + 'bidangurusanpilihan/c_bidangurusanpilihan/getBidangUrusanPilihanDetail',
            method          : 'POST',
            params          : {
                kode_urusan : Ext.JSON.encode(kode_urusan)
            },
            success         : function(response){
                var data    = Ext.JSON.decode(response.responseText);
                var storeMenu = Ext.getStore('RPJM.module.MasterRpjm.BidangUrusanPilihan.store.BidangUrusanPilihan');
                storeMenu.loadData([],false);
                storeMenu.add(data.data);
            }
        });
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

        var form             = Ext.getCmp('bidangurusanpilihan').getForm();
        var kode_bidangrpjm  = form.findField('kode_bidangrpjm').getValue();

        Ext.MessageBox.show({
            title           : 'Konfirmasi',
            msg             : 'Anda yakin akan menghapus data yang terseleksi?',
            buttons         : Ext.Msg.YESNO,
            icon            : Ext.MessageBox.WARNING,
            width           : 450,
            fn              : function(btn, evtObj){
                if (btn == 'yes') {
                    Ext.Ajax.request({
                        headers     : {'Content-Type':'multipart/form-data; charset=UTF-8'},
                        url         : BASE_URL + 'bidangurusanpilihan/c_bidangurusanpilihan/delBidangUrusanPilihan',
                        method      : 'GET',
                        params      : {
                            kode_bidangrpjm : kode_bidangrpjm
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
                                var form    = Ext.getCmp('bidangurusanpilihan');
                                var grid    = Ext.getCmp('gridbidangurusanpilihan');
                                form.getForm().reset();
                                me.resetPanel();
                                grid.getSelectionModel().deselectAll();
                                Ext.ComponentQuery.query('#gridbidangurusanpilihan')[0].getStore('RPJM.module.MasterRpjm.BidangUrusanPilihan.store.BidangUrusanPilihan').reload();                             
                            } else {
                                Ext.MessageBox.show({
                                    title           : 'Informasi',
                                    msg             : 'Data Berhasil Dihapus',
                                    icon            : Ext.MessageBox.INFO,
                                    buttons         : Ext.MessageBox.OK
                                });
                                var form    = Ext.getCmp('bidangurusanpilihan');
                                var grid    = Ext.getCmp('gridbidangurusanpilihan');
                                form.getForm().reset();
                                me.resetPanel();
                                grid.getSelectionModel().deselectAll();
                                Ext.ComponentQuery.query('#gridbidangurusanpilihan')[0].getStore('RPJM.module.MasterRpjm.BidangUrusanPilihan.store.BidangUrusanPilihan').reload(); 
                            }
                        }
                    });
                }
            }
        })
    },

    save : function(btn, evt, opts){
        var me                    = this;
        var form                  = Ext.getCmp('bidangurusanpilihan').getForm();
        var kode_bidangrpjm       = form.findField('kode_bidangrpjm').getValue();
        var kode_urusan        = form.findField('kode_urusan').getValue();
        var nama_bidangrpjm       = form.findField('nama_bidangrpjm').getValue();
        var no_bidangrpjm         = form.findField('no_bidangrpjm').getValue(); 

        Ext.Ajax.request({
            headers : {'Content-Type':'multipart/form-data; charset=UTF-8'},
            url     : BASE_URL + 'bidangurusanpilihan/c_bidangurusanpilihan/saveBidangUrusanPilihan',
            method  : 'GET',
            params  : {
                kode_urusan        : kode_urusan,
                nama_bidangrpjm       : nama_bidangrpjm,
                no_bidangrpjm         : no_bidangrpjm
            },
            waitMsg: 'Please Wait Data is Processing',
            success : function(response){
                var data    = Ext.JSON.decode(response.responseText);
                if(data.total === 1){
                    Ext.MessageBox.show({
                        title           : 'Informasi',
                        msg             : 'Data Telah Tersimpan',
                        icon            : Ext.MessageBox.INFO,
                        buttons         : Ext.MessageBox.OK
                    });
                    var form    = Ext.getCmp('bidangurusanpilihan');
                    me.resetPanel();
                    Ext.ComponentQuery.query('#gridurusan')[0].getStore('RPJM.module.MasterRpjm.BidangUrusanPilihan.store.Urusan').reload();
                    Ext.ComponentQuery.query('#gridbidangurusanpilihan')[0].getStore('RPJM.module.MasterRpjm.BidangUrusanPilihan.store.BidangUrusanPilihan').reload();
                } else if(data.total === 2){
                    Ext.MessageBox.show({
                        title           : 'Error',
                        msg             : 'Bidang atau No Bidang Telah Terdaftar - Silahkan Gunakan Urusan Lain',
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
                    me.resetPanel();
                    Ext.ComponentQuery.query('#gridurusan')[0].getStore('RPJM.module.MasterRpjm.BidangUrusanPilihan.store.Urusan').reload();
                    Ext.ComponentQuery.query('#gridbidangurusanpilihan')[0].getStore('RPJM.module.MasterRpjm.BidangUrusanPilihan.store.BidangUrusanPilihan').reload(); 
                }
            }                       
       }); 
    },

    update : function(btn, evt, opts){
        var me                    = this;
        var form                  = Ext.getCmp('bidangurusanpilihan').getForm();
        var kode_bidangrpjm       = form.findField('kode_bidangrpjm').getValue();
        var kode_urusan        = form.findField('kode_urusan').getValue();
        var nama_bidangrpjm       = form.findField('nama_bidangrpjm').getValue();
        var no_bidangrpjm         = form.findField('no_bidangrpjm').getValue(); 
        Ext.MessageBox.show({
            title   : 'Konfirmasi',
            msg     : 'Anda Yakin Merubah Data',
            buttons : Ext.Msg.YESNO,
            icon    : Ext.MessageBox.WARNING,
            width   : 500,
            fn      : function(btn,evtObj){
                if(btn == 'yes'){
                    Ext.Ajax.request({
                        headers : {'Content-Type':'multipart/form-data; charset=UTF-8'},
                        url     : BASE_URL + 'bidangurusanpilihan/c_bidangurusanpilihan/editBidangUrusanPilihan',
                        method  : 'GET',
                        params  : {
                            kode_bidangrpjm     : kode_bidangrpjm, 
                            kode_urusan      : kode_urusan,
                            nama_bidangrpjm     : nama_bidangrpjm,
                            no_bidangrpjm       : no_bidangrpjm
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
                                var form    = Ext.getCmp('bidangurusanpilihan');
                                me.resetPanel();
                                Ext.ComponentQuery.query('#gridurusan')[0].getStore('RPJM.module.MasterRpjm.BidangUrusanPilihan.store.Urusan').reload();
                                Ext.ComponentQuery.query('#gridbidangurusanpilihan')[0].getStore('RPJM.module.MasterRpjm.BidangUrusanPilihan.store.BidangUrusanPilihan').reload();
                            } else if(data.total === 2){
                                Ext.MessageBox.show({
                                    title           : 'Error',
                                    msg             : 'Sub Urusan Atau Nomor Urusan Telah Terdaftar - Silahkan Gunakan Urusan Lain',
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
                                me.resetPanel();
                                Ext.ComponentQuery.query('#gridurusan')[0].getStore('RPJM.module.MasterRpjm.BidangUrusanPilihan.store.Urusan').reload();
                                Ext.ComponentQuery.query('#gridbidangurusanpilihan')[0].getStore('RPJM.module.MasterRpjm.BidangUrusanPilihan.store.BidangUrusanPilihan').reload(); 
                            }
                        }      
                    });
                }
            }
        });
    },

    resetPanel: function(btn, gridPanel, selected) {//Reset Form
        var me                      = this;
        var form                    = Ext.getCmp('bidangurusanpilihan');
        var gridurusan              = Ext.getCmp('gridurusan');
        var gridbidangurusanpilihan = Ext.getCmp('gridbidangurusanpilihan');
        form.getForm().reset();
        // grid.getSelectionModel().clearSelections();
        gridurusan.getSelectionModel().clearSelections();
        gridbidangurusanpilihan.getSelectionModel().clearSelections();
        me.getStore('RPJM.module.MasterRpjm.BidangUrusanPilihan.store.Urusan2').reload();
        me.getStore('RPJM.module.MasterRpjm.BidangUrusanPilihan.store.BidangUrusanPilihan').reload();

    },

    search: function(field, evt, opts){
        var value           = field.getValue();
        var form            = Ext.getCmp('bidangurusanpilihan').getForm();
        var kode_urusan  = form.findField('kode_urusan').getValue();
        Ext.Ajax.request({
            headers : {'Content-Type':'multipart/form-data; charset=UTF-8'},
            url     : BASE_URL + 'bidangurusanpilihan/c_bidangurusanpilihan/searchUrusan',
            method  : 'GET',
            params  : {
                name            : value,
                kode_urusan  : kode_urusan
            },
            success : function(response){
                var data    = Ext.JSON.decode(response.responseText);
                if(data.success){
                        var storeApproval = Ext.ComponentQuery.query('#gridurusan')[0].getStore('RPJM.module.MasterRpjm.BidangUrusanPilihan.store.Urusan');
                        storeApproval.removeAll();
                        storeApproval.add(data.data);
                }
            }
        });
    },

    searchBidangUrusanPilihan: function(field, evt, opts){
        var value       = field.getValue();
        Ext.Ajax.request({
            headers : {'Content-Type':'multipart/form-data; charset=UTF-8'},
            url     : BASE_URL + 'bidangurusanpilihan/c_bidangurusanpilihan/searchBidangUrusanPilihan',
            method  : 'GET',
            params  : {name : value},
            success : function(response){
                var data    = Ext.JSON.decode(response.responseText);
                if(data.success){
                        var storeApproval = Ext.getStore('RPJM.module.MasterRpjm.BidangUrusanPilihan.store.BidangUrusanPilihan');
                        storeApproval.removeAll();
                        storeApproval.add(data.data);
                }
            }
        });
    },

    print : function(){
        window.location = BASE_URL + 'gridbidangpilihan/c_gridbidangpilihan/printBidangUrusanPilihan/';
    },
})
