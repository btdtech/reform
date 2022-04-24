import { BasicUsageDemo } from './BasicUsageDemo';
import { Home } from './Home';
import { StepperFormDemo } from './StepperFormDemo';

export const routes = [
	{
		path: '',
		label: 'Home',
		component: Home,
	},
	{
		path: 'basic-usage',
		label: 'Basic Usage',
		component: BasicUsageDemo,
	},
	{
		path: 'stepper-form',
		label: 'Stepper Form',
		component: StepperFormDemo,
	},
];
