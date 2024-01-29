import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import ErrorComponent from "../components/error/ErrorComponent";

function Error() {
    return (
        <div>
            <Header />
            <main>
                <ErrorComponent />
            </main>
            <Footer />
        </div>
    );
}

export default Error;