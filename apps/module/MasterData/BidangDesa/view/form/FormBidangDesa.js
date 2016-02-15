Ext.define('RPJM.module.MasterData.BidangDesa.view.form.FormBidangDesa', {
    extend      : 'Ext.form.Panel',
    title       : 'Form BidangDesa',
    iconCls     : 'icon-bidangdesa',
    //store       : 'RPJM.module.MasterData.BidangDesa.store.BidangDesa',
    //requires    : ['RPJM.module.MasterData.BidangDesa.store.BidangDesa'],
    alias       : 'widget.formbidangdesa',
    id          : 'formbidangdesa',
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
                                                    name        : 'kode_bidangdesa',
                                                    allowBlank  : true,
                                                    fieldLabel  : 'Kode  Bidang Desa',
                                                    emptyText   : 'Kode  Bidang Desa',
                                                    anchor      : '100%',
                                                    padding     : '0px 2px 0px 2px',
                                                    labelStyle  : 'padding : 3px; font-weight : bold;',
                                                    labelAlign  : 'top',
                                                    anchor     : '100%',
                                                    flex        : 0.4
                                                },
                                                {
                                                    xtype       : 'textfield',
                                                    name        : 'kode_skpd',
                                                    allowBlank  : true,
                                                    fieldLabel  : 'Kode Desa',
                                                    emptyText   : 'Kode Desa',
                                                    anchor      : '100%',
                                                    padding     : '0px 2px 0px 2px',
                                                    labelStyle  : 'padding : 3px; font-weight : bold;',
                                                    labelAlign  : 'top',
                                                    anchor     : 0.4
                                                } 
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        xtype       : 'combobox',
                        name        : 'bidangdesa',
                        allowBlank  : true,
                        fieldLabel  : 'Bidang Desa',
                        emptyText   : 'Bidang Desa',
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
                disabled: createBidangDesa
            },
            {
                text    : 'Edit BidangDesa',
                iconCls : 'icon-edit',
                action  : 'update',
                disabled: updateBidangDesa
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