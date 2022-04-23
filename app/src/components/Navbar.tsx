import { AppBar, Button, IconButton, Toolbar } from '@mui/material';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { SideDrawer } from './SideDrawer';
import { useState } from 'react';

export const Navbar = () => {
	const [open, setOpen] = useState<boolean>(false);

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	return (
		<>
			<AppBar>
				<Toolbar>
					<IconButton color="inherit" onClick={handleDrawerOpen}>
						<MenuRoundedIcon />
					</IconButton>
					<Button color="inherit">Re:Form</Button>
				</Toolbar>
			</AppBar>
			<Toolbar />
			<SideDrawer open={open} onDrawerClose={handleDrawerClose} />
		</>
	);
};
