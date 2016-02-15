Ext.define('RPJM.module.MasterData.PilihanUrusan.view.PilihanUrusan', {
    extend   :  'Ext.panel.Panel',
    title    : 'PilihanUrusan',
    iconCls  : 'icon-prov',
    alias    : 'widget.PilihanUrusan',
    id       : 'PilihanUrusan',
    layout   : 'fit',     
    requires : [
        'RPJM.module.MasterData.PilihanUrusan.view.grid.GridPilihanUrusan',
        'RPJM.module.MasterData.PilihanUrusan.view.form.FormPilihanUrusan'
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
        {xtype   : 'gridpilihanurusan', flex : 1},
        {xtype   : 'formpilihanurusan', flex : 1}         
    ]
});