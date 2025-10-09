import { Center, Column, Div, Portal, Row, Span, type NodeElement } from '@meonode/ui'
import { Box, Button, Fade, Popover, Slide } from '@meonode/mui'
import { easing, type PopoverProps } from '@mui/material'
import tinycolor from 'tinycolor2'
import { type CSSProperties, useEffect } from 'react'
import { PortalProviders } from '@src/components/Providers'

type ConfirmProps = {
  title: string
  message: string
  acceptColor?: string
  declineColor?: string
  onConfirm?: () => void
  onCancel?: () => void
  acceptLabel?: string
  declineLabel?: string
}

export const Confirm = Portal<ConfirmProps>(
  PortalProviders,
  function Confirm({
    title,
    message,
    onConfirm = () => {},
    onCancel = () => {},
    acceptColor = 'theme.primary',
    declineColor = 'theme.secondary',
    acceptLabel = 'YES',
    declineLabel = 'CANCEL',
    portal,
  }) {
    useEffect(() => {
      const handleEsc = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
          portal.unmount()
        }
      }

      window.addEventListener('keydown', handleEsc)
      return () => {
        window.removeEventListener('keydown', handleEsc)
      }
    }, [])

    return Center({
      position: 'absolute',
      display: 'flex',
      flexDirection: 'column',

      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 9999999999,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      color: 'theme.text.primary',
      onClick: e => {
        if (e.target === e.currentTarget) {
          portal.unmount()
        }
      },
      children: Fade({
        in: true,
        children: Box({
          borderRadius: 10,
          backgroundColor: 'theme.base',
          padding: '10px 20px',
          boxShadow: 'theme.shadow.sm',
          children: Column({
            gap: 10,
            children: [
              Div({
                textAlign: 'left',
                fontWeight: 'bold',
                children: Span(title),
              }),
              Div({
                children: Span(message),
              }),
              Row({
                marginLeft: 'auto',
                marginBlockStart: 10,
                gap: 10,
                children: [
                  Button({
                    onClick: () => {
                      onCancel()
                      portal.unmount()
                    },
                    children: declineLabel,
                    sx: { color: declineColor },
                  }),
                  Button({
                    onClick: () => {
                      onConfirm()
                      portal.unmount()
                    },
                    children: acceptLabel,
                    sx: { backgroundColor: acceptColor, color: tinycolor.isReadable(acceptColor, 'white') ? 'white' : 'black' },
                  }),
                ],
              }),
            ],
          }),
        }),
      }),
    })
  },
)

export const Menu = Portal<Partial<Omit<PopoverProps, keyof CSSProperties | 'children'>>>(PortalProviders, function Menu({ children, portal, ...menuProps }) {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        portal.unmount()
      }
    }

    window.addEventListener('keydown', handleEsc)
    return () => {
      window.removeEventListener('keydown', handleEsc)
    }
  }, [])

  return Popover({
    open: true,
    disablePortal: true,
    disableAutoFocus: true,
    anchorOrigin: { vertical: 'bottom', horizontal: 'left' },
    ...menuProps,
    onClose: () => {
      portal.unmount()
    },
    slotProps: {
      backdrop: {
        onContextMenu: e => {
          e.preventDefault()
          if (e.target === e.currentTarget) {
            portal.unmount()
          }
        },
      },
      paper: {
        sx: {
          padding: '8px 0',
          backgroundColor: 'theme.base',
        },
      },
    },
    children,
  })
})

// Modal
type ModalProps = {
  children: NodeElement | NodeElement[]
}

export const Modal = Portal<ModalProps>(PortalProviders, function Modal({ children, portal }) {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        portal.unmount()
      }
    }

    window.addEventListener('keydown', handleEsc)
    return () => {
      window.removeEventListener('keydown', handleEsc)
    }
  }, [])

  return Fade({
    in: true,
    children: Center({
      position: 'absolute',
      display: 'flex',
      flexDirection: 'column',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 9999999999,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      maxHeight: '100vh',
      maxWidth: '100vw',
      overflow: 'hidden',
      color: 'theme.text.primary',
      onClick: e => {
        if (e.target === e.currentTarget) {
          portal.unmount()
        }
      },
      children: Slide({
        in: true,
        props: {
          easing: easing.easeOut,
          direction: 'down',
        },
        children,
      }),
    }),
  })
})
