import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { Input } from '@/components/Input'
import { Task } from '@/components/Task'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-gradient-to-br from-primary to-secondary h-screen flex justify-center items-center">
        <div className="h-3/4 w-2/5 bg-tertiary rounded-2xl shadow-xl p-7 flex flex-col">
          <Input  />
     
          <ul>
            <Task />
     
          </ul>
        </div>
        
      </main>
    </>
  )
}
