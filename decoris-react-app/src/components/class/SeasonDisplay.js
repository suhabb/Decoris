import React from 'react';
import "../css/SeasonDisplay.css"

const seasonConfig = {
    winter: {
        text: 'Burr, it is chilly',
        iconName: 'snowflake'

    },
    summer: {
        text: 'Lets hit the beach',
        iconName: 'sun'
    }

}

const getSeason = (lat, month) => {

    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat > 0 ? 'winter' : 'summer';
    }
}

const SeasonDisplay = (props) => {
    const season = getSeason(props.latitude, new Date().getMonth);
    const { text, iconName } = seasonConfig[season];

    return (
        <div className={`season-display ${season}`}>
            <i className={`icon-left massive ${iconName} icon`} />
            <h3>{text}</h3>
            <i className={`icon-right massive ${iconName} icon`} />
        </div>
    );
}

export default SeasonDisplay