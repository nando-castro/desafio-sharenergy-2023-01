import { useState } from "react";
import styled from "styled-components";

export default function Cats(){

    const [https] = useState([100,101,102,103,200,201,202,203,204,206,207,300,301,302,303,304,305,307,308,400,401,402,403,404,405,406,407,408,409,410,411,412,413,414,415,416,417,418,420,421,422,423,424,425,426,429,431,444,450,451,497,498,499,500,501,502,503,504,506,507,508,509,510,511,521,522,523,525,599]);

    const renderStatus = () => {
        return https.map((i: any) => (
            <Content key={i} href={`https://http.cat/${i}`}>
                <p>{i}</p>
            </Content>
        ))
    }
    
    return <Container>{renderStatus()}</Container>
}

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;

    padding: 20px;
    overflow-y: scroll;

    ::-webkit-scrollbar {
    display: none;
    }
`

const Content = styled.a`
    min-width: 20%;
    height: 20%;
    border: 1px solid #000;

    display: flex;
    align-items: center;
    justify-content: center;
`