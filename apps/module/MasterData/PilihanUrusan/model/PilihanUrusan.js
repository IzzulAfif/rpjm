Ext.define('RPJM.module.MasterData.PilihanUrusan.model.PilihanUrusan', {
    extend  : 'Ext.data.Model',
    fields  : [
        {
            name    : 'id',
            type    : 'string'
        },
        {
            name    : 'no_pilihanurusan',
            type    : 'string'
        },
        {
            name    : 'kode_pilihanurusan',
            type    : 'string'
        },
        {
            name    : 'kode_urusan',
            type    : 'string'
        },
        {
            name    : 'nama_pilihanurusan',
            type    : 'string'
        }
    ]
});