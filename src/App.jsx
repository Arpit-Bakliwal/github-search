import { Provider } from 'react-redux'
import { useSelector } from 'react-redux'
import store from './app/store'
import SearchBar from './components/SearchBar'
import UserCard from './components/UserCard'
import RepoList from './components/RepoList'

const GitHubSearch = () => {
    const { user, repos, error, searchQuery } = useSelector((state) => state.github)

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4">
            <div className="max-w-2xl mx-auto space-y-6">

                {/* Header */}
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-gray-900">
                        GitHub User Search
                    </h1>
                    <p className="text-gray-500 mt-2">
                        Powered by Redux Saga
                    </p>
                </div>

                {/* Search */}
                <SearchBar />

                {/* Error */}
                {error && (
                    <div className="bg-red-50 text-red-600 px-4 py-3 rounded-xl text-sm text-center">
                        {error}
                    </div>
                )}

                {/* Results */}
                {user && (
                    <div className="space-y-4">
                        <UserCard user={user} />
                        <RepoList repos={repos} />
                    </div>
                )}

                {/* Empty state */}
                {!user && !error && !searchQuery && (
                    <div className="text-center text-gray-400 py-12">
                        Search for a GitHub username to get started
                    </div>
                )}

            </div>
        </div>
    )
}

const App = () => (
    <Provider store={store}>
        <GitHubSearch />
    </Provider>
)

export default App