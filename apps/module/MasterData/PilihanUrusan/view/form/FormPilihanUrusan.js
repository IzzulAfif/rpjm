Ext.define('RPJM.module.MasterData.PilihanUrusan.view.form.FormPilihanUrusan', {
    extend      : 'Ext.form.Panel',
    title       : 'Form PilihanUrusan',
    iconCls     : 'icon-pilihanurusan',
    //store       : 'RPJM.module.MasterData.PilihanUrusan.store.PilihanUrusan',
    //requires    : ['RPJM.module.MasterData.PilihanUrusan.store.PilihanUrusan'],
    alias       : 'widget.formpilihanurusan',
    id          : 'formpilihanurusan',
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
                        name        : 'no_pilihanurusan',
                        allowBlank  : true,
                        fieldLabel  : 'No. PilihanUrusan',
                        emptyText   : 'No. PilihanUrusan',
                        anchor      : '100%',
                        labelAlign  : 'top',
                        labelStyle  : 'padding : 3px; font-weight : bold;',
                        padding     : '0px 2px 0px 2px',
                    },
                    {
                        xtype       : 'textfield',
                        name        : 'kode_pilihanurusan',
                        allowBlank  : true,
                        fieldLabel  : 'Kode PilihanUrusan',
                        emptyText   : 'Kode PilihanUrusan',
                        anchor      : '100%',
                        labelAlign  : 'top',
                        labelStyle  : 'padding : 3px; font-weight : bold;',
                        padding     : '0px 2px 0px 2px',
                    },
                    {
                        xtype       : 'textfield',
                        name        : 'kode_urusan',
                        allowBlank  : true,
                        fieldLabel  : 'Kode Urusan',
                        emptyText   : 'Kode Urusan',
                        anchor      : '100%',
                        labelAlign  : 'top',
                        labelStyle  : 'padding : 3px; font-weight : bold;',
                        padding     : '0px 2px 0px 2px',
                    },
                    {
                        xtype       : 'textfield',
                        name        : 'nama_pilihanurusan',
                        allowBlank  : true,
                        fieldLabel  : 'PilihanUrusan',
                        emptyText   : 'PilihanUrusan',
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
                disabled: createPilihanUrusan
            },
            {
                text    : 'Edit',
                iconCls : 'icon-edit',
                action  : 'update',
                disabled: updatePilihanUrusan
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