Ext.define('RPJM.module.MasterData.Golongan.view.form.FormGolongan', {
    extend      : 'Ext.form.Panel',
    title       : 'Form Golongan',
    iconCls     : 'icon-golongan',
    //store       : 'RPJM.module.MasterData.Golongan.store.Golongan',
    //requires    : ['RPJM.module.MasterData.Golongan.store.Golongan'],
    alias       : 'widget.formgolongan',
    id          : 'formgolongan',
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
                        name        : 'kode_golongan',
                        allowBlank  : true,
                        fieldLabel  : 'Kode Golongan',
                        emptyText   : 'Kode Golongan',
                        anchor      : '100%',
                        padding     : '0px 2px 0px 2px',
                        labelStyle  : 'padding : 3px; font-weight : bold;',
                        labelAlign  : 'top',
                        anchor      : '100%',
                    },
                    {
                        xtype       : 'combobox',
                        name        : 'golongan',
                        allowBlank  : true,
                        fieldLabel  : 'Golongan',
                        emptyText   : 'Golongan',
                        anchor      : '100%',
                        padding     : '0px 2px 0px 2px',
                        labelStyle  : 'padding : 3px; font-weight : bold;',
                        labelAlign  : 'top',
                        anchor      : '100%',
                    }
                ]
            }
        ];
        me.buttons = [
            {
                text    : 'Save Add',
                iconCls : 'icon-save',
                action  : 'save',
                disabled: createGolongan
            },
            {
                text    : 'Edit Golongan',
                iconCls : 'icon-edit',
                action  : 'update',
                disabled: updateGolongan
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