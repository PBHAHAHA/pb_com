import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import 'normalize.css/normalize.css'
import './styles/index.scss'
import {
  // create naive ui
  create,
  // component
  NButton
} from 'naive-ui'

const naive = create({
  components: [NButton]
})

const app = createApp(App)
app.use(naive)
app.use(store).use(router).mount('#app')
