import { type FC, type FormEvent, memo } from 'react'

import styles from './AddCommentForm.module.scss'
import { cls } from '@/shared/lib/classNames'
import { Input } from '@/shared/ui/Input/Input'
import { useTranslation } from 'react-i18next'
import { Button } from '@/shared/ui/Button/Button'

interface AddCommentFormProps {
    className?: string
    text: string
    onChangeText: (value: string) => void
    onSendComment: () => void
}

export const AddCommentForm: FC<AddCommentFormProps> = memo((props) => {
    const { className, text, onChangeText, onSendComment } = props
    const { t } = useTranslation('article_details')

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        onSendComment()
    }

    return (
        <form className={cls(styles.addCommentForm, className)} onSubmit={onSubmit}>
            <Input
                className={styles.input}
                placeholder={t('Введите текст комментария')}
                value={text}
                onChange={onChangeText}
            />
            <Button>{t('Отправить')}</Button>
        </form>
    )
})
