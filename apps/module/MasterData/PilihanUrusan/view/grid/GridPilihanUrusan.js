Ext.define('RPJM.module.MasterData.PilihanUrusan.view.grid.GridPilihanUrusan', {
    extend   : 'Ext.grid.Panel',
    //store    : 'RPJM.module.MasterData.PilihanUrusan.store.PilihanUrusan',
    requires : ['RPJM.module.MasterData.PilihanUrusan.store.PilihanUrusan'],
    title    : 'Grid PilihanUrusan',
    iconCls  : 'icon-grid',
    alias    : 'widget.gridpilihanurusan',
    id       : 'gridpilihanurusan',
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
        //store       : 'RPJM.module.MasterData.PilihanUrusan.store.PilihanUrusan',
        dock        : 'bottom'
    }], 
    columns  : [
        {
            text    : 'No',
            xtype   : 'rownumberer',
            width   : '10%'
        },
        {
            text     : 'Kode Pilihan Urusan',
            dataIndex: 'kode_pilihanurusan',
            width    : '30%'
        },
        {
            text     : 'Pilihan Urusan',
            dataIndex: 'pilihanurusan',
            width    : '50%'
        }
    ],
    tbar: [
         { xtype: 'button', iconCls: 'icon-delete', text: 'Delete', action : 'delete', disabled : deletePilihanUrusan },
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