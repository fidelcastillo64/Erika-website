import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { VueFire } from 'vuefire';
import { app as firebaseApp } from './firebase';

AOS.init();
// Importa e inicializa Font Awesome antes de montar la app.
import { initializeFontAwesome } from './plugins/fontawesome';
initializeFontAwesome();

const app = createApp(App);


app.component('font-awesome-icon', FontAwesomeIcon);
app.use(VueFire, {
  firebaseApp,
  modules: [
    // Aquí puedes añadir los módulos de Firebase que necesites
  ],
});

app.mount('#app');