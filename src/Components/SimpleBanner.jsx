/* eslint-disable no-unused-vars */
import styled from 'styled-components';


const Container = styled.div`
    margin-top: 24px;
    width: 100%;
`

function SimpleBanner() {
    return (
        <Container>
            <img src="SimpleBanner.png" />
        </Container>
    )
}

export default SimpleBanner
