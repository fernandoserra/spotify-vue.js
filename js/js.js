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
          'Authorization': 'Bearer BQDld0dWOu2yEhdj73kuTL1gPxc-nferXiOagKnHlbZjp_ZdKTYM52aX4OokzeNXn3V4f4kYALWV4LON7KuGOAiVI1mViM6RSn3XSQS8PHogGNk48dL1CLqnxFkJelksCP8Zh77nHTgGUOFjkZT8YeDMlQyrg8o'
        }
      };
      axios.request(confiAxios)
        .then(function (response) {
          console.log(response.data)
          _this.songLista = response.data.playlists.items;
        });
    },
    ventana: function (item) {
      console.log(items)
      this.dialog = true
      let name = item.name
      let imagen = item.images[0].url
      this.detalles = { nombre: name, imagen: imagen, total: item.tracks.total, url: item.external_urls.spotify }
    }
  }
});