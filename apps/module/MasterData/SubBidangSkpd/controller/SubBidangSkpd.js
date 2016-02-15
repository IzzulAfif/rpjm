Ext.define('RPJM.module.MasterData.SubBidangSkpd.controller.SubBidangSkpd', {
    extend  : 'Ext.app.Controller',
    CheckedDataEdit: [],

    init: function() {
        var me = this;
        me.getStore('RPJM.module.MasterData.SubBidangSkpd.store.SubBidangSkpd').load();
        me.control({
            "gridsubbidangskpd  button[action=delete]"          : {
                click: me.del
            }, 
            "#gridsubbidangskpd"                                 : {
               select: me.viewSubBidangSkpd
            },            
            "formsubbidangskpd  button[action=save]"        : {
                click: me.save
            }, 
            "formsubbidangskpd  button[action=reset]"       : {
                click: me.resetPanel
            },
            "gridsubbidangskpdorg"                          : {
               itemdblclick: me.addorg
            },
            "gridsubbidangskpd textfield[action=search]"    : {
               keypress: me.search
            },
            "gridsubbidangskpd button[action=print]"        : {
               click: me.print
            },
            "formsubbidangskpd button[action=update]"       : {
               click: me.update
            }
        });
        me.callParent(arguments);
    },

    reloadStore: function(){
        var me = this;
        me.getStore('RPJM.module.MasterData.SubBidangSkpd.store.SubBidangSkpd').reload();
    },

    viewSubBidangSkpd: function(grid, record, item, index, e, eOpts){
        var id = record.data.id;
        var form = Ext.getCmp('formsubbidangskpd');
        var grid = Ext.getCmp('gridsubbidangskpd');
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
        var form       = Ext.getCmp('formsubbidangskpd').getForm();
        var kode_bidangskpd  = form.findField('kode_bidangskpd').getValue();

        Ext.MessageBox.show({
            title           : 'Konfirmasi',
            msg             : 'Anda yakin akan menghapus data yang terseleksi?',
            buttons         : Ext.Msg.YESNO,
            icon            : Ext.MessageBox.WARNING,
            width           : 450,
            fn              : function(btn, evtObj){
                if (btn == 'yes') {
                    Ext.Ajax.request({
                        url             : BASE_URL + 'subbidangskpd/c_subbidangskpd/delSubBidangSkpd',
                        method          : 'POST',
                        params          : {
                            kode_bidangskpd     : kode_bidangskpd,
                            kode_subbidangskpd  : kode_subbidangskpd,
                            subbidangskpd       : subbidangskpd
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
                                var form    = Ext.getCmp('formsubbidangskpd');
                                var grid    = Ext.getCmp('gridsubbidangskpd');
                                form.getForm().reset();
                                me.resetPanel();
                                grid.getSelectionModel().deselectAll();
                                Ext.ComponentQuery.query('#gridsubbidangskpd')[0].getStore('RPJM.module.MasterData.SubBidangSkpd.store.SubBidangSkpd').reload();                             
                            } else {
                                var form    = Ext.getCmp('formsubbidangskpd');
                                var grid    = Ext.getCmp('gridsubbidangskpd');
                                form.getForm().reset();
                                me.resetPanel();
                                grid.getSelectionModel().deselectAll();
                                Ext.ComponentQuery.query('#gridsubbidangskpd')[0].getStore('RPJM.module.MasterData.SubBidangSkpd.store.SubBidangSkpd').reload(); 
                            }
                        }
                    });
                }
            }
        })
    },

    resetPanel: function(btn, gridPanel, selected) {//Reset Form
        var me = this;
        var form = Ext.getCmp('formsubbidangskpd');
        var grid = Ext.getCmp('gridsubbidangskpd');
        form.getForm().reset();

        grid.getSelectionModel().clearSelections();
        me.getStore('RPJM.module.MasterData.SubBidangSkpd.store.SubBidangSkpd').reload();

    },

    save: function(btn, evt, opts){
        var me                  = this;
        var form                = btn.up('form').getForm();
        var kode_bidangskpd     = form.findField('kode_bidangskpd').getValue();
        var subbidangskpd       = form.findField('subbidangskpd').getValue();
        var kode_subbidangskpd  = form.findField('kode_subbidangskpd').getValue();

        Ext.Ajax.request({
            url     : BASE_URL + 'subbidangskpd/c_subbidangskpd/saveSubBidangSkpd',
            method  : 'POST',
            params  : {
                kode_bidangskpd    : kode_bidangskpd,
                subbidangskpd      : subbidangskpd,
                kode_subbidangskpd : kode_subbidangskpd
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
                    var form    = Ext.getCmp('formsubbidangskpd');
                    var grid    = Ext.getCmp('gridsubbidangskpd');
                    form.getForm().reset();
                    me.resetPanel();
                    grid.getSelectionModel().deselectAll();
                    Ext.ComponentQuery.query('#gridsubbidangskpd')[0].getStore('RPJM.module.MasterData.SubBidangSkpd.store.SubBidangSkpd').reload(); 
                }else if (data.total === 2){
                    Ext.MessageBox.show({
                        title           : 'Error',
                        msg             : 'SubBidangSkpd Telah Terdaftar - Silahkan Gunakan SubBidangSkpd Lain',
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
                    var form    = Ext.getCmp('formsubbidangskpd');
                    var grid    = Ext.getCmp('gridsubbidangskpd');
                    form.getForm().reset();
                    me.resetPanel();
                    grid.getSelectionModel().deselectAll();
                    Ext.ComponentQuery.query('#gridsubbidangskpd')[0].getStore('RPJM.module.MasterData.SubBidangSkpd.store.SubBidangSkpd').reload();                   
                }
            }
        });   
    },

    update: function(btn, evt, opts){
        var me                  = this;
        var form                = btn.up('form').getForm();
        var id                  = form.findField('id').getValue();
        var kode_bidangskpd     = form.findField('kode_bidangskpd').getValue();
        var subbidangskpd       = form.findField('subbidangskpd').getValue();
        var kode_subbidangskpd  = form.findField('kode_subbidangskpd').getValue();
        Ext.MessageBox.show({
            title           : 'Konfirmasi',
            msg             : 'Anda yakin akan merubah data?',
            buttons         : Ext.Msg.YESNO,
            icon            : Ext.MessageBox.WARNING,
            width           : 450,
            fn              : function(btn, evtObj){
                if (btn == 'yes') {
                    Ext.Ajax.request({
                        url     : BASE_URL + 'subbidangskpd/c_subbidangskpd/editSubBidangSkpd',
                        method  : 'POST',
                        params  : {
                            id          : id,
                            kode_bidangskpd     : kode_bidangskpd,
                            subbidangskpd       : subbidangskpd,
                            kode_subbidangskpd  : kode_subbidangskpd
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
                                var form    = Ext.getCmp('formsubbidangskpd');
                                var grid    = Ext.getCmp('gridsubbidangskpd');
                                form.getForm().reset();
                                me.resetPanel();
                                grid.getSelectionModel().deselectAll();
                                Ext.ComponentQuery.query('#gridsubbidangskpd')[0].getStore('RPJM.module.MasterData.SubBidangSkpd.store.SubBidangSkpd').reload(); 
                            }else if (data.total === 2){
                                Ext.MessageBox.show({
                                    title           : 'Error',
                                    msg             : 'SubBidangSkpd Telah Terdaftar - Silahkan Gunakan SubBidangSkpd Lain',
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
                                var form    = Ext.getCmp('formsubbidangskpd');
                                var grid    = Ext.getCmp('gridsubbidangskpd');
                                form.getForm().reset();
                                me.resetPanel();
                                grid.getSelectionModel().deselectAll();
                                Ext.ComponentQuery.query('#gridsubbidangskpd')[0].getStore('RPJM.module.MasterData.SubBidangSkpd.store.SubBidangSkpd').reload();                   
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
                url     : BASE_URL + 'subbidangskpd/c_subbidangskpd/searchSubBidangSkpd',
                method  : 'POST',
                params  : {name : value},
                success : function(response){
                    var data    = Ext.JSON.decode(response.responseText);
                    if(data.success){
                            var storeApproval = Ext.getStore('RPJM.module.MasterData.SubBidangSkpd.store.SubBidangSkpd');
                            storeApproval.removeAll();
                            storeApproval.add(data.data);
                    }
                }
            });
    },

    print : function(){
        window.location = BASE_URL + 'subbidangskpd/c_subbidangskpd/printSubBidangSkpd/';
    },
})
