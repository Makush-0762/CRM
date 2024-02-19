import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Greeting() {
    return (
        <div className="greeting">
            <p>
                O HI!! If you wont to check my Dashboard,{' '}
                <NavLink to={`/Dashboard`}>
                    <strong>just click</strong>
                </NavLink>
            </p>
        </div>
    );
}
