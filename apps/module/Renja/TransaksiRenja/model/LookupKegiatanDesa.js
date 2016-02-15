Ext.define('RPJM.module.Renja.TransaksiRenja.model.LookupKegiatanDesa', {
    extend  : 'Ext.data.Model',
    fields  : [
        {
            name    : 'id',
            type    : 'string'
        },
        {
            name    : 'kode_programrpjm',
            type    : 'string'
        },
        {
            name    : 'kode_kegiatanrpjm',
            type    : 'string'
        },
        {
            name    : 'kegiatan',
            type    : 'string'
        },
        {
            name    : 'no_urut',
            type    : 'string'
        }
    ]
});