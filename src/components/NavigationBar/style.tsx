import styled from "styled-components";



export const StyledNavigationBarWrapper = styled.div`
  width: 100%;
  padding: 0px 70px;
  display: flex;
  
  
  .rightcategory {
      display: flex;
      list-style: none;
      padding-left: 0;
      margin-top: 0;

      li {
         margin-right: 10px;
         cursor: pointer;
         font-size: 15px;
         display: flex;
         align-items: center;
         position: relative;
         padding: 0px 8px;
       
        
       
      }
    }
 .leftcategory {
        display: flex;
        list-style: none;
        padding-left: 0;
        margin-top: 0;
        margin-left: 30px;

        li {
            margin-right: 30px;
            cursor: pointer;
            font-size: 15px;
            display: flex;
            align-items: center;
           
        }
    }
      
`
export const RedDot = styled.div `
  width: 4px;
  height: 4px;
  background-color: red;
  border-radius: 50%;
  position: absolute;
  top: 18px;
  right: 0;
`