import styled from "styled-components";

export const CarouselWrapper = styled.div`
  width: 100%;
  height: 25em;
  background-color: #ff5946;

`
export const Container = styled.div`
  width: 100%;
  height: 100%;
  
  padding: 0px 40px;
  display: flex;
  align-items: center;
`
export const CardContainer = styled.div`
  width:100em;
  height: 100%;
  position:relative;
`
export const Card = styled.div`
  width:100%;
  height: 23em;
  background-color: black;
  position: absolute;
  top: 50px;
 
 
` 

export const TitleBox = styled.div `
  height: 60%;
  width: 10em;
  padding: 95px 0px 0px 60px;
  display: flex;
  flex-direction: column;
  
  font-weight: bold;
  
  font-size: 31px;
  color: white;
 
  span:nth-of-type(1) {
  word-break: break-all;
  line-height: 44px;
  }

  span:nth-of-type(2) {
    color: rgba(255, 255, 255, 0.6);
    font-size: 16px;
    margin-top: 10px;
  }

`
export const Contents = styled.div `
  height: 100%;
  width:100%;
  display: flex;
  flex-direction: column;  
`
export const ProgressBarContainer = styled.div `
    width: 65%;
    position: reative;
    bottom: 0;
    padding: 10px 0px 0px 60px;
    display: flex;
    align-items: center;

    span {
      color: white;
      margin-right: 10px;
      font-size: 10px;
    }
`