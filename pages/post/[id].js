import Head from 'next/head'
import { useRouter } from 'next/router'
import { Col, Row } from 'antd'
import React, { useEffect, useState } from 'react'
import Footer from '../../components/footer'
import Header from '../../components/header'
import marked from 'marked'
import hljs from "highlight.js"
import 'highlight.js/styles/atelier-cave-dark.css'
import { getPostById } from '../../services/post'

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
  const [post, setPost] = useState({})
  const { id } = router.query

  useEffect(_ => {
    if (Object.keys(router.query).length > 0) {
      getPostById(id).then(rsp => {
        let h = marked(rsp.data.content)
        setHtml(h)
        setPost(rsp.data)
      })
    }
  }, [router.query])

  return (
    <div className="post">
      <Head>
        <title>yokowu { post.title ? " | " + post.title : "" }</title>
      </Head>
      <Header />

      <div className="post-title">
        <Row justify="center">
          <h1>{ post.title }</h1>
        </Row>
      </div>

      <div>
        <Row justify="center">
          <Col xs={23} sm={23} md={16} lg={16} xl={16} className="post-content">
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </Col>
        </Row>
      </div>

      <Footer />
    </div>
  )
}

export default Post
