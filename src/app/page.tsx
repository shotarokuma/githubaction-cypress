'use client'


import { useRouter } from 'next/navigation'

const Home = () => {
  const router = useRouter()
  return (
    <main>
      <button onClick={() => router.push('./eg')}>click!!!</button><br/>
      <button onClick={() => router.push('./fun')}>fun!!!</button><br/>
    </main>
  )
}

export default Home;
