"use client"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"

export default function ContactPage() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="container mx-auto px-4 py-6">
        <h1 className="text-3xl font-bold">Kontakt</h1>
      </header>
      <main className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-zinc-900 text-white">
            <CardHeader>
              <CardTitle>Kontaktformular</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Ihr Name" />
                </div>
                <div>
                  <Label htmlFor="email">E-Mail</Label>
                  <Input id="email" type="email" placeholder="ihre@email.de" />
                </div>
                <div>
                  <Label htmlFor="message">Nachricht</Label>
                  <Textarea id="message" placeholder="Ihre Nachricht" />
                </div>
                <Button type="submit">Absenden</Button>
              </form>
            </CardContent>
          </Card>
          <Card className="bg-zinc-900 text-white">
            <CardHeader>
              <CardTitle>Probefahrt vereinbaren</CardTitle>
            </CardHeader>
            <CardContent>
              <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md border text-white" />
              <p className="mt-4">Gewähltes Datum: {date?.toLocaleDateString()}</p>
              <Button className="mt-4">Termin bestätigen</Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}

