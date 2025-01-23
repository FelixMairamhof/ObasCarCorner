import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import dynamic from "next/dynamic"

const Map = dynamic(() => import("@/components/map"), { ssr: false })

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="container mx-auto px-4 py-6">
        <h1 className="text-3xl font-bold">Über uns</h1>
      </header>
      <main className="container mx-auto px-4 py-8">
        <Card className="bg-zinc-900 text-white mb-8">
          <CardHeader>
            <CardTitle>Obas Car Corner</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Obas Car Corner ist Ihr vertrauenswürdiger Partner für hochwertige Gebrauchtwagen zu fairen Preisen. Unser
              erfahrenes Team setzt sich dafür ein, Ihnen das beste Fahrerlebnis zu ermöglichen.
            </p>
            <p className="mt-4">
              Wir sind spezialisiert auf die Reparatur und den Verkauf von erschwinglichen Gebrauchtwagen. Jedes
              Fahrzeug wird vor dem Verkauf gründlich geprüft und instandgesetzt, um Ihnen Sicherheit und
              Zuverlässigkeit zu garantieren.
            </p>
          </CardContent>
        </Card>
        <Card className="bg-zinc-900 text-white">
          <CardHeader>
            <CardTitle>Unser Standort</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Besuchen Sie uns in unserem Showroom:</p>
            <p>Musterstraße 123</p>
            <p>12345 Musterstadt</p>
            <p>Tel: 0123 456789</p>
            <div className="mt-6 h-[400px]">
              <Map />
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}

