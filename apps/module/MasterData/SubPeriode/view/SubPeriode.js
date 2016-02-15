Ext.define('RPJM.module.MasterData.SubPeriode.view.SubPeriode', {
    extend   :  'Ext.panel.Panel',
    title    : 'SubPeriode',
    iconCls  : 'icon-subperiode',
    alias    : 'widget.SubPeriode',
    id       : 'SubPeriode',
    layout   : 'fit',     
    requires : [
        'RPJM.module.MasterData.SubPeriode.view.grid.GridSubPeriode',
        'RPJM.module.MasterData.SubPeriode.view.form.FormSubPeriode'
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
        {xtype   : 'gridsubperiode', flex : 1},
        {xtype   : 'formsubperiode', flex : 1}         
    ]
});