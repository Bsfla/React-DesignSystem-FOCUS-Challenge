import { useCallback, useEffect, useRef } from "react";
import { CarouselWrapper, Container,CardContainer, Card, TitleBox, Contents, ProgressBarContainer } from "./style";
import { ProgressBar } from "@class101/ui";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { white } from "@class101/ui/dist/core/Colors";




const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
}

interface Props {
    data: Array<{
      id: number;
      title: string;
      subtitle: string;
      img: string;
      bgColor: string;
      badge?: string;
    }>;
  }

const Carousel = ({ data }: Props) => {
    return (
        
          <CarouselWrapper>
             <Container>
                 <CardContainer>
                  <Card />
                 </CardContainer>
                 <Contents>
                   <TitleBox>
                    <span>미라클 모닝 패키지 지금 신청하면 할인</span>
                    <span>최고의 후기로 선정되면 6개월 동안 쿠폰이 계속</span>
                   </TitleBox>
                   <ProgressBarContainer>
                       <span>5 | 10</span>
                       <ProgressBar value={30} height={1} barColor={white}/>
                   </ProgressBarContainer>
                 </Contents>
         
             </Container>
          </CarouselWrapper>
       
    )
}

export default Carousel;
