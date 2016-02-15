Ext.define('RPJM.module.MasterData.Periode.controller.Periode', {
    extend  : 'Ext.app.Controller',
    CheckedDataEdit: [],

    init: function() {
        var me = this;
        me.getStore('RPJM.module.MasterData.Periode.store.Periode').load();
        me.control({
            "gridperiode  button[action=delete]"      : {
                click: me.del
            }, 
            "#gridperiode"                            : {
               select: me.viewPeriode
            },            
            "formperiode  button[action=save]"        : {
                click: me.save
            }, 
            "formperiode  button[action=reset]"       : {
                click: me.resetPanel
            },
            "gridperiodeorg"                          : {
               itemdblclick: me.addorg
            },
            "gridperiode textfield[action=search]"    : {
               keypress: me.search
            },
            "gridperiode button[action=print]"        : {
               click: me.print
            },
            "formperiode button[action=update]"       : {
               click: me.update
            }
        });
        me.callParent(arguments);
    },
    reloadStore: function(){
        var me = this;
        me.getStore('RPJM.module.MasterData.Periode.store.Periode').reload();
    },
    viewPeriode: function(grid, record, item, index, e, eOpts){
        var id = record.data.id;
        var form = Ext.getCmp('formperiode');
        var grid = Ext.getCmp('gridperiode');
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
        var form          = Ext.getCmp('formperiode').getForm();
        var kode_periode  = form.findField('kode_periode').getValue();

        Ext.MessageBox.show({
            title           : 'Konfirmasi',
            msg             : 'Anda yakin akan menghapus data yang terseleksi?',
            buttons         : Ext.Msg.YESNO,
            icon            : Ext.MessageBox.WARNING,
            width           : 450,
            fn              : function(btn, evtObj){
                if (btn == 'yes') {
                    Ext.Ajax.request({
                        url             : BASE_URL + 'periode/c_periode/delPeriode',
                        method          : 'POST',
                        params          : {
                            kode_periode   : kode_periode
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
                                var form    = Ext.getCmp('formperiode');
                                var grid    = Ext.getCmp('gridperiode');
                                form.getForm().reset();
                                me.resetPanel();
                                grid.getSelectionModel().deselectAll();
                                Ext.ComponentQuery.query('#gridperiode')[0].getStore('RPJM.module.MasterData.Periode.store.Periode').reload();                             
                            } else {
                                var form    = Ext.getCmp('formperiode');
                                var grid    = Ext.getCmp('gridperiode');
                                form.getForm().reset();
                                me.resetPanel();
                                grid.getSelectionModel().deselectAll();
                                Ext.ComponentQuery.query('#gridperiode')[0].getStore('RPJM.module.MasterData.Periode.store.Periode').reload(); 
                            }
                        }
                    });
                }
            }
        })
    },

    resetPanel: function(btn, gridPanel, selected) {//Reset Form
        var me = this;
        var form = Ext.getCmp('formperiode');
        var grid = Ext.getCmp('gridperiode');
        form.getForm().reset();

        grid.getSelectionModel().clearSelections();
        me.getStore('RPJM.module.MasterData.Periode.store.Periode').reload();

    },
    save: function(btn, evt, opts){
        var me              = this;
        var form            = btn.up('form').getForm();
        var kode_periode    = form.findField('kode_periode').getValue();
        var periode         = form.findField('periode').getValue();

        Ext.Ajax.request({
            url     : BASE_URL + 'periode/c_periode/savePeriode',
            method  : 'POST',
            params  : {
                kode_periode  : kode_periode,
                periode       : periode
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
                    var form    = Ext.getCmp('formperiode');
                    var grid    = Ext.getCmp('gridperiode');
                    form.getForm().reset();
                    me.resetPanel();
                    grid.getSelectionModel().deselectAll();
                    Ext.ComponentQuery.query('#gridperiode')[0].getStore('RPJM.module.MasterData.Periode.store.Periode').reload(); 
                }else if (data.total === 2){
                    Ext.MessageBox.show({
                        title           : 'Error',
                        msg             : 'Periode Telah Terdaftar - Silahkan Gunakan Periode Lain',
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
                    var form    = Ext.getCmp('formperiode');
                    var grid    = Ext.getCmp('gridperiode');
                    form.getForm().reset();
                    me.resetPanel();
                    grid.getSelectionModel().deselectAll();
                    Ext.ComponentQuery.query('#gridperiode')[0].getStore('RPJM.module.MasterData.Periode.store.Periode').reload();                   
                }
            }
        });   
    },
    update: function(btn, evt, opts){
        var me             = this;
        var form           = btn.up('form').getForm();
                // console.log(form);
        var id             = form.findField('id').getValue();
        var kode_periode   = form.findField('kode_periode').getValue();
        var periode   = form.findField('periode').getValue();

        Ext.MessageBox.show({
            title           : 'Konfirmasi',
            msg             : 'Anda yakin akan merubah data?',
            buttons         : Ext.Msg.YESNO,
            icon            : Ext.MessageBox.WARNING,
            width           : 450,
            fn              : function(btn, evtObj){
                if (btn == 'yes') {
                    Ext.Ajax.request({
                        url     : BASE_URL + 'periode/c_periode/editPeriode',
                        method  : 'POST',
                        params  : {
                            id              : id,
                            kode_periode    : kode_periode,
                            periode         : periode
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
                                var form    = Ext.getCmp('formperiode');
                                var grid    = Ext.getCmp('gridperiode');
                                form.getForm().reset();
                                me.resetPanel();
                                grid.getSelectionModel().deselectAll();
                                Ext.ComponentQuery.query('#gridperiode')[0].getStore('RPJM.module.MasterData.Periode.store.Periode').reload(); 
                            }else if (data.total === 2){
                                Ext.MessageBox.show({
                                    title           : 'Error',
                                    msg             : 'Periode Telah Terdaftar - Silahkan Gunakan Periode Lain',
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
                                var form    = Ext.getCmp('formperiode');
                                var grid    = Ext.getCmp('gridperiode');
                                form.getForm().reset();
                                me.resetPanel();
                                grid.getSelectionModel().deselectAll();
                                Ext.ComponentQuery.query('#gridperiode')[0].getStore('RPJM.module.MasterData.Periode.store.Periode').reload();                   
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
                url     : BASE_URL + 'periode/c_periode/searchPeriode',
                method  : 'POST',
                params  : {name : value},
                success : function(response){
                    var data    = Ext.JSON.decode(response.responseText);
                    if(data.success){
                            var storeApproval = Ext.getStore('RPJM.module.MasterData.Periode.store.Periode');
                            storeApproval.removeAll();
                            storeApproval.add(data.data);
                    }
                }
            });
    },

    print : function(){
        window.location = BASE_URL + 'periode/c_periode/printPeriode/';
    },
})
