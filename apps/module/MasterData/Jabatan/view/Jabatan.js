Ext.define('RPJM.module.MasterData.Jabatan.view.Jabatan', {
    extend   :  'Ext.panel.Panel',
    title    : 'Jabatan',
    iconCls  : 'icon-jabatan',
    alias    : 'widget.Jabatan',
    id       : 'Jabatan',
    layout   : 'fit',     
    requires : [
        'RPJM.module.MasterData.Jabatan.view.grid.GridJabatan',
        'RPJM.module.MasterData.Jabatan.view.form.FormJabatan'
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
        {xtype   : 'gridjabatan', flex : 1.4},
        {xtype   : 'formjabatan', flex : 0.6}         
    ]
});