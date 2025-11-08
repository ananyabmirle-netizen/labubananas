"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CalendarIcon, Plus, Clock, MapPin, Users } from "lucide-react"

type Event = {
  id: number
  title: string
  date: string
  time: string
  location: string
  category: string
  attendees: number
  canEdit: boolean
}

const events: Event[] = [
  {
    id: 1,
    title: "Monthly Union Meeting",
    date: "2025-01-15",
    time: "6:00 PM - 8:00 PM",
    location: "Union Hall, Main Street",
    category: "Meeting",
    attendees: 67,
    canEdit: true,
  },
  {
    id: 2,
    title: "Safety Training Workshop",
    date: "2025-01-18",
    time: "2:00 PM - 5:00 PM",
    location: "Training Center",
    category: "Training",
    attendees: 34,
    canEdit: true,
  },
  {
    id: 3,
    title: "Contract Voting Session",
    date: "2025-01-22",
    time: "10:00 AM - 4:00 PM",
    location: "Multiple Locations",
    category: "Voting",
    attendees: 156,
    canEdit: false,
  },
  {
    id: 4,
    title: "Healthcare Benefits Information",
    date: "2025-01-25",
    time: "7:00 PM - 8:30 PM",
    location: "Virtual (Zoom)",
    category: "Information",
    attendees: 89,
    canEdit: true,
  },
]

export default function CalendarPage() {
  const [rsvpStatus, setRsvpStatus] = useState<Record<number, boolean>>({})

  const toggleRSVP = (eventId: number) => {
    setRsvpStatus((prev) => ({
      ...prev,
      [eventId]: !prev[eventId],
    }))
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Union Calendar</h1>
            <p className="text-muted-foreground">Stay updated on meetings, events, and training sessions</p>
          </div>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Plus className="mr-2 h-4 w-4" />
            Create Event
          </Button>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {events.map((event) => (
            <Card key={event.id} className="hover:border-primary transition-colors">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="mb-2">
                      <Badge variant="secondary">{event.category}</Badge>
                    </div>
                    <CardTitle className="text-xl text-balance">{event.title}</CardTitle>
                  </div>
                  <CalendarIcon className="h-5 w-5 text-muted-foreground" />
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2 text-sm">
                  <div className="flex items-center text-muted-foreground">
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {new Date(event.date).toLocaleDateString("en-US", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Clock className="mr-2 h-4 w-4" />
                    {event.time}
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="mr-2 h-4 w-4" />
                    {event.location}
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Users className="mr-2 h-4 w-4" />
                    {event.attendees} attending
                  </div>
                </div>

                <div className="flex gap-2 pt-2">
                  <Button
                    variant={rsvpStatus[event.id] ? "default" : "outline"}
                    className={rsvpStatus[event.id] ? "bg-primary text-primary-foreground" : ""}
                    onClick={() => toggleRSVP(event.id)}
                  >
                    {rsvpStatus[event.id] ? "RSVP'd ✓" : "RSVP"}
                  </Button>
                  {event.canEdit && <Button variant="ghost">Edit</Button>}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-8 bg-accent">
          <CardContent className="py-8 text-center">
            <CalendarIcon className="mx-auto h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-foreground">No more events this month</h3>
            <p className="text-muted-foreground mb-4">Check back soon for upcoming events and meetings</p>
            <Button variant="outline">View Full Calendar</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
