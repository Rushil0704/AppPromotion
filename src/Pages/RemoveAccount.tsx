import { useState } from 'react'

const RemoveAccount = () => {
    const [confirmDelete, setConfirmDelete] = useState(false)
    const [password, setPassword] = useState('')
    const [deleted, setDeleted] = useState(false)

    const handleDelete = () => {
        if (password && confirmDelete) {
            // Here you would typically call a backend API to delete the account
            console.log('Account deletion request with password')
            setDeleted(true)
        }
    }

    if (deleted) {
        return (
            <div className="container mx-auto px-4 py-16">
                <div className="max-w-2xl mx-auto">
                    <div className="p-8 bg-red-100 border border-red-400 rounded-lg text-center">
                        <h2 className="text-2xl font-bold text-red-700 mb-4">Account Deleted</h2>
                        <p className="text-red-700 mb-6">
                            Your account and all associated data have been permanently deleted.
                        </p>
                        <a
                            href="/"
                            className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-lg transition-colors"
                        >
                            Return to Home
                        </a>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="container mx-auto px-4 py-16">
            <div className="max-w-2xl mx-auto">
                <h1 className="text-5xl font-bold mb-4">Remove Account</h1>

                <div className="bg-yellow-50 border border-yellow-400 p-6 rounded-lg mb-8">
                    <h2 className="text-lg font-semibold text-yellow-800 mb-3">⚠️ Warning</h2>
                    <p className="text-yellow-800 mb-3">
                        This action is <strong>permanent and irreversible</strong>. Deleting your account will:
                    </p>
                    <ul className="text-yellow-800 space-y-2 ml-4">
                        <li>• Permanently delete your account and all data</li>
                        <li>• Remove all your projects and applications</li>
                        <li>• Cancel any active subscriptions</li>
                        <li>• Remove access to all services</li>
                        <li>• Cannot be undone</li>
                    </ul>
                </div>

                <div className="space-y-6">
                    <p className="text-lg text-gray-700">
                        If you're sure you want to proceed with deleting your account, please fill out the form below.
                    </p>

                    <div className="space-y-4">
                        <div>
                            <label htmlFor="password" className="block text-lg font-semibold mb-2">
                                Confirm Your Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-red-600"
                                placeholder="Enter your password"
                            />
                        </div>

                        <div className="flex items-center space-x-3">
                            <input
                                type="checkbox"
                                id="confirm"
                                checked={confirmDelete}
                                onChange={(e) => setConfirmDelete(e.target.checked)}
                                className="w-5 h-5 text-red-600 focus:outline-none"
                            />
                            <label htmlFor="confirm" className="text-gray-700">
                                I understand that this action cannot be undone. I want to permanently delete my account.
                            </label>
                        </div>

                        <button
                            onClick={handleDelete}
                            disabled={!password || !confirmDelete}
                            className={`w-full py-3 px-4 rounded-lg font-bold transition-colors duration-300 ${password && confirmDelete
                                    ? 'bg-red-600 hover:bg-red-700 text-white'
                                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                }`}
                        >
                            Permanently Delete My Account
                        </button>
                    </div>

                    <div className="mt-8 space-y-4">
                        <h3 className="text-xl font-semibold">Before You Go</h3>
                        <p className="text-gray-700">
                            We'd love to hear why you're leaving. If you're experiencing issues or have feedback, please
                            <a href="/contact-us" className="text-green-600 hover:text-green-700 font-semibold"> contact us</a> first.
                            We might be able to help!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RemoveAccount
