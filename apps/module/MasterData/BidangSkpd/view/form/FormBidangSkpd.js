Ext.define('RPJM.module.MasterData.BidangSkpd.view.form.FormBidangSkpd', {
    extend      : 'Ext.form.Panel',
    title       : 'Form BidangSkpd',
    iconCls     : 'icon-bidangskpd',
    //store       : 'RPJM.module.MasterData.BidangSkpd.store.BidangSkpd',
    //requires    : ['RPJM.module.MasterData.BidangSkpd.store.BidangSkpd'],
    alias       : 'widget.formbidangskpd',
    id          : 'formbidangskpd',
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
                                                    name        : 'kode_bidangskpd',
                                                    allowBlank  : true,
                                                    fieldLabel  : 'Kode  Bidang Skpd',
                                                    emptyText   : 'Kode  Bidang Skpd',
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
                                                    fieldLabel  : 'Kode Skpd',
                                                    emptyText   : 'Kode Skpd',
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
                        name        : 'bidangskpd',
                        allowBlank  : true,
                        fieldLabel  : 'Bidang Skpd',
                        emptyText   : 'Bidang Skpd',
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
                disabled: createBidangSkpd
            },
            {
                text    : 'Edit BidangSkpd',
                iconCls : 'icon-edit',
                action  : 'update',
                disabled: updateBidangSkpd
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