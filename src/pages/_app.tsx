import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '@/styles/theme';

export default function App({ Component, pageProps }: AppProps) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(prefersDarkMode);
  }, []);

  const themeClasses = isDarkMode
    ? { background: "#424549", text: "#fff" }
    : { bakcground: "#F2F2F2", text: "#000"}
  return (
    <>
      <Head>
        <title>tony's site</title>
        <link rel="icon" href="/images/meliodasexpressionless.png"/>
        <meta property="og:title" content="tony" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/meliodaschibi.png"/>
        <meta property="og:description" content="my personal website" />
        <meta name="theme-color" content="#5865F2" />
        <meta name="twitter:card" content="summary_large_image"></meta>
      </Head>
      <style jsx global>{
        `
          body {
            background: ${themeClasses.background};
            color: ${themeClasses.text};
          }
        `
      }</style>
     <Component {...pageProps} />
    </>
  )
}
