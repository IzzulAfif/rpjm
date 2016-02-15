Ext.define('RPJM.module.MasterData.BidangSkpd.controller.BidangSkpd', {
    extend  : 'Ext.app.Controller',
    CheckedDataEdit: [],

    init: function() {
        var me = this;
        //me.getStore('RPJM.module.MasterData.BidangSkpd.store.BidangSkpd').load();
        me.control({
            "gridbidangskpd  button[action=delete]"          : {
                click: me.del
            }, 
            "#gridbidangskpd"                                 : {
               itemclick: me.viewBidangSkpd
            },            
            "formbidangskpd  button[action=save]"        : {
                click: me.save
            }, 
            "formbidangskpd  button[action=reset]"       : {
                click: me.resetPanel
            },
            "gridbidangskpdorg"                          : {
               itemdblclick: me.addorg
            },
            "gridbidangskpd textfield[action=search]"    : {
               keypress: me.search
            },
            "gridbidangskpd button[action=print]"        : {
               click: me.print
            },
            "formbidangskpd button[action=update]"       : {
               click: me.update
            }
        });
        me.callParent(arguments);
    },
    reloadStore: function(){
        var me = this;
        me.getStore('RPJM.module.MasterData.BidangSkpd.store.BidangSkpd').reload();
    },
    viewBidangSkpd: function(grid, record, item, index, e, eOpts){
        var id = record.data.id;
        var form = Ext.getCmp('formbidangskpd');
        var grid = Ext.getCmp('gridbidangskpd');
        form.getForm().setValues(record.data);

        var saveButton = form.down('button[action=save]');
        saveButton.setDisabled(true);
        console.log(updateBidangSkpd);

        if(updateBidangSkpd == false) {
            var updateButton = form.down('button[action=update]');
            updateButton.setDisabled(false);
        } else { 
            var updateButton = form.down('button[action=update]');
            updateButton.setDisabled(true);
        }
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

        Ext.MessageBox.show({
            title           : 'Konfirmasi',
            msg             : 'Anda yakin akan menghapus data yang terseleksi?',
            buttons         : Ext.Msg.YESNO,
            icon            : Ext.MessageBox.WARNING,
            width           : 450,
            fn              : function(btn, evtObj){
                if (btn == 'yes') {
                    Ext.Ajax.request({
                        url             : BASE_URL + 'bidangskpd/c_bidangskpd/delBidangSkpd',
                        method          : 'POST',
                        params          : {post : Ext.encode(me.CheckedDataEdit)},
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
                                var form    = Ext.getCmp('formbidangskpd');
                                var grid    = Ext.getCmp('gridbidangskpd');
                                form.getForm().reset();
                                me.resetPanel();
                                grid.getSelectionModel().deselectAll();
                                Ext.ComponentQuery.query('#gridbidangskpd')[0].getStore('RPJM.module.MasterData.BidangSkpd.store.BidangSkpd').reload();                             
                            } else {
                                var form    = Ext.getCmp('formbidangskpd');
                                var grid    = Ext.getCmp('gridbidangskpd');
                                form.getForm().reset();
                                me.resetPanel();
                                grid.getSelectionModel().deselectAll();
                                Ext.ComponentQuery.query('#gridbidangskpd')[0].getStore('RPJM.module.MasterData.BidangSkpd.store.BidangSkpd').reload(); 
                            }
                        }
                    });
                }
            }
        })
    },

    resetPanel: function(btn, gridPanel, selected) {//Reset Form
        var me = this;
        var form = Ext.getCmp('formbidangskpd');
        var grid = Ext.getCmp('gridbidangskpd');
        form.getForm().reset();

        if(createBidangSkpd == false){
            var saveButton = form.down('button[action=save]');
            saveButton.setDisabled(false);
        }else{
            var saveButton = form.down('button[action=save]');
            saveButton.setDisabled(true);
        }

        var updateButton = form.down('button[action=update]');
        updateButton.setDisabled(true);
        grid.getSelectionModel().clearSelections();
        me.getStore('RPJM.module.MasterData.BidangSkpd.store.BidangSkpd').reload();

    },
    save: function(btn, evt, opts){
        var me         = this;
        var form       = btn.up('form').getForm();
        var name_prov  = form.findField('name_prov').getValue();
        // console.log(role);

        Ext.Ajax.request({
            url     : BASE_URL + 'bidangskpd/c_bidangskpd/saveBidangSkpd',
            method  : 'POST',
            params  : {
                name_prov        : name_prov
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
                    var form    = Ext.getCmp('formbidangskpd');
                    var grid    = Ext.getCmp('gridbidangskpd');
                    form.getForm().reset();
                    me.resetPanel();
                    grid.getSelectionModel().deselectAll();
                    Ext.ComponentQuery.query('#gridbidangskpd')[0].getStore('RPJM.module.MasterData.BidangSkpd.store.BidangSkpd').reload(); 
                }else if (data.total === 2){
                    Ext.MessageBox.show({
                        title           : 'Error',
                        msg             : 'BidangSkpd Telah Terdaftar - Silahkan Gunakan BidangSkpd Lain',
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
                    var form    = Ext.getCmp('formbidangskpd');
                    var grid    = Ext.getCmp('gridbidangskpd');
                    form.getForm().reset();
                    me.resetPanel();
                    grid.getSelectionModel().deselectAll();
                    Ext.ComponentQuery.query('#gridbidangskpd')[0].getStore('RPJM.module.MasterData.BidangSkpd.store.BidangSkpd').reload();                   
                }
            }
        });   
    },
    update: function(btn, evt, opts){
        var me             = this;
        var form           = btn.up('form').getForm();
                // console.log(form);
        var id             = form.findField('id').getValue();
        var name_prov      = form.findField('name_prov').getValue();
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
                        url     : BASE_URL + 'bidangskpd/c_bidangskpd/editBidangSkpd',
                        method  : 'POST',
                        params  : {
                            id           : id,
                            name_prov    : name_prov
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
                                var form    = Ext.getCmp('formbidangskpd');
                                var grid    = Ext.getCmp('gridbidangskpd');
                                form.getForm().reset();
                                me.resetPanel();
                                grid.getSelectionModel().deselectAll();
                                Ext.ComponentQuery.query('#gridbidangskpd')[0].getStore('RPJM.module.MasterData.BidangSkpd.store.BidangSkpd').reload(); 
                            }else if (data.total === 2){
                                Ext.MessageBox.show({
                                    title           : 'Error',
                                    msg             : 'BidangSkpd Telah Terdaftar - Silahkan Gunakan BidangSkpd Lain',
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
                                var form    = Ext.getCmp('formbidangskpd');
                                var grid    = Ext.getCmp('gridbidangskpd');
                                form.getForm().reset();
                                me.resetPanel();
                                grid.getSelectionModel().deselectAll();
                                Ext.ComponentQuery.query('#gridbidangskpd')[0].getStore('RPJM.module.MasterData.BidangSkpd.store.BidangSkpd').reload();                   
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
                url     : BASE_URL + 'bidangskpd/c_bidangskpd/searchBidangSkpd',
                method  : 'POST',
                params  : {name : value},
                success : function(response){
                    var data    = Ext.JSON.decode(response.responseText);
                    if(data.success){
                            var storeApproval = Ext.getStore('RPJM.module.MasterData.BidangSkpd.store.BidangSkpd');
                            storeApproval.removeAll();
                            storeApproval.add(data.data);
                    }
                }
            });
    },

    print : function(){
        window.location = BASE_URL + 'bidangskpd/c_bidangskpd/printBidangSkpd/';
    },
})
