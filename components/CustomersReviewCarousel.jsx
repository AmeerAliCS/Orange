import ReactCardCarousel from "react-card-carousel";
import CustomersReviewCard from "./CustomersReviewCard";
import {customersReviewData} from "../public/orangeData/orangeData";

const CustomersReviewCarousel = () => {
    const CONTAINER_STYLE = {
        position: "relative",
        height: "50vh",
        width: "100%",
        display: "flex",
        flex: 1,
        justifyContent: "center",
        alignItems: "middle",
        marginBottom: 10
    }
    return (
        <div style={CONTAINER_STYLE}>
            <ReactCardCarousel autoplay={true} autoplay_speed={2500}>
                {
                    customersReviewData.map((v, index) =>
                        <div key={index}>
                            <CustomersReviewCard text={v.text} userImage={v.userImage} vector={v.vector}
                                                 color={v.color}/>
                        </div>)
                }
            </ReactCardCarousel>
        </div>
    );
}

export default CustomersReviewCarousel;