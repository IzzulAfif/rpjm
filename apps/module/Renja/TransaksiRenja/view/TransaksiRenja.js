Ext.define('RPJM.module.Renja.TransaksiRenja.view.TransaksiRenja', {
    extend   : 'Ext.panel.Panel',
    alias    : 'widget.transaksirenja',
    title    : 'Transaksi Renja',
    iconCls  : 'icon-transaksirenja',
    alias    : 'widget.transaksirenja',
    id       : 'transaksirenja',
    layout   : 'fit', 
    border   : false,  
    frame    : true,
    requires : [
        'RPJM.module.Renja.TransaksiRenja.view.form.FormLoading',
        'RPJM.module.Renja.TransaksiRenja.view.ViewTransaksiRenja'
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
        {xtype   : 'formloading', flex : 0.6}, 
        {xtype   : 'viewtransaksirenja', flex : 1.4}
                
    ]
});

