import { createContext, ReactNode, useContext, useEffect, useMemo, useRef, useState } from 'react'

type SpringType = typeof import('@react-spring/web')
type GestureType = typeof import('@use-gesture/react')

interface AnimationContextPayload {
    Gesture?: GestureType
    Spring?: SpringType
    isLoaded?: boolean
}

interface AnimationProviderProps {
    children?: ReactNode
}

const getAsyncAnimationModules = async () => {
    return await Promise.all([
        import('@use-gesture/react'),
        import('@react-spring/web')
    ])
}

const AnimationContext = createContext<AnimationContextPayload>({})

export const useAnimationLibs = () => useContext(AnimationContext) as Required<AnimationContextPayload>

export const AnimationProvider = (props: AnimationProviderProps) => {
    const { children } = props

    const SpringRef = useRef<SpringType>()
    const GestureRef = useRef<GestureType>()
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        getAsyncAnimationModules().then(([gesture, spring]) => {
            GestureRef.current = gesture
            SpringRef.current = spring
            setIsLoaded(true)
        })
    }, [])

    const defaultValue = useMemo<AnimationContextPayload>(() => ({
        Gesture: GestureRef.current,
        Spring: SpringRef.current,
        isLoaded
    }), [isLoaded])

    return (
        <AnimationContext.Provider value={defaultValue}>
            {children}
        </AnimationContext.Provider>
    )
}
