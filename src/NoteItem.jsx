import React from 'react'
import Card from './shared/Card'

const NoteItem = ({ item }) => {
    return (
        <Card>
            <div className='num-display'>
                {item.id}
            </div>
            
            <div className='text-display'>{item.value}</div>
        </Card>
    )
}

export default NoteItem