import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons';
const ButtonAdd = () => (
    <button className="button-add">
        <FontAwesomeIcon icon={faPlus} />
    </button>
)
export default ButtonAdd;