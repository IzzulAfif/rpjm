Ext.define('RPJM.module.MasterRpjm.Program.model.SubPeriode', {
    extend  : 'Ext.data.Model',
    fields  : [
        {
            name    : 'id',
            type    : 'string'
        },
        {
            name    : 'kode_subperiode',
            type    : 'string'
        },
        {
            name    : 'subperiode',
            type    : 'string'
        },
        {
            name    : 'kode_periode',
            type    : 'string'
        },
        {
            name    : 'status',
            type    : 'string'
        }
    ]
});