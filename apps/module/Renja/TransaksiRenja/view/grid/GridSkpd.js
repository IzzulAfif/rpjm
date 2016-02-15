Ext.define('RPJM.module.Renja.TransaksiRenja.view.grid.GridSkpd', {
    extend   : 'Ext.grid.Panel',
    store    : 'RPJM.module.Renja.TransaksiRenja.store.TransaksiRenja',
    alias    : 'widget.gridskpd',
    id       : 'gridskpd',
    border   : false,
    frame    : true,
    margins     : '3px', 
    selModel: {
        selType     : 'checkboxmodel',
        mode        : 'SINGLE',
        checkOnly   : true,
        width       : '3%',
        action      : 'selected',
    },
    dockedItems: [{
        xtype       : 'pagingtoolbar',
        store       : 'RPJM.module.Renja.TransaksiRenja.store.TransaksiRenja',
        dock        : 'bottom'
    }], 
    columns  : [
        {
            text    : 'No',
            xtype   : 'rownumberer',
            width   : '7%'
        },
        {
            text     : 'Usulan',
            dataIndex: 'kegiatan',
            width    : '35%'
        },
        {
            text     : 'Penerimaan Lain',
            dataIndex: 'penerimaan_lain',
            width    : '25%'
        },
        {
            text     : 'RSUD',
            dataIndex: 'rsud',
            width    : '25%'
        },
        {
            text     : 'Kapitasi',
            dataIndex: 'kapitasi',
            width    : '25%'
        },
        {
            text     : 'BANGUB',
            dataIndex: 'bangub',
            width    : '35%'
        },
        {
            text     : 'Sektoral APBD',
            dataIndex: 'sektoral_apbd',
            width    : '25%'
        },
        {
            text     : 'DAK',
            dataIndex: 'dak',
            width    : '25%'
        },
        {
            text     : 'DBHCHT',
            dataIndex: 'dbhcht',
            width    : '25%'
        },
        {
            text     : 'DID',
            dataIndex: 'did',
            width    : '25%'
        },
        {
            text     : 'TP',
            dataIndex: 'tp',
            width    : '25%'
        },
        {
            text     : 'Dekonsentrasi',
            dataIndex: 'dekonsentrasi',
            width    : '35%'
        },
        {
            text     : 'Sektoral APBN',
            dataIndex: 'sektoral_apbn',
            width    : '25%'
        }
    ],
    tbar: [
        {
            xtype   : 'button',
            text    : 'Sasaran',
            iconCls : 'icon-save',
            action  : 'loadsasaran'
        }, 
        {
            xtype   : 'button',
            text    : 'Export',
            iconCls : 'icon-excel',
            action  : 'cetaksasaran'
        }
    ]
});