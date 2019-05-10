import React from 'react';

function Character(props) {
    return (
        <div className='char-info'>
            <p>
                <strong>Name: </strong> {props.character.name}
            </p>
            <p>
                <strong>Gender: </strong> {props.character.gender}
            </p>
            <p>
                <strong>Height: </strong> {props.character.height}
            </p>
        </div>
    );
}

export default Character;