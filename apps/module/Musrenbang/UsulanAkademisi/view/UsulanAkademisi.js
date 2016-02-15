Ext.define('RPJM.module.Musrenbang.UsulanAkademisi.view.UsulanAkademisi', {
    extend   :  'Ext.panel.Panel',
    title    : 'usulanakademisi',
    iconCls  : 'icon-usulanakademisi',
    alias    : 'widget.usulanakademisi',
    id       : 'usulanakademisi',
    layout   : 'fit',     
    requires : [
        'RPJM.module.Musrenbang.UsulanAkademisi.view.grid.Gridusulanakademisi',
        'RPJM.module.Musrenbang.UsulanAkademisi.view.form.Formusulanakademisi'
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
        {xtype   : 'gridusulanakademisi', flex : 1},
        {xtype   : 'formusulanakademisi', flex : 1}         
    ]
});