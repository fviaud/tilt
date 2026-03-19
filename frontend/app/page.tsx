'use client'
import { LoginForm } from "@/components/login-form"
import { createAuthClient } from "better-auth/react"
const { useSession } = createAuthClient()
export default function User() {
	const {
		data: session,
		isPending, //loading state
		error, //error object 
		refetch //refetch the session
	} = useSession()
	return (
		<div>
			{isPending && <p>Loading...</p>}
			{error && <p>Error: {error.message}</p>}
			{session ? (
				<div>
					<p>Welcome, {session.user.name}!</p>
					<button onClick={() => refetch()}>Refetch Session</button>
				</div>
			) : (
				<LoginForm />
			)}
		</div>
	)
}