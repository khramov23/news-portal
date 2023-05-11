import { Component, type ErrorInfo, type ReactNode } from 'react'
import { PageError } from '@/widgets/PageError'

interface ErrorBoundaryProps {
    children: ReactNode
}

interface ErrorBoundaryState {
    hasError: boolean
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor (props: ErrorBoundaryProps) {
        super(props)
        this.state = { hasError: false }
    }

    static getDerivedStateFromError (_: Error) {
        return { hasError: true }
    }

    componentDidCatch (error: Error, errorInfo: ErrorInfo) {
        console.log(error, errorInfo)
    }

    render () {
        if (this.state.hasError) {
            return <PageError />
        }

        return this.props.children
    }
}
