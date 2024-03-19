import Banner from "../../sections/common/banner";
import SectionVideo3 from "../../sections/company/pricing/section-video3";
import SectionAboutCompany1 from "../../sections/home/index/section-about-company1";
import { bannerData } from "../../../globals/banner";
import { video } from "../../../globals/data";
import { useEffect } from "react";
import { loadScript } from "../../../globals/constants";

function PricingPage() {

    useEffect(()=>{
        loadScript("js/custom.js")
    })

    return (
        <>
            <Banner _data={bannerData.pricing} />
            <SectionAboutCompany1 />
            <SectionVideo3 _data={video.pricing} />
   
        </>
    )
}

export default PricingPage;