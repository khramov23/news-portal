import { Fragment } from 'react'
import { Listbox as HListBox, Transition } from '@headlessui/react'

import styles from './ListBox.module.scss'
import { cls } from 'shared/lib/classNames'
import { Icon } from '../Icon/Icon'
import OkIcon from 'shared/assets/icons/ok.svg'
import ChevronTop from 'shared/assets/icons/chevron-top.svg'
import { HStack } from '../Stack'
import { Text } from '../Text/Text'
import { Button } from '../Button/Button'

interface ListBoxItem<T extends string> {
    content: string
    value: T
    disabled?: boolean
}

export type DropdownDirection = 'top_left' | 'bottom_left' | 'top_right' | 'bottom_right'

export interface ListBoxProps<T extends string> {
    className?: string
    items?: Array<ListBoxItem<T>>
    value?: T
    defaultValue?: T
    onChange?: (value: T) => void
    readonly?: boolean
    label?: string
    direction?: DropdownDirection
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
                className={cls(className, styles.listBox)}
                disabled={readonly}
            >
                <HListBox.Button
                    className={styles.trigger}
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
                                    size={'l'}
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
                    <HListBox.Options className={cls(styles.options, styles[direction])}>
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
                                            {selected && <Icon className={styles.icon} Svg={OkIcon} size={'m'}/>}
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
