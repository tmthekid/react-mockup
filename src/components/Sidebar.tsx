import { FC, useState } from 'react';
import { Sidenav, Nav, ButtonToolbar, IconButton, Icon  } from 'rsuite';
import { SVGIcon } from 'rsuite/lib/@types/common';
import { IconNames } from 'rsuite/lib/Icon';
import { AppContext } from '../AppContext';
import { NavLink } from 'react-router-dom';

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
	},
    {
		eventKey: '9',
		name: 'Logout',
		icon: 'sign-out',
		to: '/signout'
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
				({ isMobile, expanded, setExpanded }) => <Sidenav expanded={ !isMobile || expanded } activeKey={activeKey} onSelect={handleActive}>
					<Sidenav.Body>
						<Nav>
							{ navItems.map(i => <NavLink to={i.to} key={i.eventKey}><Nav.Item eventKey={i.eventKey} icon={<Icon icon={i.icon} />}>
								{ i.name }
							</Nav.Item></NavLink>) }
						</Nav>
						{ isMobile && expanded && <ButtonToolbar style={{ position: 'absolute', top: '10%', left: '95%' }}>
                        <IconButton onClick={ () => setExpanded(s => !s) } size="sm" circle icon={<Icon icon="caret-left" />} />
                    </ButtonToolbar>}
					</Sidenav.Body>
				</Sidenav>
			}
		</AppContext.Consumer>
    );
}
export { Sidebar }