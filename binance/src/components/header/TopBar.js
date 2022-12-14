import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import { useState } from "react";
import {
  LogoDrop,
  BuyCrypto,
  Trade,
  Derivatives,
  FinancedropDown,
  institutional,
} from "./DropBar";

export default function TopBar() {
  const [menuHover, setMenuHover] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  console.log(menuHover);

  //TODO: Image 공통 컴포넌트로 빼기
  return (
    <STContainer>
      <span className="logo">BIANCE</span>
      <STCoinInformation>
        <STToggleBox
          onMouseOver={() => {
            let mouseOver = [...menuHover];
            mouseOver[0] = true;
            setMenuHover(mouseOver);
          }}
          onMouseOut={() => {
            let mouseOut = [...menuHover];
            mouseOut[0] = false;
            setMenuHover(mouseOut);
          }}
        >
          <Image
            className="menu"
            width={20}
            src={
              menuHover[0]
                ? require("../../../src/images/menu_hover.png")
                : require("../../../src/images/menu.png")
            }
            alt="menu"
          />
          <Image
            className="triangle menu"
            width={8}
            src={
              menuHover[0]
                ? require("../../../src/images/triangle_up.png")
                : require("../../../src/images/triangle_down.png")
            }
            alt="toggle"
          />
          <div className="dropDownMenu">
            {LogoDrop.map((list) => (
              <div className="dropContentBox" key={list.key}>
                <div className="title">{list.title}</div>
                <div className="content">{list.items}</div>
              </div>
            ))}
          </div>
        </STToggleBox>
        <STToggleBox
          onMouseOver={() => {
            let mouseOver = [...menuHover];
            mouseOver[1] = true;
            setMenuHover(mouseOver);
          }}
          onMouseOut={() => {
            let mouseOut = [...menuHover];
            mouseOut[1] = false;
            setMenuHover(mouseOut);
          }}
        >
          <span>Buy Crypto</span>
          <Image
            className="triangle"
            width={8}
            src={
              menuHover[1]
                ? require("../../../src/images/triangle_up.png")
                : require("../../../src/images/triangle_down.png")
            }
            alt="toggle"
          />
          <div className="dropDownMenu">
            {BuyCrypto.map((list) => (
              <div className="dropContentBox" key={list.key}>
                <div className="title">{list.title}</div>
                <div className="content">{list.items}</div>
              </div>
            ))}
          </div>
        </STToggleBox>
        <span className="markets">Markets</span>
        <STToggleBox
          onMouseOver={() => {
            let mouseOver = [...menuHover];
            mouseOver[2] = true;
            setMenuHover(mouseOver);
          }}
          onMouseOut={() => {
            let mouseOut = [...menuHover];
            mouseOut[2] = false;
            setMenuHover(mouseOut);
          }}
        >
          <span className="trade">Trade</span>
          <Image
            className="triangle"
            width={8}
            src={
              menuHover[2]
                ? require("../../../src/images/triangle_up.png")
                : require("../../../src/images/triangle_down.png")
            }
            alt="toggle"
          />
          <div className="dropDownMenu">
            {Trade.map((list) => (
              <div className="dropContentBox" key={list.key}>
                <div className="title">{list.title}</div>
                <div className="content">{list.items}</div>
              </div>
            ))}
          </div>
        </STToggleBox>
        <STToggleBox
          onMouseOver={() => {
            let mouseOver = [...menuHover];
            mouseOver[3] = true;
            setMenuHover(mouseOver);
          }}
          onMouseOut={() => {
            let mouseOut = [...menuHover];
            mouseOut[3] = false;
            setMenuHover(mouseOut);
          }}
        >
          <span>Derivatives</span>
          <Image
            className="triangle"
            width={8}
            src={
              menuHover[3]
                ? require("../../../src/images/triangle_up.png")
                : require("../../../src/images/triangle_down.png")
            }
            alt="toggle"
          />
          <div className="dropDownMenu">
            {Derivatives.map((list) => (
              <div className="dropContentBox" key={list.key}>
                <div className="title">{list.title}</div>
                <div className="content">{list.items}</div>
              </div>
            ))}
          </div>
        </STToggleBox>
        <STToggleBox
          onMouseOver={() => {
            let mouseOver = [...menuHover];
            mouseOver[4] = true;
            setMenuHover(mouseOver);
          }}
          onMouseOut={() => {
            let mouseOut = [...menuHover];
            mouseOut[4] = false;
            setMenuHover(mouseOut);
          }}
        >
          <span>Earn</span>
          <Image
            className="triangle"
            width={8}
            src={
              menuHover[4]
                ? require("../../../src/images/triangle_up.png")
                : require("../../../src/images/triangle_down.png")
            }
            alt="toggle"
          />
        </STToggleBox>
        <STToggleBox
          className="dropDown"
          onMouseOver={() => {
            let mouseOver = [...menuHover];
            mouseOver[5] = true;
            setMenuHover(mouseOver);
          }}
          onMouseOut={() => {
            let mouseOut = [...menuHover];
            mouseOut[5] = false;
            setMenuHover(mouseOut);
          }}
        >
          <span>Finance</span>
          <Image
            className="triangle"
            width={8}
            src={
              menuHover[5]
                ? require("../../../src/images/triangle_up.png")
                : require("../../../src/images/triangle_down.png")
            }
            alt="toggle"
          />
          <div className="dropDownMenu">
            {FinancedropDown.map((list) => (
              <div className="dropContentBox" key={list.key}>
                <div className="title">{list.title}</div>
                <div className="content">{list.items}</div>
              </div>
            ))}
          </div>
        </STToggleBox>
        <span className="nft">NFT</span>
        <STToggleBox
          onMouseOver={() => {
            let mouseOver = [...menuHover];
            mouseOver[6] = true;
            setMenuHover(mouseOver);
          }}
          onMouseOut={() => {
            let mouseOut = [...menuHover];
            mouseOut[6] = false;
            setMenuHover(mouseOut);
          }}
        >
          <span>Institutional</span>
          <Image
            className="triangle"
            width={8}
            src={
              menuHover[6]
                ? require("../../../src/images/triangle_up.png")
                : require("../../../src/images/triangle_down.png")
            }
            alt="toggle"
          />
          <div className="dropDownMenu">
            {institutional.map((list) => (
              <div className="dropContentBox" key={list.key}>
                <div className="title">{list.title}</div>
                <div className="content">{list.items}</div>
              </div>
            ))}
          </div>
        </STToggleBox>
        <span>Feed</span>
      </STCoinInformation>
      <STUserInformation>
        {/* <span>Wallet</span>
        <span>Orders</span> */}
        {/* <Link href={"/"}>
          <Image
            width={30}
            src={require("../../../src/images/useravar.png")}
            alt="사용자 정보"
          />
        </Link> */}
        <Link href={"/login"}>
          <span>Log In</span>
        </Link>
        <Link href={"/register"}>
          <span className="register">Register</span>
        </Link>
        <span>Downloads</span>
        <span>English</span>
        <span>USD</span>
        <Image
          className="helpIcon"
          width={20}
          src={require("../../../src/images/help.png")}
          alt="help"
        />
        <Image
          className="settingIcon"
          width={20}
          src={require("../../../src/images/setting.png")}
          alt="setting"
        />
      </STUserInformation>
    </STContainer>
  );
}

const STContainer = styled.div`
  grid-area: header;

  display: flex;
  background-color: #fafafa;
  padding: 20px 0;
  .logo {
    margin-right: 10px;
    margin-left: 20px;
    font-weight: 600;
    font-size: larger;
    color: #f0b909;
  }
  & span {
    :hover {
      color: #cd9d27;
      cursor: pointer;
    }
  }
  .header {
    grid-area: header;
  }
`;

const STCoinInformation = styled.div`
  display: flex;
  align-items: center;
  & span {
    margin-right: 5px;
    font-size: 15px;
  }
  .markets {
    margin-right: 20px;
  }
  .nft {
    margin-right: 20px;
  }
`;

const STToggleBox = styled.div`
  margin-right: 30px;
  cursor: pointer;
  /* position: relative; */

  &span {
  }
  .triangle {
    /* position: absolute; */
    /* top: 7px; */
    &.menu {
      margin-left: 5px;
      cursor: pointer;
    }
  }
  & img {
  }
  &:hover {
    .dropDownMenu {
      box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
      position: absolute;
      display: flex;
      flex-direction: column;
      justify-content: center;
      background-color: white;
      width: 400px;
      /* left: 0; */
      top: 50px;
      z-index: 100;
    }
  }
  .dropDownMenu {
    display: none;
    padding: 30px;
  }
  .dropContentBox {
    margin-bottom: 10px;
  }
  .title {
    font-size: 18px;
  }
  .content {
    font-size: 12px;
    color: gray;
  }
`;

const STUserInformation = styled.div`
  display: flex;
  position: absolute;
  right: 0;
  & span {
    font-size: 15px;

    margin-right: 10px;
  }
  .register {
    background-color: #fcd536;
    padding: 8px;
    border-radius: 5px;
  }
  .helpIcon {
    margin-right: 15px;
    cursor: pointer;
  }
  .settingIcon {
    margin-right: 20px;
    cursor: pointer;
  }
`;
