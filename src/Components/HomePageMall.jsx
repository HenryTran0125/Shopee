/* eslint-disable no-unused-vars */
import styled from 'styled-components';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const Container = styled.div`
    margin-top: 12px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
`

const Headlines = styled.div`
    display: flex;
`

const Policy = styled.div`
    display: flex;
`

function HomePageMall() {
    return (
        <Container>
            <Headlines>
                <Policy>
                    <div>
                        <h1>shopee mall</h1>
                    </div>
                    <div>
                        <img src='/ShopeeMall/FreeReturn.png' />
                        <span>15-Day Free Returns</span>
                    </div>
                    <div>
                        <img src='/ShopeeMall/Authentic.png'/>
                        <span>100% Authentic</span>
                    </div>
                    <div>
                        <img src='/ShopeeMall/FreeShipping.png'/>
                        <span>Free Shipping</span>
                    </div>
                </Policy>

                <div>
                    <span>See All</span>
                    <ChevronRightIcon />
                </div>
            </Headlines>

            <div></div>
        </Container>
    )
}

export default HomePageMall
