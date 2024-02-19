import React from "react";
import Banner from "../components/banner/Banner";
import Collapse from "../components/collapse/Collapse";
import aboutBannerImage from "../assets/images/banner/aboutBanner.png";
import CollapseData from "../datas/collapses.json";

function About () {
    return (
        <main>
            <Banner image={aboutBannerImage} titre="Image de bannière" />
            <div className="collapse">
                <div className="collapse__dropdown">
                {CollapseData.map((item) => {
                    return (
                        <div key={item.id}>
                            <Collapse content={item.content} title={item.title} />
                        </div>
                        )
                    })}
                </div>
            </div>
        </main>
    )
}

export default About;