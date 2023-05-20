import { Fragment } from 'react'

import { Listbox as HListBox, Transition } from '@headlessui/react'

import ChevronTop from '@/shared/assets/icons/chevron-top.svg'
import OkIcon from '@/shared/assets/icons/ok.svg'
import { cls } from '@/shared/lib/classNames'

import styles from './ListBox.module.scss'
import { Button } from '../../../Button/Button'
import { Icon } from '../../../Icon/Icon'
import { HStack } from '../../../Stack'
import { Text } from '../../../Text/Text'
import { type PopupDirection } from '../../styles/Popup.types'
import popupStyles from '../../styles/Popups.module.scss'

interface ListBoxItem<T extends string> {
    content: string
    value: T
    disabled?: boolean
}

export interface ListBoxProps<T extends string> {
    className?: string
    items?: Array<ListBoxItem<T>>
    value?: T
    defaultValue?: T
    onChange?: (value: T) => void
    readonly?: boolean
    label?: string
    direction?: PopupDirection
}

export const ListBox = <T extends string>(props: ListBoxProps<T>) => {
    const {
        className,
        defaultValue,
        value,
        onChange = () => {},
        items,
        readonly,
        label,
        direction = 'bottom_left'
    } = props

    return (
        <HStack gap={8} align={'center'}>
            {label && <span>{label + '>'}</span>}
            <HListBox
                as={`${'div'}`}
                value={value ?? defaultValue}
                onChange={onChange}
                className={cls(className, popupStyles.popup)}
                disabled={readonly}
            >
                <HListBox.Button
                    as={`${'div'}`}
                    className={popupStyles.trigger}
                >
                    {({ open }) => (
                        <Button>
                            <HStack align={'center'} justify={'around'}>
                                {value}
                                <Icon
                                    Svg={ChevronTop}
                                    className={cls(
                                        styles.chevron,
                                        { [styles.iconRotated]: !open }
                                    )}
                                    size={30}
                                />
                            </HStack>
                        </Button>
                    )}
                </HListBox.Button>
                <Transition
                    as={Fragment}
                    leave={styles.leave}
                    leaveFrom={styles.leaveFrom}
                    leaveTo={styles.leaveTo}
                >
                    <HListBox.Options className={cls(styles.options, popupStyles[direction])}>
                        {items?.map((item) => (
                            <HListBox.Option
                                key={item.value}
                                value={item.value}
                                disabled={item.disabled}
                                as={Fragment}
                            >
                                {({ active, selected }) => (
                                    <li className={cls(styles.option, { [styles.active]: active })}>
                                        <HStack gap={8} className={styles.optionWrapper}>
                                            {selected && <Icon className={styles.icon} Svg={OkIcon} size={20}/>}
                                            <Text text={item.content}/>
                                        </HStack>
                                    </li>
                                )}
                            </HListBox.Option>
                        ))}
                    </HListBox.Options>
                </Transition>
            </HListBox>
        </HStack>

    )
}
