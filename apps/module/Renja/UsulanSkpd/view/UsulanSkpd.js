Ext.define('RPJM.module.Renja.UsulanSkpd.view.UsulanSkpd', {
    extend   :  'Ext.panel.Panel',
    title    : 'usulanskpd',
    iconCls  : 'icon-usulanskpd',
    alias    : 'widget.usulanskpd',
    id       : 'usulanskpd',
    layout   : 'fit',     
    requires : [
        'RPJM.module.Renja.UsulanSkpd.view.grid.Gridusulanskpd',
        'RPJM.module.Renja.UsulanSkpd.view.form.Formusulanskpd'
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
        {xtype   : 'gridusulanskpd', flex : 1},
        {xtype   : 'formusulanskpd', flex : 1}         
    ]
});