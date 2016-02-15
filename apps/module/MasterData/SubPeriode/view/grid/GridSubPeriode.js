Ext.define('RPJM.module.MasterData.SubPeriode.view.grid.GridSubPeriode', {
    extend   : 'Ext.grid.Panel',
    store    : 'RPJM.module.MasterData.SubPeriode.store.SubPeriode',
    requires : ['RPJM.module.MasterData.SubPeriode.store.SubPeriode'],
    title    : 'Grid SubPeriode',
    iconCls  : 'icon-grid',
    alias    : 'widget.gridsubperiode',
    id       : 'gridsubperiode',
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
        store       : 'RPJM.module.MasterData.SubPeriode.store.SubPeriode',
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
            width    : '20%'
        },
        {
            text     : 'Kode Sub Periode',
            dataIndex: 'kode_subperiode',
            width    : '20%'
        },
        {
            text     : 'Sub Periode',
            dataIndex: 'subperiode',
            width    : '40%'
        }
    ],
    tbar: [
         { xtype: 'button', iconCls: 'icon-delete', text: 'Delete', action : 'delete', disabled : deleteSubPeriode },
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