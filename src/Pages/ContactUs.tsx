import { useState } from 'react'

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })

    const [submitted, setSubmitted] = useState(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        // Here you would typically send the form data to a backend API
        console.log('Form submitted:', formData)
        setSubmitted(true)
        setFormData({ name: '', email: '', subject: '', message: '' })
        setTimeout(() => setSubmitted(false), 5000)
    }

    return (
        <div className="container mx-auto px-4 py-16">
            <div className="max-w-2xl mx-auto">
                <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
                <p className="text-lg text-gray-700 mb-12">
                    Have questions or feedback? We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.
                </p>

                {submitted && (
                    <div className="mb-8 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                        Thank you for your message! We'll get back to you soon.
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-lg font-semibold mb-2">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-600"
                            placeholder="Your name"
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-lg font-semibold mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-600"
                            placeholder="Your email"
                        />
                    </div>

                    <div>
                        <label htmlFor="subject" className="block text-lg font-semibold mb-2">
                            Subject
                        </label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-600"
                            placeholder="Subject of your message"
                        />
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-lg font-semibold mb-2">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows={6}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-600 resize-none"
                            placeholder="Your message"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-300"
                    >
                        Send Message
                    </button>
                </form>

                <div className="mt-12 space-y-6">
                    <h2 className="text-2xl font-bold">Other Ways to Reach Us</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <h3 className="font-semibold mb-2">Email</h3>
                            <p className="text-gray-700">support@apppromotion.com</p>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-2">Phone</h3>
                            <p className="text-gray-700">+1 (555) 123-4567</p>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-2">Address</h3>
                            <p className="text-gray-700">123 Tech Street, San Francisco, CA 94105</p>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-2">Hours</h3>
                            <p className="text-gray-700">Mon - Fri: 9:00 AM - 6:00 PM EST</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs
