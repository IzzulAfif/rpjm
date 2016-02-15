Ext.define('RPJM.module.Musrenbang.UsulanMasyarakat.view.UsulanMasyarakat', {
    extend   :  'Ext.panel.Panel',
    title    : 'usulanmasyarakat',
    iconCls  : 'icon-usulanmasyarakat',
    alias    : 'widget.usulanmasyarakat',
    id       : 'usulanmasyarakat',
    layout   : 'fit',     
    requires : [
        'RPJM.module.Musrenbang.UsulanMasyarakat.view.grid.Gridusulanmasyarakat',
        'RPJM.module.Musrenbang.UsulanMasyarakat.view.form.Formusulanmasyarakat'
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
        {xtype   : 'gridusulanmasyarakat', flex : 1},
        {xtype   : 'formusulanmasyarakat', flex : 1}         
    ]
});