Ext.define('RPJM.module.MasterData.Periode.view.grid.GridPeriode', {
    extend   : 'Ext.grid.Panel',
    store    : 'RPJM.module.MasterData.Periode.store.Periode',
    requires : ['RPJM.module.MasterData.Periode.store.Periode'],
    title    : 'Grid Periode',
    iconCls  : 'icon-grid',
    alias    : 'widget.gridperiode',
    id       : 'gridperiode',
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
        store       : 'RPJM.module.MasterData.Periode.store.Periode',
        dock        : 'bottom'
    }], 
    columns  : [
        {
            text    : 'No',
            xtype   : 'rownumberer',
            width   : '10%'
        },
        {
            text     : 'Kode Periode',
            dataIndex: 'kode_periode',
            width    : '30%'
        },
        {
            text     : 'Periode',
            dataIndex: 'periode',
            width    : '50%'
        }
    ],
    tbar: [
         { xtype: 'button', iconCls: 'icon-delete', text: 'Delete', action : 'delete', disabled : deletePeriode },
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