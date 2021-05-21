import { FC } from 'react';
import { Header } from '../../components/header/Header';
import { FlexboxGrid, Table, Icon } from 'rsuite';
import classes from './TalktoAttorney.module.scss';
import FlexboxGridItem from 'rsuite/lib/FlexboxGrid/FlexboxGridItem';
import { Link } from 'react-router-dom';

const { Column, HeaderCell, Cell } = Table;

const times: Array<Record<string, string>> = [
    { 1: '9:30am', 2: '9:30am', 3: '9:30am', 4: '9:30am', 5: '9:30am' },
    { 1: '9:45am', 2: '11am', 3: '9:45am', 4: '11am', 5: '9:45am' },
    { 1: '11.30am', 2: '11.15am', 3: '11am', 4: '11.15am', 5: '11am' },
    { 1: '11:45am', 2: '11.30am', 3: '11.15am', 4: '11.30am', 5: '11.15am' },
    { 1: '', 2: '11.45am', 3: '11.30am', 4: '11.45am', 5: '11.30am' },
    { 1: '', 2: '1.15pm', 3: '11.45am', 4: '1.15pm', 5: '11.45am' }
];

const TalktoAttorney:FC = () => {
    return (
        <>
            <Header title="Talk To Your Attorney" tagline="Have a question for your lawyer? No Problem, just schedule it below." />
            <FlexboxGrid className={ classes.appointment }>
                <FlexboxGridItem>
                    <p>1</p>
                </FlexboxGridItem>
                <FlexboxGridItem>Choose Appointment</FlexboxGridItem>
            </FlexboxGrid>
            <div className={ classes.consultation }>
                <div>
                    <strong>Consultation</strong>
                    <p>15 minutes</p>
                </div>
                <Link to="/">
                    <p>More Items</p>
                    <p><Icon icon="arrow-right" /></p>
                </Link>
            </div>
            <Table affixHeader affixHorizontalScrollbar className={ classes.table } data={ times } headerHeight={80} autoHeight>
                <Column minWidth={150} flexGrow={1} align="center">
                    <HeaderCell>
                        <p>Tomorrow</p>
                        <strong>Tuesday</strong>
                        <p>May 18th</p>
                    </HeaderCell>
                    <Cell dataKey="1" />
                </Column>
                <Column minWidth={150} flexGrow={1} align="center">
                    <HeaderCell>
                        <p>Tomorrow</p>
                        <strong>Tuesday</strong>
                        <p>May 18th</p>
                    </HeaderCell>
                    <Cell dataKey="2" />
                </Column>
                <Column minWidth={150} flexGrow={1} align="center">
                    <HeaderCell>
                        <p>Tomorrow</p>
                        <strong>Tuesday</strong>
                        <p>May 18th</p>
                    </HeaderCell>
                    <Cell dataKey="3" />
                </Column>
                <Column minWidth={150} flexGrow={1} align="center">
                    <HeaderCell>
                        <p>Tomorrow</p>
                        <strong>Tuesday</strong>
                        <p>May 18th</p>
                    </HeaderCell>
                    <Cell dataKey="4" />
                </Column>
                <Column minWidth={150} flexGrow={1} align="center">
                    <HeaderCell>
                        <p>Tomorrow</p>
                        <strong>Tuesday</strong>
                        <p>May 18th</p>
                    </HeaderCell>
                    <Cell dataKey="5" />
                </Column>
            </Table>
        </>
    );
}
export { TalktoAttorney };