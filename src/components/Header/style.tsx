import { FormGroup } from "@class101/ui";
import styled from "styled-components";

export const StyledHeaderWrapper = styled.header `
   width: 100%;
   padding: 4px 70px;
   display: flex;
   align-items: center;
   
`
export const ClassStore = styled.div `
   display: flex;
   margin-left: 20px;
   
   h4:nth-of-type(1) {
    font-size: 1.25rem;
    line-height: 1.625rem;
    font-weight: 700;
    color: #FF5600;
    cursor: pointer;
   }
   
  h4:nth-of-type(2) {
    font-size: 1.25rem;
    line-height: 1.625rem;
    font-weight: 700;
    margin-left: 20px;
    cursor: pointer;
  }
`
export const SearchForm = styled.form `
   margin-left: 40px;
   width: 25em;
   padding: 11.5px;
   display: flex;
   border-radius: 30px;
   background-color: #eeeeee;
   align-items: center;

   input {
       border: none;
       flex: 1;
       background-color: #eeeeee;
       font-size: 14px;
       outline:none;
   }
`

export const StyledNavigation = styled.div `
  margin-left: 10em;
  
  span {
      font-size: 14px;
      margin-right: 17px;
      cursor: pointer;
  }
`
