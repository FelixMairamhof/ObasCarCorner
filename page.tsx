import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="container mx-auto px-4 py-6 flex items-center justify-between">
        <div className="w-32">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-V71kuFPzXT1t898w88couyJ4l8EnX3.png"
            alt="Obas Car Corner Logo"
            width={120}
            height={60}
            className="w-full"
          />
        </div>
        <nav className="hidden md:flex gap-8">
          <Link href="#" className="hover:text-gray-300 transition-colors">
            Fahrzeuge
          </Link>
          <Link href="#" className="hover:text-gray-300 transition-colors">
            Service
          </Link>
          <Link href="#" className="hover:text-gray-300 transition-colors">
            Über uns
          </Link>
          <Link href="#" className="hover:text-gray-300 transition-colors">
            Kontakt
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 md:py-24">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Qualität muss nicht
              <br />
              <span className="text-gray-400">teuer sein!</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-lg">
              Bei Obas Car Corner finden Sie geprüfte Gebrauchtwagen zu fairen Preisen. Jedes Fahrzeug wird von unseren
              Experten gründlich überprüft und instandgesetzt.
            </p>
            <div className="flex gap-4">
              <Button className="bg-white text-black hover:bg-gray-200">Fahrzeuge ansehen</Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                Probefahrt vereinbaren
              </Button>
            </div>
          </div>
          <div className="relative h-[500px] md:h-[600px]">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/obas-car-corner-GPxqMcIDVHLbnIy16rAUru50MkSdNU.webp"
              alt="Gebrauchtwagen"
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-zinc-900 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Geprüfte Qualität</h3>
              <p className="text-gray-400">Alle Fahrzeuge werden vor dem Verkauf gründlich überprüft und repariert</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Faire Preise</h3>
              <p className="text-gray-400">Transparente Preisgestaltung ohne versteckte Kosten</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Finanzierung</h3>
              <p className="text-gray-400">Flexible Finanzierungsmöglichkeiten für jeden Bedarf</p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-zinc-900 p-8 rounded-lg">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Warum Obas Car Corner?</h2>
          <ul className="space-y-4 text-gray-400">
            <li className="flex items-start gap-2">• Spezialisiert auf erschwingliche Gebrauchtwagen</li>
            <li className="flex items-start gap-2">• Eigene Werkstatt für Reparatur und Wartung</li>
            <li className="flex items-start gap-2">• 1 Jahr Gebrauchtwagengarantie</li>
            <li className="flex items-start gap-2">• Kostenlose Fahrzeugbewertung</li>
          </ul>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-950 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-400">© 2024 Obas Car Corner. Alle Rechte vorbehalten.</div>
            <div className="flex gap-6">
              <Link href="#" className="text-sm text-gray-400 hover:text-white">
                Datenschutz
              </Link>
              <Link href="#" className="text-sm text-gray-400 hover:text-white">
                Impressum
              </Link>
              <Link href="#" className="text-sm text-gray-400 hover:text-white">
                AGB
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

