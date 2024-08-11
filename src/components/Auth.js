import React, { useState } from 'react'

const Auth = ({ onAuth }) => {
	const [hash, setHash] = useState('')

	const handleSubmit = e => {
		e.preventDefault()
		onAuth(hash)
	}

	return (
		<div>
			<h2>Авторизация</h2>
			<form onSubmit={handleSubmit}>
				<input
					type='text'
					placeholder='Введите хеш транзакции'
					value={hash}
					onChange={e => setHash(e.target.value)}
				/>
				<button type='submit'>Войти</button>
			</form>
		</div>
	)
}

export default Auth
