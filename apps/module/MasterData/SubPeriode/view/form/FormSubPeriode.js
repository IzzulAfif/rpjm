Ext.define('RPJM.module.MasterData.SubPeriode.view.form.FormSubPeriode', {
    extend      : 'Ext.form.Panel',
    title       : 'Form SubPeriode',
    iconCls     : 'icon-subperiode',
    store       : 'RPJM.module.MasterData.SubPeriode.store.SubPeriode',
    requires    : ['RPJM.module.MasterData.SubPeriode.store.SubPeriode'],
    alias       : 'widget.formsubperiode',
    id          : 'formsubperiode',
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
                        name        : 'kode_subperiode',
                        allowBlank  : true,
                        fieldLabel  : 'Kode Sub Periode',
                        emptyText   : 'Kode Sub Periode',
                        anchor      : '100%',
                        labelAlign  : 'top',
                        labelStyle  : 'padding : 3px; font-weight : bold;',
                        padding     : '0px 2px 0px 2px',
                    },
                    {
                        xtype       : 'textfield',
                        name        : 'subperiode',
                        allowBlank  : true,
                        fieldLabel  : 'Sub Periode',
                        emptyText   : 'Sub Periode',
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
                disabled: createSubPeriode
            },
            {
                text    : 'Edit SubPeriode',
                iconCls : 'icon-edit',
                action  : 'update',
                disabled: updateSubPeriode
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