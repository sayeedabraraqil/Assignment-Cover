import Providers from "./providers"

export const metadata = {
title: "Assignment Cover",
}

export default function RootLayout({ children }) {
return ( <html> <body> <Providers>
{children} </Providers> </body> </html>
)
}
