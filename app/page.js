// import Image from 'next/image'

import Home from "./pages/Home"
import About from "./pages/About"
import Header from "./pages/Header"

export default function Page() {
  return (
    <main className="">
      <Header/>
      <Home/>
      <About/>
    </main>
  )
}
