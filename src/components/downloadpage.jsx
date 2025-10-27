import React from 'react';
import styled from 'styled-components';

const Radio = ({ options = [], value, onChange, className = '' }) => {
  return (
    <StyledWrapper className={className}>
      <div className="filter-switch">
        {options.map((option, index) => (
          <React.Fragment key={option.value}>
            <input
              checked={value === option.value}
              id={`option-${option.value}`}
              name="options"
              type="radio"
              onChange={() => onChange(option.value)}
            />
            <label className="option" htmlFor={`option-${option.value}`}>
              {option.icon && <option.icon className="h-4 w-4 mr-2" />}
              {option.label}
            </label>
          </React.Fragment>
        ))}
        <span
          className="background"
          style={{
            left: `${(options.findIndex((opt) => opt.value === value) / options.length) * 100}%`,
            width: `${100 / options.length}%`,
          }}
        />
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .filter-switch {
    border: 2px solid rgb(255, 255, 255);
    border-radius: 30px;
    position: relative;
    display: flex;
    align-items: center;
    height: 50px;
    max-width: 100%;
    width: 100%;
    flex-wrap: nowrap;
    overflow: hidden;
    padding: 0 8px; /* added padding to create spacing on left and right */
    box-sizing: border-box;

    @media (max-width: 600px) {
      height: 45px;
      font-size: 16px;
    }
  }
  .filter-switch input {
    display: none;
  }
  .filter-switch label {
    flex: 1;
    text-align: center;
    cursor: pointer;
    border: none;
    border-radius: 30px;
    position: relative;
    overflow: hidden;
    z-index: 1;
    transition: all 0.5s;
    font-weight: 500;
    font-size: clamp(14px, 2vw, 18px);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    padding: 0 6px; /* slight horizontal padding inside each label */
  }
  .filter-switch .background {
    position: absolute;
    height: calc(100% - 8px);
    background-color:rgb(255, 255, 255);
    padding: 0 8px;
    top: 4px;
    border-radius: 30px;
    transition: left 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }
  .filter-switch label {
    color: #7d7d7d;
  }
  .filter-switch input:checked + label {
    color: #212121;
    font-weight: bold;
  }
`;

export default Radio;
