import { Link } from 'react-router-dom'

interface BlogPost {
    id: string
    slug: string
    title: string
    excerpt: string
    author: string
    date: string
    category: string
}

const Blog = () => {
    const blogPosts: BlogPost[] = [
        {
            id: '1',
            slug: 'getting-started-with-app-promotion',
            title: 'Getting Started with App Promotion',
            excerpt: 'Learn the basics of promoting your app effectively to reach a wider audience.',
            author: 'John Doe',
            date: '2024-12-01',
            category: 'Guide'
        },
        {
            id: '2',
            slug: 'top-10-tips-for-app-marketing',
            title: 'Top 10 Tips for App Marketing',
            excerpt: 'Discover the most effective strategies to market your mobile application.',
            author: 'Jane Smith',
            date: '2024-11-28',
            category: 'Marketing'
        },
        {
            id: '3',
            slug: 'understanding-user-engagement',
            title: 'Understanding User Engagement',
            excerpt: 'Explore how to increase user engagement and retention in your app.',
            author: 'Mike Johnson',
            date: '2024-11-20',
            category: 'Analytics'
        }
    ]

    return (
        <div className="container mx-auto px-4 py-16">
            <h1 className="text-4xl font-bold mb-4">Blog</h1>
            <p className="text-gray-600 mb-12">Insights and tips for app promotion and marketing</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map((post) => (
                    <div key={post.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                        <div className="p-6">
                            <div className="flex items-center justify-between mb-3">
                                <span className="text-sm text-green-600 font-semibold">{post.category}</span>
                                <span className="text-sm text-gray-500">{new Date(post.date).toLocaleDateString()}</span>
                            </div>
                            <h2 className="text-xl font-bold mb-3">{post.title}</h2>
                            <p className="text-gray-600 mb-4">{post.excerpt}</p>
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-gray-500">By {post.author}</span>
                                <Link
                                    to={`/blog/${post.slug}`}
                                    className="text-green-600 hover:text-green-700 font-semibold transition-colors"
                                >
                                    Read More →
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Blog
