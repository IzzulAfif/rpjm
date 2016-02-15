Ext.define('RPJM.module.MasterRpjm.Program.model.Program', {
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
            name    : 'programrpjm',
            type    : 'string'
        },
        {
            name    : 'kode_bidangrpjm',
            type    : 'string'
        },
        {
            name    : 'nama_bidangrpjm',
            type    : 'string'
        },
        {
            name    : 'no_urut',
            type    : 'string'
        },
        {
            name    : 'kode_subperiode',
            type    : 'string'
        }
    ]
});