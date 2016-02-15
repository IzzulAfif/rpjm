Ext.define('RPJM.module.MasterData.Penduduk.view.Penduduk', {
    extend   :  'Ext.panel.Panel',
    title    : 'Penduduk',
    iconCls  : 'icon-prov',
    alias    : 'widget.Penduduk',
    id       : 'Penduduk',
    layout   : 'fit',     
    requires : [
        'RPJM.module.MasterData.Penduduk.view.grid.GridPenduduk',
        'RPJM.module.MasterData.Penduduk.view.form.FormPenduduk'
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
        {xtype   : 'gridpenduduk', flex : 1},
        {xtype   : 'formpenduduk', flex : 1}         
    ]
});