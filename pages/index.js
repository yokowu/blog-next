import Head from 'next/head'
import { useState } from 'react'
import Footer from '../components/footer'
import Header from '../components/header'
import PostList from '../components/postList'

const Home = () => {
  const [data, setData] = useState([])

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