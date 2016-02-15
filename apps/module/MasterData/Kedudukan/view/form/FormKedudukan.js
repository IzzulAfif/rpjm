Ext.define('RPJM.module.MasterData.Kedudukan.view.form.FormKedudukan', {
    extend      : 'Ext.form.Panel',
    title       : 'Form Kedudukan',
    iconCls     : 'icon-kedudukan',
    //store       : 'RPJM.module.MasterData.Kedudukan.store.Kedudukan',
    //requires    : ['RPJM.module.MasterData.Kedudukan.store.Kedudukan'],
    alias       : 'widget.formkedudukan',
    id          : 'formkedudukan',
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
                                                    name        : 'kode_jabatan',
                                                    allowBlank  : true,
                                                    fieldLabel  : 'Kode Jabatan',
                                                    emptyText   : 'Kode Jabatan',
                                                    anchor      : '100%',
                                                    padding     : '0px 2px 0px 2px',
                                                    labelStyle  : 'padding : 3px; font-weight : bold;',
                                                    labelAlign  : 'top',
                                                    anchor      : '100%',
                                                    flex        : 0.5
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
                                                    flex        : 0.5
                                                },
                                                {
                                                    xtype       : 'textfield',
                                                    name        : 'kode_eselon',
                                                    allowBlank  : true,
                                                    fieldLabel  : 'Kode Eselon',
                                                    emptyText   : 'Kode Eselon',
                                                    anchor      : '100%',
                                                    padding     : '0px 2px 0px 2px',
                                                    labelStyle  : 'padding : 3px; font-weight : bold;',
                                                    labelAlign  : 'top',
                                                    anchor      : '100%',
                                                    flex        : 0.5
                                                }

                                        ]
                                    }
                                ]
                            }
                        ]
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
                                                    name        : 'kode_kedudukan',
                                                    allowBlank  : true,
                                                    fieldLabel  : 'Kode Kedudukan',
                                                    emptyText   : 'Kode Kedudukan',
                                                    anchor      : '100%',
                                                    padding     : '0px 2px 0px 2px',
                                                    labelStyle  : 'padding : 3px; font-weight : bold;',
                                                    labelAlign  : 'top',
                                                    anchor      : '100%',
                                                    flex        : 0.5
                                                },
                                                {
                                                    xtype       : 'combobox',
                                                    name        : 'kedudukan',
                                                    allowBlank  : true,
                                                    fieldLabel  : 'Kedudukan',
                                                    emptyText   : 'Kedudukan',
                                                    anchor      : '100%',
                                                    padding     : '0px 2px 0px 2px',
                                                    labelStyle  : 'padding : 3px; font-weight : bold;',
                                                    labelAlign  : 'top',
                                                    anchor      : '100%',
                                                    flex        : 0.5
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
                disabled: createKedudukan
            },
            {
                text    : 'Edit Kedudukan',
                iconCls : 'icon-edit',
                action  : 'update',
                disabled: updateKedudukan
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