const plugin = require('./plugins.conf')

module.exports = {
  // di dapat dari https://my.telegram.org/
  API_ID: 3847542,
  API_HASH: '1b98d104d7e166618ede4437cb6029da',

  // aktifkan jika pakai bot API
  // jika bot API aktif, userbot otomatis OFF
  BOT_API: true,
  // token bot API dari @botfather, HANYA jika BOT_API true
  BOT_TOKEN: '1835333141:AAFH8X5mo_e0-8mR99Pdh2UTfkIegmphqcE',

  // jika konek dengan nomor hp
  // pake tipe string, format internasional 628xxxxxxx

  phone: '+6281293544619', // ini contoh saja, ganti dengan yang sesuai

  // path TDLib
  pathTDLib: './tdlib/libtdjson.so',

  // untuk verbose mode
  debug: {
    active: true,
    level: 0 // 0 minimalis, 1 event only, 2 detail, 3 semua termasuk object dan fungsi
  },

  admin:
  {
    active: true, // <-- aktifkan jika ingin membatasi bot dipergunakan oleg admin saja

    // jika skipme false, dan admin true.. id bot harus dimasukkan di sini. 
    // Amannya sih masukkan saja, kawatir berubah pikiran trus lupa ngisinya
    id: [
      859229457, // <- ganti ini ke ID kamu
    ],
  },

  // detail aplikasi

  // override plugins status, liat file pluginConfig.js
  plugins: plugin.status,

  // untuk keperluan plugins
  base: {
    uploadPath: '',
  },

  // userbot: jika true, maka pesan ditandai terbaca
  terbaca: true,

  // aktifkan jika pesan sendiri tidak ingin diproses
  skipMe: true,
  skipMessage: true, // jika true, pas launching bot pesan lama ga akan direspon
}
