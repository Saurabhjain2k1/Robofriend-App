import React from 'react';
import Card from './Card';

const CardList = ({Robot}) => {
    const CardArray = Robot.map((user,i)=>{
        return <Card key={i} id={Robot[i].id} name={Robot[i].name} email={Robot[i].email} />
    })
    return (
        <div>
            {CardArray}

        </div>

    );
}

export default CardList;