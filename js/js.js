Vue.component('spotify', {
  template: '#single-componente',
  prosps: ['songLista']
});
var vm = new Vue({
  el: '#app',
  data: {
    dialog: false,
    songLista: [],
    detalles: {}
  },
  mounted: function () {
    this.searchSong();
  },
  methods: {
    searchSong: function () {
      var urlServer = 'https://api.spotify.com/v1/browse/featured-playlists'
      var _this = this;
      var confiAxios = {
        url: urlServer,
        method: 'get',
        responseType: 'json',
        data: {},
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer BQCP1hhYU04yTIz1e22VUAzK2UFK747XJ_AVanbJy0mMYoIAZs_TXH1GnIzqC4Ka-CJjjH8EfmUcxhjH157PwQA_MGXQdrXDAQ_kbSLuls-wyHSb0tiOn7ehwAPItC4Xd7ybi1-9NNJSSy7eIXSqxDXzbRHWT8Y'
        }
      };
      axios.request(confiAxios)
        .then(function (response) {
          console.log(response.data)
          _this.songLista = response.data.playlists.items;
        });
    },
    ventana: function (item) {
      console.log(item)
      this.dialog = true
      let name = item.name
      let imagen = item.images[0].url
      this.detalles = { nombre: name, imagen: imagen, total: item.tracks.total, url: item.external_urls.spotify }
    }
  }
});