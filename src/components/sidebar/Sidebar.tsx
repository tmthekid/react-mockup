import { FC, useState } from 'react';
import { Sidenav, Nav, ButtonToolbar, IconButton, Icon  } from 'rsuite';
import { SVGIcon } from 'rsuite/lib/@types/common';
import { IconNames } from 'rsuite/lib/Icon';
import { AppContext } from '../../AppContext';
import { NavLink } from 'react-router-dom';
import classes from './Sidebar.module.scss';

export const navItems: Array<{ eventKey: string; name: string; icon: IconNames | SVGIcon, to: string }> = [
	{
		eventKey: '1',
		name: 'Dashboard',
		icon: 'dashboard',
		to: '/'
	},
	{
		eventKey: '2',
		name: 'Talk to your Attorney',
		icon: 'phone-square',
		to: '/talk-to-attorney'
	},
	{
		eventKey: '3',
		name: 'Document Review',
		icon: 'list-alt',
		to: '/document-review'
	},
    {
		eventKey: '4',
		name: 'Template Library',
		icon: 'copy-o',
		to: '/template-library'
	},
    {
		eventKey: '5',
		name: 'Demand Letter',
		icon: 'file-text',
		to: '/demand-letter'
	},
    {
		eventKey: '6',
		name: 'Newsletter',
		icon: 'newspaper-o',
		to: '/newsletter'
	},
    {
		eventKey: '7',
		name: 'Settings',
		icon: 'gear-circle',
		to: '/settings'
	},
    {
		eventKey: '8',
		name: 'Feedback',
		icon: 'bullhorn',
		to: '/feedback'
	}
];

const Sidebar:FC = () => {
    const [activeKey, setActiveKey] = useState<string>('1');

    const handleActive = (eventKey: string) => {
		setActiveKey(eventKey);
	}

    return (
		<AppContext.Consumer>
			{
				({ isMobile, expanded, setExpanded, user, setUser }) => <Sidenav className={ classes.sidebar } expanded={ !isMobile || expanded }>
					<Sidenav.Body>
						<Nav>
							{ navItems.map(i => <NavLink to={i.to} key={i.eventKey}>
								<Nav.Item componentClass="p" onSelect={ handleActive } active={ activeKey === i.eventKey } eventKey={ i.eventKey } icon={ <Icon icon={i.icon} /> }>
									{ i.name }
								</Nav.Item>
							</NavLink>) }
							{ user && <Nav.Item className={ classes.sidebar__logout } onClick={() => setUser(null)}><Icon icon="sign-out" /> Logout</Nav.Item> }
						</Nav>
						{ isMobile && expanded && 
							<ButtonToolbar className={ classes.sidebar__btn }>
								<IconButton onClick={ () => setExpanded(s => !s) } size="sm" circle icon={<Icon icon="caret-left" />} />
							</ButtonToolbar> 
						}
					</Sidenav.Body>
				</Sidenav>
			}
		</AppContext.Consumer>
    );
}
export { Sidebar }