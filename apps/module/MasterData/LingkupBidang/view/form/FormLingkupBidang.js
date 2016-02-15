Ext.define('RPJM.module.MasterData.LingkupBidang.view.form.FormLingkupBidang', {
    extend      : 'Ext.form.Panel',
    title       : 'Form LingkupBidang',
    iconCls     : 'icon-lingkupbidang',
    //store       : 'RPJM.module.MasterData.LingkupBidang.store.LingkupBidang',
    //requires    : ['RPJM.module.MasterData.LingkupBidang.store.LingkupBidang'],
    alias       : 'widget.formlingkupbidang',
    id          : 'formlingkupbidang',
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
                                                    name        : 'kode_lingkupbidang',
                                                    allowBlank  : true,
                                                    fieldLabel  : 'Kode Lingkup Bidang',
                                                    emptyText   : 'Kode Lingkup Bidang',
                                                    anchor      : '100%',
                                                    padding     : '0px 2px 0px 2px',
                                                    labelStyle  : 'padding : 3px; font-weight : bold;',
                                                    labelAlign  : 'top',
                                                    anchor      : '100%',
                                                    flex            : 0.5
                                                },
                                                {
                                                    xtype       : 'combobox',
                                                    name        : 'lingkupbidang',
                                                    allowBlank  : true,
                                                    fieldLabel  : 'Lingkup Bidang',
                                                    emptyText   : 'Lingkup Bidang',
                                                    anchor      : '100%',
                                                    padding     : '0px 2px 0px 2px',
                                                    labelStyle  : 'padding : 3px; font-weight : bold;',
                                                    labelAlign  : 'top',
                                                    anchor      : '100%',
                                                    flex            : 0.5
                                                }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ];
        me.buttons = [
            {
                text    : 'Save Add',
                iconCls : 'icon-save',
                action  : 'save',
                disabled: createLingkupBidang
            },
            {
                text    : 'Edit LingkupBidang',
                iconCls : 'icon-edit',
                action  : 'update',
                disabled: updateLingkupBidang
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