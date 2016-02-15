Ext.define('RPJM.module.MasterRpjm.SubUrusan.view.grid.GridSubUrusan', {
    extend      : 'Ext.grid.Panel',
    // store       : 'RPJM.module.MasterRpjm.SubUrusan.store.SubUrusan',
    // requires    : ['RPJM.module.MasterRpjm.SubUrusan.store.SubUrusan'],
    title       : 'Grid Sub Urusan',
    iconCls     : 'icon-grid',
    alias       : 'widget.gridsuburusan',
    id          : 'gridsuburusan',
    border      : true,
    frame       : true,
    margins     : '3px', 
    selModel    : {
        selType     : 'checkboxmodel',
        mode        : 'SINGLE',
        checkOnly   : true,
        width       : '3%',
        action      : 'selected',
    },
    dockedItems: [{
        xtype       : 'pagingtoolbar',
        //store       : 'RPJM.module.MasterRpjm.SubUrusan.store.SubUrusan',
        dock        : 'bottom'
    }], 
    columns  : [
        {
            text        : 'No',
            xtype       : 'rownumberer',
            width       : '7%'
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
         { xtype: 'button', iconCls: 'icon-delete', text: 'Delete', action : 'delete', disabled : deleteSubUrusan },
         // { xtype: 'button', iconCls: 'icon-excel', text: 'Print', action : 'print' },
         {
            xtype               : 'textfield',
            emptyText           : 'Type a keyword Press Enter',
            width               : '80%',
            enableKeyEvents     : true,
            action              : 'search'
        }
    ]
});