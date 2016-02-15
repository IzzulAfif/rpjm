Ext.define('RPJM.module.MasterRpjm.Kegiatan.view.grid.WindowProgram',{
    extend   : 'Ext.window.Window',
    title    : 'GRID PROGRAM',
    iconCls  : 'icon-program',
    alias    : 'widget.windowprogram',
    id       : 'windowprogram',
    layout   : 'fit',
    width    : 850,
    height   : 500,
    border   : false,  
    modal    : true, 
    requires : ['RPJM.module.MasterRpjm.Kegiatan.view.grid.GridLookupProgram'],
    layout      : {
        type    :'hbox',
        align   :'stretch'
    },
    defaults    : {
        flex    : 1
    },    
    closable    : true,
    items       : [ 
        {xtype   : 'gridlookupprogram', flex : 1}       
    ]
});