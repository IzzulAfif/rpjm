Ext.define('RPJM.module.MasterData.Kecamatan.view.Kecamatan', {
    extend   :  'Ext.panel.Panel',
    title    : 'Kecamatan',
    iconCls  : 'icon-kecamatan',
    alias    : 'widget.Kecamatan',
    id       : 'Kecamatan',
    layout   : 'fit',     
    requires : [
        'RPJM.module.MasterData.Kecamatan.view.grid.GridKecamatan',
        'RPJM.module.MasterData.Kecamatan.view.form.FormKecamatan'
    ],
    layout      : {
        type    :'hbox',
        align   :'stretch'
    },
    defaults    : {
        flex    : 1
    },    
    closable    : true,
    items       : [ 
        {xtype   : 'gridkecamatan', flex : 1.4},
        {xtype   : 'formkecamatan', flex : 0.6}         
    ]
});