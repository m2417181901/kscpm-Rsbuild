#### Vue3 + Graphql 模板项目

## 开始

1. 使用 `npm install` 安装依赖

<span style="color:rgb(155 52 148)">由于代码是由模板自动生成，部分schema第一次无法识别，请先启动服务，生成schema</span>

## 第一次启动
    1. npm install 
    2. npm run server
    3. npm run codegen
    4. npm run dev
   
## 第2次及以后
    npm run start // 测试环境


## graphql配置需要修改的地方

1. `apollo.config.js` 配置你的graphql访问地址
2. `server/config/development.ts` 测试环境后端地址
3. `server/config/production.ts` 生产环境后端地址
4. `server/utils/request.ts` 请求方法，需要更改项目对应的Service
5. `overlord.config.ts` 修改服务名称, 注意：服务名称需要提前在overlord注册， studio.overlord.ksyun.com


## 环境配置
Node > 16 

## 调试
main.ts
```
const uri = `${protocol}//${hostname}:8091`;
```

#### 开发调试
<span  style="color:red">需手动新建.env 文件</span>
```
OVERLORD_KEY=专属的key
```

测试环境 <span style="color:red"> http </span>协议

预发布、线上环境 <span style="color:red"> https </span>协议

server/config/local.ts (测试)
```
{
    product: 'http://product.console.ksyun.com/api',
}
```
apollo.config.js
```
client: {
    service: {
        url: 'http://localhost:8091',   // 线上、预发布支持 https
    },
}
```
overlord.config.ts
```
{
    https: false    // 线上、预发布支持 https
    serviceName: 'vue3grahql',  // 需要提前在overlord注册
};
```

vite.config.ts 
```
plugins: [
    // basicSsl()     // 测试环境注释掉。 测试环境http不需要证书 . 线上需要vite SSL
]
```

## 发布

#### 测试

#### server: graphql overlord
```
http://dev.studio.overlord.ksyun.com/#/login
```
#### client 
```
K8S 集群部署或者其他部署方式
```
#### 线上
#### server: graphql overlord

```
http://studio.overlord.ksyun.com/#/login
```
#### client 
```
K8S 集群部署或者其他部署方式
```

## 构建和测试
任务: 解释其他用户和开发人员如何使你的代码更好。 能帮我美化这个md文件吗
