Ext.define('RPJM.module.MasterData.Periode.view.form.FormPeriode', {
    extend      : 'Ext.form.Panel',
    title       : 'Form Periode',
    iconCls     : 'icon-periode',
    store       : 'RPJM.module.MasterData.Periode.store.Periode',
    requires    : ['RPJM.module.MasterData.Periode.store.Periode'],
    alias       : 'widget.formperiode',
    id          : 'formperiode',
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
                        name        : 'kode_periode',
                        allowBlank  : true,
                        fieldLabel  : 'Kode Periode',
                        emptyText   : 'Kode Periode',
                        anchor      : '100%',
                        labelAlign  : 'top',
                        labelStyle  : 'padding : 3px; font-weight : bold;',
                        padding     : '0px 2px 0px 2px',
                    },
                    {
                        xtype       : 'textfield',
                        name        : 'periode',
                        allowBlank  : true,
                        fieldLabel  : 'Periode',
                        emptyText   : 'Periode',
                        anchor      : '100%',
                        labelAlign  : 'top',
                        labelStyle  : 'padding : 3px; font-weight : bold;',
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
                disabled: createPeriode
            },
            {
                text    : 'Edit Periode',
                iconCls : 'icon-edit',
                action  : 'update',
                disabled: updatePeriode
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