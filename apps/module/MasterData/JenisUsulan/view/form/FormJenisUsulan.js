Ext.define('RPJM.module.MasterData.JenisUsulan.view.form.FormJenisUsulan', {
    extend      : 'Ext.form.Panel',
    title       : 'Form JenisUsulan',
    iconCls     : 'icon-jenisusulan',
    //store       : 'RPJM.module.MasterData.JenisUsulan.store.JenisUsulan',
    //requires    : ['RPJM.module.MasterData.JenisUsulan.store.JenisUsulan'],
    alias       : 'widget.formjenisusulan',
    id          : 'formjenisusulan',
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
                                                    name        : 'kode_jenisusulan',
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
                                                    name        : 'jenisusulan',
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
                disabled: createJenisUsulan
            },
            {
                text    : 'Edit JenisUsulan',
                iconCls : 'icon-edit',
                action  : 'update',
                disabled: updateJenisUsulan
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