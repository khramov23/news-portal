import { FC, memo, useState } from 'react'

import styles from './StarRating.module.scss'
import { cls } from '@/shared/lib/classNames'
import { HStack } from '../Stack'
import { Icon } from '@/shared/ui/Icon/Icon'
import StarIcon from '@/shared/assets/icons/star.svg'

interface StarRatingProps {
    className?: string
    selectedStars?: number
    onSelect?: (star: number) => void
}

const starsCounts = [1, 2, 3, 4, 5]

export const StarRating: FC<StarRatingProps> = memo((props) => {
    const { className, selectedStars, onSelect } = props

    const [currentStars, setCurrentStars] = useState(0)
    const [isSelected, setIsSelected] = useState(Boolean(selectedStars))

    const onMouseEnter = (star: number) => () => {
        if (!isSelected) {
            setCurrentStars(star)
        }
    }

    const onMouseLeave = () => {
        if (!isSelected) {
            setCurrentStars(0)
        }
    }

    const onClick = (star: number) => () => {
        if (!isSelected) {
            setCurrentStars(star)
            setIsSelected(true)
            onSelect?.(star)
        }
    }

    return (
        <HStack
            className={cls(styles.starRating, className)}
            align={'center'}
        >
            {starsCounts.map(starsCount =>
                <Icon
                    key={starsCount}
                    Svg={StarIcon}
                    size={'xxl'}
                    className={cls(
                        styles.icon,
                        {
                            [styles.hovered]: starsCount <= currentStars,
                            [styles.selected]: isSelected
                        }
                    )}
                    onMouseEnter={onMouseEnter(starsCount)}
                    onMouseLeave={onMouseLeave}
                    onClick={onClick(starsCount)}
                />
            )}
        </HStack>
    )
})
