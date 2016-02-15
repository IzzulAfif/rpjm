Ext.define('RPJM.module.Renja.TransaksiRenja.view.ViewTransaksiRenja', {
    extend      : 'Ext.form.Panel',
    alias       : 'widget.viewtransaksirenja',
    id          : 'viewtransaksirenja',
    layout      : 'fit',
    border      : false,
    frame       : false,
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
                        title       : 'Sasaran',
                        defaults    : {
                            anchor      : '100%',
                            msgTarget   : 'under'
                        },
                        items       : [
                            { xtype   : 'viewsasaran' }
                        ]
                    }
                ]                    
            }
        ];
        me.callParent(arguments);  
    }
});

/* ==================== SASARAN ==================== */
Ext.define('RPJM.module.Renja.TransaksiRenja.view.form.ViewSasaran', {
    extend      : 'Ext.form.Panel',
    alias       : 'widget.viewsasaran',
    id          : 'viewsasaran',
    layout      : 'fit',
    border      : false,
    frame       : false,
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
                        autoScroll  : false,
                        border      : false,
                        layout      : {
                            type    : 'fit'
                        },
                        title       : 'SKPD',
                        defaults    : {
                            anchor      : '95%',
                            msgTarget   : 'under'
                        },
                        items       : [
                            {
                                xtype   : 'panelskpd'
                            }
                        ]
                    }
                ]                    
            }
        ];
        me.buttons = [
            
        ];
        me.callParent(arguments);
    }  
});

/* =============== SASARAN SKPD ================= */

Ext.define('RPJM.module.Renja.TransaksiRenja.view.form.PanelSkpd', {
    extend   : 'Ext.panel.Panel',
    alias    : 'widget.panelskpd',
    id       : 'panelskpd',
    layout   : 'fit',
    frame    : true, 
    border   : false,
    requires : [
        'RPJM.module.Renja.TransaksiRenja.view.grid.GridSkpd'
    ],
    layout      : {
        type    :'vbox',
        align   :'stretch'
    },
    defaults    : {
        flex    : 1
    },    
    closable    : false,
    items       : [ 
        {xtype   : 'gridskpd', flex : 1}                
    ]
});

