import { workItems } from "@/lib/site-content"

export const metadata = {
  title: "Work | rakshi",
  description: "Selected work and projects",
}

export default function WorkPage() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-8 md:py-12">
      <div className="flex items-center gap-3">
        <span className="w-2 h-2 rounded-full bg-[#D4A853]" />
        <p className="text-sm text-muted-foreground">Work</p>
      </div>

      <h1 className="font-serif text-3xl md:text-4xl mt-4 leading-tight tracking-tight">
        Selected work.
      </h1>

      <div className="mt-12 space-y-10">
        {workItems.map((item) => (
          <article key={item.title} className="group">
            <p className="text-sm text-muted-foreground">{item.period}</p>
            <h2 className="font-serif text-2xl mt-2 group-hover:text-primary transition-colors">
              {item.href ? <a href={item.href}>{item.title}</a> : item.title}
            </h2>
            <p className="text-sm text-muted-foreground mt-1">{item.role}</p>
            <p className="mt-3 text-[0.95rem] leading-relaxed text-muted-foreground">
              {item.description}
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {item.tags.map((tag) => (
                <span key={tag} className="text-xs text-muted-foreground border border-border px-2 py-1 rounded">
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </main>
  )
}
