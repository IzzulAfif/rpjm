Ext.define('RPJM.module.MasterRpjm.UrusanPemerintah.model.UrusanPemerintah', {
    extend  : 'Ext.data.Model',
    fields  : [
        {
            name    : 'id',
            type    : 'string'
        },
        {
            name    : 'kode_urusan_uu',
            type    : 'string'
        },
        {
            name    : 'nama_urusan_uu',
            type    : 'string'
        },
        {
            name    : 'no_urusan_uu',
            type    : 'string'
        }
    ]
});