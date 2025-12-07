import { useState } from 'react'
import Heading from '../component/Common/Heading'

const ContactUs = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
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
        setFormData({ firstName: '', lastName: '', phone: '', email: '', message: '' })
        setTimeout(() => setSubmitted(false), 5000)
    }

    return (
        <div className="container mx-auto px-4 py-16">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-8">
                    <Heading text="Contact" heighlight="Us" />
                    <p className="text-gray-600 max-w-2xl mx-auto mt-4">We'd love to hear from you! Whether you have questions, feedback, or need support, our team is here to assist you.</p>
                </div>

                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="lg:flex">
                        {/* Left: Form */}
                        <div className="w-full lg:w-7/12 p-8 md:p-12">
                            {submitted && (
                                <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
                                    Thank you for your message! We'll get back to you soon.
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                                        <input
                                            id="firstName"
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-green-600"
                                            placeholder="First Name"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                                        <input
                                            id="lastName"
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-green-600"
                                            placeholder="Last Name"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                                        <input
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-green-600"
                                            placeholder="Phone"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-green-600"
                                            placeholder="Email"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={6}
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-green-600 resize-none"
                                        placeholder="Your message"
                                    />
                                </div>

                                <div className="flex items-center gap-4">
                                    <label className="flex items-center gap-2 text-sm">
                                        <input type="checkbox" className="form-checkbox h-4 w-4 text-green-600" />
                                        <span className="text-gray-600">I'm not a robot (placeholder)</span>
                                    </label>
                                </div>

                                <div>
                                    <button type="submit" className="inline-flex items-center justify-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-md transition-colors">
                                        Send Message
                                    </button>
                                </div>
                            </form>
                        </div>

                        {/* Right: Illustration with SVG background */}
                        <div className="w-full lg:w-5/12 relative bg-transparent p-8 md:p-12 flex items-center justify-center">
                            <svg viewBox="0 0 900 400" preserveAspectRatio="none" className="absolute inset-0 w-full h-full" aria-hidden>
                                <path d="M0,80 Q150,0 300,40 T600,60 T840,40 Q900,60 900,120 L900,400 L0,400 Z" fill="#ecfdf5" />
                            </svg>

                            <div className="relative z-10 w-full max-w-md">
                                {/* external compact SVG asset (placed in public/assets) */}
                                <img src="/assets/contact-illustration.svg" alt="contact illustration" className="w-full h-auto rounded" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs
