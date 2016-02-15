Ext.define('RPJM.module.MasterData.Provinsi.view.Provinsi', {
    extend   :  'Ext.panel.Panel',
    title    : 'Provinsi',
    iconCls  : 'icon-provinsi',
    alias    : 'widget.Provinsi',
    id       : 'Provinsi',
    layout   : 'fit',     
    requires : [
        'RPJM.module.MasterData.Provinsi.view.grid.GridProvinsi',
        'RPJM.module.MasterData.Provinsi.view.form.FormProvinsi'
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
        {xtype   : 'gridprovinsi', flex : 1.5},
        {xtype   : 'formprovinsi', flex : 0.5}         
    ]
});