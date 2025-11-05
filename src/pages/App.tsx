import { useState } from 'react'
import { Component, Column, Row, Center, H1, H2, H3, Text, Button, Div, Section, A, Node, Absolute } from '@meonode/ui'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { gruvboxLight } from 'react-syntax-highlighter/dist/cjs/styles/hljs'

// Features data
const features = [
  {
    icon: '⚡',
    title: 'No JSX Required',
    description: 'Write UI with plain JavaScript functions — no build transforms or syntax hacks needed.',
  },
  {
    icon: '🛡️',
    title: 'Type-Safe UI',
    description: 'Static typing for layouts, props, and structure. Safer refactors and better developer experience.',
  },
  {
    icon: '🔧',
    title: 'Composable by Design',
    description: 'Build UIs as function trees — easily reusable, abstractable, and intuitive component composition.',
  },
  {
    icon: '🎨',
    title: 'CSS-First Prop Styling',
    description: 'Define visual styles like padding, gap, or color directly through intuitive props.',
  },
  {
    icon: '💙',
    title: 'Powered by Emotion',
    description: 'Leverages the power of @emotion/react for fast, flexible, and dynamic styling in React apps.',
  },
  {
    icon: '🎯',
    title: 'Theme-Aware',
    description: 'Style with semantic tokens like theme.primary or theme.spacing.md with seamless integration.',
  },
]

// Code examples
const jsxExample = `// Traditional JSX approach
function Welcome() {
  return (
    <div className="container">
      <h1>Welcome to our App!</h1>
      <button onClick={handleClick}>
        Click Me
      </button>
    </div>
  );
}`

const meonodeExample = `// MeoNode UI approach
const Welcome = Component(() =>
  Column({
    padding: 20,
    children: [
      H1('Welcome to our App!', {
        fontSize: '2rem',
        color: 'theme.primary'
      }),
      Button('Click Me', {
        onClick: handleClick,
        backgroundColor: 'theme.accent'
      })
    ]
  })
);`

// Reusable components using MeoNode patterns
const FeatureCard = Component<{ title: string; icon: string; description: string }>(({ icon, title, description }) =>
  Div({
    padding: 'theme.spacing.xl',
    backgroundColor: 'theme.background.card',
    borderRadius: 16,
    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
    transition: 'all 0.3s ease',
    maxWidth: '350px',
    css: {
      '&:hover': {
        transform: 'translateY(-5px)',
        boxShadow: '0 8px 40px rgba(0,0,0,0.15)',
      },
    },
    children: Column({
      gap: 'theme.spacing.md',
      textAlign: 'center',
      children: [
        Text(icon, {
          fontSize: '3rem',
          marginBottom: 'theme.spacing.sm',
        }),

        H3(title, {
          fontSize: '1.5rem',
          color: 'theme.text.primary',
          marginBottom: 'theme.spacing.sm',
        }),

        Text(description, {
          color: 'theme.text.secondary',
          lineHeight: 1.6,
          fontSize: '1rem',
        }),
      ],
    }),
  }),
)

const CodeBlock = Component<{ title: string; code: string; language: string }>(({ title, code, language }) =>
  Div({
    backgroundColor: '#2d3748',
    color: '#e2e8f0',
    padding: 'theme.spacing.xl',
    borderRadius: 12,
    maxWidth: '500px',
    fontFamily: 'Monaco, Consolas, monospace',
    fontSize: '0.9rem',
    position: 'relative',
    children: [
      // Language badge
      Div({
        position: 'absolute',
        top: 'theme.spacing.md',
        right: 'theme.spacing.md',
        backgroundColor: 'rgba(255,255,255,0.1)',
        padding: '4px 12px',
        borderRadius: 6,
        fontSize: '0.75rem',
        textTransform: 'uppercase',
        children: Text(language),
      }),

      Column({
        gap: 'theme.spacing.md',
        children: [
          H3(title, {
            color: '#81e6d9',
            fontSize: '1.1rem',
            marginBottom: 'theme.spacing.md',
          }),

          Node(SyntaxHighlighter, {
            borderRadius: 8,
            textAlign: 'initial',
            props: {
              style: gruvboxLight,
            },
            color: 'initial',
            language: 'javascript',
            children: code,
          }),
        ],
      }),
    ],
  }),
)

const InstallCommand = Component(() =>
  Div({
    backgroundColor: 'rgba(0,0,0,0.3)',
    border: '1px solid rgba(255,255,255,0.2)',
    borderRadius: 12,
    padding: 'theme.spacing.lg',
    fontFamily: 'Monaco, Consolas, monospace',
    fontSize: '1.1rem',
    maxWidth: '400px',
    backdropFilter: 'blur(10px)',
    transition: 'all 0.3s ease',
    css: {
      '&:hover': {
        backgroundColor: 'rgba(0,0,0,0.4)',
        transform: 'translateY(-2px)',
      },
    },
    children: Text('yarn add @meonode/ui', {
      color: 'white',
      fontWeight: 500,
    }),
  }),
)

// Main homepage component
const AppPage = () => {
  const [showCodeComparison, setShowCodeComparison] = useState(false)

  return Column({
    children: [
      // Hero Section
      Section({
        minHeight: '100vh',
        background: 'linear-gradient(135deg, theme.primary 0%, theme.secondary 100%)',
        color: 'white',
        position: 'relative',
        overflow: 'hidden',
        children: [
          // Animated background pattern
          Absolute({
            inset: 0,
            backgroundImage: `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><defs><pattern id='grid' width='10' height='10' patternUnits='userSpaceOnUse'><path d='M 10 0 L 0 0 0 10' fill='none' stroke='rgba(255,255,255,0.1)' stroke-width='0.5'/></pattern></defs><rect width='100' height='100' fill='url(%23grid)'/></svg>")`,
            animation: 'gridMove 20s linear infinite',
            css: {
              '@keyframes gridMove': {
                '0%': { transform: 'translate(0, 0)' },
                '100%': { transform: 'translate(10px, 10px)' },
              },
            },
          }),

          // Hero content
          Center({
            minHeight: '100vh',
            padding: 'theme.spacing.xl',
            position: 'relative',
            zIndex: 2,
            children: Column({
              maxWidth: '1200px',
              textAlign: 'center',
              alignItems: 'center',
              gap: 'theme.spacing.lg',
              children: [
                H1('MeoNode UI', {
                  fontSize: 'clamp(3rem, 8vw, 6rem)',
                  fontWeight: 800,
                  marginBottom: 'theme.spacing.md',
                  background: 'linear-gradient(45deg, #fff, theme.base.deep)',
                  css: {
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  },
                }),

                Text('Build React UIs with Type-Safe Fluency', {
                  fontSize: 'clamp(1.2rem, 3vw, 2rem)',
                  marginBottom: 'theme.spacing.sm',
                  opacity: 0.9,
                }),

                Text('Without JSX Syntax', {
                  fontSize: 'clamp(1rem, 2.5vw, 1.3rem)',
                  marginBottom: 'theme.spacing.xl',
                  opacity: 0.8,
                }),

                Text('A structured approach to component composition with built-in theming, prop separation, and dynamic children handling.', {
                  fontSize: 'clamp(1rem, 2vw, 1.2rem)',
                  maxWidth: '800px',
                  marginBottom: 'theme.spacing.2xl',
                  opacity: 0.8,
                  lineHeight: 1.6,
                }),

                InstallCommand(),

                Row({
                  gap: 'theme.spacing.md',
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                  children: [
                    A({
                      padding: '16px 32px',
                      backgroundColor: 'theme.accent',
                      color: 'white',
                      borderRadius: 50,
                      fontSize: '1.1rem',
                      fontWeight: 600,
                      border: 'none',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      textDecoration: 'none',
                      css: {
                        '&:hover': {
                          transform: 'translateY(-3px)',
                          boxShadow: '0 10px 25px rgba(255, 107, 107, 0.4)',
                        },
                      },
                      href: 'https://ui.meonode.com/docs/getting-started/installation',
                      target: '_blank',
                      rel: 'noopener noreferrer',
                      children: 'Get Started',
                    }),

                    A({
                      padding: '16px 32px',
                      backgroundColor: 'rgba(255,255,255,0.1)',
                      color: 'white',
                      border: '2px solid rgba(255,255,255,0.3)',
                      borderRadius: 50,
                      fontSize: '1.1rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      backdropFilter: 'blur(10px)',
                      transition: 'all 0.3s ease',
                      textDecoration: 'none',
                      css: {
                        '&:hover': {
                          backgroundColor: 'rgba(255,255,255,0.2)',
                          transform: 'translateY(-3px)',
                        },
                      },
                      href: 'https://ui.meonode.com/docs/getting-started/overview',
                      target: '_blank',
                      rel: 'noopener noreferrer',
                      children: 'View Documentation',
                    }),
                  ],
                }),
              ],
            }),
          }),
        ],
      }),

      // Features Section
      Section({
        padding: `theme.spacing.2xl theme.spacing.xl`,
        children: Center({
          children: Column({
            maxWidth: '1200px',
            children: [
              H2('Why Use MeoNode UI?', {
                textAlign: 'center',
                fontSize: '3rem',
                color: 'theme.text.primary',
                marginBottom: 'theme.spacing.2xl',
              }),

              Row({
                gap: 'theme.spacing.xl',
                flexWrap: 'wrap',
                justifyContent: 'center',
                children: features.map(feature =>
                  FeatureCard({
                    icon: feature.icon,
                    title: feature.title,
                    description: feature.description,
                  }),
                ),
              }),
            ],
          }),
        }),
      }),

      // Code Comparison Section
      Section({
        padding: 'theme.spacing.2xl',
        backgroundColor: 'theme.base',
        color: 'theme.base.content',
        children: Center({
          children: Column({
            maxWidth: '1200px',
            textAlign: 'center',
            children: [
              H2("No JSX? Here's Why", {
                fontSize: '3rem',
                color: 'theme.text.primary',
                marginBottom: 'theme.spacing.md',
              }),

              Text(
                'JSX is convenient, but it comes with a cost — you need build steps, transforms, and special tooling. MeoNode UI skips the JSX layer entirely.',
                {
                  fontSize: '1.25rem',
                  color: 'theme.text.secondary',
                  marginBottom: 'theme.spacing.2xl',
                  maxWidth: '800px',
                  lineHeight: 1.6,
                },
              ),

              Button(`${showCodeComparison ? 'Hide' : 'Show'} Code Comparison`, {
                backgroundColor: 'theme.primary',
                color: 'white',
                padding: 'theme.spacing.lg',
                fontSize: '1.1rem',
                borderRadius: 8,
                border: 'none',
                cursor: 'pointer',
                marginBottom: 'theme.spacing.xl',
                transition: 'all 0.3s ease',
                onClick: () => setShowCodeComparison(!showCodeComparison),
                css: {
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: '0 8px 16px rgba(102, 126, 234, 0.3)',
                  },
                },
              }),

              ...(showCodeComparison
                ? [
                    Row({
                      gap: 'theme.spacing.xl',
                      flexWrap: 'wrap',
                      justifyContent: 'center',
                      marginTop: 'theme.spacing.xl',
                      children: [
                        CodeBlock({
                          title: 'Traditional JSX',
                          code: jsxExample,
                          language: 'JSX',
                        }),

                        CodeBlock({
                          title: 'MeoNode UI',
                          code: meonodeExample,
                          language: 'JS',
                        }),
                      ],
                    }),
                  ]
                : []),
            ],
          }),
        }),
      }),

      // Testimonials Section
      Section({
        padding: 'theme.spacing.2xl',
        backgroundColor: 'white',
        children: Center({
          children: Column({
            maxWidth: '1000px',
            textAlign: 'center',
            children: [
              H2('What Developers Say', {
                fontSize: '3rem',
                color: 'theme.text.primary',
                marginBottom: 'theme.spacing.2xl',
              }),

              Column({
                gap: 'theme.spacing.lg',
                children: [
                  Div({
                    background: 'linear-gradient(45deg, theme.neutral, theme.primary)',
                    color: 'white',
                    padding: 'theme.spacing.xl',
                    borderRadius: 16,
                    position: 'relative',
                    css: {
                      '&:before': {
                        content: '""',
                        position: 'absolute',
                        top: '1rem',
                        left: '2rem',
                        fontSize: '4rem',
                        opacity: 0.3,
                      },
                    },
                    children: Column({
                      gap: 'theme.spacing.md',
                      children: [
                        Text('Awesome, it feels elegant, like Flutter. All we have to do is add the ability to understand React hooks.', {
                          fontSize: '1.3rem',
                          fontStyle: 'italic',
                          lineHeight: 1.5,
                        }),

                        Text('— Lalu Ibnu, Fullstack Developer', {
                          fontWeight: 600,
                          opacity: 0.9,
                        }),
                      ],
                    }),
                  }),

                  Row({
                    gap: 'theme.spacing.lg',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    children: [
                      Div({
                        background: 'linear-gradient(45deg, theme.neutral, theme.primary)',
                        color: 'white',
                        padding: 'theme.spacing.lg',
                        borderRadius: 12,
                        maxWidth: '480px',
                        children: Column({
                          gap: 'theme.spacing.sm',
                          children: [
                            Text('@meonode/ui? Dope stuff, seriously. Made my UI dev way less of a headache.', {
                              fontSize: '1.1rem',
                              fontStyle: 'italic',
                            }),

                            Text('— Abdul Bashir, Web Developer', {
                              fontWeight: 600,
                              opacity: 0.9,
                            }),
                          ],
                        }),
                      }),

                      Div({
                        background: 'linear-gradient(45deg, theme.neutral, theme.primary)',
                        color: 'white',
                        padding: 'theme.spacing.lg',
                        borderRadius: 12,
                        maxWidth: '480px',
                        children: Column({
                          gap: 'theme.spacing.sm',
                          children: [
                            Text('It makes me easy to develop Web Application faster in ReactJS', {
                              fontSize: '1.1rem',
                              fontStyle: 'italic',
                            }),

                            Text('— Sepect, Fullstack Developer', {
                              fontWeight: 600,
                              opacity: 0.9,
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
      }),

      // Footer
      Section({
        backgroundColor: 'theme.text.primary',
        color: 'theme.text.light',
        padding: 'theme.spacing.2xl',
        textAlign: 'center',
        children: Center({
          children: Column({
            maxWidth: '800px',
            gap: 'theme.spacing.xl',
            children: [
              H2('Join the MeoNode Community', {
                fontSize: '2.5rem',
                background: 'linear-gradient(45deg, theme.primary, theme.neutral)',
                css: {
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                },
              }),

              Text("Have feedback? Want to contribute? Let's build the future of UI development together.", {
                fontSize: '1.25rem',
                opacity: 0.9,
                lineHeight: 1.6,
              }),

              Row({
                gap: 'theme.spacing.lg',
                justifyContent: 'center',
                flexWrap: 'wrap',
                children: [
                  A({
                    backgroundColor: 'transparent',
                    border: '2px solid theme.primary',
                    color: 'theme.primary',
                    padding: 'theme.spacing.md',
                    borderRadius: 8,
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    textDecoration: 'none',
                    css: {
                      '&:hover': {
                        backgroundColor: 'theme.base.deep',
                        color: 'theme.text.primary',
                      },
                    },
                    href: 'https://ui.meonode.com',
                    target: '_blank',
                    rel: 'noopener noreferrer',
                    children: 'Documentation',
                  }),

                  A({
                    backgroundColor: 'transparent',
                    border: '2px solid theme.primary',
                    color: 'theme.primary',
                    padding: 'theme.spacing.md',
                    borderRadius: 8,
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    textDecoration: 'none',
                    css: {
                      '&:hover': {
                        backgroundColor: 'theme.base.deep',
                        color: 'theme.text.primary',
                      },
                    },
                    href: 'https://github.com/l7aromeo/meonode-ui',
                    target: '_blank',
                    rel: 'noopener noreferrer',
                    children: 'GitHub',
                  }),
                ],
              }),

              Text('© 2025 MeoNode UI. Built with ❤️ for the React community.', {
                opacity: 0.7,
                fontSize: '0.9rem',
              }),
            ],
          }),
        }),
      }),
    ],
  }).render()
}

export default AppPage
