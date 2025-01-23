import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import dynamic from "next/dynamic"
import type { Metadata } from "next"

const Map = dynamic(() => import("@/components/map"), { ssr: false })

export const metadata: Metadata = {
  title: "Obas Car Corner",
  description: "Qualität muss nicht teuer sein!",
}
export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-white">
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
              <Button asChild>
                <Link href="/fahrzeuge">Fahrzeuge ansehen</Link>
              </Button>
              <Button variant="secondary" asChild>
                <Link href="/kontakt">Probefahrt vereinbaren</Link>
              </Button>
            </div>
          </div>
          <div className="relative ">
            <Image
              src="/obas-car-corner.webp"
              alt="Gebrauchtwagen"
              width={800}
              height={800}
              className="object-cover rounded-lg"
              priority
            />
          </div>
        </div>
      </section>

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

      <section className="container mx-auto px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">Unser Standort</h2>
        <Map />
      </section>

      <section className="bg-zinc-900 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Warum Obas Car Corner?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Erfahrung und Expertise</h3>
              <p className="text-gray-400">
                Mit jahrelanger Erfahrung im Autohandel bieten wir Ihnen fundierte Beratung und erstklassigen Service.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Qualitätsgarantie</h3>
              <p className="text-gray-400">
                Jedes Fahrzeug wird gründlich geprüft und aufbereitet, bevor es in unseren Bestand aufgenommen wird.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Faire Preise</h3>
              <p className="text-gray-400">
                Wir bieten Ihnen hochwertige Gebrauchtwagen zu wettbewerbsfähigen Preisen ohne versteckte Kosten.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Kundenorientierter Service</h3>
              <p className="text-gray-400">
                Unser freundliches Team steht Ihnen bei jedem Schritt zur Seite, von der Auswahl bis zur Nachbetreuung.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Bereit für Ihr neues Auto?</h2>
          <p className="text-xl text-gray-400 mb-8">
            Entdecken Sie noch heute unser vielfältiges Angebot an Qualitätsfahrzeugen.
          </p>
          <Button size="lg" asChild>
            <Link href="/fahrzeuge">Jetzt Fahrzeuge entdecken</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

