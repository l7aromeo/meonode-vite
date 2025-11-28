import { Node, Center, Column, Row, H1, H2, H3, Button, Text, Portal, A, Div, useTheme } from '@meonode/ui'
import { PortalWrapper } from '@src/components/Wrapper'
import { useEffect, useState } from 'react'
import darkTheme from '@src/constants/themes/darkTheme.ts'
import lightTheme from '@src/constants/themes/lightTheme.ts'

export default function HomePage() {
  const [activeFeature, setActiveFeature] = useState<number | null>(null)
  const { theme, setTheme } = useTheme()

  return Center({
    minHeight: '100vh',
    backgroundColor: 'theme.base',
    color: 'theme.base.content',
    children: Column({
      width: '100%',
      maxWidth: '1200px',
      padding: 'theme.spacing.xl',
      gap: 'theme.spacing.2xl',
      children: [
        Center({
          children: Button('Switch Theme', {
            backgroundColor: 'transparent',
            color: 'theme.primary',
            padding: 'theme.spacing.sm theme.spacing.md',
            borderRadius: '12px',
            border: '2px solid theme.primary',
            fontSize: 'theme.text.lg',
            fontWeight: 600,
            cursor: 'pointer',
            css: {
              '&:hover': {
                backgroundColor: 'theme.primary',
                color: 'theme.primary.content',
                boxShadow: 'theme.shadow.lg',
                transform: 'translateY(-3px)',
              },
            },
            onClick: () => setTheme(theme.mode === 'light' ? darkTheme : lightTheme),
          }),
        }),
        // Hero Section
        Node(HeroSection),

        // Features Section
        Node(FeaturesSection, { activeFeature, setActiveFeature }),

        // Interactive Demo Section
        Node(DemoSection),

        // CTA Section
        Node(CTASection),
      ],
    }),
  }).render()
}

// Hero Section Component
const HeroSection = () =>
  Column({
    gap: 'theme.spacing.lg',
    textAlign: 'center',
    children: [
      H1('Build React UIs with', {
        fontSize: 'clamp(2rem, 5vw, 4rem)',
        fontWeight: 700,
        lineHeight: 1.2,
        marginBottom: 'theme.spacing.sm',
      }),
      H1('Type-Safe Fluency', {
        fontSize: 'clamp(2rem, 5vw, 4rem)',
        fontWeight: 700,
        background: 'linear-gradient(135deg, theme.primary, theme.secondary)',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        color: 'transparent',
        lineHeight: 1.2,
      }),
      Text('No JSX • Pure Functions • Emotion-Powered • Theme-Aware', {
        fontSize: 'theme.text.xl',
        opacity: 0.8,
        fontWeight: 500,
        marginBottom: 'theme.spacing.lg',
      }),
      Row({
        gap: 'theme.spacing.lg',
        justifyContent: 'center',
        flexWrap: 'wrap',
        children: [
          A({
            backgroundColor: 'theme.primary',
            color: 'theme.primary.content',
            padding: 'theme.spacing.md theme.spacing.xl',
            borderRadius: '12px',
            fontSize: 'theme.text.lg',
            fontWeight: 600,
            textDecoration: 'none',
            border: '2px solid transparent',
            transition: 'all 0.3s ease',
            css: {
              '&:hover': {
                transform: 'translateY(-3px)',
                boxShadow: 'theme.shadow.lg',
                borderColor: 'theme.primary.content',
              },
            },
            href: 'https://ui.meonode.com/docs/getting-started/overview',
            rel: 'noopener noreferrer',
            children: '📚 Explore Docs',
          }),
          Button('🎯 Try Interactive Demo', {
            backgroundColor: 'transparent',
            color: 'theme.primary',
            padding: 'theme.spacing.md theme.spacing.xl',
            borderRadius: '12px',
            border: '2px solid theme.primary',
            fontSize: 'theme.text.lg',
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            css: {
              '&:hover': {
                backgroundColor: 'theme.primary',
                color: 'theme.primary.content',
                boxShadow: 'theme.shadow.lg',
                transform: 'translateY(-3px)',
              },
            },
            onClick: () => InteractiveModal(),
          }),
        ],
      }),
    ],
  }).render()

// Features Section Component
const FeaturesSection = ({ activeFeature, setActiveFeature }: { activeFeature: number | null; setActiveFeature: (index: number | null) => void }) => {
  const features = [
    {
      icon: '🚀',
      title: 'No JSX Required',
      description: 'Write UI with plain JavaScript functions — no build transforms needed.',
      detail: 'Pure function-based composition eliminates JSX complexity while maintaining full React compatibility.',
    },
    {
      icon: '🎯',
      title: 'Type-Safe UI',
      description: 'Static typing for layouts, props, and structure with intelligent autocomplete.',
      detail: 'Built-in TypeScript support ensures safer refactors and better developer experience.',
    },
    {
      icon: '🎨',
      title: 'CSS-First Styling',
      description: 'Direct CSS property styling through component props with theme integration.',
      detail: 'Define visual styles like padding, gap, or color directly through intuitive props.',
    },
    {
      icon: '⚡',
      title: 'Emotion-Powered',
      description: 'Leverages @emotion/react for fast, flexible, and dynamic styling.',
      detail: 'Automatic optimization, vendor prefixing, and critical CSS extraction included.',
    },
    {
      icon: '🌍',
      title: 'Context Theming',
      description: 'Theme-aware design with automatic value resolution via React Context.',
      detail: 'Style with semantic tokens like theme.primary seamlessly across your app.',
    },
    {
      icon: '🔄',
      title: 'RSC Ready',
      description: 'Full compatibility with React Server Components for modern apps.',
      detail: 'Works perfectly with Next.js App Router and other RSC-enabled frameworks.',
    },
  ]

  return Column({
    gap: 'theme.spacing.xl',
    children: [
      H2('Why Choose MeoNode UI?', {
        fontSize: 'theme.text.3xl',
        textAlign: 'center',
        marginBottom: 'theme.spacing.lg',
      }),
      Div({
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
        gap: 'theme.spacing.lg',
        children: features.map((feature, index) =>
          Div({
            padding: 'theme.spacing.lg',
            borderRadius: '16px',
            border: `2px solid ${activeFeature === index ? 'theme.primary' : 'rgba(255,255,255,0.1)'}`,
            backgroundColor: activeFeature === index ? 'rgba(33, 150, 243, 0.05)' : 'transparent',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            onMouseEnter: () => setActiveFeature(index),
            onMouseLeave: () => setActiveFeature(null),
            css: {
              '&:hover': {
                backgroundColor: 'theme.base.hover',
                transform: 'translateY(-4px)',
                boxShadow: 'theme.shadow.lg',
              },
            },
            children: [
              Text(feature.icon, {
                fontSize: '3rem',
                marginBottom: 'theme.spacing.md',
                display: 'block',
              }),
              H3(feature.title, {
                fontSize: 'theme.text.xl',
                fontWeight: 600,
                marginBottom: 'theme.spacing.sm',
                color: 'theme.primary',
              }),
              Text(feature.description, {
                fontSize: 'theme.text.base',
                lineHeight: 1.6,
                marginBottom: 'theme.spacing.sm',
              }),
              Text(feature.detail, {
                fontSize: 'theme.text.sm',
                opacity: 0.7,
                lineHeight: 1.5,
              }),
            ],
          }),
        ),
      }),
    ],
  }).render()
}

// Demo Section Component
const DemoSection = () =>
  Column({
    gap: 'theme.spacing.lg',
    textAlign: 'center',
    children: [
      H2('See It In Action', {
        fontSize: 'theme.text.3xl',
        marginBottom: 'theme.spacing.lg',
      }),
      Text('Experience the power of MeoNode UI with live examples', {
        fontSize: 'theme.text.lg',
        opacity: 0.8,
        marginBottom: 'theme.spacing.xl',
      }),
      Row({
        gap: 'theme.spacing.lg',
        justifyContent: 'center',
        flexWrap: 'wrap',
        children: [
          Button('🎨 Theme Demo', {
            backgroundColor: 'theme.secondary',
            color: 'theme.secondary.content',
            padding: 'theme.spacing.md theme.spacing.lg',
            borderRadius: '10px',
            border: '2px solid theme.secondary',
            fontSize: 'theme.text.base',
            fontWeight: 500,
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            css: {
              '&:hover': {
                transform: 'scale(1.05)',
                boxShadow: '0 8px 24px rgba(156, 39, 176, 0.3)',
              },
            },
            onClick: () => ThemeModal(),
          }),
          Button('⚡ Animation Demo', {
            backgroundColor: 'theme.accent',
            color: 'theme.accent.content',
            padding: 'theme.spacing.md theme.spacing.lg',
            borderRadius: '10px',
            border: '2px solid theme.accent',
            fontSize: 'theme.text.base',
            fontWeight: 500,
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            css: {
              '&:hover': {
                transform: 'scale(1.05)',
                boxShadow: '0 8px 24px rgba(255, 193, 7, 0.3)',
              },
            },
            onClick: () => AnimationModal(),
          }),
          Button('🔄 Portal Demo', {
            backgroundColor: 'theme.success',
            color: 'theme.success.content',
            padding: 'theme.spacing.md theme.spacing.lg',
            borderRadius: '10px',
            border: '2px solid theme.success',
            fontSize: 'theme.text.base',
            fontWeight: 500,
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            css: {
              '&:hover': {
                transform: 'scale(1.05)',
                boxShadow: '0 8px 24px rgba(76, 175, 80, 0.3)',
              },
            },
            onClick: () => PortalModal({ name: 'Developer' }),
          }),
        ],
      }),
    ],
  }).render()

// CTA Section
const CTASection = () =>
  Column({
    gap: 'theme.spacing.lg',
    textAlign: 'center',
    padding: 'theme.spacing.2xl',
    borderRadius: '20px',
    background: 'linear-gradient(135deg, rgba(33, 150, 243, 0.1), rgba(156, 39, 176, 0.1))',
    border: '1px solid rgba(33, 150, 243, 0.2)',
    children: [
      H2('Ready to Transform Your React Development?', {
        fontSize: 'theme.text.2xl',
        marginBottom: 'theme.spacing.md',
      }),
      Text('Join developers who are building faster, safer, and more maintainable React applications', {
        fontSize: 'theme.text.lg',
        opacity: 0.9,
        marginBottom: 'theme.spacing.xl',
      }),
      Row({
        gap: 'theme.spacing.lg',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
        children: [
          A({
            backgroundColor: 'theme.primary',
            color: 'theme.primary.content',
            padding: 'theme.spacing.md theme.spacing.lg',
            borderRadius: '12px',
            border: '2px solid theme.primary',
            fontSize: 'theme.text.lg',
            fontWeight: 600,
            textDecoration: 'none',
            transition: 'all 0.3s ease',
            css: {
              '&:hover': {
                transform: 'translateY(-3px)',
                boxShadow: '0 12px 24px rgba(33, 150, 243, 0.4)',
              },
            },
            href: 'https://ui.meonode.com/docs/getting-started/installation',
            rel: 'noopener noreferrer',
            children: 'Get Started →',
          }),
          A({
            backgroundColor: 'transparent',
            color: 'theme.primary',
            padding: 'theme.spacing.md theme.spacing.lg',
            borderRadius: '12px',
            border: '2px solid theme.primary',
            fontSize: 'theme.text.lg',
            fontWeight: 600,
            textDecoration: 'none',
            transition: 'all 0.3s ease',
            css: {
              '&:hover': {
                backgroundColor: 'theme.primary',
                color: 'theme.primary.content',
                transform: 'translateY(-3px)',
              },
            },
            href: 'https://github.com/l7aromeo/meonode-ui',
            rel: 'noopener noreferrer',
            children: '⭐ Star on GitHub',
          }),
        ],
      }),
    ],
  }).render()

// Enhanced Modal Components

// Interactive Modal with more features
const InteractiveModal = Portal(PortalWrapper, ({ portal }) => {
  const [count, setCount] = useState(0)
  const [theme, setTheme] = useState('primary')

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') portal.unmount()
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [portal])

  return Center({
    position: 'fixed',
    inset: 0,
    backgroundColor: 'rgba(0,0,0,0.6)',
    backdropFilter: 'blur(8px)',
    zIndex: 1000,
    onClick: e => {
      if (e.currentTarget === e.target) portal.unmount()
    },
    children: [
      Column({
        backgroundColor: 'theme.base',
        color: 'theme.base.content',
        padding: 'theme.spacing.xl',
        borderRadius: '20px',
        maxWidth: '500px',
        margin: 'theme.spacing.lg',
        boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
        gap: 'theme.spacing.lg',
        css: {
          animation: 'slideIn 0.3s ease-out',
          '@keyframes slideIn': {
            from: { opacity: 0, transform: 'scale(0.9) translateY(-20px)' },
            to: { opacity: 1, transform: 'scale(1) translateY(0)' },
          },
        },
        children: [
          H2('🎯 Interactive Demo', {
            fontSize: 'theme.text.2xl',
            textAlign: 'center',
            color: `theme.${theme}`,
          }),
          Text('This modal demonstrates MeoNode UI capabilities:', {
            textAlign: 'center',
            opacity: 0.8,
          }),
          Column({
            gap: 'theme.spacing.md',
            padding: 'theme.spacing.lg',
            backgroundColor: 'rgba(33, 150, 243, 0.05)',
            borderRadius: '12px',
            children: [
              Text(`Counter: ${count}`, {
                fontSize: 'theme.text.xl',
                textAlign: 'center',
                fontWeight: 600,
              }),
              Row({
                gap: 'theme.spacing.md',
                justifyContent: 'center',
                children: [
                  Button('-', {
                    backgroundColor: 'theme.error',
                    color: 'theme.error.content',
                    padding: 'theme.spacing.sm theme.spacing.md',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    onClick: () => setCount(c => Math.max(0, c - 1)),
                  }),
                  Button('+', {
                    backgroundColor: 'theme.success',
                    color: 'theme.success.content',
                    padding: 'theme.spacing.sm theme.spacing.md',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    onClick: () => setCount(c => c + 1),
                  }),
                ],
              }),
            ],
          }),
          Row({
            gap: 'theme.spacing.sm',
            justifyContent: 'center',
            children: ['primary', 'secondary', 'accent'].map(t =>
              Button(t, {
                backgroundColor: theme === t ? `theme.${t}` : 'transparent',
                color: theme === t ? `theme.${t}.content` : `theme.${t}`,
                border: `2px solid theme.${t}`,
                padding: 'theme.spacing.sm theme.spacing.md',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: 'theme.text.sm',
                onClick: () => setTheme(t),
              }),
            ),
          }),
          Button('Close Modal', {
            backgroundColor: 'theme.base.content',
            color: 'theme.base',
            padding: 'theme.spacing.md theme.spacing.lg',
            borderRadius: '10px',
            cursor: 'pointer',
            fontWeight: 500,
            css: {
              '&:hover': {
                opacity: 0.8,
              },
            },
            onClick: () => portal.unmount(),
          }),
        ],
      }),
    ],
  })
})

// Theme Demo Modal
const ThemeModal = Portal(PortalWrapper, ({ portal }) => {
  useEffect(() => {
    setTimeout(() => portal.unmount(), 4000)
  }, [])

  return Center({
    position: 'fixed',
    inset: 0,
    backgroundColor: 'rgba(0,0,0,0.4)',
    backdropFilter: 'blur(5px)',
    onClick: e => {
      if (e.currentTarget === e.target) portal.unmount()
    },
    children: [
      Column({
        backgroundColor: 'theme.base',
        color: 'theme.base.content',
        padding: 'theme.spacing.xl',
        borderRadius: '16px',
        boxShadow: '0 10px 30px rgba(156, 39, 176, 0.3)',
        gap: 'theme.spacing.lg',
        children: [
          Text('🎨 Theme System Demo', {
            fontSize: 'theme.text.xl',
            fontWeight: 600,
            textAlign: 'center',
            color: 'theme.secondary',
          }),
          Row({
            gap: 'theme.spacing.md',
            children: [
              Div({ width: '20px', height: '20px', backgroundColor: 'theme.primary', borderRadius: '50%' }),
              Div({ width: '20px', height: '20px', backgroundColor: 'theme.secondary', borderRadius: '50%' }),
              Div({ width: '20px', height: '20px', backgroundColor: 'theme.accent', borderRadius: '50%' }),
              Div({ width: '20px', height: '20px', backgroundColor: 'theme.success', borderRadius: '50%' }),
            ],
          }),
          Text('Theme tokens resolve automatically!', {
            opacity: 0.7,
            textAlign: 'center',
          }),
        ],
      }),
    ],
  })
})

// Animation Demo Modal
const AnimationModal = Portal(PortalWrapper, ({ portal }) => {
  useEffect(() => {
    setTimeout(() => portal.unmount(), 3000)
  }, [])

  return Center({
    position: 'fixed',
    inset: 0,
    backgroundColor: 'rgba(0,0,0,0.4)',
    backdropFilter: 'blur(5px)',
    onClick: e => {
      if (e.currentTarget === e.target) portal.unmount()
    },
    children: [
      Div({
        backgroundColor: 'theme.accent',
        color: 'theme.accent.content',
        padding: 'theme.spacing.xl',
        borderRadius: '20px',
        fontSize: 'theme.text.xl',
        fontWeight: 600,
        css: {
          animation: 'bounce 0.6s ease-in-out infinite alternate',
          '@keyframes bounce': {
            from: { transform: 'translateY(0px)' },
            to: { transform: 'translateY(-10px)' },
          },
        },
        children: '⚡ Smooth CSS Animations!',
      }),
    ],
  })
})

// Enhanced Portal Modal
const PortalModal = Portal<{ name: string }>(PortalWrapper, ({ portal, name }) => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) {
          setTimeout(() => {
            portal.unmount()
          }, 0)
          return 100
        }
        return p + 10
      })
    }, 300)
    return () => clearInterval(interval)
  }, [])

  return Center({
    position: 'fixed',
    inset: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    backdropFilter: 'blur(6px)',
    onClick: e => {
      if (e.currentTarget === e.target) portal.unmount()
    },
    children: [
      Column({
        backgroundColor: 'theme.base',
        color: 'theme.base.content',
        padding: 'theme.spacing.xl',
        borderRadius: '16px',
        boxShadow: '0 15px 35px rgba(76, 175, 80, 0.3)',
        gap: 'theme.spacing.lg',
        minWidth: '300px',
        children: [
          Text(`🔄 Hello ${name}!`, {
            fontSize: 'theme.text.xl',
            fontWeight: 600,
            textAlign: 'center',
            color: 'theme.success',
          }),
          Text('Portal system in action', {
            textAlign: 'center',
            opacity: 0.8,
          }),
          Div({
            width: '100%',
            height: '8px',
            backgroundColor: 'rgba(76, 175, 80, 0.2)',
            borderRadius: '4px',
            overflow: 'hidden',
            children: Div({
              width: `${progress}%`,
              height: '100%',
              backgroundColor: 'theme.success',
              transition: 'width 0.3s ease',
            }),
          }),
          Text(`Auto-closing... ${Math.floor(progress / 10)}/10`, {
            textAlign: 'center',
            fontSize: 'theme.text.sm',
            opacity: 0.6,
          }),
        ],
      }),
    ],
  })
})
