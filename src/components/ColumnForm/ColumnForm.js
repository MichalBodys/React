import styles from './ColumnForm.module.scss'
import { useState } from 'react';
import Button from './../Button/Button';
import TextInput from './../TextInput/TextInput';
import { useDispatch } from 'react-redux';
import { addColumn } from '../../redux/ColumRedux';

const ColumnForm = props => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [icon, setIcon] = useState('');
    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addColumn({ title, icon , listId: props.listId }));
        setTitle('');
        setIcon('');

    }

	return (
        <form className={styles.columnForm} onSubmit={handleSubmit}>
            <span className={styles.title}>Title:</span> <TextInput value={title} onChange={e => setTitle(e.target.value)} />
            <span className={styles.title}>Icon:</span> <TextInput value={icon} onChange={e => setIcon(e.target.value)} />
            <Button>ADD Column</Button>
        </form>
	);
};

export default ColumnForm