import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index'
import HomePage from '@/views/Demo1/HomePage';
import Demo1Page from '@/views/Demo1/Demo1Page';


//弹性盒子案例
import FlexibleBoxDemo from '@/views/Demo2/FlexibleBoxDemo';

//盒子模型
import BoxModelDemo from '@/views/Demo2/BoxModelDemo';

//组件切换页面
import SwitchComponents from '@/views/Demo2/SwitchComponents';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      redirect: '/HomePage',
      children: [
        {
          path: '/HomePage',
          name: '首页',
          component: HomePage
        }, {
          path: '/Demo1Page',
          name: '测试页面1',
          component: Demo1Page
        },
        {
          path: '/FlexibleBoxDemo',
          name: '弹性盒子案例',
          component: FlexibleBoxDemo
        }, {
          path: '/BoxModelDemo',
          name: '盒子模型',
          component: BoxModelDemo
        }, {
          path: '/SwitchComponents',
          name: '组件切换',
          component: SwitchComponents
        }
      ]
    },


  ]
})
