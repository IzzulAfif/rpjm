Ext.define('RPJM.module.Musrenbang.MusrenbangDesa.controller.MusrenbangDesa', {
    extend  : 'Ext.app.Controller',
    CheckedDataEdit: [],

    init: function() {
        var me = this;
        me.getStore('RPJM.module.Musrenbang.MusrenbangDesa.store.MusrenbangDesa').load();
        me.control({
            "gridmusrenbangdesa  button[action=delete]"          : {
                click: me.del
            }, 
            "#gridmusrenbangdesa"                                 : {
               select: me.viewMusrenbangDesa
            },            
            "formmusrenbangdesa  button[action=save]"        : {
                click: me.save
            }, 
            "formmusrenbangdesa  button[action=reset]"       : {
                click: me.resetPanel
            },
            "gridmusrenbangdesaorg"                          : {
               itemdblclick: me.addorg
            },
            "gridmusrenbangdesa textfield[action=search]"    : {
               keypress: me.search
            },
            "gridmusrenbangdesa button[action=print]"        : {
               click: me.print
            },
            "formmusrenbangdesa button[action=update]"       : {
               click: me.update
            }
        });
        me.callParent(arguments);
    },

    reloadStore: function(){
        var me = this;
        me.getStore('RPJM.module.Musrenbang.MusrenbangDesa.store.MusrenbangDesa').reload();
    },

    viewMusrenbangDesa: function(grid, record, item, index, e, eOpts){
        var id = record.data.id;
        var form = Ext.getCmp('formmusrenbangdesa');
        var grid = Ext.getCmp('gridmusrenbangdesa');
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
        var form       = Ext.getCmp('formmusrenbangdesa').getForm();
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
                        url             : BASE_URL + 'musrenbangdesa/c_musrenbangdesa/delMusrenbangDesa',
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
                                var form    = Ext.getCmp('formmusrenbangdesa');
                                var grid    = Ext.getCmp('gridmusrenbangdesa');
                                form.getForm().reset();
                                me.resetPanel();
                                grid.getSelectionModel().deselectAll();
                                Ext.ComponentQuery.query('#gridmusrenbangdesa')[0].getStore('RPJM.module.Musrenbang.MusrenbangDesa.store.MusrenbangDesa').reload();                             
                            } else {
                                var form    = Ext.getCmp('formmusrenbangdesa');
                                var grid    = Ext.getCmp('gridmusrenbangdesa');
                                form.getForm().reset();
                                me.resetPanel();
                                grid.getSelectionModel().deselectAll();
                                Ext.ComponentQuery.query('#gridmusrenbangdesa')[0].getStore('RPJM.module.Musrenbang.MusrenbangDesa.store.MusrenbangDesa').reload(); 
                            }
                        }
                    });
                }
            }
        })
    },

    resetPanel: function(btn, gridPanel, selected) {//Reset Form
        var me = this;
        var form = Ext.getCmp('formmusrenbangdesa');
        var grid = Ext.getCmp('gridmusrenbangdesa');
        form.getForm().reset();

        grid.getSelectionModel().clearSelections();
        me.getStore('RPJM.module.Musrenbang.MusrenbangDesa.store.MusrenbangDesa').reload();

    },

    save: function(btn, evt, opts){
        var me         = this;
        var form       = btn.up('form').getForm();
        var kode_bidangdesa     = form.findField('kode_bidangdesa').getValue();
        var kegiatan            = form.findField('kegiatan').getValue();
        var lokasi              = form.findField('lokasi').getValue();
        var volume              = form.findField('volume').getValue();
        var kode_satuan         = form.findField('kode_satuan').getValue();
        var swadana             = form.findField('swadana').getValue();
        var apbd_des            = form.findField('apbd_des').getValue();
        var apbd_kab            = form.findField('apbd_kab').getValue();
        var apbd_prov           = form.findField('apbd_prov').getValue();
        var apbn                = form.findField('apbn').getValue();
        var kode_prioritas      = form.findField('kode_prioritas').getValue();
        var latitude            = form.findField('latitude').getValue();
        var longitude           = form.findField('longitude').getValue();
        var catatan_deskel      = form.findField('catatan_deskel').getValue();

        Ext.Ajax.request({
            url     : BASE_URL + 'musrenbangdesa/c_musrenbangdesa/saveMusrenbangDesa',
            method  : 'POST',
            params  : {
                kode_bidangdesa  : kode_bidangdesa,
                kegiatan            : kegiatan,
                lokasi              : lokasi,
                volume              : volume,
                kode_satuan         : kode_satuan,
                swadana             : swadana,
                apbd_des            : apbd_des,
                apbd_kab            : apbd_kab,
                apbd_prov           : apbd_prov,
                apbn                : apbn,
                kode_prioritas      : kode_prioritas,
                latitude            : latitude,
                longitude           : longitude,
                catatan_deskel   : catatan_deskel
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
                    var form    = Ext.getCmp('formmusrenbangdesa');
                    var grid    = Ext.getCmp('gridmusrenbangdesa');
                    form.getForm().reset();
                    me.resetPanel();
                    grid.getSelectionModel().deselectAll();
                    Ext.ComponentQuery.query('#gridmusrenbangdesa')[0].getStore('RPJM.module.Musrenbang.MusrenbangDesa.store.MusrenbangDesa').reload(); 
                }else if (data.total === 2){
                    Ext.MessageBox.show({
                        title           : 'Error',
                        msg             : 'MusrenbangDesa Telah Terdaftar - Silahkan Gunakan MusrenbangDesa Lain',
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
                    var form    = Ext.getCmp('formmusrenbangdesa');
                    var grid    = Ext.getCmp('gridmusrenbangdesa');
                    form.getForm().reset();
                    me.resetPanel();
                    grid.getSelectionModel().deselectAll();
                    Ext.ComponentQuery.query('#gridmusrenbangdesa')[0].getStore('RPJM.module.Musrenbang.MusrenbangDesa.store.MusrenbangDesa').reload();                   
                }
            }
        });   
    },

    update: function(btn, evt, opts){
        var me             = this;
        var form           = Ext.getCmp('formmusrenbangdesa').getForm();
        var kode_musrenbang     = form.findField('kode_musrenbang').getValue();
        var kode_bidangdesa  = form.findField('kode_bidangdesa').getValue();
        var kegiatan            = form.findField('kegiatan').getValue();
        var lokasi              = form.findField('lokasi').getValue();
        var volume              = form.findField('volume').getValue();
        var kode_satuan         = form.findField('kode_satuan').getValue();
        var swadana             = form.findField('swadana').getValue();
        var apbd_des            = form.findField('apbd_des').getValue();
        var apbd_kab            = form.findField('apbd_kab').getValue();
        var apbd_prov           = form.findField('apbd_prov').getValue();
        var apbn                = form.findField('apbn').getValue();
        var kode_prioritas      = form.findField('kode_prioritas').getValue();
        var latitude            = form.findField('latitude').getValue();
        var longitude           = form.findField('longitude').getValue();
        var catatan_deskel   = form.findField('catatan_deskel').getValue();
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
                        url     : BASE_URL + 'musrenbangdesa/c_musrenbangdesa/editMusrenbangDesa',
                        method  : 'GET',
                        params  : {
                            kode_musrenbang     : kode_musrenbang,
                            kode_bidangdesa  : kode_bidangdesa,
                            kegiatan            : kegiatan,
                            lokasi              : lokasi,
                            volume              : volume,
                            kode_satuan         : kode_satuan,
                            swadana             : swadana,
                            apbd_des            : apbd_des,
                            apbd_kab            : apbd_kab,
                            apbd_prov           : apbd_prov,
                            apbn                : apbn,
                            kode_prioritas      : kode_prioritas,
                            latitude            : latitude,
                            longitude           : longitude,
                            catatan_deskel   : catatan_deskel
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
                                var form    = Ext.getCmp('formmusrenbangdesa');
                                var grid    = Ext.getCmp('gridmusrenbangdesa');
                                form.getForm().reset();
                                me.resetPanel();
                                grid.getSelectionModel().deselectAll();
                                Ext.ComponentQuery.query('#gridmusrenbangdesa')[0].getStore('RPJM.module.Musrenbang.MusrenbangDesa.store.MusrenbangDesa').reload(); 
                            }else if (data.total === 2){
                                Ext.MessageBox.show({
                                    title           : 'Error',
                                    msg             : 'MusrenbangDesa Telah Terdaftar - Silahkan Gunakan MusrenbangDesa Lain',
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
                                var form    = Ext.getCmp('formmusrenbangdesa');
                                var grid    = Ext.getCmp('gridmusrenbangdesa');
                                form.getForm().reset();
                                me.resetPanel();
                                grid.getSelectionModel().deselectAll();
                                Ext.ComponentQuery.query('#gridmusrenbangdesa')[0].getStore('RPJM.module.Musrenbang.MusrenbangDesa.store.MusrenbangDesa').reload();                   
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
            url     : BASE_URL + 'musrenbangdesa/c_musrenbangdesa/searchMusrenbangDesa',
            method  : 'POST',
            params  : {name : value},
            success : function(response){
                var data    = Ext.JSON.decode(response.responseText);
                if(data.success){
                        var storeApproval = Ext.getStore('RPJM.module.Musrenbang.MusrenbangDesa.store.MusrenbangDesa');
                        storeApproval.removeAll();
                        storeApproval.add(data.data);
                }
            }
        });
    },

    print : function(){
        window.location = BASE_URL + 'musrenbangdesa/c_musrenbangdesa/printMusrenbangDesa/';
    },
})
