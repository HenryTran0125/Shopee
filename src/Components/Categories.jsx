/* eslint-disable no-unused-vars */
import styled from "styled-components";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { useState } from "react";

const List = [{
    name: "Women's Apparel",
    image: "WomensClothes.png",
},{
    name: "Mobile & Gadgets",
    image: "MobileGadgets.jpg",
},{
    name: "Computers & Peripherals",
    image: "Computer.png",
},{
    name: "Home Appliances",
    image: "HomeAppliances.png",
},{
    name: "Food & Beverages",
    image: "Food&B.png",
},{
    name: "Kids Fashion",
    image: "KidsFashion.png",
},{
    name: "Sports & Outdoors",
    image: "sports.jpg",
},{
    name: "Cameras & Drones",
    image: "Camera.png",
},{
    name: "Women's Bags",
    image: "WomenBags.png",
},{
    name: "Jewerly & Accessories",
    image: "Jewerly.png",
},{
    name: "Women's Shoes",
    image: "WomenShoes.png",
},{
    name: "Automotive",
    image: "Automotive.jpg",
},{
    name: "Dining, Travel & Services",
    image: "Dining&Travel.png",
},{
    name: "Miscellaneous",
    image: "Miscellaneous.png",
},{
    name: "Men's Wear",
    image: "MensWear.png",
},{
    name: "Home & Living",
    image: "Home&Living.png",
},{
    name: "Beauty & Personal Care",
    image: "Beauty&PersonalCare.png",
},{
    name: "Health & Wellness",
    image: "Health.jpg",
},{
    name: "Toys, Kids & Babies",
    image: "Toys.png",
},{
    name: "Video Games",
    image: "VideoGames.png",
},{
    name: "Hobbies & Books",
    image: "Hobbies.jpg",
},{
    name: "Pet Food & Supplies",
    image: "PetFood.jpg",
},{
    name: "Men's Bags",
    image: "MensBag.png",
},{
    name: "Watches",
    image: "Watches.png",
},{
    name: "Men's Shoes",
    image: "MensShoes.png",
},{
    name: "ShopeePay Near Me",
    image: "NearMe.png",
},{
    name: "Travel & Luggage",
    image: "Luggage.png",
},]

const CategoriesAlignment = styled.div`
    margin-top: 1.25rem;
    background-color: #ffffff;
`

const CategoriesText = styled.div`
    font-size: 1rem;
    color: rgba(0,0,0, .54);
    font-weight: 500;
    text-transform: uppercase;
    display: flex;
    justify-content: start;
    border-bottom: 1px solid rgba(0,0,0, .05);
    padding: 1.25rem;
`

const ListPosition = styled.div`
    position: relative;
`

const ListAlignment = styled.div`
    overflow: hidden;
`

const ListContainer = styled.ul`
    display: flex;
    justify-content: flex-start;
    align-items: stretch;
    overflow: hidden;
    flex-wrap: wrap;
    width: 145%; 
    padding: 0;
    margin: 0;
    list-style-type: none;
    transform: translate(${props => props.currentPosition}px,0);
    /* transition: transform 0.4s ease-in-out; */
    transition: all 500ms ease 0s;
    height: 100%;
`

const CategoriesElement = styled.li`
    display: flex;
    flex-direction: column;
    border: 1px solid rgba(0,0,0, .05);
    justify-content: center;
    align-items: center;
    flex: 0 1 calc(2% - 1rem);
    cursor: pointer;
    /* box-shadow: -10px 10px 10px 0 rgba(0,0,0, .12); */
`

const ImageContainer = styled.div`
    height: 151px;
    width: 120px;
`

const Image = styled.div`
    background-image: url(/Categories/${props => props.ImageUrl});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    height: 100%;
`

const TextContainer = styled.div`
    width: 70%;
    height: 3.125rem;
    text-align: center;
`

const Text = styled.div`
    color: rgba(0,0,0, .8);
    font-size: .875rem;
    text-decoration: none;
    line-height: 1.25rem;
    height: 2.5rem;
    margin-bottom: .625rem;
`

const Button = styled.button`
    position: absolute;
`



function Categories() { 

    const [position, setPosition] = useState(0);
    const [value, setValue] = useState(true);
    const [isHovered, setIsHovered] = useState(false);
    const [isChecked, setIsChecked] = useState(null);

    // const checkIndex = 

    function onHover(){
        setIsHovered(check => !check)
    }

    function checkHover(index){
        setIsChecked(check => index !== check ? index : 0)
        console.log(isChecked)
    }

    function prevOnClick(){
        setPosition(currPosition => currPosition + 502);
        setValue(currValue => !currValue);
        console.log(position)
    }

    function nextOnClick(){
        setPosition(currPosition => currPosition - 502);
        setValue(currValue => !currValue);
        console.log(position)
    }

    return (
        <CategoriesAlignment>
            <CategoriesText>categories</CategoriesText>
            <ListPosition >
                <ListAlignment>
                    <ListContainer currentPosition= {position}>
                        {List.map((item, index) => 
                            <CategoriesElement onMouseEnter={() => checkHover(index+1)} onMouseLeave={() => checkHover(index+1)} style={{boxShadow: isChecked?"2px 2px 1px 0 rgba(0,0,0, .12)":""}} key={item.name} >
                                    <ImageContainer>
                                        <Image ImageUrl= {item.image}></Image>
                                    </ImageContainer>

                                    <TextContainer>
                                        <Text>{item.name}</Text>
                                    </TextContainer>
                            </CategoriesElement>
                        )}
                    </ListContainer>
                </ListAlignment>

                
                <ChevronRightIcon onClick={nextOnClick} onMouseEnter={onHover} onMouseLeave={onHover} style={{backgroundColor: '#fff', fontSize: "20px", borderRadius: "50%", position:"absolute", top: isHovered?"50%":"48%", right: isHovered?"-2%":"-1%", width: isHovered?"40px":"25px", height:isHovered?"40px":"25px", lineHeight:isHovered?"50px":"25px", marginTop:isHovered?"-25px":"-12.5px", cursor:"pointer", boxShadow: "0 1px 12px 0 rgba(0,0,0, .12)",transition: "all .1s cubic-bezier(.4,0,.6,1)" ,visibility: value?'visible':'hidden'}} />

                <ChevronLeftIcon onClick={prevOnClick} onMouseEnter={onHover} onMouseLeave={onHover} style={{backgroundColor: '#fff', fontSize:"20px",borderRadius: "50%",position:"absolute", top: isHovered?"50%":"48%", left:isHovered?"-2%":"-1%",width: isHovered?"40px":"25px", height:isHovered?"40px":"25px", lineHeight:isHovered?"50px":"25px", marginTop:isHovered?"-25px":"-12.5px", cursor:"pointer", boxShadow: "0 1px 12px 0 rgba(0,0,0, .12)",transition: "all .1s cubic-bezier(.4,0,.6,1)", visibility: value?'hidden':'visible'}} />
            </ListPosition>
        </CategoriesAlignment>
    )
}

export default Categories
