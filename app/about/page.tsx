import { profile } from "@/lib/site-content"

export const metadata = {
  title: "About Me | rakshi",
  description: "Hi there! I am Rakshita",
}

export default function AboutPage() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-8 md:py-12">
      <div className="flex items-center gap-3">
        <span className="w-2 h-2 rounded-full bg-primary" />
        <p className="text-sm text-muted-foreground">About Me</p>
      </div>

      <h1 className="font-serif text-3xl md:text-4xl mt-4 leading-tight tracking-tight">
        A small introduction.
      </h1>

      <div className="grid gap-8 sm:grid-cols-[0.85fr_1.15fr] mt-10 items-start">
        <img src={profile.portrait} alt="Portrait placeholder" className="w-full rounded-md border border-border/70 object-cover" />
        <div className="space-y-5 text-[0.98rem] leading-relaxed text-muted-foreground">
          <p>{profile.introduction}</p>
          <p>{profile.about}</p>
          <p>
            Replace this text in <code className="text-foreground">lib/site-content.ts</code>. Keep it slow, specific, and personal. The design is intentionally plain so the writing, images, and fragments carry the page.
          </p>
        </div>
      </div>
    </main>
  )
}
