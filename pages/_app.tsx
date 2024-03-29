import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from '@vercel/analytics/react';
import HeadData from './head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <HeadData></HeadData>
      <Component {...pageProps} />
      <Analytics />
      <SpeedInsights />
    </>
  )
}
