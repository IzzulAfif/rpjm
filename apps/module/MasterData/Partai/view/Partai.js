Ext.define('RPJM.module.MasterData.Partai.view.Partai', {
    extend   :  'Ext.panel.Panel',
    title    : 'Partai',
    iconCls  : 'icon-desa',
    alias    : 'widget.Partai',
    id       : 'Partai',
    layout   : 'fit',     
    requires : [
        'RPJM.module.MasterData.Partai.view.grid.GridPartai',
        'RPJM.module.MasterData.Partai.view.form.FormPartai'
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
        {xtype   : 'gridpartai', flex : 1},
        {xtype   : 'formpartai', flex : 1}         
    ]
});