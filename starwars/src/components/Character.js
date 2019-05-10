import React from 'react';

function Character(props) {
    return (
        <div className='char-info'>
            <p>
                <strong>Name: </strong> {props.character.name}
            </p>
            <p>
                <strong>Affiliation: </strong> {props.character.affiliation}
            </p>
            <p>
                <strong>Species: </strong> {props.character.species}
            </p>
        </div>
    );
}

export default Character;