Ext.define('RPJM.module.MasterData.Eselon.controller.Eselon', {
    extend  : 'Ext.app.Controller',
    CheckedDataEdit: [],

    init: function() {
        var me = this;
        me.getStore('RPJM.module.MasterData.Eselon.store.Eselon').load();
        me.control({
            "grideselon  button[action=delete]"          : {
                click: me.del
            }, 
            "#grideselon"                                 : {
               itemclick: me.viewEselon
            },            
            "formeselon  button[action=save]"        : {
                click: me.save
            }, 
            "formeselon  button[action=reset]"       : {
                click: me.resetPanel
            },
            "grideselonorg"                          : {
               itemdblclick: me.addorg
            },
            "grideselon textfield[action=search]"    : {
               keypress: me.search
            },
            "grideselon button[action=print]"        : {
               click: me.print
            },
            "formeselon button[action=update]"       : {
               click: me.update
            }
        });
        me.callParent(arguments);
    },
    reloadStore: function(){
        var me = this;
        me.getStore('RPJM.module.MasterData.Eselon.store.Eselon').reload();
    },
    viewEselon: function(grid, record, item, index, e, eOpts){
        var id = record.data.id;
        var form = Ext.getCmp('formeselon');
        var grid = Ext.getCmp('grideselon');
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
        //primary key
        var form       = Ext.getCmp('formeselon').getForm();
        var kode_eselon  = form.findField('kode_eselon').getValue();


        Ext.MessageBox.show({
            title           : 'Konfirmasi',
            msg             : 'Anda yakin akan menghapus data yang terseleksi?',
            buttons         : Ext.Msg.YESNO,
            icon            : Ext.MessageBox.WARNING,
            width           : 450,
            fn              : function(btn, evtObj){
                if (btn == 'yes') {
                    Ext.Ajax.request({
                        url             : BASE_URL + 'eselon/c_eselon/delEselon',
                        method          : 'POST',
                        params          : {
                            kode_eselon : kode_eselon
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
                                var form    = Ext.getCmp('formeselon');
                                var grid    = Ext.getCmp('grideselon');
                                form.getForm().reset();
                                me.resetPanel();
                                grid.getSelectionModel().deselectAll();
                                Ext.ComponentQuery.query('#grideselon')[0].getStore('RPJM.module.MasterData.Eselon.store.Eselon').reload();                             
                            } else {
                                var form    = Ext.getCmp('formeselon');
                                var grid    = Ext.getCmp('grideselon');
                                form.getForm().reset();
                                me.resetPanel();
                                grid.getSelectionModel().deselectAll();
                                Ext.ComponentQuery.query('#grideselon')[0].getStore('RPJM.module.MasterData.Eselon.store.Eselon').reload(); 
                            }
                        }
                    });
                }
            }
        })
    },

    resetPanel: function(btn, gridPanel, selected) {//Reset Form
        var me = this;
        var form = Ext.getCmp('formeselon');
        var grid = Ext.getCmp('grideselon');
        form.getForm().reset();

        if(createEselon == false){
            var saveButton = form.down('button[action=save]');
            saveButton.setDisabled(false);
        }else{
            var saveButton = form.down('button[action=save]');
            saveButton.setDisabled(true);
        }

        var updateButton = form.down('button[action=update]');
        updateButton.setDisabled(true);
        grid.getSelectionModel().clearSelections();
        me.getStore('RPJM.module.MasterData.Eselon.store.Eselon').reload();

    },
    save: function(btn, evt, opts){
        var me         = this;
        var form       = btn.up('form').getForm();
        var kode_eselon  = form.findField('kode_eselon').getValue();
        var eselon   = form.findField('eselon').getValue();

        Ext.Ajax.request({
            url     : BASE_URL + 'eselon/c_eselon/saveEselon',
            method  : 'POST',
            params  : {
                kode_eselon   : kode_eselon,
                eselon         : eselon
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
                    var form    = Ext.getCmp('formeselon');
                    var grid    = Ext.getCmp('grideselon');
                    form.getForm().reset();
                    me.resetPanel();
                    grid.getSelectionModel().deselectAll();
                    Ext.ComponentQuery.query('#grideselon')[0].getStore('RPJM.module.MasterData.Eselon.store.Eselon').reload(); 
                }else if (data.total === 2){
                    Ext.MessageBox.show({
                        title           : 'Error',
                        msg             : 'Eselon Telah Terdaftar - Silahkan Gunakan Eselon Lain',
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
                    var form    = Ext.getCmp('formeselon');
                    var grid    = Ext.getCmp('grideselon');
                    form.getForm().reset();
                    me.resetPanel();
                    grid.getSelectionModel().deselectAll();
                    Ext.ComponentQuery.query('#grideselon')[0].getStore('RPJM.module.MasterData.Eselon.store.Eselon').reload();                   
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
                        url     : BASE_URL + 'eselon/c_eselon/editEselon',
                        method  : 'POST',
                        params  : {
                            id             : id,
                            kode_eselon    : kode_eselon,
                            eselon          : eselon
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
                                var form    = Ext.getCmp('formeselon');
                                var grid    = Ext.getCmp('grideselon');
                                form.getForm().reset();
                                me.resetPanel();
                                grid.getSelectionModel().deselectAll();
                                Ext.ComponentQuery.query('#grideselon')[0].getStore('RPJM.module.MasterData.Eselon.store.Eselon').reload(); 
                            }else if (data.total === 2){
                                Ext.MessageBox.show({
                                    title           : 'Error',
                                    msg             : 'Eselon Telah Terdaftar - Silahkan Gunakan Eselon Lain',
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
                                var form    = Ext.getCmp('formeselon');
                                var grid    = Ext.getCmp('grideselon');
                                form.getForm().reset();
                                me.resetPanel();
                                grid.getSelectionModel().deselectAll();
                                Ext.ComponentQuery.query('#grideselon')[0].getStore('RPJM.module.MasterData.Eselon.store.Eselon').reload();                   
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
                url     : BASE_URL + 'eselon/c_eselon/searchEselon',
                method  : 'POST',
                params  : {name : value},
                success : function(response){
                    var data    = Ext.JSON.decode(response.responseText);
                    if(data.success){
                            var storeApproval = Ext.getStore('RPJM.module.MasterData.Eselon.store.Eselon');
                            storeApproval.removeAll();
                            storeApproval.add(data.data);
                    }
                }
            });
    },

    print : function(){
        window.location = BASE_URL + 'eselon/c_eselon/printEselon/';
    },
})
