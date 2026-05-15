import { profile } from "@/lib/site-content"

export const metadata = {
  title: "Contact | rakshi",
  description: "Contact Rakshi",
}

export default function ContactPage() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-8 md:py-12">
      <div className="flex items-center gap-3">
        <span className="w-2 h-2 rounded-full bg-[#4A90A4]" />
        <p className="text-sm text-muted-foreground">Contact</p>
      </div>

      <h1 className="font-serif text-3xl md:text-4xl mt-4 leading-tight tracking-tight">
        Write to me.
      </h1>

      <div className="mt-10 space-y-5 text-[0.98rem] leading-relaxed text-muted-foreground">
        <p>
          For collaborations, notes, questions, or stray thoughts, you can reach me by email.
        </p>
        <a href={`mailto:${profile.email}`} className="inline-flex text-foreground hover:text-primary transition-colors">
          {profile.email}
        </a>
      </div>
    </main>
  )
}
