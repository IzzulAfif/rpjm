Ext.define('RPJM.module.MasterRpjm.Kegiatan.view.grid.WindowUnitkerja',{
    extend   : 'Ext.window.Window',
    title    : 'GRID UNIT KERJA',
    iconCls  : 'icon-unitkerja',
    alias    : 'widget.windowunitkerja',
    id       : 'windowunitkerja',
    layout   : 'fit',
    width    : 850,
    height   : 500,
    border   : false,  
    modal    : true, 
    requires : ['RPJM.module.MasterRpjm.Kegiatan.view.grid.GridLookupUnitkerja'],
    layout      : {
        type    :'hbox',
        align   :'stretch'
    },
    defaults    : {
        flex    : 1
    },    
    closable    : true,
    items       : [ 
        {xtype   : 'gridlookupunitkerja', flex : 1}       
    ]
});