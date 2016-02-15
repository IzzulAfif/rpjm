Ext.define('RPJM.module.MasterData.Pegawai.view.form.FormPegawai', {
    extend      : 'Ext.form.Panel',
    title       : 'Form Pegawai',
    iconCls     : 'icon-pegawai',
    //store       : 'RPJM.module.MasterData.Pegawai.store.Pegawai',
    //requires    : ['RPJM.module.MasterData.Pegawai.store.Pegawai'],
    alias       : 'widget.formpegawai',
    id          : 'formpegawai',
    layout      : 'fit',
    border      : true,
    frame       : true,
    margins     : '3px',
    initComponent: function() {
        var me = this;
        me.items  = [
            // {
            //     xtype       : 'form',
            //     bodyPadding : 5,
            //     frame       : true,
            //     items       : [
            {
            xtype   : 'container',
            layout  : { type: 'column' },
            items   : [
                    {
                    columnWidth : .23,
                    frame       : true,
                    items       : [
                        {
                            xtype   : 'image',
                            itemId  : 'imagePreview',
                            height  : 210,
                            width   : 150
                        }
                        ]
                    },
                    {
                        xtype       : 'textfield',
                        name        : 'id',
                        hidden      : true,
                        fieldLabel  : 'ID',                    
                    },
                    // {
                    //     xtype       : 'container',
                    //     layout      : 'anchor',
                    //     defaults    : { anchor : '100%'},
                    //     items       : [{
                    //         xtype   : 'fieldcontainer',
                    //         layout  : 'hbox',
                    //         items   : [
                    //             {
                    //                 xtype       : 'textfield',
                    //                 name        : 'nip',
                    //                 allowBlank  : true,
                    //                 fieldLabel  : 'NIP Pegawai',
                    //                 emptyText   : 'NIP Pegawai',
                    //                 anchor      : '100%',
                    //                 labelAlign  : 'top',
                    //                 labelStyle  : 'padding : 3px; font-weight : bold;',
                    //                 padding     : '0px 2px 0px 2px',
                    //                 flex        : 0.6
                    //             },
                    //             {
                    //                 xtype       : 'textfield',
                    //                 name        : 'nama',
                    //                 allowBlank  : true,
                    //                 fieldLabel  : 'Nama Lengkap',
                    //                 emptyText   : 'Nama Lengkap',
                    //                 anchor      : '100%',
                    //                 labelAlign  : 'top',
                    //                 labelStyle  : 'padding : 3px; font-weight : bold;',
                    //                 padding     : '0px 2px 0px 2px',
                    //                 flex        : 1.4
                    //             }
                    //         ]
                    //     }]
                    // },
                    // {
                    //     xtype       : 'container',
                    //     layout      : 'anchor',
                    //     defaults    : { anchor : '100%'},
                    //     items       : [{
                    //         xtype   : 'fieldcontainer',
                    //         layout  : 'hbox',
                    //         items   : [
                    //             {
                    //                 xtype       : 'textfield',
                    //                 name        : 'kode_kedudukan',
                    //                 allowBlank  : true,
                    //                 fieldLabel  : 'Kode Kedudukan',
                    //                 emptyText   : 'Kode Kedudukan',
                    //                 anchor      : '100%',
                    //                 labelAlign  : 'top',
                    //                 labelStyle  : 'padding : 3px; font-weight : bold;',
                    //                 padding     : '0px 2px 0px 2px',
                    //                 flex        : 1
                    //             },
                    //             {
                    //                 xtype       : 'textfield',
                    //                 name        : 'status_kepegawaian',
                    //                 allowBlank  : true,
                    //                 fieldLabel  : 'Status Pegawai',
                    //                 emptyText   : 'Status Pegawai',
                    //                 anchor      : '100%',
                    //                 labelAlign  : 'top',
                    //                 labelStyle  : 'padding : 3px; font-weight : bold;',
                    //                 padding     : '0px 2px 0px 2px',
                    //                 flex        : 1
                    //             }
                    //         ]
                    //     }]
                    // },
                    // {
                    //     xtype       : 'container',
                    //     layout      : 'anchor',
                    //     defaults    : { anchor : '100%'},
                    //     items       : [{
                    //         xtype   : 'fieldcontainer',
                    //         layout  : 'hbox',
                    //         items   : [
                    //             {
                    //                 xtype       : 'textfield',
                    //                 name        : 'gelar_depan',
                    //                 allowBlank  : true,
                    //                 fieldLabel  : 'Gelar Depan',
                    //                 emptyText   : 'Gelar Depan',
                    //                 anchor      : '100%',
                    //                 labelAlign  : 'top',
                    //                 labelStyle  : 'padding : 3px; font-weight : bold;',
                    //                 padding     : '0px 2px 0px 2px',
                    //                 flex        : 1
                    //             },
                    //             {
                    //                 xtype       : 'textfield',
                    //                 name        : 'gelar_belakang',
                    //                 allowBlank  : true,
                    //                 fieldLabel  : 'Gelar Belakang',
                    //                 emptyText   : 'Gelar Belakang',
                    //                 anchor      : '100%',
                    //                 labelAlign  : 'top',
                    //                 labelStyle  : 'padding : 3px; font-weight : bold;',
                    //                 padding     : '0px 2px 0px 2px',
                    //                 flex        : 1
                    //             },
                    //             {
                    //                 xtype       : 'combobox',
                    //                 name        : 'jenis_kelamin',
                    //                 allowBlank  : true,
                    //                 fieldLabel  : 'Jenis Kelamin',
                    //                 emptyText   : 'Jenis Kelamin',
                    //                 anchor      : '100%',
                    //                 labelAlign  : 'top',
                    //                 labelStyle  : 'padding : 3px; font-weight : bold;',
                    //                 padding     : '0px 2px 0px 2px',
                    //                 flex        : 1
                    //             }
                    //         ]
                    //     }]
                    // },
                    // {
                    //     xtype       : 'container',
                    //     layout      : 'anchor',
                    //     defaults    : { anchor : '100%'},
                    //     items       : [{
                    //         xtype   : 'fieldcontainer',
                    //         layout  : 'hbox',
                    //         items   : [
                    //             {
                    //                 xtype       : 'textfield',
                    //                 name        : 'tempat_lahir',
                    //                 allowBlank  : true,
                    //                 fieldLabel  : 'Tempat Lahir',
                    //                 emptyText   : 'Tempat Lahir',
                    //                 anchor      : '100%',
                    //                 labelAlign  : 'top',
                    //                 labelStyle  : 'padding : 3px; font-weight : bold;',
                    //                 padding     : '0px 2px 0px 2px',
                    //                 flex        : 1
                    //             },
                    //             {
                    //                 fieldLabel      : 'Tanggal Lahir',
                    //                 emptyText       : 'Tanggal Lahir',
                    //                 tooltip         : 'Tanggal Lahir',
                    //                 name            : 'tanggal_lahir',
                    //                 xtype           : 'datefield',
                    //                 msgTarget       : 'under',
                    //                 type            : 'date', 
                    //                 format          : 'Y-m-d',
                    //                 submitFormat    : 'Y-m-d',
                    //                 labelAlign      : 'top',
                    //                 labelStyle      : 'padding : 3px; font-weight : bold;',
                    //                 anchor          : '100%',
                    //                 padding         : '0px 2px 0px 2px',
                    //                 flex            : 0.8
                    //             },
                    //             {
                    //                 xtype       : 'combobox',
                    //                 name        : 'golongan_darah',
                    //                 allowBlank  : true,
                    //                 fieldLabel  : 'Gol Darah',
                    //                 emptyText   : 'Golongan Darah',
                    //                 anchor      : '100%',
                    //                 labelAlign  : 'top',
                    //                 labelStyle  : 'padding : 3px; font-weight : bold;',
                    //                 padding     : '0px 2px 0px 2px',
                    //                 flex        : 1
                    //             }
                    //         ]
                    //     }]
                    // },
                    // {
                    //     xtype       : 'container',
                    //     layout      : 'anchor',
                    //     defaults    : { anchor : '100%'},
                    //     items       : [{
                    //         xtype   : 'fieldcontainer',
                    //         layout  : 'hbox',
                    //         items   : [
                    //             {
                    //                 xtype       : 'textfield',
                    //                 name        : 'kode_agama',
                    //                 allowBlank  : true,
                    //                 fieldLabel  : 'Kode Agama',
                    //                 emptyText   : 'Kode Agama',
                    //                 anchor      : '100%',
                    //                 labelAlign  : 'top',
                    //                 labelStyle  : 'padding : 3px; font-weight : bold;',
                    //                 padding     : '0px 2px 0px 2px',
                    //                 flex        : 0.5
                    //             },
                    //             {
                    //                 xtype       : 'textfield',
                    //                 name        : 'alamat',
                    //                 allowBlank  : true,
                    //                 fieldLabel  : 'Alamat',
                    //                 emptyText   : 'Alamat',
                    //                 anchor      : '100%',
                    //                 labelAlign  : 'top',
                    //                 labelStyle  : 'padding : 3px; font-weight : bold;',
                    //                 padding     : '0px 2px 0px 2px',
                    //                 flex        : 1.5
                    //             }
                    //         ]
                    //     }]
                    // },
                    // {
                    //     xtype       : 'container',
                    //     layout      : 'anchor',
                    //     defaults    : { anchor : '100%'},
                    //     items       : [{
                    //         xtype   : 'fieldcontainer',
                    //         layout  : 'hbox',
                    //         items   : [
                    //             {
                    //                 xtype       : 'textfield',
                    //                 name        : 'kode_desa',
                    //                 allowBlank  : true,
                    //                 fieldLabel  : 'Kode Desa',
                    //                 emptyText   : 'Kode Desa',
                    //                 anchor      : '100%',
                    //                 labelAlign  : 'top',
                    //                 labelStyle  : 'padding : 3px; font-weight : bold;',
                    //                 padding     : '0px 2px 0px 2px',
                    //                 flex        : 0.7
                    //             },
                    //             {
                    //                 xtype       : 'textfield',
                    //                 name        : 'rt',
                    //                 allowBlank  : true,
                    //                 fieldLabel  : 'RT',
                    //                 emptyText   : 'RT',
                    //                 anchor      : '100%',
                    //                 labelAlign  : 'top',
                    //                 labelStyle  : 'padding : 3px; font-weight : bold;',
                    //                 padding     : '0px 2px 0px 2px',
                    //                 flex        : 0.7
                    //             },
                    //             {
                    //                 xtype       : 'textfield',
                    //                 name        : 'rw',
                    //                 allowBlank  : true,
                    //                 fieldLabel  : 'RW',
                    //                 emptyText   : 'RW',
                    //                 anchor      : '100%',
                    //                 labelAlign  : 'top',
                    //                 labelStyle  : 'padding : 3px; font-weight : bold;',
                    //                 padding     : '0px 2px 0px 2px',
                    //                 flex        : 0.6
                    //             }
                    //         ]
                    //     }]
                    // },
                    {
                        xtype       : 'textfield',
                        name        : 'email',
                        allowBlank  : true,
                        fieldLabel  : 'Email',
                        emptyText   : 'Email',
                        anchor      : '100%',
                        labelAlign  : 'top',
                        labelStyle  : 'padding : 3px; font-weight : bold;',
                        padding     : '0px 2px 0px 2px',
                    },
                    {
                            xtype       : 'filefield',
                            flex        : 1,
                            fieldLabel  : 'Upload Foto',
                            name        : 'userfile',
                            id          : 'userfile',
                            emptyText   : 'Upload Photo',
                            labelWidth  : 85,
                            flex        : 1,
                            buttonText  : '',
                            buttonConfig : {
                                iconCls : 'icon-user'
                            },
                            listeners   : {
                            'afterrender': function(field, value, opts){
                                var me = this;
                                imagem = me.up('form').queryById('imagePreview');

                                //If is multiple file upload
                                field.fileInputEl.dom.multiple = false;
                                
                                //ação de selecionar arquivos
                                field.fileInputEl.dom.onchange = function(){
                                    var filerdr = new FileReader();
                                        input = this;
                                    
                                    filerdr.onload = function(e) {
                                       imagem.setSrc(e.target.result);
                                    }
                                    //Possui todas os arquivos a serem enviados.
                                    filerdr.readAsDataURL(input.files[0]);    
                                }                        
                            }
                        }
                        }
                ]
            }
        ];
        me.buttons = [
            {
                text    : 'Save Add',
                iconCls : 'icon-save',
                action  : 'save',
                disabled: createPegawai
            },
            {
                text    : 'Edit Pegawai',
                iconCls : 'icon-edit',
                action  : 'update',
                disabled: updatePegawai
            },
            {
                text    : 'Reset',
                iconCls : 'icon-refresh',
                action  : 'reset'
            }
        ];
        me.callParent(arguments);
    }  
});