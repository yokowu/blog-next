import Head from 'next/head'
import Footer from '../components/footer'
import Header from '../components/header'
import PostList from '../components/postList'

export default function Home() {
  return (
    <div>
      <Head>
        <title>yokowu</title>
      </Head>
      <Header />
      <PostList />
      <Footer />
    </div>
  )
}
