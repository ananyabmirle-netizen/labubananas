import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  MessageSquare,
  Calendar,
  Vote,
  Shield,
  Bell,
  Bot,
  TrendingUp,
  UsersRound,
  Building2,
  Award,
} from "lucide-react"

export default function LandingPage() {
  const features = [
    {
      icon: MessageSquare,
      title: "Community Forum",
      description: "Connect with union members across North America in our Reddit-style forum",
    },
    {
      icon: Calendar,
      title: "Event Scheduling",
      description: "Stay updated on meetings, training sessions, and union events",
    },
    {
      icon: Vote,
      title: "Democratic Voting",
      description: "Participate in polls and make your voice heard on important decisions",
    },
    {
      icon: Shield,
      title: "Anonymous Feedback",
      description: "Share concerns and feedback safely with complete anonymity",
    },
    {
      icon: Bell,
      title: "Real-time Updates",
      description: "Get instant notifications about union news and announcements",
    },
    {
      icon: Bot,
      title: "Chatbot and Legal Advice",
      description: "Get instant answers to labor rights questions and union guidance",
    },
  ]

  const statistics = [
    {
      icon: UsersRound,
      value: "14.3M",
      label: "Union Members in North America",
      description: "Join the growing movement",
    },
    {
      icon: TrendingUp,
      value: "18%",
      label: "Higher Average Wages",
      description: "Union vs. non-union workers",
    },
    {
      icon: Building2,
      value: "10,000+",
      label: "Active Union Locals",
      description: "Across all industries",
    },
    {
      icon: Award,
      value: "85%",
      label: "Better Benefits Coverage",
      description: "Healthcare and retirement",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link
            href="/"
            className="flex items-center gap-2 font-bold text-xl text-foreground hover:opacity-80 transition-opacity"
          >
            <span className="text-2xl">🍌</span>
            <span>BunchUp</span>
          </Link>
          <div className="flex items-center gap-3">
            <Link href="/forum">
              <Button variant="ghost" className="text-foreground hover:text-primary">
                Sign In
              </Button>
            </Link>
            <Link href="/forum">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Sign Up</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="mx-auto max-w-3xl space-y-8">
          <div className="banana-bounce inline-block">
            <span className="text-9xl">🍌</span>
          </div>

          <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-6xl md:text-7xl text-balance">
            Join the Bunch!
          </h1>

          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto text-pretty">
            The modern platform connecting unions and their members across North America. Communicate, vote, schedule,
            and grow together.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link href="/forum">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/80 hover:scale-[1.02] transition-all text-lg px-8 py-6"
              >
                Enter the Forum
              </Button>
            </Link>
            <Link href="/calendar">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto text-lg px-8 py-6 text-foreground hover:bg-accent hover:scale-[1.02] transition-all bg-transparent"
              >
                View Events
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Everything Your Union Needs</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Built for union members, by people who care about worker empowerment
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index} className="border-border hover:border-primary transition-colors">
              <CardContent className="pt-6">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-card-foreground">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 py-20 bg-muted/30">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">The Power of Unions</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real data showing why union membership matters
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {statistics.map((stat, index) => (
            <Card key={index} className="border-border text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-8 pb-6">
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <stat.icon className="h-7 w-7 text-primary" />
                </div>
                <div className="text-4xl font-bold text-foreground mb-2">{stat.value}</div>
                <div className="text-lg font-semibold text-card-foreground mb-1">{stat.label}</div>
                <p className="text-sm text-muted-foreground">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <Card className="bg-primary text-primary-foreground border-primary">
          <CardContent className="py-16 text-center">
            <h2 className="text-4xl font-bold mb-4 text-balance">Ready to strengthen your union?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90 text-pretty">
              Join thousands of union members already using BunchUp to organize, communicate, and make their voices
              heard.
            </p>
            <Link href="/forum">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6 hover:scale-[1.02] transition-all">
                Get Started Now
              </Button>
            </Link>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card">
        <div className="container mx-auto px-4 py-8 text-center text-muted-foreground">
          <p>© 2025 BunchUp. Empowering unions across North America.</p>
        </div>
      </footer>

      <LandingChatbot />
    </div>
  )
}

function LandingChatbot() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        size="lg"
        className="h-14 w-14 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-110 transition-all shadow-lg"
        aria-label="Open AI Assistant"
      >
        <Bot className="h-6 w-6" />
      </Button>
    </div>
  )
}
