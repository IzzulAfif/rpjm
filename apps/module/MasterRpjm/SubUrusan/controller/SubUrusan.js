Ext.define('RPJM.module.MasterRpjm.SubUrusan.controller.SubUrusan', {
    extend  : 'Ext.app.Controller',
    CheckedDataEdit: [],

    init: function() {
        var me = this;
        me.getStore('RPJM.module.MasterRpjm.SubUrusan.store.Urusan').load();
        me.getStore('RPJM.module.MasterRpjm.SubUrusan.store.SubUrusan').load();

        me.control({
            "gridsuburusan  button[action=delete]"      : {
                click: me.del
            }, 
            "#gridsuburusan"                            : {
               select: me.viewSubUrusan
            },   

            "#gridurusan"                            : {
               select: me.viewSubUrusanDetail
            },            
            "formsuburusan  button[action=save]"        : {
                click: me.save
            }, 
            "formsuburusan  button[action=reset]"       : {
                click: me.resetPanel
            },
            "gridsuburusanorg"                          : {
               itemdblclick: me.addorg
            },
            "gridurusan textfield[action=search]"    : {
               keypress: me.search
            },
            "gridsuburusan textfield[action=searchSubUrusan]"    : {
               keypress: me.searchSubUrusan
            },
            "gridsuburusan button[action=print]"        : {
               click: me.print
            },
            "formsuburusan button[action=update]"       : {
               click: me.update
            }
        });
        me.callParent(arguments);
    },

    reloadStore: function(){
        var me = this;
        me.getStore('RPJM.module.MasterRpjm.SubUrusan.store.Urusan').reload();
        me.getStore('RPJM.module.MasterRpjm.SubUrusan.store.SubUrusan').reload();
    },

    viewSubUrusan: function(grid, record, item, index, e, eOpts){
        var kode_urusan = record.data.kode_urusan;
        var form = Ext.getCmp('suburusan');
        form.getForm().setValues(record.data);

    },

    viewSubUrusanDetail: function(grid, record, item, index, e, eOpts){
        var kode_urusan =  record.data.kode_urusan;
        var form = Ext.getCmp('suburusan');
        form.getForm().setValues(record.data);
        Ext.Ajax.request({
            url             : BASE_URL + 'suburusan/c_suburusan/getSubUrusanDetail',
            method          : 'POST',
            params          : {post : Ext.encode(kode_urusan)},
            success         : function(response){
                var data    = Ext.JSON.decode(response.responseText);
                var storeMenu = Ext.getStore('RPJM.module.MasterRpjm.SubUrusan.store.SubUrusan');
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

        var form            = Ext.getCmp('formsuburusan').getForm();
        var kode_suburusan  = form.findField('kode_suburusan').getValue();

        /*======== DELETE DATA PARAMETER =========*/
        var form             = Ext.getCmp('formsuburusan').getForm();
        var kode_suburusan   = form.findField('kode_suburusan').getValue();
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
                        url         : BASE_URL + 'suburusan/c_suburusan/delSubUrusan',
                        method      : 'GET',
                        params      : {
                            kode_suburusan : kode_suburusan
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
                                var form    = Ext.getCmp('formsuburusan');
                                var grid    = Ext.getCmp('gridsuburusan');
                                form.getForm().reset();
                                me.resetPanel();
                                grid.getSelectionModel().deselectAll();
                                Ext.ComponentQuery.query('#gridsuburusan')[0].getStore('RPJM.module.MasterRpjm.SubUrusan.store.SubUrusan').reload();                             
                            } else {
                                Ext.MessageBox.show({
                                    title           : 'Informasi',
                                    msg             : 'Data Berhasil Dihapus',
                                    icon            : Ext.MessageBox.INFO,
                                    buttons         : Ext.MessageBox.OK
                                });
                                var form    = Ext.getCmp('formsuburusan');
                                var grid    = Ext.getCmp('gridsuburusan');
                                form.getForm().reset();
                                me.resetPanel();
                                grid.getSelectionModel().deselectAll();
                                Ext.ComponentQuery.query('#gridsuburusan')[0].getStore('RPJM.module.MasterRpjm.SubUrusan.store.SubUrusan').reload(); 
                            }
                        }
                    });
                }
            }
        })
    },

    save : function(btn, evt, opts){
        var me              = this;
        var form            = Ext.getCmp('formsuburusan').getForm();
        var kode_urusan     = form.findField('kode_urusan').getValue();
        var kode_suburusan  = form.findField('kode_suburusan').getValue();
        var nama_suburusan  = form.findField('nama_suburusan').getValue();
        var no_suburusan    = form.findField('no_suburusan').getValue(); 

        Ext.Ajax.request({
            headers : {'Content-Type':'multipart/form-data; charset=UTF-8'},
            url     : BASE_URL + 'suburusan/c_suburusan/saveSubUrusan',
            method  : 'GET',
            params  : {
                kode_urusan     : kode_urusan,
                nama_suburusan  : nama_suburusan,
                no_suburusan    : no_suburusan
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
                    var form    = Ext.getCmp('formsuburusan');
                    me.resetPanel();
                    Ext.ComponentQuery.query('#gridurusan')[0].getStore('RPJM.module.MasterRpjm.SubUrusan.store.Urusan').reload();
                    Ext.ComponentQuery.query('#gridsuburusan')[0].getStore('RPJM.module.MasterRpjm.SubUrusan.store.SubUrusan').reload();
                } else if(data.total === 2){
                    Ext.MessageBox.show({
                        title           : 'Error',
                        msg             : 'Sub Urusan Atau Nomor Urusan Telah Terdaftar - Silahkan Gunakan Urusan Lain',
                        icon            : Ext.MessageBox.ERROR,
                        buttons         : Ext.MessageBox.OK
                    });
                } else if (data.total === 3) {
                    Ext.MessageBox.show({
                        title           : 'Error',
                        msg             : 'Urusan Pemerintahan Pilihan Langsung Ke Bidang',
                        icon            : Ext.MessageBox.ERROR,
                        buttons         : Ext.MessageBox.OK
                    });
                    me.resetPanel();
                    Ext.ComponentQuery.query('#gridurusan')[0].getStore('RPJM.module.MasterRpjm.SubUrusan.store.Urusan').reload();
                    Ext.ComponentQuery.query('#gridsuburusan')[0].getStore('RPJM.module.MasterRpjm.SubUrusan.store.SubUrusan').reload(); 
                } else {
                    Ext.MessageBox.show({
                        title           : 'Error',
                        msg             : 'Pengisian Data Salah',
                        icon            : Ext.MessageBox.ERROR,
                        buttons         : Ext.MessageBox.OK
                    });
                    me.resetPanel();
                    Ext.ComponentQuery.query('#gridurusan')[0].getStore('RPJM.module.MasterRpjm.SubUrusan.store.Urusan').reload();
                    Ext.ComponentQuery.query('#gridsuburusan')[0].getStore('RPJM.module.MasterRpjm.SubUrusan.store.SubUrusan').reload(); 
                }
            }                       
       }); 
    },

    update : function(btn, evt, opts){
        var me              = this;
        var form            = Ext.getCmp('formsuburusan').getForm();
        var kode_urusan     = form.findField('kode_urusan').getValue();
        var kode_suburusan  = form.findField('kode_suburusan').getValue();
        var nama_suburusan  = form.findField('nama_suburusan').getValue();
        var no_suburusan    = form.findField('no_suburusan').getValue();
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
                        url     : BASE_URL + 'suburusan/c_suburusan/editSubUrusan',
                        method  : 'GET',
                        params  : {
                            kode_urusan     : kode_urusan, 
                            kode_suburusan  : kode_suburusan,
                            nama_suburusan  : nama_suburusan,
                            no_suburusan    : no_suburusan
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
                                var form    = Ext.getCmp('formsuburusan');
                                me.resetPanel();
                                Ext.ComponentQuery.query('#gridurusan')[0].getStore('RPJM.module.MasterRpjm.SubUrusan.store.Urusan').reload();
                                Ext.ComponentQuery.query('#gridsuburusan')[0].getStore('RPJM.module.MasterRpjm.SubUrusan.store.SubUrusan').reload();
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
                                Ext.ComponentQuery.query('#gridurusan')[0].getStore('RPJM.module.MasterRpjm.SubUrusan.store.Urusan').reload();
                                Ext.ComponentQuery.query('#gridsuburusan')[0].getStore('RPJM.module.MasterRpjm.SubUrusan.store.SubUrusan').reload(); 
                            }
                        }      
                    });
                }
            }
        });
    },

    resetPanel: function(btn, gridPanel, selected) {//Reset Form
        var me = this;
        var form = Ext.getCmp('formsuburusan');
        var gridurusan = Ext.getCmp('gridurusan');
        var gridsuburusan = Ext.getCmp('gridsuburusan');
        form.getForm().reset();
        // grid.getSelectionModel().clearSelections();
        gridurusan.getSelectionModel().clearSelections();
        gridsuburusan.getSelectionModel().clearSelections();
        me.getStore('RPJM.module.MasterRpjm.SubUrusan.store.Urusan').reload();
        me.getStore('RPJM.module.MasterRpjm.SubUrusan.store.SubUrusan').reload();

    },

    search: function(field, evt, opts){
        var value       = field.getValue();
        Ext.Ajax.request({
            headers : {'Content-Type':'multipart/form-data; charset=UTF-8'},
            url     : BASE_URL + 'suburusan/c_suburusan/searchUrusan',
            method  : 'GET',
            params  : {name : value},
            success : function(response){
                var data    = Ext.JSON.decode(response.responseText);
                if(data.success){
                        var storeApproval = Ext.ComponentQuery.query('#gridurusan')[0].getStore('RPJM.module.MasterRpjm.SubUrusan.store.Urusan');
                        storeApproval.removeAll();
                        storeApproval.add(data.data);
                }
            }
        });
    },

    searchSubUrusan: function(field, evt, opts){
        var value       = field.getValue();
        Ext.Ajax.request({
            headers : {'Content-Type':'multipart/form-data; charset=UTF-8'},
            url     : BASE_URL + 'suburusan/c_suburusan/searchSubUrusan',
            method  : 'GET',
            params  : {name : value},
            success : function(response){
                var data    = Ext.JSON.decode(response.responseText);
                if(data.success){
                        var storeApproval = Ext.getStore('RPJM.module.MasterRpjm.SubUrusan.store.SubUrusan');
                        storeApproval.removeAll();
                        storeApproval.add(data.data);
                }
            }
        });
    },

    print : function(){
        window.location = BASE_URL + 'suburusan/c_suburusan/printSubUrusan/';
    },
})
