import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";

export default function Users() {

    const [users, setUsers] = useState([]);
    const numberUsers = 7

    useEffect(() => {
        axios.get(`https://randomuser.me/api/?results=${numberUsers}`).then((res) => {
            console.log(res.data.results)
            setUsers(res.data.results)
        }).catch((err) => {
            console.log(err)
        })
    },[])

    const renderUsers = () => {
        return users.map((i: any) => (
            <User key={i.id.value}>
                <main>
                    <img src={i.picture.large} alt={i.name.name}/>
                    <span>{i.name.first} {i.name.last}</span>
                </main>
                <div>
                    <p>email: {i.email}</p>
                    <p>usuário: {i.login.username}</p>
                    <p>Idade: {i.dob.age}</p>
                </div>
            </User>
        ))
    }

    return <Container>{users.length > 0 ? renderUsers() : 'Carregando...'}</Container>
}

const Container = styled.main`
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

const User = styled.div`
    width: 300px;
    height: 220px;
    border: 1px solid #000;
    margin-right: 10px;
    margin-top: 10px;
    border-radius: 20px;

    display: flex;
    flex-direction: column;

    div{
        padding: 4px;
        height: 100%;
        display: flex;
        flex-direction: column;
    }

    main{
        display: flex;
        flex-direction: row;
    }

    img{
        width: 100px;
        height: 100px;
        border-radius: 50px;
    }

    span{
        width: 100%;
        height: 100%;

        display: flex;
        align-items: center;
        justify-content: center;

        font-size: 20px;
        font-weight: bold;
    }

    p {
        font-size: 17px;
    }

    
`