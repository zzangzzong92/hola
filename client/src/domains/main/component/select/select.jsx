import React from 'react';
import styles from './select.module.css';
import Select from 'react-select';

const customStyles = {
  control: (base, state) => {
    return {
      ...base,
      width: '125px',
      height: '38px',
      display: 'flex',
      justifyContent: 'center',
      background: 'white',
      borderRadius: '36px',
      boxShadow: 'none',
      border: state.hasValue ? '1px solid #00b9ae' : '1px solid #E3E3E3',
      '&:hover': {
        border: '1px solid #d1d1d1',
      },
    };
  },
  singleValue: (provided, state) => ({
    ...provided,
    color: state.hasValue ? '#00b9ae' : '#646464',
  }),
  indicatorSeparator: (base) => ({ ...base, display: 'none' }),
  valueContainer: (provided, state) => {
    return {
      ...provided,
      height: '38px',
      display: 'flex',
      alignItems: 'center',
      marginLeft: '8px',
      fontWeight: '700',
      fontSize: '16px',
      letterSpacing: '0.03em',
      color: state.hasValue ? '#00b9ae' : '#646464',
    };
  },
  placeholder: (provided, state) => {
    return {
      ...provided,
      color: '#646464',
      fontWeight: 500,
    };
  },
  menu: (provided, state) => ({
    ...provided,
    minWidth: '125px',
    background: '#FFFFFF',
    border: '1.5px solid #E3E3E3',
    borderRadius: '25px',
    boxShadow: null,
    padding: '10px',
  }),
  option: (provided, state) => {
    return {
      ...provided,
      fontWeight: '700',
      fontSize: '16px',
      lineHeight: '26px',
      letterSpacing: '-0.03em',
      color: state.isSelected ? '#00b9ae' : '#646464',
      backgroundColor: 'null',
      cursor: 'pointer',
    };
  },
  menuList: (base) => ({
    ...base,
    overflow: 'hidden',
  }),
};

const CommonSelect = ({ value, options, placeholder, onChange }) => {
  return (
    <div className={styles.selectWrapper}>
      <Select
        placeholder={placeholder}
        value={value}
        styles={customStyles}
        isSearchable={false}
        options={options}
        onChange={onChange}
      />
    </div>
  );
};

export default CommonSelect;
