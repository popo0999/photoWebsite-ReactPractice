import React from 'react'
import { Link } from 'react-router-dom'

const nav = () => {
	return (
		<nav>
			<ul>
				<li>
					<Link to="/photoWebsiteReactPractice">Home</Link>
				</li>
				<li>
					<Link to="/photoWebsiteReactPractice/about">About</Link>
				</li>
			</ul>
		</nav>
	)
}

export default nav
