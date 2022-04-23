import { BasicUsage } from './BasicUsage';
import { Home } from './Home';

export const routes = [
	{
		path: '',
		label: 'Home',
		component: Home,
	},
	{
		path: 'basic-usage',
		label: 'Basic Usage',
		component: BasicUsage,
	},
];
