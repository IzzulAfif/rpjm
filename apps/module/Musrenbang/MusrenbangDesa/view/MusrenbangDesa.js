Ext.define('RPJM.module.Musrenbang.MusrenbangDesa.view.MusrenbangDesa', {
    extend   :  'Ext.panel.Panel',
    title    : 'MusrenbangDesa',
    iconCls  : 'icon-musrenbangdesa',
    alias    : 'widget.MusrenbangDesa',
    id       : 'MusrenbangDesa',
    layout   : 'fit',     
    requires : [
        'RPJM.module.Musrenbang.MusrenbangDesa.view.grid.GridMusrenbangDesa',
        'RPJM.module.Musrenbang.MusrenbangDesa.view.form.FormMusrenbangDesa'
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
        {xtype   : 'gridmusrenbangdesa', flex : 1},
        {xtype   : 'formmusrenbangdesa', flex : 1}         
    ]
});