---
title: 编写组件文档
lang: zh-CN
---

# 编写组件文档

1. 在`components`下添加对应的md
2. 添加完对应md后，再在对应的examples下添加对应的`md名称的文件夹`
3. md文件下，如果你需要组件实例，请按照以下格式

```ts
::: demo
在对应在examples下的组件
:::
```
4. 并在对应的examples写出组件
5. 66665666


## echarts地图
1. [获取地图json](http://datav.aliyun.com/portal/school/atlas/area_selector)
2. 了解echarts如何配置地图
   1. 注册地图
   2. 配置地理坐标系组件：geo
   3. 配置组件样式：itemStyle
   4. 添加地图：map
   5. 区域数据、地图下钻、
      1. 区域数据：散点图（scatter），动画散点图（effectScatter），散点图（scatter）+ 路径图（lines）, 自定义图形（custom）
      2. 监听点击事件，重新1-5的步骤
3. 地图区域合并
   1. https://mapshaper.org/ 
## 组件设计

1. 了解需求，一切要从需求出发
   1. 先去了解需求，知道自己负责的东西是什么，能否自己清晰描述需求
   2. 设计上是否存在缺陷，用户体验是否良好
   
2. 功能设计及实现思路
   1. 列出功能点，评估难度，调研技术
   
3. 规范的代码风格，良好的代码注释
   1. 代码规范，干净整洁，要具有可读性，稳定性
   2. 易于后期维护
   
4. 健壮性与组件测试 
   1. 当系统面临干扰、输入错误、入侵等因紧时，页面可能会出现非预期的状态而丧失原有功能、出现错误甚至表现出破坏功能。页面具有的能够抵御出现非预期状态的特性
   2. 组件测试：最好添加前端自动化测试，如在公共组件上必要的要求添加单元测试
   

公共组件
1. 松耦合
要求它们必须具有功能性和完整性。（“耦合”是指实体彼此依赖的术语。松散耦合的实体应该能够独立运行，而不依赖于其他模块。）
在设计组件时，应该考虑到更加通用的使用场景，而不仅仅只是为了满足最开始某个特定场景的需求。
相反的，它是适用于多种场景和需求。避免将定制性强的功能封装到公共组件中，这会增加代码的复杂性和维护难度
2. 可扩展
组件在实现核心功能的基础上，需支持扩展（保留20%以上的扩展性）
3. 
 



<!-- 我们可以把功能或者需求类似的有机体封装成一个业务组件，并对外暴露接口来实现灵活的可定制性，这样的话我们就可以再不同页面不同子系统中复用同样的逻辑和功能了。
不同页面中往往有可能出现视觉或者交互完全相同或者类似的区块，为了提高可复用性和提高开发效率，我们往往会基于基础组件和业务组件再进行一次封装，让其成为一个独立的区块以便直接复用。
基础组件库: 先来看看antd的划分，它划分为：通用组件，布局组件，导航组件，数据录入和数据展示组件，反馈型组件和其他。 -->

## 动画requestAnimationFrame