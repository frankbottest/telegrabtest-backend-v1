import React, { useState } from 'react'
import Auth from './components/Auth'
import Main from './components/Main'

function App() {
	const [isAuthenticated, setIsAuthenticated] = useState(false)

	const handleAuth = hash => {
		fetch('https://your-backend-url.com/auth', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ hash }),
		})
			.then(response => response.json())
			.then(data => {
				if (data.success) {
					setIsAuthenticated(true)
				} else {
					alert('Неверный хеш')
				}
			})
	}

	return (
		<div className='App'>
			{isAuthenticated ? <Main /> : <Auth onAuth={handleAuth} />}
		</div>
	)
}

export default App
