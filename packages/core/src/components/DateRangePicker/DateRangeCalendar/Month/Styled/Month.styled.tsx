import { styled } from '@medly-components/utils';
import * as CalendarStyled from '../../../../Calendar/Calendar.styled';
import Text from '../../../../Text';

export const Wrapper = styled.div`
    position: relative;
    padding-top: 3.2rem;
    ${CalendarStyled.CalendarGrid} {
        padding: 1.6rem 3.2rem 3.2rem;
    }
    &:last-child {
        border-left: 1px solid #dfe4e9;
    }
    > div > strong {
        &${Text.Style} {
            margin-bottom: 1.6rem;
        }
    }
`;

export const MonthText = styled(Text)`
    display: block;
    width: 100%;
`;
