import React from 'react';
import '../style_main/SectionStatistic.css';
import { ReactComponent as ArrowUp } from '../../../images/arrow-up.svg';

export default function SectionStatistic({
    id,
    title,
    count,
    icon,
    percent,
    activeNow,
}) {
    const iconGlob = Object.values(icon)[0];

    console.log(activeNow);

    return (
        <div className={`sectionStat__body ${id === 2 ? 'body__border' : ''}`}>
            <div className="stat__body-icon">
                <span className="stat__stroke-icon">
                    <img
                        src={iconGlob}
                        alt="icon section"
                        className="stat__icon"
                    />
                </span>
            </div>
            <div className="stat__body-info">
                <p className="info__title">{title}</p>
                <p className="info__count">{count}</p>
                <p className="info__percent">
                    {percent ? (
                        <>
                            <span
                                className={`inf_arrow ${
                                    percent < 15
                                        ? 'perc_color-r'
                                        : 'perc_color-g'
                                }`}
                            >
                                <ArrowUp
                                    stroke={
                                        percent < 15 ? '#D0004B' : '#00AC4F'
                                    }
                                    class={percent < 15 ? 'arrow_down' : ''}
                                />{' '}
                                {percent}%
                            </span>
                            <span className="inf__month"> this month</span>
                        </>
                    ) : (
                        <div className="statistics__online-body">
                            {activeNow.map((photo, index) => (
                                <span
                                    className="statistic__body-img"
                                    key={index}
                                >
                                    <img
                                        src={photo}
                                        className="statistic__online"
                                        alt="user online"
                                    />
                                </span>
                            ))}
                        </div>
                    )}
                </p>
            </div>
        </div>
    );
}
