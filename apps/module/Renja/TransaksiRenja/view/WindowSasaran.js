Ext.define('RPJM.module.Renja.TransaksiRenja.view.WindowSasaran',{
    extend   : 'Ext.window.Window',
    title    : 'PILIH SASARAN',
    iconCls  : 'icon-form',
    alias    : 'widget.windowsasaran',
    id       : 'windowsasaran',
    layout   : 'fit',
    width    : 550,
    height   : 250,
    modal    : true, 
    layout      : {
        type    :'vbox',
        align   :'stretch'
    },
    defaults    : {
        flex    : 1
    },    
    closable    : true,
    items       : [ 
       {
            xtype   : 'fieldcontainer',
            layout  : 'hbox',
            padding : '5px',
            margins : '2px',
            items   : [
                {
                    xtype       : 'button',
                    text        : 'USULAN SKPD',
                    width       : 75,
                    height      : 100,
                    action      : 'loadSKPD',
                    flex        : 1
                }, 
                {
                    xtype       : 'button',
                    text        : 'HASIL RESES',
                    width       : 75,
                    height      : 100,
                    action      : 'loadReses',
                    flex        : 1
                }, 
                {
                    xtype       : 'button',
                    text        : 'USULAN MASYARAKAT',
                    width       : 75,
                    height      : 100,
                    action      : 'loadMasyarakat',
                    flex        : 1
                }, 
            ]
        },      
         {
            xtype   : 'fieldcontainer',
            layout  : 'hbox',
            padding : '5px',
            margins : '2px',
            items   : [
                {
                    xtype       : 'button',
                    text        : 'MUSREN KECAMATAN',
                    width       : 75,
                    height      : 100,
                    action      : 'loadMusrenKec',
                    flex        : 1
                }, 
                {
                    xtype       : 'button',
                    text        : 'MUSREN KELURAHAN',
                    width       : 75,
                    height      : 100,
                    action      : 'loadMusrenKel',
                    flex        : 1
                }, 
                {
                    xtype       : 'button',
                    text        : 'MUSREN DESA',
                    width       : 75,
                    height      : 100,
                    action      : 'loadMusrenDes',
                    flex        : 1
                }
            ]
        } 
    ]
});