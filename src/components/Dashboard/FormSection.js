import React from 'react';
import "./form.css"
const FormSection = ({
    placeholder,
    type,
    id,
    name,
    value,
    onChange,
    onBlur,
    errorMessage,
}) => {
    return (
        <>
            <div className="input">
                <input
                    className='i-f'
                    style={{ width: "100%" }}
                    placeholder={placeholder}
                    type={type}
                    id={id}
                    name={name}
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                />
                {errorMessage && (
                    <div className="error-message" style={{ color: "red" }}>{errorMessage}</div>
                )}
            </div>
        </>
    );
};

export default FormSection;
