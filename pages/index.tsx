import Link from 'next/link'
import  styles  from "../styles/Home.module.css"
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Books | Home</title>
        <meta name="keywords" content="books" />
      </Head>
      <h1 className={styles.title}>Home Page</h1>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum nemo rerum, debitis error facere rem magni laudantium maiores ad esse modi iusto nesciunt perspiciatis eius quia repellendus numquam totam animi.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum nemo rerum, debitis error facere rem magni laudantium maiores ad esse modi iusto nesciunt perspiciatis eius quia repellendus numquam totam animi.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum nemo rerum, debitis error facere rem magni laudantium maiores ad esse modi iusto nesciunt perspiciatis eius quia repellendus numquam totam animi.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum nemo rerum, debitis error facere rem magni laudantium maiores ad esse modi iusto nesciunt perspiciatis eius quia repellendus numquam totam animi.
      </p>
      <Link href="/posts">
        <p className={styles.btn}>See Posts</p>
      </Link>
     

    </>
  )
}

