Ext.define('RPJM.module.MasterData.Periode.view.Periode', {
    extend   :  'Ext.panel.Panel',
    title    : 'Periode',
    iconCls  : 'icon-prov',
    alias    : 'widget.Periode',
    id       : 'Periode',
    layout   : 'fit',     
    requires : [
        'RPJM.module.MasterData.Periode.view.grid.GridPeriode',
        'RPJM.module.MasterData.Periode.view.form.FormPeriode'
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
        {xtype   : 'gridperiode', flex : 1.2},
        {xtype   : 'formperiode', flex : 0.8}         
    ]
});