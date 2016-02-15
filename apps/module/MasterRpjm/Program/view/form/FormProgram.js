Ext.define('RPJM.module.MasterRpjm.Program.view.form.FormProgram', {
    extend      : 'Ext.form.Panel',
    title       : 'Form Program',
    iconCls     : 'icon-program',
    store       : 'RPJM.module.MasterRpjm.Program.store.Program',
    requires    : ['RPJM.module.MasterRpjm.Program.store.Program'],
    alias       : 'widget.formprogram',
    id          : 'formprogram',
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
                        xtype   : 'fieldcontainer',
                        layout  : 'hbox',
                        items   : [
                            {
                                xtype           : 'combobox',
                                name            : 'kode_bidangrpjm',
                                allowBlank      : true,
                                emptyText       : 'Bidang',
                                labelAlign      : 'top',
                                labelStyle      : 'padding : 3px; font-weight : bold;',
                                store           : Ext.create('RPJM.module.MasterRpjm.Program.store.LookupBidang'),
                                anchor          : '100%',
                                padding         : '0px 2px 0px 2px',
                                displayField    : 'nama_bidangrpjm',
                                valueField      : 'kode_bidangrpjm',
                                displayTpl      : Ext.create('Ext.XTemplate', '<tpl for=".">', '{kode_bidangrpjm} | {nama_bidangrpjm}', '</tpl>'),
                                flex            : 1.6,
                                listConfig      : {
                                    getInnerTpl : function(){
                                        return '{kode_bidangrpjm} | {nama_bidangrpjm}';
                                    }
                                }                                  
                            },
                            {
                                xtype           : 'button',
                                fieldLabel      : 'Bidang',
                                text            : 'Load Bidang',
                                iconCls         : 'icon-lookup',
                                action          : 'lookupBidang',
                                flex            : 0.4
                            }
                        ]
                    },
                    {
                        xtype       : 'textfield',
                        name        : 'kode_programrpjm',
                        allowBlank  : true,
                        fieldLabel  : 'Kode Program',
                        emptyText   : 'Kode Program',
                        anchor      : '100%',
                        labelAlign  : 'top',
                        labelStyle  : 'padding : 3px; font-weight : bold;',
                        padding     : '0px 2px 0px 2px',
                        hidden      : true
                    },
                    {
                        xtype       : 'textareafield',
                        name        : 'programrpjm',
                        allowBlank  : true,
                        fieldLabel  : 'Program',
                        emptyText   : 'Program',
                        labelAlign  : 'top',
                        labelStyle  : 'padding : 3px; font-weight : bold;',
                        anchor      : '100%',
                        padding     : '0px 2px 0px 2px',
                    },
                    {
                        xtype       : 'textfield',
                        name        : 'no_urut',
                        allowBlank  : true,
                        fieldLabel  : 'No Urut',
                        emptyText   : 'No Urut',
                        labelAlign  : 'top',
                        labelStyle  : 'padding : 3px; font-weight : bold;',
                        anchor      : '100%',
                        padding     : '0px 2px 0px 2px',
                    },
                    {
                        xtype           : 'combobox',
                        name            : 'kode_subperiode',
                        allowBlank      : true,
                        fieldLabel      : 'Periode',
                        emptyText       : 'Periode',
                        store           : Ext.create('RPJM.module.MasterRpjm.Program.store.SubPeriode'),
                        tpl             : Ext.create('Ext.XTemplate', '<tpl for=".">','<div class="x-boundlist-item">','{kode_subperiode} - {subperiode}','</div>','</tpl>'),
                        displayTpl      : Ext.create('Ext.XTemplate', '<tpl for=".">', '{kode_subperiode} | {subperiode}', '</tpl>'),
                        displayField    : 'subperiode',
                        valueField      : 'kode_subperiode',
                        labelAlign      : 'top',
                        labelStyle      : 'padding : 3px; font-weight : bold;',
                        anchor          : '100%',
                        padding         : '0px 2px 0px 2px',
                        flex            : 1.5,
                        listConfig      : {
                            getInnerTpl : function(){
                                return '{kode_subperiode} | {subperiode}';
                            }
                        }
                    }
                ]
            }
        ];
        me.buttons = [
            {
                text    : 'Save',
                iconCls : 'icon-save',
                action  : 'save',
                disabled: createProgram
            },
            {
                text    : 'Edit',
                iconCls : 'icon-edit',
                action  : 'update',
                disabled: updateProgram
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