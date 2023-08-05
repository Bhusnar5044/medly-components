import { WithStyle } from '@medly-components/utils';
import type { FC } from 'react';
import { memo, useEffect, useState } from 'react';
import { Section } from './Accordion.styled';
import { AccordionContext } from './AccordionContext';
import Content from './Content';
import Header from './Header';
import { AccordionProps, StaticProps } from './types';

const Component: FC<AccordionProps> = memo(({ active, defaultActive, onChange, ...restProps }) => {
    const activeState = useState(false);

    useEffect(() => {
        activeState[1](defaultActive!);
    }, [defaultActive]);

    return (
        <AccordionContext.Provider value={active !== undefined && onChange !== undefined ? [active, onChange] : activeState}>
            <Section {...restProps} />
        </AccordionContext.Provider>
    );
});

Component.defaultProps = {
    defaultActive: false
};
Component.displayName = 'Accordion';

export const Accordion: FC<AccordionProps> & StaticProps & WithStyle = Object.assign(Component, {
    Header,
    Content,
    Context: AccordionContext,
    Style: Section
});
