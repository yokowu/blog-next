import { Col, List, Row, Tag } from 'antd'
import { ScheduleOutlined } from '@ant-design/icons'
import React from 'react'

const data = [
  {title: "React 是什么？", desc: "如果你对这个比较感兴趣，可以查阅 API 文档了解有关 createElement() 更详细的用法。但在接下来的教程中，我们并不会直接使用这个方法，而是继续使用 JSX。\n在 JSX 中你可以任意使用 JavaScript 表达式，只需要用一个大括号把表达式括起来。每一个 React 元素事实上都是一个 JavaScript 对象，你可以在你的程序中把它当保存在变量中或者作为参数传递。\n前文中的 ShoppingList 组件只会渲染一些内置的 DOM 组件，如<div />、<li />等。但是你也可以组合和渲染自定义的 React 组件。例如，你可以通过 <ShoppingList /> 来表示整个购物清单组件。每个组件都是封装好的，并且可以单独运行，这样你就可以通过组合简单的组件来构建复杂的 UI 界面。", date: "2021/1021", tags: ['Go', '计算机基础']},
  {title: "React 是什么", desc: "如果你对这个比较感兴趣，可以查阅 API 文档了解有关 createElement() 更详细的用法。但在接下来的教程中，我们并不会直接使用这个方法，而是继续使用 JSX。\n在 JSX 中你可以任意使用 JavaScript 表达式，只需要用一个大括号把表达式括起来。每一个 React 元素事实上都是一个 JavaScript 对象，你可以在你的程序中把它当保存在变量中或者作为参数传递。\n前文中的 ShoppingList 组件只会渲染一些内置的 DOM 组件，如<div />、<li />等。但是你也可以组合和渲染自定义的 React 组件。例如，你可以通过 <ShoppingList /> 来表示整个购物清单组件。每个组件都是封装好的，并且可以单独运行，这样你就可以通过组合简单的组件来构建复杂的 UI 界面。", date: "2021/1021"},
  {title: "React 是什么？", desc: "如果你对这个比较感兴趣，可以查阅 API 文档了解有关 createElement() 更详细的用法。但在接下来的教程中，我们并不会直接使用这个方法，而是继续使用 JSX。\n在 JSX 中你可以任意使用 JavaScript 表达式，只需要用一个大括号把表达式括起来。每一个 React 元素事实上都是一个 JavaScript 对象，你可以在你的程序中把它当保存在变量中或者作为参数传递。\n前文中的 ShoppingList 组件只会渲染一些内置的 DOM 组件，如<div />、<li />等。但是你也可以组合和渲染自定义的 React 组件。例如，你可以通过 <ShoppingList /> 来表示整个购物清单组件。每个组件都是封装好的，并且可以单独运行，这样你就可以通过组合简单的组件来构建复杂的 UI 界面。", date: "2021/1021"},
  {title: "React 是什么？", desc: "如果你对这个比较感兴趣，可以查阅 API 文档了解有关 createElement() 更详细的用法。但在接下来的教程中，我们并不会直接使用这个方法，而是继续使用 JSX。\n在 JSX 中你可以任意使用 JavaScript 表达式，只需要用一个大括号把表达式括起来。每一个 React 元素事实上都是一个 JavaScript 对象，你可以在你的程序中把它当保存在变量中或者作为参数传递。\n前文中的 ShoppingList 组件只会渲染一些内置的 DOM 组件，如<div />、<li />等。但是你也可以组合和渲染自定义的 React 组件。例如，你可以通过 <ShoppingList /> 来表示整个购物清单组件。每个组件都是封装好的，并且可以单独运行，这样你就可以通过组合简单的组件来构建复杂的 UI 界面。", date: "2021/1021"},
  {title: "React 是什么？", desc: "如果你对这个比较感兴趣，可以查阅 API 文档了解有关 createElement() 更详细的用法。但在接下来的教程中，我们并不会直接使用这个方法，而是继续使用 JSX。\n在 JSX 中你可以任意使用 JavaScript 表达式，只需要用一个大括号把表达式括起来。每一个 React 元素事实上都是一个 JavaScript 对象，你可以在你的程序中把它当保存在变量中或者作为参数传递。\n前文中的 ShoppingList 组件只会渲染一些内置的 DOM 组件，如<div />、<li />等。但是你也可以组合和渲染自定义的 React 组件。例如，你可以通过 <ShoppingList /> 来表示整个购物清单组件。每个组件都是封装好的，并且可以单独运行，这样你就可以通过组合简单的组件来构建复杂的 UI 界面。", date: "2021/1021"},
]

const PostList = () => {
  return (
    <div>
      <Row justify="center">
        <Col xs={16} sm={16} md={16} lg={16} xl={16}
          className="post-list"
        >
          <List 
            size="large"
            dataSource={data}
            itemLayout="vertical"
            renderItem={item => (
              <List.Item
                className="post-list-item"
                actions={[
                  <div><ScheduleOutlined /> {item.date}</div>,
                ]}
              >
                <h1 className="post-list-title">{item.title}</h1>
                <div className="post-list-desc">{item.desc}</div>
              </List.Item>
            )}
          />
        </Col>
      </Row>
    </div>
  )
}

export default PostList
