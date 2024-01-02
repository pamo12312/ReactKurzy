import { Button } from './Button.jsx';

const coursesData = [
    {
        "name": "Course 1",
        "speaker": "Dr. Smith",
        "location": "Los Angeles",
        "date": "2023-03-21",
        "isNew": true
    },
    {
        "name": "Course 2",
        "speaker": "Prof. Johnson",
        "location": "Los Angeles",
        "date": "2023-08-26",
        "isNew": true
    },
    {
        "name": "Course 3",
        "speaker": "Dr. Brown",
        "location": "Chicago",
        "date": "2023-08-23",
        "isNew": true
    },
    {
        "name": "Course 4",
        "speaker": "Dr. Williams",
        "location": "New York",
        "date": "2023-11-03",
        "isNew": true
    },
    {
        "name": "Course 5",
        "speaker": "Prof. Davis",
        "location": "Houston",
        "date": "2023-11-05",
        "isNew": false
    },
    {
        "name": "Course 6",
        "speaker": "Prof. Davis",
        "location": "New York",
        "date": "2023-11-10",
        "isNew": true
    },
    {
        "name": "Course 7",
        "speaker": "Dr. Williams",
        "location": "New York",
        "date": "2023-09-22",
        "isNew": true
    },
];

const Course = ({ course }) => {
    const { name, speaker, location, date, isNew } = course;

    return (
        <div className="courses-card">
            <div className="new">
                <h2>{name}</h2>
                {isNew && <p className="newcours"><b>New</b></p>}</div>
            <p className="location">Location: {location}</p>
            <p className="date">Date: {new Date(date).toLocaleDateString()}</p>
            <Button name={name} />

            <p>🧍Speaker: {speaker}</p>


        </div>
    );
};

export const CourseList = () => {
    return (

        <div className="courses-container">
        {coursesData.map((course, index) => (
                    <Course key={index} course={course} />
                ))}
            </div>

    );
};

