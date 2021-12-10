import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleComplete, deleteTodo } from '../feauters/todoSlice';

const TodoItem = ({ id, title, completed }) => {

	const dispatch = useDispatch();

	const handleToggleComplete = () => {
		dispatch(toggleComplete({id : id, completed: !completed}))
	}

	const handleDeleteTodo = () => {
		dispatch(deleteTodo({id}))
	}

	return (
		<li className={`list-group-item ${completed && 'list-group-item-success'}`}>
			<div className='d-flex justify-content-between'>
				<span className='d-flex align-items-center'>
					<input	type='checkbox' className='mr-3' checked={completed} onChange={handleToggleComplete}>
					</input>
					{title}
				</span>
				<button className='btn btn-danger' onClick={handleDeleteTodo}>Delete</button>
			</div>
		</li>
	);
};

export default TodoItem;
