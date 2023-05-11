import { type FC, memo, type ReactNode } from 'react'

import { Popover as HPopover } from '@headlessui/react'

import styles from './Popover.module.scss'
import popupStyles from '../../styles/Popups.module.scss'
import { cls } from '@/shared/lib/classNames'
import { type PopupDirection } from '../../styles/Popup.types'

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
            <HPopover.Button className={popupStyles.trigger}>
                {trigger}
            </HPopover.Button>
            <HPopover.Panel className={cls(styles.panel, popupStyles[direction])}>
                {children}
            </HPopover.Panel>
        </HPopover>
    )
})
