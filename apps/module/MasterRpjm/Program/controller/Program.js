Ext.define('RPJM.module.MasterRpjm.Program.controller.Program', {
    extend  : 'Ext.app.Controller',
    CheckedDataEdit: [],

    init: function() {
        var me = this;
        me.getStore('RPJM.module.MasterRpjm.Program.store.Program').load();
        me.control({
            "gridprogram  button[action=delete]"                    : {
                click: me.del
            }, 
            "#gridprogram"                                          : {
               select: me.viewProgram
            },
            "#gridlookupbidang"                                     : {
               select: me.viewLookupBidang
            },            
            "formprogram  button[action=save]"                      : {
                click: me.save
            }, 
            "formprogram  button[action=reset]"                     : {
                click: me.resetPanel
            },
            "formprogram  button[action=lookupBidang]"              : {
                click: me.lookupBidang
            },
            "gridprogramorg"                                        : {
               itemdblclick: me.addorg
            },
            "gridprogram textfield[action=search]"                  : {
               keypress: me.search
            },
            "gridprogram button[action=print]"                      : {
               click: me.print
            },
            "formprogram button[action=update]"                     : {
               click: me.update
            }
        });
        me.callParent(arguments);
    },

    reloadStore: function(){
        var me = this;
        me.getStore('RPJM.module.MasterRpjm.Program.store.Program').reload();
    },

    viewProgram: function(grid, record, item, index, e, eOpts){
        var id = record.data.id;
        var form = Ext.getCmp('formprogram');
        var grid = Ext.getCmp('gridprogram');
        form.getForm().setValues(record.data);
    },

    viewLookupBidang: function(grid, record, item, index, e, eOpts){
        var id      = record.data.id;
        var form    = Ext.getCmp('formprogram');
        var window  = Ext.getCmp('windowbidang');
        form.getForm().setValues(record.data);
        window.close();
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
        var form                = Ext.getCmp('formprogram').getForm();
        var kode_programrpjm    = form.findField('kode_programrpjm').getValue();

        Ext.MessageBox.show({
            title           : 'Konfirmasi',
            msg             : 'Anda yakin akan menghapus data yang terseleksi?',
            buttons         : Ext.Msg.YESNO,
            icon            : Ext.MessageBox.WARNING,
            width           : 450,
            fn              : function(btn, evtObj){
                if (btn == 'yes') {
                    Ext.Ajax.request({
                        url             : BASE_URL + 'program/c_program/delProgram',
                        method          : 'POST',
                        params          : {
                            kode_programrpjm   : kode_programrpjm
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
                                var form    = Ext.getCmp('formprogram');
                                var grid    = Ext.getCmp('gridprogram');
                                form.getForm().reset();
                                me.resetPanel();
                                grid.getSelectionModel().deselectAll();
                                Ext.ComponentQuery.query('#gridprogram')[0].getStore('RPJM.module.MasterRpjm.Program.store.Program').reload();                             
                            } else {
                                var form    = Ext.getCmp('formprogram');
                                var grid    = Ext.getCmp('gridprogram');
                                form.getForm().reset();
                                me.resetPanel();
                                grid.getSelectionModel().deselectAll();
                                Ext.ComponentQuery.query('#gridprogram')[0].getStore('RPJM.module.MasterRpjm.Program.store.Program').reload(); 
                            }
                        }
                    });
                }
            }
        })
    },

    lookupBidang : function(btn, combo, evt, e, opts, click){
        this.getStore('RPJM.module.MasterRpjm.Program.store.LookupBidang').load();
        var win = Ext.create('RPJM.module.MasterRpjm.Program.view.grid.WindowBidang');
        win.show();
        // win.down('form').loadRecord(record);
    },

    resetPanel: function(btn, gridPanel, selected) {//Reset Form
        var me = this;
        var form = Ext.getCmp('formprogram');
        var grid = Ext.getCmp('gridprogram');
        form.getForm().reset();

        var loadingan = Ext.getCmp('kode_bidangrpjm');
        loadingan.reset();

        grid.getSelectionModel().clearSelections();
        me.getStore('RPJM.module.MasterRpjm.Program.store.Program').reload();

    },

    save: function(btn, evt, opts){
        var me                  = this;
        var form                = btn.up('form').getForm();
        var kode_bidangrpjm     = form.findField('kode_bidangrpjm').getValue();
        var programrpjm         = form.findField('programrpjm').getValue();
        var no_urut             = form.findField('no_urut').getValue();
        var kode_subperiode     = form.findField('kode_subperiode').getValue();
        Ext.Ajax.request({
            headers : {'Content-Type':'multipart/form-data; charset=UTF-8'},
            url     : BASE_URL + 'program/c_program/saveProgram',
            method  : 'GET',
            params  : {
                kode_bidangrpjm     : kode_bidangrpjm,
                programrpjm         : programrpjm,
                no_urut             : no_urut,
                kode_subperiode     : kode_subperiode
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
                    var form    = Ext.getCmp('formprogram');
                    var grid    = Ext.getCmp('gridprogram');
                    form.getForm().reset();
                    me.resetPanel();
                    grid.getSelectionModel().deselectAll();
                    Ext.ComponentQuery.query('#gridprogram')[0].getStore('RPJM.module.MasterRpjm.Program.store.Program').reload(); 
                }else if (data.total === 2){
                    Ext.MessageBox.show({
                        title           : 'Error',
                        msg             : 'Program Telah Terdaftar - Silahkan Gunakan Program Lain',
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
                    var form    = Ext.getCmp('formprogram');
                    var grid    = Ext.getCmp('gridprogram');
                    form.getForm().reset();
                    me.resetPanel();
                    grid.getSelectionModel().deselectAll();
                    Ext.ComponentQuery.query('#gridprogram')[0].getStore('RPJM.module.MasterRpjm.Program.store.Program').reload();                   
                }
            }
        });   
    },

    update: function(btn, evt, opts){
        var me                  = this;
        var form                = btn.up('form').getForm();
        var id                  = form.findField('id').getValue();
        var kode_bidangrpjm     = form.findField('kode_bidangrpjm').getValue();
        var programrpjm         = form.findField('programrpjm').getValue();
        var kode_programrpjm    = form.findField('kode_programrpjm').getValue();
        var no_urut             = form.findField('no_urut').getValue();
        var kode_subperiode     = form.findField('kode_subperiode').getValue();
        Ext.MessageBox.show({
            title           : 'Konfirmasi',
            msg             : 'Anda yakin akan merubah data?',
            buttons         : Ext.Msg.YESNO,
            icon            : Ext.MessageBox.WARNING,
            width           : 450,
            fn              : function(btn, evtObj){
                if (btn == 'yes') {
                    Ext.Ajax.request({
                        headers : {'Content-Type':'multipart/form-data; charset=UTF-8'},
                        url     : BASE_URL + 'program/c_program/editProgram',
                        method  : 'GET',
                        params  : {
                            id                  : id,
                            kode_bidangrpjm     : kode_bidangrpjm,
                            programrpjm         : programrpjm,
                            kode_programrpjm    : kode_programrpjm,
                            no_urut             : no_urut,
                            kode_subperiode     : kode_subperiode
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
                                var form    = Ext.getCmp('formprogram');
                                var grid    = Ext.getCmp('gridprogram');
                                form.getForm().reset();
                                me.resetPanel();
                                grid.getSelectionModel().deselectAll();
                                Ext.ComponentQuery.query('#gridprogram')[0].getStore('RPJM.module.MasterRpjm.Program.store.Program').reload(); 
                            }else if (data.total === 2){
                                Ext.MessageBox.show({
                                    title           : 'Error',
                                    msg             : 'Program Telah Terdaftar - Silahkan Gunakan Program Lain',
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
                                var form    = Ext.getCmp('formprogram');
                                var grid    = Ext.getCmp('gridprogram');
                                form.getForm().reset();
                                me.resetPanel();
                                grid.getSelectionModel().deselectAll();
                                Ext.ComponentQuery.query('#gridprogram')[0].getStore('RPJM.module.MasterRpjm.Program.store.Program').reload();                   
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
            url     : BASE_URL + 'program/c_program/searchProgram',
            method  : 'POST',
            params  : {name : value},
            success : function(response){
                var data    = Ext.JSON.decode(response.responseText);
                if(data.success){
                        var storeApproval = Ext.getStore('RPJM.module.MasterRpjm.Program.store.Program');
                        storeApproval.removeAll();
                        storeApproval.add(data.data);
                }
            }
        });
    },

    print : function(){
        window.location = BASE_URL + 'program/c_program/printProgram/';
    },
})
