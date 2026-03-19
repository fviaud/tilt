import { betterAuth } from "better-auth"
import { nextCookies } from "better-auth/next-js"
// import sqlite3 from 'better-sqlite3'
// const db = new sqlite3('./sqlite.db')
import { genericOAuth, jwt, keycloak } from "better-auth/plugins"

export const auth = betterAuth({
  //...other options
  // baseURL: process.env.BETTER_AUTH_BASE_URL || "http://localhost:3000",
  // baseURL: "http://localhost:3000",
  baseURL: "http://frontend.local",

  // database: db,

  trustedOrigins: ["http://localhost:3000", "https://frontend.local"],
// security: {
//     allowedOrigins: [
//       "http://localhost:3000",
//       "https://frontend.local",   // <-- ADD THIS
//     ],
//   },


  // account: {
  //   accountLinking: {
  //     enabled: true, // Permet de lier les comptes OAuth
  //     trustedProviders: ["keycloak", "github"], // Fournisseurs de confiance
  //   },
  // },

  // emailAndPassword: {
  //   enabled: true,
  //   autoSignIn: false, //defaults to true
  // },
  socialProviders: {
    github: {
      clientId: process.env.GITHUB_CLIENT_ID || "",
      clientSecret: process.env.GITHUB_CLIENT_SECRET || "",
    },
  },

  plugins: [
    genericOAuth({
      config: [
        keycloak({
          clientId: "kunai-frontend-tilt",
          clientSecret: "JvcHzWkGplMe9lBfQUvUuacAUwfuNf2S",
          issuer: "http://keycloak.keycloak.svc.cluster.local:8080/realms/kunai",
          scopes: ["profile email"],
        }),
      ],
    }),
    nextCookies(),
    jwt(),
  ],
})
