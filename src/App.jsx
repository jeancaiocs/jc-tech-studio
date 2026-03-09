import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Problema from './components/Problema'
import Solucao from './components/Solucao'
import Servicos from './components/Servicos'
import Diferenciais from './components/Diferenciais'
import Depoimentos from './components/Depoimentos'
import CTA from './components/CTA'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Problema />
        <Solucao />
        <Servicos />
        <Diferenciais />
        <Depoimentos />
        <CTA />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
