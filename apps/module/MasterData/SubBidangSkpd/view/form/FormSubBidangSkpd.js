Ext.define('RPJM.module.MasterData.SubBidangSkpd.view.form.FormSubBidangSkpd', {
    extend      : 'Ext.form.Panel',
    title       : 'Form SubBidangSkpd',
    iconCls     : 'icon-subbidangskpd',
    store       : 'RPJM.module.MasterData.SubBidangSkpd.store.SubBidangSkpd',
    requires    : ['RPJM.module.MasterData.SubBidangSkpd.store.SubBidangSkpd'],
    alias       : 'widget.formsubbidangskpd',
    id          : 'formsubbidangskpd',
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
                        name        : 'kode_bidangskpd',
                        allowBlank  : true,
                        fieldLabel  : 'Kode Bidang Skpd',
                        emptyText   : 'Kode Bidang Skpd',
                        anchor      : '100%',
                        labelAlign  : 'top',
                        labelStyle  : 'padding : 3px; font-weight : bold;',
                        padding     : '0px 2px 0px 2px',
                    },
                    {
                        xtype       : 'textfield',
                        name        : 'kode_subbidangskpd',
                        allowBlank  : true,
                        fieldLabel  : 'Kode Sub Bidang Skpd',
                        emptyText   : 'Kode Sub Bidang Skpd',
                        anchor      : '100%',
                        labelAlign  : 'top',
                        labelStyle  : 'padding : 3px; font-weight : bold;',
                        padding     : '0px 2px 0px 2px',
                    },
                    {
                        xtype       : 'textfield',
                        name        : 'subbidangskpd',
                        allowBlank  : true,
                        fieldLabel  : 'Sub Bidang Skpd',
                        emptyText   : 'Sub Bidang Skpd',
                        labelAlign  : 'top',
                        labelStyle  : 'padding : 3px; font-weight : bold;',
                        anchor      : '100%',
                        padding     : '0px 2px 0px 2px',
                    }
                ]
            }
        ];
        me.buttons = [
            {
                text    : 'Save Add',
                iconCls : 'icon-save',
                action  : 'save',
                disabled: createSubBidangSkpd
            },
            {
                text    : 'Edit SubBidangSkpd',
                iconCls : 'icon-edit',
                action  : 'update',
                disabled: updateSubBidangSkpd
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