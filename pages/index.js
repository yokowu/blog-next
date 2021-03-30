import Head from 'next/head'
import { useEffect, useState } from 'react'
import Footer from '../components/footer'
import Header from '../components/header'
import PostList from '../components/postList'
import { listPosts } from '../services/post'

const Home = () => {
  const [err, setErr] = useState()
  const [data, setData] = useState([])

  useEffect(_ => {
    listPosts(1, 5).then(rsp => {
      setData(rsp.data)
    }).catch(err => {
      setErr(err)
    })
  }, [])

  return (
    <div>
      <Head>
        <title>yokowu</title>
      </Head>
      <Header />
      <PostList data={data} />
      <Footer />
    </div>
  )
}

export default Home