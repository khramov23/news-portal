import { Button } from 'shared/ui/Button/Button'
import { counterActions } from '../model/slice/counterSlice'
import { useDispatch, useSelector } from 'react-redux'
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue'
import { useTranslation } from 'react-i18next'

export const Counter = () => {
    const dispatch = useDispatch()
    const counterValue = useSelector(getCounterValue)
    const { t } = useTranslation()

    const increment = () => {
        dispatch(counterActions.increment())
    }

    const decrement = () => {
        dispatch(counterActions.decrement())
    }

    return (
        <div>
            <h1 data-testid='counterValue'>{counterValue}</h1>
            <Button data-testid='buttonIncrement' onClick={increment}>{t('инкремент')}</Button>
            <Button data-testid='buttonDecrement' onClick={decrement}>{t('декремент')}</Button>
        </div>
    )
}
