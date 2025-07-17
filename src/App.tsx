import s from "./App.module.css"
import { Icons } from "./components/components";
import { Buttons } from "./components/components"
import { Group } from "./components/components"
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
      <Group type="HGroup" horizontalgroupclass={s.horizontalgroup}>
        <div>
          <Icons type="x40" texttype="right">
            <img src={logo} alt="" />
            our company icon
          </Icons>
        </div>
        <div>
          <Buttons type="TButton" buttonsize="small" variant="primarybtn" {...props}>
            Primary
          </Buttons>
        </div>
        <div>
          <Buttons type="TButton" buttonsize="medium" variant="secondarybtn" {...props}>
            Secondary
          </Buttons>
        </div>
      </Group>
      <Group type="VGroup" >
        <div>
          <Icons type="x40" texttype="right">
            <img src={logo} alt="" />
            our company icon
          </Icons>
        </div>
        <div>
          <Buttons type="TButton" buttonsize="small" variant="primarybtn" {...props}>
            Primary
          </Buttons>
        </div>
        <div>
          <Buttons type="TButton" buttonsize="medium" variant="secondarybtn" {...props}>
            Secondary
          </Buttons>
        </div>
      </Group>
    </div>
  );
}

export default App;
