Ext.define('RPJM.module.MasterRpjm.SubUrusan.view.form.FormSubUrusan', {
    extend      : 'Ext.form.Panel',
    title       : 'Form Sub Urusan',
    iconCls     : 'icon-suburusan',
    store       : 'RPJM.module.MasterRpjm.SubUrusan.store.SubUrusan',
    requires    : ['RPJM.module.MasterRpjm.SubUrusan.store.SubUrusan'],
    alias       : 'widget.formsuburusan',
    id          : 'formsuburusan',
    layout      : 'fit',
    border      : true,
    frame       : true,
    margins     : '3px',
    initComponent: function() {
        var me = this;
        me.items  = [
            {
                xtype       : 'tabpanel',
                activeTab   : 0,
                border      : false,
                frame       : false,
                items       : [
                    {
                        xtype       : 'panel',
                        autoScroll  : true,
                        border      : false,
                        frame       : false,
                        layout      : {
                            type    : 'fit'
                        },
                        title       : 'Sub Urusan',
                        defaults    : {
                            anchor      : '100%',
                            msgTarget   : 'under'
                        },
                        items       : [{
                            xtype   : 'panelsuburusan'
                        }]
                    },
                ]
            }
        ];
        me.buttons = [

        ];
        me.callParent(arguments);
    }  
});

/*===================================== Panel SubUrusan ==========================================*/

Ext.define('RPJM.module.MasterRpjm.SubUrusan.view.form.PanelSubUrusan', {
    extend   :  'Ext.panel.Panel',
    alias    : 'widget.panelsuburusan',
    id       : 'panelsuburusan',
    layout   : 'fit',
    frame    : true, 
    border   : false,    
    // requires : [
    //     'RPJM.module.MasterRpjm.SubUrusan.view.form.SubUrusan',
    //     'RPJM.module.MasterRpjm.SubUrusan.view.form.GridSubUrusan'
    // ],
    layout      : {
        type    :'vbox',
        align   :'stretch'
    },
    defaults    : {
        flex    : 1
    },    
    closable    : false,
    items       : [ 
        {xtype   : 'suburusan', flex : 0.6},
        {xtype   : 'gridsuburusan', flex : 1.4}         
    ]
});


/*===================================== Form Sub Urusan ==========================================*/

Ext.define('RPJM.module.MasterRpjm.SubUrusan.view.form.SubUrusan', {
    extend  : 'Ext.form.Panel',
    alias   : 'widget.suburusan',
    id      : 'suburusan',
    frame   : true,
    border  : false,
    items   : [
        {
            xtype   : 'textfield',
            hidden  : true,
            name    : 'id'
        },
        {
            xtype       : 'textfield',
            fieldLabel  : 'Kode Urusan',
            name        : 'kode_urusan',
            emptyText   : 'Kode Urusan',
            labelWidth  : 85,
            margins     : '2px 2px 2px 2px',
            allowBlank  : true,
            msgTarget   : 'under',
            anchor      : '100%',
            labelAlign  : 'top',
            labelStyle  : 'padding : 3px; font-weight : bold;',
            hidden      : true,
            flex        : 1
        },
        {
            xtype       : 'textfield',
            fieldLabel  : 'Kode Sub Urusan',
            name        : 'kode_suburusan',
            emptyText   : 'Kode Sub Urusan',
            labelWidth  : 85,
            margins     : '2px 2px 2px 2px',
            allowBlank  : true,
            anchor      : '100%',
            msgTarget   : 'under',
            labelAlign  : 'top',
            labelStyle  : 'padding : 3px; font-weight : bold;',
            hidden      : true,
            flex        : 1
        },
        {
            xtype       : 'textfield',
            name        : 'nama_suburusan',
            fieldLabel  : 'Sub Urusan',
            emptyText   : 'Sub Urusan',
            labelWidth  : 85,
            margins     : '2px 2px 2px 2px',
            allowBlank  : true,
            anchor      : '100%',
            msgTarget   : 'under',
            labelAlign  : 'top',
            labelStyle  : 'padding : 3px; font-weight : bold;',
            flex        : 1
        },
        {
            xtype       : 'textfield',
            name        : 'no_suburusan',
            fieldLabel  : 'No Sub Urusan',
            emptyText   : 'No Sub Urusan',
            labelWidth  : 85,
            margins     : '2px 2px 2px 2px',
            allowBlank  : true,
            anchor      : '100%',
            msgTarget   : 'under',
            labelAlign  : 'top',
            labelStyle  : 'padding : 3px; font-weight : bold;',
            flex        : 1
        },
    ],
    buttons : [
        {
            text    : 'Save',
            iconCls : 'icon-save',
            action  : 'save'
        },
           
        {
            text    : 'Edit',
            iconCls : 'icon-edit',
            action  : 'update'
        },
        {
            text    : 'Reset',
            iconCls : 'icon-refresh',
            action  : 'reset'
        }
    ]
});

/*===================================== Grid Sub Urusan ==========================================*/

Ext.define('RPJM.module.MasterRpjm.SubUrusan.view.form.GridSubUrusan', {
    extend   : 'Ext.grid.Panel',
    store    : 'RPJM.module.MasterRpjm.SubUrusan.store.SubUrusan',
    alias    : 'widget.gridsuburusan',
    id       : 'gridsuburusan',
    border   : false,
    frame    : true,
    margins     : '3px', 
    selModel: {
        selType     : 'checkboxmodel',
        mode        : 'SINGLE',
        checkOnly   : true,
        width       : '3%',
        action      : 'selected'
    },
    dockedItems: [{
        xtype       : 'pagingtoolbar',
        store       : 'RPJM.module.MasterRpjm.SubUrusan.store.SubUrusan',
        dock        : 'bottom'
    }], 
    columns  : [
        {
            text        : 'No',
            xtype       : 'rownumberer',
            width       : '7%',
            hidden      : true
        },
        {
            text        : 'No Urusan',
            dataIndex   : 'no_suburusan',
            width       : '20%'
        },
        {
            text        : 'Kode',
            dataIndex   : 'kode_urusan',
            width       : '10%',
            hidden      : true
        },
        {
            text        : 'Kode',
            dataIndex   : 'kode_suburusan',
            width       : '10%',
            hidden      : true
        },
        {
            text        : 'Nama Sub Urusan',
            dataIndex   : 'nama_suburusan',
            width       : '65%'
        }
    ],
    tbar: [
         { 
            xtype       : 'button', 
            iconCls     : 'icon-delete', 
            text        : 'Delete', 
            action      : 'delete'
        },
         {
            xtype               : 'textfield',
            emptyText           : 'Type a keyword Press Enter',
            width               : '85%',
            enableKeyEvents     : true,
            action              : 'searchSubUrusan'
        }
    ]
});