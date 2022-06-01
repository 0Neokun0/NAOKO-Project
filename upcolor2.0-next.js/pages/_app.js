import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import { SessionProvider } from "next-auth/react";



function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    
    <SessionProvider session={session}>
    
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    
  </SessionProvider>
       
  );
}

export default MyApp;