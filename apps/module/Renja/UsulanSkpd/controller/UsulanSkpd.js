Ext.define('RPJM.module.Renja.UsulanSkpd.controller.UsulanSkpd', {
    extend  : 'Ext.app.Controller',
    CheckedDataEdit: [],

    init: function() {
        var me = this;
        me.getStore('RPJM.module.Renja.UsulanSkpd.store.UsulanSkpd').load();
        me.control({
            "gridusulanskpd  button[action=delete]"          : {
                click: me.del
            }, 
            "#gridusulanskpd"                                 : {
               select: me.viewUsulanSkpd
            },            
            "formusulanskpd  button[action=save]"        : {
                click: me.save
            }, 
            "formusulanskpd  button[action=reset]"       : {
                click: me.resetPanel
            },
            "gridusulanskpdorg"                          : {
               itemdblclick: me.addorg
            },
            "gridusulanskpd textfield[action=search]"    : {
               keypress: me.search
            },
            "gridusulanskpd button[action=print]"        : {
               click: me.print
            },
            "formusulanskpd button[action=update]"       : {
               click: me.update
            }
        });
        me.callParent(arguments);
    },

    reloadStore: function(){
        var me = this;
        me.getStore('RPJM.module.Renja.UsulanSkpd.store.UsulanSkpd').reload();
    },

    viewUsulanSkpd: function(grid, record, item, index, e, eOpts){
        var id = record.data.id;
        var form = Ext.getCmp('formusulanskpd');
        var grid = Ext.getCmp('gridusulanskpd');
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
        var form       = Ext.getCmp('formusulanskpd').getForm();
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
                        url             : BASE_URL + 'usulanskpd/c_usulanskpd/delUsulanSkpd',
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
                                var form    = Ext.getCmp('formusulanskpd');
                                var grid    = Ext.getCmp('gridusulanskpd');
                                form.getForm().reset();
                                me.resetPanel();
                                grid.getSelectionModel().deselectAll();
                                Ext.ComponentQuery.query('#gridusulanskpd')[0].getStore('RPJM.module.Renja.UsulanSkpd.store.UsulanSkpd').reload();                             
                            } else {
                                var form    = Ext.getCmp('formusulanskpd');
                                var grid    = Ext.getCmp('gridusulanskpd');
                                form.getForm().reset();
                                me.resetPanel();
                                grid.getSelectionModel().deselectAll();
                                Ext.ComponentQuery.query('#gridusulanskpd')[0].getStore('RPJM.module.Renja.UsulanSkpd.store.UsulanSkpd').reload(); 
                            }
                        }
                    });
                }
            }
        })
    },

    resetPanel: function(btn, gridPanel, selected) {//Reset Form
        var me = this;
        var form = Ext.getCmp('formusulanskpd');
        var grid = Ext.getCmp('gridusulanskpd');
        form.getForm().reset();

        grid.getSelectionModel().clearSelections();
        me.getStore('RPJM.module.Renja.UsulanSkpd.store.UsulanSkpd').reload();

    },

    save: function(btn, evt, opts){
        var me         = this;
        var form       = btn.up('form').getForm();
        var kegiatan            = form.findField('kegiatan').getValue();
        var lokasi              = form.findField('lokasi').getValue();
        var volume              = form.findField('volume').getValue();
        var kode_satuan         = form.findField('kode_satuan').getValue();
        var latitude            = form.findField('latitude').getValue();
        var longitude           = form.findField('longitude').getValue();
        var penerimaan_lain     = form.findField('penerimaan_lain').getValue();
        var rsud                = form.findField('rsud').getValue();
        var kapitasi            = form.findField('kapitasi').getValue();
        var bangub              = form.findField('bangub').getValue();
        var sektoral_apbd       = form.findField('sektoral_apbd').getValue();
        var dak                 = form.findField('dak').getValue();
        var dbhcht              = form.findField('dbhcht').getValue();
        var did                 = form.findField('did').getValue();
        var tp                  = form.findField('tp').getValue();
        var dekonsentrasi       = form.findField('dekonsentrasi').getValue();
        var sektoral_apbn       = form.findField('sektoral_apbn').getValue();
        var current_goal        = form.findField('current_goal').getValue();
        var next_goal           = form.findField('next_goal').getValue();
        var next_anggaran       = form.findField('next_anggaran').getValue();

        Ext.Ajax.request({
            url     : BASE_URL + 'usulanskpd/c_usulanskpd/saveUsulanSkpd',
            method  : 'POST',
            params  : {
                kegiatan            : kegiatan,
                lokasi              : lokasi,
                volume              : volume,
                kode_satuan         : kode_satuan,
                latitude            : latitude,
                longitude           : longitude,
                penerimaan_lain     : penerimaan_lain,
                rsud                : rsud,
                kapitasi            : kapitasi,
                bangub              : bangub,
                sektoral_apbd       : sektoral_apbd,
                dak                 : dak,
                dbhcht              : dbhcht,
                did                 : did,
                tp                  : tp,
                dekonsentrasi       : dekonsentrasi,
                sektoral_apbn       : sektoral_apbn,
                current_goal        : current_goal,
                next_goal           : next_goal,
                next_anggaran       : next_anggaran

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
                    var form    = Ext.getCmp('formusulanskpd');
                    var grid    = Ext.getCmp('gridusulanskpd');
                    form.getForm().reset();
                    me.resetPanel();
                    grid.getSelectionModel().deselectAll();
                    Ext.ComponentQuery.query('#gridusulanskpd')[0].getStore('RPJM.module.Renja.UsulanSkpd.store.UsulanSkpd').reload(); 
                }else if (data.total === 2){
                    Ext.MessageBox.show({
                        title           : 'Error',
                        msg             : 'UsulanSkpd Telah Terdaftar - Silahkan Gunakan UsulanSkpd Lain',
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
                    var form    = Ext.getCmp('formusulanskpd');
                    var grid    = Ext.getCmp('gridusulanskpd');
                    form.getForm().reset();
                    me.resetPanel();
                    grid.getSelectionModel().deselectAll();
                    Ext.ComponentQuery.query('#gridusulanskpd')[0].getStore('RPJM.module.Renja.UsulanSkpd.store.UsulanSkpd').reload();                   
                }
            }
        });   
    },

    update: function(btn, evt, opts){
        var me             = this;
        var form           = Ext.getCmp('formusulanskpd').getForm();
        var kode_musrenbang     = form.findField('kode_musrenbang').getValue();
        var kegiatan            = form.findField('kegiatan').getValue();
        var lokasi              = form.findField('lokasi').getValue();
        var volume              = form.findField('volume').getValue();
        var kode_satuan         = form.findField('kode_satuan').getValue();
        var latitude            = form.findField('latitude').getValue();
        var longitude           = form.findField('longitude').getValue();
        var penerimaan_lain     = form.findField('penerimaan_lain').getValue();
        var rsud                = form.findField('rsud').getValue();
        var kapitasi            = form.findField('kapitasi').getValue();
        var bangub              = form.findField('bangub').getValue();
        var sektoral_apbd       = form.findField('sektoral_apbd').getValue();
        var dak                 = form.findField('dak').getValue();
        var dbhcht              = form.findField('dbhcht').getValue();
        var did                 = form.findField('did').getValue();
        var tp                  = form.findField('tp').getValue();
        var dekonsentrasi       = form.findField('dekonsentrasi').getValue();
        var sektoral_apbn       = form.findField('sektoral_apbn').getValue();
        var current_goal        = form.findField('current_goal').getValue();
        var next_goal           = form.findField('next_goal').getValue();
        var next_anggaran       = form.findField('next_anggaran').getValue();
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
                        url     : BASE_URL + 'usulanskpd/c_usulanskpd/editUsulanSkpd',
                        method  : 'GET',
                        params  : {
                            kode_musrenbang     : kode_musrenbang,
                            kegiatan            : kegiatan,
                            lokasi              : lokasi,
                            volume              : volume,
                            kode_satuan         : kode_satuan,
                            latitude            : latitude,
                            longitude           : longitude,
                            penerimaan_lain     : penerimaan_lain,
                            rsud                : rsud,
                            kapitasi            : kapitasi,
                            bangub              : bangub,
                            sektoral_apbd       : sektoral_apbd,
                            dak                 : dak,
                            dbhcht              : dbhcht,
                            did                 : did,
                            tp                  : tp,
                            dekonsentrasi       : dekonsentrasi,
                            sektoral_apbn       : sektoral_apbn,
                            current_goal        : current_goal,
                            next_goal           : next_goal,
                            next_anggaran       : next_anggaran
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
                                var form    = Ext.getCmp('formusulanskpd');
                                var grid    = Ext.getCmp('gridusulanskpd');
                                form.getForm().reset();
                                me.resetPanel();
                                grid.getSelectionModel().deselectAll();
                                Ext.ComponentQuery.query('#gridusulanskpd')[0].getStore('RPJM.module.Renja.UsulanSkpd.store.UsulanSkpd').reload(); 
                            }else if (data.total === 2){
                                Ext.MessageBox.show({
                                    title           : 'Error',
                                    msg             : 'UsulanSkpd Telah Terdaftar - Silahkan Gunakan UsulanSkpd Lain',
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
                                var form    = Ext.getCmp('formusulanskpd');
                                var grid    = Ext.getCmp('gridusulanskpd');
                                form.getForm().reset();
                                me.resetPanel();
                                grid.getSelectionModel().deselectAll();
                                Ext.ComponentQuery.query('#gridusulanskpd')[0].getStore('RPJM.module.Renja.UsulanSkpd.store.UsulanSkpd').reload();                   
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
            url     : BASE_URL + 'usulanskpd/c_usulanskpd/searchUsulanSkpd',
            method  : 'POST',
            params  : {name : value},
            success : function(response){
                var data    = Ext.JSON.decode(response.responseText);
                if(data.success){
                        var storeApproval = Ext.getStore('RPJM.module.Renja.UsulanSkpd.store.UsulanSkpd');
                        storeApproval.removeAll();
                        storeApproval.add(data.data);
                }
            }
        });
    },

    print : function(){
        window.location = BASE_URL + 'usulanskpd/c_usulanskpd/printUsulanSkpd/';
    },
})
