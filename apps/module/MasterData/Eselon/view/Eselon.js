Ext.define('RPJM.module.MasterData.Eselon.view.Eselon', {
    extend   :  'Ext.panel.Panel',
    title    : 'Eselon',
    iconCls  : 'icon-eselon',
    alias    : 'widget.Eselon',
    id       : 'Eselon',
    layout   : 'fit',     
    requires : [
        'RPJM.module.MasterData.Eselon.view.grid.GridEselon',
        'RPJM.module.MasterData.Eselon.view.form.FormEselon'
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
        {xtype   : 'grideselon', flex : 1.5},
        {xtype   : 'formeselon', flex : 0.5}         
    ]
});