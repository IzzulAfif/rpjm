Ext.define('RPJM.module.MasterRpjm.SubUrusan.view.ViewUrusan', {
    extend   : 'Ext.panel.Panel',
    alias    : 'widget.viewurusan',
    id       : 'viewurusan',
    layout   : 'fit', 
    border   : false,    
    requires : [
        'RPJM.module.MasterRpjm.SubUrusan.view.form.FormSubUrusan',
        'RPJM.module.MasterRpjm.SubUrusan.view.grid.GridSubUrusan'
    ],
    layout      : {
        type    :'vbox',
        align   :'stretch'
    },
    defaults    : {
        flex    : 1
    },    
    items       : [ 
        {xtype   : 'formsuburusan', flex : 0.8},
        {xtype   : 'gridsuburusan', flex : 1.2},         
    ]
});