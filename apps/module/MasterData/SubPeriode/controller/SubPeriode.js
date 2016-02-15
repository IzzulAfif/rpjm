Ext.define('RPJM.module.MasterData.SubPeriode.controller.SubPeriode', {
    extend  : 'Ext.app.Controller',
    CheckedDataEdit: [],

    init: function() {
        var me = this;
        me.getStore('RPJM.module.MasterData.SubPeriode.store.SubPeriode').load();
        me.control({
            "gridsubperiode  button[action=delete]"          : {
                click: me.del
            }, 
            "#gridsubperiode"                                 : {
               select: me.viewSubPeriode
            },            
            "formsubperiode  button[action=save]"        : {
                click: me.save
            }, 
            "formsubperiode  button[action=reset]"       : {
                click: me.resetPanel
            },
            "gridsubperiodeorg"                          : {
               itemdblclick: me.addorg
            },
            "gridsubperiode textfield[action=search]"    : {
               keypress: me.search
            },
            "gridsubperiode button[action=print]"        : {
               click: me.print
            },
            "formsubperiode button[action=update]"       : {
               click: me.update
            }
        });
        me.callParent(arguments);
    },

    reloadStore: function(){
        var me = this;
        me.getStore('RPJM.module.MasterData.SubPeriode.store.SubPeriode').reload();
    },

    viewSubPeriode: function(grid, record, item, index, e, eOpts){
        var id = record.data.id;
        var form = Ext.getCmp('formsubperiode');
        var grid = Ext.getCmp('gridsubperiode');
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
        var form       = Ext.getCmp('formsubperiode').getForm();
        var kode_subperiode  = form.findField('kode_subperiode').getValue();

        Ext.MessageBox.show({
            title           : 'Konfirmasi',
            msg             : 'Anda yakin akan menghapus data yang terseleksi?',
            buttons         : Ext.Msg.YESNO,
            icon            : Ext.MessageBox.WARNING,
            width           : 450,
            fn              : function(btn, evtObj){
                if (btn == 'yes') {
                    Ext.Ajax.request({
                        url             : BASE_URL + 'subperiode/c_subperiode/delSubPeriode',
                        method          : 'POST',
                        params          : {
                            kode_subperiode   : kode_subperiode
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
                                var form    = Ext.getCmp('formsubperiode');
                                var grid    = Ext.getCmp('gridsubperiode');
                                form.getForm().reset();
                                me.resetPanel();
                                grid.getSelectionModel().deselectAll();
                                Ext.ComponentQuery.query('#gridsubperiode')[0].getStore('RPJM.module.MasterData.SubPeriode.store.SubPeriode').reload();                             
                            } else {
                                var form    = Ext.getCmp('formsubperiode');
                                var grid    = Ext.getCmp('gridsubperiode');
                                form.getForm().reset();
                                me.resetPanel();
                                grid.getSelectionModel().deselectAll();
                                Ext.ComponentQuery.query('#gridsubperiode')[0].getStore('RPJM.module.MasterData.SubPeriode.store.SubPeriode').reload(); 
                            }
                        }
                    });
                }
            }
        })
    },

    resetPanel: function(btn, gridPanel, selected) {//Reset Form
        var me = this;
        var form = Ext.getCmp('formsubperiode');
        var grid = Ext.getCmp('gridsubperiode');
        form.getForm().reset();

        grid.getSelectionModel().clearSelections();
        me.getStore('RPJM.module.MasterData.SubPeriode.store.SubPeriode').reload();

    },

    save: function(btn, evt, opts){
        var me               = this;
        var form             = btn.up('form').getForm();
        var kode_subperiode  = form.findField('kode_subperiode').getValue();
        var subperiode       = form.findField('subperiode').getValue();
        var kode_periode     = form.findField('kode_periode').getValue();

        Ext.Ajax.request({
            url     : BASE_URL + 'subperiode/c_subperiode/saveSubPeriode',
            method  : 'POST',
            params  : {
                kode_subperiode   : kode_subperiode,
                subperiode        : subperiode,
                kode_periode      : kode_periode
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
                    var form    = Ext.getCmp('formsubperiode');
                    var grid    = Ext.getCmp('gridsubperiode');
                    form.getForm().reset();
                    me.resetPanel();
                    grid.getSelectionModel().deselectAll();
                    Ext.ComponentQuery.query('#gridsubperiode')[0].getStore('RPJM.module.MasterData.SubPeriode.store.SubPeriode').reload(); 
                }else if (data.total === 2){
                    Ext.MessageBox.show({
                        title           : 'Error',
                        msg             : 'SubPeriode Telah Terdaftar - Silahkan Gunakan SubPeriode Lain',
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
                    var form    = Ext.getCmp('formsubperiode');
                    var grid    = Ext.getCmp('gridsubperiode');
                    form.getForm().reset();
                    me.resetPanel();
                    grid.getSelectionModel().deselectAll();
                    Ext.ComponentQuery.query('#gridsubperiode')[0].getStore('RPJM.module.MasterData.SubPeriode.store.SubPeriode').reload();                   
                }
            }
        });   
    },

    update: function(btn, evt, opts){
        var me             = this;
        var form           = btn.up('form').getForm();
        var id             = form.findField('id').getValue();
        var kode_subperiode  = form.findField('kode_subperiode').getValue();
        var subperiode   = form.findField('subperiode').getValue();
        var kode_periode   = form.findField('kode_periode').getValue();
        Ext.MessageBox.show({
            title           : 'Konfirmasi',
            msg             : 'Anda yakin akan merubah data?',
            buttons         : Ext.Msg.YESNO,
            icon            : Ext.MessageBox.WARNING,
            width           : 450,
            fn              : function(btn, evtObj){
                if (btn == 'yes') {
                    Ext.Ajax.request({
                        url     : BASE_URL + 'subperiode/c_subperiode/editSubPeriode',
                        method  : 'POST',
                        params  : {
                            id                : id,
                            kode_subperiode   : kode_subperiode,
                            subperiode        : subperiode,
                            kode_periode      : kode_periode
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
                                var form    = Ext.getCmp('formsubperiode');
                                var grid    = Ext.getCmp('gridsubperiode');
                                form.getForm().reset();
                                me.resetPanel();
                                grid.getSelectionModel().deselectAll();
                                Ext.ComponentQuery.query('#gridsubperiode')[0].getStore('RPJM.module.MasterData.SubPeriode.store.SubPeriode').reload(); 
                            }else if (data.total === 2){
                                Ext.MessageBox.show({
                                    title           : 'Error',
                                    msg             : 'SubPeriode Telah Terdaftar - Silahkan Gunakan SubPeriode Lain',
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
                                var form    = Ext.getCmp('formsubperiode');
                                var grid    = Ext.getCmp('gridsubperiode');
                                form.getForm().reset();
                                me.resetPanel();
                                grid.getSelectionModel().deselectAll();
                                Ext.ComponentQuery.query('#gridsubperiode')[0].getStore('RPJM.module.MasterData.SubPeriode.store.SubPeriode').reload();                   
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
                url     : BASE_URL + 'subperiode/c_subperiode/searchSubPeriode',
                method  : 'POST',
                params  : {name : value},
                success : function(response){
                    var data    = Ext.JSON.decode(response.responseText);
                    if(data.success){
                            var storeApproval = Ext.getStore('RPJM.module.MasterData.SubPeriode.store.SubPeriode');
                            storeApproval.removeAll();
                            storeApproval.add(data.data);
                    }
                }
            });
    },

    print : function(){
        window.location = BASE_URL + 'subperiode/c_subperiode/printSubPeriode/';
    },
})
