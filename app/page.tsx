import Link from "next/link"
import { createClient } from "@/lib/supabase/server"
import { PostList } from "@/components/post-list"
import { artItems, profile, workItems } from "@/lib/site-content"
import type { Post } from "@/lib/types"

export const revalidate = 60

export default async function HomePage() {
  const supabase = await createClient()
  const { data: posts } = await supabase
    .from("posts")
    .select("*")
    .eq("status", "published")
    .order("published_at", { ascending: false })
    .limit(3)

  return (
    <main className="relative min-h-screen">
      <div className="relative z-10 max-w-2xl mx-auto px-6 py-8 md:py-12 space-y-20">
        <section className="space-y-6">
          <p className="text-sm text-muted-foreground">personal website</p>
          <h1 className="font-serif text-3xl md:text-4xl leading-tight tracking-tight text-balance">
            A quiet archive for work, writing, art, and the things that live in between.
          </h1>
          <p className="text-[0.98rem] leading-relaxed text-muted-foreground max-w-xl">
            {profile.introduction}
          </p>
        </section>

        <section id="about" className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-primary" />
            <h2 className="font-serif text-2xl">About Me</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-[0.85fr_1.15fr] items-start">
            <img src={profile.portrait} alt="Portrait placeholder" className="w-full rounded-md border border-border/70 object-cover" />
            <div className="space-y-4 text-[0.95rem] leading-relaxed text-muted-foreground">
              <p>{profile.about}</p>
              <Link href="/about" className="inline-flex text-foreground hover:text-primary transition-colors">
                Read more
              </Link>
            </div>
          </div>
        </section>

        <section id="work" className="space-y-5">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#D4A853]" />
            <h2 className="font-serif text-2xl">Work</h2>
          </div>
          <div className="space-y-7">
            {workItems.slice(0, 2).map((item) => (
              <article key={item.title}>
                <p className="text-sm text-muted-foreground">{item.period}</p>
                <h3 className="font-serif text-xl mt-1">{item.title}</h3>
                <p className="mt-2 text-[0.92rem] leading-relaxed text-muted-foreground">{item.description}</p>
              </article>
            ))}
          </div>
          <Link href="/work" className="inline-flex text-sm hover:text-primary transition-colors">
            See selected work
          </Link>
        </section>

        <section id="in-between" className="space-y-5">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#9B8AA6]" />
            <h2 className="font-serif text-2xl">In Between</h2>
          </div>
          <PostList posts={(posts as Post[]) || []} />
          <Link href="/in-between" className="inline-flex text-sm hover:text-primary transition-colors">
            Visit the archive
          </Link>
        </section>

        <section id="art" className="space-y-5">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#6B8E6B]" />
            <h2 className="font-serif text-2xl">Art</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {artItems.map((item) => (
              <figure key={item.title} className="group">
                <img src={item.image} alt={item.title} className="aspect-[4/5] w-full rounded-md border border-border/70 object-cover opacity-90 group-hover:opacity-100 transition-opacity" />
                <figcaption className="mt-2 text-xs text-muted-foreground">{item.title}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section id="contact" className="space-y-4 pb-10">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#4A90A4]" />
            <h2 className="font-serif text-2xl">Contact</h2>
          </div>
          <p className="text-[0.95rem] leading-relaxed text-muted-foreground">
            For notes, collaborations, and stray thoughts, write to me here.
          </p>
          <Link href="/contact" className="inline-flex text-sm hover:text-primary transition-colors">
            Contact page
          </Link>
        </section>
      </div>
    </main>
  )
}
