import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Loading_rotation } from "./Loading.style";

const Loading_rotate: React.FC = () => {
  return (
    <Loading_rotation>
      <FontAwesomeIcon icon={faSpinner} size="3x" />
    </Loading_rotation>
  );
};

export default Loading_rotate;
