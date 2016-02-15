Ext.define('RPJM.module.MasterData.Bidang.model.Bidang', {
    extend  : 'Ext.data.Model',
    fields  : [
        {
            name    : 'id',
            type    : 'string'
        },
        {
            name    : 'kode_bidang',
            type    : 'string'
        },
        {
            name    : 'nama_bidang',
            type    : 'string'
        },
        {
            name    : 'kode_pilihanurusan',
            type    : 'string'
        },
        {
            name    : 'kode_subpilihanurusan',
            type    : 'string'
        },
        {
            name    : 'no_bidang',
            type    : 'string'
        }
    ]
});