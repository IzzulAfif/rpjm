Ext.define('RPJM.module.MasterData.Pegawai.view.Pegawai', {
    extend   :  'Ext.panel.Panel',
    title    : 'Pegawai',
    iconCls  : 'icon-prov',
    alias    : 'widget.Pegawai',
    id       : 'Pegawai',
    layout   : 'fit',     
    requires : [
        'RPJM.module.MasterData.Pegawai.view.grid.GridPegawai',
        'RPJM.module.MasterData.Pegawai.view.form.FormPegawai'
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
        {xtype   : 'gridpegawai', flex : 0.8},
        {xtype   : 'formpegawai', flex : 1.2}         
    ]
});