import { useParams, useNavigate } from 'react-router-dom'

interface BlogPostContent {
    slug: string
    title: string
    author: string
    date: string
    category: string
    content: string
    relatedPosts: string[]
}

const BlogDetail = () => {
    const { slug } = useParams<{ slug: string }>()
    const navigate = useNavigate()

    // Sample blog posts data - in a real app, you'd fetch this from an API
    const blogPosts: { [key: string]: BlogPostContent } = {
        'getting-started-with-app-promotion': {
            slug: 'getting-started-with-app-promotion',
            title: 'Getting Started with App Promotion',
            author: 'John Doe',
            date: '2024-12-01',
            category: 'Guide',
            content: `
        <h3>Introduction</h3>
        <p>App promotion is a crucial aspect of launching a successful mobile application. In this comprehensive guide, we'll walk you through the essential steps to get your app noticed.</p>
        
        <h3>Step 1: Define Your Target Audience</h3>
        <p>Before you start promoting your app, it's important to understand who your target audience is. Consider demographics, interests, and pain points.</p>
        
        <h3>Step 2: Choose the Right Channels</h3>
        <p>Different channels work for different apps. Consider app stores, social media, influencers, and paid advertising.</p>
        
        <h3>Step 3: Create Engaging Content</h3>
        <p>Your promotional content should be engaging, clear, and focused on the value your app provides.</p>
        
        <h3>Conclusion</h3>
        <p>App promotion requires a strategic approach and consistent effort. Follow these steps and monitor your results to optimize your strategy.</p>
      `,
            relatedPosts: ['top-10-tips-for-app-marketing', 'understanding-user-engagement']
        },
        'top-10-tips-for-app-marketing': {
            slug: 'top-10-tips-for-app-marketing',
            title: 'Top 10 Tips for App Marketing',
            author: 'Jane Smith',
            date: '2024-11-28',
            category: 'Marketing',
            content: `
        <p>Marketing a mobile app in today's competitive landscape requires a strategic approach. Here are 10 proven tips to boost your app's visibility and downloads:</p>
        
        <ol>
          <li>Optimize your app store listing with relevant keywords</li>
          <li>Use high-quality screenshots and videos</li>
          <li>Leverage social media marketing</li>
          <li>Engage with app review sites</li>
          <li>Implement referral programs</li>
          <li>Use paid advertising strategically</li>
          <li>Build partnerships with influencers</li>
          <li>Track and analyze your metrics</li>
          <li>Improve user retention strategies</li>
          <li>Maintain regular updates and improvements</li>
        </ol>
      `,
            relatedPosts: ['getting-started-with-app-promotion', 'understanding-user-engagement']
        },
        'understanding-user-engagement': {
            slug: 'understanding-user-engagement',
            title: 'Understanding User Engagement',
            author: 'Mike Johnson',
            date: '2024-11-20',
            category: 'Analytics',
            content: `
        <p>User engagement is a key metric for app success. It measures how actively users interact with your app.</p>
        
        <h3>Key Engagement Metrics</h3>
        <ul>
          <li>Daily Active Users (DAU)</li>
          <li>Monthly Active Users (MAU)</li>
          <li>Session Length</li>
          <li>Retention Rate</li>
          <li>Churn Rate</li>
        </ul>
        
        <h3>Strategies to Improve Engagement</h3>
        <p>Push notifications, personalization, gamification, and regular content updates are proven ways to keep users engaged.</p>
      `,
            relatedPosts: ['getting-started-with-app-promotion', 'top-10-tips-for-app-marketing']
        }
    }

    const post = slug ? blogPosts[slug] : null

    if (!post) {
        return (
            <div className="container mx-auto px-4 py-16">
                <h1 className="text-4xl font-bold mb-4">Blog Post Not Found</h1>
                <button
                    onClick={() => navigate('/blog')}
                    className="text-green-600 hover:text-green-700 font-semibold"
                >
                    ← Back to Blog
                </button>
            </div>
        )
    }

    return (
        <div className="container mx-auto px-4 py-16">
            <button
                onClick={() => navigate('/blog')}
                className="text-green-600 hover:text-green-700 font-semibold mb-6"
            >
                ← Back to Blog
            </button>

            <article className="max-w-4xl">
                <header className="mb-8">
                    <span className="text-green-600 font-semibold">{post.category}</span>
                    <h1 className="text-5xl font-bold my-4">{post.title}</h1>
                    <div className="flex items-center gap-6 text-gray-600">
                        <span>By {post.author}</span>
                        <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                    </div>
                </header>

                <div className="prose prose-lg max-w-none mb-12">
                    <div dangerouslySetInnerHTML={{ __html: post.content }} />
                </div>

                {post.relatedPosts.length > 0 && (
                    <section className="mt-16 pt-8 border-t">
                        <h3 className="text-2xl font-bold mb-6">Related Posts</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {post.relatedPosts.map((relatedSlug) => (
                                <div key={relatedSlug} className="p-4 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                                    <a href={`/blog/${relatedSlug}`} className="text-green-600 hover:text-green-700 font-semibold">
                                        {relatedSlug.replace(/-/g, ' ').toUpperCase()}
                                    </a>
                                </div>
                            ))}
                        </div>
                    </section>
                )}
            </article>
        </div>
    )
}

export default BlogDetail
