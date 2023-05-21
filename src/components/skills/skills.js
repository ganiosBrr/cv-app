import { useDispatch, useSelector} from "react-redux";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

import Button from "../button/button.js";
import { addSkill, fetchSkills, toggleForm } from "../../features/skills/skillsSlice.js";
import "./skills.scss";
import { useFormik } from "formik";
import Error from "../../shared/error/error.js";

const Skills = () => {
    const dispatch = useDispatch();

    const formRender = useSelector((state) => state.skills.formRender);
    const skills = useSelector((state) => state.skills.skills);

    useEffect(() => {
        dispatch(fetchSkills());
    }, [dispatch]);
   
    const handleFormToggle = () => {
        dispatch(toggleForm());
    }

    const formik = useFormik({
        initialValues: {
            skillName: "",
            skillRange: "",
        },
        validate: (values) => {
            const errors = {};
            if (!values.skillName) {
                errors.skillName = "Skill name is a required field.";
            }

            if (!values.skillRange) {
                errors.skillRange = "Skill range is a required field.";
            } else if (isNaN(values.skillRange)) {
                errors.skillRange = "Skill range must be a 'number' type.";
            } else if (values.skillRange < 10) {
                errors.skillRange = "Skill range must be greater than or equal to 10";
            } else if (values.skillRange > 100) {
                errors.skillRange = "Skill range must be less than or equal to 100";
            }

            return errors;
        },
        onSubmit: (values) => {
           dispatch(addSkill(values));
           formik.handleReset();
        },
    });

    return(
        <>
            <Button 
                className="btn btn-primary btn-primary--edit"
                icon={<FontAwesomeIcon icon={faPenToSquare} />}
                text="Open edit"
                onClick={handleFormToggle}
            />
            {formRender && (
                <form action="#" className="form" onSubmit={formik.handleSubmit}>
                    <div>
                        <label htmlFor="skill-name">Skill name: </label>
                        <input 
                            id="skill-name"
                            name="skillName"
                            type="text" 
                            placeholder="Enter skill name"
                            className={formik.errors.skillName ? "form__input error" : "form__input"}
                            onChange={formik.handleChange}
                            onBlur = {formik.handleBlur}
                            value={formik.values.skillName}
                        />
                    </div>
                    {formik.touched.skillName && formik.errors.skillName && (
                        <div className="form__error">{formik.errors.skillName}</div>
                    )}
                    <div>
                        <label htmlFor="skill-range">Skill range: </label>
                        <input 
                            id="skill-range" 
                            type="text"
                            name="skillRange" 
                            placeholder="Enter skill range"
                            className={formik.errors.skillRange ? "form__input error" : "form__input"}
                            onChange={formik.handleChange}
                            onBlur = {formik.handleBlur}
                            value={formik.values.skillRange} 
                        />
                        {formik.errors.skillRange && (
                            <Error message={formik.errors.skillRange} className="form__error"/>
                        )}
                    </div>
                    <div>
                    <Button 
                        className={formik.isValid ? "btn btn-primary" : "btn btn-primary disabled"}
                        text="Add skill"
                        disabled={!formik.isValid}
                        type="submit"
                    />
                    </div>
                </form>
            )}

            {skills.length > 0 && (
                <ul className="skills-list">
                    {skills.map(({skill}, id) => (
                    <li 
                        key={id} 
                        style={{width:`${skill.skillRange}%`}}
                        className="skills-list__item"   
                    >
                        {skill.skillName}
                    </li>
                    ))}
              </ul>
            )}

            <div className="scale">
                <div className="scale-range">
                    <span className="range beginner-range"></span>
                    <span className="range proficient-range"></span>
                    <span className="range expert-range"></span>
                    <span className="range master-range"></span>
                </div>
                <div className="scale-level">
                    <span className="level beginner-level">Beginner</span>
                    <span className="level proficient-level">Proficient</span>
                    <span className="level expert-level">Expert</span>
                    <span className="level master-level">Master</span>
                </div>
            </div>
        </>
    );
}

export default Skills;