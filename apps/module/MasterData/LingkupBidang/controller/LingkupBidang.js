Ext.define('RPJM.module.MasterData.LingkupBidang.controller.LingkupBidang', {
    extend  : 'Ext.app.Controller',
    CheckedDataEdit: [],

    init: function() {
        var me = this;
        //me.getStore('RPJM.module.MasterData.LingkupBidang.store.LingkupBidang').load();
        me.control({
            "gridlingkupbidang  button[action=delete]"          : {
                click: me.del
            }, 
            "#gridlingkupbidang"                                 : {
               itemclick: me.viewLingkupBidang
            },            
            "formlingkupbidang  button[action=save]"        : {
                click: me.save
            }, 
            "formlingkupbidang  button[action=reset]"       : {
                click: me.resetPanel
            },
            "gridlingkupbidangorg"                          : {
               itemdblclick: me.addorg
            },
            "gridlingkupbidang textfield[action=search]"    : {
               keypress: me.search
            },
            "gridlingkupbidang button[action=print]"        : {
               click: me.print
            },
            "formlingkupbidang button[action=update]"       : {
               click: me.update
            }
        });
        me.callParent(arguments);
    },
    reloadStore: function(){
        var me = this;
        me.getStore('RPJM.module.MasterData.LingkupBidang.store.LingkupBidang').reload();
    },
    viewLingkupBidang: function(grid, record, item, index, e, eOpts){
        var id = record.data.id;
        var form = Ext.getCmp('formlingkupbidang');
        var grid = Ext.getCmp('gridlingkupbidang');
        form.getForm().setValues(record.data);

        var saveButton = form.down('button[action=save]');
        saveButton.setDisabled(true);
        console.log(updateLingkupBidang);

        if(updateLingkupBidang == false) {
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
                        url             : BASE_URL + 'lingkupbidang/c_lingkupbidang/delLingkupBidang',
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
                                var form    = Ext.getCmp('formlingkupbidang');
                                var grid    = Ext.getCmp('gridlingkupbidang');
                                form.getForm().reset();
                                me.resetPanel();
                                grid.getSelectionModel().deselectAll();
                                Ext.ComponentQuery.query('#gridlingkupbidang')[0].getStore('RPJM.module.MasterData.LingkupBidang.store.LingkupBidang').reload();                             
                            } else {
                                var form    = Ext.getCmp('formlingkupbidang');
                                var grid    = Ext.getCmp('gridlingkupbidang');
                                form.getForm().reset();
                                me.resetPanel();
                                grid.getSelectionModel().deselectAll();
                                Ext.ComponentQuery.query('#gridlingkupbidang')[0].getStore('RPJM.module.MasterData.LingkupBidang.store.LingkupBidang').reload(); 
                            }
                        }
                    });
                }
            }
        })
    },

    resetPanel: function(btn, gridPanel, selected) {//Reset Form
        var me = this;
        var form = Ext.getCmp('formlingkupbidang');
        var grid = Ext.getCmp('gridlingkupbidang');
        form.getForm().reset();

        if(createLingkupBidang == false){
            var saveButton = form.down('button[action=save]');
            saveButton.setDisabled(false);
        }else{
            var saveButton = form.down('button[action=save]');
            saveButton.setDisabled(true);
        }

        var updateButton = form.down('button[action=update]');
        updateButton.setDisabled(true);
        grid.getSelectionModel().clearSelections();
        me.getStore('RPJM.module.MasterData.LingkupBidang.store.LingkupBidang').reload();

    },
    save: function(btn, evt, opts){
        var me         = this;
        var form       = btn.up('form').getForm();
        var name_prov  = form.findField('name_prov').getValue();
        // console.log(role);

        Ext.Ajax.request({
            url     : BASE_URL + 'lingkupbidang/c_lingkupbidang/saveLingkupBidang',
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
                    var form    = Ext.getCmp('formlingkupbidang');
                    var grid    = Ext.getCmp('gridlingkupbidang');
                    form.getForm().reset();
                    me.resetPanel();
                    grid.getSelectionModel().deselectAll();
                    Ext.ComponentQuery.query('#gridlingkupbidang')[0].getStore('RPJM.module.MasterData.LingkupBidang.store.LingkupBidang').reload(); 
                }else if (data.total === 2){
                    Ext.MessageBox.show({
                        title           : 'Error',
                        msg             : 'LingkupBidang Telah Terdaftar - Silahkan Gunakan LingkupBidang Lain',
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
                    var form    = Ext.getCmp('formlingkupbidang');
                    var grid    = Ext.getCmp('gridlingkupbidang');
                    form.getForm().reset();
                    me.resetPanel();
                    grid.getSelectionModel().deselectAll();
                    Ext.ComponentQuery.query('#gridlingkupbidang')[0].getStore('RPJM.module.MasterData.LingkupBidang.store.LingkupBidang').reload();                   
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
                        url     : BASE_URL + 'lingkupbidang/c_lingkupbidang/editLingkupBidang',
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
                                var form    = Ext.getCmp('formlingkupbidang');
                                var grid    = Ext.getCmp('gridlingkupbidang');
                                form.getForm().reset();
                                me.resetPanel();
                                grid.getSelectionModel().deselectAll();
                                Ext.ComponentQuery.query('#gridlingkupbidang')[0].getStore('RPJM.module.MasterData.LingkupBidang.store.LingkupBidang').reload(); 
                            }else if (data.total === 2){
                                Ext.MessageBox.show({
                                    title           : 'Error',
                                    msg             : 'LingkupBidang Telah Terdaftar - Silahkan Gunakan LingkupBidang Lain',
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
                                var form    = Ext.getCmp('formlingkupbidang');
                                var grid    = Ext.getCmp('gridlingkupbidang');
                                form.getForm().reset();
                                me.resetPanel();
                                grid.getSelectionModel().deselectAll();
                                Ext.ComponentQuery.query('#gridlingkupbidang')[0].getStore('RPJM.module.MasterData.LingkupBidang.store.LingkupBidang').reload();                   
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
                url     : BASE_URL + 'lingkupbidang/c_lingkupbidang/searchLingkupBidang',
                method  : 'POST',
                params  : {name : value},
                success : function(response){
                    var data    = Ext.JSON.decode(response.responseText);
                    if(data.success){
                            var storeApproval = Ext.getStore('RPJM.module.MasterData.LingkupBidang.store.LingkupBidang');
                            storeApproval.removeAll();
                            storeApproval.add(data.data);
                    }
                }
            });
    },

    print : function(){
        window.location = BASE_URL + 'lingkupbidang/c_lingkupbidang/printLingkupBidang/';
    },
})
