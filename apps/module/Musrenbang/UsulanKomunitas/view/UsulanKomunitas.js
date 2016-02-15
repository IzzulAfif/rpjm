Ext.define('RPJM.module.Musrenbang.UsulanKomunitas.view.UsulanKomunitas', {
    extend   :  'Ext.panel.Panel',
    title    : 'usulankomunitas',
    iconCls  : 'icon-usulankomunitas',
    alias    : 'widget.usulankomunitas',
    id       : 'usulankomunitas',
    layout   : 'fit',     
    requires : [
        'RPJM.module.Musrenbang.UsulanKomunitas.view.grid.Gridusulankomunitas',
        'RPJM.module.Musrenbang.UsulanKomunitas.view.form.Formusulankomunitas'
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
        {xtype   : 'gridusulankomunitas', flex : 1},
        {xtype   : 'formusulankomunitas', flex : 1}         
    ]
});