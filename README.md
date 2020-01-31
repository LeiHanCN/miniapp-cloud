# miniapp-cloud
微信小程序云开发框架

### 用法
```js
// 引包
import App from 'miniapp-cloud' 

// 或者使用 require
const app = App()

// 添加路由
app.route('user', (event, context) => {
// do something
})

// 接入
module.exports = (event, context) => app.handle(event, context)
```