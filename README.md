
# react-use-locked-state
React中的数据流是单向的，并顺着组件层级从上往下传递。这在绝大多数的场合下，都很好使，稍微注意一下避免无谓的的重新渲染即可。配合上redux，那更是把数据和应用状态管理得井井有条，给人以深刻的印象。
最近遇到一个需求，用户在访问页面后，前端使用异步请求获取后端给予的多个勋章奖励，对于每个勋章，需弹出对话框，等用户确认后，再在页面其它组件上显示动画；多个勋章，挨个依以上次序处理。对话框和动画显示组件并没有上下级组件关系，只是个平行关系。
一开始只使用react（因为整个app挺简单的，就没使用redux），在异步请求，对话框关闭回调中，以及相关个组件中加入控制逻辑，做下来一看，代码加了不少，而且这个控制逻辑分散在多个组件中，代码的味道很差，需要考虑下重构了。
首先考虑了使用redux来控制这个显示的次序，估算一下，得为相关组件单独设计出好几个state和action，同样的，组件中的其余代码会和这个控制逻辑没什么关系。这种场景，redux也不太好应付啊。
最终使用的是react新引入的hook，使用起来非常方便，简单的项目不再需要一个redux之类的状态管理器来保存应用状态。不过针对动画显示次序这样的需求，hook也不好直接匹配。在自定义了一个hook之后，程序才算是比较简洁了，而且App重新渲染的次数也少了。

# 安装

npm install --save react-use-locked-state

# 使用

    import useLockedState from 'react-use-locked-state'

    function App() {
        /*
        state -- 保存的数据,
        dispatch(string|number) -- 发送数据，只是暂时保存，并不会导致state状态变化
        next() -- 应用state状态
        */
        const [state, dispatch, next] =  useLockedState()
        ....
    }


# 例子





