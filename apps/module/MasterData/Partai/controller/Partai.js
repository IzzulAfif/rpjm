Ext.define('RPJM.module.MasterData.Partai.controller.Partai', {
    extend  : 'Ext.app.Controller',
    CheckedDataEdit: [],

    init: function() {
        var me = this;
        me.getStore('RPJM.module.MasterData.Partai.store.Partai').load();
        me.control({
            "gridpartai  button[action=delete]"          : {
                click: me.del
            }, 
            "#gridpartai"                                 : {
               select: me.viewPartai
            },            
            "formpartai  button[action=save]"        : {
                click: me.save
            }, 
            "formpartai  button[action=reset]"       : {
                click: me.resetPanel
            },
            "gridpartaiorg"                          : {
               itemdblclick: me.addorg
            },
            "gridpartai textfield[action=search]"    : {
               keypress: me.search
            },
            "gridpartai button[action=print]"        : {
               click: me.print
            },
            "formpartai button[action=update]"       : {
               click: me.update
            }
        });
        me.callParent(arguments);
    },

    reloadStore: function(){
        var me = this;
        me.getStore('RPJM.module.MasterData.Partai.store.Partai').reload();
    },

    viewPartai: function(grid, record, item, index, e, eOpts){
        var id = record.data.id;
        var form = Ext.getCmp('formpartai');
        var grid = Ext.getCmp('gridpartai');
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
        var form          = Ext.getCmp('formpartai').getForm();
        var partai     = form.findField('partai').getValue();

        Ext.MessageBox.show({
            title           : 'Konfirmasi',
            msg             : 'Anda yakin akan menghapus data yang terseleksi?',
            buttons         : Ext.Msg.YESNO,
            icon            : Ext.MessageBox.WARNING,
            width           : 450,
            fn              : function(btn, evtObj){
                if (btn == 'yes') {
                    Ext.Ajax.request({
                        url             : BASE_URL + 'partai/c_partai/delPartai',
                        method          : 'POST',
                        params          : {
                            partai   : partai
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
                                var form    = Ext.getCmp('formpartai');
                                var grid    = Ext.getCmp('gridpartai');
                                form.getForm().reset();
                                me.resetPanel();
                                grid.getSelectionModel().deselectAll();
                                Ext.ComponentQuery.query('#gridpartai')[0].getStore('RPJM.module.MasterData.Partai.store.Partai').reload();                             
                            } else {
                                var form    = Ext.getCmp('formpartai');
                                var grid    = Ext.getCmp('gridpartai');
                                form.getForm().reset();
                                me.resetPanel();
                                grid.getSelectionModel().deselectAll();
                                Ext.ComponentQuery.query('#gridpartai')[0].getStore('RPJM.module.MasterData.Partai.store.Partai').reload(); 
                            }
                        }
                    });
                }
            }
        })
    },

    resetPanel: function(btn, gridPanel, selected) {//Reset Form
        var me = this;
        var form = Ext.getCmp('formpartai');
        var grid = Ext.getCmp('gridpartai');
        form.getForm().reset();

        grid.getSelectionModel().clearSelections();
        me.getStore('RPJM.module.MasterData.Partai.store.Partai').reload();

    },

    save: function(btn, evt, opts){
        var me         = this;
        var form       = btn.up('form').getForm();
        var partai  = form.findField('partai').getValue();

        Ext.Ajax.request({
            url     : BASE_URL + 'partai/c_partai/savePartai',
            method  : 'POST',
            params  : {
                partai        : partai
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
                    var form    = Ext.getCmp('formpartai');
                    var grid    = Ext.getCmp('gridpartai');
                    form.getForm().reset();
                    me.resetPanel();
                    grid.getSelectionModel().deselectAll();
                    Ext.ComponentQuery.query('#gridpartai')[0].getStore('RPJM.module.MasterData.Partai.store.Partai').reload(); 
                }else if (data.total === 2){
                    Ext.MessageBox.show({
                        title           : 'Error',
                        msg             : 'Partai Telah Terdaftar - Silahkan Gunakan Partai Lain',
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
                    var form    = Ext.getCmp('formpartai');
                    var grid    = Ext.getCmp('gridpartai');
                    form.getForm().reset();
                    me.resetPanel();
                    grid.getSelectionModel().deselectAll();
                    Ext.ComponentQuery.query('#gridpartai')[0].getStore('RPJM.module.MasterData.Partai.store.Partai').reload();                   
                }
            }
        });   
    },
    update: function(btn, evt, opts){
        var me             = this;
        var form           = btn.up('form').getForm();
                // console.log(form);
        var id             = form.findField('id').getValue();
        var partai      = form.findField('partai').getValue();

        Ext.MessageBox.show({
            title           : 'Konfirmasi',
            msg             : 'Anda yakin akan merubah data?',
            buttons         : Ext.Msg.YESNO,
            icon            : Ext.MessageBox.WARNING,
            width           : 450,
            fn              : function(btn, evtObj){
                if (btn == 'yes') {
                    Ext.Ajax.request({
                        url     : BASE_URL + 'partai/c_partai/editPartai',
                        method  : 'POST',
                        params  : {
                            id           : id,
                            partai    : partai
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
                                var form    = Ext.getCmp('formpartai');
                                var grid    = Ext.getCmp('gridpartai');
                                form.getForm().reset();
                                me.resetPanel();
                                grid.getSelectionModel().deselectAll();
                                Ext.ComponentQuery.query('#gridpartai')[0].getStore('RPJM.module.MasterData.Partai.store.Partai').reload(); 
                            }else if (data.total === 2){
                                Ext.MessageBox.show({
                                    title           : 'Error',
                                    msg             : 'Partai Telah Terdaftar - Silahkan Gunakan Partai Lain',
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
                                var form    = Ext.getCmp('formpartai');
                                var grid    = Ext.getCmp('gridpartai');
                                form.getForm().reset();
                                me.resetPanel();
                                grid.getSelectionModel().deselectAll();
                                Ext.ComponentQuery.query('#gridpartai')[0].getStore('RPJM.module.MasterData.Partai.store.Partai').reload();                   
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
                url     : BASE_URL + 'partai/c_partai/searchPartai',
                method  : 'POST',
                params  : {name : value},
                success : function(response){
                    var data    = Ext.JSON.decode(response.responseText);
                    if(data.success){
                            var storeApproval = Ext.getStore('RPJM.module.MasterData.Partai.store.Partai');
                            storeApproval.removeAll();
                            storeApproval.add(data.data);
                    }
                }
            });
    },

    print : function(){
        window.location = BASE_URL + 'partai/c_partai/printPartai/';
    },
})
