import React from 'react';

export default props => (
    <div className='well'>
        <h4>{props.name}</h4>
        <p>{props.description}</p>
        <a target='_blank' href={`https://maps.google.com/?q=${props.location}`}><button type="button" class="btn btn-info" id="button">Map</button></a>
    </div>
);