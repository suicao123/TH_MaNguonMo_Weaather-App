import { memo } from "react";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import HomePageContent from "../ui/HomePageContent";

function HomePage() {
    return (
        <>
            <h1>Bài kiểm tra - DH52201173</h1>
            <Header />
            <HomePageContent />
            <Footer />
        </>
    )
}

export default memo(HomePage)
