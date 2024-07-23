import styled from "styled-components";

// todo; // this is package imports

export const DivStyles = styled.div({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "25px",
  borderRadius: "7px",
  fontSize: "15px",
  backgroundColor: "white",
});

const TypesOfDealContain = ({ Icons, title, NextArrow, description }) => {
  return (
    <DivStyles>
      <div className="my-5 text-red-600 ">
        <Icons size={60} />
      </div>

      <h2 className="header_3 uppercase">
        <span> {title} </span>
        <NextArrow className="w-6 h-6" />
      </h2>
      <div>
        <p>{description}</p>
      </div>
    </DivStyles>
  );
};

export default TypesOfDealContain;
