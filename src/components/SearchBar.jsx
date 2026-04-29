import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { searchUser, clearSearch } from '../features/github/githubSlice'

const SearchBar = () => {
    const dispatch = useDispatch()
    const { searchQuery, loading } = useSelector((state) => state.github)
    const [input, setInput] = useState('')

    const handleChange = (e) => {
        const value = e.target.value
        setInput(value)

        if (value.trim()) {
            // Dispatch action — Saga picks it up with 500ms debounce
            dispatch(searchUser(value.trim()))
        } else {
            dispatch(clearSearch())
        }
    }

    return (
        <div className="w-full max-w-xl mx-auto">
            <div className="relative">
                <input
                    type="text"
                    value={input}
                    onChange={handleChange}
                    placeholder="Search GitHub username..."
                    className="w-full px-5 py-3 pr-12 border-2 border-gray-200 rounded-xl text-sm focus:outline-none focus:border-blue-500 transition-colors"
                />
                {loading && (
                    <div className="absolute right-4 top-3.5">
                        <div className="w-5 h-5 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
                    </div>
                )}
            </div>
        </div>
    )
}

export default SearchBar