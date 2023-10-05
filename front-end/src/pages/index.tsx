import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Head>
        <title>Std-Skills</title>
        <meta name="description" content="A website for students to learn skills" />
        <meta name="author" content="Franck Djoutsop" />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
    </Head>
  )
}
