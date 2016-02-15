Ext.define('RPJM.module.Musrenbang.UsulanKomunitas.controller.UsulanKomunitas', {
    extend  : 'Ext.app.Controller',
    CheckedDataEdit: [],

    init: function() {
        var me = this;
        me.getStore('RPJM.module.Musrenbang.UsulanKomunitas.store.UsulanKomunitas').load();
        me.control({
            "gridusulankomunitas  button[action=delete]"          : {
                click: me.del
            }, 
            "#gridusulankomunitas"                                 : {
               select: me.viewUsulanKomunitas
            },            
            "formusulankomunitas  button[action=save]"        : {
                click: me.save
            }, 
            "formusulankomunitas  button[action=reset]"       : {
                click: me.resetPanel
            },
            "gridusulankomunitasorg"                          : {
               itemdblclick: me.addorg
            },
            "gridusulankomunitas textfield[action=search]"    : {
               keypress: me.search
            },
            "gridusulankomunitas button[action=print]"        : {
               click: me.print
            },
            "formusulankomunitas button[action=update]"       : {
               click: me.update
            }
        });
        me.callParent(arguments);
    },

    reloadStore: function(){
        var me = this;
        me.getStore('RPJM.module.Musrenbang.UsulanKomunitas.store.UsulanKomunitas').reload();
    },

    viewUsulanKomunitas: function(grid, record, item, index, e, eOpts){
        var id = record.data.id;
        var form = Ext.getCmp('formusulankomunitas');
        var grid = Ext.getCmp('gridusulankomunitas');
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
        var form       = Ext.getCmp('formusulankomunitas').getForm();
        var kode_musrenbang  = form.findField('kode_musrenbang').getValue();

        Ext.MessageBox.show({
            title           : 'Konfirmasi',
            msg             : 'Anda yakin akan menghapus data yang terseleksi?',
            buttons         : Ext.Msg.YESNO,
            icon            : Ext.MessageBox.WARNING,
            width           : 450,
            fn              : function(btn, evtObj){
                if (btn == 'yes') {
                    Ext.Ajax.request({
                        url             : BASE_URL + 'usulankomunitas/c_usulankomunitas/delUsulanKomunitas',
                        method          : 'POST',
                        params          : {
                            kode_musrenbang   : kode_musrenbang
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
                                var form    = Ext.getCmp('formusulankomunitas');
                                var grid    = Ext.getCmp('gridusulankomunitas');
                                form.getForm().reset();
                                me.resetPanel();
                                grid.getSelectionModel().deselectAll();
                                Ext.ComponentQuery.query('#gridusulankomunitas')[0].getStore('RPJM.module.Musrenbang.UsulanKomunitas.store.UsulanKomunitas').reload();                             
                            } else {
                                var form    = Ext.getCmp('formusulankomunitas');
                                var grid    = Ext.getCmp('gridusulankomunitas');
                                form.getForm().reset();
                                me.resetPanel();
                                grid.getSelectionModel().deselectAll();
                                Ext.ComponentQuery.query('#gridusulankomunitas')[0].getStore('RPJM.module.Musrenbang.UsulanKomunitas.store.UsulanKomunitas').reload(); 
                            }
                        }
                    });
                }
            }
        })
    },

    resetPanel: function(btn, gridPanel, selected) {//Reset Form
        var me = this;
        var form = Ext.getCmp('formusulankomunitas');
        var grid = Ext.getCmp('gridusulankomunitas');
        form.getForm().reset();

        grid.getSelectionModel().clearSelections();
        me.getStore('RPJM.module.Musrenbang.UsulanKomunitas.store.UsulanKomunitas').reload();

    },

    save: function(btn, evt, opts){
        var me         = this;
        var form       = btn.up('form').getForm();
        var kegiatan            = form.findField('kegiatan').getValue();
        var lokasi              = form.findField('lokasi').getValue();
        var volume              = form.findField('volume').getValue();
        var kode_satuan         = form.findField('kode_satuan').getValue();
        var swadana             = form.findField('swadana').getValue();
        var apbd_des            = form.findField('apbd_des').getValue();
        var apbd_kab            = form.findField('apbd_kab').getValue();
        var apbd_prov           = form.findField('apbd_prov').getValue();
        var apbn                = form.findField('apbn').getValue();
        var latitude            = form.findField('latitude').getValue();
        var longitude           = form.findField('longitude').getValue();

        Ext.Ajax.request({
            url     : BASE_URL + 'usulankomunitas/c_usulankomunitas/saveUsulanKomunitas',
            method  : 'POST',
            params  : {
                kegiatan            : kegiatan,
                lokasi              : lokasi,
                volume              : volume,
                kode_satuan         : kode_satuan,
                swadana             : swadana,
                apbd_des            : apbd_des,
                apbd_kab            : apbd_kab,
                apbd_prov           : apbd_prov,
                apbn                : apbn,
                latitude            : latitude,
                longitude           : longitude,
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
                    var form    = Ext.getCmp('formusulankomunitas');
                    var grid    = Ext.getCmp('gridusulankomunitas');
                    form.getForm().reset();
                    me.resetPanel();
                    grid.getSelectionModel().deselectAll();
                    Ext.ComponentQuery.query('#gridusulankomunitas')[0].getStore('RPJM.module.Musrenbang.UsulanKomunitas.store.UsulanKomunitas').reload(); 
                }else if (data.total === 2){
                    Ext.MessageBox.show({
                        title           : 'Error',
                        msg             : 'UsulanKomunitas Telah Terdaftar - Silahkan Gunakan UsulanKomunitas Lain',
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
                    var form    = Ext.getCmp('formusulankomunitas');
                    var grid    = Ext.getCmp('gridusulankomunitas');
                    form.getForm().reset();
                    me.resetPanel();
                    grid.getSelectionModel().deselectAll();
                    Ext.ComponentQuery.query('#gridusulankomunitas')[0].getStore('RPJM.module.Musrenbang.UsulanKomunitas.store.UsulanKomunitas').reload();                   
                }
            }
        });   
    },

    update: function(btn, evt, opts){
        var me             = this;
        var form           = Ext.getCmp('formusulankomunitas').getForm();
        var kode_musrenbang     = form.findField('kode_musrenbang').getValue();
        var kegiatan            = form.findField('kegiatan').getValue();
        var lokasi              = form.findField('lokasi').getValue();
        var volume              = form.findField('volume').getValue();
        var kode_satuan         = form.findField('kode_satuan').getValue();
        var swadana             = form.findField('swadana').getValue();
        var apbd_des            = form.findField('apbd_des').getValue();
        var apbd_kab            = form.findField('apbd_kab').getValue();
        var apbd_prov           = form.findField('apbd_prov').getValue();
        var apbn                = form.findField('apbn').getValue();
        var latitude            = form.findField('latitude').getValue();
        var longitude           = form.findField('longitude').getValue();
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
                        url     : BASE_URL + 'usulankomunitas/c_usulankomunitas/editUsulanKomunitas',
                        method  : 'GET',
                        params  : {
                            kode_musrenbang     : kode_musrenbang,
                            kegiatan            : kegiatan,
                            lokasi              : lokasi,
                            volume              : volume,
                            kode_satuan         : kode_satuan,
                            swadana             : swadana,
                            apbd_des            : apbd_des,
                            apbd_kab            : apbd_kab,
                            apbd_prov           : apbd_prov,
                            apbn                : apbn,
                            latitude            : latitude,
                            longitude           : longitude
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
                                var form    = Ext.getCmp('formusulankomunitas');
                                var grid    = Ext.getCmp('gridusulankomunitas');
                                form.getForm().reset();
                                me.resetPanel();
                                grid.getSelectionModel().deselectAll();
                                Ext.ComponentQuery.query('#gridusulankomunitas')[0].getStore('RPJM.module.Musrenbang.UsulanKomunitas.store.UsulanKomunitas').reload(); 
                            }else if (data.total === 2){
                                Ext.MessageBox.show({
                                    title           : 'Error',
                                    msg             : 'UsulanKomunitas Telah Terdaftar - Silahkan Gunakan UsulanKomunitas Lain',
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
                                var form    = Ext.getCmp('formusulankomunitas');
                                var grid    = Ext.getCmp('gridusulankomunitas');
                                form.getForm().reset();
                                me.resetPanel();
                                grid.getSelectionModel().deselectAll();
                                Ext.ComponentQuery.query('#gridusulankomunitas')[0].getStore('RPJM.module.Musrenbang.UsulanKomunitas.store.UsulanKomunitas').reload();                   
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
            url     : BASE_URL + 'usulankomunitas/c_usulankomunitas/searchUsulanKomunitas',
            method  : 'POST',
            params  : {name : value},
            success : function(response){
                var data    = Ext.JSON.decode(response.responseText);
                if(data.success){
                        var storeApproval = Ext.getStore('RPJM.module.Musrenbang.UsulanKomunitas.store.UsulanKomunitas');
                        storeApproval.removeAll();
                        storeApproval.add(data.data);
                }
            }
        });
    },

    print : function(){
        window.location = BASE_URL + 'usulankomunitas/c_usulankomunitas/printUsulanKomunitas/';
    },
})
