Ext.define('RPJM.module.MasterData.Kabupaten.view.Kabupaten', {
    extend   :  'Ext.panel.Panel',
    title    : 'Kabupaten',
    iconCls  : 'icon-kabupaten',
    alias    : 'widget.Kabupaten',
    id       : 'Kabupaten',
    layout   : 'fit',     
    requires : [
        'RPJM.module.MasterData.Kabupaten.view.grid.GridKabupaten',
        'RPJM.module.MasterData.Kabupaten.view.form.FormKabupaten'
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
        {xtype   : 'gridkabupaten', flex : 1.5},
        {xtype   : 'formkabupaten', flex : 0.5}         
    ]
});