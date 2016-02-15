Ext.define('RPJM.module.MasterData.Kecamatan.model.Kecamatan', {
    extend  : 'Ext.data.Model',
    fields  : [
        {
            name    : 'id',
            type    : 'string'
        },
        {
            name    : 'kode_kab',
            type    : 'string'
        },
        {
            name    : 'kabupaten',
            type    : 'string'
        },
        {
            name    : 'kode_kec',
            type    : 'string'
        },
        {
            name    : 'kecamatan',
            type    : 'string'
        }
    ]
});