import {
	Divider,
	Drawer,
	IconButton,
	List,
	ListItem,
	ListItemText,
} from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { routes } from '../routes/routes';
import { useNavigate } from 'react-router-dom';

const DrawerHeader = styled('div')(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	padding: theme.spacing(0, 1),
	// necessary for content to be below app bar
	...theme.mixins.toolbar,
	justifyContent: 'flex-end',
}));

export interface SideDrawerProps {
	drawerWidth?: number;
	open: boolean;
	onDrawerClose: () => void;
}

export const SideDrawer = ({
	drawerWidth = 240,
	open,
	onDrawerClose,
}: SideDrawerProps) => {
	const theme = useTheme();

	const navigate = useNavigate();

	return (
		<Drawer
			sx={{
				width: drawerWidth,
				flexShrink: 0,
				'& .MuiDrawer-paper': {
					width: drawerWidth,
					boxSizing: 'border-box',
				},
			}}
			variant="persistent"
			anchor="left"
			open={open}
		>
			<DrawerHeader>
				<IconButton onClick={onDrawerClose}>
					{theme.direction === 'ltr' ? (
						<ChevronLeftIcon />
					) : (
						<ChevronRightIcon />
					)}
				</IconButton>
			</DrawerHeader>
			<Divider />
			<List>
				{routes.map(({ path, label }) => {
					return (
						<ListItem
							key={path}
							button
							onClick={() => {
								navigate(path);
								onDrawerClose();
							}}
						>
							<ListItemText primary={label} />
						</ListItem>
					);
				})}
			</List>
		</Drawer>
	);
};
