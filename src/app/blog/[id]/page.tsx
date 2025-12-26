import { blogPosts } from '@/lib/blog-data'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ChevronLeft, Calendar, Clock, Tag } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

export function generateStaticParams() {
    return blogPosts.map((post) => ({
        id: post.id,
    }))
}

export default async function BlogPostPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    const post = blogPosts.find((p) => p.id === id)

    if (!post) {
        notFound()
    }

    return (
        <div className="min-h-screen bg-background pt-24 pb-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
                <div className="mb-8">
                    <Link href="/#blog">
                        <Button variant="ghost" className="pl-0 hover:pl-2 transition-all">
                            <ChevronLeft className="mr-2 h-4 w-4" />
                            Back to Blog
                        </Button>
                    </Link>
                </div>

                <Badge className="mb-4">{post.category}</Badge>

                <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-6">
                    {post.title}
                </h1>

                <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-8">
                    <div className="flex items-center gap-2">
                        <Calendar className="h-5 w-5 text-primary" />
                        <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Clock className="h-5 w-5 text-primary" />
                        <span>{post.readTime}</span>
                    </div>
                </div>
            </div>

            {/* Full Width Image Section */}
            <div className="w-full h-[60vh] relative mb-12 overflow-hidden bg-muted">
                <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-[1.5s]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
                <article className="prose prose-lg dark:prose-invert max-w-none">
                    <div
                        className="text-foreground leading-relaxed space-y-4"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />
                </article>
            </div>
        </div>
    )
}
