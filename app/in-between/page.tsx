import { createClient } from "@/lib/supabase/server"
import { PostList } from "@/components/post-list"
import type { Post } from "@/lib/types"

export const revalidate = 60

export const metadata = {
  title: "In Between | rakshi",
  description: "Notes, posts, fragments, images, and small essays",
}

export default async function InBetweenPage() {
  const supabase = await createClient()

  const { data: posts } = await supabase
    .from("posts")
    .select("*")
    .eq("status", "published")
    .order("published_at", { ascending: false })

  return (
    <main className="relative min-h-screen">
      <div className="relative z-10 max-w-2xl mx-auto px-6 py-8 md:py-12">
        <div className="mb-12">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#9B8AA6]" />
            <p className="text-sm text-muted-foreground">In Between</p>
          </div>
          <h1 className="font-serif text-3xl md:text-4xl mt-4 leading-tight tracking-tight">
            Notes, fragments, studies, and almost-posts.
          </h1>
          <p className="mt-4 text-[0.95rem] leading-relaxed text-muted-foreground max-w-xl">
            This section keeps the original poetry-site post system: tags, accent dots, dates, poetry mode, light and dark theme, and the admin editor. It now also supports cover images and videos.
          </p>
        </div>
        <PostList posts={(posts as Post[]) || []} />
      </div>
    </main>
  )
}
