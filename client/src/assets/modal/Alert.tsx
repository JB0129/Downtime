import React from "react";
import { useRecoilValue, useResetRecoilState } from "recoil";
import { alertAtom } from "../../recoil/atoms";
import {
  BtnBox,
  CheckBtn,
  ModalBackground,
  ModalContainer,
  ModalContents,
} from "./Modal.style";

const AlertModal: React.FC = () => {
  // 알림창 내용
  const alertContent = useRecoilValue(alertAtom);

  // 알림창 내용 초기화
  const resetAlert = useResetRecoilState(alertAtom);

  // 알림창 확인(창 닫기)
  const handleConfirm = () => resetAlert();

  return (
    <ModalBackground>
      <ModalContainer>
        <ModalContents>
          <span>{alertContent}</span>
        </ModalContents>
        <BtnBox>
          <CheckBtn onClick={handleConfirm}>확인</CheckBtn>
        </BtnBox>
      </ModalContainer>
    </ModalBackground>
  );
};

export default AlertModal;
