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
        <div className="form">
            <Navbar />
            <div className="progress-bar">
                <div
                    style={{ width: page === 0 ? '33.3%': page === 1 ? '66.6%' : '100%' }}
                ></div>
            </div>
            <div className="form-container">
                <div className="header">
                    <h1>{FormTitles[page]}</h1>
                </div>
                <div className="body">{PageDisplay()}</div>
                <div className="footer">
                    <button
                        disabled={page == 0}
                        onClick={() => {
                            setPage((currPage) => currPage - 1)
                        }}
                    >
                        Prev
                    </button>
                    <button
                        onClick={() => {
                            if (page === FormTitles.length - 1) {
                                alert("FORM SUBMITTED");
                                console.log(formData);
                            } else {
                                setPage((currPage) => currPage + 1);
                            }

                        }}
                    >
                        {page === FormTitles.length - 1 ? "Submit" : "Next"}
                    </button>
                </div>
            </div>
        </div>
    )
}