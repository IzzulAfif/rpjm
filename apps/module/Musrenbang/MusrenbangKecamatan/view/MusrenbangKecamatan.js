Ext.define('RPJM.module.Musrenbang.MusrenbangKecamatan.view.MusrenbangKecamatan', {
    extend   :  'Ext.panel.Panel',
    title    : 'MusrenbangKecamatan',
    iconCls  : 'icon-musrenbangkecamatan',
    alias    : 'widget.MusrenbangKecamatan',
    id       : 'MusrenbangKecamatan',
    layout   : 'fit',     
    requires : [
        'RPJM.module.Musrenbang.MusrenbangKecamatan.view.grid.GridMusrenbangKecamatan',
        'RPJM.module.Musrenbang.MusrenbangKecamatan.view.form.FormMusrenbangKecamatan'
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
        {xtype   : 'gridmusrenbangkecamatan', flex : 1},
        {xtype   : 'formmusrenbangkecamatan', flex : 1}         
    ]
});