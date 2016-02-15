Ext.define('RPJM.module.Renja.TransaksiRenja.controller.TransaksiRenja', {
    extend  : 'Ext.app.Controller',
    CheckedDataEdit: [],

    init: function() {
        var me = this;
        me.getStore('RPJM.module.Renja.TransaksiRenja.store.TransaksiRenja').load();

        me.control({
            "gridtransaksirenja  button[action=delete]"      : {
                click: me.del
            }, 
            "#gridtransaksirenja"                            : {
               select: me.viewTransaksiRenja
            },   
            "#gridlookupkegiatan"                            : {
               select: me.viewLookupKegiatan
            }, 
            "#gridskpd button[action=loadsasaran]"           : {
               click: me.loadSasaran
            },
            "#gridskpd button[action=cetaksasaran]"           : {
               click: me.print
            },
            //*====== FORM LOADING PADA PANEL SEBELAH KIRI ======*//  
            "formloading  button[action=reset]"              : {
                click: me.resetPanel
            },   
            "formloading  button[action=lookupKegiatan]"     : {
                click: me.lookupKegiatan
            },

            //*============== Call POPUP Usulan ==================*// 
            "#windowsasaran button[action=loadSKPD]"         : {
               click: me.loadSKPD
            }, 
            "#windowsasaran button[action=loadMusrenKec]"    : {
               click: me.loadMusrenKec
            },    
            "#windowsasaran button[action=loadMusrenKel]"    : {
               click: me.loadMusrenKel
            },  
            "#windowsasaran button[action=loadMusrenDes]"    : {
               click: me.loadMusrenDes
            },  
            "#windowsasaran button[action=loadReses]"    : {
               click: me.loadReses
            },
            "#windowsasaran button[action=loadMasyarakat]"    : {
               click: me.loadMasyarakat
            },

            //*============== Usulan SKPD ==================*// 
            "formrenjaskpd  button[action=loadKegiatan]"     : {
                click: me.loadKegiatan
            },
            "formrenjaskpd  button[action=loadUsulanSkpd]"   : {
                click: me.loadUsulanSkpd
            },
            "#gridlookupkegiatanskpd"                        : {
               select: me.viewLookupKegiatanSkpd
            },        
            "#gridusulanskpd"                                : {
               select: me.viewLookupUsulanSkpd
            },    
            "formrenjaskpd  button[action=saveRenja]"        : {
                click: me.saveRenja
            }, 
            "formrenjaskpd  button[action=resetRenja]"       : {
                click: me.resetRenja
            },

            //*============== HASIL RESES ==================*//  
            "formrenjareses  button[action=loadKegiatanReses]"   : {
                click: me.loadKegiatanReses
            },
            "formrenjareses  button[action=loadUsulanReses]"     : {
                click: me.loadUsulanReses
            },
            "#gridlookupkegiatanreses"                              : {
               select: me.viewLookupKegiatanReses
            },
            "#gridusulanreses"                                      : {
               select: me.viewLookupUsulanReses
            },                  
            "formrenjareses  button[action=saveRenjaReses]"      : {
                click: me.saveRenjaReses
            }, 
            "formrenjareses  button[action=resetRenjaReses]"     : {
                click: me.resetRenjaReses
            },

            //*============== USULAN MASYARAKAT ==================*//  
            "formrenjamasyarakat  button[action=loadKegiatanMasyarakat]"   : {
                click: me.loadKegiatanMasyarakat
            },
            "formrenjamasyarakat  button[action=loadUsulanMasyarakat]"     : {
                click: me.loadUsulanMasyarakat
            },
            "#gridlookupkegiatanmasyarakat"                              : {
               select: me.viewLookupKegiatanMasyarakat
            },
            "#gridusulanmasyarakat"                                      : {
               select: me.viewLookupUsulanMasyarakat
            },                  
            "formrenjamasyarakat  button[action=saveRenjaMasyarakat]"      : {
                click: me.saveRenjaMasyarakat
            }, 
            "formrenjamasyarakat  button[action=resetRenjaMasyarakat]"     : {
                click: me.resetRenjaMasyarakat
            },

            //*============== Usulan KECAMATAN ==================*//  
            "formrenjakecamatan  button[action=loadKegiatanKecamatan]"   : {
                click: me.loadKegiatanKecamatan
            },
            "formrenjakecamatan  button[action=loadUsulanKecamatan]"     : {
                click: me.loadUsulanKecamatan
            },
            "#gridlookupkegiatankecamatan"                              : {
               select: me.viewLookupKegiatanKecamatan
            },
            "#gridusulankecamatan"                                      : {
               select: me.viewLookupUsulanKecamatan
            },                  
            "formrenjakecamatan  button[action=saveRenjaKecamatan]"      : {
                click: me.saveRenjaKecamatan
            }, 
            "formrenjakecamatan  button[action=resetRenjaKecamatan]"     : {
                click: me.resetRenjaKecamatan
            },

             //*============== Usulan KELURAHAN ==================*//  
            "formrenjakelurahan  button[action=loadKegiatanKelurahan]"   : {
                click: me.loadKegiatanKelurahan
            },
            "formrenjakelurahan  button[action=loadUsulanKelurahan]"     : {
                click: me.loadUsulanKelurahan
            },
            "#gridlookupkegiatankelurahan"                              : {
               select: me.viewLookupKegiatanKelurahan
            },
            "#gridusulankelurahan"                                      : {
               select: me.viewLookupUsulanKelurahan
            },                  
            "formrenjakelurahan  button[action=saveRenjaKelurahan]"      : {
                click: me.saveRenjaKelurahan
            }, 
            "formrenjakelurahan  button[action=resetRenjaKelurahan]"     : {
                click: me.resetRenjaKelurahan
            },

            //*============== Usulan DESA ==================*//  
            "formrenjadesa  button[action=loadKegiatanDesa]"   : {
                click: me.loadKegiatanDesa
            },
            "formrenjadesa  button[action=loadUsulanDesa]"     : {
                click: me.loadUsulanDesa
            },
            "#gridlookupkegiatandesa"                              : {
               select: me.viewLookupKegiatanDesa
            },
            "#gridusulandesa"                                      : {
               select: me.viewLookupUsulanDesa
            },                  
            "formrenjadesa  button[action=saveRenjaDesa]"      : {
                click: me.saveRenjaDesa
            }, 
            "formrenjadesa  button[action=resetRenjaDesa]"     : {
                click: me.resetRenjaDesa
            },
        });
        me.callParent(arguments);
    },

    reloadStore: function(){
        var me = this;
         me.getStore('RPJM.module.Renja.TransaksiRenja.store.TransaksiRenja').reload();
    },

    viewTransaksiRenja: function(grid, record, item, index, e, eOpts){
        var id = record.data.id;
        var form = Ext.getCmp('formtransaksirenja');
        var grid = Ext.getCmp('gridtransaksirenja');
        form.getForm().setValues(record.data);

    },

    viewProgram: function(grid, record, item, index, e, eOpts){

        /*====== Load Data Sub Pilihan Urusan ======*/
        var form = Ext.getCmp('formtransaksirenja');
        var grid = Ext.getCmp('gridtransaksirenja');
        form.getForm().setValues(record.data);

        var kode_programrpjm =  record.data.kode_programrpjm;
        Ext.Ajax.request({
            url             : BASE_URL + 'transaksirenja/c_transaksirenja/getSubPilihanUrusan',
            method          : 'POST',
            params          : {post : Ext.encode(kode_programrpjm)},
            success         : function(response){
                var data    = Ext.JSON.decode(response.responseText);
                var storeMenu = Ext.getStore('RPJM.module.Renja.TransaksiRenja.store.TransaksiRenja');
                storeMenu.loadData([],false);
                // storeMenu.removeAll();
                storeMenu.add(data.data);
            }
        });
    },

    lookupKegiatan: function(grid, record, item, index, e, eOpts){
        this.getStore('RPJM.module.Renja.TransaksiRenja.store.LookupKegiatan').load();
        var win = Ext.create('RPJM.module.Renja.TransaksiRenja.view.grid.WindowKegiatan');
        win.show();
    },

    loadSasaran: function(btn, e, eopts, gridPanel, selected){
        var winMenu = Ext.create('RPJM.module.Renja.TransaksiRenja.view.WindowSasaran');
        winMenu.close();

        // this.getStore('RPJM.module.Renja.TransaksiRenja.store.LookupKegiatan').load();
        var win = Ext.create('RPJM.module.Renja.TransaksiRenja.view.WindowSasaran');
        win.show();
    },

    viewLookupKegiatan: function(grid, record, item, index, e, eOpts){
        var id          = record.data.id;
        var form        = Ext.getCmp('formloading');
        var window      = Ext.getCmp('windowkegiatan');
        var grid        = Ext.getCmp('gridlookupkegiatan');
        form.getForm().setValues(record.data);
        var value   = record.data.kode_kegiatanrpjm
        Ext.Ajax.request({
            url             : BASE_URL + 'transaksirenja/c_transaksirenja/getMusrenbang',
            method          : 'POST',
            params          : {
                value : Ext.JSON.encode(value)
            },
            success         : function(response){
                var data    = Ext.JSON.decode(response.responseText);
                var storeMenu = Ext.getStore('RPJM.module.Renja.TransaksiRenja.store.TransaksiRenja');
                storeMenu.loadData([],false);
                storeMenu.add(data.data);
            }
        });
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

        /*======== DELETE DATA PARAMETER =========*/
        var form                    = Ext.getCmp('formtransaksirenja').getForm();
        var kode_subpilihanurusan   = form.findField('kode_subpilihanurusan').getValue();
        Ext.MessageBox.show({
            title           : 'Konfirmasi',
            msg             : 'Anda yakin akan menghapus data yang terseleksi?',
            buttons         : Ext.Msg.YESNO,
            icon            : Ext.MessageBox.WARNING,
            width           : 450,
            fn              : function(btn, evtObj){
                if (btn == 'yes') {
                    Ext.Ajax.request({
                        url             : BASE_URL + 'transaksirenja/c_transaksirenja/delTransaksiRenja',
                        method          : 'POST',
                        params          : {
                            kode_subpilihanurusan : kode_subpilihanurusan
                        },
                        success         : function(response){
                            var data    = Ext.JSON.decode(response.responseText);
                            if(data.msg === 1){
                                Ext.MessageBox.show({
                                    title           : 'Informasi',
                                    msg             : 'Data Digunakan di Table Lain',
                                    icon            : Ext.MessageBox.INFO,
                                    buttons         : Ext.MessageBox.OK
                                });
                                var form    = Ext.getCmp('formtransaksirenja');
                                var grid    = Ext.getCmp('gridtransaksirenja');
                                form.getForm().reset();
                                me.resetPanel();
                                grid.getSelectionModel().deselectAll();
                                Ext.ComponentQuery.query('#gridtransaksirenja')[0].getStore('RPJM.module.Renja.TransaksiRenja.store.TransaksiRenja').reload();                             
                            } else {
                                var form    = Ext.getCmp('formtransaksirenja');
                                var grid    = Ext.getCmp('gridtransaksirenja');
                                form.getForm().reset();
                                me.resetPanel();
                                grid.getSelectionModel().deselectAll();
                                Ext.ComponentQuery.query('#gridtransaksirenja')[0].getStore('RPJM.module.Renja.TransaksiRenja.store.TransaksiRenja').reload(); 
                            }
                        }
                    });
                }
            }
        })
    },

    resetPanel: function(btn, gridPanel, selected) {//Reset Form
        var me = this;
        var form = Ext.getCmp('formloading');
        var grid = Ext.getCmp('gridskpd');
        form.getForm().reset();
        grid.getSelectionModel().clearSelections();
        me.getStore('RPJM.module.Renja.TransaksiRenja.store.TransaksiRenja').reload();
    },

    search: function(field, evt, opts){
        var value       = field.getValue();
        Ext.Ajax.request({
            url     : BASE_URL + 'transaksirenja/c_transaksirenja/searchTransaksiRenja',
            method  : 'POST',
            params  : {name : value},
            success : function(response){
                var data    = Ext.JSON.decode(response.responseText);
                if(data.success){
                        var storeApproval = Ext.getStore('RPJM.module.Renja.TransaksiRenja.store.TransaksiRenja');
                        storeApproval.removeAll();
                        storeApproval.add(data.data);
                }
            }
        });
    },

    searchProgram: function(field, evt, opts){
        var value       = field.getValue();
        Ext.Ajax.request({
            url     : BASE_URL + 'program/c_program/searchProgram',
            method  : 'POST',
            params  : {name : value},
            success : function(response){
                var data    = Ext.JSON.decode(response.responseText);
                if(data.success){
                        var storeApproval = Ext.getStore('RPJM.module.Renja.TransaksiRenja.store.Program');
                        storeApproval.removeAll();
                        storeApproval.add(data.data);
                }
            }
        });
    },

    print : function(btn, gridPanel, selected, field, record){
        var form    = Ext.getCmp('formloading');
        var value   = form.getForm().findField('kode_kegiatanrpjm').getValue();
        form.getForm().submit({
            standardSubmit  : true,
            url             : BASE_URL + 'transaksirenja/c_transaksirenja/cetakMusrenbang',
            method          : 'GET',
            params          : {name : value}
        });
    },

     /* Load MENU FROM POPUP Sasaran */
    loadSKPD: function(btn, e, eopts){
        var win = Ext.create('RPJM.module.Renja.TransaksiRenja.view.WindowSkpd');
        win.show();
    },

    loadReses: function(btn, e, eopts){
        var win = Ext.create('RPJM.module.Renja.TransaksiRenja.view.WindowReses');
        win.show();
    },

    loadMasyarakat: function(btn, e, eopts){
        var win = Ext.create('RPJM.module.Renja.TransaksiRenja.view.WindowMasyarakat');
        win.show();
    },

    loadMusrenKec: function(btn, e, eopts){
        var win = Ext.create('RPJM.module.Renja.TransaksiRenja.view.WindowKecamatan');
        win.show();
    },

    loadMusrenKel: function(btn, e, eopts){
        var win = Ext.create('RPJM.module.Renja.TransaksiRenja.view.WindowKelurahan');
        win.show();
    },

    loadMusrenDes: function(btn, e, eopts){
        var win = Ext.create('RPJM.module.Renja.TransaksiRenja.view.WindowDesa');
        win.show();
    },

    //*============== USULAN SKPD ==================*// 
    loadKegiatan: function(grid, record, item, index, e, eOpts){
        this.getStore('RPJM.module.Renja.TransaksiRenja.store.LookupKegiatanSkpd').load();
        var win = Ext.create('RPJM.module.Renja.TransaksiRenja.view.grid.WindowKegiatanSkpd');
        win.show();
    },

    loadUsulanSkpd: function(grid, record, item, index, e, eOpts){
        this.getStore('RPJM.module.Renja.TransaksiRenja.store.LookupUsulanSkpd').load();
        var win = Ext.create('RPJM.module.Renja.TransaksiRenja.view.grid.WindowUsulanSkpd');
        win.show();
    },

    viewLookupKegiatanSkpd: function(grid, record, item, index, e, eOpts){
        var id          = record.data.id;
        var form        = Ext.getCmp('formrenjaskpd');
        var window      = Ext.getCmp('windowkegiatanskpd');
        form.getForm().findField('kode_kegiatanrpjm').setValue(record.data.kode_kegiatanrpjm);
        window.close();
    },

    viewLookupUsulanSkpd: function(grid, record, item, index, e, eOpts){
        var formrenja   = Ext.getCmp('formrenjaskpd');
        var window      = Ext.getCmp('windowusulanskpd');
        formrenja.getForm().findField('kode_musrenbang').setValue(record.data.kode_musrenbang);
        formrenja.getForm().findField('penerimaan_lain').setValue(record.data.penerimaan_lain); 
        formrenja.getForm().findField('rsud').setValue(record.data.rsud);
        formrenja.getForm().findField('kapitasi').setValue(record.data.kapitasi);
        formrenja.getForm().findField('bangub').setValue(record.data.bangub);
        formrenja.getForm().findField('sektoral_apbd').setValue(record.data.sektoral_apbd);
        formrenja.getForm().findField('dak').setValue(record.data.dak);
        formrenja.getForm().findField('dbhcht').setValue(record.data.dbhcht);
        formrenja.getForm().findField('did').setValue(record.data.did);
        formrenja.getForm().findField('tp').setValue(record.data.tp);
        formrenja.getForm().findField('dekonsentrasi').setValue(record.data.dekonsentrasi);
        formrenja.getForm().findField('sektoral_apbn').setValue(record.data.sektoral_apbn);
        window.close();
    },

    resetRenja: function(btn, gridPanel, selected) {//Reset Form
        var me = this;
        var form = Ext.getCmp('formrenjaskpd');
        form.getForm().reset();
    },

    saveRenja: function(btn, evt, opts){
        var me                  = this;
        var form                = btn.up('form').getForm();
        var kode_kegiatanrpjm   = form.findField('kode_kegiatanrpjm').getValue();
        var kode_musrenbang     = form.findField('kode_musrenbang').getValue();
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
                        url     : BASE_URL + 'transaksirenja/c_transaksirenja/editTransaksiRenja',
                        method  : 'GET',
                        params  : {
                            kode_kegiatanrpjm   : kode_kegiatanrpjm,
                            kode_musrenbang     : kode_musrenbang,
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
                                    msg             : 'Data Telah Dimpan',
                                    icon            : Ext.MessageBox.INFO,
                                    buttons         : Ext.MessageBox.OK
                                });
                                var form    = Ext.getCmp('formrenjaskpd');
                                var grid    = Ext.getCmp('gridskpd');
                                var window  = Ext.getCmp('windowskpd');
                                form.getForm().reset();
                                me.resetPanel();
                                form.close();
                                window.close();
                                grid.getSelectionModel().deselectAll();
                                Ext.ComponentQuery.query('#gridskpd')[0].getStore('RPJM.module.Renja.TransaksiRenja.store.GridSkpd').reload(); 
                            }else if (data.total === 2){
                                Ext.MessageBox.show({
                                    title           : 'Error',
                                    msg             : 'Transaksi Renja Telah Terdaftar - Silahkan Gunakan TransaksiRenja Lain',
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
                                var form    = Ext.getCmp('formrenjaskpd');
                                var grid    = Ext.getCmp('gridskpd');
                                form.getForm().reset();
                                me.resetPanel();
                                form.close();
                                grid.getSelectionModel().deselectAll();
                                Ext.ComponentQuery.query('#gridskpd')[0].getStore('RPJM.module.Renja.TransaksiRenja.store.GridSkpd').reload();                    
                            }
                        }
                    });
                }
            }
        });      
    },

    //*============== USUSLAN KECAMATAN ==================*// 
    loadKegiatanKecamatan: function(grid, record, item, index, e, eOpts){
        this.getStore('RPJM.module.Renja.TransaksiRenja.store.LookupKegiatanKecamatan').load();
        var win = Ext.create('RPJM.module.Renja.TransaksiRenja.view.grid.WindowKegiatanKecamatan');
        win.show();
    },

    loadUsulanKecamatan: function(grid, record, item, index, e, eOpts){
        this.getStore('RPJM.module.Renja.TransaksiRenja.store.LookupUsulanKecamatan').load();
        var win = Ext.create('RPJM.module.Renja.TransaksiRenja.view.grid.WindowUsulanKecamatan');
        win.show();
    },

    viewLookupKegiatanKecamatan: function(grid, record, item, index, e, eOpts){
        var id          = record.data.id;
        var form        = Ext.getCmp('formrenjakecamatan');
        var window      = Ext.getCmp('windowkegiatankecamatan');
        form.getForm().findField('kode_kegiatanrpjm').setValue(record.data.kode_kegiatanrpjm);
        window.close();
    },

    viewLookupUsulanKecamatan: function(grid, record, item, index, e, eOpts){
        var formrenja   = Ext.getCmp('formrenjakecamatan');
        var window      = Ext.getCmp('windowusulankecamatan');
        formrenja.getForm().findField('kode_musrenbang').setValue(record.data.kode_musrenbang);
        formrenja.getForm().findField('lokasi').setValue(record.data.lokasi);
        formrenja.getForm().findField('volume').setValue(record.data.volume);
        formrenja.getForm().findField('satuan').setValue(record.data.satuan);
        formrenja.getForm().findField('prioritas').setValue(record.data.prioritas);
        formrenja.getForm().findField('lingkupbidang').setValue(record.data.lingkupbidang);
        formrenja.getForm().findField('swadana').setValue(record.data.swadana);
        formrenja.getForm().findField('apbd_kab').setValue(record.data.apbd_kab);
        formrenja.getForm().findField('apbd_prov').setValue(record.data.apbd_prov);
        formrenja.getForm().findField('apbn').setValue(record.data.apbn);
        window.close();
    },

    resetRenjaKecamatan: function(btn, gridPanel, selected) {//Reset Form
        var me = this;
        var form = Ext.getCmp('formrenjakecamatan');
        form.getForm().reset();
    },

    saveRenjaKecamatan: function(btn, evt, opts){
        var me                  = this;
        var form                = btn.up('form').getForm();
        var kode_kegiatanrpjm   = form.findField('kode_kegiatanrpjm').getValue();
        var kode_musrenbang     = form.findField('kode_musrenbang').getValue();
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
                        url     : BASE_URL + 'transaksirenja/c_transaksirenja/editTransaksiRenja',
                        method  : 'GET',
                        params  : {
                            kode_kegiatanrpjm   : kode_kegiatanrpjm,
                            kode_musrenbang     : kode_musrenbang,
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
                                    msg             : 'Data Telah Dimpan',
                                    icon            : Ext.MessageBox.INFO,
                                    buttons         : Ext.MessageBox.OK
                                });
                                var form    = Ext.getCmp('formrenjakecamatan');
                                var grid    = Ext.getCmp('gridskpd');
                                var window  = Ext.getCmp('windowkecamatan');
                                form.getForm().reset();
                                me.resetPanel();
                                form.close();
                                window.close();
                                grid.getSelectionModel().deselectAll();
                                Ext.ComponentQuery.query('#gridskpd')[0].getStore('RPJM.module.Renja.TransaksiRenja.store.GridSkpd').reload(); 
                            }else if (data.total === 2){
                                Ext.MessageBox.show({
                                    title           : 'Error',
                                    msg             : 'Transaksi Renja Telah Terdaftar - Silahkan Gunakan TransaksiRenja Lain',
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
                                var form    = Ext.getCmp('formrenjaskpd');
                                var grid    = Ext.getCmp('gridskpd');
                                form.getForm().reset();
                                me.resetPanel();
                                form.close();
                                grid.getSelectionModel().deselectAll();
                                Ext.ComponentQuery.query('#gridskpd')[0].getStore('RPJM.module.Renja.TransaksiRenja.store.GridSkpd').reload();                    
                            }
                        }
                    });
                }
            }
        });      
    },


    //*============== USUSLAN KELURAHAN ==================*// 
    loadKegiatanKelurahan: function(grid, record, item, index, e, eOpts){
        this.getStore('RPJM.module.Renja.TransaksiRenja.store.LookupKegiatanKelurahan').load();
        var win = Ext.create('RPJM.module.Renja.TransaksiRenja.view.grid.WindowKegiatanKelurahan');
        win.show();
    },

    loadUsulanKelurahan: function(grid, record, item, index, e, eOpts){
        this.getStore('RPJM.module.Renja.TransaksiRenja.store.LookupUsulanKelurahan').load();
        var win = Ext.create('RPJM.module.Renja.TransaksiRenja.view.grid.WindowUsulanKelurahan');
        win.show();
    },

    viewLookupKegiatanKelurahan: function(grid, record, item, index, e, eOpts){
        var id          = record.data.id;
        var form        = Ext.getCmp('formrenjakelurahan');
        var window      = Ext.getCmp('windowkegiatankelurahan');
        form.getForm().findField('kode_kegiatanrpjm').setValue(record.data.kode_kegiatanrpjm);
        window.close();
    },

    viewLookupUsulanKelurahan: function(grid, record, item, index, e, eOpts){
        var formrenja   = Ext.getCmp('formrenjakelurahan');
        var window      = Ext.getCmp('windowusulankelurahan');
        formrenja.getForm().findField('kode_musrenbang').setValue(record.data.kode_musrenbang);
        formrenja.getForm().findField('lokasi').setValue(record.data.lokasi);
        formrenja.getForm().findField('volume').setValue(record.data.volume);
        formrenja.getForm().findField('satuan').setValue(record.data.satuan);
        formrenja.getForm().findField('prioritas').setValue(record.data.prioritas);
        formrenja.getForm().findField('lingkupbidang').setValue(record.data.lingkupbidang);
        formrenja.getForm().findField('swadana').setValue(record.data.swadana);
        formrenja.getForm().findField('apbd_kab').setValue(record.data.apbd_kab);
        formrenja.getForm().findField('apbd_prov').setValue(record.data.apbd_prov);
        formrenja.getForm().findField('apbn').setValue(record.data.apbn);
        window.close();
    },

    resetRenjaKelurahan: function(btn, gridPanel, selected) {//Reset Form
        var me = this;
        var form = Ext.getCmp('formrenjakelurahan');
        form.getForm().reset();
    },

    saveRenjaKelurahan: function(btn, evt, opts){
        var me                  = this;
        var form                = btn.up('form').getForm();
        var kode_kegiatanrpjm   = form.findField('kode_kegiatanrpjm').getValue();
        var kode_musrenbang     = form.findField('kode_musrenbang').getValue();
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
                        url     : BASE_URL + 'transaksirenja/c_transaksirenja/editTransaksiRenja',
                        method  : 'GET',
                        params  : {
                            kode_kegiatanrpjm   : kode_kegiatanrpjm,
                            kode_musrenbang     : kode_musrenbang,
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
                                    msg             : 'Data Telah Dimpan',
                                    icon            : Ext.MessageBox.INFO,
                                    buttons         : Ext.MessageBox.OK
                                });
                                var form    = Ext.getCmp('formrenjakelurahan');
                                var grid    = Ext.getCmp('gridskpd');
                                var window  = Ext.getCmp('windowkelurahan');
                                form.getForm().reset();
                                me.resetPanel();
                                form.close();
                                window.close();
                                grid.getSelectionModel().deselectAll();
                                Ext.ComponentQuery.query('#gridskpd')[0].getStore('RPJM.module.Renja.TransaksiRenja.store.GridSkpd').reload(); 
                            }else if (data.total === 2){
                                Ext.MessageBox.show({
                                    title           : 'Error',
                                    msg             : 'Transaksi Renja Telah Terdaftar - Silahkan Gunakan TransaksiRenja Lain',
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
                                var form    = Ext.getCmp('formrenjakelurahan');
                                var grid    = Ext.getCmp('gridskpd');
                                form.getForm().reset();
                                me.resetPanel();
                                form.close();
                                grid.getSelectionModel().deselectAll();
                                Ext.ComponentQuery.query('#gridskpd')[0].getStore('RPJM.module.Renja.TransaksiRenja.store.GridSkpd').reload();                    
                            }
                        }
                    });
                }
            }
        });
    },

    //*============== USULAN DESA ==================*// 
    loadKegiatanDesa: function(grid, record, item, index, e, eOpts){
        this.getStore('RPJM.module.Renja.TransaksiRenja.store.LookupKegiatanDesa').load();
        var win = Ext.create('RPJM.module.Renja.TransaksiRenja.view.grid.WindowKegiatanDesa');
        win.show();
    },

    loadUsulanDesa: function(grid, record, item, index, e, eOpts){
        this.getStore('RPJM.module.Renja.TransaksiRenja.store.LookupUsulanDesa').load();
        var win = Ext.create('RPJM.module.Renja.TransaksiRenja.view.grid.WindowUsulanDesa');
        win.show();
    },

    viewLookupKegiatanDesa: function(grid, record, item, index, e, eOpts){
        var id          = record.data.id;
        var form        = Ext.getCmp('formrenjadesa');
        var window      = Ext.getCmp('windowkegiatandesa');
        form.getForm().findField('kode_kegiatanrpjm').setValue(record.data.kode_kegiatanrpjm);
        window.close();
    },

    viewLookupUsulanDesa: function(grid, record, item, index, e, eOpts){
        var formrenja   = Ext.getCmp('formrenjadesa');
        var window      = Ext.getCmp('windowusulandesa');
        formrenja.getForm().findField('kode_musrenbang').setValue(record.data.kode_musrenbang);
        formrenja.getForm().findField('lokasi').setValue(record.data.lokasi);
        formrenja.getForm().findField('volume').setValue(record.data.volume);
        formrenja.getForm().findField('satuan').setValue(record.data.satuan);
        formrenja.getForm().findField('prioritas').setValue(record.data.prioritas);
        formrenja.getForm().findField('lingkupbidang').setValue(record.data.lingkupbidang);
        formrenja.getForm().findField('swadana').setValue(record.data.swadana);
        formrenja.getForm().findField('apbd_des').setValue(record.data.apbd_des);
        formrenja.getForm().findField('apbd_kab').setValue(record.data.apbd_kab);
        formrenja.getForm().findField('apbd_prov').setValue(record.data.apbd_prov);
        formrenja.getForm().findField('apbn').setValue(record.data.apbn);
        window.close();
    },

    resetRenjaDesa: function(btn, gridPanel, selected) {//Reset Form
        var me = this;
        var form = Ext.getCmp('formrenjadesa');
        form.getForm().reset();
    },

    saveRenjaDesa: function(btn, evt, opts){
        var me                  = this;
        var form                = btn.up('form').getForm();
        var kode_kegiatanrpjm   = form.findField('kode_kegiatanrpjm').getValue();
        var kode_musrenbang     = form.findField('kode_musrenbang').getValue();
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
                        url     : BASE_URL + 'transaksirenja/c_transaksirenja/editTransaksiRenja',
                        method  : 'GET',
                        params  : {
                            kode_kegiatanrpjm   : kode_kegiatanrpjm,
                            kode_musrenbang     : kode_musrenbang,
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
                                    msg             : 'Data Telah Dimpan',
                                    icon            : Ext.MessageBox.INFO,
                                    buttons         : Ext.MessageBox.OK
                                });
                                var form    = Ext.getCmp('formrenjadesa');
                                var grid    = Ext.getCmp('gridskpd');
                                var window  = Ext.getCmp('windowdesa');
                                form.getForm().reset();
                                me.resetPanel();
                                form.close();
                                window.close();
                                grid.getSelectionModel().deselectAll();
                                Ext.ComponentQuery.query('#gridskpd')[0].getStore('RPJM.module.Renja.TransaksiRenja.store.GridSkpd').reload(); 
                            }else if (data.total === 2){
                                Ext.MessageBox.show({
                                    title           : 'Error',
                                    msg             : 'Transaksi Renja Telah Terdaftar - Silahkan Gunakan TransaksiRenja Lain',
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
                                var form    = Ext.getCmp('formrenjadesa');
                                var grid    = Ext.getCmp('gridskpd');
                                form.getForm().reset();
                                me.resetPanel();
                                form.close();
                                grid.getSelectionModel().deselectAll();
                                Ext.ComponentQuery.query('#gridskpd')[0].getStore('RPJM.module.Renja.TransaksiRenja.store.GridSkpd').reload();                    
                            }
                        }
                    });
                }
            }
        });      
    },

    //*============== USULAN RESES ==================*// 
    loadKegiatanReses: function(grid, record, item, index, e, eOpts){
        this.getStore('RPJM.module.Renja.TransaksiRenja.store.LookupKegiatanReses').load();
        var win = Ext.create('RPJM.module.Renja.TransaksiRenja.view.grid.WindowKegiatanReses');
        win.show();
    },

    loadUsulanReses: function(grid, record, item, index, e, eOpts){
        this.getStore('RPJM.module.Renja.TransaksiRenja.store.LookupUsulanReses').load();
        var win = Ext.create('RPJM.module.Renja.TransaksiRenja.view.grid.WindowUsulanReses');
        win.show();
    },

    viewLookupKegiatanReses: function(grid, record, item, index, e, eOpts){
        var id          = record.data.id;
        var form        = Ext.getCmp('formrenjareses');
        var window      = Ext.getCmp('windowkegiatanreses');
        form.getForm().findField('kode_kegiatanrpjm').setValue(record.data.kode_kegiatanrpjm);
        window.close();
    },

    viewLookupUsulanReses: function(grid, record, item, index, e, eOpts){
        var formrenja   = Ext.getCmp('formrenjareses');
        var window      = Ext.getCmp('windowusulanreses');
        formrenja.getForm().findField('kode_musrenbang').setValue(record.data.kode_musrenbang);
        formrenja.getForm().findField('lokasi').setValue(record.data.lokasi);
        formrenja.getForm().findField('volume').setValue(record.data.volume);
        formrenja.getForm().findField('satuan').setValue(record.data.satuan);
        formrenja.getForm().findField('prioritas').setValue(record.data.prioritas);
        formrenja.getForm().findField('lingkupbidang').setValue(record.data.lingkupbidang);
        formrenja.getForm().findField('swadana').setValue(record.data.swadana);
        formrenja.getForm().findField('apbd_kab').setValue(record.data.apbd_kab);
        formrenja.getForm().findField('apbd_prov').setValue(record.data.apbd_prov);
        formrenja.getForm().findField('apbn').setValue(record.data.apbn);
        window.close();
    },

    resetRenjaReses: function(btn, gridPanel, selected) {//Reset Form
        var me = this;
        var form = Ext.getCmp('formrenjareses');
        form.getForm().reset();
    },

    saveRenjaReses: function(btn, evt, opts){
        var me                  = this;
        var form                = btn.up('form').getForm();
        var kode_kegiatanrpjm   = form.findField('kode_kegiatanrpjm').getValue();
        var kode_musrenbang     = form.findField('kode_musrenbang').getValue();
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
                        url     : BASE_URL + 'transaksirenja/c_transaksirenja/editTransaksiRenja',
                        method  : 'GET',
                        params  : {
                            kode_kegiatanrpjm   : kode_kegiatanrpjm,
                            kode_musrenbang     : kode_musrenbang,
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
                                    msg             : 'Data Telah Dimpan',
                                    icon            : Ext.MessageBox.INFO,
                                    buttons         : Ext.MessageBox.OK
                                });
                                var form    = Ext.getCmp('formrenjareses');
                                var grid    = Ext.getCmp('gridskpd');
                                var window  = Ext.getCmp('windowreses');
                                form.getForm().reset();
                                me.resetPanel();
                                form.close();
                                window.close();
                                grid.getSelectionModel().deselectAll();
                                Ext.ComponentQuery.query('#gridskpd')[0].getStore('RPJM.module.Renja.TransaksiRenja.store.GridSkpd').reload(); 
                            }else if (data.total === 2){
                                Ext.MessageBox.show({
                                    title           : 'Error',
                                    msg             : 'Transaksi Renja Telah Terdaftar - Silahkan Gunakan TransaksiRenja Lain',
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
                                var form    = Ext.getCmp('formrenjareses');
                                var grid    = Ext.getCmp('gridskpd');
                                form.getForm().reset();
                                me.resetPanel();
                                form.close();
                                grid.getSelectionModel().deselectAll();
                                Ext.ComponentQuery.query('#gridskpd')[0].getStore('RPJM.module.Renja.TransaksiRenja.store.GridSkpd').reload();                    
                            }
                        }
                    });
                }
            }
        });      
    },

    //*============== USULAN MASYARAKAT ==================*// 
    loadKegiatanMasyarakat: function(grid, record, item, index, e, eOpts){
        this.getStore('RPJM.module.Renja.TransaksiRenja.store.LookupKegiatanMasyarakat').load();
        var win = Ext.create('RPJM.module.Renja.TransaksiRenja.view.grid.WindowKegiatanMasyarakat');
        win.show();
    },

    loadUsulanMasyarakat: function(grid, record, item, index, e, eOpts){
        this.getStore('RPJM.module.Renja.TransaksiRenja.store.LookupUsulanMasyarakat').load();
        var win = Ext.create('RPJM.module.Renja.TransaksiRenja.view.grid.WindowUsulanMasyarakat');
        win.show();
    },

    viewLookupKegiatanMasyarakat: function(grid, record, item, index, e, eOpts){
        var id          = record.data.id;
        var form        = Ext.getCmp('formrenjamasyarakat');
        var window      = Ext.getCmp('windowkegiatanmasyarakat');
        form.getForm().findField('kode_kegiatanrpjm').setValue(record.data.kode_kegiatanrpjm);
        window.close();
    },

    viewLookupUsulanMasyarakat: function(grid, record, item, index, e, eOpts){
        var formrenja   = Ext.getCmp('formrenjamasyarakat');
        var window      = Ext.getCmp('windowusulanmasyarakat');
        formrenja.getForm().findField('kode_musrenbang').setValue(record.data.kode_musrenbang);
        formrenja.getForm().findField('lokasi').setValue(record.data.lokasi);
        formrenja.getForm().findField('volume').setValue(record.data.volume);
        formrenja.getForm().findField('satuan').setValue(record.data.satuan);
        formrenja.getForm().findField('prioritas').setValue(record.data.prioritas);
        formrenja.getForm().findField('lingkupbidang').setValue(record.data.lingkupbidang);
        formrenja.getForm().findField('swadana').setValue(record.data.swadana);
        formrenja.getForm().findField('apbd_kab').setValue(record.data.apbd_kab);
        formrenja.getForm().findField('apbd_prov').setValue(record.data.apbd_prov);
        formrenja.getForm().findField('apbn').setValue(record.data.apbn);
        window.close();
    },

    resetRenjaMasyarakat: function(btn, gridPanel, selected) {//Reset Form
        var me = this;
        var form = Ext.getCmp('formrenjamasyarakat');
        form.getForm().reset();
    },

    saveRenjaMasyarakat: function(btn, evt, opts){
        var me                  = this;
        var form                = btn.up('form').getForm();
        var kode_kegiatanrpjm   = form.findField('kode_kegiatanrpjm').getValue();
        var kode_musrenbang     = form.findField('kode_musrenbang').getValue();
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
                        url     : BASE_URL + 'transaksirenja/c_transaksirenja/editTransaksiRenja',
                        method  : 'GET',
                        params  : {
                            kode_kegiatanrpjm   : kode_kegiatanrpjm,
                            kode_musrenbang     : kode_musrenbang,
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
                                    msg             : 'Data Telah Dimpan',
                                    icon            : Ext.MessageBox.INFO,
                                    buttons         : Ext.MessageBox.OK
                                });
                                var form    = Ext.getCmp('formrenjamasyarakat');
                                var grid    = Ext.getCmp('gridskpd');
                                var window  = Ext.getCmp('windowmasyarakat');
                                form.getForm().reset();
                                me.resetPanel();
                                form.close();
                                window.close();
                                grid.getSelectionModel().deselectAll();
                                Ext.ComponentQuery.query('#gridskpd')[0].getStore('RPJM.module.Renja.TransaksiRenja.store.GridSkpd').reload(); 
                            }else if (data.total === 2){
                                Ext.MessageBox.show({
                                    title           : 'Error',
                                    msg             : 'Transaksi Renja Telah Terdaftar - Silahkan Gunakan TransaksiRenja Lain',
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
                                var form    = Ext.getCmp('formrenjamasyarakat');
                                var grid    = Ext.getCmp('gridskpd');
                                form.getForm().reset();
                                me.resetPanel();
                                form.close();
                                grid.getSelectionModel().deselectAll();
                                Ext.ComponentQuery.query('#gridskpd')[0].getStore('RPJM.module.Renja.TransaksiRenja.store.GridSkpd').reload();                    
                            }
                        }
                    });
                }
            }
        });      
    },
})
