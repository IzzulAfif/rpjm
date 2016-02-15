Ext.define('RPJM.module.MasterRpjm.Kegiatan.model.LookupProgram', {
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
            name    : 'no_urut',
            type    : 'string'
        }
    ]
});