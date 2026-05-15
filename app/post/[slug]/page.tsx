import { redirect } from "next/navigation"

type Props = {
  params: Promise<{ slug: string }>
}

export default async function OldPostRoute({ params }: Props) {
  const { slug } = await params
  redirect(`/in-between/${slug}`)
}
