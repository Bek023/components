import s from "./App.module.css"
import { Icons } from "./components/components";
import { Buttons } from "./components/components"
import { Group } from "./components/components"
import archive from "./imgs/archive.png"
import compose from "./imgs/compose.png"
import draft from "./imgs/draft.png"
import inbox from "./imgs/inbox.png"
import sent from "./imgs/sent.png"
import trash from "./imgs/trash.png"
import like from "./imgs/like.png"
import message from "./imgs/message.png"
import shared from "./imgs/shared.png"
import sentder from "./imgs/sentder.png"
import logo from "./logo.png";
function App() {
  const props = {
    buttonclass: s.mybtn,
  }
  return (
    <div >
      <div className={s.appparent}>
        <Icons type="x40" texttype="right">
          <img src={logo} alt="" />
          our company icon
        </Icons>
        <Buttons type="TButton" buttonsize="small" variant="primarybtn" {...props}>
          Primary
        </Buttons>
        <Buttons type="TButton" buttonsize="medium" variant="secondarybtn" {...props}>
          Secondary
        </Buttons>
        <Buttons type="TButton" buttonsize="large" variant="successbtn" {...props}>
          Success
        </Buttons>
        <Buttons type="TButton" buttonsize="small" variant="dangerbtn" {...props}>
          Danger
        </Buttons>
        <Buttons type="TButton" buttonsize="medium" variant="warningbtn" {...props}>
          Warning
        </Buttons>
        <Buttons type="TButton" buttonsize="large" variant="infobtn" {...props}>
          Info
        </Buttons>
        <Buttons type="TButton" buttonsize="small"
          variant="lightbtn" {...props}>
          Light
        </Buttons>
        <Buttons type="IButton">
          <Icons type="x40" >
            <img src={logo} alt="" />
          </Icons>
          <span>our company</span>
        </Buttons>
        <Buttons
          path="/about"
          type="TButton"
          variant="primarybtn"
          buttonsize="large"
          borderRadius="12px"
          width="180px"
          height="55px"
          padding="10px 25px"
        >
          Подробнее
        </Buttons>
        <Buttons
          path="/profile"
          type="IButton"
          variant="primarybtn"
          borderRadius="12px"
          padding="10px"
          width="120px"
          gap="10px"
          height="40px"
        >
          <Icons type="x40" >
            <img src={logo} alt="" />
          </Icons>
          Профиль
        </Buttons>

      </div>
      <Group type="HGroup" horizontalgroupclass={s.horizontalgroup} gap="8px">
        <Buttons type="IButton">
          <Icons type="x20" texttype="right">
            <img src={like} alt="" />
            189
          </Icons>
        </Buttons>
        <Buttons type="IButton">
          <Icons type="x20" texttype="right">
            <img src={message} alt="" />
            26
          </Icons>
        </Buttons>
        <Buttons type="IButton">
          <Icons type="x20" texttype="right">
            <img src={shared} alt="" />
            12
          </Icons>
        </Buttons>   <Buttons type="IButton">
          <Icons type="x20" texttype="right">
            <img src={sentder} alt="" />
            6
          </Icons>
        </Buttons>
      </Group>
      <div className={s.paerntapp}>
        <Group type="VGroup" verticalgroupclass={s.verticalgroup} >
          <div>
            <Buttons type="IButton">
              <Icons type="x20" texttype="right">
                <img src={compose} alt="" />
                Compose
              </Icons>
            </Buttons>
          </div>
          <div>
            <Buttons type="IButton">
              <Icons type="x20" texttype="right">
                <img src={inbox} alt="" />
                Inbox
              </Icons>
            </Buttons>
          </div>
          <div>
            <Buttons type="IButton">
              <Icons type="x20" texttype="right">
                <img src={sent} alt="" />
                Sent
              </Icons>
            </Buttons>
          </div>
          <div>
            <Buttons type="IButton">
              <Icons type="x20" texttype="right">
                <img src={draft} alt="" />
                Draft
              </Icons>
            </Buttons>
          </div>
          <div>
            <Buttons type="IButton">
              <Icons type="x20" texttype="right">
                <img src={archive} alt="" />
                Archive
              </Icons>
            </Buttons>
          </div>
          <div>
            <Buttons type="IButton">
              <Icons type="x20" texttype="right">
                <img src={trash} alt="" />
                Trash
              </Icons>
            </Buttons>
          </div>

        </Group >
      </div>

    </div >
  );
}

export default App;
