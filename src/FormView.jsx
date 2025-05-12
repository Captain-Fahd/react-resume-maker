import {useState} from 'react';
import PersonalDetails from "./components/PersonalDetails.jsx";
import ExperienceInfo from "./components/ExperienceInfo.jsx";
import EducationInfo from "./components/EducationInfo.jsx";
import Navbar from "./Navbar.jsx";

export default function FormView() {
    const [page, setPage] = useState(0);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        degree: '',
        school: '',
        prevJob: '',
        nextJob: '',
    });

    const FormTitles = ['Personal Information', 'Education Information', 'Experience Information'];

    const PageDisplay = () => {
        if (page === 0) {
            return <PersonalDetails />
        } else if (page === 1) {
            return <EducationInfo />
        } else {
            return <ExperienceInfo />;
        }
    };

    return (
        <>
            <Navbar />
            <div className="progress-bar">
                <div
                    style={{ width: page === 0 ? '0%': page === 1 ? '33.3%' : page === 2 ? '66.6%' : '100%' }}>
                </div>
            </div>

        </>
    )

}