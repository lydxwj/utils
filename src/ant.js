import Vue from 'vue';
import {
  BackTop,
  Button,
  Card,
  Col,
  Divider,
  Icon,
  Input,
  InputNumber,
  Layout,
  List,
  LocaleProvider,
  message,
  Menu,
  Modal,
  notification,
  Row,
  Tree,
  Select,
  Switch,
  DatePicker,
} from 'ant-design-vue';

Vue.prototype.$message = message;
Vue.prototype.$notification = notification;
Vue.prototype.$info = Modal.info;
Vue.prototype.$success = Modal.success;
Vue.prototype.$error = Modal.error;
Vue.prototype.$warning = Modal.warning;
Vue.prototype.$confirm = Modal.confirm;
Vue.use(BackTop);
Vue.use(Button);
Vue.use(Card);
Vue.use(Col);
Vue.use(Divider);
Vue.use(Icon);
Vue.use(Input);
Vue.use(List);
Vue.use(InputNumber);
Vue.use(Layout);
Vue.use(LocaleProvider);
Vue.use(Menu);
Vue.use(Row);
Vue.use(Tree);
Vue.use(Select);
Vue.use(DatePicker);
Vue.use(Switch);