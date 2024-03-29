import { type FC, memo, type ReactNode } from 'react'

import { Popover as HPopover } from '@headlessui/react'

import { cls } from '@/shared/lib/classNames'

import styles from './Popover.module.scss'
import { type PopupDirection } from '../../styles/Popup.types'
import popupStyles from '../../styles/Popups.module.scss'

interface PopoverProps {
    className?: string
    trigger: ReactNode
    direction?: PopupDirection
    children: ReactNode
}

export const Popover: FC<PopoverProps> = memo((props) => {
    const { className, trigger, direction = 'bottom_right', children } = props
    return (
        <HPopover className={cls(className, popupStyles.popup)}>
            <HPopover.Button as={`${'div'}`} className={popupStyles.trigger}>
                {trigger}
            </HPopover.Button>
            <HPopover.Panel className={cls(styles.panel, popupStyles[direction])}>
                {children}
            </HPopover.Panel>
        </HPopover>
    )
})
