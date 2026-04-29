const UserCard = ({ user }) => {
    return (
        <div className="bg-white rounded-2xl border border-gray-200 p-6 flex items-start gap-5">
            <img
                src={user.avatar_url}
                alt={user.login}
                className="w-20 h-20 rounded-full border-2 border-gray-100"
            />
            <div className="flex-1 min-w-0">
                <h2 className="text-xl font-bold text-gray-900">
                    {user.name || user.login}
                </h2>
                <a
                    href={user.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 text-sm hover:underline"
                >
                    @{user.login}
                </a>
                {user.bio && (
                    <p className="text-gray-600 text-sm mt-2">{user.bio}</p>
                )}
                <div className="flex gap-4 mt-3 text-sm text-gray-500">
                    <span>⭐ {user.public_repos} repos</span>
                    <span>👥 {user.followers} followers</span>
                    <span>👤 {user.following} following</span>
                </div>
                {user.location && (
                    <p className="text-sm text-gray-400 mt-1">📍 {user.location}</p>
                )}
            </div>
        </div>
    )
}

export default UserCard