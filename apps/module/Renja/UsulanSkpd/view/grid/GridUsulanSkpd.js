Ext.define('RPJM.module.Renja.UsulanSkpd.view.grid.GridUsulanSkpd', {
    extend   : 'Ext.grid.Panel',
    store    : 'RPJM.module.Renja.UsulanSkpd.store.UsulanSkpd',
    requires : ['RPJM.module.Renja.UsulanSkpd.store.UsulanSkpd'],
    title    : 'Grid UsulanSkpd',
    iconCls  : 'icon-grid',
    alias    : 'widget.gridusulanskpd',
    id       : 'gridusulanskpd',
    border   : true,
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
        store       : 'RPJM.module.Renja.UsulanSkpd.store.UsulanSkpd',
        dock        : 'bottom'
    }], 
    columns  : [
        {
            text    : 'No',
            xtype   : 'rownumberer',
            width   : '10%'
        },
        {
            text     : 'Tahun',
            dataIndex: 'tahun',
            width    : '15%'
        },
        {
            text     : 'Kode Renja',
            dataIndex: 'kode_musrenbang',
            width    : '15%',
            hidden   : true,
        },
        {
            text     : 'Kegiatan',
            dataIndex: 'kegiatan',
            width    : '15%'
        },
        {
            text     : 'Lokasi',
            dataIndex: 'lokasi',
            width    : '15%'
        },
        {
            text     : 'Volume',
            dataIndex: 'volume',
            width    : '15%'
        },
        {
            text     : 'Satuan',
            dataIndex: 'satuan',
            width    : '15%'
        },
        {
            text     : 'Penerimaan Lain',
            dataIndex: 'penerimaan_lain',
            width    : '15%'
        },
        {
            text     : 'RSUD',
            dataIndex: 'rsud',
            width    : '15%'
        },
        {
            text     : 'Kapitasi',
            dataIndex: 'kapitasi',
            width    : '15%'
        },
        {
            text     : 'Bangub',
            dataIndex: 'bangub',
            width    : '15%'
        },
        {
            text     : 'Sektoral Apbd',
            dataIndex: 'sektoral_apbd',
            width    : '15%'
        },
        {
            text     : 'DAK',
            dataIndex: 'dak',
            width    : '15%'
        },
        {
            text     : 'DBHCHT',
            dataIndex: 'dbhcht',
            width    : '15%'
        },
        {
            text     : 'DID',
            dataIndex: 'did',
            width    : '15%'
        },
        {
            text     : 'TP',
            dataIndex: 'tp',
            width    : '15%'
        },
        {
            text     : 'Dekonsentrasi',
            dataIndex: 'dekonsentrasi',
            width    : '15%'
        },
        {
            text     : 'Sektoral Apbn',
            dataIndex: 'sektoral_apbn',
            width    : '15%'
        },
        {
            text     : 'Target Capaian 2016',
            dataIndex: 'current_goal',
            width    : '15%'
        },
        {
            text     : 'Target Capaian 2017',
            dataIndex: 'next_goal',
            width    : '15%'
        },
        {
            text     : 'Anggaran Selanjutnya',
            dataIndex: 'next_anggaran',
            width    : '15%'
        },
    ],
    tbar: [
         { xtype: 'button', iconCls: 'icon-delete', text: 'Delete', action : 'delete', disabled : deleteUsulanSkpd },
         // { xtype: 'button', iconCls: 'icon-excel', text: 'Print', action : 'print' },
         {
            xtype               : 'textfield',
            emptyText           : 'Type a keyword Press Enter',
            width               : '75%',
            enableKeyEvents     : true,
            action              : 'search'
        }
    ]
});