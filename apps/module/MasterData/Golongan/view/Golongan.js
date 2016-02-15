Ext.define('RPJM.module.MasterData.Golongan.view.Golongan', {
    extend   :  'Ext.panel.Panel',
    title    : 'Golongan',
    iconCls  : 'icon-golongan',
    alias    : 'widget.Golongan',
    id       : 'Golongan',
    layout   : 'fit',     
    requires : [
        'RPJM.module.MasterData.Golongan.view.grid.GridGolongan',
        'RPJM.module.MasterData.Golongan.view.form.FormGolongan'
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
        {xtype   : 'gridgolongan', flex : 1.5},
        {xtype   : 'formgolongan', flex : 0.5}         
    ]
});