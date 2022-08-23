import {Box, Stack} from "@mui/material";
import CustomersReviewCarousel from "../CustomersReviewCarousel";
import {customersReviewData} from "../../public/orangeData/orangeData";
import CustomersReviewCard from "../CustomersReviewCard";

export default function CustomersReview() {
    return (
        <>
            <Box sx={{display: {xs: 'flex', md: 'none'}}}>
                <CustomersReviewCarousel/>
            </Box>

            <Stack direction="row" spacing={0} justifyContent="space-evenly" sx={{display: {xs: 'none', md: 'flex'}}}>
                {
                    customersReviewData.map((v, index) =>
                        <div key={index}>
                            <CustomersReviewCard
                                text={v.text}
                                userImage={v.userImage}
                                vector={v.vector}
                                color={v.color}/>
                        </div>
                    )
                }
            </Stack>
        </>
    )
}
  