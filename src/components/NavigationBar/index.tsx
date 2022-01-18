import { useCallback, useEffect, useRef } from "react";
import { StyledNavigationBarWrapper, RedDot } from "./style";
import { DropDownIcon } from "@class101/ui";

const NavigationBar = () => {
    return (
        <StyledNavigationBarWrapper>
            <ul className="rightcategory">
              <li><h4>전체 카테고리</h4><DropDownIcon /></li>
              <li><h4>새해 다짐격파</h4><RedDot /></li>
              <li><h4>1월 가입혜택</h4><RedDot /></li>
              <li><h4>이벤트</h4></li>
              <li><h4>바로 수강</h4></li>
              <li><h4>신규 클래스</h4></li>
              <li><h4>오픈 예정</h4></li>
            </ul>
            <ul className="leftcategory">
              <li>시그니처</li>
              <li>키즈</li>
              <li>원포인트 클래스</li>
              
            </ul>
        </StyledNavigationBarWrapper>
    )
}

export default NavigationBar;