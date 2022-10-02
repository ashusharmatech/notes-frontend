import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import NoteItem from './NoteItem';

const NotesList = () => {
	const [ notes, setNotes ] = useState([]);

	const getNotes = async () => {
		var initialNotes = [ { id: '1 ', value: 'first note' }, { id: '2', value: 'second note' } ];
		setNotes(initialNotes);
	};

	useEffect(() => {
		console.log("Getting notes ");
		getNotes();
	}, []);

	if (!notes || notes.length === 0) {
		return <p>No notes yet</p>;
	}

	return (
		<AnimatePresence>
			{notes.map((item) => (
				<motion.div key={item.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
					<NoteItem key={item.id} item={item} />
				</motion.div>
			))}
		</AnimatePresence>
	);
};

export default NotesList;
