Ext.define('RPJM.module.MasterData.Kabupaten.model.Kabupaten', {
    extend  : 'Ext.data.Model',
    fields  : [
        {
            name    : 'id',
            type    : 'string'
        },
        {
            name    : 'kode_prov',
            type    : 'string'
        },
        {
            name    : 'provinsi',
            type    : 'string'
        },
        {
            name    : 'kode_kab',
            type    : 'string'
        },
        {
            name    : 'kabupaten',
            type    : 'string'
        }
    ]
});