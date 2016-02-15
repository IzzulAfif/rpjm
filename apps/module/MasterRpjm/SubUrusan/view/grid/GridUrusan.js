Ext.define('RPJM.module.MasterRpjm.SubUrusan.view.grid.GridUrusan', {
    extend   : 'Ext.grid.Panel',
    store    : 'RPJM.module.MasterRpjm.SubUrusan.store.Urusan',
    requires : ['RPJM.module.MasterRpjm.SubUrusan.store.Urusan'],
    title    : 'Grid Urusan',
    iconCls  : 'icon-grid',
    alias    : 'widget.gridurusan',
    id       : 'gridurusan',
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
        store       : 'RPJM.module.MasterRpjm.SubUrusan.store.Urusan',
        dock        : 'bottom'
    }], 
    columns  : [
        {
            text        : 'No',
            xtype       : 'rownumberer',
            width       : '9%',
            hidden      : true
        },
        {
            text        : 'No Urusan',
            dataIndex   : 'no_urusan',
            width       : '15%'
        },
        {
            text        : 'Kode',
            dataIndex   : 'kode_urusan',
            width       : '10%',
            hidden      : true
        },
        {
            text        : 'Kode',
            dataIndex   : 'kode_urusan',
            width       : '10%',
            hidden      : true
        },
        {
            text        : 'Nama Urusan',
            dataIndex   : 'nama_urusan',
            width       : '70%'
        }
    ],
    tbar: [
         {
            xtype               : 'textfield',
            emptyText           : 'Type a keyword Press Enter',
            width               : '75%',
            enableKeyEvents     : true,
            action              : 'search'
        }
    ]
});