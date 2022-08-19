import React, { useState, useEffect } from "react";
import ReactSelect from "react-select";

const Select = ({ items, data, setData, disabled, search = () => {} }) => {
    const [current, setCurrent] = useState(null);

    useEffect(() => {
        mapSelect().forEach((item) => {
            if (item.value === data) {
                setCurrent(item);
            }
        });
    }, [items, data]);

    const mapSelect = () => {
        const mapped = items.map((item) => ({
            label: item.name,
            value: item.id,
        }));
        return mapped;
    };

    const handleChange = (element) => {
        setCurrent(element);
        setData(parseInt(element.value));
    };

    return (
        <ReactSelect
            menuPortalTarget={document.body}
            options={mapSelect()}
            onChange={handleChange}
            value={current}
            onKeyDown={search}
            onFocus={search}
            placeholder="See Available Options"
            isDisabled={disabled}
            isSearchable
            maxMenuHeight={200}
        />
    );
};

export default Select;
