Ext.define('RPJM.module.Musrenbang.MusrenbangKelurahan.view.MusrenbangKelurahan', {
    extend   :  'Ext.panel.Panel',
    title    : 'MusrenbangKelurahan',
    iconCls  : 'icon-musrenbangkelurahan',
    alias    : 'widget.MusrenbangKelurahan',
    id       : 'MusrenbangKelurahan',
    layout   : 'fit',     
    requires : [
        'RPJM.module.Musrenbang.MusrenbangKelurahan.view.grid.GridMusrenbangKelurahan',
        'RPJM.module.Musrenbang.MusrenbangKelurahan.view.form.FormMusrenbangKelurahan'
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
        {xtype   : 'gridmusrenbangkelurahan', flex : 1},
        {xtype   : 'formmusrenbangkelurahan', flex : 1}         
    ]
});