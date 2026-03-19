"use client"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { authClient } from "@/lib/auth-client"

// import { useRouter } from "next/navigation"
import { useState } from "react"

// import { Separator } from "@radix-ui/react-separator"

export function LoginForm({ className, ...props }: React.ComponentProps<"div">) {
//   const [email, setEmail] = useState("")
//   const [password, setPassword] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
//   const router = useRouter()

//   const handleSignIn = async (e: React.FormEvent) => {
//     e.preventDefault()
//     setError(null)
//     setIsLoading(true)
//     try {
//       const session = await authClient.signIn.email({
//         email,
//         password,
//       })
//       if (session.error?.message) {
//         throw new Error(session.error?.message)
//       }
//       router.push("/dashboard")
//     } catch (err: any) {
//       setError(err?.message ?? "Sign in failed")
//     } finally {
//       setIsLoading(false)
//     }
//   }

  const handleGitHubSignIn = async () => {
    setError(null)
    try {
      await authClient.signIn.social({
        provider: "github",
        callbackURL: "/dashboard",
      })
    } catch (err: any) {
      setError(err?.message ?? "GitHub sign in failed")
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeycloakSignIn = async () => {
    setError(null)
    try {
      const response = await authClient.signIn.social({
        provider: "keycloak",
        callbackURL: "/",
      })
      console.log(response.error)
    } catch (err: any) {
      setError(err?.message ?? "Keycloak sign in failed")
    } finally {
      setIsLoading(false)
    }
  }

  return (
//     <div className={cn("flex flex-col gap-6", className)} {...props}>
//       <Card>
//         <CardHeader>
//           <CardTitle>Login to your account</CardTitle>
//           <CardDescription>Enter your email below to login to your account</CardDescription>
//         </CardHeader>
//         <CardContent>
//           {/* <form onSubmit={handleSignIn}>
//             <FieldGroup>
//               <Field>
//                 <FieldLabel htmlFor="email">Email</FieldLabel>
//                 <Input
//                   id="email"
//                   type="email"
//                   placeholder="m@example.com"
//                   onChange={(e) => setEmail(e.target.value)}
//                   required
//                 />
//               </Field>
//               <Field>
//                 <div className="flex items-center">
//                   <FieldLabel htmlFor="password">Password</FieldLabel>
//                   <a
//                     href="#"
//                     className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
//                   >
//                     Forgot your password?
//                   </a>
//                 </div>
//                 <Input
//                   id="password"
//                   type="password"
//                   placeholder="Password"
//                   required
//                   onChange={(e) => setPassword(e.target.value)}
//                 />
//               </Field>
//               {error && <div className="text-red-600">{error}</div>}
//               <Field>
//                 <Button type="submit" disabled={isLoading}>
//                   {isLoading ? 'Logging in...' : 'Login'}
//                 </Button>
//                 <FieldDescription className="text-center">
//                   Don&apos;t have an account? <a href="/signup">Sign up</a>
//                 </FieldDescription>
//               </Field>
//             </FieldGroup>
//           </form> */}
//           <Separator className="my-6" />
//           <div className="space-y-2">
<>

            <Button onClick={handleGitHubSignIn} variant="outline" className="w-full">
              <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              Continue with GitHub
            </Button> 
            <Button onClick={handleKeycloakSignIn} variant="outline" className="w-full">
              <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm3-10c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3z" />
              </svg>
              Continue with Keycloak
            </Button>
</>
//           </div>
//         </CardContent>
//       </Card>
//     </div>
  )
}
