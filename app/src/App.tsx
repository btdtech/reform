import { Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { routes } from './routes/routes';

export const App = () => {
	return (
		<>
			<Navbar />
			<Routes>
				{routes.map(({ path, component: Component }) => {
					return <Route element={<Component />} key={path} path={path} />;
				})}
			</Routes>
		</>
	);
};
