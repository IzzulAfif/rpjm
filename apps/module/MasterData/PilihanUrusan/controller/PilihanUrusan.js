Ext.define('RPJM.module.MasterData.PilihanUrusan.controller.PilihanUrusan', {
    extend  : 'Ext.app.Controller',
    CheckedDataEdit: [],

    init: function() {
        var me = this;
        //me.getStore('RPJM.module.MasterData.PilihanUrusan.store.PilihanUrusan').load();
        me.control({
            "gridpilihanurusan  button[action=delete]"          : {
                click: me.del
            }, 
            "#gridpilihanurusan"                                 : {
               itemclick: me.viewPilihanUrusan
            },            
            "formpilihanurusan  button[action=save]"        : {
                click: me.save
            }, 
            "formpilihanurusan  button[action=reset]"       : {
                click: me.resetPanel
            },
            "gridpilihanurusanorg"                          : {
               itemdblclick: me.addorg
            },
            "gridpilihanurusan textfield[action=search]"    : {
               keypress: me.search
            },
            "gridpilihanurusan button[action=print]"        : {
               click: me.print
            },
            "formpilihanurusan button[action=update]"       : {
               click: me.update
            }
        });
        me.callParent(arguments);
    },
    reloadStore: function(){
        var me = this;
        me.getStore('RPJM.module.MasterData.PilihanUrusan.store.PilihanUrusan').reload();
    },
    viewPilihanUrusan: function(grid, record, item, index, e, eOpts){
        var id = record.data.id;
        var form = Ext.getCmp('formpilihanurusan');
        var grid = Ext.getCmp('gridpilihanurusan');
        form.getForm().setValues(record.data);

        var saveButton = form.down('button[action=save]');
        saveButton.setDisabled(true);
        console.log(updatePilihanUrusan);

        if(updatePilihanUrusan == false) {
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
                        url             : BASE_URL + 'pilihanurusan/c_pilihanurusan/delPilihanUrusan',
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
                                var form    = Ext.getCmp('formpilihanurusan');
                                var grid    = Ext.getCmp('gridpilihanurusan');
                                form.getForm().reset();
                                me.resetPanel();
                                grid.getSelectionModel().deselectAll();
                                Ext.ComponentQuery.query('#gridpilihanurusan')[0].getStore('RPJM.module.MasterData.PilihanUrusan.store.PilihanUrusan').reload();                             
                            } else {
                                var form    = Ext.getCmp('formpilihanurusan');
                                var grid    = Ext.getCmp('gridpilihanurusan');
                                form.getForm().reset();
                                me.resetPanel();
                                grid.getSelectionModel().deselectAll();
                                Ext.ComponentQuery.query('#gridpilihanurusan')[0].getStore('RPJM.module.MasterData.PilihanUrusan.store.PilihanUrusan').reload(); 
                            }
                        }
                    });
                }
            }
        })
    },

    resetPanel: function(btn, gridPanel, selected) {//Reset Form
        var me = this;
        var form = Ext.getCmp('formpilihanurusan');
        var grid = Ext.getCmp('gridpilihanurusan');
        form.getForm().reset();

        if(createPilihanUrusan == false){
            var saveButton = form.down('button[action=save]');
            saveButton.setDisabled(false);
        }else{
            var saveButton = form.down('button[action=save]');
            saveButton.setDisabled(true);
        }

        var updateButton = form.down('button[action=update]');
        updateButton.setDisabled(true);
        grid.getSelectionModel().clearSelections();
        me.getStore('RPJM.module.MasterData.PilihanUrusan.store.PilihanUrusan').reload();

    },
    save: function(btn, evt, opts){
        var me         = this;
        var form       = btn.up('form').getForm();
        var name_prov  = form.findField('name_prov').getValue();
        // console.log(role);

        Ext.Ajax.request({
            url     : BASE_URL + 'pilihanurusan/c_pilihanurusan/savePilihanUrusan',
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
                    var form    = Ext.getCmp('formpilihanurusan');
                    var grid    = Ext.getCmp('gridpilihanurusan');
                    form.getForm().reset();
                    me.resetPanel();
                    grid.getSelectionModel().deselectAll();
                    Ext.ComponentQuery.query('#gridpilihanurusan')[0].getStore('RPJM.module.MasterData.PilihanUrusan.store.PilihanUrusan').reload(); 
                }else if (data.total === 2){
                    Ext.MessageBox.show({
                        title           : 'Error',
                        msg             : 'PilihanUrusan Telah Terdaftar - Silahkan Gunakan PilihanUrusan Lain',
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
                    var form    = Ext.getCmp('formpilihanurusan');
                    var grid    = Ext.getCmp('gridpilihanurusan');
                    form.getForm().reset();
                    me.resetPanel();
                    grid.getSelectionModel().deselectAll();
                    Ext.ComponentQuery.query('#gridpilihanurusan')[0].getStore('RPJM.module.MasterData.PilihanUrusan.store.PilihanUrusan').reload();                   
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
                        url     : BASE_URL + 'pilihanurusan/c_pilihanurusan/editPilihanUrusan',
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
                                var form    = Ext.getCmp('formpilihanurusan');
                                var grid    = Ext.getCmp('gridpilihanurusan');
                                form.getForm().reset();
                                me.resetPanel();
                                grid.getSelectionModel().deselectAll();
                                Ext.ComponentQuery.query('#gridpilihanurusan')[0].getStore('RPJM.module.MasterData.PilihanUrusan.store.PilihanUrusan').reload(); 
                            }else if (data.total === 2){
                                Ext.MessageBox.show({
                                    title           : 'Error',
                                    msg             : 'PilihanUrusan Telah Terdaftar - Silahkan Gunakan PilihanUrusan Lain',
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
                                var form    = Ext.getCmp('formpilihanurusan');
                                var grid    = Ext.getCmp('gridpilihanurusan');
                                form.getForm().reset();
                                me.resetPanel();
                                grid.getSelectionModel().deselectAll();
                                Ext.ComponentQuery.query('#gridpilihanurusan')[0].getStore('RPJM.module.MasterData.PilihanUrusan.store.PilihanUrusan').reload();                   
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
                url     : BASE_URL + 'pilihanurusan/c_pilihanurusan/searchPilihanUrusan',
                method  : 'POST',
                params  : {name : value},
                success : function(response){
                    var data    = Ext.JSON.decode(response.responseText);
                    if(data.success){
                            var storeApproval = Ext.getStore('RPJM.module.MasterData.PilihanUrusan.store.PilihanUrusan');
                            storeApproval.removeAll();
                            storeApproval.add(data.data);
                    }
                }
            });
    },

    print : function(){
        window.location = BASE_URL + 'pilihanurusan/c_pilihanurusan/printPilihanUrusan/';
    },
})
