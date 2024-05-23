import { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'We are a social media company'
}

const About = async () => {
  return (
    <main>
      <h1>About</h1>
      <p>TWe are a social media company!</p>
    </main>
  )
}

export default About
