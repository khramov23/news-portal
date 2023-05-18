import { type FC, type ReactNode, useEffect } from 'react'

import { type Reducer } from '@reduxjs/toolkit'
import { useDispatch, useStore } from 'react-redux'

import { type ReduxStoreWithManager, StateSchema, type StateSchemaKey } from '@/app/providers/StoreProvider'

export type ReducersList = {
    [name in StateSchemaKey]?: Reducer<NonNullable<StateSchema[name]>>
}

interface DynamicModuleLoaderProps {
    children: ReactNode
    reducers: ReducersList
    removeAfterUnmount?: boolean
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props) => {
    const { children, reducers, removeAfterUnmount } = props
    const dispatch = useDispatch()
    const store = useStore() as ReduxStoreWithManager

    useEffect(() => {
        const mountedReducers = store.reducerManager.getReducerMap()

        const isReducerMounted = (name: string) => {
            for (const mountedReducerName of Object.keys(mountedReducers)) {
                if (mountedReducerName === name) { return true }
            }
            return false
        }

        Object.entries(reducers).forEach(([name, reducer]) => {
            if (!isReducerMounted(name)) {
                store.reducerManager.add(name as StateSchemaKey, reducer)
                dispatch({ type: `@INIT ${name} reducer` })
            }
        })

        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(([name]) => {
                    store.reducerManager.remove(name as StateSchemaKey)
                    dispatch({ type: `@DESTROY ${name} reducer` })
                })
            }
        }
        // eslint-disable-next-line
    }, [])

    return (
        <>
            {children}
        </>
    )
}
