Ext.define('RPJM.module.Musrenbang.HasilReses.view.HasilReses', {
    extend   :  'Ext.panel.Panel',
    title    : 'hasilreses',
    iconCls  : 'icon-hasilreses',
    alias    : 'widget.hasilreses',
    id       : 'hasilreses',
    layout   : 'fit',     
    requires : [
        'RPJM.module.Musrenbang.HasilReses.view.grid.Gridhasilreses',
        'RPJM.module.Musrenbang.HasilReses.view.form.Formhasilreses'
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
        {xtype   : 'gridhasilreses', flex : 1},
        {xtype   : 'formhasilreses', flex : 1}         
    ]
});