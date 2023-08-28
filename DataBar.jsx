import React from 'react'
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import DataProvider from './DataProvider';
import "./DataBarStyle.css";

const DataBar = (props) => {
    const { score } = props;

    // Cap the score value at 1500
    //const cappedValue = Math.min(score, 2000);

    // Calculate color as a constant yellow color
    const calcColor = (value, start, end) => {
        return 'hsl(60, 100%, 50%)'; // Yellow color
    }

    return (
        <DataProvider valueStart={0} valueEnd={score}>
            {(value) => (
                <div className="glowing-bar-container"> 
                    <CircularProgressbar
                        value={value} // Use cappedValue as progress
                        text={`${value.toFixed(2)}`} /* Display the cappedValue as a decimal */
                        circleRatio={0.7}
                        styles={{
                            trail: {
                                strokeLinecap: "butt",
                                transform: "rotate(-126deg)",
                                transformOrigin: "center center"
                            },
                            path: {
                                strokeLinecap: "butt",
                                transform: "rotate(-126deg)",
                                transformOrigin: "center center",
                                stroke: calcColor(value, 0, 120),
                            },
                            text: {
                                fill: "#ddd"
                            }
                        }}
                        strokeWidth={10}
                        className="glowing-path" 
                    />
                </div>
            )}
        </DataProvider>
    )
}

export default DataBar;