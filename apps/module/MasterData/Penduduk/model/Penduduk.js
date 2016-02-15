Ext.define('RPJM.module.MasterData.Penduduk.model.Penduduk', {
    extend  : 'Ext.data.Model',
    fields  : [
        {
            name    : 'id',
            type    : 'string'
        },
        {
            name    : 'nik',
            type    : 'string'
        },
        {
            name    : 'nama_lengkap',
            type    : 'string'
        },
        {
            name    : 'tempat_lahir',
            type    : 'string'
        },
        {
            name        : 'tanggal_lahir',
            type        : 'date',
            dateFormat  : 'Y-m-d'
        },
        {
            name    : 'jenis_kelamin',
            type    : 'string'
        },
        {
            name    : 'no_ktp',
            type    : 'string'
        },
        {
            name    : 'file_ktp',
            type    : 'string'
        },
        {
            name    : 'no_kk',
            type    : 'string'
        },
        {
            name    : 'pendidikan',
            type    : 'string'
        },
        {
            name    : 'pekerjaan',
            type    : 'string'
        },
        {
            name    : 'status_perkawinan',
            type    : 'string'
        },
        {
            name    : 'kode_agama',
            type    : 'string'
        },
        {
            name    : 'golongan_darah',
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
            name    : 'nomor_hp',
            type    : 'string'
        },
        {
            name    : 'email',
            type    : 'string'
        },
        {
            name    : 'id_partai',
            type    : 'string'
        },
        {
            name    : 'notifikasi',
            type    : 'string'
        },
        {
            name    : 'shdk',
            type    : 'string'
        }
    ]
});