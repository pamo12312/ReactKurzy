import './index.css';
import { CourseList } from "./components/Courses.jsx";
import { NavBar } from "./components/NavBar.jsx";

function App() {
    return (
        <>
            <NavBar />
            <CourseList />
        </>
    );
}

export default App;
