const RepoList = ({ repos }) => {
    if (!repos.length) return null

    return (
        <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Top Repositories
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {repos.map((repo) => (
                    <a
                        key={repo.id}
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white border border-gray-200 rounded-xl p-4 hover:border-blue-300 hover:shadow-sm transition-all"
                    >
                        <p className="text-sm font-semibold text-blue-600 truncate">
                            {repo.name}
                        </p>
                        {repo.description && (
                            <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                                {repo.description}
                            </p>
                        )}
                        <div className="flex gap-3 mt-2 text-xs text-gray-400">
                            <span>⭐ {repo.stargazers_count}</span>
                            <span>🍴 {repo.forks_count}</span>
                            {repo.language && <span>● {repo.language}</span>}
                        </div>
                    </a>
                ))}
            </div>
        </div>
    )
}

export default RepoList