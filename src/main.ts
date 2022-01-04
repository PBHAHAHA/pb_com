import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import installIcons from '@/icons'
// import 'normalize.css/normalize.css'
import './styles/index.scss'
import {
  // create naive ui
  create,
  // component
  NButton,
  NIcon,
  NForm,
  NFormItem,
  NInput,
  NSelect
} from 'naive-ui'

const naive = create({
  components: [NButton, NIcon, NForm, NFormItem, NInput, NSelect]
})

const app = createApp(App)
installIcons(app)
app.use(naive)
app.use(store).use(router).mount('#app')
