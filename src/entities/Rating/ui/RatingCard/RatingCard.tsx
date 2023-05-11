import { FC, FormEventHandler, memo, useCallback, useMemo, useState } from 'react'

import { cls } from '@/shared/lib/classNames'
import { Card } from '@/shared/ui/Card/Card'
import { HStack, VStack } from '@/shared/ui/Stack'
import { Text } from '@/shared/ui/Text/Text'
import { StarRating } from '@/shared/ui/StarRating/StarRating'
import { Modal } from '@/shared/ui/Modal/Modal'
import { useTranslation } from 'react-i18next'
import { Input } from '@/shared/ui/Input/Input'
import { Button, ButtonTheme } from '@/shared/ui/Button/Button'
import { useMatchMedia } from '@/shared/hooks/useMatchMedia'
import { Drawer } from '@/shared/ui/Drawer/Drawer'

interface RatingCardProps {
    className?: string
    title?: string
    selectedStars?: number
    feedbackTitle?: string
    onCancel?: (starsCount: number) => void
    onAccept?: (starsCount: number, feedback?: string) => void
}

export const RatingCard: FC<RatingCardProps> = memo((props) => {
    const { t } = useTranslation()

    const {
        className,
        title,
        selectedStars,
        feedbackTitle,
        onAccept,
        onCancel
    } = props

    const { mobile } = useMatchMedia()

    const [isModal, setIsModal] = useState(false)
    const [starsCount, setStarsCount] = useState(0)
    const [feedback, setFeedback] = useState('')

    const onCloseModal = useCallback(() => {
        setIsModal(false)
    }, [])

    const onSelectStars = useCallback((starsCount: number) => {
        setStarsCount(starsCount)
        if (feedbackTitle) {
            setIsModal(true)
        } else {
            onAccept?.(starsCount)
        }
    }, [feedbackTitle, onAccept])

    const onSendFeedback = useCallback(() => {
        onCloseModal()
        onAccept?.(starsCount, feedback)
    }, [feedback, onAccept, onCloseModal, starsCount])

    const onFeedbackChange = useCallback((value: string) => {
        setFeedback(value)
    }, [])

    const onCancelFeedback = useCallback(() => {
        onCloseModal()
        onCancel?.(starsCount)
    }, [onCancel, onCloseModal, starsCount])

    const onFormSubmit = useCallback<FormEventHandler<HTMLFormElement>>((e) => {
        e.preventDefault()
        onSendFeedback()
    }, [onSendFeedback])

    const modalContent = (isMobile: boolean) => (
        <form onSubmit={onFormSubmit}>
            <VStack max align={'center'} gap={16}>
                <Text title={feedbackTitle} />
                <Input
                    placeholder={t('Ваш отзыв')}
                    value={feedback}
                    onChange={onFeedbackChange}
                    fullWidth={isMobile}
                />
                <HStack max justify={'end'} gap={8}>
                    {!isMobile && <Button
                        theme={ButtonTheme.OUTLINE_ERROR}
                        onClick={onCancelFeedback}
                    >
                        {t('Отмена')}
                    </Button>}
                    <Button fullWidth={isMobile} type={'submit'}>{t('Отправить')}</Button>
                </HStack>
            </VStack>
        </form>
    )

    return (
        <Card className={cls(styles.ratingCard, className)}>
            <VStack align={'center'} gap={8} justify='center'>
                <Text title={title} />
                <StarRating
                    selectedStars={selectedStars}
                    onSelect={onSelectStars}
                />
            </VStack>

            {mobile
                ? (
                    <Drawer isOpen={isModal} onClose={onCloseModal} lazy>
                        {modalContent(true)}
                    </Drawer>
                )
                : (
                    <Modal isOpen={isModal} onClose={onCloseModal} lazy>
                        {modalContent(false)}
                    </Modal>
                )
            }

        </Card>
    )
})
