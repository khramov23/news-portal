import { type FC } from 'react'
import { Flex, type FlexProps } from '../Flex/Flex'

type HStackProps = Omit<FlexProps, 'direction'>

export const VStack: FC<HStackProps> = (props) => {
    return (
        <Flex {...props} direction='column'>
            {props.children}
        </Flex>
    )
}
