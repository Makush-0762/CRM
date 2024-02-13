import React from 'react';
import '../style_main/Statistics.css';
import statistic_DB from '../../../DB/statistics_DB.js';
import Section from './SectionStatistic.js';

export default function Statistics() {
    console.log(statistic_DB);
    return (
        <div className="statistics__body">
            {statistic_DB.map((section) => {
                return (
                    <Section
                        key={section.id}
                        {...section}
                    />
                );
            })}
        </div>
    );
}
