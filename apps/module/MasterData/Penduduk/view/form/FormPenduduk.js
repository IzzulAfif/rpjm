Ext.define('RPJM.module.MasterData.Penduduk.view.form.FormPenduduk', {
    extend      : 'Ext.form.Panel',
    title       : 'Form Penduduk',
    iconCls     : 'icon-penduduk',
    //store       : 'RPJM.module.MasterData.Penduduk.store.Penduduk',
    //requires    : ['RPJM.module.MasterData.Penduduk.store.Penduduk'],
    alias       : 'widget.formpenduduk',
    id          : 'formpenduduk',
    layout      : 'fit',
    border      : true,
    frame       : true,
    margins     : '3px',
    initComponent: function() {
        var me = this;
        me.items  = [
            {
                xtype       : 'form',
                bodyPadding : 5,
                frame       : true,
                border      : false,
                items       : [
                    {
                        xtype       : 'textfield',
                        name        : 'id',
                        hidden      : true,
                        fieldLabel  : 'ID',                    
                    },
                    {
                        xtype       : 'container',
                        layout      : 'anchor',
                        defaults    : { anchor : '100%'},
                        items       : [{
                            xtype   : 'fieldcontainer',
                            layout  : 'hbox',
                            items   : [
                                {
                                    xtype       : 'textfield',
                                    name        : 'nik',
                                    allowBlank  : true,
                                    fieldLabel  : 'Kode Penduduk',
                                    emptyText   : 'Kode Penduduk',
                                    anchor      : '100%',
                                    labelAlign  : 'top',
                                    labelStyle  : 'padding : 3px; font-weight : bold;',
                                    padding     : '0px 2px 0px 2px',
                                    flex        : 0.6
                                },
                                {
                                    xtype       : 'textfield',
                                    name        : 'nama_lengkap',
                                    allowBlank  : true,
                                    fieldLabel  : 'Nama Lengkap',
                                    emptyText   : 'Nama Lengkap',
                                    anchor      : '100%',
                                    labelAlign  : 'top',
                                    labelStyle  : 'padding : 3px; font-weight : bold;',
                                    padding     : '0px 2px 0px 2px',
                                    flex        : 1.4
                                }
                            ]
                        }]
                    },
                    {
                        xtype       : 'container',
                        layout      : 'anchor',
                        defaults    : { anchor : '100%'},
                        items       : [{
                            xtype   : 'fieldcontainer',
                            layout  : 'hbox',
                            items   : [
                                {
                                    xtype           : 'textfield',
                                    name            : 'tempat_lahir',
                                    allowBlank      : true,
                                    fieldLabel      : 'Tempat Lahir',
                                    emptyText       : 'Tempat Lahir',
                                    anchor          : '100%',
                                    labelAlign      : 'top',
                                    labelStyle      : 'padding : 3px; font-weight : bold;',
                                    padding         : '0px 2px 0px 2px',
                                    flex            : 0.6
                                },
                                {
                                    fieldLabel      : 'Tanggal Lahir',
                                    emptyText       : 'Tanggal Lahir',
                                    tooltip         : 'Tanggal Lahir',
                                    name            : 'tanggal_lahir',
                                    xtype           : 'datefield',
                                    msgTarget       : 'under',
                                    type            : 'date', 
                                    format          : 'Y-m-d',
                                    submitFormat    : 'Y-m-d',
                                    labelAlign      : 'top',
                                    labelStyle      : 'padding : 3px; font-weight : bold;',
                                    anchor          : '100%',
                                    padding         : '0px 2px 0px 2px',
                                    flex            : 0.8
                                },
                                {
                                    xtype           : 'combobox',
                                    name            : 'jenis_kelamin',
                                    allowBlank      : true,
                                    fieldLabel      : 'Jenis Kelamin',
                                    emptyText       : 'Jenis Kelamin',
                                    anchor          : '100%',
                                    labelAlign      : 'top',
                                    labelStyle      : 'padding : 3px; font-weight : bold;',
                                    padding         : '0px 2px 0px 2px',
                                    flex            : 0.6
                                }
                                ]
                            }]
                    },
                    {
                        xtype       : 'container',
                        layout      : 'anchor',
                        defaults    : { anchor : '100%'},
                        items       : [{
                            xtype   : 'fieldcontainer',
                            layout  : 'hbox',
                            items   : [
                                {
                                    xtype       : 'textfield',
                                    name        : 'no_ktp',
                                    allowBlank  : true,
                                    fieldLabel  : 'No. Ktp',
                                    emptyText   : 'No. Ktp',
                                    anchor      : '100%',
                                    labelAlign  : 'top',
                                    labelStyle  : 'padding : 3px; font-weight : bold;',
                                    padding     : '0px 2px 0px 2px',
                                    flex        : 0.7
                                },
                                {
                                    xtype       : 'textfield',
                                    name        : 'file_ktp',
                                    allowBlank  : true,
                                    fieldLabel  : 'File Ktp',
                                    emptyText   : 'File Ktp',
                                    anchor      : '100%',
                                    labelAlign  : 'top',
                                    labelStyle  : 'padding : 3px; font-weight : bold;',
                                    padding     : '0px 2px 0px 2px',
                                    flex        : 0.6
                                },
                                {
                                    xtype       : 'textfield',
                                    name        : 'no_kk',
                                    allowBlank  : true,
                                    fieldLabel  : 'No. KK',
                                    emptyText   : 'No. Kartu Keluarga',
                                    anchor      : '100%',
                                    labelAlign  : 'top',
                                    labelStyle  : 'padding : 3px; font-weight : bold;',
                                    padding     : '0px 2px 0px 2px',
                                    flex        : 0.7
                                }
                                ]
                            }]
                    },
                    {
                        xtype       : 'container',
                        layout      : 'anchor',
                        defaults    : { anchor : '100%'},
                        items       : [{
                            xtype   : 'fieldcontainer',
                            layout  : 'hbox',
                            items   : [
                                {
                                    xtype       : 'textfield',
                                    name        : 'pendidikan',
                                    allowBlank  : true,
                                    fieldLabel  : 'Pendidikan',
                                    emptyText   : 'Pendidikan',
                                    anchor      : '100%',
                                    labelAlign  : 'top',
                                    labelStyle  : 'padding : 3px; font-weight : bold;',
                                    padding     : '0px 2px 0px 2px',
                                    flex        : 1
                                },
                                {
                                    xtype       : 'textfield',
                                    name        : 'pekerjaan',
                                    allowBlank  : true,
                                    fieldLabel  : 'Pekerjaan',
                                    emptyText   : 'Pekerjaan',
                                    anchor      : '100%',
                                    labelAlign  : 'top',
                                    labelStyle  : 'padding : 3px; font-weight : bold;',
                                    padding     : '0px 2px 0px 2px',
                                    flex        : 1
                                }
                            ]
                        }]
                    },
                    {
                        xtype       : 'container',
                        layout      : 'anchor',
                        defaults    : { anchor : '100%'},
                        items       : [{
                            xtype   : 'fieldcontainer',
                            layout  : 'hbox',
                            items   : [
                                {
                                    xtype       : 'combobox',
                                    name        : 'status_perkawinan',
                                    allowBlank  : true,
                                    fieldLabel  : 'Status Kawin',
                                    emptyText   : 'Status Kawin',
                                    anchor      : '100%',
                                    labelAlign  : 'top',
                                    labelStyle  : 'padding : 3px; font-weight : bold;',
                                    padding     : '0px 2px 0px 2px',
                                    flex        : 0.7
                                },
                                {
                                    xtype       : 'combobox',
                                    name        : 'kode_agama',
                                    allowBlank  : true,
                                    fieldLabel  : 'Agama',
                                    emptyText   : 'Agama',
                                    anchor      : '100%',
                                    labelAlign  : 'top',
                                    labelStyle  : 'padding : 3px; font-weight : bold;',
                                    padding     : '0px 2px 0px 2px',
                                    flex        : 0.7
                                },
                                {
                                    xtype       : 'combobox',
                                    name        : 'golongan_darah',
                                    allowBlank  : true,
                                    fieldLabel  : 'Gol Darah',
                                    emptyText   : 'Gol Darah',
                                    anchor      : '100%',
                                    labelAlign  : 'top',
                                    labelStyle  : 'padding : 3px; font-weight : bold;',
                                    padding     : '0px 2px 0px 2px',
                                    flex        : 0.6
                                }
                            ]
                        }]
                    },
                    {
                        xtype       : 'textfield',
                        name        : 'alamat',
                        allowBlank  : true,
                        fieldLabel  : 'Alamat',
                        emptyText   : 'Alamat',
                        anchor      : '100%',
                        labelAlign  : 'top',
                        labelStyle  : 'padding : 3px; font-weight : bold;',
                        padding     : '0px 2px 0px 2px',
                        flex        : 2
                    },
                    {
                        xtype       : 'container',
                        layout      : 'anchor',
                        defaults    : { anchor : '100%'},
                        items       : [{
                            xtype   : 'fieldcontainer',
                            layout  : 'hbox',
                            items   : [
                                {
                                    xtype       : 'textfield',
                                    name        : 'kode_desa',
                                    allowBlank  : true,
                                    fieldLabel  : 'Kode Desa',
                                    emptyText   : 'Kode Desa',
                                    anchor      : '100%',
                                    labelAlign  : 'top',
                                    labelStyle  : 'padding : 3px; font-weight : bold;',
                                    padding     : '0px 2px 0px 2px',
                                    flex        : 0.7
                                },
                                {
                                    xtype       : 'textfield',
                                    name        : 'rt',
                                    allowBlank  : true,
                                    fieldLabel  : 'RT',
                                    emptyText   : 'RT',
                                    anchor      : '100%',
                                    labelAlign  : 'top',
                                    labelStyle  : 'padding : 3px; font-weight : bold;',
                                    padding     : '0px 2px 0px 2px',
                                    flex        : 0.7
                                },
                                {
                                    xtype       : 'textfield',
                                    name        : 'rw',
                                    allowBlank  : true,
                                    fieldLabel  : 'RW',
                                    emptyText   : 'RW',
                                    anchor      : '100%',
                                    labelAlign  : 'top',
                                    labelStyle  : 'padding : 3px; font-weight : bold;',
                                    padding     : '0px 2px 0px 2px',
                                    flex        : 0.6
                                }
                            ]
                        }]
                    },
                    {
                        xtype       : 'container',
                        layout      : 'anchor',
                        defaults    : { anchor : '100%'},
                        items       : [{
                            xtype   : 'fieldcontainer',
                            layout  : 'hbox',
                            items   : [
                                {
                                    xtype       : 'textfield',
                                    name        : 'nomor_hp',
                                    allowBlank  : true,
                                    fieldLabel  : 'No. Hp',
                                    emptyText   : 'No. Hp',
                                    anchor      : '100%',
                                    labelAlign  : 'top',
                                    labelStyle  : 'padding : 3px; font-weight : bold;',
                                    padding     : '0px 2px 0px 2px',
                                    flex        : 0.7
                                },
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
                                    flex        : 1.3
                                }
                            ]
                        }]
                    },
                    {
                        xtype       : 'container',
                        layout      : 'anchor',
                        defaults    : { anchor : '100%'},
                        items       : [{
                            xtype   : 'fieldcontainer',
                            layout  : 'hbox',
                            items   : [
                                {
                                    xtype       : 'textfield',
                                    name        : 'id_partai',
                                    allowBlank  : true,
                                    fieldLabel  : 'ID Partai',
                                    emptyText   : 'ID Partai',
                                    anchor      : '100%',
                                    labelAlign  : 'top',
                                    labelStyle  : 'padding : 3px; font-weight : bold;',
                                    padding     : '0px 2px 0px 2px',
                                    flex        : 0.7
                                },
                                {
                                    xtype       : 'textfield',
                                    name        : 'notifikasi',
                                    allowBlank  : true,
                                    fieldLabel  : 'Notifikasi',
                                    emptyText   : 'Notifikasi',
                                    anchor      : '100%',
                                    labelAlign  : 'top',
                                    labelStyle  : 'padding : 3px; font-weight : bold;',
                                    padding     : '0px 2px 0px 2px',
                                    flex        : 0.7
                                },
                                {
                                    xtype       : 'textfield',
                                    name        : 'shdk',
                                    allowBlank  : true,
                                    fieldLabel  : 'SHDK',
                                    emptyText   : 'SHDK',
                                    anchor      : '100%',
                                    labelAlign  : 'top',
                                    labelStyle  : 'padding : 3px; font-weight : bold;',
                                    padding     : '0px 2px 0px 2px',
                                    flex        : 0.6
                                }
                            ]
                        }]
                    }
            ]}
        ];
        me.buttons = [
            {
                text    : 'Save Add',
                iconCls : 'icon-save',
                action  : 'save',
                disabled: createPenduduk
            },
            {
                text    : 'Edit Penduduk',
                iconCls : 'icon-edit',
                action  : 'update',
                disabled: updatePenduduk
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