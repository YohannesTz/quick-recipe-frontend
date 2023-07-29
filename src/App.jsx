import "wired-elements";
import { NavbarComponent } from './components/NavbarComponent';
import { Outlet } from "react-router-dom";

function App() {

	return (
		<div className="bg-gray-900 text-white">
			<NavbarComponent />
			<div className="flex-col h-screen mt-10 bg-gray-900 ">
				<Outlet />
			</div>
		</div>
	)
}

export default App
