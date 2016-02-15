Ext.define('RPJM.module.MasterData.Kedudukan.view.Kedudukan', {
    extend   :  'Ext.panel.Panel',
    title    : 'Kedudukan',
    iconCls  : 'icon-kedudukan',
    alias    : 'widget.Kedudukan',
    id       : 'Kedudukan',
    layout   : 'fit',     
    requires : [
        'RPJM.module.MasterData.Kedudukan.view.grid.GridKedudukan',
        'RPJM.module.MasterData.Kedudukan.view.form.FormKedudukan'
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
        {xtype   : 'gridkedudukan', flex : 1.1},
        {xtype   : 'formkedudukan', flex : 0.8}         
    ]
});