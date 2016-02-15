Ext.define('RPJM.module.MasterRpjm.SubUrusan.view.SubUrusan', {
    extend   :  'Ext.panel.Panel',
    title    : 'Sub Urusan',
    iconCls  : 'icon-suburusan',
    alias    : 'widget.SubUrusan',
    id       : 'SubUrusan',
    layout   : 'fit',     
    requires : [
        'RPJM.module.MasterRpjm.SubUrusan.view.grid.GridUrusan',
        'RPJM.module.MasterRpjm.SubUrusan.view.form.FormSubUrusan'
    ],
    layout      : {
        type    :'hbox',
        align   :'stretch'
    },
    closable    : true,
    items       : [ 
        {xtype   : 'gridurusan', flex : 1.1},
        {xtype   : 'formsuburusan', flex : 0.9}         
    ]
});