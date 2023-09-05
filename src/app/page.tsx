'use client'


import { useRouter } from 'next/navigation'

const Home = () => {
  const router = useRouter()
  return (
    <main className='main'>
      <h1>Welcome to Next.js!</h1>
      <button onClick={() => router.push('./eg')} id='route'>click!!!</button><br/>
      <button onClick={() => router.push('./fun')} id='fun'>fun!!!</button><br/>
    </main>
  )
}

export default Home;
