import React from 'react';
import styled from "styled-components";
import { Avatar } from "@material-ui/core";
import { AccessTime, HelpOutline, Search } from "@material-ui/icons";

function Header() {
    return (
        <HeaderContainer>
            {/* Header Left*/}
            <HeaderLeft>
                <HeaderAvatar
                    // TODO: Add onClick
                />
                <AccessTime />
            </HeaderLeft>

            {/*Header Search*/}
            <HeaderSearch>
                <Search />
                <input placeholder="Search ..."/>
            </HeaderSearch>

            {/*Header right*/}
            <HeaderRight>
                <HelpOutline />
            </HeaderRight>
        </HeaderContainer>
    )
}

export default Header;


const HeaderContainer = styled.div`
    display: flex;
    position: fixed;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0;
    background-color: var(--slack-color);
    color: white;
`;

//HeaderLeft
const HeaderLeft = styled.div`
    flex: 0.3;
    display: flex;
    align-items: center;
    margin-left: 20px;

    >.MuiSvgIcon-root { //targeting the material-ui icons inside HeaderLeft container
        margin-left: auto;
        margin-right: 30px;
    }
`;
//HeaderLeft->Avatar
const HeaderAvatar = styled(Avatar)`
    cursor: pointer;

    :hover {
        opacity: 0.8;
    }
`;

//HeaderSearch
const HeaderSearch = styled.div`
    flex: 0.4;
    opacity: 1;
    border-radius: 6px;
    background-color: #421f44;
    text-align: center;
    display: flex;
    padding: 0 10px;
    color: gray;
    border: 1px gray solid;

    > input {
        background-color: transparent;
        border: none;
        margin-left: 10px;
        text-align: left;
        min-width: 30vw;
        outline: 0;
        color: white;
    }
`;

const HeaderRight = styled.div`
    flex: 0.3;
    display: flex;
    align-items: flex-end;

    > .MuiSvgIcon-root {
        margin-left: auto;
        margin-right: 30px;
    }
`;

