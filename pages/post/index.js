import Head from 'next/head'
import { Col, Row } from 'antd'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import Footer from '../../components/footer'
import Header from '../../components/header'

let markdown='# P01:课程介绍和环境搭建\n' +
  '[ **M** ] arkdown + E [ **ditor** ] = **Mditor**  \n' +
  '> Mditor 是一个简洁、易于集成、方便扩展、期望舒服的编写 markdown 的编辑器，仅此而已... \n\n' +
   '**这是加粗的文字**\n\n' +
  '*这是倾斜的文字*`\n\n' +
  '***这是斜体加粗的文字***\n\n' +
  '~这是加删除线的文字~ \n\n'+
  '```console.log(111)``` \n\n'+
  '# p02:来个Hello World 初始Vue3.0\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n'+
  '***\n\n\n' +
  '# p03:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n'+
  '# p04:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n'+
  '#5 p05:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n'+
  '# p06:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n'+
  '# p07:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n'+
  '``` var a=11; ```'

const Post = () => {
  return (
    <div className="post">
      <Head>
        <title>yokowu | 文章</title>
      </Head>
      <Header />

      <div className="post-title">
        <Row justify="center">
          <h1>React 是什么?</h1>
        </Row>
      </div>

      <div>
        <Row justify="center">
          <Col xs={16} sm={16} md={16} lg={16} xl={16} className="post-content">
            <ReactMarkdown
              children={markdown}
            />
          </Col>
        </Row>
      </div>

      <Footer />
    </div>
  )
}

export default Post
