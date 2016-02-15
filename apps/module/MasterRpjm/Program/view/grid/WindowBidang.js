Ext.define('RPJM.module.MasterRpjm.Program.view.grid.WindowBidang',{
    extend   : 'Ext.window.Window',
    title    : 'GRID BIDANG',
    iconCls  : 'icon-bidang',
    alias    : 'widget.windowbidang',
    id       : 'windowbidang',
    layout   : 'fit',
    width    : 850,
    height   : 500,
    border   : false,  
    modal    : true, 
    requires : ['RPJM.module.MasterRpjm.Program.view.grid.GridLookupBidang'],
    layout      : {
        type    :'hbox',
        align   :'stretch'
    },
    defaults    : {
        flex    : 1
    },    
    closable    : true,
    items       : [ 
        {xtype   : 'gridlookupbidang', flex : 1}       
    ]
});