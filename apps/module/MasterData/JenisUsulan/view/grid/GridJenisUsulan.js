Ext.define('RPJM.module.MasterData.JenisUsulan.view.grid.GridJenisUsulan', {
    extend   : 'Ext.grid.Panel',
    //store    : 'RPJM.module.MasterData.JenisUsulan.store.JenisUsulan',
    requires : ['RPJM.module.MasterData.JenisUsulan.store.JenisUsulan'],
    title    : 'Grid JenisUsulan',
    iconCls  : 'icon-grid',
    alias    : 'widget.gridjenisusulan',
    id       : 'gridjenisusulan',
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
        //store       : 'RPJM.module.MasterData.JenisUsulan.store.JenisUsulan',
        dock        : 'bottom'
    }], 
    columns  : [
        {
            text    : 'No',
            xtype   : 'rownumberer',
            width   : '10%'
        },
        {
            text     : 'Kode Lingkup Bidang',
            dataIndex: 'kode_lingbidang',
            width    : '20%'
        },
        {
            text     : 'Lingkup Bidang',
            dataIndex: 'ling_bidang',
            width    : '60%'
        }
    ],
    tbar: [
         { xtype: 'button', iconCls: 'icon-delete', text: 'Delete', action : 'delete', disabled : deleteJenisUsulan },
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