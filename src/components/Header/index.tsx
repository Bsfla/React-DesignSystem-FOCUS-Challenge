import { useCallback, useEffect, useRef } from "react";
import { StyledHeaderWrapper, ClassStore, SearchForm, StyledNavigation } from "./style";
import { Headline3 } from "@class101/ui";
import { SearchIcon } from "@class101/ui";

const Header = () => {
    return (
       <StyledHeaderWrapper>
           <Headline3>CLASS101</Headline3>
           <ClassStore>
               <h4>클래스</h4>
               <h4>스토어</h4>
           </ClassStore>
           <SearchForm>
               <input placeholder="찾으시는 취미가 있으신가요?" />
               <SearchIcon />
           </SearchForm>
           <StyledNavigation>
               <span>크리에이터 지원</span>
               <span>기업교육</span>
               <span>로그인</span>
           </StyledNavigation>
       </StyledHeaderWrapper>
    )
}

export default Header;