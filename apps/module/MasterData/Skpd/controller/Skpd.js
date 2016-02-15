Ext.define('RPJM.module.MasterData.Skpd.controller.Skpd', {
    extend  : 'Ext.app.Controller',
    CheckedDataEdit: [],

    init: function() {
        var me = this;
        me.getStore('RPJM.module.MasterData.Skpd.store.Skpd').load();
        me.control({
            "gridskpd  button[action=delete]"          : {
                click: me.del
            }, 
            "#gridskpd"                                 : {
               select: me.viewSkpd
            },            
            "formskpd  button[action=save]"        : {
                click: me.save
            }, 
            "formskpd  button[action=reset]"       : {
                click: me.resetPanel
            },
            "gridskpdorg"                          : {
               itemdblclick: me.addorg
            },
            "gridskpd textfield[action=search]"    : {
               keypress: me.search
            },
            "gridskpd button[action=print]"        : {
               click: me.print
            },
            "formskpd button[action=update]"       : {
               click: me.update
            }
        });
        me.callParent(arguments);
    },

    reloadStore: function(){
        var me = this;
        me.getStore('RPJM.module.MasterData.Skpd.store.Skpd').reload();
    },

    viewSkpd: function(grid, record, item, index, e, eOpts){
        var id = record.data.id;
        var form = Ext.getCmp('formskpd');
        var grid = Ext.getCmp('gridskpd');
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
        var form       = Ext.getCmp('formskpd').getForm();
        var kode_skpd  = form.findField('kode_skpd').getValue();

        Ext.MessageBox.show({
            title           : 'Konfirmasi',
            msg             : 'Anda yakin akan menghapus data yang terseleksi?',
            buttons         : Ext.Msg.YESNO,
            icon            : Ext.MessageBox.WARNING,
            width           : 450,
            fn              : function(btn, evtObj){
                if (btn == 'yes') {
                    Ext.Ajax.request({
                        url             : BASE_URL + 'skpd/c_skpd/delSkpd',
                        method          : 'POST',
                        params          : {
                            kode_skpd   : kode_skpd
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
                                var form    = Ext.getCmp('formskpd');
                                var grid    = Ext.getCmp('gridskpd');
                                form.getForm().reset();
                                me.resetPanel();
                                grid.getSelectionModel().deselectAll();
                                Ext.ComponentQuery.query('#gridskpd')[0].getStore('RPJM.module.MasterData.Skpd.store.Skpd').reload();                             
                            } else {
                                var form    = Ext.getCmp('formskpd');
                                var grid    = Ext.getCmp('gridskpd');
                                form.getForm().reset();
                                me.resetPanel();
                                grid.getSelectionModel().deselectAll();
                                Ext.ComponentQuery.query('#gridskpd')[0].getStore('RPJM.module.MasterData.Skpd.store.Skpd').reload(); 
                            }
                        }
                    });
                }
            }
        })
    },

    resetPanel: function(btn, gridPanel, selected) {//Reset Form
        var me = this;
        var form = Ext.getCmp('formskpd');
        var grid = Ext.getCmp('gridskpd');
        form.getForm().reset();

        grid.getSelectionModel().clearSelections();
        me.getStore('RPJM.module.MasterData.Skpd.store.Skpd').reload();

    },

    save: function(btn, evt, opts){
        var me         = this;
        var form       = btn.up('form').getForm();
        var kode_skpd  = form.findField('kode_skpd').getValue();
        var skpd   = form.findField('skpd').getValue();

        Ext.Ajax.request({
            url     : BASE_URL + 'skpd/c_skpd/saveSkpd',
            method  : 'POST',
            params  : {
                kode_skpd   : kode_skpd,
                skpd    : skpd
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
                    var form    = Ext.getCmp('formskpd');
                    var grid    = Ext.getCmp('gridskpd');
                    form.getForm().reset();
                    me.resetPanel();
                    grid.getSelectionModel().deselectAll();
                    Ext.ComponentQuery.query('#gridskpd')[0].getStore('RPJM.module.MasterData.Skpd.store.Skpd').reload(); 
                }else if (data.total === 2){
                    Ext.MessageBox.show({
                        title           : 'Error',
                        msg             : 'Skpd Telah Terdaftar - Silahkan Gunakan Skpd Lain',
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
                    var form    = Ext.getCmp('formskpd');
                    var grid    = Ext.getCmp('gridskpd');
                    form.getForm().reset();
                    me.resetPanel();
                    grid.getSelectionModel().deselectAll();
                    Ext.ComponentQuery.query('#gridskpd')[0].getStore('RPJM.module.MasterData.Skpd.store.Skpd').reload();                   
                }
            }
        });   
    },

    update: function(btn, evt, opts){
        var me             = this;
        var form           = btn.up('form').getForm();
        var id             = form.findField('id').getValue();
        var kode_skpd      = form.findField('kode_skpd').getValue();
        var skpd           = form.findField('skpd').getValue();
        Ext.MessageBox.show({
            title           : 'Konfirmasi',
            msg             : 'Anda yakin akan merubah data?',
            buttons         : Ext.Msg.YESNO,
            icon            : Ext.MessageBox.WARNING,
            width           : 450,
            fn              : function(btn, evtObj){
                if (btn == 'yes') {
                    Ext.Ajax.request({
                        url     : BASE_URL + 'skpd/c_skpd/editSkpd',
                        method  : 'POST',
                        params  : {
                            id          : id,
                            kode_skpd   : kode_skpd,
                            skpd        : skpd
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
                                var form    = Ext.getCmp('formskpd');
                                var grid    = Ext.getCmp('gridskpd');
                                form.getForm().reset();
                                me.resetPanel();
                                grid.getSelectionModel().deselectAll();
                                Ext.ComponentQuery.query('#gridskpd')[0].getStore('RPJM.module.MasterData.Skpd.store.Skpd').reload(); 
                            }else if (data.total === 2){
                                Ext.MessageBox.show({
                                    title           : 'Error',
                                    msg             : 'Skpd Telah Terdaftar - Silahkan Gunakan Skpd Lain',
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
                                var form    = Ext.getCmp('formskpd');
                                var grid    = Ext.getCmp('gridskpd');
                                form.getForm().reset();
                                me.resetPanel();
                                grid.getSelectionModel().deselectAll();
                                Ext.ComponentQuery.query('#gridskpd')[0].getStore('RPJM.module.MasterData.Skpd.store.Skpd').reload();                   
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
                url     : BASE_URL + 'skpd/c_skpd/searchSkpd',
                method  : 'POST',
                params  : {name : value},
                success : function(response){
                    var data    = Ext.JSON.decode(response.responseText);
                    if(data.success){
                            var storeApproval = Ext.getStore('RPJM.module.MasterData.Skpd.store.Skpd');
                            storeApproval.removeAll();
                            storeApproval.add(data.data);
                    }
                }
            });
    },

    print : function(){
        window.location = BASE_URL + 'skpd/c_skpd/printSkpd/';
    },
})
