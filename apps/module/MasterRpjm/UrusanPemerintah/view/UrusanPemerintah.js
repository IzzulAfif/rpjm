Ext.define('RPJM.module.MasterRpjm.UrusanPemerintah.view.UrusanPemerintah', {
    extend   :  'Ext.panel.Panel',
    title    : 'UrusanPemerintah',
    iconCls  : 'icon-urusanpemerintah',
    alias    : 'widget.UrusanPemerintah',
    id       : 'UrusanPemerintah',
    layout   : 'fit',
    frame    : true,     
    requires : [
        'RPJM.module.MasterRpjm.UrusanPemerintah.view.grid.GridUrusanPemerintah',
        'RPJM.module.MasterRpjm.UrusanPemerintah.view.form.FormUrusanPemerintah'
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
        {xtype   : 'gridurusanpemerintah', flex : 1.4},
        {xtype   : 'formurusanpemerintah', flex : 0.6}         
    ]
});