import React, {
    useState
} from 'react';

const AddMeasure = props => {
    const [selection, setSelection] = useState({
        bodypart_id: 1,
        name: 'biceps',
        value: '',
        date: '',
    });
    const handleChange = e => {
        e.preventDefault();
        const {
            id
        } = e.target;
        const {
            value
        } = e.target;
        const dict = {
            biceps: 1,
            triceps: 2,
            head: 3,
            wrist: 4,
            legs: 5,
            chest: 6,
        };

        if (id === 'measure-select') {
            setSelection({
                bodypart_id: dict[value],
                name: value,
                value: selection.value,
                date: selection.date,
            });
        }

        if (id === 'measure-input') {
            setSelection({
                bodypart_id: selection.bodypart_id,
                name: selection.name,
                value,
                date: selection.date,
            });
        }

        if (id === 'measure-date') {
            setSelection({
                bodypart_id: selection.bodypart_id,
                name: selection.name,
                value: selection.value,
                date: value,
            });
        }
        return true;
    };

    const handleSubmit = e => {
        e.preventDefault();
        return selection
    };
    return ( <
        div >

        <
        h3 className = "p-2" > add a new measure < /h3> <
        div className = "d-flex justify-content-center my-1" >

        <
        form onSubmit = {
            handleSubmit
        }
        className = "flex-column d-flex align-items-center" >
        <
        h4 > type: < /h4> <
        select id = "measure-select"
        onChange = {
            handleChange
        } >
        <
        option > biceps < /option> <
        option > triceps < /option> <
        option > legs < /option> <
        option > head < /option> <
        option > chest < /option> <
        option > wrist < /option>

        <
        /select>

        <
        label htmlFor = "testing" > < h4 > how much ? : < /h4></label >
        <
        input type = "text"
        aria - label = "testing"
        placeholder = "add measure like: 12cm"
        id = "measure-input"
        onChange = {
            handleChange
        }
        required / >

        <
        h4 > date: < /h4> <
        input type = "date"
        id = "measure-date"
        onChange = {
            handleChange
        }
        required / >
        <
        input type = "submit"
        className = "btn btn-primary"
        value = "Add" / >
        <
        /form> <
        /div>

        <
        /div>
    );
};

export default AddMeasure;