import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

const vehicles = [
  { id: 1, name: "VW Golf", year: 2018, price: 15900, image: "/placeholder.svg" },
  { id: 2, name: "Ford Focus", year: 2019, price: 16500, image: "/placeholder.svg" },
  { id: 3, name: "Opel Astra", year: 2017, price: 14200, image: "/placeholder.svg" },
  { id: 4, name: "BMW 3er", year: 2016, price: 18900, image: "/placeholder.svg" },
  { id: 5, name: "Mercedes A-Klasse", year: 2018, price: 20500, image: "/placeholder.svg" },
  { id: 6, name: "Audi A4", year: 2017, price: 19800, image: "/placeholder.svg" },
]

export default function VehiclesPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="container mx-auto px-4 py-6">
        <h1 className="text-3xl font-bold">Unsere Fahrzeuge</h1>
      </header>
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {vehicles.map((vehicle) => (
            <Card key={vehicle.id} className="bg-zinc-900 text-white">
              <CardHeader>
                <CardTitle>{vehicle.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <Image
                  src={vehicle.image || "/placeholder.svg"}
                  alt={vehicle.name}
                  width={300}
                  height={200}
                  className="w-full object-cover rounded-md"
                />
                <p className="mt-2">Baujahr: {vehicle.year}</p>
                <p className="font-bold">Preis: €{vehicle.price}</p>
              </CardContent>
              <CardFooter>
                <Button asChild>
                  <Link href={`/fahrzeuge/${vehicle.id}`}>Details</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
    </div>
  )
}

