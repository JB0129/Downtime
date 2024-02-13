import React from "react";
import { ToggleBtn, ToggleContainer } from "./Toggle.style";

interface OwnProps {
  isOn: boolean;
  handleToggleFunc: () => void;
  positive?: string;
  negative?: string;
}

const Toggle: React.FC<OwnProps> = ({
  isOn,
  handleToggleFunc,
  positive,
  negative,
}) => {
  // 외부에서 아래 주석된 내용을 추가로 입력해서 props로 내려줘야합니다.
  // const [isOn, setOn] = useState<boolean>(false);
  // const handleToggleFunc = () => setOn(!isOn)

  return (
    <ToggleContainer isOn={isOn} onClick={handleToggleFunc}>
      <ToggleBtn isOn={isOn} />
      {isOn ? positive : negative}
    </ToggleContainer>
  );
};

export default Toggle;
