import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

function InterestMap() {
    useEffect(() => {
        const wordWrap = document.getElementById("check");
        const list = [
            ["foo", 21, "http://yahoo.com"],
            ["lo", 26, "http://google.com?q=foo"],
            ["jhjhj", 20, "http://google.com?q=foo"],
            ["jhajk", 10, "http://google.com?q=foo"],
            ["foo", 22, "http://google.com?q=foo"],
            ["mkkaxc", 40, "http://google.com?q=foo"],
            ["Google", 100, "http://google.com"],
            ["dcc", 16, "http://google.com?q=foo"],
            ["jiua", 63, "http://google.com?q=foo"],
            ["ca", 41, "http://google.com?q=foo"],
            ["csa", 35, "http://google.com?q=foo"],
            ["ac", 23, "http://google.com?q=foo"],
            ["scac", 14, "http://google.com?q=foo"],
            ["bnjb", 12, "http://google.com?q=foo"],
            ["Youtube", 94, "http://youtube.com"],
            ["focacaso", 19, "http://google.com?q=foo"],
            ["ljkk", 24, "http://google.com?q=foo"],
            ["focac so", 32, "http://google.com?q=foo"],
            ["focsc o", 31, "http://google.com?q=foo"],
            ["man", 35, "http://google.com?q=foo"],
            ["focsacso", 42, "http://google.com?q=foo"],
            ["gog", 24, "http://google.com?q=foo"],
            ["focsacso", 33, "http://google.com?q=foo"],
            ["teli", 50, "http://google.com?q=foo"],
            ["mali", 59, "http://google.com?q=foo"],
            ["chei", 75, "http://google.com?q=foo"],
            ["helio", 54, "http://google.com?q=foo"],
            ["oloi", 30, "http://google.com?q=foo"],
            ["poli", 12, "http://google.com?q=foo"],
            ["check", 79, "http://google.com?q=foo"],
            ["master", 36, "http://google.com?q=foo"],
            ["darte", 56, "http://google.com?q=foo"],
            ["helio", 46, "http://google.com?q=foo"],
            ["belio", 12, "http://google.com?q=foo"],
        ];

        // Check if WordCloud function is available
        const initializeWordCloud = () => {
            if (window.WordCloud) {
                window.WordCloud(wordWrap, {
                    list: list,
                    fontFamily: "Lato, serif",
                    rotateRatio: 0.5,
                    shape: "star",
                    rotationSteps: 2,
                    backgroundColor: "#ffffff",
                    gridSize: 5,
                    weightFactor: 1,
                    hover: window.drawBox,
                    shape: "circle",
                    click: function (item) {
                        console.log(item[0] + ": " + item[1] + " Url:" + item[2]);
                        window.open(item[2], "_blank");
                    },
                });
            } else {
                console.error("WordCloud function is not available");
            }
        };

        // Check if the script is already loaded
        if (!window.WordCloud) {
            // Wait until the script is loaded
            const script = document.createElement('script');
            script.src = '/assets/vendor/wordCloud/wordCloud.js';
            script.type = 'text/javascript';
            script.onload = initializeWordCloud;
            document.body.appendChild(script);
        } else {
            initializeWordCloud();
        }
    }, []);

    return (
        <>
            <Helmet>
                <script
                    src="/assets/vendor/wordCloud/wordCloud.js"
                    type="text/javascript"
                />
            </Helmet>
            <div className="col-md-6 mb-4">
                <div className="dash-card">
                    <div className="dash-card-header">
                        <a href="#" className="btn btn-full">Interest Map Tag Cloud <i className="bi bi-chevron-right"></i></a>
                    </div>
                    <div className="dash-card-body">
                        <div className="tag-cloud-wrapper">
                            <div id="check" className="wordcloud">
                                <span></span>
                            </div>
                        </div>
                    </div>
                    <div className="dash-card-footer">
                        <ul className="interest-list">
                            <li><span>100</span> URI Vested</li>
                            <li><span>300</span> Video Watched</li>
                            <li><span>1</span> hour <span>30</span> minutes time spend</li>
                            <li><span>100</span> Comments made</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default InterestMap;
