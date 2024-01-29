import React from "react";
import Header from "../components/header/Header";
import Banner from "../components/banner/Banner";
import Collapse from "../components/collapse/Collapse";
import Footer from "../components/footer/Footer";
import aboutBannerImage from "../assets/images/banner/aboutBanner.png";
import CollapseData from "../datas/collapses.json";

function About () {
    return (
        <div>
            <Header />
            <main>
                <Banner image={aboutBannerImage} titre="Image de bannière" />
                <div>
                    <div>
                    {CollapseData.map((item) => {
                        return (
                            <div key={item.id}>
                                <Collapse content={item.content} title={item.title} />
                            </div>
                            );
                        })}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default About;