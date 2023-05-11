import { componentRender } from '@/shared/lib/tests/componentRender'
import { EditProfileCard } from './EditProfileCard'
import { profileMock } from '@/entities/Profile'
import { profileReducer } from '../model/slice/profileSlice'
import userEvent from '@testing-library/user-event'
import { screen } from '@testing-library/react'
import { $api } from '@/shared/api/api'

const noAuthState = {
    initialState: {
        profile: {
            readonly: true,
            data: { id: '2', ...profileMock },
            form: { id: '2', ...profileMock }
        }
    },
    asyncReducers: {
        profile: profileReducer
    }
}
const authState = {
    initialState: {
        profile: {
            readonly: true,
            data: { id: '2', ...profileMock },
            form: { id: '2', ...profileMock }
        },
        user: {
            authData: {
                id: '2'
            }
        }
    },
    asyncReducers: {
        profile: profileReducer
    }
}

describe('features/EditProfileCard', () => {
    test('Отсутствие кнопки редактирования у чужого профиля', async () => {
        componentRender(<EditProfileCard profileId={'2'} />, noAuthState)
        expect(screen.queryByTestId('EditProfileCardHeader.EditButton')).not.toBeInTheDocument()
    })

    test('Появляется кнопка отмены редактирования', async () => {
        componentRender(<EditProfileCard profileId={'2'} />, authState)
        await userEvent.click(screen.getByTestId('EditProfileCardHeader.EditButton'))
        expect(screen.getByTestId('EditProfileCardHeader.CancelButton')).toBeInTheDocument()
    })

    test('При отмене значения должны возвращаться в прежнее состояние', async () => {
        componentRender(<EditProfileCard profileId={'2'} />, authState)
        await userEvent.click(screen.getByTestId('EditProfileCardHeader.EditButton'))

        await userEvent.clear(screen.getByTestId('ProfileCard.firstname'))
        await userEvent.clear(screen.getByTestId('ProfileCard.lastname'))

        await userEvent.type(screen.getByTestId('ProfileCard.firstname'), 'firstname')
        await userEvent.type(screen.getByTestId('ProfileCard.lastname'), 'lastname')

        expect(screen.getByTestId('ProfileCard.firstname')).toHaveValue('firstname')
        expect(screen.getByTestId('ProfileCard.lastname')).toHaveValue('lastname')

        await userEvent.click(screen.getByTestId('EditProfileCardHeader.CancelButton'))
        expect(screen.getByTestId('ProfileCard.firstname')).toHaveValue(profileMock.firstname)
        expect(screen.getByTestId('ProfileCard.lastname')).toHaveValue(profileMock.lastname)
    })

    test('Должны появиться ошибка валидации на firstname и lastname', async () => {
        componentRender(<EditProfileCard profileId={'2'} />, authState)
        await userEvent.click(screen.getByTestId('EditProfileCardHeader.EditButton'))

        await userEvent.clear(screen.getByTestId('ProfileCard.firstname'))

        await userEvent.click(screen.getByTestId('EditProfileCardHeader.SaveButton'))

        expect(screen.getByTestId('EditProfileCard.Error.Paragraph')).toBeInTheDocument()
    })

    test('Должен отправиться запрос на сервер, если нет ошибок валидации', async () => {
        componentRender(<EditProfileCard profileId={'2'} />, authState)
        const mockedPutRequest = jest.spyOn($api, 'put')

        await userEvent.click(screen.getByTestId('EditProfileCardHeader.EditButton'))

        await userEvent.clear(screen.getByTestId('ProfileCard.firstname'))
        await userEvent.type(screen.getByTestId('ProfileCard.firstname'), 'newFirstname')

        await userEvent.click(screen.getByTestId('EditProfileCardHeader.SaveButton'))

        expect(mockedPutRequest).toHaveBeenCalled()
    })
})
