Ext.define('RPJM.module.MasterData.Bidang.view.form.FormBidang', {
    extend      : 'Ext.form.Panel',
    title       : 'Form Bidang',
    iconCls     : 'icon-bidang',
    //store       : 'RPJM.module.MasterData.Bidang.store.Bidang',
    //requires    : ['RPJM.module.MasterData.Bidang.store.Bidang'],
    alias       : 'widget.formbidang',
    id          : 'formbidang',
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
                items       : [
                    {
                        xtype       : 'textfield',
                        name        : 'id',
                        hidden      : true,
                        fieldLabel  : 'ID',                    
                    },
                    {
                        xtype       : 'textfield',
                        name        : 'kode_bidang',
                        allowBlank  : true,
                        fieldLabel  : 'Kode Bidang',
                        emptyText   : 'Kode Bidang',
                        anchor      : '100%',
                        padding     : '0px 2px 0px 2px',
                        labelStyle  : 'padding : 3px; font-weight : bold;',
                        labelAlign  : 'top',
                        flex        : 0.6
                    },
                    {
                                columnWidth : .72,
                                xtype       : 'container',
                                layout      : 'anchor',
                                defaults    : { anchor : '100%'},
                                items       : [
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
                                                    name        : 'no_bidang',
                                                    allowBlank  : true,
                                                    fieldLabel  : 'No Bidang',
                                                    emptyText   : 'No Bidang',
                                                    anchor      : '100%',
                                                    padding     : '0px 2px 0px 2px',
                                                    labelStyle  : 'padding : 3px; font-weight : bold;',
                                                    labelAlign  : 'top',
                                                    flex        : 0.6
                                                },
                                                 {
                                                    xtype       : 'combobox',
                                                    name        : 'nama_bidang',
                                                    allowBlank  : true,
                                                    fieldLabel  : 'Nama Bidang',
                                                    emptyText   : 'Nama Bidang',
                                                    anchor      : '100%',
                                                    padding     : '0px 2px 0px 2px',
                                                    labelStyle  : 'padding : 3px; font-weight : bold;',
                                                    labelAlign  : 'top',
                                                    flex        : 0.8
                                                }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                     {
                        xtype       : 'combobox',
                        name        : 'kode_pilihanurusan',
                        allowBlank  : true,
                        fieldLabel  : 'Pilih Urusan',
                        emptyText   : 'Pilih Urusan',
                        anchor      : '100%',
                        padding     : '0px 2px 0px 2px',
                        labelStyle  : 'padding : 3px; font-weight : bold;',
                        labelAlign  : 'top',

                    },
                    {
                        xtype       : 'combobox',
                        name        : 'kode_subpilihanurusan',
                        allowBlank  : true,
                        fieldLabel  : 'Sub Pilihan Urusan',
                        emptyText   : 'Sub Pilih Urusan',
                        anchor      : '100%',
                        padding     : '0px 2px 0px 2px',
                        labelStyle  : 'padding : 3px; font-weight : bold;',
                        labelAlign  : 'top',
                    } 
                ]
            }
        ];
        me.buttons = [
            {
                text    : 'Save Add',
                iconCls : 'icon-save',
                action  : 'save',
                disabled: createBidang
            },
            {
                text    : 'Edit Bidang',
                iconCls : 'icon-edit',
                action  : 'update',
                disabled: updateBidang
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