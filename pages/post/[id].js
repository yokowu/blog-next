import Head from 'next/head'
import { useRouter } from 'next/router'
import { Col, Row } from 'antd'
import React, { useEffect, useState } from 'react'
import Footer from '../../components/footer'
import Header from '../../components/header'
import marked from 'marked'
import hljs from "highlight.js"
import 'highlight.js/styles/nord.css'

 const renderer = new marked.Renderer()
 marked.setOptions({
  renderer: renderer, 
  gfm: true,
  pedantic: false,
  sanitize: false,
  tables: true,
  breaks: false,
  smartLists: true,
  smartypants: false,
  highlight: function (code) {
    return hljs.highlightAuto(code).value;
  }
 })

const Post = () => {
  const router = useRouter()
  const [html, setHtml] = useState('')
  const { id, page, index } = router.query

  useEffect(_ => {
    if (Object.keys(router.query).length > 0) {
      let h = marked(`id: ${id} page: ${page} index; ${index}`)
      setHtml(h)
    }
  }, [router.query])

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
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </Col>
        </Row>
      </div>

      <Footer />
    </div>
  )
}

export default Post
