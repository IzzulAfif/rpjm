Ext.define('RPJM.module.MasterRpjm.BidangUrusanWajib.controller.BidangUrusanWajib', {
    extend  : 'Ext.app.Controller',
    CheckedDataEdit: [],

    init: function() {
        var me = this;
        me.getStore('RPJM.module.MasterRpjm.BidangUrusanWajib.store.SubUrusan2').load();
        me.getStore('RPJM.module.MasterRpjm.BidangUrusanWajib.store.BidangUrusanWajib').load();

        me.control({
            "gridbidangurusanwajib  button[action=delete]"      : {
                click: me.del
            }, 
            "#gridbidangurusanwajib"                            : {
               select: me.viewBidangUrusanWajib
            },   

            "#gridsuburusan"                                  : {
               select: me.viewBidangUrusanWajibDetail
            },            
            "bidangurusanwajib  button[action=save]"        : {
                click: me.save
            }, 
            "formbidangurusanwajib  button[action=reset]"       : {
                click: me.resetPanel
            },
            "gridbidangurusanwajiborg"                          : {
               itemdblclick: me.addorg
            },
            "gridsuburusan textfield[action=search]"          : {
               keypress: me.search
            },
            "gridbidangurusanwajib textfield[action=searchBidangUrusanWajib]"    : {
               keypress: me.searchBidangUrusanWajib
            },
            "gridbidangurusanwajib button[action=print]"        : {
               click: me.print
            },
            "bidangurusanwajib button[action=update]"       : {
               click: me.update
            }
        });
        me.callParent(arguments);
    },

    reloadStore: function(){
        var me = this;
        me.getStore('RPJM.module.MasterRpjm.BidangUrusanWajib.store.SubUrusan2').reload();
        me.getStore('RPJM.module.MasterRpjm.BidangUrusanWajib.store.BidangUrusanWajib').reload();
    },

    viewBidangUrusanWajib: function(grid, record, item, index, e, eOpts){
        var kode_urusan = record.data.kode_urusan;
        var form = Ext.getCmp('bidangurusanwajib');
        form.getForm().setValues(record.data);
    },

    viewBidangUrusanWajibDetail: function(grid, record, item, index, e, eOpts){
        var kode_suburusan  = record.data.kode_suburusan;
        var kode_urusan     = record.data.kode_urusan;
        var form            = Ext.getCmp('bidangurusanwajib');
        form.getForm().setValues(record.data);
        Ext.Ajax.request({
            url             : BASE_URL + 'bidangurusanwajib/c_bidangurusanwajib/getBidangUrusanWajibDetail',
            method          : 'POST',
            params          : {
                kode_suburusan  : Ext.JSON.encode(kode_suburusan),
                kode_urusan     : Ext.JSON.encode(kode_urusan)
            },
            success         : function(response){
                var data    = Ext.JSON.decode(response.responseText);
                var storeMenu = Ext.getStore('RPJM.module.MasterRpjm.BidangUrusanWajib.store.BidangUrusanWajib');
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

        var form             = Ext.getCmp('bidangurusanwajib').getForm();
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
                        url         : BASE_URL + 'bidangurusanwajib/c_bidangurusanwajib/delBidangUrusanWajib',
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
                                var form    = Ext.getCmp('bidangurusanwajib');
                                var grid    = Ext.getCmp('gridbidangurusanwajib');
                                form.getForm().reset();
                                me.resetPanel();
                                grid.getSelectionModel().deselectAll();
                                Ext.ComponentQuery.query('#gridbidangurusanwajib')[0].getStore('RPJM.module.MasterRpjm.BidangUrusanWajib.store.BidangUrusanWajib').reload();                             
                            } else {
                                Ext.MessageBox.show({
                                    title           : 'Informasi',
                                    msg             : 'Data Berhasil Dihapus',
                                    icon            : Ext.MessageBox.INFO,
                                    buttons         : Ext.MessageBox.OK
                                });
                                var form    = Ext.getCmp('bidangurusanwajib');
                                var grid    = Ext.getCmp('gridbidangurusanwajib');
                                form.getForm().reset();
                                me.resetPanel();
                                grid.getSelectionModel().deselectAll();
                                Ext.ComponentQuery.query('#gridbidangurusanwajib')[0].getStore('RPJM.module.MasterRpjm.BidangUrusanWajib.store.BidangUrusanWajib').reload(); 
                            }
                        }
                    });
                }
            }
        })
    },

    save : function(btn, evt, opts){
        var me                    = this;
        var form                  = Ext.getCmp('bidangurusanwajib').getForm();
        var kode_bidangrpjm       = form.findField('kode_bidangrpjm').getValue();
        var kode_suburusan        = form.findField('kode_suburusan').getValue();
        var nama_bidangrpjm       = form.findField('nama_bidangrpjm').getValue();
        var no_bidangrpjm         = form.findField('no_bidangrpjm').getValue(); 

        Ext.Ajax.request({
            headers : {'Content-Type':'multipart/form-data; charset=UTF-8'},
            url     : BASE_URL + 'bidangurusanwajib/c_bidangurusanwajib/saveBidangUrusanWajib',
            method  : 'GET',
            params  : {
                kode_suburusan        : kode_suburusan,
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
                    var form    = Ext.getCmp('bidangurusanwajib');
                    me.resetPanel();
                    Ext.ComponentQuery.query('#gridsuburusan')[0].getStore('RPJM.module.MasterRpjm.BidangUrusanWajib.store.SubUrusan').reload();
                    Ext.ComponentQuery.query('#gridbidangurusanwajib')[0].getStore('RPJM.module.MasterRpjm.BidangUrusanWajib.store.BidangUrusanWajib').reload();
                } else if(data.total === 2){
                    Ext.MessageBox.show({
                        title           : 'Error',
                        msg             : 'Bidang atau No Bidang Telah Terdaftar - Silahkan Gunakan SubUrusan Lain',
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
                    Ext.ComponentQuery.query('#gridsuburusan')[0].getStore('RPJM.module.MasterRpjm.BidangUrusanWajib.store.SubUrusan').reload();
                    Ext.ComponentQuery.query('#gridbidangurusanwajib')[0].getStore('RPJM.module.MasterRpjm.BidangUrusanWajib.store.BidangUrusanWajib').reload(); 
                }
            }                       
       }); 
    },

    update : function(btn, evt, opts){
        var me                    = this;
        var form                  = Ext.getCmp('bidangurusanwajib').getForm();
        var kode_bidangrpjm       = form.findField('kode_bidangrpjm').getValue();
        var kode_suburusan        = form.findField('kode_suburusan').getValue();
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
                        url     : BASE_URL + 'bidangurusanwajib/c_bidangurusanwajib/editBidangUrusanWajib',
                        method  : 'GET',
                        params  : {
                            kode_bidangrpjm     : kode_bidangrpjm, 
                            kode_suburusan      : kode_suburusan,
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
                                var form    = Ext.getCmp('bidangurusanwajib');
                                me.resetPanel();
                                Ext.ComponentQuery.query('#gridsuburusan')[0].getStore('RPJM.module.MasterRpjm.BidangUrusanWajib.store.SubUrusan').reload();
                                Ext.ComponentQuery.query('#gridbidangurusanwajib')[0].getStore('RPJM.module.MasterRpjm.BidangUrusanWajib.store.BidangUrusanWajib').reload();
                            } else if(data.total === 2){
                                Ext.MessageBox.show({
                                    title           : 'Error',
                                    msg             : 'Sub SubUrusan Atau Nomor SubUrusan Telah Terdaftar - Silahkan Gunakan SubUrusan Lain',
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
                                Ext.ComponentQuery.query('#gridsuburusan')[0].getStore('RPJM.module.MasterRpjm.BidangUrusanWajib.store.SubUrusan').reload();
                                Ext.ComponentQuery.query('#gridbidangurusanwajib')[0].getStore('RPJM.module.MasterRpjm.BidangUrusanWajib.store.BidangUrusanWajib').reload(); 
                            }
                        }      
                    });
                }
            }
        });
    },

    resetPanel: function(btn, gridPanel, selected) {//Reset Form
        var me                      = this;
        var form                    = Ext.getCmp('bidangurusanwajib');
        var gridsuburusan           = Ext.getCmp('gridsuburusan');
        var gridbidangurusanwajib   = Ext.getCmp('gridbidangurusanwajib');
        form.getForm().reset();
        // grid.getSelectionModel().clearSelections();
        gridsuburusan.getSelectionModel().clearSelections();
        gridbidangurusanwajib.getSelectionModel().clearSelections();
        me.getStore('RPJM.module.MasterRpjm.BidangUrusanWajib.store.SubUrusan2').reload();
        me.getStore('RPJM.module.MasterRpjm.BidangUrusanWajib.store.BidangUrusanWajib').reload();

    },

    search: function(field, evt, opts){
        var value           = field.getValue();
        Ext.Ajax.request({
            headers : {'Content-Type':'multipart/form-data; charset=UTF-8'},
            url     : BASE_URL + 'bidangurusanwajib/c_bidangurusanwajib/searchSubUrusan',
            method  : 'GET',
            params  : {
                name            : value
            },
            success : function(response){
                var data    = Ext.JSON.decode(response.responseText);
                if(data.success){
                        var storeApproval = Ext.ComponentQuery.query('#gridsuburusan')[0].getStore('RPJM.module.MasterRpjm.BidangUrusanWajib.store.SubUrusan');
                        storeApproval.removeAll();
                        storeApproval.add(data.data);
                }
            }
        });
    },

    searchBidangUrusanWajib: function(field, evt, opts){
        var value       = field.getValue();
        var form            = Ext.getCmp('bidangurusanwajib').getForm();
        var kode_suburusan  = form.findField('kode_suburusan').getValue();
        Ext.Ajax.request({
            headers : {'Content-Type':'multipart/form-data; charset=UTF-8'},
            url     : BASE_URL + 'bidangurusanwajib/c_bidangurusanwajib/searchBidangUrusanWajib',
            method  : 'GET',
            params  : {
                name            : value,
                kode_suburusan  : kode_suburusan
            },
            success : function(response){
                var data    = Ext.JSON.decode(response.responseText);
                if(data.success){
                        var storeApproval = Ext.getStore('RPJM.module.MasterRpjm.BidangUrusanWajib.store.BidangUrusanWajib');
                        storeApproval.removeAll();
                        storeApproval.add(data.data);
                }
            }
        });
    },

    print : function(){
        window.location = BASE_URL + 'gridbidangwajib/c_gridbidangwajib/printBidangUrusanWajib/';
    },
})
