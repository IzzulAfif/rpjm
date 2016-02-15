Ext.define('RPJM.module.MasterData.JenisUsulan.view.JenisUsulan', {
    extend   :  'Ext.panel.Panel',
    title    : 'JenisUsulan',
    iconCls  : 'icon-pjenisusulan',
    alias    : 'widget.JenisUsulan',
    id       : 'JenisUsulan',
    layout   : 'fit',     
    requires : [
        'RPJM.module.MasterData.JenisUsulan.view.grid.GridJenisUsulan',
        'RPJM.module.MasterData.JenisUsulan.view.form.FormJenisUsulan'
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
        {xtype   : 'gridjenisusulan', flex : 1.5},
        {xtype   : 'formjenisusulan', flex : 0.5}         
    ]
});