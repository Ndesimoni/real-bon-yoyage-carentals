import styled from "styled-components";

export const ParagraphStyle = styled.span({
    textTransform: "capitalize",
    fontFamily: "monospace",
    fontSize: "initial",
    fontWeight: "lighter",
    color: "#3f6bd3",
});

export const CarInfoDetails = styled.div({
    margin: "5px 0px",
    padding: "2px 1px",
    fontSize: "12px",
    fontWeight: "bold",
    textTransform: "Uppercase",
    fontFamily: "roboto",
});

const CarDetailsFormFilled = ({ carDetailsFormFilled }) => {
    return (
        <div>
            <h1 className="font-extrabold text-3xl pb-5 capitalize p-2">
                make payment for {carDetailsFormFilled.name}
            </h1>
            <h2 className="px-3 capitalize font-bold text-red-600">
                please check if your booking information are correct ?
            </h2>

            <div className="py-3 mb-3 px-3">
                <CarInfoDetails>
                    name: <ParagraphStyle>nde simoni che</ParagraphStyle>
                </CarInfoDetails>
                <CarInfoDetails>Email:</CarInfoDetails>
                <CarInfoDetails>contact:</CarInfoDetails>
                <CarInfoDetails>State:</CarInfoDetails>
                <CarInfoDetails>Pickup location:</CarInfoDetails>
                <CarInfoDetails>DropOff location:</CarInfoDetails>
            </div>
        </div>
    );
};

export default CarDetailsFormFilled;


