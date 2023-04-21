import { screen } from '@testing-library/react'
import { componentRender } from 'shared/lib/tests/componentRender'
import { Counter } from '../ui/Counter'
import { type StateSchema } from 'app/providers/StoreProvider'
import userEvent from '@testing-library/user-event'

describe('Button', () => {
    test('rendering counter value', () => {
        const initialState: DeepPartial<StateSchema> = {
            counter: { value: 10 }
        }
        componentRender(<Counter />, { initialState })
        expect(screen.getByTestId('counterValue')).toHaveTextContent('10')
    })

    test('increment', () => {
        const initialState: DeepPartial<StateSchema> = {
            counter: { value: 10 }
        }
        componentRender(<Counter />, { initialState })
        userEvent.click(screen.getByTestId('buttonIncrement'))
        expect(screen.getByTestId('counterValue')).toHaveTextContent('11')
    })

    test('decrement', () => {
        const initialState: DeepPartial<StateSchema> = {
            counter: { value: 10 }
        }
        componentRender(<Counter />, { initialState })
        userEvent.click(screen.getByTestId('buttonDecrement'))
        expect(screen.getByTestId('counterValue')).toHaveTextContent('9')
    })
})
