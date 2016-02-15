Ext.define('RPJM.module.Renja.TransaksiRenja.model.LookupUsulanMasyarakat', {
    extend  : 'Ext.data.Model',
    fields  : [
        {
            name    : 'id',
            type    : 'string'
        },
        {
            name    : 'kode_musrenbang',
            type    : 'string'
        },
        {
            name    : 'kegiatan',
            type    : 'string'
        },
        {
            name    : 'lokasi',
            type    : 'string'
        },
        {
            name    : 'volume',
            type    : 'string'
        },
        {
            name    : 'satuan',
            type    : 'string'
        },
        {
            name    : 'prioritas',
            type    : 'string'
        },
        {
            name    : 'lingkupbidang',
            type    : 'string'
        },
        {
            name    : 'swadana',
            type    : 'string'
        },
        {
            name    : 'apbd_kab',
            type    : 'string'
        },
        {
            name    : 'apbd_prov',
            type    : 'string'
        },
        {
            name    : 'apbn',
            type    : 'string'
        }
    ]
});