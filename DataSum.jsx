import React, {useState, useEffect} from 'react';
import DataBar from '../dataSummary/DataBar';
import DataBar2 from '../dataSummary/DataBar2';

const DataSum = (props) => {

const [reviewScore, setReviewScore] = useState(10);
const [reviewScore2, setReviewScore2] = useState(10);
const [reviewScore3, setReviewScore3] = useState(10);
const [reviewScore4, setReviewScore4] = useState(10);
const [reviewScore5, setReviewScore5] = useState(10);
const [reviewScore6, setReviewScore6] = useState(10);
const [reviewScore7, setReviewScore7] = useState(10);
const [reviewScore8, setReviewScore8] = useState(10);




const fetchContent = () => {
    setReviewScore(1360);
    setReviewScore2(942.18);
    setReviewScore3(18);
    setReviewScore4(3740);
    setReviewScore5(64.52);
    setReviewScore6(36.55);
    setReviewScore7(0.61);
    setReviewScore8(166.99);




}

useEffect(() => {
    fetchContent();
}, []);
    return(
        <div style={{overflow: "hidden"}}>
            <p style= {{position: "relative", top: "20px", fontWeight:"bold", fontSize: "30px", color: "white"}}>Data Analytics</p>
            <i style= {{position: "relative", top: "30px", fontWeight:"bold", fontSize: "25px", color: "white"}}>Calories</i>

            <p style= {{position: "relative", top: "20px", left: "340px", fontSize: "30px", color: "white"}}>Your Calories Today</p>

            <div style={{position: "relative", top: "60px", left:"350px"}}>
            <div className="row mt-3">
                <div className="col-md-2">
                    <DataBar score={reviewScore}></DataBar>
                </div>
            </div>
            </div>

            <p style= {{position: "absolute", top: "230px", left: "980px", fontSize: "30px", color: "white"}}>Your Average Calories</p>

            <div style={{position: "relative", top: "-210px", left:"1000px"}}>
            <div className="row mt-3">
                <div className="col-md-2">
                    <DataBar score={reviewScore2}></DataBar>
                </div>
            </div>
            </div>

            <p style= {{position: "absolute", top: "570px", left: "280px", fontSize: "30px", color: "white"}}>Your Lowest Calories Recorded</p>

            <div style={{position: "relative", top: "-150px", left:"350px"}}>
            <div className="row mt-3">
                <div className="col-md-2">
                    <DataBar score={reviewScore3}></DataBar>
                </div>
            </div>
            </div>

            <p style= {{position: "absolute", top: "570px", left: "930px", fontSize: "30px", color: "white"}}>Your Highest Calories Recorded</p>


            <div style={{position: "relative", top: "-410px", left:"1000px"}}>
            <div className="row mt-3">
                <div className="col-md-2">
                    <DataBar score={reviewScore4}></DataBar>
                </div>
            </div>
            </div>

            <p style= {{position: "absolute", top: "950px", left: "340px", fontSize: "30px", color: "white"}}>Your Distance Today</p>


            <div style={{position: "relative", top: "-310px", left:"350px"}}>
            <div className="row mt-3">
                <div className="col-md-2">
                    <DataBar2 score={reviewScore5}></DataBar2>
                </div>
            </div>
            </div>

            <p style= {{position: "absolute", top: "950px", left: "980px", fontSize: "30px", color: "white"}}>Your Average Distance</p>

            <div style={{position: "relative", top: "-570px", left:"1000px"}}>
            <div className="row mt-3">
                <div className="col-md-2">
                    <DataBar2 score={reviewScore6}></DataBar2>
                </div>
            </div>
            </div>

            <p style= {{position: "absolute", top: "1300px", left: "320px", fontSize: "30px", color: "white"}}>Your Minimum Distance</p>


            <div style={{position: "relative", top: "-490px", left:"350px"}}>
            <div className="row mt-3">
                <div className="col-md-2">
                    <DataBar2 score={reviewScore7}></DataBar2>
                </div>
            </div>
            </div>

            <p style= {{position: "absolute", top: "1300px", left: "980px", fontSize: "30px", color: "white"}}>Your Longest Distance</p>


            <div style={{position: "relative", top: "-760px", left:"1000px"}}>
            <div className="row mt-3">
                <div className="col-md-2">
                    <DataBar2 score={reviewScore8}></DataBar2>
                </div>
            </div>
            </div>
        </div>

    )
}

export default DataSum;