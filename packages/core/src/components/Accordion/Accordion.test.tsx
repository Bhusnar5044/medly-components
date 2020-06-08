import { fireEvent, render, waitFor } from '@test-utils';
import React from 'react';
import { Accordion } from './Accordion';

describe('Accordion component', () => {
    const handleToggleMock = jest.fn(),
        renderAccordion = () =>
            render(
                <Accordion>
                    <Accordion.Title>List Of Components</Accordion.Title>
                    <Accordion.Content>Avatar</Accordion.Content>
                </Accordion>
            );
    it('should render properly', () => {
        const { container } = renderAccordion();
        expect(container).toMatchSnapshot();
    });

    it('should render children when accordion is clicked', async () => {
        const { getByText, queryByText } = renderAccordion();
        fireEvent.click(getByText(/List Of Components/));
        await waitFor(() => expect(getByText(/Avatar/)).toBeInTheDocument());
        fireEvent.click(getByText(/List Of Components/));
        expect(queryByText(/Avatar/)).not.toBeInTheDocument();
    });

    it('should invoke handleToggle when accordion is clicked', () => {
        const { getByText, queryByText } = render(
            <Accordion>
                <Accordion.Title onToggle={handleToggleMock}>List Of Components</Accordion.Title>
                <Accordion.Content>Avatar</Accordion.Content>
            </Accordion>
        );
        fireEvent.click(getByText(/List Of Components/));
        expect(handleToggleMock).toHaveBeenCalled();
        expect(queryByText(/Avatar/)).not.toBeInTheDocument();
    });
});
