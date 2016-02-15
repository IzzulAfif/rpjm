Ext.define('RPJM.module.MasterData.Pegawai.model.Pegawai', {
    extend  : 'Ext.data.Model',
    fields  : [
        {
            name    : 'id',
            type    : 'string'
        },
        {
            name    : 'nip',
            type    : 'string'
        },
        {
            name    : 'nama',
            type    : 'string'
        },
        {
            name    : 'kode_kedudukan',
            type    : 'string'
        },
        {
            name    : 'status_kepegawaian',
            type    : 'string'
        },
        {
            name    : 'gelar_depan',
            type    : 'string'
        },
        {
            name    : 'gelar_belakang',
            type    : 'string'
        },
        {
            name        : 'tgl_lahir',
            type        : 'date',
            dateFormat  : 'Y-m-d'
        },
        {
            name    : 'jenis_kelamin',
            type    : 'string'
        },
        {
            name    : 'tempat_lahir',
            type    : 'string'
        },
        {
            name    : 'golongan_darah',
            type    : 'string'
        },
        {
            name    : 'kode_agama',
            type    : 'string'
        },
        {
            name    : 'alamat',
            type    : 'string'
        },
        {
            name    : 'kode_desa',
            type    : 'string'
        },
        {
            name    : 'rt',
            type    : 'string'
        },
        {
            name    : 'rw',
            type    : 'string'
        },
        {
            name    : 'email',
            type    : 'string'
        }
    ]
});