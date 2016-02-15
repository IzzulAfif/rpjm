Ext.define('RPJM.module.Musrenbang.UsulanDuniausaha.view.UsulanDuniausaha', {
    extend   :  'Ext.panel.Panel',
    title    : 'usulanduniausaha',
    iconCls  : 'icon-usulanduniausaha',
    alias    : 'widget.usulanduniausaha',
    id       : 'usulanduniausaha',
    layout   : 'fit',     
    requires : [
        'RPJM.module.Musrenbang.UsulanDuniausaha.view.grid.Gridusulanduniausaha',
        'RPJM.module.Musrenbang.UsulanDuniausaha.view.form.Formusulanduniausaha'
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
        {xtype   : 'gridusulanduniausaha', flex : 1},
        {xtype   : 'formusulanduniausaha', flex : 1}         
    ]
});