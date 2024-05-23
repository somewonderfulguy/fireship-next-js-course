import { NextResponse } from 'next/server'

const posts = [
  {
    title: 'Lorem Ipsum',
    slug: 'lorem-ipsum',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.'
  },
  {
    title: 'Understanding JavaScript Closures',
    slug: 'understanding-javascript-closures',
    content:
      'Closures are a powerful feature of JavaScript. They allow a function to access variables from an enclosing scope or environment.'
  },
  {
    title: 'A Guide to React Hooks',
    slug: 'guide-to-react-hooks',
    content:
      'React Hooks provide a new way to use state and other React features without writing a class. This guide covers the basics of using hooks in your components.'
  },
  {
    title: 'Exploring Node.js Performance',
    slug: 'exploring-nodejs-performance',
    content:
      'Node.js is known for its performance capabilities. This post explores ways to optimize and enhance the performance of your Node.js applications.'
  },
  {
    title: 'CSS Grid Layout: A Comprehensive Guide',
    slug: 'css-grid-layout-guide',
    content:
      'CSS Grid Layout is a powerful layout system available in CSS. This comprehensive guide will teach you the basics and advanced concepts of CSS Grid.'
  }
]

export const GET = async () => {
  return NextResponse.json(posts)
}
