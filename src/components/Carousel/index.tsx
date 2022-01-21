import { CarouselWrapper, Container,CardContainer, Card, TitleBox, Contents, ProgressBarContainer } from "./style";
import { ProgressBar } from "@class101/ui";
import "slick-carousel/slick/slick.css";
import { useRef } from "react";
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
    autoplaySpeed: 2000,
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
    const sliderRef : any = useRef(null);
    return (
        <CarouselWrapper>
          <Slider 
            ref={sliderRef}
            {...settings}
           >
            {data.map((el) => {
              return ( 
             <Container key={el.id}>
                
                 <Contents>
                   <TitleBox>
                    <span>{el.title}</span>
                    <span>{el.subtitle}</span>
                   </TitleBox>
                   <ProgressBarContainer>
                       <span>{el.id | data.length}</span>
                       <ProgressBar value={30} height={1} barColor={white}/>
                   </ProgressBarContainer>
                 </Contents>
             </Container>
              )})}
             </Slider>
          </CarouselWrapper>
       
    )
}

export default Carousel;
