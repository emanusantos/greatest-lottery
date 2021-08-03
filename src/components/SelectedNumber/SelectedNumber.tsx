import React from 'react'
import { SelectedNumber } from "./SelectedNumberStyles";

interface SelectedNumberProps {
    bgc: boolean;
    number: number;
    clicked: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

const SelectedNumbers = ({
    number,
    clicked,
    bgc
}: SelectedNumberProps): React.ReactElement => {
  return (
    <SelectedNumber onClick={clicked} data-number={number} bgc={bgc}>
      {number < 10 ? `0${number}` : number}
    </SelectedNumber>
  )
}

export default SelectedNumbers;