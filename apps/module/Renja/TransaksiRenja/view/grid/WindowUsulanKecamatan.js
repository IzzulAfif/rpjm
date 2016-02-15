Ext.define('RPJM.module.Renja.TransaksiRenja.view.grid.WindowUsulanKecamatan',{
    extend   : 'Ext.window.Window',
    title    : 'GRID USULAN KECAMATAN',
    iconCls  : 'icon-kecamatan',
    alias    : 'widget.windowusulankecamatan',
    id       : 'windowusulankecamatan',
    layout   : 'fit',
    width    : 850,
    height   : 500,
    border   : false,  
    modal    : true, 
    requires : ['RPJM.module.Renja.TransaksiRenja.view.grid.GridUsulanKecamatan'],
    layout      : {
        type    :'hbox',
        align   :'stretch'
    },
    defaults    : {
        flex    : 1
    },    
    closable    : true,
    items       : [ 
        {xtype   : 'gridusulankecamatan', flex : 1}       
    ]
});